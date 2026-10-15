import type { Explainer } from '../../../shared/explainer'

export const dividendIncomeInvestingRisks: Explainer = {
  id: 'dividend-income-investing-risks',
  slug: 'dividend-income-investing-risks',
  question: 'Đầu tư cổ tức có rủi ro gì, và "bẫy lợi suất cao" là gì?',
  title: 'Đầu tư cổ tức: vì sao lợi suất cao có thể là cái bẫy',
  topic: 'markets-investing',
  tldr: 'Tỷ suất cổ tức = cổ tức mỗi cổ phiếu chia cho giá. Giá cổ phiếu **giảm** làm tỷ suất **tăng** mà không cần doanh nghiệp trả thêm đồng nào, nên lợi suất cao thường là tín hiệu của rủi ro, không phải của sự hào phóng. Morningstar (30/07/2025) cho thấy công ty có tỷ lệ chi trả cao hay cắt cổ tức nhất. Cổ tức tốt cần được đo bằng khả năng chi trả từ dòng tiền, không chỉ bằng con số hôm nay.',
  keyPoints: [
    'Tỷ suất cổ tức = cổ tức/giá. Ví dụ giả định: cổ tức 5.000 đồng/cổ phiếu, giá 100.000 đồng → 5%; nếu giá rơi còn 50.000 đồng mà cổ tức chưa kịp cắt → 10%. Con số "đẹp" hơn nhưng rủi ro đã tăng.',
    'Theo Morningstar Indexes (30/07/2025): trong 20 năm, các công ty có **tỷ lệ chi trả** cao nhất là những công ty hay cắt cổ tức nhất; ví dụ Walgreens cuối 2023 chi trả khoảng 291% lợi nhuận, tức trả gần gấp ba lợi nhuận kiếm được.',
    'Cũng theo Morningstar: công ty có lợi thế cạnh tranh bền (moat rộng) cắt cổ tức ít hơn, và chỉ số "khoảng cách tới vỡ nợ" tốt hơn đồng nghĩa khả năng giữ cổ tức cao hơn; lịch sử chi trả dài không đảm bảo (3M cắt cổ tức năm 2024 sau 67 năm chi trả, theo bài đó).',
    'Cắt cổ tức thường làm hại hai lần: nguồn thu nhập giảm và giá cổ phiếu giảm theo.',
    'Wikipedia (Value investing) lưu ý các bộ lọc ngây thơ như chỉ chọn lợi suất cổ tức cao có thể dồn vào doanh nghiệp đang suy giảm.',
  ],
  causalChain: [
    { from: 'Giá cổ phiếu giảm vì lo doanh nghiệp suy yếu', to: 'Tỷ suất cổ tức nhìn thấy tăng lên', mechanism: 'Mẫu số (giá) giảm trong khi tử số (cổ tức cũ) chưa đổi, nên con số "lợi suất" cao lên dù tình hình xấu đi.' },
    { from: 'Chi trả vượt lợi nhuận hoặc dòng tiền tự do', to: 'Không bền', mechanism: 'Phần chi vượt phải bù bằng vay nợ, bán tài sản hoặc phát hành thêm cổ phiếu; đến lúc nào đó phải cắt cổ tức.' },
    { from: 'Cổ tức bị cắt hoặc hoãn', to: 'Giá giảm và thu nhập của nhà đầu tư giảm', mechanism: 'Thị trường đọc việc cắt cổ tức là dấu hiệu sức khỏe tài chính kém, nên bán ra; người sống bằng cổ tức mất nguồn thu nhập.' },
    { from: 'Doanh nghiệp có dòng tiền ổn định và lợi thế cạnh tranh', to: 'Cổ tức bền hơn', mechanism: 'Dòng tiền dự báo được cho phép duy trì và tăng dần cổ tức mà không cần vay.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân tìm thu nhập thụ động', effect: 'Lợi suất cổ tức cao có thể thu hút nhưng cần xem doanh nghiệp trả bằng tiền mặt hay cổ phiếu, và dòng tiền có đủ không.', direction: 'mixed' },
    { group: 'Người hưu trí sống nhờ cổ tức', effect: 'Phụ thuộc vào một vài cổ phiếu rủi ro tập trung; cắt cổ tức làm thu nhập giảm đột ngột.', direction: 'down' },
    { group: 'Cổ đông doanh nghiệp chia bằng cổ phiếu', effect: 'Cổ tức bằng cổ phiếu không đưa tiền về túi, mà làm tăng số cổ phiếu và pha loãng; cần phân biệt với cổ tức tiền mặt.', direction: 'mixed' },
    { group: 'Quỹ đầu tư thu nhập', effect: 'Cần lọc theo khả năng chi trả thay vì chỉ theo lợi suất.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ lệ chi trả cổ tức (cổ tức/lợi nhuận)', why: 'Trên 100% nghĩa là chi trả vượt lợi nhuận, khó bền.', where: 'Báo cáo tài chính doanh nghiệp' },
    { name: 'Dòng tiền tự do so với cổ tức', why: 'Tiền mặt thực tế mới trả được cổ tức, lợi nhuận kế toán có thể khác dòng tiền.', where: 'Báo cáo lưu chuyển tiền tệ' },
    { name: 'Nợ ròng/EBITDA và khả năng trả lãi', why: 'Doanh nghiệp nhiều nợ dễ phải ưu tiên trả nợ hơn cổ tức.', where: 'Báo cáo tài chính' },
    { name: 'Lịch sử cắt/tăng cổ tức và chính sách cổ tức công bố', why: 'Cho biết cam kết và tính nhất quán của doanh nghiệp.', where: 'Công bố thông tin, báo cáo thường niên' },
  ],
  counterpoints: [
    'Lợi suất cổ tức cao không luôn là bẫy: doanh nghiệp ổn định, dòng tiền mạnh, ít cần tái đầu tư có thể trả cao bền vững.',
    'Tỷ lệ chi trả thấp không luôn tốt: có thể doanh nghiệp giữ tiền lại vì thiếu cơ hội đầu tư hoặc kiểm soát kém.',
    'Các ngưỡng như "chi trả trên 100%" hay "lợi suất trên 10%" chỉ là quy tắc kinh nghiệm, không phải ngưỡng đã được kiểm định chặt; Morningstar cũng nhấn mạnh lịch sử không đảm bảo tương lai.',
  ],
  glossary: [
    { term: 'Tỷ suất cổ tức', definition: 'Cổ tức mỗi cổ phiếu chia cho giá cổ phiếu.' },
    { term: 'Tỷ lệ chi trả', definition: 'Phần lợi nhuận được dùng để trả cổ tức.' },
    { term: 'Bẫy lợi suất cao', definition: 'Cổ phiếu có lợi suất cổ tức hấp dẫn nhưng không bền, thường vì giá đã giảm do rủi ro.' },
    { term: 'Dòng tiền tự do', definition: 'Tiền còn lại sau khi trừ chi đầu tư duy trì và mở rộng từ dòng tiền hoạt động.' },
    { term: 'Lợi thế cạnh tranh bền (moat)', definition: 'Ưu thế giúp doanh nghiệp giữ lợi nhuận cao trong nhiều năm.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'dividend-income-investing-risks-q',
    question: 'Cổ phiếu A có EPS 4.000 đồng, cổ tức 5.000 đồng, giá giảm từ 100.000 xuống 50.000 đồng. Nhận định nào đúng nhất?',
    options: [
      { id: 'a', text: 'Tỷ suất cổ tức 10% rất hấp dẫn và an toàn vì doanh nghiệp đang trả đều.', explain: 'Sai. Tỷ lệ chi trả là 125% (5.000/4.000), tức vượt lợi nhuận; lợi suất cao chủ yếu do giá giảm.' },
      { id: 'b', text: 'Lợi suất 10% phản ánh giá giảm, và chi trả 125% lợi nhuận cho thấy nguy cơ cắt cổ tức.', correct: true, explain: 'Đúng. Tỷ suất = 5.000/50.000 = 10%; chi trả 125% EPS cần được bù bằng tiền ngoài lợi nhuận, rủi ro cắt cổ tức cao.' },
      { id: 'c', text: 'Không thể đánh giá nếu không biết tên công ty.', explain: 'Sai. Số liệu đã đủ để thấy dấu hiệu chi trả không bền, dù cần xem thêm dòng tiền.' },
    ],
  },
  sources: [
    { title: 'Not all dividend stocks are safe. Here\'s how to avoid dividend traps (30/07/2025)', publisher: 'Morningstar Indexes', url: 'https://indexes.morningstar.com/insights/perspective/bltdb6d3e043f097825/not-all-dividend-stocks-are-safe-heres-how-to-avoid-dividend-traps' },
    { title: 'Value investing', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Value_investing' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 171,
}
