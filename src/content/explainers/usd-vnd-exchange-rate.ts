import type { Explainer } from '../explainer'

export const usdVndExchangeRate: Explainer = {
  id: 'usd-vnd-exchange-rate',
  slug: 'usd-vnd-exchange-rate',
  question: 'Tỷ giá USD/VND được điều hành thế nào và vì sao lúc tăng lúc giảm?',
  title: 'Tỷ giá USD/VND: tỷ giá trung tâm, biên độ và vai trò của NHNN',
  topic: 'vietnam-economy',
  tldr: 'Việt Nam không thả nổi hoàn toàn VND: mỗi ngày NHNN công bố **tỷ giá trung tâm**, và ngân hàng thương mại chỉ được giao dịch USD/VND trong một **biên độ** quanh mức đó (±5% kể từ 17/10/2022). Bên trong khung này, tỷ giá chạy theo **cung – cầu ngoại tệ**; khi áp lực quá lớn, NHNN can thiệp bằng dự trữ ngoại hối và công cụ lãi suất. Vì vậy tỷ giá tăng/giảm phản ánh cả dòng tiền thực lẫn lựa chọn chính sách.',
  keyPoints: [
    '**Tỷ giá trung tâm** do NHNN công bố hằng ngày, tính dựa trên diễn biến của một rổ đồng tiền đối tác thương mại lớn, cung – cầu ngoại tệ và cân đối vĩ mô (cơ chế áp dụng từ đầu năm 2016).',
    '**Biên độ** cho tỷ giá giao ngay tại ngân hàng thương mại được nới từ ±3% lên **±5%** từ ngày 17/10/2022, cho phép tỷ giá linh hoạt hơn khi USD toàn cầu mạnh lên.',
    'Bên trong biên độ, tỷ giá do **cung – cầu USD** quyết định: xuất khẩu, FDI giải ngân, kiều hối, vốn ngoại vào chứng khoán làm tăng cung; nhập khẩu, trả nợ nước ngoài, nhu cầu tích trữ làm tăng cầu.',
    'NHNN có ba nhóm công cụ: **bán/mua ngoại tệ** (dùng hoặc bổ sung dự trữ), **hút/bơm VND** qua tín phiếu và OMO để chỉnh chênh lệch lãi suất VND–USD, và **truyền thông, điều chỉnh tỷ giá trung tâm**.',
    'Tỷ giá USD/VND tăng không có nghĩa VND yếu đi với mọi đồng tiền: khi USD mạnh toàn cầu, VND có thể mất giá so với USD nhưng vẫn tăng giá so với yên Nhật hay nhân dân tệ.',
  ],
  causalChain: [
    { from: 'Cầu USD tăng nhanh hơn cung (nhập khẩu, trả nợ, vốn ngoại rút, USD toàn cầu mạnh)', to: 'Tỷ giá tại ngân hàng thương mại tiến dần lên trần biên độ', mechanism: 'Ngân hàng nâng giá mua/bán USD để cân bằng sổ ngoại tệ; tỷ giá thị trường tự do thường nhạy hơn và có thể đi trước.' },
    { from: 'Tỷ giá tại ngân hàng thương mại tiến dần lên trần biên độ', to: 'NHNN can thiệp', mechanism: 'NHNN bán ngoại tệ từ dự trữ cho các ngân hàng, đồng thời có thể điều chỉnh tỷ giá trung tâm hoặc giá bán can thiệp.' },
    { from: 'NHNN can thiệp', to: 'Thanh khoản VND bị hút bớt, lãi suất liên ngân hàng tăng', mechanism: 'Khi bán USD, NHNN thu về VND; kết hợp phát hành tín phiếu sẽ nâng lãi suất VND ngắn hạn, làm việc nắm giữ VND hấp dẫn hơn so với USD.' },
    { from: 'Thanh khoản VND bị hút bớt, lãi suất liên ngân hàng tăng', to: 'Áp lực tỷ giá dịu lại nhưng điều kiện tín dụng chặt hơn', mechanism: 'Chênh lệch lãi suất VND–USD nới rộng giảm động cơ đầu cơ USD; đổi lại, chi phí vốn trong nước có thể nhích lên và dự trữ ngoại hối giảm.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp nhập khẩu, vay nợ bằng USD', effect: 'Khi tỷ giá tăng, chi phí nguyên liệu và nghĩa vụ trả nợ quy ra VND tăng; doanh nghiệp không phòng ngừa rủi ro tỷ giá chịu thiệt nhiều nhất.', direction: 'down' },
    { group: 'Doanh nghiệp xuất khẩu', effect: 'Doanh thu USD quy đổi được nhiều VND hơn, nhưng lợi thế bị thu hẹp nếu đầu vào cũng nhập khẩu hoặc đồng tiền của đối thủ cạnh tranh mất giá mạnh hơn.', direction: 'mixed' },
    { group: 'Người tiêu dùng và lạm phát', effect: 'VND mất giá làm xăng dầu, hàng nhập và nguyên liệu đắt hơn, đẩy CPI lên sau một độ trễ (truyền dẫn tỷ giá).', direction: 'down' },
    { group: 'Người gửi tiết kiệm và người vay VND', effect: 'Nếu NHNN hút tiền để giữ tỷ giá, lãi suất huy động có thể nhích lên (lợi cho người gửi) trong khi lãi vay cũng có thể tăng (bất lợi cho người vay).', direction: 'mixed' },
    { group: 'Nhà đầu tư nước ngoài trên chứng khoán', effect: 'Lợi nhuận tính bằng USD bị bào mòn khi VND mất giá, nên kỳ vọng tỷ giá tăng thường đi kèm bán ròng.', direction: 'down' },
    { group: 'Dự trữ ngoại hối quốc gia', effect: 'Bán USD can thiệp làm "bộ đệm" mỏng đi; ngược lại, khi cung USD dồi dào NHNN có thể mua vào để bổ sung dự trữ.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ giá trung tâm và tỷ giá giao dịch tại ngân hàng thương mại', why: 'Khoảng cách giữa tỷ giá ngân hàng và trần biên độ cho biết dư địa còn lại trước khi NHNN phải can thiệp.', where: 'Website NHNN (sbv.gov.vn); bảng tỷ giá của các ngân hàng thương mại' },
    { name: 'Chỉ số USD (DXY) và tỷ giá của các đồng tiền khu vực (CNY, JPY, KRW, THB)', why: 'Phân biệt áp lực do USD mạnh toàn cầu với áp lực riêng của Việt Nam.', where: 'Dữ liệu thị trường; thống kê tỷ giá của BIS' },
    { name: 'Lãi suất liên ngân hàng VND qua đêm so với lãi suất USD', why: 'Chênh lệch lãi suất âm hoặc quá hẹp là động cơ để nắm giữ USD thay vì VND.', where: 'NHNN công bố lãi suất bình quân liên ngân hàng' },
    { name: 'Cán cân thương mại, FDI giải ngân, kiều hối', why: 'Các nguồn cung USD chính; thặng dư lớn giúp tỷ giá ổn định hơn.', where: 'Cục Thống kê (Bộ Tài chính); Hải quan; báo cáo cán cân thanh toán của NHNN' },
    { name: 'Dự trữ ngoại hối (tính theo số tuần/tháng nhập khẩu)', why: 'Cho biết NHNN còn bao nhiêu sức để can thiệp.', where: 'Báo cáo của IMF, World Bank, ADB về Việt Nam; phát biểu của NHNN' },
  ],
  counterpoints: [
    'Tỷ giá tăng vài phần trăm một năm chưa chắc là "xấu": một mức mất giá vừa phải, có kiểm soát có thể hỗ trợ xuất khẩu và giúp NHNN không phải đốt quá nhiều dự trữ.',
    'Không nên chỉ nhìn tỷ giá USD/VND: tỷ giá danh nghĩa đa phương và tỷ giá thực (đã điều chỉnh lạm phát) mới phản ánh đầy đủ sức cạnh tranh của hàng Việt Nam.',
    'Chênh lệch giữa tỷ giá chợ tự do và ngân hàng thường phóng đại tâm lý ngắn hạn; nó là tín hiệu cảnh báo nhưng không phải thước đo chính thức của cung – cầu.',
  ],
  glossary: [
    { term: 'Tỷ giá trung tâm', definition: 'Mức tỷ giá USD/VND NHNN công bố mỗi ngày làm mốc; ngân hàng thương mại giao dịch trong biên độ quanh mức này.' },
    { term: 'Biên độ tỷ giá', definition: 'Khoảng dao động tối đa được phép so với tỷ giá trung tâm; hiện là ±5% cho giao dịch giao ngay.' },
    { term: 'Can thiệp ngoại hối', definition: 'NHNN mua hoặc bán ngoại tệ với các ngân hàng để điều tiết cung – cầu và ổn định tỷ giá.' },
    { term: 'Truyền dẫn tỷ giá', definition: 'Mức độ thay đổi tỷ giá lan sang giá hàng hóa, dịch vụ trong nước.' },
    { term: 'Tỷ giá thực hiệu dụng (REER)', definition: 'Tỷ giá bình quân với nhiều đối tác, có điều chỉnh chênh lệch lạm phát; dùng để đánh giá sức cạnh tranh.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'usd-vnd-exchange-rate-q',
    question: 'Trong một tháng, tỷ giá USD/VND tăng 1,5% nhưng VND lại tăng giá so với yên Nhật và nhân dân tệ. Cách đọc nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Kinh tế Việt Nam đang gặp khủng hoảng ngoại tệ nghiêm trọng.', explain: 'Một biến động 1,5% nằm xa trong biên độ ±5%, và VND còn mạnh lên với các đồng tiền khác; chưa có dấu hiệu khủng hoảng.' },
      { id: 'b', text: 'Áp lực chủ yếu đến từ USD mạnh lên toàn cầu, không phải riêng Việt Nam; cần xem thêm chỉ số USD, chênh lệch lãi suất và dòng vốn.', correct: true, explain: 'Đúng. Khi USD mạnh với hầu hết đồng tiền, USD/VND tăng là phản ứng chung. So sánh với đồng tiền khu vực giúp tách yếu tố toàn cầu khỏi yếu tố trong nước.' },
      { id: 'c', text: 'NHNN đã cố ý phá giá VND để hỗ trợ xuất khẩu.', explain: 'Không thể kết luận như vậy chỉ từ một con số; NHNN điều hành theo nhiều mục tiêu (tỷ giá, lạm phát, lãi suất) và tỷ giá còn phản ánh cung – cầu thị trường.' },
    ],
  },
  sources: [
    { title: 'Nới biên độ tỷ giá USD/VND từ ±3% lên ±5%', publisher: 'Báo Đấu thầu', url: 'https://baodauthau.vn/noi-bien-do-ty-gia-usdvnd-tu-3-len-5-post129882.html' },
    { title: 'Ngân hàng Nhà nước Việt Nam', publisher: 'NHNN', url: 'https://www.sbv.gov.vn' },
    { title: 'Bilateral exchange rates (USD)', publisher: 'BIS', url: 'https://www.bis.org/statistics/xrusd.htm' },
    { title: 'Vietnam Overview', publisher: 'World Bank', url: 'https://www.worldbank.org/en/country/vietnam/overview' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
