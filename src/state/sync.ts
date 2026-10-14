import type { SyncPayload } from '../../shared/sync'
import type { PushResult } from '../lib/api'
import { adoptRemote, mergeProgress, type Progress } from './progress'
import type { SyncState } from './storage'

export type SyncApi = {
  pull: (code: string) => Promise<SyncPayload>
  push: (code: string, progress: Progress, baseRev: number) => Promise<PushResult>
}

/** Biến dữ liệu server (không tin cậy) thành Progress sạch: kiểm tra kiểu + bỏ id không còn tồn tại. */
export type CleanRemote = (raw: unknown) => Progress

const MAX_PUSH_ATTEMPTS = 3

/**
 * Một lượt đồng bộ:
 * - không có thay đổi chưa đẩy → kéo về; server mới hơn thì **thay** bản local (để bỏ lưu/bỏ hoàn thành… lan sang máy này).
 * - có thay đổi → đẩy lên kèm `rev` đã biết; thiết bị khác đã ghi trước (409) → gộp với bản server rồi đẩy lại.
 *   Ở chế độ `replace` (sau "Xóa tiến độ") không gộp, chỉ lấy `rev` mới rồi ghi đè.
 */
export async function syncStep(
  local: Progress,
  state: SyncState,
  api: SyncApi,
  clean: CleanRemote,
): Promise<{ progress: Progress; state: SyncState; /** key Groq đã mã hóa trên server; undefined = lượt này không kéo về */ secret?: string | null }> {
  if (!state.dirty) {
    const remote = await api.pull(state.code)
    const secret = remote.secret ?? null
    if (remote.rev === state.rev) return { progress: local, state, secret }
    return { progress: adoptRemote(local, clean(remote.progress)), state: { ...state, rev: remote.rev }, secret }
  }

  let progress = local
  let rev = state.rev
  for (let i = 0; i < MAX_PUSH_ATTEMPTS; i++) {
    const res = await api.push(state.code, progress, rev)
    if (res.ok) return { progress, state: { code: state.code, rev: res.rev, dirty: false } }
    rev = res.remote.rev
    if (!state.replace) progress = mergeProgress(progress, clean(res.remote.progress))
  }
  throw new Error('Tiến độ đang được cập nhật liên tục từ thiết bị khác. Hãy thử lại sau.')
}

/**
 * Key Groq gửi lên server đồng bộ ở dạng mã hóa AES-GCM, khóa = SHA-256 của mã đồng bộ (mã có 80 bit ngẫu nhiên).
 * Server chỉ lưu sha256 khác tiền tố của mã nên không tự giải mã được; ai có mã đồng bộ thì giải mã được.
 */
const aesKey = async (code: string) =>
  crypto.subtle.importKey('raw', await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`djl-groq:${code}`)), 'AES-GCM', false, ['encrypt', 'decrypt'])

export async function encryptSecret(text: string, code: string): Promise<string> {
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const data = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, await aesKey(code), new TextEncoder().encode(text)))
  return btoa(String.fromCharCode(...iv, ...data))
}

/** undefined nếu chuỗi hỏng hoặc sai mã. */
export async function decryptSecret(blob: string, code: string): Promise<string | undefined> {
  try {
    const bytes = Uint8Array.from(atob(blob), (c) => c.charCodeAt(0))
    return new TextDecoder().decode(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: bytes.slice(0, 12) }, await aesKey(code), bytes.slice(12)))
  } catch {
    return undefined
  }
}
