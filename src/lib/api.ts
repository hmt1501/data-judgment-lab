import type { Explainer } from '../content/explainer'

export type ExplainerSummary = Pick<Explainer, 'slug' | 'question' | 'title' | 'topic' | 'tldr' | 'origin' | 'asOf'>

const BASE = import.meta.env.VITE_API_BASE?.replace(/\/+$/, '')

/** Tính năng AI chỉ bật khi build có VITE_API_BASE. */
export const aiEnabled = !!BASE

export class ApiError extends Error {
  readonly status: number
  readonly code: string
  readonly retryAfter?: number

  constructor(status: number, code: string, message: string, retryAfter?: number) {
    super(message)
    this.status = status
    this.code = code
    this.retryAfter = retryAfter
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  if (!BASE) throw new ApiError(0, 'disabled', 'Tính năng AI chưa được cấu hình.')
  let res: Response
  try {
    res = await fetch(`${BASE}${path}`, init)
  } catch {
    throw new ApiError(0, 'network', 'Không kết nối được máy chủ AI. Kiểm tra mạng rồi thử lại.')
  }
  const body = (await res.json().catch(() => ({}))) as { error?: { code?: string; message?: string } }
  if (!res.ok) {
    const retry = Number(res.headers.get('retry-after'))
    throw new ApiError(res.status, body.error?.code ?? 'http', body.error?.message ?? `Lỗi máy chủ (${res.status}).`, Number.isFinite(retry) && retry > 0 ? retry : undefined)
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

/** Thông điệp thân thiện, kèm thời gian chờ nếu bị giới hạn. */
export function describeError(err: unknown): string {
  if (!(err instanceof ApiError)) return 'Có lỗi không mong muốn. Hãy thử lại.'
  if (err.status === 429 && err.retryAfter) {
    const wait = err.retryAfter >= 3600 ? `${Math.ceil(err.retryAfter / 3600)} giờ` : err.retryAfter >= 60 ? `${Math.ceil(err.retryAfter / 60)} phút` : `${err.retryAfter} giây`
    return `${err.message} (thử lại sau khoảng ${wait})`
  }
  return err.message
}
