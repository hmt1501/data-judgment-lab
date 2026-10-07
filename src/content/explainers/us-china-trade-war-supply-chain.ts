import type { Explainer } from '../../../shared/explainer'

export const usChinaTradeWarSupplyChain: Explainer = {
  id: 'us-china-trade-war-supply-chain',
  slug: 'us-china-trade-war-supply-chain',
  question: 'Căng thẳng thương mại Mỹ–Trung và "Trung Quốc +1" mang lại gì cho Việt Nam?',
  title: 'Căng thẳng Mỹ–Trung và dịch chuyển chuỗi cung ứng: Việt Nam được gì, rủi ro gì?',
  topic: 'geopolitics-trade',
  tldr: 'Từ năm 2018, thuế quan và biện pháp hạn chế giữa Mỹ và Trung Quốc khiến nhiều doanh nghiệp đa dạng hóa sản xuất ra ngoài Trung Quốc theo chiến lược **"Trung Quốc +1"**, và Việt Nam là một điểm đến lớn. Cái được là FDI, việc làm và xuất khẩu; cái cần cân nhắc là **giá trị gia tăng trong nước còn thấp**, phụ thuộc nguyên liệu từ Trung Quốc, và rủi ro bị Mỹ soi xét về xuất xứ.',
  keyPoints: [
    '"Trung Quốc +1" thường **không phải rời bỏ** Trung Quốc mà là thêm một địa điểm sản xuất để giảm rủi ro thuế quan, địa chính trị và gián đoạn.',
    'Việt Nam hấp dẫn nhờ vị trí sát Trung Quốc (dễ nhập linh kiện), chi phí lao động cạnh tranh, mạng lưới FTA rộng và kinh nghiệm thu hút FDI điện tử.',
    'Xuất khẩu tăng không đồng nghĩa giá trị gia tăng tăng tương ứng: nhiều khâu ở Việt Nam là lắp ráp, trong khi linh kiện giá trị cao vẫn nhập khẩu.',
    'Dòng hàng "Trung Quốc → Việt Nam → Mỹ" tăng nhanh khiến Mỹ chú ý tới trung chuyển và quy tắc xuất xứ; lợi thế có thể bị thu hẹp nếu Mỹ áp thuế lên cả hàng có hàm lượng Trung Quốc cao.',
    'Cạnh tranh không chỉ với Trung Quốc: Ấn Độ, Mexico, Indonesia, Thái Lan, Malaysia cũng đang tranh giành dòng vốn dịch chuyển.',
  ],
  causalChain: [
    { from: 'Mỹ và Trung Quốc áp thuế, kiểm soát xuất khẩu lẫn nhau', to: 'Chi phí và rủi ro sản xuất tại Trung Quốc để bán sang Mỹ tăng', mechanism: 'Thuế quan làm hàng Trung Quốc đắt hơn tại Mỹ; kiểm soát công nghệ và bất định chính sách làm tăng rủi ro tập trung một nơi.' },
    { from: 'Chi phí và rủi ro sản xuất tại Trung Quốc để bán sang Mỹ tăng', to: 'Doanh nghiệp đa dạng hóa sang nước thứ ba ("Trung Quốc +1")', mechanism: 'Tập đoàn đa quốc gia và cả doanh nghiệp Trung Quốc mở thêm nhà máy ở ASEAN, Ấn Độ, Mexico để phục vụ thị trường Mỹ.' },
    { from: 'Doanh nghiệp đa dạng hóa sang nước thứ ba ("Trung Quốc +1")', to: 'FDI và xuất khẩu của Việt Nam tăng', mechanism: 'Nhà máy lắp ráp điện tử, dệt may, đồ gỗ, pin mặt trời… đặt tại Việt Nam, kéo theo nhu cầu đất khu công nghiệp, lao động và logistics.' },
    { from: 'FDI và xuất khẩu của Việt Nam tăng', to: 'Nhập khẩu linh kiện, nguyên liệu từ Trung Quốc vào Việt Nam cũng tăng', mechanism: 'Chuỗi cung ứng thượng nguồn (vải, linh kiện điện tử, máy móc) vẫn ở Trung Quốc; Việt Nam làm khâu cuối.' },
    { from: 'Nhập khẩu linh kiện, nguyên liệu từ Trung Quốc vào Việt Nam cũng tăng', to: 'Rủi ro bị xem là trung chuyển, lợi ích lan tỏa hạn chế', mechanism: 'Hàm lượng giá trị trong nước thấp làm khó đáp ứng quy tắc xuất xứ, và doanh nghiệp nội địa ít tham gia vào chuỗi.' },
  ],
  vietnamImpact: [
    { group: 'Thu hút FDI và khu công nghiệp', effect: 'Nhu cầu thuê đất, nhà xưởng tăng ở các vùng gần cảng và biên giới phía Bắc; tuy nhiên dễ chững lại khi chính sách thuế của Mỹ bất định.', direction: 'up' },
    { group: 'Người lao động và thu nhập', effect: 'Thêm việc làm trong chế biến chế tạo; áp lực tăng lương ở vùng tập trung FDI, đôi khi thiếu lao động có kỹ năng.', direction: 'up' },
    { group: 'Doanh nghiệp nội địa (công nghiệp hỗ trợ)', effect: 'Cơ hội trở thành nhà cung cấp, nhưng phải đạt chuẩn chất lượng, giá và quy mô; nhiều tập đoàn vẫn đưa nhà cung cấp quen thuộc từ Trung Quốc sang.', direction: 'mixed' },
    { group: 'Cán cân thương mại', effect: 'Thặng dư lớn với Mỹ đi kèm thâm hụt lớn với Trung Quốc; cấu trúc này dễ thu hút sự chú ý của Mỹ về mất cân bằng thương mại.', direction: 'mixed' },
    { group: 'Rủi ro chính sách thương mại', effect: 'Việt Nam có thể chịu thuế, điều tra phòng vệ thương mại hoặc chống lẩn tránh thuế đối với các mặt hàng có hàm lượng Trung Quốc cao.', direction: 'down' },
    { group: 'Hạ tầng điện, logistics', effect: 'Nhu cầu điện, cảng, đường bộ tăng nhanh; thiếu hụt hạ tầng có thể làm giảm sức hút so với nước cạnh tranh.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Vốn FDI đăng ký mới và giải ngân, theo quốc gia đầu tư', why: 'Giải ngân phản ánh dịch chuyển thật; tỷ trọng vốn từ Trung Quốc, Hồng Kông, Singapore cho thấy mức độ "Trung Quốc +1".', where: 'Cục Đầu tư nước ngoài (Bộ Tài chính); Cục Thống kê' },
    { name: 'Nhập khẩu từ Trung Quốc và xuất khẩu sang Mỹ theo nhóm hàng', why: 'Hai dòng tăng song song ở cùng nhóm hàng là dấu hiệu Việt Nam làm khâu lắp ráp cuối.', where: 'Cục Hải quan (customs.gov.vn)' },
    { name: 'Thuế quan và biện pháp Mỹ áp với Trung Quốc và với nước thứ ba', why: 'Khoảng cách thuế giữa Trung Quốc và Việt Nam là động lực chính của dịch chuyển.', where: 'Website USTR; Federal Register' },
    { name: 'Các vụ điều tra phòng vệ thương mại, chống lẩn tránh với hàng Việt Nam', why: 'Tín hiệu sớm rủi ro bị áp thuế theo ngành.', where: 'Cục Phòng vệ thương mại (Bộ Công Thương); US Department of Commerce' },
    { name: 'Tỷ lệ nội địa hóa / giá trị gia tăng trong xuất khẩu', why: 'Đo phần lợi ích thực sự giữ lại trong nền kinh tế.', where: 'Cơ sở dữ liệu TiVA của OECD–WTO; nghiên cứu của World Bank' },
  ],
  counterpoints: [
    'Nếu Mỹ và Trung Quốc đạt thỏa thuận giảm thuế đáng kể, động lực dịch chuyển có thể yếu đi; dù vậy nhiều doanh nghiệp vẫn giữ chiến lược đa dạng hóa vì lý do rủi ro dài hạn.',
    'Dòng vốn từ Trung Quốc vào Việt Nam vừa là cơ hội (chuyển giao công nghệ, việc làm) vừa có thể làm tăng cạnh tranh với doanh nghiệp nội địa; đánh giá phụ thuộc ngành và chính sách.',
    'Giá trị gia tăng thấp không phải bất biến: các nền kinh tế như Hàn Quốc, Trung Quốc cũng bắt đầu từ lắp ráp rồi nâng dần; điều kiện là kỹ năng lao động, hạ tầng và liên kết doanh nghiệp.',
  ],
  glossary: [
    { term: 'Trung Quốc +1 (China plus one)', definition: 'Chiến lược giữ sản xuất ở Trung Quốc nhưng thêm ít nhất một địa điểm khác để phân tán rủi ro.' },
    { term: 'Chuỗi giá trị toàn cầu (GVC)', definition: 'Quá trình sản xuất được chia thành nhiều khâu đặt ở nhiều nước khác nhau.' },
    { term: 'Giá trị gia tăng trong nước', definition: 'Phần giá trị xuất khẩu do lao động, vốn và đầu vào trong nước tạo ra, sau khi trừ đầu vào nhập khẩu.' },
    { term: 'Kiểm soát xuất khẩu', definition: 'Hạn chế bán công nghệ, thiết bị nhạy cảm (ví dụ chip tiên tiến) cho một số nước hoặc doanh nghiệp.' },
    { term: 'Chống lẩn tránh thuế', definition: 'Biện pháp áp thuế với hàng đi vòng qua nước thứ ba để tránh thuế đang áp với nước gốc.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'us-china-trade-war-supply-chain-q',
    question: 'Xuất khẩu điện tử của Việt Nam sang Mỹ tăng mạnh, đồng thời nhập khẩu linh kiện điện tử từ Trung Quốc cũng tăng mạnh. Cách đọc nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Việt Nam đã làm chủ chuỗi cung ứng điện tử và thay thế được Trung Quốc.', explain: 'Nhập khẩu linh kiện tăng song song cho thấy nhiều khâu thượng nguồn vẫn ở Trung Quốc; kim ngạch xuất khẩu lớn chưa nói lên giá trị gia tăng trong nước.' },
      { id: 'b', text: 'Đây chắc chắn là hàng Trung Quốc đội lốt xuất xứ Việt Nam.', explain: 'Lắp ráp thật tại Việt Nam với linh kiện nhập khẩu là hoạt động hợp pháp nếu đáp ứng quy tắc xuất xứ; cần dữ liệu chi tiết mới kết luận được trung chuyển.' },
      { id: 'c', text: 'Việt Nam đang tham gia khâu lắp ráp cuối của chuỗi; cần xem giá trị gia tăng trong nước và rủi ro quy tắc xuất xứ.', correct: true, explain: 'Đúng. Mô thức này phù hợp với "Trung Quốc +1": có lợi về việc làm và FDI, nhưng lợi ích giữ lại và khả năng chống chịu chính sách phụ thuộc tỷ lệ nội địa hóa.' },
    ],
  },
  sources: [
    { title: "The People's Republic of China — U.S.-China Trade Relations", publisher: 'USTR', url: 'https://ustr.gov/countries-regions/china-mongolia-taiwan/peoples-republic-china' },
    { title: 'Global value chains', publisher: 'WTO', url: 'https://www.wto.org/english/res_e/reser_e/gvc_e.htm' },
    { title: 'Vietnam Overview', publisher: 'World Bank', url: 'https://www.worldbank.org/en/country/vietnam/overview' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
