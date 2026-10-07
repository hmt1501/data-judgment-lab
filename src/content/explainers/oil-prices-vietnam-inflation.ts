import type { Explainer } from '../explainer'

export const oilPricesVietnamInflation: Explainer = {
  id: 'oil-prices-vietnam-inflation',
  slug: 'oil-prices-vietnam-inflation',
  question: 'Giá dầu thế giới và OPEC+ ảnh hưởng thế nào tới lạm phát Việt Nam?',
  title: 'Giá dầu, OPEC+ và lạm phát Việt Nam: truyền dẫn qua những đâu?',
  topic: 'macro',
  tldr: 'Giá dầu thế giới (chịu ảnh hưởng lớn bởi quyết định sản lượng của OPEC+, cầu toàn cầu và rủi ro địa chính trị) đi vào Việt Nam qua **giá xăng dầu trong nước**, rồi lan sang **vận tải, thực phẩm và sản xuất**. Nhà nước điều hành giá xăng dầu theo kỳ và có **Quỹ bình ổn giá**, nên biến động bị làm mượt và trễ, nhưng không bị triệt tiêu. Việt Nam vừa xuất khẩu dầu thô vừa nhập khẩu dầu thô và xăng dầu, nên tác động lên ngân sách và cán cân thương mại là đan xen.',
  keyPoints: [
    'Giá xăng dầu bán lẻ trong nước được Bộ Công Thương chủ trì, phối hợp Bộ Tài chính điều hành theo kỳ (thứ Năm hằng tuần theo Nghị định 80/2023/NĐ-CP), có thể điều chỉnh đột xuất khi giá cơ sở biến động mạnh.',
    '**Quỹ bình ổn giá xăng dầu** được trích lập theo từng kỳ điều hành và chi sử dụng khi cần kìm mức tăng giá, giúp giảm sốc ngắn hạn; thuế và phí (thuế bảo vệ môi trường, VAT) cũng là "van" chính sách có thể điều chỉnh.',
    'Truyền dẫn có hai lớp: **trực tiếp** (nhóm giao thông trong rổ CPI) và **gián tiếp** (cước vận tải, chi phí phân bón, đánh bắt thủy sản, sản xuất công nghiệp → giá thực phẩm và hàng hóa).',
    'Việt Nam vừa khai thác, xuất khẩu dầu thô vừa nhập khẩu dầu thô cho nhà máy lọc dầu và nhập xăng dầu thành phẩm; giá dầu cao làm tăng thu ngân sách từ dầu khí nhưng cũng làm tăng chi phí nhập khẩu.',
    'Mức tác động phụ thuộc cả **tỷ giá USD/VND**: dầu tính bằng USD, nên VND mất giá khuếch đại cú sốc giá dầu.',
  ],
  causalChain: [
    { from: 'OPEC+ cắt giảm sản lượng hoặc rủi ro địa chính trị tại vùng sản xuất dầu', to: 'Giá dầu thô thế giới tăng', mechanism: 'Nguồn cung kỳ vọng giảm trong khi cầu ngắn hạn kém co giãn, giá Brent/WTI phản ứng nhanh.' },
    { from: 'Giá dầu thô thế giới tăng', to: 'Giá xăng dầu thành phẩm tại Singapore (Platts) tăng', mechanism: 'Giá cơ sở trong nước tham chiếu giá thành phẩm khu vực, cộng chi phí, thuế, phí và lợi nhuận định mức.' },
    { from: 'Giá xăng dầu thành phẩm tại Singapore (Platts) tăng', to: 'Giá bán lẻ xăng dầu Việt Nam tăng (có độ trễ)', mechanism: 'Liên Bộ điều chỉnh theo kỳ; Quỹ bình ổn có thể được chi để giảm mức tăng nhưng không thể giữ giá mãi nếu cú sốc kéo dài.' },
    { from: 'Giá bán lẻ xăng dầu Việt Nam tăng (có độ trễ)', to: 'Chi phí vận tải, logistics, sản xuất tăng', mechanism: 'Cước xe tải, xe khách, tàu cá, máy nông nghiệp và nhiều quy trình công nghiệp phụ thuộc nhiên liệu.' },
    { from: 'Chi phí vận tải, logistics, sản xuất tăng', to: 'CPI tăng, áp lực lên lãi suất', mechanism: 'Giá thực phẩm, dịch vụ tăng theo; nếu lạm phát kỳ vọng tăng, NHNN có thể bớt dư địa nới lỏng tiền tệ.' },
  ],
  vietnamImpact: [
    { group: 'Người tiêu dùng, hộ gia đình', effect: 'Chi phí đi lại và giá thực phẩm tăng; hộ thu nhập thấp chịu tác động tương đối lớn hơn vì tỷ trọng chi cho năng lượng, ăn uống cao.', direction: 'down' },
    { group: 'Vận tải, logistics, hàng không', effect: 'Nhiên liệu là chi phí lớn; biên lợi nhuận bị ép nếu không chuyển kịp sang giá cước.', direction: 'down' },
    { group: 'Doanh nghiệp khai thác dầu khí, lọc dầu', effect: 'Doanh thu và lợi nhuận thường tăng khi giá dầu cao; lọc dầu phụ thuộc chênh lệch giữa giá thành phẩm và giá dầu thô (crack spread).', direction: 'up' },
    { group: 'Ngân sách nhà nước', effect: 'Thu từ dầu thô và thuế liên quan tăng, nhưng nếu giảm thuế/phí để bình ổn giá thì phần thu này bị bù trừ.', direction: 'mixed' },
    { group: 'Nông nghiệp, thủy sản', effect: 'Chi phí phân bón (liên quan giá năng lượng), nhiên liệu tàu cá, vận chuyển tăng; giá nông sản bán ra không phải lúc nào cũng tăng kịp.', direction: 'down' },
    { group: 'Lãi suất và chính sách tiền tệ', effect: 'Lạm phát cao hơn có thể khiến NHNN thận trọng hơn với việc hạ lãi suất.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Giá dầu Brent và WTI', why: 'Chỉ báo gốc của cú sốc giá năng lượng.', where: 'EIA (eia.gov); dữ liệu thị trường' },
    { name: 'Quyết định sản lượng của OPEC+', why: 'Thay đổi hạn ngạch sản lượng là động lực lớn của giá dầu kỳ hạn gần.', where: 'Thông cáo của OPEC (opec.org)' },
    { name: 'Giá cơ sở, giá bán lẻ và mức trích/chi Quỹ bình ổn mỗi kỳ', why: 'Cho thấy bao nhiêu phần cú sốc đã đi vào giá trong nước và bộ đệm còn lại.', where: 'Bộ Công Thương (moit.gov.vn); Petrolimex' },
    { name: 'CPI nhóm giao thông và nhóm lương thực, thực phẩm', why: 'Đo truyền dẫn trực tiếp và gián tiếp.', where: 'Cục Thống kê (nso.gov.vn), công bố hằng tháng' },
    { name: 'Tỷ giá USD/VND', why: 'Dầu nhập khẩu tính bằng USD; tỷ giá tăng khuếch đại cú sốc.', where: 'NHNN; ngân hàng thương mại' },
  ],
  counterpoints: [
    'Nếu giá dầu tăng vì cầu toàn cầu mạnh, xuất khẩu Việt Nam cũng có thể tốt hơn, bù đắp một phần tác động tiêu cực.',
    'Công cụ điều hành (Quỹ bình ổn, thuế, phí) có thể làm CPI tăng ít hơn dự đoán trong ngắn hạn, nhưng có chi phí: quỹ cạn hoặc ngân sách giảm thu.',
    'Giá dầu giảm mạnh không chắc là tin tốt hoàn toàn: nó có thể phản ánh suy thoái toàn cầu, làm giảm đơn hàng xuất khẩu và thu ngân sách từ dầu khí.',
  ],
  glossary: [
    { term: 'OPEC+', definition: 'Nhóm các nước OPEC và một số nhà sản xuất ngoài OPEC (như Nga) phối hợp điều chỉnh sản lượng dầu.' },
    { term: 'Giá cơ sở xăng dầu', definition: 'Giá tính theo công thức gồm giá thế giới, chi phí, thuế, phí và lợi nhuận định mức; căn cứ để định giá bán lẻ tối đa.' },
    { term: 'Quỹ bình ổn giá xăng dầu', definition: 'Quỹ do doanh nghiệp đầu mối trích lập theo quy định để điều tiết, giảm biến động giá bán lẻ.' },
    { term: 'Truyền dẫn giá', definition: 'Mức độ và tốc độ thay đổi giá đầu vào (như dầu) lan sang giá tiêu dùng.' },
    { term: 'Crack spread', definition: 'Chênh lệch giữa giá sản phẩm lọc dầu và giá dầu thô, quyết định biên lợi nhuận nhà máy lọc dầu.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'oil-prices-vietnam-inflation-q',
    question: 'Giá dầu thế giới tăng 20% trong một tháng nhưng giá xăng trong nước chỉ tăng nhẹ nhờ chi Quỹ bình ổn. Nhận định nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Lạm phát Việt Nam sẽ không bị ảnh hưởng gì.', explain: 'Quỹ chỉ làm chậm và giảm biên độ trong ngắn hạn; dầu còn đi vào chi phí qua dầu diesel, nhiên liệu công nghiệp, phân bón và kỳ vọng giá.' },
      { id: 'b', text: 'Cú sốc được trì hoãn một phần; nếu giá dầu cao kéo dài, giá trong nước và CPI vẫn có thể tăng tiếp khi bộ đệm thu hẹp.', correct: true, explain: 'Đúng. Hãy theo dõi số dư Quỹ bình ổn, giá cơ sở mỗi kỳ, CPI nhóm giao thông và tỷ giá để biết áp lực còn bị "giữ lại" bao nhiêu.' },
      { id: 'c', text: 'Việt Nam được lợi hoàn toàn vì có xuất khẩu dầu thô.', explain: 'Thu từ dầu thô tăng nhưng Việt Nam cũng nhập khẩu dầu thô và xăng dầu; phần lớn người tiêu dùng và doanh nghiệp chịu chi phí cao hơn.' },
    ],
  },
  sources: [
    { title: 'What Drives Crude Oil Prices?', publisher: 'U.S. Energy Information Administration (EIA)', url: 'https://www.eia.gov/finance/markets/crudeoil/' },
    { title: 'Organization of the Petroleum Exporting Countries', publisher: 'OPEC', url: 'https://www.opec.org' },
    { title: 'Bộ Công Thương', publisher: 'Bộ Công Thương Việt Nam', url: 'https://moit.gov.vn' },
    { title: 'Commodity Markets', publisher: 'World Bank', url: 'https://www.worldbank.org/en/research/commodity-markets' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
