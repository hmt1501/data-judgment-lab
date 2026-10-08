import type { CaseStudy } from '../types'

/*
 * MÔ PHỎNG — tin rao bán căn hộ chung cư ở một quận giả định (không phải địa bàn thật).
 * So sánh quý trước (Q2) → quý này (Q3). Đơn vị giá: triệu đ/m². Mọi số dưới đây là số mock.
 *
 * Tin đăng: thô 1.200 → 1.800 (+50%); tin trùng 180 (15%) → 540 (30%) → 1.020 → 1.260 tin duy nhất (+23,5%).
 *   Tin ảo (giá "mồi", không liên hệ được / đã bán vẫn đăng): 60 (5,9%) → 120 (9,5%) → 960 → 1.140 tin xác minh (+18,8%).
 *   Tin ghi diện tích tim tường: 65% → 35% số tin xác minh.
 * Diện tích: thông thủy ≈ 93% tim tường. Ví dụ căn 70 m² thông thủy ≈ 75,3 m² tim tường (70 ÷ 0,93);
 *   giá 3,5 tỷ → 3.500 ÷ 70 = 50,0 tr/m² (thông thủy) vs 3.500 ÷ 75,3 ≈ 46,5 tr/m² (tim tường), chênh −7,0%.
 * Cầu nối "+15%" (mức tăng của từng cách đo):
 *   1) Trung bình thô: 52,0 → 59,8 (+15,0%; 52,0 × 1,15 = 59,8)
 *   2) Khử trùng: 51,2 → 56,3 (+10,0%)       [tin trùng nghiêng về căn đắt, tồn lâu]
 *   3) Loại tin ảo: 52,1 → 58,0 (+11,3%)     [tin ảo rẻ hơn ~30%: 960×m + 60×0,7m… ⇒ 51,2 ≈ 0,982 × 52,1; 56,3 ≈ 0,971 × 58,0]
 *   4) Quy về thông thủy: m = M × (1 − 0,07 × s), s = tỷ trọng tim tường
 *        Q2: 52,1 ÷ (1 − 0,07 × 0,65) = 52,1 ÷ 0,9545 ≈ 54,6 · Q3: 58,0 ÷ (1 − 0,07 × 0,35) = 58,0 ÷ 0,9755 ≈ 59,5 → +9,0%
 *   5) Trung vị thay trung bình (thông thủy): 51,0 → 53,0 (+3,9%)  [Q3 có thêm căn siêu sang kéo đuôi phải]
 *   6) Giá giao dịch trung vị (hồ sơ công chứng + đối tác, thông thủy): 47,0 → 47,9 (+1,9%)
 *        Sale-to-list = giá giao dịch ÷ giá rao: 47,0 ÷ 51,0 = 92,2% → 47,9 ÷ 53,0 = 90,4%
 * Ghi chú: bước 3 làm mức tăng nhích LÊN (+10,0% → +11,3%) vì tin ảo rẻ và chiếm tỷ trọng tăng; làm sạch không luôn kéo số xuống.
 */
