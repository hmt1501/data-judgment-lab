import type { Explainer } from '../../../shared/explainer'

export const goldPhysicalVsPaperInvesting: Explainer = {
  id: 'gold-physical-vs-paper-investing',
  slug: 'gold-physical-vs-paper-investing',
  question: 'Mua vàng miếng, vàng trang sức, vàng tài khoản: khác gì nhau?',
  title: 'Cùng kim loại, khác chi phí, thanh khoản và rủi ro đối tác',
  topic: 'personal-finance',
  tldr: '**Vàng miếng** (vàng thỏi) là vàng vật chất thuần nhất, chi phí chủ yếu là chênh lệch mua-bán; **vàng trang sức** gồm thêm tiền công và hao hụt, nên mua để đầu tư thường kém hiệu quả; **vàng "giấy" / tài khoản / quỹ** là quyền đòi vàng hoặc quyền lợi gắn với giá vàng, không cầm vàng thật và có **rủi ro đối tác**. Chọn dạng nào phụ thuộc mục đích (cất giữ, đầu cơ giá, tiện giao dịch) và chi phí bạn chịu.',
  keyPoints: [
    'Theo World Gold Council, các cách tiếp cận vàng gồm thỏi và đồng xu vật chất (phải trả phần bù so với giá giao ngay, tự lo lưu giữ, bảo hiểm), quỹ ETF vàng (giao dịch qua sàn, giá thường bám giá vàng giao ngay, không cần cất giữ), vàng lưu kho do bên thứ ba giữ hộ, chứng chỉ vàng, kế hoạch tích lũy vàng định kỳ và vàng số/token; WGC cũng nêu thị trường vàng bán lẻ phần lớn không được điều chỉnh bởi quy định, nên niềm tin vào nhà cung cấp là vấn đề cốt lõi.',
    'Chi phí vàng vật chất: chênh lệch giá mua-bán (spread). Ví dụ giả định: mua 170 triệu đồng/lượng, bán lại 168 triệu đồng/lượng → mất khoảng 1,18% nếu giá giao ngay không đổi. Vàng trang sức còn có tiền công chế tác, và khi bán lại thường bị trừ phần công/hao hụt.',
    'Theo Báo Xây dựng (14/4/2026), Ngân hàng Nhà nước áp dụng Nghị định 24/2012/NĐ-CP đã sửa đổi bởi Nghị định 232/2025/NĐ-CP (ngày 26/8/2025) để tăng cường quản lý và ổn định thị trường vàng; Ngân hàng Nhà nước đã nhận 11 hồ sơ đề nghị cấp giấy phép sản xuất vàng miếng và đang xem xét cùng các bộ, ngành.',
    'Vàng giấy, vàng tài khoản hay hợp đồng gắn giá vàng thường tiện giao dịch nhưng bạn nắm quyền đòi của tổ chức phát hành chứ không giữ vàng; rủi ro gồm tổ chức mất khả năng thanh toán, quy định thay đổi và quy định chuyển đổi sang vàng thật.',
    'Giá vàng trong nước có thể chênh lệch với giá thế giới do cung cầu và quản lý riêng; vì vậy mua ở thời điểm chênh lệch lớn có thể chịu rủi ro "thu hẹp chênh lệch" ngoài biến động giá thế giới (xem bài về giá vàng SJC và thế giới).',
  ],
  causalChain: [
    { from: 'Mua vàng vật chất (miếng/thỏi)', to: 'Chi phí chủ yếu là spread mua-bán, bạn tự lo bảo quản', mechanism: 'Cửa hàng niêm yết giá mua và giá bán khác nhau; bạn cần bán lại đúng thương hiệu và có hóa đơn nguồn gốc để dễ thanh khoản.' },
    { from: 'Mua vàng trang sức', to: 'Trả thêm tiền công, hao hụt khi bán lại', mechanism: 'Giá bán gồm giá vàng cộng công chế tác; khi bán lại thường chỉ tính theo hàm lượng vàng và trừ hao hụt.' },
    { from: 'Mua vàng qua tài khoản / quỹ / sản phẩm giấy', to: 'Phụ thuộc tổ chức phát hành và điều khoản', mechanism: 'Bạn có quyền tài sản theo hợp đồng; giá trị phụ thuộc năng lực thanh toán và điều khoản đổi vàng thật.' },
    { from: 'Thị trường biến động mạnh hoặc chênh lệch giá trong-ngoài nước mở rộng', to: 'Rủi ro mua đắt, bán rẻ', mechanism: 'Giá nội địa có thể giảm khi chênh lệch thu hẹp dù giá thế giới không đổi.' },
  ],
  vietnamImpact: [
    { group: 'Hộ gia đình cất giữ tích lũy bằng vàng', effect: 'Vàng miếng của thương hiệu uy tín dễ thanh khoản; cần chấp nhận spread và rủi ro bảo quản (mất cắp).', direction: 'mixed' },
    { group: 'Người mua trang sức làm quà, tích lũy', effect: 'Trả thêm tiền công; khi bán lại nhận thấp hơn giá mua, nên hiệu quả đầu tư thấp.', direction: 'down' },
    { group: 'Nhà đầu tư giao dịch giá vàng ngắn hạn', effect: 'Sản phẩm giấy/phái sinh có chi phí thấp hơn và đòn bẩy nhưng thêm rủi ro đối tác và đòn bẩy.', direction: 'mixed' },
    { group: 'Cơ quan quản lý và thị trường vàng', effect: 'Việc cấp phép sản xuất vàng miếng và quản lý theo Nghị định 24/2012 sửa đổi có thể thay đổi cung và chênh lệch giá trong nước.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Chênh lệch mua-bán của sản phẩm vàng', why: 'Chi phí chắc chắn của mỗi giao dịch.', where: 'Bảng giá niêm yết của SJC, Doji, PNJ, Phú Quý, Bảo Tín Minh Châu' },
    { name: 'Chênh lệch giá vàng trong nước so với thế giới', why: 'Cho biết rủi ro thu hẹp chênh lệch.', where: 'World Gold Council (gold.org); bảng giá trong nước' },
    { name: 'Thông báo về cấp phép sản xuất, nhập khẩu vàng', why: 'Tác động lên nguồn cung trong nước.', where: 'Ngân hàng Nhà nước (sbv.gov.vn)' },
    { name: 'Điều khoản, phí và năng lực phát hành của sản phẩm vàng giấy', why: 'Đánh giá rủi ro đối tác.', where: 'Bản cáo bạch, hợp đồng, báo cáo tài chính tổ chức phát hành' },
  ],
  counterpoints: [
    'Vàng không tạo dòng tiền (không lãi, cổ tức), nên giá trị chỉ tăng nếu giá vàng tăng; giữ vàng dài hạn có chi phí cơ hội và có thể kém hơn tài sản sinh lời trong nhiều giai đoạn.',
    'Vàng tích trữ có thể là tài sản phòng thủ trong bất ổn, nhưng không đảm bảo lợi nhuận ở mọi thời điểm, nhất là khi mua ở vùng giá cao.',
    'Quy định về thị trường vàng ở Việt Nam đang thay đổi; thông tin trong bài chỉ phản ánh tính đến tháng 4/2026 theo nguồn đã nêu.',
  ],
  glossary: [
    { term: 'Vàng miếng / vàng thỏi', definition: 'Vàng vật chất đúc thành miếng chuẩn hóa, hàm lượng cao.' },
    { term: 'Spread mua-bán', definition: 'Chênh lệch giữa giá bán ra và giá mua vào của cùng sản phẩm.' },
    { term: 'Rủi ro đối tác', definition: 'Rủi ro bên phát hành hoặc bên giữ hộ không thực hiện nghĩa vụ.' },
    { term: 'Vàng giấy', definition: 'Quyền lợi gắn giá vàng không kèm việc cầm giữ vàng thật.' },
    { term: 'ETF vàng', definition: 'Quỹ hoán đổi danh mục nắm vàng vật chất, giao dịch như cổ phiếu.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'gold-physical-vs-paper-investing-q',
    question: 'Bạn muốn giữ vàng tích lũy dài hạn, ít quan tâm đến đầu cơ ngắn hạn. Yếu tố nào quan trọng nhất cần so sánh giữa vàng miếng, trang sức và sản phẩm vàng giấy?',
    options: [
      { id: 'a', text: 'Chỉ so giá niêm yết hôm nay.', explain: 'Giá niêm yết chưa gồm spread, tiền công, phí lưu kho và rủi ro đối tác.' },
      { id: 'b', text: 'Tổng chi phí khi mua và bán lại, cách bảo quản và rủi ro bên phát hành / bên giữ hộ.', correct: true, explain: 'Đúng. Cùng giá vàng, các dạng khác nhau ở chi phí giao dịch, bảo quản và rủi ro đối tác.' },
      { id: 'c', text: 'Dạng nào đẹp nhất.', explain: 'Giá trị thẩm mỹ không liên quan tới hiệu quả tích lũy.' },
    ],
  },
  sources: [
    { title: 'How to invest in gold', publisher: 'World Gold Council', url: 'https://www.gold.org/goldhub/how-to-invest' },
    { title: 'Retail Gold Investment Principles', publisher: 'World Gold Council', url: 'https://www.gold.org/gold-standards/retail-gold-investment-principles' },
    { title: 'Ngân hàng Nhà nước tiếp nhận 11 hồ sơ xin cấp phép sản xuất vàng miếng (14/4/2026)', publisher: 'Báo Xây dựng', url: 'https://baoxaydung.vn/ngan-hang-nha-nuoc-tiep-nhan-11-ho-so-xin-cap-phep-san-xuat-vang-mieng-192260414174709777.htm' },
    { title: 'Gold as an investment', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Gold_as_an_investment' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 58,
}
