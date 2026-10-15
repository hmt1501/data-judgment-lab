import type { Explainer } from '../../../shared/explainer'

export const debtSnowballVsAvalanche: Explainer = {
  id: 'debt-snowball-vs-avalanche',
  slug: 'debt-snowball-vs-avalanche',
  question: 'Trả nợ theo "quả cầu tuyết" hay "thác đổ"?',
  title: 'Thác đổ tốn ít lãi hơn; quả cầu tuyết giúp giữ động lực, và cả hai cần dòng tiền ổn định',
  topic: 'personal-finance',
  tldr: 'Khi có nhiều khoản nợ, bạn vẫn trả tối thiểu mọi khoản và dồn phần tiền dư vào một khoản. **Thác đổ (avalanche)** dồn vào khoản **lãi suất cao nhất** trước, nên tổng lãi thấp nhất theo toán học. **Quả cầu tuyết (snowball)** dồn vào khoản **dư nợ nhỏ nhất** trước, tạo cảm giác tiến bộ nhanh, giúp nhiều người bám kế hoạch hơn. Cách "đúng" là cách bạn thực sự giữ được đến cuối, miễn không bỏ qua khoản lãi quá cao.',
  keyPoints: [
    'Theo Wikipedia: quả cầu tuyết trả khoản dư nợ nhỏ nhất trước bất kể lãi suất; thác đổ (gọi là *debt stacking* trong bài) trả khoản lãi suất cao nhất trước và dẫn đến ít tiền lãi hơn; bài coi thác đổ là cách tối ưu về toán học còn snowball có thể hiệu quả hơn về hành vi.',
    'Ví dụ giả định (mô phỏng bằng tính toán): nợ A 5 triệu đồng lãi 12%/năm (tối thiểu 0,2 triệu/tháng), nợ B 20 triệu đồng lãi 30%/năm (tối thiểu 0,4 triệu/tháng), tổng dùng để trả 2,5 triệu đồng/tháng. Cả hai cách đều hết nợ sau khoảng 12 tháng, nhưng snowball (trả A trước) tốn lãi khoảng 3,96 triệu, avalanche (trả B trước) khoảng 3,31 triệu, chênh khoảng 0,65 triệu. Khoảng cách phụ thuộc chênh lệch lãi suất và quy mô khoản nợ.',
    'Bằng chứng hành vi (theo tổng hợp trên Wikipedia): nghiên cứu Kellogg 2012 cho thấy người xử lý khoản nhỏ trước dễ hết nợ hơn; Harvard Business Review 2016 cho biết tỷ lệ đã trả của một khoản ảnh hưởng cảm giác tiến bộ; Amar và cộng sự 2011 ghi nhận người vay hay trả khoản nhỏ trước vì "ác cảm với số tài khoản nợ", nhưng khi thấy lãi sẽ phát sinh thì họ có xu hướng chọn phương án tối ưu hơn.',
    'Hai phương pháp có thể trùng nhau khi khoản nhỏ nhất cũng có lãi cao nhất; khi chênh lệch lãi suất nhỏ, snowball gần như không tốn thêm.',
    'Hai phương pháp chỉ có tác dụng nếu bạn khắc phục khoảng cách thu-chi: nếu tiếp tục vay thêm hoặc chi vượt thu nhập thì thứ tự trả nợ không cứu được tình hình.',
  ],
  causalChain: [
    { from: 'Dồn tiền dư vào khoản lãi cao nhất (avalanche)', to: 'Giảm tổng lãi phải trả', mechanism: 'Mỗi đồng trả sớm cho khoản lãi cao tiết kiệm nhiều lãi hơn mỗi đồng trả cho khoản lãi thấp.' },
    { from: 'Dồn tiền vào khoản nhỏ nhất (snowball)', to: 'Tất toán nhanh từng khoản, giải phóng khoản trả tối thiểu', mechanism: 'Khoản trả tối thiểu của khoản đã tất toán được chuyển sang khoản tiếp theo, tạo "hiệu ứng cầu tuyết".' },
    { from: 'Tiến bộ thấy rõ', to: 'Động lực và kỷ luật tăng', mechanism: 'Hoàn thành mục tiêu nhỏ cho cảm giác tiến triển, giảm khả năng bỏ cuộc giữa chừng.' },
    { from: 'Nợ giảm, dòng tiền tự do tăng', to: 'Có thể tiết kiệm, đầu tư', mechanism: 'Chi phí lãi giảm, tiền không còn đổ vào trả nợ nên có thể dành cho quỹ khẩn cấp và đầu tư.' },
  ],
  vietnamImpact: [
    { group: 'Người nợ thẻ tín dụng, vay tín chấp lãi cao', effect: 'Chênh lệch lãi suất giữa các khoản thường lớn, nên thác đổ có thể tiết kiệm đáng kể tiền lãi.', direction: 'up' },
    { group: 'Người có nhiều khoản nợ nhỏ rải rác', effect: 'Snowball giúp dọn nhanh các khoản nhỏ, giảm số khoản phải quản lý và rủi ro quên hạn trả.', direction: 'up' },
    { group: 'Người vay mua nhà lãi thả nổi', effect: 'Khoản vay lớn, lãi thấp hơn thường xếp sau các khoản tiêu dùng lãi cao; cần kiểm tra điều khoản phạt trả nợ trước hạn.', direction: 'mixed' },
    { group: 'Người đang gặp khó dòng tiền', effect: 'Trả tối thiểu đầy đủ trước tiên; trễ hạn gây phí phạt và ảnh hưởng lịch sử tín dụng.', direction: 'down' },
  ],
  indicators: [
    { name: 'Lãi suất hiệu dụng (APR) của từng khoản nợ', why: 'Quyết định thứ tự theo thác đổ; cần so sánh lãi suất thật, kể cả phí.', where: 'Hợp đồng tín dụng, sao kê thẻ, ứng dụng ngân hàng' },
    { name: 'Dư nợ và khoản trả tối thiểu từng khoản', why: 'Quyết định thứ tự theo quả cầu tuyết và dòng tiền cần để trả.', where: 'Sao kê ngân hàng' },
    { name: 'Tỷ lệ trả nợ / thu nhập', why: 'Cho biết tải nợ có bền vững không.', where: 'Tự tính từ thu nhập thực nhận và tổng khoản trả mỗi tháng' },
    { name: 'Điều khoản phạt trả nợ trước hạn', why: 'Có thể làm giảm lợi ích của việc trả sớm.', where: 'Hợp đồng tín dụng' },
  ],
  counterpoints: [
    'Nếu lãi suất các khoản nợ gần như bằng nhau, hoặc khoản nhỏ nhất là khoản có lãi cao nhất, hai phương pháp ít khác biệt; thứ tự không còn quan trọng bằng việc trả đều.',
    'Một số khoản không nên trả sớm: khoản vay lãi rất thấp, ưu đãi, hoặc khi quỹ khẩn cấp còn mỏng; trả hết nợ nhưng cạn tiền mặt có thể buộc phải vay lại với lãi cao hơn.',
    'Có thể kết hợp: trả các khoản nhỏ lãi cao trước, hoặc đàm phán/tái cấp vốn khoản lãi cao sang lãi thấp hơn nếu phí chuyển đổi hợp lý.',
  ],
  glossary: [
    { term: 'Quả cầu tuyết (snowball)', definition: 'Trả nợ dư nợ nhỏ nhất trước, sau đó chuyển tiền sang khoản kế tiếp.' },
    { term: 'Thác đổ (avalanche)', definition: 'Trả nợ lãi suất cao nhất trước.' },
    { term: 'Trả tối thiểu', definition: 'Số tiền tối thiểu phải trả mỗi kỳ để không bị coi là trễ hạn.' },
    { term: 'APR', definition: 'Lãi suất hiệu dụng hằng năm, gồm cả phí.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'debt-snowball-vs-avalanche-q',
    question: 'Bạn có thẻ tín dụng nợ 30 triệu lãi 36%/năm và khoản vay xe 8 triệu lãi 9%/năm, đều trả tối thiểu đầy đủ. Tiền dư nên dồn vào đâu, nếu bạn chỉ muốn tối thiểu hóa tiền lãi?',
    options: [
      { id: 'a', text: 'Thẻ tín dụng lãi 36%.', correct: true, explain: 'Đúng. Đây là phương án thác đổ: lãi cao nhất tốn nhiều nhất; trả khoản xe nhỏ trước chỉ có lợi về mặt tâm lý.' },
      { id: 'b', text: 'Khoản vay xe 8 triệu, vì nhỏ hơn.', explain: 'Đây là quả cầu tuyết; hợp lý nếu bạn cần động lực nhưng tốn thêm lãi so với thác đổ khi chênh lệch lãi suất lớn.' },
      { id: 'c', text: 'Chia đều hai khoản.', explain: 'Chia đều không tận dụng được chênh lệch lãi suất; lãi 36% vẫn tích lũy.' },
    ],
  },
  sources: [
    { title: 'Debt snowball method', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Debt_snowball_method' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 57,
}
