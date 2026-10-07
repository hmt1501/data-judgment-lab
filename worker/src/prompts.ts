import { topics } from '../../src/content/taxonomy'

export const COMPOSE_SYSTEM = `Bạn biên soạn bài "Đọc nhanh" tiếng Việt cho người học phân tích kinh tế.
Đầu vào gồm câu hỏi và TƯ LIỆU: tiêu đề các tin mới nhất (kèm ngày, nguồn) và tóm tắt Wikipedia.

Quy tắc:
- Dùng kiến thức kinh tế nền để giải thích CƠ CHẾ và tác động tới Việt Nam; đó là trọng tâm của bài.
- Số liệu, sự kiện và ngày tháng cụ thể CHỈ lấy từ tư liệu. Không có trong tư liệu thì nói định tính, không bịa số.
- Nếu tin trong tư liệu cho thấy diễn biến mới, nhắc ngắn gọn kèm thời điểm.
- Văn phong rõ ràng, trung lập, mang tính giáo dục; không đưa khuyến nghị mua/bán tài sản.
- Có thể dùng **đậm** để nhấn mạnh. Không dùng tiêu đề markdown hay danh sách trong chuỗi.
- title: ngắn gọn (≤ 90 ký tự). tldr: 2–3 câu.
- keyPoints: 3–5 ý. causalChain: 2–6 mắt xích nối tiếp (to của mắt xích trước là from của mắt xích sau). vietnamImpact: 2–6 nhóm, direction là up (có lợi/tăng), down (bất lợi/giảm) hoặc mixed.
- indicators: 2–5 chỉ số kèm nơi tra cứu. counterpoints: 1–3 góc nhìn khác hoặc điều kiện khiến lập luận không đúng. glossary: 2–6 thuật ngữ.
- quiz: 1 câu hỏi kiểm tra hiểu biết (không hỏi số liệu vụn vặt), 3 lựa chọn, đúng 1 lựa chọn correct=true, mỗi lựa chọn có explain.
- sourceIndexes: số thứ tự (bắt đầu từ 1) của 2–5 nguồn trong danh sách đã cung cấp liên quan nhất tới bài; chỉ chọn trong danh sách.
- topic: chọn một trong ${topics.map((t) => `${t.id} (${t.name})`).join(', ')}.
- Nếu câu hỏi KHÔNG thuộc kinh tế, tài chính, đầu tư, bất động sản, thương mại hay chính sách công: đặt outOfScope=true và điền các trường còn lại ngắn gọn.`

const str = { type: 'string' }
const obj = (properties: Record<string, object>) => ({
  type: 'object',
  properties,
  required: Object.keys(properties),
  additionalProperties: false,
})
const arr = (items: object) => ({ type: 'array', items })

/** JSON schema cho structured outputs (strict): mọi trường required, additionalProperties=false. */
export const COMPOSE_SCHEMA = obj({
  outOfScope: { type: 'boolean' },
  title: str,
  topic: { type: 'string', enum: topics.map((t) => t.id) },
  tldr: str,
  keyPoints: arr(str),
  causalChain: arr(obj({ from: str, to: str, mechanism: str })),
  vietnamImpact: arr(obj({ group: str, effect: str, direction: { type: 'string', enum: ['up', 'down', 'mixed'] } })),
  indicators: arr(obj({ name: str, why: str, where: str })),
  counterpoints: arr(str),
  glossary: arr(obj({ term: str, definition: str })),
  quiz: obj({ question: str, options: arr(obj({ text: str, correct: { type: 'boolean' }, explain: str })) }),
  sourceIndexes: arr({ type: 'integer' }),
})

export type Composed = {
  outOfScope: boolean
  title: string
  topic: string
  tldr: string
  keyPoints: string[]
  causalChain: { from: string; to: string; mechanism: string }[]
  vietnamImpact: { group: string; effect: string; direction: 'up' | 'down' | 'mixed' }[]
  indicators: { name: string; why: string; where: string }[]
  counterpoints: string[]
  glossary: { term: string; definition: string }[]
  quiz: { question: string; options: { text: string; correct: boolean; explain: string }[] }
  sourceIndexes: number[]
}
