import type { Explainer } from '../../../shared/explainer'

export const bankVsNonbankLeverageRisk: Explainer = {
  id: 'bank-vs-nonbank-leverage-risk',
  slug: 'bank-vs-nonbank-leverage-risk',
  question: 'Đòn bẩy của ngân hàng và của tổ chức phi ngân hàng khác nhau thế nào về rủi ro?',
  title: 'Đòn bẩy giống nhau về công thức nhưng khác nhau về nguồn vốn, đệm bảo vệ và giám sát; rủi ro lan truyền cũng khác',
  topic: 'markets-investing',
  tldr: 'Đòn bẩy = tài sản chia vốn chủ sở hữu. Ngân hàng vay chủ yếu bằng **tiền gửi** (ngắn hạn, có bảo hiểm và có sự hỗ trợ của ngân hàng trung ương) và chịu yêu cầu vốn. Tổ chức phi ngân hàng (công ty tài chính, quỹ, nhà phát hành trái phiếu, “ngân hàng bóng”) vay bằng **vốn thị trường** như trái phiếu, repo, margin, thường ít đệm và ít giám sát, nên khi thị trường đóng băng khó tiếp cận thanh khoản. Cả hai đều có thể gây khủng hoảng, nhưng qua kênh khác nhau.',
  keyPoints: [
    '**Đòn bẩy** khuếch đại lợi nhuận và lỗ: tài sản gấp 10 lần vốn thì tài sản giảm 10% làm mất sạch vốn (ví dụ giả định, bỏ qua dự phòng).',
    'Ngân hàng: nguồn tiền ngắn hạn, cho vay dài hạn (chênh lệch kỳ hạn), nhưng có **yêu cầu vốn tối thiểu**, giám sát và vai trò cho vay cuối cùng của ngân hàng trung ương; rủi ro chính là rút tiền hàng loạt và nợ xấu.',
    'Phi ngân hàng: thường dựa vào vay thị trường, repo hoặc margin; khi giá tài sản giảm, bị gọi thêm tài sản bảo đảm và buộc **bán tháo**, làm giá giảm tiếp. Hội đồng Ổn định Tài chính (FSB) theo dõi hệ thống này dưới tên trung gian tài chính phi ngân hàng (NBFI, trước đây gọi là “ngân hàng bóng”); theo FSB, tài trợ phi ngân hàng có thể thành nguồn rủi ro hệ thống khi có biến đổi kỳ hạn/thanh khoản hoặc tích tụ đòn bẩy, và các kết nối chéo khiến căng thẳng lan rộng.',
    'Hai khu vực liên kết: ngân hàng cho phi ngân hàng vay, tài trợ trái phiếu, nên rủi ro không tách biệt; đóng băng thị trường trái phiếu có thể lan sang ngân hàng.',
    'Khi đọc báo cáo tài chính, hỏi: đòn bẩy là gì, **kỳ hạn nguồn vốn so với kỳ hạn tài sản**, và có đệm thanh khoản/ vốn tương ứng không.',
  ],
  causalChain: [
    { from: 'Giá tài sản giảm', to: 'Vốn chủ sở hữu bị bào mòn nhanh với tổ chức đòn bẩy cao', mechanism: 'Vốn chủ là phần còn lại sau trừ nợ; tài sản giảm nhỏ có thể xóa phần lớn vốn.' },
    { from: 'Vốn bị bào mòn, bên cho vay lo ngại', to: 'Bị gọi thêm tài sản bảo đảm hoặc không tái tài trợ được', mechanism: 'Nguồn vốn thị trường ngắn hạn có thể rút nhanh khi niềm tin giảm.' },
    { from: 'Buộc bán tài sản để trả nợ', to: 'Giá tài sản giảm thêm, lan sang tổ chức khác', mechanism: 'Bán tháo đồng loạt làm giá giảm, tạo vòng xoáy cho các bên cùng nắm tài sản.' },
    { from: 'Ngân hàng có tiền gửi và đệm vốn', to: 'Chịu được cú sốc nhỏ hơn nhưng vẫn rủi ro rút tiền hàng loạt', mechanism: 'Bảo hiểm tiền gửi và ngân hàng trung ương giảm khả năng rút tiền, đệm vốn hấp thụ lỗ.' },
  ],
  vietnamImpact: [
    { group: 'Ngân hàng thương mại', effect: 'Chịu yêu cầu an toàn vốn và hạn chế tín dụng; rủi ro tập trung ở cho vay bất động sản và trái phiếu doanh nghiệp.', direction: 'mixed' },
    { group: 'Doanh nghiệp phát hành trái phiếu', effect: 'Phụ thuộc vốn thị trường, nên khi niềm tin giảm thì khó đảo nợ, dòng tiền căng thẳng.', direction: 'down' },
    { group: 'Nhà đầu tư cá nhân vay margin', effect: 'Vay ký quỹ có thể bị buộc bán khi giá giảm.', direction: 'down' },
    { group: 'Người gửi tiền', effect: 'Tiền gửi ngân hàng được bảo hiểm tiền gửi trong giới hạn; sản phẩm phi ngân hàng không có lớp bảo vệ tương tự.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Hệ số an toàn vốn (CAR) và tỷ lệ cho vay/tiền gửi', why: 'Đo đệm vốn và mức phụ thuộc vốn thị trường của ngân hàng.', where: 'Báo cáo tài chính ngân hàng; Ngân hàng Nhà nước' },
    { name: 'Nợ/vốn chủ sở hữu và kỳ hạn nợ phải trả', why: 'Cho thấy đòn bẩy và áp lực đáo hạn của tổ chức phi ngân hàng.', where: 'Báo cáo tài chính công ty; Ủy ban Chứng khoán Nhà nước' },
    { name: 'Báo cáo giám sát tài chính phi ngân hàng', why: 'Cung cấp tổng quan quy mô và rủi ro hệ thống.', where: 'Hội đồng Ổn định Tài chính (FSB), BIS' },
  ],
  counterpoints: [
    'Phi ngân hàng không luôn rủi ro hơn: một số quỹ không dùng đòn bẩy, nguồn vốn dài hạn và ổn định (như quỹ hưu trí).',
    'Ngân hàng cũng từng gây khủng hoảng lớn dù giám sát chặt; giám sát tốt không bảo đảm an toàn.',
    'So đòn bẩy giữa các loại hình cần cùng định nghĩa (tài sản/vốn hay nợ/vốn) và tính cả khoản ngoại bảng.',
  ],
  glossary: [
    { term: 'Đòn bẩy', definition: 'Tỷ lệ tài sản trên vốn chủ sở hữu hoặc nợ trên vốn chủ, đo mức dùng vốn vay.' },
    { term: 'Ngân hàng bóng', definition: 'Hoạt động trung gian tín dụng ngoài hệ thống ngân hàng truyền thống.' },
    { term: 'Gọi ký quỹ', definition: 'Yêu cầu bổ sung tài sản bảo đảm khi giá trị tài sản giảm.' },
    { term: 'Chênh lệch kỳ hạn', definition: 'Nguồn vốn ngắn hạn tài trợ tài sản dài hạn, tạo rủi ro thanh khoản.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'bank-vs-nonbank-leverage-risk-q',
    question: 'Tổ chức A có đòn bẩy tài sản/vốn là 10 và nợ chủ yếu là repo ngày. Tổ chức B cũng đòn bẩy 10 nhưng nợ là trái phiếu 7 năm. Khi thị trường đóng băng, điều nào đúng?',
    options: [
      { id: 'a', text: 'Hai tổ chức rủi ro như nhau vì đòn bẩy bằng nhau.', explain: 'Kỳ hạn nguồn vốn khác nhau tạo rủi ro thanh khoản khác nhau.' },
      { id: 'b', text: 'A dễ bị buộc bán tài sản hơn vì phải đảo nợ hằng ngày.', correct: true, explain: 'Đúng. Nguồn vốn ngắn hạn phải tái tài trợ liên tục; khi thị trường đóng băng là rủi ro lớn nhất.' },
      { id: 'c', text: 'B chắc chắn mất khả năng thanh toán trước.', explain: 'Trái phiếu 7 năm chưa đến hạn nên áp lực thanh khoản thấp hơn trong ngắn hạn.' },
    ],
  },
  sources: [
    { title: 'Shadow banking system', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Shadow_banking' },
    { title: 'Non-Bank Financial Intermediation', publisher: 'Financial Stability Board', url: 'https://www.fsb.org/work-of-the-fsb/financial-innovation-and-structural-change/non-bank-financial-intermediation/' },
    { title: 'Basel III: international regulatory framework for banks', publisher: 'Bank for International Settlements', url: 'https://www.bis.org/bcbs/basel3.htm' },
    { title: 'Leverage (finance)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Leverage_(finance)' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 112,
}
