import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG, không phải biểu giá của ngân hàng hay quyết định chính sách có thật).
 * Khoản vay: 1,5 tỷ đ, 20 năm (240 tháng), trả góp đều (annuity), lãi tính theo dư nợ giảm dần.
 *   Lãi suất điều hành (tái cấp vốn, mô phỏng) 4,5% · lãi huy động 12 tháng (cơ sở) 5,0% · lạm phát 4,0%
 *   Gói A: ưu đãi 6,5% trong 24 tháng, sau đó thả nổi = cơ sở 5,0% + biên 4,5% = 9,5%
 *     Trả góp tháng 1–24: 11,18 tr · dư nợ sau 24 tháng 1.421,8 tr · từ tháng 25 (216 tháng còn lại): 13,76 tr
 *     (+2,58 tr; +23,1%) · tổng lãi 20 năm 1.741,0 tr (nếu giữ 6,5% suốt kỳ chỉ là 1.184,1 tr)
 *     Lãi thực xấp xỉ = danh nghĩa − lạm phát: ưu đãi 6,5 − 4,0 = 2,5% · thả nổi 9,5 − 4,0 = 5,5%
 *   Gói B: 8,0% trong 60 tháng, sau đó 9,5%: 12,55 tr/tháng → 13,71 tr · tổng lãi 1.720,5 tr
 *   Cùng dư nợ 1.421,8 tr, 216 tháng, mức thả nổi 7,5 / 8,5 / 9,5 / 10,5% → 12,01 / 12,87 / 13,76 / 14,68 tr
 *   Thu nhập hộ 40 tr/tháng: DSR (trả góp / thu nhập) 11,18 → 27,96% ≈ 28,0%; 13,76 → 34,41% ≈ 34,4%
 *   Giả định mức thả nổi giữ 9,5% suốt kỳ chỉ để so sánh, không phải dự báo.
 */
