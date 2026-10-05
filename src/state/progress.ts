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

export function updateSettings(p: Progress, patch: Partial<Progress['settings']>): Progress {
  return { ...p, settings: { ...p.settings, ...patch } }
}

/** Bỏ các id không còn tồn tại (case bị xóa/đổi tên). */
export function sanitize(p: Progress, caseIds: Set<string>, quizIds: Set<string>): Progress {
  const keep = <T,>(rec: Record<string, T>, ok: Set<string>) =>
    Object.fromEntries(Object.entries(rec).filter(([k]) => ok.has(k)))
  return {
    ...p,
    completed: keep(p.completed, caseIds),
    quiz: keep(p.quiz, quizIds),
    saved: p.saved.filter((id) => caseIds.has(id)),
    history: p.history.filter((h) => caseIds.has(h.caseId)),
    lastSection: keep(p.lastSection, caseIds),
  }
}
