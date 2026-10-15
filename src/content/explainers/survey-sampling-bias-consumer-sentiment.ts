import type { Explainer } from '../../../shared/explainer'

export const surveySamplingBiasConsumerSentiment: Explainer = {
  id: 'survey-sampling-bias-consumer-sentiment',
  slug: 'survey-sampling-bias-consumer-sentiment',
  question: 'Chỉ số niềm tin tiêu dùng đáng tin đến đâu? Cỡ mẫu, thiên lệch và sai số ảnh hưởng thế nào?',
  title: 'Niềm tin tiêu dùng là số từ khảo sát: thay đổi nhỏ có thể chỉ là sai số mẫu, và thiên lệch chọn mẫu không biến mất khi tăng cỡ mẫu',
  topic: 'macro',
  tldr: 'Chỉ số niềm tin tiêu dùng được tính từ một **mẫu** người trả lời, nên có **sai số lấy mẫu** (margin of error) và có thể bị **thiên lệch** nếu mẫu không đại diện hoặc người trả lời khác người không trả lời. Một thay đổi vài điểm giữa hai kỳ có thể nằm trong sai số. Khi đọc, hãy hỏi cỡ mẫu, cách chọn, tỷ lệ trả lời, câu hỏi được diễn đạt ra sao và chỉ số đã được điều chỉnh mùa vụ chưa.',
  keyPoints: [
    '**Sai số lấy mẫu** giảm theo căn bậc hai của cỡ mẫu: muốn giảm một nửa sai số cần gấp bốn lần cỡ mẫu. Với tỷ lệ gần 50%, mẫu khoảng 1.000 người cho sai số cỡ ±3 điểm phần trăm ở mức tin cậy 95% (công thức xấp xỉ 1/√n; ví dụ tính tay). Pew Research Center nêu rõ sai số công bố thường áp dụng cho một con số riêng lẻ; sai số của chênh lệch giữa hai kết quả lớn hơn (khoảng gấp đôi trong ví dụ hai ứng viên của họ). Nghĩa là biến động giữa hai kỳ khảo sát cần lớn hơn sai số từng kỳ mới đáng tin; điều này áp dụng cho tỷ lệ phần trăm, còn chỉ số tổng hợp có cách tính sai số riêng của đơn vị công bố.',
    'Sai số mẫu chỉ là một phần. **Thiên lệch chọn mẫu** (selection bias) xảy ra khi người được khảo sát không đại diện, ví dụ khảo sát qua điện thoại bàn hoặc trực tuyến bỏ sót nhóm; tăng cỡ mẫu không sửa được thiên lệch này.',
    '**Thiên lệch không trả lời:** nếu nhóm lạc quan hoặc bi quan có xu hướng từ chối nhiều hơn, kết quả lệch dù mẫu đủ lớn. Trọng số hậu phân tầng có thể sửa một phần.',
    '**Cách đặt câu hỏi** và thứ tự câu hỏi ảnh hưởng câu trả lời; niềm tin phản ánh **cảm nhận** hơn là hành vi chi tiêu thật, nên khoảng cách giữa chỉ số và doanh thu bán lẻ là bình thường.',
    'Khi chỉ số đổi 2 điểm, hãy so với sai số và với xu hướng 3–6 tháng; nhìn các thành phần (đánh giá hiện tại, kỳ vọng) và so với dữ liệu cứng như doanh thu bán lẻ, việc làm.',
  ],
  causalChain: [
    { from: 'Chọn mẫu người trả lời', to: 'Ước lượng niềm tin của cả dân số', mechanism: 'Mẫu ngẫu nhiên có trọng số đại diện cho dân số; mẫu thuận tiện thì không.' },
    { from: 'Cỡ mẫu nhỏ', to: 'Sai số lấy mẫu lớn', mechanism: 'Kết quả dao động ngẫu nhiên giữa các kỳ, tạo thay đổi nhìn như xu hướng.' },
    { from: 'Nhóm nhất định ít trả lời', to: 'Thiên lệch không trả lời', mechanism: 'Mẫu thực nhận lệch cấu trúc so với dân số, kéo chỉ số lên hoặc xuống một cách hệ thống.' },
    { from: 'Chỉ số niềm tin thay đổi', to: 'Kỳ vọng thay đổi chi tiêu', mechanism: 'Niềm tin có thể dự báo chi tiêu ở mức độ hạn chế; mối liên hệ yếu và không ổn định.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư và nhà phân tích', effect: 'Dùng chỉ số niềm tin như tín hiệu bổ trợ cùng doanh thu bán lẻ, không thay thế.', direction: 'mixed' },
    { group: 'Doanh nghiệp tiêu dùng', effect: 'Cần xem cơ cấu mẫu (thành thị/nông thôn, thu nhập) để biết có đại diện khách hàng của mình không.', direction: 'mixed' },
    { group: 'Nhà báo, người đọc tin', effect: 'Một thay đổi vài điểm thường nằm trong sai số, không đủ để kết luận “niềm tin sụt giảm mạnh”.', direction: 'down' },
    { group: 'Cơ quan khảo sát', effect: 'Công bố cỡ mẫu, phương pháp và sai số làm tăng độ tin cậy.', direction: 'up' },
  ],
  indicators: [
    { name: 'Cỡ mẫu, phương pháp thu thập và tỷ lệ trả lời', why: 'Quyết định sai số mẫu và nguy cơ thiên lệch.', where: 'Phần phương pháp của báo cáo khảo sát (đơn vị công bố, công ty nghiên cứu thị trường)' },
    { name: 'Chỉ số niềm tin trung bình 3–6 tháng', why: 'Làm mượt nhiễu mẫu để nhìn xu hướng.', where: 'Tự tính từ chuỗi chỉ số đã công bố' },
    { name: 'Doanh thu bán lẻ và dịch vụ tiêu dùng', why: 'Dữ liệu hành vi thật để đối chiếu với cảm nhận.', where: 'Cục Thống kê' },
  ],
  counterpoints: [
    'Khảo sát vẫn cho thông tin mà số liệu hành chính không có (kỳ vọng, cảm nhận), nên không nên bỏ qua chỉ vì có sai số.',
    'Một số khảo sát dùng mẫu lớn, đã trọng số tốt, nên sai số mẫu rất nhỏ; vấn đề lúc đó chuyển sang thiên lệch và định nghĩa.',
    'Có ý kiến cho rằng niềm tin có thể là chỉ báo sớm trong một số giai đoạn khủng hoảng dù yếu ở thời kỳ bình thường; bài này chưa kiểm chứng điều đó bằng nguồn nên chỉ nêu như giả thuyết.',
  ],
  glossary: [
    { term: 'Sai số lấy mẫu (margin of error)', definition: 'Khoảng sai lệch ngẫu nhiên có thể có giữa kết quả mẫu và giá trị của toàn bộ dân số, ở một mức tin cậy.' },
    { term: 'Thiên lệch chọn mẫu', definition: 'Sai lệch hệ thống khi mẫu không đại diện cho dân số mục tiêu.' },
    { term: 'Thiên lệch không trả lời', definition: 'Sai lệch do người không trả lời khác người trả lời.' },
    { term: 'Chỉ số niềm tin tiêu dùng', definition: 'Chỉ số tổng hợp từ khảo sát về cảm nhận hiện tại và kỳ vọng tương lai của hộ gia đình.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'survey-sampling-bias-consumer-sentiment-q',
    question: 'Chỉ số niềm tin tiêu dùng giảm 2 điểm so với tháng trước; khảo sát có sai số khoảng ±3 điểm. Kết luận hợp lý?',
    options: [
      { id: 'a', text: 'Niềm tin sụt giảm rõ rệt.', explain: 'Mức giảm nhỏ hơn sai số, chưa đủ để phân biệt với dao động ngẫu nhiên.' },
      { id: 'b', text: 'Chưa đủ bằng chứng; nên xem xu hướng nhiều kỳ và dữ liệu chi tiêu thật.', correct: true, explain: 'Đúng. Thay đổi nằm trong sai số, nên cần thêm kỳ và nguồn dữ liệu khác.' },
      { id: 'c', text: 'Khảo sát chắc chắn sai nên bỏ qua.', explain: 'Có sai số không có nghĩa là vô giá trị; chỉ cần đọc đúng giới hạn.' },
    ],
  },
  sources: [
    { title: 'Understanding the margin of error in election polls', publisher: 'Pew Research Center', url: 'https://www.pewresearch.org/short-reads/2016/09/08/understanding-the-margin-of-error-in-election-polls/' },
    { title: 'Margin of error', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Margin_of_error' },
    { title: 'Selection bias', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Selection_bias' },
    { title: 'Consumer confidence index', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Consumer_confidence_index' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 118,
}
