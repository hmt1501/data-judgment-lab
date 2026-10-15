import type { Explainer } from '../../../shared/explainer'

export const freeFloatLiquidityIndexWeights: Explainer = {
  id: 'free-float-liquidity-index-weights',
  slug: 'free-float-liquidity-index-weights',
  question: 'Free-float và thanh khoản ảnh hưởng thế nào tới trọng số trong chỉ số?',
  title: 'Chỉ số tính theo vốn hóa phần cổ phiếu tự do giao dịch, và lọc theo thanh khoản',
  topic: 'markets-investing',
  tldr: 'Một chỉ số "theo vốn hóa" không dùng toàn bộ vốn hóa của mỗi công ty mà thường dùng **vốn hóa điều chỉnh free-float** (chỉ phần cổ phiếu thực sự có thể giao dịch, không tính cổ phần của Nhà nước, cổ đông chiến lược, nội bộ). Ngoài ra chỉ số lọc theo **thanh khoản** và có thể **giới hạn tỷ trọng** từng mã. Vì vậy, cổ phiếu vốn hóa lớn nhưng free-float thấp có trọng số nhỏ hơn nhiều so với vốn hóa thực của nó.',
  keyPoints: [
    'Theo bảng thông tin của HOSE (dữ liệu tháng 1/2025): VN30 là chỉ số vốn hóa gồm 30 cổ phiếu vốn hóa lớn, thanh khoản cao; phương pháp là "free-float adjusted market-capitalization weighted"; cổ phiếu được chọn và tính theo free-float để chỉ số đầu tư được, và được sàng lọc thanh khoản để giao dịch được.',
    'Cùng bảng thông tin: giới hạn tỷ trọng (capping) 10% đối với chỉ số này (không áp dụng cho chỉ số ngành VNAllshare) và rà soát định kỳ hằng năm hai lần vào tháng 1 và tháng 7.',
    'Ví dụ giả định: hai công ty cùng vốn hóa 100 nghìn tỷ đồng, công ty A free-float 20%, công ty B free-float 80%. Vốn hóa điều chỉnh là 20 và 80 nghìn tỷ đồng, nên trọng số trong chỉ số lần lượt là 20% và 80% (nếu chỉ có hai mã), dù vốn hóa gốc bằng nhau.',
    'Lý do dùng free-float: quỹ chỉ số không thể mua cổ phần mà chủ sở hữu không bán; nếu dùng toàn bộ vốn hóa, quỹ phải mua vượt khả năng cung và chỉ số sẽ kém "đầu tư được".',
    'Thanh khoản lọc ra các cổ phiếu khó mua bán; khối lượng giao dịch thấp làm quỹ gặp chi phí tác động giá lớn khi vào ra.',
  ],
  causalChain: [
    { from: 'Nhiều cổ phần bị nắm giữ chiến lược (Nhà nước, cổ đông lớn)', to: 'Free-float thấp, vốn hóa điều chỉnh nhỏ hơn vốn hóa', mechanism: 'Phần cổ phiếu không giao dịch được bị loại khi tính trọng số.' },
    { from: 'Free-float tăng (bán thêm cổ phần ra công chúng)', to: 'Trọng số trong chỉ số tăng', mechanism: 'Vốn hóa điều chỉnh tăng nên chỉ số và quỹ bám chỉ số phải mua thêm cổ phiếu này khi rà soát.' },
    { from: 'Cổ phiếu vào hoặc ra khỏi rổ chỉ số', to: 'Dòng tiền thụ động mua hoặc bán', mechanism: 'Các quỹ ETF và quỹ chỉ số điều chỉnh danh mục theo thay đổi, tạo cầu hoặc cung đột biến quanh ngày rà soát.' },
    { from: 'Thanh khoản kém', to: 'Cổ phiếu bị loại hoặc chi phí giao dịch cao', mechanism: 'Chỉ số sàng lọc để quỹ có thể mua bán thực tế mà không làm giá biến động mạnh.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư vào quỹ ETF / quỹ chỉ số', effect: 'Danh mục thực tế phụ thuộc free-float: cổ phiếu có tỷ lệ cổ đông lớn nắm giữ cao có tỷ trọng thấp hơn vốn hóa.', direction: 'mixed' },
    { group: 'Doanh nghiệp niêm yết có Nhà nước hoặc cổ đông lớn nắm nhiều cổ phần', effect: 'Thoái vốn, tăng free-float giúp tăng trọng số và thu hút dòng vốn thụ động.', direction: 'up' },
    { group: 'Nhà đầu tư nước ngoài / quỹ theo chỉ số', effect: 'Quan tâm free-float và giới hạn sở hữu nước ngoài để quyết định mức mua khả thi.', direction: 'mixed' },
    { group: 'Nhà đầu tư giao dịch ngắn hạn', effect: 'Thay đổi rổ chỉ số vào tháng 1 và 7 có thể tạo biến động giá ngắn hạn quanh ngày rà soát.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ lệ free-float của từng cổ phiếu', why: 'Quyết định trọng số thực trong chỉ số.', where: 'Bảng thông tin chỉ số của HOSE; công bố cơ cấu cổ đông của doanh nghiệp' },
    { name: 'Thông báo thay đổi rổ VN30 và lịch rà soát', why: 'Cổ phiếu vào hoặc ra rổ có dòng tiền thụ động.', where: 'Sở Giao dịch Chứng khoán TP.HCM (hsx.vn)' },
    { name: 'Giá trị giao dịch bình quân ngày', why: 'Đo khả năng mua bán thực tế.', where: 'HOSE, các công ty chứng khoán' },
    { name: 'Giới hạn sở hữu nước ngoài (room ngoại)', why: 'Ảnh hưởng khả năng mua của quỹ nước ngoài.', where: 'Công bố của doanh nghiệp, Ủy ban Chứng khoán Nhà nước' },
  ],
  counterpoints: [
    'Giới hạn tỷ trọng (cap) làm chỉ số khác với chỉ số "thuần vốn hóa"; nó giảm tập trung nhưng cũng tạo khác biệt với danh mục thị trường.',
    'Free-float thay đổi theo định nghĩa và dữ liệu của từng nhà cung cấp chỉ số; hai chỉ số khác nhau có thể cho trọng số khác nhau cho cùng một cổ phiếu.',
    'Chỉ số trọng số theo vốn hóa có xu hướng mua nhiều cổ phiếu đã tăng giá; đây là một nhược điểm của phương pháp.',
  ],
  glossary: [
    { term: 'Free-float', definition: 'Phần cổ phiếu phát hành thực tế có thể giao dịch tự do trên thị trường.' },
    { term: 'Vốn hóa điều chỉnh free-float', definition: 'Giá nhân với số cổ phiếu free-float; dùng để tính trọng số.' },
    { term: 'Capping', definition: 'Giới hạn tối đa trọng số của một cổ phiếu trong chỉ số.' },
    { term: 'Rà soát định kỳ', definition: 'Việc cập nhật rổ và trọng số chỉ số theo lịch cố định.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'free-float-liquidity-index-weights-q',
    question: 'Hai cổ phiếu vốn hóa 200 nghìn tỷ đồng như nhau; X có free-float 10%, Y có free-float 50% (chỉ số chỉ gồm hai mã, ví dụ giả định). Trọng số X trong chỉ số khoảng bao nhiêu?',
    options: [
      { id: 'a', text: '50%', explain: 'Đúng nếu dùng vốn hóa gốc, nhưng chỉ số này điều chỉnh free-float nên không phải.' },
      { id: 'b', text: 'Khoảng 17%', correct: true, explain: 'Đúng. Vốn hóa điều chỉnh: X = 20, Y = 100 (nghìn tỷ); X chiếm 20/120 ≈ 16,7%.' },
      { id: 'c', text: '10%', explain: '10% chỉ là tỷ lệ free-float của X, chưa phải trọng số trong chỉ số.' },
    ],
  },
  sources: [
    { title: 'HOSE-Index series factsheet (VN30: free-float adjusted market-cap weighted; capping, review dates)', publisher: 'Sở Giao dịch Chứng khoán TP.HCM (HOSE), dữ liệu 24/1/2025', url: 'https://static2.vietstock.vn/vietstock/2025/2/12/20250212_form_factsheet_mcindices_eng_t02_2025.pdf' },
    { title: 'Public float', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Free_float' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 54,
}
