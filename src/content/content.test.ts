import { describe, expect, it } from 'vitest'
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

  it('id case và id quiz là duy nhất', () => {
    const ids = all.map(([, c]) => c.id)
    expect(new Set(ids).size).toBe(ids.length)
    const qs = all.flatMap(([, c]) => quizIds(c))
    expect(new Set(qs).size).toBe(qs.length)
  })
})
