import type { Explainer } from '../../../shared/explainer'

export const lifecycleInvestingRiskTolerance: Explainer = {
  id: 'lifecycle-investing-risk-tolerance',
  slug: 'lifecycle-investing-risk-tolerance',
  question: 'Tuổi và khả năng chịu rủi ro quyết định phân bổ tài sản thế nào?',
  title: 'Phân bổ theo quỹ thời gian còn lại, khả năng chịu lỗ và độ ổn định thu nhập',
  topic: 'personal-finance',
  tldr: 'Phân bổ tài sản hợp lý phụ thuộc ba yếu tố: **thời gian còn lại** đến khi cần tiền, **khả năng chịu rủi ro** (tài chính: dư địa thu nhập, quỹ khẩn cấp, nợ) và **mức chịu rủi ro** (tâm lý: có ngủ được khi danh mục giảm 30%). Người trẻ thường có thời gian dài để phục hồi nên có thể giữ tỷ trọng cổ phiếu cao hơn; gần mục tiêu hoặc nghỉ hưu thì chuyển dần sang tài sản ổn định hơn. Các "quy tắc theo tuổi" chỉ là điểm bắt đầu, không phải lời khuyên cá nhân.',
  keyPoints: [
    'Giả thuyết vòng đời (life-cycle hypothesis) cho rằng người ta làm trơn tiêu dùng theo đời: vay hoặc tiêu nhiều lúc trẻ, tiết kiệm lúc giữa đời, rút tài sản lúc nghỉ hưu; từ đó gợi ý nên điều chỉnh danh mục theo giai đoạn.',
    'Quỹ đích ngày (target-date fund) tự động giảm tỷ trọng cổ phiếu và tăng tỷ trọng tài sản ổn định khi đến gần năm mục tiêu (lộ trình "glide path"); tiện lợi, nhưng lộ trình của mỗi quỹ khác nhau nên cần đọc bản cáo bạch.',
    'Ví dụ quy tắc nhanh: "tỷ trọng cổ phiếu = 100 trừ tuổi" (hoặc 110/120 trừ tuổi). Đây chỉ là kinh nghiệm cho người mới, không dựa trên hoàn cảnh cá nhân; hai người cùng tuổi có thể cần phân bổ rất khác nhau.',
    '**Rủi ro dãy thu hoạch (sequence risk)**: sụt giảm lớn ngay trước hoặc sau khi nghỉ hưu gây hại hơn cùng mức sụt đó khi còn tích lũy, vì bạn phải rút tiền khi giá thấp; lý do chính để giảm rủi ro dần khi gần cần tiền.',
    'Khả năng chịu rủi ro tài chính phụ thuộc: độ ổn định thu nhập (công chức khác người làm tự do), quỹ khẩn cấp, nợ, người phụ thuộc, tài sản khác (nhà ở, bảo hiểm). Mức chịu rủi ro tâm lý phải được kiểm tra bằng tình huống giả định (nếu mất 30%, tôi sẽ làm gì).',
  ],
  causalChain: [
    { from: 'Thời gian đầu tư dài', to: 'Có thể chịu biến động ngắn hạn của tài sản rủi ro', mechanism: 'Có nhiều năm để phục hồi sau sụt giảm và để lãi kép phát huy; giảm nguy cơ buộc bán lúc giá thấp.' },
    { from: 'Đến gần mục tiêu (mua nhà, nghỉ hưu)', to: 'Giảm tỷ trọng tài sản biến động, tăng tài sản ổn định', mechanism: 'Giảm rủi ro mất vốn đúng thời điểm cần dùng tiền; đổi lại kỳ vọng lợi suất thấp hơn.' },
    { from: 'Thu nhập không ổn định hoặc quỹ khẩn cấp mỏng', to: 'Khả năng chịu rủi ro tài chính thấp dù còn trẻ', mechanism: 'Phải rút tiền đầu tư khi cần nên dễ bán lúc thị trường xuống; cần giữ nhiều tiền mặt hơn.' },
    { from: 'Tâm lý hoảng loạn khi giảm giá', to: 'Bán đáy, biến tạm thời thành thua lỗ thực', mechanism: 'Mức chịu rủi ro thấp hơn dự tính phá vỡ kế hoạch dài hạn; danh mục nên phù hợp khả năng giữ vững.' },
  ],
  vietnamImpact: [
    { group: 'Người trẻ mới đi làm', effect: 'Thời gian dài là lợi thế, nhưng cần quỹ khẩn cấp trước; đầu tư đều đặn vào chỉ số / quỹ đa dạng thay vì tập trung vài mã.', direction: 'up' },
    { group: 'Người 40–50 tuổi có con, có nợ', effect: 'Nhiều trách nhiệm tài chính làm khả năng chịu rủi ro thấp hơn dự tính; cần cân bằng tích lũy hưu trí và ổn định.', direction: 'mixed' },
    { group: 'Người sắp nghỉ hưu', effect: 'Giảm rủi ro dãy thu hoạch bằng tài sản ổn định (tiền gửi, trái phiếu chính phủ) và dự phòng chi tiêu vài năm; vẫn cần một phần tài sản tăng trưởng để chống lạm phát.', direction: 'mixed' },
    { group: 'Người chưa có hệ thống hưu trí bổ sung', effect: 'Lương hưu nhà nước có thể chưa đủ cho mức sống mong muốn; nên tự tích lũy, và cơ chế như quỹ hưu trí tự nguyện, quỹ mở có thể hỗ trợ (xem bài về tiết kiệm hưu trí).', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Thời gian còn lại đến mục tiêu tài chính và nhu cầu rút tiền', why: 'Yếu tố quyết định mức biến động có thể chấp nhận.', where: 'Tự lập kế hoạch tài chính theo mục tiêu' },
    { name: 'Quỹ khẩn cấp (số tháng chi tiêu) và tỷ lệ nợ / thu nhập', why: 'Đo khả năng chịu rủi ro tài chính.', where: 'Tự tính từ tài khoản và hợp đồng vay' },
    { name: 'Mức sụt giảm tối đa lịch sử của danh mục dự kiến (drawdown)', why: 'Kiểm tra mức chịu rủi ro tâm lý bằng con số.', where: 'Báo cáo quỹ, dữ liệu chỉ số' },
    { name: 'Lộ trình phân bổ (glide path) của quỹ đích ngày', why: 'So sánh mức giảm rủi ro theo thời gian giữa các quỹ.', where: 'Bản cáo bạch quỹ' },
  ],
  counterpoints: [
    'Không có tỷ lệ "đúng" theo tuổi: người 30 tuổi dễ bị mất việc, nợ lớn có thể không nên giữ nhiều cổ phiếu, ngược lại người 60 tuổi có lương hưu ổn định và tài sản lớn vẫn có thể giữ nhiều cổ phiếu.',
    'Tuổi thọ tăng làm thời gian đầu tư kéo dài sau nghỉ hưu, nên giảm quá nhiều cổ phiếu sớm có thể khiến tiền cạn trước khi hết đời (rủi ro sống thọ).',
    'Quỹ đích ngày tiện nhưng phí có thể cao hơn quỹ chỉ số đơn thuần, và một lộ trình chung không phù hợp hoàn cảnh riêng.',
  ],
  glossary: [
    { term: 'Giả thuyết vòng đời', definition: 'Lý thuyết cho rằng người ta phân bổ tiêu dùng và tiết kiệm suốt đời để làm trơn mức tiêu dùng.' },
    { term: 'Target-date fund', definition: 'Quỹ tự điều chỉnh tỷ trọng tài sản theo năm mục tiêu (thường là năm nghỉ hưu).' },
    { term: 'Glide path', definition: 'Lộ trình giảm dần tỷ trọng tài sản rủi ro khi đến gần năm mục tiêu.' },
    { term: 'Rủi ro dãy thu hoạch', definition: 'Rủi ro thứ tự lợi suất xấu xảy ra đúng lúc bắt đầu rút tiền.' },
    { term: 'Drawdown', definition: 'Mức sụt giảm từ đỉnh xuống đáy của danh mục.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'lifecycle-investing-risk-tolerance-q',
    question: 'Hai người cùng 35 tuổi. A có việc ổn định, quỹ khẩn cấp 12 tháng; B làm tự do, thu nhập bấp bênh, chưa có quỹ khẩn cấp, đang có nợ. Điều nào hợp lý?',
    options: [
      { id: 'a', text: 'Cả hai nên phân bổ giống nhau vì cùng tuổi.', explain: 'Tuổi chỉ là một yếu tố; khả năng chịu rủi ro tài chính khác nhau rõ rệt.' },
      { id: 'b', text: 'B nên ưu tiên quỹ khẩn cấp và giảm nợ, giữ tỷ trọng tài sản rủi ro thấp hơn A.', correct: true, explain: 'Đúng. Thu nhập bấp bênh và thiếu đệm làm B dễ phải bán tài sản khi giá thấp; ổn định trước, tăng rủi ro sau.' },
      { id: 'c', text: 'B nên đầu tư mạnh hơn để bù thu nhập thấp.', explain: 'Tăng rủi ro để bù thu nhập thấp làm nguy cơ thua lỗ lớn ngay lúc không có đệm.' },
    ],
  },
  sources: [
    { title: 'Target date fund', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Lifecycle_fund' },
    { title: 'Life-cycle hypothesis', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Life-cycle_hypothesis' },
    { title: 'Modern portfolio theory', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Modern_portfolio_theory' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 59,
}
