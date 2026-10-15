import type { Explainer } from '../../../shared/explainer'

export const bondPricesVsInterestRates: Explainer = {
  id: 'bond-prices-vs-interest-rates',
  slug: 'bond-prices-vs-interest-rates',
  question: 'Vì sao lãi suất tăng làm giá trái phiếu giảm?',
  title: 'Trái phiếu cũ có lãi cố định kém hấp dẫn khi lãi suất mới cao hơn, nên giá phải giảm để lợi suất tăng theo',
  topic: 'markets-investing',
  tldr: 'Trái phiếu trả **lãi coupon cố định**. Khi lãi suất thị trường tăng, trái phiếu mới trả nhiều hơn nên ai muốn bán trái phiếu cũ phải chịu **giá thấp hơn** để người mua có cùng mức lợi suất. Kỳ hạn càng dài, coupon càng thấp thì giá càng nhạy với lãi suất. Nếu giữ đến đáo hạn và tổ chức phát hành không vỡ nợ, bạn vẫn nhận đủ gốc và lãi; thua lỗ trên giấy chỉ thành thật khi bán sớm.',
  keyPoints: [
    'Giá trái phiếu = giá trị hiện tại của dòng tiền tương lai (coupon và gốc) chiết khấu theo **lợi suất yêu cầu**. Lợi suất yêu cầu tăng thì giá hiện tại giảm.',
    'Ví dụ giả định: trái phiếu 5 năm, mệnh giá 100, coupon 8% một năm, bán ở 100 khi lợi suất thị trường 8%. Nếu lợi suất lên 9% giá còn khoảng 96,1; nếu xuống 7% giá khoảng 104,1.',
    'Độ nhạy gọi là **thời lượng (duration)**: kỳ hạn dài và coupon thấp thì giá thay đổi mạnh hơn khi lãi suất đổi; trái phiếu ngắn hạn ít biến động giá.',
    'Hai loại rủi ro cần tách: **rủi ro lãi suất** (giá biến động theo lãi suất) và **rủi ro tín dụng** (người phát hành không trả được nợ); trái phiếu chính phủ chủ yếu chịu loại thứ nhất.',
    'Giữ đến đáo hạn vẫn nhận lợi suất mua ban đầu nếu không vỡ nợ, nhưng chi phí cơ hội là bỏ lỡ lãi suất cao hơn; quỹ trái phiếu không có "ngày đáo hạn" nên rủi ro giá thể hiện ngay trong giá trị tài sản ròng.',
  ],
  causalChain: [
    { from: 'Ngân hàng trung ương tăng lãi suất hoặc kỳ vọng lạm phát tăng', to: 'Lợi suất yêu cầu của trái phiếu mới tăng', mechanism: 'Nhà đầu tư đòi lợi suất cao hơn để bù lạm phát và chi phí cơ hội.' },
    { from: 'Trái phiếu mới có coupon cao hơn', to: 'Trái phiếu cũ coupon thấp kém hấp dẫn', mechanism: 'Không ai trả giá đầy đủ cho coupon 8% khi mua trái phiếu mới được 9% với cùng rủi ro.' },
    { from: 'Trái phiếu cũ kém hấp dẫn', to: 'Giá trái phiếu cũ giảm cho tới khi lợi suất bằng thị trường', mechanism: 'Giá thấp hơn mệnh giá bù phần coupon thấp: lợi suất = coupon cộng phần lãi vốn khi giá về mệnh giá lúc đáo hạn.' },
    { from: 'Giá giảm', to: 'Người giữ trái phiếu lỗ giá nếu bán sớm', mechanism: 'Lỗ chỉ thành hiện thực khi bán; người giữ đến đáo hạn nhận đủ gốc nhưng với lợi suất thấp hơn thị trường mới.' },
    { from: 'Lãi suất giảm', to: 'Giá trái phiếu tăng', mechanism: 'Cùng cơ chế theo chiều ngược lại: coupon cũ cao hơn lợi suất thị trường mới nên trái phiếu cũ được trả giá cao.' },
  ],
  vietnamImpact: [
    { group: 'Người đầu tư trái phiếu chính phủ và quỹ trái phiếu', effect: 'Khi lợi suất tăng, giá trị tài sản ròng của quỹ giảm; quỹ có thời lượng dài chịu biến động mạnh hơn.', direction: 'down' },
    { group: 'Ngân hàng nắm trái phiếu', effect: 'Danh mục trái phiếu chính phủ giảm giá trị khi lãi suất tăng, ảnh hưởng vốn nếu phải đánh giá theo thị trường.', direction: 'down' },
    { group: 'Người gửi tiết kiệm chuyển sang trái phiếu', effect: 'Cần phân biệt tiền gửi (giá trị không đổi) với trái phiếu (giá dao động trước đáo hạn).', direction: 'mixed' },
    { group: 'Người mua trái phiếu doanh nghiệp', effect: 'Chịu cả rủi ro lãi suất lẫn rủi ro tín dụng; lãi suất cao còn làm khó doanh nghiệp tái cấp vốn.', direction: 'down' },
    { group: 'Người mua trái phiếu khi lãi suất đang giảm', effect: 'Hưởng lãi vốn khi giá tăng thêm cùng coupon.', direction: 'up' },
  ],
  indicators: [
    { name: 'Lợi suất trái phiếu chính phủ các kỳ hạn', why: 'Là lãi suất tham chiếu cho giá mọi trái phiếu khác.', where: 'Sở Giao dịch Chứng khoán Hà Nội (HNX), Bộ Tài chính' },
    { name: 'Lãi suất điều hành và lãi suất liên ngân hàng', why: 'Dẫn dắt lợi suất ngắn hạn và kỳ vọng.', where: 'Ngân hàng Nhà nước (sbv.gov.vn)' },
    { name: 'Thời lượng (duration) của quỹ hay danh mục trái phiếu', why: 'Cho biết giá sẽ biến động bao nhiêu khi lãi suất đổi 1 điểm phần trăm.', where: 'Bản cáo bạch và báo cáo của quỹ' },
    { name: 'Xếp hạng tín nhiệm và chênh lệch lợi suất với trái phiếu chính phủ', why: 'Đo phần bù rủi ro tín dụng của trái phiếu doanh nghiệp.', where: 'Báo cáo của tổ chức xếp hạng; HNX' },
  ],
  counterpoints: [
    'Giá giảm khi lãi suất tăng chỉ là một nửa câu chuyện: người giữ lâu sẽ tái đầu tư coupon với lãi suất cao hơn nên lợi suất tương lai tăng, thời gian hòa vốn tính bằng thời lượng.',
    'Nếu lãi suất tăng vì tăng trưởng tốt, rủi ro tín dụng giảm và có thể bù một phần; nếu tăng vì lạm phát hoặc rủi ro tài khóa thì tác động xấu cả hai chiều.',
    'Với trái phiếu ít giao dịch (như nhiều trái phiếu doanh nghiệp), giá niêm yết hoặc định giá có thể ít cập nhật; giá ít thay đổi không đồng nghĩa rủi ro thấp mà có thể là chưa phản ánh.',
  ],
  glossary: [
    { term: 'Coupon', definition: 'Khoản lãi định kỳ trái phiếu trả cho người nắm giữ, tính trên mệnh giá.' },
    { term: 'Lợi suất đến đáo hạn', definition: 'Tỷ suất sinh lợi hằng năm nếu mua ở giá hiện tại và giữ đến đáo hạn.' },
    { term: 'Thời lượng (duration)', definition: 'Thước đo độ nhạy giá trái phiếu với thay đổi lợi suất.' },
    { term: 'Rủi ro lãi suất', definition: 'Rủi ro giá trái phiếu giảm khi lãi suất thị trường tăng.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'bond-prices-vs-interest-rates-q',
    question: 'Bạn nắm hai trái phiếu cùng chất lượng tín dụng: kỳ hạn 2 năm và kỳ hạn 15 năm. Lãi suất thị trường tăng 1 điểm phần trăm. Điều gì xảy ra?',
    options: [
      { id: 'a', text: 'Cả hai giảm giá như nhau vì cùng lãi suất.', explain: 'Kỳ hạn dài hơn chịu ảnh hưởng nhiều hơn vì nhiều dòng tiền xa bị chiết khấu mạnh hơn.' },
      { id: 'b', text: 'Trái phiếu 15 năm giảm giá nhiều hơn trái phiếu 2 năm.', correct: true, explain: 'Đúng. Thời lượng dài hơn nên độ nhạy với lãi suất cao hơn.' },
      { id: 'c', text: 'Trái phiếu 2 năm giảm giá nhiều hơn vì sắp đáo hạn.', explain: 'Ngược lại: gần đáo hạn, giá hội tụ về mệnh giá nên ít biến động.' },
    ],
  },
  sources: [
    { title: 'Bond valuation', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Bond_valuation' },
    { title: 'Yield curve', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Yield_curve' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 22,
}
