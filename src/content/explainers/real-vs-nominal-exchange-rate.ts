import type { Explainer } from '../../../shared/explainer'

export const realVsNominalExchangeRate: Explainer = {
  id: 'real-vs-nominal-exchange-rate',
  slug: 'real-vs-nominal-exchange-rate',
  question: 'Tỷ giá thực khác tỷ giá danh nghĩa thế nào, và ảnh hưởng ra sao tới sức cạnh tranh xuất khẩu?',
  title: 'Sức cạnh tranh xuất khẩu phụ thuộc tỷ giá thực hiệu dụng, không chỉ tỷ giá USD/VND',
  topic: 'macro',
  tldr: 'Tỷ giá danh nghĩa là giá một đồng tiền tính bằng đồng khác. **Tỷ giá thực hiệu dụng (REER)** là tỷ giá danh nghĩa bình quân gia quyền theo thương mại đã **điều chỉnh chênh lệch giá cả** với các đối tác. Nếu VND mất giá danh nghĩa nhưng lạm phát trong nước cao hơn đối tác, lợi thế giá có thể bị bào mòn một phần.',
  keyPoints: [
    'Theo BIS: **NEER** là trung bình hình học gia quyền thương mại của các tỷ giá song phương; **REER** là NEER điều chỉnh theo giá tiêu dùng tương đối. REER tăng nghĩa là đồng tiền lên giá thực; giảm là mất giá thực.',
    'BIS dùng trọng số theo thương mại hàng chế tạo, có tính cả cạnh tranh ở thị trường thứ ba (trọng số kép) và thay đổi theo chu kỳ ba năm; chọn rổ đối tác và chỉ số giá khác nhau sẽ cho REER khác nhau.',
    'Xấp xỉ thực hành (suy từ định nghĩa REER, không phải công thức riêng của BIS): mức mất giá thực của VND ≈ mức mất giá danh nghĩa − (lạm phát trong nước − lạm phát đối tác).',
    'Ví dụ giả định: VND mất giá danh nghĩa 3%/năm so với rổ đối tác, lạm phát trong nước 4% còn đối tác 2% → mất giá thực chỉ khoảng 1% (−3% + 2%), không phải 3%.',
    'Tỷ giá chỉ là một phần của sức cạnh tranh; còn chất lượng, thời gian giao hàng, đầu vào nhập khẩu, chi phí logistics, thuế quan và năng suất.',
  ],
  causalChain: [
    { from: 'VND mất giá danh nghĩa so với đối tác', to: 'Hàng xuất khẩu rẻ hơn tính bằng ngoại tệ', mechanism: 'Doanh nghiệp bán bằng USD thu được nhiều VND hơn trên mỗi USD, có thể giảm giá chào hoặc tăng biên lợi nhuận.' },
    { from: 'Lạm phát trong nước cao hơn đối tác', to: 'Chi phí nội địa tăng, bào mòn lợi thế', mechanism: 'Lương, giá nguyên liệu nội địa tăng làm giá tính bằng VND tăng; nếu tăng đủ nhanh thì mất giá danh nghĩa không còn là mất giá thực.' },
    { from: 'Giá trị nhập khẩu trong hàng xuất khẩu', to: 'Lợi ích ròng nhỏ hơn dự tính', mechanism: 'Ngành gia công dùng nhiều đầu vào nhập khẩu bằng USD chịu chi phí tăng khi VND mất giá, bù trừ phần lợi.' },
    { from: 'REER thay đổi kéo dài', to: 'Cán cân thương mại và cạnh tranh nhập khẩu thay đổi', mechanism: 'VND lên giá thực làm hàng nhập rẻ tương đối và xuất khẩu kém cạnh tranh; ngược lại khi mất giá thực.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp xuất khẩu dùng nhiều nguyên liệu nội địa (nông sản, thủy sản)', effect: 'Thường hưởng lợi nhiều hơn khi VND mất giá thực vì phần lớn chi phí tính bằng VND (mức độ tùy từng doanh nghiệp).', direction: 'up' },
    { group: 'Doanh nghiệp gia công dùng nhiều đầu vào nhập khẩu', effect: 'Lợi ích tỷ giá bị chi phí nhập khẩu bù trừ.', direction: 'mixed' },
    { group: 'Doanh nghiệp vay ngoại tệ', effect: 'VND mất giá danh nghĩa làm gánh nặng nợ tính bằng VND tăng, bất kể REER.', direction: 'down' },
    { group: 'Người tiêu dùng và nhà nhập khẩu', effect: 'VND mất giá làm hàng nhập khẩu đắt hơn, ảnh hưởng giá xăng dầu, thiết bị.', direction: 'down' },
  ],
  indicators: [
    { name: 'REER và NEER của Việt Nam', why: 'Cho biết sức cạnh tranh về giá so với rổ đối tác thương mại.', where: 'Cơ sở dữ liệu tỷ giá hiệu dụng của BIS (data.bis.org) nếu có Việt Nam; tính toán của IMF' },
    { name: 'Lạm phát Việt Nam so với các đối tác lớn', why: 'Chênh lệch lạm phát là phần biến tỷ giá danh nghĩa thành tỷ giá thực.', where: 'Cục Thống kê (CPI); cơ quan thống kê của Mỹ, EU, Trung Quốc' },
    { name: 'Cán cân thương mại và xuất khẩu theo thị trường', why: 'Kiểm chứng xem biến động REER có chuyển thành đơn hàng.', where: 'Cục Thống kê, Cục Hải quan' },
  ],
  counterpoints: [
    'REER phụ thuộc chỉ số giá được dùng (CPI, giá sản xuất, chi phí lao động đơn vị); mỗi chọn lựa cho một câu chuyện hơi khác.',
    'Với nền kinh tế có chuỗi cung ứng toàn cầu, hiệu ứng tỷ giá lên xuất khẩu yếu và chậm hơn mô hình sách giáo khoa.',
    'Khi tỷ giá danh nghĩa được điều hành và biến động ít, phần thay đổi của REER có thể chủ yếu đến từ chênh lệch lạm phát và biến động tiền tệ các đối tác; cần xem số liệu cụ thể từng giai đoạn (bài chưa trích số cho Việt Nam).',
  ],
  glossary: [
    { term: 'Tỷ giá danh nghĩa', definition: 'Giá của một đồng tiền tính bằng đồng tiền khác, như USD/VND.' },
    { term: 'NEER', definition: 'Tỷ giá hiệu dụng danh nghĩa: trung bình gia quyền theo thương mại của các tỷ giá song phương.' },
    { term: 'REER', definition: 'Tỷ giá hiệu dụng thực: NEER điều chỉnh theo giá cả tương đối giữa các nước.' },
    { term: 'Trọng số kép', definition: 'Cách gia quyền tính cả cạnh tranh ở thị trường thứ ba, không chỉ thương mại song phương.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'real-vs-nominal-exchange-rate-q',
    question: 'VND mất giá danh nghĩa 3%/năm so với rổ đối tác; lạm phát trong nước 4%, đối tác 2% (ví dụ giả định). Sức cạnh tranh giá thay đổi thế nào?',
    options: [
      { id: 'a', text: 'Cải thiện đủ 3% vì VND mất giá.', explain: 'Phần mất giá danh nghĩa bị lạm phát chênh lệch trong nước bù lại một phần.' },
      { id: 'b', text: 'Lợi thế giá chỉ khoảng 1% (≈ 3% − 2 điểm chênh lệch lạm phát).', correct: true, explain: 'Đúng. Mất giá thực ≈ mất giá danh nghĩa trừ chênh lệch lạm phát: 3% − (4% − 2%) = 1%.' },
      { id: 'c', text: 'Xấu đi vì lạm phát cao hơn.', explain: 'Lạm phát cao hơn bào mòn lợi thế nhưng ở đây mất giá danh nghĩa lớn hơn chênh lệch lạm phát nên vẫn còn lợi thế dương.' },
    ],
  },
  sources: [
    { title: 'Effective exchange rates - overview', publisher: 'Bank for International Settlements (BIS Data Portal)', url: 'https://data.bis.org/topics/EER' },
    { title: 'Effective exchange rate', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Effective_exchange_rate' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 85,
}
