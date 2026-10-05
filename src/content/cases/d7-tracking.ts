import type { CaseStudy } from '../types'

/*
 * Số liệu mock (app nghe nhạc/podcast; Android 5.3 phát hành 10/9 theo staged rollout), đã kiểm tra khớp nhau:
 *   D7 dashboard dùng sự kiện client `app_open`; DAU dashboard dùng bất kỳ sự kiện client nào.
 *   Cohort Android trước release: 30.000 cài · D7 client 20,0% (6.000) · D7 server 20,3% (6.090)
 *   Cohort Android sau release: 30.000 cài, phiên bản tại ngày 7:
 *     5.2: 6.000 (20%)  · client 20,0% = 1.200 · server 20,2% = 1.212
 *     5.3: 24.000 (80%) · client 8,75% = 2.100 · server 19,9% = 4.776
 *     Tổng: client 3.300 / 30.000 = 11,0% · server 5.988 / 30.000 = 20,0%
 *     5.3 client chỉ bắt được 8,75 / 19,9 ≈ 44% số người quay lại thật.
 *   iOS (không đổi): 20.000 cài · client 21,1% · server 21,3% (trước và sau như nhau)
 *   DAU Android: client 150.000 → 149.200 (−0,5%) · server 153.000 → 152.400 (−0,4%)
 *   Sự kiện/DAU Android: app_open 2,8 (5.2) vs 1,1 (5.3) · phiên server 2,9 vs 2,8
 *     → app_open/phiên server: 2,8/2,9 = 0,97 vs 1,1/2,8 = 0,39
 *   app_open/DAU theo ngày = 2,8 × (1 − p) + 1,1 × p, p = tỷ lệ DAU trên 5.3:
 *     p: 0 → 16% → 29% → 46% → 60% → 70% → 77% → 80% ⇒ 2,80 → 2,52 → 2,31 → 2,02 → 1,78 → 1,61 → 1,49 → 1,44
 */
