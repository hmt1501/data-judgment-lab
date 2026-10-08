import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — mùa cao điểm 6 tuần (42 ngày), đơn trung bình/ngày, đã kiểm tra khớp nhau:
 *   Công suất kho hiện tại 30.000 đơn/ngày. Chi phí mỗi đơn trễ/hủy (hoàn tiền, voucher, mất khách): 38.000 đ.
 *   Kịch bản nhu cầu cao điểm: Thấp 30.000 (P=25%) · Cơ sở 36.000 (P=50%) · Cao 44.000 (P=25%) → kỳ vọng 36.500
 *   Không làm gì: đơn vượt công suất × 42 × 38.000 đ → Thấp 0 · Cơ sở 6.000 × 42 = 252.000 đơn = 9,576 tỷ · Cao 14.000 × 42 = 588.000 đơn = 22,344 tỷ
 *     kỳ vọng 0,5 × 9,576 + 0,25 × 22,344 = 10,374 tỷ
 *   (A) Thuê cố định 12 tháng, +10.000 đơn/ngày (công suất 40.000): phí 4,8 tỷ, dùng hay không đều trả
 *       Thấp 4,8 · Cơ sở 4,8 · Cao 4,8 + (4.000 × 42 × 38.000 = 6,384) = 11,184 → kỳ vọng 6,396 tỷ
 *   (B) Hợp đồng ngắn hạn có quyền chọn: phí giữ chỗ 0,6 tỷ (không hoàn), kích hoạt thêm 2,1 tỷ (3 tháng, +10.000 đơn/ngày)
 *       Thấp 0,6 (không kích hoạt) · Cơ sở 2,7 · Cao 2,7 + 6,384 = 9,084 → kỳ vọng 0,15 + 1,35 + 2,271 = 3,771 tỷ
 *   (C) 3PL cam kết tối thiểu 4.000 đơn/ngày × 9.000 đ/đơn × 42 = 1,512 tỷ (trả dù không dùng); phần vượt cam kết 11.000 đ/đơn;
 *       3PL trễ 6% số đơn nhận (38.000 đ/đơn trễ); tối đa 15.000 đơn/ngày
 *       Thấp 1,512 · Cơ sở 1,512 + (2.000 × 42 × 11.000 = 0,924) + (252.000 × 6% × 38.000 = 0,575) = 3,011
 *       Cao 1,512 + (10.000 × 42 × 11.000 = 4,620) + (588.000 × 6% × 38.000 = 1,341) = 7,473 → kỳ vọng 0,378 + 1,5055 + 1,868 = 3,752 tỷ
 *   (D) = (B) + 3PL linh hoạt không cam kết cho phần vượt 40.000 (11.000 đ/đơn, trễ 6%):
 *       Cao 2,7 + (168.000 × 11.000 = 1,848) + (168.000 × 6% × 38.000 = 0,383) = 4,931 · Thấp 0,6 · Cơ sở 2,7 → kỳ vọng 0,15 + 1,35 + 1,233 = 2,733 tỷ
 *   Độ nhạy theo xác suất (Thấp/Cơ sở/Cao) — kỳ vọng tỷ đ:
 *     25/50/25: không làm 10,374 · A 6,396 · B 3,771 · C 3,752 · D 2,733
 *     20/40/40: không làm 12,768 · A 7,354 · B 4,834 · C 4,496 · D 3,172
 *     40/40/20: không làm  8,299 · A 6,077 · B 3,137 · C 3,304 · D 2,306
 *   Ngưỡng kích hoạt (B): lợi ích tránh được khi vượt 30.000 = Cơ sở 9,576 − 0 · Cao 22,344 − 6,384 = 15,960
 *     kỳ vọng có điều kiện (Cơ sở:Cao = 2:1) = (0,5 × 9,576 + 0,25 × 15,96) / 0,75 = 11,704 tỷ → hòa vốn khi P(vượt 30.000) = 2,1 / 11,704 ≈ 18%
 */
