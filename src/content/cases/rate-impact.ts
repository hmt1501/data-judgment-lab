import type { CaseStudy } from '../types'

/*
 * Nền kinh tế giả định (không mô tả bất kỳ quốc gia hay quyết định chính sách có thật nào).
 * Số liệu mock, đã kiểm tra khớp nhau. Lãi suất điều hành 4,5% → 5,5% tại tháng T0.
 *   Lãi suất (%/năm)        T−1   T0    T+1   T+2   T+3   T+4   T+5   T+6
 *   Cho vay mới (niêm yết)  8,5   8,6   9,3   9,8   10,0  10,0  10,0  10,0   (+1,5)
 *   Cho vay BQ dư nợ        8,9   8,9   9,0   9,2   9,3   9,4   9,45  9,5    (+0,6)
 *   Tiền gửi 12T niêm yết   5,0   5,0   5,2   5,4   5,5   5,6   5,6   5,6    (+0,6)
 *   Chi phí vốn BQ          4,6   4,6   4,65  4,75  4,85  4,95  5,05  5,1    (+0,5)
 *   Chênh lệch (proxy NIM)  4,3   4,3   4,35  4,45  4,45  4,45  4,4   4,4
 *   Hộ vay thả nổi: 1,2 tỷ đ, 20 năm, 9,0% → 10,5%: trả góp 10,80 → 11,98 triệu đ/tháng (+1,18; +11,0%);
 *     thu nhập 35 triệu → DSR 30,9% → 34,2%. Người thu nhập 22 triệu: 49,1% → 54,5%.
 *   Phân phối DSR (vay thả nổi): <30% 45→36, 30–40% 33→35, 40–50% 16→18, >50% 6→11 (tổng 100).
 *   Người gửi 500 triệu kỳ hạn 12T: 5,0% → 5,6% = 25 → 28 triệu/năm (+3), chỉ khi tái tục; thực 5,6 − 6,8 = −1,2%.
 *   SME: dư nợ vốn lưu động BQ 2 tỷ, 9,5% → 11,5%: lãi 190 → 230 triệu/năm; EBIT 400 triệu → ICR 2,11 → 1,74.
 */
