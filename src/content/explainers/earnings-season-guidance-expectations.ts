import type { Explainer } from '../../../shared/explainer'

export const earningsSeasonGuidanceExpectations: Explainer = {
  id: 'earnings-season-guidance-expectations',
  slug: 'earnings-season-guidance-expectations',
  question: 'Mùa báo cáo: vì sao "tốt hơn kỳ vọng" mới là điều quan trọng?',
  title: 'Giá cổ phiếu đã chứa kỳ vọng, nên phản ứng đến từ chênh lệch với kỳ vọng và triển vọng',
  topic: 'markets-investing',
  tldr: 'Giá cổ phiếu trước mùa báo cáo đã phản ánh **kỳ vọng** của thị trường (dự báo của chuyên viên phân tích và hướng dẫn của công ty). Vì vậy, lợi nhuận tăng 20% có thể làm giá giảm nếu thị trường kỳ vọng 30%, và lợi nhuận giảm có thể làm giá tăng nếu "ít tệ hơn dự đoán". Điều quyết định phản ứng thường là **chênh lệch so với kỳ vọng** và **triển vọng (guidance)**, không chỉ con số tuyệt đối.',
  keyPoints: [
    'Theo Wikipedia, **earnings guidance** là dự báo của chính doanh nghiệp về lợi nhuận tương lai gần, giúp chuyên viên phân tích và nhà đầu tư định giá và có thể ảnh hưởng khuyến nghị; nhiều công ty Mỹ từng đưa guidance hằng quý nhưng đến những năm 2010 đã bỏ bớt vì bị coi là thúc đẩy tư duy ngắn hạn.',
    '**Consensus** là mức dự báo trung bình của giới phân tích; "vượt kỳ vọng" (beat) và "hụt kỳ vọng" (miss) được đo so với consensus, và chất lượng lợi nhuận (một lần hay bền vững) cũng được xem xét.',
    'Phản ứng giá phụ thuộc cả **triển vọng**: công ty vượt kỳ vọng nhưng hạ dự báo quý sau thường bị bán, vì giá cổ phiếu phản ánh dòng tiền tương lai nhiều hơn quá khứ.',
    'Chất lượng lợi nhuận quan trọng: lợi nhuận tăng nhờ khoản thu bất thường, hoàn nhập dự phòng hay bán tài sản khác với lợi nhuận từ hoạt động cốt lõi.',
    'Ở Việt Nam, doanh nghiệp niêm yết công bố báo cáo tài chính quý theo quy định của Ủy ban Chứng khoán Nhà nước; nhiều doanh nghiệp không công bố guidance chính thức nên kỳ vọng hình thành từ kế hoạch kinh doanh đã thông qua tại đại hội cổ đông và dự báo của công ty chứng khoán.',
  ],
  causalChain: [
    { from: 'Chuyên viên phân tích dự báo lợi nhuận, công ty đưa guidance', to: 'Giá cổ phiếu phản ánh kỳ vọng trước mùa báo cáo', mechanism: 'Nhà đầu tư mua bán dựa trên dự báo nên phần "dự kiến" đã nằm trong giá.' },
    { from: 'Công bố kết quả thực tế', to: 'Chênh lệch giữa thực tế và kỳ vọng (surprise)', mechanism: 'Chênh lệch dương hoặc âm so với consensus buộc nhà đầu tư cập nhật lại giá trị hợp lý.' },
    { from: 'Chênh lệch và guidance mới', to: 'Điều chỉnh dự báo và giá cổ phiếu', mechanism: 'Chuyên viên phân tích sửa dự báo các kỳ tới; giá phản ứng theo thay đổi dòng tiền kỳ vọng.' },
    { from: 'Doanh nghiệp tối ưu hóa số liệu để đạt kỳ vọng', to: 'Rủi ro chất lượng lợi nhuận', mechanism: 'Áp lực "đạt consensus" có thể khuyến khích quản trị lợi nhuận qua dự phòng, ghi nhận doanh thu hay khoản bất thường.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cổ phiếu', effect: 'Cần so sánh kết quả thực tế với kế hoạch năm và kỳ vọng thị trường, không chỉ tăng trưởng so với cùng kỳ.', direction: 'mixed' },
    { group: 'Doanh nghiệp niêm yết', effect: 'Công bố thông tin rõ ràng, nhất quán giúp thị trường định giá sát; công bố thất thường tạo biến động mạnh quanh ngày báo cáo.', direction: 'mixed' },
    { group: 'Nhà đầu tư cá nhân giao dịch ngắn hạn', effect: 'Đặt cược theo mùa báo cáo thường bất lợi vì kỳ vọng đã nằm trong giá và biến động quanh ngày công bố lớn.', direction: 'down' },
    { group: 'Công ty chứng khoán, chuyên viên phân tích', effect: 'Dự báo càng minh bạch, có giả định rõ ràng thì giúp nhà đầu tư kiểm tra được sai số.', direction: 'up' },
  ],
  indicators: [
    { name: 'Lợi nhuận thực tế so với kế hoạch năm và dự báo của công ty chứng khoán', why: 'Đo chênh lệch với kỳ vọng.', where: 'Báo cáo tài chính quý; báo cáo phân tích của các công ty chứng khoán' },
    { name: 'Biên lợi nhuận gộp, lợi nhuận hoạt động cốt lõi', why: 'Kiểm tra chất lượng lợi nhuận.', where: 'Báo cáo kết quả kinh doanh và thuyết minh' },
    { name: 'Lợi nhuận bất thường (hoàn nhập dự phòng, bán tài sản, lãi tỷ giá)', why: 'Loại bỏ yếu tố một lần.', where: 'Thuyết minh báo cáo tài chính' },
    { name: 'Thay đổi dự báo lợi nhuận các kỳ tới sau mùa báo cáo', why: 'Phản ánh triển vọng do thị trường cập nhật.', where: 'Báo cáo cập nhật của các công ty chứng khoán' },
  ],
  counterpoints: [
    'Đôi khi thị trường phản ứng theo cảm xúc hoặc dòng tiền ngắn hạn chứ không theo chênh lệch kỳ vọng; "beat" vẫn có thể bị bán nếu cổ phiếu đã tăng mạnh trước đó.',
    'Ở thị trường ít chuyên viên phân tích như Việt Nam, consensus mỏng và không đáng tin như ở thị trường lớn; kỳ vọng đa dạng và khó đo.',
    'Guidance có thể bị bảo thủ cố ý để dễ vượt; "beat" liên tục chưa chắc phản ánh tăng trưởng mạnh mà là kỳ vọng được hạ thấp.',
  ],
  glossary: [
    { term: 'Earnings guidance', definition: 'Dự báo lợi nhuận tương lai gần do chính doanh nghiệp công bố.' },
    { term: 'Consensus', definition: 'Mức dự báo trung bình của giới phân tích cho một chỉ tiêu.' },
    { term: 'Beat / Miss', definition: 'Kết quả thực tế vượt hoặc thấp hơn consensus.' },
    { term: 'Chất lượng lợi nhuận', definition: 'Mức độ lợi nhuận đến từ hoạt động cốt lõi, bền vững và có dòng tiền hỗ trợ.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'earnings-season-guidance-expectations-q',
    question: 'Công ty báo lợi nhuận quý tăng 25% so với cùng kỳ, vượt consensus 5%, nhưng hạ dự báo quý sau. Giá cổ phiếu giảm. Giải thích nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Thị trường vô lý vì lợi nhuận đã tăng mạnh.', explain: 'Giá phản ánh dòng tiền tương lai; hạ dự báo làm giá trị hợp lý thấp đi dù quá khứ tốt.' },
      { id: 'b', text: 'Triển vọng bị hạ làm nhà đầu tư điều chỉnh giá trị kỳ vọng xuống, lớn hơn lợi ích của kết quả vượt kỳ vọng.', correct: true, explain: 'Đúng. Giá quan tâm kỳ vọng tương lai; guidance yếu hơn có thể lấn át việc vượt consensus của quý vừa qua.' },
      { id: 'c', text: 'Chắc chắn công ty gian lận số liệu.', explain: 'Không có bằng chứng; phản ứng giá thông thường do kỳ vọng thay đổi.' },
    ],
  },
  sources: [
    { title: 'Earnings guidance', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Earnings_guidance' },
    { title: 'Efficient-market hypothesis', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Efficient-market_hypothesis' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 52,
}
