import type { CaseStudy } from '../types'

/*
 * Số liệu mock (sàn TMĐT, 6 team cùng chạy A/B trên funnel mua hàng), đã kiểm tra khớp nhau:
 *   Cỡ mẫu (tính bằng node, 2 phía, α = 0,05, power 80%): CR nền 3,80%
 *     MDE tương đối 3% → 447.914 / nhóm · 5% (3,80% → 3,99%) → 162.773 / nhóm (tổng 325.546) · 10% → 41.644 / nhóm
 *     Funnel checkout 40.000 session đủ điều kiện/ngày; test chiếm 50% → 20.000/ngày → 325.546 / 20.000 = 16,3 ngày → làm tròn 21 ngày (3 chu kỳ tuần)
 *   Đa so sánh: 4 metric phụ, không hiệu chỉnh → 1 − 0,95^4 = 18,5% khả năng có ≥ 1 "significant" giả; Bonferroni: 0,05 / 4 = 0,0125
 *   SRM: kế hoạch 50/50, quan sát 51.200 / 48.800 (tổng 100.000) → χ² = 2.400² × 2 / 50.000 = 57,6 → p ≈ 3 × 10⁻¹⁴
 *        quan sát 50.100 / 49.900 → χ² = 0,4 → p ≈ 0,53 (bình thường)
 *   Thử nghiệm chồng nhau (mỗi ô 80.000 session): CR 3,80% (3.040) · chỉ A 3,99% (3.192) · chỉ B 4,18% (3.344) · cả hai 4,05% (3.240)
 *     Kỳ vọng nếu cộng dồn: 3,80 + 0,19 + 0,38 = 4,37% · thực tế 4,05% → tương tác −0,32 điểm %, SE 0,14 → z ≈ −2,3, p ≈ 0,02
 *   Thư viện quý 3: 36 thử nghiệm = 9 ship + 15 không ship + 12 không kết luận (25% / 41,7% / 33,3%)
 */
