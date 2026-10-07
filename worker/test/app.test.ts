import { describe, expect, it } from 'vitest'
import type { Explainer } from '../../src/content/explainer'
import { handle, originAllowed, type Deps } from '../src/app'
import { GroqError, groqChat, type Chat, type ChatRequest } from '../src/groq'
import { extractSources, normalizeQuestion, type Research } from '../src/pipeline'
import type { Composed } from '../src/prompts'
import { summary, type Store } from '../src/store'

class MemoryStore implements Store {
  explainers: { e: Explainer; norm: string }[] = []
  research = new Map<string, Research>()
  usage = new Map<string, number>()
  async findByNorm(norm: string) {
    return this.explainers.find((x) => x.norm === norm)?.e ?? null
  }
  async getBySlug(slug: string) {
    return this.explainers.find((x) => x.e.slug === slug)?.e ?? null
  }
  async list({ topic }: { q?: string; topic?: string; limit: number }) {
    return this.explainers.filter((x) => !topic || x.e.topic === topic).map((x) => summary(x.e))
  }
  async insert(e: Explainer, norm: string) {
    this.explainers.push({ e, norm })
  }
  async getResearch(norm: string) {
    return this.research.get(norm) ?? null
  }
  async putResearch(norm: string, r: Research) {
    this.research.set(norm, r)
  }
  async bumpUsage(day: string, key: string) {
    const n = (this.usage.get(`${day}|${key}`) ?? 0) + 1
    this.usage.set(`${day}|${key}`, n)
    return n
  }
  async getUsage(day: string, key: string) {
    return this.usage.get(`${day}|${key}`) ?? 0
  }
}

const composed = (over: Partial<Composed> = {}): Composed => ({
  outOfScope: false,
  title: 'Fed tăng lãi suất và tỷ giá Việt Nam',
  topic: 'macro',
  tldr: 'USD mạnh lên tạo áp lực tỷ giá. NHNN phải cân nhắc công cụ.',
  keyPoints: ['Ý 1', 'Ý 2', 'Ý 3'],
  causalChain: [
    { from: 'Fed tăng lãi suất', to: 'USD mạnh', mechanism: 'Lợi suất USD hấp dẫn hơn' },
    { from: 'USD mạnh', to: 'Áp lực tỷ giá', mechanism: 'Cầu USD tăng' },
  ],
  vietnamImpact: [
    { group: 'Nhà nhập khẩu', effect: 'Chi phí tăng', direction: 'down' },
    { group: 'Nhà xuất khẩu', effect: 'Doanh thu quy đổi tăng', direction: 'up' },
  ],
  indicators: [
    { name: 'Tỷ giá trung tâm', why: 'Đo áp lực', where: 'NHNN' },
    { name: 'DXY', why: 'Sức mạnh USD', where: 'Thị trường' },
  ],
  counterpoints: ['Thặng dư thương mại có thể bù đắp'],
  glossary: [{ term: 'DXY', definition: 'Chỉ số USD' }],
  quiz: {
    question: 'Điều gì quyết định mức tác động?',
    options: [
      { text: 'A', correct: false, explain: 'Sai vì…' },
      { text: 'B', correct: true, explain: 'Đúng vì…' },
      { text: 'C', correct: false, explain: 'Sai vì…' },
    ],
  },
  sourceIndexes: [2, 9],
  ...over,
})

type Script = (req: ChatRequest) => Promise<{ content: string; executedTools: unknown }>

function fakeChat(composeOver: Partial<Composed> = {}): Chat & { calls: ChatRequest[] } {
  const calls: ChatRequest[] = []
  const fn: Script = async (req) => {
    calls.push(req)
    if (req.tools)
      return {
        content: 'Ghi chú…\nNGUỒN: FOMC | https://www.federalreserve.gov/monetarypolicy/fomc.htm',
        executedTools: [{ type: 'browser_search', search_results: { results: [{ title: 'World Bank VN', url: 'https://www.worldbank.org/en/country/vietnam' }] } }],
      }
    return { content: JSON.stringify(composed(composeOver)), executedTools: undefined }
  }
  return Object.assign(fn, { calls })
}

