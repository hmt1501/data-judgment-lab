import type { CaseStudy } from '../types'

/*
 * MÔ PHỎNG — tin rao bán căn hộ ở một thành phố vệ tinh giả định (không phải địa bàn thật).
 * Quan sát 6 tháng (T1–T6), mỗi cohort đăng ~1.000 tin duy nhất; thời điểm cắt dữ liệu = cuối T6.
 * Mô hình sinh số: tốc độ bán và tốc độ hết hạn/gỡ không đổi theo ngày trong từng cohort (cạnh tranh rủi ro);
 *   bán chậm dần, gỡ nhiều dần từ T1 đến T6. Các số % dưới đây là kết quả làm tròn của mô hình đó.
 *
 * Tuổi quan sát tối thiểu tại thời điểm cắt: T1 ≥150 ngày · T2 ≥120 · T3 ≥90 · T4 ≥60 · T5 ≥30 · T6 <30.
 *   Bán ≤30 ngày: 23 · 21 · 19 · 17 · 15 · (chưa đủ)
 *   Bán ≤60 ngày: 38 · 35 · 32 · 29 · (chưa đủ)   (T1 38,5% → làm tròn 38; T4 28,8% → 29)
 *   Bán ≤90 ngày: 50 · 46 · 42 · (chưa đủ)         (T1 49,5%)
 *   Hết hạn/gỡ ≤60 ngày: 13 · 15 · 17 · 20
 *   Cohort T1 sau 150 ngày: đã bán ~63%, hết hạn/gỡ ~21%, còn rao ~16% (63 + 21 + 16 = 100).
 * KPI dashboard (số đưa ra trong tình huống): trung vị ngày từ đăng đến khi tin đóng (bán hoặc gỡ)
 *   trong tháng: 38 ngày (T1) → 46 ngày (T6), +21% (46 ÷ 38 = 1,21).
 * Khảo sát mẫu 100 tin hết hạn/gỡ: 41 đã bán nơi khác · 33 chủ đổi ý/chuyển sang cho thuê · 26 chưa rõ (41 + 33 + 26 = 100).
 *   Độ nhạy: nếu 41% tin gỡ thật ra đã bán → bán ≤60 ngày điều chỉnh: T1 38 + 0,41 × 13 ≈ 43; T4 29 + 0,41 × 20 ≈ 37.
 * Phân khúc giá, cohort T1 vs T4, tỷ lệ bán ≤60 ngày (tỷ trọng tin · % bán):
 *   Dưới 2 tỷ: 40% · 49% → 25% · 46% | 2–4 tỷ: 40% · 36% → 45% · 31% | Trên 4 tỷ: 20% · 22% → 30% · 12%
 *   T1: 0,40×49 + 0,40×36 + 0,20×22 = 19,6 + 14,4 + 4,4 = 38,4 ≈ 38
 *   T4: 0,25×46 + 0,45×31 + 0,30×12 = 11,5 + 13,95 + 3,6 = 29,05 ≈ 29
 *   Giữ cơ cấu T1, tỷ lệ T4: 0,40×46 + 0,40×31 + 0,20×12 = 18,4 + 12,4 + 2,4 = 33,2 → tỷ lệ −5,2 điểm, cơ cấu −4,15 điểm
 *   Giữ cơ cấu T4, tỷ lệ T1: 0,25×49 + 0,45×36 + 0,30×22 = 12,25 + 16,2 + 6,6 = 35,05 → cơ cấu −3,35 điểm, tỷ lệ −6,0 điểm
 *   Tổng −9,35 điểm (38,4 → 29,05): cơ cấu 3,4–4,2 điểm, tỷ lệ trong từng phân khúc 5,2–6,0 điểm.
 */
