import type { Explainer } from '../../../shared/explainer'

export const totalCompensationSalaryReading: Explainer = {
  id: 'total-compensation-salary-reading',
  slug: 'total-compensation-salary-reading',
  question: 'Làm sao đọc đúng "tổng thu nhập" của một công việc: lương, thưởng, quyền lợi và thuế?',
  title: 'Đọc tổng thu nhập: lương, thưởng, quyền lợi và phần thực nhận',
  topic: 'personal-finance',
  tldr: 'Con số lương trên thư mời việc chỉ là một phần. **Tổng thu nhập** gồm lương cơ bản, thưởng (cố định hay phụ thuộc kết quả), phụ cấp, quyền lợi bằng hiện vật hoặc bảo hiểm, và phần **trừ đi** (bảo hiểm bắt buộc, thuế). So hai lời mời việc phải so cùng một cách tính: gộp hay ròng, bảo đảm hay có điều kiện, theo tháng hay theo năm.',
  keyPoints: [
    'Ở Mỹ, theo số liệu Employer Costs for Employee Compensation của Cục Thống kê Lao động (BLS) công bố 9/9/2026 cho tháng 6/2026: trong khu vực tư nhân, lương và tiền công chiếm **70,0%** tổng chi phí nhân công trên mỗi giờ làm việc (32,82 USD trên 46,89 USD), quyền lợi chiếm 30,0% (14,07 USD). Đây là số liệu Mỹ về chi phí doanh nghiệp bỏ ra, không phải cơ cấu thu nhập ở Việt Nam, nhưng minh họa rằng quyền lợi có thể là phần đáng kể.',
    'Quyền lợi phi lương (employee benefits) rất đa dạng: bảo hiểm sức khỏe, hưu trí, nghỉ phép có lương, hỗ trợ học tập, trợ cấp nhà ở, chia lợi nhuận và các phúc lợi khác; có thể được đổi lấy lương tiền mặt theo cơ chế "đổi lương lấy quyền lợi".',
    'Cần phân biệt **bảo đảm** và **có điều kiện**: thưởng cố định tháng 13, thưởng theo KPI, cổ phần/quyền chọn có lịch vesting; phần có điều kiện nên được ước tính theo kịch bản thấp-trung bình-cao, không tính theo mức tối đa.',
    'Phải so cùng cơ sở: lương gộp (trước trừ các khoản bắt buộc) với lương ròng (thực nhận). Mức trích bảo hiểm, thuế thu nhập và các điều kiện cụ thể tại Việt Nam thay đổi theo quy định và hoàn cảnh cá nhân; bài này không nêu tỷ lệ cụ thể, hãy đối chiếu quy định hiện hành hoặc phiếu lương.',
    'So sánh bằng **thu nhập thực nhận cả năm** cộng giá trị quyền lợi bạn thực sự dùng, trừ chi phí đi lại, giờ làm thêm và chi phí cơ hội; hai lời mời cùng "lương 30 triệu" có thể khác nhau nhiều.',
  ],
  causalChain: [
    { from: 'Doanh nghiệp đưa ra gói gồm lương, thưởng và quyền lợi', to: 'Tổng chi phí nhân công cao hơn con số lương', mechanism: 'Chi phí doanh nghiệp bao gồm cả quyền lợi và các khoản bắt buộc nên lớn hơn lương nhận được; người lao động chỉ nhận một phần dưới dạng tiền.' },
    { from: 'Một phần thu nhập là có điều kiện (thưởng KPI, cổ phần vesting)', to: 'Thu nhập thực tế biến động so với lời mời', mechanism: 'Kết quả kinh doanh, đánh giá cá nhân và thời gian ở lại công ty quyết định bạn có nhận được khoản này hay không.' },
    { from: 'Các khoản trừ bắt buộc và thuế', to: 'Lương thực nhận thấp hơn lương gộp', mechanism: 'Khoản trích bảo hiểm và thuế thu nhập khấu trừ trước khi chuyển tiền; mức khác nhau theo quy định và hoàn cảnh cá nhân.' },
    { from: 'Quyền lợi có giá trị sử dụng khác nhau với từng người', to: 'Giá trị thực của gói thay đổi', mechanism: 'Bảo hiểm sức khỏe cho cả gia đình có giá trị cao với người có con nhỏ; hỗ trợ đi lại không giá trị với người làm từ xa.' },
    { from: 'Tính cả chi phí đi lại, giờ làm và cơ hội phát triển', to: 'So sánh thực chất giữa các lời mời', mechanism: 'Một lời mời lương cao nhưng đi lại xa và giờ làm kéo dài có thể kém hơn khi quy ra thu nhập trên giờ.' },
  ],
  vietnamImpact: [
    { group: 'Người đi làm đang so sánh lời mời việc', effect: 'Cần yêu cầu bảng chi tiết: lương cơ bản, thưởng bảo đảm, thưởng có điều kiện, phụ cấp, quyền lợi và điều kiện áp dụng; so sánh bằng thu nhập ròng cả năm.', direction: 'up' },
    { group: 'Người quen nghe "lương gộp" hoặc "lương net"', effect: 'Hai cách gọi khác nhau về phần khấu trừ; nhầm lẫn dễ dẫn tới kỳ vọng sai về số nhận về.', direction: 'mixed' },
    { group: 'Doanh nghiệp tuyển dụng', effect: 'Gói quyền lợi giúp cạnh tranh nhân tài mà không chỉ tăng lương cơ bản, nhưng cần minh bạch điều kiện để tránh hiểu lầm.', direction: 'mixed' },
    { group: 'Người nhận cổ phần/quyền chọn của công ty', effect: 'Giá trị phụ thuộc kết quả công ty và lịch vesting; không nên tính như tiền mặt bảo đảm.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Phiếu lương và bảng kê các khoản khấu trừ', why: 'Cho thấy chênh lệch giữa lương gộp và thực nhận, giúp kiểm tra tính chính xác.', where: 'Phòng nhân sự/kế toán của công ty; hợp đồng lao động' },
    { name: 'Thu nhập bình quân ngành và vị trí', why: 'Để biết mức lời mời có cạnh tranh hay không.', where: 'Cục Thống kê (nso.gov.vn) cho thu nhập bình quân lao động; khảo sát lương của các đơn vị tuyển dụng (nên đối chiếu nhiều nguồn)' },
    { name: 'CPI (lạm phát)', why: 'Giúp quy lương danh nghĩa về sức mua thực khi so mức tăng lương theo năm.', where: 'Thông cáo CPI hằng tháng của Cục Thống kê' },
    { name: 'Tỷ trọng thu nhập có điều kiện', why: 'Phần thưởng/cổ phần càng lớn thì biến động thu nhập càng cao.', where: 'Tự tính từ thư mời việc và chính sách thưởng' },
  ],
  counterpoints: [
    'Số liệu BLS là chi phí nhân công trung bình của Mỹ, gồm quyền lợi bắt buộc theo luật (như bảo hiểm xã hội) và cơ cấu khác Việt Nam; không dùng làm chuẩn cho gói lương ở nước ta.',
    'Không phải quyền lợi nào cũng đáng tiền: nếu bạn không dùng, giá trị thực với bạn thấp hơn chi phí doanh nghiệp bỏ ra.',
    'Mức lương cao hơn chưa chắc tốt hơn nếu đi kèm rủi ro mất việc, giờ làm kéo dài hoặc cơ hội phát triển thấp; tổng thu nhập tiền tệ chỉ là một chiều của quyết định nghề nghiệp.',
  ],
  glossary: [
    { term: 'Tổng thu nhập (total compensation)', definition: 'Toàn bộ giá trị người lao động nhận được: lương, thưởng, phụ cấp và quyền lợi.' },
    { term: 'Lương gộp / lương ròng', definition: 'Lương trước và sau khi trừ các khoản khấu trừ bắt buộc.' },
    { term: 'Quyền lợi phi lương', definition: 'Phần thù lao ngoài lương, như bảo hiểm, nghỉ phép, hỗ trợ học tập.' },
    { term: 'Vesting', definition: 'Lịch trình trong đó quyền sở hữu cổ phần hoặc quyền chọn được chuyển dần cho người lao động.' },
    { term: 'KPI', definition: 'Chỉ tiêu đo hiệu quả công việc, thường gắn với thưởng.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'total-compensation-salary-reading-q',
    question: 'Lời mời A: lương gộp cao nhưng thưởng KPI chiếm 40% thu nhập năm; lời mời B: lương gộp thấp hơn một chút, thưởng cố định tháng 13 và bảo hiểm sức khỏe cho gia đình. Cách so sánh hợp lý nhất?',
    options: [
      { id: 'a', text: 'Chọn A vì lương gộp cao hơn.', explain: 'Lương gộp chưa phản ánh phần có điều kiện, phần khấu trừ và quyền lợi. So sánh một dòng số có thể sai.' },
      { id: 'b', text: 'Quy cả hai về thu nhập thực nhận cả năm theo kịch bản, tách phần bảo đảm với phần có điều kiện và cộng giá trị quyền lợi bạn dùng.', correct: true, explain: 'Đúng. So sánh cùng cơ sở và có kịch bản cho phần không chắc chắn giúp quyết định sát thực tế hơn.' },
      { id: 'c', text: 'Chọn B vì quyền lợi luôn đáng giá hơn tiền.', explain: 'Giá trị quyền lợi phụ thuộc nhu cầu của bạn; không nên mặc định quyền lợi hơn tiền mặt.' },
    ],
  },
  sources: [
    { title: 'Employer Costs for Employee Compensation – June 2026', publisher: 'U.S. Bureau of Labor Statistics', url: 'https://www.bls.gov/news.release/ecec.nr0.htm' },
    { title: 'Employee benefits', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Employee_benefits' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 188,
}
