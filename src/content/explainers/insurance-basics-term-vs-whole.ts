import type { Explainer } from '../../../shared/explainer'

export const insuranceBasicsTermVsWhole: Explainer = {
  id: 'insurance-basics-term-vs-whole',
  slug: 'insurance-basics-term-vs-whole',
  question: 'Bảo hiểm nhân thọ thuần rủi ro khác bảo hiểm liên kết (trọn đời, liên kết đầu tư) thế nào, chọn loại nào?',
  title: 'Bảo hiểm thuần rủi ro mua “bảo vệ”; sản phẩm kèm tích lũy trộn bảo vệ với đầu tư, nên phải tách phí để so sánh',
  topic: 'personal-finance',
  tldr: 'Bảo hiểm **thuần rủi ro (thời hạn)** chỉ chi trả khi có sự kiện bảo hiểm trong thời hạn hợp đồng, phí thường thấp hơn. Sản phẩm **trọn đời, hỗn hợp hay liên kết** gồm thêm phần tích lũy/đầu tư, phí cao hơn và chi phí khó nhìn. Câu hỏi cần trả lời trước tiên là bạn cần bảo vệ ai, trong bao lâu, và có phải trả phí cho phần đầu tư mà bạn có thể làm riêng không.',
  keyPoints: [
    '**Thời hạn (term):** trả phí để nhận quyền lợi tử vong (và có thể thương tật) nếu sự kiện xảy ra trong thời hạn; hết hạn không còn giá trị hoàn lại (trừ loại có điều khoản riêng).',
    '**Trọn đời (whole life):** bảo vệ suốt đời, có giá trị tích lũy tăng theo thời gian; phí thường cao hơn đáng kể so với thời hạn cho cùng quyền lợi bảo vệ vì gồm cả phần tích lũy.',
    '**Liên kết đầu tư (universal/unit-linked):** phí đóng được tách thành chi phí bảo hiểm, phí quản lý và phần đầu tư vào quỹ; giá trị tài khoản có thể giảm khi thị trường giảm.',
    'Cách đọc đúng: yêu cầu **bảng minh họa quyền lợi** và tách ba khoản: (1) chi phí bảo hiểm thuần, (2) chi phí ban đầu và quản lý, (3) lợi suất đầu tư thực sau phí. Phí năm đầu thường bị trừ nhiều, nên hủy sớm có thể lỗ vốn (Investor.gov của SEC Mỹ mô tả “phí hủy hợp đồng” áp dụng ở những năm đầu với sản phẩm liên kết đầu tư và chỉ rõ người mua có thể mất tiền, kể cả vốn ban đầu). Tại Việt Nam, theo Luật Kinh doanh bảo hiểm 2022 (Điều 35), hợp đồng bảo hiểm nhân thọ có thời hạn trên 1 năm cho bên mua thời gian cân nhắc 21 ngày kể từ khi nhận hợp đồng để từ chối tiếp tục tham gia (theo Thời báo Tài chính Việt Nam).',
    'Mức bảo vệ cần được tính từ nhu cầu: nghĩa vụ nợ, chi phí sinh hoạt của người phụ thuộc trong số năm cần thiết, trừ tài sản sẵn có. Không mua theo tỷ lệ cố định.',
  ],
  causalChain: [
    { from: 'Bạn có người phụ thuộc hoặc khoản nợ lớn', to: 'Rủi ro mất thu nhập đáng kể nếu có sự cố', mechanism: 'Bảo hiểm chuyển rủi ro tài chính này sang công ty bảo hiểm đổi lấy phí.' },
    { from: 'Sản phẩm kết hợp bảo vệ và đầu tư', to: 'Phí cao hơn nhưng phần đầu tư chịu chi phí và rủi ro thị trường', mechanism: 'Một phần phí đóng trả cho bảo hiểm thuần, phần còn lại sau phí mới thành tài sản tích lũy.' },
    { from: 'Hủy hợp đồng sớm', to: 'Giá trị hoàn lại thấp hơn tổng phí đã đóng', mechanism: 'Chi phí ban đầu và hoa hồng được trừ chủ yếu trong những năm đầu.' },
    { from: 'Tách “mua bảo vệ” và “tự đầu tư”', to: 'So sánh được chi phí và kiểm soát được từng phần', mechanism: 'Mỗi khoản có mục tiêu, chi phí và tính thanh khoản riêng, dễ điều chỉnh hơn.' },
  ],
  vietnamImpact: [
    { group: 'Hộ gia đình có người trụ cột', effect: 'Bảo hiểm bảo vệ thu nhập giúp gia đình không phải bán tài sản hoặc vay khi có sự cố.', direction: 'up' },
    { group: 'Người mua sản phẩm kèm đầu tư', effect: 'Chi phí cao và dễ hiểu nhầm là sản phẩm tiết kiệm; rủi ro hủy sớm lỗ phí.', direction: 'down' },
    { group: 'Người vay mua nhà', effect: 'Bảo hiểm thời hạn bảo đảm khoản vay không đè lên người thân nếu có rủi ro.', direction: 'up' },
    { group: 'Người nghĩ bảo hiểm là kênh sinh lời chính', effect: 'Lợi suất sau phí thường thấp hơn các kênh đầu tư riêng cho cùng thời gian, đánh đổi lấy tính kỷ luật và bảo vệ.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Bảng minh họa quyền lợi và biểu phí', why: 'Cho thấy giá trị hoàn lại và phí theo từng năm trong các kịch bản lãi suất.', where: 'Hồ sơ sản phẩm của công ty bảo hiểm, điều khoản hợp đồng' },
    { name: 'Tỷ lệ phí bảo hiểm trên thu nhập', why: 'Phí quá cao so với thu nhập làm hợp đồng dễ bị hủy giữa chừng.', where: 'Tự tính từ ngân sách gia đình' },
    { name: 'Thông tin giám sát thị trường bảo hiểm', why: 'Cung cấp quy định và cảnh báo về bán hàng sai lệch.', where: 'Bộ Tài chính (Cục Quản lý, giám sát bảo hiểm)' },
  ],
  counterpoints: [
    'Một số người cần tính kỷ luật tiết kiệm bắt buộc hoặc quyền lợi trọn đời (ví dụ nhu cầu để lại tài sản), nên sản phẩm kèm tích lũy vẫn hợp lý với họ.',
    'Bảo hiểm thời hạn không có giá trị khi hết hạn; nếu bệnh tật sau này khiến không mua được thì rủi ro không được bảo vệ khi cần.',
    'So sánh sản phẩm cần cùng giả định và cùng quyền lợi; nhiều bảng so sánh bỏ qua khác biệt điều khoản loại trừ.',
  ],
  glossary: [
    { term: 'Bảo hiểm thời hạn', definition: 'Hợp đồng bảo vệ trong một thời hạn xác định, chi trả khi có sự kiện bảo hiểm.' },
    { term: 'Bảo hiểm trọn đời', definition: 'Bảo hiểm bảo vệ suốt đời, có giá trị tích lũy.' },
    { term: 'Giá trị hoàn lại', definition: 'Số tiền nhận được khi hủy hợp đồng sau một thời gian, thường thấp hơn tổng phí đã đóng ở những năm đầu.' },
    { term: 'Bảng minh họa quyền lợi', definition: 'Tài liệu thể hiện quyền lợi và giá trị tài khoản theo các giả định lãi suất.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'insurance-basics-term-vs-whole-q',
    question: 'Một đại lý giới thiệu sản phẩm “vừa bảo vệ vừa sinh lời như gửi tiết kiệm”. Cách kiểm tra đúng nhất?',
    options: [
      { id: 'a', text: 'Tin vào lợi suất giả định ở trang đầu của bảng minh họa.', explain: 'Lợi suất giả định không phải cam kết; phải xem phí và kịch bản không thuận lợi.' },
      { id: 'b', text: 'Hỏi chi phí bảo hiểm, phí quản lý, giá trị hoàn lại từng năm và kịch bản lợi suất thấp.', correct: true, explain: 'Đúng. Tách chi phí và xem giá trị hoàn lại giúp biết khoản bạn thực sự nhận và nếu hủy sớm.' },
      { id: 'c', text: 'Chọn sản phẩm có phí đóng cao nhất vì quyền lợi sẽ cao nhất.', explain: 'Phí cao có thể đến từ chi phí cao; không tương ứng với bảo vệ tốt hơn.' },
    ],
  },
  sources: [
    { title: 'Variable Life Insurance (phí, phí hủy hợp đồng, rủi ro mất vốn, thời gian cân nhắc)', publisher: 'Investor.gov (U.S. SEC)', url: 'https://www.investor.gov/introduction-investing/investing-basics/investment-products/variable-life' },
    { title: 'Nên sử dụng “đặc quyền 21 ngày” khi mua bảo hiểm nhân thọ', publisher: 'Thời báo Tài chính Việt Nam', url: 'https://thoibaotaichinhvietnam.vn/nen-su-dung-dac-quyen-21-ngay-khi-mua-bao-hiem-nhan-tho-123293.html' },
    { title: 'Term life insurance', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Term_life_insurance' },
    { title: 'Whole life insurance', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Whole_life_insurance' },
    { title: 'Universal life insurance', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Universal_life_insurance' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 107,
}
