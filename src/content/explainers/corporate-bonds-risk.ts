import type { Explainer } from '../explainer'

export const corporateBondsRisk: Explainer = {
  id: 'corporate-bonds-risk',
  slug: 'corporate-bonds-risk',
  question: 'Trái phiếu doanh nghiệp lãi cao có an toàn không, nhà đầu tư cá nhân cần kiểm tra gì?',
  title: 'Trái phiếu doanh nghiệp: lãi suất cao đi kèm rủi ro gì?',
  topic: 'markets-investing',
  tldr: 'Trái phiếu doanh nghiệp là khoản **cho doanh nghiệp vay**: lợi nhuận tối đa là lãi coupon cộng gốc, còn rủi ro lớn nhất là doanh nghiệp **chậm trả hoặc không trả**. Lãi suất cao hơn tiền gửi chính là phần bù cho rủi ro tín dụng và thanh khoản, không phải "quà tặng". Bài học giai đoạn 2022–2023 ở Việt Nam cho thấy cần kiểm tra năng lực trả nợ, tài sản bảo đảm, xếp hạng tín nhiệm, điều khoản và khả năng bán lại — không chỉ nhìn con số lãi suất.',
  keyPoints: [
    'Lãi suất coupon phản ánh **chi phí vay** của doanh nghiệp: doanh nghiệp càng rủi ro (đòn bẩy cao, dòng tiền yếu, khó vay ngân hàng) thì càng phải trả lãi cao để thu hút người mua.',
    '**Tài sản bảo đảm** chỉ có giá trị nếu định giá thực tế, có pháp lý rõ ràng, xử lý được khi cần; cổ phiếu chưa niêm yết hoặc dự án chưa đủ pháp lý thường khó phát mại đúng giá.',
    '**Xếp hạng tín nhiệm** từ tổ chức được cấp phép là một tham chiếu độc lập về xác suất vỡ nợ, nhưng không phải bảo đảm; cần đọc lý do xếp hạng và theo dõi thay đổi.',
    '**Thanh khoản**: trái phiếu riêng lẻ thường khó bán lại trước hạn; các cam kết "mua lại" của bên bán hoặc công ty chứng khoán phụ thuộc vào khả năng tài chính của chính họ.',
    'Theo pháp luật hiện hành (Luật Chứng khoán sửa đổi số 56/2024/QH15 và Nghị định 200/2026/NĐ-CP ngày 5/6/2026), trái phiếu phát hành riêng lẻ chỉ dành cho nhà đầu tư chuyên nghiệp, và cá nhân chuyên nghiệp chỉ được mua loại thỏa điều kiện về xếp hạng tín nhiệm, bảo lãnh hoặc tài sản bảo đảm; hãy kiểm tra văn bản gốc. Đây không phải khuyến nghị đầu tư.',
  ],
  causalChain: [
    { from: 'Doanh nghiệp đòn bẩy cao, khó vay ngân hàng', to: 'Phát hành trái phiếu lãi suất cao', mechanism: 'Trái phiếu trở thành kênh huy động thay thế; lãi cao để bù rủi ro cho người mua.' },
    { from: 'Phát hành trái phiếu lãi suất cao', to: 'Áp lực dòng tiền trả lãi và gốc', mechanism: 'Chi phí lãi lớn ăn vào lợi nhuận; nếu dự án chậm bán hàng hoặc chậm pháp lý, doanh nghiệp phải vay mới để trả nợ cũ.' },
    { from: 'Áp lực dòng tiền trả lãi và gốc', to: 'Chậm trả, đàm phán gia hạn hoặc vỡ nợ', mechanism: 'Khi thị trường đóng băng (ví dụ giai đoạn 2022–2023 với nhiều doanh nghiệp bất động sản), không thể đảo nợ, buộc kéo dài kỳ hạn hoặc trả bằng tài sản khác.' },
    { from: 'Chậm trả, đàm phán gia hạn hoặc vỡ nợ', to: 'Mất niềm tin và thanh khoản thị trường trái phiếu', mechanism: 'Nhà đầu tư rút lui đồng loạt, kể cả với doanh nghiệp tốt; chi phí huy động tăng cho toàn thị trường.' },
    { from: 'Mất niềm tin và thanh khoản thị trường trái phiếu', to: 'Siết chặt quy định về phát hành và nhà đầu tư', mechanism: 'Yêu cầu công bố thông tin, xếp hạng tín nhiệm, điều kiện nhà đầu tư chuyên nghiệp, giám sát mục đích sử dụng vốn được tăng cường.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân', effect: 'Từng chịu thiệt hại lớn khi mua trái phiếu được "bán như tiền gửi"; quy định mới giới hạn đối tượng mua, nhưng rủi ro vẫn còn nếu không tự thẩm định.', direction: 'down' },
    { group: 'Doanh nghiệp bất động sản', effect: 'Kênh huy động trái phiếu khó hơn và đắt hơn; phải cải thiện minh bạch, tài sản bảo đảm và xếp hạng tín nhiệm.', direction: 'down' },
    { group: 'Ngân hàng thương mại', effect: 'Vừa là nhà phát hành lớn, vừa có thể là bên bảo lãnh/đại lý; chịu rủi ro uy tín nếu phân phối sản phẩm kém chất lượng.', direction: 'mixed' },
    { group: 'Công ty chứng khoán, tổ chức xếp hạng tín nhiệm', effect: 'Trách nhiệm tư vấn, phân phối và thẩm định tăng; nhu cầu dịch vụ xếp hạng tín nhiệm tăng.', direction: 'mixed' },
    { group: 'Thị trường vốn nói chung', effect: 'Thị trường trái phiếu lành mạnh giúp doanh nghiệp bớt phụ thuộc tín dụng ngân hàng; niềm tin hồi phục chậm sau giai đoạn đổ vỡ.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Thông tin phát hành, giao dịch, thanh toán gốc lãi và vi phạm nghĩa vụ của từng mã trái phiếu', why: 'Kiểm tra doanh nghiệp đã từng chậm trả, gia hạn hay chưa.', where: 'Chuyên trang thông tin trái phiếu doanh nghiệp của HNX (cbonds.hnx.vn)' },
    { name: 'Tỷ lệ nợ phải trả/vốn chủ sở hữu, dòng tiền kinh doanh, khả năng trả lãi (EBIT/chi phí lãi vay)', why: 'Đo năng lực trả nợ thật sự từ hoạt động kinh doanh.', where: 'Báo cáo tài chính đã kiểm toán, bản công bố thông tin trước đợt chào bán' },
    { name: 'Xếp hạng tín nhiệm và báo cáo xếp hạng', why: 'Đánh giá độc lập; đặc biệt chú ý khi bị hạ bậc hoặc đưa vào diện theo dõi.', where: 'Website tổ chức xếp hạng tín nhiệm được Bộ Tài chính cấp phép; hồ sơ phát hành' },
    { name: 'Tài sản bảo đảm, bên bảo lãnh, đại diện người sở hữu trái phiếu', why: 'Quyết định khả năng thu hồi vốn khi doanh nghiệp không trả được nợ.', where: 'Hồ sơ chào bán, hợp đồng đại diện người sở hữu trái phiếu, hợp đồng bảo đảm' },
    { name: 'Lãi suất tiền gửi và lợi suất trái phiếu Chính phủ cùng kỳ hạn', why: 'Phần chênh lãi suất cho thấy thị trường đòi bù rủi ro bao nhiêu; chênh quá cao là tín hiệu cảnh báo.', where: 'Website NHNN, ngân hàng thương mại, HNX' },
  ],
  counterpoints: [
    'Không phải mọi trái phiếu doanh nghiệp đều rủi ro cao: trái phiếu của doanh nghiệp có dòng tiền ổn định, đòn bẩy thấp, có xếp hạng tốt có thể là công cụ đa dạng hóa hợp lý.',
    'Quỹ trái phiếu do chuyên gia quản lý, phân tán nhiều tổ chức phát hành, có thể phù hợp với cá nhân hơn là tự mua một mã riêng lẻ — nhưng vẫn có rủi ro và phí.',
    'Quy định chặt hơn giảm rủi ro "bán sai đối tượng" nhưng không loại bỏ rủi ro kinh doanh của doanh nghiệp phát hành; trách nhiệm thẩm định cuối cùng vẫn thuộc về người mua.',
  ],
  glossary: [
    { term: 'Lãi suất coupon', definition: 'Lãi suất danh nghĩa doanh nghiệp cam kết trả trên mệnh giá trái phiếu, cố định hoặc thả nổi.' },
    { term: 'Trái phiếu phát hành riêng lẻ', definition: 'Trái phiếu không chào bán ra công chúng; theo quy định hiện hành chỉ nhà đầu tư chứng khoán chuyên nghiệp được mua, và thông tin công bố ít hơn trái phiếu chào bán công chúng.' },
    { term: 'Tài sản bảo đảm', definition: 'Tài sản doanh nghiệp cam kết dùng để thanh toán cho trái chủ nếu không trả được nợ.' },
    { term: 'Xếp hạng tín nhiệm', definition: 'Đánh giá của tổ chức độc lập về khả năng trả nợ đầy đủ, đúng hạn của tổ chức phát hành.' },
    { term: 'Đại diện người sở hữu trái phiếu', definition: 'Tổ chức thay mặt trái chủ giám sát việc tuân thủ cam kết của doanh nghiệp phát hành.' },
    { term: 'Phần bù rủi ro tín dụng', definition: 'Phần lãi suất cao hơn lãi suất phi rủi ro (trái phiếu Chính phủ) mà nhà đầu tư đòi để chấp nhận rủi ro vỡ nợ.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'corporate-bonds-risk-q',
    question: 'Bạn được mời mua trái phiếu doanh nghiệp bất động sản lãi 12%/năm, được "cam kết mua lại sau 6 tháng", tài sản bảo đảm là cổ phần một công ty chưa niêm yết. Điều cần kiểm tra trước tiên là gì?',
    options: [
      { id: 'a', text: 'Lãi 12% cao hơn tiền gửi nhiều, lại có cam kết mua lại, nên an toàn.', explain: 'Lãi cao là phần bù cho rủi ro. Cam kết mua lại chỉ có giá trị bằng năng lực tài chính của bên cam kết, và cổ phần chưa niêm yết rất khó định giá, khó bán khi xảy ra sự cố.' },
      { id: 'b', text: 'Dòng tiền và nợ vay của doanh nghiệp, lịch sử thanh toán trên chuyên trang HNX, xếp hạng tín nhiệm, giá trị thực và pháp lý của tài sản bảo đảm, ai là bên cam kết mua lại và bạn có đủ điều kiện mua hay không.', correct: true, explain: 'Đúng. Khả năng trả nợ, chất lượng tài sản bảo đảm và thanh khoản là ba trụ cột; kiểm tra thêm điều kiện nhà đầu tư chuyên nghiệp theo quy định để biết sản phẩm có được chào bán đúng đối tượng.' },
      { id: 'c', text: 'Chỉ cần xem doanh nghiệp có thương hiệu lớn.', explain: 'Thương hiệu lớn không đảm bảo khả năng trả nợ; nhiều doanh nghiệp nổi tiếng từng chậm trả trái phiếu khi dòng tiền bị tắc.' },
    ],
  },
  sources: [
    { title: 'Chuyên trang thông tin trái phiếu doanh nghiệp', publisher: 'Sở Giao dịch Chứng khoán Hà Nội (HNX)', url: 'https://cbonds.hnx.vn' },
    { title: 'Nghị định 200/2026/NĐ-CP: Những điểm mới trong chào bán trái phiếu doanh nghiệp', publisher: 'VnEconomy', url: 'https://vneconomy.vn/nghi-dinh-2002026nd-cp-nhung-diem-moi-trong-chao-ban-trai-phieu-doanh-nghiep.htm' },
    { title: 'Bonds – FAQs', publisher: 'Investor.gov (SEC)', url: 'https://www.investor.gov/introduction-investing/investing-basics/investment-products/bonds-or-fixed-income-products/bonds' },
    { title: 'Ủy ban Chứng khoán Nhà nước', publisher: 'UBCKNN', url: 'https://www.ssc.gov.vn' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
