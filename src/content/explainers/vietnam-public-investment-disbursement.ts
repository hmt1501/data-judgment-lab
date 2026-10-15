import type { Explainer } from '../../../shared/explainer'

export const vietnamPublicInvestmentDisbursement: Explainer = {
  id: 'vietnam-public-investment-disbursement',
  slug: 'vietnam-public-investment-disbursement',
  question: 'Giải ngân đầu tư công chậm hay nhanh tác động gì tới tăng trưởng?',
  title: 'Giải ngân đầu tư công nhanh kéo cầu và nâng năng lực hạ tầng, chậm thì mất một động lực tăng trưởng',
  topic: 'vietnam-economy',
  tldr: '**Đầu tư công** là chi ngân sách cho hạ tầng (đường, cảng, điện…) và chương trình phát triển. **Giải ngân** là việc thực sự chi tiền cho công trình. Khi giải ngân chậm, vốn nằm ở kho bạc, công trình trễ, nhà thầu và ngành vật liệu thiếu đơn hàng, tăng trưởng giảm; khi giải ngân nhanh, cầu tăng ngay và hạ tầng cải thiện về sau, nhưng chất lượng dự án và áp lực lạm phát cần được kiểm soát.',
  keyPoints: [
    'Đầu tư công vừa là **cầu** (chi tiêu mua xi măng, thép, nhân công) trong ngắn hạn vừa là **cung** (hạ tầng nâng năng suất, giảm chi phí logistics) trong dài hạn.',
    'Giải ngân chậm thường do vướng giải phóng mặt bằng, thủ tục đầu tư – đấu thầu, thiếu nguyên vật liệu (cát, đá, đất đắp), năng lực nhà thầu hoặc chuẩn bị dự án chưa kỹ. Ví dụ năm 2025, theo báo cáo của Bộ Tài chính (Báo Lào Cai, 07/02/2026), vốn kế hoạch đạt **94,8%** kế hoạch Thủ tướng giao tính đến 31/1/2026 (ngân sách trung ương 74,5%, địa phương 113,1%), cao hơn 91,45% cùng kỳ năm 2024 nhưng vẫn không đạt mục tiêu 100%.',
    'Giải ngân dồn vào cuối năm làm tăng nguy cơ chất lượng công trình kém và lãng phí; tốc độ tối ưu là đều, bám tiến độ kỹ thuật chứ không chạy theo tỷ lệ giải ngân.',
    'Hiệu ứng nhân: mỗi đồng chi cho hạ tầng kéo theo đơn hàng cho ngành xây dựng, vật liệu và việc làm; mức nhân phụ thuộc phần hàng nhập khẩu và độ trễ giữa chi và tiêu dùng.',
    'Ngoài vốn ngân sách, giải ngân còn bị ràng buộc bởi trần nợ công và cân đối thu – chi; vì vậy đầu tư công nhanh cần song hành với bền vững tài khóa.',
  ],
  causalChain: [
    { from: 'Kế hoạch vốn đầu tư công được giao', to: 'Chủ đầu tư triển khai dự án, nghiệm thu khối lượng', mechanism: 'Tiền chỉ được giải ngân khi có khối lượng hoàn thành được nghiệm thu; khâu chuẩn bị và mặt bằng quyết định tiến độ.' },
    { from: 'Giải ngân nhanh', to: 'Cầu cho ngành xây dựng, vật liệu và việc làm tăng', mechanism: 'Chi tiêu của nhà nước thành doanh thu của nhà thầu, nhà cung cấp và thu nhập của người lao động.' },
    { from: 'Hạ tầng hoàn thành', to: 'Chi phí logistics giảm, năng suất và thu hút đầu tư tăng', mechanism: 'Đường cao tốc, cảng, điện giảm thời gian và chi phí vận chuyển, mở rộng vùng đất công nghiệp và dịch vụ.' },
    { from: 'Giải ngân chậm', to: 'Cầu giảm, công trình trễ, chi phí dự án tăng', mechanism: 'Nhà thầu thiếu việc, chi phí đầu vào tăng theo thời gian và lợi ích hạ tầng đến muộn.' },
    { from: 'Nhu cầu vật liệu tăng đột biến khi giải ngân dồn dập', to: 'Giá vật liệu và lạm phát nhóm xây dựng tăng', mechanism: 'Cầu tăng nhanh hơn cung vật liệu làm giá cát, đá, thép tăng, ảnh hưởng chi phí cả khu vực tư nhân.' },
  ],
  vietnamImpact: [
    { group: 'Ngành xây dựng, vật liệu', effect: 'Doanh thu và lợi nhuận bám sát tiến độ giải ngân; chậm giải ngân kéo đơn hàng giảm.', direction: 'up' },
    { group: 'Người lao động ngành xây dựng', effect: 'Việc làm và thu nhập tăng khi dự án tăng tốc, giảm khi dự án đình trệ.', direction: 'up' },
    { group: 'Doanh nghiệp tư nhân dùng hạ tầng', effect: 'Hạ tầng tốt giảm chi phí vận chuyển và thời gian, nhưng lợi ích đến sau khi công trình hoàn thành.', direction: 'up' },
    { group: 'Ngân sách nhà nước', effect: 'Chi nhanh làm tăng thâm hụt ngắn hạn và nợ công nếu thu không theo kịp; chi chậm giữ tiền nhưng bỏ lỡ lợi ích kinh tế.', direction: 'mixed' },
    { group: 'Người tiêu dùng', effect: 'Giá vật liệu tăng khi cầu dồn dập có thể làm tăng giá nhà và chi phí xây dựng.', direction: 'down' },
  ],
  indicators: [
    { name: 'Tỷ lệ giải ngân đầu tư công so với kế hoạch (theo tháng, quý)', why: 'Đo trực tiếp tốc độ chi; cần xem cả chất lượng, không chỉ tỷ lệ.', where: 'Bộ Tài chính, Cục Thống kê (nso.gov.vn)' },
    { name: 'Vốn đầu tư thực hiện từ ngân sách nhà nước và đóng góp của xây dựng vào GDP', why: 'Kiểm tra giải ngân có chuyển thành tăng trưởng thực hay không.', where: 'Cục Thống kê (báo cáo kinh tế – xã hội hằng quý)' },
    { name: 'Giá vật liệu xây dựng và CPI nhóm nhà ở – vật liệu', why: 'Cảnh báo áp lực giá khi giải ngân dồn dập.', where: 'Cục Thống kê (thông cáo CPI)' },
    { name: 'Nợ công/GDP và thâm hụt ngân sách', why: 'Giới hạn bền vững của đầu tư công.', where: 'Bộ Tài chính, World Bank' },
  ],
  counterpoints: [
    'Giải ngân nhanh không đồng nghĩa hiệu quả cao; dự án chuẩn bị kém hoặc chọn sai ưu tiên có thể cho lợi ích thấp hơn chi phí dù tỷ lệ giải ngân đẹp.',
    'Ở mức đầu tư công đã cao, tác động biên giảm dần và có thể chèn ép (crowding out) đầu tư tư nhân nếu cạnh tranh nguồn vốn, nhân lực và vật liệu.',
    'Chậm giải ngân đôi khi là kết quả của việc kiểm soát rủi ro và kỷ luật chi tiêu hợp lý, không chỉ là nút thắt cần gỡ.',
  ],
  glossary: [
    { term: 'Đầu tư công', definition: 'Đầu tư từ nguồn lực nhà nước vào các chương trình, dự án kết cấu hạ tầng và phát triển kinh tế – xã hội.' },
    { term: 'Giải ngân', definition: 'Việc thực tế chi tiền cho dự án sau khi có khối lượng được nghiệm thu.' },
    { term: 'Hiệu ứng nhân', definition: 'Mức tăng tổng cầu lớn hơn số tiền chi ban đầu do chi tiêu lan tỏa qua nền kinh tế.' },
    { term: 'Chèn ép đầu tư tư nhân', definition: 'Hiện tượng chi tiêu công làm tăng chi phí vốn hoặc khan hiếm nguồn lực, khiến khu vực tư nhân đầu tư ít đi.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-public-investment-disbursement-q',
    question: 'Một địa phương đạt tỷ lệ giải ngân 100% bằng cách dồn chi vào tháng 12. Điều nào cần thận trọng?',
    options: [
      { id: 'a', text: 'Tỷ lệ 100% chứng tỏ dự án hiệu quả.', explain: 'Tỷ lệ giải ngân đo tiến độ chi tiêu, không đo chất lượng hay hiệu quả kinh tế của công trình.' },
      { id: 'b', text: 'Dồn chi cuối năm có thể làm giảm chất lượng, đẩy giá vật liệu và không phản ánh hiệu quả thật.', correct: true, explain: 'Đúng. Cần xem chất lượng nghiệm thu, tiến độ đều và lợi ích kinh tế thực, không chỉ tỷ lệ.' },
      { id: 'c', text: 'Giải ngân dồn vào cuối năm luôn tốt hơn chi đều.', explain: 'Chi đều giúp kiểm soát chất lượng và tránh áp lực giá; dồn cuối năm thường có rủi ro lãng phí.' },
    ],
  },
  sources: [
    { title: 'Giải ngân vốn đầu tư công năm 2025 đạt mức cao nhất trong 5 năm 2021-2025', publisher: 'Báo Lào Cai (07/02/2026), theo báo cáo Bộ Tài chính', url: 'https://baolaocai.vn/giai-ngan-von-dau-tu-cong-nam-2025-dat-muc-cao-nhat-trong-5-nam-2021-2025-post893202.html' },
    { title: 'Government spending', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Public_investment' },
    { title: 'Viet Nam Overview', publisher: 'World Bank Group', url: 'https://www.worldbank.org/en/country/vietnam/overview' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 18,
}
