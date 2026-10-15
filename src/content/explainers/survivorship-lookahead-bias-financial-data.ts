import type { Explainer } from '../../../shared/explainer'

export const survivorshipLookaheadBiasFinancialData: Explainer = {
  id: 'survivorship-lookahead-bias-financial-data',
  slug: 'survivorship-lookahead-bias-financial-data',
  question: 'Thiên lệch sống sót và thiên lệch nhìn trước làm sai lệch dữ liệu tài chính như thế nào?',
  title: 'Thiên lệch sống sót và nhìn trước trong dữ liệu tài chính',
  topic: 'macro',
  tldr: 'Dữ liệu tài chính hôm nay thường **chỉ còn những công ty, quỹ đã sống sót** và đôi khi chứa thông tin **chưa tồn tại ở thời điểm cần ra quyết định**. Phân tích hay backtest trên dữ liệu như vậy làm lợi nhuận quá khứ trông tốt hơn thật. Hai thiên lệch này không cần cố ý gian dối; chỉ cần dùng sai dữ liệu là đủ.',
  keyPoints: [
    'Theo Wikipedia ("Survivorship bias", đọc 15/10/2026): thiên lệch sống sót là tập trung vào thứ đã qua một vòng chọn lọc mà bỏ qua thứ không qua. Ví dụ quỹ đầu tư: danh mục quỹ hiện tại chỉ gồm quỹ hoạt động đủ tốt để tồn tại, quỹ kém bị đóng hoặc sáp nhập nên biến khỏi dữ liệu.',
    'Nghiên cứu của Elton, Gruber và Blake (Review of Financial Studies, 1996) theo dõi mọi quỹ tương hỗ đang hoạt động cuối năm 1976 và tính cả quỹ bị sáp nhập để đo thiên lệch; ước tính được trích dẫn rộng rãi là khoảng 0,9%/năm, lớn hơn ở quỹ nhỏ (theo Wikipedia; bản tóm tắt NYU chỉ nêu phương pháp và rằng ước tính khác nhau theo thời gian và mô hình đánh giá).',
    'Với chỉ số: backtest bằng danh sách thành phần chỉ số **hiện nay** làm tăng lợi nhuận quá khứ, vì các công ty đã bị loại khỏi chỉ số bị bỏ sót và công ty mới vào được tính cả giai đoạn tăng trưởng trước khi vào (theo Wikipedia). Cách sửa là dùng danh sách thành phần theo từng thời điểm.',
    '**Thiên lệch nhìn trước (look-ahead bias)**: dùng thông tin mà ở thời điểm quyết định chưa ai biết, ví dụ dùng lợi nhuận cả năm khi báo cáo chưa công bố, hay dữ liệu đã được điều chỉnh/sửa đổi sau đó. Theo ghi chú ôn thi CFA của AnalystPrep ("Problems in Backtesting"), thiên lệch nhìn trước phát sinh từ việc dùng thông tin mà nhà đầu tư không thể có trong các giai đoạn lịch sử được mô phỏng; cách xử lý là cách tiếp cận point-in-time, theo dõi mọi công ty từng tồn tại (trang này không định nghĩa chính thức "point-in-time").',
    'Ví dụ giả định: 10 quỹ, 6 quỹ sống sót với lợi suất trung bình +8%, 4 quỹ bị đóng với −5%. Trung bình cả 10 quỹ là (6×8 − 4×5)/10 = 2,8%; chỉ nhìn 6 quỹ sống sót ra 8%, chênh 5,2 điểm phần trăm.',
  ],
  causalChain: [
    { from: 'Công ty hoặc quỹ kém bị đóng, sáp nhập, hủy niêm yết', to: 'Biến mất khỏi cơ sở dữ liệu hiện tại', mechanism: 'Nhiều nguồn dữ liệu chỉ giữ thực thể còn tồn tại, nên chuỗi lịch sử thiếu các trường hợp thất bại.' },
    { from: 'Dữ liệu chỉ còn người sống sót', to: 'Lợi nhuận và độ an toàn trung bình bị thổi phồng', mechanism: 'Trung bình của tập đã lọc theo kết quả tốt luôn cao hơn trung bình của tập đầy đủ; rủi ro phá sản bị ước lượng thấp.' },
    { from: 'Backtest dùng thông tin chưa có ở thời điểm đó', to: 'Chiến lược trông hiệu quả nhờ biết trước', mechanism: 'Dữ liệu công bố muộn, được sửa sau hoặc thành phần chỉ số chỉ biết về sau khiến quyết định mô phỏng không thể thực hiện trong thực tế.' },
    { from: 'Kết quả backtest đẹp', to: 'Nhà đầu tư kỳ vọng cao hơn thực tế', mechanism: 'Khi triển khai thật không còn "người sống sót biết trước", kết quả thấp hơn và tăng rủi ro tâm lý.' },
    { from: 'Dùng dữ liệu theo từng thời điểm và gồm cả thực thể đã biến mất', to: 'Ước lượng sát thực hơn', mechanism: 'Bộ dữ liệu "point-in-time" và danh sách thành phần lịch sử loại bỏ hai nguồn thiên lệch chính.' },
  ],
  vietnamImpact: [
    { group: 'Người so sánh quỹ đầu tư hoặc chứng chỉ quỹ', effect: 'Bảng xếp hạng chỉ gồm quỹ còn tồn tại có thể che các quỹ đã đóng hoặc sáp nhập; hãy hỏi liệu bảng xếp hạng có gồm quỹ đã ngừng hoạt động không.', direction: 'mixed' },
    { group: 'Người backtest cổ phiếu Việt Nam', effect: 'Danh sách VN30 hiện tại không phải danh sách trong quá khứ; cần dùng danh sách thành phần theo thời điểm và tính cả cổ phiếu đã hủy niêm yết.', direction: 'down' },
    { group: 'Nhà phân tích dùng báo cáo tài chính đã điều chỉnh', effect: 'Số liệu đã trình bày lại có thể khác số công bố ban đầu; dùng số lúc đó khi mô phỏng quyết định quá khứ.', direction: 'mixed' },
    { group: 'Người làm sản phẩm đầu tư hoặc quảng cáo kết quả', effect: 'Kết quả quá khứ chỉ từ các sản phẩm còn sống làm quảng cáo hấp dẫn hơn thực tế; cần cân nhắc khi đọc.', direction: 'down' },
  ],
  indicators: [
    { name: 'Dữ liệu có gồm công ty/quỹ đã hủy niêm yết, đóng, sáp nhập không', why: 'Câu hỏi đầu tiên để phát hiện thiên lệch sống sót.', where: 'Tài liệu mô tả cơ sở dữ liệu của nhà cung cấp; hỏi nhà cung cấp' },
    { name: 'Danh sách thành phần chỉ số theo thời điểm', why: 'Cần thiết cho backtest không thiên lệch.', where: 'Thông báo cơ cấu chỉ số của sở giao dịch hoặc đơn vị tính chỉ số' },
    { name: 'Ngày công bố của từng báo cáo tài chính', why: 'Để chỉ dùng thông tin đã biết tại thời điểm quyết định.', where: 'Ngày công bố trên cổng thông tin của sở giao dịch' },
    { name: 'Chênh lệch giữa kết quả backtest và kết quả thực tế sau khi triển khai', why: 'Chênh lớn thường là dấu hiệu thiên lệch hoặc quá khớp.', where: 'Theo dõi kết quả thực của bạn' },
  ],
  counterpoints: [
    'Mức thiên lệch phụ thuộc thời kỳ, loại quỹ và cách đo; con số 0,9%/năm chỉ là một ước tính trong một nghiên cứu, không phải hằng số.',
    'Không phải mọi tập dữ liệu đều bị thiên lệch: một số nguồn lưu giữ đầy đủ lịch sử; cần kiểm tra thay vì giả định.',
    'Sửa thiên lệch sống sót không đủ nếu còn các thiên lệch khác như đào dữ liệu hoặc chọn thời điểm; chúng thường xuất hiện cùng nhau.',
  ],
  glossary: [
    { term: 'Thiên lệch sống sót', definition: 'Sai lệch do chỉ phân tích những đối tượng đã tồn tại qua một giai đoạn.' },
    { term: 'Thiên lệch nhìn trước', definition: 'Sai lệch do dùng thông tin chưa có tại thời điểm ra quyết định.' },
    { term: 'Backtest', definition: 'Mô phỏng một chiến lược trên dữ liệu quá khứ.' },
    { term: 'Dữ liệu point-in-time', definition: 'Dữ liệu ghi đúng như đã biết ở từng thời điểm lịch sử, không bị sửa sau.' },
    { term: 'Quá khớp', definition: 'Mô hình khớp quá chặt dữ liệu quá khứ nên dự đoán kém ngoài mẫu.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'survivorship-lookahead-bias-financial-data-q',
    question: 'Bạn lấy danh sách 30 cổ phiếu vốn hóa lớn nhất hôm nay và mô phỏng "mua giữ" 15 năm qua rồi thấy lợi nhuận rất cao. Vấn đề chính là gì?',
    options: [
      { id: 'a', text: 'Không có vấn đề, vì đó là dữ liệu lịch sử thật.', explain: 'Giá thật, nhưng việc chọn danh sách hôm nay là "biết trước" ai thành công và bỏ sót các công ty thất bại.' },
      { id: 'b', text: 'Danh sách hôm nay đã loại những công ty kém trong quá khứ, nên kết quả bị thổi phồng bởi thiên lệch sống sót và nhìn trước.', correct: true, explain: 'Đúng. Cần danh sách thành phần theo từng thời điểm và gồm cả công ty đã biến mất.' },
      { id: 'c', text: 'Vấn đề duy nhất là thiếu cổ tức.', explain: 'Thiếu cổ tức làm lợi nhuận thấp đi, nhưng không phải thiên lệch chính ở đây.' },
    ],
  },
  sources: [
    { title: 'Survivorship Bias and Mutual Fund Performance (working paper abstract)', publisher: 'NYU Stern (Elton, Gruber, Blake)', url: 'https://archive.nyu.edu/handle/2451/27234' },
    { title: 'Problems in Backtesting', publisher: 'AnalystPrep (CFA Level 2 study notes)', url: 'https://analystprep.com/study-notes/cfa-level-2/problems-in-backtesting/' },
    { title: 'Survivorship bias', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Survivorship_bias' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 196,
}
