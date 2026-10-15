import type { Explainer } from '../../../shared/explainer'

export const freeCashFlowVsNetIncomeQuality: Explainer = {
  id: 'free-cash-flow-vs-net-income-quality',
  slug: 'free-cash-flow-vs-net-income-quality',
  question: 'Lợi nhuận và dòng tiền tự do khác nhau thế nào, và vì sao nó cho biết "chất lượng lợi nhuận"?',
  title: 'Lợi nhuận là ý kiến kế toán, dòng tiền tự do là tiền còn lại sau khi duy trì doanh nghiệp',
  topic: 'markets-investing',
  tldr: '**Lợi nhuận sau thuế** theo kế toán dồn tích có thể cao dù tiền chưa về (bán chịu, tồn kho tăng) hoặc chưa tính hết tiền phải chi (đầu tư tài sản cố định). **Dòng tiền tự do (FCF)** thường tính bằng dòng tiền từ hoạt động kinh doanh trừ chi đầu tư tài sản cố định, tức tiền còn lại cho cổ đông và chủ nợ. Khoảng cách kéo dài giữa hai số là tín hiệu về **chất lượng lợi nhuận**, nhưng doanh nghiệp đang mở rộng có thể có FCF thấp một cách hợp lý.',
  keyPoints: [
    'Theo CFI, **FCF = dòng tiền từ hoạt động kinh doanh (CFO) − chi đầu tư tài sản cố định (CapEx)**; nhiều định nghĩa khác tồn tại nên cần xem cách từng nguồn tính trước khi so sánh.',
    'Theo IAS 7, dòng tiền hoạt động có thể lập theo phương pháp gián tiếp, bắt đầu từ lợi nhuận rồi điều chỉnh các khoản không bằng tiền và thay đổi vốn lưu động; vì vậy chênh lệch lợi nhuận – CFO chủ yếu nằm ở **khấu hao** (cộng lại) và **thay đổi vốn lưu động** (phải thu, tồn kho, phải trả).',
    '**Ví dụ giả định (đơn vị: tỷ đồng):** lợi nhuận sau thuế 100; cộng khấu hao 30; trừ phần vốn lưu động tăng 40 (phải thu và tồn kho tăng) → CFO = 100 + 30 − 40 = 90. Chi đầu tư tài sản cố định 80 → FCF = 90 − 80 = 10. Lợi nhuận 100 nhưng chỉ còn 10 tiền tự do.',
    'Ví dụ trên chưa chắc xấu: nếu 80 chi đầu tư là mở rộng công suất sinh lời, FCF thấp là chi phí tăng trưởng. Cần phân biệt chi **duy trì** (giữ công suất hiện tại) và chi **tăng trưởng**.',
    'CFI cũng nêu chỉ số **FCF conversion** (FCF/EBITDA); mức khoảng 80% được xem là lành mạnh, nhưng chuẩn mực thay đổi theo ngành, mô hình kinh doanh và giai đoạn tăng trưởng, nên không có ngưỡng chung.',
  ],
  causalChain: [
    { from: 'Doanh nghiệp bán chịu nhiều hơn, tồn kho tăng', to: 'Lợi nhuận tăng nhưng CFO thấp hơn', mechanism: 'Doanh thu đã ghi nhận nhưng tiền chưa thu; hàng tồn kho là tiền đã chi nhưng chưa bán.' },
    { from: 'Chi đầu tư tài sản cố định lớn', to: 'FCF thấp dù CFO tốt', mechanism: 'CapEx không đi qua báo cáo lãi lỗ ngay (qua khấu hao dần), nhưng là tiền ra ngay lập tức.' },
    { from: 'FCF âm kéo dài', to: 'Phải vay hoặc phát hành thêm cổ phiếu', mechanism: 'Thiếu tiền tự tạo ra buộc doanh nghiệp huy động bên ngoài; lãi vay hoặc pha loãng làm giảm giá trị cổ đông.' },
    { from: 'FCF dương bền vững', to: 'Có thể trả cổ tức, mua lại cổ phiếu, giảm nợ', mechanism: 'Tiền thừa là nguồn thực sự để chia cho cổ đông và chủ nợ mà không phải huy động thêm.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cổ phiếu', effect: 'So lợi nhuận với dòng tiền hoạt động giúp phát hiện doanh nghiệp "lãi giấy" (bất động sản, xây dựng, thương mại chịu nhiều phải thu).', direction: 'up' },
    { group: 'Doanh nghiệp bất động sản, xây dựng', effect: 'Lợi nhuận ghi nhận theo tiến độ hoặc bàn giao có thể lệch xa dòng tiền thu bán hàng và chi phí đầu tư dự án; cần đọc kỹ cả hai.', direction: 'mixed' },
    { group: 'Ngân hàng và chủ nợ', effect: 'Khả năng trả nợ dựa vào dòng tiền hơn là lợi nhuận kế toán.', direction: 'mixed' },
    { group: 'Doanh nghiệp đang mở rộng', effect: 'FCF thấp hoặc âm là bình thường nếu đầu tư sinh lời; điều quan trọng là hiệu quả đầu tư và nguồn tài trợ.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'CFO / lợi nhuận sau thuế (nhiều năm)', why: 'Tỷ lệ thấp kéo dài cho thấy lợi nhuận kém chuyển thành tiền.', where: 'Báo cáo lưu chuyển tiền tệ và kết quả kinh doanh trên cổng công bố thông tin của HOSE, HNX' },
    { name: 'FCF theo năm và FCF trên cổ phiếu', why: 'Đo tiền tự do thực sự cho cổ đông.', where: 'Tính từ báo cáo lưu chuyển tiền tệ' },
    { name: 'Thay đổi phải thu, tồn kho trong báo cáo lưu chuyển tiền tệ', why: 'Nguyên nhân chính khiến CFO lệch khỏi lợi nhuận.', where: 'Phần điều chỉnh vốn lưu động trong báo cáo (phương pháp gián tiếp)' },
    { name: 'Chi đầu tư tài sản cố định so với khấu hao', why: 'CapEx lớn hơn khấu hao liên tục cho thấy mở rộng; nhỏ hơn có thể là thiếu tái đầu tư.', where: 'Báo cáo lưu chuyển tiền tệ, thuyết minh tài sản cố định' },
  ],
  counterpoints: [
    'FCF biến động theo thời điểm chi đầu tư lớn; nên xem trung bình nhiều năm thay vì một năm.',
    'Doanh nghiệp có thể làm FCF "đẹp" bằng cách kéo dài thời gian trả nhà cung cấp hoặc hoãn bảo trì; cũng cần xem vốn lưu động và CapEx duy trì.',
    'Lợi nhuận vẫn có giá trị: nó phản ánh hiệu quả kinh tế dài hạn khi đã trừ khấu hao; hai chỉ tiêu bổ sung nhau, không thay thế nhau.',
  ],
  glossary: [
    { term: 'Dòng tiền tự do (FCF)', definition: 'Dòng tiền từ hoạt động kinh doanh trừ chi đầu tư tài sản cố định; tiền còn lại sau khi duy trì và mở rộng hoạt động.' },
    { term: 'CapEx', definition: 'Chi đầu tư mua sắm, xây dựng tài sản cố định.' },
    { term: 'Vốn lưu động', definition: 'Tài sản ngắn hạn trừ nợ ngắn hạn, gồm phải thu, tồn kho và phải trả.' },
    { term: 'Chất lượng lợi nhuận', definition: 'Mức độ lợi nhuận kế toán chuyển hóa thành tiền và lặp lại được.' },
    { term: 'FCF conversion', definition: 'Tỷ lệ FCF trên EBITDA, đo khả năng chuyển lợi nhuận thành tiền tự do.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'free-cash-flow-vs-net-income-quality-q',
    question: 'Công ty A lãi 100 tỷ, CFO 20 tỷ, CapEx 15 tỷ trong ba năm liên tiếp; phải thu tăng đều. Đánh giá nào hợp lý?',
    options: [
      { id: 'a', text: 'Công ty rất tốt vì lãi đều 100 tỷ.', explain: 'Lãi kế toán lớn nhưng CFO thấp; cần xem tiền thật.' },
      { id: 'b', text: 'Chất lượng lợi nhuận đáng nghi: lãi không chuyển thành tiền, phải thu có thể là nguyên nhân; cần kiểm tra thuyết minh và khách hàng.', correct: true, explain: 'Đúng. CFO thấp so với lãi trong nhiều năm cùng phải thu tăng là cảnh báo kinh điển.' },
      { id: 'c', text: 'FCF dương nhỏ nên công ty chắc chắn gian lận.', explain: 'Không thể kết luận gian lận; đó chỉ là dấu hiệu cần kiểm tra thêm.' },
    ],
  },
  sources: [
    { title: 'FCF conversion: meaning, formula and example', publisher: 'Corporate Finance Institute', url: 'https://corporatefinanceinstitute.com/resources/valuation/free-cash-flow/' },
    { title: 'IAS 7 Statement of Cash Flows', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/' },
    { title: 'Free cash flow', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Free_cash_flow' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 72,
}
