import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — đơn/tuần trung bình, 8 tuần trước vs 8 tuần sau khi áp dụng freeship, đã kiểm tra khớp nhau:
 *   Nhóm áp dụng (Nghệ An, Thanh Hóa, Hà Tĩnh): 20.000 → 25.000 (+25,0%)
 *     Nghệ An 9.000 → 11.400 · Thanh Hóa 8.000 → 9.950 · Hà Tĩnh 3.000 → 3.650 (tổng 25.000 ✓)
 *   Nhóm đối chứng (Nam Định, Thái Bình, Ninh Bình — không giáp ranh): 30.000 → 33.000 (+10,0%)
 *     Nam Định 11.000 → 12.210 · Thái Bình 10.000 → 10.900 · Ninh Bình 9.000 → 9.890 (tổng 33.000 ✓)
 *   Phản thực tế nhóm áp dụng = 20.000 × 33.000/30.000 = 22.000 → tác động = 3.000 đơn/tuần = +13,6%
 *     Theo tỉnh (phản thực tế ×1,10): NA 11.400/9.900 = +15,2% · TH 9.950/8.800 = +13,1% · HT 3.650/3.300 = +10,6%
 *   Chỉ số tuần (TB trước = 100): áp dụng trước 99 101 98 100 102 99 100 101 (TB 100), sau 118 122 125 126 127 126 128 128 (TB 125)
 *                                  đối chứng trước 100 99 99 101 101 100 99 101 (TB 100), sau 106 108 110 111 111 112 111 111 (TB 110)
 *   Placebo ngày giả (tuần −4): áp dụng 99,5 → 100,5 (+1,0%), đối chứng 99,75 → 100,25 (+0,5%) → DiD ≈ +0,5%
 *   Lan tỏa: Quảng Bình (giáp Hà Tĩnh) 5.000 → 5.250 (+5%). Nếu đưa vào đối chứng: 35.000 → 38.250 (+9,3%)
 *     → phản thực tế 21.857 → tác động +14,4% (bị thổi phồng)
 *   AOV: áp dụng 230.000 → 242.000 đ, đối chứng 240.000 → 240.000 → DiD AOV +12.000 đ
 *   Kinh tế/tuần (nhóm áp dụng): chi phí freeship = 60% × 25.000 đơn đủ điều kiện × 18.000 đ = 270 tr đ
 *     Lợi ích = đơn tăng thêm × 70.000 đ biên đóng góp + 22.000 đơn nền × 12.000 đ × 20% biên = … + 52,8 tr
 *     Khoảng 90% tác động +8% … +19% → đơn tăng 1.760 … 4.180
 *     Thấp: 123,2 + 52,8 = 176,0 → ròng −94,0 · Điểm: 210 + 52,8 = 262,8 → ròng −7,2 · Cao: 292,6 + 52,8 = 345,4 → ròng +75,4
 *     Cách "trước/sau" ngây thơ: 5.000 × 70.000 = 350 + 20.000 × 12.000 × 20% = 48 → 398 − 270 = +128 tr (sai)
 */
