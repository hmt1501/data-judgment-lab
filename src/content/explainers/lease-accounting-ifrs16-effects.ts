import type { Explainer } from '../../../shared/explainer'

export const leaseAccountingIfrs16Effects: Explainer = {
  id: 'lease-accounting-ifrs16-effects',
  slug: 'lease-accounting-ifrs16-effects',
  question: 'Kế toán thuê tài sản (IFRS 16) làm nợ và EBITDA của doanh nghiệp thay đổi thế nào?',
  title: 'IFRS 16 đưa hầu hết hợp đồng thuê lên bảng cân đối: nợ tăng, EBITDA tăng, nhưng dòng tiền thật không đổi',
  topic: 'markets-investing',
  tldr: 'Theo trang IFRS 16 của IFRS Foundation, bên thuê phải ghi nhận **tài sản và nợ phải trả** cho mọi hợp đồng thuê có thời hạn trên 12 tháng (trừ ngoại lệ). Trước đây, thuê hoạt động chỉ ghi chi phí thuê vào lợi nhuận. Hệ quả: **nợ tăng, EBITDA tăng** (chi phí thuê chuyển thành khấu hao và lãi), còn tổng dòng tiền không đổi (IFRS 16 chỉ làm thay đổi cách trình bày: dòng tiền hoạt động giảm, dòng tiền tài chính tăng tương ứng). Khi so sánh doanh nghiệp, phải đọc kèm phương pháp kế toán và các chỉ số điều chỉnh.',
  keyPoints: [
    'Mô hình mới: bên thuê ghi **tài sản quyền sử dụng** và **nợ thuê** bằng giá trị hiện tại của các khoản trả thuê; sau đó khấu hao tài sản và tính lãi trên nợ.',
    'Tác động: chi phí thuê (trước nằm trong chi phí hoạt động) nay thành **khấu hao + chi phí lãi**, nên EBITDA cao hơn, EBIT tăng ít hơn, và nợ/EBITDA có thể tăng hoặc giảm tùy cách tính.',
    '**Ví dụ giả định:** thuê cửa hàng 100 triệu/năm trong 5 năm, chiết khấu 8%. Giá trị hiện tại của khoản trả ≈ 399 triệu được ghi thành nợ và tài sản. EBITDA tăng 100 triệu/năm, trong khi dòng tiền trả thuê vẫn 100 triệu/năm.',
    'Theo bản tóm tắt dự án IFRS 16 của IASB (tháng 1/2016), IASB và FASB (Mỹ) cùng yêu cầu bên thuê ghi nhận tài sản và nợ cho hợp đồng thuê, nhưng FASB giữ mô hình kép nên cách ghi nhận chi phí và trình bày dòng tiền của các hợp đồng trước đây là thuê hoạt động khác IFRS; IASB cho rằng tác động thực tế của khác biệt này thường không đáng kể với nhiều bên thuê. Vì vậy so sánh doanh nghiệp theo hai chuẩn vẫn cần lưu ý.',
    'Theo một nghiên cứu đăng trên Tạp chí Kinh tế và Tài chính, VAS 06 (Quyết định 165/2002/QĐ-BTC) vẫn giữ mô hình phân loại kép của IAS 17: thuê hoạt động không lên bảng cân đối mà ghi vào chi phí theo đường thẳng. Vì vậy báo cáo theo VAS và theo IFRS 16 không so sánh trực tiếp được. Quy định có thể đã thay đổi sau thời điểm nguồn đăng; cần kiểm tra thuyết minh báo cáo tài chính và văn bản hiện hành.',
  ],
  causalChain: [
    { from: 'Doanh nghiệp ký hợp đồng thuê dài hạn', to: 'Ghi nhận tài sản quyền sử dụng và nợ thuê', mechanism: 'Giá trị hiện tại của các khoản thuê tương lai được chiết khấu và đưa lên bảng cân đối.' },
    { from: 'Chi phí thuê tách thành khấu hao và lãi', to: 'EBITDA tăng', mechanism: 'EBITDA loại khấu hao và lãi nên không còn trừ chi phí thuê.' },
    { from: 'Nợ thuê cộng vào nợ', to: 'Nợ/vốn chủ và nợ/EBITDA thay đổi', mechanism: 'Tử số tăng, mẫu số EBITDA cũng tăng; kết quả tùy tỷ lệ.' },
    { from: 'Lãi tính trên nợ giảm dần theo thời gian', to: 'Chi phí giai đoạn đầu cao hơn giai đoạn sau', mechanism: 'Lãi tính trên dư nợ nên lớn ở đầu hợp đồng, làm lợi nhuận đầu kỳ thấp hơn mô hình cũ.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư so sánh doanh nghiệp bán lẻ, hàng không, vận tải', effect: 'Ngành thuê nhiều tài sản có EBITDA và nợ thay đổi đáng kể, nên cần dùng chỉ số đã điều chỉnh để so sánh.', direction: 'mixed' },
    { group: 'Doanh nghiệp Việt Nam có cổ đông hoặc công ty mẹ nước ngoài', effect: 'Có thể phải báo cáo hợp nhất theo IFRS, tạo chênh lệch với số liệu VAS.', direction: 'mixed' },
    { group: 'Ngân hàng cho vay', effect: 'Điều khoản vay gắn với tỷ lệ nợ/EBITDA cần xác định có tính nợ thuê hay không.', direction: 'mixed' },
    { group: 'Người phân tích dữ liệu', effect: 'Cần chuẩn hóa các chỉ số (EBITDA trước/sau IFRS 16) trước khi so sánh theo thời gian.', direction: 'up' },
  ],
  indicators: [
    { name: 'EBITDA trước và sau thuê (EBITDAaL)', why: 'Cho thấy lợi nhuận hoạt động sau chi phí thuê, so sánh được giữa công ty.', where: 'Thuyết minh báo cáo tài chính; báo cáo thường niên' },
    { name: 'Nợ thuê trong tổng nợ', why: 'Tách nợ vay ngân hàng khỏi nợ thuê khi đánh giá đòn bẩy.', where: 'Bảng cân đối và thuyết minh về thuê' },
    { name: 'Dòng tiền trả gốc thuê trong hoạt động tài chính', why: 'Dòng tiền thực không đổi nhưng phân loại khác nhau.', where: 'Báo cáo lưu chuyển tiền tệ' },
  ],
  counterpoints: [
    'Một số nhà phân tích coi thuê là chi phí hoạt động thực sự và thích EBITDA sau thuê để phản ánh kinh tế.',
    'Giả định thời hạn thuê (gia hạn chắc chắn hay không) và tỷ lệ chiết khấu ảnh hưởng nhiều tới số liệu, nên con số có yếu tố ước tính.',
    'Hợp đồng thuê từ 12 tháng trở xuống và tài sản giá trị thấp được miễn, nên không phải mọi khoản thuê đều lên bảng.',
  ],
  glossary: [
    { term: 'Tài sản quyền sử dụng', definition: 'Tài sản ghi nhận quyền dùng tài sản thuê trong thời hạn hợp đồng.' },
    { term: 'Nợ thuê', definition: 'Giá trị hiện tại của các khoản trả thuê chưa thanh toán.' },
    { term: 'EBITDA', definition: 'Lợi nhuận trước lãi vay, thuế, khấu hao và phân bổ.' },
    { term: 'Thuê hoạt động', definition: 'Cách phân loại cũ: thuê không chuyển giao phần lớn rủi ro và lợi ích sở hữu, chỉ ghi chi phí thuê.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'lease-accounting-ifrs16-effects-q',
    question: 'Một chuỗi bán lẻ chuyển sang báo cáo theo IFRS 16, EBITDA tăng 15% so với năm trước dù doanh thu và dòng tiền hoạt động gần như không đổi. Giải thích hợp lý nhất?',
    options: [
      { id: 'a', text: 'Hiệu quả kinh doanh cải thiện mạnh.', explain: 'Doanh thu và dòng tiền không đổi nên khó là cải thiện thật.' },
      { id: 'b', text: 'Chủ yếu do chuyển chi phí thuê thành khấu hao và lãi, nên không so sánh trực tiếp với kỳ trước khi chưa điều chỉnh.', correct: true, explain: 'Đúng. Đây là thay đổi cách trình bày; cần EBITDA sau thuê hoặc số liệu cùng chuẩn để so sánh.' },
      { id: 'c', text: 'Doanh nghiệp đã trả hết nợ thuê.', explain: 'Ngược lại, nợ thuê được ghi nhận thêm lên bảng.' },
    ],
  },
  sources: [
    { title: 'IFRS 16 Leases', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases/' },
    { title: 'IFRS 16 Leases – Project Summary and Feedback Statement (January 2016)', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/-/media/project/leases/ifrs/published-documents/ifrs16-project-summary.pdf' },
    { title: 'Tác động của IFRS 16 đối với các doanh nghiệp hàng không Việt Nam: Trường hợp Vietnam Airlines và VietJet Air', publisher: 'Tạp chí Kinh tế và Tài chính', url: 'https://nghiencuu.tapchikinhtetaichinh.vn/tac-dong-cua-ifrs-16-doi-voi-cac-doanh-nghiep-hang-khong-viet-nam-truong-hop-vietnam-airlines-va-vietjet-air-165742.html' },
    { title: 'IFRS 16', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/IFRS_16' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 113,
}
