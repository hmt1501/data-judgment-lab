import type { Explainer } from '../../../shared/explainer'

export const stagflationExplained: Explainer = {
  id: 'stagflation-explained',
  slug: 'stagflation-explained',
  question: 'Đình lạm (stagflation) là gì và vì sao khó xử lý?',
  title: 'Đình lạm là lạm phát cao đi cùng tăng trưởng yếu và thất nghiệp, khiến chính sách tiền tệ tiến thoái lưỡng nan',
  topic: 'macro',
  tldr: '**Đình lạm** là tình trạng giá cả tăng nhanh trong khi sản lượng đình trệ và thất nghiệp cao. Khó xử lý vì thuốc chữa lạm phát (thắt chặt tiền tệ) làm tăng trưởng yếu thêm, còn thuốc chữa suy yếu (nới lỏng) lại châm thêm lạm phát. Nguyên nhân điển hình là **cú sốc cung** như năng lượng tăng mạnh kèm kỳ vọng lạm phát mất neo.',
  keyPoints: [
    'Đình lạm xảy ra khi **đường cung** dịch chuyển bất lợi (chi phí năng lượng, nguyên liệu tăng) chứ không phải do cầu quá nóng, nên giá lên nhưng sản lượng giảm.',
    'Đối với ngân hàng trung ương, đây là tình huống đánh đổi: tăng lãi suất kìm lạm phát nhưng làm thất nghiệp tăng; hạ lãi suất đỡ việc làm nhưng đẩy lạm phát và kỳ vọng lạm phát lên.',
    'Giai đoạn thập niên 1970 với các cú sốc dầu mỏ là ví dụ kinh điển; lối thoát cuối cùng thường là thắt chặt tiền tệ kéo dài và chấp nhận suy giảm kinh tế để lấy lại niềm tin giá cả. Theo Federal Reserve History, giá dầu khoảng gấp bốn lần sau cấm vận tháng 10/1973 và gấp ba lần sau cuộc cách mạng Iran 1979; lạm phát Mỹ vượt 12% quanh năm 1974 và gần 14,5% mùa hè 1980 khi thất nghiệp trên 7%; chu kỳ thắt chặt của Volcker đưa thất nghiệp lên gần 11% và lạm phát xuống dưới 5% năm 1982.',
    'Phân biệt với **lạm phát do cầu kéo** (nền kinh tế quá nóng) và **giảm phát** (giá giảm); đình lạm cần cả giá tăng lẫn tăng trưởng, việc làm xấu đi.',
    'Với Việt Nam, rủi ro lớn nhất đến từ giá năng lượng và nguyên liệu nhập khẩu tăng cùng lúc cầu toàn cầu yếu.',
  ],
  causalChain: [
    { from: 'Cú sốc cung (giá dầu, lương thực, gián đoạn chuỗi cung ứng)', to: 'Chi phí sản xuất của doanh nghiệp tăng', mechanism: 'Năng lượng và nguyên liệu là đầu vào của hầu hết ngành; chi phí tăng ép biên lợi nhuận hoặc buộc tăng giá.' },
    { from: 'Chi phí sản xuất tăng', to: 'Giá bán tăng nhưng sản lượng giảm', mechanism: 'Doanh nghiệp thu hẹp sản xuất, cắt giảm việc làm vì lợi nhuận mỏng, trong khi người tiêu dùng vẫn phải trả giá cao hơn.' },
    { from: 'Giá tăng kéo dài', to: 'Kỳ vọng lạm phát tăng và lương đòi tăng theo', mechanism: 'Người lao động đòi tăng lương bù trượt giá, doanh nghiệp lại tăng giá thêm, tạo vòng xoáy lương – giá.' },
    { from: 'Vòng xoáy lương – giá và kỳ vọng mất neo', to: 'Ngân hàng trung ương phải thắt chặt dù kinh tế yếu', mechanism: 'Để lấy lại uy tín và kéo kỳ vọng về mục tiêu, họ nâng lãi suất mạnh, chấp nhận chi phí về tăng trưởng và việc làm.' },
    { from: 'Thắt chặt tiền tệ', to: 'Lạm phát hạ nhưng suy thoái kéo dài', mechanism: 'Cầu giảm làm giá hạ nhiệt, song thất nghiệp tăng; thời gian phục hồi phụ thuộc cú sốc cung có kết thúc không.' },
  ],
  vietnamImpact: [
    { group: 'Hộ gia đình', effect: 'Giá thực phẩm, xăng dầu tăng trong khi việc làm và thu nhập không tăng tương ứng nên sức mua giảm.', direction: 'down' },
    { group: 'Doanh nghiệp sản xuất', effect: 'Chi phí nguyên liệu, năng lượng tăng và đơn hàng yếu cùng lúc làm biên lợi nhuận bị ép hai đầu.', direction: 'down' },
    { group: 'Người vay ngân hàng', effect: 'Nếu mặt bằng lãi suất tăng để chống lạm phát, chi phí vay tăng đúng lúc thu nhập chững lại.', direction: 'down' },
    { group: 'Người nắm tài sản thực (hàng hóa, vàng)', effect: 'Tài sản thực có thể giữ giá tốt hơn tiền gửi khi lãi suất thực âm, nhưng không phải lúc nào cũng vậy.', direction: 'mixed' },
    { group: 'Nhà đầu tư cổ phiếu', effect: 'Lợi nhuận doanh nghiệp bị ép và lãi suất cao kéo định giá giảm; ngành ít phụ thuộc đầu vào nhập khẩu phòng thủ tốt hơn.', direction: 'down' },
  ],
  indicators: [
    { name: 'CPI và lạm phát cơ bản', why: 'Phân biệt cú sốc giá tạm thời với áp lực giá lan rộng.', where: 'Cục Thống kê (nso.gov.vn)' },
    { name: 'Tăng trưởng GDP và PMI sản xuất', why: 'Xác nhận sản lượng đang yếu đi.', where: 'Cục Thống kê, báo cáo PMI hằng tháng' },
    { name: 'Tỷ lệ thất nghiệp và thiếu việc làm', why: 'Một vế của "đình": thị trường lao động xấu đi.', where: 'Cục Thống kê (báo cáo lao động – việc làm hằng quý)' },
    { name: 'Kỳ vọng lạm phát (khảo sát và thị trường)', why: 'Điều kiện chính để cú sốc giá thành vòng xoáy kéo dài.', where: 'Khảo sát của ngân hàng trung ương các nước lớn; Ngân hàng Nhà nước' },
  ],
  counterpoints: [
    'Nhiều lần giá tăng + tăng trưởng chậm chỉ là điều chỉnh tạm thời sau cú sốc, chưa đủ để gọi là đình lạm; thuật ngữ này hay bị dùng quá rộng.',
    'Nền kinh tế hiện đại ít phụ thuộc dầu mỏ hơn thập niên 1970 và ngân hàng trung ương có kỳ vọng neo vững hơn, nên cú sốc cung ít dễ thành vòng xoáy.',
    'Nếu cú sốc cung kết thúc nhanh (chuỗi cung ứng phục hồi, giá năng lượng hạ), nền kinh tế có thể thoát đình lạm mà không cần suy thoái sâu.',
  ],
  glossary: [
    { term: 'Đình lạm (stagflation)', definition: 'Lạm phát cao đồng thời với tăng trưởng thấp hoặc âm và thất nghiệp cao.' },
    { term: 'Cú sốc cung', definition: 'Biến động bất lợi về chi phí hoặc nguồn cung đầu vào làm đường cung dịch trái.' },
    { term: 'Vòng xoáy lương – giá', definition: 'Quá trình giá tăng đòi lương tăng, lương tăng đẩy chi phí và giá tăng tiếp.' },
    { term: 'Kỳ vọng lạm phát', definition: 'Mức lạm phát mà người dân, doanh nghiệp, thị trường tin sẽ xảy ra, ảnh hưởng đến quyết định đặt giá và lương.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'stagflation-explained-q',
    question: 'Giá dầu tăng mạnh, lạm phát lên 6% nhưng thất nghiệp cũng tăng. Ngân hàng trung ương nên cân nhắc điều gì?',
    options: [
      { id: 'a', text: 'Chỉ cần hạ lãi suất để cứu việc làm vì lạm phát do cung, không do cầu.', explain: 'Hạ lãi suất có thể làm kỳ vọng lạm phát tăng và duy trì lạm phát cao, gây hại về lâu dài.' },
      { id: 'b', text: 'Chỉ cần tăng lãi suất mạnh vì lạm phát là ưu tiên duy nhất.', explain: 'Tăng quá mạnh làm tình trạng việc làm xấu đi nhanh; cần cân nhắc mức độ cú sốc và kỳ vọng.' },
      { id: 'c', text: 'Cân bằng giữa mục tiêu giá cả và việc làm, theo dõi kỳ vọng lạm phát để quyết định mức đáp ứng.', correct: true, explain: 'Đúng. Khi kỳ vọng còn neo, có thể "nhìn xuyên" cú sốc tạm thời; nếu kỳ vọng mất neo thì phải thắt chặt dứt khoát.' },
    ],
  },
  sources: [
    { title: 'The Great Inflation', publisher: 'Federal Reserve History (Federal Reserve Board)', url: 'https://www.federalreservehistory.org/essays/great-inflation' },
    { title: 'Stagflation', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Stagflation' },
    { title: 'Why does the Federal Reserve aim for inflation of 2 percent over the longer run?', publisher: 'Federal Reserve Board', url: 'https://www.federalreserve.gov/faqs/economy_14400.htm' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 13,
}