export const diffInDiffPolicy: CaseStudy = {
  id: 'diff-in-diff-policy',
  title: 'Freeship ở 3 tỉnh: có nên mở toàn quốc?',
  domain: 'ecommerce',
  level: 'senior',
  minutes: 15,
  skills: ['causal', 'experiment', 'segmentation', 'tradeoff'],
  question:
    'Chính sách miễn phí vận chuyển chạy thử ở 3 tỉnh, đơn tăng 25%. Tác động thật là bao nhiêu, có lãi không, và có nên mở toàn quốc?',
  summary:
    'Khi không thể A/B, dùng difference-in-differences với nhóm tỉnh đối chứng, kiểm tra xu hướng song song, placebo và lan tỏa, rồi quy tác động ra lợi nhuận ròng có khoảng tin cậy để ra quyết định.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng.* Sàn thương mại điện tử của bạn áp dụng **miễn phí vận chuyển cho đơn từ 150.000 đ** tại 3 tỉnh Bắc Trung Bộ (Nghệ An, Thanh Hóa, Hà Tĩnh) trong 8 tuần. Vì chính sách hiển thị công khai theo địa chỉ giao hàng, team không thể chia ngẫu nhiên người dùng. Giám đốc Growth trình CEO: *"Đơn tăng 25%, đề xuất mở toàn quốc từ quý sau."* CEO nhờ bạn kiểm tra trước khi duyệt.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Đơn/tuần 3 tỉnh áp dụng', value: '25.000', delta: '+25,0% so với 8 tuần trước', tone: 'positive' },
            { label: 'AOV 3 tỉnh', value: '242.000 đ', delta: '+5,2%', tone: 'positive' },
            { label: 'Chi phí freeship', value: '270 tr đ/tuần', tone: 'warning', note: '15.000 đơn đủ điều kiện × 18.000 đ' },
            { label: 'Đơn/tuần các tỉnh khác', value: '—', delta: '+10% cùng giai đoạn (mùa sale giữa năm)', tone: 'neutral' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu',
          md: 'Trả lời ba câu bằng số và khoảng tin cậy: **(1)** tác động nhân quả của freeship lên số đơn và AOV, **(2)** chính sách có tạo lợi nhuận ròng không sau khi trừ chi phí trợ giá, **(3)** kết quả ở 3 tỉnh này có áp dụng được cho toàn quốc không.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: so với cái gì đã xảy ra nếu không có chính sách?',
      blocks: [
        {
          kind: 'text',
          md: 'Câu hỏi nhân quả luôn là so sánh với **phản thực tế** (counterfactual): đơn ở 3 tỉnh *sẽ là bao nhiêu nếu không có freeship*. "Trước/sau" ngầm giả định phản thực tế = mức trước đó, tức là bỏ qua mùa vụ, khuyến mãi toàn sàn và xu hướng chung. Difference-in-differences (DiD) dùng nhóm tỉnh không áp dụng để ước lượng phần thay đổi chung đó.',
        },
        {
          kind: 'formula',
          expression: 'Tác động DiD = (Sau − Trước)nhóm áp dụng − (Sau − Trước)nhóm đối chứng     ·     dạng tỷ lệ: Phản thực tế = Trước(áp dụng) × Sau(đối chứng) / Trước(đối chứng)',
          note: 'Hai nhóm có quy mô khác nhau nên dùng dạng tỷ lệ (tương đương DiD trên log): giả định đơn ở nhóm áp dụng *lẽ ra* tăng cùng % với nhóm đối chứng.',
        },
        {
          kind: 'list',
          style: 'check',
          items: [
            '**Xu hướng song song**: trước chính sách, hai nhóm có đi cùng nhịp không? Đây là giả định không kiểm chứng trực tiếp được, chỉ có thể làm nó đáng tin hơn.',
            '**Placebo**: áp DiD vào một ngày giả hoặc nhóm tỉnh giả phải cho kết quả ≈ 0.',
            '**Lan tỏa (spillover)**: nhóm đối chứng có bị chính sách ảnh hưởng gián tiếp không (giáp ranh, chuyển địa chỉ nhận hàng)?',
            '**Chọn mẫu (selection)**: 3 tỉnh có được chọn *vì* kỳ vọng phản ứng mạnh? Nếu có, kết quả không tự động áp dụng cho toàn quốc.',
            '**Khoảng tin cậy**: chỉ có 3 tỉnh áp dụng nên sai số chuẩn thông thường quá lạc quan; dùng hoán vị/bootstrap theo tỉnh.',
          ],
        },
        {
          kind: 'quiz',
          id: 'diff-in-diff-policy-q1',
          question: 'Đơn 3 tỉnh tăng 25%, các tỉnh đối chứng cũng tăng 10% cùng kỳ. Tác động của freeship lên số đơn gần nhất với?',
          options: [
            {
              id: 'a',
              text: '+25%, vì đó là mức tăng thực tế quan sát được ở 3 tỉnh.',
              explain: 'Đây là ước lượng trước/sau, gán toàn bộ mức tăng cho chính sách. Nhưng đợt sale giữa năm đã kéo cả các tỉnh không áp dụng lên 10%; phần đó xảy ra dù có freeship hay không.',
            },
            {
              id: 'b',
              text: '+15 điểm %, lấy 25% trừ 10%.',
              explain: 'Gần đúng nhưng chưa chính xác về cách tính: trừ trực tiếp hai tỷ lệ bỏ qua tính nhân. Phản thực tế là 20.000 × 1,10 = 22.000, nên tác động là 3.000 / 22.000 = +13,6%, không phải +15%. Với biến động lớn, sai lệch này đủ làm đổi kết luận lãi/lỗ.',
            },
            {
              id: 'c',
              text: '+13,6%: phản thực tế = 20.000 × 1,10 = 22.000 đơn, thực tế 25.000, chênh 3.000 đơn/tuần.',
              correct: true,
              explain: 'Đúng. Đây là DiD dạng tỷ lệ: nhóm đối chứng cho biết 3 tỉnh *lẽ ra* tăng 10% do mùa sale. Phần vượt lên trên đó, 3.000 đơn/tuần, mới là tác động của freeship, với điều kiện giả định xu hướng song song đứng vững.',
            },
          ],
        },
      ],
    },
    {
      id: 'estimate',
      kind: 'analysis',
      title: 'Bước 1 — Ước lượng DiD và kiểm tra xu hướng song song',
      blocks: [
        {
          kind: 'table',
          title: 'Đơn/tuần trung bình: 8 tuần trước vs 8 tuần sau',
          columns: [
            { key: 'group', label: 'Nhóm' },
            { key: 'pre', label: 'Trước', align: 'right' },
            { key: 'post', label: 'Sau', align: 'right' },
            { key: 'change', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { group: 'Áp dụng (NA, TH, HT)', pre: '20.000', post: '25.000', change: '+25,0%' },
            { group: 'Đối chứng (NĐ, TB, NB)', pre: '30.000', post: '33.000', change: '+10,0%' },
            { group: 'Phản thực tế nhóm áp dụng', pre: '20.000', post: '22.000', change: '+10,0%' },
            { group: 'Tác động DiD', pre: '—', post: '+3.000', change: '+13,6%' },
          ],
          highlight: [{ row: 3, tone: 'positive' }],
          caption: 'AOV làm tương tự: áp dụng 230.000 → 242.000 đ, đối chứng 240.000 → 240.000 đ → tác động +12.000 đ/đơn (khách gom đơn cho đủ 150.000 đ).',
        },
        {
          kind: 'chart',
          title: 'Chỉ số đơn theo tuần (trung bình 8 tuần trước = 100)',
          type: 'line',
          xKey: 'week',
          series: [
            { key: 'treated', label: 'Áp dụng' },
            { key: 'control', label: 'Đối chứng' },
          ],
          data: [
            { week: 'Tuần −8', treated: 99, control: 100 },
            { week: 'Tuần −7', treated: 101, control: 99 },
            { week: 'Tuần −6', treated: 98, control: 99 },
            { week: 'Tuần −5', treated: 100, control: 101 },
            { week: 'Tuần −4', treated: 102, control: 101 },
            { week: 'Tuần −3', treated: 99, control: 100 },
            { week: 'Tuần −2', treated: 100, control: 99 },
            { week: 'Tuần −1', treated: 101, control: 101 },
            { week: 'Tuần 1', treated: 118, control: 106 },
            { week: 'Tuần 2', treated: 122, control: 108 },
            { week: 'Tuần 3', treated: 125, control: 110 },
            { week: 'Tuần 4', treated: 126, control: 111 },
            { week: 'Tuần 5', treated: 127, control: 111 },
            { week: 'Tuần 6', treated: 126, control: 112 },
            { week: 'Tuần 7', treated: 128, control: 111 },
            { week: 'Tuần 8', treated: 128, control: 111 },
          ],
          marker: { x: 'Tuần 1', label: 'Bắt đầu freeship' },
          caption: '8 tuần trước, hai đường dao động quanh 100 và chênh nhau không quá 3 điểm, không có xu hướng tách rời. Sau mốc, nhóm áp dụng tách ra và ổn định ở mức cao hơn ≈ 15 điểm chỉ số.',
        },
        {
          kind: 'table',
          title: 'Tác động theo từng tỉnh áp dụng',
          columns: [
            { key: 'prov', label: 'Tỉnh' },
            { key: 'pre', label: 'Trước', align: 'right' },
            { key: 'cf', label: 'Phản thực tế (×1,10)', align: 'right' },
            { key: 'post', label: 'Thực tế sau', align: 'right' },
            { key: 'effect', label: 'Tác động', align: 'right' },
          ],
          rows: [
            { prov: 'Nghệ An', pre: '9.000', cf: '9.900', post: '11.400', effect: '+15,2%' },
            { prov: 'Thanh Hóa', pre: '8.000', cf: '8.800', post: '9.950', effect: '+13,1%' },
            { prov: 'Hà Tĩnh', pre: '3.000', cf: '3.300', post: '3.650', effect: '+10,6%' },
          ],
          caption: 'Cả ba tỉnh cùng chiều, độ lớn 10–15%: tác động không đến từ một tỉnh đơn lẻ.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Biểu đồ trước chính sách là **bằng chứng quan trọng nhất** của cả bài, đưa nó lên slide đầu tiên. Nếu hai đường đã tách nhau từ trước mốc, mọi con số DiD phía sau đều vô nghĩa. Khi trình bày, cũng nên ước lượng tác động *theo từng tuần* (event study): tác động tăng dần tuần 1–3 rồi đi ngang là dấu hiệu khách dần biết đến chính sách, hợp lý hơn một cú nhảy bậc.',
        },
      ],
    },
    {
      id: 'robustness',
      kind: 'analysis',
      title: 'Bước 2 — Placebo, lan tỏa và khoảng tin cậy',
      blocks: [
        {
          kind: 'table',
          title: 'Các kiểm tra độ vững',
          columns: [
            { key: 'test', label: 'Kiểm tra' },
            { key: 'how', label: 'Cách làm' },
            { key: 'result', label: 'Kết quả', align: 'right' },
          ],
          rows: [
            { test: 'Placebo ngày giả', how: 'Giả vờ chính sách bắt đầu tuần −4, chỉ dùng dữ liệu trước', result: '+0,5% (≈ 0) ✓' },
            { test: 'Placebo tỉnh giả', how: 'Gán "áp dụng" cho mọi bộ 3 trong 20 tỉnh không áp dụng (1.140 tổ hợp)', result: '95% trong ±5%, lớn nhất +7,9% ✓' },
            { test: 'Lan tỏa sang tỉnh giáp ranh', how: 'Quảng Bình (giáp Hà Tĩnh) so với nhóm đối chứng', result: '+5% vs +10% ⚠' },
            { test: 'Khoảng 90% (bootstrap theo tỉnh + hoán vị)', how: 'Lấy mẫu lại tỉnh, tính lại DiD', result: '+8% … +19%' },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: 'Tác động +13,6% lớn hơn mọi tổ hợp tỉnh giả: rất khó là nhiễu ngẫu nhiên. Nhưng khoảng tin cậy rộng vì chỉ có 3 tỉnh được áp dụng.',
        },
        {
          kind: 'text',
          md: '**Lan tỏa:** Quảng Bình chỉ tăng 5% trong khi các tỉnh đối chứng tăng 10%. Kiểm tra log địa chỉ cho thấy một phần khách Quảng Bình đổi địa chỉ nhận sang người thân ở Hà Tĩnh để được freeship. Nếu vô tình đưa Quảng Bình vào nhóm đối chứng, nhóm đối chứng chỉ tăng 9,3% và tác động bị thổi lên **+14,4%**, vì một phần "tác động" thực chất là đơn **chuyển chỗ**, không phải đơn mới. Đó là lý do nhóm đối chứng chỉ gồm tỉnh không giáp ranh.',
        },
        {
          kind: 'quiz',
          id: 'diff-in-diff-policy-q2',
          question: 'Placebo ngày giả cho +0,5% và placebo tỉnh giả không tổ hợp nào vượt +7,9%. Kết luận đúng nhất là gì?',
          options: [
            {
              id: 'a',
              text: 'Giả định xu hướng song song đã được chứng minh, tác động +13,6% là chắc chắn.',
              explain: 'Placebo chỉ **không bác bỏ** giả định trong giai đoạn trước. Nó không loại trừ một cú sốc riêng cho 3 tỉnh xảy ra đúng lúc áp dụng (ví dụ hãng vận chuyển mở kho mới ở Vinh). Vẫn cần rà soát các sự kiện cục bộ cùng thời điểm.',
            },
            {
              id: 'b',
              text: 'Ước lượng đáng tin hơn: không có tác động giả trước mốc và tác động thật lớn hơn biến thiên tự nhiên giữa các tỉnh. Nhưng vẫn cần loại trừ sự kiện cục bộ cùng thời điểm và báo cáo khoảng +8% … +19% thay vì một con số.',
              correct: true,
              explain: 'Đúng. Placebo là bằng chứng phủ định: nó tăng niềm tin, không chứng minh. Một senior analyst trình bày cả điểm ước lượng, khoảng tin cậy rộng do ít tỉnh, và danh sách rủi ro còn lại.',
            },
            {
              id: 'c',
              text: 'Placebo không cần thiết vì biểu đồ trước chính sách đã song song.',
              explain: 'Biểu đồ là kiểm tra bằng mắt; placebo lượng hóa được mức "tác động giả" mà phương pháp tạo ra khi không có chính sách. Placebo tỉnh giả còn cho thước đo biến thiên tự nhiên để biết +13,6% có nổi bật không.',
            },
          ],
        },
      ],
    },
    {
      id: 'economics',
      kind: 'analysis',
      title: 'Bước 3 — Quy ra lợi nhuận ròng và khả năng áp dụng toàn quốc',
      blocks: [
        {
          kind: 'formula',
          expression: 'Lợi nhuận ròng/tuần = Đơn tăng thêm × 70.000 đ + Đơn nền × ΔAOV × 20% − Đơn đủ điều kiện × 18.000 đ',
          note: '70.000 đ = biên đóng góp mỗi đơn mới (trước phí ship). Phần AOV tăng tính trên 22.000 đơn nền với biên 20%. Trợ giá trả cho **mọi** đơn đủ điều kiện, kể cả những đơn lẽ ra vẫn mua: 60% × 25.000 × 18.000 đ = 270 tr đ.',
        },
        {
          kind: 'table',
          title: 'Kinh tế/tuần ở 3 tỉnh theo từng cách ước lượng',
          columns: [
            { key: 'scenario', label: 'Kịch bản' },
            { key: 'orders', label: 'Đơn tăng thêm', align: 'right' },
            { key: 'gain', label: 'Lợi ích (tr đ)', align: 'right' },
            { key: 'cost', label: 'Chi phí (tr đ)', align: 'right' },
            { key: 'net', label: 'Ròng (tr đ)', align: 'right' },
          ],
          rows: [
            { scenario: 'Trước/sau ngây thơ (+25%)', orders: '5.000', gain: '398,0', cost: '270,0', net: '+128,0' },
            { scenario: 'DiD — cận dưới (+8%)', orders: '1.760', gain: '176,0', cost: '270,0', net: '−94,0' },
            { scenario: 'DiD — điểm (+13,6%)', orders: '3.000', gain: '262,8', cost: '270,0', net: '−7,2' },
            { scenario: 'DiD — cận trên (+19%)', orders: '4.180', gain: '345,4', cost: '270,0', net: '+75,4' },
          ],
          highlight: [
            { row: 0, tone: 'negative' },
            { row: 2, tone: 'warning' },
          ],
          caption: 'Trước/sau nói "lãi 128 tr/tuần". DiD nói "hòa vốn, khoảng từ lỗ 94 tr đến lãi 75 tr". Cùng dữ liệu, hai quyết định ngược nhau.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Kết quả 3 tỉnh chưa phải kết quả toàn quốc',
          md: '3 tỉnh được Growth chọn **vì** phí ship trung bình cao (≈ 35.000 đ so với 22.000 đ toàn quốc) và tỷ lệ mua online thấp, tức là nơi freeship dự kiến hiệu quả nhất. Ở Hà Nội và TP.HCM, nơi phí ship vốn rẻ và giao nhanh, tác động gần như chắc chắn nhỏ hơn, trong khi chi phí trợ giá trên mỗi đơn vẫn như vậy. Ngay trong mẫu, Hà Tĩnh (tỉnh nhỏ nhất) đã có tác động thấp nhất.',
        },
        {
          kind: 'quiz',
          id: 'diff-in-diff-policy-q3',
          question: 'CEO hỏi: "Vậy có mở toàn quốc không?" Khuyến nghị nào tốt nhất?',
          options: [
            {
              id: 'a',
              text: 'Mở toàn quốc ngay: tác động là thật (+13,6%) và vượt mọi placebo.',
              explain: 'Tác động thật không có nghĩa là có lãi: ở điểm ước lượng chính sách đang lỗ nhẹ, và các tỉnh lớn nhiều khả năng phản ứng yếu hơn. Mở toàn quốc là nhân rộng một khoản lỗ tiềm năng.',
            },
            {
              id: 'b',
              text: 'Dừng ngay ở cả 3 tỉnh vì DiD cho thấy lỗ 7,2 tr/tuần.',
              explain: 'Khoảng tin cậy trải từ −94 tr đến +75 tr: chưa đủ bằng chứng để nói lỗ, và chưa tính giá trị khách quay lại. Dừng ngay cũng mất cơ hội học thêm với chi phí thấp.',
            },
            {
              id: 'c',
              text: 'Chưa mở toàn quốc. Thử ngưỡng 199.000 đ ở 3 tỉnh để giảm trợ giá, đồng thời mở rộng theo đợt có ngẫu nhiên hóa (chọn ngẫu nhiên tỉnh nào vào trước) gồm cả tỉnh phí ship thấp, đo thêm tỷ lệ mua lại 90 ngày rồi mới quyết định.',
              correct: true,
              explain: 'Đúng. Phương án này giải quyết đúng hai điểm yếu: hiệu quả kinh tế hòa vốn (chỉnh ngưỡng/mức trợ giá) và khả năng khái quát (mở rộng ngẫu nhiên theo đợt cho ước lượng sạch hơn DiD và cho biết tác động ở các loại tỉnh khác nhau). Mua lại 90 ngày có thể kéo cán cân sang có lãi.',
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
          md: '**Kết luận cho CEO:** Freeship làm tăng đơn thật, khoảng **+13,6% (90%: +8% … +19%)** và AOV +12.000 đ, không phải +25% như báo cáo trước/sau. Sau khi trừ trợ giá, chính sách **đang ở quanh điểm hòa vốn** (−7,2 tr đ/tuần, khoảng −94 … +75 tr). 3 tỉnh thử nghiệm được chọn vì dễ phản ứng nhất, nên toàn quốc nhiều khả năng kém hơn. **Không mở toàn quốc ở cấu hình hiện tại**; chạy đợt mở rộng có thiết kế để quyết định trong 1 quý.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Giữ freeship ở 3 tỉnh nhưng tách ngẫu nhiên theo quận/huyện hai ngưỡng 150.000 đ và 199.000 đ trong 6 tuần',
              owner: 'Growth lead',
              metric: 'Lợi nhuận ròng/tuần sau trợ giá theo từng ngưỡng',
              threshold: 'Chọn ngưỡng có cận dưới 90% của lợi nhuận ròng ≥ 0',
            },
            {
              action: 'Mở rộng theo đợt (stepped rollout): chọn ngẫu nhiên 8 tỉnh trong danh sách 16 tỉnh đủ điều kiện, gồm cả tỉnh phí ship thấp, đợt 2 vào sau 6 tuần',
              owner: 'Growth + Data/Analytics',
              metric: 'Tác động lên đơn theo nhóm phí ship (cao/thấp)',
              threshold: 'Chỉ mở toàn quốc nếu tác động ở nhóm phí ship thấp ≥ +8% và ròng ≥ 0',
            },
            {
              action: 'Theo dõi tỷ lệ mua lại 90 ngày của khách mới đến từ freeship so với nhóm đối chứng',
              owner: 'CRM/Retention',
              metric: 'Biên đóng góp 90 ngày/khách',
              threshold: 'Đủ bù khoản lỗ ròng ở điểm ước lượng (≥ 7,2 tr đ/tuần)',
            },
            {
              action: 'Giám sát lan tỏa: tỷ lệ đổi địa chỉ nhận hàng sang tỉnh áp dụng, loại tỉnh giáp ranh khỏi nhóm đối chứng',
              owner: 'Data/Analytics',
              metric: 'Đơn chuyển địa chỉ từ tỉnh giáp ranh',
              threshold: '< 2% đơn của tỉnh áp dụng; nếu vượt, trừ khỏi tác động',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'DiD đã làm tốt việc của nó: tách phần mùa vụ khỏi tác động và lật ngược kết luận "lãi 128 tr". Nhưng ở mức senior, câu trả lời không dừng ở "có tác động": nó gắn tác động với **kinh tế ròng có khoảng tin cậy**, chỉ ra **giới hạn khái quát** do cách chọn tỉnh, và biến lần mở rộng tiếp theo thành **một thí nghiệm có ngẫu nhiên hóa**, rẻ hơn nhiều so với việc mở toàn quốc rồi mới phát hiện lỗ.',
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
              title: 'Đo trước/sau và gán toàn bộ thay đổi cho chính sách',
              why: 'Mùa vụ, khuyến mãi toàn sàn và xu hướng chung cũng thay đổi trong cùng giai đoạn. Ở đây trước/sau thổi tác động từ 13,6% lên 25% và biến hòa vốn thành "lãi 128 tr/tuần".',
              instead: 'Luôn hỏi "so với phản thực tế nào?" và dùng nhóm đối chứng (DiD, synthetic control) khi không thể A/B.',
            },
            {
              title: 'Chọn nhóm đối chứng tiện tay',
              why: 'Đối chứng có xu hướng khác trước chính sách, hoặc bị lan tỏa (tỉnh giáp ranh, khách đổi địa chỉ), sẽ làm sai lệch ước lượng mà không ai nhận ra.',
              instead: 'Chọn đối chứng có xu hướng trước song song, loại vùng có thể bị lan tỏa, và chạy placebo ngày giả, tỉnh giả trước khi báo cáo.',
            },
            {
              title: 'Khái quát từ đơn vị được chọn có chủ đích',
              why: 'Đơn vị được chọn để thử vì kỳ vọng hiệu quả cao thường cho tác động lớn hơn mức trung bình toàn quốc. Ba tỉnh cũng là cỡ mẫu rất nhỏ, khoảng tin cậy thật rộng hơn nhiều so với sai số chuẩn thông thường.',
              instead: 'Nói rõ phạm vi áp dụng của kết quả, dùng hoán vị/bootstrap theo đơn vị, và thiết kế đợt mở rộng tiếp theo có ngẫu nhiên hóa, bao gồm các loại đơn vị khác nhau.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Tác động nhân quả là chênh lệch so với phản thực tế; DiD dùng nhóm đối chứng để ước lượng phần thay đổi chung mà trước/sau bỏ qua.',
    'DiD chỉ đáng tin khi xu hướng trước song song, placebo ≈ 0 và không có lan tỏa; báo cáo khoảng tin cậy, đặc biệt khi chỉ có ít đơn vị được áp dụng.',
    'Một tác động có thật vẫn có thể không có lãi: quy ra kinh tế ròng có khoảng, xét giới hạn khái quát, rồi biến lần mở rộng tiếp theo thành thí nghiệm có ngẫu nhiên hóa.',
  ],
  references: [
    {
      title: 'Causal Inference: The Mixtape — Chapter 9: Difference-in-Differences',
      publisher: 'Scott Cunningham',
      url: 'https://mixtape.scunning.com/09-difference_in_differences',
      note: 'Nền tảng DiD, giả định xu hướng song song, event study và kiểm tra placebo.',
    },
    {
      title: 'The Effect — Chapter 18: Difference-in-Differences',
      publisher: 'Nick Huntington-Klein',
      url: 'https://theeffectbook.net/ch-DifferenceinDifference.html',
      note: 'Giải thích trực quan về phản thực tế, kiểm tra xu hướng trước và các biến thể DiD.',
    },
    {
      title: 'Trustworthy Online Controlled Experiments',
      publisher: 'Kohavi, Tang & Xu (experimentguide.com)',
      url: 'https://experimentguide.com/',
      note: 'Khi nào nên dùng phương pháp quan sát và vì sao thí nghiệm có ngẫu nhiên hóa vẫn là chuẩn vàng.',
    },
  ],
}
