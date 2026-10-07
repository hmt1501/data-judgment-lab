import { emptyProgress, type HistoryEntry, type Progress, type Theme } from './progress'

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
const isObj = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v)
const isStr = (v: unknown): v is string => typeof v === 'string'

/** Giữ các mục hợp lệ của một Record; không phải object → rỗng. */
function recordOf<T>(v: unknown, ok: (x: unknown) => x is T): Record<string, T> {
  return isObj(v) ? (Object.fromEntries(Object.entries(v).filter(([, x]) => ok(x))) as Record<string, T>) : {}
}

const isHistoryEntry = (h: unknown): h is HistoryEntry => isObj(h) && isStr(h.caseId) && isStr(h.openedAt)
const isReadEntry = (v: unknown): v is { title: string; at: string } => isObj(v) && isStr(v.title) && isStr(v.at)
const THEMES: readonly unknown[] = ['system', 'light', 'dark'] satisfies Theme[]

/** Dựng lại Progress v2 từ JSON đã lưu, bỏ trường/mục sai kiểu (localStorage có thể bị sửa tay hoặc hỏng). */
function fromStored(s: Record<string, unknown>): Progress {
  const base = emptyProgress()
  const settings = isObj(s.settings) ? s.settings : {}
  return {
    version: 2,
    completed: recordOf(s.completed, isStr),
    quiz: recordOf(s.quiz, isStr),
    saved: Array.isArray(s.saved) ? s.saved.filter(isStr) : [],
    history: Array.isArray(s.history) ? s.history.filter(isHistoryEntry) : [],
    lastSection: recordOf(s.lastSection, isStr),
    explainersRead: recordOf(s.explainersRead, isReadEntry),
    settings: {
      name: isStr(settings.name) ? settings.name : base.settings.name,
      theme: THEMES.includes(settings.theme) ? (settings.theme as Theme) : base.settings.theme,
    },
  }
}

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
  const stored = readJson(storage, STORAGE_KEY)
  if (isObj(stored) && stored.version === 2) return fromStored(stored)
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
