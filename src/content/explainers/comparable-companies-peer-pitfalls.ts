import type { Explainer } from '../../../shared/explainer'

export const comparableCompaniesPeerPitfalls: Explainer = {
  id: 'comparable-companies-peer-pitfalls',
  slug: 'comparable-companies-peer-pitfalls',
  question: 'So sánh với doanh nghiệp tương tự (comps) có những cạm bẫy nào khi chọn nhóm so sánh?',
  title: 'So sánh doanh nghiệp tương tự: cạm bẫy khi chọn nhóm so sánh',
  topic: 'markets-investing',
  tldr: 'Định giá bằng hệ số (P/E, EV/EBITDA…) của các công ty tương tự rất phổ biến vì đơn giản, nhưng kết luận phụ thuộc vào việc bạn **chọn ai làm "tương tự"**. Cùng ngành chưa chắc cùng tăng trưởng, rủi ro và cơ cấu vốn. Bỏ vài công ty cao hoặc thấp ra khỏi nhóm đủ để biến "rẻ" thành "đắt". Kết quả chỉ nói mức **tương đối** so với nhóm so sánh, không nói công ty đáng giá bao nhiêu.',
  keyPoints: [
    'Theo Wikipedia ("Comparable company analysis", đọc 15/10/2026): quy trình là xác định nhóm tài sản so sánh, quy giá thị trường về hệ số chuẩn hóa (P/E, EV/EBITDA, P/B, P/S…), rồi áp hệ số đó vào chỉ tiêu của công ty cần định giá sau khi điều chỉnh sự khác biệt. Hệ số vốn chủ nhạy với khác biệt về nợ; hệ số dựa trên giá trị doanh nghiệp (EV) hữu ích khi cơ cấu vốn khác nhau.',
    'Theo bài giảng của giáo sư Aswath Damodaran (NYU Stern, "It is all relative: Multiples, Comparables and Value"): ý tưởng là so với tài sản tương tự đồng thời **kiểm soát các khác biệt** làm thay đổi hệ số; ông nhận xét việc xác định nhóm so sánh và kiểm soát khác biệt khó hơn nhiều trong thực tế so với lý thuyết, và khoảng 85% báo cáo nghiên cứu cổ phiếu dựa vào một hệ số và nhóm so sánh.',
    'Cũng theo Damodaran: về lý thuyết, doanh nghiệp "tương tự" là doanh nghiệp giống về **các yếu tố cơ bản** (tăng trưởng, rủi ro, dòng tiền) chứ không chỉ cùng ngành; nếu không kiểm soát được chênh lệch cơ bản thì kết luận phản ánh phán đoán sai của người phân tích hơn là thị trường định giá sai.',
    'Ví dụ giả định: bốn công ty so sánh có P/E 8, 10, 12 và 30. Trung bình = 15, trung vị = 11. Với EPS của công ty mục tiêu bằng 5, giá hàm ý là 75 (theo trung bình) hay 55 (theo trung vị): chênh khoảng 36% chỉ vì một ngoại lệ. Cần tìm hiểu vì sao công ty 30 lần khác biệt trước khi giữ hay loại.',
    'Hạn chế (theo Wikipedia): hệ số chỉ là ảnh chụp tại một thời điểm, khác biệt kế toán làm các hệ số không so sánh trực tiếp được, và nếu cả ngành đang bị định giá sai (như trong bong bóng) thì so sánh tương đối cũng sai theo.',
  ],
  causalChain: [
    { from: 'Chọn nhóm so sánh theo ngành hoặc quy mô', to: 'Nhóm có thể khác nhau về tăng trưởng, rủi ro và biên lợi nhuận', mechanism: 'Hệ số định giá phản ánh kỳ vọng tăng trưởng và rủi ro; hai công ty cùng ngành nhưng khác kỳ vọng sẽ có hệ số khác nhau hợp lý.' },
    { from: 'Nhóm so sánh có khác biệt không được điều chỉnh', to: 'Hệ số trung bình không phù hợp với công ty mục tiêu', mechanism: 'Áp hệ số của công ty tăng trưởng nhanh vào công ty tăng trưởng chậm sẽ ra giá quá cao, và ngược lại.' },
    { from: 'Có ngoại lệ trong nhóm (lãi thấp tạm thời, thương vụ một lần)', to: 'Trung bình bị lệch', mechanism: 'P/E rất cao hoặc rất thấp do yếu tố tạm thời kéo trung bình; trung vị hoặc loại ngoại lệ có lý do giúp ổn định hơn.' },
    { from: 'Cả nhóm bị định giá cao hoặc thấp bất thường', to: 'Kết luận "rẻ so với nhóm" nhưng không rẻ tuyệt đối', mechanism: 'So sánh tương đối kế thừa sai lệch chung của thị trường; không cho biết nhóm đúng giá hay không.' },
    { from: 'Kết hợp với phương pháp khác (DCF, dữ liệu lịch sử)', to: 'Kiểm tra chéo kết luận', mechanism: 'Hai phương pháp dựa trên giả định khác nhau; chênh lệch lớn là tín hiệu cần xem lại giả định.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cổ phiếu Việt Nam', effect: 'Số công ty cùng ngành niêm yết có thể ít; nhóm nhỏ làm trung bình dễ lệch bởi một vài công ty, nên cần xem kỹ từng công ty.', direction: 'mixed' },
    { group: 'Công ty chứng khoán viết báo cáo phân tích', effect: 'Cách chọn nhóm so sánh và hệ số mục tiêu ảnh hưởng giá mục tiêu; nên đọc phần giải thích nhóm so sánh.', direction: 'mixed' },
    { group: 'Doanh nghiệp tư nhân chuẩn bị huy động vốn hoặc niêm yết', effect: 'Thường dùng nhóm công ty niêm yết làm tham chiếu và áp chiết khấu thanh khoản; cần điều chỉnh cho khác biệt quy mô và quản trị.', direction: 'mixed' },
    { group: 'Nhà đầu tư so sánh với thị trường khu vực', effect: 'Khác biệt thuế, kế toán, cấu trúc sở hữu, giới hạn nhà đầu tư nước ngoài làm hệ số khó so sánh trực tiếp.', direction: 'down' },
  ],
  indicators: [
    { name: 'Tăng trưởng lợi nhuận, ROE, biên lợi nhuận của từng công ty trong nhóm', why: 'Để kiểm soát khác biệt cơ bản trước khi so hệ số.', where: 'Báo cáo tài chính; cổng thông tin của sở giao dịch chứng khoán' },
    { name: 'Hệ số nợ / vốn chủ sở hữu', why: 'Hệ số vốn chủ sở hữu như P/E nhạy với đòn bẩy.', where: 'Bảng cân đối kế toán' },
    { name: 'Hệ số P/E, EV/EBITDA, P/B của cả nhóm (trung bình, trung vị, độ phân tán)', why: 'Độ phân tán lớn là tín hiệu nhóm không đồng nhất.', where: 'Nền tảng dữ liệu chứng khoán; tự tính từ giá và báo cáo tài chính' },
    { name: 'Lợi nhuận bất thường và khoản một lần', why: 'Loại ra khi tính hệ số để không bị lệch.', where: 'Thuyết minh báo cáo tài chính' },
  ],
  counterpoints: [
    'Dùng nhóm so sánh cũng có ưu điểm: đơn giản, dễ truyền đạt và phản ánh các chỉ tiêu mà thị trường thực sự theo dõi. Vấn đề chỉ nảy sinh khi dùng một con số trung bình mà không giải thích khác biệt.',
    'Phương pháp hồi quy hệ số theo tăng trưởng, rủi ro, tỷ lệ chi trả cho phép mở rộng nhóm, nhưng cần đủ số quan sát và dữ liệu chất lượng.',
    'Ví dụ số trong bài là giả định minh họa, không phải định giá một doanh nghiệp thật hay khuyến nghị đầu tư.',
  ],
  glossary: [
    { term: 'Comps (nhóm so sánh)', definition: 'Các doanh nghiệp được chọn làm tham chiếu để so hệ số định giá.' },
    { term: 'Hệ số định giá', definition: 'Giá hoặc giá trị chia cho một chỉ tiêu tài chính chuẩn hóa như lợi nhuận hay doanh thu.' },
    { term: 'EV (giá trị doanh nghiệp)', definition: 'Giá trị vốn hóa cộng nợ ròng, thể hiện giá trị toàn bộ hoạt động kinh doanh.' },
    { term: 'Trung vị', definition: 'Giá trị ở giữa khi sắp xếp; ít bị ngoại lệ chi phối hơn trung bình.' },
    { term: 'Yếu tố cơ bản', definition: 'Tăng trưởng, rủi ro, dòng tiền, quyết định giá trị hợp lý của hệ số.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'comparable-companies-peer-pitfalls-q',
    question: 'Ví dụ giả định: nhóm so sánh có P/E 8, 10, 12 và 30. Công ty mục tiêu có EPS 5 và tăng trưởng chậm. Cách xử lý hợp lý nhất là gì?',
    options: [
      { id: 'a', text: 'Dùng P/E trung bình 15 nên giá hàm ý 75 là kết luận.', explain: 'Một ngoại lệ 30 kéo trung bình lên, và chưa rõ nó có thực sự tương tự (tăng trưởng nhanh hơn?) không.' },
      { id: 'b', text: 'Tìm hiểu vì sao công ty P/E 30 khác (tăng trưởng, lãi bất thường) và xem trung vị 11 (giá hàm ý 55) hoặc loại ngoại lệ có lý do.', correct: true, explain: 'Đúng. Kiểm soát khác biệt cơ bản và dùng thống kê ít nhạy ngoại lệ giúp kết quả bền hơn.' },
      { id: 'c', text: 'Chọn P/E thấp nhất 8 để an toàn.', explain: 'Chọn cực trị cũng là chọn kết quả mong muốn thay vì phân tích; cần lý do dựa trên cơ bản.' },
    ],
  },
  sources: [
    { title: 'It is all relative… Multiples, Comparables and Value', publisher: 'Aswath Damodaran, NYU Stern', url: 'https://pages.stern.nyu.edu/~adamodar/pdfiles/country/relvalAIMR.pdf' },
    { title: 'Comparable company analysis', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Comparable_company_analysis' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 194,
}