export const rateImpact: CaseStudy = {
  id: 'rate-impact',
  title: 'Tăng lãi suất: ai được lợi, ai chịu sức ép?',
  domain: 'macro',
  level: 'mid',
  minutes: 12,
  skills: ['macro', 'segmentation', 'credit-risk', 'tradeoff'],
  question:
    'Sáu tháng sau đợt tăng lãi suất giả định, lãi vay mới tăng nhanh hơn lãi tiền gửi. Tác động khác nhau thế nào giữa người vay thả nổi, người gửi tiết kiệm, doanh nghiệp nhỏ và ngân hàng, và cần theo dõi dữ liệu gì?',
  summary:
    'Phân biệt lãi suất niêm yết với lãi suất thực trả trên dư nợ, đo tác động theo nhóm (DSR, ICR, thu nhập lãi, NIM) và thiết kế dashboard cảnh báo sớm thay vì chờ nợ xấu.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst ở bộ phận quản trị rủi ro của một ngân hàng thương mại trong một **nền kinh tế giả định**. Sáu tháng trước, ngân hàng trung ương tăng lãi suất điều hành từ 4,5% lên 5,5%. Ban điều hành hỏi: *"Đợt tăng này đang tác động lên khách hàng của mình ra sao, nhóm nào cần lo, và mình theo dõi bằng gì?"* Hiện có:',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Lãi suất điều hành', value: '5,5%', delta: '+1,0 điểm %', tone: 'neutral' },
            { label: 'Lãi cho vay mới (niêm yết)', value: '10,0%', delta: '+1,5 điểm %', tone: 'negative' },
            { label: 'Lãi tiền gửi 12 tháng (niêm yết)', value: '5,6%', delta: '+0,6 điểm %', tone: 'positive' },
            { label: 'Nợ xấu (nhóm 3–5)', value: '1,9%', delta: 'không đổi', tone: 'neutral', note: 'chỉ báo trễ' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu của buổi phân tích',
          md: 'Không dừng ở câu "lãi suất cao thì người vay khổ, người gửi lợi". Cần **định lượng theo nhóm**, phân biệt lãi suất niêm yết với lãi suất mà khách hàng *thực sự* trả, và chọn các chỉ báo **dẫn trước** nợ xấu để kịp hành động.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: truyền dẫn theo hợp đồng, không theo bảng lãi suất',
      blocks: [
        {
          kind: 'formula',
          expression: 'Tác động lên một nhóm = Mức phơi nhiễm (dư nợ / tiền gửi) × Mức truyền dẫn × Tốc độ định lại giá ÷ Khả năng chịu đựng (thu nhập, biên lợi nhuận)',
          note: 'Lãi suất niêm yết chỉ áp cho **khoản vay/gửi mới**. Dư nợ cũ định lại giá theo hợp đồng: thả nổi điều chỉnh mỗi 3–6 tháng, cố định chưa đổi, tiền gửi có kỳ hạn chỉ đổi khi đáo hạn.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Phân biệt luồng và tồn**: lãi suất khoản vay mới (luồng) khác lãi suất bình quân trên dư nợ (tồn).',
            '**Phân nhóm theo cơ chế**: thả nổi vs cố định, có vay vs chỉ gửi tiền, doanh nghiệp phụ thuộc vốn lưu động vs ít nợ.',
            '**Đo khả năng chịu đựng**: DSR (nợ phải trả / thu nhập) cho hộ, ICR (EBIT / chi phí lãi) cho doanh nghiệp, NIM cho ngân hàng. Nhìn **phân phối**, không chỉ trung bình.',
            '**Chọn chỉ báo dẫn trước**: quá hạn 30+ ngày, tỷ lệ chuyển nhóm nợ, yêu cầu cơ cấu nợ, mức sử dụng hạn mức, rồi mới đến nợ xấu.',
          ],
        },
        {
          kind: 'quiz',
          id: 'rate-impact-q1',
          question: 'Lãi cho vay mới niêm yết tăng 1,5 điểm %. Kết luận nào về chi phí vay của khách hàng hiện hữu là đúng?',
          options: [
            {
              id: 'a',
              text: 'Mọi người vay đều đang trả thêm 1,5 điểm % lãi.',
              explain:
                'Niêm yết chỉ áp cho khoản vay mới. Khoản vay cố định chưa đổi, khoản thả nổi chỉ đổi khi đến kỳ điều chỉnh. Suy rộng từ bảng niêm yết sẽ phóng đại tác động lên toàn bộ danh mục.',
            },
            {
              id: 'b',
              text: 'Lãi suất bình quân trên dư nợ tăng chậm hơn và ít hơn; tác động dồn vào nhóm vay thả nổi và người vay mới, nên cần đo theo loại hợp đồng.',
              correct: true,
              explain:
                'Đúng. Sau 6 tháng, lãi suất bình quân dư nợ mới tăng 0,6 điểm % so với 1,5 điểm % của khoản vay mới. Phần tăng phân bố không đều: người vay thả nổi chịu gần đủ, người vay cố định gần như chưa chịu.',
            },
            {
              id: 'c',
              text: 'Chưa có tác động vì nợ xấu vẫn 1,9%.',
              explain:
                'Nợ xấu là chỉ báo trễ: khoản vay phải quá hạn trên 90 ngày mới vào nhóm 3, và khách thường cố trả vài tháng trước khi trễ hạn. Nợ xấu đứng yên không có nghĩa là chưa có áp lực.',
            },
          ],
        },
      ],
    },
    {
      id: 'pass-through',
      kind: 'analysis',
      title: 'Bước 1 — Truyền dẫn: niêm yết tăng nhanh, dư nợ và tiền gửi tăng chậm',
      blocks: [
        {
          kind: 'chart',
          title: 'Lãi suất niêm yết vs bình quân thực tế (%/năm)',
          type: 'line',
          xKey: 'month',
          unit: '%',
          series: [
            { key: 'newLoan', label: 'Cho vay mới (niêm yết)' },
            { key: 'stockLoan', label: 'Cho vay BQ trên dư nợ' },
            { key: 'newDep', label: 'Tiền gửi 12T (niêm yết)' },
            { key: 'stockDep', label: 'Chi phí vốn BQ' },
          ],
          data: [
            { month: 'T−1', newLoan: 8.5, stockLoan: 8.9, newDep: 5.0, stockDep: 4.6 },
            { month: 'T0', newLoan: 8.6, stockLoan: 8.9, newDep: 5.0, stockDep: 4.6 },
            { month: 'T+1', newLoan: 9.3, stockLoan: 9.0, newDep: 5.2, stockDep: 4.65 },
            { month: 'T+2', newLoan: 9.8, stockLoan: 9.2, newDep: 5.4, stockDep: 4.75 },
            { month: 'T+3', newLoan: 10.0, stockLoan: 9.3, newDep: 5.5, stockDep: 4.85 },
            { month: 'T+4', newLoan: 10.0, stockLoan: 9.4, newDep: 5.6, stockDep: 4.95 },
            { month: 'T+5', newLoan: 10.0, stockLoan: 9.45, newDep: 5.6, stockDep: 5.05 },
            { month: 'T+6', newLoan: 10.0, stockLoan: 9.5, newDep: 5.6, stockDep: 5.1 },
          ],
          marker: { x: 'T0', label: 'Tăng lãi suất điều hành +1,0 điểm %' },
          caption: 'Cho vay mới +1,5 điểm % (gồm cả phần bù rủi ro tăng), dư nợ BQ chỉ +0,6; tiền gửi niêm yết +0,6, chi phí vốn BQ +0,5 vì tiền gửi có kỳ hạn chỉ định lại khi đáo hạn.',
        },
        {
          kind: 'table',
          title: 'Chênh lệch lãi suất bình quân của ngân hàng (proxy NIM)',
          columns: [
            { key: 'm', label: 'Tháng' },
            { key: 'loan', label: 'Cho vay BQ', align: 'right' },
            { key: 'dep', label: 'Chi phí vốn BQ', align: 'right' },
            { key: 'spread', label: 'Chênh lệch', align: 'right' },
          ],
          rows: [
            { m: 'T0', loan: '8,90%', dep: '4,60%', spread: '4,30' },
            { m: 'T+3', loan: '9,30%', dep: '4,85%', spread: '4,45' },
            { m: 'T+6', loan: '9,50%', dep: '5,10%', spread: '4,40' },
          ],
          highlight: [{ row: 1, tone: 'positive' }],
          caption: 'Ngân hàng hưởng lợi ngắn hạn vì tài sản (vay thả nổi) định lại nhanh hơn nguồn vốn; lợi thế bắt đầu thu hẹp từ T+5 khi tiền gửi đáo hạn được tái tục ở lãi suất cao hơn, và có thể bị ăn mòn bởi chi phí dự phòng.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của chuyên gia: định lại giá là chuyện của hợp đồng',
          md: 'Để biết ai chịu tác động khi nào, hãy dựng **bảng định lại giá (repricing gap)**: bao nhiêu dư nợ và tiền gửi đổi lãi suất trong 0–3, 3–6, 6–12 tháng. Hai ngân hàng cùng chịu một mức tăng lãi suất điều hành có thể có kết quả NIM ngược nhau chỉ vì cơ cấu kỳ hạn khác nhau.',
        },
      ],
    },
    {
      id: 'segments',
      kind: 'analysis',
      title: 'Bước 2 — Tác động theo nhóm: trung bình che mất phần đuôi',
      blocks: [
        {
          kind: 'table',
          title: 'Ví dụ định lượng cho từng nhóm (sau khi định lại giá)',
          columns: [
            { key: 'group', label: 'Nhóm' },
            { key: 'exposure', label: 'Phơi nhiễm điển hình' },
            { key: 'change', label: 'Thay đổi', align: 'right' },
            { key: 'buffer', label: 'Chỉ số chịu đựng', align: 'right' },
          ],
          rows: [
            { group: 'Hộ vay mua nhà thả nổi', exposure: '1,2 tỷ đ, 20 năm, 9,0% → 10,5%', change: 'Trả góp 10,80 → 11,98 triệu đ/tháng (+11%)', buffer: 'DSR 30,9% → 34,2% (thu nhập 35 triệu)' },
            { group: 'Hộ vay mua nhà cố định', exposure: 'Cố định 3 năm đầu', change: 'Chưa đổi', buffer: 'Rủi ro dồn về thời điểm hết ưu đãi' },
            { group: 'Người gửi tiết kiệm', exposure: '500 triệu đ, kỳ hạn 12 tháng', change: 'Tiền lãi 25 → 28 triệu đ/năm (khi tái tục)', buffer: 'Lãi suất thực 5,6% − 6,8% = −1,2%' },
            { group: 'Doanh nghiệp nhỏ cần vốn lưu động', exposure: 'Dư nợ BQ 2 tỷ đ, 9,5% → 11,5%', change: 'Chi phí lãi 190 → 230 triệu đ/năm', buffer: 'ICR 2,11 → 1,74 (EBIT 400 triệu)' },
            { group: 'Ngân hàng', exposure: 'Tài sản định lại nhanh hơn nguồn vốn', change: 'Chênh lệch 4,30 → 4,40 điểm %', buffer: 'Lợi ích ngắn hạn, rủi ro tín dụng tăng sau' },
          ],
          highlight: [
            { row: 0, tone: 'negative' },
            { row: 3, tone: 'negative' },
            { row: 2, tone: 'positive' },
          ],
          caption: 'Người gửi tiết kiệm "được lợi" về danh nghĩa nhưng lãi suất thực vẫn âm, và chỉ nhận khi tiền gửi đáo hạn. SME chịu mức tăng lớn hơn cả lãi suất điều hành do phần bù rủi ro.',
        },
        {
          kind: 'chart',
          title: 'Phân phối DSR của người vay thả nổi (% số người vay)',
          type: 'bar',
          xKey: 'band',
          unit: '%',
          series: [
            { key: 'before', label: 'Trước tăng lãi suất' },
            { key: 'after', label: 'Sau định lại (T+6)' },
          ],
          data: [
            { band: 'DSR < 30%', before: 45, after: 36 },
            { band: '30–40%', before: 33, after: 35 },
            { band: '40–50%', before: 16, after: 18 },
            { band: '> 50%', before: 6, after: 11 },
          ],
          caption: 'Ví dụ: người thu nhập 22 triệu đ/tháng với cùng khoản vay chuyển từ DSR 49,1% lên 54,5%. Nhóm DSR > 50% gần gấp đôi (6% → 11%) dù DSR điển hình chỉ tăng khoảng 3 điểm %.',
        },
        {
          kind: 'quiz',
          id: 'rate-impact-q2',
          question: 'Nên báo cáo điều gì lên ban điều hành về nhóm vay thả nổi?',
          options: [
            {
              id: 'a',
              text: 'DSR điển hình chỉ tăng khoảng 3 điểm % (30,9% → 34,2%), vẫn dưới ngưỡng an toàn 40%, nên rủi ro thấp.',
              explain:
                'Con số điển hình đúng nhưng che mất phần đuôi. Rủi ro tín dụng đến từ những người đã sát giới hạn: nhóm DSR > 50% tăng từ 6% lên 11% người vay.',
            },
            {
              id: 'b',
              text: 'Rủi ro tập trung ở phần đuôi: tỷ lệ người vay có DSR > 50% gần gấp đôi lên 11%; cần danh sách khách hàng này, theo dõi quá hạn sớm và chuẩn bị phương án cơ cấu.',
              correct: true,
              explain:
                'Đúng. Báo cáo theo phân phối giúp biến phân tích thành hành động cụ thể: biết bao nhiêu người, dư nợ bao nhiêu, cần theo dõi và hỗ trợ ai trước khi họ chuyển thành nợ xấu.',
            },
            {
              id: 'c',
              text: 'Nên đề xuất ngừng cho vay thả nổi để tránh rủi ro.',
              explain:
                'Đây là quyết định sản phẩm lớn dựa trên một lát cắt, và không giải quyết rủi ro của dư nợ hiện hữu. Ưu tiên trước mắt là nhận diện và quản lý nhóm đang chịu áp lực.',
            },
          ],
        },
      ],
    },
    {
      id: 'early-warning',
      kind: 'analysis',
      title: 'Bước 3 — Chỉ báo sớm: nợ xấu chưa tăng không có nghĩa là an toàn',
      blocks: [
        {
          kind: 'chart',
          title: 'Tỷ lệ quá hạn 30+ ngày theo phân khúc (% dư nợ)',
          type: 'line',
          xKey: 'month',
          unit: '%',
          series: [
            { key: 'floating', label: 'Vay nhà thả nổi' },
            { key: 'fixed', label: 'Vay nhà cố định' },
            { key: 'sme', label: 'SME vốn lưu động' },
          ],
          data: [
            { month: 'T−1', floating: 1.2, fixed: 1.0, sme: 2.5 },
            { month: 'T0', floating: 1.2, fixed: 1.0, sme: 2.5 },
            { month: 'T+1', floating: 1.2, fixed: 1.0, sme: 2.6 },
            { month: 'T+2', floating: 1.3, fixed: 1.0, sme: 2.6 },
            { month: 'T+3', floating: 1.4, fixed: 1.0, sme: 2.8 },
            { month: 'T+4', floating: 1.6, fixed: 1.0, sme: 3.1 },
            { month: 'T+5', floating: 1.8, fixed: 1.1, sme: 3.4 },
            { month: 'T+6', floating: 2.0, fixed: 1.0, sme: 3.6 },
          ],
          marker: { x: 'T0', label: 'Tăng lãi suất' },
          caption: 'Quá hạn 30+ của vay thả nổi tăng 1,2% → 2,0% và SME 2,5% → 3,6%, trong khi vay cố định đứng yên: đúng với cơ chế định lại giá. Nợ xấu 90+ ngày sẽ phản ánh điều này sau vài tháng.',
        },
        {
          kind: 'table',
          title: 'Tín dụng và tiêu dùng theo phân khúc (so cùng kỳ)',
          columns: [
            { key: 'seg', label: 'Phân khúc' },
            { key: 'before', label: 'Trước (T0)', align: 'right' },
            { key: 'after', label: 'Hiện tại (T+6)', align: 'right' },
          ],
          rows: [
            { seg: 'Tín dụng mua nhà', before: '+15%', after: '+9%' },
            { seg: 'Tín dụng SME', before: '+16%', after: '+10%' },
            { seg: 'Tín dụng tiêu dùng', before: '+20%', after: '+14%' },
            { seg: 'Chi tiêu thẻ thực tế: thu nhập thấp', before: '+5%', after: '−4%' },
            { seg: 'Chi tiêu thẻ thực tế: thu nhập trung bình', before: '+6%', after: '−1%' },
            { seg: 'Chi tiêu thẻ thực tế: thu nhập cao', before: '+4%', after: '+2%' },
          ],
          highlight: [{ row: 3, tone: 'negative' }],
          caption: 'Tín dụng chậm lại là tác động **mong muốn** của chính sách. Điều cần theo dõi là tiêu dùng nhóm thu nhập thấp giảm mạnh nhất, nhóm thường có đệm tiết kiệm mỏng nhất.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Phân biệt "chính sách đang hoạt động" với "rủi ro vượt kiểm soát"',
          md: 'Tín dụng tăng chậm lại và chi tiêu hạ nhiệt là **kết quả dự kiến** của tăng lãi suất, không phải dấu hiệu khủng hoảng. Dashboard cần ngưỡng để tách hai trạng thái: mức điều chỉnh bình thường, và mức cho thấy căng thẳng lan rộng (quá hạn tăng nhanh, tỷ lệ chuyển nhóm nợ tăng, yêu cầu cơ cấu dồn dập).',
        },
        {
          kind: 'quiz',
          id: 'rate-impact-q3',
          question: 'Sau 6 tháng, nợ xấu vẫn 1,9%. Chỉ báo nào nên được ưu tiên trên dashboard để phát hiện rủi ro sớm nhất?',
          options: [
            {
              id: 'a',
              text: 'Tỷ lệ nợ xấu toàn ngân hàng, cập nhật theo quý.',
              explain:
                'Đây là chỉ báo trễ và bị pha loãng bởi danh mục lớn ít bị ảnh hưởng (vay cố định, doanh nghiệp lớn). Khi nó tăng, cơ hội can thiệp sớm đã qua.',
            },
            {
              id: 'b',
              text: 'Quá hạn 30+ ngày và tỷ lệ chuyển từ đúng hạn sang quá hạn theo phân khúc (thả nổi, SME), cập nhật hằng tháng, kèm số yêu cầu cơ cấu nợ.',
              correct: true,
              explain:
                'Đúng. Các chỉ báo này dẫn trước nợ xấu vài tháng, được tách theo đúng nhóm chịu cơ chế định lại giá, và đủ nhạy để kích hoạt hành động (liên hệ khách hàng, cơ cấu, điều chỉnh tiêu chí cho vay mới).',
            },
            {
              id: 'c',
              text: 'Lãi suất cho vay niêm yết của các ngân hàng đối thủ.',
              explain:
                'Hữu ích cho chiến lược giá, nhưng không cho biết khách hàng hiện hữu của mình có đang gặp khó khăn trả nợ hay không.',
            },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp tối ưu: dashboard theo phân khúc có ngưỡng',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận:** Tác động của đợt tăng lãi suất phân bố không đều. Người vay thả nổi và SME vốn lưu động chịu sức ép trước và nhiều nhất (DSR > 50% từ 6% lên 11% người vay; ICR SME điển hình 2,11 → 1,74; quá hạn 30+ đã tăng). Người gửi tiết kiệm được lợi chậm và lãi suất thực vẫn âm. Ngân hàng được lợi NIM ngắn hạn nhưng lợi thế đang thu hẹp và chi phí tín dụng sẽ tăng sau. Không suy rộng từ lãi suất niêm yết: hãy theo dõi theo hợp đồng và phân khúc.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Dashboard hộ vay thả nổi: phân phối DSR sau mỗi kỳ định lại giá, danh sách khách DSR > 50%, quá hạn 30+',
              owner: 'Quản trị rủi ro bán lẻ',
              metric: 'Tỷ lệ quá hạn 30+ (vay thả nổi); % người vay DSR > 50%',
              threshold: 'Vàng khi quá hạn 30+ > 2,0%; đỏ khi > 2,5% hoặc DSR > 50% vượt 12%',
            },
            {
              action: 'Dashboard SME: ICR ước tính, mức sử dụng hạn mức vốn lưu động, quá hạn 30+, yêu cầu gia hạn',
              owner: 'Quản trị rủi ro doanh nghiệp',
              metric: '% dư nợ SME có ICR < 1,5; quá hạn 30+ SME',
              threshold: 'Đỏ khi quá hạn 30+ > 4,0% hoặc ICR < 1,5 chiếm > 20% dư nợ',
            },
            {
              action: 'Theo dõi tỷ lệ chuyển nhóm nợ (đúng hạn → 30+ → 90+) theo phân khúc hằng tháng',
              owner: 'Data/Analytics rủi ro',
              metric: 'Roll rate từ đúng hạn sang 30+',
              threshold: 'Cảnh báo khi tăng > 50% so với trung bình 12 tháng trước tăng lãi suất',
            },
            {
              action: 'Lập lịch các khoản vay cố định hết ưu đãi trong 12 tháng tới và mô phỏng DSR sau định lại',
              owner: 'Quản trị rủi ro bán lẻ + Sản phẩm',
              metric: 'Dư nợ hết ưu đãi theo tháng; DSR mô phỏng',
              threshold: 'Liên hệ chủ động trước 60 ngày với khách có DSR mô phỏng > 50%',
            },
            {
              action: 'Theo dõi NIM theo bảng định lại giá và chi tiêu thẻ theo nhóm thu nhập',
              owner: 'ALM (Quản lý tài sản – nợ) + Phân tích khách hàng',
              metric: 'Chênh lệch lãi suất BQ; chi tiêu thẻ thực tế nhóm thu nhập thấp',
              threshold: 'Báo cáo khi chênh lệch giảm dưới mức trước tăng lãi suất (4,30) hoặc chi tiêu nhóm thấp giảm > 5%',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Dashboard bám theo **cơ chế truyền dẫn** (loại hợp đồng, thời điểm định lại giá) nên tách được nhóm chịu sức ép thật khỏi số trung bình. Nó dùng **chỉ báo dẫn trước** (quá hạn 30+, roll rate, DSR mô phỏng) thay vì đợi nợ xấu, và mỗi chỉ báo có owner và ngưỡng hành động. Nhờ vậy ngân hàng can thiệp sớm với đúng khách hàng, thay vì siết tín dụng đại trà.',
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
              title: 'Suy rộng từ lãi suất niêm yết',
              why: 'Lãi niêm yết +1,5 điểm % chỉ áp cho khoản mới. Dùng nó để ước tính chi phí của toàn bộ người vay sẽ phóng đại tác động và bỏ qua thời điểm định lại giá.',
              instead: 'Dùng lãi suất bình quân trên dư nợ và bảng định lại giá theo loại hợp đồng (thả nổi, cố định, kỳ hạn tiền gửi).',
            },
            {
              title: 'Chờ nợ xấu mới hành động',
              why: 'Nợ xấu chỉ tăng sau khi khách đã quá hạn trên 90 ngày; khi thấy nó, khả năng hỗ trợ hay cơ cấu sớm đã thu hẹp.',
              instead: 'Theo dõi quá hạn 30+, roll rate, mức sử dụng hạn mức và yêu cầu cơ cấu theo phân khúc, hằng tháng.',
            },
            {
              title: 'Báo cáo trung bình thay vì phân phối',
              why: 'DSR điển hình chỉ tăng ~3 điểm %, nhưng tỷ lệ người vay vượt 50% gần gấp đôi. Rủi ro tín dụng nằm ở phần đuôi.',
              instead: 'Trình bày theo dải (DSR, ICR) và chỉ rõ số khách hàng, dư nợ nằm trong vùng nguy hiểm.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Lãi suất niêm yết là luồng, dư nợ là tồn: tác động lên từng nhóm phụ thuộc loại hợp đồng và thời điểm định lại giá.',
    'Đo khả năng chịu đựng theo phân phối (DSR, ICR), vì rủi ro tín dụng nằm ở phần đuôi chứ không ở số trung bình.',
    'Dashboard tốt dùng chỉ báo dẫn trước như quá hạn 30+ và roll rate theo phân khúc, có owner và ngưỡng, thay vì chờ nợ xấu.',
  ],
  references: [
    {
      title: 'About a rate of (general) interest: how monetary policy transmits',
      publisher: 'Bank of England — Quarterly Bulletin',
      url: 'https://www.bankofengland.co.uk/quarterly-bulletin/2024/2024/about-a-rate-of-general-interest-how-monetary-policy-transmits',
      note: 'Khung tổng quát về cách lãi suất chính sách truyền qua điều kiện tài chính (gồm lãi vay mua nhà), kỳ vọng và hoạt động kinh tế đến lạm phát, và vì sao tác động thay đổi theo thời gian.',
    },
    {
      title: 'Transmission mechanism of monetary policy',
      publisher: 'European Central Bank',
      url: 'https://www.ecb.europa.eu/mopo/intro/transmission/html/index.en.html',
      note: 'Tổng quan các kênh truyền dẫn từ lãi suất chính sách đến lãi suất ngân hàng, tín dụng và chi tiêu.',
    },
    {
      title: 'Euro area bank lending survey',
      publisher: 'European Central Bank',
      url: 'https://www.ecb.europa.eu/stats/ecb_surveys/bank_lending_survey/html/index.en.html',
      note: 'Ví dụ thực tế về dữ liệu theo dõi điều kiện cho vay và cầu tín dụng theo phân khúc (hộ gia đình, doanh nghiệp).',
    },
  ],
}
