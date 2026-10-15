import type { Explainer } from '../../../shared/explainer'

export const vietnamLaborProductivityWageGrowth: Explainer = {
  id: 'vietnam-labor-productivity-wage-growth',
  slug: 'vietnam-labor-productivity-wage-growth',
  question: 'Năng suất lao động liên quan thế nào tới tiền lương, và đọc hai chỉ số này ra sao?',
  title: 'Lương tăng bền vững cần năng suất tăng: hãy so tốc độ tăng của hai số, cả hai đã loại giá',
  topic: 'vietnam-economy',
  tldr: 'Năng suất lao động là sản lượng (GDP) tính trên mỗi lao động hoặc mỗi giờ làm. Theo Cục Thống kê (5/1/2026), năng suất lao động toàn nền kinh tế năm 2025 ước tăng **6,83%**. Lương thực tăng bền vững khi không vượt nhiều quá năng suất; nhưng chia thành quả giữa lương và lợi nhuận còn phụ thuộc thị trường lao động và thể chế.',
  keyPoints: [
    'Theo Cục Thống kê (thông cáo 5/1/2026): tốc độ tăng năng suất lao động năm 2025 **ước 6,83%**, vượt mục tiêu của Nghị quyết 01/NQ-CP; cơ quan này nêu nguyên nhân gồm trình độ lao động cải thiện, tăng trưởng khá và quy mô kinh tế mở rộng giúp dùng đầu vào hiệu quả hơn.',
    'Năng suất lao động thường tính = GDP ÷ số lao động (hoặc giờ làm). Có hai cách đọc: **mức** (theo giá hiện hành, bằng triệu đồng hoặc USD/lao động) và **tốc độ tăng** (theo giá so sánh); để so qua thời gian phải dùng tốc độ tăng theo giá so sánh.',
    'Năng suất tăng có thể đến từ **chuyển dịch lao động** (từ nông nghiệp sang công nghiệp, dịch vụ), từ **tăng vốn trên lao động** hoặc từ **tiến bộ công nghệ, quản trị**; ba nguồn này có ý nghĩa khác nhau về độ bền.',
    'So sánh lương và năng suất cần cùng bộ giá: lương thực = lương danh nghĩa loại lạm phát; năng suất đo theo giá so sánh. Lương danh nghĩa tăng nhanh hơn năng suất thường kéo theo chi phí lao động đơn vị tăng.',
    'Lao động phi chính thức chiếm một phần đáng kể việc làm ở Việt Nam (tỷ lệ cụ thể xem điều tra lao động việc làm của Cục Thống kê; bài chưa trích số), nên năng suất trung bình hòa lẫn khu vực có năng suất rất khác nhau.',
  ],
  causalChain: [
    { from: 'Đầu tư vốn, công nghệ, kỹ năng lao động tăng', to: 'Sản lượng trên mỗi lao động tăng', mechanism: 'Mỗi lao động dùng máy móc tốt hơn và kỹ năng cao hơn tạo ra nhiều giá trị hơn cùng một thời gian.' },
    { from: 'Chuyển lao động từ khu vực năng suất thấp sang cao', to: 'Năng suất bình quân toàn nền kinh tế tăng', mechanism: 'Ngay cả khi từng ngành không tiến bộ, cơ cấu thay đổi cũng nâng mức trung bình.' },
    { from: 'Năng suất tăng bền vững', to: 'Dư địa tăng lương thực không gây lạm phát chi phí', mechanism: 'Doanh nghiệp có thêm sản lượng trên mỗi đồng chi phí lao động nên có thể trả lương cao hơn mà biên lợi nhuận ổn định.' },
    { from: 'Lương tăng nhanh hơn năng suất', to: 'Chi phí lao động đơn vị tăng', mechanism: 'Doanh nghiệp tăng giá, giảm biên hoặc dịch chuyển sản xuất; với ngành xuất khẩu giá nhân công trở thành yếu tố cạnh tranh.' },
  ],
  vietnamImpact: [
    { group: 'Người lao động', effect: 'Tăng lương thực bền vững cần năng suất tăng; đào tạo kỹ năng là cách tăng cả năng suất và thu nhập.', direction: 'up' },
    { group: 'Doanh nghiệp xuất khẩu thâm dụng lao động', effect: 'Lương danh nghĩa tăng nhanh hơn năng suất làm giảm lợi thế chi phí so với nước láng giềng; cần đầu tư tự động hóa.', direction: 'mixed' },
    { group: 'Nhà hoạch định chính sách', effect: 'Mục tiêu năng suất lao động là chỉ tiêu điều hành; đọc cùng cơ cấu lao động và tỷ lệ lao động qua đào tạo.', direction: 'up' },
    { group: 'Nhà đầu tư', effect: 'Chi phí lao động đơn vị (lương ÷ năng suất) quan trọng hơn mức lương tuyệt đối khi so sánh sức cạnh tranh.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tốc độ tăng năng suất lao động (giá so sánh)', why: 'Thước đo hiệu quả sử dụng lao động theo thời gian.', where: 'Thông cáo năm của Cục Thống kê (nso.gov.vn); Niên giám thống kê' },
    { name: 'Thu nhập bình quân người lao động và lương thực (đã loại CPI)', why: 'Đối chiếu với năng suất để thấy lương có theo kịp không.', where: 'Cục Thống kê (điều tra lao động việc làm); BHXH Việt Nam' },
    { name: 'Chi phí lao động đơn vị', why: 'Kết hợp lương và năng suất để so sức cạnh tranh.', where: 'Tự tính từ số liệu trên; tổ chức quốc tế như ILO, APO' },
  ],
  counterpoints: [
    'Năng suất trung bình có thể tăng do cơ cấu chuyển dịch mà lương nhiều nhóm vẫn đứng yên, khi thị trường lao động cho phép doanh nghiệp giữ phần lớn thành quả.',
    'Năng suất theo đầu người không phản ánh số giờ làm; lao động làm thêm giờ nhiều có thể làm năng suất theo giờ thấp hơn con số theo đầu người.',
    'Số liệu năng suất là ước tính và phụ thuộc cách đo số lao động, nhất là khu vực phi chính thức.',
  ],
  glossary: [
    { term: 'Năng suất lao động', definition: 'Sản lượng (GDP) tính trên một lao động hoặc một giờ làm việc.' },
    { term: 'Chi phí lao động đơn vị', definition: 'Chi phí lao động trên một đơn vị sản lượng; tăng khi lương tăng nhanh hơn năng suất.' },
    { term: 'Lương thực', definition: 'Lương danh nghĩa đã loại bỏ ảnh hưởng của lạm phát.' },
    { term: 'Chuyển dịch cơ cấu lao động', definition: 'Lao động di chuyển giữa các ngành hoặc khu vực có năng suất khác nhau.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-labor-productivity-wage-growth-q',
    question: 'Lương danh nghĩa tăng 10%, lạm phát 4%, năng suất lao động (giá so sánh) tăng 5% (ví dụ giả định). Kết luận nào hợp lý?',
    options: [
      { id: 'a', text: 'Lương thực tăng khoảng 6% và vượt tăng năng suất; chi phí lao động đơn vị tăng.', correct: true, explain: 'Lương thực ≈ 10% − 4% = 6% (xấp xỉ), cao hơn năng suất 5%; lương danh nghĩa 10% so với năng suất 5% cho chi phí lao động đơn vị tăng khoảng 5%.' },
      { id: 'b', text: 'Lương tăng 10% là hoàn toàn nhờ năng suất.', explain: 'Năng suất chỉ tăng 5%; phần còn lại đến từ thị trường lao động hoặc giá.' },
      { id: 'c', text: 'Lương thực giảm vì lạm phát.', explain: 'Lương tăng nhanh hơn lạm phát nên lương thực tăng.' },
    ],
  },
  sources: [
    { title: 'Một số nét chính tình hình kinh tế – xã hội quý IV và năm 2025', publisher: 'Cục Thống kê (nso.gov.vn, 5/1/2026)', url: 'https://www.nso.gov.vn/bai-top/2026/01/mot-so-net-chinh-tinh-hinh-kinh-te-xa-hoi-quy-iv-va-nam-2025/' },
    { title: 'Workforce productivity', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Labour_productivity' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 91,
}
