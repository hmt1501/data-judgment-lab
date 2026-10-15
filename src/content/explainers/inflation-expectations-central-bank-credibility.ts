import type { Explainer } from '../../../shared/explainer'

export const inflationExpectationsCentralBankCredibility: Explainer = {
  id: 'inflation-expectations-central-bank-credibility',
  slug: 'inflation-expectations-central-bank-credibility',
  question: 'Kỳ vọng lạm phát và uy tín của ngân hàng trung ương quan trọng thế nào?',
  title: 'Kỳ vọng lạm phát tự thực hiện được: ngân hàng trung ương có uy tín thì lạm phát dễ về mục tiêu hơn',
  topic: 'macro',
  tldr: 'Giá cả hôm nay phụ thuộc vào việc mọi người **tin** giá sẽ tăng bao nhiêu: doanh nghiệp đặt giá, người lao động đòi lương, người cho vay ấn định lãi suất đều dựa trên niềm tin đó. Khi người dân tin ngân hàng trung ương sẽ giữ lạm phát quanh mục tiêu (kỳ vọng "neo"), cú sốc giá ít lan rộng; khi niềm tin lung lay, lạm phát tự duy trì và tốn kém hơn để kéo xuống.',
  keyPoints: [
    '**Kỳ vọng lạm phát** là tỷ lệ lạm phát mà hộ gia đình, doanh nghiệp, thị trường tin sẽ xảy ra; nó ảnh hưởng trực tiếp tới lương, giá bán, hợp đồng và lãi suất.',
    'Ngân hàng trung ương đặt mục tiêu rõ ràng (nhiều nước chọn 2%) và truyền thông nhất quán để **neo** kỳ vọng; mục tiêu có đáng tin hay không phụ thuộc vào thành tích và độc lập khỏi áp lực chính trị.',
    'Kỳ vọng neo giúp giảm "chi phí hy sinh": cùng một cú sốc giá, kỳ vọng ổn định thì ngân hàng trung ương chỉ cần tăng lãi suất vừa phải; kỳ vọng mất neo thì phải thắt chặt mạnh và lâu hơn.',
    'Đo kỳ vọng bằng nhiều cách: khảo sát hộ gia đình/chuyên gia, chênh lệch lợi suất giữa trái phiếu thường và trái phiếu chỉ số hóa lạm phát; mỗi cách có sai lệch riêng.',
    'Ở Việt Nam, Ngân hàng Nhà nước điều hành với mục tiêu ổn định giá trị đồng tiền cùng nhiều mục tiêu khác, và Quốc hội đặt mục tiêu lạm phát hằng năm; uy tín đến từ khả năng giữ lạm phát và tỷ giá ổn định nhất quán. Ví dụ: Quốc hội thông qua ngày 13/11/2025 nghị quyết kế hoạch năm 2026 với CPI bình quân khoảng **4,5%** (Báo Đầu tư, 14/11/2025), và NHNN cũng nêu mục tiêu lạm phát bình quân khoảng 4,5% cho năm 2026 (Tạp chí Kinh tế – Tài chính, 23/01/2026).',
  ],
  causalChain: [
    { from: 'Ngân hàng trung ương công bố mục tiêu và hành động nhất quán', to: 'Kỳ vọng lạm phát dài hạn được neo quanh mục tiêu', mechanism: 'Người dân và doanh nghiệp học từ lịch sử: nếu cú sốc giá trước đây được xử lý đúng mục tiêu, họ tin sẽ như vậy lần sau.' },
    { from: 'Kỳ vọng neo', to: 'Cú sốc giá tạm thời không lan thành lạm phát kéo dài', mechanism: 'Doanh nghiệp không vội tăng giá bù trước và người lao động không đòi tăng lương mạnh vì họ tin giá sẽ ổn định lại.' },
    { from: 'Cú sốc giá lặp lại, ngân hàng trung ương phản ứng chậm hoặc nới lỏng', to: 'Niềm tin giảm, kỳ vọng lạm phát tăng', mechanism: 'Mọi người bắt đầu đặt giá, lương, lãi suất cao hơn "phòng ngừa" lạm phát tương lai.' },
    { from: 'Kỳ vọng tăng', to: 'Lạm phát thực tế tăng đúng như kỳ vọng (tự thực hiện)', mechanism: 'Vòng xoáy lương – giá, lãi suất đòi hỏi cao hơn và tâm lý tích trữ làm giá thực sự tăng.' },
    { from: 'Kỳ vọng mất neo', to: 'Chi phí kiềm chế lạm phát về sau lớn hơn', mechanism: 'Phải thắt chặt tiền tệ mạnh và lâu, chấp nhận tăng trưởng thấp và thất nghiệp cao hơn để xây lại uy tín.' },
  ],
  vietnamImpact: [
    { group: 'Người gửi tiết kiệm', effect: 'Kỳ vọng lạm phát cao khiến người gửi đòi lãi suất cao hơn hoặc chuyển sang vàng, ngoại tệ, bất động sản.', direction: 'mixed' },
    { group: 'Người vay', effect: 'Nếu ngân hàng tăng lãi suất phòng ngừa lạm phát, chi phí vay tăng; ngược lại kỳ vọng ổn định giúp lãi suất vay ổn định.', direction: 'mixed' },
    { group: 'Doanh nghiệp', effect: 'Kỳ vọng ổn định cho phép lập kế hoạch giá, lương, đầu tư dài hạn; kỳ vọng bất ổn làm tăng tích trữ hàng và chi phí vốn.', direction: 'mixed' },
    { group: 'Tỷ giá USD/VND', effect: 'Niềm tin vào giá trị VND ảnh hưởng nhu cầu giữ USD, vàng; uy tín chính sách giúp giảm hiện tượng "đô la hóa".', direction: 'mixed' },
  ],
  indicators: [
    { name: 'CPI và lạm phát cơ bản so với mục tiêu', why: 'Thành tích thực tế là nền tảng của uy tín.', where: 'Cục Thống kê (nso.gov.vn)' },
    { name: 'Khảo sát kỳ vọng lạm phát của hộ gia đình và doanh nghiệp', why: 'Đo trực tiếp niềm tin về giá tương lai.', where: 'Khảo sát của Fed, ngân hàng trung ương châu Âu; ở Việt Nam một số khảo sát doanh nghiệp, cần kiểm tra nguồn công bố' },
    { name: 'Chênh lệch lợi suất trái phiếu thường và trái phiếu chỉ số hóa lạm phát (breakeven)', why: 'Phản ánh kỳ vọng lạm phát của thị trường tài chính.', where: 'Bộ Tài chính Mỹ, Fed St. Louis (FRED)' },
    { name: 'Tỷ giá, giá vàng trong nước so với thế giới', why: 'Tín hiệu mất niềm tin vào đồng nội tệ thường xuất hiện ở đây.', where: 'Ngân hàng Nhà nước, dữ liệu thị trường' },
  ],
  counterpoints: [
    'Khảo sát kỳ vọng của hộ gia đình thường bị chi phối bởi giá hàng thiết yếu (xăng, thực phẩm) họ mua thường xuyên, nên có thể lệch khỏi lạm phát toàn nền kinh tế.',
    'Neo kỳ vọng không miễn phí: giữ uy tín đôi khi đòi hỏi ngân hàng trung ương thắt chặt khi kinh tế đang yếu, và nhiều nước còn phải cân đối nhiều mục tiêu (tăng trưởng, tỷ giá, ổn định tài chính).',
    'Uy tín xây lâu, mất nhanh; một lần xử lý yếu kém có thể làm kỳ vọng mất neo trong thời gian dài.',
  ],
  glossary: [
    { term: 'Kỳ vọng lạm phát', definition: 'Mức lạm phát mà các chủ thể kinh tế tin sẽ xảy ra trong tương lai.' },
    { term: 'Neo kỳ vọng', definition: 'Trạng thái kỳ vọng lạm phát dài hạn ổn định quanh mục tiêu, ít bị cú sốc ngắn hạn làm lệch.' },
    { term: 'Uy tín chính sách', definition: 'Mức độ công chúng tin rằng ngân hàng trung ương sẽ thực hiện cam kết về lạm phát.' },
    { term: 'Breakeven inflation', definition: 'Chênh lệch giữa lợi suất trái phiếu thường và trái phiếu chỉ số hóa lạm phát, dùng như thước đo kỳ vọng thị trường.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'inflation-expectations-central-bank-credibility-q',
    question: 'Giá xăng tăng mạnh một quý, nhưng khảo sát cho thấy kỳ vọng lạm phát 5 năm vẫn ổn định. Nên đọc thế nào?',
    options: [
      { id: 'a', text: 'Lạm phát chắc chắn sẽ tiếp tục leo thang.', explain: 'Kỳ vọng dài hạn ổn định là dấu hiệu cú sốc có thể mang tính tạm thời.' },
      { id: 'b', text: 'Cú sốc nhiều khả năng mang tính tạm thời vì kỳ vọng còn neo, nhưng cần theo dõi nếu kéo dài.', correct: true, explain: 'Đúng. Kỳ vọng neo giúp cú sốc giá không lan thành vòng xoáy lương – giá; vẫn phải theo dõi vì kéo dài có thể làm kỳ vọng dịch chuyển.' },
      { id: 'c', text: 'Kỳ vọng không quan trọng, chỉ có cung tiền quyết định lạm phát.', explain: 'Kỳ vọng ảnh hưởng hành vi đặt giá và lương, nên là kênh quan trọng quyết định lạm phát.' },
    ],
  },
  sources: [
    { title: 'Why does the Federal Reserve aim for inflation of 2 percent over the longer run?', publisher: 'Federal Reserve Board', url: 'https://www.federalreserve.gov/faqs/economy_14400.htm' },
    { title: 'The Great Inflation', publisher: 'Federal Reserve History (Federal Reserve Board)', url: 'https://www.federalreservehistory.org/essays/great-inflation' },
    { title: 'Quốc hội chốt GDP năm 2026 tăng từ 10%, CPI khoảng 4,5%', publisher: 'Báo Đầu tư (14/11/2025)', url: 'https://baodautu.vn/quoc-hoi-chot-gdp-nam-2026-tang-tu-10-cpi-khoang-45-d433738.html' },
    { title: 'Ngân hàng Nhà nước xác lập mục tiêu điều hành tiền tệ năm 2026', publisher: 'Tạp chí Kinh tế – Tài chính (23/01/2026)', url: 'https://tapchikinhtetaichinh.vn/ngan-hang-nha-nuoc-xac-lap-muc-tieu-dieu-hanh-tien-te-nam-2026-142459.html' },
    { title: 'Inflation', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Inflation' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 14,
}
