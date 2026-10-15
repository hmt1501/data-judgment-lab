import type { Explainer } from '../../../shared/explainer'

export const forecastUncertaintyFanCharts: Explainer = {
  id: 'forecast-uncertainty-fan-charts',
  slug: 'forecast-uncertainty-fan-charts',
  question: 'Biểu đồ "quạt" bất định của ngân hàng trung ương cho biết điều gì và đọc thế nào?',
  title: 'Biểu đồ quạt bất định: đọc dự báo của ngân hàng trung ương',
  topic: 'macro',
  tldr: 'Dự báo của ngân hàng trung ương thường được vẽ thành một **đường trung tâm** cùng các dải màu xòe ra như cái quạt. Dải rộng dần theo thời gian vì ta càng nhìn xa càng bất định. Quan trọng là hiểu: đó là **khoảng sai số có thể xảy ra** (thường dựa trên sai số dự báo trong quá khứ cộng phán đoán), không phải lời hứa về một con số.',
  keyPoints: [
    'Theo bài của Ngân hàng Anh (Quarterly Bulletin, quý I/1998, "The Inflation Report projections: understanding the fan chart"): từ 2/1993 đến 2/1996 Báo cáo Lạm phát vẽ dự báo lạm phát hai năm cùng một dải bất định dựa trên **sai số dự báo của 10 năm trước**, và với cách dựng đó, bài viết nêu rằng bình thường người ta kỳ vọng kết quả lạm phát thực tế rơi trong dải "chỉ hơn một nửa số lần" (đây là kỳ vọng nêu trong bài, không phải thống kê kết quả). Bài này chỉ dùng phần mô tả giai đoạn dải đơn; phần thiết kế biểu đồ quạt sau đó chưa được xác minh nên không nêu ở đây.',
    'Theo bài nghiên cứu của Reifschneider và Tulip (Cục Dự trữ Liên bang Mỹ/Ngân hàng Dự trữ Úc, RDP 2017-01): dải bất định của Cục Dự trữ Liên bang là **dự báo trung vị của FOMC cộng/trừ sai số bình phương trung bình căn (RMSE)** lịch sử, lấy từ cửa sổ 20 năm dự báo thời gian thực của nhiều nhà dự báo; nếu sai số xấp xỉ chuẩn, không chệch và ổn định, khoảng **70%** kết quả sẽ rơi trong dải.',
    'Cũng theo bài đó: ước lượng bất định **nhạy với giai đoạn mẫu**; sai số tăng sau khủng hoảng tài chính toàn cầu, và cửa sổ 20 năm ngầm giả định một cú sốc như 2007–2009 xảy ra khoảng hai chục năm một lần. Mức chuẩn: RMSE khoảng 1 điểm phần trăm cho lạm phát CPI sau bốn quý, khoảng 2 điểm cho tăng trưởng GDP và cho thất nghiệp ở kỳ hạn dài.',
    'Ví dụ trong bài đó: tỷ lệ thất nghiệp dự báo 5% có thể thực tế ra 3% hoặc 7%. Điều này cho thấy dự báo xa chỉ giải thích được ít biến động thực; khi nghe "dự báo tăng trưởng 6%", phải đọc kèm khoảng sai số.',
    'Tác giả lưu ý các dải này là công cụ truyền thông, không phải xác suất chính xác; khi lãi suất gần mức sàn thì rủi ro bất đối xứng nên dải đối xứng có thể gây hiểu lầm, và nên đi kèm đánh giá định tính về rủi ro lệch về phía nào.',
  ],
  causalChain: [
    { from: 'Ngân hàng trung ương đưa ra dự báo trung tâm', to: 'Cần thể hiện mức không chắc chắn kèm theo', mechanism: 'Một đường duy nhất tạo cảm giác chắc chắn giả; dải màu thể hiện phạm vi kết quả có thể.' },
    { from: 'Thu thập sai số dự báo trong quá khứ', to: 'Dải rộng được hiệu chỉnh theo kinh nghiệm', mechanism: 'Độ lớn RMSE theo từng kỳ hạn quyết định độ rộng dải; kỳ hạn càng xa sai số càng lớn nên dải xòe ra.' },
    { from: 'Chọn độ dài cửa sổ lịch sử và loại biến số', to: 'Độ rộng dải thay đổi', mechanism: 'Cửa sổ có khủng hoảng thì RMSE lớn hơn; cửa sổ yên ả thì nhỏ hơn, nên dải phụ thuộc lựa chọn kỹ thuật.' },
    { from: 'Ban hoạch định bổ sung đánh giá định tính (rủi ro lệch lên/xuống)', to: 'Dải không đối xứng hoặc được mô tả kèm', mechanism: 'Phán đoán về rủi ro (ví dụ tăng giá năng lượng) có thể làm dải lệch về một phía.' },
    { from: 'Người đọc nhìn dải thay vì chỉ đường trung tâm', to: 'Kỳ vọng thực tế hơn về chính sách và thị trường', mechanism: 'Hiểu rằng kết quả rất có thể nằm trong khoảng rộng, thị trường ít bị bất ngờ khi số liệu lệch khỏi đường trung tâm.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư và doanh nghiệp theo dõi Fed, ECB, BoE', effect: 'Quyết định lãi suất của các ngân hàng trung ương lớn ảnh hưởng tỷ giá, dòng vốn; cần đọc dự báo kèm bất định thay vì một con số.', direction: 'mixed' },
    { group: 'Người đọc dự báo tăng trưởng, lạm phát của Việt Nam từ các tổ chức', effect: 'Dự báo của nhiều tổ chức khác nhau; sự phân tán giữa chúng phản ánh bất định, nên xem như khoảng hơn là một số.', direction: 'mixed' },
    { group: 'Doanh nghiệp lập kế hoạch ngân sách', effect: 'Nên lập kịch bản cơ sở, thấp, cao thay vì một giá trị dự báo; kịch bản bất lợi nằm trong dải hợp lý.', direction: 'up' },
    { group: 'Người vay lãi suất thả nổi', effect: 'Lãi suất tương lai bất định cao ở kỳ hạn xa; nên thử nghiệm khả năng trả nợ ở mức lãi cao hơn dự báo trung tâm.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Dự báo trung tâm và dải bất định trong báo cáo chính sách tiền tệ', why: 'Thông tin về mức không chắc chắn đi kèm dự báo.', where: 'Báo cáo của Fed (Summary of Economic Projections), Ngân hàng Anh, ECB; Ngân hàng Nhà nước Việt Nam' },
    { name: 'Lịch công bố dự báo', why: 'Dự báo mới có thể làm thay đổi kỳ vọng thị trường.', where: 'Trang lịch họp của FOMC (federalreserve.gov): năm 2026 có dự báo kinh tế (SEP) ở các cuộc họp tháng 3, 6, 9 và 12 theo lịch đã đăng tải' },
    { name: 'Sai số dự báo thực tế so với dự báo trước đó', why: 'Kiểm tra dự báo trước đây có thường lệch về một phía không.', where: 'Báo cáo đánh giá dự báo của các ngân hàng trung ương và tổ chức' },
    { name: 'Phân tán dự báo giữa các tổ chức', why: 'Phản ánh mức bất định của nền kinh tế.', where: 'Khảo sát chuyên gia dự báo, báo cáo của IMF, Ngân hàng Thế giới' },
  ],
  counterpoints: [
    'Dải bất định dựa trên quá khứ chỉ đúng nếu tương lai giống quá khứ; cú sốc chưa từng có (đại dịch) có thể vượt xa dải.',
    'Biểu đồ quạt có thể khó đọc với người không quen với xác suất; trên thực tế nhiều người chỉ nhìn đường trung tâm và bỏ qua dải.',
    'Con số "70%" trong bài nghiên cứu chỉ đúng nếu sai số tương lai ổn định, không chệch và xấp xỉ phân phối chuẩn; các tác giả cũng nói sức mạnh của kiểm định thống kê về những giả định này "có lẽ không lớn"; không nên coi là xác suất chính xác.',
  ],
  glossary: [
    { term: 'Biểu đồ quạt (fan chart)', definition: 'Biểu đồ dự báo có các dải xòe ra thể hiện phạm vi kết quả có thể.' },
    { term: 'RMSE', definition: 'Căn bậc hai của trung bình bình phương sai số dự báo; thước đo độ lớn sai số.' },
    { term: 'Dự báo trung vị', definition: 'Giá trị ở giữa các dự báo của những người tham gia.' },
    { term: 'Cửa sổ lịch sử', definition: 'Giai đoạn quá khứ dùng để đo sai số dự báo.' },
    { term: 'Rủi ro lệch', definition: 'Đánh giá kết quả có khả năng lệch lên hay xuống nhiều hơn dự báo trung tâm.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'forecast-uncertainty-fan-charts-q',
    question: 'Một ngân hàng trung ương dự báo tăng trưởng 6% với dải khoảng 70% từ 4,5% đến 7,5% (ví dụ giả định). Cách hiểu nào đúng nhất?',
    options: [
      { id: 'a', text: 'Tăng trưởng sẽ chính xác là 6%.', explain: 'Đường trung tâm chỉ là giá trị điển hình nhất; bất định thể hiện qua dải.' },
      { id: 'b', text: 'Nếu độ rộng dải phản ánh sai số lịch sử, khoảng ba phần mười khả năng kết quả nằm ngoài dải này; kết quả 5% hoặc 7% không phải là "bất ngờ".', correct: true, explain: 'Đúng. Dải 70% nghĩa là vẫn còn khoảng 30% khả năng ra ngoài, và lệch vài phần trăm so với đường trung tâm là bình thường.' },
      { id: 'c', text: 'Dải rộng nghĩa là ngân hàng trung ương thiếu năng lực.', explain: 'Dải rộng phản ánh bất định vốn có của kinh tế, không phải năng lực kém; dải hẹp giả tạo mới đáng lo.' },
    ],
  },
  sources: [
    { title: 'The Inflation Report projections: understanding the fan chart (Quarterly Bulletin 1998 Q1)', publisher: 'Bank of England', url: 'https://www.bankofengland.co.uk/quarterly-bulletin/1998/q1/the-inflation-report-projections-understanding-the-fan-chart' },
    { title: 'Reifschneider & Tulip (2017), RDP 2017-01: gauging the uncertainty of the economic outlook', publisher: 'Reserve Bank of Australia', url: 'https://www.rba.gov.au/publications/rdp/2017/2017-01/full.html' },
    { title: 'FOMC calendars', publisher: 'Federal Reserve Board', url: 'https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 198,
}
