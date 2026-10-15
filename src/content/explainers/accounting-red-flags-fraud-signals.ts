import type { Explainer } from '../../../shared/explainer'

export const accountingRedFlagsFraudSignals: Explainer = {
  id: 'accounting-red-flags-fraud-signals',
  slug: 'accounting-red-flags-fraud-signals',
  question: 'Những dấu hiệu nào cảnh báo báo cáo tài chính "đẹp quá" và cần kiểm tra kỹ?',
  title: 'Báo cáo "đẹp quá" thường lộ ở chỗ lợi nhuận và tiền không khớp nhau',
  topic: 'markets-investing',
  tldr: 'Dấu hiệu cảnh báo (red flag) **không chứng minh gian lận**, chỉ cho biết nơi cần xem kỹ hơn. Các dấu hiệu kinh điển: lợi nhuận tăng nhưng dòng tiền hoạt động không tăng, khoản phải thu phình hơn doanh thu, biên lợi nhuận bất thường so với ngành, khấu hao chậm lại, chi phí bị vốn hóa, giao dịch bên liên quan lớn, kiểm toán viên đổi liên tục. Mô hình **Beneish M-score** gom các tỷ số này thành một điểm xác suất, nhưng chỉ là công cụ sàng lọc.',
  keyPoints: [
    'Mô hình **Beneish M-score** dùng 8 tỷ số tính từ báo cáo tài chính: DSRI (phải thu/doanh thu), GMI (biên lợi nhuận gộp), AQI (chất lượng tài sản), SGI (tăng trưởng doanh thu), DEPI (tỷ lệ khấu hao), SGAI (chi phí bán hàng, quản lý), LVGI (đòn bẩy) và TATA (dồn tích trên tổng tài sản). Điểm trên −1,78 được coi là có khả năng cao hơn thao túng (theo mô tả trên Wikipedia).',
    '**Dồn tích lớn** (TATA) nghĩa là lợi nhuận chủ yếu đến từ ghi nhận kế toán hơn là tiền thực thu: chênh lệch giữa lợi nhuận và dòng tiền hoạt động. Theo IAS 7, báo cáo lưu chuyển tiền tệ cho thấy rõ phần điều chỉnh từ lợi nhuận sang dòng tiền, nên đây là điểm đầu tiên để kiểm tra.',
    '**Quản trị lợi nhuận (earnings management)** là việc ban quản lý dùng lựa chọn kế toán hoặc giao dịch để làm kết quả báo cáo đẹp hơn; nó nằm trên một phổ từ hợp pháp (chọn thời điểm, ước tính) đến gian lận.',
    'Dấu hiệu theo nhóm: **doanh thu** (phải thu tăng nhanh hơn doanh thu, doanh thu cuối kỳ dồn, bán cho bên liên quan), **chi phí** (vốn hóa chi phí, khấu hao chậm lại, dự phòng thấp bất thường), **bảng cân đối** (tài sản vô hình, lợi thế thương mại, "khác" phình to), **quản trị** (kiểm toán đổi liên tục, ý kiến ngoại trừ, giám đốc tài chính nghỉ đột ngột).',
    'Mô hình M-score là xác suất và loại trừ các tổ chức tài chính khỏi mẫu gốc (theo Wikipedia); không dùng cho ngân hàng, bảo hiểm, chứng khoán mà không điều chỉnh.',
  ],
  causalChain: [
    { from: 'Áp lực đạt kế hoạch, chỉ tiêu vay hoặc thưởng', to: 'Động cơ làm đẹp báo cáo', mechanism: 'Ban quản lý chịu áp lực duy trì tăng trưởng, giữ giá cổ phiếu, thỏa điều khoản vay.' },
    { from: 'Dùng ước tính và lựa chọn kế toán có lợi', to: 'Lợi nhuận tăng nhưng tiền không tăng', mechanism: 'Ghi nhận doanh thu sớm, vốn hóa chi phí, giảm khấu hao hoặc dự phòng tăng lợi nhuận nhưng không tạo ra tiền.' },
    { from: 'Chênh lệch giữa lợi nhuận và dòng tiền kéo dài', to: 'Phải thu, tài sản "khác" hoặc tồn kho phình ra', mechanism: 'Phần lợi nhuận "không có tiền" phải nằm ở đâu đó trên bảng cân đối, thường là phải thu, tài sản trả trước hoặc tài sản khác.' },
    { from: 'Sự thật lộ ra (khách không trả, kiểm toán điều chỉnh, thay đổi chính sách)', to: 'Điều chỉnh giảm lợi nhuận, giá cổ phiếu giảm mạnh', mechanism: 'Niềm tin mất đi, chi phí vốn tăng, có thể kéo theo kiểm tra từ cơ quan quản lý.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân', effect: 'Dễ chịu thiệt hại khi cổ phiếu mất giá sau điều chỉnh báo cáo; học nhận biết dấu hiệu giúp chọn lọc doanh nghiệp.', direction: 'down' },
    { group: 'Doanh nghiệp minh bạch', effect: 'Công bố đầy đủ, nhất quán, dòng tiền khớp lợi nhuận tạo niềm tin và có thể được định giá cao hơn.', direction: 'up' },
    { group: 'Ngân hàng và trái chủ', effect: 'Phải thẩm định dòng tiền thực thay vì chỉ lợi nhuận khi cho vay hoặc mua trái phiếu doanh nghiệp.', direction: 'mixed' },
    { group: 'Cơ quan quản lý, kiểm toán', effect: 'Siết công bố thông tin, chất lượng kiểm toán và xử lý vi phạm giúp giảm rủi ro hệ thống.', direction: 'up' },
  ],
  indicators: [
    { name: 'Lợi nhuận sau thuế so với dòng tiền hoạt động nhiều kỳ', why: 'Khoảng cách kéo dài là dấu hiệu dồn tích lớn.', where: 'Báo cáo lưu chuyển tiền tệ và kết quả kinh doanh' },
    { name: 'Phải thu / doanh thu và tăng trưởng của từng mục', why: 'Phải thu tăng nhanh hơn doanh thu là dấu hiệu kinh điển.', where: 'Bảng cân đối và báo cáo kết quả kinh doanh' },
    { name: 'Giao dịch với bên liên quan trong thuyết minh', why: 'Nơi thường ẩn giao dịch không vì lợi ích cổ đông.', where: 'Thuyết minh báo cáo tài chính' },
    { name: 'Ý kiến kiểm toán, thay đổi kiểm toán viên, giải trình biến động lợi nhuận', why: 'Tín hiệu quản trị và chất lượng báo cáo.', where: 'Báo cáo kiểm toán; công bố thông tin của doanh nghiệp niêm yết' },
  ],
  counterpoints: [
    'Mỗi dấu hiệu đều có lý giải hợp lý (mở rộng bán chịu để chiếm thị phần, thay đổi chính sách khấu hao đúng kỹ thuật); cần xem bối cảnh và giải trình.',
    'M-score được xây dựng từ dữ liệu doanh nghiệp ở thị trường khác và không được hiệu chỉnh cho Việt Nam; áp vào Việt Nam hay ngành đặc thù cần thận trọng, dễ ra kết quả sai ở cả hai chiều.',
    'Bài này không dùng để buộc tội doanh nghiệp cụ thể; chỉ là khung đặt câu hỏi và kiểm tra thêm.',
  ],
  glossary: [
    { term: 'Red flag', definition: 'Dấu hiệu cảnh báo cần điều tra thêm, chưa phải bằng chứng.' },
    { term: 'Quản trị lợi nhuận', definition: 'Việc ban quản lý tác động lên số liệu báo cáo thông qua lựa chọn kế toán hoặc thời điểm giao dịch.' },
    { term: 'Dồn tích', definition: 'Phần lợi nhuận ghi nhận kế toán nhưng chưa phải tiền, tức chênh lệch giữa lợi nhuận và dòng tiền hoạt động.' },
    { term: 'M-score', definition: 'Điểm do Beneish đề xuất, đánh giá xác suất báo cáo bị thao túng.' },
    { term: 'Bên liên quan', definition: 'Cá nhân hoặc tổ chức có quan hệ kiểm soát, ảnh hưởng đáng kể với doanh nghiệp.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'accounting-red-flags-fraud-signals-q',
    question: 'Doanh thu tăng 30%, lợi nhuận tăng 40%, nhưng phải thu tăng 120% và dòng tiền hoạt động âm. Nên làm gì?',
    options: [
      { id: 'a', text: 'Kết luận ngay công ty gian lận.', explain: 'Red flag không phải bằng chứng; có thể do chính sách bán chịu để mở rộng.' },
      { id: 'b', text: 'Coi đây là cảnh báo, tìm hiểu cơ cấu khách hàng nợ, bên liên quan, chính sách ghi nhận doanh thu và ý kiến kiểm toán.', correct: true, explain: 'Đúng. Đây là tập hợp dấu hiệu cần kiểm tra sâu hơn trước khi đầu tư.' },
      { id: 'c', text: 'Bỏ qua vì lợi nhuận đang tăng.', explain: 'Lợi nhuận tăng mà tiền không về là điểm yếu cần điều tra.' },
    ],
  },
  sources: [
    { title: 'Beneish M-score', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Beneish_M-score' },
    { title: 'Earnings management', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Earnings_management' },
    { title: 'IAS 7 Statement of Cash Flows', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 75,
}
