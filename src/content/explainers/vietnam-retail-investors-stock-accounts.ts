import type { Explainer } from '../../../shared/explainer'

export const vietnamRetailInvestorsStockAccounts: Explainer = {
  id: 'vietnam-retail-investors-stock-accounts',
  slug: 'vietnam-retail-investors-stock-accounts',
  question: 'Số tài khoản chứng khoán của nhà đầu tư cá nhân cho biết điều gì và không cho biết điều gì?',
  title: 'Nhà đầu tư cá nhân và tài khoản chứng khoán: đọc số liệu thế nào',
  topic: 'vietnam-economy',
  tldr: 'Số tài khoản chứng khoán do VSDC công bố hằng tháng là chỉ báo tốt về mức độ **tham gia** của dân cư, nhưng **không bằng số nhà đầu tư** và không cho biết giá trị tiền, mức độ giao dịch hay tỷ lệ tài khoản thực sự hoạt động. Theo VSDC, tính đến 31/8/2026 có 13.814.693 tài khoản cá nhân trong nước (theo bài báo, gần 14% dân số).',
  keyPoints: [
    'Theo bài đăng ngày 9/9/2026 dẫn VSDC: đến 31/8/2026 nhà đầu tư trong nước có 13.834.970 tài khoản, trong đó 13.814.693 của cá nhân (khoảng 99,8%); tháng 8 tăng gần 230.000; tính từ đầu năm tăng hơn 2 triệu.',
    'Theo bài đăng ngày 9/4/2026 dẫn VSDC: hết tháng 3/2026 có 12.610.253 tài khoản trong nước; tháng 3 mở mới 345.979 tài khoản trong nước, cao nhất kể từ tháng 7/2022 theo bài báo.',
    'Tỷ lệ "gần 14% dân số" là phép so sánh của bài báo; bài không nêu mẫu số dân số, và các nguồn khác nhau có thể tính khác.',
    '**Tài khoản không đồng nghĩa với nhà đầu tư**: một người có thể có nhiều tài khoản ở nhiều công ty chứng khoán; các bài đã đọc không nêu số tài khoản có giao dịch hay giá trị giao dịch.',
    'Tăng tài khoản mới thường đi cùng thị trường nóng; nên đọc kèm thanh khoản, dư nợ margin và tỷ lệ tài khoản hoạt động thay vì chỉ nhìn số lũy kế.',
  ],
  causalChain: [
    { from: 'Thị trường tăng điểm, thanh khoản cao, thông tin lan rộng', to: 'Số tài khoản mới tăng', mechanism: 'Kỳ vọng sinh lời và hiệu ứng đám đông kéo người mới mở tài khoản; số mở mới theo tháng phản ánh hưng phấn.' },
    { from: 'Nhiều nhà đầu tư cá nhân mới tham gia', to: 'Tỷ trọng giao dịch cá nhân và vay ký quỹ tăng', mechanism: 'Nhà đầu tư mới thường giao dịch ngắn hạn, dùng đòn bẩy; thị trường nhạy hơn với tâm lý.' },
    { from: 'Thị trường điều chỉnh mạnh', to: 'Giao dịch giảm, tài khoản mới chậm lại', mechanism: 'Thua lỗ làm nhà đầu tư rút lui; số mở mới thường giảm trước, còn số tài khoản lũy kế khó giảm vì tài khoản không bị đóng ngay (suy luận, bài đã đọc không nêu).' },
    { from: 'Cơ sở nhà đầu tư rộng hơn', to: 'Dòng tiền trong nước có thể ổn định hơn', mechanism: 'Nếu có thêm nhà đầu tư dài hạn và qua quỹ thì dòng tiền bền hơn; nếu chủ yếu giao dịch ngắn hạn bằng đòn bẩy thì chưa phải nền tảng bền vững.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân mới', effect: 'Dễ gặp rủi ro hành vi (theo đám đông, dùng đòn bẩy); cần hiểu biết tài chính cơ bản.', direction: 'down' },
    { group: 'Công ty chứng khoán', effect: 'Doanh thu môi giới và cho vay ký quỹ tăng khi tài khoản và thanh khoản tăng, nhưng nhạy chu kỳ.', direction: 'up' },
    { group: 'Doanh nghiệp huy động vốn qua cổ phiếu', effect: 'Cơ sở nhà đầu tư rộng giúp phát hành, huy động vốn thuận lợi hơn.', direction: 'up' },
    { group: 'Nhà quản lý thị trường', effect: 'Cần giám sát tỷ lệ ký quỹ, thao túng giá và bảo vệ nhà đầu tư nhỏ lẻ.', direction: 'mixed' },
    { group: 'Hệ thống ngân hàng', effect: 'Dòng tiền gửi có thể dịch chuyển sang chứng khoán khi thị trường hấp dẫn, ảnh hưởng thanh khoản.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Số tài khoản mới mở hằng tháng', why: 'Chỉ báo tâm lý và mức độ tham gia.', where: 'Tổng Công ty Lưu ký và Bù trừ chứng khoán Việt Nam (VSDC), số liệu hằng tháng' },
    { name: 'Giá trị giao dịch bình quân phiên và tỷ trọng cá nhân', why: 'Cho biết tài khoản có thực sự hoạt động.', where: 'Sở Giao dịch chứng khoán TP.HCM và Hà Nội' },
    { name: 'Dư nợ cho vay ký quỹ (margin)', why: 'Đo mức đòn bẩy của nhà đầu tư cá nhân.', where: 'Báo cáo của Ủy ban Chứng khoán Nhà nước và các công ty chứng khoán' },
    { name: 'Tỷ lệ tài khoản trên dân số trưởng thành', why: 'So sánh mức độ phổ cập với mục tiêu và các nước.', where: 'VSDC chia cho số liệu dân số của Cục Thống kê' },
  ],
  counterpoints: [
    'Số tài khoản có thể phóng đại độ phổ cập vì một người mở nhiều tài khoản; ngược lại nhiều người nắm cổ phiếu qua quỹ hoặc kênh khác nên không có tài khoản trực tiếp.',
    'Tài khoản mới tăng nhanh cũng là dấu hiệu quen thuộc của thời điểm thị trường nóng, không đảm bảo hiệu quả đầu tư của người mới.',
    'Đưa tỷ lệ phần trăm dân số cần thận trọng khi mẫu số khác nhau (cả dân số hay người trưởng thành).',
  ],
  glossary: [
    { term: 'VSDC', definition: 'Tổng Công ty Lưu ký và Bù trừ chứng khoán Việt Nam, nơi thống kê số tài khoản giao dịch.' },
    { term: 'Tài khoản giao dịch chứng khoán', definition: 'Tài khoản mở tại công ty chứng khoán để mua bán chứng khoán; một người có thể có nhiều tài khoản.' },
    { term: 'Cho vay ký quỹ (margin)', definition: 'Vay của công ty chứng khoán để mua cổ phiếu, thế chấp bằng chính cổ phiếu.' },
    { term: 'Tài khoản hoạt động', definition: 'Tài khoản có phát sinh giao dịch trong một kỳ.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-retail-investors-stock-accounts-q',
    question: 'Số tài khoản chứng khoán cá nhân đạt 13,8 triệu. Phát biểu nào đúng đắn nhất?',
    options: [
      { id: 'a', text: 'Có đúng 13,8 triệu người Việt đang đầu tư chứng khoán.', explain: 'Một người có thể mở nhiều tài khoản và nhiều tài khoản có thể không hoạt động; số này không phải số nhà đầu tư duy nhất.' },
      { id: 'b', text: 'Đây là số tài khoản mở, cho biết mức tham gia, nhưng cần dữ liệu về giao dịch và margin để biết hoạt động thực.', correct: true, explain: 'Đúng: các bài đã đọc không nêu số tài khoản hoạt động hay giá trị giao dịch.' },
      { id: 'c', text: 'Số tài khoản tăng chắc chắn làm VN-Index tăng.', explain: 'Không có quan hệ nhân quả chắc chắn; tài khoản mới thường là kết quả chứ không phải nguyên nhân của thị trường tốt.' },
    ],
  },
  sources: [
    { title: 'Số tài khoản chứng khoán cá nhân tương đương gần 14% dân số (9/9/2026)', publisher: 'Tạp chí Kinh tế – Tài chính', url: 'https://tapchikinhtetaichinh.vn/so-tai-khoan-chung-khoan-ca-nhan-tuong-duong-gan-14-dan-so-166573.html' },
    { title: 'Kết thúc quý I/2026, Việt Nam có hơn 12,6 triệu tài khoản chứng khoán (9/4/2026)', publisher: 'Báo Nhân Dân', url: 'https://nhandan.vn/ocop/ket-thuc-quy-i2026-viet-nam-co-hon-126-trieu-tai-khoan-chung-khoan-post954464.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 127,
}
