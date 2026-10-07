import { ArrowDown, ArrowDownRight, ArrowUpRight, Bot, ExternalLink, Lightbulb, MoveHorizontal, Scale, ShieldAlert } from 'lucide-react'
import type { Explainer } from '../../../shared/explainer'
import { topicById } from '../../../shared/taxonomy'
import { inline } from '../../lib/markdown'
import { Quiz } from '../blocks/Quiz'
import { Pill } from '../ui/primitives'
import styles from './ExplainerView.module.css'

const direction = {
  up: { icon: ArrowUpRight, label: 'Có lợi / tăng', className: styles.up },
  down: { icon: ArrowDownRight, label: 'Bất lợi / giảm', className: styles.down },
  mixed: { icon: MoveHorizontal, label: 'Hai chiều', className: styles.mixed },
} as const

const fmtDate = (iso: string) => new Date(`${iso}T00:00:00`).toLocaleDateString('vi-VN', { day: 'numeric', month: 'numeric', year: 'numeric' })

export function ExplainerView({ e }: { e: Explainer }) {
  const topic = topicById(e.topic)
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <div className={styles.pills}>
          <Pill>
            {topic.glyph} {topic.name}
          </Pill>
          {e.origin === 'ai' ? (
            <Pill tone="warning">
              <Bot size={14} /> {e.sources.length ? 'AI tạo · cần kiểm tra nguồn' : 'AI tạo · chưa có nguồn'}
            </Pill>
          ) : (
            <Pill tone="brand">Biên soạn</Pill>
          )}
          <Pill>Cập nhật {fmtDate(e.asOf)}</Pill>
        </div>
        <h1>{e.title}</h1>
        <p className={styles.question}>
          <span>Câu hỏi:</span> {e.question}
        </p>
      </header>

      <section className={styles.tldr} aria-label="Tóm tắt">
        <b>Tóm tắt nhanh</b>
        <p>{inline(e.tldr)}</p>
      </section>

      <section className={styles.section}>
        <h2>Ý chính</h2>
        <ul className={styles.points}>
          {e.keyPoints.map((p, i) => (
            <li key={i}>
              <Lightbulb size={18} aria-hidden />
              <span>{inline(p)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Chuỗi nhân quả</h2>
        <ol className={styles.chain}>
          {e.causalChain.map((link, i) => (
            <li key={i}>
              {i === 0 && <div className={styles.node}>{link.from}</div>}
              <div className={styles.edge}>
                <ArrowDown size={18} aria-hidden />
                <span>{inline(link.mechanism)}</span>
              </div>
              <div className={styles.node}>{link.to}</div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2>Tác động tới Việt Nam</h2>
        <div className={styles.impacts}>
          {e.vietnamImpact.map((im, i) => {
            const d = direction[im.direction]
            const Icon = d.icon
            return (
              <div key={i} className={`${styles.impact} ${d.className}`}>
                <span className={styles.impactIcon} title={d.label}>
                  <Icon size={18} aria-hidden />
                  <span className="sr-only">{d.label}</span>
                </span>
                <div>
                  <b>{im.group}</b>
                  <p>{inline(im.effect)}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Chỉ số nên theo dõi</h2>
        <div className={styles.tableWrap} tabIndex={0} role="region" aria-label="Chỉ số nên theo dõi">
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Chỉ số</th>
                <th scope="col">Vì sao quan trọng</th>
                <th scope="col">Xem ở đâu</th>
              </tr>
            </thead>
            <tbody>
              {e.indicators.map((ind, i) => (
                <tr key={i}>
                  <th scope="row">{ind.name}</th>
                  <td>{inline(ind.why)}</td>
                  <td>{ind.where}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={`${styles.section} ${styles.counter}`}>
        <h2>
          <Scale size={20} aria-hidden /> Góc nhìn khác & giới hạn
        </h2>
        <ul>
          {e.counterpoints.map((c, i) => (
            <li key={i}>{inline(c)}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Thuật ngữ</h2>
        <dl className={styles.glossary}>
          {e.glossary.map((g) => (
            <div key={g.term}>
              <dt>{g.term}</dt>
              <dd>{inline(g.definition)}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Quiz block={e.quiz} />

      <section className={styles.section}>
        <h2>Nguồn</h2>
        {e.sources.length === 0 && (
          <p className={styles.noSources}>
            <ShieldAlert size={18} aria-hidden />
            <span>
              Không tìm được tư liệu tra cứu cho câu hỏi này, nên bài được AI viết từ <b>kiến thức chung</b> và chưa đối chiếu với tin tức mới. Hãy coi đây là phần giải thích cơ chế, và kiểm chứng số liệu ở nguồn chính thức.
            </span>
          </p>
        )}
        <ul className={styles.sources}>
          {e.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noreferrer">
                {s.title} <ExternalLink size={14} aria-hidden />
              </a>
              <span>{s.publisher}</span>
            </li>
          ))}
        </ul>
      </section>

      <p className={styles.disclaimer}>
        <ShieldAlert size={16} aria-hidden />
        <span>
          Nội dung mang tính giáo dục, không phải lời khuyên đầu tư, pháp lý hay tài chính cá nhân.
          {e.origin === 'ai' && ` Bài do AI (${e.model ?? 'không rõ model'}) tạo tự động từ kết quả tra cứu web — có thể sai, hãy đối chiếu với nguồn gốc.`}
        </span>
      </p>
    </article>
  )
}
