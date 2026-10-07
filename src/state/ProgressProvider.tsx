import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { cases } from '../content'
import { quizIds } from '../content/validate'
import { browserStorage, clearLegacy, loadProgress, saveProgress } from '../lib/storage'
import * as P from './progress'

type Actions = {
  open: (caseId: string) => void
  setCompleted: (caseId: string, done: boolean) => void
  answerQuiz: (quizId: string, optionId: string) => void
  clearQuiz: (quizId: string) => void
  toggleSaved: (caseId: string) => void
  setLastSection: (caseId: string, sectionId: string) => void
  markExplainerRead: (slug: string, title: string) => void
  updateSettings: (patch: Partial<P.Progress['settings']>) => void
  reset: () => void
}

const ProgressContext = createContext<{ progress: P.Progress; actions: Actions } | null>(null)

const knownCases = new Set(cases.map((c) => c.id))
const knownQuizzes = new Set(cases.flatMap(quizIds))
const now = () => new Date().toISOString()

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(() => P.sanitize(loadProgress(browserStorage()), knownCases, knownQuizzes))

  useEffect(() => {
    saveProgress(browserStorage(), progress)
  }, [progress])

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
      reset: () => setProgress((p) => ({ ...P.emptyProgress(), settings: p.settings })),
    }),
    [],
  )

  const value = useMemo(() => ({ progress, actions }), [progress, actions])
  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress phải nằm trong <ProgressProvider>')
  return ctx
}
