import type { Explainer } from '../../../shared/explainer'

export const misleadingChartsEconomicsDataViz: Explainer = {
  id: 'misleading-charts-economics-data-viz',
  slug: 'misleading-charts-economics-data-viz',
  question: 'Những cách nào làm biểu đồ kinh tế gây hiểu lầm (trục, mốc thời gian, tỷ lệ) và đọc thế nào cho đúng?',
  title: 'Biểu đồ gây hiểu lầm trong kinh tế: trục, mốc và tỷ lệ',
  topic: 'macro',
  tldr: 'Cùng một dữ liệu có thể trông như "bùng nổ" hoặc "phẳng lặng" tùy **điểm bắt đầu của trục, khoảng thời gian chọn, tỷ lệ khung hình, hai trục lệch nhau**. Không cần số sai, chỉ cần cách trình bày khéo. Thói quen đọc đúng: nhìn nhãn trục trước, hỏi dữ liệu bị cắt ở đâu, so cùng thang đo, và xem bối cảnh dài hơn.',
  keyPoints: [
    'Theo Wikipedia ("Misleading graph", đọc 15/10/2026), các kỹ thuật gây hiểu lầm gồm: **trục bị cắt** (không bắt đầu từ 0) làm chênh lệch nhỏ trông lớn; không có thang đo; thay đổi giá trị tối đa của trục hoặc tỷ lệ khung hình làm xu hướng dốc hơn hoặc phẳng hơn; hai trục tung không tương ứng làm sai so sánh; biểu đồ tròn, hiệu ứng 3D, hình tượng co giãn sai (diện tích tăng theo bình phương); thang logarit không rõ; bỏ dữ liệu.',
    'Hướng dẫn trực quan hóa dữ liệu của Analysis Function (bộ phận phân tích của Chính phủ Anh, đọc 15/10/2026): với **biểu đồ cột luôn bắt đầu trục số từ 0**; với **biểu đồ đường** có thể cắt trục khi cần nhưng phải có ký hiệu ngắt rõ ràng và nêu trong mô tả; nên **tránh trục kép** vì dễ hiểu sai, thay bằng nhiều biểu đồ riêng; chọn tỷ lệ khung hình để thay đổi không quá cực đoan hay phẳng; gắn nhãn đầy đủ.',
    'Trong kinh tế, hai bẫy hay gặp: (1) **chọn mốc đầu cuối** (bắt đầu từ đáy hoặc đỉnh làm xu hướng tăng/giảm trông mạnh hơn); (2) so sánh **số tuyệt đối** thay vì tỷ lệ phần trăm hoặc bình quân đầu người, hoặc dùng giá danh nghĩa khi cần giá thực, nên xu hướng bị méo bởi lạm phát và quy mô.',
    'Ví dụ giả định: GDP quý tăng từ 100 lên 102. Trục từ 99 đến 103 làm cột sau trông cao gấp ba cột trước; trục từ 0 đến 110 cho thấy chỉ tăng 2%. Cả hai dùng đúng cùng số liệu; cảm giác về mức độ khác hẳn.',
    'Trục kép dễ tạo tương quan giả: kéo giãn một trục để hai đường "trông trùng nhau". Cần xem từng đường theo thang riêng và hỏi hai đại lượng có thật sự liên hệ không.',
  ],
  causalChain: [
    { from: 'Người làm biểu đồ chọn điểm bắt đầu của trục', to: 'Độ cao tương đối của các cột/đường thay đổi', mechanism: 'Mắt người so chiều cao hoặc độ dốc; cắt trục bỏ phần chung của các giá trị, làm khác biệt nhỏ trông lớn.' },
    { from: 'Chọn khoảng thời gian hiển thị', to: 'Xu hướng nhìn thấy thay đổi', mechanism: 'Một cú giảm ngắn trông như sụp đổ trong biểu đồ 6 tháng nhưng chỉ là nhiễu trong biểu đồ 10 năm.' },
    { from: 'Dùng hai trục tung hoặc tỷ lệ khung hình khác nhau', to: 'Tương quan hoặc độ dốc bị tạo ra', mechanism: 'Co giãn tuỳ ý một trục làm hai chuỗi trông đồng pha hoặc tách rời, dù mối quan hệ thực không đổi.' },
    { from: 'Hiển thị số tuyệt đối, danh nghĩa, không hiệu chỉnh', to: 'Mức tăng bị thổi phồng hoặc che giấu', mechanism: 'Lạm phát và tăng dân số làm số tuyệt đối tăng dù sức mua hoặc bình quân đầu người không tăng.' },
    { from: 'Người đọc kiểm tra nhãn, thang đo và nguồn', to: 'Hiểu đúng thông điệp dữ liệu', mechanism: 'Kiểm tra trục bắt đầu từ đâu, đơn vị là gì, mốc thời gian chọn và có bị bỏ dữ liệu không giúp tách thông điệp thật khỏi cách trình bày.' },
  ],
  vietnamImpact: [
    { group: 'Người đọc báo cáo kinh tế, tin tức tài chính', effect: 'Biểu đồ GDP, CPI, lãi suất, giá vàng và bất động sản thường dùng trục cắt hoặc mốc chọn lọc; cần xem lại thang đo trước khi rút ra kết luận.', direction: 'mixed' },
    { group: 'Nhà đầu tư xem biểu đồ giá cổ phiếu hoặc vàng', effect: 'Khung thời gian ngắn tạo cảm giác biến động lớn hoặc cơ hội; nên đối chiếu thêm khung dài và đơn vị.', direction: 'down' },
    { group: 'Doanh nghiệp và nhà phân tích làm báo cáo', effect: 'Chọn trục và khung hình trung thực giúp giữ uy tín; nên chú thích khi cắt trục hoặc dùng thang logarit.', direction: 'up' },
    { group: 'Sinh viên, người học phân tích dữ liệu', effect: 'Luyện kỹ năng đọc biểu đồ phản biện giúp tránh bị dẫn dắt bởi cách trình bày.', direction: 'up' },
  ],
  indicators: [
    { name: 'Điểm bắt đầu của trục tung (có từ 0 không)', why: 'Với biểu đồ cột, trục không từ 0 làm sai tỷ lệ.', where: 'Nhìn nhãn trục của chính biểu đồ' },
    { name: 'Khoảng thời gian và điểm bắt đầu/kết thúc', why: 'Chọn mốc đỉnh hoặc đáy làm xu hướng bị méo.', where: 'Trục thời gian; so với dữ liệu gốc dài hơn' },
    { name: 'Đơn vị và hiệu chỉnh (danh nghĩa/thực, tuyệt đối/bình quân đầu người, %)', why: 'Cách đo quyết định ý nghĩa của xu hướng.', where: 'Chú thích và ghi chú nguồn dữ liệu; số liệu gốc của Cục Thống kê (nso.gov.vn) nêu rõ đơn vị' },
    { name: 'Nguồn dữ liệu và phương pháp', why: 'Biết ai tạo, từ dữ liệu nào, để tự dựng lại biểu đồ nếu cần.', where: 'Ghi chú nguồn dưới biểu đồ; trang thống kê gốc' },
  ],
  counterpoints: [
    'Không phải biểu đồ có trục cắt nào cũng lừa dối: với biểu đồ đường, hướng dẫn của Analysis Function cho phép cắt trục khi cần hiển thị xu hướng, miễn có ký hiệu ngắt rõ và nêu trong mô tả.',
    'Đôi khi muốn nhấn mạnh sự khác biệt nhỏ nhưng quan trọng (ví dụ lạm phát lệch mục tiêu vài phần mười điểm phần trăm) thì phóng to trục có lý do; điều quan trọng là minh bạch.',
    'Bài tập trung vào các kỹ thuật chung; một số khẳng định trong Wikipedia về báo cáo tài chính chưa có trích dẫn, nên bài không dựa vào đó.',
  ],
  glossary: [
    { term: 'Trục bị cắt', definition: 'Trục số không bắt đầu từ 0, làm chênh lệch trông lớn hơn.' },
    { term: 'Trục kép', definition: 'Biểu đồ có hai trục tung với thang đo khác nhau cho hai chuỗi.' },
    { term: 'Tỷ lệ khung hình', definition: 'Tỷ lệ giữa chiều rộng và chiều cao của biểu đồ; ảnh hưởng độ dốc nhìn thấy.' },
    { term: 'Thang logarit', definition: 'Trục mà khoảng cách thể hiện tỷ lệ chứ không phải chênh lệch tuyệt đối.' },
    { term: 'Giá danh nghĩa / thực', definition: 'Giá hiện hành so với giá đã loại bỏ ảnh hưởng của lạm phát.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'misleading-charts-economics-data-viz-q',
    question: 'Một biểu đồ cột cho thấy doanh thu quý tăng từ 100 lên 102, nhưng cột sau cao gấp ba cột trước. Điều gì có khả năng xảy ra?',
    options: [
      { id: 'a', text: 'Số liệu đã bị sai.', explain: 'Số liệu có thể đúng; vấn đề thường nằm ở cách dựng trục.' },
      { id: 'b', text: 'Trục tung có thể bắt đầu từ giá trị lớn hơn 0 (ví dụ 99), làm chênh lệch nhỏ trông lớn.', correct: true, explain: 'Đúng. Với biểu đồ cột, chiều cao nên tỷ lệ với giá trị nên trục phải bắt đầu từ 0; cắt trục làm méo tỷ lệ.' },
      { id: 'c', text: 'Doanh thu thật sự tăng gấp ba.', explain: 'Dữ liệu ghi 100 lên 102, tức khoảng 2%; hình dáng không phản ánh mức tăng đó.' },
    ],
  },
  sources: [
    { title: 'Data visualisation: charts', publisher: 'UK Government Analysis Function', url: 'https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/' },
    { title: 'Misleading graph', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Misleading_graph' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 197,
}
