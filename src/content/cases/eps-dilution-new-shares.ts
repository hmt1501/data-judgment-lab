import type { CaseStudy } from '../types'

/*
 * Số liệu mock của "Công ty A" (hư cấu), đã kiểm tra khớp nhau:
 *   Lợi nhuận sau thuế: 120 → 138 tỷ đ (+15%) · số cp đầu năm 20 triệu · năm sau phát hành thêm 6 triệu cp từ 1/4 (còn 9/12 năm)
 *   Số cp bình quân gia quyền = 20 + 6 × 9 ÷ 12 = 24,5 triệu (+22,5%) · số cp cuối năm 26 triệu
 *   EPS: 120 tỷ ÷ 20 triệu = 6.000 đ → 138 tỷ ÷ 24,5 triệu = 5.633 đ (−6,1%) · theo cp cuối năm: 138 ÷ 26 = 5.308 đ
 *   1,15 ÷ 1,225 = 0,9388 → EPS −6,1% · để giữ EPS 6.000 cần lợi nhuận 6.000 × 24,5 triệu = 147 tỷ (thiếu 9 tỷ)
 *   Vốn mới thu về: 6 triệu × 25.000 đ = 150 tỷ · vốn chủ 400 → 688 tỷ (400 + 150 + 138, không chia cổ tức)
 *   ROE năm trước 120 ÷ 400 = 30% · năm sau 138 ÷ ((400 + 688) ÷ 2 = 544) = 25,4%
 */
