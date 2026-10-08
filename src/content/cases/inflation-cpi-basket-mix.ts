import type { CaseStudy } from '../types'

/*
 * Nền kinh tế giả định, số liệu MÔ PHỎNG (không phải số thực của bất kỳ nước nào), đã tính lại bằng node.
 * Lạm phát theo nhóm hàng so cùng kỳ (%): Lương thực thực phẩm 6,0 · Năng lượng, nhiên liệu 10,0 · Nhà ở và dịch vụ 3,0
 *   · Y tế và giáo dục 2,0 · Hàng hóa và dịch vụ khác 1,0
 * Quyền số (%, tổng 100):   LTTP  NL   Nhà  YT-GD  Khác
 *   CPI chung (rổ TB)       33    10   22   15     20
 *   Hộ thu nhập thấp        52    8    20   8      12
 *   Hộ thu nhập cao         22    12   22   20     24
 * Đóng góp (điểm %) = quyền số × lạm phát nhóm:
 *   Chung: 1,98 + 1,00 + 0,66 + 0,30 + 0,20 = 4,14   (tỷ trọng: 47,8 / 24,2 / 15,9 / 7,2 / 4,8 %)
 *   Thấp:  3,12 + 0,80 + 0,60 + 0,16 + 0,12 = 4,80
 *   Cao:   1,32 + 1,20 + 0,66 + 0,40 + 0,24 = 3,82
 * Chênh lệch quyền số so với CPI chung: thấp +0,66 (4,80 − 4,14) · cao −0,32 (3,82 − 4,14); thấp − cao = 0,98
 * Lạm phát lõi (bỏ lương thực thực phẩm + năng lượng): chung 1,16/0,57 = 2,04% · thấp 0,88/0,40 = 2,20% · cao 1,30/0,66 = 1,97%
 *   Lương thực thực phẩm + năng lượng = 43% quyền số nhưng 2,98/4,14 = 72,0% mức tăng CPI chung.
 */
