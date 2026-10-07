import type { Explainer } from '../../shared/explainer'
import { topics } from '../../shared/taxonomy'

const modules = import.meta.glob<Record<string, Explainer>>('./explainers/*.ts', { eager: true })

const topicOrder = new Map<string, number>(topics.map((t, i) => [t.id, i]))

/** Bài "Đọc nhanh" soạn sẵn, sắp theo chủ đề rồi tiêu đề. */
export const curatedExplainers: Explainer[] = Object.values(modules)
  .flatMap((mod) => Object.values(mod))
  .sort((a, b) => topicOrder.get(a.topic)! - topicOrder.get(b.topic)! || a.title.localeCompare(b.title, 'vi'))

export const curatedBySlug = (slug: string | undefined) => curatedExplainers.find((e) => e.slug === slug)
