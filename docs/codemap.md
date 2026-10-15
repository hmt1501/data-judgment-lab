# CODEMAP — đọc nhanh trước khi làm việc

Bản đồ code cho agent/dev. Cập nhật file này khi thêm/di chuyển file quan trọng.

## Nguyên tắc

1. **Ranh giới thư mục.** `shared/` không import từ `src/` hay `worker/`, không dùng React/DOM. `worker/` chỉ import `shared/` (không import `src/`). Kiểu/logic dùng ở cả hai phía → đặt trong `shared/`, không copy.
2. **Nội dung là dữ liệu có kiểu.** Case = `src/content/cases/<id>.ts`, bài Đọc nhanh = `src/content/explainers/<slug>.ts`; tên file trùng id/slug, mỗi file export đúng 1 object. Mọi ràng buộc nằm ở `validateCase` / `validateExplainer` — thêm luật mới thì thêm vào đó, đừng kiểm tra rải rác trong UI.
3. **Trung thực.** Số liệu case luôn là mô phỏng (có nhãn); nguồn tham khảo là link `https://` thật. Bài AI chỉ được dùng nguồn từ bước tra cứu (AI chọn theo số thứ tự, không tự viết URL).
4. **UI theo token.** Không hard-code màu/cỡ chữ/khoảng cách — dùng biến trong `src/styles/tokens.css` (xem [design.md](design.md)). Không có nút giả. Chữ ≥ 13px.
5. **Tiếng Việt.** Text giao diện, comment và thông báo lỗi viết tiếng Việt. Tìm kiếm luôn không dấu qua `foldVi` (`shared/text.ts`).
6. **Tiến độ học** chỉ đổi qua reducer thuần trong `src/state/progress.ts`. Đổi cấu trúc `Progress` → tăng `version` và viết migrate trong `src/state/storage.ts` (không làm mất dữ liệu người dùng).
7. **Worker:** logic HTTP trong `app.ts` nhận `Deps` (store, chat, retrieve, now) để test không cần mạng. Đổi schema D1 → thêm file migration mới, không sửa migration cũ.
8. **Bí mật** (`GROQ_API_KEY`, `.dev.vars`, `.secrets*`) không bao giờ commit.
9. Thêm/đổi thư mục hay file quan trọng → cập nhật `docs/codemap.md` trong cùng commit.

## Tổng quan 30 giây

```
                  ┌──────────── shared/ (taxonomy, schema Explainer, foldVi) ────────────┐
                  ▼                                  ▼                                  ▼
src/ (React SPA, hash router) ──fetch──▶ worker/ (Cloudflare Worker + D1) ──▶ Groq + Bing News RSS + Wikipedia
  nội dung: src/content/** (bundle sẵn)        bài AI lưu trong D1
  tiến độ: localStorage (djl:v2), đồng bộ giữa thiết bị qua mã (djl:sync ↔ D1 sync_profiles)
scripts/draft-case.ts ── dùng shared/ + worker/src/{groq,retrieve} để soạn nháp case → drafts/
```

- Hai loại nội dung: **Case** (bài giải mẫu dài, theo cấp độ/kỹ năng) và **Explainer / Đọc nhanh** (bài ngắn kinh tế; soạn sẵn hoặc AI tạo).
- Tính năng AI chỉ bật khi build có `VITE_API_BASE` (`src/lib/api.ts` → `aiEnabled`): nút "Hỏi AI" tạo bài Đọc nhanh, và bong bóng **Hỏi nhanh AI** ở góc dưới phải (hỏi định nghĩa/công thức khi đang đọc).
- **Không có key Groq chung**: người dùng nhập key Groq miễn phí của họ (`GroqKeyCard`, lưu localStorage `djl:groq`, tách khỏi `Progress`); key gửi trong body mỗi request AI, Worker không lưu. Đang đồng bộ thì key được mã hóa trên trình duyệt rồi lưu theo mã đồng bộ.

## Thư mục & file

