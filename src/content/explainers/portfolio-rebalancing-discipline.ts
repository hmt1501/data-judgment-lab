import type { Explainer } from '../../../shared/explainer'

export const portfolioRebalancingDiscipline: Explainer = {
  id: 'portfolio-rebalancing-discipline',
  slug: 'portfolio-rebalancing-discipline',
  question: 'Tái cân bằng danh mục là gì, nên làm khi nào và vì sao?',
  title: 'Tái cân bằng danh mục: kiểm soát rủi ro, không phải săn lợi suất',
  topic: 'personal-finance',
  tldr: 'Sau mỗi nhịp thị trường, tỷ trọng các tài sản trong danh mục **trôi** khỏi mức mục tiêu: tài sản tăng mạnh chiếm phần lớn hơn và danh mục trở nên rủi ro hơn bạn dự định. Tái cân bằng là đưa tỷ trọng về lại mục tiêu, theo lịch cố định hoặc khi lệch quá một ngưỡng. Mục đích chính là **giữ mức rủi ro đã chọn**; lợi suất cao hơn chỉ là phần thưởng không chắc chắn.',
  keyPoints: [
    'Tái cân bằng là đưa danh mục về tỷ trọng mục tiêu sau khi biến động giá làm tỷ trọng lệch; có thể bán tài sản tăng nhiều và mua tài sản tăng ít, hoặc dùng tiền nạp thêm/rút ra để chỉnh (theo Wikipedia).',
    'Hai cách phổ biến: **theo lịch** (ví dụ hằng năm) và **theo ngưỡng** (khi một tài sản lệch khỏi mục tiêu quá mức đặt trước, ví dụ 5 điểm %).',
    'Không có "tần suất tốt nhất" được chứng minh chắc chắn. Theo Vanguard (nghiên cứu 7/2010, dữ liệu cổ phiếu–trái phiếu Mỹ 1926–2009), mục tiêu chính của tái cân bằng là giảm rủi ro so với phân bổ mục tiêu chứ không phải tối đa hóa lợi suất; lợi suất điều chỉnh rủi ro không khác đáng kể giữa tái cân bằng hằng tháng, quý hay năm, nhưng số lần giao dịch và chi phí tăng mạnh. Với danh mục cổ phiếu–trái phiếu đa dạng, họ nhận định theo dõi hằng năm/nửa năm với ngưỡng 5% là một cân bằng hợp lý (kết luận cho thị trường Mỹ, không phải quy tắc phổ quát).',
    'Càng tái cân bằng thường xuyên, danh mục càng sát mục tiêu nhưng **chi phí giao dịch và thuế** càng cao, nên phải cân bằng hai thứ.',
    'Cách rẻ nhất thường là dùng **dòng tiền mới** để mua tài sản đang hụt tỷ trọng, hạn chế phải bán.',
  ],
  causalChain: [
    { from: 'Các tài sản có lợi suất khác nhau trong cùng kỳ', to: 'Tỷ trọng danh mục lệch khỏi mục tiêu', mechanism: 'Tài sản tăng nhanh phình to về tỷ trọng, tài sản tăng chậm co lại, nên rủi ro thực của danh mục dần khác rủi ro dự định.' },
    { from: 'Tỷ trọng lệch (ví dụ cổ phiếu chiếm quá nhiều)', to: 'Danh mục chịu biến động lớn hơn mức chấp nhận', mechanism: 'Cổ phiếu thường biến động mạnh hơn trái phiếu; khi chiếm tỷ trọng lớn hơn, một đợt giảm sẽ gây thiệt hại lớn hơn dự tính.' },
    { from: 'Đưa danh mục về mục tiêu theo lịch hoặc ngưỡng', to: 'Rủi ro trở lại mức dự định', mechanism: 'Bán bớt phần đã tăng nhiều, mua thêm phần đang rẻ tương đối, buộc nhà đầu tư hành động ngược với cảm xúc đuổi theo giá.' },
    { from: 'Giao dịch để tái cân bằng', to: 'Phát sinh chi phí và có thể phát sinh thuế', mechanism: 'Mỗi lệnh bán/mua có phí; thu nhập từ bán tài sản có thể bị đánh thuế, nên không nên chỉnh quá dày.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân giữ cả cổ phiếu, vàng, tiền gửi', effect: 'Khi một loại tài sản tăng mạnh (ví dụ cổ phiếu hoặc vàng), tỷ trọng của nó phình lên và danh mục trở nên tập trung hơn mức dự định; cần xem lại định kỳ.', direction: 'mixed' },
    { group: 'Người đầu tư định kỳ vào quỹ', effect: 'Có thể dùng khoản nạp mới để bổ sung tài sản đang thiếu tỷ trọng, giảm nhu cầu bán và chi phí.', direction: 'up' },
    { group: 'Người gần tuổi nghỉ hưu', effect: 'Không tái cân bằng khiến danh mục sau giai đoạn thị trường tăng dài có thể rủi ro hơn mức phù hợp với độ tuổi.', direction: 'down' },
    { group: 'Nhà đầu tư dễ bị cảm xúc chi phối', effect: 'Quy tắc cố định (lịch hoặc ngưỡng) giúp tránh quyết định theo tâm lý đám đông.', direction: 'up' },
  ],
  indicators: [
    { name: 'Tỷ trọng thực tế so với mục tiêu từng loại tài sản', why: 'Cho biết mức lệch và có chạm ngưỡng đã đặt hay không.', where: 'Bảng tính cá nhân; sao kê tài khoản chứng khoán/quỹ' },
    { name: 'Biến động và mức giảm tối đa của danh mục', why: 'Đối chiếu rủi ro thực tế với mức bạn chịu được.', where: 'Tự tính từ lịch sử giá trị danh mục' },
    { name: 'Tổng chi phí giao dịch dự kiến cho đợt tái cân bằng', why: 'Quyết định có đáng chỉnh hay chờ đến kỳ sau.', where: 'Biểu phí của công ty chứng khoán/quỹ' },
  ],
  counterpoints: [
    'Trong thị trường có xu hướng tăng kéo dài, giữ nguyên (không bán bớt tài sản đang tăng) có thể cho lợi suất cao hơn; tái cân bằng đổi lấy rủi ro thấp hơn chứ không phải lợi suất cao hơn.',
    'Lợi ích của tái cân bằng dựa trên giả định về lợi suất, độ biến động và tương quan trong quá khứ; các giả định này có thể thay đổi, ví dụ tương quan cổ phiếu–trái phiếu.',
    'Với danh mục nhỏ, phí và thuế có thể lấn át lợi ích của việc chỉnh quá thường xuyên.',
  ],
  glossary: [
    { term: 'Tái cân bằng (rebalancing)', definition: 'Đưa tỷ trọng các tài sản về mức mục tiêu sau khi giá biến động.' },
    { term: 'Phân bổ tài sản', definition: 'Tỷ trọng vốn đặt vào từng loại tài sản; quyết định phần lớn mức rủi ro của danh mục.' },
    { term: 'Trôi tỷ trọng (drift)', definition: 'Hiện tượng tỷ trọng thực tế lệch dần khỏi mục tiêu do giá tài sản biến động khác nhau.' },
    { term: 'Ngưỡng tái cân bằng', definition: 'Mức lệch tối đa cho phép trước khi phải chỉnh, ví dụ 5 điểm %.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'portfolio-rebalancing-discipline-q',
    question: 'Danh mục 60% cổ phiếu / 40% trái phiếu (ví dụ giả định 100 triệu). Sau một năm cổ phiếu +20%, trái phiếu +3%. Điều nào đúng?',
    options: [
      { id: 'a', text: 'Tỷ trọng cổ phiếu lên khoảng 64%; danh mục rủi ro hơn mục tiêu và có thể tái cân bằng.', correct: true, explain: 'Đúng. Cổ phiếu 60 → 72, trái phiếu 40 → 41,2; tổng 113,2; cổ phiếu chiếm khoảng 63,6%. Tái cân bằng đưa về 60/40 để giữ rủi ro như dự định.' },
      { id: 'b', text: 'Tái cân bằng chắc chắn làm tăng lợi suất vì bán tài sản đắt, mua tài sản rẻ.', explain: 'Không chắc. Lợi ích về lợi suất phụ thuộc điều kiện thị trường; mục đích chính là kiểm soát rủi ro.' },
      { id: 'c', text: 'Nên tái cân bằng mỗi ngày để sát mục tiêu tuyệt đối.', explain: 'Chi phí giao dịch và thuế sẽ tăng nhanh; thường chọn lịch hoặc ngưỡng đủ rộng.' },
    ],
  },
  sources: [
    { title: 'Best practices for portfolio rebalancing (Jaconetti, Kinniry, Zilbering)', publisher: 'Vanguard research, tháng 7/2010 (bản PDF lưu trên indexacapital.com)', url: 'https://indexacapital.com/bundles/unaiadvisor/docs/papers/2010-Vanguard-Best-practices-for-portfolio-rebalancing.pdf?v=241' },
    { title: 'Rebalancing investments', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Rebalancing_investments' },
    { title: 'Asset allocation', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Asset_allocation' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 141,
}
