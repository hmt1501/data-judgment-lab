import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — Cửa hàng online A (hư cấu), T3 vs T4, đơn vị nghìn đồng/đơn (AOV) và triệu đồng (doanh thu). Đã kiểm tra khớp:
 *   T3: khách mới 6.000 đơn × 300 = 1.800 tr · khách cũ 4.000 × 450 = 1.800 tr · tổng 10.000 đơn, 3.600 tr, AOV 360
 *   T4: khách mới 4.000 × 295 = 1.180 tr · khách cũ 6.000 × 445 = 2.670 tr · tổng 10.000 đơn, 3.850 tr, AOV 385 (+25 = +6,9%)
 *   Phân rã: hiệu ứng mix = (−0,2)×300 + (+0,2)×450 = +30 · hiệu ứng AOV trong nhóm = 0,4×(−5) + 0,6×(−5) = −5 · tổng +25 ✓
 *   AOV khách mới 300 → 295 (−1,7%) · khách cũ 450 → 445 (−1,1%) · tỷ trọng đơn khách mới 60% → 40%
 *   Số món/đơn: mới 2,0 → 2,0 · cũ 2,5 → 2,5 · giá TB/món: mới 150 → 147,5 · cũ 180 → 178 (2,0×147,5 = 295; 2,5×178 = 445)
 *   Chi tiêu quảng cáo thu hút khách mới: 520 → 310 tr (−40,4%) · chi phí/đơn khách mới 520/6.000 = 86,7 nghìn → 310/4.000 = 77,5 nghìn
 *   Chuỗi AOV (nghìn đ) T1–T4 mới 298/302/300/295 · cũ 452/448/450/445 · gộp (tỷ trọng mới 60/60/60/40) 359,6/360,4/360/385
 */
