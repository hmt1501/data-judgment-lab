import type { Explainer } from '../../../shared/explainer'

export const realEstateCycle: Explainer = {
  id: 'real-estate-cycle',
  slug: 'real-estate-cycle',
  question: 'Chu kỳ bất động sản là gì và làm sao biết thị trường đang ở pha nào?',
  title: 'Chu kỳ bất động sản: các pha, động lực và chỉ báo nhận diện',
  topic: 'real-estate',
  tldr: 'Thị trường BĐS thường đi theo chu kỳ **phục hồi → tăng trưởng → sốt/đỉnh → suy giảm/đóng băng**, do độ trễ giữa cầu và nguồn cung (dự án mất nhiều năm mới ra hàng) cộng với **tín dụng, lãi suất và pháp lý** thay đổi. Không có công thức chính xác để biết đỉnh/đáy, nhưng có thể nhận diện pha qua thanh khoản, tồn kho, lãi vay, tín dụng BĐS và số dự án mới. Mỗi phân khúc (căn hộ, đất nền, nhà ở xã hội, BĐS công nghiệp) có thể ở pha khác nhau.',
  keyPoints: [
    '**Bốn pha thường gặp:** phục hồi (giao dịch tăng dần, giá chưa tăng nhiều), tăng trưởng (giá và thanh khoản cùng tăng, nhiều dự án mới), sốt/đỉnh (giá tăng nhanh hơn thu nhập, đầu cơ và đòn bẩy cao), suy giảm (thanh khoản cạn, tồn kho tăng, giá chào bán chững hoặc giảm).',
    '**Tín dụng và lãi suất** là động lực mạnh nhất ngắn hạn: phần lớn giao dịch và dự án dùng vốn vay, nên khi lãi suất tăng hoặc ngân hàng siết, cầu và khả năng triển khai dự án cùng giảm.',
    '**Pháp lý và nguồn cung** tạo độ trễ: dự án mất nhiều năm từ chuẩn bị đến mở bán; khi pháp lý vướng, nguồn cung mới giảm, đẩy giá ở phân khúc khan hiếm dù thanh khoản chung yếu.',
    '**Thanh khoản thường đổi chiều trước giá:** ở đầu pha suy giảm, giá chào bán còn neo cao nhưng số giao dịch thành công giảm mạnh; ở đầu pha phục hồi, giao dịch tăng trước khi giá tăng.',
    'Năm 2026, lãi vay mua nhà tăng trở lại sau giai đoạn lãi thấp; đây là ví dụ về việc điều kiện tín dụng thay đổi có thể làm chuyển pha. Bài viết mang tính giáo dục, không phải khuyến nghị đầu tư.',
  ],
  causalChain: [
    { from: 'Lãi suất thấp, tín dụng nới', to: 'Cầu mua nhà và đầu tư tăng', mechanism: 'Chi phí vay rẻ làm khoản trả hàng tháng dễ chịu; nhà đầu tư dùng đòn bẩy nhiều hơn vì lợi nhuận kỳ vọng cao hơn chi phí vốn.' },
    { from: 'Cầu mua nhà và đầu tư tăng', to: 'Giá và thanh khoản tăng, chủ đầu tư mở thêm dự án', mechanism: 'Tồn kho giảm, giá tăng; chủ đầu tư tăng mua quỹ đất và khởi công dự án mới để đón cầu.' },
    { from: 'Giá và thanh khoản tăng, chủ đầu tư mở thêm dự án', to: 'Đầu cơ và đòn bẩy lên cao, giá vượt thu nhập', mechanism: 'Giá tăng thu hút người mua để bán lại; giá xa dần khả năng chi trả của người mua để ở.' },
    { from: 'Đầu cơ và đòn bẩy lên cao, giá vượt thu nhập', to: 'Chính sách siết hoặc lãi suất tăng', mechanism: 'Cơ quan quản lý hạn chế tín dụng rủi ro, hoặc lãi suất tăng do lạm phát/tỷ giá; chi phí nắm giữ BĐS tăng.' },
    { from: 'Chính sách siết hoặc lãi suất tăng', to: 'Thanh khoản cạn, tồn kho tăng, giá điều chỉnh', mechanism: 'Người mua mới chờ đợi; người dùng đòn bẩy phải bán; nguồn cung đã khởi công trước đó vẫn ra hàng, làm tồn kho tăng.' },
    { from: 'Thanh khoản cạn, tồn kho tăng, giá điều chỉnh', to: 'Phục hồi khi lãi suất giảm và pháp lý được tháo gỡ', mechanism: 'Giá đã điều chỉnh, lãi suất giảm và dự án được gỡ vướng giúp người mua để ở quay lại trước, mở đầu chu kỳ mới.' },
  ],
  vietnamImpact: [
    { group: 'Người mua nhà để ở', effect: 'Pha suy giảm có thể là cơ hội thương lượng giá, nhưng thường đi kèm lãi vay cao và khó vay; cần ưu tiên khả năng trả nợ hơn là "bắt đáy".', direction: 'mixed' },
    { group: 'Nhà đầu tư dùng đòn bẩy', effect: 'Hưởng lợi lớn ở pha tăng trưởng nhưng chịu rủi ro cao nhất ở pha suy giảm khi phải bán lúc thanh khoản cạn.', direction: 'mixed' },
    { group: 'Chủ đầu tư', effect: 'Pha suy giảm gây áp lực dòng tiền, nợ trái phiếu và vay ngân hàng; doanh nghiệp có quỹ đất sạch, pháp lý đầy đủ phục hồi nhanh hơn.', direction: 'down' },
    { group: 'Ngân hàng', effect: 'Dư nợ BĐS lớn khiến chất lượng tài sản nhạy với chu kỳ; nợ xấu thường tăng với độ trễ sau khi thị trường suy giảm.', direction: 'mixed' },
    { group: 'Ngành vật liệu xây dựng, nội thất, môi giới', effect: 'Doanh thu đi theo số dự án khởi công và giao dịch; biến động mạnh theo pha chu kỳ.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Lãi suất cho vay mua nhà và lãi suất điều hành', why: 'Thay đổi chi phí vốn thường dẫn dắt thay đổi cầu với độ trễ vài quý.', where: 'NHNN; biểu lãi suất ngân hàng thương mại' },
    { name: 'Tăng trưởng tín dụng kinh doanh BĐS', why: 'Cho biết dòng vốn đang chảy vào hay rút khỏi thị trường.', where: 'Báo cáo, thông cáo của NHNN' },
    { name: 'Số giao dịch thành công, tồn kho và tỷ lệ hấp thụ', why: 'Thanh khoản thường đổi chiều trước giá; tồn kho tăng là dấu hiệu sớm của pha suy giảm.', where: 'Báo cáo thị trường BĐS hằng quý của Bộ Xây dựng; báo cáo của công ty nghiên cứu thị trường' },
    { name: 'Số dự án được cấp phép, mở bán mới', why: 'Đo nguồn cung tương lai và mức độ tự tin của chủ đầu tư.', where: 'Bộ Xây dựng; Sở Xây dựng các tỉnh' },
    { name: 'Tỷ lệ giá nhà trên thu nhập', why: 'Giá tăng nhanh hơn thu nhập kéo dài là dấu hiệu thị trường dựa nhiều vào đầu cơ và đòn bẩy.', where: 'Thu nhập: Cục Thống kê; giá: báo cáo thị trường' },
  ],
  counterpoints: [
    'Chu kỳ không đều: độ dài và biên độ mỗi pha phụ thuộc chính sách, sốc kinh tế và pháp lý, nên các quy luật kiểu "chu kỳ 10 năm" chỉ nên xem là tham khảo.',
    'Thị trường BĐS phân mảnh theo địa phương và phân khúc: nhà ở xã hội, căn hộ trung cấp ở đô thị lớn có thể thiếu cung và giữ giá trong khi đất nền vùng ven giảm mạnh.',
    'Chính sách có thể rút ngắn hoặc kéo dài pha suy giảm (tháo gỡ pháp lý, hỗ trợ tín dụng); vì vậy dự báo đáy/đỉnh chỉ dựa trên giá quá khứ thường sai.',
  ],
  glossary: [
    { term: 'Thanh khoản thị trường', definition: 'Mức độ dễ dàng mua bán thành công; đo bằng số giao dịch và thời gian bán.' },
    { term: 'Tỷ lệ hấp thụ', definition: 'Tỷ lệ số sản phẩm bán được trên số sản phẩm chào bán trong một kỳ.' },
    { term: 'Tồn kho', definition: 'Sản phẩm đã chào bán hoặc hoàn thành nhưng chưa bán được.' },
    { term: 'Đòn bẩy', definition: 'Dùng vốn vay để mua tài sản; khuếch đại cả lãi và lỗ.' },
    { term: 'Độ trễ nguồn cung', definition: 'Khoảng thời gian dài từ khi quyết định làm dự án đến khi có sản phẩm, khiến cung phản ứng chậm với cầu.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'real-estate-cycle-q',
    question: 'Giá chào bán căn hộ ở một khu vực vẫn đứng ở mức cao, nhưng số giao dịch thành công giảm mạnh 3 quý liền và lãi vay mua nhà đang tăng. Nhận định nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Thị trường vẫn khỏe vì giá chưa giảm.', explain: 'Giá chào bán thường "dính" và phản ứng chậm; thanh khoản giảm kéo dài là dấu hiệu sớm của pha suy giảm, giá giao dịch thực có thể đã thấp hơn giá chào.' },
      { id: 'b', text: 'Có dấu hiệu chuyển sang pha suy giảm; cần theo dõi tồn kho, tín dụng BĐS và giá giao dịch thực để xác nhận.', correct: true, explain: 'Đúng. Thanh khoản đổi chiều trước giá, và lãi vay tăng làm cầu yếu thêm. Kết hợp nhiều chỉ báo giúp tránh kết luận vội từ một con số.' },
      { id: 'c', text: 'Đây chắc chắn là đáy, nên mua ngay.', explain: 'Không có chỉ báo đơn lẻ nào xác định đáy; ở đáy thường thấy thanh khoản bắt đầu tăng lại và giá đã điều chỉnh, chứ không phải giá còn cao trong khi giao dịch giảm.' },
    ],
  },
  sources: [
    { title: 'Bộ Xây dựng', publisher: 'Bộ Xây dựng', url: 'https://moc.gov.vn' },
    { title: 'Ngân hàng Nhà nước Việt Nam', publisher: 'NHNN', url: 'https://www.sbv.gov.vn' },
    { title: 'Vietnam Overview', publisher: 'World Bank', url: 'https://www.worldbank.org/en/country/vietnam' },
    { title: 'Rủi ro lớn dần khi lãi suất thả nổi vay mua nhà tăng cao', publisher: 'VietnamFinance', url: 'https://vietnamfinance.vn/rui-ro-lon-dan-khi-lai-suat-tha-noi-vay-mua-nha-tang-cao-d149495.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
