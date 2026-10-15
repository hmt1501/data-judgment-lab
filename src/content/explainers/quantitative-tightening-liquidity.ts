import type { Explainer } from '../../../shared/explainer'

export const quantitativeTighteningLiquidity: Explainer = {
  id: 'quantitative-tightening-liquidity',
  slug: 'quantitative-tightening-liquidity',
  question: 'Thu hẹp bảng cân đối của ngân hàng trung ương rút thanh khoản khỏi thị trường như thế nào?',
  title: 'QT rút thanh khoản bằng cách để trái phiếu đáo hạn mà không mua lại, làm giảm dự trữ của ngân hàng',
  topic: 'macro',
  tldr: 'Khi ngân hàng trung ương **thu hẹp bảng cân đối** (quantitative tightening, QT), họ để trái phiếu đang nắm đáo hạn mà không tái đầu tư, hoặc bán bớt. Tiền thanh toán cho trái phiếu đó bị rút khỏi hệ thống ngân hàng nên **dự trữ ngân hàng giảm**, vốn rẻ khan dần và lợi suất dài hạn chịu thêm áp lực tăng. Tác động nhỏ hơn và khó đo hơn so với việc tăng lãi suất chính sách.',
  keyPoints: [
    'QT là đối xứng của QE: QE mua tài sản bằng tiền mới tạo ra, QT để tài sản tự đáo hạn (hoặc bán) và **hủy** lượng tiền tương ứng.',
    'Tiền không biến mất khỏi nền kinh tế một cách trực tiếp; nó biến mất khỏi **dự trữ ngân hàng thương mại** tại ngân hàng trung ương, nơi là "nhiên liệu" của thanh khoản liên ngân hàng.',
    'Ngân hàng trung ương thường cho QT chạy "tự động" với trần hằng tháng và coi đó là chính sách nền, trong khi lãi suất điều hành là công cụ chủ động. Ví dụ Fed: theo trang Policy Normalization (cập nhật 26/11/2025), kế hoạch tháng 5/2022 đặt trần rút ban đầu 30 tỷ USD/tháng với Kho bạc và 17,5 tỷ USD/tháng với nợ cơ quan và MBS, sau ba tháng tăng lên 60 và 35 tỷ USD; ngày 29/10/2025 FOMC thông báo **ngừng rút danh mục từ 1/12/2025**.',
    'Khi dự trữ giảm tới mức khan hiếm, lãi suất qua đêm có thể bật tăng và thị trường tiền tệ căng thẳng; vì vậy QT thường dừng hoặc chậm lại trước khi tới mức đó.',
    'Với thị trường mới nổi như Việt Nam, QT của Fed chủ yếu tác động qua **USD mạnh, lợi suất Mỹ cao** và dòng vốn danh mục, chứ không qua nguồn tiền trực tiếp.',
  ],
  causalChain: [
    { from: 'Trái phiếu trong bảng cân đối của ngân hàng trung ương đáo hạn', to: 'Chính phủ phải trả gốc cho ngân hàng trung ương', mechanism: 'Kho bạc tiếp tục trả nợ như thường lệ; nếu ngân hàng trung ương không mua trái phiếu mới thay thế, khoản tiền này không quay lại thị trường.' },
    { from: 'Chính phủ trả gốc cho ngân hàng trung ương', to: 'Dự trữ của ngân hàng thương mại và tiền gửi kho bạc thay đổi', mechanism: 'Kho bạc rút tiền từ tài khoản (thường gắn với tiền gửi ở ngân hàng thương mại) để trả; kết quả kế toán là tổng dự trữ của hệ thống ngân hàng giảm đi.' },
    { from: 'Dự trữ ngân hàng giảm', to: 'Thanh khoản liên ngân hàng bớt dồi dào, chi phí vốn tăng nhẹ', mechanism: 'Ngân hàng giữ ít đệm thanh khoản hơn, nên ít sẵn sàng cho vay qua đêm hoặc mua trái phiếu; lãi suất thị trường tiền tệ nhạy cảm hơn với biến động nhỏ.' },
    { from: 'Thị trường mất đi một người mua lớn trái phiếu', to: 'Lợi suất dài hạn chịu áp lực tăng, phần bù kỳ hạn mở rộng', mechanism: 'Nhà đầu tư tư nhân phải hấp thụ thêm nguồn cung trái phiếu; muốn họ mua thì cần lợi suất cao hơn.' },
    { from: 'Lợi suất dài hạn tăng, thanh khoản khô hơn', to: 'Điều kiện tài chính toàn cầu thắt chặt', mechanism: 'Chi phí vay doanh nghiệp, thế chấp và định giá tài sản rủi ro chịu tác động; vốn có xu hướng quay về tài sản an toàn bằng USD.' },
  ],
  vietnamImpact: [
    { group: 'Tỷ giá và dự trữ ngoại hối', effect: 'USD mạnh lên do lợi suất Mỹ cao có thể tạo áp lực lên VND; Ngân hàng Nhà nước phải cân đối giữa điều hành tỷ giá và thanh khoản đồng nội tệ.', direction: 'down' },
    { group: 'Doanh nghiệp vay ngoại tệ', effect: 'Lãi suất USD thả nổi tăng làm chi phí lãi vay và gánh nặng trả nợ tăng.', direction: 'down' },
    { group: 'Nhà đầu tư cổ phiếu và trái phiếu', effect: 'Dòng vốn nước ngoài có thể rút khi điều kiện tài chính toàn cầu thắt chặt, nhưng tác động phụ thuộc lớn vào tâm lý và vị thế nhà đầu tư trong nước.', direction: 'down' },
    { group: 'Xuất khẩu', effect: 'Nếu QT góp phần làm kinh tế Mỹ chậm lại, cầu hàng Việt Nam sẽ giảm; tác động trễ và gián tiếp.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Quy mô bảng cân đối và dự trữ ngân hàng', why: 'Cho thấy tốc độ rút thanh khoản thực tế và gần ngưỡng khan hiếm hay chưa.', where: 'Báo cáo H.4.1 hằng tuần của Fed; dữ liệu FRED' },
    { name: 'Lãi suất qua đêm có bảo đảm (SOFR) so với lãi suất điều hành', why: 'Chênh lệch tăng bất thường báo hiệu thanh khoản đang căng.', where: 'Fed New York, Fed St. Louis (FRED)' },
    { name: 'Lợi suất trái phiếu chính phủ 10 năm và phần bù kỳ hạn', why: 'Phản ánh tác động của nguồn cung trái phiếu chưa có người mua chính sách.', where: 'Bộ Tài chính Mỹ, Fed New York' },
    { name: 'Lãi suất liên ngân hàng VND qua đêm', why: 'Theo dõi sức ép thanh khoản đồng nội tệ khi điều kiện toàn cầu thắt chặt.', where: 'Ngân hàng Nhà nước Việt Nam (sbv.gov.vn)' },
  ],
  counterpoints: [
    'Ảnh hưởng của QT khó tách khỏi lãi suất chính sách, kỳ vọng và nhu cầu trái phiếu của nhà đầu tư, nên các ước lượng "QT tương đương bao nhiêu lần tăng lãi suất" có biên sai số lớn.',
    'Khi hệ thống còn nhiều dự trữ dư thừa, QT gần như không gây tác động rõ; vấn đề chỉ xuất hiện khi dự trữ tiến gần mức khan hiếm.',
    'Thị trường tiếp nhận QT có thể khác nhau theo thời kỳ: thông báo trước và kế hoạch minh bạch làm giảm cú sốc so với bán tháo bất ngờ.',
  ],
  glossary: [
    { term: 'Bảng cân đối của ngân hàng trung ương', definition: 'Danh mục tài sản (như trái phiếu) và nợ (như tiền mặt, dự trữ của ngân hàng) của ngân hàng trung ương.' },
    { term: 'Dự trữ ngân hàng', definition: 'Tiền ngân hàng thương mại gửi tại ngân hàng trung ương, dùng để thanh toán bù trừ.' },
    { term: 'QE / QT', definition: 'Nới lỏng / thắt chặt định lượng: mua / thu hẹp tài sản của ngân hàng trung ương để tác động lên thanh khoản và lãi suất dài hạn.' },
    { term: 'Phần bù kỳ hạn', definition: 'Lợi suất thêm mà nhà đầu tư đòi hỏi để giữ trái phiếu dài hạn thay vì cuốn chiếu ngắn hạn.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'quantitative-tightening-liquidity-q',
    question: 'Ngân hàng trung ương không bán trái phiếu nào nhưng ngừng tái đầu tư khi chúng đáo hạn. Điều gì xảy ra?',
    options: [
      { id: 'a', text: 'Không có gì thay đổi vì không có giao dịch bán.', explain: 'Sai: bảng cân đối vẫn thu hẹp khi trái phiếu đáo hạn mà không được thay thế, và dự trữ ngân hàng giảm tương ứng.' },
      { id: 'b', text: 'Bảng cân đối thu hẹp và dự trữ của ngân hàng thương mại giảm.', correct: true, explain: 'Đúng. Đây là cơ chế QT "thụ động": tài sản giảm, nợ phải trả (dự trữ) giảm theo, thanh khoản hệ thống bị rút bớt.' },
      { id: 'c', text: 'Ngân hàng trung ương in thêm tiền để bù.', explain: 'Ngược lại: đó là QE. QT là hủy lượng tiền tương ứng với phần tài sản đáo hạn.' },
    ],
  },
  sources: [
    { title: 'Policy Normalization', publisher: 'Federal Reserve Board', url: 'https://www.federalreserve.gov/monetarypolicy/policy-normalization.htm' },
    { title: 'Quantitative tightening', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Quantitative_tightening' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 11,
}
