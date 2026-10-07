import { CheckCircle2, Circle, CircleDot } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, PageHeader, Pill, ProgressBar } from '../components/ui/primitives'
import { cases } from '../content'
import { levels } from '../../shared/taxonomy'
import { levelProgress, ratio } from '../state/insights'
import { useProgress } from '../state/ProgressProvider'
import styles from './Path.module.css'

export function PathPage() {
  const { progress } = useProgress()
  const perLevel = levelProgress(cases, progress)
  const opened = new Set(progress.history.map((h) => h.caseId))
  const current = levels.find((l) => perLevel[l.id].total > perLevel[l.id].done)

  return (
    <div>
      <PageHeader
        eyebrow="Lộ trình năng lực"
        title="Từ Fresher đến Lead"
        desc="Mọi case luôn mở, bạn có thể học theo thứ tự bất kỳ. Lộ trình gợi ý thứ tự hợp lý và cho thấy bạn đã đi được bao xa ở từng cấp."
      />

      <ol className={styles.levels}>
        {levels.map((l, i) => {
          const r = perLevel[l.id]
          const levelCases = cases.filter((c) => c.level === l.id)
          const complete = r.total > 0 && r.done === r.total
          return (
            <li key={l.id}>
              <Card className={`${styles.level} ${current?.id === l.id ? styles.current : ''}`}>
                <div className={styles.head}>
                  <span className={`${styles.no} ${complete ? styles.noDone : ''}`}>{complete ? <CheckCircle2 size={20} /> : String(i + 1).padStart(2, '0')}</span>
                  <div className={styles.title}>
                    <h2>{l.name}</h2>
                    <p>{l.desc}</p>
                  </div>
                  {current?.id === l.id && <Pill tone="brand">Gợi ý học tiếp</Pill>}
                  {complete && <Pill tone="positive">Hoàn thành</Pill>}
                </div>

                <p className={styles.outcome}>
                  <b>Đầu ra mong đợi:</b> {l.outcome}
                </p>

                {r.total ? (
                  <>
                    <div className={styles.progress}>
                      <ProgressBar value={ratio(r)} label={`Tiến độ ${l.name}`} />
                      <span className="num">
                        {r.done}/{r.total} case
                      </span>
                    </div>
                    <ul className={styles.cases}>
                      {levelCases.map((c) => {
                        const done = !!progress.completed[c.id]
                        const Icon = done ? CheckCircle2 : opened.has(c.id) ? CircleDot : Circle
                        return (
                          <li key={c.id}>
                            <Link to={`/case/${c.id}`} className={done ? styles.caseDone : undefined}>
                              <Icon size={18} aria-hidden />
                              <span>{c.title}</span>
                              <span className="sr-only">{done ? '(đã học)' : opened.has(c.id) ? '(đang đọc)' : '(chưa học)'}</span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </>
                ) : (
                  <p className={styles.soon}>Chưa có case cho cấp này. Các case Senior là bước chuẩn bị tốt nhất trong lúc chờ.</p>
                )}
              </Card>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
