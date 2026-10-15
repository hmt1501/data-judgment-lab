import type { Explainer } from '../../../shared/explainer'

export const vietnamTradeSurplusUsEuMarkets: Explainer = {
  id: 'vietnam-trade-surplus-us-eu-markets',
  slug: 'vietnam-trade-surplus-us-eu-markets',
  question: 'Việt Nam thặng dư thương mại lớn với Mỹ và EU có ý nghĩa gì?',
  title: 'Thặng dư với Mỹ-EU bù cho nhập siêu với châu Á, và là điểm nhạy cảm về thuế quan',
  topic: 'vietnam-economy',
  tldr: 'Theo Cục Thống kê (12/10/2026), 9 tháng 2026 Việt Nam thặng dư khoảng **122,62 tỷ USD với Mỹ** và **36,06 tỷ USD với EU**, trong khi cả nước vẫn nhập siêu 19,42 tỷ USD. Nghĩa là thặng dư với các thị trường tiêu dùng lớn đang bù cho nhập siêu với các nguồn cung nguyên liệu, linh kiện ở châu Á. Con số này đồng thời là điểm nhạy cảm chính trị: thặng dư song phương lớn thường là mục tiêu của thuế quan và điều tra thương mại.',
  keyPoints: [
    'Theo Cục Thống kê (thông cáo 12/10/2026): 9 tháng 2026 xuất khẩu 434,30 tỷ USD (+24,5%), nhập khẩu 453,72 tỷ USD (+36,7%), nhập siêu 19,42 tỷ USD; riêng tháng 9 xuất siêu 1,27 tỷ USD, lần đầu sau chín tháng nhập siêu liên tiếp.',
    'Thặng dư với Hoa Kỳ khoảng 122,62 tỷ USD (+23,8%), xuất khẩu sang Mỹ đạt 140,0 tỷ USD (tự tính khoảng 32% kim ngạch xuất khẩu cả nước); thặng dư với EU khoảng 36,06 tỷ USD (+25,3%).',
    'Thặng dư song phương là chênh lệch xuất-nhập giữa hai nước, không phải "lợi nhuận": phần lớn hàng xuất sang Mỹ-EU dùng linh kiện, nguyên liệu nhập từ châu Á, nên giá trị gia tăng giữ lại ở Việt Nam nhỏ hơn con số xuất khẩu.',
    'Một phần đáng kể xuất khẩu do doanh nghiệp FDI thực hiện; lợi nhuận của họ có thể được chuyển ra nước ngoài, nên thặng dư thương mại không bằng thu nhập của người dân trong nước.',
    'Rủi ro chính là tập trung thị trường: khi một nước đối tác chiếm tỷ trọng lớn, thay đổi thuế quan hoặc cầu tiêu dùng ở đó lan nhanh sang đơn hàng, việc làm trong nước.',
  ],
  causalChain: [
    { from: 'Doanh nghiệp toàn cầu dịch chuyển sản xuất sang Việt Nam', to: 'Xuất khẩu sang Mỹ-EU tăng', mechanism: 'Việt Nam là điểm lắp ráp, gia công; sản phẩm hoàn chỉnh bán cho thị trường tiêu dùng lớn, nhất là ngành điện tử, dệt may, đồ gỗ.' },
    { from: 'Xuất khẩu tăng', to: 'Nhập khẩu nguyên liệu, linh kiện từ châu Á tăng', mechanism: 'Chuỗi cung ứng lắp ráp cần đầu vào nhập khẩu; thặng dư với Mỹ-EU đi kèm nhập siêu với các nguồn cung đầu vào.' },
    { from: 'Thặng dư song phương lớn', to: 'Chú ý chính trị, thuế quan, điều tra chống lẩn tránh', mechanism: 'Nước thâm hụt thương mại có thể coi đó là "bất công", dẫn tới thuế quan hoặc điều tra xuất xứ, chống bán phá giá.' },
    { from: 'Rủi ro thuế quan hoặc cầu giảm', to: 'Đơn hàng, việc làm và đầu tư FDI bị ảnh hưởng', mechanism: 'Doanh nghiệp xuất khẩu giảm sản xuất, nhà đầu tư cân nhắc lại địa điểm; áp lực tỷ giá cũng xuất hiện khi dòng ngoại tệ giảm.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp xuất khẩu điện tử, dệt may, gỗ', effect: 'Hưởng lợi từ cầu Mỹ-EU lớn, nhưng chịu rủi ro thuế quan và điều tra xuất xứ do thặng dư song phương cao.', direction: 'mixed' },
    { group: 'Người lao động ở khu công nghiệp', effect: 'Việc làm gắn chặt với đơn hàng xuất khẩu; đơn hàng giảm tác động nhanh đến thu nhập và việc làm.', direction: 'mixed' },
    { group: 'Thị trường ngoại hối', effect: 'Thặng dư xuất khẩu hỗ trợ nguồn cung ngoại tệ và tỷ giá; nhập siêu tổng thể cho thấy nguồn cung này không rộng như con số thặng dư riêng Mỹ-EU.', direction: 'mixed' },
    { group: 'Nhà đầu tư và nhà hoạch định chính sách', effect: 'Cần theo dõi đa dạng hóa thị trường, nâng tỷ lệ nội địa hóa và hiệp định như EVFTA để giảm phụ thuộc.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Xuất nhập khẩu theo thị trường (Mỹ, EU, Trung Quốc, ASEAN)', why: 'Cho thấy mức tập trung và cơ cấu nhập siêu/xuất siêu theo đối tác.', where: 'Cục Thống kê (nso.gov.vn); Cục Hải quan' },
    { name: 'Cán cân thương mại tháng và lũy kế', why: 'Đánh giá áp lực tỷ giá và dòng ngoại tệ.', where: 'Thông cáo hằng tháng của Cục Thống kê' },
    { name: 'Thông báo thuế quan, điều tra thương mại của Mỹ và EU', why: 'Rủi ro chính sách thương mại có thể đổi cục diện xuất khẩu.', where: 'USTR, Bộ Thương mại Mỹ, Ủy ban châu Âu; Bộ Công Thương' },
    { name: 'Tỷ lệ nội địa hóa và giá trị gia tăng trong xuất khẩu', why: 'Cho biết giá trị thực sự giữ lại ở Việt Nam.', where: 'OECD (TiVA), Ngân hàng Thế giới' },
  ],
  counterpoints: [
    'Số liệu song phương phụ thuộc cách ghi nhận xuất xứ và hải quan hai nước; con số do Việt Nam và Mỹ công bố có thể khác nhau, nên đọc cùng nguồn đối chiếu.',
    'Thặng dư song phương không nhất thiết xấu hay tốt; điều quan trọng là cán cân tổng thể, cơ cấu hàng hóa và việc nâng giá trị gia tăng. Một nước có thể thặng dư với nước này, thâm hụt với nước khác mà vẫn lành mạnh.',
    'Số liệu 9 tháng 2026 là số liệu ước tính ban đầu của Cục Thống kê; cần chờ số liệu điều chỉnh trước khi kết luận chắc chắn.',
  ],
  glossary: [
    { term: 'Thặng dư thương mại', definition: 'Xuất khẩu lớn hơn nhập khẩu trong một kỳ.' },
    { term: 'Nhập siêu', definition: 'Nhập khẩu lớn hơn xuất khẩu.' },
    { term: 'Thặng dư song phương', definition: 'Chênh lệch xuất-nhập chỉ tính giữa hai nước.' },
    { term: 'Giá trị gia tăng nội địa', definition: 'Phần giá trị xuất khẩu do nội địa tạo ra, sau khi trừ đầu vào nhập khẩu.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-trade-surplus-us-eu-markets-q',
    question: 'Việt Nam thặng dư lớn với Mỹ nhưng cả nước vẫn nhập siêu trong 9 tháng. Cách giải thích nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Số liệu có lỗi, không thể cùng tồn tại.', explain: 'Hoàn toàn có thể: thặng dư với Mỹ-EU có thể nhỏ hơn nhập siêu với các nước cung cấp nguyên liệu, linh kiện.' },
      { id: 'b', text: 'Thặng dư với Mỹ-EU được dùng để bù nhập siêu với các nguồn cung đầu vào, nhất là châu Á.', correct: true, explain: 'Đúng. Hàng lắp ráp bán sang Mỹ-EU dựa trên đầu vào nhập khẩu, nên cán cân tổng thể phụ thuộc cả hai phía.' },
      { id: 'c', text: 'Thặng dư với Mỹ nghĩa là Việt Nam đang thu lợi nhuận tương ứng từ Mỹ.', explain: 'Thặng dư chỉ là chênh lệch xuất-nhập, không phải lợi nhuận; một phần giá trị thuộc doanh nghiệp FDI và nhà cung cấp đầu vào nước ngoài.' },
    ],
  },
  sources: [
    { title: 'Xuất siêu trở lại, tín hiệu đảo chiều các tháng cuối năm', publisher: 'Cục Thống kê (12/10/2026)', url: 'https://www.nso.gov.vn/?p=62684' },
    { title: 'Balance of trade', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Balance_of_trade' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 45,
}
