# Data Judgment Lab

Ứng dụng học phân tích dữ liệu qua **bài giải mẫu** (worked example) tiếng Việt. Mỗi case có dữ liệu mô phỏng, lời giải theo best practice, câu trắc nghiệm ở các điểm quyết định, bẫy thường gặp và nguồn tham khảo thật. Tiến độ lưu trong trình duyệt.

## Chạy trên máy

```sh
npm ci
npm run dev        # mở trong mạng LAN
npm test           # kiểm tra nội dung case + logic
npm run build
```

## Cấu trúc

```
DESIGN.md              quy ước thiết kế (tokens, component)
src/styles/            tokens.css (sáng/tối), base.css
src/app/               router (hash), AppShell, CommandPalette (Ctrl/⌘ K)
src/pages/             Home, Library, CaseReader, Path, Profile
src/components/        ui/ (Button, Card, Pill, Progress…), blocks/ (bảng, biểu đồ, quiz…)
src/content/           types.ts, taxonomy.ts, cases/<id>.ts, validate.ts
src/state/ src/lib/    tiến độ, lưu trữ, gợi ý bài tiếp theo, tìm kiếm
```

## Thêm một case

1. Tạo `src/content/cases/<id>.ts`, export đúng một `CaseStudy` (xem `revenue-checkout.ts` làm mẫu).
2. Dùng id kỹ năng/lĩnh vực/cấp độ trong `taxonomy.ts`.
3. Chạy `npm test`: bộ kiểm tra sẽ báo lỗi nếu quiz không có đúng 1 đáp án, bảng thiếu cột, thiếu nguồn tham khảo…

Case tự xuất hiện trong thư viện, lộ trình và tìm kiếm.

## GitHub Pages

Workflow `.github/workflows/deploy.yml` chạy test, build và deploy thư mục `dist` mỗi khi push lên `main`. Vào **Settings → Pages** và chọn **GitHub Actions** làm nguồn deploy nếu chưa bật.
