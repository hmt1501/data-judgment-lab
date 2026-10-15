import type { Explainer } from '../../../shared/explainer'

export const loanContractFeesPenaltiesReading: Explainer = {
  id: 'loan-contract-fees-penalties-reading',
  slug: 'loan-contract-fees-penalties-reading',
  question: 'Đọc hợp đồng vay ngân hàng cần chú ý phí, phạt và điều khoản nào?',
  title: 'Đọc hợp đồng vay: phí, phạt và những điều khoản dễ bỏ sót',
  topic: 'personal-finance',
  tldr: 'Lãi suất quảng cáo chỉ là một phần chi phí vay. Hợp đồng còn có **phí trả nợ trước hạn**, **lãi suất điều chỉnh** sau giai đoạn ưu đãi, **lãi phạt** khi quá hạn và điều kiện thu hồi nợ. Các nội dung này thường do hai bên **thỏa thuận**, nên người vay có quyền hỏi và so sánh trước khi ký. Khung quy định (Thông tư 39/2016/TT-NHNN) đặt trần cho một số mức lãi phạt và yêu cầu thỏa thuận rõ nguyên tắc điều chỉnh lãi suất.',
  keyPoints: [
    'Theo văn bản hợp nhất Thông tư 39/2016/TT-NHNN (số 86/VBHN-NHNN, xác thực ngày 30/6/2026; thông tư gốc hiệu lực **15/3/2017**), tổ chức tín dụng và khách hàng **thỏa thuận** việc thu các loại phí, trong đó có **phí trả nợ trước hạn**, phí cam kết rút vốn, phí hạn mức dự phòng (Điều 14).',
    'Cùng văn bản (Điều 13 khoản 4): lãi **chậm trả** do hai bên thỏa thuận nhưng không vượt **10%/năm** trên số dư lãi chậm trả; lãi trên **nợ gốc quá hạn** không vượt **150%** lãi suất cho vay trong hạn (Điều 13).',
    'Nếu có lãi suất điều chỉnh (thả nổi), hai bên phải thỏa thuận **nguyên tắc và yếu tố** xác định lãi suất điều chỉnh cùng thời điểm điều chỉnh (Điều 13 khoản 5); tổ chức tín dụng cũng phải cung cấp trước khi xác lập thỏa thuận các thông tin như lãi suất, lãi suất nợ quá hạn, lãi chậm trả, phương pháp tính lãi, loại phí và mức phí (Điều 16 khoản 1).',
    'Phí trả nợ trước hạn tồn tại vì người cho vay chịu rủi ro tái đầu tư khi bị trả sớm, theo cách giải thích chung về khoản phạt trả trước (Wikipedia); mức và thời hạn áp dụng cần xem trong hợp đồng.',
    'Thông tư gốc đã được sửa đổi nhiều lần (các Thông tư 06/2023, 12/2024, 52/2025 và 29/2026, theo bản hợp nhất nêu trên); các điều nêu ở đây còn nguyên trong bản hợp nhất ngày 30/6/2026, nhưng người vay vẫn nên kiểm tra văn bản hiện hành.',
  ],
  causalChain: [
    { from: 'Hợp đồng ghi lãi suất ưu đãi cố định trong vài tháng đầu', to: 'Sau đó chuyển sang lãi suất điều chỉnh', mechanism: 'Lãi suất sau ưu đãi thường gồm lãi suất cơ sở cộng biên độ; quy định yêu cầu thỏa thuận nguyên tắc và yếu tố xác định, nên cần xem công thức cụ thể.' },
    { from: 'Người vay muốn trả nợ sớm (bán nhà, nhận được tiền)', to: 'Có thể phát sinh phí trả nợ trước hạn', mechanism: 'Người cho vay mất dòng lãi dự kiến; phí do hai bên thỏa thuận và ghi trong hợp đồng, thường theo % số tiền trả trước, có thể giảm dần theo thời gian.' },
    { from: 'Trễ hạn trả gốc hoặc lãi', to: 'Lãi phạt và hậu quả tín dụng', mechanism: 'Nợ gốc quá hạn chịu lãi không vượt 150% lãi trong hạn; lãi chậm trả không vượt 10%/năm trên số dư lãi; ngoài ra còn ảnh hưởng hồ sơ tín dụng.' },
    { from: 'Không đọc kỹ điều khoản thu hồi nợ trước hạn và bảo đảm', to: 'Bất ngờ khi vi phạm cam kết', mechanism: 'Hợp đồng có thể nêu các trường hợp bên cho vay chấm dứt cho vay hoặc thu hồi nợ khi vi phạm; cần biết trước điều kiện.' },
  ],
  vietnamImpact: [
    { group: 'Người vay mua nhà/xe với lãi suất ưu đãi', effect: 'Cần so tổng chi phí cả giai đoạn ưu đãi và sau ưu đãi, không chỉ lãi suất năm đầu.', direction: 'mixed' },
    { group: 'Người có kế hoạch trả nợ sớm hoặc tái tài trợ', effect: 'Phí trả nợ trước hạn có thể làm giảm lợi ích của việc chuyển sang ngân hàng khác; nên tính trước.', direction: 'down' },
    { group: 'Người vay có thu nhập biến động', effect: 'Lãi phạt và hậu quả quá hạn khiến một vài kỳ trễ trở nên tốn kém; nên đàm phán cơ cấu nợ sớm thay vì để quá hạn.', direction: 'down' },
    { group: 'Người vay tiêu dùng/thẻ tín dụng', effect: 'Nhiều loại phí và điều kiện nhỏ trong điều khoản; nên yêu cầu bảng kê tổng chi phí hằng năm.', direction: 'down' },
  ],
  indicators: [
    { name: 'Lãi suất sau ưu đãi (cơ sở + biên độ) và thời điểm điều chỉnh', why: 'Quyết định chi phí vay thật phần lớn thời gian.', where: 'Hợp đồng tín dụng, phụ lục; biểu lãi suất công bố của ngân hàng' },
    { name: 'Phí trả nợ trước hạn và thời hạn áp dụng', why: 'Quyết định có đáng tái tài trợ hay trả sớm.', where: 'Hợp đồng, biểu phí của ngân hàng' },
    { name: 'Lãi phạt quá hạn và điều kiện thu hồi nợ', why: 'Biết chi phí khi gặp khó khăn.', where: 'Hợp đồng; văn bản hướng dẫn của Ngân hàng Nhà nước' },
    { name: 'Bảo đảm tiền vay và nghĩa vụ liên quan', why: 'Tài sản bảo đảm bị xử lý nếu vi phạm.', where: 'Hợp đồng bảo đảm kèm theo' },
  ],
  counterpoints: [
    'Các mức trần (10%/năm, 150%) lấy từ bản hợp nhất Thông tư 39/2016 (30/6/2026) và có thể được sửa tiếp; hợp đồng cụ thể (thẻ tín dụng, vay tiêu dùng của công ty tài chính, vay có quy định riêng) có thể chịu văn bản khác.',
    'Phí không phải lúc nào cũng "xấu": phí trả nợ trước hạn có thể đi kèm lãi suất ưu đãi thấp hơn; cần so tổng chi phí.',
    'Bài không phải tư vấn pháp lý; tranh chấp cụ thể cần luật sư hoặc cơ quan có thẩm quyền.',
  ],
  glossary: [
    { term: 'Phí trả nợ trước hạn', definition: 'Khoản phí khi người vay trả một phần hoặc toàn bộ khoản vay sớm hơn lịch.' },
    { term: 'Lãi suất điều chỉnh (thả nổi)', definition: 'Lãi suất thay đổi theo thời điểm và công thức đã thỏa thuận.' },
    { term: 'Lãi chậm trả / lãi quá hạn', definition: 'Lãi tính khi chậm thanh toán lãi hoặc nợ gốc quá hạn.' },
    { term: 'Bảo đảm tiền vay', definition: 'Biện pháp bảo đảm như thế chấp, cầm cố tài sản.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'loan-contract-fees-penalties-reading-q',
    question: 'Bạn dự định chuyển khoản vay sang ngân hàng khác sau 18 tháng. Việc nên làm trước khi ký?',
    options: [
      { id: 'a', text: 'Chỉ so lãi suất quảng cáo năm đầu của hai ngân hàng.', explain: 'Bỏ sót lãi suất sau ưu đãi và phí trả nợ trước hạn của khoản vay cũ, nên đánh giá sai tổng chi phí.' },
      { id: 'b', text: 'Hỏi phí trả nợ trước hạn của khoản cũ, lãi suất sau ưu đãi và công thức điều chỉnh của khoản mới, rồi so tổng chi phí cho thời gian giữ vay dự kiến.', correct: true, explain: 'Đúng. Phí và công thức điều chỉnh do hai bên thỏa thuận trong hợp đồng, nên phải xem văn bản chứ không chỉ quảng cáo.' },
      { id: 'c', text: 'Tin rằng mọi mức phạt đều bị luật ấn định nên không cần đọc hợp đồng.', explain: 'Luật chỉ đặt trần cho một số khoản (như mức lãi phạt theo Thông tư 39/2016 trong bài); nhiều phí do hai bên thỏa thuận.' },
    ],
  },
  sources: [
    { title: 'Văn bản hợp nhất 86/VBHN-NHNN: Thông tư 39/2016/TT-NHNN về hoạt động cho vay của tổ chức tín dụng, chi nhánh ngân hàng nước ngoài đối với khách hàng', publisher: 'Ngân hàng Nhà nước Việt Nam, đăng trên datafiles.chinhphu.vn (30/6/2026)', url: 'https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/7/86-vbhn-nhnn.pdf' },
    { title: 'Thông tư 39/2016/TT-NHNN về hoạt động cho vay của tổ chức tín dụng', publisher: 'LuatVietnam (thứ cấp)', url: 'https://luatvietnam.vn/tai-chinh/thong-tu-39-2016-tt-nhnn-ngan-hang-nha-nuoc-viet-nam-112177-d1.html' },
    { title: 'Prepayment of loan', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Prepayment_of_loan' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 147,
}
