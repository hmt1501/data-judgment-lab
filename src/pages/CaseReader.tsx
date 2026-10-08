import { ArrowLeft, ArrowRight, Bookmark, CheckCircle2, Clock3, ExternalLink, FlaskConical, Lightbulb, LoaderCircle, RotateCcw } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { Block } from '../components/blocks/Block'
import { Button, ButtonLink, EmptyState, Pill, ProgressBar } from '../components/ui/primitives'
import { useToast } from '../components/ui/Toast'
import { caseById, cases, loadCase } from '../content'
import { domainById, levelById, skillById } from '../../shared/taxonomy'
import type { CaseStudy, SectionKind } from '../content/types'
import { recommendNext } from '../state/insights'
import { useProgress } from '../state/ProgressProvider'
import styles from './CaseReader.module.css'
import { NotFound } from './NotFound'

const kindLabel: Record<SectionKind, string> = {
  context: 'Bối cảnh',
  framework: 'Khung tư duy',
  analysis: 'Phân tích',
  solution: 'Giải pháp',
  pitfalls: 'Bẫy thường gặp',
}

type TocItem = { id: string; title: string; label: string }

function tocOf(c: CaseStudy): TocItem[] {
  let analysis = 0
  return [
    ...c.sections.map((s) => ({
      id: s.id,
      title: s.title,
      label: s.kind === 'analysis' ? `Phân tích ${++analysis}` : kindLabel[s.kind],
    })),
    { id: 'takeaways', title: 'Ghi nhớ & tìm hiểu thêm', label: 'Tổng kết' },
  ]
}

const anchor = (id: string) => `sec-${id}`

type Body = { status: 'loading' } | { status: 'ready'; c: CaseStudy } | { status: 'error' }

export function CaseReader() {
  const { id = '' } = useParams()
  return caseById(id) ? <BodyLoader key={id} id={id} /> : <NotFound />
}

/** Thân bài nằm ở chunk riêng, chỉ nạp khi mở case. */
function BodyLoader({ id }: { id: string }) {
  const [body, setBody] = useState<Body>({ status: 'loading' })
  useEffect(() => {
    let alive = true
    loadCase(id)
      .then((c) => alive && setBody(c ? { status: 'ready', c } : { status: 'error' }))
      .catch(() => alive && setBody({ status: 'error' }))
    return () => {
      alive = false
    }
  }, [id])

  if (body.status === 'ready') return <Reader c={body.c} />
  if (body.status === 'error')
    return <EmptyState icon={<LoaderCircle size={22} />} title="Không tải được bài" desc="Kiểm tra kết nối mạng rồi tải lại trang." />
  return (
    <p className={styles.loading}>
      <LoaderCircle size={20} className={styles.spin} /> Đang tải bài…
    </p>
  )
}

