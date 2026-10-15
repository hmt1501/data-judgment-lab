import type { Explainer } from '../../../shared/explainer'

export const realEstateBondLiquidityCrunch: Explainer = {
  id: 'real-estate-bond-liquidity-crunch',
  slug: 'real-estate-bond-liquidity-crunch',
  question: 'Trái phiếu bất động sản gặp khó sẽ gây nghẽn thanh khoản dây chuyền thế nào?',
  title: 'Nghẽn thanh khoản BĐS: trái phiếu đáo hạn, dự án chậm bán, tiền không quay vòng',
  topic: 'real-estate',
  tldr: 'Chủ đầu tư BĐS thường vay bằng **trái phiếu ngắn hạn** để làm dự án có vòng đời dài. Khi doanh số chậm và nhà đầu tư không mua tiếp, họ không đủ tiền trả nợ đến hạn; nợ chưa trả làm niềm tin sụt giảm, ngân hàng thận trọng hơn và người mua nhà lo ngại, khiến doanh số càng yếu. Đó là vòng xoáy **thanh khoản**, không nhất thiết là mất khả năng thanh toán ngay từ đầu.',
  keyPoints: [
    '**Kỳ hạn không khớp**: nợ trái phiếu kỳ hạn vài năm, nhưng dự án cần thời gian dài mới có tiền bán; doanh nghiệp phụ thuộc phát hành mới hoặc gia hạn để trả nợ cũ (đảo nợ). Theo VBMA (tổng hợp từ HNX, tính đến 23/2/2024), nhóm BĐS chiếm khoảng 38% (khoảng 99.234 tỷ đồng) trong 258.239 tỷ đồng trái phiếu doanh nghiệp đến hạn phần còn lại của năm 2024 (Báo Đấu thầu, 29/2/2024).',
    '**Thanh khoản (liquidity)** khác **khả năng thanh toán (solvency)**: doanh nghiệp có thể có tài sản lớn nhưng chưa bán được kịp để trả nợ đến hạn.',
    '**Vòng phản hồi**: trái phiếu chậm trả, nhà đầu tư mất tin, thị trường sơ cấp đóng, chủ đầu tư thiếu vốn, dự án chậm tiến độ, người mua giảm.',
    '**Lan sang ngân hàng**: ngân hàng vừa là chủ nợ, vừa nắm giữ trái phiếu hoặc cho vay có BĐS bảo đảm, nên nợ xấu và trích lập dự phòng tăng.',
    'Các biện pháp thường gặp là gia hạn kỳ hạn, tái cơ cấu nợ, bán tài sản, khơi thông pháp lý dự án; mỗi biện pháp có chi phí và thời gian. Về khung pháp lý, Nghị định 65/2022/NĐ-CP (sửa Nghị định 153/2020; quy định sau đó có thể đã được sửa tiếp, cần kiểm tra bản hiện hành) yêu cầu dùng vốn trái phiếu đúng mục đích đã công bố và chỉ cho đổi điều khoản trái phiếu đã phát hành khi người sở hữu từ 65% trái phiếu cùng loại chấp thuận (VnEconomy, 18/9/2022).',
  ],
  causalChain: [
    { from: 'Doanh số BĐS giảm (lãi vay cao, người mua ngần ngại)', to: 'Dòng tiền thu về của chủ đầu tư giảm', mechanism: 'Tiền bán hàng và tiền ứng trước của khách là nguồn trả nợ chính; thiếu nó, doanh nghiệp phải vay mới.' },
    { from: 'Dòng tiền giảm', to: 'Khó trả gốc và lãi trái phiếu đến hạn', mechanism: 'Trái phiếu kỳ hạn ngắn đáo hạn tập trung; không đảo được nợ thì phải bán tài sản hoặc xin gia hạn.' },
    { from: 'Trái phiếu chậm trả', to: 'Niềm tin nhà đầu tư giảm, thị trường sơ cấp đóng', mechanism: 'Một vài trường hợp vỡ nợ làm nhà đầu tư đánh giá lại rủi ro của cả nhóm ngành, chi phí huy động tăng hoặc không huy động được.' },
    { from: 'Không huy động được vốn', to: 'Dự án chậm tiến độ, cung giảm, người mua lo ngại', mechanism: 'Người mua sợ dự án dở dang nên trì hoãn mua, làm doanh số tiếp tục yếu.' },
    { from: 'Nợ BĐS gặp khó', to: 'Ngân hàng thận trọng hơn, tín dụng thu hẹp', mechanism: 'Giá trị tài sản bảo đảm bị nghi ngờ, ngân hàng tăng dự phòng, hạn chế cho vay lĩnh vực này, làm vòng xoáy thêm sâu.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư trái phiếu cá nhân', effect: 'Rủi ro mất kỳ vọng thu hồi vốn và lãi, thanh khoản thị trường thứ cấp kém; cần đánh giá tài sản bảo đảm, dòng tiền thay vì chỉ lãi suất cao.', direction: 'down' },
    { group: 'Chủ đầu tư BĐS', effect: 'Chi phí vốn tăng, phải bán tài sản hoặc tái cơ cấu nợ; doanh nghiệp có dòng tiền tốt và pháp lý sạch chịu ít áp lực hơn.', direction: 'down' },
    { group: 'Người mua nhà trả góp theo tiến độ', effect: 'Rủi ro dự án chậm tiến độ, chậm bàn giao; nên kiểm tra pháp lý dự án và điều khoản bảo lãnh.', direction: 'down' },
    { group: 'Ngân hàng', effect: 'Nợ xấu và dự phòng tăng, hạn chế cho vay BĐS; ngân hàng có tỷ lệ dự phòng tốt chống đỡ tốt hơn.', direction: 'down' },
    { group: 'Nhà thầu, ngành vật liệu xây dựng', effect: 'Công nợ phải thu kéo dài, đơn hàng giảm khi dự án đình trệ.', direction: 'down' },
    { group: 'Nhà đầu tư mua tài sản giá thấp', effect: 'Doanh nghiệp tài chính mạnh có thể mua lại tài sản hoặc dự án với giá chiết khấu, nếu pháp lý rõ ràng.', direction: 'up' },
  ],
  indicators: [
    { name: 'Trái phiếu doanh nghiệp BĐS đáo hạn theo quý và tỷ lệ chậm trả', why: 'Đo áp lực trả nợ và mức lan rộng của rủi ro.', where: 'Hiệp hội Thị trường Trái phiếu Việt Nam (VBMA), Sở Giao dịch Chứng khoán Hà Nội (HNX), Bộ Tài chính' },
    { name: 'Doanh số bán và tỷ lệ hấp thụ của chủ đầu tư', why: 'Nguồn tiền trả nợ chính; hấp thụ giảm là tín hiệu căng thẳng sớm.', where: 'Báo cáo tài chính, báo cáo thị trường của các đơn vị tư vấn BĐS' },
    { name: 'Nợ xấu và dự phòng của ngân hàng, dư nợ BĐS', why: 'Cho thấy mức độ lan sang hệ thống ngân hàng.', where: 'Báo cáo tài chính ngân hàng, Ngân hàng Nhà nước (sbv.gov.vn)' },
    { name: 'Chênh lệch lãi suất trái phiếu BĐS so với trái phiếu chính phủ', why: 'Phản ánh phần bù rủi ro nhà đầu tư đòi hỏi.', where: 'Dữ liệu giao dịch trái phiếu, HNX' },
  ],
  counterpoints: [
    'Không phải doanh nghiệp BĐS nào cũng rủi ro như nhau: dòng tiền cho thuê, quỹ đất sạch và nợ dài hạn giúp một số doanh nghiệp vượt qua giai đoạn khó khăn.',
    'Gia hạn hoặc tái cơ cấu nợ có thể kéo dài vấn đề thay vì giải quyết, nếu dự án nền không có khả năng sinh tiền.',
    'Nới lỏng tín dụng quá nhanh để cứu thị trường có thể tạo lại rủi ro đòn bẩy; cân bằng giữa an toàn hệ thống và hỗ trợ thanh khoản rất khó.',
  ],
  glossary: [
    { term: 'Đảo nợ', definition: 'Phát hành khoản nợ mới để trả khoản nợ cũ đến hạn.' },
    { term: 'Thanh khoản', definition: 'Khả năng có đủ tiền mặt hoặc quy đổi tài sản ra tiền kịp để thực hiện nghĩa vụ.' },
    { term: 'Khả năng thanh toán', definition: 'Tổng tài sản có đủ bù tổng nợ phải trả trong dài hạn hay không.' },
    { term: 'Trích lập dự phòng', definition: 'Khoản ngân hàng đặt ra để bù đắp tổn thất tín dụng có thể xảy ra.' },
    { term: 'Tái cơ cấu nợ', definition: 'Thỏa thuận lại kỳ hạn, lãi suất hoặc điều kiện trả nợ với chủ nợ.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'real-estate-bond-liquidity-crunch-q',
    question: 'Một chủ đầu tư có tài sản lớn hơn nợ nhưng không đảo được trái phiếu đáo hạn và doanh số chậm. Mô tả đúng nhất?',
    options: [
      { id: 'a', text: 'Chắc chắn đã mất khả năng thanh toán, tài sản vô giá trị.', explain: 'Có tài sản lớn hơn nợ nghĩa là chưa chắc mất khả năng thanh toán; vấn đề là chuyển tài sản thành tiền kịp thời.' },
      { id: 'b', text: 'Khủng hoảng thanh khoản: vấn đề kỳ hạn và niềm tin, có thể giải quyết bằng gia hạn, bán tài sản, nhưng nếu kéo dài có thể thành mất khả năng thanh toán.', correct: true, explain: 'Đúng. Thanh khoản và khả năng thanh toán là hai khái niệm khác nhau, cách xử lý cũng khác nhau.' },
      { id: 'c', text: 'Vấn đề chỉ của riêng doanh nghiệp, không ảnh hưởng ngân hàng hay người mua nhà.', explain: 'Tác động lan qua trái phiếu, tài sản bảo đảm, tiến độ dự án và niềm tin người mua.' },
    ],
  },
  sources: [
    { title: 'Liquidity crisis', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Liquidity_crisis' },
    { title: 'Gần 100 nghìn tỷ đồng trái phiếu doanh nghiệp bất động sản đáo hạn trong năm 2024 (29/2/2024)', publisher: 'Báo Đấu thầu', url: 'https://baodauthau.vn/gan-100-nghin-ty-dong-trai-phieu-doanh-nghiep-bat-dong-san-dao-han-trong-nam-2024-post150563.html' },
    { title: 'Chính thức sửa quy định về phát hành trái phiếu doanh nghiệp riêng lẻ (18/9/2022)', publisher: 'VnEconomy', url: 'https://vneconomy.vn/chinh-thuc-sua-quy-dinh-ve-phat-hanh-trai-phieu-doanh-nghiep-rieng-le.htm' },
    { title: 'Cổng thông tin điện tử Bộ Tài chính', publisher: 'Bộ Tài chính', url: 'https://www.mof.gov.vn/' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 27,
}
