import type { Explainer } from '../../../shared/explainer'

export const structuredProductsEtnRisks: Explainer = {
  id: 'structured-products-etn-risks',
  slug: 'structured-products-etn-risks',
  question: 'Sản phẩm cấu trúc và ETN có những rủi ro gì, đặc biệt là rủi ro đối tác?',
  title: 'Sản phẩm cấu trúc và ETN: rủi ro đối tác ẩn sau cái tên',
  topic: 'markets-investing',
  tldr: 'Sản phẩm cấu trúc và ETN (exchange-traded note) trông giống quỹ hoặc gói bảo vệ vốn, nhưng thực chất là **nợ không có tài sản bảo đảm của tổ chức phát hành**. Lợi nhuận bám theo một chỉ số hay công thức, nhưng nếu tổ chức phát hành mất khả năng thanh toán, bạn có thể mất tiền dù chỉ số tăng. Thêm vào đó là phí ẩn, thanh khoản hạn chế và công thức khó so sánh.',
  keyPoints: [
    'Theo Wikipedia, ETN là chứng khoán nợ "cao cấp, không bảo đảm, không thứ cấp" của ngân hàng hoặc đơn vị mục đích đặc biệt; khác ETF – nơi quỹ nắm tài sản – ETN chịu thêm rủi ro vỡ nợ của người phát hành ngoài rủi ro thị trường.',
    'Cảnh báo nhà đầu tư của FINRA (10/07/2012, theo bản tóm tắt của Jones Day): ETN là nghĩa vụ nợ không bảo đảm; có bảy nhóm rủi ro gồm tín dụng, thị trường, thanh khoản, bám sát chỉ số, thời gian nắm giữ, quyền gọi/chuộc sớm/gia tốc và xung đột lợi ích.',
    'Cùng cảnh báo: giá thị trường của ETN có thể lệch mạnh so với giá trị chỉ báo; ví dụ nêu trong cảnh báo là sau khi người phát hành ngừng tạo thêm, một ETN giao dịch với mức chênh gần 90% (bản tóm tắt của Jones Day cho rằng đó là TVIX nhưng cảnh báo FINRA không nêu tên) và giảm hơn một nửa trong hai ngày khi việc tạo thêm được nối lại.',
    'Theo Wikipedia (Structured product), sản phẩm cấu trúc thường kết hợp trái phiếu và quyền chọn/hoán đổi; một số sản phẩm có "bảo vệ vốn" nếu giữ đến đáo hạn, nhưng khoản bảo vệ có thể chỉ do chính người phát hành bảo đảm nên vẫn có thể mất vốn khi người phát hành phá sản hoặc khủng hoảng thanh khoản.',
    'Theo Wikipedia, phí ngân hàng thường nằm ẩn trong cách định giá nên khó nhìn thấy; sản phẩm chủ yếu giao dịch ngoài sàn và người phát hành không bắt buộc đặt giá mua (theo Wikipedia) nên thanh khoản kém, và công thức lợi nhuận phức tạp khiến khó so với việc nắm giữ trực tiếp tài sản.',
  ],
  causalChain: [
    { from: 'Người phát hành bán sản phẩm hứa lợi nhuận theo chỉ số hoặc công thức', to: 'Nhà đầu tư trở thành chủ nợ không bảo đảm', mechanism: 'Tiền của bạn không nằm trong quỹ tách biệt; bạn là chủ nợ của người phát hành, xếp ngang các nợ không bảo đảm khác.' },
    { from: 'Người phát hành bị hạ xếp hạng hoặc mất khả năng thanh toán', to: 'Giá sản phẩm giảm hoặc mất vốn dù chỉ số tăng', mechanism: 'Giá trị phụ thuộc cam kết thanh toán của người phát hành; hạ xếp hạng làm giá giảm trước cả khi vỡ nợ.' },
    { from: 'Thị trường biến động mạnh hoặc người phát hành ngừng phát hành thêm', to: 'Giá thị trường lệch khỏi giá trị chỉ báo', mechanism: 'Cơ chế tạo/chuộc giúp giá bám sát chỉ số; khi cơ chế này bị gián đoạn, chênh lệch có thể rất lớn.' },
    { from: 'Công thức phức tạp và phí ẩn', to: 'Lợi nhuận thực thấp hơn kỳ vọng', mechanism: 'Phí và lợi thế thông tin của người bán làm giá công bằng thấp hơn giá bán, người mua khó kiểm chứng.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân được chào bán sản phẩm "bảo vệ vốn"', effect: 'Cần hỏi rõ ai là người phát hành, có tài sản bảo đảm không, rút trước hạn mất gì; nhãn "bảo đảm vốn" thường có điều kiện.', direction: 'down' },
    { group: 'Nhà đầu tư dùng ETN/sản phẩm nước ngoài', effect: 'Cần hiểu đây là nợ của ngân hàng phát hành, không phải quỹ; rủi ro đối tác và rủi ro rút chênh lệch khi thị trường căng thẳng.', direction: 'down' },
    { group: 'Nhà đầu tư dài hạn thận trọng', effect: 'Quỹ ETF nắm tài sản thật hoặc đầu tư trực tiếp thường minh bạch hơn về rủi ro đối tác.', direction: 'up' },
  ],
  indicators: [
    { name: 'Xếp hạng tín nhiệm của người phát hành', why: 'Quyết định rủi ro đối tác của ETN và sản phẩm cấu trúc.', where: 'Moody\'s, S&P, Fitch; báo cáo của người phát hành' },
    { name: 'Chênh lệch giữa giá thị trường và giá trị chỉ báo (indicative value)', why: 'Chênh lớn là dấu hiệu rủi ro thanh khoản hoặc gián đoạn tạo/chuộc.', where: 'Trang thông tin sản phẩm của người phát hành và sàn giao dịch' },
    { name: 'Phí, điều khoản gọi mua lại sớm và thời hạn', why: 'Quyết định lợi nhuận thực và rủi ro bị chuộc sớm.', where: 'Bản cáo bạch, điều khoản sản phẩm' },
    { name: 'Cảnh báo của cơ quan quản lý', why: 'Cơ quan như FINRA nêu rủi ro thường gặp cho nhà đầu tư cá nhân.', where: 'Trang cảnh báo nhà đầu tư của cơ quan quản lý' },
  ],
  counterpoints: [
    'Không phải sản phẩm cấu trúc nào cũng xấu: với nhu cầu cụ thể (ví dụ phòng hộ có điều kiện) và người phát hành đáng tin, chúng có thể hợp lý; vấn đề là hiểu rõ trước khi mua.',
    'ETN không có sai số bám sát theo cách của ETF vì người phát hành trả lợi suất chỉ số trừ phí (theo Wikipedia) – nhưng đổi lại là rủi ro tín dụng.',
    'Cảnh báo FINRA đã hơn mười năm tuổi; sản phẩm và quy định có thể thay đổi, hãy đọc điều khoản hiện hành.',
  ],
  glossary: [
    { term: 'ETN', definition: 'Chứng khoán nợ của người phát hành hứa trả lợi suất theo một chỉ số trừ phí.' },
    { term: 'Rủi ro đối tác', definition: 'Rủi ro bên đối ứng không thực hiện được nghĩa vụ thanh toán.' },
    { term: 'Giá trị chỉ báo (indicative value)', definition: 'Giá trị ước tính của ETN theo chỉ số tham chiếu, công bố trong ngày.' },
    { term: 'Sản phẩm cấu trúc', definition: 'Gói kết hợp trái phiếu và công cụ phái sinh với công thức lợi nhuận riêng.' },
    { term: 'Bảo vệ vốn', definition: 'Cam kết hoàn gốc khi đáo hạn, thường có điều kiện và phụ thuộc người phát hành.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'structured-products-etn-risks-q',
    question: 'Chỉ số tham chiếu của một ETN tăng 20% trong năm, nhưng ngân hàng phát hành vỡ nợ. Điều gì có thể xảy ra với người nắm giữ ETN?',
    options: [
      { id: 'a', text: 'Vẫn nhận đủ 20% vì ETN bám sát chỉ số.', explain: 'Sai. Giá trị phụ thuộc cam kết thanh toán của người phát hành, không phải quỹ tài sản tách biệt.' },
      { id: 'b', text: 'Có thể thu hồi chỉ một phần hoặc mất vốn như một chủ nợ không bảo đảm.', correct: true, explain: 'Đúng. ETN là nợ không bảo đảm, rủi ro tín dụng của người phát hành cộng thêm rủi ro thị trường.' },
      { id: 'c', text: 'Được ưu tiên trả trước các chủ nợ khác nhờ ETN là chứng khoán niêm yết.', explain: 'Sai. Niêm yết không đổi thứ tự ưu tiên; ETN xếp ngang các nợ không bảo đảm cao cấp khác.' },
    ],
  },
  sources: [
    { title: 'FINRA Issues Investor Alert Regarding Risks of Exchange-Traded Notes (tóm tắt, 07/2012)', publisher: 'Jones Day', url: 'https://www.jonesday.com/en/insights/2012/07/finra-issues-investor-alert-regarding-risks-of-exchange-traded-notes' },
    { title: 'Exchange-traded note', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Exchange-traded_note' },
    { title: 'Structured product', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Structured_product' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 174,
}
