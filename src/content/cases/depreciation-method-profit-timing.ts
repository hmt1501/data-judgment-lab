import type { CaseStudy } from '../types'

/*
 * Công ty và số liệu hoàn toàn giả định. Đơn vị: triệu đồng. Hai công ty A và B giống hệt nhau, mua cùng một máy.
 * Máy: nguyên giá 1.000, thời gian sử dụng 5 năm, giá trị thanh lý ước tính 100 → phần khấu hao được 900.
 * A (đường thẳng): 900/5 = 180/năm.
 * B (số dư giảm dần, tỷ lệ 40% = 2 × 20%, không khấu hao xuống dưới 100):
 *   Năm 1 1.000×40% = 400 (còn 600) ; Năm 2 600×40% = 240 (còn 360) ; Năm 3 360×40% = 144 (còn 216)
 *   Năm 4 216×40% = 86,4 (còn 129,6) ; Năm 5 chỉ khấu hao nốt đến 100: 129,6 − 100 = 29,6 (còn 100)
 *   Tổng 400+240+144+86,4+29,6 = 900 ✓
 * Lợi nhuận trước thuế = 600 (trước khấu hao máy, giống nhau mọi năm) − khấu hao
 *   A: 420 mỗi năm, tổng 2.100 ; B: 200 ; 360 ; 456 ; 513,6 ; 570,4, tổng 2.100 ✓
 * Tăng trưởng lợi nhuận của B: 360/200 = +80% ; 456/360 = +26,7% ; 513,6/456 = +12,6% ; 570,4/513,6 = +11,1%
 */
