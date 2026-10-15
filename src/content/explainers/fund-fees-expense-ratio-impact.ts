import type { Explainer } from '../../../shared/explainer'

export const fundFeesExpenseRatioImpact: Explainer = {
  id: 'fund-fees-expense-ratio-impact',
  slug: 'fund-fees-expense-ratio-impact',
  question: 'Phí quỹ làm mòn lợi suất dài hạn như thế nào?',
  title: 'Phí quỹ nhỏ mỗi năm, nhưng cộng dồn qua lãi kép thành một khoản lớn',
  topic: 'personal-finance',
  tldr: 'Phí quản lý và chi phí vận hành của quỹ được trừ **mỗi năm** vào tài sản quỹ, nên lợi suất bạn nhận là lợi suất gộp trừ phí. Vì lãi kép, chênh vài phần trăm phí mỗi năm có thể làm chênh hàng chục phần trăm số tiền cuối kỳ sau nhiều thập kỷ. Ví dụ giả định dưới đây cho thấy chênh phí 1,2 điểm phần trăm/năm làm số tiền sau 30 năm thấp hơn gần 30%. Phí cao có thể xứng đáng nếu quỹ tạo ra giá trị vượt trội bền vững, nhưng điều này khó chứng minh trước.',
  keyPoints: [
    'Theo SmartAsset, **tỷ lệ chi phí (expense ratio)** là phí hằng năm mà quỹ thu từ nhà đầu tư, tính bằng phần trăm tài sản quỹ, bao gồm phí quản lý, chi phí hành chính, vận hành và các khoản phí dựa trên tài sản khác. Nó được trừ dần nên bạn thường không "thấy" một khoản phí riêng.',
    '**Ví dụ giả định (tự tính):** đầu tư 100 triệu đồng, lợi suất gộp 7%/năm, giữ 30 năm. Nếu phí 0,3%/năm, lợi suất ròng 6,7% → khoảng **699,7 triệu**. Nếu phí 1,5%/năm, lợi suất ròng 5,5% → khoảng **498,4 triệu**. Chênh khoảng 201 triệu, tức quỹ phí cao còn lại khoảng 71% quỹ phí thấp. Đây là ví dụ minh họa, không phải lợi suất thực của quỹ nào và bỏ qua thuế, phí mua/bán.',
    'Ví dụ SmartAsset cho lợi suất 8% trước phí trong 20 năm: quỹ phí 0,5% đạt khoảng 424.785 USD, quỹ phí 1% khoảng 386.968 USD, chênh khoảng 37.817 USD. Chỉ 0,5 điểm phần trăm mỗi năm đã tạo chênh lệch đó.',
    'Quỹ chủ động có phí cao hơn quỹ chỉ số/ETF vì cần đội ngũ nghiên cứu; để phí cao có lý, quỹ phải **thắng chỉ số sau phí, bền vững**. Bằng chứng ổn định theo thời gian thường khó tìm, nên nhiều nhà đầu tư dài hạn ưu tiên quỹ phí thấp.',
    'Ngoài phí quản lý hằng năm, cần xem **phí mua, phí bán/mua lại, phí chuyển đổi, phí hiệu suất** và chi phí giao dịch trong quỹ (ít hiển thị nhưng ảnh hưởng lợi suất).',
  ],
  causalChain: [
    { from: 'Quỹ trừ phí hằng năm theo phần trăm tài sản', to: 'Lợi suất ròng = lợi suất gộp − phí', mechanism: 'Phí trừ liên tục vào giá trị tài sản quỹ nên thấp hơn từng năm một chút.' },
    { from: 'Lợi suất ròng thấp hơn mỗi năm', to: 'Lãi kép tích lũy ít hơn', mechanism: 'Phần phí cũng mất đi lãi sinh ra từ phần đó ở các năm sau, nên tác động cộng dồn lớn hơn tổng phí nộp.' },
    { from: 'Thời gian nắm giữ dài hơn', to: 'Chênh lệch tuyệt đối giữa quỹ phí cao và phí thấp phình ra', mechanism: 'Lãi kép khuếch đại chênh lệch lợi suất qua số năm; thời gian càng dài, tác động càng lớn.' },
    { from: 'Chọn quỹ theo lợi suất quá khứ cao', to: 'Có thể trả phí cao mà không có lợi thế bền vững', mechanism: 'Lợi suất quá khứ có thể do may mắn hoặc phong cách đầu tư hợp thời; không bảo đảm vượt trội trong tương lai.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư quỹ mở và ETF', effect: 'Nên so sánh phí quản lý, phí mua/bán trong bản cáo bạch giữa các quỹ cùng loại; tác động rõ khi đầu tư định kỳ nhiều năm.', direction: 'mixed' },
    { group: 'Người tiết kiệm hưu trí, mục tiêu dài hạn', effect: 'Thời gian dài làm phí thành yếu tố quan trọng; chọn sản phẩm phí thấp có thể cải thiện kết quả cuối cùng đáng kể.', direction: 'up' },
    { group: 'Công ty quản lý quỹ', effect: 'Cạnh tranh phí và minh bạch phí là xu hướng; quỹ chủ động phải chứng minh giá trị cộng thêm.', direction: 'mixed' },
    { group: 'Người mua sản phẩm bán qua kênh tư vấn', effect: 'Sản phẩm đóng gói đầu tư – bảo hiểm có thể có nhiều lớp phí; cần hỏi rõ tổng chi phí.', direction: 'down' },
  ],
  indicators: [
    { name: 'Tỷ lệ chi phí tổng (total expense ratio)', why: 'Phí thực tế hằng năm; so sánh giữa các quỹ cùng chiến lược.', where: 'Bản cáo bạch, báo cáo định kỳ và trang thông tin của công ty quản lý quỹ' },
    { name: 'Phí mua, phí mua lại theo thời gian nắm giữ', why: 'Ảnh hưởng lợi suất khi mua bán, đặc biệt nếu nắm giữ ngắn.', where: 'Bản cáo bạch của quỹ' },
    { name: 'Sai số bám sát chỉ số (tracking error) của quỹ chỉ số/ETF', why: 'Phí và chi phí giao dịch làm quỹ lệch khỏi chỉ số.', where: 'Báo cáo của quỹ, công bố của công ty quản lý quỹ' },
    { name: 'Lợi suất sau phí so với chỉ số tham chiếu nhiều năm', why: 'Kiểm tra quỹ chủ động có thực sự thắng chỉ số sau phí.', where: 'Báo cáo hoạt động quỹ, dữ liệu so sánh của các tổ chức độc lập' },
  ],
  counterpoints: [
    'Phí thấp không bảo đảm lợi suất tốt: chiến lược, rủi ro và kỷ luật đầu tư của nhà đầu tư quan trọng hơn mức phí.',
    'Một số quỹ chủ động vượt chỉ số sau phí trong nhiều năm, nhưng khó nhận diện trước và có thể không duy trì.',
    'Ví dụ giả định dùng lợi suất cố định mỗi năm; thực tế lợi suất biến động và thứ tự lợi suất ảnh hưởng kết quả.',
  ],
  glossary: [
    { term: 'Tỷ lệ chi phí (expense ratio)', definition: 'Phí hằng năm của quỹ tính bằng phần trăm tài sản quỹ.' },
    { term: 'Phí quản lý', definition: 'Phần phí trả cho công ty quản lý quỹ, thường là bộ phận lớn nhất trong chi phí.' },
    { term: 'Lợi suất gộp / ròng', definition: 'Lợi suất trước hoặc sau khi trừ phí.' },
    { term: 'Lãi kép', definition: 'Lãi tính trên cả gốc và lãi đã tích lũy.' },
    { term: 'Sai số bám sát (tracking error)', definition: 'Độ lệch của lợi suất quỹ chỉ số so với chỉ số tham chiếu.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'fund-fees-expense-ratio-impact-q',
    question: 'Hai quỹ cùng danh mục, lợi suất gộp 7%/năm; quỹ A phí 0,3%, quỹ B phí 1,5%. Giữ 30 năm, kết luận nào đúng nhất?',
    options: [
      { id: 'a', text: 'Chênh 1,2 điểm phần trăm là nhỏ, kết quả gần như nhau.', explain: 'Qua 30 năm lãi kép, tỷ lệ chênh thành khoảng 29% số tiền cuối kỳ trong ví dụ trên.' },
      { id: 'b', text: 'Quỹ B cho số tiền cuối kỳ thấp hơn đáng kể, vì phí trừ hằng năm và mất cả lãi sinh ra từ phần phí.', correct: true, explain: 'Đúng. Ví dụ giả định cho khoảng 700 triệu so với 498 triệu (quỹ A so với B), chênh khoảng 200 triệu.' },
      { id: 'c', text: 'Phí chỉ ảnh hưởng khi bán quỹ.', explain: 'Phí quản lý trừ dần hằng năm vào tài sản quỹ, ảnh hưởng ngay từ năm đầu.' },
    ],
  },
  sources: [
    { title: 'What is an expense ratio in mutual funds?', publisher: 'SmartAsset', url: 'https://smartasset.com/investing/what-is-expense-ratio-in-mutual-funds' },
    { title: 'Expense ratio', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Expense_ratio' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 76,
}
