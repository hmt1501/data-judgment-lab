import type { CaseStudy } from '../types'

/*
 * Số liệu mock (nền kinh tế giả định "Nam Hải" — không phải số liệu của nước nào), đã kiểm tra khớp nhau:
 *   Danh mục ứng viên 38 chỉ báo − 9 trùng thông tin (tương quan > 0,9) − 8 công bố trễ > 60 ngày
 *     − 6 không gắn với quyết định nào − 3 bị điều chỉnh lớn sau công bố = 12 chỉ báo (6 dẫn + 3 đồng thời + 3 trễ)
 *   Số chỉ báo dẫn (trên 6) đang xấu đi, T10/25 → T9/26:
 *     2 · 2 · 3 · 2 · 3 · 3 · 4 · 3 · 4 · 5 · 5 · 4
 *   Quy tắc: Bình thường nếu ≤ 2/6; Theo dõi nếu 3/6 hoặc ≥ 4/6 chỉ một tháng; Cảnh báo nếu ≥ 4/6 trong 2 tháng liên tiếp
 *     T4/26 = 4 (tháng trước 3) → Theo dõi · T6/26 = 4 (tháng trước 3) → Theo dõi
 *     T7/26 = 5 (tháng trước 4) → Cảnh báo, giữ Cảnh báo ở T8/26 (5) và T9/26 (4, tháng trước 5)
 *   Điều chỉnh mùa vụ và lịch nghỉ lễ lớn, tháng 2/26 (so với tháng trước):
 *     Bán lẻ thực: thô −9,0% · điều chỉnh +0,6% · IIP: thô −14,5% · điều chỉnh −0,8%
 *     Đơn xuất khẩu mới: thô −11,0% · điều chỉnh +0,3%; tháng 3 bật lại thô +12,0% so với điều chỉnh +0,4%
 *   Chênh giữa chỉ số thô và điều chỉnh: bán lẻ −9,6 điểm % (−9,0 − 0,6) ·
 *     IIP −13,7 điểm % (−14,5 − (−0,8)) · xuất khẩu −11,3 điểm % (−11,0 − 0,3)
 */
