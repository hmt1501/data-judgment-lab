import type { Explainer } from '../../../shared/explainer'

export const yieldCurveInversionRecessionSignal: Explainer = {
  id: 'yield-curve-inversion-recession-signal',
  slug: 'yield-curve-inversion-recession-signal',
  question: 'Đường cong lợi suất đảo ngược có báo hiệu suy thoái không?',
  title: 'Đảo ngược đường cong lợi suất là tín hiệu thị trường kỳ vọng lãi suất sẽ giảm, không phải bản án suy thoái',
  topic: 'macro',
  tldr: 'Bình thường, trái phiếu chính phủ kỳ hạn dài có lợi suất cao hơn kỳ hạn ngắn. Khi lợi suất ngắn hạn **vượt** dài hạn (đường cong **đảo ngược**), thị trường đang đặt cược ngân hàng trung ương sẽ phải hạ lãi suất sau này vì kinh tế yếu đi. Tín hiệu này từng đi trước nhiều đợt suy thoái ở Mỹ, nhưng độ trễ không cố định và nó là xác suất, không phải quy luật.',
  keyPoints: [
    '**Đường cong lợi suất** vẽ lợi suất trái phiếu chính phủ theo kỳ hạn (3 tháng, 2 năm, 10 năm…). Hai thước đo hay dùng nhất là chênh lệch **10 năm trừ 2 năm** và **10 năm trừ 3 tháng**.',
    'Lợi suất ngắn hạn bám sát lãi suất chính sách hiện tại; lợi suất dài hạn phản ánh **đường lãi suất kỳ vọng** trong tương lai cộng phần bù kỳ hạn. Đảo ngược nghĩa là thị trường kỳ vọng lãi suất tương lai thấp hơn hiện tại.',
    'Ngân hàng cho vay dài hạn bằng vốn ngắn hạn, nên đường cong phẳng hoặc đảo ngược ép biên lợi nhuận và có thể khiến họ **thắt chặt tín dụng**, tự làm nền kinh tế chậm lại.',
    'Đây là chỉ báo **dẫn dắt có độ trễ biến thiên** (thường tính bằng quý đến hơn một năm) và từng có tín hiệu sai; không dùng để canh thời điểm thị trường.',
    'Với Việt Nam, tín hiệu từ đường cong lợi suất của Mỹ tác động gián tiếp qua dòng vốn, tỷ giá và nhu cầu nhập khẩu từ Mỹ chứ không phải qua đường cong trong nước.',
  ],
  causalChain: [
    { from: 'Ngân hàng trung ương tăng lãi suất chính sách để chống lạm phát', to: 'Lợi suất ngắn hạn tăng nhanh', mechanism: 'Lợi suất kỳ hạn ngắn gần như đi theo lãi suất điều hành vì nhà đầu tư luôn có thể gửi tiền qua đêm với lãi suất đó.' },
    { from: 'Lợi suất ngắn hạn tăng nhanh', to: 'Lợi suất dài hạn tăng ít hơn hoặc giảm', mechanism: 'Nếu thị trường tin lãi suất cao sẽ làm kinh tế chậm lại và buộc ngân hàng trung ương hạ lãi suất sau đó, lợi suất dài hạn (bình quân kỳ vọng của các mức lãi suất tương lai) không tăng theo.' },
    { from: 'Lợi suất dài hạn thấp hơn ngắn hạn (đảo ngược)', to: 'Biên lợi nhuận cho vay của ngân hàng bị ép', mechanism: 'Ngân hàng huy động vốn rẻ hơn khi vay ngắn, cho vay dài; khi chênh lệch lãi suất thu hẹp hoặc âm, cho vay mới kém hấp dẫn.' },
    { from: 'Biên lợi nhuận bị ép', to: 'Tín dụng thắt chặt, đầu tư và tiêu dùng chậm lại', mechanism: 'Ngân hàng nâng chuẩn cho vay, doanh nghiệp và hộ gia đình khó vay hơn, nhu cầu giảm và rủi ro suy thoái tăng.' },
    { from: 'Kinh tế yếu đi', to: 'Ngân hàng trung ương hạ lãi suất, đường cong dốc trở lại', mechanism: 'Việc đường cong "dốc lại" thường xảy ra khi suy thoái đã gần hoặc đang diễn ra, vì lãi suất ngắn hạn giảm nhanh.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp xuất khẩu sang Mỹ', effect: 'Nếu suy thoái Mỹ thật sự xảy ra, đơn hàng giảm và giá bán chịu áp lực; đây là kênh tác động lớn nhất tới Việt Nam.', direction: 'down' },
    { group: 'Thị trường chứng khoán', effect: 'Đảo ngược kéo dài thường làm tâm lý thận trọng toàn cầu, nhưng tác động lên cổ phiếu Việt Nam phụ thuộc nhiều vào dòng vốn và thanh khoản trong nước.', direction: 'mixed' },
    { group: 'Tỷ giá USD/VND', effect: 'Khi kỳ vọng Fed hạ lãi suất tăng, đồng USD thường bớt sức ép; ngược lại nếu tín hiệu đảo ngược đi cùng căng thẳng tài chính, USD có thể được mua làm nơi trú ẩn.', direction: 'mixed' },
    { group: 'Người vay lãi suất thả nổi', effect: 'Kỳ vọng lãi suất toàn cầu giảm về sau có thể giảm áp lực mặt bằng lãi suất, dù lãi suất trong nước chủ yếu theo điều kiện thanh khoản nội địa.', direction: 'up' },
  ],
  indicators: [
    { name: 'Chênh lệch lợi suất 10 năm trừ 2 năm và 10 năm trừ 3 tháng của trái phiếu Kho bạc Mỹ', why: 'Hai thước đo tiêu chuẩn của độ dốc đường cong; cho thấy thị trường kỳ vọng lãi suất đi hướng nào.', where: 'Bộ Tài chính Mỹ (Treasury), dữ liệu FRED của Fed St. Louis' },
    { name: 'Xác suất suy thoái dựa trên đường cong', why: 'Mô hình thống kê chuyển độ dốc thành xác suất suy thoái trong 12 tháng tới.', where: 'Fed New York (trang "The Yield Curve as a Leading Indicator")' },
    { name: 'Điều kiện cho vay của ngân hàng', why: 'Kiểm tra xem kênh "thắt chặt tín dụng" có thật sự đang xảy ra không.', where: 'Khảo sát cán bộ tín dụng cao cấp của Fed (SLOOS)' },
    { name: 'Đơn hàng xuất khẩu, PMI sản xuất', why: 'Xác nhận suy yếu thực chứ không chỉ là tín hiệu thị trường tài chính.', where: 'Cục Thống kê (nso.gov.vn), báo cáo PMI hằng tháng' },
  ],
  counterpoints: [
    'Sau thời kỳ ngân hàng trung ương mua trái phiếu quy mô lớn, **phần bù kỳ hạn** bị nén, nên độ dốc đường cong có thể kém thông tin hơn trước đây.',
    'Có những lần đảo ngược kéo dài mà suy thoái đến muộn hoặc không đến; tương quan trong lịch sử chỉ dựa trên rất ít quan sát nên khó coi là quy luật.',
    'Cơ chế không chuyển nguyên sang nền kinh tế khác: Việt Nam huy động vốn chủ yếu qua tiền gửi ngân hàng, thị trường trái phiếu chính phủ kỳ hạn dài còn nông, nên đường cong trong nước ít dùng để dự báo chu kỳ.',
  ],
  glossary: [
    { term: 'Lợi suất (yield)', definition: 'Tỷ suất sinh lợi hằng năm nếu mua trái phiếu ở giá hiện tại và giữ đến đáo hạn.' },
    { term: 'Đường cong lợi suất', definition: 'Đồ thị lợi suất trái phiếu cùng loại theo các kỳ hạn khác nhau.' },
    { term: 'Đảo ngược', definition: 'Tình trạng lợi suất kỳ hạn ngắn cao hơn lợi suất kỳ hạn dài.' },
    { term: 'Phần bù kỳ hạn', definition: 'Mức lợi suất thêm mà nhà đầu tư đòi hỏi để chấp nhận rủi ro giữ trái phiếu dài hạn.' },
    { term: 'Chỉ báo dẫn dắt', definition: 'Chỉ số thay đổi trước khi nền kinh tế thay đổi, nhưng độ trễ không ổn định.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'yield-curve-inversion-recession-signal-q',
    question: 'Đường cong lợi suất Mỹ đảo ngược đã nhiều tháng nhưng dữ liệu việc làm vẫn tốt. Cách nghĩ nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Tín hiệu đã sai, có thể bỏ qua hoàn toàn.', explain: 'Một tín hiệu xác suất cần thời gian mới biết đúng sai; độ trễ của nó biến thiên và việc làm là chỉ số đi sau.' },
      { id: 'b', text: 'Suy thoái chắc chắn xảy ra trong 6 tháng tới.', explain: 'Không có độ trễ cố định; đây là chỉ báo xác suất, không đưa ra mốc thời gian chắc chắn.' },
      { id: 'c', text: 'Rủi ro suy thoái cao hơn bình thường nhưng cần xác nhận bằng dữ liệu tín dụng, đơn hàng, sản xuất trước khi kết luận.', correct: true, explain: 'Đúng. Đường cong cho biết kỳ vọng của thị trường; cần kiểm tra kênh truyền dẫn (tín dụng, đầu tư) có thật sự yếu đi không.' },
    ],
  },
  sources: [
    { title: 'The Yield Curve as a Leading Indicator', publisher: 'Federal Reserve Bank of New York', url: 'https://www.newyorkfed.org/research/capital_markets/ycfaq' },
    { title: 'Yield curve', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Yield_curve' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 10,
}
