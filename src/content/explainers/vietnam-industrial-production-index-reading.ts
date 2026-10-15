import type { Explainer } from '../../../shared/explainer'

export const vietnamIndustrialProductionIndexReading: Explainer = {
  id: 'vietnam-industrial-production-index-reading',
  slug: 'vietnam-industrial-production-index-reading',
  question: 'Chỉ số sản xuất công nghiệp (IIP) của Việt Nam đọc thế nào cho đúng?',
  title: 'Đọc chỉ số sản xuất công nghiệp (IIP): tháng, cùng kỳ và các nhóm ngành',
  topic: 'vietnam-economy',
  tldr: 'IIP đo mức thay đổi **sản lượng** của khu vực công nghiệp (khai khoáng, chế biến – chế tạo, điện, nước và xử lý chất thải). Cục Thống kê công bố hằng tháng, kèm hai phép so sánh: **so với tháng trước** và **so với cùng kỳ năm trước**. Muốn đọc đúng phải nhìn từng nhóm ngành (chế biến, chế tạo thường là trụ cột), tránh suy diễn từ một tháng, và nhớ rằng IIP là số ước tính có thể được điều chỉnh.',
  keyPoints: [
    'Theo trang IIP của Cục Thống kê (Bộ Tài chính), mỗi kỳ công bố nêu mức thay đổi so với tháng trước, so với cùng kỳ năm trước và số lũy kế; số liệu chia theo bốn nhóm: **chế biến, chế tạo**; **sản xuất và phân phối điện**; **khai khoáng**; **cung cấp nước, quản lý và xử lý rác thải, nước thải**.',
    'So với tháng trước thường bị chi phối bởi **mùa vụ** (Tết, số ngày làm việc), còn so với cùng kỳ năm trước giúp bỏ phần lớn hiệu ứng mùa vụ nhưng chịu **hiệu ứng cơ sở** (năm trước thấp thì năm nay dễ tăng cao).',
    'Wikipedia mô tả sản xuất công nghiệp (chế tạo, khai khoáng, tiện ích) chiếm tỷ trọng nhỏ trong GDP nhưng rất nhạy với lãi suất và cầu tiêu dùng, nên hữu ích để dự báo GDP.',
    'Theo trang IIP của Cục Thống kê (xem ngày 15/10/2026), các tháng gần đây cho mức tăng cùng kỳ hai chữ số, chẳng hạn tháng 7/2026 tăng 14,5% và tháng 6/2026 tăng 12,7%; trang này có chỗ tiêu đề và nội dung kỳ tháng 9 không khớp (tiêu đề ghi tháng Chín nhưng đoạn thân nhắc "tháng Sáu"), nên không dùng số tháng 9 từ trang này mà đối chiếu thông cáo gốc. Số đã đối chiếu qua báo (CafeF, 03/10/2026, theo họp báo của Cục Thống kê): IIP quý III/2026 ước tăng 14,8% và 9 tháng đầu năm tăng 12,3% so với cùng kỳ.',
    'IIP là chỉ số **sản lượng ngành công nghiệp**, không bao gồm dịch vụ; một tháng công nghiệp tốt không đồng nghĩa với toàn bộ nền kinh tế tốt.',
  ],
  causalChain: [
    { from: 'Đơn hàng xuất khẩu và cầu trong nước thay đổi', to: 'Doanh nghiệp chế biến, chế tạo tăng hoặc giảm sản lượng', mechanism: 'Khi đơn hàng tăng, nhà máy tăng ca, nhập thêm nguyên liệu; khi đơn hàng giảm, họ giảm giờ làm và tồn kho.' },
    { from: 'Sản lượng công nghiệp thay đổi', to: 'IIP thay đổi theo từng nhóm ngành', mechanism: 'Mức tăng của từng nhóm đóng góp vào IIP chung theo tỷ trọng của nhóm đó; nhóm chế biến, chế tạo thường chiếm phần lớn.' },
    { from: 'Điều kiện nền (năm trước thấp/cao)', to: 'Tăng cùng kỳ có thể bị thổi phồng hoặc kìm hãm', mechanism: 'Tỷ lệ so với cùng kỳ phụ thuộc vào mức cơ sở của năm trước, nên tăng 15% sau một năm sụt giảm không giống tăng 15% sau một năm đã cao.' },
    { from: 'IIP phản ánh sản xuất tăng bền', to: 'Dự báo tốt hơn cho GDP công nghiệp và việc làm', mechanism: 'Công nghiệp nhạy với chu kỳ nên IIP được dùng như tín hiệu sớm cho GDP quý trước khi số GDP chính thức công bố.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư chứng khoán', effect: 'IIP và PMI giúp đánh giá triển vọng nhóm công nghiệp, điện, chế biến; cần kết hợp số liệu theo ngành chứ không chỉ chỉ số chung.', direction: 'mixed' },
    { group: 'Doanh nghiệp sản xuất', effect: 'So sánh tăng trưởng của mình với IIP ngành giúp biết đang nhanh hay chậm hơn mặt bằng.', direction: 'mixed' },
    { group: 'Người lao động ngành công nghiệp', effect: 'IIP chế biến, chế tạo tăng thường đi cùng nhu cầu lao động và tăng ca; ngược lại nếu giảm kéo dài, việc làm chịu áp lực.', direction: 'mixed' },
    { group: 'Nhà hoạch định chính sách', effect: 'Dùng IIP theo dõi sức khỏe sản xuất để điều chỉnh hỗ trợ kịp thời.', direction: 'up' },
  ],
  indicators: [
    { name: 'IIP so với cùng kỳ và theo nhóm ngành', why: 'Chỉ báo chính của sản xuất công nghiệp; nhóm chế biến, chế tạo là trụ cột.', where: 'Cục Thống kê (nso.gov.vn), mục Chỉ số sản xuất công nghiệp' },
    { name: 'PMI sản xuất', why: 'Khảo sát tâm lý doanh nghiệp, đi trước số sản lượng thực.', where: 'S&P Global (PMI Việt Nam)' },
    { name: 'Chỉ số tiêu thụ và tồn kho ngành chế biến, chế tạo', why: 'Sản xuất tăng mà tiêu thụ không tăng thì tồn kho tích tụ.', where: 'Cục Thống kê, thông cáo kinh tế – xã hội hằng tháng' },
    { name: 'Xuất khẩu hàng công nghiệp', why: 'Cho biết đơn hàng bên ngoài có hỗ trợ sản lượng không.', where: 'Cục Hải quan, Cục Thống kê' },
  ],
  counterpoints: [
    'IIP là số ước tính tại thời điểm công bố và có thể được điều chỉnh; nên đọc xu hướng vài tháng thay vì phản ứng với một kỳ.',
    'Tăng cùng kỳ cao có thể do hiệu ứng cơ sở thấp hoặc do sản lượng tăng ở ít doanh nghiệp lớn (ví dụ khu vực FDI) chứ không lan rộng.',
    'IIP đo sản lượng, không đo lợi nhuận: sản lượng tăng nhưng giá và biên lợi nhuận giảm vẫn có thể làm doanh nghiệp kém đi.',
  ],
  glossary: [
    { term: 'IIP', definition: 'Chỉ số sản xuất công nghiệp, đo mức thay đổi sản lượng của các ngành công nghiệp.' },
    { term: 'So với cùng kỳ', definition: 'So với cùng tháng (hoặc cùng giai đoạn) của năm trước, giảm ảnh hưởng mùa vụ.' },
    { term: 'Hiệu ứng cơ sở', definition: 'Mức tăng/giảm phần trăm bị chi phối bởi mức thấp hay cao của kỳ so sánh.' },
    { term: 'Chế biến, chế tạo', definition: 'Nhóm ngành sản xuất chuyển nguyên liệu thành sản phẩm, thường là trụ cột của IIP.' },
    { term: 'Lũy kế', definition: 'Tổng hoặc mức tăng tính từ đầu năm đến kỳ báo cáo.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-industrial-production-index-reading-q',
    question: 'Ví dụ giả định: IIP tháng 2 tăng 25% so với cùng kỳ, nhưng tháng 2 năm trước nhiều ngày nghỉ Tết nên sản lượng rất thấp. Cách đọc nào hợp lý?',
    options: [
      { id: 'a', text: 'Sản xuất đang bùng nổ, nên kỳ vọng tăng 25% cả năm.', explain: 'Sai. Tăng cao một phần do hiệu ứng cơ sở và lịch nghỉ lễ, không nên ngoại suy.' },
      { id: 'b', text: 'Cần điều chỉnh theo hiệu ứng cơ sở và nhìn lũy kế vài tháng cùng các nhóm ngành trước khi kết luận.', correct: true, explain: 'Đúng. So sánh cùng kỳ chịu ảnh hưởng của mức cơ sở và lịch Tết; lũy kế và theo nhóm ngành cho bức tranh đáng tin hơn.' },
      { id: 'c', text: 'Chỉ số không có ý nghĩa vì IIP không đo sản xuất thật.', explain: 'Sai. IIP có ý nghĩa nếu đọc đúng cách; vấn đề là diễn giải, không phải bản thân chỉ số.' },
    ],
  },
  sources: [
    { title: 'Chỉ số sản xuất công nghiệp', publisher: 'Cục Thống kê (Bộ Tài chính)', url: 'https://www.nso.gov.vn/iip-vi/' },
    { title: 'Industrial production', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Industrial_production' },
    { title: 'Sản xuất công nghiệp 9 tháng tăng trưởng cao nhất kể từ năm 2019 (03/10/2026)', publisher: 'CafeF (đăng lại Báo Chính phủ)', url: 'https://cafef.vn/san-xuat-cong-nghiep-9-thang-tang-truong-cao-nhat-ke-tu-nam-2019-188261003102215647.chn' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 164,
}
