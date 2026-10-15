import type { CaseStudy } from '../types'

/*
 * Công ty và số liệu hoàn toàn giả định. Đơn vị: tỷ đồng. Lợi nhuận trước thuế (LNTT).
 * LNTT công bố: Năm N−1 400 ; Năm N 520 → +30,0%
 * Khoản mục (N−2 ; N−1 ; N): lãi bán tài sản 0 ; 20 ; 90 | hoàn nhập dự phòng 40 ; 35 ; 45 | chi phí tái cơ cấu 0 ; 0 ; −30 | lãi/lỗ tỷ giá chưa thực hiện 5 ; −5 ; 15
 * Tiêu chí loại: không lặp lại đều qua 3 năm hoặc đổi dấu, và trọng yếu. Hoàn nhập dự phòng xuất hiện cả 3 năm (40 ; 35 ; 45) → coi là thường xuyên, GIỮ lại.
 * Bình thường hóa (giữ hoàn nhập): N = 520 − 90 + 30 − 15 = 445 ; N−1 = 400 − 20 + 5 = 385 → +15,6% (60/385)
 * Nếu loại cả hoàn nhập: N = 445 − 45 = 400 ; N−1 = 385 − 35 = 350 → +14,3% (50/350)
 * Sai lầm điển hình: chỉ loại khoản của năm N, không loại năm N−1: 445 / 400 = +11,3% (sai kỳ vọng).
 */
