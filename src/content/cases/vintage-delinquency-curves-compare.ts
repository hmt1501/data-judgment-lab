import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — Công ty cho vay tiêu dùng C (hư cấu), 6 vintage giải ngân T1–T6, đo cuối T9. "Ever 30+" = % khoản vay (theo số khoản) đã từng quá hạn từ 30 ngày trở lên tính đến tháng trên sổ (MOB) tương ứng.
 *   Ever 30+ theo MOB (M1…): T1 0,2 / 0,9 / 1,7 / 2,5 / 3,1 / 3,6 · T2 0,2 / 0,9 / 1,8 / 2,7 / 3,3 / 3,8 · T3 0,2 / 1,0 / 1,9 / 2,8 / 3,4 / 3,9 · T4 0,2 / 1,1 / 2,2 / 3,2 / 3,9 · T5 0,3 / 1,4 / 2,8 / 4,0 · T6 0,4 / 1,8 / 3,5
 *     (số liệu làm tròn một chữ số từ MOB3 chính xác 1,74 / 1,83 / 1,92 / 2,20 / 2,76 / 3,51 nhân hệ số hình dạng đường cong 0,11 / 0,50 / 1,00 / 1,45 / 1,78 / 2,05)
 *   Kênh (MOB3 chính xác): đại lý (D) tỷ trọng giải ngân 30% / 35% / 40% / 50% / 60% / 70% (T1…T6) · Ever 30+ MOB3 của D: 3,0 / 3,0 / 3,0 / 3,2 / 3,8 / 4,5 · trực tuyến (O): 1,2 mọi vintage
 *     Tổng MOB3 = tỷ trọng D × D + (1 − tỷ trọng D) × O: T1 0,3×3,0 + 0,7×1,2 = 1,74 · T2 1,83 · T3 1,92 · T4 0,5×3,2 + 0,5×1,2 = 2,20 · T5 0,6×3,8 + 0,4×1,2 = 2,76 · T6 0,7×4,5 + 0,3×1,2 = 3,51
 *   Phân rã T1 → T6 (+1,77 điểm = 3,51 − 1,74): hiệu ứng cơ cấu = (0,70 − 0,30) × (3,0 − 1,2) = 0,72 (40,7%) · hiệu ứng tỷ lệ = 0,70 × (4,5 − 3,0) + 0,30 × (1,2 − 1,2) = 1,05 (59,3%) → 0,72 + 1,05 = 1,77 ✓
 *   T6 gấp T1 ở MOB3: 3,51/1,74 = 2,02 lần (làm tròn 3,5 / 1,7 ≈ 2,06 lần)
 */
