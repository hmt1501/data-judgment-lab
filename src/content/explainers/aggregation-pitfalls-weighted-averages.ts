import type { Explainer } from '../../../shared/explainer'

export const aggregationPitfallsWeightedAverages: Explainer = {
  id: 'aggregation-pitfalls-weighted-averages',
  slug: 'aggregation-pitfalls-weighted-averages',
  question: 'Gộp số liệu kinh tế: vì sao trung bình đơn giản dễ sai và nghịch lý Simpson là gì?',
  title: 'Gộp số liệu: trung bình có trọng số và nghịch lý Simpson',
  topic: 'macro',
  tldr: 'Khi gộp nhiều nhóm thành một con số (lạm phát chung, lương trung bình, tỷ lệ nợ xấu), **trung bình đơn giản các trung bình** chỉ đúng khi các nhóm có quy mô bằng nhau. Đúng ra phải dùng **trọng số** theo quy mô. Tệ hơn, khi cơ cấu nhóm thay đổi, số gộp có thể đi **ngược hướng** với tất cả các nhóm con: đó là **nghịch lý Simpson**. Muốn kết luận đúng phải xem cả số gộp lẫn số theo nhóm và cơ cấu.',
  keyPoints: [
    'Trung bình đơn giản coi mọi nhóm như nhau; **trung bình có trọng số** cho nhóm lớn ảnh hưởng nhiều hơn. Ví dụ trong Wikipedia: hai lớp 20 và 30 học sinh, điểm 80 và 90 → trung bình đơn giản 85, trung bình đúng theo học sinh là 86.',
    '**Nghịch lý Simpson:** một xu hướng xuất hiện trong từng nhóm nhưng biến mất hoặc đảo ngược khi gộp, vì nhóm lớn nhỏ khác nhau và có biến ẩn (lurking variable) tác động cả lựa chọn lẫn kết quả (theo Wikipedia).',
    'Trong kinh tế, hiện tượng này thường là **hiệu ứng cơ cấu**: lương trung bình có thể giảm dù lương từng ngành đều tăng nếu lao động chuyển sang ngành lương thấp hơn.',
    'Ví dụ giả định: năm 1 ngành A (lương 10 triệu) 50 người, ngành B (20 triệu) 50 người → trung bình 15 triệu. Năm 2, A tăng lên 10,5 triệu (80 người), B lên 21 triệu (20 người) → trung bình 12,6 triệu: mỗi ngành tăng 5% nhưng số gộp giảm.',
    'Trọng số cũng quyết định kết quả: trọng số khác nhau trả lời câu hỏi khác nhau, nên cần nêu rõ chọn trọng số nào và vì sao.',
  ],
  causalChain: [
    { from: 'Các nhóm có quy mô khác nhau', to: 'Trung bình đơn giản các nhóm lệch khỏi trung bình thực', mechanism: 'Mỗi nhóm được tính cùng trọng số dù đông hay ít; nhóm nhỏ bị khuếch đại ảnh hưởng.' },
    { from: 'Dùng trọng số theo quy mô', to: 'Số gộp phản ánh đúng trung bình toàn bộ', mechanism: 'Trung bình có trọng số bằng tổng (giá trị × trọng số) chia tổng trọng số, đúng bằng trung bình các cá thể.' },
    { from: 'Cơ cấu nhóm thay đổi theo thời gian', to: 'Số gộp biến động dù từng nhóm không đổi hoặc đi ngược hướng', mechanism: 'Tỷ trọng chuyển sang nhóm giá trị thấp kéo trung bình xuống (hiệu ứng cơ cấu).' },
    { from: 'Biến ẩn ảnh hưởng cả lựa chọn nhóm lẫn kết quả', to: 'Nghịch lý Simpson', mechanism: 'Ví dụ kinh điển: kích cỡ sỏi thận quyết định cả loại điều trị bác sĩ chọn lẫn tỷ lệ thành công; gộp lại làm phương pháp tệ hơn trông tốt hơn.' },
  ],
  vietnamImpact: [
    { group: 'Người đọc số liệu lương, năng suất', effect: 'Lương hoặc năng suất bình quân cả nền kinh tế chịu ảnh hưởng cơ cấu lao động (nông nghiệp, công nghiệp, dịch vụ); cần xem theo ngành.', direction: 'mixed' },
    { group: 'Người đọc CPI vùng/nhóm hàng', effect: 'Lạm phát chung là trung bình có trọng số của các nhóm; đổi quyền số có thể làm số chung khác kỳ trước.', direction: 'mixed' },
    { group: 'Nhà đầu tư xem tỷ lệ chỉ số ngành (P/E, nợ xấu bình quân ngành)', effect: 'Bình quân đơn giản các doanh nghiệp khác với bình quân theo quy mô; vốn hóa lớn sẽ chi phối chỉ số.', direction: 'mixed' },
    { group: 'Người làm chính sách, nhà báo', effect: 'Kết luận "tăng/giảm" từ số gộp có thể sai nếu cơ cấu đổi; nên đọc kèm số theo nhóm.', direction: 'down' },
  ],
  indicators: [
    { name: 'Số liệu theo nhóm cùng cơ cấu (quyền số, tỷ trọng lao động theo ngành)', why: 'Tách hiệu ứng cơ cấu khỏi thay đổi thực trong từng nhóm.', where: 'Các bảng chi tiết theo ngành/vùng của Cục Thống kê' },
    { name: 'Quyền số của rổ CPI', why: 'Quyết định mức đóng góp của từng nhóm vào số chung.', where: 'Phương pháp luận CPI của Cục Thống kê' },
    { name: 'Tỷ trọng nhóm qua các kỳ', why: 'Thay đổi tỷ trọng là nguồn gốc của nghịch lý Simpson.', where: 'Tự tính từ bảng số liệu nhóm' },
    { name: 'Trung bình có trọng số so với đơn giản', why: 'Chênh lệch lớn cho biết nhóm quy mô khác nhau nhiều.', where: 'Tự tính' },
  ],
  counterpoints: [
    'Không phải lúc nào số gộp cũng sai: nếu cơ cấu ổn định, chiều hướng gộp và chiều hướng từng nhóm thường nhất quán.',
    'Cả hai cách đọc (gộp hay tách nhóm) có thể đúng với câu hỏi khác nhau; chọn cách nào cần dựa trên mô hình nhân quả, không chỉ dựa trên số liệu.',
    'Trọng số phù hợp phụ thuộc mục đích (theo dân số, doanh thu hay vốn hóa); không có một trọng số đúng cho mọi câu hỏi.',
  ],
  glossary: [
    { term: 'Trung bình có trọng số', definition: 'Tổng giá trị nhân trọng số chia tổng trọng số.' },
    { term: 'Nghịch lý Simpson', definition: 'Xu hướng trong từng nhóm đảo ngược hoặc biến mất khi gộp nhóm.' },
    { term: 'Biến ẩn (lurking variable)', definition: 'Yếu tố chưa quan sát ảnh hưởng cả nguyên nhân giả định lẫn kết quả.' },
    { term: 'Hiệu ứng cơ cấu', definition: 'Thay đổi số gộp do tỷ trọng nhóm đổi, không do giá trị từng nhóm đổi.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'aggregation-pitfalls-weighted-averages-q',
    question: 'Lương mỗi ngành đều tăng 5% nhưng lương trung bình cả nền kinh tế giảm (ví dụ giả định). Giải thích hợp lý nhất?',
    options: [
      { id: 'a', text: 'Số liệu chắc chắn bị tính sai.', explain: 'Có thể hoàn toàn đúng nếu lao động chuyển sang ngành lương thấp: đây là nghịch lý Simpson/hiệu ứng cơ cấu.' },
      { id: 'b', text: 'Lao động chuyển nhiều sang ngành lương thấp hơn nên trung bình gộp giảm dù từng ngành tăng.', correct: true, explain: 'Đúng. Ví dụ: 50/50 người ở lương 10 và 20 cho 15; sau đó 80/20 với 10,5 và 21 cho 12,6.' },
      { id: 'c', text: 'Phải dùng trung bình đơn giản các ngành để đúng.', explain: 'Trung bình đơn giản bỏ qua quy mô nhóm và còn sai lệch hơn.' },
    ],
  },
  sources: [
    { title: "Simpson's paradox", publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Simpson%27s_paradox' },
    { title: 'Weighted arithmetic mean', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Weighted_arithmetic_mean' },
    { title: 'Consumer Price Index: Concepts, Sources and Methods (chương về cập nhật quyền số, chain-linking)', publisher: 'Australian Bureau of Statistics', url: 'https://www.abs.gov.au/AUSSTATS/abs@.nsf/7d12b0f6763c78caca257061001cc588/1aeeb25cd6853116ca257968000c7064!OpenDocument' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 155,
}
