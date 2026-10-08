import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — danh mục vay tiêu dùng tín chấp; so snapshot cuối T3 và cuối T9/2026.
 * "DPD30+" = dư nợ quá hạn từ 30 ngày trở lên / tổng dư nợ. Nhóm tuổi tính theo tháng trên sổ (MOB).
 *   Snapshot T3: dư nợ 1.000 tỷ = 400 (MOB 0–3) + 400 (MOB 4–9) + 200 (MOB 10+); tỷ lệ DPD30+ 0,8% / 3,6% / 5,5%
 *                DPD30+ = 3,2 + 14,4 + 11,0 = 28,6 tỷ → 2,86% (≈ 2,9%)
 *   Snapshot T9: dư nợ 1.050 tỷ = 150 + 450 + 450 (tỷ trọng 14,3% / 42,9% / 42,9%); tỷ lệ 1,5% / 3,7% / 5,5%
 *                DPD30+ = 2,25 + 16,65 + 24,75 = 43,65 tỷ → 4,16% (≈ 4,2%) → dashboard: +1,3 điểm %
 *   Tách: giữ tỷ lệ T3, dùng tỷ trọng T9 → 0,8×150 + 3,6×450 + 5,5×450 = 42,15 tỷ → 4,01%
 *         Hiệu ứng tuổi (mix) = 4,01 − 2,86 = +1,15 điểm % · Hiệu ứng tỷ lệ (cohort mới) = 4,16 − 4,01 = +0,14 (MOB 0–3: 0,10 · MOB 4–9: 0,04)
 *   Lỗi dữ liệu T9: tái cơ cấu 6 tỷ (đang B2, bị reset DPD về 0) + đảo nợ 4 tỷ (khoản B1 được tất toán bằng khoản vay mới)
 *         → DPD30+ đã chỉnh = 43,65 + 6 + 4 = 53,65 tỷ → 5,11% (+2,25 điểm % so với T3): tuổi 1,15 · cohort 0,14 · dữ liệu 0,95 (0,57 + 0,38)
 *   Roll rate theo tháng (dư nợ): B1 đầu kỳ 40 tỷ → B0 18 / B2 22 (55%); B2 đầu kỳ 30 tỷ → B3 18 (60%) / B0 6 / tái cơ cấu 6
 *         Đã chỉnh: B1→B2 = (22 + 4)/40 = 65% ; B2→B3 = (18 + 6)/30 = 80%
 *   Vintage (DPD30+ dư nợ tại MOB3): T1 1,2 · T2 1,1 · T3 1,3 · T4 1,2 · T5 1,8 · T6 2,0 ; tại MOB6: T1 3,1 · T2 3,0 · T3 3,2
 */
