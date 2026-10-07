# CODEMAP — đọc nhanh trước khi làm việc

Bản đồ code cho agent/dev. Cập nhật file này khi thêm/di chuyển file quan trọng.

## Tổng quan 30 giây

```
                  ┌──────────── shared/ (taxonomy, schema Explainer, foldVi) ────────────┐
                  ▼                                  ▼                                  ▼
src/ (React SPA, hash router) ──fetch──▶ worker/ (Cloudflare Worker + D1) ──▶ Groq + Bing News RSS + Wikipedia
  nội dung: src/content/** (bundle sẵn)        bài AI lưu trong D1
  tiến độ: localStorage (djl:v2)
scripts/draft-case.ts ── dùng shared/ + worker/src/{groq,retrieve} để soạn nháp case → drafts/
```

- Hai loại nội dung: **Case** (bài giải mẫu dài, theo cấp độ/kỹ năng) và **Explainer / Đọc nhanh** (bài ngắn kinh tế; soạn sẵn hoặc AI tạo).
- Tính năng AI chỉ bật khi build có `VITE_API_BASE` (`src/lib/api.ts` → `aiEnabled`).

## Thư mục & file

### `shared/` — dùng chung, không React/DOM
| File | Nội dung |
|---|---|
| `taxonomy.ts` | `levels`, `skills`, `domains` (case), `topics` (explainer) + `*ById`, `is*Id` |
| `explainer.ts` | kiểu `Explainer`, `ExplainerSummary`, `QuizBlock`; `EXPLAINER_LIMITS`; `validateExplainer` (dùng cho cả JSON AI không tin cậy) |
| `text.ts` | `foldVi` (bỏ dấu, chữ thường), `slugify` |

### `src/` — frontend
| Đường dẫn | Nội dung |
|---|---|
| `main.tsx` | mount: `ProgressProvider` → `ToastProvider` → router |
| `app/router.tsx` | route: `/`, `/library`, `/case/:id`, `/explain`, `/explain/:slug`, `/path`, `/profile`; `handle.title` → tiêu đề trang |
| `app/AppShell.tsx` | sidebar/drawer, topbar, phím Ctrl/⌘K |
| `app/CommandPalette.tsx` | tìm case + explainer, xen kẽ 8 kết quả |
| `pages/*.tsx` | mỗi trang 1 file + `*.module.css` cùng tên |
| `components/ui/primitives.tsx` | `Button`, `ButtonLink`, `Card`, `Pill`, `ProgressBar/Ring`, `PageHeader`, `SectionTitle`, `EmptyState`, `cx` |
| `components/ui/Toast.tsx` | `useToast()` |
| `components/blocks/Block.tsx` | render union `Block` của case (switch theo `kind`); `Chart.tsx` lazy-load Recharts; `Quiz.tsx` dùng chung cho case & explainer |
| `components/explainer/` | `ExplainerView` (trang bài), `ExplainerCard` (thẻ) |
| `components/CaseCard.tsx` | thẻ case trong thư viện |
| `content/types.ts` | kiểu `CaseStudy`, `Section`, `Block` (discriminated union) |
| `content/validate.ts` | `validateCase`, `quizIds` |
| `content/index.ts` | `cases` (glob `cases/*.ts`, sắp theo cấp → tên), `caseById` |
| `content/explainerLibrary.ts` | `curatedExplainers` (glob `explainers/*.ts`), `curatedBySlug` |
| `content/cases/`, `content/explainers/` | dữ liệu; tự xuất hiện trong app khi thêm file |
| `state/progress.ts` | kiểu `Progress` (v2) + reducer thuần (`markOpened`, `setCompleted`, `answerQuiz`, `sanitize`…) |
| `state/ProgressProvider.tsx` | context `useProgress()` → `{ progress, actions }`; lưu khi đổi; áp theme |
| `state/storage.ts` | đọc/ghi localStorage `djl:v2`, migrate từ v1 (`djl-done`…) |
| `state/insights.ts` | số liệu suy ra: tiến độ cấp độ/kỹ năng, `recommendNext`, `trapOfTheDay`, `quizStats` |
| `lib/api.ts` | client Worker: `listAiExplainers`, `getAiExplainer`, `askAi`, `ApiError`, `describeError` |
| `lib/search.ts` | `searchCases`, `searchExplainers` (không dấu, cache theo object) |
| `lib/markdown.tsx` | markdown tối giản an toàn: `**đậm**`, `*nghiêng*`, `` `code` ``, `[link](https://…)`, đoạn cách dòng trống |
| `lib/useSearchParamState.ts` | ô nhập đồng bộ query param có debounce (sửa lỗi bộ gõ Telex); `useSetSearchParam` |
| `styles/tokens.css`, `base.css` | token thiết kế sáng/tối; xem `DESIGN.md` |

