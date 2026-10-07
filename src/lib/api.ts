import type { ChatInput, ChatReply } from '../../shared/chat'
import type { Explainer, ExplainerSummary } from '../../shared/explainer'
import type { SyncPayload } from '../../shared/sync'

const BASE = import.meta.env.VITE_API_BASE?.replace(/\/+$/, '')

/** Tính năng cần máy chủ (AI, đồng bộ tiến độ) chỉ bật khi build có VITE_API_BASE. */
export const apiEnabled = !!BASE
export const aiEnabled = apiEnabled

export class ApiError extends Error {
  readonly status: number
  readonly code: string
  readonly retryAfter?: number
  /** body JSON của phản hồi lỗi (vd. 409 khi đồng bộ kèm bản mới nhất trên server) */
  readonly body?: unknown

  constructor(status: number, code: string, message: string, retryAfter?: number, body?: unknown) {
    super(message)
    this.status = status
    this.code = code
    this.retryAfter = retryAfter
    this.body = body
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  if (!BASE) throw new ApiError(0, 'disabled', 'Máy chủ chưa được cấu hình.')
  let res: Response
  try {
    res = await fetch(`${BASE}${path}`, init)
  } catch {
    throw new ApiError(0, 'network', 'Không kết nối được máy chủ. Kiểm tra mạng rồi thử lại.')
  }
  const body = (await res.json().catch(() => ({}))) as { error?: { code?: string; message?: string } }
  if (!res.ok) {
    const retry = Number(res.headers.get('retry-after'))
    throw new ApiError(res.status, body.error?.code ?? 'http', body.error?.message ?? `Lỗi máy chủ (${res.status}).`, Number.isFinite(retry) && retry > 0 ? retry : undefined, body)
  }
  return body as T
}

export const listAiExplainers = (opts: { q?: string; topic?: string } = {}) => {
  const params = new URLSearchParams()
  if (opts.q) params.set('q', opts.q)
  if (opts.topic) params.set('topic', opts.topic)
  return request<{ items: ExplainerSummary[] }>(`/api/explainers?${params}`).then((r) => r.items)
}

export const getAiExplainer = (slug: string) => request<Explainer>(`/api/explainers/${encodeURIComponent(slug)}`)

export const askAi = (question: string) =>
  request<{ explainer: Explainer; cached: boolean }>('/api/explain', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ question }),
  })

export const askChat = (input: ChatInput, signal?: AbortSignal) =>
  request<ChatReply>('/api/chat', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(input),
    signal,
  }).then((r) => r.reply)

const syncHeaders = (code: string) => ({ 'content-type': 'application/json', authorization: `Bearer ${code}` })

/** Tạo mã đồng bộ mới, lưu tiến độ hiện tại lên server. */
export const createSync = (progress: unknown) =>
  request<{ code: string; rev: number }>('/api/sync', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ progress }),
  })

export const pullSync = (code: string) => request<SyncPayload>('/api/sync', { headers: syncHeaders(code), cache: 'no-store' })

export type PushResult = { ok: true; rev: number } | { ok: false; remote: SyncPayload }

/** Ghi tiến độ nếu server vẫn ở `baseRev`; thiết bị khác đã ghi trước → trả bản mới nhất để gộp. */
export async function pushSync(code: string, progress: unknown, baseRev: number, keepalive = false): Promise<PushResult> {
  try {
    const { rev } = await request<{ rev: number }>('/api/sync', {
      method: 'PUT',
      headers: syncHeaders(code),
      body: JSON.stringify({ progress, baseRev }),
      keepalive,
    })
    return { ok: true, rev }
  } catch (err) {
    if (err instanceof ApiError && err.status === 409) return { ok: false, remote: err.body as SyncPayload }
    throw err
  }
}

/** Thông điệp thân thiện, kèm thời gian chờ nếu bị giới hạn. */
export function describeError(err: unknown): string {
  if (!(err instanceof ApiError)) return 'Có lỗi không mong muốn. Hãy thử lại.'
  if (err.status === 429 && err.retryAfter) {
    const wait = err.retryAfter >= 3600 ? `${Math.ceil(err.retryAfter / 3600)} giờ` : err.retryAfter >= 60 ? `${Math.ceil(err.retryAfter / 60)} phút` : `${err.retryAfter} giây`
    return `${err.message} (thử lại sau khoảng ${wait})`
  }
  return err.message
}
