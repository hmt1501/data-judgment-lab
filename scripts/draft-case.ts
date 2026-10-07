/**
 * Soạn NHÁP một case bằng Groq rồi kiểm tra bằng validateCase.
 * Kết quả ghi vào drafts/<id>.ts (đã gitignore) — đọc lại, sửa số liệu rồi mới chuyển vào src/content/cases/.
 *
 *   GROQ_API_KEY=... npx tsx scripts/draft-case.ts --id churn-pricing --level mid --domain mobile \
 *     --brief "Churn tăng sau khi đổi giá gói năm; phân biệt churn tự nguyện và thanh toán thất bại"
 *
 * Free tier gpt-oss-120b chỉ 8K token/phút nên script gọi theo từng phần và tự chờ khi gặp 429.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { parseArgs } from 'node:util'
import { domains, levels, skills } from '../src/content/taxonomy'
import type { CaseStudy, Section } from '../src/content/types'
import { validateCase } from '../src/content/validate'
import { GroqError, groqChat, type ChatRequest } from '../worker/src/groq'
import { extractSources } from '../worker/src/pipeline'

const { values: args } = parseArgs({
  options: {
    id: { type: 'string' },
    level: { type: 'string' },
    domain: { type: 'string' },
    brief: { type: 'string' },
    model: { type: 'string', default: 'openai/gpt-oss-120b' },
  },
})

function fail(msg: string): never {
  console.error(msg)
  // đặt exitCode thay vì process.exit để Node đóng kết nối mạng gọn gàng (tránh lỗi libuv trên Windows)
  process.exitCode = 1
  throw new Error('__handled__')
}

process.on('uncaughtException', (err) => {
  if (err.message !== '__handled__') console.error(err)
  process.exitCode = 1
})

const apiKey = process.env.GROQ_API_KEY ?? fail('Thiếu biến môi trường GROQ_API_KEY')
const id = args.id ?? fail('Thiếu --id (kebab-case)')
if (!/^[a-z0-9-]+$/.test(id)) fail('--id phải là kebab-case')
const level = levels.find((l) => l.id === args.level) ?? fail(`--level phải là: ${levels.map((l) => l.id).join(', ')}`)
const domain = domains.find((d) => d.id === args.domain) ?? fail(`--domain phải là: ${domains.map((d) => d.id).join(', ')}`)
const brief = args.brief ?? fail('Thiếu --brief')
const model = args.model!

const chat = groqChat(apiKey)
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

/** Gọi Groq, tự chờ retry-after khi bị giới hạn tốc độ (tối đa 5 lần). */
async function call(req: ChatRequest) {
  for (let attempt = 1; ; attempt++) {
    try {
      return await chat(req)
    } catch (err) {
      if (err instanceof GroqError && err.status === 429 && attempt < 5) {
        const wait = (err.retryAfter ?? 30) + 2
        console.log(`  … giới hạn tốc độ, chờ ${wait}s`)
        await sleep(wait * 1000)
        continue
      }
      if (err instanceof GroqError) fail(`Groq lỗi ${err.status}: ${err.message}${err.status === 401 ? ' (kiểm tra GROQ_API_KEY)' : ''}`)
      throw err
    }
  }
}

async function json<T>(system: string, user: string, maxTokens: number): Promise<T> {
  const res = await call({
    model,
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user },
    ],
    response_format: { type: 'json_object' } as unknown as ChatRequest['response_format'],
    reasoning_effort: 'low',
    max_completion_tokens: maxTokens,
    temperature: 0.5,
  })
  try {
    return JSON.parse(res.content) as T
  } catch {
    fail(`AI trả về JSON hỏng:\n${res.content.slice(0, 500)}`)
  }
}

const typesSource = readFileSync(new URL('../src/content/types.ts', import.meta.url), 'utf8')
const skillList = skills.map((s) => `${s.id} (${s.name})`).join(', ')

const BASE_RULES = `Bạn soạn case học phân tích dữ liệu bằng tiếng Việt theo dạng bài giải mẫu (worked example) cho cấp ${level.name}, lĩnh vực ${domain.name}.
Dữ liệu là MÔ PHỎNG nhưng phải khớp nhau tuyệt đối (tổng, tỷ lệ, phân rã). Định dạng số kiểu Việt Nam: 1.234,5. Không dùng tên công ty thật.
Markdown trong chuỗi chỉ gồm **đậm**, *nghiêng*, \`code\`. Trả về DUY NHẤT một object JSON.
Kiểu dữ liệu (TypeScript):
${typesSource}`

type Outline = {
  title: string
  question: string
  summary: string
  minutes: number
  skills: string[]
  dataStory: string
  analysisPlan: { id: string; title: string; insight: string }[]
}

