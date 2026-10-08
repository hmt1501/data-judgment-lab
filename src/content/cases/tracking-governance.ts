import type { CaseStudy } from '../types'

/*
 * Số liệu mock (app mua sắm di động, 6 team cùng gắn event), đã kiểm tra khớp nhau:
 *   Tracking plan: 214 event đang hoạt động; 48.000.000 event nhận/ngày
 *   Chất lượng theo phiên bản app (event nhận → event lỗi schema):
 *     5.11: 14.000.000 → 112.000 (0,80%) · 5.12: 22.000.000 → 198.000 (0,90%) · 5.13: 12.000.000 → 720.000 (6,00%)
 *     Tổng: 48.000.000 → 1.030.000 lỗi (2,15%); 5.13 chiếm 720/1.030 = 69,9% số lỗi
 *     SLO: tỷ lệ event lỗi < 1% (cảnh báo ≥ 2%); 5.13 đổi `item_id` → `product_id` và `price` từ chuỗi sang số, không bump version
 *   Hai định nghĩa `purchase_completed` (số event/ngày):
 *     Growth (client, khi bấm "Thanh toán"): 31.500
 *     Payments (server, khi cổng xác nhận): 27.300 → 27.300 / 31.500 = 86,7%
 *     Phần chênh 4.200 = 3.150 chờ/thất bại (10,0%) + 1.050 gửi trùng khi retry (3,3%) → 27.300 + 3.150 + 1.050 = 31.500
 */
