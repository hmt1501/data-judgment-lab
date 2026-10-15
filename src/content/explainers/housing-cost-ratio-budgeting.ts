import type { Explainer } from '../../../shared/explainer'

export const housingCostRatioBudgeting: Explainer = {
  id: 'housing-cost-ratio-budgeting',
  slug: 'housing-cost-ratio-budgeting',
  question: 'Chi phí nhà ở nên chiếm bao nhiêu phần thu nhập và quy tắc "30%" có áp dụng được không?',
  title: 'Tỷ lệ chi phí nhà ở trên thu nhập: quy tắc 30% và giới hạn của nó',
  topic: 'personal-finance',
  tldr: 'Quy tắc phổ biến ở Mỹ và Canada coi chi phí nhà ở vượt **30% thu nhập** là gánh nặng, nhưng đó chỉ là ngưỡng thống kê, không phải luật tự nhiên. Điều thực sự quan trọng là phần tiền còn lại sau nhà ở có đủ cho chi tiêu thiết yếu, quỹ khẩn cấp và mục tiêu khác hay không. Ở Việt Nam, vấn đề thường nằm ở **giá nhà so với thu nhập** hơn là tỷ lệ tiền thuê hằng tháng.',
  keyPoints: [
    'Theo tổng hợp trên Wikipedia (trang "Housing affordability", đọc 15/10/2026), ở Mỹ và Canada chi phí nhà ở gồm cả tiện ích không nên vượt 30% thu nhập gộp của hộ; Canada từng dùng 25% rồi chuyển sang 30% từ thập niên 1980, còn Ấn Độ dùng 40%. Con số khác nhau theo nước, nghĩa là đây là quy ước.',
    'Cũng theo trang đó, năm 2022 khoảng một nửa hộ thuê nhà ở Mỹ chi dưới 30% thu nhập, 23% chi 30–50% (gánh nặng) và 27% chi trên 50% (gánh nặng nghiêm trọng).',
    'Tỷ lệ này có điểm yếu: **không tính** chi phí đi lại (thường là khoản lớn thứ hai), không phân biệt hộ thu nhập cao và thấp (30% của thu nhập thấp để lại ít tiền hơn nhiều), và nhìn một tháng có thể sai với người đang trả nợ mua nhà.',
    'Ở Việt Nam, theo bài báo Diễn đàn Doanh nghiệp (24/10/2025), tỷ lệ giá nhà trên thu nhập bình quân hộ gia đình ước khoảng 25 lần ở cấp cả nước và 30–35 lần tại Hà Nội, TP.HCM tính đến cuối tháng 9/2025; bài nêu 25 lần là gấp khoảng 1,7 lần mức bình quân thế giới nhưng không gắn các tỷ lệ này với cơ quan hay báo cáo cụ thể (các số khác trong bài được dẫn từ Global Property Guide, VARS-IRE, SHS, CBRE), nên chỉ xem là ước tính tham khảo, chưa phải thống kê chính thức.',
    'Cách dùng thực tế: bắt đầu từ ngân sách, tính **tiền còn lại sau nhà ở và nợ** rồi mới quyết định mức chi nhà ở chấp nhận được, thay vì tin vào một tỷ lệ cố định.',
  ],
  causalChain: [
    { from: 'Chi phí nhà ở (thuê hoặc trả nợ) chiếm tỷ trọng lớn trong thu nhập', to: 'Phần còn lại cho chi tiêu thiết yếu và tiết kiệm bị thu hẹp', mechanism: 'Chi phí nhà ở là khoản cố định, khó giảm nhanh, nên phần co lại thường rơi vào tiết kiệm, quỹ khẩn cấp hoặc chi tiêu linh hoạt.' },
    { from: 'Tiết kiệm và quỹ khẩn cấp bị thu hẹp', to: 'Dễ tổn thương trước cú sốc thu nhập hoặc lãi suất', mechanism: 'Hộ không có đệm phải vay thêm hoặc bán tài sản khi mất việc, hoặc khi lãi suất thả nổi tăng làm khoản trả góp lớn hơn.' },
    { from: 'Giá nhà tăng nhanh hơn thu nhập', to: 'Tỷ lệ giá nhà / thu nhập tăng, cần vay lớn hơn và lâu hơn', mechanism: 'Số năm thu nhập cần để mua nhà dài ra; với cùng mức chi 30% thu nhập, khoản vay tối đa phụ thuộc lãi suất và kỳ hạn nên nhà đắt hơn kéo dài thời gian trả nợ.' },
    { from: 'Chỉ nhìn tỷ lệ nhà ở / thu nhập', to: 'Bỏ sót chi phí đi lại và chênh lệch vị trí', mechanism: 'Nhà rẻ ở xa trung tâm có thể đẩy chi phí đi lại và thời gian lên, nên tổng chi phí "nhà ở + đi lại" mới phản ánh đúng khả năng chi trả.' },
    { from: 'Tính ngân sách theo phần tiền còn lại sau chi phí thiết yếu', to: 'Quyết định mức chi nhà ở sát hoàn cảnh hơn', mechanism: 'Cách tiếp cận "thu nhập còn lại" cho thấy hộ thu nhập thấp có thể quá tải ngay ở mức dưới 30%, còn hộ thu nhập cao chịu được hơn 30%.' },
  ],
  vietnamImpact: [
    { group: 'Người trẻ muốn mua nhà đầu tiên', effect: 'Giá nhà gấp hàng chục lần thu nhập năm khiến việc tích lũy đặt cọc và gánh khoản vay dài hạn khó hơn; nhiều người phải thuê lâu hơn hoặc mua xa trung tâm.', direction: 'down' },
    { group: 'Người thuê nhà', effect: 'Tiền thuê chiếm một phần thu nhập thay đổi theo thành phố và vị trí; cần tính thêm điện nước, đi lại và gửi xe vào chi phí nhà ở thực tế.', direction: 'mixed' },
    { group: 'Người đang vay mua nhà lãi suất thả nổi', effect: 'Khi lãi suất thả nổi tăng, khoản trả góp tăng; nên thử kịch bản (ví dụ giả định lãi tăng thêm vài điểm phần trăm) để xem tỷ lệ chi nhà ở có vượt khả năng chịu đựng không.', direction: 'down' },
    { group: 'Hộ có hai nguồn thu ổn định', effect: 'Thu nhập cao và ổn định giúp chịu được tỷ lệ chi nhà ở cao hơn, miễn là vẫn còn quỹ khẩn cấp.', direction: 'up' },
  ],
  indicators: [
    { name: 'Tỷ lệ chi phí nhà ở / thu nhập sau thuế của hộ', why: 'Chỉ báo nhanh về mức gánh nặng của chính bạn, nên tính cả điện nước, bảo hiểm, phí quản lý.', where: 'Tự tính từ sao kê và hợp đồng thuê hoặc vay' },
    { name: 'Tỷ lệ giá nhà / thu nhập hộ gia đình theo thành phố', why: 'Cho biết thị trường đắt hay rẻ tương đối so với thu nhập tại địa phương.', where: 'Báo cáo của các đơn vị tư vấn bất động sản và số liệu thu nhập của Cục Thống kê (nso.gov.vn); lưu ý các nguồn dùng phương pháp tính khác nhau' },
    { name: 'Lãi suất cho vay mua nhà và điều khoản thả nổi', why: 'Quyết định mức trả góp hằng tháng và rủi ro tăng lãi.', where: 'Biểu lãi suất và hợp đồng tín dụng của ngân hàng cho vay' },
    { name: 'Chi phí đi lại hằng tháng', why: 'Khoản lớn thường bị bỏ sót khi so nhà ở gần và xa nơi làm việc.', where: 'Tự theo dõi chi tiêu đi lại của hộ' },
  ],
  counterpoints: [
    'Ngưỡng 30% là quy ước của chính sách nhà ở Mỹ, không phản ánh điều kiện Việt Nam, nơi nhiều hộ ở nhà tự có, nhà của gia đình hoặc thuê chung nên tỷ lệ nhà ở / thu nhập thấp nhưng vấn đề lại là khả năng mua nhà.',
    'Một số hộ chủ động chi nhiều cho nhà ở (gần trường, gần nơi làm việc) và cắt chỗ khác; tỷ lệ cao chưa chắc là khó khăn.',
    'Số liệu giá nhà / thu nhập phụ thuộc nhiều vào cách chọn mẫu và định nghĩa thu nhập, nên các nguồn cho kết quả khác nhau khá xa; không nên so trực tiếp con số của nguồn này với nguồn khác.',
  ],
  glossary: [
    { term: 'Gánh nặng nhà ở', definition: 'Tình trạng chi phí nhà ở vượt một ngưỡng so với thu nhập, thường là 30% theo quy ước ở Mỹ.' },
    { term: 'Tỷ lệ giá nhà / thu nhập', definition: 'Giá một căn nhà điển hình chia cho thu nhập năm điển hình của hộ.' },
    { term: 'Thu nhập còn lại', definition: 'Phần tiền hộ còn lại sau khi trả các chi phí thiết yếu, dùng để đánh giá khả năng chi trả sát thực tế hơn tỷ lệ phần trăm.' },
    { term: 'Lãi suất thả nổi', definition: 'Lãi suất vay thay đổi theo kỳ điều chỉnh, làm khoản trả góp biến động.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'housing-cost-ratio-budgeting-q',
    question: 'Hai hộ cùng chi 30% thu nhập cho nhà ở. Hộ A thu nhập thấp, hộ B thu nhập cao. Nhận định nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Hai hộ chịu gánh nặng như nhau vì cùng tỷ lệ 30%.', explain: 'Cùng tỷ lệ nhưng số tiền còn lại khác xa; 70% thu nhập thấp có thể không đủ chi tiêu thiết yếu.' },
      { id: 'b', text: 'Hộ A có nhiều khả năng quá tải hơn vì phần còn lại sau nhà ở có thể không đủ cho chi tiêu thiết yếu, còn hộ B vẫn còn dư địa.', correct: true, explain: 'Đúng. Đó là lý do một số nhà nghiên cứu ủng hộ cách đo thu nhập còn lại thay cho một tỷ lệ cố định.' },
      { id: 'c', text: 'Hộ B quá tải hơn vì chi tiền tuyệt đối lớn hơn.', explain: 'Số tiền tuyệt đối lớn hơn không có nghĩa khó khăn hơn; điều quan trọng là phần còn lại sau nhà ở so với nhu cầu.' },
    ],
  },
  sources: [
    { title: 'Giá nhà tăng nhanh, giấc mơ sở hữu nhà của người trẻ ngày càng xa vời', publisher: 'Diễn đàn Doanh nghiệp', url: 'https://diendandoanhnghiep.vn/gia-nha-tang-nhanh-giac-mo-so-huu-nha-cua-nguoi-tre-ngay-cang-xa-voi-10163611.html' },
    { title: 'Housing affordability', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Housing_affordability' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 183,
}
