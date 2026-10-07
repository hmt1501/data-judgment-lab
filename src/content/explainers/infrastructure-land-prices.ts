import type { Explainer } from '../explainer'

export const infrastructureLandPrices: Explainer = {
  id: 'infrastructure-land-prices',
  slug: 'infrastructure-land-prices',
  question: 'Hạ tầng và quy hoạch mới có thật sự làm giá đất tăng không?',
  title: 'Hạ tầng, quy hoạch và giá đất: kỳ vọng khác giá trị thực thế nào?',
  topic: 'real-estate',
  tldr: 'Hạ tầng (cao tốc, sân bay, metro, khu công nghiệp) làm tăng giá trị đất khi nó **thực sự cải thiện khả năng tiếp cận và tạo ra nhu cầu sử dụng**: dân cư, việc làm, dịch vụ. Nhưng giá thường tăng mạnh nhất ở giai đoạn **tin đồn/công bố**, trước khi có giá trị thực, và có thể đứng yên hoặc giảm nhiều năm nếu dự án chậm. Rủi ro lớn nhất là mua theo sóng kỳ vọng rồi kẹt thanh khoản.',
  keyPoints: [
    'Giá trị thực của hạ tầng đến từ **giảm thời gian đi lại và tăng nhu cầu sử dụng đất** (ở, sản xuất, thương mại), không phải từ bản thân thông tin "sắp có dự án".',
    'Giá đất quanh hạ tầng thường đi theo các giai đoạn: **tin đồn/đề xuất → phê duyệt quy hoạch → giải phóng mặt bằng, khởi công → hoàn thành → khu vực xung quanh lấp đầy**. Mỗi bước có thể kéo dài nhiều năm và có thể bị lùi tiến độ.',
    'Ở giai đoạn đầu, giá thường được đẩy bởi **kỳ vọng và môi giới**, giao dịch chủ yếu giữa nhà đầu cơ với nhau; giá chào bán tăng nhưng lượng giao dịch thật và người mua để sử dụng rất ít.',
    'Bài học thực tế: báo chí đã ghi nhận các cơn sốt đất theo tin đồn sân bay hoặc tuyến giao thông ở một số tỉnh, giá tăng vọt rồi nguội đi nhanh, để lại nhà đầu tư dùng đòn bẩy bị kẹt vốn.',
    '**Luôn kiểm tra quy hoạch ở nguồn chính thức** (quyết định phê duyệt, bản đồ quy hoạch do cơ quan Nhà nước công bố, kế hoạch đầu tư công) thay vì dựa vào bản đồ do môi giới cung cấp.',
  ],
  causalChain: [
    { from: 'Thông tin về dự án hạ tầng xuất hiện', to: 'Kỳ vọng tăng giá lan rộng', mechanism: 'Nhà đầu tư đoán rằng đất gần dự án sẽ có giá trị cao hơn trong tương lai; môi giới khuếch đại thông tin để bán hàng.' },
    { from: 'Kỳ vọng tăng giá lan rộng', to: 'Giá chào bán tăng nhanh, thanh khoản ảo', mechanism: 'Nhiều người mua để bán lại (lướt sóng), giá được neo theo giao dịch gần nhất; lượng người mua để sử dụng gần như không đổi.' },
    { from: 'Giá chào bán tăng nhanh, thanh khoản ảo', to: 'Giá vượt xa giá trị sử dụng hiện tại', mechanism: 'Giá đất phản ánh kỳ vọng hàng chục năm sau, trong khi khu vực chưa có dân cư, việc làm hay dịch vụ để tạo nhu cầu thật.' },
    { from: 'Giá vượt xa giá trị sử dụng hiện tại', to: 'Thị trường đóng băng khi dự án chậm hoặc tín dụng siết', mechanism: 'Khi tiến độ lùi hoặc lãi vay tăng, người mua mới biến mất; người nắm đất phải giảm giá sâu nếu muốn bán, hoặc chấp nhận giữ lâu.' },
    { from: 'Hạ tầng hoàn thành và khu vực được lấp đầy', to: 'Giá trị thực của đất tăng bền vững hơn', mechanism: 'Khả năng tiếp cận và nhu cầu sử dụng thực tạo dòng tiền (cho thuê, kinh doanh), giúp giá có nền tảng; nhưng phần tăng này có thể đã được "định giá trước" từ giai đoạn đầu.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư lướt sóng theo tin hạ tầng', effect: 'Có thể lãi nhanh nếu bán kịp ở đỉnh sóng, nhưng rủi ro kẹt hàng rất cao khi thanh khoản biến mất, đặc biệt nếu vay ngân hàng.', direction: 'mixed' },
    { group: 'Người mua đất để ở lâu dài', effect: 'Được lợi khi hạ tầng hoàn thành thật (đi lại thuận tiện, tiện ích tăng), nhưng phải trả giá cao nếu mua ở giai đoạn sốt.', direction: 'mixed' },
    { group: 'Người dân trong vùng thu hồi đất', effect: 'Được bồi thường theo bảng giá đất và hệ số điều chỉnh; khoảng cách giữa giá bồi thường và giá sốt trên thị trường có thể gây tranh chấp.', direction: 'mixed' },
    { group: 'Chủ đầu tư dự án khu đô thị gần hạ tầng', effect: 'Hưởng lợi khi hạ tầng kết nối hoàn thành, nhưng chi phí đất và tiền sử dụng đất cũng tăng theo kỳ vọng.', direction: 'up' },
    { group: 'Chính quyền địa phương', effect: 'Có cơ hội thu ngân sách từ đất nhờ giá trị tăng thêm, nhưng sốt đất ảo làm khó giải phóng mặt bằng và quản lý thị trường.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Quyết định phê duyệt quy hoạch và bản đồ quy hoạch', why: 'Xác định dự án đã ở giai đoạn nào: đề xuất, phê duyệt chủ trương hay phê duyệt quy hoạch chi tiết.', where: 'Cổng thông tin UBND tỉnh/thành phố; Sở Xây dựng; Bộ Xây dựng' },
    { name: 'Kế hoạch đầu tư công trung hạn và vốn được giao', why: 'Dự án có vốn bố trí thực mới có khả năng khởi công đúng hạn.', where: 'Nghị quyết HĐND tỉnh; Cổng thông tin Chính phủ; Bộ Tài chính' },
    { name: 'Tiến độ giải phóng mặt bằng và khởi công', why: 'Dấu hiệu rõ nhất dự án đi từ "trên giấy" ra thực tế.', where: 'Thông cáo của chủ đầu tư/ban quản lý dự án; báo chí địa phương' },
    { name: 'Số lượng giao dịch thành công và thời gian bán', why: 'Phân biệt sốt thật và sốt ảo: giá tăng nhưng giao dịch ít, thời gian bán dài là dấu hiệu rủi ro thanh khoản.', where: 'Báo cáo thị trường BĐS của Bộ Xây dựng, hiệp hội BĐS, công ty nghiên cứu thị trường' },
    { name: 'Cảnh báo của chính quyền về sốt đất, thông tin quy hoạch sai lệch', why: 'Địa phương thường phát cảnh báo khi giá tăng bất thường hoặc có tin đồn quy hoạch.', where: 'Cổng thông tin UBND tỉnh; báo chí chính thống' },
  ],
  counterpoints: [
    'Hạ tầng lớn đã hoàn thành (cao tốc, cầu, metro) thực sự làm giá đất ở nhiều khu vực tăng bền vững; vấn đề không phải "hạ tầng không làm tăng giá" mà là **mua ở giá đã phản ánh quá nhiều kỳ vọng**.',
    'Không phải mọi vùng gần hạ tầng đều hưởng lợi như nhau: đất sát cao tốc nhưng không có nút giao có thể ít được lợi, thậm chí bất lợi vì tiếng ồn hoặc chia cắt.',
    'Một số khu vực có nhu cầu thật mạnh (gần khu công nghiệp đang hoạt động, đô thị lớn) có thể tăng giá ngay từ giai đoạn đầu mà không hoàn toàn là đầu cơ.',
  ],
  glossary: [
    { term: 'Sốt đất ảo', definition: 'Giá đất tăng nhanh chủ yếu do tin đồn và đầu cơ, không đi kèm nhu cầu sử dụng thật; thường xẹp nhanh khi kỳ vọng hết.' },
    { term: 'Thanh khoản', definition: 'Khả năng bán tài sản nhanh với mức giá gần giá thị trường; đất ở vùng sốt ảo thường có thanh khoản rất thấp khi thị trường đảo chiều.' },
    { term: 'Quy hoạch chi tiết', definition: 'Quy hoạch cụ thể hóa sử dụng đất từng lô, chỉ tiêu xây dựng; giá trị pháp lý mạnh hơn nhiều so với đề xuất hay tin đồn.' },
    { term: 'Định giá trước (priced in)', definition: 'Kỳ vọng tương lai đã được phản ánh vào giá hiện tại, nên khi sự kiện xảy ra, giá có thể không tăng thêm.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'infrastructure-land-prices-q',
    question: 'Bạn được giới thiệu mua đất ở huyện Y vì "sắp có sân bay", giá đã tăng gấp đôi trong 3 tháng. Bước kiểm tra nào quan trọng nhất trước khi quyết định?',
    options: [
      { id: 'a', text: 'Hỏi thêm vài môi giới khác xem họ có xác nhận thông tin sân bay không.', explain: 'Môi giới thường hưởng lợi từ việc bán được hàng nên không phải nguồn độc lập; nhiều môi giới cùng nói không làm thông tin chính xác hơn.' },
      { id: 'b', text: 'Tra quyết định phê duyệt quy hoạch, kế hoạch vốn đầu tư công và tiến độ thực tế của dự án ở cơ quan Nhà nước, đồng thời xem số giao dịch thành công trong khu vực.', correct: true, explain: 'Đúng. Văn bản chính thức cho biết dự án đang ở giai đoạn nào và có vốn hay chưa; số giao dịch thật giúp phân biệt sốt thật với sốt ảo và đánh giá rủi ro kẹt thanh khoản.' },
      { id: 'c', text: 'Mua nhanh trước khi giá tăng tiếp, vì hạ tầng luôn làm giá đất tăng.', explain: 'Giá tăng gấp đôi trong 3 tháng có thể đã phản ánh phần lớn kỳ vọng; nếu dự án chậm nhiều năm, giá có thể đứng yên hoặc giảm và rất khó bán.' },
    ],
  },
  sources: [
    { title: 'Bài học từ cơn sốt đất "ăn theo" hạ tầng sân bay ở Bình Phước', publisher: 'Doanh nhân – Báo Pháp luật Việt Nam', url: 'https://doanhnhan.baophapluat.vn/bai-hoc-tu-con-sot-dat-an-theo-ha-tang-san-bay-o-binh-phuoc-38447.html' },
    { title: 'Sốt đất theo dự án "ảo"', publisher: 'Báo Sài Gòn Giải Phóng', url: 'https://www.sggp.org.vn/sot-dat-theo-du-an-ao-post587700.html' },
    { title: 'Hụt hơi chạy theo hạ tầng, nhà đầu tư mắc kẹt trong bất động sản', publisher: 'VnBusiness', url: 'https://vnbusiness.vn/hut-hoi-chay-theo-ha-tang-nha-dau-tu-mac-ket-trong-bat-dong-san.html' },
    { title: 'Bộ Xây dựng', publisher: 'Bộ Xây dựng', url: 'https://moc.gov.vn' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