export const d7Tracking: CaseStudy = {
  id: 'd7-tracking',
  title: 'D7 Android giảm gần một nửa, nhưng DAU đứng yên',
  domain: 'mobile',
  level: 'mid',
  minutes: 11,
  skills: ['data-quality', 'tracking', 'retention', 'segmentation'],
  question:
    'Sau bản cập nhật Android 5.3, D7 Android trên dashboard rơi từ 20% xuống 11% trong khi DAU gần như không đổi. Người dùng đang bỏ app thật, hay dữ liệu đang thiếu?',
  summary:
    'Kiểm tra chất lượng dữ liệu trước khi kết luận về sản phẩm: đối chiếu event client với log server, cắt theo phiên bản app, đo số event trên mỗi người dùng và loại trừ từng giả thuyết.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst của một app nghe nhạc và podcast. Ngày 10/9 team Android phát hành bản 5.3 (giao diện thư viện mới, chuyển sang thư viện quản lý vòng đời app mới) theo hình thức **staged rollout**. Hai tuần sau, Head of Product gửi ảnh chụp dashboard: *"D7 Android gần như chia đôi! Có nên rollback 5.3 không? Chiều nay mình cần câu trả lời."*',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'D7 Android (dashboard)', value: '11,0%', delta: '−9,0 điểm %', tone: 'negative', note: 'Trước release: 20,0%' },
            { label: 'D7 iOS (dashboard)', value: '21,1%', delta: '0,0 điểm %', tone: 'neutral' },
            { label: 'DAU Android', value: '149.200', delta: '−0,5%', tone: 'neutral', note: 'Trước: 150.000' },
            { label: 'Đánh giá trên Play Store', value: '4,5★', delta: 'không đổi', tone: 'neutral' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mâu thuẫn là manh mối',
          md: 'Nếu gần một nửa người dùng mới bỏ app trong tuần đầu, DAU Android phải bắt đầu giảm, và thường sẽ có phàn nàn, đánh giá xấu. DAU đứng yên trong khi D7 rơi mạnh là dấu hiệu kinh điển của **vấn đề đo lường**: hai chỉ số đang được tính từ những sự kiện khác nhau.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: kiểm tra dữ liệu trước, kết luận sản phẩm sau',
      blocks: [
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Đọc lại định nghĩa**: D7 và DAU lấy từ sự kiện nào, nguồn nào (client SDK hay server), múi giờ nào?',
            '**Đối chiếu nguồn độc lập**: tính cùng chỉ số từ log server (API, phiên đăng nhập, thanh toán). Nếu server không đổi, khả năng cao là lỗi đo.',
            '**Cắt theo chiều kỹ thuật**: phiên bản app, hệ điều hành, phiên bản SDK. Lỗi tracking thường gắn chặt với một phiên bản.',
            '**Đo khối lượng event**: số event trên mỗi DAU theo từng loại event × phiên bản. Event nào tụt, tụt bao nhiêu?',
            '**Loại trừ có hệ thống**: ghi từng giả thuyết, cách kiểm tra, kết quả. Chỉ còn một giả thuyết đứng vững mới báo cáo.',
          ],
        },
        {
          kind: 'formula',
          expression: 'Tỷ lệ bắt event = Chỉ số từ client ÷ Chỉ số tương ứng từ server (theo phiên bản, theo ngày)',
          note: 'Bình thường tỷ lệ này ổn định gần 1 (client luôn thiếu một ít do mất mạng, chặn tracking). Một bước rơi trùng phiên bản mới gần như chắc chắn là lỗi instrumentation.',
        },
        {
          kind: 'quiz',
          id: 'd7-tracking-q1',
          question: 'Head of Product cần câu trả lời trong ngày. Việc đầu tiên bạn nên làm là gì?',
          options: [
            {
              id: 'a',
              text: 'Khuyên rollback 5.3 ngay để giảm thiệt hại, điều tra sau.',
              explain:
                'Rollback có chi phí thật (mất tính năng mới, công sức team) và nếu nguyên nhân là tracking thì rollback chỉ làm số đẹp lại mà không cải thiện gì cho người dùng. Chưa có bằng chứng người dùng thật sự rời đi.',
            },
            {
              id: 'b',
              text: 'Tính D7 Android từ log server và cắt D7 theo phiên bản app (5.2 so với 5.3) trên cùng giai đoạn.',
              correct: true,
              explain:
                'Đúng. Hai phép kiểm tra này nhanh (vài giờ) và phân định được giữa "người dùng bỏ đi" và "dữ liệu thiếu". Nhờ staged rollout, 5.2 và 5.3 chạy song song trên cùng khoảng thời gian nên so sánh rất sạch.',
            },
            {
              id: 'c',
              text: 'Gửi khảo sát cho người dùng Android hỏi lý do họ không quay lại.',
              explain:
                'Khảo sát mất nhiều ngày, tỷ lệ phản hồi thấp, và nếu người dùng vẫn đang dùng app thì câu hỏi sai từ gốc. Chỉ nên làm sau khi chắc chắn churn là thật.',
            },
          ],
        },
      ],
    },
    {
      id: 'client-vs-server',
      kind: 'analysis',
      title: 'Bước 1 — Đối chiếu client và server theo phiên bản',
      blocks: [
        {
          kind: 'table',
          title: 'D7 cohort Android cài sau release, theo phiên bản tại ngày 7',
          columns: [
            { key: 'version', label: 'Phiên bản' },
            { key: 'installs', label: 'Cài', align: 'right' },
            { key: 'client', label: 'D7 client (app_open)', align: 'right' },
            { key: 'server', label: 'D7 server (phiên API)', align: 'right' },
            { key: 'capture', label: 'Tỷ lệ bắt', align: 'right' },
          ],
          rows: [
            { version: 'Android 5.2', installs: '6.000', client: '20,0%', server: '20,2%', capture: '0,99' },
            { version: 'Android 5.3', installs: '24.000', client: '8,8%', server: '19,9%', capture: '0,44' },
            { version: 'Android tổng', installs: '30.000', client: '11,0%', server: '20,0%', capture: '0,55' },
            { version: 'Cohort trước release', installs: '30.000', client: '20,0%', server: '20,3%', capture: '0,99' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
          caption:
            'Theo server, D7 Android gần như không đổi (20,3% → 20,0%). Trên 5.3, client chỉ ghi nhận được khoảng 44% số người thật sự quay lại.',
        },
        {
          kind: 'chart',
          title: 'D7 theo nguồn dữ liệu và phiên bản',
          type: 'bar',
          xKey: 'group',
          unit: '%',
          series: [
            { key: 'client', label: 'Client (app_open)' },
            { key: 'server', label: 'Server' },
          ],
          data: [
            { group: 'Android 5.2', client: 20.0, server: 20.2 },
            { group: 'Android 5.3', client: 8.8, server: 19.9 },
            { group: 'iOS', client: 21.1, server: 21.3 },
          ],
          caption: 'Khoảng cách client–server chỉ xuất hiện ở Android 5.3. iOS và Android 5.2 cùng giai đoạn vẫn bình thường.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Staged rollout là thí nghiệm miễn phí',
          md: 'Play Console phát bản cập nhật cho một phần người dùng trước. Trong lúc đó, 5.2 và 5.3 chạy song song trên **cùng thời gian, cùng chiến dịch, cùng mùa vụ**. So hai nhóm này loại bỏ gần hết yếu tố gây nhiễu theo thời gian, sạch hơn nhiều so với so "trước và sau release". Lưu ý: phải gán phiên bản theo thời điểm hoạt động, không theo phiên bản lúc cài.',
        },
      ],
    },
    {
      id: 'event-volume',
      kind: 'analysis',
      title: 'Bước 2 — Khối lượng event: chỉ app_open tụt',
      blocks: [
        {
          kind: 'table',
          title: 'Số event trên mỗi DAU Android, theo phiên bản (tuần sau release)',
          columns: [
            { key: 'event', label: 'Sự kiện' },
            { key: 'v52', label: '5.2', align: 'right' },
            { key: 'v53', label: '5.3', align: 'right' },
            { key: 'change', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { event: 'app_open (client)', v52: '2,8', v53: '1,1', change: '−61%' },
            { event: 'screen_view (client)', v52: '38,0', v53: '37,6', change: '−1%' },
            { event: 'play_start (client)', v52: '6,2', v53: '6,1', change: '−2%' },
            { event: 'Phiên API (server)', v52: '2,9', v53: '2,8', change: '−3%' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
          caption:
            'Người dùng 5.3 vẫn xem màn hình và bật nhạc như cũ. Chỉ `app_open` mất khoảng 60%. Vì DAU tính từ *bất kỳ* event nào nên DAU không đổi; còn D7 chỉ dựa vào `app_open` nên rơi mạnh.',
        },
        {
          kind: 'chart',
          title: 'app_open trên mỗi DAU theo ngày',
          type: 'line',
          xKey: 'day',
          series: [
            { key: 'android', label: 'Android' },
            { key: 'ios', label: 'iOS' },
          ],
          data: [
            { day: '8/9', android: 2.8, ios: 2.9 },
            { day: '9/9', android: 2.8, ios: 2.9 },
            { day: '10/9', android: 2.52, ios: 2.9 },
            { day: '11/9', android: 2.31, ios: 2.88 },
            { day: '12/9', android: 2.02, ios: 2.9 },
            { day: '13/9', android: 1.78, ios: 2.91 },
            { day: '14/9', android: 1.61, ios: 2.9 },
            { day: '15/9', android: 1.49, ios: 2.89 },
            { day: '16/9', android: 1.44, ios: 2.9 },
          ],
          marker: { x: '10/9', label: 'Phát hành Android 5.3' },
          caption:
            'Đường Android giảm dần theo tỷ lệ người dùng cập nhật lên 5.3 (0% → 80%), rồi đi ngang. Hình dạng "giảm theo tốc độ cập nhật" là dấu vân tay của lỗi gắn với phiên bản.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Nguyên nhân sau khi hỏi team Android',
          md: 'Ở 5.3, team chuyển sang thư viện quản lý vòng đời mới; `app_open` giờ chỉ bắn khi app **khởi động nguội** (cold start), không bắn khi người dùng quay lại app đang chạy nền (warm start). Người nghe nhạc thường để app chạy nền nên phần lớn lượt mở lại bị mất. Đây là lỗi instrumentation, không phải thay đổi hành vi.',
        },
      ],
    },
    {
      id: 'triage',
      kind: 'analysis',
      title: 'Bước 3 — Loại trừ các giả thuyết còn lại',
      blocks: [
        {
          kind: 'table',
          title: 'Nhật ký kiểm tra giả thuyết',
          columns: [
            { key: 'hypo', label: 'Giả thuyết' },
            { key: 'check', label: 'Cách kiểm tra' },
            { key: 'result', label: 'Kết quả' },
            { key: 'verdict', label: 'Kết luận' },
          ],
          rows: [
            { hypo: 'Người dùng thật sự bỏ app', check: 'D7 từ log server, DAU server', result: 'D7 20,3% → 20,0%; DAU server −0,4%', verdict: 'Loại' },
            { hypo: 'Đổi định nghĩa ngày hoặc múi giờ', check: 'So cấu hình job; tính D7 theo UTC và giờ địa phương', result: 'Không thay đổi cấu hình; hai cách lệch < 0,2 điểm %', verdict: 'Loại' },
            { hypo: 'Event đến trễ (gửi theo lô)', check: 'Độ trễ nhận event p95; chạy lại sau 72 giờ', result: 'p95 2 → 3 phút; chạy lại không đổi', verdict: 'Loại' },
            { hypo: 'Định danh bị reset, người cũ thành "cài mới"', check: 'So số cài dashboard với Play Console', result: 'Lệch < 1% ở cả hai kỳ', verdict: 'Loại' },
            { hypo: 'app_open không bắn trên warm start ở 5.3', check: 'app_open / phiên server theo phiên bản', result: '0,97 (5.2) so với 0,39 (5.3)', verdict: 'Xác nhận' },
          ],
          highlight: [{ row: 4, tone: 'warning' }],
          caption: 'Ghi lại cả những giả thuyết bị loại giúp người đọc tin kết luận và giúp lần điều tra sau nhanh hơn.',
        },
        {
          kind: 'quiz',
          id: 'd7-tracking-q2',
          question: 'Đã xác nhận lỗi tracking. Nên xử lý các cohort Android từ 10/9 trên dashboard thế nào?',
          options: [
            {
              id: 'a',
              text: 'Nhân D7 client của 5.3 với hệ số 19,9 / 8,8 ≈ 2,26 để đưa về mức "đúng".',
              explain:
                'Hệ số này được ước lượng từ một tuần và giả định tỷ lệ cold/warm start không đổi theo thời gian, theo nhóm người dùng. Số đã nhân trông chính xác nhưng là số đoán, và người đọc sau không biết nó đã bị chỉnh.',
            },
            {
              id: 'b',
              text: 'Tính lại D7 cho giai đoạn bị ảnh hưởng từ log server (hoặc từ mọi event chủ động), giữ dữ liệu gốc, và gắn chú thích sự cố trên dashboard.',
              correct: true,
              explain:
                'Đúng. Dùng nguồn độc lập có đo thật thay vì hệ số suy đoán; dữ liệu gốc được giữ lại để kiểm toán; chú thích giúp ai nhìn biểu đồ sau này cũng hiểu vì sao có đoạn đổi nguồn.',
            },
            {
              id: 'c',
              text: 'Xoá các cohort bị ảnh hưởng khỏi dashboard cho tới khi có bản sửa.',
              explain:
                'Xoá tạo ra khoảng trống đúng lúc Product cần theo dõi 5.3, và ai đó có thể vô tình so sánh với kỳ khác mà không biết dữ liệu bị thiếu. Có nguồn server dùng được thì nên tính lại thay vì bỏ trống.',
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
          md: '**Kết luận cho Head of Product:** *Không rollback.* D7 Android không giảm: theo log server vẫn là 20,0% (trước release 20,3%). Con số 11,0% trên dashboard là do bản 5.3 không còn gửi `app_open` khi người dùng quay lại app đang chạy nền, nên dashboard chỉ thấy khoảng 44% người quay lại trên 5.3. Các chỉ số dựa trên `app_open` của Android từ 10/9 đều đang báo thấp giả.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Hotfix 5.3.1: bắn app_open (hoặc session_start) mỗi lần app chuyển lên foreground, kể cả warm start; thêm test tự động cho event này',
              owner: 'Android lead',
              metric: 'app_open / phiên server trên 5.3.1',
              threshold: 'Về lại 0,95–1,0 như 5.2 trong 48 giờ sau khi đạt 20% rollout',
            },
            {
              action: 'Tính lại D7, D30 Android từ 10/9 bằng log server; giữ bảng gốc, gắn chú thích sự cố trên mọi dashboard dùng app_open',
              owner: 'Data engineer + Analyst',
              metric: 'Chênh lệch D7 client so với server sau khi tính lại',
              threshold: '≤ 0,5 điểm % cho mọi phiên bản; chú thích hiển thị trên 100% biểu đồ liên quan',
            },
            {
              action: 'Giám sát chất lượng dữ liệu: số event/DAU theo event × phiên bản × OS và tỷ lệ client/server; đưa kiểm tra tracking plan vào checklist release',
              owner: 'Analytics engineering',
              metric: 'Thời gian phát hiện lỗi tracking sau release',
              threshold: 'Cảnh báo khi một event lệch > 20% so với phiên bản trước; phát hiện < 24 giờ, ở mức 5–10% rollout',
            },
            {
              action: 'Đổi định nghĩa "hoạt động" của retention từ một event duy nhất sang bất kỳ event chủ động nào (hoặc phiên server)',
              owner: 'Analytics lead',
              metric: 'Độ lệch D7 giữa định nghĩa mới và server',
              threshold: '≤ 0,5 điểm % trên mọi nền tảng trong 4 tuần',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Quyết định sai đắt nhất ở đây là rollback một bản cập nhật không có lỗi sản phẩm, hoặc mở dự án "cứu retention" cho một vấn đề không tồn tại. Đối chiếu với nguồn độc lập và cắt theo phiên bản trả lời câu hỏi trong vài giờ. Sau đó, ngoài sửa lỗi lần này, hệ thống giám sát theo phiên bản giúp **lỗi tracking tiếp theo bị phát hiện ở giai đoạn 5–10% rollout** thay vì hai tuần sau trên dashboard của lãnh đạo.',
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
              title: 'Tin dashboard ngay khi số biến động bất thường',
              why: 'Biến động lớn, đột ngột, trùng một bản release là đúng kiểu mà lỗi đo lường tạo ra. Đi thẳng vào giải thích hành vi dễ dẫn tới rollback hoặc dự án sản phẩm không cần thiết.',
              instead: 'Với mọi bước rơi lớn, kiểm tra dữ liệu trước: nguồn độc lập, phiên bản, khối lượng event, độ trễ, định danh.',
            },
            {
              title: 'Bỏ qua mâu thuẫn giữa các chỉ số',
              why: 'D7 giảm một nửa nhưng DAU, đánh giá, doanh thu đứng yên là điều khó xảy ra cùng lúc. Bỏ qua mâu thuẫn là bỏ qua manh mối tốt nhất.',
              instead: 'Khi hai chỉ số liên quan đi ngược nhau, tìm xem chúng được tính từ event và nguồn nào khác nhau.',
            },
            {
              title: 'Vá số liệu bằng hệ số ước đoán',
              why: 'Nhân lên theo một tỷ lệ tạo ra con số trông chính xác nhưng không được đo, và người dùng dashboard không biết nó đã bị chỉnh.',
              instead: 'Tính lại từ nguồn đo thật (log server), giữ bản gốc, và gắn chú thích sự cố ngay trên biểu đồ.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Khi một chỉ số rơi mạnh, đột ngột và trùng một bản release, kiểm tra dữ liệu trước khi kết luận về hành vi người dùng.',
    'Đối chiếu với nguồn độc lập (log server) và cắt theo phiên bản app; staged rollout cho phép so 2 phiên bản trên cùng giai đoạn.',
    'Sửa tracking, tính lại từ nguồn đo thật kèm chú thích, và giám sát số event trên mỗi người dùng theo phiên bản để phát hiện lỗi sớm.',
  ],
  references: [
    {
      title: 'Debugging',
      publisher: 'Mixpanel Docs',
      url: 'https://docs.mixpanel.com/docs/tracking-best-practices/debugging',
      note: 'Quy trình kiểm tra event có được gửi đúng, đủ không, trước khi tin vào báo cáo.',
    },
    {
      title: 'Release app updates with staged rollouts',
      publisher: 'Play Console Help',
      url: 'https://support.google.com/googleplay/android-developer/answer/6346149',
      note: 'Cách staged rollout phát bản mới cho một phần người dùng, cơ sở để so phiên bản cũ và mới song song.',
    },
    {
      title: 'Plan your taxonomy',
      publisher: 'Amplitude Docs',
      url: 'https://amplitude.com/docs/data/data-planning-playbook',
      note: 'Xây tracking plan: định nghĩa event, thuộc tính và quy trình kiểm tra trước khi phát hành.',
    },
  ],
}
