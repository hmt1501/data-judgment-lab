import type { QuizBlock } from '../../shared/explainer'
import type { DomainId, LevelId, SkillId } from '../../shared/taxonomy'

export type { QuizBlock, QuizOption } from '../../shared/explainer'

/** Sắc thái màu cho số liệu / ô bảng. */
export type Tone = 'neutral' | 'positive' | 'negative' | 'warning'

/**
 * Chuỗi `md` hỗ trợ markdown tối giản:
 * đoạn văn cách nhau bằng dòng trống, **đậm**, *nghiêng*, `code`, [link](https://...).
 */
export type Markdown = string

export type KpiItem = { label: string; value: string; delta?: string; tone?: Tone; note?: string }

export type TableColumn = { key: string; label: string; align?: 'left' | 'right' }
export type TableCell = string | number

export type ChartSeries = { key: string; label: string }

export type ActionItem = { action: string; owner: string; metric: string; threshold: string }

export type Pitfall = { title: string; why: Markdown; instead: Markdown }

export type Block =
  | { kind: 'text'; md: Markdown }
  | { kind: 'kpis'; items: KpiItem[] }
  | {
      kind: 'table'
      title: string
      columns: TableColumn[]
      rows: Record<string, TableCell>[]
      /** chỉ số hàng (0-based) cần tô màu */
      highlight?: { row: number; tone: Tone }[]
      caption?: Markdown
    }
  | {
      kind: 'chart'
      title: string
      type: 'bar' | 'line' | 'stackedBar'
      data: Record<string, TableCell>[]
      xKey: string
      series: ChartSeries[]
      /** đơn vị hiển thị sau giá trị, ví dụ '%', ' tỷ đ' */
      unit?: string
      /** đánh dấu một mốc trên trục x, ví dụ ngày release */
      marker?: { x: string; label: string }
      caption?: Markdown
    }
  | { kind: 'formula'; expression: string; note?: Markdown }
  | QuizBlock
  | { kind: 'callout'; tone: 'insight' | 'expert' | 'warning'; title?: string; md: Markdown }
  | { kind: 'list'; style: 'steps' | 'bullets' | 'check'; items: Markdown[] }
  | { kind: 'actions'; items: ActionItem[] }
  | { kind: 'pitfalls'; items: Pitfall[] }

export type SectionKind = 'context' | 'framework' | 'analysis' | 'solution' | 'pitfalls'

export type Section = { id: string; kind: SectionKind; title: string; blocks: Block[] }

export type Reference = { title: string; publisher: string; url: string; note: string }

export type CaseStudy = {
  id: string
  title: string
  domain: DomainId
  level: LevelId
  minutes: number
  skills: SkillId[]
  /** câu hỏi kinh doanh người phân tích phải trả lời */
  question: string
  /** 1–2 câu mô tả cho thẻ thư viện */
  summary: string
  sections: Section[]
  /** 3 ý cần nhớ */
  takeaways: string[]
  references: Reference[]
}
