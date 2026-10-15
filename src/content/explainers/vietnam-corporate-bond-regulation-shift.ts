import type { Explainer } from '../../../shared/explainer'

export const vietnamCorporateBondRegulationShift: Explainer = {
  id: 'vietnam-corporate-bond-regulation-shift',
  slug: 'vietnam-corporate-bond-regulation-shift',
  question: 'Quy định trái phiếu doanh nghiệp ở Việt Nam đã thay đổi thế nào và tác động ra sao tới thị trường?',
  title: 'Trái phiếu doanh nghiệp: từ siết riêng lẻ đến chuẩn hóa chào bán công chúng',
  topic: 'vietnam-economy',
  tldr: 'Sau giai đoạn phát hành riêng lẻ bùng nổ, Nghị định 65/2022 siết đối tượng mua, công bố thông tin và mệnh giá; Nghị định 245/2025 (hiệu lực từ 11/9/2025) tiếp tục chuẩn hóa chào bán ra công chúng bằng xếp hạng tín nhiệm, trần đòn bẩy và rút ngắn thủ tục. Hướng chung: chuyển rủi ro từ "mua theo lời giới thiệu" sang "mua theo thông tin có thể kiểm chứng", nhưng vẫn còn khoảng trống (miễn trừ, ít xếp hạng).',
  keyPoints: [
    'Theo Báo Pháp Luật TP.HCM (21/9/2022) về Nghị định 65/2022 (sửa đổi Nghị định 153/2020): chỉ nhà đầu tư chứng khoán chuyên nghiệp được mua trái phiếu riêng lẻ; với cá nhân, tiêu chí là duy trì danh mục bình quân 2 tỷ đồng trong 180 ngày bằng tài sản của chính mình; mệnh giá tăng từ 100.000 đồng lên 100 triệu đồng.',
    'Cùng bài báo: doanh nghiệp phải công bố thông tin trên website Sở Giao dịch chứng khoán (trước giao dịch, kết quả phát hành, định kỳ, bất thường), phải mua lại trước hạn khi vi phạm phương án phát hành, và đảo nợ chỉ cho chính doanh nghiệp phát hành.',
    'Theo VnEconomy (16/10/2025) về Nghị định 245/2025/NĐ-CP (hiệu lực 11/9/2025, sửa đổi Nghị định 155/2020): tổng nợ phải trả kể cả đợt phát hành không vượt 5 lần vốn chủ sở hữu; mọi đợt chào bán ra công chúng phải có xếp hạng tín nhiệm (với tổ chức hoặc từng loại trái phiếu); bỏ yêu cầu văn bản chấp thuận của Ngân hàng Nhà nước đối với tổ chức tín dụng; thời gian đưa trái phiếu vào giao dịch thứ cấp giảm từ 90 xuống 30 ngày.',
    'Khoảng trống theo VIS Rating (trích trong bài VnEconomy): tổ chức tín dụng được miễn cả trần đòn bẩy lẫn xếp hạng, trái phiếu được tổ chức tín dụng hoặc tổ chức tài chính quốc tế bảo lãnh đầy đủ gốc và lãi được miễn xếp hạng; theo bài, 5 tổ chức xếp hạng trong nước mới xếp hạng 89 doanh nghiệp và 9 loại trái phiếu (khoảng 23% doanh nghiệp phát hành, 0,4% lượng trái phiếu lưu hành); thiếu đường cong lợi suất chuẩn nên định giá theo rủi ro còn yếu.',
    'Quy mô thị trường theo Báo Pháp Luật TP.HCM (2022): từ 2019 phát hành bình quân khoảng 467.000 tỷ đồng/năm, năm 2021 khoảng 637.000 tỷ đồng, quy mô cuối 2021 tương đương 15% GDP.',
  ],
  causalChain: [
    { from: 'Phát hành riêng lẻ ít bị ràng buộc, nhà đầu tư cá nhân tham gia rộng', to: 'Rủi ro thông tin bất cân xứng tích tụ', mechanism: 'Doanh nghiệp huy động vốn dài hạn vào dự án rủi ro, nhà đầu tư cá nhân thiếu công cụ thẩm định nên rủi ro được định giá thấp.' },
    { from: 'Siết điều kiện nhà đầu tư và công bố thông tin (Nghị định 65/2022)', to: 'Lượng phát hành và thanh khoản thay đổi', mechanism: 'Số người đủ điều kiện mua giảm, doanh nghiệp phải minh bạch hơn; phát hành riêng lẻ chậm lại, thị trường tái cơ cấu.' },
    { from: 'Doanh nghiệp bất động sản khó huy động, khó đảo nợ', to: 'Rủi ro thanh khoản lan sang ngân hàng và thị trường', mechanism: 'Trái phiếu đáo hạn cần trả bằng nguồn thu dự án hoặc vay mới; khi hai nguồn đó yếu, rủi ro mất khả năng thanh toán tăng.' },
    { from: 'Xếp hạng tín nhiệm và trần đòn bẩy (Nghị định 245/2025)', to: 'Định giá theo rủi ro rõ hơn, nhưng chỉ cho phần được xếp hạng', mechanism: 'Xếp hạng độc lập cho nhà đầu tư thước đo so sánh; nếu độ bao phủ thấp và nhiều miễn trừ, phần lớn thị trường vẫn thiếu tín hiệu.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân', effect: 'Phát hành riêng lẻ chỉ dành cho nhà đầu tư chuyên nghiệp; trái phiếu chào bán công chúng có xếp hạng và thông tin chuẩn hóa hơn, nhưng miễn trừ vẫn còn.', direction: 'up' },
    { group: 'Doanh nghiệp bất động sản và doanh nghiệp đòn bẩy cao', effect: 'Trần đòn bẩy 5 lần vốn chủ (cùng yêu cầu sẵn có là hoạt động có lãi, không nợ quá hạn) có thể làm giảm khả năng huy động công chúng của doanh nghiệp đòn bẩy cao (một số nhóm được miễn); bài nguồn không nêu riêng nhóm bất động sản, đây là suy luận.', direction: 'down' },
    { group: 'Ngân hàng', effect: 'Bỏ yêu cầu chấp thuận của Ngân hàng Nhà nước cho tổ chức tín dụng phát hành giúp huy động vốn dài hạn thuận lợi hơn; nhưng ngân hàng cũng nắm một phần trái phiếu doanh nghiệp nên chịu rủi ro tín dụng.', direction: 'mixed' },
    { group: 'Doanh nghiệp đủ chuẩn, có xếp hạng', effect: 'Chi phí huy động theo rủi ro minh bạch hơn, thời gian đưa vào giao dịch thứ cấp ngắn hơn.', direction: 'up' },
    { group: 'Thị trường vốn', effect: 'Tăng chuẩn thông tin giúp thị trường phát triển bền hơn, nhưng quá trình chuyển đổi có thể làm khối lượng phát hành giảm trong ngắn hạn.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Khối lượng phát hành trái phiếu doanh nghiệp (riêng lẻ và công chúng)', why: 'Cho thấy quy định đã làm thị trường co lại hay chuyển dịch.', where: 'Hiệp hội Thị trường Trái phiếu Việt Nam; Sở Giao dịch chứng khoán Hà Nội; Bộ Tài chính' },
    { name: 'Lượng trái phiếu đáo hạn trong 12 tháng tới và tỷ lệ chậm trả', why: 'Dấu hiệu áp lực thanh khoản của doanh nghiệp phát hành.', where: 'Hiệp hội Thị trường Trái phiếu Việt Nam; thông tin công bố trên website Sở Giao dịch chứng khoán' },
    { name: 'Độ bao phủ xếp hạng tín nhiệm', why: 'Quyết định mức độ quy định mới thật sự có tín hiệu giá.', where: 'Các tổ chức xếp hạng tín nhiệm trong nước; báo cáo của VIS Rating' },
    { name: 'Hệ số nợ/vốn chủ sở hữu của doanh nghiệp phát hành', why: 'Đối chiếu với trần 5 lần.', where: 'Báo cáo tài chính đã kiểm toán' },
  ],
  counterpoints: [
    'Quy định chặt hơn không tự xóa rủi ro: khoảng cách giữa quy định trên giấy và độ bao phủ thực tế (xếp hạng, giám sát) có thể còn lớn, như VIS Rating nêu.',
    'Siết quá mạnh có thể làm doanh nghiệp tốt khó huy động vốn dài hạn, đẩy sang vay ngân hàng và tăng áp lực lên tín dụng.',
    'Bài này tóm tắt các điều khoản theo báo chí; để áp dụng cụ thể cần đối chiếu văn bản gốc và các văn bản sửa đổi, hướng dẫn hiện hành (các nghị định khác có thể thay đổi sau thời điểm các bài báo được đăng).',
  ],
  glossary: [
    { term: 'Trái phiếu doanh nghiệp riêng lẻ', definition: 'Trái phiếu chào bán cho dưới một số lượng nhà đầu tư nhất định hoặc nhà đầu tư chứng khoán chuyên nghiệp, không chào bán ra công chúng.' },
    { term: 'Nhà đầu tư chứng khoán chuyên nghiệp', definition: 'Nhà đầu tư đáp ứng tiêu chí do luật quy định; theo Nghị định 65/2022 cá nhân cần danh mục bình quân 2 tỷ đồng trong 180 ngày bằng tài sản tự có.' },
    { term: 'Xếp hạng tín nhiệm', definition: 'Đánh giá độc lập về khả năng trả nợ của tổ chức phát hành hoặc một loại trái phiếu.' },
    { term: 'Đảo nợ', definition: 'Phát hành trái phiếu mới để trả nợ trái phiếu cũ.' },
    { term: 'Đòn bẩy (nợ/vốn chủ sở hữu)', definition: 'Tỷ lệ nợ phải trả trên vốn chủ sở hữu; Nghị định 245/2025 đặt trần 5 lần cho chào bán công chúng (có đối tượng được miễn).' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-corporate-bond-regulation-shift-q',
    question: 'Một trái phiếu doanh nghiệp được chào bán công chúng có xếp hạng tín nhiệm tốt. Điều nào nên làm tiếp trước khi mua?',
    options: [
      { id: 'a', text: 'Mua ngay vì có xếp hạng nghĩa là bảo đảm trả nợ.', explain: 'Xếp hạng là ý kiến đánh giá, không phải bảo đảm; và độ bao phủ xếp hạng còn thấp, nhiều đối tượng được miễn.' },
      { id: 'b', text: 'Đọc phương án sử dụng vốn, đòn bẩy, dòng tiền trả nợ và xem xếp hạng do tổ chức nào, ai bảo lãnh.', correct: true, explain: 'Đúng: xếp hạng chỉ là một đầu vào; vẫn cần kiểm tra nguồn trả nợ, đòn bẩy và các miễn trừ (bảo lãnh).' },
      { id: 'c', text: 'Bỏ qua quy định mới vì chỉ ảnh hưởng doanh nghiệp.', explain: 'Quy định quyết định ai được mua, thông tin nào được công bố, và nhà đầu tư cần biết để tự bảo vệ.' },
    ],
  },
  sources: [
    { title: 'Nghị định mới về trái phiếu: Chặn lách luật, khơi thông vốn (21/9/2022)', publisher: 'Báo Pháp Luật TP.HCM (tuoitre.vn/plo)', url: 'https://tuoitre.vn/plo/nghi-dinh-moi-ve-trai-phieu-chan-lach-luat-khoi-thong-von-post699472.html' },
    { title: 'Nghị định 245: Bước ngoặt định hình thị trường trái phiếu... vẫn còn khoảng trống (16/10/2025)', publisher: 'VnEconomy', url: 'https://vneconomy.vn/nghi-dinh-245-buoc-ngoat-dinh-hinh-thi-truong-trai-phieu-van-con-khoang-trong.htm' },
    { title: 'Quy định mới thúc đẩy phát hành, tăng minh bạch cho thị trường trái phiếu (15/10/2025)', publisher: 'Thời báo Tài chính Việt Nam', url: 'https://thoibaotaichinhvietnam.vn/quy-dinh-moi-thuc-day-phat-hanh-tang-minh-bach-cho-thi-truong-trai-phieu-185128.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 126,
}
