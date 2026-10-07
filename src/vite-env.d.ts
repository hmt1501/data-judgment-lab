/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL gốc của Worker, ví dụ https://data-judgment-lab-api.<account>.workers.dev — không đặt thì ẩn tính năng AI */
  readonly VITE_API_BASE?: string
}
