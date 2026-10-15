import type { Explainer } from '../../../shared/explainer'

export const auditorOpinionsReadingReports: Explainer = {
  id: 'auditor-opinions-reading-reports',
  slug: 'auditor-opinions-reading-reports',
  question: 'Đọc ý kiến kiểm toán: chấp nhận toàn phần, ngoại trừ, trái ngược và từ chối nghĩa là gì?',
  title: 'Đọc ý kiến kiểm toán: bốn loại ý kiến và điều chúng báo hiệu',
  topic: 'markets-investing',
  tldr: 'Báo cáo kiểm toán đưa ra một trong bốn loại ý kiến. **Chấp nhận toàn phần** (không sửa đổi) nghĩa là báo cáo phản ánh trung thực, hợp lý ở mọi khía cạnh trọng yếu. Ba loại **sửa đổi** là **ngoại trừ**, **trái ngược** và **từ chối đưa ra ý kiến**; loại nào do hai câu hỏi quyết định: vấn đề là *sai sót* hay *không đủ bằng chứng*, và ảnh hưởng chỉ *trọng yếu* hay còn *lan tỏa*. Ý kiến sạch chỉ là bảo đảm hợp lý, không phải bảo đảm tuyệt đối.',
  keyPoints: [
    '**Không sửa đổi (chấp nhận toàn phần):** báo cáo tài chính không có sai sót trọng yếu, thường dùng cụm "phản ánh trung thực và hợp lý, trên mọi khía cạnh trọng yếu" (theo ACCA).',
    '**Ngoại trừ (qualified):** có vấn đề trọng yếu nhưng *không lan tỏa*, dùng cụm "ngoại trừ"; áp dụng cho cả sai sót trọng yếu lẫn không thu thập đủ bằng chứng ở phạm vi giới hạn.',
    '**Trái ngược (adverse):** sai sót vừa trọng yếu vừa lan tỏa nên báo cáo tài chính nói chung không phản ánh trung thực.',
    '**Từ chối đưa ra ý kiến (disclaimer):** kiểm toán viên không thể thu thập đủ bằng chứng thích hợp và ảnh hưởng có thể vừa trọng yếu vừa lan tỏa.',
    '**Lan tỏa** là phán đoán nghề nghiệp: nếu người dùng vẫn dựa được vào các phần của báo cáo thì chỉ là trọng yếu; nếu cả báo cáo không thể tin cậy thì là lan tỏa (theo ACCA).',
  ],
  causalChain: [
    { from: 'Phát hiện sai sót trong báo cáo, mức độ trọng yếu nhưng giới hạn', to: 'Ý kiến ngoại trừ', mechanism: 'Kiểm toán viên "khoanh" phần có vấn đề trong đoạn cơ sở của ý kiến; phần còn lại vẫn được coi là trung thực.' },
    { from: 'Sai sót trọng yếu và lan tỏa khắp báo cáo', to: 'Ý kiến trái ngược', mechanism: 'Người dùng không thể dựa vào báo cáo như một tổng thể.' },
    { from: 'Không thể thu thập đủ bằng chứng (bị giới hạn phạm vi, thiếu tài liệu)', to: 'Ngoại trừ hoặc từ chối ý kiến', mechanism: 'Nếu phần chưa kiểm tra được là trọng yếu nhưng không lan tỏa thì ngoại trừ; nếu có thể trọng yếu và lan tỏa thì từ chối.' },
    { from: 'Ý kiến sửa đổi được công bố', to: 'Thị trường và bên cho vay đánh giá lại rủi ro', mechanism: 'Ý kiến sửa đổi làm giảm độ tin cậy của số liệu, ảnh hưởng định giá, điều kiện vay và uy tín quản trị.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cổ phiếu niêm yết', effect: 'Ý kiến ngoại trừ hoặc từ chối cần được đọc cùng phần "cơ sở" để biết vấn đề nằm ở khoản mục nào và lớn cỡ nào.', direction: 'down' },
    { group: 'Ngân hàng và bên cho vay', effect: 'Dùng báo cáo đã kiểm toán để đánh giá tín dụng; ý kiến sửa đổi thường kéo theo yêu cầu giải trình hoặc điều kiện thắt chặt hơn.', direction: 'down' },
    { group: 'Người mua trái phiếu doanh nghiệp', effect: 'Ý kiến kiểm toán là một nguồn thông tin quan trọng về độ tin cậy của số liệu tài chính của tổ chức phát hành.', direction: 'mixed' },
    { group: 'Doanh nghiệp được kiểm toán', effect: 'Ý kiến sạch giúp tiếp cận vốn dễ hơn, nhưng không bảo đảm hoạt động tốt hay không gian lận.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Loại ý kiến và đoạn "cơ sở của ý kiến"', why: 'Cho biết khoản mục và mức ảnh hưởng của vấn đề.', where: 'Báo cáo kiểm toán độc lập đi kèm báo cáo tài chính thường niên' },
    { name: 'Đoạn nghi ngờ khả năng hoạt động liên tục', why: 'Cảnh báo sớm về rủi ro tài chính, có thể đi kèm ý kiến sạch.', where: 'Báo cáo kiểm toán và thuyết minh báo cáo tài chính' },
    { name: 'Thay đổi công ty kiểm toán đột ngột', why: 'Có thể liên quan bất đồng; cần xem lý do.', where: 'Công bố thông tin của doanh nghiệp niêm yết, nghị quyết đại hội đồng cổ đông' },
    { name: 'Chênh lệch lợi nhuận trước và sau kiểm toán', why: 'Chênh lớn cho thấy điều chỉnh đáng kể sau kiểm toán.', where: 'Báo cáo tự lập so với báo cáo đã kiểm toán' },
  ],
  counterpoints: [
    'Ý kiến sạch chỉ là bảo đảm hợp lý, không loại trừ được gian lận tinh vi; Wikipedia dẫn một nghiên cứu (Venuti, 2004) cho rằng gần một nửa (48%) số công ty niêm yết được chọn mẫu phá sản năm 2001 (ở Mỹ) không có công bố nghi ngờ hoạt động liên tục trước đó.',
    'Phân biệt "trọng yếu" và "lan tỏa" là phán đoán nghề nghiệp, nên hai kiểm toán viên có thể chọn loại ý kiến khác nhau.',
    'Ý kiến sửa đổi không đồng nghĩa doanh nghiệp "xấu": cần đọc nguyên nhân (ví dụ giới hạn phạm vi do sự kiện bất khả kháng).',
  ],
  glossary: [
    { term: 'Trọng yếu', definition: 'Sai sót có thể ảnh hưởng quyết định kinh tế của người dùng báo cáo.' },
    { term: 'Lan tỏa', definition: 'Ảnh hưởng rộng đến mức làm báo cáo nói chung không đáng tin cậy.' },
    { term: 'Ý kiến ngoại trừ', definition: 'Ý kiến tốt với phần còn lại, trừ vấn đề được nêu.' },
    { term: 'Từ chối đưa ra ý kiến', definition: 'Kiểm toán viên không đưa ra kết luận vì không đủ bằng chứng.' },
    { term: 'Hoạt động liên tục', definition: 'Giả định doanh nghiệp tiếp tục hoạt động trong tương lai gần (khoảng 12 tháng).' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'auditor-opinions-reading-reports-q',
    question: 'Kiểm toán viên không thể kiểm chứng một khoản đầu tư rất lớn (ảnh hưởng có thể vừa trọng yếu vừa lan tỏa lên báo cáo). Ý kiến phù hợp nhất?',
    options: [
      { id: 'a', text: 'Ý kiến ngoại trừ vì chỉ một khoản mục.', explain: 'Ngoại trừ dành cho trường hợp trọng yếu nhưng không lan tỏa; ở đây ảnh hưởng có thể lan tỏa.' },
      { id: 'b', text: 'Từ chối đưa ra ý kiến.', correct: true, explain: 'Đúng. Không thu thập đủ bằng chứng và ảnh hưởng có thể vừa trọng yếu vừa lan tỏa dẫn đến từ chối ý kiến (theo bảng ma trận loại ý kiến của ACCA).' },
      { id: 'c', text: 'Ý kiến trái ngược.', explain: 'Trái ngược áp dụng khi đã có bằng chứng về sai sót trọng yếu và lan tỏa, không phải khi thiếu bằng chứng.' },
    ],
  },
  sources: [
    { title: 'Forming an audit opinion', publisher: 'ACCA', url: 'https://www.accaglobal.com/gb/en/student/exam-support-resources/fundamentals-exams-study-resources/f8/technical-articles/forming-an-audit-opinion.html' },
    { title: "Auditor's report", publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Auditor%27s_report' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 150,
}
