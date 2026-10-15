import type { Explainer } from '../../../shared/explainer'

export const diversificationLimitsInCrises: Explainer = {
  id: 'diversification-limits-in-crises',
  slug: 'diversification-limits-in-crises',
  question: 'Đa dạng hóa giúp gì và giới hạn của nó khi khủng hoảng, lúc các tài sản cùng giảm?',
  title: 'Đa dạng hóa giảm rủi ro riêng lẻ, nhưng khi khủng hoảng tương quan tăng thì lợi ích co lại',
  topic: 'markets-investing',
  tldr: 'Đa dạng hóa giảm rủi ro riêng của từng tài sản vì giá không biến động đồng bộ hoàn toàn, nên danh mục có phương sai thấp hơn. Nhưng nó **không loại bỏ rủi ro hệ thống**, và trong căng thẳng thị trường, tương quan giữa các thị trường thường **tăng**, đúng lúc nhà đầu tư cần đa dạng hóa nhất.',
  keyPoints: [
    'Theo Wikipedia (Diversification): nếu giá tài sản không biến động hoàn toàn đồng bộ, danh mục đa dạng hóa có phương sai thấp hơn mức bình quân gia quyền phương sai các tài sản thành phần; lợi ích được tăng cường khi tương quan âm và giảm (nhưng không mất) khi tương quan dương.',
    'Đa dạng hóa **thu hẹp phạm vi kết quả**, không tăng lợi suất kỳ vọng nếu các tài sản có lợi suất kỳ vọng như nhau: bạn bỏ cơ hội tài sản tốt nhất đổi lấy tránh tài sản tệ nhất.',
    'Thêm tài sản chỉ có lợi khi chúng **không cùng chịu một nguồn rủi ro**; thêm nhiều cổ phiếu cùng ngành, cùng chu kỳ không đa dạng hóa nhiều. Rủi ro hệ thống (thị trường) vẫn còn dù nắm bao nhiêu mã.',
    'Giới hạn khi khủng hoảng: tương quan giữa các thị trường có xu hướng tăng khi căng thẳng, làm giảm lợi ích đúng lúc cần; phí và chi phí giao dịch cho từng tài sản cũng làm "đa dạng quá mức" trở nên tốn kém.',
    'Ví dụ giả định: hai tài sản độ lệch chuẩn 20% mỗi tài sản, tỷ trọng 50/50. Tương quan 0,3 cho độ lệch chuẩn danh mục ≈ 16,1%; tương quan 0,8 cho ≈ 19,0% — gần như mất hết lợi ích.',
  ],
  causalChain: [
    { from: 'Các tài sản phản ứng khác nhau với cùng tin tức', to: 'Tương quan thấp, biến động danh mục nhỏ hơn bình quân từng tài sản', mechanism: 'Phần dao động riêng bù trừ nhau; với danh mục đều trọng số, phương sai tiến về hiệp phương sai trung bình khi số tài sản tăng.' },
    { from: 'Khủng hoảng, bán tháo, nhu cầu thanh khoản', to: 'Tương quan tăng', mechanism: 'Nhà đầu tư bán bất kỳ thứ gì thanh khoản được để đáp ứng ký quỹ hoặc rút vốn; yếu tố chung (rủi ro, thanh khoản) chi phối thay cho yếu tố riêng.' },
    { from: 'Tương quan tăng', to: 'Lợi ích đa dạng hóa co lại', mechanism: 'Công thức: σ danh mục = σ × √((1 + ρ) ÷ 2) với hai tài sản cùng σ, tỷ trọng đều; ρ tăng từ 0,3 lên 0,8 làm σ từ 16,1% lên 19,0% khi σ mỗi tài sản là 20%.' },
    { from: 'Co lại lợi ích đa dạng hóa', to: 'Danh mục sụt giảm nhiều hơn dự tính', mechanism: 'Mô hình xây dựng bằng tương quan thời bình dự báo rủi ro thấp hơn thực tế khi khủng hoảng.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân chỉ nắm cổ phiếu và BĐS trong nước', effect: 'Các tài sản đều chịu rủi ro tín dụng, chính sách và thanh khoản trong nước nên tương quan tăng khi tín dụng siết; đa dạng hóa trong cùng một nền kinh tế có giới hạn.', direction: 'down' },
    { group: 'Nhà đầu tư kết hợp tiết kiệm, vàng, cổ phiếu, quỹ', effect: 'Kết hợp các tài sản có nguồn rủi ro khác nhau (lãi suất, giá vàng, cổ phiếu) giúp giảm dao động, nhưng không bảo đảm chống mất giá đồng thời.', direction: 'mixed' },
    { group: 'Nhà đầu tư dùng đòn bẩy', effect: 'Khủng hoảng làm các tài sản giảm cùng lúc, kích hoạt gọi ký quỹ trên nhiều tài sản và làm tương quan tăng thêm.', direction: 'down' },
    { group: 'Người đầu tư dài hạn có dòng tiền ổn định', effect: 'Có thể chịu được giai đoạn tương quan tăng nếu không buộc phải bán; đa dạng hóa theo thời gian (mua đều) bổ sung cho đa dạng hóa tài sản.', direction: 'up' },
  ],
  indicators: [
    { name: 'Ma trận tương quan lợi suất theo từng giai đoạn (thường và căng thẳng)', why: 'Thấy tương quan thay đổi thế nào khi thị trường biến động mạnh.', where: 'Tự tính từ dữ liệu giá tài sản; nền tảng dữ liệu chứng khoán' },
    { name: 'Mức sụt giảm tối đa của danh mục và từng tài sản', why: 'Kiểm tra xem các tài sản có cùng giảm sâu trong cùng thời kỳ không.', where: 'Tự tính từ chuỗi giá' },
    { name: 'Tập trung theo ngành, yếu tố rủi ro, tiền tệ', why: 'Đa dạng thực sự là theo nguồn rủi ro chứ không theo số mã.', where: 'Báo cáo danh mục của quỹ; tự phân loại danh mục' },
  ],
  counterpoints: [
    'Một số tài sản (trái phiếu chính phủ chất lượng cao, tiền mặt) có thể giữ giá tốt khi cổ phiếu giảm, nhưng quan hệ này không cố định (lạm phát cao có thể làm cả hai cùng giảm).',
    'Tương quan ước lượng trong thời bình dựa trên lịch sử ngắn; chu kỳ khủng hoảng hiếm nên khó ước lượng chắc chắn.',
    'Đa dạng hóa không thay thế quản lý liều lượng rủi ro; danh mục chia đều cho nhiều tài sản rủi ro cao vẫn rủi ro cao.',
  ],
  glossary: [
    { term: 'Đa dạng hóa', definition: 'Phân bổ vốn vào nhiều tài sản để giảm phụ thuộc vào một nguồn rủi ro.' },
    { term: 'Tương quan', definition: 'Thước đo mức độ hai tài sản biến động cùng chiều, từ −1 đến +1.' },
    { term: 'Rủi ro hệ thống', definition: 'Rủi ro ảnh hưởng toàn thị trường, không loại bỏ được bằng đa dạng hóa.' },
    { term: 'Phương sai danh mục', definition: 'Thước đo độ phân tán lợi suất của cả danh mục, phụ thuộc phương sai từng tài sản và tương quan.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'diversification-limits-in-crises-q',
    question: 'Hai tài sản cùng độ lệch chuẩn 20%, tỷ trọng 50/50. Tương quan tăng từ 0,3 lên 0,8 khi khủng hoảng. Độ lệch chuẩn danh mục thay đổi thế nào (ví dụ giả định)?',
    options: [
      { id: 'a', text: 'Tăng từ khoảng 16,1% lên khoảng 19,0%.', correct: true, explain: '20% × √((1+0,3)/2) ≈ 16,1%; 20% × √((1+0,8)/2) ≈ 19,0%. Lợi ích đa dạng hóa gần như biến mất.' },
      { id: 'b', text: 'Không đổi vì độ lệch chuẩn từng tài sản không đổi.', explain: 'Rủi ro danh mục phụ thuộc cả tương quan, không chỉ rủi ro từng tài sản.' },
      { id: 'c', text: 'Giảm vì thêm nhiều tài sản.', explain: 'Ở đây số tài sản không đổi; tương quan tăng làm rủi ro danh mục tăng.' },
    ],
  },
  sources: [
    { title: 'Diversification (finance)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Diversification_(finance)' },
    { title: 'Volatility (finance)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Volatility_(finance)' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 94,
}
