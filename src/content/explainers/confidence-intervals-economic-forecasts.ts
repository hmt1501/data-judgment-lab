import type { Explainer } from '../../../shared/explainer'

export const confidenceIntervalsEconomicForecasts: Explainer = {
  id: 'confidence-intervals-economic-forecasts',
  slug: 'confidence-intervals-economic-forecasts',
  question: 'Khoảng tin cậy của dự báo kinh tế có ý nghĩa gì và giới hạn ở đâu?',
  title: 'Khoảng tin cậy của dự báo kinh tế: ý nghĩa và giới hạn',
  topic: 'macro',
  tldr: 'Khi nghe "tăng trưởng dự báo 6% ± 1,5 điểm", con số sau dấu ± nói về độ bất định, nhưng có ít nhất ba cách hiểu sai phổ biến. Khoảng tin cậy trong thống kê **ước lượng một tham số**, còn khoảng cho dự báo một giá trị tương lai (khoảng dự đoán) thường rộng hơn. Mức "95%" là tính chất của **quy trình**, không phải xác suất 95% cho một khoảng đã tính cụ thể.',
  keyPoints: [
    'Theo Wikipedia ("Confidence interval", đọc 15/10/2026): khoảng tin cậy 95% đến từ một quy trình mà trong khoảng 95% các mẫu lặp lại sẽ chứa tham số thật cố định; tham số không dịch chuyển, khoảng mới dịch chuyển. Nói "có 95% xác suất tham số nằm trong khoảng đã tính" là cách hiểu sai.',
    'Cũng theo trang đó, mức 95% **không** có nghĩa là 95% dữ liệu nằm trong khoảng, và **không** có nghĩa 95% khả năng trung bình mẫu sau rơi vào khoảng này. Bề rộng khoảng co lại khi cỡ mẫu tăng.',
    'Khác biệt quan trọng cho dự báo: khoảng tin cậy ước lượng tham số (như trung bình tổng thể); **khoảng dự đoán** nói về nơi một quan sát tương lai có thể rơi, và thường rộng hơn vì chứa cả nhiễu của chính quan sát. Dự báo kinh tế thuộc loại sau; "khoảng tin cậy" trong báo chí thường là cách gọi chung cho khoảng bất định.',
    'Dải bất định của dự báo thường dựa trên sai số dự báo lịch sử. Theo Reifschneider và Tulip (RBA RDP 2017-01), ± một RMSE ứng với khoảng 70% nếu sai số xấp xỉ chuẩn và không chệch; mức chuẩn khoảng 1 điểm phần trăm cho CPI sau bốn quý và khoảng 2 điểm cho tăng trưởng GDP. Họ cũng chỉ ra sự nhạy với giai đoạn mẫu.',
    'Ví dụ giả định: dự báo tăng trưởng 6% với RMSE 1,5 điểm cho dải khoảng 4,5%–7,5% ở mức khoảng 70%. Kết quả 4% hoặc 8% vẫn nằm trong khả năng, chỉ ít hơn; đừng coi dải là "chắc chắn".',
  ],
  causalChain: [
    { from: 'Dự báo dựa trên mô hình và giả định', to: 'Sai số dự báo không thể tránh', mechanism: 'Thông tin chưa đủ, cú sốc mới xuất hiện và mô hình đơn giản hóa thực tế nên kết quả thường lệch khỏi dự báo.' },
    { from: 'Đo độ lớn sai số trong quá khứ', to: 'Xây dựng khoảng bất định', mechanism: 'RMSE theo kỳ hạn cho biết mức lệch điển hình, từ đó dựng khoảng quanh dự báo.' },
    { from: 'Cỡ mẫu nhỏ hoặc giai đoạn mẫu khác', to: 'Ước lượng độ rộng không ổn định', mechanism: 'Sai số lịch sử có thể thấp trong giai đoạn yên ả và cao khi có khủng hoảng; khoảng tính từ mẫu khác nhau sẽ khác nhau.' },
    { from: 'Hiểu khoảng như xác suất chắc chắn', to: 'Kỳ vọng sai lầm', mechanism: 'Quy trình đúng 95% số lần không có nghĩa khoảng cụ thể này đúng 95%; ngoài ra giả định như chuẩn, ổn định có thể không đúng.' },
    { from: 'Dùng khoảng để lập kế hoạch kịch bản', to: 'Quyết định bền hơn trước bất ngờ', mechanism: 'Chuẩn bị cho các điểm ở hai đầu khoảng, không chỉ giá trị trung tâm.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp lập ngân sách và kế hoạch vốn', effect: 'Dự báo tăng trưởng, lạm phát, tỷ giá nên kèm kịch bản trong khoảng bất định; kế hoạch chỉ ở giá trị trung tâm dễ vỡ.', direction: 'up' },
    { group: 'Người đọc dự báo của các tổ chức quốc tế về Việt Nam', effect: 'Dự báo thường được nêu dưới dạng con số điểm; theo mức sai số lịch sử (xem RMSE ở trên) khoảng bất định thường rộng hơn nhiều so với chênh lệch vài phần mười điểm phần trăm giữa các dự báo.', direction: 'mixed' },
    { group: 'Cơ quan hoạch định chính sách', effect: 'Cần đọc dự báo kèm bất định để thiết kế chính sách linh hoạt; nền kinh tế nhỏ và mở thường chịu cú sốc bên ngoài lớn.', direction: 'mixed' },
    { group: 'Nhà đầu tư', effect: 'Không dùng một dự báo làm cơ sở duy nhất; xem xét khoảng và kịch bản xấu.', direction: 'up' },
  ],
  indicators: [
    { name: 'Sai số dự báo lịch sử (RMSE) theo biến và kỳ hạn', why: 'Cơ sở thực nghiệm cho độ rộng khoảng bất định.', where: 'Bài đánh giá dự báo của ngân hàng trung ương và tổ chức quốc tế' },
    { name: 'Phân tán giữa các dự báo', why: 'Dự báo chênh nhau nhiều thể hiện bất định lớn.', where: 'Khảo sát chuyên gia dự báo, báo cáo của IMF, Ngân hàng Thế giới' },
    { name: 'Cỡ mẫu và phương pháp trong khoảng tin cậy', why: 'Quyết định khoảng thể hiện điều gì.', where: 'Phần phương pháp của nguồn số liệu, ví dụ ghi chú của Cục Thống kê' },
    { name: 'Điều chỉnh sau (revision) của số liệu', why: 'Số liệu đầu tiên có thể thay đổi nhiều, thêm một nguồn bất định.', where: 'Thông cáo hiệu chỉnh của cơ quan thống kê' },
  ],
  counterpoints: [
    'Khoảng tin cậy theo tần suất khác với khoảng tín nhiệm (credible interval) của thống kê Bayes, nơi cho phép nói về xác suất tham số nằm trong khoảng; hai cách khác nhau về ý nghĩa dù đôi khi số trùng.',
    'Giả định chuẩn, không chệch, ổn định theo thời gian thường không đúng với dự báo kinh tế; các tác giả bài RBA cũng cảnh báo bất định có thể thay đổi và bất đối xứng.',
    'Khoảng rộng không có nghĩa dự báo vô ích: nó cho biết giới hạn kiến thức. Dự báo ngắn hạn thường chính xác hơn dự báo xa.',
  ],
  glossary: [
    { term: 'Khoảng tin cậy', definition: 'Khoảng tính từ mẫu bằng một quy trình có xác suất chứa tham số thật là một mức cho trước khi lặp lại.' },
    { term: 'Khoảng dự đoán', definition: 'Khoảng cho giá trị một quan sát tương lai, rộng hơn khoảng tin cậy của trung bình.' },
    { term: 'RMSE', definition: 'Sai số bình phương trung bình căn của dự báo.' },
    { term: 'Khoảng tín nhiệm (Bayes)', definition: 'Khoảng cho phép phát biểu xác suất tham số nằm trong đó theo quan điểm Bayes.' },
    { term: 'Hiệu chỉnh số liệu', definition: 'Thay đổi số liệu đã công bố khi có thêm thông tin.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'confidence-intervals-economic-forecasts-q',
    question: 'Một báo cáo nêu "khoảng tin cậy 95% cho tăng trưởng trung bình dài hạn là 5,0%–6,0%". Phát biểu nào đúng?',
    options: [
      { id: 'a', text: 'Có 95% xác suất tăng trưởng năm tới nằm trong 5,0%–6,0%.', explain: 'Khoảng tin cậy ước lượng tham số trung bình, không phải khoảng cho giá trị một năm cụ thể; năm tới thường biến động rộng hơn.' },
      { id: 'b', text: 'Quy trình tạo khoảng này sẽ chứa tham số thật trong khoảng 95% các mẫu lặp lại; nó không nói về dao động của một năm cụ thể.', correct: true, explain: 'Đúng. Đó là ý nghĩa tần suất của mức 95%, và để dự báo một năm cần khoảng dự đoán rộng hơn.' },
      { id: 'c', text: '95% dữ liệu tăng trưởng hằng năm nằm trong khoảng này.', explain: 'Khoảng tin cậy không nói về phần dữ liệu nằm trong khoảng; đó là hiểu lầm phổ biến.' },
    ],
  },
  sources: [
    { title: 'Confidence interval', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Confidence_interval' },
    { title: 'Reifschneider & Tulip (2017), RDP 2017-01: gauging the uncertainty of the economic outlook', publisher: 'Reserve Bank of Australia', url: 'https://www.rba.gov.au/publications/rdp/2017/2017-01/full.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 199,
}
