import type { Explainer, ExplainerSummary } from '../../shared/explainer'
import { topics } from '../../shared/taxonomy'

// phần tóm tắt nạp sẵn (plugin `contentMeta` trong vite.config.ts); thân bài nạp khi mở
const summaries = import.meta.glob<ExplainerSummary>('./explainers/*.ts', { query: '?meta', import: 'default', eager: true })
const bodies = import.meta.glob<Record<string, Explainer>>('./explainers/*.ts')

const topicOrder = new Map<string, number>(topics.map((t, i) => [t.id, i]))

/** Bài "Đọc nhanh" soạn sẵn (dạng tóm tắt), sắp theo chủ đề rồi tiêu đề. */
export const curatedExplainers: ExplainerSummary[] = Object.values(summaries).sort(
  (a, b) => topicOrder.get(a.topic)! - topicOrder.get(b.topic)! || a.title.localeCompare(b.title, 'vi'),
)

export const curatedBySlug = (slug: string | undefined) => curatedExplainers.find((e) => e.slug === slug)

/** Nạp thân bài soạn sẵn; undefined nếu không có. */
export async function loadCurated(slug: string): Promise<Explainer | undefined> {
  const load = bodies[`./explainers/${slug}.ts`]
  return load && Object.values(await load())[0]
}
