import type { Explainer } from '../../shared/explainer'
import { domainById, levelById, skillById, topicById } from '../../shared/taxonomy'
import { foldVi } from '../../shared/text'
import type { CaseMeta } from '../content/types'

/**
 * Tìm không dấu: mọi từ trong truy vấn phải xuất hiện.
 * Chuỗi tìm kiếm của mỗi mục được tính một lần rồi cache theo object.
 */
function makeSearch<T extends object>(textOf: (item: T) => string) {
  const haystack = new WeakMap<T, string>()
  const text = (item: T) => {
    let t = haystack.get(item)
    if (t === undefined) {
      t = foldVi(textOf(item))
      haystack.set(item, t)
    }
    return t
  }
  return (items: T[], query: string): T[] => {
    const terms = foldVi(query).split(/\s+/).filter(Boolean)
    if (!terms.length) return items
    return items.filter((item) => terms.every((term) => text(item).includes(term)))
  }
}

export const searchCases = makeSearch<CaseMeta>((c) =>
  [c.title, c.summary, c.question, domainById(c.domain).name, levelById(c.level).name, ...c.skills.map((s) => skillById(s).name)].join(' '),
)

type ExplainerSearchable = Pick<Explainer, 'question' | 'title' | 'tldr' | 'topic'>

const searchExplainerItems = makeSearch<ExplainerSearchable>((e) => `${e.question} ${e.title} ${e.tldr} ${topicById(e.topic).name}`)

/** Dùng cho cả bài soạn sẵn (Explainer) lẫn danh sách bài AI (ExplainerSummary). */
export const searchExplainers = <T extends ExplainerSearchable>(items: T[], query: string): T[] => searchExplainerItems(items, query) as T[]
