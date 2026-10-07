import { ArrowRight, BookOpen, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, EmptyState, PageHeader, ProgressBar, SectionTitle } from '../components/ui/primitives'
import { useToast } from '../components/ui/Toast'
import { caseById, cases } from '../content'
import { levelById } from '../content/taxonomy'
import { quizStats, ratio, skillMastery } from '../lib/insights'
import type { Theme } from '../state/progress'
import { useProgress } from '../state/ProgressProvider'
import styles from './Profile.module.css'

const themes: { id: Theme; label: string }[] = [
  { id: 'system', label: 'Theo hệ thống' },
  { id: 'light', label: 'Sáng' },
  { id: 'dark', label: 'Tối' },
]

const fmtDate = (iso: string) => new Date(iso).toLocaleDateString('vi-VN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })

export function Profile() {
  const { progress, actions } = useProgress()
  const toast = useToast()
  const [confirmReset, setConfirmReset] = useState(false)
  const done = Object.keys(progress.completed).length
  const quiz = quizStats(cases, progress)
  const mastery = skillMastery(cases, progress)
  const groups = [...new Set(mastery.map((s) => s.group))]
  const history = progress.history.map((h) => ({ ...h, c: caseById(h.caseId)! })).filter((h) => h.c)

  const reset = () => {
    actions.reset()
    setConfirmReset(false)
    toast('Đã xóa toàn bộ tiến độ học.')
  }

  return (
    <div>
      <PageHeader eyebrow="Hồ sơ" title="Hồ sơ & cài đặt" desc="Mọi dữ liệu học tập được lưu trong trình duyệt này, không gửi đi đâu." />

      <div className={styles.top}>
        <Card className={styles.settings}>
          <h2>Cài đặt</h2>
          <label className={styles.field}>
            <span>Tên hiển thị</span>
            <input
              value={progress.settings.name}
              onChange={(e) => actions.updateSettings({ name: e.target.value })}
              placeholder="Để trống sẽ hiển thị “bạn”"
              maxLength={40}
            />
          </label>
          <fieldset className={styles.field}>
            <legend>Giao diện</legend>
            <div className={styles.segmented}>
              {themes.map((t) => (
                <label key={t.id}>
                  <input type="radio" name="theme" checked={progress.settings.theme === t.id} onChange={() => actions.updateSettings({ theme: t.id })} />
                  <span>{t.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className={styles.danger}>
            {confirmReset ? (
              <>
                <span>Xóa hết case đã học, câu trả lời và lịch sử?</span>
                <Button size="sm" variant="primary" onClick={reset}>
                  Xóa
                </Button>
                <Button size="sm" onClick={() => setConfirmReset(false)}>
                  Hủy
                </Button>
              </>
            ) : (
              <Button size="sm" onClick={() => setConfirmReset(true)}>
                <Trash2 size={15} /> Xóa tiến độ học
              </Button>
            )}
          </div>
        </Card>

        <Card className={styles.overview}>
          <div>
            <b className="num">
              {done}/{cases.length}
            </b>
            <span>case đã học</span>
          </div>
          <div>
            <b className="num">
              {quiz.correct}/{quiz.answered}
            </b>
            <span>câu trả lời đúng</span>
          </div>
          <div>
            <b className="num">{progress.saved.length}</b>
            <span>case đã lưu</span>
          </div>
          <div>
            <b className="num">{Object.keys(progress.explainersRead).length}</b>
            <span>bài đọc nhanh đã đọc</span>
          </div>
        </Card>
      </div>

      <SectionTitle eyebrow="Kỹ năng" title="Mức độ đã luyện" />
      <Card className={styles.skills}>
        {groups.map((g) => (
          <div key={g} className={styles.group}>
            <h3>{g}</h3>
            {mastery
              .filter((s) => s.group === g)
              .map((s) => (
                <Link key={s.id} to={`/library?skill=${s.id}`} className={styles.skillRow}>
                  <span>{s.name}</span>
                  <ProgressBar value={ratio(s)} label={s.name} />
                  <span className="num">
                    {s.done}/{s.total}
                  </span>
                </Link>
              ))}
          </div>
        ))}
      </Card>

      <SectionTitle eyebrow="Hoạt động" title="Lịch sử học" />
      {history.length ? (
        <Card className={styles.history}>
          {history.map(({ c, openedAt }) => (
            <Link key={c.id} to={`/case/${c.id}`} className={styles.historyRow}>
              <span>
                <b>{c.title}</b>
                <small>
                  {levelById(c.level).name} · mở lúc {fmtDate(openedAt)}
                </small>
              </span>
              <span className={progress.completed[c.id] ? styles.statusDone : styles.statusReading}>{progress.completed[c.id] ? 'Đã học' : 'Đang đọc'}</span>
              <ArrowRight size={16} aria-hidden />
            </Link>
          ))}
        </Card>
      ) : (
        <EmptyState icon={<BookOpen size={22} />} title="Chưa có hoạt động" desc="Mở một case để bắt đầu; lịch sử sẽ hiện ở đây." />
      )}
    </div>
  )
}
