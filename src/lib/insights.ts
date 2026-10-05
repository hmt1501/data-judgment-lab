import { levels, skills, type LevelId, type SkillId } from '../content/taxonomy'
import type { CaseStudy } from '../content/types'
import type { Progress } from '../state/progress'

export type Ratio = { done: number; total: number }

export const ratio = (r: Ratio) => (r.total ? r.done / r.total : 0)

export function levelProgress(cases: CaseStudy[], p: Progress): Record<LevelId, Ratio> {
  const out = Object.fromEntries(levels.map((l) => [l.id, { done: 0, total: 0 }])) as Record<LevelId, Ratio>
  for (const c of cases) {
    out[c.level].total++
    if (p.completed[c.id]) out[c.level].done++
  }
  return out
}

export type SkillMastery = { id: SkillId; name: string; group: string } & Ratio

/** Chỉ trả về kỹ năng có ít nhất một case. */
export function skillMastery(cases: CaseStudy[], p: Progress): SkillMastery[] {
  return skills
    .map((s) => {
      const withSkill = cases.filter((c) => c.skills.includes(s.id))
      return { ...s, total: withSkill.length, done: withSkill.filter((c) => p.completed[c.id]).length }
    })
    .filter((s) => s.total > 0)
}

/** Case đã mở nhưng chưa học xong, mới nhất trước. */
export function inProgress(cases: CaseStudy[], p: Progress): CaseStudy[] {
  return p.history
    .filter((h) => !p.completed[h.caseId])
    .map((h) => cases.find((c) => c.id === h.caseId))
    .filter((c): c is CaseStudy => !!c)
}

export function quizStats(cases: CaseStudy[], p: Progress) {
  let total = 0
  let answered = 0
  let correct = 0
  for (const c of cases)
    for (const s of c.sections)
      for (const b of s.blocks) {
        if (b.kind !== 'quiz') continue
        total++
        const choice = p.quiz[b.id]
        if (!choice) continue
        answered++
        if (b.options.find((o) => o.id === choice)?.correct) correct++
      }
  return { total, answered, correct }
}

/** Một "bẫy tư duy" cố định theo ngày, lấy từ mọi case. */
export function trapOfTheDay(cases: CaseStudy[], date: Date) {
  const all = cases.flatMap((c) =>
    c.sections.flatMap((s) => s.blocks.flatMap((b) => (b.kind === 'pitfalls' ? b.items.map((item) => ({ item, case: c })) : []))),
  )
  if (!all.length) return undefined
  const day = Math.floor(date.getTime() / 86_400_000)
  return all[day % all.length]
}

export type Recommendation ={ case: CaseStudy; reason: string }

/**
 * Gợi ý bài tiếp theo:
 * 1. case đang đọc dở gần nhất
 * 2. case chưa học ở cấp thấp nhất còn dang dở, ưu tiên case luyện kỹ năng yếu nhất
 */
export function recommendNext(cases: CaseStudy[], p: Progress): Recommendation | undefined {
  const reading = inProgress(cases, p)[0]
  if (reading) return { case: reading, reason: 'Bạn đang đọc dở bài này' }

  const remaining = cases.filter((c) => !p.completed[c.id])
  if (!remaining.length) return undefined

  const lowestLevel = levels.find((l) => remaining.some((c) => c.level === l.id))!
  const mastery = new Map(skillMastery(cases, p).map((s) => [s.id, s.done / s.total]))
  const weakness = (c: CaseStudy) => Math.min(...c.skills.map((s) => mastery.get(s) ?? 0))
  const candidates = remaining.filter((c) => c.level === lowestLevel.id).sort((a, b) => weakness(a) - weakness(b))

  const done = Object.keys(p.completed).length
  return {
    case: candidates[0],
    reason: done ? `Bài tiếp theo ở cấp ${lowestLevel.name}` : 'Bài khởi động phù hợp để bắt đầu',
  }
}
