import type { Explainer } from '../../../shared/explainer'

export const goodwillImpairmentAcquisitions: Explainer = {
  id: 'goodwill-impairment-acquisitions',
  slug: 'goodwill-impairment-acquisitions',
  question: 'Lợi thế thương mại sau M&A là gì và vì sao nó bị ghi giảm giá trị (impairment)?',
  title: 'Lợi thế thương mại là phần giá mua vượt giá trị tài sản ròng; khi kỳ vọng sai, nó bị xóa sổ bằng khoản lỗ không tiền mặt',
  topic: 'markets-investing',
  tldr: 'Khi mua một công ty với giá cao hơn **giá trị hợp lý của tài sản ròng có thể xác định**, phần chênh lệch ghi là **lợi thế thương mại (goodwill)**. Nó đại diện cho kỳ vọng về thương hiệu, khách hàng, hiệp đồng. Nếu công ty mua không đạt kỳ vọng, goodwill phải ghi giảm (impairment) qua lợi nhuận. Khoản ghi giảm không tốn tiền mặt, nhưng là bằng chứng cho thấy giá mua đã quá cao.',
  keyPoints: [
    '**Công thức:** goodwill = giá mua − giá trị hợp lý của tài sản ròng có thể xác định được. Ví dụ giả định: mua với 500, tài sản ròng hợp lý 350, goodwill = 150.',
    'Theo IAS 36, tài sản bị coi là giảm giá trị khi **giá trị ghi sổ vượt giá trị có thể thu hồi**; theo phân tích của KPMG (2022), cả IFRS và US GAAP đều yêu cầu kiểm tra giảm giá trị goodwill ít nhất hằng năm (hoặc sớm hơn khi có dấu hiệu) và cấm hoàn nhập khoản ghi giảm goodwill; cách kiểm tra khác nhau (IFRS theo đơn vị tạo tiền, US GAAP theo đơn vị báo cáo và cho phép đánh giá định tính sơ bộ). Theo IFRS 3, goodwill là phần còn lại của giá phí mua sau khi phân bổ cho tài sản và nợ xác định được theo giá trị hợp lý. Chuẩn mực Việt Nam khác: theo bài trên Tạp chí Công Thương, VAS 11 và Thông tư 21/2006/TT-BTC cho phân bổ lợi thế thương mại vào chi phí tối đa 10 năm (quy định có thể đã được sửa đổi sau thời điểm đó, cần kiểm tra thông tư hiện hành).',
    'Ghi giảm giá trị là chi phí **không bằng tiền** nhưng làm giảm lợi nhuận và vốn chủ sở hữu, và thường xảy ra **sau** khi kết quả kinh doanh đã xấu, tức chậm so với giá cổ phiếu.',
    'Goodwill lớn so với vốn chủ sở hữu là rủi ro: một khoản ghi giảm có thể xóa phần lớn vốn và ảnh hưởng điều khoản vay.',
    'Dấu hiệu cảnh báo: nhiều thương vụ mua lại liên tiếp với giá cao, tăng trưởng chủ yếu từ mua chứ không từ hoạt động có sẵn, thuyết minh kiểm tra giảm giá trị dựa trên giả định tăng trưởng lạc quan.',
  ],
  causalChain: [
    { from: 'Công ty trả giá cao hơn giá trị tài sản ròng', to: 'Ghi nhận goodwill trên bảng cân đối', mechanism: 'Chênh lệch được vốn hóa thành tài sản vô hình không phân bổ cụ thể.' },
    { from: 'Kết quả của đơn vị mua về thấp hơn kỳ vọng', to: 'Giá trị có thể thu hồi thấp hơn giá trị ghi sổ', mechanism: 'Giá trị thu hồi dựa trên dòng tiền dự phóng được chiết khấu; dự phóng giảm hoặc lãi suất tăng làm giá trị giảm.' },
    { from: 'Giá trị thu hồi thấp hơn ghi sổ', to: 'Ghi giảm giá trị goodwill', mechanism: 'Chênh lệch được đưa vào chi phí kỳ đó, làm lợi nhuận và vốn chủ sở hữu giảm.' },
    { from: 'Vốn chủ sở hữu giảm', to: 'Tỷ lệ đòn bẩy tăng, có thể vi phạm cam kết vay', mechanism: 'Các tỷ lệ nợ/vốn chủ nhạy với giá trị ghi sổ.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cổ phiếu doanh nghiệp mua bán sáp nhập', effect: 'Cần đọc thuyết minh goodwill (phương pháp phân bổ hoặc kiểm tra giảm giá trị tùy chuẩn mực doanh nghiệp áp dụng) và giả định đi kèm trước khi tin vào tăng trưởng nhờ M&A.', direction: 'mixed' },
    { group: 'Doanh nghiệp bị ghi giảm', effect: 'Lợi nhuận kỳ đó giảm mạnh dù dòng tiền không đổi; cổ phiếu có thể phản ứng với tín hiệu về chất lượng thương vụ.', direction: 'down' },
    { group: 'Ngân hàng cho vay doanh nghiệp M&A', effect: 'Goodwill lớn làm vốn chủ hữu hình thấp hơn vốn chủ trên sổ sách.', direction: 'mixed' },
    { group: 'Người phân tích dữ liệu', effect: 'Nên tính chỉ số trên vốn chủ hữu hình (đã trừ goodwill) để so sánh công ty.', direction: 'up' },
  ],
  indicators: [
    { name: 'Goodwill/Tổng tài sản và Goodwill/Vốn chủ sở hữu', why: 'Đo mức phụ thuộc vào kỳ vọng M&A và mức dễ tổn thương.', where: 'Bảng cân đối kế toán của báo cáo tài chính' },
    { name: 'Biên độ an toàn trong kiểm tra giảm giá trị (headroom)', why: 'Giá trị thu hồi vượt ghi sổ càng nhỏ thì càng dễ bị ghi giảm.', where: 'Thuyết minh về goodwill' },
    { name: 'Tăng trưởng hữu cơ so với tăng trưởng nhờ mua', why: 'Tách phần tăng đến từ hoạt động sẵn có khỏi phần đến từ thương vụ.', where: 'Báo cáo thường niên, phân tích của ban lãnh đạo' },
  ],
  counterpoints: [
    'Không ghi giảm không đồng nghĩa goodwill an toàn: việc kiểm tra dựa trên dự phóng của ban lãnh đạo có thể chậm hoặc quá lạc quan.',
    'Ghi giảm giá trị có thể là tín hiệu hồi tưởng: thị trường thường đã phản ánh vấn đề trước đó.',
    'Một số thương vụ thật sự tạo hiệp đồng và goodwill được duy trì vì đáng giá; lớn không đồng nghĩa xấu.',
  ],
  glossary: [
    { term: 'Lợi thế thương mại', definition: 'Phần giá mua vượt giá trị hợp lý của tài sản ròng có thể xác định được của công ty bị mua.' },
    { term: 'Ghi giảm giá trị (impairment)', definition: 'Giảm giá trị ghi sổ của tài sản khi giá trị có thể thu hồi thấp hơn.' },
    { term: 'Giá trị có thể thu hồi', definition: 'Giá trị cao hơn giữa giá trị hợp lý trừ chi phí bán và giá trị sử dụng.' },
    { term: 'Vốn chủ hữu hình', definition: 'Vốn chủ sở hữu đã trừ goodwill và tài sản vô hình.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'goodwill-impairment-acquisitions-q',
    question: 'Công ty X công bố lỗ ròng lớn do ghi giảm goodwill, trong khi dòng tiền hoạt động bình thường. Nhận định hợp lý?',
    options: [
      { id: 'a', text: 'Công ty sắp hết tiền vì lỗ lớn.', explain: 'Ghi giảm goodwill là chi phí không bằng tiền, dòng tiền hoạt động bình thường nên chưa nói đến cạn tiền.' },
      { id: 'b', text: 'Khoản lỗ không tốn tiền nhưng cho thấy giá mua trước đây đã quá cao so với kết quả thực tế.', correct: true, explain: 'Đúng. Nó phản ánh sai lệch giữa kỳ vọng khi mua và kết quả, và làm giảm vốn chủ sở hữu.' },
      { id: 'c', text: 'Không cần quan tâm vì đây chỉ là kế toán.', explain: 'Nó cung cấp thông tin về chất lượng phân bổ vốn và có thể ảnh hưởng điều khoản vay.' },
    ],
  },
  sources: [
    { title: 'IAS 36 Impairment of Assets', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-36-impairment-of-assets/' },
    { title: 'IFRS 3 Business Combinations', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-3-business-combinations/' },
    { title: 'Goodwill impairment: IFRS Accounting Standards vs US GAAP (2022)', publisher: 'KPMG', url: 'https://kpmg.com/us/en/articles/2022/goodwill-impairment-ifrs-standards-us-gaap.html' },
    { title: 'Ảnh hưởng của kế toán lợi thế thương mại đến báo cáo tài chính của doanh nghiệp', publisher: 'Tạp chí Công Thương', url: 'https://tapchicongthuong.vn/anh-huong-cua-ke-toan-loi-the-thuong-mai-den-bao-cao-tai-chinh-cua-doanh-nghiep-71149.htm' },
    { title: 'Goodwill (accounting)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Goodwill_(accounting)' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 114,
}
