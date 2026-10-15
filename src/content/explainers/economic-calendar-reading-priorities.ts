import type { Explainer } from '../../../shared/explainer'

export const economicCalendarReadingPriorities: Explainer = {
  id: 'economic-calendar-reading-priorities',
  slug: 'economic-calendar-reading-priorities',
  question: 'Đọc lịch dữ liệu kinh tế thế nào: số nào quan trọng và "kỳ vọng so với thực tế" nghĩa là gì?',
  title: 'Đọc lịch dữ liệu kinh tế: ưu tiên và "kỳ vọng so với thực tế"',
  topic: 'macro',
  tldr: 'Lịch kinh tế liệt kê hàng chục số liệu mỗi tuần, nhưng chỉ vài số thật sự làm thay đổi kỳ vọng về lãi suất và tăng trưởng. Thị trường phản ứng với **độ lệch giữa số thực tế và kỳ vọng**, không phải mức tuyệt đối của số đó. Cách đọc hợp lý: biết số nào dẫn dắt chính sách tiền tệ, đọc xu hướng nhiều tháng thay vì một tháng, và nhớ số đầu tiên có thể được điều chỉnh sau.',
  keyPoints: [
    'Lịch công bố của các cơ quan thống kê là nguồn đầu tiên: ví dụ lịch phát hành tháng 10/2026 của Cục Thống kê Lao động Mỹ (BLS, trang cập nhật 18/2/2026) liệt kê Việc làm (Employment Situation) 2/10, Chỉ số giá tiêu dùng (CPI) 14/10, Chỉ số giá sản xuất (PPI) 15/10 và Chỉ số chi phí lao động 30/10. Ngày giờ cụ thể thay đổi theo từng năm, nên cần xem lịch hiện hành.',
    'Theo lịch FOMC của Fed (cập nhật 7/10/2026): năm 2026 có tám cuộc họp, trong đó tháng 3, 6, 9 và 12 có Dự báo Kinh tế (SEP); biên bản được công bố ba tuần sau quyết định (ví dụ biên bản cuộc họp 15–16/9 công bố 7/10/2026; cuộc họp 27–28/10 chưa có SEP). Các sự kiện này cũng là mốc quan trọng trên lịch.',
    'Phân loại chỉ báo (Wikipedia, "Economic indicator"): **chỉ báo dẫn dắt** thay đổi trước nền kinh tế (giấy phép xây dựng, đơn xin trợ cấp thất nghiệp lần đầu, kỳ vọng người tiêu dùng, đường cong lợi suất), **chỉ báo đồng thời** phản ánh hiện tại (GDP, sản xuất công nghiệp, doanh số bán lẻ) và **chỉ báo trễ** đổi sau (tỷ lệ thất nghiệp, tỷ lệ tín dụng tiêu dùng trên thu nhập; trang này cũng xếp điều kiện tín dụng vào nhóm dẫn dắt, nên cách phân nhóm không tuyệt đối).',
    '**Kỳ vọng so với thực tế**: thị trường đã định giá phần dự đoán (đồng thuận của các nhà phân tích) nên giá chỉ phản ứng với "bất ngờ" = thực tế − kỳ vọng. Ví dụ giả định: CPI tháng kỳ vọng +0,3%, thực tế +0,4% → bất ngờ lên +0,1 điểm phần trăm, có thể làm kỳ vọng lãi suất nghiêng về cao hơn; nếu thực tế đúng +0,3% thì thường ít thay đổi dù số nghe "cao".',
    'Mẹo đọc thực dụng: xem số chính và số hợp phần (lõi so với tổng), xu hướng ba tháng, và điều chỉnh của các kỳ trước; một số đơn lẻ nhiễu hơn trung bình nhiều tháng.',
  ],
  causalChain: [
    { from: 'Cơ quan thống kê công bố số liệu theo lịch', to: 'Thị trường so với kỳ vọng đồng thuận', mechanism: 'Kỳ vọng hình thành từ khảo sát nhà phân tích và mô hình trước ngày công bố; chênh lệch với thực tế là thông tin mới.' },
    { from: 'Số liệu bất ngờ (chênh so với kỳ vọng)', to: 'Kỳ vọng về chính sách tiền tệ đổi', mechanism: 'Việc làm mạnh hoặc lạm phát cao hơn dự kiến làm tăng khả năng lãi suất cao lâu hơn, và ngược lại.' },
    { from: 'Kỳ vọng lãi suất đổi', to: 'Giá trái phiếu, tỷ giá, cổ phiếu biến động', mechanism: 'Lợi suất và đồng USD điều chỉnh theo kỳ vọng mới, kéo theo giá tài sản khác.' },
    { from: 'Số liệu sau đó được điều chỉnh', to: 'Bức tranh thay đổi', mechanism: 'Ước tính đầu tiên dựa trên mẫu chưa đầy đủ; điều chỉnh có thể làm phản ứng ban đầu thành quá đà.' },
    { from: 'Nhìn nhiều số liệu và xu hướng', to: 'Giảm rủi ro phản ứng quá mức với nhiễu', mechanism: 'Một số tháng đơn lẻ dễ nhiễu; xu hướng nhiều tháng và nhiều chỉ báo đáng tin hơn.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư theo dõi tỷ giá và dòng vốn', effect: 'Số liệu lạm phát và việc làm của Mỹ làm đổi kỳ vọng về Fed, từ đó tác động USD và áp lực lên tỷ giá USD/VND.', direction: 'mixed' },
    { group: 'Doanh nghiệp xuất nhập khẩu', effect: 'Lịch số liệu và quyết định lãi suất của Fed hay ECB tác động tỷ giá và nhu cầu nhập khẩu từ các thị trường đó.', direction: 'mixed' },
    { group: 'Người theo dõi kinh tế trong nước', effect: 'Cục Thống kê công bố CPI, sản xuất công nghiệp, bán lẻ hằng tháng; nên đọc xu hướng nhiều tháng và so cùng kỳ.', direction: 'up' },
    { group: 'Nhà đầu tư cá nhân', effect: 'Phản ứng với từng số đơn lẻ dễ dẫn tới giao dịch theo nhiễu; lịch giúp biết khi nào biến động có thể cao.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Lịch phát hành chính thức của BLS và các cơ quan thống kê', why: 'Biết ngày giờ chính xác và tên số liệu.', where: 'bls.gov/schedule/news_release; nso.gov.vn cho Việt Nam' },
    { name: 'Lịch họp và biên bản của FOMC, NHTW lớn', why: 'Các mốc chính sách quyết định lãi suất.', where: 'federalreserve.gov (FOMC calendars); trang của ECB, BoE' },
    { name: 'Số liệu việc làm và lạm phát của các nền kinh tế lớn', why: 'Hai nhóm này dẫn dắt kỳ vọng về lãi suất.', where: 'BLS (Mỹ), Eurostat, Cục Thống kê (Việt Nam)' },
    { name: 'Kỳ vọng đồng thuận và độ lệch (bất ngờ)', why: 'Phản ứng thị trường gắn với độ lệch.', where: 'Nền tảng lịch kinh tế, khảo sát của các hãng thông tấn tài chính' },
  ],
  counterpoints: [
    'Đồng thuận không phải sự thật: kỳ vọng có thể lệch hệ thống, và bất ngờ đôi khi do kỳ vọng sai chứ không phải số bất thường.',
    'Số liệu "quan trọng" thay đổi theo thời kỳ: khi lạm phát cao, CPI là trọng tâm; khi lo suy thoái, việc làm và tăng trưởng nổi lên. Không có danh sách cố định cho mọi lúc.',
    'Lịch và quy ước của Mỹ trong bài là ví dụ tại thời điểm viết; lịch hiện hành, múi giờ và ngày nghỉ có thể thay đổi, nên kiểm tra trực tiếp.',
  ],
  glossary: [
    { term: 'Đồng thuận (consensus)', definition: 'Trung bình hoặc trung vị dự báo của các nhà phân tích cho một số liệu.' },
    { term: 'Bất ngờ', definition: 'Chênh lệch giữa số thực tế và kỳ vọng.' },
    { term: 'Chỉ báo dẫn dắt / đồng thời / trễ', definition: 'Phân loại theo việc đổi trước, cùng lúc hay sau nền kinh tế.' },
    { term: 'SEP', definition: 'Summary of Economic Projections, dự báo kinh tế của các thành viên FOMC, công bố kèm một số cuộc họp.' },
    { term: 'Hiệu chỉnh', definition: 'Thay đổi số liệu đã công bố khi có thêm thông tin.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'economic-calendar-reading-priorities-q',
    question: 'Ví dụ giả định: kỳ vọng việc làm Mỹ tăng 150 nghìn, thực tế công bố 140 nghìn, thấp hơn tháng trước (180 nghìn). Cách đọc nào hợp lý?',
    options: [
      { id: 'a', text: 'Số 140 nghìn thấp hơn tháng trước nên thị trường chắc chắn giảm mạnh.', explain: 'Phản ứng phụ thuộc độ lệch so với kỳ vọng (−10 nghìn, nhỏ) và các thành phần khác, không chỉ so với tháng trước.' },
      { id: 'b', text: 'Bất ngờ nhỏ (−10 nghìn so với kỳ vọng); cần xem thêm tỷ lệ thất nghiệp, lương, điều chỉnh các tháng trước và xu hướng nhiều tháng.', correct: true, explain: 'Đúng. Phản ứng gắn với độ lệch và bức tranh tổng hợp, không phải một con số đơn lẻ.' },
      { id: 'c', text: 'Kỳ vọng không quan trọng, chỉ cần so với tháng trước.', explain: 'Thị trường đã định giá kỳ vọng; thông tin mới nằm ở phần lệch.' },
    ],
  },
  sources: [
    { title: 'Schedule of Selected Releases – October 2026', publisher: 'U.S. Bureau of Labor Statistics', url: 'https://www.bls.gov/schedule/news_release/' },
    { title: 'FOMC calendars', publisher: 'Federal Reserve Board', url: 'https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm' },
    { title: 'Economic indicator', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Economic_indicator' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 200,
}
