import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — Quý 3, tập đoàn giả định có 4 công ty con (A, B, C, D), đơn vị tỷ đ, đã kiểm tra khớp nhau:
 *   Doanh thu: A 600 · B 480 · C 690 · D 420 → 2.190
 *   EBITDA cơ sở (LN trước thuế + lãi vay + khấu hao, chưa điều chỉnh): A 120 · B 90 · C 150 · D 60 → 420
 *     Bridge nhóm: LNST 210 + thuế TNDN 52 = LNTT 262 · + lãi vay 78 = 340 · + khấu hao & phân bổ 80 = 420 ✓
 *   "EBITDA điều chỉnh" mỗi công ty tự báo (cộng thêm khoản tự chọn):
 *     A +18 chi phí "một lần" → 138 · B +22 chi phí thuê → 112 · C +15 trả lương bằng cổ phiếu (SBC) → 165 · D +9 lỗ tỷ giá → 69
 *     Tổng báo 484 = 420 + 64 (18 + 22 + 15 + 9 = 64) ✓ → biên 484/2.190 = 22,1% (cơ sở 420/2.190 = 19,2%)
 *   Theo định nghĩa chuẩn v1.0:
 *     A: chỉ 12 trong 18 đạt tiêu chí một lần (6 còn lại lặp mọi quý) → 120 + 12 = 132
 *     B: chi phí thuê không được cộng lại → 90
 *     C: SBC không được cộng lại → 150
 *     D: loại chênh tỷ giá CHƯA thực hiện, đối xứng: cộng lỗ 9, trừ lãi 3 (D chỉ cộng lỗ) → 60 + 9 − 3 = 66
 *     Tổng chuẩn 132 + 90 + 150 + 66 = 438 = 420 + 12 + 6 (12 một lần + 6 tỷ giá ròng) ✓ → biên 438/2.190 = 20,0%
 *     Bridge báo cáo → chuẩn: 484 − 6 (A) − 22 (B) − 15 (C) − 3 (D) = 438 ✓
 *   Biên EBITDA báo cáo → chuẩn: A 23,0% → 22,0% · B 23,3% → 18,8% · C 23,9% → 21,7% · D 16,4% → 15,7%
 *     Thứ hạng: C, B, A, D → A, C, B, D
 *   Quỹ thưởng = 1% EBITDA điều chỉnh mỗi công ty (tỷ đ): báo cáo A 1,38 · B 1,12 · C 1,65 · D 0,69 (4,84)
 *     · chuẩn A 1,32 · B 0,90 · C 1,50 · D 0,66 (4,38) → chênh 0,46 tỷ = 460 triệu (0,06 + 0,22 + 0,15 + 0,03)
 */