export const depreciationMethodProfitTiming: CaseStudy = {
  id: 'depreciation-method-profit-timing',
  title: 'Khấu hao đường thẳng và số dư giảm dần: tổng chi phí bằng nhau, lợi nhuận từng năm thì không',
  domain: 'accounting',
  level: 'junior',
  minutes: 11,
  skills: ['revenue-recognition', 'financial-statements', 'metric-decomposition'],
  question:
    'Hai công ty có hoạt động y hệt nhau, chỉ khác phương pháp khấu hao. Vì sao lợi nhuận của một công ty "tăng đều" còn công ty kia đi ngang, và làm sao biết mức tăng đó là thật hay chỉ do khấu hao?',
  summary:
    'So hai phương pháp khấu hao trên cùng một tài sản, thấy tổng chi phí bằng nhau nhưng thời điểm khác nhau, rồi học cách điều chỉnh để so sánh lợi nhuận giữa hai công ty.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Hai công ty giả định A và B mua cùng một máy giá 1.000 triệu đồng, dùng 5 năm, giá trị thanh lý ước tính 100. Mỗi năm, trước khi trừ khấu hao máy, cả hai tạo ra lợi nhuận 600. A dùng **khấu hao đường thẳng**, B dùng **số dư giảm dần**. Báo cáo của B cho thấy lợi nhuận tăng liên tục 4 năm; một nhà phân tích nói *"B hoạt động ngày càng tốt"*. Bạn cần kiểm tra.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Mọi số liệu đều **giả định, mô phỏng**. Việc chọn phương pháp khấu hao thực tế phải phù hợp với cách tài sản mang lại lợi ích và chuẩn mực áp dụng; cần người có chuyên môn rà.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: khấu hao là cách phân bổ, không thay đổi tổng',
      blocks: [
        {
          kind: 'formula',
          expression: 'Tổng khấu hao = Nguyên giá − Giá trị thanh lý ước tính',
          note: 'Mọi phương pháp đều phân bổ cùng một tổng (900 ở đây). Khác biệt chỉ là **thời điểm** ghi nhận chi phí. Chuẩn mực yêu cầu phương pháp phản ánh cách lợi ích kinh tế của tài sản được tiêu hao (xem IAS 16).',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Đường thẳng**: chi phí đều mỗi năm.',
            '**Số dư giảm dần**: chi phí cao đầu kỳ, giảm dần; tổng vẫn là 900 nên năm cuối thường được điều chỉnh để không xuống dưới giá trị thanh lý.',
            '**So sánh lợi nhuận**: phải điều chỉnh về cùng phương pháp hoặc xem lợi nhuận trước khấu hao.',
          ],
        },
        {
          kind: 'quiz',
          id: 'depreciation-q1',
          question: 'Đổi từ đường thẳng sang số dư giảm dần thay đổi điều gì?',
          options: [
            { id: 'a', text: 'Thời điểm ghi nhận chi phí, không đổi tổng chi phí cả vòng đời.', correct: true, explain: 'Đúng. Tổng khấu hao vẫn bằng nguyên giá trừ giá trị thanh lý.' },
            { id: 'b', text: 'Tổng chi phí giảm nên công ty lãi hơn.', explain: 'Tổng không đổi; chỉ dịch chuyển giữa các năm.' },
            { id: 'c', text: 'Dòng tiền thật thay đổi.', explain: 'Khấu hao là chi phí không bằng tiền; tiền mua máy đã chi một lần.' },
          ],
        },
      ],
    },
    {
      id: 'schedule',
      kind: 'analysis',
      title: 'Bước 1 — Lịch khấu hao của hai công ty',
      blocks: [
        {
          kind: 'table',
          title: 'Chi phí khấu hao theo năm (triệu đồng)',
          columns: [
            { key: 'y', label: 'Năm' },
            { key: 'a', label: 'A: đường thẳng', align: 'right' },
            { key: 'b', label: 'B: số dư giảm dần', align: 'right' },
            { key: 'diff', label: 'Chênh (B − A)', align: 'right' },
          ],
          rows: [
            { y: '1', a: '180,0', b: '400,0', diff: '+220,0' },
            { y: '2', a: '180,0', b: '240,0', diff: '+60,0' },
            { y: '3', a: '180,0', b: '144,0', diff: '−36,0' },
            { y: '4', a: '180,0', b: '86,4', diff: '−93,6' },
            { y: '5', a: '180,0', b: '29,6', diff: '−150,4' },
            { y: 'Cộng', a: '900,0', b: '900,0', diff: '0' },
          ],
          highlight: [{ row: 5, tone: 'neutral' }],
          caption: 'Tổng chênh bằng 0: B chi nhiều hơn ở hai năm đầu, ít hơn ở ba năm sau.',
        },
      ],
    },
    {
      id: 'profit',
      kind: 'analysis',
      title: 'Bước 2 — Lợi nhuận từng năm và "tăng trưởng giả"',
      blocks: [
        {
          kind: 'table',
          title: 'Lợi nhuận trước thuế (triệu đồng) = 600 − khấu hao',
          columns: [
            { key: 'y', label: 'Năm' },
            { key: 'a', label: 'A', align: 'right' },
            { key: 'b', label: 'B', align: 'right' },
            { key: 'g', label: 'Tăng trưởng của B', align: 'right' },
          ],
          rows: [
            { y: '1', a: '420,0', b: '200,0', g: '—' },
            { y: '2', a: '420,0', b: '360,0', g: '+80,0%' },
            { y: '3', a: '420,0', b: '456,0', g: '+26,7%' },
            { y: '4', a: '420,0', b: '513,6', g: '+12,6%' },
            { y: '5', a: '420,0', b: '570,4', g: '+11,1%' },
            { y: 'Cộng', a: '2.100,0', b: '2.100,0', g: '' },
          ],
          highlight: [{ row: 1, tone: 'warning' }],
          caption: 'Hoạt động của hai công ty giống hệt (600 mỗi năm trước khấu hao), nhưng B có vẻ tăng trưởng 4 năm liền chỉ vì khấu hao giảm dần.',
        },
        {
          kind: 'chart',
          title: 'Lợi nhuận trước thuế theo năm (triệu đồng)',
          type: 'line',
          xKey: 'y',
          series: [
            { key: 'a', label: 'A: đường thẳng' },
            { key: 'b', label: 'B: số dư giảm dần' },
          ],
          unit: '',
          data: [
            { y: 'Năm 1', a: 420, b: 200 },
            { y: 'Năm 2', a: 420, b: 360 },
            { y: 'Năm 3', a: 420, b: 456 },
            { y: 'Năm 4', a: 420, b: 513.6 },
            { y: 'Năm 5', a: 420, b: 570.4 },
          ],
          caption: 'Hai đường cắt nhau ở năm 3; tổng diện tích bằng nhau. Năm 1 B thấp hơn A tới 52%.',
        },
        {
          kind: 'quiz',
          id: 'depreciation-q2',
          question: 'Giả thuyết "B hoạt động ngày càng tốt" nên được kiểm tra thế nào?',
          options: [
            { id: 'a', text: 'So lợi nhuận trước khấu hao (600 mỗi năm, phẳng) hoặc quy A và B về cùng một phương pháp.', correct: true, explain: 'Đúng. Lợi nhuận trước khấu hao phẳng cho thấy hoạt động không đổi; mức tăng chỉ do lịch khấu hao.' },
            { id: 'b', text: 'Nhìn tốc độ tăng lợi nhuận sau khấu hao của B qua các năm.', explain: 'Chính chỉ tiêu này bị lịch khấu hao làm méo.' },
            { id: 'c', text: 'Hỏi B xem họ nghĩ họ đang tốt không.', explain: 'Ý kiến không phải dữ liệu kiểm chứng.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: so sánh lợi nhuận qua các công ty và các năm',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận trên dữ liệu giả định:** lợi nhuận B tăng từ 200 lên 570,4 hoàn toàn do khấu hao giảm từ 400 xuống 29,6; hoạt động (600) không đổi. Khi so các công ty hoặc các năm, nên xem **lợi nhuận trước khấu hao** hoặc điều chỉnh về cùng phương pháp. Việc phương pháp nào phù hợp với tài sản thực tế (và thuế) thuộc quyết định kế toán.',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Thêm cột lợi nhuận trước khấu hao (EBITDA hoặc tương đương) cạnh lợi nhuận sau khấu hao khi so các công ty', owner: 'Analyst tài chính', metric: 'Lợi nhuận trước khấu hao theo năm', threshold: 'Chênh lệch tăng trưởng giữa hai loại > 10 điểm % thì phải giải thích' },
            { action: 'Đọc thuyết minh để biết phương pháp khấu hao và thời gian sử dụng ước tính của từng công ty', owner: 'Analyst tài chính', metric: 'Phương pháp và thời gian khấu hao', threshold: '100% công ty trong so sánh đã ghi rõ' },
            { action: 'Cảnh báo khi công ty thay đổi phương pháp hoặc thời gian khấu hao giữa các kỳ', owner: 'Kế toán trưởng', metric: 'Ảnh hưởng thay đổi lên lợi nhuận kỳ', threshold: 'Ảnh hưởng > 5% lợi nhuận phải được thuyết minh' },
          ],
        },
        {
          kind: 'quiz',
          id: 'depreciation-q3',
          question: 'Công ty C đổi thời gian khấu hao từ 5 năm sang 8 năm. Hệ quả hợp lý nhất?',
          options: [
            { id: 'a', text: 'Chi phí khấu hao mỗi năm giảm, lợi nhuận kỳ đổi tăng mà hoạt động không đổi; cần xem lý do thay đổi.', correct: true, explain: 'Đúng. Đổi ước tính làm đổi thời điểm chi phí; phải kiểm tra tính hợp lý của thay đổi.' },
            { id: 'b', text: 'Dòng tiền của C tăng.', explain: 'Khấu hao không phải dòng tiền; tiền mua tài sản không đổi.' },
            { id: 'c', text: 'Không ảnh hưởng gì.', explain: 'Có ảnh hưởng lớn tới lợi nhuận mỗi kỳ.' },
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
            { title: 'Đọc tăng trưởng lợi nhuận là cải thiện hoạt động', why: 'Khấu hao giảm dần làm lợi nhuận tăng dù hoạt động phẳng.', instead: 'Xem lợi nhuận trước khấu hao và hoạt động cơ bản.' },
            { title: 'So hai công ty khác phương pháp khấu hao', why: 'Cùng hoạt động nhưng lợi nhuận khác nhau tới 52% năm đầu.', instead: 'Quy về cùng phương pháp hoặc dùng chỉ tiêu trước khấu hao.' },
            { title: 'Nhầm khấu hao với dòng tiền', why: 'Khấu hao không phải chi tiền; tiền đã chi lúc mua tài sản.', instead: 'Xem báo cáo lưu chuyển tiền tệ riêng.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Mọi phương pháp khấu hao phân bổ cùng một tổng; khác biệt là thời điểm ghi nhận chi phí.',
    'Lợi nhuận tăng có thể chỉ do khấu hao giảm dần; hãy xem lợi nhuận trước khấu hao.',
    'Muốn so sánh công ty, phải biết và quy về cùng phương pháp và thời gian khấu hao.',
  ],
  references: [
    { title: 'IAS 16 Property, Plant and Equipment', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-16-property-plant-and-equipment/', note: 'Trang chuẩn mực tài sản cố định, nơi quy định khấu hao và việc phương pháp phản ánh cách tiêu hao lợi ích kinh tế.' },
    { title: 'IAS 8 (Basis of Preparation of Financial Statements)', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-8-accounting-policies-changes-in-accounting-estimates-and-errors/', note: 'Trang chuẩn mực IAS 8 (tên hiện hành: Basis of Preparation of Financial Statements), nơi tra cách xử lý thay đổi chính sách và ước tính kế toán khi công ty đổi thời gian hoặc phương pháp khấu hao.' },
    { title: 'Depreciation', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Depreciation', note: 'Tổng quan các phương pháp khấu hao, gồm đường thẳng và số dư giảm dần.' },
  ],
}
