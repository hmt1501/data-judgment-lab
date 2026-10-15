import type { CaseStudy } from '../types'

/*
 * Số liệu mock của "Công ty A" (triệu đ), quý 3, đã kiểm tra khớp nhau:
 *   Doanh thu 4.000 (Q2) → 4.800 (Q3) · giá vốn 2.800 → 3.360 (70%) · lợi nhuận sau thuế Q3 = 600 (12,5%)
 *   Cuối Q2 → cuối Q3: tiền 520 → 120 (−400) · phải thu 1.000 → 1.650 (+650)
 *     hàng tồn kho 850 → 1.330 (+480) · phải trả NCC 600 → 800 (+200)
 *   CFO = 600 + 150 (khấu hao) − 650 − 480 + 200 = −180 · đầu tư (capex) −120 · tài chính (trả nợ vay) −100 → −400
 *   DSO 22,5 → 30,9 ngày · DIO 27,3 → 35,6 · DPO 19,3 → 21,4 · chu kỳ tiền (CCC) 30,5 → 45,1 (+14,6 ngày)
 *   Theo tháng: LN 190 + 200 + 210 = 600 (lũy kế 190/390/600); tiền cuối tháng 520 → 400 → 260 → 120
 */
export const profitVsCashBalance: CaseStudy = {
  id: 'profit-vs-cash-balance',
  title: 'Báo lãi cả quý nhưng tài khoản ngân hàng cạn tiền',
  domain: 'accounting',
  level: 'fresher',
  minutes: 9,
  skills: ['cash-flow', 'financial-statements', 'metric-decomposition'],
  question: 'Công ty báo lãi 600 triệu đ trong quý nhưng tiền trong ngân hàng giảm 400 triệu đ. Chênh lệch này đến từ đâu và nên xử lý gì?',
  summary: 'Phân biệt lợi nhuận kế toán (cơ sở dồn tích) với dòng tiền, rồi phân rã chênh lệch qua khấu hao, khoản phải thu, hàng tồn kho và khoản phải trả.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst tài chính của **Công ty A**, một công ty phân phối nhỏ. Cuối quý 3, kế toán trưởng nộp báo cáo kết quả kinh doanh: lãi ròng 600 triệu đ. Nhưng sáng nay thủ quỹ báo số dư tài khoản chỉ còn 120 triệu đ, chưa đủ trả lương và nhà cung cấp tháng sau. Giám đốc hỏi: *"Lãi mà sao không có tiền?"*',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Công ty A và mọi con số trong bài đều là **giả định**, chỉ dùng để học cách đọc. Khái niệm kế toán (cơ sở dồn tích, báo cáo lưu chuyển tiền tệ) là thật.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Doanh thu quý 3', value: '4.800 triệu đ', delta: '+20% so với Q2', tone: 'positive' },
            { label: 'Lợi nhuận sau thuế', value: '600 triệu đ', delta: 'biên 12,5%', tone: 'positive' },
            { label: 'Tiền cuối quý', value: '120 triệu đ', delta: '−400 so với đầu quý', tone: 'negative' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: lợi nhuận không phải tiền',
      blocks: [
        {
          kind: 'text',
          md: 'Kế toán ghi nhận doanh thu khi hàng đã giao (**cơ sở dồn tích**), không phải khi khách trả tiền; chi phí ghi nhận khi phát sinh, không phải khi chi tiền. Vì vậy lợi nhuận và tiền lệch nhau theo thời gian. Phương pháp gián tiếp của báo cáo lưu chuyển tiền tệ nối hai con số này:',
        },
        {
          kind: 'formula',
          expression: 'Dòng tiền HĐKD = Lợi nhuận + Khấu hao − Δ Phải thu − Δ Hàng tồn kho + Δ Phải trả NCC',
          note: 'Δ là thay đổi trong kỳ (cuối − đầu). Tài sản vận hành tăng thì **hút** tiền; khoản phải trả tăng thì **giữ** tiền lại trong công ty. Khấu hao là chi phí không bằng tiền nên được cộng lại.',
        },
        {
          kind: 'quiz',
          id: 'profit-vs-cash-balance-q1',
          question: 'Quý này khoản phải thu tăng 650 triệu đ. Điều đó tác động thế nào đến lợi nhuận và tiền?',
          options: [
            {
              id: 'a',
              text: 'Lợi nhuận tăng, tiền chưa tăng: doanh thu đã ghi nhận nhưng khách chưa trả.',
              correct: true,
              explain: 'Đúng. Bán chịu làm doanh thu và lợi nhuận tăng ngay, nhưng tiền chỉ về khi khách thanh toán. Phải thu tăng nghĩa là phần lợi nhuận đó đang nằm trong tay khách.',
            },
            {
              id: 'b',
              text: 'Cả lợi nhuận và tiền đều giảm 650 triệu đ.',
              explain: 'Phải thu tăng không làm lợi nhuận giảm. Nó chỉ trừ vào dòng tiền so với lợi nhuận.',
            },
            {
              id: 'c',
              text: 'Không ảnh hưởng gì vì phải thu chỉ là khoản ghi sổ.',
              explain: 'Phải thu là tiền thật chưa thu được. Nó ảnh hưởng trực tiếp tới khả năng trả lương và nhà cung cấp.',
            },
          ],
        },
      ],
    },
    {
      id: 'bridge',
      kind: 'analysis',
      title: 'Bước 1 — Phân rã: từ lợi nhuận 600 xuống dòng tiền −180',
      blocks: [
        {
          kind: 'table',
          title: 'Cầu nối lợi nhuận → dòng tiền (triệu đ)',
          columns: [
            { key: 'item', label: 'Khoản mục' },
            { key: 'bs', label: 'Đầu → cuối quý', align: 'right' },
            { key: 'effect', label: 'Tác động lên tiền', align: 'right' },
          ],
          rows: [
            { item: 'Lợi nhuận sau thuế', bs: '—', effect: '+600' },
            { item: 'Khấu hao (chi phí không bằng tiền)', bs: '—', effect: '+150' },
            { item: 'Phải thu khách hàng tăng', bs: '1.000 → 1.650', effect: '−650' },
            { item: 'Hàng tồn kho tăng', bs: '850 → 1.330', effect: '−480' },
            { item: 'Phải trả nhà cung cấp tăng', bs: '600 → 800', effect: '+200' },
            { item: 'Dòng tiền từ hoạt động kinh doanh', bs: '—', effect: '−180' },
            { item: 'Mua sắm tài sản cố định (đầu tư)', bs: '—', effect: '−120' },
            { item: 'Trả nợ vay (tài chính)', bs: '—', effect: '−100' },
            { item: 'Thay đổi tiền trong quý', bs: '520 → 120', effect: '−400' },
          ],
          highlight: [
            { row: 2, tone: 'negative' },
            { row: 3, tone: 'negative' },
            { row: 5, tone: 'warning' },
            { row: 8, tone: 'negative' },
          ],
          caption: '600 + 150 − 650 − 480 + 200 = −180; −180 − 120 − 100 = −400. Phải thu và hàng tồn kho cùng hút 1.130 triệu đ, gấp gần 2 lần lợi nhuận.',
        },
        {
          kind: 'chart',
          title: 'Lợi nhuận lũy kế tăng, tiền cuối tháng giảm',
          type: 'line',
          xKey: 'month',
          unit: ' triệu đ',
          series: [
            { key: 'profit', label: 'Lợi nhuận lũy kế Q3' },
            { key: 'cash', label: 'Số dư tiền cuối tháng' },
          ],
          data: [
            { month: 'Cuối T6', profit: 0, cash: 520 },
            { month: 'Cuối T7', profit: 190, cash: 400 },
            { month: 'Cuối T8', profit: 390, cash: 260 },
            { month: 'Cuối T9', profit: 600, cash: 120 },
          ],
          caption: 'Hai đường tách nhau từng tháng: mỗi tháng lãi 190–210 nhưng tiền vẫn giảm 120–140.',
        },
        {
          kind: 'quiz',
          id: 'profit-vs-cash-balance-q2',
          question: 'Khấu hao 150 triệu đ được cộng lại khi tính dòng tiền. Vì sao?',
          options: [
            {
              id: 'a',
              text: 'Vì khấu hao là khoản công ty được nhận thêm trong kỳ.',
              explain: 'Khấu hao không phải thu nhập. Nó là chi phí.',
            },
            {
              id: 'b',
              text: 'Vì khấu hao đã trừ vào lợi nhuận nhưng không có tiền nào ra khỏi tài khoản trong kỳ.',
              correct: true,
              explain: 'Đúng. Tiền mua tài sản đã chi ở kỳ trước (hoặc nằm ở dòng đầu tư); khấu hao chỉ phân bổ chi phí ra nhiều kỳ. Cộng lại để bỏ phần chi phí không bằng tiền ra khỏi lợi nhuận.',
            },
            {
              id: 'c',
              text: 'Vì khấu hao làm tăng tiền mặt của công ty.',
              explain: 'Khấu hao không tạo ra tiền. Nó chỉ không làm tiền giảm, khác hẳn với việc làm tiền tăng.',
            },
          ],
        },
      ],
    },
    {
      id: 'cycle',
      kind: 'analysis',
      title: 'Bước 2 — Vì sao vốn lưu động phình ra: đọc theo số ngày',
      blocks: [
        {
          kind: 'text',
          md: 'Số tuyệt đối khó so sánh khi doanh thu đổi. Quy về **số ngày** (giả định 90 ngày/quý, toàn bộ doanh thu là bán chịu để đơn giản): DSO = phải thu ÷ doanh thu × 90; DIO = tồn kho ÷ giá vốn × 90; DPO = phải trả ÷ giá vốn × 90.',
        },
        {
          kind: 'table',
          title: 'Chu kỳ chuyển đổi tiền (ngày)',
          columns: [
            { key: 'metric', label: 'Chỉ số' },
            { key: 'q2', label: 'Q2', align: 'right' },
            { key: 'q3', label: 'Q3', align: 'right' },
            { key: 'diff', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { metric: 'DSO (ngày thu tiền)', q2: '22,5', q3: '30,9', diff: '+8,4' },
            { metric: 'DIO (ngày tồn kho)', q2: '27,3', q3: '35,6', diff: '+8,3' },
            { metric: 'DPO (ngày trả nhà cung cấp)', q2: '19,3', q3: '21,4', diff: '+2,1' },
            { metric: 'Chu kỳ tiền CCC = DSO + DIO − DPO', q2: '30,5', q3: '45,1', diff: '+14,6' },
          ],
          highlight: [
            { row: 0, tone: 'negative' },
            { row: 1, tone: 'negative' },
            { row: 3, tone: 'warning' },
          ],
          caption: 'Doanh thu tăng 20% nhưng tiền bị khóa lâu hơn 14,6 ngày: bán chịu lâu hơn và nhập hàng nhiều hơn mức bán ra.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Tăng trưởng nhanh thường **ngốn** tiền: bán nhiều hơn thì phải nhập nhiều hơn và cấp tín dụng nhiều hơn. Phải thu tăng +65% trong khi doanh thu chỉ tăng +20% là dấu hiệu nới lỏng điều kiện bán chịu hoặc khách trả chậm, không chỉ là hệ quả của tăng trưởng.',
        },
        {
          kind: 'quiz',
          id: 'profit-vs-cash-balance-q3',
          question: 'Giám đốc đề xuất: "Cứ kéo dài thời hạn trả nhà cung cấp là hết thiếu tiền." Nhận định nào hợp lý nhất?',
          options: [
            {
              id: 'a',
              text: 'Chấp nhận ngay vì DPO càng cao càng tốt.',
              explain: 'Trả chậm quá mức làm mất chiết khấu, tăng rủi ro bị siết hàng hoặc tăng giá. Đó là vay nóng từ nhà cung cấp, không phải giải pháp gốc.',
            },
            {
              id: 'b',
              text: 'Chỉ nên làm vừa phải; gốc vấn đề là phải thu và tồn kho đang tăng nhanh hơn doanh thu.',
              correct: true,
              explain: 'Đúng. DSO và DIO cùng tăng ~8 ngày, trong khi DPO chỉ nhích 2 ngày. Xử lý đúng chỗ là thu tiền nhanh hơn và nhập hàng sát nhu cầu; kéo dài DPO chỉ là biện pháp bổ trợ có giới hạn.',
            },
            {
              id: 'c',
              text: 'Không nên làm gì với nhà cung cấp, chỉ cần giảm lương để cân bằng.',
              explain: 'Cắt lương không chạm vào nguyên nhân (vốn bị khóa trong phải thu và tồn kho) và gây hại cho vận hành.',
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
          md: '**Kết luận cho giám đốc:** Công ty A không thua lỗ. Lãi 600 triệu đ đang nằm trong **phải thu (+650)** và **hàng tồn kho (+480)**. Dòng tiền kinh doanh −180, cộng 120 chi đầu tư và 100 trả nợ vay làm tiền giảm 400. Ưu tiên là đưa tiền từ vốn lưu động về, trước khi nghĩ tới đi vay thêm.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Lập danh sách phải thu quá hạn, gọi đối soát và thu nhóm quá hạn lớn nhất; tạm dừng bán chịu thêm cho khách nợ quá hạn',
              owner: 'Kế toán công nợ + Trưởng kinh doanh',
              metric: 'DSO',
              threshold: 'Về ≤ 25 ngày trong 2 quý (Q2: 22,5)',
            },
            {
              action: 'Rà tồn kho theo mã hàng, ngừng nhập mã quay vòng chậm, đặt mức tồn tối thiểu theo doanh số bán 4 tuần',
              owner: 'Trưởng kho + Mua hàng',
              metric: 'DIO',
              threshold: '≤ 30 ngày',
            },
            {
              action: 'Lập dự báo dòng tiền 13 tuần và đưa chỉ số dòng tiền HĐKD vào báo cáo tháng bên cạnh lợi nhuận',
              owner: 'Kế toán trưởng / Finance',
              metric: 'Số dư tiền cuối tuần so với chi bắt buộc 4 tuần tới',
              threshold: 'Luôn ≥ 100% chi bắt buộc 4 tuần tới',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Nguyên nhân là **vốn bị khóa trong vận hành**, nên giải quyết tại nguồn rẻ hơn đi vay và không làm xấu thêm quan hệ với nhà cung cấp. Hành động thứ ba giúp lần sau thấy tiền cạn từ sớm, không phải đợi thủ quỹ báo.',
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
              title: 'Coi lợi nhuận là tiền',
              why: 'Lợi nhuận theo dồn tích có thể cao trong khi tiền thật chưa về. Công ty có lãi vẫn có thể mất khả năng thanh toán.',
              instead: 'Luôn đọc song song báo cáo kết quả kinh doanh và báo cáo lưu chuyển tiền tệ; theo dõi dòng tiền HĐKD.',
            },
            {
              title: 'Cộng khấu hao rồi gọi đó là "nguồn tiền"',
              why: 'Khấu hao chỉ là điều chỉnh để bỏ chi phí không bằng tiền. Tiền thật vẫn chỉ đến từ khách hàng thanh toán.',
              instead: 'Dùng khấu hao để nối lợi nhuận với dòng tiền, không coi nó là khoản thu.',
            },
            {
              title: 'Chỉ nhìn số tuyệt đối của phải thu, tồn kho',
              why: 'Doanh thu tăng thì phải thu và tồn kho tăng theo là bình thường; số tuyệt đối không cho biết có xấu đi hay không.',
              instead: 'Quy về số ngày (DSO, DIO, DPO) và so với kỳ trước hoặc chuẩn ngành.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Lợi nhuận (dồn tích) và tiền lệch nhau; phương pháp gián tiếp nối chúng bằng khấu hao và thay đổi phải thu, tồn kho, phải trả.',
    'Phải thu và tồn kho tăng hút tiền; phải trả tăng giữ tiền lại. Quy về DSO, DIO, DPO để biết vốn lưu động xấu đi thật hay chỉ do tăng trưởng.',
    'Hành động tốt nhất xử lý nơi tiền bị khóa, kèm metric, ngưỡng và dự báo dòng tiền để thấy sớm rủi ro thiếu tiền.',
  ],
  references: [
    {
      title: 'IAS 7 Statement of Cash Flows',
      publisher: 'IFRS Foundation',
      url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/',
      note: 'Chuẩn mực quốc tế về báo cáo lưu chuyển tiền tệ: phân loại dòng tiền hoạt động, đầu tư, tài chính.',
    },
    {
      title: 'Cash conversion cycle',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Cash_conversion_cycle',
      note: 'Định nghĩa chu kỳ chuyển đổi tiền và ba thành phần ngày tồn kho, ngày thu tiền, ngày trả tiền.',
    },
    {
      title: 'Accrual',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Accrual',
      note: 'Giải thích cơ sở dồn tích: ghi nhận doanh thu, chi phí khi phát sinh chứ không phải khi thu, chi tiền.',
    },
  ],
}