const NOW = new Date('2026-10-07T03:00:00Z')

function setup(over: Partial<Deps> = {}, configOver: Partial<Deps['config']> = {}) {
  const store = new MemoryStore()
  const chat = fakeChat()
  const deps: Deps = {
    store,
    chat,
    config: { allowedOrigins: ['https://hmt1501.github.io', 'http://localhost:*'], dailyLimit: 20, dailyLimitPerIp: 8, model: 'openai/gpt-oss-120b', ...configOver },
    now: () => NOW,
    randomSuffix: () => 'abc123',
    ...over,
  }
  return { deps, store, chat: (over.chat ?? chat) as ReturnType<typeof fakeChat> }
}

const ask = (deps: Deps, question: string, headers: Record<string, string> = {}) =>
  handle(
    new Request('https://api.test/api/explain', {
      method: 'POST',
      headers: { 'content-type': 'application/json', origin: 'https://hmt1501.github.io', 'cf-connecting-ip': '1.2.3.4', ...headers },
      body: JSON.stringify({ question }),
    }),
    deps,
  )

describe('POST /api/explain', () => {
  it('chạy 2 bước, chỉ giữ nguồn có thật, lưu và trả về', async () => {
    const { deps, store, chat } = setup()
    const res = await ask(deps, 'Fed tăng lãi suất ảnh hưởng gì tới Việt Nam?')
    expect(res.status).toBe(201)
    expect(res.headers.get('access-control-allow-origin')).toBe('https://hmt1501.github.io')
    const { explainer } = (await res.json()) as { explainer: Explainer }
    expect(explainer.slug).toBe('fed-tang-lai-suat-va-ty-gia-viet-abc123')
    expect(explainer.origin).toBe('ai')
    // index 9 không tồn tại → bị bỏ; index 2 = nguồn thứ 2 đã tra cứu
    expect(explainer.sources.map((s) => s.url)).toEqual(['https://www.federalreserve.gov/monetarypolicy/fomc.htm'])
    expect(explainer.quiz.options.filter((o) => o.correct)).toHaveLength(1)
    expect(chat.calls[0].tools).toEqual([{ type: 'browser_search' }])
    expect(chat.calls[1].response_format?.json_schema.strict).toBe(true)
    expect(store.explainers).toHaveLength(1)
    expect(await store.getUsage('2026-10-07', 'global')).toBe(1)
  })

  it('câu hỏi đã có (khác dấu/viết hoa) → trả cache, không gọi AI', async () => {
    const { deps, chat } = setup()
    await ask(deps, 'Fed tăng lãi suất ảnh hưởng gì tới Việt Nam?')
    const res = await ask(deps, '  fed TANG lai suat anh huong gi toi viet nam ')
    expect(res.status).toBe(200)
    expect(((await res.json()) as { cached: boolean }).cached).toBe(true)
    expect(chat.calls).toHaveLength(2)
  })

  it('yêu cầu passcode khi được cấu hình', async () => {
    const { deps } = setup({}, { passcode: 'bi-mat' })
    expect((await ask(deps, 'Giá vàng vì sao tăng mạnh?')).status).toBe(401)
    expect((await ask(deps, 'Giá vàng vì sao tăng mạnh?', { 'x-passcode': 'bi-mat' })).status).toBe(201)
  })

  it('hết quota ngày → 429 có retry-after', async () => {
    const { deps, store } = setup({}, { dailyLimit: 1 })
    await store.bumpUsage('2026-10-07', 'global')
    const res = await ask(deps, 'Lạm phát CPI đọc như thế nào?')
    expect(res.status).toBe(429)
    expect(Number(res.headers.get('retry-after'))).toBeGreaterThan(0)
  })

  it('Groq 429 → 429 kèm retry-after; ghi chú nghiên cứu được giữ để thử lại', async () => {
    const calls: ChatRequest[] = []
    const chat: Chat = async (req) => {
      calls.push(req)
      if (req.tools) return { content: 'NGUỒN: A | https://example.org/a', executedTools: undefined }
      throw new GroqError(429, 'rate limit', 42)
    }
    const { deps, store } = setup({ chat })
    const res = await ask(deps, 'Tỷ giá USD/VND được điều hành thế nào?')
    expect(res.status).toBe(429)
    expect(res.headers.get('retry-after')).toBe('42')
    expect(store.research.size).toBe(1)
    expect(await store.getUsage('2026-10-07', 'global')).toBe(0)
  })

  it('ngoài phạm vi → 422; câu hỏi quá ngắn → 400', async () => {
    const { deps } = setup({ chat: fakeChat({ outOfScope: true }) })
    expect((await ask(deps, 'Đội bóng nào vô địch năm nay?')).status).toBe(422)
    expect((await ask(deps, 'Fed?')).status).toBe(400)
  })

  it('AI trả quiz sai cấu trúc → 502', async () => {
    const bad = composed().quiz
    const { deps, store } = setup({ chat: fakeChat({ quiz: { ...bad, options: bad.options.map((o) => ({ ...o, correct: true })) } }) })
    expect((await ask(deps, 'Nợ công Việt Nam có đáng lo không?')).status).toBe(502)
    expect(store.explainers).toHaveLength(0)
  })
})

