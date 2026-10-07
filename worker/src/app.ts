import { parseChatInput } from '../../shared/chat'
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
}

export type Deps = {
  store: Store
  chat: Chat
  /** tra cứu tư liệu (tin + Wikipedia) có giới hạn kích thước */
  retrieve: (question: string) => Promise<Research>
  config: Config
  now: () => Date
  randomSuffix: () => string
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
    'access-control-allow-methods': 'GET, POST, OPTIONS',
    'access-control-allow-headers': 'content-type',
    'access-control-expose-headers': 'retry-after',
    'access-control-max-age': '86400',
    vary: 'origin',
  }
}

async function sha256(text: string): Promise<ArrayBuffer> {
  return crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
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
