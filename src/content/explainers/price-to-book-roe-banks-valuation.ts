import type { Explainer } from '../../../shared/explainer'

export const priceToBookRoeBanksValuation: Explainer = {
  id: 'price-to-book-roe-banks-valuation',
  slug: 'price-to-book-roe-banks-valuation',
  question: 'Định giá cổ phiếu ngân hàng bằng P/B và ROE như thế nào?',
  title: 'P/B hợp lý phụ thuộc ROE bền vững, chi phí vốn và chất lượng tài sản',
  topic: 'markets-investing',
  tldr: 'Với ngân hàng, tài sản và nợ phần lớn là công cụ tài chính theo giá trị sổ sách nên **P/B** (giá / giá trị sổ sách mỗi cổ phiếu) thường hữu ích hơn P/E. P/B không đứng một mình: nó nên được đọc cùng **ROE** (lợi nhuận / vốn chủ sở hữu). Về nguyên lý, ngân hàng sinh lời trên vốn cao và bền hơn chi phí vốn của cổ đông thì xứng đáng P/B trên 1; ROE cao nhưng đến từ rủi ro hoặc "tăng dự phòng thấp" thì P/B cao là cái bẫy.',
  keyPoints: [
    '**P/B = giá thị trường / giá trị sổ sách mỗi cổ phiếu**; **ROE = lợi nhuận sau thuế / vốn chủ sở hữu bình quân**. Mối quan hệ: **P/B = P/E × ROE** (ví dụ giả định: ROE 20%, P/E 7,5 thì P/B = 1,5).',
    'Công thức P/B "hợp lý" đơn giản (suy từ mô hình tăng trưởng ổn định, là khung lý thuyết chứ không phải nguồn đã dẫn):**(ROE − g) / (r − g)**, với r là chi phí vốn cổ đông, g là tăng trưởng bền vững (ví dụ giả định: ROE 20%, r 14%, g 8% thì P/B hợp lý = 12/6 = 2,0). Nhạy với giả định r và g.',
    'Ngân hàng có ROE cao thường nhờ biên lãi ròng (NIM) tốt, chi phí vốn thấp (tiền gửi không kỳ hạn - CASA), chi phí hoạt động hiệu quả và chi phí tín dụng thấp; cần xem cái nào bền.',
    'Chất lượng tài sản phải kiểm chứng: nợ xấu, nợ nhóm 2, nợ tái cơ cấu và tỷ lệ bao phủ nợ xấu quyết định giá trị sổ sách có đáng tin; dự phòng thấp làm ROE hiện tại đẹp nhưng không bền (xem bài về nợ xấu và trích lập dự phòng).',
    'Đòn bẩy ảnh hưởng: ROE tăng do vốn mỏng (hệ số an toàn vốn thấp) khác với ROE tăng do lợi nhuận tốt; ngân hàng cần tăng vốn khi tăng trưởng tín dụng nhanh, gây pha loãng cổ phiếu.',
  ],
  causalChain: [
    { from: 'ROE bền vững cao hơn chi phí vốn', to: 'Giá trị sổ sách tăng nhanh nhờ giữ lại lợi nhuận', mechanism: 'Mỗi đồng vốn tạo ra lợi nhuận lớn hơn chi phí vốn nên giá trị cổ phiếu cao hơn giá trị sổ sách.' },
    { from: 'Kỳ vọng ROE bền hơn', to: 'Nhà đầu tư chấp nhận P/B cao hơn', mechanism: 'P/B hợp lý tăng theo (ROE − g)/(r − g); ROE càng cao và bền hơn r, P/B càng lớn.' },
    { from: 'Nợ xấu tăng, dự phòng tăng', to: 'ROE giảm, giá trị sổ sách bị bào mòn', mechanism: 'Chi phí dự phòng làm giảm lợi nhuận và thu hẹp vốn chủ sở hữu, kéo P/B xuống nếu thị trường nghi ngờ chất lượng tài sản.' },
    { from: 'Lãi suất thị trường tăng (r tăng)', to: 'P/B hợp lý thấp đi', mechanism: 'Chi phí vốn cổ đông tăng làm giá trị hiện tại của lợi nhuận tương lai thấp hơn.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cổ phiếu ngân hàng', effect: 'P/B kết hợp ROE giúp so sánh các ngân hàng cùng ngành tốt hơn P/E; nhưng cần điều chỉnh theo chất lượng tài sản và cơ cấu sở hữu.', direction: 'up' },
    { group: 'Ngân hàng có ROE cao nhờ CASA', effect: 'Lợi thế chi phí vốn thường bền hơn, xứng đáng P/B cao hơn nếu duy trì được.', direction: 'up' },
    { group: 'Ngân hàng tăng trưởng tín dụng nhanh, vốn mỏng', effect: 'ROE cao có thể đi kèm cần tăng vốn; phát hành thêm cổ phiếu pha loãng cổ đông.', direction: 'mixed' },
    { group: 'Ngân hàng có nợ xấu và tái cơ cấu nhiều', effect: 'Thị trường định giá thấp hơn giá trị sổ sách (P/B dưới 1) vì nghi ngờ tài sản.', direction: 'down' },
  ],
  indicators: [
    { name: 'ROE, ROA và NIM', why: 'Đo khả năng sinh lời và nguồn gốc lợi nhuận.', where: 'Báo cáo tài chính quý của ngân hàng (công bố trên HOSE, HNX)' },
    { name: 'Tỷ lệ nợ xấu, nợ nhóm 2 và LLR', why: 'Kiểm tra chất lượng giá trị sổ sách.', where: 'Thuyết minh báo cáo tài chính' },
    { name: 'Hệ số an toàn vốn (CAR) và kế hoạch tăng vốn', why: 'Cho biết dư địa tăng trưởng và rủi ro pha loãng.', where: 'Báo cáo thường niên, nghị quyết đại hội cổ đông' },
    { name: 'P/B lịch sử của ngân hàng và nhóm ngành', why: 'So sánh mức định giá hiện tại với vùng lịch sử.', where: 'Dữ liệu từ sàn và các công ty chứng khoán' },
  ],
  counterpoints: [
    'P/B dựa vào giá trị sổ sách, vốn có thể không phản ánh giá trị thực của tài sản (bất động sản thế chấp, tài sản tái cơ cấu); sổ sách "sạch" chỉ đáng tin nếu dự phòng đầy đủ.',
    'ROE trong quá khứ không bảo đảm tương lai: chu kỳ tín dụng, mặt bằng lãi suất, và quy định mới có thể làm ROE giảm.',
    'Công thức P/B hợp lý rất nhạy với g và r; chênh lệch 1 điểm phần trăm trong giả định có thể làm kết quả thay đổi nhiều, nên chỉ dùng làm khung tham khảo.',
  ],
  glossary: [
    { term: 'P/B', definition: 'Giá thị trường chia giá trị sổ sách trên mỗi cổ phiếu.' },
    { term: 'ROE', definition: 'Lợi nhuận sau thuế chia vốn chủ sở hữu bình quân.' },
    { term: 'NIM', definition: 'Biên lãi ròng, chênh lệch giữa thu nhập lãi và chi phí lãi trên tài sản sinh lãi.' },
    { term: 'CASA', definition: 'Tiền gửi không kỳ hạn và tiền gửi thanh toán, nguồn vốn rẻ cho ngân hàng.' },
    { term: 'CAR', definition: 'Hệ số an toàn vốn, vốn tự có chia tài sản có rủi ro.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'price-to-book-roe-banks-valuation-q',
    question: 'Ngân hàng A có P/B 1,5, ROE 20% nhờ dự phòng rất thấp trong khi nợ nhóm 2 và nợ tái cơ cấu tăng nhanh. Cách đọc nào hợp lý?',
    options: [
      { id: 'a', text: 'ROE 20% rất cao nên P/B 1,5 chắc chắn rẻ.', explain: 'ROE cao nhờ dự phòng thấp có thể không bền; nếu dự phòng phải tăng, ROE và giá trị sổ sách đều giảm.' },
      { id: 'b', text: 'Cần điều chỉnh ROE theo mức dự phòng "đủ" trước khi kết luận P/B có hấp dẫn hay không.', correct: true, explain: 'Đúng. Giá trị sổ sách và lợi nhuận chỉ đáng tin nếu chất lượng tài sản được phản ánh; nợ nhóm 2 và tái cơ cấu là rủi ro tiềm ẩn.' },
      { id: 'c', text: 'P/B luôn nên dưới 1 với ngân hàng.', explain: 'Không có quy tắc cố định; ngân hàng ROE bền cao hơn chi phí vốn xứng đáng P/B trên 1.' },
    ],
  },
  sources: [
    { title: 'P/B ratio', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/P/B_ratio' },
    { title: 'Return on equity', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Return_on_equity' },
    { title: 'Nợ xấu tăng hơn 19%, ngân hàng gia cố "lá chắn" rủi ro (5/11/2025)', publisher: 'Thời báo Tài chính Việt Nam', url: 'https://thoibaotaichinhvietnam.vn/no-xau-tang-hon-19-ngan-hang-gia-co-la-chan-rui-ro-186361-186361.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 51,
}
