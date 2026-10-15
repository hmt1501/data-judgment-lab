import type { CaseStudy } from '../types'

/*
 * Số liệu mock (danh mục giả định), đã kiểm tra khớp nhau:
 *   Danh mục A: 100 → 130 sau 3 năm = +30% · chia 3 = 10%/năm (đơn) · CAGR = 1,3^(1/3) − 1 = 9,14% (1,0914³ ≈ 1,3000)
 *   Đường đi thực: 100 → 150 → 105 → 130 · lợi suất từng năm +50%, −30%, +23,81% (130 ÷ 105 − 1)
 *   Trung bình cộng 3 năm = (50 − 30 + 23,81) ÷ 3 = 14,60% (cao hơn CAGR 9,14%)
 *   Lãi đơn 10%/năm 3 năm: 100 → 110 → 120 → 130 · lãi kép 10%/năm: 1,1³ = 1,331 → +33,1%
 *   Cùng mức 9,14%/năm: 100 → 109,14 → 119,12 → 130,00
 *   Danh mục B: +12% trong 1 năm = 12%/năm; lặp lại 3 năm: 1,12³ = 1,4049 → +40,5%
 */
export const returnSimpleVsAnnualized: CaseStudy = {
  id: 'return-simple-vs-annualized',
  title: 'Lãi 30% sau 3 năm có phải 10%/năm không?',
  domain: 'securities',
  level: 'fresher',
  minutes: 9,
  skills: ['metric-definition', 'valuation', 'portfolio-risk'],
  question: 'Danh mục tăng 30% sau 3 năm, danh mục khác tăng 12% trong 1 năm. Danh mục nào tốt hơn, và "10% mỗi năm" có đúng không?',
  summary: 'Phân biệt lợi suất tổng, trung bình cộng và CAGR; hiểu vì sao lợi suất kép không bằng lãi đơn chia đều và so sánh các khoản đầu tư khác kỳ hạn.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Một người bạn khoe: *"Danh mục của mình tăng 30% sau 3 năm, tức 10% mỗi năm, hơn gửi tiết kiệm."* Người khác lại khoe quỹ mình *"được 12% trong năm nay"*. Họ hỏi bạn: "Ai giỏi hơn?" Muốn so sánh, bạn phải đưa hai con số về cùng một cơ sở.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Các danh mục và con số đều là **giả định**, không phải khuyến nghị đầu tư. Công thức lợi suất và CAGR là chuẩn. Phí, thuế và lạm phát được bỏ qua cho đơn giản.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Danh mục A: sau 3 năm', value: '+30%', tone: 'positive' },
            { label: 'Danh mục B: sau 1 năm', value: '+12%', tone: 'positive' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: ba cách nói về lợi suất',
      blocks: [
        {
          kind: 'formula',
          expression: 'Lợi suất tổng = Giá trị cuối ÷ Giá trị đầu − 1 · CAGR = (Giá trị cuối ÷ Giá trị đầu)^(1 ÷ số năm) − 1',
          note: 'CAGR (tăng trưởng kép hằng năm) là mức lãi suất cố định mỗi năm cho ra cùng kết quả cuối kỳ. Trung bình cộng các năm không có tính chất đó khi lợi suất dao động.',
        },
        {
          kind: 'quiz',
          id: 'return-simple-vs-annualized-q1',
          question: 'Danh mục tăng tổng cộng 30% sau 3 năm. CAGR gần nhất với giá trị nào?',
          options: [
            { id: 'a', text: '10,0%/năm, vì 30% ÷ 3.', explain: 'Chia đều là lãi đơn. Lãi từ năm sau được tính trên cả lãi năm trước nên mức hằng năm thấp hơn 10%.' },
            { id: 'b', text: '9,1%/năm, vì 1,3^(1/3) − 1.', correct: true, explain: 'Đúng. Kiểm tra: 1,0914³ ≈ 1,30. CAGR thấp hơn 10% vì lãi được tái đầu tư.' },
            { id: 'c', text: '13,0%/năm.', explain: 'Không có cơ sở tính nào cho 13%. Nó vượt cả mức lãi đơn.' },
          ],
        },
      ],
    },
    {
      id: 'compare',
      kind: 'analysis',
      title: 'Bước 1 — Đưa hai danh mục về cùng một cơ sở',
      blocks: [
        {
          kind: 'table',
          title: 'So sánh danh mục A và B',
          columns: [
            { key: 'item', label: 'Cách đọc' },
            { key: 'a', label: 'Danh mục A (3 năm)', align: 'right' },
            { key: 'b', label: 'Danh mục B (1 năm)', align: 'right' },
          ],
          rows: [
            { item: 'Lợi suất tổng', a: '+30,0%', b: '+12,0%' },
            { item: 'Chia đều theo năm (đơn)', a: '10,0%/năm', b: '12,0%/năm' },
            { item: 'CAGR', a: '9,14%/năm', b: '12,0%/năm' },
            { item: 'Nếu B lặp lại 12%/năm trong 3 năm', a: '—', b: '+40,5% (1,12³ − 1)' },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: 'Muốn so sánh khác kỳ hạn, dùng CAGR. B (12%/năm) cao hơn A (9,14%/năm), nhưng B mới chỉ có 1 năm dữ liệu nên chưa chắc lặp lại.',
        },
        {
          kind: 'chart',
          title: 'Giá trị 100 đồng sau 3 năm: lãi đơn 10% vs CAGR 9,14%',
          type: 'line',
          xKey: 'year',
          series: [
            { key: 'simple', label: 'Lãi đơn 10%/năm' },
            { key: 'cagr', label: 'Tăng kép 9,14%/năm' },
          ],
          data: [
            { year: 'Năm 0', simple: 100, cagr: 100 },
            { year: 'Năm 1', simple: 110, cagr: 109.14 },
            { year: 'Năm 2', simple: 120, cagr: 119.12 },
            { year: 'Năm 3', simple: 130, cagr: 130 },
          ],
          caption: 'Hai đường gặp nhau ở cuối năm 3 (130) nhưng đường kép thấp hơn ở các năm giữa, vì lãi kép dồn về sau.',
        },
        {
          kind: 'quiz',
          id: 'return-simple-vs-annualized-q2',
          question: 'Muốn so sánh khoản đầu tư 12 tháng với khoản đầu tư 36 tháng, cách làm đúng là gì?',
          options: [
            { id: 'a', text: 'So trực tiếp lợi suất tổng (12% với 30%): 30% lớn hơn nên khoản 36 tháng tốt hơn.', explain: 'Khoản 36 tháng có thời gian dài gấp 3 lần. Không thể so lợi suất tổng của hai kỳ hạn khác nhau.' },
            { id: 'b', text: 'Quy cả hai về CAGR (lãi suất kép hằng năm) rồi so sánh.', correct: true, explain: 'Đúng. CAGR đưa các kỳ hạn về cùng đơn vị năm: A 9,14%/năm so với B 12%/năm.' },
            { id: 'c', text: 'Lấy lợi suất tổng của khoản 12 tháng nhân 3.', explain: 'Nhân 3 là lãi đơn, bỏ qua tái đầu tư; chênh lệch lớn khi lợi suất cao.' },
          ],
        },
      ],
    },
    {
      id: 'path',
      kind: 'analysis',
      title: 'Bước 2 — Trung bình cộng đánh lừa khi lợi suất dao động',
      blocks: [
        {
          kind: 'text',
          md: 'Danh mục A thật ra đi qua một đường nhiều sóng: 100 → 150 → 105 → 130. Lợi suất từng năm là **+50%, −30%, +23,81%**. Trung bình cộng nghe rất ấn tượng, nhưng tiền thật của bạn chỉ tăng 30%.',
        },
        {
          kind: 'table',
          title: 'Đường đi của danh mục A',
          columns: [
            { key: 'year', label: 'Năm' },
            { key: 'value', label: 'Giá trị cuối năm', align: 'right' },
            { key: 'ret', label: 'Lợi suất năm', align: 'right' },
          ],
          rows: [
            { year: 'Đầu', value: '100', ret: '—' },
            { year: 'Năm 1', value: '150', ret: '+50,00%' },
            { year: 'Năm 2', value: '105', ret: '−30,00%' },
            { year: 'Năm 3', value: '130', ret: '+23,81%' },
            { year: 'Trung bình cộng', value: '—', ret: '14,60%' },
            { year: 'CAGR', value: '—', ret: '9,14%' },
          ],
          highlight: [
            { row: 4, tone: 'negative' },
            { row: 5, tone: 'positive' },
          ],
          caption: '(50 − 30 + 23,81) ÷ 3 = 14,60%, nhưng 100 × 1,146³ ≈ 150, không phải 130. Dùng CAGR 9,14% mới cho đúng kết quả cuối.',
        },
        {
          kind: 'quiz',
          id: 'return-simple-vs-annualized-q3',
          question: 'Vì sao trung bình cộng các lợi suất năm (14,6%) cao hơn CAGR (9,14%) ở danh mục A?',
          options: [
            { id: 'a', text: 'Vì mức giảm 30% xảy ra trên nền giá cao (150), làm mất nhiều tiền hơn mức tăng cùng tỷ lệ trên nền thấp.', correct: true, explain: 'Đúng. Lợi suất dao động mạnh làm trung bình cộng cao hơn lợi suất kép. Ví dụ +20% rồi −20% cho trung bình 0% nhưng tiền còn 96%.' },
            { id: 'b', text: 'Vì CAGR luôn thấp hơn trung bình cộng do làm tròn.', explain: 'Không phải làm tròn. Khác biệt đến từ cách lợi suất nhân với nhau, và nó lớn khi biến động lớn.' },
            { id: 'c', text: 'Vì dữ liệu năm 2 bị sai.', explain: 'Dữ liệu khớp: 100 → 150 → 105 → 130.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: cách báo cáo lợi suất cho khách',
      blocks: [
        {
          kind: 'text',
          md: '**Trả lời bạn:** "Danh mục của bạn tăng 30% sau 3 năm, tương đương 9,14%/năm kép, không phải 10%. Quỹ kia 12% mới chỉ trong 1 năm; cần xem thêm nhiều năm và mức biến động trước khi kết luận ai giỏi hơn."',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Báo cáo lợi suất bằng CAGR khi so khác kỳ hạn, kèm lợi suất từng năm', owner: 'Analyst / tư vấn', metric: 'CAGR và lợi suất năm', threshold: 'Luôn hiển thị cả hai' },
            { action: 'Ghi rõ kỳ hạn, phí, thuế và mốc thời gian của mọi con số lợi suất', owner: 'Analyst', metric: 'Số mục thông tin đi kèm', threshold: '100% báo cáo có kỳ hạn' },
            { action: 'Thêm thước đo biến động (mức sụt giảm lớn nhất) bên cạnh lợi suất', owner: 'Quản lý rủi ro', metric: 'Mức sụt giảm lớn nhất', threshold: 'Hiển thị cạnh CAGR' },
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
            { title: 'Chia lợi suất tổng cho số năm', why: 'Đó là lãi đơn; bỏ qua tái đầu tư nên sai số tăng theo thời gian và lợi suất.', instead: 'Dùng CAGR.' },
            { title: 'Lấy trung bình cộng các lợi suất năm', why: 'Cao hơn kết quả thực khi lợi suất dao động mạnh.', instead: 'Dùng lợi suất kép (CAGR) để tóm tắt một chuỗi.' },
            { title: 'So lợi suất của hai kỳ hạn khác nhau', why: '30% trong 3 năm khác 12% trong 1 năm.', instead: 'Quy về cùng đơn vị năm trước khi so.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Lợi suất tổng chưa nói kỳ hạn; chia đều là lãi đơn và thường sai; dùng CAGR để so sánh.',
    'Trung bình cộng các lợi suất năm cao hơn lợi suất kép khi biến động lớn.',
    'So sánh khác kỳ hạn phải quy về cùng một đơn vị năm và xem thêm mức biến động.',
  ],
  references: [
    { title: 'Compound annual growth rate', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Compound_annual_growth_rate', note: 'Định nghĩa CAGR, công thức và hạn chế khi dùng cho chuỗi dao động.' },
    { title: 'Rate of return', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Rate_of_return', note: 'Các cách tính lợi suất: đơn, kép, trung bình.' },
  ],
}
