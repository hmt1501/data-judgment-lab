import type { CaseStudy } from '../types'

/*
 * Công ty và số liệu hoàn toàn giả định. Đơn vị: triệu đồng (giá = triệu đồng/đơn vị).
 * Ngân sách 5.000 ; thực tế 5.600 → vượt 600 = 12,0%.
 *   Vận hành : NS 1.000 đv × 2,0 = 2.000 ; TT 1.100 × 2,1 = 2.310 → +310 ; lượng (1.100−1.000)×2,0 = 200 ; giá (2,1−2,0)×1.100 = 110
 *   Marketing: NS 3.000 × 0,5 = 1.500 ; TT 3.000 × 0,55 = 1.650 → +150 ; lượng 0 ; giá (0,55−0,5)×3.000 = 150
 *   CNTT     : NS 500 × 2,0 = 1.000 ; TT 670 × 2,0 = 1.340 → +340 ; lượng 170×2,0 = 340 ; giá 0
 *   Hành chính: NS 250 × 2,0 = 500 ; TT 200 × 1,5 = 300 → −200 ; lượng (200−250)×2,0 = −100 ; giá (1,5−2,0)×200 = −100
 *   Tổng chênh 310+150+340−200 = 600 ✓ ; tổng lượng 200+0+340−100 = 440 ; tổng giá 110+150+0−100 = 160 ; 440+160 = 600 ✓
 *   Ngân sách linh hoạt Vận hành: đơn hàng thực tế +10% → lượng được phép 1.100 → chi phí linh hoạt 1.100×2,0 = 2.200 → chỉ vượt 110 (giá).
 */
