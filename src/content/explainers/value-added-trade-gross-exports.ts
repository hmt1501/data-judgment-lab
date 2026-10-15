import type { Explainer } from '../../../shared/explainer'

export const valueAddedTradeGrossExports: Explainer = {
  id: 'value-added-trade-gross-exports',
  slug: 'value-added-trade-gross-exports',
  question: 'Kim ngạch xuất khẩu cao có nghĩa là kiếm được nhiều tiền không? Xuất khẩu gộp khác giá trị gia tăng thế nào?',
  title: 'Xuất khẩu gộp tính cả đầu vào nhập khẩu; giá trị gia tăng trong nước mới cho biết nền kinh tế giữ lại bao nhiêu',
  topic: 'geopolitics-trade',
  tldr: 'Số liệu xuất khẩu thông thường tính **toàn bộ giá trị hàng qua biên giới**, kể cả linh kiện nhập khẩu nằm trong sản phẩm. Phần **giá trị gia tăng trong nước** (lương, lợi nhuận, thuế, khấu hao tạo ra tại nước đó) thường nhỏ hơn, nhất là ở nước làm khâu lắp ráp. Vì chuỗi giá trị toàn cầu, một sản phẩm có thể bị tính kim ngạch nhiều lần khi đi qua nhiều nước.',
  keyPoints: [
    'Thống kê hải quan ghi **giá trị hàng hóa** mỗi lần hàng qua biên giới; linh kiện nhập từ nước A, lắp ở nước B, xuất sang nước C sẽ được tính trong nhập khẩu của B và xuất khẩu của B.',
    'Giá trị gia tăng trong nước = giá trị xuất khẩu trừ phần đầu vào nhập khẩu (và các phần quay lại). Tỷ lệ này thấp ở ngành gia công lắp ráp, cao ở ngành dùng nguyên liệu nội địa như nông sản chế biến.',
    'Các tổ chức như OECD và WTO phát triển cơ sở dữ liệu thương mại theo giá trị gia tăng (TiVA) để nhìn thấy điều này; cách tiếp cận dựa trên bảng vào–ra giữa các nước.',
    'Hệ quả: cán cân thương mại song phương theo giá trị gia tăng có thể khác hẳn cán cân theo số liệu gộp, nên tranh luận về “thặng dư thương mại với nước X” cần đọc kèm phương pháp.',
    'Xuất khẩu lớn nhưng giá trị gia tăng thấp vẫn tạo việc làm và ngoại tệ, song thu nhập giữ lại trên mỗi đơn vị xuất khẩu thấp hơn và dễ bị tổn thương khi chuỗi cung ứng thay đổi.',
  ],
  causalChain: [
    { from: 'Doanh nghiệp nhập linh kiện để lắp ráp xuất khẩu', to: 'Kim ngạch xuất khẩu và nhập khẩu cùng tăng', mechanism: 'Cùng một dòng hàng được ghi nhận ở cả hai phía của cán cân hải quan.' },
    { from: 'Tỷ trọng đầu vào nhập khẩu cao', to: 'Giá trị gia tăng trong nước trên mỗi đồng xuất khẩu thấp', mechanism: 'Phần lớn giá trị thuộc về nơi sản xuất linh kiện và thiết kế, chỉ phần chênh lệch ở khâu lắp ráp ở lại.' },
    { from: 'Giá trị gia tăng trong nước thấp', to: 'Tăng trưởng GDP và thu nhập kém hơn so với con số xuất khẩu', mechanism: 'GDP đo giá trị gia tăng, không đo kim ngạch gộp.' },
    { from: 'Nâng tỷ lệ nội địa hóa hoặc chuyển lên khâu giá trị cao', to: 'Giá trị gia tăng trên mỗi đồng xuất khẩu tăng', mechanism: 'Doanh nghiệp trong nước cung ứng đầu vào, thiết kế, dịch vụ đi kèm nên phần thu nhập giữ lại lớn hơn.' },
  ],
  vietnamImpact: [
    { group: 'Nền kinh tế nói chung', effect: 'Xuất khẩu điện tử và máy móc có phần đầu vào nhập khẩu lớn, nên đóng góp thực vào GDP thấp hơn tỷ trọng trong kim ngạch.', direction: 'mixed' },
    { group: 'Doanh nghiệp nội địa cung ứng đầu vào', effect: 'Cơ hội tăng phần giá trị gia tăng nếu đạt chuẩn của doanh nghiệp FDI.', direction: 'up' },
    { group: 'Lao động', effect: 'Việc làm tạo ra nhiều nhưng thu nhập thường gắn với khâu lắp ráp; nâng kỹ năng là điều kiện để lên khâu cao hơn.', direction: 'mixed' },
    { group: 'Người đọc tin tức thương mại', effect: 'Thặng dư/thâm hụt song phương trong tin tức thường là số liệu gộp, dễ hiểu nhầm so với lợi ích thực.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ lệ giá trị gia tăng trong nước của xuất khẩu (TiVA)', why: 'Đo trực tiếp phần xuất khẩu thuộc về nền kinh tế trong nước.', where: 'Cơ sở dữ liệu TiVA của OECD–WTO; trang Global Value Chains của WTO' },
    { name: 'Tỷ trọng nhập khẩu trung gian trong tổng nhập khẩu', why: 'Cho biết mức phụ thuộc đầu vào nước ngoài của ngành xuất khẩu.', where: 'Cục Thống kê, Hải quan (phân loại hàng theo mục đích sử dụng)' },
    { name: 'Tỷ lệ nội địa hóa theo ngành', why: 'Dấu hiệu tiến lên khâu giá trị cao hơn.', where: 'Bộ Công Thương, báo cáo ngành' },
  ],
  counterpoints: [
    'Giá trị gia tăng thấp chưa có nghĩa là xấu: nhiều nước đã bắt đầu từ lắp ráp rồi nâng dần; lắp ráp tạo việc làm và học công nghệ.',
    'Số liệu TiVA công bố chậm hơn và dựa trên giả định về bảng vào–ra, nên không thể thay thế thống kê hải quan cho theo dõi hằng tháng.',
    'Chuyển sang đo giá trị gia tăng không làm biến mất lợi ích của thương mại; điều quan trọng là diễn giải đúng, không phải xem nhẹ xuất khẩu.',
  ],
  glossary: [
    { term: 'Xuất khẩu gộp', definition: 'Tổng giá trị hàng/dịch vụ qua biên giới, bao gồm cả phần đầu vào nhập khẩu.' },
    { term: 'Giá trị gia tăng', definition: 'Phần giá trị được tạo ra ở một khâu sản xuất: doanh thu trừ chi phí đầu vào trung gian.' },
    { term: 'Chuỗi giá trị toàn cầu (GVC)', definition: 'Quá trình sản xuất một sản phẩm được chia cho nhiều nước theo từng công đoạn.' },
    { term: 'TiVA', definition: 'Bộ số liệu Thương mại theo Giá trị gia tăng của OECD–WTO.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'value-added-trade-gross-exports-q',
    question: 'Ngành A xuất khẩu 100 đơn vị, trong đó đầu vào nhập khẩu là 80 (ví dụ giả định). Ngành B xuất khẩu 60, đầu vào nhập khẩu là 10. Ngành nào đóng góp nhiều hơn vào giá trị gia tăng trong nước (bỏ qua các điều chỉnh khác)?',
    options: [
      { id: 'a', text: 'Ngành A, vì kim ngạch xuất khẩu lớn hơn.', explain: 'Kim ngạch gộp bao gồm 80 đầu vào nhập khẩu, nên phần ở lại trong nước chỉ khoảng 20.' },
      { id: 'b', text: 'Ngành B, vì giá trị gia tăng trong nước khoảng 50 so với khoảng 20 của ngành A.', correct: true, explain: 'Đúng. 60 − 10 = 50 lớn hơn 100 − 80 = 20; xếp hạng theo kim ngạch gộp và theo giá trị gia tăng có thể ngược nhau.' },
      { id: 'c', text: 'Hai ngành như nhau.', explain: 'Giá trị gia tăng khác nhau do tỷ trọng đầu vào nhập khẩu khác nhau.' },
    ],
  },
  sources: [
    { title: 'Global Value Chains', publisher: 'World Trade Organization', url: 'https://www.wto.org/english/res_e/statis_e/miwi_e/miwi_e.htm' },
    { title: 'Trade in value-added (TiVA)', publisher: 'OECD', url: 'https://www.oecd.org/en/topics/sub-issues/trade-in-value-added.html' },
    { title: 'Global value chain', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Global_value_chain' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 102,
}
