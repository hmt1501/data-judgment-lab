import { AlertTriangle, ArrowRight, Bookmark, BookOpen, Clock3, PartyPopper, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CaseCard } from '../components/CaseCard'
import { ButtonLink, Card, Pill, ProgressBar, ProgressRing, SectionTitle } from '../components/ui/primitives'
import { cases, caseById } from '../content'
import { domainById, levelById, levels } from '../content/taxonomy'
import { inProgress, levelProgress, quizStats, ratio, recommendNext, skillMastery, trapOfTheDay } from '../lib/insights'
import { inline } from '../lib/markdown'
import { useProgress } from '../state/ProgressProvider'
import styles from './Home.module.css'

const today = new Date()
const dateLabel = today.toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

export function Home() {
  const { progress } = useProgress()
  const name = progress.settings.name.trim() || 'bạn'
  const done = Object.keys(progress.completed).length
  const next = recommendNext(cases, progress)
  const reading = inProgress(cases, progress).filter((c) => c.id !== next?.case.id).slice(0, 3)
  const quiz = quizStats(cases, progress)
  const mastery = skillMastery(cases, progress)
  const touched = mastery.filter((s) => s.done > 0).length
  const weakest = [...mastery].sort((a, b) => ratio(a) - ratio(b) || b.total - a.total).slice(0, 3)
  const perLevel = levelProgress(cases, progress)
  const trap = trapOfTheDay(cases, today)
  const saved = progress.saved.map(caseById).filter((c) => !!c)

  const resume = next && progress.lastSection[next.case.id]
  const nextHref = next ? `/case/${next.case.id}${resume ? `?s=${resume}` : ''}` : '/library'

  return (
    <div className={styles.page}>
      <header className={styles.greeting}>
        <div className="eyebrow">{dateLabel}</div>
        <h1>Chào {name} 👋</h1>
        <p>Mỗi bài là một tình huống thật được giải mẫu theo cách một analyst giỏi sẽ làm. Đọc, thử trả lời vài câu, và mang framework đi dùng lại.</p>
      </header>

      <div className={styles.heroGrid}>
        {next ? (
          <section className={styles.hero}>
            <Pill tone="warning">{next.reason}</Pill>
            <h2>{next.case.title}</h2>
            <p>{next.case.summary}</p>
            <div className={styles.heroMeta}>
              <span>
                {domainById(next.case.domain).glyph} {domainById(next.case.domain).name}
              </span>
              <span>{levelById(next.case.level).name}</span>
              <span>
                <Clock3 size={16} aria-hidden /> {next.case.minutes} phút
              </span>
            </div>
            <ButtonLink to={nextHref} variant="primary" className={styles.heroBtn}>
              {resume ? 'Đọc tiếp' : 'Bắt đầu học'} <ArrowRight size={18} />
            </ButtonLink>
          </section>
        ) : (
          <section className={styles.hero}>
            <PartyPopper size={28} />
            <h2>Bạn đã học hết thư viện!</h2>
            <p>Ôn lại những case có câu trắc nghiệm trả lời sai, hoặc đọc lại phần bẫy thường gặp để củng cố.</p>
            <ButtonLink to="/library" variant="primary" className={styles.heroBtn}>
              Mở thư viện <ArrowRight size={18} />
            </ButtonLink>
          </section>
        )}

        <Card className={styles.stats}>
          <div className={styles.statMain}>
            <ProgressRing value={done / cases.length} size={72}>
              {Math.round((done / cases.length) * 100)}%
            </ProgressRing>
            <div>
              <b className="num">
                {done}/{cases.length} case
              </b>
              <span>đã học xong</span>
            </div>
          </div>
          <dl className={styles.statList}>
            <div>
              <dt>Câu hỏi đã trả lời</dt>
              <dd className="num">
                {quiz.answered}/{quiz.total}
              </dd>
            </div>
            <div>
              <dt>Trả lời đúng</dt>
              <dd className="num">{quiz.answered ? `${Math.round((quiz.correct / quiz.answered) * 100)}%` : '—'}</dd>
            </div>
            <div>
              <dt>Kỹ năng đã luyện</dt>
              <dd className="num">
                {touched}/{mastery.length}
              </dd>
            </div>
          </dl>
        </Card>
      </div>

      {reading.length > 0 && (
        <>
          <SectionTitle eyebrow="Đang dở dang" title="Đọc tiếp" />
          <div className={styles.cards}>
            {reading.map((c) => (
              <CaseCard key={c.id} c={c} />
            ))}
          </div>
        </>
      )}

      <div className={styles.twoCol}>
        <section>
          <SectionTitle eyebrow="Lộ trình" title="Tiến độ theo cấp độ" action={<ButtonLink to="/path" variant="ghost">Xem lộ trình <ArrowRight size={16} /></ButtonLink>} />
          <Card className={styles.levels}>
            {levels.map((l) => {
              const r = perLevel[l.id]
              return (
                <div key={l.id} className={styles.levelRow}>
                  <span className={styles.levelName}>{l.name}</span>
                  <ProgressBar value={ratio(r)} label={`Tiến độ ${l.name}`} />
                  <span className={`${styles.levelCount} num`}>{r.total ? `${r.done}/${r.total}` : 'Sắp có'}</span>
                </div>
              )
            })}
          </Card>
        </section>

        <section>
          <SectionTitle eyebrow="Nên luyện thêm" title="Kỹ năng còn yếu" />
          <Card className={styles.skills}>
            {weakest.map((s) => (
              <Link key={s.id} to={`/library?skill=${s.id}`} className={styles.skillRow}>
                <Target size={18} aria-hidden />
                <span>
                  <b>{s.name}</b>
                  <small>
                    {s.done}/{s.total} case đã học
                  </small>
                </span>
                <ArrowRight size={16} aria-hidden />
              </Link>
            ))}
          </Card>
        </section>
      </div>

      {trap && (
        <>
          <SectionTitle eyebrow="Bẫy tư duy hôm nay" title={trap.item.title} />
          <Card className={styles.trap}>
            <AlertTriangle size={22} className={styles.trapIcon} aria-hidden />
            <div>
              <p>
                <b>Vì sao sai: </b>
                {inline(trap.item.why)}
              </p>
              <p>
                <b>Nên làm: </b>
                {inline(trap.item.instead)}
              </p>
              <Link to={`/case/${trap.case.id}`} className={styles.trapLink}>
                Từ case: {trap.case.title} <ArrowRight size={14} />
              </Link>
            </div>
          </Card>
        </>
      )}

      <SectionTitle eyebrow="Đã lưu" title="Case bạn đánh dấu" />
      {saved.length ? (
        <div className={styles.cards}>
          {saved.map((c) => (
            <CaseCard key={c.id} c={c} />
          ))}
        </div>
      ) : (
        <p className={styles.hint}>
          <Bookmark size={16} aria-hidden /> Bấm biểu tượng dấu trang trên thẻ case để lưu lại đọc sau.{' '}
          <Link to="/library">
            <BookOpen size={16} aria-hidden /> Mở thư viện
          </Link>
        </p>
      )}
    </div>
  )
}
