import { emptyProgress, type Progress } from './progress'

export const STORAGE_KEY = 'djl:v2'
const LEGACY = { done: 'djl-done', recent: 'djl-recent', saved: 'djl-saved' }

type StorageLike = Pick<Storage, 'getItem' | 'setItem' | 'removeItem' | 'key' | 'length'>

function readJson(storage: StorageLike, key: string): unknown {
  try {
    const raw = storage.getItem(key)
    return raw ? JSON.parse(raw) : undefined
  } catch {
    return undefined
  }
}

const isStringArray = (v: unknown): v is string[] => Array.isArray(v) && v.every((x) => typeof x === 'string')

function fromLegacy(storage: StorageLike, now: string): Progress | undefined {
  const done = readJson(storage, LEGACY.done)
  const recent = readJson(storage, LEGACY.recent)
  const saved = readJson(storage, LEGACY.saved)
  if (!isStringArray(done) && !isStringArray(recent) && !isStringArray(saved)) return undefined
  const p = emptyProgress()
  if (isStringArray(done)) p.completed = Object.fromEntries(done.map((id) => [id, now]))
  if (isStringArray(recent)) p.history = recent.map((caseId) => ({ caseId, openedAt: now }))
  if (isStringArray(saved)) p.saved = saved
  return p
}

/** Đọc tiến độ; tự chuyển từ định dạng v1 nếu có. Không bao giờ throw. */
export function loadProgress(storage: StorageLike | undefined, now = new Date().toISOString()): Progress {
  if (!storage) return emptyProgress()
  const stored = readJson(storage, STORAGE_KEY) as Partial<Progress> | undefined
  if (stored && stored.version === 2) {
    const base = emptyProgress()
    const { name, theme } = { ...base.settings, ...stored.settings }
    return { ...base, ...stored, explainersRead: { ...stored.explainersRead }, settings: { name, theme } }
  }
  return fromLegacy(storage, now) ?? emptyProgress()
}

export function saveProgress(storage: StorageLike | undefined, p: Progress): void {
  if (!storage) return
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(p))
  } catch {
    // storage đầy hoặc bị chặn: bỏ qua, app vẫn chạy trong phiên hiện tại
  }
}

/** Xóa khóa v1 (gọi sau khi bản v2 đã được lưu). */
export function clearLegacy(storage: StorageLike | undefined): void {
  if (!storage) return
  try {
    for (const key of Object.values(LEGACY)) storage.removeItem(key)
    for (let i = storage.length - 1; i >= 0; i--) {
      const key = storage.key(i)
      if (key?.startsWith('djl-draft-')) storage.removeItem(key)
    }
  } catch {
    // bỏ qua
  }
}

export function browserStorage(): StorageLike | undefined {
  try {
    return window.localStorage
  } catch {
    return undefined
  }
}
