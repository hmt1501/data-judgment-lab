import type { CaseStudy } from '../types'

/*
 * Số liệu mock (app học ngoại ngữ; so sánh 2 tuần cohort trước và sau khi đổi onboarding), đã kiểm tra khớp nhau:
 *   Cohort trước (T33 + T34): 9.900 + 10.100 = 20.000 cài · D7 22,0% → 4.400 người quay lại
 *     T33: 9.900 × 22,0% = 2.178 · T34: 10.100 × 22,0% = 2.222 → 4.400
 *   Cohort sau (T35 + T36): 11.800 + 12.200 = 24.000 cài · D7 18,0% → 4.320 người quay lại
 *     T35: 11.800 × 18,1% = 2.136 · T36: 12.200 × 17,9% = 2.184 → 4.320
 *   Theo kênh:
 *     Trước: Organic 12.000 (60%) × 26,0% = 3.120 · Paid 8.000 (40%) × 16,0% = 1.280 → 4.400
 *     Sau:   Organic 13.200 (55%) × 22,0% = 2.904 · Paid 10.800 (45%) × 13,1% = 1.416 → 4.320
 *     Phân rã −4,0 điểm %: mix = 0,55×26 + 0,45×16 − 22,0 = 21,5 − 22,0 = −0,5 · tỷ lệ = 18,0 − 21,5 = −3,5
 *   Theo mức hoàn tất onboarding:
 *     Trước: hoàn tất 14.000 (70%) × 28,0% = 3.920 · chưa hoàn tất 6.000 × 8,0% = 480 → 4.400
 *     Sau:   hoàn tất 12.480 (52%) × 28,0% = 3.494 · chưa hoàn tất 11.520 × 7,2% = 826 → 4.320
 *     Nếu tỷ lệ hoàn tất vẫn 70%: 0,70×28,0 + 0,30×7,2 = 21,8% (gần mức cũ 22,0%)
 *   Funnel onboarding (% số cài đạt tới bước):
 *     Cũ: 100 → 95 → 88 → 76 → 70 · Mới: 100 → 95 → 80 → 58 → 55 → 52
 *   Cỡ mẫu A/B: p = 22%, MDE 1,5 điểm %, α = 5%, power 80% → ~11.700 cài/nhánh;
 *     12.000 cài/tuần chia 3 nhánh = 4.000/nhánh/tuần → 3 tuần thu cài + 7 ngày chờ D7 chín.
 */
