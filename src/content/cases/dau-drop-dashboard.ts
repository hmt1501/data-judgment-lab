import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — DAU trung bình 7 ngày trước 3/10 → ngày 5/10, đã kiểm tra khớp nhau:
 *   Dashboard: DAU 120.000 = mới 15.000 + quay lại 105.000 → 94.200 = mới 14.700 + quay lại 79.500
 *     Δ: DAU −25.800 (−21,5%) · mới −2,0% · quay lại −24,3% ⇒ gần như toàn bộ phần mất nằm ở user quay lại (−25.500 / −25.800)
 *   Server log: DAU 121.000 = mới 15.100 + quay lại 105.900 → 120.200 = mới 14.900 + quay lại 105.300 (−0,7%)
 *   Cài mới từ App Store + Google Play: 15.400 → 15.150 (−1,6%); user mới server / cài mới = 0,98 ở cả hai kỳ
 *   User quay lại theo đường vào trong ngày:
 *     Server:    mở từ icon 78.600 + chỉ mở qua push 27.300 = 105.900 → 77.700 + 27.600 = 105.300
 *     Dashboard: mở từ icon 78.000 + chỉ qua push 27.000 = 105.000 → 77.400 + 2.100 = 79.500
 *     Tỷ lệ bắt (dashboard / server): icon 0,99 → 1,00 · chỉ push 0,99 → 0,08 · DAU 0,99 → 0,78
 *     Phần thiếu: 105.300 − 79.500 = 25.800 = 77.700 − 77.400 (300) + 27.600 − 2.100 (25.500) ✓
 *   Biểu đồ theo ngày (nghìn user): dashboard 29/9–2/10 trung bình 120,0 (120,1 · 119,6 · 120,4 · 119,9); server trung bình ≈ 121,0
 */
