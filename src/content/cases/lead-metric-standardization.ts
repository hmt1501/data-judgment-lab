import type { CaseStudy } from '../types'

/*
 * Số liệu mock (sàn TMĐT, báo cáo tháng 9), đã kiểm tra khớp nhau:
 *   "Khách hàng hoạt động" — ba team, ba con số:
 *     Marketing 412.000 = device_id/cookie có ≥1 session, 30 ngày cuốn chiếu, múi giờ UTC (tool analytics)
 *       − 58.000 thiết bị trùng của cùng customer_id            → 354.000
 *       − 62.000 khách vãng lai chưa đăng nhập (không định danh)  → 292.000
 *       −  6.000 đổi cửa sổ: 30 ngày cuốn chiếu UTC → tháng 9 theo UTC+7 → 286.000 = Product
 *       − 88.000 khách đăng nhập nhưng không có đơn hoàn tất      → 198.000 = Finance
 *   Xu hướng (nghìn): Marketing 350 → 356 → 389 → 412 (T8 app nhúng webview tạo cookie mới)
 *                     Product 274 → 278 → 281 → 286 · Finance 192 → 194 → 196 → 198
 *     Tăng T9: Marketing 23/389 = +5,9% · Product 5/281 = +1,8% · Finance 2/196 = +1,0%
 *   "Tỷ lệ chuyển đổi" tháng 9 (UTC+7):
 *     Sessions log thô 7.200.000 · bot 1.200.000 → sessions hợp lệ 6.000.000
 *     Đơn tạo 252.000 − test/nội bộ 3.000 = 249.000 − thanh toán thất bại 21.000 = 228.000 đơn đặt thành công
 *       − hủy/hoàn 12.000 = 216.000 đơn hoàn tất
 *     Marketing 252.000 / 6.000.000 = 4,20% · bỏ test: 249.000 / 6,0 tr = 4,15%
 *     Product 228.000 / 6.000.000 = 3,80% · bỏ hủy/hoàn: 216.000 / 6,0 tr = 3,60%
 *     Finance 216.000 / 7.200.000 = 3,00%
 *   198.000 khách mua · 216.000 đơn hoàn tất → 1,09 đơn/khách
 */
