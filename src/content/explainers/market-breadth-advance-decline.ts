import type { Explainer } from '../../../shared/explainer'

export const marketBreadthAdvanceDecline: Explainer = {
  id: 'market-breadth-advance-decline',
  slug: 'market-breadth-advance-decline',
  question: 'Độ rộng thị trường là gì, và đường tăng–giảm (advance–decline) cho biết điều gì?',
  title: 'Độ rộng thị trường cho biết nhịp tăng của chỉ số có lan ra nhiều cổ phiếu hay chỉ do vài mã lớn',
  topic: 'markets-investing',
  tldr: 'Chỉ số theo vốn hóa (như VN-Index) có thể tăng chỉ vì vài cổ phiếu lớn. **Độ rộng thị trường** đo số cổ phiếu tham gia nhịp tăng/giảm; **đường tăng–giảm (ADL)** là tổng cộng dồn của (số mã tăng − số mã giảm) mỗi phiên. Khi chỉ số tăng nhưng ADL giảm (phân kỳ), nhịp tăng đang hẹp. Đây là công cụ mô tả, không phải bằng chứng dự báo.',
  keyPoints: [
    'Theo Wikipedia (Advance–decline line): ADL là chỉ báo kỹ thuật theo dõi có bao nhiêu cổ phiếu tham gia nhịp tăng hay giảm; mỗi ngày lấy số mã tăng giá trừ số mã giảm giá, cộng vào giá trị ngày trước; có thể áp dụng tương tự cho khối lượng.',
    'Công dụng chính: chỉ số **gia quyền vốn hóa** bị chi phối bởi vài mã lớn, nên cần độ rộng để biết nhịp tăng có đồng thuận hay không.',
    '**Phân kỳ**: chỉ số tăng trong khi ADL giảm cho thấy nhịp tăng hẹp, dựa vào ít mã. Wikipedia nêu các ví dụ lịch sử như cuối bong bóng dot-com (1999–2000), trang này viết rằng khi chỉ số tăng còn ADL giảm thì chỉ số "có thể gây hiểu lầm"; tuy vậy một số khẳng định trong phần ứng dụng của trang không có trích dẫn, nên coi đây là gợi ý mô tả chứ không phải bằng chứng dự báo.',
    'Ví dụ giả định: một phiên chỉ số +1%, nhờ ba mã vốn hóa lớn tăng mạnh; có 150 mã tăng và 300 mã giảm. ADL phiên đó giảm 150 điểm dù chỉ số tăng.',
    'Ở Việt Nam, độ rộng thường tính riêng cho từng sàn (HOSE, HNX, UPCoM); số mã tăng/giảm bị ảnh hưởng bởi biên độ giá trần–sàn và thanh khoản từng mã, nên so sánh giữa sàn cần thận trọng.',
  ],
  causalChain: [
    { from: 'Dòng tiền tập trung vào vài cổ phiếu vốn hóa lớn', to: 'Chỉ số tăng nhưng đa số cổ phiếu không tăng', mechanism: 'Chỉ số gia quyền vốn hóa dành trọng số lớn cho mã lớn; chúng đủ kéo chỉ số dù số mã giảm nhiều hơn số mã tăng.' },
    { from: 'Số mã giảm vượt số mã tăng nhiều phiên', to: 'ADL đi xuống trong khi chỉ số đi lên (phân kỳ)', mechanism: 'ADL cộng dồn chênh lệch tăng–giảm; chuỗi phiên âm làm đường xuống bất kể chỉ số.' },
    { from: 'Phân kỳ kéo dài', to: 'Nhận định nhịp tăng thiếu nền tảng rộng', mechanism: 'Nếu ít cổ phiếu tham gia, nhịp tăng dễ đảo chiều khi nhóm dẫn dắt chững lại; nhưng đây là khả năng, không phải quy luật.' },
    { from: 'Độ rộng cải thiện cùng chỉ số', to: 'Nhịp tăng được xem là đồng thuận hơn', mechanism: 'Khi nhiều cổ phiếu cùng tăng, nhịp tăng ít phụ thuộc vào một vài mã.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân', effect: 'VN-Index tăng do vài mã trụ có thể khác trải nghiệm danh mục của đa số mã; xem số mã tăng/giảm giúp đối chiếu với kết quả thực của mình.', direction: 'mixed' },
    { group: 'Nhà phân tích kỹ thuật', effect: 'Độ rộng là một đầu vào bổ sung cho nhận định xu hướng, không thay thế phân tích cơ bản.', direction: 'mixed' },
    { group: 'Quỹ chủ động', effect: 'Độ rộng hẹp là lý do để so sánh hiệu quả với chỉ số tham chiếu thận trọng, vì chỉ số có thể được kéo bởi ít mã.', direction: 'mixed' },
    { group: 'Nhà đầu tư thụ động theo chỉ số', effect: 'Danh mục theo chỉ số vốn hóa cũng tập trung vào các mã lớn nên chịu rủi ro tập trung khi độ rộng hẹp.', direction: 'down' },
  ],
  indicators: [
    { name: 'Số mã tăng, giảm, đứng giá mỗi phiên theo từng sàn', why: 'Nguyên liệu để tính ADL và tỷ lệ tăng/giảm.', where: 'Bảng giá và thống kê thị trường của HOSE, HNX; các nhà cung cấp dữ liệu chứng khoán' },
    { name: 'Tỷ lệ cổ phiếu trên đường trung bình động dài hạn', why: 'Thước đo độ rộng khác, phản ánh số mã còn trong xu hướng tăng.', where: 'Tự tính từ dữ liệu giá, hoặc nền tảng phân tích kỹ thuật' },
    { name: 'So sánh chỉ số vốn hóa với chỉ số gia quyền đều (equal-weight)', why: 'Chênh lệch lớn cho thấy mã lớn đang dẫn dắt.', where: 'Tự tính từ dữ liệu giá; các nhà cung cấp chỉ số' },
  ],
  counterpoints: [
    'Phân kỳ độ rộng có thể kéo dài rất lâu mà thị trường vẫn tăng; không có quy tắc thời điểm.',
    'Thị trường nhỏ, nhiều mã thanh khoản thấp có số mã "đứng giá" lớn; ADL dễ bị méo.',
    'Một phiên giảm diện rộng do tin vĩ mô khác với giảm do chuyển dòng tiền sang mã lớn; số liệu độ rộng không tự cho biết nguyên nhân.',
  ],
  glossary: [
    { term: 'Độ rộng thị trường', definition: 'Mức độ lan tỏa của nhịp tăng/giảm trên nhiều cổ phiếu.' },
    { term: 'Đường tăng–giảm (ADL)', definition: 'Tổng cộng dồn của (số mã tăng − số mã giảm) theo ngày.' },
    { term: 'Phân kỳ', definition: 'Chỉ số và chỉ báo di chuyển ngược chiều nhau.' },
    { term: 'Chỉ số gia quyền vốn hóa', definition: 'Chỉ số mà cổ phiếu có vốn hóa lớn chiếm trọng số lớn hơn.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'market-breadth-advance-decline-q',
    question: 'VN-Index tăng ba tuần liền nhưng ADL giảm. Cách diễn giải thận trọng nhất?',
    options: [
      { id: 'a', text: 'Nhịp tăng đang hẹp, dựa vào ít mã; đáng theo dõi nhưng không phải tín hiệu bán chắc chắn.', correct: true, explain: 'Đúng. Phân kỳ độ rộng mô tả sự tập trung; nó không có độ chính xác dự báo đảm bảo.' },
      { id: 'b', text: 'Thị trường chắc chắn sẽ giảm tuần sau.', explain: 'Phân kỳ có thể kéo dài; không có quy tắc chắc chắn về thời điểm.' },
      { id: 'c', text: 'ADL sai vì chỉ số đang tăng.', explain: 'Hai thước đo khác nhau về phạm vi: chỉ số gia quyền vốn hóa, ADL đếm số mã.' },
    ],
  },
  sources: [
    { title: 'Advance–decline line', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Advance%E2%80%93decline_line' },
    { title: 'Breadth of market', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Market_breadth' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 92,
}
