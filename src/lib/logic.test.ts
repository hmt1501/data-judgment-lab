import { describe, expect, it } from 'vitest'
import type { CaseStudy } from '../content/types'
import { answerQuiz, emptyProgress, HISTORY_LIMIT, markOpened, sanitize, setCompleted, toggleSaved } from '../state/progress'
import { inProgress, levelProgress, recommendNext, skillMastery } from './insights'
import { loadProgress, saveProgress, STORAGE_KEY } from './storage'

const mk = (id: string, level: CaseStudy['level'], skills: CaseStudy['skills']) =>
  ({ id, level, skills, title: id }) as CaseStudy

const cases = [
  mk('a', 'fresher', ['funnel', 'segmentation']),
  mk('b', 'fresher', ['retention', 'cohort']),
  mk('c', 'junior', ['funnel', 'cohort']),
]
const NOW = '2026-10-05T00:00:00.000Z'

class MemoryStorage {
  private map = new Map<string, string>()
  get length() {
    return this.map.size
  }
  key(i: number) {
    return [...this.map.keys()][i] ?? null
  }
  getItem(k: string) {
    return this.map.get(k) ?? null
  }
  setItem(k: string, v: string) {
    this.map.set(k, v)
  }
  removeItem(k: string) {
    this.map.delete(k)
  }
}

describe('progress reducers', () => {
  it('markOpened đưa case lên đầu, không trùng, giới hạn độ dài', () => {
    let p = emptyProgress()
    for (let i = 0; i < HISTORY_LIMIT + 5; i++) p = markOpened(p, `x${i}`, NOW)
    p = markOpened(p, 'x3', NOW)
    expect(p.history[0].caseId).toBe('x3')
    expect(p.history.filter((h) => h.caseId === 'x3')).toHaveLength(1)
    expect(p.history.length).toBe(HISTORY_LIMIT)
  })

  it('setCompleted bật/tắt và toggleSaved', () => {
    let p = setCompleted(emptyProgress(), 'a', true, NOW)
    expect(p.completed.a).toBe(NOW)
    p = setCompleted(p, 'a', false, NOW)
    expect(p.completed.a).toBeUndefined()
    p = toggleSaved(toggleSaved(p, 'a'), 'b')
    expect(p.saved).toEqual(['a', 'b'])
    expect(toggleSaved(p, 'a').saved).toEqual(['b'])
  })

  it('sanitize bỏ id không tồn tại', () => {
    let p = setCompleted(emptyProgress(), 'gone', true, NOW)
    p = answerQuiz(markOpened(p, 'gone', NOW), 'old-q1', 'a')
    p = answerQuiz(p, 'some-ai-explainer-q', 'b')
    const clean = sanitize(p, new Set(['a']), new Set(['q1']))
    expect(clean.completed).toEqual({})
    expect(clean.quiz).toEqual({ 'some-ai-explainer-q': 'b' })
    expect(clean.history).toEqual([])
  })
})

describe('insights', () => {
  it('levelProgress và skillMastery đếm đúng', () => {
    const p = setCompleted(emptyProgress(), 'a', true, NOW)
    expect(levelProgress(cases, p).fresher).toEqual({ done: 1, total: 2 })
    expect(levelProgress(cases, p).junior).toEqual({ done: 0, total: 1 })
    const funnel = skillMastery(cases, p).find((s) => s.id === 'funnel')!
    expect([funnel.done, funnel.total]).toEqual([1, 2])
    expect(skillMastery(cases, p).some((s) => s.id === 'tracking')).toBe(false)
  })

  it('recommendNext ưu tiên bài đang đọc dở', () => {
    const p = markOpened(emptyProgress(), 'c', NOW)
    expect(inProgress(cases, p).map((c) => c.id)).toEqual(['c'])
    expect(recommendNext(cases, p)?.case.id).toBe('c')
  })

  it('recommendNext chọn cấp thấp nhất, kỹ năng yếu nhất', () => {
    const p = setCompleted(emptyProgress(), 'a', true, NOW)
    expect(recommendNext(cases, p)?.case.id).toBe('b')
    const all = ['a', 'b', 'c'].reduce((acc, id) => setCompleted(acc, id, true, NOW), emptyProgress())
    expect(recommendNext(cases, all)).toBeUndefined()
  })
})

describe('storage', () => {
  it('chuyển dữ liệu v1 sang v2', () => {
    const s = new MemoryStorage()
    s.setItem('djl-done', JSON.stringify(['a']))
    s.setItem('djl-recent', JSON.stringify(['b', 'a']))
    s.setItem('djl-saved', JSON.stringify(['c']))
    const p = loadProgress(s, NOW)
    expect(p.completed).toEqual({ a: NOW })
    expect(p.history.map((h) => h.caseId)).toEqual(['b', 'a'])
    expect(p.saved).toEqual(['c'])
  })

  it('đọc lại đúng bản v2 đã lưu; dữ liệu hỏng trả về rỗng', () => {
    const s = new MemoryStorage()
    const p = toggleSaved(emptyProgress(), 'a')
    saveProgress(s, p)
    expect(loadProgress(s, NOW)).toEqual(p)
    s.setItem(STORAGE_KEY, '{not json')
    expect(loadProgress(s, NOW)).toEqual(emptyProgress())
  })
})
