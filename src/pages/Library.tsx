import { Search, SearchX, X } from 'lucide-react'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CaseCard } from '../components/CaseCard'
import { Button, EmptyState, PageHeader } from '../components/ui/primitives'
import { cases } from '../content'
import { domains, isSkillId, levels, skillById, skills } from '../content/taxonomy'
import { searchCases } from '../lib/search'
import { useProgress } from '../state/ProgressProvider'
import styles from './Library.module.css'

const statuses = [
  { id: '', label: 'Mọi trạng thái' },
  { id: 'todo', label: 'Chưa học' },
  { id: 'reading', label: 'Đang đọc' },
  { id: 'done', label: 'Đã học' },
  { id: 'saved', label: 'Đã lưu' },
] as const

const usedSkills = skills.filter((s) => cases.some((c) => c.skills.includes(s.id)))

export function Library() {
  const { progress } = useProgress()
  const [params, setParams] = useSearchParams()
  const q = params.get('q') ?? ''
  const level = params.get('level') ?? ''
  const domain = params.get('domain') ?? ''
  const status = params.get('status') ?? ''
  const rawSkill = params.get('skill') ?? ''
  const skill = isSkillId(rawSkill) ? rawSkill : ''

  const set = (key: string, value: string) =>
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        if (value) next.set(key, value)
        else next.delete(key)
        return next
      },
      { replace: true },
    )

  const results = useMemo(() => {
    const opened = new Set(progress.history.map((h) => h.caseId))
    return searchCases(cases, q).filter((c) => {
      if (level && c.level !== level) return false
      if (domain && c.domain !== domain) return false
      if (skill && !c.skills.includes(skill)) return false
      const done = !!progress.completed[c.id]
      if (status === 'todo') return !done && !opened.has(c.id)
      if (status === 'reading') return !done && opened.has(c.id)
      if (status === 'done') return done
      if (status === 'saved') return progress.saved.includes(c.id)
      return true
    })
  }, [q, level, domain, status, skill, progress])

  const filtered = q || level || domain || status || skill

  return (
    <div>
      <PageHeader
        eyebrow="Thư viện"
        title="Chọn tình huống để học"
        desc="Mỗi case là một bài giải mẫu với dữ liệu mô phỏng, câu hỏi kiểm tra nhanh và nguồn tham khảo thật."
      />

      <div className={styles.tools}>
        <label className={styles.search}>
          <Search size={20} aria-hidden />
          <input value={q} onChange={(e) => set('q', e.target.value)} placeholder="Tìm theo tên, kỹ năng, lĩnh vực…" aria-label="Tìm case" />
          {q && (
            <button aria-label="Xóa từ khóa" onClick={() => set('q', '')}>
              <X size={18} />
            </button>
          )}
        </label>
        <select value={domain} onChange={(e) => set('domain', e.target.value)} aria-label="Lọc lĩnh vực">
          <option value="">Mọi lĩnh vực</option>
          {domains.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>
        <select value={level} onChange={(e) => set('level', e.target.value)} aria-label="Lọc cấp độ">
          <option value="">Mọi cấp độ</option>
          {levels.map((l) => (
            <option key={l.id} value={l.id}>
              {l.name}
            </option>
          ))}
        </select>
        <select value={status} onChange={(e) => set('status', e.target.value)} aria-label="Lọc trạng thái">
          {statuses.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.chips} role="group" aria-label="Lọc theo kỹ năng">
        {usedSkills.map((s) => (
          <button key={s.id} className={styles.chip} aria-pressed={skill === s.id} onClick={() => set('skill', skill === s.id ? '' : s.id)}>
            {s.name}
          </button>
        ))}
      </div>

      <div className={styles.summary} aria-live="polite">
        <span>
          {results.length} / {cases.length} case{skill && ` · kỹ năng “${skillById(skill).name}”`}
        </span>
        {filtered && (
          <Button variant="ghost" size="sm" onClick={() => setParams({}, { replace: true })}>
            Xóa bộ lọc
          </Button>
        )}
      </div>

      {results.length ? (
        <div className={styles.grid}>
          {results.map((c) => (
            <CaseCard key={c.id} c={c} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<SearchX size={22} />}
          title="Không có case phù hợp"
          desc="Thử từ khóa khác (không cần gõ dấu) hoặc bỏ bớt bộ lọc."
          action={
            <Button variant="secondary" onClick={() => setParams({}, { replace: true })}>
              Xóa bộ lọc
            </Button>
          }
        />
      )}
    </div>
  )
}
