import type { Explainer } from '../../../shared/explainer'

export const vietnamFxReservesIntervention: Explainer = {
  id: 'vietnam-fx-reserves-intervention',
  slug: 'vietnam-fx-reserves-intervention',
  question: 'Dự trữ ngoại hối là gì và Ngân hàng Nhà nước dùng nó can thiệp tỷ giá thế nào?',
  title: 'Dự trữ ngoại hối là "bình xăng dự phòng" để ổn định tỷ giá; dùng càng nhiều, bộ đệm càng mỏng',
  topic: 'vietnam-economy',
  tldr: 'Dự trữ ngoại hối là tài sản nước ngoài (ngoại tệ, vàng, quyền rút vốn đặc biệt) ngân hàng trung ương giữ để đáp ứng cán cân thanh toán và tác động tới tỷ giá. Khi áp lực mất giá lớn, NHNN **bán ngoại tệ** để hỗ trợ VND, đổi lại dự trữ giảm. Theo NHNN, đến 18/6/2026 dự trữ nhà nước gần **87,6 tỷ USD**, thấp hơn đỉnh khoảng 111,8 tỷ USD hồi tháng 1/2022.',
  keyPoints: [
    'Theo Wikipedia (Foreign exchange reserves), dự trữ ngoại hối gồm ngoại tệ, vàng, SDR, giữ để đáp ứng nhu cầu cán cân thanh toán và tác động tới tỷ giá; nó củng cố niềm tin vào chính sách tiền tệ, đệm trước cú sốc bên ngoài và đáp ứng nghĩa vụ ngoại tệ.',
    'Theo Báo Đấu thầu (24/6/2026), dẫn tờ trình của NHNN về sửa đổi Nghị định 50/2014/NĐ-CP: dự trữ gần 87,6 tỷ USD (đến 18/6/2026), đỉnh khoảng 111,8 tỷ USD (tháng 1/2022), xuống 86,7 tỷ USD cuối 2022; NHNN "đã kịp thời sử dụng dự trữ để can thiệp ổn định thị trường ngoại hối".',
    'Cơ chế can thiệp: bán USD cho ngân hàng để giảm áp lực mất giá VND. Can thiệp **không trung hòa** hút VND khỏi hệ thống (thắt chặt thanh khoản); NHNN có thể bù lại bằng các công cụ khác.',
    'Mức đủ của dự trữ được đo bằng nhiều thước: số tháng nhập khẩu (quy tắc thực hành khoảng ba tháng), tỷ lệ dự trữ trên nợ nước ngoài ngắn hạn (quy tắc Guidotti–Greenspan), và dự trữ trên cung tiền; không có một con số "đủ" duy nhất.',
    'Dự trữ có chi phí: lợi suất thường thấp hơn các lựa chọn khác, giá trị thực bị lạm phát bào mòn, và biến động tỷ giá có thể gây lãi lỗ định giá lại.',
  ],
  causalChain: [
    { from: 'Áp lực mất giá VND (USD mạnh, lãi suất Mỹ cao, nhập siêu, dòng vốn ra)', to: 'Cầu USD vượt cung trên thị trường', mechanism: 'Doanh nghiệp và nhà đầu tư mua USD nhiều hơn lượng USD bán ra, đẩy tỷ giá lên.' },
    { from: 'Cầu USD vượt cung', to: 'NHNN bán ngoại tệ từ dự trữ', mechanism: 'Bán USD (giao ngay hoặc kỳ hạn) làm tăng cung USD, giảm áp lực tỷ giá; công cụ có thể là giao ngay hoặc kỳ hạn tùy thời điểm.' },
    { from: 'Bán USD, thu VND', to: 'Dự trữ giảm, thanh khoản VND thắt lại', mechanism: 'Mỗi USD bán ra thu về VND, rút bớt thanh khoản; lãi suất liên ngân hàng có thể tăng nếu không bơm lại.' },
    { from: 'Dự trữ thấp hơn', to: 'Khả năng chống đỡ cú sốc tiếp theo yếu đi', mechanism: 'Thị trường theo dõi số dự trữ như thước đo năng lực bảo vệ tỷ giá; dự trữ mỏng làm tăng kỳ vọng mất giá và chi phí huy động vốn ngoại.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp nhập khẩu, vay ngoại tệ', effect: 'Can thiệp thành công giúp tỷ giá ổn định, giảm rủi ro chi phí tăng; dự trữ yếu làm tăng rủi ro mất giá đột ngột.', direction: 'mixed' },
    { group: 'Ngân hàng thương mại', effect: 'Bán ngoại tệ của NHNN làm giảm VND trong hệ thống, có thể tăng áp lực lãi suất liên ngân hàng ngắn hạn.', direction: 'down' },
    { group: 'Người gửi tiết kiệm và người vay VND', effect: 'Tỷ giá ổn định giúp giảm xu hướng đổi VND sang USD; nhưng thắt chặt thanh khoản có thể đẩy lãi suất lên.', direction: 'mixed' },
    { group: 'Nhà đầu tư nước ngoài', effect: 'Quy mô dự trữ và độ minh bạch công bố ảnh hưởng nhận định về rủi ro tỷ giá của Việt Nam.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Dự trữ ngoại hối (tỷ USD) và số tháng nhập khẩu', why: 'Thước đo năng lực đệm trước cú sốc.', where: 'Ngân hàng Nhà nước; cơ sở dữ liệu IMF (số theo định nghĩa chuẩn có thể khác số trong nước)' },
    { name: 'Tỷ giá trung tâm, tỷ giá ngân hàng và tỷ giá tự do', why: 'Chênh lệch lớn cho thấy áp lực thị trường chưa được giải tỏa.', where: 'Cổng thông tin NHNN; bảng niêm yết ngân hàng thương mại' },
    { name: 'Cán cân thanh toán và dòng FDI/kiều hối', why: 'Nguồn cung USD tự nhiên giảm bớt nhu cầu can thiệp.', where: 'Ngân hàng Nhà nước; Cục Thống kê; Ngân hàng Thế giới' },
  ],
  counterpoints: [
    'Số dự trữ công bố tại các thời điểm có thể theo định nghĩa khác nhau (dự trữ nhà nước theo luật trong nước và dự trữ chính thức theo chuẩn IMF); phải so sánh cùng định nghĩa.',
    'Dự trữ giảm không tự động là dấu hiệu khủng hoảng: nó có thể phản ánh việc dùng bộ đệm đúng mục đích; điều đáng lo là giảm kéo dài mà nguồn cung USD không phục hồi.',
    'Can thiệp chỉ làm mượt, không thay được cải thiện nền tảng (cán cân vãng lai, chênh lệch lãi suất, lạm phát).',
  ],
  glossary: [
    { term: 'Dự trữ ngoại hối', definition: 'Tài sản nước ngoài (ngoại tệ, vàng, SDR) do ngân hàng trung ương nắm giữ.' },
    { term: 'Can thiệp không trung hòa', definition: 'Can thiệp ngoại hối không được bù bằng nghiệp vụ khác nên làm thay đổi cung tiền.' },
    { term: 'Quy tắc Guidotti–Greenspan', definition: 'Dự trữ thanh khoản nên ít nhất bằng nợ nước ngoài đến hạn trong một năm.' },
    { term: 'Hợp đồng kỳ hạn ngoại tệ', definition: 'Thỏa thuận mua bán ngoại tệ ở tỷ giá cố định vào một ngày trong tương lai.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-fx-reserves-intervention-q',
    question: 'NHNN bán USD từ dự trữ để giảm áp lực mất giá VND. Hệ quả nào đúng nhất?',
    options: [
      { id: 'a', text: 'Dự trữ giảm và thanh khoản VND trong hệ thống bị hút bớt.', correct: true, explain: 'Bán USD thu về VND nên rút thanh khoản; dự trữ giảm tương ứng. Đây là chi phí của can thiệp.' },
      { id: 'b', text: 'Dự trữ tăng vì NHNN thu thêm VND.', explain: 'Dự trữ tính bằng ngoại tệ nên giảm khi bán ngoại tệ.' },
      { id: 'c', text: 'Không có tác động tới lãi suất.', explain: 'Hút VND có thể làm thanh khoản ngắn hạn căng hơn, tác động lãi suất liên ngân hàng.' },
    ],
  },
  sources: [
    { title: 'Đến 18/6, dự trữ ngoại hối đạt 87,6 tỷ USD', publisher: 'Báo Đấu thầu (bài 24/6/2026, dẫn tờ trình NHNN)', url: 'https://baodauthau.vn/den-186-du-tru-ngoai-hoi-dat-876-ty-usd-post201374.html' },
    { title: 'Foreign exchange reserves', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Foreign-exchange_reserves' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 87,
}
