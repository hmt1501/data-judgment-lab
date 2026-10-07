import { Check, Cloud, CloudOff, Copy, Link2, LoaderCircle, RefreshCw, TriangleAlert } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { formatSyncCode } from '../../../shared/sync'
import { useProgress } from '../../state/ProgressProvider'
import { useToast } from '../ui/Toast'
import { Button, Card } from '../ui/primitives'
import styles from './SyncCard.module.css'

const fmtTime = (iso: string) => new Date(iso).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })

/** Bật/nhập/tắt "mã đồng bộ" để học tiếp trên thiết bị khác. */
export function SyncCard() {
  const { sync, actions } = useProgress()
  const toast = useToast()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [input, setInput] = useState('')
  const [confirmOff, setConfirmOff] = useState(false)

  const act = async (fn: () => Promise<string | null>, ok: string) => {
    setBusy(true)
    setError('')
    const err = await fn()
    setBusy(false)
    if (err) setError(err)
    else toast(ok)
    return !err
  }

  const link = async (e: FormEvent) => {
    e.preventDefault()
    if (await act(() => actions.linkSync(input), 'Đã kết nối — tiến độ hai máy đã được gộp.')) setInput('')
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(formatSyncCode(sync.code!))
      toast('Đã sao chép mã đồng bộ.')
    } catch {
      setError('Không sao chép được — hãy chọn mã và sao chép thủ công.')
    }
  }

  if (!sync.code)
    return (
      <Card className={styles.card}>
        <div className={styles.lead}>
          <CloudOff size={22} aria-hidden />
          <p>
            Tiến độ đang chỉ lưu trên trình duyệt này — đổi máy hoặc xóa dữ liệu duyệt web sẽ mất. Bật đồng bộ để nhận một <b>mã</b>, rồi nhập mã đó trên máy khác để học tiếp.
          </p>
        </div>
        <div className={styles.row}>
          <Button variant="primary" disabled={busy} onClick={() => void act(actions.enableSync, 'Đã bật đồng bộ. Lưu mã lại để dùng trên máy khác.')}>
            {busy ? <LoaderCircle size={18} className={styles.spin} /> : <Cloud size={18} />} Bật đồng bộ
          </Button>
        </div>
        <form className={styles.link} onSubmit={(e) => void link(e)}>
          <label htmlFor="sync-code">Đã có mã từ máy khác?</label>
          <div className={styles.row}>
            <input
              id="sync-code"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="XXXX-XXXX-XXXX-XXXX"
              autoComplete="off"
              autoCapitalize="characters"
              spellCheck={false}
              maxLength={24}
            />
            <Button type="submit" disabled={busy || !input.trim()}>
              <Link2 size={18} /> Kết nối
            </Button>
          </div>
        </form>
        {error && <p className={styles.error}>{error}</p>}
      </Card>
    )

  const { status } = sync
  return (
    <Card className={styles.card}>
      <div className={styles.codeRow}>
        <div>
          <span className={styles.label}>Mã đồng bộ của bạn</span>
          <code className={styles.code}>{formatSyncCode(sync.code)}</code>
        </div>
        <Button size="sm" onClick={() => void copy()}>
          <Copy size={16} /> Sao chép
        </Button>
      </div>

      <p className={styles.status} aria-live="polite">
        {status.phase === 'syncing' && (
          <>
            <LoaderCircle size={16} className={styles.spin} aria-hidden /> Đang đồng bộ…
          </>
        )}
        {status.phase === 'ok' && (
          <>
            <Check size={16} aria-hidden /> Đã đồng bộ{status.at ? ` lúc ${fmtTime(status.at)}` : ''}
          </>
        )}
        {status.phase === 'error' && (
          <span className={styles.statusError}>
            <TriangleAlert size={16} aria-hidden /> {status.error}
          </span>
        )}
      </p>

      <p className={styles.note}>
        Trên máy khác: mở <b>Hồ sơ & cài đặt</b> → nhập mã này. Giữ kín mã — ai có mã đều xem và sửa được tiến độ của bạn.
      </p>

      <div className={styles.row}>
        <Button size="sm" disabled={status.phase === 'syncing'} onClick={actions.syncNow}>
          <RefreshCw size={16} /> Đồng bộ ngay
        </Button>
        {confirmOff ? (
          <>
            <span className={styles.confirm}>Đã lưu mã chưa? Máy này sẽ ngừng đồng bộ.</span>
            <Button size="sm" variant="primary" onClick={() => (actions.disableSync(), setConfirmOff(false))}>
              Tắt
            </Button>
            <Button size="sm" onClick={() => setConfirmOff(false)}>
              Hủy
            </Button>
          </>
        ) : (
          <Button size="sm" variant="ghost" onClick={() => setConfirmOff(true)}>
            <CloudOff size={16} /> Tắt trên máy này
          </Button>
        )}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </Card>
  )
}
