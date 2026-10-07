import type { Explainer } from '../../../shared/explainer'

export const etfAndMutualFunds: Explainer = {
  id: 'etf-and-mutual-funds',
  slug: 'etf-and-mutual-funds',
  question: 'ETF và quỹ mở ở Việt Nam khác nhau thế nào, nên đọc tài liệu quỹ ra sao?',
  title: 'ETF và quỹ mở ở Việt Nam: khác biệt, phí và rủi ro',
  topic: 'markets-investing',
  tldr: 'Cả **ETF** và **quỹ mở** đều gom tiền của nhiều nhà đầu tư để đầu tư theo danh mục do công ty quản lý quỹ vận hành. Khác biệt chính nằm ở **cách mua bán**: chứng chỉ quỹ ETF giao dịch trên sàn như cổ phiếu với giá thị trường trong phiên; quỹ mở mua/bán lại trực tiếp với quỹ theo **giá trị tài sản ròng (NAV)** ở các kỳ giao dịch định sẵn. Trước khi chọn, hãy so sánh chiến lược, tổng chi phí, mức sai lệch so với chỉ số tham chiếu và rủi ro tập trung.',
  keyPoints: [
    '**ETF** ở Việt Nam là quỹ chỉ số niêm yết: mua bán qua tài khoản chứng khoán trong giờ giao dịch; giá có thể chênh nhẹ so với NAV (giao dịch ở mức **chiết khấu/thặng dư**). Các thành viên lập quỹ có thể hoán đổi lô lớn chứng chỉ quỹ lấy rổ cổ phiếu, giúp kéo giá về gần NAV.',
    '**Quỹ mở** mua bán qua đại lý phân phối/ứng dụng của công ty quản lý quỹ theo NAV của kỳ giao dịch kế tiếp, nên bạn không biết chính xác giá khi đặt lệnh; thường có phí mua, phí bán lại (giảm dần theo thời gian nắm giữ) và chương trình đầu tư định kỳ.',
    '**Thụ động** (bám chỉ số) thường phí thấp hơn, kết quả xoay quanh chỉ số trừ chi phí; **chủ động** (tự chọn tài sản) có thể vượt hoặc thua chỉ số, phí cao hơn. Quỹ mở ở Việt Nam đa số là quỹ chủ động: cổ phiếu, trái phiếu, cân bằng.',
    'Rủi ro chính: rủi ro thị trường (quỹ không bảo đảm vốn), **sai lệch mô phỏng** (tracking error) của ETF, rủi ro tập trung khi chỉ số chứa ít cổ phiếu hoặc nặng một ngành, rủi ro thanh khoản với quỹ trái phiếu khi thị trường căng thẳng.',
    'Đọc tài liệu quỹ: **bản cáo bạch** (chiến lược, hạn mức đầu tư, phí, rủi ro), **điều lệ quỹ**, **báo cáo hằng tháng** (NAV, danh mục lớn nhất, lợi suất so với tham chiếu), báo cáo tài chính quỹ. Đây là kiến thức nền, không phải khuyến nghị đầu tư.',
  ],
  causalChain: [
    { from: 'Nhà đầu tư góp tiền vào quỹ', to: 'Công ty quản lý quỹ đầu tư theo chiến lược công bố', mechanism: 'Tài sản quỹ được lưu ký tại ngân hàng giám sát, tách biệt với tài sản của công ty quản lý quỹ.' },
    { from: 'Công ty quản lý quỹ đầu tư theo chiến lược công bố', to: 'NAV mỗi chứng chỉ quỹ biến động theo danh mục', mechanism: 'NAV = (Tổng tài sản – Nợ phải trả, gồm phí đã trích) ÷ số chứng chỉ quỹ đang lưu hành.' },
    { from: 'Chi phí quỹ (phí quản lý, lưu ký, giao dịch, phí mua/bán)', to: 'Lợi suất nhà đầu tư thấp hơn lợi suất danh mục gộp', mechanism: 'Phí quản lý trích hằng ngày vào NAV; phí mua/bán trừ trực tiếp khi giao dịch.' },
    { from: 'Giá ETF trên sàn lệch khỏi NAV', to: 'Thành viên lập quỹ hoán đổi để kiếm chênh lệch', mechanism: 'Khi ETF có giá thặng dư, họ mua rổ cổ phiếu đổi lấy chứng chỉ quỹ để bán ra; khi chiết khấu thì làm ngược lại, kéo giá về gần NAV.' },
    { from: 'Chỉ số tham chiếu thay đổi thành phần (kỳ cơ cấu)', to: 'ETF bắt buộc mua/bán cổ phiếu tương ứng', mechanism: 'Quỹ thụ động phải mô phỏng chỉ số nên giao dịch theo danh sách cơ cấu, tạo áp lực mua/bán lên các mã liên quan.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân mới', effect: 'Tiếp cận danh mục đa dạng với số vốn nhỏ, giảm rủi ro chọn sai một mã; vẫn chịu rủi ro thị trường.', direction: 'up' },
    { group: 'Người tích lũy dài hạn qua chứng chỉ quỹ', effect: 'Theo báo chí, Luật Thuế TNCN 2025 (hiệu lực 1/7/2026) ưu đãi thuế cho chứng chỉ quỹ nắm giữ từ 2 năm trở lên và giảm thuế với lợi tức từ quỹ; cần kiểm tra hướng dẫn cụ thể cho từng loại quỹ.', direction: 'up' },
    { group: 'Doanh nghiệp niêm yết trong các rổ chỉ số (VN30, VNDiamond, VNFIN Lead…)', effect: 'Được ETF mua thụ động; giá có thể biến động mạnh quanh kỳ cơ cấu khi bị thêm vào hoặc loại ra.', direction: 'mixed' },
    { group: 'Công ty quản lý quỹ', effect: 'Cạnh tranh về phí và hiệu quả; quỹ chủ động chịu áp lực chứng minh lợi suất sau phí so với ETF chi phí thấp.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tổng chi phí hằng năm và biểu phí mua/bán/chuyển đổi', why: 'Chi phí là phần chắc chắn làm giảm lợi suất mỗi năm.', where: 'Bản cáo bạch, điều lệ quỹ, website công ty quản lý quỹ' },
    { name: 'Sai lệch mô phỏng (tracking error/tracking difference) của ETF', why: 'Cho biết ETF bám chỉ số tốt đến đâu.', where: 'Báo cáo định kỳ của quỹ; dữ liệu chỉ số trên HOSE' },
    { name: 'Mức chiết khấu/thặng dư giá ETF so với iNAV/NAV', why: 'Tránh mua ETF với giá cao hơn nhiều so với giá trị tài sản.', where: 'Bảng giá trên HOSE, website quỹ, ứng dụng công ty chứng khoán' },
    { name: 'Lợi suất nhiều năm so với chỉ số tham chiếu, top 10 khoản đầu tư', why: 'Đánh giá năng lực quỹ chủ động và mức tập trung danh mục.', where: 'Báo cáo hằng tháng (factsheet) của quỹ' },
    { name: 'Giấy phép thành lập quỹ và công ty quản lý quỹ', why: 'Chỉ đầu tư vào quỹ được cấp phép, tránh các "quỹ" huy động trái phép.', where: 'Website UBCKNN (ssc.gov.vn)' },
  ],
  counterpoints: [
    'Một số ETF ở Việt Nam có thanh khoản thấp, chênh lệch giá mua–bán rộng; khi đó chi phí giao dịch thực tế có thể lớn hơn mức phí quản lý.',
    'Chỉ số tham chiếu có thể tập trung vào vài ngành (ví dụ ngân hàng, bất động sản), nên "mua cả thị trường" chưa chắc là đa dạng hóa tốt.',
    'Quỹ chủ động có thể vượt chỉ số trong một số giai đoạn, nhất là ở thị trường kém hiệu quả; vấn đề là xác định trước quỹ nào làm được điều đó một cách bền vững.',
  ],
  glossary: [
    { term: 'NAV', definition: 'Giá trị tài sản ròng của quỹ; NAV/chứng chỉ quỹ là giá trị mỗi đơn vị quỹ.' },
    { term: 'ETF', definition: 'Quỹ hoán đổi danh mục, mô phỏng một chỉ số và niêm yết giao dịch trên sở giao dịch.' },
    { term: 'Quỹ mở', definition: 'Quỹ mà nhà đầu tư mua/bán lại chứng chỉ quỹ trực tiếp với quỹ theo NAV ở các kỳ giao dịch định kỳ.' },
    { term: 'Thành viên lập quỹ (AP)', definition: 'Tổ chức (thường là công ty chứng khoán) được phép hoán đổi lô lớn ETF lấy rổ chứng khoán cơ cấu và ngược lại.' },
    { term: 'Tracking error', definition: 'Mức dao động của chênh lệch lợi suất giữa ETF và chỉ số tham chiếu.' },
    { term: 'Ngân hàng giám sát', definition: 'Ngân hàng lưu ký tài sản quỹ và giám sát việc tuân thủ của công ty quản lý quỹ.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'etf-and-mutual-funds-q',
    question: 'Bạn muốn đặt lệnh và biết ngay mức giá khớp trong phiên, đồng thời muốn phí quản lý thấp, bám một chỉ số. Lựa chọn và lưu ý phù hợp nhất là gì?',
    options: [
      { id: 'a', text: 'Quỹ mở cổ phiếu chủ động, vì giá mua luôn bằng NAV hôm trước.', explain: 'Quỹ mở khớp theo NAV của kỳ giao dịch sau khi đặt lệnh (không phải NAV đã biết), thường có phí mua/bán và là quỹ chủ động với phí quản lý cao hơn.' },
      { id: 'b', text: 'ETF niêm yết, nhưng cần kiểm tra thanh khoản, chênh lệch giá so với NAV và sai lệch mô phỏng.', correct: true, explain: 'Đúng. ETF giao dịch trong phiên như cổ phiếu và thường có phí quản lý thấp; rủi ro thực tế nằm ở thanh khoản kém, giá lệch NAV và tracking error.' },
      { id: 'c', text: 'Bất kỳ quỹ nào cũng như nhau vì đều đầu tư vào cổ phiếu Việt Nam.', explain: 'Quỹ khác nhau về cơ chế giao dịch, chiến lược, phí, mức tập trung và chỉ số tham chiếu; những khác biệt này tác động lớn tới kết quả dài hạn.' },
    ],
  },
  sources: [
    { title: 'Characteristics of Mutual Funds and Exchange-Traded Funds (ETFs) – Investor Bulletin', publisher: 'Investor.gov (SEC)', url: 'https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/characteristics-mutual-funds-exchange-traded-funds' },
    { title: 'Updated Investor Bulletin: Exchange-Traded Funds (ETFs)', publisher: 'Investor.gov (SEC)', url: 'https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-24' },
    { title: 'Ủy ban Chứng khoán Nhà nước', publisher: 'UBCKNN', url: 'https://www.ssc.gov.vn' },
    { title: 'Nhà đầu tư chứng khoán được miễn, giảm thuế với 2 khoản thu nhập từ ngày 1/7', publisher: 'VietnamFinance', url: 'https://vietnamfinance.vn/nha-dau-tu-chung-khoan-duoc-mien-giam-thue-voi-2-khoan-thu-nhap-tu-ngay-1-7-d146981.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
