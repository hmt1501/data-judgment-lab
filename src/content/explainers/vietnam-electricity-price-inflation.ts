import type { Explainer } from '../../../shared/explainer'

export const vietnamElectricityPriceInflation: Explainer = {
  id: 'vietnam-electricity-price-inflation',
  slug: 'vietnam-electricity-price-inflation',
  question: 'Điều chỉnh giá điện tác động tới lạm phát Việt Nam thế nào?',
  title: 'Giá điện tăng làm CPI nhảy bậc một lần, nhưng mức tác động tính bằng quyền số, không bằng cảm nhận',
  topic: 'vietnam-economy',
  tldr: 'Giá điện sinh hoạt là mặt hàng do Nhà nước điều hành nên khi điều chỉnh, CPI thường thay đổi theo **bậc**. Theo EVN, đợt tăng 4,8% từ 10/5/2025 chỉ làm CPI tăng khoảng **0,09%**. Tác động trực tiếp nhỏ vì điện chỉ là một phần rổ chi tiêu; tác động gián tiếp qua chi phí sản xuất khó thấy hơn.',
  keyPoints: [
    'Theo Báo Đầu tư (9/5/2025): EVN điều chỉnh giá bán lẻ điện bình quân lên **2.204,0655 đồng/kWh** (chưa gồm VAT), tăng **4,8%**, hiệu lực từ **10/5/2025** (Quyết định 599/QĐ-EVN ngày 7/5/2025); Bộ Công Thương ban hành Quyết định 1279/QĐ-BCT quy định giá bán điện cho các nhóm khách hàng.',
    'Cũng theo bài báo đó, ông Võ Quang Lâm (Phó tổng giám đốc EVN) cho biết đợt điều chỉnh này tác động tới CPI khoảng **0,09%**.',
    'Công thức đọc: **đóng góp vào CPI ≈ quyền số của điện × % tăng giá**. Ví dụ giả định: nếu điện chiếm 2% rổ CPI và giá tăng 4,8% thì CPI tăng khoảng 0,1 điểm phần trăm — cùng bậc với số EVN nêu.',
    'Tác động trực tiếp lên CPI diễn ra **một lần** (kỳ có hiệu lực); tác động lên lạm phát cùng kỳ còn kéo dài 12 tháng cho đến khi kỳ gốc thay đổi (hiệu ứng nền).',
    'Tác động gián tiếp: điện là đầu vào của sản xuất công nghiệp. Giá điện sản xuất tăng có thể lan sang giá hàng hóa, nhưng mức lan phụ thuộc tỷ trọng chi phí điện trong giá thành từng ngành.',
  ],
  causalChain: [
    { from: 'Chi phí sản xuất điện tăng (nhiên liệu, mua điện, tỷ giá) và nhu cầu thu hồi chi phí', to: 'Điều chỉnh giá bán lẻ điện bình quân', mechanism: 'Giá bán lẻ bình quân phản ánh tổng chi phí sản xuất, kinh doanh điện và lợi nhuận; khi chi phí đầu vào tăng mà giá bán giữ nguyên, ngành điện chịu lỗ hoặc phải điều chỉnh giá (cơ chế tổng quát, ví dụ giả định chưa gắn số liệu cụ thể).' },
    { from: 'Giá điện sinh hoạt tăng', to: 'Chỉ số giá nhóm nhà ở, điện, nước tăng', mechanism: 'CPI ghi nhận giá điện hộ gia đình theo quyền số; vì giá do Nhà nước quyết định, nó tăng theo bậc thay vì từ từ như hàng thực phẩm.' },
    { from: 'Giá điện sản xuất tăng', to: 'Chi phí doanh nghiệp tăng, lan sang giá bán', mechanism: 'Ngành dùng nhiều điện (thép, xi măng, hóa chất, dệt) có phần điện lớn trong giá thành nên chuyển một phần sang giá bán hoặc chịu giảm biên.' },
    { from: 'Điều chỉnh giá hành chính', to: 'Kỳ vọng lạm phát và phản ứng chính sách', mechanism: 'Thời điểm điều chỉnh có thể cộng hưởng với biến động của các mặt hàng khác trong tháng (nhận định chung, chưa gắn nguồn cụ thể); lạm phát cơ bản loại trừ mặt hàng giá quản lý nên giúp phân biệt cú sốc hành chính với áp lực nền.' },
  ],
  vietnamImpact: [
    { group: 'Hộ gia đình', effect: 'Chi tiêu điện tăng trực tiếp; hộ nhiều điều hòa, thu nhập thấp chịu tác động tương đối lớn hơn trong hóa đơn tháng nóng.', direction: 'down' },
    { group: 'Doanh nghiệp sản xuất tiêu thụ nhiều điện', effect: 'Chi phí đầu vào tăng, áp lực tăng giá hoặc giảm biên lợi nhuận.', direction: 'down' },
    { group: 'EVN và ngành điện', effect: 'Giá bán tiệm cận chi phí giúp cải thiện doanh thu và khả năng đầu tư của ngành điện; mức độ cụ thể cần xem báo cáo của EVN.', direction: 'up' },
    { group: 'Người làm chính sách tiền tệ', effect: 'Điều chỉnh giá hành chính đẩy CPI tổng nhưng ít ảnh hưởng lạm phát cơ bản, nên không nhất thiết đòi hỏi thắt chặt.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Chỉ số giá nhóm nhà ở, điện, nước, chất đốt trong CPI', why: 'Thấy mức đóng góp của điện vào CPI tháng điều chỉnh.', where: 'Thông cáo CPI của Cục Thống kê (nso.gov.vn)' },
    { name: 'Lạm phát cơ bản', why: 'Loại trừ giá do Nhà nước quản lý nên cho thấy áp lực nền.', where: 'Cục Thống kê; Ngân hàng Nhà nước' },
    { name: 'Thông báo điều chỉnh giá điện và biểu giá theo nhóm khách hàng', why: 'Biết nhóm nào (sinh hoạt, sản xuất, kinh doanh) tăng bao nhiêu.', where: 'EVN, Bộ Công Thương' },
  ],
  counterpoints: [
    'Mức tác động CPI phụ thuộc quyền số và nhóm khách hàng bị tăng; số của EVN là ước tính trước, số CPI thực tế còn phụ thuộc các mặt hàng khác cùng tháng.',
    'Nếu điều chỉnh bị dồn thành mức lớn rồi mới thực hiện, tác động CPI trong tháng sẽ lớn hơn; lộ trình tăng đều làm mượt cú sốc.',
    'Giá điện thấp hơn chi phí có thể làm méo tín hiệu tiết kiệm và đầu tư vào nguồn điện; kìm giá không phải lúc nào cũng tốt cho lạm phát dài hạn.',
  ],
  glossary: [
    { term: 'Giá bán lẻ điện bình quân', definition: 'Mức giá bình quân (đồng/kWh) làm cơ sở xây dựng biểu giá theo nhóm khách hàng.' },
    { term: 'Quyền số CPI', definition: 'Tỷ trọng chi tiêu của một nhóm trong rổ CPI, quyết định mức đóng góp của biến động giá nhóm đó.' },
    { term: 'Giá do Nhà nước quản lý', definition: 'Mặt hàng, dịch vụ giá được điều hành hoặc quy định bởi cơ quan nhà nước, thường làm CPI thay đổi theo bậc.' },
    { term: 'Hiệu ứng nền', definition: 'Ảnh hưởng của mức giá kỳ gốc lên tỷ lệ lạm phát so với cùng kỳ.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-electricity-price-inflation-q',
    question: 'Giá điện tăng 5%, điện chiếm 2% rổ CPI (ví dụ giả định). Mức đóng góp trực tiếp vào CPI là bao nhiêu?',
    options: [
      { id: 'a', text: 'Khoảng 5 điểm phần trăm.', explain: 'Nhầm giữa mức tăng giá một mặt hàng và mức đóng góp vào chỉ số tổng.' },
      { id: 'b', text: 'Khoảng 0,1 điểm phần trăm (2% × 5%).', correct: true, explain: 'Đóng góp ≈ quyền số × mức tăng giá = 0,02 × 5% = 0,1 điểm, chưa tính tác động gián tiếp.' },
      { id: 'c', text: 'Bằng 0 vì điện không nằm trong CPI.', explain: 'Điện sinh hoạt nằm trong CPI, thuộc nhóm nhà ở, điện, nước, chất đốt.' },
    ],
  },
  sources: [
    { title: 'Giá điện bán lẻ bình quân từ ngày 10/5/2025 là 2.204 đồng/kWh', publisher: 'Báo Đầu tư (bài ngày 9/5/2025)', url: 'https://baodautu.vn/gia-ban-le-dien-binh-quan-tu-ngay-1052025-la-2204-dongkwh-d280954.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 86,
}
