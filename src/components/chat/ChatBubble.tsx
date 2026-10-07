import { BookOpen, LoaderCircle, MessageCircleQuestion, RotateCcw, Send, SquarePen, TextQuote, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from 'react'
import { useMatches } from 'react-router-dom'
import { CHAT_LIMITS, type ChatTurn } from '../../../shared/chat'
import { askChat, describeError } from '../../lib/api'
import { Markdown } from '../../lib/markdown'
import { useProgress } from '../../state/ProgressProvider'
import { Button, cx } from '../ui/primitives'
import styles from './ChatBubble.module.css'
import { pageContext, pageTitle, type PageRef } from './pageContext'

type Message = ChatTurn & { quote?: string }

const clipQuote = (s: string) => (s.length > CHAT_LIMITS.quoteChars ? `${s.slice(0, CHAT_LIMITS.quoteChars - 1)}…` : s)

/** Tin cũ có trích đoạn: ghép đoạn trích vào nội dung để AI hiểu các câu hỏi nối tiếp. */
const toTurn = ({ role, content, quote }: Message): ChatTurn =>
  role === 'user' && quote ? { role, content: `Về đoạn: "${quote}"\n\n${content}` } : { role, content }

function suggestionsFor(hasQuote: boolean, hasPage: boolean): string[] {
  if (hasQuote) return ['Giải thích đoạn này dễ hiểu hơn', 'Các thuật ngữ trong đoạn này nghĩa là gì?', 'Cho một ví dụ số để minh họa']
  if (hasPage) return ['Tóm tắt ý chính của phần tôi đang đọc', 'Thuật ngữ quan trọng nhất trong bài này là gì?', 'Công thức chính của bài tính thế nào?']
  return ['CVR, AOV và ARPU khác nhau thế nào?', 'Nghịch lý Simpson là gì?', 'Lãi suất thực tính thế nào?']
}

/**
 * Bong bóng "Hỏi nhanh AI" ở góc dưới phải: hỏi định nghĩa, công thức… khi đang đọc.
 * Tự gửi kèm ngữ cảnh trang và đoạn văn đang bôi đen trong nội dung chính (#main).
 */
export function ChatBubble() {
  const { progress } = useProgress()
  const last = useMatches().at(-1)
  const page: PageRef = {
    caseId: last?.pathname.startsWith('/case/') ? last.params.id : undefined,
    slug: last?.pathname.startsWith('/explain/') ? last.params.slug : undefined,
  }
  const context = pageContext(page, progress)
  const title = pageTitle(page, progress)

  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [quote, setQuote] = useState('')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  const openRef = useRef(open)
  const abortRef = useRef<AbortController | null>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const fabRef = useRef<HTMLButtonElement>(null)

  // Theo dõi đoạn bôi đen trong nội dung chính. Khi khung chat đang mở, bấm vào ô nhập làm mất vùng chọn
  // nhưng vẫn giữ đoạn trích; khi đóng, bỏ chọn = bỏ đoạn trích.
  useEffect(() => {
    const onSelection = () => {
      const sel = document.getSelection()
      const text = sel?.toString().replace(/\s+/g, ' ').trim() ?? ''
      const main = document.getElementById('main')
      if (text && sel?.anchorNode && main?.contains(sel.anchorNode)) setQuote(clipQuote(text))
      else if (!text && !openRef.current) setQuote('')
    }
    document.addEventListener('selectionchange', onSelection)
    return () => document.removeEventListener('selectionchange', onSelection)
  }, [])

  useEffect(() => {
    openRef.current = open
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight })
  }, [messages, pending, error])

  useEffect(() => () => abortRef.current?.abort(), [])

  const request = async (history: Message[], currentQuote: string) => {
    abortRef.current?.abort()
    const ctrl = new AbortController()
    abortRef.current = ctrl
    setPending(true)
    setError('')
    try {
      const earlier = history.slice(0, -1).map(toTurn)
      const question = history.at(-1)!
      const reply = await askChat({ messages: [...earlier, { role: 'user', content: question.content }], context, quote: currentQuote || undefined }, ctrl.signal)
      setMessages((m) => [...m, { role: 'assistant', content: reply }])
    } catch (err) {
      if (!ctrl.signal.aborted) setError(describeError(err))
    } finally {
      if (abortRef.current === ctrl) setPending(false)
    }
  }

  const send = (text: string) => {
    const q = text.trim()
    if (!q || pending) return
    const next: Message[] = [...messages, { role: 'user', content: q, quote: quote || undefined }]
    setMessages(next)
    setInput('')
    setQuote('')
    void request(next, quote)
  }

  const retry = () => {
    const lastMsg = messages.at(-1)
    if (lastMsg?.role === 'user') void request(messages, lastMsg.quote ?? '')
  }

  const reset = () => {
    abortRef.current?.abort()
    setPending(false)
    setMessages([])
    setError('')
    inputRef.current?.focus()
  }

  const close = () => {
    setOpen(false)
    fabRef.current?.focus()
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    send(input)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault()
      send(input)
    }
  }

  const suggestions = useMemo(() => suggestionsFor(!!quote, !!context), [quote, context])

  return (
    <div className={styles.root} data-chat-fab>
      {open && (
        <section
          id="quick-chat"
          className={styles.panel}
          role="dialog"
          aria-label="Hỏi nhanh AI"
          onKeyDown={(e) => e.key === 'Escape' && (e.stopPropagation(), close())}
        >
          <header className={styles.head}>
            <MessageCircleQuestion size={20} aria-hidden />
            <b>Hỏi nhanh AI</b>
            {messages.length > 0 && (
              <button type="button" className={styles.iconBtn} onClick={reset} aria-label="Cuộc trò chuyện mới" title="Cuộc trò chuyện mới">
                <SquarePen size={18} />
              </button>
            )}
            <button type="button" className={styles.iconBtn} onClick={close} aria-label="Đóng">
              <X size={20} />
            </button>
          </header>

          {title && (
            <p className={styles.context}>
              <BookOpen size={14} aria-hidden /> <span>Đang đọc: {title}</span>
            </p>
          )}

          <div ref={listRef} className={styles.list} aria-live="polite">
            {messages.length === 0 && (
              <div className={styles.empty}>
                <p>Hỏi định nghĩa, công thức hay chỗ chưa hiểu trong bài. Mẹo: bôi đen một đoạn trong bài rồi hỏi — AI sẽ giải thích đúng đoạn đó.</p>
                <div className={styles.suggestions}>
                  {suggestions.map((s) => (
                    <button key={s} type="button" onClick={() => send(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={cx(styles.msg, m.role === 'user' ? styles.user : styles.ai)}>
                {m.quote && <blockquote className={styles.msgQuote}>“{m.quote}”</blockquote>}
                {m.role === 'user' ? <p>{m.content}</p> : <Markdown md={m.content} />}
              </div>
            ))}
            {pending && (
              <div className={cx(styles.msg, styles.ai, styles.thinking)}>
                <LoaderCircle size={16} className={styles.spin} aria-hidden /> Đang trả lời…
              </div>
            )}
            {error && (
              <div className={styles.error} role="alert">
                <span>{error}</span>
                <Button size="sm" variant="ghost" onClick={retry}>
                  <RotateCcw size={15} /> Thử lại
                </Button>
              </div>
            )}
          </div>

          <form className={styles.form} onSubmit={onSubmit}>
            {quote && (
              <div className={styles.quote}>
                <TextQuote size={16} aria-hidden />
                <span>{quote}</span>
                <button type="button" className={styles.iconBtn} onClick={() => setQuote('')} aria-label="Bỏ đoạn trích">
                  <X size={16} />
                </button>
              </div>
            )}
            <div className={styles.inputRow}>
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                rows={2}
                maxLength={600}
                placeholder={quote ? 'Hỏi về đoạn đã chọn…' : 'Nhập câu hỏi (Enter để gửi, Shift+Enter xuống dòng)'}
                aria-label="Câu hỏi"
              />
              <button type="submit" className={styles.send} disabled={!input.trim() || pending} aria-label="Gửi">
                <Send size={18} />
              </button>
            </div>
            <small className={styles.note}>AI có thể sai — hãy đối chiếu với bài học. Số lượt hỏi mỗi ngày có giới hạn.</small>
          </form>
        </section>
      )}

      {!open && quote && (
        <button type="button" className={styles.hint} onMouseDown={(e) => e.preventDefault()} onClick={() => setOpen(true)}>
          <TextQuote size={15} aria-hidden /> Hỏi AI về đoạn đã chọn
        </button>
      )}
      <button
        ref={fabRef}
        type="button"
        className={styles.fab}
        // giữ vùng bôi đen khi bấm nút
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-controls={open ? 'quick-chat' : undefined}
        aria-label={open ? 'Đóng hỏi nhanh AI' : 'Mở hỏi nhanh AI'}
      >
        {open ? <X size={24} /> : <MessageCircleQuestion size={26} />}
      </button>
    </div>
  )
}
