import type { Explainer } from '../../../shared/explainer'

export const insuranceVsInvestmentBundledProducts: Explainer = {
  id: 'insurance-vs-investment-bundled-products',
  slug: 'insurance-vs-investment-bundled-products',
  question: 'Bảo hiểm liên kết đầu tư gồm những gì và đọc hợp đồng thế nào?',
  title: 'Bảo hiểm liên kết đầu tư: hai sản phẩm trong một, cần tách phí bảo hiểm khỏi phần đầu tư',
  topic: 'personal-finance',
  tldr: 'Sản phẩm bảo hiểm liên kết đầu tư gộp **bảo vệ rủi ro** (tử vong, thương tật...) với **tài khoản đầu tư**. Phí bạn nộp bị trừ nhiều khoản (phí ban đầu, phí bảo hiểm rủi ro, phí quản lý) trước khi phần còn lại vào quỹ, nên kết quả đầu tư và quyền lợi bảo hiểm cần được xem tách biệt. Bài này giúp đọc hợp đồng, không khuyến nghị mua hay không mua sản phẩm nào.',
  keyPoints: [
    'Về nguyên lý, mỗi kỳ phí được chia: **phí ban đầu/phí cấp hợp đồng**, **phí bảo hiểm rủi ro** (tăng theo tuổi), **phí quản lý hợp đồng/quỹ**, phần còn lại mua đơn vị quỹ trong tài khoản.',
    'Giá trị tài khoản **không đảm bảo**: phụ thuộc kết quả quỹ; nếu quỹ kém hoặc phí cao, giá trị hoàn lại có thể thấp hơn tổng phí đã đóng, đặc biệt khi hủy sớm.',
    'Hủy hợp đồng trong những năm đầu thường **mất phần lớn tiền** vì phí ban đầu cao; hợp đồng phù hợp với người có kế hoạch đóng phí dài hạn.',
    'Cần đọc: quyền lợi tối thiểu có đảm bảo không, bảng minh họa quyền lợi ở các giả định lợi suất khác nhau, danh mục phí chi tiết, điều khoản loại trừ và thời gian chờ. Nếu mua qua ngân hàng: Thông tư 67/2023/TT-BTC (Thời báo Tài chính VN, 8/11/2023) cấm tổ chức tín dụng chào bán bảo hiểm liên kết đầu tư trong 60 ngày trước và sau ngày giải ngân toàn bộ khoản vay, và yêu cầu ghi âm buổi tư vấn; hiệu lực cần đối chiếu văn bản gốc.',
    'Bảo hiểm thuần (thời hạn) và đầu tư riêng (quỹ, tiết kiệm) có thể rẻ và minh bạch hơn cho từng mục tiêu, nhưng tùy nhu cầu; sản phẩm gộp tạo kỷ luật nhưng phức tạp hơn.',
  ],
  causalChain: [
    { from: 'Khách đóng phí định kỳ', to: 'Phí được phân bổ vào nhiều khoản khấu trừ', mechanism: 'Một phần trả công đại lý, chi phí cấp hợp đồng; một phần trả phí rủi ro; phần còn lại mới đi vào tài khoản đầu tư.' },
    { from: 'Phần còn lại vào quỹ', to: 'Giá trị tài khoản phụ thuộc kết quả quỹ trừ phí quản lý', mechanism: 'Giá trị tăng nếu quỹ sinh lời cao hơn tổng các khoản phí; phí cố định làm giảm lợi suất ròng.' },
    { from: 'Tuổi tăng', to: 'Phí bảo hiểm rủi ro tăng', mechanism: 'Xác suất rủi ro tăng nên phí khấu trừ hằng tháng lớn hơn, bào mòn giá trị tài khoản nếu quỹ kém.' },
    { from: 'Hủy sớm hoặc ngừng đóng phí', to: 'Giá trị hoàn lại thấp, hợp đồng có thể mất hiệu lực', mechanism: 'Phí ban đầu chưa được bù, giá trị tài khoản không đủ trả phí rủi ro dẫn tới chấm dứt.' },
  ],
  vietnamImpact: [
    { group: 'Người mua cần bảo vệ rủi ro và có kỷ luật tiết kiệm dài hạn', effect: 'Có thể phù hợp nếu hiểu rõ phí và cam kết đóng phí nhiều năm.', direction: 'mixed' },
    { group: 'Người cần thanh khoản hoặc kỳ vọng lợi suất cao', effect: 'Hủy sớm tốn kém; lợi suất ròng sau phí có thể thấp hơn kỳ vọng từ bảng minh họa.', direction: 'down' },
    { group: 'Người bán và công ty bảo hiểm', effect: 'Hoa hồng và phí ban đầu cao tạo xung đột lợi ích; yêu cầu tư vấn minh bạch.', direction: 'up' },
    { group: 'Nhà quản lý', effect: 'Bán chéo sản phẩm qua ngân hàng làm tăng nhu cầu giám sát minh bạch thông tin.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Bảng phí chi tiết và tổng phí tích lũy sau 5, 10, 20 năm', why: 'Cho biết phần nào của phí đóng thực sự đi vào đầu tư.', where: 'Hợp đồng và tài liệu minh họa quyền lợi của công ty bảo hiểm' },
    { name: 'Giá trị hoàn lại theo năm', why: 'Biết thiệt hại nếu hủy ở từng năm.', where: 'Bảng giá trị hoàn lại trong hợp đồng' },
    { name: 'Kết quả hoạt động các quỹ liên kết', why: 'So hiệu quả quỹ sau phí với chuẩn so sánh (chỉ số thị trường).', where: 'Báo cáo công bố của công ty bảo hiểm' },
    { name: 'Quy định giám sát bảo hiểm', why: 'Hiểu quyền của người tham gia và nghĩa vụ công bố thông tin.', where: 'Bộ Tài chính (mof.gov.vn); IAIS (iaisweb.org) cho chuẩn quốc tế' },
  ],
  counterpoints: [
    'Với người khó tự tiết kiệm, cam kết đóng phí dài hạn là một kỷ luật có giá trị, dù chi phí cao hơn.',
    'Quyền lợi bảo hiểm có thể có giá trị lớn với người có người phụ thuộc mà không có bảo hiểm khác; so sánh phí thuần với bảo hiểm rủi ro riêng.',
    'Các sản phẩm khác nhau về cấu trúc phí và đảm bảo; kết luận chung không thay thế đọc hợp đồng cụ thể.',
  ],
  glossary: [
    { term: 'Bảo hiểm liên kết đầu tư (unit-linked)', definition: 'Hợp đồng bảo hiểm có phần phí được đầu tư vào quỹ, giá trị phụ thuộc kết quả quỹ.' },
    { term: 'Phí bảo hiểm rủi ro', definition: 'Khoản trừ hằng tháng để trả cho quyền lợi bảo vệ, tăng theo tuổi.' },
    { term: 'Giá trị hoàn lại', definition: 'Số tiền nhận khi hủy hợp đồng, thường thấp ở những năm đầu.' },
    { term: 'Đơn vị quỹ', definition: 'Phần chia nhỏ của quỹ liên kết, giá thay đổi theo kết quả đầu tư.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'insurance-vs-investment-bundled-products-q',
    question: 'Bảng minh họa cho thấy giá trị tài khoản ở mức lợi suất giả định cao rất hấp dẫn. Cách đọc đúng nhất?',
    options: [
      { id: 'a', text: 'Đó là mức lợi suất công ty cam kết.', explain: 'Bảng minh họa chỉ là giả định; giá trị thực phụ thuộc kết quả quỹ.' },
      { id: 'b', text: 'Xem cả kịch bản lợi suất thấp, tổng phí và giá trị hoàn lại từng năm; minh họa không phải cam kết.', correct: true, explain: 'Đúng. Cần so sánh nhiều kịch bản và xem phí để biết kết quả tệ nhất có thể là gì.' },
      { id: 'c', text: 'Phí không quan trọng nếu lợi suất giả định cao.', explain: 'Phí cố định bào mòn lợi suất ròng; nếu lợi suất thực thấp, ảnh hưởng của phí rất lớn.' },
    ],
  },
  sources: [
    { title: 'Unit-linked insurance plan', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Unit-linked_insurance_plan' },
    { title: 'Thêm quy định hỗ trợ bán bảo hiểm qua ngân hàng lành mạnh (8/11/2023)', publisher: 'Thời báo Tài chính Việt Nam', url: 'https://thoibaotaichinhvietnam.vn/them-quy-dinh-ho-tro-ban-bao-hiem-qua-ngan-hang-lanh-manh-139063.html' },
    { title: 'International Association of Insurance Supervisors', publisher: 'IAIS', url: 'https://www.iaisweb.org/' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 37,
}
