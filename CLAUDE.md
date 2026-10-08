# CLAUDE.md — Data Judgment Lab
App học phân tích dữ liệu tiếng Việt (React + Vite, GitHub Pages) + API "Hỏi AI" (Cloudflare Worker + D1 + Groq).
Đọc [docs/codemap.md](docs/codemap.md) (cấu trúc + nguyên tắc kiến trúc) trước khi sửa code, [docs/design.md](docs/design.md) trước khi sửa UI.
Trước khi báo "xong": `npm test && npm run typecheck && npm run build`; `cd worker && npm test && npm run typecheck`.

## Quy tắc file (BẮT BUỘC)
- Root chỉ chứa: CLAUDE.md, README.md, config. KHÔNG tạo .md mới ở root.
- Tài liệu chỉ nằm trong docs/. Trước khi tạo file doc mới: kiểm tra đã có file phù hợp chưa, có thì cập nhật file đó.
- Không tạo bản copy (*-v2, *-new, *-backup). Sửa trực tiếp, git lo lịch sử.
- Script thử nghiệm/chạy 1 lần: xoá sau khi xong, hoặc để trong scripts/ kèm comment mục đích.
- Muốn tạo file/thư mục mới ngoài cấu trúc hiện có → hỏi tôi trước.
- Không bao giờ commit bí mật: GROQ_API_KEY, .dev.vars, .secrets*.

## Bản đồ tài liệu
- docs/codemap.md – cấu trúc code, nguyên tắc kiến trúc, luồng chính, bẫy đã biết
- docs/design.md – design system (tokens, component, bố cục)
- worker/README.md – API Worker, cài đặt & deploy
- README.md – giới thiệu, chạy máy, thêm case, soạn nháp case bằng AI
