import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — thị trường căn hộ thành phố giả định "Thành phố H", Q2 vs Q3, đơn vị căn. Hấp thụ = số căn bán trong quý / số căn có thể bán (tồn đầu kỳ + mở bán mới).
 *   Phân khúc giá (căn hộ): thấp (< 2 tỷ) · trung (2–4 tỷ) · cao (> 4 tỷ)
 *   Q2: thấp tồn đầu 300 + mới 500 = 800 · bán 400 (50,0%) · tồn cuối 400 | trung 800 + 700 = 1.500 · bán 600 (40,0%) · tồn cuối 900 | cao 600 + 400 = 1.000 · bán 300 (30,0%) · tồn cuối 700
 *     Tổng Q2: tồn đầu 1.700 + mới 1.600 = 3.300 · bán 1.300 (39,4%) · tồn cuối 2.000
 *   Q3 (tồn đầu = tồn cuối Q2): thấp 400 + 600 = 1.000 · bán 520 (52,0%) · tồn cuối 480 | trung 900 + 800 = 1.700 · bán 510 (30,0%) · cuối 1.190 | cao 700 + 600 = 1.300 · bán 130 (10,0%) · cuối 1.170
 *     Tổng Q3: tồn đầu 2.000 + mới 2.000 = 4.000 · bán 1.160 (29,0%) · tồn cuối 2.840 · nguồn cung mới +25,0% (1.600 → 2.000) · bán −10,8% (1.300 → 1.160)
 *   Thay đổi bán: thấp +120 · trung −90 · cao −170 → −140 ✓
 *   Số tháng tồn kho = tồn cuối / (bán quý/3): thấp 480/173,3 = 2,8 · trung 1.190/170 = 7,0 · cao 1.170/43,3 = 27,0 · tổng 2.840/386,7 = 7,3 (Q2 tổng 2.000/433,3 = 4,6)
 *   Phân rã hấp thụ tổng 39,4% → 29,0%: giữ tỷ lệ Q2 theo cơ cấu Q3 = (1.000×50% + 1.700×40% + 1.300×30%)/4.000 = 1.570/4.000 = 39,25% → hiệu ứng cơ cấu −0,15 điểm · hiệu ứng tỷ lệ từng phân khúc −10,25 điểm (39,25 → 29,0)
 *   Bán trong Q3 theo nguồn: lô mới mở bán (bán/mới): thấp 330/600 (55,0%) · trung 210/800 (26,3%) · cao 40/600 (6,7%) · tồn cũ (bán/tồn đầu): thấp 190/400 (47,5%) · trung 300/900 (33,3%) · cao 90/700 (12,9%) → 330+190 = 520 · 210+300 = 510 · 40+90 = 130 ✓
 */
