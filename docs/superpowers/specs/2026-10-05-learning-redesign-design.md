# Data Judgment Lab v2 — Thiết kế

Ngày: 2026-10-05 · Trạng thái: đã duyệt

## Mục tiêu

Chuyển app từ "tự viết câu trả lời rồi so với đáp án" sang **học qua bài giải mẫu** (worked example): mỗi case có dữ liệu mock, lời giải theo best practice, trắc nghiệm ở một số điểm quyết định, bẫy thường gặp và nguồn tham khảo thật. Không chấm điểm. Đồng thời refactor toàn bộ code, tăng cỡ chữ, bỏ các thành phần giả/hard-code.

## Quyết định đã chốt

- Cấu trúc case: worked example + quiz xen kẽ (có nút "Xem luôn đáp án").
- Viết lại đủ 12 case mô phỏng; bỏ case placeholder "Chờ biên tập".
- Lộ trình mở tự do; tiến độ thật theo cấp độ và kỹ năng; gợi ý bài tiếp theo.
- Bài giải theo framework chuẩn ngành + 2–3 nguồn công khai thật mỗi case (đã kiểm tra link). Dữ liệu luôn là mock.
- Nội dung là TypeScript có kiểu (discriminated union `Block`), kiểm tra bằng Vitest.

## Kiến trúc

```
DESIGN.md                 quy ước thiết kế (tokens, typography, component)
src/styles/               tokens.css (light + dark), base.css, *.module.css
src/app/                  router (hash), AppShell, Sidebar, Topbar, CommandPalette
src/pages/                Home, Library, CaseReader, Path, Profile, NotFound
src/components/ui/        Button, Card, Pill, ProgressRing, EmptyState, Toast
src/components/blocks/    Text, Kpis, DataTable, Chart (Recharts), Formula, Quiz, Callout, List, Actions, Pitfalls
src/content/              types.ts, taxonomy.ts, cases/<id>.ts, index.ts
src/state/                ProgressProvider (useProgress), settings
src/lib/                  storage.ts (versioned, migrate v1), recommend.ts, markdown.tsx (inline md tối giản)
```

Routes: `#/`, `#/library`, `#/case/:id`, `#/path`, `#/profile`.

## Luồng một case

Bối cảnh (KPI) → Khung tư duy → 2–4 bước phân tích (dữ liệu + giải thích, 1–2 quiz) → Giải pháp tối ưu (hành động, owner, metric, ngưỡng) → Bẫy thường gặp → Ghi nhớ + Tìm hiểu thêm. Layout: cột đọc ~720px, mục lục sticky bên phải (mobile: thanh tiến độ trên cùng). Nút "Đánh dấu đã học xong" và nút lưu.

## Mô hình tiến độ (localStorage `djl:v2`)

`completed{caseId: iso}`, `quiz{quizId: optionId}`, `saved[]`, `history[{caseId, openedAt}]` (≤20), `lastSection{caseId: sectionId}`, `settings{name, theme}`. Migrate từ khóa v1 (`djl-done`, `djl-recent`, `djl-saved`).

- Thành thạo kỹ năng = case hoàn thành có skill / tổng case có skill.
- Tiến độ cấp = case hoàn thành của cấp / tổng case của cấp.
- Gợi ý: case đang đọc dở → case chưa học ở cấp thấp nhất chưa xong → case luyện kỹ năng yếu nhất.

## UI/UX

Cỡ chữ body 16px (tối thiểu 13px cho meta), tương phản ≥ 4.5:1 cho chữ, design tokens dùng chung, dark mode theo hệ thống + chọn tay. Bỏ: ngày/tên hard-code, ⌘K giả, nút "Tự lưu bản nháp", vòng tiến độ rỗng, checklist tĩnh. ⌘K mở command palette tìm case thật.

## Kiểm thử

Vitest: tính hợp lệ nội dung (id duy nhất, quiz đúng 1 đáp án, skill thuộc taxonomy, ≥2 references https, cột bảng khớp dữ liệu, series biểu đồ tồn tại), logic tiến độ/gợi ý, storage migrate.
