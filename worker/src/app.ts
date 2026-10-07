import { parseChatInput } from '../../shared/chat'
import { encodeSyncCode, normalizeSyncCode, SYNC_LIMITS } from '../../shared/sync'
import { isTopicId } from '../../shared/taxonomy'
import { chatReply } from './chat'
import { GroqError, type Chat } from './groq'
import { compose, normalizeQuestion, PipelineError, toExplainer, type Research } from './pipeline'
import type { Store } from './store'

export type Config = {
  allowedOrigins: string[]
  dailyLimit: number
  dailyLimitPerIp: number
  model: string
  /** Hỏi nhanh (bong bóng chat): model nhẹ hơn, quota riêng */
  chatModel: string
  chatDailyLimit: number
  chatDailyLimitPerIp: number
  /** giới hạn số mã đồng bộ tạo mới mỗi ngày */
  syncCreateDaily: number
  syncCreatePerIp: number
}

export type Deps = {
  store: Store
  chat: Chat
  /** tra cứu tư liệu (tin + Wikipedia) có giới hạn kích thước */
  retrieve: (question: string) => Promise<Research>
  config: Config
  now: () => Date
  randomSuffix: () => string
  randomBytes: (n: number) => Uint8Array
}

const MAX_QUESTION = 300
const RESEARCH_TTL_MS = 6 * 60 * 60 * 1000

export function originAllowed(origin: string | null, allowed: string[]): boolean {
  if (!origin) return false
  return allowed.some((rule) => (rule.endsWith(':*') ? origin.startsWith(rule.slice(0, -1)) && /:\d+$/.test(origin) : origin === rule))
}

function corsHeaders(origin: string | null, allowed: string[]): Record<string, string> {
  if (!originAllowed(origin, allowed)) return {}
  return {
    'access-control-allow-origin': origin!,
    'access-control-allow-methods': 'GET, POST, PUT, OPTIONS',
    'access-control-allow-headers': 'content-type, authorization',
    'access-control-expose-headers': 'retry-after',
    'access-control-max-age': '86400',
    vary: 'origin',
  }
}

async function sha256(text: string): Promise<ArrayBuffer> {
  return crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
}

const hex = (buf: ArrayBuffer) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')

/** Khóa lưu trong D1 cho một mã đồng bộ (không lưu mã gốc). */
export const syncKey = async (code: string) => hex(await sha256(`djl-sync:${code}`))

/** Mã đồng bộ từ header `authorization: Bearer <mã>` (không đặt trong URL để khỏi lọt vào log). */
const bearerCode = (request: Request) => normalizeSyncCode(request.headers.get('authorization')?.replace(/^Bearer\s+/i, '') ?? '')

/** Đọc `{ progress, baseRev? }`; progress phải là object `version: 2` và không quá SYNC_LIMITS.bytes. */
async function readSyncBody(request: Request): Promise<{ data: string; baseRev?: number } | { status: number; message: string }> {
  const raw = await request.text()
  if (raw.length > SYNC_LIMITS.bytes * 2) return { status: 413, message: 'Dữ liệu tiến độ quá lớn.' }
  let body: { progress?: unknown; baseRev?: unknown }
  try {
    body = JSON.parse(raw) as typeof body
  } catch {
    return { status: 400, message: 'Dữ liệu không hợp lệ.' }
  }
  const p = body?.progress as { version?: unknown } | undefined
  if (typeof p !== 'object' || p === null || Array.isArray(p) || p.version !== 2) return { status: 400, message: 'Tiến độ sai định dạng.' }
  const data = JSON.stringify(p)
  if (new TextEncoder().encode(data).length > SYNC_LIMITS.bytes) return { status: 413, message: 'Dữ liệu tiến độ quá lớn.' }
  return { data, baseRev: Number.isInteger(body.baseRev) ? (body.baseRev as number) : undefined }
}

async function ipKey(request: Request): Promise<string> {
  const ip = request.headers.get('cf-connecting-ip') ?? 'unknown'
  const hash = new Uint8Array(await sha256(`djl:${ip}`))
  return `ip:${[...hash.slice(0, 8)].map((b) => b.toString(16).padStart(2, '0')).join('')}`
}

