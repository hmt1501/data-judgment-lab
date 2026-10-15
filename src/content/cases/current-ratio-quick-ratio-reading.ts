import type { CaseStudy } from '../types'

/*
 * Số liệu mock (triệu đ), đã kiểm tra khớp nhau:
 *   Công ty A: tài sản ngắn hạn 600 = tiền 60 + phải thu 140 + tồn kho 400 · nợ ngắn hạn 400
 *     hiện hành 600 ÷ 400 = 1,5 · nhanh (60 + 140) ÷ 400 = 0,5 · giá vốn quý 600 → ngày tồn kho 400 ÷ 600 × 90 = 60 ngày
 *   Công ty B: tài sản ngắn hạn 600 = tiền 150 + phải thu 250 + tồn kho 200 · nợ ngắn hạn 400
 *     hiện hành 1,5 · nhanh (150 + 250) ÷ 400 = 1,0
 *   A, tồn kho 150 chậm luân chuyển chỉ thu hồi 50% (giảm giá trị 75): TSNH 525 → hiện hành 1,31 · nhanh 0,5 không đổi
 *   B trả 100 nợ nhà cung cấp bằng tiền cuối kỳ: TSNH 500 · nợ NH 300 → hiện hành 1,67 · nhanh 300 ÷ 300 = 1,0
 */
