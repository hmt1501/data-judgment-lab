import type { CaseStudy } from '../types'

/*
 * Chiến lược, danh mục và số liệu hoàn toàn giả định (không phải khuyến nghị đầu tư).
 * Chiến lược: mỗi tháng mua 10 mã có lợi suất 3 tháng cao nhất trong 100 mã, giữ 1 tháng. Backtest 5 năm.
 *   Backtest gốc: 14,2%/năm vs chỉ số 8,0% → vượt +6,2.
 *   Điều chỉnh: bỏ thiên lệch sống sót −3,1 → 11,1 ; trừ phí giao dịch (vòng quay 80%/tháng × 0,25% × 12 = 2,4) → 8,7 ; vượt chỉ số +0,7.
 *   Trong mẫu (năm 1–3) vượt +8,2/năm ; ngoài mẫu (năm 4–5) +3,2/năm → (3×8,2 + 2×3,2)/5 = 6,2 ✓ (xấp xỉ)
 *   Chọn lookback tốt nhất trong mẫu (vượt chỉ số, %/năm): 1T 3,0 ; 3T 8,2 ; 6T 5,1 ; 12T 2,4 (TB 4,675) ; ngoài mẫu: 1,2 ; 3,2 ; 2,7 ; 1,9 (TB 2,25)
 */
