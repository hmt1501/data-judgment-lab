import type { CaseStudy } from '../types'

/*
 * Công ty, mã và số liệu hoàn toàn giả định (không phải khuyến nghị đầu tư). Đơn vị giá, EPS: đồng/cổ phiếu.
 * Số mock, đã kiểm tra khớp nhau (P/E = giá / EPS):
 *   Thép:    A giá 20.000, EPS trượt 4.000 → 5,0 ; EPS dự phóng 2.000 → 10,0
 *            F giá 12.000, EPS trượt 1.500 → 8,0 ; dự phóng 1.200 → 10,0
 *   BĐS:     B giá 15.000, EPS trượt 3.000 → 5,0 (gồm lãi bán tài sản 2.000) ; EPS lõi 1.000 → 15,0 ; dự phóng 1.200 → 12,5
 *            G giá 18.000, EPS trượt 1.500 → 12,0 ; dự phóng 1.800 → 10,0
 *   Bán lẻ:  D giá 24.000, EPS trượt 4.000 → 6,0 ; dự phóng 3.000 → 8,0 (EPS −25%)
 *            I giá 36.000, EPS trượt 3.000 → 12,0 ; dự phóng 3.300 → 10,9 (EPS +10%)
 *   Chênh so với công ty cùng ngành: A −37,5% → 0% ; B −58,3% → +25,0% (lõi 15/12) ; D −50,0% → −26,7%
 *   EPS của A qua 4 kỳ gần nhất: 1.800, 1.200, 2.600, 4.000 → trung bình 2.400 → P/E chuẩn hóa 20.000/2.400 = 8,3
 *   Bộ lọc "P/E trượt < 8" chỉ giữ A, B, D (5,0 · 5,0 · 6,0).
 */
