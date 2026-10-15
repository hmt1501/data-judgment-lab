import type { Explainer } from '../../../shared/explainer'

export const vietnamRemittancesFxSupply: Explainer = {
  id: 'vietnam-remittances-fx-supply',
  slug: 'vietnam-remittances-fx-supply',
  question: 'Kiều hối là gì và đóng vai trò thế nào trong nguồn cung ngoại tệ?',
  title: 'Kiều hối là nguồn ngoại tệ ổn định, ít biến động hơn dòng vốn đầu cơ, góp phần cân bằng cán cân thanh toán',
  topic: 'vietnam-economy',
  tldr: '**Kiều hối** là tiền người Việt ở nước ngoài gửi về cho gia đình hoặc đầu tư trong nước. Đây là nguồn cung ngoại tệ quan trọng cho nền kinh tế, thường ổn định hơn vốn danh mục, giúp hộ gia đình tăng thu nhập và hỗ trợ cán cân thanh toán, dự trữ ngoại hối. Tuy vậy lượng kiều hối chịu tác động của kinh tế nước người lao động sống, tỷ giá, kênh chuyển tiền.',
  keyPoints: [
    'Kiều hối thuộc **thu nhập thứ cấp** trong cán cân vãng lai; nó bổ sung nguồn ngoại tệ bên cạnh xuất khẩu, FDI, du lịch và vay nợ nước ngoài.',
    'Khác vốn đầu cơ, kiều hối là tiền gia đình gửi nuôi người thân nên ít "bay hơi" khi thị trường biến động; có thể còn tăng khi quê nhà khó khăn.',
    'Hộ nhận kiều hối thường dùng cho chi tiêu thiết yếu, giáo dục, y tế, xây sửa nhà, một phần để dành hoặc đầu tư; vì vậy nó tác động trực tiếp đến tiêu dùng và bất động sản địa phương.',
    'Phần kiều hối đi qua kênh chính thức (ngân hàng, tổ chức chuyển tiền) mới được ghi nhận vào thống kê và vào hệ thống tài chính; kênh phi chính thức làm thiếu số liệu và có rủi ro.',
    'Kiều hối là một trong những đệm ngoại tệ giúp Ngân hàng Nhà nước ổn định tỷ giá, nhưng quy mô khó thay thế được xuất khẩu và FDI. Về quy mô: theo NHNN Chi nhánh Khu vực 2 (Báo SGGP, 22/01/2026), kiều hối qua các tổ chức tín dụng và tổ chức kinh tế về TP.HCM năm 2025 đạt hơn **10,34 tỷ USD**, tăng 8,3% so với 9,55 tỷ USD năm 2024; báo Đầu tư (25/10/2025) nêu kiều hối cả nước năm 2024 khoảng 16 tỷ USD (không ghi rõ nguồn gốc con số này).',
  ],
  causalChain: [
    { from: 'Người lao động, du học sinh, kiều bào có thu nhập ở nước ngoài', to: 'Họ gửi một phần về gia đình hoặc đầu tư trong nước', mechanism: 'Mục tiêu chính là hỗ trợ người thân; động lực tăng khi việc làm tốt hoặc tỷ giá thuận lợi.' },
    { from: 'Ngoại tệ chuyển về qua ngân hàng hoặc tổ chức chuyển tiền', to: 'Cung ngoại tệ của hệ thống ngân hàng tăng', mechanism: 'Người nhận đổi sang VND hoặc gửi ngoại tệ; ngân hàng có thêm nguồn USD để bán cho nhu cầu nhập khẩu, trả nợ.' },
    { from: 'Cung ngoại tệ tăng', to: 'Áp lực lên tỷ giá và dự trữ ngoại hối giảm', mechanism: 'Cung dồi dào giúp tỷ giá ổn định hơn và NHNN có điều kiện mua ngoại tệ bổ sung dự trữ.' },
    { from: 'Hộ gia đình nhận kiều hối', to: 'Chi tiêu, đầu tư, tiết kiệm tăng ở địa phương', mechanism: 'Thu nhập tăng thêm không từ lao động trong nước làm tăng tiêu dùng và nhu cầu nhà ở, dịch vụ.' },
    { from: 'Kinh tế nước sở tại suy yếu hoặc chính sách việc làm thay đổi', to: 'Kiều hối giảm', mechanism: 'Thu nhập của người gửi giảm, hoặc họ trở về nước, nên dòng tiền gửi về chậm lại.' },
  ],
  vietnamImpact: [
    { group: 'Hộ gia đình nhận kiều hối', effect: 'Thu nhập tăng thêm, nhất là ở địa phương có nhiều lao động đi làm ngoài nước; nhưng dễ phụ thuộc vào một nguồn thu bên ngoài.', direction: 'up' },
    { group: 'Ngân hàng thương mại', effect: 'Có thêm nguồn ngoại tệ và phí dịch vụ chuyển tiền; kiều hối còn là kênh thu hút khách hàng mới.', direction: 'up' },
    { group: 'Cán cân thanh toán và dự trữ ngoại hối', effect: 'Kiều hối ổn định hỗ trợ cán cân vãng lai và đệm ngoại tệ khi dòng vốn khác biến động.', direction: 'up' },
    { group: 'Thị trường bất động sản địa phương', effect: 'Một phần kiều hối đổ vào mua và xây nhà, đẩy giá ở khu vực có nhiều lao động xuất khẩu.', direction: 'mixed' },
    { group: 'Người lao động ở nước ngoài', effect: 'Chi phí chuyển tiền và tỷ giá làm giảm giá trị thực nhận; kênh chính thức an toàn hơn kênh phi chính thức.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Lượng kiều hối thực nhận hằng năm', why: 'Đo quy mô nguồn ngoại tệ này so với các nguồn khác.', where: 'Ngân hàng Nhà nước, Ngân hàng Thế giới (dữ liệu migration & remittances)' },
    { name: 'Cán cân vãng lai và thu nhập thứ cấp', why: 'Đặt kiều hối trong tổng thể cán cân thanh toán.', where: 'Ngân hàng Nhà nước (sbv.gov.vn), IMF Balance of Payments' },
    { name: 'Chi phí chuyển tiền trung bình', why: 'Phí cao đẩy dòng tiền sang kênh phi chính thức.', where: 'Ngân hàng Thế giới (Remittance Prices Worldwide)' },
    { name: 'Tỷ giá USD/VND ngân hàng và thị trường tự do', why: 'Chênh lệch lớn khuyến khích kênh phi chính thức.', where: 'Ngân hàng Nhà nước và niêm yết ngân hàng' },
  ],
  counterpoints: [
    'Quy mô kiều hối có thể được thống kê khác nhau theo định nghĩa (chỉ tiền cá nhân hay gồm cả thu nhập người lao động), nên so sánh giữa nguồn cần thận trọng.',
    'Kiều hối ổn định nhưng không phải bảo hiểm tuyệt đối: suy thoái ở nước người lao động sinh sống hoặc siết chính sách lao động có thể làm dòng tiền chậm lại.',
    'Phụ thuộc kiều hối cao có thể làm giảm động lực tìm việc trong nước ở một số hộ và đẩy tỷ giá thực lên (hiện tượng "bệnh Hà Lan" nhẹ) theo lý thuyết; bài này chưa dẫn bằng chứng cho Việt Nam nên đây chỉ là giả thuyết cần kiểm chứng.',
  ],
  glossary: [
    { term: 'Kiều hối', definition: 'Tiền do người Việt ở nước ngoài chuyển về nước cho thân nhân hoặc đầu tư.' },
    { term: 'Cán cân vãng lai', definition: 'Tổng hợp thương mại hàng hóa, dịch vụ, thu nhập và chuyển giao với nước ngoài.' },
    { term: 'Thu nhập thứ cấp', definition: 'Các khoản chuyển giao một chiều (như kiều hối) không có đối ứng hàng hóa dịch vụ.' },
    { term: 'Dự trữ ngoại hối', definition: 'Tài sản bằng ngoại tệ do ngân hàng trung ương nắm giữ để can thiệp tỷ giá và đảm bảo thanh toán.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-remittances-fx-supply-q',
    question: 'Vì sao kiều hối thường được xem là nguồn ngoại tệ ổn định hơn vốn đầu tư danh mục?',
    options: [
      { id: 'a', text: 'Vì lượng kiều hối luôn lớn hơn mọi nguồn khác.', explain: 'Quy mô không phải lý do; tính ổn định đến từ động cơ gửi tiền.' },
      { id: 'b', text: 'Vì phần lớn là tiền gia đình hỗ trợ người thân nên ít chạy theo biến động thị trường.', correct: true, explain: 'Đúng. Động cơ nuôi gia đình ít nhạy với lợi suất ngắn hạn, khác vốn danh mục dễ rút khi rủi ro tăng.' },
      { id: 'c', text: 'Vì kiều hối không bị ảnh hưởng bởi kinh tế nước ngoài.', explain: 'Kiều hối vẫn chịu tác động của việc làm và thu nhập ở nước sở tại.' },
    ],
  },
  sources: [
    { title: 'Kiều hối về TPHCM năm 2025 đạt hơn 10,3 tỷ USD', publisher: 'Báo Sài Gòn Giải Phóng (22/01/2026), số liệu NHNN Chi nhánh Khu vực 2', url: 'https://www.sggp.org.vn/kieu-hoi-ve-tphcm-nam-2025-dat-hon-103-ty-usd-post834785.html' },
    { title: 'Kiều hối tiếp tục chảy mạnh về Việt Nam', publisher: 'Báo Đầu tư (25/10/2025)', url: 'https://baodautu.vn/kieu-hoi-tiep-tuc-chay-manh-ve-viet-nam-d418158.html' },
    { title: 'Remittance', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Remittance' },
    { title: 'Viet Nam Overview', publisher: 'World Bank Group', url: 'https://www.worldbank.org/en/country/vietnam/overview' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 19,
}
