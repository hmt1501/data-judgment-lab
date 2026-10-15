import type { Explainer } from '../../../shared/explainer'

export const propertyHoldingCostsSpeculation: Explainer = {
  id: 'property-holding-costs-speculation',
  slug: 'property-holding-costs-speculation',
  question: 'Chi phí nắm giữ bất động sản ảnh hưởng thế nào tới đầu cơ, và vì sao nhiều nước đánh thuế đất bỏ trống?',
  title: 'Chi phí nắm giữ và đầu cơ bất động sản',
  topic: 'real-estate',
  tldr: 'Nếu giữ bất động sản gần như **không tốn chi phí**, người ta có thể giữ lâu để chờ giá tăng. Chi phí nắm giữ (thuế hằng năm, chi phí vốn, bảo trì) làm tăng giá của việc "để đó chờ lên". Tháng 7/2026, Bộ Nông nghiệp và Môi trường đề xuất nghiên cứu thuế cao với đất bỏ trống và giao dịch ngắn hạn, nhưng đây mới là đề xuất, chưa phải luật.',
  keyPoints: [
    'Theo Wikipedia: thuế bất động sản đánh trên quyền sở hữu nên chủ sở hữu trả hằng năm dù có sử dụng hay không; thuế giá trị đất đánh trên giá trị đất, không tính công trình.',
    'Ví dụ bằng chứng quốc tế (theo Wikipedia): Pháp áp thuế nhà bỏ trống từ 1999 và một nghiên cứu năm 2020 cho biết tỷ lệ bỏ trống giảm 13%; Cộng hòa Séc có mức đồng đều 2 Kč/m² với đất xây dựng bỏ trống (chi tiết có thể đã đổi).',
    'Theo VNA/VietnamPlus (27/7/2026): Bộ Nông nghiệp và Môi trường đề xuất thuế cao với đất bỏ trống và giao dịch ngắn hạn, cơ chế điều tiết chênh lệch địa tô; bài nêu các cơ chế này "chưa được quy định trong hệ thống pháp luật hiện hành" và gắn với triển khai Luật Đất đai 2024.',
    'Chuyên gia trong bài nhấn mạnh thuế nên nhắm đúng nhóm đầu cơ thay vì tạo gánh nặng cho người mua để ở, cần lộ trình (thuế suất thấp trước), và cơ sở dữ liệu bất động sản chuẩn hóa.',
    'Ví dụ giả định: một lô đất 3 tỷ đồng với thuế giả định 0,5%/năm tốn 15 triệu đồng/năm; nếu chi phí vốn là 5%/năm thì chi phí cơ hội 150 triệu đồng/năm, lớn hơn thuế gấp 10 lần. Người giữ đất chờ tăng giá đã gánh chi phí này dù không thấy.',
  ],
  causalChain: [
    { from: 'Chi phí nắm giữ thấp (thuế nhỏ, vay rẻ)', to: 'Giữ đất, nhà bỏ trống chờ tăng giá trở nên rẻ', mechanism: 'Chi phí chờ càng thấp thì cái giá của việc không sử dụng càng nhỏ, làm đầu cơ hấp dẫn hơn.' },
    { from: 'Kỳ vọng giá tăng cao', to: 'Cầu đầu cơ tăng, giá đẩy lên', mechanism: 'Người mua để chờ giá tăng không để ở hoặc kinh doanh, nên cầu mang tính đầu cơ làm giá tăng nhanh hơn giá trị sử dụng.' },
    { from: 'Thuế đất bỏ trống hoặc thuế giao dịch ngắn hạn', to: 'Chi phí chờ tăng, đầu cơ kém hấp dẫn', mechanism: 'Người giữ phải trả thuế hằng năm hoặc thuế cao khi bán sớm; nếu thuế đủ lớn, họ bán hoặc đưa vào sử dụng.' },
    { from: 'Một phần tài sản được đưa vào sử dụng hoặc bán ra', to: 'Cung hiệu dụng tăng, giá ổn định hơn', mechanism: 'Đất bỏ trống chuyển sang xây dựng, nhà bỏ trống vào thị trường cho thuê/bán; ví dụ nước ngoài nêu giảm tỷ lệ bỏ trống.' },
    { from: 'Thuế đặt sai đối tượng hoặc thiếu dữ liệu', to: 'Gánh nặng dồn lên người mua để ở, hiệu quả kém', mechanism: 'Thiếu cơ sở dữ liệu sở hữu nên khó xác định ai giữ nhiều, giữ bỏ trống; chi phí chuyển sang người thuê.' },
  ],
  vietnamImpact: [
    { group: 'Người mua nhà để ở', effect: 'Chuyên gia kỳ vọng chính sách nhắm vào đầu cơ, không phải người mua ở; nhưng thuế nếu thiết kế kém có thể đẩy chi phí lên người thuê và người mua.', direction: 'mixed' },
    { group: 'Nhà đầu tư giữ nhiều bất động sản bỏ trống', effect: 'Chi phí nắm giữ có thể tăng nếu đề xuất thành chính sách; cần theo dõi lộ trình và thuế suất khi có dự thảo.', direction: 'down' },
    { group: 'Nhà phát triển dự án', effect: 'Thuế đất bỏ trống làm tăng áp lực đưa quỹ đất vào triển khai, nhưng cũng làm tăng chi phí của dự án chậm vì thủ tục pháp lý.', direction: 'mixed' },
    { group: 'Ngân sách địa phương', effect: 'Có thêm nguồn thu ổn định hằng năm so với nguồn thu từ đất nhạy chu kỳ.', direction: 'up' },
    { group: 'Người thuê nhà', effect: 'Nếu thuế làm tăng nguồn cung cho thuê thì có lợi, nếu chủ nhà chuyển chi phí vào giá thuê thì bất lợi.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ lệ nhà, đất bỏ trống hoặc chưa sử dụng', why: 'Cơ sở để thiết kế thuế và đánh giá hiệu quả.', where: 'Cơ sở dữ liệu đất đai, thống kê của Bộ Xây dựng và Bộ Nông nghiệp và Môi trường' },
    { name: 'Thời gian nắm giữ trung bình khi bán', why: 'Dấu hiệu giao dịch ngắn hạn và đầu cơ.', where: 'Dữ liệu giao dịch của cơ quan thuế, đăng ký đất đai' },
    { name: 'Thuế suất hiệu dụng hằng năm trên giá trị bất động sản', why: 'So với chi phí vốn để thấy chi phí chờ.', where: 'Cơ quan thuế; tự tính từ thuế phải nộp / giá thị trường' },
    { name: 'Tiến độ dự thảo luật thuế đất/bất động sản', why: 'Theo dõi khi đề xuất trở thành quy định.', where: 'Bộ Tài chính, Bộ Nông nghiệp và Môi trường; cổng góp ý dự thảo' },
  ],
  counterpoints: [
    'Thuế cao có thể gây tác dụng phụ: chủ nhà chuyển thuế vào giá thuê, hoặc giảm tính thanh khoản và gây khó cho người có nhu cầu thật; Wikipedia ghi nhận Đức từng bị tòa án tối cao tuyên hệ thống định giá thuế lạc hậu vi hiến năm 2018.',
    'Ví dụ nước ngoài (Pháp, Séc) không chắc áp dụng được cho Việt Nam, nơi quyền sử dụng đất, hệ thống đăng ký và cấu trúc thị trường khác.',
    'Đề xuất 2026 chưa phải luật; thuế suất, đối tượng và lộ trình chưa được xác định trong các nguồn đã đọc. Bài này không dự báo giá bất động sản.',
  ],
  glossary: [
    { term: 'Chi phí nắm giữ', definition: 'Tổng chi phí hằng năm của việc giữ tài sản: thuế, bảo trì, chi phí vốn, cơ hội.' },
    { term: 'Chi phí cơ hội', definition: 'Lợi ích bị bỏ qua khi dùng vốn vào tài sản này thay vì phương án tốt nhất khác.' },
    { term: 'Thuế giá trị đất', definition: 'Thuế đánh trên giá trị đất, không tính công trình xây trên đất.' },
    { term: 'Đầu cơ bất động sản', definition: 'Mua để chờ giá tăng, không nhằm sử dụng hoặc cho thuê lâu dài.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'property-holding-costs-speculation-q',
    question: 'Ví dụ giả định: đất 3 tỷ đồng, thuế 0,5%/năm, chi phí vốn 5%/năm. Chi phí nắm giữ lớn nhất của chủ đất là gì?',
    options: [
      { id: 'a', text: 'Thuế, 15 triệu đồng/năm.', explain: 'Thuế chỉ là khoản nhỏ trong ví dụ này.' },
      { id: 'b', text: 'Chi phí cơ hội của vốn, 150 triệu đồng/năm.', correct: true, explain: 'Đúng: 3 tỷ × 5% = 150 triệu, gấp 10 lần thuế 15 triệu; thuế chỉ làm tăng thêm chi phí chờ.' },
      { id: 'c', text: 'Không có chi phí vì đất không hao mòn.', explain: 'Vốn bị khóa trong đất có chi phí cơ hội dù không thấy khoản chi.' },
    ],
  },
  sources: [
    { title: 'Taxes proposed on vacant land, speculative deals (VNA, 27/7/2026)', publisher: 'VietnamPlus', url: 'https://en.vietnamplus.vn/taxes-proposed-on-vacant-land-speculative-deals-post348946.vnp' },
    { title: 'Property tax', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Property_tax' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 136,
}
