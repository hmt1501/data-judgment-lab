import type { Explainer } from '../../../shared/explainer'

export const constructionCostsHousingPrices: Explainer = {
  id: 'construction-costs-housing-prices',
  slug: 'construction-costs-housing-prices',
  question: 'Chi phí xây dựng và giá vật liệu tác động thế nào tới giá nhà?',
  title: 'Chi phí xây dựng đặt "sàn mềm" cho giá nhà, nhưng đất và vốn mới thường là phần lớn',
  topic: 'real-estate',
  tldr: 'Giá thành một căn nhà gồm đất, chi phí xây dựng (vật liệu, nhân công, máy móc), chi phí vốn, thuế phí và lợi nhuận. Vật liệu tăng giá đẩy chi phí xây dựng lên và có thể được chuyển sang giá bán, nhưng **mức chuyển phụ thuộc cung cầu**: thị trường cầu mạnh thì chuyển được nhiều, thị trường yếu thì chủ đầu tư và nhà thầu tự gánh. Với dự án đã ký hợp đồng giá cố định, nhà thầu chịu cú sốc đầu tiên.',
  keyPoints: [
    'Chi phí xây dựng chỉ là một phần giá nhà; ở đô thị lớn, **giá đất** và **chi phí vốn** thường chiếm tỷ trọng lớn hơn, nên cùng một cú sốc vật liệu, tác động lên giá nhà thấp hơn tác động lên giá thành công trình.',
    'Theo Thời báo Tài chính Việt Nam (02/04/2026), từ khoảng tháng 3/2026 nhiều nhà sản xuất thép tăng giá thêm 200.000–300.000 đồng/tấn, xi măng tăng khoảng 100.000 đồng/tấn; nguyên nhân nêu là giá nhiên liệu tăng do xung đột Trung Đông và giá nguyên liệu đầu vào (phôi thép, than, quặng) tăng. Số liệu này theo bài báo đó, chưa phải thống kê chính thức.',
    'Cùng bài báo: thép chiếm khoảng 20–30% chi phí vật liệu công trình, nên chỉ vài trăm nghìn đồng mỗi tấn cũng làm tổng chi phí dự án đổi đáng kể; hợp đồng thi công đơn giá cố định khiến **nhà thầu hấp thụ cú sốc**, ảnh hưởng lợi nhuận và tiến độ.',
    'Chuyển sang giá bán hay không phụ thuộc **sức cầu**: khi nhu cầu mạnh, chủ đầu tư nâng giá; khi cầu yếu, họ giảm biên lợi nhuận, hoãn mở bán hoặc cắt giảm quy mô.',
    'Chi phí xây dựng còn chịu tác động của giá năng lượng và vận tải, của lương nhân công và tỷ giá (với vật tư nhập khẩu); đây là kênh để giá hàng hóa toàn cầu truyền vào giá nhà trong nước.',
  ],
  causalChain: [
    { from: 'Giá năng lượng và nguyên liệu đầu vào tăng', to: 'Giá thép, xi măng, vật liệu hoàn thiện tăng', mechanism: 'Nhiên liệu, than, quặng là chi phí chính của sản xuất vật liệu; giá thế giới truyền vào giá bán trong nước với độ trễ vài tuần đến vài tháng.' },
    { from: 'Giá vật liệu tăng', to: 'Chi phí xây dựng và giá thành dự án tăng', mechanism: 'Vật liệu là phần lớn chi phí trực tiếp; công trình cao tầng dùng nhiều thép, bê tông nên nhạy hơn nhà thấp tầng.' },
    { from: 'Chi phí dự án tăng', to: 'Biên lợi nhuận bị ép hoặc giá bán được điều chỉnh', mechanism: 'Chủ đầu tư/nhà thầu chuyển sang giá bán nếu thị trường chấp nhận; nếu không thì tự gánh, làm chậm thi công hoặc hoãn dự án.' },
    { from: 'Dự án bị hoãn hoặc thu hẹp', to: 'Nguồn cung tương lai giảm', mechanism: 'Giá thành cao hơn làm một số dự án không còn hiệu quả; cung giảm có thể đẩy giá lên về trung hạn, kể cả khi cầu không tăng.' },
  ],
  vietnamImpact: [
    { group: 'Nhà thầu xây dựng', effect: 'Chịu rủi ro đầu tiên với hợp đồng giá cố định: lợi nhuận mỏng, tiến độ chậm, tranh chấp điều chỉnh giá.', direction: 'down' },
    { group: 'Chủ đầu tư dự án nhà ở', effect: 'Biên lợi nhuận bị ép; ưu thế thuộc về đơn vị có hợp đồng mua vật tư sớm, quỹ đất giá vốn thấp.', direction: 'mixed' },
    { group: 'Người mua nhà', effect: 'Có thể thấy giá chào cao hơn hoặc ít khuyến mãi; mức tăng thực tế phụ thuộc thị trường từng phân khúc.', direction: 'down' },
    { group: 'Doanh nghiệp sản xuất vật liệu', effect: 'Hưởng lợi từ giá bán cao nếu cầu tốt, nhưng chi phí đầu vào cũng tăng nên biên chưa chắc cải thiện.', direction: 'mixed' },
    { group: 'Nhà ở xã hội và nhà giá rẻ', effect: 'Khung giá bị ràng buộc, nên chi phí tăng dễ làm dự án kém hấp dẫn với chủ đầu tư.', direction: 'down' },
  ],
  indicators: [
    { name: 'Giá thép xây dựng, xi măng, cát đá theo tháng', why: 'Trực tiếp quyết định chi phí vật liệu; theo dõi cả giá nhà máy và giá đại lý.', where: 'Hiệp hội Thép Việt Nam (VSA), công bố giá của nhà sản xuất, thông tin thị trường của Bộ Xây dựng' },
    { name: 'Chỉ số giá vật liệu xây dựng do sở xây dựng địa phương công bố', why: 'Là căn cứ điều chỉnh giá hợp đồng ở nhiều dự án.', where: 'Công bố giá vật liệu của Sở Xây dựng các tỉnh, thành' },
    { name: 'Giá dầu và năng lượng thế giới', why: 'Biến động nhiên liệu truyền vào giá sản xuất, vận chuyển vật liệu.', where: 'Pink Sheet của Ngân hàng Thế giới (worldbank.org/en/research/commodity-markets)' },
    { name: 'CPI nhóm nhà ở và vật liệu xây dựng', why: 'Cho biết áp lực giá vật liệu đã chạm hộ gia đình chưa.', where: 'Thông cáo CPI hằng tháng của Cục Thống kê (nso.gov.vn)' },
  ],
  counterpoints: [
    'Ở khu vực đất đắt, vật liệu chỉ là phần nhỏ giá bán nên tác động tới giá nhà là nhỏ; ngược lại ở nhà ở bình dân, vật liệu quan trọng hơn.',
    'Giá vật liệu có thể tăng do đầu cơ, găm hàng ngắn hạn rồi hạ nhiệt; nhìn xu hướng nhiều tháng thay vì một đợt tăng.',
    'Công nghệ xây dựng (đúc sẵn, thiết kế tối ưu) và quản lý dự án tốt có thể bù một phần tăng giá vật liệu.',
  ],
  glossary: [
    { term: 'Hợp đồng đơn giá cố định', definition: 'Hợp đồng thi công trong đó đơn giá không đổi theo biến động giá vật liệu, nên nhà thầu chịu rủi ro giá.' },
    { term: 'Phôi thép', definition: 'Bán thành phẩm của sản xuất thép, giá phôi tăng kéo giá thép xây dựng tăng theo.' },
    { term: 'Chuyển giá (pass-through)', definition: 'Mức chi phí đầu vào tăng được chuyển sang giá bán cho khách hàng.' },
    { term: 'Biên lợi nhuận', definition: 'Phần chênh lệch giữa giá bán và giá thành, tính theo tỷ lệ phần trăm.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'construction-costs-housing-prices-q',
    question: 'Thép tăng giá mạnh nhưng thị trường căn hộ đang yếu, người mua thưa thớt. Điều gì hợp lý nhất xảy ra với giá bán?',
    options: [
      { id: 'a', text: 'Giá bán tăng đúng bằng phần chi phí tăng thêm.', explain: 'Khi cầu yếu, người bán khó nâng giá; phần chi phí thường do chủ đầu tư/nhà thầu gánh một phần.' },
      { id: 'b', text: 'Chủ đầu tư nhiều khả năng ép biên lợi nhuận, hoãn dự án hoặc giảm quy mô thay vì tăng giá đầy đủ.', correct: true, explain: 'Đúng. Mức chuyển giá phụ thuộc sức cầu; khi cầu yếu, tác động nằm nhiều ở biên lợi nhuận và nguồn cung tương lai.' },
      { id: 'c', text: 'Chi phí vật liệu không ảnh hưởng gì tới dự án.', explain: 'Vật liệu là phần lớn chi phí xây dựng; ảnh hưởng thể hiện ở lợi nhuận, tiến độ hoặc quyết định triển khai.' },
    ],
  },
  sources: [
    { title: 'Vật liệu xây dựng đồng loạt tăng giá (đăng 02/04/2026)', publisher: 'Thời báo Tài chính Việt Nam', url: 'https://thoibaotaichinhvietnam.vn/vat-lieu-xay-dung-dong-loat-tang-gia-194858-194858.html' },
    { title: 'Commodity Markets (Pink Sheet, Commodity Markets Outlook)', publisher: 'World Bank', url: 'https://www.worldbank.org/en/research/commodity-markets' },
    { title: 'Property cycle', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Property_cycle' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 62,
}
