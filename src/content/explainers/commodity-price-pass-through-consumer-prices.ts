import type { Explainer } from '../../../shared/explainer'

export const commodityPricePassThroughConsumerPrices: Explainer = {
  id: 'commodity-price-pass-through-consumer-prices',
  slug: 'commodity-price-pass-through-consumer-prices',
  question: 'Giá hàng hóa thế giới truyền sang giá tiêu dùng trong nước như thế nào?',
  title: 'Truyền dẫn giá hàng hóa thế giới sang giá tiêu dùng',
  topic: 'geopolitics-trade',
  tldr: 'Giá dầu, lương thực thế giới tăng không có nghĩa giá trong nước tăng đúng bấy nhiêu: mức **truyền dẫn** phụ thuộc tỷ trọng mặt hàng trong rổ tiêu dùng, tỷ giá, thuế và điều hành giá của nhà nước, và mức độ can thiệp. Nghiên cứu mới của IMF (WP 2026/148) thấy truyền dẫn bình quân **không hoàn toàn**, nhiên liệu truyền nhanh và mạnh hơn lương thực, và giá tăng dễ được truyền hơn giá giảm.',
  keyPoints: [
    'IMF Working Paper 2026/148 ("Pumps and Plates", Nguyen và Thevenot, 17/07/2026): nghiên cứu truyền dẫn từ giá quốc tế sang giá bán lẻ trong nhiều nước cho xăng, dầu diesel, lúa mì và gạo; kết quả: truyền dẫn bình quân không hoàn toàn, nhiên liệu cao hơn và nhanh hơn lương thực, khác nhau theo giai đoạn, vùng và nước xuất/nhập khẩu hàng hóa.',
    'Cùng nghiên cứu tìm thấy hiệu ứng "bánh cóc": giá quốc tế tăng dễ được truyền xuống giá bán lẻ hơn là khi giảm. Nghiên cứu cũng nhắc nhiều nước can thiệp vào việc định giá để bảo vệ thị trường nội địa trước biến động toàn cầu.',
    'IMF Working Paper (Furceri, Loungani, Simon, Wachter, 24/06/2015) cho thấy biến động giá lương thực toàn cầu tác động đáng kể lên lạm phát trong nước ở các nền kinh tế phát triển kể từ 1960 nhưng tác động đã yếu và bớt dai dẳng; cú sốc giá lương thực những năm 2000 ảnh hưởng nền kinh tế mới nổi mạnh hơn nhiều, có thể do lương thực chiếm tỷ trọng chi tiêu hộ gia đình lớn hơn và kỳ vọng lạm phát kém neo hơn.',
    'Cách tính trực quan: tác động trực tiếp lên CPI ≈ tỷ trọng mặt hàng trong rổ × mức tăng giá bán lẻ. Ví dụ giả định: nhiên liệu chiếm 5% rổ, giá bán lẻ tăng 10% → CPI tăng khoảng 0,5 điểm phần trăm trực tiếp, chưa kể tác động gián tiếp qua chi phí vận tải, sản xuất.',
    'Ngoài hàng hóa thế giới, tỷ giá là kênh nhân đôi: nội tệ yếu làm giá nhập khẩu tính bằng nội tệ cao hơn, kể cả khi giá USD không đổi.',
  ],
  causalChain: [
    { from: 'Giá hàng hóa thế giới (dầu, lương thực) tăng', to: 'Chi phí nhập khẩu và sản xuất trong nước tăng', mechanism: 'Doanh nghiệp nhập khẩu hoặc dùng nhiên liệu/nguyên liệu phải trả nhiều hơn; chi phí vận tải và chế biến tăng theo.' },
    { from: 'Chi phí tăng', to: 'Giá bán lẻ tăng một phần', mechanism: 'Doanh nghiệp truyền một phần cho người tiêu dùng, phần còn lại thu hẹp biên lợi nhuận; mức truyền phụ thuộc cạnh tranh và độ co giãn cầu.' },
    { from: 'Nhà nước điều hành giá, thuế, trợ giá', to: 'Truyền dẫn bị trì hoãn hoặc giảm', mechanism: 'Can thiệp giữ giá bán lẻ nhưng chuyển gánh nặng sang ngân sách hoặc doanh nghiệp, có thể rồi phải điều chỉnh sau.' },
    { from: 'Giá trong nước tăng, kỳ vọng lạm phát tăng', to: 'Hiệu ứng vòng hai (lương, giá dịch vụ)', mechanism: 'Nếu cú sốc kéo dài, người lao động và doanh nghiệp điều chỉnh lương, giá, làm lạm phát cơ bản cũng tăng.' },
  ],
  vietnamImpact: [
    { group: 'Hộ gia đình', effect: 'Hàng ăn và dịch vụ ăn uống, giao thông có quyền số đáng kể trong rổ CPI nên giá lương thực, xăng dầu thế giới ảnh hưởng nhanh đến chi tiêu (số liệu quyền số CPI xem bài Đọc CPI).', direction: 'down' },
    { group: 'Doanh nghiệp tiêu thụ nhiều nhiên liệu và nguyên liệu nhập khẩu', effect: 'Chi phí đầu vào tăng, biên lợi nhuận bị ép nếu không truyền được sang giá bán.', direction: 'down' },
    { group: 'Ngân sách và cơ quan điều hành giá', effect: 'Điều hành giá hoặc giảm thuế để giảm truyền dẫn có chi phí ngân sách và có thể làm chậm tín hiệu giá.', direction: 'mixed' },
    { group: 'Nhà xuất khẩu nông sản, dầu khí', effect: 'Giá hàng hóa thế giới tăng có lợi cho doanh thu xuất khẩu của họ.', direction: 'up' },
  ],
  indicators: [
    { name: 'Chỉ số giá hàng hóa thế giới (năng lượng, lương thực)', why: 'Điểm xuất phát của cú sốc.', where: 'Ngân hàng Thế giới (Commodity Markets / Pink Sheet), IMF' },
    { name: 'CPI và chỉ số giá nhóm giao thông, lương thực thực phẩm', why: 'Cho biết cú sốc đã vào giá tiêu dùng đến đâu.', where: 'Cục Thống kê' },
    { name: 'Tỷ giá USD/VND', why: 'Quyết định giá nhập khẩu tính bằng đồng.', where: 'Ngân hàng Nhà nước' },
    { name: 'Lạm phát cơ bản', why: 'Cho thấy cú sốc có lan sang vòng hai không.', where: 'Cục Thống kê' },
  ],
  counterpoints: [
    'Truyền dẫn thay đổi theo thời kỳ: cú sốc cầu toàn cầu có thể truyền khác cú sốc cung; nghiên cứu cũng cho thấy khác biệt giữa nước xuất khẩu và nước nhập khẩu hàng hóa.',
    'Giá điều hành khiến truyền dẫn trong thống kê nhìn thấy thấp, nhưng chi phí có thể bị dồn lại và bùng ra khi điều chỉnh.',
    'Ví dụ tính trực tiếp chỉ là xấp xỉ; mức truyền dẫn thực tế do doanh nghiệp, tồn kho, hợp đồng và biên lợi nhuận quyết định.',
  ],
  glossary: [
    { term: 'Truyền dẫn (pass-through)', definition: 'Phần thay đổi giá quốc tế được phản ánh vào giá trong nước.' },
    { term: 'Hiệu ứng bánh cóc', definition: 'Giá dễ tăng hơn giảm: truyền dẫn bất đối xứng.' },
    { term: 'Hiệu ứng vòng hai', definition: 'Cú sốc giá lan sang lương và giá khác, làm lạm phát cơ bản tăng.' },
    { term: 'Quyền số', definition: 'Tỷ trọng một nhóm hàng trong rổ CPI.' },
    { term: 'Lạm phát cơ bản', definition: 'CPI đã loại biến động mạnh của thực phẩm, năng lượng và giá do nhà nước quản lý.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'commodity-price-pass-through-consumer-prices-q',
    question: 'Ví dụ giả định: xăng dầu chiếm 5% rổ CPI, giá quốc tế tăng khiến lẽ ra giá bán lẻ tăng 10%, nhưng nhờ điều hành giá chỉ truyền 60% cú sốc vào giá bán lẻ. Tác động trực tiếp lên CPI khoảng bao nhiêu?',
    options: [
      { id: 'a', text: 'Khoảng 0,3 điểm phần trăm.', correct: true, explain: 'Đúng. Giá bán lẻ thực tăng 6% (60% × 10%); 5% × 6% = 0,3 điểm phần trăm, chưa kể tác động gián tiếp.' },
      { id: 'b', text: 'Khoảng 0,5 điểm phần trăm.', explain: 'Sai: đây là trường hợp truyền 100%; ở ví dụ chỉ truyền 60%.' },
      { id: 'c', text: 'Khoảng 10 điểm phần trăm.', explain: 'Sai. Cần nhân với tỷ trọng 5% trong rổ.' },
    ],
  },
  sources: [
    { title: 'Pumps and Plates: Passthrough of International Fuel and Food Price Shocks to Domestic Markets (IMF WP 2026/148)', publisher: 'IMF Working Papers (qua EconPapers/RePEc)', url: 'https://econpapers.repec.org/RePEc:imf:imfwpa:2026/148' },
    { title: 'Global Food Prices and Domestic Inflation: Some Cross-Country Evidence', publisher: 'IMF Working Papers (2015)', url: 'https://www.imf.org/en/publications/wp/issues/2016/12/31/global-food-prices-and-domestic-inflation-some-cross-country-evidence-43024' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 180,
}
