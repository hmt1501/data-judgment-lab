import type { CaseStudy } from '../types'

/*
 * Số liệu mock (trung bình/ngày, 4 tuần trước → tuần này), đã kiểm tra khớp nhau.
 * Công thức: Doanh thu QC = Requests × Fill × eCPM / 1000 ; ARPDAU = Doanh thu / DAU
 * (fill ở đây = impressions / requests, tức match rate × show rate theo cách gọi của AdMob)
 *
 *   Phân khúc        DAU (trước → nay)   Req/DAU  Fill          eCPM (USD)     Doanh thu USD
 *   Tier-1 iOS       60.000 → 60.500     8,0      95% → 95%     20,0 → 20,0    9.120 → 9.196
 *   Tier-1 Android   90.000 → 90.000     8,0      95% → 90%     18,0 → 12,5*   12.312 → 8.104
 *   Còn lại iOS      50.000 → 50.500     8,0      88% → 88%      4,0 → 4,0     1.408 → 1.422
 *   Còn lại Android 300.000 → 301.000    8,0      85% → 85%      2,5 → 2,5     5.100 → 5.117
 *   Tổng            500.000 → 502.000    8,0      88,3% → 87,4%  7,91 → 6,79    27.940 → 23.839
 *   ARPDAU 5,588 → 4,749 cent (−15,0%) = 1,000 × 0,990 (fill) × 0,858 (eCPM)
 *   (*) Tier-1 Android 648.000 imps: Mạng B 36.000 × 25,0 + Mạng A 352.000 × 15,0 + Mạng C 260.000 × 7,4
 *       = 8.104 USD → eCPM 12,51. Trước: B 304.000 × 25 + A 250.000 × 15 + C 130.000 × 7,4 = 12.312 USD.
 *   Tier-1 Android mất 4.208 USD/ngày = hiệu ứng fill (720.000 × −5% × 18 / 1000 = −648)
 *       + hiệu ứng eCPM (648.000 × (12,51 − 18) / 1000 = −3.560).
 *   Theo phiên bản (Tier-1 Android, tuần này): 5.3 = 9.000 DAU, fill 95%, eCPM 18,0 (68.400 imps, 1.231 USD);
 *       5.4 = 81.000 DAU, 579.600 imps → fill 89,4%, 6.873 USD → eCPM 11,86.
 *   Test tần suất (người mới, 30 ngày): control 4,75 c × 6,0 ngày active = 28,5 c + IAP 15,0 = 43,5 c;
 *       variant 5,61 c × 5,2 = 29,2 c + IAP 14,0 = 43,2 c.
 */