### `worker/` — API Hỏi AI (xem `worker/README.md`)
| File | Nội dung |
|---|---|
| `src/index.ts` | entry: dựng `Deps` thật từ `env` |
| `src/app.ts` | `handle(request, deps)`: CORS, route, quota ngày (global + IP băm), map lỗi → HTTP |
| `src/retrieve.ts` | tra cứu có giới hạn: Bing News RSS (dự phòng Google News) + Wikipedia; ≤ 5.000 ký tự |
| `src/pipeline.ts` | `compose` (1 lần gọi Groq, JSON schema strict) → `toExplainer` (lọc nguồn theo index, validate) |
| `src/prompts.ts` | system prompt + JSON schema + kiểu `Composed` |
| `src/groq.ts` | client Groq tối giản, `GroqError` |
| `src/store.ts` | interface `Store` + `D1Store` (explainers, FTS5, research_cache, usage) |
| `migrations/` | schema D1 (chỉ thêm file mới) |
| `test/` | `app.test.ts` (store giả), `d1.test.ts` (D1 cục bộ), `retrieve.test.ts` |

### Khác
- `.github/workflows/deploy.yml`: test FE + worker → build → Pages; deploy Worker khi có secret Cloudflare (migrate D1 trước, deploy sau).
- `docs/superpowers/specs/`: tài liệu thiết kế lịch sử (v2, 2026-10-05) — kiến trúc trong đó đã cũ, tin file này hơn.

## Luồng chính

- **Mở case:** `CaseReader` → `actions.open` (history) → IntersectionObserver cập nhật `lastSection` → nút "Đánh dấu đã học" → `recommendNext` gợi ý bài sau.
- **Hỏi AI:** `Explain.tsx` → `POST /api/explain` → cache theo câu hỏi chuẩn hóa → kiểm quota → `retrieve` (cache 6h) → `compose` → `toExplainer` → D1 → điều hướng `/explain/:slug`.
- **Khởi động:** `loadProgress` → `sanitize` bỏ id case/quiz không còn tồn tại (quiz id kết thúc `-q` của explainer luôn được giữ).

## Muốn sửa X thì vào đâu

| Việc | File |
|---|---|
| Thêm case | `src/content/cases/<id>.ts` (mẫu: `revenue-checkout.ts`) → `npm test` |
| Thêm bài Đọc nhanh | `src/content/explainers/<slug>.ts`, `id = slug`, `quiz.id = <slug>-q`, `origin: 'curated'` |
| Thêm kỹ năng/lĩnh vực/chủ đề | `shared/taxonomy.ts` (topic mới ảnh hưởng cả prompt + schema AI) |
| Thêm loại block | `src/content/types.ts` → `Block.tsx` → `validate.ts` (nếu có ràng buộc) → `DESIGN.md` |
| Đổi luật bài AI | `shared/explainer.ts` (`EXPLAINER_LIMITS`, validate) + `worker/src/prompts.ts` cho khớp |
| Đổi giới hạn quota/model/CORS | `worker/wrangler.jsonc` → `vars` |

## Bẫy đã biết / nợ kỹ thuật

- Nội dung bundle eager → `index-*.js` ~950 KB. Khi nội dung tăng gấp đôi: tách thân bài theo route (ghi chú trong `vite.config.ts`).
- Quota Worker là check-then-increment, không atomic; chỉ tính lượt **thành công** (lỗi Groq/validate vẫn tốn token nhưng không bị đếm).
- `Home.tsx` tính `today` ở cấp module → tab mở qua nửa đêm không đổi "bẫy/đọc nhanh hôm nay" cho tới khi reload.
- `D1Store.insert` dùng `new Date()` thay vì `deps.now()` (khó test thời gian tạo).
- `parseNewsRss` (khi item thiếu tên nguồn) và `toExplainer` gọi `new URL(url)` không bọc try: một link RSS dạng `https://` nhưng sai cú pháp có thể làm cả request lỗi 500.
- `loadProgress` không kiểm tra kiểu từng trường của bản v2 đã lưu (localStorage bị sửa tay có thể làm crash).
- RSS Bing/Google News chỉ dành cho dùng cá nhân, phi thương mại.