export const macroDashboardLeadingIndicators: CaseStudy = {
  id: 'macro-dashboard-leading-indicators',
  title: 'Dashboard vĩ mô cho ban lãnh đạo: ít chỉ số, đúng nhịp, không giật mình',
  domain: 'macro',
  level: 'lead',
  minutes: 14,
  skills: ['macro', 'metric-definition', 'tradeoff'],
  question:
    'Ban lãnh đạo muốn một dashboard vĩ mô để điều chỉnh kế hoạch đầu tư và tuyển dụng. Bộ chỉ báo nào đáng có, công bố trễ và mùa vụ xử lý ra sao, ngưỡng cảnh báo đặt thế nào, và làm sao để họp hằng tháng không phản ứng thái quá với từng điểm dữ liệu?',
  summary:
    'Chọn bộ chỉ báo dẫn/đồng thời/trễ theo tiêu chí, xử lý độ trễ công bố và mùa vụ, thiết kế chỉ số khuếch tán với ngưỡng cảnh báo có quy tắc "hai tháng liên tiếp", và quy trình review hằng tháng chống phản ứng thái quá.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là trưởng nhóm phân tích kinh tế của một tập đoàn hoạt động tại **Nam Hải** (nền kinh tế giả định). Bản dashboard hiện tại do nhiều người thêm dần có **38 chỉ báo**, mỗi lần họp có người chỉ vào một ô đỏ và đề xuất đổi kế hoạch. Tháng trước chủ tịch đã yêu cầu cắt giảm tuyển dụng sau khi *một* chỉ số xuất khẩu tụt mạnh, rồi tháng sau chỉ số này bật lại. Mọi số liệu trong case là **mô phỏng**.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Chỉ báo trên dashboard hiện tại', value: '38', tone: 'warning', note: 'Không có quy tắc nào chọn chúng' },
            { label: 'Quyết định đổi kế hoạch sau 1 điểm dữ liệu', value: '3 lần', tone: 'negative', note: 'Trong 12 tháng, 2 lần phải đảo lại' },
            { label: 'Chỉ báo mục tiêu', value: '12', tone: 'positive', note: '6 dẫn · 3 đồng thời · 3 trễ' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Thông tin nhiều không có nghĩa là nhìn rõ',
          md: 'Dashboard vĩ mô tốt không trả lời "mọi thứ đang thế nào". Nó trả lời **"có cần đổi quyết định nào không, và vì sao"**. Mỗi chỉ báo thêm vào làm tăng cơ hội một ô đỏ ngẫu nhiên xuất hiện, và tăng nguy cơ phản ứng với nhiễu.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: chọn chỉ báo như chọn nhân sự',
      blocks: [
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Bắt đầu từ quyết định**: dashboard phục vụ những quyết định nào (vốn đầu tư, tuyển dụng, giá bán, dự trữ tiền)?',
            '**Phân loại theo thời điểm**: dẫn (báo trước chu kỳ), đồng thời (xác nhận hiện tại), trễ (xác nhận hậu quả).',
            '**Sàng lọc 5 tiêu chí**: ý nghĩa kinh tế, tính dẫn thực nghiệm, độ trễ công bố ngắn, ít bị điều chỉnh, có chủ sở hữu dữ liệu.',
            '**Tổng hợp**: một chỉ số khuếch tán trên các chỉ báo dẫn, thay vì 38 ô riêng lẻ.',
            '**Ngưỡng và nhịp**: quy tắc cảnh báo viết trước, review mỗi tháng theo một kịch bản cố định.',
          ],
        },
        {
          kind: 'table',
          title: 'Bộ 12 chỉ báo được chọn (mô phỏng)',
          columns: [
            { key: 'group', label: 'Nhóm' },
            { key: 'name', label: 'Chỉ báo' },
            { key: 'freq', label: 'Tần suất' },
            { key: 'lag', label: 'Độ trễ công bố', align: 'right' },
            { key: 'decision', label: 'Phục vụ quyết định' },
          ],
          rows: [
            { group: 'Dẫn', name: 'Đơn hàng mới (khảo sát nhà quản trị mua hàng)', freq: 'Tháng', lag: 'T+1 ngày', decision: 'Công suất, tồn kho' },
            { group: 'Dẫn', name: 'Đơn hàng xuất khẩu mới', freq: 'Tháng', lag: 'T+20 ngày', decision: 'Công suất, tuyển dụng' },
            { group: 'Dẫn', name: 'Giấy phép xây dựng', freq: 'Tháng', lag: 'T+30 ngày', decision: 'Đầu tư vật liệu' },
            { group: 'Dẫn', name: 'Tín dụng mới cho doanh nghiệp', freq: 'Tháng', lag: 'T+15 ngày', decision: 'Vốn lưu động' },
            { group: 'Dẫn', name: 'Chênh lệch lãi suất dài – ngắn', freq: 'Ngày', lag: 'T+1 ngày', decision: 'Cơ cấu nợ' },
            { group: 'Dẫn', name: 'Niềm tin người tiêu dùng', freq: 'Tháng', lag: 'T+20 ngày', decision: 'Khuyến mãi, tồn kho' },
            { group: 'Đồng thời', name: 'Sản xuất công nghiệp (IIP)', freq: 'Tháng', lag: 'T+10 ngày', decision: 'Xác nhận chu kỳ' },
            { group: 'Đồng thời', name: 'Bán lẻ thực', freq: 'Tháng', lag: 'T+10 ngày', decision: 'Xác nhận chu kỳ' },
            { group: 'Đồng thời', name: 'Việc làm đóng bảo hiểm xã hội', freq: 'Tháng', lag: 'T+30 ngày', decision: 'Tuyển dụng' },
            { group: 'Trễ', name: 'Lạm phát lõi', freq: 'Tháng', lag: 'T+5 ngày', decision: 'Giá bán, lương' },
            { group: 'Trễ', name: 'Tỷ lệ thất nghiệp', freq: 'Quý', lag: 'T+30 ngày', decision: 'Xác nhận hậu quả' },
            { group: 'Trễ', name: 'Nợ xấu hệ thống', freq: 'Quý', lag: 'T+45 ngày', decision: 'Rủi ro công nợ' },
          ],
          caption: 'Danh mục 38 → 12: bỏ 9 chỉ báo trùng thông tin (tương quan > 0,9), 8 chỉ báo trễ > 60 ngày, 6 chỉ báo không gắn với quyết định nào, 3 chỉ báo hay bị điều chỉnh lớn sau công bố. 38 − 9 − 8 − 6 − 3 = 12.',
        },
        {
          kind: 'quiz',
          id: 'macro-dashboard-leading-indicators-q1',
          question: 'Một chỉ báo "hay" có tương quan cao với GDP nhưng công bố trễ 75 ngày và hay bị điều chỉnh lớn. Nên xử lý thế nào?',
          options: [
            {
              id: 'a',
              text: 'Giữ lại vì tương quan cao với GDP chứng tỏ nó là chỉ báo tốt.',
              explain: 'Tương quan cao nhưng ra sau 75 ngày thì không còn "dẫn" theo nghĩa dùng được: tới lúc có số, quyết định đã phải ra. Điều chỉnh lớn còn khiến số đầu tiên là số sai.',
            },
            {
              id: 'b',
              text: 'Không đưa vào tầng headline; nếu cần, để ở tầng chẩn đoán, và ưu tiên chỉ báo thay thế công bố sớm hơn, ít điều chỉnh hơn.',
              correct: true,
              explain: 'Đúng. Giá trị của chỉ báo dẫn là tính *dùng được kịp lúc*: độ dẫn thực nghiệm, độ trễ công bố và độ ổn định của số đầu tiên đều là tiêu chí. Chỉ báo hay nhưng không kịp lúc thuộc về phân tích hồi cứu.',
            },
            {
              id: 'c',
              text: 'Giữ lại nhưng đổi sang tần suất ngày cho nhanh.',
              explain: 'Độ trễ công bố do nguồn dữ liệu quyết định, không đổi được chỉ bằng đổi tần suất hiển thị.',
            },
          ],
        },
      ],
    },
    {
      id: 'analysis-timing',
      kind: 'analysis',
      title: 'Bước 1 — Độ trễ công bố và mùa vụ: đừng đọc nhầm lịch thành kinh tế',
      blocks: [
        {
          kind: 'text',
          md: 'Có hai nguồn "tín hiệu giả" phổ biến nhất. Thứ nhất, các chỉ báo ra ở **thời điểm khác nhau**: cùng một ngày họp, PMI là tháng này còn việc làm là tháng trước nữa. Thứ hai, **mùa vụ và lịch**: kỳ nghỉ lễ lớn trong tháng 2 làm sản xuất và bán lẻ tụt mạnh nhưng không báo hiệu suy yếu.',
        },
        {
          kind: 'table',
          title: 'Tháng 2/26 (kỳ nghỉ lễ lớn): số thô và số đã điều chỉnh mùa vụ/lịch',
          columns: [
            { key: 'ind', label: 'Chỉ báo' },
            { key: 'raw', label: 'Thô, so tháng trước', align: 'right' },
            { key: 'sa', label: 'Điều chỉnh, so tháng trước', align: 'right' },
            { key: 'gap', label: 'Phần do mùa vụ/lịch', align: 'right' },
          ],
          rows: [
            { ind: 'Bán lẻ thực', raw: '−9,0%', sa: '+0,6%', gap: '−9,6 điểm %' },
            { ind: 'Sản xuất công nghiệp (IIP)', raw: '−14,5%', sa: '−0,8%', gap: '−13,7 điểm %' },
            { ind: 'Đơn hàng xuất khẩu mới', raw: '−11,0%', sa: '+0,3%', gap: '−11,3 điểm %' },
          ],
          highlight: [{ row: 1, tone: 'warning' }],
          caption: 'Tháng 3 số thô bật lại +12,0% (đơn xuất khẩu) trong khi số điều chỉnh chỉ +0,4%. Cú tụt rồi bật lại là *lịch*, không phải chu kỳ.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Quy tắc dashboard cho độ trễ và mùa vụ',
          md: 'Hiển thị **số điều chỉnh mùa vụ/lịch** làm mặc định cho chuỗi tháng, giữ số thô ở tầng chẩn đoán. Mỗi ô ghi *kỳ dữ liệu* và *ngày công bố*, đừng ghi "tháng này". Hiệu chỉnh mùa vụ cũng làm thay đổi số lịch sử khi có dữ liệu mới, nên dashboard phải gắn nhãn "có thể điều chỉnh" cho số mới nhất.',
        },
        {
          kind: 'quiz',
          id: 'macro-dashboard-leading-indicators-q2',
          question: 'Số đơn xuất khẩu thô tháng 2 giảm 11,0% so tháng trước, số điều chỉnh +0,3%. Đề xuất nào hợp lý nhất cho cuộc họp?',
          options: [
            {
              id: 'a',
              text: 'Cắt giảm công suất ngay, vì đơn hàng giảm hơn 10% là tín hiệu mạnh.',
              explain: 'Phần lớn mức giảm đến từ kỳ nghỉ lễ lớn. Cắt công suất theo số thô là phản ứng thái quá với một điểm dữ liệu, tháng 3 đã bật lại cho thấy điều đó.',
            },
            {
              id: 'b',
              text: 'Không đổi quyết định chỉ vì số này: số điều chỉnh gần như đi ngang; ghi nhận và chờ các chỉ báo dẫn khác xác nhận trước khi hành động.',
              correct: true,
              explain: 'Đúng. Sau điều chỉnh không có tín hiệu suy yếu. Với một điểm dữ liệu duy nhất, câu hỏi đúng là: có chỉ báo dẫn khác xác nhận cùng hướng không, không phải điểm này đỏ hay xanh.',
            },
            {
              id: 'c',
              text: 'Loại chỉ báo này khỏi dashboard vì nhiễu theo mùa quá mạnh.',
              explain: 'Nhiễu mùa vụ xử lý được bằng điều chỉnh. Loại chỉ báo vì lý do này sẽ làm mất một chỉ báo dẫn hữu ích.',
            },
          ],
        },
      ],
    },
    {
      id: 'analysis-thresholds',
      kind: 'analysis',
      title: 'Bước 2 — Ngưỡng cảnh báo: gom nhiều chỉ báo, yêu cầu xác nhận',
      blocks: [
        {
          kind: 'text',
          md: 'Thay vì đặt ngưỡng riêng cho từng chỉ báo (rất dễ báo động nhầm), dashboard dùng **chỉ số khuếch tán**: đếm xem bao nhiêu trong 6 chỉ báo dẫn đang xấu đi (trung bình 3 tháng đi xuống sau điều chỉnh mùa vụ). Trạng thái chỉ đổi khi tín hiệu được **xác nhận qua hai tháng liên tiếp**.',
        },
        {
          kind: 'table',
          title: 'Quy tắc trạng thái',
          columns: [
            { key: 'state', label: 'Trạng thái' },
            { key: 'rule', label: 'Điều kiện' },
            { key: 'act', label: 'Hành động' },
          ],
          rows: [
            { state: 'Bình thường', rule: '≤ 2/6 chỉ báo dẫn xấu đi', act: 'Không đổi kế hoạch' },
            { state: 'Theo dõi', rule: '3/6, hoặc ≥ 4/6 trong đúng 1 tháng', act: 'Họp chẩn đoán, chưa đổi quyết định' },
            { state: 'Cảnh báo', rule: '≥ 4/6 trong 2 tháng liên tiếp', act: 'Kích hoạt kịch bản đã duyệt trước (giảm đầu tư mới, giữ tiền mặt)' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Thoát khỏi Cảnh báo khi ≤ 3/6 trong 2 tháng liên tiếp, để tránh chuyển trạng thái liên tục quanh ngưỡng.',
        },
        {
          kind: 'chart',
          title: 'Số chỉ báo dẫn xấu đi (trên 6), T10/25 – T9/26',
          type: 'bar',
          xKey: 'month',
          series: [{ key: 'count', label: 'Số chỉ báo xấu đi' }],
          data: [
            { month: 'T10/25', count: 2 },
            { month: 'T11/25', count: 2 },
            { month: 'T12/25', count: 3 },
            { month: 'T1/26', count: 2 },
            { month: 'T2/26', count: 3 },
            { month: 'T3/26', count: 3 },
            { month: 'T4/26', count: 4 },
            { month: 'T5/26', count: 3 },
            { month: 'T6/26', count: 4 },
            { month: 'T7/26', count: 5 },
            { month: 'T8/26', count: 5 },
            { month: 'T9/26', count: 4 },
          ],
          marker: { x: 'T7/26', label: 'Cảnh báo (2 tháng liên tiếp ≥ 4)' },
          caption: 'T4/26 và T6/26 có 4/6 nhưng tháng liền sau lại giảm, chỉ ở mức "Theo dõi". Đến T7/26 (5/6, sau T6/26 là 4/6) tín hiệu được xác nhận và mới chuyển sang Cảnh báo. T9/26 vẫn ở Cảnh báo vì chưa đủ hai tháng ≤ 3/6.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Chỉ số khuếch tán cũng có sai số',
          md: 'Quy tắc "hai tháng" đổi một ít độ nhạy lấy ít báo động giả: ở T7/26, tín hiệu đến muộn hơn một tháng so với phản ứng ngay ở T4/26. Đây là **trade-off có chủ ý**; khi chi phí chậm trễ cao (ví dụ công suất khó đảo chiều) có thể hạ ngưỡng nhưng phải xem lại tỷ lệ báo động giả trên lịch sử.',
        },
        {
          kind: 'quiz',
          id: 'macro-dashboard-leading-indicators-q3',
          question: 'Một lãnh đạo đề nghị "nâng cấp" dashboard: thêm 20 chỉ báo mới và chuyển Cảnh báo ngay khi có 4/6 chỉ báo dẫn xấu đi trong 1 tháng. Đánh giá nào đúng?',
          options: [
            {
              id: 'a',
              text: 'Chấp nhận cả hai vì càng nhiều thông tin, nhạy hơn thì càng an toàn.',
              explain: 'Nhiều chỉ báo hơn làm tăng số ô đỏ ngẫu nhiên; ngưỡng một tháng làm tăng báo động giả (T4/26 và T6/26 sẽ thành Cảnh báo rồi bị đảo lại).',
            },
            {
              id: 'b',
              text: 'Mỗi chỉ báo mới phải qua 5 tiêu chí sàng lọc và gắn với một quyết định; muốn nhạy hơn thì kiểm tra tỷ lệ báo động giả trên lịch sử trước khi đổi quy tắc xác nhận.',
              correct: true,
              explain: 'Đúng. Mở rộng và nới ngưỡng đều có chi phí. Thay đổi phải được đo bằng lịch sử: nếu hạ ngưỡng làm thêm vài báo động giả mà chỉ sớm hơn một tháng thì đó là quyết định kinh doanh, không phải mặc định.',
            },
            {
              id: 'c',
              text: 'Từ chối cả hai để bảo đảm dashboard ổn định.',
              explain: 'Đóng băng tuyệt đối làm dashboard lạc hậu. Điều cần là quy trình thay đổi có kiểm chứng, không phải cấm thay đổi.',
            },
          ],
        },
      ],
    },
    {
      id: 'analysis-review',
      kind: 'analysis',
      title: 'Bước 3 — Nhịp review hằng tháng chống phản ứng thái quá',
      blocks: [
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Ngày 1–2**: cập nhật dữ liệu, ghi nhãn kỳ dữ liệu, ngày công bố và những số vừa bị điều chỉnh.',
            '**Ngày 3**: nhóm phân tích chạy danh sách kiểm tra cho mọi ô đổi trạng thái (xem bên dưới) và viết một trang tóm tắt.',
            '**Ngày 5 – họp 45 phút**: đọc trang tóm tắt, chỉ thảo luận chỉ báo đổi trạng thái hoặc đổi hướng; quyết định chỉ khi trạng thái là Cảnh báo.',
            '**Sau họp**: ghi vào nhật ký quyết định (số liệu lúc đó, quyết định, người chịu trách nhiệm), dùng để đánh giá lại sau 6 tháng.',
          ],
        },
        {
          kind: 'list',
          style: 'check',
          items: [
            'Điểm này có phải do **mùa vụ hoặc lịch** (nghỉ lễ, ngày làm việc) không?',
            'Số mới nhất **có bị điều chỉnh** ở kỳ sau không, và biên điều chỉnh thường là bao nhiêu?',
            'Có **ít nhất một chỉ báo dẫn độc lập khác** xác nhận cùng hướng không?',
            'Hướng đi có **kéo dài** qua nhiều kỳ không, hay chỉ một điểm nằm ngoài dải thông thường?',
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Dải bất định thay cho con số trần',
          md: 'Với mỗi chỉ báo, hiển thị **dải dao động thông thường** (ví dụ khoảng 2 độ lệch chuẩn của biến động 36 tháng gần nhất) cạnh giá trị mới nhất. Điểm nằm trong dải là nhiễu bình thường, không đáng một cuộc họp. Điều này làm cho "một điểm đỏ" mất sức hấp dẫn khi nó chưa vượt khỏi dải.',
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
          md: '**Đề xuất:** thay 38 ô bằng dashboard hai tầng. Tầng 1 một trang gồm chỉ số khuếch tán 6 chỉ báo dẫn và trạng thái hiện tại (Bình thường/Theo dõi/Cảnh báo), kèm 3 chỉ báo đồng thời và 3 chỉ báo trễ để xác nhận. Tầng 2 là tầng chẩn đoán cho phần còn lại. Với dữ liệu mô phỏng, hệ thống đang ở **Cảnh báo** từ T7/26 (5/6 chỉ báo dẫn xấu đi), giữ nguyên sang T9/26 (4/6).',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Sàng lọc danh mục 38 chỉ báo theo 5 tiêu chí, chốt 12 chỉ báo và tài liệu hóa nguồn, độ trễ, mức điều chỉnh của từng chỉ báo',
              owner: 'Trưởng nhóm kinh tế + Data Engineering',
              metric: 'Số chỉ báo trên dashboard tầng 1',
              threshold: '≤ 12, mỗi chỉ báo gắn ≥ 1 quyết định',
            },
            {
              action: 'Dùng số điều chỉnh mùa vụ/lịch làm mặc định, nhãn "kỳ dữ liệu / ngày công bố / có thể điều chỉnh" trên mọi ô',
              owner: 'Data Engineering',
              metric: 'Tỷ lệ ô tầng 1 có đủ nhãn',
              threshold: '100%',
            },
            {
              action: 'Cài chỉ số khuếch tán và quy tắc 2 tháng; kiểm thử ngược trên ≥ 5 năm lịch sử để biết tỷ lệ báo động giả và độ sớm',
              owner: 'Nhóm phân tích kinh tế',
              metric: 'Tỷ lệ cảnh báo giả / độ sớm trung bình',
              threshold: 'Báo cáo trước khi ban hành; xem lại mỗi năm',
            },
            {
              action: 'Soạn sẵn kịch bản hành động cho trạng thái Cảnh báo (giảm đầu tư mới, giữ tiền mặt, khóa tuyển dụng không thiết yếu) và duyệt trước',
              owner: 'CFO + COO',
              metric: 'Thời gian từ Cảnh báo đến hành động',
              threshold: '≤ 10 ngày làm việc',
            },
            {
              action: 'Vận hành nhịp review hằng tháng và nhật ký quyết định; đánh giá lại quy tắc sau 6 tháng',
              owner: 'Trưởng nhóm kinh tế',
              metric: 'Quyết định đổi kế hoạch dựa trên một điểm dữ liệu',
              threshold: '0 trường hợp',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Giải pháp biến dashboard từ "kho số" thành **công cụ ra quyết định có quy tắc**. Ít chỉ báo giúp chú ý có hạn được dùng đúng chỗ, số điều chỉnh mùa vụ loại nhiễu lịch, yêu cầu xác nhận hai tháng cắt báo động giả, và kịch bản duyệt trước giúp khi Cảnh báo thì hành động nhanh mà không tranh luận từ đầu. Trade-off chấp nhận: tín hiệu chậm hơn khoảng một tháng so với phản ứng ngay lập tức.',
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
              title: 'Thêm chỉ số cho "đầy đủ"',
              why: 'Càng nhiều ô, càng có nhiều ô đỏ ngẫu nhiên mỗi tháng, và người xem chú ý vào ô nổi bật nhất thay vì bức tranh chung.',
              instead: 'Chọn theo quyết định và 5 tiêu chí; số chỉ báo tầng 1 có trần cứng.',
            },
            {
              title: 'Đọc số thô, bỏ qua lịch và độ trễ',
              why: 'Kỳ nghỉ lễ làm bán lẻ, sản xuất và đơn xuất khẩu tụt hơn 9 điểm % nhưng không phải suy yếu; các chỉ báo ra ở thời điểm khác nhau nên so sánh sai kỳ.',
              instead: 'Mặc định số điều chỉnh; ghi rõ kỳ dữ liệu và ngày công bố.',
            },
            {
              title: 'Hành động theo một điểm dữ liệu',
              why: 'Một điểm có thể là nhiễu hoặc sẽ bị điều chỉnh. Cắt kế hoạch rồi đảo lại tốn kém hơn chờ thêm một tháng.',
              instead: 'Yêu cầu xác nhận từ nhiều chỉ báo độc lập qua nhiều kỳ; kịch bản và ngưỡng được duyệt trước.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Chọn chỉ báo theo quyết định và tiêu chí (ý nghĩa, tính dẫn, độ trễ công bố, độ ổn định, nguồn dữ liệu); ít nhưng đủ dẫn/đồng thời/trễ, thay vì 38 ô rời rạc.',
    'Dùng số điều chỉnh mùa vụ/lịch làm mặc định và ghi rõ kỳ dữ liệu, ngày công bố; một cú tụt đúng kỳ nghỉ lễ không phải suy yếu.',
    'Gom chỉ báo dẫn thành chỉ số khuếch tán, yêu cầu xác nhận nhiều kỳ trước khi cảnh báo và chuẩn bị sẵn kịch bản hành động, để không phản ứng thái quá với một điểm dữ liệu.',
  ],
  references: [
    {
      title: 'Interpreting OECD Composite Leading Indicators (CLIs)',
      publisher: 'OECD',
      url: 'https://oecd.org/content/dam/oecd/en/data/methods/Interpreting_OECD_Composite_Leading_Indicators.pdf',
      note: 'Hướng dẫn đọc CLI: chú ý hướng đi hơn mức tuyệt đối, không dựa vào một quan sát đơn lẻ và nhớ rằng CLI có thể được điều chỉnh khi dữ liệu nền được cập nhật.',
    },
    {
      title: 'OECD System of Composite Leading Indicators',
      publisher: 'OECD',
      url: 'https://oecd.org/content/dam/oecd/en/data/methods/OECD-System-of-Composite-Leading-Indicators.pdf',
      note: 'Mô tả hệ thống CLI của OECD: mục tiêu báo trước điểm ngoặt của chu kỳ, và các tiêu chí chọn thành phần như ý nghĩa kinh tế, hành vi chu kỳ, chất lượng dữ liệu, tính kịp thời.',
    },
    {
      title: 'ESS Guidelines on seasonal adjustment – 2024 edition',
      publisher: 'Eurostat',
      url: 'https://ec.europa.eu/eurostat/web/products-manuals-and-guidelines/w/ks-gq-24-012',
      note: 'Hướng dẫn hài hòa hóa việc hiệu chỉnh mùa vụ cho thống kê ngắn hạn trong Hệ thống Thống kê châu Âu; bản 2024 bổ sung phần xử lý cú sốc và chuỗi dài.',
    },
  ],
}