export const newSupplyVsAbsorptionRate: CaseStudy = {
  id: 'new-supply-vs-absorption-rate',
  title: 'Nguồn cung mới tăng 25%, hấp thụ giảm: ở phân khúc nào?',
  domain: 'real-estate',
  level: 'junior',
  minutes: 12,
  skills: ['liquidity', 'segmentation', 'metric-decomposition', 'mix-effect'],
  question:
    'Quý này căn hộ mở bán mới tăng 25% và tỷ lệ hấp thụ giảm từ 39,4% xuống 29,0%. Đây là thừa cung toàn thị trường, hay sự chậm lại tập trung ở vài phân khúc giá?',
  summary:
    'Tách hấp thụ theo phân khúc giá, phân rã thay đổi thành hiệu ứng cơ cấu và hiệu ứng tỷ lệ, tính số tháng tồn kho, và đặt giả thuyết cho phân khúc chậm.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng: thành phố, dự án và mọi con số đều là giả định để minh họa.* Ở **Thành phố H**, số căn hộ mở bán mới trong Q3 tăng từ 1.600 lên 2.000 căn (+25%), trong khi số căn bán được giảm từ 1.300 xuống 1.160. **Tỷ lệ hấp thụ** (số căn bán / số căn có thể bán trong quý) giảm từ 39,4% xuống 29,0%. Báo chí đang nói về "thừa cung". Một nhà đầu tư nhờ bạn đánh giá xem thị trường chậm lại ở đâu.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Căn mở bán mới', value: '2.000', delta: '+25,0%', tone: 'neutral', note: 'Q2: 1.600' },
            { label: 'Căn bán được', value: '1.160', delta: '−10,8%', tone: 'negative', note: 'Q2: 1.300' },
            { label: 'Hấp thụ', value: '29,0%', delta: '−10,4 điểm', tone: 'negative', note: 'Q2: 39,4%' },
            { label: 'Tồn kho cuối kỳ', value: '2.840', delta: '+840', tone: 'warning', note: 'Q2: 2.000' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi cần trả lời',
          md: 'Mức giảm hấp thụ là **toàn thị trường** hay **tập trung ở một số phân khúc**? Có phải do cơ cấu nguồn cung đổi (nhiều căn cao cấp hơn) hay do từng phân khúc bán chậm hơn thật?',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: cung, cầu hấp thụ và tồn kho',
      blocks: [
        {
          kind: 'formula',
          expression: 'Hấp thụ = Căn bán / (Tồn đầu kỳ + Mở bán mới)  ·  Số tháng tồn kho = Tồn cuối / (Căn bán mỗi tháng)',
          note: 'Hấp thụ cho biết **tốc độ**, số tháng tồn kho cho biết **gánh nặng còn lại**. Tách theo phân khúc để thấy chỗ chậm, và phân rã thay đổi tổng thành hiệu ứng cơ cấu (tỷ trọng cung giữa các phân khúc) và hiệu ứng tỷ lệ (hấp thụ từng phân khúc).',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Phân khúc** theo giá, tính hấp thụ và tồn kho từng phân khúc.',
            '**Phân rã** hiệu ứng cơ cấu so với hiệu ứng tỷ lệ.',
            '**Số tháng tồn kho** để xem gánh nặng còn lại.',
            '**Giả thuyết** cho phân khúc chậm và dữ liệu cần để kiểm tra; loại trừ cách giải thích khác.',
          ],
        },
        {
          kind: 'quiz',
          id: 'new-supply-vs-absorption-rate-q1',
          question: 'Báo chí kết luận "thừa cung nên hấp thụ giảm". Điều gì cần kiểm tra đầu tiên?',
          options: [
            {
              id: 'a',
              text: 'Tổng cung toàn thành phố so với dân số.',
              explain: 'Hữu ích cho tầm nhìn dài hạn nhưng không giải thích sự thay đổi giữa Q2 và Q3 hay phân khúc nào chậm.',
            },
            {
              id: 'b',
              text: 'Hấp thụ và tồn kho theo phân khúc giá, vì nguồn cung mới và cầu đều không đồng nhất.',
              correct: true,
              explain: 'Đúng. Nếu mức giảm tập trung ở vài phân khúc thì kết luận "thừa cung toàn thị trường" không đúng.',
            },
            {
              id: 'c',
              text: 'Giá bình quân toàn thị trường.',
              explain: 'Giá bình quân bị ảnh hưởng bởi cơ cấu căn bán, không trả lời vì sao hấp thụ giảm.',
            },
          ],
        },
      ],
    },
    {
      id: 'segment',
      kind: 'analysis',
      title: 'Bước 1 — Phân khúc: nơi nào thực sự chậm?',
      blocks: [
        {
          kind: 'table',
          title: 'Cung, bán và hấp thụ theo phân khúc giá (căn)',
          columns: [
            { key: 'seg', label: 'Phân khúc' },
            { key: 'new', label: 'Mở bán mới Q2 → Q3', align: 'right' },
            { key: 'sold', label: 'Bán Q2 → Q3', align: 'right' },
            { key: 'abs', label: 'Hấp thụ Q2 → Q3', align: 'right' },
            { key: 'end', label: 'Tồn cuối Q3', align: 'right' },
            { key: 'moi', label: 'Số tháng tồn kho Q3', align: 'right' },
          ],
          rows: [
            { seg: 'Thấp (< 2 tỷ)', new: '500 → 600', sold: '400 → 520', abs: '50,0% → 52,0%', end: 480, moi: '2,8' },
            { seg: 'Trung (2–4 tỷ)', new: '700 → 800', sold: '600 → 510', abs: '40,0% → 30,0%', end: '1.190', moi: '7,0' },
            { seg: 'Cao (> 4 tỷ)', new: '400 → 600', sold: '300 → 130', abs: '30,0% → 10,0%', end: '1.170', moi: '27,0' },
            { seg: 'Tổng', new: '1.600 → 2.000', sold: '1.300 → 1.160', abs: '39,4% → 29,0%', end: '2.840', moi: '7,3' },
          ],
          highlight: [{ row: 2, tone: 'negative' }, { row: 1, tone: 'warning' }],
          caption: 'Phân khúc thấp hấp thụ tốt hơn dù mở bán thêm 100 căn. Phân khúc cao chiếm 41% tồn kho cuối kỳ (1.170/2.840) và cần hơn 2 năm để bán hết ở tốc độ hiện tại.',
        },
        {
          kind: 'chart',
          title: 'Tỷ lệ hấp thụ theo phân khúc (%)',
          type: 'bar',
          xKey: 'seg',
          unit: '%',
          series: [
            { key: 'q2', label: 'Q2' },
            { key: 'q3', label: 'Q3' },
          ],
          data: [
            { seg: 'Thấp', q2: 50, q3: 52 },
            { seg: 'Trung', q2: 40, q3: 30 },
            { seg: 'Cao', q2: 30, q3: 10 },
          ],
          caption: 'Mức giảm chung là do phân khúc trung và cao; phân khúc thấp không giảm.',
        },
        {
          kind: 'quiz',
          id: 'new-supply-vs-absorption-rate-q2',
          question: 'Từ bảng, kết luận nào đúng?',
          options: [
            {
              id: 'a',
              text: 'Mọi phân khúc đều dư cung vì tồn kho tăng.',
              explain: 'Phân khúc thấp bán 52% số căn có thể bán và chỉ còn 2,8 tháng tồn kho, không thể coi là dư cung.',
            },
            {
              id: 'b',
              text: 'Sự chậm lại tập trung ở phân khúc trung và cao; phân khúc thấp vẫn hấp thụ tốt dù nguồn cung mới tăng.',
              correct: true,
              explain: 'Đúng. Nguồn cung mới tăng không tự động làm hấp thụ giảm; điều quan trọng là cầu ở từng phân khúc.',
            },
            {
              id: 'c',
              text: 'Phân khúc cao có hấp thụ giảm mạnh nhất nên là vấn đề duy nhất.',
              explain: 'Phân khúc trung cũng giảm 10 điểm và có 7,0 tháng tồn kho; cả hai đều cần theo dõi, mức nghiêm trọng khác nhau.',
            },
          ],
        },
      ],
    },
    {
      id: 'decompose',
      kind: 'analysis',
      title: 'Bước 2 — Cơ cấu hay tốc độ? Phân rã và giả thuyết',
      blocks: [
        {
          kind: 'table',
          title: 'Phân rã mức giảm hấp thụ 39,4% → 29,0%',
          columns: [
            { key: 'item', label: 'Thành phần' },
            { key: 'calc', label: 'Cách tính', align: 'right' },
            { key: 'val', label: 'Hấp thụ / tác động', align: 'right' },
          ],
          rows: [
            { item: 'Q2 thực tế', calc: '1.300 / 3.300', val: '39,4%' },
            { item: 'Q3 nếu giữ tỷ lệ Q2 theo cơ cấu cung Q3', calc: '(1.000×50% + 1.700×40% + 1.300×30%) / 4.000', val: '39,25% (cơ cấu −0,15 điểm)' },
            { item: 'Q3 thực tế', calc: '1.160 / 4.000', val: '29,0% (tỷ lệ từng phân khúc −10,25 điểm)' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Cơ cấu cung gần như không đổi hấp thụ (−0,15 điểm); 98% mức giảm là do từng phân khúc bán chậm hơn, chủ yếu trung và cao.',
        },
        {
          kind: 'table',
          title: 'Căn bán trong Q3: lô mới mở bán hay tồn kho cũ?',
          columns: [
            { key: 'seg', label: 'Phân khúc' },
            { key: 'newsold', label: 'Bán từ lô mới / lô mới', align: 'right' },
            { key: 'oldsold', label: 'Bán từ tồn cũ / tồn đầu', align: 'right' },
          ],
          rows: [
            { seg: 'Thấp', newsold: '330 / 600 (55,0%)', oldsold: '190 / 400 (47,5%)' },
            { seg: 'Trung', newsold: '210 / 800 (26,3%)', oldsold: '300 / 900 (33,3%)' },
            { seg: 'Cao', newsold: '40 / 600 (6,7%)', oldsold: '90 / 700 (12,9%)' },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: 'Ở phân khúc trung và cao, tồn cũ bán tốt hơn lô mới. Giả thuyết: lô mới định giá cao hơn tồn cũ hoặc người mua chọn căn sẵn nhà. Dữ liệu cần để kiểm tra: giá/m² của lô mới và tồn cũ, tiến độ bàn giao.',
        },
        {
          kind: 'table',
          title: 'Giả thuyết cho phân khúc trung và cao',
          columns: [
            { key: 'h', label: 'Giả thuyết' },
            { key: 'predict', label: 'Nếu đúng, ta sẽ thấy' },
            { key: 'test', label: 'Dữ liệu cần' },
          ],
          rows: [
            {
              h: 'H1. Thừa cung cục bộ ở phân khúc cao',
              predict: 'Tồn kho lớn so với tốc độ bán, hấp thụ thấp ở cả lô mới và tồn cũ',
              test: 'Số tháng tồn kho (27,0), nhu cầu theo thu nhập hộ mục tiêu; đã thấy ở cả hai nguồn',
            },
            {
              h: 'H2. Nhu cầu mua nhà chuyển sang phân khúc thấp (khả năng chi trả/lãi vay)',
              predict: 'Phân khúc thấp tăng hấp thụ trong khi trung/cao giảm; người mua vay nhiều hơn rút lui',
              test: 'Tỷ lệ mua bằng vay theo phân khúc, lãi suất vay mua nhà; hiện phân khúc thấp tăng 2 điểm',
            },
            {
              h: 'H3. Ghi nhận bán khác nhau (đặt cọc so với hợp đồng)',
              predict: 'Tỷ lệ hủy cọc tăng ở trung/cao, bán thực thấp hơn bán báo cáo',
              test: 'Tỷ lệ hủy cọc theo phân khúc; đối chiếu hợp đồng mua bán',
            },
          ],
          caption: 'H1 có bằng chứng trực tiếp; H2 và H3 cần thêm dữ liệu trước khi kết luận.',
        },
        {
          kind: 'quiz',
          id: 'new-supply-vs-absorption-rate-q3',
          question: 'Một chủ đầu tư dự kiến mở bán thêm 500 căn cao cấp trong Q4. Dữ liệu này ủng hộ khuyến nghị nào?',
          options: [
            {
              id: 'a',
              text: 'Mở bán đúng kế hoạch vì thị trường chung vẫn bán 1.160 căn mỗi quý.',
              explain: 'Con số tổng che việc phân khúc cao chỉ bán 130 căn mỗi quý với 1.170 căn tồn kho.',
            },
            {
              id: 'b',
              text: 'Cân nhắc hoãn hoặc giảm quy mô và chuyển cơ cấu về phân khúc có hấp thụ tốt, đồng thời kiểm tra giá và cọc ở phân khúc cao.',
              correct: true,
              explain: 'Đúng. 500 căn mới so với tốc độ bán 130 căn/quý cho 4 quý nữa; dữ liệu phân khúc ủng hộ điều chỉnh cơ cấu.',
            },
            {
              id: 'c',
              text: 'Giảm giá mạnh toàn bộ danh mục để kéo hấp thụ.',
              explain: 'Giảm giá đại trà có thể làm giảm doanh thu ở phân khúc đang bán tốt; cần xem phân khúc nào co giãn theo giá.',
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
          md: '**Kết luận:** Hấp thụ giảm 10,4 điểm **không phải do cơ cấu cung** (chỉ −0,15 điểm) mà do **phân khúc trung (40% → 30%) và cao (30% → 10%) bán chậm hơn**; phân khúc thấp vẫn hấp thụ tốt (52%). Tồn kho cao cấp 27 tháng là điểm cần xử lý. Không nên phát biểu "thừa cung toàn thị trường".',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Báo cáo hấp thụ, tồn kho và số tháng tồn kho theo phân khúc giá, tách lô mới và tồn cũ, hằng quý',
              owner: 'Nhóm nghiên cứu thị trường',
              metric: 'Hấp thụ từng phân khúc; số tháng tồn kho',
              threshold: 'Cảnh báo khi số tháng tồn kho > 12 hoặc hấp thụ giảm > 5 điểm so với quý trước',
            },
            {
              action: 'Với phân khúc cao: so giá/m² lô mới với tồn cũ, tỷ lệ hủy cọc; điều chỉnh kế hoạch mở bán',
              owner: 'Giám đốc kinh doanh dự án + Tài chính',
              metric: 'Số tháng tồn kho phân khúc cao; hủy cọc',
              threshold: 'Hoãn mở bán thêm khi tồn kho > 18 tháng; mục tiêu đưa xuống ≤ 15 tháng sau 3 quý',
            },
            {
              action: 'Theo dõi dịch chuyển cầu sang phân khúc thấp bằng cơ cấu người mua và tỷ lệ vay',
              owner: 'Nhóm nghiên cứu thị trường',
              metric: 'Tỷ trọng căn bán theo phân khúc; tỷ lệ mua có vay',
              threshold: 'Cập nhật hằng quý; xem xét lại cơ cấu sản phẩm khi phân khúc thấp > 45% số căn bán (hiện 44,8%)',
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
              title: 'Nhìn hấp thụ toàn thị trường',
              why: 'Giá khác nhau là sản phẩm khác nhau; chỉ số gộp che phân khúc bán rất tốt lẫn phân khúc kẹt.',
              instead: 'Tách theo phân khúc giá (và vị trí, loại hình), rồi phân rã cơ cấu so với tỷ lệ.',
            },
            {
              title: 'Mặc định nguồn cung mới tăng thì hấp thụ giảm',
              why: 'Phân khúc thấp vẫn tăng hấp thụ khi cung mới tăng 20%; hấp thụ phụ thuộc cầu theo từng phân khúc.',
              instead: 'Kiểm tra từng phân khúc và xem cung có phù hợp cầu mục tiêu không.',
            },
            {
              title: 'Chỉ nhìn tỷ lệ mà không nhìn quy mô tồn kho',
              why: 'Hấp thụ 10% của 1.300 căn là gánh nặng khác hẳn 52% của 1.000 căn; số tháng tồn kho cho thấy mức độ.',
              instead: 'Đi kèm số tháng tồn kho và xu hướng nhiều quý.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Hấp thụ phải đi cùng phân khúc và số tháng tồn kho; chỉ số toàn thị trường có thể che sự phân hóa lớn.',
    'Phân rã thay đổi thành hiệu ứng cơ cấu và hiệu ứng tỷ lệ để biết là cơ cấu cung đổi hay từng phân khúc bán chậm hơn.',
    'Nguồn cung mới tăng không tự động làm hấp thụ giảm; cần đặt giả thuyết về cầu từng phân khúc và kiểm tra bằng dữ liệu.',
  ],
  references: [
    {
      title: 'Real estate economics',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Real_estate_economics',
      note: 'Tổng quan kinh tế bất động sản, có mục về cung nhà ở và các yếu tố ảnh hưởng đến cung cầu.',
    },
    {
      title: 'Residential property prices - overview',
      publisher: 'Bank for International Settlements (BIS)',
      url: 'https://www.bis.org/statistics/pp.htm',
      note: 'Trang tổng quan "Residential property prices" trên cổng dữ liệu BIS, điểm vào bộ dữ liệu giá nhà ở của nhiều nước để đối chiếu.',
    },
    {
      title: 'Housing market',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Housing_market',
      note: 'Trang tổng quan về thị trường nhà ở, dùng để đối chiếu các khái niệm cung, cầu và giao dịch.',
    },
  ],
}
