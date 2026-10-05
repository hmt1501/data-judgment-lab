import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import styles from './primitives.module.css'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'sm'

const cx = (...names: (string | false | undefined)[]) => names.filter(Boolean).join(' ')
const buttonClass = (variant: Variant, size: Size, extra?: string) =>
  cx(styles.button, styles[variant], size === 'sm' && styles.sm, extra)

export function Button({
  variant = 'secondary',
  size = 'md',
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return <button type="button" className={buttonClass(variant, size, className)} {...rest} />
}

export function ButtonLink({
  variant = 'secondary',
  size = 'md',
  className,
  ...rest
}: LinkProps & { variant?: Variant; size?: Size }) {
  return <Link className={buttonClass(variant, size, className)} {...rest} />
}

export function Card({ children, className, as: Tag = 'section' }: { children: ReactNode; className?: string; as?: 'section' | 'article' | 'div' }) {
  return <Tag className={cx(styles.card, className)}>{children}</Tag>
}

export type PillTone = 'neutral' | 'brand' | 'positive' | 'warning' | 'negative'

export function Pill({ children, tone = 'neutral', className }: { children: ReactNode; tone?: PillTone; className?: string }) {
  return <span className={cx(styles.pill, styles[`pill_${tone}`], className)}>{children}</span>
}

export function ProgressBar({ value, label }: { value: number; label: string }) {
  const pct = Math.round(Math.max(0, Math.min(1, value)) * 100)
  return (
    <div className={styles.bar} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      <span style={{ width: `${pct}%` }} />
    </div>
  )
}

export function ProgressRing({ value, size = 56, children }: { value: number; size?: number; children?: ReactNode }) {
  const stroke = 6
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const v = Math.max(0, Math.min(1, value))
  return (
    <div className={styles.ring} style={{ width: size, height: size }}>
      <svg width={size} height={size} aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--surface-2)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--brand)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - v)}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className={styles.ringLabel}>{children}</span>
    </div>
  )
}

export function PageHeader({ eyebrow, title, desc, action }: { eyebrow: string; title: string; desc?: ReactNode; action?: ReactNode }) {
  return (
    <header className={styles.pageHeader}>
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {desc && <p>{desc}</p>}
      </div>
      {action}
    </header>
  )
}

export function EmptyState({ icon, title, desc, action }: { icon: ReactNode; title: string; desc: string; action?: ReactNode }) {
  return (
    <div className={styles.empty}>
      <div className={styles.emptyIcon}>{icon}</div>
      <b>{title}</b>
      <p>{desc}</p>
      {action}
    </div>
  )
}

export function SectionTitle({ eyebrow, title, action }: { eyebrow?: string; title: string; action?: ReactNode }) {
  return (
    <div className={styles.sectionTitle}>
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h2>{title}</h2>
      </div>
      {action}
    </div>
  )
}

export { cx }
