import type { Explainer } from '../../../shared/explainer'

export const feesTaxesDragLongTermReturns: Explainer = {
  id: 'fees-taxes-drag-long-term-returns',
  slug: 'fees-taxes-drag-long-term-returns',
  question: 'Phí và thuế bào mòn lợi suất đầu tư dài hạn đến mức nào?',
  title: 'Phí và thuế: "vết cắt nhỏ" làm hụt lợi suất dài hạn',
  topic: 'personal-finance',
  tldr: 'Phí quản lý quỹ, phí giao dịch và thuế được trừ **mỗi năm** trên tài sản, nên chúng không chỉ lấy đi phần phí mà còn lấy luôn phần lãi kép mà số tiền đó lẽ ra tạo ra. Chênh nhau 1 điểm phần trăm mỗi năm nghe nhỏ, nhưng sau vài thập kỷ có thể thành khoảng cách rất lớn ở số dư cuối. Phí là thứ nhà đầu tư kiểm soát được, còn lợi suất thị trường thì không.',
  keyPoints: [
    '**Tỷ lệ chi phí (expense ratio)** là phần trăm tài sản quỹ dùng cho quản lý, vận hành, tiếp thị và chi phí khác mỗi năm; cổ đông gánh khoản này, và nó chưa gồm hoa hồng giao dịch hay phí theo hiệu suất (theo Wikipedia).',
    'Một nghiên cứu trên arXiv (Levine) cho thấy phí AUM ε%/năm trong N năm làm mất xấp xỉ **N × ε%** giá trị so với cùng khoản đầu tư không phí; đây là công thức xấp xỉ, nên dùng để ước lượng bậc độ lớn chứ không phải số chính xác.',
    'Phí tác động qua **lãi kép ngược**: mỗi đồng phí bị trừ hôm nay là đồng không còn sinh lãi trong những năm sau.',
    'Phí cao không bảo đảm kết quả tốt hơn: quỹ phí thấp hay phí cao đều chịu cùng biến động thị trường, nhưng khoản phí thì chắc chắn bị trừ.',
    'Thuế và tần suất giao dịch cũng là "phí": mua bán nhiều làm tăng chi phí giao dịch và có thể làm tăng thuế phải nộp, nên cần xét **lợi suất sau phí và sau thuế**.',
  ],
  causalChain: [
    { from: 'Quỹ/nhà môi giới thu phí theo % tài sản mỗi năm', to: 'Lợi suất ròng thấp hơn lợi suất gộp đúng bằng phí', mechanism: 'Phí được trừ dần vào giá trị tài sản (với quỹ, thường trừ ngay trong giá trị tài sản ròng), nên nhà đầu tư thường không thấy một "hóa đơn" riêng.' },
    { from: 'Lợi suất ròng thấp hơn mỗi năm', to: 'Số dư cuối kỳ thấp hơn nhiều hơn phần phí cộng dồn', mechanism: 'Lãi kép nhân theo cấp số nhân: chênh lệch 1 điểm % mỗi năm tích lũy thành khoảng cách lớn khi kỳ hạn dài.' },
    { from: 'Giao dịch thường xuyên', to: 'Chi phí giao dịch và thuế tăng', mechanism: 'Mỗi lần mua bán tốn phí môi giới và chênh lệch giá mua–bán; các khoản thu nhập từ đầu tư có thể phát sinh thuế khi thực hiện.' },
    { from: 'Chọn sản phẩm có phí thấp, giao dịch ít', to: 'Giữ lại nhiều lợi suất hơn', mechanism: 'Đây là biến số duy nhất nhà đầu tư kiểm soát được; không cần dự báo thị trường.' },
  ],
  vietnamImpact: [
    { group: 'Người mua chứng chỉ quỹ mở', effect: 'Cần đọc cả phí quản lý và phí mua/bán chứng chỉ quỹ trong bản cáo bạch; hai quỹ cùng danh mục nhưng phí khác nhau sẽ cho kết quả sau nhiều năm khác nhau.', direction: 'down' },
    { group: 'Người đầu tư theo kế hoạch định kỳ dài hạn', effect: 'Kỳ hạn càng dài, phí càng đáng kể; chọn sản phẩm chi phí thấp có tác dụng rõ hơn khi nắm giữ hàng chục năm.', direction: 'mixed' },
    { group: 'Nhà đầu tư giao dịch tích cực', effect: 'Phí giao dịch, thuế và chênh lệch giá cộng dồn qua nhiều lần mua bán có thể ăn mòn phần lớn lợi thế nếu có.', direction: 'down' },
    { group: 'Người mua sản phẩm bảo hiểm/đầu tư bán kèm', effect: 'Nhiều lớp phí (phí ban đầu, phí quản lý, phí rút sớm) khó thấy hơn quỹ thuần túy; nên hỏi tổng chi phí hằng năm.', direction: 'down' },
  ],
  indicators: [
    { name: 'Tỷ lệ chi phí hằng năm của sản phẩm', why: 'Đo chi phí nắm giữ lặp lại mỗi năm.', where: 'Bản cáo bạch và báo cáo của công ty quản lý quỹ; trang thông tin quỹ' },
    { name: 'Phí mua/bán lại và phí chuyển đổi', why: 'Chi phí một lần có thể làm hụt lợi suất nếu giữ ngắn hạn.', where: 'Bản cáo bạch, biểu phí của đại lý phân phối' },
    { name: 'Tỷ lệ vòng quay danh mục (nếu có)', why: 'Danh mục đảo nhiều thường kéo theo chi phí giao dịch cao.', where: 'Báo cáo thường niên của quỹ' },
    { name: 'Biểu phí giao dịch của công ty chứng khoán', why: 'Tính chi phí khứ hồi cho mỗi lần mua – bán.', where: 'Website công ty chứng khoán; thông báo của Sở giao dịch' },
  ],
  counterpoints: [
    'Phí thấp không phải lúc nào cũng tốt hơn: một quỹ chủ động có thể đáng tiền nếu mang lại lợi suất sau phí cao hơn thật sự và bền, dù việc duy trì lợi thế đó thường không dễ (bài này không có nguồn để định lượng).',
    'Công thức N × ε% chỉ là xấp xỉ; chênh lệch thực tế phụ thuộc lợi suất giả định và cách tính phí.',
    'Chi phí không phải thứ duy nhất: rủi ro, thanh khoản, mức độ đa dạng hóa và kỷ luật của nhà đầu tư thường quyết định kết quả nhiều hơn một chênh lệch phí nhỏ.',
  ],
  glossary: [
    { term: 'Tỷ lệ chi phí (expense ratio)', definition: 'Phần trăm tài sản quỹ dùng để chi trả quản lý và vận hành mỗi năm.' },
    { term: 'Phí AUM', definition: 'Phí tính theo phần trăm tài sản được quản lý, trừ định kỳ.' },
    { term: 'Lãi kép', definition: 'Lãi sinh ra từ cả vốn gốc lẫn lãi đã tích lũy.' },
    { term: 'Lợi suất gộp / ròng', definition: 'Lợi suất trước và sau khi trừ phí (và thuế).' },
    { term: 'Chênh lệch mua–bán', definition: 'Khoảng cách giữa giá mua và giá bán tức thời, một dạng chi phí giao dịch ẩn.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'fees-taxes-drag-long-term-returns-q',
    question: 'Hai quỹ có cùng danh mục, lợi suất gộp 7%/năm; quỹ A phí 0,2%/năm, quỹ B phí 1,5%/năm, đầu tư 100 triệu trong 30 năm (ví dụ giả định). Nhận định nào hợp lý?',
    options: [
      { id: 'a', text: 'Chênh phí 1,3 điểm % chỉ làm khác nhau khoảng 1,3% số dư cuối.', explain: 'Sai. Phí trừ mỗi năm và làm mất cả lãi kép; chênh lệch cộng dồn lớn hơn nhiều so với 1,3% số dư.' },
      { id: 'b', text: 'Quỹ A có số dư cuối cao hơn khoảng 220 triệu, tức hơn B khoảng 44%.', correct: true, explain: 'Đúng với ví dụ giả định: A ≈ 100 × 1,068^30 ≈ 720 triệu, B ≈ 100 × 1,055^30 ≈ 498 triệu; chênh khoảng 221 triệu. Đây là số minh họa, không phải dự báo.' },
      { id: 'c', text: 'Phí chỉ quan trọng khi thị trường giảm.', explain: 'Phí bị trừ trong mọi điều kiện, tăng hay giảm; thị trường giảm chỉ khiến người ta cảm nhận rõ hơn.' },
    ],
  },
  sources: [
    { title: 'Investment AUM Fee Costs: Evaluating a Simple Formula (arXiv:2107.00837)', publisher: 'Joseph Levine, arXiv', url: 'https://arxiv.org/abs/2107.00837' },
    { title: 'Expense ratio', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Expense_ratio' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 140,
}
