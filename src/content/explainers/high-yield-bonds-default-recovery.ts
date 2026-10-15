import type { Explainer } from '../../../shared/explainer'

export const highYieldBondsDefaultRecovery: Explainer = {
  id: 'high-yield-bonds-default-recovery',
  slug: 'high-yield-bonds-default-recovery',
  question: 'Trái phiếu lợi suất cao có tỷ lệ vỡ nợ và thu hồi ra sao, lợi suất bù cho rủi ro đến đâu?',
  title: 'Trái phiếu lợi suất cao: vỡ nợ, thu hồi và chênh lệch lợi suất',
  topic: 'markets-investing',
  tldr: 'Trái phiếu lợi suất cao (high-yield, "junk") là trái phiếu xếp hạng dưới mức đầu tư; lợi suất cao hơn trái phiếu an toàn là để bù **rủi ro vỡ nợ**. Tổn thất kỳ vọng xấp xỉ **xác suất vỡ nợ × (1 − tỷ lệ thu hồi)**; vì vỡ nợ tăng đúng lúc kinh tế xấu và tỷ lệ thu hồi cũng thường giảm cùng lúc, tổn thất không trải đều. Chênh lệch lợi suất (spread) cho thấy thị trường đang đòi bù bao nhiêu.',
  keyPoints: [
    'Wikipedia: trái phiếu lợi suất cao là trái phiếu xếp hạng dưới mức đầu tư; rủi ro chính là phát hành không trả được lãi hoặc gốc đúng hạn nên nhà đầu tư đòi lợi suất cao hơn. Tỷ lệ vỡ nợ của phân khúc này ở Mỹ có mức bình quân dài hạn khoảng 5%, và gần 9% trong đại dịch COVID-19 (theo Wikipedia).',
    'Công thức tổn thất kỳ vọng hằng năm ≈ xác suất vỡ nợ × (1 − thu hồi). Ví dụ giả định: vỡ nợ 5%/năm, thu hồi 40% → tổn thất kỳ vọng 5% × 60% = 3%/năm; nếu spread chỉ 3,5% thì phần bù ròng rất mỏng.',
    'Chênh lệch lợi suất (OAS) của chỉ số trái phiếu lợi suất cao ICE BofA Mỹ là 3,16% ngày 13/10/2026 (FRED, cập nhật 14/10/2026) – chỉ số gồm trái phiếu đô la phát hành tại Mỹ xếp hạng BB hoặc thấp hơn, tính so với đường lợi suất kho bạc.',
    'Vỡ nợ và tỷ lệ thu hồi thường đi ngược chiều: khi kinh tế suy yếu vỡ nợ tăng và giá trị thu hồi giảm, nên rủi ro dồn vào đúng lúc nhà đầu tư khó chịu nhất. Bài này không nêu số thu hồi cụ thể vì tỷ lệ này thay đổi mạnh theo chu kỳ, thứ tự ưu tiên và từng thương vụ.',
    'Trái phiếu lợi suất cao nhạy với chu kỳ như cổ phiếu hơn là trái phiếu chính phủ: giá giảm mạnh khi tâm lý rủi ro xấu đi và spread mở rộng.',
  ],
  causalChain: [
    { from: 'Doanh nghiệp có đòn bẩy cao, dòng tiền mỏng', to: 'Được xếp hạng dưới mức đầu tư và phải trả lãi cao', mechanism: 'Người cho vay đòi bù cho khả năng không được trả nợ, nên lãi suất phát hành cao hơn.' },
    { from: 'Kinh tế suy yếu hoặc lãi suất tăng', to: 'Vỡ nợ tăng', mechanism: 'Doanh thu giảm trong khi chi phí lãi và đảo nợ tăng, một phần doanh nghiệp mất khả năng thanh toán.' },
    { from: 'Doanh nghiệp vỡ nợ', to: 'Nhà đầu tư thu hồi một phần giá trị', mechanism: 'Tỷ lệ thu hồi phụ thuộc thứ tự ưu tiên (có đảm bảo hay không), tài sản còn lại và điều kiện thị trường lúc xử lý.' },
    { from: 'Tâm lý rủi ro xấu đi', to: 'Chênh lệch lợi suất mở rộng, giá trái phiếu giảm', mechanism: 'Nhà đầu tư đòi phần bù cao hơn nên giá hiện tại giảm cả khi chưa có vỡ nợ.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư trái phiếu doanh nghiệp tại Việt Nam', effect: 'Lãi suất cao của trái phiếu doanh nghiệp rủi ro cần đọc như phần bù cho rủi ro vỡ nợ; không có xếp hạng độc lập đầy đủ thì càng cần phân tích dòng tiền và tài sản bảo đảm.', direction: 'mixed' },
    { group: 'Doanh nghiệp phát hành trái phiếu', effect: 'Khi tâm lý rủi ro xấu đi, chi phí vốn tăng và khó đảo nợ.', direction: 'down' },
    { group: 'Quỹ đầu tư thu nhập cố định', effect: 'Cần đa dạng hóa theo ngành và theo thứ tự ưu tiên; tập trung vào vài doanh nghiệp làm tổn thất vỡ nợ lớn.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Chênh lệch lợi suất trái phiếu lợi suất cao (OAS)', why: 'Cho biết thị trường đang đòi bù rủi ro đến đâu.', where: 'FRED (St. Louis Fed), ICE Data Indices' },
    { name: 'Tỷ lệ vỡ nợ trượt 12 tháng', why: 'Chỉ báo chu kỳ tín dụng.', where: 'Báo cáo của các tổ chức xếp hạng (Moody\'s, S&P, Fitch)' },
    { name: 'Tỷ lệ thu hồi theo thứ tự ưu tiên', why: 'Quyết định tổn thất thực khi vỡ nợ.', where: 'Nghiên cứu của tổ chức xếp hạng' },
    { name: 'Khả năng trả lãi, đòn bẩy và lịch đáo hạn nợ của doanh nghiệp', why: 'Các tín hiệu sớm hơn vỡ nợ.', where: 'Báo cáo tài chính doanh nghiệp' },
  ],
  counterpoints: [
    'Spread hẹp không có nghĩa rủi ro thấp; nó có thể phản ánh thanh khoản dồi dào và tâm lý lạc quan, và có thể mở rộng nhanh.',
    'Tỷ lệ vỡ nợ bình quân dài hạn che khuất biến động lớn theo chu kỳ; một khoảng 5% không phản ánh năm xấu.',
    'Thị trường Mỹ khác thị trường trái phiếu doanh nghiệp Việt Nam về xếp hạng, thanh khoản, pháp lý và dữ liệu lịch sử; con số của Mỹ chỉ để minh họa cơ chế.',
  ],
  glossary: [
    { term: 'Trái phiếu lợi suất cao', definition: 'Trái phiếu xếp hạng dưới mức đầu tư, trả lãi cao để bù rủi ro.' },
    { term: 'Tỷ lệ thu hồi', definition: 'Phần giá trị nhà đầu tư lấy lại được sau khi vỡ nợ.' },
    { term: 'OAS', definition: 'Chênh lệch lợi suất điều chỉnh quyền chọn so với đường lợi suất trái phiếu chính phủ.' },
    { term: 'Tổn thất kỳ vọng', definition: 'Xác suất vỡ nợ nhân với phần mất mát khi vỡ nợ.' },
    { term: 'Dưới mức đầu tư', definition: 'Xếp hạng tín nhiệm thấp hơn ngưỡng được coi là an toàn.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'high-yield-bonds-default-recovery-q',
    question: 'Ví dụ giả định: trái phiếu có spread 4%, xác suất vỡ nợ 6%/năm, thu hồi 50%. Tổn thất kỳ vọng và kết luận nào đúng?',
    options: [
      { id: 'a', text: 'Tổn thất kỳ vọng 3%/năm, spread 4% còn dư khoảng 1% bù cho các rủi ro khác.', correct: true, explain: 'Đúng. 6% × (1 − 50%) = 3%; spread 4% trừ 3% còn 1% để bù thanh khoản và rủi ro biến động.' },
      { id: 'b', text: 'Tổn thất kỳ vọng 6%/năm nên không đáng mua.', explain: 'Sai. Phải nhân với phần mất mát sau khi thu hồi.' },
      { id: 'c', text: 'Không có tổn thất vì spread dương.', explain: 'Sai. Spread chỉ là phần bù; tổn thất phụ thuộc vỡ nợ và thu hồi.' },
    ],
  },
  sources: [
    { title: 'High-yield debt', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/High-yield_debt' },
    { title: 'ICE BofA US High Yield Index Option-Adjusted Spread (BAMLH0A0HYM2)', publisher: 'FRED, Federal Reserve Bank of St. Louis', url: 'https://fred.stlouisfed.org/series/BAMLH0A0HYM2' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 173,
}
