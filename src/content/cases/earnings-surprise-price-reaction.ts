import type { CaseStudy } from '../types'

/*
 * Công ty, mã và số liệu hoàn toàn giả định (không phải khuyến nghị đầu tư). Đơn vị lợi nhuận: tỷ đồng.
 * Số mock, đã kiểm tra khớp nhau:
 *   Công ty A quý 3: LNST 480 vs kỳ vọng thị trường 450 → vượt +30 (+6,7%).
 *   Trong 480 có 40 lãi bán tài sản một lần → lõi 440 vs 450 → hụt −10 (−2,2%).
 *   Guidance cả năm hạ từ 1.900 xuống 1.850 (−50, −2,6%).
 *   Lợi suất vượt trội so với chỉ số ngành: tích lũy +14,0% trong 20 phiên trước công bố; phiên sau công bố −3,2% → còn +10,8%.
 *   Mẫu 12 mã: nhóm "vượt kỳ vọng + chạy trước >10%" n=4 phản ứng TB −1,5%; "vượt + chạy trước ≤10%" n=5 +3,2%; "hụt" n=3 −4,0%.
 *   Phản ứng TB cả mẫu: (4×−1,5 + 5×3,2 + 3×−4,0)/12 = (−6,0 + 16,0 − 12,0)/12 = −0,17% ≈ −0,2%.
 */