export const listingPricePerM2: CaseStudy = {
  id: 'listing-price-per-m2',
  title: 'Giá/m² trên tin rao tăng 15%: đo cái gì mà ra con số đó?',
  domain: 'real-estate',
  level: 'fresher',
  minutes: 10,
  skills: ['valuation', 'data-quality', 'metric-definition'],
  question:
    'Giá/m² trung bình căn hộ trên tin rao của một quận tăng 15% so với quý trước. Con số đó đang đo cái gì, tăng thật bao nhiêu, và nên chốt định nghĩa nào trước khi báo cáo?',
  summary:
    'Chốt định nghĩa giá/m² (giá rao hay giá giao dịch, diện tích thông thủy hay tim tường), khử tin trùng và tin ảo, dùng trung vị, rồi cầu nối từ +15% về mức tăng có thể bảo vệ.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng.* Bạn là analyst của một trang tổng hợp thông tin bất động sản. Bộ phận truyền thông chuẩn bị bản tin *"Giá căn hộ quận Y tăng 15% trong một quý"*, lấy từ biểu đồ nội bộ: **tổng giá rao ÷ tổng diện tích ghi trên tin**, tính trên mọi tin đăng. Bạn được nhờ rà soát trước khi phát hành.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Giá rao TB / m² (thô)', value: '59,8 tr đ', delta: '+15,0% so với Q2', tone: 'warning' },
            { label: 'Số tin đăng (thô)', value: '1.800', delta: '+50% (từ 1.200)', tone: 'warning' },
            { label: 'Nguồn giá', value: 'Chỉ giá rao', note: 'Chưa nối với giao dịch' },
            { label: 'Định nghĩa diện tích', value: 'Không thống nhất', note: 'Người đăng tự ghi, không có trường phân loại' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu của bản rà soát',
          md: 'Trả lời 3 câu: **con số +15% đo cái gì**, **phần nào đến từ cách tính chứ không từ giá**, và **định nghĩa nào nên dùng** để lần sau hai kỳ so được với nhau. Kết quả là một bản chốt định nghĩa và mức tăng có thể bảo vệ, không phải dự báo giá.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: chốt định nghĩa trước khi kết luận',
      blocks: [
        {
          kind: 'formula',
          expression: 'Giá/m² = Giá ÷ Diện tích  →  hỏi lại 3 lần: Giá nào? Diện tích nào? Tính trên tập tin nào?',
          note: 'Mỗi dấu "?" là một chỗ con số có thể đổi mà thị trường không đổi. Một chỉ số chỉ đáng tin khi cả ba được cố định bằng định nghĩa viết ra và giữ nguyên giữa các kỳ.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Giá nào**: giá rao đầu, giá rao cuối hay giá giao dịch? Giá rao là lời đề nghị, giá giao dịch là điểm hai bên gặp nhau.',
            '**Diện tích nào**: thông thủy (phần sử dụng bên trong tường) hay tim tường (tính cả bề dày tường)? Cùng một căn cho hai giá/m² khác nhau.',
            '**Tập tin nào**: một căn một lần (khử tin trùng), còn hàng (loại tin ảo), và thống kê nào (trung bình hay trung vị)?',
            '**Cầu nối**: đi từng bước từ số thô đến số đã chuẩn hóa, ghi mức tăng sau mỗi bước.',
          ],
        },
        {
          kind: 'quiz',
          id: 'listing-price-per-m2-q1',
          question: 'Trước khi phát hành tiêu đề "Giá căn hộ tăng 15%", việc đầu tiên nên làm là gì?',
          options: [
            {
              id: 'a',
              text: 'Phát hành, nhưng ghi chú nhỏ "theo dữ liệu tin đăng".',
              explain:
                'Chú thích nhỏ không sửa được tiêu đề. Người đọc sẽ hiểu là giá thị trường tăng 15%, trong khi con số chưa qua khử trùng và chưa thống nhất diện tích.',
            },
            {
              id: 'b',
              text: 'Viết ra định nghĩa giá/m² (giá nào, diện tích nào, tập tin nào) rồi tính lại bằng cầu nối từng bước.',
              correct: true,
              explain:
                'Đúng. Chỉ khi định nghĩa cố định thì hai kỳ mới so được. Cầu nối từng bước còn cho biết mỗi nguồn nhiễu đóng góp bao nhiêu điểm phần trăm vào con số +15%.',
            },
            {
              id: 'c',
              text: 'Thay trung bình bằng trung vị và dùng luôn kết quả mới làm tiêu đề.',
              explain:
                'Trung vị giúp nhưng chỉ xử lý một nguồn nhiễu (giá trị cực đoan). Tin trùng, diện tích không thống nhất và giá rao vẫn còn nguyên.',
            },
          ],
        },
      ],
    },
    {
      id: 'clean',
      kind: 'analysis',
      title: 'Bước 1 — Làm sạch tập tin: trùng và ảo đổi cả số lượng lẫn giá',
      blocks: [
        {
          kind: 'text',
          md: 'Khử trùng theo **địa chỉ/tên dự án + tầng + diện tích ±2% + mã băm ảnh**, giữ bản ghi mới nhất. Tin ảo gồm tin giá "mồi" thấp bất thường không liên hệ được và tin đã bán nhưng vẫn đăng, xác định bằng gọi kiểm tra mẫu và dấu hiệu ngày đăng lại.',
        },
        {
          kind: 'table',
          title: 'Từ tin thô đến tin xác minh (Q2 → Q3)',
          columns: [
            { key: 'metric', label: 'Chỉ số' },
            { key: 'prev', label: 'Q2', align: 'right' },
            { key: 'curr', label: 'Q3', align: 'right' },
            { key: 'change', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { metric: 'Tin đăng thô', prev: '1.200', curr: '1.800', change: '+50,0%' },
            { metric: 'Tin trùng (tỷ lệ)', prev: '180 (15%)', curr: '540 (30%)', change: '+15 điểm %' },
            { metric: 'Tin duy nhất', prev: '1.020', curr: '1.260', change: '+23,5%' },
            { metric: 'Tin ảo (tỷ lệ trên tin duy nhất)', prev: '60 (5,9%)', curr: '120 (9,5%)', change: '+3,6 điểm %' },
            { metric: 'Tin xác minh', prev: '960', curr: '1.140', change: '+18,8%' },
          ],
          highlight: [
            { row: 1, tone: 'warning' },
            { row: 4, tone: 'positive' },
          ],
          caption: 'Số tin tăng 50% nhưng số căn thật sự đang rao chỉ tăng ~19%. Tỷ lệ trùng gấp đôi cũng là một tín hiệu: căn tồn lâu bị nhiều môi giới đăng lại.',
        },
        {
          kind: 'quiz',
          id: 'listing-price-per-m2-q2',
          question: 'Sau khử trùng, mức tăng của giá trung bình hạ từ +15,0% xuống +10,0%. Vì sao khử trùng lại kéo mức tăng xuống?',
          options: [
            {
              id: 'a',
              text: 'Vì căn giá cao, khó bán thường tồn lâu và bị đăng lại nhiều lần, nên chúng bị đếm nhiều lần trong trung bình, và tỷ lệ này tăng trong Q3.',
              correct: true,
              explain:
                'Đúng. Trùng lặp không ngẫu nhiên: nó nghiêng về căn đắt và tồn lâu. Khi tỷ lệ trùng tăng từ 15% lên 30%, trung bình thô bị đẩy lên không phải vì giá tăng mà vì căn đắt được đếm nhiều lần hơn.',
            },
            {
              id: 'b',
              text: 'Vì bỏ bớt tin thì trung bình luôn nhỏ đi.',
              explain:
                'Bỏ bản ghi không làm trung bình nhỏ đi một cách tự động; nó chỉ đổi khi bản ghi bị bỏ khác bản ghi còn lại. Ở đây tin trùng cao giá hơn mặt bằng nên bỏ chúng mới kéo xuống.',
            },
            {
              id: 'c',
              text: 'Vì tin trùng thường có giá sai nên phải loại.',
              explain:
                'Tin trùng thường giữ đúng giá của bản gốc, không sai. Vấn đề là chúng nhân bản một số căn lên nhiều lần, làm lệch trọng số.',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Làm sạch không phải lúc nào cũng kéo số xuống',
          md: 'Loại tin ảo ở đây làm mức tăng **nhích lên** (+10,0% → +11,3%), vì tin ảo rẻ hơn mặt bằng ~30% và chiếm tỷ trọng tăng. Đừng chọn bước làm sạch theo hướng "cho số đẹp"; hãy quy định quy tắc trước và áp dụng cho mọi kỳ.',
        },
      ],
    },
    {
      id: 'area-definition',
      kind: 'analysis',
      title: 'Bước 2 — Cùng một căn, hai diện tích, hai giá/m²',
      blocks: [
        {
          kind: 'text',
          md: 'Với căn hộ, **diện tích thông thủy** là phần sử dụng bên trong tường; **diện tích tim tường** tính đến giữa bề dày tường nên lớn hơn. Quy định về tính diện tích sử dụng căn hộ theo kích thước thông thủy được nêu trong hướng dẫn Luật Nhà ở (xem nguồn tham khảo); tin đăng thì không bị ép theo chuẩn nào, nên cả hai cách ghi cùng xuất hiện.',
        },
        {
          kind: 'table',
          title: 'Một căn, hai cách ghi (ví dụ giá rao 3,5 tỷ đ)',
          columns: [
            { key: 'basis', label: 'Cách ghi diện tích' },
            { key: 'area', label: 'Diện tích', align: 'right' },
            { key: 'ppm', label: 'Giá/m²', align: 'right' },
            { key: 'gap', label: 'So với thông thủy', align: 'right' },
          ],
          rows: [
            { basis: 'Thông thủy', area: '70,0 m²', ppm: '50,0 tr đ', gap: '—' },
            { basis: 'Tim tường (≈ thông thủy ÷ 0,93)', area: '75,3 m²', ppm: '46,5 tr đ', gap: '−7,0%' },
          ],
          highlight: [{ row: 1, tone: 'warning' }],
          caption: 'Hệ số 0,93 là giả định mô phỏng; tỷ lệ thực khác nhau theo thiết kế tòa nhà và nên đo trên hồ sơ của chính dữ liệu bạn có.',
        },
        {
          kind: 'text',
          md: 'Trong tập tin xác minh, tỷ trọng tin ghi tim tường giảm từ **65% xuống 35%** (nhiều chủ đầu tư và môi giới chuyển sang ghi thông thủy). Tin ghi tim tường có giá/m² thấp hơn ~7%, nên khi tỷ trọng của chúng giảm, trung bình tăng dù giá căn không đổi. Quy cả hai kỳ về thông thủy, mức tăng còn **+9,0%** thay vì +11,3%.',
        },
        {
          kind: 'quiz',
          id: 'listing-price-per-m2-q3',
          question: 'Một tin ghi 46,5 tr đ/m² (tim tường), một tin khác ghi 50,0 tr đ/m² (thông thủy), cùng tòa, cùng tầng, cùng giá 3,5 tỷ. Cách đọc nào đúng?',
          options: [
            {
              id: 'a',
              text: 'Hai căn khác giá: căn thứ hai đắt hơn ~7%.',
              explain:
                'Tổng giá của hai căn bằng nhau (3,5 tỷ). Chênh lệch giá/m² đến từ mẫu số, không phải từ giá căn hộ.',
            },
            {
              id: 'b',
              text: 'Cùng một mức giá nhưng khác cơ sở diện tích; chỉ so sánh được sau khi quy về cùng định nghĩa.',
              correct: true,
              explain:
                'Đúng. Đây là lý do định nghĩa diện tích phải nằm trong đặc tả chỉ số. Nếu không, mọi thay đổi về cách đăng tin sẽ hiện ra như thay đổi về giá.',
            },
            {
              id: 'c',
              text: 'Nên lấy trung bình hai con số cho gọn.',
              explain:
                'Trung bình hai giá/m² khác cơ sở tạo ra một số không tương ứng với diện tích nào, và vẫn nhiễu theo tỷ trọng mỗi loại tin.',
            },
          ],
        },
      ],
    },
    {
      id: 'bridge',
      kind: 'analysis',
      title: 'Bước 3 — Trung vị và giá giao dịch: cầu nối từ +15% về mức bảo vệ được',
      blocks: [
        {
          kind: 'text',
          md: 'Q3 có thêm vài căn siêu sang (penthouse, dự án cao cấp) đăng trong quận. Trung bình bị kéo bởi đuôi phải, nên chuyển sang **trung vị** trên tập đã quy về thông thủy. Cuối cùng đối chiếu với **giá giao dịch** (hồ sơ công chứng và đối tác môi giới) để biết giá rao đang cách giá chốt bao xa.',
        },
        {
          kind: 'table',
          title: 'Cầu nối: mức tăng Q2 → Q3 qua từng bước chuẩn hóa',
          columns: [
            { key: 'step', label: 'Bước' },
            { key: 'prev', label: 'Q2 (tr đ/m²)', align: 'right' },
            { key: 'curr', label: 'Q3 (tr đ/m²)', align: 'right' },
            { key: 'change', label: 'Tăng', align: 'right' },
          ],
          rows: [
            { step: '1 · Trung bình, tin thô', prev: '52,0', curr: '59,8', change: '+15,0%' },
            { step: '2 · Sau khử trùng', prev: '51,2', curr: '56,3', change: '+10,0%' },
            { step: '3 · Sau loại tin ảo', prev: '52,1', curr: '58,0', change: '+11,3%' },
            { step: '4 · Quy về diện tích thông thủy', prev: '54,6', curr: '59,5', change: '+9,0%' },
            { step: '5 · Trung vị thay trung bình', prev: '51,0', curr: '53,0', change: '+3,9%' },
            { step: '6 · Giá giao dịch (trung vị)', prev: '47,0', curr: '47,9', change: '+1,9%' },
          ],
          highlight: [
            { row: 0, tone: 'warning' },
            { row: 4, tone: 'positive' },
            { row: 5, tone: 'positive' },
          ],
          caption:
            'Mỗi bước đổi mức tăng mà không cần thị trường đổi. Sale-to-list (giá giao dịch ÷ giá rao) giảm từ 92,2% (47,0 ÷ 51,0) xuống 90,4% (47,9 ÷ 53,0): người bán nâng kỳ vọng nhanh hơn mức người mua chấp nhận.',
        },
        {
          kind: 'chart',
          title: 'Mức tăng Q2 → Q3 theo từng cách đo',
          type: 'bar',
          xKey: 'step',
          unit: '%',
          series: [{ key: 'growth', label: 'Mức tăng' }],
          data: [
            { step: 'TB thô', growth: 15.0 },
            { step: 'Khử trùng', growth: 10.0 },
            { step: 'Loại tin ảo', growth: 11.3 },
            { step: 'Thông thủy', growth: 9.0 },
            { step: 'Trung vị', growth: 3.9 },
            { step: 'Giá giao dịch', growth: 1.9 },
          ],
          caption: 'Cách đo càng gần giá trị thật (cùng cơ sở diện tích, chống giá trị cực đoan, dựa vào giao dịch), mức tăng càng thấp.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Bước 5 vẫn chưa loại hết hiệu ứng cơ cấu: Q3 có nhiều căn cao cấp hơn nên ngay cả trung vị cũng nhích lên. Muốn ra mức tăng "cùng loại", cần phân tầng theo dự án/phân khúc hoặc dùng phương pháp hedonic/giao dịch lặp (repeat-sales). Trong bản này, hãy ghi rõ đó là giới hạn chứ đừng coi 3,9% là giá tăng thuần.',
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
          md: '**Kết luận cho bộ phận truyền thông:** Mức "+15%" là trung bình thô bị phình bởi tin trùng, diện tích không thống nhất và vài căn siêu sang. Sau chuẩn hóa, trung vị giá rao thông thủy tăng khoảng **+3,9%** và trung vị giá giao dịch tăng khoảng **+1,9%** (mẫu giao dịch nhỏ, nên báo dạng khoảng). Tiêu đề đề xuất: *"Giá rao căn hộ quận Y tăng khoảng 4%, giá chốt tăng khoảng 2%; người mua chốt thấp hơn giá rao ~10%"*.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Viết đặc tả chỉ số "giá/m² chuẩn": giá rao cuối ÷ diện tích thông thủy, trên tin duy nhất đã xác minh, thống kê bằng trung vị theo phân khúc',
              owner: 'Analytics + bộ phận nội dung',
              metric: 'Số kỳ báo cáo dùng đúng đặc tả',
              threshold: '100% từ kỳ tới; đổi định nghĩa phải ghi chú và tính lại chuỗi lịch sử',
            },
            {
              action: 'Thêm trường phân loại cơ sở diện tích (thông thủy/tim tường) và quy đổi tự động; báo cáo tỷ lệ tin chưa phân loại được',
              owner: 'Data engineering',
              metric: 'Tỷ lệ tin chưa xác định cơ sở diện tích',
              threshold: '< 10%',
            },
            {
              action: 'Đưa khử trùng và kiểm tra tin ảo (gọi mẫu 100 tin/tháng) vào pipeline; công bố tỷ lệ trùng và tỷ lệ ảo mỗi kỳ',
              owner: 'Data engineering + vận hành',
              metric: 'Tỷ lệ trùng/ảo còn sót trên mẫu kiểm tra',
              threshold: '< 5%',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Nguồn lỗi nằm ở **định nghĩa và dữ liệu đầu vào**, không phải ở thị trường, nên sửa tận gốc bằng đặc tả viết ra và kiểm tra tự động thay vì "vá" từng kỳ. Cầu nối từng bước cũng giúp người đọc thấy con số đến từ đâu, và bảo vệ bản tin trước câu hỏi *"vì sao số năm nay khác số năm ngoái"*.',
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
              title: 'Gọi giá rao là giá thị trường',
              why: 'Giá rao là lời đề nghị của người bán; khoảng cách với giá chốt có thể nới rộng (ở đây sale-to-list từ 92,2% xuống 90,4%) trong khi giá rao vẫn tăng.',
              instead: 'Báo cáo giá giao dịch làm thước đo giá, giá rao chỉ để đo kỳ vọng và tính sale-to-list.',
            },
            {
              title: 'Trộn hai cơ sở diện tích',
              why: 'Cùng một căn cho giá/m² lệch ~7% tùy ghi thông thủy hay tim tường. Khi tỷ trọng hai loại tin thay đổi, trung bình đổi dù thị trường không đổi.',
              instead: 'Chốt cơ sở diện tích trong đặc tả, quy đổi mọi tin về một cơ sở và ghi tỷ lệ tin chưa phân loại.',
            },
            {
              title: 'Tin vào trung bình của dữ liệu chưa sạch',
              why: 'Tin trùng, tin ảo và vài căn siêu sang có thể tạo mức tăng gấp nhiều lần mức thật; và việc làm sạch không luôn kéo số xuống nên dễ bị nghi là chọn hướng cho đẹp.',
              instead: 'Viết quy tắc làm sạch trước, áp dụng đồng nhất mọi kỳ, dùng trung vị theo phân khúc và công bố cầu nối từng bước.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Giá/m² có ba mẫu số ẩn: giá nào, diện tích nào, tập tin nào. Chốt định nghĩa viết ra trước khi nói giá tăng bao nhiêu.',
    'Tin trùng, tin ảo, diện tích không thống nhất và giá trị cực đoan đều làm đổi con số mà thị trường không đổi; dùng cầu nối từng bước để thấy mỗi nguồn đóng góp bao nhiêu.',
    'Giá rao chỉ phản ánh kỳ vọng; báo cáo giá giao dịch dạng khoảng, kèm sale-to-list và nói rõ giới hạn còn lại.',
  ],
  references: [
    {
      title: 'Handbook on Residential Property Prices Indices (RPPIs)',
      publisher: 'Eurostat',
      url: 'https://ec.europa.eu/eurostat/web/products-manuals-and-guidelines/-/ks-ra-12-022',
      note: 'Sổ tay quốc tế (Eurostat, ILO, IMF, OECD, UNECE, World Bank) về chỉ số giá nhà: định nghĩa giá, điều chỉnh chất lượng và cơ cấu.',
    },
    {
      title: 'Điều 72 Nghị định 95/2024/NĐ-CP hướng dẫn Luật Nhà ở',
      publisher: 'Hệ thống pháp luật (hethongphapluat.com)',
      url: 'https://hethongphapluat.com/nghi-dinh-95-2024-nd-cp-huong-dan-luat-nha-o/dieu-72',
      note: 'Trích quy định diện tích các phòng, bộ phận sử dụng tính theo kích thước thông thủy; nên đối chiếu với văn bản gốc khi trích dẫn chính thức.',
    },
    {
      title: 'FHFA House Price Index',
      publisher: 'U.S. Federal Housing Finance Agency',
      url: 'https://www.fhfa.gov/data/hpi',
      note: 'Ví dụ chỉ số dựa trên giá bán lặp lại của cùng một bất động sản, không dựa vào giá rao.',
    },
  ],
}
