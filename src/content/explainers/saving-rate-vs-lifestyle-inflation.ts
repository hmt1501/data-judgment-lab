import type { Explainer } from '../../../shared/explainer'

export const savingRateVsLifestyleInflation: Explainer = {
  id: 'saving-rate-vs-lifestyle-inflation',
  slug: 'saving-rate-vs-lifestyle-inflation',
  question: 'Thu nhập tăng mà tiền tiết kiệm không tăng: "lạm phát lối sống" là gì?',
  title: 'Tỷ lệ tiết kiệm và "lạm phát lối sống"',
  topic: 'personal-finance',
  tldr: '**Lạm phát lối sống** (lifestyle creep) là khi chi tiêu tăng theo thu nhập, biến thứ từng là "xa xỉ" thành "thiết yếu", nên khoản tiết kiệm không tăng dù lương tăng. Chỉ số cần nhìn là **tỷ lệ tiết kiệm** (phần thu nhập để dành), không phải số tiền tiết kiệm tuyệt đối. Giữ cố định tỷ lệ, hoặc dành một phần cố định của mỗi lần tăng lương, là cách đơn giản để thu nhập cao hơn thật sự biến thành tài sản.',
  keyPoints: [
    'Lạm phát lối sống xảy ra khi thu nhập tăng (tăng lương, trả xong khoản vay) và chi tiêu tăng theo, khiến tiết kiệm đứng yên; dấu hiệu là khó dành dụm và nợ tăng (theo Wikipedia).',
    '**Tỷ lệ tiết kiệm** = tiết kiệm / thu nhập. Khi thu nhập tăng mà tiền tiết kiệm giữ nguyên, tỷ lệ này **giảm**, dù bạn "kiếm nhiều hơn".',
    'Một blogger tài chính cá nhân gợi ý bắt đầu với tỷ lệ hai chữ số trên thu nhập trước thuế rồi tăng dần tới khoảng 15–30% tùy nhu cầu và mục tiêu; đây là **quan điểm cá nhân, không phải chuẩn**.',
    'Chi tiêu có chi phí lặp lại (thuê bao, thành viên, trả góp) khiến lạm phát lối sống khó đảo ngược hơn chi tiêu một lần.',
    'Không cần triệt tiêu mọi nâng cấp lối sống: vấn đề là để chi tiêu hấp thụ **toàn bộ** phần thu nhập tăng thêm.',
  ],
  causalChain: [
    { from: 'Thu nhập tăng (tăng lương, thưởng, thêm nguồn thu)', to: 'Chi tiêu tăng theo', mechanism: 'Có thêm tiền nhàn rỗi, so sánh với người xung quanh và tâm lý "xứng đáng" khiến mức chi tiêu được coi là bình thường nâng lên.' },
    { from: 'Chi tiêu nâng lên thành mức mới', to: 'Tiết kiệm không tăng, tỷ lệ tiết kiệm giảm', mechanism: 'Ví dụ giả định: thu nhập 20 triệu/tháng, tiết kiệm 4 triệu (20%). Lương lên 30 triệu nhưng vẫn chỉ để dành 4 triệu thì tỷ lệ còn khoảng 13%.' },
    { from: 'Tỷ lệ tiết kiệm thấp kéo dài', to: 'Tích lũy tài sản chậm, dễ phải vay khi có cú sốc', mechanism: 'Quỹ dự phòng và vốn đầu tư dài hạn mỏng, trong khi chi phí cố định đã cao.' },
    { from: 'Đặt quy tắc: giữ tỷ lệ hoặc trích phần cố định của mỗi lần tăng lương', to: 'Tiết kiệm tăng cùng thu nhập', mechanism: 'Nếu giữ 20% thì khi lên 30 triệu sẽ để dành 6 triệu (ví dụ giả định); quy trình tự động hóa giúp tránh phải "nhớ để dành".' },
  ],
  vietnamImpact: [
    { group: 'Người đi làm đang tăng lương theo thâm niên', effect: 'Dễ nâng chuẩn chi (nhà thuê, xe, ăn ngoài) theo từng nấc lương; nên quyết định trước phần nào của mức tăng dành cho tiết kiệm.', direction: 'mixed' },
    { group: 'Hộ gia đình có khoản vay mua nhà/xe', effect: 'Khoản trả góp cố định làm "cứng" chi tiêu; tăng thu nhập là cơ hội trả nợ sớm thay vì tăng chi tiêu.', direction: 'mixed' },
    { group: 'Người trẻ mới đi làm', effect: 'Thói quen hình thành ở giai đoạn thu nhập thấp thường kéo theo khi thu nhập tăng; đặt tỷ lệ tiết kiệm sớm tạo lợi thế dài hạn.', direction: 'up' },
    { group: 'Người gần nghỉ hưu', effect: 'Chi tiêu đã nâng cao khó cắt giảm khi thu nhập giảm; cần so mức chi hiện tại với nguồn thu sau nghỉ hưu.', direction: 'down' },
  ],
  indicators: [
    { name: 'Tỷ lệ tiết kiệm cá nhân/hộ gia đình', why: 'Chỉ số cốt lõi; theo dõi theo năm để thấy xu hướng.', where: 'Tự tính từ sao kê ngân hàng và bảng chi tiêu' },
    { name: 'Chi phí cố định hằng tháng / thu nhập', why: 'Phản ánh mức "cứng" của lối sống, khó giảm khi thu nhập sụt.', where: 'Bảng ngân sách cá nhân' },
    { name: 'Tốc độ tăng chi tiêu so với tốc độ tăng thu nhập', why: 'Chi tiêu tăng nhanh hơn thu nhập là dấu hiệu rõ nhất của lạm phát lối sống.', where: 'So sánh hai năm liên tiếp trong sổ chi tiêu' },
  ],
  counterpoints: [
    'Một phần chi tiêu tăng là hợp lý (nhà ở tốt hơn, sức khỏe, giáo dục, gia đình thêm người); mục tiêu không phải sống kham khổ.',
    'Tỷ lệ "chuẩn" thay đổi theo mục tiêu, tuổi, nợ nần và khu vực; các con số 15–30% chỉ là gợi ý của cá nhân tác giả, không phải khuyến nghị chung.',
    'Tiết kiệm cao không đồng nghĩa hiệu quả nếu để tiền nhàn rỗi mất giá trước lạm phát; cần xét cả nơi đặt tiền.',
  ],
  glossary: [
    { term: 'Lạm phát lối sống', definition: 'Chi tiêu tăng theo thu nhập khiến tiết kiệm không tăng.' },
    { term: 'Tỷ lệ tiết kiệm', definition: 'Phần thu nhập được dành lại, tính theo phần trăm.' },
    { term: 'Chi phí cố định', definition: 'Khoản chi lặp lại đều đặn như tiền thuê nhà, trả góp, thuê bao.' },
    { term: 'Thu nhập khả dụng', definition: 'Thu nhập sau thuế và các khoản bắt buộc.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'saving-rate-vs-lifestyle-inflation-q',
    question: 'Sau 5 năm, lương bạn tăng từ 20 lên 30 triệu/tháng nhưng vẫn để dành 4 triệu/tháng (ví dụ giả định). Điều nào đúng nhất?',
    options: [
      { id: 'a', text: 'Tỷ lệ tiết kiệm giảm từ 20% xuống khoảng 13%; chi tiêu đã hấp thụ gần hết phần tăng thêm.', correct: true, explain: 'Đúng. 4/20 = 20% còn 4/30 ≈ 13,3%; chi tiêu tăng từ 16 lên 26 triệu, tức hấp thụ cả 10 triệu tăng thêm.' },
      { id: 'b', text: 'Tiết kiệm vẫn 4 triệu nên tình hình tài chính không đổi.', explain: 'Số tuyệt đối không đổi nhưng thu nhập và chi phí đã tăng, nên khả năng chịu cú sốc tương đối kém đi.' },
      { id: 'c', text: 'Chỉ cần cắt toàn bộ phần chi tăng thêm là xong.', explain: 'Không cần cực đoan; chỉ cần dành một phần cố định của mức tăng cho tiết kiệm.' },
    ],
  },
  sources: [
    { title: 'Lifestyle creep', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Lifestyle_creep' },
    { title: "What's the Right Savings Rate?", publisher: 'A Wealth of Common Sense (blog)', url: 'https://awealthofcommonsense.com/2024/05/whats-the-right-savings-rate/' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 142,
}