export const budgetVsActualPriceVolumeVariance: CaseStudy = {
  id: 'budget-vs-actual-price-volume-variance',
  title: 'Chi phí thực tế vượt ngân sách 12%: do giá hay do lượng, ở phòng ban nào?',
  domain: 'accounting',
  level: 'junior',
  minutes: 12,
  skills: ['metric-decomposition', 'unit-economics', 'segmentation'],
  question:
    'Tổng chi phí thực tế của quý vượt ngân sách 12%. Chênh lệch này đến từ phòng ban nào, từ giá hay từ lượng, và phần nào là hợp lý vì hoạt động tăng?',
  summary:
    'Phân rã chênh lệch ngân sách thành tác động giá và lượng theo từng phòng ban, rồi dùng ngân sách linh hoạt để tách phần vượt do hoạt động tăng khỏi phần vượt do chi tiêu kém hiệu quả.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Giám đốc tài chính hỏi: *"Chi phí vượt 12% so với ngân sách, phòng nào chịu trách nhiệm?"* Bạn có ngân sách và thực tế (số lượng đơn vị tiêu hao và đơn giá) của bốn phòng ban.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Mọi số liệu đều **giả định, mô phỏng**. Đơn vị: triệu đồng; "đơn vị" là đại lượng tiêu hao của mỗi phòng (ví dụ giờ máy, lượt quảng cáo, đơn vị lưu trữ).',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Ngân sách', value: '5.000' },
            { label: 'Thực tế', value: '5.600' },
            { label: 'Vượt', value: '+600 (12,0%)', tone: 'negative' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: chênh lệch = lượng × giá',
      blocks: [
        {
          kind: 'formula',
          expression: 'Chênh lệch lượng = (Lượng TT − Lượng NS) × Giá NS ; Chênh lệch giá = (Giá TT − Giá NS) × Lượng TT',
          note: 'Hai phần cộng lại bằng chênh lệch tổng. Quy ước giá dùng lượng thực tế, lượng dùng giá ngân sách; đổi quy ước sẽ chia hai phần hơi khác nhau, nên phải ghi rõ trong báo cáo.',
        },
        {
          kind: 'quiz',
          id: 'variance-q1',
          question: 'Phòng A dùng nhiều đơn vị hơn ngân sách, đơn giá đúng ngân sách. Chênh lệch này là loại nào?',
          options: [
            { id: 'a', text: 'Chênh lệch lượng.', correct: true, explain: 'Đúng. Giá không đổi, tổng chi tăng hoàn toàn do tiêu hao nhiều hơn.' },
            { id: 'b', text: 'Chênh lệch giá.', explain: 'Giá bằng ngân sách nên phần giá bằng 0.' },
            { id: 'c', text: 'Không có chênh lệch.', explain: 'Dùng nhiều hơn thì tổng chi vượt ngân sách.' },
          ],
        },
      ],
    },
    {
      id: 'dept',
      kind: 'analysis',
      title: 'Bước 1 — Phân rã giá/lượng theo phòng ban',
      blocks: [
        {
          kind: 'table',
          title: 'Chênh lệch ngân sách theo phòng (triệu đồng)',
          columns: [
            { key: 'd', label: 'Phòng' },
            { key: 'bud', label: 'Ngân sách', align: 'right' },
            { key: 'act', label: 'Thực tế', align: 'right' },
            { key: 'vol', label: 'Lượng', align: 'right' },
            { key: 'price', label: 'Giá', align: 'right' },
            { key: 'tot', label: 'Tổng chênh', align: 'right' },
          ],
          rows: [
            { d: 'Vận hành', bud: '2.000', act: '2.310', vol: '+200', price: '+110', tot: '+310' },
            { d: 'Marketing', bud: '1.500', act: '1.650', vol: '0', price: '+150', tot: '+150' },
            { d: 'CNTT', bud: '1.000', act: '1.340', vol: '+340', price: '0', tot: '+340' },
            { d: 'Hành chính', bud: '500', act: '300', vol: '−100', price: '−100', tot: '−200' },
            { d: 'Tổng', bud: '5.000', act: '5.600', vol: '+440', price: '+160', tot: '+600' },
          ],
          highlight: [
            { row: 2, tone: 'negative' },
            { row: 3, tone: 'positive' },
          ],
          caption: 'Tổng chênh 600 = lượng 440 + giá 160. Phần lớn vượt do lượng, tập trung ở CNTT và Vận hành; Marketing vượt hoàn toàn do giá.',
        },
        {
          kind: 'chart',
          title: 'Chênh lệch theo phòng, tách giá và lượng (triệu đồng)',
          type: 'bar',
          xKey: 'd',
          series: [
            { key: 'vol', label: 'Lượng' },
            { key: 'price', label: 'Giá' },
          ],
          unit: '',
          data: [
            { d: 'Vận hành', vol: 200, price: 110 },
            { d: 'Marketing', vol: 0, price: 150 },
            { d: 'CNTT', vol: 340, price: 0 },
            { d: 'Hành chính', vol: -100, price: -100 },
          ],
        },
      ],
    },
    {
      id: 'flex',
      kind: 'analysis',
      title: 'Bước 2 — Ngân sách linh hoạt: vượt vì hoạt động tăng hay vì kém hiệu quả?',
      blocks: [
        {
          kind: 'text',
          md: 'Ngân sách Vận hành được lập với 1.000 đơn vị. Thực tế quý này số đơn hàng tăng **10%** so với kế hoạch nên mức tiêu hao hợp lý khoảng 1.100 đơn vị (giả định tiêu hao tỷ lệ với đơn hàng). Chi phí theo ngân sách linh hoạt là 1.100 × 2,0 = 2.200.',
        },
        {
          kind: 'table',
          title: 'Vận hành: tách phần vượt thành "do hoạt động" và "do hiệu quả/giá"',
          columns: [
            { key: 'item', label: 'Khoản mục' },
            { key: 'v', label: 'Triệu đồng', align: 'right' },
          ],
          rows: [
            { item: 'Ngân sách tĩnh', v: '2.000' },
            { item: 'Ngân sách linh hoạt (theo hoạt động thực tế)', v: '2.200' },
            { item: 'Thực tế', v: '2.310' },
            { item: 'Chênh do hoạt động tăng (2.200 − 2.000)', v: '+200' },
            { item: 'Chênh còn lại, do giá (2.310 − 2.200)', v: '+110' },
          ],
          highlight: [{ row: 4, tone: 'warning' }],
          caption: 'Phần lượng +200 hoàn toàn được giải thích bởi đơn hàng tăng; chỉ +110 do giá là cần hỏi. CNTT (tiêu hao 670 so với 500 theo ngân sách, +34%) chưa có giải thích hoạt động nào.',
        },
        {
          kind: 'quiz',
          id: 'variance-q2',
          question: 'Nên yêu cầu phòng nào giải trình trước?',
          options: [
            { id: 'a', text: 'CNTT (lượng +340 chưa có động lực hoạt động) và Marketing (giá +150); Vận hành chỉ giải trình phần giá +110.', correct: true, explain: 'Đúng. Giải trình nên tập trung vào phần chênh không được giải thích bởi hoạt động.' },
            { id: 'b', text: 'Chỉ Vận hành vì chênh lệch tổng lớn thứ hai.', explain: 'Phần lớn chênh của Vận hành do đơn hàng tăng, hợp lý.' },
            { id: 'c', text: 'Hành chính vì có chênh lệch âm.', explain: 'Chênh âm (tiết kiệm) vẫn nên kiểm tra nhưng không phải ưu tiên; tiết kiệm có thể do cắt giảm làm ảnh hưởng chất lượng.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: báo cáo chênh lệch ngân sách có giải trình',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận trên dữ liệu giả định:** vượt 600 (12,0%) gồm lượng +440 và giá +160, và Hành chính tiết kiệm 200 che mất phần vượt của các phòng khác. Sau khi tính ngân sách linh hoạt cho Vận hành, phần cần giải trình là CNTT (+340 lượng), Marketing (+150 giá) và Vận hành (+110 giá). Cần xác nhận giả định "tiêu hao tỷ lệ với đơn hàng" bằng dữ liệu thực.',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Lập báo cáo chênh lệch theo giá/lượng cho từng phòng, ghi rõ quy ước tính', owner: 'Kế toán quản trị', metric: 'Chênh lệch giá và lượng theo phòng', threshold: 'Chênh > 5% ngân sách phòng phải giải trình bằng văn bản' },
            { action: 'Chuyển sang ngân sách linh hoạt cho các khoản chi gắn với hoạt động', owner: 'Kế toán quản trị', metric: 'Chênh lệch so với ngân sách linh hoạt', threshold: 'Chênh còn lại > 3% thì điều tra' },
            { action: 'Rà hợp đồng/đơn giá của Marketing và Vận hành với nhà cung cấp', owner: 'Trưởng phòng mua hàng', metric: 'Đơn giá thực tế so với ngân sách', threshold: 'Tăng > 5% cần phê duyệt trước' },
          ],
        },
        {
          kind: 'quiz',
          id: 'variance-q3',
          question: 'Vì sao không nên chỉ nhìn tổng chênh lệch 600?',
          options: [
            { id: 'a', text: 'Vì tổng che mất bù trừ giữa các phòng và không cho biết nguyên nhân là giá hay lượng.', correct: true, explain: 'Đúng. Hành chính tiết kiệm 200 che một phần vượt của ba phòng còn lại (800 tổng vượt).' },
            { id: 'b', text: 'Vì 600 là số nhỏ.', explain: '600 là 12% ngân sách, đáng kể.' },
            { id: 'c', text: 'Vì chênh lệch luôn do giá.', explain: 'Trong dữ liệu này phần lớn do lượng.' },
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
            { title: 'So thực tế với ngân sách tĩnh khi hoạt động đã đổi', why: 'Hoạt động tăng làm chi phí tăng hợp lý; so tĩnh quy trách nhiệm sai.', instead: 'So với ngân sách linh hoạt theo hoạt động thực tế.' },
            { title: 'Chỉ xem chênh lệch tổng', why: 'Bù trừ giữa các phòng che mất vấn đề.', instead: 'Xem theo phòng và tách giá/lượng.' },
            { title: 'Không ghi quy ước tách giá/lượng', why: 'Đổi quy ước làm phần giá và lượng khác đi nên khó so các kỳ.', instead: 'Ghi rõ quy ước và giữ nhất quán.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Chênh lệch ngân sách = chênh lệch lượng + chênh lệch giá; phải theo phòng để thấy bù trừ.',
    'Ngân sách linh hoạt tách phần vượt do hoạt động tăng khỏi phần vượt do kém hiệu quả.',
    'Giải trình tập trung vào phần chênh không có giải thích hoạt động.',
  ],
  references: [
    { title: 'Variance (accounting)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Variance_(accounting)', note: 'Mô tả chênh lệch giữa kế hoạch và thực tế cùng các loại chênh lệch giá, lượng.' },
    { title: 'Financial statement analysis', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Financial_statement_analysis', note: 'Tổng quan cách đọc và phân tích số liệu tài chính, nền cho việc so sánh thực tế với kế hoạch.' },
  ],
}
