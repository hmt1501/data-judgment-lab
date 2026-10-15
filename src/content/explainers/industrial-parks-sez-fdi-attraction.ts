import type { Explainer } from '../../../shared/explainer'

export const industrialParksSezFdiAttraction: Explainer = {
  id: 'industrial-parks-sez-fdi-attraction',
  slug: 'industrial-parks-sez-fdi-attraction',
  question: 'Khu công nghiệp và khu kinh tế đặc biệt thu hút FDI bằng cách nào, và khi nào hiệu quả kém?',
  title: 'Khu công nghiệp, khu kinh tế đặc biệt và thu hút FDI',
  topic: 'geopolitics-trade',
  tldr: 'Khu công nghiệp và khu kinh tế đặc biệt (SEZ) gom hạ tầng, thủ tục và ưu đãi vào một vùng để giảm chi phí cho nhà đầu tư nước ngoài. Chúng giúp thu hút FDI và việc làm khi nằm gần cảng, đô thị và có hạ tầng tốt; nhưng nếu thiếu liên kết với kinh tế nội địa, chúng trở thành "ốc đảo". Theo một bài ngày 12/9/2026, Việt Nam có khoảng 447 KCN với tỷ lệ lấp đầy bình quân khoảng 72% ở 292 khu đang hoạt động.',
  keyPoints: [
    'Theo Wikipedia (trích định nghĩa Ngân hàng Thế giới): SEZ là khu vực địa lý giới hạn, thường được rào chắn, có khu vực hải quan riêng và thủ tục tinh giản; thường có ưu đãi tài chính, miễn giảm thuế; hạ tầng giao thông, năng lượng, viễn thông quyết định hiệu quả, khu gần thành phố lớn hoặc cảng thường tốt hơn.',
    'Lợi ích: thu hút FDI, tạo việc làm, tăng xuất khẩu, lan tỏa công nghệ. Chỉ trích: lợi ích phân bổ không đều, thuế ưu đãi làm giảm thu ngân sách, cạnh tranh ưu đãi giữa các địa phương ("chạy đua xuống đáy"), tiêu chuẩn môi trường và lao động có thể yếu hơn.',
    'Theo bài ngày 12/9/2026 của TS. Phan Hữu Thắng (vnbusiness.vn): khoảng 447 KCN, diện tích đất tự nhiên khoảng 134.600 ha, trong đó hơn 93.000 ha là đất công nghiệp có thể cho thuê; 292 khu đang hoạt động, 115 khu đang giải phóng mặt bằng hoặc xây dựng; tỷ lệ lấp đầy bình quân khoảng 72% (tính trên 292 khu đang hoạt động; miền Bắc khoảng 86% năm 2025). Lưu ý 292 + 115 = 407, chưa khớp 447 khu nên số liệu cần đọc thận trọng; bài không ghi cơ quan công bố nguồn số liệu.',
    'Cũng theo bài đó: một số khu còn đất nhưng thiếu kết nối giao thông, điện chưa ổn định, thiếu hạ tầng xã hội (nhà ở, trường học) và lao động kỹ thuật; doanh nghiệp Việt tham gia chuỗi còn ít, công nghệ lõi do công ty mẹ nắm giữ, nguyên liệu phụ thuộc nhập khẩu.',
    'Wikipedia nêu Việt Nam đã thành lập 18 khu kinh tế ven biển trong quá trình công nghiệp hóa, kèm ưu đãi thu hút FDI và đầu tư vào đào tạo lao động.',
  ],
  causalChain: [
    { from: 'Quy hoạch khu có hạ tầng sẵn, thủ tục tập trung', to: 'Giảm chi phí và thời gian đầu tư cho nhà đầu tư', mechanism: 'Đất sạch, điện nước, xử lý nước thải, hải quan tại chỗ giúp doanh nghiệp vào hoạt động nhanh, giảm rủi ro thủ tục.' },
    { from: 'Ưu đãi thuế, tiền thuê đất cùng vị trí gần cảng, đô thị', to: 'Thu hút FDI và tạo việc làm', mechanism: 'Chi phí thấp hơn và logistic thuận lợi tạo lợi thế cạnh tranh trong thu hút dự án sản xuất, xuất khẩu.' },
    { from: 'FDI đặt nhà máy trong khu, đầu vào chủ yếu nhập khẩu', to: 'Xuất khẩu tăng nhưng liên kết nội địa yếu', mechanism: 'Chuỗi cung ứng của tập đoàn mẹ và nhà cung cấp FDI khác, thiếu doanh nghiệp nội địa đủ chuẩn nên lan tỏa hạn chế.' },
    { from: 'Hạ tầng ngoài hàng rào (điện, đường, nhà ở, nhân lực) không theo kịp', to: 'Khu kém hấp dẫn, tỷ lệ lấp đầy thấp', mechanism: 'Doanh nghiệp xét chi phí toàn chuỗi, không chỉ giá thuê đất; khu thiếu kết nối bị bỏ qua.' },
    { from: 'Cạnh tranh ưu đãi giữa các địa phương', to: 'Chi phí ngân sách tăng, lợi ích ròng giảm', mechanism: 'Nhiều khu cùng giảm giá và ưu đãi nên lợi thế bị triệt tiêu và ngân sách chịu chi phí (chỉ trích được Wikipedia ghi nhận).' },
  ],
  vietnamImpact: [
    { group: 'Người lao động', effect: 'Khu công nghiệp tạo việc làm quy mô lớn nhưng cần kỹ năng; thiếu nhà ở, dịch vụ xã hội quanh khu là vấn đề được bài nêu.', direction: 'mixed' },
    { group: 'Doanh nghiệp FDI', effect: 'Giảm chi phí thủ tục và hạ tầng nếu chọn khu có kết nối tốt; rủi ro nếu điện, nước, nhân lực thiếu.', direction: 'up' },
    { group: 'Doanh nghiệp nội địa', effect: 'Cơ hội trở thành nhà cung cấp, nhưng hiện chủ yếu ở khâu giản đơn.', direction: 'mixed' },
    { group: 'Chủ đầu tư hạ tầng khu công nghiệp', effect: 'Doanh thu phụ thuộc tỷ lệ lấp đầy và giá thuê; khu thiếu kết nối khó lấp đầy.', direction: 'mixed' },
    { group: 'Ngân sách và địa phương', effect: 'Thu thêm từ thuế, việc làm và dịch vụ, nhưng chịu chi phí ưu đãi và hạ tầng ngoài hàng rào.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ lệ lấp đầy khu công nghiệp theo vùng', why: 'Đo sức hút thực và khác biệt vùng.', where: 'Cổng thông tin khu công nghiệp Việt Nam; Bộ Tài chính; báo cáo của đơn vị tư vấn bất động sản công nghiệp' },
    { name: 'Vốn FDI đăng ký mới và thực hiện', why: 'Dòng vốn thực vào sản xuất.', where: 'Cục Thống kê (Bộ Tài chính); Cục Đầu tư nước ngoài' },
    { name: 'Tỷ lệ mua đầu vào trong nước của doanh nghiệp FDI', why: 'Mức độ liên kết với doanh nghiệp nội địa.', where: 'Khảo sát Jetro, VCCI; Bộ Tài chính' },
    { name: 'Chỉ số điện, nước, xử lý nước thải và năng lực lao động của khu', why: 'Hạ tầng ngoài hàng rào quyết định khả năng vận hành.', where: 'Ban quản lý khu; báo cáo địa phương' },
  ],
  counterpoints: [
    'Số liệu về số lượng, diện tích và tỷ lệ lấp đầy khác nhau giữa các nguồn và cách tính; bài chưa dẫn được báo cáo tổng hợp chính thức, nên hãy xem số liệu như ước tính.',
    'Khu công nghiệp không đảm bảo thành công: quyết định FDI cũng phụ thuộc thị trường, lao động, ổn định chính sách và chuỗi cung ứng toàn cầu.',
    'Wikipedia lưu ý lợi ích phân bổ không đều và ưu đãi thuế có thể làm giảm thu ngân sách; đánh giá ròng cần so với phương án không có ưu đãi.',
  ],
  glossary: [
    { term: 'Khu công nghiệp (KCN)', definition: 'Khu vực dành cho sản xuất công nghiệp có hạ tầng đồng bộ và quản lý tập trung.' },
    { term: 'Khu kinh tế đặc biệt (SEZ)', definition: 'Vùng giới hạn có luật lệ kinh doanh, thương mại, thuế quan khác phần còn lại của đất nước.' },
    { term: 'Tỷ lệ lấp đầy', definition: 'Phần diện tích đất công nghiệp đã cho thuê trên tổng diện tích có thể cho thuê.' },
    { term: 'Liên kết ngược', definition: 'Quan hệ mua đầu vào của doanh nghiệp trong khu từ nhà cung cấp trong nước.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'industrial-parks-sez-fdi-attraction-q',
    question: 'Một khu công nghiệp còn nhiều đất trống dù giá thuê thấp. Nguyên nhân nào hợp lý nhất cần kiểm tra trước?',
    options: [
      { id: 'a', text: 'Giá thuê chưa đủ thấp; cứ giảm tiếp là hết.', explain: 'Nhà đầu tư xét chi phí toàn chuỗi; giảm giá không giải quyết thiếu điện, đường, nhân lực.' },
      { id: 'b', text: 'Hạ tầng kết nối, điện nước, nhân lực và khoảng cách tới cảng, đô thị.', correct: true, explain: 'Đúng: bài ngày 12/9/2026 nêu các điểm nghẽn này ở khu còn đất nhưng thiếu kết nối; Wikipedia nhấn mạnh hạ tầng và vị trí.' },
      { id: 'c', text: 'FDI không quan tâm đến khu công nghiệp.', explain: 'FDI sản xuất thường chọn khu công nghiệp vì hạ tầng và thủ tục; vấn đề là chất lượng khu.' },
    ],
  },
  sources: [
    { title: '447 khu công nghiệp và bài toán đón thế hệ FDI mới (12/9/2026)', publisher: 'Doanh nghiệp & Kinh doanh (vnbusiness.vn)', url: 'https://vnbusiness.vn/447-khu-cong-nghiep-va-bai-toan-don-the-he-fdi-moi.html' },
    { title: 'Special economic zone', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special_economic_zone' },
    { title: 'Thúc đẩy liên kết giữa FDI và doanh nghiệp trong nước: Yêu cầu bức thiết (7/11/2025)', publisher: 'Báo Nhà đầu tư (nhadautu.vn)', url: 'https://nhadautu.vn/thuc-day-lien-ket-giua-fdi-va-doanh-nghiepk-trong-nuoc-yeu-cau-buc-thiet-d100548.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 138,
}
