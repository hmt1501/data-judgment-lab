import type { Explainer } from '../../../shared/explainer'

export const correlationVsCausationEconomicClaims: Explainer = {
  id: 'correlation-vs-causation-economic-claims',
  slug: 'correlation-vs-causation-economic-claims',
  question: 'Khi một bài viết nói “A làm B tăng”, làm sao biết đó là nhân quả chứ không chỉ tương quan?',
  title: 'Hai chuỗi số cùng đi lên chưa chứng minh gì: cần loại trừ yếu tố thứ ba, đảo chiều nhân quả và trùng hợp',
  topic: 'macro',
  tldr: 'Tương quan chỉ cho biết hai biến thay đổi cùng nhau; nhân quả cần thêm bằng chứng rằng thay đổi A **dẫn đến** thay đổi B. Ba lỗi phổ biến: **biến gây nhiễu** (yếu tố thứ ba làm cả hai đổi), **đảo chiều nhân quả** (B mới là nguyên nhân), và **trùng hợp** do chuỗi thời gian có xu hướng chung. Khi đọc tuyên bố kinh tế, hãy hỏi chúng được kiểm chứng bằng thí nghiệm, thí nghiệm tự nhiên hay chỉ so sánh số liệu.',
  keyPoints: [
    'Câu cảnh báo kinh điển: “correlation does not imply causation”. Tương quan cao có thể là bằng chứng hỗ trợ nhưng không đủ để kết luận.',
    '**Biến gây nhiễu (confounding):** ví dụ giả định, doanh số kem và số vụ đuối nước cùng tăng vào mùa hè vì thời tiết nóng, không phải kem gây đuối nước. Trong kinh tế: tăng trưởng tín dụng và giá nhà cùng tăng có thể cùng do kỳ vọng tăng trưởng.',
    '**Đảo chiều nhân quả:** nước giàu chi nhiều cho giáo dục, nhưng chi nhiều cho giáo dục có làm giàu hay giàu hơn nên chi nhiều? Cần dữ liệu theo thời gian và thiết kế phân tích để tách.',
    '**Tương quan giả (spurious):** hai chuỗi thời gian cùng có xu hướng tăng dài hạn có thể tương quan cao dù không liên quan; nên so sánh **mức thay đổi** (sai phân) và kiểm tra ổn định qua nhiều giai đoạn.',
    'Bằng chứng nhân quả mạnh hơn đến từ thí nghiệm ngẫu nhiên, thí nghiệm tự nhiên (thay đổi chính sách ở một nhóm), hoặc so sánh trước–sau có nhóm đối chứng; dữ liệu quan sát cần giả định rõ ràng. Ủy ban Nobel Kinh tế 2021 (Card, Angrist, Imbens) mô tả thí nghiệm tự nhiên là tình huống mà sự kiện ngẫu nhiên hoặc thay đổi chính sách khiến các nhóm người bị đối xử khác nhau, giống thử nghiệm lâm sàng.',
  ],
  causalChain: [
    { from: 'Thấy hai chỉ số cùng thay đổi', to: 'Đặt giả thuyết A gây ra B', mechanism: 'Tương quan gợi ý quan hệ nhưng chưa nói chiều và cơ chế.' },
    { from: 'Tìm yếu tố thứ ba có thể ảnh hưởng cả hai', to: 'Kiểm soát hoặc loại trừ biến gây nhiễu', mechanism: 'Nếu quan hệ biến mất khi kiểm soát yếu tố thứ ba, đó là tương quan do nhiễu.' },
    { from: 'Kiểm tra thứ tự thời gian và cơ chế', to: 'Loại trừ đảo chiều nhân quả', mechanism: 'Nguyên nhân phải xảy ra trước kết quả và có cơ chế hợp lý; kỳ vọng có thể làm đảo ngược thứ tự bề ngoài.' },
    { from: 'Có nhóm đối chứng hoặc biến thiên ngoại sinh', to: 'Ước lượng được tác động nhân quả', mechanism: 'Thay đổi chính sách ở một nhóm mà không ở nhóm kia giúp tách tác động khỏi xu hướng chung.' },
  ],
  vietnamImpact: [
    { group: 'Người đọc tin tức kinh tế', effect: 'Tin “X tăng khiến Y tăng” cần được hỏi lại về nhiễu và thời gian trước khi hành động.', direction: 'mixed' },
    { group: 'Nhà đầu tư', effect: 'Chiến lược dựa trên tương quan quá khứ có thể thất bại khi tương quan chỉ là trùng hợp.', direction: 'down' },
    { group: 'Nhà hoạch định chính sách, doanh nghiệp', effect: 'Đánh giá chính sách cần nhóm đối chứng; so trước–sau đơn thuần dễ nhầm với xu hướng chung.', direction: 'mixed' },
    { group: 'Người làm dữ liệu', effect: 'Biết kiểm tra nhiễu và đảo chiều giúp báo cáo trung thực hơn.', direction: 'up' },
  ],
  indicators: [
    { name: 'Hệ số tương quan và độ ổn định qua giai đoạn', why: 'Quan hệ chỉ đúng trong một giai đoạn là cảnh báo.', where: 'Tự tính từ chuỗi của Cục Thống kê, Ngân hàng Nhà nước, World Bank' },
    { name: 'Chuỗi theo mức thay đổi (tốc độ tăng) thay vì mức tuyệt đối', why: 'Loại bỏ xu hướng chung gây tương quan giả.', where: 'Số liệu theo năm/quý của Cục Thống kê' },
    { name: 'Nhóm đối chứng hoặc nhóm không áp dụng chính sách', why: 'Cơ sở để tách tác động chính sách khỏi xu hướng.', where: 'Thiết kế nghiên cứu; báo cáo đánh giá chính sách' },
  ],
  counterpoints: [
    'Không có thí nghiệm không có nghĩa là không thể kết luận: nhiều kết luận kinh tế dựa vào dữ liệu quan sát với phương pháp chặt chẽ.',
    'Tương quan vẫn hữu ích cho dự báo dù không phải nhân quả, miễn là không dùng nó để can thiệp.',
    'Tuyệt đối hóa nghi ngờ cũng sai: khi cơ chế rõ, bằng chứng nhất quán nhiều nơi, kết luận nhân quả có thể hợp lý.',
  ],
  glossary: [
    { term: 'Tương quan', definition: 'Mức độ hai biến thay đổi cùng nhau.' },
    { term: 'Biến gây nhiễu', definition: 'Yếu tố thứ ba ảnh hưởng đến cả hai biến, tạo quan hệ giả.' },
    { term: 'Đảo chiều nhân quả', definition: 'Kết quả thực ra là nguyên nhân của biến mà ta cho là nguyên nhân.' },
    { term: 'Tương quan giả', definition: 'Quan hệ thống kê giữa hai biến không có liên hệ nhân quả thực, thường do xu hướng chung hoặc trùng hợp.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'correlation-vs-causation-economic-claims-q',
    question: 'Một báo cáo thấy các tỉnh có nhiều cửa hàng tiện lợi hơn thì thu nhập bình quân cao hơn, và kết luận “mở thêm cửa hàng làm tăng thu nhập”. Điều đầu tiên cần hỏi?',
    options: [
      { id: 'a', text: 'Có bao nhiêu tỉnh trong mẫu để tính tương quan?', explain: 'Cỡ mẫu quan trọng nhưng không giải quyết vấn đề chiều nhân quả.' },
      { id: 'b', text: 'Có phải thu nhập cao thu hút cửa hàng đến (đảo chiều), hoặc đô thị hóa làm cả hai tăng (nhiễu)?', correct: true, explain: 'Đúng. Đảo chiều nhân quả và biến thứ ba là hai cách giải thích hợp lý nhất cần loại trừ.' },
      { id: 'c', text: 'Tương quan có cao hơn 0,5 không?', explain: 'Mức tương quan cao không chứng minh nhân quả.' },
    ],
  },
  sources: [
    { title: 'Press release: The Prize in Economic Sciences 2021 (natural experiments and causal relationships)', publisher: 'NobelPrize.org', url: 'https://www.nobelprize.org/prizes/economic-sciences/2021/press-release/' },
    { title: 'Correlation does not imply causation', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation' },
    { title: 'Confounding', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Confounding' },
    { title: 'Spurious relationship', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Spurious_relationship' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 117,
}
