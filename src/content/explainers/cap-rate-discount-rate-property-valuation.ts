import type { Explainer } from '../../../shared/explainer'

export const capRateDiscountRatePropertyValuation: Explainer = {
  id: 'cap-rate-discount-rate-property-valuation',
  slug: 'cap-rate-discount-rate-property-valuation',
  question: 'Tỷ suất vốn hóa (cap rate) và lãi suất chiết khấu liên hệ với nhau thế nào khi định giá bất động sản?',
  title: 'Tỷ suất vốn hóa và lãi suất chiết khấu trong định giá bất động sản',
  topic: 'real-estate',
  tldr: '**Cap rate = thu nhập hoạt động ròng (NOI) ÷ giá trị**. Giá trị = NOI ÷ cap rate nên giá rất nhạy với cap rate. Cap rate liên hệ với lãi suất chiết khấu: nếu NOI tăng đều với tốc độ g và nhà đầu tư chiết khấu ở r thì cap rate ≈ **r − g**. Lãi suất thực tăng hoặc phần bù rủi ro tăng đẩy cap rate lên, giá bất động sản giảm nếu NOI không tăng bù.',
  keyPoints: [
    'Theo Wikipedia: cap rate = NOI hằng năm ÷ giá trị thị trường hiện tại (ví dụ NOI 160.000 USD, thị trường 8% → giá khoảng 2.000.000 USD); NOI chưa trừ trả nợ vay và khấu hao (thuế tài sản vẫn là chi phí vận hành) nên cap rate bỏ qua đòn bẩy tài chính.',
    'Cap rate chỉ phản ánh thu nhập, không phản ánh tăng giá; tổng lợi nhuận phụ thuộc cả thay đổi giá trị. Theo công thức chiết khấu dòng tiền tăng đều (không phải điều Wikipedia nêu trực tiếp), cap rate ≈ lãi suất chiết khấu − tốc độ tăng NOI kỳ vọng (r − g); nếu g = 0 thì cap rate bằng lãi suất chiết khấu.',
    'Ví dụ giả định: NOI 1.000 triệu đồng/năm, cap rate 5% → giá 20.000 triệu; cap rate tăng lên 6% → giá khoảng 16.667 triệu, giảm khoảng 16,7% dù NOI không đổi. Với r = 8% và g = 2%, cap rate = 6%.',
    'Nghiên cứu của Hoesli và Shmygel trên dữ liệu bất động sản thương mại Mỹ 2002–2024, hơn 60 thị trường (Journal of Property Investment & Finance, 2025): lãi suất thực cao hơn "nhất quán làm tăng" cap rate và lãi suất chiết khấu; tăng trưởng GDP trễ làm giảm cả hai; lạm phát có tác động tiêu cực ngay lập tức, sau đó chuyển dương khi giá thuê điều chỉnh; thị trường "cửa ngõ" có lãi suất chiết khấu thấp hơn 89 điểm cơ bản và cap rate thấp hơn 93 điểm cơ bản.',
    'Hạn chế: Wikipedia lưu ý giao dịch cap rate rất thấp năm 2006–2007 dựa vào giả định lạc quan và đòn bẩy cao; định giá phụ thuộc ước tính NOI, nên sai số về chi phí hoặc giá thuê chuyển thẳng vào giá.',
  ],
  causalChain: [
    { from: 'Lãi suất thực và phần bù rủi ro tăng', to: 'Lãi suất chiết khấu r tăng', mechanism: 'Nhà đầu tư đòi lợi suất cao hơn để so với trái phiếu, cổ phiếu và các cơ hội khác (chi phí cơ hội vốn).' },
    { from: 'r tăng, g không đổi', to: 'Cap rate = r − g tăng', mechanism: 'Cùng một dòng NOI được chiết khấu ở mức cao hơn nên giá chấp nhận được thấp đi.' },
    { from: 'Cap rate tăng', to: 'Giá trị = NOI ÷ cap rate giảm', mechanism: 'Giá nghịch đảo với cap rate nên thay đổi nhỏ của cap rate tạo thay đổi lớn về giá.' },
    { from: 'Kỳ vọng giá thuê và NOI tăng', to: 'g tăng, cap rate giảm, giá tăng', mechanism: 'Nhà đầu tư chấp nhận cap rate thấp hơn nếu tin thu nhập sẽ tăng, như ở thị trường ưa chuộng.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư bất động sản cho thuê (căn hộ, văn phòng, mặt bằng)', effect: 'Lợi suất cho thuê so với lãi suất tiền gửi và trái phiếu quyết định mức giá hợp lý; lãi suất tăng làm yêu cầu lợi suất cho thuê cao hơn.', direction: 'down' },
    { group: 'Người mua để ở', effect: 'Khái niệm cap rate giúp so sánh giá nhà với tiền thuê tương đương (mua hay thuê).', direction: 'mixed' },
    { group: 'Chủ đầu tư và thẩm định viên', effect: 'Cần giả định r, g và NOI minh bạch; giả định lạc quan làm giá trị phình ra.', direction: 'mixed' },
    { group: 'Ngân hàng cho vay có tài sản bảo đảm', effect: 'Giá trị tài sản đảm bảo nhạy với cap rate; khi cap rate tăng, giá trị giảm và tỷ lệ cho vay/giá trị tăng.', direction: 'down' },
  ],
  indicators: [
    { name: 'Lợi suất cho thuê (tiền thuê hằng năm ÷ giá)', why: 'Phiên bản đơn giản của cap rate cho nhà ở và mặt bằng.', where: 'Khảo sát giá thuê, báo cáo thị trường' },
    { name: 'Lãi suất tiền gửi dài hạn và lợi suất trái phiếu chính phủ', why: 'Cơ sở của lãi suất chiết khấu và chi phí cơ hội.', where: 'Ngân hàng Nhà nước, HNX, Kho bạc Nhà nước' },
    { name: 'Tốc độ tăng giá thuê và tỷ lệ lấp đầy', why: 'Quyết định g và NOI kỳ vọng.', where: 'Báo cáo thị trường văn phòng, bán lẻ, căn hộ' },
    { name: 'Lạm phát', why: 'Tác động tới lãi suất thực và đà tăng giá thuê.', where: 'Cục Thống kê' },
  ],
  counterpoints: [
    'Mô hình r − g giả định NOI tăng đều mãi mãi; thực tế bất động sản cần chi phí vốn (cải tạo, sửa chữa) và g không ổn định.',
    'Cap rate dùng một năm NOI, còn lãi suất chiết khấu phản ánh rủi ro và giá trị thời gian nhiều kỳ, nên không thay thế được dòng tiền chiết khấu đầy đủ.',
    'Thị trường nhà ở Việt Nam nhiều giao dịch dựa vào kỳ vọng tăng giá chứ không chỉ thu nhập cho thuê, nên cap rate thấp có thể phản ánh kỳ vọng giá chứ không phải sự an toàn.',
  ],
  glossary: [
    { term: 'NOI', definition: 'Thu nhập hoạt động ròng: doanh thu cho thuê trừ chi phí vận hành, chưa trừ nợ vay, khấu hao, thuế.' },
    { term: 'Cap rate', definition: 'NOI chia giá trị tài sản.' },
    { term: 'Lãi suất chiết khấu', definition: 'Lợi suất đòi hỏi dùng để quy dòng tiền tương lai về hiện tại.' },
    { term: 'Phần bù rủi ro', definition: 'Lợi suất thêm so với tài sản không rủi ro để bù cho rủi ro của bất động sản.' },
    { term: 'Điểm cơ bản (bps)', definition: '0,01 điểm phần trăm.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'cap-rate-discount-rate-property-valuation-q',
    question: 'Ví dụ giả định: NOI 1.000 triệu đồng/năm, cap rate thị trường tăng từ 5% lên 6% và NOI không đổi. Giá trị tài sản thay đổi thế nào?',
    options: [
      { id: 'a', text: 'Giảm từ 20.000 xuống khoảng 16.667 triệu đồng, tức giảm khoảng 16,7%.', correct: true, explain: 'Đúng. 1.000/0,05 = 20.000; 1.000/0,06 ≈ 16.667; giá giảm khoảng 16,7%.' },
      { id: 'b', text: 'Giảm đúng 1% vì cap rate tăng 1 điểm.', explain: 'Sai. Giá nghịch đảo với cap rate nên thay đổi 1 điểm tạo thay đổi lớn hơn nhiều.' },
      { id: 'c', text: 'Không đổi vì NOI không đổi.', explain: 'Sai. Giá = NOI ÷ cap rate nên cap rate tăng làm giá giảm.' },
    ],
  },
  sources: [
    { title: 'Capitalization rate', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Capitalization_rate' },
    { title: 'Nghiên cứu các yếu tố quyết định lãi suất chiết khấu, cap rate và tăng trưởng NOI của bất động sản thương mại Mỹ 2002–2024 (trang tóm tắt)', publisher: 'Emerald Insight', url: 'https://www.emerald.com/insight/content/doi/10.1108/JPIF-12-2024-0152/full/html' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 178,
}
