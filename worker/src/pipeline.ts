import { EXPLAINER_LIMITS, foldVi, slugify, validateExplainer, type Explainer } from '../../src/content/explainer'
import type { TopicId } from '../../src/content/taxonomy'
import type { Chat } from './groq'
import { COMPOSE_SCHEMA, COMPOSE_SYSTEM, type Composed } from './prompts'

export type Source = { title: string; url: string }
export type Research = { notes: string; sources: Source[] }

export class PipelineError extends Error {
  constructor(
    readonly code: 'out_of_scope' | 'invalid_output',
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

export async function compose(chat: Chat, model: string, question: string, r: Research): Promise<Composed> {
  const sourceList = r.sources.map((s, i) => `${i + 1}. ${s.title} — ${s.url}`).join('\n')
  const material = r.sources.length
    ? `TƯ LIỆU:\n${r.notes}\n\nDANH SÁCH NGUỒN:\n${sourceList}`
    : 'TƯ LIỆU: (không tìm được tư liệu tra cứu)\n\nHãy trả lời bằng kiến thức chung: tập trung giải thích cơ chế, KHÔNG nêu số liệu, ngày tháng hay sự kiện cụ thể gần đây; trong counterpoints nêu rõ bài chưa được đối chiếu với nguồn tin mới. sourceIndexes để mảng rỗng.'
  const result = await chat({
    model,
    messages: [
      { role: 'system', content: COMPOSE_SYSTEM },
      { role: 'user', content: `CÂU HỎI: ${question}\n\n${material}` },
    ],
    response_format: { type: 'json_schema', json_schema: { name: 'explainer', strict: true, schema: COMPOSE_SCHEMA } },
    reasoning_effort: 'low',
    max_completion_tokens: 3500,
    temperature: 0.4,
  })
  console.log(JSON.stringify({ event: 'groq_usage', step: 'compose', ...result.usage }))
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
