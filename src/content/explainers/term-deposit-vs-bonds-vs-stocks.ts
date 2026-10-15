import type { Explainer } from '../../../shared/explainer'

export const termDepositVsBondsVsStocks: Explainer = {
  id: 'term-deposit-vs-bonds-vs-stocks',
  slug: 'term-deposit-vs-bonds-vs-stocks',
  question: 'Gửi tiết kiệm, trái phiếu, cổ phiếu khác nhau thế nào về rủi ro và lợi suất?',
  title: 'Tiết kiệm, trái phiếu, cổ phiếu: đổi lại lợi suất kỳ vọng cao hơn là biến động và rủi ro lớn hơn',
  topic: 'personal-finance',
  tldr: 'Ba loại tài sản trả công cho bạn theo cách khác nhau: **tiền gửi** cho lãi đã biết, rủi ro thấp; **trái phiếu** cho lãi coupon nhưng có rủi ro tín dụng và biến động giá; **cổ phiếu** cho phần sở hữu doanh nghiệp, lợi suất kỳ vọng cao hơn nhưng biến động mạnh nhất. Không có lựa chọn "tốt nhất" chung; điều quan trọng là mục tiêu, thời hạn và khả năng chịu lỗ. Đây là nội dung giáo dục, không phải khuyến nghị.',
  keyPoints: [
    '**Tiền gửi tiết kiệm**: lãi suất và kỳ hạn rõ ràng, thanh khoản thấp hơn nếu rút trước hạn (lãi suất giảm); rủi ro chính là lạm phát làm giảm giá trị thực và rủi ro ngân hàng.',
    '**Trái phiếu**: thu lãi định kỳ và hoàn gốc khi đáo hạn nếu tổ chức phát hành trả được; rủi ro gồm **tín dụng**, **lãi suất** (giá giảm khi lãi tăng) và **thanh khoản**.',
    '**Cổ phiếu**: hưởng cổ tức và tăng giá, đứng sau chủ nợ khi doanh nghiệp gặp khó; lợi suất không được đảm bảo và có thể lỗ phần lớn vốn.',
    'Nguyên tắc chung (risk-return): lợi suất kỳ vọng cao hơn đi cùng rủi ro cao hơn; lãi suất quảng cáo cao bất thường là dấu hiệu cần kiểm tra rủi ro.',
    'Thời gian đầu tư dài làm sai lệch trung bình biến động nhưng không loại bỏ rủi ro; không nên dùng tiền cần trong vài năm tới cho cổ phiếu.',
  ],
  causalChain: [
    { from: 'Nhà đầu tư chấp nhận thêm rủi ro', to: 'Đòi hỏi phần bù lợi suất cao hơn', mechanism: 'Không ai chấp nhận rủi ro thêm mà không có kỳ vọng lợi suất cao hơn; thị trường định giá đến khi hợp lý.' },
    { from: 'Lãi suất thị trường tăng', to: 'Giá trái phiếu đã phát hành giảm, tiền gửi mới hấp dẫn hơn', mechanism: 'Trái phiếu cũ lãi thấp bị chiết khấu để cho lợi suất tương đương; tiền gửi mới có lãi mới cao hơn.' },
    { from: 'Lạm phát tăng', to: 'Lãi suất thực của tiền gửi và trái phiếu lãi cố định giảm', mechanism: 'Lãi suất thực = danh nghĩa trừ lạm phát; cổ phiếu có thể bảo vệ phần nào nếu doanh nghiệp tăng được giá bán.' },
    { from: 'Kinh tế suy yếu hoặc khủng hoảng niềm tin', to: 'Giá cổ phiếu và trái phiếu rủi ro giảm, tiền gửi ít biến động', mechanism: 'Lợi nhuận kỳ vọng giảm và phần bù rủi ro tăng; tài sản an toàn tương đối ổn định nhưng không hoàn toàn miễn rủi ro.' },
  ],
  vietnamImpact: [
    { group: 'Người gửi tiết kiệm', effect: 'Ổn định và thanh khoản tốt cho quỹ khẩn cấp; lãi suất thực có thể thấp khi lạm phát tăng.', direction: 'mixed' },
    { group: 'Nhà đầu tư trái phiếu doanh nghiệp', effect: 'Lãi cao hơn tiền gửi đi cùng rủi ro tín dụng và thanh khoản; cần đọc tài sản bảo đảm, dòng tiền của tổ chức phát hành.', direction: 'mixed' },
    { group: 'Nhà đầu tư cổ phiếu', effect: 'Kỳ vọng sinh lời dài hạn cao hơn nhưng có thể giảm giá sâu; đòn bẩy làm rủi ro lớn hơn.', direction: 'mixed' },
    { group: 'Người sắp nghỉ hưu hoặc cần tiền sớm', effect: 'Nên ưu tiên ổn định và thanh khoản hơn lợi suất tối đa; biến động xấu gần thời điểm rút tiền gây thiệt hại thật.', direction: 'down' },
  ],
  indicators: [
    { name: 'Lãi suất tiền gửi kỳ hạn và lãi suất thực', why: 'Biết tiền gửi thực sự sinh lời bao nhiêu sau lạm phát.', where: 'Niêm yết ngân hàng, Ngân hàng Nhà nước (sbv.gov.vn), CPI của Cục Thống kê' },
    { name: 'Lợi suất trái phiếu chính phủ', why: 'Mức tham chiếu "phi rủi ro tín dụng" để đánh giá phần bù của tài sản khác.', where: 'Sở Giao dịch Chứng khoán Hà Nội (HNX), Bộ Tài chính' },
    { name: 'P/E thị trường và tỷ suất cổ tức', why: 'Đánh giá cổ phiếu đắt hay rẻ so với thu nhập.', where: 'Sở Giao dịch Chứng khoán, báo cáo thị trường' },
    { name: 'Mức giảm tối đa lịch sử (max drawdown)', why: 'Hình dung mức lỗ tạm thời có thể phải chịu.', where: 'Tự tính từ dữ liệu giá lịch sử' },
  ],
  counterpoints: [
    'Trái phiếu doanh nghiệp không phải lúc nào cũng "an toàn hơn cổ phiếu": khi doanh nghiệp mất khả năng trả nợ, trái chủ có thể chịu tổn thất lớn.',
    'Tiền gửi cũng có rủi ro: lạm phát và rủi ro ngân hàng; bảo hiểm tiền gửi chỉ chi trả đến một hạn mức tối đa mỗi người ở mỗi tổ chức tín dụng (mức này đã được nâng nhiều lần; xem mức hiện hành tại Bảo hiểm tiền gửi Việt Nam).',
    'Lợi suất lịch sử không đảm bảo tương lai; kết quả quá khứ của cổ phiếu không phải cam kết.',
  ],
  glossary: [
    { term: 'Risk-return', definition: 'Quan hệ giữa rủi ro chấp nhận và lợi suất kỳ vọng.' },
    { term: 'Lãi suất thực', definition: 'Lãi suất danh nghĩa trừ lạm phát.' },
    { term: 'Rủi ro tín dụng', definition: 'Nguy cơ bên vay không trả đủ gốc hoặc lãi.' },
    { term: 'Thanh khoản', definition: 'Mức dễ dàng bán/rút tài sản mà không mất giá đáng kể.' },
    { term: 'Phần bù rủi ro', definition: 'Lợi suất cao hơn đòi hỏi để đổi lấy rủi ro thêm.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'term-deposit-vs-bonds-vs-stocks-q',
    question: 'Một sản phẩm quảng cáo lãi 14%/năm "an toàn như gửi tiết kiệm" khi lãi tiền gửi đang thấp hơn nhiều. Phản ứng hợp lý?',
    options: [
      { id: 'a', text: 'Tin vì lãi cao thì chắc chắn có tài sản bảo đảm.', explain: 'Lãi cao bất thường thường phản ánh rủi ro cao hơn; cần kiểm tra thực tế.' },
      { id: 'b', text: 'Nghi ngờ: tìm hiểu ai phát hành, tài sản bảo đảm, rủi ro mất vốn; chênh lệch lớn so với tiền gửi là phần bù cho rủi ro.', correct: true, explain: 'Đúng. Lợi suất cao hơn phần bù rủi ro; "an toàn như tiết kiệm" mà lãi cao hơn nhiều là dấu hiệu cần cảnh giác.' },
      { id: 'c', text: 'Đầu tư toàn bộ tiền tiết kiệm vì sinh lời cao.', explain: 'Tập trung toàn bộ vốn vào một sản phẩm rủi ro chưa hiểu rõ là sai nguyên tắc phân bổ.' },
    ],
  },
  sources: [
    { title: 'Risk-return spectrum', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Risk%E2%80%93return_spectrum' },
    { title: 'Asset allocation', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Asset_allocation' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 35,
}
