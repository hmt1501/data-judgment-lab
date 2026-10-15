import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — App "Cờ Vui" (hư cấu), cohort cài đặt T1/T2/T3, so sánh DOANH THU LŨY KẾ TRÊN MỖI NGƯỜI cùng tuổi D30/D60/D90 (nghìn đồng).
 *   Quy mô mỗi cohort: tự nhiên 8.000 · quảng cáo mạng xã hội 12.000 · influencer 5.000 (tổng 25.000/tháng)
 *   Doanh thu/người (D30 / D60 / D90):
 *     Tự nhiên:      T1 14/24/31 · T2 15/25/32 · T3 14/24/31
 *     Mạng xã hội:   T1 12/20/26 · T2 11/18/22 · T3 9/14/17
 *     Influencer:    T1 8/16/24  · T2 8/17/26  · T3 7/15/25
 *   LTV D90 gộp theo tháng: T1 (8.000×31 + 12.000×26 + 5.000×24)/25.000 = 680.000/25.000 = 27,2 · T2 (256.000+264.000+130.000)/25.000 = 650.000/25.000 = 26,0 · T3 (248.000+204.000+125.000)/25.000 = 577.000/25.000 = 23,08
 *   CPI (nghìn): MXH T1 16 / T2 18 / T3 20 · influencer 22 mỗi tháng · tự nhiên 0
 *   Chi phí (triệu): MXH 192 / 216 / 240 · influencer 110/tháng. Doanh thu D90 (triệu): MXH 312 / 264 / 204 · influencer 120 / 130 / 125
 *   Ròng D90 (triệu): MXH +120 / +48 / −36 · influencer +10 / +20 / +15 · tổng trả phí +130 / +68 / −21
 *   Người trả tiền D90 của MXH: T1 6,5% × 400 = 26 · T2 5,5% × 400 = 22 · T3 4,25% × 400 = 17 (ARPPU 400 nghìn không đổi)
 *   Mức tăng D60 → D90 (nghìn/người): MXH T1 +6, T3 +3 · influencer T1 +8, T3 +10
 */
