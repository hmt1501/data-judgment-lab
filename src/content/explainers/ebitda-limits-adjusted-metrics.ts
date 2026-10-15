import type { Explainer } from '../../../shared/explainer'

export const ebitdaLimitsAdjustedMetrics: Explainer = {
  id: 'ebitda-limits-adjusted-metrics',
  slug: 'ebitda-limits-adjusted-metrics',
  question: 'EBITDA và các chỉ tiêu "điều chỉnh" có giới hạn gì, nên đọc thế nào?',
  title: 'EBITDA bỏ qua chi phí thật: lãi vay, thuế, và tiền phải tái đầu tư để giữ doanh nghiệp chạy',
  topic: 'markets-investing',
  tldr: '**EBITDA** là lợi nhuận trước lãi vay, thuế, khấu hao và phân bổ; hữu ích để so sánh khả năng sinh lời hoạt động giữa các công ty khác cấu trúc vốn và chính sách khấu hao. Nhưng nó **không phải dòng tiền** và bỏ qua chi đầu tư tài sản cố định, lãi vay, thuế. Các chỉ tiêu "điều chỉnh" (adjusted EBITDA…) do ban quản lý tự định nghĩa nên cần đọc phần đối chiếu: điều chỉnh những gì, có lặp lại hằng năm không.',
  keyPoints: [
    'EBITDA = EBIT + khấu hao và phân bổ (theo định nghĩa phổ biến, chẳng hạn trong CFI); nó **không phải chỉ tiêu bắt buộc theo chuẩn mực kế toán** nên các công ty có thể tính khác nhau.',
    '**Ví dụ giả định (tỷ đồng):** EBITDA 200; chi đầu tư tài sản cố định 150; lãi vay 60; thuế 20 → 200 − 150 − 60 − 20 = **−30**. Công ty trông có EBITDA lớn nhưng thực tế tiêu tiền. Đó là lý do cần đọc EBITDA cùng dòng tiền tự do, không đứng riêng.',
    'Chỉ tiêu do ban quản lý tự đưa ra, không được định nghĩa trong chuẩn mực báo cáo, thường gọi là **chỉ tiêu hiệu quả thay thế** (APM). Chuẩn mới **IFRS 18** (hiệu lực cho kỳ báo cáo năm bắt đầu từ 1/1/2027, được phép áp dụng sớm) yêu cầu công bố các **management-defined performance measures** — các tổng phụ thu nhập và chi phí không được IFRS quy định, dùng trong truyền thông công khai — kèm đối chiếu; IFRS 18 cũng bổ sung tổng phụ "lợi nhuận hoạt động".',
    '"Điều chỉnh" thường loại các khoản coi là *một lần*: chi phí tái cấu trúc, thoái vốn, trích lập dự phòng, chi phí cổ phiếu thưởng. Dấu hiệu cần cẩn trọng: khoản "một lần" xuất hiện **năm nào cũng có**, hoặc chỉ loại khoản lỗ mà không loại khoản lãi bất thường.',
    'EBITDA đặc biệt dễ gây hiểu lầm ở ngành **nặng tài sản cố định** (viễn thông, năng lượng, vận tải, bất động sản cho thuê) vì khấu hao là chi phí thật phản ánh việc tài sản hao mòn cần thay thế.',
  ],
  causalChain: [
    { from: 'Công ty đầu tư nhiều tài sản cố định, khấu hao lớn', to: 'EBITDA cao hơn nhiều so với lợi nhuận', mechanism: 'Khấu hao bị loại khỏi EBITDA dù phản ánh chi phí thay thế tài sản về lâu dài.' },
    { from: 'Công ty vay nợ nhiều', to: 'EBITDA không phản ánh gánh nặng lãi vay', mechanism: 'Lãi vay nằm dưới EBITDA; hai công ty cùng EBITDA nhưng nợ khác nhau có sức khỏe khác nhau.' },
    { from: 'Ban quản lý điều chỉnh để loại bớt chi phí', to: 'Chỉ tiêu điều chỉnh đẹp hơn lợi nhuận theo chuẩn mực', mechanism: 'Mỗi khoản điều chỉnh làm tăng chỉ tiêu; không có quy tắc chung nên dễ lựa chọn có lợi.' },
    { from: 'Chuẩn mực yêu cầu công bố định nghĩa và đối chiếu', to: 'Nhà đầu tư kiểm tra được điều chỉnh những gì', mechanism: 'Bảng đối chiếu từ lợi nhuận theo chuẩn mực sang chỉ tiêu điều chỉnh là nơi lộ rõ mức độ "làm đẹp".' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cổ phiếu', effect: 'Nên đối chiếu EBITDA với dòng tiền hoạt động, nợ vay và lãi vay, đặc biệt ở doanh nghiệp bất động sản, hạ tầng, năng lượng.', direction: 'up' },
    { group: 'Chủ nợ và trái chủ', effect: 'Điều khoản vay hoặc trái phiếu thường dùng tỷ lệ nợ/EBITDA; EBITDA định nghĩa lỏng có thể làm chỉ số trông an toàn hơn thực tế.', direction: 'mixed' },
    { group: 'Doanh nghiệp phát hành', effect: 'Công bố rõ định nghĩa và đối chiếu giúp tăng niềm tin; chuyển sang IFRS sẽ đòi hỏi công bố chỉ tiêu quản lý chặt hơn.', direction: 'mixed' },
    { group: 'Cơ quan quản lý và kiểm toán', effect: 'Cần theo dõi cách trình bày chỉ tiêu phi chuẩn mực để tránh gây hiểu nhầm cho nhà đầu tư.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Nợ ròng / EBITDA và EBITDA / lãi vay', why: 'Hai tỷ lệ cơ bản về sức chịu nợ; kiểm tra định nghĩa EBITDA trước khi so sánh.', where: 'Tính từ báo cáo tài chính; thuyết minh vay' },
    { name: 'EBITDA trừ CapEx, hay FCF', why: 'Cho thấy tiền còn lại sau đầu tư; so với EBITDA để biết mức "rò" dòng tiền.', where: 'Báo cáo lưu chuyển tiền tệ' },
    { name: 'Bảng đối chiếu chỉ tiêu điều chỉnh với lợi nhuận theo chuẩn mực', why: 'Cho thấy các khoản điều chỉnh, có lặp lại hay không.', where: 'Báo cáo thường niên, công bố kết quả kinh doanh của doanh nghiệp' },
    { name: 'Chênh lệch EBITDA giữa các năm sau khi loại điều chỉnh', why: 'Tính nhất quán của định nghĩa theo thời gian.', where: 'Báo cáo nhiều năm liên tiếp' },
  ],
  counterpoints: [
    'EBITDA vẫn hữu ích: loại bỏ khác biệt chính sách khấu hao, thuế, cấu trúc vốn, giúp so sánh hiệu quả hoạt động và định giá doanh nghiệp (EV/EBITDA).',
    'Không phải mọi điều chỉnh đều xấu; có khoản thật sự bất thường (thiên tai, kiện tụng một lần) nên được loại để thấy xu hướng nền.',
    'Ở ngành ít tài sản cố định (phần mềm, dịch vụ), khoảng cách giữa EBITDA và lợi nhuận nhỏ, nên giới hạn của EBITDA ít nghiêm trọng hơn.',
  ],
  glossary: [
    { term: 'EBITDA', definition: 'Lợi nhuận trước lãi vay, thuế, khấu hao và phân bổ.' },
    { term: 'Chỉ tiêu hiệu quả thay thế (APM)', definition: 'Chỉ tiêu tài chính do doanh nghiệp tự định nghĩa, không được quy định trong chuẩn mực báo cáo.' },
    { term: 'IFRS 18', definition: 'Chuẩn mực mới về trình bày và công bố trong báo cáo tài chính, thay thế IAS 1, hiệu lực từ 1/1/2027.' },
    { term: 'EV/EBITDA', definition: 'Tỷ lệ giá trị doanh nghiệp trên EBITDA, dùng định giá.' },
    { term: 'Khoản một lần', definition: 'Khoản thu chi bất thường mà doanh nghiệp coi là không lặp lại.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'ebitda-limits-adjusted-metrics-q',
    question: 'Công ty báo "Adjusted EBITDA" tăng 25%, nhưng bảng đối chiếu cho thấy khoản "chi phí tái cấu trúc một lần" được loại ra ở cả 5 năm liên tiếp. Cách đọc hợp lý?',
    options: [
      { id: 'a', text: 'Chấp nhận vì công ty đã gọi đó là chi phí một lần.', explain: 'Khoản "một lần" xuất hiện năm nào cũng có thì thực chất là chi phí thường xuyên.' },
      { id: 'b', text: 'Nghi ngờ chất lượng điều chỉnh: coi chi phí đó là chi phí thường xuyên và tính lại chỉ tiêu.', correct: true, explain: 'Đúng. Điều chỉnh lặp lại hằng năm làm chỉ tiêu cao hơn thực chất.' },
      { id: 'c', text: 'Bỏ qua phần đối chiếu vì không quan trọng.', explain: 'Bảng đối chiếu là nơi lộ rõ điều chỉnh những gì, nên là phần quan trọng nhất.' },
    ],
  },
  sources: [
    { title: 'IFRS 18 Presentation and Disclosure in Financial Statements', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-18-presentation-and-disclosure-in-financial-statements/' },
    { title: 'FCF conversion: meaning, formula and example (định nghĩa EBITDA)', publisher: 'Corporate Finance Institute', url: 'https://corporatefinanceinstitute.com/resources/valuation/free-cash-flow/' },
    { title: 'Earnings before interest, taxes, depreciation and amortization', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/EBITDA' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 74,
}
