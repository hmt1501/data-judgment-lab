import type { Explainer } from '../../../shared/explainer'

export const calendarEffectsSeasonalityMyths: Explainer = {
  id: 'calendar-effects-seasonality-myths',
  slug: 'calendar-effects-seasonality-myths',
  question: 'Các "hiệu ứng lịch" trên thị trường (hiệu ứng tháng Giêng, "bán tháng 5") là thật hay do chọn mẫu?',
  title: 'Hiệu ứng lịch trên thị trường: thật hay do chọn mẫu',
  topic: 'macro',
  tldr: 'Nhiều quy luật theo lịch (tháng Giêng, cuối tuần, "bán tháng 5") được nhắc đến như thể chắc chắn. Nhưng nếu thử đủ nhiều mẫu hình trên cùng một dữ liệu, **luôn có vài mẫu "có ý nghĩa" chỉ do ngẫu nhiên**. Nghiên cứu cho thấy nhiều hiệu ứng đã yếu hoặc biến mất sau khi được công bố. Hãy xem chúng như giả thuyết cần kiểm định ngoài mẫu, không phải quy tắc giao dịch.',
  keyPoints: [
    'Theo Wikipedia ("Calendar effect", đọc 15/10/2026), các hiệu ứng lịch thường được nhắc gồm hiệu ứng tháng Giêng, "bán tháng 5", hiệu ứng cuối tuần; bài cũng ghi nhận một nghiên cứu năm 2001 lập luận không có bằng chứng ý nghĩa thống kê cho hiệu ứng lịch và cho rằng các mẫu hình là kết quả của "đào dữ liệu", dù có kết quả khác mâu thuẫn và tranh luận vẫn tiếp diễn.',
    'Theo William Schwert (NBER, "Anomalies and Market Efficiency"): hiệu ứng cuối tuần cùng các dị thường khác (quy mô, giá trị, cổ tức) dường như **yếu đi hoặc biến mất** sau khi các bài nghiên cứu ghi nhận chúng được công bố; hiệu ứng đầu năm ở cổ phiếu vốn hóa nhỏ yếu đi nhưng "có một số bằng chứng vẫn tồn tại"; ông cho rằng dị thường có thể "hiện ra nhiều hơn thực tế".',
    'Lý do toán học của rủi ro đào dữ liệu (ví dụ giả định): thử 20 quy tắc lịch độc lập, mỗi quy tắc kiểm định ở mức ý nghĩa 5%, xác suất ít nhất một quy tắc "có ý nghĩa" chỉ do ngẫu nhiên là 1 − 0,95^20 ≈ 64%.',
    'Thị trường thay đổi: khi nhiều người biết và giao dịch theo một mẫu, lợi nhuận bất thường bị bào mòn; Schwert cho rằng hoạt động giao dịch của giới thực hành có thể làm xói mòn cơ hội này.',
    'Một mẫu hình có đáng tin hơn khi có **cơ chế giải thích trước** (ví dụ dòng tiền cuối tháng), được kiểm lại trên **dữ liệu chưa dùng để tìm ra nó** (thị trường khác, giai đoạn khác) và còn lại sau khi tính chi phí giao dịch.',
  ],
  causalChain: [
    { from: 'Nhà phân tích thử nhiều mẫu lịch trên cùng dữ liệu', to: 'Tìm thấy vài mẫu "đẹp" do tình cờ', mechanism: 'Càng thử nhiều giả thuyết, xác suất có ít nhất một kết quả có ý nghĩa thống kê giả càng cao.' },
    { from: 'Mẫu hình được công bố hoặc lan truyền', to: 'Nhiều người giao dịch theo', mechanism: 'Giao dịch theo mẫu làm giá điều chỉnh sớm hơn, khiến mức sinh lời trước đây nhỏ đi.' },
    { from: 'Chi phí giao dịch, thuế và trượt giá', to: 'Lợi nhuận ròng thấp hơn lý thuyết', mechanism: 'Chiến lược đảo danh mục theo lịch phát sinh nhiều giao dịch, nên biên lợi nhuận nhỏ dễ biến mất.' },
    { from: 'Mẫu hình còn xuất hiện ở dữ liệu ngoài mẫu và có cơ chế', to: 'Đáng tin hơn nhưng vẫn không đảm bảo', mechanism: 'Kiểm định ngoài mẫu giảm khả năng do ngẫu nhiên, nhưng điều kiện thị trường thay đổi theo thời gian.' },
    { from: 'Nhà đầu tư dựa vào "quy luật" tháng cụ thể', to: 'Quyết định sai lệch và rủi ro bỏ lỡ', mechanism: 'Bán hoặc né thị trường theo lịch có thể bỏ lỡ các giai đoạn tăng giá hoặc tạo chi phí không cần thiết.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân Việt Nam', effect: 'Bài đăng và tin đồn về "tháng tốt/xấu" thường được dùng làm lý do giao dịch; cần coi là giả thuyết và so với chi phí giao dịch, thuế, phí.', direction: 'down' },
    { group: 'Nhà đầu tư dài hạn mua đều đặn', effect: 'Không cần canh lịch; chiến lược đều đặn tránh phụ thuộc vào mẫu hình không chắc chắn.', direction: 'up' },
    { group: 'Sinh viên, người học phân tích dữ liệu', effect: 'Ví dụ tốt về đào dữ liệu: kiểm tra ngoài mẫu, điều chỉnh đa kiểm định, và nhìn vào kích thước hiệu ứng thay vì chỉ p-value.', direction: 'up' },
    { group: 'Thị trường chứng khoán Việt Nam nhỏ hơn và có cấu trúc riêng', effect: 'Chuỗi dữ liệu ngắn, thanh khoản và cấu trúc nhà đầu tư khác nhau nên kết quả từ thị trường lớn không áp dụng nguyên vẹn; cần kiểm định riêng.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Chuỗi lợi suất lịch sử theo tháng/ngày của chỉ số', why: 'Nguyên liệu để tự kiểm tra mẫu hình ở giai đoạn dài và chia mẫu.', where: 'Dữ liệu giá chỉ số của sở giao dịch chứng khoán và nhà cung cấp dữ liệu' },
    { name: 'Số giả thuyết đã thử', why: 'Cần khi điều chỉnh đa kiểm định; càng nhiều càng nên nghi ngờ kết quả đơn lẻ.', where: 'Ghi chép của chính người phân tích' },
    { name: 'Kết quả ngoài mẫu (giai đoạn hoặc thị trường chưa dùng)', why: 'Phép thử quan trọng nhất cho một mẫu hình.', where: 'Chia dữ liệu thành hai phần hoặc dùng thị trường khác' },
    { name: 'Chi phí giao dịch ước tính', why: 'Quyết định liệu biên lợi nhuận nhỏ còn lại sau phí.', where: 'Biểu phí của công ty chứng khoán; thuế giao dịch theo quy định hiện hành' },
  ],
  counterpoints: [
    'Không nên kết luận tất cả hiệu ứng lịch đều vô nghĩa: một số có cơ chế hợp lý (như thanh toán lương, dòng vốn quỹ cuối kỳ) và bằng chứng không thống nhất; Wikipedia ghi cả nghiên cứu mâu thuẫn.',
    'Việc một hiệu ứng yếu đi sau khi được công bố có thể do nhiều lý do (thị trường học, thay đổi cấu trúc, dữ liệu), chưa chứng minh nó vốn không có.',
    'Con số 64% là phép tính xác suất cho các kiểm định độc lập; thực tế các mẫu lịch tương quan nhau nên tỷ lệ chính xác khác, nhưng hướng của vấn đề vẫn giữ.',
  ],
  glossary: [
    { term: 'Hiệu ứng lịch', definition: 'Mẫu hình lợi suất lặp lại theo thời điểm trong tuần, tháng hoặc năm.' },
    { term: 'Đào dữ liệu (data snooping)', definition: 'Thử nhiều mẫu hình trên cùng dữ liệu rồi báo cáo những mẫu "có ý nghĩa".' },
    { term: 'Kiểm định ngoài mẫu', definition: 'Kiểm tra mẫu hình trên dữ liệu không dùng để tìm ra nó.' },
    { term: 'Dị thường thị trường', definition: 'Mẫu hình lợi suất dường như mâu thuẫn với thị trường hiệu quả.' },
    { term: 'Đa kiểm định', definition: 'Làm nhiều kiểm định thống kê cùng lúc, làm tăng xác suất dương tính giả.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'calendar-effects-seasonality-myths-q',
    question: 'Một bạn thử 20 quy tắc lịch khác nhau trên 15 năm dữ liệu và thấy một quy tắc có p-value 0,03. Kết luận hợp lý nhất?',
    options: [
      { id: 'a', text: 'Quy tắc đó chắc chắn có thật vì p < 0,05.', explain: 'Khi thử 20 quy tắc, xác suất có ít nhất một kết quả p < 0,05 do ngẫu nhiên khoảng 64%.' },
      { id: 'b', text: 'Đây là giả thuyết cần kiểm tra ngoài mẫu và điều chỉnh cho việc thử nhiều lần, chưa phải bằng chứng.', correct: true, explain: 'Đúng. Điều chỉnh đa kiểm định và kiểm tra trên dữ liệu khác giúp phân biệt mẫu hình thật với may rủi.' },
      { id: 'c', text: 'Mọi hiệu ứng lịch đều chắc chắn do ngẫu nhiên.', explain: 'Kết luận ngược cũng quá chắc: bằng chứng không thống nhất và một số hiệu ứng có cơ chế hợp lý.' },
    ],
  },
  sources: [
    { title: 'Anomalies and Market Efficiency (NBER Working Paper 9277)', publisher: 'National Bureau of Economic Research (G. William Schwert)', url: 'https://www.nber.org/papers/w9277' },
    { title: 'Calendar effect', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Calendar_effect' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 195,
}
