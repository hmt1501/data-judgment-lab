import type { CaseStudy } from '../types'

/*
 * Số liệu mock của "Công ty A" (triệu đ), quý này so với quý trước, đã kiểm tra khớp nhau:
 *   Doanh thu 10.000 → 12.000 (+20%) · giá vốn 7.000 → 8.520 · lợi nhuận gộp 3.000 → 3.480 · biên gộp 30,0% → 29,0%
 *   Chi phí bán hàng 1.000 (10,0%) → 1.560 (13,0%) · chi phí quản lý 700 (7,0%) → 780 (6,5%)
 *   EBIT 1.300 (13,0%) → 1.140 (9,5%) · lãi vay 200 (2,0%) → 300 (2,5%)
 *   Lợi nhuận trước thuế 1.100 (11,0%) → 840 (7,0%) · thuế 20%: 220 → 168 · lợi nhuận ròng 880 (8,8%) → 672 (5,6%) · −23,6%
 *   Cầu nối biên trước thuế: −1,0 (gộp) −3,0 (bán hàng) +0,5 (quản lý) −0,5 (lãi vay) = −4,0 điểm % · biên ròng −4,0 × 0,8 = −3,2 điểm %
 */
export const grossMarginVsNetMarginReading: CaseStudy = {
  id: 'gross-margin-vs-net-margin-reading',
  title: 'Doanh thu tăng 20% nhưng lợi nhuận ròng giảm gần 24%: đọc từng tầng chi phí',
  domain: 'accounting',
  level: 'fresher',
  minutes: 9,
  skills: ['financial-statements', 'metric-decomposition', 'unit-economics'],
  question: 'Doanh thu tăng, biên gộp chỉ giảm nhẹ nhưng biên ròng giảm mạnh. Tầng chi phí nào gây ra, và nên ưu tiên xử lý chỗ nào?',
  summary: 'Đọc báo cáo kết quả kinh doanh theo tầng (gộp, hoạt động, lãi vay, thuế) và quy mỗi tầng về điểm phần trăm của doanh thu.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst tài chính của **Công ty A**, công ty bán lẻ nhỏ. Quý này doanh thu 12.000 triệu đ, tăng 20%. Giám đốc kinh doanh nói *"giá vốn tăng nhẹ thôi, biên gộp chỉ mất 1 điểm"*. Nhưng lợi nhuận ròng giảm từ 880 xuống 672 triệu đ. Giám đốc tài chính hỏi: "Tiền lãi đi đâu?"',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Công ty A và mọi con số là **giả định**, chỉ dùng để học cách đọc. Cấu trúc báo cáo kết quả kinh doanh (doanh thu, giá vốn, chi phí, thuế) là thật; thuế suất 20% chỉ để tính toán.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Doanh thu', value: '12.000 triệu đ', delta: '+20%', tone: 'positive' },
            { label: 'Biên gộp', value: '29,0%', delta: '−1,0 điểm', tone: 'warning' },
            { label: 'Biên ròng', value: '5,6%', delta: '−3,2 điểm', tone: 'negative' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: từ doanh thu xuống lợi nhuận ròng',
      blocks: [
        {
          kind: 'formula',
          expression: 'Doanh thu − Giá vốn = Lợi nhuận gộp − Chi phí bán hàng − Chi phí quản lý = EBIT − Lãi vay = Lợi nhuận trước thuế − Thuế = Lợi nhuận ròng',
          note: 'Mỗi tầng chia cho doanh thu cho ra một loại biên. Biên gộp phản ánh giá bán và giá vốn; biên EBIT thêm chi phí vận hành; biên ròng thêm lãi vay và thuế. Chênh lệch giữa hai biên liền nhau cho biết tầng nào "ăn" lợi nhuận.',
        },
        {
          kind: 'quiz',
          id: 'gross-margin-vs-net-margin-reading-q1',
          question: 'Biên gộp giảm 1 điểm, biên ròng giảm 3,2 điểm. Cần làm gì đầu tiên?',
          options: [
            { id: 'a', text: 'Tập trung vào giá vốn vì đó là nguyên nhân chính.', explain: 'Giá vốn chỉ giải thích 1 điểm. Phần giảm lớn hơn nằm ở các tầng dưới.' },
            { id: 'b', text: 'Tách chênh lệch biên theo từng tầng chi phí để tìm tầng giảm nhiều nhất.', correct: true, explain: 'Đúng. Phân rã từng tầng theo % doanh thu cho biết chính xác tầng nào đóng góp bao nhiêu điểm.' },
            { id: 'c', text: 'Cắt giảm nhân sự ngay.', explain: 'Chưa biết chi phí nào là nguyên nhân; hành động trước khi phân rã dễ sai chỗ.' },
          ],
        },
      ],
    },
    {
      id: 'tiers',
      kind: 'analysis',
      title: 'Bước 1 — Đọc từng tầng, quy về % doanh thu',
      blocks: [
        {
          kind: 'table',
          title: 'Báo cáo kết quả kinh doanh (triệu đ và % doanh thu)',
          columns: [
            { key: 'item', label: 'Khoản mục' },
            { key: 'q1', label: 'Quý trước', align: 'right' },
            { key: 'q1p', label: '% DT', align: 'right' },
            { key: 'q2', label: 'Quý này', align: 'right' },
            { key: 'q2p', label: '% DT', align: 'right' },
          ],
          rows: [
            { item: 'Doanh thu', q1: '10.000', q1p: '100,0%', q2: '12.000', q2p: '100,0%' },
            { item: 'Giá vốn', q1: '7.000', q1p: '70,0%', q2: '8.520', q2p: '71,0%' },
            { item: 'Lợi nhuận gộp', q1: '3.000', q1p: '30,0%', q2: '3.480', q2p: '29,0%' },
            { item: 'Chi phí bán hàng', q1: '1.000', q1p: '10,0%', q2: '1.560', q2p: '13,0%' },
            { item: 'Chi phí quản lý', q1: '700', q1p: '7,0%', q2: '780', q2p: '6,5%' },
            { item: 'EBIT (lợi nhuận hoạt động)', q1: '1.300', q1p: '13,0%', q2: '1.140', q2p: '9,5%' },
            { item: 'Lãi vay', q1: '200', q1p: '2,0%', q2: '300', q2p: '2,5%' },
            { item: 'Lợi nhuận trước thuế', q1: '1.100', q1p: '11,0%', q2: '840', q2p: '7,0%' },
            { item: 'Thuế (20%)', q1: '220', q1p: '2,2%', q2: '168', q2p: '1,4%' },
            { item: 'Lợi nhuận ròng', q1: '880', q1p: '8,8%', q2: '672', q2p: '5,6%' },
          ],
          highlight: [
            { row: 3, tone: 'negative' },
            { row: 6, tone: 'warning' },
            { row: 9, tone: 'negative' },
          ],
          caption: 'Chi phí bán hàng tăng 56% (1.000 → 1.560) trong khi doanh thu tăng 20%; lãi vay tăng 50%.',
        },
        {
          kind: 'chart',
          title: 'Các loại biên, quý trước vs quý này (%)',
          type: 'bar',
          xKey: 'tier',
          unit: '%',
          series: [
            { key: 'q1', label: 'Quý trước' },
            { key: 'q2', label: 'Quý này' },
          ],
          data: [
            { tier: 'Biên gộp', q1: 30, q2: 29 },
            { tier: 'Biên EBIT', q1: 13, q2: 9.5 },
            { tier: 'Biên trước thuế', q1: 11, q2: 7 },
            { tier: 'Biên ròng', q1: 8.8, q2: 5.6 },
          ],
          caption: 'Khoảng cách giữa hai quý rộng dần khi đi xuống: −1,0, −3,5, −4,0, −3,2 điểm (biên ròng thu hẹp vì thuế giảm theo lợi nhuận).',
        },
        {
          kind: 'quiz',
          id: 'gross-margin-vs-net-margin-reading-q2',
          question: 'Khoảng cách từ biên gộp xuống biên EBIT (phần chi phí vận hành) là 17,0 điểm quý trước và 19,5 điểm quý này, rộng thêm 2,5 điểm. Khoản nào chủ yếu gây ra?',
          options: [
            { id: 'a', text: 'Chi phí bán hàng, từ 10,0% lên 13,0% doanh thu (+3,0 điểm), bù một phần bởi chi phí quản lý giảm 0,5 điểm.', correct: true, explain: 'Đúng. 3,0 − 0,5 = 2,5 điểm. Chi phí bán hàng là nguồn chính của việc biên EBIT giảm.' },
            { id: 'b', text: 'Chi phí quản lý, vì tăng từ 700 lên 780.', explain: 'Chi phí quản lý tăng số tuyệt đối nhưng giảm theo % doanh thu (7,0% → 6,5%).' },
            { id: 'c', text: 'Lãi vay.', explain: 'Lãi vay nằm dưới EBIT, không ảnh hưởng đến biên EBIT.' },
          ],
        },
      ],
    },
    {
      id: 'bridge',
      kind: 'analysis',
      title: 'Bước 2 — Cầu nối biên: mỗi tầng đóng góp bao nhiêu điểm',
      blocks: [
        {
          kind: 'table',
          title: 'Từ biên trước thuế quý trước đến quý này (điểm % doanh thu)',
          columns: [
            { key: 'item', label: 'Tác động' },
            { key: 'pts', label: 'Điểm %', align: 'right' },
            { key: 'share', label: 'Tỷ trọng', align: 'right' },
          ],
          rows: [
            { item: 'Biên trước thuế quý trước', pts: '11,0', share: '—' },
            { item: 'Giá vốn tăng (biên gộp)', pts: '−1,0', share: '25%' },
            { item: 'Chi phí bán hàng tăng', pts: '−3,0', share: '75%' },
            { item: 'Chi phí quản lý giảm theo % doanh thu', pts: '+0,5', share: '−12,5%' },
            { item: 'Lãi vay tăng', pts: '−0,5', share: '12,5%' },
            { item: 'Biên trước thuế quý này', pts: '7,0', share: '—' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: '11,0 − 1,0 − 3,0 + 0,5 − 0,5 = 7,0. Chi phí bán hàng chiếm 3,0 trong 4,0 điểm giảm (75%). Biên ròng = biên trước thuế × 0,8, nên −4,0 điểm thành −3,2 điểm.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Chi phí bán hàng tăng nhanh hơn doanh thu có thể là chi phí **mua doanh thu**: khuyến mãi, quảng cáo, hoa hồng. Hãy kiểm tra doanh thu tăng thêm có đáng với phần chi phí tăng thêm không (chi phí bán hàng tăng 560, lợi nhuận gộp tăng 480).',
        },
        {
          kind: 'quiz',
          id: 'gross-margin-vs-net-margin-reading-q3',
          question: 'Chi phí bán hàng tăng thêm 560 triệu trong khi lợi nhuận gộp tăng thêm 480 triệu. Điều này nói gì?',
          options: [
            { id: 'a', text: 'Phần doanh thu tăng thêm chưa bù được chi phí bán hàng tăng thêm.', correct: true, explain: 'Đúng. Mỗi đồng chi thêm cho bán hàng chỉ tạo 0,86 đồng lợi nhuận gộp (480 ÷ 560); tăng trưởng đang kém hiệu quả.' },
            { id: 'b', text: 'Chi phí bán hàng tăng là tốt vì doanh thu tăng.', explain: 'Doanh thu tăng chưa đủ; phải so lợi nhuận gộp tăng thêm với chi phí tăng thêm.' },
            { id: 'c', text: 'Nên tăng thêm chi phí bán hàng để tăng doanh thu nữa.', explain: 'Khi hiệu quả cận biên dưới 1, tăng thêm chi phí chỉ làm lợi nhuận giảm thêm.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: ưu tiên xử lý tầng chi phí lớn nhất',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận:** biên gộp chỉ giải thích 1 trong 4 điểm giảm biên trước thuế. **Chi phí bán hàng (−3,0 điểm)** là nguyên nhân chính, lãi vay (−0,5) thứ hai. Ưu tiên rà soát chi phí bán hàng theo kênh trước khi bàn đến giá vốn.',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Phân rã chi phí bán hàng theo kênh/chiến dịch và so với doanh thu tăng thêm của từng kênh', owner: 'Trưởng kinh doanh + Finance', metric: 'Chi phí bán hàng ÷ doanh thu', threshold: 'Về ≤ 11% trong 2 quý (quý trước 10%)' },
            { action: 'Cắt hoặc điều chỉnh chiến dịch có lợi nhuận gộp tăng thêm thấp hơn chi phí', owner: 'Marketing', metric: 'Lợi nhuận gộp tăng thêm ÷ chi phí tăng thêm', threshold: '≥ 1,5 lần' },
            { action: 'Rà lãi vay và kế hoạch trả nợ khi lãi vay tăng nhanh hơn doanh thu', owner: 'Kế toán trưởng', metric: 'Lãi vay ÷ doanh thu', threshold: '≤ 2,0%' },
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
            { title: 'Chỉ nhìn biên gộp', why: 'Biên gộp không chứa chi phí bán hàng, quản lý, lãi vay; lợi nhuận có thể vỡ ở tầng dưới.', instead: 'Đọc từng tầng đến biên ròng.' },
            { title: 'Nhìn số tuyệt đối', why: 'Doanh thu tăng thì chi phí tăng theo là bình thường; số tuyệt đối không nói hiệu quả.', instead: 'Quy về % doanh thu và so với kỳ trước.' },
            { title: 'Cho rằng tăng doanh thu luôn tốt', why: 'Tăng doanh thu bằng chi phí quá cao có thể làm lợi nhuận giảm.', instead: 'So lợi nhuận gộp tăng thêm với chi phí tăng thêm.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Đọc báo cáo theo tầng (gộp, EBIT, trước thuế, ròng) và quy từng tầng về % doanh thu.',
    'Cầu nối điểm % cho thấy tầng nào đóng góp bao nhiêu vào sụt giảm biên; ở đây là chi phí bán hàng.',
    'Tăng doanh thu chỉ tốt khi lợi nhuận gộp tăng thêm lớn hơn chi phí tăng thêm.',
  ],
  references: [
    { title: 'IAS 1 Presentation of Financial Statements', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-1-presentation-of-financial-statements/', note: 'Chuẩn mực quốc tế về cách trình bày báo cáo tài chính, gồm báo cáo kết quả kinh doanh.' },
    { title: 'Profit margin', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Profit_margin', note: 'Các loại biên lợi nhuận: gộp, hoạt động, ròng và cách tính.' },
  ],
}
