import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — Sàn S (hư cấu), T9 vs T10, "hủy do shop" = đơn bị shop hủy trước khi giao cho vận chuyển. Đã kiểm tra khớp:
 *   Tổng: 200.000 → 240.000 đơn · hủy 4.000 (2,0%) → 8.640 (3,6%) · +4.640
 *   Lý do (T9 → T10): hết hàng 2.200 → 3.600 · kẹt vận chuyển 1.000 → 3.840 · giá/thông tin sai 400 → 600 · khác 400 → 600 · Σ 4.000 / 8.640 ✓
 *   Đóng góp mức tăng 4.640: hết hàng +1.400 (30,2%) · vận chuyển +2.840 (61,2%) · giá sai +200 (4,3%) · khác +200 (4,3%) ✓
 *   Cầu nối: nếu giữ tỷ lệ 2,0% với 240.000 đơn → 4.800 (khối lượng +800) · phần do tỷ lệ tăng +3.840 → 4.000 + 800 + 3.840 = 8.640 ✓
 *   Loại shop: lớn (đồng bộ kho tự động) 120.000 → 130.000 đơn, hủy 1.800 (1,5%) → 2.860 (2,2%) · nhỏ (nhập kho tay) 80.000 → 110.000, hủy 2.200 (2,75%) → 5.780 (5,3%)
 *     Σ đơn 200.000 / 240.000, Σ hủy 4.000 / 8.640 ✓
 *   Hết hàng theo loại shop: lớn 700 → 900 · nhỏ 1.500 → 2.700 (Σ 2.200 / 3.600 ✓)
 *   Kẹt vận chuyển theo hãng (T9 → T10): X 300 → 2.900 · Y 400 → 540 · Z 300 → 400 (Σ 1.000 / 3.840 ✓)
 *   Thời gian lấy hàng trung vị (giờ) T9 → T10: X 18 → 52 · Y 20 → 22 · Z 19 → 21
 *   Tỷ lệ hủy theo tuần (% đơn, giả định đơn đều mỗi tuần): kẹt vận chuyển T9 0,5×4 · T10 0,5/1,2/2,1/2,6 (TB 1,6%) · hết hàng T9 1,1×4 · T10 1,3/1,4/1,6/1,7 (TB 1,5%)
 */
