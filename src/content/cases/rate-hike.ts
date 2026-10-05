import type { CaseStudy } from '../types'

/*
 * Nền kinh tế giả định (không mô tả bất kỳ quốc gia hay quyết định chính sách có thật nào).
 * Số liệu mock, đã kiểm tra khớp nhau:
 *   Lạm phát tổng (CPI, so cùng kỳ) tháng gần nhất 6,8%; mục tiêu 3,0%.
 *   Đóng góp theo nhóm = tỷ trọng × lạm phát nhóm:
 *     Lương thực 30% × 8,0% = 2,40 · Năng lượng 10% × 9,0% = 0,90
 *     Hàng hóa lõi 25% × 4,2% = 1,05 · Dịch vụ 35% × 7,1% = 2,485
 *     Tổng = 6,835 ≈ 6,8% ; Lõi = (1,05 + 2,485) / 0,60 = 5,89 ≈ 5,9%
 *   Lãi suất điều hành 4,5%; kỳ vọng lạm phát 12 tháng tới (khảo sát) 6,0%
 *     → lãi suất thực kỳ vọng = 4,5 − 6,0 = −1,5%. Sau tăng 1,0 điểm %: 5,5 − 6,0 = −0,5%.
 *   Tăng trưởng tín dụng 18% (TB 5 năm 12%); GDP so cùng kỳ 6,9 → 6,7 → 6,4 → 6,1 (tiềm năng ~6,0).
 *   Đồng nội tệ mất giá 6% so cùng kỳ; giả định hệ số truyền dẫn tỷ giá 0,1–0,2 → 0,6–1,2 điểm % lạm phát.
 *   Biểu đồ độ trễ là minh họa cách điệu (% tác động tối đa), không phải ước lượng.
 */
