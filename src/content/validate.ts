import { domains, levels, skills } from '../../shared/taxonomy'
import type { Block, CaseStudy } from './types'

const skillIds = new Set<string>(skills.map((s) => s.id))
const levelIds = new Set<string>(levels.map((l) => l.id))
const domainIds = new Set<string>(domains.map((d) => d.id))

function validateBlock(block: Block, where: string): string[] {
  const errors: string[] = []
  switch (block.kind) {
    case 'table': {
      const keys = new Set(block.columns.map((c) => c.key))
      block.rows.forEach((row, i) => {
        for (const key of keys) if (!(key in row)) errors.push(`${where}: hàng ${i} thiếu cột "${key}"`)
        for (const key of Object.keys(row)) if (!keys.has(key)) errors.push(`${where}: hàng ${i} có cột lạ "${key}"`)
      })
      block.highlight?.forEach((h) => {
        if (h.row < 0 || h.row >= block.rows.length) errors.push(`${where}: highlight row ${h.row} ngoài phạm vi`)
      })
      break
    }
    case 'chart': {
      if (block.data.length < 2) errors.push(`${where}: biểu đồ cần ≥ 2 điểm dữ liệu`)
      block.data.forEach((point, i) => {
        if (!(block.xKey in point)) errors.push(`${where}: điểm ${i} thiếu xKey "${block.xKey}"`)
        for (const s of block.series)
          if (typeof point[s.key] !== 'number') errors.push(`${where}: điểm ${i} thiếu số cho series "${s.key}"`)
      })
      if (block.marker && !block.data.some((p) => p[block.xKey] === block.marker!.x))
        errors.push(`${where}: marker "${block.marker.x}" không có trong dữ liệu`)
      break
    }
    case 'quiz': {
      const correct = block.options.filter((o) => o.correct).length
      if (correct !== 1) errors.push(`${where}: quiz "${block.id}" phải có đúng 1 đáp án đúng (đang có ${correct})`)
      if (block.options.length < 2 || block.options.length > 4) errors.push(`${where}: quiz "${block.id}" cần 2–4 lựa chọn`)
      const ids = block.options.map((o) => o.id)
      if (new Set(ids).size !== ids.length) errors.push(`${where}: quiz "${block.id}" trùng id lựa chọn`)
      break
    }
    case 'kpis':
    case 'actions':
    case 'pitfalls':
    case 'list':
      if (block.items.length === 0) errors.push(`${where}: ${block.kind} rỗng`)
      break
  }
  return errors
}

export function validateCase(c: CaseStudy): string[] {
  const errors: string[] = []
  const at = (msg: string) => errors.push(`[${c.id}] ${msg}`)

  if (!/^[a-z0-9-]+$/.test(c.id)) at('id phải là kebab-case')
  if (!levelIds.has(c.level)) at(`level lạ "${c.level}"`)
  if (!domainIds.has(c.domain)) at(`domain lạ "${c.domain}"`)
  if (c.skills.length < 2) at('cần ≥ 2 kỹ năng')
  c.skills.forEach((s) => skillIds.has(s) || at(`skill lạ "${s}"`))
  if (c.minutes < 3 || c.minutes > 20) at('minutes nên trong 3–20')

  const sectionIds = c.sections.map((s) => s.id)
  if (new Set(sectionIds).size !== sectionIds.length) at('trùng id section')
  for (const kind of ['context', 'framework', 'analysis', 'solution', 'pitfalls'] as const)
    if (!c.sections.some((s) => s.kind === kind)) at(`thiếu section kind "${kind}"`)
  const analysisCount = c.sections.filter((s) => s.kind === 'analysis').length
  if (analysisCount < 2 || analysisCount > 4) at(`cần 2–4 section analysis (đang có ${analysisCount})`)

  const blocks = c.sections.flatMap((s) => s.blocks.map((b) => [s.id, b] as const))
  const quizzes = blocks.filter(([, b]) => b.kind === 'quiz')
  if (quizzes.length < 1 || quizzes.length > 3) at(`cần 1–3 quiz (đang có ${quizzes.length})`)
  if (!blocks.some(([, b]) => b.kind === 'chart' || b.kind === 'table')) at('cần ít nhất một bảng hoặc biểu đồ')
  if (!blocks.some(([, b]) => b.kind === 'actions')) at('section solution cần block "actions"')
  blocks.forEach(([sid, b], i) => errors.push(...validateBlock(b, `[${c.id}] ${sid}#${i}`)))

  if (c.takeaways.length !== 3) at('cần đúng 3 takeaways')
  if (c.references.length < 2) at('cần ≥ 2 references')
  c.references.forEach((r) => r.url.startsWith('https://') || at(`reference phải là https: ${r.url}`))

  return errors
}

export function quizIds(c: CaseStudy): string[] {
  return c.sections.flatMap((s) => s.blocks.flatMap((b) => (b.kind === 'quiz' ? [b.id] : [])))
}