export const gameArpdau: CaseStudy = {
  id: 'game-arpdau',
  title: 'Người chơi vẫn đông, doanh thu quảng cáo trên mỗi người giảm 15%',
  domain: 'mobile',
  level: 'mid',
  minutes: 10,
  skills: ['monetization', 'metric-decomposition', 'segmentation', 'experiment'],
  question:
    'DAU ổn định nhưng ARPDAU quảng cáo giảm 15%. Thành phần nào gây ra (lượt request, fill rate hay eCPM), tập trung ở đâu, và có nên tăng tần suất quảng cáo để bù không?',
  summary:
    'Phân rã ARPDAU quảng cáo thành request/DAU × fill rate × eCPM, khoanh vùng theo quốc gia, nền tảng, ad network và phiên bản app trước khi đụng vào tần suất quảng cáo.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst monetization của một studio game casual phát hành toàn cầu, doanh thu chủ yếu đến từ quảng cáo interstitial và rewarded video qua một nền tảng mediation. Producer nhắn: *"Doanh thu QC tuần này tụt mạnh, người chơi thì không giảm. Hay mình tăng tần suất interstitial từ 3 màn/lần xuống 2 màn/lần để bù?"* Dashboard tổng (trung bình/ngày, tuần này so với 4 tuần trước):',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'DAU', value: '502.000', delta: '+0,4%', tone: 'neutral' },
            { label: 'ARPDAU quảng cáo', value: '4,75 cent', delta: '−15,0%', tone: 'negative' },
            { label: 'Doanh thu QC/ngày', value: '23.839 USD', delta: '−14,7%', tone: 'negative' },
            { label: 'Impressions/DAU', value: '6,99', delta: '−1,0%', tone: 'neutral', note: 'giảm nhẹ' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu của buổi phân tích',
          md: 'Trả lời 3 câu trước khi ai đó đổi cấu hình quảng cáo: **thành phần nào của ARPDAU đã đổi**, **ở phân khúc/đối tác nào**, và **tăng tần suất có phải cách bù hợp lý không**. Doanh thu QC tính bằng USD vì ad network thanh toán bằng USD.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: ARPDAU là tích của ba thành phần',
      blocks: [
        {
          kind: 'formula',
          expression: 'ARPDAU (QC) = (Ad requests / DAU) × Fill rate × eCPM / 1000',
          note: 'Fill rate ở đây = impressions / requests (trong AdMob tương đương match rate × show rate). eCPM = doanh thu / impressions × 1000. Nhân ba thành phần lại, requests và impressions triệt tiêu, còn đúng doanh thu / DAU. Vì là phép nhân, tỷ lệ thay đổi của ARPDAU = tích các tỷ lệ thay đổi thành phần.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Phân rã**: request/DAU (thiết kế game, tần suất), fill rate (cung quảng cáo, lỗi SDK) hay eCPM (giá, đối tác, mix quốc gia) đã đổi?',
            '**Khoanh vùng**: tách theo quốc gia (tier-1 vs còn lại), nền tảng, ad network, phiên bản app/SDK. Kiểm tra cả hiệu ứng mix: eCPM tổng có thể giảm chỉ vì tỷ trọng người chơi tier-1 giảm.',
            '**Tìm cơ chế**: điều gì đã đổi ở đúng nhóm đó (release, cập nhật adapter, floor price, chính sách đối tác, mùa vụ ngân sách quảng cáo)?',
            '**Hành động + guardrail**: sửa đúng thành phần hỏng; mọi thay đổi tần suất phải có thử nghiệm và guardrail retention.',
          ],
        },
        {
          kind: 'quiz',
          id: 'game-arpdau-q1',
          question: 'Với dashboard trên, phản hồi nào cho đề xuất tăng tần suất interstitial là hợp lý nhất?',
          options: [
            {
              id: 'a',
              text: 'Đồng ý: DAU ổn định nên tăng tần suất là cách nhanh nhất để kéo ARPDAU về mức cũ.',
              explain:
                'Impressions/DAU chỉ giảm 1%, nên phần lớn −15% không đến từ việc người chơi xem ít quảng cáo hơn. Tăng tần suất là chữa vào thành phần không hỏng, lại có rủi ro làm giảm retention.',
            },
            {
              id: 'b',
              text: 'Chưa đổi gì: phân rã ARPDAU thành request/DAU, fill rate và eCPM, rồi tách theo quốc gia, nền tảng, ad network để tìm thành phần thật sự giảm.',
              correct: true,
              explain:
                'Đúng. Impressions/DAU −1% nghĩa là eCPM phải giảm khoảng 14% mới ra −15%. Cần biết eCPM giảm ở đâu (giá thật giảm hay mix dịch chuyển, đối tác nào) trước khi chọn cách xử lý.',
            },
            {
              id: 'c',
              text: 'Chờ thêm 2–3 tuần vì eCPM luôn dao động theo mùa ngân sách quảng cáo.',
              explain:
                'eCPM có tính mùa vụ (thường thấp đầu năm, cao cuối quý), nhưng −15% trong một tuần, khi DAU không đổi, đủ lớn để điều tra ngay. Chờ đợi khi chưa khoanh vùng có thể bỏ qua một lỗi kỹ thuật đang mất vài nghìn USD mỗi ngày.',
            },
          ],
        },
      ],
    },
    {
      id: 'decompose',
      kind: 'analysis',
      title: 'Bước 1 — Phân rã: eCPM giảm 14%, fill giảm nhẹ, request không đổi',
      blocks: [
        {
          kind: 'table',
          title: 'Phân rã ARPDAU quảng cáo (trung bình/ngày)',
          columns: [
            { key: 'metric', label: 'Thành phần' },
            { key: 'prev', label: '4 tuần trước', align: 'right' },
            { key: 'curr', label: 'Tuần này', align: 'right' },
            { key: 'change', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { metric: 'DAU', prev: '500.000', curr: '502.000', change: '+0,4%' },
            { metric: 'Ad requests / DAU', prev: '8,00', curr: '8,00', change: '0,0%' },
            { metric: 'Fill rate (impressions / requests)', prev: '88,3%', curr: '87,4%', change: '−1,0%' },
            { metric: 'eCPM', prev: '7,91 USD', curr: '6,79 USD', change: '−14,2%' },
            { metric: 'ARPDAU quảng cáo', prev: '5,59 cent', curr: '4,75 cent', change: '−15,0%' },
          ],
          highlight: [{ row: 3, tone: 'negative' }],
          caption: '1,000 × 0,990 × 0,858 ≈ 0,850: eCPM giải thích phần lớn mức giảm, fill rate góp phần nhỏ, tần suất request không đổi.',
        },
        {
          kind: 'table',
          title: 'Tách theo quốc gia × nền tảng',
          columns: [
            { key: 'seg', label: 'Phân khúc' },
            { key: 'dau', label: 'DAU (nay)', align: 'right' },
            { key: 'fill', label: 'Fill (trước → nay)', align: 'right' },
            { key: 'ecpm', label: 'eCPM USD (trước → nay)', align: 'right' },
            { key: 'rev', label: 'Doanh thu USD/ngày (trước → nay)', align: 'right' },
          ],
          rows: [
            { seg: 'Tier-1 iOS', dau: '60.500', fill: '95% → 95%', ecpm: '20,0 → 20,0', rev: '9.120 → 9.196' },
            { seg: 'Tier-1 Android', dau: '90.000', fill: '95% → 90%', ecpm: '18,0 → 12,5', rev: '12.312 → 8.104' },
            { seg: 'Còn lại iOS', dau: '50.500', fill: '88% → 88%', ecpm: '4,0 → 4,0', rev: '1.408 → 1.422' },
            { seg: 'Còn lại Android', dau: '301.000', fill: '85% → 85%', ecpm: '2,5 → 2,5', rev: '5.100 → 5.117' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
          caption:
            'Tier-1 Android mất 4.208 USD/ngày, nhiều hơn cả mức giảm tổng (4.101 USD) vì các phân khúc khác tăng nhẹ theo DAU. Trong đó hiệu ứng eCPM ≈ −3.560 USD, hiệu ứng fill ≈ −648 USD.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst: loại trừ hiệu ứng mix trước',
          md: 'eCPM tổng là trung bình có trọng số theo impressions. Nếu tỷ trọng người chơi tier-1 giảm (ví dụ chạy UA mạnh ở thị trường eCPM thấp), eCPM tổng sẽ giảm **dù không phân khúc nào giảm giá**. Ở đây DAU từng phân khúc gần như không đổi, nên đây là giảm giá thật trong một phân khúc, không phải mix. Luôn kiểm tra điều này trước khi đổ lỗi cho đối tác.',
        },
      ],
    },
    {
      id: 'mechanism',
      kind: 'analysis',
      title: 'Bước 2 — Tìm cơ chế: Mạng B ngừng đấu giá trên app 5.4',
      blocks: [
        {
          kind: 'table',
          title: 'Tier-1 Android theo ad network (impressions/ngày và eCPM)',
          columns: [
            { key: 'net', label: 'Ad network' },
            { key: 'type', label: 'Hình thức' },
            { key: 'prev', label: 'Imps trước → nay', align: 'right' },
            { key: 'ecpm', label: 'eCPM USD', align: 'right' },
            { key: 'rev', label: 'Doanh thu USD (trước → nay)', align: 'right' },
          ],
          rows: [
            { net: 'Mạng B', type: 'Bidding', prev: '304.000 → 36.000', ecpm: '25,0', rev: '7.600 → 900' },
            { net: 'Mạng A', type: 'Bidding', prev: '250.000 → 352.000', ecpm: '15,0', rev: '3.750 → 5.280' },
            { net: 'Mạng C', type: 'Waterfall', prev: '130.000 → 260.000', ecpm: '7,4', rev: '962 → 1.924' },
            { net: 'Tổng', type: '', prev: '684.000 → 648.000', ecpm: '18,0 → 12,5', rev: '12.312 → 8.104' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
          caption:
            'eCPM của từng mạng **không đổi**; thứ thay đổi là Mạng B (trả giá cao nhất) gần như biến mất khỏi phiên đấu giá, impressions dồn sang các nguồn rẻ hơn và một phần request không được lấp (fill 95% → 90%).',
        },
        {
          kind: 'chart',
          title: 'eCPM Tier-1 Android theo ngày',
          type: 'line',
          xKey: 'day',
          unit: ' USD',
          series: [{ key: 'ecpm', label: 'eCPM' }],
          data: [
            { day: '18/9', ecpm: 18.0 },
            { day: '19/9', ecpm: 17.9 },
            { day: '20/9', ecpm: 18.1 },
            { day: '21/9', ecpm: 18.0 },
            { day: '22/9', ecpm: 16.8 },
            { day: '23/9', ecpm: 15.2 },
            { day: '24/9', ecpm: 14.0 },
            { day: '25/9', ecpm: 13.3 },
            { day: '26/9', ecpm: 12.9 },
            { day: '27/9', ecpm: 12.6 },
            { day: '28/9', ecpm: 12.5 },
          ],
          marker: { x: '22/9', label: 'Phát hành app 5.4 (cập nhật mediation SDK)' },
          caption:
            'eCPM giảm **dần** chứ không gãy một ngày: đường cong khớp với tốc độ người chơi cập nhật lên 5.4 (staged rollout), một dấu hiệu mạnh rằng nguyên nhân nằm trong bản phát hành chứ không phải thị trường.',
        },
        {
          kind: 'table',
          title: 'Tier-1 Android tuần này theo phiên bản app',
          columns: [
            { key: 'ver', label: 'Phiên bản' },
            { key: 'dau', label: 'DAU', align: 'right' },
            { key: 'fill', label: 'Fill rate', align: 'right' },
            { key: 'ecpm', label: 'eCPM USD', align: 'right' },
            { key: 'b', label: 'Mạng B có bid?', align: 'right' },
          ],
          rows: [
            { ver: '5.3 (chưa cập nhật)', dau: '9.000', fill: '95,0%', ecpm: '18,0', b: 'Có' },
            { ver: '5.4', dau: '81.000', fill: '89,4%', ecpm: '11,9', b: 'Không (adapter lỗi khởi tạo)' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
          caption: 'Cùng quốc gia, cùng tuần, cùng thị trường quảng cáo: chỉ khác phiên bản. Đây là "nhóm đối chứng tự nhiên" loại trừ giả thuyết mùa vụ.',
        },
        {
          kind: 'quiz',
          id: 'game-arpdau-q2',
          question: 'Bằng chứng nào mạnh nhất để kết luận nguyên nhân là adapter Mạng B trong bản 5.4, chứ không phải thị trường quảng cáo yếu đi?',
          options: [
            {
              id: 'a',
              text: 'eCPM tổng giảm 14% đúng tuần phát hành 5.4.',
              explain:
                'Trùng thời điểm chỉ là manh mối. Tuần đó cũng có thể trùng đầu quý mới khi nhà quảng cáo cắt ngân sách; nếu thị trường yếu thì mọi phiên bản đều bị.',
            },
            {
              id: 'b',
              text: 'Người chơi Tier-1 Android còn ở bản 5.3 vẫn có fill 95% và eCPM 18,0, trong khi bản 5.4 cùng thị trường chỉ còn 11,9; Tier-1 iOS không đổi.',
              correct: true,
              explain:
                'Đúng. So sánh hai nhóm cùng quốc gia, cùng thời gian, chỉ khác phiên bản loại trừ được yếu tố thị trường và mùa vụ. Kết hợp với việc Mạng B không còn bid trên 5.4, cơ chế đã rõ.',
            },
            {
              id: 'c',
              text: 'Mạng B có eCPM cao nhất nên chắc chắn là nguyên nhân.',
              explain:
                'eCPM của Mạng B vẫn là 25,0 như cũ. Điều thay đổi là khối lượng impressions nó thắng, không phải giá. Kết luận dựa trên "nó lớn nhất" mà không có so sánh đối chứng dễ sai.',
            },
          ],
        },
      ],
    },
    {
      id: 'frequency',
      kind: 'analysis',
      title: 'Bước 3 — Có nên tăng tần suất để bù? Nhìn LTV, không nhìn ARPDAU',
      blocks: [
        {
          kind: 'text',
          md: 'Quý trước team đã thử interstitial "2 màn/lần" thay vì "3 màn/lần" trên 10% người chơi mới (ngẫu nhiên, theo dõi 30 ngày). Kết quả cho thấy vì sao ARPDAU là metric **sai** để quyết định tần suất:',
        },
        {
          kind: 'table',
          title: 'Kết quả thử nghiệm tần suất (giá trị trên mỗi người cài, 30 ngày)',
          columns: [
            { key: 'metric', label: 'Chỉ số' },
            { key: 'ctrl', label: 'Control (3 màn/lần)', align: 'right' },
            { key: 'var', label: 'Variant (2 màn/lần)', align: 'right' },
            { key: 'chg', label: 'Chênh lệch', align: 'right' },
          ],
          rows: [
            { metric: 'ARPDAU quảng cáo', ctrl: '4,75 cent', var: '5,61 cent', chg: '+18%' },
            { metric: 'D7 retention', ctrl: '14,0%', var: '12,2%', chg: '−1,8 điểm %' },
            { metric: 'Số ngày active TB / người (30 ngày)', ctrl: '6,0', var: '5,2', chg: '−13%' },
            { metric: 'LTV30 quảng cáo', ctrl: '28,5 cent', var: '29,2 cent', chg: '+2%' },
            { metric: 'LTV30 IAP', ctrl: '15,0 cent', var: '14,0 cent', chg: '−7%' },
            { metric: 'LTV30 tổng', ctrl: '43,5 cent', var: '43,2 cent', chg: '−0,7%' },
          ],
          highlight: [
            { row: 1, tone: 'negative' },
            { row: 5, tone: 'warning' },
          ],
          caption: 'LTV30 quảng cáo = ARPDAU × số ngày active. ARPDAU tăng 18% nhưng người chơi rời game sớm hơn và mua IAP ít hơn: LTV tổng không tăng, còn chi phí UA để giữ DAU thì tăng.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'ARPDAU tăng không có nghĩa là kiếm được nhiều hơn',
          md: 'ARPDAU là tỷ số trên **người còn ở lại**. Khi quảng cáo dày hơn đẩy người chơi nhạy cảm rời đi, mẫu số co lại và ARPDAU có thể tăng ngay cả khi tổng doanh thu theo cohort giảm. Quyết định tần suất phải dựa trên **LTV theo cohort** (quảng cáo + IAP) với guardrail retention.',
        },
        {
          kind: 'quiz',
          id: 'game-arpdau-q3',
          question: 'Nếu vẫn muốn thử lại tần suất sau khi đã sửa lỗi mediation, thiết kế nào tốt nhất?',
          options: [
            {
              id: 'a',
              text: 'Áp dụng cho toàn bộ người chơi trong 1 tuần rồi so ARPDAU với tuần trước.',
              explain:
                'So trước–sau bị nhiễu bởi mùa vụ eCPM và chính việc sửa lỗi mediation. Một tuần cũng quá ngắn để thấy tác động lên retention và LTV.',
            },
            {
              id: 'b',
              text: 'A/B ngẫu nhiên theo người chơi, metric chính là LTV30 tổng (QC + IAP), guardrail D1/D7 retention và số phiên/ngày, dừng nếu D7 giảm quá 0,5 điểm %.',
              correct: true,
              explain:
                'Đúng. Ngẫu nhiên hóa loại trừ nhiễu, metric chính phản ánh giá trị thật trên mỗi người cài, guardrail retention bảo vệ sức khỏe dài hạn và có ngưỡng dừng định trước.',
            },
            {
              id: 'c',
              text: 'Chỉ thử ở thị trường "còn lại" vì eCPM thấp, mất người chơi ở đó không đáng kể.',
              explain:
                'Người chơi thị trường eCPM thấp vẫn đóng góp DAU, xếp hạng store và hiệu ứng mạng xã hội. Kết quả cũng không suy rộng được sang tier-1, nơi có phần lớn doanh thu.',
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
          md: '**Kết luận:** ARPDAU quảng cáo giảm 15% gần như hoàn toàn do Tier-1 Android: từ bản 5.4 (cập nhật mediation SDK), adapter của Mạng B, nguồn đấu giá cao nhất, không khởi tạo được nên không còn bid. Impressions dồn sang nguồn rẻ hơn (eCPM 18,0 → 12,5) và fill giảm 95% → 90%. Thiệt hại khoảng 4.200 USD/ngày và tăng dần khi thêm người chơi cập nhật 5.4. Tần suất quảng cáo không phải vấn đề, và tăng tần suất không làm tăng LTV.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Sửa adapter Mạng B (đúng phiên bản tương thích với mediation SDK mới), phát hành hotfix 5.4.1; kiểm tra adapter của mọi mạng qua công cụ test của mediation trước khi phát hành',
              owner: 'Mobile lead + Ad ops',
              metric: 'eCPM và fill rate Tier-1 Android trên 5.4.1',
              threshold: 'eCPM ≥ 17 USD và fill ≥ 94% trong 3 ngày sau hotfix',
            },
            {
              action: 'Cảnh báo tự động theo ad network × nền tảng × phiên bản app: tỷ trọng impressions hoặc eCPM lệch > 20% so với trung bình 7 ngày',
              owner: 'Data/Analytics',
              metric: 'Thời gian phát hiện sự cố mediation',
              threshold: '< 24 giờ thay vì 1 tuần',
            },
            {
              action: 'Đưa kiểm tra "mọi adapter đều bid" vào checklist release; rollout theo từng nấc (5% → 20% → 100%) và so eCPM theo phiên bản ở mỗi nấc',
              owner: 'QA + Ad ops',
              metric: 'Sự cố doanh thu QC sau release',
              threshold: 'Chênh eCPM giữa bản mới và bản cũ < 5% trước khi tăng nấc',
            },
            {
              action: 'Giữ nguyên tần suất; mọi thay đổi tần suất sau này đi qua A/B với metric LTV30 tổng và guardrail D7',
              owner: 'Game producer + Analytics',
              metric: 'LTV30 tổng, D7 retention',
              threshold: 'Chỉ ship nếu LTV30 tăng có ý nghĩa và D7 không giảm quá 0,5 điểm %',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Lỗi nằm ở **phía cung quảng cáo** (một nguồn đấu giá biến mất), nên sửa mediation khôi phục doanh thu mà không đánh đổi trải nghiệm người chơi. Tăng tần suất chỉ là bù triệu chứng bằng tài sản dài hạn (retention). Cảnh báo theo phiên bản và rollout theo nấc biến sự cố này thành cơ chế phát hiện sớm cho mọi lần cập nhật SDK sau.',
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
              title: 'Bù doanh thu bằng tần suất quảng cáo',
              why: 'Tăng tần suất tác động vào request/DAU, thành phần không hỏng, và đánh đổi retention. ARPDAU có thể đẹp lên trong khi LTV và DAU dài hạn giảm.',
              instead: 'Phân rã để tìm thành phần hỏng; chỉ thay đổi tần suất qua A/B có metric LTV theo cohort và guardrail retention.',
            },
            {
              title: 'Đọc eCPM tổng mà quên hiệu ứng mix',
              why: 'eCPM tổng giảm có thể chỉ vì tỷ trọng người chơi thị trường rẻ tăng (do UA), không phải giá giảm. Đổ lỗi cho đối tác lúc đó là sai.',
              instead: 'Luôn tách eCPM theo quốc gia × nền tảng và kiểm tra tỷ trọng DAU/impressions từng phân khúc trước khi kết luận.',
            },
            {
              title: 'Gán cho "thị trường quảng cáo mùa thấp điểm"',
              why: 'Mùa vụ là lời giải thích tiện lợi nhưng nó ảnh hưởng mọi phiên bản và nền tảng như nhau. Dùng nó mà không kiểm tra có thể bỏ qua một lỗi kỹ thuật kéo dài nhiều tuần.',
              instead: 'Tìm nhóm đối chứng tự nhiên (phiên bản cũ, nền tảng khác cùng thị trường); nếu chỉ một nhóm giảm, nguyên nhân là nội bộ.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'ARPDAU quảng cáo = request/DAU × fill rate × eCPM/1000: phân rã trước để biết thành phần nào thật sự đổi.',
    'Tách theo quốc gia, nền tảng, ad network và phiên bản app; một nhóm đối chứng tự nhiên (bản cũ) là bằng chứng mạnh hơn trùng thời điểm.',
    'Quyết định tần suất quảng cáo bằng LTV theo cohort với guardrail retention, không bằng ARPDAU.',
  ],
  references: [
    {
      title: 'Understand eCPM fluctuation',
      publisher: 'Google AdMob Help',
      url: 'https://support.google.com/admob/answer/15337570',
      note: 'Các nguyên nhân làm eCPM dao động (mùa vụ, quốc gia, cạnh tranh đấu giá) và cách đọc đúng.',
    },
    {
      title: 'Troubleshoot a drop in earnings',
      publisher: 'Google AdMob Help',
      url: 'https://support.google.com/admob/checklist/10424733',
      note: 'Checklist chẩn đoán khi doanh thu QC giảm: requests, match rate, show rate, eCPM, cấu hình mediation.',
    },
    {
      title: 'Optimize waterfall ad sources in mediation',
      publisher: 'Google AdMob Help',
      url: 'https://support.google.com/admob/answer/7374110',
      note: 'Cách tối ưu nguồn quảng cáo trong waterfall/mediation để cân bằng fill rate và eCPM.',
    },
  ],
}
