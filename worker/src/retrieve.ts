import type { Research, Source } from './pipeline'

/**
 * Tra cứu gọn do Worker tự làm (không dùng browser_search của Groq: model tự mở nguyên trang,
 * một câu hỏi tốn 16K–112K token). Kết quả bị giới hạn cứng để bước biên soạn vừa 8K token/phút.
 *
 * - Google News RSS: tiêu đề + nguồn + ngày của tin mới nhất (điều khoản feed: dùng cá nhân, phi thương mại).
 * - Wikipedia (vi, en): đoạn tóm tắt khái niệm.
 */
export const LIMITS = { news: 5, wiki: 3, wikiChars: 600, notesChars: 5000, timeoutMs: 6000 }

export type RetrieveOptions = { news?: boolean; wikiLangs?: ('vi' | 'en')[] }

const decodeEntities = (s: string) =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n: string) => String.fromCodePoint(Number(n)))

const stripTags = (s: string) => decodeEntities(s.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim()

const clip = (s: string, max: number) => (s.length > max ? `${s.slice(0, max - 1).trimEnd()}…` : s)

const tag = (xml: string, name: string) => xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`))?.[1]

type NewsItem = { title: string; url: string; publisher: string; date: string }

export function parseNewsRss(xml: string, limit = LIMITS.news): NewsItem[] {
  const items: NewsItem[] = []
  for (const m of xml.matchAll(/<item>([\s\S]*?)<\/item>/g)) {
    const raw = m[1]
    const url = decodeEntities(tag(raw, 'link') ?? '').trim()
    if (!url.startsWith('https://')) continue
    const publisher = stripTags(tag(raw, 'source') ?? '')
    let title = stripTags(tag(raw, 'title') ?? '')
    // Google News nối " - <nguồn>" vào cuối tiêu đề
    if (publisher && title.endsWith(` - ${publisher}`)) title = title.slice(0, -publisher.length - 3)
    const pub = Date.parse(tag(raw, 'pubDate') ?? '')
    items.push({ title, url, publisher: publisher || 'Google News', date: Number.isFinite(pub) ? new Date(pub).toISOString().slice(0, 10) : '' })
    if (items.length >= limit) break
  }
  return items
}

async function getText(fetchImpl: typeof fetch, url: string): Promise<string | null> {
  try {
    const res = await fetchImpl(url, {
      headers: { 'user-agent': 'data-judgment-lab/1.0 (https://hmt1501.github.io/data-judgment-lab/)' },
      signal: AbortSignal.timeout(LIMITS.timeoutMs),
    })
    return res.ok ? await res.text() : null
  } catch {
    return null
  }
}

async function news(fetchImpl: typeof fetch, q: string): Promise<{ notes: string[]; sources: Source[] }> {
  const xml = await getText(fetchImpl, `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=vi&gl=VN&ceid=VN:vi`)
  const items = xml ? parseNewsRss(xml) : []
  return {
    notes: items.map((n) => `- [Tin ${n.date || 'không rõ ngày'}] ${n.title} (${n.publisher})`),
    sources: items.map((n) => ({ title: `${n.title} — ${n.publisher}`, url: n.url })),
  }
}

type WikiSearch = { pages?: { key: string; title: string; excerpt?: string; description?: string | null }[] }

async function wiki(fetchImpl: typeof fetch, q: string, lang: 'vi' | 'en'): Promise<{ notes: string[]; sources: Source[] }> {
  const body = await getText(fetchImpl, `https://${lang}.wikipedia.org/w/rest.php/v1/search/page?q=${encodeURIComponent(q)}&limit=${LIMITS.wiki}`)
  let pages: NonNullable<WikiSearch['pages']> = []
  try {
    pages = (JSON.parse(body ?? '{}') as WikiSearch).pages ?? []
  } catch {
    pages = []
  }
  const top = pages.slice(0, LIMITS.wiki)
  const summaries = await Promise.all(
    top.map(async (p) => {
      const s = await getText(fetchImpl, `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(p.key)}`)
      try {
        return (JSON.parse(s ?? '{}') as { extract?: string }).extract ?? ''
      } catch {
        return ''
      }
    }),
  )
  return {
    notes: top.map((p, i) => `- [Wikipedia ${lang}] ${p.title}: ${clip(summaries[i] || stripTags(p.excerpt ?? p.description ?? ''), LIMITS.wikiChars)}`),
    sources: top.map((p) => ({ title: `${p.title} — Wikipedia`, url: `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(p.key)}` })),
  }
}

export async function retrieve(question: string, fetchImpl: typeof fetch = fetch, opts: RetrieveOptions = {}): Promise<Research> {
  const { news: withNews = true, wikiLangs = ['vi'] } = opts
  const parts = await Promise.all([
    withNews ? news(fetchImpl, question) : Promise.resolve({ notes: [], sources: [] }),
    ...wikiLangs.map((lang) => wiki(fetchImpl, question, lang)),
  ])
  const sources = parts.flatMap((p) => p.sources)
  const notes = clip(parts.flatMap((p) => p.notes).join('\n'), LIMITS.notesChars)
  return { notes, sources }
}
