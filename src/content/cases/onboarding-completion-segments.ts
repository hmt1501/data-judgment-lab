import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — App "Học Nhanh" (hư cấu), 100.000 người dùng mới bắt đầu onboarding trong tháng. Hoàn tất = qua đủ 4 bước (chào mừng, tạo tài khoản, xác minh OTP/quyền, chọn mục tiêu).
 *   Kênh × thiết bị (bắt đầu → hoàn tất, tỷ lệ):
 *     Tự nhiên (40.000): iOS 14.000 → 10.080 (72%) · Android khá/cao 22.000 → 14.960 (68%) · Android cấu hình thấp 4.000 → 2.000 (50%) → 27.040 (67,6%)
 *     Quảng cáo trả phí (35.000): iOS 8.000 → 5.280 (66%) · AND khá/cao 17.000 → 10.200 (60%) · AND thấp 10.000 → 4.200 (42%) → 19.680 (56,2%)
 *     Giới thiệu (25.000): iOS 8.000 → 5.920 (74%) · AND khá/cao 11.000 → 7.260 (66%) · AND thấp 6.000 → 2.400 (40%) → 15.580 (62,3%)
 *   Tổng: 100.000 → 62.300 (62,3%) · theo thiết bị: iOS 30.000 → 21.280 (70,9%) · AND khá/cao 50.000 → 32.420 (64,8%) · AND thấp 20.000 → 8.600 (43,0%) ✓ (21.280+32.420+8.600 = 62.300)
 *   Tỷ trọng AND thấp: tự nhiên 10% · trả phí 28,6% · giới thiệu 24% · mix thiết bị tự nhiên: iOS 35% / khá 55% / thấp 10%
 *   Chuẩn hóa mix: trả phí với mix của tự nhiên = 0,35×66 + 0,55×60 + 0,10×42 = 60,3% · chênh tự nhiên − trả phí 11,4 điểm = trong thiết bị 7,3 + mix 4,1
 *   Tỷ lệ tích lũy còn lại sau từng bước (% bắt đầu), iOS: 97,0 / 89,2 / 78,1 / 70,9 · AND khá: 96,0 / 86,4 / 71,0 / 64,8 · AND thấp: 92,0 / 71,8 / 49,0 / 43,0
 */
