import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — Công ty A (hư cấu), Q2 vs Q3, đơn vị tỷ đồng, giả định mọi doanh thu là bán chịu, bỏ qua VAT,
 * quý = 90 ngày, DSO = phải thu cuối kỳ / doanh thu quý × 90. Đã kiểm tra khớp nhau:
 *   Tổng: doanh thu 300 → 360 (+20,0%) · phải thu 100 → 155 (+55,0%) · DSO 30,0 → 38,75 (≈ 38,8; +8,8 ngày)
 *   K (khách lớn):   DT 60 → 90 (+50,0%)  · PT 20 → 50 (+150%) · DSO 30,0 → 50,0
 *   B (đại lý cũ):   DT 180 → 190 (+5,6%) · PT 60 → 66 (+10,0%) · DSO 30,0 → 31,3 (66/190×90 = 31,26)
 *   C (đại lý nhỏ/mới, từ 1/7 hạn 60 ngày thay vì 30): DT 60 → 80 (+33,3%) · PT 20 → 39 (+95,0%) · DSO 30,0 → 43,9 (43,875)
 *   Σ DT: 60+180+60 = 300; 90+190+80 = 360 · Σ PT: 20+60+20 = 100; 50+66+39 = 155 · ΔPT 30+6+19 = 55 (54,5% / 10,9% / 34,5%)
 *   Cầu nối phải thu: nếu giữ DSO 30 ngày thì PT Q3 = 360/3 = 120 → khối lượng +20; phần do DSO +35
 *     K 50 − 30 = 20 · C 39 − 26,67 = 12,3 · B 66 − 63,33 = 2,7 → 20 + 12,3 + 2,7 = 35 ✓ · 100 + 20 + 35 = 155 ✓
 *   Tuổi nợ cuối Q3 (K / B / C → tổng): chưa đến hạn 12/55/31 = 98 · quá hạn 1–30: 8/8/5 = 21 · 31–60: 18/2/2 = 22
 *     · 61–90: 12/1/1 = 14 · > 90: 0 → tổng 155 ✓ · quá hạn 57 (36,8%; K 38 = 66,7% của quá hạn) — Q2: 88/7/3/2/0 = 100, quá hạn 12 (12%)
 *     Phải thu tăng 55 = quá hạn +45 + chưa đến hạn +10 ✓
 *   Dự phòng ước tính nội bộ (0,5% / 2% / 5% / 15% / 40%): Q3 = 0,49 + 0,42 + 1,10 + 2,10 + 0 = 4,11 (2,65% PT) · Q2 = 0,44 + 0,14 + 0,15 + 0,30 = 1,03 (1,03%) → +3,08
 *   Chi phí vốn phải thu tăng thêm: 55 × 9%/năm ≈ 4,95/năm ≈ 1,24/quý · nếu K về DSO 30 ngày: PT K = 30 → giải phóng 20
 *   Tỷ lệ hoá đơn còn mở sau 30 ngày kể từ ngày bán (T4–T8): K 18,20,19,58,72 · B 15,14,15,16,16 · C 16,15,16,68,82
 */
