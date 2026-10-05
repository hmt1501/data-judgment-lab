import { CheckCircle2, CornerDownLeft, Search } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cases } from '../content'
import { domainById, levelById, skillById } from '../content/taxonomy'
import { searchCases } from '../lib/search'
import { useProgress } from '../state/ProgressProvider'
import styles from './CommandPalette.module.css'

export function CommandPalette({ onClose }: { onClose: () => void }) {
  const { progress } = useProgress()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const results = useMemo(() => searchCases(cases, query).slice(0, 8), [query])

  useEffect(() => inputRef.current?.focus(), [])
  useEffect(() => setActive(0), [query])

  const go = (id: string) => {
    navigate(`/case/${id}`)
    onClose()
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && results[active]) go(results[active].id)
  }

  return (
    <div className={styles.overlay} onMouseDown={onClose}>
      <div className={styles.dialog} role="dialog" aria-modal="true" aria-label="Tìm case" onMouseDown={(e) => e.stopPropagation()} onKeyDown={onKeyDown}>
        <label className={styles.inputRow}>
          <Search size={20} aria-hidden />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm theo tên case, kỹ năng, lĩnh vực…"
            aria-label="Tìm case"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={results[active] ? `opt-${results[active].id}` : undefined}
          />
          <kbd>Esc</kbd>
        </label>
        <ul id="palette-list" role="listbox" className={styles.list}>
          {results.map((c, i) => (
            <li
              key={c.id}
              id={`opt-${c.id}`}
              role="option"
              aria-selected={i === active}
              className={i === active ? styles.active : undefined}
              onMouseEnter={() => setActive(i)}
              onClick={() => go(c.id)}
            >
              <span className={styles.glyph}>{domainById(c.domain).glyph}</span>
              <span className={styles.text}>
                <b>{c.title}</b>
                <small>
                  {levelById(c.level).name} · {c.skills.map((s) => skillById(s).name).join(', ')}
                </small>
              </span>
              {progress.completed[c.id] && <CheckCircle2 size={18} className={styles.done} aria-label="Đã học" />}
              {i === active && <CornerDownLeft size={16} aria-hidden />}
            </li>
          ))}
          {!results.length && <li className={styles.none}>Không có case phù hợp với “{query}”.</li>}
        </ul>
      </div>
    </div>
  )
}
