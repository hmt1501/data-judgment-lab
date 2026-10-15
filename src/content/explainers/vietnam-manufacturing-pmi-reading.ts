import type { Explainer } from '../../../shared/explainer'

export const vietnamManufacturingPmiReading: Explainer = {
  id: 'vietnam-manufacturing-pmi-reading',
  slug: 'vietnam-manufacturing-pmi-reading',
  question: 'Đọc PMI sản xuất Việt Nam thế nào cho đúng?',
  title: 'PMI Việt Nam: nhìn đơn hàng, việc làm và tồn kho cùng lúc, đừng chỉ nhìn con số tổng',
  topic: 'vietnam-economy',
  tldr: 'PMI sản xuất Việt Nam do S&P Global khảo sát hằng tháng, ngưỡng 50 phân tách mở rộng và thu hẹp. Theo Viet Nam News (2/7/2026), PMI tháng 6/2026 là **51,8** (tháng 5: 52,8) — vẫn mở rộng nhưng chậm hơn, trong khi **việc làm tiếp tục giảm**. Đọc đúng là xem số tổng cùng các thành phần.',
  keyPoints: [
    'Theo Viet Nam News (đăng 2/7/2026, dẫn báo cáo S&P Global ngày 1/7/2026): PMI tháng 6/2026 là 51,8, giảm 1,0 điểm so với 52,8 của tháng 5 nhưng trên ngưỡng 50.',
    'Cùng bài: đơn hàng mới tăng thêm, góp phần giúp sản lượng tăng tháng thứ 14 liên tiếp; mua đầu vào tăng; nhưng **tồn kho đầu vào giảm mạnh** do chuỗi cung ứng chậm trễ, và doanh nghiệp **tiếp tục giảm nhân sự** (S&P Global gọi việc làm là "điểm yếu").',
    'Giá đầu vào vẫn tăng mạnh nhưng ở mức lạm phát thấp nhất từ đầu năm; niềm tin doanh nghiệp cao nhất trong 4 tháng nhưng vẫn thấp hơn trước xung đột ở Trung Đông, theo cùng bài.',
    'Nguyên tắc đọc: PMI là chỉ số khuếch tán (xem bài về PMI), nên 51,8 nghĩa là số doanh nghiệp báo cải thiện nhiều hơn số báo xấu đi, **không** phải sản xuất tăng 1,8%.',
    'Thành phần thời gian giao hàng được đảo chiều: chậm trễ cung ứng có thể đẩy PMI lên dù không phải do cầu mạnh, vì vậy cần xem cùng tồn kho và đơn hàng xuất khẩu mới.',
  ],
  causalChain: [
    { from: 'Đơn hàng mới (trong nước và xuất khẩu) tăng', to: 'Sản lượng và mua đầu vào tăng', mechanism: 'Doanh nghiệp tăng sản xuất để đáp ứng đơn hàng; thành phần đơn hàng mới có trọng số lớn trong PMI (0,30 ở bản S&P Global).' },
    { from: 'Sản lượng tăng nhưng nhu cầu lao động không tăng', to: 'Việc làm giảm dù PMI trên 50', mechanism: 'Doanh nghiệp tận dụng công suất, tồn kho và tự động hóa hoặc còn thận trọng về triển vọng; việc làm trong PMI đo thay đổi so với tháng trước chứ không đo mức độ.' },
    { from: 'Chuỗi cung ứng chậm trễ', to: 'Tồn kho đầu vào giảm, thời gian giao hàng dài hơn', mechanism: 'Giao hàng chậm làm thành phần đảo chiều tăng điểm, nâng PMI tổng nhưng phản ánh căng thẳng cung hơn là sức cầu.' },
    { from: 'Giá đầu vào tăng', to: 'Biên lợi nhuận bị ép hoặc giá bán tăng', mechanism: 'Doanh nghiệp chuyển một phần chi phí sang giá bán; mức chuyển phụ thuộc sức mua đối tác và hợp đồng.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp xuất khẩu, công nghiệp chế biến chế tạo', effect: 'PMI trên 50 và đơn hàng mới tăng báo hiệu nhu cầu sản xuất còn tốt, nhưng cần theo dõi giá đầu vào và độ ổn định chuỗi cung ứng.', direction: 'up' },
    { group: 'Người lao động ngành sản xuất', effect: 'Việc làm trong PMI giảm cho thấy sản lượng tăng chưa chuyển hóa thành tuyển dụng.', direction: 'down' },
    { group: 'Nhà đầu tư cổ phiếu công nghiệp, khu công nghiệp', effect: 'PMI là tín hiệu sớm về triển vọng đơn hàng nhưng cần kiểm chứng bằng sản lượng công nghiệp và lợi nhuận doanh nghiệp.', direction: 'mixed' },
    { group: 'Nhà hoạch định chính sách', effect: 'Giá đầu vào tăng mạnh là tín hiệu lạm phát chi phí cần theo dõi cùng CPI.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'PMI tổng, đơn hàng mới, đơn hàng xuất khẩu mới', why: 'Tín hiệu sớm nhất về cầu.', where: 'S&P Global (PMI sản xuất Việt Nam), công bố đầu tháng; bản tin báo chí như Viet Nam News' },
    { name: 'PMI việc làm và tồn kho đầu vào', why: 'Cho biết sản xuất tăng có đi kèm tuyển dụng, hay đang rút tồn kho.', where: 'Cùng báo cáo PMI' },
    { name: 'Chỉ số sản xuất công nghiệp (IIP)', why: 'Số liệu cứng kiểm chứng tín hiệu khảo sát.', where: 'Cục Thống kê (nso.gov.vn)' },
  ],
  counterpoints: [
    'PMI là khảo sát một panel doanh nghiệp, nên không phản ánh đầy đủ doanh nghiệp nhỏ, hộ kinh doanh.',
    'Đơn hàng có thể tăng nhất thời (ví dụ khách hàng đặt sớm để tích trữ phòng ngừa rủi ro nguồn cung; đây là khả năng chung, bài báo nguồn không nói vậy), nên cần nhiều tháng để kết luận xu hướng.',
    'Một tháng giảm điểm nhưng vẫn trên 50 không phải suy giảm; ngược lại một tháng trên 50 sau chuỗi dưới 50 cũng chưa chắc là phục hồi bền vững.',
  ],
  glossary: [
    { term: 'PMI sản xuất', definition: 'Chỉ số khuếch tán tổng hợp từ khảo sát về đơn hàng, sản lượng, việc làm, giao hàng và tồn kho.' },
    { term: 'Đơn hàng mới xuất khẩu', definition: 'Thành phần khảo sát riêng về đơn hàng từ nước ngoài.' },
    { term: 'Tích trữ phòng ngừa', definition: 'Khách hàng đặt hàng sớm để lập tồn kho an toàn trước rủi ro nguồn cung.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-manufacturing-pmi-reading-q',
    question: 'PMI sản xuất đạt 51,8, đơn hàng mới tăng nhưng chỉ số việc làm dưới 50. Kết luận hợp lý nhất?',
    options: [
      { id: 'a', text: 'Sản xuất mở rộng ròng nhưng chưa kéo theo tuyển dụng; cần theo dõi thêm.', correct: true, explain: 'Đúng. Số tổng trên 50 cho biết mở rộng; chỉ số việc làm dưới 50 cho thấy tuyển dụng vẫn giảm.' },
      { id: 'b', text: 'Sản xuất đang thu hẹp vì việc làm giảm.', explain: 'Một thành phần dưới 50 không làm tổng thu hẹp khi thành phần có trọng số lớn hơn (đơn hàng, sản lượng) trên 50.' },
      { id: 'c', text: 'Sản lượng tăng 1,8%.', explain: 'PMI không đo phần trăm thay đổi sản lượng.' },
    ],
  },
  sources: [
    { title: 'Manufacturing sector ends first half of 2026 with firm growth as PMI holds above no-change mark', publisher: 'Viet Nam News (bài 2/7/2026)', url: 'https://vietnamnews.vn/economy/1784554/manufacturing-sector-ends-first-half-of-2026-with-firm-growth-as-pmi-holds-above-no-change-mark.html' },
    { title: 'Purchasing Managers\' Index', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Purchasing_Managers%27_Index' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 88,
}