### `shared/` — dùng chung, không React/DOM
| File | Nội dung |
|---|---|
| `taxonomy.ts` | `levels`, `skills`, `domains` (case), `topics` (explainer) + `*ById`, `is*Id` |
| `explainer.ts` | kiểu `Explainer`, `ExplainerSummary`, `QuizBlock`; `EXPLAINER_LIMITS`; `validateExplainer` (dùng cho cả JSON AI không tin cậy) |
| `text.ts` | `foldVi` (bỏ dấu, chữ thường), `slugify` |
| `chat.ts` | kiểu `ChatInput`/`ChatTurn`, `CHAT_LIMITS`, `parseChatInput` (kiểm tra body chat ở cả hai phía), `isGroqKey` |
| `sync.ts` | mã đồng bộ base32 Crockford 16 ký tự: `encodeSyncCode`, `normalizeSyncCode`, `formatSyncCode`; `SYNC_LIMITS`; `SyncPayload` (kèm `secret` = key Groq đã mã hóa) |

### `src/` — frontend
| Đường dẫn | Nội dung |
|---|---|
| `main.tsx` | mount: `ProgressProvider` → `ToastProvider` → router |
| `app/router.tsx` | route: `/`, `/library`, `/case/:id`, `/explain`, `/explain/:slug`, `/path`, `/profile`; `handle.title` → tiêu đề trang |
| `app/AppShell.tsx` | sidebar/drawer, topbar, phím Ctrl/⌘K; gắn `ChatBubble` khi `aiEnabled` |
| `app/CommandPalette.tsx` | tìm case + explainer, xen kẽ 8 kết quả |
| `pages/*.tsx` | mỗi trang 1 file + `*.module.css` cùng tên |
| `components/ui/primitives.tsx` | `Button`, `ButtonLink`, `Card`, `Pill`, `ProgressBar/Ring`, `PageHeader`, `SectionTitle`, `EmptyState`, `cx` |
| `components/ui/Toast.tsx` | `useToast()` |
| `components/blocks/Block.tsx` | render union `Block` của case (switch theo `kind`); `Chart.tsx` lazy-load Recharts; `Quiz.tsx` dùng chung cho case & explainer |
| `components/explainer/` | `ExplainerView` (trang bài), `ExplainerCard` (thẻ) |
| `components/CaseCard.tsx` | thẻ case trong thư viện |
| `components/chat/ChatBubble.tsx` | bong bóng Hỏi nhanh AI: hội thoại trong bộ nhớ (mất khi tải lại), tự gửi kèm ngữ cảnh trang + đoạn đang bôi đen trong `#main` |
| `components/sync/SyncCard.tsx` | thẻ "Học tiếp trên thiết bị khác" ở trang Hồ sơ: bật đồng bộ, nhập mã, sao chép, tắt |
| `components/sync/GroqKeyCard.tsx` | nhập/xóa key Groq (trang Hồ sơ; dạng `compact` hiện ở trang Hỏi AI và bong bóng chat khi chưa có key) |
| `components/chat/pageContext.ts` | dựng mô tả trang đang đọc (case + phần hiện tại / bài Đọc nhanh) gửi kèm câu hỏi |
| `content/types.ts` | kiểu `CaseStudy`, `Section`, `Block` (discriminated union); `CaseMeta` = phần nhẹ (không có sections/takeaways/references) + `outline`, `quizzes`, `pitfalls` |
| `content/meta.ts` | `caseMetaOf(case)` → `CaseMeta` (thuần; plugin Vite dùng) |
| `content/validate.ts` | `validateCase`, `quizIds` |
| `content/index.ts` | `cases: CaseMeta[]` (glob `cases/*.ts?meta`, nạp sẵn, sắp theo cấp → tên), `caseById`, `loadCase(id)` (nạp thân bài khi mở case) |
| `content/explainerLibrary.ts` | `curatedExplainers: ExplainerSummary[]` (nạp sẵn), `curatedBySlug`, `loadCurated(slug)` (nạp thân bài khi mở) |
| `content/cases/`, `content/explainers/` | dữ liệu; tự xuất hiện trong app khi thêm file |
| `state/progress.ts` | kiểu `Progress` (v2) + reducer thuần (`markOpened`, `setCompleted`, `answerQuiz`, `sanitize`…), `mergeProgress` / `adoptRemote` cho đồng bộ |
| `state/ProgressProvider.tsx` | context `useProgress()` → `{ progress, actions, sync }`; lưu khi đổi; áp theme |
| `state/useSync.ts` | vòng đồng bộ: chạy khi mở app, quay lại tab, 2s sau thay đổi cuối, rời trang (keepalive); phân biệt thay đổi của người dùng (`dirty`) với bản từ server; giữ key Groq (`groqKey`, `setGroqKey`) và đồng bộ nó (đổi trên máy → đẩy, không thì nhận từ server) |
| `state/sync.ts` | `syncStep` thuần: kéo/đẩy một lượt, xử lý 409 bằng gộp (hoặc ghi đè khi `replace`); `encryptSecret`/`decryptSecret` (AES-GCM, khóa = SHA-256 của mã đồng bộ) |
| `state/storage.ts` | đọc/ghi localStorage `djl:v2` (kiểm tra kiểu từng trường, bỏ mục hỏng; `parseProgress` cho dữ liệu server), migrate từ v1 (`djl-done`…); `djl:sync` = `{ code, rev, dirty, replace? }`; `djl:groq` = `{ key, dirty }` |
| `state/insights.ts` | số liệu suy ra: tiến độ cấp độ/kỹ năng, `recommendNext`, `trapOfTheDay`, `quizStats`, `localDayIndex` |
| `lib/api.ts` | client Worker: `listAiExplainers`, `getAiExplainer`, `askAi`/`askChat` (kèm `groqKey` trong body), `createSync`/`pullSync`/`pushSync`/`putSyncSecret`, `ApiError` (có `body`), `describeError`; `apiEnabled` |
| `lib/search.ts` | `searchCases`, `searchExplainers` (không dấu, cache theo object) |
| `lib/markdown.tsx` | markdown tối giản an toàn: `**đậm**`, `*nghiêng*`, `` `code` ``, `[link](https://…)`, đoạn cách dòng trống |
| `lib/useToday.ts` | ngày hiện tại, tự đổi lúc 0h |
| `lib/useSearchParamState.ts` | ô nhập đồng bộ query param có debounce (sửa lỗi bộ gõ Telex); `useSetSearchParam` |
| `styles/tokens.css`, `base.css` | token thiết kế sáng/tối; xem `docs/design.md` |

