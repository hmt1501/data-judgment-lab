export type Theme = 'system' | 'light' | 'dark'

export type HistoryEntry = { caseId: string; openedAt: string }

export type Progress = {
  version: 2
  /** caseId → thời điểm đánh dấu học xong (ISO) */
  completed: Record<string, string>
  /** quizId → id lựa chọn */
  quiz: Record<string, string>
  saved: string[]
  /** mới nhất trước, mỗi case xuất hiện một lần */
  history: HistoryEntry[]
  /** caseId → section đang đọc */
  lastSection: Record<string, string>
  /** slug → bài "Đọc nhanh" đã đọc (lưu cả tiêu đề vì bài AI không có sẵn trong bundle) */
  explainersRead: Record<string, { title: string; at: string }>
  settings: { name: string; theme: Theme }
}

export const HISTORY_LIMIT = 20

export const emptyProgress = (): Progress => ({
  version: 2,
  completed: {},
  quiz: {},
  saved: [],
  history: [],
  lastSection: {},
  explainersRead: {},
  settings: { name: '', theme: 'system' },
})

export function markOpened(p: Progress, caseId: string, now: string): Progress {
  const history = [{ caseId, openedAt: now }, ...p.history.filter((h) => h.caseId !== caseId)].slice(0, HISTORY_LIMIT)
  return { ...p, history }
}

export function setCompleted(p: Progress, caseId: string, done: boolean, now: string): Progress {
  const completed = { ...p.completed }
  if (done) completed[caseId] = now
  else delete completed[caseId]
  return { ...p, completed }
}

export function answerQuiz(p: Progress, quizId: string, optionId: string): Progress {
  return { ...p, quiz: { ...p.quiz, [quizId]: optionId } }
}

export function clearQuiz(p: Progress, quizId: string): Progress {
  const quiz = { ...p.quiz }
  delete quiz[quizId]
  return { ...p, quiz }
}

export function toggleSaved(p: Progress, caseId: string): Progress {
  const saved = p.saved.includes(caseId) ? p.saved.filter((id) => id !== caseId) : [...p.saved, caseId]
  return { ...p, saved }
}

export function setLastSection(p: Progress, caseId: string, sectionId: string): Progress {
  if (p.lastSection[caseId] === sectionId) return p
  return { ...p, lastSection: { ...p.lastSection, [caseId]: sectionId } }
}

export function markExplainerRead(p: Progress, slug: string, title: string, now: string): Progress {
  if (p.explainersRead[slug]) return p
  return { ...p, explainersRead: { ...p.explainersRead, [slug]: { title, at: now } } }
}

export function updateSettings(p: Progress, patch: Partial<Progress['settings']>): Progress {
  return { ...p, settings: { ...p.settings, ...patch } }
}

/**
 * Gộp tiến độ hai thiết bị (đồng bộ khi cả hai cùng có thay đổi): hợp mọi mục; trùng thì ưu tiên `local`.
 * Lịch sử lấy lần mở mới nhất của mỗi case. Giao diện sáng/tối là cài đặt riêng từng máy, luôn giữ của `local`.
 */
export function mergeProgress(local: Progress, remote: Progress): Progress {
  const latest = new Map<string, HistoryEntry>()
  for (const h of [...local.history, ...remote.history]) {
    const seen = latest.get(h.caseId)
    if (!seen || h.openedAt > seen.openedAt) latest.set(h.caseId, h)
  }
  return {
    version: 2,
    completed: { ...remote.completed, ...local.completed },
    quiz: { ...remote.quiz, ...local.quiz },
    saved: [...local.saved, ...remote.saved.filter((id) => !local.saved.includes(id))],
    history: [...latest.values()].sort((a, b) => (a.openedAt < b.openedAt ? 1 : a.openedAt > b.openedAt ? -1 : 0)).slice(0, HISTORY_LIMIT),
    lastSection: { ...remote.lastSection, ...local.lastSection },
    explainersRead: { ...remote.explainersRead, ...local.explainersRead },
    settings: { name: local.settings.name.trim() ? local.settings.name : remote.settings.name, theme: local.settings.theme },
  }
}

/** Nhận bản từ thiết bị khác nguyên vẹn, chỉ giữ giao diện sáng/tối của máy này. */
export const adoptRemote = (local: Progress, remote: Progress): Progress => ({ ...remote, settings: { ...remote.settings, theme: local.settings.theme } })

/** Bỏ các id không còn tồn tại (case bị xóa/đổi tên). */
export function sanitize(p: Progress, caseIds: Set<string>, quizIds: Set<string>): Progress {
  const keep = <T,>(rec: Record<string, T>, ok: Set<string>) =>
    Object.fromEntries(Object.entries(rec).filter(([k]) => ok.has(k)))
  return {
    ...p,
    completed: keep(p.completed, caseIds),
    // quiz của bài "Đọc nhanh" (id kết thúc "-q", có thể là bài AI không biết trước) luôn được giữ
    quiz: Object.fromEntries(Object.entries(p.quiz).filter(([k]) => quizIds.has(k) || k.endsWith('-q'))),
    saved: p.saved.filter((id) => caseIds.has(id)),
    history: p.history.filter((h) => caseIds.has(h.caseId)),
    lastSection: keep(p.lastSection, caseIds),
  }
}
