import type { CaseStudy } from '../types'

/*
 * Số liệu mock của "Công ty A" (triệu đ), tháng 3, đã kiểm tra khớp nhau:
 *   Lợi nhuận tháng 1 = 82, tháng 2 = 78 (trung bình 80) · lợi nhuận báo cáo tháng 3 = 20
 *   Quảng cáo 60 trả ngày 5/3 cho dịch vụ chạy tháng 3–5: ghi hết 60 vào tháng 3, đúng 20/tháng → chi phí thừa 40
 *   Bảo hiểm 36 trả ngày 1/3 cho 12 tháng: ghi hết 36 vào tháng 3, đúng 3/tháng → chi phí thừa 33
 *   Dồn tích chưa ghi: điện tháng 3 hóa đơn sang tháng 4 = 6 · lãi vay tháng 3 trả quý sau = 7 → chi phí thiếu 13
 *   Lợi nhuận đúng tháng 3 = 20 + 40 + 33 − 13 = 80
 *   Cuối tháng 3: chi phí trả trước còn lại = quảng cáo 40 (2 tháng) + bảo hiểm 33 (11 tháng) = 73 · chi phí dồn tích phải trả = 6 + 7 = 13
 *   Đã ghi 96 (60 + 36) so với đúng 36 (20 + 3 + 6 + 7): chênh 60 = 40 + 33 − 13
 */
