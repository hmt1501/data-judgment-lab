import { foldVi, type Explainer } from './explainer'
import { topicById, topics } from './taxonomy'

const modules = import.meta.glob<Record<string, Explainer>>('./explainers/*.ts', { eager: true })

const topicOrder = new Map<string, number>(topics.map((t, i) => [t.id, i]))

/** Bài "Đọc nhanh" soạn sẵn, sắp theo chủ đề rồi tiêu đề. */
export const curatedExplainers: Explainer[] = Object.values(modules)
  .flatMap((mod) => Object.values(mod))
  .sort((a, b) => topicOrder.get(a.topic)! - topicOrder.get(b.topic)! || a.title.localeCompare(b.title, 'vi'))

export const curatedBySlug = (slug: string | undefined) => curatedExplainers.find((e) => e.slug === slug)

const haystack = new WeakMap<object, string>()

/** Tìm không dấu: mọi từ trong truy vấn phải xuất hiện. */
export function searchExplainers<T extends Pick<Explainer, 'question' | 'title' | 'tldr' | 'topic'>>(items: T[], query: string): T[] {
  const terms = foldVi(query).split(/\s+/).filter(Boolean)
  if (!terms.length) return items
  const text = (e: T) => {
    let t = haystack.get(e)
    if (!t) {
      t = foldVi(`${e.question} ${e.title} ${e.tldr} ${topicById(e.topic).name}`)
      haystack.set(e, t)
    }
    return t
  }
  return items.filter((e) => terms.every((term) => text(e).includes(term)))
}
