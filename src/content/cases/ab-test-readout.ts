import type { CaseStudy } from '../types'

/*
 * Số liệu mock (A/B test checkout một trang), đã kiểm tra khớp nhau:
 *   Đơn vị: người dùng bắt đầu checkout · metric chính: tỷ lệ đặt hàng thành công.
 *   Kế hoạch: baseline 40,0%, MDE tương đối 2% (0,8 điểm %), α = 5% hai phía, power 80%
 *     n ≈ 7,84 × (0,40·0,60 + 0,408·0,592) / 0,008² = 7,84 × 0,4815 / 0,000064 ≈ 59.000/nhánh
 *     ~8.600 người/ngày → 14 ngày (2 chu kỳ tuần đầy đủ).
 *   Ngày 4 (dashboard, theo exposure): C 17.200 · 6.880 đơn (40,00%) · T 16.680 · 6.886 đơn (41,28%)
 *     +1,28 điểm (+3,2%) · SE = 0,534 điểm · z = 2,40 · p ≈ 0,016 · CI 95% [+0,23; +2,33]
 *     SRM: kỳ vọng 16.940/nhánh · χ² = 2 × 260² / 16.940 ≈ 7,98 · p ≈ 0,005
 *   Ngày 14 (dashboard, theo exposure): C 60.200 · 24.080 (40,00%) · T 58.350 · 23.748 (40,70%)
 *     +0,70 điểm (+1,75%) · z ≈ 2,46 · p ≈ 0,014 · SRM χ² = 2 × 925² / 59.275 ≈ 28,9 · p < 0,0001
 *   Nguyên nhân: 1.800 user nhánh T trên in-app browser iOS cũ bị lỗi redirect trước khi bắn exposure.
 *   ITT (log phân nhánh server): C 60.200 · 24.080 (40,00%) · T 60.150 = 58.350 + 1.800
 *     Đơn T = 23.748 + 1.800 × 25% (450) = 24.198 → 40,23% · +0,23 điểm (+0,6%)
 *     SE = 0,283 điểm · CI 95% [−0,32; +0,78] · z ≈ 0,81 · p ≈ 0,42
 *     SRM theo phân nhánh: χ² = 2 × 25² / 60.175 ≈ 0,02 · p ≈ 0,89
 *   Phân khúc (ITT): Mới C 24.000 · 7.680 (32,0%) | T 24.000 · 7.968 (33,2%) → +1,2 điểm, z ≈ 2,80, p ≈ 0,005
 *     Quay lại C 36.200 · 16.400 (45,3%) | T 36.150 · 16.230 (44,9%) → −0,4 điểm, z ≈ −1,1, p ≈ 0,28
 *     Tổng C 7.680 + 16.400 = 24.080 · T 7.968 + 16.230 = 24.198 ✓
 *   Lift tương đối theo ngày (ITT): 3,3 2,6 2,3 2,0 1,5 1,0 0,5 0,0 −0,3 −0,6 −0,9 −1,0 −1,0 −1,0 → TB 0,6%
 */