export async function handle(request: Request, deps: Deps): Promise<Response> {
  const { config } = deps
  const origin = request.headers.get('origin')
  const cors = corsHeaders(origin, config.allowedOrigins)
  const json = (body: unknown, status = 200, extra: Record<string, string> = {}) =>
    new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', ...cors, ...extra } })
  const fail = (status: number, code: string, message: string, extra: Record<string, string> = {}) => json({ error: { code, message } }, status, extra)

  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors })

  const url = new URL(request.url)
  const path = url.pathname.replace(/\/+$/, '')

  try {
    if (request.method === 'GET' && path === '/api/health') return json({ ok: true, ai: true })

    if (request.method === 'GET' && path === '/api/explainers') {
      const q = url.searchParams.get('q')?.trim().slice(0, 100) || undefined
      const topicParam = url.searchParams.get('topic') ?? ''
      const topic = isTopicId(topicParam) ? topicParam : undefined
      const items = await deps.store.list({ q, topic, limit: 50 })
      return json({ items }, 200, { 'cache-control': 'public, max-age=60' })
    }

    const slugMatch = path.match(/^\/api\/explainers\/([a-z0-9-]{1,120})$/)
    if (request.method === 'GET' && slugMatch) {
      const e = await deps.store.getBySlug(slugMatch[1])
      return e ? json(e, 200, { 'cache-control': 'public, max-age=3600' }) : fail(404, 'not_found', 'Không tìm thấy bài.')
    }

    if (request.method === 'POST' && path === '/api/explain') {
      const body = (await request.json().catch(() => null)) as { question?: unknown } | null
      const question = typeof body?.question === 'string' ? body.question.trim().replace(/\s+/g, ' ') : ''
      if (question.length < 8) return fail(400, 'too_short', 'Câu hỏi quá ngắn.')
      if (question.length > MAX_QUESTION) return fail(400, 'too_long', `Câu hỏi tối đa ${MAX_QUESTION} ký tự.`)

      const norm = normalizeQuestion(question)
      const cached = await deps.store.findByNorm(norm)
      if (cached) return json({ explainer: cached, cached: true })

      const now = deps.now()
      const day = now.toISOString().slice(0, 10)
      const quota = await reserve(deps.store, day, await ipKey(request), '', config.dailyLimitPerIp, config.dailyLimit)
      if (!quota.ok)
        return fail(429, 'daily_limit', 'Đã hết lượt tạo bài AI hôm nay. Bạn vẫn đọc được các bài có sẵn.', { 'retry-after': String(secondsUntilMidnightUtc(now)) })

      return await refundIfRejected(quota.refund, async () => {
        let r = await deps.store.getResearch(norm, RESEARCH_TTL_MS, now)
        if (!r) {
          r = await deps.retrieve(question)
          // không có tư liệu → AI vẫn trả lời bằng kiến thức chung (bài không có nguồn, giao diện cảnh báo).
          // Chỉ cache khi có tư liệu để lần sau còn tra cứu lại.
          if (r.sources.length) await deps.store.putResearch(norm, r, now)
          else console.log(JSON.stringify({ event: 'no_sources_fallback', question }))
        }
        const composed = await compose(deps.chat, config.model, question, r)
        const explainer = toExplainer(composed, r, { question, model: config.model, today: day, suffix: deps.randomSuffix() })
        await deps.store.insert(explainer, norm, now)
        console.log(JSON.stringify({ event: 'explainer_created', slug: explainer.slug, sources: explainer.sources.length }))
        return json({ explainer, cached: false }, 201)
      })
    }

    if (request.method === 'POST' && path === '/api/chat') {
      const input = parseChatInput(await request.json().catch(() => null))
      if (typeof input === 'string') return fail(400, 'bad_request', input)

      const now = deps.now()
      const day = now.toISOString().slice(0, 10)
      const quota = await reserve(deps.store, day, await ipKey(request), 'chat:', config.chatDailyLimitPerIp, config.chatDailyLimit)
      if (!quota.ok)
        return fail(429, 'daily_limit', 'Đã hết lượt hỏi nhanh hôm nay. Hãy thử lại vào ngày mai.', { 'retry-after': String(secondsUntilMidnightUtc(now)) })

      return await refundIfRejected(quota.refund, async () => {
        const reply = await chatReply(deps.chat, config.chatModel, input)
        if (!reply) return fail(502, 'empty_reply', 'AI chưa trả lời được. Hãy hỏi lại theo cách khác.')
        return json({ reply })
      })
    }

    if (path === '/api/sync') {
      const now = deps.now()
      if (request.method === 'POST') {
        const body = await readSyncBody(request)
        if ('status' in body) return fail(body.status, 'bad_request', body.message)
        const quota = await reserve(deps.store, now.toISOString().slice(0, 10), await ipKey(request), 'sync:', config.syncCreatePerIp, config.syncCreateDaily)
        if (!quota.ok) return fail(429, 'daily_limit', 'Đã tạo quá nhiều mã đồng bộ hôm nay. Hãy thử lại vào ngày mai.', { 'retry-after': String(secondsUntilMidnightUtc(now)) })
        const code = encodeSyncCode(deps.randomBytes(10))
        await deps.store.createProfile(await syncKey(code), body.data, now)
        return json({ code, rev: 1 }, 201)
      }

      if (request.method === 'GET' || request.method === 'PUT') {
        const code = bearerCode(request)
        if (!code) return fail(400, 'bad_code', 'Mã đồng bộ không đúng định dạng.')
        const key = await syncKey(code)
        const noStore = { 'cache-control': 'no-store' }
        const current = await deps.store.getProfile(key)
        if (!current) return fail(404, 'sync_not_found', 'Không tìm thấy mã đồng bộ này. Kiểm tra lại mã.')
        if (request.method === 'GET') return json({ progress: JSON.parse(current.data), rev: current.rev }, 200, noStore)

        const body = await readSyncBody(request)
        if ('status' in body) return fail(body.status, 'bad_request', body.message)
        if (body.baseRev === undefined) return fail(400, 'bad_request', 'Thiếu "baseRev".')
        const rev = await deps.store.updateProfile(key, body.data, body.baseRev, now)
        if (rev !== null) return json({ rev }, 200, noStore)
        // thiết bị khác đã ghi trước: trả bản mới nhất để client gộp rồi gửi lại
        const latest = (await deps.store.getProfile(key))!
        return json({ error: { code: 'conflict', message: 'Tiến độ vừa được cập nhật từ thiết bị khác.' }, progress: JSON.parse(latest.data), rev: latest.rev }, 409, noStore)
      }
    }

    return fail(404, 'not_found', 'Không có endpoint này.')
  } catch (err) {
    if (err instanceof PipelineError) return fail(err.code === 'out_of_scope' ? 422 : 502, err.code, err.message)
    if (err instanceof GroqError) {
      if (err.status === 429)
        return fail(429, 'rate_limited', 'AI đang quá tải (giới hạn miễn phí). Hãy thử lại sau ít phút.', { 'retry-after': String(err.retryAfter ?? 60) })
      console.log(JSON.stringify({ event: 'groq_error', status: err.status, message: err.message }))
      if (err.status === 401 || err.status === 403) return fail(503, 'ai_config', 'Máy chủ AI chưa được cấu hình đúng khóa API (GROQ_API_KEY).')
      return fail(502, 'upstream', 'Dịch vụ AI đang lỗi. Hãy thử lại sau.')
    }
    console.log(JSON.stringify({ event: 'unhandled', message: err instanceof Error ? err.message : String(err) }))
    return fail(500, 'internal', 'Lỗi máy chủ.')
  }
}

