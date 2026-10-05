import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — tuần trước → tuần này, đơn có ngày hẹn giao trong tuần, đã kiểm tra khớp nhau:
 *   Tổng: 10.000 đơn, đúng hẹn 9.400 (94,0%) → 12.000 đơn, đúng hẹn 10.440 (87,0%) · đơn trễ 600 → 1.560
 *   Nội thành HN:   4.000 × 97,5% = 3.900 → 4.400 × 97,5% = 4.290 (trễ 100 → 110)
 *   Nội thành HCM:  4.000 × 96,5% = 3.860 → 4.400 × 96,5% = 4.246 (trễ 140 → 154)
 *   HCM → Đà Nẵng:  1.000 × 82,0% =   820 → 1.600 × 61,0% =   976 (trễ 180 → 624)
 *   HN → HCM:       1.000 × 82,0% =   820 → 1.600 × 58,0% =   928 (trễ 180 → 672)
 *   Phân rã −7,0 điểm % (tỷ trọng mới × Δ tỷ lệ + Δ tỷ trọng × tỷ lệ cũ):
 *     HCM→ĐN 13,33% × (−21) = −2,8 · HN→HCM 13,33% × (−24) = −3,2 · nội thành 0
 *     mix: 3,33% × (82 + 82 − 97,5 − 96,5) = −1,0 → tổng −7,0 ✓
 *   Liên tỉnh tuần này theo ngày tạo đơn (tạo / bàn giao kịp cut-off 14:00):
 *     T2 330/314 · T3 340/323 · T4 360/342 · T5 370/351 (1.400/1.330) · T6 520/340 · T7 650/300 · CN 630/296 (1.800/936)
 *     → 3.200 đơn, 2.266 kịp cut-off × 82,0% ≈ 1.858 + 934 trễ cut-off × 4,9% ≈ 46 = 1.904 đúng hẹn ✓
 *   Liên tỉnh tuần trước: 2.000 đơn, 1.960 kịp × 83,6% ≈ 1.638 + 40 × 5,0% = 2 → 1.640 ✓
 */
