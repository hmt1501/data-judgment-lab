import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — một tháng, một hãng vận chuyển (hãng X), đơn có cam kết giao, đã kiểm tra khớp nhau:
 *   Đối soát: 50.000 đơn. Platform ghi đúng hẹn 46.000 (92,0%) · Hãng báo 47.500 (95,0%) → lệch 1.500 đơn (3,0 điểm %)
 *     Nguyên nhân: dừng đồng hồ theo giờ scan "giao" thay vì POD hợp lệ 600 · "khách vắng" bị hãng coi là đạt 500
 *     · hồ sơ bàn giao sau cut-off 14:00 tính hạn từ hôm sau 250 · lệch múi giờ ngày UTC/UTC+7 150 → 600 + 500 + 250 + 150 = 1.500 ✓
 *   Theo hợp đồng v1.1: hãng đúng 600 + 200 (khách vắng có 2 cuộc gọi ghi log) + 250 + 150 = 1.200; 300 "khách vắng" thiếu log vẫn là trễ
 *     → đúng hẹn chốt 46.000 + 1.200 = 47.200 = 94,4%
 *   Thang thưởng/phạt (phí vận chuyển tháng 4,0 tỷ đ): ≥ 96,0% thưởng 1% (40 triệu) · 94,0–<96,0% không · 92,0–<94,0% phạt 1% (40 triệu) · < 92,0% phạt 2% (80 triệu)
 *     Số platform 92,0% → phạt 40 triệu · số hãng 95,0% → không · số chốt 94,4% → không
 *   Gaming "khách vắng" khi thang có thưởng (hợp đồng v1.0 loại các đơn này khỏi mẫu số):
 *     Trước: 50.000 đơn · loại 1.500 (3,0%) · mẫu số 48.500 · đúng hẹn 45.600 → 94,0% · tính trên tổng đơn 45.600/50.000 = 91,2%
 *     Sau:   50.000 đơn · loại 3.000 (6,0%) · mẫu số 47.000 · đúng hẹn 45.600 → 97,0% (thưởng 40 triệu) · tính trên tổng đơn vẫn 91,2%
 *   Chạy song song v1 (scan giao) vs v2 (POD hợp lệ), % đúng hẹn: T4–T9 v1 93,8 94,1 93,9 94,2 94,0 94,0
 *     chênh 0,9 0,7 0,8 0,8 0,9 0,7 (TB 0,8) → v2 92,9 93,4 93,1 93,4 93,1 93,3 · mục tiêu 94,0 (v1) ≈ 93,2 (v2)
 */
