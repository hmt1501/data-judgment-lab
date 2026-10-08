import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — khoản vay tiêu dùng; cut-off điểm tín dụng hạ từ 640 xuống 620 ở quý B.
 *   Funnel                      Quý A (trước)   Quý B (sau nới)
 *   Hồ sơ nộp                   10.000          8.000   (form mới yêu cầu xác thực thêm → nhiều hồ sơ yếu bỏ ngang)
 *   Hồ sơ đủ điều kiện          6.000 (60,0%)   5.000 (62,5%)
 *   Duyệt                       3.000           3.000
 *   Giải ngân                   2.700 (90,0%)   2.760 (92,0%)
 *   Duyệt / nộp:   3.000/10.000 = 30,0%  →  3.000/8.000 = 37,5%  (×1,25 = ×1,0417 × ×1,2)
 *   Duyệt / đủ điều kiện: 3.000/6.000 = 50,0% → 3.000/5.000 = 60,0%
 *   Cùng chuẩn cũ (điểm ≥ 640): quý B duyệt 2.400 → 2.400/5.000 = 48,0% ; band 620–639 duyệt 600 (2.400 + 600 = 3.000)
 *   Giải ngân quý B: 2.400 × 92% = 2.208 (≥640) + 600 × 92% = 552 (620–639) = 2.760
 *   Ever DPD30+ @MOB6: quý A 2.700 × 3,0% = 81 khoản
 *     quý B: 2.208 × 3,0% = 66,24 + 552 × 12,0% = 66,24 → 132,48 khoản = 4,8% của 2.760 (≈ +64% số khoản so với 81)
 *   Band 620–639: 552/2.760 = 20% giải ngân, 66,24/132,48 = 50% khoản quá hạn.
 */
