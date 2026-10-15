import type { Explainer } from '../../../shared/explainer'

export const monetaryTransmissionLags: Explainer = {
  id: 'monetary-transmission-lags',
  slug: 'monetary-transmission-lags',
  question: 'Lãi suất tác động tới nền kinh tế qua những kênh nào và mất bao lâu?',
  title: 'Truyền dẫn chính sách tiền tệ: các kênh và độ trễ',
  topic: 'macro',
  tldr: 'Ngân hàng trung ương đổi lãi suất điều hành, tác động lan qua **lãi suất ngân hàng, tín dụng, giá tài sản, tỷ giá và kỳ vọng** rồi mới tới chi tiêu và giá cả. ECB mô tả quá trình này có độ trễ "dài, biến thiên và không chắc chắn", nên không thể đọc tác động của một lần đổi lãi suất ngay trong vài tuần.',
  keyPoints: [
    'Theo ECB, lãi suất chính sách tác động trực tiếp lên lãi suất thị trường tiền tệ, và gián tiếp lên lãi suất cho vay, tiền gửi mà ngân hàng niêm yết cho khách hàng.',
    'Có nhiều kênh song song: **lãi suất**, **kỳ vọng** (ngân hàng trung ương đáng tin neo kỳ vọng lạm phát), **tín dụng** (ngân hàng thu hẹp cho vay khi rủi ro tăng), **giá tài sản** và **tỷ giá**.',
    'ECB nêu quá trình truyền dẫn có "độ trễ dài, biến thiên và không chắc chắn", và khó dự báo chính xác tác động lên nền kinh tế và mức giá.',
    'Ngân hàng Anh mô tả cơ chế căn bản: tăng lãi suất điều hành làm khoản vay đắt hơn, tiền gửi hấp dẫn hơn, chi tiêu giảm, doanh nghiệp khó tăng giá hơn nên lạm phát hạ.',
    'Độ trễ phụ thuộc cấu trúc nền kinh tế: tỷ trọng vay lãi suất thả nổi, độ mở thương mại, mức độ phát triển thị trường tài chính và mức độ tin cậy của kỳ vọng.',
  ],
  causalChain: [
    { from: 'Ngân hàng trung ương đổi lãi suất điều hành', to: 'Lãi suất liên ngân hàng và thị trường tiền tệ đổi', mechanism: 'Lãi suất điều hành là mức sàn/trần chi phí vốn ngắn hạn của hệ thống ngân hàng nên truyền sang thị trường tiền tệ gần như ngay lập tức.' },
    { from: 'Chi phí vốn ngân hàng đổi', to: 'Lãi suất cho vay và huy động của khách hàng đổi', mechanism: 'Ngân hàng điều chỉnh lãi suất theo chi phí vốn và cạnh tranh; khoản vay thả nổi đổi nhanh hơn khoản vay cố định, tạo chênh lệch tốc độ.' },
    { from: 'Lãi suất khách hàng và điều kiện tín dụng đổi', to: 'Chi tiêu, đầu tư và giá tài sản đổi', mechanism: 'Vay đắt hơn làm hộ gia đình và doanh nghiệp hoãn chi tiêu/đầu tư; giá cổ phiếu, bất động sản chịu áp lực khi lãi suất chiết khấu tăng.' },
    { from: 'Chi tiêu và đầu tư đổi', to: 'Sản lượng, thị trường lao động và lạm phát đổi', mechanism: 'Cầu giảm thì áp lực tăng giá giảm; tác động lên lạm phát đến chậm hơn lên lãi suất thị trường vì giá và tiền lương điều chỉnh dần.' },
    { from: 'Chênh lệch lãi suất so với nước ngoài đổi', to: 'Tỷ giá đổi, rồi lạm phát nhập khẩu đổi', mechanism: 'Tỷ giá ảnh hưởng trực tiếp tới giá hàng nhập khẩu mà người tiêu dùng mua; kênh này nhanh nhưng lớn hay nhỏ tùy độ mở và chế độ tỷ giá.' },
  ],
  vietnamImpact: [
    { group: 'Người vay lãi suất thả nổi (vay mua nhà, vay sản xuất)', effect: 'Lãi suất điều hành và mặt bằng lãi suất đổi thì chi phí vay điều chỉnh khi đến kỳ thả nổi; khoản vay cố định chưa đổi cho tới khi tái định giá.', direction: 'mixed' },
    { group: 'Người gửi tiết kiệm', effect: 'Lãi suất tiền gửi thường đổi trước lãi suất cho vay khi thanh khoản thay đổi; lãi suất thực còn phụ thuộc lạm phát.', direction: 'mixed' },
    { group: 'Doanh nghiệp xuất nhập khẩu', effect: 'Chênh lệch lãi suất với nước ngoài ảnh hưởng tỷ giá, từ đó ảnh hưởng chi phí nhập khẩu và giá bán xuất khẩu.', direction: 'mixed' },
    { group: 'Nhà đầu tư cổ phiếu và bất động sản', effect: 'Kỳ vọng lãi suất đổi trước khi lãi suất thực tế đổi, nên giá tài sản có thể phản ứng sớm hơn kinh tế thực.', direction: 'mixed' },
    { group: 'Nhà hoạch định chính sách', effect: 'Do độ trễ biến thiên, phải hành động dựa trên dự báo lạm phát tương lai thay vì chỉ số hiện tại, và dễ chỉnh quá tay.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Lãi suất điều hành và lãi suất liên ngân hàng', why: 'Điểm đầu của chuỗi truyền dẫn; xem lãi suất thị trường có bám theo không.', where: 'Ngân hàng Nhà nước (sbv.gov.vn); các ngân hàng trung ương lớn' },
    { name: 'Lãi suất cho vay và huy động bình quân', why: 'Đo mức độ truyền dẫn xuống khách hàng.', where: 'Báo cáo của Ngân hàng Nhà nước; công bố lãi suất của các ngân hàng' },
    { name: 'Tăng trưởng tín dụng', why: 'Kênh tín dụng: tín dụng chậm lại sau thắt chặt là dấu hiệu truyền dẫn.', where: 'Ngân hàng Nhà nước; Cục Thống kê' },
    { name: 'Kỳ vọng lạm phát', why: 'Nếu kỳ vọng neo vững, ngân hàng trung ương cần ít hành động hơn.', where: 'Các khảo sát kỳ vọng, nghiên cứu của ngân hàng trung ương' },
  ],
  counterpoints: [
    'Khi hệ thống ngân hàng yếu hoặc bị hạn mức tín dụng chi phối, lãi suất ít là biến số điều tiết; việc truyền dẫn có thể đi qua kênh hành chính nhiều hơn kênh giá.',
    'Cú sốc cung (giá năng lượng, thiên tai) tạo lạm phát mà tăng lãi suất không giải quyết được trực tiếp; đáp ứng chính sách có thể cần cân nhắc cả tăng trưởng.',
    'Độ trễ không phải hằng số: trong các cú sốc lớn hoặc khi cấu trúc tài chính thay đổi (tỷ trọng vay thả nổi, kỳ vọng), thời gian truyền dẫn có thể rút ngắn hoặc kéo dài.',
  ],
  glossary: [
    { term: 'Truyền dẫn chính sách tiền tệ', definition: 'Quá trình thay đổi công cụ chính sách của ngân hàng trung ương lan tới chi tiêu, sản lượng và lạm phát.' },
    { term: 'Lãi suất điều hành', definition: 'Lãi suất do ngân hàng trung ương đặt, làm mốc cho chi phí vốn ngắn hạn trong hệ thống.' },
    { term: 'Kênh tín dụng', definition: 'Cơ chế trong đó thay đổi chính sách tác động tới khả năng và sự sẵn lòng cho vay của ngân hàng.' },
    { term: 'Neo kỳ vọng lạm phát', definition: 'Tình trạng người dân, doanh nghiệp tin lạm phát sẽ quay về mục tiêu nên không đòi tăng giá/lương theo cú sốc.' },
    { term: 'Độ trễ biến thiên', definition: 'Thời gian từ khi đổi chính sách đến khi có tác động đầy đủ thay đổi theo hoàn cảnh nên khó dự đoán chính xác.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'monetary-transmission-lags-q',
    question: 'Ngân hàng trung ương tăng lãi suất điều hành, ba tháng sau lạm phát vẫn chưa giảm. Kết luận hợp lý nhất?',
    options: [
      { id: 'a', text: 'Chính sách thất bại, cần tăng lãi suất mạnh hơn ngay lập tức.', explain: 'Vội kết luận dễ dẫn đến chỉnh quá tay: độ trễ dài, biến thiên là đặc điểm thường được ghi nhận của truyền dẫn.' },
      { id: 'b', text: 'Chưa đủ thông tin; cần theo dõi từng khâu của chuỗi (lãi suất thị trường, tín dụng, chi tiêu, kỳ vọng) vì tác động tới lạm phát đến chậm.', correct: true, explain: 'Đúng: ECB nhấn mạnh độ trễ dài, biến thiên, không chắc chắn; cần kiểm tra mỗi mắt xích thay vì chỉ nhìn lạm phát hiện tại.' },
      { id: 'c', text: 'Lãi suất không có tác động tới lạm phát.', explain: 'Cơ chế truyền dẫn có nhiều kênh được ghi nhận; việc tác động chưa thấy sau ba tháng không chứng minh là không có tác động.' },
    ],
  },
  sources: [
    { title: 'Transmission mechanism of monetary policy', publisher: 'European Central Bank', url: 'https://www.ecb.europa.eu/mopo/intro/transmission/html/index.en.html' },
    { title: 'The interest rate (Bank Rate)', publisher: 'Bank of England', url: 'https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 121,
}
