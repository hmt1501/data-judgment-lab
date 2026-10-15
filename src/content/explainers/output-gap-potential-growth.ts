import type { Explainer } from '../../../shared/explainer'

export const outputGapPotentialGrowth: Explainer = {
  id: 'output-gap-potential-growth',
  slug: 'output-gap-potential-growth',
  question: 'Khoảng cách sản lượng và tăng trưởng tiềm năng là gì, và vì sao khó đo?',
  title: 'Khoảng cách sản lượng cho biết nền kinh tế nóng hay nguội, nhưng nó là số ước lượng, không quan sát được',
  topic: 'macro',
  tldr: '**Tăng trưởng tiềm năng** là tốc độ nền kinh tế có thể tăng bền vững mà không gây áp lực lạm phát; **khoảng cách sản lượng** là chênh lệch giữa GDP thực tế và GDP tiềm năng. Dương nghĩa là nóng (áp lực giá), âm là còn dư năng lực. Vì GDP tiềm năng **không quan sát trực tiếp**, mọi con số về khoảng cách sản lượng đều là ước lượng và kém chắc nhất đúng ở kỳ gần đây.',
  keyPoints: [
    'Theo IMF (Finance & Development, "Back to Basics"): khoảng cách sản lượng là chênh lệch giữa sản lượng thực tế và sản lượng tiềm năng; dương thường báo hiệu quá nóng, âm báo hiệu năng lực dư thừa do cầu yếu.',
    'Sản lượng tiềm năng là mức cao nhất mà nền kinh tế sản xuất được khi vận hành hiệu quả ở công suất đầy đủ; nó không quan sát được nên phải ước lượng.',
    'Ba cách ước lượng thường dùng theo IMF: **bộ lọc thống kê** (như Hodrick–Prescott) tách xu hướng khỏi dao động ngắn hạn, **mô hình hàm sản xuất** (lao động, vốn, năng suất) và **khảo sát doanh nghiệp**.',
    'Điểm yếu: ước lượng xu hướng kém tin cậy nhất ở cuối chuỗi số liệu, đúng nơi nhà hoạch định chính sách quan tâm; cấu trúc kinh tế thay đổi cũng làm ước lượng lệch.',
    'Vì vậy người làm chính sách đối chiếu thêm việc làm, công suất sử dụng, thiếu hụt lao động, lương, tín dụng và lạm phát so với kỳ vọng.',
  ],
  causalChain: [
    { from: 'Cầu tổng thể vượt năng lực sản xuất (khoảng cách dương)', to: 'Áp lực tăng giá và lương', mechanism: 'Doanh nghiệp hết công suất dư và lao động thất nghiệp, tranh nhau nguyên liệu, nhân công nên chi phí và giá tăng.' },
    { from: 'Cầu yếu hơn năng lực (khoảng cách âm)', to: 'Công suất dư, lạm phát nền yếu', mechanism: 'Doanh nghiệp khó tăng giá, thị trường lao động còn dư; chính sách nới lỏng ít gây lạm phát hơn.' },
    { from: 'Ước lượng sản lượng tiềm năng', to: 'Chọn mức nới hay thắt chính sách', mechanism: 'Ngân hàng trung ương và bộ tài chính dùng khoảng cách sản lượng làm một trong các căn cứ cho mức kích thích; ước lượng sai khiến chính sách quá tay.' },
    { from: 'Cú sốc cung và thay đổi cấu trúc (năng suất, lao động, vốn)', to: 'Sản lượng tiềm năng thay đổi', mechanism: 'Suy thoái sâu có thể làm lao động rời thị trường và doanh nghiệp đóng cửa, thu hẹp tiềm năng nên khoảng cách âm thực tế nhỏ hơn mức ước lượng.' },
  ],
  vietnamImpact: [
    { group: 'Người hoạch định chính sách', effect: 'Khi tăng trưởng thực tế vượt tiềm năng ước lượng, rủi ro lạm phát và áp lực tỷ giá tăng; ngược lại còn dư địa nới lỏng. Cần xem nhiều chỉ báo vì ước lượng không chắc.', direction: 'mixed' },
    { group: 'Doanh nghiệp', effect: 'Công suất sử dụng, thiếu lao động ở khu công nghiệp là tín hiệu thực địa về việc nền kinh tế đang nóng hay nguội.', direction: 'mixed' },
    { group: 'Nhà đầu tư', effect: 'Mục tiêu tăng trưởng cao hơn tiềm năng kéo dài có thể đi kèm nới tín dụng và rủi ro lạm phát; xem cùng CPI và tín dụng.', direction: 'mixed' },
    { group: 'Người lao động', effect: 'Khi nền kinh tế nóng, sức ép tăng lương lớn hơn; khi dư công suất, tăng lương chậm hơn.', direction: 'up' },
  ],
  indicators: [
    { name: 'Tăng trưởng GDP so với xu hướng dài hạn', why: 'Là đầu vào chính của mọi ước lượng khoảng cách sản lượng.', where: 'Cục Thống kê (nso.gov.vn); Báo cáo Triển vọng Kinh tế Thế giới của IMF' },
    { name: 'Công suất sử dụng và thiếu hụt lao động', why: 'Bằng chứng trực tiếp về áp lực cầu.', where: 'Khảo sát doanh nghiệp, PMI (S&P Global), điều tra lao động của Cục Thống kê' },
    { name: 'Lạm phát cơ bản và tiền lương', why: 'Nếu khoảng cách dương thật, lạm phát lõi và lương thường tăng.', where: 'Thông cáo CPI của Cục Thống kê' },
  ],
  counterpoints: [
    'Hai cơ quan có thể ước lượng khoảng cách sản lượng của cùng một nước khác dấu; đó là bản chất của số không quan sát được, không phải lỗi hiếm.',
    'Ở nền kinh tế đang phát triển nhanh, tiềm năng thay đổi theo đầu tư, dòng FDI và cải cách; bộ lọc thống kê dựa vào quá khứ có thể bắt kịp chậm.',
    'Lạm phát thấp không luôn có nghĩa khoảng cách âm: giá năng lượng và giá do Nhà nước quản lý cũng chi phối.',
  ],
  glossary: [
    { term: 'GDP tiềm năng', definition: 'Mức sản lượng cao nhất nền kinh tế đạt được khi vận hành hiệu quả ở công suất đầy đủ, không gây lạm phát tăng tốc.' },
    { term: 'Khoảng cách sản lượng', definition: 'Chênh lệch giữa GDP thực tế và GDP tiềm năng, thường tính theo phần trăm GDP tiềm năng.' },
    { term: 'Bộ lọc Hodrick–Prescott', definition: 'Kỹ thuật thống kê tách chuỗi thành xu hướng dài hạn và dao động ngắn hạn.' },
    { term: 'Hàm sản xuất', definition: 'Mô hình liên hệ sản lượng với lao động, vốn và năng suất các yếu tố tổng hợp.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'output-gap-potential-growth-q',
    question: 'GDP thực tế 1.000 và GDP tiềm năng ước lượng 1.020 (ví dụ giả định). Cách đọc nào hợp lý?',
    options: [
      { id: 'a', text: 'Khoảng cách sản lượng khoảng −2%: còn dư năng lực, nhưng con số này chỉ là ước lượng.', correct: true, explain: '(1.000 − 1.020) ÷ 1.020 ≈ −1,96%. Dấu âm cho thấy dư năng lực; vì tiềm năng không quan sát được nên cần đối chiếu việc làm, lạm phát.' },
      { id: 'b', text: 'Khoảng cách +2%: nền kinh tế quá nóng.', explain: 'Sản lượng thực tế nhỏ hơn tiềm năng nên khoảng cách âm.' },
      { id: 'c', text: 'Con số chắc chắn vì GDP là số chính thức.', explain: 'GDP thực tế là số đo, nhưng GDP tiềm năng là ước lượng; sai số nằm ở vế này.' },
    ],
  },
  sources: [
    { title: 'The Output Gap: Veering from Potential', publisher: 'IMF, Finance & Development (Back to Basics)', url: 'https://www.imf.org/external/pubs/ft/fandd/basics/22_output-gap.htm' },
    { title: 'Output gap', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Output_gap' },
    { title: 'Potential output', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Potential_output' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 84,
}
