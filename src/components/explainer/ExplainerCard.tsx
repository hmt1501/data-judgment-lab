import { Bot, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ExplainerSummary } from '../../../shared/explainer'
import { topicById } from '../../../shared/taxonomy'
import { inline } from '../../lib/markdown'
import { useProgress } from '../../state/ProgressProvider'
import { Pill } from '../ui/primitives'
import styles from './ExplainerCard.module.css'

export function ExplainerCard({ e }: { e: ExplainerSummary }) {
  const { progress } = useProgress()
  const topic = topicById(e.topic)
  const read = !!progress.explainersRead[e.slug]
  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <span aria-hidden>{topic.glyph}</span> {topic.name}
        {e.origin === 'ai' && (
          <Pill tone="warning" className={styles.ai}>
            <Bot size={13} /> AI
          </Pill>
        )}
        {read && <CheckCircle2 size={16} className={styles.read} aria-label="Đã đọc" />}
      </div>
      <h3>
        <Link to={`/explain/${e.slug}`} className={styles.link}>
          {e.title}
        </Link>
      </h3>
      <p>{inline(e.tldr)}</p>
    </article>
  )
}
