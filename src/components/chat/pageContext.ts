import { domainById, levelById } from '../../../shared/taxonomy'
import { caseById } from '../../content'
import { curatedBySlug } from '../../content/explainerLibrary'
import type { Progress } from '../../state/progress'

export type PageRef = { caseId?: string; slug?: string }

/** Mô tả ngắn trang đang đọc để AI trả lời đúng ngữ cảnh; undefined nếu trang không phải bài học. */
export function pageContext(page: PageRef, progress: Pick<Progress, 'lastSection' | 'explainersRead'>): string | undefined {
  const c = page.caseId ? caseById(page.caseId) : undefined
  if (c) {
    const section = c.outline.find((s) => s.id === progress.lastSection[c.id])
    return [
      `Case "${c.title}" (cấp ${levelById(c.level).name}, lĩnh vực ${domainById(c.domain).name}; dữ liệu mô phỏng).`,
      `Câu hỏi kinh doanh: ${c.question}`,
      section && `Phần đang đọc: ${section.title}`,
    ]
      .filter(Boolean)
      .join('\n')
  }
  if (page.slug) {
    const e = curatedBySlug(page.slug)
    if (e) return `Bài Đọc nhanh "${e.title}".\nCâu hỏi: ${e.question}\nTóm tắt: ${e.tldr}`
    // bài AI không có trong bundle: dùng tiêu đề đã lưu khi đọc
    const read = progress.explainersRead[page.slug]
    if (read) return `Bài Đọc nhanh (AI tạo) "${read.title}".`
  }
  return undefined
}

/** Tên ngắn hiển thị trên chip ngữ cảnh. */
export function pageTitle(page: PageRef, progress: Pick<Progress, 'explainersRead'>): string | undefined {
  if (page.caseId) return caseById(page.caseId)?.title
  if (page.slug) return curatedBySlug(page.slug)?.title ?? progress.explainersRead[page.slug]?.title
  return undefined
}
