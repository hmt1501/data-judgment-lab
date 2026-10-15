import type { Explainer } from '../../../shared/explainer'

export const accrualsRatioEarningsQuality: Explainer = {
  id: 'accruals-ratio-earnings-quality',
  slug: 'accruals-ratio-earnings-quality',
  question: 'Chỉ số dồn tích (accruals ratio) cho biết gì về chất lượng lợi nhuận?',
  title: 'Chỉ số dồn tích: lợi nhuận có đi kèm tiền thật không?',
  topic: 'markets-investing',
  tldr: 'Kế toán dồn tích ghi nhận doanh thu và chi phí khi **phát sinh**, không phải khi thu hay trả tiền, nên lợi nhuận có thể tách khỏi dòng tiền. Chỉ số dồn tích đo phần lợi nhuận **không đi kèm tiền** so với quy mô tài sản. Chỉ số cao kéo dài là một dấu hiệu cần xem kỹ chất lượng lợi nhuận, không phải bằng chứng gian lận.',
  keyPoints: [
    'Theo Wikipedia ("Accrual", đọc 15/10/2026): kế toán dồn tích ghi nhận doanh thu và chi phí khi được tạo ra hoặc phát sinh, không nhất thiết khi tiền thay đổi tay; ví dụ giao hàng năm nay nhưng năm sau mới thu tiền thì doanh thu vẫn thuộc năm giao hàng.',
    'Cách tính phổ biến (một biến thể, không phải chuẩn bắt buộc): **(Lợi nhuận sau thuế − Dòng tiền từ hoạt động kinh doanh) / Tổng tài sản bình quân**. Dồn tích dương và lớn nghĩa là lợi nhuận kế toán vượt dòng tiền thực.',
    'Theo Wikipedia ("Earnings quality"): chất lượng lợi nhuận là mức lợi nhuận báo cáo dự báo được dòng tiền tương lai; chỉ báo quan trọng là lợi nhuận có là ước lượng tốt của dòng tiền không, và mức độ dồn tích tùy ý. Dấu hiệu cảnh báo gồm ghi nhận doanh thu quá sớm, đẩy chi phí sang kỳ khác, không ghi nhận hoặc giảm sai nợ phải trả.',
    'Nghiên cứu của Richard Sloan (The Accounting Review, 7/1996, bản tóm tắt của chính bài báo) cho thấy mức độ lợi nhuận hiện tại kéo dài sang tương lai phụ thuộc vào tỷ lệ giữa phần dòng tiền và phần dồn tích; và giá cổ phiếu hành xử như thể nhà đầu tư "bị ám ảnh" (fixate) vào con số lợi nhuận, chưa phản ánh đầy đủ thông tin trong hai thành phần này cho đến khi nó thể hiện ở lợi nhuận tương lai. Đây là kết quả của một nghiên cứu cụ thể ở một giai đoạn; không nên dùng như quy tắc giao dịch.',
    'Không phải dồn tích cao nào cũng xấu: công ty tăng trưởng nhanh tăng hàng tồn kho và khoản phải thu một cách hợp lý; vấn đề là dồn tích kéo dài và tăng nhanh hơn doanh thu mà không có lời giải thích.',
  ],
  causalChain: [
    { from: 'Doanh nghiệp ghi nhận doanh thu khi giao hàng nhưng chưa thu tiền', to: 'Lợi nhuận tăng nhưng dòng tiền chưa tăng theo', mechanism: 'Khoản phải thu tăng; dòng tiền hoạt động nhỏ hơn lợi nhuận kế toán, làm dồn tích dương.' },
    { from: 'Dồn tích dương lớn và kéo dài', to: 'Lợi nhuận kém bền hơn', mechanism: 'Phần dồn tích dựa trên ước tính (dự phòng, khấu hao, ghi nhận doanh thu) dễ đảo chiều ở kỳ sau, trong khi dòng tiền khó "dựng" hơn.' },
    { from: 'Dồn tích đảo chiều', to: 'Lợi nhuận kỳ sau thất vọng', mechanism: 'Khoản phải thu không thu được hoặc chi phí bị hoãn nay phải ghi nhận, kéo lợi nhuận xuống.' },
    { from: 'Nhà đầu tư chỉ nhìn lợi nhuận báo cáo', to: 'Giá cổ phiếu phản ánh sai bản chất', mechanism: 'Nếu giá phản ứng theo lợi nhuận tổng mà bỏ qua thành phần dồn tích, điều chỉnh sau đó có thể làm giá giảm (đây là cách giải thích của nghiên cứu về "dị thường dồn tích", vẫn còn tranh luận).' },
    { from: 'Đối chiếu lợi nhuận với dòng tiền hoạt động qua nhiều năm', to: 'Phát hiện sớm sự tách rời bất thường', mechanism: 'Chênh lệch kéo dài giữa lợi nhuận và dòng tiền là tín hiệu để đọc kỹ thuyết minh về doanh thu, phải thu, hàng tồn.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cổ phiếu trên sàn Việt Nam', effect: 'Có thể dùng chỉ số làm bước sàng lọc; lợi nhuận tăng mà dòng tiền kinh doanh liên tục âm là lý do đọc kỹ báo cáo.', direction: 'up' },
    { group: 'Doanh nghiệp bất động sản và xây dựng', effect: 'Ghi nhận doanh thu theo tiến độ, ứng trước khách hàng và hàng tồn kho lớn khiến dồn tích biến động theo chu kỳ dự án; cần đọc theo đặc thù ngành.', direction: 'mixed' },
    { group: 'Ngân hàng cho vay doanh nghiệp', effect: 'Dòng tiền thực mới trả được nợ; dồn tích cao làm giảm độ tin cậy của lợi nhuận khi thẩm định.', direction: 'down' },
    { group: 'Doanh nghiệp tăng trưởng nhanh', effect: 'Dồn tích tăng là tự nhiên khi mở rộng; cần giải thích để nhà đầu tư không nhầm với dấu hiệu xấu.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Lợi nhuận sau thuế so với dòng tiền hoạt động kinh doanh', why: 'Phép đối chiếu cơ bản nhất giữa lợi nhuận và tiền.', where: 'Báo cáo kết quả kinh doanh và báo cáo lưu chuyển tiền tệ của doanh nghiệp' },
    { name: 'Chỉ số dồn tích (theo nhiều năm)', why: 'Giá trị cao kéo dài đáng chú ý hơn một năm đột biến.', where: 'Tự tính từ báo cáo tài chính; một số nền tảng dữ liệu cũng cung cấp' },
    { name: 'Số ngày phải thu và số ngày tồn kho', why: 'Phải thu và tồn kho tăng nhanh hơn doanh thu là nguồn gốc dồn tích phổ biến.', where: 'Bảng cân đối kế toán và thuyết minh' },
    { name: 'Ý kiến kiểm toán và nhấn mạnh về doanh thu', why: 'Cho biết điểm kiểm toán viên lưu ý về ước tính kế toán.', where: 'Báo cáo kiểm toán đính kèm báo cáo tài chính' },
  ],
  counterpoints: [
    'Nhiều biến thể công thức; không có ngưỡng "cảnh báo" chuẩn nào được kế toán hay nguồn trong bài quy định; nên so với cùng ngành và với lịch sử của chính công ty.',
    'Dồn tích khác nhau theo ngành (bán lẻ, xây dựng, phần mềm) và giai đoạn (tăng trưởng, suy thoái); so sánh thô giữa ngành có thể sai.',
    'Kết quả của Sloan là bằng chứng lịch sử trong một mẫu và giai đoạn nhất định, bài này chưa kiểm chứng hiệu ứng còn đúng hiện nay; chỉ số hữu ích để đặt câu hỏi, không phải tín hiệu mua bán.',
  ],
  glossary: [
    { term: 'Dồn tích', definition: 'Khoản ghi nhận kế toán khi phát sinh, không đồng thời với thu hay chi tiền.' },
    { term: 'Dòng tiền hoạt động kinh doanh (CFO)', definition: 'Tiền thực thu về từ hoạt động chính sau khi trừ tiền chi cho hoạt động đó.' },
    { term: 'Chất lượng lợi nhuận', definition: 'Mức độ lợi nhuận báo cáo phản ánh kết quả kinh tế bền vững và chuyển thành tiền.' },
    { term: 'Khoản phải thu', definition: 'Tiền khách hàng còn nợ doanh nghiệp.' },
    { term: 'Dồn tích tùy ý', definition: 'Phần dồn tích phụ thuộc quyết định và ước tính của ban quản lý.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'accruals-ratio-earnings-quality-q',
    question: 'Ví dụ giả định: công ty A có lợi nhuận sau thuế 100, dòng tiền hoạt động 40, tổng tài sản bình quân 500. Công ty B có lợi nhuận 100, dòng tiền hoạt động 110, tài sản bình quân 500. Cách đọc nào hợp lý?',
    options: [
      { id: 'a', text: 'Hai công ty như nhau vì cùng lợi nhuận.', explain: 'Cùng lợi nhuận nhưng dòng tiền khác xa nhau nên chất lượng lợi nhuận khác nhau.' },
      { id: 'b', text: 'A có dồn tích (100 − 40)/500 = 12%, B có (100 − 110)/500 = −2%; A cần xem kỹ vì lợi nhuận kém được tiền hỗ trợ.', correct: true, explain: 'Đúng. Đây là cách đọc ban đầu: A cần giải thích (phải thu tăng, tồn kho tăng, ghi nhận doanh thu sớm?), B lợi nhuận có tiền đi kèm. Vẫn phải xem ngữ cảnh ngành.' },
      { id: 'c', text: 'B đáng ngờ hơn vì dòng tiền cao hơn lợi nhuận.', explain: 'Dòng tiền vượt lợi nhuận có thể do khấu hao lớn hoặc nhận tiền trước; chưa phải dấu hiệu xấu, nhưng cũng cần hiểu nguyên nhân.' },
    ],
  },
  sources: [
    { title: 'Do Stock Prices Fully Reflect Information in Accruals and Cash Flows About Future Earnings?', publisher: 'R. G. Sloan, The Accounting Review 71(3), 1996 (bản lưu JSTOR)', url: 'https://www.cuhk.edu.hk/acy2/workshop/June2009Wasley/1996TAR).pdf' },
    { title: 'Earnings quality', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Earnings_quality' },
    { title: 'Accrual', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Accrual' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 190,
}