export const sellerCancelRateHypothesis: CaseStudy = {
  id: 'seller-cancel-rate-hypothesis',
  title: 'Shop hủy đơn tăng từ 2,0% lên 3,6%: hết hàng hay kẹt vận chuyển?',
  domain: 'ecommerce',
  level: 'junior',
  minutes: 11,
  skills: ['segmentation', 'operations', 'causal'],
  question:
    'Tỷ lệ đơn bị shop hủy tăng từ 2,0% lên 3,6% trong một tháng. Đây là vấn đề hết hàng của shop hay kẹt vận chuyển, và nên can thiệp ở đâu trước?',
  summary:
    'Chia tỷ lệ hủy theo lý do, loại shop, hãng vận chuyển và theo tuần để thành hai giả thuyết đối nhau, nêu dữ liệu loại trừ từng giả thuyết và chọn can thiệp theo mức đóng góp.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng: sàn, hãng vận chuyển và mọi con số đều là giả định để minh họa.* **Sàn S** có chỉ số "tỷ lệ hủy do shop" (đơn do shop hủy trước khi giao cho vận chuyển / tổng đơn đã thanh toán). Tháng 9 là 2,0% và tháng 10 là **3,6%**, trong khi đơn tăng từ 200.000 lên 240.000 vì có đợt sale 10.10. Ban vận hành có hai quan điểm: "shop nhập hàng không đủ cho sale" và "đơn vị vận chuyển bị quá tải nên shop không giao được". Chủ đề này liên quan trực tiếp tới trải nghiệm khách và phạt shop, nên cần nhận định có dữ liệu.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Đơn đã thanh toán', value: '240.000', delta: '+20,0%', tone: 'neutral', note: 'T9: 200.000' },
            { label: 'Đơn bị shop hủy', value: '8.640', delta: '+4.640', tone: 'negative', note: 'T9: 4.000' },
            { label: 'Tỷ lệ hủy do shop', value: '3,6%', delta: '+1,6 điểm %', tone: 'negative', note: 'T9: 2,0%' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi cần trả lời',
          md: 'Không phải "vì sao hủy tăng" nói chung, mà là: **phần tăng nằm ở lý do nào, nhóm shop nào, hãng nào, từ thời điểm nào** — để chọn một can thiệp có thể kiểm tra.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: tách khối lượng, tỷ lệ và lý do',
      blocks: [
        {
          kind: 'formula',
          expression: 'Số đơn hủy = Số đơn × Tỷ lệ hủy  ·  Tỷ lệ hủy = Σ (Tỷ lệ theo lý do)',
          note: 'Đơn tăng là một phần nhỏ của câu chuyện; phần lớn mức tăng phải đến từ **tỷ lệ**. Sau đó chia tỷ lệ theo lý do, rồi cắt từng lý do theo phân khúc (loại shop, hãng, thời gian) để ra giả thuyết.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Cầu nối**: bao nhiêu đơn hủy tăng thêm do đơn nhiều hơn, bao nhiêu do tỷ lệ tăng.',
            '**Chia theo lý do** và tính mức đóng góp vào phần tăng.',
            '**Cắt theo phân khúc và thời gian** để cho mỗi lý do một giả thuyết cụ thể.',
            '**Mỗi giả thuyết dự đoán gì**: nêu dữ liệu cần để bác bỏ, rồi chọn can thiệp.',
          ],
        },
        {
          kind: 'quiz',
          id: 'seller-cancel-rate-hypothesis-q1',
          question: 'Tháng sale đơn tăng 20%. Cách nào đúng để hiểu mức tăng 4.640 đơn hủy?',
          options: [
            {
              id: 'a',
              text: 'Đơn nhiều hơn thì hủy nhiều hơn nên mức tăng là bình thường.',
              explain: 'Chỉ khoảng 800 đơn (nếu giữ nguyên tỷ lệ 2,0%) là do đơn nhiều hơn. Phần còn lại +3.840 là do tỷ lệ tăng.',
            },
            {
              id: 'b',
              text: 'Tính cầu nối: giữ tỷ lệ 2,0% thì hủy 4.800, thực tế 8.640; phần chênh +3.840 là do tỷ lệ tăng, cần tìm nguyên nhân.',
              correct: true,
              explain: 'Đúng. Tách khối lượng và tỷ lệ trước khi giải thích, vì chỉ phần tỷ lệ phản ánh thay đổi hành vi hay vận hành.',
            },
            {
              id: 'c',
              text: 'Phạt toàn bộ shop có tỷ lệ hủy trên 3,6%.',
              explain: 'Đây là hành động, không phải phân tích. Chưa biết lý do hủy nên phạt dễ nhắm sai đối tượng.',
            },
          ],
        },
      ],
    },
    {
      id: 'reason',
      kind: 'analysis',
      title: 'Bước 1 — Lý do và loại shop: hai thủ phạm có tỷ trọng khác nhau',
      blocks: [
        {
          kind: 'table',
          title: 'Số đơn hủy theo lý do (T9 → T10)',
          columns: [
            { key: 'reason', label: 'Lý do' },
            { key: 'a', label: 'T9', align: 'right' },
            { key: 'b', label: 'T10', align: 'right' },
            { key: 'd', label: 'Tăng thêm', align: 'right' },
            { key: 'p', label: '% mức tăng', align: 'right' },
          ],
          rows: [
            { reason: 'Hết hàng', a: 2200, b: 3600, d: '+1.400', p: '30,2%' },
            { reason: 'Kẹt vận chuyển (không giao được cho hãng)', a: 1000, b: 3840, d: '+2.840', p: '61,2%' },
            { reason: 'Giá/thông tin sản phẩm sai', a: 400, b: 600, d: '+200', p: '4,3%' },
            { reason: 'Khác', a: 400, b: 600, d: '+200', p: '4,3%' },
            { reason: 'Tổng', a: 4000, b: 8640, d: '+4.640', p: '100%' },
          ],
          highlight: [{ row: 1, tone: 'negative' }, { row: 0, tone: 'warning' }],
          caption: 'Kẹt vận chuyển tăng gấp 3,8 lần (1.000 → 3.840) và chiếm 61,2% mức tăng; hết hàng tăng 1,6 lần.',
        },
        {
          kind: 'table',
          title: 'Tỷ lệ hủy theo loại shop',
          columns: [
            { key: 'seg', label: 'Loại shop' },
            { key: 'orders', label: 'Đơn T9 → T10', align: 'right' },
            { key: 'cancel', label: 'Hủy T9 → T10', align: 'right' },
            { key: 'rate', label: 'Tỷ lệ hủy', align: 'right' },
            { key: 'oos', label: 'Trong đó hết hàng', align: 'right' },
          ],
          rows: [
            { seg: 'Shop lớn (kho đồng bộ tự động)', orders: '120.000 → 130.000', cancel: '1.800 → 2.860', rate: '1,5% → 2,2%', oos: '700 → 900' },
            { seg: 'Shop nhỏ (nhập kho thủ công)', orders: '80.000 → 110.000', cancel: '2.200 → 5.780', rate: '2,8% → 5,3%', oos: '1.500 → 2.700' },
            { seg: 'Tổng', orders: '200.000 → 240.000', cancel: '4.000 → 8.640', rate: '2,0% → 3,6%', oos: '2.200 → 3.600' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
          caption: 'Shop nhỏ chiếm 46% đơn T10 nhưng 67% đơn bị hủy (5.780/8.640). Lưu ý: 2.200/80.000 = 2,75% làm tròn 2,8%.',
        },
        {
          kind: 'quiz',
          id: 'seller-cancel-rate-hypothesis-q2',
          question: 'Từ hai bảng, kết luận nào có cơ sở nhất ở bước này?',
          options: [
            {
              id: 'a',
              text: 'Nguyên nhân chính là shop nhỏ nhập hàng thiếu vì tỷ lệ hủy của họ cao nhất.',
              explain: 'Shop nhỏ hủy cao, nhưng hết hàng chỉ giải thích 30,2% mức tăng. Phần lớn mức tăng là lý do vận chuyển; chưa biết nó nằm ở shop nào.',
            },
            {
              id: 'b',
              text: 'Lý do "kẹt vận chuyển" đóng góp nhiều nhất vào mức tăng (61%); còn cần cắt nó theo hãng và thời gian trước khi nói là lỗi của shop hay của vận chuyển.',
              correct: true,
              explain: 'Đúng. Đây là bước hẹp dần: chọn lý do đóng góp lớn nhất rồi cắt tiếp, thay vì chọn giả thuyết dễ tin.',
            },
            {
              id: 'c',
              text: 'Hết hàng chỉ là lý do phụ, không cần quan tâm.',
              explain: 'Hết hàng vẫn tăng 1,6 lần (+1.400) và tập trung ở shop nhỏ; nó là một giả thuyết riêng cần xử lý, chỉ là nhỏ hơn.',
            },
          ],
        },
      ],
    },
    {
      id: 'carrier',
      kind: 'analysis',
      title: 'Bước 2 — Hãng vận chuyển và thời gian: giả thuyết nào bị loại?',
      blocks: [
        {
          kind: 'table',
          title: '"Kẹt vận chuyển" theo hãng và thời gian lấy hàng',
          columns: [
            { key: 'c', label: 'Hãng' },
            { key: 'cancel', label: 'Hủy vì vận chuyển T9 → T10', align: 'right' },
            { key: 'pickup', label: 'Thời gian lấy hàng trung vị (giờ)', align: 'right' },
          ],
          rows: [
            { c: 'Hãng X', cancel: '300 → 2.900', pickup: '18 → 52' },
            { c: 'Hãng Y', cancel: '400 → 540', pickup: '20 → 22' },
            { c: 'Hãng Z', cancel: '300 → 400', pickup: '19 → 21' },
            { c: 'Tổng', cancel: '1.000 → 3.840', pickup: '' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
          caption: 'Hãng X chiếm 2.900/3.840 = 75,5% số hủy vì vận chuyển; Y và Z gần như bình thường dù đơn tăng.',
        },
        {
          kind: 'chart',
          title: 'Tỷ lệ hủy theo tuần (% đơn): kẹt vận chuyển và hết hàng',
          type: 'line',
          xKey: 'week',
          unit: '%',
          series: [
            { key: 'ship', label: 'Kẹt vận chuyển' },
            { key: 'oos', label: 'Hết hàng' },
          ],
          data: [
            { week: 'T9-1', ship: 0.5, oos: 1.1 },
            { week: 'T9-2', ship: 0.5, oos: 1.1 },
            { week: 'T9-3', ship: 0.5, oos: 1.1 },
            { week: 'T9-4', ship: 0.5, oos: 1.1 },
            { week: 'T10-1', ship: 0.5, oos: 1.3 },
            { week: 'T10-2', ship: 1.2, oos: 1.4 },
            { week: 'T10-3', ship: 2.1, oos: 1.6 },
            { week: 'T10-4', ship: 2.6, oos: 1.7 },
          ],
          marker: { x: 'T10-2', label: 'Hãng X quá tải' },
          caption: 'Kẹt vận chuyển leo dốc từ tuần 2 tháng 10 và vẫn tăng; hết hàng lên nhẹ đều, khớp với đợt sale. Số liệu tuần giả định đơn đều mỗi tuần.',
        },
        {
          kind: 'table',
          title: 'Mỗi giả thuyết dự đoán gì và dữ liệu nói gì',
          columns: [
            { key: 'h', label: 'Giả thuyết' },
            { key: 'predict', label: 'Nếu đúng, ta sẽ thấy' },
            { key: 'seen', label: 'Dữ liệu' },
            { key: 'v', label: 'Kết luận' },
          ],
          rows: [
            {
              h: 'H1. Hãng X quá tải',
              predict: 'Hủy vì vận chuyển tập trung ở X, thời gian lấy hàng của X dài ra, tăng từ giữa tháng',
              seen: 'X: 75,5% số hủy, lấy hàng 18 → 52 giờ, tăng từ tuần 2',
              v: 'Ủng hộ mạnh, giải thích khoảng 2.600/2.840',
            },
            {
              h: 'H2. Shop nhỏ nhập thiếu cho sale',
              predict: 'Hết hàng tập trung ở shop nhỏ, tăng đúng ngày sale',
              seen: 'Shop nhỏ: hết hàng 1.500 → 2.700 (+1.200, tức 86% mức tăng hết hàng +1.400)',
              v: 'Ủng hộ cho phần hết hàng (30% mức tăng)',
            },
            {
              h: 'H3. Lỗi ghi nhận lý do hủy (gán nhầm)',
              predict: 'Số lý do "khác" tăng bất thường hoặc lý do đổi đột ngột',
              seen: '"Khác" chỉ +200 (tỷ trọng 10% → 6,9%), không bất thường; chưa đối chiếu với nhật ký lý do từng đơn',
              v: 'Chưa loại trừ hẳn, cần kiểm tra',
            },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
        },
        {
          kind: 'quiz',
          id: 'seller-cancel-rate-hypothesis-q3',
          question: 'Dữ liệu nào bổ sung hữu ích nhất để biết hủy vì vận chuyển là lỗi của hãng X chứ không phải của shop?',
          options: [
            {
              id: 'a',
              text: 'Điểm đánh giá của người mua với các shop bị hủy.',
              explain: 'Đánh giá cho biết hậu quả, không cho biết ai chịu trách nhiệm cho việc đơn không được bàn giao.',
            },
            {
              id: 'b',
              text: 'Với các đơn hủy vì vận chuyển: thời điểm shop sẵn sàng giao, thời điểm hãng X xác nhận lấy hàng, và tỷ lệ này ở cùng shop khi dùng hãng Y/Z.',
              correct: true,
              explain: 'Đúng. So sánh cùng shop giữa các hãng tách được hành vi shop khỏi năng lực hãng, một dạng đối chứng tự nhiên.',
            },
            {
              id: 'c',
              text: 'Doanh thu trung bình của shop.',
              explain: 'Doanh thu không giúp phân biệt nguyên nhân hủy.',
            },
          ],
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
          md: '**Kết luận:** Phần lớn mức tăng (khoảng 2.600/4.640 = 56%) là do **hãng X quá tải**; thêm khoảng 30% do shop nhỏ hết hàng trong đợt sale. Nên xử lý theo thứ tự: tạm chuyển luồng đơn khỏi X, rồi giải quyết tồn kho shop nhỏ. Không phạt shop trước khi tách được phần lỗi hãng.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Chuyển bớt luồng lấy hàng khỏi hãng X sang Y/Z ở các khu vực bị chậm; yêu cầu hãng X báo cáo năng lực và kế hoạch phục hồi',
              owner: 'Trưởng vận hành + quản lý quan hệ hãng',
              metric: 'Thời gian lấy hàng trung vị của X; hủy vì vận chuyển/đơn',
              threshold: 'Lấy hàng X ≤ 24 giờ; hủy vì vận chuyển ≤ 0,6% đơn trong 2 tuần',
            },
            {
              action: 'Không tính hủy do vận chuyển vào điểm phạt shop cho tới khi có bằng chứng lỗi shop',
              owner: 'Trưởng chính sách shop',
              metric: 'Số shop bị phạt oan (khiếu nại được chấp nhận)',
              threshold: 'Khiếu nại được chấp nhận < 5%',
            },
            {
              action: 'Cảnh báo tồn kho và giới hạn số lượng bán cho shop nhỏ trong sale; đề xuất đồng bộ kho tự động',
              owner: 'Product shop + Account manager',
              metric: 'Hết hàng/đơn của shop nhỏ',
              threshold: 'Từ 2,5% (T10: 2.700/110.000) xuống ≤ 1,9% (mức T9: 1.500/80.000)',
            },
            {
              action: 'Thêm báo cáo tỷ lệ hủy theo lý do × loại shop × hãng × tuần và kiểm nhật ký lý do hủy',
              owner: 'Data/Analytics',
              metric: 'Tỷ lệ hủy theo lý do; tỷ lệ lý do "khác"',
              threshold: 'Báo cáo tuần; lý do "khác" ≤ 8% số hủy (đang 600/8.640 = 6,9%)',
            },
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
            {
              title: 'Gán lỗi cho nhóm có tỷ lệ cao nhất',
              why: 'Shop nhỏ có tỷ lệ hủy cao nhất nhưng đóng góp lớn nhất vào *mức tăng* lại là lý do vận chuyển. "Cao nhất" và "tăng nhiều nhất" khác nhau.',
              instead: 'Xếp theo đóng góp vào mức tăng, không chỉ theo mức tuyệt đối.',
            },
            {
              title: 'Tin vào lý do hủy do shop tự chọn',
              why: 'Shop có động cơ chọn lý do không bị phạt; "hết hàng" có thể che việc không giao được cho hãng.',
              instead: 'Đối chiếu với sự kiện hệ thống (thời điểm sẵn sàng giao, xác nhận lấy hàng) trước khi kết luận.',
            },
            {
              title: 'Bỏ qua chiều thời gian',
              why: 'Một chỉ số tháng che đi việc vấn đề mới bắt đầu giữa tháng và vẫn đang tăng.',
              instead: 'Vẽ theo tuần, đánh dấu sự kiện, rồi quyết định ưu tiên theo xu hướng hiện tại.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Tách mức tăng thành khối lượng và tỷ lệ, rồi chia tỷ lệ theo lý do trước khi giải thích.',
    'Mỗi giả thuyết phải nêu được dữ liệu sẽ xuất hiện nếu nó đúng; so cùng một shop giữa các hãng là cách đối chứng rẻ.',
    'Ưu tiên can thiệp theo đóng góp vào mức tăng và xu hướng hiện tại, không theo nhóm có tỷ lệ tuyệt đối cao nhất.',
  ],
  references: [
    {
      title: 'Root-cause analysis',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Root_cause_analysis',
      note: 'Tổng quan phân tích nguyên nhân gốc, hỗ trợ cách chia nhỏ vấn đề thành giả thuyết kiểm tra được.',
    },
    {
      title: 'What is a Pareto Chart?',
      publisher: 'ASQ (American Society for Quality)',
      url: 'https://asq.org/quality-resources/pareto',
      note: 'Hướng dẫn biểu đồ Pareto: xếp nguyên nhân theo mức đóng góp để chọn ưu tiên, như bảng đóng góp vào mức tăng ở bước 1.',
    },
    {
      title: 'Order fulfillment',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Order_fulfillment',
      note: 'Mô tả các bước xử lý đơn từ nhận đơn đến bàn giao vận chuyển, giúp xác định điểm xảy ra "kẹt".',
    },
  ],
}
