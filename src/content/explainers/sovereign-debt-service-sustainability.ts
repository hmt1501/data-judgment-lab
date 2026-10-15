import type { Explainer } from '../../../shared/explainer'

export const sovereignDebtServiceSustainability: Explainer = {
  id: 'sovereign-debt-service-sustainability',
  slug: 'sovereign-debt-service-sustainability',
  question: 'Nợ công bao nhiêu thì bền vững, và vai trò của lãi suất, tăng trưởng và thặng dư sơ cấp là gì?',
  title: 'Nợ công bền vững: lãi suất, tăng trưởng và thặng dư sơ cấp',
  topic: 'macro',
  tldr: 'Tỷ lệ nợ/GDP đổi theo hai lực: **gánh nặng lãi** so với **tốc độ tăng GDP danh nghĩa** và **cán cân sơ cấp** (thu trừ chi, chưa kể lãi). Nếu lãi suất cao hơn tăng trưởng thì nợ/GDP tự tăng và chính phủ cần thặng dư sơ cấp để giữ ổn định; nếu tăng trưởng cao hơn lãi suất thì có thêm dư địa. Không có một ngưỡng nợ/GDP "an toàn" duy nhất: câu hỏi đúng là chính phủ có đủ khả năng và cam kết điều chỉnh sơ cấp để trả nợ hay không.',
  keyPoints: [
    'Theo chương "Public Debt Sustainability" của nhóm tác giả IMF (Debrun, Ostry, Willems, Wyplosz), tỷ lệ nợ/GDP hiện tại là kết quả của **gánh nặng lãi của nợ cũ** và **thâm hụt sơ cấp hiện tại**; tác động của lãi lên tỷ lệ nợ phụ thuộc vào tăng trưởng danh nghĩa.',
    'Khi lãi suất vượt tăng trưởng, tỷ lệ nợ/GDP có xu hướng tự tăng; thặng dư sơ cấp kéo tỷ lệ nợ xuống, còn thâm hụt sơ cấp đẩy lên.',
    'Về lý thuyết, "bền vững" gắn với khả năng thanh toán: nợ hiện có không vượt giá trị hiện tại của các cán cân sơ cấp tương lai — nhưng đây là một dự báo hướng tới tương lai, khó đo trực tiếp.',
    'Ví dụ giả định (công thức xấp xỉ): nợ 60% GDP, lãi suất cao hơn tăng trưởng 1 điểm % thì cần thặng dư sơ cấp khoảng 0,57% GDP để giữ nợ/GDP không đổi; nếu tăng trưởng cao hơn lãi suất 3 điểm %, chính phủ có thể thâm hụt sơ cấp khoảng 1,7% GDP mà nợ/GDP vẫn không tăng.',
    'Thành phần nợ cũng quan trọng: nợ ngoại tệ thêm rủi ro tỷ giá, nợ ngắn hạn thêm rủi ro tái tài trợ, và các nghĩa vụ ngoài bảng cân đối (như lương hưu) không nằm trong số nợ gộp.',
  ],
  causalChain: [
    { from: 'Lãi suất bình quân của nợ tăng', to: 'Gánh nặng lãi tăng', mechanism: 'Nợ cũ được tái tài trợ ở lãi suất cao hơn nên khoản lãi hằng năm tăng dần theo kỳ hạn bình quân.' },
    { from: 'Gánh nặng lãi tăng, tăng trưởng danh nghĩa không đổi', to: 'Nợ/GDP tự tăng', mechanism: 'Phần lãi phải trả lớn hơn phần GDP tăng thêm, nên tỷ lệ nợ trên GDP đi lên ngay cả khi cán cân sơ cấp cân bằng.' },
    { from: 'Chính phủ muốn giữ nợ/GDP ổn định', to: 'Cần thặng dư sơ cấp', mechanism: 'Thặng dư sơ cấp lấy một phần thu nhập để trả lãi thay vì vay thêm, kéo tỷ lệ nợ xuống.' },
    { from: 'Tăng trưởng danh nghĩa cao hơn lãi suất', to: 'Dư địa tài khóa lớn hơn', mechanism: 'Mẫu số GDP lớn nhanh hơn nợ nên tỷ lệ nợ giảm hoặc giữ nguyên dù chính phủ vẫn thâm hụt sơ cấp nhẹ.' },
    { from: 'Niềm tin thị trường giảm (kỳ vọng không điều chỉnh được)', to: 'Lãi suất đòi hỏi tăng, vòng xoáy nợ', mechanism: 'Phần bù rủi ro tăng làm chi phí vay mới tăng, kéo gánh nặng lãi tăng, làm bài toán điều chỉnh khó hơn.' },
  ],
  vietnamImpact: [
    { group: 'Ngân sách nhà nước', effect: 'Thu ngân sách phụ thuộc nhiều vào tăng trưởng và các nguồn thu nhạy chu kỳ (đất, xuất nhập khẩu), nên khả năng tạo thặng dư sơ cấp cũng biến động theo chu kỳ.', direction: 'mixed' },
    { group: 'Đầu tư công và hạ tầng', effect: 'Dư địa vay phụ thuộc chi phí vay so với tốc độ tăng GDP; vốn đầu tư hiệu quả có thể tạo tăng trưởng nuôi chính nợ đó.', direction: 'mixed' },
    { group: 'Thị trường trái phiếu chính phủ', effect: 'Lãi suất trái phiếu chính phủ là chuẩn cho thị trường nợ; nếu kỳ vọng bền vững xấu đi, chuẩn này tăng và kéo mặt bằng lãi suất lên.', direction: 'down' },
    { group: 'Người nộp thuế tương lai', effect: 'Nợ càng lớn so với khả năng sinh thu, gánh nặng điều chỉnh (tăng thuế hoặc cắt chi) dồn về sau.', direction: 'down' },
    { group: 'Doanh nghiệp và hộ vay', effect: 'Nếu Nhà nước vay nhiều, cạnh tranh vốn có thể làm tăng lãi suất (hiệu ứng lấn át) — mức độ tùy thanh khoản hệ thống.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Nợ công/GDP và cơ cấu nợ (nội/ngoại tệ, kỳ hạn)', why: 'Cho biết quy mô và rủi ro tái tài trợ.', where: 'Bộ Tài chính; Cục Quản lý nợ và Tài chính đối ngoại; IMF, World Bank' },
    { name: 'Cán cân sơ cấp / thâm hụt ngân sách', why: 'Quyết định hướng đi của nợ/GDP so với phần lãi.', where: 'Bộ Tài chính, Cục Thống kê; IMF Fiscal Monitor' },
    { name: 'Chênh lệch lãi suất bình quân của nợ so với tăng trưởng GDP danh nghĩa (r − g)', why: 'Chỉ báo cốt lõi của động lực nợ.', where: 'Tự tính từ số liệu lãi suất trái phiếu và GDP danh nghĩa' },
    { name: 'Lãi trả nợ/thu ngân sách', why: 'Đo mức độ gánh nặng thanh toán thực.', where: 'Báo cáo ngân sách, Bộ Tài chính' },
  ],
  counterpoints: [
    'Lập luận r − g nhạy cảm với giả định: lãi suất hiệu dụng của nợ khác lãi suất thị trường hiện hành, và tăng trưởng danh nghĩa tương lai không chắc chắn.',
    'Chương IMF nhấn mạnh sự bền vững không chỉ phụ thuộc đẳng thức kế toán mà còn vào chiến lược chấp nhận được để đáp ứng ràng buộc ngân sách (không nhất thiết là vỡ nợ hay lạm phát cao).',
    'Khả năng thanh toán là một dự báo hướng tới tương lai ("known unknown") nên khó đo trực tiếp; thị trường và chính phủ có thể đánh giá khác nhau về cam kết trả nợ, vì lợi ích của việc không trả có lúc vượt chi phí, theo chương IMF.',
  ],
  glossary: [
    { term: 'Cán cân sơ cấp', definition: 'Thu ngân sách trừ chi ngân sách không kể chi trả lãi nợ.' },
    { term: 'r − g', definition: 'Chênh lệch giữa lãi suất hiệu dụng của nợ và tốc độ tăng GDP danh nghĩa.' },
    { term: 'Tái tài trợ (rollover)', definition: 'Vay mới để trả nợ cũ đến hạn.' },
    { term: 'Khả năng thanh toán (solvency)', definition: 'Nợ hiện có không vượt giá trị hiện tại của các cán cân sơ cấp tương lai.' },
    { term: 'Hiệu ứng lấn át', definition: 'Vay của Nhà nước làm tăng lãi suất và thu hẹp vốn khả dụng cho khu vực tư nhân.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'sovereign-debt-service-sustainability-q',
    question: 'Ví dụ giả định: nợ 60% GDP, lãi suất hiệu dụng 7%, tăng trưởng danh nghĩa 6%. Để nợ/GDP không đổi (xấp xỉ), chính phủ cần:',
    options: [
      { id: 'a', text: 'Thâm hụt sơ cấp khoảng 0,6% GDP.', explain: 'Ngược chiều: khi lãi suất cao hơn tăng trưởng, tỷ lệ nợ tự tăng, nên cần thặng dư chứ không phải thâm hụt.' },
      { id: 'b', text: 'Thặng dư sơ cấp khoảng 0,57% GDP.', correct: true, explain: 'Đúng: (7% − 6%)/(1,06) × 60% ≈ 0,57% GDP. Nếu r − g đổi, con số này đổi theo.' },
      { id: 'c', text: 'Không cần điều chỉnh gì vì tỷ lệ nợ 60% là ngưỡng an toàn.', explain: 'Không có ngưỡng an toàn duy nhất; động lực nợ phụ thuộc r − g và cán cân sơ cấp.' },
    ],
  },
  sources: [
    { title: 'Sovereign Debt: A Guide for Economists and Practitioners — Chapter 4: Public Debt Sustainability', publisher: 'IMF (Debrun, Ostry, Willems, Wyplosz)', url: 'https://www.imf.org/-/media/files/news/seminars/2018/091318sovdebt-conference/chapter-4-debt-sustainability.pdf' },
    { title: 'Government debt', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Government_debt' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 122,
}
