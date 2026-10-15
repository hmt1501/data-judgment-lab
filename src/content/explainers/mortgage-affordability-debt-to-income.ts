import type { Explainer } from '../../../shared/explainer'

export const mortgageAffordabilityDebtToIncome: Explainer = {
  id: 'mortgage-affordability-debt-to-income',
  slug: 'mortgage-affordability-debt-to-income',
  question: 'Gánh nặng trả nợ trên thu nhập (DTI) khi mua nhà tính thế nào và bao nhiêu là an toàn?',
  title: 'DTI = nợ phải trả hằng tháng ÷ thu nhập gộp: lãi suất nhích vài điểm có thể đẩy nó vượt ngưỡng chịu đựng',
  topic: 'real-estate',
  tldr: 'Theo CFPB (Mỹ), tỷ lệ nợ trên thu nhập (DTI) bằng **tổng khoản trả nợ hằng tháng chia cho thu nhập gộp hằng tháng**; người cho vay dùng nó để đánh giá khả năng trả nợ và mỗi sản phẩm vay có giới hạn riêng. Với vay mua nhà, DTI nhạy cảm với **lãi suất và kỳ hạn**: cùng khoản vay, lãi suất tăng 3 điểm phần trăm có thể đẩy DTI lên thêm hàng chục điểm phần trăm (ví dụ giả định bên dưới: từ khoảng 45% lên 55%).',
  keyPoints: [
    'CFPB định nghĩa DTI là "tất cả khoản trả nợ hằng tháng chia thu nhập gộp hằng tháng" (trước thuế); ví dụ trên trang: 1.500 USD thế chấp + 100 USD vay xe + 400 USD nợ khác = 2.000 USD, thu nhập gộp 6.000 USD cho DTI 33%. CFPB cũng nói mỗi sản phẩm và tổ chức cho vay có giới hạn DTI khác nhau — không có ngưỡng chung.',
    'Công thức khoản trả hằng tháng (vay niên kim, trả đều): P × r ÷ (1 − (1 + r)^−n). Ví dụ giả định vay 2.000 triệu đồng, 20 năm: lãi 9%/năm trả khoảng **17,99 triệu**/tháng; lãi 12%/năm trả khoảng **22,02 triệu**/tháng.',
    'Với hộ thu nhập gộp 40 triệu/tháng (giả định, chưa có nợ khác): DTI chỉ riêng khoản vay này là ≈ 45% ở lãi 9% và ≈ 55% ở lãi 12%. Chỉ 3 điểm lãi suất đẩy DTI tăng khoảng 10 điểm phần trăm.',
    'Ngoài DTI, cần kiểm tra **tỷ lệ cho vay trên giá trị (LTV)**, quỹ khẩn cấp, chi phí ở thực tế (điện nước, bảo trì, phí quản lý), và lãi suất thả nổi sau ưu đãi.',
    'Cấu trúc phổ biến của vay mua nhà là kỳ ưu đãi rồi thả nổi theo lãi suất tham chiếu cộng biên độ (hợp đồng cụ thể mỗi ngân hàng một khác, bài chưa trích nguồn riêng cho Việt Nam); DTI sau ưu đãi mới là mức nên dùng để thử sức chịu đựng. Con số 45%/55% ở trên là ví dụ giả định, không phải ngưỡng của ngân hàng nào.',
  ],
  causalChain: [
    { from: 'Giá nhà tăng nhanh hơn thu nhập', to: 'Khoản vay cần thiết lớn hơn so với thu nhập', mechanism: 'Giá nhà/thu nhập tăng buộc người mua vay nhiều hơn hoặc trả trước nhiều hơn.' },
    { from: 'Khoản vay lớn hơn hoặc lãi suất cao hơn', to: 'Khoản trả hằng tháng tăng', mechanism: 'Công thức niên kim: khoản trả tăng gần tuyến tính theo số tiền vay và tăng nhanh theo lãi suất, nhất là kỳ hạn dài.' },
    { from: 'Khoản trả hằng tháng tăng', to: 'DTI cao hơn, ít không gian cho chi tiêu và rủi ro', mechanism: 'Phần thu nhập còn lại giảm, hộ dễ trễ hạn khi thu nhập giảm hoặc chi phí tăng.' },
    { from: 'DTI cao ở nhiều hộ', to: 'Rủi ro nợ xấu và nhu cầu mua nhà giảm', mechanism: 'Người cho vay siết điều kiện; người mua ở thực bị đẩy ra khỏi thị trường, kéo thanh khoản xuống.' },
  ],
  vietnamImpact: [
    { group: 'Người mua nhà lần đầu', effect: 'Nên thử DTI ở lãi suất thả nổi sau ưu đãi (thường cao hơn lãi ưu đãi đáng kể) chứ không chỉ lãi ưu đãi.', direction: 'down' },
    { group: 'Ngân hàng cho vay', effect: 'Đánh giá khả năng trả nợ dựa trên thu nhập chứng minh được; thu nhập không chính thức khó ghi nhận làm hạn mức vay thấp hơn.', direction: 'mixed' },
    { group: 'Hộ gia đình có thu nhập biến động', effect: 'DTI trên thu nhập trung bình có thể che giấu tháng thu nhập thấp; cần quỹ dự phòng ít nhất vài tháng trả nợ.', direction: 'down' },
    { group: 'Thị trường BĐS', effect: 'Khi lãi suất giảm, DTI giảm và sức mua cải thiện; ngược lại khi lãi suất tăng.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Lãi suất cho vay mua nhà (ưu đãi và thả nổi)', why: 'Biến số chính của khoản trả hằng tháng.', where: 'Biểu lãi suất công bố của ngân hàng; Ngân hàng Nhà nước' },
    { name: 'Tỷ lệ giá nhà trên thu nhập', why: 'Cho thấy khả năng chi trả chung của thị trường.', where: 'Tính từ giá nhà (báo cáo thị trường) và thu nhập bình quân (Cục Thống kê)' },
    { name: 'Dư nợ cho vay BĐS và tỷ lệ nợ xấu mảng nhà ở', why: 'Phản ánh sức chịu đựng của người vay ở quy mô hệ thống.', where: 'Ngân hàng Nhà nước; báo cáo tài chính ngân hàng' },
  ],
  counterpoints: [
    'DTI dựa trên thu nhập hiện tại; thu nhập tăng theo thời gian làm gánh nặng thực giảm dần, nhất là khi lạm phát cao hơn dự kiến.',
    'DTI chỉ tính nợ chính thức, bỏ qua vay không chính thức và chi tiêu cố định khác.',
    'Ngưỡng "an toàn" phụ thuộc cấu trúc chi tiêu của từng hộ; nguồn CFPB không đưa một số cố định.',
  ],
  glossary: [
    { term: 'DTI', definition: 'Tỷ lệ nợ trên thu nhập: tổng khoản trả nợ hằng tháng chia thu nhập gộp hằng tháng.' },
    { term: 'Niên kim', definition: 'Hình thức trả nợ đều gồm gốc và lãi mỗi kỳ.' },
    { term: 'LTV', definition: 'Tỷ lệ khoản vay trên giá trị tài sản bảo đảm.' },
    { term: 'Lãi suất thả nổi', definition: 'Lãi suất thay đổi theo lãi tham chiếu sau kỳ ưu đãi.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'mortgage-affordability-debt-to-income-q',
    question: 'Hộ thu nhập gộp 40 triệu/tháng vay 2.000 triệu, 20 năm (ví dụ giả định). Lãi suất tăng từ 9% lên 12% thì DTI của khoản vay này thay đổi thế nào?',
    options: [
      { id: 'a', text: 'Từ khoảng 45% lên khoảng 55%.', correct: true, explain: '17,99 ÷ 40 ≈ 45%; 22,02 ÷ 40 ≈ 55%. Lãi suất tăng làm khoản trả tăng đáng kể.' },
      { id: 'b', text: 'Không đổi vì số tiền vay không đổi.', explain: 'Khoản trả hằng tháng phụ thuộc cả lãi suất.' },
      { id: 'c', text: 'Giảm vì kỳ hạn không đổi.', explain: 'Lãi suất cao hơn làm khoản trả cao hơn.' },
    ],
  },
  sources: [
    { title: 'What is a debt-to-income ratio?', publisher: 'Consumer Financial Protection Bureau (CFPB)', url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-why-is-the-43-debt-to-income-ratio-important-en-1791/' },
    { title: 'Debt-to-income ratio', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Debt-to-income_ratio' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 98,
}
