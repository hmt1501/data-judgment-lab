import type { Explainer } from '../../../shared/explainer'

export const friendShoringVietnamSupplyChains: Explainer = {
  id: 'friend-shoring-vietnam-supply-chains',
  slug: 'friend-shoring-vietnam-supply-chains',
  question: 'Chuyển dịch chuỗi cung ứng ("friend-shoring") đặt Việt Nam ở đâu?',
  title: 'Friend-shoring: chuỗi cung ứng dịch chuyển theo độ tin cậy địa chính trị, Việt Nam hưởng lợi có điều kiện',
  topic: 'geopolitics-trade',
  tldr: '**Friend-shoring** là đưa sản xuất và nguồn cung sang các nước được coi là đối tác tin cậy về chính trị, thay vì chỉ chọn nơi rẻ nhất. Việt Nam có cơ hội nhận thêm đơn hàng và vốn FDI nhờ vị trí địa lý, mạng lưới hiệp định thương mại và quan hệ với nhiều đối tác lớn, nhưng lợi ích bị giới hạn bởi hạ tầng, nhân lực, nội địa hóa thấp và rủi ro bị cuốn vào căng thẳng giữa các cường quốc.',
  keyPoints: [
    'Động lực là **an ninh nguồn cung và rủi ro địa chính trị**, bên cạnh chi phí; doanh nghiệp "đa dạng hóa" ("China + 1") thay vì rời hẳn một nước.',
    'Việt Nam thu hút nhờ chi phí lao động cạnh tranh, môi trường chính trị được nhiều nhà đầu tư đánh giá là ổn định (nhận định chung), vị trí gần các trung tâm sản xuất châu Á và nhiều hiệp định thương mại.',
    'Phần lớn giá trị gia tăng vẫn là **lắp ráp**; nhiều linh kiện nhập từ các nền kinh tế châu Á khác, nên xuất khẩu tăng không đồng nghĩa giá trị nội địa tăng tương ứng.',
    'Chuyển dịch đòi hỏi **năng lực hấp thụ**: điện, cảng, đường, khu công nghiệp, kỹ sư, nhà cung cấp nội địa đạt chuẩn.',
    'Rủi ro: quy tắc xuất xứ chặt hơn, chống chuyển tải ("transshipment"), và việc bị coi là trung gian lách thuế có thể kéo theo biện pháp phòng vệ thương mại.',
  ],
  causalChain: [
    { from: 'Căng thẳng địa chính trị và thuế quan', to: 'Doanh nghiệp đa quốc gia đánh giá lại rủi ro chuỗi cung ứng', mechanism: 'Chi phí gián đoạn và thuế làm chọn nơi sản xuất theo độ tin cậy, không chỉ giá thành.' },
    { from: 'Đánh giá lại rủi ro', to: 'Đơn hàng và vốn FDI dịch chuyển sang các nước thay thế', mechanism: 'Doanh nghiệp mở nhà máy hoặc đặt gia công mới ở nơi có chi phí hợp lý và quan hệ chính trị ổn định.' },
    { from: 'FDI và đơn hàng tăng ở Việt Nam', to: 'Xuất khẩu, việc làm, thu ngân sách tăng', mechanism: 'Nhà máy mới tạo việc làm, nhập khẩu máy móc, kéo theo xuất khẩu tăng; nhưng giá trị nội địa phụ thuộc mức độ liên kết với nhà cung cấp trong nước.' },
    { from: 'Tăng trưởng xuất khẩu nhanh', to: 'Áp lực hạ tầng, lao động, và giám sát thương mại', mechanism: 'Thiếu điện, cảng, nhân lực kỹ thuật làm nghẽn; xuất siêu lớn với đối tác chính có thể bị điều tra, đòi quy tắc xuất xứ chặt hơn.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp FDI sản xuất, lắp ráp', effect: 'Cơ hội mở rộng nhà máy; chi phí và rủi ro phụ thuộc hạ tầng và chuỗi nhập khẩu linh kiện.', direction: 'up' },
    { group: 'Doanh nghiệp nội địa cấp 1, cấp 2', effect: 'Cơ hội vào chuỗi cung ứng nếu đạt tiêu chuẩn chất lượng, giao hàng, ESG; nếu không, chỉ thấy giá thuê đất và nhân công tăng.', direction: 'mixed' },
    { group: 'Người lao động', effect: 'Nhiều việc làm hơn, tiền lương công nghiệp có thể tăng; khó khăn nếu đơn hàng biến động.', direction: 'mixed' },
    { group: 'Nhà đầu tư bất động sản khu công nghiệp', effect: 'Nhu cầu thuê đất, nhà xưởng tăng khi FDI vào; nhạy với chu kỳ đơn hàng toàn cầu.', direction: 'up' },
    { group: 'Ngân sách và cán cân thanh toán', effect: 'FDI giải ngân và xuất khẩu hỗ trợ cán cân; ngược lại nhập khẩu linh kiện lớn giảm giá trị giữ lại.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'FDI đăng ký và giải ngân, theo ngành và quốc gia', why: 'Đo mức dịch chuyển vốn thực vào sản xuất.', where: 'Cục Đầu tư nước ngoài (Bộ Tài chính), Cục Thống kê (nso.gov.vn)' },
    { name: 'Xuất khẩu theo thị trường và nhóm hàng; tỷ lệ nội địa hóa', why: 'Cho thấy mức phụ thuộc đối tác và giá trị giữ lại ở trong nước.', where: 'Cục Thống kê, Tổng cục Hải quan; World Bank (worldbank.org) về chuỗi giá trị' },
    { name: 'Chỉ số PMI sản xuất và đơn hàng xuất khẩu mới', why: 'Cảm nhận sớm về biến động đơn hàng.', where: 'S&P Global, Cục Thống kê' },
    { name: 'Điều tra phòng vệ thương mại, quy tắc xuất xứ', why: 'Rủi ro chính sách từ các thị trường lớn.', where: 'WTO (wto.org), Bộ Công Thương' },
  ],
  counterpoints: [
    'Dịch chuyển chuỗi cung ứng diễn ra chậm và không hoàn toàn; chi phí đổi nhà cung cấp lớn, nhiều doanh nghiệp vẫn giữ năng lực ở nơi cũ.',
    'Khái niệm "bạn bè" thay đổi theo chính sách của từng nhiệm kỳ; nước hưởng lợi hôm nay có thể bị đặt trong tầm ngắm thuế quan khác sau này.',
    'Nếu năng lực nội địa không tăng, Việt Nam chỉ là điểm lắp ráp thay thế dễ bị thay thế khi chi phí tăng hoặc nơi khác cạnh tranh hơn.',
  ],
  glossary: [
    { term: 'Friend-shoring', definition: 'Chuyển sản xuất và nguồn cung sang các nước được coi là đối tác tin cậy về chính trị.' },
    { term: 'China + 1', definition: 'Chiến lược giữ cơ sở ở Trung Quốc nhưng thêm ít nhất một địa điểm khác.' },
    { term: 'Nội địa hóa', definition: 'Tỷ lệ giá trị đầu vào được sản xuất trong nước.' },
    { term: 'Chuyển tải (transshipment)', definition: 'Hàng hóa đi qua nước thứ ba để né thuế; thường bị kiểm soát bởi quy tắc xuất xứ.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'friend-shoring-vietnam-supply-chains-q',
    question: 'Xuất khẩu điện tử của Việt Nam tăng mạnh nhưng phần lớn linh kiện nhập khẩu. Kết luận hợp lý nhất?',
    options: [
      { id: 'a', text: 'GDP và giá trị gia tăng trong nước tăng tương ứng với kim ngạch xuất khẩu.', explain: 'Kim ngạch gồm cả giá trị linh kiện nhập; phần giữ lại thường nhỏ hơn nhiều.' },
      { id: 'b', text: 'Xuất khẩu tăng là tích cực, nhưng cần xem tỷ lệ giá trị nội địa và mức liên kết với nhà cung cấp trong nước.', correct: true, explain: 'Đúng. Giá trị gia tăng mới là thước đo lợi ích thực; kim ngạch chỉ là điểm xuất phát.' },
      { id: 'c', text: 'Friend-shoring chắc chắn sẽ giữ lợi thế này vô thời hạn.', explain: 'Lợi thế phụ thuộc chi phí, hạ tầng và chính sách các đối tác; không có gì bảo đảm vĩnh viễn.' },
    ],
  },
  sources: [
    { title: 'Friendshoring', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Friendshoring' },
    { title: 'Trade', publisher: 'World Bank', url: 'https://www.worldbank.org/en/topic/trade/overview' },
    { title: 'Supply chain', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Supply_chain' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 30,
}