### `worker/` — API Hỏi AI (xem `worker/README.md`)
| File | Nội dung |
|---|---|
| `src/index.ts` | entry: dựng `Deps` thật từ `env` (`chatFor(key)` = client Groq theo key người dùng; Worker không có key chung) |
| `src/app.ts` | `handle(request, deps)`: CORS, route, kiểm tra `groqKey` trong body, trần bài AI mỗi IP (`reserve`: giữ chỗ trước khi gọi AI, hoàn lượt khi Groq từ chối), map lỗi → HTTP |
| `/api/sync` (trong `app.ts`) | POST tạo mã · GET/PUT với `authorization: Bearer <mã>`; PUT cần `baseRev`, lệch → 409 kèm bản mới nhất; D1 chỉ lưu `sha256` của mã. `PUT /api/sync/secret` lưu key Groq đã mã hóa |
| `src/chat.ts` | Hỏi nhanh: system prompt trợ giảng + `chatReply` (model `CHAT_MODEL`, không JSON schema) |
| `src/retrieve.ts` | tra cứu có giới hạn: Bing News RSS (dự phòng Google News) + Wikipedia; ≤ 5.000 ký tự |
| `src/pipeline.ts` | `compose` (1 lần gọi Groq, JSON schema strict) → `toExplainer` (lọc nguồn theo index, validate) |
| `src/prompts.ts` | system prompt + JSON schema + kiểu `Composed` |
| `src/groq.ts` | client Groq tối giản, `GroqError` |
| `src/store.ts` | interface `Store` + `D1Store` (explainers, FTS5, research_cache, usage) |
| `migrations/` | schema D1 (chỉ thêm file mới). Bảng `usage`: key `ip:…` cho tạo bài (`global` chỉ để thống kê), `sync:…` tạo mã đồng bộ. `sync_profiles`: tiến độ theo mã + `secret` (key Groq đã mã hóa) |
| `test/` | `app.test.ts` (store giả), `d1.test.ts` (D1 cục bộ), `retrieve.test.ts` |

