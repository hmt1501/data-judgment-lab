import type { Explainer } from '../../../shared/explainer'

export const gdpDeflatorVsCpi: Explainer = {
  id: 'gdp-deflator-vs-cpi',
  slug: 'gdp-deflator-vs-cpi',
  question: 'Hệ số giảm phát GDP khác CPI thế nào và nên đọc khi nào?',
  title: 'Hệ số giảm phát GDP và CPI: khác nhau gì, đọc khi nào',
  topic: 'vietnam-economy',
  tldr: 'CPI đo giá **một rổ cố định mà hộ gia đình mua** (kể cả hàng nhập khẩu); hệ số giảm phát GDP đo giá **toàn bộ sản phẩm sản xuất trong nước** (tiêu dùng, đầu tư, chi tiêu chính phủ, xuất khẩu), với tỷ trọng đổi theo cơ cấu GDP. Hai chỉ số thường gần nhau nhưng có thể lệch khi giá nhập khẩu, giá xuất khẩu hoặc giá hàng đầu tư biến động mạnh.',
  keyPoints: [
    'Công thức theo Wikipedia: hệ số giảm phát = GDP danh nghĩa / GDP thực × 100; năm gốc bằng 100 theo định nghĩa.',
    'CPI dùng rổ cố định; hệ số giảm phát không dựa vào rổ cố định, nên phản ánh cả sự dịch chuyển cơ cấu sản xuất.',
    'Phạm vi khác nhau: hệ số giảm phát chỉ gồm hàng hóa, dịch vụ sản xuất trong nước (loại trừ hàng nhập khẩu), còn CPI gồm hàng nhập khẩu mà hộ gia đình mua.',
    'Số liệu GDP của Việt Nam do Cục Thống kê công bố cả theo giá hiện hành (năm 2025 ước 12.847,6 nghìn tỷ đồng, khoảng 514 tỷ USD) và mức tăng GDP (ước 8,02%, họp báo ngày 5/1/2026; thường được hiểu là mức tăng thực). Để tính hệ số giảm phát cần GDP danh nghĩa và GDP thực của cùng một kỳ; bài này không nêu trị số hệ số giảm phát của Việt Nam, bạn có thể tự tính từ hai chuỗi đó trên trang Cục Thống kê.',
    'Dùng CPI để hỏi "sức mua của hộ gia đình thay đổi thế nào"; dùng hệ số giảm phát để đổi GDP danh nghĩa sang thực và để xem áp lực giá trên toàn bộ sản lượng nội địa.',
  ],
  causalChain: [
    { from: 'Giá dầu và hàng nhập khẩu tăng', to: 'CPI tăng nhưng hệ số giảm phát tăng ít hơn', mechanism: 'Hàng nhập khẩu nằm trong rổ tiêu dùng nhưng không nằm trong sản lượng sản xuất trong nước, nên CPI nhạy với giá nhập khẩu hơn.' },
    { from: 'Giá xuất khẩu của hàng nội địa tăng', to: 'Hệ số giảm phát tăng nhiều hơn CPI', mechanism: 'Hàng xuất khẩu là một phần GDP nhưng không nằm trong rổ chi tiêu của hộ gia đình trong nước.' },
    { from: 'Giá hàng đầu tư (xây dựng, máy móc) biến động', to: 'Hệ số giảm phát đổi mà CPI ít đổi', mechanism: 'Hệ số giảm phát gồm cả đầu tư và chi tiêu chính phủ, CPI chỉ gồm tiêu dùng hộ gia đình.' },
    { from: 'Cơ cấu chi tiêu thay đổi', to: 'Quyền số của hệ số giảm phát tự điều chỉnh', mechanism: 'Hệ số giảm phát dựa trên cơ cấu sản lượng từng năm, còn CPI giữ rổ và quyền số theo kỳ cập nhật.' },
  ],
  vietnamImpact: [
    { group: 'Người đọc số liệu GDP', effect: 'Biết GDP danh nghĩa tăng bao nhiêu phần là giá, bao nhiêu phần là khối lượng; không nhầm quy mô GDP theo USD với tăng trưởng thực.', direction: 'mixed' },
    { group: 'Hộ gia đình', effect: 'CPI mới sát với chi phí sinh hoạt; hệ số giảm phát có thể lệch nếu giá xuất khẩu hoặc đầu tư biến động.', direction: 'mixed' },
    { group: 'Doanh nghiệp xuất khẩu', effect: 'Giá xuất khẩu tăng nâng hệ số giảm phát và GDP danh nghĩa mà không làm CPI tăng tương ứng.', direction: 'up' },
    { group: 'Nhà hoạch định chính sách', effect: 'Xem cả hai chỉ số để phân biệt áp lực giá từ tiêu dùng với áp lực giá trên toàn bộ nền kinh tế.', direction: 'mixed' },
    { group: 'Nhà phân tích nợ và ngân sách', effect: 'Tỷ lệ nợ, thâm hụt tính trên GDP danh nghĩa nên giá chung (hệ số giảm phát) ảnh hưởng mẫu số.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'GDP theo giá hiện hành và mức tăng GDP thực', why: 'Từ hai chuỗi này tính được hệ số giảm phát và hiểu phần giá trong tăng trưởng danh nghĩa.', where: 'Cục Thống kê (nso.gov.vn), thông cáo kinh tế – xã hội hằng quý' },
    { name: 'CPI so với cùng kỳ và lạm phát cơ bản', why: 'Đối chiếu với hệ số giảm phát để thấy chênh lệch do nhập khẩu hay xuất khẩu.', where: 'Cục Thống kê' },
    { name: 'Chỉ số giá xuất khẩu, nhập khẩu', why: 'Giải thích vì sao hai chỉ số giá lệch nhau.', where: 'Cục Thống kê; Hải quan' },
    { name: 'Chỉ số giá sản xuất (PPI)', why: 'Giá ở khâu sản xuất, là mắt xích giữa giá đầu vào và CPI.', where: 'Cục Thống kê' },
  ],
  counterpoints: [
    'Cả hai chỉ số đều là bình quân; không phản ánh đúng chi phí của một hộ cụ thể.',
    'Hệ số giảm phát được tính sau, chỉ cập nhật theo kỳ công bố GDP (hằng quý), trong khi CPI có hằng tháng, nên không thay được CPI trong theo dõi lạm phát kịp thời.',
    'Khi năm gốc hoặc phương pháp tính giá so sánh đổi, chuỗi lịch sử có thể bị hiệu chỉnh, làm so sánh giữa các giai đoạn kém chắc chắn.',
  ],
  glossary: [
    { term: 'Hệ số giảm phát GDP (GDP deflator)', definition: 'GDP danh nghĩa chia GDP thực, nhân 100; đo mức giá của toàn bộ sản phẩm sản xuất trong nước.' },
    { term: 'GDP danh nghĩa / giá hiện hành', definition: 'GDP tính theo giá của chính năm đó.' },
    { term: 'GDP thực / giá so sánh', definition: 'GDP tính theo giá của năm gốc để loại bỏ ảnh hưởng của giá.' },
    { term: 'Rổ cố định', definition: 'Danh mục hàng hóa, dịch vụ không đổi trong kỳ cập nhật dùng để tính CPI.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'gdp-deflator-vs-cpi-q',
    question: 'Giá dầu nhập khẩu tăng mạnh, giá hàng sản xuất trong nước gần như không đổi. Chỉ số nào có khả năng tăng nhiều hơn?',
    options: [
      { id: 'a', text: 'Hệ số giảm phát GDP, vì dầu là một phần GDP.', explain: 'Hệ số giảm phát chỉ gồm sản phẩm sản xuất trong nước; hàng nhập khẩu không nằm trong đó.' },
      { id: 'b', text: 'CPI, vì hàng nhập khẩu hộ gia đình mua nằm trong rổ tiêu dùng.', correct: true, explain: 'Đúng: CPI tính cả hàng nhập khẩu hộ gia đình tiêu dùng, nên nhạy với cú sốc giá nhập khẩu hơn.' },
      { id: 'c', text: 'Hai chỉ số luôn tăng cùng mức nên không có gì khác nhau.', explain: 'Hai chỉ số thường gần nhau nhưng lệch khi giá nhập khẩu, xuất khẩu hoặc hàng đầu tư biến động riêng.' },
    ],
  },
  sources: [
    { title: 'GDP deflator', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/GDP_deflator' },
    { title: 'Thông cáo: GDP năm 2025 ước tăng 8,02% (họp báo 5/1/2026)', publisher: 'Cục Thống kê (nso.gov.vn)', url: 'https://www.nso.gov.vn/?p=59699' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 124,
}
