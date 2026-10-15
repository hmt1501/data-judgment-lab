import { describe, expect, it } from 'vitest'
import { cases, loadCase } from './index'
import { caseMetaOf } from './meta'
import type { CaseStudy } from './types'
import { quizIds, validateCase } from './validate'

const modules = import.meta.glob<Record<string, CaseStudy>>('./cases/*.ts', { eager: true })
const all = Object.entries(modules).map(([path, mod]) => {
  const exported = Object.values(mod)
  if (exported.length !== 1) throw new Error(`${path} phải export đúng 1 case`)
  return [path, exported[0]] as const
})

describe('nội dung case', () => {
  it.each(all)('%s hợp lệ', (path, c) => {
    expect(path.endsWith(`/${c.id}.ts`), 'tên file phải trùng id').toBe(true)
    expect(validateCase(c)).toEqual([])
  })

  it('metadata nạp sẵn (plugin ?meta) khớp thân bài, và loadCase trả đúng thân bài', async () => {
    expect(cases.length).toBe(all.length)
    for (const [, c] of all) {
      expect(cases.find((m) => m.id === c.id), c.id).toEqual(caseMetaOf(c))
      expect((await loadCase(c.id))?.id).toBe(c.id)
    }
    expect(await loadCase('khong-co')).toBeUndefined()
  })

  it('order duy nhất trong mỗi cấp độ', () => {
    const keys = all.filter(([, c]) => c.order !== undefined).map(([, c]) => `${c.level}:${c.order}`)
    expect(new Set(keys).size).toBe(keys.length)
  })

  it('cases sắp theo cấp độ, rồi order, case không có order xếp cuối cấp', () => {
    const ordered = cases.filter((c) => c.level === 'fresher').map((c) => c.order)
    const firstMissing = ordered.indexOf(undefined)
    if (firstMissing >= 0) expect(ordered.slice(firstMissing).every((o) => o === undefined)).toBe(true)
    const nums = ordered.filter((o): o is number => o !== undefined)
    expect(nums).toEqual([...nums].sort((a, b) => a - b))
  })

  it('id case và id quiz là duy nhất', () => {
    const ids = all.map(([, c]) => c.id)
    expect(new Set(ids).size).toBe(ids.length)
    const qs = all.flatMap(([, c]) => quizIds(c))
    expect(new Set(qs).size).toBe(qs.length)
  })
})
