import type { Explainer } from '../../../shared/explainer'

export const pmiDiffusionIndexReading: Explainer = {
  id: 'pmi-diffusion-index-reading',
  slug: 'pmi-diffusion-index-reading',
  question: 'PMI và chỉ số khuếch tán đo gì, và ngưỡng 50 nghĩa là gì?',
  title: 'PMI là chỉ số khuếch tán: 50 là "không đổi ròng", không phải mức độ lớn của tăng trưởng',
  topic: 'macro',
  tldr: 'PMI được tính từ khảo sát: mỗi doanh nghiệp chỉ trả lời tốt hơn, như cũ hay kém hơn so với tháng trước. Chỉ số = (% tốt hơn − % kém hơn) ÷ 2 + 50, nên **50 là không đổi ròng**, trên 50 là mở rộng, dưới 50 là thu hẹp. PMI cho biết **hướng và độ lan rộng**, không cho biết quy mô thay đổi.',
  keyPoints: [
    'Theo mô tả về PMI: người quản lý mua hàng ở doanh nghiệp tư nhân trả lời câu hỏi định tính (ví dụ sản lượng "cao hơn, như cũ hay thấp hơn" tháng trước); kết quả được quy thành **chỉ số khuếch tán**.',
    'Công thức: PMI = (P1 − P3) ÷ 2 + 50, với P1 là tỷ lệ báo cải thiện và P3 là tỷ lệ báo xấu đi. Chỉ số bằng 100 nếu mọi người báo cải thiện và 0 nếu mọi người báo xấu đi; **không tính mức độ mạnh yếu** của từng câu trả lời.',
    'PMI sản xuất tổng hợp năm thành phần: đơn hàng mới, sản lượng, việc làm, thời gian giao hàng của nhà cung cấp (đảo chiều) và tồn kho đầu vào; với S&P Global trọng số là 0,30 / 0,25 / 0,20 / 0,15 / 0,10 theo thứ tự đó (ISM tính trọng số đều).',
    'Dữ liệu thường được **điều chỉnh mùa vụ**, nên so sánh tháng với tháng được; panel khảo sát được chọn theo cơ cấu ngành và phản hồi gia quyền theo quy mô doanh nghiệp.',
    'Hiểu sai thường gặp: PMI giảm từ 52 xuống 51 **vẫn là mở rộng**, chỉ là mức lan rộng yếu hơn; PMI trên 50 không nói sản lượng tăng bao nhiêu phần trăm.',
  ],
  causalChain: [
    { from: 'Điều kiện kinh doanh thay đổi (đơn hàng, giá, nguồn cung)', to: 'Doanh nghiệp trả lời khảo sát "tốt hơn / như cũ / kém hơn"', mechanism: 'Người quản lý mua hàng thấy sớm sự thay đổi trong đặt hàng và tồn kho nên khảo sát phản ánh nhanh trước khi có số thống kê chính thức.' },
    { from: 'Tỷ lệ trả lời được tổng hợp', to: 'Chỉ số khuếch tán trên thang 0–100', mechanism: 'Mỗi thành phần = (% tốt hơn − % kém hơn) ÷ 2 + 50; ví dụ giả định: 40% tốt hơn, 20% kém hơn, 40% như cũ cho (40 − 20) ÷ 2 + 50 = 60.' },
    { from: 'Các thành phần với trọng số', to: 'PMI tổng hợp', mechanism: 'Đơn hàng mới có trọng số lớn nhất ở bản S&P Global; thời gian giao hàng dài hơn được tính là tín hiệu tích cực (đảo chiều) vì thường gắn với nhu cầu cao, nhưng cũng có thể do tắc nghẽn.' },
    { from: 'PMI trên hay dưới 50', to: 'Tín hiệu hướng đi của khu vực sản xuất', mechanism: 'Chỉ số khuếch tán đo số lượng doanh nghiệp báo thay đổi, không đo độ lớn; vì vậy cần đối chiếu với sản lượng công nghiệp và xuất khẩu thực tế.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp xuất khẩu và nhà máy FDI', effect: 'PMI Việt Nam của S&P Global là tín hiệu sớm về đơn hàng; theo bài của Viet Nam News (2/7/2026), PMI tháng 6/2026 là 51,8, giảm từ 52,8 của tháng 5 nhưng vẫn trên 50.', direction: 'mixed' },
    { group: 'Nhà đầu tư chứng khoán', effect: 'PMI là dữ liệu công bố sớm (đầu tháng), thường được dùng để đánh giá triển vọng nhóm sản xuất, xuất khẩu; nhưng không thay được báo cáo lợi nhuận.', direction: 'mixed' },
    { group: 'Người lao động ngành sản xuất', effect: 'Cùng bài báo nêu việc làm vẫn giảm dù PMI trên 50 — tức là sản lượng và việc làm có thể lệch nhau.', direction: 'down' },
  ],
  indicators: [
    { name: 'PMI tổng và PMI đơn hàng mới', why: 'Đơn hàng mới có trọng số lớn và báo trước sản lượng.', where: 'S&P Global (PMI sản xuất Việt Nam), công bố ngày làm việc đầu tiên mỗi tháng; bản tin của báo chí' },
    { name: 'Chỉ số thành phần: việc làm, tồn kho, giá đầu vào', why: 'Cho thấy PMI cao do cầu thật hay do tích trữ tồn kho phòng ngừa.', where: 'Phần phân tích kèm thông cáo PMI' },
    { name: 'Sản lượng công nghiệp (IIP) và xuất khẩu', why: 'Dữ liệu cứng để kiểm chứng tín hiệu khảo sát.', where: 'Cục Thống kê (nso.gov.vn)' },
  ],
  counterpoints: [
    'Là khảo sát nên PMI có thể chịu thiên lệch mẫu; panel không đủ đại diện cho cả nền kinh tế, nhất là khu vực nhỏ và không chính thức.',
    'PMI có thể bị méo bởi tích trữ phòng ngừa hoặc tắc nghẽn chuỗi cung ứng (thời gian giao hàng dài hơn làm thành phần đảo chiều tăng).',
    'PMI trên 50 kéo dài không bảo đảm GDP tăng nhanh; quan hệ giữa PMI và GDP không cố định giữa các nền kinh tế và các giai đoạn.',
  ],
  glossary: [
    { term: 'Chỉ số khuếch tán', definition: 'Chỉ số đo tỷ lệ chênh giữa người báo tăng và người báo giảm, không đo độ lớn thay đổi.' },
    { term: 'PMI', definition: 'Chỉ số quản trị mua hàng, tổng hợp từ khảo sát hằng tháng về điều kiện kinh doanh.' },
    { term: 'Ngưỡng 50', definition: 'Mức báo cáo "không đổi ròng"; trên 50 là mở rộng, dưới 50 là thu hẹp.' },
    { term: 'Thời gian giao hàng đảo chiều', definition: 'Thành phần PMI mà giao hàng chậm hơn được tính là điểm cao hơn.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'pmi-diffusion-index-reading-q',
    question: 'PMI sản xuất giảm từ 53 xuống 51 trong khi vẫn trên 50. Diễn giải nào đúng?',
    options: [
      { id: 'a', text: 'Sản xuất đang thu hẹp.', explain: 'Dưới 50 mới là thu hẹp; 51 vẫn là mở rộng ròng.' },
      { id: 'b', text: 'Sản xuất vẫn mở rộng ròng nhưng ít doanh nghiệp báo tốt hơn so với tháng trước.', correct: true, explain: 'Đúng. Chỉ số khuếch tán chỉ đo độ lan rộng của thay đổi, nên cần xem thêm thành phần và dữ liệu cứng.' },
      { id: 'c', text: 'Sản lượng giảm khoảng 2%.', explain: 'PMI không đo phần trăm thay đổi sản lượng.' },
    ],
  },
  sources: [
    { title: 'Purchasing Managers\' Index', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Purchasing_Managers%27_Index' },
    { title: 'Manufacturing sector ends first half of 2026 with firm growth as PMI holds above no-change mark', publisher: 'Viet Nam News', url: 'https://vietnamnews.vn/economy/1784554/manufacturing-sector-ends-first-half-of-2026-with-firm-growth-as-pmi-holds-above-no-change-mark.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 83,
}
