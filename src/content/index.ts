import { levels } from '../../shared/taxonomy'
import type { CaseMeta, CaseStudy } from './types'

// phần nhẹ (plugin `contentMeta` trong vite.config.ts) nạp sẵn; thân bài nạp khi mở case
const metas = import.meta.glob<CaseMeta>('./cases/*.ts', { query: '?meta', import: 'default', eager: true })
const bodies = import.meta.glob<Record<string, CaseStudy>>('./cases/*.ts')

const levelOrder = new Map<string, number>(levels.map((l, i) => [l.id, i]))

/** Mọi case (không kèm thân bài), sắp theo cấp độ rồi theo tên. */
export const cases: CaseMeta[] = Object.values(metas).sort(
  (a, b) => levelOrder.get(a.level)! - levelOrder.get(b.level)! || a.title.localeCompare(b.title, 'vi'),
)

export const caseById = (id: string | undefined) => cases.find((c) => c.id === id)

/** Nạp thân bài của một case; undefined nếu không có. */
export async function loadCase(id: string): Promise<CaseStudy | undefined> {
  const load = bodies[`./cases/${id}.ts`]
  return load && Object.values(await load())[0]
}