export const deliveryDelay: CaseStudy = {
  id: 'delivery-delay',
  title: 'Tỷ lệ giao đúng hẹn rơi từ 94% xuống 87%',
  domain: 'logistics',
  level: 'fresher',
  minutes: 8,
  skills: ['operations', 'metric-definition', 'segmentation', 'seasonality'],
  question: 'Tỷ lệ giao đúng hẹn tuần này giảm 7 điểm %. Tuyến, ngày hay khâu nào tạo ra phần giảm, và nên sửa gì trước?',
  summary:
    'Chốt định nghĩa SLA, phân rã tỷ lệ đúng hẹn theo tuyến, lượng hóa đóng góp (tỷ trọng × tỷ lệ) và tìm ra nút thắt cut-off cuối tuần ở hai tuyến liên tỉnh.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng.* Bạn là analyst vận hành của một sàn thương mại điện tử tự quản lý kho và thuê hãng vận chuyển chạy tuyến. Giám đốc vận hành nhắn: *"Tuần này giao trễ tăng vọt, CSKH bị khiếu nại nhiều. Có phải hãng vận chuyển kém đi không? Em xem giúp."* Báo cáo tuần:',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Tỷ lệ giao đúng hẹn (OTD)', value: '87,0%', delta: '−7,0 điểm %', tone: 'negative' },
            { label: 'Đơn hẹn giao trong tuần', value: '12.000', delta: '+20%', tone: 'neutral' },
            { label: 'Đơn trễ hẹn', value: '1.560', delta: '+160%', tone: 'negative' },
            { label: 'Khiếu nại về giao hàng', value: '312', delta: '+140%', tone: 'warning' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu',
          md: 'Trả lời bằng số: **phần giảm 7 điểm % nằm ở đâu**, **cơ chế là gì** (hãng chạy chậm hay mình bàn giao trễ?), và **sửa gì để tuần sau không lặp lại**.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: chốt định nghĩa trước, phân rã sau',
      blocks: [
        {
          kind: 'formula',
          expression: 'OTD = Số đơn giao thành công trước hoặc trong ngày hẹn / Số đơn có ngày hẹn rơi vào kỳ',
          note: '"Ngày hẹn" là ngày đã hứa với khách lúc đặt hàng. Mẫu số loại đơn khách hủy trước khi bàn giao; mốc thời gian là lần quét **giao thành công** của hãng (không phải lần giao thử thất bại).',
        },
        {
          kind: 'list',
          style: 'check',
          items: [
            '**Mẫu số**: đơn tạo trong kỳ hay đơn có ngày hẹn trong kỳ? Hai cách cho kết quả khác nhau khi volume dao động.',
            '**Mốc thời gian**: giao thành công, lần giao đầu, hay khách xác nhận? Tính theo giờ địa phương, tới 23:59 ngày hẹn.',
            '**Ngày hẹn**: ngày hứa ban đầu hay ngày đã được dời? Dùng ngày dời sẽ "làm đẹp" số liệu.',
            '**Thay đổi định nghĩa/tracking**: tuần này có đổi logic tính, đổi hãng hay đổi cách quét mã không?',
          ],
        },
        {
          kind: 'quiz',
          id: 'delivery-delay-q1',
          question: 'Trước khi đi tìm nguyên nhân, việc nào cần làm đầu tiên?',
          options: [
            {
              id: 'a',
              text: 'Gửi cảnh báo cho hãng vận chuyển và yêu cầu giải trình.',
              explain:
                'Kết luận trước khi có bằng chứng. Nếu nguyên nhân nằm ở kho của mình (bàn giao trễ) hoặc do đổi định nghĩa, bạn vừa làm hỏng quan hệ đối tác vừa không sửa được gì.',
            },
            {
              id: 'b',
              text: 'Xác nhận định nghĩa OTD (mẫu số, mốc thời gian, ngày hẹn) và kiểm tra tuần này không có thay đổi cách tính hay tracking.',
              correct: true,
              explain:
                'Đúng. Một metric SLA chỉ so sánh được khi định nghĩa giữ nguyên. Nhiều "sự cố" thực ra là đổi logic tính hoặc lỗi quét mã. Chốt xong định nghĩa mới phân rã theo tuyến, ngày và hãng.',
            },
            {
              id: 'c',
              text: 'So sánh với tỷ lệ đúng hẹn trung bình của ngành.',
              explain:
                'Benchmark ngành không giải thích vì sao **tuần này** giảm so với tuần trước. Nó hữu ích để đặt mục tiêu dài hạn, không phải để chẩn đoán sự cố.',
            },
          ],
        },
      ],
    },
    {
      id: 'by-route',
      kind: 'analysis',
      title: 'Bước 1 — Phân rã theo tuyến: nội thành ổn định, liên tỉnh sụp',
      blocks: [
        {
          kind: 'table',
          title: 'OTD theo tuyến',
          columns: [
            { key: 'route', label: 'Tuyến' },
            { key: 'volPrev', label: 'Đơn tuần trước', align: 'right' },
            { key: 'volCurr', label: 'Đơn tuần này', align: 'right' },
            { key: 'otdPrev', label: 'OTD trước', align: 'right' },
            { key: 'otdCurr', label: 'OTD nay', align: 'right' },
            { key: 'late', label: 'Đơn trễ (trước → nay)', align: 'right' },
          ],
          rows: [
            { route: 'Nội thành HN', volPrev: '4.000', volCurr: '4.400', otdPrev: '97,5%', otdCurr: '97,5%', late: '100 → 110' },
            { route: 'Nội thành HCM', volPrev: '4.000', volCurr: '4.400', otdPrev: '96,5%', otdCurr: '96,5%', late: '140 → 154' },
            { route: 'Liên tỉnh HCM → Đà Nẵng', volPrev: '1.000', volCurr: '1.600', otdPrev: '82,0%', otdCurr: '61,0%', late: '180 → 624' },
            { route: 'Liên tỉnh HN → HCM', volPrev: '1.000', volCurr: '1.600', otdPrev: '82,0%', otdCurr: '58,0%', late: '180 → 672' },
            { route: 'Tổng', volPrev: '10.000', volCurr: '12.000', otdPrev: '94,0%', otdCurr: '87,0%', late: '600 → 1.560' },
          ],
          highlight: [
            { row: 2, tone: 'negative' },
            { row: 3, tone: 'negative' },
          ],
          caption: 'Hai tuyến liên tỉnh chiếm 27% đơn nhưng 83% số đơn trễ tuần này (1.296 / 1.560).',
        },
        {
          kind: 'chart',
          title: 'OTD theo tuyến, tuần trước vs tuần này',
          type: 'bar',
          xKey: 'route',
          unit: '%',
          series: [
            { key: 'prev', label: 'Tuần trước' },
            { key: 'curr', label: 'Tuần này' },
          ],
          data: [
            { route: 'Nội thành HN', prev: 97.5, curr: 97.5 },
            { route: 'Nội thành HCM', prev: 96.5, curr: 96.5 },
            { route: 'HCM → Đà Nẵng', prev: 82, curr: 61 },
            { route: 'HN → HCM', prev: 82, curr: 58 },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Chọn chiều cắt theo **cơ chế vận hành khác nhau**: tuyến nội thành giao trong ngày bằng shipper, tuyến liên tỉnh phải qua kho trung chuyển và xe tải đường dài. Hai luồng có nút thắt khác nhau nên phải tách riêng ngay từ đầu.',
        },
      ],
    },
    {
      id: 'contribution',
      kind: 'analysis',
      title: 'Bước 2 — Lượng hóa đóng góp: 6 trên 7 điểm % đến từ hai tuyến',
      blocks: [
        {
          kind: 'formula',
          expression: 'ΔOTD = Σ tỷ trọng mớiᵢ × ΔOTDᵢ  (hiệu ứng tỷ lệ)  +  Σ Δtỷ trọngᵢ × OTD cũᵢ  (hiệu ứng mix)',
          note: 'Hiệu ứng mix: tuyến chậm sẵn có chiếm tỷ trọng lớn hơn thì OTD tổng giảm dù không tuyến nào kém đi. Hiệu ứng tỷ lệ: chính tuyến đó giao kém đi.',
        },
        {
          kind: 'table',
          title: 'Đóng góp vào mức giảm −7,0 điểm %',
          columns: [
            { key: 'part', label: 'Thành phần' },
            { key: 'calc', label: 'Cách tính', align: 'right' },
            { key: 'impact', label: 'Đóng góp', align: 'right' },
          ],
          rows: [
            { part: 'Tỷ lệ — HN → HCM', calc: '13,3% × (58,0 − 82,0)', impact: '−3,2 điểm %' },
            { part: 'Tỷ lệ — HCM → Đà Nẵng', calc: '13,3% × (61,0 − 82,0)', impact: '−2,8 điểm %' },
            { part: 'Tỷ lệ — nội thành HN, HCM', calc: 'OTD không đổi', impact: '0,0 điểm %' },
            { part: 'Mix — liên tỉnh tăng tỷ trọng 20% → 26,7%', calc: '3,3% × (82 + 82 − 97,5 − 96,5)', impact: '−1,0 điểm %' },
            { part: 'Tổng', calc: '', impact: '−7,0 điểm %' },
          ],
          highlight: [
            { row: 0, tone: 'negative' },
            { row: 1, tone: 'negative' },
          ],
          caption: 'Ngay cả khi liên tỉnh giữ 82%, OTD tổng vẫn giảm 1 điểm % chỉ vì có nhiều đơn liên tỉnh hơn.',
        },
        {
          kind: 'quiz',
          id: 'delivery-delay-q2',
          question: 'Đội vận hành chỉ đủ nguồn lực xử lý một việc trong tuần này. Bạn đề xuất tập trung vào đâu?',
          options: [
            {
              id: 'a',
              text: 'Nội thành HCM, vì đây là tuyến có nhiều đơn nhất.',
              explain:
                'Volume lớn không có nghĩa là nguồn gốc vấn đề. OTD nội thành HCM không đổi (96,5%), cải thiện ở đây không bù được phần giảm.',
            },
            {
              id: 'b',
              text: 'Hai tuyến liên tỉnh HN → HCM và HCM → Đà Nẵng, vì hiệu ứng tỷ lệ của chúng chiếm 6,0 / 7,0 điểm %.',
              correct: true,
              explain:
                'Đúng. Phần giảm tập trung gần như tuyệt đối ở hai tuyến này. Phần mix (−1,0) là tự nhiên khi bán nhiều đơn liên tỉnh hơn; nó nên được xử lý bằng ngày hẹn hợp lý cho đơn liên tỉnh, không phải coi là sự cố.',
            },
            {
              id: 'c',
              text: 'Tăng thêm shipper cho toàn mạng lưới.',
              explain:
                'Giải pháp dàn trải, tốn chi phí ở nơi không có vấn đề. Shipper nội thành không giải quyết được khâu trung chuyển đường dài.',
            },
          ],
        },
      ],
    },
    {
      id: 'mechanism',
      kind: 'analysis',
      title: 'Bước 3 — Tìm cơ chế: cuối tuần vượt năng lực bàn giao trước cut-off',
      blocks: [
        {
          kind: 'chart',
          title: 'Đơn liên tỉnh tuần này theo ngày tạo: số tạo vs số bàn giao kịp cut-off 14:00',
          type: 'bar',
          xKey: 'day',
          unit: ' đơn',
          series: [
            { key: 'created', label: 'Đơn tạo' },
            { key: 'handed', label: 'Bàn giao kịp cut-off' },
          ],
          data: [
            { day: 'T2', created: 330, handed: 314 },
            { day: 'T3', created: 340, handed: 323 },
            { day: 'T4', created: 360, handed: 342 },
            { day: 'T5', created: 370, handed: 351 },
            { day: 'T6', created: 520, handed: 340 },
            { day: 'T7', created: 650, handed: 300 },
            { day: 'CN', created: 630, handed: 296 },
          ],
          marker: { x: 'T6', label: 'Sale cuối tuần bắt đầu' },
          caption: 'T2–T5: 95% đơn kịp chuyến xe tải chiều. T6–CN: volume tăng gần gấp đôi trong khi kho cuối tuần chỉ chia chọn được ~300 đơn liên tỉnh/ngày, chỉ 52% kịp cut-off.',
        },
        {
          kind: 'table',
          title: 'Đơn liên tỉnh theo thời điểm bàn giao cho hãng',
          columns: [
            { key: 'group', label: 'Nhóm' },
            { key: 'prev', label: 'Tuần trước: đơn · OTD', align: 'right' },
            { key: 'curr', label: 'Tuần này: đơn · OTD', align: 'right' },
          ],
          rows: [
            { group: 'Bàn giao trước cut-off', prev: '1.960 · 83,6%', curr: '2.266 · 82,0%' },
            { group: 'Bàn giao sau cut-off (lỡ chuyến)', prev: '40 · 5,0%', curr: '934 · 4,9%' },
            { group: 'Tổng liên tỉnh', prev: '2.000 · 82,0%', curr: '3.200 · 59,5%' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
          caption: 'Đơn bàn giao đúng giờ vẫn được hãng giao đúng hẹn ~82% như cũ. Đơn lỡ chuyến gần như chắc chắn trễ 1 ngày — và số đơn lỡ chuyến tăng từ 40 lên 934.',
        },
        {
          kind: 'quiz',
          id: 'delivery-delay-q3',
          question: 'Hai bảng trên cho thấy điều gì về câu hỏi "hãng vận chuyển có kém đi không"?',
          options: [
            {
              id: 'a',
              text: 'Hãng kém đi rõ rệt, nên chuyển hai tuyến sang hãng khác.',
              explain:
                'Với đơn được bàn giao đúng giờ, OTD của hãng gần như không đổi (83,6% → 82,0%). Đổi hãng không giải quyết việc kho không kịp bàn giao, mà còn tốn chi phí chuyển đổi.',
            },
            {
              id: 'b',
              text: 'Nút thắt nằm ở khâu kho: volume sale cuối tuần vượt năng lực chia chọn, đơn lỡ chuyến xe tải và trễ thêm 1 ngày.',
              correct: true,
              explain:
                'Đúng. 934 đơn lỡ cut-off (so với 40 tuần trước) giải thích gần hết số đơn trễ thêm. Đây là vấn đề năng lực theo mùa (cuối tuần + sale), cần thêm ca chia chọn, thêm chuyến hoặc dời cut-off khi có dự báo volume.',
            },
            {
              id: 'c',
              text: 'Do thời tiết xấu cuối tuần trên tuyến liên tỉnh.',
              explain:
                'Nếu do thời tiết, cả đơn bàn giao đúng giờ cũng bị trễ, nhưng nhóm này vẫn đạt ~82%. Thời tiết vẫn nên được kiểm tra để loại trừ, nhưng dữ liệu không ủng hộ đây là nguyên nhân chính.',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Cần xác minh trước khi chốt',
          md: 'Đối chiếu log quét bàn giao của kho với log nhận hàng của hãng (hai bên có thể ghi giờ khác nhau), kiểm tra lịch ca cuối tuần, và xem đơn trễ có tập trung ở SKU cồng kềnh hay không. Nếu đơn trễ có ngày hẹn sang tuần sau, nhớ rằng tác động sẽ còn lan sang báo cáo tuần sau.',
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
          md: '**Kết luận:** OTD giảm 7 điểm % gồm −6,0 điểm % do hai tuyến liên tỉnh giao kém đi và −1,0 điểm % do tỷ trọng đơn liên tỉnh tăng. Cơ chế: sale cuối tuần đẩy đơn liên tỉnh lên ~650/ngày trong khi kho chỉ chia chọn kịp ~300, 934 đơn lỡ chuyến xe tải và trễ 1 ngày. **Hãng vận chuyển không phải nguyên nhân chính.**',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Thêm ca chia chọn T6–CN và đặt thêm 1 chuyến xe tải tối cho HN → HCM, HCM → Đà Nẵng trong các tuần có sale',
              owner: 'Trưởng kho + Account manager hãng vận chuyển',
              metric: '% đơn liên tỉnh bàn giao kịp cut-off; OTD hai tuyến',
              threshold: '≥ 95% kịp cut-off; OTD liên tỉnh quay lại ≥ 80% trong 2 tuần',
            },
            {
              action: 'Marketing gửi dự báo volume theo tuyến cho vận hành ít nhất 7 ngày trước mỗi đợt sale; nếu vượt năng lực, checkout tự cộng 1 ngày vào ngày hẹn liên tỉnh',
              owner: 'Marketing lead + Product checkout',
              metric: 'Sai số dự báo volume; OTD và tỷ lệ chuyển đổi đơn liên tỉnh',
              threshold: 'Sai số ≤ 15%; tỷ lệ chuyển đổi không giảm quá 0,5 điểm %',
            },
            {
              action: 'Dựng cảnh báo hằng ngày theo tuyến: đơn chờ bàn giao vượt năng lực, hoặc OTD tuyến thấp hơn trung bình 4 tuần > 5 điểm %',
              owner: 'Data/Analytics',
              metric: 'Thời gian phát hiện sự cố SLA',
              threshold: 'Phát hiện trong ngày thay vì cuối tuần',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Giải pháp nhắm đúng nút thắt (năng lực kho cuối tuần ở hai tuyến) thay vì đổi hãng hay tăng nguồn lực toàn mạng. Hành động thứ hai xử lý gốc rễ theo mùa: volume sale là **dự đoán được**, nên năng lực và lời hứa với khách phải được lên kế hoạch trước. Cảnh báo theo ngày giúp lần sau phát hiện ngay ngày thứ Bảy, không đợi báo cáo tuần.',
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
              title: 'Không chốt định nghĩa SLA',
              why: 'Đổi mẫu số (đơn tạo vs đơn có ngày hẹn), đổi mốc thời gian hoặc dùng ngày hẹn đã dời đều làm OTD dao động mà không có gì thay đổi ngoài thực tế.',
              instead: 'Viết rõ tử số, mẫu số, mốc thời gian, nguồn timestamp và kiểm tra không có thay đổi cách tính trước khi phân tích.',
            },
            {
              title: 'Đổ lỗi cho đối tác khi chưa tách khâu',
              why: 'Đơn trễ có thể do kho bàn giao muộn chứ không phải hãng chạy chậm. Nhìn OTD cuối cùng không phân biệt được hai khâu.',
              instead: 'Tách SLA theo từng chặng: kho → bàn giao → trung chuyển → giao cuối, so sánh nhóm bàn giao đúng giờ và lỡ chuyến.',
            },
            {
              title: 'Bỏ qua hiệu ứng mix',
              why: 'Khi tỷ trọng đơn liên tỉnh tăng, OTD tổng giảm dù không tuyến nào kém đi. Coi phần này là sự cố dẫn đến hành động sai.',
              instead: 'Tách mức thay đổi thành hiệu ứng tỷ lệ và hiệu ứng mix; xử lý mix bằng lời hứa giao hàng phù hợp từng tuyến.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Metric SLA chỉ so sánh được khi định nghĩa rõ tử số, mẫu số, mốc thời gian và ngày hẹn — chốt chúng trước khi phân tích.',
    'Phân rã mức thay đổi theo phân khúc thành hiệu ứng tỷ lệ (tỷ trọng × Δ tỷ lệ) và hiệu ứng mix để biết ưu tiên đúng chỗ.',
    'Tách SLA theo từng chặng để tìm nút thắt thật; volume theo mùa là dự đoán được nên năng lực và cảnh báo phải được lên kế hoạch trước.',
  ],
  references: [
    {
      title: 'Service Level Objectives',
      publisher: 'Google — Site Reliability Engineering book',
      url: 'https://sre.google/sre-book/service-level-objectives/',
      note: 'Cách định nghĩa chỉ số dịch vụ (SLI) chính xác: đo cái gì, ở đâu, cửa sổ thời gian nào, và đặt mục tiêu SLO.',
    },
    {
      title: 'Alerting on SLOs',
      publisher: 'Google — The Site Reliability Workbook',
      url: 'https://sre.google/workbook/alerting-on-slos/',
      note: 'Nguyên tắc thiết kế cảnh báo dựa trên mục tiêu dịch vụ để phát hiện sớm mà không gây nhiễu.',
    },
    {
      title: 'OTIF Shipping: Meaning, Formula, and Improvement Tips',
      publisher: 'Shopify',
      url: 'https://www.shopify.com/blog/otif-shipping',
      note: 'Định nghĩa và công thức giao đúng hẹn / đúng đủ (OTIF) trong thương mại điện tử.',
    },
  ],
}
