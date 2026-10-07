import type { CaseStudy } from '../types'

/*
 * Số liệu mock (app học ngoại ngữ thuê bao), đã kiểm tra khớp nhau:
 *   North Star: WAL3 = người học hoàn thành ≥3 bài trong tuần.
 *   Tuần T8: WAL3 120.000 = Mới kích hoạt 15.300 + Giữ lại 96.800 (= 121.000 tuần T7 × 80%) + Quay lại 7.900
 *   Theo tuần T1→T8 (nghìn):
 *     Lượt cài   50  52  51  53  80  84  82  85   (T5 mở rộng chiến dịch UA; T5–T8 TB 82,75 vs T1–T4 TB 51,5 → +61%; T8 so TB T1–T4: 85/52,5 ≈ +62%)
 *     Tỷ lệ kích hoạt 30% 30% 31% 30% 19% 18% 19% 18%
 *     Mới kích hoạt = cài × tỷ lệ: 15,0 15,6 15,8 15,9 15,2 15,1 15,6 15,3
 *     WAL3      118 119 120 121 120 120 121 120
 *   Cân bằng dài hạn: W* = (Mới + Quay lại) / (1 − giữ lại)
 *     Hiện tại (15.300 + 7.900) / 0,20 = 116.000
 *     Chỉ tăng giữ lại 80% → 83%: 23.200 / 0,17 ≈ 136.500 (+17,7%)
 *     Chỉ tăng mới lên 19.000: 26.900 / 0,20 = 134.500 (+15,9%)
 *     Mục tiêu đủ ba input (19.000 + 9.000) / 0,17 ≈ 164.700
 *   Cohort Q2 theo số bài/tuần trong 4 tuần đầu: 0 bài 40% · 1–2 bài 32% · ≥3 bài 28% (tổng 100%)
 *     Trial → trả phí: 3% · 9% · 38% · Thuê bao còn sau 3 tháng: 41% · 58% · 82%
 */
