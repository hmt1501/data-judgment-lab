import type { Explainer } from '../../../shared/explainer'

export const dataRevisionsPreliminaryEstimates: Explainer = {
  id: 'data-revisions-preliminary-estimates',
  slug: 'data-revisions-preliminary-estimates',
  question: 'Số liệu kinh tế sơ bộ bị điều chỉnh sau đó: nên đọc số công bố lần đầu thế nào?',
  title: 'Số công bố lần đầu là ước tính: đọc nó như một khoảng, không phải một điểm',
  topic: 'macro',
  tldr: 'GDP, việc làm, thương mại thường được công bố nhanh bằng **ước tính sơ bộ** rồi sửa khi có thêm dữ liệu gốc. Nghiên cứu của cơ quan thống kê Mỹ cho thấy số sớm thường đúng về **chiều hướng**, còn **độ lớn** thì vẫn có thể được sửa (trung bình nhỏ, nhưng từng kỳ có thể lệch đủ để đổi cách đọc). Vì vậy hãy đọc số đầu tiên cùng biên độ sai số và xem các kỳ trước đã bị sửa thế nào.',
  keyPoints: [
    'Cục Phân tích Kinh tế Mỹ (BEA) nói lịch công bố của họ cân bằng giữa **kịp thời** và **chính xác**; các nghiên cứu cho thấy ước tính sớm thường cho biết đúng tăng hay giảm, đang tăng tốc hay chậm lại, và độ lớn sửa đổi "có xu hướng nhỏ".',
    'Cũng theo BEA (nghiên cứu dùng dữ liệu đến 2012), sửa đổi làm thay đổi tốc độ tăng trưởng dài hạn trung bình **dưới 0,1 điểm phần trăm**, nên bức tranh chu kỳ gần như không đổi; nhưng một quý riêng lẻ có thể bị sửa nhiều hơn mức trung bình (nhận định chung, không phải số của BEA).',
    'Theo BEA, lịch công bố dùng dữ liệu nguồn ngày càng đầy đủ và chính xác khi có thêm; số sơ bộ vì thế dựa nhiều hơn vào **ước lượng và chỉ báo gián tiếp** khi dữ liệu gốc chưa đủ (cách mô tả cơ chế chung; trang BEA không nêu chi tiết ngoại suy hay nguồn cụ thể).',
    'Quy tắc thực hành: ghi nhớ **bản công bố nào** (vintage) bạn đang dùng; so sánh số sơ bộ kỳ này với số **đã sửa** kỳ trước có thể gây nhầm vì hai bản không cùng độ chín.',
    'Tại Việt Nam, GDP quý và số liệu tháng của Cục Thống kê thường là "ước tính" và được cập nhật khi tổng hợp đủ; chú ý chữ "ước" trong thông cáo và so sánh với kỳ sau.',
  ],
  causalChain: [
    { from: 'Nhu cầu có số liệu nhanh để điều hành', to: 'Công bố ước tính khi dữ liệu còn thiếu', mechanism: 'Thu thập đầy đủ báo cáo doanh nghiệp, thuế, điều tra mất nhiều tháng nên cơ quan thống kê dùng mẫu nhỏ, ngoại suy và chỉ báo thay thế.' },
    { from: 'Dữ liệu gốc đến dần', to: 'Số liệu được sửa qua nhiều lần', mechanism: 'Mỗi lần có thêm nguồn trực tiếp, phần ước lượng được thay bằng số thực; có thể có cả lần rà soát toàn diện thay đổi phương pháp.' },
    { from: 'Sửa đổi', to: 'Hiểu sai chiều hướng nếu đọc số lần đầu như kết luận', mechanism: 'Mức tăng 2,0% sơ bộ có thể thành 2,6% hay 1,5% (ví dụ giả định); khi sai số lớn bằng chính mức thay đổi mà thị trường bàn tán, kết luận "tăng tốc" hay "chậm lại" trở nên mong manh.' },
    { from: 'Hiểu sai chiều hướng', to: 'Quyết định kinh doanh, đầu tư sai nhịp', mechanism: 'Thị trường phản ứng với số lần đầu rồi đảo chiều khi số được sửa; doanh nghiệp điều chỉnh kế hoạch theo số có thể không còn đúng.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư và nhà phân tích', effect: 'Nên xem số liệu cả quý/lũy kế thay vì phản ứng với số tháng đơn lẻ; đối chiếu với các chỉ báo độc lập (xuất nhập khẩu hải quan, PMI, tín dụng).', direction: 'mixed' },
    { group: 'Doanh nghiệp lập kế hoạch', effect: 'Dùng số liệu vĩ mô làm giả định ngân sách cần biên độ an toàn vì số kỳ gần nhất chưa "chín".', direction: 'mixed' },
    { group: 'Người làm nghiên cứu, báo chí', effect: 'Ghi rõ ngày công bố và là số ước/số chính thức; tránh ghép số của hai bản công bố khác nhau trong một biểu đồ.', direction: 'up' },
  ],
  indicators: [
    { name: 'Chênh lệch giữa số lần đầu và số sau khi sửa của các kỳ trước', why: 'Đo sai số điển hình của chuỗi bạn đang đọc.', where: 'Tự lưu các thông cáo liên tiếp của Cục Thống kê (nso.gov.vn); với Mỹ, các bảng revision của BEA' },
    { name: 'Chỉ báo độc lập cùng chủ đề', why: 'Nếu nhiều nguồn độc lập cùng chiều thì số sơ bộ đáng tin hơn.', where: 'Hải quan (thương mại), S&P Global (PMI), Ngân hàng Nhà nước (tín dụng)' },
    { name: 'Chú thích "ước tính / sơ bộ / chính thức"', why: 'Cho biết độ chín của con số.', where: 'Phần ghi chú của thông cáo và bảng biểu' },
  ],
  counterpoints: [
    'Với các nền kinh tế đang phát triển, hệ thống điều tra nhỏ hơn nên sai lệch giữa số sớm và số cuối có thể lớn hơn ví dụ của Mỹ.',
    'Sửa đổi không phải là dấu hiệu sai trái; thường là kết quả bình thường của việc bổ sung dữ liệu. Nghi ngờ nên dành cho trường hợp sửa luôn cùng một hướng nhiều kỳ liền.',
    'Nếu sửa đổi có quy luật (luôn lên hoặc luôn xuống), nhà phân tích có thể hiệu chỉnh khi đọc số sớm, nhưng không nên coi đó là chắc chắn.',
  ],
  glossary: [
    { term: 'Ước tính sơ bộ / lần đầu', definition: 'Bản số liệu công bố sớm, dựa một phần vào ước lượng khi chưa đủ dữ liệu gốc.' },
    { term: 'Vintage', definition: 'Một bản công bố cụ thể của chuỗi số liệu; cùng kỳ có thể có nhiều vintage.' },
    { term: 'Sửa đổi (revision)', definition: 'Thay đổi số liệu đã công bố khi có thêm dữ liệu hoặc đổi phương pháp.' },
    { term: 'Rà soát toàn diện', definition: 'Đợt cập nhật lớn, có thể đổi phương pháp hoặc năm gốc, làm thay đổi cả chuỗi dài.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'data-revisions-preliminary-estimates-q',
    question: 'Ước tính sơ bộ cho thấy GDP quý tăng 6,1%, thấp hơn mức 6,4% quý trước (đã sửa). Cách diễn giải nào thận trọng nhất?',
    options: [
      { id: 'a', text: 'Kinh tế chắc chắn chậm lại 0,3 điểm phần trăm.', explain: 'Hai con số không cùng độ chín: một là ước tính, một đã sửa. Chênh 0,3 có thể nhỏ hơn sai số sửa đổi thông thường.' },
      { id: 'b', text: 'Chiều hướng đáng chú ý nhưng chưa chắc; cần chờ số sửa và đối chiếu chỉ báo khác.', correct: true, explain: 'Đúng. Số sớm thường đúng chiều hướng chung nhưng độ lớn có thể đổi; so sánh với chỉ báo độc lập trước khi kết luận.' },
      { id: 'c', text: 'Bỏ qua số sơ bộ vì chắc chắn sẽ bị sửa.', explain: 'Số sơ bộ vẫn mang thông tin; vấn đề là đọc nó kèm biên độ sai số, không phải bỏ qua.' },
    ],
  },
  sources: [
    { title: 'How accurate and reliable are BEA\'s early GDP estimates and revisions?', publisher: 'U.S. Bureau of Economic Analysis', url: 'https://www.bea.gov/help/faq/1000' },
    { title: 'Economic indicator', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Economic_indicator' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 81,
}
