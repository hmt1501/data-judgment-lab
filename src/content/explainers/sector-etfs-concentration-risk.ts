import type { Explainer } from '../../../shared/explainer'

export const sectorEtfsConcentrationRisk: Explainer = {
  id: 'sector-etfs-concentration-risk',
  slug: 'sector-etfs-concentration-risk',
  question: 'ETF ngành và ETF chủ đề có thật sự đa dạng hóa không, rủi ro tập trung nằm ở đâu?',
  title: 'ETF ngành/chủ đề và rủi ro tập trung',
  topic: 'markets-investing',
  tldr: 'ETF ngành/chủ đề gom nhiều cổ phiếu nên nhìn như đã đa dạng hóa, nhưng thực tế thường **ít cổ phiếu hơn quỹ thị trường rộng**, **vài mã chiếm tỷ trọng lớn** và có thể **trùng với những gì bạn đã sở hữu**. Câu hỏi đúng không phải "quỹ có bao nhiêu mã" mà là "tỷ trọng top 10, ngành và quốc gia ra sao, và tôi đang cộng gộp rủi ro nào".',
  keyPoints: [
    'Theo bài của ASX (7/10/2026): ETF chủ đề có thể nắm ít công ty hơn nhiều quỹ chỉ số thị trường rộng, làm tăng rủi ro; "một công ty hoặc một nhóm nhỏ công ty có thể chi phối ETF bằng tỷ trọng".',
    'Cùng bài: giữ cổ phiếu riêng lẻ song song ETF chủ đề có thể trùng lặp. Ví dụ ASX nêu nhà đầu tư giữ BHP trực tiếp và cả ETF đồng với tỷ trọng BHP cao có thể "vô tình" có quá nhiều tỷ trọng BHP.',
    'Nhiều ETF chủ đề trong các ngành liên quan có thể cùng nắm các công ty như nhau (như cổ phiếu công nghệ trong các quỹ AI và công nghệ), nên mua nhiều quỹ không bằng đa dạng hóa nhiều.',
    'ASX gợi ý xem bản tóm tắt quỹ để biết top 10 cổ phiếu, phân bổ theo ngành và quốc gia; bài liệt kê sáu loại rủi ro gồm thời điểm, định giá, danh mục, tập trung, trùng lặp và tiền tệ, và nêu rõ không phải khuyến nghị đầu tư.',
    'Rủi ro ETF còn gồm sai số bám sát, rủi ro đối tác với ETF dùng phái sinh và đòn bẩy (nội dung Wikipedia); phí và thanh khoản của quỹ nhỏ cũng đáng cân nhắc.',
  ],
  causalChain: [
    { from: 'Quỹ chỉ nắm một ngành hoặc chủ đề hẹp', to: 'Danh mục tập trung vào số ít cổ phiếu', mechanism: 'Phạm vi chủ đề giới hạn số doanh nghiệp đủ điều kiện; vài công ty lớn chi phối nếu quỹ gán trọng số theo vốn hóa.' },
    { from: 'Tập trung vào một ngành hoặc vài cổ phiếu', to: 'Biến động lớn hơn quỹ thị trường rộng', mechanism: 'Một cú sốc ngành (chính sách, giá hàng hóa, chu kỳ công nghệ) tác động đồng thời lên hầu hết cổ phiếu trong quỹ.' },
    { from: 'Nhà đầu tư giữ nhiều quỹ và cổ phiếu đơn lẻ', to: 'Tỷ trọng cộng gộp vượt dự tính', mechanism: 'Cùng một cổ phiếu xuất hiện ở nhiều quỹ nên tổng tỷ trọng thực lớn hơn từng quỹ riêng lẻ.' },
    { from: 'Chủ đề thành mốt, dòng tiền đổ vào', to: 'Định giá cao và rủi ro đảo chiều', mechanism: 'Dòng tiền kéo giá cổ phiếu trong quỹ lên; nếu kỳ vọng không đạt hoặc dòng tiền rút, giá có thể giảm mạnh cùng lúc (suy luận cơ chế, bài đã đọc nêu rủi ro định giá và thời điểm).' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân tại Việt Nam', effect: 'Thị trường cổ phiếu Việt Nam có vài nhóm ngành chi phối vốn hóa, nên quỹ ngành dễ trùng với danh mục cổ phiếu đang giữ; cần tự kiểm tra tỷ trọng cộng gộp.', direction: 'down' },
    { group: 'Nhà đầu tư dùng ETF nước ngoài', effect: 'Ngoài rủi ro tập trung còn có rủi ro tiền tệ; bài ASX lưu ý phòng ngừa tỷ giá làm tốn chi phí và không loại bỏ rủi ro khác.', direction: 'mixed' },
    { group: 'Nhà đầu tư dài hạn theo chỉ số rộng', effect: 'Quỹ thị trường rộng giúp tránh phần lớn rủi ro tập trung của quỹ ngành.', direction: 'up' },
    { group: 'Công ty quản lý quỹ', effect: 'Sản phẩm chủ đề dễ tiếp thị nhưng phải công bố rõ danh mục, tỷ trọng và rủi ro.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ trọng top 10 cổ phiếu', why: 'Đo mức độ tập trung của quỹ.', where: 'Bản tóm tắt quỹ (fact sheet) của công ty quản lý quỹ' },
    { name: 'Số cổ phiếu và phân bổ theo ngành, quốc gia', why: 'Kiểm tra quỹ có thật sự đa dạng hay không.', where: 'Bản cáo bạch, trang thông tin quỹ' },
    { name: 'Mức trùng lặp giữa các quỹ và cổ phiếu đang giữ', why: 'Tính tỷ trọng cộng gộp.', where: 'Tự tổng hợp từ danh mục quỹ; công cụ so sánh danh mục' },
    { name: 'Phí quản lý và thanh khoản', why: 'Quỹ nhỏ, chủ đề hẹp thường phí cao, thanh khoản thấp.', where: 'Bản cáo bạch, sàn giao dịch' },
  ],
  counterpoints: [
    'Tập trung có chủ ý là hợp lý nếu bạn hiểu rủi ro và chỉ dùng quỹ ngành với tỷ trọng nhỏ trong danh mục (đây là nhận định chung, không phải khuyến nghị).',
    'Quỹ thị trường rộng cũng có thể tập trung vào vài cổ phiếu vốn hóa lớn, nên "quỹ rộng" không đồng nghĩa với "hoàn toàn đa dạng".',
    'Kết quả quá khứ của một chủ đề không dự báo kết quả tương lai; bài này chỉ giải thích cơ chế rủi ro, không đánh giá quỹ cụ thể.',
  ],
  glossary: [
    { term: 'ETF ngành / chủ đề', definition: 'ETF chỉ nắm cổ phiếu của một ngành hoặc xu hướng (như năng lượng sạch, công nghệ).' },
    { term: 'Rủi ro tập trung', definition: 'Rủi ro mất nhiều khi một ngành, công ty hoặc quốc gia lớn trong danh mục suy yếu.' },
    { term: 'Trùng lặp danh mục', definition: 'Nhiều quỹ hoặc cổ phiếu cùng chứa một tài sản, làm tỷ trọng thực lớn hơn dự tính.' },
    { term: 'Fact sheet', definition: 'Bản tóm tắt ngắn của quỹ: danh mục lớn nhất, phí, phân bổ.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'sector-etfs-concentration-risk-q',
    question: 'Ví dụ giả định: bạn giữ trực tiếp 10% danh mục vào cổ phiếu A, và mua thêm một ETF chủ đề trong đó cổ phiếu A chiếm 20% quỹ, ETF chiếm 15% danh mục. Tỷ trọng thực vào A là bao nhiêu?',
    options: [
      { id: 'a', text: '10%, vì ETF đã đa dạng hóa.', explain: 'Tỷ trọng bên trong ETF cũng tính vào tổng phơi nhiễm.' },
      { id: 'b', text: '13%: 10% + 20% × 15%.', correct: true, explain: 'Đúng: 10% + 3% = 13%. Nhìn riêng từng khoản sẽ đánh giá thấp mức tập trung.' },
      { id: 'c', text: '30%, vì 10% + 20%.', explain: 'Phải nhân tỷ trọng của A trong quỹ (20%) với tỷ trọng quỹ trong danh mục (15%), không cộng thẳng.' },
    ],
  },
  sources: [
    { title: "'Megatrend' investing and thematic ETFs (Investor Update, 7/10/2026)", publisher: 'ASX (Australian Securities Exchange)', url: 'https://www.asx.com.au/blog/investor-update/2026/megatrend-investing-and-thematic-etfs' },
    { title: 'Exchange-traded fund', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Exchange-traded_fund' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 131,
}
