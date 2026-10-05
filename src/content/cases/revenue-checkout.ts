import type { CaseStudy } from '../types'

/*
 * Số liệu mock (tuần trước → tuần này), đã kiểm tra khớp nhau:
 *   Sessions 200.000 → 199.500 · Orders 6.000 → 5.267 · AOV 450k → 451k
 *   Doanh thu 2,700 tỷ → 2,375 tỷ (−12,0%)
 *   Mobile 120.000 sessions: orders 3.120 → 2.378 · Desktop 80.000: 2.880 → 2.889
 *   Mobile e-wallet: 1.213 submit × 85,9% = 1.042 → 1.208 × 25,8% = 312
 */
export const revenueCheckout: CaseStudy = {
  id: 'revenue-checkout',
  title: 'Doanh thu giảm 12%: ít khách hay ít người mua?',
  domain: 'ecommerce',
  level: 'fresher',
  minutes: 8,
  skills: ['metric-decomposition', 'funnel', 'segmentation'],
  question: 'Doanh thu tuần này giảm 12% so với tuần trước. Nguyên nhân nằm ở đâu và nên xử lý gì trước?',
  summary: 'Phân rã doanh thu thành traffic × tỷ lệ chuyển đổi × giá trị đơn, rồi khoanh vùng theo thiết bị và bước checkout.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst của một sàn thương mại điện tử tầm trung. Sáng thứ Hai, Head of Growth nhắn: *"Doanh thu tuần rồi giảm 12%, chiều nay họp, em xem giúp nguyên nhân."* Dashboard tổng quan cho thấy:',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Doanh thu tuần', value: '2,375 tỷ đ', delta: '−12,0%', tone: 'negative' },
            { label: 'Sessions', value: '199.500', delta: '−0,3%', tone: 'neutral' },
            { label: 'Đơn hàng', value: '5.267', delta: '−12,2%', tone: 'negative' },
            { label: 'Giá trị đơn TB (AOV)', value: '451.000 đ', delta: '+0,2%', tone: 'neutral' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu của buổi phân tích',
          md: 'Trước cuộc họp chiều, cần trả lời được 3 câu: **phần giảm nằm ở thành phần nào**, **tập trung ở nhóm nào**, và **việc gì nên làm ngay**. Chưa cần giải thích mọi thứ, nhưng mọi khẳng định phải có số đi kèm.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: phân rã trước, giải thích sau',
      blocks: [
        {
          kind: 'formula',
          expression: 'Doanh thu = Sessions × Tỷ lệ chuyển đổi (CR) × Giá trị đơn TB (AOV)',
          note: 'Vì đây là phép nhân, % thay đổi của doanh thu ≈ tổng % thay đổi của từng thành phần (khi biến động nhỏ).',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Phân rã**: thành phần nào thay đổi đủ lớn để giải thích −12%?',
            '**Khoanh vùng**: thay đổi đó tập trung ở thiết bị, kênh, khu vực hay bước nào?',
            '**Tìm cơ chế**: điều gì đã thay đổi ở đúng nhóm đó (release, đối tác, giá, tồn kho)?',
            '**Hành động + đo**: sửa điểm nghẽn, chọn metric và ngưỡng để biết đã khỏi.',
          ],
        },
        {
          kind: 'quiz',
          id: 'revenue-checkout-q1',
          question: 'Nhìn 4 KPI ở trên, bước đầu tiên hợp lý nhất là gì?',
          options: [
            {
              id: 'a',
              text: 'Đề xuất tăng ngân sách quảng cáo để kéo thêm traffic.',
              explain: 'Sessions gần như không đổi (−0,3%), nên thiếu traffic không phải nguyên nhân. Tăng quảng cáo tốn tiền mà không chạm vào điểm nghẽn.',
            },
            {
              id: 'b',
              text: 'Xác định thành phần gây giảm: số đơn giảm 12% trong khi sessions và AOV đứng yên, vậy tỷ lệ chuyển đổi là thủ phạm.',
              correct: true,
              explain: 'Đúng. Phép phân rã cho thấy gần như toàn bộ −12% đến từ CR (3,00% → 2,64%). Từ đây mới drill-down CR theo thiết bị và bước funnel.',
            },
            {
              id: 'c',
              text: 'Chạy chương trình giảm giá để kích cầu cuối tuần.',
              explain: 'Giảm giá là hành động trước khi biết nguyên nhân, và có thể làm giảm AOV, biên lợi nhuận. Chưa có bằng chứng khách hàng nhạy cảm về giá hơn tuần trước.',
            },
          ],
        },
      ],
    },
    {
      id: 'decompose',
      kind: 'analysis',
      title: 'Bước 1 — Phân rã: CR là thành phần duy nhất giảm mạnh',
      blocks: [
        {
          kind: 'table',
          title: 'Phân rã doanh thu theo tuần',
          columns: [
            { key: 'metric', label: 'Thành phần' },
            { key: 'prev', label: 'Tuần trước', align: 'right' },
            { key: 'curr', label: 'Tuần này', align: 'right' },
            { key: 'change', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { metric: 'Sessions', prev: '200.000', curr: '199.500', change: '−0,3%' },
            { metric: 'Tỷ lệ chuyển đổi (CR)', prev: '3,00%', curr: '2,64%', change: '−12,0%' },
            { metric: 'AOV', prev: '450.000 đ', curr: '451.000 đ', change: '+0,2%' },
            { metric: 'Doanh thu', prev: '2,700 tỷ đ', curr: '2,375 tỷ đ', change: '−12,0%' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
          caption: '−0,3% + (−12,0%) + 0,2% ≈ −12%: toàn bộ biến động được giải thích bởi CR.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Luôn chốt câu *"phần giảm nằm ở thành phần nào"* bằng một bảng phân rã trước khi đưa bất kỳ giả thuyết nào. Nó loại bỏ ngay một nửa số giả thuyết vô căn cứ trong phòng họp (quảng cáo, giá, mùa vụ…).',
        },
      ],
    },
    {
      id: 'segment',
      kind: 'analysis',
      title: 'Bước 2 — Khoanh vùng: chỉ mobile giảm',
      blocks: [
        {
          kind: 'chart',
          title: 'Tỷ lệ chuyển đổi theo thiết bị',
          type: 'bar',
          xKey: 'device',
          unit: '%',
          series: [
            { key: 'prev', label: 'Tuần trước' },
            { key: 'curr', label: 'Tuần này' },
          ],
          data: [
            { device: 'Mobile (60% traffic)', prev: 2.6, curr: 1.99 },
            { device: 'Desktop (40% traffic)', prev: 3.6, curr: 3.62 },
          ],
          caption: 'Mobile: 3.120 → 2.378 đơn (−742). Desktop: 2.880 → 2.889 đơn. Toàn bộ phần mất đến từ mobile.',
        },
        {
          kind: 'text',
          md: 'Tiếp theo, đi dọc funnel **chỉ trên mobile** để tìm bước rơi. Mỗi tỷ lệ tính so với bước liền trước.',
        },
        {
          kind: 'table',
          title: 'Funnel mobile theo bước',
          columns: [
            { key: 'step', label: 'Bước' },
            { key: 'prev', label: 'Tuần trước', align: 'right' },
            { key: 'curr', label: 'Tuần này', align: 'right' },
            { key: 'rate', label: 'Tỷ lệ bước (trước → nay)', align: 'right' },
          ],
          rows: [
            { step: 'Sessions', prev: '120.000', curr: '119.700', rate: '—' },
            { step: 'Thêm vào giỏ', prev: '14.400', curr: '14.360', rate: '12,0% → 12,0%' },
            { step: 'Bắt đầu checkout', prev: '7.200', curr: '7.170', rate: '50,0% → 49,9%' },
            { step: 'Gửi thanh toán', prev: '3.467', curr: '3.450', rate: '48,2% → 48,1%' },
            { step: 'Thanh toán thành công', prev: '3.120', curr: '2.378', rate: '90,0% → 68,9%' },
          ],
          highlight: [{ row: 4, tone: 'negative' }],
        },
        {
          kind: 'quiz',
          id: 'revenue-checkout-q2',
          question: 'Bảng funnel cho thấy điều gì?',
          options: [
            {
              id: 'a',
              text: 'Khách hàng mất hứng mua: ít người thêm vào giỏ hơn.',
              explain: 'Tỷ lệ thêm vào giỏ giữ nguyên 12,0%. Ý định mua không đổi.',
            },
            {
              id: 'b',
              text: 'Khách vẫn muốn mua và vẫn bấm thanh toán, nhưng thanh toán thất bại nhiều hơn.',
              correct: true,
              explain: 'Đúng. Mọi bước đến "Gửi thanh toán" đều ổn định; chỉ tỷ lệ thành công rơi từ 90,0% xuống 68,9%. Đây là dấu hiệu lỗi kỹ thuật hoặc đối tác thanh toán, không phải hành vi khách hàng.',
            },
            {
              id: 'c',
              text: 'Trang checkout quá dài nên khách bỏ giữa chừng.',
              explain: 'Nếu vậy tỷ lệ "Bắt đầu checkout → Gửi thanh toán" sẽ giảm, nhưng nó gần như không đổi (48,2% → 48,1%).',
            },
          ],
        },
      ],
    },
    {
      id: 'mechanism',
      kind: 'analysis',
      title: 'Bước 3 — Tìm cơ chế: ví điện tử trên app 4.12',
      blocks: [
        {
          kind: 'table',
          title: 'Thanh toán thành công trên mobile theo phương thức',
          columns: [
            { key: 'method', label: 'Phương thức' },
            { key: 'share', label: 'Tỷ trọng lượt gửi', align: 'right' },
            { key: 'prev', label: 'Thành công tuần trước', align: 'right' },
            { key: 'curr', label: 'Thành công tuần này', align: 'right' },
          ],
          rows: [
            { method: 'COD', share: '40%', prev: '96,0%', curr: '96,0%' },
            { method: 'Thẻ', share: '25%', prev: '86,0%', curr: '86,0%' },
            { method: 'Ví điện tử', share: '35%', prev: '85,9%', curr: '25,8%' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Ví điện tử trên mobile: 1.042 → 312 đơn thành công (−730), giải thích ~98% số đơn mất.',
        },
        {
          kind: 'chart',
          title: 'Tỷ lệ thanh toán ví điện tử thành công trên mobile theo ngày',
          type: 'line',
          xKey: 'day',
          unit: '%',
          series: [{ key: 'rate', label: 'Thành công' }],
          data: [
            { day: '21/9', rate: 86.1 },
            { day: '22/9', rate: 85.4 },
            { day: '23/9', rate: 86.3 },
            { day: '24/9', rate: 85.8 },
            { day: '25/9', rate: 86.0 },
            { day: '26/9', rate: 85.7 },
            { day: '27/9', rate: 85.9 },
            { day: '28/9', rate: 25.1 },
            { day: '29/9', rate: 26.4 },
            { day: '30/9', rate: 25.9 },
            { day: '1/10', rate: 25.2 },
            { day: '2/10', rate: 26.0 },
            { day: '3/10', rate: 25.7 },
            { day: '4/10', rate: 26.3 },
          ],
          marker: { x: '28/9', label: 'Release app 4.12' },
          caption: 'Mức rơi bắt đầu đúng ngày phát hành app 4.12 (thứ Hai đầu tuần này); web dùng cùng cổng ví không bị ảnh hưởng.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Trùng thời điểm chưa phải bằng chứng',
          md: 'Trùng ngày release là **manh mối mạnh**, chưa phải kết luận. Kiểm tra thêm: tỷ lệ lỗi theo *phiên bản app* (4.11 còn hoạt động bình thường không?), mã lỗi trả về từ cổng ví, và log callback/redirect sau khi thanh toán.',
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp tối ưu',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận cho cuộc họp:** Doanh thu giảm 12% vì thanh toán ví điện tử trên app mobile thất bại kể từ release 4.12 (thành công 86% → 26%). Traffic, ý định mua và AOV không đổi. Ước tính thiệt hại ~45 triệu đ/ngày cho đến khi sửa.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Hotfix/rollback luồng ví trên app 4.12; tạm ẩn ví trên 4.12 và gợi ý COD/thẻ nếu chưa fix được trong ngày',
              owner: 'Mobile lead + Payment team',
              metric: 'Tỷ lệ thanh toán ví thành công trên mobile',
              threshold: 'Quay lại ≥ 85% trong 24h sau fix',
            },
            {
              action: 'Thêm cảnh báo tự động khi tỷ lệ thanh toán thành công theo phương thức × nền tảng giảm > 10 điểm % so với trung bình 7 ngày',
              owner: 'Data/Analytics',
              metric: 'Thời gian phát hiện sự cố',
              threshold: '< 2 giờ thay vì 7 ngày',
            },
            {
              action: 'Bổ sung test thanh toán ví end-to-end vào checklist release mobile',
              owner: 'QA',
              metric: 'Sự cố thanh toán sau release',
              threshold: '0 sự cố lặp lại trong quý',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Nguyên nhân là **lỗi kỹ thuật có thể sửa trực tiếp**, nên ưu tiên khôi phục chứ không chạy khuyến mãi hay mua thêm traffic. Hành động thứ hai và ba biến một sự cố thành cải tiến hệ thống: lần sau phát hiện trong vài giờ thay vì đợi doanh thu tuần.',
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
            {
              title: 'Giải thích trước khi phân rã',
              why: 'Đi thẳng vào giả thuyết ("do đối thủ khuyến mãi", "do mùa thấp điểm") khiến bạn tìm bằng chứng xác nhận thay vì tìm nơi biến động thật sự nằm.',
              instead: 'Luôn bắt đầu bằng bảng phân rã thành phần, rồi mới đặt giả thuyết cho đúng thành phần đó.',
            },
            {
              title: 'Chỉ nhìn số tổng',
              why: 'CR tổng giảm 12% nhưng thực ra desktop không đổi, mobile giảm 23%. Số trung bình che mất nhóm có vấn đề.',
              instead: 'Cắt theo các chiều có khả năng tạo khác biệt cơ chế: thiết bị, phiên bản app, kênh, phương thức thanh toán.',
            },
            {
              title: 'Đề xuất hành động không gắn nguyên nhân',
              why: 'Giảm giá hay tăng quảng cáo không sửa được lỗi thanh toán, chỉ tốn ngân sách và che mờ dữ liệu đo sau này.',
              instead: 'Mỗi hành động phải trỏ về đúng điểm nghẽn đã tìm thấy và có metric chứng minh nó hiệu quả.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Doanh thu = Sessions × CR × AOV: phân rã trước để biết thành phần nào thật sự thay đổi.',
    'Drill-down theo chiều có cơ chế khác nhau (thiết bị, phiên bản, phương thức) và đi dọc funnel để tìm bước rơi.',
    'Hành động tốt nhất sửa đúng điểm nghẽn, kèm metric, ngưỡng và cơ chế cảnh báo để lần sau phát hiện sớm.',
  ],
  references: [
    {
      title: 'Cart & Checkout Abandonment Rate Statistics',
      publisher: 'Baymard Institute',
      url: 'https://baymard.com/lists/cart-abandonment-rate',
      note: 'Số liệu tổng hợp về lý do khách bỏ checkout, hữu ích để biết mức "bình thường" của từng bước.',
    },
    {
      title: 'Funnel exploration',
      publisher: 'Google Analytics Help',
      url: 'https://support.google.com/analytics/answer/9327974',
      note: 'Cách dựng funnel theo bước và cắt theo thiết bị/phân khúc trong GA4.',
    },
    {
      title: 'Build a funnel analysis',
      publisher: 'Amplitude Docs',
      url: 'https://amplitude.com/docs/analytics/charts/funnel-analysis/funnel-analysis-build',
      note: 'Hướng dẫn phân tích funnel, so sánh conversion giữa các nhóm và giai đoạn.',
    },
  ],
}
