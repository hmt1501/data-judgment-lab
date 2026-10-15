import type { Explainer } from '../../../shared/explainer'

export const vietnamInformalSectorEmployment: Explainer = {
  id: 'vietnam-informal-sector-employment',
  slug: 'vietnam-informal-sector-employment',
  question: 'Khu vực phi chính thức: việc làm và an sinh của hơn 60% lao động ra sao?',
  title: 'Lao động phi chính thức là đa số, thiếu hợp đồng và bảo hiểm bắt buộc',
  topic: 'vietnam-economy',
  tldr: 'Theo Cục Thống kê (3/7/2026), quý II/2026 có khoảng **32,5 triệu** lao động có việc làm phi chính thức, chiếm **61,7%** tổng số lao động có việc làm. Họ gồm lao động gia đình không lương, chủ cơ sở và lao động tự làm phi chính thức, người làm công không có hợp đồng hoặc không được đóng bảo hiểm xã hội bắt buộc, và lao động trong hộ nông nghiệp. Hệ quả: thu nhập kém ổn định, ít được bảo vệ khi ốm đau, thất nghiệp, tuổi già.',
  keyPoints: [
    'Theo Cục Thống kê, quý II/2026: tỷ lệ lao động phi chính thức 61,7% (thấp hơn 0,4 điểm phần trăm so với quý trước và 1,8 điểm phần trăm so với cùng kỳ); 6 tháng đầu năm là 61,9%, thấp hơn 2,0 điểm phần trăm so với cùng kỳ 2025.',
    'Theo ngành (quý II/2026): nông, lâm nghiệp và thủy sản 98,7%, công nghiệp và xây dựng 43,3%, dịch vụ 54,2%. Nghĩa là phi chính thức không chỉ là chuyện nông nghiệp mà còn lớn trong dịch vụ.',
    'Cục Thống kê định nghĩa việc làm phi chính thức gồm năm nhóm: lao động gia đình không lương; chủ cơ sở và lao động tự làm trong khu vực phi chính thức; người làm công không có hợp đồng lao động hoặc có hợp đồng nhưng không được đóng bảo hiểm xã hội bắt buộc; xã viên hợp tác xã không đóng bảo hiểm xã hội bắt buộc; lao động tự làm hoặc làm công trong hộ gia đình (gồm nông, lâm, thủy sản).',
    'Tỷ lệ giảm dần cho thấy chuyển dịch sang việc làm chính thức đang có tiến triển, nhưng vẫn chiếm "trên 3/5" tổng lao động có việc làm theo nhận định của Cục Thống kê.',
    'ILO cho biết trên toàn cầu hơn 60% lực lượng lao động và 80% doanh nghiệp là phi chính thức; vì vậy hiện tượng này phổ biến ở nhiều nước đang phát triển chứ không riêng Việt Nam.',
  ],
  causalChain: [
    { from: 'Chi phí tuân thủ và đóng bảo hiểm cao với doanh nghiệp, hộ nhỏ', to: 'Tuyển lao động không hợp đồng hoặc không đóng bảo hiểm', mechanism: 'Doanh nghiệp nhỏ biên lợi nhuận thấp tìm cách giảm chi phí lao động bằng việc không ký hợp đồng chính thức.' },
    { from: 'Lao động không có hợp đồng, bảo hiểm', to: 'Thu nhập bấp bênh, ít được bảo vệ', mechanism: 'Không có bảo hiểm thất nghiệp, bảo hiểm y tế qua việc làm, hưu trí; mất việc hay ốm đau trực tiếp ảnh hưởng thu nhập hộ gia đình.' },
    { from: 'Thu nhập bấp bênh', to: 'Tiêu dùng thận trọng, ít đầu tư kỹ năng', mechanism: 'Hộ gia đình giữ tiền dự phòng, ít vay đầu tư giáo dục, nghề nghiệp; năng suất lao động tăng chậm.' },
    { from: 'Khu vực chính thức mở rộng, thu nhập tăng', to: 'Lao động chuyển sang việc làm có bảo hiểm', mechanism: 'Doanh nghiệp lớn, FDI thuê người có hợp đồng và đóng bảo hiểm; đây là con đường chính để tỷ lệ phi chính thức giảm.' },
  ],
  vietnamImpact: [
    { group: 'Lao động tự do, bán hàng rong, giúp việc, xe ôm công nghệ', effect: 'Thu nhập phụ thuộc ngày công, hầu như không có bảo hiểm thất nghiệp hay hưu trí bắt buộc.', direction: 'down' },
    { group: 'Hộ nông nghiệp', effect: 'Gần như toàn bộ là phi chính thức (98,7%), thu nhập bấp bênh theo mùa vụ, giá nông sản và thiên tai.', direction: 'down' },
    { group: 'Doanh nghiệp nhỏ, hộ kinh doanh', effect: 'Linh hoạt chi phí nhưng khó vay vốn ngân hàng, khó tiếp cận hợp đồng lớn; chuyển sang chính thức làm tăng chi phí nhưng mở ra cơ hội tăng trưởng.', direction: 'mixed' },
    { group: 'Hệ thống an sinh và ngân sách', effect: 'Nhiều người ngoài hệ thống bảo hiểm làm hẹp nguồn thu bảo hiểm xã hội và tăng áp lực hỗ trợ xã hội khi họ về già.', direction: 'down' },
  ],
  indicators: [
    { name: 'Tỷ lệ lao động có việc làm phi chính thức (toàn quốc, theo ngành, thành thị-nông thôn)', why: 'Thước đo trực tiếp mức độ chính thức hóa việc làm.', where: 'Thông cáo báo chí Lao động việc làm hằng quý của Cục Thống kê (nso.gov.vn)' },
    { name: 'Số người tham gia bảo hiểm xã hội bắt buộc, tự nguyện và bảo hiểm thất nghiệp', why: 'Cho biết độ phủ an sinh.', where: 'Bảo hiểm xã hội Việt Nam, Bộ Nội vụ' },
    { name: 'Thu nhập bình quân của lao động theo loại việc làm', why: 'So sánh chênh lệch giữa chính thức và phi chính thức.', where: 'Cục Thống kê; ILO' },
    { name: 'Tỷ lệ thiếu việc làm và thất nghiệp', why: 'Đo mức bảo đảm việc làm ngoài con số thất nghiệp chính thức.', where: 'Cục Thống kê' },
  ],
  counterpoints: [
    'Phi chính thức không đồng nghĩa với bất hợp pháp hay không tạo thu nhập; nhiều hộ kinh doanh nhỏ là nguồn sinh kế quan trọng và cung cấp hàng hóa dịch vụ thiết yếu.',
    'Tỷ lệ giảm có thể phản ánh thay đổi định nghĩa, cách đo hoặc thay đổi cơ cấu mẫu điều tra, nên so sánh theo chuỗi thời gian cần thận trọng.',
    'Ép chính thức hóa quá nhanh có thể khiến doanh nghiệp nhỏ đóng cửa hoặc cắt việc làm; cần có lộ trình và hỗ trợ.',
  ],
  glossary: [
    { term: 'Việc làm phi chính thức', definition: 'Việc làm không được ký hợp đồng, không được đóng bảo hiểm bắt buộc hoặc thuộc cơ sở kinh doanh phi chính thức.' },
    { term: 'Bảo hiểm xã hội bắt buộc', definition: 'Hệ thống bảo hiểm gồm hưu trí, ốm đau, thai sản, tai nạn lao động mà người lao động và người sử dụng lao động cùng đóng.' },
    { term: 'Thiếu việc làm', definition: 'Người có việc nhưng làm ít giờ hơn mức họ muốn và sẵn sàng làm thêm.' },
    { term: 'Chính thức hóa', definition: 'Quá trình đưa lao động và doanh nghiệp vào khuôn khổ đăng ký, hợp đồng và bảo hiểm.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-informal-sector-employment-q',
    question: 'Tỷ lệ thất nghiệp của Việt Nam rất thấp. Điều gì nên lưu ý khi dùng chỉ số này để đánh giá chất lượng thị trường lao động?',
    options: [
      { id: 'a', text: 'Thất nghiệp thấp nghĩa là mọi người có việc làm tốt.', explain: 'Không đúng: nhiều người có việc nhưng thuộc diện phi chính thức, thu nhập bấp bênh, không được bảo hiểm.' },
      { id: 'b', text: 'Cần xem thêm tỷ lệ lao động phi chính thức và thiếu việc làm vì nhiều người vẫn "có việc" trong điều kiện thiếu bảo vệ.', correct: true, explain: 'Đúng. Người lao động nghèo thường không đủ khả năng thất nghiệp; họ nhận việc bất kỳ nên thất nghiệp thấp không phản ánh chất lượng việc làm.' },
      { id: 'c', text: 'Lao động phi chính thức không tính trong dữ liệu việc làm.', explain: 'Họ được tính là có việc làm; chỉ là thuộc nhóm phi chính thức theo định nghĩa riêng.' },
    ],
  },
  sources: [
    { title: 'Thông cáo báo chí Lao động việc làm quý II năm 2026 (3/7/2026)', publisher: 'Cục Thống kê', url: 'https://www.nso.gov.vn/wp-content/uploads/2026/07/Thong-cao-bao-chi-Lao-dong-viec-lam-QII.2026.pdf' },
    { title: 'Khái niệm, phương pháp tính tỷ lệ lao động có việc làm phi chính thức', publisher: 'Cục Thống kê', url: 'https://www.nso.gov.vn/du-lieu-dac-ta/2024/04/htcttk-tinh-ty-le-lao-dong-co-viec-lam-phi-chinh-thuc/' },
    { title: 'Informal economy', publisher: 'International Labour Organization', url: 'https://www.ilo.org/global/topics/employment-promotion/informal-economy/lang--en/index.htm' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 48,
}