export const receivablesAgingReading: CaseStudy = {
  id: 'receivables-aging-reading',
  title: 'Doanh thu tăng 20% nhưng khoản phải thu tăng 55%',
  domain: 'accounting',
  level: 'junior',
  minutes: 11,
  skills: ['cash-flow', 'segmentation', 'financial-statements', 'cohort'],
  question:
    'Doanh thu quý tăng 20% nhưng phải thu tăng 55% và DSO kéo dài từ 30 lên gần 39 ngày. Do chính sách bán chịu nới lỏng hay do một khách lớn trả chậm, và cần trích dự phòng bao nhiêu?',
  summary:
    'Tách DSO theo nhóm khách và tuổi nợ (aging), xem cohort theo tháng bán, đặt hai giả thuyết đối nhau, loại trừ bằng dữ liệu và ước tính dự phòng nợ phải thu khó đòi.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng: công ty, khách hàng và mọi con số đều là giả định để minh họa.* **Công ty A** phân phối thiết bị xây dựng. Doanh thu Q3 tăng 20% so với Q2, ban giám đốc rất hài lòng. Nhưng kế toán trưởng báo **khoản phải thu khách hàng tăng 55%** và tiền về chậm hơn kế hoạch. Từ 1/7 phòng kinh doanh nới chính sách: đại lý nhỏ và đại lý mới được bán chịu **60 ngày** thay vì 30 ngày. Cùng thời gian đó, khách lớn **K** (nhà thầu, chiếm 25% doanh thu Q2) cũng có vẻ thanh toán chậm. Để đơn giản, giả định mọi doanh thu là bán chịu và bỏ qua VAT.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Doanh thu quý', value: '360 tỷ đ', delta: '+20,0%', tone: 'positive', note: 'Q2: 300 tỷ' },
            { label: 'Phải thu cuối kỳ', value: '155 tỷ đ', delta: '+55,0%', tone: 'negative', note: 'Q2: 100 tỷ' },
            { label: 'DSO', value: '38,8 ngày', delta: '+8,8 ngày', tone: 'warning', note: 'Q2: 30,0 ngày' },
            { label: 'Phải thu quá hạn', value: '57 tỷ đ', delta: '12 → 57', tone: 'negative', note: '36,8% tổng phải thu' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi cần trả lời',
          md: 'Không phải "DSO cao hay thấp" mà là: **tiền đang kẹt ở ai, kẹt vì hạn thanh toán dài hơn hay vì khách trả trễ, và phần nào có nguy cơ không thu được** để kịp trích dự phòng.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: tách "bán nhiều hơn", "cho nợ lâu hơn" và "trả trễ"',
      blocks: [
        {
          kind: 'formula',
          expression: 'DSO = Phải thu cuối kỳ / Doanh thu kỳ × Số ngày của kỳ  ·  Phải thu = Doanh thu/ngày × DSO',
          note: 'Phải thu tăng vì **3 nguyên nhân khác nhau**: doanh thu tăng (khối lượng), hạn thanh toán dài hơn (chính sách), khách trả quá hạn (hành vi/rủi ro). DSO gộp cả ba nên không cho biết cái nào.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Phân rã**: bao nhiêu phần phải thu tăng do doanh thu, bao nhiêu do DSO?',
            '**Phân khúc**: DSO và phải thu thay đổi ở nhóm khách nào? Có nhóm nào chiếm phần lớn mức tăng?',
            '**Aging + cohort theo tháng bán**: phần tăng là chưa đến hạn (bình thường nếu hạn dài hơn) hay đã quá hạn (đáng lo)? Bắt đầu từ lô hóa đơn tháng nào?',
            '**Giả thuyết đối nhau và loại trừ**: chính sách nới lỏng vs khách lớn trả chậm; mỗi giả thuyết dự đoán điều gì ở dữ liệu, rồi xem dữ liệu nào phủ nhận.',
            '**Đánh giá rủi ro và ra hành động**: dự phòng, thu hồi, hạn mức tín dụng.',
          ],
        },
        {
          kind: 'quiz',
          id: 'receivables-aging-reading-q1',
          question: 'Sếp hỏi "DSO tăng 8,8 ngày là do đâu?". Việc đầu tiên bạn nên làm là gì?',
          options: [
            {
              id: 'a',
              text: 'Báo cáo ngay rằng bán chịu 60 ngày là nguyên nhân vì đó là thay đổi lớn nhất trong quý.',
              explain:
                'Đây là suy luận từ "cái gì thay đổi", không phải từ dữ liệu. Chính sách mới chỉ áp dụng cho một nhóm khách; chưa biết nhóm đó đóng góp bao nhiêu vào mức tăng.',
            },
            {
              id: 'b',
              text: 'Tách DSO và phải thu theo nhóm khách, rồi xem phần tăng nằm ở trong hạn hay quá hạn (aging).',
              correct: true,
              explain:
                'Đúng. DSO là con số gộp; phân khúc cho biết ai đóng góp, aging cho biết đó là chậm do hạn dài hơn hay do trả trễ. Hai việc này mới cho phép đặt giả thuyết có thể kiểm tra.',
            },
            {
              id: 'c',
              text: 'Trích ngay dự phòng 30% cho toàn bộ phải thu vì rủi ro đã tăng.',
              explain:
                'Dự phòng dựa trên khả năng thu hồi từng khoản/nhóm và tuổi nợ, không áp đại trà. Trích quá tay làm sai lợi nhuận và che mất chỗ thật sự có rủi ro.',
            },
          ],
        },
      ],
    },
    {
      id: 'segment',
      kind: 'analysis',
      title: 'Bước 1 — Phân khúc: một nửa mức tăng nằm ở một khách',
      blocks: [
        {
          kind: 'table',
          title: 'Doanh thu, phải thu và DSO theo nhóm khách (Q2 → Q3, tỷ đ)',
          columns: [
            { key: 'seg', label: 'Nhóm khách' },
            { key: 'rev', label: 'Doanh thu Q2 → Q3', align: 'right' },
            { key: 'ar', label: 'Phải thu Q2 → Q3', align: 'right' },
            { key: 'dar', label: 'Δ phải thu', align: 'right' },
            { key: 'dso', label: 'DSO (ngày)', align: 'right' },
          ],
          rows: [
            { seg: 'K — khách lớn (nhà thầu)', rev: '60 → 90 (+50,0%)', ar: '20 → 50', dar: '+30 (54,5%)', dso: '30,0 → 50,0' },
            { seg: 'B — đại lý hiện hữu', rev: '180 → 190 (+5,6%)', ar: '60 → 66', dar: '+6 (10,9%)', dso: '30,0 → 31,3' },
            { seg: 'C — đại lý nhỏ/mới (hạn 60 ngày từ 1/7)', rev: '60 → 80 (+33,3%)', ar: '20 → 39', dar: '+19 (34,5%)', dso: '30,0 → 43,9' },
            { seg: 'Tổng', rev: '300 → 360 (+20,0%)', ar: '100 → 155', dar: '+55', dso: '30,0 → 38,8' },
          ],
          highlight: [{ row: 0, tone: 'negative' }, { row: 2, tone: 'warning' }],
          caption: 'Tỷ trọng làm tròn một chữ số thập phân. Cả ba nhóm cùng có DSO 30 ngày ở Q2, nên mọi khác biệt là của Q3.',
        },
        {
          kind: 'table',
          title: 'Cầu nối phải thu: 100 → 155 tỷ đ',
          columns: [
            { key: 'item', label: 'Thành phần' },
            { key: 'calc', label: 'Cách tính', align: 'right' },
            { key: 'value', label: 'Tác động', align: 'right' },
          ],
          rows: [
            { item: 'Phải thu Q2', calc: '', value: '100' },
            { item: 'Doanh thu tăng 20% (giữ DSO 30 ngày)', calc: '360/3 − 100', value: '+20' },
            { item: 'DSO của K tăng 30 → 50 ngày', calc: '50 − 90/3', value: '+20' },
            { item: 'DSO của C tăng 30 → 43,9 ngày', calc: '39 − 80/3', value: '+12,3' },
            { item: 'DSO của B tăng nhẹ', calc: '66 − 190/3', value: '+2,7' },
            { item: 'Phải thu Q3', calc: '', value: '155' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Trong 55 tỷ tăng thêm: 20 tỷ chỉ vì bán nhiều hơn (lành mạnh), 35 tỷ vì DSO kéo dài. Riêng K chiếm 20/35.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Luôn thử bỏ từng phân khúc ra và tính lại DSO. Bỏ K, DSO còn 35,0 ngày (105/270 × 90); bỏ C, DSO còn 37,3 ngày (116/280 × 90). Một khách đơn lẻ có thể kéo cả chỉ số của công ty, vì vậy đừng báo cáo DSO toàn công ty như một con số duy nhất.',
        },
        {
          kind: 'quiz',
          id: 'receivables-aging-reading-q2',
          question: 'Từ hai bảng trên, nhận định nào có cơ sở nhất?',
          options: [
            {
              id: 'a',
              text: 'DSO tăng đồng đều ở mọi khách nên là vấn đề của chính sách công ty.',
              explain:
                'Dữ liệu cho thấy ngược lại: B gần như không đổi (30,0 → 31,3), K và C tăng mạnh. Mức tăng tập trung ở hai nhóm.',
            },
            {
              id: 'b',
              text: 'Mức tăng tập trung ở K và C; chưa đủ dữ liệu để biết K trả chậm vì lý do gì, cần xem tuổi nợ và hợp đồng.',
              correct: true,
              explain:
                'Đúng. K và C đóng góp 49/55 tỷ (89%). Bảng này chỉ chỉ ra "ở đâu"; để biết "vì sao" cần aging để phân biệt hạn dài hơn với trả trễ.',
            },
            {
              id: 'c',
              text: 'Chỉ cần xử lý K vì K đóng góp nhiều nhất, C không đáng quan tâm.',
              explain:
                'C đóng góp 19 tỷ (34,5%), gần bằng 1/3 mức tăng và liên quan đến chính sách mới. Có thể ít rủi ro hơn K, nhưng phải đo trước khi bỏ qua.',
            },
          ],
        },
      ],
    },
    {
      id: 'aging',
      kind: 'analysis',
      title: 'Bước 2 — Aging và cohort: chậm vì hạn dài hơn hay vì trả trễ?',
      blocks: [
        {
          kind: 'table',
          title: 'Tuổi nợ phải thu cuối Q3 theo nhóm khách (tỷ đ)',
          columns: [
            { key: 'seg', label: 'Nhóm' },
            { key: 'cur', label: 'Chưa đến hạn', align: 'right' },
            { key: 'd30', label: 'Quá hạn 1–30', align: 'right' },
            { key: 'd60', label: '31–60', align: 'right' },
            { key: 'd90', label: '61–90', align: 'right' },
            { key: 'over', label: '> 90', align: 'right' },
            { key: 'total', label: 'Tổng', align: 'right' },
          ],
          rows: [
            { seg: 'K', cur: 12, d30: 8, d60: 18, d90: 12, over: 0, total: 50 },
            { seg: 'B', cur: 55, d30: 8, d60: 2, d90: 1, over: 0, total: 66 },
            { seg: 'C', cur: 31, d30: 5, d60: 2, d90: 1, over: 0, total: 39 },
            { seg: 'Tổng Q3', cur: 98, d30: 21, d60: 22, d90: 14, over: 0, total: 155 },
            { seg: 'Tổng Q2', cur: 88, d30: 7, d60: 3, d90: 2, over: 0, total: 100 },
          ],
          highlight: [{ row: 0, tone: 'negative' }, { row: 2, tone: 'warning' }],
          caption: 'Quá hạn Q3 = 57 tỷ (36,8%), Q2 = 12 tỷ (12%). Phải thu tăng 55 = quá hạn +45 và chưa đến hạn +10.',
        },
        {
          kind: 'text',
          md: 'Hai bức tranh khác nhau hẳn. **C**: 31/39 tỷ (79%) *chưa đến hạn*, vì hạn 60 ngày làm hóa đơn nằm trong sổ lâu hơn, DSO tăng mang tính cơ học và đó là hệ quả của chính sách, chưa hẳn là rủi ro. **K**: 38/50 tỷ (76%) *đã quá hạn*, trong đó 12 tỷ quá hạn 61–90 ngày, đây mới là tín hiệu trả trễ. K chiếm 38/57 = 66,7% tổng nợ quá hạn.',
        },
        {
          kind: 'chart',
          title: 'Cohort theo tháng bán: % hóa đơn còn mở sau 30 ngày kể từ ngày bán',
          type: 'line',
          xKey: 'month',
          unit: '%',
          series: [
            { key: 'k', label: 'K (khách lớn)' },
            { key: 'b', label: 'B (đại lý cũ)' },
            { key: 'c', label: 'C (nhỏ/mới)' },
          ],
          data: [
            { month: 'T4', k: 18, b: 15, c: 16 },
            { month: 'T5', k: 20, b: 14, c: 15 },
            { month: 'T6', k: 19, b: 15, c: 16 },
            { month: 'T7', k: 58, b: 16, c: 68 },
            { month: 'T8', k: 72, b: 16, c: 82 },
          ],
          marker: { x: 'T7', label: 'Nới bán chịu 60 ngày (1/7)' },
          caption: 'Mỗi điểm là một cohort (tháng phát hành hóa đơn), đo cùng độ tuổi 30 ngày. Cả K và C "gãy" từ T7, nhưng nguyên nhân có thể khác nhau.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Trùng thời điểm không chứng minh nguyên nhân',
          md: 'K cũng bắt đầu trả chậm từ T7, đúng ngày chính sách mới có hiệu lực. Nhưng K **không thuộc nhóm được nới hạn** (hợp đồng vẫn 30 ngày). Với C, đường biểu đồ cao một phần là hệ quả cơ học của hạn 60 ngày: 30 ngày sau ngày bán họ chưa đến hạn nên chưa phải trả.',
        },
        {
          kind: 'quiz',
          id: 'receivables-aging-reading-q3',
          question: 'Cách đọc nào đúng về DSO 43,9 ngày của nhóm C (hạn thanh toán mới là 60 ngày)?',
          options: [
            {
              id: 'a',
              text: 'C trả chậm bất thường (43,9 > 30 ngày) nên phải ngừng bán chịu cho nhóm này.',
              explain:
                'So với con số 30 ngày cũ là so sai mốc. Hạn mới là 60 ngày, DSO 43,9 ngày vẫn nhanh hơn hạn cho phép và 79% dư nợ chưa đến hạn.',
            },
            {
              id: 'b',
              text: 'DSO tăng một phần là hệ quả cơ học của hạn mới; cần so với hạn 60 ngày và xem tuổi nợ để biết có quá hạn thật không.',
              correct: true,
              explain:
                'Đúng. DSO phải đọc cùng hạn thanh toán. Ở C, 31/39 tỷ chưa đến hạn; phần cần theo dõi là 8 tỷ đã quá hạn (20,5%).',
            },
            {
              id: 'c',
              text: 'Phải thu của C chỉ tăng theo doanh thu (+33,3%), không có yếu tố nào khác.',
              explain:
                'Nếu DSO không đổi, phải thu C chỉ lên 26,7 tỷ; thực tế là 39 tỷ, chênh 12,3 tỷ do thời gian nợ dài hơn.',
            },
          ],
        },
      ],
    },
    {
      id: 'hypothesis',
      kind: 'analysis',
      title: 'Bước 3 — Hai giả thuyết, cách loại trừ và dự phòng',
      blocks: [
        {
          kind: 'table',
          title: 'Mỗi giả thuyết dự đoán gì, và dữ liệu nói gì',
          columns: [
            { key: 'h', label: 'Giả thuyết' },
            { key: 'predict', label: 'Nếu đúng, ta sẽ thấy' },
            { key: 'seen', label: 'Dữ liệu thực tế' },
            { key: 'verdict', label: 'Kết luận' },
          ],
          rows: [
            {
              h: 'H1. Chính sách nới 60 ngày làm DSO tăng',
              predict: 'DSO tăng ở nhóm được nới (C); phần tăng chủ yếu chưa đến hạn; K và B không đổi',
              seen: 'C: DSO 43,9, 79% chưa đến hạn. B không đổi. Nhưng K cũng tăng mạnh',
              verdict: 'Đúng với C (+12,3 tỷ), không giải thích K',
            },
            {
              h: 'H2. Khách K trả chậm',
              predict: 'Nợ của K quá hạn, tập trung ở khoảng 31–90 ngày; các nhóm khác ổn',
              seen: 'K: 38/50 tỷ quá hạn, 30 tỷ ở khoảng 31–90 ngày; chiếm 66,7% quá hạn',
              verdict: 'Đúng, giải thích 20/35 tỷ phần do DSO',
            },
            {
              h: 'H3. Ghi nhận doanh thu sớm (cut-off) làm phình cả doanh thu lẫn phải thu',
              predict: 'Hóa đơn dồn cuối quý, nhiều hóa đơn chưa có biên bản giao hàng, ghi có sau kỳ',
              seen: 'Chưa kiểm: cần đối chiếu hóa đơn 5 ngày cuối quý với phiếu giao hàng',
              verdict: 'Chưa loại trừ, cần kiểm tra',
            },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: 'Chính sách nới lỏng và khách lớn trả chậm đều có mặt, nhưng không cùng cỡ: K lớn gấp khoảng 1,6 lần C trong phần DSO.',
        },
        {
          kind: 'list',
          style: 'check',
          items: [
            '**Loại trừ nghi vấn K "cũng được nới hạn":** đối chiếu hợp đồng và phê duyệt; nếu có thỏa thuận miệng, phần quá hạn thực chất là "hạn không chính thức" và cần ghi nhận khác đi.',
            '**Loại trừ tranh chấp/hàng trả lại:** hóa đơn K quá hạn có nằm trong biên bản đối chiếu công nợ hay đang khiếu nại?',
            '**Loại trừ lỗi dữ liệu:** thu tiền đã về nhưng chưa bù trừ hóa đơn (unapplied cash) làm phình quá hạn giả tạo.',
            '**Kiểm tra cut-off:** doanh thu +20% có dồn vào cuối quý hay không.',
          ],
        },
        {
          kind: 'table',
          title: 'Dự phòng nợ phải thu: ước tính nội bộ theo tuổi nợ (tỷ đ)',
          columns: [
            { key: 'bucket', label: 'Tuổi nợ' },
            { key: 'rate', label: 'Tỷ lệ giả định', align: 'right' },
            { key: 'q2', label: 'Q2 (số dư → dự phòng)', align: 'right' },
            { key: 'q3', label: 'Q3 (số dư → dự phòng)', align: 'right' },
          ],
          rows: [
            { bucket: 'Chưa đến hạn', rate: '0,5%', q2: '88 → 0,44', q3: '98 → 0,49' },
            { bucket: 'Quá hạn 1–30 ngày', rate: '2%', q2: '7 → 0,14', q3: '21 → 0,42' },
            { bucket: '31–60 ngày', rate: '5%', q2: '3 → 0,15', q3: '22 → 1,10' },
            { bucket: '61–90 ngày', rate: '15%', q2: '2 → 0,30', q3: '14 → 2,10' },
            { bucket: 'Tổng', rate: '', q2: '1,03 (1,03%)', q3: '4,11 (2,65%)' },
          ],
          caption: 'Tỷ lệ chỉ là giả định nội bộ để minh họa (kiểu provision matrix). Dự phòng ước tính tăng 3,08 tỷ đ, còn chi phí vốn của 55 tỷ phải thu tăng thêm (giả định 9%/năm) khoảng 1,24 tỷ đ/quý.',
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Quy định thật và cách đọc',
          md: 'Theo Thông tư 48/2019/TT-BTC (Điều 6), mức trích lập tối thiểu theo thời gian quá hạn là 30% (6 tháng đến dưới 1 năm), 50% (1 đến dưới 2 năm), 70% (2 đến dưới 3 năm), 100% (từ 3 năm), và vẫn phải lập dự phòng cho khoản chưa đến hạn nhưng có khả năng không thu hồi đúng hạn. Ở số liệu này chưa khoản nào quá hạn trên 6 tháng, nên không có khoản nào *bắt buộc* theo mốc tuổi; nhưng **khoản 38 tỷ quá hạn của K là loại cần đánh giá theo khả năng thu hồi**. Kiểm tra thông tư còn hiệu lực/được sửa đổi ra sao trước khi áp dụng. Theo IFRS 9, doanh nghiệp dùng mô hình tổn thất tín dụng kỳ vọng, nên bảng tỷ lệ nội bộ như trên là cách làm phổ biến.',
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
          md: '**Kết luận:** Phải thu tăng 55 tỷ gồm 20 tỷ do doanh thu tăng (lành mạnh) và 35 tỷ do DSO kéo dài. Trong 35 tỷ đó, **20 tỷ là K trả trễ** (rủi ro thật, 38 tỷ quá hạn) và **12,3 tỷ là hạn 60 ngày của nhóm C** (cái giá có chủ đích của chính sách, chưa phải nợ xấu). Không "siết" đồng loạt: xử lý K bằng thu hồi và hạn mức, giữ chính sách C nhưng theo dõi có ngưỡng.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Làm việc với K: đối chiếu công nợ, lập kế hoạch trả cho 38 tỷ quá hạn; tạm giữ đơn mới nếu quá hạn > 60 ngày chưa có lịch thanh toán',
              owner: 'Kế toán trưởng + Giám đốc kinh doanh',
              metric: 'Dư nợ quá hạn của K; DSO của K',
              threshold: 'Quá hạn K giảm từ 38 xuống ≤ 15 tỷ trong 45 ngày; DSO K ≤ 35 ngày',
            },
            {
              action: 'Giữ hạn 60 ngày cho C nhưng đặt hạn mức theo từng đại lý và theo dõi aging hằng tuần',
              owner: 'Trưởng phòng tín dụng',
              metric: '% dư nợ C quá hạn; tỷ lệ cohort mới thu đúng hạn',
              threshold: 'Quá hạn C ≤ 15% dư nợ (hiện 8/39 = 20,5%); vượt ngưỡng 2 tháng liên tiếp thì đưa về hạn 30 ngày',
            },
            {
              action: 'Trích dự phòng bổ sung theo bảng tỷ lệ nội bộ và đánh giá riêng khoản K',
              owner: 'Kế toán tổng hợp + CFO',
              metric: 'Dự phòng / phải thu; dự phòng của K',
              threshold: 'Dự phòng ≥ 4,1 tỷ (2,65% phải thu); xem xét thêm nếu K quá hạn > 90 ngày',
            },
            {
              action: 'Thêm báo cáo aging theo nhóm khách + cohort theo tháng bán vào báo cáo công nợ hằng tháng; kiểm tra cut-off cuối quý',
              owner: 'Data/Analytics + Kế toán',
              metric: 'Quá hạn / phải thu; DSO theo nhóm; số hóa đơn cuối quý chưa có chứng từ giao hàng',
              threshold: 'Quá hạn ≤ 20% phải thu; 0 hóa đơn cuối quý thiếu chứng từ giao hàng',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Mỗi nguyên nhân có một công cụ riêng: **thu hồi** cho trả trễ (K), **hạn mức và theo dõi** cho chính sách chủ động (C), **dự phòng** cho phần rủi ro chưa mất. Nếu siết toàn bộ bán chịu, công ty có thể mất doanh thu của nhóm C; nếu bỏ qua K, 38 tỷ quá hạn có thể thành nợ khó đòi và kéo dòng tiền.',
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
              title: 'Đọc DSO toàn công ty như một con số',
              why: 'DSO gộp nhiều nhóm có hạn và hành vi khác nhau; một khách lớn có thể kéo cả chỉ số, và hạn dài hơn làm DSO tăng dù không ai trễ.',
              instead: 'Tách DSO theo nhóm khách và so với hạn thanh toán của từng nhóm; xem thêm tỷ lệ quá hạn từ aging.',
            },
            {
              title: 'Kết luận nguyên nhân chỉ vì trùng thời điểm',
              why: 'K và C cùng "gãy" từ T7, nhưng K không thuộc nhóm được nới hạn. Suy ra "do chính sách" sẽ bỏ sót khách trả trễ thật.',
              instead: 'Đặt giả thuyết, nói rõ dữ liệu nào xác nhận hoặc phủ nhận, rồi kiểm tra ở cấp phân khúc.',
            },
            {
              title: 'Chỉ trích lập dự phòng khi nợ quá hạn đủ mốc quy định',
              why: 'Mốc 6 tháng là mức tối thiểu theo tuổi nợ; khoản chưa đến hạn nhưng có khả năng không thu hồi vẫn phải được đánh giá. Chờ đủ mốc nghĩa là ghi nhận tổn thất quá trễ.',
              instead: 'Kết hợp tuổi nợ và đánh giá khả năng thu hồi từng khách trọng yếu; dùng bảng tỷ lệ theo bucket làm cơ sở.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'DSO là con số gộp: tách thành khối lượng bán, hạn thanh toán dài hơn và trả trễ bằng phân khúc, aging và cohort theo tháng bán.',
    'Phải thu tăng vì hạn dài hơn là chi phí của chính sách (theo dõi), còn quá hạn tập trung ở một khách là rủi ro (thu hồi, hạn mức, dự phòng).',
    'Hai giả thuyết có thể đúng cùng lúc: nêu mỗi giả thuyết dự đoán gì, kiểm tra bằng dữ liệu, và định cỡ mức đóng góp trước khi kết luận.',
  ],
  references: [
    {
      title: 'Thông tư 48/2019/TT-BTC hướng dẫn trích lập và xử lý các khoản dự phòng',
      publisher: 'Bộ Tài chính (bản đăng trên LuatVietnam)',
      url: 'https://luatvietnam.vn/tai-chinh/thong-tu-48-2019-tt-btc-huong-dan-trich-lap-va-xu-ly-cac-khoan-du-phong-giam-gia-hang-ton-kho-176135-d1.html',
      note: 'Điều 6: mức trích lập dự phòng nợ phải thu khó đòi theo thời gian quá hạn (30%/50%/70%/100%). Trang ghi thông tư từng được sửa đổi (24/2022/TT-BTC), cần đối chiếu hiệu lực.',
    },
    {
      title: 'Days sales outstanding',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Days_sales_outstanding',
      note: 'Định nghĩa DSO và các yếu tố làm nó thay đổi (khối lượng bán, mùa vụ, tốc độ thu tiền, điều khoản bán chịu).',
    },
    {
      title: 'IFRS 9 Financial Instruments',
      publisher: 'IFRS Foundation',
      url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/',
      note: 'Trang chuẩn mực có yêu cầu suy giảm giá trị theo tổn thất tín dụng kỳ vọng, nền tảng của cách ước tính dự phòng theo bucket tuổi nợ.',
    },
  ],
}
