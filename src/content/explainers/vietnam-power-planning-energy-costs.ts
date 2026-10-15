import type { Explainer } from '../../../shared/explainer'

export const vietnamPowerPlanningEnergyCosts: Explainer = {
  id: 'vietnam-power-planning-energy-costs',
  slug: 'vietnam-power-planning-energy-costs',
  question: 'Quy hoạch điện ảnh hưởng thế nào tới chi phí năng lượng của doanh nghiệp?',
  title: 'Quy hoạch điện và chi phí năng lượng của doanh nghiệp Việt Nam',
  topic: 'vietnam-economy',
  tldr: 'Quy hoạch điện quyết định nguồn điện nào được xây, ở đâu, khi nào – và gián tiếp là giá điện, độ ổn định cung cấp và cách doanh nghiệp mua điện. Theo bài trong Tạp chí Công Thương (04/05/2025), Quy hoạch điện VIII điều chỉnh được duyệt bằng Quyết định 768/QĐ-TTg ngày 15/04/2025, tăng mạnh điện tái tạo và vốn đầu tư. Với doanh nghiệp, câu hỏi thực tế là chi phí điện, độ tin cậy, và các cơ chế mua điện mới (DPPA, điện mặt trời tự sản tự tiêu).',
  keyPoints: [
    'Theo Tạp chí Công Thương (04/05/2025, dẫn phân tích của PSI): Quyết định 768/QĐ-TTg (15/04/2025) phê duyệt điều chỉnh quy hoạch điện giai đoạn 2021–2030, tầm nhìn 2050; nhu cầu điện tăng khoảng 10,3–12,5%/năm, công suất điện tái tạo đến 2030 đạt 114.144 MW, và tổng vốn đầu tư đến 2050 khoảng 700 tỷ USD.',
    'Theo bài Diễn đàn Doanh nghiệp (21/04/2026): tổng nhu cầu điện có thể đạt khoảng 560–600 TWh vào năm 2030; Nghị định 57/2025/NĐ-CP quy định mua bán điện trực tiếp (DPPA) và Nghị định 58/2025/NĐ-CP, được bài nhắc trong ngữ cảnh điện mặt trời tự sản tự tiêu.',
    'Cùng bài báo, một chuyên gia cho rằng biểu giá điện hai thành phần (phí công suất + phí điện năng) là xu hướng dài hạn: doanh nghiệp mua điện tái tạo vẫn phải trả phí công suất, nên lợi ích tài chính của DPPA bị thu hẹp nếu đỉnh tải không giảm.',
    'Cũng theo chuyên gia đó (TS Trần Huỳnh Ngọc, Amperes), với biểu giá hai thành phần, khoản tiết kiệm từ điện mặt trời tự sản tự tiêu có thể giảm khoảng 21–25% so với cơ chế một thành phần trước đây (tức là phần tiết kiệm bị thu hẹp, không phải mức tiết kiệm là 21–25%); đây là ước tính của một chuyên gia, không phải con số chính thức.',
    'Điện tái tạo (gió, mặt trời) biến động theo thời tiết nên cần lưu trữ, dự báo tốt hơn và lưới truyền tải mạnh – chi phí hệ thống này cuối cùng được phản ánh vào giá điện.',
  ],
  causalChain: [
    { from: 'Nhu cầu điện tăng nhanh theo tăng trưởng kinh tế và công nghiệp hóa', to: 'Cần thêm nguồn và lưới điện', mechanism: 'Quy hoạch tính nhu cầu để xác định công suất cần xây; nếu nguồn không theo kịp, nguy cơ thiếu điện cục bộ tăng.' },
    { from: 'Tăng tỷ trọng điện tái tạo, LNG, lưu trữ', to: 'Chi phí hệ thống thay đổi', mechanism: 'Điện tái tạo có chi phí biên thấp nhưng cần lưu trữ và lưới linh hoạt; LNG phụ thuộc giá nhiên liệu nhập khẩu; hai yếu tố này cùng quyết định giá điện bình quân.' },
    { from: 'Đầu tư điện và lưới rất lớn', to: 'Áp lực lên giá bán lẻ trung hạn', mechanism: 'Chi phí vốn phải được thu hồi qua giá; chuyên gia kỳ vọng giá bán lẻ tăng trong trung hạn.' },
    { from: 'Cơ chế mua điện mới (DPPA, biểu giá hai thành phần)', to: 'Cách doanh nghiệp tối ưu chi phí điện thay đổi', mechanism: 'Doanh nghiệp phải quản trị cả điện năng tiêu thụ lẫn công suất đỉnh: dịch chuyển phụ tải, tăng hiệu quả, kết hợp lưu trữ.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp sản xuất tiêu thụ nhiều điện (thép, xi măng, dệt nhuộm, điện tử)', effect: 'Chi phí điện là khoản đáng kể; giá điện tăng hoặc cơ chế phí công suất khiến biên lợi nhuận nhạy hơn.', direction: 'down' },
    { group: 'Doanh nghiệp có mái nhà rộng và phụ tải ban ngày', effect: 'Điện mặt trời tự dùng và DPPA là cơ hội giảm chi phí, nhưng lợi ích phụ thuộc đỉnh tải và biểu giá.', direction: 'mixed' },
    { group: 'Doanh nghiệp xuất khẩu theo yêu cầu "xanh" của khách hàng', effect: 'Mua điện tái tạo giúp đáp ứng yêu cầu phát thải của đối tác nước ngoài.', direction: 'up' },
    { group: 'Nhà đầu tư năng lượng và hạ tầng', effect: 'Quy hoạch tạo nhu cầu đầu tư lớn vào nguồn và lưới; nhưng hiệu quả phụ thuộc cơ chế giá và tiến độ thủ tục.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Biểu giá bán lẻ điện và điều chỉnh của EVN', why: 'Quyết định chi phí điện đầu vào của doanh nghiệp.', where: 'EVN, Bộ Công Thương' },
    { name: 'Tiến độ nguồn điện và lưới truyền tải trong quy hoạch', why: 'Chậm tiến độ làm tăng rủi ro thiếu điện, nhất là mùa nắng nóng.', where: 'Bộ Công Thương, EVN, Tạp chí Công Thương' },
    { name: 'Đỉnh phụ tải và biểu đồ phụ tải của doanh nghiệp', why: 'Với biểu giá hai thành phần, công suất đỉnh quyết định phí công suất.', where: 'Hóa đơn điện, hệ thống đo đếm của EVN' },
    { name: 'Giá nhiên liệu (than, LNG) quốc tế', why: 'Ảnh hưởng chi phí phát điện từ nguồn nhiệt điện.', where: 'Ngân hàng Thế giới (Commodity Markets), các sàn giá' },
  ],
  counterpoints: [
    'Quy hoạch là kế hoạch, không phải đảm bảo: tiến độ thực tế thường chậm hơn do vốn, mặt bằng, thủ tục và cơ chế giá.',
    'Nhiều con số trong các bài báo dẫn từ phân tích của công ty chứng khoán hoặc ý kiến chuyên gia, không phải văn bản chính thức; cần đối chiếu Quyết định 768/QĐ-TTg trước khi trích.',
    'Tác động tới từng doanh nghiệp rất khác nhau tùy hồ sơ phụ tải, địa điểm, và giờ sản xuất; không thể suy luận một mức "giá điện sẽ tăng X%".',
  ],
  glossary: [
    { term: 'Quy hoạch điện VIII', definition: 'Quy hoạch phát triển điện lực quốc gia giai đoạn 2021–2030, tầm nhìn 2050, được điều chỉnh theo Quyết định 768/QĐ-TTg (2025).' },
    { term: 'DPPA', definition: 'Cơ chế mua bán điện trực tiếp giữa đơn vị phát điện tái tạo và khách hàng lớn, quy định tại Nghị định 57/2025/NĐ-CP.' },
    { term: 'Biểu giá hai thành phần', definition: 'Giá điện gồm phí công suất (theo công suất tối đa) và phí điện năng (theo lượng tiêu thụ).' },
    { term: 'BESS', definition: 'Hệ thống lưu trữ điện bằng pin, giúp dịch chuyển điện từ giờ rẻ/thừa sang giờ cao điểm.' },
    { term: 'LNG', definition: 'Khí thiên nhiên hóa lỏng, nhiên liệu cho nhà máy điện khí nhập khẩu.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-power-planning-energy-costs-q',
    question: 'Một nhà máy mua điện tái tạo qua DPPA nhưng sản xuất vẫn dồn vào giờ cao điểm của lưới. Với biểu giá hai thành phần, điều gì có khả năng cao nhất?',
    options: [
      { id: 'a', text: 'Phí công suất vẫn lớn nên tiết kiệm chi phí bị thu hẹp.', correct: true, explain: 'Đúng. Phí công suất theo đỉnh tải; nếu đỉnh tải không giảm, mua điện tái tạo chủ yếu giảm phí điện năng, không giảm phí công suất.' },
      { id: 'b', text: 'Chi phí điện giảm bằng đúng chênh lệch giá điện năng.', explain: 'Chưa đúng; còn phải tính phí công suất và các phí khác.' },
      { id: 'c', text: 'Doanh nghiệp không phải trả phí lưới.', explain: 'Sai. Theo bài Diễn đàn Doanh nghiệp, doanh nghiệp vẫn trả phí cho đơn vị vận hành lưới khi mua điện tái tạo.' },
    ],
  },
  sources: [
    { title: 'Loạt doanh nghiệp hưởng lợi lớn từ Quy hoạch Điện VIII điều chỉnh (04/05/2025)', publisher: 'Tạp chí Công Thương', url: 'https://tapchicongthuong.vn/loat-doanh-nghiep-huong-loi-lon-tu-quy-hoach-dien-viii-dieu-chinh-140078.htm' },
    { title: 'Chính sách cho điện tái tạo: Doanh nghiệp buộc phải thay đổi cách tiếp cận năng lượng (21/04/2026)', publisher: 'Diễn đàn Doanh nghiệp', url: 'https://diendandoanhnghiep.vn/chinh-sach-cho-dien-tai-tao-doanh-nghiep-buoc-phai-thay-doi-cach-tiep-can-nang-luong-10177575.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 166,
}
