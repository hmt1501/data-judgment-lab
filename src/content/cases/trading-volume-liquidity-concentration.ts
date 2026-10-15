import type { CaseStudy } from '../types'

/*
 * Số liệu mock của "sàn X" (mã hư cấu), phiên hôm nay so với trung bình 20 phiên trước, đã kiểm tra khớp nhau:
 *   Khối lượng: 300 → 600 triệu cp (×2) · giá trị: 9.900 → 12.090 tỷ đ (+22,1%)
 *   Nhóm 5 mã đầu: khối lượng 75 → 330 triệu cp (25% → 55%) · giá bình quân 12.000 → 8.000 đ · giá trị 900 → 2.640 tỷ (9,1% → 21,8%)
 *   Các mã còn lại: khối lượng 225 → 270 (+20%) · giá bình quân 40.000 → 35.000 đ · giá trị 9.000 → 9.450 tỷ (+5,0%)
 *   Phần tăng thêm: khối lượng +300 (nhóm 5 mã đầu +255 = 85%) · giá trị +2.190 (nhóm 5 mã đầu +1.740 = 79,5%)
 */
export const tradingVolumeLiquidityConcentration: CaseStudy = {
  id: 'trading-volume-liquidity-concentration',
  title: 'Khối lượng giao dịch gấp đôi: thị trường sôi động hay chỉ vài mã nóng?',
  domain: 'securities',
  level: 'fresher',
  minutes: 9,
  skills: ['liquidity', 'metric-decomposition', 'segmentation'],
  question: 'Khối lượng khớp lệnh phiên hôm nay gấp đôi trung bình 20 phiên. Đó là thanh khoản toàn thị trường cải thiện, hay dòng tiền chỉ dồn vào vài mã?',
  summary: 'Tách khối lượng, giá trị giao dịch và độ tập trung của nhóm mã đầu để phân biệt thị trường sôi động thật với thanh khoản hẹp.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bản tin cuối phiên của sàn giả định **sàn X** viết: *"Thanh khoản bùng nổ, khối lượng khớp lệnh đạt 600 triệu cổ phiếu, gấp đôi bình quân 20 phiên."* Bạn là analyst của một công ty chứng khoán và được hỏi: "Có nên nói với khách hàng rằng dòng tiền đang quay lại thị trường không?"',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Sàn X, các nhóm mã và mọi con số trong bài đều là **giả định**, chỉ dùng để học cách đọc. Khái niệm khối lượng, giá trị giao dịch, độ tập trung là thật.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Khối lượng khớp', value: '600 triệu cp', delta: '×2 so với TB 20 phiên', tone: 'positive' },
            { label: 'Giá trị giao dịch', value: '12.090 tỷ đ', delta: '+22,1% so với TB 20 phiên', tone: 'warning' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: khối lượng không phải tiền',
      blocks: [
        {
          kind: 'text',
          md: 'Khối lượng đếm **số cổ phiếu** đổi chủ, còn giá trị giao dịch đếm **số tiền** đã đi qua. Một cổ phiếu 8.000 đ và một cổ phiếu 80.000 đ được đếm như nhau trong khối lượng, nhưng cái sau mang tiền gấp 10 lần. Muốn đọc thanh khoản, hãy nhìn cả hai và thêm một lát cắt: **tiền đang nằm ở đâu**.',
        },
        {
          kind: 'formula',
          expression: 'Giá trị giao dịch = Σ (khối lượng từng mã × giá khớp) · Độ tập trung top N = giá trị (hoặc khối lượng) của N mã đầu ÷ tổng thị trường',
          note: 'Nếu khối lượng tăng nhiều hơn giá trị, thường là nhóm cổ phiếu giá thấp đang chiếm tỷ trọng lớn hơn. Nếu top N chiếm phần lớn phần tăng thêm, thanh khoản đang hẹp.',
        },
        {
          kind: 'quiz',
          id: 'trading-volume-liquidity-concentration-q1',
          question: 'Khối lượng tăng 100% nhưng giá trị giao dịch chỉ tăng 22%. Giải thích hợp lý nhất là gì?',
          options: [
            { id: 'a', text: 'Dữ liệu lỗi, hai chỉ số phải tăng bằng nhau.', explain: 'Hai chỉ số đo hai thứ khác nhau, nên không cần tăng bằng nhau. Chênh lệch này chính là tín hiệu cần giải thích.' },
            {
              id: 'b',
              text: 'Phần khối lượng tăng thêm chủ yếu đến từ các cổ phiếu có giá thấp.',
              correct: true,
              explain: 'Đúng. Giá trị = khối lượng × giá. Khi khối lượng dồn vào mã giá thấp, mỗi cổ phiếu mang ít tiền hơn, nên giá trị tăng chậm hơn khối lượng.',
            },
            { id: 'c', text: 'Chắc chắn là nhà đầu tư nước ngoài đang mua mạnh.', explain: 'Không có dữ liệu nào cho thấy chủ thể mua. Đây là suy diễn vượt quá số liệu.' },
          ],
        },
      ],
    },
    {
      id: 'concentration',
      kind: 'analysis',
      title: 'Bước 1 — Phân rã: khối lượng tăng thêm nằm ở đâu',
      blocks: [
        {
          kind: 'table',
          title: 'Nhóm 5 mã đầu vs các mã còn lại (hôm nay so với TB 20 phiên)',
          columns: [
            { key: 'group', label: 'Nhóm' },
            { key: 'volBase', label: 'KL TB 20 phiên (triệu cp)', align: 'right' },
            { key: 'volNow', label: 'KL hôm nay (triệu cp)', align: 'right' },
            { key: 'priceNow', label: 'Giá BQ hôm nay (đ)', align: 'right' },
            { key: 'valBase', label: 'GT TB (tỷ đ)', align: 'right' },
            { key: 'valNow', label: 'GT hôm nay (tỷ đ)', align: 'right' },
          ],
          rows: [
            { group: '5 mã nhiều khối lượng nhất', volBase: 75, volNow: 330, priceNow: '8.000', valBase: '900', valNow: '2.640' },
            { group: 'Các mã còn lại', volBase: 225, volNow: 270, priceNow: '35.000', valBase: '9.000', valNow: '9.450' },
            { group: 'Toàn thị trường', volBase: 300, volNow: 600, priceNow: '—', valBase: '9.900', valNow: '12.090' },
          ],
          highlight: [{ row: 0, tone: 'warning' }],
          caption: 'Khối lượng tăng thêm 300 triệu cp, trong đó 5 mã đầu đóng góp 255 triệu (85%). Giá trị: 5 mã đầu +1.740 tỷ (79,5% phần tăng), các mã còn lại chỉ +450 tỷ (+5,0%).',
        },
        {
          kind: 'chart',
          title: 'Cơ cấu khối lượng khớp (triệu cổ phiếu)',
          type: 'stackedBar',
          xKey: 'period',
          unit: ' triệu cp',
          series: [
            { key: 'top5', label: '5 mã đầu' },
            { key: 'rest', label: 'Các mã còn lại' },
          ],
          data: [
            { period: 'TB 20 phiên', top5: 75, rest: 225 },
            { period: 'Hôm nay', top5: 330, rest: 270 },
          ],
          caption: 'Tỷ trọng 5 mã đầu tăng từ 25% lên 55% khối lượng.',
        },
        {
          kind: 'quiz',
          id: 'trading-volume-liquidity-concentration-q2',
          question: 'Nhóm 5 mã đầu giao dịch ở giá bình quân 8.000 đ, thấp hơn nhiều mức 35.000 đ của các mã còn lại. Điều này nói gì về việc đọc số khối lượng?',
          options: [
            { id: 'a', text: 'Khối lượng bị thổi phồng so với lượng tiền thật; nên đọc kèm giá trị giao dịch.', correct: true, explain: 'Đúng. 330 triệu cp ở giá 8.000 đ chỉ là 2.640 tỷ đ, trong khi 270 triệu cp ở giá 35.000 đ là 9.450 tỷ đ. Mỗi cổ phiếu của nhóm đầu mang ít tiền hơn.' },
            { id: 'b', text: 'Giá thấp nghĩa là cổ phiếu rẻ nên chắc chắn nên mua.', explain: 'Giá thấp không đồng nghĩa với rẻ. Giá tuyệt đối chưa nói gì về định giá.' },
            { id: 'c', text: 'Không ảnh hưởng gì, vì thanh khoản chỉ cần nhìn khối lượng.', explain: 'Chỉ nhìn khối lượng dễ bị lệch bởi mức giá. Giá trị giao dịch mới so sánh được giữa các mã.' },
          ],
        },
      ],
    },
    {
      id: 'breadth',
      kind: 'analysis',
      title: 'Bước 2 — Đọc độ rộng: vài mã nóng hay cả thị trường',
      blocks: [
        {
          kind: 'table',
          title: 'Tỷ trọng của nhóm 5 mã đầu',
          columns: [
            { key: 'metric', label: 'Chỉ số' },
            { key: 'base', label: 'TB 20 phiên', align: 'right' },
            { key: 'now', label: 'Hôm nay', align: 'right' },
          ],
          rows: [
            { metric: 'Tỷ trọng khối lượng của 5 mã đầu', base: '25,0%', now: '55,0%' },
            { metric: 'Tỷ trọng giá trị của 5 mã đầu', base: '9,1%', now: '21,8%' },
            { metric: 'Giá trị giao dịch của các mã còn lại', base: '9.000 tỷ', now: '9.450 tỷ (+5,0%)' },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: '900 ÷ 9.900 = 9,1%; 2.640 ÷ 12.090 = 21,8%. Phần lớn thị trường giao dịch gần như bình thường.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Một phiên đột biến không phải là xu hướng. Muốn nói "dòng tiền quay lại", cần thấy giá trị giao dịch của **phần lớn mã** cao hơn nền trong nhiều phiên liên tiếp, không phải vài mã đua nhau. Hãy theo dõi thêm số mã tăng/giảm và giá trị giao dịch loại trừ nhóm đầu.',
        },
        {
          kind: 'quiz',
          id: 'trading-volume-liquidity-concentration-q3',
          question: 'Kết luận nào phù hợp nhất với dữ liệu phiên hôm nay?',
          options: [
            { id: 'a', text: 'Thanh khoản toàn thị trường tăng gấp đôi, dòng tiền đã quay lại.', explain: 'Giá trị giao dịch chỉ tăng 22%, và các mã ngoài nhóm đầu chỉ tăng 5%. Chưa thể nói dòng tiền quay lại diện rộng.' },
            { id: 'b', text: 'Khối lượng tăng chủ yếu do vài mã giá thấp; thanh khoản mới hẹp, cần thêm nhiều phiên để kết luận.', correct: true, explain: 'Đúng. 5 mã đầu chiếm 85% phần khối lượng tăng thêm nhưng chỉ 21,8% giá trị. Đây là phiên có điểm nóng cục bộ.' },
            { id: 'c', text: 'Thanh khoản giảm vì giá trị giao dịch tăng ít hơn khối lượng.', explain: 'Giá trị vẫn tăng 22%, thanh khoản không giảm. Điều cần nói là mức tăng kém lan tỏa hơn con số khối lượng gợi ý.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: cách đọc và báo cáo thanh khoản',
      blocks: [
        {
          kind: 'text',
          md: '**Cách viết cho khách hàng:** "Khối lượng gấp đôi nhưng tập trung vào 5 mã giá thấp (55% khối lượng, 21,8% giá trị). Giá trị giao dịch toàn thị trường tăng 22%, các mã còn lại chỉ tăng 5%. Chúng tôi theo dõi thêm vài phiên trước khi kết luận." Số liệu nào cũng đi kèm lát cắt.',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Đưa giá trị giao dịch và tỷ trọng 5 mã đầu vào bản tin cạnh khối lượng', owner: 'Analyst thị trường', metric: 'Tỷ trọng giá trị của 5 mã đầu', threshold: 'Cảnh báo khi > 20% (nền ~9%)' },
            { action: 'Theo dõi giá trị giao dịch của các mã loại trừ nhóm đầu, so với trung bình 20 phiên', owner: 'Analyst thị trường', metric: 'GT các mã còn lại so với TB 20 phiên', threshold: 'Chỉ nói "thanh khoản cải thiện" khi > +15% trong ≥ 3 phiên liên tiếp' },
            { action: 'Gắn nhãn "đột biến cục bộ" cho phiên có top 5 chiếm trên một nửa khối lượng', owner: 'Trưởng phòng nghiên cứu', metric: 'Tỷ trọng khối lượng của 5 mã đầu', threshold: '> 50%' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Vì sao nên làm vậy',
          md: 'Cùng một con số khối lượng có thể là thị trường khỏe hoặc chỉ là vài mã đầu cơ. Thêm hai lát cắt (giá trị, độ tập trung) tốn vài dòng bản tin nhưng tránh được kết luận sai đưa đến khách hàng.',
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
            { title: 'Đọc khối lượng như thể đó là tiền', why: 'Cổ phiếu giá thấp có khối lượng lớn nhưng giá trị nhỏ. Khối lượng toàn thị trường dễ bị lệch bởi nhóm giá thấp.', instead: 'Đọc song song giá trị giao dịch; so sánh giữa các mã bằng giá trị.' },
            { title: 'Chỉ nhìn tổng, bỏ qua độ tập trung', why: 'Tổng tăng có thể do vài mã. Phần còn lại của thị trường có thể không đổi.', instead: 'Tính tỷ trọng top N và số liệu loại trừ top N.' },
            { title: 'Kết luận xu hướng từ một phiên', why: 'Một phiên có thể do sự kiện riêng (tin tức, cơ cấu danh mục). Nó chưa nói hành vi chung.', instead: 'Đợi ≥ 3 phiên và so với nền 20 phiên.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Khối lượng đếm cổ phiếu, giá trị đếm tiền; đọc thanh khoản phải nhìn cả hai.',
    'Tách phần tăng thêm theo nhóm (top N vs còn lại) để biết thị trường rộng hay hẹp.',
    'Một phiên đột biến chưa phải xu hướng; cần nhiều phiên và dữ liệu loại trừ nhóm đầu.',
  ],
  references: [
    { title: 'Market liquidity', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Market_liquidity', note: 'Định nghĩa thanh khoản thị trường và các thước đo thường dùng.' },
    { title: 'Volume (finance)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Volume_(finance)', note: 'Khối lượng giao dịch là gì và vì sao cần đọc cùng giá.' },
    { title: 'Herfindahl–Hirschman index', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index', note: 'Một cách đo mức độ tập trung (ở đây dùng bản đơn giản là tỷ trọng top N).' },
  ],
}
