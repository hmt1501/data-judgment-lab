import type { Explainer } from '../../../shared/explainer'

export const volatilityRiskMeasures: Explainer = {
  id: 'volatility-risk-measures',
  slug: 'volatility-risk-measures',
  question: 'Biến động, độ lệch chuẩn và VIX đo rủi ro thế nào, và giới hạn của chúng?',
  title: 'Biến động đo độ phân tán của lợi suất, không đo hướng đi và không đo rủi ro mất vốn',
  topic: 'markets-investing',
  tldr: '**Biến động (volatility)** thường là độ lệch chuẩn của lợi suất log theo thời gian, đổi sang năm bằng căn bậc hai của thời gian. **VIX** là biến động *ngụ ý* trong giá quyền chọn S&P 500 cho 30 ngày tới, quy đổi theo năm. Chúng đo mức dao động, không đo hướng, và dễ đánh giá thấp những cú rơi cực đoan vì phân phối lợi suất có đuôi dày.',
  keyPoints: [
    'Theo Wikipedia (Volatility): biến động là mức độ biến thiên của chuỗi giá, thường đo bằng độ lệch chuẩn lợi suất log; "không đo hướng thay đổi giá, chỉ đo độ phân tán".',
    'Quy đổi theo năm theo căn bậc hai của thời gian: biến động ngày 1% tương đương khoảng 15,87% theo năm (√252 ≈ 15,87), với giả định bước ngẫu nhiên và khoảng 252 phiên.',
    '**Biến động lịch sử** tính từ giá đã xảy ra; **biến động ngụ ý** suy ra từ giá quyền chọn, mang tính nhìn về phía trước. VIX là loại thứ hai: ước lượng biến động 30 ngày tới của S&P 500, quy đổi theo năm.',
    'Đổi VIX sang một tháng (phép quy đổi căn bậc hai của thời gian áp dụng cho biến động theo năm; các nguồn trên không nêu riêng): chia cho √12 (khoảng 3,46), không phải chia 12. Ví dụ giả định: VIX 20 ≈ biên dao động một độ lệch chuẩn khoảng 5,8% trong một tháng.',
    'Giới hạn: lợi suất thực có **đuôi dày** (cực đoan xảy ra nhiều hơn mô hình chuẩn dự đoán) và **gom cụm biến động**; theo Wikipedia, một số nhà phê bình cho rằng khả năng dự báo của các mô hình biến động phức tạp chỉ ngang các thước đo đơn giản, nhưng điều này còn tranh luận.',
  ],
  causalChain: [
    { from: 'Lợi suất hằng ngày dao động quanh trung bình', to: 'Độ lệch chuẩn đo mức phân tán', mechanism: 'Độ lệch chuẩn càng lớn, khoảng kết quả thường gặp càng rộng; nó đối xứng nên không phân biệt tăng và giảm.' },
    { from: 'Cầu bảo hiểm danh mục (mua quyền chọn bán) tăng', to: 'Giá quyền chọn và VIX tăng', mechanism: 'Giá quyền chọn tăng khi nhà đầu tư trả nhiều hơn cho bảo hiểm; VIX suy từ các giá này nên phản ánh cả mức kỳ vọng biến động lẫn mức ngại rủi ro.' },
    { from: 'Biến động tăng', to: 'Mức dao động giá trị danh mục lớn hơn', mechanism: 'Cùng khoản đầu tư, độ phân tán kết quả tăng nên rủi ro bị buộc bán khi thua lỗ cũng tăng.' },
    { from: 'Đuôi dày và gom cụm', to: 'Thước đo biến động đánh giá thấp rủi ro cực đoan', mechanism: 'Mô hình dựa trên phân phối chuẩn coi những cú rơi vài độ lệch chuẩn là gần như không xảy ra, trong khi thực tế chúng xuất hiện thường hơn.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cổ phiếu Việt Nam', effect: 'Có thể tính biến động lịch sử của VN-Index hoặc từng mã bằng độ lệch chuẩn lợi suất ngày; VIX là thước đo của thị trường Mỹ, thường được xem là chỉ báo tâm lý toàn cầu hơn là số đo trực tiếp rủi ro VN-Index.', direction: 'mixed' },
    { group: 'Nhà đầu tư thận trọng với vốn vay (margin)', effect: 'Biến động cao làm tăng nguy cơ giá chạm ngưỡng gọi ký quỹ; cần tính mức giảm cực đoan chứ không chỉ độ lệch chuẩn.', direction: 'down' },
    { group: 'Quỹ và nhà tư vấn', effect: 'Biến động là một đầu vào để so sánh rủi ro các danh mục, nhưng nên kết hợp mức sụt giảm tối đa (drawdown).', direction: 'mixed' },
    { group: 'Người dùng VIX làm tín hiệu toàn cầu', effect: 'VIX tăng thường đi cùng tâm lý né rủi ro toàn cầu, có thể kéo dòng vốn ngoại rút khỏi thị trường mới nổi (xem bài đô la Mỹ và thị trường mới nổi).', direction: 'down' },
  ],
  indicators: [
    { name: 'Độ lệch chuẩn lợi suất 20 và 60 phiên (quy đổi theo năm)', why: 'Thấy chế độ biến động hiện tại so với lịch sử.', where: 'Tự tính từ dữ liệu giá đóng cửa; các nền tảng dữ liệu chứng khoán' },
    { name: 'Mức sụt giảm tối đa (maximum drawdown)', why: 'Bổ sung điều mà độ lệch chuẩn bỏ sót: mức lỗ từ đỉnh đến đáy.', where: 'Tự tính từ chuỗi giá trị danh mục' },
    { name: 'Chỉ số VIX', why: 'Thước đo tâm lý và kỳ vọng biến động của thị trường Mỹ.', where: 'Cboe; các trang dữ liệu tài chính' },
  ],
  counterpoints: [
    'Biến động thấp kéo dài không có nghĩa rủi ro thấp: biến động có xu hướng gom cụm nhưng cũng có thể bật tăng đột ngột.',
    'Với tài sản thanh khoản thấp hoặc giá cập nhật thưa (BĐS, trái phiếu doanh nghiệp), biến động đo được thấp một cách giả tạo vì giá "được làm mượt".',
    'Rủi ro với từng nhà đầu tư là mất vốn trong thời hạn cần dùng tiền, khác với độ phân tán thống kê.',
  ],
  glossary: [
    { term: 'Biến động (volatility)', definition: 'Độ phân tán của lợi suất, thường đo bằng độ lệch chuẩn.' },
    { term: 'Biến động ngụ ý', definition: 'Mức biến động suy ra từ giá quyền chọn, phản ánh kỳ vọng thị trường.' },
    { term: 'Đuôi dày', definition: 'Phân phối có xác suất cực đoan lớn hơn phân phối chuẩn.' },
    { term: 'Gom cụm biến động', definition: 'Giai đoạn yên tĩnh và hỗn loạn thường kéo dài thành đợt.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'volatility-risk-measures-q',
    question: 'Một cổ phiếu có độ lệch chuẩn lợi suất ngày 2% (ví dụ giả định, 252 phiên). Biến động theo năm xấp xỉ bao nhiêu?',
    options: [
      { id: 'a', text: 'Khoảng 31,7% (2% × √252).', correct: true, explain: '√252 ≈ 15,87 nên 2% × 15,87 ≈ 31,7%; quy đổi theo căn bậc hai của thời gian chứ không nhân 252.' },
      { id: 'b', text: 'Khoảng 504% (2% × 252).', explain: 'Nhân tuyến tính bỏ qua việc phương sai (không phải độ lệch chuẩn) cộng dồn theo thời gian.' },
      { id: 'c', text: 'Vẫn là 2%.', explain: '2% là con số theo ngày; theo năm lớn hơn.' },
    ],
  },
  sources: [
    { title: 'Volatility (finance)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Volatility_(finance)' },
    { title: 'VIX', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/VIX' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 93,
}
