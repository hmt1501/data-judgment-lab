import type { CaseStudy } from '../types'

/*
 * Số liệu mock của "Công ty A" (triệu đ), cuối năm N, đã kiểm tra khớp nhau:
 *   Doanh thu ghi sổ trước các lô cuối năm = 8.500 · biên gộp 30% (giá vốn 70%)
 *   Lô 1: 300, giao và khách nhận 30/12 → năm N · Lô 2: 800, giao tại kho khách, nhận 3/1 → năm N+1
 *   Lô 3: 400, xuất kho 31/12, quyền kiểm soát chuyển tại kho người bán → năm N · Lô 4: 250, đã đặt, chưa xuất → năm N+1
 *   Doanh thu đúng năm N = 8.500 + 300 + 400 = 9.200 · kế toán ghi theo ngày hóa đơn = 8.500 + 300 + 800 + 400 + 250 = 10.250
 *   Ghi thừa 800 + 250 = 1.050 (+11,4% so với đúng) · lợi nhuận gộp thừa 1.050 × 30% = 315 · chênh lệch so với mục tiêu thưởng 10.000
 *   Chi phí hoạt động 2.000: lợi nhuận trước thuế đúng 9.200 × 30% − 2.000 = 760 · sai 10.250 × 30% − 2.000 = 1.075 (+41,4%)
 */
