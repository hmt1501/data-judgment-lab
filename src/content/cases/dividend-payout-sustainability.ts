import type { CaseStudy } from '../types'

/*
 * Công ty và số liệu hoàn toàn giả định (không phải khuyến nghị đầu tư). Đơn vị: đồng/cổ phiếu.
 * Payout = DPS/EPS ; Độ phủ FCF = FCF trên cổ phiếu / DPS.
 *   A Điện   EPS 2.000 DPS 1.400 → 70% ; FCF 1.800 → 1,29x
 *   B Điện   EPS 1.800 DPS 1.260 → 70% ; FCF   600 → 0,48x
 *   C Tiêu dùng EPS 3.000 DPS 1.500 → 50% ; FCF 2.700 → 1,80x
 *   D Tiêu dùng EPS 2.500 DPS 2.000 → 80% ; FCF 1.500 → 0,75x
 *   E Xây dựng  EPS 5.000 DPS 2.500 → 50% ; FCF 1.000 → 0,40x
 *   F Dịch vụ   EPS 1.000 DPS   600 → 60% ; FCF   900 → 1,50x
 *   Cohort 30 công ty trả cổ tức năm gốc, theo dõi cắt cổ tức trong 2 năm:
 *     payout <50%: n=10, cắt 1 (10%) ; 50–70%: n=12, cắt 3 (25%) ; >70%: n=8, cắt 4 (50%) ; tổng cắt = 8
 *     độ phủ FCF ≥1,0x: n=14, cắt 2 (14,3%) ; <1,0x: n=16, cắt 6 (37,5%) ; tổng n=30, cắt = 8 ✓
 */
