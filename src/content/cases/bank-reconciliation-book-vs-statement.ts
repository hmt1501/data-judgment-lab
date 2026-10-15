import type { CaseStudy } from '../types'

/*
 * Số liệu mock của "Công ty A" (triệu đ), cuối tháng, đã kiểm tra khớp nhau:
 *   Số dư sổ 485 · số dư sao kê 497 → chênh 12 (sao kê cao hơn)
 *   Phía sao kê: 497 + tiền đã nộp chưa lên sao kê 30 − séc đã phát hành chưa được thanh toán 18 = 509
 *   Phía sổ: 485 + khách chuyển khoản chưa ghi sổ 35 − phí ngân hàng chưa ghi 3 − séc khách bị trả lại 8 = 509
 *   Kiểm tra chênh: (30 − 18) − (35 − 3 − 8) = 12 − 24 = −12 ↔ 497 − 485 = +12
 */
export const bankReconciliationBookVsStatement: CaseStudy = {
  id: 'bank-reconciliation-book-vs-statement',
  title: 'Sổ quỹ và sao kê ngân hàng chênh 12 triệu: đối chiếu từng khoản',
  domain: 'accounting',
  level: 'fresher',
  minutes: 9,
  skills: ['data-quality', 'cash-flow', 'financial-statements'],
  question: 'Số dư tiền gửi theo sổ là 485 triệu đ, theo sao kê ngân hàng là 497 triệu đ. Chênh lệch 12 triệu đến từ đâu, khoản nào cần ghi sổ, khoản nào chỉ là độ trễ?',
  summary: 'Làm bảng đối chiếu ngân hàng: tách khoản chênh do thời điểm (đang chuyển) với khoản cần bút toán điều chỉnh, và kiểm tra hai phía khớp về một số dư đúng.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn mới vào phòng kế toán của **Công ty A**. Cuối tháng, kế toán thanh toán thấy số dư tiền gửi trên sổ là **485 triệu đ** nhưng sao kê ngân hàng ghi **497 triệu đ**. Kế toán trưởng giao: "Đối chiếu đi, chênh 12 triệu phải giải thích được từng đồng."',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Công ty A và các khoản là **giả định**. Quy trình đối chiếu ngân hàng là thủ tục kiểm soát nội bộ phổ biến; biểu mẫu và tên tài khoản cụ thể theo chế độ kế toán của từng doanh nghiệp.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Số dư theo sổ', value: '485 triệu đ' },
            { label: 'Số dư theo sao kê', value: '497 triệu đ', delta: 'chênh +12', tone: 'warning' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: hai nguồn, hai nhóm chênh lệch',
      blocks: [
        {
          kind: 'text',
          md: 'Sổ của doanh nghiệp và sao kê của ngân hàng ghi cùng một dòng tiền nhưng ở **thời điểm khác nhau**. Có hai nhóm chênh lệch:',
        },
        {
          kind: 'list',
          style: 'bullets',
          items: [
            '**Chênh do thời điểm:** doanh nghiệp đã ghi nhưng ngân hàng chưa (tiền nộp cuối tháng chưa lên sao kê, séc phát hành chưa được thanh toán). Không cần bút toán, chỉ điều chỉnh phía sao kê khi đối chiếu.',
            '**Chênh do ngân hàng đã ghi nhưng sổ chưa:** khách chuyển khoản trực tiếp, phí dịch vụ, séc khách bị trả lại. Doanh nghiệp phải ghi sổ.',
          ],
        },
        {
          kind: 'quiz',
          id: 'bank-reconciliation-book-vs-statement-q1',
          question: 'Công ty đã phát hành séc 18 triệu cho nhà cung cấp, nhưng nhà cung cấp chưa mang đi thanh toán. Khoản này xử lý thế nào khi đối chiếu?',
          options: [
            { id: 'a', text: 'Trừ vào số dư sao kê khi đối chiếu; không cần bút toán, vì sổ đã ghi.', correct: true, explain: 'Đúng. Sổ đã giảm tiền khi phát hành séc, ngân hàng chưa giảm. Đây là khoản chênh do thời điểm.' },
            { id: 'b', text: 'Ghi thêm bút toán giảm tiền trong sổ.', explain: 'Sổ đã giảm rồi; ghi thêm sẽ giảm hai lần.' },
            { id: 'c', text: 'Bỏ qua, vì ngân hàng chưa trừ.', explain: 'Cần đưa vào bảng đối chiếu để hai bên khớp nhau.' },
          ],
        },
      ],
    },
    {
      id: 'reconcile',
      kind: 'analysis',
      title: 'Bước 1 — Lập bảng đối chiếu hai phía',
      blocks: [
        {
          kind: 'table',
          title: 'Bảng đối chiếu ngân hàng (triệu đ)',
          columns: [
            { key: 'side', label: 'Phía' },
            { key: 'item', label: 'Khoản mục' },
            { key: 'amt', label: 'Số tiền', align: 'right' },
            { key: 'action', label: 'Xử lý' },
          ],
          rows: [
            { side: 'Sao kê', item: 'Số dư theo sao kê', amt: '497', action: '—' },
            { side: 'Sao kê', item: 'Cộng: tiền đã nộp cuối tháng chưa lên sao kê', amt: '+30', action: 'Chênh thời điểm, không bút toán' },
            { side: 'Sao kê', item: 'Trừ: séc đã phát hành chưa được thanh toán', amt: '−18', action: 'Chênh thời điểm, không bút toán' },
            { side: 'Sao kê', item: 'Số dư đúng', amt: '509', action: '—' },
            { side: 'Sổ', item: 'Số dư theo sổ', amt: '485', action: '—' },
            { side: 'Sổ', item: 'Cộng: khách chuyển khoản, ngân hàng báo có chưa ghi', amt: '+35', action: 'Ghi sổ: tăng tiền, giảm phải thu' },
            { side: 'Sổ', item: 'Trừ: phí dịch vụ ngân hàng', amt: '−3', action: 'Ghi sổ: tăng chi phí, giảm tiền' },
            { side: 'Sổ', item: 'Trừ: séc của khách bị ngân hàng trả lại', amt: '−8', action: 'Ghi sổ: tăng phải thu, giảm tiền' },
            { side: 'Sổ', item: 'Số dư đúng', amt: '509', action: '—' },
          ],
          highlight: [
            { row: 3, tone: 'positive' },
            { row: 8, tone: 'positive' },
          ],
          caption: '497 + 30 − 18 = 509; 485 + 35 − 3 − 8 = 509. Hai phía cùng về 509 triệu đ, nghĩa là đã giải thích hết.',
        },
        {
          kind: 'chart',
          title: 'Hai số dư trước và sau đối chiếu (triệu đ)',
          type: 'bar',
          xKey: 'side',
          unit: ' triệu đ',
          series: [
            { key: 'before', label: 'Trước đối chiếu' },
            { key: 'after', label: 'Số dư đúng' },
          ],
          data: [
            { side: 'Theo sổ', before: 485, after: 509 },
            { side: 'Theo sao kê', before: 497, after: 509 },
          ],
          caption: 'Số dư tiền gửi thực tế cuối tháng là 509 triệu đ; sổ đang thiếu 24 triệu so với thực tế.',
        },
        {
          kind: 'quiz',
          id: 'bank-reconciliation-book-vs-statement-q2',
          question: 'Phí dịch vụ ngân hàng 3 triệu đã bị trừ trên sao kê nhưng sổ chưa ghi. Cần làm gì?',
          options: [
            { id: 'a', text: 'Ghi sổ chi phí 3 triệu và giảm tiền gửi 3 triệu.', correct: true, explain: 'Đúng. Ngân hàng đã trừ tiền thật, sổ doanh nghiệp phải ghi nhận chi phí và giảm số dư.' },
            { id: 'b', text: 'Cộng 3 triệu vào số dư sao kê khi đối chiếu.', explain: 'Ngân hàng đã trừ rồi; sao kê đã phản ánh đúng. Chỗ cần sửa là sổ.' },
            { id: 'c', text: 'Để đó, vì khoản nhỏ.', explain: 'Khoản nhỏ vẫn làm sổ sai; để tích lại sẽ khó truy vết.' },
          ],
        },
      ],
    },
    {
      id: 'meaning',
      kind: 'analysis',
      title: 'Bước 2 — Đọc ý nghĩa của các khoản điều chỉnh',
      blocks: [
        {
          kind: 'table',
          title: 'Phân loại khoản chênh',
          columns: [
            { key: 'group', label: 'Nhóm' },
            { key: 'net', label: 'Tác động ròng', align: 'right' },
            { key: 'meaning', label: 'Ý nghĩa' },
          ],
          rows: [
            { group: 'Chênh thời điểm (phía sao kê)', net: '+12', meaning: '30 − 18: sẽ tự khớp khi ngân hàng xử lý' },
            { group: 'Ngân hàng đã ghi, sổ chưa (phía sổ)', net: '+24', meaning: '35 − 3 − 8: phải ghi sổ ngay' },
          ],
          caption: 'Sao kê − sổ = 497 − 485 = +12. Kiểm tra: 24 (sổ thiếu) − 12 (chênh thời điểm) = 12.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Séc khách bị trả lại (8 triệu) là một **tín hiệu rủi ro**: khoản phải thu của khách này cần theo dõi, không chỉ là bút toán. Khoản nộp 30 triệu "đang chuyển" cần kiểm tra lên sao kê trong tháng sau; nếu quá vài ngày chưa lên thì phải tra soát với ngân hàng.',
        },
        {
          kind: 'quiz',
          id: 'bank-reconciliation-book-vs-statement-q3',
          question: 'Khoản nộp 30 triệu đang chuyển đến hết tháng sau vẫn chưa lên sao kê. Nên làm gì?',
          options: [
            { id: 'a', text: 'Tiếp tục để trong danh sách đang chuyển, vì đó là khoản chênh bình thường.', explain: 'Chênh thời điểm chỉ bình thường trong vài ngày. Để lâu có thể là lỗi hoặc gian lận.' },
            { id: 'b', text: 'Tra soát với ngân hàng và chứng từ nộp tiền; nếu không có thì điều chỉnh sổ và điều tra.', correct: true, explain: 'Đúng. Khoản treo quá lâu là dấu hiệu bất thường cần điều tra nguyên nhân (chưa nộp, nộp sai tài khoản, ghi sai).' },
            { id: 'c', text: 'Xóa khoản đó khỏi bảng để hai bên khớp.', explain: 'Xóa để cho khớp là che giấu vấn đề, không phải đối chiếu.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: đối chiếu hằng tháng và xử lý ngay',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận:** chênh 12 triệu được giải thích hết: số dư đúng là 509 triệu đ. Sổ cần ba bút toán (khách chuyển khoản +35, phí −3, séc trả lại −8). Hai khoản chênh thời điểm (+30, −18) cần theo dõi đến khi lên sao kê.',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Ghi sổ ba khoản ngân hàng đã ghi: khách chuyển khoản 35, phí 3, séc bị trả lại 8', owner: 'Kế toán thanh toán', metric: 'Số dư sổ sau ghi', threshold: '= 509 triệu đ' },
            { action: 'Theo dõi khoản đang chuyển và séc chưa thanh toán, đối chiếu lại tháng sau', owner: 'Kế toán thanh toán', metric: 'Tuổi các khoản đang chuyển', threshold: 'Lên sao kê trong ≤ 5 ngày làm việc' },
            { action: 'Đối chiếu hằng tháng, do người không giữ tiền và không ghi sổ thực hiện, trưởng phòng ký duyệt', owner: 'Kế toán trưởng', metric: 'Số dư chênh chưa giải thích', threshold: '0 đồng; xử lý trong 5 ngày làm việc đầu tháng' },
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
            { title: 'Điều chỉnh sổ cho bằng sao kê mà không tìm nguyên nhân', why: 'Che lỗi hoặc gian lận; khoản chênh vẫn còn đó.', instead: 'Lập bảng đối chiếu hai phía và giải thích từng khoản.' },
            { title: 'Ghi sổ cả khoản chênh thời điểm', why: 'Séc đã ghi giảm mà ghi thêm lần nữa sẽ làm sổ sai hai lần.', instead: 'Chỉ ghi khoản ngân hàng đã ghi nhưng sổ chưa.' },
            { title: 'Để người giữ tiền tự đối chiếu', why: 'Mất tách biệt trách nhiệm, tăng rủi ro gian lận.', instead: 'Phân công người khác thực hiện và duyệt.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Sổ và sao kê khác nhau vì thời điểm và vì khoản ngân hàng ghi mà sổ chưa; hai nhóm xử lý khác nhau.',
    'Khoản chênh thời điểm chỉ điều chỉnh khi đối chiếu; khoản ngân hàng đã ghi cần bút toán vào sổ.',
    'Hai phía đối chiếu phải về cùng một số dư đúng; khoản treo lâu là tín hiệu cần điều tra.',
  ],
  references: [
    { title: 'Bank reconciliation', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Bank_reconciliation', note: 'Quy trình đối chiếu ngân hàng và các nhóm chênh lệch.' },
    { title: 'Reconciliation (accounting)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Reconciliation_(accounting)', note: 'Khái niệm đối chiếu trong kế toán như một thủ tục kiểm soát.' },
  ],
}
