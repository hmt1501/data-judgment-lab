import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — App giao đồ ăn "Ăn Nhanh" (hư cấu), một đợt push khuyến mãi bữa trưa. 200.000 người dùng đã bật thông báo (opted-in)
 * chia ngẫu nhiên 90/10: nhóm gửi 180.000, holdout 20.000. 300.000 người chưa bật thông báo (không nhận push).
 *   Mở app trong ngày gửi (D0): đã bật & nhận 37.440/180.000 = 20,8% · holdout 3.520/20.000 = 17,6% · chưa bật 6,0% (18.000/300.000)
 *   So sánh ngây thơ (nhận vs chưa bật): +14,8 điểm · so sánh ngẫu nhiên (nhận vs holdout): +3,2 điểm (+18,2% tương đối) · chênh lệch do chọn mẫu = 11,6 điểm
 *   Phân khúc: đang hoạt động (40%): gửi 72.000 @ 40,0% = 28.800 · holdout 8.000 @ 38,0% = 3.040 → +2,0 điểm · đã nguội (60%): gửi 108.000 @ 8,0% = 8.640 · holdout 12.000 @ 4,0% = 480 → +4,0 điểm
 *     mở thêm = 72.000×2% + 108.000×4% = 1.440 + 4.320 = 5.760 (= 3,2% × 180.000) ✓ · Σ mở: 28.800 + 8.640 = 37.440 ✓ · 3.040 + 480 = 3.520 ✓
 *   Đơn 7 ngày/người: đang hoạt động 0,80 vs 0,79 (+0,01) · nguội 0,12 vs 0,10 (+0,02) → đơn thêm = 720 + 2.160 = 2.880 (0,5 đơn/lượt mở thêm)
 *   Biên đóng góp 18 nghìn/đơn → 2.880 × 18 = 51,84 triệu · = 288 đ/người được gửi (51,84 tr / 180.000)
 *   Tắt thông báo trong 7 ngày: nhóm gửi 2,0% (3.600) · holdout 0,5% (100 người trên 20.000) · thêm 1,5 điểm × 180.000 = 2.700 người mất kênh
 *   Ước tính thô giá trị kênh bị mất: 288 đ × 95 lần gửi còn lại/năm = 27.360 đ/người × 2.700 = 73,9 triệu/năm (giả định, minh họa)
 */
