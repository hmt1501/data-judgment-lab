import type { CaseStudy } from '../types'

/*
 * MÔ PHỎNG — khu vực bán kính 2 km quanh một ga đường sắt dự kiến (không phải dự án thật).
 * So sánh T5 (trước tin quy hoạch) → T8 (3 tháng sau). Đơn vị giá: triệu đ/m² giá rao.
 *
 * Tin đăng: thô 330 → 520 (+58%); sau khử trùng 300 → 420 lô duy nhất (+40%).
 *   Trùng lặp: 30 (9%) → 100 (19%), phân bổ đều giữa các nhóm nên giá TB gần như không đổi khi khử.
 * Cơ cấu lô duy nhất (số lô · giá rao TB/m²):
 *   T5: A mặt đường ≤1 km 45 · 70,0 | B trong ngõ ≤1 km 120 · 42,0 | C cách 1–2 km 135 · 30,0
 *       → TB = (3.150 + 5.040 + 4.050) / 300 = 40,8
 *   T8: A 105 · 73,5 (+5,0%) | B 168 · 44,1 (+5,0%) | C 147 · 31,2 (+4,0%)
 *       → TB = (7.717,5 + 7.408,8 + 4.586,4) / 420 = 46,9 (+15,0%)
 *   Giá cố định cơ cấu T5 (15% / 40% / 45%): 11,025 + 17,64 + 14,04 = 42,7 (+4,7%)
 *   → ~10 điểm % trong mức +15% là do cơ cấu tin đăng dịch về lô mặt đường đắt tiền.
 * Giao dịch hoàn tất (mẫu từ đối tác môi giới + hồ sơ công chứng, 3 tháng trước vs 3 tháng sau):
 *   A 4 · 64,0 → 5 · 66,0 (+3,1%) | B 10 · 38,0 → 9 · 39,0 (+2,6%) | C 8 · 27,5 → 6 · 28,0 (+1,8%)
 *   Tổng 22 → 20 giao dịch. Chênh giá chốt so với giá rao T8: A −10,2% · B −11,6% · C −10,3%
 *   (T5: A −8,6% · B −9,5% · C −8,3%).
 */
