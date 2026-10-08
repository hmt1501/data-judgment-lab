import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { cases } from '../content'
import * as P from './progress'
import { browserStorage, clearLegacy, loadProgress, parseProgress, saveProgress } from './storage'
import { useSync, type SyncActions, type SyncInfo } from './useSync'

type Actions = {
  open: (caseId: string) => void
  setCompleted: (caseId: string, done: boolean) => void
  answerQuiz: (quizId: string, optionId: string) => void
  clearQuiz: (quizId: string) => void
  toggleSaved: (caseId: string) => void
  setLastSection: (caseId: string, sectionId: string) => void
  markExplainerRead: (slug: string, title: string) => void
  updateSettings: (patch: Partial<P.Progress['settings']>) => void
  /** xóa tiến độ; đang đồng bộ thì xóa trên mọi thiết bị */
  reset: () => void
} & SyncActions

const ProgressContext = createContext<{ progress: P.Progress; actions: Actions; sync: SyncInfo } | null>(null)

const knownCases = new Set(cases.map((c) => c.id))
const knownQuizzes = new Set(cases.flatMap((c) => c.quizzes.map((q) => q.id)))
const now = () => new Date().toISOString()
const cleanRemote = (raw: unknown) => P.sanitize(parseProgress(raw) ?? P.emptyProgress(), knownCases, knownQuizzes)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(() => P.sanitize(loadProgress(browserStorage()), knownCases, knownQuizzes))

  useEffect(() => {
    saveProgress(browserStorage(), progress)
  }, [progress])

  const { sync, syncActions } = useSync(progress, setProgress, cleanRemote)

  useEffect(() => clearLegacy(browserStorage()), [])

  useEffect(() => {
    const { theme } = progress.settings
    if (theme === 'system') delete document.documentElement.dataset.theme
    else document.documentElement.dataset.theme = theme
  }, [progress.settings])

  const actions = useMemo<Actions>(
    () => ({
      open: (id) => setProgress((p) => P.markOpened(p, id, now())),
      setCompleted: (id, done) => setProgress((p) => P.setCompleted(p, id, done, now())),
      answerQuiz: (q, o) => setProgress((p) => P.answerQuiz(p, q, o)),
      clearQuiz: (q) => setProgress((p) => P.clearQuiz(p, q)),
      toggleSaved: (id) => setProgress((p) => P.toggleSaved(p, id)),
      setLastSection: (id, s) => setProgress((p) => P.setLastSection(p, id, s)),
      markExplainerRead: (slug, title) => setProgress((p) => P.markExplainerRead(p, slug, title, now())),
      updateSettings: (patch) => setProgress((p) => P.updateSettings(p, patch)),
      reset: () => {
        setProgress((p) => ({ ...P.emptyProgress(), settings: p.settings }))
        syncActions.markReplace()
      },
      ...syncActions,
    }),
    [syncActions],
  )

  const value = useMemo(() => ({ progress, actions, sync }), [progress, actions, sync])
  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress phải nằm trong <ProgressProvider>')
  return ctx
}
