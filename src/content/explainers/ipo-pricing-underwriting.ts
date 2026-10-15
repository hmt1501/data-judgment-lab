import type { Explainer } from '../../../shared/explainer'

export const ipoPricingUnderwriting: Explainer = {
  id: 'ipo-pricing-underwriting',
  slug: 'ipo-pricing-underwriting',
  question: 'IPO định giá và bảo lãnh phát hành vận hành thế nào?',
  title: 'IPO là bài toán định giá giữa doanh nghiệp, tổ chức bảo lãnh và nhà đầu tư, với giá chào thường được đặt thận trọng',
  topic: 'markets-investing',
  tldr: 'IPO (chào bán cổ phiếu lần đầu ra công chúng) đưa doanh nghiệp lên sàn để huy động vốn. **Tổ chức bảo lãnh** tư vấn định giá, tiếp thị tới nhà đầu tư, và có thể cam kết mua phần chưa bán hết. Giá chào được đặt dựa trên so sánh doanh nghiệp tương đồng, dòng tiền chiết khấu và nhu cầu của nhà đầu tư; giá thường đặt thấp hơn giá trị ước tính để bảo đảm bán hết, nên cổ phiếu hay tăng trong ngày đầu.',
  keyPoints: [
    'Hai giá cần phân biệt: **giá chào bán** (doanh nghiệp bán cho nhà đầu tư ban đầu) và **giá giao dịch** sau khi lên sàn; chênh lệch hai giá là lợi nhuận hoặc rủi ro của người mua IPO.',
    'Định giá thường kết hợp **so sánh doanh nghiệp tương đồng** (P/E, EV/EBITDA của đối thủ), **chiết khấu dòng tiền** và phản hồi thực từ nhà đầu tư tổ chức qua quá trình thăm dò (book-building).',
    'Tổ chức bảo lãnh nhận phí (thường theo tỷ lệ % số tiền huy động) để tư vấn hồ sơ, định giá, phân phối và có thể cam kết mua hết (**cam kết chắc chắn**) hoặc cố gắng tối đa (**cố gắng cao nhất**).',
    'Doanh nghiệp bán cổ phiếu mới được tiền cho hoạt động; cổ đông cũ bán bớt cổ phần thì tiền vào túi họ, không vào công ty. Hai loại này có ý nghĩa rất khác với người mua.',
    'IPO thường dính hiệu ứng **định giá thấp ban đầu**: giá chào thấp hơn giá ngày đầu; nhưng kết quả dài hạn của cổ phiếu mới lên sàn thường không vượt thị trường nên không nên coi IPO là cơ hội chắc chắn.',
  ],
  causalChain: [
    { from: 'Doanh nghiệp cần vốn hoặc cổ đông muốn thoái vốn', to: 'Thuê tổ chức bảo lãnh chuẩn bị IPO', mechanism: 'Hồ sơ, báo cáo tài chính kiểm toán, bản cáo bạch và phân tích tiềm năng được chuẩn bị để thuyết phục nhà đầu tư.' },
    { from: 'Tổ chức bảo lãnh đánh giá doanh nghiệp và thị trường', to: 'Đưa ra khoảng giá chào bán', mechanism: 'Dựa trên định giá doanh nghiệp tương đồng và chiết khấu dòng tiền, rồi điều chỉnh theo khẩu vị rủi ro của thị trường.' },
    { from: 'Thăm dò nhu cầu nhà đầu tư (book-building)', to: 'Chốt giá và phân bổ cổ phiếu', mechanism: 'Nhà đầu tư đăng ký số lượng và mức giá; cầu vượt cung thì giá được đẩy lên hoặc cổ phiếu được phân bổ theo tỷ lệ.' },
    { from: 'Phát hành và niêm yết', to: 'Doanh nghiệp nhận tiền, cổ phiếu bắt đầu giao dịch', mechanism: 'Tổ chức bảo lãnh trả tiền cho doanh nghiệp (trừ phí) và mua lại phần chưa bán hết nếu cam kết bảo lãnh.' },
    { from: 'Giá chào thấp hơn giá cân bằng thị trường', to: 'Cổ phiếu tăng trong những ngày đầu', mechanism: 'Giá chào được đặt có "chiết khấu" để bảo đảm bán hết, người mua IPO hưởng phần chênh lệch; doanh nghiệp "để lại tiền trên bàn".' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp huy động vốn', effect: 'Có nguồn vốn dài hạn không cần trả lãi, nhưng phải công bố thông tin thường xuyên và chịu áp lực từ cổ đông mới.', direction: 'up' },
    { group: 'Nhà đầu tư cá nhân mua IPO', effect: 'Có thể hưởng chênh lệch giá ngày đầu, nhưng dễ mua giá cao theo tâm lý đám đông; cổ phiếu không hẳn được định giá thấp.', direction: 'mixed' },
    { group: 'Nhà nước (cổ phần hóa doanh nghiệp nhà nước)', effect: 'Thu tiền từ bán vốn nhưng định giá thấp bị chỉ trích là mất nguồn lực công, định giá cao quá thì khó bán hết.', direction: 'mixed' },
    { group: 'Công ty chứng khoán (bảo lãnh)', effect: 'Nhận phí bảo lãnh nhưng chịu rủi ro nếu cam kết mua hết và thị trường xấu đi.', direction: 'mixed' },
    { group: 'Thị trường chứng khoán', effect: 'IPO thành công làm sâu thị trường, tăng hàng hóa; IPO ồ ạt khi thị trường nóng thường báo hiệu giai đoạn tâm lý hưng phấn.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'P/E, EV/EBITDA của doanh nghiệp so sánh', why: 'Khung tham chiếu để đánh giá giá chào bán có hợp lý không.', where: 'Báo cáo tài chính doanh nghiệp niêm yết, dữ liệu Sở Giao dịch' },
    { name: 'Mục đích sử dụng vốn trong bản cáo bạch', why: 'Phân biệt phát hành thêm (tiền vào công ty) với cổ đông bán bớt.', where: 'Bản cáo bạch trên website Ủy ban Chứng khoán Nhà nước và công ty' },
    { name: 'Tỷ lệ đăng ký so với số cổ phiếu chào bán', why: 'Cầu cao cho thấy sức hút nhưng không bảo đảm giá tăng sau niêm yết.', where: 'Công bố kết quả đấu giá/chào bán' },
    { name: 'Thời hạn hạn chế chuyển nhượng của cổ đông lớn (lock-up)', why: 'Hết hạn lock-up có thể kéo thêm nguồn cung cổ phiếu ra thị trường.', where: 'Bản cáo bạch và công bố thông tin' },
  ],
  counterpoints: [
    'Giá IPO thấp so với giá ngày đầu không có nghĩa nhà đầu tư thường mua được cổ phiếu ở giá đó: nhiều thương vụ hấp dẫn được phân bổ ưu tiên cho nhà đầu tư tổ chức.',
    'Nhiều nghiên cứu thấy cổ phiếu mới lên sàn có hiệu suất dài hạn dưới thị trường; ngày đầu tăng mạnh không phản ánh kết quả sau vài năm.',
    'Một số công ty chọn niêm yết trực tiếp hoặc cách khác không có bảo lãnh truyền thống, nên mô hình bảo lãnh không phải duy nhất.',
  ],
  glossary: [
    { term: 'IPO', definition: 'Chào bán cổ phiếu lần đầu ra công chúng của một doanh nghiệp.' },
    { term: 'Bảo lãnh phát hành', definition: 'Dịch vụ tổ chức tài chính giúp doanh nghiệp phát hành chứng khoán và có thể cam kết mua phần không bán hết.' },
    { term: 'Book-building', definition: 'Quá trình thu thập đăng ký của nhà đầu tư theo mức giá để chốt giá chào bán.' },
    { term: 'Lock-up', definition: 'Thời hạn cổ đông lớn bị hạn chế bán cổ phiếu sau IPO.' },
    { term: 'Định giá thấp ban đầu', definition: 'Hiện tượng giá giao dịch ngày đầu cao hơn giá chào bán.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'ipo-pricing-underwriting-q',
    question: 'Giá chào IPO 20.000 đồng và ngày đầu cổ phiếu tăng lên 28.000 đồng. Nhận định nào đúng?',
    options: [
      { id: 'a', text: 'Doanh nghiệp được lợi từ cả mức tăng 8.000 đồng mỗi cổ phiếu.', explain: 'Doanh nghiệp chỉ nhận số tiền theo giá chào bán (trừ phí); phần tăng sau đó thuộc về người nắm cổ phiếu.' },
      { id: 'b', text: 'Doanh nghiệp "để lại tiền trên bàn", phần chênh lệch thuộc người mua được phân bổ cổ phiếu IPO.', correct: true, explain: 'Đúng. Giá chào thấp hơn giá thị trường đồng nghĩa doanh nghiệp huy động ít hơn mức có thể; lợi ích thuộc nhà đầu tư mua tại giá chào.' },
      { id: 'c', text: 'Giá 28.000 đồng chứng tỏ cổ phiếu chắc chắn đáng giá hơn trong dài hạn.', explain: 'Giá ngày đầu chịu ảnh hưởng nhiều của tâm lý và cung cầu; không bảo đảm hiệu suất dài hạn.' },
    ],
  },
  sources: [
    { title: 'IPO Data (dữ liệu IPO Mỹ 1980-2025: lợi suất ngày đầu và lợi suất dài hạn)', publisher: 'Jay R. Ritter, University of Florida (Warrington College of Business)', url: 'https://site.warrington.ufl.edu/ritter/ipo-data/' },
    { title: 'Initial public offering', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Initial_public_offering' },
    { title: 'Underwriting', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Underwriting' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 21,
}