export const leadNorthStarMetricTree: CaseStudy = {
  id: 'lead-north-star-metric-tree',
  title: 'Một North Star cho cả công ty: dựng metric tree cho app thuê bao',
  domain: 'mobile',
  level: 'lead',
  minutes: 15,
  skills: ['metric-decomposition', 'metric-definition', 'tradeoff', 'causal'],
  question:
    'Mỗi team đang tối ưu một chỉ số riêng: lượt cài tăng 62%, nhưng doanh thu gần như đứng yên và churn tăng. Ban lãnh đạo cần một North Star và một metric tree để các team kéo cùng một hướng. Chọn gì, phân rã thế nào, và chặn rủi ro ra sao?',
  summary:
    'Chọn North Star phản ánh giá trị khách hàng và dẫn dắt doanh thu, phân rã thành input metric có owner, đặt guardrail và counter-metric, kiểm tra tương quan theo thời gian và thiết lập nhịp review.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là Head of Analytics của một app học ngoại ngữ theo gói thuê bao (dùng thử 7 ngày, sau đó trả phí tháng hoặc năm). Bốn team — Growth, Learning, CRM, Monetization — mỗi team báo cáo một chỉ số "xanh". Nhưng CEO nhìn bức tranh chung thì thấy khác:',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Lượt cài/tuần', value: '85.000', delta: '+62%', tone: 'positive', note: 'So với TB 4 tuần trước chiến dịch' },
            { label: 'MAU', value: '410.000', delta: '+18%', tone: 'positive' },
            { label: 'MRR', value: '9,1 tỷ đ', delta: '+1,5%', tone: 'neutral' },
            { label: 'Churn thuê bao tháng', value: '7,8%', delta: '+0,9 điểm %', tone: 'negative', note: 'Tháng trước: 6,9%' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Triệu chứng của việc thiếu North Star',
          md: 'Khi mỗi team có metric riêng mà không có liên kết rõ ràng tới giá trị khách hàng, các team có thể cùng "thắng" trong khi công ty không tiến lên: Growth mua thêm lượt cài kém chất lượng, CRM gửi thêm push, MAU tăng — nhưng người học thật không nhiều hơn và người trả phí rời đi nhanh hơn.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: North Star → input metric → guardrail',
      blocks: [
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**North Star** đo khoảnh khắc khách hàng nhận được giá trị cốt lõi, và là *chỉ báo dẫn* cho doanh thu (doanh thu là kết quả trễ).',
            '**Input metric**: phân rã North Star thành 3–5 thành phần mà từng team tác động trực tiếp được trong vài tuần; mỗi input có đúng một owner.',
            '**Guardrail**: những chỉ số không được xấu đi khi đẩy North Star (churn, hoàn tiền, khiếu nại, đánh giá store).',
            '**Counter-metric**: cặp với từng input để chặn cách "ăn gian" cụ thể của input đó.',
            '**Nhịp review**: tuần cho input, tháng cho North Star, quý để kiểm tra lại cây còn đúng không.',
          ],
        },
        {
          kind: 'table',
          title: 'Đánh giá các ứng viên North Star',
          columns: [
            { key: 'cand', label: 'Ứng viên' },
            { key: 'value', label: 'Phản ánh giá trị?' },
            { key: 'lead', label: 'Dẫn dắt doanh thu?' },
            { key: 'act', label: 'Team tác động được?' },
            { key: 'game', label: 'Khó gian lận?' },
          ],
          rows: [
            { cand: 'Lượt cài', value: 'Không', lead: 'Yếu', act: 'Có (chỉ Growth)', game: 'Không — mua được' },
            { cand: 'MAU', value: 'Yếu — mở app ≠ học', lead: 'Yếu', act: 'Có', game: 'Không — push kéo lên được' },
            { cand: 'MRR', value: 'Gián tiếp', lead: 'Là kết quả, trễ 1–3 tháng', act: 'Khó theo tuần', game: 'Trung bình — giảm giá kéo lên' },
            { cand: 'Người học tích cực tuần (≥3 bài/tuần, WAL3)', value: 'Có — học đều là giá trị cốt lõi', lead: 'Mạnh (xem cohort)', act: 'Có, qua nhiều input', game: 'Khá — cần định nghĩa "bài" chặt' },
          ],
          highlight: [{ row: 3, tone: 'positive' }],
        },
        {
          kind: 'quiz',
          id: 'lead-north-star-metric-tree-q1',
          question: 'Vì sao không chọn MRR làm North Star dù đó là thứ công ty cuối cùng cần?',
          options: [
            {
              id: 'a',
              text: 'MRR là kết quả trễ: thay đổi hôm nay chỉ hiện ra sau 1–3 tháng, và có thể bị kéo lên bằng cách gây hại giá trị dài hạn (giảm giá sâu, khó hủy gói).',
              correct: true,
              explain: 'Đúng. North Star nên là chỉ báo *dẫn* của doanh thu, đo được hàng tuần và gắn với giá trị khách nhận được. MRR vẫn được theo dõi như kết quả kinh doanh, nhưng không giúp team biết tuần này làm gì; tối ưu thẳng MRR dễ dẫn tới chiến thuật tăng ngắn hạn, hại retention.',
            },
            {
              id: 'b',
              text: 'MRR không đo chính xác được trong app thuê bao.',
              explain: 'MRR đo được khá chính xác từ dữ liệu thanh toán của store. Vấn đề không phải độ chính xác mà là độ trễ và khả năng hành động.',
            },
            {
              id: 'c',
              text: 'North Star không được liên quan đến tiền.',
              explain: 'Ngược lại: North Star tốt *phải* dẫn dắt doanh thu, nếu không công ty sẽ tối ưu một thứ không mang lại kết quả kinh doanh. Nó chỉ không nên *là* doanh thu.',
            },
          ],
        },
      ],
    },
    {
      id: 'validate-nsm',
      kind: 'analysis',
      title: 'Bước 1 — Kiểm tra WAL3 có thật sự dẫn dắt doanh thu',
      blocks: [
        {
          kind: 'table',
          title: 'Cohort Q2: số bài học mỗi tuần trong 4 tuần đầu và kết quả kinh doanh',
          columns: [
            { key: 'group', label: 'Nhóm người dùng mới' },
            { key: 'share', label: 'Tỷ trọng', align: 'right' },
            { key: 'paid', label: 'Trial → trả phí', align: 'right' },
            { key: 'ret', label: 'Thuê bao còn sau 3 tháng', align: 'right' },
          ],
          rows: [
            { group: '0 bài/tuần', share: '40%', paid: '3%', ret: '41%' },
            { group: '1–2 bài/tuần', share: '32%', paid: '9%', ret: '58%' },
            { group: '≥3 bài/tuần', share: '28%', paid: '38%', ret: '82%' },
          ],
          highlight: [{ row: 2, tone: 'positive' }],
          caption: 'Ngưỡng 3 bài/tuần là điểm gãy rõ nhất: tỷ lệ trả phí tăng hơn 4 lần so với nhóm 1–2 bài.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Tương quan chưa phải nhân quả',
          md: 'Người học ≥3 bài/tuần có thể đơn giản là người *vốn đã có động lực* (đang ôn thi, cần cho công việc). Nếu vậy, ép người khác học nhiều hơn chưa chắc làm họ trả phí. Cách kiểm tra: lấy các A/B test đã chạy làm tăng số bài học (nhắc ôn tập, mục tiêu tuần) và xem nhóm treatment có **tăng tỷ lệ trả phí ở 4–8 tuần sau** không. Ba test gần nhất đều cho thấy có, dù hiệu ứng nhỏ hơn mức tương quan thô gợi ý — đủ để chọn WAL3, và phải kiểm tra lại mỗi quý.',
        },
        {
          kind: 'formula',
          expression: 'WAL3 (tuần) = Mới kích hoạt + Giữ lại từ tuần trước + Quay lại',
          note: 'Tuần T8: 120.000 = 15.300 + 96.800 (121.000 × 80%) + 7.900. Mỗi thành phần là một input metric có owner riêng.',
        },
      ],
    },
    {
      id: 'tree',
      kind: 'analysis',
      title: 'Bước 2 — Metric tree: input nào thật sự kéo North Star',
      blocks: [
        {
          kind: 'chart',
          title: 'Lượt cài, mới kích hoạt và WAL3 theo tuần',
          type: 'line',
          xKey: 'week',
          unit: ' nghìn',
          series: [
            { key: 'installs', label: 'Lượt cài' },
            { key: 'activated', label: 'Mới kích hoạt (≥3 bài trong 7 ngày đầu)' },
            { key: 'wal3', label: 'WAL3' },
          ],
          data: [
            { week: 'T1', installs: 50, activated: 15.0, wal3: 118 },
            { week: 'T2', installs: 52, activated: 15.6, wal3: 119 },
            { week: 'T3', installs: 51, activated: 15.8, wal3: 120 },
            { week: 'T4', installs: 53, activated: 15.9, wal3: 121 },
            { week: 'T5', installs: 80, activated: 15.2, wal3: 120 },
            { week: 'T6', installs: 84, activated: 15.1, wal3: 120 },
            { week: 'T7', installs: 82, activated: 15.6, wal3: 121 },
            { week: 'T8', installs: 85, activated: 15.3, wal3: 120 },
          ],
          marker: { x: 'T5', label: 'Mở rộng chiến dịch UA' },
          caption: 'Lượt cài tăng ~60% từ T5 nhưng tỷ lệ kích hoạt rơi từ 30% xuống 18–19%, nên số người mới thật sự học vẫn ~15 nghìn/tuần và WAL3 đi ngang.',
        },
        {
          kind: 'chart',
          title: 'Tương quan giữa thay đổi hàng tuần của input và thay đổi WAL3 (52 tuần)',
          type: 'bar',
          xKey: 'input',
          series: [{ key: 'corr', label: 'Hệ số tương quan' }],
          data: [
            { input: 'Lượt cài', corr: 0.12 },
            { input: 'Mới kích hoạt', corr: 0.64 },
            { input: 'Tỷ lệ giữ lại tuần→tuần', corr: 0.81 },
            { input: 'Người quay lại', corr: 0.38 },
          ],
          caption: 'Lượt cài gần như không liên quan đến WAL3; tỷ lệ giữ lại có quan hệ mạnh nhất. Đây là bằng chứng để đổi input của Growth từ "lượt cài" sang "mới kích hoạt".',
        },
        {
          kind: 'table',
          title: 'Mô phỏng: đòn bẩy nào lớn hơn? (WAL3 cân bằng = (Mới + Quay lại) ÷ (1 − Giữ lại))',
          columns: [
            { key: 'scen', label: 'Kịch bản' },
            { key: 'inputs', label: 'Mới / Quay lại / Giữ lại' },
            { key: 'eq', label: 'WAL3 cân bằng', align: 'right' },
            { key: 'chg', label: 'So hiện tại', align: 'right' },
          ],
          rows: [
            { scen: 'Hiện tại', inputs: '15.300 / 7.900 / 80%', eq: '116.000', chg: '—' },
            { scen: 'Chỉ tăng giữ lại +3 điểm', inputs: '15.300 / 7.900 / 83%', eq: '136.500', chg: '+17,7%' },
            { scen: 'Chỉ tăng mới kích hoạt +24%', inputs: '19.000 / 7.900 / 80%', eq: '134.500', chg: '+15,9%' },
            { scen: 'Mục tiêu đủ ba input', inputs: '19.000 / 9.000 / 83%', eq: '164.700', chg: '+42,0%' },
          ],
          highlight: [
            { row: 0, tone: 'warning' },
            { row: 3, tone: 'positive' },
          ],
          caption: 'WAL3 hiện tại (120.000) cao hơn mức cân bằng (116.000): nếu không đổi gì, North Star sẽ trôi xuống dần. +3 điểm giữ lại có tác dụng tương đương +24% người mới kích hoạt — thường rẻ hơn nhiều so với mua thêm lượt cài.',
        },
        {
          kind: 'quiz',
          id: 'lead-north-star-metric-tree-q2',
          question: 'Team Growth đề xuất ăn mừng lượt cài +62% và tăng tiếp ngân sách UA. Metric tree cho thấy điều gì?',
          options: [
            {
              id: 'a',
              text: 'Nên tăng ngân sách vì lượt cài là đầu vào của mọi thứ.',
              explain: 'Lượt cài tăng nhưng mới kích hoạt không tăng; tương quan với WAL3 chỉ 0,12. Thêm ngân sách theo cách cũ chỉ mua thêm người không học.',
            },
            {
              id: 'b',
              text: 'Lượt cài tăng không chuyển thành người học: input của Growth nên là "mới kích hoạt" (cài × tỷ lệ kích hoạt), và chi phí nên đo trên mỗi người kích hoạt.',
              correct: true,
              explain: 'Đúng. Đổi input sang mới kích hoạt buộc Growth tối ưu chất lượng nguồn và onboarding, không chỉ số lượng. Nếu giá mỗi lượt cài không đổi, chi phí trên mỗi người kích hoạt đã tăng hơn 60%: lượt cài trung bình tăng từ 51,5 lên 82,75 nghìn/tuần trong khi người kích hoạt vẫn ~15 nghìn.',
            },
            {
              id: 'c',
              text: 'Nên cắt hẳn UA vì không có tác dụng.',
              explain: 'Người mới kích hoạt vẫn đóng góp ~15 nghìn mỗi tuần; cắt hẳn sẽ làm WAL3 giảm. Vấn đề là *chất lượng* phần ngân sách tăng thêm, không phải UA nói chung.',
            },
          ],
        },
      ],
    },
    {
      id: 'ownership',
      kind: 'analysis',
      title: 'Bước 3 — Gán owner, guardrail và counter-metric',
      blocks: [
        {
          kind: 'table',
          title: 'Metric tree có owner',
          columns: [
            { key: 'input', label: 'Input metric' },
            { key: 'owner', label: 'Owner' },
            { key: 'now', label: 'Hiện tại', align: 'right' },
            { key: 'target', label: 'Mục tiêu quý', align: 'right' },
            { key: 'counter', label: 'Counter-metric' },
          ],
          rows: [
            { input: 'Mới kích hoạt (≥3 bài trong 7 ngày đầu)', owner: 'Growth', now: '15.300/tuần', target: '19.000/tuần', counter: 'Chi phí trên mỗi người kích hoạt' },
            { input: 'Tỷ lệ giữ lại tuần→tuần của WAL3', owner: 'Learning', now: '80%', target: '83%', counter: 'Điểm kiểm tra cuối bài không giảm' },
            { input: 'Người quay lại', owner: 'CRM', now: '7.900/tuần', target: '9.000/tuần', counter: 'Tỷ lệ tắt thông báo ≤ 3%/tháng' },
            { input: 'Tỷ lệ trả phí trong WAL3 (kết quả)', owner: 'Monetization', now: '—', target: 'Theo dõi', counter: 'Tỷ lệ hoàn tiền ≤ 1,5%' },
          ],
          caption: 'Monetization không có input của North Star: họ sở hữu bước chuyển WAL3 → doanh thu, và là người đầu tiên phát hiện nếu quan hệ đó yếu đi.',
        },
        {
          kind: 'table',
          title: 'Guardrail cấp công ty',
          columns: [
            { key: 'g', label: 'Guardrail' },
            { key: 'now', label: 'Hiện tại', align: 'right' },
            { key: 'limit', label: 'Ngưỡng', align: 'right' },
            { key: 'status', label: 'Trạng thái' },
          ],
          rows: [
            { g: 'Churn thuê bao tháng', now: '7,8%', limit: '≤ 7,0%', status: 'Vượt ngưỡng' },
            { g: 'Tỷ lệ hoàn tiền', now: '1,1%', limit: '≤ 1,5%', status: 'Đạt' },
            { g: 'Đánh giá store (30 ngày)', now: '4,6★', limit: '≥ 4,5★', status: 'Đạt' },
            { g: 'Khiếu nại về thanh toán / 10.000 thuê bao', now: '4,2', limit: '≤ 5,0', status: 'Đạt' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
        },
        {
          kind: 'quiz',
          id: 'lead-north-star-metric-tree-q3',
          question: 'Một quý sau, team Learning đề xuất chia mỗi bài học 10 phút thành hai bài 5 phút. Phản ứng đúng của Head of Analytics là gì?',
          options: [
            {
              id: 'a',
              text: 'Đồng ý, vì bài ngắn hơn giúp nhiều người đạt ngưỡng ≥3 bài/tuần.',
              explain: 'Đây là gaming kinh điển: WAL3 tăng mà giá trị khách nhận được không tăng, và quan hệ WAL3 → trả phí sẽ yếu đi.',
            },
            {
              id: 'b',
              text: 'Cấm mọi thay đổi về độ dài bài học.',
              explain: 'Bài ngắn có thể thật sự tốt cho người học; cấm thẳng chặn cả cải tiến thật. Vấn đề là đo cho đúng, không phải đóng băng sản phẩm.',
            },
            {
              id: 'c',
              text: 'Khóa định nghĩa "bài" trong spec (tối thiểu thời lượng/nội dung) hoặc đổi sang đơn vị nội dung chuẩn; test thay đổi bằng A/B với counter-metric (điểm kiểm tra) và kết quả hạ nguồn (trả phí, churn).',
              correct: true,
              explain: 'Đúng. Spec chặt chống lạm phát metric; A/B test với counter-metric và kết quả hạ nguồn cho biết thay đổi có tạo giá trị thật không. Nếu bài ngắn làm tăng cả việc học lẫn trả phí, hãy cập nhật định nghĩa qua change log.',
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
          md: '**Đề xuất cho ban lãnh đạo:** North Star là **Người học tích cực tuần (WAL3)**, hiện 120.000 và đang trôi về mức cân bằng 116.000. Cây gồm ba input có owner — mới kích hoạt (Growth), giữ lại (Learning), quay lại (CRM) — và Monetization sở hữu bước chuyển sang doanh thu. Ưu tiên quý này là **tỷ lệ giữ lại**, đòn bẩy lớn nhất và rẻ nhất; đồng thời xử lý guardrail churn đang vượt ngưỡng.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Công bố spec WAL3 (định nghĩa "bài" có thời lượng tối thiểu, tuần thứ Hai–Chủ nhật UTC+7, bỏ tài khoản test) và metric tree có owner',
              owner: 'Head of Analytics + CEO',
              metric: 'Số team có input metric nằm trên cây',
              threshold: '4/4 team trong 2 tuần',
            },
            {
              action: 'Đổi KPI của Growth từ lượt cài sang mới kích hoạt; phân bổ lại ngân sách UA theo chi phí trên mỗi người kích hoạt từng nguồn',
              owner: 'Growth lead',
              metric: 'Mới kích hoạt/tuần',
              threshold: '≥ 19.000 cuối quý, chi phí/người kích hoạt không tăng',
            },
            {
              action: 'Learning ưu tiên tính năng giữ chân (ôn tập ngắt quãng, mục tiêu tuần), mỗi tính năng ra mắt qua A/B test',
              owner: 'Learning PM',
              metric: 'Tỷ lệ giữ lại tuần→tuần của WAL3',
              threshold: '80% → 83%, điểm kiểm tra không giảm',
            },
            {
              action: 'Điều tra churn tăng 0,9 điểm % trước khi mở rộng UA: phân rã theo nguồn cài, gói, tuổi thuê bao',
              owner: 'Monetization + Analytics',
              metric: 'Churn thuê bao tháng',
              threshold: 'Về ≤ 7,0% trong 2 tháng',
            },
            {
              action: 'Thiết lập nhịp review: tuần (input + counter), tháng (WAL3 + guardrail), quý (kiểm tra lại tương quan và ngưỡng 3 bài)',
              owner: 'Head of Analytics',
              metric: 'Tương quan WAL3 → trả phí 4 tuần sau',
              threshold: 'Giữ ≥ 0,6; thấp hơn thì xem lại cây',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'WAL3 đo đúng giá trị khách nhận được và đã được kiểm tra là dẫn dắt doanh thu, cả bằng cohort lẫn A/B test. Cây có owner biến North Star thành việc cụ thể mỗi team làm được trong tuần. Mô phỏng cân bằng chỉ ra đòn bẩy lớn nhất (giữ lại) thay vì đòn bẩy dễ thấy nhất (lượt cài). Guardrail và counter-metric chặn các cách "thắng giả", còn review quý thừa nhận rằng cây là giả thuyết cần kiểm chứng lại, không phải chân lý cố định.',
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
              title: 'Chọn North Star là metric dễ tăng',
              why: 'Lượt cài hay MAU tăng nhanh và đẹp trên slide, nhưng có thể mua được hoặc kéo lên bằng push mà không tạo giá trị, như T5–T8 cho thấy.',
              instead: 'Chọn metric đo khoảnh khắc nhận giá trị, kiểm tra nó dẫn dắt doanh thu bằng cohort và thử nghiệm.',
            },
            {
              title: 'Một input, nhiều owner (hoặc không owner)',
              why: 'Khi "retention là việc của tất cả", không ai chịu trách nhiệm khi nó giảm; khi hai team cùng sở hữu một số, họ tranh công thay vì phối hợp.',
              instead: 'Mỗi input đúng một owner; các team khác đóng góp nhưng owner chịu trách nhiệm mục tiêu và giải trình.',
            },
            {
              title: 'Coi metric tree là bất biến',
              why: 'Quan hệ input → North Star → doanh thu có thể yếu đi khi sản phẩm hoặc tập người dùng thay đổi, hoặc khi team tối ưu quá mức một input.',
              instead: 'Review quý: tính lại tương quan, kiểm tra bằng thử nghiệm, cập nhật cây và ngưỡng qua change log.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'North Star tốt đo khoảnh khắc khách hàng nhận giá trị và là chỉ báo dẫn của doanh thu; doanh thu là kết quả trễ, không phải North Star.',
    'Phân rã North Star thành input có đúng một owner, rồi dùng tương quan theo thời gian và mô phỏng để tìm đòn bẩy lớn nhất.',
    'Guardrail, counter-metric và review định kỳ chặn việc "thắng giả" và giữ cho cây phản ánh nhân quả thật.',
  ],
  references: [
    {
      title: 'North Star Playbook',
      publisher: 'Amplitude',
      url: 'https://amplitude.com/books/north-star',
      note: 'Khung chọn North Star, phân rã thành input metric và tổ chức các team quanh metric tree.',
    },
    {
      title: 'Every Product Needs a North Star Metric: Here’s How to Find Yours',
      publisher: 'Amplitude Blog',
      url: 'https://amplitude.com/blog/product-north-star-metric',
      note: 'Tiêu chí của một North Star tốt: phản ánh giá trị khách hàng, dẫn dắt doanh thu, đo lường được tiến độ sản phẩm.',
    },
    {
      title: 'What is a North Star metric?',
      publisher: 'Mixpanel',
      url: 'https://mixpanel.com/blog/north-star-metric/',
      note: 'Ví dụ North Star theo loại sản phẩm và cách liên kết với các metric hỗ trợ.',
    },
  ],
}