export const vintageDelinquencyCurvesCompare: CaseStudy = {
  id: 'vintage-delinquency-curves-compare',
  title: 'Đường quá hạn theo vintage: cohort mới xấu hơn do cơ cấu kênh hay chất lượng?',
  domain: 'lending',
  level: 'junior',
  minutes: 12,
  skills: ['cohort', 'credit-risk', 'segmentation', 'mix-effect'],
  question:
    'Các vintage giải ngân gần đây có tỷ lệ từng quá hạn 30 ngày (Ever 30+) cao hơn rõ rệt khi so cùng tháng trên sổ. Đó là do cơ cấu kênh đổi hay do chất lượng thẩm định ở một kênh xấu đi?',
  summary:
    'So sánh các vintage ở cùng tháng trên sổ (MOB), nhận ra tại sao tỷ lệ quá hạn của dashboard che đi xu hướng, cắt vintage theo kênh và phân rã thay đổi thành cơ cấu và tỷ lệ.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng: công ty và mọi con số đều là giả định để minh họa.* **Công ty tài chính tiêu dùng C** bán khoản vay qua hai kênh: **đại lý** (nhân viên tại điểm bán) và **trực tuyến**. Từ tháng 4, công ty đẩy mạnh kênh đại lý. Dashboard tổng quá hạn trông ổn vì phần lớn dư nợ là các vintage cũ. Trưởng phòng rủi ro yêu cầu so sánh **các vintage giải ngân T1–T6 ở cùng tháng trên sổ (MOB)** để biết chất lượng giải ngân mới có xấu đi không, và xấu do đâu.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Ever 30+ tại MOB3, T1', value: '1,7%', note: 'Vintage tháng 1' },
            { label: 'Ever 30+ tại MOB3, T6', value: '3,5%', delta: '≈ gấp 2 lần', tone: 'negative', note: 'Vintage tháng 6' },
            { label: 'Tỷ trọng kênh đại lý', value: '30% → 70%', tone: 'warning', note: 'T1 → T6' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi cần trả lời',
          md: 'Hai khả năng cho mức xấu đi: **kênh đại lý mang về khách rủi ro hơn nhưng không đổi** (chỉ là cơ cấu), hoặc **chất lượng ở kênh đại lý xấu đi** (thẩm định lỏng hơn). Hai kết luận cần hành động khác nhau.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: cùng tuổi, rồi tách kênh',
      blocks: [
        {
          kind: 'formula',
          expression: 'Ever 30+ (vintage, MOB) = % khoản vay của vintage đã từng quá hạn ≥ 30 ngày trong MOB tháng đầu',
          note: 'Chỉ có nghĩa khi so **cùng MOB**: vintage T6 mới có 3 tháng nên chỉ so được tới MOB3. Sau đó tách theo kênh để biết thay đổi do **tỷ trọng kênh** (cơ cấu) hay do **tỷ lệ trong kênh**. Tỷ lệ quá hạn của cả danh mục bị pha loãng bởi các vintage cũ và các khoản vay còn trẻ chưa kịp quá hạn.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Xếp vintage theo MOB** và chọn mốc chung (MOB3) cho mọi vintage.',
            '**Đọc hình dạng** đường cong: vintage mới có dốc hơn ở MOB đầu không?',
            '**Cắt theo kênh** và phân rã cơ cấu / tỷ lệ.',
            '**Giả thuyết**: thẩm định lỏng, đổi đối tượng khách, yếu tố vĩ mô; loại trừ bằng kênh còn lại.',
          ],
        },
        {
          kind: 'quiz',
          id: 'vintage-delinquency-curves-compare-q1',
          question: 'Vintage T6 mới có 3 tháng trên sổ. So T6 với T1 như thế nào là hợp lệ?',
          options: [
            {
              id: 'a',
              text: 'So Ever 30+ hiện tại của T6 với Ever 30+ hiện tại của T1.',
              explain: 'T1 đã có tới 8 tháng nên luôn tích lũy nhiều quá hạn hơn; so như vậy làm T6 trông tốt hơn thực tế.',
            },
            {
              id: 'b',
              text: 'So hai vintage ở cùng MOB (ví dụ MOB3: 3,5% so với 1,7%).',
              correct: true,
              explain: 'Đúng. Cùng tuổi loại bỏ lợi thế thời gian, cho thấy T6 xấu gấp khoảng 2 lần ở cùng độ chín.',
            },
            {
              id: 'c',
              text: 'Chờ đến khi T6 đủ 8 tháng mới đánh giá.',
              explain: 'Chờ đợi làm chậm hành động; quá hạn sớm (MOB1–3) đã là tín hiệu có giá trị để cảnh báo.',
            },
          ],
        },
      ],
    },
    {
      id: 'vintage',
      kind: 'analysis',
      title: 'Bước 1 — Đọc các đường vintage cùng MOB',
      blocks: [
        {
          kind: 'table',
          title: 'Ever 30+ (%) theo vintage và MOB (tính đến cuối T9)',
          columns: [
            { key: 'v', label: 'Vintage' },
            { key: 'm1', label: 'MOB1', align: 'right' },
            { key: 'm2', label: 'MOB2', align: 'right' },
            { key: 'm3', label: 'MOB3', align: 'right' },
            { key: 'm4', label: 'MOB4', align: 'right' },
            { key: 'm5', label: 'MOB5', align: 'right' },
            { key: 'm6', label: 'MOB6', align: 'right' },
          ],
          rows: [
            { v: 'T1', m1: '0,2', m2: '0,9', m3: '1,7', m4: '2,5', m5: '3,1', m6: '3,6' },
            { v: 'T2', m1: '0,2', m2: '0,9', m3: '1,8', m4: '2,7', m5: '3,3', m6: '3,8' },
            { v: 'T3', m1: '0,2', m2: '1,0', m3: '1,9', m4: '2,8', m5: '3,4', m6: '3,9' },
            { v: 'T4', m1: '0,2', m2: '1,1', m3: '2,2', m4: '3,2', m5: '3,9', m6: '—' },
            { v: 'T5', m1: '0,3', m2: '1,4', m3: '2,8', m4: '4,0', m5: '—', m6: '—' },
            { v: 'T6', m1: '0,4', m2: '1,8', m3: '3,5', m4: '—', m5: '—', m6: '—' },
          ],
          highlight: [{ row: 5, tone: 'negative' }, { row: 4, tone: 'warning' }],
          caption: 'Dấu "—" là chưa đủ tuổi quan sát. T1–T3 gần như chồng nhau; từ T4 trở đi mỗi vintage xấu hơn vintage trước từ MOB2 trở đi, và xấu từ rất sớm (MOB1 cũng tăng từ T5).',
        },
        {
          kind: 'chart',
          title: 'Ever 30+ (%) trong 3 tháng đầu trên sổ',
          type: 'line',
          xKey: 'mob',
          unit: '%',
          series: [
            { key: 't1', label: 'T1' },
            { key: 't3', label: 'T3' },
            { key: 't5', label: 'T5' },
            { key: 't6', label: 'T6' },
          ],
          data: [
            { mob: 'MOB1', t1: 0.2, t3: 0.2, t5: 0.3, t6: 0.4 },
            { mob: 'MOB2', t1: 0.9, t3: 1.0, t5: 1.4, t6: 1.8 },
            { mob: 'MOB3', t1: 1.7, t3: 1.9, t5: 2.8, t6: 3.5 },
          ],
          caption: 'Chỉ vẽ tới MOB3 vì T6 mới có 3 tháng. Độ dốc của T6 gấp khoảng 2 lần T1: vấn đề không chỉ ở mức mà ở tốc độ xấu đi.',
        },
        {
          kind: 'quiz',
          id: 'vintage-delinquency-curves-compare-q2',
          question: 'Từ bảng vintage, bạn kết luận gì và bước tiếp theo là gì?',
          options: [
            {
              id: 'a',
              text: 'Chất lượng giải ngân xấu đi từ T4; bước tiếp là xem nó đến từ kênh nào hoặc nhóm khách nào.',
              correct: true,
              explain: 'Đúng. Cùng MOB cho thấy xu hướng xấu đi rõ từ T4, và đã xấu từ MOB1–2; cần cắt phân khúc để tìm nguồn.',
            },
            {
              id: 'b',
              text: 'Chưa kết luận được vì T5 và T6 chưa đủ 6 tháng.',
              explain: 'Dữ liệu đến MOB3 đã đủ cho thấy chênh lệch lớn so với các vintage cũ (3,5% so với 1,7%).',
            },
            {
              id: 'c',
              text: 'Dashboard tổng quá hạn ổn nên không có vấn đề.',
              explain: 'Tổng danh mục bị pha loãng bởi vintage cũ và khoản vay còn trẻ, nên che xu hướng của các vintage mới.',
            },
          ],
        },
      ],
    },
    {
      id: 'channel',
      kind: 'analysis',
      title: 'Bước 2 — Cắt theo kênh: cơ cấu hay chất lượng?',
      blocks: [
        {
          kind: 'table',
          title: 'Ever 30+ tại MOB3 theo kênh và tỷ trọng giải ngân',
          columns: [
            { key: 'v', label: 'Vintage' },
            { key: 'share', label: 'Tỷ trọng đại lý', align: 'right' },
            { key: 'd', label: 'Đại lý (%)', align: 'right' },
            { key: 'o', label: 'Trực tuyến (%)', align: 'right' },
            { key: 'all', label: 'Tổng (%)', align: 'right' },
          ],
          rows: [
            { v: 'T1', share: '30%', d: '3,0', o: '1,2', all: '1,74' },
            { v: 'T2', share: '35%', d: '3,0', o: '1,2', all: '1,83' },
            { v: 'T3', share: '40%', d: '3,0', o: '1,2', all: '1,92' },
            { v: 'T4', share: '50%', d: '3,2', o: '1,2', all: '2,20' },
            { v: 'T5', share: '60%', d: '3,8', o: '1,2', all: '2,76' },
            { v: 'T6', share: '70%', d: '4,5', o: '1,2', all: '3,51' },
          ],
          highlight: [{ row: 5, tone: 'negative' }],
          caption: 'Kênh trực tuyến ổn định ở 1,2% mọi vintage. Kênh đại lý đứng ở 3,0% đến T3 rồi tăng lên 4,5% ở T6.',
        },
        {
          kind: 'table',
          title: 'Phân rã mức tăng MOB3 từ T1 đến T6 (+1,77 điểm)',
          columns: [
            { key: 'item', label: 'Thành phần' },
            { key: 'calc', label: 'Cách tính', align: 'right' },
            { key: 'val', label: 'Điểm %', align: 'right' },
          ],
          rows: [
            { item: 'T1', calc: '0,30×3,0 + 0,70×1,2', val: '1,74' },
            { item: 'Hiệu ứng cơ cấu (kênh đại lý tăng 30% → 70%)', calc: '(0,70 − 0,30) × (3,0 − 1,2)', val: '+0,72 (40,7%)' },
            { item: 'Hiệu ứng tỷ lệ (đại lý xấu đi 3,0% → 4,5%)', calc: '0,70 × (4,5 − 3,0)', val: '+1,05 (59,3%)' },
            { item: 'T6', calc: '0,70×4,5 + 0,30×1,2', val: '3,51' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Khoảng 41% do cơ cấu kênh (đại lý vốn rủi ro hơn), 59% do chất lượng của chính kênh đại lý xấu đi. Kênh trực tuyến không đóng góp.',
        },
        {
          kind: 'table',
          title: 'Giả thuyết cho kênh đại lý và cách kiểm tra',
          columns: [
            { key: 'h', label: 'Giả thuyết' },
            { key: 'predict', label: 'Nếu đúng, ta sẽ thấy' },
            { key: 'test', label: 'Dữ liệu / kiểm tra' },
          ],
          rows: [
            {
              h: 'H1. Thẩm định lỏng khi đẩy mạnh đại lý (đổi quy trình, chỉ tiêu doanh số)',
              predict: 'Điểm tín dụng đầu vào thấp hơn, tỷ lệ phê duyệt ngoại lệ cao hơn, xấu đi tập trung ở một số đại lý',
              test: 'Điểm tín dụng, ngoại lệ, và Ever 30+ theo từng đại lý',
            },
            {
              h: 'H2. Yếu tố vĩ mô/mùa vụ làm mọi người trả chậm hơn',
              predict: 'Kênh trực tuyến cũng xấu đi cùng thời điểm',
              test: 'Trực tuyến ổn định 1,2% → giả thuyết bị yếu',
            },
            {
              h: 'H3. Gian lận đầu vào (hồ sơ giả) ở đại lý',
              predict: 'Ever 30+ rất cao ngay MOB1 và tập trung ở vài đại lý',
              test: 'MOB1 tăng từ 0,2% lên 0,4%; cần xem theo đại lý và kiểm tra hồ sơ',
            },
          ],
          caption: 'H2 bị bác bỏ bởi kênh trực tuyến; H1 và H3 cần dữ liệu theo đại lý để phân biệt.',
        },
        {
          kind: 'quiz',
          id: 'vintage-delinquency-curves-compare-q3',
          question: 'Biện pháp nào phù hợp nhất với kết quả?',
          options: [
            {
              id: 'a',
              text: 'Siết thẩm định đồng đều ở mọi kênh.',
              explain: 'Kênh trực tuyến ổn định; siết đồng đều làm giảm doanh số ở kênh tốt mà không giải quyết vấn đề đại lý.',
            },
            {
              id: 'b',
              text: 'Tập trung vào kênh đại lý: xem theo từng đại lý, thắt chặt tiêu chí và kiểm tra gian lận ở đại lý xấu, giữ nguyên kênh trực tuyến.',
              correct: true,
              explain: 'Đúng. Can thiệp có mục tiêu theo nguyên nhân được tách ra, kèm giám sát vintage mới.',
            },
            {
              id: 'c',
              text: 'Dừng kênh đại lý hoàn toàn.',
              explain: 'Quá mạnh: đến T3 kênh đại lý ổn định ở 3,0%, có thể vẫn sinh lời; cần xem lợi nhuận và can thiệp có mục tiêu.',
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
          md: '**Kết luận:** Vintage T6 xấu gấp khoảng 2 lần T1 ở cùng MOB3 (3,5% so với 1,7%). Khoảng **41% do cơ cấu** (đại lý tăng từ 30% lên 70% tỷ trọng, vốn rủi ro hơn) và **59% do chất lượng kênh đại lý xấu đi** (3,0% → 4,5%). Kênh trực tuyến không đổi. Cần can thiệp vào kênh đại lý và theo dõi vintage mới sớm ở MOB1–MOB2.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Phân tích theo từng đại lý: điểm tín dụng đầu vào, tỷ lệ ngoại lệ, Ever 30+ MOB1–MOB3; kiểm tra hồ sơ ở đại lý có MOB1 cao bất thường',
              owner: 'Trưởng phòng rủi ro + Kiểm soát nội bộ',
              metric: 'Ever 30+ MOB3 theo đại lý; tỷ lệ ngoại lệ',
              threshold: 'Đại lý có MOB3 > 5,0% hoặc gấp 1,5 lần trung bình kênh bị tạm giảm hạn mức giải ngân',
            },
            {
              action: 'Đặt giới hạn tỷ trọng kênh đại lý và ngưỡng chất lượng cho phép tăng; thắt chặt tiêu chí điểm tín dụng cho đại lý',
              owner: 'Ủy ban tín dụng',
              metric: 'Tỷ trọng đại lý; Ever 30+ MOB3 của vintage đại lý',
              threshold: 'Đại lý ≤ 55% tỷ trọng cho tới khi Ever 30+ MOB3 của kênh về ≤ 3,5%',
            },
            {
              action: 'Báo cáo vintage theo kênh ở MOB1/MOB2/MOB3 hằng tháng, thay vì tổng quá hạn',
              owner: 'Data/Analytics',
              metric: 'Ever 30+ theo vintage × kênh × MOB',
              threshold: 'Cảnh báo khi MOB2 của vintage mới cao hơn trung bình 3 vintage trước > 20%',
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
              title: 'Nhìn tỷ lệ quá hạn của cả danh mục',
              why: 'Danh mục bị pha loãng bởi vintage cũ và khoản vay còn trẻ; chất lượng giải ngân xấu đi chỉ hiện ra sau nhiều tháng.',
              instead: 'Theo dõi vintage cùng MOB, đặc biệt MOB1–MOB3.',
            },
            {
              title: 'So vintage khác tuổi',
              why: 'Vintage cũ có nhiều tháng tích lũy hơn nên luôn trông xấu hơn vintage mới.',
              instead: 'So đúng cùng MOB và nêu rõ các ô chưa đủ tuổi.',
            },
            {
              title: 'Kết luận "chất lượng xấu đi" mà không tách kênh',
              why: 'Một phần mức xấu đi có thể chỉ do cơ cấu: kênh rủi ro hơn tăng tỷ trọng.',
              instead: 'Phân rã thành hiệu ứng cơ cấu và hiệu ứng tỷ lệ trước khi chọn hành động.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'So vintage ở cùng MOB; ô chưa đủ tuổi phải để trống, không so với vintage cũ hơn.',
    'Phân rã mức xấu đi thành hiệu ứng cơ cấu (tỷ trọng kênh) và hiệu ứng tỷ lệ (chất lượng trong kênh) để chọn can thiệp đúng.',
    'Dùng kênh còn lại ổn định để bác bỏ giả thuyết vĩ mô, và dùng MOB đầu làm cảnh báo sớm.',
  ],
  references: [
    {
      title: 'Principles for the Management of Credit Risk',
      publisher: 'Basel Committee on Banking Supervision (BIS)',
      url: 'https://www.bis.org/publ/bcbs75.htm',
      note: 'Văn bản của Ủy ban Basel về nguyên tắc quản lý rủi ro tín dụng, trong đó có theo dõi chất lượng danh mục và tín dụng mới cấp.',
    },
    {
      title: 'Uniform Retail-Credit Classification and Account-Management Policy',
      publisher: 'Federal Reserve Board',
      url: 'https://www.federalreserve.gov/frrs/guidance/uniform-retail-credit-classification-and-account-management-policy.htm',
      note: 'Chính sách của cơ quan quản lý Mỹ về phân loại nợ bán lẻ theo số ngày quá hạn (ví dụ phân loại khoản vay quá hạn 90 ngày), nền tảng của các mốc DPD.',
    },
    {
      title: 'Cohort analysis',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Cohort_analysis',
      note: 'Khái niệm phân tích cohort, cơ sở của việc so vintage theo cùng độ tuổi.',
    },
  ],
}
