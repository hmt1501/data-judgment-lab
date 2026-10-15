import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — thị trường nhà ở thành phố giả định, 18 tháng M1–M18. Lãi suất vay mua nhà bình quân (%/năm) và giao dịch (nghìn giao dịch/tháng). Đã tính bằng node:
 *   Lãi suất: 8.0 8.0 8.2 8.6 9.0 9.4 9.8 10.2 10.5 10.8 11.0 11.0 11.0 10.8 10.4 10.0 9.6 9.3
 *   Giao dịch: 10.2 10.4 10.3 10.0 9.9 9.6 9.0 8.2 7.4 6.6 6.0 5.6 5.4 5.4 5.6 6.1 6.8 7.3
 *   Tương quan corr(lãi suất[t], giao dịch[t+k]), k=0..6 — mức: −0,89 / −0,97 / −0,99 / −0,95 / −0,86 / −0,72 / −0,54 · thay đổi tháng-qua-tháng: −0,82 / −0,91 / −0,93 / −0,91 / −0,80 / −0,53 / −0,17
 *     → mạnh nhất k=2 nhưng k=1..3 gần như ngang nhau (mức −0,97 / −0,99 / −0,95)
 *   Điểm ngoặt: lãi suất đạt 11,0% từ M11 → giao dịch chạm đáy 5,4 ở M13–M14 (trễ 2 tháng) · lãi suất bắt đầu giảm M14 (10,8) → giao dịch tăng từ M15 (5,6) (trễ 1 tháng)
 *   So cùng kỳ năm trước (M13–M18 so với M1–M6): giao dịch −47% / −48% / −46% / −39% / −31% / −24% (5,4/10,2 − 1 ...)
 *   Phân khúc người mua (trung bình tháng): M1–M6: tổng 60,4/6 = 10,07 = có vay 6,0 + trả thẳng 4,07 · M10–M12: tổng 18,2/3 = 6,07 = có vay 2,5 + trả thẳng 3,57
 *     có vay −58,3% (2,5/6,0 − 1) · trả thẳng −12,3% (3,567/4,067 − 1) · tổng −39,7%
 *   Khoản vay 2 tỷ, 20 năm, trả đều hằng tháng: lãi 8% → 16,73 triệu/tháng · lãi 11% → 20,64 triệu/tháng (+23,4%) · với 16,73 triệu/tháng ở lãi 11% chỉ vay được khoảng 1.621 triệu (−19,0%)
 */
