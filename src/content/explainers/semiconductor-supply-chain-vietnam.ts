import type { Explainer } from '../../../shared/explainer'

export const semiconductorSupplyChainVietnam: Explainer = {
  id: 'semiconductor-supply-chain-vietnam',
  slug: 'semiconductor-supply-chain-vietnam',
  question: 'Chuỗi cung ứng bán dẫn vận hành thế nào và Việt Nam đứng ở khâu nào?',
  title: 'Bán dẫn: thiết kế, chế tạo, đóng gói - kiểm thử; Việt Nam mạnh ở khâu cuối, cần đi lên',
  topic: 'geopolitics-trade',
  tldr: 'Chuỗi bán dẫn gồm **thiết kế chip**, **chế tạo tại nhà máy wafer (fab)**, rồi **đóng gói và kiểm thử (ATP/OSAT)**, hỗ trợ bởi thiết bị và vật liệu chuyên dụng. Mỗi khâu tập trung ở ít quốc gia/doanh nghiệp, nên rất nhạy với địa chính trị. Việt Nam thường được đánh giá là hiện diện chủ yếu ở khâu lắp ráp, đóng gói, kiểm thử (đây là nhận định chung, chưa có số liệu trong bài); muốn tăng giá trị cần nhân lực kỹ thuật, điện ổn định và hệ sinh thái nhà cung cấp.',
  keyPoints: [
    'Khâu **thiết kế** (fabless) cần kỹ sư và công cụ EDA; khâu **chế tạo** đòi vốn khổng lồ và công nghệ khó sao chép; khâu **đóng gói - kiểm thử** cần vốn và nhân lực thấp hơn.',
    'Mỗi khâu thường tập trung ở một số ít nơi: điều này tạo **điểm nghẽn** khiến gián đoạn một nhà máy ảnh hưởng nhiều ngành, từ ô tô đến điện tử.',
    'Việt Nam thu hút đầu tư vào lắp ráp điện tử và một số cơ sở đóng gói - kiểm thử, hưởng lợi từ xu hướng đa dạng hóa chuỗi cung ứng.',
    'Muốn lên khâu cao hơn cần: kỹ sư vi mạch, điện và nước ổn định, nhà cung cấp vật liệu - hóa chất, ưu đãi đầu tư và đào tạo; đây là cuộc chơi nhiều năm, không nhanh. Theo Báo Đấu thầu (24/9/2024) về chiến lược bán dẫn của Chính phủ, mục tiêu đến 2030 gồm ít nhất 100 doanh nghiệp thiết kế, 1 nhà máy chế tạo quy mô nhỏ, 10 nhà máy đóng gói - kiểm thử và trên 50.000 nhân lực; đó là mục tiêu, chưa phải kết quả.',
    'Chính sách kiểm soát xuất khẩu công nghệ của các cường quốc ảnh hưởng tới thiết bị, vật liệu và nhân lực mà doanh nghiệp tại Việt Nam có thể tiếp cận.',
  ],
  causalChain: [
    { from: 'Nhu cầu chip tăng (AI, ô tô, thiết bị điện tử)', to: 'Công suất chế tạo và đóng gói trở thành nút thắt', mechanism: 'Xây fab mất nhiều năm và vốn lớn, nên cung không điều chỉnh nhanh theo cầu.' },
    { from: 'Rủi ro địa chính trị và tập trung sản xuất', to: 'Doanh nghiệp đa dạng hóa địa điểm đóng gói - kiểm thử', mechanism: 'Giảm phụ thuộc vào một nơi bằng cách mở cơ sở ở nước khác có chi phí hợp lý và quan hệ ổn định.' },
    { from: 'Đầu tư vào đóng gói - kiểm thử tại Việt Nam', to: 'Việc làm kỹ thuật và xuất khẩu tăng', mechanism: 'Nhà máy sử dụng nhân lực kỹ thuật, nhập wafer và xuất chip thành phẩm; giá trị gia tăng ở mức vừa.' },
    { from: 'Tích lũy năng lực nhân lực và nhà cung cấp', to: 'Cơ hội lên khâu thiết kế/vật liệu', mechanism: 'Kỹ sư tích lũy kinh nghiệm, doanh nghiệp nội địa tham gia chuỗi; cần chính sách đào tạo và ưu đãi đủ dài hạn.' },
  ],
  vietnamImpact: [
    { group: 'Lao động kỹ thuật, kỹ sư điện tử', effect: 'Cầu nhân lực tăng, tiền lương cải thiện; thiếu hụt kỹ sư vi mạch là nút thắt lớn.', direction: 'up' },
    { group: 'Doanh nghiệp FDI điện tử - bán dẫn', effect: 'Cơ hội mở rộng đóng gói - kiểm thử; chi phí điện, nhân lực và logistics quyết định sức cạnh tranh.', direction: 'up' },
    { group: 'Doanh nghiệp nội địa cung ứng vật liệu, cơ khí chính xác', effect: 'Cơ hội vào chuỗi nếu đạt chuẩn rất khắt khe về chất lượng và độ sạch.', direction: 'mixed' },
    { group: 'Ngân sách và cán cân thương mại', effect: 'Xuất khẩu tăng nhưng nhập wafer, thiết bị lớn nên giá trị giữ lại thấp hơn kim ngạch.', direction: 'mixed' },
    { group: 'Rủi ro chính sách', effect: 'Kiểm soát xuất khẩu công nghệ và thuế quan có thể làm thay đổi đơn hàng và đầu tư.', direction: 'down' },
  ],
  indicators: [
    { name: 'Doanh số bán dẫn toàn cầu', why: 'Chỉ báo chu kỳ ngành và nhu cầu.', where: 'Semiconductor Industry Association (SIA), World Semiconductor Trade Statistics' },
    { name: 'FDI vào điện tử, bán dẫn và các dự án đóng gói - kiểm thử', why: 'Đo mức hiện diện của chuỗi tại Việt Nam.', where: 'Cục Đầu tư nước ngoài (Bộ Tài chính), Cục Thống kê' },
    { name: 'Xuất khẩu và nhập khẩu linh kiện điện tử, mạch tích hợp', why: 'Cho thấy giá trị gia tăng thực sau khi trừ nhập khẩu.', where: 'Tổng cục Hải quan, Cục Thống kê (nso.gov.vn)' },
    { name: 'Số kỹ sư vi mạch được đào tạo; điện năng ổn định', why: 'Điều kiện cần để lên khâu cao hơn.', where: 'Bộ Giáo dục và Đào tạo, báo cáo của Bộ Công Thương' },
  ],
  counterpoints: [
    'Chu kỳ bán dẫn mạnh: cầu giảm có thể làm công suất dư và sa thải; đầu tư theo cao điểm dễ gặp rủi ro.',
    'Tham vọng lên khâu chế tạo wafer đòi vốn và công nghệ rất lớn, không chắc phù hợp quy mô hiện tại; chiến lược có thể nên nhắm khâu hẹp có lợi thế.',
    'Ưu đãi lớn thu hút FDI nhưng nếu không có liên kết nhà cung cấp nội địa thì lợi ích lan tỏa thấp.',
  ],
  glossary: [
    { term: 'Fab (nhà máy wafer)', definition: 'Cơ sở chế tạo chip trên tấm silicon (wafer).' },
    { term: 'Fabless', definition: 'Doanh nghiệp thiết kế chip nhưng thuê nơi khác chế tạo.' },
    { term: 'ATP / OSAT', definition: 'Lắp ráp, kiểm thử và đóng gói chip thành sản phẩm hoàn chỉnh.' },
    { term: 'EDA', definition: 'Phần mềm tự động hóa thiết kế điện tử, công cụ thiết yếu của thiết kế chip.' },
    { term: 'Kiểm soát xuất khẩu', definition: 'Quy định hạn chế xuất khẩu công nghệ, thiết bị hoặc sản phẩm nhạy cảm.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'semiconductor-supply-chain-vietnam-q',
    question: 'Xuất khẩu chip của một nước tăng mạnh, nhưng nước đó chủ yếu đóng gói - kiểm thử wafer nhập khẩu. Cách đánh giá hợp lý?',
    options: [
      { id: 'a', text: 'Nước đó đã nắm công nghệ lõi của ngành bán dẫn.', explain: 'Công nghệ lõi nằm ở thiết kế và chế tạo; đóng gói - kiểm thử là khâu giá trị thấp hơn.' },
      { id: 'b', text: 'Việc làm và xuất khẩu tăng, nhưng giá trị gia tăng và công nghệ lõi vẫn ở khâu khác; cần lộ trình nâng cấp.', correct: true, explain: 'Đúng. Kim ngạch phản ánh cả giá trị wafer nhập; phần giữ lại và năng lực công nghệ nhỏ hơn.' },
      { id: 'c', text: 'Không có lợi ích gì cho nền kinh tế vì chỉ là gia công.', explain: 'Vẫn có việc làm kỹ thuật và tích lũy năng lực; lợi ích có thật nhưng cần nâng cấp dần.' },
    ],
  },
  sources: [
    { title: 'Semiconductor industry', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Semiconductor_industry' },
    { title: 'Semiconductor device fabrication', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Semiconductor_device_fabrication' },
    { title: 'Vạch "đường băng" phát triển ngành công nghiệp bán dẫn (24/9/2024)', publisher: 'Báo Đấu thầu', url: 'https://baodauthau.vn/vach-duong-bang-phat-trien-nganh-cong-nghiep-ban-dan-post165340.html' },
    { title: 'Supply Chain Security', publisher: 'Semiconductor Industry Association', url: 'https://www.semiconductors.org/policies/supply-chain/' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 34,
}
