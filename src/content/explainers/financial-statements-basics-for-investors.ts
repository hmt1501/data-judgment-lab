import type { Explainer } from '../../../shared/explainer'

export const financialStatementsBasicsForInvestors: Explainer = {
  id: 'financial-statements-basics-for-investors',
  slug: 'financial-statements-basics-for-investors',
  question: 'Đọc ba báo cáo tài chính để chọn cổ phiếu nên bắt đầu từ đâu?',
  title: 'Đọc theo thứ tự câu hỏi: dòng tiền có thật không, tài sản – nợ có an toàn không, rồi mới đến lợi nhuận',
  topic: 'markets-investing',
  tldr: 'Ba báo cáo trả lời ba câu hỏi khác nhau: **báo cáo kết quả kinh doanh** (có lãi không), **bảng cân đối kế toán** (sở hữu gì, nợ gì tại một thời điểm), **báo cáo lưu chuyển tiền tệ** (tiền thật đi vào, đi ra đâu). Một bộ báo cáo đầy đủ còn có báo cáo thay đổi vốn chủ sở hữu và **thuyết minh**, nơi giấu nhiều chi tiết quan trọng. Nhà đầu tư nên đọc để *kiểm tra chéo* ba báo cáo với nhau, thay vì chỉ nhìn dòng lợi nhuận.',
  keyPoints: [
    'Theo IFRS (IAS 1), bộ báo cáo tài chính đầy đủ gồm: báo cáo tình hình tài chính (bảng cân đối), báo cáo lãi lỗ và thu nhập toàn diện khác, báo cáo thay đổi vốn chủ sở hữu, báo cáo lưu chuyển tiền tệ, và thuyết minh gồm chính sách kế toán quan trọng; doanh nghiệp lập ít nhất hằng năm, kèm số liệu so sánh năm trước. IFRS 18 sẽ thay IAS 1 cho kỳ báo cáo năm bắt đầu từ 1/1/2027 (theo IFRS Foundation). Việt Nam có hệ thống chuẩn mực kế toán riêng (VAS); cấu trúc các báo cáo chính tương tự nhưng chi tiết khác, hãy kiểm tra quy định hiện hành.',
    'Theo IAS 7, báo cáo lưu chuyển tiền tệ chia dòng tiền thành **hoạt động kinh doanh, đầu tư và tài chính**; có thể lập theo phương pháp trực tiếp hoặc gián tiếp (điều chỉnh từ lợi nhuận).',
    '**Bảng cân đối** cho biết sức khỏe tài chính tại một thời điểm: tài sản = nợ phải trả + vốn chủ sở hữu. Nhìn tỷ trọng nợ vay, tiền mặt, hàng tồn kho, khoản phải thu và tài sản vô hình.',
    '**Kết quả kinh doanh** cho biết doanh thu, chi phí, lợi nhuận trong kỳ. Lợi nhuận kế toán dựa trên ghi nhận theo quyền (khi phát sinh), không phải khi thu tiền.',
    '**Thứ tự đọc gợi ý** (một cách, không phải luật): (1) thuyết minh và ý kiến kiểm toán để hiểu cách ghi nhận, (2) dòng tiền hoạt động so với lợi nhuận, (3) nợ vay, kỳ hạn nợ và khả năng trả lãi, (4) hàng tồn kho, phải thu, (5) mới đến tăng trưởng doanh thu và biên lợi nhuận.',
  ],
  causalChain: [
    { from: 'Doanh nghiệp ghi nhận doanh thu theo quyền', to: 'Lợi nhuận kế toán có thể xuất hiện trước khi có tiền', mechanism: 'Bán chịu tạo ra doanh thu và lợi nhuận nhưng cũng tạo khoản phải thu; tiền chưa vào tài khoản.' },
    { from: 'Khoản phải thu và hàng tồn kho tăng nhanh hơn doanh thu', to: 'Dòng tiền hoạt động yếu hơn lợi nhuận', mechanism: 'Vốn bị chôn vào phải thu và tồn kho; doanh nghiệp phải vay thêm để duy trì hoạt động.' },
    { from: 'Dòng tiền hoạt động không đủ trả nợ và đầu tư', to: 'Phải huy động vốn mới (vay hoặc phát hành)', mechanism: 'Báo cáo lưu chuyển tiền tệ cho thấy dòng tiền tài chính bù cho dòng tiền hoạt động âm; lãi vay tăng ăn vào lợi nhuận tương lai.' },
    { from: 'Thuyết minh tiết lộ chính sách kế toán, giao dịch với bên liên quan, nợ tiềm tàng', to: 'Đánh giá lại chất lượng lợi nhuận', mechanism: 'Thay đổi ước tính, chính sách ghi nhận hay giao dịch bên liên quan lớn có thể làm lợi nhuận đẹp hơn thực chất.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân', effect: 'Dễ dựa vào chỉ tiêu P/E, EPS mà bỏ qua dòng tiền và nợ; học đọc ba báo cáo giảm rủi ro mua cổ phiếu "lãi đẹp, tiền không có".', direction: 'up' },
    { group: 'Doanh nghiệp niêm yết', effect: 'Phải công bố báo cáo định kỳ và thuyết minh theo quy định; chất lượng công bố ảnh hưởng niềm tin và định giá.', direction: 'mixed' },
    { group: 'Ngân hàng cho vay doanh nghiệp', effect: 'Dùng báo cáo để đánh giá khả năng trả nợ, đặc biệt dòng tiền và tỷ lệ nợ trên vốn.', direction: 'mixed' },
    { group: 'Cơ quan quản lý thị trường', effect: 'Chuẩn hóa công bố thông tin và, nếu có lộ trình áp dụng chuẩn mực quốc tế (IFRS), sẽ giúp tăng tính so sánh; cần kiểm tra quy định hiện hành.', direction: 'up' },
  ],
  indicators: [
    { name: 'Dòng tiền từ hoạt động kinh doanh so với lợi nhuận sau thuế', why: 'Tỷ lệ thấp kéo dài là cảnh báo chất lượng lợi nhuận.', where: 'Báo cáo lưu chuyển tiền tệ trên cổng công bố thông tin của HOSE, HNX hoặc trang web doanh nghiệp' },
    { name: 'Nợ vay / vốn chủ sở hữu và khả năng thanh toán lãi vay', why: 'Đo đòn bẩy và rủi ro tài chính.', where: 'Bảng cân đối kế toán, thuyết minh vay và nợ thuê tài chính' },
    { name: 'Số ngày phải thu, tồn kho, phải trả', why: 'Cho biết vốn lưu động hoạt động hiệu quả hay bị chôn.', where: 'Bảng cân đối và báo cáo kết quả kinh doanh' },
    { name: 'Ý kiến kiểm toán và các vấn đề nhấn mạnh', why: 'Ý kiến ngoại trừ hay nhấn mạnh về hoạt động liên tục là tín hiệu cần dừng lại kiểm tra.', where: 'Báo cáo kiểm toán kèm báo cáo tài chính năm' },
  ],
  counterpoints: [
    'Báo cáo tài chính là số liệu quá khứ, dựa trên ước tính và lựa chọn chính sách; không thay thế phân tích ngành, lợi thế cạnh tranh và quản trị.',
    'Cách trình bày khác nhau giữa chuẩn mực (VAS, IFRS) và giữa ngành (ngân hàng, bất động sản, bán lẻ) khiến so sánh chéo cần điều chỉnh.',
    'Không có thứ tự đọc nào đúng với mọi doanh nghiệp; doanh nghiệp tăng trưởng nhanh có thể có dòng tiền âm hợp lý do đầu tư.',
  ],
  glossary: [
    { term: 'Bảng cân đối kế toán', definition: 'Báo cáo tài sản, nợ phải trả và vốn chủ sở hữu tại một thời điểm.' },
    { term: 'Báo cáo kết quả kinh doanh', definition: 'Báo cáo doanh thu, chi phí và lợi nhuận trong một kỳ.' },
    { term: 'Báo cáo lưu chuyển tiền tệ', definition: 'Báo cáo dòng tiền vào – ra phân theo hoạt động kinh doanh, đầu tư và tài chính.' },
    { term: 'Thuyết minh', definition: 'Phần giải thích chính sách kế toán và chi tiết các khoản mục.' },
    { term: 'Kế toán dồn tích', definition: 'Ghi nhận doanh thu, chi phí khi phát sinh thay vì khi thu, chi tiền.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'financial-statements-basics-for-investors-q',
    question: 'Một công ty báo lãi tăng 40% nhưng dòng tiền hoạt động âm và khoản phải thu tăng gấp đôi. Điều nên làm trước tiên?',
    options: [
      { id: 'a', text: 'Mua vì lợi nhuận tăng mạnh.', explain: 'Lợi nhuận kế toán chưa chắc chuyển thành tiền; cần kiểm tra chất lượng lợi nhuận trước.' },
      { id: 'b', text: 'Tìm hiểu vì sao phải thu tăng (bán chịu, khách hàng liên quan, thay đổi chính sách) và xem thuyết minh trước khi kết luận.', correct: true, explain: 'Đúng. Khác biệt giữa lãi và dòng tiền thường nằm ở phải thu, tồn kho; thuyết minh cho biết nguyên nhân.' },
      { id: 'c', text: 'Bỏ qua dòng tiền vì báo cáo lãi lỗ mới quan trọng.', explain: 'Dòng tiền cho biết tiền thật; bỏ qua nó dễ bỏ sót doanh nghiệp lãi giấy.' },
    ],
  },
  sources: [
    { title: 'IAS 1 Presentation of Financial Statements', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-1-presentation-of-financial-statements/' },
    { title: 'IAS 7 Statement of Cash Flows', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/' },
    { title: 'Financial statement', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Financial_statement' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 71,
}
