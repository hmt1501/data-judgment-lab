import { Bot, LoaderCircle, Search, Sparkles, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ExplainerCard } from '../components/explainer/ExplainerCard'
import { Button, EmptyState, PageHeader, SectionTitle } from '../components/ui/primitives'
import { useToast } from '../components/ui/Toast'
import { curatedExplainers, searchExplainers } from '../content/explainerLibrary'
import { isTopicId, topics } from '../content/taxonomy'
import { aiEnabled, askAi, describeError, listAiExplainers, type ExplainerSummary } from '../lib/api'
import { useSearchParamState } from '../lib/useSearchParamState'
import styles from './Explain.module.css'

const examples = [
  'Vì sao Fed tăng lãi suất lại ảnh hưởng tới Việt Nam?',
  'Giá dầu tăng thì lạm phát Việt Nam thay đổi thế nào?',
  'Vì sao giá vàng SJC chênh với giá thế giới?',
  'Thuế quan của Mỹ tác động gì tới xuất khẩu Việt Nam?',
]

const stages = ['Đang tra cứu nguồn trên web…', 'Đang đọc và chọn lọc dữ kiện…', 'Đang biên soạn bài…']

export function ExplainPage() {
  const toast = useToast()
  const navigate = useNavigate()
  const [params, setParams] = useSearchParams()
  const [q, setQ] = useSearchParamState('q')
  const rawTopic = params.get('topic') ?? ''
  const topic = isTopicId(rawTopic) ? rawTopic : ''

  const [aiItems, setAiItems] = useState<ExplainerSummary[] | null>(null)
  const [aiListError, setAiListError] = useState('')
  const [asking, setAsking] = useState(false)
  const [stage, setStage] = useState(0)
  const [askError, setAskError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

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

  useEffect(() => {
    if (!aiEnabled) return
    let alive = true
    listAiExplainers({ topic: topic || undefined })
      .then((items) => alive && (setAiItems(items), setAiListError('')))
      .catch((err: unknown) => alive && setAiListError(describeError(err)))
    return () => {
      alive = false
    }
  }, [topic])

  useEffect(() => {
    if (!asking) return
    const t = window.setInterval(() => setStage((s) => Math.min(s + 1, stages.length - 1)), 7000)
    return () => window.clearInterval(t)
  }, [asking])

  const curated = useMemo(() => searchExplainers(curatedExplainers.filter((e) => !topic || e.topic === topic), q), [q, topic])
  const ai = useMemo(() => (aiItems ? searchExplainers(aiItems, q) : []), [aiItems, q])

  const ask = async (e: FormEvent) => {
    e.preventDefault()
    if (!aiEnabled || asking || q.trim().length < 8) return
    setAsking(true)
    setStage(0)
    setAskError('')
    try {
      const { explainer, cached } = await askAi(q.trim())
      if (cached) toast('Câu hỏi này đã có bài — mở bài có sẵn.')
      navigate(`/explain/${explainer.slug}`)
    } catch (err) {
      setAskError(describeError(err))
    } finally {
      setAsking(false)
    }
  }

  const hasMatches = curated.length + ai.length > 0

  return (
    <div>
      <PageHeader
        eyebrow="Đọc nhanh"
        title="Hiểu nhanh kinh tế, đầu tư, bất động sản"
        desc="Mỗi bài trả lời một câu hỏi: chuỗi nhân quả, tác động tới Việt Nam, chỉ số nên theo dõi và nguồn để đọc sâu hơn."
      />

      <form className={styles.ask} onSubmit={ask}>
        <label className={styles.askField}>
          <Search size={22} aria-hidden />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ví dụ: Vì sao Fed tăng lãi suất lại ảnh hưởng tới Việt Nam?"
            aria-label="Câu hỏi hoặc từ khóa"
            maxLength={300}
            disabled={asking}
          />
          {q && !asking && (
            <button type="button" aria-label="Xóa" onClick={() => (setQ(''), inputRef.current?.focus())}>
              <X size={18} />
            </button>
          )}
        </label>
        {aiEnabled && (
          <Button type="submit" variant="primary" disabled={asking || q.trim().length < 8} className={styles.askBtn}>
            {asking ? <LoaderCircle size={18} className={styles.spin} /> : <Sparkles size={18} />}
            {asking ? 'Đang tạo…' : 'Hỏi AI'}
          </Button>
        )}
      </form>

      <div aria-live="polite">
        {asking && (
          <p className={styles.status}>
            <Bot size={18} aria-hidden /> {stages[stage]} <span>Thường mất 15–40 giây.</span>
          </p>
        )}
        {askError && <p className={styles.error}>{askError}</p>}
        {aiEnabled ? (
          <p className={styles.hint}>Gõ để tìm trong các bài có sẵn. Chưa có bài phù hợp? Bấm “Hỏi AI” — AI sẽ tra cứu web và soạn bài mới, lưu lại cho lần sau.</p>
        ) : (
          <p className={styles.hint}>Tính năng hỏi AI chưa được bật trên bản này; bạn vẫn đọc được toàn bộ bài biên soạn.</p>
        )}
      </div>

      {!q && (
        <div className={styles.examples}>
          {examples.map((ex) => (
            <button key={ex} type="button" onClick={() => setQ(ex)}>
              {ex}
            </button>
          ))}
        </div>
      )}

      <div className={styles.chips} role="group" aria-label="Lọc theo chủ đề">
        <button aria-pressed={!topic} onClick={() => set('topic', '')}>
          Tất cả
        </button>
        {topics.map((t) => (
          <button key={t.id} aria-pressed={topic === t.id} onClick={() => set('topic', topic === t.id ? '' : t.id)}>
            {t.glyph} {t.name}
          </button>
        ))}
      </div>

      {!hasMatches && (
        <EmptyState
          icon={<Search size={22} />}
          title="Chưa có bài phù hợp"
          desc={aiEnabled ? 'Bấm “Hỏi AI” để tạo bài mới cho câu hỏi này.' : 'Thử từ khóa khác hoặc bỏ lọc chủ đề.'}
        />
      )}

      {curated.length > 0 && (
        <>
          <SectionTitle eyebrow="Biên soạn sẵn" title={`${curated.length} bài`} />
          <div className={styles.grid}>
            {curated.map((e) => (
              <ExplainerCard key={e.slug} e={e} />
            ))}
          </div>
        </>
      )}

      {aiEnabled && (ai.length > 0 || aiListError) && (
        <>
          <SectionTitle eyebrow="Do AI tạo" title={aiListError ? 'Không tải được' : `${ai.length} bài`} />
          {aiListError ? (
            <p className={styles.error}>{aiListError}</p>
          ) : (
            <div className={styles.grid}>
              {ai.map((e) => (
                <ExplainerCard key={e.slug} e={e} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