export const epsDilutionNewShares: CaseStudy = {
  id: 'eps-dilution-new-shares',
  title: 'Lợi nhuận tăng 15% nhưng EPS giảm: cổ phiếu phát hành thêm làm loãng',
  domain: 'securities',
  level: 'fresher',
  minutes: 9,
  skills: ['financial-statements', 'metric-decomposition', 'valuation'],
  question: 'Công ty báo lợi nhuận sau thuế tăng 15% nhưng EPS giảm. Chuyện gì xảy ra với tử số và mẫu số của EPS, và cổ đông cũ có thiệt không?',
  summary: 'Phân rã EPS thành lợi nhuận và số cổ phiếu bình quân gia quyền, đọc tác động của việc phát hành thêm và đánh giá pha loãng bằng ROE.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Tiêu đề báo cáo thường niên của **Công ty A**: *"Lợi nhuận sau thuế tăng 15%, đạt 138 tỷ đ."* Nhưng trong bảng chỉ tiêu, **EPS giảm từ 6.000 xuống 5.633 đ**. Một cổ đông nhỏ hỏi bạn: "Công ty làm ăn tốt hơn mà sao lãi mỗi cổ phiếu của tôi giảm?"',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Công ty A và các con số là **giả định**, không phải khuyến nghị đầu tư. Khái niệm EPS, số cổ phiếu bình quân gia quyền và pha loãng là thật (xem IAS 33).',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Lợi nhuận sau thuế', value: '138 tỷ đ', delta: '+15%', tone: 'positive' },
            { label: 'EPS cơ bản', value: '5.633 đ', delta: '−6,1% (năm trước 6.000)', tone: 'negative' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: EPS có tử số và mẫu số',
      blocks: [
        {
          kind: 'formula',
          expression: 'EPS = Lợi nhuận sau thuế thuộc cổ đông ÷ Số cổ phiếu lưu hành bình quân gia quyền',
          note: 'Cổ phiếu phát hành giữa năm chỉ được tính theo thời gian đã tồn tại. Phát hành 6 triệu cp từ 1/4 được tính 6 × 9/12 = 4,5 triệu cp cho cả năm.',
        },
        {
          kind: 'quiz',
          id: 'eps-dilution-new-shares-q1',
          question: 'Lợi nhuận tăng 15% mà số cổ phiếu bình quân tăng 22,5%. EPS thay đổi thế nào?',
          options: [
            { id: 'a', text: 'Tăng, vì lợi nhuận tăng.', explain: 'EPS là một tỷ lệ. Nếu mẫu số tăng nhanh hơn tử số, tỷ lệ giảm.' },
            { id: 'b', text: 'Giảm khoảng 6%, vì 1,15 ÷ 1,225 ≈ 0,94.', correct: true, explain: 'Đúng. Khi mẫu số (số cổ phiếu) tăng nhanh hơn tử số (lợi nhuận), EPS giảm.' },
            { id: 'c', text: 'Không đổi, vì lợi nhuận và số cổ phiếu cùng tăng.', explain: 'Chỉ không đổi khi hai bên tăng cùng tỷ lệ. Ở đây 15% khác 22,5%.' },
          ],
        },
      ],
    },
    {
      id: 'decompose',
      kind: 'analysis',
      title: 'Bước 1 — Phân rã: lợi nhuận và số cổ phiếu',
      blocks: [
        {
          kind: 'table',
          title: 'Hai năm của Công ty A',
          columns: [
            { key: 'item', label: 'Khoản mục' },
            { key: 'y1', label: 'Năm trước', align: 'right' },
            { key: 'y2', label: 'Năm nay', align: 'right' },
            { key: 'chg', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { item: 'Lợi nhuận sau thuế (tỷ đ)', y1: '120', y2: '138', chg: '+15,0%' },
            { item: 'Cổ phiếu cuối kỳ (triệu)', y1: '20,0', y2: '26,0', chg: '+30,0%' },
            { item: 'Cổ phiếu bình quân gia quyền (triệu)', y1: '20,0', y2: '24,5', chg: '+22,5%' },
            { item: 'EPS (đ) theo bình quân gia quyền', y1: '6.000', y2: '5.633', chg: '−6,1%' },
            { item: 'EPS (đ) nếu chia cho cp cuối năm', y1: '6.000', y2: '5.308', chg: '−11,5%' },
          ],
          highlight: [
            { row: 2, tone: 'warning' },
            { row: 3, tone: 'negative' },
          ],
          caption: '138 tỷ ÷ 24,5 triệu = 5.633 đ. Dùng số cổ phiếu cuối kỳ sẽ làm EPS thấp hơn vì tính cả phần chỉ tồn tại 9 tháng như cả năm.',
        },
        {
          kind: 'chart',
          title: 'Lợi nhuận và số cổ phiếu bình quân, năm trước = 100',
          type: 'bar',
          xKey: 'item',
          series: [
            { key: 'y1', label: 'Năm trước' },
            { key: 'y2', label: 'Năm nay' },
          ],
          data: [
            { item: 'Lợi nhuận', y1: 100, y2: 115 },
            { item: 'Cổ phiếu BQ', y1: 100, y2: 122.5 },
            { item: 'EPS', y1: 100, y2: 93.9 },
          ],
          caption: 'Mẫu số (122,5) vượt tử số (115) nên EPS còn 93,9 (−6,1%).',
        },
        {
          kind: 'quiz',
          id: 'eps-dilution-new-shares-q2',
          question: 'Vì sao khi tính EPS người ta dùng số cổ phiếu bình quân gia quyền chứ không phải số cổ phiếu cuối năm?',
          options: [
            { id: 'a', text: 'Vì lợi nhuận cũng được tạo ra dần trong năm; vốn mới chỉ tham gia từ lúc phát hành.', correct: true, explain: 'Đúng. Cổ phiếu mới chỉ góp vốn từ ngày phát hành, nên chỉ được tính theo thời gian đó để khớp với lợi nhuận cả năm.' },
            { id: 'b', text: 'Vì quy định bắt buộc tính cho đẹp báo cáo.', explain: 'Có chuẩn mực quy định, nhưng lý do là bản chất: ghép đúng tử số (cả năm) với mẫu số (thời gian tồn tại thực).' },
            { id: 'c', text: 'Vì số cổ phiếu cuối năm luôn khó thu thập.', explain: 'Số cổ phiếu cuối năm dễ lấy; vấn đề là nó không khớp về thời gian với lợi nhuận.' },
          ],
        },
      ],
    },
    {
      id: 'judge',
      kind: 'analysis',
      title: 'Bước 2 — Pha loãng có xấu không',
      blocks: [
        {
          kind: 'text',
          md: 'Công ty thu về 6 triệu × 25.000 đ = **150 tỷ đ** vốn mới. Pha loãng EPS chỉ xấu khi vốn mới **không sinh đủ lợi nhuận**. Để giữ EPS ở 6.000 đ với 24,5 triệu cổ phiếu, công ty cần lợi nhuận 6.000 × 24,5 triệu = **147 tỷ đ**, tức thiếu 9 tỷ so với thực tế 138 tỷ. Có thể vốn mới chưa kịp phát huy trong năm đầu.',
        },
        {
          kind: 'table',
          title: 'Hiệu quả sử dụng vốn chủ',
          columns: [
            { key: 'item', label: 'Chỉ số' },
            { key: 'y1', label: 'Năm trước', align: 'right' },
            { key: 'y2', label: 'Năm nay', align: 'right' },
          ],
          rows: [
            { item: 'Vốn chủ sở hữu cuối kỳ (tỷ đ)', y1: '400', y2: '688' },
            { item: 'ROE (lợi nhuận ÷ vốn chủ bình quân)', y1: '30,0%', y2: '25,4%' },
          ],
          caption: 'Vốn chủ tăng 400 + 150 (phát hành) + 138 (lợi nhuận giữ lại) = 688. ROE năm nay = 138 ÷ 544 = 25,4%. Cần thêm một đến hai năm để biết vốn mới có sinh lời tương đương không.',
        },
        {
          kind: 'quiz',
          id: 'eps-dilution-new-shares-q3',
          question: 'Cách đánh giá hợp lý nhất về đợt phát hành này là gì?',
          options: [
            { id: 'a', text: 'Xấu, vì EPS giảm.', explain: 'EPS giảm là hệ quả tức thời. Cần xem vốn mới dùng vào đâu và có sinh lời hơn mức hiện tại không.' },
            { id: 'b', text: 'Chưa kết luận: so sánh lợi nhuận tăng thêm từ vốn mới với mức cần để giữ EPS, và theo dõi ROE nhiều năm.', correct: true, explain: 'Đúng. Pha loãng là chi phí ngắn hạn; giá trị phụ thuộc vào việc vốn mới được dùng hiệu quả hơn hay kém hơn.' },
            { id: 'c', text: 'Tốt, vì lợi nhuận tăng 15%.', explain: 'Lợi nhuận tổng tăng chưa đủ; cổ đông cũ quan tâm phần lãi trên mỗi cổ phiếu và hiệu quả vốn.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: cách đọc EPS khi có phát hành',
      blocks: [
        {
          kind: 'text',
          md: '**Trả lời cổ đông:** "Lợi nhuận tăng 15% nhưng số cổ phiếu bình quân tăng 22,5% do phát hành thêm, nên EPS giảm 6,1%. Công ty vừa huy động 150 tỷ; cần theo dõi xem vốn này tạo thêm bao nhiêu lợi nhuận trong các năm tới."',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Luôn phân rã EPS thành lợi nhuận và số cổ phiếu bình quân', owner: 'Analyst', metric: 'Tăng trưởng lợi nhuận so với tăng trưởng số cổ phiếu', threshold: 'Cảnh báo khi mẫu số tăng nhanh hơn tử số' },
            { action: 'Theo dõi mục đích sử dụng vốn phát hành và lợi nhuận tăng thêm từ vốn đó', owner: 'Analyst', metric: 'Lợi nhuận tăng thêm ÷ vốn mới huy động', threshold: 'Cao hơn chi phí vốn của công ty' },
            { action: 'So sánh EPS qua nhiều năm sau điều chỉnh các lần chia tách hoặc cổ phiếu thưởng', owner: 'Analyst dữ liệu', metric: 'EPS điều chỉnh', threshold: 'Cùng số cổ phiếu quy đổi' },
          ],
        },
      ],
    },
    {
      id: 'pitfalls',
      kind: 'pitfalls',
      title: 'Bẫy thường gặp',
      blocks: [
        {
          kind: 'pitfalls',
          items: [
            { title: 'Chỉ nhìn lợi nhuận tổng', why: 'Lợi nhuận tăng không bảo đảm lãi trên mỗi cổ phiếu tăng khi số cổ phiếu tăng nhanh hơn.', instead: 'Đọc EPS và tăng trưởng EPS.' },
            { title: 'Chia cho số cổ phiếu cuối kỳ', why: 'Tính cả phần chỉ tồn tại một phần năm như cả năm; không khớp thời gian với lợi nhuận.', instead: 'Dùng số cổ phiếu bình quân gia quyền.' },
            { title: 'Kết luận pha loãng là xấu hoặc tốt ngay', why: 'Giá trị phụ thuộc vào hiệu quả sử dụng vốn mới, chưa thấy được trong một năm.', instead: 'Theo dõi lợi nhuận tăng thêm và ROE nhiều năm.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'EPS = lợi nhuận ÷ số cổ phiếu bình quân gia quyền; mẫu số tăng nhanh hơn tử số thì EPS giảm.',
    'Cổ phiếu phát hành giữa năm chỉ được tính theo thời gian tồn tại trong năm.',
    'Pha loãng là chi phí ngắn hạn; đánh giá bằng hiệu quả vốn mới (ROE, lợi nhuận tăng thêm), không bằng EPS một năm.',
  ],
  references: [
    { title: 'IAS 33 Earnings per Share', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-33-earnings-per-share/', note: 'Chuẩn mực quốc tế quy định cách tính EPS cơ bản và pha loãng, gồm số cổ phiếu bình quân gia quyền.' },
    { title: 'Earnings per share', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Earnings_per_share', note: 'Tóm tắt công thức EPS và các biến thể.' },
    { title: 'Stock dilution', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Stock_dilution', note: 'Giải thích hiện tượng pha loãng khi phát hành thêm cổ phiếu.' },
  ],
}
