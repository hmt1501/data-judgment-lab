import type { Explainer } from '../../../shared/explainer'

export const vietnamTourismServicesExports: Explainer = {
  id: 'vietnam-tourism-services-exports',
  slug: 'vietnam-tourism-services-exports',
  question: 'Du lịch được coi là "xuất khẩu tại chỗ" thế nào, và tác động tới tỷ giá, việc làm ra sao?',
  title: 'Khách quốc tế chi tiêu trong nước là nguồn ngoại tệ, nhưng nhạy với cú sốc bên ngoài',
  topic: 'vietnam-economy',
  tldr: 'Khi du khách nước ngoài chi tiêu ở Việt Nam (lưu trú, ăn uống, mua sắm, vé), khoản chi đó được ghi nhận là **xuất khẩu dịch vụ** dù hàng hóa không qua biên giới; vì vậy gọi là "xuất khẩu tại chỗ". Du lịch mang ngoại tệ vào, tạo việc làm ở dịch vụ, nhưng cũng là nguồn thu **nhạy cảm** với dịch bệnh, giá vé máy bay, tỷ giá và tình hình các thị trường nguồn khách.',
  keyPoints: [
    'Theo Báo Văn hóa (3/10/2026): 9 tháng 2026 Việt Nam đón khoảng 17,7 triệu lượt khách quốc tế, tăng 14,5% so với cùng kỳ; con số này đạt khoảng 71% mục tiêu 25 triệu lượt khách quốc tế của cả năm.',
    'Cơ cấu thị trường (9 tháng 2026): Trung Quốc khoảng 3,9 triệu lượt (22,4%), Hàn Quốc khoảng 3,0 triệu lượt (17,3%, giảm 5,5%); khách đến bằng đường hàng không chiếm 83,2% theo cùng bài báo.',
    'Chi tiêu của khách quốc tế được hạch toán vào xuất khẩu dịch vụ (mục "du lịch") trong cán cân thanh toán; vì là doanh thu ngoại tệ, du lịch hỗ trợ cung ngoại tệ và cán cân vãng lai.',
    'Du lịch tạo việc làm ở khách sạn, nhà hàng, vận tải, thủ công mỹ nghệ, nhiều việc là lao động phổ thông, nên có tác dụng lan tỏa rộng; nhưng một phần là việc làm thời vụ, bấp bênh.',
    'Bài báo không nêu doanh thu du lịch hay đóng góp vào GDP; để đánh giá tác động kinh tế, cần các thống kê chi tiêu bình quân/khách và đóng góp của ngành từ Cục Thống kê hoặc cơ quan du lịch.',
  ],
  causalChain: [
    { from: 'Lượng khách quốc tế tăng', to: 'Chi tiêu của du khách trong nước tăng', mechanism: 'Mỗi khách chi cho lưu trú, ăn uống, đi lại, mua sắm; tổng chi tiêu bằng số khách nhân chi tiêu bình quân và số ngày lưu trú.' },
    { from: 'Chi tiêu du khách nước ngoài tăng', to: 'Nguồn cung ngoại tệ tăng', mechanism: 'Khách đổi ngoại tệ lấy VND hoặc thanh toán thẻ quốc tế, tạo cung ngoại tệ cho thị trường và cải thiện cán cân dịch vụ.' },
    { from: 'Doanh thu ngành dịch vụ tăng', to: 'Việc làm và thu nhập địa phương tăng', mechanism: 'Khách sạn, nhà hàng, vận chuyển, hướng dẫn viên, làng nghề tuyển thêm lao động và mua hàng hóa từ nhà cung cấp địa phương.' },
    { from: 'Cú sốc bên ngoài (dịch bệnh, giá vé, suy thoái ở thị trường nguồn)', to: 'Lượng khách và doanh thu giảm nhanh', mechanism: 'Du lịch quốc tế là chi tiêu tùy ý nên cắt giảm trước khi thu nhập hộ gia đình ở nước nguồn suy yếu.' },
  ],
  vietnamImpact: [
    { group: 'Lao động ngành lưu trú, ăn uống, vận tải', effect: 'Việc làm và thu nhập phụ thuộc mùa vụ và lượng khách; ngành tạo nhiều việc làm cho lao động phổ thông.', direction: 'up' },
    { group: 'Hộ kinh doanh, làng nghề địa phương', effect: 'Hưởng lợi gián tiếp khi du khách mua sản phẩm địa phương; nhưng rủi ro khi lượng khách giảm đột ngột.', direction: 'mixed' },
    { group: 'Thị trường ngoại hối', effect: 'Doanh thu ngoại tệ từ du lịch góp phần ổn định tỷ giá, nhất là mùa cao điểm.', direction: 'up' },
    { group: 'Giá cả tại điểm đến', effect: 'Cầu du lịch tăng nhanh có thể đẩy giá thuê nhà, thực phẩm tại địa phương, ảnh hưởng người dân sở tại.', direction: 'down' },
  ],
  indicators: [
    { name: 'Lượng khách quốc tế theo thị trường và phương tiện', why: 'Cho thấy cơ cấu nguồn khách, mức tập trung và rủi ro thay đổi thị trường.', where: 'Cục Thống kê (nso.gov.vn); Cục Du lịch quốc gia Việt Nam' },
    { name: 'Chi tiêu bình quân/khách và số ngày lưu trú', why: 'Số khách tăng nhưng chi tiêu giảm thì doanh thu không tăng tương ứng.', where: 'Khảo sát của cơ quan du lịch; UN Tourism' },
    { name: 'Thu nhập du lịch trong cán cân thanh toán', why: 'Đo trực tiếp ngoại tệ thu về từ khách quốc tế.', where: 'Ngân hàng Nhà nước (cán cân thanh toán)' },
    { name: 'Công suất phòng, giá phòng trung bình', why: 'Phản ánh sức khỏe của ngành lưu trú.', where: 'Báo cáo thị trường khách sạn; doanh nghiệp niêm yết' },
  ],
  counterpoints: [
    'Tăng lượng khách chưa chắc tăng doanh thu nếu chi tiêu bình quân giảm hoặc nguồn khách chuyển sang thị trường chi tiêu thấp; chất lượng khách quan trọng hơn số lượng.',
    'Tập trung vào vài thị trường nguồn (Trung Quốc, Hàn Quốc chiếm khoảng 40% lượng khách theo số liệu 9 tháng) khiến doanh thu dễ biến động khi một thị trường thay đổi chính sách hoặc tâm lý.',
    'Doanh thu du lịch một phần thất thoát ra ngoài nếu khách sạn, hãng bay, nền tảng đặt phòng thuộc sở hữu nước ngoài.',
  ],
  glossary: [
    { term: 'Xuất khẩu tại chỗ', definition: 'Hàng hóa, dịch vụ bán cho người không cư trú ngay trong lãnh thổ nước mình.' },
    { term: 'Xuất khẩu dịch vụ', definition: 'Dịch vụ cung cấp cho người không cư trú, gồm du lịch, vận tải, dịch vụ tài chính...' },
    { term: 'Cán cân dịch vụ', definition: 'Chênh lệch giữa xuất khẩu và nhập khẩu dịch vụ.' },
    { term: 'Lượt khách quốc tế', definition: 'Số lần khách nước ngoài nhập cảnh, một người đến nhiều lần được tính nhiều lượt.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-tourism-services-exports-q',
    question: 'Lượng khách quốc tế tăng 14,5% nhưng chi tiêu bình quân mỗi khách giảm 10%. Doanh thu du lịch quốc tế thay đổi thế nào, giả định thời gian lưu trú không đổi (ví dụ giả định)?',
    options: [
      { id: 'a', text: 'Tăng khoảng 14,5%.', explain: 'Bỏ qua việc chi tiêu bình quân giảm.' },
      { id: 'b', text: 'Tăng khoảng 3%, vì 1,145 × 0,90 ≈ 1,03.', correct: true, explain: 'Đúng. Doanh thu = số khách × chi tiêu bình quân; hai thay đổi nhân với nhau, nên tăng chỉ khoảng 3%.' },
      { id: 'c', text: 'Giảm vì chi tiêu giảm.', explain: 'Sai: khách tăng 14,5% lớn hơn mức giảm 10% nên tổng vẫn tăng nhẹ.' },
    ],
  },
  sources: [
    { title: 'Khách quốc tế đến Việt Nam 9 tháng 2026 tăng 14,5%', publisher: 'Báo Văn hóa (3/10/2026)', url: 'https://baovanhoa.vn/du-lich/khach-quoc-te-den-viet-nam-9-thang-2026-tang-145-271196.html' },
    { title: 'Tourism in Vietnam', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Tourism_in_Vietnam' },
    { title: 'UN Tourism Data Dashboard', publisher: 'UN Tourism', url: 'https://www.unwto.org/tourism-data/global-and-regional-tourism-performance' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 49,
}
