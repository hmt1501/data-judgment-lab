import type { CaseStudy } from '../types'

/*
 * Số liệu mock của app "FinPay" (đã kiểm tra khớp nhau), mỗi kênh chi 100 triệu đ trong tháng:
 *   Kênh X: 40.000 lượt cài → CPI 2.500 đ · kích hoạt 2.000 (5,0%) → CPA 50.000 đ
 *   Kênh Y: 10.000 lượt cài → CPI 10.000 đ · kích hoạt 2.500 (25,0%) → CPA 40.000 đ
 *   Kênh Z: 25.000 lượt cài → CPI 4.000 đ · kích hoạt 3.750 (15,0%) → CPA ≈ 26.667 đ
 *   Tổng: chi 300 triệu · cài 75.000 · kích hoạt 8.250 → CPI 4.000 đ · CPA ≈ 36.364 đ
 *   Kiểm tra: CPA = CPI ÷ tỷ lệ kích hoạt: 2.500/0,05 = 50.000; 10.000/0,25 = 40.000; 4.000/0,15 ≈ 26.667
 */
export const installVsActivationCpaReading: CaseStudy = {
  id: 'install-vs-activation-cpa-reading',
  title: 'CPI rẻ nhưng CPA kích hoạt lại đắt',
  domain: 'mobile',
  level: 'fresher',
  minutes: 8,
  skills: ['unit-economics', 'funnel', 'metric-decomposition'],
  question: 'Kênh quảng cáo nào đang rẻ nhất, nếu đo bằng chi phí để có một người dùng thật sự kích hoạt chứ không chỉ cài app?',
  summary: 'Đọc đúng chi phí theo mục tiêu: phân rã CPA kích hoạt thành CPI chia tỷ lệ kích hoạt rồi so ba kênh quảng cáo.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst tăng trưởng của **FinPay**, một app ví điện tử giả định. Tháng này đội marketing chạy 3 kênh, mỗi kênh chi 100 triệu đ. Báo cáo của đội xếp hạng kênh **X** đứng đầu vì giá mỗi lượt cài (CPI) chỉ 2.500 đ. Nhưng đội sản phẩm phàn nàn rằng ít người từ kênh X hoàn tất đăng ký và giao dịch đầu tiên. Quản lý hỏi: *"Nên tăng ngân sách cho kênh nào?"*',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'FinPay và các số liệu là **giả định**. Định nghĩa "kích hoạt" ở đây là hoàn tất xác minh tài khoản và thực hiện giao dịch đầu tiên; mỗi app nên tự chọn định nghĩa phù hợp.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Tổng chi quảng cáo', value: '300 triệu đ', delta: '3 kênh × 100 triệu', tone: 'neutral' },
            { label: 'Lượt cài / kích hoạt', value: '75.000 / 8.250', delta: '11% cài đặt được kích hoạt', tone: 'neutral' },
            { label: 'CPI trung bình', value: '4.000 đ', delta: 'CPA trung bình ≈ 36.364 đ', tone: 'warning' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: chi phí phải gắn với mục tiêu',
      blocks: [
        {
          kind: 'text',
          md: 'CPI đo chi phí cho **bước đầu** của phễu (cài app). Giá trị kinh doanh chỉ xuất hiện ở bước sau (kích hoạt, giao dịch, giữ chân). Khi mục tiêu là người dùng hoạt động, hãy đo chi phí tại bước đó (CPA) và phân rã nó:',
        },
        {
          kind: 'formula',
          expression: 'CPA kích hoạt = Chi phí ÷ Số kích hoạt = CPI ÷ Tỷ lệ kích hoạt (kích hoạt ÷ cài)',
          note: 'Hai kênh cùng CPI có thể có CPA khác nhau nhiều lần nếu tỷ lệ kích hoạt khác nhau. CPI thấp chỉ tốt khi tỷ lệ kích hoạt không giảm tương ứng.',
        },
        {
          kind: 'quiz',
          id: 'install-vs-activation-cpa-reading-q1',
          question: 'Kênh P có CPI 2.000 đ, tỷ lệ kích hoạt 4%. Kênh Q có CPI 8.000 đ, tỷ lệ kích hoạt 20%. Kênh nào rẻ hơn khi tính theo kích hoạt?',
          options: [
            {
              id: 'a',
              text: 'Kênh Q: CPA = 8.000 ÷ 0,20 = 40.000 đ, thấp hơn P = 2.000 ÷ 0,04 = 50.000 đ.',
              correct: true,
              explain: 'Đúng. CPI của Q gấp 4 lần P nhưng tỷ lệ kích hoạt gấp 5 lần, nên CPA lại thấp hơn.',
            },
            {
              id: 'b',
              text: 'Kênh P vì CPI chỉ bằng một phần tư.',
              explain: 'CPI chưa tính tỷ lệ kích hoạt. P có CPA 50.000 đ, cao hơn Q.',
            },
            {
              id: 'c',
              text: 'Hai kênh bằng nhau vì chi phí cuối cùng như nhau.',
              explain: 'Không có dữ kiện này. Hai kênh có CPA khác nhau theo công thức.',
            },
          ],
        },
      ],
    },
    {
      id: 'compare',
      kind: 'analysis',
      title: 'Bước 1 — So ba kênh theo CPI và CPA',
      blocks: [
        {
          kind: 'table',
          title: 'Chi phí theo mục tiêu (mỗi kênh chi 100 triệu đ)',
          columns: [
            { key: 'ch', label: 'Kênh' },
            { key: 'inst', label: 'Lượt cài', align: 'right' },
            { key: 'cpi', label: 'CPI (đ)', align: 'right' },
            { key: 'act', label: 'Kích hoạt', align: 'right' },
            { key: 'rate', label: 'Tỷ lệ kích hoạt', align: 'right' },
            { key: 'cpa', label: 'CPA (đ)', align: 'right' },
          ],
          rows: [
            { ch: 'X', inst: '40.000', cpi: '2.500', act: '2.000', rate: '5,0%', cpa: '50.000' },
            { ch: 'Y', inst: '10.000', cpi: '10.000', act: '2.500', rate: '25,0%', cpa: '40.000' },
            { ch: 'Z', inst: '25.000', cpi: '4.000', act: '3.750', rate: '15,0%', cpa: '26.667' },
            { ch: 'Tổng', inst: '75.000', cpi: '4.000', act: '8.250', rate: '11,0%', cpa: '36.364' },
          ],
          highlight: [
            { row: 0, tone: 'negative' },
            { row: 2, tone: 'positive' },
          ],
          caption: 'Xếp hạng theo CPI: X < Z < Y. Xếp hạng theo CPA: Z < Y < X, ngược hoàn toàn ở vị trí đầu và cuối.',
        },
        {
          kind: 'chart',
          title: 'CPI và CPA theo kênh (nghìn đ)',
          type: 'bar',
          xKey: 'ch',
          unit: ' nghìn đ',
          series: [
            { key: 'cpi', label: 'CPI' },
            { key: 'cpa', label: 'CPA kích hoạt' },
          ],
          data: [
            { ch: 'Kênh X', cpi: 2.5, cpa: 50 },
            { ch: 'Kênh Y', cpi: 10, cpa: 40 },
            { ch: 'Kênh Z', cpi: 4, cpa: 26.7 },
          ],
          caption: 'Khoảng cách giữa CPI và CPA của kênh X rất lớn: người cài từ kênh này hiếm khi kích hoạt.',
        },
        {
          kind: 'quiz',
          id: 'install-vs-activation-cpa-reading-q2',
          question: 'Kênh X có CPI thấp nhất và tỷ lệ kích hoạt thấp nhất (5%). Điều này gợi ý điều gì?',
          options: [
            {
              id: 'a',
              text: 'Lượt cài có thể đến từ nguồn chất lượng thấp (ví dụ quảng cáo tặng thưởng, bấm nhầm), cần xem chất lượng người dùng trước khi tăng ngân sách.',
              correct: true,
              explain: 'Đúng. Giá cài rất rẻ thường đi cùng nhóm người dùng ít quan tâm. Đây là giả thuyết cần kiểm tra bằng dữ liệu hành vi sau cài, không phải kết luận.',
            },
            {
              id: 'b',
              text: 'Kênh X chắc chắn gian lận.',
              explain: 'Chưa đủ bằng chứng. Tỷ lệ thấp là dấu hiệu để điều tra, không phải bằng chứng gian lận.',
            },
            {
              id: 'c',
              text: 'Kênh X tốt nhất vì có nhiều lượt cài nhất.',
              explain: 'Lượt cài nhiều nhưng chỉ 5% kích hoạt, CPA cao nhất ba kênh.',
            },
          ],
        },
      ],
    },
    {
      id: 'budget',
      kind: 'analysis',
      title: 'Bước 2 — Điều gì xảy ra nếu chuyển ngân sách?',
      blocks: [
        {
          kind: 'text',
          md: 'Giả sử chuyển 50 triệu đ từ kênh X sang kênh Z và giả định CPA không đổi khi tăng chi (giả định lạc quan, thực tế thường tăng dần). Kích hoạt từ X giảm 50.000.000 ÷ 50.000 = 1.000; kích hoạt từ Z tăng 50.000.000 ÷ 26.667 ≈ 1.875. Chênh lệch ròng khoảng **+875 kích hoạt** với cùng tổng chi.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'CPA tăng dần khi tăng chi (nhóm người dùng dễ chuyển đổi đã bị chạm hết). Vì vậy hãy tăng ngân sách theo bước nhỏ và theo dõi lại CPA sau mỗi bước. Đồng thời CPA kích hoạt cũng chỉ là bước giữa phễu: giá trị cuối cùng còn phụ thuộc giữ chân và doanh thu của người dùng đó.',
        },
        {
          kind: 'quiz',
          id: 'install-vs-activation-cpa-reading-q3',
          question: 'Báo cáo chỉ cho phép chọn một metric để xếp hạng kênh. Nên chọn metric nào cho mục tiêu "người dùng hoạt động"?',
          options: [
            {
              id: 'a',
              text: 'CPA kích hoạt (hoặc tốt hơn nữa là chi phí theo người dùng còn hoạt động sau 7 ngày).',
              correct: true,
              explain: 'Đúng. Metric nên nằm càng gần mục tiêu kinh doanh càng tốt, miễn là đủ dữ liệu để đo.',
            },
            {
              id: 'b',
              text: 'CPI vì dễ đo và có ngay trong ngày.',
              explain: 'Dễ đo không có nghĩa đúng mục tiêu; CPI có thể xếp hạng ngược với giá trị thật.',
            },
            {
              id: 'c',
              text: 'Số lượt hiển thị quảng cáo.',
              explain: 'Lượt hiển thị là chỉ số rất xa mục tiêu và không phản ánh chi phí cho người dùng thật.',
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
          md: '**Kết luận:** Kênh X rẻ nhất theo CPI (2.500 đ) nhưng đắt nhất theo CPA (50.000 đ); kênh Z mới là rẻ nhất khi đo theo người dùng kích hoạt (≈ 26.667 đ). Hãy xếp hạng và phân bổ ngân sách theo CPA, thử tăng dần cho Z, và điều tra chất lượng lượt cài của X.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Đổi báo cáo kênh sang CPA kích hoạt, kèm tỷ lệ kích hoạt và CPI để biết thành phần gây chênh lệch',
              owner: 'Analyst tăng trưởng',
              metric: 'CPA kích hoạt theo kênh',
              threshold: 'Mục tiêu ≤ 35.000 đ trên toàn danh mục',
            },
            {
              action: 'Chuyển 25 triệu đ từ X sang Z trong 2 tuần, theo dõi CPA Z sau mỗi bước',
              owner: 'Trưởng performance marketing',
              metric: 'CPA kênh Z khi tăng chi',
              threshold: 'Giữ ≤ 35.000 đ; dừng tăng nếu vượt',
            },
            {
              action: 'Kiểm tra nguồn cài đặt kênh X (vị trí quảng cáo, thiết bị, thời gian từ cài tới mở app)',
              owner: 'Analyst chống gian lận / attribution',
              metric: 'Tỷ lệ cài mở app trong 24 giờ',
              threshold: '≥ 60% hoặc loại nguồn có tỷ lệ thấp hơn',
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
              title: 'Tối ưu CPI đơn thuần',
              why: 'Ngân sách bị kéo về nguồn cài rẻ nhưng ít giá trị, CPA thật tăng.',
              instead: 'Xếp hạng theo chi phí tại bước gần mục tiêu nhất đủ dữ liệu: kích hoạt, giao dịch, giữ chân.',
            },
            {
              title: 'Nhân rộng CPA trung bình khi tăng chi',
              why: 'CPA thường tăng khi tăng chi vì nhóm dễ chuyển đổi đã hết.',
              instead: 'Tăng theo bước nhỏ và đo lại CPA biên.',
            },
            {
              title: 'Định nghĩa "kích hoạt" thay đổi giữa các kênh',
              why: 'Mỗi kênh nhận sự kiện khác nhau nên không so sánh được.',
              instead: 'Dùng một định nghĩa kích hoạt duy nhất, đo ở phía app/server của mình.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'CPI đo chi phí cho lượt cài; CPA kích hoạt = CPI ÷ tỷ lệ kích hoạt, gần mục tiêu kinh doanh hơn.',
    'Xếp hạng theo CPI và theo CPA có thể ngược nhau; luôn nhìn cả hai và tỷ lệ chuyển đổi.',
    'Chuyển ngân sách theo bước nhỏ và đo lại CPA, vì chi phí biên thường cao hơn chi phí trung bình.',
  ],
  references: [
    {
      title: 'Cost per action',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Cost_per_action',
      note: 'Định nghĩa CPA trong quảng cáo, phân biệt với các hình thức tính phí theo lượt hiển thị hay lượt bấm.',
    },
    {
      title: 'Customer acquisition cost',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Customer_acquisition_cost',
      note: 'Khái niệm chi phí để có một khách hàng và vì sao nó cần được so với giá trị khách hàng mang lại.',
    },
  ],
}
