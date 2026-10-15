import type { Explainer } from '../../../shared/explainer'

export const creditCardInstallmentTrueCost: Explainer = {
  id: 'credit-card-installment-true-cost',
  slug: 'credit-card-installment-true-cost',
  question: 'Trả góp "0%" có thật sự 0%? Chi phí thực là bao nhiêu?',
  title: 'Trả góp 0%: lãi suất có thể bằng 0 nhưng phí chuyển đổi, phí hằng tháng vẫn làm chi phí thực dương',
  topic: 'personal-finance',
  tldr: '"0%" thường nói về **lãi suất danh nghĩa**, còn người vay có thể trả **phí chuyển đổi trả góp**, phí hằng tháng hoặc bị mất ưu đãi nếu trễ hạn. Cách kiểm tra là quy mọi khoản về **lãi suất hiệu dụng hằng năm (APR/EIR)**: so tổng tiền trả với số tiền thực sự được cấp, tính theo thời gian. Ví dụ giả định dưới đây cho thấy "0%" vẫn có thể tương đương khoảng 5-6%/năm.',
  keyPoints: [
    'Chi phí thực = tổng tiền bạn trả (lãi + phí + phạt) so với giá trị bạn nhận, quy theo năm; không thể chỉ nhìn "lãi 0%".',
    'Ví dụ giả định: món hàng 24 triệu, trả góp 12 tháng 2 triệu/tháng, thu **phí chuyển đổi 3% (720 nghìn) ngay từ đầu**. Thực tế bạn nhận khoản tài trợ ròng 23,28 triệu và trả 24 triệu qua 12 kỳ.',
    'Tính lãi suất hiệu dụng cho ví dụ này cho khoảng **0,47%/tháng, tương đương khoảng 5,8%/năm**. Không phải 0%, dù thấp hơn nhiều so với lãi thẻ tín dụng khi rút tiền mặt hoặc trả chậm.',
    'Trả muộn có thể kích hoạt lãi phạt, mất ưu đãi hoặc tính lãi hồi tố; chi phí khi sai hẹn thường lớn hơn lãi trả góp.',
    'Giá bán "trả góp 0%" có thể đã tính chi phí tài trợ vào giá hàng, nên giá trả góp cao hơn giá trả tiền mặt; hãy hỏi giá tiền mặt để so sánh.',
  ],
  causalChain: [
    { from: 'Người bán và ngân hàng hợp tác trả góp 0%', to: 'Chi phí tài trợ nằm ở nơi khác', mechanism: 'Người bán chịu một phần phí cho ngân hàng, người mua chịu phí chuyển đổi hoặc giá cao hơn, hoặc cả hai chia sẻ.' },
    { from: 'Phí thu ngay từ đầu', to: 'Số tiền thực được tài trợ giảm', mechanism: 'Bạn nhận giá trị thấp hơn số tiền trả góp danh nghĩa, nên lãi suất hiệu dụng cao hơn lãi danh nghĩa.' },
    { from: 'Thời gian trả ngắn, khoản nhỏ', to: 'Lãi suất hiệu dụng khó nhận ra', mechanism: 'Phí nhỏ trên số tiền nhỏ, trải qua 12 tháng, nhưng quy theo năm vẫn là mức đáng kể.' },
    { from: 'Trễ hạn hoặc chi tiêu vượt khả năng', to: 'Chi phí tăng và có thể rơi vào bẫy nợ', mechanism: 'Lãi thẻ tín dụng thường cao; trả tối thiểu kéo dài làm nợ phình theo lãi kép.' },
  ],
  vietnamImpact: [
    { group: 'Người mua đồ điện tử, gia dụng trả góp', effect: 'Có thể tiếp cận hàng sớm với chi phí thấp nếu phí hợp lý; cần đọc kỹ phí chuyển đổi và điều kiện.', direction: 'mixed' },
    { group: 'Người dùng thẻ tín dụng trả chậm', effect: 'Trả tối thiểu và để dư nợ lãi cao làm chi phí thực lớn hơn nhiều so với trả góp 0%.', direction: 'down' },
    { group: 'Nhà bán lẻ', effect: 'Trả góp 0% thúc đẩy doanh số; chi phí tài trợ làm giảm biên lợi nhuận hoặc được tính vào giá.', direction: 'mixed' },
    { group: 'Ngân hàng và công ty tài chính', effect: 'Thu phí và tăng dư nợ thẻ; rủi ro nợ xấu khi người dùng vay vượt khả năng.', direction: 'up' },
  ],
  indicators: [
    { name: 'Lãi suất hiệu dụng (APR/EIR) của khoản trả góp', why: 'Thước đo chung để so sánh các phương án có phí khác nhau.', where: 'Tự tính từ lịch trả nợ; hợp đồng và biểu phí của ngân hàng' },
    { name: 'Biểu phí chuyển đổi, phí quản lý hằng tháng, phí tất toán sớm', why: 'Các khoản làm chi phí thực cao hơn lãi danh nghĩa.', where: 'Biểu phí công bố của ngân hàng, hợp đồng trả góp' },
    { name: 'Tỷ lệ trả nợ trên thu nhập hằng tháng', why: 'Đảm bảo tổng trả góp không vượt khả năng.', where: 'Tự tính từ sao kê thu - chi' },
    { name: 'Lãi suất thẻ tín dụng và lãi phạt trả chậm', why: 'Chi phí khi không trả đúng hạn.', where: 'Biểu lãi suất và phí của từng ngân hàng' },
  ],
  counterpoints: [
    'Lãi suất hiệu dụng 5-6%/năm trong ví dụ vẫn thấp hơn nhiều vay tiêu dùng khác; trả góp 0% có thể hợp lý nếu bạn thực sự cần và trả đúng hạn.',
    'Nếu bạn có tiền mặt đủ, mua tiền mặt thường rẻ hơn khi có chiết khấu tiền mặt; nhưng giữ tiền để sinh lời hoặc dự phòng đôi khi hợp lý hơn.',
    'Điều khoản mỗi chương trình khác nhau; con số trong ví dụ chỉ là minh họa, không áp dụng cho chương trình thực tế.',
  ],
  glossary: [
    { term: 'APR', definition: 'Annual percentage rate: lãi suất hằng năm tính cả một số loại phí, dùng để so sánh chi phí vay.' },
    { term: 'Lãi suất hiệu dụng', definition: 'Lãi suất thực sau khi tính phí và tần suất tính lãi, quy theo năm.' },
    { term: 'Phí chuyển đổi trả góp', definition: 'Phí ngân hàng thu khi chuyển giao dịch thẻ sang trả góp.' },
    { term: 'Trả tối thiểu', definition: 'Khoản thấp nhất phải trả hằng tháng; phần còn lại bị tính lãi.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'credit-card-installment-true-cost-q',
    question: 'Trong ví dụ giả định, lãi danh nghĩa là 0% nhưng có phí chuyển đổi 3% thu ngay. Đánh giá nào đúng nhất?',
    options: [
      { id: 'a', text: 'Chi phí vẫn 0% vì không có lãi.', explain: 'Phí chuyển đổi là chi phí tài trợ thực; tính lãi suất hiệu dụng thì dương.' },
      { id: 'b', text: 'Chi phí thực dương, khoảng vài phần trăm mỗi năm; cần quy ra lãi suất hiệu dụng để so sánh.', correct: true, explain: 'Đúng. Phí thu trước làm số tiền thực được tài trợ nhỏ hơn số trả; ví dụ tương đương khoảng 5,8%/năm.' },
      { id: 'c', text: 'Chi phí thực chính là 3%/năm.', explain: '3% là phí một lần cho 12 tháng, nhưng vì khoản vay giảm dần theo từng kỳ trả nên lãi suất hiệu dụng cao hơn 3%.' },
    ],
  },
  sources: [
    { title: 'Annual percentage rate', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Annual_percentage_rate' },
    { title: 'Effective interest rate', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Effective_interest_rate' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 36,
}
