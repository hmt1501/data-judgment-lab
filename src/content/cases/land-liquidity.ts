import type { CaseStudy } from '../types'

/*
 * MÔ PHỎNG — thị trường đất ở một quận ven đô (không phải địa bàn thật).
 * So sánh cùng kỳ: Q3/25 → Q3/26. Đơn vị giá: triệu đ/m².
 *
 * Tin đăng: thô 2.400 → 3.300 (+37,5%); tin trùng 480 (20%) → 990 (30%)
 *   → lô rao bán duy nhất 1.920 → 2.310 (+20,3%).
 * Trung vị giá rao: thô 33,0 → 36,0 (+9,1%) · sau khử trùng 32,5 → 34,5 (+6,2%).
 * Giao dịch hoàn tất/quý 600 → 420 (−30%) → 200 → 140 giao dịch/tháng.
 *   Months of supply = lô rao / GD tháng: 1.920/200 = 9,6 → 2.310/140 = 16,5 tháng
 *   Absorption/tháng = GD tháng / lô rao: 10,4% → 6,1%
 *   Trung vị ngày rao (DOM) 62 → 95 · Sale-to-list trung vị 94,0% → 89,5% · Tỷ lệ tin giảm giá 12% → 27%
 * Trung vị giá giao dịch 30,5 → 30,9 (+1,3%); 30,5/32,5 ≈ 94% và 30,9/34,5 ≈ 89,6% khớp sale-to-list.
 * Giao dịch theo nhóm (n · trung vị):
 *   Nền dự án 200 · 26,0 → 120 · 25,2 (−3,1%) | Thổ cư trong ngõ 290 · 30,0 → 220 · 30,3 (+1,0%)
 *   Mặt đường 110 · 41,0 → 80 · 42,0 (+2,4%)
 *   Tỷ trọng 33,3/48,3/18,3% → 28,6/52,4/19,0%
 *   Thay đổi giữ cơ cấu Q3/25: 0,333×(−3,1) + 0,483×1,0 + 0,183×2,4 ≈ −0,1%
 *   (giữ cơ cấu Q3/26: ≈ +0,1%) → +1,3% của trung vị tổng chủ yếu do bớt lô nền dự án giá thấp.
 */
