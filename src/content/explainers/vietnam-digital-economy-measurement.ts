import type { Explainer } from '../../../shared/explainer'

export const vietnamDigitalEconomyMeasurement: Explainer = {
  id: 'vietnam-digital-economy-measurement',
  slug: 'vietnam-digital-economy-measurement',
  question: 'Kinh tế số của Việt Nam được đo bằng cách nào và vì sao các con số khác nhau?',
  title: 'Đo kinh tế số: vì sao có nhiều con số khác nhau',
  topic: 'vietnam-economy',
  tldr: 'Con số "kinh tế số chiếm bao nhiêu % GDP" phụ thuộc vào **định nghĩa** (chỉ ngành số lõi hay cả các ngành được số hóa) và **thước đo** (giá trị tăng thêm, giá trị sản xuất hay giá trị giao dịch). Theo Cục Thống kê (05/01/2026), tỷ trọng giá trị tăng thêm kinh tế số trong GDP năm 2025 ước đạt 14,02%. Những con số khác như dự báo giá trị giao dịch của báo cáo tư nhân không so sánh trực tiếp được.',
  keyPoints: [
    'Theo Cục Thống kê (đăng 05/01/2026): giá trị tăng thêm của kinh tế số ước đạt **14,02% GDP năm 2025**, khoảng 72,1 tỷ USD; tỷ trọng năm 2021 là 12,87%.',
    'Cùng nguồn, kinh tế số gồm **ngành số lõi** (bảy ngành cấp 2 như sản xuất điện tử, viễn thông, lập trình, xử lý dữ liệu...) và **ngành được số hóa** (ngành dùng sản phẩm số lõi làm đầu vào). Trang này nêu hai bộ số về cơ cấu không khớp nhau: 8,13% (lõi)/5,05% (số hóa) không ghi rõ là bình quân hay năm nào, và 8,42%/5,6% ghi cho năm 2025 – cho thấy cần đọc kỹ ghi chú.',
    'Wikipedia cho biết OECD có ba cách tiếp cận (từ dưới lên theo ngành, từ trên xuống theo xu hướng như nền tảng và lao động, và linh hoạt chia lõi – phi lõi); IMF coi cách định nghĩa từ trên xuống là chủ quan và khó so sánh giữa các nước.',
    'Giá trị tăng thêm khác giá trị sản xuất khác giá trị giao dịch: mỗi thước đo có mẫu số khác nhau, nên cùng một nền kinh tế có thể được báo hàng chục phần trăm hoặc vài phần trăm GDP tùy cách nói.',
    'Thống kê cấp tỉnh cho thấy độ tập trung cao: theo cùng nguồn, tỷ trọng kinh tế số trong GRDP năm 2025 của Bắc Ninh là 46,30%, Thái Nguyên 29,53%, trong khi Hà Nội 17,34% và TP. Hồ Chí Minh 13,43% – phản ánh vai trò của sản xuất điện tử ở một số địa phương.',
  ],
  causalChain: [
    { from: 'Chọn định nghĩa (lõi hay mở rộng)', to: 'Phạm vi ngành được tính thay đổi', mechanism: 'Chỉ tính lõi thì bỏ sót các ngành truyền thống đã số hóa; tính rộng thì khó tách riêng phần "số" trong giá trị của ngành đó.' },
    { from: 'Chọn thước đo (giá trị tăng thêm, giá trị sản xuất, giao dịch)', to: 'Con số tỷ trọng thay đổi', mechanism: 'Giá trị tăng thêm trừ chi phí trung gian, so được với GDP; giá trị giao dịch gồm cả chi phí trung gian và doanh số bán lại nên không so trực tiếp với GDP.' },
    { from: 'Ngành điện tử và viễn thông có tỷ trọng lớn trong ngành số lõi', to: 'Tỷ trọng kinh tế số bị chi phối bởi sản xuất phần cứng', mechanism: 'Giá trị tăng thêm lớn của ngành điện tử (nhiều do FDI) nâng tỷ trọng, nhưng không đồng nghĩa với năng lực số của doanh nghiệp nội địa.' },
    { from: 'Các tổ chức dùng phương pháp và mục đích khác nhau', to: 'Mục tiêu chính sách và dự báo khó so sánh', mechanism: 'Mục tiêu theo % GDP chính thức khác với dự báo giá trị giao dịch của báo cáo tư nhân; so hai con số này dễ dẫn đến kết luận sai.' },
  ],
  vietnamImpact: [
    { group: 'Nhà hoạch định chính sách', effect: 'Cần chuẩn phương pháp ổn định để đặt mục tiêu và đánh giá tiến độ; đổi phương pháp làm chuỗi thời gian khó so sánh.', direction: 'mixed' },
    { group: 'Doanh nghiệp công nghệ', effect: 'Số liệu thống kê giúp định vị quy mô thị trường nhưng cần xem phạm vi tính khi dùng làm luận điểm kinh doanh.', direction: 'mixed' },
    { group: 'Nhà đầu tư', effect: 'Con số tỷ trọng cao có thể chủ yếu đến từ sản xuất điện tử FDI; nên xem cơ cấu thay vì chỉ nhìn tổng.', direction: 'mixed' },
    { group: 'Địa phương', effect: 'Tỷ trọng kinh tế số trong GRDP chênh rất lớn giữa các tỉnh, ảnh hưởng đến cách xây chiến lược và so sánh.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ trọng giá trị tăng thêm kinh tế số trong GDP', why: 'Chỉ tiêu thống kê chính thức, so được với GDP.', where: 'Cục Thống kê (nso.gov.vn)' },
    { name: 'Cơ cấu ngành số lõi và ngành được số hóa', why: 'Cho biết tăng trưởng đến từ phần cứng hay phần mềm, dịch vụ.', where: 'Cục Thống kê, báo cáo kinh tế số' },
    { name: 'Tỷ trọng kinh tế số trong GRDP theo tỉnh', why: 'Cho thấy mức tập trung theo địa phương.', where: 'Cục Thống kê' },
    { name: 'Báo cáo thị trường của các tổ chức tư nhân (giá trị giao dịch)', why: 'Hữu ích để theo dõi xu hướng thương mại điện tử nhưng không cùng thước đo với GDP.', where: 'Báo cáo e-Conomy SEA và các báo cáo tương tự' },
  ],
  counterpoints: [
    'Nguồn thống kê chính thức cũng có thể điều chỉnh phương pháp hoặc số ước tính; trang Cục Thống kê nêu hai bộ số cơ cấu chưa khớp nhau, nên cần đối chiếu bản gốc.',
    'Phân biệt "số lõi" với "số hóa" đôi khi mang tính quy ước: phần giá trị nào của một ngành truyền thống là nhờ số hóa khó tách bạch.',
    'Tỷ trọng cao không tự động nghĩa là hiệu quả cao; năng suất và mức độ lan tỏa tới doanh nghiệp nội địa mới là điều quyết định.',
  ],
  glossary: [
    { term: 'Giá trị tăng thêm', definition: 'Giá trị sản xuất trừ chi phí trung gian; tổng giá trị tăng thêm các ngành tạo nên GDP.' },
    { term: 'Kinh tế số lõi', definition: 'Các ngành trực tiếp sản xuất sản phẩm và dịch vụ số, như điện tử, viễn thông, lập trình.' },
    { term: 'Ngành được số hóa', definition: 'Các ngành truyền thống dùng sản phẩm số lõi làm đầu vào sản xuất.' },
    { term: 'GRDP', definition: 'Tổng sản phẩm trên địa bàn tỉnh, thành phố.' },
    { term: 'Giá hiện hành / giá so sánh', definition: 'Giá hiện hành phản ánh giá cùng kỳ; giá so sánh loại bỏ biến động giá để đo tăng trưởng thực.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-digital-economy-measurement-q',
    question: 'Một báo cáo tư nhân công bố "kinh tế số Việt Nam đạt X tỷ USD giá trị giao dịch". Có thể kết luận tỷ trọng kinh tế số trong GDP bằng X chia GDP không?',
    options: [
      { id: 'a', text: 'Được, vì cả hai đều là giá trị của kinh tế số.', explain: 'Sai. Giá trị giao dịch gồm cả chi phí trung gian và doanh số, không cùng mẫu số với giá trị tăng thêm trong GDP.' },
      { id: 'b', text: 'Không, vì giá trị giao dịch và giá trị tăng thêm là hai thước đo khác nhau.', correct: true, explain: 'Đúng. Muốn so với GDP phải dùng giá trị tăng thêm theo cùng định nghĩa.' },
      { id: 'c', text: 'Chỉ so được nếu báo cáo do cơ quan nước ngoài thực hiện.', explain: 'Sai. Nguồn gốc báo cáo không thay đổi vấn đề thước đo.' },
    ],
  },
  sources: [
    { title: 'Tỷ trọng giá trị tăng thêm của kinh tế số trong GDP (đăng 05/01/2026)', publisher: 'Cục Thống kê', url: 'https://www.nso.gov.vn/?p=59576' },
    { title: 'Digital economy', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Digital_economy' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 167,
}