function Reader({ c }: { c: CaseStudy }) {
  const { progress, actions } = useProgress()
  const toast = useToast()
  const [params] = useSearchParams()
  const toc = useMemo(() => tocOf(c), [c])
  const [active, setActive] = useState(toc[0].id)
  const articleRef = useRef<HTMLElement>(null)

  const done = !!progress.completed[c.id]
  const saved = progress.saved.includes(c.id)
  const domain = domainById(c.domain)
  const activeIndex = toc.findIndex((t) => t.id === active)

  useEffect(() => actions.open(c.id), [actions, c.id])

  // Mở lại đúng section (từ link "Đọc tiếp")
  useEffect(() => {
    const target = params.get('s')
    if (!target) return
    const frame = requestAnimationFrame(() => document.getElementById(anchor(target))?.scrollIntoView({ block: 'start' }))
    return () => cancelAnimationFrame(frame)
    // chỉ chạy khi mở trang
  }, [])

  // Theo dõi section đang đọc
  useEffect(() => {
    const nodes = [...(articleRef.current?.querySelectorAll<HTMLElement>('[data-section]') ?? [])]
    const visible = new Map<string, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const sid = (e.target as HTMLElement).dataset.section!
          if (e.isIntersecting) visible.set(sid, e.boundingClientRect.top)
          else visible.delete(sid)
        }
        const first = toc.find((t) => visible.has(t.id))
        if (first) setActive(first.id)
      },
      { rootMargin: '-80px 0px -55% 0px' },
    )
    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [toc])

  useEffect(() => {
    if (active !== toc[0].id) actions.setLastSection(c.id, active)
  }, [actions, active, c.id, toc])

  const jump = (sid: string) => document.getElementById(anchor(sid))?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const toggleDone = () => {
    actions.setCompleted(c.id, !done)
    toast(done ? 'Đã bỏ đánh dấu hoàn thành.' : 'Tuyệt! Đã ghi nhận bạn học xong case này.')
  }

  const after = { ...progress, completed: { ...progress.completed, [c.id]: 'x' } }
  const next = recommendNext(
    cases.filter((x) => x.id !== c.id),
    after,
  )

  return (
    <div className={styles.page}>
      <div className={styles.mobileBar}>
        <label>
          <span className="sr-only">Chuyển đến phần</span>
          <select value={active} onChange={(e) => jump(e.target.value)}>
            {toc.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label === t.title ? t.title : `${t.label}: ${t.title}`}
              </option>
            ))}
          </select>
        </label>
        <ProgressBar value={(activeIndex + 1) / toc.length} label="Tiến độ đọc" />
      </div>

      <header className={styles.header}>
        <Link to="/library" className={styles.back}>
          <ArrowLeft size={18} /> Thư viện
        </Link>
        <div className={styles.pills}>
          <Pill>
            {domain.glyph} {domain.name}
          </Pill>
          <Pill tone="brand">{levelById(c.level).name}</Pill>
          <Pill>
            <Clock3 size={14} /> {c.minutes} phút
          </Pill>
          <Pill tone="warning">
            <FlaskConical size={14} /> Dữ liệu mô phỏng
          </Pill>
          {done && (
            <Pill tone="positive">
              <CheckCircle2 size={14} /> Đã học
            </Pill>
          )}
        </div>
        <h1>{c.title}</h1>
        <p className={styles.question}>
          <span>Câu hỏi:</span> {c.question}
        </p>
        <div className={styles.headerFoot}>
          <span className={styles.skills}>
            Kỹ năng: {c.skills.map((s) => skillById(s).name).join(' · ')}
          </span>
          <Button size="sm" onClick={() => actions.toggleSaved(c.id)} aria-pressed={saved}>
            <Bookmark size={16} fill={saved ? 'currentColor' : 'none'} /> {saved ? 'Đã lưu' : 'Lưu case'}
          </Button>
        </div>
      </header>

      <div className={styles.layout}>
        <article ref={articleRef} className={styles.article}>
          {c.sections.map((s, i) => (
            <section key={s.id} id={anchor(s.id)} data-section={s.id} className={styles.section}>
              <div className={styles.sectionLabel}>
                <span>{String(i + 1).padStart(2, '0')}</span> {toc[i].label}
              </div>
              <h2>{s.title}</h2>
              {s.blocks.map((b, j) => (
                <Block key={j} block={b} />
              ))}
            </section>
          ))}

          <section id={anchor('takeaways')} data-section="takeaways" className={styles.section}>
            <div className={styles.sectionLabel}>
              <span>{String(c.sections.length + 1).padStart(2, '0')}</span> Tổng kết
            </div>
            <h2>Ghi nhớ</h2>
            <ol className={styles.takeaways}>
              {c.takeaways.map((t, i) => (
                <li key={i}>
                  <Lightbulb size={20} aria-hidden />
                  {t}
                </li>
              ))}
            </ol>

            <h3 className={styles.refTitle}>Tìm hiểu thêm</h3>
            <ul className={styles.refs}>
              {c.references.map((r) => (
                <li key={r.url}>
                  <a href={r.url} target="_blank" rel="noreferrer">
                    {r.title} <ExternalLink size={14} aria-hidden />
                  </a>
                  <span className={styles.publisher}>{r.publisher}</span>
                  <p>{r.note}</p>
                </li>
              ))}
            </ul>

            <div className={`${styles.finish} ${done ? styles.finishDone : ''}`}>
              {done ? (
                <>
                  <CheckCircle2 size={28} aria-hidden />
                  <div>
                    <b>Bạn đã học xong case này</b>
                    <p>Tiến độ kỹ năng và lộ trình đã được cập nhật.</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={toggleDone}>
                    <RotateCcw size={15} /> Bỏ đánh dấu
                  </Button>
                </>
              ) : (
                <>
                  <div>
                    <b>Đọc xong rồi?</b>
                    <p>Đánh dấu để cập nhật tiến độ kỹ năng và nhận gợi ý bài tiếp theo.</p>
                  </div>
                  <Button variant="primary" onClick={toggleDone}>
                    <CheckCircle2 size={18} /> Đánh dấu đã học xong
                  </Button>
                </>
              )}
            </div>

            {next && (
              <ButtonLink to={`/case/${next.case.id}`} variant="secondary" className={styles.nextBtn}>
                Bài tiếp theo: {next.case.title} <ArrowRight size={18} />
              </ButtonLink>
            )}
          </section>
        </article>

        <nav className={styles.toc} aria-label="Mục lục case">
          <div className="eyebrow">Mục lục</div>
          <ol>
            {toc.map((t, i) => (
              <li key={t.id}>
                <button className={t.id === active ? styles.tocActive : i < activeIndex ? styles.tocPassed : undefined} onClick={() => jump(t.id)} aria-current={t.id === active ? 'location' : undefined}>
                  {t.label !== t.title && <small>{t.label}</small>}
                  <span>{t.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  )
}
