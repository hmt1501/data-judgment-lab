import type { Explainer } from '../../../shared/explainer'

export const homeLoanPrepaymentRefinanceMath: Explainer = {
  id: 'home-loan-prepayment-refinance-math',
  slug: 'home-loan-prepayment-refinance-math',
  question: 'Trả nợ trước hạn hay tái cấp vốn khoản vay mua nhà: tính thế nào cho đúng?',
  title: 'Trả trước hay chuyển khoản vay: so sạch tiền lãi tiết kiệm với phí và rủi ro mất thanh khoản',
  topic: 'personal-finance',
  tldr: 'Hai quyết định khác nhau: **trả nợ trước hạn** (đưa tiền trả bớt gốc, giảm lãi về sau) và **tái cấp vốn/chuyển khoản vay** (vay mới lãi thấp hơn để trả khoản cũ). Cả hai đều có phí và cần so với việc dùng số tiền đó vào mục đích khác. Cách làm gọn: tính **lãi tiết kiệm được**, trừ **phí**, rồi so với lợi suất thay thế và quỹ dự phòng. Các ví dụ giả định dưới đây dùng đơn vị triệu đồng, lãi cố định, trả đều (annuity).',
  keyPoints: [
    '**Ví dụ giả định:** vay 2.000 triệu, 20 năm (240 tháng), lãi 9%/năm, trả đều hằng tháng khoảng **18,0 triệu**. Sau 5 năm (60 tháng), dư nợ gốc còn khoảng **1.774 triệu**; nếu cứ trả đến hết, tiền lãi 15 năm còn lại khoảng 1.465 triệu.',
    '**Trả trước 300 triệu, giữ nguyên kỳ hạn còn 15 năm:** khoản trả hằng tháng giảm còn khoảng **15,0 triệu**; lãi còn lại khoảng 1.217 triệu, tiết kiệm khoảng **248 triệu**. **Trả trước 300 triệu, giữ nguyên mức trả 18,0 triệu/tháng:** khoản vay hết sau khoảng **128 tháng** thay vì 180, tức rút ngắn 52 tháng; lãi còn lại khoảng 829 triệu, tiết kiệm khoảng **636 triệu**. Giữ mức trả cũ tiết kiệm lãi nhiều hơn nhưng không giảm áp lực dòng tiền hằng tháng.',
    'Phí trả nợ trước hạn do ngân hàng và khách hàng **thỏa thuận trong hợp đồng**. Theo bài của VNBA (16/11/2022, dẫn Điều 14 Thông tư 39/2016/TT-NHNN, nay có thể đã được sửa đổi): phí = tỷ lệ phí × số tiền trả trước; ví dụ nêu Vietcombank 0,3–1% cho vay trung, dài hạn; Techcombank 3% trong hai năm đầu, 2% từ năm thứ ba; OCB 5% hoặc 3% tùy số kỳ đã trả. Mức này là số của thời điểm bài đăng; ngân hàng khác nhau và thay đổi, hãy đọc hợp đồng của bạn.',
    'Với phí 2% trong ví dụ, trả trước 300 triệu mất **6 triệu**, nhỏ so với 248–636 triệu lãi tiết kiệm; nhưng nếu phí cao hoặc còn gần hết kỳ ưu đãi thì phép tính đổi chiều.',
    '**Tái cấp vốn (ví dụ giả định):** dư nợ 1.774 triệu, còn 15 năm; chuyển sang vay mới lãi 8% (thay vì 9%) → mức trả giảm từ 18,0 xuống khoảng **16,95 triệu**, tiết kiệm khoảng **1,04 triệu/tháng** (khoảng 187 triệu trong 15 năm). Nếu tổng phí chuyển (phí tất toán, phí thẩm định, định giá, thế chấp) là 1% dư nợ ≈ 18 triệu, thì hòa vốn sau khoảng **17 tháng**. Tái cấp vốn chỉ hợp lý nếu bạn ở lại đủ lâu và lãi suất mới là lãi thực (cả giai đoạn thả nổi, không chỉ ưu đãi).',
  ],
  causalChain: [
    { from: 'Trả bớt gốc sớm', to: 'Dư nợ gốc giảm, lãi các kỳ sau giảm', mechanism: 'Lãi tính trên dư nợ còn lại; giảm dư nợ ngay làm lãi mọi kỳ sau thấp hơn, hiệu ứng mạnh nhất khi trả sớm.' },
    { from: 'Chọn giữ mức trả cũ hoặc giữ kỳ hạn', to: 'Rút ngắn thời gian vay hoặc giảm áp lực dòng tiền', mechanism: 'Giữ mức trả cũ rút ngắn thời hạn và giảm tổng lãi nhiều hơn; giữ kỳ hạn giảm mức trả hằng tháng, linh hoạt hơn.' },
    { from: 'Lãi suất thị trường giảm hoặc lãi ưu đãi hết', to: 'Cân nhắc chuyển khoản vay', mechanism: 'Chênh lệch lãi suất nhân với dư nợ và thời gian còn lại là khoản tiết kiệm; cần trừ phí chuyển và chi phí thủ tục.' },
    { from: 'Dùng tiền để trả nợ thay vì giữ tiền mặt', to: 'Giảm thanh khoản dự phòng', mechanism: 'Tiền đã trả nợ khó rút lại; nếu thiếu quỹ khẩn cấp, bạn có thể phải vay lại với lãi cao hơn.' },
  ],
  vietnamImpact: [
    { group: 'Người vay mua nhà lãi thả nổi', effect: 'Sau giai đoạn ưu đãi, lãi thả nổi thường cao hơn; so sánh kỹ lãi thực sau ưu đãi khi cân nhắc chuyển ngân hàng.', direction: 'mixed' },
    { group: 'Người có tiền nhàn rỗi', effect: 'Trả nợ trước tương đương một khoản "đầu tư không rủi ro" với lợi suất bằng lãi vay; so với lãi tiền gửi hoặc lợi suất khác sau thuế để quyết định.', direction: 'up' },
    { group: 'Người thu nhập không ổn định', effect: 'Giữ quỹ khẩn cấp quan trọng hơn trả nợ sớm; ưu tiên thanh khoản.', direction: 'mixed' },
    { group: 'Ngân hàng', effect: 'Thu phí trả nợ trước hạn để bù chi phí huy động vốn và bù ưu đãi lãi đã áp dụng; điều kiện cạnh tranh làm một số ngân hàng miễn hoặc giảm phí.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Lãi suất cho vay mua nhà (cả ưu đãi và thả nổi sau ưu đãi)', why: 'Chênh lệch lãi so với khoản vay hiện tại quyết định có đáng chuyển hay không.', where: 'Biểu lãi suất công bố của ngân hàng; báo cáo của Ngân hàng Nhà nước' },
    { name: 'Điều khoản phí trả nợ trước hạn và thời gian áp dụng', why: 'Phí giảm dần theo năm; chờ thêm vài tháng có thể tiết kiệm đáng kể.', where: 'Hợp đồng tín dụng, biểu phí của ngân hàng' },
    { name: 'Dư nợ gốc còn lại và số tháng còn lại', why: 'Hai thông số trong công thức tiết kiệm lãi.', where: 'Lịch trả nợ, sao kê khoản vay' },
    { name: 'Lãi suất tiền gửi và lợi suất kênh thay thế', why: 'Chi phí cơ hội của việc dùng tiền trả nợ.', where: 'Biểu lãi suất ngân hàng; Ngân hàng Nhà nước' },
  ],
  counterpoints: [
    'Ví dụ dùng lãi cố định, không có thuế, không có lạm phát; thực tế lãi thả nổi, thay đổi theo thị trường nên kết quả khác.',
    'Lạm phát làm giá trị thực của nợ cố định giảm; khi lãi vay thấp hơn lãi/lợi suất thay thế, trả nợ sớm chưa chắc là lựa chọn tốt nhất.',
    'Một số khoản vay có ưu đãi (miễn phí trả nợ trước hạn trong khung thời gian, lãi ưu đãi) khiến thời điểm hành động quan trọng; cần đọc kỹ hợp đồng.',
    'Bài này là kiến thức tài chính cá nhân, không phải tư vấn cho tình huống riêng của bạn.',
  ],
  glossary: [
    { term: 'Trả nợ trước hạn', definition: 'Thanh toán một phần hoặc toàn bộ dư nợ trước thời điểm đến hạn trong lịch trả nợ.' },
    { term: 'Tái cấp vốn (refinance)', definition: 'Vay khoản mới, thường để trả khoản cũ với điều kiện tốt hơn.' },
    { term: 'Annuity (trả đều)', definition: 'Phương thức trả nợ mà tổng khoản trả mỗi kỳ không đổi, gồm gốc và lãi.' },
    { term: 'Điểm hòa vốn', definition: 'Thời điểm khoản tiết kiệm lãi bù đủ chi phí chuyển.' },
    { term: 'Chi phí cơ hội', definition: 'Lợi ích bỏ lỡ khi dùng tiền vào việc này thay vì việc khác.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'home-loan-prepayment-refinance-math-q',
    question: 'Chuyển khoản vay sang ngân hàng khác lãi thấp hơn 1 điểm phần trăm, phí chuyển tương đương 17 tháng tiết kiệm. Bạn dự định bán nhà sau 8 tháng. Kết luận?',
    options: [
      { id: 'a', text: 'Vẫn nên chuyển vì lãi thấp hơn.', explain: 'Chưa đến điểm hòa vốn (khoảng 17 tháng), phí chưa được bù.' },
      { id: 'b', text: 'Không đáng chuyển vì sẽ không đạt hòa vốn trước khi bán nhà.', correct: true, explain: 'Đúng. Phép tính hòa vốn so với thời gian dự kiến giữ khoản vay quyết định lựa chọn.' },
      { id: 'c', text: 'Phí không quan trọng, chỉ cần nhìn lãi.', explain: 'Phí là chi phí thật, có thể làm mất toàn bộ phần tiết kiệm nếu giữ khoản vay ngắn.' },
    ],
  },
  sources: [
    { title: 'Phí phạt trả nợ trước hạn được tính như thế nào? (đăng 16/11/2022)', publisher: 'Hiệp hội Ngân hàng Việt Nam (VNBA)', url: 'https://vnba.org.vn/vi/phi-phat-tra-no-truoc-han-duoc-tinh-nhu-the-nao-11962.htm' },
    { title: 'Prepayment of loan', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Prepayment_of_loan' },
    { title: 'Refinancing', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Refinancing' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 79,
}
