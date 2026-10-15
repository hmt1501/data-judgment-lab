import type { Explainer } from '../../../shared/explainer'

export const marginLendingRetailLeverage: Explainer = {
  id: 'margin-lending-retail-leverage',
  slug: 'margin-lending-retail-leverage',
  question: 'Vay ký quỹ (margin) khuếch đại lãi lỗ cho nhà đầu tư cá nhân như thế nào?',
  title: 'Margin nhân đôi cả lãi lẫn lỗ trên vốn tự có và có thể buộc bán ở đúng đáy',
  topic: 'markets-investing',
  tldr: 'Vay ký quỹ là vay tiền từ công ty chứng khoán để mua thêm cổ phiếu, lấy chính cổ phiếu làm tài sản bảo đảm. **Đòn bẩy** khiến lãi hay lỗ tính trên vốn tự có đều lớn hơn mức biến động của giá; thêm lãi vay đều đặn và nguy cơ **call margin** (bị gọi nộp thêm tiền hoặc bị bán cưỡng bức) khi giá giảm. Đây là nội dung giáo dục, không phải khuyến nghị sử dụng đòn bẩy.',
  keyPoints: [
    'Tỷ lệ đòn bẩy = tổng tài sản chia vốn tự có. Vay bằng đúng vốn tự có (đòn bẩy 2 lần) làm mức lãi/lỗ trên vốn tự có gấp đôi mức biến động giá, chưa tính lãi vay.',
    'Lãi vay là chi phí cố định cộng dồn theo thời gian, nên cổ phiếu phải tăng đủ để bù lãi vay mới có lãi; đi ngang cũng lỗ.',
    'Khi giá giảm, tỷ lệ vốn tự có trên giá trị tài sản (tỷ lệ ký quỹ) giảm; chạm ngưỡng duy trì, công ty chứng khoán gọi nộp bổ sung hoặc bán cưỡng bức (**force sell**), thường đúng lúc thị trường xuống.',
    'Bán cưỡng bức hàng loạt có thể làm giá giảm thêm, tạo vòng xoáy bán tháo; vì vậy tỷ lệ margin toàn thị trường được cơ quan quản lý theo dõi và ngưỡng, danh mục được vay do từng công ty chứng khoán và quy định hiện hành xác lập.',
    'Điều kiện cụ thể (tỷ lệ cho vay, lãi suất, danh mục được vay, ngưỡng gọi ký quỹ) khác nhau theo công ty và thay đổi theo quy định; cần đọc hợp đồng và thông báo hiện hành của công ty chứng khoán và Ủy ban Chứng khoán Nhà nước. Ví dụ về trần ở phía công ty chứng khoán: theo Thời báo Tài chính Việt Nam (27/05/2024) dẫn Quy chế hướng dẫn giao dịch ký quỹ kèm Quyết định 87/QĐ-UBCK (2017), tổng dư nợ margin không vượt **200% vốn chủ sở hữu** của công ty, tối đa 3% vốn chủ sở hữu cho một khách hàng và 10% cho một loại chứng khoán; bài không nói rõ văn bản này có còn nguyên hiệu lực hay đã được thay thế, cần kiểm tra bản hiện hành.',
  ],
  causalChain: [
    { from: 'Nhà đầu tư dùng vốn tự có làm tài sản bảo đảm vay thêm tiền', to: 'Sức mua và quy mô vị thế tăng gấp nhiều lần', mechanism: 'Ví dụ giả định: vốn tự có 100 triệu, vay thêm 100 triệu, mua 200 triệu cổ phiếu (đòn bẩy 2 lần).' },
    { from: 'Giá cổ phiếu tăng 10%', to: 'Lãi trên vốn tự có tăng khoảng 20% (trước lãi vay)', mechanism: 'Tài sản 200 triệu thành 220 triệu, trả nợ 100 triệu còn 120 triệu, lãi 20 triệu trên vốn 100 triệu.' },
    { from: 'Giá cổ phiếu giảm 10%', to: 'Lỗ trên vốn tự có khoảng 20% (trước lãi vay)', mechanism: 'Tài sản còn 180 triệu, trả nợ 100 triệu còn 80 triệu: vốn tự có mất 20 triệu.' },
    { from: 'Giá giảm sâu hơn (ví dụ giả định giảm 50%)', to: 'Vốn tự có có thể mất sạch', mechanism: 'Tài sản còn 100 triệu bằng đúng nợ vay; trước khi tới đó thường đã chạm ngưỡng gọi ký quỹ và bị bán cưỡng bức.' },
    { from: 'Nhiều tài khoản cùng bị bán cưỡng bức', to: 'Giá giảm thêm, thanh khoản cạn, lỗ lan rộng', mechanism: 'Lệnh bán dồn dập chồng lên nhau nên giá khó giữ, khiến thêm tài khoản chạm ngưỡng.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân dùng margin', effect: 'Lãi lỗ khuếch đại; rủi ro bị bán cưỡng bức ở mức giá bất lợi khi thị trường điều chỉnh mạnh.', direction: 'mixed' },
    { group: 'Công ty chứng khoán', effect: 'Cho vay margin là nguồn thu lãi lớn nhưng làm tăng rủi ro tín dụng và nhu cầu vốn khi thị trường giảm.', direction: 'mixed' },
    { group: 'Ngân hàng cho công ty chứng khoán vay', effect: 'Phơi nhiễm gián tiếp vào chứng khoán; thị trường giảm sâu có thể ảnh hưởng chất lượng tín dụng.', direction: 'down' },
    { group: 'Thị trường chứng khoán', effect: 'Margin cao đẩy giá nhanh trong pha tăng nhưng làm tăng độ nhạy và nguy cơ bán tháo trong pha giảm.', direction: 'mixed' },
    { group: 'Cơ quan quản lý', effect: 'Theo dõi dư nợ margin so với vốn chủ sở hữu và giá trị thị trường để kiểm soát rủi ro hệ thống.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Dư nợ margin toàn thị trường và so với vốn hóa hoặc vốn chủ của công ty chứng khoán', why: 'Dư nợ tăng nhanh báo hiệu mức độ đòn bẩy tích tụ.', where: 'Báo cáo công ty chứng khoán, Ủy ban Chứng khoán Nhà nước, Sở Giao dịch' },
    { name: 'Lãi suất cho vay margin', why: 'Ngưỡng cổ phiếu phải tăng để hòa vốn.', where: 'Biểu phí của các công ty chứng khoán' },
    { name: 'Tỷ lệ ký quỹ duy trì và ngưỡng gọi ký quỹ', why: 'Xác định mức giá giảm có thể kích hoạt bán cưỡng bức.', where: 'Hợp đồng và thông báo của công ty chứng khoán' },
    { name: 'Thanh khoản thị trường và biến động chỉ số', why: 'Bán cưỡng bức khó khớp khi thanh khoản mỏng, làm lỗ nặng hơn dự tính.', where: 'Sở Giao dịch Chứng khoán' },
  ],
  counterpoints: [
    'Đòn bẩy có thể hợp lý với nhà đầu tư kinh nghiệm quản trị rủi ro tốt (đặt mức tối đa, giữ tiền dự phòng), nhưng cá nhân thường đánh giá thấp xác suất giảm sâu và đánh giá cao khả năng chịu lỗ.',
    'Margin không tự gây ra bong bóng; nó khuếch đại xu hướng sẵn có. Thị trường có đòn bẩy thấp vẫn có thể giảm sâu vì nguyên nhân cơ bản.',
    'Điều kiện ký quỹ thay đổi theo thời kỳ; số liệu và quy định nêu trong bài chỉ mang tính cơ chế, cần kiểm tra bản hiện hành.',
  ],
  glossary: [
    { term: 'Ký quỹ (margin)', definition: 'Tài sản nhà đầu tư dùng làm bảo đảm khi vay tiền mua chứng khoán.' },
    { term: 'Đòn bẩy', definition: 'Tỷ lệ giữa tổng tài sản và vốn tự có; càng cao thì lãi lỗ trên vốn tự có càng lớn.' },
    { term: 'Call margin', definition: 'Yêu cầu nhà đầu tư nộp thêm tiền hoặc tài sản khi tỷ lệ ký quỹ xuống dưới ngưỡng duy trì.' },
    { term: 'Force sell', definition: 'Công ty chứng khoán bán cưỡng bức tài sản của khách khi họ không bổ sung ký quỹ.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'margin-lending-retail-leverage-q',
    question: 'Với vốn tự có 100 triệu và vay thêm 100 triệu mua cổ phiếu, giá giảm 10%. Phép tính nào đúng (bỏ qua lãi vay)?',
    options: [
      { id: 'a', text: 'Lỗ 10 triệu, tương đương 10% vốn tự có.', explain: 'Danh mục 200 triệu giảm 10% là 20 triệu, tương đương 20% vốn tự có, không phải 10%.' },
      { id: 'b', text: 'Lỗ 20 triệu, tương đương 20% vốn tự có.', correct: true, explain: 'Đúng. 200 triệu giảm 10% còn 180 triệu; trả nợ 100 triệu, còn 80 triệu từ vốn 100 triệu. Cộng lãi vay thì lỗ nặng hơn.' },
      { id: 'c', text: 'Không lỗ vì công ty chứng khoán chịu lỗ phần vay.', explain: 'Người vay chịu mọi lỗ trước; công ty chứng khoán bán cưỡng bức để thu hồi nợ.' },
    ],
  },
  sources: [
    { title: 'Quy định giao dịch ký quỹ tối đa của công ty chứng khoán', publisher: 'Thời báo Tài chính Việt Nam (27/05/2024)', url: 'https://thoibaotaichinhvietnam.vn/quy-dinh-giao-dich-ky-quy-toi-da-cua-cong-ty-chung-khoan-151606.html' },
    { title: 'Margin (finance)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Margin_(finance)' },
    { title: 'Leverage (finance)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Leverage_(finance)' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 20,
}
