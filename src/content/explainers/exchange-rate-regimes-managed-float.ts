import type { Explainer } from '../../../shared/explainer'

export const exchangeRateRegimesManagedFloat: Explainer = {
  id: 'exchange-rate-regimes-managed-float',
  slug: 'exchange-rate-regimes-managed-float',
  question: 'Chế độ tỷ giá thả nổi, neo và thả nổi có quản lý khác nhau thế nào?',
  title: 'Mỗi chế độ tỷ giá là một cách đánh đổi giữa ổn định và tự chủ tiền tệ',
  topic: 'macro',
  tldr: 'Chế độ tỷ giá quyết định ai định giá đồng tiền: **neo cứng** (gắn cố định với đồng khác), **neo mềm / thả nổi có quản lý** (cho dao động trong biên, ngân hàng trung ương can thiệp) hay **thả nổi** (thị trường quyết định). Theo "bộ ba bất khả thi", một nước không thể đồng thời có tỷ giá cố định, vốn chảy tự do và chính sách tiền tệ độc lập; Việt Nam chọn hướng quản lý có kiểm soát để đổi lấy sự ổn định vừa phải.',
  keyPoints: [
    'Theo bài "Back to Basics" của IMF (Stone, Anderson, Veyrune), các chế độ chia thành neo cứng, neo mềm (trung gian) và thả nổi; neo cứng như dùng ngoại tệ khác hoặc ủy ban tiền tệ, thả nổi giữ được tự chủ chính sách tiền tệ.',
    'Neo mềm giữ tỷ giá quanh một đồng neo hoặc rổ tiền nhưng dễ bị tấn công đầu cơ và thường khó duy trì lâu; IMF ghi nhận sau năm 2001 thả nổi có quản lý và neo mềm lại phổ biến hơn.',
    '**Bộ ba bất khả thi**: chỉ chọn được hai trong ba — tỷ giá cố định, dòng vốn tự do, chính sách tiền tệ độc lập.',
    'Việt Nam áp dụng cơ chế tỷ giá có biên độ: theo Báo Đấu thầu, ngày 17/10/2022 Ngân hàng Nhà nước nới biên độ tỷ giá giao ngay USD/VND từ ±3% lên ±5% (Quyết định 1747/QĐ-NHNN), đồng thời sẵn sàng bán ngoại tệ can thiệp.',
    'Thả nổi có quản lý nghĩa là can thiệp để làm mượt biến động, không phải chặn mọi biến động; chi phí là phải giữ dự trữ ngoại hối đủ và chấp nhận tỷ giá không phải lúc nào cũng "giá thị trường".',
  ],
  causalChain: [
    { from: 'Dòng vốn rút khỏi thị trường mới nổi, USD mạnh lên', to: 'Áp lực mất giá lên nội tệ', mechanism: 'Cầu ngoại tệ tăng, cung giảm; nếu tỷ giá được giữ trong biên, áp lực dồn vào dự trữ và thị trường tự do.' },
    { from: 'Ngân hàng trung ương can thiệp bán ngoại tệ', to: 'Dự trữ ngoại hối giảm, thanh khoản nội tệ bị hút', mechanism: 'Bán USD thu về đồng nội tệ, làm thanh khoản hệ thống chặt hơn và có thể đẩy lãi suất liên ngân hàng tăng.' },
    { from: 'Lãi suất liên ngân hàng tăng', to: 'Chi phí vay của doanh nghiệp, ngân hàng tăng', mechanism: 'Chi phí huy động tăng truyền sang lãi suất cho vay; đây là chi phí của việc giữ tỷ giá ổn định.' },
    { from: 'Nới biên độ hoặc để tỷ giá điều chỉnh', to: 'Giảm áp lực lên dự trữ nhưng tăng chi phí nhập khẩu', mechanism: 'Nội tệ yếu hơn làm hàng nhập khẩu và nợ ngoại tệ đắt hơn, nhưng hàng xuất khẩu cạnh tranh hơn.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp xuất khẩu', effect: 'Hưởng lợi khi nội tệ yếu hơn các đối tác cạnh tranh, nhưng chịu rủi ro khi tỷ giá biến động bất ngờ làm sai lệch giá chào.', direction: 'mixed' },
    { group: 'Doanh nghiệp nhập khẩu, vay nợ bằng ngoại tệ', effect: 'Nội tệ mất giá làm giá vốn và nghĩa vụ trả nợ tính theo nội tệ tăng, đặc biệt với doanh nghiệp không có doanh thu ngoại tệ.', direction: 'down' },
    { group: 'Người gửi tiết kiệm, hộ gia đình', effect: 'Tỷ giá ổn định giúp giữ giá hàng nhập khẩu và kỳ vọng lạm phát; kỳ vọng mất giá làm tăng nhu cầu giữ USD, vàng.', direction: 'mixed' },
    { group: 'Nhà đầu tư nước ngoài', effect: 'Tỷ giá ổn định, dễ dự đoán làm giảm rủi ro chuyển đổi lợi nhuận; biến động mạnh có thể làm họ rút vốn.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ giá trung tâm, tỷ giá niêm yết và tỷ giá thị trường tự do', why: 'Khoảng cách giữa các mức tỷ giá phản ánh áp lực mất cân đối cung cầu ngoại tệ.', where: 'Ngân hàng Nhà nước (sbv.gov.vn), niêm yết của các ngân hàng thương mại' },
    { name: 'Dự trữ ngoại hối', why: 'Là "đạn dược" để can thiệp; dự trữ mỏng làm chế độ quản lý dễ bị thử thách.', where: 'IMF (dữ liệu quốc gia), Ngân hàng Nhà nước' },
    { name: 'Chỉ số USD (DXY) và lãi suất Fed', why: 'Yếu tố bên ngoài chi phối áp lực lên tiền tệ thị trường mới nổi.', where: 'Cục Dự trữ Liên bang Mỹ (federalreserve.gov)' },
    { name: 'Cán cân vãng lai và dòng vốn FDI, kiều hối', why: 'Nguồn cung ngoại tệ cơ bản, bền vững hơn dòng vốn ngắn hạn.', where: 'Ngân hàng Nhà nước, Cục Thống kê' },
  ],
  counterpoints: [
    'Một số nước thả nổi hoàn toàn vẫn can thiệp "ngầm", và nhiều nước tuyên bố neo vẫn để tỷ giá trôi; phân loại chính thức không phải lúc nào cũng khớp với thực tế vận hành.',
    'Chế độ thả nổi đòi hỏi thị trường tài chính đủ sâu và công cụ phòng ngừa rủi ro; với thị trường nông, thả nổi hoàn toàn có thể gây biến động quá mức.',
    'Neo cứng cho sự ổn định giá nhưng mất khả năng dùng lãi suất đối phó cú sốc trong nước; lợi ích chỉ bền khi kỷ luật tài khóa mạnh.',
  ],
  glossary: [
    { term: 'Neo cứng (hard peg)', definition: 'Chế độ cố định tỷ giá bằng ủy ban tiền tệ hoặc dùng luôn ngoại tệ khác.' },
    { term: 'Thả nổi có quản lý', definition: 'Tỷ giá chủ yếu do thị trường quyết định nhưng ngân hàng trung ương can thiệp để làm mượt biến động.' },
    { term: 'Biên độ tỷ giá', definition: 'Khoảng dao động cho phép của tỷ giá quanh mức trung tâm.' },
    { term: 'Bộ ba bất khả thi', definition: 'Không thể cùng lúc có tỷ giá cố định, vốn tự do và chính sách tiền tệ độc lập.' },
    { term: 'Dự trữ ngoại hối', definition: 'Ngoại tệ và tài sản nước ngoài do ngân hàng trung ương nắm giữ để can thiệp và đảm bảo thanh toán.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'exchange-rate-regimes-managed-float-q',
    question: 'Ngân hàng trung ương muốn giữ tỷ giá gần như cố định, đồng thời cho dòng vốn ra vào tự do. Theo bộ ba bất khả thi, điều gì phải hy sinh?',
    options: [
      { id: 'a', text: 'Chính sách tiền tệ độc lập: lãi suất nội địa bị ràng buộc theo lãi suất nước neo.', correct: true, explain: 'Đúng. Để giữ tỷ giá cố định khi vốn tự do, lãi suất phải bám theo nước neo, mất khả năng dùng lãi suất đối phó chu kỳ trong nước.' },
      { id: 'b', text: 'Không phải hy sinh gì nếu dự trữ ngoại hối đủ lớn.', explain: 'Dự trữ giúp trì hoãn áp lực nhưng không xóa bỏ ràng buộc logic của bộ ba; khi dự trữ cạn, chế độ bị phá vỡ.' },
      { id: 'c', text: 'Dòng vốn tự do, vì đó là thứ duy nhất không cần thiết.', explain: 'Hy sinh dòng vốn là một lựa chọn khác (kiểm soát vốn) chứ không phải điều bắt buộc; đề bài đã giả định vốn tự do.' },
    ],
  },
  sources: [
    { title: 'Back to Basics (Finance & Development, 3/2008)', publisher: 'IMF, Finance & Development (3/2008)', url: 'https://www.imf.org/external/pubs/ft/fandd/2008/03/basics.htm' },
    { title: 'Nới biên độ tỷ giá USD/VND từ ±3% lên ±5% (17/10/2022)', publisher: 'Báo Đấu thầu', url: 'https://baodauthau.vn/noi-bien-do-ty-gia-usdvnd-tu-3-len-5-post129882.html' },
    { title: 'Impossible trinity', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Impossible_trinity' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 42,
}
