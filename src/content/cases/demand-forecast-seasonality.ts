import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — đơn xử lý/tuần tại kho fulfilment, đã kiểm tra khớp nhau:
 *   Tết 2025 = 29/1 (tuần ISO 5) · Tết 2026 = 17/2 (tuần ISO 8) · Tết 2027 = 6/2 → lệch 3 tuần giữa 2025 và 2026.
 *   Thực tế 2025 theo tuần so với Tết (T−6…T+5, nghìn đơn): 46 50 56 64 68 52 18 30 42 44 45 45
 *   Thực tế 2026 theo tuần so với Tết (T−6…T+2, nghìn đơn): 54 55 68 71 82 57 22 33 50 → tổng 492
 *   Dự báo cũ 2026: trung bình 12 tuần Q4/2025 = (10 tuần thường × 45 + 2 tuần sale 11/11, 12/12 × 63) / 12 = 48
 *   Tăng trưởng nền (tuần thường, không sự kiện) Q4/2025 vs Q4/2024: 45 / 39,1 ≈ +15%
 *   Backtest trên 9 tuần mùa Tết 2026 (tổng thực tế 492 nghìn):
 *     (A) Trung bình 12 tuần, 48/tuần ................. WAPE 28,9% · MAPE 34,5% · bias −12,2%
 *     (B) Seasonal naive theo tuần lịch (2025 tuần k+3) WAPE 40,2% · MAPE 41,8% · bias −17,1%
 *     (C) Seasonal naive căn theo Tết ................. WAPE 13,4% · MAPE 13,4% · bias −13,4%
 *     (D) (C) × tăng trưởng 1,15 ...................... WAPE  4,2% · MAPE  4,3% · bias −0,4%
 *     Tỷ lệ thực tế/dự báo của (D): 1,021 0,957 1,056 0,965 1,049 0,953 1,063 0,957 1,035
 *   Năng suất: 125 đơn/người/ca × 6 ca = 750 đơn/người/tuần.
 *     2026 đỉnh T−2: cần 82.000 / 750 ≈ 110 người, có 64 (48.000/750) → năng lực 48.000 + 20% tăng ca = 57.600 → tồn 24.400 đơn.
 *   Dự báo 2027 = thực tế 2026 căn Tết × 1,12 (tuần thường T8–T9/2026 51,5 vs 46,0 nghìn):
 *     T−3 71.000 × 1,12 = 79.520 · T−2 82.000 × 1,12 = 91.840 · T−1 57.000 × 1,12 = 63.840
 *   Khoảng dự báo (tỷ lệ thực tế/dự báo, backtest 2 mùa Tết = 18 tuần): P80 1,05 · P90 1,08 · P95 1,10
 *     T−2: P50 91.840 → 123 người · P80 96.432 → 129 · P90 99.187 → 133 · P95 101.024 → 135
 *   Newsvendor: thiếu 1 người = 750 đơn trễ × 15.000 đ = 11,25 tr đ; thừa 1 người thời vụ = 3,5 tr đ/tuần
 *     → tỷ lệ tới hạn 11,25 / (11,25 + 3,5) = 0,763 → mục tiêu ≈ P76–P80.
 */
