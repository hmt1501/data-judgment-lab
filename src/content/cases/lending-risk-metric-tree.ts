import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — mảng vay tiêu dùng tín chấp, một quý giải ngân, đã kiểm tra khớp nhau:
 *   Cây: Giải ngân = Hồ sơ nộp × Duyệt/nộp × Giải ngân/duyệt × Khoản vay TB
 *   Baseline: 100.000 × 30% × 90% × 30 tr = 27.000 khoản = 810 tỷ
 *     Biên trước rủi ro 9,0% (lãi thu − vốn − vận hành, cả vòng đời) → 72,90 tỷ
 *     EL = PD 6,0% × LGD 70% × EAD 85% = 3,57% → 28,92 tỷ · khoản vỡ nợ 27.000 × 6% = 1.620
 *     Chi phí thu hồi 5 tr/khoản vỡ nợ = 8,10 tỷ (1,0% giải ngân)
 *     Lợi nhuận sau rủi ro = 72,90 − 28,92 − 8,10 = 35,88 tỷ (4,43% giải ngân = 9,0 − 3,57 − 1,0)
 *   Kế hoạch Sales: duyệt/nộp 36% → 32.400 khoản = 972 tỷ (+20,0%); thêm 5.400 khoản (162 tỷ) ở band PD 14%
 *     PD gộp (27.000 × 6% + 5.400 × 14%) / 32.400 = 7,33% · khoản vỡ nợ 1.620 + 756 = 2.376 (+46,7%)
 *     Biên trước rủi ro 87,48 tỷ · EL 42,41 tỷ (4,36%) · thu hồi 11,88 tỷ (1,22%)
 *     Lợi nhuận sau rủi ro = 87,48 − 42,41 − 11,88 = 33,19 tỷ (3,41%) → −7,5% so với 35,88
 *     Riêng 162 tỷ biên: 14,58 − EL 13,49 − thu hồi 3,78 = −2,69 tỷ (33,19 − 35,88 = −2,69 ✓)
 *   Chỉ báo dẫn: tỷ trọng giải ngân vào band PD cao 0% → 16,7% (5.400/32.400)
 *     FPD30 (trễ ngay kỳ trả đầu ≥30 ngày) baseline 1,20%; band biên 2,80%; kỳ vọng gộp
 *     (27.000 × 1,2% + 5.400 × 2,8%) / 32.400 = 1,47%; hệ số hiệu chỉnh PD vòng đời ≈ 5 × FPD30 (6,0% = 5 × 1,2%)
 */
