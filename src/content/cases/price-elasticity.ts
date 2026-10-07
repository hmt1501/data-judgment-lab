import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — test giá 4 tuần trên người dùng mới, chia ngẫu nhiên theo user tại màn hình paywall:
 *   Mỗi nhánh 50.000 người xem paywall (40% organic = 20.000, 60% quảng cáo trả phí = 30.000).
 *   Giá tháng: đối chứng 100.000 đ · thử nghiệm 120.000 đ (+20%).
 *   Đăng ký: đối chứng 2.000 (4,00%) · thử nghiệm 1.700 (3,40%) → −15,0%, độ co giãn −15/20 = −0,75
 *     Organic: 1.200 (6,00%) → 1.120 (5,60%) = −6,7% → −0,33 · Quảng cáo: 800 (2,67%) → 580 (1,93%) = −27,5% → −1,38
 *     KTC 95% (xấp xỉ chuẩn): tổng −20,8% … −9,2% (e −1,04 … −0,46) · organic −14,3% … +1,0% · quảng cáo −36,5% … −18,5%
 *   Doanh thu tháng 1: 2.000 × 100k = 200 tr · 1.700 × 120k = 204 tr (+2,0%)
 *     Organic 120 → 134,4 · Quảng cáo 80 → 69,6
 *   Biên đóng góp/thuê bao/tháng = giá × 70% (phí nền tảng giả định 30%) − 10.000 đ: 60.000 → 74.000 (+23,3%)
 *     CM tháng 1: 2.000 × 60k = 120 tr · 1.700 × 74k = 125,8 tr (+4,8%)
 *   Churn tháng (2 kỳ gia hạn đầu): organic 6,0% → 6,5% · quảng cáo 11,0% → 14,0%
 *     Bình quân gia quyền: (1.200×6% + 800×11%)/2.000 = 8,0% → (1.120×6,5% + 580×14%)/1.700 = 9,06%
 *   LTV (biên đóng góp) = CM/tháng ÷ churn:
 *     Organic: 60k/6% = 1.000.000 đ × 1.200 = 1.200,0 tr → 74k/6,5% = 1.138.500 đ × 1.120 = 1.275,1 tr (+6,3%)
 *     Quảng cáo: 60k/11% = 545.500 đ × 800 = 436,4 tr → 74k/14% = 528.600 đ × 580 = 306,6 tr (−29,7%)
 *     Tổng: 1.636,4 → 1.581,7 tr (−3,3%) · Ngưỡng hòa vốn churn organic ở 120k: 1.120 × 74k / 1.200 tr = 6,9%
 *   Kịch bản "nếu giữ 100k cho quảng cáo": 1.275,1 + 436,4 = 1.711,5 tr (+4,6%)
 *   Hòa vốn: doanh thu cần ΔQ ≥ 1/1,2 − 1 = −16,7% · CM cần ΔQ ≥ 60/74 − 1 = −18,9%
 */
