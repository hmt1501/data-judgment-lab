import type { Explainer } from '../../../shared/explainer'

export const dollarIndexDxyEmergingMarkets: Explainer = {
  id: 'dollar-index-dxy-emerging-markets',
  slug: 'dollar-index-dxy-emerging-markets',
  question: 'USD mạnh lên ảnh hưởng thị trường mới nổi và Việt Nam ra sao?',
  title: 'USD mạnh làm nợ ngoại tệ nặng hơn và vốn rút bớt, nhưng cũng có thể hỗ trợ xuất khẩu',
  topic: 'macro',
  tldr: 'Chỉ số DXY đo giá trị USD so với một rổ vài đồng tiền chủ chốt (đồng euro chiếm tỷ trọng lớn nhất), **không có VND** trong rổ. USD mạnh thường đi cùng lãi suất Mỹ cao, vốn rời thị trường mới nổi, nợ bằng USD nặng hơn. Với Việt Nam, tác động cuối cùng phụ thuộc vào việc VND mất giá bao nhiêu so với các đồng tiền của đối thủ xuất khẩu.',
  keyPoints: [
    '**DXY** là chỉ số trung bình gia quyền của USD so với một rổ tiền tệ phát triển; nó phản ánh sức mạnh USD "nói chung", không phải tỷ giá USD/VND.',
    'USD thường mạnh lên khi Fed giữ lãi suất cao, kinh tế Mỹ vượt trội, hoặc nhu cầu trú ẩn tăng; lúc đó chi phí vay USD và nghĩa vụ trả nợ của các nước đang phát triển đều tăng.',
    'Thị trường mới nổi chịu ba kênh: **dòng vốn** (nhà đầu tư rút để mua tài sản USD), **nợ ngoại tệ** (trả nợ bằng đồng tiền mất giá), **giá hàng hóa** tính bằng USD (thường giảm khi USD mạnh).',
    'Việt Nam quản lý tỷ giá theo biên độ quanh tỷ giá trung tâm nên VND thường mất giá ít hơn nhiều đồng tiền khác; điều này làm hàng Việt kém lợi thế giá hơn đối thủ khi họ phá giá mạnh. Theo VnFinance (17/10/2022), NHNN nâng biên độ tỷ giá giao ngay từ ±3% lên **±5%** (Quyết định 1747/QĐ-NHNN); theo VnFinance ngày 28/07/2026, tỷ giá trung tâm đạt 25.306 đồng/USD, vùng giao dịch của ngân hàng thương mại 24.040,7 – 26.571,3 đồng/USD.',
    'Vì VND không nằm trong rổ DXY, đọc DXY chỉ để hiểu **bối cảnh toàn cầu**; áp lực lên VND còn tùy cán cân thương mại, FDI, kiều hối và điều hành của Ngân hàng Nhà nước.',
  ],
  causalChain: [
    { from: 'Lãi suất Mỹ cao hơn kỳ vọng hoặc kinh tế Mỹ mạnh', to: 'USD mạnh lên so với các đồng tiền khác', mechanism: 'Tài sản USD có lợi suất cao hơn nên nhà đầu tư quốc tế bán các đồng tiền khác để mua USD.' },
    { from: 'USD mạnh lên', to: 'Vốn danh mục rút khỏi thị trường mới nổi', mechanism: 'Chênh lệch lợi suất giữa tài sản mới nổi và USD thu hẹp trong khi rủi ro tỷ giá tăng, khiến nhà đầu tư bán cổ phiếu, trái phiếu địa phương.' },
    { from: 'Vốn rút, đồng nội tệ chịu áp lực', to: 'Chi phí trả nợ ngoại tệ tăng', mechanism: 'Doanh nghiệp, chính phủ vay bằng USD nhưng thu nhập bằng nội tệ phải bỏ ra nhiều nội tệ hơn để mua USD trả nợ.' },
    { from: 'Chi phí nợ và áp lực tỷ giá tăng', to: 'Ngân hàng trung ương nước đó thường giữ lãi suất cao hơn hoặc bán dự trữ', mechanism: 'Để chống mất giá nhanh, họ nâng lãi suất hoặc can thiệp bằng dự trữ ngoại hối, đánh đổi bằng tăng trưởng và dự trữ.' },
    { from: 'Đồng nội tệ yếu đi', to: 'Xuất khẩu có lợi thế giá, nhập khẩu và lạm phát nhập khẩu tăng', mechanism: 'Hàng xuất tính bằng USD rẻ hơn khi quy đổi, nhưng nguyên liệu nhập tính bằng USD đắt hơn, nên lợi ích ròng tùy tỷ trọng nguyên liệu nhập.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp vay USD, trái phiếu quốc tế', effect: 'Chi phí trả gốc, lãi quy đổi sang VND tăng khi tỷ giá lên.', direction: 'down' },
    { group: 'Doanh nghiệp xuất khẩu', effect: 'Nếu VND mất giá nhẹ, lợi thế giá cải thiện; nhưng nếu đối thủ khu vực mất giá mạnh hơn thì lợi thế bị triệt tiêu.', direction: 'mixed' },
    { group: 'Doanh nghiệp nhập khẩu nguyên liệu, xăng dầu', effect: 'Giá vốn tăng khi tỷ giá lên, có thể chuyển sang giá bán và CPI.', direction: 'down' },
    { group: 'Hộ gia đình nhận kiều hối', effect: 'Mỗi USD quy đổi ra nhiều VND hơn, nhưng sức mua không cải thiện nếu giá hàng nhập khẩu tăng theo.', direction: 'up' },
    { group: 'Nhà đầu tư chứng khoán nước ngoài', effect: 'Rủi ro tỷ giá làm giảm lợi nhuận quy ra USD, dễ dẫn tới bán ròng khi USD tăng nhanh.', direction: 'down' },
    { group: 'Ngân hàng Nhà nước', effect: 'Phải cân bằng giữa ổn định tỷ giá, lãi suất và thanh khoản; dự trữ ngoại hối là vùng đệm hữu hạn.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Chỉ số DXY và tỷ giá USD với các đồng tiền châu Á', why: 'So sánh VND với đối thủ xuất khẩu quan trọng hơn nhìn DXY đơn lẻ.', where: 'Dữ liệu thị trường ngoại hối; Fed St. Louis (FRED) có chỉ số USD gia quyền thương mại' },
    { name: 'Lợi suất trái phiếu Mỹ và kỳ vọng lãi suất Fed', why: 'Động lực chính của sức mạnh USD.', where: 'Fed (federalreserve.gov), Bộ Tài chính Mỹ' },
    { name: 'Tỷ giá trung tâm và biên độ của Ngân hàng Nhà nước, tỷ giá ngân hàng và thị trường tự do', why: 'Chênh lệch giữa các tỷ giá cho thấy áp lực thực trên thị trường.', where: 'Ngân hàng Nhà nước Việt Nam (sbv.gov.vn), niêm yết ngân hàng' },
    { name: 'Cán cân thương mại, vốn FDI giải ngân, kiều hối', why: 'Nguồn cung ngoại tệ nội địa bù đắp áp lực từ USD toàn cầu.', where: 'Cục Thống kê (nso.gov.vn), Ngân hàng Nhà nước' },
  ],
  counterpoints: [
    'USD mạnh không phải lúc nào cũng xấu cho mới nổi: nếu USD tăng vì kinh tế Mỹ khỏe, cầu nhập khẩu từ Mỹ cũng tăng.',
    'Một số nước có thị trường vốn nội địa đủ sâu và nợ chủ yếu bằng nội tệ nên chịu ít hơn; mức độ dễ tổn thương tùy cơ cấu nợ và dự trữ.',
    'Việt Nam có cán cân thương mại thặng dư và dòng FDI tương đối ổn định nên có vùng đệm, nhưng vùng đệm này sẽ mỏng đi nếu thặng dư thu hẹp hoặc FDI chậm lại.',
  ],
  glossary: [
    { term: 'DXY', definition: 'Chỉ số USD, đo giá trị USD so với một rổ cố định các đồng tiền phát triển chủ chốt.' },
    { term: 'Tỷ giá trung tâm', definition: 'Mức tỷ giá do Ngân hàng Nhà nước công bố hằng ngày làm cơ sở cho biên độ giao dịch của VND.' },
    { term: 'Dòng vốn danh mục', definition: 'Tiền đầu tư vào cổ phiếu, trái phiếu thanh khoản cao, dễ vào ra nhanh hơn FDI.' },
    { term: 'Tỷ giá hiệu dụng thực', definition: 'Tỷ giá của một đồng tiền so với rổ đối tác thương mại, đã điều chỉnh theo lạm phát tương đối.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'dollar-index-dxy-emerging-markets-q',
    question: 'DXY tăng mạnh nhưng VND chỉ mất giá nhẹ, trong khi nhiều đồng tiền châu Á khác mất giá nhiều hơn. Điều này ngụ ý gì cho xuất khẩu Việt Nam?',
    options: [
      { id: 'a', text: 'Xuất khẩu Việt Nam được lợi tối đa vì USD mạnh.', explain: 'Lợi thế giá còn tùy so với đối thủ: nếu họ mất giá nhiều hơn, hàng Việt kém cạnh tranh về giá hơn.' },
      { id: 'b', text: 'Lợi thế giá có thể kém đi so với đối thủ dù VND ổn định hơn.', correct: true, explain: 'Đúng. Cạnh tranh xuất khẩu phụ thuộc tỷ giá tương đối với đối thủ, không chỉ so với USD.' },
      { id: 'c', text: 'DXY không có liên quan gì tới Việt Nam vì VND không nằm trong rổ.', explain: 'DXY không đo VND, nhưng phản ánh điều kiện tài chính toàn cầu tác động lên dòng vốn và tỷ giá khu vực.' },
    ],
  },
  sources: [
    { title: 'Ngân hàng Nhà nước tăng biên độ tỷ giá USD/VND lên ±5%', publisher: 'VnFinance (17/10/2022)', url: 'https://vietnamfinance.vn/ngan-hang-nha-nuoc-tang-bien-do-ty-gia-usdvnd-len-5-d87585.html' },
    { title: 'Tỷ giá trung tâm phá kỷ lục sau nửa năm lặng sóng', publisher: 'VnFinance (28/07/2026)', url: 'https://vietnamfinance.vn/ty-gia-trung-tam-pha-ky-luc-sau-nua-nam-lang-song-d148217.html' },
    { title: 'U.S. Dollar Index', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/US_Dollar_Index' },
    { title: 'Viet Nam Overview', publisher: 'World Bank Group', url: 'https://www.worldbank.org/en/country/vietnam/overview' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 12,
}
