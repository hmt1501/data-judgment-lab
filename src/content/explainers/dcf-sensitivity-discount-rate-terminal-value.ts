import type { Explainer } from '../../../shared/explainer'

export const dcfSensitivityDiscountRateTerminalValue: Explainer = {
  id: 'dcf-sensitivity-discount-rate-terminal-value',
  slug: 'dcf-sensitivity-discount-rate-terminal-value',
  question: 'Vì sao định giá DCF nhạy với lãi suất chiết khấu và giá trị cuối kỳ?',
  title: 'DCF nhạy với lãi suất chiết khấu và giá trị cuối kỳ',
  topic: 'markets-investing',
  tldr: 'Mô hình dòng tiền chiết khấu (DCF) cho ra một con số duy nhất, nhưng con số đó phụ thuộc rất mạnh vào hai giả định khó biết: **lãi suất chiết khấu** và **giá trị cuối kỳ** (phần giá trị sau giai đoạn dự phóng). Chỉ cần xê dịch vài phần trăm là giá trị đổi hàng chục phần trăm. Vì vậy một kết quả DCF nên được đọc như **khoảng giá trị** kèm bảng độ nhạy, không phải một đáp số chính xác.',
  keyPoints: [
    'Theo Wikipedia ("Discounted cash flow", đọc 15/10/2026): giá trị = tổng dòng tiền tương lai chia cho (1 + r)^t, với r là lãi suất chiết khấu phản ánh chi phí vốn, giá trị thời gian của tiền và phần bù rủi ro; giá trị cuối kỳ thường dựa trên giả định tăng trưởng không đổi và rất nhạy với tăng trưởng lẫn lãi suất chiết khấu.',
    'Theo bài giảng của giáo sư Aswath Damodaran (NYU Stern, "Session 9: Terminal Value"): tốc độ tăng trưởng ổn định **không thể cao hơn tăng trưởng của nền kinh tế**; một cách đơn giản là dùng lãi suất phi rủi ro làm tham chiếu cho tăng trưởng danh nghĩa; ông cũng ghi nhận giá trị cuối kỳ thường chiếm tỷ trọng cao (80% trở lên) trong giá trị hiện tại, và rằng nó có thể bị đẩy lên tùy ý nếu tự do chỉnh tốc độ tăng trưởng; theo ông, điều này không xảy ra nếu tuân thủ các quy tắc, trong đó tăng trưởng gắn với tái đầu tư, lợi suất vượt trội và bị chặn ở mức lãi suất phi rủi ro.',
    'Ví dụ giả định (tự tính): dòng tiền tự do năm 1 là 100, tăng 5%/năm trong 5 năm, sau đó tăng g mãi mãi, chiết khấu r. Với r = 10% và g = 3% giá trị khoảng **1.526**, trong đó giá trị cuối kỳ quy về hiện tại chiếm khoảng 73%.',
    'Cùng ví dụ, giữ g = 3%: r = 9% cho khoảng 1.782 (+17%), r = 11% cho khoảng 1.333 (−13%). Giữ r = 10%: g = 2% cho khoảng 1.377 (−10%), g = 4% cho khoảng 1.723 (+13%). Kết hợp xấu nhất r = 11% và g = 2% còn khoảng 1.222 (−20%); kết hợp tốt nhất r = 9% và g = 4% lên khoảng 2.070 (+36%).',
    'Một thay đổi 1 điểm phần trăm của lãi suất chiết khấu hay tăng trưởng, vốn nằm trong sai số của ước lượng, đã đổi giá trị cả chục phần trăm; vì vậy nên trình bày bảng độ nhạy theo hai chiều thay vì một con số.',
  ],
  causalChain: [
    { from: 'Lãi suất phi rủi ro hoặc phần bù rủi ro tăng', to: 'Lãi suất chiết khấu tăng', mechanism: 'Chi phí vốn gồm lãi suất phi rủi ro cộng phần bù rủi ro; lãi suất thị trường tăng làm chi phí vốn tăng nếu các thành phần khác không đổi.' },
    { from: 'Lãi suất chiết khấu tăng', to: 'Giá trị hiện tại của dòng tiền giảm', mechanism: 'Dòng tiền ở xa bị chiết khấu mạnh hơn nên giá trị giảm nhiều nhất với tài sản có dòng tiền tập trung vào tương lai xa.' },
    { from: 'Giá trị cuối kỳ chiếm phần lớn giá trị', to: 'Kết quả phụ thuộc vào giả định tăng trưởng dài hạn', mechanism: 'Giá trị cuối kỳ = dòng tiền năm kế tiếp chia (r − g); khi g gần r mẫu số rất nhỏ nên giá trị tăng vọt.' },
    { from: 'Người dự phóng chọn g hoặc r hơi lạc quan', to: 'Định giá bị thổi phồng', mechanism: 'Chỉnh vài phần trăm đủ để chuyển kết luận từ "đắt" sang "rẻ"; do đó cần kiểm tra giả định so với tăng trưởng của nền kinh tế.' },
    { from: 'Lập bảng độ nhạy và kiểm tra giả định ngầm', to: 'Kết luận minh bạch hơn', mechanism: 'Cho thấy khoảng giá trị hợp lý và những giả định mà kết luận phụ thuộc, thay vì một điểm.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cổ phiếu Việt Nam dựa trên khuyến nghị định giá', effect: 'Khi lãi suất thị trường thay đổi, giá mục tiêu theo DCF có thể thay đổi đáng kể dù doanh nghiệp không đổi; nên xem tham số lãi suất chiết khấu và g trong báo cáo.', direction: 'mixed' },
    { group: 'Doanh nghiệp huy động vốn, M&A', effect: 'Các bên có thể dùng giả định khác nhau để ra định giá khác nhau; cần đối chiếu với phương pháp so sánh.', direction: 'mixed' },
    { group: 'Doanh nghiệp tăng trưởng cao, dòng tiền xa', effect: 'Giá trị tập trung vào tương lai nên nhạy hơn với lãi suất chiết khấu.', direction: 'down' },
    { group: 'Doanh nghiệp dòng tiền ổn định, đều', effect: 'Ít nhạy với giả định tăng trưởng hơn, nhưng vẫn nhạy với chi phí vốn.', direction: 'up' },
  ],
  indicators: [
    { name: 'Lãi suất phi rủi ro (lợi suất trái phiếu chính phủ dài hạn)', why: 'Nền tảng của lãi suất chiết khấu và mức trần tham chiếu cho tăng trưởng danh nghĩa dài hạn.', where: 'Hiệp hội Thị trường Trái phiếu Việt Nam (VBMA), Sở Giao dịch Chứng khoán Hà Nội (HNX)' },
    { name: 'Tăng trưởng GDP danh nghĩa dài hạn', why: 'Tham chiếu để kiểm tra giả định tăng trưởng ổn định g.', where: 'Cục Thống kê (nso.gov.vn); dự báo của IMF, Ngân hàng Thế giới' },
    { name: 'Tỷ trọng giá trị cuối kỳ trong tổng giá trị', why: 'Tỷ trọng cao nghĩa là kết quả dựa nhiều vào giả định dài hạn.', where: 'Tự tính từ mô hình DCF' },
    { name: 'Bảng độ nhạy theo r và g', why: 'Cho biết biên độ giá trị hợp lý.', where: 'Phần phụ lục trong báo cáo phân tích hoặc tự lập trên bảng tính' },
  ],
  counterpoints: [
    'Mô hình ngầm giả định rằng dòng tiền dự phóng và chi phí vốn ổn định; theo Wikipedia, CAPM bị thách thức về thực nghiệm và dự báo nhiều năm khó đáng tin.',
    'Bảng số trong bài là ví dụ giả định để minh họa độ nhạy, không phải định giá một doanh nghiệp thật hay dự báo giá.',
    'DCF vẫn hữu ích như công cụ buộc người phân tích nêu rõ giả định; nhược điểm nằm ở việc dùng nó như một con số chắc chắn. Có thể đối chiếu với phương pháp so sánh doanh nghiệp tương tự.',
  ],
  glossary: [
    { term: 'DCF', definition: 'Định giá bằng cách chiết khấu dòng tiền tương lai về hiện tại.' },
    { term: 'Lãi suất chiết khấu', definition: 'Tỷ suất dùng để quy dòng tiền tương lai về hiện tại, phản ánh chi phí vốn và rủi ro.' },
    { term: 'Giá trị cuối kỳ', definition: 'Giá trị của doanh nghiệp tại cuối giai đoạn dự phóng, tính cho các dòng tiền kéo dài sau đó.' },
    { term: 'Tăng trưởng ổn định (g)', definition: 'Tốc độ tăng dòng tiền không đổi giả định sau giai đoạn dự phóng.' },
    { term: 'WACC', definition: 'Chi phí vốn bình quân gia quyền giữa nợ và vốn chủ sở hữu.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'dcf-sensitivity-discount-rate-terminal-value-q',
    question: 'Một báo cáo định giá DCF đặt tăng trưởng dài hạn g = 6% trong khi lãi suất phi rủi ro danh nghĩa là 3% và tăng trưởng danh nghĩa dài hạn của nền kinh tế ước khoảng 6–7%. Điều gì nên được kiểm tra?',
    options: [
      { id: 'a', text: 'Không cần kiểm tra, vì g cao chỉ làm giá trị "hợp lý hơn".', explain: 'g cao đẩy mạnh giá trị cuối kỳ; nếu không có cơ sở, định giá bị thổi phồng.' },
      { id: 'b', text: 'Giả định g có quá cao so với mức tham chiếu, và bảng độ nhạy khi g thấp hơn thì giá trị ra sao.', correct: true, explain: 'Đúng. g bị giới hạn bởi tăng trưởng của nền kinh tế; nhiều người dùng lãi suất phi rủi ro làm tham chiếu. Kiểm tra độ nhạy cho thấy kết luận mong manh đến đâu.' },
      { id: 'c', text: 'Chỉ cần tăng r để cân bằng g cao.', explain: 'Hai tham số liên quan nhưng không nên chỉnh để ra giá mong muốn; cần dựa trên cơ sở độc lập.' },
    ],
  },
  sources: [
    { title: 'Session 9: Terminal Value (Valuation online slides)', publisher: 'Aswath Damodaran, NYU Stern', url: 'https://pages.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session9.pdf' },
    { title: 'Discounted cash flow', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Discounted_cash_flow' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 193,
}
