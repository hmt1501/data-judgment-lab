import type { Explainer } from '../../../shared/explainer'

export const evEbitdaVsPeMultiples: Explainer = {
  id: 'ev-ebitda-vs-pe-multiples',
  slug: 'ev-ebitda-vs-pe-multiples',
  question: 'EV/EBITDA và P/E khác nhau thế nào, nên dùng cái nào khi nào?',
  title: 'P/E nhìn vốn chủ sở hữu, EV/EBITDA nhìn cả doanh nghiệp: chọn theo cấu trúc nợ và loại hình',
  topic: 'markets-investing',
  tldr: '**P/E** so giá cổ phiếu với lợi nhuận sau thuế, nên chịu ảnh hưởng của nợ vay, thuế và khấu hao. **EV/EBITDA** so giá trị doanh nghiệp (vốn hóa + nợ − tiền, cộng thêm các khoản tương đương nợ) với lợi nhuận trước lãi, thuế, khấu hao, nên trung lập với cấu trúc vốn. Hai doanh nghiệp cùng bản chất kinh doanh nhưng nợ khác nhau có P/E khác nhau mà EV/EBITDA giống nhau.',
  keyPoints: [
    'Theo Wikipedia (Enterprise value): EV = vốn hóa thị trường + nợ (theo giá thị trường) + cổ phiếu ưu đãi + các khoản như quỹ hưu trí chưa tài trợ + lợi ích cổ đông thiểu số, trừ tiền và tương đương tiền (và giá trị công ty liên kết). EV được mô tả là "trung lập về cấu trúc vốn".',
    'P/E của doanh nghiệp vay nợ cao thường biến động mạnh hơn, vì lãi vay làm lợi nhuận sau thuế nhạy với doanh thu; EV/EBITDA bỏ qua phần lãi vay nên dễ so sánh doanh nghiệp có đòn bẩy khác nhau và dùng khi định giá thâu tóm toàn bộ doanh nghiệp.',
    'Ví dụ giả định: công ty A vốn hóa 1.000, không nợ, EBITDA 150, lợi nhuận sau thuế 90 → P/E ≈ 11,1; EV/EBITDA ≈ 6,67. Công ty B vốn hóa 600, nợ 500, tiền 100 → EV = 1.000, EBITDA 150, lợi nhuận sau thuế 40 (sau lãi vay) → P/E = 15; EV/EBITDA ≈ 6,67. Cùng EV/EBITDA, khác P/E do nợ.',
    'Giới hạn của EV theo Wikipedia: phần lớn nợ doanh nghiệp không có giá thị trường nên thường lấy theo giá trị sổ sách; sổ sách của công ty liên kết, lợi ích thiểu số có thể lệch xa giá thị trường; dữ liệu tiền và nợ công bố theo kỳ nên có độ trễ.',
    'EBITDA bỏ qua chi tiêu vốn và khấu hao, nên không thay được dòng tiền tự do; xem thêm bài về giới hạn của EBITDA và kế toán thuê tài sản.',
  ],
  causalChain: [
    { from: 'Doanh nghiệp tăng vay nợ', to: 'Lãi vay tăng, lợi nhuận sau thuế nhạy hơn với doanh thu', mechanism: 'Lãi vay là chi phí cố định nên khi doanh thu đổi, lợi nhuận sau thuế đổi theo tỷ lệ lớn hơn; P/E vì thế biến động mạnh hơn.' },
    { from: 'Doanh nghiệp tăng vay nợ', to: 'EV/EBITDA ít đổi khi chỉ khác cấu trúc vốn', mechanism: 'EV cộng nợ vào vốn hóa và EBITDA chưa trừ lãi vay, nên cả tử số và mẫu số cùng "nhìn" toàn bộ vốn của doanh nghiệp.' },
    { from: 'So sánh doanh nghiệp khác cấu trúc vốn, thuế, khấu hao', to: 'Chọn EV/EBITDA để loại các khác biệt tài chính', mechanism: 'EBITDA bỏ qua lãi, thuế và khấu hao nên tập trung vào năng lực vận hành; nhưng cũng bỏ qua nhu cầu đầu tư vốn.' },
    { from: 'Doanh nghiệp có chi tiêu vốn lớn hoặc thuê tài sản nhiều', to: 'EBITDA kém đại diện cho dòng tiền', mechanism: 'Doanh nghiệp tốn vốn đầu tư thường xuyên có EBITDA cao nhưng tiền thực tế còn lại ít; cần xem thêm dòng tiền tự do.' },
  ],
  vietnamImpact: [
    { group: 'Nhà phân tích cổ phiếu doanh nghiệp phi tài chính (bất động sản, sản xuất, hạ tầng)', effect: 'EV/EBITDA hữu ích khi so sánh doanh nghiệp có tỷ lệ nợ khác nhau; cần chú ý nợ gồm cả trái phiếu, tiền đặt cọc/khách hàng ứng trước (tùy bản chất).', direction: 'up' },
    { group: 'Nhà đầu tư ngân hàng, bảo hiểm, chứng khoán', effect: 'Nợ là nguyên liệu kinh doanh của ngân hàng nên EV/EBITDA không phù hợp; thường dùng P/B, ROE và P/E.', direction: 'mixed' },
    { group: 'Người định giá M&A', effect: 'EV phản ánh giá phải trả cho toàn doanh nghiệp, gồm cả nợ tiếp quản.', direction: 'up' },
    { group: 'Người đọc báo cáo phân tích', effect: 'Cần xác định EV tính nợ theo giá trị sổ sách hay thị trường và tiền gồm khoản nào để hiểu bội số công bố.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Nợ ròng ÷ EBITDA', why: 'Cho thấy mức đòn bẩy, giải thích chênh lệch giữa P/E và EV/EBITDA.', where: 'Báo cáo tài chính hợp nhất của doanh nghiệp niêm yết (HOSE, HNX công bố)' },
    { name: 'Dòng tiền tự do ÷ EBITDA (chuyển đổi tiền)', why: 'Kiểm tra EBITDA có thành tiền hay bị chi tiêu vốn nuốt.', where: 'Báo cáo lưu chuyển tiền tệ' },
    { name: 'Bội số của nhóm doanh nghiệp cùng ngành, cùng khu vực', why: 'Bội số chỉ có ý nghĩa khi so với nhóm tương đồng.', where: 'Báo cáo phân tích của công ty chứng khoán; tự tính từ dữ liệu' },
  ],
  counterpoints: [
    'Công ty chu kỳ có EBITDA/lợi nhuận đỉnh làm bội số "rẻ" giả; cần dùng lợi nhuận chuẩn hóa qua chu kỳ.',
    'Khác biệt chuẩn kế toán (xử lý thuê tài sản, vốn hóa chi phí) làm EBITDA không so sánh được giữa các doanh nghiệp.',
    'Không bội số nào thay được mô hình dòng tiền chiết khấu; chúng chỉ là so sánh tương đối.',
  ],
  glossary: [
    { term: 'EV (giá trị doanh nghiệp)', definition: 'Vốn hóa cộng nợ và các khoản tương đương nợ, trừ tiền; giá trị toàn doanh nghiệp.' },
    { term: 'EBITDA', definition: 'Lợi nhuận trước lãi vay, thuế, khấu hao và phân bổ.' },
    { term: 'P/E', definition: 'Giá cổ phiếu chia cho lợi nhuận sau thuế trên mỗi cổ phiếu.' },
    { term: 'Trung lập cấu trúc vốn', definition: 'Không bị ảnh hưởng bởi tỷ lệ nợ/vốn chủ của doanh nghiệp.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'ev-ebitda-vs-pe-multiples-q',
    question: 'Hai công ty cùng EBITDA và EV (ví dụ giả định), nhưng công ty B vay nợ nhiều hơn nên P/E cao hơn A. Điều đó cho thấy gì?',
    options: [
      { id: 'a', text: 'Khác biệt P/E chủ yếu do cấu trúc vốn; EV/EBITDA giống nhau cho thấy định giá vận hành tương đương.', correct: true, explain: 'Đúng. EV/EBITDA trung lập với cấu trúc vốn nên cho cùng giá trị; P/E nhạy với lãi vay.' },
      { id: 'b', text: 'Công ty B chắc chắn đắt hơn.', explain: 'P/E cao ở đây do nợ, không nhất thiết do định giá vận hành đắt.' },
      { id: 'c', text: 'P/E mới đúng, EV/EBITDA sai.', explain: 'Hai bội số trả lời câu hỏi khác nhau.' },
    ],
  },
  sources: [
    { title: 'Enterprise value', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Enterprise_value' },
    { title: 'Price–earnings ratio', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Price%E2%80%93earnings_ratio' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 96,
}