export const currentRatioQuickRatioReading: CaseStudy = {
  id: 'current-ratio-quick-ratio-reading',
  title: 'Hai công ty cùng tỷ số thanh toán hiện hành 1,5: một bên chỉ có tồn kho',
  domain: 'accounting',
  level: 'fresher',
  minutes: 9,
  skills: ['financial-statements', 'cash-flow', 'metric-decomposition'],
  question: 'Công ty A và B cùng có tỷ số thanh toán hiện hành 1,5. Khả năng trả nợ ngắn hạn của hai công ty có như nhau không, và vì sao tỷ số nhanh quan trọng?',
  summary: 'Phân biệt tỷ số hiện hành và tỷ số nhanh, đọc chất lượng tài sản ngắn hạn (tiền, phải thu, tồn kho) và nhận ra các cách làm đẹp chỉ số.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là chuyên viên của một ngân hàng đang xem hồ sơ hai nhà phân phối cùng quy mô. Báo cáo của cả hai ghi **tỷ số thanh toán hiện hành 1,5**. Trưởng phòng hỏi: "Vậy rủi ro thanh khoản như nhau đúng không?" Bạn mở chi tiết tài sản ngắn hạn để trả lời.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Công ty A, B và các con số là **giả định**. Công thức tỷ số hiện hành và tỷ số nhanh là chuẩn; ngưỡng "tốt/xấu" phụ thuộc ngành và cần so với chuẩn ngành.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Tỷ số hiện hành A', value: '1,5' },
            { label: 'Tỷ số hiện hành B', value: '1,5' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: tài sản nào trả nợ được nhanh',
      blocks: [
        {
          kind: 'formula',
          expression: 'Hiện hành = Tài sản ngắn hạn ÷ Nợ ngắn hạn · Nhanh = (Tiền + Phải thu) ÷ Nợ ngắn hạn',
          note: 'Tỷ số nhanh loại hàng tồn kho (thường chậm và khó bán đủ giá để trả nợ). Một số định nghĩa còn trừ cả chi phí trả trước; cần ghi rõ công thức đang dùng.',
        },
        {
          kind: 'quiz',
          id: 'current-ratio-quick-ratio-reading-q1',
          question: 'Vì sao tỷ số nhanh loại hàng tồn kho khỏi tử số?',
          options: [
            { id: 'a', text: 'Vì tồn kho có thể chậm bán hoặc bán dưới giá vốn, nên không chắc đổi ra tiền kịp lúc trả nợ.', correct: true, explain: 'Đúng. Tiền và phải thu gần với tiền hơn; tồn kho phải qua bước bán và thu tiền mới có tiền.' },
            { id: 'b', text: 'Vì tồn kho không phải tài sản.', explain: 'Tồn kho là tài sản. Nó chỉ không phải tài sản "nhanh".' },
            { id: 'c', text: 'Vì tồn kho luôn không có giá trị.', explain: 'Tồn kho có giá trị, nhưng giá trị thu hồi và thời gian thu hồi không chắc chắn.' },
          ],
        },
      ],
    },
    {
      id: 'quality',
      kind: 'analysis',
      title: 'Bước 1 — Mở chi tiết tài sản ngắn hạn',
      blocks: [
        {
          kind: 'table',
          title: 'Công ty A và B (triệu đ)',
          columns: [
            { key: 'item', label: 'Khoản mục' },
            { key: 'a', label: 'Công ty A', align: 'right' },
            { key: 'b', label: 'Công ty B', align: 'right' },
          ],
          rows: [
            { item: 'Tiền', a: '60', b: '150' },
            { item: 'Phải thu khách hàng', a: '140', b: '250' },
            { item: 'Hàng tồn kho', a: '400', b: '200' },
            { item: 'Tài sản ngắn hạn', a: '600', b: '600' },
            { item: 'Nợ ngắn hạn', a: '400', b: '400' },
            { item: 'Tỷ số hiện hành', a: '1,5', b: '1,5' },
            { item: 'Tỷ số nhanh', a: '0,5', b: '1,0' },
          ],
          highlight: [
            { row: 2, tone: 'warning' },
            { row: 6, tone: 'negative' },
          ],
          caption: 'A: (60 + 140) ÷ 400 = 0,5. B: (150 + 250) ÷ 400 = 1,0. Cùng tỷ số hiện hành nhưng A cần bán hết tồn kho mới đủ trả nợ.',
        },
        {
          kind: 'chart',
          title: 'Hai tỷ số của A và B',
          type: 'bar',
          xKey: 'ratio',
          series: [
            { key: 'a', label: 'Công ty A' },
            { key: 'b', label: 'Công ty B' },
          ],
          data: [
            { ratio: 'Hiện hành', a: 1.5, b: 1.5 },
            { ratio: 'Nhanh', a: 0.5, b: 1.0 },
          ],
          caption: 'Hai cột giống nhau ở bên trái, khác nhau ở bên phải.',
        },
        {
          kind: 'quiz',
          id: 'current-ratio-quick-ratio-reading-q2',
          question: 'Tồn kho của A (400) tương đương 60 ngày giá vốn (400 ÷ 600 × 90). Điều này ảnh hưởng thế nào đến đánh giá?',
          options: [
            { id: 'a', text: 'A cần khoảng 60 ngày bán hàng để chuyển tồn kho thành doanh thu, rồi còn phải thu tiền; áp lực nợ ngắn hạn lớn hơn B.', correct: true, explain: 'Đúng. Tồn kho phải qua hai bước (bán, thu tiền) mới thành tiền; thời gian này làm khả năng trả nợ ngắn hạn yếu hơn bề ngoài.' },
            { id: 'b', text: 'Không ảnh hưởng vì tồn kho luôn bán được ngay.', explain: 'Không có gì bảo đảm bán ngay, nhất là hàng chậm luân chuyển.' },
            { id: 'c', text: 'A tốt hơn vì có nhiều tồn kho.', explain: 'Nhiều tồn kho làm tăng tỷ số hiện hành nhưng thường làm xấu thanh khoản thực.' },
          ],
        },
      ],
    },
    {
      id: 'window',
      kind: 'analysis',
      title: 'Bước 2 — Khi chỉ số bị làm đẹp hoặc tài sản mất giá',
      blocks: [
        {
          kind: 'table',
          title: 'Hai tình huống làm tỷ số thay đổi',
          columns: [
            { key: 'case', label: 'Tình huống' },
            { key: 'cur', label: 'Hiện hành', align: 'right' },
            { key: 'quick', label: 'Nhanh', align: 'right' },
            { key: 'note', label: 'Ý nghĩa' },
          ],
          rows: [
            { case: 'A: tồn kho chậm 150 chỉ thu hồi 50% (giảm giá trị 75)', cur: '1,31', quick: '0,50', note: 'Hiện hành giảm, nhanh không đổi vì không tính tồn kho' },
            { case: 'B: trả 100 nợ nhà cung cấp bằng tiền sát cuối kỳ', cur: '1,67', quick: '1,00', note: 'Hiện hành tăng dù không có gì cải thiện' },
          ],
          caption: 'A: (600 − 75) ÷ 400 = 1,31. B: (600 − 100) ÷ (400 − 100) = 1,67; nhanh (400 − 100) ÷ 300 = 1,0. Khi tỷ số lớn hơn 1, trả bớt nợ bằng tiền làm tỷ số hiện hành tăng chỉ vì tử và mẫu cùng giảm một lượng.',
        },
        {
          kind: 'quiz',
          id: 'current-ratio-quick-ratio-reading-q3',
          question: 'Ngân hàng nên làm gì khi thấy tỷ số hiện hành của một khách hàng tăng mạnh ngay cuối kỳ báo cáo?',
          options: [
            { id: 'a', text: 'Coi là dấu hiệu khỏe mạnh.', explain: 'Có thể chỉ là kỹ thuật cuối kỳ (trả nợ trước rồi vay lại). Cần kiểm tra diễn biến trong kỳ.' },
            { id: 'b', text: 'So với số trung bình các tháng, xem tiền và nợ biến động trong kỳ và dòng tiền thực.', correct: true, explain: 'Đúng. Chỉ số một thời điểm dễ bị tác động; số liệu nhiều thời điểm và dòng tiền phản ánh sức khỏe thật.' },
            { id: 'c', text: 'Bỏ qua tỷ số thanh toán.', explain: 'Tỷ số vẫn hữu ích khi đọc đúng cách và đối chiếu với dữ liệu khác.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: đọc thanh khoản đầy đủ',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận cho trưởng phòng:** cùng tỷ số hiện hành 1,5 nhưng B có tỷ số nhanh 1,0 còn A chỉ 0,5, và tồn kho của A tương đương 60 ngày. Rủi ro thanh khoản của A cao hơn. Đề nghị A bổ sung dự báo dòng tiền và danh sách tồn kho theo tuổi hàng.',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Báo cáo cả tỷ số hiện hành và tỷ số nhanh kèm cấu phần tài sản ngắn hạn', owner: 'Chuyên viên tín dụng', metric: 'Tỷ số nhanh', threshold: '≥ 0,8 hoặc có giải trình theo ngành' },
            { action: 'Yêu cầu bảng tồn kho theo tuổi hàng và kế hoạch xử lý hàng chậm luân chuyển', owner: 'Khách hàng + Chuyên viên tín dụng', metric: 'Tỷ lệ tồn kho trên 90 ngày', threshold: '≤ 20% tồn kho' },
            { action: 'Lấy số liệu trung bình ba tháng cuối và dự báo dòng tiền thay vì chỉ số cuối kỳ', owner: 'Chuyên viên tín dụng', metric: 'Tỷ số nhanh trung bình quý', threshold: 'Gần với số cuối kỳ (chênh ≤ 0,2)' },
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
            { title: 'Chỉ nhìn tỷ số hiện hành', why: 'Tồn kho nhiều làm tỷ số đẹp nhưng không giúp trả nợ nhanh.', instead: 'Đọc thêm tỷ số nhanh và cấu phần tài sản.' },
            { title: 'Cho rằng tỷ số cao luôn tốt', why: 'Tỷ số quá cao có thể do tích tụ tồn kho hoặc phải thu xấu.', instead: 'So với chuẩn ngành và xem chất lượng tài sản.' },
            { title: 'Tin số liệu một thời điểm', why: 'Có thể bị làm đẹp cuối kỳ bằng trả nợ hoặc đổi cấu phần.', instead: 'Dùng số trung bình nhiều thời điểm và dòng tiền.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Tỷ số hiện hành tính cả tồn kho; tỷ số nhanh chỉ tính tiền và phải thu nên đọc thanh khoản sát hơn.',
    'Cùng một tỷ số có thể che các cấu phần tài sản chất lượng rất khác nhau.',
    'Số liệu một thời điểm dễ bị làm đẹp; đối chiếu nhiều thời điểm và dòng tiền.',
  ],
  references: [
    { title: 'Current ratio', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Current_ratio', note: 'Định nghĩa tỷ số thanh toán hiện hành và hạn chế khi đọc.' },
    { title: 'Quick ratio', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Quick_ratio', note: 'Tỷ số nhanh và vì sao loại hàng tồn kho.' },
    { title: 'IAS 1 Presentation of Financial Statements', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-1-presentation-of-financial-statements/', note: 'Chuẩn mực quy định cách phân loại tài sản và nợ ngắn hạn.' },
  ],
}
