import type { Explainer } from '../../../shared/explainer'

export const mortgageSecuritizationSubprimeLessons: Explainer = {
  id: 'mortgage-securitization-subprime-lessons',
  slug: 'mortgage-securitization-subprime-lessons',
  question: 'Chứng khoán hóa thế chấp hoạt động thế nào và nó góp phần gây ra khủng hoảng 2008 ra sao?',
  title: 'Chứng khoán hóa thế chấp và bài học khủng hoảng 2008',
  topic: 'real-estate',
  tldr: 'Chứng khoán hóa gom nhiều khoản vay thế chấp thành chứng khoán bán cho nhà đầu tư, chia thành các **lớp (tranche)** chịu lỗ theo thứ tự. Nó có thể mở rộng vốn cho vay nhà ở, nhưng khi người cho vay bán khoản vay đi thì **động cơ thẩm định giảm**, rủi ro bị đánh giá thấp và dồn qua nhiều lớp, và khi giá nhà đảo chiều thì vòng xoáy lan khắp hệ thống tài chính như năm 2007–2009.',
  keyPoints: [
    'Theo Wikipedia: người cho vay gom các khoản vay vào "pool", phát hành chứng khoán cho nhà đầu tư; chứng khoán thế chấp dưới chuẩn được chia thành các tranche với thứ tự ưu tiên trả nợ khác nhau, các lớp rủi ro cao thường được đóng gói lại thành CDO. Bài Wikipedia này có cảnh báo có thể chứa thông tin chưa kiểm chứng nên cần đối chiếu.',
    'Mô hình "originate-to-distribute" (cho vay rồi bán): theo Wikipedia, người cho vay thu phí và chuyển rủi ro đi, nên một khi đã bán khoản vay thì không còn lợi ích trong việc người vay có trả được hay không.',
    'Theo Federal Reserve History: chứng khoán thế chấp tư nhân (PMBS) cấp phần lớn vốn cho vay dưới chuẩn; rủi ro bị đánh giá thấp vì nhiều thước đo chất lượng dựa trên khoản vay chuẩn; sau tháng 4/2007 nhiều PMBS bị hạ bậc.',
    'Cũng theo Federal Reserve History: khi giá nhà đạt đỉnh, người vay không bán hoặc tái tài trợ được nữa, tịch thu nhà làm giá giảm thêm, siết tín dụng chồng lên; Fannie Mae và Freddie Mac bị chính phủ tiếp quản mùa hè 2008; Fed hạ lãi suất ngắn hạn gần 0% vào đầu 2009.',
    'Ví dụ giả định (tranche): pool 100 đơn vị, lớp ưu tiên 80, lớp trung gian 15, lớp vốn chủ 5. Lỗ 10 xóa sạch lớp vốn chủ (5) và 5 từ lớp trung gian (33% lớp này); lỗ 25 làm lớp ưu tiên mất 5/80 = 6,25% — nghĩa là lớp "an toàn" vẫn có thể lỗ khi giả định tổn thất sai.',
  ],
  causalChain: [
    { from: 'Nhu cầu vay nhà tăng, người cho vay bán khoản vay cho nhà đầu tư', to: 'Chuỗi cho vay chia nhỏ qua nhiều bên', mechanism: 'Người cho vay thu phí và chuyển rủi ro; kết nối giữa người vay và bên chịu rủi ro cuối cùng bị đứt (originate-to-distribute).' },
    { from: 'Động cơ thẩm định giảm, chuẩn cho vay nới', to: 'Tỷ trọng khoản vay chất lượng thấp tăng', mechanism: 'Khi giá nhà tăng, người vay vẫn bán hoặc tái tài trợ được nên rủi ro bị che giấu; dự kiến giá nhà tăng nuôi thêm cầu vay.' },
    { from: 'Chứng khoán tranche, CDO, xếp hạng cao', to: 'Rủi ro bị đánh giá thấp và lan sang nhiều tổ chức', mechanism: 'Lớp ưu tiên được coi gần như an toàn; mô hình dựa trên dữ liệu thời kỳ giá nhà tăng nên bỏ sót kịch bản giá giảm trên diện rộng.' },
    { from: 'Giá nhà đảo chiều', to: 'Vỡ nợ, hạ bậc, lỗ cho các tổ chức nắm chứng khoán', mechanism: 'Người vay không bán được để trả nợ, chứng khoán bị hạ bậc, nguồn vốn cho vay dưới chuẩn cạn kiệt.' },
    { from: 'Lỗ và siết tín dụng', to: 'Suy thoái kinh tế', mechanism: 'Xây dựng, của cải hộ gia đình, năng lực cho vay của ngân hàng và tiếp cận thị trường chứng khoán của doanh nghiệp đều suy giảm, theo Federal Reserve History.' },
  ],
  vietnamImpact: [
    { group: 'Người mua nhà vay ngân hàng', effect: 'Bài học: khoản vay lớn so với thu nhập và giá nhà tăng nhanh có thể thành rủi ro khi lãi suất hoặc giá đảo chiều; cần dự phòng lãi suất tăng.', direction: 'mixed' },
    { group: 'Ngân hàng và tổ chức tín dụng', effect: 'Giữ khoản vay trên bảng cân đối thì còn lợi ích thẩm định; nếu phát triển chứng khoán hóa nợ thế chấp, cần giữ phần rủi ro và kiểm soát chuẩn vay.', direction: 'mixed' },
    { group: 'Nhà đầu tư trái phiếu', effect: 'Xếp hạng cao không đồng nghĩa với an toàn tuyệt đối; cần hiểu tài sản bảo đảm và cấu trúc lớp.', direction: 'mixed' },
    { group: 'Nhà hoạch định chính sách', effect: 'Rủi ro hệ thống có thể tích tụ ở nơi khó thấy (đóng gói, đòn bẩy ngoài bảng); cần dữ liệu và giám sát liên ngành.', direction: 'mixed' },
    { group: 'Thị trường bất động sản', effect: 'Chu kỳ giá nhà - tín dụng có thể tự khuếch đại; bài học quốc tế là giá giảm kéo theo siết tín dụng.', direction: 'down' },
  ],
  indicators: [
    { name: 'Tỷ lệ cho vay trên giá trị tài sản (LTV) và tỷ lệ nợ trên thu nhập', why: 'Chất lượng chuẩn cho vay.', where: 'Ngân hàng Nhà nước; báo cáo ngân hàng' },
    { name: 'Tăng trưởng tín dụng bất động sản và nợ xấu', why: 'Dấu hiệu tích tụ rủi ro.', where: 'Ngân hàng Nhà nước; báo cáo ngành' },
    { name: 'Chênh lệch lợi suất chứng khoán dựa trên thế chấp với trái phiếu chính phủ', why: 'Thị trường định giá rủi ro thế nào.', where: 'Dữ liệu thị trường quốc tế (Fed, ngân hàng đầu tư)' },
    { name: 'Chỉ số giá nhà và tỷ lệ tịch thu tài sản', why: 'Hướng đi của rủi ro tín dụng nhà ở.', where: 'Cơ quan thống kê và ngân hàng trung ương' },
  ],
  counterpoints: [
    'Chứng khoán hóa không tự nó gây khủng hoảng: nó đóng vai trò khuếch đại khi chuẩn cho vay thấp, rủi ro bị đánh giá thấp và đòn bẩy cao; khủng hoảng 2008 là sản phẩm của nhiều yếu tố.',
    'Chứng khoán hóa có lợi ích khi cấu trúc minh bạch và chuẩn vay tốt: nó mở rộng nguồn vốn cho vay nhà ở và san sẻ rủi ro.',
    'Bài tóm tắt dựa trên một bài của Federal Reserve History và Wikipedia; các cải cách sau 2008 không được đề cập ở đây vì chưa đọc nguồn xác nhận.',
  ],
  glossary: [
    { term: 'Chứng khoán hóa', definition: 'Gom tài sản tạo dòng tiền (khoản vay) thành chứng khoán bán cho nhà đầu tư.' },
    { term: 'MBS', definition: 'Chứng khoán bảo đảm bằng khoản vay thế chấp.' },
    { term: 'Tranche', definition: 'Lớp chứng khoán có thứ tự ưu tiên nhận tiền và chịu lỗ khác nhau.' },
    { term: 'Subprime', definition: 'Khoản vay thế chấp cho người vay có tín dụng yếu, rủi ro cao hơn.' },
    { term: 'Originate-to-distribute', definition: 'Mô hình cho vay rồi bán khoản vay đi thay vì giữ trên bảng cân đối.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'mortgage-securitization-subprime-lessons-q',
    question: 'Điểm mấu chốt về động cơ khiến chuẩn cho vay yếu đi trong mô hình "cho vay rồi bán" là gì?',
    options: [
      { id: 'a', text: 'Người cho vay thu phí và chuyển rủi ro đi nên ít bị ảnh hưởng nếu người vay không trả được.', correct: true, explain: 'Đúng: theo Wikipedia, khi đã bán khoản vay, người cho vay không còn lợi ích trong việc người vay trả được hay không.' },
      { id: 'b', text: 'Pháp luật cấm kiểm tra thu nhập người vay.', explain: 'Không có căn cứ trong nguồn; vấn đề là động cơ, không phải cấm đoán.' },
      { id: 'c', text: 'Người cho vay luôn giữ lại toàn bộ rủi ro nên kiểm tra kỹ hơn.', explain: 'Ngược lại: mô hình chuyển rủi ro cho nhà đầu tư.' },
    ],
  },
  sources: [
    { title: 'The Subprime Mortgage Crisis', publisher: 'Federal Reserve History (Federal Reserve Board)', url: 'https://www.federalreservehistory.org/essays/subprime-mortgage-crisis' },
    { title: 'Mortgage-backed security', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Mortgage-backed_security' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 137,
}
