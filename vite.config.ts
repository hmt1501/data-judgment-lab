import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  // gói chính chứa toàn bộ nội dung case (cần cho thư viện/tìm kiếm); Recharts tách riêng
  build: { chunkSizeWarningLimit: 700 },
})