export const ltvByAcquisitionChannelCohort: CaseStudy = {
  id: 'ltv-by-acquisition-channel-cohort',
  title: 'LTV theo kênh và cohort: kênh quảng cáo nào còn hoàn vốn?',
  domain: 'mobile',
  level: 'junior',
  minutes: 12,
  skills: ['cohort', 'unit-economics', 'segmentation', 'monetization'],
  question:
    'LTV trung bình theo tháng của app đang giảm. Do kênh nào, cohort nào, và kênh trả phí nào còn hoàn vốn chi phí thu hút (CPI) sau 90 ngày?',
  summary:
    'So doanh thu lũy kế trên mỗi người theo kênh và cohort tháng cài đặt ở cùng độ tuổi, trừ CPI để xem hoàn vốn, và đặt giả thuyết về nguyên nhân kênh mạng xã hội kém đi.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng: app, chi phí và mọi con số đều là giả định để minh họa.* App game cờ **"Cờ Vui"** mua người dùng từ hai kênh trả phí (quảng cáo mạng xã hội, influencer) và có lượng cài đặt tự nhiên. Báo cáo cho thấy **LTV 90 ngày gộp giảm từ 27,2 xuống 23,1 nghìn đồng/người** qua ba cohort T1–T3. Trưởng nhóm tăng trưởng muốn biết nên giữ hay cắt kênh nào. Mỗi cohort có 25.000 người cài đặt, tỷ trọng kênh không đổi.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'LTV D90 gộp T1', value: '27,2 nghìn đ' },
            { label: 'LTV D90 gộp T3', value: '23,1 nghìn đ', delta: '−15,1%', tone: 'negative' },
            { label: 'Ròng trả phí D90 (T3)', value: '−21 triệu đ', tone: 'negative', note: 'T1: +130 triệu' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi cần trả lời',
          md: 'Mức giảm LTV gộp nằm ở kênh nào, và **kênh nào đã không còn hoàn vốn CPI**? Và cần so sánh các cohort ở **cùng độ tuổi** (D30/D60/D90), vì cohort cũ luôn có nhiều ngày để tích lũy doanh thu hơn.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: kênh × cohort × độ tuổi',
      blocks: [
        {
          kind: 'formula',
          expression: 'LTV(D90) = Doanh thu lũy kế 90 ngày / Số người cài đặt  ·  Ròng D90 = LTV(D90) − CPI',
          note: 'So **cùng tuổi** giữa các cohort, tách theo kênh vì mỗi kênh có CPI và chất lượng khác nhau. LTV D90 chưa phải LTV trọn đời, nên xem thêm độ dốc (tăng trưởng D60 → D90) để biết còn tiếp tục tích lũy không.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Cohort cùng độ tuổi**: đường cong doanh thu lũy kế theo ngày kể từ cài đặt.',
            '**Tách theo kênh** và so với CPI để xem hoàn vốn.',
            '**Phân rã** LTV thành tỷ lệ trả tiền × doanh thu mỗi người trả tiền.',
            '**Đặt giả thuyết** cho kênh xấu đi và loại trừ lỗi attribution.',
          ],
        },
        {
          kind: 'quiz',
          id: 'ltv-by-acquisition-channel-cohort-q1',
          question: 'Cách nào hợp lý để so sánh cohort T1 và T3?',
          options: [
            {
              id: 'a',
              text: 'So tổng doanh thu lũy kế đến hôm nay trên mỗi người.',
              explain: 'T1 đã có nhiều ngày hơn T3 để tích lũy doanh thu, nên T1 luôn trông tốt hơn dù chất lượng không đổi.',
            },
            {
              id: 'b',
              text: 'So doanh thu lũy kế tại cùng độ tuổi (D30, D60, D90) theo từng kênh.',
              correct: true,
              explain: 'Đúng. Cùng độ tuổi loại bỏ lợi thế thời gian, tách theo kênh loại bỏ ảnh hưởng của mix.',
            },
            {
              id: 'c',
              text: 'So doanh thu tháng đầu tiên của từng cohort theo lịch.',
              explain: 'Tháng lịch cắt cohort ở độ tuổi khác nhau (người cài cuối tháng chỉ có vài ngày), gây sai lệch.',
            },
          ],
        },
      ],
    },
    {
      id: 'cohort',
      kind: 'analysis',
      title: 'Bước 1 — LTV D90 theo kênh và cohort, so với CPI',
      blocks: [
        {
          kind: 'table',
          title: 'Doanh thu lũy kế/người (nghìn đồng) tại D30 / D60 / D90',
          columns: [
            { key: 'ch', label: 'Kênh' },
            { key: 't1', label: 'T1', align: 'right' },
            { key: 't2', label: 'T2', align: 'right' },
            { key: 't3', label: 'T3', align: 'right' },
            { key: 'cpi', label: 'CPI T1 / T2 / T3', align: 'right' },
          ],
          rows: [
            { ch: 'Tự nhiên (8.000/cohort)', t1: '14 / 24 / 31', t2: '15 / 25 / 32', t3: '14 / 24 / 31', cpi: '0' },
            { ch: 'Mạng xã hội (12.000)', t1: '12 / 20 / 26', t2: '11 / 18 / 22', t3: '9 / 14 / 17', cpi: '16 / 18 / 20' },
            { ch: 'Influencer (5.000)', t1: '8 / 16 / 24', t2: '8 / 17 / 26', t3: '7 / 15 / 25', cpi: '22 / 22 / 22' },
            { ch: 'Gộp D90 (25.000)', t1: '27,2', t2: '26,0', t3: '23,1', cpi: '' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
          caption: 'Tự nhiên ổn định (31–32), influencer ổn định (24–26), chỉ mạng xã hội giảm mạnh (26 → 22 → 17) trong khi CPI tăng (16 → 20).',
        },
        {
          kind: 'chart',
          title: 'Doanh thu lũy kế/người theo độ tuổi (nghìn đồng)',
          type: 'line',
          xKey: 'age',
          series: [
            { key: 'orgT3', label: 'Tự nhiên T3' },
            { key: 'socT1', label: 'MXH T1' },
            { key: 'socT3', label: 'MXH T3' },
            { key: 'infT3', label: 'Influencer T3' },
            { key: 'cpiSoc', label: 'CPI MXH T3 (20)' },
          ],
          data: [
            { age: 'D30', orgT3: 14, socT1: 12, socT3: 9, infT3: 7, cpiSoc: 20 },
            { age: 'D60', orgT3: 24, socT1: 20, socT3: 14, infT3: 15, cpiSoc: 20 },
            { age: 'D90', orgT3: 31, socT1: 26, socT3: 17, infT3: 25, cpiSoc: 20 },
          ],
          caption: 'MXH T3 chưa bao giờ chạm đường CPI 20 trong 90 ngày, trong khi MXH T1 vượt qua khoảng ngày 60. Influencer khởi đầu chậm nhưng dốc hơn.',
        },
        {
          kind: 'table',
          title: 'Hoàn vốn D90 theo kênh trả phí (triệu đồng)',
          columns: [
            { key: 'ch', label: 'Kênh' },
            { key: 'c', label: 'Cohort' },
            { key: 'rev', label: 'Doanh thu D90', align: 'right' },
            { key: 'cost', label: 'Chi phí', align: 'right' },
            { key: 'net', label: 'Ròng', align: 'right' },
          ],
          rows: [
            { ch: 'Mạng xã hội', c: 'T1', rev: 312, cost: 192, net: '+120' },
            { ch: 'Mạng xã hội', c: 'T2', rev: 264, cost: 216, net: '+48' },
            { ch: 'Mạng xã hội', c: 'T3', rev: 204, cost: 240, net: '−36' },
            { ch: 'Influencer', c: 'T1 / T2 / T3', rev: '120 / 130 / 125', cost: '110 / 110 / 110', net: '+10 / +20 / +15' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Tổng ròng của hai kênh trả phí: +130, +68, −21 triệu đồng. Kênh mạng xã hội chuyển từ sinh lợi nhuận lớn nhất sang lỗ trong 3 tháng.',
        },
        {
          kind: 'quiz',
          id: 'ltv-by-acquisition-channel-cohort-q2',
          question: 'Từ bảng và biểu đồ, nhận định nào có cơ sở nhất?',
          options: [
            {
              id: 'a',
              text: 'LTV giảm đều ở mọi kênh nên là vấn đề của sản phẩm.',
              explain: 'Tự nhiên và influencer gần như ổn định; chỉ mạng xã hội giảm. Vấn đề sản phẩm sẽ ảnh hưởng mọi kênh.',
            },
            {
              id: 'b',
              text: 'Sụt giảm tập trung ở kênh mạng xã hội, kết hợp CPI tăng khiến cohort T3 không hoàn vốn sau 90 ngày.',
              correct: true,
              explain: 'Đúng. Hai kênh còn lại ổn định chứng tỏ sản phẩm không là nguyên nhân chung.',
            },
            {
              id: 'c',
              text: 'Influencer kém vì lợi nhuận ròng D90 chỉ +15 đến +20 triệu.',
              explain: 'Nhỏ hơn mạng xã hội T1 nhưng ổn định dương, đồng thời độ dốc D60 → D90 lớn hơn (+10), có thể còn hoàn vốn thêm sau D90.',
            },
          ],
        },
      ],
    },
    {
      id: 'hypothesis',
      kind: 'analysis',
      title: 'Bước 2 — Vì sao mạng xã hội kém đi? Giả thuyết và loại trừ',
      blocks: [
        {
          kind: 'table',
          title: 'Phân rã LTV D90 của kênh mạng xã hội',
          columns: [
            { key: 'c', label: 'Cohort' },
            { key: 'payer', label: 'Tỷ lệ trả tiền D90', align: 'right' },
            { key: 'arppu', label: 'Doanh thu/người trả tiền (nghìn đ)', align: 'right' },
            { key: 'ltv', label: 'LTV D90 (nghìn đ)', align: 'right' },
          ],
          rows: [
            { c: 'T1', payer: '6,5%', arppu: 400, ltv: 26 },
            { c: 'T2', payer: '5,5%', arppu: 400, ltv: 22 },
            { c: 'T3', payer: '4,25%', arppu: 400, ltv: 17 },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Doanh thu mỗi người trả tiền không đổi; toàn bộ sụt giảm đến từ tỷ lệ người chuyển thành người trả tiền (6,5% → 4,25%).',
        },
        {
          kind: 'table',
          title: 'Giả thuyết, dự đoán và kết luận',
          columns: [
            { key: 'h', label: 'Giả thuyết' },
            { key: 'predict', label: 'Nếu đúng, ta sẽ thấy' },
            { key: 'seen', label: 'Dữ liệu' },
            { key: 'v', label: 'Kết luận' },
          ],
          rows: [
            {
              h: 'H1. Đối tượng quảng cáo mở rộng/bão hòa nên người cài kém chất lượng',
              predict: 'Tỷ lệ trả tiền giảm, ARPPU không đổi; CPI tăng',
              seen: 'Tỷ lệ trả tiền 6,5 → 4,25%, ARPPU 400, CPI 16 → 20',
              v: 'Khớp, cần xem thêm cấu hình nhắm đối tượng',
            },
            {
              h: 'H2. Lỗi attribution: cài đặt MXH bị gán nhầm sang "tự nhiên" hoặc ngược lại',
              predict: 'Tự nhiên cũng xấu đi hoặc tăng đột biến số lượng',
              seen: 'Tự nhiên đều 8.000/cohort, LTV 31–32',
              v: 'Không thấy dấu hiệu, gần như loại trừ',
            },
            {
              h: 'H3. Sản phẩm/phiên bản mới giảm chuyển đổi trả tiền',
              predict: 'Mọi kênh đều giảm tỷ lệ trả tiền ở T3',
              seen: 'Tự nhiên và influencer ổn định',
              v: 'Bị bác bỏ',
            },
          ],
          highlight: [{ row: 0, tone: 'warning' }],
          caption: 'Mỗi giả thuyết nên được ghi lại cùng dữ liệu cần kiểm tra thêm: ví dụ báo cáo nhắm đối tượng, tần suất hiển thị, cấu hình creative theo từng chiến dịch.',
        },
        {
          kind: 'quiz',
          id: 'ltv-by-acquisition-channel-cohort-q3',
          question: 'Trưởng nhóm tăng trưởng muốn cắt hết chi cho influencer vì "lợi nhuận ròng thấp nhất". Bạn tư vấn thế nào?',
          options: [
            {
              id: 'a',
              text: 'Đồng ý vì ngân sách nên dồn cho kênh tạo lợi nhuận tuyệt đối cao nhất.',
              explain: 'Kênh mạng xã hội đang lỗ ở T3. Lợi nhuận quá khứ không đảm bảo hiện tại; đây là lý do phân tích theo cohort.',
            },
            {
              id: 'b',
              text: 'Giữ influencer: ổn định dương, đường doanh thu còn dốc ở D60 → D90; cắt giảm hoặc tối ưu lại mạng xã hội, theo dõi thêm cohort mới.',
              correct: true,
              explain: 'Đúng. Quyết định ngân sách theo xu hướng hoàn vốn hiện tại của từng kênh, kèm theo thử nghiệm thay vì cắt hẳn.',
            },
            {
              id: 'c',
              text: 'Dừng toàn bộ kênh trả phí vì tổng ròng T3 đã âm.',
              explain: 'Tổng âm do một kênh. Influencer vẫn dương nên không có lý do dừng toàn bộ.',
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
          md: '**Kết luận:** LTV gộp giảm là do **một kênh**: mạng xã hội, với tỷ lệ trả tiền giảm từ 6,5% xuống 4,25% và CPI tăng 16 → 20, khiến cohort T3 lỗ 36 triệu đồng sau 90 ngày. Sản phẩm và attribution không có dấu hiệu lỗi. Điều chỉnh mạng xã hội, giữ influencer, báo cáo theo kênh × cohort × tuổi.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Giảm ngân sách MXH về mức hoàn vốn: thu hẹp đối tượng về nhóm giống người trả tiền, thử creative mới; đặt giới hạn CPI',
              owner: 'Trưởng nhóm tăng trưởng + Performance marketing',
              metric: 'LTV D90 − CPI của cohort MXH; tỷ lệ trả tiền D90',
              threshold: 'Ròng D90 ≥ +30 triệu cho cohort kế tiếp; tỷ lệ trả tiền ≥ 5,5%; ngưng nếu ròng < 0 hai cohort liên tiếp',
            },
            {
              action: 'Giữ influencer và theo dõi D180 để xác nhận hoàn vốn tiếp tục tăng',
              owner: 'Marketing + Data/Analytics',
              metric: 'Doanh thu lũy kế/người ở D180; ròng D180',
              threshold: 'D180 ≥ 30 nghìn đồng/người (D90 hiện 24–26)',
            },
            {
              action: 'Dựng báo cáo LTV theo kênh × cohort × độ tuổi (D30/D60/D90) và CPI kèm theo; tách phân rã tỷ lệ trả tiền × ARPPU',
              owner: 'Data/Analytics',
              metric: 'LTV cùng độ tuổi; ròng so với CPI',
              threshold: 'Cập nhật hằng tuần; cảnh báo khi LTV D30 của cohort mới thấp hơn 15% so với trung bình 3 cohort trước',
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
              title: 'So LTV lũy kế đến hôm nay giữa cohort cũ và mới',
              why: 'Cohort cũ có nhiều ngày hơn nên luôn trông tốt hơn; cohort mới trông xấu hơn dù chất lượng không đổi.',
              instead: 'So cùng độ tuổi (D30, D60, D90) giữa các cohort.',
            },
            {
              title: 'Báo cáo LTV gộp mọi kênh',
              why: 'Một kênh kém đi bị che bởi kênh tốt, và mix kênh đổi có thể làm LTV gộp đổi dù không kênh nào đổi.',
              instead: 'Báo cáo theo kênh và đặt cạnh CPI của kênh đó.',
            },
            {
              title: 'Coi LTV D90 là LTV trọn đời',
              why: 'Kênh có đường doanh thu còn dốc sau D90 (như influencer) sẽ bị đánh giá thấp.',
              instead: 'Xem độ dốc D60 → D90 và kiểm chứng bằng cohort cũ có dữ liệu dài hơn trước khi ngoại suy.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Luôn so cohort ở cùng độ tuổi, tách theo kênh và đặt LTV cạnh CPI để xem hoàn vốn.',
    'Phân rã LTV thành tỷ lệ trả tiền × ARPPU để biết sụt giảm đến từ chất lượng người dùng hay giá trị mỗi người trả tiền.',
    'Loại trừ lỗi attribution và vấn đề sản phẩm bằng cách xem kênh khác có cùng xu hướng hay không.',
  ],
  references: [
    {
      title: '[GA4] Cohort exploration',
      publisher: 'Google Analytics Help',
      url: 'https://support.google.com/analytics/answer/9670133',
      note: 'Hướng dẫn chính thức về cohort exploration: cách nhóm người dùng theo ngày cài/đầu và theo dõi hành vi cùng độ tuổi.',
    },
    {
      title: 'Customer lifetime value',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Customer_lifetime_value',
      note: 'Định nghĩa LTV và các cách ước tính, kèm lưu ý chiết khấu và thời hạn.',
    },
    {
      title: 'Customer acquisition cost',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Customer_acquisition_cost',
      note: 'Định nghĩa chi phí thu hút khách hàng, cặp với LTV để đánh giá hoàn vốn.',
    },
  ],
}