export const landStation: CaseStudy = {
  id: 'land-station',
  title: 'Giá đất quanh ga tương lai tăng 15%: tăng thật hay tăng kỳ vọng?',
  domain: 'real-estate',
  level: 'junior',
  minutes: 10,
  skills: ['valuation', 'data-quality', 'mix-effect', 'causal'],
  question:
    'Giá rao quanh một ga đường sắt dự kiến tăng 15% trong 3 tháng và số tin đăng cũng tăng. Giá trị đất đã tăng thật đến đâu, và nhóm đầu tư nên xác minh gì trước khi xuống tiền?',
  summary:
    'Tách giá rao khỏi giá giao dịch, khử tin trùng, cố định cơ cấu lô đất để đo mức tăng cùng loại, rồi kiểm chứng tiến độ dự án từ nguồn chính thức.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng.* Bạn là analyst của một nhóm đầu tư nhỏ đang cân nhắc mua đất quanh một **ga đường sắt dự kiến**. Ba tháng trước, cơ quan địa phương công bố quy hoạch có vị trí ga. Trưởng nhóm gửi ảnh chụp báo cáo của một sàn tin đăng và hỏi: *"Giá tăng 15% rồi, có nên mua nhanh trước khi lên nữa không?"*',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Giá rao TB / m² (T8)', value: '46,9 tr đ', delta: '+15,0% so với T5', tone: 'warning' },
            { label: 'Số tin đăng', value: '520', delta: '+58% (từ 330)', tone: 'warning' },
            { label: 'Giao dịch hoàn tất ghi nhận', value: 'Chưa có', note: 'Sàn chỉ có giá rao' },
            { label: 'Tiến độ ga', value: 'Mới quy hoạch', note: 'Chưa rõ vốn, chưa có quyết định khởi công' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu của bản phân tích',
          md: 'Trả lời 3 câu cho nhóm đầu tư: **giá trị đất cùng loại đã tăng bao nhiêu thật sự**, **phần nào chỉ là kỳ vọng chưa thành hiện thực**, và **cần xác minh dữ liệu gì** trước khi ra giá. Kết quả là một bản brief có khoảng giá và cờ rủi ro, không phải lời khuyên "mua" hay "không mua".',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: giá rao ≠ giá trị',
      blocks: [
        {
          kind: 'formula',
          expression: 'Giá rao = Giá giao dịch cùng loại × (1 + Biên kỳ vọng của người bán)',
          note: 'Giá rao là **lời đề nghị** của người bán, giá giao dịch là **điểm gặp** của cả hai bên. Một con số "giá tăng" chỉ có nghĩa khi bạn biết nó đo trên tập lô nào, có trùng lặp không, và so sánh lô cùng loại hay không.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Làm sạch tập tin đăng**: khử tin trùng (một lô nhiều môi giới đăng), quy về giá/m².',
            '**So sánh cùng loại**: chia lô theo đặc điểm quyết định giá (mặt đường/ngõ, khoảng cách tới ga), giữ cố định cơ cấu để đo mức tăng thuần.',
            '**Đối chiếu giá giao dịch**: tìm giá chốt thật (công chứng, môi giới đối tác) và đo khoảng chênh với giá rao.',
            '**Kiểm chứng động lực**: tiến độ dự án theo văn bản chính thức, tách giá trị đã hiện thực khỏi kỳ vọng.',
          ],
        },
        {
          kind: 'quiz',
          id: 'land-station-q1',
          question: 'Với dữ liệu hiện có (chỉ giá rao từ một sàn), câu kết luận nào là chính xác nhất?',
          options: [
            {
              id: 'a',
              text: 'Giá đất khu vực đã tăng 15%, nên mua sớm vì xu hướng còn tiếp diễn.',
              explain:
                'Đây là nhầm giá rao với giá trị. Giá rao chỉ phản ánh kỳ vọng của người bán; chưa có giao dịch nào xác nhận người mua chấp nhận mức đó. Ngoại suy "còn tăng" lại càng thiếu cơ sở.',
            },
            {
              id: 'b',
              text: 'Kỳ vọng của người bán đã tăng; chưa thể nói giá trị đất tăng bao nhiêu cho đến khi khử trùng, so lô cùng loại và đối chiếu giá giao dịch.',
              correct: true,
              explain:
                'Đúng. Câu này mô tả chính xác điều dữ liệu cho phép nói, đồng thời chỉ ra 3 bước cần làm. Đây là cách một analyst bảo vệ nhóm khỏi quyết định dựa trên con số quảng cáo.',
            },
            {
              id: 'c',
              text: 'Số tin đăng tăng 58% nghĩa là nguồn cung tăng mạnh, giá chắc chắn sẽ giảm.',
              explain:
                'Số tin thô có thể bị thổi phồng bởi tin trùng, và nhiều tin mới chưa chắc là cung thật (chủ đất "thử giá"). Kết luận "chắc chắn giảm" cũng vội vàng như "chắc chắn tăng".',
            },
          ],
        },
      ],
    },
    {
      id: 'clean-mix',
      kind: 'analysis',
      title: 'Bước 1 — Khử trùng và cố định cơ cấu: tăng cùng loại chỉ ~4,7%',
      blocks: [
        {
          kind: 'text',
          md: 'Khử trùng theo **số thửa/tọa độ + diện tích ±2% + ảnh trùng**: 520 tin thô còn **420 lô duy nhất** (19% là tin trùng, so với 9% ở T5). Số lô thật sự rao bán tăng 40%, không phải 58%. Tiếp theo, chia lô theo hai đặc điểm quyết định giá: vị trí mặt đường/trong ngõ và khoảng cách tới ga.',
        },
        {
          kind: 'table',
          title: 'Giá rao TB theo nhóm lô (sau khử trùng, tr đ/m²)',
          columns: [
            { key: 'seg', label: 'Nhóm lô' },
            { key: 'mixPrev', label: 'Tỷ trọng T5', align: 'right' },
            { key: 'mixCurr', label: 'Tỷ trọng T8', align: 'right' },
            { key: 'prev', label: 'Giá T5', align: 'right' },
            { key: 'curr', label: 'Giá T8', align: 'right' },
            { key: 'change', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { seg: 'A · Mặt đường, ≤1 km tới ga', mixPrev: '15% (45)', mixCurr: '25% (105)', prev: '70,0', curr: '73,5', change: '+5,0%' },
            { seg: 'B · Trong ngõ, ≤1 km tới ga', mixPrev: '40% (120)', mixCurr: '40% (168)', prev: '42,0', curr: '44,1', change: '+5,0%' },
            { seg: 'C · Cách ga 1–2 km', mixPrev: '45% (135)', mixCurr: '35% (147)', prev: '30,0', curr: '31,2', change: '+4,0%' },
            { seg: 'Toàn khu (cơ cấu thực tế)', mixPrev: '300 lô', mixCurr: '420 lô', prev: '40,8', curr: '46,9', change: '+15,0%' },
            { seg: 'Toàn khu (giữ cơ cấu T5)', mixPrev: '300 lô', mixCurr: '—', prev: '40,8', curr: '42,7', change: '+4,7%' },
          ],
          highlight: [
            { row: 0, tone: 'warning' },
            { row: 4, tone: 'positive' },
          ],
          caption:
            'Không nhóm nào tăng quá 5%, nhưng tổng tăng 15% vì lô mặt đường đắt tiền chiếm 25% tin đăng thay vì 15%. Khoảng 10 điểm % là **hiệu ứng cơ cấu**, không phải giá tăng.',
        },
        {
          kind: 'chart',
          title: 'Giá rao TB toàn khu: cơ cấu thực tế vs cơ cấu cố định',
          type: 'line',
          xKey: 'month',
          unit: ' tr đ/m²',
          series: [
            { key: 'headline', label: 'Theo cơ cấu tin đăng thực tế' },
            { key: 'fixed', label: 'Giữ cơ cấu T5 (cùng loại)' },
          ],
          data: [
            { month: 'T3', headline: 40.5, fixed: 40.5 },
            { month: 'T4', headline: 40.6, fixed: 40.6 },
            { month: 'T5', headline: 40.8, fixed: 40.8 },
            { month: 'T6', headline: 42.9, fixed: 41.5 },
            { month: 'T7', headline: 45.1, fixed: 42.2 },
            { month: 'T8', headline: 46.9, fixed: 42.7 },
          ],
          marker: { x: 'T6', label: 'Công bố quy hoạch vị trí ga' },
          caption: 'Hai đường tách nhau ngay sau tin quy hoạch: chủ lô mặt đường đổ xô đăng bán, kéo giá trung bình lên.',
        },
        {
          kind: 'quiz',
          id: 'land-station-q2',
          question: 'Vì sao giá toàn khu tăng 15% trong khi không nhóm nào tăng quá 5%?',
          options: [
            {
              id: 'a',
              text: 'Do có tin trùng làm sai giá trung bình.',
              explain:
                'Tin trùng làm phồng số lượng tin (58% so với 40% thực), nhưng trong mẫu này chúng phân bổ đều nên gần như không làm lệch giá. Thủ phạm chính của mức chênh 10 điểm % là cơ cấu.',
            },
            {
              id: 'b',
              text: 'Tỷ trọng lô mặt đường giá cao trong tập tin đăng tăng từ 15% lên 25%, kéo trung bình lên dù giá từng nhóm chỉ tăng nhẹ.',
              correct: true,
              explain:
                'Đúng. Đây là hiệu ứng cơ cấu (composition bias): thay đổi *loại lô được rao* chứ không phải *giá của cùng một loại lô*. Các chỉ số giá nhà chính thức xử lý bằng phân tầng, hedonic hoặc repeat-sales chính vì lý do này.',
            },
            {
              id: 'c',
              text: 'Sàn tính sai: trung bình có trọng số luôn phải nằm giữa các nhóm.',
              explain:
                'Phép tính đúng; 46,9 vẫn nằm giữa 31,2 và 73,5. Vấn đề không nằm ở số học mà ở việc so sánh hai rổ lô khác nhau giữa hai thời điểm.',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Trong thực tế, hãy dùng **trung vị giá/m²** trong từng nhóm (ít nhạy với vài lô "ngáo giá" hơn trung bình) và chia nhóm theo các biến quyết định giá: mặt tiền, độ rộng ngõ, pháp lý, diện tích, khoảng cách. Đây chính là tư duy **hedonic/so sánh tương đồng**: giá chỉ so được khi đặc điểm đã được giữ cố định.',
        },
      ],
    },
    {
      id: 'transactions',
      kind: 'analysis',
      title: 'Bước 2 — Đối chiếu giá giao dịch: giá chốt chỉ nhích 2–3%',
      blocks: [
        {
          kind: 'text',
          md: 'Nhóm thu thập được **42 giao dịch hoàn tất** trong 6 tháng (từ môi giới đối tác và hồ sơ công chứng được chủ đất cung cấp). Mẫu nhỏ, nhưng đủ để thấy hướng đi và khoảng chênh với giá rao.',
        },
        {
          kind: 'table',
          title: 'Giá giao dịch TB theo nhóm (tr đ/m²) và chênh so với giá rao',
          columns: [
            { key: 'seg', label: 'Nhóm lô' },
            { key: 'prev', label: '3 tháng trước (n)', align: 'right' },
            { key: 'curr', label: '3 tháng sau (n)', align: 'right' },
            { key: 'change', label: 'Thay đổi', align: 'right' },
            { key: 'gap', label: 'Chênh so với giá rao T8', align: 'right' },
          ],
          rows: [
            { seg: 'A · Mặt đường, ≤1 km', prev: '64,0 (4)', curr: '66,0 (5)', change: '+3,1%', gap: '−10,2%' },
            { seg: 'B · Trong ngõ, ≤1 km', prev: '38,0 (10)', curr: '39,0 (9)', change: '+2,6%', gap: '−11,6%' },
            { seg: 'C · Cách ga 1–2 km', prev: '27,5 (8)', curr: '28,0 (6)', change: '+1,8%', gap: '−10,3%' },
          ],
          highlight: [{ row: 1, tone: 'warning' }],
          caption:
            'Giá chốt tăng 2–3%, thấp hơn giá rao cùng loại (+4–5%). Khoảng chênh rao–chốt **nới rộng** từ ~9% lên ~11%: người bán nâng kỳ vọng nhanh hơn người mua chấp nhận. Số giao dịch không tăng (22 → 20) dù số lô rao tăng 40%.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Mẫu nhỏ → khoảng, không phải điểm',
          md: 'Với 5–9 giao dịch mỗi nhóm, một lô bất thường có thể đổi trung bình vài phần trăm. Báo cáo phải ghi rõ **n** và trình bày dạng khoảng (ví dụ nhóm B: 37–41 tr đ/m²), đồng thời coi đây là tín hiệu định hướng cần cập nhật khi có thêm giao dịch.',
        },
      ],
    },
    {
      id: 'project',
      kind: 'analysis',
      title: 'Bước 3 — Kiểm chứng động lực: dự án mới ở bước đầu',
      blocks: [
        {
          kind: 'table',
          title: 'Các mốc tiến độ ga theo nguồn chính thức',
          columns: [
            { key: 'milestone', label: 'Mốc' },
            { key: 'status', label: 'Trạng thái' },
            { key: 'source', label: 'Nguồn cần kiểm tra' },
          ],
          rows: [
            { milestone: 'Quy hoạch có vị trí ga', status: 'Đã công bố', source: 'Quyết định phê duyệt quy hoạch, cổng thông tin quy hoạch tỉnh' },
            { milestone: 'Chủ trương đầu tư / nghiên cứu khả thi', status: 'Đang lập', source: 'Văn bản của cơ quan chủ quản dự án' },
            { milestone: 'Bố trí vốn', status: 'Chưa có', source: 'Kế hoạch đầu tư công trung hạn' },
            { milestone: 'Giải phóng mặt bằng', status: 'Chưa có', source: 'Thông báo thu hồi đất, phương án bồi thường' },
            { milestone: 'Khởi công', status: 'Chưa có quyết định', source: 'Quyết định đầu tư, hồ sơ đấu thầu' },
          ],
          highlight: [
            { row: 2, tone: 'negative' },
            { row: 4, tone: 'negative' },
          ],
          caption: 'Tin đồn trên mạng hay bài quảng cáo của môi giới **không phải nguồn**. Mỗi mốc phải gắn với một văn bản có số, ngày và cơ quan ban hành.',
        },
        {
          kind: 'text',
          md: 'Giá rao cùng loại tăng ~4,7% trong khi giá chốt tăng ~2–3%. Phần chênh còn lại và toàn bộ con số "+15%" quảng cáo là **kỳ vọng về một dự án chưa có vốn và chưa khởi công**. Dự án hạ tầng thường kéo dài nhiều năm và có thể điều chỉnh vị trí, nên người mua ở giá rao đang trả trước cho một kịch bản chưa chắc chắn.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Tách giá trị đã hiện thực khỏi kỳ vọng',
          md: 'Một cách trình bày gọn cho nhóm đầu tư: **(1) giá trị hiện tại** = giá giao dịch cùng loại; **(2) phần kỳ vọng** = chênh giữa giá được đề nghị và (1); **(3) xác suất và thời điểm** kỳ vọng thành hiện thực, gắn với từng mốc tiến độ. Không gộp (2) vào (1).',
        },
        {
          kind: 'quiz',
          id: 'land-station-q3',
          question: 'Một chủ lô nhóm B chào 45 tr đ/m², nói "ga sắp làm, vài năm nữa gấp đôi". Phản hồi phân tích hợp lý nhất?',
          options: [
            {
              id: 'a',
              text: 'Chấp nhận vì chỉ cao hơn giá rao TB nhóm B (44,1) một chút.',
              explain:
                'Neo theo giá rao là đúng cái bẫy cần tránh: giá rao TB đã cao hơn giá chốt ~11,6%. So với giá giao dịch cùng loại (~39), mức 45 cao hơn khoảng 15%.',
            },
            {
              id: 'b',
              text: 'Lấy giá chốt cùng loại (khoảng 37–41) làm mốc, coi phần trên đó là trả trước cho kỳ vọng và chỉ chấp nhận nếu nhóm tự đánh giá được xác suất, thời điểm dự án.',
              correct: true,
              explain:
                'Đúng. Cách này neo vào giá trị đã được thị trường xác nhận, tách rõ phần trả cho kỳ vọng và buộc quyết định dựa trên kiểm chứng tiến độ thay vì lời hứa.',
            },
            {
              id: 'c',
              text: 'Từ chối vì mọi tin quy hoạch đều là thổi giá.',
              explain:
                'Hạ tầng thật sự có thể làm tăng giá trị đất. Từ chối tuyệt đối cũng là kết luận không dựa trên dữ liệu; việc của analyst là định lượng và gắn điều kiện, không phải chọn phe.',
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
          md: '**Brief gửi nhóm đầu tư:** Con số "+15%" là giá rao bị thổi bởi cơ cấu tin đăng (thêm lô mặt đường) và tin trùng. Giá rao cùng loại tăng ~4,7%, giá giao dịch cùng loại tăng ~2–3% trên mẫu nhỏ (20 giao dịch). Khoảng giá tham chiếu hiện tại cho lô trong ngõ ≤1 km: **37–41 tr đ/m²**, không phải 44–45. Dự án ga mới ở bước quy hoạch, chưa có vốn hay quyết định khởi công: mọi mức giá cao hơn giá chốt là trả trước cho kỳ vọng.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Định giá mọi lô mục tiêu bằng ≥ 5 giao dịch tương đồng (cùng nhóm vị trí, pháp lý, diện tích ±30%) thay vì giá rao',
              owner: 'Analyst + môi giới đối tác',
              metric: 'Chênh giá đề nghị mua so với trung vị giá chốt tương đồng',
              threshold: 'Không trả cao hơn trung vị giá chốt quá 5% khi dự án chưa có vốn',
            },
            {
              action: 'Lập bảng theo dõi tiến độ ga, mỗi mốc gắn văn bản chính thức (số, ngày, cơ quan)',
              owner: 'Trưởng nhóm đầu tư',
              metric: 'Số mốc có văn bản xác nhận',
              threshold: 'Chỉ xem xét trả phần premium kỳ vọng khi đã có bố trí vốn',
            },
            {
              action: 'Cập nhật hàng tháng chỉ số giá rao cố định cơ cấu, giá chốt, số giao dịch và tỷ lệ tin trùng',
              owner: 'Data/Analytics',
              metric: 'Chênh rao–chốt cùng loại; số giao dịch/tháng',
              threshold: 'Gắn cờ rủi ro nếu chênh > 12% hoặc giao dịch giảm 2 tháng liên tiếp',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Brief không trả lời "mua hay không" thay nhóm, mà cho nhóm **khoảng giá có căn cứ**, **danh sách dữ liệu cần xác minh** và **điều kiện cụ thể** để trả thêm cho kỳ vọng. Như vậy quyết định không phụ thuộc vào con số quảng cáo, và tự cập nhật khi dự án đạt mốc mới hoặc khi có thêm giao dịch.',
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
              title: 'Coi giá rao là giá thị trường',
              why: 'Giá rao là kỳ vọng của người bán; trong giai đoạn sốt tin, khoảng chênh với giá chốt thường nới rộng. Mua theo giá rao là trả thêm cho phần chưa ai xác nhận.',
              instead: 'Dùng giá giao dịch hoàn tất của lô tương đồng làm mốc, ghi rõ cỡ mẫu và khoảng giá.',
            },
            {
              title: 'So hai rổ lô khác nhau',
              why: 'Khi lô đắt (mặt đường, gần ga) được đăng nhiều hơn, trung bình toàn khu tăng dù không lô nào tăng giá nhiều. Đây là hiệu ứng cơ cấu.',
              instead: 'Phân tầng theo đặc điểm quyết định giá và giữ cố định cơ cấu (hoặc dùng hedonic/repeat-sales) trước khi nói "giá tăng".',
            },
            {
              title: 'Tin quy hoạch = công trình chắc chắn',
              why: 'Từ quy hoạch đến vận hành có nhiều mốc (vốn, giải phóng mặt bằng, khởi công) và có thể kéo dài hoặc điều chỉnh. Định giá như thể ga đã chạy là định giá sai rủi ro.',
              instead: 'Kiểm chứng từng mốc bằng văn bản chính thức và gắn mức premium chấp nhận được với mốc đã đạt.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Giá rao là kỳ vọng của người bán; giá trị chỉ được xác nhận bởi giao dịch hoàn tất của lô tương đồng.',
    'Khử tin trùng và cố định cơ cấu lô (phân tầng, hedonic) trước khi nói giá tăng bao nhiêu: hiệu ứng cơ cấu có thể chiếm phần lớn con số.',
    'Tách giá trị đã hiện thực khỏi kỳ vọng, và chỉ trả cho kỳ vọng khi dự án đạt mốc có văn bản chính thức.',
  ],
  references: [
    {
      title: 'Handbook on Residential Property Prices Indices (RPPIs)',
      publisher: 'Eurostat',
      url: 'https://ec.europa.eu/eurostat/web/products-manuals-and-guidelines/-/ks-ra-12-022',
      note: 'Sổ tay quốc tế (Eurostat, IMF, OECD, BIS…) về chỉ số giá nhà: phân tầng, hedonic, repeat-sales và vấn đề thay đổi cơ cấu.',
    },
    {
      title: 'Housing price statistics – house price index',
      publisher: 'Eurostat Statistics Explained',
      url: 'https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Housing_price_statistics_-_house_price_index',
      note: 'Giải thích chỉ số giá nhà dựa trên giá giao dịch và vì sao điều chỉnh chất lượng/cơ cấu là vấn đề phương pháp cốt lõi.',
    },
    {
      title: 'FHFA House Price Index',
      publisher: 'U.S. Federal Housing Finance Agency',
      url: 'https://www.fhfa.gov/data/hpi',
      note: 'Ví dụ chỉ số repeat-sales: so giá bán lặp lại của cùng một bất động sản để loại bỏ khác biệt cơ cấu.',
    },
  ],
}