export const mortgageRateVsTransactionLag: CaseStudy = {
  id: 'mortgage-rate-vs-transaction-lag',
  title: 'Lãi vay mua nhà tăng, giao dịch giảm sau mấy tháng?',
  domain: 'real-estate',
  level: 'junior',
  minutes: 12,
  skills: ['macro', 'causal', 'liquidity', 'segmentation'],
  question:
    'Lãi suất vay mua nhà tăng từ 8,0% lên 11,0% và giao dịch giảm gần 50%. Giao dịch phản ứng với lãi suất sau độ trễ bao lâu, và mức giảm có thật sự do lãi suất, hay do mùa vụ và các yếu tố khác?',
  summary:
    'Ước lượng độ trễ bằng tương quan có trễ và điểm ngoặt, kiểm tra mùa vụ bằng so sánh cùng kỳ, chia người mua có vay và trả thẳng, và quy lãi suất thành khả năng chi trả.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng: thị trường, ngân hàng và mọi con số đều là giả định để minh họa.* Trong 18 tháng, lãi suất vay mua nhà bình quân tăng từ **8,0% lên 11,0%/năm** (đạt đỉnh ở M11–M13), rồi giảm nhẹ về 9,3%. Giao dịch nhà ở giảm từ khoảng 10 nghìn giao dịch/tháng xuống 5,4 nghìn (đáy M13–M14), rồi hồi phục lên 7,3 nghìn. Một ngân hàng muốn biết: **cần chờ bao lâu để thấy tác động của lãi suất lên giao dịch**, và liệu họ có thể dự báo hồi phục khi lãi suất giảm.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Lãi suất cao nhất', value: '11,0%', tone: 'negative', note: 'M11–M13; đầu kỳ: 8,0%' },
            { label: 'Giao dịch thấp nhất', value: '5,4 nghìn', tone: 'negative', note: 'M13–M14; đầu kỳ: 10,2 nghìn' },
            { label: 'Giao dịch M18', value: '7,3 nghìn', tone: 'warning', note: 'Lãi suất M18: 9,3%' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi cần trả lời',
          md: 'Độ trễ là **bao nhiêu tháng**, và **bao nhiêu mức giảm giao dịch là do lãi suất** chứ không phải do mùa vụ, tâm lý hoặc một chính sách khác xảy ra cùng lúc?',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: kênh tác động, độ trễ và loại trừ',
      blocks: [
        {
          kind: 'formula',
          expression: 'Lãi suất ↑ → khoản trả hằng tháng ↑ (hoặc số tiền vay được ↓) → người mua có vay rút lui → giao dịch ↓ sau một độ trễ',
          note: 'Kênh có thể **kiểm tra bằng phân khúc**: nếu lãi suất là nguyên nhân thì người mua **có vay** phải giảm nhiều hơn người **trả thẳng**. Độ trễ đến từ thời gian tìm nhà, thẩm định và ký hợp đồng.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Độ trễ**: tương quan có trễ và điểm ngoặt; báo cáo như một khoảng.',
            '**Mùa vụ**: so cùng kỳ năm trước (cùng tháng) để loại hiệu ứng Tết và mùa vụ.',
            '**Kênh tác động**: so người mua có vay và trả thẳng.',
            '**Quy mô**: quy lãi suất thành khoản trả hằng tháng, so với mức giảm giao dịch.',
          ],
        },
        {
          kind: 'quiz',
          id: 'mortgage-rate-vs-transaction-lag-q1',
          question: 'Tương quan giữa lãi suất và giao dịch là −0,89 ở độ trễ 0 và −0,99 ở độ trễ 2 tháng. Điều đó cho biết gì?',
          options: [
            {
              id: 'a',
              text: 'Lãi suất gây ra giảm giao dịch ngay lập tức.',
              explain: 'Độ trễ 0 có tương quan thấp hơn độ trễ 2; hơn nữa tương quan không chứng minh nhân quả.',
            },
            {
              id: 'b',
              text: 'Giao dịch bám theo lãi suất với độ trễ khoảng 2 tháng, nhưng cần kiểm tra thêm vì cả hai chuỗi có xu hướng mượt nên tương quan có trễ khá phẳng.',
              correct: true,
              explain: 'Đúng. Tương quan ở k = 1, 2, 3 đều rất cao (−0,97, −0,99, −0,95), nên độ trễ chỉ nên nêu như khoảng 1–3 tháng.',
            },
            {
              id: 'c',
              text: 'Lãi suất không liên quan vì độ trễ 0 không phải mạnh nhất.',
              explain: 'Độ trễ 0 vẫn có tương quan mạnh (−0,89); điểm mấu chốt là độ trễ tối ưu khác 0.',
            },
          ],
        },
      ],
    },
    {
      id: 'lag',
      kind: 'analysis',
      title: 'Bước 1 — Độ trễ: tương quan có trễ và điểm ngoặt',
      blocks: [
        {
          kind: 'chart',
          title: 'Lãi suất vay mua nhà (%/năm) và giao dịch (nghìn/tháng)',
          type: 'line',
          xKey: 'm',
          series: [
            { key: 'rate', label: 'Lãi suất (%)' },
            { key: 'tx', label: 'Giao dịch (nghìn/tháng)' },
          ],
          data: [
            { m: 'M1', rate: 8.0, tx: 10.2 },
            { m: 'M2', rate: 8.0, tx: 10.4 },
            { m: 'M3', rate: 8.2, tx: 10.3 },
            { m: 'M4', rate: 8.6, tx: 10.0 },
            { m: 'M5', rate: 9.0, tx: 9.9 },
            { m: 'M6', rate: 9.4, tx: 9.6 },
            { m: 'M7', rate: 9.8, tx: 9.0 },
            { m: 'M8', rate: 10.2, tx: 8.2 },
            { m: 'M9', rate: 10.5, tx: 7.4 },
            { m: 'M10', rate: 10.8, tx: 6.6 },
            { m: 'M11', rate: 11.0, tx: 6.0 },
            { m: 'M12', rate: 11.0, tx: 5.6 },
            { m: 'M13', rate: 11.0, tx: 5.4 },
            { m: 'M14', rate: 10.8, tx: 5.4 },
            { m: 'M15', rate: 10.4, tx: 5.6 },
            { m: 'M16', rate: 10.0, tx: 6.1 },
            { m: 'M17', rate: 9.6, tx: 6.8 },
            { m: 'M18', rate: 9.3, tx: 7.3 },
          ],
          marker: { x: 'M11', label: 'Lãi suất đạt 11%' },
          caption: 'Giao dịch chạm đáy ở M13–M14, sau lãi suất đạt đỉnh ở M11 khoảng 2 tháng; giao dịch bắt đầu tăng ở M15, 1 tháng sau khi lãi suất giảm (M14).',
        },
        {
          kind: 'table',
          title: 'Tương quan corr(lãi suất[t], giao dịch[t+k])',
          columns: [
            { key: 'k', label: 'Độ trễ k (tháng)' },
            { key: 'lvl', label: 'Mức', align: 'right' },
            { key: 'chg', label: 'Thay đổi tháng-qua-tháng', align: 'right' },
          ],
          rows: [
            { k: 0, lvl: '−0,89', chg: '−0,82' },
            { k: 1, lvl: '−0,97', chg: '−0,91' },
            { k: 2, lvl: '−0,99', chg: '−0,93' },
            { k: 3, lvl: '−0,95', chg: '−0,91' },
            { k: 4, lvl: '−0,86', chg: '−0,80' },
            { k: 5, lvl: '−0,72', chg: '−0,53' },
            { k: 6, lvl: '−0,54', chg: '−0,17' },
          ],
          highlight: [{ row: 2, tone: 'positive' }],
          caption: 'Mạnh nhất ở k = 2, nhưng k = 1–3 gần ngang nhau: độ trễ là khoảng 1–3 tháng chứ không phải một số chính xác. Số cặp quan sát giảm dần khi k tăng.',
        },
        {
          kind: 'quiz',
          id: 'mortgage-rate-vs-transaction-lag-q2',
          question: 'Báo cáo cho ban lãnh đạo nên nói về độ trễ thế nào?',
          options: [
            {
              id: 'a',
              text: '"Giao dịch phản ứng với lãi suất sau đúng 2 tháng."',
              explain: 'Quá chính xác so với dữ liệu: k = 1 và k = 3 gần như ngang k = 2, mẫu chỉ 18 tháng.',
            },
            {
              id: 'b',
              text: '"Giao dịch phản ứng sau khoảng 1–3 tháng (ước lượng tốt nhất 2), dựa trên 18 tháng dữ liệu; cần xác nhận thêm với chuỗi dài hơn."',
              correct: true,
              explain: 'Đúng. Nêu khoảng và giới hạn mẫu, vừa trung thực vừa đủ hữu ích để lập kế hoạch.',
            },
            {
              id: 'c',
              text: '"Chưa thể nói gì về độ trễ vì chỉ có 18 tháng."',
              explain: 'Dữ liệu vẫn cho thấy khoảng độ trễ rõ ràng; chỉ cần nêu giới hạn.',
            },
          ],
        },
      ],
    },
    {
      id: 'confound',
      kind: 'analysis',
      title: 'Bước 2 — Mùa vụ, kênh tác động và quy mô',
      blocks: [
        {
          kind: 'table',
          title: 'So cùng kỳ năm trước: giao dịch M13–M18 so với M1–M6',
          columns: [
            { key: 'p', label: 'Cặp tháng' },
            { key: 'a', label: 'Giao dịch năm trước', align: 'right' },
            { key: 'b', label: 'Giao dịch hiện tại', align: 'right' },
            { key: 'yoy', label: 'Thay đổi cùng kỳ', align: 'right' },
          ],
          rows: [
            { p: 'M1 → M13', a: '10,2', b: '5,4', yoy: '−47%' },
            { p: 'M2 → M14', a: '10,4', b: '5,4', yoy: '−48%' },
            { p: 'M3 → M15', a: '10,3', b: '5,6', yoy: '−46%' },
            { p: 'M4 → M16', a: '10,0', b: '6,1', yoy: '−39%' },
            { p: 'M5 → M17', a: '9,9', b: '6,8', yoy: '−31%' },
            { p: 'M6 → M18', a: '9,6', b: '7,3', yoy: '−24%' },
          ],
          caption: 'So cùng tháng của năm trước loại bỏ mùa vụ (ví dụ Tết): mức giảm vẫn từ −47% xuống −24% khi lãi suất hạ, nên không thể là chỉ mùa vụ.',
        },
        {
          kind: 'table',
          title: 'Kênh tác động: người mua có vay và trả thẳng (nghìn giao dịch/tháng)',
          columns: [
            { key: 'seg', label: 'Nhóm người mua' },
            { key: 'a', label: 'M1–M6 (TB)', align: 'right' },
            { key: 'b', label: 'M10–M12 (TB)', align: 'right' },
            { key: 'c', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { seg: 'Có vay ngân hàng', a: '6,00', b: '2,50', c: '−58,3%' },
            { seg: 'Trả thẳng (không vay)', a: '4,07', b: '3,57', c: '−12,3%' },
            { seg: 'Tổng', a: '10,07', b: '6,07', c: '−39,7%' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
          caption: 'Nhóm có vay giảm gấp khoảng 4,7 lần nhóm trả thẳng, đúng dự đoán của kênh lãi suất; nhóm trả thẳng vẫn giảm 12,3%, cho thấy yếu tố khác (tâm lý, kỳ vọng giá) cũng có vai trò.',
        },
        {
          kind: 'table',
          title: 'Quy mô tác động lên khả năng chi trả (khoản vay 2 tỷ đồng, 20 năm, trả đều)',
          columns: [
            { key: 'r', label: 'Lãi suất' },
            { key: 'pay', label: 'Trả hằng tháng', align: 'right' },
            { key: 'note', label: 'So với 8%', align: 'right' },
          ],
          rows: [
            { r: '8%', pay: '16,73 triệu đ', note: 'cơ sở' },
            { r: '11%', pay: '20,64 triệu đ', note: '+23,4%' },
            { r: '11% (giữ khoản trả 16,73 triệu)', pay: 'vay được ≈ 1.621 triệu', note: '−19,0% số tiền vay' },
          ],
          highlight: [{ row: 1, tone: 'warning' }],
          caption: 'Công thức khoản trả đều (annuity). Số liệu minh họa; thực tế lãi suất thả nổi, ưu đãi đầu kỳ và hạn mức tín dụng làm kết quả khác.',
        },
        {
          kind: 'quiz',
          id: 'mortgage-rate-vs-transaction-lag-q3',
          question: 'Lãi suất đã giảm về 9,3% ở M18. Dự báo nào hợp lý nhất cho giao dịch?',
          options: [
            {
              id: 'a',
              text: 'Giao dịch sẽ trở lại mức 10 nghìn trong tháng sau vì lãi suất đã giảm.',
              explain: 'Lãi suất 9,3% vẫn cao hơn 8,0% ban đầu và độ trễ 1–3 tháng; giao dịch hồi phục từng bước, mới tới 7,3 nghìn.',
            },
            {
              id: 'b',
              text: 'Tiếp tục hồi phục dần trong 1–3 tháng tới nhưng chưa về mức ban đầu nếu lãi suất còn cao hơn 8%, và theo dõi nhóm có vay trước.',
              correct: true,
              explain: 'Đúng. Dự báo dựa trên độ trễ và kênh tác động, nêu rõ điều kiện (lãi suất còn cao hơn mức ban đầu).',
            },
            {
              id: 'c',
              text: 'Giao dịch sẽ tiếp tục giảm vì nhóm trả thẳng vẫn đang giảm.',
              explain: 'Nhóm trả thẳng chỉ chiếm phần nhỏ của mức giảm và tổng giao dịch đã tăng từ M15.',
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
          md: '**Kết luận:** Giao dịch phản ứng với lãi suất sau khoảng **1–3 tháng**. Mức giảm không phải do mùa vụ (so cùng kỳ vẫn −47%) và có dấu vết của kênh vay (người mua có vay −58,3% so với trả thẳng −12,3%). Lãi suất 11% làm khoản trả hằng tháng tăng 23,4% cho cùng khoản vay. Dùng độ trễ 1–3 tháng cho kế hoạch kinh doanh, nhưng đừng coi nó là quy tắc cố định.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Dùng khoảng độ trễ 1–3 tháng để lập kế hoạch giải ngân và chỉ tiêu bán hàng khi lãi suất đổi; theo dõi nhóm có vay như chỉ báo sớm',
              owner: 'Trưởng nhóm kế hoạch kinh doanh',
              metric: 'Giao dịch của người mua có vay; hồ sơ vay mua nhà đã duyệt',
              threshold: 'Điều chỉnh chỉ tiêu khi hồ sơ đã duyệt thay đổi > 15% trong 2 tháng liên tiếp',
            },
            {
              action: 'Báo cáo giao dịch theo cùng kỳ năm trước và theo nhóm có vay/trả thẳng thay vì chỉ theo tháng',
              owner: 'Data/Analytics',
              metric: 'Giao dịch so cùng kỳ; tỷ trọng có vay',
              threshold: 'Cập nhật hằng tháng; cảnh báo khi tỷ trọng có vay thay đổi > 5 điểm',
            },
            {
              action: 'Chạy lại độ trễ với chuỗi 5–10 năm và nhiều thị trường để xác nhận khoảng 1–3 tháng',
              owner: 'Data/Analytics + Nghiên cứu thị trường',
              metric: 'Độ trễ có tương quan cao nhất; độ ổn định theo giai đoạn',
              threshold: 'Độ trễ nằm trong 1–4 tháng ở ≥ 2/3 giai đoạn con',
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
              title: 'Nêu độ trễ như một con số chính xác',
              why: 'Hai chuỗi mượt có tương quan có trễ khá phẳng, nên độ trễ tối ưu nhạy với mẫu.',
              instead: 'Báo cáo khoảng (ví dụ 1–3 tháng) và kiểm tra ổn định theo giai đoạn.',
            },
            {
              title: 'Quy toàn bộ mức giảm cho lãi suất',
              why: 'Nhóm trả thẳng vẫn giảm 12,3%, nghĩa là có yếu tố khác (tâm lý, kỳ vọng giá, chính sách tín dụng).',
              instead: 'Dùng phân khúc có vay/trả thẳng để ước lượng phần thuộc kênh lãi suất, và liệt kê các yếu tố đồng thời.',
            },
            {
              title: 'Bỏ qua mùa vụ',
              why: 'Giao dịch nhà ở thường có mùa (ví dụ quanh Tết); so tháng liền kề có thể nhầm mùa vụ với tác động lãi suất.',
              instead: 'So cùng kỳ năm trước hoặc khử mùa vụ trước khi đo độ trễ.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Độ trễ nên được báo cáo như một khoảng, dựa trên tương quan có trễ và điểm ngoặt, kèm giới hạn của mẫu.',
    'Kiểm tra mùa vụ bằng so cùng kỳ và kiểm tra kênh tác động bằng phân khúc (có vay so với trả thẳng).',
    'Quy lãi suất thành khoản trả hằng tháng để hiểu quy mô tác động lên khả năng chi trả.',
  ],
  references: [
    {
      title: 'Transmission mechanisms for monetary policy in emerging market economies (BIS Papers No 35)',
      publisher: 'Bank for International Settlements',
      url: 'https://www.bis.org/publ/bppdf/bispap35.htm',
      note: 'Tài liệu BIS về cơ chế truyền dẫn chính sách tiền tệ ở các nền kinh tế mới nổi, nơi lãi suất tác động tới tín dụng và tổng cầu với độ trễ.',
    },
    {
      title: 'Transmission mechanism',
      publisher: 'European Central Bank',
      url: 'https://www.ecb.europa.eu/mopo/intro/transmission/html/index.en.html',
      note: 'Trang giải thích của ECB: cơ chế truyền dẫn chính sách tiền tệ có độ trễ dài, thay đổi và không chắc chắn, cơ sở của việc nêu độ trễ như một khoảng.',
    },
    {
      title: 'Monetary transmission mechanism',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Monetary_transmission_mechanism',
      note: 'Tổng quan các kênh truyền dẫn tiền tệ, trong đó có kênh lãi suất và kênh tín dụng.',
    },
  ],
}
