import type { Explainer } from '../../../shared/explainer'

export const vietnamStateBudgetRevenueStructure: Explainer = {
  id: 'vietnam-state-budget-revenue-structure',
  slug: 'vietnam-state-budget-revenue-structure',
  question: 'Thu ngân sách nhà nước của Việt Nam gồm những nguồn nào và nguồn nào nhạy với chu kỳ?',
  title: 'Cơ cấu thu ngân sách nhà nước và độ nhạy với chu kỳ',
  topic: 'vietnam-economy',
  tldr: 'Thu NSNN gồm **thu nội địa** (thuế, phí, thu từ đất…), **thu từ xuất nhập khẩu** và **thu từ dầu thô**. Số ước năm 2025 cho thấy thu nội địa chiếm hơn 86% tổng thu, trong đó thu từ nhà, đất vọt lên mức khoảng 21,7% tổng thu. Những khoản nhạy chu kỳ (đất, xuất nhập khẩu, dầu thô) có thể làm ngân sách biến động mạnh hơn mức tăng trưởng GDP.',
  keyPoints: [
    'Theo số ước của Cục Thống kê (công bố 5/1/2026, VnEconomy đưa tin cùng ngày): tổng thu NSNN năm 2025 khoảng 2.650,1 nghìn tỷ đồng, bằng 134,7% dự toán, tăng 29,7% so với năm 2024.',
    'Thu nội địa khoảng 2.279,9 nghìn tỷ đồng (hơn 86% tổng thu, tăng 33,2%); thu từ nhà, đất khoảng 575,5 nghìn tỷ đồng, bằng 196,4% dự toán. Tỷ trọng đất khoảng 21,7% tổng thu là phép chia ví dụ từ các số trên (575,5/2.650,1).',
    'Thu từ xuất nhập khẩu khoảng 319,8 nghìn tỷ đồng (bằng 136,1% dự toán, tăng 18,2%; khoảng 12,1% tổng thu theo phép chia); thu dầu thô gần 48,0 nghìn tỷ đồng (bằng 90,1% dự toán, giảm 18,2%; khoảng 1,8% tổng thu).',
    'Báo chí ghi nhận thu từ đất tăng mạnh nhờ đấu giá quyền sử dụng đất và cho thuê đất; đây là nguồn thu không đều và phụ thuộc thị trường bất động sản, quy hoạch, thủ tục.',
    'Theo Thông tư 49/2024/TT-BTC (bài ngày 21/7/2024): khi lập dự toán 2025, thu nội địa (không kể tiền sử dụng đất, xổ số, cổ tức, lợi nhuận sau thuế và chênh lệch thu chi của Ngân hàng Nhà nước) hướng tăng khoảng 5–7% so với ước thực hiện 2024, thu xuất nhập khẩu khoảng 4–6%.',
  ],
  causalChain: [
    { from: 'Tăng trưởng kinh tế và lợi nhuận doanh nghiệp tăng', to: 'Thu thuế nội địa tăng', mechanism: 'Thuế thu nhập doanh nghiệp, VAT và thuế thu nhập cá nhân tăng theo doanh thu, lợi nhuận và thu nhập.' },
    { from: 'Thị trường bất động sản sôi động, địa phương đẩy mạnh đấu giá đất', to: 'Thu tiền sử dụng đất và thuế chuyển nhượng tăng', mechanism: 'Giá đất, số lô đấu giá thành công và giao dịch tăng thì nguồn thu địa phương tăng vọt, ngược lại khi thị trường trầm lắng.' },
    { from: 'Kim ngạch nhập khẩu tăng và tỷ giá, thuế suất thay đổi', to: 'Thu từ xuất nhập khẩu thay đổi', mechanism: 'Thu hải quan dựa vào giá trị và cơ cấu hàng nhập khẩu; cắt giảm thuế theo hiệp định thương mại giảm thu theo thời gian.' },
    { from: 'Giá dầu thô giảm', to: 'Thu dầu thô giảm', mechanism: 'Giá và sản lượng dầu thô quyết định phần thu từ khai thác; bài VnEconomy ghi thu dầu thô giảm do biến động thị trường năng lượng.' },
    { from: 'Nguồn thu biến động chu kỳ', to: 'Khả năng chi đầu tư và thâm hụt/thặng dư thay đổi', mechanism: 'Thu tăng đột biến cho phép tăng chi hoặc giảm bội chi; khi các nguồn này suy yếu, ngân sách phải điều chỉnh chi hoặc vay.' },
  ],
  vietnamImpact: [
    { group: 'Ngân sách địa phương', effect: 'Nhiều địa phương phụ thuộc thu từ đất; khi thị trường bất động sản chậm, thu giảm mạnh và ảnh hưởng đầu tư hạ tầng.', direction: 'mixed' },
    { group: 'Doanh nghiệp xuất nhập khẩu', effect: 'Thu hải quan liên quan trực tiếp đến thuế nhập khẩu và chính sách thuế; thay đổi thuế suất ảnh hưởng chi phí.', direction: 'mixed' },
    { group: 'Người nộp thuế', effect: 'Khi nhu cầu chi tăng, áp lực mở rộng cơ sở thuế hoặc tăng thu có thể tăng; ngược lại thu vượt dự toán tạo dư địa giảm thuế/phí.', direction: 'mixed' },
    { group: 'Đầu tư công', effect: 'Thu vượt dự toán giúp có thêm nguồn cho đầu tư; nhưng khoản thu một lần (đất) không nên dùng cho chi thường xuyên.', direction: 'up' },
    { group: 'Nhà đầu tư trái phiếu', effect: 'Ngân sách thặng dư giảm áp lực phát hành trái phiếu chính phủ; ngược lại thu suy yếu làm tăng nhu cầu vay.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Thu NSNN lũy kế theo tháng và so với dự toán', why: 'Theo dõi tiến độ thu và so sánh với kế hoạch.', where: 'Cục Thống kê; Bộ Tài chính' },
    { name: 'Thu từ nhà, đất và thuế chuyển nhượng bất động sản', why: 'Khoản nhạy chu kỳ bất động sản nhất.', where: 'Bộ Tài chính; báo cáo của các địa phương' },
    { name: 'Thu xuất nhập khẩu và kim ngạch nhập khẩu', why: 'Chỉ báo nhạy chu kỳ thương mại.', where: 'Cục Hải quan; Cục Thống kê' },
    { name: 'Giá dầu thô', why: 'Quyết định khoản thu dầu thô.', where: 'Thị trường dầu thế giới; báo cáo của Bộ Tài chính' },
  ],
  counterpoints: [
    'Số ước năm 2025 sẽ được điều chỉnh khi có quyết toán; tỷ trọng tính trong bài là phép chia từ số ước, không phải số chính thức.',
    'Thu từ đất tăng mạnh một năm không có nghĩa là xu hướng bền vững; năm sau có thể thấp hơn rất nhiều.',
    'Cơ cấu thu có thể thay đổi theo cải cách thuế và các khoản thu được phân loại khác nhau giữa các nguồn báo.',
  ],
  glossary: [
    { term: 'Thu nội địa', definition: 'Các khoản thu trong nước như thuế, phí, tiền sử dụng đất, không gồm xuất nhập khẩu và dầu thô.' },
    { term: 'Thu cân đối từ xuất nhập khẩu', definition: 'Thuế và các khoản thu liên quan hoạt động xuất nhập khẩu, sau trừ hoàn thuế giá trị gia tăng.' },
    { term: 'Dự toán', definition: 'Kế hoạch thu, chi ngân sách được Quốc hội thông qua.' },
    { term: 'Nguồn thu nhạy chu kỳ', definition: 'Nguồn thu biến động mạnh theo chu kỳ kinh tế, bất động sản, thương mại hoặc giá hàng hóa.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-state-budget-revenue-structure-q',
    question: 'Thu tiền sử dụng đất vượt xa dự toán trong một năm. Cách đọc hợp lý nhất là gì?',
    options: [
      { id: 'a', text: 'Đây là nguồn thu ổn định, có thể dùng để tăng chi thường xuyên vĩnh viễn.', explain: 'Thu từ đất phụ thuộc thị trường và quy hoạch nên không đều; dùng cho chi thường xuyên dễ gây áp lực khi thu giảm.' },
      { id: 'b', text: 'Đây là khoản nhạy chu kỳ, có thể là đột biến; nên thận trọng khi coi là nền thu bền vững.', correct: true, explain: 'Đúng: thu từ đất tăng do đấu giá và cho thuê đất, có thể giảm khi thị trường hoặc thủ tục thay đổi.' },
      { id: 'c', text: 'Nó cho thấy thu thuế doanh nghiệp tăng tương ứng.', explain: 'Thu tiền sử dụng đất khác thuế doanh nghiệp, dù thuế chuyển nhượng bất động sản có thể góp phần vào thuế doanh nghiệp.' },
    ],
  },
  sources: [
    { title: 'Năm 2025, ngân sách nhà nước thặng dư hơn 248 nghìn tỷ đồng (5/1/2026)', publisher: 'VnEconomy', url: 'https://vneconomy.vn/nam-2025-ngan-sach-nha-nuoc-thang-du-hon-248-nghin-ty-dong.htm' },
    { title: 'Phấn đấu dự toán thu nội địa năm 2025 tăng tối thiểu khoảng 5–7% (21/7/2024)', publisher: 'Tạp chí Công Thương', url: 'https://tapchicongthuong.vn/phan-dau-du-toan-thu-noi-dia-nam-2025-tang-toi-thieu-khoang-5--7-123916.htm' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 129,
}
