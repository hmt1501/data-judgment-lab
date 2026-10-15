import type { Explainer } from '../../../shared/explainer'

export const creditHistoryCreditScoreBasics: Explainer = {
  id: 'credit-history-credit-score-basics',
  slug: 'credit-history-credit-score-basics',
  question: 'Lịch sử tín dụng và điểm tín dụng là gì, ảnh hưởng thế nào tới khoản vay của tôi?',
  title: 'Lịch sử trả nợ là "hồ sơ năng lực" của người vay: một lần trễ hạn dài có thể làm khoản vay sau đắt hơn hoặc bị từ chối',
  topic: 'personal-finance',
  tldr: 'Ngân hàng không biết bạn trả nợ tốt hay không nếu không có dữ liệu. Ở Việt Nam, **Trung tâm Thông tin tín dụng quốc gia (CIC)** thuộc Ngân hàng Nhà nước thu thập thông tin vay của cá nhân, tổ chức từ các tổ chức tín dụng và cung cấp báo cáo tín dụng, trong đó có điểm tín dụng và nhóm nợ. Trả đúng hạn xây dựng hồ sơ tốt; quá hạn dài bị xếp vào **nợ xấu** (nhóm 3–5) khiến khó vay và mở thẻ tín dụng.',
  keyPoints: [
    'Theo bài hướng dẫn của Techcombank (cập nhật 15/10/2026), CIC thu thập, lưu trữ và quản lý thông tin tín dụng của cá nhân và tổ chức giúp các tổ chức tài chính đánh giá khả năng trả nợ; người dùng có thể xem báo cáo trên website CIC hoặc ứng dụng CIC Connect, gồm các khoản vay, điểm CIC và tình trạng nợ xấu.',
    'Theo cùng bài (dẫn Thông tư 31/2024/TT-NHNN): **nhóm 1** nợ đủ tiêu chuẩn; **nhóm 2** nợ cần chú ý, quá hạn đến 90 ngày; **nhóm 3** dưới tiêu chuẩn, quá hạn 91–180 ngày; **nhóm 4** nghi ngờ, 181–360 ngày; **nhóm 5** có khả năng mất vốn, trên 360 ngày. Từ nhóm 3 trở đi bị coi là nợ xấu. Các ngưỡng này có thể thay đổi theo quy định; hãy kiểm tra văn bản hiện hành.',
    'Bài cũng nêu: mỗi cá nhân được tra cứu miễn phí 1 lần/năm, từ lần thứ hai mất phí khoảng 28.000 đồng (mức có thể thay đổi). Điểm tín dụng càng cao thì khả năng được duyệt vay càng lớn và lãi suất có thể thấp hơn; quyết định cuối cùng thuộc về ngân hàng.',
    '**Điểm tín dụng** (credit score) là con số tóm tắt xác suất bạn trả nợ đúng hạn, tính từ lịch sử vay: trả đúng hạn hay quá hạn, số khoản vay, dư nợ, thời gian có lịch sử, số lần xin vay mới. Mỗi mô hình (kể cả tại Việt Nam) có công thức riêng.',
    'Bài tập thực tế: kiểm tra báo cáo tín dụng của mình định kỳ để phát hiện khoản vay lạ (do lộ thông tin, vay hộ), sai sót ghi nhận, và trả hết các khoản quá hạn nhỏ dễ bị quên (cước, thẻ tín dụng, vay tiêu dùng).',
  ],
  causalChain: [
    { from: 'Người vay trả chậm hoặc quá hạn', to: 'Khoản vay bị chuyển sang nhóm nợ cao hơn', mechanism: 'Tổ chức tín dụng phân loại nợ theo số ngày quá hạn và báo cáo lên CIC.' },
    { from: 'Nhóm nợ xấu trên báo cáo tín dụng', to: 'Điểm tín dụng giảm, tổ chức khác thấy rủi ro', mechanism: 'Ngân hàng khi xét hồ sơ mới tra cứu CIC và coi quá khứ trả nợ là dự báo hành vi tương lai.' },
    { from: 'Điểm thấp, rủi ro cao', to: 'Bị từ chối, hạn mức thấp hoặc lãi suất cao hơn', mechanism: 'Ngân hàng cộng phần bù rủi ro vào lãi suất hoặc không cho vay nếu rủi ro vượt khẩu vị.' },
    { from: 'Trả đúng hạn đều đặn nhiều năm', to: 'Hồ sơ tốt, điều kiện vay thuận lợi hơn', mechanism: 'Lịch sử dài, sạch cho ngân hàng bằng chứng về kỷ luật trả nợ.' },
  ],
  vietnamImpact: [
    { group: 'Người vay mua nhà, vay tiêu dùng', effect: 'Nợ xấu trên CIC có thể làm hồ sơ vay mua nhà bị từ chối hoặc lãi suất cao hơn; giữ hồ sơ sạch có giá trị tài chính thực.', direction: 'down' },
    { group: 'Người trẻ mới đi làm', effect: 'Lịch sử tín dụng mỏng; dùng thẻ tín dụng hoặc khoản vay nhỏ đúng hạn giúp xây hồ sơ, nhưng chỉ nên vay trong khả năng trả.', direction: 'mixed' },
    { group: 'Ngân hàng, công ty tài chính', effect: 'Dùng dữ liệu CIC để sàng lọc rủi ro, giảm nợ xấu; chất lượng và độ phủ dữ liệu quyết định hiệu quả.', direction: 'up' },
    { group: 'Người từng bị lộ thông tin cá nhân', effect: 'Rủi ro bị mở khoản vay giả mạo; kiểm tra định kỳ để phát hiện sớm.', direction: 'down' },
  ],
  indicators: [
    { name: 'Báo cáo tín dụng cá nhân và điểm CIC', why: 'Nguồn dữ liệu mà ngân hàng sẽ nhìn khi xét hồ sơ.', where: 'Website hoặc ứng dụng CIC Connect của Trung tâm Thông tin tín dụng quốc gia (NHNN)' },
    { name: 'Số khoản vay và số ngày quá hạn của từng khoản', why: 'Quá hạn dù ngắn có thể ghi nhận ở nhóm 2; theo dõi để tránh chuyển sang nợ xấu.', where: 'Báo cáo tín dụng; sao kê ngân hàng và thẻ' },
    { name: 'Tỷ lệ sử dụng hạn mức thẻ tín dụng', why: 'Dùng sát hạn mức thường bị xem là rủi ro hơn.', where: 'Sao kê thẻ tín dụng' },
    { name: 'Số lần bị truy vấn tín dụng khi xin vay nhiều nơi', why: 'Xin vay dồn dập trong thời gian ngắn có thể bị coi là dấu hiệu thiếu tiền.', where: 'Báo cáo tín dụng nếu hiển thị lịch sử truy vấn' },
  ],
  counterpoints: [
    'Điểm tín dụng chỉ là một trong nhiều yếu tố; thu nhập, tài sản bảo đảm, mục đích vay và chính sách ngân hàng cũng quyết định.',
    'Thông tin trên các trang blog tài chính về thời hạn xóa nợ xấu, mức phí tra cứu thường thay đổi theo văn bản; cần kiểm tra quy định hiện hành của Ngân hàng Nhà nước.',
    'Cảnh giác với dịch vụ "xóa nợ xấu" quảng cáo trên mạng; thông tin tín dụng được ghi nhận theo quy định của Ngân hàng Nhà nước, nên hãy hỏi trực tiếp tổ chức tín dụng hoặc CIC.',
  ],
  glossary: [
    { term: 'CIC', definition: 'Trung tâm Thông tin tín dụng quốc gia Việt Nam, thuộc Ngân hàng Nhà nước.' },
    { term: 'Nhóm nợ', definition: 'Phân loại khoản vay theo mức độ rủi ro/số ngày quá hạn, từ nhóm 1 đến nhóm 5.' },
    { term: 'Nợ xấu', definition: 'Khoản nợ thuộc nhóm 3, 4 hoặc 5.' },
    { term: 'Điểm tín dụng', definition: 'Số điểm tóm tắt khả năng trả nợ đúng hạn dựa trên lịch sử tín dụng.' },
    { term: 'Báo cáo tín dụng', definition: 'Tài liệu tổng hợp các khoản vay, tình trạng trả nợ và điểm tín dụng của một cá nhân.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'credit-history-credit-score-basics-q',
    question: 'Bạn quên thanh toán một khoản vay tiêu dùng nhỏ, đến nay đã quá hạn 120 ngày. Nhóm nợ nào hợp lý theo cách phân nhóm nêu trong bài?',
    options: [
      { id: 'a', text: 'Nhóm 1: vẫn là nợ đủ tiêu chuẩn.', explain: 'Quá hạn 120 ngày vượt ngưỡng nhóm 2 (đến 90 ngày).' },
      { id: 'b', text: 'Nhóm 3: nợ dưới tiêu chuẩn (quá hạn 91–180 ngày), tức đã bị coi là nợ xấu.', correct: true, explain: 'Đúng. Theo bài, từ nhóm 3 trở đi bị liệt vào diện nợ xấu, ảnh hưởng đến khả năng vay mới.' },
      { id: 'c', text: 'Không ảnh hưởng vì khoản vay nhỏ.', explain: 'Số tiền nhỏ không loại bỏ việc ghi nhận quá hạn; điều kiện nhóm nợ phụ thuộc số ngày quá hạn.' },
    ],
  },
  sources: [
    { title: 'CIC là gì? (hướng dẫn tra cứu, nhóm nợ, cập nhật 15/10/2026)', publisher: 'Techcombank', url: 'https://techcombank.com/thong-tin/blog/cic-la-gi' },
    { title: 'Credit score', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Credit_score' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 77,
}