export const approvalRateReading: CaseStudy = {
  id: 'approval-rate-reading',
  title: 'Tỷ lệ duyệt vay tăng, nợ xấu về sau cũng tăng: đọc đúng mẫu số',
  domain: 'lending',
  level: 'fresher',
  minutes: 9,
  skills: ['funnel', 'credit-risk', 'metric-definition'],
  question:
    'Tỷ lệ phê duyệt khoản vay tăng từ 30% lên 37,5% nhưng số duyệt không đổi, và nợ quá hạn của lứa vay mới cao hơn. Con số tăng đó nói điều gì, và định nghĩa nào mới đúng để theo dõi?',
  summary:
    'Đọc funnel hồ sơ → đủ điều kiện → duyệt → giải ngân, so các định nghĩa approval rate với mẫu số khác nhau và gắn với chất lượng tín dụng cùng tuổi khoản vay.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst ở mảng cho vay tiêu dùng của một công ty tài chính (**số liệu mô phỏng**). Báo cáo quý ghi: *"Tỷ lệ phê duyệt tăng 7,5 điểm %, cho thấy trải nghiệm khách hàng tốt hơn."* Tuần sau đó, bộ phận rủi ro nhận thấy nợ quá hạn của các khoản vay mới nhìn xấu hơn. Trưởng nhóm hỏi: *"Hai tin này có liên quan không, và approval rate đang đo cái gì?"*',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Duyệt / hồ sơ nộp', value: '37,5%', delta: '+7,5 điểm %', tone: 'positive' },
            { label: 'Số hồ sơ được duyệt', value: '3.000', delta: '0%', tone: 'neutral' },
            { label: 'Hồ sơ nộp', value: '8.000', delta: '−20,0%', tone: 'warning' },
            { label: 'Ever DPD30+ @MOB6', value: '4,8%', delta: 'từ 3,0%', tone: 'negative' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu của buổi phân tích',
          md: 'Trả lời 3 câu: **approval rate tăng vì tử số hay mẫu số**, **chuẩn duyệt có thay đổi không**, và **chất lượng khoản vay cùng tuổi ra sao**. Chưa cần kết luận nên nới hay siết, chỉ cần đọc đúng chỉ số.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: tỷ lệ = tử số / mẫu số, hãy hỏi cả hai',
      blocks: [
        {
          kind: 'formula',
          expression: 'Duyệt / nộp = (Đủ điều kiện / nộp) × (Duyệt / đủ điều kiện)',
          note: 'Tích của hai tỷ lệ bước liền kề. Nếu một trong hai đổi vì lý do không liên quan đến chuẩn duyệt (ví dụ thay đổi form, kênh, chiến dịch), approval rate đổi mà chuẩn không đổi.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Định nghĩa**: approval rate = duyệt / *hồ sơ nộp*, hay duyệt / *hồ sơ đủ điều kiện* (đã qua kiểm tra đầy đủ, KYC), hay theo chuẩn chấm điểm cố định?',
            '**Đếm lại cả tử số và mẫu số**: số duyệt và số hồ sơ nộp đã đổi bao nhiêu?',
            '**Giữ chuẩn không đổi**: tính lại tỷ lệ với cùng cut-off điểm của kỳ trước.',
            '**Nối với chất lượng**: ever DPD30+ cùng tuổi sổ (MOB), cắt theo band điểm.',
          ],
        },
        {
          kind: 'quiz',
          id: 'approval-rate-reading-q1',
          question: 'Approval rate (duyệt / nộp) tăng từ 30% lên 37,5% trong khi số duyệt giữ nguyên 3.000. Giải thích hợp lý nhất?',
          options: [
            {
              id: 'a',
              text: 'Ngân hàng duyệt nhiều khách hơn nên doanh số cho vay tăng.',
              explain: 'Số duyệt không đổi (3.000). Tỷ lệ tăng vì mẫu số giảm từ 10.000 xuống 8.000 hồ sơ.',
            },
            {
              id: 'b',
              text: 'Mẫu số hồ sơ nộp giảm 20% trong khi số duyệt giữ nguyên, nên tỷ lệ tăng; cần kiểm tra thêm chuẩn duyệt.',
              correct: true,
              explain: 'Đúng. 3.000/10.000 = 30,0%, còn 3.000/8.000 = 37,5%. Tỷ lệ chỉ là kết quả của hai con số; đừng đọc "tăng" như cải thiện khi mẫu số đã đổi.',
            },
            {
              id: 'c',
              text: 'Chất lượng hồ sơ nộp chắc chắn tốt hơn.',
              explain: 'Chưa có bằng chứng. Hồ sơ yếu bỏ ngang chỉ là một khả năng, và phải kiểm tra với tỷ lệ đủ điều kiện và chất lượng khoản vay.',
            },
          ],
        },
      ],
    },
    {
      id: 'funnel',
      kind: 'analysis',
      title: 'Bước 1 — Đọc funnel: mẫu số đổi, và tỷ lệ bước cuối cũng đổi',
      blocks: [
        {
          kind: 'table',
          title: 'Funnel cho vay theo quý (mô phỏng)',
          columns: [
            { key: 'step', label: 'Bước' },
            { key: 'a', label: 'Quý A', align: 'right' },
            { key: 'b', label: 'Quý B', align: 'right' },
            { key: 'rate', label: 'Tỷ lệ bước (A → B)', align: 'right' },
          ],
          rows: [
            { step: 'Hồ sơ nộp', a: '10.000', b: '8.000', rate: '—' },
            { step: 'Hồ sơ đủ điều kiện', a: '6.000', b: '5.000', rate: '60,0% → 62,5%' },
            { step: 'Được duyệt', a: '3.000', b: '3.000', rate: '50,0% → 60,0%' },
            { step: 'Giải ngân', a: '2.700', b: '2.760', rate: '90,0% → 92,0%' },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: 'Hồ sơ nộp giảm 20% (form mới yêu cầu xác thực thêm, hồ sơ yếu bỏ ngang). Bước "đủ điều kiện → duyệt" tăng 10 điểm %: đây mới là chỗ chuẩn duyệt có thể đã đổi.',
        },
        {
          kind: 'chart',
          title: 'Approval rate theo ba định nghĩa',
          type: 'bar',
          xKey: 'def',
          unit: '%',
          series: [
            { key: 'a', label: 'Quý A' },
            { key: 'b', label: 'Quý B' },
          ],
          data: [
            { def: 'Duyệt / nộp', a: 30.0, b: 37.5 },
            { def: 'Duyệt / đủ điều kiện', a: 50.0, b: 60.0 },
            { def: 'Cùng chuẩn cũ (≥ 640) / đủ điều kiện', a: 50.0, b: 48.0 },
          ],
          caption: 'Cùng một quý, ba định nghĩa cho ba câu chuyện: tăng 7,5 điểm %, tăng 10 điểm %, và giảm nhẹ 2 điểm % khi giữ chuẩn cũ.',
        },
        {
          kind: 'quiz',
          id: 'approval-rate-reading-q2',
          question: 'Vì sao phải tính thêm "duyệt cùng chuẩn cũ / đủ điều kiện" = 48%?',
          options: [
            {
              id: 'a',
              text: 'Để chứng minh ngân hàng duyệt ít hơn trước.',
              explain: 'Mục đích là tách ảnh hưởng của thay đổi chuẩn khỏi các yếu tố khác, không phải kết luận duyệt ít hay nhiều.',
            },
            {
              id: 'b',
              text: 'Vì nó cho biết nếu chuẩn không đổi thì tỷ lệ chỉ ở 48%, phần tăng lên 60% đến từ việc hạ cut-off xuống 620.',
              correct: true,
              explain: 'Đúng. 2.400 khoản qua chuẩn cũ trên 5.000 hồ sơ đủ điều kiện = 48,0%; thêm 600 khoản band 620–639 mới được duyệt do cut-off hạ, ra 3.000/5.000 = 60,0%.',
            },
            {
              id: 'c',
              text: 'Vì 48% là con số chính thức phải báo cáo.',
              explain: 'Không có định nghĩa chính thức duy nhất; mỗi tổ chức chọn định nghĩa và phải công bố rõ.',
            },
          ],
        },
      ],
    },
    {
      id: 'quality',
      kind: 'analysis',
      title: 'Bước 2 — Nối với chất lượng: nợ xấu nằm ở band mới',
      blocks: [
        {
          kind: 'table',
          title: 'Ever DPD30+ tại MOB6 theo band điểm (mô phỏng)',
          columns: [
            { key: 'band', label: 'Nhóm' },
            { key: 'disb', label: 'Số khoản giải ngân', align: 'right' },
            { key: 'rate', label: 'Ever DPD30+ @MOB6', align: 'right' },
            { key: 'bad', label: 'Số khoản', align: 'right' },
          ],
          rows: [
            { band: 'Quý A (điểm ≥ 640)', disb: '2.700', rate: '3,0%', bad: '81' },
            { band: 'Quý B, điểm ≥ 640', disb: '2.208', rate: '3,0%', bad: '66' },
            { band: 'Quý B, điểm 620–639 (band mới)', disb: '552', rate: '12,0%', bad: '66' },
            { band: 'Quý B, tổng', disb: '2.760', rate: '4,8%', bad: '132' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Band cũ không xấu đi (3,0% ở cả hai quý). Toàn bộ mức tăng đến từ 552 khoản của band mới; band này chiếm 20% giải ngân nhưng 50% khoản quá hạn.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'So cùng tuổi và cùng nhóm',
          md: 'Chỉ so chất lượng khi hai lứa vay đã **cùng số tháng trên sổ (MOB)**. Lứa mới chưa đủ tuổi luôn trông "sạch" hơn. Nếu bỏ qua điều này, bạn có thể kết luận sai theo cả hai chiều.',
        },
        {
          kind: 'quiz',
          id: 'approval-rate-reading-q3',
          question: 'Báo cáo quý nên làm gì với chỉ số approval rate?',
          options: [
            {
              id: 'a',
              text: 'Chỉ báo duyệt / nộp vì dễ hiểu nhất và đang tăng.',
              explain: 'Chỉ số này bị ảnh hưởng bởi mẫu số (kênh, form, chiến dịch). Báo một mình sẽ dễ gây hiểu lầm.',
            },
            {
              id: 'b',
              text: 'Báo song song nhiều định nghĩa, kèm số tuyệt đối, tỷ lệ cùng chuẩn cũ và ever DPD30+ cùng MOB theo band.',
              correct: true,
              explain: 'Đúng. Một chỉ số duyệt đứng riêng không phản ánh chất lượng. Ghép với tỷ lệ cùng chuẩn và chất lượng cùng tuổi mới ra được kết luận về tăng trưởng và rủi ro.',
            },
            {
              id: 'c',
              text: 'Bỏ approval rate vì không có giá trị.',
              explain: 'Approval rate vẫn hữu ích cho vận hành nếu định nghĩa rõ ràng và đọc kèm các chỉ số còn lại.',
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
          md: '**Kết luận cho báo cáo:** approval rate "duyệt / nộp" tăng 7,5 điểm % phần lớn do mẫu số giảm 20% và do hạ cut-off xuống 620 (duyệt / đủ điều kiện tăng 50% → 60%). Cùng chuẩn cũ, tỷ lệ chỉ 48%. Band 620–639 mới có ever DPD30+ @MOB6 là 12,0% so với 3,0% của band cũ. Nên coi đây là **đánh đổi tăng trưởng và rủi ro**, không phải cải thiện trải nghiệm.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Công bố định nghĩa chuẩn cho approval rate (tử số, mẫu số, loại hồ sơ loại trừ) và báo thêm tỷ lệ theo chuẩn chấm điểm cố định',
              owner: 'Risk analytics + Product',
              metric: 'Số báo cáo dùng định nghĩa không có chú thích',
              threshold: '0',
            },
            {
              action: 'Theo dõi ever DPD30+ cùng MOB (3, 6, 9) theo band điểm và kênh cho mọi lứa vay mới, cảnh báo khi band mới vượt ngưỡng chấp nhận',
              owner: 'Risk analytics',
              metric: 'Ever DPD30+ @MOB6 của band 620–639',
              threshold: 'Rà soát cut-off nếu vượt mức hòa vốn đã tính trước',
            },
            {
              action: 'Ghi lại mọi thay đổi form, kênh, chiến dịch cùng ngày hiệu lực để diễn giải mẫu số',
              owner: 'Product + Marketing',
              metric: 'Tỷ lệ thay đổi có ghi nhận',
              threshold: '100%',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Tách chỉ số thành các bước và giữ chuẩn cố định giúp biết **phần tăng đến từ đâu**; nối với chất lượng cùng tuổi giúp biết **cái giá phải trả**. Cách này không đòi hỏi kết luận nới hay siết ngay, chỉ đảm bảo quyết định dựa trên bức tranh đầy đủ.',
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
              title: 'Đọc tỷ lệ mà không nhìn số tuyệt đối',
              why: 'Tỷ lệ tăng có thể do tử số tăng, mẫu số giảm, hoặc cả hai; ví dụ ở đây số duyệt không đổi.',
              instead: 'Luôn đặt tử số và mẫu số cạnh tỷ lệ, kể cả trong thẻ KPI.',
            },
            {
              title: 'Đổi định nghĩa mà không chú thích',
              why: 'Duyệt / nộp và duyệt / đủ điều kiện cho hai con số khác nhau cho cùng quý; so sánh qua các báo cáo sẽ lệch.',
              instead: 'Cố định một định nghĩa chính, nêu rõ, và chỉ báo thêm định nghĩa khác khi cần.',
            },
            {
              title: 'So chất lượng khác tuổi khoản vay',
              why: 'Lứa mới chưa đủ thời gian phát sinh quá hạn nên trông tốt hơn thực tế.',
              instead: 'So theo MOB và theo band điểm; chờ đủ tuổi trước khi kết luận.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Approval rate là tỷ lệ: luôn xem cả tử số, mẫu số và định nghĩa (trên hồ sơ nộp hay hồ sơ đủ điều kiện).',
    'Tách tỷ lệ thành các bước funnel và tính lại với chuẩn cố định để biết phần tăng đến từ mẫu số hay từ việc nới chuẩn.',
    'Nối approval rate với chất lượng khoản vay cùng tuổi (MOB) và theo band điểm trước khi gọi là cải thiện.',
  ],
  references: [
    {
      title: 'Principles for the Management of Credit Risk (2000)',
      publisher: 'Basel Committee on Banking Supervision (BIS)',
      url: 'https://www.bis.org/publ/bcbs75.pdf',
      note: 'Nguyên tắc về quy trình cấp tín dụng lành mạnh và theo dõi rủi ro tín dụng (bản đã được thay thế bằng phiên bản 2025 nhưng vẫn nêu khung cấp tín dụng cơ bản).',
    },
    {
      title: 'Build a funnel analysis',
      publisher: 'Amplitude Docs',
      url: 'https://amplitude.com/docs/analytics/charts/funnel-analysis/funnel-analysis-build',
      note: 'Cách dựng funnel: chọn sự kiện bắt đầu, các bước tiếp theo và thứ tự người dùng đi qua.',
    },
  ],
}
