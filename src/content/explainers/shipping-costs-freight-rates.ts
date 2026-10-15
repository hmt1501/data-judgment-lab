import type { Explainer } from '../../../shared/explainer'

export const shippingCostsFreightRates: Explainer = {
  id: 'shipping-costs-freight-rates',
  slug: 'shipping-costs-freight-rates',
  question: 'Cước vận tải biển tăng hay giảm tác động gì tới giá hàng và xuất nhập khẩu?',
  title: 'Cước container: sốc cung - cầu tàu và cảng chuyển thành chi phí hàng hóa với độ trễ',
  topic: 'geopolitics-trade',
  tldr: 'Cước vận tải biển xác định bởi **cung - cầu tải trọng tàu** và mức độ thông suốt của tuyến, cảng. Khi cước tăng mạnh, chi phí logistics đẩy giá hàng nhập khẩu và xuất khẩu, nhất là hàng giá trị thấp, cồng kềnh; khi cước giảm, áp lực giá nhẹ đi nhưng thường chậm hơn. Tác động lên giá tiêu dùng nhỏ hơn mức tăng cước vì cước chỉ là một phần giá thành.',
  keyPoints: [
    'Cước phụ thuộc **cung tàu** (đội tàu, số tàu mới giao, tốc độ chạy), **cầu hàng**, và các điểm nghẽn như tắc cảng, đóng kênh, vòng tránh tuyến làm hành trình dài hơn.',
    'Chuyên chở container gắn chặt với chuỗi cung ứng toàn cầu: một container có thể chứa hàng cho nhiều nhà nhập khẩu, nên cú sốc cước lan rộng.',
    'Ảnh hưởng tới giá hàng tỷ lệ với **tỷ trọng cước trong giá trị hàng**: hàng điện tử giá trị cao ít nhạy, hàng gia dụng/đồ gỗ/nội thất nhạy hơn.',
    'Hợp đồng cước dài hạn và giá giao ngay (spot) khác nhau; doanh nghiệp ký dài hạn ổn định hơn nhưng chậm hưởng khi cước giảm.',
    'Ví dụ giả định: hàng giá 1.000 USD, cước 50 USD (5%); cước tăng gấp 3 lên 150 USD làm giá thành tăng thêm **10%** nếu không bên nào hấp thụ chi phí.',
  ],
  causalChain: [
    { from: 'Nhu cầu hàng tăng hoặc tuyến bị gián đoạn', to: 'Tải trọng khả dụng giảm so với nhu cầu', mechanism: 'Tàu đi đường vòng hoặc kẹt tại cảng làm giảm vòng quay đội tàu; cung tải trọng hiệu dụng giảm.' },
    { from: 'Cung hiệu dụng thấp hơn cầu', to: 'Cước giao ngay tăng', mechanism: 'Hãng tàu và chủ hàng cạnh tranh chỗ; phụ phí mùa cao điểm, rủi ro tăng.' },
    { from: 'Cước tăng', to: 'Chi phí logistics trong giá thành tăng', mechanism: 'Nhà nhập khẩu, xuất khẩu gánh chi phí hoặc chuyển cho khách; biên lợi nhuận hoặc giá bán điều chỉnh.' },
    { from: 'Chi phí cao kéo dài', to: 'Điều chỉnh chuỗi cung ứng và nhu cầu', mechanism: 'Doanh nghiệp đổi tuyến, tăng tồn kho, tìm nguồn gần hơn; nhu cầu hàng nhạy giá giảm.' },
    { from: 'Đóng tàu mới, tắc nghẽn giải tỏa', to: 'Cung phục hồi, cước giảm', mechanism: 'Dư thừa tải trọng làm giá cước quay về, nhưng với độ trễ do hợp đồng và tồn kho.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp xuất khẩu hàng giá trị thấp (nội thất, thủy sản, dệt may)', effect: 'Cước tăng ăn vào biên lợi nhuận hoặc làm mất đơn; cước giảm cải thiện biên.', direction: 'mixed' },
    { group: 'Doanh nghiệp nhập khẩu nguyên liệu', effect: 'Chi phí đầu vào tăng khi cước tăng, đẩy giá thành sản xuất.', direction: 'down' },
    { group: 'Hãng tàu và cảng biển', effect: 'Doanh thu tăng khi cước cao và lượng hàng lớn; rủi ro khi cung dư thừa kéo cước giảm.', direction: 'mixed' },
    { group: 'Người tiêu dùng', effect: 'Giá hàng nhập khẩu có thể tăng với độ trễ; mức tăng nhỏ hơn mức tăng của cước.', direction: 'down' },
    { group: 'Cán cân thương mại', effect: 'Cước tính vào giá CIF của hàng nhập khẩu nên làm thay đổi kim ngạch nhập khẩu công bố.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Chỉ số cước container (Drewry WCI, SCFI, Freightos)', why: 'Phản ánh giá thị trường giao ngay theo tuyến chính.', where: 'Drewry, Shanghai Shipping Exchange, Freightos (trang của từng đơn vị)' },
    { name: 'Chỉ số áp lực chuỗi cung ứng toàn cầu', why: 'Tổng hợp thời gian giao hàng, tồn kho, tắc nghẽn.', where: 'Federal Reserve Bank of New York' },
    { name: 'Thông lượng container qua cảng và thời gian chờ tàu', why: 'Cho thấy mức tắc nghẽn cảng.', where: 'Cục Hàng hải Việt Nam, các cảng lớn; UNCTAD (unctad.org) có báo cáo thường niên về vận tải biển' },
    { name: 'Chỉ số PMI: thời gian giao hàng của nhà cung cấp', why: 'Đo độ trễ giao hàng thực tế.', where: 'S&P Global PMI' },
  ],
  counterpoints: [
    'Cước chỉ chiếm phần nhỏ giá hàng điện tử, đắt tiền; ảnh hưởng thực tế tới CPI nhỏ nếu không kéo dài.',
    'Tăng cước đôi khi phản ánh cầu mạnh (kinh tế tốt) hơn là chỉ chi phí; tách nguyên nhân cầu và nguyên nhân gián đoạn cung rất quan trọng.',
    'Doanh nghiệp lớn có hợp đồng dài hạn hoặc vận tải riêng ít chịu tác động hơn doanh nghiệp nhỏ mua giá giao ngay.',
  ],
  glossary: [
    { term: 'Cước giao ngay (spot)', definition: 'Giá vận chuyển theo thị trường tại thời điểm đặt chỗ, khác hợp đồng dài hạn.' },
    { term: 'TEU', definition: 'Đơn vị container 20 feet, dùng đo tải trọng và lượng hàng.' },
    { term: 'Giá CIF', definition: 'Giá hàng bao gồm chi phí, bảo hiểm và cước vận chuyển đến cảng đích.' },
    { term: 'Phụ phí mùa cao điểm', definition: 'Khoản phụ thu hãng tàu áp dụng khi nhu cầu vận chuyển tăng mạnh.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'shipping-costs-freight-rates-q',
    question: 'Cước container tăng gấp 3. Mặt hàng nào có giá bán dễ tăng nhiều nhất?',
    options: [
      { id: 'a', text: 'Điện thoại cao cấp, giá trị cao, cước chiếm tỷ trọng nhỏ.', explain: 'Cước chiếm phần rất nhỏ giá trị nên ảnh hưởng nhỏ.' },
      { id: 'b', text: 'Hàng cồng kềnh, giá trị thấp, như đồ nội thất hay vật liệu, vì cước chiếm tỷ trọng lớn trong giá.', correct: true, explain: 'Đúng. Mức tác động bằng mức tăng cước nhân với tỷ trọng cước trong giá.' },
      { id: 'c', text: 'Mọi mặt hàng tăng như nhau vì cước tăng như nhau.', explain: 'Cước tăng như nhau nhưng tỷ trọng trong giá khác nhau nên mức tác động khác nhau.' },
    ],
  },
  sources: [
    { title: 'Container shipping', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Container_shipping' },
    { title: 'Trade', publisher: 'World Bank', url: 'https://www.worldbank.org/en/topic/trade/overview' },
    { title: 'Supply chain', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Supply_chain' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 32,
}
