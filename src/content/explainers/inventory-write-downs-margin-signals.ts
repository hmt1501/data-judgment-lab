import type { Explainer } from '../../../shared/explainer'

export const inventoryWriteDownsMarginSignals: Explainer = {
  id: 'inventory-write-downs-margin-signals',
  slug: 'inventory-write-downs-margin-signals',
  question: 'Trích lập giảm giá hàng tồn kho báo hiệu điều gì về biên lợi nhuận?',
  title: 'Giảm giá hàng tồn kho: khi sổ sách phải thừa nhận hàng bán không được giá vốn',
  topic: 'markets-investing',
  tldr: 'Hàng tồn kho được ghi theo **giá thấp hơn giữa giá gốc và giá trị thuần có thể thực hiện được (NRV)**. Khi giá bán dự kiến trừ chi phí hoàn thiện và bán hàng thấp hơn giá gốc, doanh nghiệp phải **giảm giá trị tồn kho và ghi nhận chi phí ngay kỳ đó**. Vì thế các khoản giảm giá tồn kho lớn thường là tín hiệu về nhu cầu yếu, giá giảm hoặc hàng lỗi thời, và có thể làm biên lợi nhuận gộp xấu đi đột ngột.',
  keyPoints: [
    'Theo IAS 2 (IFRS Foundation), hàng tồn kho đo theo **giá thấp hơn giữa giá gốc và giá trị thuần có thể thực hiện được**; NRV = giá bán ước tính trong điều kiện kinh doanh bình thường trừ chi phí hoàn thiện và chi phí bán.',
    'Khoản giảm giá xuống NRV được **ghi nhận là chi phí ngay trong kỳ phát sinh**; tổn thất hàng tồn kho cũng được ghi nhận tương tự.',
    'Giá gốc gồm giá mua, chi phí chế biến và các chi phí đưa hàng đến vị trí, trạng thái hiện tại; phương pháp tính giá gồm nhận diện riêng, nhập trước xuất trước hoặc bình quân gia quyền.',
    'Tín hiệu quan trọng: **tồn kho tăng nhanh hơn doanh thu**, số ngày tồn kho kéo dài, giá bán giảm hoặc chiết khấu mạnh để xả hàng.',
    'Khoản giảm giá lớn thường xuất hiện vào kỳ nhu cầu yếu hoặc giá hàng hóa giảm; nó giải thích vì sao biên lợi nhuận gộp có thể giảm đột ngột dù doanh thu không giảm.',
  ],
  causalChain: [
    { from: 'Giá bán thị trường giảm hoặc nhu cầu yếu', to: 'NRV của hàng tồn kho thấp hơn giá gốc', mechanism: 'Hàng mua với giá cao khó bán lại được giá vốn; NRV tính từ giá bán dự kiến trừ chi phí bán và hoàn thiện.' },
    { from: 'NRV thấp hơn giá gốc', to: 'Phải ghi giảm giá trị hàng tồn kho', mechanism: 'Ví dụ giả định: giá gốc 100, NRV 70 → giảm 30 và ghi nhận chi phí 30 trong kỳ.' },
    { from: 'Chi phí giảm giá ghi nhận trong kỳ', to: 'Biên lợi nhuận gộp và lợi nhuận kỳ đó giảm', mechanism: 'Khoản này làm tăng giá vốn (hoặc chi phí) trong kỳ nên biên gộp mỏng hơn dù doanh thu bán hàng không đổi.' },
    { from: 'Tồn kho cũ giá thấp bán ra ở các kỳ sau', to: 'Biên lợi nhuận kỳ sau có thể cải thiện', mechanism: 'Hàng đã giảm giá có giá vốn thấp hơn khi bán, nên tổn thất được ghi sớm và biên kỳ sau khó bị kéo xuống nếu giá không giảm thêm.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp xuất khẩu và sản xuất', effect: 'Khi đơn hàng giảm hoặc giá hàng hóa giảm, tồn kho tăng; kiểm tra trích lập có đủ hay chưa là một cách đánh giá chất lượng lợi nhuận.', direction: 'down' },
    { group: 'Doanh nghiệp bán lẻ', effect: 'Hàng thời trang, điện tử mau lỗi thời, rủi ro giảm giá lớn; biên gộp phụ thuộc vào chiết khấu xả hàng.', direction: 'mixed' },
    { group: 'Doanh nghiệp bất động sản (hàng tồn kho là dự án)', effect: 'Giá bán thị trường giảm hoặc chi phí hoàn thiện tăng có thể làm NRV thấp hơn giá gốc; cần đọc thuyết minh.', direction: 'down' },
    { group: 'Nhà đầu tư', effect: 'Khoản giảm giá tồn kho lớn đột ngột có thể là dấu hiệu sớm của chu kỳ nhu cầu yếu hoặc kế toán thận trọng hơn; cần so với các kỳ trước.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Số ngày tồn kho (hàng tồn kho / giá vốn × 365)', why: 'Tăng dần là tín hiệu hàng bán chậm.', where: 'Tự tính từ bảng cân đối kế toán và báo cáo kết quả kinh doanh' },
    { name: 'Dự phòng giảm giá hàng tồn kho (số dư và biến động)', why: 'Cho biết doanh nghiệp đã trích lập bao nhiêu.', where: 'Thuyết minh hàng tồn kho trong báo cáo tài chính' },
    { name: 'Biên lợi nhuận gộp theo quý', why: 'Biến động bất thường có thể do giảm giá tồn kho.', where: 'Báo cáo tài chính quý của doanh nghiệp niêm yết' },
    { name: 'Tốc độ tăng tồn kho so với tốc độ tăng doanh thu', why: 'Tồn kho tăng nhanh hơn doanh thu kéo dài là dấu hiệu cần xem.', where: 'So sánh hai chỉ tiêu qua các kỳ' },
  ],
  counterpoints: [
    'Tồn kho tăng không luôn xấu: doanh nghiệp có thể tích trữ nguyên liệu trước khi giá tăng hoặc chuẩn bị mùa cao điểm.',
    'Định giá NRV có phần phán đoán; doanh nghiệp có thể trích lập thiếu để giữ lợi nhuận hoặc trích quá tay để tạo "ghế đệm" cho kỳ sau.',
    'Bài này chưa nêu chi tiết việc hoàn nhập khoản giảm giá; cần đọc chuẩn mực đầy đủ và chuẩn mực kế toán doanh nghiệp áp dụng.',
  ],
  glossary: [
    { term: 'Giá trị thuần có thể thực hiện được (NRV)', definition: 'Giá bán ước tính trừ chi phí hoàn thiện và chi phí bán.' },
    { term: 'Giá gốc', definition: 'Chi phí mua, chế biến và các chi phí đưa hàng đến trạng thái hiện tại.' },
    { term: 'Dự phòng giảm giá hàng tồn kho', definition: 'Khoản ghi giảm giá trị tồn kho xuống NRV.' },
    { term: 'Biên lợi nhuận gộp', definition: '(Doanh thu − giá vốn) / doanh thu.' },
    { term: 'FIFO', definition: 'Nhập trước xuất trước; một cách tính giá xuất kho.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'inventory-write-downs-margin-signals-q',
    question: 'Hàng tồn kho giá gốc 100, giá bán dự kiến 80, chi phí bán 10 (ví dụ giả định). Xử lý đúng theo nguyên tắc IAS 2?',
    options: [
      { id: 'a', text: 'Giữ nguyên 100 vì hàng chưa bán nên chưa có lỗ.', explain: 'Sai. Phải so giá gốc với NRV; không đợi bán mới ghi nhận tổn thất.' },
      { id: 'b', text: 'Giảm xuống 70 (NRV = 80 − 10) và ghi nhận chi phí 30 trong kỳ.', correct: true, explain: 'Đúng. NRV là giá bán trừ chi phí bán; hàng tồn kho đo theo giá thấp hơn giữa giá gốc và NRV, khoản giảm là chi phí kỳ đó.' },
      { id: 'c', text: 'Giảm xuống 80 vì đó là giá bán dự kiến.', explain: 'Chưa trừ chi phí bán 10 nên NRV là 70.' },
    ],
  },
  sources: [
    { title: 'IAS 2 Inventories', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/' },
    { title: 'Inventory valuation', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Inventory_valuation' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 152,
}
