import type { Explainer } from '../../../shared/explainer'

export const retirementWithdrawal4PercentRuleLimits: Explainer = {
  id: 'retirement-withdrawal-4-percent-rule-limits',
  slug: 'retirement-withdrawal-4-percent-rule-limits',
  question: 'Quy tắc rút 4% khi nghỉ hưu là gì và khi nào nó không áp dụng được?',
  title: 'Quy tắc 4% là điểm khởi đầu từ dữ liệu Mỹ lịch sử, không phải bảo đảm; cần xét thời gian, rủi ro thị trường và lạm phát',
  topic: 'personal-finance',
  tldr: 'Quy tắc 4% gợi ý rút khoảng **4% giá trị danh mục năm đầu nghỉ hưu**, sau đó điều chỉnh theo lạm phát, với kỳ vọng danh mục bền khoảng 30 năm. Nó xuất phát từ phân tích dữ liệu lịch sử của thị trường Mỹ: nghiên cứu của Bengen (1994) và nghiên cứu mà người ta quen gọi là “Trinity” (Cooley, Hubbard, Walz, 1998). Giới hạn lớn: dữ liệu một nước, lạm phát và lợi suất khác nhau từng nơi, rủi ro **chuỗi lợi suất xấu đầu kỳ**, và thời gian nghỉ hưu có thể dài hơn 30 năm.',
  keyPoints: [
    'Phép nhân ngược: nếu chi tiêu mục tiêu là X/năm, danh mục cần khoảng **25 × X** (vì 1/4% = 25). Ví dụ giả định: chi tiêu 360 triệu/năm cần khoảng 9 tỷ; danh mục 1,2 tỷ cho phép rút khoảng 48 triệu/năm (4 triệu/tháng).',
    'Nghiên cứu Trinity dùng lợi suất tháng của chỉ số S&P 500 và trái phiếu doanh nghiệp Mỹ xếp hạng cao từ 1926 (bản cập nhật tới 1997), kiểm tra các tỷ lệ rút 3–12% trên các giai đoạn rút chồng lấn 15, 20, 25 và 30 năm; một danh mục “thành công” nếu cuối kỳ còn giá trị lớn hơn 0. Một bản tổng hợp của CFA Institute ghi nhận cả Bengen và Trinity đều ra mức 4% bền vững cho danh mục phân bổ “vừa phải”. Đó là kết quả của dữ liệu Mỹ, không phải định luật.',
    'Rủi ro **chuỗi lợi suất** (sequence risk): thị trường giảm mạnh những năm đầu trong khi vẫn rút tiền sẽ làm cạn danh mục nhanh hơn dù lợi suất trung bình dài hạn như nhau.',
    'Ở nền kinh tế có lạm phát và lãi suất khác, hoặc nghỉ hưu sớm (thời gian rút 40–50 năm), tỷ lệ an toàn thường phải thấp hơn; còn nếu có lương hưu hay thu nhập khác thì có thể cao hơn.',
    'Thay vì rút cố định, có thể dùng quy tắc **linh hoạt**: giảm chi khi thị trường xấu, giữ quỹ tiền mặt vài năm chi tiêu, tăng lại khi tốt. Cách này giảm rủi ro cạn tiền.',
  ],
  causalChain: [
    { from: 'Rút một tỷ lệ cố định mỗi năm điều chỉnh theo lạm phát', to: 'Dòng tiền chi tiêu ổn định', mechanism: 'Số tiền rút tăng theo giá để giữ sức mua, bất kể thị trường lên hay xuống.' },
    { from: 'Thị trường giảm mạnh ở những năm đầu', to: 'Phải bán tài sản ở giá thấp để lấy tiền chi tiêu', mechanism: 'Phần tài sản đã bán không còn hưởng đà phục hồi, nên danh mục cạn nhanh.' },
    { from: 'Thời gian nghỉ hưu dài hơn giả định', to: 'Xác suất cạn tiền tăng', mechanism: 'Nhiều năm rút hơn đồng nghĩa nhiều cơ hội gặp giai đoạn xấu và lạm phát tích lũy.' },
    { from: 'Lạm phát cao hơn lịch sử mẫu', to: 'Chi tiêu điều chỉnh tăng nhanh hơn lợi suất thực', mechanism: 'Giá trị thực của danh mục bị bào mòn nếu lợi suất không theo kịp.' },
  ],
  vietnamImpact: [
    { group: 'Người tự lo hưu trí bằng đầu tư', effect: 'Không thể bê nguyên con số Mỹ; cần xét lạm phát, lãi suất thực và rủi ro thị trường trong nước.', direction: 'mixed' },
    { group: 'Người nghỉ hưu sớm', effect: 'Thời gian rút dài hơn, cần tỷ lệ rút thận trọng hơn hoặc thu nhập phụ.', direction: 'down' },
    { group: 'Người có lương hưu bảo hiểm xã hội', effect: 'Nguồn thu ổn định giảm áp lực lên danh mục, cho phép phần tài sản chịu rủi ro hơn.', direction: 'up' },
    { group: 'Người cao tuổi chi phí y tế lớn', effect: 'Chi tiêu y tế không đều khiến rút cố định khó duy trì.', direction: 'down' },
  ],
  indicators: [
    { name: 'Lãi suất thực dài hạn (lãi suất trừ lạm phát)', why: 'Quyết định tỷ lệ rút bền vững gần như cơ học.', where: 'Ngân hàng Nhà nước (lãi suất), Cục Thống kê (CPI)' },
    { name: 'Mức sụt giảm tối đa của danh mục trong lịch sử', why: 'Cho thấy chuỗi lợi suất xấu có thể tệ cỡ nào với phân bổ của bạn.', where: 'Tự tính từ dữ liệu giá; quỹ mở, ETF' },
    { name: 'Tỷ lệ chi tiêu cố định/chi tiêu linh hoạt', why: 'Chi phí bắt buộc càng cao thì càng ít chỗ để cắt giảm khi thị trường xấu.', where: 'Tự lập ngân sách hộ gia đình' },
  ],
  counterpoints: [
    'Quy tắc 4% có thể quá thận trọng với người có kế hoạch linh hoạt hoặc thu nhập phụ; nhiều trường hợp lịch sử cho kết quả còn dư tiền cuối kỳ.',
    'Ngược lại, nếu lợi suất tương lai thấp hơn lịch sử Mỹ (định giá cao, lãi suất thấp), 4% có thể không đủ an toàn.',
    'Con số đơn lẻ che mất phân phối kết quả: nên nhìn xác suất cạn tiền qua nhiều kịch bản chứ không chỉ một tỷ lệ.',
  ],
  glossary: [
    { term: 'Tỷ lệ rút an toàn', definition: 'Tỷ lệ rút hằng năm từ danh mục mà theo lịch sử kỳ vọng không cạn tiền trong một thời hạn nhất định.' },
    { term: 'Rủi ro chuỗi lợi suất', definition: 'Rủi ro thứ tự lợi suất xấu xảy ra sớm khi đang rút tiền.' },
    { term: 'Nghiên cứu Trinity', definition: 'Nghiên cứu kiểm tra các tỷ lệ rút trên dữ liệu lịch sử cổ phiếu–trái phiếu Mỹ.' },
    { term: 'Quy tắc rút linh hoạt', definition: 'Điều chỉnh mức rút theo hiệu quả thị trường để giảm rủi ro cạn tiền.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'retirement-withdrawal-4-percent-rule-limits-q',
    question: 'Hai người đều nghỉ hưu với danh mục như nhau và rút 4%. Danh mục A gặp thị trường giảm mạnh năm đầu; B gặp thị trường tăng. Lợi suất bình quân 10 năm của hai bên bằng nhau. Điều gì đúng?',
    options: [
      { id: 'a', text: 'Hai người có kết cục như nhau vì lợi suất bình quân bằng nhau.', explain: 'Khi đang rút tiền, thứ tự lợi suất quan trọng; không chỉ trung bình.' },
      { id: 'b', text: 'A có nguy cơ cạn tiền cao hơn vì phải bán khi giá thấp (rủi ro chuỗi lợi suất).', correct: true, explain: 'Đúng. Bán ở giá thấp ở đầu kỳ làm mất phần phục hồi về sau.' },
      { id: 'c', text: 'B chắc chắn cạn tiền trước vì thị trường tăng làm chi tiêu tăng.', explain: 'Tăng giá của thị trường làm B thuận lợi hơn, không phải ngược lại.' },
    ],
  },
  sources: [
    { title: 'Investment Strategy: What Portfolio Withdrawal Rate Can You Live With? (nhắc Bengen 1994 và Trinity study)', publisher: 'CFA Institute – Enterprising Investor, 2013', url: 'https://rpc.cfainstitute.org/blogs/enterprising-investor/2013/investment-strategy-what-portfolio-withdrawal-rate-can-you-live-with' },
    { title: 'Retirement Savings: Choosing a Withdrawal Rate That Is Sustainable (Cooley, Hubbard, Walz; bản PDF)', publisher: 'Nghiên cứu gốc, bản sao PDF lưu tại everywhereonce.com', url: 'https://everywhereonce.com/wp-content/uploads/2011/10/trinity-study1.pdf' },
    { title: 'Trinity study', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Trinity_study' },
    { title: 'Asset allocation', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Asset_allocation' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 111,
}
