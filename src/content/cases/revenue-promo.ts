import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — 4 tuần trước khuyến mãi (T1–T4) → 4 tuần khuyến mãi (T5–T8), đã kiểm tra khớp nhau:
 *   Kinh tế 1 đơn: giá trị đơn gốc (gross AOV) 500k · giá vốn 70% = 350k · chi phí giao + thanh toán 30k
 *     Đơn không voucher: lãi góp 500 − 350 − 30 = 120k · Đơn voucher 20% (−100k): 400 − 350 − 30 = 20k
 *   Trước: 20.000 đơn × 500k = 10,000 tỷ doanh thu thuần · lãi góp 20.000 × 120k = 2,400 tỷ (24,0%)
 *   Trong KM: 20.800 đơn (+4,0%) · GMV 10,400 tỷ − giảm giá 10.400 × 100k = 1,040 tỷ → thuần 9,360 tỷ (−6,4%)
 *     AOV thuần 9,360 tỷ / 20.800 = 450k (−10,0%) → 1,04 × 0,90 = 0,936 ✓
 *     Lãi góp 10.400 × 120k + 10.400 × 20k = 1,248 + 0,208 = 1,456 tỷ (−39,3%; 15,6% doanh thu thuần)
 *   Phân khúc: Khách quay lại 16.000 → 16.000 đơn (8.000 dùng voucher): lãi góp 1,920 → 0,960 + 0,160 = 1,120 tỷ
 *              Khách mới 4.000 → 4.800 đơn (2.400 dùng voucher): lãi góp 0,480 → 0,288 + 0,048 = 0,336 tỷ
 *   Cầu nối lãi góp −0,944 tỷ = trợ giá đơn quay lại vốn sẽ mua (8.000 × 100k = −0,800)
 *              + trợ giá đơn khách mới vốn sẽ mua (1.600 × 100k = −0,160) + 800 đơn tăng thêm × 20k (+0,016)
 *   Hòa vốn: tỷ lệ đơn voucher phải là đơn tăng thêm ≥ 100k / 120k = 83,3% · thực tế 800 / 10.400 = 7,7%
 *   Đơn theo tuần: T1–T4 5.000/tuần · T5–T8 5.500 + 5.300 + 5.100 + 4.900 = 20.800 · T9–T10 4.500 + 4.700 (−800 vs nền)
 */
