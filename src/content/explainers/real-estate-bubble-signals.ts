import type { Explainer } from '../../../shared/explainer'

export const realEstateBubbleSignals: Explainer = {
  id: 'real-estate-bubble-signals',
  slug: 'real-estate-bubble-signals',
  question: 'Dấu hiệu nào cho thấy bất động sản đang hình thành bong bóng?',
  title: 'Bong bóng BĐS: nhìn giá lệch khỏi thu nhập, đòn bẩy và dòng tiền đầu cơ',
  topic: 'real-estate',
  tldr: 'Bong bóng hình thành khi giá tăng nhờ **kỳ vọng giá sẽ còn tăng** (và tín dụng dễ dãi) chứ không nhờ thu nhập hay giá trị sử dụng. Không có một chỉ báo đơn lẻ nào đủ kết luận; nên nhìn **bộ chỉ báo**: giá so với thu nhập và tiền thuê, tốc độ tăng tín dụng BĐS, tỷ lệ đầu cơ lướt sóng và nguồn cung chưa bán. Ngay cả vậy, chỉ biết chắc là bong bóng sau khi nó đã vỡ.',
  keyPoints: [
    '**Giá so với thu nhập** (price-to-income) và **giá so với tiền thuê** (price-to-rent) tăng liên tục, tách khỏi mặt bằng thu nhập của người mua thực, là chỉ báo nền tảng nhất.',
    '**Tín dụng và đòn bẩy**: dư nợ BĐS tăng nhanh hơn GDP, tỷ lệ vay trên giá trị tài sản (LTV) cao, người mua dùng vốn vay để lướt sóng thay vì để ở.',
    '**Hành vi thị trường**: giao dịch mua đi bán lại ngắn hạn, mua theo hình thức giữ chỗ/đặt cọc rồi bán chuyển nhượng, câu chuyện "không mua bây giờ sẽ không bao giờ mua được".',
    '**Cung - cầu thực**: tỷ lệ căn hộ bỏ trống, tồn kho dự án, tỷ suất cho thuê thấp so với lãi suất vay cho thấy ít người mua để ở hay khai thác.',
    'Giá cao không tự động là bong bóng: khan hiếm quỹ đất đã phát triển, quy hoạch và hạ tầng mới có thể giải thích một phần mức tăng.',
  ],
  causalChain: [
    { from: 'Lãi suất thấp, tín dụng dễ', to: 'Nhu cầu mua (kể cả đầu cơ) tăng', mechanism: 'Chi phí vay rẻ làm khoản trả hằng tháng thấp hơn, người mua chấp nhận giá cao hơn cho cùng mức thu nhập.' },
    { from: 'Nhu cầu mua tăng', to: 'Giá tăng, kỳ vọng tăng tiếp', mechanism: 'Cung BĐS phản ứng chậm (cần quỹ đất, pháp lý, xây dựng nhiều năm) nên giá tăng trước; giá tăng lại thu hút thêm người mua vì sợ lỡ cơ hội.' },
    { from: 'Kỳ vọng giá tăng', to: 'Đầu cơ và đòn bẩy lan rộng', mechanism: 'Người mua dựa vào lãi vốn (giá tăng) thay vì dòng thuê; ngân hàng nhận BĐS làm tài sản bảo đảm càng định giá cao càng cho vay thêm.' },
    { from: 'Giá vượt xa khả năng chi trả', to: 'Người mua thực cạn dần', mechanism: 'Khi thu nhập không theo kịp, nhóm mua để ở rút lui; thị trường chỉ còn người mua để bán lại.' },
    { from: 'Điều kiện thay đổi (lãi suất tăng, siết tín dụng, sốc kinh tế)', to: 'Giá điều chỉnh, nợ xấu', mechanism: 'Người vay nặng đòn bẩy phải bán, giá giảm làm giá trị tài sản bảo đảm giảm, ngân hàng thu hẹp cho vay, tạo vòng xoáy giảm giá.' },
  ],
  vietnamImpact: [
    { group: 'Người mua nhà để ở', effect: 'Giá tách khỏi thu nhập làm khả năng chi trả xấu đi; mua đỉnh với đòn bẩy cao kéo dài gánh nặng trả nợ nhiều năm.', direction: 'down' },
    { group: 'Nhà đầu tư lướt sóng, vay đòn bẩy', effect: 'Lãi vốn phụ thuộc kỳ vọng; khi thanh khoản cạn, khó bán được và vẫn phải trả lãi.', direction: 'down' },
    { group: 'Ngân hàng', effect: 'Tỷ trọng dư nợ BĐS và tài sản bảo đảm là BĐS lớn làm rủi ro nợ xấu nhạy với chu kỳ giá.', direction: 'down' },
    { group: 'Chủ đầu tư và ngành xây dựng', effect: 'Hưởng lợi khi giá tăng và bán tốt, nhưng phụ thuộc nặng vào tín dụng và tiền ứng trước của người mua.', direction: 'mixed' },
    { group: 'Người mua sau điều chỉnh giá', effect: 'Giá về gần mặt bằng thu nhập có thể cải thiện khả năng tiếp cận, nếu nguồn cung và tín dụng không bị tắc.', direction: 'up' },
  ],
  indicators: [
    { name: 'Price-to-income và price-to-rent', why: 'So giá nhà với thu nhập và tiền thuê để đánh giá mức lệch khỏi giá trị sử dụng.', where: 'Tự tính từ giá giao dịch (công ty nghiên cứu thị trường) và thu nhập của Cục Thống kê (nso.gov.vn); BIS có dữ liệu giá nhà nhiều nước' },
    { name: 'Tăng trưởng dư nợ cho vay BĐS và tỷ lệ trên tổng dư nợ', why: 'Tín dụng tăng nhanh hơn thu nhập là tín hiệu đòn bẩy tích tụ.', where: 'Ngân hàng Nhà nước (sbv.gov.vn) và báo cáo của các ngân hàng' },
    { name: 'Lượng giao dịch chuyển nhượng ngắn hạn, tỷ lệ hấp thụ dự án', why: 'Đo mức độ đầu cơ và nhu cầu thực.', where: 'Báo cáo thị trường của Bộ Xây dựng, các đơn vị tư vấn BĐS' },
    { name: 'Tồn kho BĐS và tỷ lệ căn hộ không có người ở', why: 'Cung lớn nhưng người ở ít cho thấy cầu thực yếu.', where: 'Bộ Xây dựng, báo cáo thị trường theo quý' },
  ],
  counterpoints: [
    'Một thị trường có thể giữ giá cao dài nhờ khan hiếm đất đã phát triển và đô thị hóa; "giá cao" chưa chắc là "bong bóng".',
    'Dữ liệu giá BĐS ở Việt Nam thiếu minh bạch (giá niêm yết khác giá giao dịch), nên các tỷ số dễ nhiễu; cần dùng nhiều nguồn.',
    'Bong bóng thường chỉ được xác nhận khi đã vỡ; cảnh báo sớm nhiều lần đúng thời điểm rất khó.',
  ],
  glossary: [
    { term: 'Bong bóng tài sản', definition: 'Giai đoạn giá tăng vượt xa giá trị cơ bản, được duy trì bởi kỳ vọng giá tiếp tục tăng.' },
    { term: 'Price-to-income', definition: 'Giá nhà chia cho thu nhập hộ gia đình hằng năm.' },
    { term: 'Price-to-rent', definition: 'Giá nhà chia cho tiền thuê một năm; tương tự P/E của cổ phiếu.' },
    { term: 'LTV', definition: 'Loan-to-value: khoản vay chia cho giá trị tài sản bảo đảm.' },
    { term: 'Lướt sóng', definition: 'Mua rồi bán lại trong thời gian ngắn để hưởng chênh lệch giá, không để ở hay khai thác.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'real-estate-bubble-signals-q',
    question: 'Ở một khu vực, giá căn hộ tăng gấp đôi trong 3 năm, tiền thuê chỉ tăng nhẹ, thu nhập hộ gần như đi ngang, còn tín dụng mua nhà tăng gấp đôi tốc độ GDP. Kết luận hợp lý nhất?',
    options: [
      { id: 'a', text: 'Chắc chắn là bong bóng và sẽ vỡ trong năm tới.', explain: 'Các chỉ báo là cảnh báo rủi ro, không phải dự báo thời điểm; bong bóng có thể kéo dài hoặc điều chỉnh từ từ.' },
      { id: 'b', text: 'Nhiều chỉ báo cùng báo rủi ro (giá lệch thu nhập, tiền thuê, đòn bẩy); cần kiểm tra thêm cung - cầu thực trước khi kết luận.', correct: true, explain: 'Đúng. Nhiều tín hiệu cùng chiều tăng độ tin cậy, nhưng vẫn cần dữ liệu về cung, tồn kho và hành vi đầu cơ.' },
      { id: 'c', text: 'Không vấn đề gì vì giá tăng chứng tỏ nhu cầu thực lớn.', explain: 'Nếu cầu thực mạnh thì tiền thuê và thu nhập thường theo; giá tăng đơn thuần có thể phản ánh đầu cơ.' },
    ],
  },
  sources: [
    { title: 'Real-estate bubble', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Real_estate_bubble' },
    { title: 'Residential property prices - overview', publisher: 'Bank for International Settlements (BIS)', url: 'https://www.bis.org/statistics/pp.htm' },
    { title: 'Loan-to-value ratio', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Loan-to-value_ratio' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 25,
}