export const logisticsSlaMetricContract: CaseStudy = {
  id: 'logistics-sla-metric-contract',
  title: 'Hợp đồng metric SLA: khi sàn và hãng vận chuyển báo hai con số khác nhau',
  domain: 'logistics',
  level: 'lead',
  minutes: 13,
  skills: ['metric-definition', 'operations', 'tradeoff'],
  question:
    'Platform ghi 92,0% giao đúng hẹn, hãng vận chuyển báo 95,0%, và điều khoản thưởng/phạt phụ thuộc vào con số này. Làm sao viết một "hợp đồng metric" để hai bên đối soát được, đổi định nghĩa có quy trình, và không ai tối ưu con số thay vì trải nghiệm khách?',
  summary:
    'Chuẩn hóa định nghĩa SLA thành hợp đồng (tử/mẫu số, mốc thời gian, loại trừ, data contract), đối soát lệch bằng bảng bridge, đổi phiên bản có chạy song song và re-base mục tiêu, thiết kế thưởng/phạt chống gaming.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là Head of Logistics Analytics của một sàn thương mại điện tử. Cuối tháng, đội Ops gửi báo cáo SLA cho hãng X: **92,0%** đúng hẹn, nằm trong vùng bị phạt. Hãng phản hồi trong 2 giờ: *"Số của chúng tôi là 95,0%, anh chị tính sai."* Team Sales cần số này để thương lượng giá năm sau, còn Finance cần để trừ phí. Không bên nào sai về dữ liệu của mình; họ **đang dùng hai định nghĩa**.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Đúng hẹn — Platform', value: '92,0%', note: '46.000 / 50.000 đơn', tone: 'negative' },
            { label: 'Đúng hẹn — Hãng X', value: '95,0%', note: '47.500 / 50.000 đơn', tone: 'positive' },
            { label: 'Chênh lệch', value: '1.500 đơn', note: '3,0 điểm %', tone: 'warning' },
            { label: 'Phí vận chuyển/tháng', value: '4,0 tỷ đ', note: 'Cơ sở tính thưởng/phạt', tone: 'neutral' },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu là mô phỏng',
          md: 'Mọi con số trong case này là **mô phỏng** để luyện cách viết hợp đồng metric, không phải số của một hãng hay một sàn cụ thể.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: SLA là hợp đồng, không phải báo cáo',
      blocks: [
        {
          kind: 'formula',
          expression: 'Đúng hẹn = Đơn giao trong hạn cam kết (mốc dừng đồng hồ hợp lệ) / Đơn có cam kết − loại trừ được liệt kê',
          note: 'Mỗi từ trong công thức phải trả lời được: mốc nào, múi giờ nào, nguồn nào, ai ghi, ai kiểm tra. Khái niệm SLI/SLO/SLA khác nhau ở chỗ SLA có hệ quả khi không đạt.',
        },
        {
          kind: 'list',
          style: 'check',
          items: [
            '**Định nghĩa**: tử số, mẫu số, mốc bắt đầu và dừng đồng hồ, múi giờ, danh sách loại trừ và điều kiện bằng chứng.',
            '**Data contract**: trường dữ liệu, kiểu, độ trễ chốt số (ví dụ T+3), chất lượng tối thiểu, ai chịu trách nhiệm từng trường.',
            '**Phiên bản**: thay đổi định nghĩa có số phiên bản, thông báo trước, chạy song song, và re-base mục tiêu.',
            '**Đối soát**: cửa sổ khiếu nại, bảng bridge theo nguyên nhân, mẫu kiểm tra, ai có quyền quyết.',
            '**Hệ quả**: thang thưởng/phạt, kèm counter-metric chống gaming.',
          ],
        },
        {
          kind: 'quiz',
          id: 'logistics-sla-metric-contract-q1',
          question: 'Hai bên lệch 3,0 điểm %. Bước đầu tiên hợp lý nhất là gì?',
          options: [
            {
              id: 'a',
              text: 'Lấy số trung bình 93,5% làm số chốt để đóng tranh chấp nhanh.',
              explain: 'Trung bình hóa khiến không bên nào hiểu số đó đo gì, và lần sau tranh chấp vẫn lặp lại vì định nghĩa vẫn chưa được thống nhất.',
            },
            {
              id: 'b',
              text: 'Dựng bảng bridge theo từng nguyên nhân lệch (mốc dừng đồng hồ, loại trừ, cut-off, múi giờ) rồi đối chiếu với điều khoản hợp đồng.',
              correct: true,
              explain: 'Đúng. Bridge biến một cuộc tranh cãi về "ai đúng" thành danh sách nguyên nhân có thể kiểm chứng từng nhóm đơn; điều khoản hợp đồng quyết định từng nhóm thuộc bên nào.',
            },
            {
              id: 'c',
              text: 'Yêu cầu hãng dùng đúng hệ thống scan của platform, bất kể hợp đồng.',
              explain: 'Áp đặt nguồn mà không thống nhất phiên bản dễ bị coi là đổi luật giữa chừng, gây mất niềm tin và tranh chấp pháp lý.',
            },
          ],
        },
      ],
    },
    {
      id: 'bridge',
      kind: 'analysis',
      title: 'Bước 1 — Đối soát: bảng bridge từ 92,0% đến 95,0%',
      blocks: [
        {
          kind: 'table',
          title: 'Bridge 1.500 đơn lệch và kết quả theo hợp đồng v1.1',
          columns: [
            { key: 'reason', label: 'Nguyên nhân lệch' },
            { key: 'orders', label: 'Đơn', align: 'right' },
            { key: 'rule', label: 'Điều khoản v1.1' },
            { key: 'result', label: 'Được tính đạt', align: 'right' },
          ],
          rows: [
            { reason: 'Hãng dừng đồng hồ theo giờ scan "giao", platform theo POD', orders: 600, rule: 'POD hợp lệ có giờ scan ≤ 24h → dùng giờ scan', result: 600 },
            { reason: '"Khách vắng" hãng coi là đạt', orders: 500, rule: 'Chỉ loại nếu có 2 cuộc gọi ghi log', result: 200 },
            { reason: 'Bàn giao sau cut-off 14:00 tính hạn từ hôm sau', orders: 250, rule: 'Hạn tính từ ngày làm việc kế tiếp', result: 250 },
            { reason: 'Lệch ngày do UTC và UTC+7', orders: 150, rule: 'Mọi mốc thời gian theo UTC+7', result: 150 },
            { reason: 'Tổng', orders: 1500, rule: 'Đúng hẹn chốt 47.200 / 50.000 = 94,4%', result: 1200 },
          ],
          highlight: [{ row: 4, tone: 'positive' }],
          caption: 'Hãng đúng 1.200 đơn; 300 "khách vắng" thiếu log vẫn là trễ. Số chốt 94,4% khác cả hai con số ban đầu.',
        },
        {
          kind: 'quiz',
          id: 'logistics-sla-metric-contract-q2',
          question: 'Theo kết quả bridge, sau khi áp v1.1, phạt/thưởng tháng này là bao nhiêu?',
          options: [
            {
              id: 'a',
              text: 'Phạt 40 triệu vì số platform 92,0% nằm trong vùng 92,0–<94,0%.',
              explain: 'Đó là số trước đối soát. Sau khi áp điều khoản, 1.200 đơn được tính đạt và số chốt là 94,4%.',
            },
            {
              id: 'b',
              text: 'Không thưởng, không phạt vì số chốt 94,4% thuộc vùng 94,0–<96,0%.',
              correct: true,
              explain: 'Đúng. 47.200/50.000 = 94,4%. Điều đáng chú ý là chỉ cần thêm 800 đơn được đánh dấu đúng hẹn thì hãng có thể vượt 96% và nhận thưởng: đó chính là lý do phải kiểm soát bằng chứng của các loại trừ.',
            },
            {
              id: 'c',
              text: 'Thưởng 40 triệu vì số hãng báo 95,0% gần ngưỡng 96,0%.',
              explain: '95,0% là số của hãng, chưa kiểm chứng, và chưa vượt ngưỡng 96,0%. Thưởng chỉ tính trên số chốt theo hợp đồng.',
            },
          ],
        },
      ],
    },
    {
      id: 'versioning',
      kind: 'analysis',
      title: 'Bước 2 — Đổi định nghĩa có phiên bản, re-base mục tiêu',
      blocks: [
        {
          kind: 'text',
          md: 'Hai bên đồng ý chuyển từ mốc "scan giao" (v1) sang "POD hợp lệ" (v2) vì POD gắn với việc khách đã nhận hàng. Đây là thay đổi **phá vỡ tương thích**: cùng một thực tế vận hành, v2 cho kết quả thấp hơn. Nếu giữ mục tiêu 94,0%, hãng bị phạt oan chỉ vì đổi cách đo. Theo tinh thần semantic versioning, thay đổi không tương thích tăng phiên bản **major**; làm rõ câu chữ chỉ là **patch/minor**.',
        },
        {
          kind: 'chart',
          title: 'Chạy song song v1 và v2 (% đúng hẹn)',
          type: 'line',
          xKey: 'month',
          unit: '%',
          series: [
            { key: 'v1', label: 'v1: giờ scan giao' },
            { key: 'v2', label: 'v2: POD hợp lệ' },
          ],
          data: [
            { month: 'T4', v1: 93.8, v2: 92.9 },
            { month: 'T5', v1: 94.1, v2: 93.4 },
            { month: 'T6', v1: 93.9, v2: 93.1 },
            { month: 'T7', v1: 94.2, v2: 93.4 },
            { month: 'T8', v1: 94.0, v2: 93.1 },
            { month: 'T9', v1: 94.0, v2: 93.3 },
          ],
          marker: { x: 'T7', label: 'Bắt đầu báo cáo song song' },
          caption: 'T4–T6 được tính lại (restate) theo v2; T7–T9 báo cả hai. Chênh trung bình 0,8 điểm %, ổn định: mục tiêu v1 94,0% tương đương 93,2% theo v2.',
        },
        {
          kind: 'table',
          title: 'Quy trình đổi phiên bản',
          columns: [
            { key: 'step', label: 'Bước' },
            { key: 'what', label: 'Nội dung' },
            { key: 'owner', label: 'Người chịu trách nhiệm' },
          ],
          rows: [
            { step: '1. Đề xuất (RFC)', what: 'Lý do, định nghĩa mới, tác động dự kiến', owner: 'Ops Analytics' },
            { step: '2. Backtest', what: 'Tính lại ≥ 3 tháng theo cả hai phiên bản, tính độ chênh', owner: 'Ops Analytics + hãng' },
            { step: '3. Thông báo', what: 'Báo trước ít nhất 30 ngày; ghi vào changelog', owner: 'Ops' },
            { step: '4. Chạy song song', what: '≥ 1 kỳ báo cáo hai số; thưởng/phạt vẫn theo bản cũ', owner: 'Ops + Finance' },
            { step: '5. Chuyển đổi', what: 'Hiệu lực đầu tháng; re-base mục tiêu theo độ chênh', owner: 'Sales + Finance' },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của lead',
          md: 'Một **data contract** (trường, kiểu, ràng buộc, độ trễ chốt số, chủ sở hữu) chỉ hữu ích khi đi kèm cơ chế cưỡng chế: nếu dữ liệu vi phạm hợp đồng thì pipeline cảnh báo hoặc dừng, thay vì lặng lẽ cho ra một con số sai vào báo cáo thưởng/phạt.',
        },
      ],
    },
    {
      id: 'incentive',
      kind: 'analysis',
      title: 'Bước 3 — Thưởng/phạt và tác dụng phụ (gaming)',
      blocks: [
        {
          kind: 'table',
          title: 'Thang thưởng/phạt trên phí vận chuyển 4,0 tỷ đ/tháng',
          columns: [
            { key: 'band', label: 'Đúng hẹn (số chốt)' },
            { key: 'effect', label: 'Hệ quả' },
            { key: 'amount', label: 'Giá trị', align: 'right' },
          ],
          rows: [
            { band: '≥ 96,0%', effect: 'Thưởng 1% phí vận chuyển', amount: '+40 triệu đ' },
            { band: '94,0% đến < 96,0%', effect: 'Không', amount: '0' },
            { band: '92,0% đến < 94,0%', effect: 'Phạt 1%', amount: '−40 triệu đ' },
            { band: '< 92,0%', effect: 'Phạt 2%', amount: '−80 triệu đ' },
          ],
          caption: 'Ngưỡng nhảy bậc tạo động cơ dồn nỗ lực quanh biên 94,0% và 96,0%. Đó là chỗ gaming xuất hiện.',
        },
        {
          kind: 'text',
          md: 'Sau khi có điều khoản thưởng, hãng bắt đầu ghi "khách vắng" nhiều hơn. Theo v1.0, các đơn này bị **loại khỏi mẫu số**:',
        },
        {
          kind: 'table',
          title: 'Tác động của việc tăng loại trừ',
          columns: [
            { key: 'metric', label: 'Chỉ số' },
            { key: 'before', label: 'Trước', align: 'right' },
            { key: 'after', label: 'Sau', align: 'right' },
          ],
          rows: [
            { metric: 'Đơn có cam kết', before: '50.000', after: '50.000' },
            { metric: 'Đơn bị loại ("khách vắng")', before: '1.500 (3,0%)', after: '3.000 (6,0%)' },
            { metric: 'Mẫu số', before: '48.500', after: '47.000' },
            { metric: 'Đơn đúng hẹn', before: '45.600', after: '45.600' },
            { metric: '% đúng hẹn theo hợp đồng v1.0', before: '94,0%', after: '97,0% (được thưởng)' },
            { metric: '% đúng hẹn trên tổng đơn (counter-metric)', before: '91,2%', after: '91,2%' },
          ],
          highlight: [{ row: 4, tone: 'warning' }, { row: 5, tone: 'neutral' }],
          caption: 'Con số được thưởng tăng 3,0 điểm % trong khi trải nghiệm của khách (45.600 / 50.000) không đổi.',
        },
        {
          kind: 'quiz',
          id: 'logistics-sla-metric-contract-q3',
          question: 'Cách thiết kế nào giảm gaming hiệu quả nhất mà vẫn công bằng với hãng?',
          options: [
            {
              id: 'a',
              text: 'Bỏ hẳn mọi loại trừ để mọi đơn đều tính vào mẫu số.',
              explain: 'Sẽ phạt hãng oan khi khách thật sự vắng nhà hoặc sai địa chỉ do sàn nhập. Mất công bằng và hãng sẽ phản đối hợp đồng.',
            },
            {
              id: 'b',
              text: 'Giữ loại trừ nhưng yêu cầu bằng chứng (log 2 cuộc gọi), giới hạn tỷ lệ loại trừ (ví dụ ≤ 4%), kiểm tra mẫu ngẫu nhiên và báo kèm số trên tổng đơn.',
              correct: true,
              explain: 'Đúng. Bằng chứng và trần chặn lạm dụng, mẫu kiểm tra làm tăng chi phí gian lận, còn counter-metric trên tổng đơn làm lộ ngay khi số đẹp nhưng trải nghiệm không đổi. Loại trừ chính đáng vẫn được bảo vệ.',
            },
            {
              id: 'c',
              text: 'Nâng mức thưởng để hãng có động cơ làm tốt thật.',
              explain: 'Thưởng cao hơn làm tăng lợi ích của gaming khi định nghĩa còn kẽ hở. Phải sửa định nghĩa và kiểm soát trước khi tăng động cơ.',
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
          md: '**Đề xuất:** chốt số tháng này 94,4% theo bridge v1.1 (không thưởng, không phạt), ký phụ lục **hợp đồng metric** chung cho hai bên: định nghĩa, data contract, quy trình đối soát, chuyển sang v2 (POD) với mục tiêu re-base 93,2% và counter-metric trên tổng đơn.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Công bố hợp đồng metric (v1.1) làm phụ lục SLA: tử/mẫu số, mốc dừng đồng hồ, múi giờ UTC+7, danh sách loại trừ và bằng chứng',
              owner: 'Ops Analytics + Pháp chế + hãng X',
              metric: 'Số đơn tranh chấp định nghĩa mỗi tháng',
              threshold: '< 0,5% tổng đơn',
            },
            {
              action: 'Triển khai data contract cho feed sự kiện (đơn, bàn giao, POD, trạng thái giao) kèm kiểm tra tự động và độ trễ chốt số T+3',
              owner: 'Data Engineering',
              metric: 'Tỷ lệ bản ghi vi phạm contract',
              threshold: '< 1%; chặn báo cáo khi vượt',
            },
            {
              action: 'Chuyển sang v2 theo quy trình 5 bước, chạy song song T7–T9, re-base mục tiêu 94,0% → 93,2%',
              owner: 'Sales + Finance',
              metric: 'Chênh lệch v1 − v2 sau re-base',
              threshold: '≤ 0,2 điểm % so với mục tiêu tương đương',
            },
            {
              action: 'Thêm counter-metric: % đúng hẹn trên tổng đơn và tỷ lệ loại trừ; kiểm tra mẫu 200 đơn/tháng',
              owner: 'Ops + Audit nội bộ',
              metric: 'Tỷ lệ loại trừ "khách vắng"; sai lệch mẫu',
              threshold: 'Loại trừ ≤ 4%; sai lệch mẫu < 3%',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Nó thay một trận cãi nhau về con số bằng một **quy trình lặp lại được**: định nghĩa rõ, dữ liệu có hợp đồng, đổi luật có phiên bản và có chỉ số đối trọng. Cả hai bên đều thấy mình được bảo vệ, nên hợp đồng bền hơn việc chọn bên thắng.',
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
              title: 'Đổi định nghĩa mà giữ nguyên mục tiêu',
              why: 'Cùng một hiệu suất vận hành nhưng v2 thấp hơn 0,8 điểm %: giữ ngưỡng 94,0% khiến hãng bị phạt vì cách đo.',
              instead: 'Backtest, chạy song song và re-base mục tiêu theo độ chênh trước khi chuyển.',
            },
            {
              title: 'Thưởng/phạt chỉ dựa trên một tỷ lệ',
              why: 'Tỷ lệ có mẫu số chỉnh được thì có thể chỉnh: loại trừ tăng gấp đôi làm số tăng 3,0 điểm % mà khách không hưởng lợi.',
              instead: 'Thêm counter-metric trên tổng đơn, trần loại trừ, bằng chứng và kiểm tra mẫu.',
            },
            {
              title: 'Đối soát bằng thương lượng thay vì bằng bridge',
              why: 'Trung bình hóa hoặc nhượng bộ theo quan hệ khiến không ai hiểu số đó đo gì và tranh chấp lặp lại.',
              instead: 'Phân rã lệch theo nguyên nhân, đối chiếu điều khoản, ghi quyết định vào changelog.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'SLA là hợp đồng: tử/mẫu số, mốc thời gian, loại trừ và bằng chứng phải viết rõ, kèm data contract để cả hai bên cùng kiểm chứng.',
    'Khi hai bên lệch số, dựng bảng bridge theo nguyên nhân; khi đổi định nghĩa, dùng phiên bản, chạy song song và re-base mục tiêu.',
    'Thưởng/phạt tạo động cơ gaming: luôn thêm counter-metric trên tổng đơn, trần loại trừ và kiểm tra mẫu.',
  ],
  references: [
    {
      title: 'Service Level Objectives (Site Reliability Engineering)',
      publisher: 'Google SRE Book',
      url: 'https://sre.google/sre-book/service-level-objectives/',
      note: 'Phân biệt SLI, SLO, SLA (SLA có hệ quả khi không đạt) và khuyến nghị không chọn mục tiêu chỉ vì hiệu năng hiện tại, giữ chỉ số đơn giản.',
    },
    {
      title: 'Model contracts',
      publisher: 'dbt Docs',
      url: 'https://docs.getdbt.com/docs/mesh/govern/model-contracts',
      note: 'Cách khai báo tên cột, kiểu dữ liệu, ràng buộc và để build thất bại khi vi phạm; mô tả thay đổi phá vỡ tương thích với mô hình có phiên bản.',
    },
    {
      title: 'Open Data Contract Standard',
      publisher: 'Bitol (Linux Foundation)',
      url: 'https://bitol-io.github.io/open-data-contract-standard/latest/',
      note: 'Chuẩn YAML cho data contract với các mục về chất lượng dữ liệu, SLA, team/vai trò và changelog.',
    },
    {
      title: 'Semantic Versioning 2.0.0',
      publisher: 'semver.org',
      url: 'https://semver.org/',
      note: 'Quy tắc tăng major/minor/patch theo mức tương thích và yêu cầu khai báo rõ "giao diện công khai", áp dụng được cho định nghĩa metric.',
    },
  ],
}
