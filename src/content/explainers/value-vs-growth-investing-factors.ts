import type { Explainer } from '../../../shared/explainer'

export const valueVsGrowthInvestingFactors: Explainer = {
  id: 'value-vs-growth-investing-factors',
  slug: 'value-vs-growth-investing-factors',
  question: 'Đầu tư giá trị và đầu tư tăng trưởng khác nhau thế nào, và yếu tố "giá trị" có luôn thắng không?',
  title: 'Đầu tư giá trị và tăng trưởng: yếu tố, chu kỳ và cạm bẫy',
  topic: 'markets-investing',
  tldr: 'Cổ phiếu **giá trị** là cổ phiếu có giá thấp so với tài sản, lợi nhuận hay cổ tức (P/B, P/E thấp); cổ phiếu **tăng trưởng** có giá cao nhưng được kỳ vọng lợi nhuận tăng nhanh. Nghiên cứu của Fama–French ghi nhận phần bù lợi suất dương cho cổ phiếu có book-to-market cao; theo Wikipedia, cổ phiếu giá trị thường vượt trội trong thời gian dài nhưng không phải lúc nào cũng thắng (ví dụ cuối thập niên 1990), và một số nhà phê bình cho rằng phần bù phản ánh rủi ro cao hơn chứ không phải thị trường sai giá. Rẻ không đồng nghĩa với đáng mua.',
  keyPoints: [
    'Wikipedia: đầu tư giá trị là mua chứng khoán có vẻ bị định giá thấp dựa trên phân tích cơ bản; Graham gọi chênh lệch giữa giá và giá trị nội tại là "biên an toàn".',
    'Mô hình ba yếu tố của Fama–French (1992) thêm vào CAPM yếu tố **kích cỡ (SMB)** và **giá trị (HML: sổ sách/thị giá cao trừ thấp)**; Kenneth French công bố dữ liệu các yếu tố này và các danh mục theo book-to-market và theo tỷ suất cổ tức trong thư viện dữ liệu của ông.',
    'Theo Wikipedia, trên dữ liệu Mỹ 1963–2013, mô hình năm yếu tố (thêm lợi nhuận và đầu tư) làm HML trở nên dư thừa; trang này cũng ghi mô hình định giá tài sản tốt nhất vẫn còn tranh luận, và yếu tố động lượng được thêm ở mô hình Carhart chứ không có trong ba/năm yếu tố. Wikipedia (trang Value investing) cũng ghi một số nhà phê bình cho rằng phần bù giá trị có thể phản ánh rủi ro cao hơn thay vì thị trường kém hiệu quả.',
    'Chỉ số P/B hoặc P/E thấp có thể phản ánh doanh nghiệp suy giảm thật ("bẫy giá trị"): giá thấp thường phản ánh sức khỏe tài chính xấu đi; P/B kém ý nghĩa với doanh nghiệp nhiều tài sản vô hình.',
    'Wikipedia ghi nhận cổ phiếu giá trị kém hơn tăng trưởng trong cuối thập niên 1990; vì vậy chênh lệch lợi suất là trung bình dài hạn, không phải đảm bảo từng năm.',
  ],
  causalChain: [
    { from: 'Thị trường kỳ vọng doanh nghiệp suy yếu hoặc rủi ro cao', to: 'Giá thấp so với tài sản và lợi nhuận hiện tại (cổ phiếu giá trị)', mechanism: 'Giá cổ phiếu đã chiết khấu kỳ vọng xấu; chỉ số P/B, P/E thấp là kết quả, không phải nguyên nhân.' },
    { from: 'Cổ phiếu giá trị mua ở giá thấp', to: 'Lợi suất kỳ vọng cao hơn nếu kỳ vọng xấu quá mức hoặc nếu bù đắp cho rủi ro', mechanism: 'Hai cách giải thích: thị trường định giá sai (hành vi) hoặc nhà đầu tư đòi phần bù vì rủi ro cao hơn (cấu trúc rủi ro); học thuật chưa thống nhất.' },
    { from: 'Lãi suất, công nghệ, chu kỳ kinh tế thay đổi', to: 'Giá trị và tăng trưởng luân phiên dẫn đầu', mechanism: 'Tăng trưởng nhạy với lãi suất dài hạn (lợi nhuận ở xa); giá trị thường gắn với ngành chu kỳ nên nhạy với chu kỳ kinh tế.' },
    { from: 'Chọn cổ phiếu chỉ vì rẻ', to: 'Dính bẫy giá trị', mechanism: 'Giá thấp do doanh nghiệp suy giảm thật thì mua rẻ vẫn mất tiền; cần xem chất lượng, nợ, dòng tiền.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân Việt Nam', effect: 'Chọn cổ phiếu P/E hoặc P/B thấp mà bỏ qua chất lượng doanh nghiệp, nợ và quản trị dễ dính bẫy giá trị.', direction: 'down' },
    { group: 'Quỹ cổ phiếu và nhà đầu tư dài hạn', effect: 'Phối hợp phong cách giá trị và tăng trưởng giúp đa dạng nguồn lợi suất qua các chu kỳ.', direction: 'up' },
    { group: 'Nhà đầu tư nhóm ngân hàng, bất động sản, nguyên vật liệu', effect: 'Những nhóm này thường có P/B thấp và chu kỳ mạnh; "rẻ" có thể phản ánh rủi ro chu kỳ chứ không phải cơ hội chắc chắn.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'P/B, P/E, EV/EBITDA so với trung bình ngành và lịch sử', why: 'Đo mức "rẻ" tương đối, cần đọc cùng chất lượng doanh nghiệp.', where: 'Báo cáo tài chính, các nền tảng dữ liệu chứng khoán' },
    { name: 'ROE, biên lợi nhuận, dòng tiền tự do', why: 'Phân biệt cổ phiếu rẻ thật với bẫy giá trị.', where: 'Báo cáo tài chính doanh nghiệp' },
    { name: 'Lợi suất trái phiếu dài hạn', why: 'Ảnh hưởng đến định giá cổ phiếu tăng trưởng nhiều hơn.', where: 'HNX, Kho bạc Nhà nước, Bộ Tài chính' },
    { name: 'Dữ liệu yếu tố HML và danh mục theo book-to-market', why: 'Kiểm tra lịch sử giai đoạn giá trị thắng/thua.', where: 'Kenneth French Data Library (Dartmouth)' },
  ],
  counterpoints: [
    'Không có đảm bảo giá trị luôn thắng: có những thập kỷ giá trị kém hơn tăng trưởng, và nguyên nhân có thể là doanh nghiệp giá trị chịu cạnh tranh từ công nghệ.',
    'Định nghĩa "giá trị" phụ thuộc chỉ số bạn chọn (P/B, P/E, cổ tức); cùng một cổ phiếu có thể "rẻ" theo chỉ số này nhưng "đắt" theo chỉ số khác.',
    'Bằng chứng chủ yếu từ dữ liệu Mỹ; Theo Wikipedia, ở thị trường mới nổi yếu tố giá trị (book-to-market) vẫn có sức giải thích còn yếu tố kích cỡ thì kém, nên đừng áp máy móc cho thị trường Việt Nam.',
  ],
  glossary: [
    { term: 'Cổ phiếu giá trị', definition: 'Cổ phiếu có giá thấp so với giá trị sổ sách, lợi nhuận hoặc cổ tức.' },
    { term: 'Cổ phiếu tăng trưởng', definition: 'Cổ phiếu được kỳ vọng tăng trưởng lợi nhuận nhanh nên thường có định giá cao.' },
    { term: 'HML', definition: 'Yếu tố giá trị trong mô hình Fama–French: lợi suất danh mục book-to-market cao trừ thấp.' },
    { term: 'Biên an toàn', definition: 'Khoảng cách giữa giá mua và giá trị nội tại ước tính, dùng làm đệm cho sai sót.' },
    { term: 'Bẫy giá trị', definition: 'Cổ phiếu trông rẻ nhưng rẻ vì doanh nghiệp xấu đi thật.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'value-vs-growth-investing-factors-q',
    question: 'Một cổ phiếu có P/B 0,6 và P/E 5 trong khi doanh thu và lợi nhuận giảm liên tục, nợ tăng. Nhận định nào hợp lý?',
    options: [
      { id: 'a', text: 'Chắc chắn là cơ hội giá trị vì chỉ số thấp.', explain: 'Sai. Chỉ số thấp có thể phản ánh suy giảm thật.' },
      { id: 'b', text: 'Có nguy cơ là bẫy giá trị: cần xem vì sao rẻ, chất lượng tài sản và dòng tiền trước khi kết luận.', correct: true, explain: 'Đúng. Giá thấp thường phản ánh sức khỏe tài chính kém; chỉ số rẻ không thay thế phân tích chất lượng.' },
      { id: 'c', text: 'Nên bỏ qua vì cổ phiếu giá trị luôn kém.', explain: 'Sai. Nghiên cứu cho thấy giá trị thường có lợi suất trung bình cao hơn, chỉ là không đảm bảo từng cổ phiếu.' },
    ],
  },
  sources: [
    { title: 'Value investing', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Value_investing' },
    { title: 'Fama–French three-factor model', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Fama%E2%80%93French_three-factor_model' },
    { title: 'Data Library (Kenneth R. French)', publisher: 'Tuck School of Business, Dartmouth', url: 'https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 170,
}
