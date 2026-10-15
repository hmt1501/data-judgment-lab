import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — Cửa hàng A (hư cấu), khuyến mãi giảm 20% ngành "Đồ bếp" tuần 3. 90.000 người dùng nhóm thử (thấy KM) + 10.000 nhóm giữ lại (holdout, không thấy KM).
 *   Đơn/người/tuần W1–W6: nhóm thử 0,050 / 0,050 / 0,095 / 0,038 / 0,047 / 0,050 · holdout luôn 0,050
 *   Nhóm thử (đơn): 4.500 / 4.500 / 8.550 / 3.420 / 4.230 / 4.500 · holdout 500/tuần
 *   Phần tăng thêm so với holdout (× 90.000): W3 +4.050 · W4 −1.080 · W5 −270 · W6 0 → ròng +2.700 (66,7% phần tăng tuần KM; 1.350 bị "trả lại" = 33,3%)
 *   Phân khúc nhóm thử: khách quen (đã mua ngành bếp trong 60 ngày) 30.000 người, cơ sở 0,090 (2.700 đơn) → W3 0,165 (4.950) · W4 0,054 (1.620) · W5 0,081 (2.430)
 *     khách ít mua 60.000 người, cơ sở 0,030 (1.800) → W3 0,060 (3.600) · W4 0,030 (1.800) · W5 0,030 (1.800). Σ W3 8.550, W4 3.420, W5 4.230 ✓
 *     ròng: quen +2.250 − 1.080 − 270 = +900 · ít mua +1.800 + 0 + 0 = +1.800 · Σ 2.700 ✓
 *   Giá/biên: AOV 400 nghìn, giá vốn 280 → biên 120/đơn; giảm 20% → giá 320, biên 40/đơn
 *   Doanh thu so với không KM: W3 8.550×320 − 4.500×400 = +936 tr · W4 −1.080×400 = −432 · W5 −270×400 = −108 → ròng +396 tr (đơn vị triệu đồng)
 *   Lợi nhuận gộp: W3 8.550×40 − 4.500×120 = −198 tr · W4 −1.080×120 = −129,6 · W5 −270×120 = −32,4 → ròng −360 tr (quen −288, ít mua −72)
 *   Ngưỡng hòa vốn của mức tăng đơn: 120/40 = 3,0 lần (giảm 20%) · giảm 10% (biên 80): 120/80 = 1,5 lần
 */
