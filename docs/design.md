# Design — Data Judgment Lab

Hợp đồng thiết kế của app. Mọi component đọc giá trị từ `src/styles/tokens.css`; không hard-code màu, cỡ chữ hay khoảng cách trong component.

## Nguyên tắc

1. **Đọc là chính.** Đây là app học qua bài giải mẫu: chữ thân 16px, dòng 1.65, cột đọc tối đa ~720px.
2. **Số liệu phải dễ so sánh.** Số dùng `font-variant-numeric: tabular-nums`, căn phải trong bảng; tăng/giảm luôn có cả màu *và* dấu (+/−) để không phụ thuộc màu.
3. **Trung thực về dữ liệu.** Mọi case hiển thị nhãn "Dữ liệu mô phỏng"; nguồn tham khảo là link thật.
4. **Không có nút giả.** Thành phần nào hiển thị như có thể bấm thì phải làm việc thật.

## Tokens

| Nhóm | Token | Ghi chú |
|---|---|---|
| Màu nền | `--bg`, `--surface`, `--surface-2`, `--border` | `--surface-2` cho nền phụ (bảng header, callout) |
| Chữ | `--text`, `--text-muted`, `--text-subtle` | `--text-subtle` chỉ cho meta ≥ 13px, vẫn ≥ 4.5:1 |
| Thương hiệu | `--brand`, `--brand-strong`, `--brand-soft`, `--on-brand` | xanh rêu |
| Ngữ nghĩa | `--positive`, `--negative`, `--warning`, `--info` + `-soft` | dùng cho delta, callout, highlight |
| Biểu đồ | `--chart-1` … `--chart-4` | series theo thứ tự |
| Cỡ chữ | `--fs-xs` 13 · `--fs-sm` 14 · `--fs-base` 16 · `--fs-md` 18 · `--fs-lg` 22 · `--fs-xl` 28 · `--fs-2xl` 34 | không dùng cỡ < 13px |
| Khoảng cách | `--sp-1` 4 · `--sp-2` 8 · `--sp-3` 12 · `--sp-4` 16 · `--sp-5` 24 · `--sp-6` 32 · `--sp-7` 48 | |
| Bo góc | `--radius-sm` 6 · `--radius` 10 · `--radius-lg` 16 | |

Font: **Manrope** cho tiêu đề, **DM Sans** cho thân.

Theme: `html[data-theme="light" | "dark"]`; khi không đặt, theo `prefers-color-scheme`.

## Component

- `Button` — `variant`: `primary | secondary | ghost`; `size`: `md | sm`. Cao tối thiểu 40px (md) để dễ chạm.
- `Card` — nền `--surface`, viền `--border`, bo `--radius-lg`, padding `--sp-5`.
- `Pill` — nhãn nhỏ: level, domain, trạng thái.
- `ProgressRing` / `ProgressBar` — luôn kèm số dạng chữ bên cạnh.
- Blocks nội dung case (`src/components/blocks`): `text`, `kpis`, `table`, `chart`, `formula`, `quiz`, `callout`, `list`, `actions`, `pitfalls`.

- Explainer (`src/components/explainer`): `ExplainerView` (tóm tắt, ý chính, chuỗi nhân quả dạng sơ đồ dọc, thẻ tác động có mũi tên ↑↓↔ + chữ, bảng chỉ số, góc nhìn khác, thuật ngữ, quiz, nguồn, disclaimer) và `ExplainerCard`. Bài AI luôn có nhãn "AI tạo · cần kiểm tra nguồn".

- `ChatBubble` (`src/components/chat`): nút tròn 56px góc dưới phải (`--brand`), khung chat 400px (mobile: full chiều ngang trừ gutter 16px). Bôi đen chữ trong bài → hiện nút "Hỏi AI về đoạn đã chọn". Chỉ hiện khi bản build bật AI. Luôn có dòng nhắc "AI có thể sai".

- `SyncCard` (`src/components/sync`): mã đồng bộ hiển thị monospace, chia 4 nhóm; luôn kèm cảnh báo giữ kín mã; tắt đồng bộ cần xác nhận.

## Bố cục

- ≥ 1024px: sidebar 248px + nội dung. Trang case: cột đọc + mục lục sticky 240px.
- < 1024px: sidebar thành drawer; mục lục case thành thanh tiến độ trên cùng.
- Gutter mobile 16px, không cuộn ngang trang (bảng tự cuộn trong khung của nó).
