import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { getPlatformProxy } from 'wrangler'
import { fedRateHikeVietnam } from '../../src/content/explainers/fed-rate-hike-vietnam'
import type { Explainer } from '../../src/content/explainer'
import { D1Store } from '../src/store'

// Chạy SQL thật trên D1 cục bộ (miniflare) với migration đã áp dụng (`wrangler d1 migrations apply --local`).
let proxy: Awaited<ReturnType<typeof getPlatformProxy<Env>>>
let store: D1Store
const run = `${Date.now()}`

beforeAll(async () => {
  proxy = await getPlatformProxy<Env>({ persist: { path: '.wrangler/state/v3' } })
  store = new D1Store(proxy.env.DB)
})
afterAll(async () => {
  await proxy.env.DB.prepare('DELETE FROM explainers WHERE slug LIKE ?').bind(`%-${run}`).run()
  await proxy.env.DB.prepare('DELETE FROM explainers_fts WHERE slug LIKE ?').bind(`%-${run}`).run()
  await proxy.env.DB.prepare('DELETE FROM usage WHERE day = ?').bind(`test-${run}`).run()
  await proxy.env.DB.prepare('DELETE FROM research_cache WHERE norm_question = ?').bind(`r ${run}`).run()
  await proxy.dispose()
})

const sample = (slug: string, over: Partial<Explainer> = {}): Explainer => ({ ...fedRateHikeVietnam, id: slug, slug, origin: 'ai', ...over })

describe('D1Store', () => {
  it('insert → getBySlug / findByNorm / FTS không dấu / lọc topic', async () => {
    await store.insert(sample(`fed-${run}`), `fed hoi ${run}`)
    await store.insert(sample(`vang-${run}`, { title: 'Giá vàng SJC chênh thế giới', question: 'Vì sao giá vàng SJC cao?', tldr: 'Cung cầu vàng miếng.', topic: 'markets-investing' }), `vang ${run}`)

    expect((await store.getBySlug(`fed-${run}`))?.title).toBe(fedRateHikeVietnam.title)
    expect((await store.findByNorm(`vang ${run}`))?.slug).toBe(`vang-${run}`)
    const byText = await store.list({ q: 'gia vàng', limit: 10 })
    expect(byText.map((x) => x.slug)).toContain(`vang-${run}`)
    expect(byText.map((x) => x.slug)).not.toContain(`fed-${run}`)
    const byTopic = await store.list({ topic: 'macro', limit: 50 })
    expect(byTopic.some((x) => x.slug === `fed-${run}`)).toBe(true)
    expect(byTopic.some((x) => x.slug === `vang-${run}`)).toBe(false)
  })

  it('bumpUsage tăng dần; research cache hết hạn theo TTL', async () => {
    const day = `test-${run}`
    expect(await store.bumpUsage(day, 'global')).toBe(1)
    expect(await store.bumpUsage(day, 'global')).toBe(2)
    expect(await store.getUsage(day, 'global')).toBe(2)

    const t0 = new Date('2026-10-07T00:00:00Z')
    await store.putResearch(`r ${run}`, { notes: 'n', sources: [{ title: 'A', url: 'https://a.org' }] }, t0)
    expect((await store.getResearch(`r ${run}`, 3_600_000, new Date(t0.getTime() + 1000)))?.sources).toHaveLength(1)
    expect(await store.getResearch(`r ${run}`, 3_600_000, new Date(t0.getTime() + 7_200_000))).toBeNull()
  })
})
