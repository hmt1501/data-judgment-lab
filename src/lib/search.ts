import { foldVi } from '../content/explainer'
import { domainById, levelById, skillById } from '../content/taxonomy'
import type { CaseStudy } from '../content/types'

/** Chữ thường, bỏ dấu tiếng Việt: "Đơn hàng" → "don hang". */
export const fold = foldVi

const haystack = new WeakMap<CaseStudy, string>()

function textOf(c: CaseStudy) {
  let text = haystack.get(c)
  if (!text) {
    text = fold(
      [c.title, c.summary, c.question, domainById(c.domain).name, levelById(c.level).name, ...c.skills.map((s) => skillById(s).name)].join(' '),
    )
    haystack.set(c, text)
  }
  return text
}

/** Mọi từ trong truy vấn phải xuất hiện (không phân biệt dấu). */
export function searchCases(cases: CaseStudy[], query: string): CaseStudy[] {
  const terms = fold(query).split(/\s+/).filter(Boolean)
  if (!terms.length) return cases
  return cases.filter((c) => terms.every((t) => textOf(c).includes(t)))
}
