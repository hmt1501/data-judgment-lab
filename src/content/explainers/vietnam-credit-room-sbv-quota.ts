import type { Explainer } from '../../../shared/explainer'

export const vietnamCreditRoomSbvQuota: Explainer = {
  id: 'vietnam-credit-room-sbv-quota',
  slug: 'vietnam-credit-room-sbv-quota',
  question: '"Room tín dụng" là gì và ảnh hưởng thế nào tới ngân hàng và doanh nghiệp?',
  title: 'Room tín dụng là hạn mức tăng trưởng cho vay do Ngân hàng Nhà nước giao từng ngân hàng, quyết định "van" vốn của nền kinh tế',
  topic: 'vietnam-economy',
  tldr: '**Room tín dụng** là mức tăng trưởng dư nợ tối đa mà Ngân hàng Nhà nước (NHNN) cho phép mỗi ngân hàng trong một năm. Đây là công cụ quản lý số lượng, bổ sung cho lãi suất: khi room chặt, ngân hàng cho vay chọn lọc hơn và doanh nghiệp khó tiếp cận vốn; khi nới, vốn chảy nhanh hơn nhưng rủi ro nợ xấu và bong bóng tài sản tăng.',
  keyPoints: [
    'Room tín dụng là **chỉ tiêu định hướng tăng trưởng tín dụng** NHNN giao từng ngân hàng, thường theo năm, có thể điều chỉnh giữa năm; tên gọi trong văn bản chính thức và cách thực hiện cần kiểm tra theo thông báo hiện hành của NHNN.',
    'Về bản chất đây là dạng **hướng dẫn tín dụng** (window guidance) hay hạn ngạch tín dụng, từng được nhiều nước châu Á dùng để kiểm soát lượng tiền khi thị trường tài chính chưa đủ sâu.',
    'Ngân hàng có vốn dư nhưng hết room vẫn không thể cho vay thêm, nên **lãi suất tiền gửi và cho vay** có thể lệch khỏi quy luật cung – cầu thuần túy.',
    'Theo VnEconomy (30/12/2024), chỉ tiêu 2025 của từng ngân hàng được tính từ **kết quả chấm điểm xếp hạng năm 2023 theo Thông tư 52/2018/TT-NHNN** nhân một hệ số chung; ngân hàng xếp hạng tốt được giao nhiều dư địa hơn. NHNN cũng nêu sẽ **hạn chế và tiến tới xóa bỏ** việc phân bổ chỉ tiêu cho từng tổ chức tín dụng, chỉ quản lý mức tăng chung toàn hệ thống (căn cứ Nghị quyết 62/2022/QH15). Cho năm 2026, Tạp chí Kinh tế – Tài chính (23/01/2026) nêu NHNN dự kiến tín dụng toàn hệ thống tăng khoảng 15%, có thể điều chỉnh theo diễn biến.',
    'Ưu điểm: dễ kiểm soát nhanh lượng tiền, lạm phát và rủi ro bong bóng. Hạn chế: kém linh hoạt, có thể làm méo phân bổ vốn và khuyến khích ngân hàng chọn khách hàng lớn, có tài sản bảo đảm.',
  ],
  causalChain: [
    { from: 'NHNN đặt mục tiêu tăng trưởng tín dụng cả năm theo mục tiêu GDP và lạm phát', to: 'Chia room cho từng ngân hàng', mechanism: 'Mỗi ngân hàng được giao mức tăng dư nợ tối đa dựa trên quy mô, an toàn vốn, nợ xấu và định hướng chính sách.' },
    { from: 'Room được cấp', to: 'Ngân hàng phân bổ cho các nhóm khách hàng, ngành', mechanism: 'Room là nguồn lực khan hiếm nên ngân hàng ưu tiên khoản vay lợi nhuận cao, rủi ro thấp, khách hàng quen thuộc.' },
    { from: 'Room gần hết trước cuối năm', to: 'Ngân hàng hạn chế giải ngân, đôi khi tăng lãi suất cho vay', mechanism: 'Doanh nghiệp vay mới khó hơn hoặc đắt hơn; nhu cầu vốn lưu động mùa cao điểm có thể không được đáp ứng đủ.' },
    { from: 'Room được nới (cấp thêm)', to: 'Tín dụng tăng nhanh, thanh khoản nền kinh tế dồi dào', mechanism: 'Doanh nghiệp, hộ gia đình vay nhiều hơn, thúc đẩy đầu tư và tiêu dùng nhưng cũng làm tăng rủi ro với bất động sản, chứng khoán nếu vốn chảy vào đó.' },
    { from: 'Tín dụng tăng nhanh hơn nền kinh tế thực', to: 'Rủi ro nợ xấu, lạm phát và áp lực tỷ giá tăng', mechanism: 'Lượng tiền tăng nhanh hơn sản lượng đẩy giá, kéo cầu ngoại tệ lên và có thể khiến NHNN phải siết lại.' },
  ],
  vietnamImpact: [
    { group: 'Ngân hàng thương mại', effect: 'Room quyết định mức tăng quy mô và lợi nhuận; ngân hàng được cấp room cao có lợi thế tăng thu nhập lãi, nhưng vẫn phải đáp ứng yêu cầu an toàn vốn.', direction: 'mixed' },
    { group: 'Doanh nghiệp vay vốn', effect: 'Khi room chặt, doanh nghiệp nhỏ, ngành rủi ro cao hoặc thiếu tài sản bảo đảm khó vay và vay đắt hơn.', direction: 'down' },
    { group: 'Thị trường bất động sản', effect: 'Phụ thuộc nhiều vào vốn vay; room siết với bất động sản làm giảm thanh khoản thị trường, room nới hỗ trợ giao dịch.', direction: 'mixed' },
    { group: 'Người gửi tiết kiệm', effect: 'Ngân hàng hết room ít cần huy động thêm nên lãi suất tiền gửi có thể hạ; ngược lại khi muốn mở rộng cho vay, họ cạnh tranh huy động.', direction: 'mixed' },
    { group: 'Nhà đầu tư cổ phiếu ngân hàng', effect: 'Tăng trưởng lợi nhuận bị giới hạn bởi room; thông tin cấp thêm room thường là yếu tố được thị trường theo dõi.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tăng trưởng tín dụng so với tăng trưởng huy động và GDP', why: 'Cho biết tiền đang chảy vào nền kinh tế nhanh hay chậm so với sản lượng.', where: 'Ngân hàng Nhà nước (sbv.gov.vn), Cục Thống kê (nso.gov.vn)' },
    { name: 'Thông báo cấp, điều chỉnh room của NHNN', why: 'Thay đổi room là tín hiệu thay đổi chính sách tiền tệ.', where: 'Thông cáo của NHNN, báo cáo của các ngân hàng' },
    { name: 'Nợ xấu và tỷ lệ nợ nhóm 2', why: 'Tín dụng tăng nhanh thường kéo theo rủi ro chất lượng tài sản.', where: 'Báo cáo tài chính ngân hàng, NHNN' },
    { name: 'Lãi suất liên ngân hàng và lãi suất cho vay bình quân', why: 'Đo mức độ căng thanh khoản và chi phí vốn thực tế.', where: 'Ngân hàng Nhà nước' },
  ],
  counterpoints: [
    'Quản lý bằng room làm giảm vai trò của giá cả (lãi suất) trong việc phân bổ vốn; nhiều ý kiến cho rằng về lâu dài cần chuyển sang công cụ dựa trên thị trường hơn.',
    'Room không nói hết thực tế: ngân hàng có thể chuyển món vay sang kênh khác (trái phiếu doanh nghiệp, hợp tác bán sản phẩm), nên đo lượng vốn thật cần nhìn thêm các kênh ngoài tín dụng ngân hàng.',
    'Cấp thêm room không đảm bảo vốn đến đúng nơi cần nếu tín hiệu rủi ro khiến ngân hàng ngần ngại cho vay.',
  ],
  glossary: [
    { term: 'Room tín dụng', definition: 'Hạn mức tăng trưởng dư nợ cho vay NHNN giao từng ngân hàng trong một kỳ.' },
    { term: 'Dư nợ tín dụng', definition: 'Tổng số tiền ngân hàng đã cho vay và chưa được trả.' },
    { term: 'Hướng dẫn tín dụng', definition: 'Cách ngân hàng trung ương định hướng khối lượng cho vay của ngân hàng thương mại thay vì chỉ qua lãi suất.' },
    { term: 'Nợ xấu', definition: 'Khoản nợ quá hạn dài hoặc khả năng thu hồi thấp, phân loại theo nhóm nợ.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-credit-room-sbv-quota-q',
    question: 'Một ngân hàng dư thanh khoản nhưng đã dùng hết room tín dụng trước cuối năm. Điều nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Ngân hàng vẫn cho vay thoải mái vì có tiền.', explain: 'Room là giới hạn pháp lý/định hướng: dư nguồn vốn không đủ để cho vay thêm nếu hết room.' },
      { id: 'b', text: 'Ngân hàng hạn chế giải ngân mới, ưu tiên khoản vay hiệu quả nhất và có thể giảm lãi suất huy động.', correct: true, explain: 'Đúng. Room khan hiếm nên được ưu tiên cho khoản vay tốt nhất; ít cần huy động thêm nên lãi suất tiền gửi có thể giảm.' },
      { id: 'c', text: 'Doanh nghiệp vay lãi suất thấp hơn vì ngân hàng cạnh tranh.', explain: 'Hết room làm ngân hàng ít cạnh tranh cho vay mới; lãi suất cho vay thường không giảm.' },
    ],
  },
  sources: [
    { title: 'Ngân hàng Nhà nước giao chỉ tiêu tăng trưởng tín dụng năm 2025 cho các ngân hàng', publisher: 'VnEconomy (30/12/2024)', url: 'https://vneconomy.vn/ngan-hang-nha-nuoc-giao-chi-tieu-tang-truong-tin-dung-nam-2025-cho-cac-ngan-hang.htm' },
    { title: 'NHNN phát lệnh tăng thêm chỉ tiêu tăng trưởng tín dụng', publisher: 'VnFinance (31/07/2025)', url: 'https://vietnamfinance.vn/nhnn-phat-lenh-tang-them-chi-tieu-tang-truong-tin-dung-d130408.html' },
    { title: 'Ngân hàng Nhà nước xác lập mục tiêu điều hành tiền tệ năm 2026', publisher: 'Tạp chí Kinh tế – Tài chính (23/01/2026)', url: 'https://tapchikinhtetaichinh.vn/ngan-hang-nha-nuoc-xac-lap-muc-tieu-dieu-hanh-tien-te-nam-2026-142459.html' },
    { title: 'Window guidance', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Window_guidance' },
    { title: 'Credit rationing', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Credit_rationing' },
    { title: 'Viet Nam Overview', publisher: 'World Bank Group', url: 'https://www.worldbank.org/en/country/vietnam/overview' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 15,
}
