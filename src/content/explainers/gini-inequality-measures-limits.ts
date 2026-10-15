import type { Explainer } from '../../../shared/explainer'

export const giniInequalityMeasuresLimits: Explainer = {
  id: 'gini-inequality-measures-limits',
  slug: 'gini-inequality-measures-limits',
  question: 'Hệ số Gini cho biết gì và có những giới hạn nào khi đọc?',
  title: 'Hệ số Gini và các thước đo bất bình đẳng: đọc đúng, thấy giới hạn',
  topic: 'macro',
  tldr: '**Gini** tóm tắt mức bất bình đẳng thành một số từ 0 (hoàn toàn đều) đến 1 (một người giữ tất cả). Con số tiện nhưng **giấu cấu trúc**: nhiều phân phối rất khác nhau cho cùng một Gini, và nó phụ thuộc cách định nghĩa thu nhập, đơn vị (hộ hay cá nhân) và độ chi tiết dữ liệu. Vì vậy nên đọc cùng **tỷ trọng nhóm cao nhất, tỷ số Palma, tỷ số quintile** và số liệu tài sản.',
  keyPoints: [
    'Gini dựa trên **đường Lorenz**: bằng diện tích giữa đường bình đẳng và đường Lorenz chia cho tổng diện tích dưới đường bình đẳng; nằm trong khoảng 0–1 nếu không có giá trị âm (Wikipedia).',
    '**Cùng Gini, phân phối khác nhau:** hai quần thể có thể cùng Gini 0,5 nhưng một nơi nửa dân số không có thu nhập, nơi kia chia theo tỷ lệ 25/75; khi hai đường Lorenz cắt nhau, Gini không xếp hạng được.',
    'Gini **nhạy với phần giữa** của phân phối và tương đối **kém nhạy ở hai đầu** (theo Wikipedia, bài về chỉ số bất bình đẳng); vì vậy cần thêm tỷ số **Palma** (thu nhập 10% giàu nhất so với 40% nghèo nhất), **quintile** (20% trên so với 20% dưới), top 1% hoặc 10%.',
    'Kết quả phụ thuộc lựa chọn đo: hộ hay cá nhân, trước hay sau thuế, có tính phúc lợi bằng hiện vật không, số nhóm chia (chia 5 nhóm cho Gini thấp hơn chia 20 nhóm), quy mô mẫu nhỏ làm Gini thấp hơn.',
    'Gini thu nhập có thể che giấu bất bình đẳng **tài sản** (ví dụ Thụy Điển có Gini thu nhập thấp nhưng Gini tài sản cao hơn nhiều), và là thước đo **tương đối**: có thể tăng dù nghèo tuyệt đối giảm.',
  ],
  causalChain: [
    { from: 'Thu thập dữ liệu thu nhập/chi tiêu từ khảo sát hộ', to: 'Dựng đường Lorenz và tính Gini', mechanism: 'Sắp xếp theo thu nhập, tính tỷ trọng tích lũy; kết quả phụ thuộc định nghĩa thu nhập và đơn vị đo.' },
    { from: 'Chọn một con số Gini duy nhất để so sánh', to: 'Mất thông tin về nơi bất bình đẳng xảy ra', mechanism: 'Phân phối khác nhau cho cùng Gini; Gini cũng không cộng được từ các nhóm con.' },
    { from: 'Bổ sung Palma, quintile, top shares', to: 'Thấy rõ hai đầu phân phối', mechanism: 'Mỗi thước đo nhấn mạnh phần khác; Palma tập trung vào đuôi trên và dưới, bỏ qua nhóm giữa.' },
    { from: 'Thay đổi nhân khẩu (già hóa, kích thước hộ)', to: 'Gini đổi dù thu nhập từng người không đổi', mechanism: 'Thay đổi cấu trúc hộ hoặc tuổi làm đổi phân phối thu nhập hộ mà không đổi thu nhập cá nhân.' },
  ],
  vietnamImpact: [
    { group: 'Người đọc báo cáo bất bình đẳng của Việt Nam', effect: 'Gini từ khảo sát hộ có thể thấp hơn thực tế vì khảo sát khó bắt được thu nhập cao nhất và tài sản; cần đọc kèm số liệu theo nhóm.', direction: 'mixed' },
    { group: 'Hộ nghèo, hộ thu nhập thấp', effect: 'Gini tương đối có thể không đổi dù thu nhập tuyệt đối của họ tăng; chỉ số nghèo tuyệt đối cho bức tranh bổ sung.', direction: 'mixed' },
    { group: 'Người làm chính sách địa phương', effect: 'So sánh giữa vùng cần cùng định nghĩa và độ chi tiết; Gini không cộng được từ các nhóm con.', direction: 'mixed' },
    { group: 'Nhà đầu tư/doanh nghiệp tiêu dùng', effect: 'Phân khúc thu nhập quan trọng hơn con số trung bình; Gini chỉ gợi ý mức tập trung chứ không cho biết quy mô từng phân khúc.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Hệ số Gini (thu nhập, chi tiêu, tài sản)', why: 'Tóm tắt tổng thể, nhưng cần biết định nghĩa.', where: 'Khảo sát mức sống hộ gia đình (Cục Thống kê), Ngân hàng Thế giới, OECD' },
    { name: 'Tỷ số Palma và tỷ số quintile', why: 'Nhấn mạnh hai đầu phân phối.', where: 'Tự tính từ bảng thu nhập theo nhóm; báo cáo phát triển con người của UNDP' },
    { name: 'Tỷ trọng thu nhập của top 10% / 1%', why: 'Tập trung vào mức độ tập trung ở đầu cao.', where: 'Cơ sở dữ liệu bất bình đẳng thế giới, nghiên cứu thuế' },
    { name: 'Chỉ số nghèo tuyệt đối', why: 'Bổ sung cho Gini tương đối.', where: 'Cục Thống kê, Ngân hàng Thế giới' },
  ],
  counterpoints: [
    'Mỗi thước đo có điểm yếu: Palma bỏ qua 50% giữa, quintile bỏ qua nhóm giữa, top shares không cho một số tóm tắt duy nhất; nên dùng bộ thước đo thay vì một con số.',
    'Gini mẫu là thống kê cần sai số chuẩn; chênh lệch nhỏ giữa hai năm có thể không có ý nghĩa thống kê.',
    'Bất bình đẳng đo bằng các chỉ số này mang tính "ảnh chụp" và không nói về dịch chuyển xã hội (mobility).',
  ],
  glossary: [
    { term: 'Hệ số Gini', definition: 'Chỉ số 0–1 đo mức chênh lệch phân phối, dựa trên đường Lorenz.' },
    { term: 'Đường Lorenz', definition: 'Đường biểu diễn tỷ trọng thu nhập tích lũy theo tỷ trọng dân số tích lũy.' },
    { term: 'Tỷ số Palma', definition: 'Thu nhập của 10% giàu nhất chia cho thu nhập của 40% nghèo nhất.' },
    { term: 'Tỷ số quintile', definition: 'Thu nhập của 20% giàu nhất chia cho 20% nghèo nhất.' },
    { term: 'Chỉ số Theil', definition: 'Chỉ số bất bình đẳng dựa trên entropy, phân tách được theo nhóm.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'gini-inequality-measures-limits-q',
    question: 'Hai quốc gia có cùng hệ số Gini 0,40. Kết luận nào hợp lý?',
    options: [
      { id: 'a', text: 'Phân phối thu nhập của hai nước chắc chắn giống nhau.', explain: 'Sai. Nhiều phân phối khác nhau có thể cho cùng Gini; đường Lorenz có thể khác hình dạng.' },
      { id: 'b', text: 'Chưa kết luận được; cần xem thêm tỷ trọng nhóm cao nhất, Palma, quintile và định nghĩa thu nhập.', correct: true, explain: 'Đúng. Gini che giấu cấu trúc phân phối và phụ thuộc cách đo.' },
      { id: 'c', text: 'Hai nước có mức nghèo tuyệt đối như nhau.', explain: 'Gini là thước đo tương đối, không nói về mức nghèo tuyệt đối.' },
    ],
  },
  sources: [
    { title: 'Gini coefficient', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Gini_coefficient' },
    { title: 'Income inequality metrics', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Income_inequality_metrics' },
    { title: 'Gini index (SI.POV.GINI) – dữ liệu dựa trên khảo sát hộ gia đình của các cơ quan thống kê', publisher: 'World Bank, Poverty and Inequality Platform', url: 'https://data.worldbank.org/indicator/SI.POV.GINI' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 159,
}
