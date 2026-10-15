import type { Explainer } from '../../../shared/explainer'

export const fiscalVsMonetaryPolicyMix: Explainer = {
  id: 'fiscal-vs-monetary-policy-mix',
  slug: 'fiscal-vs-monetary-policy-mix',
  question: 'Chính sách tài khóa và tiền tệ phối hợp hay xung đột với nhau thế nào?',
  title: 'Hai công cụ khác chủ thể, cùng chạm vào cầu và lạm phát',
  topic: 'macro',
  tldr: '**Tài khóa** (thuế, chi tiêu, nợ công) do Chính phủ và Quốc hội quyết định; **tiền tệ** (lãi suất, cung tiền, tỷ giá) do ngân hàng trung ương điều hành. Cả hai cùng tác động lên tổng cầu và giá nên có thể **cộng hưởng** (cùng nới để cứu suy thoái) hoặc **triệt tiêu** (một bên nới, một bên thắt), và "tổ hợp chính sách" quyết định kết quả về tăng trưởng, lạm phát, nợ công và tỷ giá.',
  keyPoints: [
    'Chính sách tài khóa tác động trực tiếp vào thu nhập và đầu tư (giảm thuế, tăng chi đầu tư công); chính sách tiền tệ tác động gián tiếp qua lãi suất, tín dụng và tỷ giá.',
    'Tổ hợp **nới tài khóa + nới tiền tệ** kích cầu mạnh nhất nhưng dễ đẩy lạm phát và nợ; **nới tài khóa + thắt tiền tệ** giữ lạm phát nhưng lãi suất cao có thể "chèn ép" đầu tư tư nhân.',
    'Độ trễ khác nhau: lãi suất đổi nhanh nhưng tác động lên nền kinh tế mất nhiều tháng; chi đầu tư công chịu độ trễ giải ngân và thủ tục nên tác động có thể đến muộn.',
    'Khi chính phủ vay nhiều, ngân hàng trung ương bị áp lực giữ lãi suất thấp để giảm chi phí nợ; sự **độc lập** của ngân hàng trung ương là rào chắn để lạm phát không bị đánh đổi vì tài khóa.',
    'Với một nền kinh tế mở như Việt Nam, tổ hợp này còn phải tính tới tỷ giá và dòng vốn: nới tiền tệ quá mức trong lúc Fed giữ lãi suất cao sẽ gây áp lực lên tỷ giá.',
  ],
  causalChain: [
    { from: 'Chính phủ tăng chi đầu tư công hoặc giảm thuế', to: 'Tổng cầu tăng, thâm hụt ngân sách mở rộng', mechanism: 'Chi tiêu của Nhà nước trở thành thu nhập của doanh nghiệp, người lao động; thuế giảm để lại nhiều tiền hơn cho hộ gia đình và doanh nghiệp.' },
    { from: 'Tổng cầu tăng gần mức tiềm năng', to: 'Áp lực giá và nhập khẩu tăng', mechanism: 'Khi năng lực sản xuất gần kín, cầu tăng thêm chuyển thành giá cao hơn và nhập khẩu nhiều hơn, làm xấu cán cân thương mại.' },
    { from: 'Áp lực giá và tỷ giá tăng', to: 'Ngân hàng trung ương thắt hoặc ngừng nới tiền tệ', mechanism: 'Để giữ lạm phát và ổn định tỷ giá, ngân hàng trung ương nâng lãi suất, hút thanh khoản hoặc bán ngoại tệ.' },
    { from: 'Lãi suất cao hơn', to: 'Đầu tư tư nhân và chi phí nợ công thay đổi', mechanism: 'Lãi suất cao làm doanh nghiệp giảm vay đầu tư và làm Chính phủ phải trả lãi nhiều hơn khi phát hành trái phiếu mới; hiệu ứng "chèn ép" có thể làm triệt tiêu một phần tác động của kích thích tài khóa.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp xây dựng, vật liệu, thầu công', effect: 'Hưởng lợi khi đầu tư công được giải ngân nhanh; nhưng nếu lãi suất tăng thì chi phí vốn lưu động cũng tăng.', direction: 'mixed' },
    { group: 'Người vay mua nhà, doanh nghiệp vay vốn', effect: 'Phụ thuộc lãi suất do tổ hợp chính sách quyết định; nới tiền tệ cùng đầu tư công mạnh thường làm tín dụng rẻ hơn nhưng tăng rủi ro bong bóng tài sản.', direction: 'mixed' },
    { group: 'Người gửi tiết kiệm', effect: 'Nới tài khóa kèm lạm phát tăng làm lãi suất thực giảm; thắt tiền tệ làm lãi suất tiền gửi hấp dẫn hơn.', direction: 'mixed' },
    { group: 'Người làm công ăn lương', effect: 'Giảm thuế, hỗ trợ an sinh làm thu nhập khả dụng tăng; nhưng nếu lạm phát tăng theo, sức mua thực tế được cải thiện ít hơn kỳ vọng.', direction: 'up' },
    { group: 'Thị trường trái phiếu chính phủ', effect: 'Phát hành nhiều để tài trợ thâm hụt đẩy lợi suất lên nếu cầu không đủ; nới tiền tệ kéo lợi suất xuống.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Thâm hụt ngân sách, nợ công/GDP và tiến độ giải ngân đầu tư công', why: 'Đo mức nới hay thắt của tài khóa và độ trễ của kích thích.', where: 'Bộ Tài chính, Cục Thống kê (nso.gov.vn)' },
    { name: 'Lãi suất điều hành và lãi suất liên ngân hàng', why: 'Cho biết tư thế của chính sách tiền tệ trong ngắn hạn.', where: 'Ngân hàng Nhà nước (sbv.gov.vn)' },
    { name: 'Lợi suất trái phiếu chính phủ kỳ hạn dài', why: 'Phản ánh kỳ vọng về lạm phát, nguồn cung trái phiếu và kỳ vọng chính sách.', where: 'Sở Giao dịch Chứng khoán Hà Nội (HNX)' },
    { name: 'CPI, lạm phát cơ bản và tỷ giá USD/VND', why: 'Là ràng buộc chính khiến tiền tệ không thể nới mãi cùng tài khóa.', where: 'Cục Thống kê; Ngân hàng Nhà nước' },
  ],
  counterpoints: [
    'Khi lãi suất đã sát 0 hoặc nền kinh tế mắc kẹt trong thiếu cầu, nới tài khóa có thể hiệu quả hơn tiền tệ; ngược lại khi lạm phát cao do cú sốc cung, kích thích tài khóa thêm có thể phản tác dụng.',
    'Không có tổ hợp "đúng" chung: hiệu quả phụ thuộc vị trí trong chu kỳ, dư địa nợ công, độ trễ và niềm tin vào cam kết dài hạn của cả hai bên.',
    'Phối hợp quá chặt có thể đe dọa tính độc lập của ngân hàng trung ương; do vậy nhiều nước tách rõ vai trò và chỉ phối hợp thông tin, không phối hợp mục tiêu lạm phát.',
  ],
  glossary: [
    { term: 'Chính sách tài khóa', definition: 'Việc điều chỉnh thuế, chi tiêu và vay nợ của Chính phủ để tác động lên kinh tế.' },
    { term: 'Chính sách tiền tệ', definition: 'Việc ngân hàng trung ương điều chỉnh lãi suất, thanh khoản và tỷ giá để ổn định giá và hỗ trợ tăng trưởng.' },
    { term: 'Tổ hợp chính sách (policy mix)', definition: 'Sự kết hợp giữa tài khóa và tiền tệ tại một thời điểm.' },
    { term: 'Hiệu ứng chèn ép', definition: 'Chi tiêu vay nợ của Nhà nước đẩy lãi suất lên và làm giảm đầu tư tư nhân.' },
    { term: 'Độc lập của ngân hàng trung ương', definition: 'Khả năng quyết định công cụ tiền tệ mà không chịu áp lực tài trợ cho thâm hụt ngân sách.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'fiscal-vs-monetary-policy-mix-q',
    question: 'Chính phủ đẩy mạnh đầu tư công, trong khi lạm phát cơ bản đang tăng và đồng nội tệ chịu áp lực. Cách đọc nào hợp lý về tổ hợp chính sách?',
    options: [
      { id: 'a', text: 'Ngân hàng trung ương nên nới tiền tệ thêm để chi phí vay của Chính phủ thấp hơn.', explain: 'Nới thêm khi giá và tỷ giá đang chịu áp lực dễ làm lạm phát mất neo; việc đặt chi phí vay của Chính phủ lên trên ổn định giá làm yếu độc lập chính sách.' },
      { id: 'b', text: 'Nếu cả hai cùng nới, lạm phát và tỷ giá chịu thêm áp lực; có thể cần giữ lãi suất hoặc điều chỉnh nhịp tài khóa.', correct: true, explain: 'Đúng. Hai công cụ cùng đẩy cầu khi nền kinh tế gần công suất sẽ cộng hưởng vào giá và nhập khẩu; điều chỉnh nhịp hoặc cơ cấu chi là cách giảm xung đột.' },
      { id: 'c', text: 'Tài khóa và tiền tệ không tác động lẫn nhau vì do hai cơ quan khác nhau quản lý.', explain: 'Ngược lại: chúng cùng tác động lên cầu, lãi suất và nợ nên luôn có tương tác dù do hai cơ quan phụ trách.' },
    ],
  },
  sources: [
    { title: 'Policy mix', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Policy_mix' },
    { title: 'Fiscal policy', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Fiscal_policy' },
    { title: 'Monetary policy', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Monetary_policy' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 41,
}
