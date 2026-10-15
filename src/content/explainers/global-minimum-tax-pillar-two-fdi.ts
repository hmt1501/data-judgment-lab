import type { Explainer } from '../../../shared/explainer'

export const globalMinimumTaxPillarTwoFdi: Explainer = {
  id: 'global-minimum-tax-pillar-two-fdi',
  slug: 'global-minimum-tax-pillar-two-fdi',
  question: 'Thuế tối thiểu toàn cầu (Pillar Two) ảnh hưởng thế nào tới việc thu hút FDI?',
  title: 'Thuế tối thiểu toàn cầu (Pillar Two) và cạnh tranh thu hút FDI',
  topic: 'geopolitics-trade',
  tldr: 'Pillar Two đặt mức thuế hiệu quả tối thiểu **15%** cho các tập đoàn đa quốc gia lớn. Nước nào miễn giảm thuế khiến tập đoàn nộp dưới 15% thì nước khác có thể thu phần chênh lệch; vì vậy ưu đãi thuế suất thấp mất sức hút và các nước phải chuyển sang ưu đãi kiểu khác. Việt Nam đã nội luật hóa qua Nghị quyết 107/2023/QH15 và Nghị định 236/2025/NĐ-CP.',
  keyPoints: [
    'Theo Wikipedia: thuế tối thiểu toàn cầu 15% thuộc Trụ cột 2 của OECD/G20 Inclusive Framework nhằm giảm cạnh tranh thuế và chuyển lợi nhuận; tháng 10/2021, 137 nước chấp thuận tuyên bố hai trụ cột; mỗi nước thực hiện qua luật riêng; Mỹ rút khỏi thỏa thuận theo sắc lệnh tháng 01/2025 và đến tháng 01/2026 có "thỏa thuận song song" miễn Pillar Two cho công ty có trụ sở Mỹ.',
    'Theo Vietnam Briefing (05/09/2025): Việt Nam ban hành Nghị quyết 107/2023/QH15; Nghị định 236/2025/NĐ-CP ban hành 29/08/2025, có hiệu lực 15/10/2025 và áp dụng hồi tố từ năm tài chính 2024; thuế suất 15%; áp dụng cho tập đoàn đa quốc gia có doanh thu hợp nhất ít nhất 750 triệu EUR trong ít nhất 2 trong 4 năm liền trước.',
    'QDMTT (thuế bổ sung tối thiểu nội địa đủ điều kiện) áp dụng cho các thực thể đặt tại Việt Nam của tập đoàn thuộc phạm vi; IIR (quy tắc bao gồm thu nhập) áp dụng cho thực thể ở nước ngoài có công ty mẹ đặt tại Việt Nam. Bài này không nêu cách xử lý ưu đãi đầu tư và các khoản hỗ trợ.',
    'Cơ chế bổ sung (ví dụ giả định, đơn giản hóa, bỏ qua các khoản loại trừ): tập đoàn có lợi nhuận tính thuế 100 và chỉ nộp 10 do ưu đãi → thuế bổ sung khoảng 5 để đạt 15%. Ưu đãi giảm thuế suất khi đó chủ yếu chuyển tiền từ nước sở tại sang nước khác nếu nước sở tại không tự thu.',
    'Điểm chuyển hướng: các nước không còn dựa vào thuế suất thấp mà dựa vào hạ tầng, nhân lực, thủ tục, ưu đãi dạng hỗ trợ chi phí; tác động lên dòng FDI thực tế còn đang được quan sát.',
  ],
  causalChain: [
    { from: 'Tập đoàn lớn nhận ưu đãi thuế suất thấp ở nước sở tại', to: 'Thuế hiệu quả dưới 15%', mechanism: 'Miễn giảm làm tỷ lệ thuế thực tế trên lợi nhuận theo quy tắc quốc tế thấp hơn ngưỡng tối thiểu.' },
    { from: 'Quy tắc Pillar Two có hiệu lực', to: 'Phần chênh lệch có thể bị thu bổ sung', mechanism: 'Nước sở tại thu bằng QDMTT nếu có; nếu không, nước của công ty mẹ có thể thu qua IIR; như vậy ưu đãi không còn giữ được lợi ích với tập đoàn.' },
    { from: 'Lợi ích của ưu đãi thuế suất thấp giảm', to: 'Sức hút dựa vào thuế suất suy yếu', mechanism: 'Doanh nghiệp so sánh các địa điểm theo yếu tố thực (chi phí, nhân lực, chuỗi cung ứng) nhiều hơn.' },
    { from: 'Nước sở tại muốn giữ FDI', to: 'Chuyển sang ưu đãi kiểu khác và cải thiện môi trường', mechanism: 'Đầu tư hạ tầng, đào tạo, đơn giản thủ tục hoặc ưu đãi dựa trên chi tiêu thay vì thuế suất.' },
  ],
  vietnamImpact: [
    { group: 'Tập đoàn FDI lớn đang hưởng ưu đãi thuế', effect: 'Thuế hiệu quả có thể tăng lên 15% nếu họ thuộc phạm vi; kế hoạch tài chính và tuân thủ phức tạp hơn.', direction: 'down' },
    { group: 'Ngân sách nhà nước', effect: 'Có khả năng thu thêm thuế bổ sung nội địa thay vì để nước khác thu; mức thực tế phụ thuộc phạm vi và quy định chi tiết.', direction: 'up' },
    { group: 'Chính sách thu hút FDI', effect: 'Cần chuyển sang ưu đãi không dựa chủ yếu vào thuế suất thấp, như hạ tầng, nhân lực, thủ tục.', direction: 'mixed' },
    { group: 'Doanh nghiệp trong nước, ngoài phạm vi', effect: 'Không bị ảnh hưởng trực tiếp (dưới ngưỡng 750 triệu EUR), nhưng có thể thấy thay đổi gián tiếp qua chuỗi cung ứng và chính sách ưu đãi.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Vốn FDI đăng ký và thực hiện', why: 'Theo dõi liệu quy định mới có làm thay đổi dòng vốn.', where: 'Cục Đầu tư nước ngoài (Bộ Tài chính), Cục Thống kê' },
    { name: 'Số tập đoàn nộp kê khai theo Pillar Two và số thuế bổ sung thu được', why: 'Cho biết tác động thực tế tới ngân sách.', where: 'Cơ quan thuế, báo cáo của Bộ Tài chính' },
    { name: 'Danh sách các nước áp dụng QDMTT/IIR', why: 'Quyết định mức độ cạnh tranh giữa các địa điểm.', where: 'OECD (Inclusive Framework)' },
    { name: 'Chính sách ưu đãi mới thay thế ưu đãi thuế suất', why: 'Cho biết hướng cạnh tranh sau Pillar Two.', where: 'Chính phủ, Bộ Tài chính' },
  ],
  counterpoints: [
    'Pillar Two chỉ áp dụng cho tập đoàn rất lớn; phần lớn doanh nghiệp, kể cả nhiều doanh nghiệp FDI vừa và nhỏ, không thuộc phạm vi.',
    'Tác động tới FDI thực tế còn bất định: yếu tố như nhân lực, chuỗi cung ứng và thị trường thường quyết định hơn thuế suất; mặt khác, thỏa thuận song song cho công ty Mỹ làm bức tranh cạnh tranh phức tạp hơn.',
    'Các chỉ trích: một số học giả cho rằng 15% là thấp, một số nước thu nhập thấp và trung bình chỉ trích thỏa thuận chưa đem lại giải pháp công bằng cho việc phân bổ lại quyền đánh thuế toàn cầu (theo Wikipedia).',
  ],
  glossary: [
    { term: 'Pillar Two (GloBE)', definition: 'Bộ quy tắc thuế tối thiểu toàn cầu 15% cho tập đoàn đa quốc gia lớn.' },
    { term: 'QDMTT', definition: 'Thuế bổ sung tối thiểu nội địa đủ điều kiện, nước sở tại tự thu phần chênh lệch.' },
    { term: 'IIR', definition: 'Quy tắc bao gồm thu nhập: nước của công ty mẹ thu thuế bổ sung cho các công ty con chịu thuế thấp.' },
    { term: 'Thuế hiệu quả', definition: 'Thuế thực nộp chia lợi nhuận, khác với thuế suất danh nghĩa.' },
    { term: 'Ưu đãi thuế', definition: 'Miễn giảm thuế để thu hút đầu tư.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'global-minimum-tax-pillar-two-fdi-q',
    question: 'Ví dụ giả định đơn giản hóa: một tập đoàn trong phạm vi Pillar Two có lợi nhuận tính thuế 200 tại nước A và nộp thuế 20 nhờ ưu đãi. Phần thuế bổ sung để đạt 15% là bao nhiêu?',
    options: [
      { id: 'a', text: '10 (vì 15% × 200 = 30, trừ 20 đã nộp).', correct: true, explain: 'Đúng. Thuế hiệu quả hiện tại là 10%; cần thêm 5 điểm phần trăm × 200 = 10. Thực tế còn có các khoản loại trừ, bài tập đã bỏ qua.' },
      { id: 'b', text: '30.', explain: 'Sai. Đây là tổng thuế ở 15%; đã nộp 20 nên chỉ phải bổ sung 10.' },
      { id: 'c', text: '0, vì ưu đãi được pháp luật nước A cho phép.', explain: 'Sai. Pillar Two nhằm thu phần chênh lệch cho dù ưu đãi hợp pháp.' },
    ],
  },
  sources: [
    { title: 'Global Minimum Tax Implementation in Vietnam: Key Features of Decree 236 (05/09/2025)', publisher: 'Vietnam Briefing (Dezan Shira & Associates)', url: 'https://www.china-briefing.com/china-outbound-news/global-minimum-tax-implementation-in-vietnam-decree-236' },
    { title: 'Global minimum tax', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Global_minimum_tax' },
    { title: 'Nghị định 236/2025/NĐ-CP ngày 29/08/2025 quy định chi tiết Nghị quyết 107/2023/QH15 (bản PDF do Văn phòng UBND tỉnh Đắk Lắk đăng)', publisher: 'Chính phủ Việt Nam', url: 'https://vpubnd.daklak.gov.vn/CMS/Content/VanBan/2025/THANG%209/ND%20236_2025_ND-CP.pdf' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 179,
}
