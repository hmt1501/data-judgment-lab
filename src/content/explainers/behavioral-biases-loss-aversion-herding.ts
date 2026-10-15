import type { Explainer } from '../../../shared/explainer'

export const behavioralBiasesLossAversionHerding: Explainer = {
  id: 'behavioral-biases-loss-aversion-herding',
  slug: 'behavioral-biases-loss-aversion-herding',
  question: 'Vì sao nhà đầu tư cá nhân hay giữ cổ phiếu lỗ, bán sớm cổ phiếu lãi và chạy theo đám đông?',
  title: 'Sợ lỗ và bầy đàn là thiên kiến có hệ thống; cách chữa là quy tắc viết sẵn, không phải ý chí',
  topic: 'personal-finance',
  tldr: 'Lý thuyết triển vọng cho rằng người ta cảm nhận **mất mát đau hơn lợi ích cùng quy mô**, nên có xu hướng giữ khoản lỗ để chờ hòa vốn và chốt lời quá sớm. **Hành vi bầy đàn** làm nhiều người cùng mua lúc giá tăng và cùng bán lúc hoảng loạn. Cả hai kéo lợi suất thực nhận được xuống dưới lợi suất của chính tài sản; giảm thiểu bằng quy tắc quyết định định trước.',
  keyPoints: [
    '**Sợ lỗ (loss aversion):** trong thực nghiệm, tổn thất được đánh giá nặng hơn khoảng lợi cùng quy mô. Đây là một phần của lý thuyết triển vọng do Kahneman và Tversky xây dựng (Ủy ban Nobel nêu lý thuyết này trong thông cáo trao giải 2002 cho Kahneman); mức độ khác nhau theo người và bối cảnh, và bài này không nêu hệ số cụ thể.',
    '**Hiệu ứng thiên lệch xử lý (disposition effect):** xu hướng giữ cổ phiếu lỗ vì “chưa bán thì chưa lỗ” và bán cổ phiếu lãi sớm để “khóa lợi nhuận”. Odean (1998, Journal of Finance), phân tích sổ giao dịch của khoảng 10.000 tài khoản tại một công ty môi giới Mỹ, thấy nhà đầu tư ưa chốt khoản lãi hơn khoản lỗ và hành vi này không giải thích được bằng tái cân bằng danh mục hay chi phí giao dịch, cũng không được kết quả đầu tư sau đó biện minh. Đó là bằng chứng ở một thị trường và một giai đoạn, không phải quy luật cho mọi người.',
    '**Bầy đàn:** dựa vào hành động của người khác thay cho phân tích riêng, nhất là khi thông tin không chắc chắn; làm giá lệch xa khỏi giá trị cơ bản rồi đảo chiều đột ngột.',
    'Hãy kiểm tra bằng dữ liệu của chính bạn: xuất sổ giao dịch, so lợi suất theo từng lệnh, thời gian nắm giữ khoản lãi so với khoản lỗ. Một mẫu nhỏ chưa đủ kết luận, nhưng thiên lệch sẽ lộ ra nếu lặp lại.',
    'Biện pháp thực tế: kế hoạch mua–bán viết trước (điều kiện thoát), phân bổ cố định rồi tái cân bằng định kỳ, mua đều đặn, hạn chế xem giá hằng ngày.',
  ],
  causalChain: [
    { from: 'Giá giảm dưới giá vốn', to: 'Cảm giác lỗ gây khó chịu mạnh', mechanism: 'Giá vốn trở thành điểm tham chiếu; không muốn chốt lỗ vì chốt lỗ biến tổn thất trên giấy thành tổn thất đã xảy ra.' },
    { from: 'Không muốn chốt lỗ, vội chốt lãi', to: 'Danh mục dồn vào cổ phiếu yếu', mechanism: 'Cổ phiếu thắng bị bán sớm, cổ phiếu thua được giữ, nên lợi suất trung bình giảm.' },
    { from: 'Thị trường tăng nhanh, nhiều người kể về lợi nhuận', to: 'Bầy đàn mua vào', mechanism: 'Sợ bỏ lỡ và bằng chứng xã hội làm người ta mua dù định giá đã cao.' },
    { from: 'Giá đảo chiều, tin xấu lan nhanh', to: 'Bán tháo đồng loạt', mechanism: 'Mỗi người bán theo người khác, đẩy giá thấp hơn giá trị, rồi lại khóa lỗ đúng đáy.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân chứng khoán', effect: 'Nhà đầu tư cá nhân chiếm khoảng 80% giá trị giao dịch toàn thị trường (số liệu FiinTrade năm 2024 do báo Nhà đầu tư dẫn), nên giao dịch theo đám đông có thể khuếch đại biến động; vay ký quỹ làm tăng áp lực bán bắt buộc.', direction: 'down' },
    { group: 'Người đầu tư bất động sản, vàng', effect: 'Chạy theo “sốt” theo tin đồn dễ mua ở đỉnh; vị thế lỗ khó thoát do thanh khoản thấp.', direction: 'down' },
    { group: 'Người đầu tư đều đặn theo kế hoạch', effect: 'Quy tắc cố định giảm tác động cảm xúc và tránh canh thời điểm.', direction: 'up' },
    { group: 'Người cố vấn/tư vấn tài chính', effect: 'Hiểu thiên kiến giúp thiết kế quy trình thay vì chỉ đưa lời khuyên.', direction: 'up' },
  ],
  indicators: [
    { name: 'Tỷ lệ lệnh lãi/lỗ và thời gian nắm giữ trung bình của từng nhóm', why: 'Nếu giữ lỗ lâu hơn lãi nhiều thì dấu hiệu của thiên lệch xử lý.', where: 'Sao kê giao dịch tại công ty chứng khoán của bạn' },
    { name: 'Dòng tiền mở tài khoản mới và thanh khoản thị trường', why: 'Tăng đột biến thường đi cùng tâm lý đám đông.', where: 'Trung tâm Lưu ký Chứng khoán Việt Nam (VSDC), HOSE, HNX' },
    { name: 'Dư nợ margin/vốn chủ sở hữu của các công ty chứng khoán', why: 'Đòn bẩy cao làm hành vi bầy đàn thành bán bắt buộc.', where: 'Ủy ban Chứng khoán Nhà nước, báo cáo tài chính công ty chứng khoán' },
  ],
  counterpoints: [
    'Một số hành vi “lệch” có thể hợp lý: giữ cổ phiếu lỗ có thể đúng nếu định giá cơ bản không đổi; đây là vấn đề của lý do, không của hành động.',
    'Mức độ sợ lỗ trong các thí nghiệm khác nhau theo bối cảnh và nền văn hóa; không nên áp con số nào làm quy luật.',
    'Theo đám đông đôi khi mang thông tin thật (nhiều người có thông tin tốt cùng hành động), nên khó tách khỏi lệch lạc đơn thuần.',
  ],
  glossary: [
    { term: 'Lý thuyết triển vọng', definition: 'Mô hình hành vi chọn lựa dưới rủi ro, trong đó người ta đánh giá lợi/lỗ so với điểm tham chiếu và nặng nề với lỗ.' },
    { term: 'Sợ lỗ', definition: 'Xu hướng thấy mất mát nặng hơn lợi ích cùng quy mô.' },
    { term: 'Hành vi bầy đàn', definition: 'Hành động theo số đông thay vì theo phân tích riêng.' },
    { term: 'Bán bắt buộc', definition: 'Bán do bị yêu cầu thêm ký quỹ hoặc bị xử lý tài sản đảm bảo.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'behavioral-biases-loss-aversion-herding-q',
    question: 'Một nhà đầu tư thường bán cổ phiếu khi lãi 10% nhưng giữ cổ phiếu lỗ 30% “chờ về bờ”. Biện pháp nào xử lý đúng gốc vấn đề?',
    options: [
      { id: 'a', text: 'Tự nhủ cố gắng kiềm chế cảm xúc hơn.', explain: 'Ý chí khó bền; nên thiết kế quy tắc để giảm quyết định theo cảm xúc.' },
      { id: 'b', text: 'Viết sẵn điều kiện thoát (theo lý do mua và mức lỗ chấp nhận) và định kỳ rà soát từng vị thế như thể mới quyết định mua lại.', correct: true, explain: 'Đúng. Quy tắc viết trước và câu hỏi “hôm nay có mua lại không” loại bỏ điểm tham chiếu giá vốn.' },
      { id: 'c', text: 'Chỉ mua cổ phiếu đang được nhiều người bàn tán.', explain: 'Đó là bầy đàn, thiên kiến thứ hai chứ không phải giải pháp.' },
    ],
  },
  sources: [
    { title: 'Are Investors Reluctant to Realize Their Losses? (Odean, Journal of Finance 1998)', publisher: 'Haas School of Business, UC Berkeley (tác giả Terrance Odean)', url: 'https://faculty.haas.berkeley.edu/odean/papers/disposition/disposition.html' },
    { title: 'Press release: The Prize in Economic Sciences 2002 (Kahneman, Smith)', publisher: 'NobelPrize.org', url: 'https://www.nobelprize.org/prizes/economic-sciences/2002/press-release/' },
    { title: 'Nâng “chất” nhà đầu tư, hướng thị trường đến sự bền vững', publisher: 'Báo Nhà đầu tư', url: 'https://nhadautu.vn/nang-chat-nha-dau-tu-huong-thi-truong-den-su-ben-vung-d97307.html' },
    { title: 'Loss aversion', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Loss_aversion' },
    { title: 'Prospect theory', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Prospect_theory' },
    { title: 'Herd behavior', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Herd_behavior' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 108,
}
