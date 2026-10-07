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
export async function syncStep(local: Progress, state: SyncState, api: SyncApi, clean: CleanRemote): Promise<{ progress: Progress; state: SyncState }> {
  if (!state.dirty) {
    const remote = await api.pull(state.code)
    if (remote.rev === state.rev) return { progress: local, state }
    return { progress: adoptRemote(local, clean(remote.progress)), state: { ...state, rev: remote.rev } }
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
