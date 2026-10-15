import type { Explainer } from '../../../shared/explainer'

export const inflationTargetingVsExchangeRateAnchor: Explainer = {
  id: 'inflation-targeting-vs-exchange-rate-anchor',
  slug: 'inflation-targeting-vs-exchange-rate-anchor',
  question: 'Neo lạm phát bằng mục tiêu lạm phát hay bằng tỷ giá: khác nhau ở đâu?',
  title: 'Neo kỳ vọng lạm phát: mục tiêu lạm phát hay neo tỷ giá',
  topic: 'macro',
  tldr: 'Ngân hàng trung ương cần một "mỏ neo" danh nghĩa để kỳ vọng giá cả không trôi đi. Có hai cách phổ biến: **neo tỷ giá** (giữ đồng nội tệ cố định hoặc gần cố định với một đồng tiền mạnh) và **mục tiêu lạm phát** (công bố con số lạm phát trung hạn rồi dùng lãi suất ngắn hạn để theo đuổi). Hai cách đánh đổi nhau: neo tỷ giá dễ hiểu nhưng buộc chính sách tiền tệ trong nước đi theo nước neo; mục tiêu lạm phát giữ được tự chủ nhưng đòi hỏi tỷ giá linh hoạt và uy tín của ngân hàng trung ương.',
  keyPoints: [
    'Theo Wikipedia, mục tiêu lạm phát là khung chính sách trong đó ngân hàng trung ương **công bố mục tiêu lạm phát trung hạn** và chủ yếu dùng lãi suất ngắn hạn để đạt mục tiêu: lạm phát cao hơn mục tiêu thì tăng lãi suất, thấp hơn thì giảm.',
    'Mục tiêu lạm phát nhắm vào **giá trong nước**, còn neo tỷ giá nhắm vào **giá của đồng tiền**. Cùng một bài viết ghi nhận mục tiêu lạm phát không tương thích với các chế độ neo tỷ giá cố định kiểu Bretton Woods (1944–1971).',
    'Theo Wikipedia, mục tiêu lạm phát cho phép chính sách tập trung vào các cân nhắc trong nước và phản ứng với cú sốc của nền kinh tế nội địa – điều không thực hiện được dưới tỷ giá cố định, vì lãi suất phải phục vụ việc giữ tỷ giá.',
    'Điều kiện đi kèm (suy ra từ cách các nước vận hành): **tỷ giá linh hoạt**, ngân hàng trung ương có **độc lập** và **trách nhiệm giải trình** để mục tiêu được tin; thiếu những điều này, con số công bố chỉ là lời hứa suông.',
    'Không có mô hình "tốt nhất": theo Báo cáo Kinh tế thường niên 2019 của BIS, phần lớn các nước thị trường mới nổi theo mục tiêu lạm phát vận hành tỷ giá thả nổi có kiểm soát và can thiệp ngoại hối để đối phó dòng vốn và biến động tỷ giá — nghĩa là thực tế thường là mô hình lai. Wikipedia cũng ghi bằng chứng thực nghiệm chưa rõ ràng rằng nước theo mục tiêu lạm phát kiểm soát lạm phát tốt hơn.',
  ],
  causalChain: [
    { from: 'Ngân hàng trung ương chọn mỏ neo danh nghĩa', to: 'Kỳ vọng lạm phát của dân và doanh nghiệp được định hướng', mechanism: 'Khi mọi người tin vào một con số (lạm phát mục tiêu) hoặc một tỷ giá cố định, họ đặt giá, lương, hợp đồng dựa trên đó, nên lạm phát ít bị "tự nuôi" thành vòng xoáy.' },
    { from: 'Neo tỷ giá: giữ đồng nội tệ cố định với đồng neo', to: 'Lạm phát trong nước có xu hướng bám theo nước neo', mechanism: 'Giá hàng nhập khẩu tính bằng nội tệ ổn định; nhưng ngân hàng trung ương phải mua bán ngoại tệ và đi theo lãi suất của nước neo, mất công cụ lãi suất cho riêng mình.' },
    { from: 'Có cú sốc riêng của nền kinh tế (ví dụ xuất khẩu giảm mạnh)', to: 'Neo cố định khó điều chỉnh, mục tiêu lạm phát linh hoạt hơn', mechanism: 'Với tỷ giá thả nổi, đồng tiền có thể yếu đi để hấp thụ cú sốc và ngân hàng trung ương hạ lãi suất; với tỷ giá cố định, phải giữ nguyên tỷ giá nên điều chỉnh dồn vào việc làm và giá cả, hoặc chờ dự trữ ngoại hối cạn.' },
    { from: 'Mục tiêu lạm phát được áp dụng', to: 'Cần uy tín và minh bạch', mechanism: 'Ngân hàng trung ương phải giải thích khi chệch mục tiêu; nếu bị chính trị can thiệp hoặc ưu tiên tăng trưởng ngắn hạn, kỳ vọng sẽ không còn neo vào mục tiêu.' },
    { from: 'Dòng vốn vào/ra thay đổi mạnh ở nền kinh tế mở', to: 'Nhiều ngân hàng trung ương chọn mô hình lai', mechanism: 'Tỷ giá biến động quá mạnh có thể đẩy lạm phát nhập khẩu và gây rủi ro cho nợ bằng ngoại tệ, nên họ vừa theo mục tiêu lạm phát vừa can thiệp có chọn lọc.' },
  ],
  vietnamImpact: [
    { group: 'Người gửi tiết kiệm và hộ gia đình', effect: 'Mỏ neo đáng tin giúp lạm phát và tỷ giá ít biến động bất ngờ, bảo vệ giá trị tiền tiết kiệm bằng đồng; điều này không phụ thuộc vào việc chọn loại neo nào mà vào uy tín thực thi.', direction: 'up' },
    { group: 'Doanh nghiệp xuất nhập khẩu', effect: 'Cần biết tỷ giá điều hành theo hướng ổn định hay linh hoạt hơn để định giá hợp đồng và phòng ngừa rủi ro; tỷ giá linh hoạt hơn thường kéo theo nhu cầu phòng hộ cao hơn.', direction: 'mixed' },
    { group: 'Doanh nghiệp và cá nhân vay ngoại tệ', effect: 'Khi nội tệ yếu đi, gánh nợ bằng ngoại tệ nặng hơn; đây là lý do ngân hàng trung ương thường ngại để tỷ giá dao động quá mạnh.', direction: 'down' },
    { group: 'Nhà đầu tư', effect: 'Khung chính sách ảnh hưởng đến việc đoán lãi suất và tỷ giá; cần theo dõi cách ngân hàng trung ương giải thích quyết định thay vì chỉ nhìn một con số.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Lạm phát thực tế so với mục tiêu', why: 'Cho biết ngân hàng trung ương có đạt mỏ neo đã công bố hay không.', where: 'Cục Thống kê (CPI), thông cáo của ngân hàng trung ương nước đang xét' },
    { name: 'Kỳ vọng lạm phát (khảo sát, chênh lệch lợi suất trái phiếu thường và trái phiếu gắn lạm phát)', why: 'Kỳ vọng ổn định quanh mục tiêu là dấu hiệu mỏ neo đang hiệu quả.', where: 'Khảo sát của ngân hàng trung ương; dữ liệu thị trường trái phiếu' },
    { name: 'Dự trữ ngoại hối và biến động tỷ giá', why: 'Với neo tỷ giá, dự trữ cạn là dấu hiệu mỏ neo có thể gãy; với mô hình lai, cho thấy mức can thiệp.', where: 'Ngân hàng Nhà nước, IMF (thống kê dự trữ), Ngân hàng Thế giới' },
  ],
  counterpoints: [
    'Mục tiêu lạm phát bị chỉ trích là chú trọng giá mà bỏ qua việc làm và bong bóng tài sản; nhiều nhà kinh tế cho rằng cần linh hoạt hơn sau khủng hoảng 2008.',
    'Trong nền kinh tế nhỏ, mở, nợ ngoại tệ nhiều, neo tỷ giá hoặc can thiệp mạnh vẫn có thể hợp lý để tránh những cú sốc tài chính, dù phải đánh đổi tự chủ lãi suất.',
    'Một nghiên cứu được Wikipedia dẫn (2021) cho rằng ngân hàng trung ương độc lập với mục tiêu lạm phát cứng nhắc có kết quả kém hơn trong khủng hoảng ngân hàng – nên không có công thức dùng cho mọi nước.',
  ],
  glossary: [
    { term: 'Mỏ neo danh nghĩa', definition: 'Một biến danh nghĩa (tỷ giá, lạm phát mục tiêu...) dùng để định hướng kỳ vọng về giá cả.' },
    { term: 'Mục tiêu lạm phát', definition: 'Khung chính sách công bố mục tiêu lạm phát trung hạn và dùng lãi suất ngắn hạn để theo đuổi.' },
    { term: 'Neo tỷ giá', definition: 'Giữ tỷ giá cố định hoặc trong biên hẹp so với một đồng tiền mạnh để ổn định giá hàng nhập khẩu và kỳ vọng.' },
    { term: 'Tam giác bất khả thi', definition: 'Một nước khó đồng thời có tỷ giá cố định, tự do dòng vốn và chính sách tiền tệ độc lập – chỉ chọn được hai.' },
    { term: 'Uy tín chính sách', definition: 'Mức độ công chúng tin ngân hàng trung ương sẽ làm đúng điều đã công bố.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'inflation-targeting-vs-exchange-rate-anchor-q',
    question: 'Một nền kinh tế nhỏ đang neo tỷ giá cố định vào đồng tiền lớn. Xuất khẩu của nước đó sụt mạnh trong khi nước neo đang tăng lãi suất để chống lạm phát. Điều gì xảy ra với chính sách tiền tệ của nước nhỏ?',
    options: [
      { id: 'a', text: 'Vẫn tự do hạ lãi suất để cứu xuất khẩu vì lãi suất là công cụ riêng của nước nhỏ.', explain: 'Sai. Với neo cố định và vốn lưu chuyển tự do, hạ lãi suất thấp hơn nước neo sẽ gây áp lực mất dự trữ và phá vỡ neo.' },
      { id: 'b', text: 'Bị ràng buộc phải đi theo lãi suất của nước neo dù điều đó không hợp với tình hình trong nước.', correct: true, explain: 'Đúng. Đây chính là cái giá của neo tỷ giá: mất tự chủ lãi suất, nên cú sốc riêng khó được hấp thụ bằng chính sách tiền tệ.' },
      { id: 'c', text: 'Không có tác động gì vì tỷ giá cố định nên cú sốc không lan vào nền kinh tế.', explain: 'Sai. Tỷ giá cố định không loại bỏ cú sốc; nó chuyển cú sốc sang việc làm, sản lượng và dự trữ ngoại hối.' },
    ],
  },
  sources: [
    { title: 'Inflation targeting', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Inflation_targeting' },
    { title: 'Monetary policy frameworks in EMEs: inflation targeting, the exchange rate and financial stability', publisher: 'BIS, Annual Economic Report 2019, chương II', url: 'https://www.bis.org/publ/arpdf/ar2019e2.htm' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 160,
}
