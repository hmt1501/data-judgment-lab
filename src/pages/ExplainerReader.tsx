import { ArrowLeft, LoaderCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ExplainerView } from '../components/explainer/ExplainerView'
import { EmptyState } from '../components/ui/primitives'
import type { Explainer } from '../../shared/explainer'
import { curatedBySlug } from '../content/explainerLibrary'
import { aiEnabled, ApiError, describeError, getAiExplainer } from '../lib/api'
import { useProgress } from '../state/ProgressProvider'
import styles from './ExplainerReader.module.css'
import { NotFound } from './NotFound'

type State = { status: 'loading' } | { status: 'ready'; e: Explainer } | { status: 'missing' } | { status: 'error'; message: string }

export function ExplainerReader() {
  const { slug = '' } = useParams()
  const { actions } = useProgress()
  const curated = curatedBySlug(slug)
  const [state, setState] = useState<State>(() => (curated ? { status: 'ready', e: curated } : aiEnabled ? { status: 'loading' } : { status: 'missing' }))

  useEffect(() => {
    if (curated) return setState({ status: 'ready', e: curated })
    if (!aiEnabled) return setState({ status: 'missing' })
    let alive = true
    setState({ status: 'loading' })
    getAiExplainer(slug)
      .then((e) => alive && setState({ status: 'ready', e }))
      .catch((err: unknown) => alive && setState(err instanceof ApiError && err.status === 404 ? { status: 'missing' } : { status: 'error', message: describeError(err) }))
    return () => {
      alive = false
    }
  }, [slug, curated])

  useEffect(() => {
    if (state.status === 'ready') actions.markExplainerRead(state.e.slug, state.e.title)
  }, [actions, state])

  if (state.status === 'missing') return <NotFound />

  return (
    <div>
      <Link to="/explain" className={styles.back}>
        <ArrowLeft size={18} /> Đọc nhanh
      </Link>
      {state.status === 'loading' && (
        <p className={styles.loading}>
          <LoaderCircle size={20} className={styles.spin} /> Đang tải bài…
        </p>
      )}
      {state.status === 'error' && <EmptyState icon={<LoaderCircle size={22} />} title="Không tải được bài" desc={state.message} />}
      {state.status === 'ready' && <ExplainerView e={state.e} />}
    </div>
  )
}
