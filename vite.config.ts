/// <reference types="vitest/config" />
import { readFile } from 'node:fs/promises'
import { stripTypeScriptTypes } from 'node:module'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { explainerSummaryOf, type Explainer } from './shared/explainer.ts'
import { caseMetaOf } from './src/content/meta.ts'
import type { CaseStudy } from './src/content/types.ts'

const META_QUERY = '?meta'

/**
 * `import meta from './cases/<id>.ts?meta'` → chỉ phần nhẹ của case / bài Đọc nhanh (`caseMetaOf`, `explainerSummaryOf`).
 * Nhờ vậy thư viện, tìm kiếm, thống kê không kéo thân bài vào gói chính; thân bài nạp riêng khi mở (import động).
 * File nội dung chỉ có `import type` nên chạy thẳng được sau khi bỏ kiểu.
 */
function contentMeta(): Plugin {
  return {
    name: 'content-meta',
    enforce: 'pre',
    async load(id) {
      if (!id.endsWith(META_QUERY)) return
      const file = id.slice(0, -META_QUERY.length)
      this.addWatchFile(file)
      const js = stripTypeScriptTypes(await readFile(file, 'utf8'))
      const exported = Object.values(await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`))
      if (exported.length !== 1) this.error(`${file} phải export đúng 1 object`)
      const value = exported[0] as CaseStudy | Explainer
      return `export default ${JSON.stringify('sections' in value ? caseMetaOf(value) : explainerSummaryOf(value))}`
    },
  }
}

/**
 * CSP cho bản build (dev cần script inline của React Refresh nên không áp dụng).
 * connect-src chỉ cho API → nếu có script lạ (XSS, gói npm bị chèn mã) cũng không gửi được key Groq ra ngoài.
 */
function csp(): Plugin {
  let api = ''
  return {
    name: 'csp',
    apply: 'build',
    configResolved(c) {
      api = c.env.VITE_API_BASE ? new URL(c.env.VITE_API_BASE).origin : ''
    },
    transformIndexHtml(html) {
      const policy = [
        "default-src 'self'",
        `connect-src 'self' ${api}`.trim(),
        "img-src 'self' data:",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        'font-src https://fonts.gstatic.com',
        "object-src 'none'",
        "base-uri 'none'",
        "form-action 'none'",
      ].join('; ')
      return html.replace('<head>', `<head>\n    <meta http-equiv="Content-Security-Policy" content="${policy}" />`)
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [contentMeta(), csp(), react()],
  // gói chính ~610 KB với 78 case (React, router, icon + metadata ~2 KB/case); thân bài và Recharts là chunk riêng nạp khi cần
  build: { chunkSizeWarningLimit: 1000 },
  // worker/ có bộ test riêng (cd worker && npm test)
  test: { include: ['src/**/*.test.ts'] },
})
