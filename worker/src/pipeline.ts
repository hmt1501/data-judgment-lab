import { EXPLAINER_LIMITS, foldVi, slugify, validateExplainer, type Explainer } from '../../src/content/explainer'
import type { TopicId } from '../../src/content/taxonomy'
import type { Chat } from './groq'
import { COMPOSE_SCHEMA, COMPOSE_SYSTEM, RESEARCH_SYSTEM, type Composed } from './prompts'

export type Source = { title: string; url: string }
export type Research = { notes: string; sources: Source[] }

export class PipelineError extends Error {
  constructor(
    readonly code: 'out_of_scope' | 'no_sources' | 'invalid_output',
    message: string,
  ) {
    super(message)
  }
}

/** Chuẩn hóa câu hỏi để so khớp cache: bỏ dấu, bỏ ký tự đặc biệt, gộp khoảng trắng. */
export const normalizeQuestion = (q: string) =>
  foldVi(q)
    .replace(/[^a-z0-9%]+/g, ' ')
    .trim()

const URL_RE = /https:\/\/[^\s<>"'|)\]】]+/g

function cleanUrl(raw: string): string | undefined {
  const trimmed = raw.replace(/[.,;:!?]+$/, '')
  try {
    const u = new URL(trimmed)
    return u.protocol === 'https:' ? u.toString() : undefined
  } catch {
    return undefined
  }
}

/**
 * Gom nguồn thật từ (1) cấu trúc kết quả tool (không có tài liệu chính thức nên duyệt đệ quy
 * mọi object có `url`) và (2) các dòng "NGUỒN: tiêu đề | url" trong ghi chú.
 */
export function extractSources(executedTools: unknown, notes: string, limit = 12): Source[] {
  const found = new Map<string, Source>()
  const add = (url: string | undefined, title?: string) => {
    if (!url || found.has(url)) return
    found.set(url, { url, title: title?.trim() || new URL(url).hostname })
  }

  const walk = (node: unknown, depth: number) => {
    if (depth > 8 || node === null || typeof node !== 'object') return
    if (Array.isArray(node)) return node.forEach((n) => walk(n, depth + 1))
    const rec = node as Record<string, unknown>
    if (typeof rec.url === 'string') add(cleanUrl(rec.url), typeof rec.title === 'string' ? rec.title : undefined)
    for (const v of Object.values(rec)) walk(v, depth + 1)
  }
  walk(executedTools, 0)

  for (const line of notes.split('\n')) {
    const m = line.match(/NGUỒN:\s*(.+?)\s*\|\s*(https:\/\/\S+)/i)
    if (m) add(cleanUrl(m[2]), m[1])
  }
  for (const m of notes.matchAll(URL_RE)) add(cleanUrl(m[0]))

  return [...found.values()].slice(0, limit)
}

export async function research(chat: Chat, model: string, question: string): Promise<Research> {
  const result = await chat({
    model,
    messages: [
      { role: 'system', content: RESEARCH_SYSTEM },
      { role: 'user', content: question },
    ],
    tools: [{ type: 'browser_search' }],
    tool_choice: 'required',
    reasoning_effort: 'low',
    max_completion_tokens: 2000,
    temperature: 0.3,
  })
  const notes = result.content.trim()
  const sources = extractSources(result.executedTools, notes)
  if (!sources.length) throw new PipelineError('no_sources', 'Không tìm được nguồn đáng tin cho câu hỏi này. Hãy thử diễn đạt cụ thể hơn.')
  return { notes, sources }
}

export async function compose(chat: Chat, model: string, question: string, r: Research): Promise<Composed> {
  const sourceList = r.sources.map((s, i) => `${i + 1}. ${s.title} — ${s.url}`).join('\n')
  const result = await chat({
    model,
    messages: [
      { role: 'system', content: COMPOSE_SYSTEM },
      { role: 'user', content: `CÂU HỎI: ${question}\n\nGHI CHÚ NGHIÊN CỨU:\n${r.notes}\n\nDANH SÁCH NGUỒN:\n${sourceList}` },
    ],
    response_format: { type: 'json_schema', json_schema: { name: 'explainer', strict: true, schema: COMPOSE_SCHEMA } },
    reasoning_effort: 'low',
    max_completion_tokens: 3500,
    temperature: 0.4,
  })
  try {
    return JSON.parse(result.content) as Composed
  } catch {
    throw new PipelineError('invalid_output', 'AI trả về dữ liệu không hợp lệ. Hãy thử lại.')
  }
}

const clip = <T,>(items: T[], key: keyof typeof EXPLAINER_LIMITS) => items.slice(0, EXPLAINER_LIMITS[key][1])

/** Ghép kết quả AI thành Explainer, chỉ giữ nguồn có trong danh sách tra cứu (chặn link bịa). */
export function toExplainer(
  composed: Composed,
  r: Research,
  meta: { question: string; model: string; today: string; suffix: string },
): Explainer {
  if (composed.outOfScope)
    throw new PipelineError('out_of_scope', 'Câu hỏi nằm ngoài phạm vi kinh tế, tài chính, đầu tư, bất động sản và thương mại.')

  const slug = `${slugify(composed.title, 8) || 'bai-doc-nhanh'}-${meta.suffix}`
  const picked = [...new Set(composed.sourceIndexes)]
    .map((i) => r.sources[i - 1])
    .filter((s): s is Source => !!s)
  const sources = (picked.length ? picked : r.sources.slice(0, 3)).map((s) => ({
    title: s.title,
    publisher: new URL(s.url).hostname.replace(/^www\./, ''),
    url: s.url,
  }))

  const explainer: Explainer = {
    id: slug,
    slug,
    question: meta.question,
    title: composed.title.trim(),
    topic: composed.topic as TopicId,
    tldr: composed.tldr.trim(),
    keyPoints: clip(composed.keyPoints, 'keyPoints'),
    causalChain: clip(composed.causalChain, 'causalChain'),
    vietnamImpact: clip(composed.vietnamImpact, 'vietnamImpact'),
    indicators: clip(composed.indicators, 'indicators'),
    counterpoints: clip(composed.counterpoints, 'counterpoints'),
    glossary: clip(composed.glossary, 'glossary'),
    quiz: {
      kind: 'quiz',
      id: `${slug}-q`,
      question: composed.quiz.question,
      options: composed.quiz.options.slice(0, 4).map((o, i) => ({
        id: String.fromCharCode(97 + i),
        text: o.text,
        explain: o.explain,
        ...(o.correct ? { correct: true as const } : {}),
      })),
    },
    sources: clip(sources, 'sources'),
    origin: 'ai',
    asOf: meta.today,
    model: meta.model,
  }

  const errors = validateExplainer(explainer)
  if (errors.length) {
    console.log(JSON.stringify({ event: 'invalid_explainer', errors }))
    throw new PipelineError('invalid_output', 'Bài AI tạo chưa đạt chuẩn (thiếu mục hoặc quiz sai). Hãy thử lại.')
  }
  return explainer
}
