import type { CaseStudy } from '../types'

/*
 * Số liệu mock của "nền kinh tế X" (tỷ USD), Tết rơi vào tháng 2 năm nay nhưng cuối tháng 1 năm ngoái:
 *   Năm nay: T1 xuất 30 · nhập 33 → −3,0 · T2 xuất 24 · nhập 21 → +3,0 · T1+T2: xuất 54 · nhập 54 → 0,0
 *   Năm ngoái: T1 xuất 23 · nhập 22 → +1,0 · T2 xuất 32 · nhập 33 → −1,0 · T1+T2: xuất 55 · nhập 55 → 0,0
 *   Chênh lệch năm nay − năm ngoái: T1 −4,0 · T2 +4,0 · T1+T2 0,0 (triệt tiêu hoàn toàn)
 *   Nhóm nhập khẩu nhiên liệu (T1 năm nay so với T1 năm ngoái): giá trị 6,0 → 6,6 tỷ USD (+10%) · khối lượng 10 → 10 triệu tấn (0%)
 *     đơn giá 0,60 → 0,66 tỷ USD/triệu tấn (+10%) → toàn bộ +0,6 tỷ USD là do giá
 */
export const tradeBalanceSeasonalReading: CaseStudy = {
  id: 'trade-balance-seasonal-reading',
  title: 'Thâm hụt thương mại tháng 1: bất thường hay do Tết và giá?',
  domain: 'macro',
  level: 'fresher',
  minutes: 8,
  skills: ['macro', 'seasonality', 'metric-decomposition'],
  question: 'Tháng 1 nền kinh tế X thâm hụt thương mại 3,0 tỷ USD, sâu hơn hẳn cùng kỳ. Đây là tín hiệu xấu hay chỉ là hiệu ứng lịch Tết và giá hàng nhập?',
  summary: 'Đọc cán cân thương mại đúng cách: cộng gộp các tháng bị lệch lịch Tết, và tách thay đổi giá trị thành thay đổi giá và thay đổi khối lượng.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst vĩ mô. Số liệu tháng 1 của **nền kinh tế X** (giả định) vừa công bố: xuất khẩu 30, nhập khẩu 33, **thâm hụt 3,0 tỷ USD**; cùng kỳ năm ngoái còn **thặng dư** 1,0 tỷ USD. Một bản tin viết *"thâm hụt thương mại nới rộng, xuất khẩu yếu"*. Sếp hỏi bạn có nên báo động.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Nền kinh tế X và các con số là **giả định**. Thời điểm Tết Nguyên đán (âm lịch) dịch chuyển giữa tháng 1 và tháng 2 giữa các năm là thật, và làm hoạt động xuất nhập khẩu theo tháng lệch nhau.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Cán cân thương mại tháng 1', value: '−3,0 tỷ USD', delta: 'cùng kỳ: +1,0', tone: 'negative' },
            { label: 'Xuất khẩu tháng 1', value: '30 tỷ USD', delta: '+30,4% so với 23 cùng kỳ', tone: 'positive' },
            { label: 'Nhập khẩu tháng 1', value: '33 tỷ USD', delta: '+50% so với 22', tone: 'warning' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: cán cân là hiệu hai dòng, chịu lịch và giá',
      blocks: [
        {
          kind: 'text',
          md: 'Cán cân thương mại = xuất khẩu − nhập khẩu. Hai dòng này dao động theo **lịch** (số ngày làm việc, kỳ nghỉ Tết), **mùa vụ** (hàng nông sản, hàng tiêu dùng cuối năm), và **giá** (giá dầu, giá hàng hóa). Một tháng đơn lẻ trộn cả ba. Hai cách đọc giảm nhiễu: **cộng gộp** các tháng bị lệch lịch và **tách** giá trị thành giá × khối lượng.',
        },
        {
          kind: 'formula',
          expression: 'Giá trị = Đơn giá × Khối lượng → Δ giá trị ≈ (Δ giá × khối lượng cũ) + (Δ khối lượng × giá mới)',
          note: 'Cách tách này là một quy ước (có nhiều cách chia phần tương tác). Điều quan trọng là xem thay đổi giá trị đến từ giá hay từ lượng hàng.',
        },
        {
          kind: 'quiz',
          id: 'trade-balance-seasonal-reading-q1',
          question: 'Vì sao so cán cân tháng 1 năm nay với tháng 1 năm ngoái có thể gây hiểu sai khi Tết rơi vào hai thời điểm khác nhau?',
          options: [
            {
              id: 'a',
              text: 'Vì tháng chứa kỳ nghỉ Tết có ít ngày sản xuất và giao hàng, nên xuất nhập khẩu của tháng đó thấp bất thường; tháng không chứa Tết cao hơn.',
              correct: true,
              explain: 'Đúng. Hai tháng không so sánh được trực tiếp. Cộng gộp T1 + T2 của mỗi năm làm giảm hiệu ứng dịch chuyển Tết.',
            },
            {
              id: 'b',
              text: 'Vì số liệu năm ngoái đã được điều chỉnh lại.',
              explain: 'Không có thông tin nào về điều chỉnh số liệu; vấn đề nằm ở lịch.',
            },
            {
              id: 'c',
              text: 'Vì thương mại không bị ảnh hưởng bởi lịch nghỉ.',
              explain: 'Ngày nghỉ làm ít đơn hàng, ít chuyến tàu, ít giao nhận, nên ảnh hưởng rõ rệt.',
            },
          ],
        },
      ],
    },
    {
      id: 'calendar',
      kind: 'analysis',
      title: 'Bước 1 — Cộng gộp hai tháng để trung hòa lịch Tết',
      blocks: [
        {
          kind: 'table',
          title: 'Cán cân thương mại (tỷ USD)',
          columns: [
            { key: 'period', label: 'Kỳ' },
            { key: 'x', label: 'Xuất khẩu', align: 'right' },
            { key: 'm', label: 'Nhập khẩu', align: 'right' },
            { key: 'bal', label: 'Cán cân', align: 'right' },
          ],
          rows: [
            { period: 'T1 năm nay', x: 30, m: 33, bal: '−3,0' },
            { period: 'T2 năm nay', x: 24, m: 21, bal: '+3,0' },
            { period: 'T1+T2 năm nay', x: 54, m: 54, bal: '0,0' },
            { period: 'T1 năm ngoái', x: 23, m: 22, bal: '+1,0' },
            { period: 'T2 năm ngoái', x: 32, m: 33, bal: '−1,0' },
            { period: 'T1+T2 năm ngoái', x: 55, m: 55, bal: '0,0' },
          ],
          highlight: [
            { row: 0, tone: 'negative' },
            { row: 2, tone: 'warning' },
            { row: 5, tone: 'neutral' },
          ],
          caption: 'Nhìn riêng T1, cán cân xấu đi 4,0 tỷ USD (−3,0 so với +1,0); T2 lại tốt hơn 4,0 (+3,0 so với −1,0). Cộng hai tháng: 54 − 54 = 0,0 và 55 − 55 = 0,0, hai năm giống nhau.',
        },
        {
          kind: 'chart',
          title: 'Cán cân theo tháng: một tháng dao động, hai tháng cộng gộp gần nhau',
          type: 'bar',
          xKey: 'p',
          unit: ' tỷ USD',
          series: [
            { key: 'now', label: 'Năm nay' },
            { key: 'last', label: 'Năm ngoái' },
          ],
          data: [
            { p: 'T1', now: -3, last: 1 },
            { p: 'T2', now: 3, last: -1 },
            { p: 'T1+T2', now: 0, last: 0 },
          ],
          caption: 'Hai tháng lẻ lệch nhau theo hai hướng ngược nhau vì Tết; tổng hai tháng trùng nhau.',
        },
        {
          kind: 'quiz',
          id: 'trade-balance-seasonal-reading-q2',
          question: 'Cộng gộp T1+T2, cán cân năm nay là 0,0 và năm ngoái cũng 0,0. Kết luận hợp lý nhất?',
          options: [
            {
              id: 'a',
              text: 'Hai năm giống nhau khi gộp hai tháng; thâm hụt −3,0 của riêng tháng 1 là do Tết dịch từ tháng 1 sang tháng 2, không phải xu hướng xấu đi.',
              correct: true,
              explain: 'Đúng. Chênh lệch −4,0 ở T1 và +4,0 ở T2 triệt tiêu nhau: đó là dấu hiệu của dịch chuyển lịch.',
            },
            {
              id: 'b',
              text: 'Thâm hụt thương mại đang mở rộng nhanh.',
              explain: 'Dữ liệu hai tháng cộng gộp không ủng hộ kết luận này.',
            },
            {
              id: 'c',
              text: 'Không thể kết luận gì vì dữ liệu chỉ có hai tháng.',
              explain: 'Dữ liệu ít chưa đủ cho xu hướng dài hạn, nhưng đủ để chỉ ra việc đọc một tháng là chưa đủ cơ sở.',
            },
          ],
        },
      ],
    },
    {
      id: 'price-volume',
      kind: 'analysis',
      title: 'Bước 2 — Giá trị nhập khẩu tăng: do giá hay do lượng?',
      blocks: [
        {
          kind: 'table',
          title: 'Nhập khẩu nhiên liệu, tháng 1',
          columns: [
            { key: 'item', label: 'Chỉ tiêu' },
            { key: 'last', label: 'Năm ngoái', align: 'right' },
            { key: 'now', label: 'Năm nay', align: 'right' },
            { key: 'chg', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { item: 'Khối lượng (triệu tấn)', last: '10', now: '10', chg: '0%' },
            { item: 'Đơn giá (tỷ USD/triệu tấn)', last: '0,60', now: '0,66', chg: '+10%' },
            { item: 'Giá trị nhập (tỷ USD)', last: '6,0', now: '6,6', chg: '+10% (+0,6)' },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: '10 × 0,60 = 6,0; 10 × 0,66 = 6,6. Toàn bộ +0,6 tỷ USD đến từ giá, lượng nhập không đổi.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Cán cân thương mại tính theo giá trị nên dính cả biến động giá hàng hóa thế giới. Nhập khẩu nhiên liệu tăng giá làm thâm hụt sâu hơn dù nền kinh tế không mua nhiều hơn. Với kết luận về "sức cầu" nội địa, khối lượng thường đáng tin hơn giá trị.',
        },
        {
          kind: 'quiz',
          id: 'trade-balance-seasonal-reading-q3',
          question: 'Nhập khẩu nhiên liệu tăng 10% về giá trị, khối lượng không đổi. Điều đó cho biết gì?',
          options: [
            {
              id: 'a',
              text: 'Mức tăng là do giá, không phải do mua nhiều hơn; đừng đọc đó là sức cầu trong nước tăng.',
              correct: true,
              explain: 'Đúng. Khối lượng không đổi nên không có thêm tiêu thụ; giá cao hơn làm tăng giá trị nhập.',
            },
            {
              id: 'b',
              text: 'Nền kinh tế đang tiêu thụ nhiều nhiên liệu hơn 10%.',
              explain: 'Khối lượng không đổi (10 triệu tấn), nên không tiêu thụ nhiều hơn.',
            },
            {
              id: 'c',
              text: 'Số liệu hải quan sai.',
              explain: 'Không có lý do nghi ngờ; giá trị = giá × lượng nhất quán.',
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
          md: '**Kết luận cho sếp:** Không nên báo động. Thâm hụt −3,0 tỷ USD của tháng 1 chủ yếu do lịch Tết dịch chuyển (hai tháng cộng gộp bằng đúng năm ngoái: 0,0 so với 0,0) và một phần nhập nhiên liệu tăng do giá. Cần theo dõi cộng gộp hai tháng và khối lượng nhập các nhóm chính.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Báo cáo thương mại luôn kèm cộng gộp hai tháng đầu năm và số ngày làm việc',
              owner: 'Analyst vĩ mô',
              metric: 'Cán cân T1+T2 so với cùng kỳ',
              threshold: 'Cảnh báo khi lệch > 5% tổng giao dịch hai tháng',
            },
            {
              action: 'Tách giá trị nhập theo nhóm hàng chính thành giá và khối lượng',
              owner: 'Nhà nghiên cứu thương mại',
              metric: 'Phần thay đổi giá trị do giá',
              threshold: 'Nêu rõ khi > 50% thay đổi đến từ giá',
            },
            {
              action: 'Đặt ghi chú lịch (Tết, số ngày làm việc) trên mọi biểu đồ thương mại theo tháng',
              owner: 'Biên tập viên nghiên cứu',
              metric: 'Số biểu đồ tháng có ghi chú lịch',
              threshold: '100%',
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
              title: 'Kết luận từ một tháng',
              why: 'Một tháng chịu cả lịch, mùa vụ và giá; biến động có thể không mang tín hiệu kinh tế.',
              instead: 'Cộng gộp các tháng bị lệch lịch và so chuỗi dài.',
            },
            {
              title: 'Đọc cán cân giá trị như sức cầu',
              why: 'Giá trị chứa cả giá; giá hàng nhập tăng làm thâm hụt sâu hơn mà không tăng sức mua.',
              instead: 'Tách giá và khối lượng cho nhóm hàng chính.',
            },
            {
              title: 'Chỉ nhìn cán cân mà bỏ qua hai dòng thành phần',
              why: 'Cán cân đổi do xuất giảm hay nhập tăng đều dẫn tới khác biệt về ý nghĩa.',
              instead: 'Luôn xem xuất khẩu và nhập khẩu riêng, cùng tốc độ tăng của từng dòng.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Một tháng thương mại chịu ảnh hưởng của lịch Tết và mùa vụ; cộng gộp các tháng lệch lịch trước khi so với cùng kỳ.',
    'Giá trị = giá × khối lượng: tách hai thành phần để biết thay đổi do giá hay do nhu cầu.',
    'Cán cân thương mại là hiệu hai dòng; luôn đọc cả xuất khẩu và nhập khẩu, không chỉ phần chênh.',
  ],
  references: [
    {
      title: 'Balance of trade',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Balance_of_trade',
      note: 'Định nghĩa cán cân thương mại, thặng dư/thâm hụt và các yếu tố tác động.',
    },
    {
      title: 'Seasonal adjustment',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Seasonal_adjustment',
      note: 'Phương pháp điều chỉnh mùa vụ và hiệu ứng lịch để so sánh các tháng.',
    },
  ],
}