export const demandForecastSeasonality: CaseStudy = {
  id: 'demand-forecast-seasonality',
  title: 'Dự báo đơn mùa Tết: vì sao năm ngoái thiếu người?',
  domain: 'logistics',
  level: 'junior',
  minutes: 12,
  skills: ['seasonality', 'metric-definition', 'operations', 'tradeoff'],
  question:
    'Mùa Tết năm ngoái kho thiếu gần một nửa nhân sự so với nhu cầu ở tuần đỉnh. Năm nay nên dự báo sản lượng và lên kế hoạch nhân sự thế nào để không lặp lại?',
  summary:
    'Tách chuỗi đơn hàng thành xu hướng, mùa vụ và sự kiện, căn theo Tết âm lịch thay vì tuần dương lịch, chấm điểm baseline bằng WAPE/MAPE và dùng khoảng dự báo để đặt bộ đệm nhân sự.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng.* Bạn là analyst của bộ phận vận hành kho fulfilment cho một sàn thương mại điện tử. Đầu tháng 10/2026, trưởng kho nhắn: *"Tết vừa rồi tuần cao điểm mình chỉ có 64 người, hàng tồn chất đống, khách chửi cả tuần. Năm nay em dự báo giúp để tháng 11 chốt hợp đồng thời vụ."* Hồi tưởng mùa Tết 2026:',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Đơn tuần đỉnh (T−2, 2026)', value: '82.000', delta: 'dự báo 48.000 (−41,5%)', tone: 'negative' },
            { label: 'Nhân sự tuần đỉnh', value: '64 người', delta: 'cần ≈ 110', tone: 'negative' },
            { label: 'Đơn tồn quá 24h (đỉnh)', value: '24.400', tone: 'warning', note: 'năng lực 48.000 + 20% tăng ca' },
            { label: 'Xử lý trong 24h', value: '71%', delta: 'mục tiêu 97%', tone: 'negative' },
          ],
        },
        {
          kind: 'text',
          md: 'Cách dự báo năm ngoái: lấy **trung bình 12 tuần gần nhất** (Q4/2025) = 48.000 đơn/tuần, rồi chia cho năng suất 750 đơn/người/tuần (125 đơn/ca × 6 ca) → 64 người cho cả mùa.',
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu của buổi phân tích',
          md: 'Đưa ra **dự báo theo tuần cho mùa Tết 2027** (Tết rơi vào 6/2/2027), kèm **thước đo sai số** đã kiểm chứng trên năm trước và **khoảng dự báo** để trưởng kho biết nên ký cứng bao nhiêu người, giữ dự phòng bao nhiêu.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: phân rã chuỗi trước, chọn mô hình sau',
      blocks: [
        {
          kind: 'formula',
          expression: 'Đơn tuần ≈ Mức nền (xu hướng) × Chỉ số mùa vụ (theo tuần so với Tết) × Hiệu ứng sự kiện (sale 11/11, 12/12…)',
          note: 'Dạng nhân phù hợp khi biên độ mùa vụ lớn lên cùng quy mô: đỉnh Tết luôn ≈ 1,7 lần tuần thường dù năm nào đơn cũng tăng.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Chọn trục thời gian đúng**: Tết theo âm lịch, xê dịch tới 3–4 tuần dương lịch giữa các năm. So sánh phải căn theo *tuần so với Tết* (T−6…T+2), không theo tuần ISO.',
            '**Tách mức nền**: tính tăng trưởng trên *tuần thường* (loại tuần sale, tuần lễ), vì sự kiện làm lệch cả trung bình lẫn tốc độ tăng.',
            '**Dựng baseline đơn giản trước**: seasonal naive (lấy cùng kỳ năm trước) và seasonal naive × tăng trưởng YoY. Mô hình phức tạp phải thắng được các baseline này mới đáng dùng.',
            '**Backtest**: giả vờ đứng ở tháng 12/2025, dự báo mùa Tết 2026 rồi chấm điểm bằng WAPE, MAPE và bias.',
            '**Biến dự báo thành quyết định**: dùng phân phối sai số để đặt mức nhân sự theo chi phí thiếu người vs thừa người.',
          ],
        },
        {
          kind: 'quiz',
          id: 'demand-forecast-seasonality-q1',
          question: 'Vì sao trung bình 12 tuần Q4 (48.000) dự báo sai nặng cho mùa Tết, dù nó đã "bao gồm" cả hai tuần sale lớn?',
          options: [
            {
              id: 'a',
              text: 'Vì 12 tuần là quá ngắn; lấy trung bình 52 tuần sẽ chính xác hơn.',
              explain: 'Trung bình 52 tuần còn tệ hơn: nó kéo cả mùa thấp điểm vào và vẫn cho một đường phẳng. Vấn đề không phải độ dài cửa sổ mà là trung bình **không có mùa vụ** lẫn **xu hướng**.',
            },
            {
              id: 'b',
              text: 'Vì trung bình là một đường phẳng: nó bỏ qua chỉ số mùa vụ Tết (đỉnh ≈ 1,7 lần tuần thường, tuần Tết chỉ ≈ 0,45 lần) và trộn hiệu ứng sale 11/11, 12/12 vào mức nền.',
              correct: true,
              explain: 'Đúng. Trung bình 48.000 = 10 tuần thường × 45.000 + 2 tuần sale × 63.000, chia 12. Nó vừa bị sự kiện thổi phồng mức nền, vừa không biết rằng 2–3 tuần trước Tết đơn vọt lên 70.000–82.000 còn tuần Tết rơi xuống 22.000. Kết quả: thiếu người ở đỉnh, thừa người ở tuần Tết.',
            },
            {
              id: 'c',
              text: 'Vì năm 2026 có biến động bất thường, không mô hình nào dự báo được.',
              explain: 'Đỉnh trước Tết lặp lại năm nào cũng có, rất dễ dự báo nếu căn đúng lịch. Gọi nó là "bất thường" là bỏ qua tín hiệu mùa vụ mạnh nhất của chuỗi.',
            },
          ],
        },
      ],
    },
    {
      id: 'calendar',
      kind: 'analysis',
      title: 'Bước 1 — Căn lịch: Tết dịch 3 tuần làm hỏng so sánh cùng kỳ',
      blocks: [
        {
          kind: 'text',
          md: 'Cách "seasonal naive" phổ biến nhất là lấy cùng tuần ISO năm trước. Đặt hai năm cạnh nhau theo tuần dương lịch:',
        },
        {
          kind: 'chart',
          title: 'Đơn/tuần theo tuần dương lịch (ISO): 2025 vs 2026',
          type: 'line',
          xKey: 'week',
          unit: ' nghìn',
          series: [
            { key: 'y2025', label: '2025 (Tết tuần 5)' },
            { key: 'y2026', label: '2026 (Tết tuần 8)' },
          ],
          data: [
            { week: 'Tuần 2', y2025: 64, y2026: 54 },
            { week: 'Tuần 3', y2025: 68, y2026: 55 },
            { week: 'Tuần 4', y2025: 52, y2026: 68 },
            { week: 'Tuần 5', y2025: 18, y2026: 71 },
            { week: 'Tuần 6', y2025: 30, y2026: 82 },
            { week: 'Tuần 7', y2025: 42, y2026: 57 },
            { week: 'Tuần 8', y2025: 44, y2026: 22 },
            { week: 'Tuần 9', y2025: 45, y2026: 33 },
            { week: 'Tuần 10', y2025: 45, y2026: 50 },
          ],
          marker: { x: 'Tuần 8', label: 'Tết 2026 (17/2)' },
          caption: 'Theo tuần ISO, tuần 5 năm 2025 là tuần Tết (18 nghìn) nhưng năm 2026 lại là tuần cao điểm (71 nghìn). Hai đường gần như ngược pha.',
        },
        {
          kind: 'text',
          md: 'Đổi trục x thành **số tuần so với tuần Tết** — hai năm khớp hình dạng gần như hoàn hảo, chỉ khác **mức** (2026 cao hơn ≈ 15%, đúng bằng tăng trưởng nền).',
        },
        {
          kind: 'chart',
          title: 'Đơn/tuần căn theo Tết âm lịch',
          type: 'line',
          xKey: 'rel',
          unit: ' nghìn',
          series: [
            { key: 'y2025', label: 'Mùa Tết 2025' },
            { key: 'y2026', label: 'Mùa Tết 2026' },
          ],
          data: [
            { rel: 'T−6', y2025: 46, y2026: 54 },
            { rel: 'T−5', y2025: 50, y2026: 55 },
            { rel: 'T−4', y2025: 56, y2026: 68 },
            { rel: 'T−3', y2025: 64, y2026: 71 },
            { rel: 'T−2', y2025: 68, y2026: 82 },
            { rel: 'T−1', y2025: 52, y2026: 57 },
            { rel: 'T0', y2025: 18, y2026: 22 },
            { rel: 'T+1', y2025: 30, y2026: 33 },
            { rel: 'T+2', y2025: 42, y2026: 50 },
          ],
          marker: { x: 'T0', label: 'Tuần Tết' },
          caption: 'Đỉnh luôn ở T−2 (khách mua quà, hãng vận chuyển chốt nhận hàng trước nghỉ Tết), đáy ở T0. Đây là chỉ số mùa vụ thật của kho.',
        },
        {
          kind: 'table',
          title: 'Ba thành phần của chuỗi, đo trên dữ liệu đến 12/2025',
          columns: [
            { key: 'part', label: 'Thành phần' },
            { key: 'how', label: 'Cách đo' },
            { key: 'value', label: 'Giá trị', align: 'right' },
          ],
          rows: [
            { part: 'Mức nền (xu hướng)', how: 'Trung bình tuần thường Q4/2025 vs Q4/2024 (bỏ tuần sale)', value: '45.000 vs 39.100 → +15%' },
            { part: 'Mùa vụ Tết', how: 'Đơn tuần T−k / tuần thường cùng năm', value: 'T−2 ≈ 1,7 · T0 ≈ 0,45' },
            { part: 'Sự kiện (sale 11/11, 12/12)', how: 'Tuần sale / tuần thường lân cận', value: '63.000 / 45.000 = 1,4' },
          ],
          caption: 'Sự kiện phải được tách riêng: để nó trong mức nền thì dự báo tuần thường bị thổi phồng, còn tính tăng trưởng thì bị nhiễu nếu năm nay sale rơi lệch tuần.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Với Việt Nam, cột **"tuần so với Tết"** nên là một chiều cố định trong bảng lịch (date dimension) của data warehouse, cùng với cờ ngày sale, ngày nghỉ lễ dương lịch. Không có nó, mọi báo cáo YoY tháng 1–2 đều sai, không riêng gì dự báo.',
        },
      ],
    },
    {
      id: 'backtest',
      kind: 'analysis',
      title: 'Bước 2 — Backtest các baseline trên mùa Tết 2026',
      blocks: [
        {
          kind: 'text',
          md: 'Giả vờ đứng ở cuối tháng 12/2025, chỉ dùng dữ liệu đến lúc đó, dự báo 9 tuần T−6…T+2 của mùa Tết 2026 bằng bốn cách rồi so với thực tế (tổng 492.000 đơn).',
        },
        {
          kind: 'formula',
          expression: 'WAPE = Σ|thực tế − dự báo| / Σ thực tế     ·     MAPE = trung bình(|thực tế − dự báo| / thực tế)     ·     Bias = Σ(dự báo − thực tế) / Σ thực tế',
          note: 'WAPE đo sai số theo **khối lượng đơn** (đúng thứ kho phải xử lý); MAPE cho mỗi tuần trọng số như nhau nên bị phóng đại ở tuần đơn thấp như T0. Bias âm = dự báo thấp hơn thực tế, tức là thiếu người.',
        },
        {
          kind: 'table',
          title: 'Kết quả backtest 9 tuần mùa Tết 2026',
          columns: [
            { key: 'method', label: 'Phương pháp' },
            { key: 'peak', label: 'Dự báo tuần đỉnh T−2', align: 'right' },
            { key: 'wape', label: 'WAPE', align: 'right' },
            { key: 'mape', label: 'MAPE', align: 'right' },
            { key: 'bias', label: 'Bias', align: 'right' },
          ],
          rows: [
            { method: '(A) Trung bình 12 tuần (cách năm ngoái)', peak: '48.000', wape: '28,9%', mape: '34,5%', bias: '−12,2%' },
            { method: '(B) Seasonal naive theo tuần ISO', peak: '30.000', wape: '40,2%', mape: '41,8%', bias: '−17,1%' },
            { method: '(C) Seasonal naive căn theo Tết', peak: '68.000', wape: '13,4%', mape: '13,4%', bias: '−13,4%' },
            { method: '(D) Căn theo Tết × tăng trưởng 1,15', peak: '78.200', wape: '4,2%', mape: '4,3%', bias: '−0,4%' },
          ],
          highlight: [
            { row: 1, tone: 'negative' },
            { row: 3, tone: 'positive' },
          ],
          caption: 'Thực tế tuần đỉnh: 82.000. Cách (B) còn tệ hơn trung bình phẳng vì nó dự báo tuần Tết (18 nghìn) đúng vào tuần cao điểm thật.',
        },
        {
          kind: 'chart',
          title: 'Thực tế mùa Tết 2026 vs hai cách dự báo',
          type: 'line',
          xKey: 'rel',
          unit: ' nghìn',
          series: [
            { key: 'actual', label: 'Thực tế 2026' },
            { key: 'avg', label: '(A) Trung bình 12 tuần' },
            { key: 'snaive', label: '(D) Căn Tết × 1,15' },
          ],
          data: [
            { rel: 'T−6', actual: 54, avg: 48, snaive: 52.9 },
            { rel: 'T−5', actual: 55, avg: 48, snaive: 57.5 },
            { rel: 'T−4', actual: 68, avg: 48, snaive: 64.4 },
            { rel: 'T−3', actual: 71, avg: 48, snaive: 73.6 },
            { rel: 'T−2', actual: 82, avg: 48, snaive: 78.2 },
            { rel: 'T−1', actual: 57, avg: 48, snaive: 59.8 },
            { rel: 'T0', actual: 22, avg: 48, snaive: 20.7 },
            { rel: 'T+1', actual: 33, avg: 48, snaive: 34.5 },
            { rel: 'T+2', actual: 50, avg: 48, snaive: 48.3 },
          ],
          marker: { x: 'T−2', label: 'Tuần đỉnh' },
        },
        {
          kind: 'quiz',
          id: 'demand-forecast-seasonality-q2',
          question: 'Cách (A) có MAPE 34,5% nhưng WAPE 28,9%. Khi chọn thước đo chính cho bài toán nhân sự kho, nên ưu tiên gì?',
          options: [
            {
              id: 'a',
              text: 'MAPE, vì nó là thước đo phổ biến nhất và dễ giải thích.',
              explain: 'MAPE phổ biến nhưng cho tuần T0 (22.000 đơn, sai 118%) trọng số ngang tuần đỉnh 82.000 đơn. Kho không tốn thêm người vì sai số phần trăm ở tuần ít đơn; nó tốn người vì sai số **số đơn** ở tuần nhiều đơn.',
            },
            {
              id: 'b',
              text: 'WAPE làm thước đo chính, kèm bias và sai số riêng ở các tuần đỉnh, vì nhân sự tỷ lệ với khối lượng đơn và thiếu người đắt hơn thừa người.',
              correct: true,
              explain: 'Đúng. WAPE cân theo khối lượng nên khớp với chi phí vận hành. Nhưng WAPE thấp vẫn có thể che một bias âm có hệ thống ở đỉnh (như (C): WAPE 13,4%, bias −13,4%, toàn bộ là dự báo thiếu). Vì vậy luôn báo cáo thêm bias và sai số ở tuần T−3…T−1.',
            },
            {
              id: 'c',
              text: 'Không cần thước đo, chỉ cần nhìn biểu đồ là biết cách nào khớp.',
              explain: 'Mắt thường thấy (D) tốt hơn (A), nhưng không phân biệt được (D) với một mô hình phức tạp hơn sai ít hơn 1 điểm %. Thước đo cố định là điều kiện để so sánh công bằng và theo dõi dự báo qua từng mùa.',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Một mùa chưa đủ để tin',
          md: 'WAPE 4,2% của (D) là trên **một** mùa Tết. Lặp lại backtest cho mùa Tết 2025 (dùng dữ liệu 2024) trước khi tin; dự báo cho nhiều mùa Tết hơn sẽ cho phân phối sai số đáng tin cậy hơn ở Bước 3.',
        },
      ],
    },
    {
      id: 'interval',
      kind: 'analysis',
      title: 'Bước 3 — Từ dự báo điểm đến khoảng dự báo và số người',
      blocks: [
        {
          kind: 'text',
          md: 'Dự báo 2027 dùng cách (D): **thực tế 2026 căn theo Tết × 1,12** (tăng trưởng tuần thường tháng 8–9/2026 so với cùng kỳ: 51.500 vs 46.000). Sai số của (D) qua 2 mùa backtest (18 tuần) cho tỷ lệ *thực tế / dự báo*: P80 = 1,05; P90 = 1,08; P95 = 1,10.',
        },
        {
          kind: 'table',
          title: 'Ba tuần cao điểm Tết 2027: đơn và nhân sự theo từng mức bao phủ',
          columns: [
            { key: 'week', label: 'Tuần' },
            { key: 'p50', label: 'P50 (dự báo điểm)', align: 'right' },
            { key: 'p80', label: 'P80 (×1,05)', align: 'right' },
            { key: 'p95', label: 'P95 (×1,10)', align: 'right' },
            { key: 'staff', label: 'Người cần (P50 / P80 / P95)', align: 'right' },
          ],
          rows: [
            { week: 'T−3 (11/1/2027)', p50: '79.520', p80: '83.496', p95: '87.472', staff: '107 / 112 / 117' },
            { week: 'T−2 (18/1/2027)', p50: '91.840', p80: '96.432', p95: '101.024', staff: '123 / 129 / 135' },
            { week: 'T−1 (25/1/2027)', p50: '63.840', p80: '67.032', p95: '70.224', staff: '86 / 90 / 94' },
          ],
          highlight: [{ row: 1, tone: 'warning' }],
          caption: 'Người cần = đơn / 750, làm tròn lên. So với năm ngoái (64 người cố định), tuần đỉnh 2027 cần gấp đôi.',
        },
        {
          kind: 'formula',
          expression: 'Mức bao phủ tối ưu = Chi phí thiếu 1 người / (Chi phí thiếu + Chi phí thừa) = 11,25 / (11,25 + 3,5) ≈ 0,76',
          note: 'Thiếu 1 người/tuần = 750 đơn trễ × 15.000 đ (voucher bồi thường, CSKH) = 11,25 triệu đ. Thừa 1 người thời vụ = 3,5 triệu đ/tuần. Đây là logic *newsvendor*: chi phí thiếu đắt gấp ~3 lần nên đặt nhân sự cố định ở khoảng P76–P80, không phải P50.',
        },
        {
          kind: 'quiz',
          id: 'demand-forecast-seasonality-q3',
          question: 'Trưởng kho hỏi: "Vậy tuần T−2 em chốt bao nhiêu người?" Phương án nào tốt nhất?',
          options: [
            {
              id: 'a',
              text: 'Chốt 123 người theo dự báo điểm P50; dự báo đã rất chính xác (WAPE 4,2%).',
              explain: 'P50 nghĩa là khoảng một nửa khả năng đơn vượt năng lực. Với chi phí thiếu người gấp ~3 lần thừa người, đặt ở P50 là chấp nhận rủi ro quá lớn.',
            },
            {
              id: 'b',
              text: 'Chốt 135 người (P95) cho cả 9 tuần để chắc chắn không bao giờ thiếu.',
              explain: 'P95 cho tuần đỉnh áp cho cả mùa sẽ thừa hơn 100 người ở tuần Tết (T0 chỉ cần ≈ 33 người). Quá an toàn ở đây là đốt tiền một cách có hệ thống.',
            },
            {
              id: 'c',
              text: 'Ký cứng 129 người (≈ P80) cho tuần T−2, giữ thêm 6 suất thời vụ gọi trong 48h hoặc tăng ca để phủ tới P95, và đặt nhân sự theo từng tuần thay vì một con số cho cả mùa.',
              correct: true,
              explain: 'Đúng. P80 gần với mức bao phủ tối ưu 0,76 tính từ chi phí. Phần đuôi P80→P95 phủ bằng nguồn linh hoạt (rẻ khi không dùng), và mỗi tuần một mức nhân sự riêng vì nhu cầu T−2 gấp 4 lần T0.',
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
          md: '**Kết luận cho trưởng kho:** Năm ngoái thiếu người vì dự báo bằng trung bình phẳng, bỏ qua mùa vụ Tết và lẫn hiệu ứng sale (bias −12%, thiếu 41,5% ở tuần đỉnh). Dự báo mới căn theo Tết âm lịch × tăng trưởng nền đạt WAPE 4,2% khi backtest. Tuần đỉnh Tết 2027 (T−2, từ 18/1) dự kiến **≈ 92.000 đơn (P95 ≈ 101.000)** → ký cứng 129 người, dự phòng tới 135.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Chốt kế hoạch nhân sự theo tuần T−6…T+2 ở mức P80; ký hợp đồng thời vụ trước 15/11 cho phần chênh so với nhân sự cơ hữu',
              owner: 'Trưởng kho + HR',
              metric: 'Tỷ lệ đơn xử lý trong 24h ở các tuần T−3…T−1',
              threshold: '≥ 95% mỗi tuần',
            },
            {
              action: 'Ký khung với agency thời vụ cho 6 suất gọi trong 48h + phương án tăng ca, kích hoạt khi đơn thực tế 3 ngày liên tiếp vượt P80',
              owner: 'Trưởng kho',
              metric: 'Đơn tồn quá 24h cuối ngày',
              threshold: '< 3.000 đơn',
            },
            {
              action: 'Thêm cột "tuần so với Tết" và cờ sự kiện sale vào bảng lịch dùng chung; cập nhật dự báo hằng tuần từ T−8 bằng dữ liệu mới nhất',
              owner: 'Data/Analytics',
              metric: 'WAPE và bias của dự báo cập nhật cho 9 tuần mùa Tết',
              threshold: 'WAPE ≤ 8%, |bias| ≤ 3%',
            },
            {
              action: 'Hậu kiểm sau Tết: so dự báo – thực tế theo tuần, cập nhật phân phối sai số cho mùa sau',
              owner: 'Data/Analytics',
              metric: 'Tỷ lệ tuần thực tế nằm trong khoảng P80',
              threshold: '≈ 8/10 tuần (khoảng dự báo được hiệu chỉnh đúng)',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Không cần mô hình phức tạp: một **baseline đúng lịch** đã giảm WAPE từ 28,9% xuống 4,2%. Giá trị lớn nhất nằm ở việc **chuyển dự báo thành quyết định có chi phí**: nhân sự cố định theo mức bao phủ tối ưu, phần đuôi rủi ro phủ bằng nguồn linh hoạt, và cơ chế kích hoạt dựa trên số thực tế hằng ngày. Khi đã có baseline và thước đo này, mọi mô hình mới (ETS, Prophet, ML) đều phải chứng minh tốt hơn trên cùng backtest mới được dùng.',
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
              title: 'So cùng kỳ theo tuần dương lịch khi mùa vụ chạy theo âm lịch',
              why: 'Tết xê dịch 3–4 tuần, nên "cùng tuần năm trước" có thể là tuần Tết của năm này so với tuần cao điểm của năm kia. Seasonal naive theo tuần ISO còn tệ hơn trung bình phẳng (WAPE 40,2%).',
              instead: 'Căn theo sự kiện quyết định nhu cầu (tuần so với Tết, ngày sale), lưu thành một chiều cố định trong bảng lịch.',
            },
            {
              title: 'Chỉ báo cáo MAPE (hoặc một con số sai số duy nhất)',
              why: 'MAPE bị phóng đại ở tuần ít đơn và không cho biết dự báo thiếu hay thừa. Một mô hình WAPE thấp vẫn có thể thiếu có hệ thống đúng ở tuần đỉnh.',
              instead: 'Dùng WAPE làm thước đo chính, luôn kèm bias và sai số ở các tuần đỉnh, và chấm điểm bằng backtest chứ không phải độ khớp trên dữ liệu huấn luyện.',
            },
            {
              title: 'Lên kế hoạch theo dự báo điểm',
              why: 'Dự báo điểm là trung vị: khoảng một nửa số tuần sẽ vượt nó. Khi thiếu người đắt gấp 3 lần thừa người, đặt nhân sự ở P50 là cố ý thiếu người.',
              instead: 'Báo cáo khoảng dự báo (P80, P95) từ phân phối sai số thật, chọn mức bao phủ theo tỷ lệ chi phí thiếu/thừa, phần đuôi phủ bằng nguồn lực linh hoạt.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Phân rã chuỗi thành mức nền × mùa vụ × sự kiện, và căn theo đúng lịch tạo ra nhu cầu (Tết âm lịch), trước khi chọn bất kỳ mô hình nào.',
    'Luôn dựng baseline đơn giản (seasonal naive, × tăng trưởng YoY) và backtest bằng WAPE + bias; mô hình phức tạp phải thắng baseline mới được dùng.',
    'Ra quyết định bằng khoảng dự báo chứ không phải dự báo điểm: chọn mức bao phủ theo chi phí thiếu vs thừa, phủ phần đuôi bằng nguồn lực linh hoạt.',
  ],
  references: [
    {
      title: 'Forecasting: Principles and Practice (3rd ed) — 5.2 Some simple forecasting methods',
      publisher: 'Rob J Hyndman & George Athanasopoulos (OTexts)',
      url: 'https://otexts.com/fpp3/simple-methods.html',
      note: 'Mean, naive, seasonal naive và drift: các baseline mọi dự báo phải thắng được.',
    },
    {
      title: 'Forecasting: Principles and Practice (3rd ed) — 5.8 Evaluating point forecast accuracy',
      publisher: 'Rob J Hyndman & George Athanasopoulos (OTexts)',
      url: 'https://otexts.com/fpp3/accuracy.html',
      note: 'Tập train/test, sai số phần trăm (MAPE) và hạn chế của nó, sai số theo thang đo.',
    },
    {
      title: 'Forecasting: Principles and Practice (3rd ed) — 5.5 Distributional forecasts and prediction intervals',
      publisher: 'Rob J Hyndman & George Athanasopoulos (OTexts)',
      url: 'https://otexts.com/fpp3/prediction-intervals.html',
      note: 'Cách xây khoảng dự báo, kể cả bằng bootstrap phần dư khi sai số không chuẩn.',
    },
  ],
}
