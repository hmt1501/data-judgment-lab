import type { CaseStudy } from '../types'

/*
 * Chỉ số và dư nợ margin hoàn toàn giả định (không phải khuyến nghị đầu tư). Dư nợ margin: nghìn tỷ đồng.
 * 12 tháng cuối kỳ: chỉ số 1000, 1030, 1010, 1060, 1100, 1090, 1150, 1180, 1140, 1200, 1250, 1230 (+23,0%)
 *                   dư nợ  50,0; 51,4; 52,9; 52,6; 55,2; 57,6; 57,3; 60,6; 62,6; 60,8; 64,2; 66,9 (+33,8%)
 * Tương quan (tính bằng node, mô phỏng):
 *   mức chỉ số với mức dư nợ r = 0,93 (cả hai có xu hướng tăng)
 *   thay đổi %: cùng tháng r = −0,45 ; chỉ số tháng t → dư nợ tháng t+1 r = 0,99 ; dư nợ tháng t → chỉ số tháng t+1 r = −0,50
 *   (11 điểm thay đổi hằng tháng; dữ liệu mô phỏng nên độ trễ 1 tháng rất rõ.)
 * Rebase 100: chỉ số/10 ; dư nợ/50×100.
 */
export const marginDebtIndexCorrelation: CaseStudy = {
  id: 'margin-debt-index-correlation',
  title: 'Dư nợ margin tăng cùng chỉ số: tương quan có phải nhân quả?',
  domain: 'securities',
  level: 'junior',
  minutes: 11,
  skills: ['causal', 'liquidity', 'data-quality'],
  question:
    'Dư nợ cho vay ký quỹ (margin) và chỉ số chứng khoán tăng gần như song song trong 12 tháng. Có phải margin đẩy chỉ số lên, hay chỉ số tăng kéo margin tăng theo, hay cả hai cùng bị yếu tố thứ ba chi phối?',
  summary:
    'Phân biệt tương quan theo mức và theo thay đổi, kiểm tra độ trễ hai chiều, và liệt kê biến gây nhiễu để quyết định điều gì có thể (và không thể) kết luận từ dữ liệu.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Một bản tin nhận định: *"Dư nợ margin tăng 33,8% đẩy chỉ số tăng 23,0%, nhà đầu tư dùng đòn bẩy mạnh."* Bạn được hỏi: *"Nói như vậy có đúng không?"* Dữ liệu 12 tháng dưới đây là **giả định**.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Mọi con số đều **giả định, mô phỏng**; các hệ số tương quan được tính từ chính chuỗi này. Bài không phải khuyến nghị đầu tư.',
        },
        {
          kind: 'chart',
          title: 'Chỉ số và dư nợ margin, quy về 100 ở tháng đầu',
          type: 'line',
          xKey: 'month',
          series: [
            { key: 'index', label: 'Chỉ số' },
            { key: 'margin', label: 'Dư nợ margin' },
          ],
          unit: '',
          data: [
            { month: 'T1', index: 100, margin: 100 },
            { month: 'T2', index: 103, margin: 102.8 },
            { month: 'T3', index: 101, margin: 105.8 },
            { month: 'T4', index: 106, margin: 105.2 },
            { month: 'T5', index: 110, margin: 110.4 },
            { month: 'T6', index: 109, margin: 115.2 },
            { month: 'T7', index: 115, margin: 114.6 },
            { month: 'T8', index: 118, margin: 121.2 },
            { month: 'T9', index: 114, margin: 125.2 },
            { month: 'T10', index: 120, margin: 121.6 },
            { month: 'T11', index: 125, margin: 128.4 },
            { month: 'T12', index: 123, margin: 133.8 },
          ],
          caption: 'Hai đường cùng đi lên. Tháng 9 chỉ số giảm nhưng dư nợ vẫn tăng; tháng 10 dư nợ giảm sau đó.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: ba cách giải thích cho một tương quan',
      blocks: [
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**X gây ra Y**: margin tăng kéo chỉ số tăng (cầu đòn bẩy).',
            '**Y gây ra X**: chỉ số tăng khiến nhà đầu tư vay thêm.',
            '**Z gây ra cả hai**: thanh khoản, tâm lý, số tài khoản mới, hạ lãi suất cùng đẩy cả hai.',
            'Hai chuỗi có xu hướng tăng thì tương quan theo **mức** gần như luôn cao; phải xem tương quan theo **thay đổi** và **độ trễ**.',
          ],
        },
        {
          kind: 'quiz',
          id: 'margin-q1',
          question: 'Vì sao tương quan 0,93 giữa mức chỉ số và mức dư nợ margin chưa nói được gì nhiều?',
          options: [
            { id: 'a', text: 'Hai chuỗi cùng có xu hướng tăng theo thời gian nên mức của chúng gần như luôn đồng hành, bất kể có quan hệ nhân quả hay không.', correct: true, explain: 'Đúng. Xu hướng chung tạo tương quan cao (tương quan giả); nên chuyển sang phần thay đổi theo kỳ.' },
            { id: 'b', text: 'Vì 0,93 quá nhỏ.', explain: '0,93 rất cao; vấn đề là nguyên nhân của nó.' },
            { id: 'c', text: 'Vì dữ liệu hằng tháng không dùng được.', explain: 'Dữ liệu hằng tháng dùng được, chỉ là cỡ mẫu nhỏ.' },
          ],
        },
      ],
    },
    {
      id: 'changes',
      kind: 'analysis',
      title: 'Bước 1 — Từ mức sang thay đổi',
      blocks: [
        {
          kind: 'table',
          title: 'Thay đổi hằng tháng (%)',
          columns: [
            { key: 'm', label: 'Tháng' },
            { key: 'ri', label: 'Chỉ số', align: 'right' },
            { key: 'rm', label: 'Dư nợ margin', align: 'right' },
          ],
          rows: [
            { m: 'T2', ri: '+3,0', rm: '+2,8' },
            { m: 'T3', ri: '−1,9', rm: '+2,9' },
            { m: 'T4', ri: '+5,0', rm: '−0,6' },
            { m: 'T5', ri: '+3,8', rm: '+4,9' },
            { m: 'T6', ri: '−0,9', rm: '+4,3' },
            { m: 'T7', ri: '+5,5', rm: '−0,5' },
            { m: 'T8', ri: '+2,6', rm: '+5,8' },
            { m: 'T9', ri: '−3,4', rm: '+3,3' },
            { m: 'T10', ri: '+5,3', rm: '−2,9' },
            { m: 'T11', ri: '+4,2', rm: '+5,6' },
            { m: 'T12', ri: '−1,6', rm: '+4,2' },
          ],
          caption: 'Cùng tháng, hai thay đổi nhìn lệch pha (tương quan −0,45). Nhưng dư nợ có vẻ phản ứng sau khi chỉ số tăng mạnh: chỉ số +5,0 ở T4, dư nợ +4,9 ở T5.',
        },
      ],
    },
    {
      id: 'lag',
      kind: 'analysis',
      title: 'Bước 2 — Độ trễ hai chiều',
      blocks: [
        {
          kind: 'table',
          title: 'Tương quan của thay đổi theo kỳ (mô phỏng)',
          columns: [
            { key: 'test', label: 'Cặp so sánh' },
            { key: 'r', label: 'Tương quan', align: 'right' },
            { key: 'read', label: 'Đọc' },
          ],
          rows: [
            { test: 'Mức chỉ số với mức dư nợ', r: '0,93', read: 'Bị xu hướng chung chi phối' },
            { test: 'Thay đổi chỉ số và dư nợ cùng tháng', r: '−0,45', read: 'Không cùng pha' },
            { test: 'Chỉ số tháng t với dư nợ tháng t+1', r: '0,99', read: 'Chỉ số đi trước, dư nợ theo sau' },
            { test: 'Dư nợ tháng t với chỉ số tháng t+1', r: '−0,50', read: 'Dư nợ không dự báo chỉ số theo chiều dương' },
          ],
          highlight: [{ row: 2, tone: 'positive' }],
          caption: 'Trong chuỗi mô phỏng này, chiều "chỉ số đi trước, dư nợ theo sau" mạnh hơn nhiều chiều ngược lại. Với 11 điểm, chỉ nên coi là gợi ý.',
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Độ trễ không chứng minh nhân quả',
          md: 'Kể cả khi chỉ số đi trước, một yếu tố thứ ba (thanh khoản, lãi suất hạ) có thể tác động chỉ số trước và dư nợ sau. Độ trễ chỉ loại trừ một chiều giải thích, không xác nhận chiều còn lại.',
        },
      ],
    },
    {
      id: 'confound',
      kind: 'analysis',
      title: 'Bước 3 — Biến gây nhiễu và cách kiểm tra',
      blocks: [
        {
          kind: 'table',
          title: 'Biến gây nhiễu tiềm năng',
          columns: [
            { key: 'z', label: 'Yếu tố thứ ba' },
            { key: 'how', label: 'Kiểm tra bằng' },
          ],
          rows: [
            { z: 'Lãi suất huy động/vay giảm', how: 'So giai đoạn lãi suất đổi chiều với thay đổi chỉ số và dư nợ' },
            { z: 'Số tài khoản mới và giá trị giao dịch', how: 'Chuẩn hóa dư nợ theo vốn hóa thị trường hoặc số tài khoản' },
            { z: 'Quy mô vốn hóa tăng', how: 'Xem tỷ lệ dư nợ/vốn hóa; nếu phẳng thì phần lớn là hiệu ứng quy mô' },
          ],
        },
        {
          kind: 'quiz',
          id: 'margin-q2',
          question: 'Chuẩn hóa dư nợ margin theo vốn hóa thị trường để làm gì?',
          options: [
            { id: 'a', text: 'Loại hiệu ứng quy mô: thị trường lớn hơn thì dư nợ tuyệt đối lớn hơn ngay cả khi mức đòn bẩy không đổi.', correct: true, explain: 'Đúng. Tỷ lệ dư nợ/vốn hóa mới đo mức sử dụng đòn bẩy thật.' },
            { id: 'b', text: 'Để làm biểu đồ đẹp hơn.', explain: 'Mục tiêu là đo đúng đại lượng, không phải thẩm mỹ.' },
            { id: 'c', text: 'Để chứng minh margin gây ra tăng giá.', explain: 'Chuẩn hóa không chứng minh nhân quả.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: cách viết kết luận đúng mức',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận trên dữ liệu giả định:** câu "margin đẩy chỉ số lên" **chưa được hỗ trợ**. Dư nợ có vẻ đi theo sau chỉ số (tương quan 0,99 với độ trễ 1 tháng, so với −0,50 chiều ngược lại). Cách viết phù hợp: *"Dư nợ margin tăng sau khi chỉ số tăng; chưa đủ dữ liệu để khẳng định margin là nguyên nhân."*',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Báo cáo tỷ lệ dư nợ margin / vốn hóa thay vì dư nợ tuyệt đối', owner: 'Analyst thị trường', metric: 'Dư nợ margin / vốn hóa', threshold: 'Tăng > 20% trong 3 tháng thì mới nói "đòn bẩy tăng"' },
            { action: 'Kiểm tra độ trễ hai chiều (−3 đến +3 tháng) trên thay đổi, không phải mức', owner: 'Data analyst', metric: 'Tương quan thay đổi theo độ trễ', threshold: 'Chiều có hệ số lớn hơn ≥ 0,3 so với chiều ngược mới được nêu' },
            { action: 'Liệt kê và kiểm tra ít nhất 2 biến gây nhiễu (lãi suất, thanh khoản) trước khi dùng từ "đẩy"', owner: 'Trưởng nhóm nghiên cứu', metric: 'Số biến nhiễu đã kiểm tra', threshold: '≥ 2 trong mỗi bản tin có nhận định nhân quả' },
          ],
        },
        {
          kind: 'quiz',
          id: 'margin-q3',
          question: 'Câu nào là diễn đạt phù hợp nhất với dữ liệu này?',
          options: [
            { id: 'a', text: 'Margin tăng làm chỉ số tăng.', explain: 'Khẳng định nhân quả mà dữ liệu không hỗ trợ.' },
            { id: 'b', text: 'Dư nợ margin tăng sau khi chỉ số tăng; dữ liệu chưa đủ để khẳng định chiều nhân quả hay vai trò của yếu tố thứ ba.', correct: true, explain: 'Đúng. Nêu đúng điều quan sát được và giới hạn của nó.' },
            { id: 'c', text: 'Hai chuỗi không liên quan.', explain: 'Có liên quan về mặt thống kê; chỉ là chưa đủ để kết luận nhân quả.' },
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
            { title: 'Tương quan theo mức của chuỗi có xu hướng', why: 'Hai chuỗi cùng tăng theo thời gian luôn tương quan cao.', instead: 'Dùng thay đổi theo kỳ hoặc tỷ lệ chuẩn hóa.' },
            { title: 'Dùng từ "đẩy", "kéo" khi chỉ có tương quan', why: 'Tương quan không cho biết chiều và không loại trừ yếu tố thứ ba.', instead: 'Mô tả điều quan sát được và nêu giới hạn.' },
            { title: 'Rút kết luận từ vài chục điểm dữ liệu', why: 'Mẫu nhỏ cho hệ số không ổn định, dễ đảo dấu.', instead: 'Gọi kết quả là gợi ý, thêm dữ liệu nhiều giai đoạn.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Tương quan theo mức của hai chuỗi tăng dần gần như luôn cao; hãy xem thay đổi và tỷ lệ chuẩn hóa.',
    'Kiểm tra độ trễ hai chiều để loại trừ ít nhất một chiều giải thích.',
    'Liệt kê biến gây nhiễu và diễn đạt đúng mức: quan sát được gì, chưa khẳng định được gì.',
  ],
  references: [
    { title: 'Correlation does not imply causation', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation', note: 'Tóm tắt các khả năng khi hai biến tương quan: X gây Y, Y gây X, yếu tố thứ ba, hoặc trùng hợp.' },
    { title: 'Spurious relationship', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Spurious_relationship', note: 'Giải thích tương quan giả khi hai chuỗi cùng chịu tác động của yếu tố khác hoặc cùng xu hướng.' },
    { title: 'Granger causality', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Granger_causality', note: 'Ý tưởng kiểm tra xem quá khứ của một chuỗi có giúp dự báo chuỗi kia không, nền cho phép thử độ trễ hai chiều.' },
    { title: 'Margin (finance)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Margin_(finance)', note: 'Giải thích margin và mua bằng đòn bẩy, giúp hiểu dư nợ margin đo cái gì.' },
  ],
}
