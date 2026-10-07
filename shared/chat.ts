/** Hỏi nhanh AI (bong bóng chat): kiểu và giới hạn dùng chung cho frontend và Worker. */

export type ChatTurn = { role: 'user' | 'assistant'; content: string }

export type ChatInput = {
  /** hội thoại, tin cuối là câu hỏi của người dùng */
  messages: ChatTurn[]
  /** trang đang đọc: tiêu đề, câu hỏi, phần hiện tại */
  context?: string
  /** đoạn người dùng bôi đen trên trang */
  quote?: string
}

export type ChatReply = { reply: string }

export const CHAT_LIMITS = {
  /** chỉ gửi N tin gần nhất */
  messages: 12,
  messageChars: 1500,
  contextChars: 1500,
  quoteChars: 800,
} as const

const clip = (s: string, max: number) => (s.length > max ? `${s.slice(0, max - 1).trimEnd()}…` : s)

/**
 * Kiểm tra và cắt gọn input (kể cả body không tin cậy gửi tới Worker).
 * Trả về input sạch, hoặc chuỗi mô tả lỗi.
 */
export function parseChatInput(body: unknown): ChatInput | string {
  if (typeof body !== 'object' || body === null) return 'Thiếu nội dung.'
  const b = body as Record<string, unknown>
  if (!Array.isArray(b.messages)) return 'Thiếu "messages".'
  const messages: ChatTurn[] = []
  for (const m of b.messages.slice(-CHAT_LIMITS.messages)) {
    const { role, content } = (m ?? {}) as Record<string, unknown>
    if ((role !== 'user' && role !== 'assistant') || typeof content !== 'string') return 'Tin nhắn sai cấu trúc.'
    const text = content.trim()
    if (text) messages.push({ role, content: clip(text, CHAT_LIMITS.messageChars) })
  }
  if (messages.at(-1)?.role !== 'user') return 'Tin cuối phải là câu hỏi của bạn.'
  const opt = (v: unknown, max: number) => (typeof v === 'string' && v.trim() ? clip(v.trim(), max) : undefined)
  return { messages, context: opt(b.context, CHAT_LIMITS.contextChars), quote: opt(b.quote, CHAT_LIMITS.quoteChars) }
}
