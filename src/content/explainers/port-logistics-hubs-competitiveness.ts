import type { Explainer } from '../../../shared/explainer'

export const portLogisticsHubsCompetitiveness: Explainer = {
  id: 'port-logistics-hubs-competitiveness',
  slug: 'port-logistics-hubs-competitiveness',
  question: 'Cảng và logistics ảnh hưởng thế nào tới sức cạnh tranh của một nền kinh tế xuất khẩu?',
  title: 'Với nền kinh tế xuất khẩu, cảng và logistics là một phần giá thành: mỗi điểm phần trăm chi phí đều trừ vào sức cạnh tranh',
  topic: 'geopolitics-trade',
  tldr: 'Hàng xuất khẩu cạnh tranh bằng **giá giao đến tay người mua**, gồm giá sản xuất cộng chi phí vận tải, cảng, kho bãi, thông quan và thời gian chờ. Cảng nước sâu, kết nối đường bộ/đường sắt/thủy tốt, thủ tục số hóa giúp giảm chi phí và rủi ro giao hàng trễ. Theo Bộ trưởng GTVT (báo Đấu thầu, 8/6/2023), chi phí logistics Việt Nam năm 2022 khoảng 18% GDP, so với khoảng 11% GDP trên thế giới, cho thấy dư địa cải thiện lớn; số liệu này còn tranh luận về phương pháp tính.',
  keyPoints: [
    'Logistics gồm vận tải, kho bãi, xử lý hàng ở cảng, thủ tục hải quan, tồn kho và quản lý chuỗi cung ứng; chi phí logistics tính theo **% GDP** thường gồm cả chi phí doanh nghiệp tự làm nên khó so sánh giữa các nước.',
    'Theo báo Đấu thầu (08/06/2023) dẫn Bộ trưởng GTVT: chi phí logistics của Việt Nam năm 2022 tương đương **18% GDP**, cải thiện so với khoảng 20% GDP những năm trước, mục tiêu đến 2025 là 16–20% GDP; mức thế giới khoảng 11% GDP. Đây là số của một thời điểm và nguồn; số mới hơn có thể khác.',
    'Cùng bài, các hướng giải pháp nêu để giảm chi phí gồm hoàn thiện kết cấu hạ tầng đồng bộ, giảm phí đường bộ và phí ra vào cảng biển, và ứng dụng công nghệ thông tin; cho thấy điểm nghẽn nằm ở kết nối, phí và thủ tục.',
    'Chỉ số **LPI** (Logistics Performance Index) của Ngân hàng Thế giới đánh giá nhiều khía cạnh như hải quan, hạ tầng, giao hàng đúng hạn, chất lượng dịch vụ, truy xuất; dùng để so sánh tương đối giữa các nước.',
    'Cảng trung chuyển (hub) có lợi thế quy mô: tàu lớn chỉ ghé một số cảng chính, hàng từ cảng nhỏ gom về qua tàu nhỏ; nước có cảng nước sâu gần luồng hàng hải lớn có thể thu hút tuyến trực tiếp, giảm thời gian và chi phí.',
  ],
  causalChain: [
    { from: 'Cảng và kết nối nội địa có điểm nghẽn (hạ tầng, thủ tục, phí)', to: 'Thời gian và chi phí vận chuyển tăng', mechanism: 'Tàu chờ cầu bến, xe chờ bãi, hàng chờ thông quan làm tăng chi phí lưu kho, lưu container và rủi ro trễ đơn.' },
    { from: 'Chi phí logistics tăng', to: 'Giá giao hàng cao hơn, mất lợi thế cạnh tranh', mechanism: 'Với hàng giá trị thấp, biên lợi nhuận mỏng, vài phần trăm chi phí logistics đủ làm mất đơn hàng cho nước cạnh tranh.' },
    { from: 'Tuyến tàu lớn đi thẳng đến cảng nước sâu', to: 'Giảm trung chuyển và chi phí trên mỗi container', mechanism: 'Tàu lớn chở nhiều hơn mỗi chuyến; nếu cảng không nhận được tàu lớn, hàng phải trung chuyển qua nước khác.' },
    { from: 'Logistics tốt, thủ tục số hóa', to: 'Thu hút FDI sản xuất xuất khẩu', mechanism: 'Doanh nghiệp đa quốc gia chọn địa điểm có chuỗi cung ứng tin cậy; độ tin cậy giao hàng quan trọng ngang chi phí.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp xuất khẩu', effect: 'Chi phí logistics cao ăn vào biên lợi nhuận và khả năng chào giá; cải thiện hạ tầng, thủ tục giúp hạ giá thành giao hàng.', direction: 'down' },
    { group: 'Doanh nghiệp logistics và cảng biển', effect: 'Cơ hội từ tăng trưởng thương mại, nhưng cần đầu tư công nghệ, kho bãi và nhân lực; cạnh tranh với khu vực.', direction: 'up' },
    { group: 'FDI sản xuất', effect: 'Hạ tầng cảng và logistics là yếu tố địa điểm; nút thắt kéo dài có thể làm nhà đầu tư cân nhắc chọn nước khác.', direction: 'mixed' },
    { group: 'Người tiêu dùng', effect: 'Chi phí logistics chuyển một phần vào giá hàng hóa trong nước, nhất là hàng tiêu dùng nặng, cồng kềnh.', direction: 'down' },
    { group: 'Ngân sách đầu tư công', effect: 'Dự án đường cao tốc, cảng, kết nối là ưu tiên nhưng cần giải ngân đúng tiến độ để phát huy hiệu quả.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Logistics Performance Index (LPI)', why: 'So sánh quốc tế về hải quan, hạ tầng, đúng hạn.', where: 'Ngân hàng Thế giới – lpi.worldbank.org' },
    { name: 'Chi phí logistics/GDP và cơ cấu chi phí (vận tải, kho, tồn kho)', why: 'Cho biết khâu nào là nút thắt.', where: 'Báo cáo Logistics Việt Nam của Bộ Công Thương; công bố của bộ quản lý ngành giao thông vận tải' },
    { name: 'Sản lượng container qua cảng và thời gian tàu chờ', why: 'Đo công suất và độ nghẽn cảng.', where: 'Cục Hàng hải Việt Nam, các cảng, UNCTAD – Review of Maritime Transport' },
    { name: 'Cước vận tải container', why: 'Giá cước biến động ảnh hưởng chi phí xuất nhập khẩu.', where: 'Drewry WCI, Freightos FBX; bài trước về cước vận tải trên Đọc nhanh' },
  ],
  counterpoints: [
    'Tỷ lệ logistics/GDP phụ thuộc cơ cấu kinh tế và cách tính (có nước tính chi phí doanh nghiệp tự vận chuyển), nên so sánh thô giữa các nước dễ gây hiểu nhầm.',
    'Hạ tầng cảng là điều kiện cần, không đủ: thủ tục, dịch vụ vận tải nội địa, phí và năng lực doanh nghiệp logistics cũng quyết định hiệu quả.',
    'Đầu tư cảng quá mức có thể gây dư công suất nếu luồng hàng không tăng tương ứng hoặc bị cạnh tranh bởi cảng khu vực.',
  ],
  glossary: [
    { term: 'Logistics', definition: 'Hoạt động quản lý dòng hàng hóa từ nơi sản xuất đến nơi tiêu dùng gồm vận tải, kho bãi, thủ tục.' },
    { term: 'Cảng trung chuyển (hub)', definition: 'Cảng nơi hàng được chuyển tàu để đi tiếp, thường có quy mô lớn và kết nối nhiều tuyến.' },
    { term: 'Cảng nước sâu', definition: 'Cảng đủ độ sâu luồng và bến để đón tàu container cỡ lớn.' },
    { term: 'LPI', definition: 'Chỉ số năng lực logistics của Ngân hàng Thế giới.' },
    { term: 'Thông quan', definition: 'Hoàn tất thủ tục hải quan để hàng được xuất hoặc nhập.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'port-logistics-hubs-competitiveness-q',
    question: 'Một nước có biên lợi nhuận xuất khẩu giày dép mỏng, chi phí logistics tăng 3 điểm phần trăm so với giá bán. Hệ quả hợp lý nhất?',
    options: [
      { id: 'a', text: 'Không đáng kể vì 3 điểm phần trăm là nhỏ.', explain: 'Với biên mỏng, 3 điểm phần trăm có thể là cả biên lợi nhuận hoặc mất đơn hàng.' },
      { id: 'b', text: 'Có thể làm mất lợi thế giá hoặc ép lợi nhuận, nhất là so với nước đối thủ có logistics rẻ hơn.', correct: true, explain: 'Đúng. Giá giao đến tay người mua mới là thước đo cạnh tranh; logistics là phần của giá đó.' },
      { id: 'c', text: 'Chỉ ảnh hưởng người tiêu dùng cuối ở nước nhập khẩu.', explain: 'Chi phí được chia giữa nhà xuất khẩu, nhà nhập khẩu và người tiêu dùng tùy thế mạnh thương lượng; nhà xuất khẩu vẫn chịu một phần.' },
    ],
  },
  sources: [
    { title: 'Chi phí logistics của Việt Nam hiện chiếm 18% GDP (đăng 08/06/2023)', publisher: 'Báo Đấu thầu', url: 'https://baodauthau.vn/chi-phi-logistics-cua-viet-nam-hien-chiem-18-gdp-post139519.html' },
    { title: 'Logistics Performance Index', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Logistics_Performance_Index' },
    { title: 'Spoke–hub distribution paradigm', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Hub_and_spoke' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 69,
}
