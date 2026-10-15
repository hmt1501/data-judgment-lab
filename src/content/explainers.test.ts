import { describe, expect, it } from 'vitest'
import { CORE_EXPLAINER_SLUGS, explainerSummaryOf, validateExplainer, type Explainer } from '../../shared/explainer'
import { curatedExplainers, loadCurated, weeklyPool, weeklyWindow } from './explainerLibrary'

const modules = import.meta.glob<Record<string, Explainer>>('./explainers/*.ts', { eager: true })
const all = Object.entries(modules).map(([path, mod]) => {
  const exported = Object.values(mod)
  if (exported.length !== 1) throw new Error(`${path} phải export đúng 1 explainer`)
  return [path, exported[0]] as const
})

describe('explainer soạn sẵn', () => {
  it.each(all)('%s hợp lệ', (path, e) => {
    expect(path.endsWith(`/${e.slug}.ts`), 'tên file phải trùng slug').toBe(true)
    expect(e.id).toBe(e.slug)
    expect(e.origin).toBe('curated')
    expect(e.quiz.id).toBe(`${e.id}-q`)
    expect(validateExplainer(e)).toEqual([])
  })

  it('tóm tắt nạp sẵn (plugin ?meta) khớp thân bài, và loadCurated trả đúng thân bài', async () => {
    expect(curatedExplainers.length).toBe(all.length)
    for (const [, e] of all) {
      expect(curatedExplainers.find((s) => s.slug === e.slug), e.slug).toEqual(explainerSummaryOf(e))
      expect((await loadCurated(e.slug))?.slug).toBe(e.slug)
    }
    expect(await loadCurated('khong-co')).toBeUndefined()
  })

  it('slug duy nhất', () => {
    const slugs = all.map(([, e]) => e.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })
})

describe('nhóm nền tảng và kho xoay theo tuần', () => {
  it('đủ 15 bài nền tảng, không có order; bài còn lại có order duy nhất, liền mạch từ 1', () => {
    const slugs = new Set(all.map(([, e]) => e.slug))
    expect(CORE_EXPLAINER_SLUGS).toHaveLength(15)
    for (const s of CORE_EXPLAINER_SLUGS) expect(slugs.has(s), s).toBe(true)
    const [core, rest] = [all.filter(([, e]) => CORE_EXPLAINER_SLUGS.includes(e.slug)), all.filter(([, e]) => !CORE_EXPLAINER_SLUGS.includes(e.slug))]
    for (const [, e] of core) expect(e.order, e.slug).toBeUndefined()
    expect(rest.map(([, e]) => e.order).sort((a, b) => a! - b!)).toEqual(rest.map((_, i) => i + 1))
    expect(weeklyPool.map((e) => e.order)).toEqual(rest.map((_, i) => i + 1))
  })

  const pool = Array.from({ length: 8 }, (_, i) => ({ slug: `b${i + 1}` }) as never)
  const start = new Date(2026, 9, 19)
  const slugsAt = (y: number, m: number, d: number) => weeklyWindow(pool, new Date(y, m, d, 15), start).items.map((e) => (e as { slug: string }).slug)

  it('đổi cả 3 bài vào mỗi thứ Hai; trước mốc vẫn là tuần đầu', () => {
    expect(slugsAt(2026, 9, 12)).toEqual(['b1', 'b2', 'b3'])
    expect(slugsAt(2026, 9, 25)).toEqual(['b1', 'b2', 'b3'])
    expect(slugsAt(2026, 9, 26)).toEqual(['b4', 'b5', 'b6'])
  })

  it('hết kho: giữ 3 bài cuối và báo exhausted', () => {
    expect(weeklyWindow(pool, new Date(2026, 10, 2), start)).toMatchObject({ exhausted: false })
    expect(slugsAt(2026, 10, 2)).toEqual(['b7', 'b8'])
    const done = weeklyWindow(pool, new Date(2026, 10, 9), start)
    expect(done.exhausted).toBe(true)
    expect(done.items.map((e) => (e as { slug: string }).slug)).toEqual(['b6', 'b7', 'b8'])
    expect(weeklyWindow([], new Date(2030, 0, 1), start)).toEqual({ items: [], exhausted: false })
  })
})

describe('validateExplainer với dữ liệu xấu', () => {
  it('bài AI được phép 0 nguồn (dự phòng khi không tra cứu được); bài soạn sẵn thì không', () => {
    const [, good] = all[0]
    expect(validateExplainer({ ...good, origin: 'ai', sources: [] })).toEqual([])
    expect(validateExplainer({ ...good, sources: [] }).join('\n')).toMatch(/sources/)
  })

  it('bắt lỗi cấu trúc', () => {
    expect(validateExplainer(null)).toEqual(['không phải object'])
    const [, good] = all[0]
    const bad = { ...good, topic: 'sports', sources: [{ title: 'x', publisher: 'y', url: 'http://insecure' }], keyPoints: ['1'] }
    const errors = validateExplainer(bad).join('\n')
    expect(errors).toMatch(/topic lạ/)
    expect(errors).toMatch(/sources/)
    expect(errors).toMatch(/keyPoints/)
  })
})