export const trackingGovernance: CaseStudy = {
  id: 'tracking-governance',
  title: 'Sáu team cùng gắn event: quản trị tracking để dữ liệu không vỡ mỗi lần release',
  domain: 'mobile',
  level: 'lead',
  minutes: 14,
  skills: ['tracking', 'data-quality', 'metric-definition'],
  question:
    'Sáu team cùng thêm, đổi, xoá event trên một app. Sau mỗi release, dashboard lại vỡ ở đâu đó và hai team còn định nghĩa `purchase_completed` khác nhau. Cần thiết lập quản trị tracking thế nào để event đáng tin và có chủ rõ ràng?',
  summary:
    'Dựng tracking plan làm nguồn sự thật, quy ước đặt tên và version, kiểm thử schema trong CI cùng giám sát tỷ lệ event lỗi trên production, và xác định owner cùng quy trình xử lý khi hai team định nghĩa một event khác nhau.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là Analytics Lead của một app mua sắm di động. Tuần trước release 5.13, sáng hôm sau ba dashboard báo thiếu dữ liệu, và buổi họp doanh thu có hai con số đơn hàng khác nhau từ hai team. Engineering Manager hỏi: *"Mỗi lần release lại có sự cố tracking. Có cách nào để chuyện này không lặp lại mà không làm chậm các team?"*',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Event đang hoạt động', value: '214', tone: 'neutral', note: 'Trong tracking plan' },
            { label: 'Event nhận mỗi ngày', value: '48 triệu', tone: 'neutral' },
            { label: 'Tỷ lệ event lỗi schema', value: '2,15%', delta: 'SLO < 1%', tone: 'negative', note: '1.030.000 event lỗi' },
            { label: 'Số đơn: Growth vs Payments', value: '31.500 vs 27.300', tone: 'warning', note: 'Cùng tên `purchase_completed`' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Tracking là một API nội bộ',
          md: 'Event là hợp đồng giữa app và mọi dashboard, mô hình, thử nghiệm phía sau. Đổi tên một thuộc tính trong app cũng giống đổi tên trường của API công khai: **người tiêu thụ vỡ mà người sửa không thấy**. Quản trị tracking nghĩa là áp dụng kỷ luật của API (schema, version, kiểm thử, owner) cho dữ liệu hành vi.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: kế hoạch, hợp đồng, giám sát, chủ sở hữu',
      blocks: [
        {
          kind: 'table',
          title: 'Bốn lớp của quản trị tracking',
          columns: [
            { key: 'layer', label: 'Lớp' },
            { key: 'what', label: 'Nội dung' },
            { key: 'tool', label: 'Cơ chế' },
          ],
          rows: [
            { layer: '1. Tracking plan', what: 'Danh mục event: tên, mô tả, khi nào bắn, thuộc tính (kiểu, bắt buộc), owner', tool: 'Một nơi duy nhất, có review như code' },
            { layer: '2. Hợp đồng schema', what: 'Schema machine-readable; thay đổi có version; quy ước đặt tên', tool: 'Schema registry / JSON Schema trong repo' },
            { layer: '3. Kiểm thử và giám sát', what: 'Test schema trong CI; đo tỷ lệ event lỗi và thiếu thuộc tính trên production', tool: 'CI + validation ở pipeline + cảnh báo' },
            { layer: '4. Owner và quy trình', what: 'Ai duyệt thêm/sửa/xoá; ai phân xử khi hai team định nghĩa khác nhau', tool: 'RACI + quy trình đề xuất thay đổi' },
          ],
          caption: 'Các công cụ như Segment Protocols (tracking plan + chặn/ghi nhận vi phạm) và Snowplow (schema + validation + failed events) hiện thực hóa lớp 1–3; lớp 4 là việc của tổ chức.',
        },
        {
          kind: 'quiz',
          id: 'tracking-governance-q1',
          question: 'Sau release 5.13 dashboard vỡ. Hành động dài hạn nào xử lý đúng nguyên nhân gốc?',
          options: [
            {
              id: 'a',
              text: 'Yêu cầu team mobile báo trước mọi thay đổi event qua kênh chat chung.',
              explain: 'Dựa vào trí nhớ và thói quen thì sẽ có lần quên. Cần cơ chế tự động chặn thay đổi phá vỡ hợp đồng, không phải nhắc nhở.',
            },
            {
              id: 'b',
              text: 'Coi schema event là hợp đồng: lưu trong repo, test tự động trong CI để chặn thay đổi phá vỡ, và giám sát tỷ lệ event lỗi trên production.',
              correct: true,
              explain: 'Đúng. CI bắt lỗi trước khi release, giám sát production bắt phần lọt qua (ví dụ phiên bản cũ). Hai lớp này biến "lần sau nhớ báo" thành cơ chế có kiểm soát.',
            },
            {
              id: 'c',
              text: 'Giao một analyst kiểm tra thủ công dữ liệu sau mỗi release.',
              explain: 'Kiểm tra thủ công chậm, không mở rộng theo 214 event và 6 team, và phát hiện sau khi dữ liệu đã bẩn. Có thể là biện pháp tạm, không phải giải pháp.',
            },
          ],
        },
      ],
    },
    {
      id: 'contract',
      kind: 'analysis',
      title: 'Bước 1 — Hợp đồng: đặt tên, schema và version',
      blocks: [
        {
          kind: 'text',
          md: 'Mỗi event trong tracking plan cần đủ: **tên**, **mô tả thời điểm bắn**, **thuộc tính** (tên, kiểu, bắt buộc/tùy chọn, giá trị cho phép), **nguồn** (client/server), **owner** và **version**. Quy ước đặt tên nên ngắn và có thể kiểm tra bằng máy.',
        },
        {
          kind: 'table',
          title: 'Quy ước đặt tên đề xuất (kiểm tra tự động trong CI)',
          columns: [
            { key: 'rule', label: 'Quy tắc' },
            { key: 'good', label: 'Đúng' },
            { key: 'bad', label: 'Sai' },
          ],
          rows: [
            { rule: 'snake_case, đối tượng + hành động (quá khứ)', good: '`checkout_started`, `order_confirmed`', bad: '`CheckoutStart`, `click_btn_2`' },
            { rule: 'Một khái niệm = một tên thuộc tính', good: '`product_id` ở mọi event', bad: '`item_id`, `sku`, `pid` cho cùng ý nghĩa' },
            { rule: 'Kiểu cố định, tiền tệ là số + mã riêng', good: '`price` (number), `currency` = `VND`', bad: '`price` = "199.000đ" (chuỗi)' },
            { rule: 'Không nhúng giá trị vào tên event', good: '`screen_viewed` + `screen_name`', bad: '`viewed_home_screen`, `viewed_cart_screen`' },
          ],
          caption: 'Đặt tên cụ thể là lựa chọn của tổ chức; điều quan trọng là chọn một quy ước, ghi lại và để máy kiểm tra. Ví dụ mô phỏng.',
        },
        {
          kind: 'table',
          title: 'Quy trình thay đổi event theo mức độ phá vỡ',
          columns: [
            { key: 'change', label: 'Thay đổi' },
            { key: 'breaking', label: 'Phá vỡ?' },
            { key: 'process', label: 'Quy trình' },
          ],
          rows: [
            { change: 'Thêm event mới', breaking: 'Không', process: 'Đề xuất → owner domain duyệt → merge vào plan → CI cho phép bắn' },
            { change: 'Thêm thuộc tính tùy chọn', breaking: 'Không', process: 'Cập nhật schema (minor), thông báo người tiêu thụ' },
            { change: 'Đổi tên, đổi kiểu, thêm thuộc tính bắt buộc', breaking: 'Có', process: 'Schema major mới; bắn song song 2 phiên bản; người tiêu thụ chuyển dần; có ngày tắt bản cũ' },
            { change: 'Xoá event', breaking: 'Có', process: 'Đánh dấu deprecated, kiểm tra ai còn dùng, giữ ≥ 2 chu kỳ release rồi mới xoá' },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: 'Schema có version để người tiêu thụ biết thay đổi nào an toàn. Snowplow, ví dụ, hỗ trợ tăng version của schema khi nhu cầu tracking thay đổi và kiểm tra từng event theo schema tương ứng.',
        },
        {
          kind: 'quiz',
          id: 'tracking-governance-q2',
          question: 'Release 5.14 muốn đổi `price` từ chuỗi sang số. Cách đưa lên nào đúng?',
          options: [
            {
              id: 'a',
              text: 'Đổi thẳng trong code app; analyst sẽ chỉnh query sau khi thấy dữ liệu mới.',
              explain: 'Đây là đúng kịch bản của 5.13: người tiêu thụ vỡ mà không biết. Dữ liệu cũ và mới còn trộn lẫn kiểu dữ liệu trong cùng cột.',
            },
            {
              id: 'b',
              text: 'Coi là thay đổi phá vỡ: tạo schema phiên bản mới, bắn song song bản cũ trong một giai đoạn, thông báo người tiêu thụ và đặt ngày tắt bản cũ.',
              correct: true,
              explain: 'Đúng. Vì app cập nhật chậm, nhiều người dùng còn phiên bản cũ nhiều tuần, nên hai schema sẽ cùng tồn tại; song song và ngày tắt giúp mọi người chuyển đổi có kiểm soát.',
            },
            {
              id: 'c',
              text: 'Giữ nguyên chuỗi mãi mãi để không ai bị ảnh hưởng.',
              explain: 'Đóng băng mọi thứ làm dữ liệu kém chất lượng tồn tại vĩnh viễn và các team sẽ tự ý làm cách khác. Thay đổi cần được phép, nhưng có quy trình.',
            },
          ],
        },
      ],
    },
    {
      id: 'monitoring',
      kind: 'analysis',
      title: 'Bước 2 — Giám sát chất lượng: từ 5.13 tìm ra lỗi trong vài giờ',
      blocks: [
        {
          kind: 'text',
          md: 'Chỉ cần đo hai tỷ lệ: **event lỗi schema** (sai kiểu, thiếu thuộc tính bắt buộc, event không có trong plan) và **thiếu thuộc tính** theo từng event quan trọng. Cắt theo *phiên bản app*, vì đây là chiều tìm ra nguồn gốc nhanh nhất.',
        },
        {
          kind: 'table',
          title: 'Chất lượng event theo phiên bản app (một ngày sau release 5.13)',
          columns: [
            { key: 'ver', label: 'Phiên bản' },
            { key: 'total', label: 'Event nhận', align: 'right' },
            { key: 'bad', label: 'Event lỗi', align: 'right' },
            { key: 'rate', label: 'Tỷ lệ lỗi', align: 'right' },
            { key: 'share', label: 'Tỷ trọng tổng số lỗi', align: 'right' },
          ],
          rows: [
            { ver: '5.11', total: '14.000.000', bad: '112.000', rate: '0,80%', share: '10,9%' },
            { ver: '5.12', total: '22.000.000', bad: '198.000', rate: '0,90%', share: '19,2%' },
            { ver: '5.13', total: '12.000.000', bad: '720.000', rate: '6,00%', share: '69,9%' },
            { ver: 'Tổng', total: '48.000.000', bad: '1.030.000', rate: '2,15%', share: '100%' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Phiên bản 5.13 chỉ chiếm 25% lưu lượng nhưng 69,9% số lỗi: nguyên nhân khoanh vùng được ngay. Cụ thể 5.13 đổi `item_id` thành `product_id` và `price` từ chuỗi sang số mà không tăng version. Số liệu mô phỏng.',
        },
        {
          kind: 'chart',
          title: 'Tỷ lệ event lỗi theo phiên bản (SLO: dưới 1%)',
          type: 'bar',
          xKey: 'ver',
          unit: '%',
          series: [{ key: 'rate', label: 'Tỷ lệ lỗi' }],
          data: [
            { ver: '5.11', rate: 0.8 },
            { ver: '5.12', rate: 0.9 },
            { ver: '5.13', rate: 6.0 },
          ],
          caption: 'Hai phiên bản trước vẫn dưới SLO 1%; chỉ 5.13 vượt rất xa ngưỡng cảnh báo 2%.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Chặn hay chỉ ghi nhận?',
          md: 'Chặn event vi phạm bảo vệ dữ liệu sạch nhưng **event bị chặn thường không khôi phục được** và dễ làm mất dữ liệu quan trọng nếu schema sai. Lộ trình an toàn: bắt đầu bằng *ghi nhận và cảnh báo* vi phạm, sửa hết vi phạm đang có, rồi mới bật chặn cho nhóm event cốt lõi (thanh toán, đăng nhập). Tài liệu Segment cũng lưu ý nên chặn sau khi đã xử lý các vi phạm.',
        },
        {
          kind: 'list',
          style: 'check',
          items: [
            '**Trong CI**: test schema (tên theo quy ước, kiểu, thuộc tính bắt buộc) trên event do app bắn ở build thử; PR phá vỡ hợp đồng không merge được.',
            '**Trên production**: tỷ lệ lỗi theo phiên bản × event; cảnh báo khi vượt 2% hoặc tăng gấp đôi so với 7 ngày trước.',
            '**Theo dõi thiếu thuộc tính**: tỷ lệ null của thuộc tính bắt buộc ở các event cốt lõi.',
            '**Đối chiếu nguồn**: định kỳ so số event client với log server cho luồng quan trọng (đơn hàng, thanh toán).',
          ],
        },
      ],
    },
    {
      id: 'ownership',
      kind: 'analysis',
      title: 'Bước 3 — Owner: khi hai team định nghĩa `purchase_completed` khác nhau',
      blocks: [
        {
          kind: 'table',
          title: 'Hai định nghĩa cho cùng tên event',
          columns: [
            { key: 'aspect', label: 'Khía cạnh' },
            { key: 'growth', label: 'Growth' },
            { key: 'pay', label: 'Payments' },
          ],
          rows: [
            { aspect: 'Thời điểm bắn', growth: 'Client, khi người dùng bấm "Thanh toán"', pay: 'Server, khi cổng thanh toán xác nhận' },
            { aspect: 'Số event/ngày', growth: '31.500', pay: '27.300' },
            { aspect: 'Có tính đơn chờ/thất bại?', growth: 'Có', pay: 'Không' },
            { aspect: 'Có trùng khi retry?', growth: 'Có (client gửi lại)', pay: 'Không (khử trùng theo `order_id`)' },
          ],
          caption: 'Chênh lệch 4.200 event = 3.150 đơn chờ/thất bại (10,0% của 31.500) + 1.050 event trùng do retry (3,3%). Payments chiếm 86,7% số event của Growth. Số liệu mô phỏng.',
        },
        {
          kind: 'chart',
          title: 'Phân rã 31.500 event `purchase_completed` của Growth',
          type: 'stackedBar',
          xKey: 'src',
          series: [
            { key: 'ok', label: 'Đơn thành công' },
            { key: 'pending', label: 'Chờ/thất bại' },
            { key: 'dup', label: 'Trùng do retry' },
          ],
          data: [
            { src: 'Growth (client)', ok: 27300, pending: 3150, dup: 1050 },
            { src: 'Payments (server)', ok: 27300, pending: 0, dup: 0 },
          ],
          caption: 'Hai team đều "đúng" theo định nghĩa của mình; lỗi là tên chung cho hai khái niệm.',
        },
        {
          kind: 'text',
          md: 'Cách giải quyết gồm ba phần: **(1) Tách khái niệm, mỗi khái niệm một tên**: `payment_submitted` (client, ý định, Growth sở hữu) và `order_confirmed` (server, nguồn sự thật cho doanh thu, Payments sở hữu). **(2) Quy tắc owner**: event thuộc về team sở hữu *hành vi hoặc giao dịch* mà nó mô tả; nếu đo phía server thì owner là team sở hữu service đó. **(3) Phân xử**: tranh chấp chuyển lên Analytics Lead trong một tuần, kết quả ghi vào tracking plan kèm lý do.',
        },
        {
          kind: 'table',
          title: 'RACI cho thay đổi tracking',
          columns: [
            { key: 'activity', label: 'Hoạt động' },
            { key: 'owner', label: 'Owner event (A)' },
            { key: 'analytics', label: 'Analytics Lead' },
            { key: 'eng', label: 'Engineering team' },
          ],
          rows: [
            { activity: 'Đề xuất event/thuộc tính mới', owner: 'Duyệt (A)', analytics: 'Review quy ước (C)', eng: 'Cài đặt (R)' },
            { activity: 'Đổi hoặc xoá event hiện có', owner: 'Duyệt + thông báo (A)', analytics: 'Kiểm tra người tiêu thụ (R)', eng: 'Bắn song song (R)' },
            { activity: 'Xung đột định nghĩa', owner: 'Hai owner trình bày (C)', analytics: 'Phân xử (A)', eng: 'Thông tin (I)' },
            { activity: 'Giám sát và xử lý cảnh báo', owner: 'Sửa lỗi (R)', analytics: 'Sở hữu SLO (A)', eng: 'Sửa lỗi code (R)' },
          ],
          caption: 'A: chịu trách nhiệm cuối cùng, R: thực hiện, C: được hỏi ý kiến, I: được thông báo.',
        },
        {
          kind: 'quiz',
          id: 'tracking-governance-q3',
          question: 'Growth muốn giữ tên `purchase_completed` vì dashboard của họ đã dùng lâu. Cách xử lý nào tốt nhất?',
          options: [
            {
              id: 'a',
              text: 'Giữ `purchase_completed` cho cả hai, thêm thuộc tính `source` để phân biệt client và server.',
              explain: 'Vẫn là một tên cho hai khái niệm; người dùng mới vẫn đếm nhầm nếu quên lọc `source`. Cách này sinh lỗi im lặng.',
            },
            {
              id: 'b',
              text: 'Tách thành hai event có tên và owner riêng, đổi tên bản cũ bằng quy trình deprecate và bắn song song một giai đoạn.',
              correct: true,
              explain: 'Đúng. Mỗi khái niệm có một tên và một owner; việc chuyển dashboard cũ được quản lý bằng thay đổi có version, nên Growth không mất dữ liệu lịch sử đột ngột.',
            },
            {
              id: 'c',
              text: 'Chọn định nghĩa của Payments là duy nhất và yêu cầu Growth bỏ event của họ.',
              explain: 'Growth cần tín hiệu ý định (bấm thanh toán) cho phân tích funnel. Xoá đi là mất thông tin hợp lệ; vấn đề là đặt tên, không phải sự tồn tại của event.',
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
          md: '**Trả lời Engineering Manager:** lỗi tracking sau release là hệ quả của việc không có hợp đồng. Dựng tracking plan làm nguồn duy nhất, kiểm thử schema trong CI cho chặn thay đổi phá vỡ, giám sát tỷ lệ lỗi theo phiên bản để phát hiện trong vài giờ, và gán owner cho từng event. Tách `purchase_completed` thành `payment_submitted` và `order_confirmed`; doanh thu chỉ đọc `order_confirmed`.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Lập tracking plan trong repo (214 event) với owner, mô tả thời điểm bắn và schema; event không có trong plan bị cảnh báo',
              owner: 'Analytics Lead + owner từng domain',
              metric: 'Tỷ lệ event production có trong tracking plan',
              threshold: '≥ 98% trong 6 tuần',
            },
            {
              action: 'Thêm test schema vào CI của app (quy ước tên, kiểu, thuộc tính bắt buộc); PR phá vỡ hợp đồng phải được owner duyệt',
              owner: 'Mobile Lead + Analytics Engineering',
              metric: 'Thay đổi phá vỡ tới production mà không bump version',
              threshold: '0 mỗi quý',
            },
            {
              action: 'Dựng dashboard và cảnh báo tỷ lệ event lỗi / thiếu thuộc tính theo phiên bản × event; bắt đầu ở chế độ ghi nhận, bật chặn cho event cốt lõi sau khi sạch vi phạm',
              owner: 'Data Engineering',
              metric: 'Tỷ lệ event lỗi schema',
              threshold: '< 1% (cảnh báo ≥ 2%), phát hiện < 2 giờ',
            },
            {
              action: 'Sửa 5.13 bằng hotfix trả lại `product_id`/`price` đúng hợp đồng (hoặc bắn song song schema mới), backfill từ log thô nếu có',
              owner: 'Mobile Lead',
              metric: 'Tỷ lệ lỗi phiên bản 5.13',
              threshold: 'Về dưới 1% trong 1 chu kỳ release',
            },
            {
              action: 'Tách `purchase_completed` thành `payment_submitted` (Growth) và `order_confirmed` (Payments); dashboard doanh thu chỉ đọc `order_confirmed`; chạy song song 2 chu kỳ',
              owner: 'Growth Analytics + Payments',
              metric: 'Chênh lệch số đơn giữa dashboard và log server',
              threshold: '< 0,5%',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Giải pháp **chuyển kiểm soát từ con người sang cơ chế**: CI bắt lỗi trước release, giám sát bắt phần lọt qua, owner và RACI chấm dứt tranh cãi tên. Lộ trình ghi nhận trước, chặn sau, giảm rủi ro mất dữ liệu. Trade-off chấp nhận: team mobile mất thêm vài phút ở mỗi PR có thay đổi event, đổi lại là không còn "sáng thứ Hai dashboard vỡ".',
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
              title: 'Tracking plan là bảng tính không ai cập nhật',
              why: 'Plan nằm ngoài quy trình phát triển sẽ lệch khỏi code sau vài tuần và mất giá trị như nguồn sự thật.',
              instead: 'Đặt plan trong repo, có CI so sánh với event thực tế, và bắt buộc cập nhật plan trong cùng PR với thay đổi code.',
            },
            {
              title: 'Bật chặn event ngay khi chưa sạch vi phạm',
              why: 'Event bị chặn thường mất vĩnh viễn; plan sai hoặc thiếu sẽ khiến mất dữ liệu cốt lõi mà không ai biết.',
              instead: 'Giai đoạn ghi nhận → sửa vi phạm → chặn chọn lọc cho event cốt lõi, kèm cảnh báo.',
            },
            {
              title: 'Chỉ quản trị schema mà quên ngữ nghĩa',
              why: 'Event đúng kiểu dữ liệu vẫn có thể sai ý nghĩa (bắn khi bấm hay khi xác nhận). Test schema không bắt được trường hợp này.',
              instead: 'Mô tả thời điểm bắn trong plan, đối chiếu với log server cho luồng quan trọng, và tách tên theo khái niệm.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Event là hợp đồng giữa app và người tiêu thụ dữ liệu: cần tracking plan, schema có version, quy ước đặt tên và kiểm thử tự động trong CI.',
    'Giám sát tỷ lệ event lỗi và thiếu thuộc tính theo phiên bản app để khoanh vùng sự cố trong vài giờ; bắt đầu ở chế độ ghi nhận rồi mới chặn có chọn lọc.',
    'Một tên event chỉ được mang một khái niệm và có một owner; khi hai team định nghĩa khác nhau, tách tên, ghi quy tắc owner và có người phân xử.',
  ],
  references: [
    {
      title: 'Customize your schema controls (Segment Protocols)',
      publisher: 'Twilio Segment Docs',
      url: 'https://www.twilio.com/docs/segment/protocols/enforce/schema-configuration',
      note: 'Cách đối chiếu event với tracking plan, xem vi phạm và chọn chặn event, bỏ thuộc tính ngoài plan hoặc chặn theo JSON schema; cảnh báo chỉ chặn sau khi đã xử lý vi phạm.',
    },
    {
      title: 'Schemas, versioning and validation',
      publisher: 'Snowplow Docs',
      url: 'https://docs.snowplow.io/docs/fundamentals/schemas/',
      note: 'Schema xác định cấu trúc event, tăng version khi nhu cầu thay đổi, pipeline kiểm tra từng event theo schema và schema nằm trong repository (Iglu).',
    },
    {
      title: 'Failed events',
      publisher: 'Snowplow Docs',
      url: 'https://docs.snowplow.io/docs/api-reference/failed-events/',
      note: 'Mô tả các loại event lỗi (vi phạm schema, lỗi enrichment…) và cách giám sát, khôi phục; tài liệu cho ý tưởng đo tỷ lệ event lỗi.',
    },
  ],
}
