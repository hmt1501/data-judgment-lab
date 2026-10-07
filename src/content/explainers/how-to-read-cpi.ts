import type { Explainer } from '../explainer'

export const howToReadCpi: Explainer = {
  id: 'how-to-read-cpi',
  slug: 'how-to-read-cpi',
  question: 'Đọc chỉ số giá tiêu dùng CPI thế nào cho đúng?',
  title: 'Đọc CPI đúng cách: tổng và lõi, so với tháng trước và cùng kỳ',
  topic: 'macro',
  tldr: 'CPI đo mức thay đổi giá của một **rổ hàng hóa, dịch vụ** đại diện cho chi tiêu của hộ gia đình, mỗi nhóm có một **quyền số** theo tỷ trọng chi tiêu. Muốn đọc đúng phải hỏi: đang so với **tháng trước**, **cùng kỳ năm trước** hay **bình quân kỳ**; là CPI tổng hay **lạm phát cơ bản** (đã loại các mặt hàng biến động mạnh và giá do Nhà nước quản lý). Cảm nhận "giá tăng nhanh hơn số liệu" thường xuất phát từ việc rổ chi tiêu của mỗi người khác rổ bình quân.',
  keyPoints: [
    'CPI Việt Nam do **Cục Thống kê (Bộ Tài chính)** công bố hằng tháng, gồm 11 nhóm hàng; từ tháng 11/2025 tính theo **năm gốc 2024** với danh mục 775 mặt hàng và quyền số cập nhật từ Khảo sát mức sống hộ dân cư 2024.',
    'Quyền số quyết định nhóm nào "kéo" CPI mạnh: giai đoạn 2025–2030, **hàng ăn và dịch vụ ăn uống** chiếm khoảng 35,8%, **nhà ở, điện, nước, chất đốt và VLXD** khoảng 22,7%, **giao thông** khoảng 10%.',
    'Ba phép so sánh khác nhau: **so với tháng trước** (nhạy với mùa vụ, Tết, giá xăng), **so với cùng kỳ** (xu hướng 12 tháng), và **bình quân từ đầu năm so với cùng kỳ** (thường dùng để so với mục tiêu lạm phát của Quốc hội).',
    '**Lạm phát cơ bản** loại trừ lương thực, thực phẩm tươi sống, năng lượng và mặt hàng do Nhà nước quản lý (như dịch vụ y tế, giáo dục); nó cho biết áp lực giá "nền" mà chính sách tiền tệ quan tâm.',
    'CPI đo **tốc độ tăng giá**, không đo mức giá đắt hay rẻ: lạm phát giảm từ 4% về 3% nghĩa là giá vẫn tăng, chỉ tăng chậm hơn.',
  ],
  causalChain: [
    { from: 'Giá một nhóm hàng thay đổi (ví dụ xăng dầu, thịt lợn, giá điện)', to: 'Chỉ số giá của nhóm đó thay đổi', mechanism: 'Điều tra viên thu thập giá định kỳ tại các điểm bán ở các địa phương; giá từng mặt hàng được tổng hợp thành chỉ số nhóm.' },
    { from: 'Chỉ số giá của nhóm đó thay đổi', to: 'CPI tổng thay đổi theo quyền số', mechanism: 'Mức đóng góp = biến động giá nhóm × quyền số; thực phẩm tăng 5% tác động lên CPI lớn hơn nhiều so với giáo dục tăng 5% vì quyền số khác nhau.' },
    { from: 'CPI tổng thay đổi theo quyền số', to: 'Lạm phát cơ bản có thể đi khác hướng', mechanism: 'Nếu biến động đến từ thực phẩm tươi sống, năng lượng hay giá do Nhà nước điều chỉnh, lạm phát cơ bản sẽ ít thay đổi; khoảng cách giữa hai chỉ số cho biết cú sốc là tạm thời hay lan rộng.' },
    { from: 'Lạm phát cơ bản có thể đi khác hướng', to: 'Phản ứng chính sách và kỳ vọng', mechanism: 'NHNN và Chính phủ theo dõi cả hai; lạm phát cơ bản tăng dai dẳng là tín hiệu để thận trọng hơn với nới lỏng tiền tệ, còn cú sốc giá đơn lẻ thường được xử lý bằng điều hành giá.' },
  ],
  vietnamImpact: [
    { group: 'Người lao động hưởng lương', effect: 'Nếu lương tăng chậm hơn CPI, thu nhập thực giảm; cần so sánh với CPI cùng kỳ chứ không phải CPI tháng.', direction: 'down' },
    { group: 'Người gửi tiết kiệm', effect: 'Lãi suất thực = lãi suất danh nghĩa trừ lạm phát; CPI tăng nhanh làm lãi suất thực co lại, thậm chí âm.', direction: 'down' },
    { group: 'Người vay nợ lãi suất cố định', effect: 'Lạm phát cao hơn dự kiến làm giá trị thực của khoản nợ giảm, có lợi cho người vay trong ngắn hạn.', direction: 'up' },
    { group: 'Hộ thu nhập thấp', effect: 'Chi tiêu tập trung vào ăn uống và nhà ở, hai nhóm có quyền số lớn và biến động mạnh, nên cảm nhận lạm phát thường cao hơn bình quân.', direction: 'down' },
    { group: 'Doanh nghiệp và thị trường tài chính', effect: 'CPI và lạm phát cơ bản định hướng kỳ vọng về lãi suất, từ đó ảnh hưởng chi phí vốn và định giá cổ phiếu, trái phiếu.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'CPI so với cùng kỳ và CPI bình quân từ đầu năm', why: 'Thước đo chính để so với mục tiêu lạm phát mà Quốc hội đặt ra hằng năm.', where: 'Thông cáo báo chí hằng tháng của Cục Thống kê (nso.gov.vn)' },
    { name: 'Lạm phát cơ bản', why: 'Tách áp lực giá nền khỏi cú sốc thực phẩm, năng lượng và điều chỉnh giá hành chính.', where: 'Cục Thống kê, cùng thông cáo CPI' },
    { name: 'Chỉ số giá nhóm hàng có quyền số lớn (thực phẩm, nhà ở – điện nước, giao thông)', why: 'Cho biết nhóm nào đang "kéo" CPI, từ đó đoán cú sốc có kéo dài không.', where: 'Bảng chi tiết trong thông cáo CPI của Cục Thống kê' },
    { name: 'Giá xăng dầu điều hành và lịch điều chỉnh giá điện, học phí, dịch vụ y tế', why: 'Các mặt hàng do Nhà nước quản lý có thể làm CPI nhảy bậc trong một tháng.', where: 'Bộ Công Thương, Bộ Tài chính; thông báo của EVN' },
  ],
  counterpoints: [
    'Rổ hàng và quyền số chỉ cập nhật theo chu kỳ khoảng 5 năm, nên giữa kỳ CPI có thể chưa phản ánh kịp thay đổi thói quen chi tiêu (ví dụ dịch vụ số, ăn ngoài).',
    'CPI không bao gồm giá tài sản như nhà đất hay cổ phiếu; giá nhà tăng mạnh không trực tiếp làm CPI tăng, dù ảnh hưởng lớn tới cảm nhận "đắt đỏ".',
    'Biến động một tháng rất dễ bị nhiễu bởi Tết, thời tiết, dịch bệnh vật nuôi; nên nhìn xu hướng vài tháng và CPI cùng kỳ trước khi kết luận.',
  ],
  glossary: [
    { term: 'CPI', definition: 'Chỉ số giá tiêu dùng, đo biến động giá của rổ hàng hóa, dịch vụ đại diện cho chi tiêu của hộ gia đình.' },
    { term: 'Quyền số', definition: 'Tỷ trọng chi tiêu của từng nhóm hàng trong tổng chi tiêu; quyết định mức ảnh hưởng của nhóm đó lên CPI.' },
    { term: 'Năm gốc', definition: 'Năm dùng làm mốc để chọn rổ hàng và quyền số; Việt Nam hiện dùng năm gốc 2024.' },
    { term: 'Lạm phát cơ bản', definition: 'CPI sau khi loại trừ lương thực, thực phẩm tươi sống, năng lượng và mặt hàng do Nhà nước quản lý giá.' },
    { term: 'So với cùng kỳ (YoY)', definition: 'So sánh với cùng thời điểm năm trước, giúp loại bỏ phần lớn yếu tố mùa vụ.' },
    { term: 'Lãi suất thực', definition: 'Lãi suất danh nghĩa trừ đi tỷ lệ lạm phát.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'how-to-read-cpi-q',
    question: 'Tháng 2, CPI tăng 1,2% so với tháng trước, trong khi CPI so với cùng kỳ vẫn quanh 3% và lạm phát cơ bản gần như không đổi. Cách đọc nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Lạm phát đang bùng nổ, năm nay giá sẽ tăng khoảng 14%.', explain: 'Nhân một tháng lên 12 là sai lầm phổ biến; tháng Tết thường có giá thực phẩm, dịch vụ tăng theo mùa vụ rồi hạ nhiệt.' },
      { id: 'b', text: 'Đây chủ yếu là yếu tố mùa vụ hoặc cú sốc giá tạm thời; xu hướng nền chưa thay đổi.', correct: true, explain: 'Đúng. CPI cùng kỳ ổn định và lạm phát cơ bản không đổi cho thấy biến động nằm ở nhóm biến động mạnh (thực phẩm, năng lượng), cần theo dõi thêm vài tháng.' },
      { id: 'c', text: 'Số liệu CPI không đáng tin vì tôi thấy giá chợ tăng nhiều hơn.', explain: 'Rổ chi tiêu của mỗi người khác rổ bình quân cả nước; cảm nhận cá nhân có giá trị nhưng không bác bỏ được chỉ số tổng hợp.' },
    ],
  },
  sources: [
    { title: 'Phương án điều tra giá tiêu dùng (CPI) giai đoạn 2025–2030 (năm gốc 2024)', publisher: 'Cục Thống kê', url: 'https://www.nso.gov.vn/wp-content/uploads/2026/01/DVG_Infographics-CPI-1.pdf' },
    { title: 'What is inflation?', publisher: 'Bank of England', url: 'https://www.bankofengland.co.uk/explainers/what-is-inflation' },
    { title: 'What is inflation?', publisher: 'European Central Bank', url: 'https://www.ecb.europa.eu/ecb-and-you/explainers/tell-me-more/html/what_is_inflation.en.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
