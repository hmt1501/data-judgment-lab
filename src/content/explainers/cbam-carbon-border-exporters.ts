import type { Explainer } from '../../../shared/explainer'

export const cbamCarbonBorderExporters: Explainer = {
  id: 'cbam-carbon-border-exporters',
  slug: 'cbam-carbon-border-exporters',
  question: 'Cơ chế điều chỉnh biên giới carbon (CBAM) của EU là gì và ảnh hưởng thế nào tới nhà xuất khẩu như Việt Nam?',
  title: 'CBAM: cơ chế điều chỉnh biên giới carbon và nhà xuất khẩu',
  topic: 'geopolitics-trade',
  tldr: 'CBAM buộc nhà nhập khẩu vào EU mua **chứng chỉ CBAM** tương ứng lượng phát thải gắn trong hàng hóa thuộc diện (thép, nhôm, xi măng, phân bón, điện, hydro), để giá hàng nhập phản ánh chi phí carbon như hàng sản xuất trong EU. Theo Ủy ban châu Âu, CBAM áp dụng theo chế độ chính thức từ 1/1/2026. Với nhà xuất khẩu, rủi ro chính là chi phí tuân thủ, dữ liệu phát thải và chi phí chứng chỉ.',
  keyPoints: [
    'Theo trang của Ủy ban châu Âu: CBAM là công cụ chống "rò rỉ carbon", làm giá hàng nhập phản ánh lượng phát thải gắn trong sản phẩm và bổ sung cho Hệ thống mua bán phát thải EU (EU ETS); phạm vi gồm xi măng, sắt thép, nhôm, phân bón, điện và hydro; giai đoạn chuyển tiếp 2023–2025, "từ ngày 1/1/2026" áp dụng chế độ chính thức.',
    'Nhà nhập khẩu phải được ủy quyền, báo cáo, mua và nộp chứng chỉ CBAM tương ứng với phát thải gắn trong hàng nhập; giá chứng chỉ dựa trên giá đấu giá hạn ngạch của EU ETS.',
    'Theo VnEconomy (23/4/2026): Ủy ban châu Âu công bố mức giá tham chiếu đầu tiên của chứng chỉ CBAM cho quý I/2026 là 75,36 euro/tấn CO₂ tương đương; mua chứng chỉ cho hàng nhập năm 2026 bắt đầu từ 1/2/2027; hạn nộp báo cáo và chứng chỉ lần đầu là 30/9/2027 (bài cũng có một đoạn không nhất quán về chu kỳ cập nhật giá).',
    'Ví dụ giả định để hiểu cơ chế: 1.000 tấn thép, phát thải gắn trong 2 tCO₂/tấn, giá chứng chỉ 75,36 euro/tCO₂ thì chi phí gộp ban đầu khoảng 2.000 × 75,36 = 150.720 euro (chưa tính các khoản điều chỉnh khác, vì các điều khoản này chưa được xác nhận qua nguồn đã đọc).',
    'Theo chuyên gia trích trong bài VnEconomy: hàng thâm dụng carbon của Việt Nam xuất sang EU sẽ chịu tác động rõ rệt trong 3–5 năm tới nếu không chuyển đổi xanh; doanh nghiệp phát thải cao và thiếu dữ liệu minh bạch đối mặt rủi ro lớn hơn.',
  ],
  causalChain: [
    { from: 'EU áp giá carbon nội địa qua EU ETS', to: 'Nhà sản xuất EU chịu chi phí carbon cao hơn nhà sản xuất bên ngoài', mechanism: 'Hàng sản xuất ở nơi không có giá carbon rẻ hơn, dễ khiến sản xuất dịch chuyển ra ngoài EU (rò rỉ carbon).' },
    { from: 'CBAM yêu cầu nhà nhập khẩu mua chứng chỉ theo phát thải gắn trong hàng', to: 'Giá hàng nhập phản ánh chi phí carbon', mechanism: 'Chi phí chứng chỉ tính theo tấn CO₂ gắn trong sản phẩm nên hàng phát thải cao chịu chi phí lớn hơn.' },
    { from: 'Nhà xuất khẩu cung cấp dữ liệu phát thải thực tế (đo, báo cáo, thẩm định)', to: 'Nhà nhập khẩu có thể tính theo phát thải thực thay vì giá trị mặc định', mechanism: 'Theo hướng dẫn của Ủy ban châu Âu, báo cáo CBAM dùng giá trị mặc định hoặc phát thải thực đã thẩm định; nếu không nhận được dữ liệu thực từ nhà sản xuất, nhà nhập khẩu luôn có thể dùng giá trị mặc định. Mặc định cao hơn thực tế bao nhiêu chưa được kiểm trong bài này.' },
    { from: 'Chi phí carbon và chi phí tuân thủ tăng', to: 'Biên lợi nhuận xuất khẩu giảm hoặc nhập khẩu giảm', mechanism: 'Chi phí được chia giữa nhà nhập khẩu EU và nhà xuất khẩu qua giá; cầu có thể chuyển sang nguồn có cường độ phát thải thấp hơn.' },
    { from: 'Doanh nghiệp đầu tư giảm phát thải (năng lượng sạch, hiệu quả năng lượng)', to: 'Giảm chi phí CBAM và nâng sức cạnh tranh dài hạn', mechanism: 'Giảm cường độ phát thải trực tiếp giảm số chứng chỉ phải mua, nhưng cần vốn và thời gian.' },
  ],
  vietnamImpact: [
    { group: 'Nhà xuất khẩu thép, nhôm, xi măng, phân bón sang EU', effect: 'Chịu chi phí chứng chỉ và tuân thủ; cần đo phát thải thực và chuẩn bị báo cáo, đặc biệt khi phát thải cao.', direction: 'down' },
    { group: 'Doanh nghiệp có phát thải thấp, dữ liệu minh bạch', effect: 'Chi phí CBAM thấp hơn, có thể là lợi thế so với đối thủ phát thải cao.', direction: 'up' },
    { group: 'Doanh nghiệp cung ứng đầu vào cho ngành thuộc diện', effect: 'Đối tác xuất khẩu yêu cầu dữ liệu phát thải, tạo chi phí tuân thủ và áp lực giảm phát thải.', direction: 'mixed' },
    { group: 'Nhà hoạch định chính sách', effect: 'Cần hệ thống đo lường–báo cáo–thẩm tra (MRV), định giá carbon trong nước và hỗ trợ chuyển đổi.', direction: 'mixed' },
    { group: 'Ngành năng lượng và công nghệ xanh', effect: 'Nhu cầu tăng với năng lượng tái tạo, hiệu quả năng lượng, dịch vụ kiểm toán carbon.', direction: 'up' },
  ],
  indicators: [
    { name: 'Giá chứng chỉ CBAM và giá hạn ngạch EU ETS', why: 'Quyết định chi phí trên mỗi tấn CO₂.', where: 'Ủy ban châu Âu (taxation-customs.ec.europa.eu); thị trường EU ETS' },
    { name: 'Cường độ phát thải (tCO₂/tấn sản phẩm) của doanh nghiệp', why: 'Biến số quyết định số chứng chỉ phải mua.', where: 'Dữ liệu doanh nghiệp, thẩm định của tổ chức xác minh' },
    { name: 'Danh mục hàng hóa thuộc diện CBAM và mở rộng', why: 'Rủi ro phạm vi mở rộng sang hạ nguồn.', where: 'Ủy ban châu Âu; báo cáo của Trung tâm WTO và Hội nhập' },
    { name: 'Kim ngạch xuất khẩu các nhóm hàng thuộc diện sang EU', why: 'Quy mô phơi nhiễm.', where: 'Cục Hải quan; Cục Thống kê' },
  ],
  counterpoints: [
    'Tác động thực tế phụ thuộc cường độ phát thải, tỷ trọng xuất sang EU và khả năng chuyển chi phí; không phải mọi doanh nghiệp đều chịu cùng mức.',
    'Các nguồn có điểm chưa nhất quán (ví dụ chu kỳ cập nhật giá chứng chỉ trong một bài; các mốc báo cáo khác nhau giữa bài); cần đối chiếu văn bản EU trước khi lập kế hoạch.',
    'CBAM có thể thúc đẩy đầu tư xanh và mở lợi thế cho nhà xuất khẩu sạch hơn; cũng có thể gây tranh chấp thương mại và chi phí cao cho nước đang phát triển.',
  ],
  glossary: [
    { term: 'CBAM', definition: 'Cơ chế điều chỉnh biên giới carbon của EU: nhà nhập khẩu mua chứng chỉ theo phát thải gắn trong hàng nhập.' },
    { term: 'Rò rỉ carbon', definition: 'Sản xuất dịch chuyển ra nơi có chi phí carbon thấp hơn, làm giảm hiệu quả chính sách khí hậu.' },
    { term: 'EU ETS', definition: 'Hệ thống mua bán phát thải của EU, là căn cứ giá carbon của CBAM.' },
    { term: 'Phát thải gắn trong sản phẩm', definition: 'Lượng CO₂ phát sinh trong quá trình sản xuất ra hàng hóa.' },
    { term: 'MRV', definition: 'Đo lường – Báo cáo – Thẩm tra phát thải.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'cbam-carbon-border-exporters-q',
    question: 'Một nhà xuất khẩu thép sang EU chưa có dữ liệu phát thải thực tế của nhà máy. Hệ quả nào hợp lý nhất theo cơ chế được mô tả?',
    options: [
      { id: 'a', text: 'Không phải làm gì vì CBAM chỉ áp cho nhà nhập khẩu EU.', explain: 'Nhà nhập khẩu cần dữ liệu từ nhà xuất khẩu; chi phí và yêu cầu dữ liệu chuyển ngược về chuỗi xuất khẩu.' },
      { id: 'b', text: 'Nhà nhập khẩu có thể phải dùng giá trị mặc định của EU thay vì phát thải thực; muốn tính theo phát thải thực cần đo và thẩm định dữ liệu của nhà máy.', correct: true, explain: 'Đúng theo hướng dẫn của Ủy ban châu Âu: dùng giá trị mặc định hoặc phát thải thực đã thẩm định. Mặc định có tốn kém hơn hay không phụ thuộc mức cụ thể, bài chưa kiểm.' },
      { id: 'c', text: 'CBAM sẽ biến mất vì giai đoạn chuyển tiếp đã kết thúc.', explain: 'Ngược lại: từ 1/1/2026 CBAM áp dụng theo chế độ chính thức theo Ủy ban châu Âu.' },
    ],
  },
  sources: [
    { title: 'Carbon Border Adjustment Mechanism', publisher: 'European Commission (Taxation and Customs Union)', url: 'https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en' },
    { title: 'Cơ chế CBAM đang bước sang một giai đoạn mới (23/4/2026)', publisher: 'VnEconomy', url: 'https://vneconomy.vn/co-che-cbam-dang-buoc-sang-mot-giai-doan-moi.htm' },
    { title: 'Guidance No. 1 – Introduction to CBAM concepts', publisher: 'European Commission (Taxation and Customs Union)', url: 'https://taxation-customs.ec.europa.eu/system/files/2026-08/Guidance%20No.%201%20-%20Introduction%20to%20CBAM%20concepts.pdf' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 139,
}