export const landLiquidity: CaseStudy = {
  id: 'land-liquidity',
  title: 'Giá rao tăng 9% nhưng giao dịch giảm 30%: thị trường nóng hay đóng băng?',
  domain: 'real-estate',
  level: 'mid',
  minutes: 12,
  skills: ['liquidity', 'valuation', 'data-quality', 'metric-definition', 'mix-effect'],
  question:
    'Trung vị giá rao tăng 9% so với cùng kỳ, nhưng số giao dịch giảm 30% và thời gian rao bán kéo dài. Giá thị trường thực sự đang đi về đâu, và nên báo cáo giá như thế nào?',
  summary:
    'Khử tin trùng, đo thanh khoản bằng bộ chỉ số chuẩn (DOM, sale-to-list, months of supply, tỷ lệ giảm giá) và báo cáo giá giao dịch dạng khoảng thay vì một con số.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng.* Bạn là analyst của bộ phận nghiên cứu thị trường ở một công ty môi giới. Ban giám đốc chuẩn bị bản tin quý cho khách hàng và muốn tiêu đề *"Giá đất quận X tiếp tục tăng 9%"*. Nguồn dữ liệu hiện tại là tin đăng thu thập từ các trang rao vặt, **chưa khử trùng**, cộng với số giao dịch hoàn tất từ hệ thống nội bộ và đối tác.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Trung vị giá rao / m²', value: '36,0 tr đ', delta: '+9,1% cùng kỳ', tone: 'warning' },
            { label: 'Giao dịch hoàn tất / quý', value: '420', delta: '−30%', tone: 'negative' },
            { label: 'Trung vị ngày rao (DOM)', value: '95 ngày', delta: 'từ 62 ngày', tone: 'negative' },
            { label: 'Tin đăng (thô)', value: '3.300', delta: '+37,5%', tone: 'neutral', note: 'Chưa khử trùng' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu của bản phân tích',
          md: 'Trả lời: **giá giao dịch** (không phải giá rao) đang đi về đâu, **thanh khoản** đang ở trạng thái nào, và **câu chữ trong bản tin** nên viết thế nào để vừa đúng vừa hữu ích cho khách hàng.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: giá và thanh khoản là hai mặt của một thị trường',
      blocks: [
        {
          kind: 'formula',
          expression: 'Months of supply = Số lô đang rao (đã khử trùng) ÷ Số giao dịch hoàn tất mỗi tháng',
          note: 'Cho biết với tốc độ bán hiện tại, cần bao nhiêu tháng để hấp thụ hết nguồn cung đang rao. Đi cùng: **DOM** (số ngày từ lúc rao đến lúc bán), **sale-to-list** (giá chốt ÷ giá rao cuối), **tỷ lệ tin giảm giá**.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Làm sạch nguồn cung**: khử tin trùng để đếm đúng số lô và đo giá rao trên lô duy nhất.',
            '**Đo thanh khoản**: khối lượng giao dịch, DOM, sale-to-list, tỷ lệ giảm giá, months of supply.',
            '**Đo giá giao dịch cùng loại**: tách theo nhóm lô, kiểm tra hiệu ứng cơ cấu, ước lượng khoảng bất định.',
            '**Báo cáo**: khoảng giá + trạng thái thanh khoản + giới hạn dữ liệu.',
          ],
        },
        {
          kind: 'quiz',
          id: 'land-liquidity-q1',
          question: 'Giá rao tăng 9%, số giao dịch giảm 30%, DOM kéo dài. Cách đọc nào hợp lý nhất?',
          options: [
            {
              id: 'a',
              text: 'Cầu mạnh hơn cung nên giá tăng; giao dịch giảm chỉ vì người bán giữ hàng chờ giá cao hơn.',
              explain:
                'Nếu cầu mạnh, hàng sẽ bán nhanh hơn (DOM giảm) và giá chốt sát giá rao. Ở đây DOM tăng và giao dịch giảm: dấu hiệu người mua rút lui, không phải tranh mua.',
            },
            {
              id: 'b',
              text: 'Người bán vẫn neo kỳ vọng cao trong khi người mua chững lại; thanh khoản đang suy yếu và giá rao chưa phản ánh giá chốt.',
              correct: true,
              explain:
                'Đúng. Giá rao "dính" (sticky) vì người bán ngại chốt lỗ so với giá mua hoặc kỳ vọng cũ; thị trường điều chỉnh trước qua **khối lượng và thời gian bán**, sau đó mới qua giá. Cần kiểm tra bằng giá chốt và sale-to-list.',
            },
            {
              id: 'c',
              text: 'Giao dịch giảm do dữ liệu thiếu, nên chỉ cần tin vào giá rao.',
              explain:
                'Có thể có độ trễ ghi nhận, nhưng giao dịch giảm đồng thời với DOM tăng là hai nguồn độc lập cùng chỉ một hướng. Bỏ qua chúng để giữ con số đẹp là thiên lệch xác nhận.',
            },
          ],
        },
      ],
    },
    {
      id: 'dedup',
      kind: 'analysis',
      title: 'Bước 1 — Khử tin trùng: nguồn cung và giá rao đều bị phóng đại',
      blocks: [
        {
          kind: 'text',
          md: 'Khử trùng theo khóa ghép **tọa độ/số thửa + diện tích ±2% + mã băm ảnh**, giữ bản ghi có ngày đăng sớm nhất (để tính DOM) và giá rao mới nhất.',
        },
        {
          kind: 'table',
          title: 'Tin đăng trước và sau khử trùng (Q3/25 → Q3/26)',
          columns: [
            { key: 'metric', label: 'Chỉ số' },
            { key: 'prev', label: 'Q3/25', align: 'right' },
            { key: 'curr', label: 'Q3/26', align: 'right' },
            { key: 'change', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { metric: 'Tin đăng thô', prev: '2.400', curr: '3.300', change: '+37,5%' },
            { metric: 'Tin trùng (tỷ lệ)', prev: '480 (20%)', curr: '990 (30%)', change: '+10 điểm %' },
            { metric: 'Lô rao bán duy nhất', prev: '1.920', curr: '2.310', change: '+20,3%' },
            { metric: 'Trung vị giá rao thô (tr đ/m²)', prev: '33,0', curr: '36,0', change: '+9,1%' },
            { metric: 'Trung vị giá rao sau khử trùng', prev: '32,5', curr: '34,5', change: '+6,2%' },
          ],
          highlight: [
            { row: 1, tone: 'warning' },
            { row: 4, tone: 'positive' },
          ],
          caption: 'Gần 3 điểm % trong mức "+9%" đến từ tin trùng. Tỷ lệ trùng tăng chính là một tín hiệu: hàng tồn lâu được nhiều môi giới đăng lại.',
        },
        {
          kind: 'quiz',
          id: 'land-liquidity-q2',
          question: 'Vì sao tin trùng không chỉ làm phồng số lượng mà còn kéo trung vị giá rao lên?',
          options: [
            {
              id: 'a',
              text: 'Vì lô rao giá cao, khó bán thường nằm lâu và được nhiều môi giới đăng lại, nên chúng bị đếm nhiều lần trong phân phối giá.',
              correct: true,
              explain:
                'Đúng. Trùng lặp không ngẫu nhiên: lô định giá cao bán chậm, tồn lâu và bị đăng nhiều lần (đôi khi kèm mức "cộng thêm" của môi giới). Khi chưa khử trùng, phân phối giá bị lệch về phía lô đắt nhất.',
            },
            {
              id: 'b',
              text: 'Vì trung vị luôn nhạy với số lượng quan sát hơn trung bình.',
              explain:
                'Ngược lại, trung vị ít nhạy với giá trị cực đoan hơn trung bình. Trung vị chỉ lệch khi bản ghi trùng tập trung ở một phía của phân phối, như ở đây.',
            },
            {
              id: 'c',
              text: 'Không ảnh hưởng: khử trùng chỉ thay đổi số đếm, không đổi giá.',
              explain:
                'Chỉ đúng khi tin trùng phân bố đều trên mọi mức giá. Dữ liệu cho thấy trung vị đổi từ 36,0 xuống 34,5 sau khử trùng, tức trùng lặp lệch về lô giá cao.',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Luôn báo cáo **tỷ lệ trùng** như một chỉ số chất lượng dữ liệu cùng với kết quả. Nếu tỷ lệ này thay đổi giữa hai kỳ, mọi so sánh trên dữ liệu thô đều bị nhiễu, kể cả khi bạn đã dùng trung vị.',
        },
      ],
    },
    {
      id: 'liquidity',
      kind: 'analysis',
      title: 'Bước 2 — Đo thanh khoản: mọi chỉ số cùng chỉ một hướng',
      blocks: [
        {
          kind: 'table',
          title: 'Bộ chỉ số thanh khoản (lô duy nhất, Q3/25 → Q3/26)',
          columns: [
            { key: 'metric', label: 'Chỉ số' },
            { key: 'def', label: 'Định nghĩa' },
            { key: 'prev', label: 'Q3/25', align: 'right' },
            { key: 'curr', label: 'Q3/26', align: 'right' },
          ],
          rows: [
            { metric: 'Giao dịch hoàn tất / tháng', def: 'Giao dịch có hợp đồng/công chứng', prev: '200', curr: '140' },
            { metric: 'Months of supply', def: 'Lô đang rao ÷ giao dịch/tháng', prev: '9,6', curr: '16,5' },
            { metric: 'Tỷ lệ hấp thụ / tháng', def: 'Giao dịch/tháng ÷ lô đang rao', prev: '10,4%', curr: '6,1%' },
            { metric: 'Trung vị DOM (ngày)', def: 'Ngày đăng đầu tiên → ngày giao dịch', prev: '62', curr: '95' },
            { metric: 'Trung vị sale-to-list', def: 'Giá chốt ÷ giá rao cuối cùng', prev: '94,0%', curr: '89,5%' },
            { metric: 'Tỷ lệ tin có giảm giá', def: 'Lô đang rao từng hạ giá ≥ 1 lần', prev: '12%', curr: '27%' },
          ],
          highlight: [
            { row: 1, tone: 'negative' },
            { row: 4, tone: 'negative' },
            { row: 5, tone: 'warning' },
          ],
          caption: 'Cung rao tăng 20%, cầu giao dịch giảm 30%: months of supply gần gấp đôi. Người mua chỉ chốt ở mức thấp hơn giá rao ~10,5%, và ngày càng nhiều người bán phải hạ giá.',
        },
        {
          kind: 'chart',
          title: 'Months of supply theo quý',
          type: 'bar',
          xKey: 'q',
          unit: ' tháng',
          series: [{ key: 'mos', label: 'Months of supply' }],
          data: [
            { q: 'Q2/25', mos: 9.7 },
            { q: 'Q3/25', mos: 9.6 },
            { q: 'Q4/25', mos: 10.7 },
            { q: 'Q1/26', mos: 12.5 },
            { q: 'Q2/26', mos: 14.5 },
            { q: 'Q3/26', mos: 16.5 },
          ],
          caption: 'Tồn kho tính theo tốc độ bán tăng đều 4 quý liên tiếp: đây là xu hướng, không phải biến động một quý.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao giá rao "dính"?',
          md: 'Người bán thường neo theo giá mua vào, giá hàng xóm vừa rao hoặc đỉnh kỳ vọng cũ, và ngại "chốt lỗ" (*loss aversion*). Khi cầu yếu, họ chọn **chờ** thay vì hạ giá, nên thị trường điều chỉnh qua khối lượng và thời gian trước. Sale-to-list giảm và tỷ lệ tin hạ giá tăng là **chỉ báo sớm** cho thấy giá chốt chịu áp lực, thường đi trước chỉ số giá vài quý.',
        },
      ],
    },
    {
      id: 'price-range',
      kind: 'analysis',
      title: 'Bước 3 — Giá giao dịch cùng loại: đi ngang, kèm khoảng bất định',
      blocks: [
        {
          kind: 'chart',
          title: 'Trung vị giá rao (thô, sau khử trùng) và giá giao dịch theo quý',
          type: 'line',
          xKey: 'q',
          unit: ' tr đ/m²',
          series: [
            { key: 'raw', label: 'Giá rao thô' },
            { key: 'dedup', label: 'Giá rao sau khử trùng' },
            { key: 'sold', label: 'Giá giao dịch' },
          ],
          data: [
            { q: 'Q2/25', raw: 32.4, dedup: 32.0, sold: 30.2 },
            { q: 'Q3/25', raw: 33.0, dedup: 32.5, sold: 30.5 },
            { q: 'Q4/25', raw: 33.8, dedup: 33.1, sold: 30.8 },
            { q: 'Q1/26', raw: 34.6, dedup: 33.6, sold: 30.9 },
            { q: 'Q2/26', raw: 35.4, dedup: 34.1, sold: 30.8 },
            { q: 'Q3/26', raw: 36.0, dedup: 34.5, sold: 30.9 },
          ],
          caption: 'Ba đường tách xa dần: kỳ vọng người bán đi lên, giá chốt gần như nằm yên từ Q4/25.',
        },
        {
          kind: 'table',
          title: 'Giá giao dịch theo nhóm lô (trung vị, tr đ/m²)',
          columns: [
            { key: 'seg', label: 'Nhóm lô' },
            { key: 'prev', label: 'Q3/25 (n)', align: 'right' },
            { key: 'curr', label: 'Q3/26 (n)', align: 'right' },
            { key: 'ci', label: 'Khoảng tin cậy 95% Q3/26', align: 'right' },
            { key: 'change', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { seg: 'Nền dự án', prev: '26,0 (200)', curr: '25,2 (120)', ci: '23,8–26,6', change: '−3,1%' },
            { seg: 'Thổ cư trong ngõ', prev: '30,0 (290)', curr: '30,3 (220)', ci: '29,4–31,2', change: '+1,0%' },
            { seg: 'Mặt đường', prev: '41,0 (110)', curr: '42,0 (80)', ci: '39,4–44,6', change: '+2,4%' },
            { seg: 'Toàn quận (cơ cấu thực tế)', prev: '30,5 (600)', curr: '30,9 (420)', ci: '—', change: '+1,3%' },
            { seg: 'Toàn quận (giữ cơ cấu Q3/25)', prev: '—', curr: '—', ci: '≈ −2% đến +2%', change: '≈ −0,1%' },
          ],
          highlight: [
            { row: 0, tone: 'negative' },
            { row: 4, tone: 'positive' },
          ],
          caption:
            'Nền dự án (giá thấp) giảm tỷ trọng giao dịch từ 33% xuống 29%, kéo trung vị tổng lên +1,3%. Giữ cơ cấu cố định, giá chốt cùng loại **đi ngang** (≈ 0%), khoảng bất định khoảng ±2%. Khoảng tin cậy ước lượng bằng bootstrap trên giao dịch từng nhóm.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Giới hạn dữ liệu cần ghi kèm',
          md: 'Giá giao dịch đến từ hệ thống nội bộ và đối tác, **không phải toàn bộ thị trường**; giá ghi trên hợp đồng có thể khác giá thực trả. Ghi rõ nguồn, cỡ mẫu từng nhóm, và tránh công bố ô nào có quá ít giao dịch mà không gắn cờ.',
        },
        {
          kind: 'quiz',
          id: 'land-liquidity-q3',
          question: 'Tiêu đề nào phù hợp nhất cho bản tin quý?',
          options: [
            {
              id: 'a',
              text: '"Giá đất quận X tăng 9% so với cùng kỳ."',
              explain:
                'Đây là giá rao thô, chưa khử trùng và không phải giá giao dịch. Công bố con số này vừa sai về đo lường, vừa khiến khách hàng neo kỳ vọng cao hơn thị trường thực, làm thanh khoản còn tệ hơn.',
            },
            {
              id: 'b',
              text: '"Giá đất quận X giảm do giao dịch giảm 30%."',
              explain:
                'Khối lượng giảm không đồng nghĩa giá giảm: giá chốt cùng loại hiện đi ngang. Đây là suy diễn ngược chiều nhưng mắc cùng lỗi: dùng một chỉ số để nói về chỉ số khác.',
            },
            {
              id: 'c',
              text: '"Giá chốt đi ngang (khoảng −2% đến +2%), thanh khoản giảm mạnh: tồn kho 16,5 tháng, người mua chốt thấp hơn giá rao ~10%."',
              correct: true,
              explain:
                'Đúng. Tiêu đề tách giá giao dịch khỏi giá rao, trình bày khoảng thay vì một điểm, và đưa trạng thái thanh khoản lên ngang hàng với giá: đây là thông tin khách hàng mua/bán thực sự cần.',
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
          md: '**Kết luận cho ban giám đốc:** Mức "+9%" là giá rao thô; sau khử trùng còn +6,2%, và đó vẫn chỉ là kỳ vọng người bán. Giá giao dịch cùng loại **đi ngang** (≈ 0%, khoảng −2% đến +2%). Thanh khoản suy yếu rõ: giao dịch −30%, months of supply 9,6 → 16,5 tháng, sale-to-list 94,0% → 89,5%, 27% tin đã hạ giá. Rủi ro chính là **áp lực giảm giá chốt** trong các quý tới nếu cầu không phục hồi.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Đưa khử trùng (tọa độ/số thửa + diện tích + mã băm ảnh) vào pipeline tin đăng; báo cáo tỷ lệ trùng mỗi kỳ',
              owner: 'Data engineering',
              metric: 'Tỷ lệ trùng còn sót trên mẫu kiểm tra thủ công 200 tin/tháng',
              threshold: '< 5%',
            },
            {
              action: 'Dựng dashboard thanh khoản hàng tháng: giao dịch, DOM, sale-to-list, tỷ lệ hạ giá, months of supply, theo nhóm lô',
              owner: 'Analytics',
              metric: 'Months of supply và sale-to-list',
              threshold: 'Cảnh báo khi months of supply > 12 tháng hoặc sale-to-list < 92% hai tháng liên tiếp',
            },
            {
              action: 'Chuẩn hóa mẫu bản tin: luôn ghi giá giao dịch dạng khoảng, giữ cơ cấu cố định, kèm cỡ mẫu và nguồn',
              owner: 'Trưởng bộ phận nghiên cứu',
              metric: 'Số ô số liệu công bố có n < 30 mà không gắn cờ',
              threshold: '0',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Thị trường bất động sản điều chỉnh qua **khối lượng và thời gian** trước khi qua **giá**, nên một bản tin chỉ có giá sẽ luôn trễ và dễ sai hướng. Dashboard thanh khoản cho tín hiệu sớm, khử trùng sửa lỗi gốc của dữ liệu, còn báo cáo dạng khoảng giúp khách hàng định giá thực tế thay vì neo theo giá rao.',
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
              title: 'Gọi giá rao là "giá thị trường"',
              why: 'Giá rao dính vì người bán neo kỳ vọng; khi cầu yếu, khoảng chênh với giá chốt nới rộng (ở đây ~10,5%). Con số giá rao tăng có thể đi cùng giá chốt đi ngang hoặc giảm.',
              instead: 'Dùng giá giao dịch làm thước đo giá; giá rao chỉ dùng để đo kỳ vọng và tính sale-to-list.',
            },
            {
              title: 'Phân tích trên tin đăng chưa khử trùng',
              why: 'Trùng lặp làm phồng nguồn cung và lệch phân phối giá về phía lô tồn lâu, giá cao. Tỷ lệ trùng thay đổi giữa hai kỳ thì mọi so sánh đều nhiễu.',
              instead: 'Khử trùng bằng khóa ghép (vị trí + diện tích + ảnh), giữ ngày đăng đầu tiên, và công bố tỷ lệ trùng.',
            },
            {
              title: 'Báo cáo một con số chắc chắn',
              why: 'Mẫu giao dịch có hạn, cơ cấu lô thay đổi giữa các kỳ, nên một điểm duy nhất tạo cảm giác chính xác giả và dễ đảo chiều ở kỳ sau.',
              instead: 'Báo cáo khoảng (bootstrap hoặc theo nhóm), giữ cơ cấu cố định, kèm cỡ mẫu và các chỉ số thanh khoản.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Giá rao dính vì người bán neo kỳ vọng; thị trường điều chỉnh qua khối lượng và thời gian bán trước khi qua giá chốt.',
    'Đo thanh khoản bằng bộ chỉ số chuẩn: giao dịch, DOM, sale-to-list, tỷ lệ hạ giá, months of supply, tính trên lô đã khử trùng.',
    'Báo cáo giá giao dịch dạng khoảng, giữ cơ cấu cố định và kèm cỡ mẫu, không phải một con số giá rao.',
  ],
  references: [
    {
      title: 'Data Center Metrics Definitions',
      publisher: 'Redfin',
      url: 'https://www.redfin.com/news/data-center-metrics-definitions/',
      note: 'Định nghĩa chuẩn của days on market, sale-to-list ratio, months of supply và tỷ lệ tin giảm giá.',
    },
    {
      title: 'Existing-Home Sales',
      publisher: 'National Association of REALTORS®',
      url: 'https://www.nar.realtor/research-and-statistics/housing-statistics/existing-home-sales',
      note: 'Ví dụ báo cáo thị trường định kỳ đặt khối lượng giao dịch, tồn kho và months supply cạnh giá trung vị.',
    },
    {
      title: 'Handbook on Residential Property Prices Indices (RPPIs)',
      publisher: 'Eurostat',
      url: 'https://ec.europa.eu/eurostat/web/products-manuals-and-guidelines/-/ks-ra-12-022',
      note: 'Phương pháp chỉ số giá nhà dựa trên giao dịch: phân tầng, điều chỉnh cơ cấu và hạn chế của dữ liệu giá rao.',
    },
  ],
}