console.log(`1/4 Dàn ý cho "${id}"…`)
const outline = await json<Outline>(
  BASE_RULES,
  `Brief: ${brief}
Tạo dàn ý JSON: { title, question, summary, minutes (6–12), skills (2–4 id trong: ${skillList}), dataStory (mô tả bộ số liệu mock và cách các con số khớp nhau, có số cụ thể), analysisPlan: 3 bước phân tích {id kebab-case, title "Bước n — …", insight} }`,
  2500,
)

console.log('2/4 Bối cảnh + khung tư duy…')
const intro = await json<{ sections: Section[] }>(
  BASE_RULES,
  `Dàn ý: ${JSON.stringify(outline)}
Viết { sections: [ section kind "context" (id "context", có block kpis + text + callout insight), section kind "framework" (id "framework", có formula hoặc list steps, và 1 quiz id "${id}-q1" đúng 1 đáp án correct:true, mỗi option có explain) ] }`,
  3500,
)

const analysis: Section[] = []
for (const [i, step] of outline.analysisPlan.entries()) {
  console.log(`3/4 Phân tích ${i + 1}/${outline.analysisPlan.length}…`)
  const part = await json<{ section: Section }>(
    BASE_RULES,
    `Dàn ý: ${JSON.stringify({ dataStory: outline.dataStory, step })}
Viết { section } kind "analysis", id "${step.id}", title "${step.title}": có ít nhất một block table (columns key/label, rows khớp key) hoặc chart (data số, series), một callout expert hoặc warning${i === 1 ? `, và 1 quiz id "${id}-q2"` : ''}.`,
    3000,
  )
  analysis.push(part.section)
}

console.log('4/4 Giải pháp, bẫy, nguồn…')
const outro = await json<{ sections: Section[]; takeaways: string[] }>(
  BASE_RULES,
  `Dàn ý: ${JSON.stringify({ title: outline.title, dataStory: outline.dataStory, plan: outline.analysisPlan })}
Viết { sections: [ section kind "solution" id "solution" (text kết luận + block actions 2–3 mục {action, owner, metric, threshold} + callout expert "Vì sao đây là cách xử lý tối ưu"), section kind "pitfalls" id "pitfalls" (block pitfalls 3 mục {title, why, instead}) ], takeaways: đúng 3 câu }`,
  3000,
)

const research = await call({
  model,
  messages: [
    { role: 'system', content: 'Tìm 3–5 nguồn công khai uy tín (tài liệu chính thức, sách, blog kỹ thuật nổi tiếng) giải thích phương pháp trong case. Cuối câu trả lời liệt kê mỗi nguồn một dòng: NGUỒN: <tiêu đề> | <url>' },
    { role: 'user', content: `${outline.title}. Kỹ năng: ${outline.skills.join(', ')}. ${brief}` },
  ],
  tools: [{ type: 'browser_search' }],
  tool_choice: 'required',
  reasoning_effort: 'low',
  max_completion_tokens: 1500,
})
const candidates = extractSources(research.executedTools, research.content, 8)
const references: CaseStudy['references'] = []
for (const s of candidates) {
  const ok = await fetch(s.url, { redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0' } })
    .then((r) => r.ok)
    .catch(() => false)
  console.log(`  ${ok ? '✓' : '✗'} ${s.url}`)
  if (ok && references.length < 3)
    references.push({ title: s.title, publisher: new URL(s.url).hostname.replace(/^www\./, ''), url: s.url, note: 'Nguồn do AI đề xuất — cần viết lại ghi chú khi review.' })
}

const draft = {
  id,
  title: outline.title,
  domain: domain.id,
  level: level.id,
  minutes: outline.minutes,
  skills: outline.skills,
  question: outline.question,
  summary: outline.summary,
  sections: [...intro.sections, ...analysis, ...outro.sections],
  takeaways: outro.takeaways,
  references,
} as CaseStudy

const errors = validateCase(draft)
const exportName = id.replace(/-([a-z0-9])/g, (_, c: string) => c.toUpperCase())
mkdirSync(new URL('../drafts/', import.meta.url), { recursive: true })
const out = new URL(`../drafts/${id}.ts`, import.meta.url)
writeFileSync(
  out,
  `// NHÁP do AI (${model}) soạn ${new Date().toISOString().slice(0, 10)} — kiểm tra lại số liệu, quiz và nguồn trước khi chuyển vào src/content/cases/.
// Câu chuyện số liệu dự kiến: ${outline.dataStory.replace(/\n/g, ' ')}
${errors.length ? `// LỖI validateCase:\n${errors.map((e) => `//  - ${e}`).join('\n')}\n` : ''}import type { CaseStudy } from '../src/content/types'

export const ${exportName}: CaseStudy = ${JSON.stringify(draft, null, 2)}
`,
)
console.log(`\nĐã ghi ${out.pathname}`)
console.log(errors.length ? `⚠ ${errors.length} lỗi cần sửa:\n${errors.join('\n')}` : '✓ Qua validateCase. Hãy review rồi chuyển vào src/content/cases/ (sửa import thành ../types).')
