import type { Explainer } from '../../../shared/explainer'

export const antiDumpingTradeRemedies: Explainer = {
  id: 'anti-dumping-trade-remedies',
  slug: 'anti-dumping-trade-remedies',
  question: 'Chống bán phá giá và các biện pháp phòng vệ thương mại hoạt động thế nào, doanh nghiệp xuất khẩu nên đọc ra sao?',
  title: 'Phòng vệ thương mại là công cụ hợp pháp có điều kiện: phải chứng minh phá giá hoặc trợ cấp, và gây thiệt hại',
  topic: 'geopolitics-trade',
  tldr: 'Ba nhóm biện pháp phổ biến là **chống bán phá giá**, **chống trợ cấp (thuế đối kháng)** và **tự vệ**. Theo trang WTO về Hiệp định Chống bán phá giá, hiệp định không điều chỉnh hành vi phá giá của doanh nghiệp mà quy định chính phủ được hay không được phản ứng thế nào. Với doanh nghiệp xuất khẩu, rủi ro nằm ở thủ tục điều tra và biên độ thuế, không chỉ mức thuế cuối cùng.',
  keyPoints: [
    '**Bán phá giá** là bán hàng xuất khẩu thấp hơn giá bình thường (thường là giá bán ở thị trường nội địa của nước xuất khẩu hoặc chi phí cộng lợi nhuận hợp lý). Chỉ phá giá chưa đủ để đánh thuế; nước nhập khẩu phải chứng minh có thiệt hại cho ngành sản xuất trong nước và có quan hệ nhân quả.',
    'Ba công cụ khác nhau về đối tượng: chống bán phá giá nhắm vào hành vi **giá của doanh nghiệp**, thuế đối kháng nhắm vào **trợ cấp của chính phủ**, tự vệ áp dụng khi nhập khẩu **tăng đột biến** dù không có hành vi không công bằng.',
    'Quy trình thường gồm: đơn kiến nghị của ngành trong nước, điều tra, biện pháp tạm thời, kết luận cuối cùng, rồi rà soát định kỳ; thuế có thể khác nhau theo từng doanh nghiệp bị điều tra.',
    'Điểm dễ gây tranh cãi là cách tính “giá bình thường”: khi giá nội địa không dùng được, Hiệp định cho phép dùng giá xuất sang nước thứ ba phù hợp hoặc giá thành dựng (chi phí cộng lợi nhuận), và với nền kinh tế phi thị trường thì so sánh trực tiếp với giá nội địa có thể bị coi là không phù hợp (theo trang kỹ thuật về chống bán phá giá của WTO); vì vậy biên độ thuế khó đoán.',
    'Cần phân biệt biện pháp phòng vệ chính đáng với việc dùng công cụ này như rào cản thương mại bảo hộ; thực tế ranh giới thường được tranh luận.',
  ],
  causalChain: [
    { from: 'Hàng nhập khẩu giá thấp làm ngành nội địa mất thị phần', to: 'Ngành nội địa nộp đơn kiến nghị điều tra', mechanism: 'Cơ quan có thẩm quyền xem xét đơn có đủ đại diện ngành và bằng chứng sơ bộ không.' },
    { from: 'Điều tra kết luận có phá giá/trợ cấp và thiệt hại', to: 'Áp thuế bổ sung lên hàng nhập khẩu', mechanism: 'Thuế làm tăng giá nhập khẩu, nâng giá bán trong nước và giảm sức cạnh tranh của hàng bị áp thuế.' },
    { from: 'Hàng bị áp thuế mất lợi thế giá', to: 'Đơn hàng chuyển sang nước/nhà cung cấp khác', mechanism: 'Người mua tìm nguồn thay thế ngoài phạm vi biện pháp; đôi khi dẫn tới điều tra tiếp với nguồn mới (hiệu ứng lan).' },
    { from: 'Thuế áp lên nguyên liệu trung gian', to: 'Chi phí của ngành sử dụng nguyên liệu đó tăng', mechanism: 'Ngành sản xuất hạ nguồn chịu giá cao hơn, làm giảm sức cạnh tranh của chính họ.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp xuất khẩu bị điều tra', effect: 'Chi phí pháp lý và hồ sơ lớn; thuế suất theo doanh nghiệp có thể chênh nhau nhiều tùy mức hợp tác và dữ liệu giá thành.', direction: 'down' },
    { group: 'Doanh nghiệp xuất khẩu không bị áp thuế', effect: 'Có thể hưởng lợi khi đối thủ bị áp thuế, nhưng cũng chịu rủi ro bị điều tra tiếp nếu tăng nhanh thị phần.', direction: 'mixed' },
    { group: 'Ngành sản xuất nội địa được bảo vệ (khi Việt Nam điều tra hàng nhập)', effect: 'Được hỗ trợ trong thời gian ngắn, nhưng giá đầu vào cho ngành hạ nguồn tăng.', direction: 'mixed' },
    { group: 'Người tiêu dùng nước nhập khẩu', effect: 'Giá hàng bị áp thuế thường cao hơn và lựa chọn hẹp hơn.', direction: 'down' },
  ],
  indicators: [
    { name: 'Thông báo khởi xướng điều tra và kết luận sơ bộ', why: 'Cho biết sản phẩm, doanh nghiệp, biên độ đề xuất và lịch kết luận.', where: 'Cục Phòng vệ thương mại (Bộ Công Thương); cơ quan điều tra nước nhập khẩu' },
    { name: 'Tốc độ tăng nhập khẩu và thị phần của một mặt hàng vào một thị trường', why: 'Mặt hàng tăng nhanh về lượng với giá thấp dễ trở thành đối tượng đơn kiến nghị.', where: 'Số liệu thương mại hải quan; UN Comtrade' },
    { name: 'Báo cáo của WTO về các biện pháp phòng vệ thương mại', why: 'Thống kê số vụ điều tra theo nước, ngành, giúp thấy xu hướng.', where: 'Trang Chống bán phá giá và Trợ cấp – Thuế đối kháng của WTO' },
  ],
  counterpoints: [
    'Thuế chống bán phá giá không tự nhiên là “bảo hộ vô lý”: nếu hàng bán thấp hơn chi phí thật gây thiệt hại cho ngành nội địa, biện pháp có thể chính đáng theo quy định.',
    'Ngược lại, không phải mọi giá thấp đều là phá giá; lợi thế chi phí hợp pháp (năng suất, quy mô) không phải căn cứ để áp thuế.',
    'Biện pháp có thời hạn và được rà soát; ảnh hưởng thực tế phụ thuộc cách doanh nghiệp điều chỉnh giá và chuỗi cung ứng sau đó.',
  ],
  glossary: [
    { term: 'Giá trị thông thường', definition: 'Giá chuẩn để so sánh với giá xuất khẩu khi xác định có phá giá hay không.' },
    { term: 'Biên độ phá giá', definition: 'Chênh lệch giữa giá trị thông thường và giá xuất khẩu, thường tính theo phần trăm.' },
    { term: 'Thuế đối kháng', definition: 'Thuế đánh vào hàng nhập khẩu được chính phủ nước xuất khẩu trợ cấp.' },
    { term: 'Biện pháp tự vệ', definition: 'Hạn chế tạm thời khi nhập khẩu tăng đột biến gây hại nghiêm trọng, không cần chứng minh hành vi không công bằng.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'anti-dumping-trade-remedies-q',
    question: 'Một ngành sản xuất trong nước thấy hàng nhập khẩu giá thấp tăng nhanh. Điều kiện nào là cốt lõi để nước đó áp thuế chống bán phá giá hợp lệ?',
    options: [
      { id: 'a', text: 'Hàng nhập khẩu rẻ hơn hàng nội địa là đủ.', explain: 'Giá rẻ hơn thuần túy có thể đến từ lợi thế chi phí chính đáng, không phải căn cứ đủ.' },
      { id: 'b', text: 'Chứng minh có bán phá giá, có thiệt hại cho ngành nội địa và quan hệ nhân quả giữa hai điều đó.', correct: true, explain: 'Đúng. Ba yếu tố này là khung cơ bản của điều tra chống bán phá giá.' },
      { id: 'c', text: 'Chỉ cần chính phủ nước xuất khẩu có trợ cấp.', explain: 'Trợ cấp thuộc công cụ thuế đối kháng, một cơ chế khác với chống bán phá giá.' },
    ],
  },
  sources: [
    { title: 'Anti-dumping – Gateway', publisher: 'World Trade Organization', url: 'https://www.wto.org/english/tratop_e/adp_e/adp_e.htm' },
    { title: 'Subsidies and Countervailing Measures – Gateway', publisher: 'World Trade Organization', url: 'https://www.wto.org/english/tratop_e/scm_e/scm_e.htm' },
    { title: 'Anti-dumping – Technical information (dumping, normal value, injury and causal link)', publisher: 'World Trade Organization', url: 'https://www.wto.org/english/tratop_e/adp_e/adp_info_e.htm' },
    { title: 'Safeguard measures – Gateway', publisher: 'World Trade Organization', url: 'https://www.wto.org/english/tratop_e/safeg_e/safeg_e.htm' },
    { title: 'Dumping (pricing policy)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Dumping_(pricing_policy)' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 101,
}
