import type { CaseStudy } from '../types'

/*
 * Số liệu mock (tỷ đ), đã kiểm tra khớp nhau:
 *   Công ty A: tài sản 500 = tiền 20 + phải thu 80 + tồn kho 150 + tài sản cố định 250
 *     nợ phải trả 380 = vay ngắn hạn 160 + phải trả nhà cung cấp 120 + vay dài hạn 100 · vốn chủ 120 = vốn góp 80 + lợi nhuận giữ lại 40 · 380 + 120 = 500
 *     nợ/tài sản 76% · nợ/vốn chủ 3,17 · tài sản ngắn hạn 250 vs nợ ngắn hạn 280 → hiện hành 0,89
 *   Công ty B: tài sản 300 · nợ 120 · vốn chủ 180 → nợ/tài sản 40% · nợ/vốn chủ 0,67
 *   Tài sản giảm 10%: A −50 → 450, vốn chủ 120 → 70 (−41,7%) · B −30 → 270, vốn chủ 180 → 150 (−16,7%)
 */
export const balanceSheetEquationReading: CaseStudy = {
  id: 'balance-sheet-equation-reading',
  title: 'Tài sản 500 tỷ nghe lớn, nhưng 380 tỷ là đi vay: đọc cân đối kế toán',
  domain: 'accounting',
  level: 'fresher',
  minutes: 9,
  skills: ['financial-statements', 'metric-definition', 'metric-decomposition'],
  question: 'Công ty A khoe tài sản 500 tỷ đ, lớn hơn Công ty B (300 tỷ). Nhưng tài sản đó do ai tài trợ, và công ty nào đứng vững hơn khi có biến động?',
  summary: 'Dùng phương trình kế toán (tài sản = nợ phải trả + vốn chủ sở hữu) để đọc cơ cấu nguồn vốn, và thấy vốn chủ hấp thụ mất mát tài sản thế nào.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là nhân viên tín dụng mới. Hai doanh nghiệp xin vay: **Công ty A** có tổng tài sản 500 tỷ đ, **Công ty B** 300 tỷ đ. Trưởng phòng hỏi: "Công ty lớn hơn có chắc là an toàn hơn không? Hãy đọc bảng cân đối kế toán trước khi trả lời."',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Hai công ty và mọi con số là **giả định**. Phương trình kế toán và các khoản mục trên bảng cân đối là chuẩn chung của kế toán.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Tổng tài sản A', value: '500 tỷ đ' },
            { label: 'Tổng tài sản B', value: '300 tỷ đ' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: hai phía của bảng cân đối',
      blocks: [
        {
          kind: 'formula',
          expression: 'Tài sản = Nợ phải trả + Vốn chủ sở hữu',
          note: 'Bên trái là doanh nghiệp đang **có** gì; bên phải là **ai tài trợ**: chủ nợ (nợ phải trả) hay chủ sở hữu (vốn chủ). Vốn chủ là phần còn lại sau khi trừ nợ, nên nó là lớp đệm chịu mất mát đầu tiên.',
        },
        {
          kind: 'quiz',
          id: 'balance-sheet-equation-reading-q1',
          question: 'Công ty vay thêm 100 tỷ đ và để nguyên số tiền trong tài khoản. Phương trình kế toán thay đổi thế nào?',
          options: [
            { id: 'a', text: 'Tài sản +100 (tiền), nợ phải trả +100, vốn chủ không đổi.', correct: true, explain: 'Đúng. Vay thêm làm cả hai phía cùng tăng 100; vốn chủ không đổi nên công ty lớn hơn nhưng không giàu hơn.' },
            { id: 'b', text: 'Tài sản +100, vốn chủ +100.', explain: 'Khoản vay là nợ phải trả, không phải vốn chủ.' },
            { id: 'c', text: 'Không đổi gì vì tiền chỉ đi qua tài khoản.', explain: 'Cả tiền (tài sản) và nghĩa vụ trả (nợ) đều tăng, nên bảng cân đối thay đổi.' },
          ],
        },
      ],
    },
    {
      id: 'structure',
      kind: 'analysis',
      title: 'Bước 1 — Đọc cơ cấu: ai tài trợ cho tài sản',
      blocks: [
        {
          kind: 'table',
          title: 'Bảng cân đối của Công ty A (tỷ đ)',
          columns: [
            { key: 'asset', label: 'Tài sản' },
            { key: 'av', label: 'Giá trị', align: 'right' },
            { key: 'src', label: 'Nguồn vốn' },
            { key: 'sv', label: 'Giá trị', align: 'right' },
          ],
          rows: [
            { asset: 'Tiền', av: '20', src: 'Vay ngắn hạn', sv: '160' },
            { asset: 'Phải thu khách hàng', av: '80', src: 'Phải trả nhà cung cấp', sv: '120' },
            { asset: 'Hàng tồn kho', av: '150', src: 'Vay dài hạn', sv: '100' },
            { asset: 'Tài sản cố định', av: '250', src: 'Vốn góp chủ sở hữu', sv: '80' },
            { asset: '—', av: '—', src: 'Lợi nhuận giữ lại', sv: '40' },
            { asset: 'Tổng tài sản', av: '500', src: 'Tổng nguồn vốn', sv: '500' },
          ],
          highlight: [{ row: 5, tone: 'neutral' }],
          caption: 'Nợ phải trả = 160 + 120 + 100 = 380; vốn chủ = 80 + 40 = 120; 380 + 120 = 500.',
        },
        {
          kind: 'chart',
          title: 'Cơ cấu nguồn vốn (% tổng tài sản)',
          type: 'stackedBar',
          xKey: 'firm',
          unit: '%',
          series: [
            { key: 'debt', label: 'Nợ phải trả' },
            { key: 'equity', label: 'Vốn chủ sở hữu' },
          ],
          data: [
            { firm: 'Công ty A', debt: 76, equity: 24 },
            { firm: 'Công ty B', debt: 40, equity: 60 },
          ],
          caption: 'A: 380 ÷ 500 = 76% là nợ. B: 120 ÷ 300 = 40% là nợ (nợ/vốn chủ A = 3,17; B = 0,67).',
        },
        {
          kind: 'quiz',
          id: 'balance-sheet-equation-reading-q2',
          question: 'Công ty A có tài sản ngắn hạn 250 tỷ và nợ ngắn hạn 280 tỷ (vay ngắn hạn 160 + phải trả nhà cung cấp 120). Điều này gợi ý gì?',
          options: [
            { id: 'a', text: 'Tài sản ngắn hạn không đủ trả nợ đến hạn trong 12 tháng (250 ÷ 280 = 0,89); cần xem dòng tiền và khả năng tái cấp vốn.', correct: true, explain: 'Đúng. Tổng tài sản lớn nhưng chủ yếu là tài sản cố định (250 tỷ), khó bán nhanh để trả nợ đến hạn.' },
            { id: 'b', text: 'An toàn vì tổng tài sản 500 lớn hơn nợ 380.', explain: 'Tổng tài sản lớn hơn nợ nhưng phần lớn không chuyển thành tiền nhanh; khả năng trả nợ đến hạn nằm ở tài sản ngắn hạn và dòng tiền.' },
            { id: 'c', text: 'Không có gì đáng lo vì nợ phải trả nhà cung cấp là nợ "tốt".', explain: 'Phải trả nhà cung cấp vẫn đến hạn và phải trả; nó cũng làm tăng nợ ngắn hạn.' },
          ],
        },
      ],
    },
    {
      id: 'shock',
      kind: 'analysis',
      title: 'Bước 2 — Vốn chủ hấp thụ mất mát',
      blocks: [
        {
          kind: 'text',
          md: 'Giả sử mỗi công ty mất 10% tài sản (hàng tồn kho hỏng, khoản phải thu không đòi được…). Nợ vẫn phải trả đủ, nên toàn bộ mất mát rơi vào vốn chủ.',
        },
        {
          kind: 'table',
          title: 'Tài sản giảm 10% (tỷ đ)',
          columns: [
            { key: 'firm', label: 'Công ty' },
            { key: 'assets', label: 'Tài sản trước → sau', align: 'right' },
            { key: 'debt', label: 'Nợ phải trả', align: 'right' },
            { key: 'equity', label: 'Vốn chủ trước → sau', align: 'right' },
            { key: 'chg', label: 'Vốn chủ thay đổi', align: 'right' },
          ],
          rows: [
            { firm: 'A', assets: '500 → 450', debt: '380', equity: '120 → 70', chg: '−41,7%' },
            { firm: 'B', assets: '300 → 270', debt: '120', equity: '180 → 150', chg: '−16,7%' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
          caption: 'Cùng mất 10% tài sản, vốn chủ A mất 41,7%, B chỉ 16,7%. A có lớp đệm mỏng hơn nhiều.',
        },
        {
          kind: 'quiz',
          id: 'balance-sheet-equation-reading-q3',
          question: 'Với thông tin trên, nhận định nào phù hợp nhất cho báo cáo tín dụng?',
          options: [
            { id: 'a', text: 'A lớn hơn nên rủi ro thấp hơn.', explain: 'Quy mô tài sản không nói gì về lớp đệm vốn chủ hay khả năng trả nợ.' },
            { id: 'b', text: 'A chịu rủi ro cao hơn: nợ 76% tài sản, vốn chủ mỏng, nợ ngắn hạn lớn hơn tài sản ngắn hạn; cần thêm dữ liệu dòng tiền và kế hoạch trả nợ.', correct: true, explain: 'Đúng. Ba dấu hiệu cùng chỉ một hướng: đòn bẩy cao, lớp đệm mỏng và thanh khoản ngắn hạn yếu.' },
            { id: 'c', text: 'Cả hai như nhau vì mỗi công ty có một bảng cân đối cân bằng.', explain: 'Bảng nào cũng cân bằng theo định nghĩa; điều quan trọng là cơ cấu các vế.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: cách đọc cân đối khi thẩm định',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận:** Công ty A lớn hơn nhưng phần lớn tài sản (76%) do chủ nợ tài trợ và vốn chủ chỉ 120 tỷ. Công ty B nhỏ hơn nhưng vốn chủ 60% nguồn vốn nên chịu va đập tốt hơn. Hồ sơ A cần thêm dòng tiền hoạt động và lịch trả nợ trước khi quyết định.',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Lập bảng cơ cấu nguồn vốn (nợ/tài sản, nợ/vốn chủ) cho mọi hồ sơ', owner: 'Chuyên viên tín dụng', metric: 'Nợ ÷ tài sản; nợ ÷ vốn chủ', threshold: 'Cảnh báo khi nợ ÷ tài sản > 70% hoặc nợ ÷ vốn chủ > 2' },
            { action: 'So tài sản ngắn hạn với nợ ngắn hạn và yêu cầu kế hoạch tái cấp vốn khi < 1', owner: 'Chuyên viên tín dụng', metric: 'Tài sản ngắn hạn ÷ nợ ngắn hạn', threshold: '≥ 1,0' },
            { action: 'Chạy thử kịch bản mất 10% tài sản và xem vốn chủ còn bao nhiêu', owner: 'Quản lý rủi ro', metric: 'Vốn chủ sau kịch bản ÷ vốn chủ hiện tại', threshold: 'Vốn chủ còn > 0 và ≥ 70% giá trị hiện tại' },
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
            { title: 'Coi tài sản lớn là mạnh', why: 'Tài sản có thể do nợ tài trợ; vốn chủ mới là lớp đệm.', instead: 'Đọc phía nguồn vốn và tỷ lệ nợ/vốn chủ.' },
            { title: 'Gộp mọi tài sản như nhau', why: 'Tiền và tài sản cố định khác nhau về khả năng trả nợ nhanh.', instead: 'Tách tài sản ngắn hạn và dài hạn; so với nợ ngắn hạn.' },
            { title: 'Bỏ qua kịch bản xấu', why: 'Bảng cân đối chỉ là ảnh chụp lúc này; mất mát nhỏ có thể xóa phần lớn vốn chủ nếu đòn bẩy cao.', instead: 'Chạy thử kịch bản mất giá tài sản.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Tài sản = nợ phải trả + vốn chủ; đọc cả hai phía để biết ai đang tài trợ.',
    'Vốn chủ là lớp đệm hấp thụ mất mát; tài sản bằng nhau nhưng vốn chủ mỏng thì dễ tổn thương hơn.',
    'So tài sản ngắn hạn với nợ ngắn hạn để đánh giá khả năng trả nợ đến hạn.',
  ],
  references: [
    { title: 'Accounting equation', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Accounting_equation', note: 'Phương trình kế toán và cách các giao dịch giữ cho nó cân bằng.' },
    { title: 'Balance sheet', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Balance_sheet', note: 'Cấu trúc bảng cân đối kế toán: tài sản, nợ phải trả, vốn chủ.' },
    { title: 'IAS 1 Presentation of Financial Statements', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-1-presentation-of-financial-statements/', note: 'Quy định cách phân loại ngắn hạn và dài hạn khi trình bày bảng cân đối.' },
  ],
}