export const lendingRiskMetricTree: CaseStudy = {
  id: 'lending-risk-metric-tree',
  title: 'Một cây metric cho vay tiêu dùng: Sales, Risk và Collections đang kéo ba hướng',
  domain: 'lending',
  level: 'lead',
  minutes: 14,
  skills: ['metric-decomposition', 'credit-risk', 'tradeoff'],
  question:
    'Sales muốn nâng tỷ lệ duyệt để đạt chỉ tiêu giải ngân, Risk giữ nợ xấu, Collections ôm khối lượng thu hồi. Làm sao dựng cây metric, phân quyền sở hữu và guardrail để ba team cùng tối ưu lợi nhuận sau rủi ro thay vì mỗi nơi một con số?',
  summary:
    'Nối giải ngân, tỷ lệ duyệt, mất mát kỳ vọng và chi phí thu hồi thành một cây tới lợi nhuận sau rủi ro; tách chỉ báo dẫn khỏi chỉ báo trễ, gán owner theo đòn bẩy và thiết kế guardrail hai tầng.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là Head of Risk Analytics của một công ty tài chính tiêu dùng. Kế hoạch quý tới chốt trong tuần này. Ba team gửi ba đề xuất mục tiêu: **Sales** muốn tỷ lệ duyệt từ 30% lên 36% để giải ngân tăng 20%; **Risk** muốn giữ nguyên cut-off vì nợ xấu "chỉ lộ sau 9–12 tháng, lúc đó đã muộn"; **Collections** cảnh báo đội thu hồi đã kín lịch. CFO hỏi: *"Mình đang đo thành công bằng cái gì mà ba team cùng báo xanh?"*',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Giải ngân/quý (baseline)', value: '810 tỷ đ', note: '27.000 khoản × 30 tr', tone: 'neutral' },
            { label: 'Duyệt / nộp', value: '30%', note: 'Sales đề xuất 36%', tone: 'neutral' },
            { label: 'PD vòng đời kỳ vọng', value: '6,0%', note: 'Danh mục hiện tại', tone: 'neutral' },
            { label: 'Lợi nhuận sau rủi ro', value: '35,88 tỷ đ', note: '4,43% giải ngân', tone: 'positive' },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu là mô phỏng',
          md: 'Mọi con số trong case này (khối lượng, PD, biên, chi phí) là **mô phỏng** để luyện cách dựng cây metric, không phản ánh một tổ chức thật.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: một cây, ba nhánh, một đích',
      blocks: [
        {
          kind: 'formula',
          expression:
            'Lợi nhuận sau rủi ro = Giải ngân × (Biên trước rủi ro − EL% − Chi phí thu hồi%)',
          note: 'Giải ngân = Hồ sơ nộp × Duyệt/nộp × Giải ngân/duyệt × Khoản vay TB. EL% = PD × LGD × EAD/giải ngân. Mọi metric của team phải nối được vào cây này, nếu không nó chỉ là chỉ số riêng lẻ.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Chọn đích**: lợi nhuận sau rủi ro (không phải giải ngân, cũng không phải nợ xấu đứng riêng).',
            '**Phân rã thành nhánh**: Growth (khối lượng), Risk (mất mát kỳ vọng), Profit/Cost (biên, chi phí thu hồi).',
            '**Gắn nhịp thời gian**: với mỗi nhánh, tìm chỉ báo dẫn có tín hiệu sớm và chỉ báo trễ để xác nhận.',
            '**Gán owner theo đòn bẩy**: ai điều chỉnh được cần gạt nào thì sở hữu metric của cần gạt đó.',
            '**Đặt guardrail**: ngưỡng cảnh báo và ngưỡng dừng cho từng nhánh, có hành động đi kèm.',
          ],
        },
        {
          kind: 'quiz',
          id: 'lending-risk-metric-tree-q1',
          question: 'Chỉ tiêu nào nên giao cho Sales để họ không "mua" khối lượng bằng khách xấu?',
          options: [
            {
              id: 'a',
              text: 'Giải ngân thô (tỷ đ) và tỷ lệ duyệt càng cao càng tốt.',
              explain: 'Đo thô khuyến khích đẩy mạnh vào band rủi ro cao: kịch bản 36% duyệt tăng 20% giải ngân nhưng lợi nhuận sau rủi ro giảm 7,5%.',
            },
            {
              id: 'b',
              text: 'Giải ngân nằm trong khẩu vị rủi ro (PD dự báo ≤ ngưỡng do Risk đặt), kèm chất lượng hồ sơ nộp.',
              correct: true,
              explain: 'Đúng. Sales kiểm soát được nguồn hồ sơ và trải nghiệm nộp, còn ngưỡng PD thuộc Risk. Đếm khối lượng "đạt chuẩn" gắn chỉ tiêu của Sales vào cây mà không cho họ đòn bẩy nới cut-off.',
            },
            {
              id: 'c',
              text: 'Chỉ tiêu nợ xấu (DPD90+) của danh mục.',
              explain: 'Nợ xấu trễ 9–12 tháng và Sales không có cần gạt trực tiếp; giao chỉ tiêu mà không có đòn bẩy sinh ra đổ lỗi, không sinh hành vi mong muốn.',
            },
          ],
        },
      ],
    },
    {
      id: 'tree',
      kind: 'analysis',
      title: 'Bước 1 — Cây metric và kinh tế đơn vị của kịch bản Sales',
      blocks: [
        {
          kind: 'table',
          title: 'Cây metric: baseline so với kế hoạch Sales (duyệt/nộp 36%)',
          columns: [
            { key: 'node', label: 'Nút' },
            { key: 'base', label: 'Baseline', align: 'right' },
            { key: 'plan', label: 'Kế hoạch Sales', align: 'right' },
            { key: 'change', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { node: 'Số khoản giải ngân', base: '27.000', plan: '32.400', change: '+20,0%' },
            { node: 'Giải ngân (tỷ đ)', base: '810', plan: '972', change: '+20,0%' },
            { node: 'PD gộp', base: '6,00%', plan: '7,33%', change: '+1,33 điểm %' },
            { node: 'Khoản vỡ nợ', base: '1.620', plan: '2.376', change: '+46,7%' },
            { node: 'Biên trước rủi ro (tỷ đ)', base: '72,90', plan: '87,48', change: '+20,0%' },
            { node: 'Mất mát kỳ vọng EL (tỷ đ)', base: '28,92', plan: '42,41', change: '+46,7%' },
            { node: 'Chi phí thu hồi (tỷ đ)', base: '8,10', plan: '11,88', change: '+46,7%' },
            { node: 'Lợi nhuận sau rủi ro (tỷ đ)', base: '35,88', plan: '33,19', change: '−7,5%' },
          ],
          highlight: [{ row: 7, tone: 'negative' }],
          caption: 'Giải ngân +20% nhưng EL và chi phí thu hồi tăng +46,7% vì 5.400 khoản thêm đều thuộc band PD 14%.',
        },
        {
          kind: 'chart',
          title: 'Từ biên đến lợi nhuận sau rủi ro',
          type: 'bar',
          xKey: 'scenario',
          unit: ' tỷ đ',
          series: [
            { key: 'margin', label: 'Biên trước rủi ro' },
            { key: 'el', label: 'EL' },
            { key: 'collect', label: 'Chi phí thu hồi' },
            { key: 'profit', label: 'Lợi nhuận sau rủi ro' },
          ],
          data: [
            { scenario: 'Baseline', margin: 72.9, el: 28.92, collect: 8.1, profit: 35.88 },
            { scenario: 'Kế hoạch Sales', margin: 87.48, el: 42.41, collect: 11.88, profit: 33.19 },
          ],
          caption: 'Phần tăng thêm 162 tỷ đ chỉ tạo 14,58 tỷ biên nhưng mất 13,49 tỷ EL và 3,78 tỷ thu hồi: −2,69 tỷ.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của lead',
          md: 'Cây metric có giá trị khi nó **cho phép tranh luận bằng phép tính**. Ở đây không ai sai: Sales đúng rằng khối lượng tăng, Risk đúng rằng chi phí rủi ro tăng nhanh hơn. Cây chỉ ra điểm hòa vốn của band biên, thay vì mỗi bên bảo vệ một con số.',
        },
      ],
    },
    {
      id: 'timing',
      kind: 'analysis',
      title: 'Bước 2 — Chỉ báo dẫn và chỉ báo trễ',
      blocks: [
        {
          kind: 'text',
          md: 'Nợ xấu chỉ xác nhận khi quá muộn: khoản giải ngân hôm nay mất 9–12 tháng mới thành DPD90+. Quản trị trong kỳ phải dựa vào **chỉ báo dẫn** đã hiệu chỉnh với kết quả trễ của các vintage cũ.',
        },
        {
          kind: 'table',
          title: 'Thang thời gian của các chỉ báo rủi ro',
          columns: [
            { key: 'indicator', label: 'Chỉ báo' },
            { key: 'type', label: 'Loại' },
            { key: 'signal', label: 'Có tín hiệu sau' },
            { key: 'base', label: 'Baseline', align: 'right' },
            { key: 'plan', label: 'Kỳ vọng (kế hoạch Sales)', align: 'right' },
          ],
          rows: [
            { indicator: 'Tỷ trọng giải ngân vào band PD cao', type: 'Dẫn (chính sách)', signal: 'Ngay khi giải ngân', base: '0%', plan: '16,7%' },
            { indicator: 'FPD30 (trễ ngay kỳ trả đầu)', type: 'Dẫn (hành vi)', signal: '~2 tháng', base: '1,20%', plan: '1,47%' },
            { indicator: 'DPD30+ vintage tại MOB6', type: 'Dẫn muộn', signal: '~6 tháng', base: 'đã có vintage cũ', plan: 'chưa quan sát' },
            { indicator: 'Nợ xấu DPD90+ / PD vòng đời', type: 'Trễ', signal: '9–12 tháng', base: '6,00%', plan: '7,33% (dự báo)' },
          ],
          highlight: [{ row: 1, tone: 'warning' }],
          caption: 'Hệ số hiệu chỉnh từ vintage cũ: PD vòng đời ≈ 5 × FPD30 (6,0% = 5 × 1,2%). FPD30 kỳ vọng gộp = (27.000 × 1,2% + 5.400 × 2,8%) / 32.400 = 1,47%.',
        },
        {
          kind: 'quiz',
          id: 'lending-risk-metric-tree-q2',
          question: 'Hai tháng sau khi nới, FPD30 của vintage mới là 2,2% (kỳ vọng 1,47%). Phản ứng hợp lý nhất?',
          options: [
            {
              id: 'a',
              text: 'Chờ thêm đến khi có DPD90+ rồi mới quyết, tránh phản ứng thái quá.',
              explain: 'DPD90+ chỉ có sau 9–12 tháng; trong thời gian đó hàng nghìn khoản nữa đã giải ngân với cùng chính sách. Chờ chỉ trễ thêm.',
            },
            {
              id: 'b',
              text: 'Coi vượt ngưỡng cảnh báo: kích hoạt review liên nhóm, tách FPD30 theo band và kênh, tạm giữ không mở rộng nới thêm.',
              correct: true,
              explain: 'Đúng. FPD30 là chỉ báo dẫn đã hiệu chỉnh (×5 ≈ PD 11%, cao hơn nhiều mức 7,33% kỳ vọng). Việc đầu tiên là tách nguyên nhân (band biên, kênh, lỗi dữ liệu) rồi quyết, thay vì đợi hay hủy toàn bộ.',
            },
            {
              id: 'c',
              text: 'Hạ ngay cut-off về mức cũ cho toàn bộ vì FPD30 chỉ cần vượt một lần.',
              explain: 'Một điểm dữ liệu chưa đủ để kết luận; có thể do một kênh, một đợt khuyến mãi hay hạn thanh toán. Hành động cực đoan khi chưa phân tách có thể bỏ lỡ lợi nhuận ở các band tốt.',
            },
          ],
        },
      ],
    },
    {
      id: 'ownership',
      kind: 'analysis',
      title: 'Bước 3 — Quyền sở hữu metric và guardrail hai tầng',
      blocks: [
        {
          kind: 'table',
          title: 'Metric, owner và đòn bẩy',
          columns: [
            { key: 'metric', label: 'Metric' },
            { key: 'owner', label: 'Owner' },
            { key: 'lever', label: 'Đòn bẩy owner nắm' },
            { key: 'support', label: 'Phối hợp' },
          ],
          rows: [
            { metric: 'Giải ngân trong khẩu vị rủi ro', owner: 'Sales', lever: 'Nguồn hồ sơ, kênh, ưu đãi', support: 'Risk cung cấp ngưỡng PD' },
            { metric: 'Cut-off, PD dự báo, EL%', owner: 'Risk', lever: 'Chính sách duyệt, mô hình điểm', support: 'Sales báo mix kênh' },
            { metric: 'Roll rate, tỷ lệ thu hồi, chi phí thu hồi', owner: 'Collections', lever: 'Chiến lược nhắc nợ, phân bổ đội', support: 'Risk báo khoản sắp đến hạn' },
            { metric: 'Lợi nhuận sau rủi ro', owner: 'CFO / Head of Lending', lever: 'Cân đối ba nhánh', support: 'Analytics giữ cây metric' },
          ],
          caption: 'Quy tắc: owner = người điều chỉnh được cần gạt. Người nhận chỉ tiêu mà không có cần gạt sẽ đổ lỗi, không tạo hành vi.',
        },
        {
          kind: 'table',
          title: 'Guardrail hai tầng cho kế hoạch nới cut-off',
          columns: [
            { key: 'guard', label: 'Guardrail' },
            { key: 'soft', label: 'Ngưỡng cảnh báo', align: 'right' },
            { key: 'hard', label: 'Ngưỡng dừng', align: 'right' },
            { key: 'action', label: 'Hành động' },
          ],
          rows: [
            { guard: 'Tỷ trọng giải ngân band PD cao', soft: '> 12%', hard: '> 15%', action: 'Hard: Risk khóa band biên' },
            { guard: 'FPD30 vintage tuần', soft: '> 1,5%', hard: '> 2,0%', action: 'Soft: review liên nhóm; hard: tạm dừng nới' },
            { guard: 'Tải hồ sơ/nhân sự thu hồi', soft: '> 85%', hard: '> 100%', action: 'Hard: ưu tiên danh sách, hoãn giải ngân band biên' },
            { guard: 'Lợi nhuận sau rủi ro dự báo / khoản', soft: '< 4,0%', hard: '< 3,0%', action: 'Hard: CFO quyết điều chỉnh mục tiêu' },
          ],
          caption: 'Cảnh báo thì họp, dừng thì có hành động tự động. Ngưỡng dừng không cần đợi đồng thuận.',
        },
        {
          kind: 'quiz',
          id: 'lending-risk-metric-tree-q3',
          question: 'Kế hoạch Sales (duyệt 36%) dự báo tỷ trọng band PD cao 16,7% và lợi nhuận/giải ngân 3,41%. Theo bảng guardrail, kết luận đúng là?',
          options: [
            {
              id: 'a',
              text: 'Chấp nhận vì giải ngân tăng 20% và không có nợ xấu nào đã quan sát.',
              explain: 'Nợ xấu là chỉ báo trễ nên "chưa quan sát" không có nghĩa là an toàn. Dự báo đã vượt ngưỡng dừng của tỷ trọng band cao và dưới ngưỡng cảnh báo của lợi nhuận.',
            },
            {
              id: 'b',
              text: 'Không thể triển khai nguyên trạng: tỷ trọng band cao 16,7% vượt ngưỡng dừng 15%, lợi nhuận/giải ngân 3,41% dưới ngưỡng cảnh báo; cần giới hạn band biên hoặc nới theo giai đoạn.',
              correct: true,
              explain: 'Đúng. 16,7% vượt ngưỡng dừng 15%; lợi nhuận 3,41% mới rơi dưới ngưỡng cảnh báo 4,0% (còn trên ngưỡng dừng 3,0%). Hướng xử lý là thu nhỏ band biên (ví dụ chỉ nới nửa band) rồi đo FPD30 trước khi nới tiếp.',
            },
            {
              id: 'c',
              text: 'Bỏ guardrail tỷ trọng band vì Sales đã được giao chỉ tiêu giải ngân.',
              explain: 'Guardrail tồn tại để chặn tối ưu cục bộ. Bỏ nó khi chỉ tiêu giải ngân đang tăng chính là kịch bản làm lợi nhuận sau rủi ro giảm.',
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
          md: '**Đề xuất cho CFO:** không phê duyệt duyệt/nộp 36% đồng loạt. Dùng **lợi nhuận sau rủi ro** làm đích chung, giao Sales chỉ tiêu giải ngân trong khẩu vị rủi ro, giữ ngưỡng PD ở Risk, và cho phép nới **theo giai đoạn** với guardrail dựa trên chỉ báo dẫn (tỷ trọng band, FPD30).',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Công bố cây metric một trang (đích, 3 nhánh, định nghĩa, nguồn dữ liệu) và gắn mọi chỉ tiêu team vào cây',
              owner: 'Analytics Lead',
              metric: 'Tỷ lệ KPI team nối được vào cây',
              threshold: '100% KPI có đường nối trước kỳ kế hoạch',
            },
            {
              action: 'Giao Sales chỉ tiêu giải ngân trong khẩu vị rủi ro; Risk sở hữu ngưỡng PD và cut-off',
              owner: 'Head of Lending + Sales/Risk',
              metric: 'Giải ngân trong khẩu vị / lợi nhuận sau rủi ro',
              threshold: 'Lợi nhuận sau rủi ro/giải ngân ≥ 4,0%',
            },
            {
              action: 'Nới cut-off theo hai giai đoạn (chỉ nửa band biên), theo dõi FPD30 hằng tuần với guardrail hai tầng',
              owner: 'Risk + Collections',
              metric: 'FPD30 vintage tuần; tải thu hồi',
              threshold: 'FPD30 ≤ 1,5% (cảnh báo), ≤ 2,0% (dừng); tải ≤ 85%',
            },
            {
              action: 'Họp review liên nhóm hằng tháng 45 phút, dùng chung một dashboard cây metric; ghi quyết định và ngưỡng được đổi',
              owner: 'Head of Lending',
              metric: 'Số tranh luận về định nghĩa trong họp',
              threshold: '0 tranh luận về số, chỉ về quyết định',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Nó không chọn phe: giữ tăng trưởng khi điểm biên còn lời, dừng khi chỉ báo dẫn báo hiệu mất mát. Nó cũng sửa **cấu trúc ra quyết định**, nhờ đó lần sau ba team dùng cùng ngôn ngữ thay vì cãi nhau về từng con số.',
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
              title: 'Tối ưu từng nhánh riêng lẻ',
              why: 'Mỗi team báo xanh trên metric của mình nhưng lợi nhuận sau rủi ro giảm (giải ngân +20%, lợi nhuận −7,5%).',
              instead: 'Có một đích chung và đo cả ba nhánh trên cùng cây.',
            },
            {
              title: 'Chờ chỉ báo trễ để hành động',
              why: 'Nợ xấu xác nhận sau 9–12 tháng, khi nhiều vintage đã giải ngân với cùng chính sách.',
              instead: 'Dùng chỉ báo dẫn (tỷ trọng band, FPD30) đã hiệu chỉnh với vintage cũ và đặt guardrail trên chúng.',
            },
            {
              title: 'Giao chỉ tiêu cho người không có đòn bẩy',
              why: 'Phạt Sales vì nợ xấu hay phạt Risk vì giải ngân thấp khiến họ phòng thủ hoặc đổ lỗi, không cải thiện kết quả.',
              instead: 'Owner theo cần gạt; chỉ số chung gán cho cấp có quyền cân đối.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Nối giải ngân, EL và chi phí thu hồi vào một cây tới lợi nhuận sau rủi ro; tăng trưởng không còn là mục tiêu độc lập.',
    'Chỉ báo dẫn (tỷ trọng band, FPD30) cho phép hành động trong kỳ; nợ xấu chỉ để xác nhận và hiệu chỉnh.',
    'Owner theo đòn bẩy và guardrail hai tầng (cảnh báo, dừng) biến xung đột mục tiêu thành quyết định có quy trình.',
  ],
  references: [
    {
      title: 'Principles for the Management of Credit Risk',
      publisher: 'Basel Committee on Banking Supervision (BIS)',
      url: 'https://www.bis.org/publ/bcbs75.pdf',
      note: 'Bản 2000 (nay đã được thay thế): nêu bốn nhóm nguyên tắc — môi trường rủi ro, quy trình cấp tín dụng, quản lý và giám sát, kiểm soát — và mục tiêu tối đa hóa lợi suất điều chỉnh rủi ro trong giới hạn chấp nhận được.',
    },
    {
      title: 'Guidance on credit risk and accounting for expected credit losses',
      publisher: 'Basel Committee on Banking Supervision (BIS)',
      url: 'https://www.bis.org/bcbs/publ/d350.htm',
      note: 'Hướng dẫn 2015 về ECL, nhấn mạnh chức năng quản trị rủi ro phải tham gia đo lường và nhận diện sớm sự gia tăng rủi ro tín dụng.',
    },
    {
      title: 'Metrics: ratio và derived metrics',
      publisher: 'dbt Docs',
      url: 'https://docs.getdbt.com/docs/build/metrics-overview',
      note: 'Cách khai báo metric dạng tỷ lệ (tử/mẫu) và metric dẫn xuất từ metric khác, phù hợp để mã hóa cây metric trong semantic layer.',
    },
  ],
}
