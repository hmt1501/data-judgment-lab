import type { Explainer } from '../../../shared/explainer'

export const commoditySupercyclesExporters: Explainer = {
  id: 'commodity-supercycles-exporters',
  slug: 'commodity-supercycles-exporters',
  question: 'Siêu chu kỳ hàng hóa là gì và nước xuất khẩu hàng hóa được/mất gì?',
  title: 'Siêu chu kỳ hàng hóa: nhiều năm giá cao hơn xu hướng, kéo theo bùng nổ rồi vỡ trận ở nước xuất khẩu',
  topic: 'geopolitics-trade',
  tldr: 'Giá hàng hóa dao động theo ba lớp: xu hướng dài hạn, **chu kỳ trung hạn** kéo dài nhiều thập kỷ ("siêu chu kỳ") và các đợt bùng nổ – sụp đổ ngắn hạn. Nước xuất khẩu hàng hóa hưởng lợi khi giá cao nhưng dễ rơi vào bất ổn khi giá đảo chiều, trừ khi dùng thời kỳ thuận lợi để tích lũy và đa dạng hóa. Việt Nam vừa xuất khẩu nông sản, khoáng sản vừa nhập khẩu năng lượng, nguyên liệu, nên được/mất tùy mặt hàng.',
  keyPoints: [
    'Nghiên cứu của David Jacks (ĐH Quốc gia Australia, 2013) phân tích giá thực của 30 hàng hóa trong 160 năm và đề xuất phân loại ba tầng: xu hướng dài hạn, chu kỳ trung hạn và bùng nổ/sụp đổ ngắn hạn; theo tác giả, **siêu chu kỳ** là giai đoạn kéo dài nhiều thập kỷ với giá cao hơn xu hướng dài hạn.',
    'Cùng nghiên cứu: các đợt bùng nổ – sụp đổ phổ biến trong lịch sử, là phần đáng kể của biến động giá thực và có thể ảnh hưởng tới tăng trưởng của các nền kinh tế xuất khẩu hàng hóa.',
    'Động lực điển hình của một siêu chu kỳ là **cầu tăng mạnh kéo dài** (công nghiệp hóa, đô thị hóa của một nền kinh tế lớn) gặp **cung chậm phản ứng** (mỏ, đồn điền cần nhiều năm đầu tư); giá cao khuyến khích đầu tư tạo cung, cuối cùng đẩy giá xuống.',
    'Theo trang Commodity Markets của Ngân hàng Thế giới (cập nhật đến Commodity Markets Outlook tháng 4/2026), giá năng lượng được dự báo tăng khoảng 24% trong năm 2026 do xung đột Trung Đông, giá hàng hóa nói chung tăng khoảng 16%; đây là dự báo của World Bank tại thời điểm đó, có thể thay đổi.',
    'Cú sốc giá không phải lúc nào cũng là "siêu chu kỳ": nhận diện siêu chu kỳ thường chỉ rõ sau khi nó kết thúc; một đợt tăng giá do gián đoạn cung (chiến tranh, thời tiết) có thể đảo chiều nhanh.',
  ],
  causalChain: [
    { from: 'Cầu hàng hóa tăng bền vững (công nghiệp hóa, đầu tư hạ tầng)', to: 'Giá hàng hóa tăng trên xu hướng', mechanism: 'Cung trong ngắn hạn kém co giãn nên giá phải tăng để cân bằng cầu.' },
    { from: 'Giá cao kéo dài', to: 'Đầu tư mở rộng cung (mỏ mới, đất trồng mới)', mechanism: 'Lợi nhuận cao thu hút vốn; nhưng dự án cần nhiều năm mới ra sản lượng.' },
    { from: 'Cung mới ra thị trường đúng lúc cầu chậm lại', to: 'Giá đảo chiều, có thể sụp mạnh', mechanism: 'Độ trễ đầu tư tạo ra thặng dư cung; nhà đầu cơ khuếch đại biến động.' },
    { from: 'Giá hàng hóa xuất khẩu đảo chiều', to: 'Thu nhập xuất khẩu, tỷ giá, ngân sách nước xuất khẩu chịu sức ép', mechanism: 'Doanh thu ngoại tệ giảm, tiền tệ yếu, thu ngân sách giảm; nước phụ thuộc một vài mặt hàng chịu tác động mạnh nhất.' },
  ],
  vietnamImpact: [
    { group: 'Nông dân và doanh nghiệp xuất khẩu nông sản, thủy sản', effect: 'Giá cao tăng thu nhập, nhưng phân bón, nhiên liệu, thức ăn chăn nuôi cũng đắt hơn; biên lợi nhuận thực phụ thuộc mặt hàng.', direction: 'mixed' },
    { group: 'Doanh nghiệp sản xuất nhập nguyên liệu (dầu, hóa chất, kim loại)', effect: 'Chi phí đầu vào tăng khi giá hàng hóa tăng, ép biên lợi nhuận nếu không chuyển được giá.', direction: 'down' },
    { group: 'Hộ gia đình', effect: 'Giá năng lượng và thực phẩm tăng đẩy chi tiêu và CPI; hộ thu nhập thấp chịu tác động lớn hơn.', direction: 'down' },
    { group: 'Cán cân thương mại và tỷ giá', effect: 'Việt Nam nhập khẩu ròng năng lượng và nhiều kim loại, nên giá hàng hóa tăng có thể làm cán cân xấu đi, trong khi giá nông sản xuất khẩu tăng bù một phần.', direction: 'mixed' },
    { group: 'Chính sách điều hành', effect: 'Cú sốc giá hàng hóa truyền vào lạm phát; cần phối hợp điều hành giá và tiền tệ, tránh phản ứng quá mức với biến động tạm thời.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Pink Sheet và Commodity Markets Outlook của World Bank', why: 'Giá và dự báo hàng hóa theo nhóm (năng lượng, kim loại, nông sản).', where: 'World Bank – Commodity Markets (worldbank.org/en/research/commodity-markets)' },
    { name: 'Chỉ số giá nhập khẩu và xuất khẩu theo nhóm hàng', why: 'Cho thấy điều kiện thương mại (giá xuất so với giá nhập) của Việt Nam.', where: 'Thống kê hải quan, Cục Thống kê (nso.gov.vn)' },
    { name: 'Đầu tư và công suất khai thác mới trong ngành', why: 'Đầu tư tăng mạnh hôm nay là cung dư thừa mai sau.', where: 'Báo cáo ngành của các tổ chức quốc tế và hiệp hội ngành' },
    { name: 'CPI nhóm lương thực, năng lượng', why: 'Kiểm tra mức truyền dẫn từ giá hàng hóa tới giá tiêu dùng trong nước.', where: 'Thông cáo CPI hằng tháng của Cục Thống kê' },
  ],
  counterpoints: [
    'Nhiều nhà kinh tế nghi ngờ việc "siêu chu kỳ" có thể nhận diện và dự báo; phân loại phụ thuộc phương pháp lọc chuỗi giá.',
    'Cấu trúc nhu cầu thay đổi (năng lượng sạch, kim loại cho pin) có thể làm chu kỳ của các nhóm hàng đi khác nhau, thay vì cùng một siêu chu kỳ chung.',
    'Nước xuất khẩu có thể giảm bớt rủi ro nhờ quỹ ổn định, chính sách tài khóa đối chu kỳ và đa dạng hóa; "lời nguyền tài nguyên" không phải định mệnh.',
  ],
  glossary: [
    { term: 'Siêu chu kỳ hàng hóa', definition: 'Giai đoạn kéo dài nhiều thập kỷ mà giá thực của hàng hóa cao hơn xu hướng dài hạn.' },
    { term: 'Giá thực', definition: 'Giá danh nghĩa đã loại bỏ ảnh hưởng của lạm phát.' },
    { term: 'Điều kiện thương mại', definition: 'Tỷ lệ giữa giá hàng xuất khẩu và giá hàng nhập khẩu của một nước.' },
    { term: 'Độ trễ đầu tư', definition: 'Khoảng thời gian từ quyết định đầu tư đến khi có sản lượng mới.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'commodity-supercycles-exporters-q',
    question: 'Giá một kim loại tăng mạnh 5 năm liên tiếp, hàng loạt mỏ mới được đầu tư. Điều gì có khả năng xảy ra khi các mỏ này vào sản xuất?',
    options: [
      { id: 'a', text: 'Giá tiếp tục tăng vì đã tăng 5 năm.', explain: 'Xu hướng quá khứ không bảo đảm; cung mới thường làm giá hạ nhiệt.' },
      { id: 'b', text: 'Cung tăng có thể đẩy giá giảm, nhất là nếu cầu chậm lại đúng lúc đó.', correct: true, explain: 'Đúng. Độ trễ đầu tư là cơ chế điển hình dẫn đến đảo chiều của chu kỳ hàng hóa.' },
      { id: 'c', text: 'Giá luôn quay về mức của 5 năm trước.', explain: 'Giá có thể điều chỉnh nhiều hay ít tùy cầu, chi phí; không có mức "cố định" để quay về.' },
    ],
  },
  sources: [
    { title: 'From Boom to Bust: A Typology of Real Commodity Prices in the Long Run (D. Jacks, 2013)', publisher: 'EconPapers / ANU CEH Discussion Papers', url: 'https://econpapers.repec.org/RePEc:auu:hpaper:013' },
    { title: 'Commodity Markets (Pink Sheet, Commodity Markets Outlook)', publisher: 'World Bank', url: 'https://www.worldbank.org/en/research/commodity-markets' },
    { title: 'Commodity price index', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Commodity_price_index' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 65,
}