### Khác
- `.github/workflows/deploy.yml`: test FE + worker → build → Pages; deploy Worker khi có secret Cloudflare (migrate D1 trước, deploy sau).
- `docs/`: `codemap.md` (file này), `design.md` (design system). Root chỉ giữ `CLAUDE.md`, `README.md` + config.

## Luồng chính

- **Mở case:** `CaseReader` → `actions.open` (history) → IntersectionObserver cập nhật `lastSection` → nút "Đánh dấu đã học" → `recommendNext` gợi ý bài sau.
- **Hỏi AI:** `Explain.tsx` (chưa có key → `GroqKeyCard`) → `POST /api/explain` `{ question, groqKey }` → cache theo câu hỏi chuẩn hóa → trần mỗi IP → `retrieve` (cache 6h) → `compose` (key người dùng) → `toExplainer` → D1 → điều hướng `/explain/:slug`.
- **Hỏi nhanh:** `ChatBubble` → `POST /api/chat` `{ messages, context, quote, groqKey }` → `parseChatInput` → `chatReply` (key người dùng, không quota) → `{ reply }` (render bằng `Markdown`, giữ xuống dòng).
- **Đồng bộ:** thao tác → `dirty` → 2s sau `syncStep` đẩy `PUT {progress, baseRev}`; 409 → `mergeProgress` → đẩy lại. Không có thay đổi → `GET`; server mới hơn → `adoptRemote` (thay local, giữ theme). "Xóa tiến độ" khi đang đồng bộ → `replace` (ghi đè, không gộp). Key Groq đi riêng: đổi trên máy → `PUT /api/sync/secret` (đã mã hóa); không thì lấy `secret` từ `GET` và giải mã.
- **Khởi động:** `loadProgress` → `sanitize` bỏ id case/quiz không còn tồn tại (quiz id kết thúc `-q` của explainer luôn được giữ).

## Muốn sửa X thì vào đâu

| Việc | File |
|---|---|
| Thêm case | `src/content/cases/<id>.ts` (mẫu: `revenue-checkout.ts`) → `npm test`. `order` (tùy chọn) = thứ tự học trong cấp, duy nhất trong cấp; Path/Thư viện/gợi ý bài tiếp theo xếp theo cấp → `order` → tên |
| Thêm bài Đọc nhanh | `src/content/explainers/<slug>.ts`, `id = slug`, `quiz.id = <slug>-q`, `origin: 'curated'`. Bài "mới nhất" xoay theo tuần: thêm `order` = số kế tiếp (1..N liền mạch, test kiểm tra). Bài nền tảng: slug nằm trong `CORE_EXPLAINER_SLUGS` (`shared/explainer.ts`), không có `order` |
| Thêm kỹ năng/lĩnh vực/chủ đề | `shared/taxonomy.ts` (topic mới ảnh hưởng cả prompt + schema AI) |
| Thêm loại block | `src/content/types.ts` → `Block.tsx` → `validate.ts` (nếu có ràng buộc) → `docs/design.md` |
| Đổi luật bài AI | `shared/explainer.ts` (`EXPLAINER_LIMITS`, validate) + `worker/src/prompts.ts` cho khớp |
| Đổi trần bài AI mỗi IP/model/CORS | `worker/wrangler.jsonc` → `vars`, rồi `cd worker && npm run types` (lệnh này đọc cả `.dev.vars` — bỏ biến chỉ có ở máy khỏi `worker-configuration.d.ts`) |
| Đổi CSP (nguồn được phép tải/gọi) | plugin `csp` trong `vite.config.ts` (chỉ áp dụng khi build) |
| Thêm trường mới vào `Progress` | `progress.ts` (kiểu + `emptyProgress` + **`mergeProgress`**) → `storage.ts` (`fromStored`) → test đồng bộ |
| Đổi cách AI trả lời trong bong bóng chat | `worker/src/chat.ts` (`CHAT_SYSTEM`); gợi ý câu hỏi: `suggestionsFor` trong `ChatBubble.tsx` |