export const d7Retention: CaseStudy = {
  id: 'd7-retention',
  title: 'D7 giảm từ 22% xuống 18% sau khi đổi onboarding',
  domain: 'mobile',
  level: 'junior',
  minutes: 10,
  skills: ['retention', 'cohort', 'funnel', 'experiment'],
  question:
    'D7 retention của người dùng mới giảm từ 22% xuống 18% ngay sau khi đổi onboarding, trong khi lượt cài tăng. Onboarding mới có thật sự là nguyên nhân, và nên xử lý thế nào?',
  summary:
    'Định nghĩa D7 cho chuẩn, đọc bảng cohort theo tuần cài, loại trừ hiệu ứng mix kênh, tìm bước onboarding rơi nhiều nhất rồi kiểm chứng bằng A/B test.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst của một app học ngoại ngữ. Hai tuần trước, team Product phát hành onboarding mới: bắt buộc tạo tài khoản ngay từ đầu, chọn **ít nhất 5 chủ đề** quan tâm và xin quyền gửi thông báo, nhằm cá nhân hoá bài học. Product Manager nhắn: *"D7 tụt từ 22% xuống 18%, nhưng tuần này cài mới tăng mạnh nhờ chiến dịch. Có phải do người dùng từ quảng cáo kém hơn không?"*',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'D7 retention (cohort 2 tuần)', value: '18,0%', delta: '−4,0 điểm %', tone: 'negative', note: 'Trước: 22,0%' },
            { label: 'Lượt cài mới (2 tuần)', value: '24.000', delta: '+20%', tone: 'positive', note: 'Trước: 20.000' },
            { label: 'Người dùng quay lại ngày 7', value: '4.320', delta: '−1,8%', tone: 'negative', note: 'Trước: 4.400' },
            { label: 'Hoàn tất onboarding', value: '52%', delta: '−18 điểm %', tone: 'negative', note: 'Trước: 70%' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Điều đáng chú ý ngay từ đầu',
          md: 'Lượt cài tăng 20% nhưng **số người quay lại ngày 7 còn giảm** (4.400 → 4.320). Tức là thêm 4.000 người dùng mới mà không giữ thêm được ai. Câu hỏi cần trả lời: phần giảm do *ai đến* (cơ cấu kênh) hay do *họ trải qua gì* (onboarding)?',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: chốt định nghĩa D7, rồi đọc theo cohort',
      blocks: [
        {
          kind: 'formula',
          expression: 'D7 (classic) = Số người dùng của cohort có hoạt động đúng ngày thứ 7 sau khi cài ÷ Số người cài trong cohort',
          note: 'Cohort = nhóm người cài trong cùng một khoảng thời gian (ở đây là tuần cài). Ngày 0 là ngày cài; "hoạt động" phải là hành động do người dùng chủ động làm (mở app, học bài), không phải sự kiện tự bắn như nhận push.',
        },
        {
          kind: 'table',
          title: 'Ba cách tính D7 thường gặp',
          columns: [
            { key: 'type', label: 'Kiểu' },
            { key: 'rule', label: 'Được tính là "giữ chân" khi' },
            { key: 'use', label: 'Dùng khi' },
          ],
          rows: [
            { type: 'Classic / N-day', rule: 'Hoạt động **đúng** ngày 7', use: 'Theo dõi thói quen dùng hằng ngày; app học, game, mạng xã hội' },
            { type: 'Rolling / Unbounded (on or after)', rule: 'Hoạt động vào ngày 7 **hoặc bất kỳ ngày nào sau đó**', use: 'Sản phẩm dùng thưa (du lịch, tài chính); con số luôn ≥ classic và còn tăng theo thời gian' },
            { type: 'Bracket / Range', rule: 'Hoạt động ít nhất một lần trong **khoảng** ngày 7–13', use: 'Muốn bớt nhiễu do một ngày cụ thể (cuối tuần, lễ)' },
          ],
          caption: 'Dashboard của team dùng D7 classic, tính theo múi giờ của người dùng, sự kiện hoạt động là `app_open` hoặc `lesson_start`.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Chốt định nghĩa**: cùng một công thức, cùng sự kiện, chỉ so cohort đã đủ 7 ngày ("chín").',
            '**Đọc bảng cohort theo tuần cài**: mức giảm xuất hiện đúng tuần đổi onboarding hay đã trượt từ trước?',
            '**Loại trừ hiệu ứng mix**: cắt theo kênh; nếu từng kênh đều giảm thì không phải do cơ cấu.',
            '**Khoanh vùng cơ chế**: tách theo hoàn tất onboarding và đi dọc từng bước để tìm chỗ rơi.',
            '**Kiểm chứng nhân quả**: A/B test onboarding cũ và mới trước khi kết luận chắc chắn.',
          ],
        },
        {
          kind: 'quiz',
          id: 'd7-retention-q1',
          question:
            'Một bạn trong team báo: "Em tính lại thì D7 tuần này là 31%, đâu có giảm!" Khả năng cao nhất là gì?',
          options: [
            {
              id: 'a',
              text: 'Dashboard đang tính sai, nên lấy số 31% làm chuẩn.',
              explain:
                'Chưa có căn cứ cho rằng dashboard sai. Hai con số khác nhau thường do định nghĩa khác nhau, không phải do một bên tính nhầm. Phải so định nghĩa trước khi chọn số.',
            },
            {
              id: 'b',
              text: 'Bạn ấy dùng định nghĩa khác, nhiều khả năng là unbounded ("ngày 7 hoặc sau đó"), nên con số cao hơn và không so được với 22% cũ.',
              correct: true,
              explain:
                'Đúng. D7 unbounded luôn ≥ D7 classic vì tính cả người quay lại ở ngày 8, 9, 10… Trước khi thảo luận "tăng hay giảm", phải đảm bảo hai kỳ được tính bằng **cùng một định nghĩa**, cùng sự kiện hoạt động và cùng múi giờ.',
            },
            {
              id: 'c',
              text: 'Cohort tuần này tốt hơn, D7 thật ra đã hồi phục.',
              explain:
                'Không thể kết luận hồi phục khi hai con số dùng cách tính khác nhau. Ngoài ra cohort cài trong tuần này còn chưa đủ 7 ngày, nên D7 của nó chưa đọc được.',
            },
          ],
        },
      ],
    },
    {
      id: 'cohort',
      kind: 'analysis',
      title: 'Bước 1 — Bảng cohort: mức giảm xuất hiện đúng tuần đổi onboarding',
      blocks: [
        {
          kind: 'table',
          title: 'Cohort theo tuần cài (D7 classic)',
          columns: [
            { key: 'week', label: 'Tuần cài' },
            { key: 'installs', label: 'Lượt cài', align: 'right' },
            { key: 'd1', label: 'D1', align: 'right' },
            { key: 'd7', label: 'D7', align: 'right' },
            { key: 'note', label: 'Ghi chú' },
          ],
          rows: [
            { week: 'T31', installs: '9.800', d1: '41,0%', d7: '21,9%', note: 'Onboarding cũ' },
            { week: 'T32', installs: '10.100', d1: '41,3%', d7: '22,1%', note: 'Onboarding cũ' },
            { week: 'T33', installs: '9.900', d1: '40,8%', d7: '22,0%', note: 'Onboarding cũ' },
            { week: 'T34', installs: '10.100', d1: '41,2%', d7: '22,0%', note: 'Onboarding cũ' },
            { week: 'T35', installs: '11.800', d1: '36,0%', d7: '18,1%', note: 'Onboarding mới + chiến dịch' },
            { week: 'T36', installs: '12.200', d1: '35,6%', d7: '17,9%', note: 'Onboarding mới + chiến dịch' },
            { week: 'T37', installs: '12.400', d1: '35,8%', d7: '—', note: 'Chưa đủ 7 ngày' },
          ],
          highlight: [
            { row: 4, tone: 'negative' },
            { row: 5, tone: 'negative' },
          ],
          caption:
            'So sánh 2 tuần trước (T33–T34: 20.000 cài, 4.400 quay lại) với 2 tuần sau (T35–T36: 24.000 cài, 4.320 quay lại). Cohort T37 chưa "chín" nên để trống, không điền số tạm.',
        },
        {
          kind: 'chart',
          title: 'D1 và D7 theo tuần cài',
          type: 'line',
          xKey: 'week',
          unit: '%',
          series: [
            { key: 'd1', label: 'D1' },
            { key: 'd7', label: 'D7' },
          ],
          data: [
            { week: 'T31', d1: 41.0, d7: 21.9 },
            { week: 'T32', d1: 41.3, d7: 22.1 },
            { week: 'T33', d1: 40.8, d7: 22.0 },
            { week: 'T34', d1: 41.2, d7: 22.0 },
            { week: 'T35', d1: 36.0, d7: 18.1 },
            { week: 'T36', d1: 35.6, d7: 17.9 },
          ],
          marker: { x: 'T35', label: 'Đổi onboarding' },
          caption:
            'Bốn cohort cũ ổn định quanh 22%, rồi rơi thành bậc ngay tuần đổi onboarding. **D1 cũng rơi 5 điểm %**: người dùng rời đi ngay trong ngày đầu, đúng giai đoạn onboarding diễn ra.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Dạng "rơi thành bậc" (step change) trùng một mốc thường chỉ về một thay đổi cụ thể; dạng "trượt dần" thường do mùa vụ hoặc chất lượng nguồn xấu đi từ từ. Nhưng ở đây **có hai thay đổi cùng tuần** (onboarding mới và chiến dịch quảng cáo), nên phải tách tiếp trước khi đổ lỗi cho bên nào.',
        },
      ],
    },
    {
      id: 'channel',
      kind: 'analysis',
      title: 'Bước 2 — Loại trừ hiệu ứng mix: kênh nào cũng giảm',
      blocks: [
        {
          kind: 'table',
          title: 'D7 theo kênh, cohort trước và sau',
          columns: [
            { key: 'channel', label: 'Kênh' },
            { key: 'prev', label: 'Trước: cài (tỷ trọng)', align: 'right' },
            { key: 'curr', label: 'Sau: cài (tỷ trọng)', align: 'right' },
            { key: 'd7', label: 'D7 trước → sau', align: 'right' },
          ],
          rows: [
            { channel: 'Organic', prev: '12.000 (60%)', curr: '13.200 (55%)', d7: '26,0% → 22,0%' },
            { channel: 'Paid (quảng cáo)', prev: '8.000 (40%)', curr: '10.800 (45%)', d7: '16,0% → 13,1%' },
            { channel: 'Tổng', prev: '20.000', curr: '24.000', d7: '22,0% → 18,0%' },
          ],
          highlight: [
            { row: 0, tone: 'negative' },
            { row: 1, tone: 'negative' },
          ],
          caption:
            'Paid đúng là có D7 thấp hơn và tỷ trọng tăng từ 40% lên 45%. Nhưng **organic cũng giảm 4 điểm %**, mà organic không bị chiến dịch ảnh hưởng.',
        },
        {
          kind: 'formula',
          expression: 'Hiệu ứng mix = Σ tỷ trọng mới × D7 cũ − D7 cũ = (0,55 × 26,0 + 0,45 × 16,0) − 22,0 = 21,5 − 22,0 = −0,5 điểm %',
          note: 'Phần còn lại, 18,0 − 21,5 = **−3,5 điểm %**, là do D7 trong từng kênh giảm. Khoảng 7/8 mức giảm không liên quan đến việc kéo thêm người dùng từ quảng cáo.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Đừng dừng lại ở câu "người dùng quảng cáo kém hơn"',
          md: 'Giả thuyết của PM *có một phần đúng* (−0,5 điểm %), nhưng nếu chỉ nghe nó, team sẽ cắt chiến dịch và bỏ qua nguyên nhân chính. Luôn lượng hoá xem mỗi giải thích chiếm bao nhiêu phần của mức giảm.',
        },
      ],
    },
    {
      id: 'onboarding',
      kind: 'analysis',
      title: 'Bước 3 — Khoanh vùng: ít người đi hết onboarding hơn',
      blocks: [
        {
          kind: 'table',
          title: 'D7 theo mức hoàn tất onboarding',
          columns: [
            { key: 'group', label: 'Nhóm' },
            { key: 'prev', label: 'Trước: số người · D7', align: 'right' },
            { key: 'curr', label: 'Sau: số người · D7', align: 'right' },
          ],
          rows: [
            { group: 'Hoàn tất onboarding + bài học đầu tiên', prev: '14.000 (70%) · 28,0%', curr: '12.480 (52%) · 28,0%' },
            { group: 'Không hoàn tất', prev: '6.000 (30%) · 8,0%', curr: '11.520 (48%) · 7,2%' },
            { group: 'Tổng', prev: '20.000 · 22,0%', curr: '24.000 · 18,0%' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
          caption:
            'Người đã đi hết onboarding vẫn giữ chân như cũ (28%). Thứ thay đổi là **tỷ lệ hoàn tất: 70% → 52%**. Nếu vẫn giữ 70%, D7 sẽ là 0,70 × 28,0 + 0,30 × 7,2 ≈ 21,8%, gần như mức cũ.',
        },
        {
          kind: 'table',
          title: 'Funnel onboarding: % số người cài đi tới từng bước (tỷ lệ so với bước liền trước)',
          columns: [
            { key: 'n', label: '#' },
            { key: 'old', label: 'Luồng cũ' },
            { key: 'new', label: 'Luồng mới' },
          ],
          rows: [
            { n: 1, old: 'Màn chào: 95% (95,0%)', new: 'Màn chào: 95% (95,0%)' },
            { n: 2, old: 'Chọn 1 mục tiêu: 88% (92,6%)', new: 'Tạo tài khoản: 80% (84,2%)' },
            { n: 3, old: 'Tạo tài khoản: 76% (86,4%)', new: 'Chọn ≥ 5 chủ đề: 58% (72,5%)' },
            { n: 4, old: '—', new: 'Xin quyền thông báo: 55% (94,8%)' },
            { n: 5, old: 'Bài học đầu tiên: 70% (92,1%)', new: 'Bài học đầu tiên: 52% (94,5%)' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Mốc 100% là số người cài. Luồng cũ không có bước xin quyền thông báo.',
        },
        {
          kind: 'chart',
          title: 'Luồng mới: tỷ lệ giữ lại ở từng bước',
          type: 'bar',
          xKey: 'step',
          unit: '%',
          series: [{ key: 'rate', label: 'Tỷ lệ so với bước trước' }],
          data: [
            { step: 'Màn chào', rate: 95.0 },
            { step: 'Tạo tài khoản', rate: 84.2 },
            { step: 'Chọn ≥ 5 chủ đề', rate: 72.5 },
            { step: 'Xin quyền thông báo', rate: 94.8 },
            { step: 'Bài học đầu tiên', rate: 94.5 },
          ],
          caption:
            'Bước chọn chủ đề chỉ giữ được 58/80 = **72,5%** số người đi tới, là chỗ rơi lớn nhất của cả hai luồng.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Đọc funnel theo tỷ lệ từng bước',
          md: 'Tỷ lệ chuyển tiếp từng bước của luồng mới: 95% → 84% → **72,5%** → 95% → 95%. Bước tạo tài khoản (84%) gần với luồng cũ (86%); bước xin quyền thông báo rơi ít (95%). Ứng viên số một là yêu cầu **bắt buộc chọn ≥ 5 chủ đề**: 27,5% người đi tới bước đó dừng lại ở đây.',
        },
        {
          kind: 'quiz',
          id: 'd7-retention-q2',
          question:
            'Người hoàn tất onboarding có D7 28%, người không hoàn tất chỉ 7–8%. Kết luận nào chặt chẽ nhất?',
          options: [
            {
              id: 'a',
              text: 'Ép mọi người hoàn tất onboarding (ví dụ không cho bỏ qua) thì D7 của họ sẽ lên 28%.',
              explain:
                'Đây là nhầm tương quan với nhân quả. Người tự hoàn tất vốn có động lực cao hơn (self-selection). Ép những người ít động lực đi hết không biến họ thành nhóm 28%, thậm chí có thể làm họ bỏ sớm hơn.',
            },
            {
              id: 'b',
              text: 'Luồng mới làm rơi thêm người ở bước chọn chủ đề; đây là giả thuyết mạnh, nhưng cần A/B test để biết sửa bước đó lấy lại bao nhiêu D7.',
              correct: true,
              explain:
                'Đúng. Dữ liệu quan sát chỉ ra **nơi** người dùng rơi và mức độ đáng nghi, nhưng con số 21,8% "nếu giữ 70% hoàn tất" chỉ là ước lượng vì nhóm hoàn tất tự chọn. Cần thí nghiệm có đối chứng để đo tác động thật.',
            },
            {
              id: 'c',
              text: 'Onboarding không liên quan, vì người hoàn tất vẫn có D7 28% như cũ.',
              explain:
                'D7 của nhóm hoàn tất không đổi, nhưng **số người lọt vào nhóm đó** giảm từ 70% xuống 52%. Bỏ qua tỷ trọng nhóm chính là bỏ qua cơ chế gây giảm.',
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
          md: '**Kết luận cho PM:** D7 giảm 4,0 điểm % chủ yếu do onboarding mới (khoảng −3,5 điểm %), không phải do người dùng quảng cáo (khoảng −0,5 điểm %). Người dùng rơi nhiều nhất ở bước bắt buộc chọn ≥ 5 chủ đề; tỷ lệ hoàn tất giảm từ 70% xuống 52%. Mỗi tuần đang mất khoảng **480 người dùng giữ chân** so với onboarding cũ (12.000 cài × 4 điểm %). Đề xuất kiểm chứng bằng A/B test thay vì tranh luận tiếp trên dữ liệu quan sát.',
        },
        {
          kind: 'actions',
          items: [
            {
              action:
                'A/B test 3 nhánh chia đều người cài mới: (A) onboarding cũ, (B) onboarding mới hiện tại, (C) onboarding mới nhưng chọn chủ đề tuỳ chọn, tối thiểu 1 chủ đề, có nút "Bỏ qua"',
              owner: 'Product Manager onboarding + Analyst',
              metric: 'Chính: D7 classic. Phụ: D1, tỷ lệ hoàn tất bài học đầu trong 24h',
              threshold: '~11.700 cài/nhánh (MDE 1,5 điểm %, α 5%, power 80%) ≈ 3 tuần + 7 ngày chờ D7; chọn C nếu khoảng tin cậy 95% của chênh lệch D7 (C − A) nằm trên −1,5 điểm %',
            },
            {
              action:
                'Đặt guardrail cho thí nghiệm: tỷ lệ bật thông báo (mục tiêu ban đầu của luồng mới), tỷ lệ tạo tài khoản, crash rate, gỡ app trong 48h',
              owner: 'Analyst',
              metric: 'Guardrail theo nhánh so với A',
              threshold: 'Dừng nhánh sớm nếu crash rate hoặc gỡ app trong 48h tăng > 20% tương đối',
            },
            {
              action:
                'Theo dõi funnel onboarding theo từng bước và D1 theo ngày cài trên dashboard, kèm chú thích mỗi lần đổi luồng',
              owner: 'Data/Analytics',
              metric: 'Tỷ lệ chuyển tiếp từng bước onboarding, D1 theo ngày',
              threshold: 'Cảnh báo khi một bước giảm > 5 điểm % so với trung bình 14 ngày',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Dữ liệu quan sát đã đủ mạnh để **khoanh vùng** (một bước cụ thể, đúng tuần thay đổi, mọi kênh đều giảm), nhưng chưa đủ để biết sửa bước đó lấy lại bao nhiêu D7. A/B test có nhánh luồng cũ cho câu trả lời nhân quả trong khoảng 4 tuần. Nhánh C giữ lại mục tiêu cá nhân hoá của Product thay vì chỉ rollback. Guardrail đảm bảo không đánh đổi D7 lấy chỉ số khác mà không ai hay. Nếu thiệt hại 480 người/tuần là quá lớn để chờ, có thể chuyển phần lớn traffic còn lại về luồng cũ trong lúc test.',
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
              title: 'So D7 của các cohort chưa "chín" hoặc khác định nghĩa',
              why: 'Cohort cài tuần này chưa đủ 7 ngày nên D7 thấp giả; trộn D7 classic với unbounded tạo ra chênh lệch không có thật.',
              instead: 'Chỉ so các cohort đã đủ cửa sổ quan sát, ghi rõ định nghĩa (classic/unbounded, sự kiện, múi giờ) ngay trên biểu đồ.',
            },
            {
              title: 'Đổ hết cho chất lượng kênh khi có hai thay đổi cùng lúc',
              why: 'Chiến dịch và onboarding mới cùng ra mắt một tuần. Chọn giải thích hợp ý mình mà không lượng hoá sẽ dẫn đến cắt nhầm ngân sách.',
              instead: 'Tách theo kênh và tính phần mix và phần tỷ lệ; giải thích nào chiếm phần lớn mức giảm thì ưu tiên giải thích đó.',
            },
            {
              title: 'Coi "người hoàn tất giữ chân tốt" là quan hệ nhân quả',
              why: 'Người hoàn tất onboarding tự chọn: họ vốn có động lực hơn. Ép mọi người hoàn tất không đảm bảo D7 tăng tương ứng.',
              instead: 'Dùng phân tích quan sát để khoanh vùng, rồi kiểm chứng bằng A/B test có nhánh đối chứng và guardrail.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Chốt định nghĩa D7 (classic hay unbounded, sự kiện, múi giờ) và chỉ so cohort đã đủ 7 ngày trước khi nói tăng hay giảm.',
    'Cắt theo kênh để tách phần mix khỏi phần tỷ lệ; nếu mọi kênh đều giảm, nguyên nhân nằm ở trải nghiệm chứ không ở nguồn người dùng.',
    'Funnel onboarding chỉ ra bước nghi vấn; A/B test có nhánh luồng cũ, metric chính D7 và guardrail mới trả lời được câu hỏi nhân quả.',
  ],
  references: [
    {
      title: 'Build a retention analysis',
      publisher: 'Amplitude Docs',
      url: 'https://amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-build',
      note: 'Giải thích các kiểu retention N-day (classic), On or After (unbounded) và cách dựng bảng cohort.',
    },
    {
      title: 'Firebase A/B Testing',
      publisher: 'Firebase Docs',
      url: 'https://firebase.google.com/docs/ab-testing',
      note: 'Cách chạy thí nghiệm trên app mobile với nhiều biến thể, metric chính và metric phụ như retention.',
    },
    {
      title: 'Sample Size Calculator',
      publisher: "Evan Miller (Evan's Awesome A/B Tools)",
      url: 'https://www.evanmiller.org/ab-testing/sample-size.html',
      note: 'Tính cỡ mẫu cần thiết cho mỗi nhánh từ tỷ lệ nền và mức thay đổi tối thiểu muốn phát hiện.',
    },
  ],
}
