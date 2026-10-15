import type { Explainer } from '../../../shared/explainer'

export const socialHousingAffordabilityVietnam: Explainer = {
  id: 'social-housing-affordability-vietnam',
  slug: 'social-housing-affordability-vietnam',
  question: 'Đo khả năng chi trả nhà ở thế nào, và nhà ở xã hội giải quyết được đến đâu?',
  title: 'Khả năng chi trả nhà ở: dùng price-to-income và tỷ lệ trả nợ trên thu nhập',
  topic: 'real-estate',
  tldr: 'Khả năng chi trả nhà ở thường đo bằng **giá nhà / thu nhập hằng năm** (price-to-income) và **khoản trả nợ hằng tháng / thu nhập**. Hai thước đo này cho thấy vì sao nhà giá "vừa phải" vẫn có thể ngoài tầm với của nhóm thu nhập thấp, và vì sao nhà ở xã hội chỉ hiệu quả khi nguồn cung, điều kiện mua và tín dụng ưu đãi cùng khớp.',
  keyPoints: [
    '**Price-to-income (PIR)** = giá nhà / thu nhập hộ một năm. Số càng cao, càng cần nhiều năm thu nhập để mua; đô thị lớn thường cao hơn nhiều so với toàn quốc.',
    'Thước đo thứ hai là **gánh nặng nợ**: tiền gốc + lãi hằng tháng chia cho thu nhập; mức quá cao khiến hộ dễ vỡ nợ khi thu nhập hoặc lãi suất biến động.',
    'Ví dụ giả định: căn hộ 2,0 tỷ, hộ thu nhập 15 triệu/tháng (180 triệu/năm) có PIR khoảng **11,1** lần, tức hơn 11 năm toàn bộ thu nhập chưa trừ chi tiêu.',
    'Nhà ở xã hội làm giảm giá bán/thuê và lãi vay cho nhóm đủ điều kiện, nhưng hiệu quả phụ thuộc vào **nguồn cung thực tế**, thủ tục và vị trí gần nơi làm việc.',
    'Hỗ trợ phía cầu (cho vay ưu đãi) mà thiếu hỗ trợ phía cung (quỹ đất, nhà đầu tư) có thể đẩy giá lên thay vì giúp người mua.',
  ],
  causalChain: [
    { from: 'Giá nhà tăng nhanh hơn thu nhập', to: 'PIR và gánh nặng nợ tăng', mechanism: 'Cùng một khoản vay phải kéo dài hơn hoặc trả trước nhiều hơn; tỷ lệ trả nợ trên thu nhập vượt ngưỡng an toàn.' },
    { from: 'Khả năng chi trả giảm', to: 'Nhóm thu nhập thấp - trung bình bị đẩy khỏi thị trường', mechanism: 'Họ chuyển sang thuê hoặc ở xa trung tâm, kéo theo chi phí đi lại và áp lực lên nhà ở cho thuê.' },
    { from: 'Chính sách nhà ở xã hội (đất, ưu đãi, vốn vay lãi thấp)', to: 'Nguồn cung giá thấp tăng', mechanism: 'Chủ đầu tư được ưu đãi đổi lại giới hạn giá bán và đối tượng mua. Theo Báo Đại biểu Nhân dân (10/5/2024), Luật Nhà ở 2023 cho chủ đầu tư ưu đãi thuế GTGT và thuế TNDN, vay vốn lãi suất ưu đãi, với lợi nhuận định mức tối đa 10% tổng chi phí đầu tư xây dựng phần nhà ở xã hội.' },
    { from: 'Nguồn cung nhà ở xã hội chậm hoặc ít', to: 'Chính sách khó chạm tới người cần', mechanism: 'Thủ tục dài, chi phí vốn của chủ đầu tư và giới hạn lợi nhuận làm dự án chậm triển khai; cầu vượt cung.' },
  ],
  vietnamImpact: [
    { group: 'Người thu nhập thấp, lao động trẻ đô thị', effect: 'Hưởng lợi nếu đủ điều kiện và có dự án phù hợp; nếu không, phải thuê hoặc ở xa, chi phí đi lại tăng.', direction: 'mixed' },
    { group: 'Người vay mua nhà', effect: 'PIR cao đồng nghĩa khoản vay lớn và dài; lãi suất thả nổi làm gánh nặng biến động.', direction: 'down' },
    { group: 'Chủ đầu tư nhà ở xã hội', effect: 'Có ưu đãi đất/thuế nhưng bị giới hạn lợi nhuận và giá; dòng tiền chậm làm khó thu hút vốn.', direction: 'mixed' },
    { group: 'Doanh nghiệp, khu công nghiệp', effect: 'Nhà ở gần nơi làm việc giúp giữ chân lao động và giảm áp lực tăng lương.', direction: 'up' },
    { group: 'Ngân sách và hệ thống ngân hàng', effect: 'Gói tín dụng ưu đãi tạo nghĩa vụ ngân sách/ngân hàng và cần giám sát chất lượng nợ.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'PIR theo thành phố và phân khúc', why: 'Cho thấy ai thực sự mua được và xu hướng khả năng chi trả theo thời gian.', where: 'Tự tính từ giá giao dịch (báo cáo thị trường, Bộ Xây dựng) và thu nhập bình quân (Cục Thống kê, nso.gov.vn)' },
    { name: 'Tỷ lệ trả nợ trên thu nhập (DSR) của hộ vay mua nhà', why: 'Đo rủi ro trả nợ hơn là chỉ nhìn giá.', where: 'Ngân hàng Nhà nước, thống kê của ngân hàng; BIS có dữ liệu so sánh quốc tế' },
    { name: 'Số căn nhà ở xã hội hoàn thành so với mục tiêu', why: 'Đo mức chính sách chuyển thành nguồn cung thực.', where: 'Bộ Xây dựng, báo cáo của Chính phủ' },
    { name: 'Lãi suất cho vay mua nhà và gói ưu đãi', why: 'Quyết định khoản trả hằng tháng của hộ vay.', where: 'Ngân hàng Nhà nước (sbv.gov.vn), niêm yết của ngân hàng' },
  ],
  counterpoints: [
    'PIR dùng thu nhập bình quân che khuất phân hóa: nhóm thu nhập thấp có PIR thực cao hơn nhiều, còn hộ có thu nhập bổ sung (cho thuê, hỗ trợ gia đình) thấp hơn.',
    'Mua nhà không phải là cách duy nhất; thị trường thuê tốt có thể giải quyết nhu cầu ở mà không cần PIR thấp.',
    'Trợ giá nhà ở xã hội có thể lệch đối tượng nếu kiểm tra điều kiện lỏng; mục tiêu xã hội cần đi cùng giám sát.',
  ],
  glossary: [
    { term: 'Nhà ở xã hội', definition: 'Nhà ở có hỗ trợ của Nhà nước, dành cho các nhóm đối tượng theo quy định, với giá và điều kiện mua/thuê ưu đãi.' },
    { term: 'PIR', definition: 'Price-to-income ratio: giá nhà chia cho thu nhập hộ một năm.' },
    { term: 'DSR', definition: 'Debt service ratio: tiền trả nợ (gốc + lãi) chia cho thu nhập trong cùng kỳ.' },
    { term: 'Khả năng chi trả', definition: 'Mức độ một hộ có thể mua/thuê nhà mà vẫn đủ cho chi tiêu thiết yếu.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'social-housing-affordability-vietnam-q',
    question: 'Chính quyền cho vay lãi thấp cho người mua nhà ở xã hội nhưng nguồn cung dự án rất ít. Điều gì dễ xảy ra?',
    options: [
      { id: 'a', text: 'Khả năng chi trả cải thiện đồng đều cho mọi người thu nhập thấp.', explain: 'Cầu được hỗ trợ nhưng cung không tăng thì chỉ một nhóm nhỏ mua được; phần còn lại không hưởng lợi.' },
      { id: 'b', text: 'Cầu vượt cung, người đủ điều kiện xếp hàng dài, và hỗ trợ có thể bị hấp thụ vào giá nếu không kiểm soát.', correct: true, explain: 'Đúng. Hỗ trợ phía cầu mà thiếu phía cung khó thu hẹp PIR; cần mở rộng quỹ đất và cung nhà song song.' },
      { id: 'c', text: 'PIR tự giảm vì lãi suất thấp.', explain: 'PIR chỉ phụ thuộc giá và thu nhập; lãi thấp giảm khoản trả hằng tháng (DSR) chứ không giảm giá.' },
    ],
  },
  sources: [
    { title: 'Doanh nghiệp yên tâm khi đầu tư vào nhà ở xã hội (10/5/2024)', publisher: 'Báo Đại biểu Nhân dân', url: 'https://daibieunhandan.vn/doanh-nghiep-yen-tam-khi-dau-tu-vao-nha-o-xa-hoi-10336760.html' },
    { title: 'Housing affordability', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Housing_affordability' },
    { title: 'Urban Development', publisher: 'World Bank', url: 'https://www.worldbank.org/en/topic/urbandevelopment/overview' },
    { title: 'Residential property prices - overview', publisher: 'Bank for International Settlements (BIS)', url: 'https://www.bis.org/statistics/pp.htm' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 26,
}