export const revenuePromo: CaseStudy = {
  id: 'revenue-promo',
  title: 'Khuyến mãi kéo số đơn lên, nhưng doanh thu và lãi đi xuống',
  domain: 'ecommerce',
  level: 'junior',
  minutes: 9,
  skills: ['unit-economics', 'metric-decomposition', 'segmentation', 'tradeoff'],
  question:
    'Voucher 20% làm số đơn tăng 4% nhưng doanh thu thuần giảm 6,4%. Chương trình có đáng chạy tiếp hay mở rộng không?',
  summary:
    'Tính lãi góp sau giảm giá, tách đơn "tăng thêm" khỏi đơn "vốn sẽ mua", nhận diện hiệu ứng kéo cầu và thiết kế khuyến mãi có mục tiêu đo bằng nhóm holdout.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng.* Một sàn thương mại điện tử vừa chạy 4 tuần voucher **giảm 20% cho mọi đơn từ 300.000 đ**, áp dụng cho toàn bộ khách hàng. Team Marketing báo cáo "chương trình thành công, số đơn tăng" và đề xuất nâng voucher lên 25% cho quý sau. CFO thì thấy doanh thu thuần đi xuống và nhờ bạn đánh giá độc lập. Dashboard so sánh 4 tuần khuyến mãi với 4 tuần liền trước:',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Số đơn', value: '20.800', delta: '+4,0%', tone: 'positive' },
            { label: 'AOV thuần (sau giảm giá)', value: '450.000 đ', delta: '−10,0%', tone: 'negative' },
            { label: 'Doanh thu thuần', value: '9,36 tỷ đ', delta: '−6,4%', tone: 'negative' },
            { label: 'Chi phí voucher', value: '1,04 tỷ đ', delta: 'từ 0', tone: 'warning', note: '10.400 đơn dùng voucher' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi cần trả lời',
          md: 'Không phải "số đơn có tăng không" mà là: **chương trình tạo thêm bao nhiêu lãi so với khi không chạy**, ai thực sự được kích cầu, và nếu chạy tiếp thì nên chạy **cho ai, ở mức nào, đo bằng gì**.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: đo bằng lãi góp tăng thêm, không đo bằng số đơn',
      blocks: [
        {
          kind: 'formula',
          expression: 'Doanh thu thuần = Số đơn × AOV thuần  ·  Lãi góp = Doanh thu thuần − Giá vốn − Chi phí biến đổi/đơn × Số đơn',
          note: 'Giảm giá trừ thẳng vào doanh thu thuần nhưng **giá vốn và chi phí giao hàng giữ nguyên**, nên lãi góp giảm nhanh hơn nhiều so với doanh thu.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Phân rã**: thay đổi doanh thu thuần đến từ số đơn hay AOV? Rồi đi tiếp xuống lãi góp.',
            '**Tách đơn tăng thêm khỏi đơn vốn sẽ mua**: mỗi đơn dùng voucher mà khách vẫn sẽ mua là một khoản trợ giá thuần.',
            '**Nhìn ngoài cửa sổ khuyến mãi**: đơn có bị kéo từ tương lai về (pull-forward) không? Khách mới có quay lại khi không còn voucher không?',
            '**Quyết định + đo**: nhắm đúng nhóm có hiệu ứng tăng thêm, đo bằng nhóm đối chứng (holdout).',
          ],
        },
        {
          kind: 'quiz',
          id: 'revenue-promo-q1',
          question: 'Marketing đề xuất nâng voucher lên 25% vì "số đơn tăng 4%". Trước khi trả lời, bạn nên làm gì?',
          options: [
            {
              id: 'a',
              text: 'Đồng ý: số đơn tăng nghĩa là khách phản ứng tốt, tăng ưu đãi sẽ kéo thêm đơn.',
              explain:
                'Số đơn là metric đầu vào, không phải kết quả kinh doanh. Doanh thu thuần đã giảm 6,4%; tăng mức giảm mà chưa biết lãi góp mỗi đơn voucher còn bao nhiêu có thể khiến mỗi đơn bán ra bị lỗ.',
            },
            {
              id: 'b',
              text: 'Tính lãi góp sau giảm giá và ước lượng bao nhiêu đơn voucher là đơn tăng thêm thật, theo từng nhóm khách.',
              correct: true,
              explain:
                'Đúng. Hiệu quả khuyến mãi = lãi góp từ đơn tăng thêm − chi phí trợ giá cho đơn vốn sẽ có. Phải đi từ doanh thu xuống lãi góp và tách theo nhóm khách thì mới biết voucher đang mua đơn mới hay đang tặng tiền cho khách cũ.',
            },
            {
              id: 'c',
              text: 'Dừng ngay mọi khuyến mãi vì doanh thu thuần giảm.',
              explain:
                'Phản ứng quá tay theo chiều ngược lại. Có thể có nhóm khách mà voucher tạo lãi tăng thêm thật (ví dụ khách mới, khách lâu không mua). Cần số liệu theo phân khúc trước khi bỏ một công cụ tăng trưởng.',
            },
          ],
        },
      ],
    },
    {
      id: 'decompose',
      kind: 'analysis',
      title: 'Bước 1 — Phân rã: đơn tăng 4%, lãi góp giảm 39%',
      blocks: [
        {
          kind: 'table',
          title: 'Từ số đơn đến lãi góp (4 tuần trước vs 4 tuần khuyến mãi)',
          columns: [
            { key: 'metric', label: 'Chỉ số' },
            { key: 'prev', label: 'Trước KM', align: 'right' },
            { key: 'curr', label: 'Trong KM', align: 'right' },
            { key: 'change', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { metric: 'Số đơn', prev: '20.000', curr: '20.800', change: '+4,0%' },
            { metric: 'GMV (giá gốc, 500.000 đ/đơn)', prev: '10,000 tỷ đ', curr: '10,400 tỷ đ', change: '+4,0%' },
            { metric: 'Giảm giá voucher', prev: '0', curr: '−1,040 tỷ đ', change: '—' },
            { metric: 'Doanh thu thuần', prev: '10,000 tỷ đ', curr: '9,360 tỷ đ', change: '−6,4%' },
            { metric: 'Giá vốn (70% giá gốc)', prev: '−7,000 tỷ đ', curr: '−7,280 tỷ đ', change: '+4,0%' },
            { metric: 'Giao hàng + thanh toán (30.000 đ/đơn)', prev: '−0,600 tỷ đ', curr: '−0,624 tỷ đ', change: '+4,0%' },
            { metric: 'Lãi góp', prev: '2,400 tỷ đ', curr: '1,456 tỷ đ', change: '−39,3%' },
            { metric: 'Biên lãi góp / doanh thu thuần', prev: '24,0%', curr: '15,6%', change: '−8,4 điểm %' },
          ],
          highlight: [
            { row: 3, tone: 'negative' },
            { row: 6, tone: 'negative' },
          ],
          caption: 'Doanh thu thuần: 1,04 (đơn) × 0,90 (AOV thuần) = 0,936 → −6,4%. Lãi góp mất 0,944 tỷ đ, gần bằng toàn bộ chi phí voucher.',
        },
        {
          kind: 'text',
          md: 'Điểm mấu chốt nằm ở **kinh tế một đơn**: đơn giá gốc mang về 120.000 đ lãi góp. Voucher 100.000 đ trừ thẳng vào đó, nên **một đơn dùng voucher chỉ còn 20.000 đ lãi góp**, tức mất 5/6 lợi nhuận của đơn. Nếu nâng voucher lên 25% (125.000 đ), mỗi đơn voucher sẽ **lỗ 5.000 đ** trước cả chi phí marketing.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Đừng báo cáo khuyến mãi bằng GMV hay số đơn. Thói quen tốt: mọi chương trình đều có một dòng **"lãi góp sau giảm giá"** và một dòng **"lãi góp tăng thêm so với kịch bản không chạy"**. Hai con số này thường kể hai câu chuyện rất khác nhau.',
        },
      ],
    },
    {
      id: 'segment',
      kind: 'analysis',
      title: 'Bước 2 — Phân khúc: voucher đang trợ giá cho người vốn sẽ mua',
      blocks: [
        {
          kind: 'table',
          title: 'Số đơn và lãi góp theo nhóm khách',
          columns: [
            { key: 'seg', label: 'Nhóm khách' },
            { key: 'prev', label: 'Đơn trước KM', align: 'right' },
            { key: 'curr', label: 'Đơn trong KM', align: 'right' },
            { key: 'voucher', label: 'Đơn dùng voucher', align: 'right' },
            { key: 'cmPrev', label: 'Lãi góp trước', align: 'right' },
            { key: 'cmCurr', label: 'Lãi góp trong KM', align: 'right' },
          ],
          rows: [
            { seg: 'Khách quay lại', prev: '16.000', curr: '16.000', voucher: '8.000', cmPrev: '1,920 tỷ đ', cmCurr: '1,120 tỷ đ' },
            { seg: 'Khách mới', prev: '4.000', curr: '4.800', voucher: '2.400', cmPrev: '0,480 tỷ đ', cmCurr: '0,336 tỷ đ' },
            { seg: 'Tổng', prev: '20.000', curr: '20.800', voucher: '10.400', cmPrev: '2,400 tỷ đ', cmCurr: '1,456 tỷ đ' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
          caption: 'Khách quay lại mua đúng bằng số đơn cũ, nhưng một nửa số đơn đó được giảm 100.000 đ. Toàn bộ 800 đơn tăng thêm đến từ khách mới.',
        },
        {
          kind: 'table',
          title: 'Cầu nối lãi góp: −0,944 tỷ đ đến từ đâu?',
          columns: [
            { key: 'item', label: 'Thành phần' },
            { key: 'calc', label: 'Cách tính', align: 'right' },
            { key: 'value', label: 'Tác động', align: 'right' },
          ],
          rows: [
            { item: 'Trợ giá đơn khách quay lại vốn sẽ mua', calc: '8.000 × 100.000 đ', value: '−0,800 tỷ đ' },
            { item: 'Trợ giá đơn khách mới vốn sẽ mua', calc: '1.600 × 100.000 đ', value: '−0,160 tỷ đ' },
            { item: 'Lãi góp từ đơn tăng thêm', calc: '800 × 20.000 đ', value: '+0,016 tỷ đ' },
            { item: 'Tổng thay đổi lãi góp', calc: '', value: '−0,944 tỷ đ' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
          caption: 'Giả định: số đơn "vốn sẽ có" bằng mức 4 tuần trước. Đây chính là giả định cần được thay bằng nhóm holdout ở lần sau.',
        },
        {
          kind: 'formula',
          expression: 'Tỷ lệ đơn tăng thêm cần để hòa vốn = Giá trị voucher / Lãi góp đơn giá gốc = 100.000 / 120.000 ≈ 83%',
          note: 'Trong 10.400 đơn voucher, phải có ≥ 83% là đơn **không thể có nếu không có voucher** thì chương trình mới không mất lãi. Thực tế chỉ 800 / 10.400 ≈ 7,7%.',
        },
        {
          kind: 'quiz',
          id: 'revenue-promo-q2',
          question: 'Từ hai bảng trên, kết luận nào đúng nhất?',
          options: [
            {
              id: 'a',
              text: 'Voucher hiệu quả với khách mới (+20% đơn), nên chỉ cần tiếp tục chạy như cũ.',
              explain:
                'Ngay cả ở khách mới, lãi góp vẫn giảm (0,480 → 0,336 tỷ đ) vì 1.600 đơn voucher là của người vốn sẽ mua. Tăng đơn không đồng nghĩa tăng lãi; hơn nữa chạy "như cũ" vẫn trợ giá cho 8.000 đơn khách quay lại.',
            },
            {
              id: 'b',
              text: 'Phần lớn chi phí voucher là trợ giá cho đơn vốn sẽ có, nhất là khách quay lại; voucher đại trà không thể hòa vốn ở mức 20%.',
              correct: true,
              explain:
                'Đúng. 0,800 / 0,944 tỷ đ thiệt hại đến từ khách quay lại không mua thêm đơn nào. Muốn hòa vốn cần 83% đơn voucher là đơn tăng thêm, điều gần như không thể với voucher mở cho mọi người. Hướng đúng là nhắm mục tiêu, không phải tăng mức giảm.',
            },
            {
              id: 'c',
              text: 'Khách quay lại không nhạy giá, nên tăng voucher lên 25% sẽ kéo họ mua nhiều hơn.',
              explain:
                'Dữ liệu cho thấy điều ngược lại: khách quay lại nhận voucher nhưng không mua thêm, tức không nhạy với ưu đãi này. Tăng lên 25% chỉ làm mỗi đơn voucher lỗ 5.000 đ.',
            },
          ],
        },
      ],
    },
    {
      id: 'pullforward',
      kind: 'analysis',
      title: 'Bước 3 — Nhìn ra ngoài cửa sổ khuyến mãi: đơn mượn từ tương lai',
      blocks: [
        {
          kind: 'chart',
          title: 'Số đơn theo tuần, trước – trong – sau khuyến mãi',
          type: 'bar',
          xKey: 'week',
          unit: ' đơn',
          series: [{ key: 'orders', label: 'Số đơn' }],
          data: [
            { week: 'T1', orders: 5000 },
            { week: 'T2', orders: 5000 },
            { week: 'T3', orders: 5000 },
            { week: 'T4', orders: 5000 },
            { week: 'T5', orders: 5500 },
            { week: 'T6', orders: 5300 },
            { week: 'T7', orders: 5100 },
            { week: 'T8', orders: 4900 },
            { week: 'T9', orders: 4500 },
            { week: 'T10', orders: 4700 },
          ],
          marker: { x: 'T5', label: 'Bắt đầu voucher 20%' },
          caption: 'Trong KM +800 đơn so với nền 5.000/tuần; 2 tuần sau KM −800 đơn. Cộng cả 10 tuần, số đơn gần như không đổi.',
        },
        {
          kind: 'text',
          md: 'Mẫu hình "bùng lên rồi hụt xuống" là dấu hiệu điển hình của **kéo cầu (pull-forward)**: khách mua sớm hàng tiêu dùng định kỳ hoặc gom đơn để dùng voucher, sau đó không mua trong vài tuần. Nhìn thêm chất lượng khách mới từ đợt khuyến mãi tương tự trước đây:',
        },
        {
          kind: 'table',
          title: 'Khách mới đợt khuyến mãi tháng 3 (dữ liệu lịch sử, mô phỏng)',
          columns: [
            { key: 'cohort', label: 'Khách mới có được nhờ' },
            { key: 'n', label: 'Số khách', align: 'right' },
            { key: 'repeat', label: 'Mua lại trong 60 ngày', align: 'right' },
            { key: 'full', label: 'Mua lại giá gốc', align: 'right' },
          ],
          rows: [
            { cohort: 'Có dùng voucher', n: '3.000', repeat: '14%', full: '6%' },
            { cohort: 'Không dùng voucher', n: '2.000', repeat: '30%', full: '30%' },
          ],
          highlight: [{ row: 0, tone: 'warning' }],
          caption: 'Nhiều khách mới đến vì voucher là "promo-only buyer": hiếm khi quay lại mua ở giá gốc.',
        },
        {
          kind: 'quiz',
          id: 'revenue-promo-q3',
          question: 'CFO hỏi: "Vậy 800 đơn tăng thêm có thật không?" Cách trả lời tốt nhất là gì?',
          options: [
            {
              id: 'a',
              text: 'Có, vì số đơn trong 4 tuần khuyến mãi cao hơn 4 tuần trước 800 đơn.',
              explain:
                'So sánh trước–sau bỏ qua phần hụt ngay sau chương trình và mọi yếu tố mùa vụ. Chỉ nhìn trong cửa sổ khuyến mãi luôn phóng đại hiệu quả.',
            },
            {
              id: 'b',
              text: 'Nhiều khả năng phần lớn là đơn bị kéo sớm; cách chắc chắn là lần sau giữ một nhóm holdout ngẫu nhiên không nhận voucher và so sánh cả giai đoạn sau khuyến mãi.',
              correct: true,
              explain:
                'Đúng. Dữ liệu quan sát cho thấy +800 rồi −800, nhưng vẫn có thể bị nhiễu bởi mùa vụ. Nhóm holdout ngẫu nhiên (ví dụ 10% khách) là cách chuẩn để đo đơn và lãi góp tăng thêm, và cửa sổ đo phải kéo dài qua vài tuần sau khi chương trình kết thúc.',
            },
            {
              id: 'c',
              text: 'Không, khuyến mãi không bao giờ tạo đơn tăng thêm.',
              explain:
                'Khẳng định tuyệt đối không có căn cứ. Khuyến mãi nhắm đúng nhóm (khách mới thật sự, khách đã ngừng mua) hoàn toàn có thể tạo lãi tăng thêm; vấn đề ở đây là thiết kế đại trà và cách đo.',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Giới hạn của phân tích quan sát',
          md: 'Mức nền 5.000 đơn/tuần là giả định. Nếu thị trường đang đi xuống, khuyến mãi có thể đã "đỡ" doanh số tốt hơn mức ta thấy; nếu đang đi lên, nó còn tệ hơn. Đây là lý do **holdout ngẫu nhiên** phải là thiết kế mặc định của mọi chương trình khuyến mãi.',
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
          md: '**Kết luận:** Voucher 20% đại trà làm mất 0,944 tỷ đ lãi góp trong 4 tuần (−39%). 85% thiệt hại là trợ giá cho khách quay lại vốn sẽ mua; phần đơn tăng thêm nhỏ và phần lớn bị bù trừ bởi hụt đơn sau chương trình. **Không nâng lên 25%**; chuyển sang khuyến mãi có mục tiêu và đo bằng lãi góp tăng thêm.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Dừng voucher đại trà; chỉ phát voucher cho khách mới và khách không mua ≥ 90 ngày, giới hạn 1 lần/khách',
              owner: 'Head of Marketing',
              metric: 'Lãi góp tăng thêm / 1.000 khách được nhắm (so với holdout)',
              threshold: '> 0 sau 8 tuần, tính cả 4 tuần sau khi chương trình kết thúc',
            },
            {
              action: 'Giữ nhóm holdout ngẫu nhiên 10% trong mỗi phân khúc được nhắm, không nhận voucher',
              owner: 'Data/Analytics + CRM',
              metric: 'Chênh lệch đơn và lãi góp giữa nhóm nhận và holdout',
              threshold: 'Đủ cỡ mẫu để phát hiện chênh lệch ±3% đơn với độ tin cậy 95%',
            },
            {
              action: 'Thêm guardrail vào báo cáo khuyến mãi: biên lãi góp, tỷ lệ khách chỉ mua khi có voucher, mua lại giá gốc 60 ngày',
              owner: 'Finance + Data/Analytics',
              metric: 'Biên lãi góp toàn sàn; tỷ lệ mua lại giá gốc của khách mới từ KM',
              threshold: 'Biên ≥ 22%; mua lại giá gốc ≥ 15%, nếu thấp hơn thì dừng phân khúc đó',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Vấn đề không phải "khuyến mãi xấu" mà là **voucher được phát cho người không cần nó**. Nhắm mục tiêu cắt phần trợ giá lớn nhất (khách quay lại), còn holdout biến mỗi chương trình thành một thí nghiệm đo được lãi tăng thêm thật. Nhờ vậy team vẫn giữ được công cụ thu hút khách mới, nhưng chỉ chi tiền khi chứng minh được hiệu quả.',
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
              title: 'Đo khuyến mãi bằng số đơn hoặc GMV',
              why: 'Số đơn tăng 4% trông như thành công, trong khi lãi góp giảm 39%. GMV còn tệ hơn vì tính theo giá gốc, che hoàn toàn chi phí giảm giá.',
              instead: 'Báo cáo bằng doanh thu thuần và lãi góp sau giảm giá, kèm lãi góp tăng thêm so với kịch bản không chạy.',
            },
            {
              title: 'Coi mọi đơn dùng voucher là đơn do voucher tạo ra',
              why: 'Khách quay lại vẫn sẽ mua; voucher chỉ chuyển tiền từ công ty sang họ. Đếm "đơn có dùng voucher" phóng đại hiệu quả hàng chục lần.',
              instead: 'Ước lượng đơn tăng thêm bằng holdout ngẫu nhiên; khi chưa có, ít nhất so với mức nền và tách theo nhóm khách.',
            },
            {
              title: 'Chỉ nhìn trong cửa sổ khuyến mãi',
              why: 'Đơn bị kéo sớm làm các tuần sau hụt xuống; khách "chỉ mua khi có voucher" hiếm khi quay lại giá gốc.',
              instead: 'Kéo dài cửa sổ đo qua vài tuần sau chương trình và theo dõi mua lại giá gốc của khách mới.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Giảm giá trừ thẳng vào lãi góp: đơn 120.000 đ lãi góp chỉ còn 20.000 đ khi dùng voucher 100.000 đ — luôn tính lãi góp sau giảm giá.',
    'Hiệu quả khuyến mãi = lãi góp từ đơn tăng thêm − trợ giá cho đơn vốn sẽ có; phân khúc khách để thấy ai thật sự được kích cầu.',
    'Khuyến mãi tối ưu là có mục tiêu, có holdout ngẫu nhiên và cửa sổ đo bao gồm giai đoạn sau chương trình để bắt hiệu ứng kéo cầu.',
  ],
  references: [
    {
      title: 'The Pricing Is Right: Lessons from Top-Performing Consumer Companies',
      publisher: 'Bain & Company',
      url: 'https://www.bain.com/insights/the-pricing-is-right-lessons-from-top-performing-consumer-companies/',
      note: 'Bàn về đo mức tăng thật so với baseline, ăn mòn doanh số (cannibalization) và kéo cầu khi đánh giá khuyến mãi.',
    },
    {
      title: 'Global Control Group',
      publisher: 'Braze Docs',
      url: 'https://www.braze.com/docs/user_guide/engagement_tools/testing/global_control_group/',
      note: 'Cách thiết lập nhóm holdout không nhận chiến dịch để đo mức tăng thêm (incremental uplift).',
    },
    {
      title: 'Trustworthy Online Controlled Experiments',
      publisher: 'Kohavi, Tang & Xu (Cambridge University Press)',
      url: 'https://experimentguide.com/',
      note: 'Sách chuẩn về thử nghiệm có đối chứng: chọn metric tổng thể (OEC), guardrail và các bẫy khi đo tác động.',
    },
  ],
}
