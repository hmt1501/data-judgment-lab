import type { Explainer } from '../../../shared/explainer'

export const workingCapitalCashConversionExplained: Explainer = {
  id: 'working-capital-cash-conversion-explained',
  slug: 'working-capital-cash-conversion-explained',
  question: 'Vốn lưu động và chu kỳ chuyển đổi tiền mặt là gì, vì sao doanh nghiệp lãi vẫn có thể thiếu tiền?',
  title: 'Chu kỳ chuyển đổi tiền mặt: bao nhiêu ngày tiền bị "chôn" trong hàng và công nợ',
  topic: 'markets-investing',
  tldr: 'Doanh nghiệp phải bỏ tiền mua hàng, giữ tồn kho, rồi chờ khách trả tiền; trong khi nhà cung cấp có thể cho nợ. **Chu kỳ chuyển đổi tiền mặt (CCC)** = số ngày tồn kho + số ngày thu tiền − số ngày trả nhà cung cấp, cho biết tiền bị chôn bao lâu. CCC dài khiến doanh nghiệp tăng trưởng nhanh vẫn có thể thiếu tiền, phải vay thêm, dù báo cáo vẫn lãi.',
  keyPoints: [
    '**Vốn lưu động** (working capital) nói chung là tài sản ngắn hạn trừ nợ ngắn hạn; trong phân tích dòng tiền người ta quan tâm phần **vốn lưu động hoạt động**: phải thu + tồn kho − phải trả.',
    'Công thức CCC: **DIO** (số ngày tồn kho) + **DSO** (số ngày thu tiền khách hàng) − **DPO** (số ngày trả nhà cung cấp). **Ví dụ giả định:** DIO 90 ngày, DSO 60 ngày, DPO 45 ngày → CCC = 90 + 60 − 45 = 105 ngày. Nghĩa là kể từ khi bỏ tiền mua hàng tới khi thu về mất khoảng 105 ngày, trong khoảng đó doanh nghiệp cần nguồn tiền khác.',
    'Theo IAS 7, trong cách trình bày gián tiếp, báo cáo lưu chuyển tiền tệ điều chỉnh lợi nhuận bằng các khoản không bằng tiền và thay đổi vốn lưu động; vì vậy **phải thu và tồn kho tăng** làm CFO thấp hơn lợi nhuận.',
    'Tăng trưởng doanh thu nhanh **tiêu tiền** khi CCC dương: mỗi đồng doanh thu tăng thêm cần thêm vốn cho phải thu và tồn kho trước khi tiền về ("tăng trưởng đói vốn").',
    'Doanh nghiệp bán lẻ tiêu dùng nhanh có thể có CCC rất ngắn hoặc âm (thu tiền ngay, trả nhà cung cấp chậm); xây dựng, bất động sản, thiết bị có CCC dài. So sánh CCC chỉ có ý nghĩa **trong cùng ngành**.',
  ],
  causalChain: [
    { from: 'Tồn kho giữ lâu hơn, khách trả chậm hơn', to: 'CCC kéo dài', mechanism: 'Tiền đã chi mua nguyên liệu, hàng hóa bị giữ lại trong hàng tồn và công nợ phải thu.' },
    { from: 'CCC kéo dài', to: 'Nhu cầu vốn lưu động tăng', mechanism: 'Doanh nghiệp phải tài trợ khoảng thời gian chờ bằng tiền mặt, vay ngắn hạn hoặc kéo dài nợ nhà cung cấp.' },
    { from: 'Nhu cầu vay ngắn hạn tăng', to: 'Chi phí lãi vay tăng, áp lực khi lãi suất tăng', mechanism: 'Vay ngắn hạn phải tái tài trợ thường xuyên; lãi suất tăng hoặc ngân hàng siết tín dụng có thể làm doanh nghiệp thiếu tiền dù vẫn có lãi.' },
    { from: 'Cải thiện quản lý phải thu, tồn kho, điều khoản thanh toán', to: 'Giải phóng tiền mặt', mechanism: 'Giảm vài ngày DSO/DIO hoặc tăng DPO trả lại tiền vào tài khoản mà không cần vay hay bán thêm.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp vừa và nhỏ', effect: 'Thường bị khách hàng lớn trả chậm; lãi nhưng thiếu tiền là nguyên nhân phổ biến của vỡ nợ ngắn hạn; tiếp cận tín dụng vốn lưu động quan trọng.', direction: 'down' },
    { group: 'Doanh nghiệp xuất khẩu', effect: 'Chu kỳ dài từ mua nguyên liệu đến nhận tiền từ khách nước ngoài; biến động tỷ giá và cước vận chuyển ảnh hưởng thêm.', direction: 'mixed' },
    { group: 'Nhà đầu tư cổ phiếu', effect: 'CCC dài ra qua các quý, kèm phải thu tăng nhanh hơn doanh thu, là dấu hiệu cần kiểm tra chất lượng doanh thu.', direction: 'mixed' },
    { group: 'Ngân hàng', effect: 'Cho vay bổ sung vốn lưu động chiếm phần lớn tín dụng doanh nghiệp; chất lượng phải thu và tồn kho của khách hàng ảnh hưởng nợ xấu.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'DSO, DIO, DPO và CCC theo quý', why: 'Xu hướng quan trọng hơn mức tuyệt đối; so với đối thủ cùng ngành.', where: 'Tính từ bảng cân đối và báo cáo kết quả kinh doanh trên cổng công bố thông tin của HOSE, HNX' },
    { name: 'Tăng trưởng phải thu và tồn kho so với tăng trưởng doanh thu', why: 'Phải thu tăng nhanh hơn doanh thu là cảnh báo bán chịu hoặc ghi nhận doanh thu sớm.', where: 'Bảng cân đối và báo cáo kết quả kinh doanh' },
    { name: 'Dòng tiền hoạt động và thay đổi vốn lưu động', why: 'Cho biết vốn lưu động hút hay giải phóng bao nhiêu tiền.', where: 'Báo cáo lưu chuyển tiền tệ (phương pháp gián tiếp)' },
    { name: 'Vay ngắn hạn và khả năng thanh toán nhanh', why: 'Đo rủi ro thiếu tiền ngắn hạn.', where: 'Bảng cân đối, thuyết minh vay' },
  ],
  counterpoints: [
    'CCC âm không phải lúc nào cũng tốt: có thể do chiếm dụng vốn nhà cung cấp quá mức, rủi ro khi nhà cung cấp siết điều khoản.',
    'Doanh nghiệp theo mùa vụ có tồn kho biến động mạnh trong năm; số cuối kỳ có thể không đại diện.',
    'Ước tính CCC từ số cuối kỳ khác với từ số bình quân; cách tính khác nhau cho kết quả khác.',
  ],
  glossary: [
    { term: 'Vốn lưu động', definition: 'Tài sản ngắn hạn trừ nợ ngắn hạn; thường chỉ phần vốn dùng cho hoạt động hằng ngày.' },
    { term: 'DSO', definition: 'Số ngày thu tiền bình quân của khoản phải thu.' },
    { term: 'DIO', definition: 'Số ngày tồn kho bình quân.' },
    { term: 'DPO', definition: 'Số ngày trả tiền bình quân cho nhà cung cấp.' },
    { term: 'CCC', definition: 'Chu kỳ chuyển đổi tiền mặt: DIO + DSO − DPO.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'working-capital-cash-conversion-explained-q',
    question: 'Một doanh nghiệp có DIO 90, DSO 60, DPO 45 ngày và doanh thu đang tăng rất nhanh. Rủi ro chính là gì?',
    options: [
      { id: 'a', text: 'Không có rủi ro vì doanh thu tăng.', explain: 'Tăng trưởng nhanh đòi hỏi thêm vốn cho phải thu, tồn kho trước khi tiền về.' },
      { id: 'b', text: 'Thiếu tiền mặt dù có lãi, vì CCC 105 ngày nghĩa là phải tài trợ khoảng thời gian chờ bằng vốn khác.', correct: true, explain: 'Đúng. Doanh thu càng tăng, lượng tiền bị chôn trong vốn lưu động càng lớn.' },
      { id: 'c', text: 'CCC dài luôn là dấu hiệu gian lận.', explain: 'CCC dài có thể bình thường với ngành đặc thù (xây dựng, thiết bị); cần so sánh cùng ngành và xem xu hướng.' },
    ],
  },
  sources: [
    { title: 'IAS 7 Statement of Cash Flows', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/' },
    { title: 'Cash conversion cycle', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Cash_conversion_cycle' },
    { title: 'Working capital', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Working_capital' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 73,
}
