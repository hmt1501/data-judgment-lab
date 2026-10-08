import type { CaseStudy } from '../types'

/*
 * Số liệu mock (cohort = tháng có đơn đầu tiên thành công; dữ liệu chốt hết 30/9; "mua lại trong N ngày" = có đơn thứ hai
 * thành công trong N ngày kể từ ngày đơn đầu, tích lũy), đã kiểm tra khớp nhau:
 *   Cohort (khách mới · R30 · R60 · R90):
 *     T4 10.000 · 12,0% · 17,0% · 20,0% · T5 10.500 · 12,2% · 17,3% · 20,2% · T6 11.000 · 11,8% · 16,9% · 19,9%
 *     T7 12.000 · 12,0% · 17,0% · — (khách trẻ nhất 61 ngày) · T8 15.000 · 8,4% · — · — (30 ngày) · T9 13.000 · — (0 ngày)
 *   T7 R30: 12.000 × 12,0% = 1.440 khách
 *   T8 R30: 15.000 × 8,4% = 1.260 khách
 *   T9 "đến nay" 3,1% → 13.000 × 3,1% = 403 khách (số đọc từ dashboard thô, chưa chín)
 *   Theo ưu đãi đơn đầu:
 *     T7: giá thường 10.800 (90%) × 12,5% = 1.350 · voucher sâu 1.200 (10%) × 7,5% = 90 → 1.440 = 12,0%
 *     T8: giá thường 9.000 (60%) × 12,0% = 1.080 · voucher sâu 6.000 (40%) × 3,0% = 180 → 1.260 = 8,4%
 *     Phân rã −3,6 điểm %: mix = (0,6 × 12,5 + 0,4 × 7,5) − 12,0 = 10,5 − 12,0 = −1,5 · tỷ lệ = 8,4 − 10,5 = −2,1
 *       trong đó voucher 0,4 × (3,0 − 7,5) = −1,8 · giá thường 0,6 × (12,0 − 12,5) = −0,3
 *   Theo kênh T8: Organic/CRM 7.000 × 12,0% = 840 · Paid social 5.000 × 6,0% = 300 · Affiliate/mã giảm giá 3.000 × 4,0% = 120 → 1.260
 *   Nếu voucher sâu T8 về 7,5%: +6.000 × 4,5 điểm % = +270 khách mua lại
 */
