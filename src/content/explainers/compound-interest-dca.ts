import type { Explainer } from '../explainer'

export const compoundInterestDca: Explainer = {
  id: 'compound-interest-dca',
  slug: 'compound-interest-dca',
  question: 'Lãi kép và đầu tư định kỳ (DCA) hoạt động thế nào, có thật sự hiệu quả?',
  title: 'Lãi kép và đầu tư định kỳ (DCA): sức mạnh của thời gian và kỷ luật',
  topic: 'markets-investing',
  tldr: '**Lãi kép** là "lãi sinh lãi": lợi nhuận được tái đầu tư nên phần tăng thêm mỗi năm ngày càng lớn, và **thời gian** là biến số mạnh nhất. **DCA** (bỏ một số tiền cố định theo chu kỳ) giúp mua được nhiều đơn vị hơn khi giá thấp và tránh dồn tiền vào một thời điểm, nhưng không đảm bảo có lãi. Phí, thuế và chênh lệch giá mua–bán bào mòn lãi kép đáng kể theo thời gian.',
  keyPoints: [
    'Công thức lãi kép: **Giá trị cuối = Vốn × (1 + r)^n**. *Minh họa*: 100 triệu với lợi suất giả định 8%/năm thành khoảng 216 triệu sau 10 năm và khoảng 466 triệu sau 20 năm — 10 năm sau tăng nhiều hơn 10 năm đầu.',
    '*Minh họa DCA*: góp 2 triệu/tháng trong 10 năm (tổng 240 triệu), lợi suất giả định 8%/năm tính lãi kép hằng tháng, được khoảng 366 triệu; kéo dài 20 năm (tổng 480 triệu) được khoảng 1,18 tỷ. Các con số chỉ để minh họa cơ chế, không phải dự báo lợi suất.',
    'DCA làm **giá vốn bình quân** thấp hơn giá bình quân của các kỳ mua khi giá dao động, vì cùng số tiền mua được nhiều đơn vị hơn lúc giá thấp. *Ví dụ*: mỗi tháng 1 triệu, giá lần lượt 20.000 – 15.000 – 25.000 đồng → giá vốn bình quân khoảng 19.150 đồng, thấp hơn mức giá trung bình 20.000 đồng.',
    'Chi phí nhỏ nhưng kéo dài thì lớn: nếu phí và thuế làm lợi suất ròng giảm từ 8% xuống 6,5%/năm, khoản 100 triệu sau 20 năm còn khoảng 352 triệu thay vì 466 triệu (minh họa).',
    'DCA hợp lý khi có thu nhập đều đặn, mục tiêu dài hạn và tài sản đa dạng hóa (ví dụ quỹ chỉ số); không phù hợp với tài sản có rủi ro mất trắng như một cổ phiếu riêng lẻ yếu kém. Đây không phải khuyến nghị đầu tư.',
  ],
  causalChain: [
    { from: 'Lợi nhuận được giữ lại và tái đầu tư', to: 'Cơ sở tính lãi kỳ sau lớn hơn', mechanism: 'Cổ tức, lãi được dùng mua thêm đơn vị quỹ/cổ phiếu thay vì rút ra tiêu dùng.' },
    { from: 'Cơ sở tính lãi kỳ sau lớn hơn', to: 'Tài sản tăng theo hàm mũ theo thời gian', mechanism: 'Mỗi năm tăng thêm r% trên một số vốn lớn dần; "quy tắc 72": số năm để nhân đôi ≈ 72 ÷ lợi suất (%).' },
    { from: 'Góp vốn cố định theo chu kỳ (DCA)', to: 'Mua nhiều đơn vị hơn khi giá giảm', mechanism: 'Số đơn vị = Số tiền ÷ Giá; giá thấp thì số đơn vị mua được nhiều hơn, kéo giá vốn bình quân xuống.' },
    { from: 'Phí quản lý, phí giao dịch, thuế mỗi lần bán', to: 'Lợi suất ròng thấp hơn lợi suất gộp', mechanism: 'Mỗi khoản phí trừ trực tiếp vào phần lẽ ra được tái đầu tư, nên mức thiệt hại cũng bị "nhân kép" theo thời gian.' },
    { from: 'Lợi suất ròng thấp hơn lợi suất gộp', to: 'Khoảng cách tài sản cuối kỳ nới rộng theo năm', mechanism: 'Chênh lệch 1–2 điểm % mỗi năm tưởng nhỏ nhưng sau 20–30 năm có thể làm mất một phần lớn giá trị cuối kỳ.' },
  ],
  vietnamImpact: [
    { group: 'Người lao động có thu nhập đều', effect: 'Có thể tự động hóa việc tích lũy qua chương trình đầu tư định kỳ của các quỹ mở; kỷ luật quan trọng hơn chọn "điểm vào".', direction: 'up' },
    { group: 'Nhà đầu tư cá nhân giao dịch thường xuyên', effect: 'Phí giao dịch và thuế 0,1% trên giá trị mỗi lần bán chứng khoán cộng dồn làm giảm lãi kép; mua bán liên tục làm gián đoạn quá trình tích lũy.', direction: 'down' },
    { group: 'Nhà đầu tư nắm giữ chứng chỉ quỹ dài hạn', effect: 'Theo báo chí, Luật Thuế TNCN 2025 (hiệu lực 1/7/2026) ưu đãi thuế cho chứng chỉ quỹ nắm giữ từ 2 năm trở lên; cần kiểm tra văn bản hướng dẫn cho loại quỹ cụ thể.', direction: 'up' },
    { group: 'Công ty quản lý quỹ, công ty chứng khoán', effect: 'Nhu cầu sản phẩm đầu tư định kỳ tăng; cạnh tranh về phí và trải nghiệm ứng dụng.', direction: 'up' },
    { group: 'Người gửi tiết kiệm', effect: 'Lãi kép cũng áp dụng với tiền gửi tái tục, nhưng lợi suất thực (sau lạm phát) mới là phần tài sản thật sự tăng.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tổng chi phí của quỹ (phí quản lý, phí mua/bán, phí chuyển đổi)', why: 'Đây là phần chắc chắn bị trừ mỗi năm, trong khi lợi suất thì không chắc chắn.', where: 'Bản cáo bạch, điều lệ quỹ và báo cáo định kỳ trên website công ty quản lý quỹ' },
    { name: 'Lạm phát (CPI) và lãi suất tiền gửi 12 tháng', why: 'So sánh lợi suất danh nghĩa với lạm phát để biết lợi suất thực.', where: 'Cục Thống kê (Bộ Tài chính), website NHNN và ngân hàng thương mại' },
    { name: 'Lợi suất ròng nhiều năm của quỹ so với chỉ số tham chiếu', why: 'Đánh giá quỹ có bù được phí hay không qua cả chu kỳ, không chỉ 1 năm.', where: 'Báo cáo hằng tháng/năm của quỹ; dữ liệu VN-Index, VN30 trên HOSE' },
    { name: 'Quy định thuế TNCN với chứng khoán và chứng chỉ quỹ', why: 'Thuế trên mỗi lần bán và trên cổ tức ảnh hưởng trực tiếp đến lãi kép ròng.', where: 'Website Bộ Tài chính, Cục Thuế; văn bản luật và nghị định hướng dẫn' },
  ],
  counterpoints: [
    'Nếu đã có sẵn một khoản tiền lớn, về mặt thống kê đầu tư một lần thường cho kết quả kỳ vọng cao hơn DCA vì thị trường có xu hướng tăng dài hạn; DCA chủ yếu giảm rủi ro "mua đúng đỉnh" và rủi ro tâm lý.',
    'DCA không cứu được một tài sản đi xuống vĩnh viễn: mua đều đặn một cổ phiếu yếu kém chỉ làm tăng khoản lỗ.',
    'Lãi kép giả định lợi suất ổn định; thực tế lợi suất biến động mạnh, và trình tự lãi/lỗ (đặc biệt gần thời điểm cần rút tiền) ảnh hưởng lớn đến kết quả.',
  ],
  glossary: [
    { term: 'Lãi kép', definition: 'Lãi được cộng vào vốn để tính lãi cho kỳ tiếp theo.' },
    { term: 'DCA (Dollar-Cost Averaging)', definition: 'Đầu tư một số tiền cố định theo chu kỳ đều đặn bất kể giá thị trường.' },
    { term: 'Giá vốn bình quân', definition: 'Tổng số tiền đã bỏ ra chia cho tổng số đơn vị nắm giữ.' },
    { term: 'Quy tắc 72', definition: 'Ước lượng nhanh số năm để tài sản nhân đôi: 72 chia cho lợi suất hằng năm (%).' },
    { term: 'Lợi suất thực', definition: 'Lợi suất danh nghĩa trừ đi lạm phát (xấp xỉ).' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'compound-interest-dca-q',
    question: 'Hai quỹ cùng đầu tư vào rổ cổ phiếu tương tự; quỹ A thu tổng phí cao hơn quỹ B khoảng 1,5%/năm. Bạn định tích lũy 20 năm. Nhận định nào đúng nhất?',
    options: [
      { id: 'a', text: 'Chênh lệch 1,5% quá nhỏ, không đáng quan tâm.', explain: 'Do lãi kép, chênh lệch phí lặp lại mỗi năm bị nhân lên: trong ví dụ minh họa, lợi suất ròng 6,5% thay vì 8% làm giá trị sau 20 năm thấp hơn khoảng một phần tư.' },
      { id: 'b', text: 'Phí là chi phí chắc chắn, nên quỹ A chỉ đáng chọn nếu có bằng chứng thuyết phục rằng nó tạo thêm lợi nhuận vượt mức phí qua nhiều năm.', correct: true, explain: 'Đúng. So sánh lợi suất **sau phí** qua cả chu kỳ, cùng chiến lược và rủi ro; phí cao không xấu nếu được bù đắp, nhưng phần bù đắp không được đảm bảo.' },
      { id: 'c', text: 'Phí cao chứng tỏ quỹ quản lý tốt hơn nên lợi suất chắc chắn cao hơn.', explain: 'Không có quan hệ chắc chắn giữa phí cao và kết quả tốt. Nhiều nghiên cứu cho thấy chi phí là một trong những yếu tố dự báo kết quả ròng đáng tin cậy nhất, theo hướng ngược lại.' },
    ],
  },
  sources: [
    { title: 'Compound Interest Calculator', publisher: 'Investor.gov (SEC)', url: 'https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator' },
    { title: 'Dollar Cost Averaging', publisher: 'Investor.gov (SEC)', url: 'https://www.investor.gov/introduction-investing/investing-basics/glossary/dollar-cost-averaging' },
    { title: 'Mutual Fund and ETF Fees and Expenses – Investor Bulletin', publisher: 'Investor.gov (SEC)', url: 'https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/mutual-fund-and-etf-fees-and-expenses-investor-bulletin' },
    { title: 'Nhà đầu tư chứng khoán được miễn, giảm thuế với 2 khoản thu nhập từ ngày 1/7', publisher: 'VietnamFinance', url: 'https://vietnamfinance.vn/nha-dau-tu-chung-khoan-duoc-mien-giam-thue-voi-2-khoan-thu-nhap-tu-ngay-1-7-d146981.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
