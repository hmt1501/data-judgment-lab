import type { CaseStudy } from '../types'

/*
 * Công ty giả định ("Công ty A"), số liệu MÔ PHỎNG, đã tự kiểm bằng tính tay. Đơn vị: tỷ đồng.
 * Doanh thu: Q2 1.000 · Q3 1.010 (+1,0%, toàn bộ do sản lượng; giá niêm yết không đổi)
 * Biên gộp báo cáo: Q2 22,0% (GP 220, bình quân gia quyền) · Q3 25,0% (GP 252,5, FIFO) → +3,0 điểm %
 * Nguyên liệu (tr đ/tấn, tấn): tồn đầu 10.000 @ 18,0 · mua 30.000 @ 24,4 · dùng 30.000
 *   Bình quân gia quyền: (180.000 + 732.000)/40.000 = 22,8 → giá vốn NL 684,0 tỷ
 *   FIFO: 10.000×18,0 + 20.000×24,4 = 668,0 tỷ  → chênh 16,0 tỷ (=1,58 điểm % doanh thu Q3)
 * Q3 tính lại theo bình quân gia quyền (like-for-like): giá vốn 757,5 + 16,0 = 773,5 · GP 236,5 · biên 23,4% (23,42)
 * Mix (dòng, doanh thu / GP, theo bình quân gia quyền):
 *   Q2  Cao cấp 300 / 120 (40,0%) · Phổ thông 700 / 100 (14,3%) → 1.000 / 220
 *   Q3  Cao cấp 340 / 138 (40,6%) · Phổ thông 670 / 98,5 (14,7%) → 1.010 / 236,5
 *   Tỷ trọng Cao cấp 30,0% → 33,7%
 * Bridge +3,0 điểm %: mix +0,94 (0,9) · biên từng dòng +0,47 (0,5) · đổi phương pháp +1,58 (1,6); 0,94+0,47+1,58 = 3,00
 *   Mix = Σ (tỷ trọng Q3 − tỷ trọng Q2) × biên Q2 = 0,0366×40,0% − 0,0366×14,29% = 0,94
 */
