# CLAUDE.md — Data Judgment Lab

App học phân tích dữ liệu tiếng Việt (React + Vite, GitHub Pages) + API "Hỏi AI" (Cloudflare Worker + D1 + Groq).
Đọc **[CODEMAP.md](CODEMAP.md)** trước để biết file nào làm gì; **[DESIGN.md](DESIGN.md)** trước khi sửa UI.

## Lệnh

```sh
npm test && npm run typecheck          # frontend + shared + scripts
cd worker && npm test && npm run typecheck
npm run build                          # chạy trước khi báo "xong" nếu đã sửa src/
```

## Nguyên tắc

1. **Ranh giới thư mục.** `shared/` không import từ `src/` hay `worker/`, không dùng React/DOM. `worker/` chỉ import `shared/` (không import `src/`). Kiểu/logic dùng ở cả hai phía → đặt trong `shared/`, không copy.
2. **Nội dung là dữ liệu có kiểu.** Case = `src/content/cases/<id>.ts`, bài Đọc nhanh = `src/content/explainers/<slug>.ts`; tên file trùng id/slug, mỗi file export đúng 1 object. Mọi ràng buộc nằm ở `validateCase` / `validateExplainer` — thêm luật mới thì thêm vào đó, đừng kiểm tra rải rác trong UI.
3. **Trung thực.** Số liệu case luôn là mô phỏng (có nhãn); nguồn tham khảo là link `https://` thật. Bài AI chỉ được dùng nguồn từ bước tra cứu (AI chọn theo số thứ tự, không tự viết URL).
4. **UI theo token.** Không hard-code màu/cỡ chữ/khoảng cách — dùng biến trong `src/styles/tokens.css`. Không có nút giả. Chữ ≥ 13px.
5. **Tiếng Việt.** Text giao diện, comment và thông báo lỗi viết tiếng Việt. Tìm kiếm luôn không dấu qua `foldVi` (`shared/text.ts`).
6. **Tiến độ học** chỉ đổi qua reducer thuần trong `src/state/progress.ts`. Đổi cấu trúc `Progress` → tăng `version` và viết migrate trong `src/state/storage.ts` (không làm mất dữ liệu người dùng).
7. **Worker:** logic HTTP trong `app.ts` nhận `Deps` (store, chat, retrieve, now) để test không cần mạng. Đổi schema D1 → thêm file migration mới, không sửa migration cũ.
8. **Bí mật** (`GROQ_API_KEY`, `.dev.vars`, `.secrets*`) không bao giờ commit.
9. Thêm/đổi thư mục hay file quan trọng → cập nhật `CODEMAP.md` trong cùng commit.
