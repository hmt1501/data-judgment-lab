import type { Explainer } from '../../../shared/explainer'

export const peValuation: Explainer = {
  id: 'pe-valuation',
  slug: 'pe-valuation',
  question: 'P/E là gì và dùng P/E để định giá cổ phiếu thế nào cho đúng?',
  title: 'P/E và định giá cổ phiếu: rẻ hay đắt so với cái gì?',
  topic: 'markets-investing',
  tldr: '**P/E = Giá cổ phiếu ÷ Lợi nhuận trên mỗi cổ phiếu (EPS)**: nhà đầu tư đang trả bao nhiêu đồng cho mỗi đồng lợi nhuận. P/E chỉ có ý nghĩa khi **so sánh** đúng: cùng ngành, cùng doanh nghiệp qua thời gian, và gắn với triển vọng tăng trưởng, rủi ro, lãi suất. P/E thấp có thể là cơ hội, nhưng cũng có thể là "bẫy giá trị" khi lợi nhuận sắp giảm hoặc chất lượng lợi nhuận kém.',
  keyPoints: [
    '**Trailing P/E** dùng EPS 12 tháng gần nhất (số thật, nhưng nhìn về quá khứ); **forward P/E** dùng EPS dự phóng (nhìn về tương lai, nhưng phụ thuộc giả định của người dự báo).',
    'So sánh P/E **trong cùng ngành**: ngân hàng, bất động sản, công nghệ, bán lẻ có cấu trúc lợi nhuận và tốc độ tăng trưởng khác nhau nên mặt bằng P/E khác nhau.',
    'P/E thấp chưa chắc rẻ: lợi nhuận có thể đang ở đỉnh chu kỳ, có khoản thu nhập bất thường (bán tài sản, hoàn nhập dự phòng), hoặc doanh nghiệp có rủi ro mà thị trường đã nhìn thấy.',
    'P/E cao chưa chắc đắt: nếu lợi nhuận tăng nhanh và bền, P/E hiện tại cao có thể giảm nhanh khi EPS tăng. Tỷ số **PEG** (P/E ÷ tốc độ tăng EPS) là một cách điều chỉnh thô.',
    'P/E của cả **VN-Index** là bình quân gia quyền theo vốn hóa, có thể bị vài nhóm cổ phiếu lớn kéo lệch; nó cho biết mặt bằng định giá chung, không cho biết từng cổ phiếu rẻ hay đắt. Đây không phải khuyến nghị đầu tư.',
  ],
  causalChain: [
    { from: 'Lợi nhuận kỳ vọng của doanh nghiệp tăng', to: 'Nhà đầu tư sẵn sàng trả giá cao hơn', mechanism: 'Giá cổ phiếu phản ánh giá trị hiện tại của dòng lợi nhuận/cổ tức tương lai; kỳ vọng tăng trưởng cao làm P/E chấp nhận được cao hơn.' },
    { from: 'Lãi suất trong nước tăng', to: 'P/E chung của thị trường có xu hướng giảm', mechanism: 'Lãi suất chiết khấu cao hơn làm giá trị hiện tại của lợi nhuận tương lai giảm; tiền gửi, trái phiếu trở nên cạnh tranh hơn với cổ phiếu.' },
    { from: 'Rủi ro doanh nghiệp/ngành tăng (nợ vay, pháp lý, chu kỳ)', to: 'Thị trường đòi phần bù rủi ro cao hơn → P/E thấp', mechanism: 'Nhà đầu tư chỉ mua khi được trả giá rẻ hơn để bù cho khả năng lợi nhuận sụt giảm.' },
    { from: 'Lợi nhuận chu kỳ đạt đỉnh (thép, chứng khoán, BĐS…)', to: 'P/E trông rất thấp đúng lúc rủi ro cao', mechanism: 'EPS ở đỉnh làm mẫu số lớn; khi chu kỳ đảo chiều, EPS giảm mạnh và P/E "thật" tăng vọt dù giá không đổi.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân', effect: 'Dễ mắc sai lầm khi so P/E giữa các ngành khác nhau hoặc dùng EPS có lợi nhuận bất thường; cần đọc thuyết minh báo cáo tài chính.', direction: 'mixed' },
    { group: 'Doanh nghiệp niêm yết', effect: 'P/E cao giúp huy động vốn qua phát hành cổ phiếu rẻ hơn (ít pha loãng hơn cho cùng số tiền); P/E thấp khiến phát hành thêm bất lợi.', direction: 'mixed' },
    { group: 'Ngân hàng niêm yết', effect: 'Nhà đầu tư thường dùng thêm P/B và chất lượng tài sản (nợ xấu, bao phủ nợ xấu) vì lợi nhuận ngân hàng nhạy với trích lập dự phòng.', direction: 'mixed' },
    { group: 'Quỹ đầu tư và khối ngoại', effect: 'So sánh P/E VN-Index với các thị trường khu vực khi quyết định phân bổ; mặt bằng định giá thấp hơn có thể thu hút vốn nếu tăng trưởng lợi nhuận đáng tin.', direction: 'up' },
  ],
  indicators: [
    { name: 'EPS 4 quý gần nhất và thuyết minh lợi nhuận bất thường', why: 'Kiểm tra mẫu số của P/E có "sạch" không (thu nhập khác, hoàn nhập dự phòng, lãi bán công ty con).', where: 'Báo cáo tài chính quý/năm trên website doanh nghiệp, HOSE/HNX' },
    { name: 'P/E trung bình ngành và lịch sử P/E của chính doanh nghiệp', why: 'Có điểm tham chiếu để biết đắt/rẻ tương đối.', where: 'Báo cáo phân tích của công ty chứng khoán, các nền tảng dữ liệu thị trường' },
    { name: 'P/E VN-Index (trailing và forward), có và không có các nhóm vốn hóa lớn', why: 'Mặt bằng định giá chung; tách nhóm lớn để thấy độ lệch.', where: 'Báo cáo chiến lược của công ty chứng khoán, báo cáo quỹ; dữ liệu HOSE' },
    { name: 'Lãi suất tiền gửi kỳ hạn 12 tháng và lợi suất trái phiếu Chính phủ 10 năm', why: 'Lợi suất lợi nhuận (E/P = 1/P/E) nên được so với lãi suất phi rủi ro.', where: 'Website NHNN, ngân hàng thương mại, HNX (thị trường trái phiếu Chính phủ)' },
  ],
  counterpoints: [
    'P/E không dùng được khi doanh nghiệp lỗ hoặc lợi nhuận quá nhỏ; khi đó cần P/B, EV/EBITDA, P/S hoặc định giá dòng tiền chiết khấu.',
    'Lợi nhuận kế toán khác dòng tiền: doanh nghiệp có lợi nhuận nhưng dòng tiền kinh doanh âm kéo dài thì P/E thấp có thể gây hiểu lầm.',
    'Forward P/E phụ thuộc dự báo; các dự báo lợi nhuận của thị trường thường bị điều chỉnh khi điều kiện vĩ mô thay đổi.',
    'Ví dụ báo chí tháng 6/2026: quỹ PYN Elite cho rằng P/E dự phóng VN-Index **loại trừ nhóm Vingroup** chỉ khoảng 9,2 lần, cho thấy P/E toàn thị trường có thể bị vài cổ phiếu lớn kéo lệch đáng kể — cần hỏi "P/E của rổ nào, EPS năm nào".',
  ],
  glossary: [
    { term: 'EPS', definition: 'Lợi nhuận sau thuế thuộc cổ đông công ty mẹ chia cho số cổ phiếu đang lưu hành bình quân.' },
    { term: 'Trailing P/E', definition: 'P/E tính bằng EPS 12 tháng (4 quý) gần nhất.' },
    { term: 'Forward P/E', definition: 'P/E tính bằng EPS dự phóng cho 12 tháng hoặc năm tài chính tới.' },
    { term: 'PEG', definition: 'P/E chia cho tốc độ tăng trưởng EPS (%), dùng để so sánh doanh nghiệp tăng trưởng nhanh/chậm.' },
    { term: 'Bẫy giá trị (value trap)', definition: 'Cổ phiếu trông rẻ theo chỉ số định giá nhưng rẻ vì nền tảng đang xấu đi.' },
    { term: 'Lợi suất lợi nhuận (E/P)', definition: 'Nghịch đảo của P/E; ví dụ P/E 12,5 tương đương lợi suất lợi nhuận 8%.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'pe-valuation-q',
    question: 'Một công ty thép có P/E trailing 5 lần, thấp hơn nhiều so với trung bình thị trường, sau một năm giá thép tăng mạnh. Cách đánh giá hợp lý nhất?',
    options: [
      { id: 'a', text: 'Rõ ràng là rẻ, nên mua ngay vì P/E chỉ bằng nửa thị trường.', explain: 'Với ngành chu kỳ, EPS ở đỉnh làm P/E trông thấp. Nếu giá thép giảm, lợi nhuận có thể giảm mạnh và P/E thực tế tăng vọt. P/E thấp không tự động là rẻ.' },
      { id: 'b', text: 'Kiểm tra lợi nhuận đang ở đâu trong chu kỳ, lợi nhuận bất thường, dòng tiền và nợ vay, rồi so với P/E chu kỳ trước của doanh nghiệp cùng ngành.', correct: true, explain: 'Đúng. Với doanh nghiệp chu kỳ, cần nhìn lợi nhuận "bình thường hóa" qua cả chu kỳ, chất lượng lợi nhuận và bảng cân đối, thay vì một con số P/E tại đỉnh.' },
      { id: 'c', text: 'P/E thấp nghĩa là doanh nghiệp sắp phá sản, nên tránh.', explain: 'Quá cực đoan. P/E thấp phản ánh kỳ vọng thận trọng của thị trường, có thể đúng hoặc sai; cần phân tích thêm chứ không kết luận chỉ từ P/E.' },
    ],
  },
  sources: [
    { title: 'Price-earnings (P/E) Ratio', publisher: 'Investor.gov (SEC)', url: 'https://www.investor.gov/introduction-investing/investing-basics/glossary/price-earnings-pe-ratio' },
    { title: 'Stocks – FAQs', publisher: 'Investor.gov (SEC)', url: 'https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks' },
    { title: 'Pyn Elite Fund: Định giá VN-Index ngoại trừ nhóm Vingroup đang là 9,2 lần', publisher: 'VnEconomy', url: 'https://vneconomy.vn/pyn-elite-fund-dinh-gia-vn-index-ngoai-tru-nhom-vingroup-dang-la-92-lan-muc-thap-ky-luc-nhieu-nam.htm' },
    { title: 'Sở Giao dịch Chứng khoán TP.HCM', publisher: 'HOSE', url: 'https://www.hsx.vn' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
