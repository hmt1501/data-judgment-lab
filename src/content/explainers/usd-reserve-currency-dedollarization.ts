import type { Explainer } from '../../../shared/explainer'

export const usdReserveCurrencyDedollarization: Explainer = {
  id: 'usd-reserve-currency-dedollarization',
  slug: 'usd-reserve-currency-dedollarization',
  question: 'Vì sao USD là tiền dự trữ toàn cầu và "phi đô la hóa" có thật sự đang xảy ra?',
  title: 'USD thống trị nhờ mạng lưới: thị phần dự trữ giảm chậm, chưa có đồng tiền nào thay thế được',
  topic: 'geopolitics-trade',
  tldr: 'Đồng tiền dự trữ giữ ba vai trò: **lưu trữ giá trị** (dự trữ ngoại hối), **đơn vị thanh toán/định giá** (hóa đơn thương mại, thanh toán) và **đơn vị tài chính** (nợ, ngân hàng, ngoại hối). Theo ghi chú FEDS của Fed (18/7/2025), USD vẫn thống trị và khá ổn định trong 20 năm qua; thị phần trong dự trữ ngoại hối đã công bố là 58% năm 2024 so với đỉnh 72% năm 2001. "Phi đô la hóa" là xu hướng đa dạng hóa chậm, chưa phải sự thay thế.',
  keyPoints: [
    'Theo Fed (FEDS Notes, 18/7/2025, dữ liệu đến cuối 2024/đầu 2025): USD chiếm **58%** dự trữ ngoại hối chính thức đã công bố năm 2024 (IMF COFER), không đổi so với 2022 và thấp hơn đỉnh 72% năm 2001; euro 20%, yên 6%, bảng Anh 5%, nhân dân tệ 2%.',
    'Cùng tài liệu: USD có mặt trong khoảng 88% giao dịch ngoại hối (khảo sát BIS tháng 4/2022), khoảng 50% thanh toán qua SWIFT (khoảng 60% nếu gộp thanh toán nội khối euro), khoảng 60% phát hành nợ bằng ngoại tệ kể từ 2010; nhà đầu tư nước ngoài nắm khoảng 32% trái phiếu Kho bạc Mỹ đang lưu hành (Q1/2025).',
    'Ở châu Á–Thái Bình Dương, USD chiếm khoảng 74% hóa đơn thương mại (trung bình 1999–2019, số liệu cũ); điều này cho thấy nhiều nước xuất khẩu như Việt Nam phát sinh doanh thu, chi phí bằng USD dù không giao dịch với Mỹ.',
    'Bài Fed cũng nêu vàng chiếm hơn 23% dự trữ chính thức, nhưng phần lớn do giá vàng tăng chứ không do lượng vàng tăng; và các lệnh trừng phạt Nga chưa gây dịch chuyển đáng kể khỏi USD tính đến thời điểm đó.',
    'USD mạnh nhờ **hiệu ứng mạng** (ai cũng dùng nên ai cũng cần), thị trường trái phiếu sâu, tính thanh khoản, khung pháp lý và mạng lưới hoán đổi của Fed; các đồng tiền khác thiếu một hoặc nhiều yếu tố này.',
  ],
  causalChain: [
    { from: 'Thương mại và định giá hàng hóa chủ yếu bằng USD', to: 'Các nước cần dự trữ USD', mechanism: 'Doanh nghiệp, ngân hàng cần USD để thanh toán và trả nợ; ngân hàng trung ương giữ dự trữ để can thiệp tỷ giá.' },
    { from: 'Thị trường trái phiếu Mỹ sâu và thanh khoản', to: 'Nhà đầu tư và ngân hàng trung ương mua tài sản USD', mechanism: 'Tài sản an toàn, dễ bán; vòng lặp này củng cố vị thế của USD.' },
    { from: 'Trừng phạt tài chính, thuế quan, lo ngại rủi ro chính trị', to: 'Một số nước đa dạng hóa dự trữ (vàng, đồng tiền khác) và thanh toán song phương', mechanism: 'Giảm phụ thuộc vào hệ thống do một nước kiểm soát; nhưng thiếu thị trường sâu thay thế nên dịch chuyển chậm.' },
    { from: 'USD mạnh hay yếu so với các đồng tiền khác', to: 'Điều kiện tài chính toàn cầu thay đổi', mechanism: 'USD mạnh làm gánh nặng nợ bằng USD của thị trường mới nổi nặng hơn và thắt chặt điều kiện tài chính; USD yếu có tác dụng ngược lại.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp xuất nhập khẩu', effect: 'Hóa đơn bằng USD khiến doanh thu, chi phí và nợ chịu rủi ro tỷ giá USD/VND; đa dạng hóa tiền tệ thanh toán giúp giảm phụ thuộc nhưng phụ thuộc đối tác chấp nhận.', direction: 'mixed' },
    { group: 'Ngân hàng Nhà nước và dự trữ ngoại hối', effect: 'Cơ cấu dự trữ và khả năng can thiệp tỷ giá phụ thuộc vào thị trường USD; diễn biến USD toàn cầu truyền vào áp lực tỷ giá trong nước.', direction: 'mixed' },
    { group: 'Người vay nợ bằng ngoại tệ', effect: 'USD mạnh làm tăng gánh nặng trả nợ quy đổi sang đồng Việt Nam.', direction: 'down' },
    { group: 'Người giữ vàng, ngoại tệ', effect: 'Thay đổi niềm tin vào USD có thể tác động giá vàng và nhu cầu trú ẩn; không nên suy luận một chiều.', direction: 'mixed' },
    { group: 'Thị trường chứng khoán', effect: 'Dòng vốn nước ngoài nhạy với USD và lãi suất Mỹ; USD mạnh thường đi cùng dòng vốn rút khỏi thị trường mới nổi.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ trọng tiền tệ trong dự trữ ngoại hối chính thức (COFER)', why: 'Chỉ báo chính cho vai trò dự trữ của USD và đồng tiền thay thế.', where: 'IMF – COFER (data.imf.org); tóm tắt trong các ghi chú của Fed' },
    { name: 'Tỷ trọng tiền tệ trong thanh toán quốc tế', why: 'Đo vai trò thanh toán của USD, euro, nhân dân tệ.', where: 'SWIFT RMB Tracker và dữ liệu thanh toán của SWIFT' },
    { name: 'Chỉ số USD (DXY) và tỷ giá USD/VND', why: 'Truyền dẫn từ USD toàn cầu tới tỷ giá trong nước.', where: 'Ngân hàng Nhà nước (sbv.gov.vn); dữ liệu thị trường' },
    { name: 'Khảo sát Triennial của BIS về giao dịch ngoại hối', why: 'Cho biết thị phần các đồng tiền trong giao dịch ngoại hối toàn cầu.', where: 'BIS (bis.org)' },
  ],
  counterpoints: [
    'Thị phần dự trữ của USD đã giảm so với 2001, nhưng phần lớn dịch chuyển sang các đồng tiền nhỏ hơn và vàng, không sang một đối thủ duy nhất.',
    'Số liệu của bài Fed có thời điểm khác nhau, một số cũ (hóa đơn thương mại 1999–2019, FX 2022); tác giả lưu ý chưa phản ánh tác động của thuế quan và hạ xếp hạng tín dụng Mỹ trong 2025.',
    'Giá vàng tăng làm thị phần vàng trong dự trữ tăng "giả"; cần phân biệt thay đổi giá và thay đổi lượng nắm giữ.',
  ],
  glossary: [
    { term: 'Tiền dự trữ', definition: 'Đồng tiền được ngân hàng trung ương và tổ chức giữ rộng rãi làm tài sản dự trữ và dùng trong thương mại, tài chính quốc tế.' },
    { term: 'Phi đô la hóa', definition: 'Xu hướng giảm phụ thuộc vào USD trong dự trữ, thanh toán hoặc định giá.' },
    { term: 'COFER', definition: 'Cơ sở dữ liệu của IMF về cơ cấu tiền tệ của dự trữ ngoại hối chính thức.' },
    { term: 'Hiệu ứng mạng', definition: 'Giá trị của một đồng tiền tăng khi càng nhiều người dùng.' },
    { term: 'Hoán đổi tiền tệ (swap line)', definition: 'Thỏa thuận cho phép ngân hàng trung ương tiếp cận ngoại tệ của ngân hàng trung ương khác trong căng thẳng.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'usd-reserve-currency-dedollarization-q',
    question: 'Thị phần USD trong dự trữ ngoại hối giảm từ 72% (2001) xuống 58% (2024). Kết luận nào chính xác nhất?',
    options: [
      { id: 'a', text: 'USD đã mất vai trò tiền dự trữ.', explain: '58% vẫn là thị phần lớn nhất, hơn gấp đôi euro (20%).' },
      { id: 'b', text: 'Có đa dạng hóa dần, nhưng USD vẫn thống trị và chưa có đồng tiền thay thế rõ ràng.', correct: true, explain: 'Đúng. Giảm chậm trong 20 năm, thị phần ổn định gần đây (58% năm 2022 và 2024), phần mất đi chủ yếu chia cho nhiều đồng tiền nhỏ.' },
      { id: 'c', text: 'Nhân dân tệ đã thay thế USD.', explain: 'Nhân dân tệ chỉ chiếm khoảng 2% dự trữ đã công bố theo số liệu trong bài Fed.' },
    ],
  },
  sources: [
    { title: 'The International Role of the U.S. Dollar – 2025 Edition (FEDS Notes, 18/07/2025)', publisher: 'Board of Governors of the Federal Reserve System', url: 'https://www.federalreserve.gov/econres/notes/feds-notes/the-international-role-of-the-u-s-dollar-2025-edition-20250718.html' },
    { title: 'Reserve currency', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Reserve_currency' },
    { title: 'Dedollarisation', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Dedollarization' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 68,
}
