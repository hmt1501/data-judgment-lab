import type { Explainer } from '../../../shared/explainer'

export const jCurveTradeBalanceDepreciation: Explainer = {
  id: 'j-curve-trade-balance-depreciation',
  slug: 'j-curve-trade-balance-depreciation',
  question: 'Đồng tiền mất giá có cải thiện cán cân thương mại không, và vì sao thường phải chờ?',
  title: 'Đường cong J: mất giá tiền tệ và cán cân thương mại',
  topic: 'macro',
  tldr: 'Khi đồng nội tệ mất giá, hàng nhập khẩu đắt lên ngay còn khối lượng xuất–nhập chưa kịp đổi, nên cán cân thương mại có thể **xấu đi trước rồi mới cải thiện** — đường đi có hình chữ J. Về lâu dài, cán cân chỉ tốt lên nếu tổng độ co giãn của cầu xuất khẩu và nhập khẩu theo giá vượt 1 (điều kiện Marshall–Lerner). Bằng chứng cho riêng Việt Nam không thống nhất, nên đây là cơ chế để đặt câu hỏi, không phải quy luật chắc chắn.',
  keyPoints: [
    'Theo mô tả trên Wikipedia, đường cong J là "đường đi theo thời gian của cán cân thương mại" sau khi phá giá/mất giá: ngắn hạn **hiệu ứng giá** (nhập khẩu đắt hơn) lấn át, dài hạn **hiệu ứng khối lượng** (người mua nước ngoài mua nhiều hơn, người trong nước chuyển sang hàng nội) mới phát huy.',
    'Lý do ngắn hạn khối lượng ít đổi: hợp đồng đã ký phải thực hiện, và người tiêu dùng, doanh nghiệp cần thời gian tìm nguồn thay thế.',
    '**Điều kiện Marshall–Lerner**: mất giá chỉ cải thiện cán cân khi tổng giá trị tuyệt đối của độ co giãn cầu xuất khẩu và cầu nhập khẩu lớn hơn 1; thời gian càng ngắn thì cầu càng kém co giãn.',
    'Nghiên cứu cho Việt Nam cho kết quả không đồng nhất: một nghiên cứu dữ liệu quý 2001–2015 thấy cán cân xấu đi khoảng hai quý đầu, cải thiện đến khoảng quý thứ sáu rồi dao động, tức dạng giống chữ **S** hơn chữ J.',
    'Với nền kinh tế nhập nhiều đầu vào để xuất khẩu (như Việt Nam), mất giá làm tăng chi phí đầu vào nên lợi thế giá xuất khẩu bị bù trừ một phần — kết luận này là suy luận cơ chế, cần kiểm bằng dữ liệu ngành.',
  ],
  causalChain: [
    { from: 'Đồng nội tệ mất giá', to: 'Giá hàng nhập khẩu (quy ra nội tệ) tăng ngay', mechanism: 'Hợp đồng nhập khẩu thanh toán bằng ngoại tệ nên cùng một lô hàng tốn nhiều nội tệ hơn; khối lượng chưa kịp đổi nên hóa đơn nhập khẩu tăng.' },
    { from: 'Giá hàng nhập khẩu tăng ngay', to: 'Cán cân thương mại xấu đi trong ngắn hạn', mechanism: 'Hiệu ứng giá chiếm ưu thế khi độ co giãn ngắn hạn thấp (tổng nhỏ hơn 1), đây là phần đáy của chữ J.' },
    { from: 'Thời gian trôi qua, hợp đồng cũ hết hạn', to: 'Khối lượng xuất khẩu tăng, nhập khẩu giảm', mechanism: 'Hàng xuất rẻ hơn với người mua nước ngoài; người trong nước thay hàng nhập đắt bằng hàng nội hoặc nguồn khác; độ co giãn dài hạn lớn hơn.' },
    { from: 'Khối lượng điều chỉnh', to: 'Cán cân thương mại cải thiện nếu Marshall–Lerner thỏa mãn', mechanism: 'Khi tổng độ co giãn dài hạn lớn hơn 1, hiệu ứng khối lượng vượt hiệu ứng giá và cán cân đi lên thành nhánh phải của chữ J.' },
    { from: 'Đầu vào nhập khẩu và hóa đơn xuất khẩu bằng USD', to: 'Hiệu quả cải thiện bị giảm', mechanism: 'Doanh nghiệp xuất khẩu dùng nhiều nguyên liệu nhập hoặc định giá hàng bằng USD thì giá bán quy ra ngoại tệ không giảm nhiều mà chi phí lại tăng.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp xuất khẩu dùng nhiều đầu vào nhập khẩu (dệt may, điện tử lắp ráp)', effect: 'Chi phí đầu vào quy ra VND tăng ngay, trong khi lợi thế giá xuất khẩu chỉ hiện dần; lợi ích ròng của mất giá nhỏ hơn bề ngoài.', direction: 'mixed' },
    { group: 'Doanh nghiệp xuất khẩu nông sản, thủy sản dùng ít đầu vào nhập', effect: 'Hưởng lợi rõ hơn từ tỷ giá do doanh thu bằng ngoại tệ tăng quy ra VND, chi phí nhập khẩu ít.', direction: 'up' },
    { group: 'Doanh nghiệp nhập khẩu hàng tiêu dùng, máy móc', effect: 'Chi phí nhập khẩu tăng ngay, biên lợi nhuận bị thu hẹp hoặc phải tăng giá bán.', direction: 'down' },
    { group: 'Hộ gia đình', effect: 'Giá hàng nhập khẩu và hàng dùng đầu vào nhập tăng dần vào giá bán, kéo lạm phát nhập khẩu.', direction: 'down' },
    { group: 'Người đọc số liệu cán cân thương mại', effect: 'Cần chờ vài quý và xét cả tỷ giá thực, không kết luận từ một hai tháng sau khi tỷ giá biến động.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Cán cân thương mại hàng hóa theo tháng/quý', why: 'Quan sát có chữ J hay không sau một đợt biến động tỷ giá lớn.', where: 'Cục Thống kê (nso.gov.vn); số liệu hải quan' },
    { name: 'Tỷ giá USD/VND và tỷ giá hiệu dụng thực (REER)', why: 'Mất giá danh nghĩa chưa chắc là mất giá thực nếu lạm phát trong nước cao hơn đối tác.', where: 'Ngân hàng Nhà nước; IMF, BIS công bố REER' },
    { name: 'Tỷ trọng nhập khẩu trong giá trị xuất khẩu (đầu vào nhập khẩu)', why: 'Càng cao thì lợi ích giá xuất khẩu càng bị bù trừ.', where: 'Bảng I-O của Cục Thống kê; cơ sở dữ liệu giá trị gia tăng thương mại của OECD/WTO' },
    { name: 'Đơn hàng xuất khẩu mới (thành phần của PMI)', why: 'Dấu hiệu sớm của hiệu ứng khối lượng.', where: 'S&P Global PMI Việt Nam' },
  ],
  counterpoints: [
    'Nếu thương mại chủ yếu định giá bằng USD (dominant currency pricing), mất giá song phương có thể ít đổi giá xuất khẩu tính bằng ngoại tệ, làm hiệu ứng khối lượng yếu hơn mô hình cổ điển.',
    'Các thay đổi cầu bên ngoài (suy thoái ở thị trường xuất khẩu chính) hoặc cung trong nước (công suất đã đầy) có thể che mất tác động của tỷ giá; dữ liệu thực tế khó tách riêng.',
    'Kết quả thực nghiệm phụ thuộc giai đoạn, phương pháp và việc dùng cán cân hay tỷ lệ xuất/nhập; các nghiên cứu cho Việt Nam không cho cùng một hình dạng.',
  ],
  glossary: [
    { term: 'Đường cong J', definition: 'Đường đi của cán cân thương mại sau khi tiền tệ mất giá: xấu đi trước, tốt lên sau.' },
    { term: 'Điều kiện Marshall–Lerner', definition: 'Tổng giá trị tuyệt đối độ co giãn theo giá của cầu xuất khẩu và nhập khẩu lớn hơn 1 thì mất giá cải thiện cán cân thương mại (giả định cán cân ban đầu cân bằng).' },
    { term: 'Độ co giãn của cầu theo giá', definition: 'Phần trăm thay đổi lượng cầu khi giá đổi 1%.' },
    { term: 'Hiệu ứng giá / hiệu ứng khối lượng', definition: 'Hiệu ứng giá là thay đổi giá trị do giá đổi khi lượng chưa đổi; hiệu ứng khối lượng là thay đổi do lượng điều chỉnh theo giá mới.' },
    { term: 'Tỷ giá hiệu dụng thực (REER)', definition: 'Tỷ giá bình quân gia quyền theo các đối tác thương mại, điều chỉnh theo chênh lệch lạm phát.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'j-curve-trade-balance-depreciation-q',
    question: 'Ví dụ giả định: sau khi nội tệ mất giá, độ co giãn cầu ngắn hạn của xuất khẩu và nhập khẩu lần lượt là 0,3 và 0,4; dài hạn là 0,8 và 0,9. Điều nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Cán cân thương mại cải thiện ngay trong tháng đầu vì hàng xuất rẻ hơn.', explain: 'Ngắn hạn tổng độ co giãn 0,7 < 1 nên hiệu ứng giá lấn át, cán cân có thể xấu đi trước.' },
      { id: 'b', text: 'Ngắn hạn cán cân có thể xấu đi, dài hạn cải thiện vì tổng độ co giãn tăng lên 1,7 > 1.', correct: true, explain: 'Đúng: đây chính là mô hình chữ J với điều kiện Marshall–Lerner chỉ thỏa mãn ở dài hạn.' },
      { id: 'c', text: 'Mất giá không bao giờ cải thiện cán cân vì nhập khẩu luôn đắt hơn.', explain: 'Dài hạn khối lượng điều chỉnh; với độ co giãn đủ lớn cán cân vẫn có thể tốt lên (dù thực tế phụ thuộc nhiều yếu tố khác).' },
    ],
  },
  sources: [
    { title: 'J-curve effect', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/J-curve_effect' },
    { title: 'Marshall–Lerner condition', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Marshall%E2%80%93Lerner_condition' },
    { title: 'Hiệu ứng đường cong J: trường hợp Việt Nam giai đoạn 2001–2015 (Đặng Thị Xuân Thơm, 2017)', publisher: 'Tạp chí Khoa học và Đào tạo Ngân hàng (vjol.info.vn)', url: 'https://vjol.info.vn/HVNH-KHDAOTAONH/article/view/72875' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 120,
}
