import type { Explainer } from '../../../shared/explainer'

export const realInterestRateSavings: Explainer = {
  id: 'real-interest-rate-savings',
  slug: 'real-interest-rate-savings',
  question: 'Gửi tiết kiệm có thật sự sinh lời không, khi trừ lạm phát?',
  title: 'Lãi suất thực khi gửi tiết kiệm: vì sao có lãi vẫn có thể mất tiền',
  topic: 'personal-finance',
  tldr: '**Lãi suất thực ≈ lãi suất danh nghĩa − lạm phát.** Đầu tháng 10/2026, lãi tiết kiệm 12 tháng ở nhóm ngân hàng lớn khoảng **5,9%/năm**, trong khi CPI bình quân 8 tháng đầu năm 2026 tăng **4,45%** so với cùng kỳ: lãi thực chỉ còn khoảng **1,4%/năm**. Nếu lạm phát của chính gia đình bạn cao hơn CPI, hoặc phải rút trước hạn, sức mua thực của khoản tiết kiệm có thể giảm.',
  keyPoints: [
    'Lãi danh nghĩa cho biết số tiền tăng bao nhiêu; **lãi thực** cho biết **sức mua** tăng bao nhiêu. Công thức chính xác: (1 + lãi danh nghĩa) / (1 + lạm phát) − 1; với số nhỏ có thể xấp xỉ bằng phép trừ.',
    'Ví dụ: gửi 100 triệu, lãi 5,9%/năm → cuối năm 105,9 triệu. Nếu giá cả tăng 4,45%, giỏ hàng trước đây giá 100 triệu nay giá 104,45 triệu; sức mua chỉ tăng khoảng 1,4%.',
    'Tại Việt Nam, **lãi tiền gửi tại tổ chức tín dụng được miễn thuế TNCN** (tiếp tục được giữ trong Luật Thuế TNCN 2025), nên "thuế" không làm giảm lãi; nhưng **rút trước hạn** thường chỉ được hưởng lãi suất không kỳ hạn rất thấp, kéo lãi thực xuống âm.',
    '**Lạm phát của bạn có thể khác CPI**: CPI là giỏ hàng bình quân. Trong 8 tháng đầu 2026, nhóm nhà ở, điện nước, vật liệu xây dựng tăng 6,71% – nếu chi tiêu của gia đình tập trung vào nhóm này, lãi thực của bạn thấp hơn con số bình quân.',
    'Tiết kiệm vẫn có vai trò: **an toàn vốn danh nghĩa, thanh khoản, ổn định** cho quỹ dự phòng và mục tiêu ngắn hạn. Câu hỏi đúng không phải "tiết kiệm có lời không" mà là "khoản tiền này cần làm nhiệm vụ gì".',
  ],
  causalChain: [
    { from: 'Lạm phát tăng', to: 'Sức mua của tiền giảm', mechanism: 'Cùng một số tiền mua được ít hàng hóa, dịch vụ hơn.' },
    { from: 'Sức mua của tiền giảm', to: 'Lãi suất thực của tiền gửi thu hẹp', mechanism: 'Nếu lãi danh nghĩa không tăng kịp lạm phát, phần tăng sức mua sau lãi giảm, thậm chí âm.' },
    { from: 'Lãi suất thực của tiền gửi thu hẹp', to: 'Người gửi cân nhắc chuyển sang kênh khác', mechanism: 'Một phần tiền rời ngân hàng sang vàng, chứng khoán, BĐS hoặc chứng chỉ tiền gửi lãi cao hơn để giữ sức mua.' },
    { from: 'Người gửi cân nhắc chuyển sang kênh khác', to: 'Ngân hàng tăng lãi huy động để giữ vốn', mechanism: 'Khi vốn huy động khó, ngân hàng nâng lãi tiền gửi hoặc phát hành chứng chỉ tiền gửi lãi cao, làm lãi thực cải thiện trở lại với độ trễ.' },
    { from: 'Ngân hàng tăng lãi huy động để giữ vốn', to: 'Lãi vay tăng theo', mechanism: 'Chi phí vốn cao hơn được chuyển sang lãi cho vay, ảnh hưởng tới người vay mua nhà và doanh nghiệp.' },
  ],
  vietnamImpact: [
    { group: 'Người gửi tiết kiệm ở ngân hàng lớn', effect: 'Lãi thực dương nhưng mỏng (khoảng 1–2%/năm theo số liệu đầu tháng 10/2026); đủ giữ sức mua, khó làm giàu.', direction: 'mixed' },
    { group: 'Người gửi ở ngân hàng/sản phẩm lãi cao hơn', effect: 'Lãi thực cao hơn, nhưng cần xem điều kiện (số tiền tối thiểu, kỳ hạn dài, chứng chỉ tiền gửi khó rút trước hạn).', direction: 'up' },
    { group: 'Người nghỉ hưu sống bằng tiền lãi', effect: 'Dễ bị bào mòn sức mua nếu chi tiêu tập trung vào nhóm hàng tăng giá nhanh (y tế, nhà ở, điện nước).', direction: 'down' },
    { group: 'Người giữ tiền mặt hoặc tiền gửi không kỳ hạn', effect: 'Lãi gần bằng 0 nên lãi thực âm gần bằng lạm phát; mất sức mua rõ rệt nếu giữ lâu.', direction: 'down' },
    { group: 'Ngân hàng', effect: 'Phải cạnh tranh lãi huy động khi lãi thực thấp làm người gửi rời đi; chi phí vốn tăng.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'CPI và lạm phát cơ bản', why: 'Mẫu số để tính lãi thực; lạm phát cơ bản cho biết xu hướng nền, ít nhiễu hơn.', where: 'Cục Thống kê (nso.gov.vn), công bố đầu mỗi tháng' },
    { name: 'CPI theo nhóm hàng', why: 'Giúp ước lượng "lạm phát của riêng bạn" theo cơ cấu chi tiêu gia đình.', where: 'Báo cáo CPI hằng tháng của Cục Thống kê' },
    { name: 'Lãi suất tiết kiệm 6–13 tháng', why: 'Tử số của lãi thực; so sánh giữa các ngân hàng và kỳ hạn.', where: 'Biểu lãi suất các ngân hàng; tổng hợp trên báo tài chính' },
    { name: 'Lãi suất điều hành của NHNN', why: 'Định hướng xu hướng lãi suất huy động trong các quý tới.', where: 'Website NHNN (sbv.gov.vn)' },
  ],
  counterpoints: [
    'So sánh lãi thực giữa các kênh phải tính cả **rủi ro và biến động**: chứng khoán hay vàng có thể cho lợi suất kỳ vọng cao hơn nhưng có thể lỗ lớn trong ngắn hạn, không phù hợp với tiền cần dùng sớm.',
    'Lạm phát quá khứ không chắc là lạm phát tương lai; lãi suất khóa hôm nay có thể thành lãi thực cao nếu lạm phát giảm, hoặc thấp hơn nếu lạm phát tăng.',
    'Với quỹ dự phòng, lãi thực thấp là "phí bảo hiểm" chấp nhận được để đổi lấy an toàn và thanh khoản.',
  ],
  glossary: [
    { term: 'Lãi suất danh nghĩa', definition: 'Lãi suất ghi trên sổ tiết kiệm/hợp đồng, chưa trừ lạm phát.' },
    { term: 'Lãi suất thực', definition: 'Lãi suất sau khi điều chỉnh lạm phát, đo mức tăng sức mua.' },
    { term: 'CPI', definition: 'Chỉ số giá tiêu dùng, đo biến động giá của một giỏ hàng hóa, dịch vụ tiêu dùng đại diện.' },
    { term: 'Lạm phát cơ bản', definition: 'Lạm phát sau khi loại trừ các mặt hàng biến động mạnh như lương thực, thực phẩm tươi sống, năng lượng và hàng do Nhà nước quản lý giá.' },
    { term: 'Chứng chỉ tiền gửi', definition: 'Giấy tờ có giá do ngân hàng phát hành để huy động vốn, thường lãi cao hơn tiết kiệm nhưng điều kiện rút trước hạn chặt hơn.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'real-interest-rate-savings-q',
    question: 'Chị B gửi 12 tháng lãi 6%/năm. CPI tăng 4,5%, nhưng chi tiêu chính của gia đình chị (tiền thuê nhà, điện nước, học phí) tăng khoảng 7%. Nhận định nào đúng nhất?',
    options: [
      { id: 'a', text: 'Lãi thực của chị B là 1,5%, chắc chắn giữ được sức mua.', explain: '1,5% là lãi thực theo CPI bình quân. Với cơ cấu chi tiêu riêng tăng khoảng 7%, sức mua thực tế của chị có thể giảm khoảng 1%.' },
      { id: 'b', text: 'Theo CPI chị có lãi thực khoảng 1,5%, nhưng theo chi tiêu của chính gia đình thì lãi thực có thể âm; cần tính theo "giỏ hàng" của mình.', correct: true, explain: 'Đúng. Lãi thực phụ thuộc lạm phát bạn thực sự đối mặt. Đây là lý do "gửi tiết kiệm vẫn có thể mất tiền" về sức mua, dù số dư danh nghĩa vẫn tăng.' },
      { id: 'c', text: 'Chị B đang mất tiền nên nên rút hết ra đầu tư kênh khác ngay.', explain: 'Rút trước hạn thường mất gần hết lãi; và kênh khác có rủi ro khác. Quyết định cần dựa trên mục đích của khoản tiền, thời gian cần dùng và khả năng chịu biến động.' },
    ],
  },
  sources: [
    { title: '8 tháng đầu năm 2026, CPI tăng 4,45%, lạm phát cơ bản tăng 4,24%', publisher: 'Thị trường Tài chính Tiền tệ', url: 'https://thitruongtaichinhtiente.vn/8-thang-dau-nam-2026-cpi-tang-4-45-lam-phat-co-ban-tang-4-24-85287.html' },
    { title: 'Lãi suất đầu tháng 10/2026: tiết kiệm giữ nhịp ổn định, chứng chỉ tiền gửi hút khách', publisher: 'Thị trường Tài chính Tiền tệ', url: 'https://thitruongtaichinhtiente.vn/lai-suat-dau-thang-10-2026-tiet-kiem-giu-nhip-on-dinh-chung-chi-tien-gui-hut-khach-85944.html' },
    { title: 'Cục Thống kê', publisher: 'Cục Thống kê – Bộ Tài chính', url: 'https://www.nso.gov.vn' },
    { title: 'Compound Interest Calculator', publisher: 'Investor.gov (U.S. SEC)', url: 'https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
