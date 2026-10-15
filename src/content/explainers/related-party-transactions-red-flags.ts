import type { Explainer } from '../../../shared/explainer'

export const relatedPartyTransactionsRedFlags: Explainer = {
  id: 'related-party-transactions-red-flags',
  slug: 'related-party-transactions-red-flags',
  question: 'Giao dịch với bên liên quan là gì và dấu hiệu nào đáng lo?',
  title: 'Giao dịch với bên liên quan: khi nào là bình thường, khi nào là cờ đỏ',
  topic: 'markets-investing',
  tldr: 'Giao dịch với bên liên quan là giao dịch giữa các bên **đã có quan hệ từ trước** (công ty mẹ, công ty con, cổ đông lớn, ban lãnh đạo và người thân). Chúng không tự nó sai, nhưng có thể làm giá bị lệch khỏi giá thị trường và chuyển giá trị từ cổ đông thiểu số sang bên kiểm soát. Vì vậy chuẩn mực yêu cầu **công bố**: bản chất quan hệ, giao dịch, số dư; nhà đầu tư đọc kỹ phần này để thấy ai đang hưởng lợi.',
  keyPoints: [
    'Theo IAS 24, báo cáo tài chính phải có thông tin để người dùng biết tình hình tài chính và kết quả có thể bị ảnh hưởng bởi bên liên quan; gồm **bản chất quan hệ, giao dịch, số dư (kể cả cam kết)** và tổng thù lao của nhân sự quản lý chủ chốt.',
    'Bên liên quan gồm công ty mẹ, công ty con, công ty cùng tập đoàn, công ty liên kết, liên doanh, người có quyền kiểm soát hoặc ảnh hưởng đáng kể, nhân sự quản lý chủ chốt và người thân trong gia đình họ.',
    'Giao dịch với bên liên quan là việc chuyển giao nguồn lực, dịch vụ hoặc nghĩa vụ, **dù có tính giá hay không** (theo định nghĩa trong văn bản IAS 24; trang tóm tắt của IFRS Foundation không nêu câu này).',
    'Rủi ro chính là xung đột giữa bên kiểm soát và cổ đông không kiểm soát: giao dịch có thể không vì lợi ích tốt nhất của cổ đông thiểu số, ví dụ cổ đông chi phối cho công ty của mình giao dịch với giá ưu đãi (theo Wikipedia).',
    'Dấu hiệu cần xem: giao dịch lớn so với doanh thu hoặc tài sản, **giá không rõ so sánh được với thị trường**, cho vay/ứng trước kéo dài, công bố mập mờ hoặc thay đổi nhiều.',
  ],
  causalChain: [
    { from: 'Cổ đông kiểm soát hoặc ban lãnh đạo có lợi ích ở công ty khác', to: 'Có động cơ chuyển giá trị sang bên có lợi ích của họ', mechanism: 'Bán tài sản/dịch vụ với giá thấp cho bên liên quan hoặc mua với giá cao khiến lợi nhuận chuyển khỏi công ty niêm yết.' },
    { from: 'Giao dịch không công bố đầy đủ hoặc khó so sánh với giá thị trường', to: 'Khó xác định giá có hợp lý hay không', mechanism: 'Thiếu giá đối chiếu độc lập nên cổ đông thiểu số khó đánh giá lợi ích thực.' },
    { from: 'Cho vay, ứng trước, bảo lãnh cho bên liên quan', to: 'Rủi ro mất vốn và dòng tiền bị chiếm dụng', mechanism: 'Số dư phải thu bên liên quan tăng, thu hồi chậm; ảnh hưởng thanh khoản của công ty.' },
    { from: 'Chuẩn mực yêu cầu công bố, quy định quản trị yêu cầu phê duyệt', to: 'Tăng minh bạch và khả năng giám sát', mechanism: 'Công bố bản chất quan hệ, giao dịch và số dư cho phép nhà đầu tư đánh giá; một số nơi yêu cầu cả sự chấp thuận của cổ đông (Wikipedia nêu ví dụ ở Úc).' },
  ],
  vietnamImpact: [
    { group: 'Cổ đông thiểu số', effect: 'Dễ bị thiệt nếu giao dịch với bên liên quan không công bằng; cần đọc thuyết minh "giao dịch và số dư với các bên liên quan".', direction: 'down' },
    { group: 'Doanh nghiệp thuộc tập đoàn', effect: 'Giao dịch nội bộ giữa thành viên là tự nhiên (cung cấp dịch vụ, chia sẻ chi phí) nhưng cần minh bạch giá.', direction: 'mixed' },
    { group: 'Ngân hàng và bên cho vay', effect: 'Đánh giá phần dư nợ liên quan nhóm cổ đông và người liên quan là một khía cạnh rủi ro tín dụng.', direction: 'down' },
    { group: 'Nhà đầu tư trái phiếu', effect: 'Dòng tiền huy động có thể chuyển sang công ty liên quan; cần xem mục đích sử dụng vốn và giao dịch liên quan.', direction: 'down' },
  ],
  indicators: [
    { name: 'Thuyết minh giao dịch và số dư với bên liên quan', why: 'Nguồn trực tiếp về quan hệ, giá trị và số dư.', where: 'Thuyết minh báo cáo tài chính của công ty niêm yết' },
    { name: 'Phải thu/cho vay bên liên quan so với tổng tài sản', why: 'Tỷ trọng cao và kéo dài là tín hiệu rủi ro.', where: 'Bảng cân đối kế toán và thuyết minh' },
    { name: 'Doanh thu/chi phí từ bên liên quan so với tổng', why: 'Phụ thuộc cao vào giao dịch nội bộ làm giảm độ tin cậy của lợi nhuận.', where: 'Thuyết minh bên liên quan' },
    { name: 'Thù lao nhân sự quản lý chủ chốt', why: 'Phải công bố tổng số và theo nhóm theo chuẩn mực.', where: 'Thuyết minh báo cáo tài chính; báo cáo thường niên' },
  ],
  counterpoints: [
    'Giao dịch nội bộ có thể hợp lý và hiệu quả (mua nguyên liệu từ công ty cùng nhóm với giá thị trường); không nên coi mọi giao dịch liên quan là gian lận.',
    'Công bố đầy đủ không bảo đảm giao dịch công bằng; chuẩn mực yêu cầu công bố chứ không cấm.',
    'Phạm vi "bên liên quan" theo quy định địa phương có thể khác IAS 24; cần xem định nghĩa trong chuẩn mực doanh nghiệp áp dụng.',
  ],
  glossary: [
    { term: 'Bên liên quan', definition: 'Cá nhân/tổ chức có quan hệ kiểm soát, đồng kiểm soát hoặc ảnh hưởng đáng kể với doanh nghiệp.' },
    { term: 'Nhân sự quản lý chủ chốt', definition: 'Người có thẩm quyền và trách nhiệm lập kế hoạch, điều hành, kiểm soát hoạt động doanh nghiệp.' },
    { term: 'Cổ đông thiểu số', definition: 'Cổ đông không có quyền kiểm soát công ty.' },
    { term: 'Giá thị trường độc lập', definition: 'Giá giữa các bên không có quan hệ, dùng làm chuẩn so sánh.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'related-party-transactions-red-flags-q',
    question: 'Một công ty niêm yết bán tài sản lớn cho công ty của chủ tịch với giá thấp hơn nhiều so với giá thị trường tham chiếu, và công bố chỉ vài dòng. Điều nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Đây là rủi ro chuyển giá trị khỏi cổ đông thiểu số; cần yêu cầu giải trình giá và đối chiếu bên độc lập.', correct: true, explain: 'Đúng. Giao dịch với bên liên quan ở giá không công bằng làm lợi cho bên kiểm soát, bất lợi cho cổ đông thiểu số; công bố thiếu chi tiết làm vấn đề nặng thêm.' },
      { id: 'b', text: 'Hoàn toàn bình thường vì công bố rồi.', explain: 'Công bố là điều kiện cần, không bảo đảm giá công bằng.' },
      { id: 'c', text: 'Chắc chắn là gian lận cần báo công an.', explain: 'Cần thêm bằng chứng và kết luận của cơ quan có thẩm quyền; chưa đủ để kết luận.' },
    ],
  },
  sources: [
    { title: 'IAS 24 Related Party Disclosures', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-24-related-party-disclosures/' },
    { title: 'Related-party transaction', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Related-party_transaction' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 151,
}
