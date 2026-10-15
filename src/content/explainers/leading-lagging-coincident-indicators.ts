import type { Explainer } from '../../../shared/explainer'

export const leadingLaggingCoincidentIndicators: Explainer = {
  id: 'leading-lagging-coincident-indicators',
  slug: 'leading-lagging-coincident-indicators',
  question: 'Chỉ báo kinh tế dẫn dắt, đồng thời và trễ khác nhau thế nào, dùng ra sao?',
  title: 'Chỉ báo dẫn dắt báo trước, đồng thời xác nhận, trễ khẳng định: dùng cả ba để tránh đọc nhầm',
  topic: 'macro',
  tldr: 'Chỉ báo **dẫn dắt** thay đổi trước nền kinh tế (đơn hàng mới, giấy phép xây dựng, giá cổ phiếu, độ dốc đường cong lợi suất), chỉ báo **đồng thời** đi cùng (sản xuất, việc làm), chỉ báo **trễ** đổi sau (thất nghiệp dài hạn, nợ xấu, CPI lõi). Dẫn dắt cho tín hiệu sớm nhưng nhiễu; trễ chắc chắn hơn nhưng đến muộn. Cách dùng tốt là đối chiếu cả ba.',
  keyPoints: [
    'Các chỉ báo được phân loại theo **quan hệ thời gian** với chu kỳ kinh tế: dẫn dắt (leading), đồng thời (coincident), trễ (lagging) — khung chung của tài liệu về chỉ báo kinh tế.',
    'Chỉ báo dẫn dắt thường phản ánh **kỳ vọng và quyết định chưa thành sản lượng**: đơn hàng mới, tồn kho, giấy phép xây dựng, chỉ số giá cổ phiếu, độ dốc đường cong lợi suất.',
    'Chỉ báo dẫn dắt có **tín hiệu giả**: nó có thể "dự báo" những suy thoái không xảy ra; vì vậy nên xét nhiều chỉ báo cùng chiều và độ bền vững của xu hướng, không dựa một tháng.',
    'Chỉ báo trễ (thất nghiệp, lạm phát dịch vụ/lõi; Wikipedia nêu thất nghiệp và CPI dịch vụ là chỉ báo trễ, còn nợ xấu là cách xếp thông dụng trong thực hành ngân hàng chứ trang này không nêu) hữu ích để **xác nhận** điểm ngoặt đã xảy ra, không dùng để bắt đáy hoặc đỉnh.',
    'Với dữ liệu Việt Nam, PMI sản xuất (đơn hàng mới, tồn kho) và xuất khẩu thường được dùng như tín hiệu sớm; GDP quý và tín dụng/nợ xấu có tính xác nhận hoặc trễ hơn.',
  ],
  causalChain: [
    { from: 'Doanh nghiệp thấy nhu cầu tương lai thay đổi', to: 'Đơn hàng mới, tồn kho, kế hoạch tuyển dụng đổi trước', mechanism: 'Quyết định đặt hàng và đầu tư đi trước sản lượng và việc làm; vì vậy khảo sát và chỉ số đơn hàng thường quay đầu sớm.' },
    { from: 'Đơn hàng thay đổi', to: 'Sản lượng, doanh thu, việc làm đổi theo (chỉ báo đồng thời)', mechanism: 'Sản xuất đáp ứng đơn hàng với độ trễ vài tháng; sản lượng công nghiệp và thu nhập phản ánh trạng thái hiện tại của nền kinh tế.' },
    { from: 'Hoạt động kinh tế đổi hướng', to: 'Thất nghiệp, nợ xấu, lạm phát lõi đổi muộn (chỉ báo trễ)', mechanism: 'Doanh nghiệp giữ lao động một thời gian trước khi cắt giảm; khoản vay chuyển nợ xấu sau nhiều tháng chậm trả; giá phản ứng chậm do hợp đồng và tiền lương cố định.' },
    { from: 'Ba nhóm chỉ báo lệch nhau', to: 'Cần diễn giải theo trình tự thời gian', mechanism: 'Nếu dẫn dắt xấu đi nhưng đồng thời và trễ còn tốt, đó có thể là điểm ngoặt sớm hoặc tín hiệu giả; chỉ báo đồng thời xấu theo sẽ xác nhận.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp xuất khẩu', effect: 'Đơn hàng mới và chỉ số PMI của đối tác thương mại lớn là tín hiệu sớm cho kế hoạch sản xuất, nhân sự quý sau.', direction: 'mixed' },
    { group: 'Ngân hàng và quản trị rủi ro tín dụng', effect: 'Nợ xấu là chỉ báo trễ; chỉ nhìn nợ xấu sẽ phản ứng muộn, cần kết hợp tín hiệu dẫn dắt như đơn hàng, giá BĐS, dòng tiền doanh nghiệp.', direction: 'mixed' },
    { group: 'Nhà đầu tư', effect: 'Thị trường cổ phiếu tự nó là chỉ báo dẫn dắt nhưng nhiễu; không nên coi một chỉ báo là lời dự báo suy thoái.', direction: 'mixed' },
    { group: 'Người lao động', effect: 'Việc làm và thu nhập là chỉ báo trễ; cảm nhận "khó khăn" thường đến sau khi đơn hàng đã giảm vài tháng.', direction: 'down' },
  ],
  indicators: [
    { name: 'PMI sản xuất: đơn hàng mới và tồn kho', why: 'Tín hiệu sớm cho sản lượng công nghiệp và xuất khẩu.', where: 'S&P Global (PMI Việt Nam), công bố đầu tháng; các bài tổng hợp của báo chí' },
    { name: 'Xuất nhập khẩu hàng tháng', why: 'Chỉ báo đồng thời của hoạt động thương mại; nhập khẩu tư liệu sản xuất báo trước sản xuất.', where: 'Cục Thống kê (nso.gov.vn), Cục Hải quan' },
    { name: 'Nợ xấu và tỷ lệ thất nghiệp/thiếu việc', why: 'Chỉ báo trễ, xác nhận hậu quả của chu kỳ.', where: 'Ngân hàng Nhà nước; Cục Thống kê (điều tra lao động việc làm)' },
  ],
  counterpoints: [
    'Phân loại dẫn dắt/trễ không cố định: quan hệ thay đổi theo thời kỳ, theo cú sốc (đại dịch, chiến tranh thương mại) và theo cấu trúc kinh tế.',
    'Các chỉ báo "dẫn dắt" bị sửa số liệu nhiều (xem bài về điều chỉnh số liệu), khiến tín hiệu thực thời không sạch như tín hiệu khi nhìn lại.',
    'Nếu chu kỳ nội địa do yếu tố riêng (chính sách tín dụng, pháp lý BĐS) thì chỉ báo quốc tế dẫn dắt có thể không áp dụng được.',
  ],
  glossary: [
    { term: 'Chỉ báo dẫn dắt', definition: 'Chỉ số thường đổi hướng trước khi nền kinh tế đổi hướng.' },
    { term: 'Chỉ báo đồng thời', definition: 'Chỉ số di chuyển cùng thời điểm với nền kinh tế, phản ánh trạng thái hiện tại.' },
    { term: 'Chỉ báo trễ', definition: 'Chỉ số chỉ đổi sau khi nền kinh tế đã đổi hướng; dùng để xác nhận.' },
    { term: 'Tín hiệu giả', definition: 'Tín hiệu báo trước một sự kiện mà sau đó không xảy ra.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'leading-lagging-coincident-indicators-q',
    question: 'Đơn hàng mới trong khảo sát PMI giảm hai tháng liền, nhưng việc làm và sản lượng công nghiệp vẫn tăng, nợ xấu ổn định. Cách đọc hợp lý?',
    options: [
      { id: 'a', text: 'Suy thoái đã bắt đầu vì đơn hàng giảm.', explain: 'Đơn hàng là chỉ báo dẫn dắt có thể cho tín hiệu giả; chưa thể kết luận khi chỉ báo đồng thời còn tốt.' },
      { id: 'b', text: 'Đây là cảnh báo sớm cần theo dõi; chờ chỉ báo đồng thời và trễ xác nhận hoặc bác bỏ.', correct: true, explain: 'Đúng. Dẫn dắt báo hiệu khả năng đổi hướng; đồng thời và trễ cho biết nó có thành hiện thực không.' },
      { id: 'c', text: 'Bỏ qua đơn hàng vì sản lượng vẫn tăng.', explain: 'Sản lượng hiện tại có thể đang tiêu hóa đơn hàng cũ; bỏ qua chỉ báo dẫn dắt là bỏ phần có giá trị cảnh báo.' },
    ],
  },
  sources: [
    { title: 'Economic indicator', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Economic_indicator' },
    { title: 'Manufacturing sector ends first half of 2026 with firm growth as PMI holds above no-change mark', publisher: 'Viet Nam News', url: 'https://vietnamnews.vn/economy/1784554/manufacturing-sector-ends-first-half-of-2026-with-firm-growth-as-pmi-holds-above-no-change-mark.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 82,
}
