import { KeyRound, Trash2 } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { isGroqKey } from '../../../shared/chat'
import { useProgress } from '../../state/ProgressProvider'
import { useToast } from '../ui/Toast'
import { Button, Card } from '../ui/primitives'
import styles from './SyncCard.module.css'

/**
 * Nhập/xóa key Groq của người dùng: mọi tính năng AI chạy bằng key này (máy chủ không có key chung).
 * `compact`: dạng gọn đặt ngay trong trang Hỏi AI / bong bóng chat khi chưa có key.
 */
export function GroqKeyCard({ compact = false }: { compact?: boolean }) {
  const { groqKey, sync, actions } = useProgress()
  const toast = useToast()
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  const save = (e: FormEvent) => {
    e.preventDefault()
    const key = input.trim()
    if (!isGroqKey(key)) return setError('Key không đúng định dạng — key Groq bắt đầu bằng "gsk_".')
    actions.setGroqKey(key)
    setInput('')
    setError('')
    toast(sync.code ? 'Đã lưu key — máy khác dùng cùng mã đồng bộ cũng sẽ có key này.' : 'Đã lưu key trên trình duyệt này.')
  }

  if (groqKey)
    return (
      <Card className={styles.card}>
        <div className={styles.codeRow}>
          <div>
            <span className={styles.label}>Key Groq của bạn</span>
            <code className={styles.code}>gsk_…{groqKey.slice(-4)}</code>
          </div>
          <Button size="sm" variant="ghost" onClick={() => (actions.setGroqKey(null), toast('Đã xóa key.'))}>
            <Trash2 size={16} /> Xóa key
          </Button>
        </div>
        <p className={styles.note}>
          Key lưu trên trình duyệt này{sync.code ? ' và được mã hóa theo mã đồng bộ — ai có mã đồng bộ cũng dùng được key' : ''}. Mỗi lần hỏi, key được gửi kèm tới máy chủ của app để gọi Groq, không được lưu lại. Bài do “Hỏi AI” tạo được lưu công khai cho mọi người đọc.
        </p>
      </Card>
    )

  return (
    <Card className={styles.card}>
      <div className={styles.lead}>
        <KeyRound size={22} aria-hidden />
        <p>
          Tính năng AI chạy bằng <b>key Groq miễn phí của bạn</b>. Tạo key: đăng nhập{' '}
          <a href="https://console.groq.com/keys" target="_blank" rel="noreferrer">
            console.groq.com/keys
          </a>{' '}
          (dùng tài khoản Google) → <b>Create API Key</b> → sao chép rồi dán vào đây.
        </p>
      </div>
      <form className={compact ? styles.row : styles.link} onSubmit={save}>
        {!compact && <label htmlFor="groq-key">Key Groq</label>}
        <div className={styles.row}>
          <input
            id="groq-key"
            className={styles.keyInput}
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="gsk_…"
            aria-label="Key Groq"
            autoComplete="off"
            spellCheck={false}
          />
          <Button type="submit" variant="primary" disabled={!input.trim()}>
            Lưu key
          </Button>
        </div>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </Card>
  )
}
