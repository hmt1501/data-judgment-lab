# data-judgment-lab-api (Cloudflare Worker)

Backend cho tính năng **Đọc nhanh → Hỏi AI**. Nhận câu hỏi, tra cứu web và soạn bài bằng Groq (`openai/gpt-oss-120b`), lưu bài vào D1 để lần sau dùng lại.

**Không có key Groq chung:** mọi lần gọi AI chạy bằng key Groq miễn phí của chính người dùng, gửi trong body (`groqKey`, không đặt ở header để khỏi lọt vào log request). Worker không lưu, không log key. Thiếu key → `401 need_key`; Groq từ chối key → `401 user_key_invalid`; key hết hạn mức → `429`.

```
POST /api/explain        { question, groqKey }  → bài mới (201) hoặc bài đã có (200, cached)
POST /api/chat           { messages, context?, quote?, groqKey } → { reply }   (bong bóng "Hỏi nhanh AI")
POST /api/sync           { progress }            → { code, rev }  tạo mã đồng bộ tiến độ
GET  /api/sync           Bearer <mã>             → { progress, rev, secret }
PUT  /api/sync/secret    Bearer <mã> { secret | null } → { ok }   key Groq đã mã hóa trên trình duyệt (server không giải mã được)
PUT  /api/sync           Bearer <mã> { progress, baseRev } → { rev } · 409 { progress, rev } khi thiết bị khác đã ghi trước
GET  /api/explainers?q=&topic=         → danh sách bài AI
GET  /api/explainers/:slug             → chi tiết
GET  /api/health
```

Luồng xử lý (≈ 6–8K token/câu, vừa giới hạn free tier 8K token/phút của key người dùng):
1. **Tra cứu gọn** (`src/retrieve.ts`, không tốn token AI): 5 tin mới nhất (tiêu đề + tóm tắt) từ **Bing News RSS** (dự phòng: Google News RSS — Google chặn IP Cloudflare, trả 503) + tóm tắt Wikipedia, cắt cứng còn ≤ 5.000 ký tự.
   Không dùng `browser_search` của Groq: model tự mở nguyên trang web, đo thực tế 16K–112K token/câu.
   Không tìm được tư liệu → vẫn soạn bài bằng kiến thức chung của AI, bài không có nguồn và giao diện hiện cảnh báo.
2. **Biên soạn**: 1 lần gọi `gpt-oss-120b` với JSON schema strict; AI chỉ được chọn nguồn **theo số thứ tự** trong danh sách tra cứu (không tự viết URL). Kết quả kiểm tra bằng `validateExplainer` (dùng chung với frontend).

Có cache câu hỏi, cache tư liệu 6 giờ và log `groq_usage` (số token mỗi lần gọi) trong Workers Logs.
Bài AI lưu **công khai** nên mỗi IP chỉ tạo tối đa `DAILY_LIMIT_PER_IP` bài/ngày (chống spam thư viện); lượt được **giữ chỗ trước** khi gọi AI, Groq từ chối thì hoàn lượt. Bộ đếm `global` trong bảng `usage` chỉ để thống kê.

**Hỏi nhanh** (`src/chat.ts`): 1 lần gọi `CHAT_MODEL` (mặc định `openai/gpt-oss-20b`, nhanh và rẻ hơn), gửi kèm ngữ cảnh trang + đoạn người dùng bôi đen; hội thoại không lưu ở server, không có quota (không ghi D1).

**Đồng bộ tiến độ**: server chỉ lưu tiến độ (≤ 64 KB) theo `sha256` của mã + số phiên bản `rev`; việc gộp do client làm. Giới hạn tạo mã `SYNC_CREATE_DAILY` / `SYNC_CREATE_PER_IP`. Cột `secret` (migration `0003_sync_secret.sql`) giữ key Groq đã mã hóa AES-GCM bằng khóa suy ra từ mã — ai có mã đồng bộ thì giải mã được.

Lưu ý: RSS của Bing News và Google News chỉ dành cho dùng cá nhân, phi thương mại.

## Cài đặt lần đầu (làm một lần)

1. ```sh
   cd worker
   npm ci
   npx wrangler login                                   # đăng nhập Cloudflare (mở trình duyệt)
   npx wrangler d1 migrations apply data-judgment-lab --remote
   npx wrangler deploy
   ```
   Worker không cần secret nào. Bản cũ từng có `GROQ_API_KEY` thì xóa đi: `npx wrangler secret delete GROQ_API_KEY`.
2. Lấy URL Worker (dạng `https://data-judgment-lab-api.<tên>.workers.dev`) và đặt vào GitHub: **Settings → Secrets and variables → Actions → Variables → `VITE_API_BASE`**. Chạy lại workflow để frontend bật nút "Hỏi AI".

Tự deploy Worker từ GitHub Actions (tùy chọn): thêm secrets `CLOUDFLARE_API_TOKEN` (quyền *Edit Cloudflare Workers* + *D1*) và `CLOUDFLARE_ACCOUNT_ID`.

## Phát triển

```sh
npm run dev                      # http://127.0.0.1:8787
npm test                         # unit test + SQL thật trên D1 cục bộ
npm run typecheck
npm run types                    # sinh lại kiểu Env sau khi sửa wrangler.jsonc
```

Frontend trỏ vào Worker cục bộ: `VITE_API_BASE=http://127.0.0.1:8787 npm run dev` (ở thư mục gốc).
