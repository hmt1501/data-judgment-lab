import { describe, expect, it } from 'vitest'
import { parseChatInput } from '../../../shared/chat'
import { cases } from '../../content'
import { curatedExplainers } from '../../content/explainerLibrary'
import { pageContext, pageTitle } from './pageContext'

const empty = { lastSection: {}, explainersRead: {} }

describe('pageContext', () => {
  it('case: tiêu đề, câu hỏi, phần đang đọc', () => {
    const c = cases[0]
    const section = c.outline[1]
    const ctx = pageContext({ caseId: c.id }, { ...empty, lastSection: { [c.id]: section.id } })!
    expect(ctx).toContain(c.title)
    expect(ctx).toContain(c.question)
    expect(ctx).toContain(`Phần đang đọc: ${section.title}`)
    expect(ctx).toContain('mô phỏng')
  })

  it('bài Đọc nhanh soạn sẵn và bài AI đã đọc; trang khác → undefined', () => {
    const e = curatedExplainers[0]
    expect(pageContext({ slug: e.slug }, empty)).toContain(e.tldr)
    const read = { ...empty, explainersRead: { 'bai-ai-x1': { title: 'Bài AI', at: '2026-10-07' } } }
    expect(pageContext({ slug: 'bai-ai-x1' }, read)).toContain('Bài AI')
    expect(pageTitle({ slug: 'bai-ai-x1' }, read)).toBe('Bài AI')
    expect(pageContext({}, empty)).toBeUndefined()
    expect(pageContext({ caseId: 'khong-co' }, empty)).toBeUndefined()
  })
})

describe('parseChatInput', () => {
  it('cắt gọn, bỏ tin rỗng, chỉ giữ N tin cuối', () => {
    const many = Array.from({ length: 20 }, (_, i) => ({ role: i % 2 ? 'assistant' : 'user', content: `tin ${i}` }))
    const input = parseChatInput({ messages: [...many, { role: 'user', content: '  hỏi  ' }], quote: ' x '.repeat(500) })
    if (typeof input === 'string') throw new Error(input)
    expect(input.messages.at(-1)).toEqual({ role: 'user', content: 'hỏi' })
    expect(input.messages.length).toBeLessThanOrEqual(12)
    expect(input.quote!.length).toBeLessThanOrEqual(800)
    expect(input.context).toBeUndefined()
  })

  it('sai cấu trúc → chuỗi lỗi', () => {
    expect(typeof parseChatInput(null)).toBe('string')
    expect(typeof parseChatInput({ messages: [{ role: 'system', content: 'x' }] })).toBe('string')
    expect(typeof parseChatInput({ messages: [{ role: 'user', content: '   ' }] })).toBe('string')
  })
})