type Reservation = { ok: true; refund: () => Promise<void> } | { ok: false }

/**
 * Giữ chỗ 1 lượt gọi AI *trước* khi gọi (mỗi lần tăng bộ đếm là atomic trong D1, nên request song song không vượt quota).
 * Tăng bộ đếm IP trước: người đã hết lượt riêng không làm tăng bộ đếm chung của mọi người.
 */
export async function reserve(store: Store, day: string, ip: string, scope: string, perIp: number, global: number): Promise<Reservation> {
  const ipCounter = `${scope}${ip}`
  const globalCounter = `${scope}global`
  if ((await store.bumpUsage(day, ipCounter)) > perIp) return { ok: false }
  if ((await store.bumpUsage(day, globalCounter)) > global) {
    await store.bumpUsage(day, ipCounter, -1)
    return { ok: false }
  }
  return { ok: true, refund: async () => void (await Promise.all([store.bumpUsage(day, ipCounter, -1), store.bumpUsage(day, globalCounter, -1)])) }
}

/**
 * Groq từ chối request (rate limit, sai key, lỗi dịch vụ) → không tốn token → hoàn lượt.
 * AI đã trả lời nhưng nội dung không đạt (PipelineError) → vẫn tính lượt, tránh bị lợi dụng để đốt quota Groq.
 */
async function refundIfRejected<T>(refund: () => Promise<void>, run: () => Promise<T>): Promise<T> {
  try {
    return await run()
  } catch (err) {
    if (err instanceof GroqError) await refund()
    throw err
  }
}

function secondsUntilMidnightUtc(now: Date): number {
  const next = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1)
  return Math.ceil((next - now.getTime()) / 1000)
}
