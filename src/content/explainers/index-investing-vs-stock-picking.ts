import type { Explainer } from '../../../shared/explainer'

export const indexInvestingVsStockPicking: Explainer = {
  id: 'index-investing-vs-stock-picking',
  slug: 'index-investing-vs-stock-picking',
  question: 'Đầu tư chỉ số hay tự chọn cổ phiếu?',
  title: 'Chỉ số rẻ, đa dạng và ít tốn công; chọn cổ phiếu cần lợi thế thật để bù chi phí',
  topic: 'markets-investing',
  tldr: '**Đầu tư chỉ số** là mua quỹ hoặc ETF mô phỏng một chỉ số (như VN30), nhận lợi suất thị trường trừ phí thấp. **Chọn cổ phiếu** là cố gắng vượt thị trường bằng phân tích; muốn thắng bền vững cần có lợi thế thông tin hoặc kỷ luật thật và phải bù chi phí giao dịch, thuế, thời gian. Với đa số cá nhân, chỉ số là điểm xuất phát hợp lý; chọn cổ phiếu có thể đóng vai trò phần nhỏ nếu hiểu rõ rủi ro.',
  keyPoints: [
    'Theo SEC (Investor.gov), quỹ chỉ số hay quỹ quản lý thụ động nhắm đạt lợi suất xấp xỉ một chỉ số trước phí; thụ động thường nghĩa là ít giao dịch hơn, hệ quả thuế thuận lợi hơn và phí thấp hơn quỹ chủ động.',
    'Chỉ số đa dạng hóa tự động qua hàng chục đến hàng trăm cổ phiếu, giảm rủi ro một cổ phiếu hỏng làm thiệt hại lớn; chọn cổ phiếu tập trung hơn nên biên độ kết quả rộng hơn, cả hai chiều.',
    'Chỉ số có thể không đồng nghĩa "an toàn": VN30 trọng số theo vốn hóa điều chỉnh free-float nên bị chi phối bởi các cổ phiếu vốn hóa lớn; mua chỉ số vẫn chịu rủi ro thị trường và rủi ro tập trung ngành.',
    'Giả thuyết thị trường hiệu quả cho rằng giá đã phản ánh thông tin công khai nên rất khó vượt thị trường đều đặn sau chi phí; nhiều nghiên cứu ở các thị trường phát triển (như báo cáo SPIVA) cho kết quả phần lớn quỹ chủ động không vượt chỉ số trong dài hạn; bài này chưa dẫn số liệu cụ thể và chưa có số liệu tương ứng cho Việt Nam.',
    'Theo nhận định phổ biến (chưa có số liệu trong bài), thị trường Việt Nam có nhiều nhà đầu tư cá nhân và độ phủ phân tích thấp hơn ở nhiều doanh nghiệp, nên cơ hội chọn cổ phiếu có thể nhiều hơn, nhưng rủi ro thông tin, thanh khoản và giao dịch theo tin đồn cũng cao hơn.',
  ],
  causalChain: [
    { from: 'Chọn quỹ chỉ số phí thấp', to: 'Giữ lại nhiều lợi suất thị trường hơn', mechanism: 'Phí quản lý và chi phí giao dịch thấp; lợi suất ròng sát chỉ số trừ sai số bám sát.' },
    { from: 'Chọn cổ phiếu riêng lẻ', to: 'Kết quả phụ thuộc kỹ năng, may rủi, chi phí', mechanism: 'Lợi suất vượt trội đòi hỏi nhận định đúng hơn đám đông; sai lầm tập trung vào ít mã, kèm phí giao dịch, thuế, làm kết quả lệch xa chỉ số.' },
    { from: 'Hành vi giao dịch quá nhiều, đuổi theo thị trường', to: 'Lợi suất thực tế thấp hơn lợi suất tài sản', mechanism: 'Mua đỉnh bán đáy do tâm lý làm nhà đầu tư thu được ít hơn chính tài sản họ đầu tư.' },
    { from: 'Đầu tư đều đặn vào chỉ số trong nhiều năm', to: 'Lãi kép phát huy', mechanism: 'Thời gian và đóng góp đều đặn tạo hiệu ứng cộng dồn, ít phụ thuộc vào việc chọn đúng điểm vào.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân mới', effect: 'Quỹ chỉ số hoặc ETF mô phỏng VN30 giúp tham gia thị trường mà không cần phân tích từng mã, nhưng cần kiểm phí quản lý và sai số bám sát.', direction: 'up' },
    { group: 'Nhà đầu tư có kiến thức ngành', effect: 'Có thể tìm cơ hội ở doanh nghiệp ít người theo dõi, nhưng phải chịu rủi ro thanh khoản và quản trị.', direction: 'mixed' },
    { group: 'Nhà đầu tư dựa tin đồn, margin', effect: 'Chọn cổ phiếu theo tin đồn kèm đòn bẩy làm kết quả biến động mạnh và dễ thua lỗ lớn.', direction: 'down' },
    { group: 'Quỹ chủ động', effect: 'Phải chứng minh giá trị cộng thêm sau phí so với chỉ số tham chiếu.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ lệ chi phí quỹ (expense ratio) và phí giao dịch', why: 'Phí thấp là lợi thế chắc chắn của đầu tư chỉ số.', where: 'Bản cáo bạch quỹ; công ty quản lý quỹ' },
    { name: 'Sai số bám sát (tracking error) của quỹ chỉ số', why: 'Cho biết quỹ mô phỏng chỉ số tốt đến đâu.', where: 'Báo cáo định kỳ của quỹ ETF' },
    { name: 'Tỷ trọng top 10 cổ phiếu trong chỉ số', why: 'Đo mức độ tập trung của chỉ số.', where: 'Bảng thông tin chỉ số của HOSE' },
    { name: 'Hiệu suất quỹ chủ động so với chỉ số tham chiếu qua 5–10 năm', why: 'Đánh giá liệu phí chủ động có xứng đáng không.', where: 'Báo cáo quỹ; Hiệp hội thị trường trái phiếu và quỹ' },
  ],
  counterpoints: [
    'Khi chỉ số tập trung vào vài cổ phiếu lớn (ngân hàng, bất động sản), mua chỉ số không đa dạng như tưởng; chỉ số theo vốn hóa còn mua nhiều hơn khi giá đã tăng.',
    'Một số nhà đầu tư có lợi thế thật (kiến thức ngành, kỷ luật dài hạn, thông tin công khai được phân tích kỹ) có thể vượt chỉ số, đặc biệt ở thị trường nhỏ và kém phủ sóng.',
    'Đầu tư chỉ số không bảo vệ khỏi sụt giảm lớn của cả thị trường; người cần vốn trong ngắn hạn vẫn chịu rủi ro.',
  ],
  glossary: [
    { term: 'Quỹ chỉ số', definition: 'Quỹ mô phỏng một chỉ số chứng khoán, thường là quản lý thụ động.' },
    { term: 'Quản lý chủ động', definition: 'Chiến lược chọn mã, định thời điểm nhằm vượt chỉ số tham chiếu.' },
    { term: 'Tracking error', definition: 'Độ chênh lệch giữa lợi suất quỹ và chỉ số tham chiếu.' },
    { term: 'Giả thuyết thị trường hiệu quả', definition: 'Giá phản ánh thông tin sẵn có nên khó vượt thị trường đều đặn.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'index-investing-vs-stock-picking-q',
    question: 'Một nhà đầu tư nói: "Tôi tự chọn cổ phiếu vì quỹ chỉ số chắc chắn thua tôi." Điều gì cần kiểm tra trước nhất?',
    options: [
      { id: 'a', text: 'Đã trừ phí, thuế, chi phí giao dịch và so với chỉ số tham chiếu trong nhiều năm chưa?', correct: true, explain: 'Đúng. Chỉ khi so sánh lợi suất ròng, cùng rủi ro và cùng thời gian, mới biết có vượt thật; một vài năm đẹp dễ do may mắn.' },
      { id: 'b', text: 'Có đang dùng đòn bẩy không, vì đòn bẩy luôn làm tăng lợi suất.', explain: 'Đòn bẩy làm tăng cả lãi lẫn lỗ; nó không chứng minh kỹ năng.' },
      { id: 'c', text: 'Chỉ cần xem lãi tháng vừa rồi.', explain: 'Một tháng quá ngắn để kết luận về kỹ năng.' },
    ],
  },
  sources: [
    { title: 'Passive Fund or Passively Managed Fund', publisher: 'U.S. SEC, Investor.gov', url: 'https://www.investor.gov/introduction-investing/investing-basics/glossary/passive-fund-passively-managed-fund' },
    { title: 'Index Funds', publisher: 'U.S. SEC, Investor.gov', url: 'https://www.investor.gov/introduction-investing/investing-basics/investment-products/mutual-funds-and-exchange-traded-4' },
    { title: 'HOSE-Index factsheet (VN30: free-float adjusted, market-cap weighted)', publisher: 'Sở Giao dịch Chứng khoán TP.HCM (HOSE)', url: 'https://static2.vietstock.vn/vietstock/2025/2/12/20250212_form_factsheet_mcindices_eng_t02_2025.pdf' },
    { title: 'Index fund', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Index_fund' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 50,
}
