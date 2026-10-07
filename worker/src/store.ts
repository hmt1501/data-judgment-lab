import type { Explainer, ExplainerSummary } from '../../shared/explainer'
import { foldVi } from '../../shared/text'
import type { Research } from './pipeline'

/** Lưu trữ tách khỏi D1 để test được bằng bản trong bộ nhớ. */
export interface Store {
  findByNorm(norm: string): Promise<Explainer | null>
  getBySlug(slug: string): Promise<Explainer | null>
  list(opts: { q?: string; topic?: string; limit: number }): Promise<ExplainerSummary[]>
  insert(e: Explainer, norm: string, now: Date): Promise<void>
  getResearch(norm: string, maxAgeMs: number, now: Date): Promise<Research | null>
  putResearch(norm: string, r: Research, now: Date): Promise<void>
  /** cộng `delta` (mặc định 1, âm = hoàn lượt) vào bộ đếm, atomic; trả về giá trị mới */
  bumpUsage(day: string, key: string, delta?: number): Promise<number>
  getUsage(day: string, key: string): Promise<number>
}

const summary = (e: Explainer): ExplainerSummary => ({
  slug: e.slug,
  question: e.question,
  title: e.title,
  topic: e.topic,
  tldr: e.tldr,
  origin: e.origin,
  asOf: e.asOf,
})

type Row = { json: string }

export class D1Store implements Store {
  constructor(private readonly db: D1Database) {}

  async findByNorm(norm: string) {
    const row = await this.db.prepare('SELECT json FROM explainers WHERE norm_question = ? ORDER BY created_at DESC LIMIT 1').bind(norm).first<Row>()
    return row ? (JSON.parse(row.json) as Explainer) : null
  }

  async getBySlug(slug: string) {
    const row = await this.db.prepare('SELECT json FROM explainers WHERE slug = ?').bind(slug).first<Row>()
    return row ? (JSON.parse(row.json) as Explainer) : null
  }

  async list({ q, topic, limit }: { q?: string; topic?: string; limit: number }) {
    const where: string[] = []
    const binds: unknown[] = []
    let from = 'explainers e'
    if (q) {
      from = 'explainers_fts f JOIN explainers e ON e.slug = f.slug'
      where.push('explainers_fts MATCH ?')
      // mỗi từ là một prefix query, đặt trong ngoặc kép để tránh cú pháp FTS lỗi
      binds.push(
        foldVi(q)
          .split(/\s+/)
          .filter(Boolean)
          .map((t) => `"${t.replace(/"/g, '')}"*`)
          .join(' '),
      )
    }
    if (topic) {
      where.push('e.topic = ?')
      binds.push(topic)
    }
    const sql = `SELECT e.json FROM ${from} ${where.length ? `WHERE ${where.join(' AND ')}` : ''} ORDER BY e.created_at DESC LIMIT ?`
    const { results } = await this.db
      .prepare(sql)
      .bind(...binds, limit)
      .all<Row>()
    return results.map((r) => summary(JSON.parse(r.json) as Explainer))
  }

  async insert(e: Explainer, norm: string, now: Date) {
    await this.db.batch([
      this.db
        .prepare('INSERT INTO explainers (id, slug, question, norm_question, title, topic, tldr, json, model, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
        .bind(e.id, e.slug, e.question, norm, e.title, e.topic, e.tldr, JSON.stringify(e), e.model ?? '', now.toISOString()),
      this.db.prepare('INSERT INTO explainers_fts (slug, body) VALUES (?, ?)').bind(e.slug, foldVi(`${e.question} ${e.title} ${e.tldr}`)),
    ])
  }

  async getResearch(norm: string, maxAgeMs: number, now: Date) {
    const row = await this.db
      .prepare('SELECT notes, sources, created_at FROM research_cache WHERE norm_question = ?')
      .bind(norm)
      .first<{ notes: string; sources: string; created_at: string }>()
    if (!row || now.getTime() - Date.parse(row.created_at) > maxAgeMs) return null
    return { notes: row.notes, sources: JSON.parse(row.sources) as Research['sources'] }
  }

  async putResearch(norm: string, r: Research, now: Date) {
    await this.db
      .prepare('INSERT OR REPLACE INTO research_cache (norm_question, notes, sources, created_at) VALUES (?, ?, ?, ?)')
      .bind(norm, r.notes, JSON.stringify(r.sources), now.toISOString())
      .run()
  }

  async bumpUsage(day: string, key: string, delta = 1) {
    const row = await this.db
      .prepare('INSERT INTO usage (day, key, count) VALUES (?, ?, ?) ON CONFLICT (day, key) DO UPDATE SET count = count + excluded.count RETURNING count')
      .bind(day, key, delta)
      .first<{ count: number }>()
    return row?.count ?? delta
  }

  async getUsage(day: string, key: string) {
    const row = await this.db.prepare('SELECT count FROM usage WHERE day = ? AND key = ?').bind(day, key).first<{ count: number }>()
    return row?.count ?? 0
  }
}

export { summary }
