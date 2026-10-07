/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  // gói chính chứa toàn bộ nội dung case + đọc nhanh (cần cho thư viện/tìm kiếm); Recharts tách riêng.
  // Khi nội dung lớn gấp đôi: tách thân bài thành chunk tải theo route.
  build: { chunkSizeWarningLimit: 1000 },
  // worker/ có bộ test riêng (cd worker && npm test)
  test: { include: ['src/**/*.test.ts'] },
})
