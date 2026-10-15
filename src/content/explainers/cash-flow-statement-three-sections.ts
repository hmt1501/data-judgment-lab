import type { Explainer } from '../../../shared/explainer'

export const cashFlowStatementThreeSections: Explainer = {
  id: 'cash-flow-statement-three-sections',
  slug: 'cash-flow-statement-three-sections',
  question: 'Đọc báo cáo lưu chuyển tiền tệ: ba phần kinh doanh, đầu tư, tài chính nói lên điều gì?',
  title: 'Báo cáo lưu chuyển tiền tệ: tiền đến từ đâu, đi về đâu',
  topic: 'markets-investing',
  tldr: 'Lợi nhuận là con số **dồn tích**, còn báo cáo lưu chuyển tiền tệ cho biết **tiền thật** thay đổi thế nào, chia ba phần: **kinh doanh** (hoạt động chính), **đầu tư** (mua bán tài sản dài hạn) và **tài chính** (vay, trả nợ, vốn chủ sở hữu). Cách đọc nhanh: lãi mà không có tiền từ kinh doanh là dấu hiệu cần xem kỹ; tiền kinh doanh dương, đầu tư âm vừa phải, tài chính cho thấy công ty đang tự nuôi hay phải đi vay.',
  keyPoints: [
    'Theo IAS 7 (IFRS Foundation), dòng tiền chia làm ba loại: **kinh doanh** (hoạt động tạo doanh thu chính và các hoạt động khác không thuộc đầu tư/tài chính), **đầu tư** (mua bán tài sản dài hạn và khoản đầu tư), **tài chính** (thay đổi vốn góp và vay nợ).',
    'Dòng tiền kinh doanh có thể trình bày theo **phương pháp trực tiếp** (thu và chi tiền gộp) hoặc **gián tiếp** (bắt đầu từ lợi nhuận, điều chỉnh khoản không bằng tiền và thay đổi vốn lưu động); phương pháp gián tiếp được dùng rất phổ biến (theo Wikipedia).',
    'Một công ty có lãi vẫn có thể thiếu tiền; so sánh dòng tiền từ kinh doanh với lợi nhuận qua nhiều kỳ cho thấy lợi nhuận có chuyển hóa thành tiền hay không.',
    'Ví dụ giả định: lãi sau thuế 100, khoản phải thu tăng 25, khấu hao 20 → dòng tiền kinh doanh khoảng 100 + 20 − 25 = 95 (bỏ qua thay đổi khác).',
    'Giao dịch đầu tư và tài chính không dùng tiền không nằm trong báo cáo nhưng phải thuyết minh riêng; dễ bị bỏ sót.',
  ],
  causalChain: [
    { from: 'Bán chịu cho khách hàng (doanh thu ghi nhận, tiền chưa về)', to: 'Lãi tăng nhưng dòng tiền kinh doanh thấp hơn', mechanism: 'Khoản phải thu tăng được trừ ra khi điều chỉnh từ lợi nhuận sang tiền theo phương pháp gián tiếp.' },
    { from: 'Khấu hao và chi phí không bằng tiền', to: 'Dòng tiền kinh doanh cao hơn lãi', mechanism: 'Các khoản này làm giảm lợi nhuận nhưng không phải chi tiền, nên được cộng lại.' },
    { from: 'Mua sắm tài sản cố định, đầu tư dài hạn', to: 'Dòng tiền đầu tư âm', mechanism: 'Chi tiền ra để mở rộng; âm kéo dài khi doanh nghiệp tăng trưởng là bình thường nếu tiền kinh doanh đủ tài trợ.' },
    { from: 'Vay thêm hoặc phát hành cổ phiếu để bù thiếu tiền', to: 'Dòng tiền tài chính dương', mechanism: 'Khi tiền kinh doanh không đủ, doanh nghiệp bù bằng vốn bên ngoài, làm tăng nợ hoặc pha loãng cổ phần.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cổ phiếu', effect: 'Cần đối chiếu lãi trên báo cáo kết quả kinh doanh với tiền từ kinh doanh; chênh lệch lớn kéo dài là tín hiệu cần giải thích.', direction: 'mixed' },
    { group: 'Doanh nghiệp bất động sản, xây dựng', effect: 'Phải thu, hàng tồn kho và tiền ứng trước lớn làm dòng tiền kinh doanh khác xa lợi nhuận; cần đọc cùng thuyết minh.', direction: 'down' },
    { group: 'Ngân hàng, tổ chức tín dụng cho vay', effect: 'Dòng tiền kinh doanh của ngân hàng chịu ảnh hưởng của tăng trưởng tín dụng và huy động nên cách đọc khác doanh nghiệp sản xuất.', direction: 'mixed' },
    { group: 'Doanh nghiệp tăng trưởng nhanh', effect: 'Đầu tư mở rộng thường làm dòng tiền đầu tư âm lớn; cần xem nguồn tài trợ là tiền kinh doanh hay vay.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Dòng tiền từ hoạt động kinh doanh so với lợi nhuận sau thuế', why: 'Đo chất lượng lợi nhuận.', where: 'Báo cáo lưu chuyển tiền tệ trong báo cáo tài chính của doanh nghiệp niêm yết' },
    { name: 'Dòng tiền tự do = tiền kinh doanh trừ chi đầu tư tài sản cố định', why: 'Phần tiền còn lại cho cổ đông và nợ.', where: 'Tự tính từ báo cáo lưu chuyển tiền tệ' },
    { name: 'Dòng tiền tài chính: vay mới, trả nợ, cổ tức, phát hành', why: 'Cho thấy doanh nghiệp tự nuôi hay phụ thuộc vốn ngoài.', where: 'Phần hoạt động tài chính của báo cáo' },
    { name: 'Thuyết minh giao dịch không dùng tiền', why: 'Phát hiện giao dịch lớn không lên báo cáo chính.', where: 'Thuyết minh báo cáo tài chính' },
  ],
  counterpoints: [
    'Dòng tiền kinh doanh âm không luôn xấu: doanh nghiệp đang mở rộng có thể tích lũy hàng tồn kho/phải thu; điều quan trọng là xu hướng và nguyên nhân.',
    'Cách phân loại có thể khác nhau: IAS 7 hiện cho phép một số lựa chọn (ví dụ chỗ trình bày lãi vay, cổ tức), còn bản sửa đổi gắn với IFRS 18 (theo trang IFRS Foundation) thêm quy tắc phân loại lãi và cổ tức, nên so sánh giữa các công ty và các năm cần kiểm tra cách phân loại. Doanh nghiệp Việt Nam áp dụng chuẩn mực kế toán Việt Nam có thể khác chi tiết so với IAS 7.',
    'Báo cáo lưu chuyển tiền tệ là công cụ cho thanh khoản ngắn hạn, không đủ để dự báo dòng tiền tương lai.',
  ],
  glossary: [
    { term: 'Dòng tiền kinh doanh', definition: 'Tiền thu và chi từ hoạt động tạo doanh thu chính.' },
    { term: 'Dòng tiền đầu tư', definition: 'Tiền chi và thu khi mua bán tài sản dài hạn và các khoản đầu tư.' },
    { term: 'Dòng tiền tài chính', definition: 'Tiền liên quan đến vay, trả nợ, phát hành cổ phiếu, chia cổ tức.' },
    { term: 'Phương pháp gián tiếp', definition: 'Bắt đầu từ lợi nhuận, điều chỉnh để ra dòng tiền kinh doanh.' },
    { term: 'Tương đương tiền', definition: 'Khoản đầu tư ngắn hạn thanh khoản cao, ít rủi ro đổi giá.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'cash-flow-statement-three-sections-q',
    question: 'Công ty báo lãi tăng mạnh 3 năm liền nhưng dòng tiền kinh doanh thấp hơn lãi nhiều năm và khoản phải thu tăng nhanh. Cách đọc hợp lý?',
    options: [
      { id: 'a', text: 'Lãi tăng nên mọi thứ ổn.', explain: 'Bỏ qua việc lãi chưa chuyển thành tiền.' },
      { id: 'b', text: 'Cần xem lý do bán chịu và khả năng thu hồi; lãi chưa chắc chuyển thành tiền thật.', correct: true, explain: 'Đúng. Phải thu tăng làm lãi cao hơn tiền; nếu kéo dài, chất lượng lợi nhuận và rủi ro thu hồi cần được kiểm tra thêm.' },
      { id: 'c', text: 'Chắc chắn công ty gian lận.', explain: 'Chênh lệch có thể do bán chịu hợp lý hoặc tăng trưởng nhanh; chưa đủ để kết luận gian lận.' },
    ],
  },
  sources: [
    { title: 'IAS 7 Statement of Cash Flows', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/' },
    { title: 'Cash flow statement', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Cash_flow_statement' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 149,
}