export const normalizedProfitOneOffItems: CaseStudy = {
  id: 'normalized-profit-one-off-items',
  title: 'Lợi nhuận "bình thường hóa": loại khoản bất thường nào, theo tiêu chí gì, và kiểm chứng ra sao?',
  domain: 'accounting',
  level: 'junior',
  minutes: 12,
  skills: ['financial-statements', 'data-quality', 'causal'],
  question:
    'Lợi nhuận trước thuế năm nay tăng 30%, nhưng có nhiều khoản không thường xuyên. Khi bình thường hóa, tăng trưởng thật là bao nhiêu, loại khoản nào theo tiêu chí gì, và nhìn kết quả có nhạy với lựa chọn không?',
  summary:
    'Xây tiêu chí loại khoản bất thường, áp dụng nhất quán cho cả hai năm, so tăng trưởng qua nhiều phương án và kiểm chứng bằng thuyết minh.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Ban điều hành công bố: *"Lợi nhuận trước thuế tăng 30%."* Nhà đầu tư hỏi mức tăng này có bền không. Báo cáo có bốn khoản bất thường tiềm năng, nên bạn cần bình thường hóa lợi nhuận.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Công ty và số liệu đều **giả định, mô phỏng**. Việc phân loại khoản mục là phán đoán, cần dựa trên thuyết minh báo cáo tài chính; cách trình bày chính thức cần người có chuyên môn rà.',
        },
        {
          kind: 'table',
          title: 'Lợi nhuận trước thuế công bố (tỷ đồng)',
          columns: [
            { key: 'item', label: 'Chỉ tiêu' },
            { key: 'y0', label: 'Năm N−1', align: 'right' },
            { key: 'y1', label: 'Năm N', align: 'right' },
            { key: 'g', label: 'Tăng', align: 'right' },
          ],
          rows: [{ item: 'LNTT công bố', y0: '400', y1: '520', g: '+30,0%' }],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: tiêu chí loại khoản bất thường',
      blocks: [
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Bản chất**: khoản đó có thuộc hoạt động kinh doanh thường xuyên không?',
            '**Tần suất**: có xuất hiện đều qua nhiều năm không? Nếu xuất hiện hằng năm với quy mô tương tự thì không phải bất thường.',
            '**Trọng yếu**: giá trị đủ lớn so với lợi nhuận (ví dụ > 5%) mới đáng loại.',
            '**Nhất quán**: áp dụng cùng tiêu chí cho **cả hai kỳ** so sánh, và loại cả khoản lãi lẫn khoản lỗ.',
          ],
        },
        {
          kind: 'quiz',
          id: 'normalized-q1',
          question: 'Vì sao phải áp dụng cùng tiêu chí loại cho cả năm N−1 và năm N?',
          options: [
            { id: 'a', text: 'Vì nếu chỉ loại ở một kỳ, mức tăng trưởng giữa hai kỳ bị méo.', correct: true, explain: 'Đúng. So lợi nhuận bình thường hóa với lợi nhuận chưa bình thường hóa là so hai đại lượng khác bản chất.' },
            { id: 'b', text: 'Vì chuẩn mực bắt buộc loại ở cả hai kỳ.', explain: 'Không phải quy định bắt buộc; đây là yêu cầu của phép so sánh có ý nghĩa.' },
            { id: 'c', text: 'Vì dữ liệu năm N−1 dễ lấy.', explain: 'Không phải lý do phương pháp.' },
          ],
        },
      ],
    },
    {
      id: 'items',
      kind: 'analysis',
      title: 'Bước 1 — Kiểm tra tần suất của từng khoản qua 3 năm',
      blocks: [
        {
          kind: 'table',
          title: 'Các khoản mục qua 3 năm (tỷ đồng; dương = làm tăng lợi nhuận)',
          columns: [
            { key: 'item', label: 'Khoản mục' },
            { key: 'a', label: 'N−2', align: 'right' },
            { key: 'b', label: 'N−1', align: 'right' },
            { key: 'c', label: 'N', align: 'right' },
            { key: 'dec', label: 'Quyết định' },
          ],
          rows: [
            { item: 'Lãi bán/thanh lý tài sản', a: '0', b: '20', c: '90', dec: 'Loại: không đều, tăng đột biến' },
            { item: 'Hoàn nhập dự phòng', a: '40', b: '35', c: '45', dec: 'Giữ: xuất hiện đều cả 3 năm' },
            { item: 'Chi phí tái cơ cấu', a: '0', b: '0', c: '−30', dec: 'Loại (cộng lại): chỉ năm N' },
            { item: 'Lãi/lỗ tỷ giá chưa thực hiện', a: '5', b: '−5', c: '15', dec: 'Loại: đổi dấu, khó dự báo' },
          ],
          highlight: [{ row: 1, tone: 'positive' }],
          caption: 'Hoàn nhập dự phòng lặp lại đều (40 ; 35 ; 45) nên coi là phần thường xuyên của kết quả; loại nó mà không loại chi phí lập dự phòng thì lệch một phía.',
        },
      ],
    },
    {
      id: 'normalize',
      kind: 'analysis',
      title: 'Bước 2 — Tính lợi nhuận bình thường hóa và độ nhạy',
      blocks: [
        {
          kind: 'table',
          title: 'Từ LNTT công bố sang LNTT bình thường hóa (tỷ đồng)',
          columns: [
            { key: 'step', label: 'Bước' },
            { key: 'y0', label: 'Năm N−1', align: 'right' },
            { key: 'y1', label: 'Năm N', align: 'right' },
          ],
          rows: [
            { step: 'LNTT công bố', y0: '400', y1: '520' },
            { step: 'Trừ lãi bán tài sản', y0: '−20', y1: '−90' },
            { step: 'Cộng chi phí tái cơ cấu', y0: '0', y1: '+30' },
            { step: 'Bỏ ảnh hưởng tỷ giá chưa thực hiện', y0: '+5', y1: '−15' },
            { step: 'LNTT bình thường hóa (giữ hoàn nhập dự phòng)', y0: '385', y1: '445' },
          ],
          highlight: [{ row: 4, tone: 'positive' }],
          caption: 'Tăng trưởng bình thường hóa = 445 / 385 − 1 = +15,6%, bằng khoảng một nửa mức +30,0% công bố.',
        },
        {
          kind: 'table',
          title: 'Độ nhạy: tăng trưởng theo từng cách bình thường hóa',
          columns: [
            { key: 'v', label: 'Phương án' },
            { key: 'g', label: 'Năm N−1 → N', align: 'right' },
            { key: 'gr', label: 'Tăng', align: 'right' },
          ],
          rows: [
            { v: 'Không điều chỉnh', g: '400 → 520', gr: '+30,0%' },
            { v: 'Bình thường hóa, giữ hoàn nhập dự phòng', g: '385 → 445', gr: '+15,6%' },
            { v: 'Bình thường hóa, loại luôn hoàn nhập', g: '350 → 400', gr: '+14,3%' },
            { v: 'Sai: chỉ loại khoản năm N, bỏ qua năm N−1', g: '400 → 445', gr: '+11,3%' },
          ],
          highlight: [{ row: 3, tone: 'negative' }],
          caption: 'Hai phương án nhất quán cho kết quả gần nhau (+15,6% và +14,3%); phương án sai lệch xa. Kết quả không quá nhạy với việc giữ hay loại hoàn nhập, nhưng nhạy với tính nhất quán.',
        },
        {
          kind: 'quiz',
          id: 'normalized-q2',
          question: 'Từ bảng độ nhạy, kết luận nào đúng?',
          options: [
            { id: 'a', text: 'Tăng trưởng thực khoảng 14–16%, thấp hơn nhiều mức 30% công bố; lỗi không nhất quán cho kết quả sai.', correct: true, explain: 'Đúng. Hai phương án nhất quán gần nhau; phương án sai lệch rõ.' },
            { id: 'b', text: 'Tăng trưởng thực chính xác là 15,6%.', explain: 'Có sự lựa chọn chủ quan; nên nêu khoảng và giả định.' },
            { id: 'c', text: 'Không thể bình thường hóa vì mọi khoản đều chủ quan.', explain: 'Chủ quan nhưng có thể nêu tiêu chí và kiểm tra độ nhạy.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: quy trình bình thường hóa có thể kiểm chứng',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận trên dữ liệu giả định:** tăng trưởng LNTT bình thường hóa vào khoảng +14,3% đến +15,6%, không phải +30,0%. Báo cáo nên nêu tiêu chí, bảng đối chiếu từng khoản và độ nhạy. Các chỉ tiêu "đã điều chỉnh" do ban điều hành tự định nghĩa cần được đối chiếu với báo cáo tài chính đã công bố; chuẩn mực mới (IFRS 18) đặt ra yêu cầu công bố riêng cho nhóm chỉ tiêu này, nên cần người có chuyên môn rà khi áp dụng.',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Lập bảng đối chiếu LNTT công bố sang LNTT bình thường hóa, ghi nguồn thuyết minh của từng khoản', owner: 'Analyst tài chính', metric: 'Số khoản được điều chỉnh có nguồn thuyết minh', threshold: '100% khoản điều chỉnh có nguồn' },
            { action: 'Áp dụng cùng tiêu chí cho tối thiểu 3 năm và cả hai chiều (lãi và lỗ)', owner: 'Analyst tài chính', metric: 'Số năm áp dụng nhất quán', threshold: '≥ 3 năm' },
            { action: 'Báo cáo tăng trưởng kèm độ nhạy theo ít nhất hai phương án loại khoản', owner: 'Trưởng nhóm phân tích', metric: 'Khoảng tăng trưởng', threshold: 'Chênh giữa các phương án > 5 điểm % thì nêu rõ' },
          ],
        },
        {
          kind: 'quiz',
          id: 'normalized-q3',
          question: 'Công ty chỉ loại các khoản lãi bất thường khỏi lợi nhuận nhưng giữ các khoản lỗ bất thường. Vấn đề là gì?',
          options: [
            { id: 'a', text: 'Lợi nhuận bình thường hóa bị lệch một phía, đánh giá thấp hơn thực chất.', correct: true, explain: 'Đúng. Phải xử lý cả hai chiều; ở đây chi phí tái cơ cấu được cộng lại như một ví dụ.' },
            { id: 'b', text: 'Không vấn đề gì vì lỗ nên thận trọng giữ lại.', explain: 'Thận trọng không phải lý do để đo một phía; tiêu chí phải đối xứng.' },
            { id: 'c', text: 'Chỉ ảnh hưởng đến thuế.', explain: 'Ảnh hưởng đến đánh giá lợi nhuận bền vững, không chỉ thuế.' },
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
            { title: 'Loại ở một kỳ, giữ ở kỳ kia', why: 'Tăng trưởng giữa hai kỳ bị méo (+11,3% thay vì ~+15%).', instead: 'Áp dụng cùng tiêu chí cho mọi kỳ so sánh.' },
            { title: 'Chỉ loại khoản lãi, giữ khoản lỗ', why: 'Lợi nhuận bình thường hóa lệch một phía.', instead: 'Xử lý đối xứng; giải thích từng khoản.' },
            { title: 'Loại khoản lặp lại hằng năm', why: 'Hoàn nhập dự phòng xuất hiện đều là một phần thường xuyên.', instead: 'Kiểm tra tần suất qua ≥ 3 năm.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Bình thường hóa cần tiêu chí rõ: bản chất, tần suất, trọng yếu, nhất quán.',
    'Áp dụng cùng tiêu chí cho mọi kỳ so sánh và xử lý cả lãi lẫn lỗ; kiểm tra độ nhạy.',
    'Chỉ tiêu "điều chỉnh" do ban điều hành định nghĩa phải đối chiếu với thuyết minh đã công bố.',
  ],
  references: [
    { title: 'IFRS 18 Presentation and Disclosure in Financial Statements', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-18-presentation-and-disclosure-in-financial-statements/', note: 'Trang chuẩn mực về trình bày và công bố trong báo cáo tài chính, nơi tra khi cần đối chiếu cách công bố các chỉ tiêu hiệu quả do ban điều hành định nghĩa.' },
    { title: 'IAS 1 Presentation of Financial Statements', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-1-presentation-of-financial-statements/', note: 'Trang chuẩn mực trình bày báo cáo tài chính hiện hành, nền để biết các khoản mục nằm ở đâu trong báo cáo.' },
    { title: 'Financial statement analysis', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Financial_statement_analysis', note: 'Tổng quan kỹ thuật phân tích báo cáo tài chính và các điều chỉnh thường gặp.' },
  ],
}
