import type { CaseMeta, CaseStudy } from './types.ts'

/** Rút phần nhẹ của case. Thuần, không phụ thuộc DOM nên plugin Vite (chạy trên Node) dùng được. */
export function caseMetaOf(c: CaseStudy): CaseMeta {
  const { sections, takeaways: _takeaways, references: _references, ...meta } = c
  const blocks = sections.flatMap((s) => s.blocks)
  return {
    ...meta,
    outline: sections.map((s) => ({ id: s.id, title: s.title })),
    quizzes: blocks.flatMap((b) => (b.kind === 'quiz' ? [{ id: b.id, correct: b.options.find((o) => o.correct)?.id ?? '' }] : [])),
    pitfalls: blocks.flatMap((b) => (b.kind === 'pitfalls' ? b.items : [])),
  }
}
