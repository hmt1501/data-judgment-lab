import type { Explainer } from '../explainer'

export const publicDebtGovernmentBonds: Explainer = {
  id: 'public-debt-government-bonds',
  slug: 'public-debt-government-bonds',
  question: 'Nợ công và trái phiếu chính phủ là gì, lợi suất trái phiếu nói gì về nền kinh tế?',
  title: 'Nợ công và trái phiếu chính phủ: đo thế nào, ai mua, lợi suất nói gì',
  topic: 'macro',
  tldr: 'Nợ công thường được đo bằng **tỷ lệ nợ/GDP**; với Việt Nam, giai đoạn 2021–2025 Quốc hội đặt trần **60% GDP** (ngưỡng cảnh báo 55%) và Chính phủ ước tỷ lệ cuối 2025 khoảng 35–36% GDP. Phần lớn khoản vay trong nước được huy động qua **trái phiếu chính phủ (TPCP)** do Kho bạc Nhà nước đấu thầu, người mua chủ yếu là ngân hàng thương mại và nhà đầu tư tổ chức. **Lợi suất TPCP** là "lãi suất phi rủi ro" bằng VND, phản ánh kỳ vọng lãi suất, lạm phát và mức độ tin cậy của ngân sách, và làm mốc định giá cho nhiều khoản vay khác.',
  keyPoints: [
    '**Nợ công** gồm nợ Chính phủ, nợ được Chính phủ bảo lãnh và nợ của chính quyền địa phương; **nợ Chính phủ** là phần lớn nhất. Giai đoạn 2021–2025, trần nợ Chính phủ là 50% GDP, trần nợ nước ngoài quốc gia là 50% GDP.',
    'Tỷ lệ nợ/GDP thay đổi theo **cả tử số lẫn mẫu số**: GDP danh nghĩa tăng nhanh có thể làm tỷ lệ nợ giảm dù số nợ tuyệt đối vẫn tăng.',
    'TPCP được phát hành chủ yếu qua **đấu thầu trên HNX**; **ngân hàng thương mại** nắm giữ phần lớn, cùng với công ty bảo hiểm và Bảo hiểm xã hội, nên thị trường TPCP gắn chặt với thanh khoản ngân hàng.',
    '**Lợi suất TPCP** tăng khi thanh khoản thắt lại, kỳ vọng lạm phát tăng hoặc nhu cầu vay của ngân sách lớn; giảm khi tiền dồi dào và kỳ vọng lãi suất đi xuống.',
    '**Đường cong lợi suất** (lợi suất theo các kỳ hạn) cho biết thị trường kỳ vọng gì về lãi suất và tăng trưởng trong tương lai, không chỉ ở hiện tại.',
  ],
  causalChain: [
    { from: 'Ngân sách cần vay (bội chi, đáo hạn nợ cũ, đầu tư công)', to: 'Kho bạc Nhà nước phát hành TPCP', mechanism: 'Bộ Tài chính lên kế hoạch vay; Kho bạc đấu thầu TPCP các kỳ hạn qua HNX theo khối lượng gọi thầu.' },
    { from: 'Kho bạc Nhà nước phát hành TPCP', to: 'Lợi suất trúng thầu hình thành', mechanism: 'Ngân hàng, bảo hiểm và các tổ chức đặt thầu; khi cung trái phiếu lớn hoặc thanh khoản ngân hàng eo hẹp, họ đòi lợi suất cao hơn.' },
    { from: 'Lợi suất trúng thầu hình thành', to: 'Mốc lãi suất phi rủi ro VND thay đổi', mechanism: 'Lợi suất TPCP được dùng làm chuẩn để định giá trái phiếu doanh nghiệp, các khoản vay dài hạn và lãi suất chiết khấu khi định giá tài sản.' },
    { from: 'Mốc lãi suất phi rủi ro VND thay đổi', to: 'Chi phí vốn của nền kinh tế và chi phí trả lãi của ngân sách', mechanism: 'Lợi suất cao kéo chi phí vay chung lên và làm tăng nghĩa vụ trả lãi trong tương lai; lợi suất thấp giúp ngân sách vay rẻ và hỗ trợ định giá tài sản.' },
  ],
  vietnamImpact: [
    { group: 'Ngân sách nhà nước', effect: 'Lợi suất thấp giúp vay rẻ, kéo dài kỳ hạn nợ; lợi suất cao làm chi trả lãi chiếm phần lớn hơn trong thu ngân sách.', direction: 'mixed' },
    { group: 'Ngân hàng thương mại', effect: 'Nắm nhiều TPCP: lợi suất giảm (giá trái phiếu tăng) có lợi cho danh mục, lợi suất tăng gây lỗ định giá.', direction: 'mixed' },
    { group: 'Doanh nghiệp phát hành trái phiếu, đi vay dài hạn', effect: 'Lợi suất TPCP tăng đẩy mặt bằng lãi suất trái phiếu doanh nghiệp và vay dài hạn lên.', direction: 'down' },
    { group: 'Nhà đầu tư cá nhân', effect: 'Lợi suất TPCP là mốc so sánh: khi nó tăng, yêu cầu lợi nhuận đối với cổ phiếu, bất động sản cũng cao hơn.', direction: 'mixed' },
    { group: 'Xếp hạng tín nhiệm quốc gia', effect: 'Nợ công trong ngưỡng an toàn và kỷ luật ngân sách hỗ trợ triển vọng tín nhiệm, giúp giảm chi phí vay nước ngoài.', direction: 'up' },
  ],
  indicators: [
    { name: 'Nợ công, nợ Chính phủ, nợ nước ngoài (% GDP)', why: 'So với trần và ngưỡng cảnh báo do Quốc hội đặt ra.', where: 'Bản tin nợ công của Bộ Tài chính; báo cáo Chính phủ trình Quốc hội' },
    { name: 'Nghĩa vụ trả nợ trực tiếp của Chính phủ so với thu ngân sách', why: 'Đo áp lực trả nợ thực tế, thường quan trọng hơn tỷ lệ nợ/GDP.', where: 'Bộ Tài chính; báo cáo của Quốc hội' },
    { name: 'Lợi suất TPCP kỳ hạn 5, 10, 15 năm', why: 'Mốc lãi suất dài hạn VND; độ dốc đường cong phản ánh kỳ vọng.', where: 'Kết quả đấu thầu và giao dịch TPCP trên HNX; AsianBondsOnline (ADB)' },
    { name: 'Tỷ lệ trúng thầu so với khối lượng gọi thầu', why: 'Cho biết sức hấp thụ của thị trường đối với nhu cầu vay của ngân sách.', where: 'HNX công bố sau mỗi phiên đấu thầu' },
    { name: 'Bội chi ngân sách (% GDP)', why: 'Bội chi lớn kéo dài là nguồn tạo ra nợ mới.', where: 'Bộ Tài chính; dự toán ngân sách Quốc hội thông qua' },
  ],
  counterpoints: [
    'Tỷ lệ nợ/GDP thấp chưa nói hết: cơ cấu nợ (ngoại tệ hay nội tệ, kỳ hạn ngắn hay dài, lãi suất cố định hay thả nổi) quyết định mức độ rủi ro nhiều không kém.',
    'Lợi suất TPCP Việt Nam chịu ảnh hưởng mạnh của thanh khoản ngân hàng, nên nó có thể giảm do tiền thừa trong hệ thống chứ không hẳn vì rủi ro tài khóa giảm.',
    'Vay thêm để đầu tư hạ tầng hiệu quả có thể làm GDP tăng nhanh hơn nợ trong dài hạn; ngược lại, đầu tư công giải ngân chậm hoặc kém hiệu quả làm nợ tăng mà không tạo ra tăng trưởng.',
  ],
  glossary: [
    { term: 'Nợ công', definition: 'Tổng nợ của Chính phủ, nợ được Chính phủ bảo lãnh và nợ của chính quyền địa phương.' },
    { term: 'Trái phiếu chính phủ (TPCP)', definition: 'Giấy nợ do Bộ Tài chính (qua Kho bạc Nhà nước) phát hành để huy động vốn cho ngân sách.' },
    { term: 'Lợi suất trái phiếu', definition: 'Tỷ suất sinh lời nhà đầu tư nhận được nếu mua trái phiếu ở giá hiện tại và giữ tới đáo hạn; đi ngược chiều với giá trái phiếu.' },
    { term: 'Đường cong lợi suất', definition: 'Đồ thị lợi suất theo kỳ hạn; dốc lên là bình thường, phẳng hoặc đảo ngược thường báo hiệu kỳ vọng tăng trưởng yếu đi.' },
    { term: 'Bội chi ngân sách', definition: 'Phần chi vượt thu của ngân sách trong năm, phải bù đắp bằng vay nợ.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'public-debt-government-bonds-q',
    question: 'Lợi suất TPCP 10 năm giảm mạnh trong 6 tháng, đúng lúc thanh khoản ngân hàng dư thừa và tín dụng tăng chậm. Cách đọc nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Rủi ro nợ công của Việt Nam chắc chắn đã giảm mạnh.', explain: 'Lợi suất có thể giảm vì ngân hàng thừa tiền và tìm đến tài sản an toàn, không nhất thiết vì tình hình tài khóa thay đổi.' },
      { id: 'b', text: 'Ngân hàng dồn tiền nhàn rỗi vào TPCP khi cho vay khó, đẩy giá trái phiếu lên và lợi suất xuống; cần xem thêm lạm phát và kỳ vọng lãi suất.', correct: true, explain: 'Đúng. Ở Việt Nam, ngân hàng là người mua chính, nên lợi suất TPCP phản ánh mạnh thanh khoản hệ thống và cầu tín dụng, bên cạnh kỳ vọng lạm phát.' },
      { id: 'c', text: 'Chính phủ sắp vỡ nợ nên nhà đầu tư bán tháo trái phiếu.', explain: 'Bán tháo sẽ làm giá giảm và lợi suất tăng, ngược với diễn biến đề bài.' },
    ],
  },
  sources: [
    { title: 'Trần nợ công giảm xuống 60% GDP, ngưỡng cảnh báo 55% GDP', publisher: 'Thời báo Tài chính Việt Nam', url: 'https://thoibaotaichinhvietnam.vn/tran-no-cong-giam-xuong-60-gdp-nguong-canh-bao-55-gdp-51087.html' },
    { title: 'Nợ công năm 2025 thấp xa ngưỡng trần, nhu cầu vay năm 2026 tăng gần 19%', publisher: 'VnEconomy', url: 'https://vneconomy.vn/no-cong-nam-2025-thap-xa-nguong-tran-nhu-cau-vay-nam-2026-tang-gan-19.htm' },
    { title: 'AsianBondsOnline – Viet Nam', publisher: 'Asian Development Bank', url: 'https://asianbondsonline.adb.org/economy/?economy=VN' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
