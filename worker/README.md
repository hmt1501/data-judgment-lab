# data-judgment-lab-api (Cloudflare Worker)

Backend cho tính năng **Đọc nhanh → Hỏi AI**. Nhận câu hỏi, tra cứu web và soạn bài bằng Groq (`openai/gpt-oss-120b`), lưu bài vào D1 để lần sau dùng lại.

```
POST /api/explain        { question }  → bài mới (201) hoặc bài đã có (200, cached)
GET  /api/explainers?q=&topic=         → danh sách bài AI
GET  /api/explainers/:slug             → chi tiết
GET  /api/health
```

Pipeline 2 bước (Groq không cho dùng `browser_search` cùng structured outputs):
1. **Tra cứu**: `browser_search` → ghi chú + danh sách nguồn thật.
2. **Biên soạn**: JSON schema strict; AI chỉ được chọn nguồn **theo số thứ tự** trong danh sách ở bước 1 (không tự viết URL).
Kết quả được kiểm tra bằng `validateExplainer` (dùng chung với frontend, `src/content/explainer.ts`).

Giới hạn free tier (8K token/phút) → có cache câu hỏi, cache ghi chú 6 giờ, quota `DAILY_LIMIT` / `DAILY_LIMIT_PER_IP`, và trả `429 + retry-after`.

## Cài đặt lần đầu (làm một lần)

1. Tạo API key tại https://console.groq.com/keys
2. ```sh
   cd worker
   npm ci
   npx wrangler login                       # đăng nhập Cloudflare (mở trình duyệt)
   npx wrangler deploy                      # tạo Worker + tự tạo D1 "data-judgment-lab"
   npx wrangler d1 migrations apply data-judgment-lab --remote
   npx wrangler secret put GROQ_API_KEY     # dán key Groq
   npx wrangler secret put APP_PASSCODE     # (khuyên dùng) mã để chỉ bạn gọi được AI
   ```
3. Lấy URL Worker (dạng `https://data-judgment-lab-api.<tên>.workers.dev`) và đặt vào GitHub: **Settings → Secrets and variables → Actions → Variables → `VITE_API_BASE`**. Chạy lại workflow để frontend bật nút "Hỏi AI".
4. Nếu đặt `APP_PASSCODE`: nhập mã tại trang **Hồ sơ & cài đặt** trên web.

Tự deploy Worker từ GitHub Actions (tùy chọn): thêm secrets `CLOUDFLARE_API_TOKEN` (quyền *Edit Cloudflare Workers* + *D1*) và `CLOUDFLARE_ACCOUNT_ID`.

## Phát triển

```sh
cp .dev.vars.example .dev.vars   # điền GROQ_API_KEY
npm run dev                      # http://127.0.0.1:8787
npm test                         # unit test + SQL thật trên D1 cục bộ
npm run typecheck
npm run types                    # sinh lại kiểu Env sau khi sửa wrangler.jsonc
```

Frontend trỏ vào Worker cục bộ: `VITE_API_BASE=http://127.0.0.1:8787 npm run dev` (ở thư mục gốc).