export const listingDaysOnMarket: CaseStudy = {
  id: 'listing-days-on-market',
  title: 'Thời gian rao bán kéo dài: bán chậm thật hay chỉ là tin hết hạn?',
  domain: 'real-estate',
  level: 'junior',
  minutes: 11,
  skills: ['liquidity', 'cohort', 'segmentation'],
  question:
    'Dashboard báo thời gian một tin nằm trên sàn (days on market) tăng 21% trong 6 tháng. Thị trường thật sự bán chậm đến đâu, và nên đo thanh khoản bằng chỉ số nào khi nhiều tin chưa bán hoặc bị gỡ?',
  summary:
    'Xử lý tin chưa bán (censoring), nhìn theo cohort ngày đăng, tách bán thật với hết hạn/gỡ và phân rã theo phân khúc giá để biết bán chậm bao nhiêu và vì sao.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng.* Bạn là analyst của một sàn tin rao bán căn hộ. Trưởng nhóm sản phẩm thấy trên dashboard chỉ số **DOM** (số ngày từ lúc đăng đến lúc tin đóng) tăng liên tục và hỏi: *"Thị trường chậm lại hay tụi mình có vấn đề dữ liệu? Có cần giảm phí đăng tin không?"* Chỉ số được tính từ các tin **đã đóng** trong tháng, gồm cả tin bán lẫn tin hết hạn hoặc gỡ.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Trung vị DOM (tin đóng trong tháng)', value: '46 ngày', delta: '+21% so với T1 (38 ngày)', tone: 'warning' },
            { label: 'Cohort đăng T1', value: '~1.000 tin', note: 'Quan sát ≥150 ngày' },
            { label: 'Cohort đăng T6', value: '~1.000 tin', note: 'Mới <30 ngày, chưa đủ thời gian' },
            { label: 'Lý do đóng tin', value: 'Gộp chung', note: 'Bán, hết hạn, gỡ cùng một nhóm "đóng"' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu của bản phân tích',
          md: 'Trả lời: **DOM đang đo cái gì**, **tin chưa kết thúc ảnh hưởng thế nào đến chỉ số**, **bán thật chậm đến đâu** theo từng cohort và phân khúc, và **chỉ số nào nên thay DOM** trong dashboard.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: mỗi tin có một kết cục, và nhiều tin chưa có',
      blocks: [
        {
          kind: 'formula',
          expression: 'DOM chỉ xác định khi tin kết thúc: Bán · Hết hạn/gỡ · Vẫn đang rao (chưa biết)',
          note: 'Tin đang rao có DOM **lớn hơn** số ngày đã đếm nhưng chưa biết lớn hơn bao nhiêu. Thống kê gọi đây là dữ liệu bị **kiểm duyệt phải** (right-censored). Bỏ chúng đi, hoặc coi chúng như đã đóng, đều làm sai ước lượng.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Chia theo cohort ngày đăng**: các tin đăng cùng tháng, theo dõi cùng một thang tuổi tin (30, 60, 90 ngày).',
            '**Tách kết cục**: bán thật, hết hạn/gỡ, vẫn đang rao. Chỉ bán thật mới là thanh khoản.',
            '**Dùng chỉ số theo ngưỡng**: % bán trong N ngày, so cohort cùng tuổi. Chỉ so các cohort đã đủ N ngày quan sát.',
            '**Phân rã theo phân khúc**: tách phần đổi do cơ cấu tin khỏi phần đổi do tốc độ bán trong từng nhóm.',
          ],
        },
        {
          kind: 'quiz',
          id: 'listing-days-on-market-q1',
          question: 'Vì sao trung vị DOM tính trên các tin đã đóng trong tháng thường *đánh giá thấp* mức bán chậm lại khi thị trường vừa nguội đi?',
          options: [
            {
              id: 'a',
              text: 'Vì chỉ những tin đã đóng được tính, trong khi các tin bán chậm vẫn đang rao nên chưa lọt vào chỉ số.',
              correct: true,
              explain:
                'Đúng. Những tin bán chậm nhất chưa kết thúc nên bị bỏ khỏi mẫu (thiên lệch người sống sót). Chỉ số chỉ phản ánh phần bán nhanh, nên chậm hơn thật sự mới hiện ra dần sau vài tháng khi các tin đó đóng nốt.',
            },
            {
              id: 'b',
              text: 'Vì DOM luôn bị làm tròn xuống theo tuần.',
              explain: 'Làm tròn chỉ gây sai số nhỏ, không tạo ra sai lệch có hướng và có hệ thống như việc bỏ tin chưa đóng.',
            },
            {
              id: 'c',
              text: 'Vì tin hết hạn luôn có DOM nhỏ hơn tin bán.',
              explain: 'Không có quy luật như vậy; nhiều sàn tự hết hạn tin ở mốc cố định (ví dụ 60 ngày), làm DOM của tin hết hạn tập trung ở mốc đó chứ không nhỏ hơn.',
            },
          ],
        },
      ],
    },
    {
      id: 'cohort',
      kind: 'analysis',
      title: 'Bước 1 — Cohort ngày đăng: bán chậm thật, nhưng cohort mới chưa nói được gì',
      blocks: [
        {
          kind: 'text',
          md: 'Với mỗi cohort đăng, đếm tỷ lệ tin **đã bán** sau 30, 60, 90 ngày. Ô nào chưa đủ tuổi quan sát được để trống (—) chứ không điền 0 hay số ước đoán: cohort T6 mới đăng dưới 30 ngày thì chưa thể có số liệu 60 ngày.',
        },
        {
          kind: 'table',
          title: 'Tỷ lệ tin đã bán theo cohort đăng và tuổi tin (% số tin của cohort)',
          columns: [
            { key: 'cohort', label: 'Cohort đăng' },
            { key: 'obs', label: 'Quan sát tối thiểu', align: 'right' },
            { key: 'd30', label: 'Bán ≤30 ngày', align: 'right' },
            { key: 'd60', label: 'Bán ≤60 ngày', align: 'right' },
            { key: 'd90', label: 'Bán ≤90 ngày', align: 'right' },
          ],
          rows: [
            { cohort: 'T1', obs: '150 ngày', d30: '23%', d60: '38%', d90: '50%' },
            { cohort: 'T2', obs: '120 ngày', d30: '21%', d60: '35%', d90: '46%' },
            { cohort: 'T3', obs: '90 ngày', d30: '19%', d60: '32%', d90: '42%' },
            { cohort: 'T4', obs: '60 ngày', d30: '17%', d60: '29%', d90: '—' },
            { cohort: 'T5', obs: '30 ngày', d30: '15%', d60: '—', d90: '—' },
            { cohort: 'T6', obs: '<30 ngày', d30: '—', d60: '—', d90: '—' },
          ],
          highlight: [
            { row: 0, tone: 'positive' },
            { row: 3, tone: 'negative' },
          ],
          caption:
            'Đọc theo cột, không đọc chéo: ở tuổi 60 ngày, tỷ lệ bán giảm đều 38% → 35% → 32% → 29%. Ngay cả cohort T1 sau 150 ngày vẫn còn khoảng 16% tin đang rao; chưa tin nào trong số đó có DOM xác định được.',
        },
        {
          kind: 'chart',
          title: 'Tỷ lệ tin đã bán sau 30 và 60 ngày, theo cohort đăng',
          type: 'line',
          xKey: 'age',
          unit: '%',
          series: [
            { key: 't1', label: 'Cohort T1' },
            { key: 't2', label: 'Cohort T2' },
            { key: 't3', label: 'Cohort T3' },
            { key: 't4', label: 'Cohort T4' },
          ],
          data: [
            { age: '30 ngày', t1: 23, t2: 21, t3: 19, t4: 17 },
            { age: '60 ngày', t1: 38, t2: 35, t3: 32, t4: 29 },
          ],
          caption: 'Các đường xếp tầng và không cắt nhau: cohort đăng càng muộn càng bán chậm ở cùng tuổi tin. Chỉ vẽ các cohort đã đủ 60 ngày quan sát.',
        },
        {
          kind: 'quiz',
          id: 'listing-days-on-market-q2',
          question: 'Cohort T5 và T6 cho thấy DOM "ngắn" (tin đăng mới, đóng sớm). Có nên kết luận cohort mới bán nhanh hơn?',
          options: [
            {
              id: 'a',
              text: 'Có, vì DOM của chúng thấp hơn các cohort cũ.',
              explain:
                'DOM của cohort mới thấp một cách cơ học vì cửa sổ quan sát ngắn: tin chỉ có thể đóng trong vài chục ngày đầu. So sánh như vậy là so các cửa sổ không bằng nhau.',
            },
            {
              id: 'b',
              text: 'Không; chỉ so các cohort ở cùng tuổi tin đã quan sát đủ, và bỏ trống ô chưa đủ thời gian.',
              correct: true,
              explain:
                'Đúng. Ở tuổi 30 ngày, T5 bán 15% là thấp nhất chuỗi (23% → 21% → 19% → 17% → 15%), cho thấy cohort mới không hề nhanh hơn. Cùng tuổi, cùng cửa sổ mới so sánh được.',
            },
            {
              id: 'c',
              text: 'Không; cần loại bỏ cohort mới khỏi dashboard vĩnh viễn.',
              explain: 'Cohort mới vẫn dùng được cho các mốc ngắn (30 ngày); chỉ cần ngừng so sánh chúng ở các mốc dài hơn tuổi quan sát.',
            },
          ],
        },
      ],
    },
    {
      id: 'sold-vs-closed',
      kind: 'analysis',
      title: 'Bước 2 — Tách bán thật khỏi hết hạn/gỡ',
      blocks: [
        {
          kind: 'text',
          md: 'Dashboard gộp mọi tin đóng. Nhưng một tin "đóng" có thể là đã bán, hết hạn tự động, hoặc chủ gỡ. Tỷ lệ hết hạn/gỡ trong 60 ngày tăng từ **13% lên 20%** qua T1–T4: một phần chỉ số DOM chung tăng là do tin bị gỡ nhiều hơn, chứ không phải tin bán chậm hơn.',
        },
        {
          kind: 'table',
          title: 'Khảo sát mẫu 100 tin hết hạn/gỡ (gọi lại chủ tin)',
          columns: [
            { key: 'reason', label: 'Lý do gỡ tin' },
            { key: 'count', label: 'Số tin', align: 'right' },
            { key: 'meaning', label: 'Hàm ý với thanh khoản' },
          ],
          rows: [
            { reason: 'Đã bán ở nơi khác (đối tác, giới thiệu)', count: '41', meaning: 'Là bán thật nhưng sàn không thấy' },
            { reason: 'Chủ đổi ý / chuyển sang cho thuê', count: '33', meaning: 'Không phải bán, cung rút khỏi thị trường' },
            { reason: 'Chưa rõ / không liên lạc được', count: '26', meaning: 'Chưa biết, giữ ở trạng thái chưa xác định' },
          ],
          caption:
            'Độ nhạy: nếu cộng 41% tin gỡ vào nhóm đã bán, tỷ lệ bán ≤60 ngày điều chỉnh từ 38% lên ≈43% ở cohort T1 (38 + 0,41 × 13) và từ 29% lên ≈37% ở cohort T4 (29 + 0,41 × 20). Xu hướng giảm vẫn còn nhưng nhỏ hơn: từ ≈43% xuống ≈37%.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Kết cục chưa rõ là một cận, không phải một số',
          md: 'Cận dưới của tỷ lệ bán là số bán quan sát được; cận trên là bán + toàn bộ tin gỡ. Báo cáo cả hai (hoặc mức giữa có khảo sát) thay vì chọn con số đẹp nhất, và nêu rõ cỡ mẫu 100 tin khiến mức 41% còn sai số khá lớn (cỡ ±10 điểm %).',
        },
        {
          kind: 'quiz',
          id: 'listing-days-on-market-q3',
          question: 'Để theo dõi thanh khoản dài hạn, bộ chỉ số nào hợp lý nhất?',
          options: [
            {
              id: 'a',
              text: 'Trung vị DOM của mọi tin đóng trong tháng, như hiện nay.',
              explain:
                'Chỉ số này gộp bán với hết hạn/gỡ, bỏ các tin chưa đóng, và đổi theo chính sách hết hạn của sàn. Nó khó đọc và dễ bị hiểu sai.',
            },
            {
              id: 'b',
              text: 'Tỷ lệ bán ≤30/60/90 ngày theo cohort đăng, tỷ lệ hết hạn/gỡ riêng, và tỷ lệ còn rao, mỗi chỉ số chỉ tính cohort đã đủ tuổi.',
              correct: true,
              explain:
                'Đúng. Mỗi chỉ số có mẫu số rõ ràng (số tin của cohort), tách được bán với gỡ, và xử lý đúng tin chưa kết thúc bằng cách ghi nhận tuổi quan sát thay vì bỏ chúng.',
            },
            {
              id: 'c',
              text: 'Số lượng tin đăng mới mỗi tháng.',
              explain: 'Số tin đăng mới đo cung đổ vào sàn, không đo tốc độ bán. Nhiều tin hơn cũng có thể là tồn kho tăng vì bán chậm.',
            },
          ],
        },
      ],
    },
    {
      id: 'segments',
      kind: 'analysis',
      title: 'Bước 3 — Phân khúc giá: cơ cấu hay tốc độ bán?',
      blocks: [
        {
          kind: 'text',
          md: 'Tỷ lệ bán ≤60 ngày giảm từ 38% (T1) xuống 29% (T4), tức **−9,35 điểm %**. Câu hỏi tiếp theo: giảm vì cohort sau có nhiều căn đắt (vốn bán chậm) hay vì ngay trong từng phân khúc bán đã chậm lại?',
        },
        {
          kind: 'table',
          title: 'Bán ≤60 ngày theo phân khúc giá (tỷ trọng tin · % bán)',
          columns: [
            { key: 'seg', label: 'Phân khúc' },
            { key: 't1', label: 'Cohort T1', align: 'right' },
            { key: 't4', label: 'Cohort T4', align: 'right' },
            { key: 'delta', label: 'Đổi tỷ lệ bán', align: 'right' },
          ],
          rows: [
            { seg: 'Dưới 2 tỷ', t1: '40% · 49%', t4: '25% · 46%', delta: '−3 điểm' },
            { seg: '2–4 tỷ', t1: '40% · 36%', t4: '45% · 31%', delta: '−5 điểm' },
            { seg: 'Trên 4 tỷ', t1: '20% · 22%', t4: '30% · 12%', delta: '−10 điểm' },
            { seg: 'Toàn bộ', t1: '38,4%', t4: '29,05%', delta: '−9,35 điểm' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption:
            'Phân rã: nếu giữ cơ cấu T1 mà dùng tỷ lệ bán T4 thì ra 33,2% (cơ cấu −4,15, tỷ lệ −5,2 điểm); nếu giữ cơ cấu T4 mà dùng tỷ lệ T1 thì ra 35,05% (cơ cấu −3,35, tỷ lệ −6,0 điểm). Kết quả bền với thứ tự phân rã: **khoảng 3,4–4,2 điểm do cơ cấu dịch lên phân khúc đắt, 5,2–6,0 điểm do bán chậm lại trong chính từng phân khúc**.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Phân khúc **trên 4 tỷ** vừa tăng tỷ trọng (20% → 30%) vừa bán chậm nhất (22% → 12%), nên nó là nơi cần xem trước. Cùng cách này áp dụng cho khu vực, dự án hoặc nhóm môi giới. Lưu ý mỗi ô cần đủ số tin (ví dụ ≥ 100 tin mỗi cohort × phân khúc) trước khi diễn giải, kẻo nhiễu mẫu nhỏ bị đọc thành xu hướng.',
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
          md: '**Kết luận cho trưởng nhóm sản phẩm:** Thị trường bán chậm lại thật: tỷ lệ bán trong 60 ngày giảm từ 38% xuống 29% giữa cohort T1 và T4, và vẫn giảm khoảng 6 điểm (≈43% → ≈37%) ngay cả khi coi 41% tin gỡ là đã bán. Chỉ số DOM chung (+21%) **vừa gộp bán với gỡ, vừa bỏ các tin chưa đóng**, nên không đo đúng quy mô. Khoảng 40% mức giảm do cơ cấu dịch lên phân khúc trên 4 tỷ, phần còn lại do bán chậm lại trong từng phân khúc. Chưa có căn cứ để giảm phí đăng tin: phí không phải nguyên nhân bán chậm.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Thay trung vị DOM chung bằng bộ chỉ số cohort: % bán ≤30/60/90 ngày, % hết hạn/gỡ, % còn rao; chỉ hiển thị ô đã đủ tuổi quan sát',
              owner: 'Analytics',
              metric: 'Số chỉ số thanh khoản trên dashboard có mẫu số cohort rõ ràng',
              threshold: '100% chỉ số thanh khoản; không còn ô điền 0 cho cohort chưa đủ tuổi',
            },
            {
              action: 'Ghi nhận lý do đóng tin (bán trên sàn, đã bán nơi khác, đổi ý, hết hạn tự động) bằng trường bắt buộc khi gỡ và khảo sát mẫu hằng tháng',
              owner: 'Sản phẩm + vận hành',
              metric: 'Tỷ lệ tin đóng có lý do xác định',
              threshold: '≥ 80% trong 2 quý',
            },
            {
              action: 'Báo cáo thanh khoản theo phân khúc giá và khu vực kèm cỡ mẫu; cảnh báo khi một phân khúc tăng tỷ trọng mà giảm tỷ lệ bán',
              owner: 'Analytics',
              metric: 'Tỷ lệ bán ≤60 ngày theo phân khúc × cohort',
              threshold: 'Cảnh báo khi giảm > 5 điểm % qua 2 cohort liên tiếp và n ≥ 100',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Cách đo theo cohort xử lý tận gốc ba vấn đề cùng lúc: tin chưa kết thúc (không bị bỏ, chỉ bị ghi "chưa đủ tuổi"), gộp kết cục (bán và gỡ có chỉ số riêng), và trộn cơ cấu (phân rã theo phân khúc). Nhờ vậy dashboard không còn đổi chỉ vì chính sách hết hạn hay vì cửa sổ quan sát ngắn.',
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
              title: 'Chỉ tính DOM trên tin đã bán',
              why: 'Những tin bán chậm nhất vẫn đang rao nên bị bỏ khỏi mẫu; DOM nhìn ngắn hơn thực tế và tự tăng dần khi thị trường nguội, làm bạn phản ứng muộn.',
              instead: 'Coi tin đang rao là dữ liệu bị kiểm duyệt: dùng tỷ lệ bán theo ngưỡng ngày trên cohort đã đủ tuổi, hoặc ước lượng sống sót kiểu Kaplan–Meier.',
            },
            {
              title: 'Coi mọi tin đóng là bán',
              why: 'Tin hết hạn tự động hay bị gỡ không phải thanh khoản. Gộp chúng làm DOM phụ thuộc vào chính sách hết hạn của sàn và hành vi chủ tin, không phải thị trường.',
              instead: 'Tách kết cục thành bán, hết hạn/gỡ, đang rao; khảo sát mẫu để biết bao nhiêu tin gỡ thật ra đã bán.',
            },
            {
              title: 'So cohort mới với cohort cũ ở cửa sổ không bằng nhau',
              why: 'Cohort đăng gần đây chỉ có vài chục ngày để đóng nên DOM trông ngắn một cách cơ học. Đọc đó là cohort mới bán nhanh hơn là kết luận ngược.',
              instead: 'So các cohort ở cùng tuổi tin, bỏ trống ô chưa đủ quan sát, và phân rã theo phân khúc trước khi nói thị trường nhanh hay chậm.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'DOM chỉ xác định cho tin đã kết thúc; tin đang rao là dữ liệu bị kiểm duyệt, nên dùng tỷ lệ bán theo ngưỡng ngày trên cohort đã đủ tuổi quan sát.',
    'Thanh khoản thật là bán thật: tách bán, hết hạn/gỡ, đang rao, và dùng khảo sát mẫu để biết tin gỡ thuộc loại nào.',
    'Nhìn theo cohort ngày đăng và phân rã theo phân khúc để tách phần do cơ cấu tin khỏi phần do tốc độ bán chậm lại thật.',
  ],
  references: [
    {
      title: 'Censoring (statistics)',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Censoring_(statistics)',
      note: 'Định nghĩa dữ liệu bị kiểm duyệt phải (right-censoring) và vì sao bỏ hoặc coi như đã kết thúc sẽ làm lệch ước lượng thời gian.',
    },
    {
      title: 'Kaplan–Meier estimator',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Kaplan%E2%80%93Meier_estimator',
      note: 'Phương pháp ước lượng hàm sống sót từ dữ liệu có kiểm duyệt, nền tảng để tính tỷ lệ chưa bán theo tuổi tin.',
    },
    {
      title: 'Data Center Metrics Definitions',
      publisher: 'Redfin',
      url: 'https://www.redfin.com/news/data-center-metrics-definitions/',
      note: 'Định nghĩa Median Days on Market của Redfin chỉ tính nhà đã ký hợp đồng, minh họa việc chỉ số DOM phổ biến bỏ qua tin chưa kết thúc.',
    },
  ],
}
