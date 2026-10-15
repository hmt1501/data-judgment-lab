import type { Explainer } from '../../../shared/explainer'

export const educationRoiCareerIncome: Explainer = {
  id: 'education-roi-career-income',
  slug: 'education-roi-career-income',
  question: 'Đầu tư vào học tập (thạc sĩ, chứng chỉ) có đáng tiền không? Tính lợi tức thế nào?',
  title: 'Học tập là khoản đầu tư: so chi phí thật (kể cả thu nhập bỏ lỡ) với phần thu nhập tăng thêm đã chiết khấu',
  topic: 'personal-finance',
  tldr: 'Có thể xem học tập như một dự án đầu tư: chi phí gồm **học phí và thu nhập bỏ lỡ**, lợi ích là **phần thu nhập tăng thêm** trong nhiều năm. Cách tính đơn giản là thời gian hoàn vốn và giá trị hiện tại ròng (NPV). Trong ví dụ giả định dưới đây, cùng một khoản học, chỉ cần thu nhập tăng thêm giảm còn khoảng 40% dự kiến là kết luận đổi từ “đáng” sang “không đáng”.',
  keyPoints: [
    'Mô hình “vốn con người” coi kỹ năng như tài sản tạo thu nhập; mô hình Mincer thực nghiệm liên hệ thu nhập với số năm học và kinh nghiệm, nhưng đó là quan hệ thống kê, không bảo đảm cho từng người.',
    'Chi phí thật = học phí + sách vở + **thu nhập bỏ lỡ** khi nghỉ làm/giảm giờ làm. Thu nhập bỏ lỡ thường là phần lớn nhất mà người ta bỏ sót.',
    '**Ví dụ giả định:** học toàn thời gian 2 năm, học phí 100 triệu, thu nhập bỏ lỡ 10 triệu/tháng × 24 = 240 triệu; tổng chi phí 340 triệu. Sau khi học, lương tăng thêm 5 triệu/tháng (60 triệu/năm) trong 30 năm. Hoàn vốn đơn giản sau khoảng 5,7 năm đi làm. Với tỷ lệ chiết khấu 6%/năm, giá trị hiện tại của phần tăng thêm ≈ 826 triệu, NPV ≈ +486 triệu.',
    'Nếu mức tăng thực tế chỉ 2 triệu/tháng (24 triệu/năm), cùng chi phí và chiết khấu cho giá trị hiện tại ≈ 330 triệu, NPV ≈ −10 triệu: gần hòa vốn và hơi âm, tức là không còn đáng về mặt tài chính (điểm hòa vốn khoảng 2,06 triệu/tháng). Mọi con số trên đều giả định, dùng để minh họa độ nhạy.',
    'Cần đối chiếu “tăng lương nhờ bằng cấp” với **thiên lệch chọn mẫu**: người học tiếp thường vốn đã có năng lực/động lực cao; so bình quân người có và không có bằng cấp sẽ phóng đại lợi ích.',
  ],
  causalChain: [
    { from: 'Học thêm kỹ năng/bằng cấp', to: 'Năng suất và vị thế thương lượng tăng', mechanism: 'Kỹ năng khan hiếm được thị trường trả cao hơn, hoặc bằng cấp là tín hiệu giúp qua vòng tuyển dụng.' },
    { from: 'Năng suất tăng', to: 'Thu nhập tăng thêm theo năm', mechanism: 'Chênh lệch lương hằng năm là dòng tiền của khoản đầu tư; nó thay đổi theo ngành, vị trí và chu kỳ kinh tế.' },
    { from: 'Thời gian học và chi phí bỏ lỡ', to: 'Khoản đầu tư ban đầu lớn', mechanism: 'Học toàn thời gian làm mất thu nhập hiện tại, nên chi phí thật lớn hơn học phí.' },
    { from: 'Lãi suất chiết khấu cao hoặc thời gian đi làm còn ngắn', to: 'NPV giảm', mechanism: 'Dòng lợi ích xa trong tương lai được đánh giá thấp hơn; học muộn có ít năm thu hồi hơn.' },
  ],
  vietnamImpact: [
    { group: 'Người đi làm cân nhắc học thạc sĩ/chứng chỉ', effect: 'Nên so mức tăng lương có thể kiểm chứng (khảo sát lương, tin tuyển dụng) với chi phí thật, không chỉ học phí.', direction: 'mixed' },
    { group: 'Phụ huynh', effect: 'Lợi ích khác nhau theo ngành; học phí tăng nhưng thu nhập tăng thêm không đồng đều giữa các ngành.', direction: 'mixed' },
    { group: 'Người vay học tập', effect: 'Khoản vay làm tăng chi phí tài chính; hoàn vốn chậm làm rủi ro cao hơn.', direction: 'down' },
    { group: 'Doanh nghiệp', effect: 'Nhân lực kỹ năng cao tăng năng suất nhưng có chi phí tuyển dụng, giữ chân.', direction: 'up' },
  ],
  indicators: [
    { name: 'Thu nhập bình quân theo trình độ chuyên môn/nghề', why: 'Cho thấy chênh lệch lương thực giữa các nhóm, làm mốc kiểm chứng giả định.', where: 'Cục Thống kê (khảo sát lao động việc làm); báo cáo lương uy tín' },
    { name: 'Tỷ lệ có việc làm đúng ngành sau tốt nghiệp', why: 'Bằng cấp không dùng được không tạo ra thu nhập tăng thêm.', where: 'Báo cáo khảo sát việc làm của trường, Bộ Giáo dục và Đào tạo' },
    { name: 'Lãi suất tiền gửi/cho vay (chi phí cơ hội)', why: 'Là cơ sở chọn tỷ lệ chiết khấu hợp lý.', where: 'Ngân hàng Nhà nước' },
  ],
  counterpoints: [
    'Lợi ích không chỉ là lương: an toàn việc làm, mạng lưới quan hệ, lựa chọn nghề và giá trị học vì sở thích không nằm trong NPV.',
    'Tín hiệu bằng cấp có thể mất giá khi nhiều người cùng có (lạm phát bằng cấp); lợi suất giảm dần ở mức cao.',
    'Số liệu bình quân theo trình độ phản ánh cả người giỏi và người kém; kết quả của từng cá nhân phân tán rất rộng. Theo OECD (Education at a Glance 2026, mục A4), trung bình các nước OECD người làm toàn thời gian cả năm có bằng cử nhân hưởng thu nhập cao hơn khoảng 39% và thạc sĩ/tiến sĩ khoảng 80% so với người tốt nghiệp THPT, nhưng chênh lệch này khác nhau theo tuổi, giới, ngành học và nước; đây không phải số liệu của Việt Nam.',
  ],
  glossary: [
    { term: 'Vốn con người', definition: 'Kiến thức, kỹ năng và sức khỏe của một người có khả năng tạo thu nhập.' },
    { term: 'Thu nhập bỏ lỡ', definition: 'Thu nhập mất đi vì chọn học thay vì làm việc.' },
    { term: 'NPV', definition: 'Giá trị hiện tại ròng: tổng dòng tiền tương lai đã chiết khấu trừ chi phí ban đầu.' },
    { term: 'Thời gian hoàn vốn', definition: 'Số năm cần để phần thu nhập tăng thêm cộng dồn bù chi phí ban đầu (chưa chiết khấu).' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'education-roi-career-income-q',
    question: 'Khóa học tốn 80 triệu học phí và người học phải nghỉ làm 1 năm (lương 120 triệu/năm). Chi phí thật gần nhất là bao nhiêu?',
    options: [
      { id: 'a', text: '80 triệu, vì thu nhập bỏ lỡ không phải tiền chi ra.', explain: 'Thu nhập bỏ lỡ là chi phí cơ hội thật; bỏ qua nó làm khoản đầu tư trông đẹp hơn thực tế.' },
      { id: 'b', text: '200 triệu: gồm học phí 80 và thu nhập bỏ lỡ 120.', correct: true, explain: 'Đúng. Chi phí đầu tư gồm cả chi phí cơ hội; so với phần thu nhập tăng thêm mới được kết luận.' },
      { id: 'c', text: '120 triệu, vì học phí được công ty trả.', explain: 'Đề bài không nói công ty trả học phí; nếu có thì chi phí khác đi, nhưng đó là điều kiện khác.' },
    ],
  },
  sources: [
    { title: 'What are the earnings advantages to education? (Education at a Glance 2026, Chapter A4)', publisher: 'OECD', url: 'https://www.oecd.org/en/publications/education-at-a-glance-2026_b4968bbc-en/full-report/what-are-the-earnings-advantages-to-education_61f6b960' },
    { title: 'Human capital', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Human_capital' },
    { title: 'Mincer earnings function', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Mincer_earnings_function' },
    { title: 'Net present value', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Net_present_value' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 106,
}