export const pushNotificationUpliftHypothesis: CaseStudy = {
  id: 'push-notification-uplift-hypothesis',
  title: 'Push tăng mở app 14,8 điểm, nhưng tăng thêm thật chỉ 3,2',
  domain: 'mobile',
  level: 'junior',
  minutes: 12,
  skills: ['experiment', 'causal', 'segmentation', 'monetization'],
  question:
    'Người nhận push mở app nhiều hơn hẳn người không nhận. Push thực sự làm tăng mở app và đơn hàng đến mức nào, và cái giá (người tắt thông báo) có đáng không?',
  summary:
    'Phân biệt so sánh ngây thơ với so sánh có nhóm giữ lại ngẫu nhiên, đo mức tăng thêm theo phân khúc người dùng, quy ra đơn hàng và đặt cạnh chi phí mất kênh thông báo.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng: app và mọi con số đều là giả định để minh họa.* **Ăn Nhanh** gửi push khuyến mãi bữa trưa cho người đã bật thông báo. Báo cáo của nhóm CRM: người nhận push mở app **20,8%** trong ngày gửi, còn người không nhận chỉ **6,0%**, nghĩa là push "tăng 14,8 điểm". Nhóm CRM đề xuất tăng tần suất gửi lên gấp đôi. Nhưng thiết kế gửi có một **nhóm giữ lại ngẫu nhiên 10%** trong số người đã bật thông báo, bạn được nhờ đọc lại kết quả.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Mở app (người nhận)', value: '20,8%', note: '180.000 người' },
            { label: 'Mở app (chưa bật thông báo)', value: '6,0%', note: '300.000 người' },
            { label: 'Mở app (holdout đã bật)', value: '17,6%', note: '20.000 người, không gửi' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi cần trả lời',
          md: 'Người bật thông báo đã khác người không bật **trước khi** có push. Câu hỏi: **mức tăng thêm do push là bao nhiêu, nó có chuyển thành đơn hàng không, và push có làm mất người dùng kênh thông báo không?**',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: đối chứng ngẫu nhiên và hai cách so sánh',
      blocks: [
        {
          kind: 'formula',
          expression: 'Tăng thêm do push = Tỷ lệ (nhóm gửi) − Tỷ lệ (holdout cùng quần thể, ngẫu nhiên)',
          note: 'So với người **chưa bật** thông báo trộn hai thứ: tác động của push và sự khác biệt có sẵn giữa người bật và người không bật (thiên lệch chọn mẫu). Chỉ nhóm giữ lại ngẫu nhiên mới tách được tác động.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Chọn đúng đối chứng**: holdout ngẫu nhiên trong cùng quần thể đã bật.',
            '**Đo kết quả giá trị** (đơn hàng), không chỉ lượt mở app.',
            '**Phân khúc** để biết push có tác dụng ở nhóm nào.',
            '**Đo cái giá**: tắt thông báo, gỡ app, khiếu nại.',
          ],
        },
        {
          kind: 'quiz',
          id: 'push-notification-uplift-hypothesis-q1',
          question: 'Báo cáo "người nhận push mở app nhiều hơn người không nhận 14,8 điểm" có vấn đề gì?',
          options: [
            {
              id: 'a',
              text: 'Không có vấn đề, mẫu 180.000 người đủ lớn.',
              explain: 'Cỡ mẫu lớn không sửa thiên lệch chọn mẫu: sai hệ thống không biến mất khi mẫu lớn.',
            },
            {
              id: 'b',
              text: 'Người bật thông báo vốn đã gắn bó hơn người không bật, nên chênh lệch pha trộn tác động của push với khác biệt có sẵn.',
              correct: true,
              explain: 'Đúng. Holdout đã bật mở app 17,6% dù không nhận push, cao hơn nhiều so với 6,0% của người chưa bật.',
            },
            {
              id: 'c',
              text: 'Nên dùng tỷ lệ mở trong 7 ngày thay vì trong ngày gửi.',
              explain: 'Cửa sổ dài hơn có thể hữu ích để đo tác động trễ, nhưng không sửa thiên lệch chọn mẫu.',
            },
          ],
        },
      ],
    },
    {
      id: 'lift',
      kind: 'analysis',
      title: 'Bước 1 — Mức tăng thêm thật và thiên lệch chọn mẫu',
      blocks: [
        {
          kind: 'chart',
          title: 'Tỷ lệ mở app trong ngày gửi (%)',
          type: 'bar',
          xKey: 'group',
          unit: '%',
          series: [{ key: 'open', label: 'Mở app D0' }],
          data: [
            { group: 'Chưa bật thông báo', open: 6.0 },
            { group: 'Đã bật, holdout (không gửi)', open: 17.6 },
            { group: 'Đã bật, được gửi push', open: 20.8 },
          ],
          caption: 'Phần lớn chênh lệch (6,0 → 17,6) là khác biệt có sẵn giữa người bật và không bật; push chỉ góp phần 17,6 → 20,8.',
        },
        {
          kind: 'table',
          title: 'Hai cách đọc cùng một thử nghiệm',
          columns: [
            { key: 'way', label: 'Cách so sánh' },
            { key: 'calc', label: 'Phép tính', align: 'right' },
            { key: 'val', label: 'Kết quả', align: 'right' },
          ],
          rows: [
            { way: 'Ngây thơ: nhận vs chưa bật', calc: '20,8% − 6,0%', val: '+14,8 điểm' },
            { way: 'Ngẫu nhiên: nhận vs holdout đã bật', calc: '20,8% − 17,6%', val: '+3,2 điểm (+18,2% tương đối)' },
            { way: 'Phần do chọn mẫu', calc: '14,8 − 3,2', val: '11,6 điểm (78%)' },
          ],
          highlight: [{ row: 1, tone: 'positive' }, { row: 2, tone: 'warning' }],
          caption: '78% (11,6/14,8) mức "tăng" trong báo cáo ban đầu không phải do push.',
        },
        {
          kind: 'quiz',
          id: 'push-notification-uplift-hypothesis-q2',
          question: 'Với kết quả này, câu nào mô tả đúng nhất tác động của push lên mở app?',
          options: [
            {
              id: 'a',
              text: 'Push tăng mở app 14,8 điểm.',
              explain: 'Đây là số ngây thơ, cộng cả khác biệt có sẵn giữa hai quần thể.',
            },
            {
              id: 'b',
              text: 'Push tăng mở app khoảng 3,2 điểm trong ngày gửi (từ 17,6% lên 20,8%), đo bằng holdout ngẫu nhiên cùng quần thể.',
              correct: true,
              explain: 'Đúng. Đây là ước lượng nhân quả hợp lý nhất từ thiết kế hiện có; vẫn cần kiểm tra mẫu holdout đủ lớn và ngẫu nhiên thật.',
            },
            {
              id: 'c',
              text: 'Push không có tác dụng vì holdout cũng mở app 17,6%.',
              explain: 'Khoảng cách 3,2 điểm với 20.000 và 180.000 người là một mức tăng thật, chỉ là nhỏ hơn nhiều so với con số báo cáo.',
            },
          ],
        },
      ],
    },
    {
      id: 'segment',
      kind: 'analysis',
      title: 'Bước 2 — Ai thực sự được tác động, và có thành đơn không?',
      blocks: [
        {
          kind: 'table',
          title: 'Mức tăng thêm theo phân khúc (người đã bật thông báo)',
          columns: [
            { key: 'seg', label: 'Phân khúc' },
            { key: 'n', label: 'Gửi / holdout', align: 'right' },
            { key: 'open', label: 'Mở app D0: gửi vs holdout', align: 'right' },
            { key: 'lift', label: 'Mở thêm', align: 'right' },
            { key: 'ord', label: 'Đơn 7 ngày/người: gửi vs holdout', align: 'right' },
          ],
          rows: [
            { seg: 'Đang hoạt động (40%)', n: '72.000 / 8.000', open: '40,0% vs 38,0%', lift: '+2,0 điểm (1.440 lượt)', ord: '0,80 vs 0,79' },
            { seg: 'Đã nguội (60%)', n: '108.000 / 12.000', open: '8,0% vs 4,0%', lift: '+4,0 điểm (4.320 lượt)', ord: '0,12 vs 0,10' },
            { seg: 'Tổng', n: '180.000 / 20.000', open: '20,8% vs 17,6%', lift: '+3,2 điểm (5.760 lượt)', ord: '+2.880 đơn' },
          ],
          highlight: [{ row: 1, tone: 'positive' }],
          caption: 'Người đang hoạt động vốn đã mở app nhiều (38%), push gần như không thêm được gì; hiệu quả tập trung ở nhóm đã nguội.',
        },
        {
          kind: 'text',
          md: '5.760 lượt mở thêm chuyển thành **2.880 đơn thêm** (0,5 đơn mỗi lượt mở thêm), tương đương **51,84 triệu đồng** đóng góp với biên 18 nghìn đồng/đơn. Giả thuyết cho kết quả mạnh hơn ở nhóm nguội: push nhắc đúng nhu cầu bữa trưa với người ít mở app, còn nhóm đang hoạt động tự mở app mà không cần nhắc. Dữ liệu cần để kiểm tra thêm: tỷ lệ đơn theo khung giờ gửi và theo nội dung khuyến mãi; loại trừ việc giảm giá trong push (chứ không phải bản thân push) mới là thứ kéo đơn.',
        },
        {
          kind: 'table',
          title: 'Cái giá của push: người tắt thông báo',
          columns: [
            { key: 'g', label: 'Nhóm' },
            { key: 'opt', label: 'Tắt thông báo trong 7 ngày', align: 'right' },
          ],
          rows: [
            { g: 'Được gửi (180.000)', opt: '2,0% (3.600 người)' },
            { g: 'Holdout (20.000)', opt: '0,5% (100 người)' },
            { g: 'Chênh lệch', opt: '+1,5 điểm = 2.700 người mất kênh' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Ước tính thô: mỗi người mất kênh làm mất 288 đ × 95 lần gửi còn lại/năm ≈ 27.360 đ; 2.700 người ≈ 73,9 triệu đồng/năm, cao hơn 51,84 triệu đồng thu được từ đợt này. Các giả định này chỉ để minh họa.',
        },
        {
          kind: 'quiz',
          id: 'push-notification-uplift-hypothesis-q3',
          question: 'Đề xuất tăng gấp đôi tần suất push nên được xử lý thế nào?',
          options: [
            {
              id: 'a',
              text: 'Chấp nhận, vì push đang tăng mở app và đơn hàng.',
              explain: 'Mức tăng đã nhỏ hơn nhiều so với báo cáo, tập trung ở một nhóm, và cái giá (tắt thông báo) chưa được tính.',
            },
            {
              id: 'b',
              text: 'Chưa, trước hết thử tần suất mới bằng holdout theo phân khúc, đo cả đơn hàng lẫn tỷ lệ tắt thông báo, ưu tiên nhóm đã nguội.',
              correct: true,
              explain: 'Đúng. Tần suất cao hơn có thể làm tắt thông báo tăng nhanh hơn mức đơn thêm; cần thử có đối chứng và theo dõi chỉ số cản trở.',
            },
            {
              id: 'c',
              text: 'Từ chối vì push gây tắt thông báo.',
              explain: 'Push vẫn tạo giá trị dương ở đợt này; câu hỏi là cân bằng giữa lợi và hại ở từng phân khúc, không phải loại bỏ.',
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
          md: '**Kết luận:** Push tăng mở app **3,2 điểm** (không phải 14,8) và tạo thêm ~2.880 đơn (51,84 triệu đồng đóng góp), tập trung ở người dùng đã nguội. Trong khi đó 2.700 người tắt thông báo thêm. Giữ push nhưng nhắm vào nhóm nguội, giữ tần suất hiện tại và đo bằng holdout thường trực.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Giữ holdout ngẫu nhiên 5–10% cho mọi chiến dịch push và báo cáo tăng thêm so với holdout thay vì so với người chưa bật',
              owner: 'CRM + Data/Analytics',
              metric: 'Mở app và đơn tăng thêm so với holdout',
              threshold: '100% chiến dịch có holdout; báo cáo kèm khoảng tin cậy',
            },
            {
              action: 'Thử tần suất 2 lần so với 1 lần mỗi tuần chỉ cho nhóm đã nguội, giữ nhóm đang hoạt động ở tần suất cũ',
              owner: 'CRM + Product',
              metric: 'Đơn thêm/người; tỷ lệ tắt thông báo 7 ngày',
              threshold: 'Đơn thêm/người tăng ≥ 30% so với tần suất cũ và tắt thông báo tăng thêm ≤ 0,5 điểm',
            },
            {
              action: 'Theo dõi tắt thông báo và gỡ app như chỉ số cản trở bắt buộc, kèm ngưỡng dừng',
              owner: 'CRM lead',
              metric: 'Tắt thông báo 7 ngày (hiện 2,0% so với 0,5% holdout)',
              threshold: 'Dừng/giảm tần suất nếu chênh lệch so với holdout > 1,0 điểm',
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
              title: 'So người nhận với người không nhận',
              why: 'Hai nhóm khác nhau sẵn (người bật thông báo gắn bó hơn); chênh lệch gộp cả hai tác động.',
              instead: 'Dùng holdout ngẫu nhiên từ cùng quần thể được gửi.',
            },
            {
              title: 'Dừng ở lượt mở app',
              why: 'Lượt mở là chỉ số trung gian; 5.760 lượt mở thêm chỉ thành 2.880 đơn, và có thể không thành đơn nào nếu push không có ưu đãi.',
              instead: 'Gắn chỉ số kết quả (đơn, doanh thu, retention) vào đo lường.',
            },
            {
              title: 'Không tính chi phí ẩn của push',
              why: 'Người tắt thông báo mất kênh vĩnh viễn; chi phí chỉ hiện ra sau nhiều tuần.',
              instead: 'Theo dõi tắt thông báo và gỡ app của nhóm gửi so với holdout như metric bắt buộc.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'So người nhận với người không nhận cộng cả thiên lệch chọn mẫu; chỉ holdout ngẫu nhiên cùng quần thể mới ước lượng được tác động thật.',
    'Phân khúc cho thấy tác động tập trung ở người dùng đã nguội; người đang hoạt động gần như không cần push.',
    'Quy ra giá trị (đơn) và đặt cạnh cái giá (tắt thông báo) trước khi tăng tần suất.',
  ],
  references: [
    {
      title: 'Firebase A/B Testing',
      publisher: 'Google Firebase',
      url: 'https://firebase.google.com/docs/ab-testing',
      note: 'Tài liệu chính thức về thử nghiệm A/B cho thông báo và tính năng app, gồm khái niệm nhóm đối chứng và kết quả.',
    },
    {
      title: 'Selection bias',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Selection_bias',
      note: 'Giải thích thiên lệch chọn mẫu, nguyên nhân khiến so sánh người nhận với người không nhận bị sai.',
    },
    {
      title: 'Randomized controlled trial',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Randomized_controlled_trial',
      note: 'Cơ sở của việc gán ngẫu nhiên để có đối chứng chính xác.',
    },
  ],
}
