import { CORE_EXPLAINER_SLUGS, type Explainer, type ExplainerSummary } from '../../shared/explainer'
import { topics } from '../../shared/taxonomy'

// phần tóm tắt nạp sẵn (plugin `contentMeta` trong vite.config.ts); thân bài nạp khi mở
const summaries = import.meta.glob<ExplainerSummary>('./explainers/*.ts', { query: '?meta', import: 'default', eager: true })
const bodies = import.meta.glob<Record<string, Explainer>>('./explainers/*.ts')

const topicOrder = new Map<string, number>(topics.map((t, i) => [t.id, i]))

/** Bài "Đọc nhanh" soạn sẵn (dạng tóm tắt), sắp theo chủ đề rồi tiêu đề. */
export const curatedExplainers: ExplainerSummary[] = Object.values(summaries).sort(
  (a, b) => topicOrder.get(a.topic)! - topicOrder.get(b.topic)! || a.title.localeCompare(b.title, 'vi'),
)

const core = new Set(CORE_EXPLAINER_SLUGS)

/** 15 bài nền tảng cố định. */
export const coreExplainers = curatedExplainers.filter((e) => core.has(e.slug))

/** Kho bài "mới nhất" soạn sẵn, theo thứ tự hiện (`order`). */
export const weeklyPool = curatedExplainers.filter((e) => !core.has(e.slug)).sort((a, b) => a.order! - b.order!)

export const WEEKLY_SIZE = 3
/** Thứ Hai đầu tiên của chương trình (giờ máy). Đổi mốc này sẽ dịch toàn bộ lịch. */
export const WEEKLY_START = new Date(2026, 9, 19)

/**
 * 3 bài "mới nhất" của tuần chứa `today`, đổi cả 3 mỗi tuần (tuần 0 = từ WEEKLY_START; trước mốc cũng là tuần 0).
 * Hết kho thì giữ nguyên 3 bài cuối và `exhausted = true` để giao diện báo đã hiện hết.
 */
export function weeklyWindow(pool: ExplainerSummary[], today: Date, start = WEEKLY_START): { items: ExplainerSummary[]; exhausted: boolean } {
  const midnight = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const week = Math.max(0, Math.floor(Math.round((midnight.getTime() - start.getTime()) / 86_400_000) / 7))
  const first = week * WEEKLY_SIZE
  const exhausted = pool.length > 0 && first >= pool.length
  const from = exhausted ? Math.max(0, pool.length - WEEKLY_SIZE) : first
  return { items: pool.slice(from, from + WEEKLY_SIZE), exhausted }
}

/** Bài hiện trên trang Đọc nhanh/tìm kiếm: nền tảng + 3 bài của tuần. */
export const visibleExplainers = (today: Date) => [...weeklyWindow(weeklyPool, today).items, ...coreExplainers]

export const curatedBySlug = (slug: string | undefined) => curatedExplainers.find((e) => e.slug === slug)

/** Nạp thân bài soạn sẵn; undefined nếu không có. */
export async function loadCurated(slug: string): Promise<Explainer | undefined> {
  const load = bodies[`./explainers/${slug}.ts`]
  return load && Object.values(await load())[0]
}
