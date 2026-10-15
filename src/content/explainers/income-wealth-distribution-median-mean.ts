import type { Explainer } from '../../../shared/explainer'

export const incomeWealthDistributionMedianMean: Explainer = {
  id: 'income-wealth-distribution-median-mean',
  slug: 'income-wealth-distribution-median-mean',
  question: 'Thu nhập, của cải: nên đọc trung vị hay trung bình?',
  title: 'Phân phối thu nhập và của cải: trung vị khác trung bình thế nào',
  topic: 'macro',
  tldr: 'Thu nhập và tài sản thường **lệch phải**: một số ít người rất cao kéo **trung bình** lên, còn **trung vị** (người đứng giữa) ít bị ảnh hưởng. Vì thế "thu nhập bình quân" thường cao hơn mức một hộ điển hình, và hai thước đo có thể đi ngược chiều khi nhóm giàu biến động khác nhóm giữa. Muốn nói về người điển hình hãy dùng trung vị; muốn nói về tổng của cải chia đều hãy dùng trung bình, và nên xem cả hai.',
  keyPoints: [
    'Trung bình bị kéo bởi giá trị cực lớn; trung vị chỉ phụ thuộc phần giữa của dữ liệu đã sắp xếp. Wikipedia nêu ví dụ 20k, 30k, 40k, 50k, 1.000k có trung bình 228k nhưng trung vị 40k, và nhận xét rằng tăng thu nhập của người cao nhất **không làm đổi trung vị**.',
    'Ví dụ giả định (triệu đồng/tháng, 10 hộ): 8, 9, 10, 11, 12, 13, 15, 18, 25, 200 → **trung bình 32,1** nhưng **trung vị 12,5**; chỉ một hộ rất cao đã kéo trung bình hơn gấp đôi.',
    'Thực tế: theo Cục Dự trữ Liên bang Mỹ, giai đoạn 2007–2010 tài sản ròng bình quân của hộ gia đình Mỹ (điều chỉnh lạm phát) giảm khoảng **14,7%** trong khi **trung vị giảm khoảng 38,8%**; hai chiều đo kể hai câu chuyện khác nhau về mức tổn thất.',
    'Trung vị "bền" trước ngoại lai và dữ liệu sai nhập; trung bình lại có ưu điểm tính toán và cộng được thành tổng, nên mỗi thước đo trả lời câu hỏi khác.',
    'Khi trung bình cao hơn trung vị nhiều, đó là dấu hiệu phân phối lệch/bất bình đẳng; nhưng chỉ một cặp con số vẫn chưa nói được cấu trúc phân phối.',
  ],
  causalChain: [
    { from: 'Phân phối thu nhập/tài sản lệch phải (đuôi dài về phía cao)', to: 'Trung bình > trung vị', mechanism: 'Một số ít giá trị rất lớn kéo tổng lên, trong khi người đứng giữa không đổi.' },
    { from: 'Nhóm cao nhất tăng mạnh', to: 'Trung bình tăng, trung vị đứng yên', mechanism: 'Trung vị chỉ thay đổi khi các giá trị quanh giữa thay đổi.' },
    { from: 'Cú sốc giá tài sản ảnh hưởng nhiều nhóm giữa', to: 'Trung vị giảm sâu hơn trung bình', mechanism: 'Như Fed ghi nhận 2007–2010: tổn thất tập trung ở hộ trung bình trong khi tài sản nhóm cao giữ vững hơn.' },
    { from: 'Báo chí/chính sách chỉ dùng một thước đo', to: 'Hiểu sai về "người điển hình"', mechanism: 'Nói "thu nhập bình quân tăng" dễ bị hiểu thành mọi người khá hơn dù hộ ở giữa không đổi.' },
  ],
  vietnamImpact: [
    { group: 'Người đọc số liệu thu nhập bình quân đầu người', effect: 'Bình quân đầu người là trung bình; hộ điển hình có thể thấp hơn nếu phân phối lệch; cần xem số liệu theo nhóm 20% hoặc trung vị nếu có.', direction: 'mixed' },
    { group: 'Người trả lương/đàm phán lương', effect: 'Lương trung vị theo ngành, vị trí cho cái nhìn sát thực tế hơn lương bình quân bị kéo bởi vài vị trí rất cao.', direction: 'mixed' },
    { group: 'Nhà đầu tư BĐS', effect: 'Giá nhà trung vị, không phải bình quân, phản ánh giao dịch thông thường vì vài căn siêu sang kéo bình quân.', direction: 'mixed' },
    { group: 'Người làm chính sách an sinh', effect: 'Thiết kế hỗ trợ dựa vào trung vị hoặc ngưỡng theo phân vị chính xác hơn khi phân phối lệch.', direction: 'up' },
  ],
  indicators: [
    { name: 'Thu nhập bình quân và trung vị của hộ/lao động', why: 'Cặp đôi giúp thấy độ lệch của phân phối.', where: 'Khảo sát mức sống hộ gia đình, Cục Thống kê (nso.gov.vn)' },
    { name: 'Thu nhập theo nhóm 20% (quintile)', why: 'Cho thấy tăng trưởng đến nhóm nào.', where: 'Cục Thống kê; Ngân hàng Thế giới' },
    { name: 'Tỷ lệ trung bình / trung vị', why: 'Càng cao càng lệch.', where: 'Tự tính từ hai chuỗi' },
    { name: 'Phân phối tài sản (khi có)', why: 'Tài sản lệch hơn thu nhập; xu hướng khác nhau.', where: 'Khảo sát tài chính hộ gia đình, Cục Dự trữ Liên bang (Mỹ) làm ví dụ' },
  ],
  counterpoints: [
    'Trung vị cũng có hạn chế: không cho biết điều gì xảy ra ở đuôi trên/dưới; thay đổi lớn ở nhóm nghèo nhất hay giàu nhất không làm đổi trung vị.',
    'Trung bình vẫn cần thiết khi quan tâm tổng nguồn lực (thuế, tổng tiêu dùng); bỏ nó khỏi phân tích là sai ở chiều ngược lại.',
    'Số liệu 2007–2010 là của Mỹ; không thể áp trực tiếp cho Việt Nam, bài chỉ dùng như minh họa cơ chế.',
  ],
  glossary: [
    { term: 'Trung vị', definition: 'Giá trị ở giữa khi sắp xếp dữ liệu từ thấp đến cao.' },
    { term: 'Trung bình', definition: 'Tổng các giá trị chia số quan sát.' },
    { term: 'Phân phối lệch phải', definition: 'Phân phối có đuôi dài về phía giá trị lớn.' },
    { term: 'Quintile (nhóm 20%)', definition: 'Chia dân số thành 5 nhóm bằng nhau theo thu nhập.' },
    { term: 'Ngoại lai', definition: 'Giá trị rất khác phần còn lại của dữ liệu.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'income-wealth-distribution-median-mean-q',
    question: 'Thu nhập bình quân của một thành phố tăng 8% nhưng thu nhập trung vị đứng yên. Điều nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Mức tăng đến chủ yếu từ nhóm thu nhập cao; hộ ở giữa gần như không khá lên.', correct: true, explain: 'Đúng. Trung bình nhạy với nhóm cao nhất; trung vị đứng yên cho thấy phần giữa không đổi. Cần xem thêm phân phối.' },
      { id: 'b', text: 'Mọi hộ đều tăng thu nhập 8%.', explain: 'Nếu mọi hộ tăng 8% thì trung vị cũng tăng 8%.' },
      { id: 'c', text: 'Số liệu chắc chắn sai.', explain: 'Hai thước đo vẫn có thể lệch khi phân phối lệch; đó là hiện tượng bình thường.' },
    ],
  },
  sources: [
    { title: 'Median', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Median' },
    { title: 'Federal Reserve Bulletin 2012: Survey of Consumer Finances, thay đổi tài sản ròng trung bình và trung vị 2007–2010', publisher: 'Board of Governors of the Federal Reserve System', url: 'https://www.federalreserve.gov/Pubs/Bulletin/2012/articles/scf/accessible.htm' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 158,
}
