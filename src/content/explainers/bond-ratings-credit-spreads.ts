import type { Explainer } from '../../../shared/explainer'

export const bondRatingsCreditSpreads: Explainer = {
  id: 'bond-ratings-credit-spreads',
  slug: 'bond-ratings-credit-spreads',
  question: 'Xếp hạng tín nhiệm và chênh lệch lãi suất tín dụng (credit spread) nói lên điều gì?',
  title: 'Xếp hạng là ý kiến về rủi ro vỡ nợ; spread là mức giá thị trường đòi cho rủi ro đó',
  topic: 'markets-investing',
  tldr: '**Xếp hạng tín nhiệm** là đánh giá của một tổ chức về khả năng một bên vay trả nợ đúng hạn, thường xếp theo thang chữ cái từ rủi ro thấp đến cao. **Credit spread** là chênh lệch lợi suất giữa trái phiếu rủi ro hơn và trái phiếu tham chiếu an toàn cùng kỳ hạn (thường trái phiếu chính phủ). Spread rộng nghĩa là thị trường đòi bù rủi ro nhiều hơn; hai thứ thường đi cùng nhau nhưng spread phản ứng nhanh hơn xếp hạng.',
  keyPoints: [
    'Theo Wikipedia, credit spread (yield spread) là chênh lệch lợi suất đến ngày đáo hạn giữa hai công cụ có chất lượng tín dụng khác nhau, trong ví dụ của trang là trái phiếu Kho bạc Mỹ so với trái phiếu rủi ro cao; trang nói khi spread nới rộng, thị trường đang dự báo rủi ro vỡ nợ lớn hơn.',
    'Ví dụ giả định: trái phiếu doanh nghiệp lợi suất 9%/năm, trái phiếu chính phủ cùng kỳ hạn 6%/năm thì spread là 3 điểm phần trăm. Nếu xác suất vỡ nợ hàng năm 4% và thu hồi 40% (tổn thất 60%), tổn thất kỳ vọng ≈ 4% × 60% = 2,4%; phần còn lại của spread bù thanh khoản và rủi ro.',
    'Spread không chỉ bù rủi ro vỡ nợ mà còn bù **thanh khoản** (khó bán), **kỳ hạn** và **mức e ngại rủi ro** chung của thị trường; spread có thể rộng ra vì tâm lý dù xếp hạng chưa đổi.',
    'Xếp hạng là ý kiến, không phải bảo đảm: cơ quan xếp hạng có thể chậm cập nhật hoặc đánh giá sai (kinh nghiệm khủng hoảng 2008); nhà đầu tư nên đối chiếu với báo cáo tài chính.',
    'Với trái phiếu doanh nghiệp Việt Nam, nhiều đợt phát hành riêng lẻ không có xếp hạng độc lập; nhà đầu tư cần tự đánh giá khả năng trả nợ, dòng tiền, tài sản đảm bảo và mục đích vốn.',
  ],
  causalChain: [
    { from: 'Khả năng trả nợ của bên vay yếu đi', to: 'Xếp hạng bị hạ hoặc triển vọng tiêu cực', mechanism: 'Cơ quan xếp hạng đánh giá lại dòng tiền, đòn bẩy, thanh khoản và môi trường kinh doanh.' },
    { from: 'Nhà đầu tư thấy rủi ro cao hơn', to: 'Spread mở rộng, giá trái phiếu giảm', mechanism: 'Thị trường đòi lợi suất cao hơn để mua; với trái phiếu đã phát hành, giá giảm để lợi suất tăng lên.' },
    { from: 'Spread cao kéo dài', to: 'Chi phí huy động của doanh nghiệp tăng, khó phát hành mới', mechanism: 'Doanh nghiệp phải trả lãi cao hơn hoặc không huy động được vốn, tăng rủi ro tái cấp vốn.' },
    { from: 'Hạ bậc xuống dưới ngưỡng đầu tư', to: 'Bán tháo bắt buộc', mechanism: 'Một số quỹ chỉ được phép nắm trái phiếu có xếp hạng đầu tư, nên hạ bậc có thể gây bán tháo.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư trái phiếu doanh nghiệp', effect: 'Lãi suất cao hơn lãi suất chính phủ chính là phần bù rủi ro; cần đánh giá liệu mức bù có đủ so với rủi ro.', direction: 'mixed' },
    { group: 'Doanh nghiệp phát hành trái phiếu', effect: 'Xếp hạng hoặc minh bạch thông tin tốt giúp spread thấp hơn, chi phí vốn rẻ hơn.', direction: 'up' },
    { group: 'Ngân hàng nắm trái phiếu doanh nghiệp', effect: 'Spread mở rộng làm giá trị danh mục giảm và rủi ro tín dụng tăng.', direction: 'down' },
    { group: 'Nhà đầu tư cá nhân', effect: 'Trái phiếu lãi suất cao thường đi cùng rủi ro cao; lãi suất hứa hẹn cao bất thường là tín hiệu cảnh báo, không phải ưu đãi.', direction: 'down' },
  ],
  indicators: [
    { name: 'Spread trái phiếu doanh nghiệp so với trái phiếu chính phủ cùng kỳ hạn', why: 'Thước đo giá của rủi ro tín dụng theo thị trường.', where: 'Sở Giao dịch Chứng khoán Hà Nội (HNX), công ty chứng khoán, cbonds.hnx.vn' },
    { name: 'Xếp hạng tín nhiệm và triển vọng xếp hạng', why: 'Ý kiến độc lập về khả năng trả nợ.', where: 'Website của các tổ chức xếp hạng (Moody\'s, S&P, Fitch) và tổ chức xếp hạng trong nước' },
    { name: 'Tỷ lệ nợ/EBITDA và hệ số thanh toán lãi vay', why: 'Dựa vào chỉ tiêu cơ bản để kiểm tra khả năng trả nợ.', where: 'Báo cáo tài chính doanh nghiệp' },
    { name: 'Tỷ lệ trái phiếu chậm trả / tái cơ cấu', why: 'Đo mức độ rủi ro thực tế của thị trường.', where: 'HNX, Bộ Tài chính' },
  ],
  counterpoints: [
    'Xếp hạng có độ trễ và đôi khi xung đột lợi ích (bên phát hành trả phí); spread thường phát tín hiệu sớm hơn nhưng nhiễu hơn.',
    'Spread hẹp chưa chắc an toàn: khi thanh khoản dồi dào, spread có thể bị nén quá mức rồi mở rộng đột ngột khi tâm lý đổi chiều.',
    'Với thị trường nhỏ và ít giao dịch, spread quan sát được kém thông tin vì ít giao dịch thực.',
  ],
  glossary: [
    { term: 'Xếp hạng tín nhiệm', definition: 'Đánh giá của tổ chức độc lập về khả năng trả nợ của bên vay hoặc một khoản nợ.' },
    { term: 'Credit spread', definition: 'Chênh lệch lợi suất giữa trái phiếu rủi ro và trái phiếu tham chiếu an toàn.' },
    { term: 'Xếp hạng đầu tư / đầu cơ', definition: 'Ngưỡng phân biệt trái phiếu rủi ro thấp (đầu tư) và rủi ro cao (đầu cơ).' },
    { term: 'Tỷ lệ thu hồi', definition: 'Phần giá trị khoản nợ thu về được khi vỡ nợ.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'bond-ratings-credit-spreads-q',
    question: 'Trái phiếu doanh nghiệp A trả lãi 10%/năm, trái phiếu chính phủ cùng kỳ hạn 6%/năm. Điều nào hợp lý nhất khi đọc spread 4 điểm phần trăm?',
    options: [
      { id: 'a', text: 'Đây là lợi nhuận thêm 4% không rủi ro.', explain: 'Không có lợi nhuận không rủi ro: spread là bù đắp cho rủi ro vỡ nợ, thanh khoản và các rủi ro khác.' },
      { id: 'b', text: 'Thị trường đòi 4 điểm phần trăm để bù rủi ro; cần xem rủi ro vỡ nợ có thật lớn hơn mức đó không.', correct: true, explain: 'Đúng. Spread là giá của rủi ro; quyết định là so sánh nó với tổn thất kỳ vọng và khả năng chịu rủi ro của bạn.' },
      { id: 'c', text: 'Spread cao chứng tỏ doanh nghiệp rất tốt.', explain: 'Ngược lại, spread cao thường phản ánh rủi ro cao hơn.' },
    ],
  },
  sources: [
    { title: 'Yield spread', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Credit_spread_(bond)' },
    { title: 'Credit rating agency', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Credit_rating_agency' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 55,
}
