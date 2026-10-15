import type { Explainer } from '../../../shared/explainer'

export const vietnamLocalizationRateFdiLinkages: Explainer = {
  id: 'vietnam-localization-rate-fdi-linkages',
  slug: 'vietnam-localization-rate-fdi-linkages',
  question: 'Tỷ lệ nội địa hóa và liên kết giữa FDI với doanh nghiệp trong nước cho biết điều gì?',
  title: 'Tỷ lệ nội địa hóa và liên kết FDI – doanh nghiệp trong nước',
  topic: 'vietnam-economy',
  tldr: 'Khu vực FDI đóng góp lớn vào xuất khẩu nhưng **giá trị giữ lại trong nước** phụ thuộc vào việc doanh nghiệp trong nước cung ứng được bao nhiêu đầu vào. Theo bài của TS. Nguyễn Anh Tuấn (nhadautu.vn, 7/11/2025), tỷ lệ nội địa hóa nhiều ngành còn thấp và liên kết chủ yếu ở khâu giản đơn. Nhưng "tỷ lệ nội địa hóa" có nhiều cách tính, nên cần hỏi: nội địa hóa bởi ai (FDI khác hay doanh nghiệp Việt), ở khâu nào.',
  keyPoints: [
    'Theo bài đăng ngày 7/11/2025 (trích nghiên cứu Viện Chiến lược và Chính sách kinh tế, chưa rõ ngày): tỷ lệ nội địa hóa điện tử gia dụng khoảng 30–35%, viễn thông khoảng 15%, ô tô khoảng 10–20%; tác giả nhận xét tỷ lệ đang tăng nhưng "vẫn còn rất thấp".',
    'Cùng bài, trích khảo sát Jetro (chưa rõ ngày): khoảng 36% doanh nghiệp FDI tại Việt Nam mua nguyên liệu, linh kiện trong nước, so với khoảng 60–70% ở Thái Lan và Malaysia theo bài.',
    'Liên kết chủ yếu ở khâu giản đơn như bao bì, linh kiện cơ khí nhỏ, vận tải, ăn uống; rất ít doanh nghiệp thuần Việt đạt được vị trí nhà cung cấp cấp 1.',
    'Theo lập luận của TS. Phan Hữu Thắng (vnbusiness.vn, 12/9/2026; bài nêu dưới dạng nhận định, không kèm số liệu): ở khu công nghiệp thu hút FDI, công nghệ lõi chủ yếu do công ty mẹ nắm giữ, linh kiện và nguyên vật liệu phụ thuộc nhiều vào nhập khẩu, R&D hạn chế, doanh nghiệp Việt tham gia chuỗi còn ít và chủ yếu ở công đoạn giá trị thấp.',
    'Lưu ý khi đọc (suy luận của bài này, các bài nguồn không nêu số liệu): tỷ lệ nội địa hóa không đồng nghĩa với giá trị gia tăng cho doanh nghiệp Việt, vì đầu vào "trong nước" có thể do chính các doanh nghiệp FDI khác đặt tại Việt Nam cung cấp.',
  ],
  causalChain: [
    { from: 'FDI đặt nhà máy lắp ráp tại Việt Nam', to: 'Xuất khẩu tăng nhưng phần lớn đầu vào nhập khẩu', mechanism: 'Chuỗi cung ứng toàn cầu của tập đoàn mẹ đưa đầu vào từ nhà cung cấp quen thuộc nước ngoài, nên giá trị gia tăng tại Việt Nam chủ yếu ở khâu lắp ráp.' },
    { from: 'Doanh nghiệp trong nước thiếu năng lực công nghệ, tiêu chuẩn chất lượng', to: 'Khó trở thành nhà cung cấp cho FDI', mechanism: 'Nhà cung cấp phải đạt tiêu chuẩn kỹ thuật, quy mô và giao hàng đúng hạn; doanh nghiệp nhỏ thiếu vốn đầu tư để đạt chuẩn.' },
    { from: 'Thiếu nhà cung cấp nội địa đủ chuẩn', to: 'FDI tiếp tục nhập đầu vào hoặc đưa nhà cung cấp nước ngoài vào', mechanism: 'Tỷ lệ nội địa hóa thấp; và phần "nội địa" có thể do các FDI khác tại Việt Nam cung cấp chứ không phải doanh nghiệp Việt (suy luận).' },
    { from: 'Chính sách kết nối (cơ sở dữ liệu nhà cung cấp, hỗ trợ nâng chuẩn)', to: 'Tăng liên kết và lan tỏa công nghệ', mechanism: 'Giảm chi phí tìm kiếm cho cả hai bên và nâng năng lực của nhà cung cấp, đúng với những nguyên nhân mà tác giả bài nhadautu.vn nêu (chưa có thiết chế trung gian chuyên nghiệp, dữ liệu về năng lực doanh nghiệp Việt rời rạc, thiếu cập nhật).' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp nhỏ và vừa trong nước', effect: 'Có cơ hội vào chuỗi cung ứng FDI nếu nâng chuẩn; hiện đa số ở khâu giá trị thấp.', direction: 'mixed' },
    { group: 'Khu vực FDI', effect: 'Chi phí logistics và rủi ro đứt gãy chuỗi giảm nếu có nhà cung cấp nội địa đáng tin cậy.', direction: 'mixed' },
    { group: 'Cán cân thương mại và giá trị gia tăng quốc gia', effect: 'Nhập khẩu đầu vào cao làm xuất khẩu lớn nhưng thặng dư ròng và giá trị gia tăng ít hơn bề ngoài.', direction: 'down' },
    { group: 'Người lao động', effect: 'Liên kết sâu hơn cần kỹ năng kỹ thuật cao; bài nhadautu.vn nêu doanh nghiệp trong nước còn thiếu công nghệ, vốn và nhân lực chất lượng cao.', direction: 'mixed' },
    { group: 'Nhà hoạch định chính sách', effect: 'Theo bài nhadautu.vn, FDI tập trung cao ở khu công nghiệp đang tạo ra khu vực FDI khá biệt lập với khu vực trong nước, và chính sách vẫn thiên về thu hút hơn là kết nối, lan tỏa.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ lệ nội địa hóa theo ngành (và cách tính)', why: 'Cho biết đầu vào nội địa bao nhiêu; cần xem tính theo giá trị hay số bộ phận.', where: 'Bộ Công Thương; nghiên cứu của các viện' },
    { name: 'Tỷ trọng giá trị gia tăng trong nước trong xuất khẩu', why: 'Chỉ báo sát hơn về lợi ích thật của xuất khẩu.', where: 'Cơ sở dữ liệu TiVA của OECD–WTO; Cục Thống kê' },
    { name: 'Tỷ lệ doanh nghiệp FDI mua đầu vào trong nước', why: 'Đo độ sâu liên kết từ phía người mua.', where: 'Khảo sát Jetro, VCCI, Bộ Tài chính' },
    { name: 'Số doanh nghiệp Việt là nhà cung cấp cấp 1 và cấp 2', why: 'Thước đo năng lực nội địa trong chuỗi.', where: 'Các hiệp hội ngành; Cục Đầu tư nước ngoài' },
  ],
  counterpoints: [
    'Tỷ lệ nội địa hóa thấp không nhất thiết xấu nếu phản ánh chuyên môn hóa hợp lý trong chuỗi giá trị toàn cầu; Việt Nam hưởng lợi từ lao động, xuất khẩu và học hỏi dù chưa nâng cấp được mọi khâu.',
    'Các số liệu trong bài đến từ nghiên cứu và khảo sát chưa rõ ngày, có thể đã cũ; số liệu cho các nước khác khác về phương pháp nên so sánh chỉ có tính tham khảo.',
    'Ép tỷ lệ nội địa hóa bằng quy định có thể làm tăng chi phí và giảm sức cạnh tranh nếu doanh nghiệp trong nước chưa đủ chuẩn.',
  ],
  glossary: [
    { term: 'Tỷ lệ nội địa hóa', definition: 'Phần giá trị (hoặc số bộ phận) của sản phẩm có nguồn gốc trong nước; cách tính khác nhau giữa các ngành và nghiên cứu.' },
    { term: 'Liên kết ngược (backward linkage)', definition: 'Quan hệ mua đầu vào của doanh nghiệp FDI từ nhà cung cấp trong nước.' },
    { term: 'Nhà cung cấp cấp 1', definition: 'Nhà cung cấp trực tiếp cho nhà lắp ráp cuối cùng.' },
    { term: 'Lan tỏa công nghệ', definition: 'Quá trình doanh nghiệp trong nước học hỏi kỹ thuật, quản trị từ doanh nghiệp nước ngoài.' },
    { term: 'Giá trị gia tăng', definition: 'Giá trị sản phẩm trừ chi phí đầu vào mua từ bên ngoài.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-localization-rate-fdi-linkages-q',
    question: 'Một nhà máy FDI báo cáo tỷ lệ nội địa hóa 59%, nhưng phần lớn đầu vào đến từ các doanh nghiệp FDI khác tại Việt Nam. Điều đó cho biết gì?',
    options: [
      { id: 'a', text: 'Doanh nghiệp Việt đã chiếm 59% chuỗi cung ứng của nhà máy.', explain: 'Đầu vào "trong nước" có thể đến từ doanh nghiệp FDI khác chứ không phải doanh nghiệp Việt.' },
      { id: 'b', text: 'Con số chưa đủ để kết luận về lan tỏa tới doanh nghiệp trong nước; cần xem ai cung cấp và ở khâu nào.', correct: true, explain: 'Đúng: một tỷ lệ gộp (ví dụ giả định 59%) không cho biết nhà cung cấp là doanh nghiệp Việt hay FDI khác, ở khâu nào; cần tách các nguồn đó trước khi kết luận về lan tỏa.' },
      { id: 'c', text: 'Tỷ lệ nội địa hóa luôn phản ánh đúng giá trị gia tăng giữ lại ở Việt Nam.', explain: 'Nó có nhiều cách tính, và không đảm bảo công nghệ cũng như lợi ích thuộc doanh nghiệp trong nước.' },
    ],
  },
  sources: [
    { title: 'Thúc đẩy liên kết giữa FDI và doanh nghiệp trong nước: Yêu cầu bức thiết (7/11/2025)', publisher: 'Báo Nhà đầu tư (nhadautu.vn)', url: 'https://nhadautu.vn/thuc-day-lien-ket-giua-fdi-va-doanh-nghiepk-trong-nuoc-yeu-cau-buc-thiet-d100548.html' },
    { title: '447 khu công nghiệp và bài toán đón thế hệ FDI mới (12/9/2026)', publisher: 'Doanh nghiệp & Kinh doanh (vnbusiness.vn)', url: 'https://vnbusiness.vn/447-khu-cong-nghiep-va-bai-toan-don-the-he-fdi-moi.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 128,
}