export const newVsReturningAovSegmentation: CaseStudy = {
  id: 'new-vs-returning-aov-segmentation',
  title: 'AOV tăng 6,9% nhưng khách nào cũng chi ít hơn',
  domain: 'ecommerce',
  level: 'junior',
  minutes: 11,
  skills: ['segmentation', 'mix-effect', 'metric-decomposition'],
  question:
    'Giá trị đơn trung bình (AOV) tháng 4 tăng 6,9% dù không có thay đổi giá. Đây là hành vi mua tốt lên, hay chỉ là tỷ trọng khách mới và khách cũ thay đổi?',
  summary:
    'Tách AOV theo khách mới và khách cũ, phân rã thành hiệu ứng mix và hiệu ứng trong từng nhóm, đặt giả thuyết về nguyên nhân thay đổi tỷ trọng và loại trừ giả thuyết "tăng giá".',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng: cửa hàng và mọi con số đều là giả định để minh họa.* **Cửa hàng online A** bán đồ gia dụng, mỗi tháng khoảng 10.000 đơn. Báo cáo tháng 4 có tin vui: **AOV tăng từ 360 lên 385 nghìn đồng (+6,9%)** và doanh thu tăng từ 3.600 lên 3.850 triệu đồng với số đơn không đổi. Trưởng nhóm marketing muốn ghi nhận đây là kết quả của chương trình "gợi ý mua kèm". Bạn được yêu cầu kiểm tra trước khi đưa vào báo cáo quý.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Số đơn', value: '10.000', delta: '0%', tone: 'neutral', note: 'T3: 10.000' },
            { label: 'AOV', value: '385 nghìn đ', delta: '+6,9%', tone: 'positive', note: 'T3: 360 nghìn' },
            { label: 'Doanh thu', value: '3.850 tr đ', delta: '+250 tr', tone: 'positive', note: 'T3: 3.600 triệu' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi cần trả lời',
          md: 'AOV là một **trung bình có trọng số** của nhiều nhóm khách. Nó có thể tăng mà không nhóm nào chi nhiều hơn. Câu hỏi: **mức tăng 25 nghìn đến từ hành vi trong từng nhóm hay từ việc đổi tỷ trọng giữa các nhóm?**',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: AOV = tỷ trọng × AOV từng nhóm',
      blocks: [
        {
          kind: 'formula',
          expression: 'AOV = Σ (tỷ trọng đơn của nhóm i × AOV của nhóm i)',
          note: 'Thay đổi AOV = **hiệu ứng mix** (tỷ trọng đổi, AOV nhóm giữ kỳ trước) + **hiệu ứng trong nhóm** (AOV từng nhóm đổi, tỷ trọng kỳ này). Hai hiệu ứng cộng lại đúng bằng mức thay đổi tổng.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Phân khúc** đơn theo khách mới / khách cũ (định nghĩa theo đơn đầu tiên trong lịch sử, không theo tháng).',
            '**Phân rã** thay đổi AOV thành mix và trong nhóm.',
            '**Đặt giả thuyết** cho nguyên nhân tỷ trọng thay đổi và nêu dữ liệu cần để kiểm tra.',
            '**Loại trừ** cách giải thích khác: giá bán tăng, số món/đơn tăng.',
          ],
        },
        {
          kind: 'quiz',
          id: 'new-vs-returning-aov-segmentation-q1',
          question: 'AOV toàn shop tăng 6,9%. Việc nên làm đầu tiên trước khi ghi nhận công lao cho "gợi ý mua kèm"?',
          options: [
            {
              id: 'a',
              text: 'Hỏi nhóm sản phẩm xem chương trình đã chạy bao nhiêu lượt hiển thị.',
              explain: 'Số lượt hiển thị là đầu vào, không phải bằng chứng đơn hàng đổi. Cần xem AOV có tăng thật trong từng nhóm khách hay không.',
            },
            {
              id: 'b',
              text: 'Tách AOV theo khách mới / khách cũ và kiểm tra tỷ trọng đơn của hai nhóm giữa hai tháng.',
              correct: true,
              explain: 'Đúng. Trung bình gộp có thể bị kéo bởi tỷ trọng; phân khúc là cách nhanh nhất để thấy điều đó.',
            },
            {
              id: 'c',
              text: 'Chạy kiểm định thống kê trên 20.000 đơn để xem tăng 6,9% có ý nghĩa không.',
              explain: 'Với 10.000 đơn mỗi tháng, chênh lệch gần như chắc chắn "có ý nghĩa". Câu hỏi là nó đến từ đâu, không phải có xảy ra hay không.',
            },
          ],
        },
      ],
    },
    {
      id: 'segment',
      kind: 'analysis',
      title: 'Bước 1 — Phân khúc: không nhóm nào chi nhiều hơn',
      blocks: [
        {
          kind: 'table',
          title: 'Đơn hàng và AOV theo nhóm khách (T3 → T4)',
          columns: [
            { key: 'seg', label: 'Nhóm' },
            { key: 'orders', label: 'Số đơn T3 → T4', align: 'right' },
            { key: 'share', label: 'Tỷ trọng đơn', align: 'right' },
            { key: 'aov', label: 'AOV (nghìn đ)', align: 'right' },
            { key: 'rev', label: 'Doanh thu (tr đ)', align: 'right' },
          ],
          rows: [
            { seg: 'Khách mới', orders: '6.000 → 4.000', share: '60% → 40%', aov: '300 → 295 (−1,7%)', rev: '1.800 → 1.180' },
            { seg: 'Khách cũ', orders: '4.000 → 6.000', share: '40% → 60%', aov: '450 → 445 (−1,1%)', rev: '1.800 → 2.670' },
            { seg: 'Tổng', orders: '10.000 → 10.000', share: '100%', aov: '360 → 385 (+6,9%)', rev: '3.600 → 3.850' },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: 'Cả hai nhóm có AOV giảm nhẹ nhưng AOV gộp lại tăng: đây là dấu hiệu điển hình của hiệu ứng mix (nghịch lý Simpson ở dạng nhẹ).',
        },
        {
          kind: 'chart',
          title: 'AOV theo nhóm khách và AOV gộp (nghìn đồng)',
          type: 'line',
          xKey: 'month',
          series: [
            { key: 'newc', label: 'Khách mới' },
            { key: 'ret', label: 'Khách cũ' },
            { key: 'all', label: 'Gộp' },
          ],
          data: [
            { month: 'T1', newc: 298, ret: 452, all: 359.6 },
            { month: 'T2', newc: 302, ret: 448, all: 360.4 },
            { month: 'T3', newc: 300, ret: 450, all: 360 },
            { month: 'T4', newc: 295, ret: 445, all: 385 },
          ],
          marker: { x: 'T4', label: 'Tỷ trọng khách mới giảm 60% → 40%' },
          caption: 'Hai đường theo nhóm khá phẳng; chỉ đường gộp nhảy lên ở T4, đúng tháng tỷ trọng đổi.',
        },
        {
          kind: 'quiz',
          id: 'new-vs-returning-aov-segmentation-q2',
          question: 'Bảng trên cho phép kết luận nào chắc nhất?',
          options: [
            {
              id: 'a',
              text: 'Khách cũ mua nhiều hơn nên đẩy AOV lên.',
              explain: 'AOV khách cũ giảm từ 450 xuống 445. Khách cũ đóng góp qua số đơn nhiều hơn, không qua giá trị mỗi đơn.',
            },
            {
              id: 'b',
              text: 'Mức tăng AOV gộp không đến từ việc từng nhóm chi nhiều hơn; nó đến từ việc khách cũ (AOV cao) chiếm tỷ trọng lớn hơn.',
              correct: true,
              explain: 'Đúng. Cả hai nhóm đều giảm nhẹ, trong khi tỷ trọng của nhóm AOV cao tăng từ 40% lên 60%.',
            },
            {
              id: 'c',
              text: 'Chương trình gợi ý mua kèm vô tác dụng vì AOV từng nhóm giảm.',
              explain: 'Quá mạnh. Dữ liệu này không có nhóm đối chứng nên không đo được tác dụng của chương trình; chỉ nói được là nó không thể giải thích mức tăng gộp.',
            },
          ],
        },
      ],
    },
    {
      id: 'decompose',
      kind: 'analysis',
      title: 'Bước 2 — Phân rã và loại trừ cách giải thích khác',
      blocks: [
        {
          kind: 'table',
          title: 'Phân rã thay đổi AOV +25 nghìn đồng',
          columns: [
            { key: 'item', label: 'Thành phần' },
            { key: 'calc', label: 'Cách tính', align: 'right' },
            { key: 'value', label: 'Tác động (nghìn đ)', align: 'right' },
          ],
          rows: [
            { item: 'AOV T3', calc: '0,6×300 + 0,4×450', value: '360' },
            { item: 'Hiệu ứng mix (tỷ trọng đổi)', calc: '(−0,2)×300 + (+0,2)×450', value: '+30' },
            { item: 'Hiệu ứng trong nhóm (AOV từng nhóm đổi)', calc: '0,4×(−5) + 0,6×(−5)', value: '−5' },
            { item: 'AOV T4', calc: '360 + 30 − 5', value: '385' },
          ],
          highlight: [{ row: 1, tone: 'warning' }, { row: 2, tone: 'negative' }],
          caption: 'Hiệu ứng mix lớn hơn mức tăng thật 1,2 lần, và hành vi trong nhóm kéo AOV xuống 5 nghìn.',
        },
        {
          kind: 'table',
          title: 'Loại trừ: giá bán tăng hay mua nhiều món hơn?',
          columns: [
            { key: 'seg', label: 'Nhóm' },
            { key: 'items', label: 'Số món/đơn T3 → T4', align: 'right' },
            { key: 'price', label: 'Giá TB/món (nghìn đ)', align: 'right' },
          ],
          rows: [
            { seg: 'Khách mới', items: '2,0 → 2,0', price: '150 → 147,5' },
            { seg: 'Khách cũ', items: '2,5 → 2,5', price: '180 → 178' },
          ],
          caption: 'Số món/đơn không đổi và giá trung bình mỗi món giảm nhẹ: giả thuyết "tăng giá" và "mua kèm nhiều món hơn" đều không đỡ được mức tăng gộp.',
        },
        {
          kind: 'text',
          md: '**Giả thuyết cho việc tỷ trọng đổi:** khách mới giảm từ 6.000 xuống 4.000 đơn có thể vì **ngân sách quảng cáo thu hút khách mới bị cắt** (520 → 310 triệu đồng, −40,4%). Chi phí mỗi đơn khách mới thậm chí giảm nhẹ (~87 → 78 nghìn đồng), nên sự thay đổi trông như do *lượng* chi tiêu chứ không do hiệu quả. Dữ liệu cần để kiểm tra: số khách mới theo kênh, và tỷ lệ khách cũ quay lại có thực sự tăng hay chỉ do mẫu số khách mới nhỏ đi.',
        },
        {
          kind: 'quiz',
          id: 'new-vs-returning-aov-segmentation-q3',
          question: 'Cách đóng khung nào cho báo cáo quý là trung thực nhất?',
          options: [
            {
              id: 'a',
              text: '"AOV +6,9% nhờ chương trình mua kèm."',
              explain: 'Dữ liệu loại trừ được cách giải thích này ở mức tổng: số món/đơn không đổi, AOV từng nhóm giảm.',
            },
            {
              id: 'b',
              text: '"AOV gộp +6,9% do tỷ trọng khách cũ tăng sau khi cắt ngân sách thu hút khách mới; AOV từng nhóm giảm 1–2%. Doanh thu tăng nhưng tăng trưởng khách mới đang chậm lại."',
              correct: true,
              explain: 'Đúng. Nêu cả hiệu ứng mix, hành vi trong nhóm và hệ quả tới tăng trưởng khách mới. Số 3.850 triệu vẫn đúng, nhưng chất lượng của nó khác.',
            },
            {
              id: 'c',
              text: 'Không báo cáo AOV vì dễ gây hiểu nhầm.',
              explain: 'AOV hữu ích nếu đi kèm phân khúc. Bỏ metric không giải quyết vấn đề.',
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
          md: '**Kết luận:** Mức tăng 25 nghìn đồng của AOV = +30 do mix − 5 do hành vi trong nhóm. Không có bằng chứng chương trình mua kèm hoạt động; điều đáng chú ý hơn là **khách mới mỗi tháng giảm 33%** do chi tiêu thu hút giảm. Báo cáo AOV theo nhóm và theo dõi khách mới như một chỉ số riêng.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Đổi báo cáo AOV hằng tháng thành AOV theo khách mới / khách cũ kèm tỷ trọng đơn và bảng phân rã mix',
              owner: 'Data/Analytics',
              metric: 'AOV theo nhóm, hiệu ứng mix, hiệu ứng trong nhóm',
              threshold: 'Báo cáo có cả 3 con số; hiệu ứng mix > 50% thay đổi AOV thì phải ghi chú nguyên nhân',
            },
            {
              action: 'Đo chương trình mua kèm bằng nhóm đối chứng (50% người dùng không thấy gợi ý) thay vì so AOV trước/sau',
              owner: 'Product + Data/Analytics',
              metric: 'Số món/đơn và AOV của nhóm thấy vs không thấy gợi ý',
              threshold: 'Tiếp tục nếu số món/đơn tăng ≥ 0,2 và khoảng tin cậy không chứa 0',
            },
            {
              action: 'Đặt mục tiêu khách mới tối thiểu hằng tháng và rà lại ngân sách thu hút',
              owner: 'Trưởng nhóm marketing',
              metric: 'Số khách mới/tháng; chi phí mỗi đơn đầu tiên',
              threshold: 'Khách mới ≥ 5.000/tháng; chi phí mỗi đơn khách mới ≤ 90 nghìn đ',
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
              title: 'Đọc trung bình gộp như hành vi của một "khách điển hình"',
              why: 'AOV là trung bình có trọng số của nhiều nhóm; đổi tỷ trọng đã đủ làm nó nhảy dù không ai đổi hành vi.',
              instead: 'Luôn xem AOV theo ít nhất một phân khúc chính và báo cáo hiệu ứng mix riêng.',
            },
            {
              title: 'Gán công cho chương trình chạy cùng thời điểm',
              why: 'Trước/sau không có đối chứng không tách được tác động chương trình khỏi mix, mùa vụ, giá.',
              instead: 'Đo bằng nhóm đối chứng; nếu chưa thể, kiểm tra xem từng nhóm có thay đổi không.',
            },
            {
              title: 'Định nghĩa "khách mới" theo tháng thay vì theo lịch sử',
              why: 'Khách cũ chưa mua trong tháng bị gán nhầm là khách mới, làm tỷ trọng và AOV hai nhóm sai.',
              instead: 'Gán nhãn theo đơn đầu tiên trong toàn bộ lịch sử, ghi định nghĩa vào data dictionary.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'AOV là trung bình có trọng số: tăng AOV gộp có thể hoàn toàn do tỷ trọng nhóm đổi, không do ai chi nhiều hơn.',
    'Phân rã thay đổi thành hiệu ứng mix và hiệu ứng trong nhóm; hai phần cộng lại phải đúng bằng mức thay đổi tổng.',
    'Trước khi gán công cho chương trình, loại trừ giá, số món/đơn và mix; muốn khẳng định tác động phải có nhóm đối chứng.',
  ],
  references: [
    {
      title: 'Simpson’s Paradox',
      publisher: 'Stanford Encyclopedia of Philosophy',
      url: 'https://plato.stanford.edu/entries/paradox-simpson/',
      note: 'Mục từ về nghịch lý Simpson: xu hướng ở từng nhóm có thể khác xu hướng gộp, nền tảng của việc luôn xem phân khúc trước khi kết luận.',
    },
    {
      title: 'Simpson’s paradox',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Simpson%27s_paradox',
      note: 'Tóm tắt khái niệm kèm các ví dụ số liệu mà xu hướng gộp đảo chiều so với từng nhóm.',
    },
    {
      title: 'Customer acquisition cost',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Customer_acquisition_cost',
      note: 'Định nghĩa chi phí thu hút khách hàng, dùng để đọc cặp số chi tiêu thu hút và số khách mới.',
    },
  ],
}
