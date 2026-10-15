import type { Explainer } from '../../../shared/explainer'

export const inflationHedgeAssetsComparison: Explainer = {
  id: 'inflation-hedge-assets-comparison',
  slug: 'inflation-hedge-assets-comparison',
  question: 'Vàng, bất động sản, cổ phiếu hay trái phiếu chống lạm phát: tài sản nào bảo vệ sức mua tốt nhất?',
  title: 'Không có tài sản chống lạm phát hoàn hảo: mỗi loại bảo vệ ở một giai đoạn và có rủi ro riêng',
  topic: 'personal-finance',
  tldr: 'Một tài sản “chống lạm phát” là tài sản có **lợi suất thực** không bị xói mòn khi giá cả tăng. Trái phiếu gắn chỉ số lạm phát bảo vệ trực tiếp nhưng chỉ một số nước phát hành; vàng thường được dùng như nơi trú ẩn nhưng không sinh dòng tiền; bất động sản và cổ phiếu có thể tăng giá theo giá cả trong dài hạn nhưng biến động mạnh và nhạy với lãi suất. Quan trọng hơn nhãn gọi là chu kỳ, thời gian nắm giữ và mức phân bổ.',
  keyPoints: [
    'Điều cần bảo vệ là **sức mua**, tức lợi suất sau lạm phát (lợi suất thực), không phải con số danh nghĩa. Tiền gửi lãi cố định thua lạm phát khi lãi suất thực âm.',
    '**Trái phiếu chỉ số hóa lạm phát** (như TIPS của Kho bạc Mỹ) điều chỉnh gốc theo chỉ số giá nên bảo vệ trực tiếp; theo hiểu biết của chúng tôi loại này chưa phổ biến với nhà đầu tư cá nhân ở Việt Nam, nên khó sao chép nguyên cách làm. Theo TreasuryDirect, gốc của TIPS có thể tăng hoặc giảm theo lạm phát và lãi được trả trên gốc đã điều chỉnh; khi đáo hạn nhà đầu tư nhận không thấp hơn gốc ban đầu.',
    '**Vàng** thường được xem như nơi cất giữ giá trị khi niềm tin vào tiền tệ giảm, nhưng không có dòng tiền, giá có thể đi ngang nhiều năm và chịu ảnh hưởng của lãi suất thực và đồng USD.',
    '**Bất động sản** và **cổ phiếu** (doanh nghiệp có sức mạnh định giá) có thể tăng thu nhập theo giá bán; song lạm phát cao thường đi cùng lãi suất cao, làm giảm định giá, nên bảo vệ không đồng đều trong ngắn hạn.',
    'Đánh giá bằng số liệu: so lợi suất thực qua nhiều chu kỳ, trong các giai đoạn lạm phát tăng bất ngờ, thay vì một giai đoạn đẹp nhất; và tính cả chi phí giao dịch, thuế và tính thanh khoản.',
  ],
  causalChain: [
    { from: 'Lạm phát cao hơn dự kiến', to: 'Lãi suất thực của tài sản cố định giảm', mechanism: 'Dòng tiền cố định mua được ít hàng hơn; người nắm giữ tiền mặt, tiền gửi lãi thấp thiệt thòi.' },
    { from: 'Lạm phát tăng', to: 'Lãi suất chính sách thường tăng', mechanism: 'Ngân hàng trung ương thắt chặt để kiềm lạm phát, làm giảm giá trái phiếu giá cố định và có thể làm giảm định giá cổ phiếu, bất động sản.' },
    { from: 'Doanh nghiệp tăng được giá bán theo chi phí', to: 'Lợi nhuận danh nghĩa bám theo lạm phát', mechanism: 'Cổ phiếu của doanh nghiệp có sức mạnh định giá giữ được biên lợi nhuận thực tốt hơn.' },
    { from: 'Niềm tin vào tiền tệ yếu đi hoặc lãi suất thực giảm', to: 'Nhu cầu vàng tăng', mechanism: 'Chi phí cơ hội của việc giữ vàng (không sinh lãi) giảm khi lãi suất thực thấp.' },
  ],
  vietnamImpact: [
    { group: 'Người gửi tiết kiệm', effect: 'Lãi suất tiền gửi thấp hơn lạm phát làm lãi suất thực âm; cần so với CPI trước khi so với nhau.', direction: 'down' },
    { group: 'Người nắm giữ vàng', effect: 'Bảo vệ sức mua dài hạn nhưng chịu chênh lệch mua–bán và chênh lệch giá trong nước với thế giới.', direction: 'mixed' },
    { group: 'Người nắm giữ bất động sản', effect: 'Giá có thể tăng theo chi phí xây dựng và đất đai, nhưng thanh khoản thấp và vay lãi thả nổi làm tăng rủi ro.', direction: 'mixed' },
    { group: 'Nhà đầu tư cổ phiếu', effect: 'Doanh nghiệp có sức mạnh định giá giữ lợi nhuận thực tốt hơn; nhóm nợ nhiều chịu áp lực khi lãi suất tăng.', direction: 'mixed' },
    { group: 'Người vay lãi suất cố định', effect: 'Lạm phát cao hơn dự kiến giảm giá trị thực của khoản nợ.', direction: 'up' },
  ],
  indicators: [
    { name: 'Lãi suất thực = lãi suất danh nghĩa − lạm phát', why: 'Thước đo cơ bản để so mọi lựa chọn trên cùng một thang.', where: 'Cục Thống kê (CPI), Ngân hàng Nhà nước (lãi suất)' },
    { name: 'Giá vàng trong nước và thế giới, chênh lệch giữa hai giá', why: 'Cho biết phần lợi nhuận đến từ giá thế giới hay từ chênh lệch trong nước.', where: 'Ngân hàng Nhà nước, Hiệp hội Kinh doanh vàng, World Gold Council' },
    { name: 'Lợi suất trái phiếu chính phủ kỳ hạn dài', why: 'Phản ánh kỳ vọng lạm phát và lãi suất, tác động đến định giá mọi tài sản.', where: 'HNX, Bộ Tài chính' },
  ],
  counterpoints: [
    'Tài sản “chống lạm phát” có thể thua trong ngắn hạn: giai đoạn lạm phát bất ngờ đi cùng lãi suất tăng nhanh đã kéo cả cổ phiếu lẫn trái phiếu giảm.',
    'Số liệu quá khứ đẹp của một tài sản phụ thuộc điểm bắt đầu và kết thúc; thiên lệch người sống sót và chọn giai đoạn là lỗi thường gặp.',
    'Mỗi tài sản gắn với rủi ro khác (thanh khoản, đòn bẩy, rủi ro pháp lý, lừa đảo) có thể lớn hơn rủi ro lạm phát.',
  ],
  glossary: [
    { term: 'Lãi suất thực', definition: 'Lãi suất danh nghĩa trừ tỷ lệ lạm phát.' },
    { term: 'TIPS', definition: 'Trái phiếu Kho bạc Mỹ có gốc điều chỉnh theo chỉ số giá tiêu dùng.' },
    { term: 'Sức mạnh định giá', definition: 'Khả năng của doanh nghiệp tăng giá bán mà không mất nhiều khách.' },
    { term: 'Chi phí cơ hội', definition: 'Giá trị của phương án tốt nhất bị bỏ qua khi chọn một phương án.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'inflation-hedge-assets-comparison-q',
    question: 'Một người định chuyển toàn bộ tiết kiệm sang một tài sản “nổi tiếng chống lạm phát” vì lạm phát đang tăng. Điều cần cân nhắc đầu tiên?',
    options: [
      { id: 'a', text: 'Tài sản đó đã tăng giá nhiều trong năm qua thì chắc chắn sẽ tiếp tục.', explain: 'Giá đã tăng không bảo đảm tiếp tục; nhiều tài sản “trú ẩn” từng đi ngang hoặc giảm nhiều năm.' },
      { id: 'b', text: 'Chỉ cần chọn tài sản có nhiều người mua nhất.', explain: 'Đông người mua không đảm bảo lợi suất thực và còn có thể là dấu hiệu bong bóng.' },
      { id: 'c', text: 'Đa dạng hóa, so lợi suất thực qua nhiều giai đoạn và xét thanh khoản, chi phí, thời gian nắm giữ.', correct: true, explain: 'Đúng. Vì không có tài sản bảo vệ hoàn hảo, đa dạng hóa và xét rủi ro riêng của từng loại hợp lý hơn đặt cược một nơi.' },
    ],
  },
  sources: [
    { title: 'Treasury Inflation-Protected Securities (TIPS)', publisher: 'TreasuryDirect (U.S. Department of the Treasury)', url: 'https://www.treasurydirect.gov/marketable-securities/tips/' },
    { title: 'Inflation hedge', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Inflation_hedge' },
    { title: 'Treasury Inflation-Protected Securities (TIPS)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Treasury_Inflation-Protected_Securities' },
    { title: 'Gold as an investment', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Gold_as_an_investment' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 105,
}
