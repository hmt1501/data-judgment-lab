# data-judgment-lab-api (Cloudflare Worker)

Backend cho tính năng **Đọc nhanh → Hỏi AI**. Nhận câu hỏi, tra cứu web và soạn bài bằng Groq (`openai/gpt-oss-120b`), lưu bài vào D1 để lần sau dùng lại.

```
POST /api/explain        { question }  → bài mới (201) hoặc bài đã có (200, cached)
POST /api/chat           { messages, context?, quote? } → { reply }   (bong bóng "Hỏi nhanh AI")
GET  /api/explainers?q=&topic=         → danh sách bài AI
GET  /api/explainers/:slug             → chi tiết
GET  /api/health
```

Luồng xử lý (≈ 6–8K token/câu, vừa giới hạn free tier 8K token/phút):
1. **Tra cứu gọn** (`src/retrieve.ts`, không tốn token AI): 5 tin mới nhất (tiêu đề + tóm tắt) từ **Bing News RSS** (dự phòng: Google News RSS — Google chặn IP Cloudflare, trả 503) + tóm tắt Wikipedia, cắt cứng còn ≤ 5.000 ký tự.
   Không dùng `browser_search` của Groq: model tự mở nguyên trang web, đo thực tế 16K–112K token/câu.
   Không tìm được tư liệu → vẫn soạn bài bằng kiến thức chung của AI, bài không có nguồn và giao diện hiện cảnh báo.
2. **Biên soạn**: 1 lần gọi `gpt-oss-120b` với JSON schema strict; AI chỉ được chọn nguồn **theo số thứ tự** trong danh sách tra cứu (không tự viết URL). Kết quả kiểm tra bằng `validateExplainer` (dùng chung với frontend).

Có cache câu hỏi, cache tư liệu 6 giờ, quota `DAILY_LIMIT` / `DAILY_LIMIT_PER_IP`, trả `429 + retry-after`, và log `groq_usage` (số token mỗi lần gọi) trong Workers Logs.
Quota được **giữ chỗ trước** khi gọi AI (request song song không vượt giới hạn); Groq từ chối (rate limit, sai key, lỗi dịch vụ) thì hoàn lượt.

**Hỏi nhanh** (`src/chat.ts`): 1 lần gọi `CHAT_MODEL` (mặc định `openai/gpt-oss-20b`, nhanh và rẻ hơn), gửi kèm ngữ cảnh trang + đoạn người dùng bôi đen; hội thoại không lưu ở server. Quota riêng `CHAT_DAILY_LIMIT` / `CHAT_DAILY_LIMIT_PER_IP`.

Lưu ý: RSS của Bing News và Google News chỉ dành cho dùng cá nhân, phi thương mại.

## Cài đặt lần đầu (làm một lần)

1. Tạo API key tại https://console.groq.com/keys
2. Tạo file `worker/.secrets.prod` (đã gitignore, **không commit**) với nội dung:
   ```
   GROQ_API_KEY=<key Groq của bạn>
   ```
3. ```sh
   cd worker
   npm ci
   npx wrangler login                                   # đăng nhập Cloudflare (mở trình duyệt)
   npx wrangler deploy --secrets-file .secrets.prod     # lần đầu: tạo Worker + D1 kèm secret
   npx wrangler d1 migrations apply data-judgment-lab --remote
   ```
   Sau đó có thể xóa `.secrets.prod`. Đổi key về sau: `npx wrangler secret put GROQ_API_KEY`.
4. Lấy URL Worker (dạng `https://data-judgment-lab-api.<tên>.workers.dev`) và đặt vào GitHub: **Settings → Secrets and variables → Actions → Variables → `VITE_API_BASE`**. Chạy lại workflow để frontend bật nút "Hỏi AI".

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
