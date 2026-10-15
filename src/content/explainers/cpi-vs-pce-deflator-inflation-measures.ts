import type { Explainer } from '../../../shared/explainer'

export const cpiVsPceDeflatorInflationMeasures: Explainer = {
  id: 'cpi-vs-pce-deflator-inflation-measures',
  slug: 'cpi-vs-pce-deflator-inflation-measures',
  question: 'CPI, PCE và hệ số giảm phát GDP đo lạm phát khác nhau thế nào?',
  title: 'Các thước đo lạm phát: CPI, PCE và hệ số giảm phát GDP',
  topic: 'macro',
  tldr: 'Ba thước đo cùng trả lời "giá tăng bao nhiêu" nhưng **đo những thứ khác nhau**. **CPI** theo dõi giá rổ hàng người tiêu dùng mua; **PCE** (Mỹ) cũng là chi tiêu tiêu dùng nhưng xây dựng khác; **hệ số giảm phát GDP** đo giá của hàng hóa, dịch vụ **sản xuất trong nước**, kể cả đầu tư và xuất khẩu, và không gồm hàng nhập khẩu. Khi các thước đo lệch nhau, nguyên nhân thường nằm ở phạm vi và cách tính, không phải ai "nói dối".',
  keyPoints: [
    'Theo BEA (Mỹ): **chỉ số giá GDP và hệ số giảm phát GDP** đo giá hàng hóa, dịch vụ sản xuất trong nước, kể cả xuất khẩu, **không gồm nhập khẩu**; **chỉ số giá PCE** đo giá hàng hóa, dịch vụ người tiêu dùng Mỹ mua.',
    'PCE và CPI của BLS tương tự về ý tưởng nhưng **được xây dựng khác nhau**, nên tỷ lệ lạm phát khác nhau; BEA nêu PCE ghi nhận được việc người mua thay thế sang hàng rẻ hơn (như chuyển từ thịt bò sang thịt gà).',
    'Hệ số giảm phát GDP = GDP danh nghĩa / GDP thực × 100; khác CPI ở chỗ **rổ hàng thay đổi hằng năm** theo cấu trúc sản xuất, còn CPI dựa trên một rổ hàng cố định giữa các lần cập nhật quyền số (theo Wikipedia: hệ số giảm phát "không dựa trên rổ cố định").',
    'CPI không có hàng đầu tư/xuất khẩu của doanh nghiệp, còn hệ số giảm phát không có hàng nhập khẩu tiêu dùng; vì thế khi giá dầu nhập khẩu tăng, CPI phản ứng nhiều hơn hệ số giảm phát.',
    'Dùng thước nào tùy mục đích: CPI cho sức mua hộ gia đình và điều chỉnh hợp đồng/lương; hệ số giảm phát để quy GDP danh nghĩa ra thực; PCE chủ yếu được dùng cho phân tích và dự báo vĩ mô ở Mỹ (theo BEA).',
  ],
  causalChain: [
    { from: 'Giá hàng nhập khẩu tăng (ví dụ xăng dầu)', to: 'CPI tăng, hệ số giảm phát GDP ít thay đổi', mechanism: 'CPI gồm hàng người dân mua kể cả hàng nhập khẩu; hệ số giảm phát chỉ tính hàng sản xuất trong nước nên không gồm giá hàng nhập khẩu.' },
    { from: 'Giá xuất khẩu hoặc hàng đầu tư sản xuất trong nước tăng', to: 'Hệ số giảm phát tăng, CPI ít thay đổi', mechanism: 'Các hàng hóa này nằm trong GDP nhưng không nằm trong rổ chi tiêu của hộ gia đình.' },
    { from: 'Người tiêu dùng chuyển sang hàng thay thế khi giá tăng', to: 'Thước đo cập nhật rổ (PCE, hệ số giảm phát) tăng chậm hơn rổ cố định', mechanism: 'Rổ cố định không phản ánh hành vi thay thế nên thường cho lạm phát cao hơn.' },
    { from: 'Hệ số giảm phát GDP', to: 'Chuyển GDP danh nghĩa thành GDP thực', mechanism: 'Chia GDP danh nghĩa cho hệ số giảm phát (so với năm gốc) để tách phần tăng giá khỏi phần tăng sản lượng.' },
  ],
  vietnamImpact: [
    { group: 'Người đọc số liệu tăng trưởng GDP', effect: 'GDP thực được tính bằng cách loại phần tăng giá; hệ số giảm phát (hay chỉ số giá dùng để quy đổi) ảnh hưởng đến tăng trưởng thực công bố.', direction: 'mixed' },
    { group: 'Người lao động, đàm phán lương', effect: 'CPI sát với giá cả hộ gia đình gặp, nên là tham chiếu hợp lý nhất khi so tăng lương với giá cả.', direction: 'mixed' },
    { group: 'Doanh nghiệp nhập khẩu nguyên liệu', effect: 'Giá nhập khẩu tăng đẩy chi phí và có thể làm CPI tăng nhiều hơn mức tăng giá hàng sản xuất trong nước.', direction: 'down' },
    { group: 'Nhà đầu tư theo dõi lãi suất toàn cầu', effect: 'BEA nêu PCE chủ yếu dùng cho phân tích và dự báo vĩ mô ở Mỹ; vì vậy diễn biến của nó có thể được theo dõi khi đánh giá môi trường lãi suất Mỹ và toàn cầu (nhận định của bài, không phải số liệu).', direction: 'mixed' },
  ],
  indicators: [
    { name: 'CPI và lạm phát cơ bản', why: 'Thước đo sức mua hộ gia đình, nguồn chính để so với mục tiêu lạm phát.', where: 'Cục Thống kê (nso.gov.vn); BLS (Mỹ)' },
    { name: 'Chỉ số giá PCE (tổng và lõi)', why: 'Thước đo lạm phát Mỹ dùng chủ yếu cho phân tích và dự báo vĩ mô (theo BEA).', where: 'Bureau of Economic Analysis (bea.gov)' },
    { name: 'Hệ số giảm phát GDP', why: 'Phản ánh giá toàn bộ sản xuất trong nước.', where: 'Báo cáo GDP của Cục Thống kê; BEA cho Mỹ' },
    { name: 'Chênh lệch giữa CPI và hệ số giảm phát', why: 'Cho biết lạm phát đến từ hàng nhập khẩu hay sản xuất trong nước.', where: 'Tự tính từ hai chuỗi số liệu' },
  ],
  counterpoints: [
    'Chi tiết về quyền số và công thức của ba thước đo phức tạp hơn bài; trang BEA dùng ở đây chỉ so sánh ở mức phạm vi và nguyên tắc.',
    'Phần lớn mô tả PCE và CPI trong bài nói về Mỹ; cách Việt Nam tính CPI và hệ số giảm phát có chi tiết riêng và cần xem phương pháp của Cục Thống kê.',
    'Trong nhiều giai đoạn các thước đo diễn biến gần nhau, chênh lệch chỉ rõ khi giá nhập khẩu hoặc giá xuất khẩu biến động mạnh.',
  ],
  glossary: [
    { term: 'CPI', definition: 'Chỉ số giá tiêu dùng, theo dõi giá rổ hàng hóa, dịch vụ hộ gia đình mua.' },
    { term: 'Chỉ số giá PCE', definition: 'Chỉ số giá chi tiêu tiêu dùng cá nhân do BEA (Mỹ) công bố.' },
    { term: 'Hệ số giảm phát GDP', definition: 'GDP danh nghĩa chia GDP thực nhân 100; đo giá hàng sản xuất trong nước.' },
    { term: 'Thay thế hàng hóa', definition: 'Người mua chuyển sang hàng rẻ hơn khi giá tương đối thay đổi.' },
    { term: 'GDP danh nghĩa / thực', definition: 'GDP theo giá hiện hành / GDP đã loại bỏ biến động giá.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'cpi-vs-pce-deflator-inflation-measures-q',
    question: 'Giá dầu nhập khẩu tăng mạnh trong khi giá hàng sản xuất trong nước ít đổi. Thước đo nào thường phản ứng nhiều hơn?',
    options: [
      { id: 'a', text: 'Hệ số giảm phát GDP, vì dầu nằm trong GDP.', explain: 'Hàng nhập khẩu không nằm trong hệ số giảm phát GDP.' },
      { id: 'b', text: 'CPI, vì người dân mua cả hàng nhập khẩu như xăng dầu.', correct: true, explain: 'Đúng. Chỉ số giá GDP/hệ số giảm phát loại nhập khẩu, còn chỉ số giá tiêu dùng gồm hàng người tiêu dùng mua.' },
      { id: 'c', text: 'Không thước đo nào vì chúng luôn giống nhau.', explain: 'Các thước đo được xây dựng khác nhau nên tỷ lệ lạm phát khác nhau.' },
    ],
  },
  sources: [
    { title: 'What to know: prices and inflation', publisher: 'Bureau of Economic Analysis (BEA)', url: 'https://www.bea.gov/resources/learning-center/what-to-know-prices-inflation' },
    { title: 'GDP deflator', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/GDP_deflator' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 154,
}
