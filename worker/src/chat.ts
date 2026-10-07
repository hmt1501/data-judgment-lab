import type { ChatInput } from '../../shared/chat'
import type { Chat, ChatMessage } from './groq'

export const CHAT_SYSTEM = `Bạn là trợ giảng của "Data Judgment Lab" — app học phân tích dữ liệu, kinh tế, tài chính, đầu tư, bất động sản bằng tiếng Việt.
Người học đang đọc tài liệu và hỏi nhanh khi gặp chỗ chưa hiểu.

Cách trả lời:
- Tiếng Việt, ngắn gọn (thường dưới 150 từ), đi thẳng vào ý; người học cần hỏi sâu thì sẽ hỏi tiếp.
- Hỏi định nghĩa/thuật ngữ: 1–2 câu định nghĩa dễ hiểu, rồi một ví dụ đời thường hoặc ví dụ số nhỏ.
- Hỏi công thức: viết công thức trong \`dấu code\`, giải thích từng thành phần, rồi tính thử một ví dụ ngắn.
- Ưu tiên bám NGỮ CẢNH TRANG và ĐOẠN TRÍCH nếu có. Số liệu trong case là dữ liệu mô phỏng — không coi là số thật.
- Không bịa số liệu thời sự, ngày tháng hay nguồn; không chắc thì nói rõ. Không đưa khuyến nghị mua/bán tài sản.
- Định dạng: chỉ dùng **đậm** và \`code\`; liệt kê bằng các dòng bắt đầu "- "; đoạn cách nhau một dòng trống. Không dùng tiêu đề #, bảng hay LaTeX.
- Câu hỏi không liên quan tới việc học (ví dụ viết code hộ, chuyện riêng tư): từ chối lịch sự trong một câu.`

/** Ghép system prompt + ngữ cảnh trang + hội thoại. */
export function chatMessages(input: ChatInput): ChatMessage[] {
  const extra = [
    input.context && `NGỮ CẢNH TRANG ĐANG ĐỌC:\n${input.context}`,
    input.quote && `ĐOẠN TRÍCH NGƯỜI HỌC ĐANG BÔI ĐEN (câu hỏi cuối thường nói về đoạn này):\n"""${input.quote}"""`,
  ].filter(Boolean)
  return [
    { role: 'system', content: CHAT_SYSTEM },
    ...(extra.length ? [{ role: 'system' as const, content: extra.join('\n\n') }] : []),
    ...input.messages,
  ]
}

export async function chatReply(chat: Chat, model: string, input: ChatInput): Promise<string> {
  const result = await chat({
    model,
    messages: chatMessages(input),
    reasoning_effort: 'low',
    max_completion_tokens: 1200,
    temperature: 0.3,
  })
  console.log(JSON.stringify({ event: 'groq_usage', step: 'chat', ...result.usage }))
  return result.content.trim()
}
