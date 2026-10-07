import { CheckCircle2, CornerDownLeft, Search } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cases } from '../content'
import { curatedExplainers, searchExplainers } from '../content/explainerLibrary'
import { domainById, levelById, skillById, topicById } from '../content/taxonomy'
import { searchCases } from '../lib/search'
import { useProgress } from '../state/ProgressProvider'
import styles from './CommandPalette.module.css'

type Result = { id: string; href: string; glyph: string; title: string; detail: string; done: boolean }

export function CommandPalette({ onClose }: { onClose: () => void }) {
  const { progress } = useProgress()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const results = useMemo<Result[]>(() => {
    const caseResults = searchCases(cases, query).map((c) => ({
      id: `case-${c.id}`,
      href: `/case/${c.id}`,
      glyph: domainById(c.domain).glyph,
      title: c.title,
      detail: `Case · ${levelById(c.level).name} · ${c.skills.map((s) => skillById(s).name).join(', ')}`,
      done: !!progress.completed[c.id],
    }))
    const explainerResults = searchExplainers(curatedExplainers, query).map((e) => ({
      id: `exp-${e.slug}`,
      href: `/explain/${e.slug}`,
      glyph: topicById(e.topic).glyph,
      title: e.title,
      detail: `Đọc nhanh · ${topicById(e.topic).name}`,
      done: !!progress.explainersRead[e.slug],
    }))
    // xen kẽ để cả hai loại đều xuất hiện trong 8 kết quả đầu
    const merged: Result[] = []
    for (let i = 0; merged.length < 8 && (i < caseResults.length || i < explainerResults.length); i++) {
      if (caseResults[i]) merged.push(caseResults[i])
      if (explainerResults[i]) merged.push(explainerResults[i])
    }
    return merged.slice(0, 8)
  }, [query, progress])

  useEffect(() => inputRef.current?.focus(), [])
  useEffect(() => setActive(0), [query])

  const go = (href: string) => {
    navigate(href)
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
    } else if (e.key === 'Enter' && results[active]) go(results[active].href)
  }

  return (
    <div className={styles.overlay} onMouseDown={onClose}>
      <div className={styles.dialog} role="dialog" aria-modal="true" aria-label="Tìm kiếm" onMouseDown={(e) => e.stopPropagation()} onKeyDown={onKeyDown}>
        <label className={styles.inputRow}>
          <Search size={20} aria-hidden />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm case, bài đọc nhanh, kỹ năng…"
            aria-label="Tìm kiếm"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={results[active] ? `opt-${results[active].id}` : undefined}
          />
          <kbd>Esc</kbd>
        </label>
        <ul id="palette-list" role="listbox" className={styles.list}>
          {results.map((r, i) => (
            <li
              key={r.id}
              id={`opt-${r.id}`}
              role="option"
              aria-selected={i === active}
              className={i === active ? styles.active : undefined}
              onMouseEnter={() => setActive(i)}
              onClick={() => go(r.href)}
            >
              <span className={styles.glyph}>{r.glyph}</span>
              <span className={styles.text}>
                <b>{r.title}</b>
                <small>{r.detail}</small>
              </span>
              {r.done && <CheckCircle2 size={18} className={styles.done} aria-label="Đã học" />}
              {i === active && <CornerDownLeft size={16} aria-hidden />}
            </li>
          ))}
          {!results.length && <li className={styles.none}>Không có kết quả cho “{query}”.</li>}
        </ul>
      </div>
    </div>
  )
}
