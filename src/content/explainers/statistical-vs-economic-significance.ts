import type { Explainer } from '../../../shared/explainer'

export const statisticalVsEconomicSignificance: Explainer = {
  id: 'statistical-vs-economic-significance',
  slug: 'statistical-vs-economic-significance',
  question: '“Có ý nghĩa thống kê” có nghĩa là tác động đủ lớn để quan tâm không?',
  title: 'Ý nghĩa thống kê cho biết tác động khó là ngẫu nhiên; ý nghĩa kinh tế hỏi tác động có đủ lớn để quan trọng',
  topic: 'macro',
  tldr: 'Kết quả **có ý nghĩa thống kê** (p-value nhỏ) nói rằng, nếu thực sự không có tác động thì rất khó thấy kết quả như vậy; nó không nói tác động **lớn**. Với mẫu rất lớn, một chênh lệch cực nhỏ vẫn có thể “có ý nghĩa thống kê”. Ngược lại mẫu nhỏ có thể bỏ lỡ tác động lớn. Khi đọc nghiên cứu hay báo cáo kinh tế, hãy đọc cả **độ lớn tác động** (effect size) và khoảng tin cậy, rồi hỏi nó đáng kể so với chi phí và lợi ích thực tế không.',
  keyPoints: [
    '**p-value** là xác suất thấy kết quả ít nhất cực đoan như đã quan sát, nếu giả thuyết “không có tác động” đúng. Nó không phải xác suất giả thuyết đúng, và không đo độ lớn.',
    '**Ví dụ giả định:** một chương trình đào tạo tăng lương bình quân 0,1% với p < 0,01 trên mẫu một triệu người. Có ý nghĩa thống kê nhưng 0,1% có thể không bù nổi chi phí chương trình, nên ý nghĩa kinh tế thấp.',
    'Ngược lại, thí nghiệm nhỏ cho thấy tăng lương 15% nhưng p = 0,10 chưa đạt ngưỡng 0,05; có thể vẫn đáng theo dõi, vì khoảng tin cậy rộng chứ không phải chứng minh “không có tác động”.',
    '**Độ lớn tác động (effect size)** và **khoảng tin cậy** cho biết quy mô và độ không chắc chắn; nên báo cáo chúng thay cho chỉ một dấu sao ý nghĩa. Tuyên bố năm 2016 của Hiệp hội Thống kê Hoa Kỳ (ASA) nêu rõ p-value hay ý nghĩa thống kê không đo độ lớn tác động hay tầm quan trọng của kết quả, và quyết định không nên chỉ dựa vào việc p vượt ngưỡng.',
    'Cẩn thận với kiểm định lặp (thử nhiều giả thuyết rồi chọn cái có p nhỏ), làm tăng kết quả dương tính giả; và với dữ liệu kinh tế, tương quan chuỗi thời gian làm p-value tự tin thái quá.',
  ],
  causalChain: [
    { from: 'Cỡ mẫu lớn', to: 'Sai số chuẩn nhỏ, p-value dễ nhỏ', mechanism: 'Chênh lệch rất nhỏ cũng tách khỏi nhiễu nên đạt ý nghĩa thống kê.' },
    { from: 'Kết quả có ý nghĩa thống kê', to: 'Cần ước lượng độ lớn tác động', mechanism: 'Ý nghĩa thống kê chỉ trả lời “có khác 0 không”, không trả lời “khác bao nhiêu”.' },
    { from: 'Độ lớn tác động ước lượng', to: 'So với chi phí, rủi ro và ngưỡng quyết định', mechanism: 'Ý nghĩa kinh tế là so sánh độ lớn với bối cảnh: lương, lợi nhuận, chi phí thực hiện chính sách.' },
    { from: 'Thử nhiều phép kiểm định', to: 'Kết quả dương tính giả', mechanism: 'Xác suất ít nhất một p nhỏ do ngẫu nhiên tăng theo số lần thử.' },
  ],
  vietnamImpact: [
    { group: 'Người đọc nghiên cứu, báo cáo chính sách', effect: 'Hỏi độ lớn và khoảng tin cậy, không chỉ “có ý nghĩa thống kê”.', direction: 'mixed' },
    { group: 'Doanh nghiệp chạy thử nghiệm A/B', effect: 'Thử nghiệm quy mô lớn dễ cho kết quả có ý nghĩa nhưng nhỏ về lợi nhuận; cần so với chi phí triển khai.', direction: 'mixed' },
    { group: 'Nhà hoạch định chính sách', effect: 'Quyết định dựa trên tác động đủ lớn và có độ chắc chắn hợp lý, không chỉ ngưỡng p.', direction: 'up' },
    { group: 'Nhà đầu tư dùng backtest', effect: 'Chiến lược “có ý nghĩa thống kê” sau nhiều lần thử có thể chỉ là ngẫu nhiên.', direction: 'down' },
  ],
  indicators: [
    { name: 'Độ lớn tác động quy về đơn vị dễ hiểu (đồng, %, điểm)', why: 'Cho phép so với chi phí và lợi ích thực tế.', where: 'Phần kết quả/phụ lục của nghiên cứu hoặc báo cáo' },
    { name: 'Khoảng tin cậy 95%', why: 'Cho thấy biên độ không chắc chắn; khoảng rộng nghĩa là kết luận yếu.', where: 'Bảng kết quả hồi quy hoặc thử nghiệm' },
    { name: 'Số phép kiểm định đã thử', why: 'Càng nhiều càng cần điều chỉnh p-value.', where: 'Phần phương pháp; tài liệu đăng ký trước nếu có' },
  ],
  counterpoints: [
    'Ngưỡng 0,05 là quy ước, không phải quy luật; coi p = 0,049 và 0,051 là khác hẳn là sai lầm.',
    'Tác động nhỏ trên quy mô lớn vẫn có thể quan trọng (ví dụ cải thiện nhỏ nhưng áp dụng cho hàng triệu người, chi phí gần bằng không).',
    'Ý nghĩa kinh tế phụ thuộc bối cảnh và giá trị; không có ngưỡng độ lớn chung cho mọi vấn đề.',
  ],
  glossary: [
    { term: 'p-value', definition: 'Xác suất thấy kết quả cực đoan như quan sát nếu giả thuyết không (không có tác động) đúng.' },
    { term: 'Ý nghĩa thống kê', definition: 'Kết quả khó giải thích bằng ngẫu nhiên theo ngưỡng đã chọn.' },
    { term: 'Độ lớn tác động', definition: 'Quy mô của chênh lệch hoặc tác động ước lượng.' },
    { term: 'Khoảng tin cậy', definition: 'Khoảng giá trị hợp lý của tham số được ước lượng ở một mức tin cậy.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'statistical-vs-economic-significance-q',
    question: 'Một thử nghiệm A/B trên 5 triệu lượt cho thấy nút mới tăng tỷ lệ mua từ 2,00% lên 2,01%, p < 0,001. Kết luận hợp lý?',
    options: [
      { id: 'a', text: 'Có ý nghĩa thống kê nên chắc chắn đáng triển khai.', explain: 'Mức tăng 0,01 điểm phần trăm rất nhỏ; cần so với chi phí và lợi nhuận tăng thêm.' },
      { id: 'b', text: 'Tác động có thật nhưng rất nhỏ; quyết định phụ thuộc vào lợi nhuận tăng thêm so với chi phí triển khai.', correct: true, explain: 'Đúng. Ý nghĩa thống kê không thay thế câu hỏi về độ lớn và chi phí.' },
      { id: 'c', text: 'Không có tác động vì chênh lệch quá nhỏ.', explain: 'p-value rất nhỏ cho thấy chênh lệch khó là ngẫu nhiên; vấn đề là quy mô, không phải tồn tại.' },
    ],
  },
  sources: [
    { title: 'ASA Statement on Statistical Significance and P-Values (thông cáo kèm 6 nguyên tắc, 2016)', publisher: 'American Statistical Association', url: 'https://www.amstat.org/asa/files/pdfs/p-valuestatement.pdf' },
    { title: 'Statistical significance', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Statistical_significance' },
    { title: 'Effect size', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Effect_size' },
    { title: 'p-value', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/P-value' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 119,
}
