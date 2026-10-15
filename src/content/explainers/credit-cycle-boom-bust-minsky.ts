import type { Explainer } from '../../../shared/explainer'

export const creditCycleBoomBustMinsky: Explainer = {
  id: 'credit-cycle-boom-bust-minsky',
  slug: 'credit-cycle-boom-bust-minsky',
  question: 'Vì sao tín dụng bùng nổ rồi đổ vỡ, và "khoảnh khắc Minsky" là gì?',
  title: 'Chu kỳ tín dụng: bùng nổ và đổ vỡ theo Minsky',
  topic: 'macro',
  tldr: 'Hyman Minsky cho rằng **thời kỳ ổn định kéo dài làm hệ thống dần mong manh**: thời bình khiến người vay và người cho vay lạc quan, nợ dần chuyển từ loại tự trả được sang loại phải trông vào giá tài sản tăng. Khi giá ngừng tăng, nợ không đảo được và tín dụng co lại đột ngột. Các cơ quan như BIS theo dõi chênh lệch giữa tín dụng/GDP và xu hướng dài hạn để cảnh báo sớm nguy cơ khủng hoảng.',
  keyPoints: [
    'Minsky chia người vay thành 3 loại: **hedge** (dòng tiền trả được cả lãi và gốc), **speculative** (chỉ trả được lãi, phải vay đảo gốc) và **Ponzi** (không trả nổi cả lãi lẫn gốc, phụ thuộc giá tài sản tăng để đảo nợ).',
    'Ba pha: sau khủng hoảng ai cũng thận trọng (hedge); tự tin quay lại và cho vay chỉ trả lãi (speculative); ai cũng tin giá tài sản tăng mãi nên cho vay cả người không có khả năng trả (Ponzi).',
    'Hệ thống dao động giữa "vững vàng" và "mong manh"; khi giá tài sản dừng tăng, người vay speculative/Ponzi không đảo được nợ, và sự đổ vỡ có thể kéo theo cả người vay lành mạnh.',
    'BIS nhận định chênh lệch tín dụng/GDP (credit-to-GDP gap) là chỉ báo cảnh báo sớm hữu ích cho khủng hoảng ngân hàng; theo bài trong BIS Quarterly Review (06/2013), tổng tín dụng cho khu vực tư nhân phi tài chính từ mọi nguồn dự báo rủi ro khủng hoảng hệ thống tốt hơn chỉ báo chỉ dựa trên tín dụng ngân hàng.',
    'Theo Wikipedia, lý thuyết của Minsky phần lớn bị bỏ qua nhiều thập kỷ; ông trình bày bằng lời, không xây mô hình toán, và các mô hình kinh tế chính thống không đưa nợ tư nhân vào. Sau 2008 nó được quan tâm lại, nhưng vẫn là khung giải thích hơn là công cụ dự báo thời điểm.',
  ],
  causalChain: [
    { from: 'Kinh tế ổn định, thu nhập tăng, ít vỡ nợ', to: 'Kỳ vọng lạc quan, nới chuẩn cho vay', mechanism: 'Lịch sử trả nợ tốt làm người cho vay đánh giá rủi ro thấp đi và chấp nhận mức đòn bẩy cao hơn.' },
    { from: 'Nới chuẩn cho vay', to: 'Tín dụng tăng nhanh hơn GDP, giá tài sản tăng', mechanism: 'Tiền vay đổ vào tài sản (nhà đất, cổ phiếu) đẩy giá lên, giá lên lại làm tài sản thế chấp có vẻ an toàn hơn và kích thích vay thêm.' },
    { from: 'Giá tài sản tăng làm đảo nợ dễ dàng', to: 'Nợ chuyển từ hedge sang speculative và Ponzi', mechanism: 'Khoản vay được trả bằng cách vay mới hoặc bán tài sản giá cao, không còn bằng dòng tiền thực.' },
    { from: 'Giá tài sản dừng tăng hoặc lãi suất tăng', to: 'Không đảo được nợ, bán tháo, siết tín dụng', mechanism: 'Người vay phải bán tài sản để trả nợ, kéo giá xuống, làm giá trị tài sản thế chấp giảm và ngân hàng thu hẹp cho vay thêm (vòng xoáy giảm giá – siết tín dụng).' },
  ],
  vietnamImpact: [
    { group: 'Người vay mua nhà đầu tư lướt sóng', effect: 'Phụ thuộc giá tăng để trả nợ là dạng "speculative/Ponzi" nhỏ; giá đi ngang hoặc lãi suất lên có thể buộc phải bán gấp.', direction: 'down' },
    { group: 'Ngân hàng', effect: 'Tín dụng tăng nhanh hơn GDP là dấu hiệu cần giám sát; khi chu kỳ đảo chiều, nợ xấu và chi phí dự phòng tăng.', direction: 'mixed' },
    { group: 'Doanh nghiệp bất động sản và vay trái phiếu', effect: 'Mô hình vay đảo nợ dựa vào dòng tiền bán sản phẩm tương lai nhạy với thay đổi tâm lý và thanh khoản.', direction: 'down' },
    { group: 'Nhà đầu tư dài hạn', effect: 'Biết vị trí tương đối trong chu kỳ tín dụng giúp tránh mua đuổi khi đòn bẩy toàn hệ thống đang cao.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tín dụng/GDP và chênh lệch so với xu hướng (credit-to-GDP gap)', why: 'Cảnh báo sớm đòn bẩy tăng nhanh bất thường.', where: 'BIS (cơ sở dữ liệu credit-to-GDP gaps), Ngân hàng Nhà nước, Cục Thống kê' },
    { name: 'Tốc độ tăng tín dụng so với tốc độ tăng GDP danh nghĩa', why: 'Tín dụng vượt xa GDP thường đi kèm giá tài sản tăng nóng.', where: 'Ngân hàng Nhà nước, Cục Thống kê' },
    { name: 'Tỷ lệ nợ xấu và nợ nhóm 2 (cần chú ý)', why: 'Chỉ báo chậm của chu kỳ: tăng khi đổ vỡ đã bắt đầu.', where: 'Báo cáo tài chính ngân hàng, Ngân hàng Nhà nước' },
    { name: 'Tỷ lệ trả nợ so với thu nhập hộ gia đình (debt service ratio)', why: 'Cho biết gánh nợ thực sự so với dòng tiền.', where: 'BIS' },
  ],
  counterpoints: [
    'Đòn bẩy cao không luôn dẫn đến khủng hoảng; nó chỉ làm hệ thống dễ tổn thương hơn, còn cú hích phải đến từ đâu đó (lãi suất, sốc bên ngoài).',
    'Chỉ báo credit-to-GDP gap phụ thuộc cách ước tính xu hướng và có thể báo động sai hoặc báo muộn; nên đọc cùng các chỉ báo khác như giá bất động sản và gánh nợ của hộ gia đình.',
    'Lý thuyết Minsky khó kiểm định định lượng vì không có mô hình toán chuẩn, nên khó dùng để dự báo thời điểm.',
  ],
  glossary: [
    { term: 'Chu kỳ tín dụng', definition: 'Dao động của tốc độ tăng tín dụng và đòn bẩy theo thời gian, thường dài hơn chu kỳ kinh doanh thông thường.' },
    { term: 'Khoảnh khắc Minsky', definition: 'Thời điểm sau giai đoạn bùng nổ nợ khi giá tài sản dừng tăng và thị trường chuyển sang bán tháo và siết tín dụng.' },
    { term: 'Vay Ponzi (theo Minsky)', definition: 'Người vay không trả nổi cả lãi và gốc, chỉ tồn tại nhờ giá tài sản tăng hoặc khoản vay mới.' },
    { term: 'Credit-to-GDP gap', definition: 'Chênh lệch giữa tỷ lệ tín dụng/GDP hiện tại với xu hướng dài hạn.' },
    { term: 'Đòn bẩy', definition: 'Mức sử dụng nợ so với vốn tự có.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'credit-cycle-boom-bust-minsky-q',
    question: 'Một chủ đầu tư chỉ trả được lãi từ dòng tiền cho thuê, còn gốc phải vay mới để trả. Theo phân loại của Minsky, họ thuộc loại nào?',
    options: [
      { id: 'a', text: 'Hedge, vì vẫn trả được lãi đúng hạn.', explain: 'Hedge phải trả được cả lãi lẫn gốc bằng dòng tiền.' },
      { id: 'b', text: 'Speculative, vì dòng tiền chỉ đủ trả lãi và phải đảo nợ gốc.', correct: true, explain: 'Đúng. Rủi ro đảo nợ làm họ nhạy với việc lãi suất tăng hoặc thanh khoản thắt chặt.' },
      { id: 'c', text: 'Ponzi, vì có vay thêm.', explain: 'Ponzi là khi dòng tiền không đủ trả cả lãi; ở đây vẫn trả được lãi.' },
    ],
  },
  sources: [
    { title: 'Financial instability hypothesis', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Financial_instability_hypothesis' },
    { title: 'Total credit as an early warning indicator for systemic banking crises', publisher: 'BIS Quarterly Review', url: 'https://www.bis.org/publ/qtrpdf/r_qt1306f.htm' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 162,
}