export const promoCannibalizationTest: CaseStudy = {
  id: 'promo-cannibalization-test',
  title: 'Khuyến mãi tuần 3 tăng doanh thu nhưng "ăn" vào tuần sau',
  domain: 'ecommerce',
  level: 'junior',
  minutes: 12,
  skills: ['cohort', 'causal', 'experiment', 'unit-economics'],
  question:
    'Tuần khuyến mãi đơn tăng 90%, nhưng tuần sau thấp hơn bình thường. Phần tăng thật sự là bao nhiêu, đến từ nhóm khách nào, và chương trình có đáng chạy lại không?',
  summary:
    'Dùng nhóm giữ lại (holdout) để đo lượng đơn tăng thêm qua nhiều tuần, tách khách quen và khách ít mua để thấy ai bị "kéo từ tuần sau", rồi quy ra lợi nhuận.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng: cửa hàng và mọi con số đều là giả định để minh họa.* **Cửa hàng A** chạy khuyến mãi **giảm 20% ngành đồ bếp** trong tuần 3. Đơn của ngành tăng từ 4.500 lên 8.550 (+90%), ban điều hành rất hào hứng. Tuy nhiên tuần 4 chỉ còn 3.420 đơn, thấp hơn mức bình thường 4.500. Thiết kế thử nghiệm có sẵn một **nhóm giữ lại (holdout)**: 10.000 người dùng không được hiển thị khuyến mãi, còn 90.000 người còn lại được hiển thị.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Đơn tuần KM (nhóm thử)', value: '8.550', delta: '+90%', tone: 'positive', note: 'Cơ sở: 4.500' },
            { label: 'Đơn tuần sau', value: '3.420', delta: '−24%', tone: 'negative', note: 'Cơ sở: 4.500' },
            { label: 'Giảm giá', value: '20%', note: 'Biên gộp 30% → 12,5% trên đơn KM' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi cần trả lời',
          md: 'Đơn tăng trong tuần KM có **thật sự tăng thêm** không, hay chỉ là mua sớm hơn (pull-forward) và mua với giá giảm những thứ khách vẫn sẽ mua? Sau khi tính cả giảm giá và các tuần sau, **lợi nhuận tăng hay giảm**?',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: đo bằng đối chứng, trên nhiều tuần, theo phân khúc',
      blocks: [
        {
          kind: 'formula',
          expression: 'Tăng thêm (tuần t) = (Đơn/người nhóm thử − Đơn/người holdout) × Số người nhóm thử  ·  Tăng thêm ròng = Σ các tuần',
          note: 'So với **holdout cùng tuần**, không so với tuần trước: holdout hấp thụ mùa vụ và các sự kiện chung. Cộng dồn các tuần sau KM để thấy phần "trả lại".',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Đo mức tăng thêm theo từng tuần** so với holdout, kể cả các tuần sau KM.',
            '**Phân khúc** (khách quen / ít mua) để biết ai kéo mua sớm, ai thật sự mới mua.',
            '**Quy ra tiền**: doanh thu và lợi nhuận gộp so với kịch bản không KM, vì giảm giá cũng áp cho đơn lẽ ra vẫn xảy ra.',
            '**Loại trừ**: mùa vụ, sự kiện chung (holdout đã xử lý), lệch phân bổ nhóm.',
          ],
        },
        {
          kind: 'quiz',
          id: 'promo-cannibalization-test-q1',
          question: 'Cách nào đúng để đo mức tăng của khuyến mãi tuần 3?',
          options: [
            {
              id: 'a',
              text: 'So đơn tuần 3 với tuần 2: 8.550 so với 4.500, tăng 90%.',
              explain: 'So trước/sau gộp cả mùa vụ và sự kiện khác, và bỏ qua các tuần sau KM bị "trả lại".',
            },
            {
              id: 'b',
              text: 'So đơn/người của nhóm thử với holdout trong tuần 3 và các tuần sau, rồi cộng lại.',
              correct: true,
              explain: 'Đúng. Holdout cùng thời gian là phản thực tế gần nhất; cộng dồn nhiều tuần mới cho thấy mức tăng ròng.',
            },
            {
              id: 'c',
              text: 'Chỉ so với tháng cùng kỳ năm trước.',
              explain: 'Khác năm khác nhiều thứ (giá, lượng khách, danh mục). Đối chứng tốt nhất là nhóm cùng thời gian.',
            },
          ],
        },
      ],
    },
    {
      id: 'incremental',
      kind: 'analysis',
      title: 'Bước 1 — Mức tăng thêm ròng so với holdout',
      blocks: [
        {
          kind: 'chart',
          title: 'Đơn trên 1.000 người dùng mỗi tuần (ngành đồ bếp)',
          type: 'line',
          xKey: 'week',
          series: [
            { key: 'treat', label: 'Nhóm thử (thấy KM)' },
            { key: 'hold', label: 'Holdout' },
          ],
          data: [
            { week: 'W1', treat: 50, hold: 50 },
            { week: 'W2', treat: 50, hold: 50 },
            { week: 'W3', treat: 95, hold: 50 },
            { week: 'W4', treat: 38, hold: 50 },
            { week: 'W5', treat: 47, hold: 50 },
            { week: 'W6', treat: 50, hold: 50 },
          ],
          marker: { x: 'W3', label: 'Giảm 20%' },
          caption: 'Holdout phẳng ở 50: không có mùa vụ nào ảnh hưởng. Nhóm thử có một đỉnh, rồi hai tuần dưới mức nền, trước khi về lại 50.',
        },
        {
          kind: 'table',
          title: 'Đơn tăng thêm của nhóm thử (90.000 người)',
          columns: [
            { key: 'w', label: 'Tuần' },
            { key: 'orders', label: 'Đơn nhóm thử', align: 'right' },
            { key: 'cf', label: 'Đơn nếu như holdout', align: 'right' },
            { key: 'inc', label: 'Tăng thêm', align: 'right' },
          ],
          rows: [
            { w: 'W3 (KM)', orders: '8.550', cf: '4.500', inc: '+4.050' },
            { w: 'W4', orders: '3.420', cf: '4.500', inc: '−1.080' },
            { w: 'W5', orders: '4.230', cf: '4.500', inc: '−270' },
            { w: 'W6', orders: '4.500', cf: '4.500', inc: '0' },
            { w: 'Ròng W3–W6', orders: '', cf: '', inc: '+2.700 (66,7% phần tăng tuần KM)' },
          ],
          highlight: [{ row: 1, tone: 'negative' }, { row: 4, tone: 'warning' }],
          caption: '1.350 trong 4.050 đơn tăng thêm (33,3%) bị lấy từ hai tuần sau: đó là cannibalization theo thời gian.',
        },
        {
          kind: 'quiz',
          id: 'promo-cannibalization-test-q2',
          question: 'Điều gì đúng về phần "+90%" ở tuần KM?',
          options: [
            {
              id: 'a',
              text: 'Là hiệu quả thật của KM, vì holdout không tăng.',
              explain: 'Holdout chứng tỏ KM gây ra mức tăng tuần 3, nhưng không chứng tỏ nó còn lại sau các tuần sau. Cộng dồn mới ra mức ròng.',
            },
            {
              id: 'b',
              text: 'Một phần ba bị trả lại trong hai tuần sau, mức tăng ròng là +2.700 đơn (+60% so với một tuần nền), không phải +4.050.',
              correct: true,
              explain: 'Đúng: 2.700/4.500 = 60% của một tuần cơ sở. Đây vẫn là mức tăng dương, nhưng chưa tính chi phí giảm giá.',
            },
            {
              id: 'c',
              text: 'Chứng tỏ KM vô ích vì tuần sau thấp hơn.',
              explain: 'Ròng vẫn dương +2.700 đơn. Có đáng không phụ thuộc vào biên lợi nhuận, xem bước 3.',
            },
          ],
        },
      ],
    },
    {
      id: 'segment',
      kind: 'analysis',
      title: 'Bước 2 — Phân khúc: ai bị kéo từ tuần sau?',
      blocks: [
        {
          kind: 'table',
          title: 'Đơn nhóm thử theo mức độ gắn bó (đã mua ngành bếp trong 60 ngày qua)',
          columns: [
            { key: 'seg', label: 'Phân khúc' },
            { key: 'n', label: 'Người', align: 'right' },
            { key: 'w', label: 'Đơn nền → W3 → W4 → W5', align: 'right' },
            { key: 'net', label: 'Tăng thêm ròng', align: 'right' },
          ],
          rows: [
            { seg: 'Khách quen', n: '30.000', w: '2.700 → 4.950 → 1.620 → 2.430', net: '+2.250 − 1.080 − 270 = +900' },
            { seg: 'Khách ít mua', n: '60.000', w: '1.800 → 3.600 → 1.800 → 1.800', net: '+1.800 (không có tuần trũng)' },
            { seg: 'Tổng', n: '90.000', w: '4.500 → 8.550 → 3.420 → 4.230', net: '+2.700' },
          ],
          highlight: [{ row: 0, tone: 'warning' }],
          caption: 'Khách quen chiếm 55% đơn tăng tuần KM (2.250/4.050) nhưng chỉ giữ lại 40% (900/2.250) sau các tuần sau; khách ít mua giữ lại toàn bộ.',
        },
        {
          kind: 'text',
          md: 'Giả thuyết: khách quen **mua trước nhu cầu của hai tuần sau** (tích trữ vì giá rẻ), nên có tuần trũng. Khách ít mua thật sự được kích hoạt. Giả thuyết kiểm tra được: nếu đúng, khoảng cách giữa các lần mua của khách quen phải dài ra ở W4–W5 và họ nên mua nhiều món/đơn hơn ở W3; nếu không thấy điều đó mà trũng vẫn có, có thể do hết ngân sách chi tiêu trong tháng hoặc lỗi gán nhóm.',
        },
        {
          kind: 'quiz',
          id: 'promo-cannibalization-test-q3',
          question: 'Khuyến mãi lần sau nên điều chỉnh thế nào để giảm cannibalization?',
          options: [
            {
              id: 'a',
              text: 'Giảm sâu hơn (30%) để kéo thêm khách ít mua.',
              explain: 'Giảm sâu làm biên mỗi đơn mỏng thêm, và khách quen vẫn "tích trữ". Chưa có bằng chứng khách ít mua phản ứng mạnh hơn khi giảm sâu.',
            },
            {
              id: 'b',
              text: 'Nhắm ưu đãi vào khách ít mua (hoặc giảm nông hơn cho khách quen) và đo lại với holdout.',
              correct: true,
              explain: 'Đúng. Phân khúc chỉ ra nơi khuyến mãi tạo nhu cầu mới và nơi chỉ dời lịch mua; thử lại bằng holdout để xác nhận.',
            },
            {
              id: 'c',
              text: 'Rút ngắn KM xuống 1 ngày để tuần sau không bị trũng.',
              explain: 'Độ dài KM không phải biến duy nhất; chưa có dữ liệu nói rằng trũng do độ dài. Đó là giả thuyết cần thử, không phải giải pháp chắc.',
            },
          ],
        },
      ],
    },
    {
      id: 'profit',
      kind: 'analysis',
      title: 'Bước 3 — Quy ra tiền: doanh thu và lợi nhuận',
      blocks: [
        {
          kind: 'table',
          title: 'So với kịch bản không khuyến mãi (triệu đồng)',
          columns: [
            { key: 'item', label: 'Khoản' },
            { key: 'rev', label: 'Doanh thu', align: 'right' },
            { key: 'gp', label: 'Lợi nhuận gộp', align: 'right' },
          ],
          rows: [
            { item: 'W3: 8.550 đơn × giá 320 (biên 40) so với 4.500 × giá 400 (biên 120)', rev: '+936', gp: '−198' },
            { item: 'W4: −1.080 đơn bình thường', rev: '−432', gp: '−129,6' },
            { item: 'W5: −270 đơn bình thường', rev: '−108', gp: '−32,4' },
            { item: 'Ròng', rev: '+396', gp: '−360' },
            { item: 'Trong đó: khách quen / ít mua', rev: '', gp: '−288 / −72' },
          ],
          highlight: [{ row: 3, tone: 'negative' }],
          caption: 'Giả định AOV 400 nghìn, giá vốn 280 nghìn (biên gộp 120 nghìn/đơn, 30%); giảm 20% còn 40 nghìn. Các số này là giả định minh họa.',
        },
        {
          kind: 'formula',
          expression: 'Mức tăng đơn hòa vốn = Biên bình thường / Biên sau giảm giá  (20%: 120/40 = 3,0 lần; 10%: 120/80 = 1,5 lần)',
          note: 'Với giảm 20%, đơn phải tăng ít nhất 3 lần mới hòa vốn gộp ở tuần KM; thực tế nhóm ít mua chỉ tăng 2,0 lần (3.600/1.800). Giảm nông hơn hạ ngưỡng hòa vốn đáng kể.',
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
          md: '**Kết luận:** Khuyến mãi tăng doanh thu +396 triệu đồng nhưng **giảm lợi nhuận gộp 360 triệu đồng**: 1/3 mức tăng là mua sớm (đặc biệt ở khách quen) và giảm 20% trợ giá cả những đơn vốn dĩ vẫn xảy ra. Không chạy lại nguyên bản; thử phiên bản nhắm đối tượng, giảm nông hơn và đo bằng holdout.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Chạy thử KM giảm 10%, chỉ hiển thị cho khách ít mua; giữ holdout 10% và đo 4 tuần sau KM',
              owner: 'Trưởng nhóm marketing + Data/Analytics',
              metric: 'Đơn tăng thêm ròng; lợi nhuận gộp tăng thêm so với holdout',
              threshold: 'Lợi nhuận gộp tăng thêm > 0 sau 4 tuần; mức tăng đơn ≥ 1,5 lần ở khách ít mua',
            },
            {
              action: 'Với khách quen thay giảm giá bằng ưu đãi không giảm biên (miễn phí vận chuyển có điều kiện, điểm thưởng)',
              owner: 'Product CRM',
              metric: 'Đơn khách quen ở W+1 và W+2 so với holdout',
              threshold: 'Tuần trũng ≤ 10% đơn nền (đang −24% ở W4)',
            },
            {
              action: 'Đưa "tăng thêm ròng sau N tuần" và "lợi nhuận tăng thêm" thành chỉ số báo cáo chuẩn mọi KM, thay vì đơn tuần KM',
              owner: 'Data/Analytics',
              metric: 'Báo cáo KM có holdout, 4 tuần theo dõi',
              threshold: '100% KM > 50 triệu đồng có holdout hoặc đối chứng thay thế',
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
              title: 'Chấm điểm KM bằng đơn tuần KM',
              why: 'Bỏ qua phần mua sớm bị trừ vào các tuần sau và phần trợ giá cho đơn vốn dĩ có.',
              instead: 'Đo tăng thêm ròng trên nhiều tuần so với holdout rồi quy ra lợi nhuận.',
            },
            {
              title: 'So với tuần ngay trước KM',
              why: 'Tuần trước KM có thể đã trũng (khách chờ KM) hoặc đang có mùa vụ, làm phép so sánh sai.',
              instead: 'Dùng nhóm giữ lại cùng thời gian; nếu không có, dùng nhiều tuần cơ sở và kiểm tra trước KM.',
            },
            {
              title: 'Giữ lại nhóm đối chứng không ngẫu nhiên',
              why: 'Nếu holdout là nhóm "ít hoạt động" thì mọi so sánh đều thiên lệch.',
              instead: 'Gán ngẫu nhiên và kiểm tra hai nhóm giống nhau ở tuần cơ sở (như W1–W2 ở đây).',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Khuyến mãi phải được đo bằng mức tăng thêm ròng so với đối chứng cùng thời gian, gồm cả các tuần sau.',
    'Phân khúc cho thấy ai thật sự bị kích hoạt và ai chỉ mua sớm; khách quen thường là nguồn cannibalization.',
    'Doanh thu tăng chưa đủ: quy ra lợi nhuận và so với mức tăng hòa vốn của mức giảm giá.',
  ],
  references: [
    {
      title: 'Cannibalization (marketing)',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Cannibalization_(marketing)',
      note: 'Khái niệm cannibalization: doanh số một sản phẩm/chương trình lấy từ chính doanh số của mình.',
    },
    {
      title: 'Randomized controlled trial',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Randomized_controlled_trial',
      note: 'Cơ sở của việc gán ngẫu nhiên nhóm thử và nhóm đối chứng để ước lượng tác động nhân quả.',
    },
    {
      title: 'Cohort analysis',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Cohort_analysis',
      note: 'Phân tích theo nhóm có chung đặc điểm/thời điểm, dùng để tách khách quen và khách ít mua.',
    },
  ],
}
