import type { Explainer } from '../../../shared/explainer'

export const vietnamAgriExportsCommodityPrices: Explainer = {
  id: 'vietnam-agri-exports-commodity-prices',
  slug: 'vietnam-agri-exports-commodity-prices',
  question: 'Xuất khẩu nông sản (gạo, cà phê...) phụ thuộc giá hàng hóa thế nào và đọc số liệu ra sao?',
  title: 'Kim ngạch nông sản = lượng × giá: lượng tăng mà giá giảm vẫn có thể làm doanh thu giảm',
  topic: 'vietnam-economy',
  tldr: 'Kim ngạch xuất khẩu bằng **khối lượng × giá xuất khẩu bình quân**. Nông sản Việt Nam là hàng hóa nhận giá theo thị trường thế giới, nên khi giá giảm mạnh, tăng khối lượng chưa chắc bù được. Số quý I/2026 là ví dụ: cà phê tăng lượng 12,6% nhưng kim ngạch giảm 6,4%.',
  keyPoints: [
    'Theo Báo Hà Tĩnh (6/4/2026, dẫn báo cáo ngành nông nghiệp): quý I/2026 cà phê xuất khẩu 577,3 nghìn tấn (+12,6%), kim ngạch 2,7 tỷ USD (−6,4%), giá bình quân 4.696,8 USD/tấn (−16,9%); gạo 2,3 triệu tấn (+0,2%), 1,11 tỷ USD (−7,8%), giá 480,1 USD/tấn (−8%).',
    'Kiểm tra bằng phép nhân: cà phê (1 + 12,6%) × (1 − 16,9%) ≈ 0,936, tức −6,4% — khớp. Gạo 1,002 × 0,92 ≈ 0,922, tức −7,8% — khớp. Cách này giúp tách **hiệu ứng lượng** khỏi **hiệu ứng giá** khi đọc thông cáo.',
    'Theo Tạp chí Kinh tế – Tài chính đăng trên trungtamwto.vn (10/8/2026, số của Cục Thống kê): 7 tháng 2026 cà phê xuất 1,314 triệu tấn (+21,1%), thu 5,45 tỷ USD (−11,2%). Giá bình quân không được nêu, tự tính ≈ 4.150 USD/tấn.',
    'Giá xuất khẩu bình quân là **bình quân gia quyền theo cơ cấu**: giá có thể giảm vì giá thế giới giảm hoặc vì cơ cấu chuyển sang chủng loại giá thấp, nên cần xem chủng loại và thị trường.',
    'Các nguồn không luôn thống nhất số liệu từng giai đoạn (khác nguồn, khác thời điểm ước/chính thức), nên cần ghi rõ nguồn và ngày công bố.',
  ],
  causalChain: [
    { from: 'Giá hàng hóa thế giới biến động (cung toàn cầu, thời tiết, chính sách nước nhập khẩu)', to: 'Giá xuất khẩu bình quân thay đổi', mechanism: 'Gạo, cà phê là hàng hóa giao dịch theo giá thị trường; nhà xuất khẩu Việt Nam chủ yếu là người chấp nhận giá.' },
    { from: 'Giá xuất khẩu giảm', to: 'Kim ngạch giảm dù lượng tăng', mechanism: 'Doanh thu = lượng × giá; nếu giá giảm nhanh hơn lượng tăng (như cà phê quý I/2026) thì kim ngạch giảm.' },
    { from: 'Kim ngạch giảm', to: 'Thu nhập nông dân, doanh nghiệp chế biến giảm', mechanism: 'Giá thu mua trong nước chuyển động theo giá xuất khẩu; chi phí đầu vào (phân bón, nhân công) ít linh hoạt giảm nên biên lợi nhuận bị ép.' },
    { from: 'Thay đổi thu nhập vùng nông nghiệp và nguồn thu ngoại tệ', to: 'Tiêu dùng nông thôn và cung USD thay đổi', mechanism: 'Nông sản là nguồn thu ngoại tệ; giảm kim ngạch làm giảm cung USD tự nhiên cho thị trường ngoại hối, dù tác động tổng thể nhỏ so với xuất khẩu công nghiệp.' },
  ],
  vietnamImpact: [
    { group: 'Nông dân trồng cà phê, lúa', effect: 'Thu nhập phụ thuộc giá, không chỉ sản lượng; giá giảm sâu ép biên lợi nhuận khi chi phí không giảm.', direction: 'down' },
    { group: 'Doanh nghiệp xuất khẩu nông sản', effect: 'Doanh thu USD giảm khi giá giảm, nhưng lượng tăng giúp giữ thị phần; rủi ro giá tồn kho.', direction: 'mixed' },
    { group: 'Doanh nghiệp chế biến thực phẩm nội địa', effect: 'Nguyên liệu rẻ hơn giúp chi phí đầu vào giảm.', direction: 'up' },
    { group: 'Người tiêu dùng trong nước', effect: 'Giá nông sản thế giới giảm có thể kéo giá bán lẻ trong nước giảm với độ trễ, tùy chuỗi phân phối.', direction: 'up' },
  ],
  indicators: [
    { name: 'Khối lượng và giá xuất khẩu bình quân từng mặt hàng', why: 'Tách hiệu ứng lượng và giá để hiểu nguồn gốc thay đổi kim ngạch.', where: 'Thông cáo của Cục Thống kê; báo cáo của Bộ Nông nghiệp và Môi trường; số liệu hải quan' },
    { name: 'Giá hàng hóa thế giới (gạo, cà phê)', why: 'Dẫn dắt giá xuất khẩu Việt Nam.', where: 'Chỉ số giá lương thực FAO; sàn giao dịch hàng hóa quốc tế' },
    { name: 'Cơ cấu thị trường và chủng loại xuất khẩu', why: 'Thay đổi cơ cấu có thể làm giá bình quân đổi dù giá từng loại không đổi.', where: 'Số liệu hải quan, báo cáo hiệp hội ngành hàng' },
  ],
  counterpoints: [
    'Lượng xuất khẩu tăng khi giá giảm có thể là lựa chọn chiến lược để giữ thị phần hoặc xả hàng tồn; không phải lúc nào cũng là dấu hiệu tốt hay xấu.',
    'Số quý I là số ước và được sửa; các bài báo có thể chênh nhau từng giai đoạn, cần đối chiếu thông cáo gốc.',
    'Giá cao không nhất thiết có lợi cho nông dân nếu họ đã bán sớm trước khi giá tăng hoặc nếu chi phí cũng tăng.',
  ],
  glossary: [
    { term: 'Kim ngạch xuất khẩu', definition: 'Giá trị hàng xuất khẩu tính bằng USD, bằng lượng nhân giá.' },
    { term: 'Giá xuất khẩu bình quân', definition: 'Kim ngạch chia cho khối lượng, chịu ảnh hưởng của cơ cấu chủng loại.' },
    { term: 'Hiệu ứng lượng / hiệu ứng giá', definition: 'Phần thay đổi kim ngạch do khối lượng, và phần do giá.' },
    { term: 'Người chấp nhận giá', definition: 'Bên bán không đủ lớn để tác động giá thị trường.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-agri-exports-commodity-prices-q',
    question: 'Xuất khẩu một mặt hàng tăng lượng 10% nhưng giá bình quân giảm 15% (ví dụ giả định). Kim ngạch thay đổi thế nào?',
    options: [
      { id: 'a', text: 'Giảm khoảng 6,5% (1,10 × 0,85 = 0,935).', correct: true, explain: 'Kim ngạch = lượng × giá nên nhân hai hệ số: 1,10 × 0,85 = 0,935, tức giảm 6,5%.' },
      { id: 'b', text: 'Giảm 5% (lấy 10% − 15%).', explain: 'Cộng trừ phần trăm bỏ qua phần tác động chéo; cần nhân hệ số.' },
      { id: 'c', text: 'Tăng 10% vì lượng tăng.', explain: 'Bỏ qua việc giá giảm mạnh hơn.' },
    ],
  },
  sources: [
    { title: 'Xuất khẩu nông sản quý I/2026 đạt 16,69 tỷ USD dù giá cà phê và gạo giảm sâu', publisher: 'Báo và Phát thanh, Truyền hình Hà Tĩnh (bài 6/4/2026)', url: 'https://baohatinh.vn/tv/xuat-khau-nong-san-quy-i2026-dat-1669-ty-usd-du-gia-ca-phe-va-gao-giam-sau-36518.html' },
    { title: 'Xuất khẩu cà phê trước nghịch lý tăng lượng nhưng hụt giá trị', publisher: 'Tạp chí Kinh tế – Tài chính (trungtamwto.vn, bài 10/8/2026)', url: 'https://trungtamwto.vn/chuyen-de/33200-xuat-khau-ca-phe-truoc-nghich-ly-tang-luong-nhung-hut-gia-tri' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 89,
}
