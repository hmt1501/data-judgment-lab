import type { CaseStudy } from '../types'

/*
 * Số liệu mock (triệu đ), đã kiểm tra khớp nhau (thuế 20%, không hoàn thuế khi lỗ, lãi vay 10%/năm):
 *   Cả hai công ty: tài sản 1.000 · EBIT kịch bản cơ sở 120 (12% tài sản)
 *   Công ty A: vay 600 (lãi 60) · vốn chủ 400 · D/E 1,5 · Công ty B: vay 200 (lãi 20) · vốn chủ 800 · D/E 0,25
 *   Khả năng trả lãi (EBIT ÷ lãi): A 120 ÷ 60 = 2,0 · B 120 ÷ 20 = 6,0; khi EBIT = 40: A 0,67 · B 2,0
 *   ROE theo EBIT 40 / 120 / 200:
 *     A: (40 − 60) = −20 → −5% · (120 − 60) × 0,8 = 48 → 12% · (200 − 60) × 0,8 = 112 → 28%
 *     B: (40 − 20) × 0,8 = 16 → 2% · (120 − 20) × 0,8 = 80 → 10% · (200 − 20) × 0,8 = 144 → 18%
 */
export const debtToEquityLeverageReading: CaseStudy = {
  id: 'debt-to-equity-leverage-reading',
  title: 'Vay nhiều khuếch đại cả lãi lẫn lỗ: đọc D/E và khả năng trả lãi',
  domain: 'accounting',
  level: 'fresher',
  minutes: 9,
  skills: ['financial-statements', 'metric-definition', 'tradeoff'],
  question: 'Hai công ty cùng tài sản và cùng lợi nhuận hoạt động, nhưng một bên vay nhiều, một bên vay ít. ROE và rủi ro của họ khác nhau thế nào qua các kịch bản?',
  summary: 'Đọc D/E, khả năng trả lãi và hiểu đòn bẩy tài chính khuếch đại ROE theo cả hai chiều.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Hai công ty **A** và **B** đều có tổng tài sản 1.000 triệu đ và cùng kiếm lợi nhuận hoạt động (EBIT) 120 triệu đ trong năm cơ sở. A tài trợ bằng nhiều nợ (vay 600), B bằng nhiều vốn chủ (vay 200). Một nhà đầu tư hỏi: "A có ROE 12%, B có 10%, vậy A tốt hơn đúng không?"',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Hai công ty và các con số là **giả định**. Lãi vay 10%/năm, thuế 20%, không hoàn thuế khi lỗ để dễ tính. Khái niệm D/E, khả năng trả lãi và đòn bẩy là thật.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'ROE công ty A (cơ sở)', value: '12%', tone: 'positive' },
            { label: 'ROE công ty B (cơ sở)', value: '10%' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: đòn bẩy là con dao hai lưỡi',
      blocks: [
        {
          kind: 'formula',
          expression: 'D/E = Nợ vay ÷ Vốn chủ · Khả năng trả lãi = EBIT ÷ Lãi vay · ROE = Lợi nhuận ròng ÷ Vốn chủ',
          note: 'Lãi vay là chi phí cố định phải trả dù kinh doanh tốt hay xấu. Khi EBIT cao hơn lãi vay thì phần dư thuộc về cổ đông (ROE tăng); khi EBIT thấp hơn thì cổ đông gánh phần thiếu.',
        },
        {
          kind: 'quiz',
          id: 'debt-to-equity-leverage-reading-q1',
          question: 'Vì sao công ty vay nhiều có ROE nhạy hơn với biến động lợi nhuận hoạt động?',
          options: [
            { id: 'a', text: 'Vì lãi vay cố định, nên mỗi đồng EBIT tăng hoặc giảm đều dồn vào phần vốn chủ nhỏ hơn.', correct: true, explain: 'Đúng. Chi phí lãi cố định và vốn chủ ít khiến mỗi thay đổi EBIT được chia cho ít vốn hơn, nên ROE dao động mạnh hơn.' },
            { id: 'b', text: 'Vì ngân hàng yêu cầu như vậy.', explain: 'Đây là hệ quả toán học của chi phí cố định, không do ngân hàng.' },
            { id: 'c', text: 'Vì vay nhiều làm EBIT tăng.', explain: 'Vay làm tăng lãi vay, không làm EBIT tăng nếu tài sản mua thêm không sinh lời.' },
          ],
        },
      ],
    },
    {
      id: 'structure',
      kind: 'analysis',
      title: 'Bước 1 — Đọc cơ cấu nợ và khả năng trả lãi',
      blocks: [
        {
          kind: 'table',
          title: 'Cơ cấu vốn và khả năng trả lãi (triệu đ)',
          columns: [
            { key: 'item', label: 'Chỉ số' },
            { key: 'a', label: 'Công ty A', align: 'right' },
            { key: 'b', label: 'Công ty B', align: 'right' },
          ],
          rows: [
            { item: 'Vay', a: '600', b: '200' },
            { item: 'Vốn chủ', a: '400', b: '800' },
            { item: 'D/E', a: '1,5', b: '0,25' },
            { item: 'Lãi vay/năm (10%)', a: '60', b: '20' },
            { item: 'EBIT cơ sở 120 ÷ lãi vay', a: '2,0 lần', b: '6,0 lần' },
            { item: 'EBIT suy giảm 40 ÷ lãi vay', a: '0,67 lần', b: '2,0 lần' },
          ],
          highlight: [{ row: 5, tone: 'negative' }],
          caption: 'Khi EBIT giảm còn 40, A không đủ trả lãi (0,67 lần); B vẫn trả được 2 lần.',
        },
        {
          kind: 'quiz',
          id: 'debt-to-equity-leverage-reading-q2',
          question: 'Khả năng trả lãi của A là 0,67 lần khi EBIT = 40. Điều đó có nghĩa gì?',
          options: [
            { id: 'a', text: 'Lợi nhuận hoạt động chỉ đủ trả 67% lãi vay; phần thiếu phải lấy từ tiền tích lũy, vay thêm hoặc bán tài sản.', correct: true, explain: 'Đúng. 40 ÷ 60 = 0,67. Công ty chưa lỗ về dòng tiền nếu còn tiền mặt, nhưng đang tiêu hao vốn để trả lãi.' },
            { id: 'b', text: 'Công ty chắc chắn phá sản trong tháng tới.', explain: 'Không chắc: tùy tiền mặt và khả năng tái cấp vốn. Đây là cảnh báo chứ chưa phải kết luận phá sản.' },
            { id: 'c', text: 'Công ty có lãi vì tỷ số dương.', explain: 'Tỷ số dương không có nghĩa là có lãi; dưới 1 nghĩa là không đủ trả lãi.' },
          ],
        },
      ],
    },
    {
      id: 'scenarios',
      kind: 'analysis',
      title: 'Bước 2 — ROE qua ba kịch bản',
      blocks: [
        {
          kind: 'table',
          title: 'ROE theo EBIT (triệu đ)',
          columns: [
            { key: 'scenario', label: 'Kịch bản' },
            { key: 'ebit', label: 'EBIT', align: 'right' },
            { key: 'a', label: 'ROE A', align: 'right' },
            { key: 'b', label: 'ROE B', align: 'right' },
          ],
          rows: [
            { scenario: 'Suy giảm', ebit: '40', a: '−5,0%', b: '2,0%' },
            { scenario: 'Cơ sở', ebit: '120', a: '12,0%', b: '10,0%' },
            { scenario: 'Tăng trưởng', ebit: '200', a: '28,0%', b: '18,0%' },
          ],
          highlight: [
            { row: 0, tone: 'negative' },
            { row: 2, tone: 'positive' },
          ],
          caption: 'A: (40 − 60) = −20 → −5%; (120 − 60) × 0,8 = 48 → 12%; (200 − 60) × 0,8 = 112 → 28%. B: (40 − 20) × 0,8 = 16 → 2%; 80 → 10%; 144 → 18%.',
        },
        {
          kind: 'chart',
          title: 'ROE theo kịch bản (%)',
          type: 'line',
          xKey: 'scenario',
          unit: '%',
          series: [
            { key: 'a', label: 'Công ty A (vay nhiều)' },
            { key: 'b', label: 'Công ty B (vay ít)' },
          ],
          data: [
            { scenario: 'Suy giảm', a: -5, b: 2 },
            { scenario: 'Cơ sở', a: 12, b: 10 },
            { scenario: 'Tăng trưởng', a: 28, b: 18 },
          ],
          caption: 'Đường của A dốc hơn: lên cao hơn khi tốt, xuống âm khi xấu.',
        },
        {
          kind: 'quiz',
          id: 'debt-to-equity-leverage-reading-q3',
          question: 'Nhà đầu tư chỉ nhìn ROE năm cơ sở (12% so với 10%) để chọn A. Điều gì bị bỏ sót?',
          options: [
            { id: 'a', text: 'ROE cao hơn của A đến từ đòn bẩy, đi kèm biến động và rủi ro lớn hơn khi EBIT suy giảm.', correct: true, explain: 'Đúng. A có lợi khi EBIT cao, nhưng lỗ (−5%) và không trả nổi lãi khi EBIT thấp. Phải đọc ROE cùng độ bền trước kịch bản xấu.' },
            { id: 'b', text: 'Không bỏ sót gì; ROE càng cao càng tốt.', explain: 'ROE cao do vay nhiều khác ROE cao do kinh doanh tốt; cần xét rủi ro đi kèm.' },
            { id: 'c', text: 'ROE không liên quan đến cơ cấu vốn.', explain: 'ROE phụ thuộc trực tiếp vào cơ cấu vốn qua mẫu số vốn chủ và chi phí lãi.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: cách đọc đòn bẩy',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận:** A cho ROE cao hơn trong kịch bản cơ sở và tăng trưởng, nhưng âm (−5%) và không đủ trả lãi (0,67 lần) khi EBIT giảm còn 40. B ổn định hơn. Công ty nào "tốt hơn" phụ thuộc vào độ bền của EBIT và khẩu vị rủi ro, không chỉ vào ROE một năm.',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Báo cáo cùng lúc D/E, khả năng trả lãi và ROE, kèm kịch bản EBIT giảm 30–50%', owner: 'Analyst tài chính', metric: 'Khả năng trả lãi ở kịch bản xấu', threshold: '≥ 1,5 lần' },
            { action: 'Đặt giới hạn D/E theo độ ổn định doanh thu và ngành', owner: 'Giám đốc tài chính', metric: 'D/E', threshold: 'Ví dụ ≤ 1,0 với doanh thu biến động mạnh (ngưỡng minh họa)' },
            { action: 'Lập kế hoạch tái cấp vốn trước khi nợ đến hạn', owner: 'Phòng tài chính', metric: 'Nợ đến hạn trong 12 tháng ÷ tiền và dòng tiền dự báo', threshold: '≤ 1,0' },
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
            { title: 'Chọn công ty có ROE cao nhất', why: 'ROE cao có thể đến từ đòn bẩy; rủi ro đi kèm.', instead: 'Đọc ROE cùng D/E và khả năng trả lãi.' },
            { title: 'Chỉ xét kịch bản cơ sở', why: 'Đòn bẩy chỉ lộ rủi ro khi doanh thu giảm.', instead: 'Chạy kịch bản xấu.' },
            { title: 'Cho rằng nợ luôn xấu hoặc luôn tốt', why: 'Nợ có lợi khi lợi suất tài sản vượt chi phí vay, và có hại ngược lại.', instead: 'So lợi suất tài sản với lãi vay và độ ổn định của dòng tiền.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'D/E và khả năng trả lãi đo mức phụ thuộc vào vay; lãi vay là chi phí cố định.',
    'Đòn bẩy khuếch đại ROE theo cả hai chiều: cao hơn khi tốt, âm khi xấu.',
    'Đánh giá đòn bẩy bằng kịch bản xấu và độ ổn định dòng tiền, không bằng ROE một năm.',
  ],
  references: [
    { title: 'Debt-to-equity ratio', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Debt-to-equity_ratio', note: 'Định nghĩa D/E và các biến thể.' },
    { title: 'Times interest earned', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Times_interest_earned', note: 'Chỉ số khả năng trả lãi (EBIT ÷ lãi vay).' },
    { title: 'Financial leverage', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Financial_leverage', note: 'Đòn bẩy tài chính và cách nó khuếch đại lợi nhuận và rủi ro.' },
  ],
}