export const inflationCpiBasketMix: CaseStudy = {
  id: 'inflation-cpi-basket-mix',
  title: 'CPI tăng 4,1% nhưng hộ nghèo thấy đắt hơn hộ giàu',
  domain: 'macro',
  level: 'mid',
  minutes: 11,
  skills: ['mix-effect', 'macro', 'segmentation'],
  question:
    'CPI chung tăng 4,1% so cùng kỳ, lạm phát lõi chỉ 2,0%. Nhóm hàng nào kéo CPI, vì sao hộ thu nhập thấp và hộ thu nhập cao cảm nhận khác nhau, và nên báo cáo thế nào để không hiểu sai?',
  summary:
    'Tách đóng góp của từng nhóm hàng (quyền số × thay đổi giá), dựng CPI theo rổ hàng của từng nhóm hộ, so lạm phát lõi với lạm phát chung và tránh kết luận từ một con số trung bình.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst ở một đơn vị nghiên cứu kinh tế trong một **nền kinh tế giả định**. Cơ quan thống kê vừa công bố CPI. Báo chí đưa tin *"lạm phát 4,1%, vẫn trong tầm kiểm soát"*, nhưng một hội nghị về an sinh nhận phản hồi ngược: *"Người ăn lương thấp thấy giá cả leo thang nhanh hơn nhiều con số đó."* Trưởng nhóm nhờ bạn kiểm tra xem hai điều có mâu thuẫn không. Số liệu công bố:',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'CPI chung (so cùng kỳ)', value: '4,14%', delta: 'số mô phỏng', tone: 'neutral' },
            { label: 'Lạm phát lõi (bỏ lương thực, năng lượng)', value: '2,04%', tone: 'positive' },
            { label: 'Lương thực thực phẩm', value: '+6,0%', note: 'quyền số 33%', tone: 'negative' },
            { label: 'Năng lượng, nhiên liệu', value: '+10,0%', note: 'quyền số 10%', tone: 'negative' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu của buổi phân tích',
          md: 'Trả lời được 3 câu: **nhóm hàng nào đóng góp bao nhiêu điểm %** vào CPI, **rổ hàng của hộ nghèo và hộ giàu khác nhau ở đâu** nên lạm phát họ chịu khác nhau bao nhiêu, và **lạm phát lõi cho biết điều gì mà CPI chung không cho**.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: CPI là trung bình có trọng số của rổ hàng',
      blocks: [
        {
          kind: 'formula',
          expression: 'CPI chung (% thay đổi) = Σ [ quyền số nhóm i × % thay đổi giá nhóm i ]',
          note: 'Mỗi số hạng là **đóng góp** của nhóm i (điểm %). Quyền số lấy từ khảo sát chi tiêu của **hộ trung bình**; một hộ cụ thể có quyền số khác nên lạm phát cảm nhận khác. Nhóm có giá tăng mạnh nhưng quyền số nhỏ có thể đóng góp ít hơn nhóm tăng vừa mà quyền số lớn.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Tách đóng góp**: nhóm nào tạo ra bao nhiêu điểm % của CPI chung.',
            '**Đổi quyền số, giữ nguyên giá**: tính lại với rổ hàng của hộ thu nhập thấp và cao để thấy phần chênh lệch đến từ cơ cấu chi tiêu (hiệu ứng mix).',
            '**So lõi với chung**: phần nào của lạm phát đến từ cú sốc giá thực phẩm và năng lượng, phần nào lan rộng và dai dẳng.',
            '**Kết luận có phạm vi**: nói rõ con số áp dụng cho nhóm nào, chưa kể sự khác biệt giá trong cùng một nhóm hàng.',
          ],
        },
        {
          kind: 'quiz',
          id: 'inflation-cpi-basket-mix-q1',
          question: 'Giá năng lượng tăng 10% (cao nhất), lương thực tăng 6%. Nhóm nào đóng góp nhiều điểm % nhất vào CPI chung 4,14%?',
          options: [
            {
              id: 'a',
              text: 'Năng lượng, vì mức tăng giá lớn nhất.',
              explain:
                'Năng lượng chỉ đóng góp 10% × 10,0% = 1,00 điểm %. Mức tăng giá lớn nhưng quyền số nhỏ nên đóng góp thấp hơn lương thực.',
            },
            {
              id: 'b',
              text: 'Lương thực thực phẩm: 33% × 6,0% = 1,98 điểm %, khoảng 48% mức tăng CPI.',
              correct: true,
              explain:
                'Đúng. Đóng góp = quyền số × mức tăng giá. Lương thực có quyền số lớn nhất nên dù tăng giá thấp hơn năng lượng, nó vẫn kéo CPI nhiều nhất. Muốn biết nhóm nào "đẩy" CPI phải nhân với quyền số, không chỉ xếp hạng mức tăng giá.',
            },
            {
              id: 'c',
              text: 'Nhà ở và dịch vụ, vì quyền số lớn thứ hai (22%).',
              explain:
                'Quyền số lớn chưa đủ: giá nhóm này chỉ tăng 3,0% nên đóng góp 0,66 điểm %, khoảng 16% mức tăng CPI.',
            },
          ],
        },
      ],
    },
    {
      id: 'contribution',
      kind: 'analysis',
      title: 'Bước 1 — Tách đóng góp: thực phẩm và năng lượng chiếm 72% mức tăng',
      blocks: [
        {
          kind: 'table',
          title: 'Đóng góp của từng nhóm hàng vào CPI chung',
          columns: [
            { key: 'group', label: 'Nhóm hàng' },
            { key: 'w', label: 'Quyền số', align: 'right' },
            { key: 'p', label: 'Giá thay đổi', align: 'right' },
            { key: 'c', label: 'Đóng góp (điểm %)', align: 'right' },
            { key: 's', label: 'Tỷ trọng mức tăng', align: 'right' },
          ],
          rows: [
            { group: 'Lương thực thực phẩm', w: '33%', p: '+6,0%', c: '1,98', s: '47,8%' },
            { group: 'Năng lượng, nhiên liệu', w: '10%', p: '+10,0%', c: '1,00', s: '24,2%' },
            { group: 'Nhà ở và dịch vụ', w: '22%', p: '+3,0%', c: '0,66', s: '15,9%' },
            { group: 'Y tế và giáo dục', w: '15%', p: '+2,0%', c: '0,30', s: '7,2%' },
            { group: 'Hàng hóa và dịch vụ khác', w: '20%', p: '+1,0%', c: '0,20', s: '4,8%' },
            { group: 'CPI chung', w: '100%', p: '', c: '4,14', s: '100%' },
          ],
          highlight: [
            { row: 0, tone: 'negative' },
            { row: 1, tone: 'negative' },
          ],
          caption: 'Lương thực + năng lượng chiếm 43% quyền số nhưng tạo ra 2,98 trên 4,14 điểm % (72%). Phần còn lại của rổ (57% quyền số) chỉ tăng trung bình 2,04%.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của chuyên gia: lõi hay chung, tùy câu hỏi',
          md: 'Lạm phát lõi (2,04%) cho thấy áp lực giá lan rộng đang thấp, thường dùng để đọc xu hướng. Nhưng lõi **không phải mức giá người dân phải trả**: người dành phần lớn chi tiêu cho ăn uống và đi lại không thể "bỏ" hai nhóm đó ra khỏi cuộc sống. Một số nghiên cứu của IMF còn cho thấy ở nước thu nhập thấp, giá thực phẩm vừa biến động mạnh vừa dai dẳng, nên loại thực phẩm ra khỏi lõi có thể đánh giá thấp lạm phát (xem nguồn tham khảo).',
        },
      ],
    },
    {
      id: 'household-basket',
      kind: 'analysis',
      title: 'Bước 2 — Cùng giá, khác rổ hàng: hộ thu nhập thấp chịu 4,80%, hộ cao 3,82%',
      blocks: [
        {
          kind: 'table',
          title: 'Quyền số theo nhóm hộ (% tổng chi tiêu)',
          columns: [
            { key: 'group', label: 'Nhóm hàng' },
            { key: 'avg', label: 'Rổ trung bình', align: 'right' },
            { key: 'poor', label: 'Hộ thu nhập thấp', align: 'right' },
            { key: 'rich', label: 'Hộ thu nhập cao', align: 'right' },
          ],
          rows: [
            { group: 'Lương thực thực phẩm', avg: '33', poor: '52', rich: '22' },
            { group: 'Năng lượng, nhiên liệu', avg: '10', poor: '8', rich: '12' },
            { group: 'Nhà ở và dịch vụ', avg: '22', poor: '20', rich: '22' },
            { group: 'Y tế và giáo dục', avg: '15', poor: '8', rich: '20' },
            { group: 'Hàng hóa và dịch vụ khác', avg: '20', poor: '12', rich: '24' },
            { group: 'Tổng', avg: '100', poor: '100', rich: '100' },
          ],
          highlight: [{ row: 0, tone: 'warning' }],
          caption: 'Hộ thu nhập thấp dồn 52% chi tiêu vào lương thực thực phẩm, nhóm tăng giá mạnh và có quyền số lớn nhất.',
        },
        {
          kind: 'chart',
          title: 'CPI theo rổ hàng của từng nhóm hộ: đóng góp của từng nhóm (điểm %)',
          type: 'stackedBar',
          xKey: 'hh',
          unit: '',
          series: [
            { key: 'food', label: 'Lương thực thực phẩm' },
            { key: 'energy', label: 'Năng lượng, nhiên liệu' },
            { key: 'housing', label: 'Nhà ở và dịch vụ' },
            { key: 'health', label: 'Y tế và giáo dục' },
            { key: 'other', label: 'Khác' },
          ],
          data: [
            { hh: 'Hộ thu nhập thấp (4,80%)', food: 3.12, energy: 0.8, housing: 0.6, health: 0.16, other: 0.12 },
            { hh: 'CPI chung (4,14%)', food: 1.98, energy: 1.0, housing: 0.66, health: 0.3, other: 0.2 },
            { hh: 'Hộ thu nhập cao (3,82%)', food: 1.32, energy: 1.2, housing: 0.66, health: 0.4, other: 0.24 },
          ],
          caption: 'Giá từng nhóm hàng giống hệt nhau ở cả ba cột; chỉ quyền số khác. Hộ thu nhập thấp cao hơn CPI chung 0,66 điểm %, hộ thu nhập cao thấp hơn 0,32 điểm %, chênh nhau 0,98 điểm %.',
        },
        {
          kind: 'quiz',
          id: 'inflation-cpi-basket-mix-q2',
          question: 'Giá mọi nhóm hàng là như nhau với mọi hộ, nhưng lạm phát hộ thấp (4,80%) khác hộ cao (3,82%). Giải thích đúng là gì?',
          options: [
            {
              id: 'a',
              text: 'Hộ thu nhập thấp gặp mức giá cao hơn do mua ở cửa hàng đắt hơn.',
              explain:
                'Trong ví dụ giá từng nhóm đã giữ nguyên cho mọi hộ, nên chênh lệch không đến từ nơi mua hàng. (Thực tế còn có chênh lệch giá trong nhóm, nhưng đó là một phép phân tích khác.)',
            },
            {
              id: 'b',
              text: 'Đây là hiệu ứng quyền số (mix): hộ thấp dồn 52% chi tiêu vào lương thực, nhóm tăng 6%, nên số trung bình của họ cao hơn dù giá không đổi.',
              correct: true,
              explain:
                'Đúng. Chênh lệch +0,66 so với CPI chung chủ yếu đến từ lương thực: (52% − 33%) × 6,0% = 1,14 điểm %, bù trừ một phần bởi các nhóm khác (−0,48). Đây là cùng bản chất với hiệu ứng mix kiểu Simpson: trung bình toàn bộ che đi cơ cấu khác nhau của từng nhóm.',
            },
            {
              id: 'c',
              text: 'CPI chung tính sai nên cần công bố lại.',
              explain:
                'CPI chung tính đúng cho **hộ trung bình**; vấn đề là không hộ nào là "trung bình", chứ không phải số bị sai. Cần bổ sung con số theo nhóm hộ thay vì sửa số tổng.',
            },
          ],
        },
      ],
    },
    {
      id: 'core-vs-headline',
      kind: 'analysis',
      title: 'Bước 3 — Lõi so với chung: cú sốc giá hay áp lực lan rộng?',
      blocks: [
        {
          kind: 'table',
          title: 'Lạm phát chung và lạm phát lõi theo rổ hàng',
          columns: [
            { key: 'basket', label: 'Rổ hàng' },
            { key: 'head', label: 'Lạm phát chung', align: 'right' },
            { key: 'core', label: 'Lạm phát lõi', align: 'right' },
            { key: 'gap', label: 'Chênh (điểm %)', align: 'right' },
          ],
          rows: [
            { basket: 'Trung bình', head: '4,14%', core: '2,04%', gap: '2,10' },
            { basket: 'Hộ thu nhập thấp', head: '4,80%', core: '2,20%', gap: '2,60' },
            { basket: 'Hộ thu nhập cao', head: '3,82%', core: '1,97%', gap: '1,85' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
          caption: 'Lõi của ba nhóm hộ gần như bằng nhau (1,97% đến 2,20%); khoảng cách lớn nằm ở phần thực phẩm và năng lượng. Vì vậy chính sách an sinh nhắm vào giá lương thực có tác động tập trung hơn so với tác động đến hộ khá.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Lõi thấp không có nghĩa là "yên tâm"',
          md: 'Nếu giá thực phẩm và năng lượng tăng kéo dài, chúng có thể lan sang giá khác (chi phí vận chuyển, tiền lương, kỳ vọng lạm phát). Cần theo dõi **khi nào lõi bắt đầu tăng** và các chỉ báo dai dẳng (tiền lương, giá dịch vụ), chứ không chỉ đọc một kỳ.',
        },
        {
          kind: 'quiz',
          id: 'inflation-cpi-basket-mix-q3',
          question: 'Bản tin chính thức nên viết thế nào để vừa chính xác vừa không gây hiểu lầm?',
          options: [
            {
              id: 'a',
              text: '"Lạm phát 4,1%, kiểm soát tốt" kèm lạm phát lõi 2,0% là đủ.',
              explain:
                'Hai con số đều đại diện cho hộ trung bình. Bản tin bỏ qua việc nhóm chi nhiều cho ăn uống chịu mức cao hơn khoảng 0,7 điểm %.',
            },
            {
              id: 'b',
              text: 'Báo cáo CPI chung, lạm phát lõi, đóng góp theo nhóm hàng và ước tính theo rổ hàng của nhóm thu nhập thấp/cao, kèm ghi chú đây là mô phỏng theo quyền số.',
              correct: true,
              explain:
                'Đúng. Bộ số này cho thấy cả mức chung lẫn phân bố: ai chịu nhiều hơn, vì sao, và phần nào là cú sốc tạm. Ghi chú phạm vi giúp người đọc không hiểu một con số trung bình thành trải nghiệm của mọi người.',
            },
            {
              id: 'c',
              text: 'Chỉ báo cáo lạm phát của hộ thu nhập thấp vì họ dễ tổn thương nhất.',
              explain:
                'Con số này quan trọng, nhưng bỏ CPI chung sẽ mất khả năng so sánh theo thời gian và với các nước. Nên báo cáo song song, không thay thế.',
            },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp tối ưu: báo cáo lạm phát theo rổ hàng và đóng góp',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận:** Hai nhận định không mâu thuẫn. CPI chung 4,14% là đúng cho hộ trung bình; hộ thu nhập thấp chịu khoảng 4,80% vì 52% chi tiêu của họ dồn vào lương thực thực phẩm, còn hộ thu nhập cao chịu khoảng 3,82%. Gần ba phần tư mức tăng đến từ thực phẩm và năng lượng, trong khi lạm phát lõi chỉ 2,04%. Đây là bức tranh *cú sốc giá hàng thiết yếu* hơn là *áp lực giá lan rộng*, và cần theo dõi nguy cơ lan sang lõi.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Công bố thêm bảng đóng góp theo nhóm hàng và CPI theo rổ hàng của nhóm thu nhập thấp/trung bình/cao cùng kỳ với CPI chung',
              owner: 'Đơn vị thống kê / phân tích giá',
              metric: 'Chênh lệch lạm phát giữa nhóm hộ thấp và cao (điểm %)',
              threshold: 'Cảnh báo khi chênh > 1,0 điểm % hoặc nhóm thấp > CPI chung 0,5 điểm % trong 3 tháng liên tiếp',
            },
            {
              action: 'Theo dõi lạm phát lõi, lạm phát dịch vụ và tăng lương danh nghĩa để phát hiện lan tỏa từ thực phẩm/năng lượng sang giá khác',
              owner: 'Phân tích kinh tế vĩ mô',
              metric: 'Lạm phát lõi so cùng kỳ; tăng giá nhóm dịch vụ',
              threshold: 'Soát lại khuyến nghị khi lõi > 3,0% hoặc tăng ≥ 0,5 điểm % trong 3 tháng',
            },
            {
              action: 'Thiết kế hỗ trợ có mục tiêu theo nhóm chịu tác động lớn (ví dụ hỗ trợ giá hàng thiết yếu) và đánh giá bằng lạm phát rổ hàng nhóm thấp',
              owner: 'Bộ phận chính sách an sinh',
              metric: 'Lạm phát rổ hàng nhóm thu nhập thấp',
              threshold: 'Rà soát gói hỗ trợ nếu nhóm thấp vẫn > 4,0% sau 2 quý',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Thay vì tranh luận "lạm phát cao hay thấp", ta **tách số trung bình thành các thành phần** (nhóm hàng, nhóm hộ, lõi/chung). Mỗi thành phần có hành động và ngưỡng riêng, nên phản hồi chính sách đi đúng nhóm chịu sức ép thay vì dùng một công cụ chung cho cả nền kinh tế.',
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
              title: 'Xếp hạng nhóm hàng theo mức tăng giá thay vì đóng góp',
              why: 'Năng lượng tăng 10% trông "đáng sợ" nhất, nhưng quyền số nhỏ nên chỉ đóng góp 1,00 điểm %, thấp hơn lương thực (1,98).',
              instead: 'Luôn nhân mức tăng giá với quyền số rồi so sánh đóng góp (điểm %).',
            },
            {
              title: 'Coi CPI chung là trải nghiệm của mọi hộ',
              why: 'Rổ hàng của từng hộ khác nhau; số trung bình che đi nhóm chịu nhiều hơn (4,80%) và ít hơn (3,82%).',
              instead: 'Báo cáo theo nhóm hộ (thu nhập, vùng), nêu rõ quyền số dùng để tính.',
            },
            {
              title: 'Dùng lạm phát lõi để bác bỏ cảm nhận của người dân',
              why: 'Lõi bỏ đi đúng những nhóm chiếm phần lớn chi tiêu của hộ nghèo. Nó đo xu hướng, không đo gánh nặng.',
              instead: 'Đọc lõi và chung song song, hỏi vì sao hai số lệch nhau và cú sốc có lan sang nhóm khác không.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Đóng góp vào CPI = quyền số × mức tăng giá; xếp hạng theo đóng góp, không chỉ theo mức tăng giá.',
    'Cùng một bảng giá, rổ hàng khác nhau cho lạm phát khác nhau (hiệu ứng mix): hộ thu nhập thấp 4,80% so với hộ cao 3,82%.',
    'Lõi cho biết xu hướng, chung cho biết gánh nặng; đọc cả hai, tách theo nhóm hộ và theo dõi nguy cơ lan tỏa.',
  ],
  references: [
    {
      title: 'Consumer Price Index: Questions and Answers',
      publisher: 'U.S. Bureau of Labor Statistics',
      url: 'https://www.bls.gov/cpi/questions-and-answers.htm',
      note: 'Giải thích rổ hàng và quyền số lấy từ chi tiêu của hộ trung bình, và vì sao CPI không nhất thiết phản ánh trải nghiệm giá của từng hộ cụ thể.',
    },
    {
      title: 'Reconsidering the Role of Food Prices in Inflation',
      publisher: 'IMF Working Paper 2011/071 (J. Walsh)',
      url: 'https://www.imf.org/en/Publications/WP/Issues/2016/12/31/Reconsidering-the-Role-of-Food-Prices-in-Inflation-24764',
      note: 'Lập luận rằng ở nước thu nhập thấp, lạm phát thực phẩm biến động và dai dẳng hơn, nên loại thực phẩm khỏi lạm phát lõi có thể gây hiểu sai.',
    },
    {
      title: 'What Should Core Inflation Exclude?',
      publisher: 'Federal Reserve Board (FEDS, A. Detmeister)',
      url: 'https://www.federalreserve.gov/econres/feds/what-should-core-inflation-exclude.htm',
      note: 'So sánh các cách loại bỏ nhóm hàng khi tính lạm phát lõi; loại lương thực và năng lượng là cách phổ biến nhưng không phải lúc nào cũng tối ưu.',
    },
  ],
}
