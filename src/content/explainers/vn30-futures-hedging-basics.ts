import type { Explainer } from '../../../shared/explainer'

export const vn30FuturesHedgingBasics: Explainer = {
  id: 'vn30-futures-hedging-basics',
  slug: 'vn30-futures-hedging-basics',
  question: 'Hợp đồng tương lai chỉ số VN30 có thể dùng để phòng ngừa rủi ro danh mục cổ phiếu thế nào và rủi ro đi kèm là gì?',
  title: 'Phái sinh chỉ số: phòng ngừa rủi ro danh mục bằng hợp đồng tương lai VN30',
  topic: 'markets-investing',
  tldr: 'Hợp đồng tương lai VN30 cho phép lấy vị thế mua hoặc bán trên cả rổ 30 cổ phiếu mà không cần mua từng mã, thanh toán bằng tiền theo điểm chỉ số. Người giữ danh mục cổ phiếu có thể **bán** hợp đồng để bù một phần lỗ khi thị trường giảm, nhưng phải chịu **ký quỹ, đòn bẩy, chênh lệch cơ sở và hao tổn lãi khi thị trường tăng**. Bài chỉ nêu cơ chế, không khuyến nghị giao dịch.',
  keyPoints: [
    'Theo Thời báo Tài chính Việt Nam (8/8/2017) và DSC: hợp đồng VN30 có hệ số nhân 100.000 đồng/điểm, thanh toán bằng tiền, giá thanh toán cuối cùng là giá đóng cửa chỉ số VN30 ngày giao dịch cuối cùng (thứ Năm thứ ba của tháng đáo hạn), biên độ giá ±7%, bước giá 0,1 điểm.',
    'Ví dụ giả định (theo cách minh họa của DSC, giá trị tùy thời điểm): chỉ số 1.250 điểm thì giá trị một hợp đồng = 1.250 × 100.000 = 125 triệu đồng. Một danh mục 1 tỷ đồng bám sát chỉ số cần khoảng 8 hợp đồng bán để bù hoàn toàn: nếu chỉ số giảm 10%, danh mục lỗ 100 triệu, 8 hợp đồng bán lãi 8 × 125 triệu × 10% = 100 triệu (chưa tính phí, chênh lệch cơ sở).',
    'Cả bên mua và bên bán đều ký quỹ; lãi lỗ được tính hằng ngày. Tỷ lệ ký quỹ do VSD/VSDC quy định và thay đổi theo thời kỳ: bài năm 2017 nêu khoảng 10–15% giá trị hợp đồng (chỉ mang tính tham khảo); theo Báo Đấu thầu (13/12/2022), từ 15/12/2022 mức ký quỹ ban đầu tối thiểu cho hợp đồng VN30 tăng từ 13% lên 17%; DSC (không rõ ngày) cho biết công ty chứng khoán thường áp mức cao hơn. Bài chưa xác minh được mức hiện hành năm 2026 — hãy kiểm tra thông báo mới nhất của VSDC.',
    'Bán hợp đồng bù rủi ro thị trường chung, không bù rủi ro riêng của từng cổ phiếu; danh mục lệch khỏi VN30 (cổ phiếu ngoài rổ, beta khác 1) sẽ phòng ngừa không trọn vẹn.',
    'Mặt trái: đòn bẩy làm lỗ có thể vượt vốn ký quỹ, có thể bị tất toán bắt buộc khi ký quỹ xuống dưới mức duy trì; phòng ngừa cũng làm mất phần lãi nếu thị trường tăng.',
  ],
  causalChain: [
    { from: 'Nhà đầu tư giữ danh mục cổ phiếu lo thị trường giảm', to: 'Bán hợp đồng tương lai VN30', mechanism: 'Vị thế bán lãi khi chỉ số giảm, tạo khoản lãi đối ứng với lỗ của danh mục cổ phiếu.' },
    { from: 'Chỉ số VN30 giảm', to: 'Danh mục lỗ, vị thế phái sinh lãi', mechanism: 'Hợp đồng được tính lãi lỗ theo chênh lệch điểm nhân hệ số, nên phần lãi gần tỷ lệ với mức giảm của chỉ số.' },
    { from: 'Danh mục không giống VN30 hoặc hệ số beta khác 1', to: 'Phòng ngừa lệch (basis/tracking risk)', mechanism: 'Phần lỗ của danh mục có thể lớn hơn hoặc nhỏ hơn lãi của hợp đồng; giá hợp đồng cũng có thể lệch khỏi chỉ số cơ sở trước ngày đáo hạn.' },
    { from: 'Chỉ số tăng thay vì giảm', to: 'Vị thế bán lỗ và cần bổ sung ký quỹ', mechanism: 'Lỗ hằng ngày trừ vào ký quỹ; nếu dưới mức duy trì, phải nạp thêm hoặc bị tất toán bắt buộc.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư tổ chức và danh mục lớn', effect: 'Có công cụ giảm rủi ro thị trường chung mà không phải bán cổ phiếu cơ sở; cần quản trị ký quỹ và chi phí.', direction: 'up' },
    { group: 'Nhà đầu tư cá nhân', effect: 'Đòn bẩy cao dễ biến "phòng ngừa" thành đầu cơ; lỗ có thể vượt kỳ vọng nếu dùng không đúng quy mô vị thế.', direction: 'down' },
    { group: 'Công ty chứng khoán', effect: 'Có thêm sản phẩm và doanh thu, đồng thời chịu rủi ro tín dụng ký quỹ.', direction: 'mixed' },
    { group: 'Thị trường cơ sở', effect: 'Phái sinh tạo kênh chuyển rủi ro và có thể ảnh hưởng thanh khoản/biến động của thị trường cổ phiếu khi vị thế lớn bị tất toán.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Điểm VN30 và chênh lệch giữa giá hợp đồng với chỉ số cơ sở', why: 'Đo chênh lệch cơ sở (basis) và chi phí phòng ngừa.', where: 'Sở Giao dịch Chứng khoán Hà Nội (HNX), công ty chứng khoán' },
    { name: 'Tỷ lệ ký quỹ ban đầu và duy trì', why: 'Quyết định đòn bẩy thực và nguy cơ bị tất toán bắt buộc.', where: 'Tổng Công ty Lưu ký và Bù trừ chứng khoán Việt Nam (VSDC); quy định của công ty chứng khoán' },
    { name: 'Khối lượng giao dịch và vị thế mở', why: 'Thanh khoản và độ tập trung của vị thế.', where: 'HNX, VSDC' },
    { name: 'Hệ số beta của danh mục so với VN30', why: 'Xác định số hợp đồng cần để phòng ngừa.', where: 'Tự tính từ lịch sử giá' },
  ],
  counterpoints: [
    'Thông số hợp đồng (ký quỹ, hạn mức, lịch đáo hạn) có thể thay đổi; các nguồn có ngày khác nhau (2017, 2022 và bài DSC không rõ ngày), nên không nên dùng làm quy định hiện hành.',
    'Phòng ngừa có chi phí cơ hội: nếu thị trường tăng, lãi cổ phiếu bị triệt tiêu bởi lỗ vị thế bán.',
    'Ví dụ ở trên bỏ qua phí giao dịch, thuế, chênh lệch cơ sở và việc beta của danh mục khác 1.',
  ],
  glossary: [
    { term: 'Hợp đồng tương lai', definition: 'Hợp đồng chuẩn hóa mua/bán tài sản cơ sở ở giá thỏa thuận vào ngày tương lai, giao dịch tập trung và bù trừ qua trung tâm.' },
    { term: 'Hệ số nhân', definition: 'Số tiền trên mỗi điểm chỉ số; VN30 là 100.000 đồng/điểm.' },
    { term: 'Ký quỹ', definition: 'Khoản tiền bảo đảm phải nộp khi mở vị thế.' },
    { term: 'Thanh toán bằng tiền', definition: 'Tất toán bằng chênh lệch tiền thay vì giao nhận cổ phiếu.' },
    { term: 'Basis', definition: 'Chênh lệch giữa giá hợp đồng tương lai và giá trị chỉ số cơ sở.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vn30-futures-hedging-basics-q',
    question: 'Một danh mục cổ phiếu trị giá 1 tỷ đồng, bám sát VN30, được phòng ngừa đầy đủ bằng hợp đồng bán. Nếu thị trường tăng 10%, kết quả gần đúng (giả định, bỏ qua phí) là:',
    options: [
      { id: 'a', text: 'Danh mục lãi 100 triệu, vị thế bán cũng lãi 100 triệu.', explain: 'Vị thế bán lỗ khi chỉ số tăng.' },
      { id: 'b', text: 'Danh mục lãi khoảng 100 triệu, vị thế bán lỗ khoảng 100 triệu nên tổng gần như không đổi.', correct: true, explain: 'Đúng: phòng ngừa bù cả hướng tăng, đó là chi phí cơ hội của phòng ngừa.' },
      { id: 'c', text: 'Vị thế bán không ảnh hưởng gì vì chỉ là ký quỹ.', explain: 'Lãi lỗ được tính hằng ngày vào tài khoản ký quỹ; lỗ có thể buộc nạp thêm tiền.' },
    ],
  },
  sources: [
    { title: 'Hợp đồng tương lai VN30-Index là sản phẩm phái sinh đầu tiên (8/8/2017)', publisher: 'Thời báo Tài chính Việt Nam', url: 'https://thoibaotaichinhvietnam.vn/hop-dong-tuong-lai-vn30-index-la-san-pham-phai-sinh-dau-tien-35980.html' },
    { title: 'Hợp đồng tương lai là gì? (VN30 làm ví dụ, không rõ ngày)', publisher: 'DSC (Công ty Chứng khoán DSC)', url: 'https://dsc.com.vn/kien-thuc/hop-dong-tuong-lai-la-gi' },
    { title: 'Điều chỉnh tỷ lệ ký quỹ chứng khoán phái sinh từ 15/12 (13/12/2022)', publisher: 'Báo Đấu thầu', url: 'https://baodauthau.vn/dieu-chinh-ty-le-ky-quy-chung-khoan-phai-sinh-tu-1512-post132279.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 133,
}