export const vintageRollRate: CaseStudy = {
  id: 'vintage-roll-rate',
  title: 'Nợ quá hạn tổng tăng: danh mục già đi hay cohort mới xấu đi?',
  domain: 'lending',
  level: 'mid',
  minutes: 12,
  skills: ['cohort', 'credit-risk', 'data-quality'],
  question:
    'Tỷ lệ dư nợ quá hạn từ 30 ngày tăng từ 2,9% lên 4,2% trong sáu tháng. Có bao nhiêu phần là danh mục già đi bình thường, bao nhiêu là chất lượng cohort mới xấu đi, và dữ liệu có đang che điều gì không?',
  summary:
    'Tách số tổng bằng vintage (cohort theo tháng giải ngân, so cùng tuổi) và roll rate giữa các bucket quá hạn, rồi kiểm tra tái cơ cấu và đảo nợ có làm bucket sai không.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng.* Bạn là analyst rủi ro ở một công ty tài chính tiêu dùng cho vay tín chấp. Báo cáo tháng 9 gây lo ngại: **tỷ lệ dư nợ DPD30+ tăng từ 2,9% lên 4,2%**. Trưởng phòng Rủi ro hỏi hai câu: *"Chất lượng tín dụng xấu đi thật hay danh mục chỉ lớn tuổi hơn?"* và *"Dashboard có tin được không?"* Từ tháng 5, công ty mở thêm một kênh đối tác bán vay; từ tháng 7, bộ phận thu hồi bắt đầu tái cơ cấu một số khoản. Số liệu dưới đây là **mô phỏng**:',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'DPD30+ / dư nợ (cuối T3)', value: '2,9%', tone: 'neutral', note: '28,6 / 1.000 tỷ đ' },
            { label: 'DPD30+ / dư nợ (cuối T9)', value: '4,2%', delta: '+1,3 điểm %', tone: 'negative', note: '43,65 / 1.050 tỷ đ' },
            { label: 'Dư nợ tuổi ≥ 10 tháng', value: '43%', delta: 'từ 20% ở T3', tone: 'warning' },
            { label: 'Giải ngân mới (tuổi 0–3 tháng)', value: '14% dư nợ', delta: 'từ 40% ở T3', tone: 'warning' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Hai câu hỏi cần tách',
          md: 'Tỷ lệ DPD30+ tổng là **trung bình có trọng số** của các nhóm tuổi khác nhau. Nó có thể tăng dù không khoản vay nào tệ hơn, chỉ vì tỷ trọng khoản vay già (nơi nợ quá hạn đã tích lũy) lớn lên. Việc của bạn là tách phần "tuổi" khỏi phần "chất lượng", rồi kiểm tra xem số liệu có đáng tin không.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: vintage cho câu hỏi "cùng tuổi", roll rate cho câu hỏi "dòng chảy"',
      blocks: [
        {
          kind: 'list',
          style: 'bullets',
          items: [
            '**Vintage**: nhóm khoản vay theo tháng giải ngân, theo dõi tỷ lệ quá hạn theo *tuổi* (MOB). So hai vintage chỉ công bằng khi **cùng MOB**.',
            '**Roll rate**: tỷ lệ dư nợ chuyển từ bucket này sang bucket xấu hơn trong một kỳ (B0 → B1 → B2 → B3, tức 0 → 30 → 60 → 90 ngày). Cho biết quá hạn đang *chảy* nhanh hay chậm, và khâu thu hồi nào hiệu quả.',
            '**Phân rã mix**: tỷ lệ tổng = Σ (tỷ trọng nhóm tuổi × tỷ lệ của nhóm đó). Thay đổi tổng tách thành phần do *tỷ trọng* (danh mục già đi) và phần do *tỷ lệ từng nhóm* (chất lượng).',
            '**Kiểm tra bucket**: tái cơ cấu, gia hạn và đảo nợ có thể làm khoản vay xấu "biến mất" khỏi bucket quá hạn mà rủi ro thật vẫn còn.',
          ],
        },
        {
          kind: 'quiz',
          id: 'vintage-roll-rate-q1',
          question: 'Muốn biết chất lượng cohort giải ngân tháng 5 và tháng 6 có xấu hơn các cohort trước không, phép so sánh nào hợp lệ?',
          options: [
            {
              id: 'a',
              text: 'So tỷ lệ DPD30+ hiện tại của từng cohort trên toàn dư nợ cuối T9.',
              explain:
                'Cohort tháng 1 đã 8 tháng tuổi, cohort tháng 6 mới 3 tháng. Khoản vay già luôn có tỷ lệ quá hạn cao hơn nên phép so này trộn lẫn tuổi với chất lượng.',
            },
            {
              id: 'b',
              text: 'So tỷ lệ DPD30+ của mỗi cohort tại cùng một tháng trên sổ, ví dụ MOB3.',
              correct: true,
              explain:
                'Đúng. Cùng MOB loại bỏ hiệu ứng tuổi. Nếu T5 và T6 cao hơn T1–T4 ở MOB3 thì đó là dấu hiệu chất lượng cohort mới xấu đi, không phải do danh mục già đi.',
            },
            {
              id: 'c',
              text: 'So tổng số khoản quá hạn của từng cohort.',
              explain: 'Số tuyệt đối phụ thuộc quy mô cohort và độ dài thời gian quan sát. Cần chia cho mẫu số (dư nợ hoặc số khoản giải ngân của chính cohort đó).',
            },
          ],
        },
      ],
    },
    {
      id: 'ageing',
      kind: 'analysis',
      title: 'Bước 1 — Phân rã theo nhóm tuổi: phần lớn mức tăng là danh mục già đi',
      blocks: [
        {
          kind: 'table',
          title: 'Dư nợ và DPD30+ theo nhóm tuổi (mô phỏng)',
          columns: [
            { key: 'grp', label: 'Nhóm tuổi (MOB)' },
            { key: 'w3', label: 'Dư nợ T3 (tỷ trọng)', align: 'right' },
            { key: 'r3', label: 'DPD30+ T3', align: 'right' },
            { key: 'w9', label: 'Dư nợ T9 (tỷ trọng)', align: 'right' },
            { key: 'r9', label: 'DPD30+ T9', align: 'right' },
          ],
          rows: [
            { grp: '0–3', w3: '400 tỷ (40%)', r3: '0,8%', w9: '150 tỷ (14,3%)', r9: '1,5%' },
            { grp: '4–9', w3: '400 tỷ (40%)', r3: '3,6%', w9: '450 tỷ (42,9%)', r9: '3,7%' },
            { grp: '≥ 10', w3: '200 tỷ (20%)', r3: '5,5%', w9: '450 tỷ (42,9%)', r9: '5,5%' },
            { grp: 'Tổng', w3: '1.000 tỷ', r3: '2,86%', w9: '1.050 tỷ', r9: '4,16%' },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: 'Giải ngân chậm lại nên nhóm tuổi ≥ 10 tháng, nơi nợ quá hạn đã tích lũy, từ 20% lên 43% dư nợ.',
        },
        {
          kind: 'chart',
          title: 'Phân rã mức tăng DPD30+ trên dashboard (điểm %)',
          type: 'bar',
          xKey: 'part',
          unit: ' điểm %',
          series: [{ key: 'pts', label: 'Đóng góp' }],
          data: [
            { part: 'Danh mục già đi (mix)', pts: 1.15 },
            { part: 'Cohort mới xấu hơn (tỷ lệ)', pts: 0.14 },
          ],
          caption:
            'Giữ nguyên tỷ lệ T3 nhưng dùng tỷ trọng T9 cho 4,01% (+1,15 điểm %). Phần còn lại +0,14 điểm % đến từ chính các nhóm, chủ yếu nhóm tuổi 0–3 (1,5% so với 0,8%).',
        },
        {
          kind: 'quiz',
          id: 'vintage-roll-rate-q2',
          question: 'Với phân rã trên, kết luận nào đúng nhất cho phần "tăng trên dashboard"?',
          options: [
            {
              id: 'a',
              text: 'Chất lượng tín dụng xấu đi trên toàn danh mục, cần siết duyệt vay ngay.',
              explain: 'Nhóm tuổi 4–9 và ≥ 10 gần như không đổi tỷ lệ (3,6 → 3,7%; 5,5 → 5,5%). Siết toàn bộ là phản ứng quá tay với tín hiệu không có ở phần lớn danh mục.',
            },
            {
              id: 'b',
              text: 'Khoảng 90% mức tăng 1,3 điểm % đến từ việc danh mục già đi (hiệu ứng mix); tín hiệu chất lượng nằm ở nhóm tuổi 0–3 và cần kiểm tra bằng vintage.',
              correct: true,
              explain:
                'Đúng. 1,15 / 1,30 ≈ 88% là hiệu ứng tuổi, hầu như không phản ánh việc từng khoản vay tệ hơn. Phần nhỏ còn lại tập trung ở khoản vay trẻ, nên bước tiếp theo là so vintage cùng MOB.',
            },
            {
              id: 'c',
              text: 'Mức tăng hoàn toàn do giải ngân chậm lại, nên không có vấn đề chất lượng.',
              explain: 'Hiệu ứng tuổi lớn nhưng không phải toàn bộ: nhóm tuổi 0–3 có DPD30+ 1,5% so với 0,8% cùng nhóm ở T3. Bỏ qua tín hiệu này có thể bỏ lỡ cảnh báo sớm.',
            },
          ],
        },
      ],
    },
    {
      id: 'vintage',
      kind: 'analysis',
      title: 'Bước 2 — Vintage cùng MOB: hai cohort mới nhất xấu hơn rõ rệt',
      blocks: [
        {
          kind: 'table',
          title: 'DPD30+ dư nợ theo vintage và tuổi (mô phỏng)',
          columns: [
            { key: 'vin', label: 'Vintage' },
            { key: 'm3', label: 'MOB3', align: 'right' },
            { key: 'm6', label: 'MOB6', align: 'right' },
          ],
          rows: [
            { vin: 'T1/2026', m3: '1,2%', m6: '3,1%' },
            { vin: 'T2/2026', m3: '1,1%', m6: '3,0%' },
            { vin: 'T3/2026', m3: '1,3%', m6: '3,2%' },
            { vin: 'T4/2026', m3: '1,2%', m6: '—' },
            { vin: 'T5/2026 (kênh đối tác)', m3: '1,8%', m6: '—' },
            { vin: 'T6/2026 (kênh đối tác)', m3: '2,0%', m6: '—' },
          ],
          highlight: [
            { row: 4, tone: 'negative' },
            { row: 5, tone: 'negative' },
          ],
          caption: '"—" là chưa đủ tuổi quan sát. T1–T4 ở MOB3 dao động 1,1–1,3%; T5 và T6 cao hơn khoảng 50–65%.',
        },
        {
          kind: 'text',
          md: 'Dấu hiệu bắt đầu đúng vintage đầu tiên có kênh đối tác. Đây là giả thuyết cần kiểm tra thêm (cắt theo kênh × band điểm), không phải kết luận. Vì cohort còn trẻ, **đường cong còn đang ở phần đầu**: MOB3 cao hơn thường kéo MOB6 cao hơn, nhưng mức tăng chính xác thì chưa biết.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Hiệu ứng tuổi là *bình thường và dự đoán được* nên không cần báo động. Cohort xấu đi mới là điều cần hành động. Báo cáo chỉ đưa số tổng sẽ khiến ban lãnh đạo hoặc báo động nhầm (mix), hoặc yên tâm nhầm khi tín hiệu thật bị pha loãng trong danh mục lớn.',
        },
      ],
    },
    {
      id: 'roll',
      kind: 'analysis',
      title: 'Bước 3 — Roll rate và lỗi dữ liệu: bucket đang bị làm sạch giả tạo',
      blocks: [
        {
          kind: 'table',
          title: 'Roll rate hằng tháng theo dư nợ (mô phỏng)',
          columns: [
            { key: 'move', label: 'Chuyển bucket' },
            { key: 'mar', label: 'T3', align: 'right' },
            { key: 'sepRep', label: 'T9 báo cáo', align: 'right' },
            { key: 'sepAdj', label: 'T9 đã chỉnh', align: 'right' },
          ],
          rows: [
            { move: 'B0 (0–29 ngày) → B1 (30–59)', mar: '1,0%', sepRep: '1,4%', sepAdj: '1,4%' },
            { move: 'B1 → B2 (60–89)', mar: '62%', sepRep: '55%', sepAdj: '65%' },
            { move: 'B2 → B3 (90+)', mar: '78%', sepRep: '60%', sepAdj: '80%' },
          ],
          highlight: [
            { row: 1, tone: 'warning' },
            { row: 2, tone: 'warning' },
          ],
          caption:
            'Báo cáo cho thấy B1→B2 và B2→B3 "cải thiện", nhưng chỉ vì 6 tỷ khoản B2 được tái cơ cấu (reset DPD về 0) và 4 tỷ khoản B1 được tất toán bằng khoản vay mới (đảo nợ). Tính lại: (18 + 6)/30 = 80% và (22 + 4)/40 = 65%.',
        },
        {
          kind: 'chart',
          title: 'DPD30+ / dư nợ cuối T9: dashboard so với đã chỉnh',
          type: 'bar',
          xKey: 'view',
          unit: '%',
          series: [{ key: 'rate', label: 'DPD30+' }],
          data: [
            { view: 'T3 (dashboard)', rate: 2.86 },
            { view: 'T9 (dashboard)', rate: 4.16 },
            { view: 'T9 (đã chỉnh)', rate: 5.11 },
          ],
          caption: 'Cộng lại 6 tỷ tái cơ cấu và 4 tỷ đảo nợ: 53,65 / 1.050 = 5,11%. Mức tăng thật là +2,25 điểm %, trong đó tuổi 1,15, cohort mới 0,14 và dữ liệu bị che 0,95.',
        },
        {
          kind: 'quiz',
          id: 'vintage-roll-rate-q3',
          question: 'Roll rate B2 → B3 giảm từ 78% xuống 60%. Việc đầu tiên nên làm là gì?',
          options: [
            {
              id: 'a',
              text: 'Ghi nhận thu hồi hiệu quả hơn và dùng làm thành tích của bộ phận thu hồi.',
              explain: 'Chưa có bằng chứng. Cần xem các khoản "rời" B2 đi đâu: thanh toán thật, hay chỉ bị reset bucket do tái cơ cấu hoặc đảo nợ.',
            },
            {
              id: 'b',
              text: 'Tách các khoản rời bucket theo lý do (thanh toán, tái cơ cấu, đảo nợ, xóa nợ) và tính lại roll rate coi khoản tái cơ cấu/đảo nợ là chưa hồi phục.',
              correct: true,
              explain:
                'Đúng. Ở đây 6 tỷ tái cơ cấu và 4 tỷ đảo nợ, khi tính lại, roll rate B2→B3 là 80%, B1→B2 là 65%, không cải thiện so với T3. Cải thiện trên báo cáo chỉ là artifact của cách ghi bucket.',
            },
            {
              id: 'c',
              text: 'Bỏ roll rate và chỉ dùng DPD30+ tổng vì đơn giản hơn.',
              explain: 'DPD30+ tổng cũng bị tái cơ cấu/đảo nợ làm sai. Roll rate giúp nhìn ra sự bất thường này vì nó thay đổi ngược với vintage.',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Quy định phân loại nợ cũng cần đọc đúng',
          md: 'Theo Thông tư 11/2021/TT-NHNN, khoản vay được cơ cấu lại thời hạn trả nợ có nhóm nợ riêng, không đồng nghĩa với "sạch" như bucket DPD nội bộ. Cần phân biệt **DPD nội bộ** (dùng để điều hành thu hồi) với **nhóm nợ theo quy định** (dùng để trích lập dự phòng), và ghi cờ tái cơ cấu rõ ràng trong dữ liệu.',
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
          md: '**Kết luận cho Trưởng phòng Rủi ro:** Mức tăng 1,3 điểm % trên dashboard phần lớn (khoảng 1,15) là danh mục già đi, bình thường và dự đoán được. Tín hiệu đáng lo gồm hai thứ khác: **cohort T5–T6 từ kênh đối tác xấu hơn 50–65% ở MOB3**, và **dữ liệu đang che khoảng 0,95 điểm %** do tái cơ cấu và đảo nợ. Mức DPD30+ đã chỉnh là khoảng 5,1%, không phải 4,2%.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Cắt vintage T5–T6 theo kênh × band điểm; tạm giới hạn hạn mức hoặc hạ cap giải ngân kênh đối tác cho đến khi MOB6 của T5 có số liệu',
              owner: 'Risk Analytics + Partnership',
              metric: 'DPD30+ @MOB3 và @MOB6 của kênh đối tác so với kênh trực tiếp',
              threshold: 'Rà soát kênh nếu @MOB3 cao hơn đường chuẩn (1,1–1,3%) hơn 30% ở hai vintage liên tiếp',
            },
            {
              action: 'Thêm cờ tái cơ cấu và đảo nợ vào bảng khoản vay; báo cáo DPD30+ và roll rate theo hai cách (có và không loại trừ khoản bị reset)',
              owner: 'Data Engineering + Collections',
              metric: 'Chênh lệch DPD30+ giữa hai cách tính',
              threshold: 'Báo cáo chính thức hiển thị cả hai; cảnh báo nếu chênh lệch > 0,3 điểm %',
            },
            {
              action: 'Chuyển dashboard chính sang vintage theo MOB và phân rã mix theo nhóm tuổi thay vì chỉ tỷ lệ tổng',
              owner: 'Risk Analytics',
              metric: 'Thời gian phát hiện cohort xấu bất thường',
              threshold: 'Phát hiện ở MOB2–3 thay vì khi tỷ lệ tổng đã tăng',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Mỗi hành động trỏ về đúng một nguyên nhân: cohort xấu đi (xử lý ở nguồn), dữ liệu sai (xử lý ở định nghĩa), và dashboard dễ gây hiểu lầm (xử lý ở cách báo cáo). Không hành động nào dựa vào số tổng chưa tách.',
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
              title: 'Đọc tỷ lệ quá hạn tổng như thước đo chất lượng',
              why: 'Tỷ lệ tổng bị chi phối bởi cơ cấu tuổi. Giải ngân chậm lại làm tỷ lệ tăng dù không khoản vay nào tệ hơn; giải ngân tăng nhanh làm tỷ lệ giảm giả tạo.',
              instead: 'Phân rã theo nhóm tuổi (mix vs tỷ lệ) và so vintage cùng MOB trước khi kết luận.',
            },
            {
              title: 'Tin roll rate khi bucket bị reset',
              why: 'Tái cơ cấu, gia hạn và đảo nợ đưa khoản đang xấu về bucket 0 mà không có thanh toán thật, làm roll rate "cải thiện" và DPD30+ thấp giả.',
              instead: 'Có cờ cho khoản bị cơ cấu hoặc đảo nợ, theo dõi riêng và báo cáo hai phiên bản của chỉ số.',
            },
            {
              title: 'Kết luận về cohort còn trẻ quá sớm',
              why: 'Cohort T5–T6 mới 3–4 tháng tuổi: MOB3 cao hơn là tín hiệu sớm, chưa phải mức tổn thất cuối cùng. Kết luận quá mức dễ dẫn tới siết hoặc nới sai.',
              instead: 'Nêu độ tin cậy, đặt ngưỡng theo dõi ở MOB6 và so với đường cong vintage cũ, thay vì khẳng định con số cuối.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Tỷ lệ quá hạn tổng là trung bình theo nhóm tuổi: tách mix (danh mục già đi) khỏi tỷ lệ từng nhóm trước khi nói chất lượng xấu đi.',
    'So cohort bằng vintage cùng MOB; roll rate giữa các bucket cho biết quá hạn đang chảy nhanh hay chậm.',
    'Tái cơ cấu và đảo nợ có thể làm bucket và roll rate sai: gắn cờ, tính lại và báo cáo hai phiên bản trước khi tin số.',
  ],
  references: [
    {
      title: 'Uniform Retail Credit Classification and Account Management Policy',
      publisher: 'Federal Reserve Board (FFIEC)',
      url: 'https://www.federalreserve.gov/frrs/guidance/uniform-retail-credit-classification-and-account-management-policy.htm',
      note: 'Chuẩn phân loại nợ bán lẻ theo số ngày quá hạn và điều kiện cho re-aging, gia hạn, tái cơ cấu: lý do bucket có thể bị làm sai nếu không kiểm soát.',
    },
    {
      title: 'Thông tư 11/2021/TT-NHNN về phân loại tài sản có, mức trích lập dự phòng rủi ro',
      publisher: 'Ngân hàng Nhà nước Việt Nam (bản đăng trên LuatVietnam)',
      url: 'https://luatvietnam.vn/tai-chinh/thong-tu-11-2021-tt-nhnn-ngan-hang-nha-nuoc-viet-nam-206806-d1.html',
      note: 'Quy định nhóm nợ 1–5 theo số ngày quá hạn và việc cơ cấu lại thời hạn trả nợ. Đây là bản đăng lại trên trang pháp luật, không phải cổng chính thức của NHNN.',
    },
    {
      title: 'Guidance on credit risk and accounting for expected credit losses',
      publisher: 'Basel Committee on Banking Supervision (BIS)',
      url: 'https://www.bis.org/bcbs/publ/d350.htm',
      note: 'Nguyên tắc dùng dữ liệu tổn thất lịch sử, phân nhóm danh mục và đánh giá tín dụng khi ước lượng tổn thất kỳ vọng.',
    },
  ],
}