export const rateHike: CaseStudy = {
  id: 'rate-hike',
  title: 'Vì sao ngân hàng trung ương cân nhắc tăng lãi suất?',
  domain: 'macro',
  level: 'junior',
  minutes: 10,
  skills: ['macro', 'causal', 'tradeoff', 'metric-definition'],
  question:
    'Lạm phát cao dai dẳng, cầu nội địa mạnh, tỷ giá chịu áp lực. Tăng lãi suất có hợp lý không, nó tác động qua những kênh nào, và làm sao biết nó có hiệu quả?',
  summary:
    'Đọc lạm phát đúng cách (tổng vs lõi, mức độ lan rộng), lần theo các kênh truyền dẫn lãi suất và độ trễ, rồi viết một bản brief có chỉ số và ngưỡng để đánh giá chính sách.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst kinh tế vĩ mô ở một công ty nghiên cứu, theo dõi một **nền kinh tế giả định** (số liệu mô phỏng). Ngân hàng trung ương nước này có nhiệm vụ giữ lạm phát quanh **3%** trong trung hạn, đồng thời quan tâm đến ổn định tài chính và tăng trưởng. Trưởng nhóm yêu cầu: *"Viết brief 1 trang: tăng lãi suất lúc này có hợp lý không, và mình sẽ theo dõi gì để biết nó có tác dụng."*',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Lạm phát tổng (CPI)', value: '6,8%', delta: '+2,6 điểm % trong 12 tháng', tone: 'negative', note: 'mục tiêu 3%' },
            { label: 'Lạm phát lõi', value: '5,9%', delta: '+2,3 điểm %', tone: 'negative', note: 'bỏ lương thực, năng lượng' },
            { label: 'Tăng trưởng tín dụng', value: '18%', delta: 'TB 5 năm: 12%', tone: 'warning' },
            { label: 'Nội tệ so với USD', value: '−6%', delta: 'so cùng kỳ', tone: 'warning' },
            { label: 'GDP so cùng kỳ', value: '6,1%', delta: 'từ 6,9% bốn quý trước', tone: 'neutral', note: 'đang chậm lại' },
            { label: 'Lãi suất điều hành', value: '4,5%', tone: 'neutral' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu của buổi phân tích',
          md: 'Không phải "đoán" ngân hàng trung ương sẽ làm gì, mà là **lập luận có cấu trúc**: lạm phát này có bản chất gì (cú sốc cung tạm thời hay áp lực cầu lan rộng), lãi suất tác động qua kênh nào và sau bao lâu, và những chỉ số nào cho biết chính sách đang phát huy tác dụng.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: nhiệm vụ → bản chất lạm phát → kênh truyền dẫn → độ trễ',
      blocks: [
        {
          kind: 'formula',
          expression: 'Lãi suất thực (kỳ vọng) ≈ Lãi suất danh nghĩa − Lạm phát kỳ vọng',
          note: 'Hành vi vay, tiết kiệm, đầu tư phản ứng với lãi suất **thực**. Lãi suất điều hành 4,5% khi mọi người kỳ vọng giá tăng 6% nghĩa là lãi suất thực −1,5%: tiền vay "rẻ", chính sách đang nới lỏng chứ không thắt chặt.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Nhiệm vụ**: ngân hàng trung ương nhắm lạm phát *trung hạn*, nên quan tâm phần lạm phát dai dẳng hơn là biến động một tháng.',
            '**Bản chất lạm phát**: tách tổng và lõi, xem đóng góp từng nhóm và mức độ lan rộng; cú sốc giá năng lượng thuần túy thường tự qua, áp lực cầu và kỳ vọng thì không.',
            '**Kênh truyền dẫn**: lãi suất thị trường → tín dụng → tỷ giá → giá tài sản → kỳ vọng. Mỗi kênh có chỉ số đo riêng.',
            '**Độ trễ và trade-off**: tác động lên lạm phát thường mất khoảng 12–24 tháng; trong lúc chờ, tăng trưởng chậm lại là cái giá phải trả.',
          ],
        },
        {
          kind: 'quiz',
          id: 'rate-hike-q1',
          question: 'Bằng chứng nào ủng hộ mạnh nhất việc thắt chặt tiền tệ thay vì chờ lạm phát tự hạ?',
          options: [
            {
              id: 'a',
              text: 'Giá năng lượng tăng 9%, đóng góp gần 1 điểm % vào lạm phát tổng.',
              explain:
                'Cú sốc giá năng lượng là cú sốc cung, thường tự đảo chiều khi giá thế giới ổn định. Tăng lãi suất không làm giá dầu giảm; nếu chỉ có bằng chứng này, ngân hàng trung ương thường "nhìn xuyên qua" (look through) cú sốc.',
            },
            {
              id: 'b',
              text: 'Lạm phát lõi tăng liên tục lên 5,9%, lạm phát dịch vụ 7,1%, tín dụng tăng 18% và kỳ vọng lạm phát lên 6%.',
              correct: true,
              explain:
                'Đúng. Lạm phát lõi và dịch vụ phản ánh áp lực cầu và chi phí lao động trong nước; tín dụng nóng cho thấy cầu được tài trợ bằng vay; kỳ vọng tăng làm lạm phát tự duy trì. Đây chính là loại lạm phát mà lãi suất tác động được.',
            },
            {
              id: 'c',
              text: 'Tăng trưởng GDP đang chậm lại từ 6,9% xuống 6,1%.',
              explain:
                'GDP chậm lại là lý do để **thận trọng** khi tăng lãi suất, không phải lý do để tăng. Nó là phía "chi phí" của trade-off, cần cân nhắc cùng mức độ lạm phát.',
            },
          ],
        },
      ],
    },
    {
      id: 'inflation',
      kind: 'analysis',
      title: 'Bước 1 — Đọc lạm phát: không chỉ là giá xăng',
      blocks: [
        {
          kind: 'chart',
          title: 'Lạm phát tổng, lõi và mục tiêu (so cùng kỳ, 12 tháng gần nhất)',
          type: 'line',
          xKey: 'month',
          unit: '%',
          series: [
            { key: 'headline', label: 'Lạm phát tổng' },
            { key: 'core', label: 'Lạm phát lõi' },
            { key: 'target', label: 'Mục tiêu' },
          ],
          data: [
            { month: 'T1', headline: 4.2, core: 3.6, target: 3 },
            { month: 'T2', headline: 4.5, core: 3.8, target: 3 },
            { month: 'T3', headline: 4.9, core: 4.1, target: 3 },
            { month: 'T4', headline: 5.3, core: 4.4, target: 3 },
            { month: 'T5', headline: 5.6, core: 4.7, target: 3 },
            { month: 'T6', headline: 5.9, core: 4.9, target: 3 },
            { month: 'T7', headline: 6.1, core: 5.1, target: 3 },
            { month: 'T8', headline: 6.3, core: 5.3, target: 3 },
            { month: 'T9', headline: 6.5, core: 5.5, target: 3 },
            { month: 'T10', headline: 6.6, core: 5.6, target: 3 },
            { month: 'T11', headline: 6.7, core: 5.8, target: 3 },
            { month: 'T12', headline: 6.8, core: 5.9, target: 3 },
          ],
          caption: 'Lõi đi cùng chiều với tổng và gần gấp đôi mục tiêu: lạm phát không chỉ đến từ lương thực, năng lượng.',
        },
        {
          kind: 'table',
          title: 'Đóng góp vào lạm phát tổng tháng T12',
          columns: [
            { key: 'group', label: 'Nhóm' },
            { key: 'weight', label: 'Tỷ trọng rổ CPI', align: 'right' },
            { key: 'infl', label: 'Lạm phát nhóm', align: 'right' },
            { key: 'contrib', label: 'Đóng góp (điểm %)', align: 'right' },
          ],
          rows: [
            { group: 'Lương thực, thực phẩm', weight: '30%', infl: '8,0%', contrib: '2,40' },
            { group: 'Năng lượng', weight: '10%', infl: '9,0%', contrib: '0,90' },
            { group: 'Hàng hóa lõi (gồm hàng nhập khẩu)', weight: '25%', infl: '4,2%', contrib: '1,05' },
            { group: 'Dịch vụ (thuê nhà, ăn uống, y tế…)', weight: '35%', infl: '7,1%', contrib: '2,49' },
            { group: 'Tổng', weight: '100%', infl: '6,8%', contrib: '6,84' },
          ],
          highlight: [{ row: 3, tone: 'negative' }],
          caption: 'Lõi = (1,05 + 2,49) / 0,60 ≈ 5,9%. Dịch vụ là nhóm đóng góp lớn thứ hai và gắn chặt với tiền lương, cầu trong nước.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của chuyên gia: đo "độ lan rộng"',
          md: 'Ngoài con số trung bình, hãy đếm **tỷ lệ mặt hàng trong rổ CPI tăng giá > 5%/năm**. Trong nền kinh tế giả định này, tỷ lệ đó tăng từ 25% lên 58% sau 12 tháng. Lạm phát lan rộng sang nhiều mặt hàng là dấu hiệu áp lực chung (cầu, lương, kỳ vọng), khó tự hạ hơn một cú sốc giá ở vài mặt hàng.',
        },
      ],
    },
    {
      id: 'drivers',
      kind: 'analysis',
      title: 'Bước 2 — Nguồn áp lực: cầu nóng, lãi suất thực âm, tỷ giá',
      blocks: [
        {
          kind: 'table',
          title: 'Các chỉ báo áp lực cầu và tỷ giá',
          columns: [
            { key: 'ind', label: 'Chỉ báo' },
            { key: 'value', label: 'Hiện tại', align: 'right' },
            { key: 'bench', label: 'Mốc so sánh', align: 'right' },
            { key: 'read', label: 'Cách đọc' },
          ],
          rows: [
            { ind: 'Tăng trưởng tín dụng', value: '18%', bench: 'TB 5 năm 12%', read: 'Cầu được tài trợ bằng vay, mạnh hơn bình thường' },
            { ind: 'Lãi suất thực kỳ vọng', value: '−1,5%', bench: '> 0 khi thắt chặt', read: 'Chính sách thực chất đang nới lỏng' },
            { ind: 'GDP so cùng kỳ', value: '6,1%', bench: 'Tiềm năng ~6,0%', read: 'Đang chậm lại nhưng vẫn ở/trên tiềm năng' },
            { ind: 'Nội tệ so với USD', value: '−6%', bench: '—', read: 'Hàng nhập đắt hơn: ước 0,6–1,2 điểm % lạm phát' },
            { ind: 'Kỳ vọng lạm phát 12 tháng (khảo sát)', value: '6,0%', bench: '4,0% một năm trước', read: 'Kỳ vọng đang lệch khỏi mục tiêu' },
          ],
          highlight: [
            { row: 1, tone: 'negative' },
            { row: 4, tone: 'negative' },
          ],
          caption: 'Ước tính tỷ giá dùng hệ số truyền dẫn giả định 0,1–0,2: 6% × 0,1 = 0,6 và 6% × 0,2 = 1,2 điểm %.',
        },
        {
          kind: 'table',
          title: 'Các kênh truyền dẫn của lãi suất và chỉ số đo',
          columns: [
            { key: 'channel', label: 'Kênh' },
            { key: 'mech', label: 'Cơ chế' },
            { key: 'metric', label: 'Chỉ số theo dõi' },
            { key: 'lag', label: 'Độ trễ điển hình', align: 'right' },
          ],
          rows: [
            { channel: 'Lãi suất thị trường', mech: 'Lãi suất liên ngân hàng, lợi suất trái phiếu tăng theo', metric: 'Lãi suất qua đêm, lợi suất 2 năm', lag: 'Vài ngày – vài tuần' },
            { channel: 'Tín dụng', mech: 'Vay đắt hơn → ít vay mua nhà, đầu tư, tiêu dùng', metric: 'Lãi suất cho vay mới, tăng trưởng tín dụng', lag: '3–12 tháng' },
            { channel: 'Tỷ giá', mech: 'Chênh lệch lãi suất hấp dẫn vốn hơn → nội tệ bớt mất giá → hàng nhập rẻ hơn', metric: 'Tỷ giá, dòng vốn, dự trữ ngoại hối', lag: 'Vài tuần – 6 tháng' },
            { channel: 'Giá tài sản', mech: 'Giá cổ phiếu, nhà đất hạ nhiệt → hộ gia đình chi tiêu thận trọng hơn', metric: 'Chỉ số giá nhà, chứng khoán', lag: '3–12 tháng' },
            { channel: 'Kỳ vọng', mech: 'Thể hiện cam kết chống lạm phát → doanh nghiệp, người lao động bớt nâng giá/lương', metric: 'Khảo sát kỳ vọng lạm phát', lag: 'Có thể rất nhanh nếu đáng tin' },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Tương quan chưa phải nhân quả',
          md: 'Tín dụng nóng và lạm phát cao xảy ra cùng lúc không chứng minh cái này gây ra cái kia; cả hai có thể cùng do lãi suất thực âm kéo dài. Brief nên nêu **cơ chế** và **chỉ số kiểm chứng** cho từng kênh, thay vì chỉ đặt hai đường biểu đồ cạnh nhau.',
        },
      ],
    },
    {
      id: 'lags',
      kind: 'analysis',
      title: 'Bước 3 — Độ trễ và trade-off: đừng chấm điểm chính sách quá sớm',
      blocks: [
        {
          kind: 'chart',
          title: 'Minh họa: tác động tích lũy theo thời gian sau khi tăng lãi suất (% tác động tối đa)',
          type: 'line',
          xKey: 'month',
          unit: '%',
          series: [
            { key: 'interbank', label: 'Lãi suất liên ngân hàng' },
            { key: 'lending', label: 'Lãi suất cho vay mới' },
            { key: 'credit', label: 'Tăng trưởng tín dụng' },
            { key: 'core', label: 'Lạm phát lõi' },
          ],
          data: [
            { month: 'Tháng 0', interbank: 90, lending: 30, credit: 0, core: 0 },
            { month: 'Tháng 3', interbank: 100, lending: 70, credit: 15, core: 5 },
            { month: 'Tháng 6', interbank: 100, lending: 90, credit: 40, core: 15 },
            { month: 'Tháng 9', interbank: 100, lending: 100, credit: 65, core: 30 },
            { month: 'Tháng 12', interbank: 100, lending: 100, credit: 85, core: 55 },
            { month: 'Tháng 18', interbank: 100, lending: 100, credit: 100, core: 85 },
            { month: 'Tháng 24', interbank: 100, lending: 100, credit: 100, core: 100 },
          ],
          marker: { x: 'Tháng 0', label: 'Tăng lãi suất' },
          caption: 'Đường cách điệu để minh họa thứ tự phản ứng, không phải ước lượng. Thị trường tài chính phản ứng ngay; lạm phát lõi thường cần khoảng 12–24 tháng.',
        },
        {
          kind: 'table',
          title: 'So sánh các phương án (nền kinh tế giả định)',
          columns: [
            { key: 'opt', label: 'Phương án' },
            { key: 'real', label: 'Lãi suất thực kỳ vọng', align: 'right' },
            { key: 'pro', label: 'Lợi ích' },
            { key: 'con', label: 'Chi phí / rủi ro' },
          ],
          rows: [
            { opt: 'Giữ 4,5%', real: '−1,5%', pro: 'Không thêm áp lực lên tăng trưởng đang chậm lại', con: 'Kỳ vọng lạm phát có thể neo cao hơn, tỷ giá tiếp tục chịu áp lực' },
            { opt: 'Tăng 0,5 điểm % (5,0%)', real: '−1,0%', pro: 'Gửi tín hiệu, tác động lên tăng trưởng nhỏ', con: 'Có thể chưa đủ để hãm tín dụng; chính sách vẫn nới lỏng về thực chất' },
            { opt: 'Tăng 1,0 điểm % (5,5%)', real: '−0,5%', pro: 'Tín hiệu mạnh, hỗ trợ tỷ giá và kỳ vọng', con: 'Chi phí vay tăng với hộ và doanh nghiệp; tăng trưởng chậm hơn' },
          ],
          caption: 'Lãi suất thực tính với kỳ vọng lạm phát giữ ở 6,0%. Nếu kỳ vọng giảm nhờ tín hiệu chính sách, lãi suất thực sẽ tăng thêm mà không cần tăng danh nghĩa.',
        },
        {
          kind: 'quiz',
          id: 'rate-hike-q2',
          question: 'Ba tháng sau khi tăng lãi suất 1 điểm %, lạm phát tổng vẫn 6,8%. Nhận định nào đúng nhất?',
          options: [
            {
              id: 'a',
              text: 'Chính sách thất bại, nên đảo chiều giảm lãi suất để hỗ trợ tăng trưởng.',
              explain:
                'Ba tháng là quá sớm để lạm phát phản ứng; độ trễ thường 12–24 tháng. Đảo chiều sớm làm mất uy tín và có thể đẩy kỳ vọng lạm phát lên thêm.',
            },
            {
              id: 'b',
              text: 'Chưa thể đánh giá qua lạm phát; nên kiểm tra các chỉ báo sớm: lãi suất cho vay mới đã tăng chưa, tín dụng có chậm lại, tỷ giá và kỳ vọng lạm phát có ổn định hơn không.',
              correct: true,
              explain:
                'Đúng. Đánh giá chính sách theo thứ tự truyền dẫn: kênh nhanh (lãi suất thị trường, tỷ giá, kỳ vọng) cho biết chính sách đã "đi vào" hệ thống chưa; lạm phát là kết quả đến sau.',
            },
            {
              id: 'c',
              text: 'Cần tăng thêm ngay 2 điểm % vì lạm phát không giảm.',
              explain:
                'Phản ứng theo lạm phát hiện tại mà bỏ qua độ trễ dễ dẫn đến thắt chặt quá mức: khi tác động cộng dồn xuất hiện sau 1–2 năm, nền kinh tế có thể suy giảm mạnh hơn cần thiết.',
            },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp tối ưu: một brief có chỉ số và ngưỡng',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận của brief:** Trong nền kinh tế giả định này, lạm phát không chỉ là cú sốc giá năng lượng: lạm phát lõi 5,9%, dịch vụ 7,1%, lan rộng sang 58% mặt hàng, tín dụng tăng 18% và kỳ vọng lạm phát lên 6% khi lãi suất thực đang âm 1,5%. Lập luận cho việc tăng lãi suất là **hợp lý**, với cái giá là tăng trưởng chậm hơn. Vì độ trễ dài, brief cần nói rõ *đo cái gì, khi nào* để đánh giá, thay vì chờ lạm phát.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Theo dõi truyền dẫn sang lãi suất thị trường và lãi suất cho vay mới hằng tuần',
              owner: 'Analyst vĩ mô (thị trường tiền tệ)',
              metric: 'Mức tăng lãi suất cho vay mới / mức tăng lãi suất điều hành',
              threshold: '≥ 70% sau 3 tháng; thấp hơn nghĩa là truyền dẫn bị tắc',
            },
            {
              action: 'Theo dõi tín dụng theo lĩnh vực (tiêu dùng, bất động sản, doanh nghiệp) hằng tháng',
              owner: 'Analyst vĩ mô (tín dụng)',
              metric: 'Tăng trưởng tín dụng so cùng kỳ',
              threshold: 'Giảm từ 18% về vùng 12–14% trong 6–9 tháng',
            },
            {
              action: 'Theo dõi tỷ giá và kỳ vọng lạm phát qua khảo sát doanh nghiệp, hộ gia đình',
              owner: 'Analyst vĩ mô (đối ngoại, khảo sát)',
              metric: 'Biến động tỷ giá; kỳ vọng lạm phát 12 tháng',
              threshold: 'Kỳ vọng < 5% trong 6 tháng; tỷ giá không mất giá thêm > 3%',
            },
            {
              action: 'Đo kết quả cuối bằng lạm phát lõi theo nhịp 3 tháng quy năm và mức độ lan rộng',
              owner: 'Trưởng nhóm phân tích vĩ mô',
              metric: 'Lạm phát lõi 3 tháng quy năm; % mặt hàng tăng > 5%',
              threshold: 'Lõi < 4% và độ lan rộng < 35% sau 12–18 tháng',
            },
            {
              action: 'Guardrail tăng trưởng: theo dõi phía chi phí của chính sách',
              owner: 'Trưởng nhóm phân tích vĩ mô',
              metric: 'GDP so cùng kỳ, tỷ lệ thất nghiệp, nợ quá hạn ngân hàng',
              threshold: 'Cảnh báo nếu GDP < 4,5% hoặc thất nghiệp tăng > 1 điểm % trong 12 tháng',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách tiếp cận tối ưu',
          md: 'Brief tốt không dừng ở "nên tăng hay không" mà tạo ra một **bảng chấm điểm theo trình tự truyền dẫn**: chỉ báo nhanh cho biết chính sách đã đi vào hệ thống chưa, chỉ báo chậm cho biết nó có đạt mục tiêu không, guardrail cho biết cái giá có vượt mức chấp nhận được không. Nhờ vậy không ai kết luận vội sau 3 tháng, cũng không ai bỏ qua tín hiệu sai hướng.',
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
              title: 'Chỉ nhìn lạm phát tổng',
              why: 'Lạm phát tổng có thể bị chi phối bởi cú sốc cung (năng lượng, thời tiết) mà lãi suất không tác động được. Dựa vào nó dễ dẫn đến phản ứng quá mức hoặc sai lý do.',
              instead: 'Tách lạm phát lõi, đóng góp theo nhóm và độ lan rộng; hỏi "phần nào là áp lực cầu và kỳ vọng".',
            },
            {
              title: 'Đánh giá chính sách quá sớm',
              why: 'Lạm phát phản ứng sau khoảng 12–24 tháng. Kết luận "không hiệu quả" sau vài tháng bỏ qua độ trễ và có thể dẫn đến đảo chiều sai.',
              instead: 'Đánh giá theo thứ tự kênh truyền dẫn: lãi suất thị trường → tín dụng, tỷ giá, kỳ vọng → lạm phát lõi.',
            },
            {
              title: 'Nhầm lãi suất danh nghĩa với mức thắt chặt',
              why: 'Lãi suất 5,5% nghe có vẻ cao, nhưng khi kỳ vọng lạm phát 6% thì lãi suất thực vẫn âm; chính sách chưa thật sự thắt chặt.',
              instead: 'Luôn quy đổi sang lãi suất thực (danh nghĩa trừ kỳ vọng lạm phát) khi nhận định chính sách nới hay thắt.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Đọc lạm phát qua lõi, đóng góp theo nhóm và độ lan rộng để biết đó là cú sốc cung hay áp lực cầu và kỳ vọng.',
    'Lãi suất tác động qua nhiều kênh với độ trễ khác nhau; lạm phát thường phản ứng sau khoảng 12–24 tháng.',
    'Brief tốt có chỉ báo sớm, chỉ báo kết quả và guardrail tăng trưởng, mỗi chỉ báo kèm ngưỡng và mốc thời gian.',
  ],
  references: [
    {
      title: 'Monetary Policy: What Are Its Goals? How Does It Work?',
      publisher: 'Federal Reserve Board',
      url: 'https://www.federalreserve.gov/monetarypolicy/monetary-policy-what-are-its-goals-how-does-it-work.htm',
      note: 'Giải thích nhiệm vụ của ngân hàng trung ương và cách lãi suất chính sách lan sang điều kiện tài chính, chi tiêu và lạm phát.',
    },
    {
      title: 'Transmission mechanism of monetary policy',
      publisher: 'European Central Bank',
      url: 'https://www.ecb.europa.eu/mopo/intro/transmission/html/index.en.html',
      note: 'Sơ đồ các kênh truyền dẫn (lãi suất, tín dụng, tỷ giá, giá tài sản, kỳ vọng) và độ trễ của chính sách.',
    },
    {
      title: 'Two per cent inflation target',
      publisher: 'European Central Bank',
      url: 'https://www.ecb.europa.eu/mopo/strategy/pricestab/html/index.en.html',
      note: 'Vì sao ngân hàng trung ương đặt mục tiêu lạm phát 2% và nhắm đạt nó trong trung hạn thay vì từng tháng.',
    },
  ],
}
