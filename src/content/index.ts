import { levels } from './taxonomy'
import type { CaseStudy } from './types'

const modules = import.meta.glob<Record<string, CaseStudy>>('./cases/*.ts', { eager: true })

const levelOrder = new Map<string, number>(levels.map((l, i) => [l.id, i]))

/** Mọi case, sắp theo cấp độ rồi theo tên. */
export const cases: CaseStudy[] = Object.values(modules)
  .flatMap((mod) => Object.values(mod))
  .sort((a, b) => levelOrder.get(a.level)! - levelOrder.get(b.level)! || a.title.localeCompare(b.title, 'vi'))

export const caseById = (id: string | undefined) => cases.find((c) => c.id === id)
