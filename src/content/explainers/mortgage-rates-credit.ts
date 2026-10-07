import type { Explainer } from '../../../shared/explainer'

export const mortgageRatesCredit: Explainer = {
  id: 'mortgage-rates-credit',
  slug: 'mortgage-rates-credit',
  question: 'Vay mua nhà: lãi suất ưu đãi và thả nổi khác nhau thế nào, trả hàng tháng bao nhiêu là an toàn?',
  title: 'Lãi suất vay mua nhà: ưu đãi, thả nổi và khoản trả hàng tháng',
  topic: 'real-estate',
  tldr: 'Khoản vay mua nhà thường có **giai đoạn ưu đãi** (lãi cố định thấp trong 6–36 tháng) rồi chuyển sang **thả nổi** = *lãi suất tham chiếu + biên độ*. Rủi ro lớn nhất nằm ở giai đoạn sau: khi mặt bằng lãi suất tăng, khoản trả hàng tháng có thể tăng vài triệu đồng dù dư nợ đã giảm. Hãy tính khả năng trả nợ ở **kịch bản lãi thả nổi cao**, không phải ở mức ưu đãi.',
  keyPoints: [
    '**Lãi ưu đãi** chỉ là giai đoạn đầu; phần lớn thời gian vay (thường 15–25 năm) chịu **lãi thả nổi** = lãi suất tham chiếu (ví dụ bình quân lãi tiết kiệm 12–13 tháng của chính ngân hàng) + biên độ cố định ghi trong hợp đồng.',
    'Hai yếu tố cần đọc kỹ trong hợp đồng: **lãi suất tham chiếu được tính thế nào** (ngân hàng tự công bố hay theo chỉ số công khai) và **biên độ** là bao nhiêu điểm %, kỳ điều chỉnh (3/6/12 tháng).',
    'Ví dụ minh họa: vay 2 tỷ đồng, 20 năm, trả gốc đều ~8,33 triệu/tháng. Tháng đầu ở lãi 8%/năm: lãi ~13,3 triệu → tổng ~21,7 triệu. Sau 2 năm ưu đãi, dư nợ còn 1,8 tỷ; nếu lãi thả nổi 13%/năm thì lãi ~19,5 triệu → tổng ~27,8 triệu/tháng.',
    '**Tỷ lệ nợ trên thu nhập (DTI)** = tổng khoản trả nợ hàng tháng / thu nhập hàng tháng. Mỗi ngân hàng có ngưỡng riêng; ngưỡng ngân hàng chấp nhận chưa chắc là ngưỡng an toàn cho gia đình bạn.',
    'Giữa năm 2026, báo chí ghi nhận nhiều ngân hàng nâng lãi vay mua nhà; lãi thả nổi sau ưu đãi phổ biến khoảng **12–15%/năm**, cho thấy rủi ro "sốc khoản trả" là có thật, không phải lý thuyết.',
  ],
  causalChain: [
    { from: 'Chi phí huy động vốn của ngân hàng tăng', to: 'Lãi suất tham chiếu tăng', mechanism: 'Lãi suất tham chiếu thường gắn với lãi tiết kiệm hoặc chi phí vốn của ngân hàng; khi ngân hàng phải trả lãi huy động cao hơn, chỉ số tham chiếu nhích lên.' },
    { from: 'Lãi suất tham chiếu tăng', to: 'Lãi thả nổi của khoản vay tăng', mechanism: 'Lãi thả nổi = tham chiếu + biên độ cố định; đến kỳ điều chỉnh, phần tăng của tham chiếu được cộng thẳng vào lãi suất của người vay.' },
    { from: 'Lãi thả nổi của khoản vay tăng', to: 'Khoản trả hàng tháng và DTI tăng', mechanism: 'Tiền lãi tính trên dư nợ còn lại; với dư nợ lớn ở những năm đầu, chỉ vài điểm % lãi suất đã tương đương vài triệu đồng mỗi tháng.' },
    { from: 'Khoản trả hàng tháng và DTI tăng', to: 'Áp lực tài chính hộ gia đình, nợ quá hạn tăng', mechanism: 'Hộ gia đình có thu nhập không tăng kịp phải cắt chi tiêu, vay thêm hoặc bán tài sản; một phần rơi vào nợ nhóm 2 (quá hạn dưới 90 ngày).' },
    { from: 'Áp lực tài chính hộ gia đình, nợ quá hạn tăng', to: 'Ngân hàng thận trọng hơn với tín dụng BĐS', mechanism: 'Ngân hàng siết điều kiện cho vay (thu nhập, tài sản đảm bảo, tỷ lệ cho vay/giá trị), làm cầu mua nhà bằng vốn vay yếu đi.' },
  ],
  vietnamImpact: [
    { group: 'Người mua nhà lần đầu', effect: 'Chịu rủi ro lớn nhất khi hết ưu đãi vì dư nợ còn cao và thường ít tài sản dự phòng; khoản trả có thể tăng đáng kể so với lúc ký hợp đồng.', direction: 'down' },
    { group: 'Người đang vay ở giai đoạn ưu đãi', effect: 'Hiện tại chưa bị ảnh hưởng, nhưng cần chuẩn bị cho kỳ chuyển sang thả nổi; có thể cân nhắc trả bớt gốc sớm (lưu ý phí trả nợ trước hạn).', direction: 'mixed' },
    { group: 'Nhà đầu tư dùng đòn bẩy', effect: 'Chi phí vốn tăng làm giảm lợi nhuận kỳ vọng; nếu giá cho thuê không theo kịp lãi vay, dòng tiền âm kéo dài.', direction: 'down' },
    { group: 'Ngân hàng thương mại', effect: 'Biên lãi có thể cải thiện trong ngắn hạn khi lãi thả nổi tăng, nhưng rủi ro nợ xấu từ cho vay mua nhà cũng tăng theo.', direction: 'mixed' },
    { group: 'Chủ đầu tư dự án nhà ở', effect: 'Khách hàng khó vay hơn, tốc độ bán hàng chậm; chủ đầu tư phải tung thêm chính sách hỗ trợ lãi suất, giãn tiến độ thanh toán.', direction: 'down' },
  ],
  indicators: [
    { name: 'Lãi suất điều hành và lãi suất liên ngân hàng', why: 'Tín hiệu sớm về hướng đi của chi phí vốn, sau đó lan sang lãi suất cho vay.', where: 'Website NHNN (sbv.gov.vn)' },
    { name: 'Lãi suất tham chiếu do ngân hàng công bố', why: 'Quyết định trực tiếp lãi thả nổi của khoản vay của bạn.', where: 'Website/biểu lãi suất của ngân hàng cho vay; phụ lục hợp đồng tín dụng' },
    { name: 'Lãi suất huy động kỳ hạn 12–13 tháng', why: 'Nhiều ngân hàng dùng làm cơ sở tính lãi tham chiếu; tăng hôm nay thường là lãi vay tăng ở kỳ điều chỉnh sau.', where: 'Biểu lãi suất ngân hàng; các bản tổng hợp lãi suất trên báo tài chính' },
    { name: 'Tăng trưởng tín dụng kinh doanh BĐS và cho vay mua nhà', why: 'Cho biết hệ thống đang nới hay siết dòng vốn vào nhà đất.', where: 'Thông cáo/báo cáo của NHNN' },
    { name: 'DTI cá nhân ở kịch bản lãi cao', why: 'Chỉ báo quan trọng nhất cho chính bạn: khoản trả có còn chịu được nếu lãi tăng thêm 2–4 điểm %?', where: 'Tự tính từ lịch trả nợ ngân hàng cung cấp' },
  ],
  counterpoints: [
    'Lãi suất cũng có thể **giảm** trong giai đoạn thả nổi; người vay thả nổi khi đó được lợi hơn người khóa lãi cố định dài hạn ở mức cao.',
    'Lãi ưu đãi thấp đôi khi đi kèm biên độ cao hoặc phí trả nợ trước hạn lớn; so sánh khoản vay cần nhìn **tổng chi phí cả vòng đời**, không chỉ lãi năm đầu.',
    'Nếu thu nhập của người vay tăng đều (tăng lương, thêm nguồn thu), DTI có thể giảm dần dù lãi suất tăng nhẹ; mức chịu đựng phụ thuộc hoàn cảnh từng hộ.',
  ],
  glossary: [
    { term: 'Lãi suất ưu đãi', definition: 'Mức lãi cố định thấp trong một thời gian đầu (thường 6–36 tháng) để thu hút khách vay.' },
    { term: 'Lãi suất thả nổi', definition: 'Lãi suất điều chỉnh định kỳ theo công thức: lãi suất tham chiếu + biên độ.' },
    { term: 'Lãi suất tham chiếu', definition: 'Mức lãi làm cơ sở, thường gắn với lãi tiết kiệm hoặc chi phí vốn do chính ngân hàng công bố.' },
    { term: 'Biên độ', definition: 'Phần cộng thêm cố định (điểm %) vào lãi tham chiếu, ghi trong hợp đồng tín dụng.' },
    { term: 'Gốc đều, lãi giảm dần', definition: 'Cách trả phổ biến: mỗi kỳ trả cùng một khoản gốc, tiền lãi tính trên dư nợ còn lại nên giảm dần theo thời gian.' },
    { term: 'DTI (Debt-to-Income)', definition: 'Tổng khoản trả nợ hàng tháng chia cho thu nhập hàng tháng; càng cao thì càng ít "bộ đệm" khi có biến cố.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'mortgage-rates-credit-q',
    question: 'Anh A thu nhập 50 triệu/tháng, được mời vay 2 tỷ với lãi ưu đãi 7,5% năm đầu, sau đó thả nổi "lãi tham chiếu + 3,5%". Cách đánh giá nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Tính khoản trả ở mức 7,5%; nếu dưới 50% thu nhập thì yên tâm vay.', explain: 'Mức ưu đãi chỉ kéo dài một năm; phần lớn thời gian vay sẽ chịu lãi thả nổi. Đánh giá ở mức ưu đãi đánh giá thấp rủi ro.' },
      { id: 'b', text: 'Ước lãi thả nổi = tham chiếu hiện tại + 3,5%, cộng thêm kịch bản tham chiếu tăng 2–3 điểm %, rồi kiểm tra khoản trả và quỹ dự phòng ở kịch bản đó.', correct: true, explain: 'Đúng. Stress-test ở kịch bản lãi cao cho biết khoản vay có còn chịu được khi điều kiện xấu đi; đồng thời đọc kỹ cách tính lãi tham chiếu và phí trả nợ trước hạn.' },
      { id: 'c', text: 'Chọn ngân hàng có lãi ưu đãi thấp nhất là đủ, vì lãi thả nổi các ngân hàng gần như giống nhau.', explain: 'Biên độ và cách tính lãi tham chiếu khác nhau đáng kể giữa các ngân hàng; một khoản vay ưu đãi thấp nhưng biên độ cao có thể đắt hơn trong cả vòng đời.' },
    ],
  },
  sources: [
    { title: 'Rủi ro lớn dần khi lãi suất thả nổi vay mua nhà tăng cao', publisher: 'VietnamFinance', url: 'https://vietnamfinance.vn/rui-ro-lon-dan-khi-lai-suat-tha-noi-vay-mua-nha-tang-cao-d149495.html' },
    { title: 'Lãi suất vay mua nhà "neo" hai con số, kỳ vọng hạ nhiệt không dễ', publisher: 'Thời báo Tài chính Việt Nam', url: 'https://thoibaotaichinhvietnam.vn/lai-suat-vay-mua-nha-neo-hai-con-so-ky-vong-ha-nhiet-khong-de-201273-201273.html' },
    { title: 'What is a debt-to-income ratio?', publisher: 'Consumer Financial Protection Bureau', url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/' },
    { title: 'Ngân hàng Nhà nước Việt Nam', publisher: 'NHNN', url: 'https://www.sbv.gov.vn' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
