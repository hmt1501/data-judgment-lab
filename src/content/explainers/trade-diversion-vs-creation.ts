import type { Explainer } from '../../../shared/explainer'

export const tradeDiversionVsCreation: Explainer = {
  id: 'trade-diversion-vs-creation',
  slug: 'trade-diversion-vs-creation',
  question: 'Hiệp định thương mại hay thuế quan mới làm thương mại tăng thật, hay chỉ đổi nơi mua hàng?',
  title: 'Phải tách “tạo mới thương mại” khỏi “chuyển hướng thương mại” mới biết hiệp định có lợi thật không',
  topic: 'geopolitics-trade',
  tldr: 'Khi hai nước giảm thuế cho nhau, một phần hàng nhập khẩu thay thế hàng sản xuất kém hiệu quả trong nước (**tạo mới thương mại**, thường có lợi), phần khác chỉ chuyển từ nhà cung cấp rẻ hơn ngoài khối sang nhà cung cấp trong khối nhờ ưu đãi thuế (**chuyển hướng thương mại**, có thể làm tổn thất phúc lợi). Nhìn kim ngạch tăng chưa đủ để kết luận; phải hỏi hàng đó trước đây mua từ đâu và giá gốc của từng nguồn là bao nhiêu.',
  keyPoints: [
    'Khái niệm do Jacob Viner đưa ra khi phân tích liên minh thuế quan: hiệp định ưu đãi vừa có thể tạo mới, vừa có thể chuyển hướng thương mại.',
    '**Tạo mới**: nước nhập khẩu thay hàng nội địa chi phí cao bằng hàng của đối tác rẻ hơn. **Chuyển hướng**: thay hàng ngoài khối (chi phí thấp nhất thế giới) bằng hàng trong khối vì ngoài khối vẫn chịu thuế.',
    'Ví dụ giả định: giá gốc hàng ngoài khối 100, hàng đối tác 110, thuế 20% với ngoài khối. Trước hiệp định mua ngoài khối với giá 120; sau khi miễn thuế cho đối tác, giá về 110 nên chuyển sang đối tác. Người mua thấy giá giảm 120 → 110, nhưng chi phí nguồn lực thật của nền kinh tế tăng từ 100 lên 110 và ngân sách mất khoản thuế 20 từng thu.',
    'Với một nước xuất khẩu như Việt Nam, đơn hàng tăng sau thuế quan của nước thứ ba có thể là chuyển hướng (khách tìm nguồn thay Trung Quốc) chứ không phải nhu cầu mới; nó bền hay không phụ thuộc vào chi phí thật, không chỉ vào chênh lệch thuế.',
    'Quy tắc xuất xứ quyết định ai được hưởng ưu đãi, nên là nơi chuyển hướng “giả” (qua gia công tối thiểu) dễ xuất hiện.',
  ],
  causalChain: [
    { from: 'Hai hay nhiều nước giảm thuế cho nhau (hiệp định thương mại)', to: 'Giá hàng đối tác tại thị trường nhập khẩu giảm so với hàng ngoài khối', mechanism: 'Ưu đãi thuế tạo khoảng chênh giá nhân tạo, không phản ánh chi phí sản xuất.' },
    { from: 'Hàng đối tác rẻ hơn hàng nội địa', to: 'Tạo mới thương mại', mechanism: 'Người tiêu dùng và doanh nghiệp mua nhiều hơn, nguồn lực trong nước chuyển sang ngành có lợi thế hơn; phúc lợi tăng.' },
    { from: 'Hàng đối tác rẻ hơn hàng ngoài khối chỉ vì thuế', to: 'Chuyển hướng thương mại', mechanism: 'Đơn hàng dời từ nhà sản xuất hiệu quả nhất sang nhà sản xuất kém hiệu quả hơn nhưng được ưu đãi; ngân sách mất thu thuế.' },
    { from: 'Tỷ trọng tạo mới và chuyển hướng', to: 'Tác động ròng của hiệp định', mechanism: 'Tạo mới lớn hơn chuyển hướng thì phúc lợi ròng dương; ngược lại có thể âm dù kim ngạch giữa các đối tác tăng mạnh.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp xuất khẩu', effect: 'Hưởng ưu đãi thuế ở thị trường đối tác và có thể nhận đơn chuyển từ nước chịu thuế cao hơn; đơn hàng chuyển hướng có thể rút đi nếu thuế đối thủ giảm.', direction: 'mixed' },
    { group: 'Doanh nghiệp nhập khẩu nguyên liệu', effect: 'Nguồn nhập trong khối rẻ hơn nhờ ưu đãi, nhưng nếu chỉ chuyển từ nguồn ngoài khối rẻ thật thì chi phí nguồn lực tăng.', direction: 'mixed' },
    { group: 'Ngân sách nhà nước', effect: 'Cắt giảm thuế quan làm giảm thu từ thuế xuất nhập khẩu; phần thất thu lớn hơn khi chuyển hướng chiếm ưu thế.', direction: 'down' },
    { group: 'Người tiêu dùng', effect: 'Giá hàng nhập khẩu từ đối tác giảm, nhưng lợi ích ròng nhỏ hơn mức giảm giá nếu nguồn rẻ nhất bị loại.', direction: 'up' },
    { group: 'Nhà đầu tư/FDI', effect: 'Ưu đãi thuế khuyến khích đặt nhà máy trong khối để hưởng ưu đãi, nên thay đổi chuỗi cung ứng nhanh hơn thay đổi chi phí thật.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ trọng nhập khẩu theo nguồn (trước và sau hiệp định)', why: 'Nếu nguồn trong khối tăng đúng bằng mức nguồn ngoài khối giảm, nghiêng về chuyển hướng.', where: 'Tổng cục Hải quan, Cục Thống kê; UN Comtrade' },
    { name: 'Giá nhập khẩu bình quân theo nước (đơn giá)', why: 'Đơn giá đối tác cao hơn đơn giá cũ cho thấy nguồn rẻ hơn đã bị thay thế.', where: 'Số liệu hải quan chi tiết theo mã HS' },
    { name: 'Tỷ lệ dùng ưu đãi (C/O ưu đãi trên kim ngạch)', why: 'Đo mức hiệp định thực sự đi vào thương mại, tránh nhầm với kim ngạch cũ.', where: 'Bộ Công Thương; WTO (cơ sở dữ liệu hiệp định thương mại khu vực)' },
  ],
  counterpoints: [
    'Về động, hiệp định còn tạo cạnh tranh và tiếp cận công nghệ; chuyển hướng ban đầu có thể thành tạo mới về sau khi nhà cung cấp trong khối cải thiện chi phí.',
    'Nếu thuế ngoài khối đã thấp (thuế MFN thấp), khoảng chênh ưu đãi nhỏ nên chuyển hướng nhỏ và việc tách bạch khó đo.',
    'Phân biệt hai hiệu ứng bằng số liệu thực tế cần mô hình và kiểm soát yếu tố khác (tỷ giá, nhu cầu), nên các con số “hiệp định giúp tăng X%” cần đọc kèm phương pháp.',
  ],
  glossary: [
    { term: 'Tạo mới thương mại', definition: 'Nhập khẩu từ đối tác thay cho sản xuất nội địa chi phí cao hơn nhờ giảm thuế.' },
    { term: 'Chuyển hướng thương mại', definition: 'Chuyển nguồn mua từ nhà cung cấp ngoài khối chi phí thấp nhất sang nhà cung cấp trong khối do chênh lệch thuế.' },
    { term: 'Thuế MFN', definition: 'Mức thuế áp dụng cho các thành viên WTO không có ưu đãi riêng.' },
    { term: 'Quy tắc xuất xứ', definition: 'Điều kiện để hàng được coi là sản xuất tại nước đối tác và hưởng ưu đãi thuế.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'trade-diversion-vs-creation-q',
    question: 'Sau khi một hiệp định có hiệu lực, nhập khẩu từ đối tác tăng mạnh nhưng nhập khẩu từ nhà cung cấp ngoài khối giảm gần đúng bằng mức tăng đó, còn sản lượng nội địa không đổi. Nhận định nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Hiệp định chắc chắn có lợi vì kim ngạch với đối tác tăng.', explain: 'Kim ngạch với đối tác tăng không nói lên điều gì về phúc lợi nếu nó chỉ thay thế một nguồn khác.' },
      { id: 'b', text: 'Bằng chứng nghiêng về chuyển hướng thương mại; cần so đơn giá để biết nguồn lực có bị lãng phí không.', correct: true, explain: 'Đúng. Tổng nhập khẩu không đổi trong khi cơ cấu nguồn đổi chỗ là dấu hiệu chuyển hướng; so đơn giá cho biết nước nhập khẩu có phải trả chi phí thật cao hơn.' },
      { id: 'c', text: 'Đây chắc chắn là gian lận xuất xứ.', explain: 'Có thể nhưng không đủ căn cứ; chuyển hướng hợp pháp do ưu đãi thuế là cách giải thích đơn giản hơn.' },
    ],
  },
  sources: [
    { title: 'Trade diversion', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Trade_diversion' },
    { title: 'Trade creation', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Trade_creation' },
    { title: 'Customs unions (trade creation vs trade diversion, Viner)', publisher: 'Economics Online', url: 'https://www.economicsonline.co.uk/Global_economics/Customs_unions.html' },
    { title: 'Regional Trade Agreements gateway', publisher: 'World Trade Organization', url: 'https://www.wto.org/english/tratop_e/region_e/region_e.htm' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 100,
}
