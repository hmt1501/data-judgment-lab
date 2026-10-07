import type { Explainer } from '../explainer'

export const howToReadGdp: Explainer = {
  id: 'how-to-read-gdp',
  slug: 'how-to-read-gdp',
  question: 'Đọc con số tăng trưởng GDP thế nào cho đúng?',
  title: 'Đọc tăng trưởng GDP: thực hay danh nghĩa, so với ai, ai đóng góp',
  topic: 'macro',
  tldr: 'GDP đo giá trị hàng hóa, dịch vụ cuối cùng một nền kinh tế tạo ra trong một kỳ. Con số tăng trưởng mà Cục Thống kê công bố là **GDP thực** (tính theo giá so sánh, đã loại trừ biến động giá) và thường **so với cùng kỳ năm trước**. Muốn hiểu tăng trưởng đến từ đâu, hãy nhìn **đóng góp theo khu vực** (nông nghiệp, công nghiệp – xây dựng, dịch vụ) và **theo cấu phần chi tiêu** (tiêu dùng, tích lũy tài sản, xuất khẩu ròng). GDP tăng nhanh chưa chắc đời sống mọi người cải thiện tương ứng.',
  keyPoints: [
    '**GDP thực** loại bỏ yếu tố giá để đo sản lượng; **GDP danh nghĩa** tính theo giá hiện hành, dùng cho các tỷ lệ như nợ/GDP, thu ngân sách/GDP. Chênh lệch giữa hai con số phản ánh mức tăng giá chung (chỉ số giảm phát GDP).',
    'Việt Nam công bố GDP theo quý, so với **cùng kỳ năm trước** và **lũy kế từ đầu năm**; ví dụ, 6 tháng đầu năm 2026 GDP tăng 8,18% so với cùng kỳ, quý II tăng 8,39%.',
    '**Phía sản xuất**: tăng trưởng = tổng đóng góp của nông, lâm, thủy sản; công nghiệp – xây dựng; dịch vụ; và thuế sản phẩm trừ trợ cấp. Một ngành tăng nhanh nhưng tỷ trọng nhỏ có thể đóng góp ít.',
    '**Phía chi tiêu**: GDP = tiêu dùng cuối cùng + tích lũy tài sản + (xuất khẩu − nhập khẩu). Xuất khẩu tăng mạnh chưa chắc đóng góp lớn nếu nhập khẩu tăng còn nhanh hơn.',
    'GDP đo **sản xuất trên lãnh thổ**, không phải thu nhập của người dân: một phần giá trị thuộc về nhà đầu tư nước ngoài, và GDP không phản ánh phân phối thu nhập, môi trường hay chất lượng sống.',
  ],
  causalChain: [
    { from: 'Doanh nghiệp, hộ gia đình, nhà nước sản xuất và chi tiêu', to: 'Cục Thống kê tổng hợp giá trị tăng thêm theo ngành', mechanism: 'Số liệu từ báo cáo doanh nghiệp, điều tra, dữ liệu hành chính (thuế, hải quan, ngân sách) được tổng hợp theo ngành kinh tế.' },
    { from: 'Cục Thống kê tổng hợp giá trị tăng thêm theo ngành', to: 'GDP danh nghĩa và GDP thực', mechanism: 'Giá trị theo giá hiện hành được giảm phát bằng chỉ số giá phù hợp để ra giá trị theo giá so sánh; so với cùng kỳ ra tốc độ tăng trưởng thực.' },
    { from: 'GDP danh nghĩa và GDP thực', to: 'Phân rã đóng góp theo khu vực và cấu phần chi tiêu', mechanism: 'Đóng góp của mỗi khu vực ≈ tốc độ tăng của khu vực × tỷ trọng của nó; nhờ đó biết tăng trưởng do công nghiệp chế biến, dịch vụ hay đầu tư dẫn dắt.' },
    { from: 'Phân rã đóng góp theo khu vực và cấu phần chi tiêu', to: 'Đánh giá chất lượng và độ bền của tăng trưởng', mechanism: 'Tăng trưởng dựa vào tiêu dùng và năng suất thường bền hơn tăng trưởng chủ yếu nhờ tín dụng, đầu tư công hay một vài doanh nghiệp xuất khẩu lớn.' },
  ],
  vietnamImpact: [
    { group: 'Người lao động', effect: 'Tăng trưởng cao thường đi kèm nhiều việc làm hơn, nhưng thu nhập thực chỉ cải thiện nếu lương tăng nhanh hơn lạm phát.', direction: 'up' },
    { group: 'Doanh nghiệp trong nước', effect: 'Tăng trưởng do khu vực FDI và xuất khẩu dẫn dắt có thể không lan tỏa đều tới doanh nghiệp nhỏ phục vụ thị trường nội địa.', direction: 'mixed' },
    { group: 'Ngân sách và nợ công', effect: 'GDP danh nghĩa tăng làm thu ngân sách tăng và tỷ lệ nợ/GDP giảm, tạo thêm dư địa tài khóa.', direction: 'up' },
    { group: 'Chính sách tiền tệ', effect: 'Tăng trưởng thấp hơn mục tiêu tạo áp lực nới lỏng; tăng trưởng nóng cùng lạm phát tăng khiến NHNN thận trọng hơn.', direction: 'mixed' },
    { group: 'Nhà đầu tư chứng khoán', effect: 'Kỳ vọng tăng trưởng hỗ trợ lợi nhuận doanh nghiệp, nhưng thị trường phản ứng với **bất ngờ** so với dự báo hơn là bản thân con số.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tăng trưởng GDP thực theo quý và lũy kế (so với cùng kỳ)', why: 'Thước đo chính về tốc độ tăng sản lượng, so với mục tiêu Quốc hội đặt ra.', where: 'Họp báo và thông cáo quý của Cục Thống kê (nso.gov.vn)' },
    { name: 'Tốc độ tăng và đóng góp của từng khu vực, nhất là công nghiệp chế biến, chế tạo', why: 'Cho biết động lực tăng trưởng nằm ở đâu.', where: 'Thông cáo GDP quý của Cục Thống kê' },
    { name: 'Tiêu dùng cuối cùng, tích lũy tài sản, xuất – nhập khẩu hàng hóa và dịch vụ', why: 'Phía cầu: tăng trưởng đến từ người dân chi tiêu, đầu tư hay thương mại.', where: 'Cục Thống kê (GDP theo phương pháp sử dụng)' },
    { name: 'Chỉ số sản xuất công nghiệp (IIP), PMI, tổng mức bán lẻ', why: 'Chỉ báo hằng tháng giúp đoán trước con số GDP quý.', where: 'Cục Thống kê; S&P Global PMI Việt Nam' },
    { name: 'GDP bình quân đầu người và thu nhập bình quân của lao động', why: 'Gần với đời sống hơn con số tăng trưởng tổng.', where: 'Cục Thống kê; World Bank – World Development Indicators' },
  ],
  counterpoints: [
    'So với cùng kỳ chịu **hiệu ứng nền**: nếu cùng kỳ năm trước rất thấp (ví dụ do dịch bệnh, thiên tai), tăng trưởng năm nay trông cao dù mức sản xuất chỉ vừa hồi phục.',
    'Số liệu GDP quý là sơ bộ và có thể được điều chỉnh ở các lần công bố sau; nên tránh kết luận mạnh dựa trên chênh lệch vài phần mười điểm phần trăm.',
    'GDP tăng không đồng nghĩa với đời sống tăng tương ứng: phần giá trị thuộc về nhà đầu tư nước ngoài, phân phối thu nhập và chi phí môi trường không hiện ra trong con số tổng.',
  ],
  glossary: [
    { term: 'GDP thực', definition: 'GDP tính theo giá so sánh, đã loại trừ biến động giá; dùng để đo tăng trưởng.' },
    { term: 'GDP danh nghĩa', definition: 'GDP tính theo giá hiện hành; dùng làm mẫu số cho các tỷ lệ như nợ/GDP.' },
    { term: 'Chỉ số giảm phát GDP', definition: 'Tỷ lệ giữa GDP danh nghĩa và GDP thực, đo mức giá chung của toàn bộ sản phẩm trong nền kinh tế.' },
    { term: 'Đóng góp vào tăng trưởng', definition: 'Phần điểm phần trăm tăng trưởng do một khu vực hay cấu phần tạo ra, phụ thuộc cả tốc độ tăng lẫn tỷ trọng.' },
    { term: 'Hiệu ứng nền', definition: 'Ảnh hưởng của mức nền thấp hoặc cao ở kỳ so sánh tới tốc độ tăng trưởng.' },
    { term: 'GNI', definition: 'Tổng thu nhập quốc gia: GDP cộng thu nhập ròng từ nước ngoài; gần với thu nhập của người dân hơn GDP.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'how-to-read-gdp-q',
    question: 'Một quý, xuất khẩu hàng hóa và dịch vụ tăng 20% nhưng nhập khẩu tăng 26%. Nhận định nào đúng nhất về đóng góp của thương mại vào tăng trưởng GDP?',
    options: [
      { id: 'a', text: 'Xuất khẩu tăng 20% nên chắc chắn là động lực lớn nhất của GDP.', explain: 'GDP tính xuất khẩu ròng; nhập khẩu tăng nhanh hơn có thể làm phần đóng góp ròng của thương mại nhỏ, thậm chí âm.' },
      { id: 'b', text: 'Xuất khẩu ròng có thể đóng góp ít hoặc âm; cần xem tiêu dùng và tích lũy tài sản để biết động lực chính.', correct: true, explain: 'Đúng. Nhập khẩu tăng mạnh thường đi kèm đầu tư (máy móc) và sản xuất để xuất khẩu, nên động lực có thể đến từ tích lũy tài sản và hoạt động sản xuất trong nước.' },
      { id: 'c', text: 'Nhập khẩu tăng nhanh luôn là dấu hiệu kinh tế suy yếu.', explain: 'Nhập khẩu nguyên liệu, máy móc tăng thường phản ánh sản xuất và đầu tư đang mở rộng, không hẳn là tín hiệu xấu.' },
    ],
  },
  sources: [
    { title: 'GDP 6 tháng đầu năm 2026 tăng 8,18% so với cùng kỳ', publisher: 'Tạp chí Kinh tế Tài chính', url: 'https://tapchikinhtetaichinh.vn/gdp-6-thang-dau-nam-2026-tang-818-so-voi-cung-ky-160741.html' },
    { title: 'Họp báo công bố số liệu thống kê kinh tế – xã hội quý II và 6 tháng đầu năm 2026', publisher: 'Cục Thống kê', url: 'https://www.nso.gov.vn/?p=61711' },
    { title: 'What to know about GDP', publisher: 'U.S. Bureau of Economic Analysis', url: 'https://www.bea.gov/resources/learning-center/what-to-know-gdp' },
    { title: 'What is GDP?', publisher: 'Bank of England', url: 'https://www.bankofengland.co.uk/explainers/what-is-gdp' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
