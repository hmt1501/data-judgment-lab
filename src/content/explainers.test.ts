import { describe, expect, it } from 'vitest'
import { explainerSummaryOf, validateExplainer, type Explainer } from '../../shared/explainer'
import { curatedExplainers, loadCurated } from './explainerLibrary'

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
