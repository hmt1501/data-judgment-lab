import type { Explainer } from '../../../shared/explainer'

export const elderlyCareCostsPlanning: Explainer = {
  id: 'elderly-care-costs-planning',
  slug: 'elderly-care-costs-planning',
  question: 'Chi phí chăm sóc người cao tuổi đến từ đâu và nên lập kế hoạch tài chính thế nào?',
  title: 'Chi phí chăm sóc người cao tuổi: vì sao lớn và cách lập kế hoạch',
  topic: 'personal-finance',
  tldr: 'Dân số thế giới đang già đi nhanh, và nhu cầu **chăm sóc dài hạn** (hỗ trợ sinh hoạt hằng ngày, y tế) thường kéo dài và khó đoán. Phần lớn việc chăm sóc ở nhiều nước do gia đình đảm nhận không lương, nên chi phí thật gồm cả **tiền và thời gian nghỉ việc**. Kế hoạch tốt tách phần có thể dự báo (nghỉ hưu, y tế định kỳ) khỏi phần rủi ro đuôi (bệnh nặng, mất khả năng tự chăm sóc), và bàn bạc sớm trong gia đình.',
  keyPoints: [
    'Theo Tổ chức Y tế Thế giới (tờ thông tin "Ageing and health", đọc 15/10/2026): năm 2020 có khoảng 1 tỷ người từ 60 tuổi trở lên; dự kiến 1,4 tỷ vào năm 2030 và 2,1 tỷ vào năm 2050; số người từ 80 tuổi trở lên dự kiến tăng gấp ba, lên 426 triệu giai đoạn 2020–2050.',
    '**Chăm sóc dài hạn** là các dịch vụ hỗ trợ người mắc bệnh mạn tính hoặc khuyết tật không thể tự chăm sóc trong thời gian dài, gồm cả nhu cầu y tế và phi y tế (mặc quần áo, ăn uống, tắm rửa). Có thể tại nhà, cộng đồng hoặc cơ sở.',
    'Theo tổng hợp trên Wikipedia (đọc 15/10/2026), chăm sóc không chính thức do gia đình, bạn bè thực hiện ước chiếm khoảng 90% chăm sóc tại nhà, và số liệu OECD thường nằm trong khoảng 80–90%. Đây là số liệu quốc tế tổng hợp, không phải riêng Việt Nam.',
    'Tài trợ chăm sóc dài hạn khác nhau theo nước: bảo hiểm bắt buộc (như Đức), chương trình công, chi tiêu tự chi trả hoặc bảo hiểm tư nhân. Cũng theo trang trên, ở Mỹ năm 2019 chi phí bình quân hằng năm khoảng 102.200 USD cho phòng viện dưỡng lão tư, 48.612 USD cho nhà hỗ trợ sinh hoạt và 52.654 USD cho chăm sóc y tế tại nhà; số liệu cũ và theo bối cảnh Mỹ, chỉ minh họa quy mô.',
    'Với hộ gia đình Việt Nam, nguyên tắc chung: chăm sóc tại nhà hoặc thuê người chăm sóc có chi phí cơ hội lớn (người nhà nghỉ việc), nên cần tính cả thu nhập mất đi, không chỉ tiền viện phí.',
  ],
  causalChain: [
    { from: 'Dân số già đi, tuổi thọ tăng', to: 'Nhu cầu chăm sóc dài hạn tăng', mechanism: 'Số người ở nhóm tuổi cao nhất tăng nhanh, nhóm có khả năng mắc bệnh mạn tính và suy giảm chức năng cao hơn.' },
    { from: 'Nhu cầu chăm sóc tăng', to: 'Áp lực lên gia đình và nguồn lực công', mechanism: 'Phần lớn chăm sóc do gia đình đảm nhận không lương; khi thiếu người nhà hoặc nhu cầu nặng, phải thuê chăm sóc hoặc dùng cơ sở chuyên nghiệp với chi phí đáng kể.' },
    { from: 'Chi phí chăm sóc kéo dài nhiều năm', to: 'Tiền tiết kiệm nghỉ hưu có thể cạn nhanh hơn dự tính', mechanism: 'Chi phí thường bắt đầu muộn nhưng tăng mạnh theo mức phụ thuộc, trong khi thu nhập từ làm việc đã dừng.' },
    { from: 'Người nhà nghỉ việc hoặc giảm giờ để chăm sóc', to: 'Thu nhập hộ và lương hưu tương lai của người chăm sóc giảm', mechanism: 'Đóng góp bảo hiểm và tiết kiệm giảm đi trong thời gian nghỉ, làm tăng rủi ro tài chính ở tuổi già của chính người chăm sóc.' },
    { from: 'Lập kế hoạch sớm (quỹ riêng, bảo hiểm, thỏa thuận gia đình)', to: 'Giảm áp lực quyết định lúc khủng hoảng', mechanism: 'Chuẩn bị quỹ và thống nhất vai trò trước giúp có nhiều lựa chọn hơn so với quyết định gấp khi bệnh nặng xảy ra.' },
  ],
  vietnamImpact: [
    { group: 'Người trung niên đang vừa nuôi con vừa chăm cha mẹ', effect: 'Chịu áp lực hai chiều về thời gian và tiền; nên tách ngân sách cho cha mẹ và cho con thay vì dồn chung.', direction: 'down' },
    { group: 'Người cao tuổi chỉ dựa vào lương hưu hoặc con cái', effect: 'Nguồn thu cố định có thể không bắt kịp chi phí chăm sóc tăng; cần biết quyền lợi bảo hiểm y tế hiện có.', direction: 'down' },
    { group: 'Doanh nghiệp, tổ chức cung cấp dịch vụ chăm sóc', effect: 'Nhu cầu dịch vụ tăng theo già hóa dân số, nhưng chất lượng, giá và khả năng chi trả của người dùng là hạn chế.', direction: 'mixed' },
    { group: 'Người lao động đang tích lũy hưu trí', effect: 'Có thể chủ động tích lũy thêm cho chi phí y tế và chăm sóc ở tuổi già thay vì chỉ trông vào lương hưu.', direction: 'up' },
  ],
  indicators: [
    { name: 'Dân số từ 60 hoặc 65 tuổi trở lên và tỷ lệ phụ thuộc người già', why: 'Cho biết tốc độ già hóa và quy mô nhu cầu chăm sóc.', where: 'Cục Thống kê (nso.gov.vn); Liên Hợp Quốc và WHO cho so sánh quốc tế' },
    { name: 'Mức lương hưu và trợ cấp so với chi tiêu thiết yếu', why: 'Đánh giá phần chi phí chăm sóc mà thu nhập cố định không đủ trang trải.', where: 'Bảo hiểm xã hội Việt Nam; sổ chi tiêu của hộ' },
    { name: 'Chi phí viện phí tự chi trả của hộ', why: 'Phần bảo hiểm y tế không chi trả quyết định nhu cầu quỹ dự phòng.', where: 'Hóa đơn y tế của gia đình; thông tin quyền lợi bảo hiểm y tế' },
    { name: 'Giá dịch vụ chăm sóc tại nhà và cơ sở tại địa phương', why: 'Ước tính chi phí thực tế theo vùng.', where: 'Hỏi trực tiếp các cơ sở và đơn vị cung cấp dịch vụ' },
  ],
  counterpoints: [
    'Số liệu chi phí nêu từ nguồn Mỹ và đã cũ; không dùng trực tiếp làm mức chuẩn cho Việt Nam, nơi cơ cấu chăm sóc, giá dịch vụ và vai trò gia đình khác.',
    'Không phải ai già cũng cần chăm sóc dài hạn tốn kém: nhiều người giữ được sức khỏe lâu hơn; lập kế hoạch là chuẩn bị cho rủi ro chứ không phải dự báo mọi người sẽ phải chi lớn.',
    'Bảo hiểm chăm sóc dài hạn có thể không phù hợp với mọi hộ, vì phí cao, điều khoản chi trả khác nhau; cần đọc kỹ quyền lợi và loại trừ trước khi mua.',
  ],
  glossary: [
    { term: 'Chăm sóc dài hạn', definition: 'Dịch vụ hỗ trợ sinh hoạt và y tế cho người không thể tự chăm sóc trong thời gian dài.' },
    { term: 'Chăm sóc không chính thức', definition: 'Chăm sóc không lương do người nhà, bạn bè hoặc tình nguyện viên đảm nhận.' },
    { term: 'Già hóa dân số', definition: 'Tỷ trọng người cao tuổi trong dân số tăng lên theo thời gian.' },
    { term: 'Chi phí cơ hội', definition: 'Thu nhập hoặc cơ hội bị bỏ lỡ khi dành thời gian chăm sóc thay vì đi làm.' },
    { term: 'Rủi ro đuôi', definition: 'Sự kiện ít xảy ra nhưng nếu xảy ra thì thiệt hại tài chính rất lớn.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'elderly-care-costs-planning-q',
    question: 'Một gia đình tính chi phí chăm sóc cha mẹ chỉ bằng tiền viện phí trực tiếp. Điều gì thường bị bỏ sót?',
    options: [
      { id: 'a', text: 'Không bỏ sót gì vì viện phí là toàn bộ chi phí.', explain: 'Chăm sóc dài hạn còn gồm hỗ trợ sinh hoạt hằng ngày, thuê người chăm sóc và thời gian người nhà nghỉ làm.' },
      { id: 'b', text: 'Chi phí cơ hội của người nhà nghỉ hoặc giảm giờ làm, cùng chi phí hỗ trợ sinh hoạt phi y tế.', correct: true, explain: 'Đúng. Phần lớn chăm sóc do gia đình đảm nhận không lương, nên thu nhập mất đi và chi phí phi y tế thường lớn nhưng dễ không được tính.' },
      { id: 'c', text: 'Không cần tính vì bảo hiểm y tế chi trả hết.', explain: 'Bảo hiểm y tế không bao phủ mọi nhu cầu chăm sóc, nhất là hỗ trợ sinh hoạt dài hạn; cần kiểm tra quyền lợi cụ thể.' },
    ],
  },
  sources: [
    { title: 'Ageing and health (fact sheet)', publisher: 'World Health Organization', url: 'https://www.who.int/news-room/fact-sheets/detail/ageing-and-health' },
    { title: 'Long-term care', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Long-term_care' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 185,
}
