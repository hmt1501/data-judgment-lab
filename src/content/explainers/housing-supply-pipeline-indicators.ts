import type { Explainer } from '../../../shared/explainer'

export const housingSupplyPipelineIndicators: Explainer = {
  id: 'housing-supply-pipeline-indicators',
  slug: 'housing-supply-pipeline-indicators',
  question: 'Chỉ báo nguồn cung nhà ở (cấp phép, khởi công, hoàn thành) đọc thế nào?',
  title: 'Theo dõi đường ống nguồn cung: cấp phép dẫn trước khởi công, khởi công dẫn trước hoàn thành',
  topic: 'real-estate',
  tldr: 'Nguồn cung nhà ở đi qua nhiều giai đoạn: **cấp phép → khởi công → đang xây → hoàn thành**. Mỗi giai đoạn có độ trễ và tỷ lệ "rơi rụng". Ở Mỹ, Cục Điều tra Dân số và HUD tính một căn "khởi công" khi bắt đầu đào móng; với chung cư, mọi căn tính là khởi công cùng lúc. Đọc đúng chỉ báo cần biết **định nghĩa**, **độ trễ** và **tính mùa vụ**.',
  keyPoints: [
    'Theo FRED/Census-HUD (HOUST): "một căn khởi công khi bắt đầu đào móng"; với nhà nhiều căn, **tất cả các căn** được tính là khởi công khi đào móng bắt đầu. Dữ liệu là nghìn căn theo tỷ lệ quy năm đã điều chỉnh mùa vụ.',
    'Quy năm hóa đã điều chỉnh mùa vụ (SAAR) nghĩa là lấy mức tháng nhân 12 để so với số năm; nó mô tả nhịp của tháng đó chứ không phải dự báo. Nên đọc xu hướng vài tháng, không phải một tháng đơn lẻ.',
    'Cấp phép là chỉ báo **dẫn dắt** của khởi công (không phải mọi giấy phép thành khởi công); hoàn thành là chỉ báo **trễ**, phản ánh nguồn cung thực sự đến tay thị trường, sau thời gian xây dựng.',
    'Cần tách **nhà ở xã hội, nhà ở thương mại, nhà ở riêng lẻ và chung cư**, vì chu kỳ thi công và nhóm khách hàng khác nhau; số tổng có thể che đi sự thiếu hụt phân khúc giá hợp lý.',
    'Ở Việt Nam, bài chưa tìm thấy chuỗi hằng tháng cùng định nghĩa với "housing starts" của Mỹ; thường phải ghép từ Bộ Xây dựng, Cục Thống kê (có chỉ tiêu diện tích sàn nhà ở hoàn thành) và các đơn vị tư vấn (số dự án chào bán, số căn mở bán, hấp thụ). Cần ghi rõ nguồn, phạm vi và định nghĩa. Theo VOV (29/12/2024), nhiều dự án bị đình trệ do vướng mắc pháp lý, làm nguồn cung hạn chế.',
  ],
  causalChain: [
    { from: 'Giá và lợi nhuận kỳ vọng của chủ đầu tư, điều kiện pháp lý, vốn vay', to: 'Quyết định xin phép và khởi công dự án', mechanism: 'Chủ đầu tư chỉ khởi công khi lợi nhuận kỳ vọng vượt chi phí đất, xây dựng, tài chính; vướng mắc pháp lý làm dự án dừng ở khâu cấp phép.' },
    { from: 'Cấp phép tăng', to: 'Khởi công tăng sau vài tháng', mechanism: 'Giấy phép là điều kiện cần; việc khởi công phụ thuộc vốn, hợp đồng thi công và kỳ vọng bán.' },
    { from: 'Khởi công tăng', to: 'Hoàn thành tăng sau thời gian xây dựng', mechanism: 'Nhà riêng lẻ hoàn thành nhanh hơn chung cư nhiều tầng; khoảng trễ này làm nguồn cung đến thị trường lệch pha với giá.' },
    { from: 'Hoàn thành vượt nhu cầu (hoặc thiếu hụt kéo dài)', to: 'Áp lực giá và tỷ lệ trống thay đổi', mechanism: 'Nguồn cung mới vượt cầu làm giá/giá thuê yếu, ngược lại thiếu cung kéo dài đẩy giá lên; nhưng nhu cầu thực và khả năng chi trả cũng quyết định.' },
  ],
  vietnamImpact: [
    { group: 'Người mua nhà', effect: 'Số tổng nguồn cung không cho biết phân khúc giá và khả năng chi trả; cần tách theo phân khúc (nhà ở xã hội, thương mại...) trước khi kết luận thiếu hay thừa.', direction: 'mixed' },
    { group: 'Chủ đầu tư và nhà thầu', effect: 'Theo dõi cấp phép và mở bán để đánh giá cạnh tranh; thiếu vốn và vướng pháp lý làm đường ống chậm.', direction: 'mixed' },
    { group: 'Nhà đầu tư BĐS', effect: 'Nguồn cung sắp hoàn thành tại khu vực quan tâm ảnh hưởng giá thuê và giá bán thứ cấp.', direction: 'mixed' },
    { group: 'Chính quyền địa phương', effect: 'Tốc độ cấp phép và giải phóng mặt bằng quyết định nguồn cung tương lai.', direction: 'up' },
  ],
  indicators: [
    { name: 'Số dự án và số căn được cấp phép/đủ điều kiện mở bán', why: 'Chỉ báo dẫn dắt của nguồn cung.', where: 'Bộ Xây dựng; Sở Xây dựng các địa phương; báo cáo thị trường của các đơn vị tư vấn BĐS' },
    { name: 'Số căn đang xây và hoàn thành', why: 'Nguồn cung sắp đến và đã đến tay thị trường.', where: 'Cục Thống kê (diện tích sàn nhà ở hoàn thành); báo cáo của chủ đầu tư' },
    { name: 'Tỷ lệ hấp thụ (số căn bán / số căn mở bán)', why: 'Cho biết nguồn cung có khớp với nhu cầu không.', where: 'Báo cáo thị trường của các đơn vị tư vấn BĐS' },
  ],
  counterpoints: [
    'Định nghĩa khác nhau giữa các nước và cơ quan; so sánh số "khởi công" quốc tế với số "mở bán" trong nước là sai bản chất.',
    'Một phần cấp phép không bao giờ thành khởi công; số cấp phép dễ thổi phồng nguồn cung tương lai.',
    'Nguồn cung nhìn từ phía chủ đầu tư bỏ qua nhà ở tự xây của hộ gia đình, vốn là phần lớn nguồn cung ở nhiều nước.',
  ],
  glossary: [
    { term: 'Giấy phép xây dựng', definition: 'Văn bản cho phép xây dựng công trình; chỉ báo dẫn dắt của khởi công.' },
    { term: 'Khởi công (housing start)', definition: 'Thời điểm bắt đầu đào móng; mọi căn trong tòa nhà nhiều căn được tính cùng lúc.' },
    { term: 'SAAR', definition: 'Tỷ lệ quy năm đã điều chỉnh mùa vụ: số tháng đã điều chỉnh mùa vụ nhân 12.' },
    { term: 'Hấp thụ', definition: 'Tỷ lệ nguồn cung mới được bán hoặc cho thuê trong một kỳ.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'housing-supply-pipeline-indicators-q',
    question: 'Số giấy phép xây dựng tăng mạnh ba tháng liền. Điều nào nên làm trước khi kết luận nguồn cung hoàn thành sẽ tăng ngay?',
    options: [
      { id: 'a', text: 'Kiểm tra tỷ lệ cấp phép thành khởi công và thời gian xây dựng; đối chiếu với khởi công và đang xây.', correct: true, explain: 'Đúng. Cấp phép là chỉ báo dẫn dắt, không bảo đảm khởi công và hoàn thành đúng thời điểm.' },
      { id: 'b', text: 'Coi mỗi giấy phép là một căn nhà đã xây xong.', explain: 'Cấp phép là bước đầu của đường ống.' },
      { id: 'c', text: 'Bỏ qua vì số cấp phép luôn sai.', explain: 'Đây là chỉ báo dẫn dắt hữu ích khi đọc kèm các giai đoạn sau.' },
    ],
  },
  sources: [
    { title: 'New Privately-Owned Housing Units Started: Total Units (HOUST)', publisher: 'FRED, Federal Reserve Bank of St. Louis (nguồn: U.S. Census Bureau và HUD)', url: 'https://fred.stlouisfed.org/series/houst' },
    { title: 'Housing starts', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Housing_starts' },
    { title: 'Dự án bất động sản vướng mắc pháp lý, nguồn cung thiếu hụt', publisher: 'VOV (bài 29/12/2024)', url: 'https://vov.vn/kinh-te/bat-dong-san/du-an-bat-dong-san-vuong-mac-phap-ly-nguon-cung-thieu-hut-post1145220.vov' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 97,
}