## Bẫy đã biết / nợ kỹ thuật

- Trang Đọc nhanh = 15 bài nền tảng + 3 bài "mới nhất" + bài AI. Kho tuần hiện có 200 bài (`order` 1–200) → hết sau 67 tuần, tức từ thứ Hai 31/1/2028 trang giữ 3 bài cuối và hiện thông báo; muốn kéo dài thì thêm bài với `order` 201+. `weeklyWindow` (`explainerLibrary.ts`) đổi cả 3 bài mỗi thứ Hai theo giờ máy từ `WEEKLY_START` (19/10/2026); hết kho thì giữ 3 bài cuối và Explain hiện thông báo đã xem hết. Đổi `WEEKLY_START` hoặc `order` là dịch lịch của mọi người. Bài tuần cũ vẫn mở được qua link (`curatedBySlug` giữ toàn bộ) nhưng không còn trong danh sách/tìm kiếm. Quiz bài tuần xử lý như bài AI (không vào `knownQuizzes`); `recentReads` không cắt bài nền tảng.

- Nội dung được tách: plugin `contentMeta` trong `vite.config.ts` biến `cases/<id>.ts?meta` / `explainers/<slug>.ts?meta` thành phần nhẹ (`caseMetaOf`, `explainerSummaryOf`) nạp sẵn; thân bài là chunk riêng (import động) nạp khi mở (`loadCase`, `loadCurated`). `index-*.js` ~880 KB với 108 case và 215 bài Đọc nhanh (từng 1.337 KB; ngưỡng cảnh báo 1.000 KB; mỗi case thêm ~2,3 KB, mỗi bài ~1 KB chưa nén — còn dư chỗ cho ~50 case trước khi chạm ngưỡng). Cần metadata mới cho thư viện/thống kê → thêm vào `caseMetaOf`, không đọc `sections` ở nơi khác. Plugin dùng `node:module.stripTypeScriptTypes` (Node ≥ 22.13, in cảnh báo experimental khi build) nên file nội dung chỉ được có `import type`.
- Trần bài AI mỗi IP tính theo **lượt gọi AI** (kể cả khi AI trả nội dung sai chuẩn), chỉ hoàn lượt khi Groq từ chối request. Bộ đếm ngày theo UTC (reset 7h sáng giờ VN).
- `explainersRead` chỉ giữ `EXPLAINERS_READ_LIMIT` (50) bài đọc gần nhất để tiến độ không vượt 64 KB; quiz `<slug>-q` của bài AI bị cắt cũng bị bỏ (`sanitize`).
- Key Groq: ai có mã đồng bộ thì giải mã được key. CSP (`connect-src` chỉ cho API) chặn script lạ gửi key ra ngoài; thêm nguồn ngoài mới (font, ảnh, API) phải sửa plugin `csp` trong `vite.config.ts`.
- Đồng bộ: hai máy cùng sửa khi offline sẽ được gộp kiểu "hợp" — thao tác xóa (bỏ lưu, bỏ hoàn thành) ở một máy có thể bị máy kia khôi phục. Mất mã = mất đường đồng bộ (không có tài khoản để khôi phục). Chưa dọn hồ sơ lâu không dùng.
- Bong bóng chat chỉ bắt đoạn bôi đen bên trong `#main` (nội dung trang), không bắt trong sidebar hay chính khung chat.
- Bong bóng chat dùng `body:has([data-chat-fab])` để chừa chỗ cho toast và cuối trang — cần trình duyệt hỗ trợ `:has()`.
- RSS Bing/Google News chỉ dành cho dùng cá nhân, phi thương mại.
