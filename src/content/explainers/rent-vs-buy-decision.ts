import type { Explainer } from '../../../shared/explainer'

export const rentVsBuyDecision: Explainer = {
  id: 'rent-vs-buy-decision',
  slug: 'rent-vs-buy-decision',
  question: 'Thuê hay mua nhà: so sánh thế nào cho đúng?',
  title: 'Thuê hay mua: so tổng chi phí sở hữu với tiền thuê, tính cả chi phí cơ hội',
  topic: 'real-estate',
  tldr: 'Mua nhà không chỉ là trả lãi vay: bạn còn chịu **chi phí cơ hội của vốn trả trước**, chi phí bảo trì, thuế phí, và đổi lại có **tiền gốc tích lũy** cùng khả năng giá tăng. Để so sánh, hãy quy mọi thứ về chi phí mỗi năm, rồi hỏi: giá nhà phải tăng bao nhiêu mỗi năm thì mua hòa vốn với thuê? Con số dưới đây là ví dụ giả định, không phải dự báo.',
  keyPoints: [
    'Chi phí sở hữu hằng năm gồm: **lãi vay + chi phí cơ hội của vốn tự có + bảo trì/thuế phí**. Tiền gốc trả ngân hàng không phải chi phí mà là tiết kiệm bị khóa trong tài sản.',
    'Ví dụ giả định: nhà 3 tỷ, trả trước 900 triệu, vay 2,1 tỷ lãi 9%/năm: lãi năm đầu khoảng **189 triệu**; vốn 900 triệu nếu gửi/đầu tư kiếm 6% thì chi phí cơ hội **54 triệu**; bảo trì 1% giá nhà là **30 triệu**; tổng khoảng **273 triệu/năm**.',
    'Cùng căn nhà thuê 12 triệu/tháng (**144 triệu/năm**, tương đương 4,8% giá nhà). Chênh lệch khoảng **129 triệu/năm** cần được bù bằng giá nhà tăng: 129 / 3.000 = **4,3%/năm** để hòa vốn (chưa tính phí giao dịch).',
    'Tỷ suất cho thuê (tiền thuê / giá nhà) thấp hơn lãi vay thường nghĩa là mua đắt hơn thuê về dòng tiền, và phần còn lại dựa vào kỳ vọng giá tăng.',
    'Mua còn có giá trị phi tài chính: ổn định chỗ ở, tự do cải tạo; thuê có tính linh hoạt (đổi việc, đổi nơi ở) và ít rủi ro tập trung vào một tài sản.',
  ],
  causalChain: [
    { from: 'Lãi vay tăng', to: 'Chi phí sở hữu hằng năm tăng', mechanism: 'Phần lãi chiếm tỷ trọng lớn nhất của chi phí; với cùng nhà, chênh lệch so với tiền thuê nới rộng.' },
    { from: 'Chi phí sở hữu cao hơn tiền thuê', to: 'Điểm hòa vốn đòi hỏi giá nhà tăng nhanh hơn', mechanism: 'Phần chênh phải được bù bằng lãi vốn; tốc độ tăng giá hòa vốn = chênh lệch hằng năm / giá nhà.' },
    { from: 'Vốn trả trước bị khóa trong nhà', to: 'Mất cơ hội sinh lời của vốn đó', mechanism: 'Chi phí cơ hội bằng lợi suất có thể kiếm được từ khoản vốn đó nếu không mua nhà (gửi tiết kiệm, đầu tư khác).' },
    { from: 'Trả gốc hằng tháng', to: 'Tích lũy vốn chủ sở hữu', mechanism: 'Gốc trả làm giảm dư nợ, tăng phần sở hữu; nếu thuê, cần chủ động đầu tư khoản chênh lệch tiết kiệm để có hiệu quả tương đương.' },
  ],
  vietnamImpact: [
    { group: 'Người trẻ mới đi làm ở đô thị lớn', effect: 'Tỷ suất cho thuê thấp so với lãi vay thường làm thuê hiệu quả hơn về dòng tiền ở giai đoạn đầu; cần so sánh bằng số liệu riêng.', direction: 'mixed' },
    { group: 'Hộ cần ổn định chỗ ở lâu dài', effect: 'Mua có lợi thế an cư, nhưng cần đảm bảo khoản trả nợ không vượt khả năng khi lãi suất thả nổi tăng.', direction: 'mixed' },
    { group: 'Người vay mua nhà', effect: 'Lãi suất ưu đãi ban đầu rồi thả nổi làm chi phí năm sau cao hơn năm đầu; cần thử kịch bản lãi tăng.', direction: 'down' },
    { group: 'Chủ nhà cho thuê', effect: 'Tỷ suất thuê thấp so với lãi vay khiến lợi nhuận phụ thuộc giá tăng; cần tính trống phòng và chi phí bảo trì.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ suất cho thuê (tiền thuê năm / giá nhà)', why: 'So với lãi vay và lãi tiền gửi để thấy mua hay thuê rẻ hơn về dòng tiền.', where: 'Tự tính từ giá thuê, giá bán khu vực mình quan tâm' },
    { name: 'Lãi suất cho vay mua nhà (ưu đãi và thả nổi)', why: 'Chi phí lớn nhất của việc mua bằng vốn vay.', where: 'Niêm yết của các ngân hàng, Ngân hàng Nhà nước (sbv.gov.vn)' },
    { name: 'Lãi suất tiền gửi và lợi suất đầu tư thay thế', why: 'Cơ sở tính chi phí cơ hội của vốn trả trước.', where: 'Niêm yết ngân hàng, Ngân hàng Nhà nước' },
    { name: 'Tốc độ tăng giá nhà khu vực và tăng thu nhập', why: 'Ước lượng khả năng đạt ngưỡng hòa vốn tăng giá; dữ liệu chỉ mang tính tham khảo.', where: 'Cục Thống kê (nso.gov.vn), báo cáo thị trường BĐS' },
  ],
  counterpoints: [
    'Ví dụ trên bỏ qua phí giao dịch, thuế, thời gian ở và việc tiền thuê có thể tăng hằng năm; điều chỉnh các giả định này có thể đảo kết luận.',
    'Giá nhà không tăng đều: mua đúng đỉnh chu kỳ có thể chịu lỗ vốn nhiều năm, còn thuê không chịu rủi ro này.',
    'Kỷ luật tài chính quan trọng: nếu khoản chênh lệch nhờ thuê không thực sự được đầu tư hay tiết kiệm, lợi thế của thuê biến mất; mua tạo ra tiết kiệm bắt buộc qua trả gốc.',
  ],
  glossary: [
    { term: 'Chi phí cơ hội', definition: 'Giá trị của phương án tốt nhất bị bỏ qua khi chọn một phương án khác.' },
    { term: 'Tỷ suất cho thuê', definition: 'Tiền thuê một năm chia cho giá trị tài sản.' },
    { term: 'Điểm hòa vốn', definition: 'Mức giá nhà tăng hằng năm để chi phí mua ngang với chi phí thuê.' },
    { term: 'Vốn chủ sở hữu trong nhà', definition: 'Giá trị nhà trừ dư nợ vay còn lại.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'rent-vs-buy-decision-q',
    question: 'Trong ví dụ trên, nếu lãi vay thả nổi tăng từ 9% lên 11% trong khi tiền thuê giữ nguyên, điều gì xảy ra với điểm hòa vốn?',
    options: [
      { id: 'a', text: 'Giá nhà cần tăng nhanh hơn mỗi năm mới hòa vốn với thuê.', correct: true, explain: 'Đúng. Lãi cao hơn làm chi phí sở hữu tăng, chênh lệch với tiền thuê lớn hơn nên cần mức tăng giá cao hơn để bù.' },
      { id: 'b', text: 'Điểm hòa vốn thấp xuống vì nhà trở nên rẻ hơn.', explain: 'Lãi tăng không làm giá nhà giảm ngay; nó làm chi phí sở hữu tăng.' },
      { id: 'c', text: 'Không đổi vì tiền gốc không phải chi phí.', explain: 'Gốc không phải chi phí, nhưng lãi là chi phí và đã tăng.' },
    ],
  },
  sources: [
    { title: 'Opportunity cost', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Opportunity_cost' },
    { title: 'Loan-to-value ratio', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Loan-to-value_ratio' },
    { title: 'Housing affordability', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Housing_affordability' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 29,
}
