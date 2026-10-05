import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — khoản vay tiêu dùng tín chấp kỳ hạn 12 tháng; nới tiêu chí từ vintage T4/2026
 * (mở band D, điểm 580–619). Dữ liệu chốt cuối T9 → T1 có MOB 9, T4 MOB 6, T6 MOB 4.
 *   Vintage (số khoản): T1 8.000 · T2 8.200 · T3 8.100 = 24.300 · T4 11.000 · T5 11.500 · T6 11.800 = 34.300
 *   Ever DPD30+ "đến nay": T1 4,5 (MOB9) · T2 4,1 (MOB8) · T3 3,9 (MOB7) → 101.210/24.300 = 4,2% (≈1.012 khoản)
 *                          T4 5,1 (MOB6) · T5 4,5 (MOB5) · T6 3,7 (MOB4) → 151.510/34.300 = 4,4% (≈1.515 khoản, +50%)
 *   Cùng MOB4: T1–T3 (8.000×2,3 + 8.200×2,2 + 8.100×2,4)/24.300 = 2,3% · T4–T6 (11.000×3,6 + 11.500×3,8 + 11.800×3,7)/34.300 = 3,7%
 *   Theo band @MOB4 — T1–T3: A 9.720×1,0% + B 8.505×2,2% + C 6.075×4,5% = 557,7 → 2,3%
 *                     T4–T6: A 9.800×1,0% + B 8.600×2,2% + C 6.200×4,6% + D1 5.300×5,6% + D2 4.400×9,1%
 *                            = 98 + 189,2 + 285,2 + 296,8 + 400,4 = 1.269,6 → 3,7% ✓ (bỏ D: 572,4/24.600 = 2,3%)
 *   Kinh tế/khoản (giả định chung): lãi trước tổn thất 1,6 tr · LGD 70% · EAD khi vỡ nợ 15 tr · chi phí thu hồi 1,0 tr/khoản vỡ nợ
 *     PD vòng đời ≈ 2 × DPD30@MOB4 (hệ số từ vintage 2025 đã đáo hạn): A 2,0 · B 4,5 · C 9,0 · D1 11,5 · D2 18,5 (%)
 *     EL = PD × 0,7 × 15 tr · Lợi nhuận = 1,6 − EL − PD × 1,0:
 *       A 0,21 / 1,37 · B 0,47 / 1,08 · C 0,95 / 0,57 · D1 1,21 / 0,28 · D2 1,94 / −0,53 (tr đ)
 *     Tổng T4–T6: D1 5.300 × 0,2775 = 1,47 tỷ · D2 4.400 × −0,5275 = −2,32 tỷ → D −0,85 tỷ
 *     PD hòa vốn = 1,6 / (0,7 × 15 + 1,0) = 13,9% · D2 ~1.467 khoản/tháng × −0,5275 tr ≈ −0,77 tỷ/tháng
 */
