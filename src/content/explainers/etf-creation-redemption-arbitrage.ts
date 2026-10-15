import type { Explainer } from '../../../shared/explainer'

export const etfCreationRedemptionArbitrage: Explainer = {
  id: 'etf-creation-redemption-arbitrage',
  slug: 'etf-creation-redemption-arbitrage',
  question: 'Vì sao giá ETF thường bám sát giá trị tài sản ròng (NAV) và khi nào cơ chế đó trục trặc?',
  title: 'ETF tạo lập/mua lại và arbitrage giữ giá sát NAV',
  topic: 'markets-investing',
  tldr: 'ETF được giữ sát NAV nhờ các **tổ chức tạo lập thị trường được ủy quyền (AP)**: khi giá ETF cao hơn NAV họ tạo thêm chứng chỉ để bán, khi thấp hơn họ mua lại để đổi lấy tài sản bên dưới, và hưởng chênh lệch. Cơ chế này hoạt động tốt với tài sản thanh khoản cao, nhưng có thể yếu khi tài sản bên dưới khó giao dịch — như trái phiếu trong tháng 3–4/2020 theo BIS.',
  keyPoints: [
    'Theo Wikipedia: các nhà môi giới lớn (AP) tạo và mua lại ETF trực tiếp với tổ chức phát hành theo khối lớn gọi là "creation unit", thường bằng hiện vật: khi tạo, AP giao rổ chứng khoán bên dưới để nhận chứng chỉ ETF; khi mua lại, trả lại chứng chỉ để nhận rổ.',
    'Ví dụ giả định: NAV một chứng chỉ 100.000 đồng, giá giao dịch 101.000 đồng (cao hơn 1%). AP mua rổ tài sản trị giá 100.000 đồng, đổi lấy chứng chỉ mới, bán 101.000 đồng — áp lực bán kéo giá ETF về NAV. Nếu giá thấp hơn NAV, quy trình đảo ngược.',
    'Theo BIS Quarterly Review (3/2021, Todorov): trong tháng 3–4/2020, giá ETF trái phiếu lệch mạnh khỏi NAV và chênh lệch đó "không được arbitrage xóa bỏ"; sai số bám sát của một số quỹ vượt 200 điểm cơ bản, so với mức trung bình lịch sử khoảng 0,7 điểm cơ bản.',
    'BIS nhận xét trái phiếu kém thanh khoản, kích thước giao dịch tối thiểu lớn và có ngày đáo hạn, nên rổ tạo lập/mua lại thường khác danh mục thực của quỹ, làm hạn chế khả năng chỉnh giá của AP.',
    'ETF còn có rủi ro khác như sai số bám sát và rủi ro đối tác khi dùng phái sinh thay vì sở hữu tài sản; ETF đòn bẩy/nghịch đảo có hiệu ứng tái cân bằng hằng ngày làm kết quả dài hạn khác bội số mong đợi.',
  ],
  causalChain: [
    { from: 'Giá ETF cao hơn NAV (premium)', to: 'AP tạo thêm chứng chỉ ETF', mechanism: 'AP mua rổ tài sản và đổi lấy chứng chỉ ETF mới từ tổ chức phát hành rồi bán trên sàn ở giá cao, ghi nhận chênh lệch lợi nhuận.' },
    { from: 'AP tăng nguồn cung chứng chỉ', to: 'Giá ETF giảm về NAV', mechanism: 'Bán thêm chứng chỉ ở thị trường thứ cấp làm giảm áp lực mua và kéo giá về giá trị tài sản.' },
    { from: 'Giá ETF thấp hơn NAV (discount)', to: 'AP mua lại ETF, đổi lấy tài sản', mechanism: 'AP mua chứng chỉ rẻ, trả lại tổ chức phát hành để nhận rổ tài sản trị giá cao hơn và bán rổ đó.' },
    { from: 'Tài sản bên dưới khó giao dịch hoặc thị trường căng thẳng', to: 'Arbitrage yếu, premium/discount kéo dài', mechanism: 'Chi phí, rủi ro và thời gian trao đổi tài sản tăng, rổ không phản ánh toàn bộ danh mục và NAV cũng có thể cập nhật trễ (BIS).' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân mua ETF tại Việt Nam', effect: 'Cần đọc cơ chế tạo lập của từng quỹ; thanh khoản của tài sản bên dưới và số lượng AP ảnh hưởng độ bám NAV.', direction: 'mixed' },
    { group: 'Quỹ ETF trong nước', effect: 'Phụ thuộc vào năng lực các thành viên tạo lập và thanh khoản cổ phiếu cơ sở; thanh khoản thấp có thể làm chênh lệch giá/NAV kéo dài.', direction: 'mixed' },
    { group: 'Công ty chứng khoán và tổ chức tạo lập', effect: 'Có cơ hội kiếm lời từ chênh lệch nhỏ nhưng chịu rủi ro thanh khoản và chi phí giao dịch.', direction: 'mixed' },
    { group: 'Nhà đầu tư nước ngoài vào ETF thị trường mới nổi/cận biên', effect: 'Dòng vốn qua ETF tạo mua/bán rổ cổ phiếu cơ sở, có thể khuếch đại biến động giá khi dòng tiền đổi chiều.', direction: 'mixed' },
    { group: 'Nhà quản lý thị trường', effect: 'Cần giám sát minh bạch NAV, danh mục và cơ chế tạo lập để bảo vệ nhà đầu tư nhỏ.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Chênh lệch giá/NAV (premium/discount)', why: 'Cho biết cơ chế arbitrage có hoạt động hay không.', where: 'Trang thông tin của quỹ và công ty quản lý quỹ; sàn giao dịch' },
    { name: 'Thanh khoản của ETF và tài sản bên dưới', why: 'Thanh khoản thấp làm arbitrage đắt đỏ và chênh lệch lớn hơn.', where: 'Sở giao dịch chứng khoán; báo cáo quỹ' },
    { name: 'Sai số bám sát (tracking error) và sai biệt bám sát', why: 'Đo độ lệch so với chỉ số tham chiếu.', where: 'Báo cáo định kỳ của quỹ' },
    { name: 'Số lượng AP và quy mô creation unit', why: 'Ít AP hoặc đơn vị tạo lập lớn làm giảm hiệu quả.', where: 'Bản cáo bạch quỹ' },
  ],
  counterpoints: [
    'Arbitrage không loại bỏ hoàn toàn chênh lệch: chi phí giao dịch, thời gian và rủi ro vẫn tồn tại, nên giá ETF có thể lệch NAV hợp lý trong ngày.',
    'Một số bằng chứng trong BIS chỉ nói về ETF trái phiếu ở Mỹ; kết quả với ETF cổ phiếu thanh khoản cao có thể khác.',
    'NAV cũng có thể là "giá cũ" khi thị trường tài sản bên dưới đóng cửa hoặc thanh khoản thấp, nên premium/discount đôi khi chỉ là nhiễu thời gian.',
  ],
  glossary: [
    { term: 'NAV', definition: 'Giá trị tài sản ròng trên mỗi chứng chỉ quỹ.' },
    { term: 'Tổ chức tạo lập được ủy quyền (AP)', definition: 'Tổ chức tài chính lớn có quyền tạo/mua lại chứng chỉ ETF với tổ chức phát hành.' },
    { term: 'Creation unit', definition: 'Khối chứng chỉ ETF tối thiểu mà AP có thể tạo hoặc mua lại.' },
    { term: 'Premium / discount', definition: 'Giá ETF cao hơn / thấp hơn NAV.' },
    { term: 'Tracking error', definition: 'Độ lệch lợi suất của quỹ so với chỉ số tham chiếu.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'etf-creation-redemption-arbitrage-q',
    question: 'Giá ETF thấp hơn NAV 1%. Theo cơ chế tạo lập/mua lại, điều gì sẽ giúp kéo giá về NAV?',
    options: [
      { id: 'a', text: 'AP tạo thêm chứng chỉ để bán.', explain: 'Đó là cơ chế khi ETF ở premium (giá cao hơn NAV).' },
      { id: 'b', text: 'AP mua chứng chỉ rẻ, đổi lấy rổ tài sản bên dưới và bán rổ đó lấy chênh lệch.', correct: true, explain: 'Đúng: cầu mua chứng chỉ ETF tăng nâng giá về NAV; cơ chế này kém hiệu quả khi tài sản bên dưới khó giao dịch.' },
      { id: 'c', text: 'Nhà đầu tư cá nhân tự đổi chứng chỉ lấy tài sản với quỹ.', explain: 'Theo mô tả, thường chỉ AP giao dịch trực tiếp với tổ chức phát hành, theo khối lớn.' },
    ],
  },
  sources: [
    { title: 'The anatomy of bond ETF arbitrage (K. Todorov, BIS Quarterly Review, 3/2021)', publisher: 'Bank for International Settlements', url: 'https://www.bis.org/publ/qtrpdf/r_qt2103d.pdf' },
    { title: 'Exchange-traded fund', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Exchange-traded_fund' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 130,
}
