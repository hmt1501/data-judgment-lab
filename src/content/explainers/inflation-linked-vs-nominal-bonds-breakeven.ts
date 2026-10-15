import type { Explainer } from '../../../shared/explainer'

export const inflationLinkedVsNominalBondsBreakeven: Explainer = {
  id: 'inflation-linked-vs-nominal-bonds-breakeven',
  slug: 'inflation-linked-vs-nominal-bonds-breakeven',
  question: 'Trái phiếu gắn lạm phát khác trái phiếu thường thế nào, và "lạm phát hòa vốn" nói lên điều gì?',
  title: 'Trái phiếu gắn lạm phát và lạm phát hòa vốn (breakeven)',
  topic: 'markets-investing',
  tldr: 'Trái phiếu gắn lạm phát điều chỉnh gốc (và thường cả lãi) theo chỉ số giá, nên trả **lợi suất thực** cố định cộng với lạm phát. Hiệu số giữa lợi suất trái phiếu thường và lợi suất thực của trái phiếu gắn lạm phát cùng kỳ hạn gọi là **lạm phát hòa vốn**, thường được dùng như thước đo kỳ vọng lạm phát của thị trường – nhưng nó còn chứa phần bù rủi ro lạm phát và phần bù thanh khoản nên chỉ là ước lượng nhiễu.',
  keyPoints: [
    'Theo Wikipedia: trái phiếu gắn chỉ số (như TIPS của Mỹ, gilt gắn chỉ số của Anh) có dòng tiền bám theo một chỉ số giá; gốc được nhân với "hệ số chỉ số"; TIPS dùng CPI-U không điều chỉnh mùa vụ với độ trễ ba tháng và đa số có sàn giá trị gốc ở mệnh giá.',
    'Lạm phát hòa vốn = lợi suất trái phiếu thường − lợi suất thực của trái phiếu gắn lạm phát cùng kỳ hạn. Ví dụ giả định: lợi suất danh nghĩa 10 năm 4,0%, lợi suất thực 1,5% → hòa vốn 2,5%. Nếu lạm phát thực tế bình quân cao hơn 2,5%, trái phiếu gắn lạm phát có lợi hơn; thấp hơn thì ngược lại.',
    'Fed (FEDS 2010-19) mô tả hòa vốn là thước đo "tiềm năng hữu ích theo thời gian thực" cho kỳ vọng lạm phát, nhưng từng tồn tại phần bù thanh khoản TIPS khoảng 1% theo ước lượng của nghiên cứu đó (đã giảm trong những năm sau) và bỏ qua phần bù này làm kết luận về kỳ vọng sai lệch.',
    'Hai méo mó đẩy ngược chiều: phần bù rủi ro lạm phát làm hòa vốn cao hơn kỳ vọng thật, còn phần bù thanh khoản khiến lợi suất TIPS cao hơn và hòa vốn thấp hơn.',
    'Rủi ro riêng: lạm phát của bạn có thể khác chỉ số của trái phiếu (rủi ro cơ sở), thanh khoản thấp hơn trái phiếu thường, độ trễ chỉ số, và với người nộp thuế Mỹ, phần tăng gốc có thể bị tính thuế dù chưa nhận tiền (theo Wikipedia).',
  ],
  causalChain: [
    { from: 'Chỉ số giá tăng', to: 'Gốc và lãi của trái phiếu gắn lạm phát tăng theo', mechanism: 'Hệ số chỉ số nhân với mệnh giá, nên người nắm giữ được bảo vệ phần mất giá tiền tệ (theo chỉ số tham chiếu).' },
    { from: 'Thị trường kỳ vọng lạm phát cao hơn', to: 'Lạm phát hòa vốn tăng', mechanism: 'Nhà đầu tư trả giá cao hơn cho trái phiếu gắn lạm phát (lợi suất thực giảm) hoặc đòi lợi suất danh nghĩa cao hơn cho trái phiếu thường.' },
    { from: 'Nhà đầu tư lo bất định lạm phát', to: 'Phần bù rủi ro lạm phát đẩy hòa vốn lên', mechanism: 'Người giữ trái phiếu thường đòi bù cho rủi ro lạm phát biến động, làm hòa vốn lớn hơn kỳ vọng thuần túy.' },
    { from: 'Trái phiếu gắn lạm phát ít thanh khoản', to: 'Lợi suất thực cao hơn, hòa vốn thấp hơn', mechanism: 'Nhà đầu tư đòi phần bù vì khó mua bán, khiến hòa vốn đánh giá thấp kỳ vọng.' },
  ],
  vietnamImpact: [
    { group: 'Người tiết kiệm dài hạn tại Việt Nam', effect: 'Hiểu hòa vốn giúp so sánh lợi suất danh nghĩa của trái phiếu thường với lạm phát kỳ vọng và lợi suất thực; bài này không khảo sát thị trường trái phiếu gắn lạm phát trong nước nên khái niệm chủ yếu dùng để đọc thị trường quốc tế.', direction: 'mixed' },
    { group: 'Nhà đầu tư quốc tế vào tài sản toàn cầu', effect: 'Dùng hòa vốn của Mỹ, Anh làm tín hiệu cho kỳ vọng lạm phát toàn cầu và lãi suất thực.', direction: 'mixed' },
    { group: 'Ngân hàng trung ương và nhà phân tích', effect: 'Theo dõi hòa vốn để đánh giá kỳ vọng lạm phát có còn neo hay không.', direction: 'up' },
  ],
  indicators: [
    { name: 'Lợi suất thực TIPS và lạm phát hòa vốn 5, 10 năm', why: 'Tín hiệu thị trường về kỳ vọng lạm phát và lãi suất thực.', where: 'Bộ Tài chính Mỹ, FRED của Fed St. Louis' },
    { name: 'Khảo sát kỳ vọng lạm phát', why: 'Đối chiếu với hòa vốn để thấy phần bù.', where: 'Khảo sát của các ngân hàng trung ương' },
    { name: 'CPI so với cùng kỳ', why: 'Lạm phát thực tế quyết định ai lời hơn khi nắm giữ đến đáo hạn.', where: 'Cục Thống kê, cơ quan thống kê nước phát hành' },
    { name: 'Chênh lệch mua – bán và khối lượng giao dịch', why: 'Đo thanh khoản, ảnh hưởng độ méo của hòa vốn.', where: 'Nền tảng dữ liệu thị trường trái phiếu' },
  ],
  counterpoints: [
    'Hòa vốn không phải "kỳ vọng lạm phát thuần túy": nó chứa phần bù rủi ro lạm phát và phần bù thanh khoản có thể thay đổi theo thời gian, nhất là lúc thị trường căng thẳng.',
    'Chỉ số tham chiếu (CPI tổng hợp) có thể khác lạm phát bạn thực sự gặp; bảo vệ chỉ trọn vẹn trong phạm vi chỉ số.',
    'Trái phiếu gắn lạm phát vẫn chịu rủi ro lãi suất thực: khi lợi suất thực tăng, giá có thể giảm dù lạm phát cao.',
  ],
  glossary: [
    { term: 'Trái phiếu gắn lạm phát (TIPS)', definition: 'Trái phiếu mà gốc (và lãi) được điều chỉnh theo chỉ số giá tiêu dùng.' },
    { term: 'Lợi suất thực', definition: 'Lợi suất sau khi loại bỏ lạm phát.' },
    { term: 'Lạm phát hòa vốn', definition: 'Hiệu số giữa lợi suất trái phiếu thường và lợi suất thực cùng kỳ hạn.' },
    { term: 'Phần bù rủi ro lạm phát', definition: 'Khoản bù cho rủi ro lạm phát biến động ngoài kỳ vọng.' },
    { term: 'Sàn giá trị gốc', definition: 'Điều khoản bảo đảm gốc không thấp hơn mệnh giá khi xảy ra giảm phát.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'inflation-linked-vs-nominal-bonds-breakeven-q',
    question: 'Ví dụ giả định: trái phiếu thường 10 năm lợi suất 4,0%, trái phiếu gắn lạm phát cùng kỳ hạn lợi suất thực 1,5%. Lạm phát bình quân thực tế 10 năm là 3,2%. Nhận định nào đúng?',
    options: [
      { id: 'a', text: 'Hòa vốn là 2,5% nên trái phiếu gắn lạm phát có kết quả tốt hơn trái phiếu thường.', correct: true, explain: 'Đúng. Hòa vốn 4,0 − 1,5 = 2,5%; lạm phát thực tế 3,2% cao hơn nên trái phiếu gắn lạm phát có tổng lợi suất cao hơn (khoảng 1,5% + 3,2% so với 4,0%).' },
      { id: 'b', text: 'Hòa vốn là 5,5% nên trái phiếu thường tốt hơn.', explain: 'Sai: hòa vốn là hiệu số chứ không phải tổng.' },
      { id: 'c', text: 'Không so sánh được vì hòa vốn luôn bằng đúng kỳ vọng lạm phát.', explain: 'Sai. Hòa vốn còn chứa phần bù rủi ro lạm phát và thanh khoản, nhưng vẫn dùng so sánh trong ví dụ này.' },
    ],
  },
  sources: [
    { title: 'Inflation-indexed bond', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Inflation-indexed_bond' },
    { title: 'FEDS Working Paper 2010-19 về lạm phát hòa vốn, phần bù thanh khoản TIPS (trang tóm tắt)', publisher: 'Federal Reserve Board', url: 'https://www.federalreserve.gov/pubs/feds/2010/201019/index.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 172,
}
