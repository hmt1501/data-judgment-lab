import { describe, expect, it } from 'vitest'
import { LIMITS, parseNewsRss, retrieve } from '../src/retrieve'

const rss = (n: number) => `<?xml version="1.0"?><rss><channel><title>x</title>${Array.from(
  { length: n },
  (_, i) => `<item><title>Tin số ${i} &amp; lạm phát - Báo ${i}</title><link>https://news.google.com/rss/articles/a${i}?oc=5</link><pubDate>Wed, 07 Oct 2026 03:00:00 GMT</pubDate><source url="https://bao${i}.vn">Báo ${i}</source></item>`,
).join('')}</channel></rss>`

const wikiSearch = JSON.stringify({
  pages: [
    { key: 'Lạm_phát', title: 'Lạm phát', excerpt: '<span class="searchmatch">lạm</span> phát là…' },
    { key: 'Giá_dầu', title: 'Giá dầu', excerpt: 'giá dầu…' },
  ],
})

function fakeFetch(routes: Record<string, string | null>): typeof fetch & { urls: string[] } {
  const urls: string[] = []
  const fn = (async (input: RequestInfo | URL) => {
    const url = String(input)
    urls.push(url)
    const hit = Object.entries(routes).find(([prefix]) => url.startsWith(prefix))
    if (!hit || hit[1] === null) return new Response('nope', { status: 503 })
    return new Response(hit[1], { status: 200 })
  }) as typeof fetch
  return Object.assign(fn, { urls })
}

describe('parseNewsRss', () => {
  it('bỏ qua link https sai cú pháp thay vì làm hỏng cả bước tra cứu', () => {
    const xml = '<rss><channel><item><title>Hỏng</title><link>https://exa mple.com/x</link></item><item><title>Tốt</title><link>https://www.vnexpress.net/a</link></item></channel></rss>'
    expect(parseNewsRss(xml).map((n) => [n.title, n.publisher])).toEqual([['Tốt', 'vnexpress.net']])
  })

  it('lấy tiêu đề (bỏ đuôi " - nguồn"), link https, nguồn, ngày; giới hạn số tin', () => {
    const items = parseNewsRss(rss(9))
    expect(items).toHaveLength(LIMITS.news)
    expect(items[0]).toEqual({ title: 'Tin số 0 & lạm phát', url: 'https://news.google.com/rss/articles/a0?oc=5', publisher: 'Báo 0', date: '2026-10-07', snippet: '' })
  })
})

const bingRss = `<?xml version="1.0" encoding="utf-8" ?><rss version="2.0" xmlns:News="https://www.bing.com/news/search"><channel><title>Bing</title>
<item><title>Thu nhập của Mixue, mỗi ng&#224;y l&#227;i h&#224;ng tỷ đồng</title><link>http://www.bing.com/news/apiclick.aspx?ref=FexRss&amp;aid=&amp;tid=x&amp;url=https%3a%2f%2fcafebiz.vn%2fthu-nhap-cua-mixue.chn&amp;c=1&amp;mkt=en-ww</link><description>Chỉ với một c&#226;y kem 10.000 đồng…</description><pubDate>Wed, 30 Sep 2026 02:05:00 GMT</pubDate><News:Source>CafeBiz</News:Source></item>
<item><title>Tin không có link hợp lệ</title><link>http://www.bing.com/news/apiclick.aspx?ref=FexRss&amp;url=http%3a%2f%2finsecure.vn</link></item>
</channel></rss>`

describe('parseNewsRss (Bing)', () => {
  it('lấy URL bài gốc từ link chuyển hướng của Bing, tóm tắt, nguồn; bỏ link không phải https', () => {
    expect(parseNewsRss(bingRss)).toEqual([
      {
        title: 'Thu nhập của Mixue, mỗi ngày lãi hàng tỷ đồng',
        url: 'https://cafebiz.vn/thu-nhap-cua-mixue.chn',
        publisher: 'CafeBiz',
        date: '2026-09-30',
        snippet: 'Chỉ với một cây kem 10.000 đồng…',
      },
    ])
  })
})

describe('retrieve', () => {
  it('ưu tiên Bing News; chỉ gọi Google khi Bing không có tin', async () => {
    const both = fakeFetch({ 'https://www.bing.com/news/search': bingRss, 'https://news.google.com/rss/search': rss(3) })
    const r = await retrieve('mixue', both, { wikiLangs: [] })
    expect(r.sources.map((s) => s.url)).toEqual(['https://cafebiz.vn/thu-nhap-cua-mixue.chn'])
    expect(r.notes).toContain('(CafeBiz): Chỉ với một cây kem')
    expect(both.urls.some((u) => u.includes('news.google.com'))).toBe(false)

    const bingDown = fakeFetch({ 'https://www.bing.com/news/search': null, 'https://news.google.com/rss/search': rss(2) })
    expect((await retrieve('mixue', bingDown, { wikiLangs: [] })).sources).toHaveLength(2)
  })

  it('ghép tin + Wikipedia thành ghi chú có giới hạn và danh sách nguồn thật', async () => {
    const f = fakeFetch({
      'https://news.google.com/rss/search': rss(3),
      'https://vi.wikipedia.org/w/rest.php': wikiSearch,
      'https://vi.wikipedia.org/api/rest_v1/page/summary/': JSON.stringify({ extract: 'Tóm tắt '.repeat(500) }),
    })
    const r = await retrieve('giá dầu lạm phát', f)
    expect(r.sources.map((s) => s.url)).toEqual([
      'https://news.google.com/rss/articles/a0?oc=5',
      'https://news.google.com/rss/articles/a1?oc=5',
      'https://news.google.com/rss/articles/a2?oc=5',
      `https://vi.wikipedia.org/wiki/${encodeURIComponent('Lạm_phát')}`,
      `https://vi.wikipedia.org/wiki/${encodeURIComponent('Giá_dầu')}`,
    ])
    expect(r.notes).toContain('[Tin 2026-10-07] Tin số 0 & lạm phát (Báo 0)')
    expect(r.notes).toContain('[Wikipedia vi] Lạm phát: Tóm tắt')
    // mỗi đoạn Wikipedia bị cắt, tổng ghi chú không vượt giới hạn
    for (const line of r.notes.split('\n').filter((l) => l.includes('Wikipedia'))) expect(line.length).toBeLessThan(LIMITS.wikiChars + 60)
    expect(r.notes.length).toBeLessThanOrEqual(LIMITS.notesChars)
    expect(f.urls[0]).toContain(encodeURIComponent('giá dầu lạm phát'))
  })

  it('một nguồn lỗi vẫn trả phần còn lại; tất cả lỗi → rỗng', async () => {
    const partial = await retrieve('x', fakeFetch({ 'https://news.google.com/': null, 'https://vi.wikipedia.org/w/rest.php': wikiSearch }))
    expect(partial.sources).toHaveLength(2)
    expect(partial.notes).toContain('lạm phát là…') // dùng excerpt khi không lấy được summary
    const none = await retrieve('x', fakeFetch({}))
    expect(none).toEqual({ notes: '', sources: [] })
  })

  it('tùy chọn: không lấy tin, Wikipedia nhiều ngôn ngữ', async () => {
    const f = fakeFetch({ 'https://en.wikipedia.org/w/rest.php': wikiSearch, 'https://vi.wikipedia.org/w/rest.php': wikiSearch })
    const r = await retrieve('x', f, { news: false, wikiLangs: ['en', 'vi'] })
    expect(f.urls.some((u) => u.includes('news.google.com'))).toBe(false)
    expect(r.sources.filter((s) => s.url.startsWith('https://en.'))).toHaveLength(2)
  })
})
