import type { Explainer } from '../../../shared/explainer'

export const interestCoverageCovenantsLeverage: Explainer = {
  id: 'interest-coverage-covenants-leverage',
  slug: 'interest-coverage-covenants-leverage',
  question: 'Khả năng trả lãi, đòn bẩy và điều khoản ràng buộc khi vay hoạt động thế nào?',
  title: 'Khả năng trả lãi, đòn bẩy và điều khoản ràng buộc khi vay',
  topic: 'markets-investing',
  tldr: 'Người cho vay không chỉ nhìn lãi suất mà nhìn **khả năng trả lãi** (lợi nhuận hoạt động chia cho lãi vay) và **đòn bẩy** (nợ so với lợi nhuận hay vốn). Để bảo vệ mình, họ đưa vào hợp đồng các **điều khoản ràng buộc (covenant)**: nếu chỉ số vượt ngưỡng, bên vay có thể phải trả nợ sớm hoặc bị hạn chế chia cổ tức, vay thêm. Chỉ số nhạy với lãi suất và lợi nhuận, nên thường xấu đi đúng lúc kinh tế khó khăn.',
  keyPoints: [
    'Theo Wikipedia ("Times interest earned", đọc 15/10/2026): hệ số thanh toán lãi tính bằng EBIT hoặc EBITDA chia cho tổng chi phí lãi vay; dưới 1 nghĩa là lợi nhuận hoạt động không đủ trả lãi, trang nêu mức dưới 2,5 lần thường là dấu hiệu cảnh báo. Ngưỡng chỉ là kinh nghiệm, khác nhau theo ngành.',
    'Theo Wikipedia ("Debt covenant"): hợp đồng vay có thể yêu cầu báo cáo định kỳ, cấm hành động làm yếu tài chính (chia cổ tức, mua lại cổ phiếu, vay thêm), và gắn với thay đổi của tỷ lệ nợ/vốn chủ hay hệ số trả lãi; trong một số trường hợp nhất định bên cho vay có thể yêu cầu trả nợ ngay (trang không nêu chi tiết cơ chế ngưỡng).',
    'Covenant tài chính thường có hai dạng đối xứng: **đòn bẩy tối đa** (ví dụ nợ ròng / EBITDA không vượt một ngưỡng) và **hệ số trả lãi tối thiểu**. Ngưỡng cụ thể do hai bên thương lượng trong từng hợp đồng nên bài không nêu con số "chuẩn".',
    'Bản tóm tắt chính sách của Ngân hàng Dự trữ Liên bang Boston (2020) cho thấy: tỷ lệ nợ trên thu nhập doanh nghiệp phi tài chính Mỹ khi đó ở mức rất cao trong lịch sử nhưng hệ số trả lãi vẫn trên mức bình quân lịch sử của nhiều thập kỷ; mô hình của họ cho biết **hệ số trả lãi giảm mạnh hơn khi lãi suất tăng nếu lãi suất xuất phát điểm thấp**, và một rủi ro được nêu là thu nhập giảm cùng lúc chênh lệch lãi suất (rủi ro tín dụng) nới rộng lúc suy thoái.',
    'Ví dụ giả định: EBIT 120, lãi vay 40 thì hệ số = 3,0 lần. Nếu EBIT giảm 40% còn 72, hệ số còn 1,8 lần. Nếu lãi suất thả nổi tăng làm lãi vay thành 50, hệ số với EBIT 120 còn 2,4 lần. Với covenant nợ ròng/EBITDA ≤ 3,5 lần: nợ ròng 600 và EBITDA 200 cho 3,0 lần; EBITDA giảm 20% còn 160 sẽ thành 3,75 lần và vi phạm.',
  ],
  causalChain: [
    { from: 'Doanh nghiệp vay nhiều (đòn bẩy cao)', to: 'Lãi vay chiếm phần lớn lợi nhuận hoạt động', mechanism: 'Lãi là chi phí cố định không phụ thuộc kết quả kinh doanh, nên lợi nhuận sau lãi dao động mạnh hơn lợi nhuận hoạt động.' },
    { from: 'Lợi nhuận hoạt động giảm hoặc lãi suất tăng', to: 'Hệ số trả lãi giảm', mechanism: 'Tử số giảm hoặc mẫu số tăng; với nợ lãi thả nổi, lãi suất tăng chuyển nhanh vào chi phí.' },
    { from: 'Hệ số vượt ngưỡng trong hợp đồng', to: 'Vi phạm covenant', mechanism: 'Khi vi phạm, bên cho vay có quyền yêu cầu trả nợ sớm hoặc đàm phán lại điều kiện (thêm phí, lãi, tài sản bảo đảm).' },
    { from: 'Vi phạm hoặc nguy cơ vi phạm', to: 'Doanh nghiệp bị buộc cắt chi tiêu, bán tài sản hoặc huy động vốn gấp', mechanism: 'Phải ưu tiên trả nợ hoặc xin miễn trừ, làm giảm khả năng đầu tư và có thể kéo lợi nhuận tiếp.' },
    { from: 'Nhiều doanh nghiệp cùng chịu sốc lãi suất hoặc suy thoái', to: 'Rủi ro mất khả năng trả nợ tăng trong hệ thống', mechanism: 'Chênh lệch lãi suất nới rộng khi suy thoái làm chi phí vay tăng đúng lúc doanh thu giảm, khuếch đại căng thẳng.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp vay ngân hàng hoặc phát hành trái phiếu', effect: 'Cần theo dõi hệ số trả lãi và các cam kết tài chính trong hợp đồng; lãi suất thả nổi làm hệ số nhạy với chính sách tiền tệ.', direction: 'down' },
    { group: 'Ngân hàng cho vay', effect: 'Dùng hệ số trả lãi và đòn bẩy để thẩm định, và điều khoản ràng buộc để giám sát sau giải ngân.', direction: 'mixed' },
    { group: 'Nhà đầu tư trái phiếu doanh nghiệp', effect: 'Hệ số trả lãi thấp, đòn bẩy cao là cảnh báo; nên đọc các cam kết tài chính trong bản cáo bạch.', direction: 'down' },
    { group: 'Nhà đầu tư cổ phiếu', effect: 'Đòn bẩy khuếch đại lợi nhuận khi thuận lợi và thua lỗ khi khó khăn; so sánh với cùng ngành để đánh giá.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Hệ số trả lãi (EBIT hoặc EBITDA / chi phí lãi vay)', why: 'Đo mức đệm giữa lợi nhuận hoạt động và nghĩa vụ lãi.', where: 'Tự tính từ báo cáo kết quả kinh doanh và thuyết minh vay' },
    { name: 'Nợ ròng / EBITDA và nợ / vốn chủ sở hữu', why: 'Các thước đo đòn bẩy thường dùng trong covenant.', where: 'Bảng cân đối kế toán và báo cáo kết quả kinh doanh' },
    { name: 'Lãi suất thả nổi và cơ cấu kỳ hạn nợ', why: 'Xác định bao nhiêu nợ phải tái cấp vốn hoặc điều chỉnh lãi trong 12 tháng tới.', where: 'Thuyết minh khoản vay và trái phiếu' },
    { name: 'Điều khoản ràng buộc trong hợp đồng vay hoặc bản cáo bạch', why: 'Cho biết ngưỡng và hậu quả khi vi phạm.', where: 'Bản cáo bạch trái phiếu, hợp đồng tín dụng (bên liên quan được xem), công bố thông tin' },
  ],
  counterpoints: [
    'Hệ số trả lãi dựa trên lợi nhuận kế toán chứ không phải dòng tiền; EBITDA bỏ qua chi đầu tư và thuế, nên hệ số đẹp vẫn có thể che giấu khó khăn tiền mặt.',
    'Đòn bẩy cao không luôn xấu: ngành có dòng tiền ổn định (hạ tầng, tiện ích) chịu được đòn bẩy cao hơn; ngưỡng nên so với ngành và chu kỳ.',
    'Bài dựa trên nguồn quốc tế và ví dụ giả định; điều khoản và quy định Việt Nam về trái phiếu và cho vay có thể khác, không được nêu chi tiết vì chưa đọc nguồn xác nhận.',
  ],
  glossary: [
    { term: 'Hệ số trả lãi', definition: 'Lợi nhuận hoạt động (EBIT hoặc EBITDA) chia cho chi phí lãi vay.' },
    { term: 'Đòn bẩy tài chính', definition: 'Mức độ dùng nợ so với lợi nhuận hoặc vốn chủ sở hữu.' },
    { term: 'Covenant (điều khoản ràng buộc)', definition: 'Cam kết trong hợp đồng vay về báo cáo, hạn chế hành động hoặc duy trì chỉ số tài chính.' },
    { term: 'EBIT / EBITDA', definition: 'Lợi nhuận trước lãi vay và thuế; EBITDA còn trước khấu hao.' },
    { term: 'Nợ ròng', definition: 'Tổng nợ vay trừ tiền và tương đương tiền.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'interest-coverage-covenants-leverage-q',
    question: 'Ví dụ giả định: công ty có EBIT 120 và lãi vay 40 (hệ số 3,0 lần), hợp đồng vay yêu cầu hệ số tối thiểu 2,5 lần. Nếu EBIT giảm 40%, chuyện gì xảy ra?',
    options: [
      { id: 'a', text: 'Hệ số còn 1,8 lần, thấp hơn ngưỡng, có thể vi phạm covenant.', correct: true, explain: 'Đúng. EBIT mới là 72, chia 40 được 1,8 lần < 2,5 lần; bên cho vay có thể yêu cầu xử lý theo hợp đồng.' },
      { id: 'b', text: 'Hệ số vẫn 3,0 lần vì lãi vay không đổi.', explain: 'Lãi vay không đổi nhưng tử số giảm 40%, nên hệ số giảm theo.' },
      { id: 'c', text: 'Không ảnh hưởng vì covenant chỉ áp dụng cho ngân hàng.', explain: 'Covenant áp dụng cho bên vay theo hợp đồng cụ thể; bên cho vay là ngân hàng hay nhà đầu tư trái phiếu đều có thể đặt.' },
    ],
  },
  sources: [
    { title: 'The Great Leverage 2.0? A Tale of Different Indicators of Corporate Leverage', publisher: 'Federal Reserve Bank of Boston', url: 'https://www.bostonfed.org/publications/current-policy-perspectives/2020/the-great-leverage-2-0-a-tale-of-different-indicators-of-corporate-leverage.aspx' },
    { title: 'Times interest earned', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Times_interest_earned' },
    { title: 'Debt covenant', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Debt_covenant' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 192,
}
