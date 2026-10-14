import { describe, expect, it } from 'vitest'
import type { CaseMeta } from '../content/types'
import { answerQuiz, emptyProgress, EXPLAINERS_READ_LIMIT, HISTORY_LIMIT, markExplainerRead, markOpened, mergeProgress, sanitize, setCompleted, toggleSaved } from './progress'
import { inProgress, levelProgress, localDayIndex, recommendNext, skillMastery } from './insights'
import { loadProgress, saveProgress, STORAGE_KEY } from './storage'

const mk = (id: string, level: CaseMeta['level'], skills: CaseMeta['skills']) =>
  ({ id, level, skills, title: id }) as CaseMeta

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
    p = answerQuiz(markExplainerRead(p, 'some-ai-explainer', 'Bài AI', NOW), 'some-ai-explainer-q', 'b')
    p = answerQuiz(p, 'forgotten-ai-explainer-q', 'c')
    const clean = sanitize(p, new Set(['a']), new Set(['q1']))
    expect(clean.completed).toEqual({})
    // quiz bài AI chỉ giữ khi bài còn trong danh sách đã đọc
    expect(clean.quiz).toEqual({ 'some-ai-explainer-q': 'b' })
    expect(clean.history).toEqual([])
  })

  it('chỉ nhớ EXPLAINERS_READ_LIMIT bài đọc mới nhất (khi đọc, khi gộp, khi nạp dữ liệu cũ)', () => {
    const at = (i: number) => `2026-10-05T00:00:${String(i % 60).padStart(2, '0')}.${String(i).padStart(3, '0')}Z`
    let p = emptyProgress()
    for (let i = 0; i < EXPLAINERS_READ_LIMIT + 10; i++) p = markExplainerRead(p, `e${i}`, `Bài ${i}`, at(i))
    expect(Object.keys(p.explainersRead)).toHaveLength(EXPLAINERS_READ_LIMIT)
    expect(p.explainersRead.e0).toBeUndefined()
    expect(p.explainersRead[`e${EXPLAINERS_READ_LIMIT + 9}`]).toBeDefined()

    let other = emptyProgress()
    for (let i = 100; i < 100 + EXPLAINERS_READ_LIMIT; i++) other = markExplainerRead(other, `e${i}`, `Bài ${i}`, at(i))
    expect(Object.keys(mergeProgress(p, other).explainersRead)).toHaveLength(EXPLAINERS_READ_LIMIT)

    const storage = new MemoryStorage()
    const many = Object.fromEntries(Array.from({ length: 80 }, (_, i) => [`old${i}`, { title: 't', at: at(i) }]))
    storage.setItem(STORAGE_KEY, JSON.stringify({ ...emptyProgress(), explainersRead: many }))
    expect(Object.keys(loadProgress(storage).explainersRead)).toHaveLength(EXPLAINERS_READ_LIMIT)
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

  it('localDayIndex đổi ngày lúc 0h giờ máy', () => {
    const late = new Date(2026, 9, 7, 23, 59)
    const early = new Date(2026, 9, 8, 0, 1)
    expect(localDayIndex(early) - localDayIndex(late)).toBe(1)
    expect(localDayIndex(new Date(2026, 9, 8, 6, 59))).toBe(localDayIndex(early))
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

  it('bản v2 bị sửa tay: bỏ trường/mục sai kiểu, giữ phần hợp lệ', () => {
    const s = new MemoryStorage()
    s.setItem(
      STORAGE_KEY,
      JSON.stringify({
        version: 2,
        completed: ['a'],
        quiz: { q1: 'b', q2: 3 },
        saved: ['a', null],
        history: [{ caseId: 'a', openedAt: NOW }, 'x'],
        lastSection: null,
        settings: { name: 7, theme: 'neon' },
      }),
    )
    const p = loadProgress(s, NOW)
    expect(p.completed).toEqual({})
    expect(p.quiz).toEqual({ q1: 'b' })
    expect(p.saved).toEqual(['a'])
    expect(p.history).toEqual([{ caseId: 'a', openedAt: NOW }])
    expect(p.lastSection).toEqual({})
    expect(p.explainersRead).toEqual({})
    expect(p.settings).toEqual({ name: '', theme: 'light' })
  })
})