export const loanDefault: CaseStudy = {
  id: 'loan-default',
  title: 'Nợ quá hạn tăng sau khi nới tiêu chí duyệt vay',
  domain: 'lending',
  level: 'senior',
  minutes: 11,
  skills: ['credit-risk', 'cohort', 'mix-effect', 'tradeoff'],
  question:
    'Sau khi nới tiêu chí duyệt, số khoản quá hạn 30 ngày tăng 50%. Đây là rủi ro tăng thật hay ảo giác do tăng trưởng và tuổi khoản vay? Nên rollback toàn bộ hay một phần?',
  summary:
    'So sánh vintage cùng tháng trên sổ (MOB), tách hiệu ứng mix theo band điểm, tính tổn thất kỳ vọng PD × LGD × EAD và chọn điều chỉnh có mục tiêu bằng champion/challenger.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng.* Một công ty tài chính tiêu dùng cho vay tín chấp kỳ hạn 12 tháng. Từ tháng 4, chính sách duyệt được nới để mở thêm **band D (điểm tín dụng 580–619)**, trước đây bị từ chối. Sáu tháng sau, ủy ban tín dụng nhận hai báo cáo mâu thuẫn. **Quản trị rủi ro**: *"Số khoản từng quá hạn 30 ngày tăng 50%, đề nghị rollback toàn bộ."* **Kinh doanh**: *"Tỷ lệ quá hạn của sổ mới chỉ cao hơn sổ cũ 0,2 điểm %, nới chuẩn là đúng."*\n\nBạn được giao đưa ra đánh giá độc lập. Số liệu chốt cuối tháng 9:',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Giải ngân TB/tháng (T4–T6)', value: '11.433 khoản', delta: '+41% vs T1–T3', tone: 'positive' },
            { label: 'Khoản từng DPD30+ (T4–T6)', value: '1.515', delta: '+50% vs 1.012', tone: 'negative' },
            { label: 'Ever DPD30+ đến nay — sổ mới', value: '4,4%', delta: '+0,2 điểm % vs sổ cũ 4,2%', tone: 'neutral' },
            { label: 'Tuổi TB trên sổ', value: '5 MOB', delta: 'sổ cũ 8 MOB', tone: 'warning', note: 'MOB = months on book' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi thật của ủy ban',
          md: 'Không phải "nợ xấu tăng hay không" mà là: **chất lượng tín dụng có xấu đi ở mức so sánh được không, xấu đi ở nhóm nào, và phần tăng trưởng thêm có còn sinh lời sau tổn thất không.**',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: so cùng tuổi, tách mix, quy về tổn thất và lợi nhuận',
      blocks: [
        {
          kind: 'formula',
          expression: 'Tổn thất kỳ vọng (EL) = PD × LGD × EAD',
          note: '**PD**: xác suất vỡ nợ trong vòng đời khoản vay · **LGD**: tỷ lệ tổn thất khi vỡ nợ (sau thu hồi) · **EAD**: dư nợ tại thời điểm vỡ nợ. Quyết định tín dụng cuối cùng là so EL (và chi phí thu hồi) với lợi nhuận trước tổn thất.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**So cùng tuổi**: vẽ đường cong vintage — tỷ lệ ever DPD30+ theo MOB — và chỉ so các vintage ở cùng MOB.',
            '**Tách mix**: chia theo band điểm; xem phần tăng do band cũ xấu đi (hiệu ứng tỷ lệ) hay do thêm band rủi ro hơn (hiệu ứng mix).',
            '**Quy về kinh tế**: dự phóng PD vòng đời, tính EL và lợi nhuận theo từng band.',
            '**Quyết định có kiểm soát**: điều chỉnh đúng band, thử nghiệm champion/challenger, đặt ngưỡng dừng.',
          ],
        },
        {
          kind: 'quiz',
          id: 'loan-default-q1',
          question: 'Hai báo cáo trong bối cảnh đều dựa trên số "đến nay". Phép so sánh nào hợp lệ để đánh giá chính sách mới?',
          options: [
            {
              id: 'a',
              text: 'Số khoản DPD30+ tăng 50%, nên rủi ro tăng 50%.',
              explain:
                'Số tuyệt đối tăng một phần vì giải ngân tăng 41%. Đếm số khoản mà không chia cho mẫu số tương ứng luôn phóng đại rủi ro khi danh mục tăng trưởng.',
            },
            {
              id: 'b',
              text: 'Tỷ lệ ever DPD30+ đến nay 4,4% vs 4,2%, nên chất lượng gần như không đổi.',
              explain:
                'Sổ mới mới 4–6 tháng tuổi, sổ cũ 7–9 tháng. Nợ quá hạn tích lũy theo thời gian, nên sổ trẻ luôn trông "sạch" hơn. So như vậy đánh giá thấp rủi ro thật.',
            },
            {
              id: 'c',
              text: 'So các vintage ở cùng tháng trên sổ (ví dụ MOB4), rồi tách theo band điểm tín dụng.',
              correct: true,
              explain:
                'Đúng. Vintage analysis khử cả hai méo mó: tăng trưởng (dùng tỷ lệ) và tuổi khoản vay (cùng MOB). Sau đó tách band để biết phần tăng đến từ khách cũ xấu đi hay từ nhóm khách mới được mở.',
            },
          ],
        },
      ],
    },
    {
      id: 'vintage',
      kind: 'analysis',
      title: 'Bước 1 — So cùng tuổi: ở MOB4, sổ mới xấu hơn 60%',
      blocks: [
        {
          kind: 'table',
          title: 'Ever DPD30+ (% số khoản) theo vintage và tháng trên sổ',
          columns: [
            { key: 'vin', label: 'Vintage' },
            { key: 'n', label: 'Số khoản', align: 'right' },
            { key: 'm2', label: 'MOB2', align: 'right' },
            { key: 'm3', label: 'MOB3', align: 'right' },
            { key: 'm4', label: 'MOB4', align: 'right' },
            { key: 'm6', label: 'MOB6', align: 'right' },
            { key: 'm9', label: 'MOB9', align: 'right' },
          ],
          rows: [
            { vin: 'T1/2026', n: '8.000', m2: '0,8%', m3: '1,6%', m4: '2,3%', m6: '3,4%', m9: '4,5%' },
            { vin: 'T2/2026', n: '8.200', m2: '0,8%', m3: '1,5%', m4: '2,2%', m6: '3,3%', m9: '—' },
            { vin: 'T3/2026', n: '8.100', m2: '0,9%', m3: '1,6%', m4: '2,4%', m6: '3,5%', m9: '—' },
            { vin: 'T4/2026 (nới)', n: '11.000', m2: '1,2%', m3: '2,5%', m4: '3,6%', m6: '5,1%', m9: '—' },
            { vin: 'T5/2026', n: '11.500', m2: '1,3%', m3: '2,6%', m4: '3,8%', m6: '—', m9: '—' },
            { vin: 'T6/2026', n: '11.800', m2: '1,2%', m3: '2,5%', m4: '3,7%', m6: '—', m9: '—' },
          ],
          highlight: [
            { row: 3, tone: 'negative' },
            { row: 4, tone: 'negative' },
            { row: 5, tone: 'negative' },
          ],
          caption: '"—" là chưa đủ tuổi quan sát. Mỗi cột là một phép so sánh công bằng; mỗi hàng là một đường cong vintage.',
        },
        {
          kind: 'chart',
          title: 'Ever DPD30+ tại MOB4 theo vintage',
          type: 'bar',
          xKey: 'vin',
          unit: '%',
          series: [{ key: 'mob4', label: 'Ever DPD30+ @MOB4' }],
          data: [
            { vin: 'T1', mob4: 2.3 },
            { vin: 'T2', mob4: 2.2 },
            { vin: 'T3', mob4: 2.4 },
            { vin: 'T4', mob4: 3.6 },
            { vin: 'T5', mob4: 3.8 },
            { vin: 'T6', mob4: 3.7 },
          ],
          marker: { x: 'T4', label: 'Nới tiêu chí duyệt' },
          caption: 'Trung bình có trọng số: T1–T3 2,3% → T4–T6 3,7% (+1,4 điểm %, +61%). Bước nhảy xuất hiện đúng vintage đầu tiên sau khi nới.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Trong danh mục tăng trưởng nhanh, các chỉ số "trên dư nợ hiện tại" hay "đến nay" luôn bị **pha loãng** bởi khoản vay trẻ chưa kịp quá hạn. Rủi ro thật chỉ lộ ra khi danh mục chậm lại — thường là quá muộn. Vintage curve theo MOB là công cụ chuẩn để đánh giá một thay đổi chính sách sớm.',
        },
      ],
    },
    {
      id: 'mix',
      kind: 'analysis',
      title: 'Bước 2 — Tách mix theo band điểm: band cũ không xấu đi',
      blocks: [
        {
          kind: 'table',
          title: 'Ever DPD30+ @MOB4 theo band điểm tín dụng',
          columns: [
            { key: 'band', label: 'Band (điểm)' },
            { key: 'preN', label: 'T1–T3: số khoản (tỷ trọng)', align: 'right' },
            { key: 'preR', label: 'T1–T3 @MOB4', align: 'right' },
            { key: 'postN', label: 'T4–T6: số khoản (tỷ trọng)', align: 'right' },
            { key: 'postR', label: 'T4–T6 @MOB4', align: 'right' },
          ],
          rows: [
            { band: 'A (≥ 700)', preN: '9.720 (40,0%)', preR: '1,0%', postN: '9.800 (28,6%)', postR: '1,0%' },
            { band: 'B (660–699)', preN: '8.505 (35,0%)', preR: '2,2%', postN: '8.600 (25,1%)', postR: '2,2%' },
            { band: 'C (620–659)', preN: '6.075 (25,0%)', preR: '4,5%', postN: '6.200 (18,1%)', postR: '4,6%' },
            { band: 'D1 (600–619) — mới', preN: '—', preR: '—', postN: '5.300 (15,5%)', postR: '5,6%' },
            { band: 'D2 (580–599) — mới', preN: '—', preR: '—', postN: '4.400 (12,8%)', postR: '9,1%' },
            { band: 'Tổng', preN: '24.300', preR: '2,3%', postN: '34.300', postR: '3,7%' },
          ],
          highlight: [
            { row: 3, tone: 'warning' },
            { row: 4, tone: 'negative' },
          ],
          caption: 'Bỏ band D khỏi sổ mới: (98 + 189 + 285) / 24.600 = 2,3%, đúng bằng sổ cũ. Toàn bộ +1,4 điểm % là hiệu ứng mix từ band D.',
        },
        {
          kind: 'quiz',
          id: 'loan-default-q2',
          question: 'Bảng theo band cho thấy điều gì, và nó thay đổi đề xuất "rollback toàn bộ" thế nào?',
          options: [
            {
              id: 'a',
              text: 'Chất lượng toàn danh mục xấu đi (có thể do kinh tế), nên cần siết tiêu chí với mọi band.',
              explain:
                'Band A, B, C ở cùng MOB gần như không đổi (1,0 / 2,2 / 4,5→4,6%). Nếu môi trường vĩ mô xấu đi, các band cũ cũng phải tăng. Siết mọi band sẽ cắt cả phần danh mục đang lời tốt.',
            },
            {
              id: 'b',
              text: 'Mức tăng hoàn toàn do thêm band D (hiệu ứng mix); quyết định cần nhắm vào band D, và bên trong D thì D2 rủi ro gấp ~1,6 lần D1.',
              correct: true,
              explain:
                'Đúng. Đây là ví dụ kinh điển của hiệu ứng mix: không band nào xấu đi, nhưng tỷ trọng nhóm rủi ro cao tăng làm tỷ lệ tổng tăng. Câu hỏi đúng chuyển từ "rollback hay không" sang "giữ phần nào của band D".',
            },
            {
              id: 'c',
              text: 'Band D chỉ chiếm 28% số khoản nên tác động không đáng kể, giữ nguyên chính sách.',
              explain:
                '28% số khoản nhưng gây ra 55% số khoản quá hạn ở MOB4 (697 / 1.270). Tỷ trọng nhỏ không có nghĩa tác động nhỏ khi tỷ lệ quá hạn cao gấp nhiều lần.',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Kiểm tra trước khi tin vào bảng',
          md: 'Đảm bảo band được tính bằng **cùng phiên bản mô hình điểm** cho cả hai giai đoạn (nếu mô hình được tái huấn luyện, band A cũ và mới không còn là một nhóm). Cũng nên tách theo sản phẩm, kênh bán và hạn mức — nới chuẩn thường đi kèm thay đổi kênh hoặc hạn mức.',
        },
      ],
    },
    {
      id: 'economics',
      kind: 'analysis',
      title: 'Bước 3 — Quy về tổn thất kỳ vọng và lợi nhuận theo band',
      blocks: [
        {
          kind: 'formula',
          expression: 'PD hòa vốn = Lãi trước tổn thất / (LGD × EAD + Chi phí thu hồi) = 1,6 / (0,7 × 15 + 1,0) ≈ 13,9%',
          note: 'Giả định chung mỗi khoản: lãi trước tổn thất 1,6 triệu đ (sau chi phí vốn và vận hành), LGD 70%, EAD khi vỡ nợ 15 triệu đ, chi phí thu hồi 1,0 triệu đ cho mỗi khoản vỡ nợ.',
        },
        {
          kind: 'table',
          title: 'Kinh tế theo band (PD vòng đời dự phóng ≈ 2 × DPD30 @MOB4)',
          columns: [
            { key: 'band', label: 'Band' },
            { key: 'pd', label: 'PD vòng đời', align: 'right' },
            { key: 'el', label: 'EL/khoản', align: 'right' },
            { key: 'profit', label: 'Lợi nhuận/khoản', align: 'right' },
            { key: 'total', label: 'Lợi nhuận vintage T4–T6', align: 'right' },
          ],
          rows: [
            { band: 'A', pd: '2,0%', el: '0,21 tr đ', profit: '1,37 tr đ', total: '13,43 tỷ đ' },
            { band: 'B', pd: '4,5%', el: '0,47 tr đ', profit: '1,08 tr đ', total: '9,31 tỷ đ' },
            { band: 'C', pd: '9,0%', el: '0,95 tr đ', profit: '0,57 tr đ', total: '3,50 tỷ đ' },
            { band: 'D1', pd: '11,5%', el: '1,21 tr đ', profit: '0,28 tr đ', total: '1,47 tỷ đ' },
            { band: 'D2', pd: '18,5%', el: '1,94 tr đ', profit: '−0,53 tr đ', total: '−2,32 tỷ đ' },
          ],
          highlight: [
            { row: 3, tone: 'warning' },
            { row: 4, tone: 'negative' },
          ],
          caption: 'Lợi nhuận/khoản = 1,6 − EL − PD × 1,0. D2 vượt xa PD hòa vốn 13,9%; D1 dưới ngưỡng nhưng biên mỏng. Cả band D gộp lại: −0,85 tỷ đ.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Độ nhạy: D1 đứng sát ranh giới',
          md: 'Hệ số "PD vòng đời ≈ 2 × DPD30@MOB4" lấy từ các vintage cũ đã đáo hạn, **chưa từng được kiểm chứng trên band D**. Nếu hệ số thực là 2,5, PD của D1 thành 14,0% — vượt ngưỡng hòa vốn, lợi nhuận về 0. Vì vậy D1 phải được giữ dưới dạng thử nghiệm có kiểm soát, không phải chính sách mặc định.',
        },
        {
          kind: 'quiz',
          id: 'loan-default-q3',
          question: 'Với bảng kinh tế và độ nhạy trên, đề xuất nào tốt nhất cho ủy ban tín dụng?',
          options: [
            {
              id: 'a',
              text: 'Rollback toàn bộ band D để đưa tỷ lệ quá hạn về 2,3%.',
              explain:
                'An toàn nhưng bỏ đi ~1,47 tỷ đ lợi nhuận kỳ vọng mỗi quý của D1 và mất cơ hội học xem D1 thật sự hoạt động thế nào. Mục tiêu là lợi nhuận điều chỉnh rủi ro, không phải tỷ lệ quá hạn thấp nhất.',
            },
            {
              id: 'b',
              text: 'Dừng D2 ngay; giữ D1 dưới dạng challenger với hạn mức thấp hơn, phân bổ ngẫu nhiên và ngưỡng dừng theo DPD30@MOB4.',
              correct: true,
              explain:
                'Đúng. D2 lỗ kỳ vọng ~0,77 tỷ đ mỗi tháng giải ngân nên cắt ngay. D1 có lãi nhưng bất định, nên thử có kiểm soát: hạn mức thấp giảm EAD (giảm EL), phân bổ ngẫu nhiên cho phép đo sạch, ngưỡng dừng giới hạn thiệt hại nếu dự phóng sai.',
            },
            {
              id: 'c',
              text: 'Giữ nguyên band D và tăng cường đội thu hồi nợ.',
              explain:
                'Thu hồi tốt hơn chỉ giảm LGD một phần; với PD 18,5%, D2 vẫn lỗ trừ khi LGD giảm từ 70% xuống dưới ~51%, điều khó đạt với vay tín chấp. Đây là giải pháp bổ trợ, không thay quyết định chọn lọc.',
            },
            {
              id: 'd',
              text: 'Tăng lãi suất cho cả band D để bù rủi ro.',
              explain:
                'Định giá theo rủi ro là hướng hợp lý về dài hạn, nhưng tăng giá cho nhóm rủi ro cao dễ gây lựa chọn bất lợi (khách tốt bỏ đi, khách xấu ở lại), có thể vướng trần lãi suất và cần thời gian kiểm chứng. Nó không xử lý được khoản lỗ của D2 ngay bây giờ.',
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
          md: '**Kết luận cho ủy ban:** Rủi ro tăng là thật — ở cùng MOB4, vintage sau nới có ever DPD30+ 3,7% so với 2,3% — nhưng **toàn bộ** phần tăng đến từ band D mới mở, band cũ không xấu đi. Trong band D, D2 (580–599) lỗ kỳ vọng ~0,53 triệu đ/khoản; D1 (600–619) có lãi mỏng và còn bất định. Cả hai báo cáo ban đầu đều sai vì so sánh khác tuổi và dùng số tuyệt đối.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Dừng duyệt band D2 (580–599) từ kỳ chính sách kế tiếp',
              owner: 'Head of Credit Risk',
              metric: 'Số khoản D2 giải ngân mới; lỗ kỳ vọng tránh được',
              threshold: '0 khoản D2 mới; tránh ~0,77 tỷ đ lỗ kỳ vọng mỗi tháng giải ngân',
            },
            {
              action: 'Chạy champion/challenger cho D1: 50% hồ sơ D1 ngẫu nhiên được duyệt với hạn mức tối đa 10 triệu đ, 50% từ chối như chính sách cũ',
              owner: 'Credit Policy + Risk Analytics',
              metric: 'Ever DPD30+ @MOB4 và lợi nhuận/khoản của nhóm challenger',
              threshold: 'Tiếp tục nếu @MOB4 ≤ 6,0%; dừng nếu > 7,0% (≈ PD vòng đời vượt 13,9%)',
            },
            {
              action: 'Dựng dashboard vintage theo band × MOB (gồm tỷ lệ vỡ nợ kỳ thanh toán đầu – FPD) và cảnh báo khi vintage mới vượt đường chuẩn cùng MOB > 20%',
              owner: 'Risk Analytics',
              metric: 'Thời gian phát hiện vintage xấu bất thường',
              threshold: 'Phát hiện từ MOB2–3 thay vì MOB6; review lại hệ số PD vòng đời khi T4 đạt MOB9',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Quyết định dựa trên **lợi nhuận điều chỉnh rủi ro theo band**, không dựa trên một tỷ lệ quá hạn tổng. Cắt D2 loại ngay phần chắc chắn lỗ; giữ D1 dưới dạng challenger vừa giữ tăng trưởng có lãi, vừa tạo dữ liệu sạch để kiểm chứng dự phóng; ngưỡng dừng giới hạn thiệt hại nếu dự phóng sai. Đây là cách các tổ chức tín dụng trưởng thành thay đổi chính sách: từng bước, đo được và có thể đảo ngược.',
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
              title: 'So sổ trẻ với sổ già',
              why: 'Nợ quá hạn tích lũy theo tháng trên sổ. Sổ mới 5 MOB luôn trông tốt hơn sổ cũ 8 MOB, nên tỷ lệ "đến nay" che rủi ro thật (4,4% vs 4,2% trong khi cùng MOB là 3,7% vs 2,3%).',
              instead: 'Luôn so vintage ở cùng MOB; dùng đường cong vintage để dự phóng thay vì đợi danh mục trưởng thành.',
            },
            {
              title: 'Dùng số tuyệt đối hoặc tỷ lệ trên dư nợ khi danh mục tăng trưởng',
              why: 'Số khoản quá hạn tăng theo volume (phóng đại rủi ro); tỷ lệ trên dư nợ bị pha loãng bởi khoản mới (che rủi ro). Cả hai đều sai hướng tùy bối cảnh.',
              instead: 'Dùng tỷ lệ theo vintage với mẫu số là số khoản/số tiền giải ngân của chính vintage đó.',
            },
            {
              title: 'Quyết định tất cả hoặc không có gì',
              why: 'Rollback toàn bộ bỏ phần có lãi; giữ toàn bộ nuôi phần lỗ. Tỷ lệ tổng che mất sự khác biệt lớn giữa các band.',
              instead: 'Tách theo band, quy về EL và lợi nhuận, điều chỉnh band cụ thể và kiểm chứng bằng champion/challenger.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Đánh giá chính sách tín dụng bằng vintage ở cùng tháng trên sổ (MOB) — số "đến nay" và số tuyệt đối đều méo khi danh mục tăng trưởng.',
    'Tách theo band rủi ro để phân biệt band cũ xấu đi (hiệu ứng tỷ lệ) với việc thêm nhóm rủi ro cao (hiệu ứng mix).',
    'Quy rủi ro về EL = PD × LGD × EAD và lợi nhuận theo band; điều chỉnh có mục tiêu, thử bằng champion/challenger với ngưỡng dừng rõ ràng.',
  ],
  references: [
    {
      title: 'An Explanatory Note on the Basel II IRB Risk Weight Functions',
      publisher: 'Bank for International Settlements (BCBS)',
      url: 'https://www.bis.org/bcbs/irbriskweight.pdf',
      note: 'Giải thích PD, LGD, EAD và phân biệt tổn thất kỳ vọng (EL) với tổn thất ngoài dự kiến.',
    },
    {
      title: 'Studies on the Validation of Internal Rating Systems',
      publisher: 'Bank for International Settlements (BCBS Working Paper 14)',
      url: 'https://www.bis.org/publ/bcbs_wp14.htm',
      note: 'Phương pháp kiểm định mô hình xếp hạng và tham số PD/LGD/EAD: backtesting, benchmarking, độ ổn định theo thời gian.',
    },
    {
      title: 'IFRS 9 Financial Instruments',
      publisher: 'IFRS Foundation',
      url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/',
      note: 'Chuẩn mực kế toán yêu cầu trích lập dự phòng theo tổn thất tín dụng kỳ vọng (ECL) trong vòng đời khoản vay.',
    },
  ],
}