export const lowPeValueTrap: CaseStudy = {
  id: 'low-pe-value-trap',
  title: 'P/E thấp có thật sự là "rẻ"? Bẫy giá trị trong bộ lọc cổ phiếu',
  domain: 'securities',
  level: 'junior',
  minutes: 12,
  skills: ['valuation', 'segmentation', 'causal'],
  question:
    'Bộ lọc "P/E trượt < 8" trả về 3 cổ phiếu có vẻ rất rẻ. Làm sao biết P/E thấp đó phản ánh định giá hấp dẫn hay chỉ là một con số bị đánh lừa, và cần kiểm tra giả thuyết nào?',
  summary:
    'So P/E trong cùng phân khúc ngành, đặt P/E trượt cạnh P/E dự phóng, loại lợi nhuận bất thường khỏi EPS, rồi biến nghi ngờ thành giả thuyết có thể kiểm chứng.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst ở một nhóm nghiên cứu cổ phiếu. Một đồng nghiệp chạy bộ lọc **P/E trượt (trailing) < 8** trên 6 công ty giả định và gửi bảng "ba mã rẻ nhất" kèm câu hỏi: *"Rẻ vậy thì có đáng đưa vào danh sách nghiên cứu sâu không?"* Nhiệm vụ của bạn là **kiểm tra xem P/E thấp này đáng tin đến đâu**, không phải đưa ra khuyến nghị mua hay bán.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Mọi công ty, mã và số liệu trong bài đều **giả định, mô phỏng** cho mục đích học tập. Bài không phải khuyến nghị đầu tư và không mô tả bất kỳ doanh nghiệp thật nào.',
        },
        {
          kind: 'table',
          title: 'Kết quả bộ lọc: P/E trượt (giá / EPS 4 quý gần nhất)',
          columns: [
            { key: 'code', label: 'Công ty' },
            { key: 'sector', label: 'Ngành' },
            { key: 'price', label: 'Giá (đ)', align: 'right' },
            { key: 'eps', label: 'EPS trượt (đ)', align: 'right' },
            { key: 'pe', label: 'P/E trượt', align: 'right' },
          ],
          rows: [
            { code: 'A', sector: 'Thép', price: '20.000', eps: '4.000', pe: '5,0' },
            { code: 'B', sector: 'Bất động sản', price: '15.000', eps: '3.000', pe: '5,0' },
            { code: 'D', sector: 'Bán lẻ', price: '24.000', eps: '4.000', pe: '6,0' },
            { code: 'F', sector: 'Thép', price: '12.000', eps: '1.500', pe: '8,0' },
            { code: 'G', sector: 'Bất động sản', price: '18.000', eps: '1.500', pe: '12,0' },
            { code: 'I', sector: 'Bán lẻ', price: '36.000', eps: '3.000', pe: '12,0' },
          ],
          highlight: [
            { row: 0, tone: 'warning' },
            { row: 1, tone: 'warning' },
            { row: 2, tone: 'warning' },
          ],
          caption: 'Ba dòng tô vàng là các mã lọt bộ lọc (P/E trượt < 8). F có P/E đúng 8,0 nên không lọt.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: P/E là thương số, nên nghi ngờ cả tử số lẫn mẫu số',
      blocks: [
        {
          kind: 'formula',
          expression: 'P/E = Giá cổ phiếu / EPS',
          note: 'P/E thấp có thể do **giá thấp** (thị trường chê) hoặc do **EPS đang phình lên** (mẫu số bị thổi). Chỉ trường hợp thứ nhất mới đáng gọi là "rẻ tiềm năng", mà ngay cả khi đó thị trường chê cũng có thể có lý do.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Cùng phân khúc**: so P/E với công ty cùng ngành, vì mỗi ngành có mặt bằng P/E và tốc độ tăng trưởng khác nhau; P/E 6 ở bán lẻ khác P/E 6 ở một ngành chu kỳ.',
            '**Trượt và dự phóng**: P/E trượt nhìn quá khứ 4 quý; P/E dự phóng (forward) dùng EPS ước tính cho 12 tháng tới. Hai số lệch nhau nhiều nghĩa là thị trường kỳ vọng EPS đổi chiều.',
            '**Loại bất thường**: bóc phần lợi nhuận không lặp lại (lãi bán tài sản, hoàn nhập dự phòng, lãi tỷ giá một lần) để ra EPS lõi.',
            '**Giả thuyết kiểm chứng được**: mỗi nghi ngờ phải kèm dữ liệu sẽ xem và điều kiện bác bỏ.',
          ],
        },
        {
          kind: 'quiz',
          id: 'low-pe-q1',
          question: 'Trong các cách diễn đạt sau, câu nào là một giả thuyết **kiểm chứng được** về mã B?',
          options: [
            {
              id: 'a',
              text: 'Mã B có vẻ không ổn, cần để ý thêm.',
              explain: 'Quá mơ hồ: không nói rõ xem dữ liệu nào, và không có điều kiện để kết luận sai.',
            },
            {
              id: 'b',
              text: 'Nếu P/E thấp của B do lãi bán tài sản, thì thuyết minh báo cáo tài chính sẽ có khoản thu nhập khác lớn bất thường, và EPS lõi (loại khoản đó) sẽ cho P/E cao hơn hẳn công ty cùng ngành; nếu EPS lõi vẫn gần mức trượt thì giả thuyết sai.',
              correct: true,
              explain: 'Đúng. Nêu cơ chế, dữ liệu cần xem (thuyết minh, EPS lõi) và ngưỡng bác bỏ cụ thể.',
            },
            {
              id: 'c',
              text: 'Cổ phiếu rẻ thì thị trường sớm muộn cũng định giá lại.',
              explain: 'Đây là niềm tin chứ không phải giả thuyết: không có dữ liệu nào có thể chứng minh nó sai trong một khung thời gian xác định.',
            },
          ],
        },
      ],
    },
    {
      id: 'segment',
      kind: 'analysis',
      title: 'Bước 1 — So trong cùng phân khúc: ba mã "rẻ" nằm ở ba ngành khác nhau',
      blocks: [
        {
          kind: 'text',
          md: 'Cả ba mã lọt lọc thuộc ba ngành khác nhau, nên trước hết đặt từng mã cạnh **công ty cùng ngành** (F, G, I). Cách này tránh kết luận kiểu "ngành nào P/E thấp thì rẻ".',
        },
        {
          kind: 'table',
          title: 'Chênh lệch P/E so với công ty cùng ngành',
          columns: [
            { key: 'pair', label: 'Cặp so sánh' },
            { key: 'trail', label: 'P/E trượt', align: 'right' },
            { key: 'gap', label: 'Chênh so với cùng ngành', align: 'right' },
          ],
          rows: [
            { pair: 'A (5,0) so với F (8,0), Thép', trail: '5,0', gap: '−37,5%' },
            { pair: 'B (5,0) so với G (12,0), Bất động sản', trail: '5,0', gap: '−58,3%' },
            { pair: 'D (6,0) so với I (12,0), Bán lẻ', trail: '6,0', gap: '−50,0%' },
          ],
          caption: 'Trên P/E trượt, cả ba đều "giảm giá" sâu so với công ty cùng ngành. Việc còn lại là kiểm tra xem khoảng chênh này có bền không.',
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Chênh lệch lớn là câu hỏi, chưa phải câu trả lời',
          md: 'Khi một mã giảm giá 40–60% so với công ty cùng ngành, hãy hỏi trước: **thị trường biết điều gì mà bảng lọc chưa nói?** Ba bước tiếp theo là ba cách điển hình để P/E thấp bị đánh lừa.',
        },
      ],
    },
    {
      id: 'forward',
      kind: 'analysis',
      title: 'Bước 2 — P/E trượt đối chiếu P/E dự phóng: khi EPS sắp đổi chiều',
      blocks: [
        {
          kind: 'table',
          title: 'P/E trượt và P/E dự phóng (EPS dự phóng cho 12 tháng tới, giả định)',
          columns: [
            { key: 'code', label: 'Công ty' },
            { key: 'eps', label: 'EPS trượt → dự phóng (đ)' },
            { key: 'chg', label: 'EPS thay đổi', align: 'right' },
            { key: 'pe1', label: 'P/E trượt', align: 'right' },
            { key: 'pe2', label: 'P/E dự phóng', align: 'right' },
          ],
          rows: [
            { code: 'A (Thép)', eps: '4.000 → 2.000', chg: '−50%', pe1: '5,0', pe2: '10,0' },
            { code: 'F (Thép)', eps: '1.500 → 1.200', chg: '−20%', pe1: '8,0', pe2: '10,0' },
            { code: 'B (BĐS)', eps: '3.000 → 1.200', chg: '−60%', pe1: '5,0', pe2: '12,5' },
            { code: 'G (BĐS)', eps: '1.500 → 1.800', chg: '+20%', pe1: '12,0', pe2: '10,0' },
            { code: 'D (Bán lẻ)', eps: '4.000 → 3.000', chg: '−25%', pe1: '6,0', pe2: '8,0' },
            { code: 'I (Bán lẻ)', eps: '3.000 → 3.300', chg: '+10%', pe1: '12,0', pe2: '10,9' },
          ],
          highlight: [
            { row: 0, tone: 'negative' },
            { row: 2, tone: 'negative' },
            { row: 4, tone: 'warning' },
          ],
          caption: 'Với A, B, D, EPS dự phóng thấp hơn trượt nên P/E dự phóng cao hơn P/E trượt: "rẻ" trên quá khứ nhưng không còn rẻ nếu dự phóng đúng.',
        },
        {
          kind: 'chart',
          title: 'P/E trượt so với P/E dự phóng theo công ty',
          type: 'bar',
          xKey: 'code',
          series: [
            { key: 'trailing', label: 'P/E trượt' },
            { key: 'forward', label: 'P/E dự phóng' },
          ],
          unit: 'x',
          data: [
            { code: 'A', trailing: 5.0, forward: 10.0 },
            { code: 'B', trailing: 5.0, forward: 12.5 },
            { code: 'D', trailing: 6.0, forward: 8.0 },
            { code: 'F', trailing: 8.0, forward: 10.0 },
            { code: 'G', trailing: 12.0, forward: 10.0 },
            { code: 'I', trailing: 12.0, forward: 10.9 },
          ],
          caption: 'Ba mã "rẻ" có P/E dự phóng tăng, hai công ty so sánh G, I thì giảm. Khoảng cách đang thu hẹp hoặc đảo chiều.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Dự phóng cũng là ước tính',
          md: 'EPS dự phóng thường lấy từ dự báo của analyst hoặc của chính bạn, nên **có thể sai**. Dùng nó như một giả thuyết để kiểm chứng (kết quả quý tới có khớp không), không phải sự thật.',
        },
      ],
    },
    {
      id: 'earnings',
      kind: 'analysis',
      title: 'Bước 3 — Làm sạch EPS: lợi nhuận một lần và đỉnh chu kỳ',
      blocks: [
        {
          kind: 'table',
          title: 'Mã B: tách EPS lõi khỏi lãi bán tài sản',
          columns: [
            { key: 'item', label: 'Khoản mục' },
            { key: 'eps', label: 'EPS (đ)', align: 'right' },
            { key: 'note', label: 'Ghi chú' },
          ],
          rows: [
            { item: 'EPS lõi (hoạt động kinh doanh thường xuyên)', eps: '1.000', note: 'Lặp lại được' },
            { item: 'Lãi bán một lô tài sản (sau thuế, ước tính)', eps: '2.000', note: 'Một lần, không lặp lại' },
            { item: 'EPS công bố (trượt)', eps: '3.000', note: '1.000 + 2.000' },
          ],
          highlight: [{ row: 1, tone: 'warning' }],
          caption: 'Giá 15.000: P/E trên EPS công bố là 5,0; trên EPS lõi là 15,0. So với G (12,0), B từ "rẻ hơn 58,3%" thành "đắt hơn 25,0%".',
        },
        {
          kind: 'text',
          md: 'Về mặt kế toán, lãi từ bán tài sản thường nằm trong thu nhập khác và **vẫn được tính vào lợi nhuận sau thuế, nên cũng vào EPS công bố**. Chỉ khi đó là *hoạt động ngừng* (discontinued operations, xem IFRS 5) thì mới được trình bày tách riêng. Vì vậy phải nhìn vào thuyết minh báo cáo tài chính mới thấy khoản này.',
        },
        {
          kind: 'chart',
          title: 'Mã A: EPS qua các kỳ gần nhất và dự phóng (đ/cổ phiếu)',
          type: 'line',
          xKey: 'period',
          series: [{ key: 'eps', label: 'EPS' }],
          unit: ' đ',
          data: [
            { period: 'Kỳ -3', eps: 1800 },
            { period: 'Kỳ -2', eps: 1200 },
            { period: 'Kỳ -1', eps: 2600 },
            { period: 'Kỳ 0 (trượt)', eps: 4000 },
            { period: 'Dự phóng', eps: 2000 },
          ],
          marker: { x: 'Kỳ 0 (trượt)', label: 'EPS đỉnh chu kỳ' },
          caption: 'EPS trượt 4.000 là cao nhất. Trung bình 4 kỳ gần nhất là (1.800 + 1.200 + 2.600 + 4.000) / 4 = 2.400, ra P/E chuẩn hóa 20.000 / 2.400 ≈ 8,3, không còn thấp hơn F (8,0).',
        },
        {
          kind: 'quiz',
          id: 'low-pe-q2',
          question: 'Với A (ngành thép, EPS trượt đang ở đỉnh chu kỳ), thao tác nào hữu ích nhất để đánh giá P/E 5,0?',
          options: [
            {
              id: 'a',
              text: 'Kết luận A đang rẻ vì P/E thấp hơn mọi công ty cùng ngành.',
              explain: 'Ngành chu kỳ có P/E trượt thấp nhất đúng lúc lợi nhuận ở đỉnh; P/E thấp ở đỉnh thường là dấu hiệu thị trường đã tính đến việc lợi nhuận sẽ giảm.',
            },
            {
              id: 'b',
              text: 'Dùng EPS trung bình nhiều kỳ (chuẩn hóa) và P/E dự phóng, rồi so với công ty cùng ngành.',
              correct: true,
              explain: 'Đúng. EPS chuẩn hóa 2.400 cho P/E ≈ 8,3 và P/E dự phóng 10,0 đều ngang hoặc cao hơn F, tức khoảng "giảm giá" phần lớn biến mất.',
            },
            {
              id: 'c',
              text: 'Bỏ qua A vì mọi cổ phiếu chu kỳ đều nên tránh.',
              explain: 'Kết luận cả ngành theo cảm tính là sai hướng. Việc cần làm là đo đúng lợi nhuận bình thường hóa, không phải loại cả ngành.',
            },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp tối ưu: bảng kiểm trước khi tin một con số P/E thấp',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận của brief (trên dữ liệu giả định):** A không còn "rẻ" khi so P/E dự phóng (10,0) với F (10,0) và P/E chuẩn hóa (8,3). B thực ra **đắt hơn** G sau khi bóc lãi một lần (15,0 so với 12,0). D vẫn thấp hơn I ở P/E dự phóng (8,0 so với 10,9, thấp hơn 26,7%) nhưng khoảng cách thu hẹp từ 50,0%, và EPS của D đang giảm 25% còn I tăng 10%. Cả ba mã này nên vào danh sách **cần nghiên cứu thêm**, không phải danh sách "rẻ".',
        },
        {
          kind: 'table',
          title: 'Chênh lệch so với công ty cùng ngành sau hiệu chỉnh',
          columns: [
            { key: 'pair', label: 'Mã so với công ty cùng ngành' },
            { key: 'raw', label: 'Theo P/E trượt', align: 'right' },
            { key: 'adj', label: 'Sau hiệu chỉnh', align: 'right' },
            { key: 'how', label: 'Hiệu chỉnh bằng' },
          ],
          rows: [
            { pair: 'A so với F', raw: '−37,5%', adj: '0%', how: 'P/E dự phóng 10,0 và 10,0' },
            { pair: 'B so với G', raw: '−58,3%', adj: '+25,0%', how: 'EPS lõi: P/E 15,0 và 12,0' },
            { pair: 'D so với I', raw: '−50,0%', adj: '−26,7%', how: 'P/E dự phóng 8,0 và 10,9' },
          ],
          highlight: [
            { row: 0, tone: 'warning' },
            { row: 1, tone: 'negative' },
            { row: 2, tone: 'positive' },
          ],
          caption: 'Chỉ D còn lại một khoảng chênh. Đó là giả thuyết để kiểm chứng (EPS giảm vì lý do tạm thời hay cấu trúc), không phải kết luận.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Bóc lợi nhuận bất thường khỏi EPS trước khi tính P/E (đọc thuyết minh: thu nhập khác, hoàn nhập dự phòng, lãi bán tài sản)',
              owner: 'Analyst cổ phiếu',
              metric: 'Tỷ trọng khoản bất thường trong lợi nhuận sau thuế',
              threshold: 'Nếu > 20% thì dùng EPS lõi để tính P/E',
            },
            {
              action: 'Luôn đặt P/E trượt cạnh P/E dự phóng trong cùng một bảng và ghi nguồn dự phóng',
              owner: 'Analyst cổ phiếu',
              metric: 'Độ lệch P/E dự phóng so với P/E trượt',
              threshold: 'Lệch > 30% thì phải có giải thích bằng văn bản',
            },
            {
              action: 'Với ngành chu kỳ, thêm P/E chuẩn hóa theo EPS trung bình nhiều kỳ (ít nhất 4 kỳ)',
              owner: 'Analyst cổ phiếu',
              metric: 'P/E chuẩn hóa so với công ty cùng ngành',
              threshold: 'Chênh lệch sau chuẩn hóa < một nửa chênh lệch trên P/E trượt thì coi "rẻ" là chưa chắc',
            },
            {
              action: 'Viết mỗi nghi ngờ thành giả thuyết kèm dữ liệu và điều kiện bác bỏ, rồi đối chiếu với kết quả quý kế tiếp',
              owner: 'Trưởng nhóm nghiên cứu',
              metric: 'Tỷ lệ giả thuyết có điều kiện bác bỏ rõ ràng',
              threshold: '100% mã vào danh sách nghiên cứu sâu',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách tiếp cận tối ưu',
          md: 'Mỗi bước giải quyết một cách cụ thể mà P/E thấp bị đánh lừa: so sai nhóm (phân khúc), nhìn sai thời điểm (trượt/dự phóng), lợi nhuận không lặp lại (EPS lõi). Brief không đoán giá sẽ đi đâu mà chỉ trả lời "con số này đáng tin đến đâu". Bài chỉ phục vụ học phân tích, không phải khuyến nghị mua hay bán.',
        },
        {
          kind: 'quiz',
          id: 'low-pe-q3',
          question: 'Mã D có P/E trượt 6,0 so với 12,0 của I; P/E dự phóng 8,0 so với 10,9. Nhận định nào hợp lý nhất?',
          options: [
            {
              id: 'a',
              text: 'D vẫn rẻ hơn I rõ rệt, nên coi là cơ hội.',
              explain: 'Khoảng chênh vẫn còn nhưng thu hẹp từ 50,0% còn 26,7%, và EPS của D giảm trong khi I tăng. Chênh lệch còn lại có thể được giải thích bởi chính xu hướng EPS.',
            },
            {
              id: 'b',
              text: 'Khoảng chênh thu hẹp một nửa; phần còn lại cần kiểm chứng: EPS giảm 25% do nguyên nhân tạm thời hay cấu trúc, và biên lợi nhuận quý gần nhất.',
              correct: true,
              explain: 'Đúng. Biến phần chênh lệch còn lại thành giả thuyết kiểm chứng được bằng dữ liệu (nguyên nhân giảm EPS, biên lợi nhuận) thay vì kết luận ngay.',
            },
            {
              id: 'c',
              text: 'P/E dự phóng chỉ là ước tính nên bỏ qua, chỉ dùng P/E trượt.',
              explain: 'Dự phóng có thể sai, nhưng bỏ hẳn nghĩa là chỉ nhìn quá khứ. Cách đúng là dùng cả hai và kiểm tra dự phóng với kết quả thực tế.',
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
              title: 'Xếp hạng P/E xuyên ngành',
              why: 'Mỗi ngành có mặt bằng P/E và tốc độ tăng trưởng khác nhau. Một bộ lọc chung dễ chỉ chọn ra ngành chu kỳ hoặc ngành đang bị chê.',
              instead: 'So với công ty cùng ngành, hoặc với trung vị ngành, trước khi so giữa các ngành.',
            },
            {
              title: 'Tin EPS công bố như EPS bền vững',
              why: 'EPS công bố có thể gồm lãi bán tài sản, hoàn nhập dự phóng hoặc lãi tỷ giá một lần, làm mẫu số phình lên và P/E thấp giả.',
              instead: 'Đọc thuyết minh, tách khoản bất thường, tính P/E trên EPS lõi.',
            },
            {
              title: 'Dùng P/E thấp ở đỉnh chu kỳ như tín hiệu rẻ',
              why: 'Ngành chu kỳ thường có P/E thấp nhất khi lợi nhuận cao nhất, vì thị trường đã dự báo lợi nhuận sẽ giảm.',
              instead: 'Dùng EPS chuẩn hóa nhiều kỳ và P/E dự phóng, rồi hỏi lợi nhuận đang ở đâu trong chu kỳ.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'P/E thấp có thể do giá thấp hoặc EPS phình lên; so trong cùng phân khúc ngành trước khi kết luận.',
    'Đặt P/E trượt cạnh P/E dự phóng và EPS lõi (đã loại lợi nhuận bất thường) để thấy P/E thấp có bền không.',
    'Mỗi nghi ngờ nên thành giả thuyết kiểm chứng được: dữ liệu sẽ xem, và điều kiện nào thì bác bỏ.',
  ],
  references: [
    {
      title: 'Price–earnings ratio',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Price%E2%80%93earnings_ratio',
      note: 'Định nghĩa P/E, phân biệt P/E trượt và P/E dự phóng, và các biến thể dùng EPS đã hiệu chỉnh hoặc trung bình nhiều năm.',
    },
    {
      title: 'Cyclically adjusted price-to-earnings ratio',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Cyclically_adjusted_price-to-earnings_ratio',
      note: 'Ý tưởng làm mượt lợi nhuận theo chu kỳ bằng trung bình nhiều năm, nền cho bước chuẩn hóa EPS ở ngành chu kỳ.',
    },
    {
      title: 'IFRS 5 Non-current Assets Held for Sale and Discontinued Operations',
      publisher: 'IFRS Foundation',
      url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-5-non-current-assets-held-for-sale-and-discontinued-operations/',
      note: 'Chuẩn mực quy định cách trình bày tài sản giữ để bán và hoạt động ngừng, giúp hiểu khi nào một khoản được tách riêng trong báo cáo.',
    },
  ],
}