export const experimentReviewCadence: CaseStudy = {
  id: 'experiment-review-cadence',
  title: 'Sáu team cùng chạy A/B: dựng nhịp review thử nghiệm để quyết định nhất quán',
  domain: 'ecommerce',
  level: 'lead',
  minutes: 14,
  skills: ['experiment', 'tradeoff', 'data-quality'],
  question:
    'Sáu team đang tự chạy A/B trên cùng funnel mua hàng: mỗi team tự chọn metric, tự quyết lúc dừng, có test dùng chung traffic mà không ai biết. Cần thiết lập nhịp review thế nào để các quyết định ship/không ship nhất quán và đáng tin?',
  summary:
    'Chuẩn hóa vòng đời thử nghiệm bằng cổng vào (đăng ký trước, metric chính + guardrail, cỡ mẫu) và cổng ra (SRM, đa so sánh, quy tắc quyết định), thêm cơ chế điều phối test chạy chồng và thư viện kết quả để học tập tích lũy.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là Experimentation Lead của một sàn thương mại điện tử. Quý này sáu team (Search, Giỏ hàng, Thanh toán, Khuyến mãi, Retention, Growth) cùng chạy A/B. Sau một buổi họp, Head of Product đặt vấn đề: *"Tháng trước hai team đều báo test thắng rồi ship, tổng cộng kỳ vọng +6% chuyển đổi, nhưng số thật gần như không nhích. Mình có tin được kết quả thử nghiệm không, và quy trình chung là gì?"*',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Thử nghiệm kết thúc quý 3', value: '36', tone: 'neutral' },
            { label: 'Ship', value: '9', delta: '25,0%', tone: 'positive' },
            { label: 'Không ship', value: '15', delta: '41,7%', tone: 'neutral' },
            { label: 'Không kết luận', value: '12', delta: '33,3%', tone: 'warning', note: 'Dừng sớm hoặc thiếu mẫu' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Vấn đề nằm ở quy trình, không ở từng team',
          md: 'Mỗi team đọc kết quả "hợp lý" theo cách riêng: người xem hằng ngày và dừng khi thấy *significant*, người chọn metric sau khi test xong, người không biết test của mình đang chia traffic với test khác. **Cùng một dữ liệu, tùy người đọc ra quyết định khác nhau.** Việc của Lead là biến việc đọc kết quả thành một quy trình có cổng vào, cổng ra và nhịp họp cố định.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: cổng vào, cổng ra, nhịp review',
      blocks: [
        {
          kind: 'text',
          md: 'Một thử nghiệm chỉ được *tin* khi các quyết định quan trọng được khóa **trước** khi nhìn dữ liệu. Chia vòng đời thành hai cổng:',
        },
        {
          kind: 'table',
          title: 'Hai cổng kiểm soát cho mọi thử nghiệm',
          columns: [
            { key: 'gate', label: 'Cổng' },
            { key: 'when', label: 'Thời điểm' },
            { key: 'check', label: 'Phải trả lời được' },
            { key: 'owner', label: 'Người duyệt' },
          ],
          rows: [
            {
              gate: 'Cổng vào (pre-registration)',
              when: 'Trước khi chia traffic',
              check: 'Giả thuyết, 1 metric chính, danh sách guardrail, MDE, cỡ mẫu và số ngày, quy tắc dừng, quyết định sẽ làm cho từng kết quả',
              owner: 'Experimentation Lead + PM + analyst của team',
            },
            {
              gate: 'Cổng ra (readout)',
              when: 'Sau khi đủ mẫu kế hoạch',
              check: 'SRM sạch, dữ liệu đủ, kết quả metric chính, guardrail, hiệu chỉnh đa so sánh, quyết định ship / không / tiếp tục',
              owner: 'Review hằng tuần với đại diện các team',
            },
          ],
          caption: 'Nguyên tắc: mọi lựa chọn có thể "chỉnh theo kết quả" (metric, cửa sổ, nhóm xem, lúc dừng) phải được khóa ở cổng vào.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Đăng ký trước**: bản tóm tắt một trang, lưu cố định, không sửa sau khi test bắt đầu (chỉ thêm ghi chú).',
            '**Tính cỡ mẫu theo MDE**: MDE là mức cải thiện *nhỏ nhất đáng làm*, không phải mức hy vọng.',
            '**Chạy đủ kế hoạch**: không dừng theo số hiển thị; chu kỳ tròn theo tuần.',
            '**Readout có checklist**: kiểm tra chất lượng dữ liệu (SRM) trước khi nhìn hiệu ứng.',
            '**Lưu vào thư viện**: kể cả test thất bại hoặc không kết luận.',
          ],
        },
        {
          kind: 'quiz',
          id: 'experiment-review-cadence-q1',
          question: 'Team Giỏ hàng xin chạy test mà "metric sẽ chọn sau khi xem dữ liệu cho linh hoạt". Phản hồi hợp lý nhất của Lead?',
          options: [
            {
              id: 'a',
              text: 'Đồng ý vì team hiểu sản phẩm rõ nhất; analyst sẽ chọn metric phản ánh đúng nhất khi có dữ liệu.',
              explain: 'Chọn metric sau khi xem dữ liệu là cách phổ biến nhất để tạo "chiến thắng" giả: chạy nhiều metric, báo cáo cái nào đẹp. Kiến thức sản phẩm nên đi vào giả thuyết và metric *trước* test.',
            },
            {
              id: 'b',
              text: 'Yêu cầu đăng ký trước một metric chính, các guardrail, MDE và quy tắc dừng; metric khác chỉ để khám phá và ghi rõ là khám phá.',
              correct: true,
              explain: 'Đúng. Khóa metric chính và quy tắc dừng trước giúp mức sai sót (α) đúng như đã công bố, đồng thời vẫn cho phép xem thêm metric phụ ở vai trò tạo giả thuyết cho test sau.',
            },
            {
              id: 'c',
              text: 'Cấm team chạy test cho đến khi có công cụ tự động chọn metric.',
              explain: 'Chặn hoàn toàn là phản ứng thái quá và làm team vòng qua quy trình. Quy trình nên nhẹ (một trang đăng ký) chứ không chặn.',
            },
          ],
        },
      ],
    },
    {
      id: 'entry-gate',
      kind: 'analysis',
      title: 'Bước 1 — Cổng vào: metric, guardrail và cỡ mẫu',
      blocks: [
        {
          kind: 'text',
          md: 'Ví dụ test thanh toán một trang trên funnel checkout, CR nền **3,80%**, α = 0,05 hai phía, power 80%. Cỡ mẫu thay đổi rất mạnh theo MDE:',
        },
        {
          kind: 'table',
          title: 'Cỡ mẫu theo MDE (CR nền 3,80%)',
          columns: [
            { key: 'mde', label: 'MDE tương đối' },
            { key: 'target', label: 'CR cần phát hiện', align: 'right' },
            { key: 'n', label: 'Mẫu / nhóm', align: 'right' },
            { key: 'days', label: 'Thời gian (50% traffic = 20.000 session/ngày)', align: 'right' },
          ],
          rows: [
            { mde: '10%', target: '3,80% → 4,18%', n: '41.644', days: '4,2 ngày → chạy 7 ngày' },
            { mde: '5%', target: '3,80% → 3,99%', n: '162.773', days: '16,3 ngày → chạy 21 ngày' },
            { mde: '3%', target: '3,80% → 3,91%', n: '447.914', days: '44,8 ngày → thường không đáng chạy' },
          ],
          highlight: [{ row: 1, tone: 'positive' }],
          caption: 'Giảm MDE một nửa thì mẫu tăng khoảng 4 lần. Chạy tròn số tuần để mỗi ngày trong tuần có mặt như nhau. Số liệu mô phỏng.',
        },
        {
          kind: 'table',
          title: 'Tờ đăng ký thử nghiệm (ví dụ thanh toán một trang)',
          columns: [
            { key: 'field', label: 'Trường' },
            { key: 'value', label: 'Nội dung đã khóa' },
          ],
          rows: [
            { field: 'Metric chính', value: 'Tỷ lệ chuyển đổi checkout (đơn đặt thành công ÷ session đủ điều kiện), theo định nghĩa chứng nhận' },
            { field: 'Guardrail', value: 'Tỷ lệ thanh toán thất bại, tỷ lệ hủy/hoàn, thời gian tải trang, tỷ lệ lỗi JS' },
            { field: 'MDE và mẫu', value: '5% tương đối · 162.773 / nhóm · 21 ngày' },
            { field: 'Quy tắc dừng', value: 'Chỉ đọc kết luận sau ngày 21; xem hằng ngày chỉ để bắt sự cố (SRM, lỗi)' },
            { field: 'Quyết định định trước', value: 'Ship nếu CR tăng có ý nghĩa và guardrail không xấu đi vượt ngưỡng; không ship nếu guardrail vi phạm; tiếp tục chỉ khi pre-register phần mở rộng' },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Chống peeking và đa so sánh',
          md: 'Nhìn kết quả nhiều lần và dừng khi thấy *significant* làm mức dương tính giả tăng vượt xa 5% đã công bố; điều này được Evan Miller phân tích chi tiết (xem nguồn). Tương tự, báo cáo 4 metric phụ mà không hiệu chỉnh cho **1 − 0,95⁴ = 18,5%** khả năng có ít nhất một kết quả "significant" chỉ do may rủi. Giải pháp: **một metric chính** để quyết định; metric phụ hiệu chỉnh (Bonferroni: 0,05 ÷ 4 = 0,0125) hoặc gán nhãn khám phá; nếu thật sự cần xem sớm, dùng phương pháp tuần tự được thiết kế sẵn thay vì tự nhìn.',
        },
      ],
    },
    {
      id: 'exit-gate',
      kind: 'analysis',
      title: 'Bước 2 — Cổng ra: SRM trước, hiệu ứng sau, rồi quyết định',
      blocks: [
        {
          kind: 'text',
          md: '**Sample Ratio Mismatch (SRM)** là khi tỷ lệ người dùng thực tế giữa các nhóm khác tỷ lệ thiết kế. Đây là triệu chứng của lỗi dữ liệu hoặc triển khai, không phải kết quả sản phẩm. Quy tắc cứng: *SRM fail thì không đọc hiệu ứng*.',
        },
        {
          kind: 'table',
          title: 'Kiểm tra SRM cho hai thử nghiệm (kế hoạch 50/50)',
          columns: [
            { key: 'test', label: 'Thử nghiệm' },
            { key: 'a', label: 'Control', align: 'right' },
            { key: 'b', label: 'Treatment', align: 'right' },
            { key: 'chi', label: 'χ² (1 bậc tự do)', align: 'right' },
            { key: 'p', label: 'p', align: 'right' },
            { key: 'verdict', label: 'Kết luận' },
          ],
          rows: [
            { test: 'Thanh toán một trang', a: '50.100', b: '49.900', chi: '0,4', p: '≈ 0,53', verdict: 'Bình thường, đọc tiếp' },
            { test: 'Banner khuyến mãi', a: '51.200', b: '48.800', chi: '57,6', p: '≈ 3 × 10⁻¹⁴', verdict: 'SRM: dừng, tìm nguyên nhân' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
          caption: 'Lệch chỉ 2,4% nghe nhỏ nhưng với 100.000 người dùng thì gần như không thể là ngẫu nhiên. Ngưỡng báo động thường đặt thấp (p < 0,001) để tránh báo giả. Số liệu mô phỏng.',
        },
        {
          kind: 'text',
          md: 'Nguyên nhân SRM hay gặp: redirect làm rơi người dùng ở một nhóm, bot hoặc phiên bản app cũ không gán nhóm, event của nhóm treatment tải chậm hơn nên bị cắt, loại bỏ người dùng theo điều kiện chỉ xảy ra ở một nhóm. Paper của Microsoft ExP (nguồn bên dưới) phân loại các nguyên nhân này.',
        },
        {
          kind: 'table',
          title: 'Quy tắc quyết định',
          columns: [
            { key: 'situation', label: 'Tình huống' },
            { key: 'decision', label: 'Quyết định' },
            { key: 'why', label: 'Lý do' },
          ],
          rows: [
            { situation: 'SRM fail', decision: 'Không đọc kết quả; sửa lỗi và chạy lại', why: 'Dữ liệu không đại diện cho cách chia nhóm' },
            { situation: 'Metric chính tốt lên có ý nghĩa, guardrail ổn', decision: 'Ship', why: 'Đúng điều đã đăng ký' },
            { situation: 'Metric chính tốt lên, guardrail xấu đi vượt ngưỡng', decision: 'Không ship; mở vòng thiết kế lại', why: 'Guardrail tồn tại để chặn cái giá phải trả' },
            { situation: 'Không khác biệt, khoảng tin cậy hẹp quanh 0', decision: 'Không ship, ghi "không có hiệu ứng ≥ MDE"', why: 'Đây là kết quả hợp lệ, có giá trị học tập' },
            { situation: 'Không khác biệt, khoảng tin cậy rộng (thiếu mẫu)', decision: 'Ghi "không kết luận"; chỉ tiếp tục nếu đã đăng ký phần mở rộng', why: 'Tránh kéo dài đến khi "thắng"' },
          ],
        },
        {
          kind: 'quiz',
          id: 'experiment-review-cadence-q2',
          question: 'Test banner khuyến mãi báo CR treatment +4,1%, nhưng SRM fail (51.200 vs 48.800). Quyết định nào đúng?',
          options: [
            {
              id: 'a',
              text: 'Ship vì hiệu ứng lớn hơn nhiều so với MDE; SRM chỉ là chi tiết kỹ thuật.',
              explain: 'SRM là dấu hiệu dữ liệu không đại diện cho cách chia ngẫu nhiên, nên hiệu ứng đo được có thể sinh ra từ chính nguyên nhân gây SRM (ví dụ nhóm treatment mất những người dùng ít mua). Hiệu ứng "đẹp" càng đáng ngờ.',
            },
            {
              id: 'b',
              text: 'Không đọc hiệu ứng; điều tra nguyên nhân SRM, sửa rồi chạy lại.',
              correct: true,
              explain: 'Đúng. Chưa thể kết luận gì về sản phẩm. Trước hết tìm nguyên nhân (redirect, bot, phiên bản app, lọc dữ liệu) và chạy lại với bản đã sửa.',
            },
            {
              id: 'c',
              text: 'Loại ngẫu nhiên 2.400 người từ nhóm control cho đủ 50/50 rồi tính lại.',
              explain: 'Cân bằng số lượng bằng tay không sửa được nguyên nhân: những người bị mất ở nhóm treatment không phải ngẫu nhiên, nên hai nhóm vẫn không còn so sánh được.',
            },
          ],
        },
      ],
    },
    {
      id: 'overlap-library',
      kind: 'analysis',
      title: 'Bước 3 — Test chạy chồng và thư viện kết quả',
      blocks: [
        {
          kind: 'text',
          md: 'Hai team cùng chạy trên trang checkout: **A** (bố cục thanh toán mới) và **B** (banner miễn phí vận chuyển). Nếu hai test dùng traffic độc lập thì mỗi người dùng nằm trong một trong bốn ô. Câu hỏi: hiệu ứng của A và B có cộng dồn được không?',
        },
        {
          kind: 'chart',
          title: 'CR theo ô A × B (mỗi ô 80.000 session)',
          type: 'bar',
          xKey: 'cell',
          unit: '%',
          series: [{ key: 'cr', label: 'Tỷ lệ chuyển đổi' }],
          data: [
            { cell: 'Không A, không B', cr: 3.8 },
            { cell: 'Chỉ A', cr: 3.99 },
            { cell: 'Chỉ B', cr: 4.18 },
            { cell: 'Cả A và B', cr: 4.05 },
          ],
          caption: 'Nếu cộng dồn, kỳ vọng 3,80 + 0,19 + 0,38 = 4,37%. Thực tế 4,05%: tương tác −0,32 điểm % (SE 0,14; z ≈ −2,3; p ≈ 0,02). Hai thay đổi cùng tác động vào quyết định hoàn tất đơn nên một phần hiệu ứng bị trùng. Số liệu mô phỏng.',
        },
        {
          kind: 'text',
          md: 'Đây cũng là lời giải cho nghịch lý ở đầu bài: hai team cùng báo "thắng" riêng lẻ, nhưng khi ship cả hai, tổng hiệu ứng thấp hơn tổng cộng dồn. **Quy tắc điều phối** gồm: (1) đăng ký *bề mặt* mà test chạm vào, (2) test cùng bề mặt dùng chung layer có phân tách hoặc phải tuần tự, (3) test khác bề mặt có thể chạy chồng nhưng readout kiểm tra tương tác, (4) khi tương tác đáng kể, quyết định cho tổ hợp chứ không cho từng test.',
        },
        {
          kind: 'table',
          title: 'Thư viện kết quả thử nghiệm: các trường bắt buộc',
          columns: [
            { key: 'field', label: 'Trường' },
            { key: 'purpose', label: 'Dùng để làm gì' },
          ],
          rows: [
            { field: 'Giả thuyết + bề mặt + cơ chế dự đoán', purpose: 'Tìm lại "đã thử ý này chưa" thay vì thử lại' },
            { field: 'Metric chính, hiệu ứng, khoảng tin cậy', purpose: 'Hiệu chỉnh kỳ vọng cho đề xuất tương tự' },
            { field: 'Kết quả: ship / không ship / không kết luận', purpose: 'Tính tỷ lệ thắng thật (ở đây 25%), dự báo roadmap' },
            { field: 'Guardrail và SRM', purpose: 'Nhận biết loại lỗi lặp lại' },
            { field: 'Bài học 1–2 câu + link dashboard', purpose: 'Để team khác học mà không cần họp' },
          ],
          caption: 'Tỷ lệ "thắng" 25% là bình thường; mục tiêu của thư viện là học từ cả 75% còn lại.',
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp tối ưu',
      blocks: [
        {
          kind: 'text',
          md: '**Trả lời Head of Product:** kết quả thử nghiệm chỉ đáng tin khi được khóa trước và kiểm tra sau. Triển khai quy trình hai cổng, review hằng tuần 45 phút (readout + khởi động test mới + điều phối bề mặt) và thư viện trung tâm. Hai test "cùng thắng" nhưng tổng không đạt kỳ vọng là bằng chứng cho chồng lấn chưa kiểm soát.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Ban hành tờ đăng ký một trang (giả thuyết, metric chính, guardrail, MDE, mẫu, quy tắc dừng, quyết định định trước); không đăng ký thì không cấp traffic',
              owner: 'Experimentation Lead',
              metric: 'Tỷ lệ thử nghiệm có đăng ký trước khi chạy',
              threshold: '100% từ sprint sau',
            },
            {
              action: 'Tự động hóa SRM và kiểm tra dữ liệu trong nền tảng; hiển thị cảnh báo đỏ và khóa kết quả khi p < 0,001',
              owner: 'Experimentation Platform + Data Engineering',
              metric: 'Số readout có SRM fail nhưng vẫn đưa ra quyết định ship',
              threshold: '0',
            },
            {
              action: 'Lập sổ đăng ký bề mặt; test cùng bề mặt dùng chung layer hoặc chạy tuần tự, test khác bề mặt phải kiểm tra tương tác trong readout',
              owner: 'Experimentation Lead + PM các team',
              metric: 'Số lần ship hai test cùng bề mặt mà chưa kiểm tra tương tác',
              threshold: '0 mỗi quý',
            },
            {
              action: 'Review hằng tuần có checklist cổng ra; chỉ metric chính quyết định, metric phụ hiệu chỉnh hoặc gán nhãn khám phá',
              owner: 'Review board (đại diện 6 team)',
              metric: 'Tỷ lệ thử nghiệm kết thúc có quyết định theo quy tắc đã đăng ký',
              threshold: '≥ 90%',
            },
            {
              action: 'Lưu mọi thử nghiệm vào thư viện, kể cả không kết luận; đối chiếu mức tăng đã báo với tăng thực sau ship (holdback 5% trong 4 tuần cho ship quan trọng)',
              owner: 'Analytics + từng PM',
              metric: 'Chênh lệch hiệu ứng báo cáo và hiệu ứng thực sau ship',
              threshold: 'Trong khoảng tin cậy của test',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Sai sót thống kê phần lớn không đến từ công thức mà từ **sự linh hoạt không được ghi lại** (metric, lúc dừng, nhóm xem). Hai cổng khóa sự linh hoạt đó với chi phí thấp. SRM và tương tác bắt các lỗi dữ liệu và thiết kế mà người đọc kết quả rất khó nhìn thấy. Trade-off chấp nhận: thêm khoảng một ngày chuẩn bị cho mỗi test và test có MDE nhỏ có thể bị từ chối vì quá tốn mẫu, đổi lại là mọi quyết định ship có cùng một chuẩn bằng chứng.',
        },
      ],
    },
    {
      id: 'pitfalls',
      kind: 'pitfalls',
      title: 'Bẫy thường gặp',
      blocks: [
        {
          kind: 'pitfalls',
          items: [
            {
              title: 'Quy trình nặng làm team né tránh',
              why: 'Yêu cầu tài liệu dài hoặc nhiều cấp duyệt sẽ khiến team chạy "test không chính thức" ngoài hệ thống, đúng nơi rủi ro lớn nhất.',
              instead: 'Giữ đăng ký một trang, duyệt trong 1 ngày làm việc; mức duyệt tăng theo rủi ro (bề mặt doanh thu, nhiều team).',
            },
            {
              title: 'Chỉ lưu những test thắng',
              why: 'Thư viện chỉ có thành công làm méo kỳ vọng ("test nào cũng thắng") và để nhiều team lặp lại cùng một ý tưởng đã thất bại.',
              instead: 'Lưu mọi test với kết quả và bài học; công bố tỷ lệ thắng định kỳ để đặt kỳ vọng thực tế.',
            },
            {
              title: 'Coi "không significant" là "không có hiệu ứng"',
              why: 'Test thiếu mẫu không phân biệt được "không hiệu ứng" với "hiệu ứng nhỏ hơn khả năng phát hiện", dẫn đến bỏ nhầm ý tưởng tốt.',
              instead: 'Báo cáo khoảng tin cậy và so với MDE; ghi rõ "không kết luận" khi khoảng quá rộng.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Khóa trước metric chính, guardrail, MDE, cỡ mẫu và quy tắc dừng; mọi lựa chọn linh hoạt sau khi nhìn dữ liệu đều làm tăng dương tính giả.',
    'Cổng ra bắt đầu bằng SRM: SRM fail thì không đọc hiệu ứng; sau đó mới đến metric chính, guardrail, hiệu chỉnh đa so sánh và quy tắc ship/không/tiếp tục.',
    'Test chạy chồng có thể tương tác nên cần sổ đăng ký bề mặt và kiểm tra tương tác; thư viện kết quả (kể cả thất bại) biến từng test thành tri thức tích lũy.',
  ],
  references: [
    {
      title: 'Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing',
      publisher: 'Kohavi, Tang, Xu — Cambridge University Press (experimentguide.com)',
      url: 'https://experimentguide.com/',
      note: 'Trang chính thức của cuốn sách về thử nghiệm trực tuyến có đối chứng (Microsoft, Google, LinkedIn), nền tảng cho các khái niệm guardrail, SRM và nhịp review trong bài. Trang chủ giới thiệu sách; chi tiết nằm trong nội dung sách.',
    },
    {
      title: 'Diagnosing Sample Ratio Mismatch in Online Controlled Experiments: A Taxonomy and Rules of Thumb for Practitioners',
      publisher: 'Microsoft Research (KDD 2019)',
      url: 'https://www.microsoft.com/en-us/research/?p=651990',
      note: 'Định nghĩa SRM và phân loại nguyên nhân từ kinh nghiệm chạy thử nghiệm ở bốn công ty, kèm hướng dẫn phát hiện và phòng ngừa.',
    },
    {
      title: 'How Not To Run an A/B Test',
      publisher: 'Evan Miller',
      url: 'https://www.evanmiller.org/how-not-to-run-an-ab-test.html',
      note: 'Giải thích vì sao xem kết quả nhiều lần và dừng khi significant làm tăng dương tính giả, và khuyến nghị chọn cỡ mẫu trước khi chạy.',
    },
  ],
}