export const revenueCutoffYearEndBasics: CaseStudy = {
  id: 'revenue-cutoff-year-end-basics',
  title: 'Bán hàng 31/12, giao 3/1: doanh thu thuộc năm nào?',
  domain: 'accounting',
  level: 'fresher',
  minutes: 9,
  skills: ['revenue-recognition', 'financial-statements', 'data-quality'],
  question: 'Cuối năm có 4 lô hàng nằm ở các giai đoạn khác nhau. Lô nào thuộc doanh thu năm N, lô nào sang năm N+1, và sai thời điểm ảnh hưởng báo cáo thế nào?',
  summary: 'Nhập môn kiểm tra cut-off: ghi nhận doanh thu khi quyền kiểm soát chuyển cho khách, đọc điều khoản giao hàng và chứng từ quanh ngày cuối năm.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là kế toán nội bộ của **Công ty A** đang khóa sổ năm N. Trưởng kinh doanh muốn tính cả các lô hàng cuối tháng 12 vào doanh thu để đạt mục tiêu thưởng **10.000 triệu đ**. Bạn phải kiểm tra từng lô xem đã thật sự đủ điều kiện ghi nhận doanh thu năm N chưa.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Công ty A và các lô hàng là **giả định**. IFRS 15 xác định doanh thu theo việc **chuyển giao quyền kiểm soát**; chuẩn mực và hướng dẫn của từng nước (ví dụ Việt Nam) có thể diễn đạt khác, nên mọi quyết định thật cần theo chuẩn mực và chính sách kế toán áp dụng, và nhờ chuyên gia xem xét hợp đồng cụ thể.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Doanh thu ghi sổ trước các lô cuối năm', value: '8.500 triệu đ' },
            { label: 'Mục tiêu thưởng', value: '10.000 triệu đ' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: kiểm soát đã chuyển chưa',
      blocks: [
        {
          kind: 'text',
          md: 'Doanh thu thuộc kỳ mà **khách hàng giành được quyền kiểm soát** hàng hóa: thường thể hiện qua việc chuyển quyền sở hữu hợp pháp, giao hàng, khách chấp nhận và chịu rủi ro. Ngày xuất hóa đơn hay ngày đặt hàng không quyết định. **Cut-off** là kiểm tra các giao dịch sát ngày cuối kỳ có nằm đúng kỳ không.',
        },
        {
          kind: 'list',
          style: 'check',
          items: [
            'Hợp đồng quy định chuyển quyền kiểm soát tại đâu và khi nào (điểm xuất phát hay điểm đến)?',
            'Chứng từ giao nhận (phiếu xuất kho, biên bản giao hàng) ghi ngày nào?',
            'Khách đã chấp nhận hàng chưa, còn quyền trả lại hay điều kiện treo nào không?',
          ],
        },
        {
          kind: 'quiz',
          id: 'revenue-cutoff-year-end-basics-q1',
          question: 'Hợp đồng quy định hàng được giao tại kho khách hàng; xe giao ngày 3/1 và khách nhận ngày 3/1. Công ty đã xuất hóa đơn ngày 31/12. Doanh thu ghi vào kỳ nào?',
          options: [
            { id: 'a', text: 'Năm N+1, vì khách chỉ giành được quyền kiểm soát khi nhận hàng ngày 3/1.', correct: true, explain: 'Đúng. Hóa đơn ngày 31/12 không đổi bản chất giao dịch. Điều kiện giao tại điểm đến nghĩa là quyền kiểm soát chuyển khi hàng tới.' },
            { id: 'b', text: 'Năm N, vì hóa đơn đã xuất ngày 31/12.', explain: 'Ngày xuất hóa đơn không quyết định kỳ ghi nhận; ngày chuyển quyền kiểm soát mới quyết định.' },
            { id: 'c', text: 'Chia đôi cho hai năm.', explain: 'Một lô hàng được giao một lần nên doanh thu ghi một lần ở thời điểm chuyển quyền kiểm soát.' },
          ],
        },
      ],
    },
    {
      id: 'test',
      kind: 'analysis',
      title: 'Bước 1 — Kiểm tra từng lô quanh ngày cuối năm',
      blocks: [
        {
          kind: 'table',
          title: 'Bốn lô hàng cuối năm N (triệu đ)',
          columns: [
            { key: 'lot', label: 'Lô' },
            { key: 'fact', label: 'Sự kiện' },
            { key: 'amt', label: 'Giá trị', align: 'right' },
            { key: 'period', label: 'Kỳ đúng' },
          ],
          rows: [
            { lot: '1', fact: 'Giao 30/12, khách nhận 30/12', amt: '300', period: 'Năm N' },
            { lot: '2', fact: 'Xuất 31/12, giao tại kho khách, nhận 3/1', amt: '800', period: 'Năm N+1' },
            { lot: '3', fact: 'Xuất kho 31/12, quyền kiểm soát chuyển tại kho người bán, khách tự vận chuyển', amt: '400', period: 'Năm N' },
            { lot: '4', fact: 'Khách đã đặt, hàng chưa xuất kho', amt: '250', period: 'Năm N+1' },
          ],
          highlight: [
            { row: 1, tone: 'warning' },
            { row: 3, tone: 'warning' },
          ],
          caption: 'Doanh thu đúng năm N = 8.500 + 300 + 400 = 9.200. Lô 2 và lô 4 (tổng 1.050) thuộc năm sau.',
        },
        {
          kind: 'quiz',
          id: 'revenue-cutoff-year-end-basics-q2',
          question: 'Lô 3 (xuất kho 31/12, quyền kiểm soát chuyển tại kho người bán, khách tự vận chuyển) nên xử lý thế nào?',
          options: [
            { id: 'a', text: 'Ghi doanh thu năm N, vì quyền kiểm soát đã chuyển khi hàng rời kho người bán; cần giữ chứng từ xác nhận.', correct: true, explain: 'Đúng. Điều khoản chuyển quyền tại điểm xuất phát cho biết khách đã kiểm soát hàng ngay khi xuất kho, dù hàng chưa tới nơi.' },
            { id: 'b', text: 'Ghi doanh thu năm N+1, vì khách chưa nhận hàng.', explain: 'Ở điều khoản này, việc khách chưa nhận hàng không làm quyền kiểm soát chưa chuyển.' },
            { id: 'c', text: 'Không ghi doanh thu cho đến khi khách thanh toán.', explain: 'Doanh thu không phụ thuộc vào ngày thu tiền mà vào chuyển quyền kiểm soát.' },
          ],
        },
      ],
    },
    {
      id: 'impact',
      kind: 'analysis',
      title: 'Bước 2 — Sai cut-off làm báo cáo lệch bao nhiêu',
      blocks: [
        {
          kind: 'table',
          title: 'Hai cách ghi doanh thu năm N (triệu đ)',
          columns: [
            { key: 'item', label: 'Chỉ tiêu' },
            { key: 'right', label: 'Ghi đúng', align: 'right' },
            { key: 'wrong', label: 'Ghi theo ngày hóa đơn', align: 'right' },
            { key: 'diff', label: 'Chênh lệch', align: 'right' },
          ],
          rows: [
            { item: 'Doanh thu', right: '9.200', wrong: '10.250', diff: '+1.050 (+11,4%)' },
            { item: 'Lợi nhuận gộp (30%)', right: '2.760', wrong: '3.075', diff: '+315' },
            { item: 'Lợi nhuận trước thuế (chi phí hoạt động 2.000)', right: '760', wrong: '1.075', diff: '+315 (+41,4%)' },
            { item: 'Đạt mục tiêu thưởng 10.000?', right: 'Không', wrong: 'Có', diff: '' },
          ],
          highlight: [{ row: 3, tone: 'warning' }],
          caption: 'Doanh thu thừa 11,4% làm lợi nhuận trước thuế thừa 41,4% vì chi phí hoạt động không đổi. Đây là lý do cut-off bị kiểm toán chú ý, nhất là khi có mục tiêu thưởng.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Dấu hiệu cần soi: doanh thu tập trung bất thường vào những ngày cuối năm, hóa đơn lớn ngày 31/12 nhưng phiếu giao nhận đầu tháng 1, và hàng bị trả lại ngay sau đầu năm. Đối chiếu ba loại chứng từ (hóa đơn, phiếu xuất kho, biên bản nhận hàng) là cách kiểm tra rẻ nhất.',
        },
        {
          kind: 'quiz',
          id: 'revenue-cutoff-year-end-basics-q3',
          question: 'Doanh thu thừa 1.050 triệu (11,4%) nhưng lợi nhuận trước thuế thừa 41,4%. Điều này nói gì?',
          options: [
            { id: 'a', text: 'Sai cut-off được khuếch đại ở lợi nhuận vì chi phí hoạt động không đổi.', correct: true, explain: 'Đúng. Phần doanh thu thừa kéo theo lợi nhuận gộp thừa, trong khi chi phí hoạt động cố định nên toàn bộ lợi nhuận gộp thừa rơi xuống lợi nhuận trước thuế.' },
            { id: 'b', text: 'Không đáng quan tâm vì doanh thu chỉ lệch 11,4%.', explain: 'Sai lệch nhỏ ở doanh thu có thể lệch rất lớn ở lợi nhuận.' },
            { id: 'c', text: 'Lợi nhuận luôn lệch bằng doanh thu.', explain: 'Hai chỉ tiêu lệch khác nhau vì chi phí cố định.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: quy trình kiểm tra cut-off',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận:** doanh thu năm N đúng là **9.200** triệu đ, chưa đạt mục tiêu 10.000. Lô 2 và lô 4 (1.050) chuyển sang năm N+1; ghi nhận chúng vào năm N là sai kỳ. Cần giải thích rõ với trưởng kinh doanh bằng chứng từ.',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Chọn tất cả giao dịch từ 5 ngày trước đến 5 ngày sau ngày cuối năm, đối chiếu hóa đơn, phiếu xuất kho và biên bản nhận hàng', owner: 'Kế toán tổng hợp', metric: 'Số giao dịch lệch kỳ', threshold: '0 giao dịch lệch kỳ chưa điều chỉnh' },
            { action: 'Đọc điều khoản giao hàng và chuyển quyền kiểm soát của các hợp đồng lớn cuối năm', owner: 'Kế toán + Pháp chế', metric: 'Tỷ lệ hợp đồng lớn đã rà điều khoản', threshold: '100% hợp đồng trên ngưỡng trọng yếu' },
            { action: 'Theo dõi hàng trả lại và tín dụng nợ đầu năm sau', owner: 'Kế toán doanh thu', metric: 'Giá trị hàng trả lại 15 ngày đầu năm', threshold: 'Mỗi khoản lớn có giải thích' },
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
            { title: 'Ghi doanh thu theo ngày hóa đơn', why: 'Hóa đơn không chứng minh quyền kiểm soát đã chuyển.', instead: 'Dựa vào điều khoản chuyển quyền và chứng từ giao nhận.' },
            { title: 'Ghi doanh thu khi nhận tiền hoặc khi nhận đơn', why: 'Doanh thu không phụ thuộc ngày thu tiền hay ngày đặt hàng.', instead: 'Ghi khi quyền kiểm soát chuyển cho khách.' },
            { title: 'Để mục tiêu thưởng quyết định thời điểm ghi nhận', why: 'Tạo động cơ đẩy doanh thu lên cuối năm và gây sai lệch lớn ở lợi nhuận.', instead: 'Tách người đánh giá cut-off khỏi người hưởng thưởng.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Doanh thu ghi khi quyền kiểm soát chuyển cho khách, không phải khi xuất hóa đơn, nhận đơn hay nhận tiền.',
    'Cut-off là kiểm tra các giao dịch sát ngày cuối kỳ bằng điều khoản hợp đồng và ba loại chứng từ.',
    'Sai doanh thu nhỏ có thể làm lợi nhuận lệch lớn vì chi phí hoạt động không đổi.',
  ],
  references: [
    { title: 'IFRS 15 Revenue from Contracts with Customers', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/', note: 'Chuẩn mực ghi nhận doanh thu theo chuyển giao quyền kiểm soát.' },
    { title: 'Revenue recognition', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Revenue_recognition', note: 'Tóm tắt nguyên tắc ghi nhận doanh thu và các khác biệt giữa hệ thống chuẩn mực.' },
  ],
}
