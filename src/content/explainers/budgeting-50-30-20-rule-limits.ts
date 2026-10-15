import type { Explainer } from '../../../shared/explainer'

export const budgeting503020RuleLimits: Explainer = {
  id: 'budgeting-50-30-20-rule-limits',
  slug: 'budgeting-50-30-20-rule-limits',
  question: 'Quy tắc 50/30/20: khi nào dùng được, khi nào không?',
  title: 'Khung xuất phát đơn giản, cần điều chỉnh khi chi phí thiết yếu chiếm quá nửa thu nhập',
  topic: 'personal-finance',
  tldr: 'Quy tắc **50/30/20** chia thu nhập sau thuế: **50% nhu cầu thiết yếu**, **30% mong muốn**, **20% tiết kiệm và trả nợ**. Nó hữu ích làm khung xuất phát cho người mới lập ngân sách, nhưng giả định chi phí thiết yếu không vượt 50%; với thu nhập thấp, chi phí nhà ở cao, gánh nặng phụ thuộc hoặc mục tiêu nghỉ hưu sớm, tỷ lệ cần điều chỉnh.',
  keyPoints: [
    'Theo InCharge Debt Solutions (cập nhật 5/3/2024), quy tắc được phổ biến hóa trong cuốn "All Your Worth" (Elizabeth Warren và Amelia Warren Tyagi) và áp dụng cho thu nhập thực nhận sau thuế.',
    'Cùng nguồn: nhu cầu (50%) gồm nhà ở, điện nước, thực phẩm, đi lại, bảo hiểm, tiền trả nợ tối thiểu; mong muốn (30%) gồm giải trí, ăn ngoài, du lịch; phần 20% gồm trả nợ thêm, quỹ khẩn cấp (khoảng 3–6 tháng chi tiêu) và tiết kiệm hưu trí.',
    'Ví dụ giả định: thu nhập thực nhận 20 triệu đồng/tháng → 10 triệu thiết yếu, 6 triệu mong muốn, 4 triệu tiết kiệm/trả nợ. Nếu tiền nhà và thiết yếu đã chiếm 14 triệu (70%), không còn đủ chia 30/20 như quy tắc.',
    'Hạn chế được nguồn nêu: có thể không thực tế với thu nhập thấp; vùng chi phí sinh hoạt cao (nhà ở đắt) khó đạt 50% ngay cả khi thu nhập cao; hoàn cảnh nhiều con, cha mẹ già, chi phí y tế lớn đẩy thiết yếu vượt 50%; người muốn nghỉ hưu sớm cần tiết kiệm nhiều hơn 20%.',
    'Cách dùng thực tế: coi 50/30/20 là chuẩn tham chiếu, đo chi tiêu thật 2–3 tháng, rồi điều chỉnh (ví dụ 60/20/20 hoặc 70/10/20 tạm thời) và ưu tiên giữ phần tiết kiệm/trả nợ ổn định trước.',
  ],
  causalChain: [
    { from: 'Chia ngân sách theo tỷ lệ cố định', to: 'Có quy tắc ra quyết định chi tiêu đơn giản', mechanism: 'Ba nhóm giúp phân biệt thiết yếu với tùy ý và buộc dành trước một phần cho tiết kiệm.' },
    { from: 'Chi phí thiết yếu vượt 50%', to: 'Phải cắt mong muốn hoặc tiết kiệm', mechanism: 'Tổng cố định 100% nên nếu thiết yếu tăng thì hai nhóm còn lại phải giảm; cắt tiết kiệm làm yếu khả năng chống cú sốc.' },
    { from: 'Tiết kiệm đều đặn 20% (hoặc ít hơn nhưng ổn định)', to: 'Quỹ khẩn cấp và tài sản tăng dần', mechanism: 'Tiền để dành giảm phải vay khi có biến cố và cho phép đầu tư dài hạn.' },
    { from: 'Thu nhập tăng nhưng chi tiêu tăng theo', to: 'Tỷ lệ tiết kiệm không cải thiện', mechanism: 'Hiện tượng "lạm phát lối sống" nuốt phần tăng thu nhập nếu không đặt tỷ lệ tiết kiệm cố định.' },
  ],
  vietnamImpact: [
    { group: 'Người thuê nhà ở đô thị lớn', effect: 'Tiền thuê nhà có thể chiếm tỷ lệ lớn thu nhập, khiến "50% thiết yếu" khó đạt; cần điều chỉnh tỷ lệ.', direction: 'down' },
    { group: 'Người mới đi làm, độc thân, chưa có nợ', effect: 'Khung 50/30/20 dễ áp dụng và là bước khởi đầu tốt để tạo thói quen tiết kiệm.', direction: 'up' },
    { group: 'Hộ gia đình có con nhỏ, cha mẹ già', effect: 'Thiết yếu thường vượt 50% (giáo dục, y tế, chăm sóc); tỷ lệ cần linh hoạt, nhưng vẫn nên giữ một mức tiết kiệm tối thiểu.', direction: 'mixed' },
    { group: 'Người vay mua nhà hoặc vay tiêu dùng', effect: 'Trả nợ thêm nằm trong phần 20%; nếu trả nợ tối thiểu đã lớn, ưu tiên giảm nợ lãi cao trước khi tăng đầu tư.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ lệ chi phí thiết yếu / thu nhập thực nhận', why: 'Cho biết quy tắc có khả thi với hoàn cảnh của bạn hay không.', where: 'Tự theo dõi qua sao kê ngân hàng, ứng dụng quản lý chi tiêu' },
    { name: 'Tỷ lệ tiết kiệm và trả nợ thêm / thu nhập', why: 'Thước đo chính của sức khỏe tài chính.', where: 'Sao kê tài khoản tiết kiệm, thẻ, khoản vay' },
    { name: 'Số tháng chi tiêu thiết yếu mà quỹ khẩn cấp đáp ứng được', why: 'Đo khả năng chống chịu cú sốc thu nhập.', where: 'Tự tính từ số dư tiết kiệm và chi tiêu thiết yếu' },
    { name: 'Lạm phát và giá thuê nhà tại nơi sống', why: 'Chi phí thiết yếu tăng có thể phá vỡ tỷ lệ cũ.', where: 'Cục Thống kê (CPI), các báo cáo thị trường thuê nhà' },
  ],
  counterpoints: [
    'Quy tắc phát triển ở bối cảnh Mỹ; cơ cấu chi tiêu và chi phí ở Việt Nam khác (ví dụ chi phí giáo dục, hỗ trợ gia đình mở rộng), nên các con số không nên áp dụng máy móc.',
    'Định nghĩa "thiết yếu" và "mong muốn" mang tính chủ quan; một số khoản như điện thoại, internet nằm giữa hai nhóm.',
    'Với người có nợ lãi cao, ưu tiên trả nợ thêm có thể quan trọng hơn giữ đủ 30% cho mong muốn; với thu nhập rất cao, tiết kiệm 20% có thể quá thấp.',
  ],
  glossary: [
    { term: 'Thu nhập thực nhận', definition: 'Thu nhập sau thuế và các khoản khấu trừ bắt buộc, tiền thực sự về tài khoản.' },
    { term: 'Nhu cầu thiết yếu', definition: 'Chi tiêu không thể trì hoãn như nhà ở, ăn uống, đi lại, bảo hiểm, trả nợ tối thiểu.' },
    { term: 'Quỹ khẩn cấp', definition: 'Khoản tiền thanh khoản cao dự phòng cho biến cố, thường tương đương vài tháng chi tiêu.' },
    { term: 'Lạm phát lối sống', definition: 'Chi tiêu tăng theo thu nhập khiến tiết kiệm không tăng.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'budgeting-50-30-20-rule-limits-q',
    question: 'Thu nhập thực nhận 15 triệu đồng/tháng; tiền nhà, ăn uống, đi lại, trả nợ tối thiểu đã 11 triệu (ví dụ giả định). Điều nào hợp lý?',
    options: [
      { id: 'a', text: 'Cố ép 7,5 triệu cho thiết yếu theo đúng 50%.', explain: 'Không khả thi: chi phí thật là 11 triệu; ép cứng dễ dẫn đến vay nợ hoặc bỏ cuộc.' },
      { id: 'b', text: 'Dùng quy tắc làm tham chiếu, giữ khoản tiết kiệm nhỏ nhưng đều (ví dụ 1–2 triệu), cắt khoản mong muốn trước và tìm cách tăng thu nhập hoặc giảm chi phí cố định.', correct: true, explain: 'Đúng. Thiết yếu ≈ 73% thu nhập; giữ thói quen tiết kiệm nhỏ ổn định quan trọng hơn đạt đủ 20%.' },
      { id: 'c', text: 'Bỏ hẳn tiết kiệm vì quy tắc không áp dụng được.', explain: 'Không có quỹ dự phòng thì biến cố nhỏ cũng buộc phải vay; một khoản tiết kiệm nhỏ vẫn có giá trị.' },
    ],
  },
  sources: [
    { title: 'The 50/30/20 Rule for Budgeting', publisher: 'InCharge Debt Solutions (cập nhật 5/3/2024)', url: 'https://www.incharge.org/financial-literacy/budgeting-saving/50-30-20-rule/' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 56,
}
