import type { Explainer } from '../../../shared/explainer'

export const reitsExplainedPropertyInvesting: Explainer = {
  id: 'reits-explained-property-investing',
  slug: 'reits-explained-property-investing',
  question: 'REIT / quỹ đầu tư bất động sản hoạt động thế nào, lợi suất từ đâu, rủi ro ở đâu?',
  title: 'REIT là cách sở hữu một "giỏ" bất động sản cho thuê qua cổ phiếu/chứng chỉ quỹ, đổi lại bạn chịu biến động giá và lãi suất',
  topic: 'real-estate',
  tldr: 'REIT (real estate investment trust) là công ty sở hữu, vận hành hoặc tài trợ bất động sản **tạo thu nhập**; nhà đầu tư mua cổ phần và nhận phần thu nhập qua cổ tức mà không phải tự mua, quản lý tài sản. Lợi suất đến từ **tiền thuê** cộng thay đổi giá trị cổ phiếu, và rủi ro chính gồm lãi suất, tỷ lệ trống, đòn bẩy và biến động giá do giao dịch trên sàn. Các sản phẩm tương tự ở Việt Nam khác về khung pháp lý và quy mô, cần đọc kỹ điều lệ từng quỹ.',
  keyPoints: [
    'Theo Nareit (hiệp hội REIT của Mỹ), REIT là công ty sở hữu, vận hành hoặc tài trợ bất động sản tạo thu nhập, được mô phỏng theo quỹ tương hỗ; phần lớn là công ty đại chúng niêm yết, nhưng cũng có loại đăng ký nhưng không niêm yết.',
    'Cổ đông được chia **thu nhập từ tài sản** mà không phải tự mua và quản lý bất động sản; tài sản có thể gồm văn phòng, căn hộ cho thuê, kho, trung tâm bán lẻ, cơ sở y tế, trung tâm dữ liệu, tháp viễn thông, khách sạn.',
    '**Lợi suất cổ tức** = cổ tức trên mỗi cổ phần / giá cổ phần. Nó không bảo đảm: thu nhập thuê giảm hoặc chi phí vay tăng sẽ làm cổ tức giảm; giá cổ phiếu cũng dao động hằng ngày như cổ phiếu khác.',
    'Giá REIT niêm yết nhạy với **lãi suất**: lãi suất tăng làm lợi suất đòi hỏi tăng và chi phí vay tăng, thường gây áp lực lên giá REIT trong ngắn hạn.',
    'Khác biệt chính với mua nhà trực tiếp: thanh khoản cao hơn (mua bán qua sàn), đa dạng hóa dễ hơn với vốn nhỏ, nhưng bạn **không kiểm soát** tài sản, và giá có thể lệch giá trị tài sản ròng.',
  ],
  causalChain: [
    { from: 'REIT thu tiền thuê từ tài sản', to: 'Có dòng tiền để chia cổ tức', mechanism: 'Thu nhập thuê trừ chi phí vận hành và lãi vay là nguồn chia cho cổ đông; nhiều khung pháp lý bắt REIT chia phần lớn thu nhập để hưởng ưu đãi thuế.' },
    { from: 'Lãi suất thị trường tăng', to: 'Giá REIT chịu áp lực', mechanism: 'Nhà đầu tư so lợi suất cổ tức với lãi suất phi rủi ro; chi phí vay mới đắt hơn làm giảm khả năng mở rộng và tái tài trợ.' },
    { from: 'Tỷ lệ trống tăng hoặc tiền thuê giảm', to: 'Cổ tức giảm, giá giảm', mechanism: 'Dòng thuê giảm làm giảm giá trị tài sản và khả năng trả nợ, đặc biệt khi đòn bẩy cao.' },
    { from: 'Nhà đầu tư rút vốn đồng loạt (ở quỹ mở/không niêm yết)', to: 'Áp lực bán tài sản hoặc hạn chế rút tiền', mechanism: 'Tài sản nền khó bán nhanh; nếu quỹ cho rút liên tục sẽ có lệch pha thanh khoản, như ESM cảnh báo với quỹ mở BĐS ở khu vực đồng euro.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân vốn nhỏ', effect: 'REIT/quỹ BĐS là cách tiếp cận bất động sản mà không cần vốn lớn, nhưng cần xem điều lệ, phí, tài sản nền; sản phẩm tại Việt Nam còn ít và khung pháp lý khác thị trường Mỹ.', direction: 'mixed' },
    { group: 'Chủ đầu tư và doanh nghiệp bất động sản', effect: 'Mô hình này có thể là kênh huy động vốn thay cho vay ngân hàng/trái phiếu nếu có khung pháp lý và niềm tin thị trường.', direction: 'up' },
    { group: 'Thị trường vốn', effect: 'Góp phần đa dạng hóa sản phẩm đầu tư, nhưng hiệu quả phụ thuộc minh bạch định giá tài sản và quản trị.', direction: 'up' },
    { group: 'Người đang cần dòng tiền ổn định', effect: 'Cổ tức không bảo đảm; không nên coi như thay thế tiền gửi.', direction: 'down' },
  ],
  indicators: [
    { name: 'Lợi suất cổ tức và mức chia thực tế so với dòng tiền hoạt động', why: 'Cổ tức vượt dòng tiền là dấu hiệu khó duy trì.', where: 'Báo cáo tài chính, công bố của quỹ/REIT; cổng thông tin sàn giao dịch' },
    { name: 'Giá thị trường so với giá trị tài sản ròng (NAV)', why: 'Chiết khấu/phụ trội so với NAV cho biết thị trường đánh giá tài sản và quản lý thế nào.', where: 'Báo cáo định kỳ của quỹ; công bố NAV' },
    { name: 'Tỷ lệ lấp đầy, thời hạn thuê còn lại, tỷ lệ nợ trên tài sản', why: 'Ba yếu tố quyết định độ bền của dòng thuê và rủi ro tái tài trợ.', where: 'Báo cáo thường niên, thuyết minh báo cáo tài chính' },
    { name: 'Lãi suất trái phiếu chính phủ dài hạn', why: 'Đối chiếu với lợi suất cổ tức để biết phần bù rủi ro còn bao nhiêu.', where: 'Sở Giao dịch Chứng khoán Hà Nội (HNX), Ngân hàng Nhà nước' },
  ],
  counterpoints: [
    'Giá REIT niêm yết biến động như cổ phiếu và có thể giảm mạnh dù tài sản nền không đổi; thanh khoản của sàn không làm bất động sản nền bớt rủi ro.',
    'Quy định thuế, tỷ lệ chia thu nhập và quyền của cổ đông khác nhau theo từng nước; không áp dụng nguyên si khuôn mẫu của Mỹ cho Việt Nam.',
    'Phí quản lý, phí giao dịch và xung đột lợi ích giữa bên quản lý và nhà đầu tư có thể ăn mòn lợi suất.',
  ],
  glossary: [
    { term: 'REIT', definition: 'Công ty sở hữu, vận hành hoặc tài trợ bất động sản tạo thu nhập, cho phép nhà đầu tư góp vốn qua cổ phần.' },
    { term: 'NAV', definition: 'Giá trị tài sản ròng: tổng giá trị tài sản trừ nợ, chia cho số cổ phần.' },
    { term: 'Lợi suất cổ tức', definition: 'Cổ tức hằng năm trên mỗi cổ phần chia cho giá cổ phần.' },
    { term: 'Đòn bẩy', definition: 'Mức sử dụng nợ để mua tài sản; làm khuếch đại cả lợi nhuận và rủi ro.' },
    { term: 'Lệch pha thanh khoản', definition: 'Tình trạng nhà đầu tư có thể rút nhanh nhưng tài sản nền (bất động sản) bán chậm.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'reits-explained-property-investing-q',
    question: 'Một REIT chia cổ tức lợi suất 8%/năm cao hơn hẳn lãi tiền gửi, nhưng dòng tiền hoạt động chỉ đủ chia ở mức tương ứng 5%. Cách đọc nào hợp lý?',
    options: [
      { id: 'a', text: 'Cổ tức 8% là an toàn vì quỹ công bố như vậy.', explain: 'Nếu dòng tiền không đủ, cổ tức có thể được chi bằng vay nợ hoặc bán tài sản, khó duy trì.' },
      { id: 'b', text: 'Cổ tức cao hơn dòng tiền là dấu hiệu rủi ro bị cắt giảm; cần xem nguồn chi trả.', correct: true, explain: 'Đúng. Lợi suất cao có thể phản ánh rủi ro cao hoặc cổ tức chưa bền vững.' },
      { id: 'c', text: 'Lợi suất cao luôn tốt hơn lợi suất thấp.', explain: 'Lợi suất cao cần được kiểm tra: nếu nó đến từ giá cổ phiếu giảm hay chi trả vượt dòng tiền thì không phải tín hiệu tốt.' },
    ],
  },
  sources: [
    { title: 'What is a REIT (Real Estate Investment Trust)?', publisher: 'Nareit (REIT.com)', url: 'https://www.reit.com/what-reit' },
    { title: 'Real estate investment trust', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Real_estate_investment_trust' },
    { title: 'Commercial real estate and financial stability: this time, it\'s different (10/08/2023)', publisher: 'European Stability Mechanism', url: 'https://www.esm.europa.eu/blog/commercial-real-estate-and-financial-stability-time-its-different' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 64,
}