export const dauDropDashboard: CaseStudy = {
  id: 'dau-drop-dashboard',
  title: 'DAU trên dashboard tụt 21% sau một đêm',
  domain: 'mobile',
  level: 'fresher',
  minutes: 9,
  skills: ['metric-decomposition', 'tracking', 'data-quality'],
  question:
    'DAU trên dashboard giảm từ 120.000 xuống còn 94.200 chỉ trong vài ngày. Người dùng thật sự bỏ đi, hay dữ liệu đang thiếu, và cần làm gì trước?',
  summary:
    'Phân rã DAU thành user mới và user quay lại để khoanh vùng, rồi đối chiếu server log và số cài từ store để biết đây là sự cố dữ liệu hay hành vi thật, trước khi báo lên lãnh đạo.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng.* Bạn là analyst của một app đọc tin tức trên mobile. Sáng 5/10, CEO chụp màn hình dashboard gửi vào nhóm chat: *"DAU rớt 21% rồi, có chuyện gì vậy? Hay mình tạm dừng chiến dịch quảng cáo đang chạy?"* Số liệu trên dashboard (trung bình 7 ngày trước 3/10 so với ngày 5/10):',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'DAU (dashboard)', value: '94.200', delta: '−21,5%', tone: 'negative', note: 'Trước: 120.000' },
            { label: 'User mới', value: '14.700', delta: '−2,0%', tone: 'neutral' },
            { label: 'User quay lại', value: '79.500', delta: '−24,3%', tone: 'negative' },
            { label: 'Đánh giá trên store', value: '4,6★', delta: 'không đổi', tone: 'neutral' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu',
          md: 'Trả lời bằng số trước giờ họp: **giảm ở nhóm nào**, **số này có đáng tin không**, và **việc gì cần làm ngay**. Chưa cần biết nguyên nhân sâu, nhưng không được báo "người dùng bỏ app" khi chưa kiểm tra dữ liệu.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: phân rã, rồi kiểm tra dữ liệu trước hành vi',
      blocks: [
        {
          kind: 'formula',
          expression: 'DAU = User mới (lần đầu xuất hiện trong ngày) + User quay lại (đã từng xuất hiện trước đó)',
          note: 'Hai nhóm có nguyên nhân rất khác nhau: user mới phụ thuộc quảng cáo, ASO, cài đặt; user quay lại phụ thuộc giữ chân, thông báo, và cả cách hệ thống nhận diện người dùng cũ. Định nghĩa "user hoạt động" cũng khác nhau giữa các công cụ, ví dụ [GA4 tính active user theo phiên có tương tác](https://support.google.com/analytics/answer/12253918), nên luôn đọc lại định nghĩa trước.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Phân rã**: DAU giảm do user mới, user quay lại, hay cả hai?',
            '**Đối chiếu nguồn độc lập**: tính lại DAU từ log server, và so số cài mới với bảng điều khiển của store. Nguồn khác không giảm thì khả năng cao là lỗi đo hoặc lỗi xử lý dữ liệu.',
            '**Tìm điểm lệch**: cắt phần chênh giữa dashboard và server theo nền tảng, phiên bản, đường vào. Phần chênh tập trung ở đâu thì lỗi nằm ở đó.',
            '**Tìm thay đổi gần nhất**: release app, thay đổi job ETL, đổi bảng, đổi quy tắc lọc, trùng thời điểm với bước rơi.',
            '**Sửa và chặn tái diễn**: khôi phục số, chú thích sự cố, thêm cảnh báo.',
          ],
        },
        {
          kind: 'quiz',
          id: 'dau-drop-dashboard-q1',
          question: 'CEO hỏi có nên dừng chiến dịch quảng cáo. Câu trả lời hợp lý nhất lúc này là gì?',
          options: [
            {
              id: 'a',
              text: 'Dừng quảng cáo ngay để tránh đốt ngân sách khi người dùng đang giảm.',
              explain:
                'User mới chỉ giảm 2,0%, nên quảng cáo gần như không liên quan đến mức giảm này. Dừng chiến dịch là hành động tốn kém dựa trên một con số chưa được kiểm chứng.',
            },
            {
              id: 'b',
              text: 'Chưa dừng: phần giảm nằm ở user quay lại, và cần đối chiếu với log server cùng số cài từ store để xem số trên dashboard có đáng tin không.',
              correct: true,
              explain:
                'Đúng. Phân rã cho thấy user mới gần như đứng yên; chỉ user quay lại rơi mạnh. Trước khi quyết định bất cứ điều gì về sản phẩm hay ngân sách, kiểm tra bằng nguồn độc lập vài giờ là đủ.',
            },
            {
              id: 'c',
              text: 'Gửi thông báo đẩy khuyến khích mọi người mở lại app.',
              explain:
                'Đây là giải pháp cho vấn đề giữ chân khi đã chắc chắn người dùng thật sự rời đi. Chưa có bằng chứng đó, và thông báo hàng loạt còn làm méo dữ liệu về sau.',
            },
          ],
        },
      ],
    },
    {
      id: 'decompose',
      kind: 'analysis',
      title: 'Bước 1 — Phân rã: toàn bộ phần mất nằm ở user quay lại',
      blocks: [
        {
          kind: 'table',
          title: 'Phân rã DAU trên dashboard',
          columns: [
            { key: 'part', label: 'Thành phần' },
            { key: 'prev', label: 'Trước 3/10 (TB 7 ngày)', align: 'right' },
            { key: 'curr', label: 'Ngày 5/10', align: 'right' },
            { key: 'change', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { part: 'User mới', prev: '15.000', curr: '14.700', change: '−2,0%' },
            { part: 'User quay lại', prev: '105.000', curr: '79.500', change: '−24,3%' },
            { part: 'DAU', prev: '120.000', curr: '94.200', change: '−21,5%' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
          caption: 'DAU mất 25.800, trong đó 25.500 (99%) đến từ user quay lại.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'User mới giảm nhẹ còn user quay lại giảm gần một phần tư *trong vài ngày* là hình dạng khó xảy ra với hành vi thật. Giữ chân thường trôi dần theo tuần, không rơi theo bậc thang. Một bước rơi gọn như vậy gợi ý có thứ gì đó **đổi một lần**: bản release, job dữ liệu, quy tắc lọc.',
        },
      ],
    },
    {
      id: 'cross-check',
      kind: 'analysis',
      title: 'Bước 2 — Đối chiếu nguồn độc lập: server và store không giảm',
      blocks: [
        {
          kind: 'table',
          title: 'Cùng một chỉ số, ba nguồn',
          columns: [
            { key: 'metric', label: 'Chỉ số' },
            { key: 'source', label: 'Nguồn' },
            { key: 'prev', label: 'Trước 3/10', align: 'right' },
            { key: 'curr', label: 'Ngày 5/10', align: 'right' },
            { key: 'change', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { metric: 'DAU', source: 'Dashboard (event client)', prev: '120.000', curr: '94.200', change: '−21,5%' },
            { metric: 'DAU', source: 'Log server (request có đăng nhập)', prev: '121.000', curr: '120.200', change: '−0,7%' },
            { metric: 'Cài mới', source: 'App Store + Google Play', prev: '15.400', curr: '15.150', change: '−1,6%' },
            { metric: 'User mới', source: 'Log server', prev: '15.100', curr: '14.900', change: '−1,3%' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
          caption:
            'Log server và số cài mới gần như đứng yên. User mới / cài mới ≈ 0,98 ở cả hai kỳ, nên cách đếm user mới vẫn nhất quán. Chỉ DAU trên dashboard tụt.',
        },
        {
          kind: 'chart',
          title: 'DAU theo ngày: dashboard so với server',
          type: 'line',
          xKey: 'day',
          unit: ' nghìn',
          series: [
            { key: 'dashboard', label: 'Dashboard' },
            { key: 'server', label: 'Log server' },
          ],
          data: [
            { day: '29/9', dashboard: 120.1, server: 121.2 },
            { day: '30/9', dashboard: 119.6, server: 120.7 },
            { day: '1/10', dashboard: 120.4, server: 121.4 },
            { day: '2/10', dashboard: 119.9, server: 120.9 },
            { day: '3/10', dashboard: 100.3, server: 120.6 },
            { day: '4/10', dashboard: 96.0, server: 120.1 },
            { day: '5/10', dashboard: 94.2, server: 120.2 },
            { day: '6/10', dashboard: 94.5, server: 120.4 },
          ],
          marker: { x: '3/10', label: 'Bắt đầu lệch' },
          caption: 'Hai đường đi song song nhiều ngày, rồi tách ra đúng từ 3/10. Khoảng cách trước đó chỉ khoảng 1.000 user (0,8%).',
        },
        {
          kind: 'quiz',
          id: 'dau-drop-dashboard-q2',
          question: 'Từ bảng và biểu đồ trên, kết luận nào đủ chắc để báo cáo?',
          options: [
            {
              id: 'a',
              text: 'DAU thật sự giảm 21%, vì dashboard là nguồn chính thức của công ty.',
              explain:
                '"Nguồn chính thức" không phải bằng chứng. Hai nguồn độc lập (server, store) cùng cho thấy không có sự suy giảm tương ứng, nên dashboard là nghi phạm.',
            },
            {
              id: 'b',
              text: 'Nhiều khả năng người dùng không rời đi: server và store gần như đứng yên, chỉ đường dashboard lệch từ 3/10. Cần tìm thay đổi nào làm dashboard thiếu user quay lại.',
              correct: true,
              explain:
                'Đúng. Khi nguồn độc lập không xác nhận, ưu tiên giả thuyết lỗi đo hoặc xử lý dữ liệu, và dùng thời điểm bắt đầu lệch (3/10) để tìm thay đổi gần nhất. Dùng từ "nhiều khả năng" cho tới khi tìm được cơ chế cụ thể.',
            },
            {
              id: 'c',
              text: 'Server log đáng ngờ hơn dashboard, nên giữ số của dashboard.',
              explain:
                'Chọn nguồn theo mức độ "dễ chịu" của kết quả là thiên kiến. Log server còn khớp với số cài từ store, trong khi dashboard không có nguồn nào ủng hộ.',
            },
          ],
        },
      ],
    },
    {
      id: 'mechanism',
      kind: 'analysis',
      title: 'Bước 3 — Tìm chỗ lệch: user chỉ mở app qua thông báo đẩy',
      blocks: [
        {
          kind: 'table',
          title: 'User quay lại theo đường vào trong ngày',
          columns: [
            { key: 'entry', label: 'Đường vào' },
            { key: 'serverPrev', label: 'Server trước', align: 'right' },
            { key: 'serverCurr', label: 'Server 5/10', align: 'right' },
            { key: 'dashPrev', label: 'Dashboard trước', align: 'right' },
            { key: 'dashCurr', label: 'Dashboard 5/10', align: 'right' },
            { key: 'capture', label: 'Tỷ lệ bắt (trước → nay)', align: 'right' },
          ],
          rows: [
            { entry: 'Có mở từ icon', serverPrev: '78.600', serverCurr: '77.700', dashPrev: '78.000', dashCurr: '77.400', capture: '0,99 → 1,00' },
            { entry: 'Chỉ mở qua thông báo đẩy', serverPrev: '27.300', serverCurr: '27.600', dashPrev: '27.000', dashCurr: '2.100', capture: '0,99 → 0,08' },
            { entry: 'Tổng user quay lại', serverPrev: '105.900', serverCurr: '105.300', dashPrev: '105.000', dashCurr: '79.500', capture: '0,99 → 0,76' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
          caption: 'Nhóm mở app qua thông báo (khoảng 26% user quay lại) gần như biến mất khỏi dashboard: 27.000 → 2.100. Nhóm mở từ icon vẫn ổn.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Nguyên nhân sau khi hỏi team data engineering',
          md: 'Chiều 3/10 team data thêm vào job ETL một quy tắc lọc bot: loại các phiên không có sự kiện `screen_view` trong 2 giây đầu. Phiên mở từ thông báo đẩy thường vào thẳng bài viết và bắn `screen_view` muộn hơn, nên bị coi là bot. Đây là lỗi **xử lý dữ liệu**, không phải thay đổi hành vi người dùng, và không có bản release app nào liên quan.',
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Vì sao đối chiếu trước lại quan trọng',
          md: 'Nếu chỉ có dashboard, mọi người sẽ tranh luận về quảng cáo, nội dung, đối thủ. Có thêm một nguồn độc lập thì cuộc thảo luận thu hẹp ngay xuống một câu hỏi kỹ thuật: *"Điều gì đã đổi vào ngày 3/10?"*',
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
          md: '**Kết luận cho CEO:** *Không dừng quảng cáo.* DAU thật vẫn khoảng 120.000 (log server 120.200, −0,7%). Con số 94.200 trên dashboard thấp giả vì quy tắc lọc bot mới của job ETL loại nhầm khoảng 25.500 user mở app qua thông báo đẩy. User mới và số cài từ store gần như không đổi.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Gỡ hoặc sửa quy tắc lọc bot (không dùng thời gian của `screen_view` làm tiêu chí duy nhất), chạy lại job cho các ngày từ 3/10 và chú thích sự cố trên dashboard',
              owner: 'Data engineer',
              metric: 'Tỷ lệ DAU dashboard / server',
              threshold: 'Về lại 0,98–1,00 cho mọi ngày từ 3/10; chú thích hiển thị trên 100% biểu đồ DAU',
            },
            {
              action: 'Báo lại CEO và các team dùng dashboard: số DAU từ 3/10 chưa chính xác, kèm số đã đối chiếu từ server',
              owner: 'Analyst',
              metric: 'Số báo cáo và quyết định dựa trên DAU sai',
              threshold: '0 quyết định ngân sách dựa trên số chưa sửa',
            },
            {
              action: 'Thêm cảnh báo đối chiếu hằng ngày: DAU dashboard / server lệch quá 3 điểm %, hoặc một đường vào mất quá 20% so với trung bình 7 ngày',
              owner: 'Data/Analytics',
              metric: 'Thời gian phát hiện lỗi dữ liệu',
              threshold: 'Trong 24 giờ thay vì khi CEO nhìn thấy',
            },
            {
              action: 'Mọi thay đổi quy tắc lọc hoặc logic ETL phải chạy song song với bản cũ ít nhất 3 ngày và so DAU, user mới, user quay lại trước khi thay thế',
              owner: 'Analytics lead',
              metric: 'Số thay đổi ETL được đối chiếu trước khi triển khai',
              threshold: '100% thay đổi ảnh hưởng đến chỉ số lãnh đạo',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Sai lầm đắt nhất ở đây là hành động trên một chỉ số chưa được kiểm tra: dừng quảng cáo, đổi chiến lược nội dung hoặc gửi thông báo ồ ạt. Đối chiếu nguồn độc lập tốn vài giờ và loại bỏ cả loạt quyết định sai. Các hành động còn lại biến sự cố này thành cơ chế: lần sau số lệch sẽ được thấy ngay ở bảng đối chiếu, không phải ở màn hình của CEO.',
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
              title: 'Giải thích hành vi khi chưa loại trừ lỗi dữ liệu',
              why: 'Một chỉ số rơi gọn, nhanh, mà nguồn khác không xác nhận thì thường là lỗi đo hoặc xử lý. Đi thẳng vào "do nội dung", "do đối thủ" tạo ra các dự án không cần thiết.',
              instead: 'Với mọi bước rơi lớn, kiểm tra theo thứ tự: định nghĩa, nguồn độc lập, thay đổi kỹ thuật gần nhất, rồi mới đến hành vi.',
            },
            {
              title: 'Chỉ nhìn DAU tổng',
              why: 'DAU tổng giảm 21,5% không nói được thành phần nào giảm. User mới hầu như không đổi, và mọi biện pháp tăng trưởng nhắm vào user mới sẽ chạy sai hướng.',
              instead: 'Luôn phân rã DAU thành user mới và user quay lại, rồi cắt tiếp quay lại theo nền tảng, phiên bản, đường vào.',
            },
            {
              title: 'Tin một nguồn duy nhất',
              why: 'Dashboard là kết quả của nhiều bước (SDK, ingest, ETL, lọc). Bước nào cũng có thể sai mà bạn không thấy nếu chỉ có một nguồn để nhìn.',
              instead: 'Giữ sẵn ít nhất một nguồn độc lập cho chỉ số quan trọng (log server, số liệu store, thanh toán) và theo dõi tỷ lệ lệch giữa các nguồn.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Phân rã DAU thành user mới + user quay lại trước khi giải thích: nó chỉ ra thành phần nào thật sự thay đổi.',
    'Khi một chỉ số rơi theo bậc thang, đối chiếu với nguồn độc lập (log server, số cài từ store) trước khi kết luận về hành vi người dùng.',
    'Dùng thời điểm bắt đầu lệch để tìm thay đổi kỹ thuật gần nhất, rồi biến sự cố thành cảnh báo đối chiếu nguồn hằng ngày.',
  ],
  references: [
    {
      title: '[GA4] Understand user metrics',
      publisher: 'Google Analytics Help',
      url: 'https://support.google.com/analytics/answer/12253918',
      note: 'Định nghĩa total users, active users, new users và returning users, vì sao cùng một tên chỉ số có thể khác nhau giữa các công cụ.',
    },
    {
      title: 'View app statistics',
      publisher: 'Play Console Help',
      url: 'https://support.google.com/googleplay/android-developer/answer/139628',
      note: 'Các báo cáo cài đặt, người dùng hoạt động và giữ chân trong Play Console, nguồn đối chiếu độc lập với dashboard nội bộ.',
    },
    {
      title: 'Monitor collected events and user properties using DebugView',
      publisher: 'Firebase Documentation',
      url: 'https://firebase.google.com/docs/analytics/debugview',
      note: 'Cách xem sự kiện thô ngay khi app ghi nhận để xác minh tracking có gửi đúng và đủ không.',
    },
  ],
}