export const dividendPayoutSustainability: CaseStudy = {
  id: 'dividend-payout-sustainability',
  title: 'Cổ tức cao có bền vững? Payout ratio so với dòng tiền tự do',
  domain: 'securities',
  level: 'junior',
  minutes: 11,
  skills: ['cash-flow', 'financial-statements', 'segmentation'],
  question:
    'Sáu công ty giả định đều trả cổ tức hấp dẫn. Dựa vào payout ratio thì có vẻ ổn, nhưng cổ tức có được dòng tiền thật chi trả không, và công ty nào có nguy cơ phải cắt?',
  summary:
    'Đặt payout ratio (trên lợi nhuận) cạnh độ phủ bằng dòng tiền tự do, so theo ngành, và đối chiếu với cohort công ty lịch sử để xếp mức rủi ro cắt cổ tức.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Một nhà đầu tư hỏi nhóm nghiên cứu: *"Trong sáu mã này, mã nào cổ tức an toàn?"* Bạn có EPS, cổ tức/cổ phiếu (DPS) và dòng tiền tự do trên cổ phiếu (FCF) của năm gần nhất.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Mọi công ty và số liệu đều **giả định, mô phỏng**. Bài không phải khuyến nghị đầu tư.',
        },
        {
          kind: 'table',
          title: 'Sáu công ty giả định (đồng/cổ phiếu)',
          columns: [
            { key: 'code', label: 'Công ty' },
            { key: 'eps', label: 'EPS', align: 'right' },
            { key: 'dps', label: 'DPS', align: 'right' },
            { key: 'fcf', label: 'FCF/cổ phiếu', align: 'right' },
          ],
          rows: [
            { code: 'A (Điện)', eps: '2.000', dps: '1.400', fcf: '1.800' },
            { code: 'B (Điện)', eps: '1.800', dps: '1.260', fcf: '600' },
            { code: 'C (Tiêu dùng)', eps: '3.000', dps: '1.500', fcf: '2.700' },
            { code: 'D (Tiêu dùng)', eps: '2.500', dps: '2.000', fcf: '1.500' },
            { code: 'E (Xây dựng)', eps: '5.000', dps: '2.500', fcf: '1.000' },
            { code: 'F (Dịch vụ)', eps: '1.000', dps: '600', fcf: '900' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: cổ tức trả bằng tiền, không bằng lợi nhuận',
      blocks: [
        {
          kind: 'formula',
          expression: 'Payout = DPS / EPS ; Độ phủ FCF = FCF trên cổ phiếu / DPS',
          note: 'Payout dựa vào lợi nhuận kế toán; độ phủ FCF dựa vào tiền thật còn lại sau đầu tư. Độ phủ < 1 nghĩa là công ty phải vay hoặc dùng tiền tích lũy để trả cổ tức.',
        },
        {
          kind: 'quiz',
          id: 'dividend-q1',
          question: 'Công ty có payout 50% nhưng độ phủ FCF 0,4x. Điều nào hợp lý nhất?',
          options: [
            { id: 'a', text: 'An toàn vì payout chỉ 50%.', explain: 'Payout thấp trên lợi nhuận kế toán chưa bảo đảm có tiền để trả nếu dòng tiền tự do yếu.' },
            { id: 'b', text: 'Lợi nhuận cao hơn dòng tiền (ví dụ do đầu tư lớn, vốn lưu động), nên cần tìm lý do và xem độ phủ ở các năm khác.', correct: true, explain: 'Đúng. Chênh lệch lợi nhuận và dòng tiền là câu hỏi cần giải thích, không phải kết luận.' },
            { id: 'c', text: 'Chắc chắn sẽ cắt cổ tức năm sau.', explain: 'Đầu tư có thể là tạm thời; cần dữ liệu nhiều năm trước khi kết luận.' },
          ],
        },
      ],
    },
    {
      id: 'compare',
      kind: 'analysis',
      title: 'Bước 1 — Payout và độ phủ FCF, so trong cùng ngành',
      blocks: [
        {
          kind: 'table',
          title: 'Payout và độ phủ FCF',
          columns: [
            { key: 'code', label: 'Công ty' },
            { key: 'payout', label: 'Payout', align: 'right' },
            { key: 'cover', label: 'Độ phủ FCF', align: 'right' },
            { key: 'read', label: 'Nhận định ban đầu' },
          ],
          rows: [
            { code: 'A (Điện)', payout: '70%', cover: '1,29x', read: 'Payout cao nhưng có tiền phủ' },
            { code: 'B (Điện)', payout: '70%', cover: '0,48x', read: 'Cùng payout với A, tiền phủ thiếu' },
            { code: 'C (Tiêu dùng)', payout: '50%', cover: '1,80x', read: 'Dư địa tốt' },
            { code: 'D (Tiêu dùng)', payout: '80%', cover: '0,75x', read: 'Payout cao, tiền không đủ' },
            { code: 'E (Xây dựng)', payout: '50%', cover: '0,40x', read: 'Lợi nhuận cao, tiền thấp' },
            { code: 'F (Dịch vụ)', payout: '60%', cover: '1,50x', read: 'Ổn' },
          ],
          highlight: [
            { row: 1, tone: 'negative' },
            { row: 3, tone: 'negative' },
            { row: 4, tone: 'warning' },
          ],
          caption: 'A và B cùng ngành, cùng payout 70% nhưng độ phủ khác nhau 1,29x so với 0,48x: payout một mình không đủ để phân biệt.',
        },
        {
          kind: 'chart',
          title: 'Độ phủ cổ tức bằng FCF (lần)',
          type: 'bar',
          xKey: 'code',
          series: [{ key: 'cover', label: 'Độ phủ FCF' }],
          unit: 'x',
          data: [
            { code: 'A', cover: 1.29 },
            { code: 'B', cover: 0.48 },
            { code: 'C', cover: 1.8 },
            { code: 'D', cover: 0.75 },
            { code: 'E', cover: 0.4 },
            { code: 'F', cover: 1.5 },
          ],
          caption: 'Ba mã dưới 1,0x: B, D, E. E có payout chỉ 50% nhưng FCF mỏng — cần giả thuyết "lợi nhuận đỉnh chu kỳ hoặc đầu tư tăng".',
        },
      ],
    },
    {
      id: 'cohort',
      kind: 'analysis',
      title: 'Bước 2 — Cohort lịch sử: ai thường cắt cổ tức?',
      blocks: [
        {
          kind: 'table',
          title: '30 công ty trả cổ tức ở năm gốc (giả định), theo dõi 2 năm tiếp',
          columns: [
            { key: 'seg', label: 'Nhóm theo năm gốc' },
            { key: 'n', label: 'Số công ty', align: 'right' },
            { key: 'cut', label: 'Cắt cổ tức', align: 'right' },
            { key: 'rate', label: 'Tỷ lệ cắt', align: 'right' },
          ],
          rows: [
            { seg: 'Payout < 50%', n: 10, cut: 1, rate: '10,0%' },
            { seg: 'Payout 50–70%', n: 12, cut: 3, rate: '25,0%' },
            { seg: 'Payout > 70%', n: 8, cut: 4, rate: '50,0%' },
            { seg: 'Độ phủ FCF ≥ 1,0x', n: 14, cut: 2, rate: '14,3%' },
            { seg: 'Độ phủ FCF < 1,0x', n: 16, cut: 6, rate: '37,5%' },
          ],
          highlight: [
            { row: 2, tone: 'negative' },
            { row: 4, tone: 'negative' },
          ],
          caption: 'Ba dòng đầu và hai dòng cuối là hai cách chia cùng 30 công ty (tổng cắt = 8 theo cả hai). Độ phủ FCF thấp đi kèm tỷ lệ cắt cao hơn gấp 2,6 lần.',
        },
        {
          kind: 'text',
          md: 'Cả payout cao và độ phủ thấp đều đi cùng tỷ lệ cắt cao hơn, nhưng **hai nhóm chồng lấn** (công ty payout cao thường có độ phủ thấp). Cỡ mẫu nhỏ nên chỉ đọc chiều hướng. Để tách, cần chia chéo hai chiều và thêm yếu tố khác (nợ vay, tính chu kỳ ngành).',
        },
        {
          kind: 'quiz',
          id: 'dividend-q2',
          question: 'Từ bảng cohort, nhận định nào đúng và không nói quá?',
          options: [
            { id: 'a', text: 'Độ phủ FCF thấp đi cùng tỷ lệ cắt cao hơn, nhưng cần chia chéo với payout vì hai nhóm chồng lấn.', correct: true, explain: 'Đúng. Nêu mối liên hệ và chỉ ra bước kiểm tra tiếp theo.' },
            { id: 'b', text: 'Độ phủ FCF thấp là nguyên nhân khiến công ty cắt cổ tức.', explain: 'Bảng chỉ cho thấy liên hệ; chưa loại trừ các yếu tố khác như nợ vay hay ngành.' },
            { id: 'c', text: 'Payout thấp thì chắc chắn không cắt.', explain: 'Vẫn có 1 trong 10 công ty payout dưới 50% cắt cổ tức.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: bảng kiểm bền vững cổ tức',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận trên dữ liệu giả định:** C và F có độ phủ tốt (1,80x và 1,50x). A đủ phủ dù payout cao. B, D, E có độ phủ dưới 1,0x nên là nhóm **cần kiểm tra thêm** (nguyên nhân FCF thấp là tạm thời hay lâu dài). Đây không phải khuyến nghị mua hay bán.',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Luôn báo cáo payout cạnh độ phủ FCF trung bình 3 năm', owner: 'Analyst cổ phiếu', metric: 'Độ phủ FCF 3 năm', threshold: '< 1,0x thì gắn cờ rủi ro cắt cổ tức' },
            { action: 'Giải thích chênh lệch giữa lợi nhuận và dòng tiền (đầu tư, vốn lưu động) cho các mã gắn cờ', owner: 'Analyst cổ phiếu', metric: 'Dòng tiền hoạt động / lợi nhuận', threshold: '< 0,8 trong 2 năm liên tiếp thì phải có giải thích' },
            { action: 'Xây bảng cohort riêng cho từng ngành để so công ty với đúng nhóm', owner: 'Trưởng nhóm nghiên cứu', metric: 'Tỷ lệ cắt cổ tức theo ngành và độ phủ', threshold: 'Mỗi ô ≥ 8 công ty mới dùng' },
          ],
        },
        {
          kind: 'quiz',
          id: 'dividend-q3',
          question: 'E (xây dựng) có payout 50% nhưng độ phủ 0,4x. Bước tiếp theo hợp lý nhất?',
          options: [
            { id: 'a', text: 'Xem FCF và lợi nhuận của E qua nhiều năm, và đầu tư/biến động vốn lưu động năm nay.', correct: true, explain: 'Đúng. Phân biệt FCF thấp tạm thời (đầu tư lớn) với thấp cấu trúc (lợi nhuận không chuyển thành tiền).' },
            { id: 'b', text: 'Coi E an toàn vì payout 50%.', explain: 'Payout trên lợi nhuận không đảm bảo có tiền.' },
            { id: 'c', text: 'Bán ngay vì độ phủ dưới 1.', explain: 'Một chỉ số một năm chưa đủ để kết luận; bài này cũng không đưa khuyến nghị.' },
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
            { title: 'Chỉ nhìn payout trên lợi nhuận', why: 'Lợi nhuận kế toán không phải tiền; công ty có thể lãi mà không có tiền để trả.', instead: 'Đặt cạnh độ phủ FCF và dòng tiền hoạt động.' },
            { title: 'Dùng một năm duy nhất', why: 'FCF dao động theo chu kỳ đầu tư; một năm thấp chưa phải xu hướng.', instead: 'Dùng trung bình 3 năm và nhìn chu kỳ.' },
            { title: 'So xuyên ngành', why: 'Điện, xây dựng, tiêu dùng có nhu cầu đầu tư và độ ổn định khác nhau.', instead: 'So công ty cùng ngành hoặc cohort cùng ngành.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Payout đo trên lợi nhuận; độ phủ FCF đo xem có tiền thật để trả không.',
    'Cùng payout có thể có độ phủ rất khác (A và B), nên phải xem cả hai.',
    'Dùng cohort công ty lịch sử để biết mức rủi ro cắt cổ tức, và luôn lưu ý cỡ mẫu nhỏ.',
  ],
  references: [
    { title: 'Dividend payout ratio', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Dividend_payout_ratio', note: 'Định nghĩa payout ratio và cách đọc kèm các hạn chế.' },
    { title: 'Free cash flow', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Free_cash_flow', note: 'Định nghĩa dòng tiền tự do và các biến thể, nền cho phép tính độ phủ.' },
    { title: 'IAS 7 Statement of Cash Flows', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/', note: 'Trang chuẩn mực về báo cáo lưu chuyển tiền tệ — nơi lấy dòng tiền hoạt động và đầu tư để tính FCF.' },
  ],
}
