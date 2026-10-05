import { lazy, Suspense } from 'react'
import { AlertTriangle, Lightbulb, MessageSquareQuote, Sigma } from 'lucide-react'
import type { Block as BlockData, Tone } from '../../content/types'
import { inline, Markdown } from '../../lib/markdown'
import { cx } from '../ui/primitives'
import { Quiz } from './Quiz'
import styles from './blocks.module.css'

// Recharts nặng: chỉ tải khi trang có biểu đồ
const Chart = lazy(() => import('./Chart').then((m) => ({ default: m.Chart })))

const toneClass: Record<Tone, string | undefined> = {
  neutral: undefined,
  positive: styles.positive,
  negative: styles.negative,
  warning: styles.warning,
}

const calloutMeta = {
  insight: { icon: Lightbulb, label: 'Điểm mấu chốt' },
  expert: { icon: MessageSquareQuote, label: 'Góc nhìn chuyên gia' },
  warning: { icon: AlertTriangle, label: 'Cẩn trọng' },
} as const

export function Block({ block }: { block: BlockData }) {
  switch (block.kind) {
    case 'text':
      return (
        <div className={styles.prose}>
          <Markdown md={block.md} />
        </div>
      )

    case 'kpis':
      return (
        <div className={styles.kpis}>
          {block.items.map((k) => (
            <div key={k.label} className={styles.kpi}>
              <span className={styles.kpiLabel}>{k.label}</span>
              <b className="num">{k.value}</b>
              {k.delta && <span className={cx(styles.delta, 'num', toneClass[k.tone ?? 'neutral'])}>{k.delta}</span>}
              {k.note && <small>{k.note}</small>}
            </div>
          ))}
        </div>
      )

    case 'table': {
      const rowTone = new Map(block.highlight?.map((h) => [h.row, h.tone]))
      return (
        <figure className={styles.figure}>
          <figcaption className={styles.figTitle}>{block.title}</figcaption>
          <div className={styles.tableWrap} tabIndex={0} role="region" aria-label={block.title}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {block.columns.map((col) => (
                    <th key={col.key} className={col.align === 'right' ? styles.right : undefined} scope="col">
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i} className={cx(rowTone.has(i) && styles.hl, toneClass[rowTone.get(i) ?? 'neutral'])}>
                    {block.columns.map((col, j) => {
                      const Cell = j === 0 ? 'th' : 'td'
                      return (
                        <Cell key={col.key} scope={j === 0 ? 'row' : undefined} className={cx('num', col.align === 'right' && styles.right)}>
                          {row[col.key]}
                        </Cell>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && <p className={styles.caption}>{inline(block.caption)}</p>}
        </figure>
      )
    }

    case 'chart':
      return (
        <Suspense fallback={<div className={styles.chartLoading} aria-label="Đang tải biểu đồ" />}>
          <Chart block={block} />
        </Suspense>
      )

    case 'formula':
      return (
        <div className={styles.formula}>
          <Sigma size={20} aria-hidden />
          <div>
            <code className={styles.expression}>{block.expression}</code>
            {block.note && <p>{inline(block.note)}</p>}
          </div>
        </div>
      )

    case 'quiz':
      return <Quiz block={block} />

    case 'callout': {
      const meta = calloutMeta[block.tone]
      const Icon = meta.icon
      return (
        <aside className={cx(styles.callout, styles[`callout_${block.tone}`])}>
          <Icon size={20} aria-hidden />
          <div>
            <b>{block.title ?? meta.label}</b>
            <Markdown md={block.md} />
          </div>
        </aside>
      )
    }

    case 'list': {
      const Tag = block.style === 'steps' ? 'ol' : 'ul'
      return (
        <Tag className={cx(styles.list, styles[`list_${block.style}`])}>
          {block.items.map((item, i) => (
            <li key={i}>
              <span>{inline(item)}</span>
            </li>
          ))}
        </Tag>
      )
    }

    case 'actions':
      return (
        <ol className={styles.actions}>
          {block.items.map((a, i) => (
            <li key={i}>
              <span className={styles.actionNo}>{i + 1}</span>
              <div>
                <b>{inline(a.action)}</b>
                <dl>
                  <div>
                    <dt>Phụ trách</dt>
                    <dd>{a.owner}</dd>
                  </div>
                  <div>
                    <dt>Đo bằng</dt>
                    <dd>{a.metric}</dd>
                  </div>
                  <div>
                    <dt>Ngưỡng thành công</dt>
                    <dd>{a.threshold}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ol>
      )

    case 'pitfalls':
      return (
        <div className={styles.pitfalls}>
          {block.items.map((p) => (
            <article key={p.title} className={styles.pitfall}>
              <h4>
                <AlertTriangle size={18} aria-hidden /> {p.title}
              </h4>
              <p>
                <span className={styles.tagBad}>Vì sao sai</span> {inline(p.why)}
              </p>
              <p>
                <span className={styles.tagGood}>Nên làm</span> {inline(p.instead)}
              </p>
            </article>
          ))}
        </div>
      )
  }
}
