import type { Explainer } from '../../../shared/explainer'

export const productivityGrowthCapitalVsTfp: Explainer = {
  id: 'productivity-growth-capital-vs-tfp',
  slug: 'productivity-growth-capital-vs-tfp',
  question: 'Tăng trưởng đến từ vốn, lao động hay năng suất nhân tố tổng hợp (TFP)?',
  title: 'Phân rã tăng trưởng: vốn, lao động và TFP',
  topic: 'macro',
  tldr: 'Kế toán tăng trưởng tách tăng trưởng sản lượng thành phần do **tăng vốn**, **tăng lao động** và phần còn lại gọi là **TFP** – năng suất nhân tố tổng hợp. TFP là một **số dư**, nghĩa là mọi sai lệch trong đo vốn và lao động đều dồn vào đó. Phân rã này hữu ích để hỏi tăng trưởng hiện nay có bền không: tăng nhờ chất thêm vốn và lao động có giới hạn, còn tăng nhờ năng suất mới là nền tảng dài hạn.',
  keyPoints: [
    'Theo Wikipedia, TFP là phần tăng trưởng sản lượng mà tăng đầu vào lao động và vốn **không giải thích được**; nó được tính như số dư, không đo trực tiếp.',
    'Dạng hàm Cobb–Douglas thường dùng: Y = A × K^α × L^(1−α) (A là TFP). Với phần tăng nhỏ, tăng trưởng TFP ≈ tăng trưởng sản lượng trừ (tỷ trọng vốn × tăng trưởng vốn) trừ (tỷ trọng lao động × tăng trưởng lao động).',
    'Vì là số dư, TFP chứa cả đổi mới công nghệ, chất lượng quản lý, phân bổ nguồn lực, **lẫn sai số đo**: ví dụ cách đo chất lượng lao động (số năm đi học) làm kết quả thay đổi đáng kể.',
    'Các nhà thống kê chính thức thường dùng tên "năng suất đa nhân tố" vì không phải mọi đầu vào (năng lượng, hạ tầng công, môi trường) đều được đo.',
    'Một bài báo Nhân Dân (07/07/2026) cho biết giới thống kê và chuyên gia Việt Nam nhấn mạnh cần chuyển từ tăng trưởng dựa vào vốn và lao động sang dựa vào năng suất, khoa học công nghệ và đổi mới sáng tạo để lên thu nhập cao.',
  ],
  causalChain: [
    { from: 'Đầu tư tăng, vốn tích lũy nhiều hơn', to: 'Sản lượng tăng nhưng với hiệu suất giảm dần', mechanism: 'Thêm vốn trên cùng một lực lượng lao động và công nghệ cho phần sản lượng thêm ngày càng nhỏ (lợi suất giảm dần).' },
    { from: 'Lao động tăng (dân số, tham gia thị trường lao động)', to: 'Sản lượng tăng nhưng bị giới hạn bởi nhân khẩu', mechanism: 'Khi dân số già hóa, nguồn tăng trưởng từ số lượng lao động mất dần.' },
    { from: 'Công nghệ, tổ chức, quản lý tốt hơn và phân bổ nguồn lực hiệu quả hơn', to: 'TFP tăng', mechanism: 'Cùng lượng vốn và lao động làm ra nhiều sản phẩm hơn; đây là nguồn tăng trưởng không bị hạn chế bởi lợi suất giảm dần.' },
    { from: 'Sai số đo vốn, lao động, chất lượng', to: 'TFP ước lượng thay đổi', mechanism: 'TFP = phần còn lại, nên nếu đo thiếu chất lượng lao động hay vốn vô hình thì phần "không giải thích được" bị phóng đại hoặc thu hẹp.' },
  ],
  vietnamImpact: [
    { group: 'Nhà hoạch định chính sách', effect: 'Mục tiêu tăng trưởng cao dài hạn cần dịch chuyển dần từ vốn/lao động sang năng suất, đòi hỏi đầu tư vào giáo dục, kỹ năng, công nghệ và thể chế.', direction: 'mixed' },
    { group: 'Doanh nghiệp', effect: 'Doanh nghiệp tăng được năng suất (tự động hóa, quản trị, kỹ năng) có lợi thế khi chi phí lao động tăng.', direction: 'up' },
    { group: 'Người lao động', effect: 'Tiền lương thực tăng bền vững chủ yếu đến từ tăng năng suất; nếu chỉ tăng vốn và giờ làm, mức tăng khó duy trì.', direction: 'mixed' },
    { group: 'Nhà đầu tư', effect: 'Các ngành tăng trưởng nhờ năng suất và đổi mới thường có nền tảng bền hơn các ngành tăng chỉ nhờ mở rộng vốn.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tăng trưởng năng suất lao động', why: 'Chỉ số đơn giản nhất cho thấy sản lượng/lao động có tăng không (bao gồm cả hiệu ứng tăng vốn).', where: 'Cục Thống kê (nso.gov.vn), Viện Năng suất Việt Nam' },
    { name: 'Tỷ lệ đầu tư/GDP và đóng góp của vốn', why: 'Cho biết mức tăng trưởng đang dựa vào tích lũy vốn bao nhiêu.', where: 'Cục Thống kê, Penn World Table' },
    { name: 'Đóng góp của TFP vào tăng trưởng GDP', why: 'Phần tăng trưởng không do tăng đầu vào, thường được Cục Thống kê hoặc các tổ chức quốc tế ước lượng.', where: 'Cục Thống kê, Ngân hàng Thế giới, IMF, APO' },
    { name: 'Chi cho nghiên cứu và phát triển (R&D) và đào tạo', why: 'Đầu vào của đổi mới và nâng cao chất lượng lao động.', where: 'UNESCO, Bộ Khoa học và Công nghệ' },
  ],
  counterpoints: [
    'Phân rã phụ thuộc giả định về tỷ trọng vốn/lao động và cách đo; chỉ cần đổi cách đo chất lượng lao động là phần TFP đổi theo.',
    'Phép phân rã bị phê phán qua "tranh luận vốn Cambridge": việc tổng hợp vốn thành một con số có thể gây vấn đề khái niệm, nên một số nhà kinh tế thận trọng khi diễn giải.',
    'Vốn và công nghệ gắn chặt: nhiều công nghệ mới chỉ đến cùng máy móc mới, nên tách "vốn" và "TFP" không phải lúc nào cũng rõ ràng.',
  ],
  glossary: [
    { term: 'TFP', definition: 'Năng suất nhân tố tổng hợp: phần tăng sản lượng không giải thích được bằng tăng vốn và lao động.' },
    { term: 'Kế toán tăng trưởng', definition: 'Phương pháp tách tăng trưởng sản lượng theo đóng góp của vốn, lao động và TFP.' },
    { term: 'Số dư Solow', definition: 'Tên gọi khác của TFP khi tính như phần còn lại sau khi trừ đóng góp của vốn và lao động.' },
    { term: 'Lợi suất giảm dần', definition: 'Thêm một yếu tố đầu vào khi các yếu tố khác không đổi thì sản lượng tăng thêm ngày càng ít.' },
    { term: 'Năng suất đa nhân tố', definition: 'Cách gọi thận trọng hơn của TFP, nhấn mạnh không phải mọi đầu vào đều được đo.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'productivity-growth-capital-vs-tfp-q',
    question: 'Ví dụ giả định: GDP tăng 6%/năm; vốn tăng 8%, lao động tăng 1,5%; tỷ trọng vốn 0,3, lao động 0,7. TFP đóng góp khoảng bao nhiêu điểm phần trăm?',
    options: [
      { id: 'a', text: 'Khoảng 2,55 điểm phần trăm.', correct: true, explain: 'Đúng. Đóng góp của vốn = 0,3 × 8 = 2,4; của lao động = 0,7 × 1,5 = 1,05; TFP = 6 − 2,4 − 1,05 = 2,55.' },
      { id: 'b', text: 'Khoảng 4,5 điểm phần trăm.', explain: 'Sai: đây là 6 − 1,5, bỏ qua trọng số và đóng góp của vốn.' },
      { id: 'c', text: 'Không tính được vì TFP đo trực tiếp bằng khảo sát.', explain: 'Sai. TFP không đo trực tiếp mà được tính như số dư.' },
    ],
  },
  sources: [
    { title: 'Total factor productivity', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Total_factor_productivity' },
    { title: 'Từ thu nhập trung bình cao đến quốc gia phát triển (07/07/2026)', publisher: 'Báo Nhân Dân', url: 'https://nhandan.vn/tu-thu-nhap-trung-binh-cao-den-quoc-gia-phat-trien-post973922.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 163,
}
