import type { Explainer } from '../../../shared/explainer'

export const sideIncomeRiskDiversification: Explainer = {
  id: 'side-income-risk-diversification',
  slug: 'side-income-risk-diversification',
  question: 'Thu nhập phụ có giúp giảm rủi ro tài chính cá nhân không?',
  title: 'Thu nhập phụ và đa dạng hóa nguồn thu: lợi ích và giới hạn',
  topic: 'personal-finance',
  tldr: 'Có thêm một nguồn thu giúp bạn bớt phụ thuộc vào một công việc, giống như đa dạng hóa danh mục đầu tư giúp giảm rủi ro riêng lẻ. Nhưng lợi ích chỉ thật khi các nguồn thu **không cùng chịu một cú sốc** (cùng ngành, cùng khách hàng, cùng nền tảng), và khi nguồn phụ không bào mòn sức khỏe hoặc công việc chính.',
  keyPoints: [
    'Nguyên lý đa dạng hóa trong tài chính: kết hợp các thứ **không biến động đồng thời** thì tổng mức dao động giảm. Với thu nhập, điều quan trọng là mức độ tương quan giữa các nguồn, không phải số lượng nguồn.',
    'Theo khảo sát SHED của Cục Dự trữ Liên bang Mỹ (kỳ khảo sát 2024, công bố 5/2025), 20% người trưởng thành có làm việc kiểu "gig" trong tháng trước đó; 51% người làm gig có một công việc chính không phải gig, và 31% cho biết sẽ khó trang trải nếu mất khoản thu này. Đây là số liệu Mỹ, chỉ minh họa việc thu nhập phụ phổ biến và nhiều người dựa vào nó.',
    'Một nguồn thu phụ **cùng ngành hoặc cùng khách hàng** với việc chính thường sụt cùng lúc khi ngành suy giảm, nên bảo vệ yếu hơn một nguồn khác bản chất (cho thuê tài sản, kinh doanh nhỏ ở lĩnh vực khác, đầu tư tạo cổ tức).',
    'Thu nhập phụ có **chi phí ẩn**: thời gian nghỉ ngơi, vốn ban đầu, rủi ro nền tảng thay đổi thuật toán hoặc phí, và nghĩa vụ pháp lý, thuế mà bài này không đi vào chi tiết.',
    'Thu nhập phụ không thay quỹ khẩn cấp: nguồn thu phụ có thể biến động mạnh hơn lương, nên là lớp đệm bổ sung chứ không phải lý do bỏ ngăn tiền an toàn.',
  ],
  causalChain: [
    { from: 'Có hai nguồn thu có tương quan thấp', to: 'Tổng thu nhập ít dao động hơn', mechanism: 'Khi nguồn này giảm, nguồn kia có khả năng không giảm cùng lúc; phương sai của tổng thấp hơn tổng phương sai riêng lẻ khi tương quan nhỏ hơn 1.' },
    { from: 'Mất việc chính hoặc bị cắt giờ', to: 'Thu nhập phụ đóng vai trò giảm sốc', mechanism: 'Nguồn phụ kéo dài thời gian quỹ khẩn cấp đủ dùng và giảm áp lực phải nhận việc đầu tiên xuất hiện.' },
    { from: 'Nguồn phụ phụ thuộc cùng ngành, cùng khách hàng hoặc một nền tảng', to: 'Hai nguồn sụt cùng lúc', mechanism: 'Tương quan cao làm lợi ích đa dạng hóa gần như biến mất; trong khủng hoảng, nhiều thứ vốn ít liên quan vẫn có thể cùng xấu đi.' },
    { from: 'Dành nhiều giờ cho việc phụ', to: 'Chi phí cơ hội và rủi ro kiệt sức', mechanism: 'Giờ làm thêm lấy từ thời gian nghỉ hoặc học kỹ năng; nếu làm giảm hiệu suất việc chính thì có thể mất nhiều hơn được.' },
    { from: 'Thu nhập phụ ổn định theo thời gian', to: 'Có thể chuyển dần thành tài sản hoặc nguồn thu thứ hai', mechanism: 'Phần thu nhập dôi ra được dồn vào các ngăn tiết kiệm, đầu tư hoặc xây năng lực riêng, tạo đệm dài hạn.' },
  ],
  vietnamImpact: [
    { group: 'Người làm công ăn lương một nguồn', effect: 'Phụ thuộc hoàn toàn vào một chủ sử dụng lao động; một nguồn thu phụ khác ngành có thể làm giảm cú sốc khi cắt giảm nhân sự.', direction: 'up' },
    { group: 'Người làm tự do hoặc bán hàng qua nền tảng', effect: 'Thu nhập có thể tập trung vào một nền tảng hoặc vài khách hàng; thay đổi chính sách phí hoặc thuật toán gây sụt thu nhập đồng loạt.', direction: 'down' },
    { group: 'Người có thu nhập cho thuê hoặc cổ tức', effect: 'Nguồn thu ít tốn thời gian nhưng gắn với thị trường bất động sản hoặc chứng khoán nên có thể biến động cùng chu kỳ kinh tế.', direction: 'mixed' },
    { group: 'Hộ gia đình có nhiều người đi làm', effect: 'Đa dạng hóa nằm ở cấp hộ: hai thành viên làm hai ngành khác nhau thường ổn định hơn hai người cùng một công ty hay cùng một ngành.', direction: 'up' },
  ],
  indicators: [
    { name: 'Tỷ trọng nguồn thu lớn nhất trong tổng thu nhập hộ', why: 'Nếu một nguồn chiếm phần lớn, rủi ro tập trung cao dù có nhiều nguồn nhỏ.', where: 'Tự tính từ sao kê và bảng ngân sách hằng tháng' },
    { name: 'Số tháng chi tiêu thiết yếu có thể trang trải nếu mất nguồn chính', why: 'Cho biết nguồn phụ và quỹ khẩn cấp đã đủ làm đệm chưa.', where: 'Tự tính từ chi tiêu bình quân và số dư tiết kiệm' },
    { name: 'Biến động thu nhập phụ giữa các tháng', why: 'Nguồn phụ dao động mạnh nên không nên dùng để cam kết chi cố định như trả góp.', where: 'Lịch sử thu nhập 6–12 tháng của chính bạn' },
    { name: 'Tình hình ngành và việc làm', why: 'Biết ngành đang tuyển hay cắt giảm giúp đánh giá mức độ cùng chịu cú sốc giữa việc chính và việc phụ.', where: 'Cục Thống kê (nso.gov.vn) công bố số liệu lao động và việc làm theo quý' },
  ],
  counterpoints: [
    'Đa dạng hóa không tăng thu nhập kỳ vọng nếu các nguồn có mức sinh lời như nhau; nó chủ yếu thu hẹp khoảng dao động, loại cả kết quả tốt nhất lẫn tệ nhất của một nguồn riêng lẻ.',
    'Trong khủng hoảng, tương quan giữa nhiều nguồn thu thường tăng lên, nên lợi ích đa dạng hóa yếu đúng lúc cần nhất.',
    'Với người có ít thời gian hoặc sức khỏe hạn chế, nâng cao kỹ năng để tăng thu nhập chính và củng cố quỹ khẩn cấp có thể hiệu quả hơn việc cố tìm thêm việc phụ.',
  ],
  glossary: [
    { term: 'Đa dạng hóa', definition: 'Chia nguồn lực cho nhiều thứ không biến động cùng chiều để giảm dao động của tổng thể.' },
    { term: 'Tương quan', definition: 'Mức độ hai chuỗi biến động cùng chiều; tương quan thấp thì đa dạng hóa hiệu quả hơn.' },
    { term: 'Rủi ro đặc thù', definition: 'Rủi ro chỉ ảnh hưởng một nguồn riêng (một công ty, một nền tảng, một khách hàng) và có thể giảm bằng đa dạng hóa.' },
    { term: 'Công việc gig', definition: 'Công việc ngắn hạn, theo nhiệm vụ hoặc bán hàng qua nền tảng, thường không có hợp đồng lao động ổn định.' },
    { term: 'Chi phí cơ hội', definition: 'Giá trị của phương án tốt nhất bị bỏ qua khi bạn chọn một phương án khác, ví dụ giờ nghỉ hay giờ học.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'side-income-risk-diversification-q',
    question: 'Một lập trình viên làm cho một công ty công nghệ, ngoài giờ nhận thêm dự án freelance cho đúng ngành đó. Nhận định nào hợp lý nhất về mức độ giảm rủi ro?',
    options: [
      { id: 'a', text: 'Rủi ro giảm tối đa vì đã có hai nguồn thu.', explain: 'Số lượng nguồn không phải điều quan trọng nhất; hai nguồn cùng một ngành có thể cùng sụt khi ngành cắt giảm.' },
      { id: 'b', text: 'Giảm một phần (nhất là khi mất việc ở một công ty), nhưng bảo vệ còn yếu vì hai nguồn cùng chịu cú sốc ngành.', correct: true, explain: 'Đúng. Có thêm khách hàng thì giảm rủi ro riêng của một công ty, nhưng rủi ro chung của ngành vẫn còn; tương quan càng cao thì đa dạng hóa càng yếu.' },
      { id: 'c', text: 'Không giảm gì, vì thu nhập phụ luôn kém ổn định hơn.', explain: 'Thu nhập phụ có thể biến động mạnh nhưng vẫn có thể là đệm khi mất nguồn chính; câu hỏi là mức tương quan chứ không phải loại bỏ giá trị của nguồn phụ.' },
    ],
  },
  sources: [
    { title: 'Report on the Economic Well-Being of U.S. Households in 2024 – Employment and Gig Work', publisher: 'Federal Reserve Board', url: 'https://www.federalreserve.gov/publications/2025-economic-well-being-of-us-households-in-2024-employment-and-gig-work.htm' },
    { title: 'Diversification (finance)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Diversification_(finance)' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 182,
}
