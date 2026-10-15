import type { CaseStudy } from '../types'

/*
 * Số liệu mock: chỉ số bán lẻ của "nền kinh tế X" (giả định), 6 tháng đầu năm; mức gốc năm n−2 = 100 mỗi tháng:
 *   Năm n−1: T1 100 · T2 90 · T3 85 · T4 88 · T5 95 · T6 100 (đợt giãn cách làm nền thấp ở T2–T5)
 *   Năm n:   T1 105 · T2 104 · T3 106 · T4 107 · T5 108 · T6 108
 *   Cùng kỳ (YoY): 5,0% · 15,6% · 24,7% · 21,6% · 13,7% · 8,0%
 *   So tháng trước (MoM) năm n: — · −1,0% · +1,9% · +0,9% · +0,9% · 0,0%
 *   So 2 năm trước (n so với n−2): +5% · +4% · +6% · +7% · +8% · +8%; tăng bình quân năm tương đương: T3 ≈ 2,96%
 */
export const baseEffectYoyGrowthReading: CaseStudy = {
  id: 'base-effect-yoy-growth-reading',
  title: 'Tăng trưởng cùng kỳ 24,7%: kinh tế bùng nổ hay hiệu ứng nền?',
  domain: 'macro',
  level: 'fresher',
  minutes: 8,
  skills: ['macro', 'metric-definition', 'seasonality'],
  question: 'Bán lẻ tháng 3 tăng 24,7% so với cùng kỳ, nhưng tháng 6 chỉ tăng 8,0%. Nền kinh tế đã chậm lại hay tháng 3 chỉ "đẹp" vì cùng kỳ năm trước quá thấp?',
  summary: 'Đọc đúng tăng trưởng so với cùng kỳ: hiểu hiệu ứng nền, đối chiếu với so tháng trước và với mức của hai năm trước.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst vĩ mô tại một công ty nghiên cứu. Cơ quan thống kê của **nền kinh tế X** (giả định) công bố chỉ số bán lẻ: *"tháng 3 tăng 24,7% so với cùng kỳ"*. Tin tức viết "phục hồi thần tốc". Đến tháng 6 con số chỉ còn 8,0% và có bình luận cho rằng "đà tăng suy yếu". Sếp hỏi: *"Rốt cuộc nền kinh tế đang nóng lên hay nguội đi?"*',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Nền kinh tế X và chỉ số bán lẻ là **giả định**, không phải số liệu của quốc gia nào. Khái niệm tăng trưởng cùng kỳ (YoY) và hiệu ứng nền là có thật.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Tăng cùng kỳ tháng 3', value: '24,7%', delta: '106 so với 85', tone: 'positive' },
            { label: 'Tăng cùng kỳ tháng 6', value: '8,0%', delta: '108 so với 100', tone: 'neutral' },
            { label: 'Mức chỉ số tháng 6', value: '108', delta: 'bằng tháng 5 (108)', tone: 'neutral' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: mẫu số của tăng trưởng là năm ngoái',
      blocks: [
        {
          kind: 'text',
          md: 'Tăng trưởng cùng kỳ (**YoY**) = mức hiện tại ÷ mức cùng kỳ năm trước − 1. Nếu cùng kỳ năm trước thấp bất thường (đợt giãn cách, thiên tai, dịch bệnh), mẫu số nhỏ làm YoY cao bất kể mức hiện tại có thật sự mạnh hay không. Đó là **hiệu ứng nền** (base effect). Ba góc nhìn bổ sung giúp tách hiệu ứng này ra:',
        },
        {
          kind: 'list',
          style: 'bullets',
          items: [
            '**So với tháng trước (MoM):** cho tốc độ gần nhất, không phụ thuộc nền năm ngoái, nhưng chịu mùa vụ nếu không điều chỉnh.',
            '**So với hai năm trước:** so với mức "bình thường" trước biến động, để biết đã vượt hay chưa tới mức cũ.',
            '**Mức tuyệt đối:** đang ở đâu so với đỉnh gần nhất.',
          ],
        },
        {
          kind: 'quiz',
          id: 'base-effect-yoy-growth-reading-q1',
          question: 'Tháng 3 năm ngoái chỉ số là 85 (thấp bất thường), tháng 3 năm nay là 106. Vì sao YoY 24,7% khó đọc là "kinh tế nóng"?',
          options: [
            {
              id: 'a',
              text: 'Vì mẫu số (85) thấp bất thường nên YoY cao; phải xem thêm so với tháng trước và so với mức hai năm trước.',
              correct: true,
              explain: 'Đúng. Mức 106 chỉ cao hơn mức "bình thường" hai năm trước (100) khoảng 6%; phần còn lại của 24,7% là do nền thấp.',
            },
            {
              id: 'b',
              text: 'Vì cơ quan thống kê thường tính sai.',
              explain: 'Không có lý do nghi ngờ phép tính; vấn đề nằm ở cách đọc.',
            },
            {
              id: 'c',
              text: 'Vì YoY luôn lớn hơn MoM.',
              explain: 'Không có quy luật đó; hai chỉ số đo hai khoảng thời gian khác nhau.',
            },
          ],
        },
      ],
    },
    {
      id: 'yoy-vs-mom',
      kind: 'analysis',
      title: 'Bước 1 — Đặt YoY cạnh MoM và mức gốc',
      blocks: [
        {
          kind: 'table',
          title: 'Chỉ số bán lẻ (mức gốc năm n−2 = 100)',
          columns: [
            { key: 'm', label: 'Tháng' },
            { key: 'prev', label: 'Năm n−1', align: 'right' },
            { key: 'now', label: 'Năm n', align: 'right' },
            { key: 'yoy', label: 'YoY', align: 'right' },
            { key: 'mom', label: 'MoM (năm n)', align: 'right' },
            { key: 'two', label: 'So n−2', align: 'right' },
          ],
          rows: [
            { m: 'T1', prev: 100, now: 105, yoy: '+5,0%', mom: '—', two: '+5%' },
            { m: 'T2', prev: 90, now: 104, yoy: '+15,6%', mom: '−1,0%', two: '+4%' },
            { m: 'T3', prev: 85, now: 106, yoy: '+24,7%', mom: '+1,9%', two: '+6%' },
            { m: 'T4', prev: 88, now: 107, yoy: '+21,6%', mom: '+0,9%', two: '+7%' },
            { m: 'T5', prev: 95, now: 108, yoy: '+13,7%', mom: '+0,9%', two: '+8%' },
            { m: 'T6', prev: 100, now: 108, yoy: '+8,0%', mom: '0,0%', two: '+8%' },
          ],
          highlight: [
            { row: 2, tone: 'warning' },
            { row: 5, tone: 'neutral' },
          ],
          caption: 'YoY đổi từ 24,7% xuống 8,0% chủ yếu vì nền năm ngoái đã hồi phục (85 → 100); chỉ số năm nay đi ngang quanh 104–108.',
        },
        {
          kind: 'chart',
          title: 'YoY dao động mạnh, còn mức chỉ số năm nay khá ổn định',
          type: 'line',
          xKey: 'm',
          series: [
            { key: 'yoy', label: 'YoY (%)' },
            { key: 'level', label: 'Chỉ số năm n' },
          ],
          data: [
            { m: 'T1', yoy: 5, level: 105 },
            { m: 'T2', yoy: 15.6, level: 104 },
            { m: 'T3', yoy: 24.7, level: 106 },
            { m: 'T4', yoy: 21.6, level: 107 },
            { m: 'T5', yoy: 13.7, level: 108 },
            { m: 'T6', yoy: 8, level: 108 },
          ],
          caption: 'Hai thang đo khác nhau (phần trăm và điểm chỉ số) nên chỉ xem hình dạng: YoY lên đỉnh rồi hạ, chỉ số năm nay hầu như đi ngang.',
        },
        {
          kind: 'quiz',
          id: 'base-effect-yoy-growth-reading-q2',
          question: 'Tháng 6 YoY còn 8,0% nhưng chỉ số vẫn là 108, bằng tháng 5. Cách đọc nào hợp lý?',
          options: [
            {
              id: 'a',
              text: 'Không có sự suy yếu rõ ràng: YoY giảm vì nền năm ngoái cao dần lên, trong khi mức năm nay không giảm.',
              correct: true,
              explain: 'Đúng. MoM = 0,0% (không giảm), mức 108 vẫn cao hơn mức hai năm trước 8%. YoY thấp lúc này là "nền cao", đối xứng với "nền thấp" ở tháng 3.',
            },
            {
              id: 'b',
              text: 'Kinh tế suy giảm mạnh vì YoY giảm từ 24,7% xuống 8,0%.',
              explain: 'Đọc YoY độc lập dễ gây hiểu lầm; mức chỉ số và MoM không cho thấy suy giảm.',
            },
            {
              id: 'c',
              text: 'Số liệu tháng 6 chắc chắn bị sửa lại.',
              explain: 'Không có dấu hiệu nào về sửa số liệu trong bài; cần đọc đúng số đã có.',
            },
          ],
        },
      ],
    },
    {
      id: 'two-year',
      kind: 'analysis',
      title: 'Bước 2 — So với hai năm trước',
      blocks: [
        {
          kind: 'text',
          md: 'Mức 106 ở tháng 3 cao hơn mức hai năm trước (100) là 6%, tức bình quân khoảng **2,96%/năm** (√1,06 − 1). Mức 108 ở tháng 6 cao hơn 8%, bình quân khoảng 3,92%/năm. Cách nhìn này cho thấy đà tăng thật nhỏ và khá ổn định, khác với hai con số 24,7% và 8,0% tưởng như mâu thuẫn.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'So hai năm trước (tăng ghép hai năm, *two-year stack*) không hoàn hảo: nó giả định năm n−2 là bình thường, mà điều đó phải kiểm tra. Khi so với dữ liệu thật hãy dùng chuỗi đã điều chỉnh mùa vụ (seasonally adjusted) và nêu rõ phương pháp. Không có một thước đo duy nhất đúng; hãy đọc ba góc nhìn cùng lúc.',
        },
        {
          kind: 'quiz',
          id: 'base-effect-yoy-growth-reading-q3',
          question: 'Bản tin cần một câu cho tháng 3 trung thực nhất. Câu nào phù hợp?',
          options: [
            {
              id: 'a',
              text: '"Bán lẻ tháng 3 tăng 24,7% so với cùng kỳ, phần lớn do nền thấp năm ngoái; so với tháng trước tăng 1,9% và cao hơn mức hai năm trước 6%."',
              correct: true,
              explain: 'Đúng. Câu này nêu YoY kèm lý do, và bổ sung hai góc nhìn không phụ thuộc nền.',
            },
            {
              id: 'b',
              text: '"Bán lẻ bùng nổ với mức tăng kỷ lục 24,7%."',
              explain: 'Bỏ qua hiệu ứng nền, dễ gây hiểu sai cho người đọc.',
            },
            {
              id: 'c',
              text: '"Bán lẻ giảm vì YoY tháng 6 thấp hơn tháng 3."',
              explain: 'Kết luận ngược lại cũng sai: đà tăng không giảm theo MoM và mức chỉ số.',
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
          md: '**Kết luận cho sếp:** Bán lẻ của nền kinh tế X không "bùng nổ" ở tháng 3 cũng không "suy yếu" ở tháng 6. Mức chỉ số đi quanh 104–108, cao hơn mức hai năm trước 4–8%; YoY dao động vì nền năm ngoái dao động (90 → 85 → 100).',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Trình bày mọi báo cáo tăng trưởng theo bộ ba YoY, MoM (đã điều chỉnh mùa vụ nếu có) và so hai năm trước',
              owner: 'Analyst vĩ mô',
              metric: 'Bảng ba góc nhìn tăng trưởng',
              threshold: 'Có trong mọi báo cáo hàng tháng',
            },
            {
              action: 'Đánh dấu các tháng nền bất thường (giãn cách, thiên tai) trên biểu đồ',
              owner: 'Trưởng nhóm nghiên cứu',
              metric: 'Số tháng nền bất thường có chú thích',
              threshold: '100% tháng bất thường được ghi chú',
            },
            {
              action: 'Soát bản tin trước khi gửi: không dùng từ "kỷ lục", "bùng nổ" cho YoY khi nền bất thường',
              owner: 'Biên tập viên nghiên cứu',
              metric: 'Số bản tin có hiệu ứng nền được nêu rõ',
              threshold: '100% bản tin có YoY > 15%',
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
              title: 'Đọc YoY như tốc độ hiện tại',
              why: 'YoY phụ thuộc vào nền cùng kỳ; nền thấp làm YoY cao, nền cao làm YoY thấp.',
              instead: 'Kèm MoM (điều chỉnh mùa vụ) và mức so với hai năm trước.',
            },
            {
              title: 'Cộng dồn hoặc trung bình hóa các tỷ lệ YoY',
              why: 'YoY mỗi tháng có mẫu số khác nhau nên không cộng được.',
              instead: 'Tính lại tăng trưởng từ mức tuyệt đối của cả kỳ.',
            },
            {
              title: 'Dùng MoM thô để so các tháng có mùa vụ khác nhau',
              why: 'MoM chưa điều chỉnh mùa vụ bị nhiễu bởi Tết, mùa mua sắm.',
              instead: 'Dùng chuỗi điều chỉnh mùa vụ hoặc so cùng tháng nhiều năm.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'YoY có mẫu số là cùng kỳ năm trước; nền thấp làm YoY cao, nền cao làm YoY thấp (hiệu ứng nền).',
    'Đọc YoY cùng MoM và mức so với hai năm trước để tách tốc độ thật khỏi hiệu ứng nền.',
    'Câu kết luận trung thực nêu YoY, lý do nền, và ít nhất một góc nhìn không phụ thuộc nền.',
  ],
  references: [
    {
      title: 'Base effect',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Base_effect',
      note: 'Định nghĩa hiệu ứng nền và vì sao tăng trưởng phần trăm bị méo khi mức cơ sở thay đổi lớn.',
    },
    {
      title: 'Seasonal adjustment',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Seasonal_adjustment',
      note: 'Cách điều chỉnh mùa vụ để so các tháng liền kề công bằng hơn.',
    },
    {
      title: 'World Bank Open Data',
      publisher: 'World Bank',
      url: 'https://data.worldbank.org/',
      note: 'Kho số liệu kinh tế thật của nhiều quốc gia để thực hành đọc tăng trưởng và đối chiếu.',
    },
  ],
}
