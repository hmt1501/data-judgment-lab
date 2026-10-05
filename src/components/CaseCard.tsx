import { ArrowRight, Bookmark, CheckCircle2, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { domainById, levelById, skillById } from '../content/taxonomy'
import type { CaseStudy } from '../content/types'
import { useProgress } from '../state/ProgressProvider'
import { Pill } from './ui/primitives'
import styles from './CaseCard.module.css'

export function CaseCard({ c }: { c: CaseStudy }) {
  const { progress, actions } = useProgress()
  const done = !!progress.completed[c.id]
  const opened = progress.history.some((h) => h.caseId === c.id)
  const saved = progress.saved.includes(c.id)
  const domain = domainById(c.domain)

  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <span className={styles.glyph} aria-hidden>
          {domain.glyph}
        </span>
        <span className={styles.meta}>
          {domain.name} · {levelById(c.level).name}
        </span>
        <button
          className={styles.save}
          aria-label={saved ? 'Bỏ lưu case' : 'Lưu case'}
          aria-pressed={saved}
          onClick={() => actions.toggleSaved(c.id)}
        >
          <Bookmark size={18} fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>

      <h3>
        <Link to={`/case/${c.id}`} className={styles.link}>
          {c.title}
        </Link>
      </h3>
      <p className={styles.summary}>{c.summary}</p>

      <div className={styles.tags}>
        {c.skills.map((s) => (
          <Pill key={s}>{skillById(s).name}</Pill>
        ))}
      </div>

      <div className={styles.foot}>
        <span className={styles.minutes}>
          <Clock3 size={16} aria-hidden /> {c.minutes} phút
        </span>
        {done ? (
          <Pill tone="positive">
            <CheckCircle2 size={14} /> Đã học
          </Pill>
        ) : opened ? (
          <Pill tone="warning">Đang đọc</Pill>
        ) : null}
        <span className={styles.cta} aria-hidden>
          {done ? 'Ôn lại' : opened ? 'Đọc tiếp' : 'Bắt đầu'} <ArrowRight size={16} />
        </span>
      </div>
    </article>
  )
}