export const earningsSurprisePriceReaction: CaseStudy = {
  id: 'earnings-surprise-price-reaction',
  title: 'Lợi nhuận vượt kỳ vọng nhưng giá vẫn giảm: thị trường đang phản ứng với điều gì?',
  domain: 'securities',
  level: 'junior',
  minutes: 12,
  skills: ['valuation', 'causal', 'segmentation'],
  question:
    'Công ty A báo lợi nhuận quý vượt dự báo của thị trường nhưng giá cổ phiếu giảm ngay phiên sau. Những giả thuyết nào giải thích được, và cần dữ liệu gì để loại trừ từng giả thuyết?',
  summary:
    'So lợi nhuận công bố với kỳ vọng thay vì với quý trước, tách phần lõi khỏi khoản một lần, xét guidance và mức giá đã chạy trước, rồi kiểm tra bằng nhóm mã tương tự.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst ở một công ty chứng khoán. Sau báo cáo quý 3, một đồng nghiệp hỏi: *"Lãi vượt dự báo mà sao giá giảm? Thị trường vô lý à?"* Nhiệm vụ của bạn là **đưa ra các giả thuyết kiểm chứng được**, không phải dự đoán giá ngày mai.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Công ty, mã và mọi con số trong bài đều **giả định, mô phỏng** để học phân tích. Bài không phải khuyến nghị đầu tư.',
        },
        {
          kind: 'table',
          title: 'Công ty A: quý 3 so với kỳ vọng (tỷ đồng)',
          columns: [
            { key: 'item', label: 'Chỉ tiêu' },
            { key: 'actual', label: 'Công bố', align: 'right' },
            { key: 'expect', label: 'Kỳ vọng thị trường', align: 'right' },
            { key: 'gap', label: 'Chênh', align: 'right' },
          ],
          rows: [
            { item: 'Lợi nhuận sau thuế (LNST) quý', actual: '480', expect: '450', gap: '+30 (+6,7%)' },
            { item: 'Guidance LNST cả năm', actual: '1.850', expect: '1.900', gap: '−50 (−2,6%)' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
          caption: 'Giá cổ phiếu A giảm 3,2% so với chỉ số ngành trong phiên sau công bố.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: giá phản ứng với phần bất ngờ, không phải với con số',
      blocks: [
        {
          kind: 'formula',
          expression: 'Bất ngờ = (Lợi nhuận thực tế − Kỳ vọng) / Kỳ vọng',
          note: 'Giá đã chứa kỳ vọng từ trước. Chỉ phần **chênh so với kỳ vọng** (và thay đổi trong triển vọng) mới làm giá dịch chuyển.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Chất lượng của phần vượt**: lợi nhuận lõi hay khoản một lần?',
            '**Triển vọng**: guidance và tăng trưởng quý tới có được nâng không?',
            '**Đã phản ánh trước**: giá có chạy lên trước ngày công bố không?',
            '**Nhiễu thị trường chung**: dùng lợi suất vượt trội so với chỉ số ngành thay vì giá thô.',
          ],
        },
        {
          kind: 'quiz',
          id: 'earnings-surprise-q1',
          question: 'Cách đo "phản ứng giá" nào hợp lý nhất để đánh giá riêng công ty A?',
          options: [
            { id: 'a', text: 'Phần trăm thay đổi giá thô trong phiên sau công bố.', explain: 'Giá thô lẫn cả biến động chung của thị trường và ngành, nên không tách được tác động riêng của tin.' },
            { id: 'b', text: 'Lợi suất của A trừ lợi suất chỉ số ngành trong cùng cửa sổ thời gian.', correct: true, explain: 'Đúng. Lợi suất vượt trội loại phần biến động chung, giữ lại phần có thể quy cho tin riêng của A.' },
            { id: 'c', text: 'So giá hôm nay với giá cách đây một năm.', explain: 'Cửa sổ quá dài, lẫn quá nhiều tin khác nên không quy được cho báo cáo quý.' },
          ],
        },
      ],
    },
    {
      id: 'quality',
      kind: 'analysis',
      title: 'Bước 1 — Chất lượng của phần vượt và guidance',
      blocks: [
        {
          kind: 'table',
          title: 'Bóc khoản một lần khỏi LNST quý',
          columns: [
            { key: 'item', label: 'Khoản mục' },
            { key: 'v', label: 'Tỷ đồng', align: 'right' },
            { key: 'note', label: 'Ghi chú' },
          ],
          rows: [
            { item: 'LNST công bố', v: '480', note: 'Vượt kỳ vọng 30' },
            { item: 'Lãi bán tài sản (sau thuế, ước tính)', v: '−40', note: 'Một lần' },
            { item: 'LNST lõi', v: '440', note: 'Hụt kỳ vọng 10 (−2,2%)' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Giả sử kỳ vọng 450 chưa tính khoản một lần: phần "vượt" hoàn toàn do khoản đó, còn lõi hụt 2,2%. Cần đọc thuyết minh để xác nhận.',
        },
        {
          kind: 'text',
          md: 'Thêm vào đó, **guidance cả năm giảm 2,6%** (1.850 so với kỳ vọng 1.900). Thị trường định giá dòng lợi nhuận tương lai, nên một tin hạ triển vọng có thể át tin vượt quý này.',
        },
      ],
    },
    {
      id: 'priced-in',
      kind: 'analysis',
      title: 'Bước 2 — Đã phản ánh trước: giá chạy lên trước ngày công bố',
      blocks: [
        {
          kind: 'chart',
          title: 'Lợi suất vượt trội tích lũy của A so với chỉ số ngành (%, 20 phiên trước đến 1 phiên sau công bố)',
          type: 'line',
          xKey: 'day',
          series: [{ key: 'car', label: 'Lợi suất vượt trội tích lũy' }],
          unit: '%',
          data: [
            { day: 'T-20', car: 0 },
            { day: 'T-15', car: 3.1 },
            { day: 'T-10', car: 6.4 },
            { day: 'T-5', car: 9.8 },
            { day: 'T-1', car: 14.0 },
            { day: 'T+1', car: 10.8 },
          ],
          marker: { x: 'T-1', label: 'Trước công bố' },
          caption: 'A đã vượt chỉ số ngành 14,0% trước công bố; phiên sau giảm 3,2% còn 10,8%. Thị trường có vẻ đã "đặt cược" trước vào kết quả tốt.',
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Một mã chưa đủ để kết luận',
          md: 'Một quan sát không phân biệt được "đã phản ánh trước" với "tin xấu về guidance". Bước 3 dùng nhiều mã để kiểm tra.',
        },
      ],
    },
    {
      id: 'peers',
      kind: 'analysis',
      title: 'Bước 3 — Kiểm tra giả thuyết bằng nhóm mã tương tự',
      blocks: [
        {
          kind: 'table',
          title: 'Phản ứng giá phiên sau công bố của 12 mã giả định, chia theo nhóm',
          columns: [
            { key: 'grp', label: 'Nhóm' },
            { key: 'n', label: 'Số mã', align: 'right' },
            { key: 'react', label: 'Phản ứng TB vượt trội', align: 'right' },
          ],
          rows: [
            { grp: 'Vượt kỳ vọng, đã chạy trước > 10%', n: 4, react: '−1,5%' },
            { grp: 'Vượt kỳ vọng, chạy trước ≤ 10%', n: 5, react: '+3,2%' },
            { grp: 'Hụt kỳ vọng', n: 3, react: '−4,0%' },
          ],
          highlight: [{ row: 0, tone: 'warning' }],
          caption: 'Trung bình cả mẫu (4×−1,5 + 5×3,2 + 3×−4,0)/12 ≈ −0,2%: gộp chung che mất khác biệt giữa các nhóm.',
        },
        {
          kind: 'text',
          md: 'Trong nhóm vượt kỳ vọng, chỉ nhóm **đã chạy trước** mới phản ứng âm. Điều này ủng hộ giả thuyết "đã phản ánh trước", nhưng cỡ mẫu nhỏ (n = 4) nên chỉ là gợi ý. Giả thuyết về guidance vẫn phải kiểm tra riêng bằng cách chia thêm theo hướng thay đổi guidance.',
        },
        {
          kind: 'quiz',
          id: 'earnings-surprise-q2',
          question: 'Dữ liệu nào giúp tách "đã phản ánh trước" khỏi "guidance bị hạ" rõ nhất?',
          options: [
            { id: 'a', text: 'Trong nhóm mã vượt kỳ vọng, chia theo (đã chạy trước hay chưa) × (guidance tăng hay giảm) rồi so phản ứng.', correct: true, explain: 'Đúng. Bảng chéo 2×2 cho phép thấy từng yếu tố riêng khi yếu tố kia cố định.' },
            { id: 'b', text: 'Đọc thêm bình luận trên diễn đàn nhà đầu tư.', explain: 'Ý kiến không phải dữ liệu kiểm chứng được và dễ thiên lệch.' },
            { id: 'c', text: 'Chỉ nhìn khối lượng giao dịch phiên sau công bố của A.', explain: 'Khối lượng cho biết mức quan tâm, không cho biết nguyên nhân giá giảm.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: quy trình đọc phản ứng sau báo cáo',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận trên dữ liệu giả định:** có ít nhất ba lực cùng kéo giá A xuống — phần vượt dựa vào khoản một lần (lõi hụt 2,2%), guidance giảm 2,6%, và giá đã chạy 14,0% trước công bố. Giả thuyết chính cần theo dõi: *giá đã phản ánh trước + guidance yếu*. Cả hai đều có điều kiện bác bỏ cụ thể (xem hành động).',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Tính bất ngờ trên LNST lõi (loại khoản một lần) cạnh bất ngờ công bố', owner: 'Analyst cổ phiếu', metric: 'Bất ngờ lõi so với kỳ vọng', threshold: 'Dấu bất ngờ lõi khác dấu bất ngờ công bố thì phải ghi chú trong báo cáo' },
            { action: 'Đo lợi suất vượt trội so với chỉ số ngành cho cửa sổ T−20 đến T+1', owner: 'Analyst cổ phiếu', metric: 'Lợi suất vượt trội tích lũy', threshold: 'Chạy trước > 10% thì coi "đã phản ánh" là giả thuyết chính' },
            { action: 'Lập bảng chéo guidance × mức chạy trước trên ít nhất 30 mã/mùa báo cáo trước khi kết luận', owner: 'Trưởng nhóm nghiên cứu', metric: 'Số quan sát mỗi ô', threshold: '≥ 5 mã/ô mới đọc xu hướng' },
          ],
        },
        {
          kind: 'quiz',
          id: 'earnings-surprise-q3',
          question: 'Nhận định nào đúng nhất về việc "thị trường phản ứng ngược" với A?',
          options: [
            { id: 'a', text: 'Thị trường sai vì lợi nhuận đã vượt kỳ vọng.', explain: 'Nhận định này bỏ qua chất lượng lợi nhuận, guidance và mức giá đã chạy trước.' },
            { id: 'b', text: 'Phản ứng có thể hợp lý nếu phần vượt là một lần, guidance giảm và giá đã tính trước; cần kiểm bằng dữ liệu nhóm mã tương tự.', correct: true, explain: 'Đúng. Mỗi yếu tố có dữ liệu để kiểm tra và điều kiện bác bỏ.' },
            { id: 'c', text: 'Phản ứng giá luôn trái chiều với lợi nhuận nên không có ý nghĩa phân tích.', explain: 'Không đúng: nhiều nhóm mã vẫn phản ứng cùng chiều; ý nghĩa nằm ở việc tách nhóm.' },
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
            { title: 'So lợi nhuận với quý trước thay vì với kỳ vọng', why: 'Giá phản ứng với phần bất ngờ so với kỳ vọng, không phải mức tăng so với quý trước.', instead: 'Luôn đặt con số công bố cạnh con số kỳ vọng và ghi rõ nguồn kỳ vọng.' },
            { title: 'Quy một phiên giá cho một nguyên nhân', why: 'Một phiên có thể chứa nhiều tin và nhiễu thị trường; kết luận từ một mã dễ kể chuyện sai.', instead: 'Dùng lợi suất vượt trội và nhóm mã tương tự để kiểm tra từng giả thuyết.' },
            { title: 'Quên khoản một lần trong lợi nhuận', why: 'Phần vượt kỳ vọng có thể đến từ lãi bán tài sản hoặc hoàn nhập, không lặp lại.', instead: 'Đọc thuyết minh báo cáo tài chính và tính bất ngờ trên lợi nhuận lõi.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Giá phản ứng với phần bất ngờ so với kỳ vọng và với triển vọng, không phải với con số thô.',
    'Tách lợi nhuận lõi khỏi khoản một lần và xét guidance trước khi kết luận "vượt kỳ vọng".',
    'Dùng lợi suất vượt trội và nhóm mã tương tự để biến mỗi giả thuyết thành thứ kiểm chứng được.',
  ],
  references: [
    { title: 'Earnings surprise', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Earnings_surprise', note: 'Định nghĩa "bất ngờ lợi nhuận" so với kỳ vọng của analyst, nền cho bước so công bố với kỳ vọng.' },
    { title: 'Post–earnings-announcement drift', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Post%E2%80%93earnings-announcement_drift', note: 'Mô tả xu hướng giá tiếp tục dịch chuyển sau công bố lợi nhuận, gợi ý nên xét cửa sổ vài phiên chứ không chỉ một phiên.' },
    { title: 'Event study', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Event_study', note: 'Phương pháp đo lợi suất vượt trội quanh một sự kiện, dùng trong bước 2 và 3.' },
  ],
}