export const prepaidAccruedExpenseTiming: CaseStudy = {
  id: 'prepaid-accrued-expense-timing',
  title: 'Lợi nhuận tháng này thấp bất thường: lỗi thời điểm ghi chi phí',
  domain: 'accounting',
  level: 'fresher',
  minutes: 9,
  skills: ['revenue-recognition', 'financial-statements', 'data-quality'],
  question: 'Lợi nhuận tháng 3 chỉ 20 triệu đ trong khi trung bình 80. Doanh thu không đổi, vậy chi phí nào ghi sai thời điểm, và lợi nhuận đúng là bao nhiêu?',
  summary: 'Phân biệt chi phí trả trước (trả tiền rồi, phân bổ dần) với chi phí dồn tích (đã phát sinh, chưa trả), và sửa lợi nhuận về đúng kỳ.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst của **Công ty A**. Báo cáo tháng 3 có lợi nhuận 20 triệu đ, so với 82 và 78 của hai tháng trước. Doanh thu và giá vốn ổn định. Kế toán trưởng nói: "Tháng này có vài khoản trả tiền lớn." Bạn kiểm tra sổ chi phí để xem tháng 3 *thực sự* kém hay chỉ do cách ghi.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Công ty A và mọi con số là **giả định**. Nguyên tắc kế toán dồn tích và phân bổ chi phí trả trước là thật; chính sách phân bổ cụ thể của một doanh nghiệp cần theo chuẩn mực và quy định áp dụng.',
        },
        {
          kind: 'kpis',
          items: [{ label: 'Lợi nhuận tháng 3 (báo cáo)', value: '20 triệu đ', delta: 'so với trung bình 80', tone: 'negative' }],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: chi phí thuộc về kỳ nào',
      blocks: [
        {
          kind: 'text',
          md: 'Theo kế toán dồn tích, chi phí được ghi vào kỳ **hưởng lợi**, không phải kỳ chi tiền. Hai trường hợp ngược nhau: **chi phí trả trước** (đã trả tiền, dịch vụ dùng ở nhiều kỳ) là *tài sản* rồi phân bổ dần; **chi phí dồn tích** (đã dùng, chưa trả tiền) là *khoản phải trả* và ghi nhận ngay.',
        },
        {
          kind: 'formula',
          expression: 'Chi phí kỳ này = Số tiền trả trước ÷ số kỳ hưởng lợi (phân bổ) + Chi phí đã phát sinh nhưng chưa trả (dồn tích)',
          note: 'Trả trước làm chi phí kỳ trả tiền *nhỏ hơn* số tiền chi; dồn tích làm chi phí kỳ này *lớn hơn* số tiền chi.',
        },
        {
          kind: 'quiz',
          id: 'prepaid-accrued-expense-timing-q1',
          question: 'Ngày 1/3 công ty trả 36 triệu bảo hiểm cho 12 tháng. Chi phí bảo hiểm của tháng 3 là bao nhiêu?',
          options: [
            { id: 'a', text: '36 triệu, vì đã chi tiền trong tháng 3.', explain: 'Chi tiền chưa phải chi phí. 36 triệu bảo hiểm 12 tháng nên mỗi tháng chỉ chịu một phần.' },
            { id: 'b', text: '3 triệu; 33 triệu còn lại là tài sản (chi phí trả trước) phân bổ cho 11 tháng sau.', correct: true, explain: 'Đúng. 36 ÷ 12 = 3 triệu mỗi tháng. Tiền ra tháng 3 nhưng chi phí chia đều các tháng được bảo hiểm.' },
            { id: 'c', text: '0 triệu, vì bảo hiểm tính từ năm sau.', explain: 'Bảo hiểm có hiệu lực từ 1/3 nên tháng 3 đã hưởng lợi, chi phí tháng 3 là 3 triệu.' },
          ],
        },
      ],
    },
    {
      id: 'bridge',
      kind: 'analysis',
      title: 'Bước 1 — Cầu nối từ lợi nhuận báo cáo sang lợi nhuận đúng',
      blocks: [
        {
          kind: 'table',
          title: 'Rà từng khoản chi bất thường tháng 3 (triệu đ)',
          columns: [
            { key: 'item', label: 'Khoản' },
            { key: 'booked', label: 'Đã ghi tháng 3', align: 'right' },
            { key: 'right', label: 'Đúng tháng 3', align: 'right' },
            { key: 'adj', label: 'Điều chỉnh LN', align: 'right' },
          ],
          rows: [
            { item: 'Quảng cáo 60 trả 5/3, chạy tháng 3–5', booked: '60', right: '20', adj: '+40' },
            { item: 'Bảo hiểm 36 trả 1/3, 12 tháng', booked: '36', right: '3', adj: '+33' },
            { item: 'Tiền điện tháng 3, hóa đơn sang tháng 4', booked: '0', right: '6', adj: '−6' },
            { item: 'Lãi vay tháng 3, trả quý sau', booked: '0', right: '7', adj: '−7' },
            { item: 'Tổng', booked: '96', right: '36', adj: '+60' },
          ],
          highlight: [
            { row: 0, tone: 'warning' },
            { row: 1, tone: 'warning' },
            { row: 4, tone: 'positive' },
          ],
          caption: 'Lợi nhuận đúng = 20 + 40 + 33 − 6 − 7 = 80 triệu đ, bằng mức trung bình hai tháng trước.',
        },
        {
          kind: 'chart',
          title: 'Lợi nhuận theo tháng (triệu đ)',
          type: 'bar',
          xKey: 'month',
          unit: ' triệu đ',
          series: [{ key: 'profit', label: 'Lợi nhuận' }],
          data: [
            { month: 'Tháng 1', profit: 82 },
            { month: 'Tháng 2', profit: 78 },
            { month: 'T3 báo cáo', profit: 20 },
            { month: 'T3 đã sửa', profit: 80 },
          ],
          caption: 'Tháng 3 không kém: chênh 60 triệu (ghi 96 so với đúng 36) chỉ là lỗi thời điểm ghi chi phí.',
        },
        {
          kind: 'quiz',
          id: 'prepaid-accrued-expense-timing-q2',
          question: 'Tiền điện tháng 3 (6 triệu) có hóa đơn đến tháng 4 nên chưa ghi. Hạch toán đúng là gì?',
          options: [
            { id: 'a', text: 'Ghi chi phí 6 triệu vào tháng 3 và ghi khoản phải trả; tháng 4 trả tiền thì giảm khoản phải trả.', correct: true, explain: 'Đúng. Điện đã dùng ở tháng 3 nên chi phí thuộc tháng 3 dù chưa có hóa đơn hay chưa trả tiền (chi phí dồn tích).' },
            { id: 'b', text: 'Ghi vào tháng 4 khi nhận hóa đơn.', explain: 'Cách này làm lợi nhuận tháng 3 cao ảo và tháng 4 thấp ảo.' },
            { id: 'c', text: 'Không ghi, vì chưa tốn tiền.', explain: 'Chi phí được ghi khi phát sinh, không đợi chi tiền.' },
          ],
        },
      ],
    },
    {
      id: 'balance',
      kind: 'analysis',
      title: 'Bước 2 — Dấu vết trên bảng cân đối',
      blocks: [
        {
          kind: 'table',
          title: 'Số dư liên quan cuối tháng 3 (triệu đ)',
          columns: [
            { key: 'item', label: 'Khoản mục' },
            { key: 'calc', label: 'Cách tính' },
            { key: 'val', label: 'Số dư', align: 'right' },
            { key: 'type', label: 'Loại' },
          ],
          rows: [
            { item: 'Quảng cáo trả trước', calc: '60 − 20 (còn tháng 4, 5)', val: '40', type: 'Tài sản' },
            { item: 'Bảo hiểm trả trước', calc: '36 − 3 (còn 11 tháng)', val: '33', type: 'Tài sản' },
            { item: 'Chi phí dồn tích phải trả', calc: '6 (điện) + 7 (lãi vay)', val: '13', type: 'Nợ phải trả' },
          ],
          caption: 'Tài sản trả trước 40 + 33 = 73; khoản phải trả dồn tích 13. Hai nhóm này là chỗ "để dành" chi phí đúng kỳ, nếu không có thì lợi nhuận tháng nhảy lên xuống theo ngày trả tiền.',
        },
        {
          kind: 'quiz',
          id: 'prepaid-accrued-expense-timing-q3',
          question: 'Phát hiện lợi nhuận tháng 3 báo cáo thấp do ghi sai thời điểm. Hành động nào hợp lý nhất?',
          options: [
            { id: 'a', text: 'Kết luận kinh doanh tháng 3 yếu và cắt chi phí.', explain: 'Lợi nhuận đúng 80 triệu bằng mức bình thường; cắt chi phí do kết luận sai là sai chỗ.' },
            { id: 'b', text: 'Lập bảng phân bổ chi phí trả trước và danh sách chi phí dồn tích cuối tháng, rồi sửa số báo cáo trước khi phân tích.', correct: true, explain: 'Đúng. Sửa dữ liệu về đúng kỳ rồi mới phân tích; đồng thời lập quy trình để tháng sau không lặp lại.' },
            { id: 'c', text: 'Giữ nguyên số báo cáo, tháng sau sẽ tự cân bằng.', explain: 'Báo cáo tháng này vẫn sai và dẫn tới quyết định sai; tháng sau còn bị lệch ngược.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: ghi đúng kỳ và rà cuối tháng',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận:** tháng 3 không kém. Lợi nhuận đúng 80 triệu đ; số 20 triệu do quảng cáo và bảo hiểm trả trước bị ghi hết một lần (+73 triệu chi phí thừa) trừ phần dồn tích chưa ghi (−13). Cần sửa bút toán và thiết lập quy trình rà cuối tháng.',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Lập bảng phân bổ chi phí trả trước (số tiền, ngày bắt đầu, số tháng, số dư còn lại)', owner: 'Kế toán tổng hợp', metric: 'Số dư chi phí trả trước khớp bảng phân bổ', threshold: 'Chênh lệch = 0' },
            { action: 'Rà chi phí đã dùng nhưng chưa có hóa đơn (điện, nước, lãi vay, lương) vào ngày khóa sổ', owner: 'Kế toán tổng hợp', metric: 'Số khoản dồn tích rà đủ danh sách cố định', threshold: '100% khoản trong danh sách' },
            { action: 'So lợi nhuận tháng với trung bình 3 tháng; giải thích mọi chênh lệch lớn hơn 30%', owner: 'Finance business partner', metric: 'Chênh lệch lợi nhuận so với trung bình 3 tháng', threshold: '≤ 30% hoặc có giải trình' },
          ],
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
            { title: 'Ghi chi phí theo ngày trả tiền', why: 'Làm lợi nhuận tháng có khoản trả lớn thấp giả, tháng sau cao giả.', instead: 'Phân bổ chi phí trả trước theo số kỳ hưởng lợi.' },
            { title: 'Quên chi phí đã phát sinh nhưng chưa có hóa đơn', why: 'Lợi nhuận bị cao ảo, bị đảo lại ở kỳ sau.', instead: 'Rà danh sách dồn tích cố định mỗi cuối tháng.' },
            { title: 'Giải thích biến động lợi nhuận bằng kinh doanh khi chưa kiểm tra sổ', why: 'Có thể chỉ là lỗi thời điểm ghi nhận.', instead: 'Kiểm tra bút toán lớn bất thường trước khi kết luận.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Chi phí thuộc kỳ hưởng lợi, không thuộc kỳ chi tiền.',
    'Chi phí trả trước là tài sản phân bổ dần; chi phí dồn tích là khoản phải trả ghi nhận ngay.',
    'Khi lợi nhuận tháng lệch bất thường, kiểm tra thời điểm ghi chi phí trước khi kết luận về kinh doanh.',
  ],
  references: [
    { title: 'Prepaid expense', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Prepaid_expense', note: 'Chi phí trả trước: là tài sản và được phân bổ dần vào chi phí.' },
    { title: 'Accrued expense', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Accrued_expense', note: 'Chi phí dồn tích: đã phát sinh nhưng chưa trả tiền.' },
    { title: 'Matching principle', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Matching_principle', note: 'Nguyên tắc phù hợp: ghi chi phí cùng kỳ với doanh thu/lợi ích mà nó tạo ra.' },
  ],
}