export const momentumStrategyBacktestBias: CaseStudy = {
  id: 'momentum-strategy-backtest-bias',
  title: '"Mua mã tăng mạnh 3 tháng": backtest đẹp có đáng tin không?',
  domain: 'securities',
  level: 'junior',
  minutes: 12,
  skills: ['portfolio-risk', 'data-quality', 'causal'],
  question:
    'Một backtest cho thấy chiến lược "mỗi tháng mua 10 mã tăng mạnh nhất 3 tháng" vượt chỉ số 6,2 điểm % mỗi năm. Lợi thế này có thật, hay đến từ thiên lệch dữ liệu, phí giao dịch và việc chọn tham số?',
  summary:
    'Đọc một backtest đơn giản: thiên lệch sống sót, phí giao dịch, chọn tham số trong mẫu, và kiểm tra ngoài mẫu — biến một con số đẹp thành giả thuyết có thể bác bỏ.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Đồng nghiệp gửi bảng kết quả: mỗi tháng xếp hạng 100 mã theo lợi suất 3 tháng, mua 10 mã đầu, giữ 1 tháng rồi lặp lại. Trong 5 năm giả định, chiến lược đạt **14,2%/năm** so với chỉ số **8,0%/năm**. Bạn cần trả lời: *"Có nên triển khai không?"* Bài này chỉ học cách đọc backtest, không phải khuyến nghị đầu tư.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Mọi số liệu đều **giả định, mô phỏng**. Kết quả quá khứ không bảo đảm kết quả tương lai.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Chiến lược (backtest gốc)', value: '14,2%/năm' },
            { label: 'Chỉ số', value: '8,0%/năm' },
            { label: 'Vượt trội', value: '+6,2 điểm %', tone: 'positive' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: ba cách một backtest nói quá',
      blocks: [
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Dữ liệu**: tập mã có chứa mã đã hủy niêm yết/phá sản không (thiên lệch sống sót)?',
            '**Chi phí**: đã trừ phí giao dịch và trượt giá theo vòng quay danh mục chưa?',
            '**Tham số**: tham số (3 tháng) được chọn từ chính dữ liệu dùng để đánh giá không? Kiểm tra ngoài mẫu.',
          ],
        },
        {
          kind: 'quiz',
          id: 'momentum-q1',
          question: 'Backtest dùng danh sách 100 mã đang niêm yết hôm nay cho cả 5 năm quá khứ. Điều này có nguy cơ gì?',
          options: [
            { id: 'a', text: 'Bỏ sót mã đã hủy niêm yết hoặc kém trong quá khứ, nên chiến lược trông tốt hơn thực tế.', correct: true, explain: 'Đúng. Đó là thiên lệch sống sót: chỉ còn những mã "sống đến hôm nay", thường là mã đã làm tốt.' },
            { id: 'b', text: 'Không có vấn đề vì danh sách mới hơn thì chính xác hơn.', explain: 'Danh sách hiện tại lọc theo kết quả tương lai nên làm sai lệch quá khứ.' },
            { id: 'c', text: 'Chỉ làm backtest chạy chậm hơn.', explain: 'Vấn đề là sai lệch kết quả, không phải tốc độ.' },
          ],
        },
      ],
    },
    {
      id: 'adjust',
      kind: 'analysis',
      title: 'Bước 1 — Điều chỉnh thiên lệch sống sót và phí giao dịch',
      blocks: [
        {
          kind: 'table',
          title: 'Từ backtest gốc đến ước tính thực tế hơn (%/năm)',
          columns: [
            { key: 'step', label: 'Bước' },
            { key: 'chg', label: 'Điều chỉnh', align: 'right' },
            { key: 'ret', label: 'Lợi suất chiến lược', align: 'right' },
            { key: 'ex', label: 'Vượt chỉ số 8,0', align: 'right' },
          ],
          rows: [
            { step: 'Backtest gốc', chg: '—', ret: '14,2', ex: '+6,2' },
            { step: 'Thêm mã đã hủy niêm yết vào tập mã (bỏ thiên lệch sống sót)', chg: '−3,1', ret: '11,1', ex: '+3,1' },
            { step: 'Trừ phí: vòng quay 80%/tháng × 0,25% × 12 tháng', chg: '−2,4', ret: '8,7', ex: '+0,7' },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: 'Hai điều chỉnh làm lợi thế giảm từ 6,2 còn 0,7 điểm %. Mức vượt 0,7 nhỏ so với sai số ước lượng của một mẫu 5 năm.',
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Phí tỷ lệ với vòng quay',
          md: 'Chiến lược đổi gần như toàn bộ danh mục mỗi tháng nên phí ăn mòn đáng kể. Luôn kèm vòng quay danh mục cạnh lợi suất.',
        },
      ],
    },
    {
      id: 'oos',
      kind: 'analysis',
      title: 'Bước 2 — Chọn tham số và kiểm tra ngoài mẫu',
      blocks: [
        {
          kind: 'text',
          md: 'Con số "3 tháng" không phải ý tưởng có trước. Đồng nghiệp thử 4 độ dài (1, 3, 6, 12 tháng) trên **năm 1–3 (trong mẫu)** và chọn độ dài tốt nhất. Sau đó đánh giá trên **năm 4–5 (ngoài mẫu)** chưa dùng để chọn.',
        },
        {
          kind: 'chart',
          title: 'Mức vượt chỉ số theo độ dài lookback (điểm %/năm, backtest gốc)',
          type: 'bar',
          xKey: 'lookback',
          series: [
            { key: 'inSample', label: 'Trong mẫu (năm 1–3)' },
            { key: 'outSample', label: 'Ngoài mẫu (năm 4–5)' },
          ],
          unit: '',
          data: [
            { lookback: '1 tháng', inSample: 3.0, outSample: 1.2 },
            { lookback: '3 tháng', inSample: 8.2, outSample: 3.2 },
            { lookback: '6 tháng', inSample: 5.1, outSample: 2.7 },
            { lookback: '12 tháng', inSample: 2.4, outSample: 1.9 },
          ],
          caption: 'Lựa chọn tốt nhất trong mẫu (3 tháng, +8,2) giảm còn +3,2 ngoài mẫu. Trung bình 4 lựa chọn: 4,7 trong mẫu và 2,3 ngoài mẫu.',
        },
        {
          kind: 'text',
          md: 'Mức vượt chung 6,2 điểm % thực chất là trung bình của +8,2 (3 năm) và +3,2 (2 năm): (3×8,2 + 2×3,2)/5 ≈ 6,2. Xu hướng giảm ngoài mẫu là dấu hiệu **chọn tham số theo dữ liệu** đã làm phồng kết quả. Nó vẫn dương, nên không thể kết luận chiến lược vô giá trị — chỉ là mức vượt thực nhỏ hơn con số gốc.',
        },
        {
          kind: 'quiz',
          id: 'momentum-q2',
          question: 'Vì sao kết quả của lựa chọn "tốt nhất trong mẫu" thường giảm khi đánh giá ngoài mẫu?',
          options: [
            { id: 'a', text: 'Vì khi thử nhiều tham số và chọn cái cao nhất, ta cũng chọn cả phần may mắn của dữ liệu đó.', correct: true, explain: 'Đúng. Phần may mắn không lặp lại ngoài mẫu nên kết quả hồi về mức thật.' },
            { id: 'b', text: 'Vì ngoài mẫu luôn có thị trường xấu hơn.', explain: 'Không có lý do chung như vậy; sự giảm xảy ra kể cả khi thị trường như nhau.' },
            { id: 'c', text: 'Vì ngoài mẫu ít dữ liệu hơn nên lợi suất thấp hơn.', explain: 'Ít dữ liệu làm sai số lớn hơn, không làm lợi suất thấp hơn theo hệ thống.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: bảng kiểm trước khi tin một backtest',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận trên dữ liệu giả định:** sau khi bỏ thiên lệch sống sót và trừ phí, mức vượt giảm từ +6,2 còn +0,7 điểm %; ngoài mẫu mạnh nhất chỉ còn +3,2 trước các điều chỉnh đó. Chưa đủ cơ sở triển khai; cần kiểm tra thêm với dữ liệu sạch hơn và giai đoạn khác.',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Dựng tập mã theo từng thời điểm (gồm cả mã đã hủy niêm yết) thay vì danh sách hiện tại', owner: 'Data analyst', metric: 'Tỷ lệ mã đã hủy niêm yết có mặt trong dữ liệu', threshold: '100% mã từng niêm yết trong giai đoạn' },
            { action: 'Báo cáo lợi suất sau phí kèm vòng quay danh mục', owner: 'Data analyst', metric: 'Lợi suất sau phí, vòng quay/tháng', threshold: 'Mức vượt sau phí còn > 2 điểm %/năm mới xét tiếp' },
            { action: 'Cố định số tham số thử trước khi chạy và để dành ít nhất 30% thời gian làm ngoài mẫu', owner: 'Trưởng nhóm nghiên cứu', metric: 'Mức vượt ngoài mẫu / trong mẫu', threshold: '≥ 50% mới coi là ổn định' },
          ],
        },
        {
          kind: 'quiz',
          id: 'momentum-q3',
          question: 'Cách nào hợp lý nhất để trả lời "có triển khai không" từ backtest này?',
          options: [
            { id: 'a', text: 'Triển khai ngay vì 14,2% cao hơn chỉ số rõ rệt.', explain: 'Bỏ qua thiên lệch sống sót, phí và chọn tham số.' },
            { id: 'b', text: 'Chưa: chạy lại với dữ liệu không thiên lệch, trừ phí, kiểm tra ngoài mẫu rồi mới xét.', correct: true, explain: 'Đúng. Mỗi điều chỉnh có thể thu nhỏ lợi thế; chỉ khi lợi thế còn lại vẫn rõ mới đáng tiếp.' },
            { id: 'c', text: 'Bác bỏ hoàn toàn vì backtest luôn sai.', explain: 'Backtest vẫn hữu ích nếu làm đúng; vấn đề là cách làm.' },
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
            { title: 'Dùng danh sách mã hiện tại cho quá khứ', why: 'Mã thất bại bị loại, nên kết quả quá lạc quan.', instead: 'Dùng tập mã đúng thời điểm, gồm cả mã đã hủy niêm yết.' },
            { title: 'Bỏ phí giao dịch', why: 'Danh mục đổi nhanh có thể mất phần lớn lợi thế vào phí.', instead: 'Trừ phí theo vòng quay thực tế.' },
            { title: 'Chọn tham số trên chính dữ liệu đánh giá', why: 'Chọn cái tốt nhất trong nhiều lần thử cũng chọn cả may rủi.', instead: 'Chia trong mẫu/ngoài mẫu và báo cáo số lần đã thử.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Backtest chỉ đáng tin khi tập mã đúng thời điểm, đã trừ phí và có kiểm tra ngoài mẫu.',
    'Vòng quay danh mục cao làm phí ăn mòn lợi thế; luôn báo cáo lợi suất sau phí.',
    'Chọn tham số tốt nhất trong nhiều lần thử thường kém đi ngoài mẫu; hãy nhìn mức vượt ngoài mẫu.',
  ],
  references: [
    { title: 'Momentum (finance)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Momentum_(finance)', note: 'Mô tả hiệu ứng momentum và các cách xếp hạng theo lợi suất quá khứ.' },
    { title: 'Survivorship bias', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Survivorship_bias', note: 'Giải thích thiên lệch sống sót, trong đó có ví dụ ở quỹ đầu tư.' },
    { title: 'Backtesting', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Backtesting', note: 'Tổng quan backtest và các rủi ro khi đánh giá chiến lược bằng dữ liệu quá khứ.' },
  ],
}