export const inventoryCostingMarginShift: CaseStudy = {
  id: 'inventory-costing-margin-shift',
  title: 'Biên gộp nhảy 3 điểm % khi giá bán và sản lượng không đổi',
  domain: 'accounting',
  level: 'mid',
  minutes: 12,
  skills: ['revenue-recognition', 'mix-effect', 'data-quality'],
  question:
    'Biên lợi nhuận gộp quý 3 của Công ty A tăng từ 22,0% lên 25,0% dù giá bán và sản lượng gần như không đổi. Bao nhiêu điểm % là cải thiện thật, bao nhiêu là do đổi phương pháp tính giá vốn hàng tồn kho và do mix sản phẩm?',
  summary:
    'Dựng bridge biên gộp thành mix, biên từng dòng và hiệu ứng đổi phương pháp (bình quân gia quyền sang FIFO), tính lại like-for-like cùng một phương pháp và biết tìm bằng chứng trong thuyết minh báo cáo tài chính.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst tài chính của **Công ty A** (doanh nghiệp sản xuất nhựa kỹ thuật giả định). Giá hạt nhựa, nguyên liệu chính, tăng liên tục từ đầu năm. Báo cáo quý 3 cho thấy biên gộp tăng mạnh và CFO muốn đưa nó vào thông điệp với nhà đầu tư: *"hiệu quả vận hành cải thiện rõ rệt"*. Nhưng bộ phận kinh doanh xác nhận **giá niêm yết không đổi**, còn sản lượng chỉ nhích nhẹ. Toàn bộ số liệu dưới đây là **minh họa, do giả định**, không phải số thật của doanh nghiệp nào.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Doanh thu', value: '1.010 tỷ', delta: '+1,0% so với Q2 (1.000 tỷ)', tone: 'neutral' },
            { label: 'Giá niêm yết', value: 'Không đổi', tone: 'neutral' },
            { label: 'Biên gộp báo cáo', value: '25,0%', delta: '+3,0 điểm % (Q2: 22,0%)', tone: 'positive' },
            { label: 'Phương pháp tính giá vốn', value: 'FIFO', note: 'Q2: bình quân gia quyền', tone: 'warning' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu của buổi phân tích',
          md: 'Trả lời được 3 câu: **+3,0 điểm % chia thành những phần nào**, **biên gộp quý 3 là bao nhiêu nếu giữ nguyên phương pháp quý 2**, và **tìm bằng chứng đổi phương pháp ở đâu** trong báo cáo tài chính.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: biên gộp thay đổi vì ba lý do khác nhau',
      blocks: [
        {
          kind: 'formula',
          expression: 'Δ biên gộp = hiệu ứng mix + hiệu ứng biên từng dòng + hiệu ứng phương pháp kế toán',
          note: '**Mix** = Σ (Δ tỷ trọng doanh thu dòng i × biên kỳ gốc của dòng i). **Biên từng dòng** = thay đổi biên trong nội bộ mỗi dòng (giá, chi phí thật). **Phương pháp** = chênh lệch giá vốn khi tính cùng số liệu nhập, xuất bằng hai phương pháp. Chỉ phần *biên từng dòng* mới là cải thiện vận hành; mix là thay đổi cơ cấu bán hàng; phương pháp không thay đổi tiền thật vì dòng tiền mua nguyên liệu vẫn y nguyên.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Hỏi trước khi tính**: giá bán, sản lượng, giá mua nguyên liệu và chính sách kế toán có gì đổi trong kỳ?',
            '**Tính lại like-for-like**: tính biên quý 3 theo đúng phương pháp quý 2 để loại phần do kế toán.',
            '**Bridge phần còn lại**: tách mix và biên từng dòng sản phẩm.',
            '**Kiểm chứng bằng thuyết minh**: đọc phần chính sách kế toán và thay đổi chính sách, rồi chốt kết luận và hành động.',
          ],
        },
        {
          kind: 'quiz',
          id: 'inventory-costing-margin-shift-q1',
          question: 'Giá bán và sản lượng gần như không đổi nhưng biên gộp tăng 3 điểm %. Việc đầu tiên đúng nhất là gì?',
          options: [
            {
              id: 'a',
              text: 'Ghi nhận đây là cải thiện vận hành và đưa vào thông điệp với nhà đầu tư.',
              explain:
                'Chưa đủ cơ sở. Khi giá, lượng không đổi mà biên đổi, nguyên nhân nằm ở giá vốn hoặc cơ cấu. Phải loại trừ yếu tố kế toán và mix trước khi gọi là "cải thiện vận hành".',
            },
            {
              id: 'b',
              text: 'Hỏi xem chính sách kế toán (phương pháp tính giá vốn) và giá nguyên liệu có thay đổi không, rồi tính lại biên theo cùng phương pháp kỳ trước.',
              correct: true,
              explain:
                'Đúng. Biên là doanh thu trừ giá vốn; giá bán đã cố định nên phải nhìn giá vốn và cách tính nó. Tính lại like-for-like cho biết phần chênh lệch đến từ kế toán chứ không phải từ hoạt động.',
            },
            {
              id: 'c',
              text: 'Nghi ngờ dữ liệu doanh thu sai và yêu cầu kế toán đối soát lại hóa đơn bán hàng.',
              explain:
                'Doanh thu khớp với dự kiến (+1,0% do sản lượng). Nghi ngờ là hợp lý nhưng nên kiểm tra phía giá vốn trước vì đó là phía thay đổi.',
            },
          ],
        },
      ],
    },
    {
      id: 'method-effect',
      kind: 'analysis',
      title: 'Bước 1 — Tách hiệu ứng phương pháp: FIFO làm giá vốn thấp hơn 16,0 tỷ',
      blocks: [
        {
          kind: 'text',
          md: 'Trong quý, giá hạt nhựa tăng từ 18,0 triệu đồng/tấn (tồn đầu) lên 24,4 triệu đồng/tấn (mua trong quý). Khi giá **đang tăng**, FIFO xuất kho lô cũ rẻ trước nên giá vốn thấp hơn bình quân gia quyền, còn bình quân gia quyền trộn cả lô cũ lẫn lô mới. Cùng một lượng nguyên liệu dùng (30.000 tấn), cùng tiền mua:',
        },
        {
          kind: 'table',
          title: 'Giá vốn nguyên liệu quý 3 theo hai phương pháp (cùng số lượng nhập, xuất)',
          columns: [
            { key: 'item', label: 'Khoản mục' },
            { key: 'wac', label: 'Bình quân gia quyền', align: 'right' },
            { key: 'fifo', label: 'FIFO', align: 'right' },
          ],
          rows: [
            { item: 'Tồn đầu: 10.000 tấn @ 18,0 tr/tấn (tỷ đ)', wac: '180,0', fifo: '180,0' },
            { item: 'Mua trong quý: 30.000 tấn @ 24,4 (tỷ đ)', wac: '732,0', fifo: '732,0' },
            { item: 'Đơn giá xuất (tr đ/tấn)', wac: '22,8', fifo: '18,0 cho 10.000 tấn đầu, 24,4 phần còn lại' },
            { item: 'Giá vốn NL của 30.000 tấn dùng (tỷ đ)', wac: '684,0', fifo: '668,0' },
            { item: 'Tồn cuối: 10.000 tấn (tỷ đ)', wac: '228,0', fifo: '244,0' },
          ],
          highlight: [{ row: 3, tone: 'warning' }],
          caption: 'Chênh lệch 16,0 tỷ đồng chuyển từ giá vốn sang giá trị tồn kho cuối kỳ (244,0 so với 228,0). Lợi nhuận kế toán tăng nhưng tiền thật không tăng: tổng tiền mua vẫn là 732,0 tỷ.',
        },
        {
          kind: 'table',
          title: 'Tính lại like-for-like cho Q3 (tỷ đồng)',
          columns: [
            { key: 'item', label: 'Chỉ tiêu' },
            { key: 'q2', label: 'Q2 (bình quân gia quyền)', align: 'right' },
            { key: 'q3f', label: 'Q3 báo cáo (FIFO)', align: 'right' },
            { key: 'q3w', label: 'Q3 tính lại (bình quân gia quyền)', align: 'right' },
          ],
          rows: [
            { item: 'Doanh thu', q2: '1.000,0', q3f: '1.010,0', q3w: '1.010,0' },
            { item: 'Giá vốn hàng bán', q2: '780,0', q3f: '757,5', q3w: '773,5' },
            { item: 'Lợi nhuận gộp', q2: '220,0', q3f: '252,5', q3w: '236,5' },
            { item: 'Biên gộp', q2: '22,0%', q3f: '25,0%', q3w: '23,4%' },
          ],
          highlight: [{ row: 3, tone: 'positive' }],
          caption: 'Đổi phương pháp đóng góp 25,0% − 23,4% = khoảng 1,6 điểm % (16,0 / 1.010 = 1,58). Chỉ còn khoảng 1,4 điểm % là chênh lệch like-for-like cần giải thích bằng mix và biên từng dòng.',
        },
        {
          kind: 'quiz',
          id: 'inventory-costing-margin-shift-q2',
          question: 'Phần 1,6 điểm % do đổi sang FIFO nên được trình bày thế nào?',
          options: [
            {
              id: 'a',
              text: 'Tách riêng như một thay đổi chính sách kế toán, không tính vào hiệu quả vận hành, và nêu cả biên like-for-like 23,4%.',
              correct: true,
              explain:
                'Đúng. Đổi phương pháp không làm công ty mua rẻ hơn hay bán đắt hơn. Báo cả hai con số (25,0% báo cáo và 23,4% like-for-like) giúp người đọc so sánh được với Q2.',
            },
            {
              id: 'b',
              text: 'Gộp chung vào hiệu quả vận hành vì số trên báo cáo đã được kiểm toán soát xét.',
              explain:
                'Số được lập đúng chuẩn mực vẫn có thể không so sánh được giữa các kỳ. Soát xét xác nhận cách trình bày, không biến một thay đổi kế toán thành cải thiện vận hành.',
            },
            {
              id: 'c',
              text: 'Bỏ qua, vì chênh lệch giữa hai phương pháp sẽ tự triệt tiêu khi giá nguyên liệu ngừng tăng.',
              explain:
                'Có phần đúng về dài hạn (khi giá đi ngang chênh lệch dần biến mất), nhưng nó vẫn làm biên Q3 không so sánh được với Q2, và còn đảo chiều (biên giảm) nếu giá quay đầu giảm.',
            },
          ],
        },
      ],
    },
    {
      id: 'bridge',
      kind: 'analysis',
      title: 'Bước 2 — Bridge phần còn lại: mix cao cấp đóng góp 0,9 điểm %',
      blocks: [
        {
          kind: 'table',
          title: 'Doanh thu và biên gộp theo dòng sản phẩm (bình quân gia quyền, tỷ đồng)',
          columns: [
            { key: 'line', label: 'Dòng sản phẩm' },
            { key: 'r2', label: 'Doanh thu Q2', align: 'right' },
            { key: 'm2', label: 'Biên Q2', align: 'right' },
            { key: 'r3', label: 'Doanh thu Q3', align: 'right' },
            { key: 'm3', label: 'Biên Q3 (tính lại)', align: 'right' },
            { key: 's', label: 'Tỷ trọng Q2 → Q3', align: 'right' },
          ],
          rows: [
            { line: 'Cao cấp', r2: '300', m2: '40,0%', r3: '340', m3: '40,6%', s: '30,0% → 33,7%' },
            { line: 'Phổ thông', r2: '700', m2: '14,3%', r3: '670', m3: '14,7%', s: '70,0% → 66,3%' },
            { line: 'Tổng', r2: '1.000', m2: '22,0%', r3: '1.010', m3: '23,4%', s: '100%' },
          ],
          caption: 'Dòng cao cấp có biên 40% so với 14% của dòng phổ thông. Khi tỷ trọng cao cấp tăng 3,7 điểm %, biên chung tăng dù biên từng dòng gần như đứng yên.',
        },
        {
          kind: 'chart',
          title: 'Bridge biên gộp Q2 → Q3: +3,0 điểm % chia theo nguyên nhân',
          type: 'bar',
          xKey: 'cause',
          unit: ' điểm %',
          series: [{ key: 'pts', label: 'Đóng góp (điểm %)' }],
          data: [
            { cause: 'Đổi phương pháp (FIFO)', pts: 1.58 },
            { cause: 'Mix sản phẩm', pts: 0.94 },
            { cause: 'Biên từng dòng (thật)', pts: 0.47 },
            { cause: 'Tổng thay đổi', pts: 3.0 },
          ],
          caption: '1,58 + 0,94 + 0,47 = 3,00. Chỉ khoảng 0,5 điểm % là cải thiện biên trong từng dòng; hơn một nửa (1,6) là do kế toán.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của chuyên gia: mix không phải "lỗi", nhưng cũng chưa phải hiệu quả',
          md: 'Mix cao cấp tăng có thể là kết quả của chiến lược bán hàng tốt, hoặc chỉ là đơn hàng cao cấp dồn về quý này. Hãy xem **đơn hàng tồn và lịch giao** trước khi coi 0,9 điểm % là bền vững. Cách tính mix ở đây dùng biên kỳ gốc (Q2) làm trọng số, nên phần tương tác nhỏ giữa mix và biên được tính vào phần "biên từng dòng".',
        },
        {
          kind: 'quiz',
          id: 'inventory-costing-margin-shift-q3',
          question: 'Biên từng dòng chỉ tăng 0,6 điểm % (cao cấp) và 0,4 điểm % (phổ thông), nhưng biên chung like-for-like tăng 1,4 điểm %. Giải thích đúng nhất?',
          options: [
            {
              id: 'a',
              text: 'Dữ liệu theo dòng sai, vì trung bình của hai biên tăng nhỏ không thể cho biên chung tăng lớn hơn.',
              explain:
                'Số liệu không sai. Biên chung là trung bình có trọng số theo doanh thu; khi trọng số đổi, biên chung có thể tăng dù biên từng dòng gần như đứng yên (cùng bản chất hiệu ứng mix, nghịch lý Simpson).',
            },
            {
              id: 'b',
              text: 'Một phần lớn đến từ chuyển dịch cơ cấu sang dòng biên cao (mix +0,94 điểm %), phần còn lại là cải thiện biên từng dòng (+0,47).',
              correct: true,
              explain:
                'Đúng. Tỷ trọng cao cấp tăng 3,7 điểm %: 0,0366 × (40,0% − 14,3%) ≈ 0,94 điểm %. Cộng với 0,47 từ biên từng dòng được 1,4 điểm %, khớp với biên like-for-like.',
            },
            {
              id: 'c',
              text: 'Do phương pháp FIFO, vì nó vẫn ảnh hưởng đến cả hai dòng.',
              explain:
                'Các biên Q3 trong bảng đã tính lại theo bình quân gia quyền, tức đã loại hiệu ứng FIFO. Phần chênh còn lại không còn do phương pháp.',
            },
          ],
        },
      ],
    },
    {
      id: 'disclosure',
      kind: 'analysis',
      title: 'Bước 3 — Tìm bằng chứng trong thuyết minh báo cáo tài chính',
      blocks: [
        {
          kind: 'text',
          md: 'Đừng chỉ tin vào phép tính. Hãy tìm bằng chứng đổi phương pháp trong **thuyết minh** (phần chính sách kế toán, thuyết minh hàng tồn kho) và đối chiếu số liệu. Chuẩn mực kế toán Việt Nam về hàng tồn kho (**VAS 02**) cho phép doanh nghiệp chọn một trong các phương pháp tính giá xuất kho như bình quân gia quyền, FIFO hoặc đích danh, và yêu cầu thuyết minh chính sách đã áp dụng; thay đổi chính sách phải có lý do hợp lý và được thuyết minh (nội dung thay đổi, lý do, ảnh hưởng đến báo cáo, theo chuẩn mực về thay đổi chính sách kế toán). IFRS (IAS 2) cũng cho phép FIFO hoặc bình quân gia quyền.',
        },
        {
          kind: 'table',
          title: 'Danh sách kiểm tra khi đọc thuyết minh',
          columns: [
            { key: 'where', label: 'Tìm ở đâu' },
            { key: 'what', label: 'Cần thấy gì' },
            { key: 'sign', label: 'Tín hiệu đáng ngờ' },
          ],
          rows: [
            {
              where: 'Chính sách kế toán: hàng tồn kho',
              what: 'Phương pháp tính giá xuất kho kỳ này so với kỳ trước',
              sign: 'Đổi từ bình quân gia quyền sang FIFO ngay giữa giai đoạn giá tăng',
            },
            {
              where: 'Thuyết minh thay đổi chính sách',
              what: 'Lý do, tác động lên giá vốn và lợi nhuận, có hồi tố số so sánh không',
              sign: 'Không nêu tác động bằng số hoặc không điều chỉnh số kỳ trước',
            },
            {
              where: 'Thuyết minh hàng tồn kho',
              what: 'Giá trị tồn cuối kỳ, dự phòng giảm giá',
              sign: 'Giá trị tồn cuối tăng nhanh hơn doanh thu (ở ví dụ: 228 → 244 tỷ nếu so với bình quân gia quyền)',
            },
            {
              where: 'Báo cáo của ban điều hành',
              what: 'Lời giải thích cho thay đổi biên gộp',
              sign: 'Gán toàn bộ tăng biên cho "hiệu quả vận hành"',
            },
          ],
          caption: 'Kiểm tra tại Công ty A (giả định): thuyết minh có ghi đổi sang FIFO từ đầu Q3, nhưng không nêu tác động bằng số và không điều chỉnh số Q2. Đây là lý do cần tự tính lại như Bước 1.',
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp tối ưu: báo cáo biên gộp theo bridge và like-for-like',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận:** Biên gộp tăng 3,0 điểm % (22,0% lên 25,0%) nhưng chỉ khoảng **0,5 điểm % là cải thiện biên thật** trong từng dòng sản phẩm. **0,9 điểm % đến từ mix** (nhiều hàng cao cấp hơn, cần kiểm tra độ bền) và **1,6 điểm % đến từ việc đổi sang FIFO** trong lúc giá nguyên liệu tăng. Biên like-for-like theo phương pháp cũ là 23,4%. Thông điệp "hiệu quả vận hành cải thiện 3 điểm" là không chính xác.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Báo cáo song song biên gộp theo phương pháp mới và biên like-for-like theo phương pháp cũ, kèm bridge (mix, biên từng dòng, phương pháp) trong báo cáo ban điều hành và thông cáo cho nhà đầu tư',
              owner: 'Trưởng phòng Kế toán tài chính / FP&A',
              metric: 'Biên gộp like-for-like và phần đóng góp của phương pháp (điểm %)',
              threshold: 'Bắt buộc nêu khi hiệu ứng phương pháp > 0,5 điểm % doanh thu',
            },
            {
              action: 'Bổ sung thuyết minh định lượng cho thay đổi chính sách (tác động lên giá vốn, lợi nhuận, tồn kho) và điều chỉnh số so sánh nếu chuẩn mực yêu cầu',
              owner: 'Kế toán trưởng',
              metric: 'Tác động của đổi phương pháp lên giá vốn và giá trị tồn kho (tỷ đồng)',
              threshold: 'Hoàn tất trước khi phát hành báo cáo quý; hiệu ứng > 1% lợi nhuận gộp thì phải thuyết minh',
            },
            {
              action: 'Theo dõi bền vững của mix cao cấp: so tỷ trọng cao cấp trong đơn hàng tồn và trong doanh thu 3 quý liên tiếp trước khi đưa vào dự báo',
              owner: 'Trưởng phòng Kinh doanh và FP&A',
              metric: 'Tỷ trọng doanh thu dòng cao cấp',
              threshold: 'Chỉ nâng dự báo biên nếu tỷ trọng cao cấp ≥ 33% trong 2 quý liên tiếp',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Thay vì một con số biên duy nhất, **bridge** chia thay đổi thành các phần có người chịu trách nhiệm khác nhau: kế toán chịu phần phương pháp, kinh doanh chịu phần mix, sản xuất và mua hàng chịu phần biên từng dòng. Nhà đầu tư và ban điều hành thấy đúng phần nào lặp lại được và phần nào chỉ là hiệu ứng một lần.',
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
              title: 'So biên giữa hai kỳ mà không kiểm tra chính sách kế toán',
              why: 'Cùng một hoạt động kinh doanh nhưng khác phương pháp tính giá vốn cho biên khác nhau 1,6 điểm % trong ví dụ.',
              instead: 'Luôn đọc chính sách kế toán và tính lại like-for-like trước khi diễn giải xu hướng biên.',
            },
            {
              title: 'Coi mọi tăng biên là cải thiện vận hành',
              why: 'Biên chung là trung bình có trọng số; mix dịch chuyển sang dòng biên cao làm biên tăng dù từng dòng gần như không đổi.',
              instead: 'Dùng bridge mix, biên từng dòng; hỏi mix có bền vững không.',
            },
            {
              title: 'Nhầm lợi nhuận kế toán với tiền thật',
              why: 'Đổi sang FIFO khi giá tăng làm lợi nhuận gộp tăng 16,0 tỷ nhưng tiền mua nguyên liệu không đổi; khoản chênh nằm trong giá trị tồn kho.',
              instead: 'Đối chiếu với dòng tiền hoạt động, biến động tồn kho, và giá mua thực tế trong kỳ.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Khi giá và lượng không đổi mà biên đổi, hãy kiểm tra giá vốn: phương pháp tính (FIFO, bình quân gia quyền) có thể tạo ra thay đổi biên không phản ánh hoạt động thật.',
    'Luôn tính like-for-like theo cùng phương pháp rồi bridge biên thành mix, biên từng dòng và hiệu ứng phương pháp; chỉ phần biên từng dòng là cải thiện vận hành.',
    'Thuyết minh báo cáo tài chính (chính sách kế toán, thay đổi chính sách, hàng tồn kho) là nơi kiểm chứng; nếu thiếu tác động bằng số, hãy tự ước tính.',
  ],
  references: [
    {
      title: 'IAS 2 Inventories',
      publisher: 'IFRS Foundation',
      url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/',
      note: 'Chuẩn mực quốc tế về hàng tồn kho, quy định các công thức tính giá FIFO và bình quân gia quyền; VAS 02 của Việt Nam xây dựng trên cùng nguyên tắc.',
    },
    {
      title: 'IAS 8 Accounting Policies, Changes in Accounting Estimates and Errors',
      publisher: 'IFRS Foundation',
      url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-8-accounting-policies-changes-in-accounting-estimates-and-errors/',
      note: 'Nêu cách xử lý thay đổi chính sách kế toán (áp dụng hồi tố khi khả thi), cơ sở để đòi số so sánh like-for-like.',
    },
    {
      title: 'FIFO and LIFO accounting',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/FIFO_and_LIFO_accounting',
      note: 'Minh họa vì sao khi giá tăng, FIFO cho giá vốn thấp hơn và lợi nhuận gộp cao hơn so với phương pháp xuất kho lô mới trước.',
    },
  ],
}
