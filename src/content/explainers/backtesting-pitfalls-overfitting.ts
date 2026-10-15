import type { Explainer } from '../../../shared/explainer'

export const backtestingPitfallsOverfitting: Explainer = {
  id: 'backtesting-pitfalls-overfitting',
  slug: 'backtesting-pitfalls-overfitting',
  question: 'Kiểm thử chiến lược đầu tư trên dữ liệu quá khứ (backtest) có những cạm bẫy gì?',
  title: 'Backtest đẹp chưa phải bằng chứng: thử nhiều biến thể rồi chọn cái tốt nhất gần như luôn quá khớp',
  topic: 'markets-investing',
  tldr: 'Backtest mô phỏng chiến lược trên dữ liệu quá khứ. Rủi ro lớn nhất là **quá khớp (overfitting)**: mô hình khớp nhiễu của mẫu thay vì quy luật, nên thất bại khi gặp dữ liệu mới. Thử nhiều biến thể rồi chỉ báo cáo cái tốt nhất (data dredging) khiến kết quả "có ý nghĩa" xuất hiện do ngẫu nhiên. Cách phòng: kiểm tra trên dữ liệu chưa dùng, hạn chế số tham số, và tính đến chi phí.',
  keyPoints: [
    'Theo Wikipedia (Overfitting): quá khớp là phân tích khớp quá sát một tập dữ liệu cụ thể nên khó dự báo dữ liệu mới; mô hình có nhiều tham số hơn mức dữ liệu biện minh sẽ coi nhiễu là cấu trúc thật.',
    'Theo Wikipedia (Data dredging): chạy nhiều kiểm định trên một bộ dữ liệu rồi chỉ báo cáo kết quả có ý nghĩa làm tăng dương tính giả; ở ngưỡng 5%, khoảng 5% giả thuyết ngẫu nhiên vẫn có vẻ có ý nghĩa.',
    'Tính nhanh: thử 20 biến thể độc lập ở ngưỡng 5%, xác suất ít nhất một biến thể "đạt" do may mắn là 1 − 0,95^20 ≈ 64%. Vì vậy chiến lược tốt nhất trong 20 lần thử gần như không có nghĩa.',
    'Biện pháp: giữ lại **dữ liệu kiểm tra ngoài mẫu** không dùng khi thiết kế; hiệu chỉnh ngưỡng theo số lần thử (như Bonferroni hoặc kiểm soát tỷ lệ phát hiện sai); đăng ký trước giả thuyết.',
    'Các cạm bẫy thực hành khác của backtest: dùng thông tin chưa có ở thời điểm đó (thiên lệch nhìn trước), chỉ xét cổ phiếu còn tồn tại (thiên lệch sống sót), bỏ qua phí, trượt giá và hạn chế thanh khoản (đây là kinh nghiệm chung, không rút từ riêng một nguồn ở trên).',
  ],
  causalChain: [
    { from: 'Thử nhiều tham số, chỉ báo, giai đoạn', to: 'Một số kết quả đẹp do ngẫu nhiên', mechanism: 'Mỗi lần thử có xác suất nhỏ cho kết quả "ấn tượng" do may; thử càng nhiều, xác suất ít nhất một lần may mắn càng cao.' },
    { from: 'Chọn biến thể tốt nhất làm chiến lược', to: 'Quá khớp với mẫu lịch sử', mechanism: 'Chiến lược đã được điều chỉnh để khớp nhiễu của chính chuỗi giá đó; hiệu quả trên mẫu bị thổi phồng so với kỳ vọng thật.' },
    { from: 'Áp dụng vào dữ liệu mới', to: 'Hiệu quả thực thấp hơn nhiều (co rút)', mechanism: 'Mô hình đã khớp thường kém hơn trên dữ liệu mới so với dữ liệu khớp (hiện tượng co rút, shrinkage).' },
    { from: 'Chi phí giao dịch, trượt giá, thanh khoản thật', to: 'Lợi nhuận thực tế giảm thêm', mechanism: 'Backtest giả định giao dịch ở giá lý tưởng; thị trường nhỏ, thanh khoản thấp (như nhiều mã ở Việt Nam) làm chênh lệch lớn hơn.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân dùng chiến lược "đã backtest"', effect: 'Kết quả quảng cáo thường là biến thể tốt nhất trong nhiều lần thử; cần hỏi đã kiểm tra ngoài mẫu và đã tính phí chưa.', direction: 'down' },
    { group: 'Người bán khóa học, tín hiệu giao dịch', effect: 'Dễ lạm dụng backtest đẹp để thuyết phục; người mua nên yêu cầu bằng chứng thời gian thực.', direction: 'down' },
    { group: 'Quỹ và nhà phân tích định lượng', effect: 'Kỷ luật kiểm định ngoài mẫu, đăng ký giả thuyết trước và phân biệt kết quả mẫu/ngoài mẫu là chuẩn mực cơ bản.', direction: 'up' },
    { group: 'Nhà đầu tư theo dõi dữ liệu thị trường nhỏ', effect: 'Lịch sử ngắn và ít mã làm kết quả càng dễ quá khớp.', direction: 'down' },
  ],
  indicators: [
    { name: 'Hiệu quả ngoài mẫu so với trong mẫu', why: 'Chênh lệch lớn là dấu hiệu quá khớp.', where: 'Tự chia dữ liệu trước khi thiết kế (ví dụ 70% huấn luyện, 30% giữ lại)' },
    { name: 'Số lần thử và số tham số tự do', why: 'Thước đo mức độ rủi ro data dredging.', where: 'Nhật ký thử nghiệm của chính bạn' },
    { name: 'Độ bền theo giai đoạn và theo tham số lân cận', why: 'Kết quả tốt chỉ ở một tham số cụ thể là dấu hiệu mong manh.', where: 'Phân tích độ nhạy của backtest' },
  ],
  counterpoints: [
    'Không phải backtest nào cũng vô giá trị: chiến lược có giả thuyết kinh tế rõ, ít tham số và bền qua nhiều giai đoạn/thị trường đáng tin hơn.',
    'Giữ lại dữ liệu ngoài mẫu chỉ có tác dụng nếu bạn không nhìn nó nhiều lần để chỉnh chiến lược; nếu không, ngoài mẫu cũng bị "dùng hết".',
    'Cải tiến hợp pháp (đổi tham số sau khi thấy lý do kinh tế) khác với dò tham số mù; ranh giới đôi khi mờ.',
  ],
  glossary: [
    { term: 'Quá khớp (overfitting)', definition: 'Mô hình khớp quá sát dữ liệu mẫu, kể cả nhiễu, nên kém trên dữ liệu mới.' },
    { term: 'Data dredging / p-hacking', definition: 'Chạy nhiều kiểm định và chỉ báo cáo kết quả có ý nghĩa thống kê.' },
    { term: 'Ngoài mẫu (out-of-sample)', definition: 'Dữ liệu không dùng khi xây dựng hoặc chọn mô hình.' },
    { term: 'Thiên lệch sống sót', definition: 'Chỉ xét đối tượng còn tồn tại, bỏ qua đối tượng đã biến mất.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'backtesting-pitfalls-overfitting-q',
    question: 'Một người thử 50 tổ hợp tham số và công bố tổ hợp cho lợi nhuận tốt nhất trong 10 năm quá khứ. Điều nên làm trước khi tin?',
    options: [
      { id: 'a', text: 'Kiểm tra tổ hợp đó trên dữ liệu chưa dùng và tính đến việc đã thử 50 lần cùng chi phí giao dịch.', correct: true, explain: 'Đúng. Kết quả tốt nhất trong nhiều lần thử bị thổi phồng; cần dữ liệu ngoài mẫu và hiệu chỉnh số lần thử.' },
      { id: 'b', text: 'Tin vì 10 năm là đủ dài.', explain: 'Độ dài mẫu không loại bỏ hiệu ứng chọn lọc từ nhiều lần thử.' },
      { id: 'c', text: 'Thử thêm tham số để cải thiện tiếp.', explain: 'Thêm tham số làm tăng nguy cơ quá khớp.' },
    ],
  },
  sources: [
    { title: 'Overfitting', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Overfitting' },
    { title: 'Data dredging', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Data_dredging' },
    { title: 'Backtesting', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Backtesting' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 95,
}
