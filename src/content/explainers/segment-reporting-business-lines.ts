import type { Explainer } from '../../../shared/explainer'

export const segmentReportingBusinessLines: Explainer = {
  id: 'segment-reporting-business-lines',
  slug: 'segment-reporting-business-lines',
  question: 'Đọc báo cáo bộ phận (segment) thế nào để hiểu từng mảng kinh doanh của một công ty?',
  title: 'Báo cáo bộ phận: nhìn từng mảng kinh doanh qua "con mắt ban lãnh đạo"',
  topic: 'markets-investing',
  tldr: 'Một tập đoàn nhiều mảng có thể có doanh thu hay lợi nhuận tổng nhìn đẹp trong khi **một mảng lớn lỗ** được mảng khác che đi. Báo cáo bộ phận tách số liệu theo các mảng mà ban lãnh đạo dùng để điều hành, giúp bạn thấy mảng nào sinh lợi, mảng nào ngốn vốn. Chuẩn IFRS 8 dùng "cách tiếp cận quản trị" nên cách chia mảng phản ánh cấu trúc nội bộ, và có thể thay đổi giữa các kỳ.',
  keyPoints: [
    'Theo trang IFRS 8 của Quỹ IFRS (đọc 15/10/2026), nguyên tắc cốt lõi: doanh nghiệp công bố thông tin giúp người dùng đánh giá **bản chất và tác động tài chính của các hoạt động kinh doanh** và môi trường kinh tế mà doanh nghiệp hoạt động. Chuẩn áp dụng cho doanh nghiệp có công cụ nợ hoặc vốn niêm yết công khai.',
    'Theo tóm tắt của Grant Thornton (đọc 15/10/2026): các bộ phận hoạt động được xác định theo cấu trúc tổ chức và báo cáo cho ban quản lý; IFRS 8 không quy định chính sách đo lường, số liệu chủ yếu lấy theo thông tin ban quản lý nhận, gọi là **cách tiếp cận quản trị** ("through the eyes of management").',
    'Doanh nghiệp phải **đối chiếu** tổng doanh thu, lợi nhuận, tài sản và nợ phải trả của các bộ phận với báo cáo tài chính hợp nhất; khi cơ cấu báo cáo nội bộ thay đổi, số liệu so sánh thường được trình bày lại và phải nêu rõ.',
    'Ngoài bộ phận, có **công bố toàn doanh nghiệp**: doanh thu theo sản phẩm/dịch vụ, theo quốc gia, tài sản dài hạn theo quốc gia và khách hàng lớn, kể cả khi ban quản lý không dùng.',
    'Cách đọc thực dụng: xem tỷ trọng từng mảng trong doanh thu và lợi nhuận, biên lợi nhuận theo mảng, xu hướng theo thời gian, khoản **không phân bổ** (chi phí trụ sở) và xem cách chia mảng có đổi giữa các năm không.',
  ],
  causalChain: [
    { from: 'Ban lãnh đạo chia công ty thành các mảng để điều hành', to: 'Báo cáo bộ phận theo đúng các mảng đó', mechanism: 'Theo cách tiếp cận quản trị, thông tin công bố dựa trên báo cáo nội bộ gửi cho người ra quyết định điều hành.' },
    { from: 'Mỗi mảng có doanh thu, lợi nhuận, tài sản riêng', to: 'Nhà đầu tư thấy sự khác nhau về biên và tăng trưởng', mechanism: 'Biên lợi nhuận mỗi mảng khác nhau nên tổng lợi nhuận thay đổi theo cơ cấu doanh thu, không chỉ theo tổng doanh thu.' },
    { from: 'Mảng biên cao tăng trưởng nhanh hơn mảng biên thấp', to: 'Biên lợi nhuận hợp nhất cải thiện', mechanism: 'Tỷ trọng của mảng biên cao trong doanh thu tăng, kéo biên bình quân gia quyền lên mà không cần mảng nào tự cải thiện.' },
    { from: 'Chi phí chung và khoản không phân bổ được trình bày riêng', to: 'Lợi nhuận mảng có thể bị đánh giá cao hơn thực tế', mechanism: 'Phần chi phí trụ sở chưa gán về mảng không nằm trong lợi nhuận mảng nên tổng lợi nhuận các mảng lớn hơn lợi nhuận hợp nhất.' },
    { from: 'Doanh nghiệp đổi cách chia mảng', to: 'Khó so sánh qua các năm', mechanism: 'Chuyển một đơn vị từ mảng này sang mảng khác làm số liệu thay đổi; nếu có trình bày lại thì cần đọc kỹ ghi chú.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cổ phiếu tập đoàn đa ngành niêm yết', effect: 'Báo cáo bộ phận giúp tách mảng lõi khỏi mảng đầu tư hoặc bất động sản, đánh giá đúng nguồn lợi nhuận bền vững.', direction: 'up' },
    { group: 'Nhà phân tích định giá theo từng phần (sum-of-the-parts)', effect: 'Cần số liệu từng mảng để áp hệ số phù hợp; chất lượng và chi tiết công bố ảnh hưởng độ tin cậy.', direction: 'mixed' },
    { group: 'Doanh nghiệp công bố thông tin', effect: 'Phải cân nhắc giữa minh bạch và tiết lộ bí mật cạnh tranh; chi tiết mảng ở mỗi doanh nghiệp khác nhau.', direction: 'mixed' },
    { group: 'Người cho vay', effect: 'Biết mảng nào tạo dòng tiền giúp đánh giá khả năng trả nợ của cả nhóm.', direction: 'up' },
  ],
  indicators: [
    { name: 'Tỷ trọng doanh thu và lợi nhuận từng mảng', why: 'Cho biết doanh nghiệp thực chất sống nhờ mảng nào.', where: 'Thuyết minh báo cáo tài chính (mục thông tin bộ phận), báo cáo thường niên' },
    { name: 'Biên lợi nhuận theo mảng', why: 'So sánh hiệu quả giữa các mảng và theo thời gian.', where: 'Tự tính từ doanh thu và lợi nhuận mảng trong thuyết minh' },
    { name: 'Khoản không phân bổ / loại trừ nội bộ', why: 'Giúp đối chiếu từ tổng các mảng sang lợi nhuận hợp nhất.', where: 'Bảng đối chiếu trong thuyết minh' },
    { name: 'Thay đổi cách chia mảng giữa các kỳ', why: 'Cảnh báo khả năng số liệu kỳ này không so sánh được với kỳ trước.', where: 'Thuyết minh và ghi chú trình bày lại' },
  ],
  counterpoints: [
    'Cách tiếp cận quản trị có thể che mờ so sánh giữa các công ty: mỗi nơi chia mảng và đo lợi nhuận theo cách riêng, nên mảng cùng tên chưa chắc cùng định nghĩa.',
    'Doanh nghiệp có quyền gộp các mảng giống nhau về kinh tế; chi tiết có thể không đủ để phân tích sâu từng sản phẩm.',
    'Lợi nhuận mảng thường chưa bao gồm chi phí chung và chuyển giá nội bộ nên có thể không phản ánh đúng khả năng tự đứng độc lập của mảng đó.',
  ],
  glossary: [
    { term: 'Bộ phận hoạt động', definition: 'Thành phần của doanh nghiệp có doanh thu, chi phí và kết quả được ban quản lý xem xét thường xuyên để phân bổ nguồn lực.' },
    { term: 'Cách tiếp cận quản trị', definition: 'Công bố bộ phận dựa trên cách ban lãnh đạo tổ chức và theo dõi hoạt động.' },
    { term: 'Đối chiếu bộ phận', definition: 'Bảng nối tổng số liệu các bộ phận với báo cáo hợp nhất.' },
    { term: 'Khoản không phân bổ', definition: 'Chi phí hoặc tài sản chung chưa gán về bộ phận cụ thể.' },
    { term: 'Biên lợi nhuận', definition: 'Lợi nhuận chia cho doanh thu.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'segment-reporting-business-lines-q',
    question: 'Ví dụ giả định: tập đoàn X có doanh thu 1.000 tỷ, gồm mảng A (600 tỷ, lợi nhuận 60 tỷ), B (300 tỷ, lợi nhuận 90 tỷ) và C (100 tỷ, lỗ 20 tỷ). Năm sau doanh thu mảng B tăng 20%, A và C giữ nguyên với cùng biên. Điều gì đúng?',
    options: [
      { id: 'a', text: 'Biên lợi nhuận hợp nhất không đổi vì A và C giữ nguyên.', explain: 'Biên hợp nhất là bình quân gia quyền theo doanh thu. Khi mảng biên 30% tăng tỷ trọng thì biên chung tăng.' },
      { id: 'b', text: 'Biên lợi nhuận mảng gộp tăng vì tỷ trọng mảng B (biên 30%) lớn hơn dù biên của từng mảng không đổi.', correct: true, explain: 'Đúng. Ban đầu tổng lợi nhuận mảng 130 tỷ trên 1.000 tỷ (13%). Sau đó B có doanh thu 360 và lợi nhuận 108; tổng lợi nhuận mảng = 60 + 108 − 20 = 148 trên doanh thu 1.060 (khoảng 14%).' },
      { id: 'c', text: 'Mảng C lỗ nên chắc chắn nên đóng cửa.', explain: 'Cần xem thêm phần chi phí chung, khả năng bù đắp, giá trị chiến lược và dòng tiền; chỉ số lợi nhuận mảng chưa đủ để kết luận.' },
    ],
  },
  sources: [
    { title: 'IFRS 8 Operating Segments', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-8-operating-segments/' },
    { title: 'IFRS 8 – Principles in brief', publisher: 'Grant Thornton', url: 'https://www.grantthornton.global/en/insights/articles/ifrs-8-principles-in-brief' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 189,
}
