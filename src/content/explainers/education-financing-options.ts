import type { Explainer } from '../../../shared/explainer'

export const educationFinancingOptions: Explainer = {
  id: 'education-financing-options',
  slug: 'education-financing-options',
  question: 'Có những cách nào để tài trợ chi phí học tập và nên cân nhắc gì khi vay?',
  title: 'Tài trợ học tập: vay, học bổng hay tiết kiệm trước',
  topic: 'personal-finance',
  tldr: 'Chi phí học tập có thể được trang trải bằng ba nguồn: **tiết kiệm trước**, **học bổng/hỗ trợ không hoàn lại** và **vay**. Vay giúp "mua" học vấn bằng thu nhập tương lai nhưng tạo nghĩa vụ trả nợ cố định, trong khi thu nhập sau tốt nghiệp không chắc chắn. Quyết định hợp lý so sánh **tổng chi phí, lãi suất, thời hạn trả và triển vọng thu nhập**, không chỉ số tiền cần ngay hôm nay.',
  keyPoints: [
    'Ba nhóm nguồn: tiết kiệm hoặc thu nhập hiện tại (không có lãi phải trả nhưng cần thời gian), học bổng và trợ cấp (không phải hoàn lại), và vay (hưởng ngay, trả sau, có lãi). Nhiều gói thực tế là kết hợp cả ba.',
    'Ở Việt Nam, theo Tạp chí Kinh tế - Tài chính (đăng 1/7/2026), chương trình tín dụng cho học sinh, sinh viên của Ngân hàng Chính sách xã hội (VBSP) hiện có mức vay tối đa **4 triệu đồng/tháng**, hiệu lực từ 2022; Bộ Tài chính **đề xuất** nâng lên 8 triệu đồng/tháng trong dự thảo quyết định mới. Đến bài báo ngày 22/8/2026 (Giáo dục và Thời đại), dự thảo vẫn đang được Bộ Tài chính soạn thảo/trình Thủ tướng; chưa thấy quyết định ban hành được nguồn nào xác nhận, nên cần kiểm tra quy định hiện hành.',
    'Về lãi suất, bài Tạp chí Kinh tế - Tài chính nêu mức cố định khoảng 0,5%/tháng (làm tròn); theo Báo Giáo dục và Thời đại (22/8/2026), mức hiện hành là **6,24%/năm (khoảng 0,52%/tháng)** theo Quyết định 2553/QĐ-TTg, áp dụng từ 1/12/2025 (trước đó 6,6%/năm, tức 0,55%/tháng, nên con số 0,55% là mức cũ). Nợ quá hạn tính 130% lãi suất vay; dự thảo đề xuất gắn lãi suất với mức do Thủ tướng quy định cho hộ nghèo từng thời kỳ. Đối tượng gồm sinh viên thuộc hộ nghèo, cận nghèo, mức sống trung bình và hộ gặp khó khăn do tai nạn, bệnh tật, thiên tai.',
    'Tính đến 31/5/2026 (theo số liệu VBSP trong bài), dư nợ chương trình là 24.475 tỷ đồng với 355.805 hộ còn dư nợ; nợ quá hạn 64,9 tỷ đồng (0,27%). Tỷ lệ quá hạn thấp, nhưng chương trình có điều kiện đối tượng và hạn mức riêng, không phải khoản vay thương mại.',
    'Kinh nghiệm quốc tế cho thấy rủi ro chính của vay học là **số dư tăng khi kéo dài thời gian trả** (lãi nhập gốc) và việc khó trả nếu thu nhập sau tốt nghiệp thấp; một số nước dùng cơ chế trả theo thu nhập, nhưng mỗi nước điều kiện khác nhau, không áp dụng nguyên cho Việt Nam.',
  ],
  causalChain: [
    { from: 'Chi phí học (học phí cộng sinh hoạt) vượt khả năng tiết kiệm hiện tại', to: 'Phải vay hoặc tìm hỗ trợ', mechanism: 'Khoản tiền cần ngay trong khi thu nhập từ học vấn chỉ đến sau khi tốt nghiệp, tạo chênh lệch thời gian giữa chi và thu.' },
    { from: 'Vay tiền để học', to: 'Nghĩa vụ trả nợ cố định sau tốt nghiệp', mechanism: 'Mỗi kỳ trả gồm gốc và lãi; lãi tính trên số dư, nên kéo dài thời hạn làm khoản trả mỗi kỳ nhỏ hơn nhưng tổng lãi lớn hơn.' },
    { from: 'Thu nhập sau tốt nghiệp thấp hơn kỳ vọng hoặc khó tìm việc', to: 'Gánh nặng trả nợ lớn và rủi ro nợ quá hạn', mechanism: 'Khoản trả không đổi trong khi thu nhập thấp hơn dự kiến, làm tỷ lệ nợ / thu nhập tăng.' },
    { from: 'Có học bổng hoặc hỗ trợ không hoàn lại', to: 'Giảm số tiền phải vay', mechanism: 'Giảm gốc vay trực tiếp làm giảm cả tổng lãi lẫn khoản trả định kỳ.' },
    { from: 'Chọn trường, ngành và thời gian học', to: 'Quyết định tổng chi phí và triển vọng thu nhập', mechanism: 'Học phí, thời gian học và cơ hội việc làm khác nhau; cân nhắc "đầu tư" vào học vấn như quyết định có chi phí và lợi ích dự kiến chứ không có kết quả bảo đảm.' },
  ],
  vietnamImpact: [
    { group: 'Sinh viên thuộc hộ nghèo, cận nghèo', effect: 'Có thể tiếp cận khoản vay ưu đãi qua VBSP với hạn mức theo quy định; hạn mức hiện tại có thể không đủ theo bài báo đã dẫn khi học phí và sinh hoạt tăng.', direction: 'mixed' },
    { group: 'Phụ huynh có thu nhập trung bình', effect: 'Phải cân nhắc giữa tiết kiệm sớm cho con và vay khi cần; ngân sách gia đình nên tách ngăn cho chi phí học tập.', direction: 'mixed' },
    { group: 'Sinh viên du học tự túc', effect: 'Chi phí lớn, thường phát sinh bằng ngoại tệ; biến động tỷ giá làm số tiền cần tính theo đồng Việt Nam thay đổi.', direction: 'down' },
    { group: 'Người đi làm muốn học thêm', effect: 'Có thu nhập nên có thể trả dần từ lương và kết hợp học bổng của doanh nghiệp; thời gian là chi phí chính.', direction: 'up' },
  ],
  indicators: [
    { name: 'Mức vay tối đa và lãi suất của chương trình tín dụng sinh viên', why: 'Quyết định số tiền hỗ trợ thực tế so với chi phí học và sinh hoạt.', where: 'Ngân hàng Chính sách xã hội (vbsp.org.vn) và văn bản quyết định của Thủ tướng Chính phủ' },
    { name: 'Học phí và chi phí sinh hoạt của trường và thành phố bạn học', why: 'Cơ sở để tính tổng nhu cầu vốn trong cả khóa học.', where: 'Thông báo học phí của trường; ước tính chi tiêu của chính bạn' },
    { name: 'Thu nhập khởi điểm ngành học', why: 'Giúp ước tính khả năng trả nợ sau tốt nghiệp (nên xem nhiều nguồn).', where: 'Khảo sát việc làm của trường, báo cáo thị trường lao động' },
    { name: 'Tỷ lệ nợ quá hạn của chương trình', why: 'Phản ánh mức độ khó trả của người vay trong chương trình.', where: 'Báo cáo của Ngân hàng Chính sách xã hội' },
  ],
  counterpoints: [
    'Vay để học không phải lúc nào cũng có lợi: nếu ngành học có thu nhập thấp hoặc khó hoàn thành khóa học, nghĩa vụ trả nợ vẫn còn trong khi lợi ích học vấn không như kỳ vọng.',
    'Tiết kiệm trước không phải lúc nào cũng tốt hơn vay: nếu lãi vay ưu đãi thấp hơn lãi tiết kiệm có thể đạt, giữ tiền mặt cho các mục tiêu khác có thể hợp lý. Điều này phụ thuộc điều kiện từng chương trình.',
    'Chính sách vay sinh viên và hạn mức đang trong giai đoạn đề xuất sửa đổi; số liệu và điều kiện trong bài có thể đã thay đổi sau ngày bài báo, cần kiểm tra văn bản chính thức.',
  ],
  glossary: [
    { term: 'VBSP', definition: 'Ngân hàng Chính sách xã hội, cho vay ưu đãi cho hộ nghèo và các đối tượng chính sách, trong đó có học sinh, sinh viên.' },
    { term: 'Học bổng', definition: 'Khoản hỗ trợ không phải hoàn lại, thường theo thành tích hoặc hoàn cảnh.' },
    { term: 'Trả theo thu nhập', definition: 'Cơ chế ở một số nước, khoản trả nợ học phụ thuộc vào thu nhập của người vay.' },
    { term: 'Lãi nhập gốc', definition: 'Phần lãi chưa trả được cộng vào dư nợ gốc, làm số dư tăng.' },
    { term: 'Nợ quá hạn', definition: 'Khoản nợ đã quá thời điểm phải trả theo hợp đồng.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'education-financing-options-q',
    question: 'Bạn cần tài trợ một khóa học dài, có một khoản học bổng bán phần và có thể vay ưu đãi. Cách tiếp cận nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Vay đủ toàn bộ số tiền cho chắc, vì lãi ưu đãi thì luôn tốt.', explain: 'Vay nhiều hơn cần thiết làm tăng nghĩa vụ trả nợ; lãi thấp không có nghĩa là không có rủi ro thu nhập sau tốt nghiệp.' },
      { id: 'b', text: 'Tính tổng nhu cầu, trừ học bổng và tiết kiệm trước, chỉ vay phần thiếu và kiểm tra khả năng trả theo kịch bản thu nhập thấp.', correct: true, explain: 'Đúng. Cách này giảm gốc vay, giảm tổng lãi và có kiểm tra độ chịu đựng của khoản trả với thu nhập không chắc chắn.' },
      { id: 'c', text: 'Không dùng học bổng vì sợ phải ràng buộc.', explain: 'Học bổng không hoàn lại giảm số phải vay; nên đọc điều kiện đi kèm nhưng bỏ qua hoàn toàn thường làm tăng chi phí.' },
    ],
  },
  sources: [
    { title: 'Đề xuất nâng gấp đôi mức vay vốn tín dụng cho học sinh, sinh viên', publisher: 'Tạp chí Kinh tế - Tài chính (đăng 1/7/2026)', url: 'https://tapchikinhtetaichinh.vn/de-xuat-nang-gap-doi-muc-vay-von-tin-dung-cho-hoc-sinh-sinh-vien-160539.html' },
    { title: 'Tín dụng dành cho HSSV dự kiến nâng mức vay lên 8 triệu đồng/tháng: Trường ĐH đánh giá phù hợp', publisher: 'Báo Giáo dục và Thời đại (22/8/2026)', url: 'https://giaoduc.net.vn/tin-dung-danh-cho-hssv-du-kien-nang-muc-vay-len-8-trieu-dong-thang-truong-dh-danh-gia-phu-hop-post262281.gd' },
    { title: 'Student loan', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Student_loan' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 184,
}
