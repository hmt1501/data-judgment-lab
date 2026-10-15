import type { Explainer } from '../../../shared/explainer'

export const stockBasedCompensationDilutionCost: Explainer = {
  id: 'stock-based-compensation-dilution-cost',
  slug: 'stock-based-compensation-dilution-cost',
  question: 'Lương bằng cổ phiếu (SBC) có phải chi phí thật không? Pha loãng ảnh hưởng cổ đông thế nào?',
  title: 'Lương bằng cổ phiếu là chi phí thật trả bằng quyền sở hữu: loại nó ra khỏi lợi nhuận là che mất giá phải trả cho nhân sự',
  topic: 'markets-investing',
  tldr: 'Khi công ty trả nhân viên bằng cổ phiếu hoặc quyền chọn, họ giữ được tiền mặt nhưng **chia nhỏ phần sở hữu của cổ đông hiện hữu**. IFRS 2 yêu cầu ghi nhận chi phí này theo giá trị hợp lý của công cụ vốn tại ngày cấp (theo cẩm nang IFRS 2 của KPMG). Nhiều công ty trình bày lợi nhuận “điều chỉnh” bỏ SBC; nhà đầu tư cần xem chi phí đó có thật không và công ty có mua lại cổ phiếu để bù pha loãng (tốn tiền mặt) hay không.',
  keyPoints: [
    '**Chi phí kinh tế:** trả bằng cổ phiếu cũng là trả cho lao động bằng một tài sản có giá trị; nếu công ty phát hành cổ phiếu tiền mặt thu về bằng 0, cổ đông cũ gánh phần pha loãng.',
    'IFRS 2 (Thanh toán trên cơ sở cổ phiếu) yêu cầu ghi nhận chi phí cho giao dịch trả bằng công cụ vốn theo giá trị hợp lý; chi phí được phân bổ trong thời gian nhân viên phải làm việc để được nhận.',
    '**Ví dụ giả định:** công ty có 100 triệu cổ phiếu, phát hành thêm 2 triệu cổ phiếu cho nhân viên mỗi năm. Pha loãng 2%/năm; nếu muốn giữ số cổ phiếu không đổi, công ty phải mua lại 2 triệu cổ phiếu bằng tiền mặt, nên chi phí SBC thực chất chuyển thành chi phí tiền mặt.',
    'Cách đọc đúng: xem lợi nhuận và dòng tiền **sau** SBC; theo dõi số cổ phiếu lưu hành pha loãng theo thời gian; so SBC với doanh thu và với dòng tiền tự do.',
    'Chỉ số “FCF” cộng lại SBC (vì không tốn tiền) làm dòng tiền trông tốt hơn; hãy tự trừ SBC hoặc cộng chi phí mua lại cổ phiếu bù pha loãng để so sánh công bằng.',
  ],
  causalChain: [
    { from: 'Công ty cấp cổ phiếu/quyền chọn cho nhân viên', to: 'Ghi nhận chi phí SBC theo thời gian vesting', mechanism: 'Giá trị hợp lý tại ngày cấp được phân bổ vào chi phí trong kỳ nhân viên phải làm việc.' },
    { from: 'Cổ phiếu mới được phát hành', to: 'Số cổ phiếu lưu hành tăng, pha loãng cổ đông cũ', mechanism: 'Lợi nhuận chia cho nhiều cổ phiếu hơn nên EPS và tỷ lệ sở hữu của mỗi cổ phiếu giảm.' },
    { from: 'Công ty mua lại cổ phiếu để bù pha loãng', to: 'Dòng tiền ra bằng tiền mặt', mechanism: 'Tiền mặt dùng mua cổ phiếu quỹ không còn dành cho cổ tức hay đầu tư, nên chi phí SBC biến thành chi phí tiền mặt.' },
    { from: 'Báo cáo lợi nhuận điều chỉnh bỏ SBC', to: 'Chất lượng lợi nhuận bị thổi phồng', mechanism: 'Chi phí nhân sự thực bị loại, nhà đầu tư thấy biên lợi nhuận cao hơn thực tế.' },
  ],
  vietnamImpact: [
    { group: 'Cổ đông doanh nghiệp niêm yết có chương trình ESOP', effect: 'Phát hành cổ phiếu ESOP với giá ưu đãi gây pha loãng; cần xem số lượng và giá phát hành.', direction: 'down' },
    { group: 'Người lao động', effect: 'Nhận một phần thu nhập bằng cổ phiếu có thể tăng gắn bó nhưng chịu rủi ro giá và hạn chế chuyển nhượng.', direction: 'mixed' },
    { group: 'Doanh nghiệp khởi nghiệp, công nghệ', effect: 'Giữ được tiền mặt khi trả lương, đổi lại chia sẻ quyền sở hữu.', direction: 'mixed' },
    { group: 'Người phân tích dữ liệu', effect: 'Cần chuẩn hóa EPS pha loãng và dòng tiền sau SBC khi so sánh.', direction: 'up' },
  ],
  indicators: [
    { name: 'SBC / Doanh thu và SBC / Dòng tiền hoạt động', why: 'Cho thấy mức độ trả lương bằng cổ phiếu so với quy mô kinh doanh.', where: 'Báo cáo lưu chuyển tiền tệ, thuyết minh về thanh toán cổ phiếu' },
    { name: 'Số cổ phiếu lưu hành pha loãng theo thời gian', why: 'Đo mức pha loãng thực tế qua nhiều năm.', where: 'Báo cáo kết quả kinh doanh (EPS pha loãng), thuyết minh vốn chủ sở hữu' },
    { name: 'Chi mua lại cổ phiếu so với SBC', why: 'Cho biết công ty đang tiêu tiền mặt để bù pha loãng.', where: 'Báo cáo lưu chuyển tiền tệ (hoạt động tài chính)' },
  ],
  counterpoints: [
    'Một số nhà phân tích cho rằng SBC ở giai đoạn đầu tăng trưởng là khoản đầu tư hợp lý vào nhân tài, không nên coi hoàn toàn như chi phí vận hành lặp lại.',
    'Giá trị hợp lý tại ngày cấp có thể khác xa giá trị thực khi cổ phiếu tăng mạnh sau đó; chi phí ghi nhận chỉ là ước tính.',
    'Nếu cổ phiếu đã bị định giá thấp, việc phát hành thêm gây pha loãng lớn hơn so với khi định giá cao.',
  ],
  glossary: [
    { term: 'SBC', definition: 'Chi phí trả công cho nhân viên bằng cổ phiếu hoặc quyền chọn cổ phiếu.' },
    { term: 'Pha loãng', definition: 'Giảm tỷ lệ sở hữu của cổ đông hiện hữu khi phát hành thêm cổ phiếu.' },
    { term: 'Vesting', definition: 'Thời gian hoặc điều kiện để nhân viên thực sự được nhận cổ phiếu/quyền chọn.' },
    { term: 'EPS pha loãng', definition: 'Lợi nhuận mỗi cổ phiếu tính cả các cổ phiếu có thể phát hành thêm từ quyền chọn và công cụ chuyển đổi.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'stock-based-compensation-dilution-cost-q',
    question: 'Một công ty công bố dòng tiền tự do rất tốt nhưng số cổ phiếu lưu hành tăng đều mỗi năm và SBC chiếm tỷ trọng lớn. Điều cần làm?',
    options: [
      { id: 'a', text: 'Tin dòng tiền tự do vì tiền mặt không nói dối.', explain: 'Dòng tiền chưa trừ SBC bỏ qua chi phí trả bằng cổ phiếu và pha loãng.' },
      { id: 'b', text: 'Kiểm tra dòng tiền tự do sau SBC và mức pha loãng thực tế qua các năm.', correct: true, explain: 'Đúng. Trừ SBC (hoặc tính chi mua lại bù pha loãng) cho bức tranh sát chi phí thật hơn.' },
      { id: 'c', text: 'Bỏ qua SBC vì không phải tiền.', explain: 'Không tốn tiền mặt nhưng cổ đông gánh chi phí qua pha loãng.' },
    ],
  },
  sources: [
    { title: 'IFRS 2 Share-based Payment', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-2-share-based-payment/' },
    { title: 'Share-based payments: IFRS 2 handbook (October 2023)', publisher: 'KPMG', url: 'https://assets.kpmg.com/content/dam/kpmgsites/xx/pdf/ifrg/2024/isg-handbook-share-based-payments.pdf' },
    { title: 'Employee stock option', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Stock-based_compensation' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 116,
}