export const repeatPurchaseCohort: CaseStudy = {
  id: 'repeat-purchase-cohort',
  title: 'Tỷ lệ mua lại 30 ngày tụt từ 12% xuống 8%: cohort tệ hay chưa kịp chín?',
  domain: 'ecommerce',
  level: 'junior',
  minutes: 10,
  skills: ['cohort', 'retention', 'segmentation'],
  question:
    'Tỷ lệ mua lại của khách mới tháng 8 và tháng 9 trông thấp hơn hẳn các tháng trước. Đâu là mức giảm thật, đâu chỉ là cohort chưa đủ tuổi, và khách từ kênh/ưu đãi nào kéo chỉ số xuống?',
  summary:
    'Đọc bảng cohort tháng đầu mua theo mốc 30/60/90 ngày, phân biệt ô "chưa chín" (censoring) với mức giảm thật, rồi so cohort theo ưu đãi và kênh đơn đầu để tách phần cơ cấu khỏi phần tỷ lệ.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng.* Bạn là analyst của một sàn thương mại điện tử. Đầu tháng 10, Head of CRM nhắn: *"Dashboard mua lại báo tháng 9 chỉ 3,1%, tháng 8 cũng thấp. Có phải khách mới gần đây kém chất lượng, hay mình làm hỏng gì rồi? Em xem giúp trước khi chốt ngân sách quý 4."* Dữ liệu chốt hết ngày 30/9.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Mua lại 30 ngày, cohort T7', value: '12,0%', note: '12.000 khách mới', tone: 'neutral' },
            { label: 'Mua lại 30 ngày, cohort T8', value: '8,4%', delta: '−3,6 điểm %', tone: 'negative', note: '15.000 khách mới' },
            { label: 'Mua lại "đến nay", cohort T9', value: '3,1%', note: '13.000 khách mới, dashboard thô', tone: 'warning' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Hai câu hỏi cần tách ra',
          md: 'Con số 3,1% của T9 và 8,4% của T8 **không cùng loại**. Một số là mức giảm thật, một số chỉ là khách chưa có đủ thời gian để mua lại. Việc đầu tiên: xác định ô nào trong bảng cohort *đọc được*, rồi mới giải thích.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: tuổi cohort trước, rồi mới so sánh',
      blocks: [
        {
          kind: 'formula',
          expression: 'Mua lại N ngày (RN) = Số khách của cohort có đơn thứ 2 thành công trong N ngày kể từ đơn đầu ÷ Số khách của cohort',
          note: 'Cohort = tháng có **đơn đầu tiên thành công**. Tính tích lũy, tính theo ngày đặt, loại đơn hủy và hoàn. Mỗi khách có "đồng hồ" riêng bắt đầu từ ngày đơn đầu của họ.',
        },
        {
          kind: 'text',
          md: 'Vì đồng hồ bắt đầu từ ngày mua đầu, khách mua ngày 30/9 mới có 0 ngày để mua lại tại thời điểm chốt dữ liệu. Một cohort chỉ **"chín" cho mốc N khi khách trẻ nhất của nó đã đủ N ngày**. Phần chưa đủ gọi là dữ liệu bị cắt (*censored*): nó không có nghĩa là "không mua lại", mà là "chưa biết".',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Lập tam giác cohort**: đánh dấu ô chưa chín bằng "—", không điền số tạm.',
            '**So cùng tuổi với cùng tuổi**: R30 với R30, chỉ giữa các cohort đã chín cho mốc đó.',
            '**Tìm cohort khác thường** rồi cắt theo ưu đãi và kênh đơn đầu.',
            '**Tách cơ cấu khỏi tỷ lệ** và lượng hoá phần nào chiếm bao nhiêu điểm %.',
          ],
        },
        {
          kind: 'quiz',
          id: 'repeat-purchase-cohort-q1',
          question:
            'Dashboard báo cohort T9 mua lại "đến nay" là 3,1% (403 / 13.000), thấp hơn nhiều T8. Cách đọc đúng là gì?',
          options: [
            {
              id: 'a',
              text: 'Khách tháng 9 kém chất lượng nhất từ trước đến nay, cần cắt chiến dịch ngay.',
              explain:
                'Đây là kết luận từ một ô chưa chín. Khách mua ngày 30/9 mới có 0 ngày, và cả cohort có tuổi trung bình khoảng 15 ngày, chưa đủ cửa sổ 30 ngày.',
            },
            {
              id: 'b',
              text: 'Chưa kết luận được. Cohort T9 chưa chín cho R30 nên chỉ so lại khi mọi khách của nó đã qua 30 ngày, tức sau 30/10.',
              correct: true,
              explain:
                'Đúng. So cohort chưa đủ tuổi với cohort đã chín là lỗi censoring kinh điển: số "đến nay" của T9 luôn thấp hơn mức cuối cùng của nó. Chỉ so cùng tuổi, hoặc đợi cohort chín.',
            },
            {
              id: 'c',
              text: 'Lấy 3,1% chia cho số ngày đã qua rồi nhân 30 để ra R30 dự kiến.',
              explain:
                'Mua lại không đều theo ngày: nhiều khách mua lại trong tuần đầu hoặc quanh các đợt khuyến mãi. Ngoại suy tuyến tính như vậy cho số sai, và giấu mất việc dữ liệu chưa chín.',
            },
          ],
        },
      ],
    },
    {
      id: 'triangle',
      kind: 'analysis',
      title: 'Bước 1 — Tam giác cohort: ô nào đọc được',
      blocks: [
        {
          kind: 'table',
          title: 'Mua lại theo cohort tháng đầu mua (chốt 30/9)',
          columns: [
            { key: 'cohort', label: 'Cohort' },
            { key: 'size', label: 'Khách mới', align: 'right' },
            { key: 'r30', label: 'R30', align: 'right' },
            { key: 'r60', label: 'R60', align: 'right' },
            { key: 'r90', label: 'R90', align: 'right' },
            { key: 'age', label: 'Tuổi khách trẻ nhất', align: 'right' },
          ],
          rows: [
            { cohort: 'T4', size: '10.000', r30: '12,0%', r60: '17,0%', r90: '20,0%', age: '153 ngày' },
            { cohort: 'T5', size: '10.500', r30: '12,2%', r60: '17,3%', r90: '20,2%', age: '122 ngày' },
            { cohort: 'T6', size: '11.000', r30: '11,8%', r60: '16,9%', r90: '19,9%', age: '92 ngày' },
            { cohort: 'T7', size: '12.000', r30: '12,0%', r60: '17,0%', r90: '—', age: '61 ngày' },
            { cohort: 'T8', size: '15.000', r30: '8,4%', r60: '—', r90: '—', age: '30 ngày' },
            { cohort: 'T9', size: '13.000', r30: '—', r60: '—', r90: '—', age: '0 ngày' },
          ],
          highlight: [{ row: 4, tone: 'negative' }],
          caption:
            'Ô "—" là chưa chín, không phải 0%. Bốn cohort T4–T7 ổn định quanh 12% ở R30. **T8 là cohort đầu tiên đọc được ở R30 mà lệch rõ**: 8,4%.',
        },
        {
          kind: 'chart',
          title: 'R30 theo cohort (chỉ các cohort đã chín)',
          type: 'line',
          xKey: 'cohort',
          unit: '%',
          series: [{ key: 'r30', label: 'R30' }],
          data: [
            { cohort: 'T4', r30: 12.0 },
            { cohort: 'T5', r30: 12.2 },
            { cohort: 'T6', r30: 11.8 },
            { cohort: 'T7', r30: 12.0 },
            { cohort: 'T8', r30: 8.4 },
          ],
          marker: { x: 'T8', label: 'Voucher đơn đầu giảm sâu' },
          caption: 'R30 phẳng quanh 12% rồi rơi thành bậc ở T8, đúng tháng sàn chạy chiến dịch voucher đơn đầu. T9 chưa vẽ vì chưa chín.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Mức 3,1% của T9 **đã bị bỏ khỏi bảng này** vì không so được. Điều có thật để điều tra là T8: số khách tăng 25% (12.000 → 15.000) nhưng số khách mua lại 30 ngày giảm từ 1.440 xuống 1.260. Thêm khách mà không thêm người quay lại: giống tình huống nên tách theo *ai đến*.',
        },
      ],
    },
    {
      id: 'promo',
      kind: 'analysis',
      title: 'Bước 2 — Cắt theo ưu đãi đơn đầu: cơ cấu và tỷ lệ',
      blocks: [
        {
          kind: 'table',
          title: 'R30 theo ưu đãi của đơn đầu tiên, T7 so với T8',
          columns: [
            { key: 'group', label: 'Nhóm' },
            { key: 't7', label: 'T7: khách (tỷ trọng) · R30', align: 'right' },
            { key: 't8', label: 'T8: khách (tỷ trọng) · R30', align: 'right' },
          ],
          rows: [
            { group: 'Mua giá thường / giảm nhẹ', t7: '10.800 (90%) · 12,5%', t8: '9.000 (60%) · 12,0%' },
            { group: 'Voucher giảm sâu đơn đầu', t7: '1.200 (10%) · 7,5%', t8: '6.000 (40%) · 3,0%' },
            { group: 'Tổng', t7: '12.000 · 12,0%', t8: '15.000 · 8,4%' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
          caption: '10.800 × 12,5% + 1.200 × 7,5% = 1.350 + 90 = 1.440; 9.000 × 12,0% + 6.000 × 3,0% = 1.080 + 180 = 1.260.',
        },
        {
          kind: 'formula',
          expression:
            'Cơ cấu = (0,6 × 12,5 + 0,4 × 7,5) − 12,0 = −1,5 điểm % · Tỷ lệ = 8,4 − 10,5 = −2,1 điểm % (voucher −1,8; giá thường −0,3)',
          note: 'Tổng −3,6 điểm %. Cơ cấu (voucher chiếm 40% thay vì 10%) lấy đi 1,5 điểm %; phần còn lại phần lớn do **chính nhóm voucher** mua lại ít hơn trước (7,5% → 3,0%).',
        },
        {
          kind: 'table',
          title: 'R30 cohort T8 theo kênh đơn đầu',
          columns: [
            { key: 'channel', label: 'Kênh' },
            { key: 'size', label: 'Khách mới', align: 'right' },
            { key: 'r30', label: 'R30', align: 'right' },
            { key: 'repeat', label: 'Khách mua lại', align: 'right' },
          ],
          rows: [
            { channel: 'Organic / CRM', size: '7.000', r30: '12,0%', repeat: '840' },
            { channel: 'Paid social', size: '5.000', r30: '6,0%', repeat: '300' },
            { channel: 'Affiliate / mã giảm giá', size: '3.000', r30: '4,0%', repeat: '120' },
            { channel: 'Tổng', size: '15.000', r30: '8,4%', repeat: '1.260' },
          ],
          highlight: [
            { row: 1, tone: 'warning' },
            { row: 2, tone: 'negative' },
          ],
          caption: 'Cùng một hướng: kênh mua theo deal giữ chân kém. Nhưng ưu đãi đơn đầu là chiều gần cơ chế hơn, vì kênh thay đổi theo việc có voucher hay không.',
        },
        {
          kind: 'quiz',
          id: 'repeat-purchase-cohort-q2',
          question: 'Từ hai bảng trên, kết luận nào chặt chẽ nhất?',
          options: [
            {
              id: 'a',
              text: 'Sản phẩm hoặc giao hàng tháng 8 tệ đi nên khách không quay lại.',
              explain:
                'Nhóm mua giá thường gần như không đổi (12,5% → 12,0%). Nếu trải nghiệm tệ đi, nhóm này phải giảm theo.',
            },
            {
              id: 'b',
              text: 'Phần lớn mức giảm đến từ khách săn voucher: họ chiếm nhiều hơn (cơ cấu −1,5) và mua lại ít hơn trước (−1,8). Cần kiểm chứng bằng thử nghiệm trước khi cắt voucher.',
              correct: true,
              explain:
                'Đúng. Cơ cấu và tỷ lệ của nhóm voucher giải thích gần hết 3,6 điểm %. Nhưng đây là dữ liệu quan sát: khách săn deal vốn ít trung thành, nên "voucher gây ra" chưa chắc đúng. Cần so nhánh có và không có voucher để biết tác động thật.',
            },
            {
              id: 'c',
              text: 'Bỏ hẳn voucher đơn đầu, vì khách dùng voucher mua lại ít hơn 4 lần.',
              explain:
                'Voucher có thể đưa về nhiều khách mới mà nếu không có thì họ không mua lần nào. Cắt đi chỉ vì R30 thấp là bỏ qua tổng đơn và lợi nhuận.',
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
          md: '**Kết luận cho Head of CRM:** (1) Mức 3,1% của T9 chưa kết luận được, đợi chín sau 30/10. (2) Mức giảm thật là T8: R30 12,0% → 8,4%, phần lớn do khách đến từ voucher giảm sâu (chiếm 40%, R30 chỉ 3,0%); nhóm mua giá thường gần như không đổi. (3) Nếu kéo nhóm voucher về mức cũ 7,5%, thêm khoảng **270 khách mua lại** mỗi cohort.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Sửa báo cáo cohort: hiển thị tam giác, ô chưa chín để trống/xám, chú thích tuổi khách trẻ nhất; không công bố R30/R60/R90 của cohort chưa chín',
              owner: 'Data/Analytics',
              metric: 'Số báo cáo có so cohort chưa chín',
              threshold: '0 báo cáo; R30 của T9 chỉ đọc sau 30/10',
            },
            {
              action: 'A/B test cho khách mới: voucher giảm sâu so với voucher nhẹ kèm voucher lần hai gửi sau 14 ngày; đối chứng nhận mức giá thường; đo R60 và tổng lợi nhuận sau 60 ngày',
              owner: 'CRM Manager + Analyst',
              metric: 'Chính: lợi nhuận gộp trên mỗi khách mới sau 60 ngày. Phụ: R30, R60',
              threshold: 'Chọn nhánh có lợi nhuận trên khách cao hơn; giữ voucher sâu chỉ khi R30 của nhóm này đạt ≥ 6%',
            },
            {
              action: 'Đặt hạn mức ngân sách cho affiliate/mã giảm giá theo chi phí trên khách mua lại, không theo chi phí trên đơn đầu',
              owner: 'Marketing performance',
              metric: 'Chi phí trên khách mua lại trong 60 ngày',
              threshold: 'Không vượt lợi nhuận gộp dự kiến của đơn thứ hai',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Phân tích quan sát đủ để chỉ ra **nhóm** gây giảm, nhưng không đủ để kết luận voucher sâu *làm* khách ít quay lại. A/B test với metric lợi nhuận trên khách mới tránh hai sai lầm đối xứng: cắt voucher làm mất khách mới, hoặc giữ nguyên rồi đốt ngân sách vào nhóm gần như không quay lại.',
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
              title: 'So cohort chưa chín với cohort đã chín',
              why: 'Cohort mới luôn trông "tệ" vì khách chưa có đủ thời gian mua lại. Điền số "đến nay" vào bảng và vẽ chung đường với cohort cũ tạo ra mức giảm không có thật.',
              instead: 'Chỉ so cùng tuổi (R30 với R30), để trống ô chưa chín và ghi rõ ngày chốt dữ liệu.',
            },
            {
              title: 'Gộp mọi đơn lặp vào một con số "tỷ lệ mua lại tháng"',
              why: 'Đơn lặp trong tháng đến từ nhiều cohort có tuổi khác nhau, nên con số đổi theo cơ cấu khách cũ/mới chứ không theo hành vi mua lại.',
              instead: 'Định nghĩa theo cohort tháng đầu mua và theo mốc ngày (30/60/90), có cửa sổ cố định cho mọi cohort.',
            },
            {
              title: 'Coi khác biệt giữa nhóm ưu đãi là quan hệ nhân quả',
              why: 'Khách săn voucher vốn ít trung thành (tự chọn). R30 thấp ở nhóm đó không chứng minh voucher làm họ ít quay lại.',
              instead: 'Dùng phân tích quan sát để khoanh vùng, rồi thử nghiệm có nhóm đối chứng và đo lợi nhuận, không chỉ tỷ lệ.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Một cohort chỉ đọc được ở mốc N ngày khi khách trẻ nhất đã đủ N ngày; ô chưa chín là "chưa biết", không phải 0%.',
    'So cùng tuổi với cùng tuổi, rồi mới cắt theo ưu đãi và kênh đơn đầu để tách phần cơ cấu khỏi phần tỷ lệ.',
    'Khác biệt giữa nhóm ưu đãi chỉ khoanh vùng; muốn biết voucher có gây ra giảm giữ chân phải thử nghiệm và đo lợi nhuận trên khách.',
  ],
  references: [
    {
      title: '[GA4] Cohort exploration',
      publisher: 'Google Analytics Help',
      url: 'https://support.google.com/analytics/answer/9670133',
      note: 'Cách định nghĩa tiêu chí vào cohort (ví dụ lần mua đầu) và tiêu chí quay lại để dựng bảng cohort.',
    },
    {
      title: 'Censoring (statistics)',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Censoring_(statistics)',
      note: 'Giải thích dữ liệu bị cắt (right-censoring): vì sao quan sát chưa đủ thời gian khác với "sự kiện không xảy ra".',
    },
    {
      title: 'Measure ecommerce',
      publisher: 'Google for Developers (GA4)',
      url: 'https://developers.google.com/analytics/devguides/collection/ga4/ecommerce',
      note: 'Sự kiện purchase và tham số giao dịch cần có để xác định đơn đầu tiên thành công của mỗi khách.',
    },
  ],
}