export const onboardingCompletionSegments: CaseStudy = {
  id: 'onboarding-completion-segments',
  title: 'Onboarding hoàn tất 62%: lỗi của kênh quảng cáo hay của thiết bị?',
  domain: 'mobile',
  level: 'junior',
  minutes: 11,
  skills: ['funnel', 'segmentation', 'mix-effect'],
  question:
    'Tỷ lệ hoàn tất onboarding tổng là 62,3% nhưng kênh quảng cáo trả phí chỉ đạt 56,2%. Kênh này chất lượng thấp, hay nó chỉ mang về nhiều thiết bị cấu hình thấp hơn, và bước nào là điểm rơi?',
  summary:
    'Cắt tỷ lệ hoàn tất theo kênh và thiết bị, chuẩn hóa mix để tách tác động kênh khỏi tác động thiết bị, rồi xác định bước rơi và giả thuyết kỹ thuật cần kiểm tra.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng: app và mọi con số đều là giả định để minh họa.* App học ngoại ngữ **"Học Nhanh"** có onboarding 4 bước: chào mừng, tạo tài khoản, xác minh (OTP và cấp quyền), chọn mục tiêu học. Trong tháng có 100.000 người dùng mới bắt đầu onboarding, **62.300 người hoàn tất (62,3%)**. Marketing đang bị yêu cầu cắt kênh quảng cáo trả phí vì tỷ lệ hoàn tất chỉ **56,2%**, thấp hơn kênh tự nhiên (67,6%). Nhóm sản phẩm lại nghi ngờ thiết bị cấu hình thấp mới là nguyên nhân.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Hoàn tất onboarding', value: '62,3%', note: '62.300 / 100.000' },
            { label: 'Kênh trả phí', value: '56,2%', tone: 'negative', note: 'Tự nhiên: 67,6%' },
            { label: 'Android cấu hình thấp', value: '43,0%', tone: 'negative', note: 'iOS: 70,9%' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi cần trả lời',
          md: 'Kênh trả phí thấp hơn **vì người dùng của kênh có chất lượng thấp**, hay **vì kênh đưa về nhiều thiết bị khó hoàn tất onboarding**? Hai kết luận dẫn đến hai quyết định khác nhau: cắt ngân sách hay sửa sản phẩm.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: tách kênh, thiết bị và bước',
      blocks: [
        {
          kind: 'formula',
          expression: 'Tỷ lệ hoàn tất của kênh = Σ (tỷ trọng thiết bị trong kênh × tỷ lệ hoàn tất của (kênh, thiết bị))',
          note: 'Chênh lệch giữa hai kênh gồm **phần do mix thiết bị** và **phần còn lại trong cùng thiết bị**. Chỉ phần thứ hai nói về chất lượng của kênh.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Cắt hai chiều** kênh × thiết bị, đảm bảo mẫu đủ lớn ở từng ô.',
            '**Chuẩn hóa mix**: tính kênh trả phí nếu có cùng mix thiết bị với tự nhiên.',
            '**Tìm bước rơi** theo thiết bị bằng funnel.',
            '**Đặt giả thuyết kỹ thuật** (OTP, hiệu năng, quyền) và dữ liệu cần để kiểm tra.',
          ],
        },
        {
          kind: 'quiz',
          id: 'onboarding-completion-segments-q1',
          question: 'Sếp đề nghị cắt kênh trả phí vì tỷ lệ hoàn tất thấp nhất. Bạn nên làm gì trước?',
          options: [
            {
              id: 'a',
              text: 'Đồng ý, vì kênh thấp nhất luôn có chất lượng kém nhất.',
              explain: 'Tỷ lệ gộp phụ thuộc cơ cấu thiết bị. Một kênh có thể thấp chỉ vì mang về nhiều người dùng thiết bị khó hoàn tất.',
            },
            {
              id: 'b',
              text: 'Cắt kênh × thiết bị và so cùng thiết bị giữa các kênh trước khi quyết định.',
              correct: true,
              explain: 'Đúng. So cùng thiết bị loại bỏ ảnh hưởng của mix, cho thấy kênh thực sự kém hay không.',
            },
            {
              id: 'c',
              text: 'Chạy A/B test onboarding mới trước.',
              explain: 'Chưa biết điểm rơi ở đâu thì chưa biết cần thử gì. Phân tích hiện có rẻ hơn và nên làm trước.',
            },
          ],
        },
      ],
    },
    {
      id: 'segment',
      kind: 'analysis',
      title: 'Bước 1 — Kênh × thiết bị và chuẩn hóa mix',
      blocks: [
        {
          kind: 'table',
          title: 'Tỷ lệ hoàn tất theo kênh × thiết bị (người dùng bắt đầu)',
          columns: [
            { key: 'ch', label: 'Kênh' },
            { key: 'ios', label: 'iOS', align: 'right' },
            { key: 'hi', label: 'Android khá/cao', align: 'right' },
            { key: 'lo', label: 'Android thấp', align: 'right' },
            { key: 'all', label: 'Tổng', align: 'right' },
          ],
          rows: [
            { ch: 'Tự nhiên (40.000)', ios: '72% (14.000)', hi: '68% (22.000)', lo: '50% (4.000)', all: '67,6%' },
            { ch: 'Trả phí (35.000)', ios: '66% (8.000)', hi: '60% (17.000)', lo: '42% (10.000)', all: '56,2%' },
            { ch: 'Giới thiệu (25.000)', ios: '74% (8.000)', hi: '66% (11.000)', lo: '40% (6.000)', all: '62,3%' },
            { ch: 'Tổng (100.000)', ios: '70,9%', hi: '64,8%', lo: '43,0%', all: '62,3%' },
          ],
          highlight: [{ row: 1, tone: 'warning' }],
          caption: 'Trong ngoặc là số người bắt đầu. Android cấu hình thấp chiếm 28,6% kênh trả phí và 10% kênh tự nhiên.',
        },
        {
          kind: 'chart',
          title: 'Tỷ lệ hoàn tất theo thiết bị và kênh (%)',
          type: 'bar',
          xKey: 'device',
          unit: '%',
          series: [
            { key: 'org', label: 'Tự nhiên' },
            { key: 'paid', label: 'Trả phí' },
            { key: 'ref', label: 'Giới thiệu' },
          ],
          data: [
            { device: 'iOS', org: 72, paid: 66, ref: 74 },
            { device: 'Android khá/cao', org: 68, paid: 60, ref: 66 },
            { device: 'Android thấp', org: 50, paid: 42, ref: 40 },
          ],
          caption: 'Thiết bị là yếu tố mạnh hơn kênh: chênh giữa iOS và Android thấp (22–34 điểm) lớn hơn chênh giữa các kênh cùng thiết bị (6–10 điểm).',
        },
        {
          kind: 'table',
          title: 'Chuẩn hóa mix: kênh trả phí nếu có mix thiết bị như kênh tự nhiên',
          columns: [
            { key: 'item', label: 'Thành phần' },
            { key: 'calc', label: 'Cách tính', align: 'right' },
            { key: 'val', label: 'Giá trị', align: 'right' },
          ],
          rows: [
            { item: 'Tự nhiên (mix 35/55/10)', calc: '0,35×72 + 0,55×68 + 0,10×50', val: '67,6%' },
            { item: 'Trả phí với mix tự nhiên', calc: '0,35×66 + 0,55×60 + 0,10×42', val: '60,3%' },
            { item: 'Trả phí thực tế (mix 23/49/29)', calc: '', val: '56,2%' },
            { item: 'Chênh 11,4 điểm = trong thiết bị + mix', calc: '(67,6 − 60,3) + (60,3 − 56,2)', val: '7,3 + 4,1' },
          ],
          highlight: [{ row: 3, tone: 'warning' }],
          caption: 'Khoảng 36% (4,1/11,4) chênh lệch là do mix thiết bị; 64% còn lại là kênh trả phí hoàn tất thấp hơn tự nhiên ngay trong cùng thiết bị.',
        },
        {
          kind: 'quiz',
          id: 'onboarding-completion-segments-q2',
          question: 'Kết luận nào đúng nhất về kênh trả phí?',
          options: [
            {
              id: 'a',
              text: 'Hoàn toàn do mix thiết bị, kênh không có vấn đề.',
              explain: 'Mix chỉ giải thích 4,1/11,4 điểm. Trong cùng thiết bị trả phí vẫn thấp hơn tự nhiên 6–8 điểm.',
            },
            {
              id: 'b',
              text: 'Một phần nhỏ (khoảng 1/3) do mix thiết bị, phần lớn còn lại là kênh có chất lượng hoàn tất thấp hơn; vẫn cần xem chi phí/người hoàn tất trước khi cắt.',
              correct: true,
              explain: 'Đúng. Không loại trừ được kênh, nhưng cũng không nên cắt chỉ dựa vào tỷ lệ hoàn tất: quyết định cần dựa trên chi phí/người hoàn tất và giá trị sau đó.',
            },
            {
              id: 'c',
              text: 'Hoàn toàn do kênh vì tỷ lệ trả phí thấp hơn ở cả ba thiết bị.',
              explain: 'Thấp hơn ở cả ba thiết bị đúng, nhưng 36% chênh lệch tổng là mix, không phải kênh.',
            },
          ],
        },
      ],
    },
    {
      id: 'funnel',
      kind: 'analysis',
      title: 'Bước 2 — Điểm rơi theo thiết bị và giả thuyết kỹ thuật',
      blocks: [
        {
          kind: 'table',
          title: '% người bắt đầu còn lại sau từng bước (tích lũy)',
          columns: [
            { key: 'dev', label: 'Thiết bị' },
            { key: 's1', label: 'Sau bước 1', align: 'right' },
            { key: 's2', label: 'Sau bước 2 (tài khoản)', align: 'right' },
            { key: 's3', label: 'Sau bước 3 (OTP/quyền)', align: 'right' },
            { key: 's4', label: 'Hoàn tất', align: 'right' },
          ],
          rows: [
            { dev: 'iOS', s1: '97,0', s2: '89,2', s3: '78,1', s4: '70,9' },
            { dev: 'Android khá/cao', s1: '96,0', s2: '86,4', s3: '71,0', s4: '64,8' },
            { dev: 'Android thấp', s1: '92,0', s2: '71,8', s3: '49,0', s4: '43,0' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Android thấp mất 20,2 điểm ở bước 2 (so với 7,8 iOS) và 22,8 điểm ở bước 3 (so với 11,1 iOS). Hai bước cùng nằm trước chọn mục tiêu.',
        },
        {
          kind: 'table',
          title: 'Giả thuyết, dự đoán và cách kiểm tra',
          columns: [
            { key: 'h', label: 'Giả thuyết' },
            { key: 'predict', label: 'Nếu đúng, ta sẽ thấy' },
            { key: 'test', label: 'Dữ liệu / kiểm tra' },
          ],
          rows: [
            {
              h: 'H1. App chậm/treo ở màn tạo tài khoản và OTP trên máy cấu hình thấp',
              predict: 'Thời gian ở bước 2–3 dài, tỷ lệ crash/ANR cao ở Android thấp',
              test: 'Thời gian mỗi bước, crash theo thiết bị; so với Android khá/cao',
            },
            {
              h: 'H2. OTP đến chậm hoặc không tự điền, người dùng bỏ',
              predict: 'Rơi nhiều ở bước nhập OTP theo nhà mạng; người dùng bấm gửi lại nhiều lần',
              test: 'Sự kiện gửi lại OTP, độ trễ từ lúc gửi đến lúc nhập, theo nhà mạng',
            },
            {
              h: 'H3. Người dùng kênh trả phí ít ý định (loại trừ)',
              predict: 'Tỷ lệ thấp ở mọi thiết bị, kể cả iOS; nếu chỉ rơi ở Android thấp thì H3 yếu',
              test: 'Trả phí vs tự nhiên cùng thiết bị: iOS −6, khá/cao −8, thấp −8 điểm',
            },
          ],
          caption: 'H3 không loại hoàn toàn (trả phí thấp hơn 6–8 điểm ở mọi thiết bị) nhưng nhỏ so với hiệu ứng thiết bị.',
        },
        {
          kind: 'quiz',
          id: 'onboarding-completion-segments-q3',
          question: 'Chỉ có thể làm một việc kiểm tra trong tuần này, việc nào có giá trị nhất?',
          options: [
            {
              id: 'a',
              text: 'Khảo sát người dùng trả phí về lý do bỏ onboarding.',
              explain: 'Khảo sát người đã bỏ rất khó (tỷ lệ phản hồi thấp, lệch), chậm, và không tách được lỗi kỹ thuật.',
            },
            {
              id: 'b',
              text: 'Phân tích thời gian từng bước, crash và độ trễ OTP của Android cấu hình thấp so với nhóm khác.',
              correct: true,
              explain: 'Đúng. Dữ liệu sự kiện sẵn có, trả lời trực tiếp H1 và H2 là hai giả thuyết có quy mô lớn nhất.',
            },
            {
              id: 'c',
              text: 'Tăng ngân sách cho kênh tự nhiên (SEO).',
              explain: 'Đây là giải pháp không dựa trên phân tích; tỷ lệ hoàn tất thấp của Android thấp vẫn còn đó dù kênh nào.',
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
          md: '**Kết luận:** Không cắt kênh trả phí chỉ vì tỷ lệ hoàn tất. Chênh lệch có một phần mix (4,1 điểm), một phần kênh (7,3 điểm), nhưng yếu tố lớn nhất là **Android cấu hình thấp hoàn tất kém ở bước tài khoản và OTP** (43,0% so với 70,9% iOS). Sửa sản phẩm ở đó trước, đồng thời đánh giá kênh bằng chi phí/người hoàn tất.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Điều tra hiệu năng và OTP của Android cấu hình thấp: thời gian bước, crash, độ trễ OTP, tự điền OTP',
              owner: 'Android lead + Data/Analytics',
              metric: 'Tỷ lệ hoàn tất của Android thấp; rơi ở bước 2 và 3',
              threshold: 'Từ 43% lên ≥ 55% trong 6 tuần; bước 2–3 mỗi bước rơi ≤ 15 điểm',
            },
            {
              action: 'Tính chi phí trên mỗi người hoàn tất onboarding theo kênh × thiết bị trước khi cắt ngân sách',
              owner: 'Trưởng nhóm marketing + Data/Analytics',
              metric: 'CPA hoàn tất onboarding theo kênh × thiết bị',
              threshold: 'Cắt/chuyển ngân sách khi CPA hoàn tất cao hơn tự nhiên cùng thiết bị > 30%',
            },
            {
              action: 'Báo cáo hằng tuần: tỷ lệ hoàn tất theo kênh × thiết bị kèm tỷ trọng thiết bị',
              owner: 'Data/Analytics',
              metric: 'Tỷ lệ hoàn tất chuẩn hóa mix',
              threshold: 'Cảnh báo khi mix Android thấp của một kênh > 25% hoặc tỷ lệ chuẩn hóa giảm > 3 điểm',
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
              title: 'So kênh khi cơ cấu thiết bị khác nhau',
              why: 'Tỷ lệ gộp của kênh pha trộn chất lượng kênh với mix người dùng; kênh nhắm vào thiết bị khó sẽ luôn trông xấu.',
              instead: 'So cùng thiết bị hoặc chuẩn hóa về một mix chung.',
            },
            {
              title: 'Chỉ nhìn tỷ lệ hoàn tất cuối',
              why: 'Một con số cuối không cho biết bước nào rơi, nên khó hành động.',
              instead: 'Dùng funnel tích lũy theo từng phân khúc để thấy điểm rơi.',
            },
            {
              title: 'Cắt kênh dựa trên tỷ lệ mà không tính chi phí',
              why: 'Kênh rẻ với tỷ lệ thấp hơn có thể vẫn cho chi phí/người hoàn tất tốt hơn.',
              instead: 'Dùng chi phí trên mỗi người hoàn tất và giá trị sau đó (retention, doanh thu).',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Tỷ lệ của một kênh phụ thuộc vào mix thiết bị; so cùng thiết bị hoặc chuẩn hóa mix trước khi kết luận về chất lượng kênh.',
    'Funnel theo phân khúc chỉ ra điểm rơi thật và mở ra giả thuyết kỹ thuật kiểm tra được.',
    'Quyết định ngân sách cần chi phí trên mỗi kết quả, không chỉ tỷ lệ hoàn tất.',
  ],
  references: [
    {
      title: '[GA4] Funnel exploration',
      publisher: 'Google Analytics Help',
      url: 'https://support.google.com/analytics/answer/9327974',
      note: 'Hướng dẫn xây funnel theo bước và chia theo phân khúc (ví dụ thiết bị), đúng cách phân tích điểm rơi ở bước 2.',
    },
    {
      title: 'User onboarding',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/User_onboarding',
      note: 'Tổng quan khái niệm onboarding người dùng mới và mục tiêu của nó.',
    },
    {
      title: 'Simpson’s paradox',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Simpson%27s_paradox',
      note: 'Cơ sở của việc so cùng phân khúc: gộp có thể làm sai lệch khi mix các nhóm khác nhau.',
    },
  ],
}