export const abTestReadout: CaseStudy = {
  id: 'ab-test-readout',
  title: 'A/B test checkout "thắng" +3,2% ở ngày thứ 4: có nên ship?',
  domain: 'ecommerce',
  level: 'mid',
  minutes: 14,
  skills: ['experiment', 'causal', 'data-quality', 'tradeoff'],
  question:
    'Test checkout một trang mới chạy được 4/14 ngày, dashboard báo tỷ lệ chuyển đổi +3,2%, p = 0,016. PM muốn dừng test và ship ngay. Kết quả này có đáng tin không, và quyết định cuối cùng nên là gì?',
  summary:
    'Đọc kết quả A/B test đúng cách: bám metric chính và cỡ mẫu đã đăng ký trước, tránh peeking, kiểm tra SRM, đọc khoảng tin cậy, nhận diện novelty effect, xem phân khúc mà không p-hacking và kiểm tra guardrail.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst phụ trách thử nghiệm của một sàn thương mại điện tử. Team Checkout đang test **checkout một trang** (gộp địa chỉ, vận chuyển, thanh toán) so với checkout ba bước hiện tại, chia 50/50. Sáng ngày thứ 4, PM gửi ảnh chụp dashboard: *"+3,2% và có ý nghĩa thống kê rồi! Mình dừng test, ship cho 100% luôn nhé?"*',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Lift tỷ lệ chuyển đổi', value: '+3,2%', delta: '40,00% → 41,28%', tone: 'positive' },
            { label: 'p-value', value: '0,016', tone: 'positive', note: 'Ngưỡng α = 0,05' },
            { label: 'Thời gian đã chạy', value: '4 / 14 ngày', tone: 'warning' },
            { label: 'Cỡ mẫu đã có', value: '33.880', tone: 'warning', note: 'Kế hoạch: ~118.000' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi đúng không phải "có significant không"',
          md: 'Một readout tốt trả lời theo thứ tự: **dữ liệu có đáng tin không** (phân nhánh, logging), **kết quả có theo đúng kế hoạch đã đăng ký không** (metric, cỡ mẫu, thời gian), **hiệu ứng lớn bao nhiêu và chắc đến đâu** (khoảng tin cậy), **có bền không** (novelty), và **có gây hại ở đâu không** (guardrail). p-value chỉ là một dòng trong đó.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: đọc kết quả theo kế hoạch đã đăng ký',
      blocks: [
        {
          kind: 'table',
          title: 'Kế hoạch thử nghiệm đã đăng ký trước khi chạy',
          columns: [
            { key: 'item', label: 'Thành phần' },
            { key: 'value', label: 'Đã cam kết' },
          ],
          rows: [
            { item: 'Đơn vị phân nhánh & phân tích', value: 'Người dùng bắt đầu checkout (phân nhánh ở server)' },
            { item: 'Metric chính', value: 'Tỷ lệ đặt hàng thành công / người dùng' },
            { item: 'Baseline · MDE', value: '40,0% · tương đối 2% (0,8 điểm %)' },
            { item: 'α · power', value: '5% hai phía · 80%' },
            { item: 'Cỡ mẫu · thời gian', value: '~59.000/nhánh · 14 ngày (2 chu kỳ tuần)' },
            { item: 'Guardrail', value: 'AOV, tỷ lệ lỗi thanh toán, thời gian tải, tỷ lệ hủy 24h' },
            { item: 'Phân khúc dự kiến', value: 'Khách mới / quay lại; thiết bị (chỉ để mô tả)' },
          ],
        },
        {
          kind: 'formula',
          expression: 'n mỗi nhánh ≈ (z₀,₀₂₅ + z₀,₂)² × [p₁(1−p₁) + p₂(1−p₂)] ÷ δ² = 7,84 × 0,4815 ÷ 0,008² ≈ 59.000',
          note: 'Với ~8.600 người/ngày, cần 14 ngày. Thời gian còn phải phủ trọn chu kỳ tuần vì hành vi mua cuối tuần khác ngày thường.',
        },
        {
          kind: 'quiz',
          id: 'ab-test-readout-q1',
          question: 'Ngày 4, p = 0,016 < 0,05. Vì sao không nên dừng test và kết luận ngay?',
          options: [
            {
              id: 'a',
              text: 'Vì p-value chỉ hợp lệ khi kiểm tra một lần ở cỡ mẫu đã định; nhìn kết quả mỗi ngày và dừng khi "đẹp" làm tỷ lệ dương tính giả tăng vượt xa 5%.',
              correct: true,
              explain: 'Đúng. Đây là *peeking problem*. Ngưỡng α = 5% giả định bạn chỉ kiểm định một lần. Nếu xem mỗi ngày và dừng ngay khi p < 0,05, xác suất "thắng" một test không có hiệu ứng có thể lên khoảng 20% sau 10–15 lần nhìn. Muốn được dừng sớm thì phải dùng phương pháp thiết kế cho việc đó (sequential testing, group sequential với ngưỡng điều chỉnh) và đăng ký từ trước.',
            },
            {
              id: 'b',
              text: 'Vì p = 0,016 vẫn chưa đủ nhỏ, cần p < 0,001.',
              explain: 'Vấn đề không phải độ lớn của p mà là quy trình tạo ra nó. Tự hạ ngưỡng tùy ý cũng là thay đổi kế hoạch sau khi thấy dữ liệu.',
            },
            {
              id: 'c',
              text: 'Vì lift +3,2% quá lớn so với MDE 2%, chắc chắn là lỗi.',
              explain: 'Lift lớn hơn MDE không tự nó là lỗi; MDE chỉ là hiệu ứng nhỏ nhất test được thiết kế để phát hiện. Nhưng hiệu ứng lớn bất thường ở cỡ mẫu nhỏ là lý do để *kiểm tra kỹ hơn*, đặc biệt là chất lượng phân nhánh.',
            },
          ],
        },
      ],
    },
    {
      id: 'srm',
      kind: 'analysis',
      title: 'Bước 1 — Kiểm tra SRM: phân nhánh có đúng 50/50 không?',
      blocks: [
        {
          kind: 'text',
          md: 'Trước khi nhìn bất kỳ metric nào, kiểm tra **sample ratio mismatch (SRM)**: số người ở mỗi nhánh có khớp tỷ lệ thiết kế không. Nếu lệch, một nhóm người dùng đã "biến mất" khỏi một nhánh vì lý do liên quan đến chính thay đổi đang test — và mọi so sánh sau đó đều có thể sai lệch.',
        },
        {
          kind: 'table',
          title: 'Số người dùng theo nhánh và kiểm định χ² (kỳ vọng 50/50)',
          columns: [
            { key: 'src', label: 'Nguồn đếm' },
            { key: 'c', label: 'Control', align: 'right' },
            { key: 't', label: 'Treatment', align: 'right' },
            { key: 'ratio', label: 'Tỷ trọng T', align: 'right' },
            { key: 'p', label: 'p-value SRM', align: 'right' },
          ],
          rows: [
            { src: 'Dashboard (exposure), ngày 4', c: '17.200', t: '16.680', ratio: '49,2%', p: '≈ 0,005' },
            { src: 'Dashboard (exposure), ngày 14', c: '60.200', t: '58.350', ratio: '49,2%', p: '< 0,0001' },
            { src: 'Log phân nhánh server, ngày 14', c: '60.200', t: '60.150', ratio: '50,0%', p: '≈ 0,89' },
          ],
          highlight: [
            { row: 0, tone: 'negative' },
            { row: 1, tone: 'negative' },
            { row: 2, tone: 'positive' },
          ],
          caption: 'Server phân nhánh đúng 50/50, nhưng nhánh T thiếu 1.800 người ở bước ghi exposure. SRM đã phát hiện được ngay từ ngày 4.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Tìm nguyên nhân SRM',
          md: 'Cắt phần thiếu theo trình duyệt và phiên bản app: toàn bộ 1.800 người nằm ở **in-app browser trên bản iOS cũ**, nơi trang checkout mới bị lỗi redirect *trước khi* sự kiện exposure được bắn. Những người này không biến mất: họ gặp trang lỗi, và chỉ khoảng 25% quay lại đặt được hàng (so với ~40% bình thường). Dashboard chỉ đếm người "được thấy" trang mới, tức là **tự động loại bỏ đúng nhóm có trải nghiệm tệ nhất** khỏi nhánh T.',
        },
        {
          kind: 'quiz',
          id: 'ab-test-readout-q2',
          question: 'Phát hiện SRM ở dashboard (49,2% thay vì 50%). Việc nên làm là gì?',
          options: [
            {
              id: 'a',
              text: 'Lệch 0,8 điểm % là nhỏ, cứ đọc kết quả bình thường.',
              explain: 'Với gần 120.000 người, lệch 0,8 điểm % có p < 0,0001: gần như chắc chắn không phải ngẫu nhiên. Một nhóm "mất tích" không ngẫu nhiên có thể tạo ra hoặc xóa đi toàn bộ hiệu ứng.',
            },
            {
              id: 'b',
              text: 'Lấy mẫu ngẫu nhiên bớt người ở nhánh Control cho cân bằng rồi so sánh.',
              explain: 'Cân bằng số lượng không sửa được thiên lệch: nhóm bị thiếu ở T là nhóm *đặc biệt* (trải nghiệm lỗi), còn bỏ ngẫu nhiên người ở C không tạo ra nhóm tương ứng.',
            },
            {
              id: 'c',
              text: 'Coi kết quả dashboard là không đáng tin, tìm nguyên nhân, và phân tích theo log phân nhánh (intent-to-treat) — tính cả những người bị lỗi.',
              correct: true,
              explain: 'Đúng. SRM là tín hiệu dữ liệu bị lỗi, cần chẩn đoán trước khi đọc metric. Phân tích intent-to-treat theo nhánh được phân, không theo việc có "thấy" trang hay không, giữ được tính ngẫu nhiên của thiết kế và phản ánh đúng tác động khi ship cho mọi người — kể cả người gặp lỗi.',
            },
          ],
        },
      ],
    },
    {
      id: 'effect',
      kind: 'analysis',
      title: 'Bước 2 — Hiệu ứng thật: khoảng tin cậy và novelty',
      blocks: [
        {
          kind: 'table',
          title: 'Metric chính: ba cách đọc cùng một test',
          columns: [
            { key: 'view', label: 'Cách đọc' },
            { key: 'c', label: 'Control', align: 'right' },
            { key: 't', label: 'Treatment', align: 'right' },
            { key: 'lift', label: 'Chênh lệch', align: 'right' },
            { key: 'ci', label: 'CI 95% (điểm %)', align: 'right' },
          ],
          rows: [
            { view: 'Dashboard ngày 4 (peek)', c: '40,00%', t: '41,28%', lift: '+1,28 điểm (+3,2%)', ci: '[+0,23; +2,33]' },
            { view: 'Dashboard ngày 14 (có SRM)', c: '40,00%', t: '40,70%', lift: '+0,70 điểm (+1,75%)', ci: '[+0,14; +1,26]' },
            { view: 'ITT ngày 14 (đúng kế hoạch)', c: '40,00%', t: '40,23%', lift: '+0,23 điểm (+0,6%)', ci: '[−0,32; +0,78]' },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: 'Đọc đúng, hiệu ứng là +0,23 điểm với khoảng tin cậy chứa 0 và không loại trừ được mức giảm 0,32 điểm. Mức MDE 0,8 điểm nằm ngoài khoảng: nếu có lợi thì lợi ích nhỏ hơn mức đã đặt ra để đáng ship.',
        },
        {
          kind: 'chart',
          title: 'Lift tương đối theo từng ngày (ITT)',
          type: 'line',
          xKey: 'day',
          unit: '%',
          series: [{ key: 'lift', label: 'Lift so với Control' }],
          data: [
            { day: 'N1', lift: 3.3 },
            { day: 'N2', lift: 2.6 },
            { day: 'N3', lift: 2.3 },
            { day: 'N4', lift: 2.0 },
            { day: 'N5', lift: 1.5 },
            { day: 'N6', lift: 1.0 },
            { day: 'N7', lift: 0.5 },
            { day: 'N8', lift: 0.0 },
            { day: 'N9', lift: -0.3 },
            { day: 'N10', lift: -0.6 },
            { day: 'N11', lift: -0.9 },
            { day: 'N12', lift: -1.0 },
            { day: 'N13', lift: -1.0 },
            { day: 'N14', lift: -1.0 },
          ],
          marker: { x: 'N4', label: 'Dashboard báo p = 0,016' },
          caption: 'Lift giảm đều từ +3,3% xuống khoảng −1,0% ở tuần thứ hai (trung bình 14 ngày ≈ +0,6%). Mẫu hình này điển hình của **novelty effect**: khách quen tò mò thử giao diện mới, rồi quay về hành vi thường — hoặc tệ hơn khi quen dần với điểm bất tiện.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Hai lớp ảo giác chồng lên nhau',
          md: 'Con số +3,2% ở ngày 4 là tổng của ba thứ: **peeking** (chọn đúng thời điểm đẹp), **SRM** (nhánh T bị loại bớt người gặp lỗi), và **novelty** (những ngày đầu cao bất thường). Bóc từng lớp, hiệu ứng còn lại không phân biệt được với 0.',
        },
      ],
    },
    {
      id: 'segments-guardrails',
      kind: 'analysis',
      title: 'Bước 3 — Phân khúc và guardrail, không p-hacking',
      blocks: [
        {
          kind: 'table',
          title: 'Phân khúc đã đăng ký trước: khách mới và khách quay lại (ITT)',
          columns: [
            { key: 'seg', label: 'Phân khúc' },
            { key: 'n', label: 'Người dùng (C / T)', align: 'right' },
            { key: 'c', label: 'Control', align: 'right' },
            { key: 't', label: 'Treatment', align: 'right' },
            { key: 'diff', label: 'Chênh lệch', align: 'right' },
            { key: 'p', label: 'p', align: 'right' },
          ],
          rows: [
            { seg: 'Khách mới', n: '24.000 / 24.000', c: '32,0%', t: '33,2%', diff: '+1,2 điểm', p: '≈ 0,005' },
            { seg: 'Khách quay lại', n: '36.200 / 36.150', c: '45,3%', t: '44,9%', diff: '−0,4 điểm', p: '≈ 0,28' },
            { seg: 'Tổng', n: '60.200 / 60.150', c: '40,0%', t: '40,2%', diff: '+0,23 điểm', p: '≈ 0,42' },
          ],
          highlight: [{ row: 0, tone: 'warning' }],
          caption: 'Team đã cắt thêm 10 phân khúc khác ngoài kế hoạch (thiết bị × kênh × vùng). Với 12 phép so sánh ở α = 5%, kỳ vọng có ~0,6 kết quả "significant" chỉ do ngẫu nhiên; ngưỡng Bonferroni là 0,05 / 12 ≈ 0,004, và p ≈ 0,005 của khách mới không vượt qua.',
        },
        {
          kind: 'table',
          title: 'Guardrail (ITT, 14 ngày)',
          columns: [
            { key: 'g', label: 'Guardrail' },
            { key: 'c', label: 'Control', align: 'right' },
            { key: 't', label: 'Treatment', align: 'right' },
            { key: 'verdict', label: 'Đánh giá' },
          ],
          rows: [
            { g: 'AOV', c: '452.000 đ', t: '449.000 đ', verdict: '−0,7%, CI [−1,9%; +0,5%], chưa kết luận' },
            { g: 'Tỷ lệ lỗi thanh toán', c: '2,1%', t: '2,4%', verdict: '+0,3 điểm, p ≈ 0,001 — vi phạm' },
            { g: 'Thời gian tải checkout (p75)', c: '1,8 giây', t: '1,9 giây', verdict: 'Trong ngưỡng ≤ +0,2 giây' },
            { g: 'Tỷ lệ hủy đơn trong 24h', c: '3,0%', t: '3,1%', verdict: 'Không khác biệt' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
        },
        {
          kind: 'quiz',
          id: 'ab-test-readout-q3',
          question: 'Khách mới tăng +1,2 điểm (p ≈ 0,005). PM đề xuất: "Vậy ship cho khách mới thôi." Bạn trả lời thế nào?',
          options: [
            {
              id: 'a',
              text: 'Đồng ý, vì phân khúc này đã được đăng ký trước và p < 0,05.',
              explain: 'Phân khúc có trong kế hoạch, nhưng chỉ để *mô tả*, không phải tiêu chí ship. Đặt cạnh 11 lát cắt khác, p ≈ 0,005 không vượt ngưỡng hiệu chỉnh; lại thêm guardrail lỗi thanh toán đang vi phạm.',
            },
            {
              id: 'b',
              text: 'Coi đây là giả thuyết đáng tin để kiểm chứng: chạy lại test sau khi sửa lỗi, đăng ký trước "khách mới" là metric chính (hoặc phân tầng theo khách mới/quay lại với ngưỡng hiệu chỉnh).',
              correct: true,
              explain: 'Đúng. Hiệu ứng ở khách mới có cơ chế hợp lý (người chưa quen checkout cũ hưởng lợi nhiều nhất từ việc gộp bước), nên đáng test tiếp — nhưng phải xác nhận ở một test mới có đăng ký trước, không phải chọn ra từ test đang có. Đó là ranh giới giữa khám phá và p-hacking.',
            },
            {
              id: 'c',
              text: 'Bỏ qua hoàn toàn vì phân tích phân khúc luôn là p-hacking.',
              explain: 'Xem phân khúc là cần thiết để hiểu hiệu ứng không đồng nhất. Vấn đề chỉ nằm ở việc *ra quyết định* dựa trên lát cắt chọn sau khi thấy dữ liệu mà không xác nhận lại.',
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
          md: '**Kết luận readout:** **Không ship** ở trạng thái hiện tại. Phân tích đúng kế hoạch (ITT, 14 ngày) cho thấy lift +0,23 điểm, CI 95% [−0,32; +0,78], không đạt MDE 0,8 điểm. Con số +3,2% ngày 4 là kết quả của peeking, SRM do lỗi redirect trên in-app browser iOS cũ, và novelty effect. Guardrail lỗi thanh toán bị vi phạm. Tín hiệu tích cực ở khách mới là giả thuyết cho vòng test tiếp theo.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Sửa lỗi redirect trên in-app browser iOS cũ và chuyển ghi exposure sang server (tại thời điểm phân nhánh)',
              owner: 'Checkout engineering',
              metric: 'Tỷ trọng nhánh T theo exposure',
              threshold: '50% ± 0,3 điểm, SRM p > 0,01',
            },
            {
              action: 'Bật kiểm tra SRM tự động hằng ngày cho mọi test; SRM p < 0,001 thì khóa dashboard kết quả và báo owner',
              owner: 'Experimentation platform',
              metric: 'Thời gian phát hiện SRM',
              threshold: '≤ 1 ngày (lần này: phát hiện ở readout ngày 14)',
            },
            {
              action: 'Chạy lại test 21 ngày (3 chu kỳ tuần, đủ để novelty phai), đăng ký trước metric chính ITT và giả thuyết khách mới với ngưỡng hiệu chỉnh',
              owner: 'PM Checkout + Analyst',
              metric: 'Tỷ lệ đặt hàng thành công (ITT); khách mới là phân tích thứ cấp',
              threshold: 'Ship nếu CI 95% > 0 và guardrail lỗi thanh toán không tăng',
            },
            {
              action: 'Áp dụng quy tắc dừng: chỉ đọc kết quả ở cỡ mẫu đã định, hoặc dùng sequential testing nếu muốn dừng sớm',
              owner: 'Analytics lead',
              metric: 'Số test dừng sớm ngoài quy trình',
              threshold: '0 mỗi quý',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Ship dựa trên +3,2% sẽ đưa lỗi thanh toán ra 100% người dùng, đổi lấy một lợi ích có thể không tồn tại — và tệ hơn, dạy tổ chức rằng "thắng" nghĩa là nhìn dashboard đúng lúc. Quyết định không ship nhưng chạy lại có kiểm soát giữ được ý tưởng tốt (có tín hiệu ở khách mới), sửa lỗi gốc (exposure logging, SRM tự động) và chỉ tốn thêm khoảng 3 tuần. Trade-off được nói rõ: chậm hơn một chút, đổi lại là quyết định có thể bảo vệ được.',
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
              title: 'Dừng test khi p-value vừa "đẹp"',
              why: 'p-value dao động mạnh khi mẫu còn nhỏ. Xem mỗi ngày và dừng ở lần đầu p < 0,05 làm tỷ lệ dương tính giả tăng gấp nhiều lần mức 5%.',
              instead: 'Cố định cỡ mẫu và thời gian từ trước; muốn dừng sớm thì dùng sequential testing đã đăng ký.',
            },
            {
              title: 'Đọc metric trước khi kiểm tra SRM',
              why: 'Khi phân nhánh lệch, nhóm bị mất thường là nhóm có trải nghiệm đặc biệt (lỗi, chậm), nên mọi metric đều bị thiên lệch theo hướng không đoán trước được.',
              instead: 'SRM là bước đầu tiên của mọi readout; lệch thì chẩn đoán và phân tích theo log phân nhánh (ITT).',
            },
            {
              title: 'Tìm phân khúc thắng sau khi tổng thể không thắng',
              why: 'Cắt đủ nhiều lát, chắc chắn sẽ có một lát "significant" do ngẫu nhiên. Ship cho lát đó là ship nhiễu.',
              instead: 'Phân khúc ngoài kế hoạch chỉ tạo giả thuyết; hiệu chỉnh đa so sánh và xác nhận bằng test mới có đăng ký trước.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Readout bám kế hoạch đã đăng ký: metric chính, cỡ mẫu và thời gian cố định; nhìn sớm rồi dừng khi đẹp làm p-value mất ý nghĩa.',
    'Kiểm tra SRM trước mọi metric; khi lệch, chẩn đoán nguyên nhân và phân tích theo nhánh được phân (ITT).',
    'Quyết định dựa trên khoảng tin cậy so với MDE, độ bền theo thời gian (novelty) và guardrail; phân khúc ngoài kế hoạch chỉ là giả thuyết.',
  ],
  references: [
    {
      title: 'How Not To Run an A/B Test',
      publisher: 'Evan Miller',
      url: 'https://www.evanmiller.org/how-not-to-run-an-ab-test.html',
      note: 'Giải thích vì sao "peeking" và dừng test khi đạt significance làm tỷ lệ dương tính giả tăng mạnh.',
    },
    {
      title: 'Managing SRM',
      publisher: 'Statsig Docs',
      url: 'https://docs.statsig.com/experiments/monitoring/srm',
      note: 'Sample ratio mismatch là gì, cách kiểm tra bằng χ² và các nguyên nhân thường gặp khi phân nhánh lệch.',
    },
    {
      title: 'Trustworthy Online Controlled Experiments',
      publisher: 'Kohavi, Tang & Xu — experimentguide.com',
      url: 'https://experimentguide.com/',
      note: 'Sách nền tảng về thử nghiệm trực tuyến: SRM, guardrail, novelty effect và văn hóa ra quyết định bằng thử nghiệm.',
    },
  ],
}
