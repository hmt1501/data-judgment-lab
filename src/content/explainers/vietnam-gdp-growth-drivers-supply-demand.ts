import type { Explainer } from '../../../shared/explainer'

export const vietnamGdpGrowthDriversSupplyDemand: Explainer = {
  id: 'vietnam-gdp-growth-drivers-supply-demand',
  slug: 'vietnam-gdp-growth-drivers-supply-demand',
  question: 'Tăng trưởng GDP Việt Nam đến từ đâu: các khu vực và các cấu phần cầu?',
  title: 'Công nghiệp-xây dựng dẫn dắt phía cung; xuất khẩu và đầu tư dẫn dắt phía cầu',
  topic: 'vietnam-economy',
  tldr: 'GDP có thể đọc từ **phía cung** (giá trị tăng thêm của nông-lâm-thủy sản, công nghiệp-xây dựng, dịch vụ) và **phía cầu** (tiêu dùng, đầu tư, xuất khẩu ròng). Theo Cục Thống kê (công bố 3/10/2026), GDP 9 tháng 2026 tăng 9,01% so với cùng kỳ, trong đó công nghiệp và xây dựng đóng góp gần một nửa mức tăng; về cầu, đầu tư và xuất khẩu tăng nhanh hơn tiêu dùng. Muốn đánh giá chất lượng tăng trưởng cần nhìn cả hai phía và cả năng suất.',
  keyPoints: [
    'Theo Cục Thống kê qua Tạp chí Thị trường Tài chính Tiền tệ (3/10/2026): GDP quý III/2026 tăng 9,95%, 9 tháng tăng 9,01% (quý I 8,15%, quý II 8,81%) so với cùng kỳ.',
    'Phía cung (9 tháng): công nghiệp và xây dựng tăng 11,21%, đóng góp 49,62% vào mức tăng giá trị tăng thêm; dịch vụ tăng 8,69%, đóng góp 45,03%; nông, lâm nghiệp và thủy sản tăng 4,02%, đóng góp 5,35%.',
    'Phía cầu (9 tháng): tiêu dùng cuối cùng tăng 8,51%, tích lũy tài sản (đầu tư) tăng 17,88%, xuất khẩu hàng hóa và dịch vụ tăng 21,29%, nhập khẩu tăng 27,19% so với cùng kỳ.',
    'Nhập khẩu tăng nhanh hơn xuất khẩu gợi ý (đây là suy luận, không phải số liệu công bố) tăng trưởng dựa nhiều vào nguyên liệu, máy móc nhập khẩu; phần giá trị gia tăng giữ lại trong nước nhỏ hơn con số xuất khẩu danh nghĩa gợi ra.',
    'Tăng trưởng nhanh một năm chưa chắc bền: cần nhìn nền so sánh, năng suất lao động, hiệu quả đầu tư và độ phụ thuộc vào khu vực FDI, xuất khẩu.',
  ],
  causalChain: [
    { from: 'Đơn hàng xuất khẩu và vốn FDI tăng', to: 'Sản xuất công nghiệp, xây dựng khu công nghiệp mở rộng', mechanism: 'Doanh nghiệp FDI đặt nhà máy, mua máy móc, thuê đất và lao động, kéo theo xây dựng và dịch vụ hỗ trợ.' },
    { from: 'Sản xuất và đầu tư tăng', to: 'Việc làm, thu nhập và tiêu dùng tăng', mechanism: 'Lao động chuyển từ khu vực nông nghiệp sang công nghiệp-dịch vụ có năng suất cao hơn, thu nhập tăng làm cầu nội địa tăng.' },
    { from: 'Tăng trưởng nhanh dựa nhiều vào nhập khẩu đầu vào', to: 'Nhập khẩu tăng nhanh, cán cân thương mại chịu áp lực', mechanism: 'Nguyên liệu, linh kiện nhập về để gia công; nếu nhập khẩu tăng nhanh hơn xuất khẩu, thặng dư thu hẹp hoặc chuyển sang nhập siêu.' },
    { from: 'Đầu tư tăng mạnh', to: 'Áp lực lên lãi suất, tín dụng và lạm phát', mechanism: 'Nhu cầu vốn, vật liệu và nhân công tăng; nếu năng lực sản xuất không theo kịp, giá và lãi suất chịu áp lực tăng.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp công nghiệp, xây dựng', effect: 'Hưởng lợi trực tiếp từ vai trò dẫn dắt tăng trưởng, nhưng nhạy với chi phí vốn và biến động đơn hàng xuất khẩu.', direction: 'up' },
    { group: 'Doanh nghiệp dịch vụ, bán lẻ', effect: 'Đóng góp gần 45% mức tăng; hưởng lợi khi thu nhập và du lịch tăng, tuy tốc độ tăng chậm hơn công nghiệp.', direction: 'up' },
    { group: 'Nông dân, lao động nông thôn', effect: 'Khu vực nông-lâm-thủy sản chỉ tăng khoảng 4%, nên thu nhập cải thiện chủ yếu nhờ chuyển dịch sang việc làm phi nông nghiệp.', direction: 'mixed' },
    { group: 'Người đi vay, nhà đầu tư', effect: 'Tăng trưởng cao hỗ trợ lợi nhuận doanh nghiệp, nhưng đi kèm nhu cầu vốn lớn và kỳ vọng lãi suất, lạm phát cao hơn.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'GDP theo khu vực và đóng góp vào tăng trưởng', why: 'Cho biết động lực chính và mức độ đa dạng của tăng trưởng.', where: 'Thông cáo báo chí tình hình kinh tế - xã hội hằng quý của Cục Thống kê (nso.gov.vn)' },
    { name: 'GDP theo sử dụng (tiêu dùng, tích lũy, xuất nhập khẩu)', why: 'Đánh giá phần cầu nội địa so với cầu bên ngoài.', where: 'Cục Thống kê' },
    { name: 'Năng suất lao động và đóng góp của TFP', why: 'Phân biệt tăng trưởng nhờ cải thiện hiệu quả với tăng trưởng nhờ thêm vốn và lao động.', where: 'Cục Thống kê; Ngân hàng Thế giới (worldbank.org/vietnam)' },
    { name: 'Giải ngân vốn FDI và đầu tư công', why: 'Động lực đầu tư trong ngắn hạn.', where: 'Bộ Tài chính, Cục Thống kê' },
  ],
  counterpoints: [
    'Số liệu GDP quý và 9 tháng là số ước tính ban đầu, có thể được điều chỉnh khi có dữ liệu đầy đủ; cũng cần chú ý nền so sánh thấp hay cao của cùng kỳ năm trước.',
    'Đóng góp theo khu vực dựa trên giá trị tăng thêm, không cho biết ai hưởng lợi: một phần lợi nhuận của khu vực FDI chuyển ra nước ngoài, nên tăng trưởng GDP không đồng nghĩa với thu nhập quốc gia tăng tương ứng.',
    'Tăng trưởng dựa nhiều vào vốn và xuất khẩu phụ thuộc môi trường bên ngoài (thuế quan, cầu của Mỹ-EU); nếu cầu bên ngoài yếu đi, động lực này có thể suy giảm nhanh.',
  ],
  glossary: [
    { term: 'GDP', definition: 'Tổng giá trị hàng hóa, dịch vụ cuối cùng được sản xuất trong lãnh thổ một nước trong một kỳ.' },
    { term: 'Giá trị tăng thêm', definition: 'Giá trị sản lượng trừ chi phí đầu vào trung gian của một ngành.' },
    { term: 'Tích lũy tài sản', definition: 'Thành phần GDP phía cầu gần với đầu tư (tài sản cố định, thay đổi hàng tồn kho).' },
    { term: 'TFP', definition: 'Năng suất các nhân tố tổng hợp, phần tăng trưởng không giải thích bằng vốn và lao động.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-gdp-growth-drivers-supply-demand-q',
    question: 'Xuất khẩu tăng 21% nhưng nhập khẩu tăng 27% trong cùng kỳ. Điều nào hợp lý nhất khi đánh giá đóng góp của xuất khẩu vào GDP?',
    options: [
      { id: 'a', text: 'Xuất khẩu đóng góp 21 điểm phần trăm vào tăng trưởng GDP.', explain: 'Sai. GDP tính theo xuất khẩu ròng (xuất trừ nhập) và theo tỷ trọng; tốc độ tăng của một cấu phần không bằng đóng góp của nó.' },
      { id: 'b', text: 'Vì nhập khẩu tăng nhanh hơn, phần xuất khẩu ròng có thể đóng góp ít hơn nhiều so với con số xuất khẩu gợi ra.', correct: true, explain: 'Đúng. Phần lớn xuất khẩu dựa trên đầu vào nhập khẩu; chỉ phần chênh lệch (xuất trừ nhập) cộng vào GDP phía cầu.' },
      { id: 'c', text: 'Nhập khẩu tăng làm GDP giảm vì nhập khẩu là chi tiêu ra nước ngoài.', explain: 'Nhập khẩu bị trừ khỏi GDP, nhưng nó cũng nằm trong chi tiêu nội địa; không thể suy ra GDP giảm nếu chỉ nhìn một cấu phần.' },
    ],
  },
  sources: [
    { title: 'GDP quý III/2026 tăng đột phá 9,95%, đưa tăng trưởng 9 tháng đạt 9,01%', publisher: 'Tạp chí Thị trường Tài chính Tiền tệ (số liệu Cục Thống kê, 3/10/2026)', url: 'https://thitruongtaichinhtiente.vn/gdp-quy-iii-2026-tang-but-pha-9-95-dua-tang-truong-9-thang-dat-9-01-86006.html' },
    { title: 'Xuất siêu trở lại, tín hiệu đảo chiều các tháng cuối năm (nhập siêu 9 tháng 19,42 tỷ USD)', publisher: 'Cục Thống kê', url: 'https://www.nso.gov.vn/?p=62684' },
    { title: 'Viet Nam: Overview', publisher: 'World Bank', url: 'https://www.worldbank.org/en/country/vietnam/overview' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 44,
}