export const adjustedEbitdaDefinitionContract: CaseStudy = {
  id: 'adjusted-ebitda-definition-contract',
  title: 'Hợp đồng định nghĩa "EBITDA điều chỉnh": bốn công ty con, bốn cách cộng thêm',
  domain: 'accounting',
  level: 'lead',
  minutes: 14,
  skills: ['metric-definition', 'financial-statements', 'tradeoff'],
  question:
    'Bốn công ty con cùng gọi là "EBITDA điều chỉnh" nhưng mỗi nơi cộng thêm một khoản khác nhau, ban lãnh đạo không so sánh được và KPI thưởng bị méo. Làm sao viết một hợp đồng định nghĩa metric (định nghĩa, tiêu chí điều chỉnh, bridge, owner, review hằng quý) để mọi công ty báo cùng một con số?',
  summary:
    'Chuẩn hóa "EBITDA điều chỉnh" thành hợp đồng metric: định nghĩa chuẩn, tiêu chí cho từng khoản được điều chỉnh, bridge từ lợi nhuận kế toán, quy trình review hằng quý và nhịp ra quyết định giữa Finance, FP&A, Kiểm toán nội bộ và HĐQT.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là Group FP&A Lead của một tập đoàn có bốn công ty con. Báo cáo quý 3 gửi HĐQT ghi **EBITDA điều chỉnh 484 tỷ đ**, nhưng khi Kiểm toán nội bộ dựng lại từ lợi nhuận kế toán, EBITDA cơ sở chỉ là **420 tỷ đ**. Phần chênh 64 tỷ đ đến từ bốn khoản mà mỗi công ty tự cộng thêm: A loại "chi phí một lần", B loại chi phí thuê, C loại chi phí trả lương bằng cổ phiếu, D loại chênh lệch tỷ giá. Cả bốn đều có lý do nghe hợp lý, và đều được gọi là "điều chỉnh". Quỹ thưởng của ban điều hành mỗi công ty tính theo con số này.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'EBITDA cơ sở (nhóm)', value: '420 tỷ đ', note: 'Chưa điều chỉnh, dựng từ LNST', tone: 'neutral' },
            { label: 'EBITDA điều chỉnh — tự báo', value: '484 tỷ đ', note: 'Cộng 64 tỷ đ theo 4 cách', tone: 'warning' },
            { label: 'EBITDA điều chỉnh — chuẩn v1.0', value: '438 tỷ đ', note: 'Sau khi áp tiêu chí chung', tone: 'positive' },
            { label: 'Quỹ thưởng bị thổi', value: '460 triệu đ', note: '4,84 tỷ so với 4,38 tỷ', tone: 'negative' },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu là mô phỏng',
          md: 'Tập đoàn, bốn công ty con và mọi con số trong case này là **giả định** để luyện cách viết hợp đồng metric, không phải số của doanh nghiệp thật. Các khái niệm kế toán (IFRS 16, IFRS 2, phân loại thuê VAS 06) là thật; hãy luôn kiểm tra chuẩn mực áp dụng cho doanh nghiệp của bạn.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: "điều chỉnh" là quyền được cấp, không phải quyền tự lấy',
      blocks: [
        {
          kind: 'formula',
          expression: 'EBITDA điều chỉnh = LN trước thuế + lãi vay + khấu hao & phân bổ + các khoản nằm trong danh sách được điều chỉnh (đạt tiêu chí, có bằng chứng, đối xứng)',
          note: 'EBITDA không phải chỉ tiêu theo chuẩn mực kế toán, nên mỗi tập đoàn phải tự viết định nghĩa. Vì vậy hợp đồng metric là thứ duy nhất ngăn "điều chỉnh" thành nút vặn con số.',
        },
        {
          kind: 'list',
          style: 'check',
          items: [
            '**Định nghĩa chuẩn**: điểm xuất phát (LNST hay LN trước thuế), cơ sở lập (VAS hay IFRS), kỳ, đơn vị tiền tệ, quy tắc làm tròn.',
            '**Danh sách khoản được điều chỉnh**: mỗi khoản có tiêu chí viết ra giấy (tính chất, ngưỡng trọng yếu, tần suất, bằng chứng), và nguyên tắc đối xứng (điều chỉnh cả lãi lẫn lỗ).',
            '**Bridge**: bảng nối từ lợi nhuận kế toán đến EBITDA điều chỉnh, mỗi dòng truy được về sổ cái.',
            '**Owner và quyền quyết**: ai giữ định nghĩa, ai duyệt khoản mới, ai kiểm tra độc lập.',
            '**Nhịp review**: kiểm tra mỗi quý, đổi định nghĩa có phiên bản, backtest và re-base mục tiêu.',
          ],
        },
        {
          kind: 'quiz',
          id: 'adjusted-ebitda-definition-contract-q1',
          question: 'Cả bốn công ty đều giải thích được khoản mình cộng lại. Bước đầu tiên hợp lý nhất của người dẫn dắt là gì?',
          options: [
            {
              id: 'a',
              text: 'Chọn công ty có biên EBITDA cao nhất làm chuẩn và yêu cầu ba nơi còn lại làm theo.',
              explain: 'Biên cao có thể chỉ vì cộng nhiều hơn. Chọn chuẩn theo kết quả thay vì theo tiêu chí là đảo ngược vấn đề.',
            },
            {
              id: 'b',
              text: 'Dựng bridge từ lợi nhuận kế toán cho từng công ty, tách từng khoản điều chỉnh rồi đánh giá từng khoản theo tiêu chí thống nhất.',
              correct: true,
              explain: 'Đúng. Bridge cho thấy chính xác 64 tỷ đ đến từ đâu; sau đó mới bàn tiêu chí chung (tính chất, tần suất, bằng chứng, đối xứng) khoản nào qua, khoản nào không.',
            },
            {
              id: 'c',
              text: 'Cấm mọi điều chỉnh và chỉ báo EBITDA cơ sở 420 tỷ đ.',
              explain: 'Đơn giản nhưng không phản ánh được khoản thật sự bất thường (ví dụ chi phí tái cấu trúc một lần), khiến bên điều hành thiếu thông tin về hiệu quả cốt lõi và tìm đường khác để trình bày.',
            },
          ],
        },
      ],
    },
    {
      id: 'bridge',
      kind: 'analysis',
      title: 'Bước 1 — Bridge: từ lợi nhuận kế toán đến hai con số 484 và 438',
      blocks: [
        {
          kind: 'table',
          title: 'Từ lợi nhuận kế toán đến EBITDA điều chỉnh chuẩn (nhóm, tỷ đ)',
          columns: [
            { key: 'line', label: 'Dòng' },
            { key: 'value', label: 'Giá trị', align: 'right' },
            { key: 'note', label: 'Ghi chú' },
          ],
          rows: [
            { line: 'Lợi nhuận sau thuế (LNST)', value: 210, note: 'Báo cáo hợp nhất' },
            { line: '+ Thuế TNDN', value: 52, note: 'LN trước thuế = 262' },
            { line: '+ Chi phí lãi vay', value: 78, note: 'LN trước thuế và lãi vay = 340' },
            { line: '+ Khấu hao và phân bổ', value: 80, note: 'Cộng lại để ra EBITDA cơ sở' },
            { line: '= EBITDA cơ sở', value: 420, note: 'Chưa điều chỉnh' },
            { line: '+ Chi phí một lần đạt tiêu chí (A)', value: 12, note: 'Tái cấu trúc đã được phê duyệt, không lặp lại' },
            { line: '+ Chênh lệch tỷ giá chưa thực hiện, ròng (D)', value: 6, note: 'Lỗ 9 trừ lãi 3, đối xứng' },
            { line: '= EBITDA điều chỉnh chuẩn v1.0', value: 438, note: 'Biên 20,0% trên doanh thu 2.190' },
          ],
          highlight: [{ row: 4, tone: 'neutral' }, { row: 7, tone: 'positive' }],
          caption: 'Mỗi dòng sau EBITDA cơ sở phải có chứng từ và người duyệt. Số chuẩn 438 thấp hơn số tự báo 484 là 46 tỷ đ.',
        },
        {
          kind: 'table',
          title: 'Bốn công ty, bốn cách điều chỉnh (tỷ đ)',
          columns: [
            { key: 'co', label: 'Công ty' },
            { key: 'base', label: 'EBITDA cơ sở', align: 'right' },
            { key: 'claimed', label: 'Khoản tự cộng', align: 'right' },
            { key: 'reported', label: 'Tự báo', align: 'right' },
            { key: 'std', label: 'Chuẩn v1.0', align: 'right' },
            { key: 'diff', label: 'Chênh', align: 'right' },
          ],
          rows: [
            { co: 'A — "chi phí một lần"', base: 120, claimed: '+18', reported: 138, std: 132, diff: -6 },
            { co: 'B — chi phí thuê', base: 90, claimed: '+22', reported: 112, std: 90, diff: -22 },
            { co: 'C — trả lương bằng cổ phiếu', base: 150, claimed: '+15', reported: 165, std: 150, diff: -15 },
            { co: 'D — chênh lệch tỷ giá', base: 60, claimed: '+9', reported: 69, std: 66, diff: -3 },
            { co: 'Tổng', base: 420, claimed: '+64', reported: 484, std: 438, diff: -46 },
          ],
          highlight: [{ row: 4, tone: 'warning' }],
          caption: 'A chỉ đạt 12/18 vì 6 tỷ đ lặp lại mỗi quý. D chỉ cộng lỗ tỷ giá 9 mà giữ lãi 3 trong số: chuẩn yêu cầu loại cả hai nên còn +6 ròng.',
        },
        {
          kind: 'chart',
          title: 'Biên EBITDA: tự báo so với chuẩn v1.0',
          type: 'bar',
          xKey: 'co',
          unit: '%',
          series: [
            { key: 'reported', label: 'Tự báo' },
            { key: 'std', label: 'Chuẩn v1.0' },
          ],
          data: [
            { co: 'A', reported: 23.0, std: 22.0 },
            { co: 'B', reported: 23.3, std: 18.8 },
            { co: 'C', reported: 23.9, std: 21.7 },
            { co: 'D', reported: 16.4, std: 15.7 },
          ],
          caption: 'Thứ hạng đổi từ C, B, A, D sang A, C, B, D. B tụt mạnh nhất (4,5 điểm %) vì phần lớn "thành tích" nằm ở việc đưa chi phí thuê ra ngoài.',
        },
        {
          kind: 'quiz',
          id: 'adjusted-ebitda-definition-contract-q2',
          question: 'Công ty B cộng lại 22 tỷ đ chi phí thuê, lập luận rằng nó giống chi phí tài chính. Chuẩn nên xử lý thế nào?',
          options: [
            {
              id: 'a',
              text: 'Cho phép, vì theo IFRS 16 chi phí thuê đã được tách thành khấu hao và lãi nên EBITDA vốn đã không chứa nó.',
              explain: 'Đúng về mặt IFRS 16 nhưng chỉ khi công ty lập báo cáo theo IFRS 16. Nếu các công ty con lập theo cơ sở khác nhau, cho một nơi cộng lại thì hai công ty cùng thuê một loại tài sản lại có EBITDA khác nhau.',
            },
            {
              id: 'b',
              text: 'Không cho cộng lại: chuẩn tính EBITDA sau chi phí thuê trên một cơ sở duy nhất, và nếu muốn xem số "trước thuê" thì báo thêm một dòng riêng cho cả bốn công ty.',
              correct: true,
              explain: 'Đúng. Điều cần giữ là tính so sánh: cùng một cơ sở cho mọi công ty. Nhu cầu xem số theo cách IFRS 16 được đáp ứng bằng một dòng bổ sung có định nghĩa, chứ không bằng việc mỗi nơi tự chọn.',
            },
            {
              id: 'c',
              text: 'Cho cộng lại nhưng chỉ nếu hợp đồng thuê là thuê tài chính theo VAS 06.',
              explain: 'VAS 06 phân loại thuê tài chính và thuê hoạt động để ghi nhận kế toán; nó không biến chi phí thuê thành khoản điều chỉnh EBITDA tùy ý. Chi phí thuê tài chính vốn đã nằm ở khấu hao và lãi, nên khoản B cộng lại là chi phí thuê hoạt động.',
            },
          ],
        },
      ],
    },
    {
      id: 'criteria',
      kind: 'analysis',
      title: 'Bước 2 — Tiêu chí cho từng khoản được điều chỉnh',
      blocks: [
        {
          kind: 'text',
          md: 'Danh sách khoản **không** nên là danh sách cảm tính. Mỗi khoản phải qua cùng một bộ lọc: *bất thường* (không thuộc hoạt động thường xuyên), *không lặp lại* (không xuất hiện ≥ 2 trong 8 quý gần nhất), *trọng yếu* (đạt ngưỡng), *có bằng chứng* (quyết định phê duyệt, chứng từ), *đối xứng* (lãi và lỗ cùng một quy tắc). Khoản nào không qua được thì ở lại trong EBITDA, nhưng có thể hiện ở dòng "thông tin bổ sung".',
        },
        {
          kind: 'table',
          title: 'Tiêu chí và kết luận cho bốn khoản (hợp đồng v1.0)',
          columns: [
            { key: 'item', label: 'Khoản' },
            { key: 'rule', label: 'Tiêu chí v1.0' },
            { key: 'verdict', label: 'Kết luận' },
          ],
          rows: [
            { item: 'Chi phí một lần (A)', rule: 'Có quyết định phê duyệt, không lặp ≥ 2 lần trong 8 quý, ≥ 2% EBITDA cơ sở của công ty', verdict: 'Được 12/18 tỷ đ; 6 tỷ đ "tư vấn tái tổ chức" lặp mọi quý nên ở lại trong EBITDA' },
            { item: 'Chi phí thuê (B)', rule: 'EBITDA tính sau chi phí thuê, một cơ sở chung; số "trước thuê" chỉ là dòng bổ sung', verdict: 'Không được: 0/22 tỷ đ' },
            { item: 'Trả lương bằng cổ phiếu (C)', rule: 'Là chi phí thật đối với cổ đông (IFRS 2 yêu cầu ghi nhận chi phí); không cộng lại, báo riêng ở dòng bổ sung', verdict: 'Không được: 0/15 tỷ đ' },
            { item: 'Chênh lệch tỷ giá (D)', rule: 'Chỉ loại phần chưa thực hiện từ đánh giá lại số dư; loại cả lãi và lỗ; phần đã thực hiện giữ nguyên', verdict: 'Được ròng 6 tỷ đ (lỗ 9 trừ lãi 3)' },
          ],
          caption: 'Hai khoản bị loại hoàn toàn (B, C) là hai khoản dễ thành "luật riêng" nhất: lập luận hợp lý nhưng chỉ áp dụng cho một công ty.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Đây là trade-off, không phải đáp án duy nhất',
          md: 'Nhiều doanh nghiệp vẫn cộng lại SBC hay báo EBITDA theo IFRS 16, và điều đó không sai nếu **được viết rõ trong định nghĩa và áp dụng cho mọi đơn vị**. Chuẩn ở đây chọn thận trọng (đếm SBC và chi phí thuê như chi phí thật) vì mục đích là so sánh nội bộ và tính thưởng. Điều không chấp nhận được là mỗi công ty con tự chọn một cách. Hãy ghi lý do chọn và các lựa chọn đã cân nhắc trong hợp đồng để lần sau không phải tranh luận lại.',
        },
        {
          kind: 'quiz',
          id: 'adjusted-ebitda-definition-contract-q3',
          question: 'D chỉ cộng lại lỗ tỷ giá 9 tỷ đ nhưng giữ lãi tỷ giá 3 tỷ đ trong số. Vấn đề cốt lõi là gì?',
          options: [
            {
              id: 'a',
              text: 'Tỷ giá không bao giờ nên được điều chỉnh vì là kết quả kinh doanh thật.',
              explain: 'Phần chưa thực hiện (đánh giá lại số dư) thường không phản ánh hiệu quả vận hành kỳ này, nên loại được nếu quy tắc rõ. Vấn đề không nằm ở việc có điều chỉnh, mà ở cách điều chỉnh.',
            },
            {
              id: 'b',
              text: 'Điều chỉnh bất đối xứng: chỉ cộng khoản bất lợi, giữ khoản có lợi, nên số luôn lệch theo hướng đẹp hơn.',
              correct: true,
              explain: 'Đúng. Tiêu chí đối xứng yêu cầu loại cả lãi lẫn lỗ cùng loại. Điều chỉnh một chiều làm EBITDA tăng một cách có hệ thống: ở đây 6 tỷ đ ròng được cộng, nếu đối xứng, đã không thể cộng lỗ mà giữ lãi.',
            },
            {
              id: 'c',
              text: 'Giá trị 9 tỷ đ quá nhỏ nên không cần đưa vào hợp đồng.',
              explain: 'Ngưỡng trọng yếu nên do hợp đồng quy định bằng tiêu chí (ví dụ % EBITDA) áp dụng đều, không phải do từng công ty tự thấy "nhỏ". Hơn nữa lặp lại mỗi quý thì tích lại thành khoản lớn.',
            },
          ],
        },
      ],
    },
    {
      id: 'governance',
      kind: 'analysis',
      title: 'Bước 3 — Owner, review hằng quý và tác động lên KPI thưởng',
      blocks: [
        {
          kind: 'table',
          title: 'Quỹ thưởng 1% EBITDA điều chỉnh (tỷ đ)',
          columns: [
            { key: 'co', label: 'Công ty' },
            { key: 'bonusReported', label: 'Theo số tự báo', align: 'right' },
            { key: 'bonusStd', label: 'Theo chuẩn v1.0', align: 'right' },
            { key: 'diff', label: 'Chênh', align: 'right' },
          ],
          rows: [
            { co: 'A', bonusReported: '1,38', bonusStd: '1,32', diff: '−0,06' },
            { co: 'B', bonusReported: '1,12', bonusStd: '0,90', diff: '−0,22' },
            { co: 'C', bonusReported: '1,65', bonusStd: '1,50', diff: '−0,15' },
            { co: 'D', bonusReported: '0,69', bonusStd: '0,66', diff: '−0,03' },
            { co: 'Tổng', bonusReported: '4,84', bonusStd: '4,38', diff: '−0,46' },
          ],
          highlight: [{ row: 4, tone: 'warning' }],
          caption: 'Khi thưởng gắn với con số tự định nghĩa, mỗi khoản "điều chỉnh" là tiền thật: 460 triệu đ mỗi quý. Áp chuẩn mới cho mục tiêu cũ thì phải re-base mục tiêu, nếu không các công ty sẽ bị phạt vì cách đo.',
        },
        {
          kind: 'table',
          title: 'Nhịp review và quyền quyết hằng quý',
          columns: [
            { key: 'when', label: 'Mốc' },
            { key: 'what', label: 'Việc' },
            { key: 'owner', label: 'Người chịu trách nhiệm' },
          ],
          rows: [
            { when: 'Đóng sổ (T+5 ngày làm việc)', what: 'Công ty con nộp bridge và chứng từ từng khoản điều chỉnh theo mẫu chung', owner: 'Kế toán trưởng từng công ty' },
            { when: 'T+8', what: 'FP&A đối chiếu bridge với sổ cái, đánh giá từng khoản theo tiêu chí, ghi nhật ký quyết định', owner: 'Group FP&A (giữ định nghĩa)' },
            { when: 'T+10', what: 'Kiểm toán nội bộ kiểm mẫu độc lập các khoản điều chỉnh, tối thiểu 2 khoản lớn nhất mỗi công ty', owner: 'Kiểm toán nội bộ' },
            { when: 'T+12', what: 'Hội đồng định nghĩa (CFO, FP&A, kiểm toán nội bộ, đại diện công ty con) duyệt khoản mới hoặc ngoại lệ', owner: 'CFO' },
            { when: 'Hằng quý, họp HĐQT/Ủy ban kiểm toán', what: 'Báo chuẩn v1.0, bridge, dòng bổ sung (trước thuê, SBC) và các thay đổi định nghĩa', owner: 'CFO + Ủy ban kiểm toán' },
          ],
          caption: 'Người giữ định nghĩa (FP&A) và người kiểm tra (kiểm toán nội bộ) tách biệt khỏi người hưởng thưởng (công ty con).',
        },
        {
          kind: 'text',
          md: 'Thay đổi định nghĩa (thêm hoặc bớt khoản được điều chỉnh) là thay đổi **phá vỡ tương thích**: cần số phiên bản, backtest ít nhất 4 quý theo cả hai bản, báo trước một kỳ, chạy song song một kỳ và re-base mục tiêu theo độ chênh trung bình. Nếu không, quyết định của hội đồng sẽ bị nghi là chỉnh luật để ai đó đạt thưởng.',
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
          md: '**Đề xuất:** ban hành "Hợp đồng định nghĩa EBITDA điều chỉnh v1.0" cho cả tập đoàn, báo quý này **438 tỷ đ** (biên 20,0%) kèm bridge từ LNST, hai dòng thông tin bổ sung (EBITDA trước chi phí thuê, chi phí SBC) và bảng nhật ký quyết định. Số 484 tỷ đ không còn dùng. Mục tiêu thưởng được re-base theo độ chênh backtest trước khi áp vào chu kỳ thưởng.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Ban hành hợp đồng định nghĩa v1.0: điểm xuất phát, cơ sở lập, danh sách khoản và tiêu chí (tính chất, tần suất, trọng yếu, bằng chứng, đối xứng)',
              owner: 'CFO + Group FP&A',
              metric: 'Tỷ lệ công ty con báo đúng mẫu bridge chung',
              threshold: '100% từ quý kế tiếp',
            },
            {
              action: 'Dựng bridge từ LNST cho từng công ty, kiểm mẫu độc lập các khoản điều chỉnh lớn nhất',
              owner: 'Kiểm toán nội bộ',
              metric: 'Tổng khoản điều chỉnh không đạt tiêu chí phát hiện qua kiểm mẫu',
              threshold: '< 2% EBITDA cơ sở của nhóm',
            },
            {
              action: 'Backtest 4 quý theo cả hai định nghĩa, báo song song một kỳ, re-base mục tiêu thưởng theo độ chênh trung bình',
              owner: 'Group FP&A + HR (C&B)',
              metric: 'Số công ty con có kết quả đạt/không đạt thay đổi chỉ vì đổi định nghĩa',
              threshold: '0 sau re-base',
            },
            {
              action: 'Họp hội đồng định nghĩa mỗi quý, ghi nhật ký quyết định (khoản mới, ngoại lệ, lý do) và báo Ủy ban kiểm toán',
              owner: 'CFO',
              metric: 'Số ngoại lệ được duyệt mỗi quý; thời gian từ yêu cầu đến quyết định',
              threshold: 'Ngoại lệ ≤ 2 mỗi quý; quyết định ≤ 10 ngày làm việc',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Nó không tìm "con số đúng" mà tạo một **quy trình lặp lại được**: tiêu chí viết rõ, bridge truy về sổ cái, người giữ định nghĩa tách khỏi người hưởng thưởng, và đổi luật có phiên bản. Bốn công ty giữ được nhu cầu thông tin của mình (qua dòng bổ sung) mà ban lãnh đạo vẫn có một con số so sánh được.',
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
              title: 'Gọi mọi khoản "bất thường" là "một lần"',
              why: 'A gom 18 tỷ đ chi phí vào "một lần" nhưng 6 tỷ đ lặp mọi quý. Khoản lặp lại là chi phí hoạt động, dù tên gọi là gì.',
              instead: 'Tiêu chí có kiểm tra tần suất (≥ 2 lần trong 8 quý thì không đạt) và yêu cầu bằng chứng phê duyệt.',
            },
            {
              title: 'Điều chỉnh một chiều',
              why: 'Cộng lỗ nhưng giữ lãi làm số luôn đẹp hơn thực tế; 6 tỷ đ ròng của D là ví dụ.',
              instead: 'Nguyên tắc đối xứng: cùng một loại khoản thì cả lãi lẫn lỗ đều được loại.',
            },
            {
              title: 'Đổi định nghĩa mà giữ nguyên mục tiêu thưởng',
              why: 'Chuẩn mới thấp hơn 46 tỷ đ so với số tự báo. Giữ mục tiêu cũ sẽ phạt oan, còn đổi âm thầm khiến bên hưởng thưởng không tin hợp đồng.',
              instead: 'Backtest, chạy song song, re-base mục tiêu và ghi quyết định vào nhật ký.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'EBITDA điều chỉnh không phải chỉ tiêu theo chuẩn mực, nên định nghĩa phải là hợp đồng: điểm xuất phát, danh sách khoản được điều chỉnh, tiêu chí, bằng chứng và bridge từ lợi nhuận kế toán.',
    'Mỗi khoản điều chỉnh qua cùng một bộ lọc: bất thường, không lặp lại, trọng yếu, có bằng chứng, đối xứng. Khoản không qua thì ở lại trong EBITDA hoặc nằm ở dòng thông tin bổ sung.',
    'Tách người giữ định nghĩa, người kiểm tra và người hưởng thưởng; đổi định nghĩa phải có phiên bản, backtest, chạy song song và re-base mục tiêu.',
  ],
  references: [
    {
      title: 'IFRS 16 Leases',
      publisher: 'IFRS Foundation',
      url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases/',
      note: 'Trang chuẩn mực: giải thích bên đi thuê ghi nhận hầu hết hợp đồng thuê vào bảng cân đối nên chi phí thuê tách thành khấu hao và lãi, lý do EBITDA khác nhau giữa các cơ sở lập.',
    },
    {
      title: 'IFRS 2 Share-based Payment',
      publisher: 'IFRS Foundation',
      url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-2-share-based-payment/',
      note: 'Trang chuẩn mực về trả lương bằng cổ phiếu: cơ sở để coi SBC là chi phí thật, không phải khoản "không bằng tiền" có thể bỏ qua.',
    },
    {
      title: 'Earnings before interest, taxes, depreciation and amortization',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/EBITDA',
      note: 'Tổng quan EBITDA, cách tính và hạn chế; nhắc rằng đây không phải chỉ tiêu theo chuẩn mực kế toán nên các biến thể "điều chỉnh" cần định nghĩa riêng.',
    },
  ],
}
