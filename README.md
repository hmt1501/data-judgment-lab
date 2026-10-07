# Data Judgment Lab

Ứng dụng học phân tích dữ liệu tiếng Việt:

- **Thư viện case**: bài giải mẫu (worked example) với dữ liệu mô phỏng, lời giải theo best practice, trắc nghiệm ở các điểm quyết định, bẫy thường gặp và nguồn tham khảo thật.
- **Đọc nhanh**: bài giải thích ngắn về kinh tế, đầu tư, bất động sản, thương mại — chuỗi nhân quả, tác động tới Việt Nam, chỉ số nên theo dõi, nguồn. Có thể **hỏi AI** để tạo bài mới (backend trong `worker/`, xem [worker/README.md](worker/README.md)).

Tiến độ lưu trong trình duyệt; bật **đồng bộ** (trang Hồ sơ) để nhận mã và học tiếp trên thiết bị khác.

## Chạy trên máy

```sh
npm ci
npm run dev        # mở trong mạng LAN
npm test           # kiểm tra nội dung case + logic
npm run build
```

## Cấu trúc

```
CLAUDE.md / CODEMAP.md nguyên tắc làm việc + bản đồ code (đọc trước khi sửa)
DESIGN.md              quy ước thiết kế (tokens, component)
shared/                code dùng chung frontend + worker + script: taxonomy, schema Explainer, xử lý chuỗi tiếng Việt
src/styles/            tokens.css (sáng/tối), base.css
src/app/               router (hash), AppShell, CommandPalette (Ctrl/⌘ K)
src/pages/             Home, Library, CaseReader, Explain, ExplainerReader, Path, Profile
src/components/        ui/ (Button, Card, Pill, Progress…), blocks/ (bảng, biểu đồ, quiz…), explainer/
src/content/           types.ts + validate.ts (case), cases/<id>.ts, explainers/<slug>.ts
src/state/             tiến độ học: reducer, lưu localStorage, thống kê & gợi ý bài tiếp theo
src/lib/               tiện ích UI: gọi API, tìm kiếm, markdown, query param
worker/                Cloudflare Worker + D1: API "Hỏi AI" (Groq)
scripts/draft-case.ts  soạn nháp case bằng Groq → drafts/ để review
```

## Thêm một case

1. Tạo `src/content/cases/<id>.ts`, export đúng một `CaseStudy` (xem `revenue-checkout.ts` làm mẫu).
2. Dùng id kỹ năng/lĩnh vực/cấp độ trong `shared/taxonomy.ts`.
3. Chạy `npm test`: bộ kiểm tra sẽ báo lỗi nếu quiz không có đúng 1 đáp án, bảng thiếu cột, thiếu nguồn tham khảo…

Case tự xuất hiện trong thư viện, lộ trình và tìm kiếm.

## Soạn nháp case bằng AI

```sh
GROQ_API_KEY=... npm run draft-case -- --id ten-case --level mid --domain mobile --brief "Mô tả tình huống"
```

Script soạn theo từng phần (vừa giới hạn free tier của Groq), lấy nguồn bằng tra cứu web và kiểm tra link sống, chạy `validateCase`, rồi ghi `drafts/<id>.ts`. **Luôn đọc lại** số liệu, quiz và nguồn trước khi chuyển vào `src/content/cases/`.

## GitHub Pages

Workflow `.github/workflows/deploy.yml` chạy test (frontend + worker), build và deploy thư mục `dist` mỗi khi push lên `main`. Biến `VITE_API_BASE` (Actions variable) bật tính năng hỏi AI; job deploy Worker chỉ chạy khi có secret `CLOUDFLARE_API_TOKEN`. Vào **Settings → Pages** và chọn **GitHub Actions** làm nguồn deploy nếu chưa bật.