export const leadMetricStandardization: CaseStudy = {
  id: 'lead-metric-standardization',
  title: 'Ba team, ba con số "khách hoạt động": chuẩn hóa metric cho ban lãnh đạo',
  domain: 'ecommerce',
  level: 'lead',
  minutes: 14,
  skills: ['metric-definition', 'data-quality', 'tradeoff'],
  question:
    'Trong cùng một buổi review tháng, Marketing, Product và Finance báo cáo ba con số "khách hàng hoạt động" và ba tỷ lệ chuyển đổi khác nhau. Con số nào đúng, và làm sao để chuyện này không lặp lại?',
  summary:
    'Viết spec metric (tử số, mẫu số, grain, cửa sổ, bộ lọc, nguồn), đối chiếu các con số bằng bảng bridge, rồi dựng governance: owner, metrics catalog/semantic layer, change log, chứng nhận và kế hoạch rollout.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là Analytics Lead của một sàn thương mại điện tử. Ở buổi review kết quả tháng 9, ba slide liên tiếp đưa ra ba con số khác nhau cho cùng một cái tên. CEO dừng cuộc họp: *"Rốt cuộc mình có bao nhiêu khách hoạt động? Tuần sau anh/chị cho tôi một con số, và một cách để ba team không cãi nhau nữa."*',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Khách hoạt động — Marketing', value: '412.000', delta: '+5,9%', tone: 'positive', note: 'CR báo cáo: 4,20%' },
            { label: 'Khách hoạt động — Product', value: '286.000', delta: '+1,8%', tone: 'neutral', note: 'CR báo cáo: 3,80%' },
            { label: 'Khách hoạt động — Finance', value: '198.000', delta: '+1,0%', tone: 'neutral', note: 'CR báo cáo: 3,00%' },
            { label: 'Chênh lệch lớn nhất', value: '2,1 lần', tone: 'warning', note: '412.000 / 198.000' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Vấn đề không phải "ai tính sai"',
          md: 'Rất có thể **cả ba đều tính đúng theo định nghĩa của mình**. Vấn đề là cùng một cái tên đang mang ba định nghĩa khác nhau, và không ai sở hữu định nghĩa "chính thức". Mỗi tháng tranh luận về con số là một tháng không tranh luận về quyết định.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: spec trước, bridge sau, governance cuối cùng',
      blocks: [
        {
          kind: 'text',
          md: 'Một metric chỉ "được định nghĩa" khi trả lời đủ sáu câu: **đếm cái gì (tử số), trên cái gì (mẫu số), đơn vị đếm (grain), trong khoảng thời gian nào và múi giờ nào (cửa sổ), loại trừ gì (bộ lọc), lấy từ bảng nào (nguồn)**. Đặt ba định nghĩa hiện tại cạnh nhau theo khung này:',
        },
        {
          kind: 'table',
          title: 'Spec hiện tại của "khách hàng hoạt động" ở ba team',
          columns: [
            { key: 'field', label: 'Thành phần spec' },
            { key: 'mkt', label: 'Marketing' },
            { key: 'prod', label: 'Product' },
            { key: 'fin', label: 'Finance' },
          ],
          rows: [
            { field: 'Đếm cái gì', mkt: 'Thiết bị có ≥1 session', prod: 'Khách đăng nhập có ≥1 session', fin: 'Khách có ≥1 đơn hoàn tất' },
            { field: 'Grain (đơn vị đếm)', mkt: 'device_id / cookie', prod: 'customer_id', fin: 'customer_id' },
            { field: 'Cửa sổ', mkt: '30 ngày cuốn chiếu', prod: 'Tháng dương lịch', fin: 'Tháng dương lịch' },
            { field: 'Múi giờ', mkt: 'UTC (mặc định tool)', prod: 'UTC+7', fin: 'UTC+7' },
            { field: 'Bộ lọc', mkt: 'Lọc bot của tool', prod: 'Bỏ tài khoản nội bộ', fin: 'Bỏ đơn test, hủy, hoàn' },
            { field: 'Nguồn', mkt: 'Tool analytics web/app', prod: 'Bảng sự kiện trong warehouse', fin: 'Bảng đơn hàng ERP' },
          ],
          caption: 'Khác nhau ở grain, cửa sổ, múi giờ, bộ lọc và cả *khái niệm*: Marketing và Product đếm người truy cập, Finance đếm người mua.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Spec hóa**: viết lại từng con số theo sáu thành phần trên, không suy đoán, hỏi trực tiếp người dựng dashboard và đọc SQL.',
            '**Bridge**: đi từ con số này sang con số kia bằng từng bước khác biệt, mỗi bước có số lượng cụ thể. Bridge khớp 100% thì mới biết không có lỗi dữ liệu ẩn.',
            '**Quyết định định nghĩa**: tách khái niệm khác nhau thành metric có tên khác nhau, chọn một metric headline cho lãnh đạo.',
            '**Governance**: owner, catalog/semantic layer, change log, chứng nhận, và lịch rollout có chạy song song.',
          ],
        },
        {
          kind: 'quiz',
          id: 'lead-metric-standardization-q1',
          question: 'CEO cần một con số trong tuần. Việc đầu tiên hợp lý nhất là gì?',
          options: [
            {
              id: 'a',
              text: 'Lấy số của Finance vì dữ liệu ERP là "nguồn sự thật", yêu cầu hai team kia dùng theo.',
              explain: 'ERP chính xác về đơn hàng, nhưng Finance đang đo **người mua**, một khái niệm khác với người truy cập. Áp đặt một số mà không hiểu vì sao các số khác nhau sẽ làm mất thông tin Marketing và Product thật sự cần, và họ sẽ tiếp tục dùng số riêng "trong bóng tối".',
            },
            {
              id: 'b',
              text: 'Lấy trung bình ba con số để có một số "trung hòa" báo cáo tạm.',
              explain: 'Trung bình của ba định nghĩa khác nhau không đo bất cứ thứ gì. Nó còn che mất câu hỏi quan trọng: chênh lệch đến từ khác biệt định nghĩa hay từ lỗi dữ liệu.',
            },
            {
              id: 'c',
              text: 'Viết spec cho cả ba con số và dựng bảng bridge giải thích từng phần chênh lệch, trước khi chọn định nghĩa chính thức.',
              correct: true,
              explain: 'Đúng. Bridge cho biết chính xác mỗi khác biệt (grain, cửa sổ, bộ lọc, khái niệm) đóng góp bao nhiêu. Nếu bridge khớp hoàn toàn thì không có lỗi dữ liệu; nếu còn phần dư không giải thích được thì đó là lỗi cần sửa trước. Có bridge rồi, việc chọn định nghĩa trở thành quyết định kinh doanh minh bạch thay vì tranh cãi.',
            },
          ],
        },
      ],
    },
    {
      id: 'bridge-active',
      kind: 'analysis',
      title: 'Bước 1 — Bridge "khách hoạt động": 412.000 → 286.000 → 198.000',
      blocks: [
        {
          kind: 'table',
          title: 'Bảng bridge khách hàng hoạt động tháng 9',
          columns: [
            { key: 'step', label: 'Bước' },
            { key: 'type', label: 'Loại khác biệt' },
            { key: 'delta', label: 'Thay đổi', align: 'right' },
            { key: 'total', label: 'Lũy kế', align: 'right' },
          ],
          rows: [
            { step: 'Số Marketing (thiết bị, 30 ngày, UTC)', type: '—', delta: '—', total: '412.000' },
            { step: 'Gộp nhiều thiết bị của cùng customer_id', type: 'Grain / dedup', delta: '−58.000', total: '354.000' },
            { step: 'Bỏ khách vãng lai chưa đăng nhập', type: 'Bộ lọc', delta: '−62.000', total: '292.000' },
            { step: '30 ngày cuốn chiếu UTC → tháng 9 UTC+7', type: 'Cửa sổ + múi giờ', delta: '−6.000', total: '286.000' },
            { step: '= Số Product (khách đăng nhập, tháng)', type: '—', delta: '—', total: '286.000' },
            { step: 'Chỉ giữ khách có ≥1 đơn hoàn tất', type: 'Khái niệm', delta: '−88.000', total: '198.000' },
            { step: '= Số Finance (khách mua, tháng)', type: '—', delta: '—', total: '198.000' },
          ],
          highlight: [
            { row: 4, tone: 'positive' },
            { row: 5, tone: 'warning' },
            { row: 6, tone: 'positive' },
          ],
          caption: 'Bridge khớp 100%, không có phần dư: chênh lệch là do định nghĩa, không phải lỗi pipeline. Ba bước đầu là khác biệt *kỹ thuật*, bước cuối là khác biệt *khái niệm*.',
        },
        {
          kind: 'chart',
          title: 'Ba con số "khách hoạt động" theo tháng',
          type: 'line',
          xKey: 'month',
          unit: ' nghìn',
          series: [
            { key: 'mkt', label: 'Marketing' },
            { key: 'prod', label: 'Product' },
            { key: 'fin', label: 'Finance' },
          ],
          data: [
            { month: 'T6', mkt: 350, prod: 274, fin: 192 },
            { month: 'T7', mkt: 356, prod: 278, fin: 194 },
            { month: 'T8', mkt: 389, prod: 281, fin: 196 },
            { month: 'T9', mkt: 412, prod: 286, fin: 198 },
          ],
          marker: { x: 'T8', label: 'App nhúng webview → cookie mới' },
          caption: 'Không chỉ mức mà cả *xu hướng* cũng lệch: từ T8, app mở trang khuyến mãi bằng webview, mỗi lần mở có thể sinh cookie mới nên số thiết bị tăng nhanh hơn số người thật. Một thay đổi kỹ thuật không ai ghi lại đã tạo ra "tăng trưởng".',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của Analytics Lead',
          md: 'Ba bước kỹ thuật (dedup, đăng nhập, múi giờ) nên được **chuẩn hóa về một cách duy nhất**: grain `customer_id` khi đo người, tháng dương lịch UTC+7 khi báo cáo tháng. Bước khái niệm thì khác: "người truy cập" và "người mua" đều hữu ích, nên giữ cả hai nhưng **đặt tên khác nhau**. Lỗi gốc là một cái tên phải gánh hai khái niệm.',
        },
        {
          kind: 'quiz',
          id: 'lead-metric-standardization-q2',
          question: 'Sau bridge, cách xử lý tên "khách hàng hoạt động" nào tốt nhất?',
          options: [
            {
              id: 'a',
              text: 'Giữ một tên duy nhất, chọn định nghĩa của Product làm chuẩn vì nằm ở giữa.',
              explain: 'Số "nằm ở giữa" không phải tiêu chí. Finance và Growth vẫn cần đo người mua; nếu chỉ còn một tên, họ sẽ lại tạo số riêng và vấn đề quay lại sau vài tháng.',
            },
            {
              id: 'b',
              text: 'Tách thành các metric có tên riêng (ví dụ "Khách truy cập định danh tháng" và "Khách mua hoạt động tháng"), chuẩn hóa grain/cửa sổ/múi giờ, và chọn một metric làm headline cho lãnh đạo.',
              correct: true,
              explain: 'Đúng. Khác biệt kỹ thuật được xóa bỏ bằng chuẩn chung; khác biệt khái niệm được giữ lại nhưng không còn đụng tên. Lãnh đạo nhận một headline (thường là khách mua hoạt động, vì gắn với doanh thu), các team vẫn có metric chẩn đoán của mình với tên rõ ràng.',
            },
            {
              id: 'c',
              text: 'Cho phép mỗi team giữ định nghĩa riêng, chỉ cần ghi chú định nghĩa ở chân slide.',
              explain: 'Ghi chú chân slide không ai đọc, và con số vẫn bị so sánh chéo trong các cuộc họp. Đây là tình trạng hiện tại, chỉ thêm chữ nhỏ.',
            },
          ],
        },
      ],
    },
    {
      id: 'bridge-conversion',
      kind: 'analysis',
      title: 'Bước 2 — Bridge tỷ lệ chuyển đổi: 4,20% → 3,80% → 3,00%',
      blocks: [
        {
          kind: 'text',
          md: 'Tỷ lệ chuyển đổi khó hơn vì **cả tử số và mẫu số** đều lệch. Cách làm đúng là thay đổi từng thành phần một, giữ nguyên phần còn lại, để mỗi bước chỉ có một nguyên nhân.',
        },
        {
          kind: 'table',
          title: 'Bridge tỷ lệ chuyển đổi tháng 9 (UTC+7)',
          columns: [
            { key: 'step', label: 'Bước' },
            { key: 'num', label: 'Tử số (đơn)', align: 'right' },
            { key: 'den', label: 'Mẫu số (sessions)', align: 'right' },
            { key: 'cr', label: 'CR', align: 'right' },
          ],
          rows: [
            { step: 'Marketing: mọi đơn tạo / sessions đã lọc bot', num: '252.000', den: '6.000.000', cr: '4,20%' },
            { step: 'Bỏ đơn test và đơn nội bộ', num: '249.000', den: '6.000.000', cr: '4,15%' },
            { step: 'Bỏ đơn thanh toán thất bại → Product', num: '228.000', den: '6.000.000', cr: '3,80%' },
            { step: 'Bỏ đơn hủy/hoàn sau khi đặt', num: '216.000', den: '6.000.000', cr: '3,60%' },
            { step: 'Mẫu số dùng log thô, gồm bot → Finance', num: '216.000', den: '7.200.000', cr: '3,00%' },
          ],
          highlight: [
            { row: 2, tone: 'warning' },
            { row: 4, tone: 'negative' },
          ],
          caption: 'Bước cuối là lỗi thật chứ không phải lựa chọn định nghĩa: 1,2 triệu session bot (16,7% log thô) làm CR của Finance thấp giả tạo.',
        },
        {
          kind: 'formula',
          expression: 'CR chuẩn = Đơn đặt thành công (bỏ test, đã thanh toán hoặc COD xác nhận) ÷ Sessions hợp lệ (đã lọc bot), theo ngày UTC+7',
          note: 'Hủy/hoàn được đo bằng metric riêng (*tỷ lệ hủy/hoàn*), không trộn vào CR. Lý do: CR phản ánh trải nghiệm mua, còn hủy/hoàn phản ánh vận hành và chất lượng hàng; trộn lại thì không biết phải sửa ở đâu.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Bridge còn phát hiện lỗi',
          md: 'Không có bridge, mọi người sẽ coi 3,00% là "số thận trọng của Finance". Thực ra đó là số có lỗi mẫu số. Đây là lý do bridge phải đi **từng bước có số lượng**: mỗi bước hoặc là một lựa chọn định nghĩa có chủ đích, hoặc là một lỗi cần sửa, không có vùng xám.',
        },
      ],
    },
    {
      id: 'governance',
      kind: 'analysis',
      title: 'Bước 3 — Governance: để định nghĩa không trôi lại',
      blocks: [
        {
          kind: 'text',
          md: 'Chuẩn hóa một lần thì dễ; giữ chuẩn qua các lần đổi tool, đổi người, đổi sản phẩm mới khó. Bốn cơ chế cần có: **owner** cho từng metric, **một nơi định nghĩa duy nhất** (semantic layer / metrics catalog) mà mọi dashboard đọc từ đó, **change log** có phiên bản, và **mức chứng nhận** để người xem biết số nào dùng được cho quyết định.',
        },
        {
          kind: 'table',
          title: 'Metrics catalog sau chuẩn hóa (trích)',
          columns: [
            { key: 'metric', label: 'Metric' },
            { key: 'tier', label: 'Mức' },
            { key: 'owner', label: 'Owner' },
            { key: 'def', label: 'Định nghĩa ngắn' },
            { key: 'version', label: 'Phiên bản' },
          ],
          rows: [
            { metric: 'Khách mua hoạt động tháng', tier: 'Chứng nhận (headline)', owner: 'Finance Analytics', def: 'customer_id có ≥1 đơn hoàn tất, tháng UTC+7', version: 'v1.0' },
            { metric: 'Khách truy cập định danh tháng', tier: 'Chứng nhận', owner: 'Product Analytics', def: 'customer_id đăng nhập có ≥1 session, tháng UTC+7', version: 'v1.0' },
            { metric: 'Tỷ lệ chuyển đổi (CR)', tier: 'Chứng nhận', owner: 'Product Analytics', def: 'Đơn đặt thành công ÷ sessions hợp lệ, UTC+7', version: 'v2.0' },
            { metric: 'Thiết bị truy cập 30 ngày', tier: 'Team (chẩn đoán)', owner: 'Marketing Analytics', def: 'device_id có ≥1 session, cuốn chiếu', version: 'v1.0' },
            { metric: 'Tỷ lệ hủy/hoàn', tier: 'Chứng nhận', owner: 'Ops Analytics', def: 'Đơn hủy/hoàn ÷ đơn đặt thành công', version: 'v1.0' },
          ],
          highlight: [{ row: 0, tone: 'positive' }],
          caption: 'Chỉ metric "Chứng nhận" được xuất hiện trên slide lãnh đạo. Metric mức Team vẫn hợp lệ cho tối ưu nội bộ nhưng không được đặt cạnh số chứng nhận khi chưa ghi rõ tên.',
        },
        {
          kind: 'list',
          style: 'check',
          items: [
            '**Owner** chịu trách nhiệm spec, duyệt thay đổi và trả lời câu hỏi; owner là *người* có tên, không phải "team data".',
            '**Semantic layer / metrics catalog**: định nghĩa viết một lần dưới dạng code (có review), mọi dashboard và notebook truy vấn qua đó thay vì tự viết SQL.',
            '**Change log**: mỗi thay đổi có phiên bản, ngày hiệu lực, lý do, tác động ước tính lên số lịch sử (ví dụ CR v1 → v2: −0,40 điểm % do bỏ đơn thanh toán thất bại).',
            '**Chứng nhận**: metric đạt chuẩn khi có spec đủ sáu thành phần, test dữ liệu tự động (trùng lặp, null, bot, độ trễ), và bridge khớp với số cũ.',
          ],
        },
        {
          kind: 'quiz',
          id: 'lead-metric-standardization-q3',
          question: 'Quý sau, team Marketing muốn đổi CR để chỉ tính sessions từ kênh trả phí. Quy trình đúng là gì?',
          options: [
            {
              id: 'a',
              text: 'Marketing sửa SQL trong dashboard của mình, miễn là ghi chú lại.',
              explain: 'Đây chính là cách ba định nghĩa ra đời. Sửa tại chỗ phá vỡ nguyên tắc một nơi định nghĩa và làm số chứng nhận bị lệch mà không ai biết.',
            },
            {
              id: 'b',
              text: 'Từ chối mọi thay đổi để giữ số ổn định.',
              explain: 'Đóng băng định nghĩa khiến team tự tạo số riêng ngoài hệ thống. Governance tốt cho phép thay đổi, nhưng có kiểm soát.',
            },
            {
              id: 'c',
              text: 'Tạo metric mới có tên riêng (ví dụ "CR kênh trả phí") qua đề xuất gửi owner; nếu thay CR chính thức thì phải có phiên bản mới, chạy song song, backfill lịch sử và thông báo trước ngày hiệu lực.',
              correct: true,
              explain: 'Đúng. Nhu cầu của Marketing là hợp lệ nhưng đó là *một metric khác*, nên thường tạo metric mới thay vì sửa CR. Nếu thật sự cần đổi metric chứng nhận, quy trình phiên bản + chạy song song + backfill + change log giữ được khả năng so sánh theo thời gian.',
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
          md: '**Trả lời CEO:** Tháng 9 có **198.000 khách mua hoạt động** (+1,0%) — đây là headline chính thức. Ngoài ra có 286.000 khách truy cập định danh (+1,8%). Con số 412.000 đếm thiết bị chứ không phải người, và mức +5,9% chủ yếu do thay đổi kỹ thuật webview từ T8. CR chuẩn là **3,80%**; số 3,00% bị kéo thấp bởi session bot trong mẫu số.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Ban hành spec v1 cho 5 metric chứng nhận (đủ tử số, mẫu số, grain, cửa sổ, bộ lọc, nguồn), mỗi metric có owner tên cụ thể',
              owner: 'Analytics Lead + 3 owner metric',
              metric: 'Số metric trên slide lãnh đạo có spec chứng nhận',
              threshold: '100% trong 2 tuần',
            },
            {
              action: 'Đưa định nghĩa vào semantic layer; chuyển dashboard lãnh đạo và dashboard ba team sang đọc từ đó',
              owner: 'Analytics Engineering',
              metric: 'Tỷ lệ dashboard Tier 1 truy vấn qua semantic layer',
              threshold: '100% trước review tháng 11',
            },
            {
              action: 'Chạy song song số cũ và số mới 1 chu kỳ báo cáo, công bố bridge cho từng metric',
              owner: 'Owner từng metric',
              metric: 'Phần dư không giải thích được trong bridge',
              threshold: '< 0,5% giá trị metric',
            },
            {
              action: 'Sửa mẫu số CR của Finance (lọc bot) và thêm test dữ liệu tự động: tỷ lệ bot, trùng lặp, độ trễ',
              owner: 'Data Engineering + Finance Analytics',
              metric: 'Số test dữ liệu fail không được xử lý',
              threshold: '0 test fail quá 24h',
            },
            {
              action: 'Lập change log có phiên bản và quy trình đề xuất thay đổi; review catalog mỗi quý',
              owner: 'Analytics Lead',
              metric: 'Thay đổi định nghĩa không qua change log',
              threshold: '0 trường hợp mỗi quý',
            },
          ],
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Tuần 1–2:** kiểm kê mọi biến thể "khách hoạt động"/"CR" đang dùng, viết spec, dựng bridge, chốt tên và metric headline với CEO.',
            '**Tuần 3–4:** code định nghĩa vào semantic layer, viết test dữ liệu, gắn nhãn chứng nhận.',
            '**Tuần 5–6:** chạy song song, công bố bridge, nhận phản hồi từ ba team.',
            '**Tuần 7:** chuyển chính thức; dashboard cũ gắn nhãn "ngừng dùng" và tắt sau 30 ngày.',
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Giải pháp này **sửa cơ chế chứ không chỉ sửa con số**. Bridge biến tranh cãi thành dữ kiện và lộ ra lỗi thật (bot trong mẫu số). Tách tên giữ lại thông tin mỗi team cần thay vì bắt họ bỏ. Semantic layer, owner và change log ngăn định nghĩa trôi lại, còn chạy song song giúp mọi người tin số mới trước khi số cũ biến mất. Trade-off chấp nhận: mất 6–7 tuần và tạm thời có hai bộ số, đổi lại là hết các cuộc họp tranh cãi số.',
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
              title: 'Chọn "số đúng" theo uy tín của team',
              why: 'Coi số của Finance là sự thật vì đến từ ERP sẽ bỏ qua cả lỗi bot trong mẫu số lẫn nhu cầu đo người truy cập. Uy tín của nguồn không thay thế được spec.',
              instead: 'Dựng bridge từng bước có số lượng; mỗi bước được phân loại là lựa chọn định nghĩa hoặc lỗi.',
            },
            {
              title: 'Chuẩn hóa bằng tài liệu mà không chuẩn hóa bằng code',
              why: 'Trang wiki định nghĩa đẹp nhưng mỗi dashboard vẫn tự viết SQL. Sau vài tháng, SQL trôi khỏi wiki và ba con số quay lại.',
              instead: 'Định nghĩa sống trong semantic layer có review; dashboard Tier 1 bắt buộc truy vấn qua đó.',
            },
            {
              title: 'Đổi định nghĩa mà không phiên bản, không backfill',
              why: 'Số tháng này theo định nghĩa mới, số tháng trước theo định nghĩa cũ: biểu đồ xu hướng xuất hiện "tăng trưởng" hoặc "sụt giảm" không có thật, giống cú nhảy webview ở T8.',
              instead: 'Mọi thay đổi có phiên bản, ngày hiệu lực, chạy song song và tính lại lịch sử, kèm chú thích trên biểu đồ.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Metric chỉ được định nghĩa khi đủ sáu phần: tử số, mẫu số, grain, cửa sổ (kèm múi giờ), bộ lọc và nguồn.',
    'Bridge từng bước có số lượng biến tranh cãi thành dữ kiện: mỗi bước là một lựa chọn định nghĩa có chủ đích hoặc một lỗi cần sửa.',
    'Governance gồm owner, một nơi định nghĩa duy nhất (semantic layer), change log có phiên bản và mức chứng nhận, rollout có chạy song song.',
  ],
  references: [
    {
      title: 'dbt Semantic Layer',
      publisher: 'dbt Developer Hub',
      url: 'https://docs.getdbt.com/docs/use-dbt-semantic-layer/dbt-sl',
      note: 'Ý tưởng định nghĩa metric một lần ở tầng ngữ nghĩa và cho mọi công cụ BI truy vấn qua đó để số liệu nhất quán.',
    },
    {
      title: 'Creating metrics',
      publisher: 'dbt Developer Hub',
      url: 'https://docs.getdbt.com/docs/build/metrics-overview',
      note: 'Cách khai báo metric dạng code (simple, ratio, cumulative…) với tử số, mẫu số, bộ lọc và cửa sổ rõ ràng.',
    },
    {
      title: 'Semantic models',
      publisher: 'dbt Developer Hub',
      url: 'https://docs.getdbt.com/docs/build/semantic-models',
      note: 'Khai báo entity (grain), dimension thời gian và measure — nền tảng để thống nhất đơn vị đếm và cửa sổ thời gian.',
    },
  ],
}