export const warehouseCapacityTradeoff: CaseStudy = {
  id: 'warehouse-capacity-tradeoff',
  title: 'Thuê thêm công suất kho cho mùa cao điểm: cố định, linh hoạt hay 3PL?',
  domain: 'logistics',
  level: 'senior',
  minutes: 14,
  skills: ['operations', 'tradeoff', 'seasonality'],
  question:
    'Dự báo mùa cao điểm có khoảng bất định lớn. Nên thuê thêm công suất kho theo cách nào (cố định, hợp đồng ngắn hạn linh hoạt, hay thuê ngoài 3PL), và khi nào kích hoạt?',
  summary:
    'Chuyển bài toán công suất từ "một con số dự báo" sang kịch bản có xác suất, so chi phí thuê dư với chi phí trễ/hủy đơn, rồi chọn phương án chịu được sai số và đặt ngưỡng kích hoạt từ điểm hòa vốn.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst cấp cao của một sàn thương mại điện tử. Giám đốc Chuỗi cung ứng cần quyết định trong tuần này, vì mọi lựa chọn đều có thời gian chờ: *"Kho hiện xử lý tối đa 30.000 đơn/ngày. Mùa 11.11 đến 12.12 (6 tuần) có thể vượt. Dự báo của em là bao nhiêu, và mình nên thuê gì?"* Dự báo không phải một con số, mà là một khoảng:',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Công suất kho hiện tại', value: '30.000 đơn/ngày' },
            { label: 'Cao điểm dự báo (P50)', value: '36.000 đơn/ngày', delta: '+20% so với công suất', tone: 'warning' },
            { label: 'Khoảng bất định (kịch bản)', value: '30.000 – 44.000', note: 'Thấp 25% · Cơ sở 50% · Cao 25%' },
            { label: 'Chi phí 1 đơn trễ/hủy', value: '38.000 đ', note: 'Hoàn tiền, voucher, mất khách' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu của buổi phân tích',
          md: 'Tìm **phương án tốt nhất khi chưa biết nhu cầu thật**, không phải phương án tốt nhất cho dự báo trung bình. Mọi số liệu trong case đều là **mô phỏng**; điều cần học là cách dựng khung quyết định.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: kịch bản, chi phí hai phía, ngưỡng kích hoạt',
      blocks: [
        {
          kind: 'formula',
          expression: 'Chi phí kỳ vọng = Σ (xác suất kịch bản × (phí công suất + chi phí đơn trễ/hủy + phí vận hành ngoài))',
          note: 'Thuê dư tốn phí cố định; thuê thiếu tốn chi phí trễ/hủy. Tỷ lệ hai phía quyết định nên thiên về an toàn đến đâu, cùng tinh thần mô hình newsvendor (xem [bài giảng MIT OCW](https://ocw.mit.edu/courses/15-772j-d-lab-supply-chains-fall-2014/0d50c5c77382852102ee30b98f1d4657_MIT15_772JF14_Lec14.pdf)).',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Dựng kịch bản** từ khoảng dự báo, gán xác suất và nêu giả định ở từng kịch bản.',
            '**Định giá hai phía**: chi phí giữ công suất không dùng và chi phí mỗi đơn trễ/hủy.',
            '**So các phương án** theo chi phí kỳ vọng *và* chi phí ở kịch bản xấu, không chỉ trung bình.',
            '**Kiểm tra độ nhạy**: kết luận có đổi khi xác suất kịch bản đổi không?',
            '**Đặt ngưỡng kích hoạt** từ điểm hòa vốn, gắn với tín hiệu quan sát được và mốc thời gian.',
          ],
        },
        {
          kind: 'quiz',
          id: 'warehouse-capacity-tradeoff-q1',
          question: 'Với dự báo P50 = 36.000 đơn/ngày và công suất 30.000, bước đầu hợp lý nhất là gì?',
          options: [
            {
              id: 'a',
              text: 'Thuê đủ công suất cho 36.000 vì đó là con số dự báo.',
              explain: 'P50 nghĩa là nhu cầu có khoảng 50% khả năng vượt mức đó. Thuê đúng P50 vẫn để lại rủi ro vượt lớn, trong khi thuê dư theo kịch bản thấp cũng tốn tiền.',
            },
            {
              id: 'b',
              text: 'Dựng kịch bản thấp, cơ sở, cao với xác suất, định giá chi phí thuê dư và thuê thiếu, rồi so các phương án theo chi phí kỳ vọng và kịch bản xấu.',
              correct: true,
              explain: 'Đúng. Khi sai số dự báo lớn, quyết định tốt dựa trên toàn bộ phân phối nhu cầu và hai phía chi phí. Đây là cách trình bày được cho người ra quyết định và đo được rủi ro.',
            },
            {
              id: 'c',
              text: 'Chờ có số liệu thật trong tuần đầu cao điểm rồi mới thuê.',
              explain: 'Thuê công suất cần thời gian chờ (ký hợp đồng, nhân sự, hệ thống). Khi tín hiệu rõ ràng thì thường đã quá muộn; phải đặt ngưỡng để quyết sớm hơn.',
            },
          ],
        },
      ],
    },
    {
      id: 'scenarios',
      kind: 'analysis',
      title: 'Bước 1: Chi phí không làm gì, và vì sao phải tính hai phía',
      blocks: [
        {
          kind: 'text',
          md: 'Mỗi ngày vượt công suất là đơn bị trễ hoặc hủy. Trong 42 ngày cao điểm, với 38.000 đ mỗi đơn:',
        },
        {
          kind: 'table',
          title: 'Chi phí trễ/hủy nếu giữ nguyên công suất 30.000 (mô phỏng)',
          columns: [
            { key: 'scenario', label: 'Kịch bản' },
            { key: 'demand', label: 'Nhu cầu/ngày', align: 'right' },
            { key: 'prob', label: 'Xác suất', align: 'right' },
            { key: 'excess', label: 'Đơn vượt (42 ngày)', align: 'right' },
            { key: 'cost', label: 'Chi phí (tỷ đ)', align: 'right' },
          ],
          rows: [
            { scenario: 'Thấp', demand: '30.000', prob: '25%', excess: '0', cost: '0' },
            { scenario: 'Cơ sở', demand: '36.000', prob: '50%', excess: '252.000', cost: '9,576' },
            { scenario: 'Cao', demand: '44.000', prob: '25%', excess: '588.000', cost: '22,344' },
            { scenario: 'Kỳ vọng', demand: '36.500', prob: '100%', excess: '', cost: '10,374' },
          ],
          highlight: [{ row: 3, tone: 'negative' }],
          caption: 'Không làm gì tốn kỳ vọng ~10,4 tỷ đ và tới 22,3 tỷ trong kịch bản cao: đủ lớn để mọi phương án thuê đều đáng xem xét.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Chi phí không đối xứng',
          md: 'Thuê dư 10.000 đơn/ngày tốn khoảng 2 đến 5 tỷ tùy hợp đồng, nhưng thiếu 14.000 đơn/ngày tốn hơn 22 tỷ. Khi chi phí thiếu lớn hơn chi phí dư nhiều lần, **thiên về dư công suất là hợp lý**, nhưng chọn hình thức nào để dư với giá rẻ mới là câu hỏi chính.',
        },
      ],
    },
    {
      id: 'options',
      kind: 'analysis',
      title: 'Bước 2: So bốn phương án theo kịch bản',
      blocks: [
        {
          kind: 'table',
          title: 'Các phương án và giả định (mô phỏng)',
          columns: [
            { key: 'option', label: 'Phương án' },
            { key: 'cap', label: 'Công suất' },
            { key: 'terms', label: 'Điều khoản chính' },
          ],
          rows: [
            { option: 'A. Thuê cố định 12 tháng', cap: '40.000', terms: 'Phí 4,8 tỷ, trả dù dùng hay không' },
            { option: 'B. Hợp đồng ngắn hạn có quyền chọn', cap: '40.000 nếu kích hoạt', terms: 'Giữ chỗ 0,6 tỷ (không hoàn); kích hoạt thêm 2,1 tỷ cho 3 tháng' },
            { option: 'C. 3PL cam kết tối thiểu', cap: 'đến 45.000', terms: 'Cam kết 4.000 đơn/ngày × 9.000 đ; phần vượt 11.000 đ/đơn; 3PL trễ 6%' },
            { option: 'D. B + 3PL linh hoạt cho phần vượt 40.000', cap: 'đến 44.000+', terms: 'Như B; 3PL không cam kết, 11.000 đ/đơn, trễ 6%, chưa chắc có sẵn' },
          ],
        },
        {
          kind: 'chart',
          title: 'Chi phí tổng theo phương án và kịch bản',
          type: 'bar',
          xKey: 'option',
          unit: ' tỷ đ',
          series: [
            { key: 'low', label: 'Thấp (25%)' },
            { key: 'base', label: 'Cơ sở (50%)' },
            { key: 'high', label: 'Cao (25%)' },
          ],
          data: [
            { option: 'Không làm gì', low: 0, base: 9.576, high: 22.344 },
            { option: 'A. Cố định', low: 4.8, base: 4.8, high: 11.184 },
            { option: 'B. Quyền chọn', low: 0.6, base: 2.7, high: 9.084 },
            { option: 'C. 3PL cam kết', low: 1.512, base: 3.011, high: 7.473 },
            { option: 'D. B + 3PL linh hoạt', low: 0.6, base: 2.7, high: 4.931 },
          ],
          caption: 'Chi phí gồm phí công suất, phí 3PL và chi phí đơn trễ/hủy. A an toàn nhưng luôn trả 4,8 tỷ; B và C rẻ hơn kỳ vọng nhưng kịch bản cao vẫn đau.',
        },
        {
          kind: 'table',
          title: 'Chi phí kỳ vọng và độ nhạy với xác suất (tỷ đ)',
          columns: [
            { key: 'option', label: 'Phương án' },
            { key: 'p1', label: '25/50/25', align: 'right' },
            { key: 'p2', label: '20/40/40 (nghiêng cao)', align: 'right' },
            { key: 'p3', label: '40/40/20 (nghiêng thấp)', align: 'right' },
          ],
          rows: [
            { option: 'Không làm gì', p1: '10,374', p2: '12,768', p3: '8,299' },
            { option: 'A. Cố định', p1: '6,396', p2: '7,354', p3: '6,077' },
            { option: 'B. Quyền chọn', p1: '3,771', p2: '4,834', p3: '3,137' },
            { option: 'C. 3PL cam kết', p1: '3,752', p2: '4,496', p3: '3,304' },
            { option: 'D. B + 3PL linh hoạt', p1: '2,733', p2: '3,172', p3: '2,306' },
          ],
          highlight: [{ row: 4, tone: 'positive' }],
          caption: 'D thấp nhất ở cả ba bộ xác suất. B và C gần nhau; C hơn khi nghiêng cao, B hơn khi nghiêng thấp. A luôn đắt nhất trong nhóm có hành động.',
        },
        {
          kind: 'quiz',
          id: 'warehouse-capacity-tradeoff-q2',
          question: 'Vì sao thuê cố định (A) có chi phí kỳ vọng cao nhất trong nhóm dù đủ công suất cho hai kịch bản đầu?',
          options: [
            {
              id: 'a',
              text: 'Vì thuê cố định luôn đắt hơn mọi hình thức khác.',
              explain: 'Không phải luôn đắt: nếu chắc chắn rơi vào kịch bản cao, thuê cố định có thể hợp lý. Ở đây nó đắt vì trả phí cả năm cho nhu cầu chỉ có 6 tuần.',
            },
            {
              id: 'b',
              text: 'Vì phí 4,8 tỷ bị trả ở mọi kịch bản, kể cả kịch bản thấp khi không cần, và vẫn không phủ hết kịch bản cao.',
              correct: true,
              explain: 'Đúng. Phương án cố định biến chi phí thành chi phí chìm: trả đủ ở cả ba kịch bản, mà kịch bản cao vẫn thiếu 4.000 đơn/ngày (thêm 6,384 tỷ). Quyền chọn chỉ trả phần còn lại khi thật sự cần.',
            },
            {
              id: 'c',
              text: 'Vì thuê cố định làm tăng chi phí đơn trễ/hủy.',
              explain: 'Công suất lớn hơn làm giảm đơn trễ/hủy, không tăng. Chênh lệch nằm ở phí cố định.',
            },
          ],
        },
      ],
    },
    {
      id: 'triggers',
      kind: 'analysis',
      title: 'Bước 3: Ngưỡng kích hoạt từ điểm hòa vốn',
      blocks: [
        {
          kind: 'text',
          md: 'Với phương án B, câu hỏi là **khi nào bấm kích hoạt** (2,1 tỷ). Lợi ích tránh được là chi phí trễ/hủy nếu không kích hoạt trừ chi phí còn lại sau khi kích hoạt:',
        },
        {
          kind: 'table',
          title: 'Lợi ích của việc kích hoạt (tỷ đ, mô phỏng)',
          columns: [
            { key: 'scenario', label: 'Kịch bản' },
            { key: 'no', label: 'Không kích hoạt', align: 'right' },
            { key: 'yes', label: 'Kích hoạt (không gồm phí 2,1)', align: 'right' },
            { key: 'benefit', label: 'Lợi ích tránh được', align: 'right' },
          ],
          rows: [
            { scenario: 'Thấp', no: '0', yes: '0', benefit: '0' },
            { scenario: 'Cơ sở', no: '9,576', yes: '0', benefit: '9,576' },
            { scenario: 'Cao', no: '22,344', yes: '6,384', benefit: '15,960' },
          ],
          caption: 'Có điều kiện đã vượt 30.000 (Cơ sở : Cao = 2 : 1), lợi ích kỳ vọng = (0,5 × 9,576 + 0,25 × 15,96) / 0,75 ≈ 11,7 tỷ.',
        },
        {
          kind: 'formula',
          expression: 'Kích hoạt khi P(nhu cầu > 30.000) × 11,7 tỷ ≥ 2,1 tỷ, tức P ≥ khoảng 18%',
          note: 'Vì xác suất vượt công suất hiện tại ở dự báo gốc là 75%, ngưỡng này được vượt rất xa. Giá trị của ngưỡng là để **hủy kích hoạt** nếu tín hiệu mới kéo xác suất xuống dưới ~18%.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Chọn tín hiệu quan sát được, không chỉ xác suất',
          md: 'Xác suất không quan sát trực tiếp. Hãy quy ngưỡng về chỉ số thấy được tại mốc quyết định: đơn đặt trước, tốc độ tăng đơn các tuần tiền cao điểm, lượt đăng ký deal, và dự báo cập nhật có khoảng bất định (xem [khoảng dự báo](https://otexts.com/fpp3/prediction-intervals.html)). Giả định "tín hiệu tại mốc quyết định đủ tin để phân biệt kịch bản" cần được kiểm chứng bằng backtest các mùa trước.',
        },
        {
          kind: 'quiz',
          id: 'warehouse-capacity-tradeoff-q3',
          question: 'Phương án D (quyền chọn + 3PL linh hoạt) có chi phí kỳ vọng thấp nhất, nhưng giả định 3PL luôn nhận được đơn vượt. Nên làm gì?',
          options: [
            {
              id: 'a',
              text: 'Chọn D và bỏ qua giả định, vì con số đã tốt nhất.',
              explain: 'Con số chỉ đúng nếu giả định đúng. Nếu 3PL cũng kín chỗ vào cao điểm, kịch bản cao quay về chi phí của B (9,084 tỷ) thay vì 4,931 tỷ.',
            },
            {
              id: 'b',
              text: 'Chọn A để tránh phụ thuộc vào 3PL.',
              explain: 'Loại bỏ rủi ro 3PL bằng cách trả thêm hơn 2 tỷ kỳ vọng so với B là đánh đổi lớn, trong khi A vẫn thiếu công suất ở kịch bản cao.',
            },
            {
              id: 'c',
              text: 'Chọn D nhưng chốt trước thỏa thuận khung với 3PL (số đơn tối đa, thời gian báo trước, mức phí), và xem B là phương án dự phòng chi phí 3,771 tỷ.',
              correct: true,
              explain: 'Đúng. Rủi ro của giả định được xử lý bằng hợp đồng khung có điều kiện rõ ràng; phương án nền (B) vẫn rẻ hơn A kể cả khi 3PL không sẵn. Tức là quyết định chịu được việc giả định sai.',
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
          md: '**Khuyến nghị:** ký hợp đồng ngắn hạn có quyền chọn (phương án B) cộng thỏa thuận khung với một 3PL cho phần vượt 40.000 (phương án D). Chi phí kỳ vọng ~2,7 tỷ đ (so với 10,4 tỷ nếu không làm gì và 6,4 tỷ nếu thuê cố định), kịch bản xấu nhất ~4,9 tỷ nếu 3PL sẵn sàng và 9,1 tỷ nếu không. Quyết định thấp nhất ở cả ba bộ xác suất đã thử.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Ký quyền chọn công suất 40.000 đơn/ngày (phí giữ chỗ 0,6 tỷ), kèm thỏa thuận khung 3PL cho phần vượt 40.000 với số đơn tối đa và thời gian báo trước',
              owner: 'Giám đốc Chuỗi cung ứng + Mua hàng',
              metric: 'Phí giữ chỗ + chi phí kỳ vọng đã chốt',
              threshold: 'Ký xong trước mốc quyết định T−8 tuần',
            },
            {
              action: 'Tại T−8 tuần cập nhật dự báo với khoảng bất định; kích hoạt khi P(nhu cầu > 30.000/ngày) ≥ 18%, hủy giữ chỗ nếu dưới 18%',
              owner: 'Data/Analytics + Supply Chain',
              metric: 'P(nhu cầu > 30.000) từ dự báo cập nhật; đơn đặt trước',
              threshold: 'Kích hoạt khi ≥ 18%; xem lại hàng tuần đến T−4',
            },
            {
              action: 'Trong cao điểm, theo dõi hàng ngày đơn thực tế so với 40.000; kích hoạt 3PL khi vượt 40.000 trong ≥ 3 ngày liên tiếp, và báo cáo tỷ lệ trễ của 3PL riêng',
              owner: 'Vận hành kho',
              metric: 'Đơn/ngày; tỷ lệ trễ của đơn chuyển 3PL',
              threshold: 'Kích hoạt khi > 40.000 trong 3 ngày; cảnh báo nếu trễ 3PL > 6%',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Khi dự báo bất định, **giá trị của phương án nằm ở tính linh hoạt**: trả ít khi nhu cầu thấp, có đường mở rộng khi nhu cầu cao. Quyền chọn và 3PL linh hoạt mua đúng điều đó. Ngưỡng kích hoạt biến tranh luận "dự báo có đúng không" thành một quy tắc cụ thể, đo được và có mốc thời gian. Cách đặt vấn đề này gần với phân biệt chuỗi cung ứng hiệu quả và chuỗi cung ứng đáp ứng nhanh của [Fisher (HBR)](https://hbr.org/1997/03/what-is-the-right-supply-chain-for-your-product).',
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
              title: 'Quyết định theo một con số dự báo',
              why: 'Dự báo điểm (P50) bỏ qua phân phối. Hai phương án có thể bằng nhau ở P50 nhưng khác nhau rất lớn ở kịch bản xấu.',
              instead: 'Trình bày khoảng dự báo, kịch bản có xác suất, và so chi phí cả kỳ vọng lẫn kịch bản xấu.',
            },
            {
              title: 'Chỉ tính chi phí thuê, quên chi phí đơn trễ',
              why: 'Thuê rẻ nhất (không làm gì) trông tốt trên bảng ngân sách nhưng kỳ vọng tốn hơn 10 tỷ đ vì đơn trễ/hủy.',
              instead: 'Định giá cả hai phía: công suất dư và đơn thiếu công suất, rồi so tổng chi phí.',
            },
            {
              title: 'Không kiểm tra độ nhạy, không đặt ngưỡng',
              why: 'Xác suất kịch bản là phán đoán. Nếu kết luận đảo chiều khi xác suất đổi nhẹ, phương án đó mong manh; và không có ngưỡng thì quyết định bị kéo bởi ý kiến mạnh nhất trong phòng họp.',
              instead: 'Thử vài bộ xác suất, chọn phương án bền vững, và ghi rõ ngưỡng kích hoạt, tín hiệu, người quyết định, mốc thời gian.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Khi dự báo có khoảng bất định, dựng kịch bản có xác suất và so phương án theo chi phí kỳ vọng lẫn kịch bản xấu thay vì một con số.',
    'Định giá cả hai phía (công suất dư và đơn trễ/hủy) và kiểm tra độ nhạy; phương án linh hoạt thường thắng khi chi phí thiếu lớn hơn chi phí dư nhiều lần.',
    'Biến quyết định thành ngưỡng kích hoạt từ điểm hòa vốn, gắn tín hiệu quan sát được, mốc thời gian và người chịu trách nhiệm.',
  ],
  references: [
    {
      title: 'D-Lab Supply Chains, Lecture 14: Inventory Management Part II (Newsvendor Model)',
      publisher: 'MIT OpenCourseWare',
      url: 'https://ocw.mit.edu/courses/15-772j-d-lab-supply-chains-fall-2014/0d50c5c77382852102ee30b98f1d4657_MIT15_772JF14_Lec14.pdf',
      note: 'Mô hình newsvendor: cân chi phí dư và thiếu để chọn mức dự trữ/công suất theo phân phối nhu cầu.',
    },
    {
      title: 'Prediction intervals',
      publisher: 'Forecasting: Principles and Practice (Hyndman & Athanasopoulos), OTexts',
      url: 'https://otexts.com/fpp3/prediction-intervals.html',
      note: 'Cách lượng hóa bất định của dự báo bằng khoảng dự báo thay vì chỉ một con số.',
    },
    {
      title: 'What Is the Right Supply Chain for Your Product?',
      publisher: 'Harvard Business Review (M. Fisher, 1997)',
      url: 'https://hbr.org/1997/03/what-is-the-right-supply-chain-for-your-product',
      note: 'Khung chọn chuỗi cung ứng hiệu quả hay đáp ứng nhanh theo mức bất định của nhu cầu.',
    },
  ],
}