describe('GET & CORS', () => {
  it('lấy theo slug, 404 khi không có; origin lạ không có header CORS', async () => {
    const { deps } = setup()
    await ask(deps, 'Fed tăng lãi suất ảnh hưởng gì tới Việt Nam?')
    const ok = await handle(new Request('https://api.test/api/explainers/fed-tang-lai-suat-va-ty-gia-viet-abc123', { headers: { origin: 'https://evil.example' } }), deps)
    expect(ok.status).toBe(200)
    expect(ok.headers.get('access-control-allow-origin')).toBeNull()
    expect((await handle(new Request('https://api.test/api/explainers/khong-co'), deps)).status).toBe(404)
    const list = await handle(new Request('https://api.test/api/explainers?topic=macro'), deps)
    expect(((await list.json()) as { items: unknown[] }).items).toHaveLength(1)
  })

  it('originAllowed hỗ trợ cổng bất kỳ', () => {
    const rules = ['https://hmt1501.github.io', 'http://localhost:*']
    expect(originAllowed('http://localhost:5173', rules)).toBe(true)
    expect(originAllowed('http://localhost.evil.com:80', rules)).toBe(false)
    expect(originAllowed('https://hmt1501.github.io.evil.com', rules)).toBe(false)
    expect(originAllowed(null, rules)).toBe(false)
  })
})

describe('tiện ích', () => {
  it('normalizeQuestion bỏ dấu và ký tự đặc biệt', () => {
    expect(normalizeQuestion('  Đồng USD tăng 5%?! ')).toBe('dong usd tang 5%')
  })

  it('extractSources gom URL từ tool lồng nhau và dòng NGUỒN, bỏ http và trùng', () => {
    const tools = { a: [{ deep: { url: 'https://a.org/x', title: 'A' } }, { url: 'http://insecure.org' }] }
    const notes = 'NGUỒN: B | https://b.org/y.\nxem thêm https://a.org/x'
    expect(extractSources(tools, notes)).toEqual([
      { url: 'https://a.org/x', title: 'A' },
      { url: 'https://b.org/y', title: 'B' },
    ])
  })

  it('groqChat gửi bearer và ném GroqError kèm retry-after', async () => {
    let auth = ''
    const fetchImpl = (async (_url: string, init: RequestInit) => {
      auth = new Headers(init.headers).get('authorization') ?? ''
      return new Response(JSON.stringify({ error: { message: 'slow down' } }), { status: 429, headers: { 'retry-after': '7' } })
    }) as unknown as typeof fetch
    const err = await groqChat('k', fetchImpl)({ model: 'm', messages: [] }).catch((e: unknown) => e)
    expect(auth).toBe('Bearer k')
    expect(err).toBeInstanceOf(GroqError)
    expect((err as GroqError).retryAfter).toBe(7)
  })
})
