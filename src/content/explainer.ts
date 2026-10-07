import { isTopicId, type TopicId } from './taxonomy'
import type { QuizBlock } from './types'

/**
 * Bài "Đọc nhanh": giải thích một câu hỏi kinh tế/đầu tư/BĐS/thời sự,
 * ưu tiên góc nhìn tác động tới Việt Nam. Dùng chung cho frontend và Worker.
 */
export type Explainer = {
  id: string
  slug: string
  /** câu hỏi gốc, ví dụ "Fed tăng lãi suất ảnh hưởng gì tới Việt Nam?" */
  question: string
  title: string
  topic: TopicId
  /** tóm tắt 2–3 câu */
  tldr: string
  keyPoints: string[]
  /** chuỗi nhân quả: from → to, kèm cơ chế */
  causalChain: { from: string; to: string; mechanism: string }[]
  vietnamImpact: { group: string; effect: string; direction: 'up' | 'down' | 'mixed' }[]
  /** chỉ số nên theo dõi và lấy ở đâu */
  indicators: { name: string; why: string; where: string }[]
  /** góc nhìn khác, khi nào lập luận không còn đúng */
  counterpoints: string[]
  glossary: { term: string; definition: string }[]
  quiz: QuizBlock
  sources: { title: string; publisher: string; url: string }[]
  origin: 'curated' | 'ai'
  /** ngày dữ liệu/bối cảnh được cập nhật, YYYY-MM-DD */
  asOf: string
  model?: string
}

export const EXPLAINER_LIMITS = {
  keyPoints: [3, 5],
  causalChain: [2, 7],
  vietnamImpact: [2, 8],
  indicators: [2, 6],
  counterpoints: [1, 4],
  glossary: [1, 8],
  sources: [1, 6],
} as const

const isStr = (v: unknown): v is string => typeof v === 'string' && v.trim().length > 0
const isObj = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v)

/**
 * Kiểm tra một Explainer (kể cả JSON không tin cậy từ AI). Trả về danh sách lỗi; rỗng = hợp lệ.
 */
export function validateExplainer(input: unknown): string[] {
  const errors: string[] = []
  if (!isObj(input)) return ['không phải object']
  const e = input as Record<string, unknown>
  const at = (msg: string) => errors.push(`[${isStr(e.id) ? e.id : '?'}] ${msg}`)

  for (const key of ['id', 'slug', 'question', 'title', 'tldr', 'asOf'] as const) if (!isStr(e[key])) at(`thiếu "${key}"`)
  if (isStr(e.slug) && !/^[a-z0-9-]+$/.test(e.slug)) at('slug phải là kebab-case')
  if (isStr(e.asOf) && !/^\d{4}-\d{2}-\d{2}$/.test(e.asOf)) at('asOf phải dạng YYYY-MM-DD')
  if (!isStr(e.topic) || !isTopicId(e.topic)) at(`topic lạ "${String(e.topic)}"`)
  if (e.origin !== 'curated' && e.origin !== 'ai') at('origin phải là curated | ai')

  const list = (key: keyof typeof EXPLAINER_LIMITS, check: (item: unknown) => boolean) => {
    const v = e[key]
    const [min, max] = EXPLAINER_LIMITS[key]
    if (!Array.isArray(v)) return at(`"${key}" phải là mảng`)
    if (v.length < min || v.length > max) at(`"${key}" cần ${min}–${max} mục (đang có ${v.length})`)
    v.forEach((item, i) => check(item) || at(`"${key}"[${i}] sai cấu trúc`))
  }
  const fields = (...keys: string[]) => (item: unknown) => isObj(item) && keys.every((k) => isStr(item[k]))

  list('keyPoints', isStr)
  list('causalChain', fields('from', 'to', 'mechanism'))
  list('vietnamImpact', (item) => fields('group', 'effect')(item) && ['up', 'down', 'mixed'].includes((item as { direction: string }).direction))
  list('indicators', fields('name', 'why', 'where'))
  list('counterpoints', isStr)
  list('glossary', fields('term', 'definition'))
  list('sources', (item) => fields('title', 'publisher', 'url')(item) && String((item as { url: string }).url).startsWith('https://'))

  const quiz = e.quiz
  if (!isObj(quiz) || quiz.kind !== 'quiz' || !isStr(quiz.id) || !isStr(quiz.question) || !Array.isArray(quiz.options)) at('quiz sai cấu trúc')
  else {
    const options = quiz.options as unknown[]
    if (options.length < 2 || options.length > 4) at('quiz cần 2–4 lựa chọn')
    if (!options.every((o) => isObj(o) && isStr(o.id) && isStr(o.text) && isStr(o.explain))) at('lựa chọn quiz sai cấu trúc')
    const correct = options.filter((o) => isObj(o) && o.correct === true).length
    if (correct !== 1) at(`quiz phải có đúng 1 đáp án đúng (đang có ${correct})`)
  }
  return errors
}

/** Chữ thường, bỏ dấu: dùng cho slug và so khớp câu hỏi. */
export const foldVi = (s: string) =>
  s
    .toLocaleLowerCase('vi')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')

export function slugify(s: string, maxWords = 10): string {
  return foldVi(s)
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .slice(0, maxWords)
    .join('-')
}
