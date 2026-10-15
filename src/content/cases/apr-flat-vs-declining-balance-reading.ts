import type { CaseStudy } from '../types'

/*
 * Số liệu mock: khoản vay 12.000.000 đ, 12 tháng, đã kiểm tra bằng tính toán:
 *   Lãi flat 1%/tháng trên gốc ban đầu: 120.000 đ/tháng × 12 = 1.440.000 đ · trả mỗi tháng (12.000.000 + 1.440.000) ÷ 12 = 1.120.000 đ
 *   Dư nợ bình quân ~6.500.000 đ (gốc trả đều 1.000.000/tháng) → tiền lãi/dư nợ bình quân = 1.440.000 ÷ (6.500.000) ≈ 22,2%/năm
 *   Lãi suất tháng hiệu dụng (giải 12.000.000 = 1.120.000 × [1 − (1+r)^−12] ÷ r): r ≈ 1,788%/tháng
 *     → danh nghĩa năm (×12) ≈ 21,46% · hiệu dụng năm (1+r)^12 − 1 ≈ 23,70%
 *   So sánh dư nợ giảm dần 1%/tháng: trả đều 1.066.185 đ/tháng · tổng lãi ≈ 794.226 đ (khác 1.440.000)
 *   Thêm phí hồ sơ 2% (240.000 đ trừ vào tiền giải ngân, nhận 11.760.000) với trả 1.120.000/tháng: r ≈ 2,117%/tháng
 *     → danh nghĩa năm ≈ 25,40% · hiệu dụng ≈ 28,58%
 */
