import type { CaseStudy } from '../types'

/*
 * Số liệu mock của app "RideNow" (đã kiểm tra khớp nhau), tuần trước vs tuần này (chỉ phiên bản 5.1 tuần trước):
 *   Tuần trước: 1.000.000 phiên · 8.000 phiên crash (0,8%) · 200.000 người dùng · 6.000 người gặp crash (3,0%) → crash-free users 97,0%
 *   Tuần này: 1.000.000 phiên · 12.000 phiên crash (1,2%) · 200.000 người · 8.000 người gặp crash (4,0%) → crash-free users 96,0%
 *   Theo phiên bản tuần này: v5.1 600.000 phiên/4.800 crash (0,8%), 120.000 người/3.200 người crash (2,67%)
 *                              v5.2 400.000 phiên/7.200 crash (1,8%), 80.000 người/4.800 người crash (6,0%)
 *   Cộng: 600+400 = 1.000 nghìn phiên · 4.800+7.200 = 12.000 · 120+80 = 200 nghìn người · 3.200+4.800 = 8.000
 *   Mức tăng 0,4 điểm % = tỷ trọng v5.2 (40%) × (1,8% − 0,8%) = 0,4
 */
export const crashRateByVersionReading: CaseStudy = {
  id: 'crash-rate-by-version-reading',
  title: 'Crash tăng sau bản mới: đọc theo phiên bản và theo người dùng',
  domain: 'mobile',
  level: 'fresher',
  minutes: 8,
  skills: ['metric-definition', 'metric-decomposition', 'segmentation'],
  question: 'Tỷ lệ crash toàn app tăng từ 0,8% lên 1,2% sau khi ra bản 5.2. Đo theo phiên hay theo người dùng, và phiên bản nào chịu trách nhiệm?',
  summary: 'Phân biệt tỷ lệ crash theo phiên với theo người dùng, rồi tách theo phiên bản để biết bản mới có thật sự là nguyên nhân.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst của **RideNow**, một app gọi xe giả định. Hôm thứ Hai đội kỹ thuật phát hành bản **5.2**. Cuối tuần, dashboard sức khỏe app báo tỷ lệ crash tăng từ 0,8% lên 1,2%. Trưởng kỹ thuật nói *"do mạng"*, trưởng sản phẩm nói *"do bản mới"*. Bạn có số liệu để xác định.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'RideNow và mọi con số là **giả định**. Cách các nền tảng (ví dụ Firebase Crashlytics hay Android vitals) tính tỷ lệ crash có thể khác nhau; hãy đọc định nghĩa của công cụ bạn dùng.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Crash theo phiên', value: '1,2%', delta: '+0,4 điểm % so với 0,8%', tone: 'negative' },
            { label: 'Người dùng gặp crash', value: '4,0%', delta: '+1,0 điểm % so với 3,0%', tone: 'negative' },
            { label: 'Crash-free users', value: '96,0%', delta: '−1,0 điểm % so với 97,0%', tone: 'negative' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: cùng hiện tượng, hai cách đo',
      blocks: [
        {
          kind: 'text',
          md: '**Theo phiên:** bao nhiêu phiên dùng app kết thúc bằng crash. **Theo người dùng:** bao nhiêu người gặp ít nhất một crash trong kỳ. Một người bị crash lặp lại 20 lần làm tỷ lệ theo phiên tăng mạnh nhưng chỉ tính một người ở cách đo thứ hai. Hai góc nhìn trả lời hai câu hỏi khác nhau: mức độ nặng và mức độ lan rộng.',
        },
        {
          kind: 'formula',
          expression: 'Crash theo phiên = Phiên crash ÷ Tổng phiên · Crash-free users = 1 − (Người gặp crash ÷ Tổng người dùng)',
          note: 'Luôn đọc kèm phiên bản: bản mới thường có ít phiên hơn, nên tỷ lệ của nó dao động nhiều hơn khi mẫu còn nhỏ.',
        },
        {
          kind: 'quiz',
          id: 'crash-rate-by-version-reading-q1',
          question: 'Một người dùng bị crash 30 lần liên tiếp do lỗi mở app. Tác động nào đúng?',
          options: [
            {
              id: 'a',
              text: 'Tỷ lệ crash theo phiên tăng đáng kể, nhưng tỷ lệ người dùng gặp crash chỉ tính thêm đúng một người.',
              correct: true,
              explain: 'Đúng. Đây là lý do cần xem cả hai: theo phiên cho biết mức độ nặng, theo người dùng cho biết phạm vi ảnh hưởng.',
            },
            {
              id: 'b',
              text: 'Cả hai tỷ lệ tăng đều như nhau.',
              explain: 'Hai cách đo có tử số khác nhau, nên phản ứng khác nhau với một người crash lặp lại.',
            },
            {
              id: 'c',
              text: 'Không tỷ lệ nào đổi vì chỉ một người.',
              explain: 'Tỷ lệ theo phiên đếm 30 phiên crash, nên chắc chắn đổi.',
            },
          ],
        },
      ],
    },
    {
      id: 'by-version',
      kind: 'analysis',
      title: 'Bước 1 — Tách theo phiên bản',
      blocks: [
        {
          kind: 'table',
          title: 'Crash theo phiên bản tuần này',
          columns: [
            { key: 'ver', label: 'Phiên bản' },
            { key: 'sess', label: 'Phiên', align: 'right' },
            { key: 'crashS', label: 'Phiên crash', align: 'right' },
            { key: 'rateS', label: 'Crash/phiên', align: 'right' },
            { key: 'users', label: 'Người dùng', align: 'right' },
            { key: 'crashU', label: 'Người gặp crash', align: 'right' },
            { key: 'rateU', label: 'Tỷ lệ người', align: 'right' },
          ],
          rows: [
            { ver: 'v5.1 (cũ)', sess: '600.000', crashS: '4.800', rateS: '0,8%', users: '120.000', crashU: '3.200', rateU: '2,67%' },
            { ver: 'v5.2 (mới)', sess: '400.000', crashS: '7.200', rateS: '1,8%', users: '80.000', crashU: '4.800', rateU: '6,0%' },
            { ver: 'Tổng', sess: '1.000.000', crashS: '12.000', rateS: '1,2%', users: '200.000', crashU: '8.000', rateU: '4,0%' },
          ],
          highlight: [
            { row: 1, tone: 'negative' },
            { row: 2, tone: 'warning' },
          ],
          caption: 'Giả định mỗi người dùng chỉ ở một phiên bản trong tuần. v5.1 vẫn đứng ở mức 0,8% như tuần trước; toàn bộ mức tăng nằm ở v5.2.',
        },
        {
          kind: 'chart',
          title: 'Crash theo phiên: tuần trước và hai phiên bản tuần này',
          type: 'bar',
          xKey: 'seg',
          unit: '%',
          series: [{ key: 'rate', label: 'Tỷ lệ crash theo phiên' }],
          data: [
            { seg: 'Tuần trước (v5.1)', rate: 0.8 },
            { seg: 'Tuần này v5.1', rate: 0.8 },
            { seg: 'Tuần này v5.2', rate: 1.8 },
          ],
          caption: 'Bản cũ giữ nguyên 0,8%; bản mới cao gấp 2,25 lần.',
        },
        {
          kind: 'quiz',
          id: 'crash-rate-by-version-reading-q2',
          question: 'Tỷ lệ toàn app tăng 0,4 điểm %. Con số này giải thích thế nào theo bảng?',
          options: [
            {
              id: 'a',
              text: 'v5.2 chiếm 40% phiên và crash cao hơn bản cũ 1,0 điểm %: 40% × 1,0 = 0,4 điểm %, nên toàn bộ mức tăng đến từ bản mới.',
              correct: true,
              explain: 'Đúng. Bản cũ không đổi (0,8%), nên mức tăng toàn app hoàn toàn do tỷ trọng v5.2 nhân với chênh lệch tỷ lệ.',
            },
            {
              id: 'b',
              text: 'Do mạng yếu trên toàn bộ người dùng.',
              explain: 'Nếu do mạng, v5.1 cũng phải tăng. Bản cũ đứng yên ở 0,8%.',
            },
            {
              id: 'c',
              text: 'Do số phiên tuần này nhiều hơn.',
              explain: 'Tổng số phiên không đổi (1.000.000). Thay đổi nằm ở tỷ lệ crash của từng phiên bản.',
            },
          ],
        },
      ],
    },
    {
      id: 'narrow',
      kind: 'analysis',
      title: 'Bước 2 — Đọc kèm người dùng và mức độ lan rộng',
      blocks: [
        {
          kind: 'text',
          md: 'Ở v5.2 có 6,0% số người dùng gặp crash (crash-free users 94,0%), trong khi v5.1 chỉ 2,67%. Chênh lệch theo người (3,3 điểm %) lớn hơn chênh lệch theo phiên (1,0 điểm %): crash của v5.2 **lan rộng** tới nhiều người, không chỉ lặp lại ở một nhóm nhỏ. Điều này củng cố quyết định xử lý bản mới ngay.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Bản mới thường chưa được giữ đều tại mọi thiết bị; hãy tiếp tục chia theo hệ điều hành, đời máy, kênh phát hành (staged rollout) để khoanh vùng. Đồng thời lưu ý hiệu ứng sống sót: người dùng bị crash nhiều có thể bỏ app, làm tỷ lệ nhìn đẹp hơn thực tế.',
        },
        {
          kind: 'quiz',
          id: 'crash-rate-by-version-reading-q3',
          question: 'Quyết định đầu tiên hợp lý nhất cho đội kỹ thuật là gì?',
          options: [
            {
              id: 'a',
              text: 'Tạm dừng tăng tỷ lệ phát hành v5.2, điều tra crash theo thiết bị/hệ điều hành và chuẩn bị bản vá.',
              correct: true,
              explain: 'Đúng. Dữ liệu khoanh vùng bản mới, nên dừng mở rộng và điều tra ngay là bước vừa an toàn vừa rẻ nhất.',
            },
            {
              id: 'b',
              text: 'Rollback toàn bộ người dùng về bản 5.1 ngay lập tức mà không điều tra.',
              explain: 'Có thể cần trong trường hợp nghiêm trọng, nhưng không điều tra sẽ không biết vì sao và có thể lặp lại ở bản sau.',
            },
            {
              id: 'c',
              text: 'Chờ thêm một tháng để có đủ dữ liệu.',
              explain: 'Chờ lâu khi 6% người dùng bản mới đang gặp crash gây tổn hại trải nghiệm không cần thiết.',
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
          md: '**Kết luận:** Tỷ lệ crash toàn app tăng 0,4 điểm % hoàn toàn do bản 5.2 (1,8% so với 0,8% của bản cũ, chiếm 40% phiên). Người dùng v5.2 gặp crash cao hơn cả về phiên lẫn người. Hãy dừng mở rộng bản mới và điều tra theo thiết bị.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Dừng tăng phần trăm phát hành v5.2 và gắn cờ theo đời máy, hệ điều hành',
              owner: 'Trưởng kỹ thuật mobile',
              metric: 'Crash theo phiên của v5.2',
              threshold: 'Về ≤ 1,0% trước khi mở rộng tiếp',
            },
            {
              action: 'Đưa crash theo phiên bản và crash-free users lên dashboard sức khỏe app, kèm số phiên và số người của từng phiên bản',
              owner: 'Analyst sản phẩm',
              metric: 'Crash-free users theo phiên bản',
              threshold: '≥ 98% cho bản đang phát hành',
            },
            {
              action: 'Đặt ngưỡng cảnh báo sau mỗi lần phát hành: so crash bản mới với bản cũ sau 24 giờ',
              owner: 'Kỹ sư phát hành (release manager)',
              metric: 'Tỷ lệ crash bản mới / bản cũ',
              threshold: 'Cảnh báo khi > 1,5 lần',
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
              title: 'Chỉ nhìn tỷ lệ crash toàn app',
              why: 'Tỷ lệ chung che đi việc bản cũ ổn định và bản mới có vấn đề.',
              instead: 'Luôn tách theo phiên bản (và thiết bị, hệ điều hành) khi có thay đổi phát hành.',
            },
            {
              title: 'Trộn lẫn đo theo phiên và theo người',
              why: 'Một người crash lặp lại làm tỷ lệ theo phiên tăng rất mạnh trong khi phạm vi ảnh hưởng nhỏ.',
              instead: 'Báo cáo cả hai và nêu rõ cái nào dùng cho quyết định nào.',
            },
            {
              title: 'Kết luận sớm khi bản mới còn ít phiên',
              why: 'Mẫu nhỏ làm tỷ lệ dao động mạnh.',
              instead: 'Xem số phiên và khoảng tin cậy; ra quyết định khi đủ mẫu hoặc khi tín hiệu rõ ràng và nghiêm trọng.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Crash theo phiên đo mức độ nặng; crash theo người dùng đo mức lan rộng. Cần đọc cả hai.',
    'Khi có bản phát hành mới, tách theo phiên bản trước khi tìm nguyên nhân khác.',
    'Mức tăng toàn app = tỷ trọng bản mới × chênh lệch tỷ lệ so với bản cũ, và có thể kiểm bằng phép tính đơn giản.',
  ],
  references: [
    {
      title: 'Firebase Crashlytics documentation',
      publisher: 'Firebase (Google)',
      url: 'https://firebase.google.com/docs/crashlytics',
      note: 'Tài liệu công cụ báo cáo crash phổ biến; tham khảo cách công cụ đo crash theo phiên bản và theo người dùng.',
    },
    {
      title: 'Android vitals: crash rate',
      publisher: 'Android Developers',
      url: 'https://developer.android.com/topic/performance/vitals/crash',
      note: 'Giải thích các chỉ số crash trong Android vitals và ngưỡng hành vi xấu, giúp hiểu cách nền tảng đo crash.',
    },
  ],
}