export const mortgageRateReading: CaseStudy = {
  id: 'mortgage-rate-reading',
  title: 'Đọc đúng lãi suất vay mua nhà: ưu đãi hết hạn thì trả bao nhiêu?',
  domain: 'macro',
  level: 'fresher',
  minutes: 9,
  skills: ['macro', 'metric-definition'],
  question:
    'Hai gói vay mua nhà quảng cáo lãi suất ưu đãi khác nhau. "Lãi suất" nào thật sự quyết định số tiền trả hằng tháng, và khác lãi suất điều hành ở chỗ nào?',
  summary:
    'Phân biệt lãi suất điều hành, lãi suất huy động, lãi suất ưu đãi và thả nổi; tính lại khoản trả góp sau khi hết ưu đãi và đọc lãi suất danh nghĩa so với lãi suất thực.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst ở một công ty fintech so sánh sản phẩm vay mua nhà (**số liệu hoàn toàn mô phỏng**). Bản tin tuần này có hai dòng dễ gây hiểu nhầm: *"Ngân hàng trung ương giữ lãi suất điều hành 4,5%"* và *"Gói A: vay chỉ từ 6,5%/năm"*. Đồng nghiệp ở bộ phận nội dung hỏi: *"Vậy người vay 1,5 tỷ đ trong 20 năm sẽ trả bao nhiêu mỗi tháng, và con số 6,5% có đáng tin không?"*',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Lãi suất điều hành (mô phỏng)', value: '4,5%/năm', tone: 'neutral', note: 'Ngân hàng cho ngân hàng vay, không phải lãi suất bạn trả' },
            { label: 'Gói A: ưu đãi 24 tháng', value: '6,5%/năm', tone: 'positive' },
            { label: 'Gói A: sau ưu đãi', value: '9,5%/năm', tone: 'warning', note: 'Thả nổi = lãi huy động 5,0% + biên 4,5%' },
            { label: 'Lạm phát (mô phỏng)', value: '4,0%/năm', tone: 'neutral' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu của buổi phân tích',
          md: 'Trả lời 3 câu: **lãi suất nào ảnh hưởng đến khoản trả của người vay**, **khoản trả thay đổi bao nhiêu khi hết ưu đãi**, và **lãi suất thực khác gì lãi suất ghi trên hợp đồng**. Đây là bài đọc số, không phải tư vấn chọn gói vay.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: một "lãi suất" thực ra là nhiều lớp',
      blocks: [
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Lãi suất điều hành**: do ngân hàng trung ương đặt cho quan hệ với ngân hàng thương mại (ví dụ lãi suất tái cấp vốn). Nó là tín hiệu và chi phí vốn tham chiếu, không phải biểu giá người vay nhìn thấy.',
            '**Lãi suất huy động** (tiền gửi): chi phí vốn thực của ngân hàng, thường là mốc để tính lãi thả nổi.',
            '**Lãi suất cho vay** = lãi suất cơ sở + biên độ. Phần *ưu đãi* là mức cố định trong thời hạn ngắn; phần *thả nổi* thay đổi theo kỳ điều chỉnh ghi trong hợp đồng.',
            '**Lãi suất thực** = lãi suất danh nghĩa trừ lạm phát: cho biết sức mua của khoản lãi, không thay đổi số tiền phải trả.',
          ],
        },
        {
          kind: 'formula',
          expression: 'Trả góp tháng = Vay × i / (1 − (1 + i)^(−n)), với i = lãi suất năm / 12, n = số tháng còn lại',
          note: 'Khi hết ưu đãi, tính lại với **dư nợ còn lại**, **lãi suất mới** và **số tháng còn lại**, không phải với số vay ban đầu.',
        },
        {
          kind: 'quiz',
          id: 'mortgage-rate-reading-q1',
          question: 'Ngân hàng trung ương giữ lãi suất điều hành 4,5%. Điều này nói gì về lãi suất vay mua nhà của một người vay cụ thể?',
          options: [
            {
              id: 'a',
              text: 'Người vay sẽ trả đúng 4,5%/năm.',
              explain: 'Lãi suất điều hành áp dụng cho quan hệ giữa ngân hàng trung ương và ngân hàng thương mại. Lãi suất cho vay còn cộng chi phí huy động, biên độ cho rủi ro và chi phí vận hành, nên cao hơn đáng kể.',
            },
            {
              id: 'b',
              text: 'Nó là một tín hiệu về mặt bằng chi phí vốn, nhưng mức người vay trả được quyết định bởi hợp đồng: lãi cơ sở, biên độ, thời hạn ưu đãi và kỳ điều chỉnh.',
              correct: true,
              explain: 'Đúng. Lãi suất điều hành ảnh hưởng gián tiếp qua chi phí vốn, còn số tiền phải trả đọc từ điều khoản hợp đồng. Hai thứ có thể đi khác hướng trong vài tháng.',
            },
            {
              id: 'c',
              text: 'Nếu lãi suất điều hành không đổi thì lãi suất thả nổi chắc chắn không đổi.',
              explain: 'Lãi thả nổi gắn với lãi cơ sở của ngân hàng (thường theo lãi huy động), vốn có thể đổi dù lãi suất điều hành đứng yên.',
            },
          ],
        },
      ],
    },
    {
      id: 'reset',
      kind: 'analysis',
      title: 'Bước 1 — Hết ưu đãi: khoản trả tháng tăng bao nhiêu?',
      blocks: [
        {
          kind: 'table',
          title: 'Gói A: vay 1,5 tỷ đ, 20 năm, trả góp đều (mô phỏng)',
          columns: [
            { key: 'phase', label: 'Giai đoạn' },
            { key: 'rate', label: 'Lãi suất', align: 'right' },
            { key: 'months', label: 'Số tháng', align: 'right' },
            { key: 'pay', label: 'Trả góp/tháng', align: 'right' },
            { key: 'dsr', label: 'DSR (thu nhập 40 tr)', align: 'right' },
          ],
          rows: [
            { phase: 'Ưu đãi', rate: '6,5%', months: '24', pay: '11,18 triệu đ', dsr: '28,0%' },
            { phase: 'Thả nổi (dư nợ 1.421,8 triệu đ)', rate: '9,5%', months: '216', pay: '13,76 triệu đ', dsr: '34,4%' },
          ],
          highlight: [{ row: 1, tone: 'warning' }],
          caption: 'Khoản trả tăng 2,58 triệu đ/tháng (+23,1%) dù người vay không vay thêm đồng nào. DSR là tỷ lệ trả nợ trên thu nhập.',
        },
        {
          kind: 'chart',
          title: 'Trả góp tháng sau ưu đãi theo mức lãi thả nổi (triệu đ, dư nợ 1.421,8 triệu, 216 tháng)',
          type: 'bar',
          xKey: 'rate',
          unit: ' tr',
          series: [{ key: 'pay', label: 'Trả góp/tháng' }],
          data: [
            { rate: 'Thả nổi 7,5%', pay: 12.01 },
            { rate: 'Thả nổi 8,5%', pay: 12.87 },
            { rate: 'Thả nổi 9,5%', pay: 13.76 },
            { rate: 'Thả nổi 10,5%', pay: 14.68 },
          ],
          caption: 'Mỗi +1 điểm % lãi thả nổi làm khoản trả tăng khoảng 0,9 triệu đ/tháng. Các mức này là kịch bản so sánh, không phải dự báo.',
        },
        {
          kind: 'quiz',
          id: 'mortgage-rate-reading-q2',
          question: 'Một đồng nghiệp lấy 11,18 triệu đ "trả hằng tháng" làm con số cố định cho cả 20 năm. Điểm sai chính là gì?',
          options: [
            {
              id: 'a',
              text: 'Phép tính trả góp đều luôn sai khi vay dài hạn.',
              explain: 'Công thức trả góp đều đúng cho từng giai đoạn lãi suất không đổi. Sai ở chỗ áp dụng một giai đoạn cho toàn kỳ.',
            },
            {
              id: 'b',
              text: 'Con số chỉ đúng trong 24 tháng ưu đãi; sau đó phải tính lại trên dư nợ còn lại với lãi suất thả nổi, ra 13,76 triệu đ.',
              correct: true,
              explain: 'Đúng. Số 11,18 triệu đ chỉ áp dụng 24 tháng đầu. Báo cáo nên trình bày cả hai giai đoạn và DSR tương ứng.',
            },
            {
              id: 'c',
              text: 'Lẽ ra phải dùng lãi suất điều hành 4,5% để tính.',
              explain: 'Lãi suất điều hành không phải lãi người vay trả, dùng nó sẽ đánh giá thấp khoản trả.',
            },
          ],
        },
      ],
    },
    {
      id: 'compare',
      kind: 'analysis',
      title: 'Bước 2 — So hai gói: lãi ưu đãi thấp chưa chắc tổng chi phí thấp',
      blocks: [
        {
          kind: 'table',
          title: 'Hai gói vay cùng 1,5 tỷ đ, 20 năm (giả định thả nổi giữ 9,5% suốt kỳ)',
          columns: [
            { key: 'offer', label: 'Gói' },
            { key: 'promo', label: 'Ưu đãi' },
            { key: 'p1', label: 'Trả/tháng giai đoạn đầu', align: 'right' },
            { key: 'p2', label: 'Trả/tháng sau ưu đãi', align: 'right' },
            { key: 'total', label: 'Tổng lãi 20 năm', align: 'right' },
          ],
          rows: [
            { offer: 'Gói A', promo: '6,5% × 24 tháng', p1: '11,18 triệu đ', p2: '13,76 triệu đ', total: '1.741,0 triệu đ' },
            { offer: 'Gói B', promo: '8,0% × 60 tháng', p1: '12,55 triệu đ', p2: '13,71 triệu đ', total: '1.720,5 triệu đ' },
          ],
          caption: 'Gói A rẻ hơn lúc đầu 1,37 triệu đ/tháng nhưng tổng lãi cao hơn gói B khoảng 20,5 triệu đ trong kịch bản này. Kết quả đổi chiều nếu lãi thả nổi thay đổi hoặc người vay trả nợ trước hạn (có thể kèm phí).',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'So sánh gói vay cần ít nhất 3 con số: **trả góp giai đoạn ưu đãi**, **trả góp sau ưu đãi**, **tổng lãi theo giả định nêu rõ**. Một con số quảng cáo đứng riêng gần như luôn thiếu ngữ cảnh. Hãy ghi rõ giả định (thả nổi giữ nguyên) để người đọc biết đó là kịch bản chứ không phải dự báo.',
        },
      ],
    },
    {
      id: 'real',
      kind: 'analysis',
      title: 'Bước 3 — Danh nghĩa và thực: hai câu hỏi khác nhau',
      blocks: [
        {
          kind: 'table',
          title: 'Lãi suất danh nghĩa và lãi suất thực xấp xỉ (lạm phát mô phỏng 4,0%)',
          columns: [
            { key: 'rate', label: 'Loại lãi suất' },
            { key: 'nominal', label: 'Danh nghĩa', align: 'right' },
            { key: 'real', label: 'Thực (≈ danh nghĩa − lạm phát)', align: 'right' },
          ],
          rows: [
            { rate: 'Lãi suất điều hành', nominal: '4,5%', real: '0,5%' },
            { rate: 'Lãi huy động 12 tháng', nominal: '5,0%', real: '1,0%' },
            { rate: 'Cho vay ưu đãi (Gói A)', nominal: '6,5%', real: '2,5%' },
            { rate: 'Cho vay thả nổi (Gói A)', nominal: '9,5%', real: '5,5%' },
          ],
          highlight: [{ row: 3, tone: 'warning' }],
          caption: 'Công thức gần đúng r ≈ i − π. Chính xác hơn dùng (1 + i) / (1 + π) − 1.',
        },
        {
          kind: 'text',
          md: 'Lãi suất thực trả lời câu hỏi *"vay đắt hay rẻ so với mặt bằng giá"*, hữu ích khi đánh giá mặt bằng chính sách. Nhưng ngân hàng thu và người vay trả bằng **tiền danh nghĩa**: số tiền trong sao kê vẫn là 13,76 triệu đ dù lạm phát là bao nhiêu. Thu nhập của người vay có tăng theo lạm phát hay không mới quyết định gánh nặng thực tế. Xem thêm [Real interest rate](https://en.wikipedia.org/wiki/Real_interest_rate).',
        },
        {
          kind: 'quiz',
          id: 'mortgage-rate-reading-q3',
          question: 'Lạm phát mô phỏng là 4,0%, lãi thả nổi 9,5%. Câu nào đọc đúng?',
          options: [
            {
              id: 'a',
              text: 'Lãi thực khoảng 5,5%; khoản trả hằng tháng trong sao kê vẫn tính theo 9,5%.',
              correct: true,
              explain: 'Đúng. Lãi thực chỉ là phép quy đổi để hiểu mức đắt/rẻ, còn số tiền phải trả luôn theo lãi danh nghĩa trong hợp đồng.',
            },
            {
              id: 'b',
              text: 'Vì lạm phát 4,0% nên người vay chỉ phải trả lãi 5,5% trong sao kê.',
              explain: 'Ngân hàng không trừ lạm phát khỏi lãi tính trên hợp đồng.',
            },
            {
              id: 'c',
              text: 'Lãi thực âm hay dương không phụ thuộc lạm phát.',
              explain: 'Lãi thực chính là lãi danh nghĩa sau khi trừ lạm phát, nên phụ thuộc trực tiếp vào lạm phát.',
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
          md: '**Kết luận cho bản tin:** lãi suất điều hành chỉ là tín hiệu nền; khoản trả của người vay đọc từ hợp đồng. Trong kịch bản mô phỏng, hết ưu đãi 24 tháng làm trả góp tăng từ 11,18 lên 13,76 triệu đ/tháng (+23,1%) và DSR từ 28,0% lên 34,4%. Nên trình bày **hai giai đoạn kèm giả định**, thay vì một con số ưu đãi.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Chuẩn hóa bảng so sánh gói vay: luôn hiện lãi ưu đãi, thời hạn ưu đãi, công thức lãi thả nổi, trả góp 2 giai đoạn và tổng lãi theo giả định ghi rõ',
              owner: 'Product analyst + Content',
              metric: 'Tỷ lệ gói có đủ 5 trường thông tin',
              threshold: '100% gói vay đăng tải',
            },
            {
              action: 'Thêm bảng nhạy cảm: khoản trả sau ưu đãi ở các mức lãi thả nổi ±1 và ±2 điểm %',
              owner: 'Data/Analytics',
              metric: 'Số kịch bản hiển thị',
              threshold: '≥ 4 mức, ghi chú đây không phải dự báo',
            },
            {
              action: 'Tách lãi suất điều hành, lãi huy động và lãi cho vay trong mọi báo cáo, gắn nhãn danh nghĩa/thực',
              owner: 'Research',
              metric: 'Số báo cáo dùng lẫn các khái niệm',
              threshold: '0 sau rà soát biên tập',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Sai lầm phổ biến nhất khi đọc lãi vay không nằm ở phép tính mà ở **đọc nhầm khái niệm và bỏ giai đoạn sau**. Trình bày đủ hai giai đoạn cùng giả định giúp người đọc tự đánh giá khả năng chi trả mà không cần ai khuyên chọn gói nào.',
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
              title: 'Đồng nhất lãi suất điều hành với lãi suất cho vay',
              why: 'Hai mức này nằm ở hai tầng khác nhau; trong ví dụ cách nhau 5 điểm %, và lãi cho vay còn phụ thuộc biên độ và kỳ điều chỉnh.',
              instead: 'Nêu rõ "lãi suất" nào ở mỗi câu; coi lãi điều hành là tín hiệu chi phí vốn, đọc khoản trả từ hợp đồng.',
            },
            {
              title: 'Chỉ nhìn lãi ưu đãi',
              why: 'Lãi ưu đãi chỉ áp dụng một phần thời hạn vay; phần thả nổi mới quyết định đa số khoản lãi trả trong 20 năm.',
              instead: 'Luôn tính lại khoản trả sau ưu đãi trên dư nợ còn lại, kèm kịch bản nhạy cảm.',
            },
            {
              title: 'Nhầm lãi thực với số tiền phải trả',
              why: 'Lãi thực là thước đo kinh tế; sao kê hằng tháng tính theo lãi danh nghĩa.',
              instead: 'Dùng danh nghĩa cho dòng tiền, thực cho so sánh với mặt bằng giá, và ghi nhãn rõ.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Lãi suất điều hành là tín hiệu chi phí vốn; số tiền người vay trả đọc từ lãi cơ sở, biên độ, thời hạn ưu đãi và kỳ điều chỉnh trong hợp đồng.',
    'Hết ưu đãi phải tính lại trả góp trên dư nợ còn lại và số tháng còn lại, và so DSR trước/sau.',
    'Lãi thực = danh nghĩa − lạm phát chỉ để đánh giá mặt bằng; dòng tiền phải trả luôn theo lãi danh nghĩa.',
  ],
  references: [
    {
      title: 'Ngân hàng Nhà nước Việt Nam điều chỉnh lãi suất điều hành',
      publisher: 'Ngân hàng Nhà nước Việt Nam',
      url: 'https://www.sbv.gov.vn/en/web/sbv_portal/w/sbv564625',
      note: 'Thông cáo chính thức nêu các loại lãi suất điều hành (tái cấp vốn, chiết khấu, cho vay qua đêm) để phân biệt với lãi suất cho vay của ngân hàng thương mại.',
    },
    {
      title: 'What is the difference between a fixed-rate and adjustable-rate mortgage (ARM)?',
      publisher: 'Consumer Financial Protection Bureau (Mỹ)',
      url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-fixed-rate-and-adjustable-rate-mortgage-arm-en-100/',
      note: 'Giải thích lãi suất cố định so với điều chỉnh, giai đoạn ưu đãi và việc khoản trả có thể tăng khi lãi suất được đặt lại.',
    },
    {
      title: 'Real interest rate',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Real_interest_rate',
      note: 'Định nghĩa lãi suất thực và danh nghĩa, phương trình Fisher và công thức gần đúng r ≈ i − π.',
    },
  ],
}