export const priceElasticity: CaseStudy = {
  id: 'price-elasticity',
  title: 'Tăng giá gói tháng 20%: doanh thu tăng, giá trị khách giảm?',
  domain: 'mobile',
  level: 'senior',
  minutes: 15,
  skills: ['unit-economics', 'experiment', 'segmentation', 'tradeoff'],
  question:
    'Team đề xuất tăng giá gói tháng từ 100.000 đ lên 120.000 đ. Test giá cho thấy doanh thu tháng đầu tăng 2%. Có nên tăng giá cho toàn bộ người dùng mới không?',
  summary:
    'Đọc kết quả test giá có ngẫu nhiên hóa qua độ co giãn của cầu, rồi đi từ doanh thu sang biên đóng góp và LTV có tính churn, tách theo phân khúc để thấy mức tăng giá có lợi ở đâu và hại ở đâu.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng.* Bạn là analyst của một ứng dụng học ngoại ngữ dạng thuê bao. Head of Monetization chạy test giá 4 tuần: người dùng mới khi tới màn hình paywall được chia **ngẫu nhiên theo user** vào giá 100.000 đ/tháng (đối chứng) hoặc 120.000 đ/tháng (thử nghiệm). Thuê bao cũ không bị ảnh hưởng. Slide đề xuất của team:',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Người xem paywall/nhánh', value: '50.000', note: 'chia 50/50, không lệch mẫu' },
            { label: 'Tỷ lệ đăng ký', value: '3,40%', delta: 'từ 4,00% (−15%)', tone: 'negative' },
            { label: 'Doanh thu tháng 1', value: '204 tr đ', delta: '+2,0%', tone: 'positive' },
            { label: 'Churn tháng (2 kỳ đầu)', value: '9,1%', delta: 'từ 8,0%', tone: 'warning' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu',
          md: 'Không dừng ở "doanh thu tăng 2%". Cần trả lời: **(1)** người dùng nhạy với giá đến đâu (độ co giãn, kèm khoảng tin cậy), **(2)** tăng giá làm tăng hay giảm **giá trị trọn đời** của một nhóm người dùng mới, **(3)** khác biệt theo phân khúc gợi ý phương án nào tốt hơn việc tăng giá đồng loạt.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: doanh thu → biên đóng góp → LTV',
      blocks: [
        {
          kind: 'formula',
          expression: 'Độ co giãn theo giá ε = %ΔSố lượng / %ΔGiá     ·     |ε| < 1: cầu kém co giãn (tăng giá → doanh thu tăng)     ·     |ε| > 1: co giãn',
          note: 'Với thuê bao, "số lượng" là số người đăng ký trên mỗi người xem paywall. Nhưng doanh thu tăng chưa có nghĩa là giá trị tăng: còn phí nền tảng, chi phí biến đổi và thời gian khách ở lại.',
        },
        {
          kind: 'formula',
          expression: 'LTV mỗi nhóm = Số thuê bao × Biên đóng góp/tháng ÷ Churn tháng',
          note: 'Biên đóng góp/tháng = giá × 70% (phí nền tảng giả định 30%) − 10.000 đ chi phí biến đổi. Chia cho churn là xấp xỉ "số tháng ở lại trung bình" khi churn đều; trong thực tế nên giới hạn 24 tháng và chiết khấu.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Kiểm tra test hợp lệ**: chia ngẫu nhiên theo user, tỷ lệ 50/50 đúng, không có thuê bao cũ lẫn vào, người dùng không thấy hai mức giá.',
            '**Ước lượng độ co giãn kèm khoảng tin cậy**, không chỉ con số điểm.',
            '**Đi qua 3 tầng giá trị**: doanh thu tháng 1 → biên đóng góp → LTV có churn.',
            '**Tách phân khúc** có cơ chế khác nhau (organic vs quảng cáo trả phí) để tìm phương án tốt hơn tăng giá đồng loạt.',
            '**Đặt guardrail**: các chỉ số không được xấu đi dù metric chính tốt (hoàn tiền, đánh giá 1 sao, churn).',
          ],
        },
        {
          kind: 'quiz',
          id: 'price-elasticity-q1',
          question: 'Giá +20%, tỷ lệ đăng ký −15% (KTC 95%: −20,8% … −9,2%). Kết luận nào đúng?',
          options: [
            {
              id: 'a',
              text: 'ε ≈ −0,75: cầu kém co giãn, nên tăng giá chắc chắn tốt cho doanh nghiệp.',
              explain: 'ε ≈ −0,75 đúng là kém co giãn ở điểm ước lượng, nên doanh thu tháng 1 tăng. Nhưng (1) khoảng tin cậy chạm tới −1,04, tức doanh thu có thể giảm, và (2) doanh thu tháng 1 chưa tính churn, tầng quyết định thật sự là LTV.',
            },
            {
              id: 'b',
              text: 'ε ≈ −0,75 (khoảng −1,04 … −0,46): doanh thu tháng 1 nhiều khả năng tăng nhẹ, nhưng chưa đủ để quyết định vì chưa tính biên đóng góp và churn.',
              correct: true,
              explain: 'Đúng. Hòa vốn doanh thu cần lượng đăng ký giảm không quá 16,7%; điểm ước lượng −15% nằm trong vùng an toàn nhưng cận dưới −20,8% thì không. Câu hỏi đúng tiếp theo: tăng giá có làm khách ở lại ngắn hơn không?',
            },
            {
              id: 'c',
              text: 'Lượng đăng ký giảm 15% nên tăng giá là thất bại.',
              explain: 'Chỉ nhìn số lượng là bỏ qua nửa còn lại: mỗi thuê bao trả nhiều hơn 20% và biên đóng góp tăng 23%. Phải cân hai hiệu ứng ngược chiều, không đọc riêng từng cái.',
            },
          ],
        },
      ],
    },
    {
      id: 'layers',
      kind: 'analysis',
      title: 'Bước 1 — Ba tầng giá trị: con số "tốt" đổi dấu khi tính churn',
      blocks: [
        {
          kind: 'table',
          title: 'Kết quả theo nhánh (mỗi nhánh 50.000 người xem paywall)',
          columns: [
            { key: 'metric', label: 'Chỉ số' },
            { key: 'control', label: '100.000 đ', align: 'right' },
            { key: 'test', label: '120.000 đ', align: 'right' },
            { key: 'change', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { metric: 'Thuê bao mới', control: '2.000', test: '1.700', change: '−15,0%' },
            { metric: 'Doanh thu tháng 1', control: '200,0 tr', test: '204,0 tr', change: '+2,0%' },
            { metric: 'Biên đóng góp/thuê bao/tháng', control: '60.000 đ', test: '74.000 đ', change: '+23,3%' },
            { metric: 'Biên đóng góp tháng 1', control: '120,0 tr', test: '125,8 tr', change: '+4,8%' },
            { metric: 'Churn tháng (bình quân)', control: '8,0%', test: '9,06%', change: '+1,06 điểm' },
            { metric: 'LTV cả nhóm (tổng phân khúc)', control: '1.636,4 tr', test: '1.581,7 tr', change: '−3,3%' },
          ],
          highlight: [
            { row: 1, tone: 'positive' },
            { row: 5, tone: 'negative' },
          ],
          caption: 'LTV cả nhóm tính bằng tổng LTV từng phân khúc ở Bước 2 (không dùng churn bình quân, vì LTV không tuyến tính theo churn).',
        },
        {
          kind: 'chart',
          title: 'Thay đổi do tăng giá theo từng tầng giá trị',
          type: 'bar',
          xKey: 'layer',
          unit: '%',
          series: [{ key: 'delta', label: 'Thử nghiệm so với đối chứng' }],
          data: [
            { layer: 'Thuê bao mới', delta: -15.0 },
            { layer: 'Doanh thu tháng 1', delta: 2.0 },
            { layer: 'Biên đóng góp tháng 1', delta: 4.8 },
            { layer: 'LTV (có churn)', delta: -3.3 },
          ],
          caption: 'Càng đi gần tới giá trị thật, kết luận càng thay đổi: doanh thu và biên tháng 1 tăng, nhưng LTV giảm vì khách ở giá cao rời đi nhanh hơn.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Churn đo trên **2 kỳ gia hạn đầu**, mẫu còn nhỏ và chưa phản ánh hành vi dài hạn. Hãy coi LTV −3,3% là "chưa chứng minh được tăng giá có lợi" chứ không phải "chắc chắn có hại". Trình bày điều này rõ ràng quan trọng hơn việc chọn phía.',
        },
      ],
    },
    {
      id: 'segments',
      kind: 'analysis',
      title: 'Bước 2 — Độ co giãn theo phân khúc: hai nhóm phản ứng ngược nhau',
      blocks: [
        {
          kind: 'table',
          title: 'Độ co giãn và LTV theo kênh đến',
          columns: [
            { key: 'seg', label: 'Phân khúc' },
            { key: 'conv', label: 'Tỷ lệ đăng ký (100k → 120k)', align: 'right' },
            { key: 'elast', label: 'ε (KTC 95%)', align: 'right' },
            { key: 'churn', label: 'Churn tháng', align: 'right' },
            { key: 'ltv', label: 'LTV nhóm (tr đ)', align: 'right' },
          ],
          rows: [
            { seg: 'Organic / giới thiệu (20.000/nhánh)', conv: '6,00% → 5,60%', elast: '−0,33 (−0,72 … +0,05)', churn: '6,0% → 6,5%', ltv: '1.200,0 → 1.275,1 (+6,3%)' },
            { seg: 'Quảng cáo trả phí (30.000/nhánh)', conv: '2,67% → 1,93%', elast: '−1,38 (−1,82 … −0,93)', churn: '11,0% → 14,0%', ltv: '436,4 → 306,6 (−29,7%)' },
          ],
          highlight: [
            { row: 0, tone: 'positive' },
            { row: 1, tone: 'negative' },
          ],
          caption: 'Người tự tìm đến app ít nhạy giá; người đến từ quảng cáo vừa ít đăng ký hơn vừa hủy nhanh hơn khi giá cao.',
        },
        {
          kind: 'chart',
          title: 'LTV/thuê bao theo phân khúc',
          type: 'bar',
          xKey: 'seg',
          unit: ' nghìn đ',
          series: [
            { key: 'control', label: '100.000 đ' },
            { key: 'test', label: '120.000 đ' },
          ],
          data: [
            { seg: 'Organic', control: 1000, test: 1138.5 },
            { seg: 'Quảng cáo', control: 545.5, test: 528.6 },
          ],
          caption: 'Ở organic, giá cao bù được churn tăng nhẹ. Ở quảng cáo, LTV/thuê bao đã giảm, cộng thêm 27,5% ít thuê bao hơn.',
        },
        {
          kind: 'quiz',
          id: 'price-elasticity-q2',
          question: 'Độ co giãn organic là −0,33 nhưng KTC 95% là −0,72 … +0,05 (chứa 0). Nên đọc kết quả này thế nào?',
          options: [
            {
              id: 'a',
              text: 'Không có ý nghĩa thống kê, nên coi như organic không phản ứng với giá và tăng giá cho nhóm này là an toàn tuyệt đối.',
              explain: '"Không có ý nghĩa thống kê" không có nghĩa là "không có tác động". Cận dưới −0,72 vẫn là một mức nhạy giá đáng kể. Và LTV organic còn phụ thuộc vào churn: chỉ cần churn ở giá 120k vượt 6,9% là lợi thế biến mất.',
            },
            {
              id: 'b',
              text: 'Organic rõ ràng kém nhạy giá hơn quảng cáo (hai khoảng gần như không chồng nhau), nhưng mức tăng LTV +6,3% của organic còn mong manh: nó phụ thuộc vào churn 6,5% chỉ đo trên 2 kỳ.',
              correct: true,
              explain: 'Đúng. Khác biệt **giữa** hai phân khúc là tín hiệu mạnh và có cơ chế hợp lý (ý định mua khác nhau). Còn độ lớn chính xác cho organic thì chưa chắc: hòa vốn ở churn 6,9%, chỉ cao hơn ước lượng 0,4 điểm. Đây là lý do cần guardrail churn khi triển khai.',
            },
            {
              id: 'c',
              text: 'Kết quả phân khúc không dùng được vì test không được thiết kế để phân tích theo phân khúc.',
              explain: 'Kênh đến được ghi nhận **trước** khi người dùng thấy giá, nên tách theo kênh vẫn giữ được ngẫu nhiên hóa trong mỗi phân khúc. Rủi ro thật là đào bới quá nhiều phân khúc rồi chọn cái đẹp; ở đây chỉ có một cách chia, có giả thuyết từ trước.',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Không định giá khác nhau theo kênh một cách "lén lút"',
          md: 'Hiển thị giá niêm yết khác nhau cho cùng một sản phẩm tùy kênh có thể vi phạm chính sách cửa hàng ứng dụng và làm mất lòng tin. Cách hợp lệ là dùng **ưu đãi giới thiệu** (introductory offer) hoặc **mã khuyến mãi** gắn với chiến dịch quảng cáo, trên cùng một giá niêm yết. Nếu giữ được hành vi nhóm quảng cáo như ở giá 100k, LTV cả nhóm có thể đạt ≈ 1.711,5 tr (+4,6%) — đây là giả thuyết cần test, chưa phải kết quả.',
        },
      ],
    },
    {
      id: 'guardrails',
      kind: 'analysis',
      title: 'Bước 3 — Guardrail và độ nhạy của quyết định',
      blocks: [
        {
          kind: 'table',
          title: 'Các ngưỡng làm đổi kết luận',
          columns: [
            { key: 'item', label: 'Đại lượng' },
            { key: 'now', label: 'Ước lượng hiện tại', align: 'right' },
            { key: 'breakeven', label: 'Ngưỡng hòa vốn', align: 'right' },
            { key: 'read', label: 'Đọc thế nào' },
          ],
          rows: [
            { item: 'Giảm lượng đăng ký (doanh thu)', now: '−15,0%', breakeven: '−16,7%', read: 'Sát ngưỡng; cận dưới −20,8% đã vượt' },
            { item: 'Giảm lượng đăng ký (biên đóng góp)', now: '−15,0%', breakeven: '−18,9%', read: 'Có biên an toàn hơn nhờ chi phí cố định/thuê bao' },
            { item: 'Churn organic ở giá 120k', now: '6,5%', breakeven: '6,9%', read: 'Chỉ cách 0,4 điểm, cần theo dõi chặt' },
            { item: 'Tỷ lệ hoàn tiền 7 ngày', now: '1,2% (từ 0,8%)', breakeven: 'Guardrail ≤ 1,5%', read: 'Tăng nhưng trong ngưỡng' },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: 'Quyết định giá tốt luôn kèm "nếu số X vượt ngưỡng Y thì quay lại". Thiếu nó, một quyết định đúng hôm nay có thể sai sau 3 tháng mà không ai biết.',
        },
        {
          kind: 'quiz',
          id: 'price-elasticity-q3',
          question: 'Head of Monetization cần quyết định trong tuần này. Khuyến nghị nào tốt nhất?',
          options: [
            {
              id: 'a',
              text: 'Tăng giá lên 120.000 đ cho toàn bộ người dùng mới và cả thuê bao hiện tại, vì doanh thu tháng 1 tăng.',
              explain: 'LTV cả nhóm đang −3,3%, và thuê bao cũ chưa được test: tăng giá với họ thường phải xin đồng ý trên cửa hàng ứng dụng và có rủi ro churn hàng loạt. Đây là mở rộng một kết quả chưa có lợi ra nhóm chưa được đo.',
            },
            {
              id: 'b',
              text: 'Giữ nguyên 100.000 đ và đóng chủ đề giá vì LTV giảm.',
              explain: 'Bỏ qua tín hiệu quan trọng nhất: organic có vẻ kém nhạy giá và LTV +6,3%. Giữ nguyên không sai, nhưng bỏ lỡ cơ hội tăng ≈ 4–5% LTV nếu tách được nhóm quảng cáo bằng ưu đãi.',
            },
            {
              id: 'c',
              text: 'Chưa tăng đồng loạt. Chạy test vòng 2 có 3 nhánh (100k; 120k; 120k + ưu đãi tháng đầu cho người dùng từ chiến dịch quảng cáo), quyết định theo LTV 3 tháng, giữ nguyên giá cho thuê bao hiện tại, và đặt guardrail churn/hoàn tiền.',
              correct: true,
              explain: 'Đúng. Phương án này giữ giá trị hiện tại an toàn, kiểm chứng giả thuyết phân khúc bằng một thiết kế hợp lệ, và chọn đúng metric quyết định (LTV có churn) thay vì doanh thu tháng 1. Guardrail cho biết khi nào phải dừng.',
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
          md: '**Kết luận:** Tăng giá 20% làm doanh thu tháng 1 +2% và biên tháng 1 +4,8%, nhưng **LTV của nhóm người dùng mới −3,3%** vì nhóm đến từ quảng cáo rất nhạy giá (ε ≈ −1,38) và hủy nhanh hơn (churn 11% → 14%). Nhóm organic ngược lại có lợi (LTV +6,3%), nhưng mỏng manh vì churn hòa vốn chỉ 6,9%. **Không tăng giá đồng loạt**; test tiếp phương án giá 120k kèm ưu đãi cho người dùng từ chiến dịch quảng cáo.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Chạy test vòng 2 trên người dùng mới, 3 nhánh: 100k · 120k · 120k + ưu đãi tháng đầu 79.000 đ cho người dùng đến từ chiến dịch quảng cáo; 6 tuần, ≥ 50.000 người xem paywall/nhánh',
              owner: 'Head of Monetization',
              metric: 'LTV biên đóng góp dự phóng sau 3 kỳ gia hạn / người xem paywall',
              threshold: 'Chọn nhánh có cận dưới KTC 90% của ΔLTV > 0 so với 100k',
            },
            {
              action: 'Giữ nguyên giá cho thuê bao hiện tại; mọi thay đổi với họ là một quyết định riêng có test và thông báo riêng',
              owner: 'Product + CSKH',
              metric: 'Churn thuê bao hiện tại',
              threshold: 'Không đổi so với 3 tháng trước (±0,5 điểm)',
            },
            {
              action: 'Thiết lập guardrail tự động cho mọi nhánh giá cao: churn organic, tỷ lệ hoàn tiền 7 ngày, tỷ lệ đánh giá 1 sao nhắc đến giá',
              owner: 'Data/Analytics',
              metric: 'Churn organic ở giá 120k · hoàn tiền 7 ngày',
              threshold: 'Dừng nhánh nếu churn organic > 6,9% hoặc hoàn tiền > 1,5% trong 2 tuần liên tiếp',
            },
            {
              action: 'Chuẩn hóa mô hình LTV dùng cho quyết định giá: giới hạn 24 tháng, chiết khấu, tính theo phân khúc',
              owner: 'Data/Analytics + Finance',
              metric: 'Sai lệch LTV dự phóng vs thực tế của cohort 6 tháng',
              threshold: '≤ 10%',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Test giá đã làm đúng phần khó nhất (ngẫu nhiên hóa), nhưng team đọc nó bằng **metric sai tầng**. Chuyển từ doanh thu tháng 1 sang LTV có churn lật ngược kết luận; tách phân khúc biến một quyết định "có/không" thành một phương án tốt hơn cả hai. Quyết định được đóng khung bằng **khoảng và ngưỡng** — doanh nghiệp biết mình đang đặt cược bao nhiêu và khi nào phải quay lại.',
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
              title: 'Chấm điểm test giá bằng doanh thu ngắn hạn',
              why: 'Giá cao làm doanh thu tháng đầu dễ đẹp, trong khi tác động lên churn chỉ hiện ra sau vài kỳ gia hạn. Ở đây doanh thu +2% nhưng LTV −3,3%.',
              instead: 'Dùng biên đóng góp và LTV có churn làm metric quyết định, chạy test đủ lâu để quan sát ít nhất 2–3 kỳ gia hạn, và báo cáo cả khoảng tin cậy.',
            },
            {
              title: 'Một độ co giãn cho mọi người dùng',
              why: 'Độ co giãn trung bình −0,75 che hai nhóm rất khác nhau: organic −0,33 và quảng cáo −1,38. Quyết định theo trung bình bỏ lỡ phương án tốt hơn cho cả hai.',
              instead: 'Định nghĩa trước một số ít phân khúc có cơ chế khác nhau (kênh đến, quốc gia, gói), đọc độ co giãn từng nhóm và kiểm chứng phương án phân khúc bằng test riêng.',
            },
            {
              title: 'Ngoại suy từ người dùng mới sang thuê bao hiện tại',
              why: 'Thuê bao hiện tại đã "neo" ở giá cũ; tăng giá với họ thường cần đồng ý lại trên cửa hàng ứng dụng và có thể gây churn hàng loạt — hoàn toàn khác người mới chỉ thấy một mức giá.',
              instead: 'Coi thay đổi giá cho thuê bao hiện tại là một quyết định riêng, với test, thông điệp và guardrail riêng.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Độ co giãn cho biết doanh thu ngắn hạn sẽ đi về đâu, nhưng quyết định giá thuê bao phải dựa trên biên đóng góp và LTV có churn.',
    'Đọc độ co giãn theo phân khúc có cơ chế khác nhau; trung bình có thể che một nhóm có lợi và một nhóm bị hại.',
    'Trình bày quyết định giá bằng khoảng tin cậy, ngưỡng hòa vốn và guardrail, kèm thí nghiệm tiếp theo cho phương án tốt hơn.',
  ],
  references: [
    {
      title: 'Price elasticity of demand',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Price_elasticity_of_demand',
      note: 'Định nghĩa, cách tính (điểm, arc/midpoint) và quan hệ giữa độ co giãn với doanh thu.',
    },
    {
      title: 'Auto-renewable Subscriptions',
      publisher: 'Apple Developer — App Store',
      url: 'https://developer.apple.com/app-store/subscriptions/',
      note: 'Quy định về tăng giá thuê bao (cần người dùng đồng ý), ưu đãi giới thiệu và mã khuyến mãi.',
    },
    {
      title: 'Trustworthy Online Controlled Experiments',
      publisher: 'Kohavi, Tang & Xu (experimentguide.com)',
      url: 'https://experimentguide.com/',
      note: 'Thiết kế thí nghiệm, guardrail metric và chọn metric phản ánh giá trị dài hạn (OEC).',
    },
  ],
}
