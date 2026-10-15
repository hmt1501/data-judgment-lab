import type { Explainer } from '../../../shared/explainer'

export const vietnamMinimumWageLaborCosts: Explainer = {
  id: 'vietnam-minimum-wage-labor-costs',
  slug: 'vietnam-minimum-wage-labor-costs',
  question: 'Tăng lương tối thiểu vùng ảnh hưởng thế nào tới chi phí doanh nghiệp, việc làm và lạm phát?',
  title: 'Tăng lương tối thiểu vùng nâng thu nhập nhóm thấp nhưng tác động tới việc làm và giá tùy ngành và mức tăng',
  topic: 'vietnam-economy',
  tldr: 'Lương tối thiểu vùng là mức sàn doanh nghiệp phải trả theo vùng. Khi sàn tăng, chi phí nhân công tăng trực tiếp ở nhóm lương thấp, và gián tiếp qua đóng bảo hiểm và hệ số thang bảng lương. Tác động lên việc làm và giá cả phụ thuộc **tỷ trọng chi phí lao động**, khả năng nâng năng suất và tăng giá của doanh nghiệp, nên cần đánh giá theo ngành thay vì kết luận chung.',
  keyPoints: [
    '**Lương tối thiểu vùng** là mức thấp nhất doanh nghiệp được trả cho lao động làm công việc giản đơn trong điều kiện bình thường, được quy định theo vùng và điều chỉnh định kỳ. Theo VOH (16/11/2025), Nghị định 293/2025 có hiệu lực 1/1/2026 nâng mức vùng I từ 4,96 lên 5,31 triệu đồng/tháng, vùng IV từ 3,45 lên 3,7 triệu đồng, tăng bình quân khoảng 7,2%; mức hiện hành cần kiểm tra lại văn bản mới nhất.',
    'Chi phí thực với doanh nghiệp lớn hơn mức tăng sàn vì còn **bảo hiểm** tính trên lương và việc phải kéo giãn các bậc lương phía trên để giữ chênh lệch kỹ năng.',
    'Tác động mạnh nhất ở ngành thâm dụng lao động (dệt may, da giày, chế biến), nơi chi phí nhân công chiếm tỷ trọng lớn; ít hơn ở ngành vốn lớn hoặc dịch vụ giá trị cao.',
    'Tăng lương tối thiểu chủ yếu có lợi cho người đang làm việc ở mức lương thấp, có thể giúp giảm bất bình đẳng; rủi ro là doanh nghiệp giảm tuyển dụng, tự động hóa hoặc chuyển sang khu vực phi chính thức nếu mức tăng vượt khả năng.',
    'Qua lạm phát: nếu doanh nghiệp chuyển chi phí vào giá bán, tác động lên CPI thường nhỏ trừ ngành dịch vụ thâm dụng lao động; phản ứng tiêu dùng của người lao động cũng tăng cầu.',
  ],
  causalChain: [
    { from: 'Chính phủ điều chỉnh lương tối thiểu vùng', to: 'Chi phí nhân công trực tiếp của doanh nghiệp tăng', mechanism: 'Doanh nghiệp phải trả ít nhất mức sàn mới cho lao động giản đơn và đóng bảo hiểm trên lương tăng.' },
    { from: 'Chi phí nhân công tăng', to: 'Tổng chi phí tăng theo tỷ trọng lao động', mechanism: 'Ví dụ giả định: nhân công chiếm 20% giá thành, nếu chi phí nhân công tăng 6% thì giá thành tăng khoảng 1,2%.' },
    { from: 'Giá thành tăng', to: 'Doanh nghiệp chọn: tăng giá, ép biên lợi nhuận, hoặc nâng năng suất', mechanism: 'Lựa chọn tùy sức cạnh tranh; ngành xuất khẩu chịu cạnh tranh giá khó tăng giá, ngành nội địa ít cạnh tranh dễ chuyển chi phí hơn.' },
    { from: 'Chi phí áp lực quá mức ở doanh nghiệp nhỏ', to: 'Giảm tuyển dụng, tự động hóa hoặc giảm giờ làm', mechanism: 'Khi không thể tăng giá hoặc năng suất, doanh nghiệp cắt giảm phần chi phí linh hoạt nhất là số lao động.' },
    { from: 'Thu nhập lao động nhóm thấp tăng', to: 'Tiêu dùng nội địa tăng, góp phần cầu', mechanism: 'Nhóm thu nhập thấp có xu hướng chi tiêu hầu hết thu nhập tăng thêm, hỗ trợ nhu cầu hàng thiết yếu và dịch vụ.' },
  ],
  vietnamImpact: [
    { group: 'Lao động lương thấp', effect: 'Thu nhập sàn tăng, cải thiện đời sống nếu giữ được việc làm.', direction: 'up' },
    { group: 'Doanh nghiệp thâm dụng lao động xuất khẩu', effect: 'Chi phí tăng trong khi đơn giá bị khách hàng ép; áp lực lên biên lợi nhuận và khả năng cạnh tranh.', direction: 'down' },
    { group: 'Doanh nghiệp nhỏ và hộ kinh doanh', effect: 'Khó chuyển chi phí vào giá và ít đòn bẩy tự động hóa nên chịu rủi ro cao nhất.', direction: 'down' },
    { group: 'Người tiêu dùng', effect: 'Giá một số dịch vụ thâm dụng lao động (ăn uống, giúp việc, giữ xe) có thể nhích lên; tác động chung lên CPI thường hạn chế.', direction: 'mixed' },
    { group: 'Ngân sách và quỹ bảo hiểm xã hội', effect: 'Mức đóng bảo hiểm trên lương tăng làm thu quỹ tăng nhưng cũng tăng chi phí cho doanh nghiệp.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tốc độ tăng lương tối thiểu so với năng suất lao động', why: 'Tăng lương vượt năng suất kéo dài làm tăng chi phí đơn vị sản phẩm.', where: 'Cục Thống kê (nso.gov.vn), Bộ Nội vụ' },
    { name: 'Tỷ trọng chi phí nhân công trong giá thành theo ngành', why: 'Cho biết ngành nào nhạy với thay đổi lương.', where: 'Điều tra doanh nghiệp của Cục Thống kê' },
    { name: 'Thu nhập bình quân lao động và tỷ lệ thất nghiệp, thiếu việc làm', why: 'Kiểm tra tác động lên việc làm thực tế.', where: 'Báo cáo lao động – việc làm của Cục Thống kê' },
    { name: 'CPI nhóm dịch vụ', why: 'Xem chi phí lao động có chuyển sang giá không.', where: 'Cục Thống kê (thông cáo CPI hằng tháng)' },
  ],
  counterpoints: [
    'Nghiên cứu về lương tối thiểu ở nhiều nước cho kết quả khác nhau: mức tăng vừa phải thường ít ảnh hưởng việc làm, mức tăng quá cao so với mặt bằng có thể gây tác động xấu.',
    'Khi lao động khan hiếm hoặc thị trường lao động có ít người mua lao động (sức mua độc quyền), tăng lương tối thiểu có thể không giảm việc làm mà thậm chí làm tăng việc làm.',
    'Lương tối thiểu chỉ là sàn; mức lương thực tế ở nhiều ngành đã cao hơn sàn, nên tác động tập trung vào phần thị trường thấp nhất.',
  ],
  glossary: [
    { term: 'Lương tối thiểu vùng', definition: 'Mức lương thấp nhất người sử dụng lao động phải trả, quy định theo vùng địa lý.' },
    { term: 'Thâm dụng lao động', definition: 'Ngành có chi phí lao động chiếm tỷ trọng lớn trong tổng chi phí.' },
    { term: 'Chi phí đơn vị lao động', definition: 'Chi phí nhân công trên mỗi đơn vị sản lượng, bằng lương chia năng suất.' },
    { term: 'Chuyển chi phí vào giá', definition: 'Việc doanh nghiệp tăng giá bán để bù chi phí đầu vào tăng.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-minimum-wage-labor-costs-q',
    question: 'Lương tối thiểu tăng 6%, nhân công chiếm 30% giá thành của một doanh nghiệp xuất khẩu không thể tăng giá. Điều gì hợp lý nhất?',
    options: [
      { id: 'a', text: 'Giá thành tăng 6%.', explain: 'Chỉ 30% giá thành là nhân công, nên mức tăng giá thành tối đa chỉ khoảng 1,8% (6% × 30%), chưa kể phần bảo hiểm.' },
      { id: 'b', text: 'Giá thành tăng khoảng 1,8% từ nhân công; biên lợi nhuận bị ép nếu không thể tăng giá hoặc nâng năng suất.', correct: true, explain: 'Đúng. Tác động tỷ lệ với tỷ trọng chi phí, và khi không chuyển vào giá, biên lợi nhuận hoặc việc làm phải điều chỉnh.' },
      { id: 'c', text: 'Không có tác động vì doanh nghiệp xuất khẩu không bị ảnh hưởng bởi lương.', explain: 'Xuất khẩu càng nhạy với chi phí lao động vì khó chuyển chi phí cho khách hàng.' },
    ],
  },
  sources: [
    { title: 'Lương tối thiểu từ 1/1/2026: Quy định mới và danh sách 34 địa phương áp dụng', publisher: 'VOH (16/11/2025)', url: 'https://voh.com.vn/xa-hoi/luong-toi-thieu-tu-112026-quy-dinh-moi-va-danh-sach-34-dia-phuong-ap-dung-637583.html' },
    { title: 'Minimum wage', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Minimum_wage' },
    { title: 'Viet Nam Overview', publisher: 'World Bank Group', url: 'https://www.worldbank.org/en/country/vietnam/overview' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 17,
}