export const aprFlatVsDecliningBalanceReading: CaseStudy = {
  id: 'apr-flat-vs-declining-balance-reading',
  title: 'Lãi "flat 1%/tháng": thực chất là bao nhiêu phần trăm một năm?',
  domain: 'lending',
  level: 'fresher',
  minutes: 9,
  skills: ['unit-economics', 'metric-definition', 'valuation'],
  question: 'Một khoản vay tiêu dùng quảng cáo lãi "flat 1%/tháng", tức 12%/năm. So với lãi tính trên dư nợ giảm dần, chi phí vay thật sự là bao nhiêu?',
  summary: 'Tính lãi suất hiệu dụng (APR) của khoản vay flat: vì sao 12% flat không bằng 12% dư nợ giảm dần, và phí hồ sơ làm chi phí thật tăng thế nào.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Anh Minh cần vay **12 triệu đ** trong **12 tháng** để mua điện thoại. Cửa hàng liên kết với một công ty tài chính quảng cáo *"trả góp lãi suất chỉ 1%/tháng"*. Nhân viên bán hàng nói: *"1%/tháng, tức 12%/năm, rẻ hơn thẻ tín dụng"*. Anh Minh nhờ bạn kiểm tra con số này có đúng không.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Khoản vay và các điều khoản là **giả định**. Cách công bố lãi suất cho vay tiêu dùng thực tế chịu quy định riêng; bài chỉ giúp bạn hiểu phép tính. Với quy định pháp lý cụ thể, hãy xem văn bản của cơ quan quản lý (ví dụ Ngân hàng Nhà nước).',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Số tiền vay / kỳ hạn', value: '12 triệu đ / 12 tháng', tone: 'neutral' },
            { label: 'Lãi quảng cáo', value: 'flat 1%/tháng', delta: '= 12%/năm theo cách nói', tone: 'neutral' },
            { label: 'Trả mỗi tháng', value: '1.120.000 đ', delta: 'tổng trả 13,44 triệu đ', tone: 'warning' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: lãi tính trên cái gì?',
      blocks: [
        {
          kind: 'text',
          md: '**Lãi flat** tính trên **số tiền vay ban đầu** cho cả kỳ hạn, dù mỗi tháng bạn đã trả bớt gốc. **Lãi dư nợ giảm dần** tính trên số dư gốc còn lại của từng tháng. Với flat 1%/tháng, anh Minh trả lãi 120.000 đ mỗi tháng, kể cả khi tháng cuối chỉ còn nợ gốc 1.000.000 đ. Vì vậy chi phí vay thật cao hơn con số quảng cáo.',
        },
        {
          kind: 'formula',
          expression: 'Tổng lãi flat = Gốc × Lãi suất tháng × Số tháng · Trả mỗi tháng = (Gốc + Tổng lãi) ÷ Số tháng',
          note: 'Lãi suất hiệu dụng (APR theo cách đo thực tế) là lãi suất tháng r thỏa mãn: Gốc = Σ khoản trả mỗi tháng ÷ (1 + r)^t. Không có công thức đóng cho r, thường dùng hàm IRR hoặc RATE trong bảng tính.',
        },
        {
          kind: 'quiz',
          id: 'apr-flat-vs-declining-balance-reading-q1',
          question: 'Khoản vay 12 triệu đ, trả gốc đều 1 triệu đ/tháng. Sang tháng thứ 12 anh Minh còn nợ gốc 1 triệu đ. Lãi flat tháng đó là bao nhiêu?',
          options: [
            {
              id: 'a',
              text: '120.000 đ: lãi flat luôn tính trên 12 triệu đ ban đầu, dù gốc đã trả gần hết.',
              correct: true,
              explain: 'Đúng. Đó là lý do flat đắt hơn dư nợ giảm dần cùng mức phần trăm. Tháng 12 lãi dư nợ giảm dần chỉ khoảng 10.000 đ.',
            },
            {
              id: 'b',
              text: '10.000 đ, bằng 1% của 1 triệu đ còn nợ.',
              explain: 'Đó là cách tính dư nợ giảm dần, không phải flat.',
            },
            {
              id: 'c',
              text: '0 đ vì gần hết nợ.',
              explain: 'Flat vẫn tính lãi đủ mỗi tháng theo gốc ban đầu.',
            },
          ],
        },
      ],
    },
    {
      id: 'compare',
      kind: 'analysis',
      title: 'Bước 1 — So flat với dư nợ giảm dần cùng 1%/tháng',
      blocks: [
        {
          kind: 'table',
          title: 'Hai cách tính lãi cho cùng khoản vay 12 triệu đ, 12 tháng',
          columns: [
            { key: 'item', label: 'Chỉ tiêu' },
            { key: 'flat', label: 'Flat 1%/tháng', align: 'right' },
            { key: 'decl', label: 'Dư nợ giảm dần 1%/tháng', align: 'right' },
          ],
          rows: [
            { item: 'Trả mỗi tháng (đ)', flat: '1.120.000', decl: '≈ 1.066.185' },
            { item: 'Tổng lãi (đ)', flat: '1.440.000', decl: '≈ 794.226' },
            { item: 'Tổng đã trả (đ)', flat: '13.440.000', decl: '≈ 12.794.226' },
            { item: 'Lãi suất tháng hiệu dụng', flat: '≈ 1,79%', decl: '1,00%' },
            { item: 'Lãi suất năm hiệu dụng ((1 + r)^12 − 1)', flat: '≈ 23,7%', decl: '≈ 12,7%' },
          ],
          highlight: [
            { row: 1, tone: 'negative' },
            { row: 4, tone: 'negative' },
          ],
          caption: 'Cùng "1%/tháng", flat tốn thêm khoảng 646.000 đ lãi (1.440.000 − 794.226). Lãi năm hiệu dụng ≈ 23,7% chứ không phải 12%.',
        },
        {
          kind: 'chart',
          title: 'Tiền lãi phải trả mỗi tháng (nghìn đ)',
          type: 'line',
          xKey: 'month',
          unit: ' nghìn đ',
          series: [
            { key: 'flat', label: 'Flat 1%/tháng' },
            { key: 'decl', label: 'Dư nợ giảm dần 1%/tháng' },
          ],
          data: [
            { month: 'Tháng 1', flat: 120, decl: 120 },
            { month: 'Tháng 3', flat: 120, decl: 101 },
            { month: 'Tháng 6', flat: 120, decl: 72 },
            { month: 'Tháng 9', flat: 120, decl: 42 },
            { month: 'Tháng 12', flat: 120, decl: 11 },
          ],
          caption: 'Đường flat nằm ngang 120 nghìn; đường dư nợ giảm dần đi xuống theo số gốc còn lại (làm tròn nghìn đồng).',
        },
        {
          kind: 'quiz',
          id: 'apr-flat-vs-declining-balance-reading-q2',
          question: 'Cách nói nào đúng nhất về "flat 1%/tháng"?',
          options: [
            {
              id: 'a',
              text: 'Lãi suất hiệu dụng cao hơn nhiều so với 12%/năm vì lãi tính trên gốc ban đầu trong khi dư nợ giảm dần; ở ví dụ này khoảng 21–24%/năm tùy cách quy đổi.',
              correct: true,
              explain: 'Đúng. Nhân 1,79% với 12 ra ≈ 21,5% danh nghĩa; lũy kế theo lãi kép năm ≈ 23,7%. Cả hai cao hơn nhiều so với 12%.',
            },
            {
              id: 'b',
              text: 'Đúng bằng 12%/năm vì 1% × 12 tháng.',
              explain: 'Phép nhân đó chỉ đúng khi dư nợ không giảm suốt kỳ vay, không đúng với khoản trả góp.',
            },
            {
              id: 'c',
              text: 'Thấp hơn 12%/năm vì anh Minh trả dần.',
              explain: 'Ngược lại: vì trả dần nên số tiền thực sự đang nợ thấp hơn, trong khi lãi vẫn tính đủ trên gốc cũ.',
            },
          ],
        },
      ],
    },
    {
      id: 'fees',
      kind: 'analysis',
      title: 'Bước 2 — Thêm phí hồ sơ: chi phí thật còn cao hơn',
      blocks: [
        {
          kind: 'text',
          md: 'Giả sử có thêm **phí hồ sơ 2%** (240.000 đ) trừ vào tiền giải ngân: anh Minh chỉ nhận **11.760.000 đ** nhưng vẫn trả 1.120.000 đ mỗi tháng trong 12 tháng. Lãi suất tháng hiệu dụng khi đó tăng lên khoảng **2,12%**, tương đương khoảng **25,4%** nếu nhân 12 hoặc **28,6%** nếu lũy kế theo năm.',
        },
        {
          kind: 'table',
          title: 'Chi phí vay thật khi có phí hồ sơ',
          columns: [
            { key: 'case', label: 'Kịch bản' },
            { key: 'net', label: 'Tiền nhận (đ)', align: 'right' },
            { key: 'pay', label: 'Trả/tháng (đ)', align: 'right' },
            { key: 'r', label: 'Lãi tháng hiệu dụng', align: 'right' },
            { key: 'yr', label: 'Lãi năm hiệu dụng', align: 'right' },
          ],
          rows: [
            { case: 'Flat 1%, không phí', net: '12.000.000', pay: '1.120.000', r: '≈ 1,79%', yr: '≈ 23,7%' },
            { case: 'Flat 1% + phí hồ sơ 2%', net: '11.760.000', pay: '1.120.000', r: '≈ 2,12%', yr: '≈ 28,6%' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
          caption: 'Phí trừ vào tiền nhận làm giảm gốc thực sự được vay, trong khi khoản trả giữ nguyên; lãi hiệu dụng tăng gần 4,9 điểm % mỗi năm.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Khi so các khoản vay, hãy so **tổng chi phí vay hiệu dụng** gồm lãi và mọi loại phí, không so lãi suất công bố. Ngoài ra "APR" ở mỗi nơi có thể được quy ước khác nhau (có/không lãi kép, có/không phí): hãy đọc kỹ cách công bố trong hợp đồng.',
        },
        {
          kind: 'quiz',
          id: 'apr-flat-vs-declining-balance-reading-q3',
          question: 'Anh Minh muốn so hai khoản vay công bố bằng cách khác nhau. Cách so sánh nào hợp lý nhất?',
          options: [
            {
              id: 'a',
              text: 'Lập dòng tiền (số nhận, số trả mỗi tháng) của từng khoản rồi tính lãi suất hiệu dụng (IRR), gồm cả phí.',
              correct: true,
              explain: 'Đúng. Dòng tiền thật là cơ sở chung, tách khỏi cách quảng cáo lãi suất.',
            },
            {
              id: 'b',
              text: 'So con số lãi suất ghi to nhất trên quảng cáo.',
              explain: 'Hai con số có thể dùng quy ước khác nhau (flat với dư nợ giảm dần), nên không so trực tiếp được.',
            },
            {
              id: 'c',
              text: 'Chọn khoản có số tiền trả mỗi tháng thấp nhất.',
              explain: 'Trả ít mỗi tháng có thể do kỳ hạn dài hơn nên tổng lãi lớn hơn.',
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
          md: '**Kết luận cho anh Minh:** "Flat 1%/tháng" không phải 12%/năm. Với dòng tiền của khoản vay, lãi suất tháng hiệu dụng ≈ 1,79%, tức khoảng 21,5%/năm (danh nghĩa) hoặc 23,7%/năm (hiệu dụng); thêm phí hồ sơ 2% thì lên ≈ 25,4–28,6%. Hãy yêu cầu bảng trả nợ chi tiết và so các khoản vay bằng lãi hiệu dụng.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Yêu cầu công ty tài chính cung cấp bảng lịch trả nợ chi tiết (số nhận, số trả, phí) trước khi ký',
              owner: 'Người vay (anh Minh)',
              metric: 'Lãi suất tháng hiệu dụng tính từ dòng tiền',
              threshold: 'Tính được bằng IRR/RATE trong bảng tính',
            },
            {
              action: 'So ít nhất hai phương án vay bằng lãi hiệu dụng và tổng số tiền phải trả',
              owner: 'Người vay (anh Minh)',
              metric: 'Tổng tiền phải trả trên mỗi đồng nhận được',
              threshold: 'Chọn phương án có tỷ lệ thấp hơn; không chọn khi chênh > 5 điểm %/năm mà không có lý do',
            },
            {
              action: 'Với doanh nghiệp tài chính: công bố lãi hiệu dụng cạnh lãi flat theo quy định áp dụng',
              owner: 'Pháp chế + Sản phẩm của công ty tài chính',
              metric: 'Tỷ lệ tài liệu quảng cáo có lãi hiệu dụng',
              threshold: '100%',
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
              title: 'Nhân lãi tháng với 12 rồi gọi đó là lãi năm',
              why: 'Với khoản trả góp, dư nợ giảm dần nên lãi flat nhân 12 bị đánh giá thấp so với chi phí thật.',
              instead: 'Tính lãi hiệu dụng từ dòng tiền (IRR).',
            },
            {
              title: 'Bỏ phí khỏi phép so sánh',
              why: 'Phí trừ vào tiền giải ngân làm tăng đáng kể chi phí thật.',
              instead: 'Đưa mọi phí vào dòng tiền khi tính lãi hiệu dụng.',
            },
            {
              title: 'So số tiền trả mỗi tháng thay vì tổng chi phí',
              why: 'Kỳ hạn dài làm khoản trả hàng tháng thấp nhưng tổng lãi cao.',
              instead: 'So tổng tiền trả và lãi hiệu dụng cho cùng một kỳ hạn quy chiếu.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Flat tính lãi trên gốc ban đầu suốt kỳ vay; dư nợ giảm dần tính trên gốc còn lại, nên cùng phần trăm flat đắt hơn nhiều.',
    'Lãi suất hiệu dụng là lãi tháng r thỏa dòng tiền thật; flat 1%/tháng ở ví dụ ≈ 1,79%/tháng, khoảng 21–24%/năm.',
    'Phí trừ vào tiền giải ngân làm chi phí thật tăng thêm; luôn so bằng dòng tiền gồm cả phí.',
  ],
  references: [
    {
      title: 'Annual percentage rate',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Annual_percentage_rate',
      note: 'Định nghĩa APR và cách nó khác lãi suất danh nghĩa; nền tảng để hiểu vì sao phải quy về một thước đo chung.',
    },
    {
      title: 'Amortization schedule',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Amortization_schedule',
      note: 'Bảng trả nợ theo dư nợ giảm dần: lãi và gốc mỗi kỳ, để đối chiếu với cách tính flat.',
    },
    {
      title: 'Ngân hàng Nhà nước Việt Nam',
      publisher: 'SBV',
      url: 'https://www.sbv.gov.vn',
      note: 'Trang chủ cơ quan quản lý; nơi tìm văn bản chính thức về hoạt động cho vay tiêu dùng.',
    },
  ],
}
