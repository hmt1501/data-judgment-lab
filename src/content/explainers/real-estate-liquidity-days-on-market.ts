import type { Explainer } from '../../../shared/explainer'

export const realEstateLiquidityDaysOnMarket: Explainer = {
  id: 'real-estate-liquidity-days-on-market',
  slug: 'real-estate-liquidity-days-on-market',
  question: 'Thanh khoản bất động sản đo thế nào và vì sao thời gian bán quan trọng?',
  title: 'Thanh khoản BĐS là đánh đổi giữa tốc độ và giá: muốn bán nhanh phải chấp nhận chiết khấu',
  topic: 'real-estate',
  tldr: 'Thanh khoản là khả năng bán nhanh mà không làm giá giảm nhiều. Tài sản kém thanh khoản như BĐS luôn có đánh đổi **tốc độ ↔ giá**: có thể bán nhanh với giá thấp, hoặc chờ lâu để được giá tốt. Hai thước đo thực hành là **thời gian rao bán đến khi bán** (days on market) và **chênh lệch giữa giá rao và giá giao dịch**.',
  keyPoints: [
    'Theo Wikipedia (Market liquidity): thanh khoản là đặc tính cho phép mua/bán nhanh mà không gây thay đổi giá lớn; có sự đánh đổi giữa tốc độ bán và giá nhận được. Với thị trường kém thanh khoản, phải chiết khấu để bán nhanh.',
    'Cùng nguồn, ví dụ BĐS (một nhà thờ cũ rao bán ở Anh): có thể bán trong vài ngày với giá thấp, nhưng tìm người trả giá hợp lý có thể mất nhiều năm; trong khủng hoảng tín dụng thế chấp thứ cấp, giá trị tài sản khó xác định dù có tài sản đảm bảo là BĐS.',
    'Thước đo gợi ý: **thời gian bán trung vị** (từ rao đến chốt), **tỷ lệ giao dịch thành công trên số tin rao**, **chênh lệch giá rao – giá chốt**, và **số tháng tồn kho** (số tin đang rao ÷ số giao dịch mỗi tháng).',
    'Ví dụ giả định: khu vực có 600 căn đang rao bán, mỗi tháng bán được 50 căn → tồn kho 12 tháng. Nếu số giao dịch giảm còn 25 căn/tháng, tồn kho lên 24 tháng và người bán thường phải giảm giá để rút ngắn thời gian.',
    'Giá chốt thường khó quan sát hơn giá rao (nhận định chung, bài chưa trích nguồn riêng cho Việt Nam), nên dữ liệu thanh khoản thường dựa vào tin rao trên sàn, báo cáo tư vấn và số giao dịch ghi nhận; cần phân biệt giá rao và giá chốt.',
  ],
  causalChain: [
    { from: 'Tín dụng thắt chặt, lãi suất tăng, niềm tin giảm', to: 'Người mua ít hơn, giao dịch giảm', mechanism: 'Người mua ở thực và đầu tư đều cần vay; chi phí vay tăng làm sức mua giảm, người mua chờ giá thấp hơn.' },
    { from: 'Giao dịch giảm', to: 'Thời gian bán kéo dài, tồn kho tăng', mechanism: 'Số tin rao tích lũy trong khi lượng chốt thấp nên số tháng tồn kho tăng.' },
    { from: 'Người bán cần thanh khoản gấp (áp lực trả nợ)', to: 'Chấp nhận chiết khấu để bán nhanh', mechanism: 'Giá chốt thấp hơn giá rao; nếu nhiều người cùng làm vậy, giá tham chiếu của khu vực bị kéo xuống.' },
    { from: 'Thanh khoản yếu kéo dài', to: 'Rủi ro dây chuyền cho người vay và chủ đầu tư', mechanism: 'Tài sản đảm bảo khó bán làm ngân hàng thận trọng hơn; chủ đầu tư thiếu dòng tiền bán hàng và khó trả nợ.' },
  ],
  vietnamImpact: [
    { group: 'Người mua đầu cơ dùng đòn bẩy', effect: 'Nếu cần bán gấp để trả nợ, có thể phải chiết khấu sâu; thanh khoản thấp hơn khi thị trường quay đầu.', direction: 'down' },
    { group: 'Người mua để ở', effect: 'Thị trường kém thanh khoản mở cơ hội thương lượng nhưng cũng khó bán lại khi cần.', direction: 'mixed' },
    { group: 'Chủ đầu tư', effect: 'Tốc độ hấp thụ quyết định dòng tiền; thanh khoản yếu làm tăng chiết khấu, chính sách bán hàng và rủi ro trả nợ trái phiếu.', direction: 'down' },
    { group: 'Ngân hàng', effect: 'Thanh khoản của tài sản đảm bảo ảnh hưởng khả năng thu hồi nợ khi xử lý.', direction: 'down' },
  ],
  indicators: [
    { name: 'Thời gian bán trung vị (days on market)', why: 'Đo trực tiếp tốc độ chốt giao dịch.', where: 'Dữ liệu sàn rao bán, báo cáo thị trường của đơn vị tư vấn BĐS' },
    { name: 'Chênh lệch giá rao – giá chốt', why: 'Đo mức người bán phải nhượng bộ.', where: 'Báo cáo thị trường, khảo sát môi giới' },
    { name: 'Số tháng tồn kho và tỷ lệ hấp thụ', why: 'Cho thấy cung dư hay cầu đủ.', where: 'Báo cáo của đơn vị tư vấn BĐS; thống kê của Bộ Xây dựng' },
  ],
  counterpoints: [
    'Thời gian rao bán dài có thể do giá rao kỳ vọng quá cao chứ không phải thị trường kém; phải đọc cùng chênh lệch giá rao – giá chốt.',
    'Tin rao trùng lặp, tin cũ không gỡ làm số tồn kho từ sàn rao vặt bị thổi phồng.',
    'Mỗi phân khúc và khu vực có thanh khoản khác nhau; số trung bình toàn thị trường dễ gây hiểu lầm.',
  ],
  glossary: [
    { term: 'Thanh khoản', definition: 'Khả năng chuyển tài sản thành tiền nhanh mà không làm giá giảm nhiều.' },
    { term: 'Days on market', definition: 'Số ngày từ lúc rao bán đến khi chốt giao dịch.' },
    { term: 'Số tháng tồn kho', definition: 'Số tin rao đang có chia cho số giao dịch trung bình mỗi tháng.' },
    { term: 'Chiết khấu thanh khoản', definition: 'Phần giá giảm người bán chấp nhận để bán nhanh.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'real-estate-liquidity-days-on-market-q',
    question: 'Một khu vực có 600 căn đang rao, mỗi tháng bán được 25 căn (ví dụ giả định). Số tháng tồn kho và ý nghĩa?',
    options: [
      { id: 'a', text: '24 tháng; nguồn cung dư so với tốc độ bán, người bán thường phải nhượng bộ giá.', correct: true, explain: '600 ÷ 25 = 24. Tồn kho dài cho thấy thanh khoản yếu; cần kiểm tra tin trùng lặp.' },
      { id: 'b', text: '25 tháng.', explain: 'Đó là số căn bán mỗi tháng, không phải tồn kho.' },
      { id: 'c', text: '0,04 tháng.', explain: 'Nhầm nghịch đảo: 25 ÷ 600.' },
    ],
  },
  sources: [
    { title: 'Market liquidity', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Market_liquidity' },
    { title: 'Real estate economics', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Real_estate_economics' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 99,
}
