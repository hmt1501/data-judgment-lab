import type { Explainer } from '../../../shared/explainer'

export const energySecurityLngCoalTransition: Explainer = {
  id: 'energy-security-lng-coal-transition',
  slug: 'energy-security-lng-coal-transition',
  question: 'An ninh năng lượng là gì và vì sao chuyển từ than sang LNG, tái tạo không đơn giản?',
  title: 'An ninh năng lượng là cân bằng giữa đủ, rẻ và sạch; mỗi nguồn (than, LNG, tái tạo) giải một phần bài toán',
  topic: 'geopolitics-trade',
  tldr: 'An ninh năng lượng là khả năng bảo đảm nguồn cung **đủ, ổn định và với giá chấp nhận được**. Than cung cấp điện nền nhưng phát thải cao; LNG linh hoạt hơn nhưng giá gắn với thị trường toàn cầu và phải nhập khẩu; điện gió, mặt trời rẻ dần nhưng không ổn định theo giờ nên cần lưới điện và lưu trữ. Chuyển dịch thành công khi ba yếu tố này cùng được xử lý, không chỉ khi thay một nhiên liệu bằng nhiên liệu khác.',
  keyPoints: [
    'Hai mặt của an ninh năng lượng: **an ninh nguồn cung** (đủ, không gián đoạn) và **khả năng chi trả**; thêm một mặt hiện nay là **phát thải**, vì các cam kết khí hậu ràng buộc lựa chọn.',
    'LNG là khí thiên nhiên hóa lỏng để vận chuyển bằng tàu; vì giao dịch toàn cầu nên giá và nguồn cung chịu tác động từ các cú sốc xa (xung đột, thời tiết ở nước khác).',
    'Điện mặt trời và gió có chi phí biên thấp nhưng **sản lượng thay đổi theo thời tiết**; để thay thế điện nền cần thêm truyền tải, lưu trữ và nguồn linh hoạt dự phòng.',
    'Chuyển dịch năng lượng là chuyển dịch của hệ thống (lưới điện, hợp đồng mua bán điện, tài chính) chứ không chỉ công nghệ phát điện.',
    'Khi đọc tin về năng lượng, hỏi: nguồn đó cung cấp **điện năng (kWh)** hay **công suất (kW)**; hệ số sử dụng ra sao; ai chịu rủi ro giá nhiên liệu.',
  ],
  causalChain: [
    { from: 'Nhu cầu điện tăng theo công nghiệp hóa và tiêu dùng', to: 'Cần thêm công suất và nhiên liệu', mechanism: 'Tăng trưởng nhu cầu buộc phải xây nguồn mới hoặc nhập thêm nhiên liệu.' },
    { from: 'Nguồn nội địa (than, thủy điện) hạn chế hoặc theo mùa', to: 'Phụ thuộc nhiên liệu nhập khẩu (than nhập, LNG)', mechanism: 'Giá nhiên liệu nhập khẩu tính bằng ngoại tệ, nên giá điện và cán cân thương mại nhạy với giá thế giới và tỷ giá.' },
    { from: 'Giá LNG/than thế giới tăng', to: 'Chi phí phát điện và áp lực giá điện tăng', mechanism: 'Nếu giá điện bán lẻ bị kiềm chế, chi phí đó chuyển thành áp lực tài chính lên doanh nghiệp điện hoặc được điều chỉnh sau với độ trễ.' },
    { from: 'Tăng tỷ trọng điện gió, mặt trời', to: 'Cần lưới truyền tải, lưu trữ và nguồn linh hoạt', mechanism: 'Sản lượng biến động theo giờ; nếu lưới không đủ có thể phải cắt giảm công suất tái tạo hoặc thiếu điện giờ cao điểm.' },
  ],
  vietnamImpact: [
    { group: 'Hộ gia đình', effect: 'Ảnh hưởng qua giá điện và độ ổn định cấp điện; áp lực tăng giá khi chi phí nhiên liệu nhập khẩu cao.', direction: 'mixed' },
    { group: 'Doanh nghiệp sản xuất', effect: 'Chi phí và độ tin cậy điện là điều kiện thu hút FDI; thiếu điện cục bộ làm gián đoạn sản xuất.', direction: 'mixed' },
    { group: 'Nhà đầu tư năng lượng', effect: 'Dự án LNG và tái tạo phụ thuộc cơ chế giá mua điện, hợp đồng mua bán điện và hạ tầng truyền tải, nên rủi ro chính sách lớn.', direction: 'mixed' },
    { group: 'Cán cân thương mại và tỷ giá', effect: 'Nhập khẩu nhiên liệu nhiều hơn làm tăng cầu ngoại tệ khi giá thế giới tăng.', direction: 'down' },
  ],
  indicators: [
    { name: 'Cơ cấu nguồn điện theo công suất và sản lượng', why: 'Tách “công suất lắp đặt” khỏi “điện thực sự phát ra”.', where: 'Bộ Công Thương, Tập đoàn Điện lực Việt Nam (EVN), Quy hoạch điện' },
    { name: 'Giá LNG và giá than thế giới', why: 'Quyết định chi phí nhiên liệu của nhà máy nhiệt điện nhập khẩu.', where: 'Báo cáo thị trường của IEA, World Bank (Commodity Markets “Pink Sheet”)' },
    { name: 'Hệ số sử dụng công suất và tỷ lệ cắt giảm điện tái tạo', why: 'Cho biết hạ tầng lưới có theo kịp nguồn mới không.', where: 'Trung tâm Điều độ hệ thống điện quốc gia; báo cáo ngành' },
  ],
  counterpoints: [
    'LNG thường được gọi là nhiên liệu chuyển tiếp, nhưng nếu cam kết dài hạn quá lớn có thể khóa chi phí cao nếu giá thế giới giảm hoặc nhu cầu thấp hơn dự báo.',
    'Chi phí cố định thấp của tái tạo không đồng nghĩa chi phí hệ thống thấp: phải tính cả lưới và lưu trữ.',
    'Than không biến mất ngay trong nhiều nền kinh tế vì cần điện nền; tốc độ rút than là lựa chọn chính sách có đánh đổi với giá điện.',
  ],
  glossary: [
    { term: 'LNG', definition: 'Khí thiên nhiên hóa lỏng, được làm lạnh để vận chuyển bằng tàu và tái hóa khí tại cảng nhập.' },
    { term: 'Điện nền', definition: 'Phần điện cung cấp liên tục, ổn định để đáp ứng nhu cầu tối thiểu của hệ thống.' },
    { term: 'Hệ số sử dụng công suất', definition: 'Tỷ lệ điện thực phát so với mức tối đa nếu nhà máy chạy hết công suất cả năm.' },
    { term: 'Chuyển dịch năng lượng', definition: 'Quá trình thay đổi cơ cấu nguồn năng lượng của nền kinh tế, thường theo hướng ít phát thải hơn.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'energy-security-lng-coal-transition-q',
    question: 'Một tỉnh công bố thêm nhiều công suất điện mặt trời nhưng cuối năm vẫn thiếu điện vào buổi tối và có lúc phải cắt giảm điện mặt trời vào buổi trưa. Giải thích hợp lý nhất?',
    options: [
      { id: 'a', text: 'Công suất lắp đặt chắc chắn đã bị báo cáo sai.', explain: 'Không cần giả định sai báo cáo; hiện tượng này có thể xảy ra với số liệu đúng.' },
      { id: 'b', text: 'Điện mặt trời tập trung vào giờ nắng và lưới/lưu trữ chưa đủ để chuyển sang buổi tối.', correct: true, explain: 'Đúng. Công suất lắp đặt khác điện cung cấp đúng thời điểm; thiếu lưu trữ và truyền tải gây cắt giảm giờ trưa và thiếu giờ tối.' },
      { id: 'c', text: 'Tái tạo luôn đắt hơn than nên không nên lắp đặt.', explain: 'Kết luận này sai về chi phí và bỏ qua việc vấn đề nằm ở hệ thống hơn là chi phí phát điện.' },
    ],
  },
  sources: [
    { title: 'Liquefied natural gas (LNG): làm lạnh khí thành lỏng để vận chuyển bằng tàu', publisher: 'U.S. Energy Information Administration', url: 'https://www.eia.gov/energyexplained/natural-gas/liquefied-natural-gas.php' },
    { title: 'Energy security', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Energy_security' },
    { title: 'Liquefied natural gas', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Liquefied_natural_gas' },
    { title: 'Energy transition', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Energy_transition' },
    { title: 'Energy in Vietnam', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Energy_in_Vietnam' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 103,
}
