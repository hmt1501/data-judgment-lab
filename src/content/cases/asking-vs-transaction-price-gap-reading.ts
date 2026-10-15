import type { CaseStudy } from '../types'

/*
 * Số liệu mock của khu "Khu Z" (triệu đ/m², giá trung vị; dữ liệu giả định):
 *   Tin rao: 400 tin · trung vị chung 62 · chung cư 150 tin, trung vị 45 · nhà phố 250 tin, trung vị 72 (62,5% là nhà phố)
 *   Giao dịch ghi nhận: 25 giao dịch · trung vị chung 46 · chung cư 18, trung vị 42,3 · nhà phố 7, trung vị 64,8 (28% là nhà phố)
 *   Chênh rao − giao dịch (chung): (62 − 46) ÷ 62 = 25,8% · chung cư (45 − 42,3) ÷ 45 = 6,0% · nhà phố (72 − 64,8) ÷ 72 = 10,0%
 *   Giao dịch có tin rao gốc (25): ≤30 ngày 9 giao dịch, chênh 4% · 31–90 ngày 10, chênh 8% · >90 ngày 6, chênh 14% (9+10+6 = 25)
 */
export const askingVsTransactionPriceGapReading: CaseStudy = {
  id: 'asking-vs-transaction-price-gap-reading',
  title: 'Giá rao cao hơn giá giao dịch 26%: nên tin con số nào?',
  domain: 'real-estate',
  level: 'fresher',
  minutes: 9,
  skills: ['valuation', 'segmentation', 'data-quality'],
  question: 'Giá rao trung vị 62 triệu đ/m² nhưng giá giao dịch ghi nhận chỉ 46 triệu đ/m². Người bán "ảo giá" 26%, hay hai con số này đang đo hai nhóm bất động sản khác nhau?',
  summary: 'Đọc khoảng cách giá rao và giá giao dịch: tách hiệu ứng cơ cấu loại nhà, hiểu sai lệch mẫu và cách thương lượng, trước khi kết luận về mức "ảo".',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst của một nền tảng dữ liệu bất động sản. Báo cáo về **Khu Z** (giả định) có câu tiêu đề: *"Giá rao cao hơn giá giao dịch tới 26% — thị trường đang thổi giá"*. Một bạn đồng nghiệp muốn đưa số này vào bản tin gửi khách hàng. Trưởng nhóm nhờ bạn kiểm tra trước.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Khu Z và mọi số liệu là **giả định**. Giá rao và giá giao dịch ở thực tế đến từ các nguồn khác nhau với độ phủ khác nhau; bài chỉ minh họa cách đọc.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Giá rao trung vị', value: '62 triệu đ/m²', delta: '400 tin rao', tone: 'neutral' },
            { label: 'Giá giao dịch trung vị', value: '46 triệu đ/m²', delta: '25 giao dịch ghi nhận', tone: 'neutral' },
            { label: 'Chênh gộp', value: '25,8%', delta: '(62 − 46) ÷ 62', tone: 'warning' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: hai nguồn, hai nhóm, hai thời điểm',
      blocks: [
        {
          kind: 'text',
          md: 'Giá rao là **kỳ vọng** của người bán, thường có dư địa thương lượng. Giá giao dịch là **kết quả** của những căn đã bán, và chỉ xuất hiện khi hợp đồng thành hay được ghi nhận. Trước khi so hai con số, hãy hỏi ba câu: (1) hai nhóm có **cùng cơ cấu** loại nhà không? (2) tập giao dịch có **đại diện** cho tập tin rao không? (3) hai con số có **cùng thời điểm** không?',
        },
        {
          kind: 'formula',
          expression: 'Chênh rao − giao dịch = (Giá rao − Giá giao dịch) ÷ Giá rao, tính trong cùng một phân khúc',
          note: 'So trong cùng loại bất động sản (chung cư với chung cư, nhà phố với nhà phố) và, tốt nhất, theo từng căn: tin rao gốc so với giá chốt của chính căn đó.',
        },
        {
          kind: 'quiz',
          id: 'asking-vs-transaction-price-gap-reading-q1',
          question: 'Điều gì khiến chênh lệch gộp 25,8% chưa phản ánh đúng "mức ảo giá"?',
          options: [
            {
              id: 'a',
              text: 'Hai tập dữ liệu có cơ cấu khác nhau (tin rao nhiều nhà phố giá cao, giao dịch phần lớn là chung cư giá thấp) nên so gộp trộn lẫn hai loại.',
              correct: true,
              explain: 'Đúng. Đây là hiệu ứng cơ cấu (mix): ngay cả khi mỗi loại chỉ chênh vài phần trăm, trung vị gộp vẫn chênh lớn vì tỷ trọng loại nhà khác nhau.',
            },
            {
              id: 'b',
              text: 'Vì giá trung vị luôn kém chính xác hơn giá trung bình.',
              explain: 'Trung vị thường bền hơn trung bình khi có giá cực đoan; đó không phải vấn đề ở đây.',
            },
            {
              id: 'c',
              text: 'Vì giá giao dịch luôn bị khai thấp.',
              explain: 'Có thể có khai thấp ở thực tế, nhưng bài chưa có bằng chứng; vấn đề rõ hơn là cơ cấu.',
            },
          ],
        },
      ],
    },
    {
      id: 'mix',
      kind: 'analysis',
      title: 'Bước 1 — So trong cùng loại bất động sản',
      blocks: [
        {
          kind: 'table',
          title: 'Giá rao và giá giao dịch theo loại (triệu đ/m², trung vị)',
          columns: [
            { key: 'type', label: 'Loại' },
            { key: 'askN', label: 'Tin rao', align: 'right' },
            { key: 'ask', label: 'Giá rao', align: 'right' },
            { key: 'dealN', label: 'Giao dịch', align: 'right' },
            { key: 'deal', label: 'Giá giao dịch', align: 'right' },
            { key: 'gap', label: 'Chênh', align: 'right' },
          ],
          rows: [
            { type: 'Chung cư', askN: 150, ask: '45,0', dealN: 18, deal: '42,3', gap: '6,0%' },
            { type: 'Nhà phố', askN: 250, ask: '72,0', dealN: 7, deal: '64,8', gap: '10,0%' },
            { type: 'Tổng (trung vị chung)', askN: 400, ask: '62,0', dealN: 25, deal: '46,0', gap: '25,8%' },
          ],
          highlight: [
            { row: 0, tone: 'neutral' },
            { row: 1, tone: 'neutral' },
            { row: 2, tone: 'warning' },
          ],
          caption: 'Trong từng loại, chênh chỉ 6–10%. Chênh gộp 25,8% lớn hơn cả hai vì nhà phố chiếm 62,5% tin rao (250/400) nhưng chỉ 28% giao dịch (7/25).',
        },
        {
          kind: 'chart',
          title: 'Chênh rao − giao dịch: gộp so với từng loại',
          type: 'bar',
          xKey: 'seg',
          unit: '%',
          series: [{ key: 'gap', label: 'Chênh giá rao − giao dịch' }],
          data: [
            { seg: 'Chung cư', gap: 6 },
            { seg: 'Nhà phố', gap: 10 },
            { seg: 'Gộp', gap: 25.8 },
          ],
          caption: 'Số gộp vượt cả hai số thành phần: dấu hiệu rõ của hiệu ứng cơ cấu.',
        },
        {
          kind: 'quiz',
          id: 'asking-vs-transaction-price-gap-reading-q2',
          question: 'Chênh gộp 25,8% lớn hơn cả chênh chung cư (6%) và chênh nhà phố (10%). Cách giải thích đúng nhất?',
          options: [
            {
              id: 'a',
              text: 'Hai tập có tỷ trọng loại nhà khác nhau: tin rao thiên về nhà phố (giá cao), giao dịch thiên về chung cư (giá thấp).',
              correct: true,
              explain: 'Đúng. Khác biệt cơ cấu làm trung vị gộp lệch mà không cần ai "ảo giá" nhiều. Thực tế đây là hiện tượng kiểu nghịch lý Simpson.',
            },
            {
              id: 'b',
              text: 'Có lỗi tính toán trong bảng.',
              explain: 'Không có lỗi: trung vị không phải trung bình có trọng số của hai trung vị thành phần; nó có thể nằm ngoài khoảng so sánh trực quan.',
            },
            {
              id: 'c',
              text: 'Người bán nhà phố đã nâng giá 26%.',
              explain: 'Trong nhóm nhà phố, chênh chỉ 10,0%.',
            },
          ],
        },
      ],
    },
    {
      id: 'sample',
      kind: 'analysis',
      title: 'Bước 2 — Giao dịch ghi nhận có đại diện không?',
      blocks: [
        {
          kind: 'table',
          title: '25 giao dịch có tin rao gốc, theo thời gian rao trước khi chốt',
          columns: [
            { key: 'days', label: 'Thời gian rao' },
            { key: 'n', label: 'Giao dịch', align: 'right' },
            { key: 'gap', label: 'Chênh rao − chốt', align: 'right' },
          ],
          rows: [
            { days: '≤ 30 ngày', n: 9, gap: '4%' },
            { days: '31–90 ngày', n: 10, gap: '8%' },
            { days: '> 90 ngày', n: 6, gap: '14%' },
            { days: 'Tổng', n: 25, gap: '—' },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: '9 + 10 + 6 = 25. Căn rao càng lâu thì giá chốt càng thấp so với giá rao ban đầu: người bán phải hạ giá.',
        },
        {
          kind: 'text',
          md: 'Có hai lệch mẫu nên lưu ý. **Thứ nhất**, 400 tin rao gồm cả tin rao cũ chưa bán, tin trùng, tin "ảo" kéo khách; chưa chắc là giá thị trường. **Thứ hai**, chỉ 25 giao dịch có ghi nhận, và các căn bán nhanh hoặc bán công khai có thể khác căn bán kín; tập này không chắc đại diện cho toàn khu. Với mẫu nhỏ (7 nhà phố), một giao dịch bất thường đủ làm trung vị đổi.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'So giá rao với giá giao dịch **theo từng căn** (matched pairs) là cách sạch nhất, vì loại bỏ cả hiệu ứng cơ cấu. Nếu chỉ có hai tập rời nhau, hãy chuẩn hóa theo loại, khu vực, diện tích, và nêu rõ cỡ mẫu và độ không chắc chắn.',
        },
        {
          kind: 'quiz',
          id: 'asking-vs-transaction-price-gap-reading-q3',
          question: 'Nếu bản tin vẫn muốn nói về "khoảng cách thương lượng" của khu Z, câu nào trung thực nhất?',
          options: [
            {
              id: 'a',
              text: '"Giao dịch ghi nhận chốt thấp hơn giá rao khoảng 6% (chung cư) đến 10% (nhà phố); căn rao trên 90 ngày chốt thấp hơn khoảng 14%. Mẫu 25 giao dịch, kết quả mang tính tham khảo."',
              correct: true,
              explain: 'Đúng. So trong cùng loại, nêu cỡ mẫu và giới hạn, không khẳng định "ảo giá 26%".',
            },
            {
              id: 'b',
              text: '"Người bán nâng giá 26% so với giá thật."',
              explain: 'Con số 26% là do cơ cấu mẫu, và "giá thật" chưa được định nghĩa.',
            },
            {
              id: 'c',
              text: '"Giá khu Z đã giảm 26%."',
              explain: 'So giá rao với giá giao dịch không cho biết giá thay đổi theo thời gian.',
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
          md: '**Kết luận:** Chênh gộp 25,8% chủ yếu do cơ cấu loại nhà khác nhau giữa hai tập. Trong từng loại, giá chốt thấp hơn giá rao 6–10%, và thấp hơn nữa với căn rao lâu. Nên công bố chênh theo loại, kèm cỡ mẫu và giới hạn.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Báo cáo chênh rao − chốt theo loại bất động sản và theo thời gian rao, kèm cỡ mẫu',
              owner: 'Analyst thị trường bất động sản',
              metric: 'Chênh rao − chốt theo loại',
              threshold: 'Chỉ công bố khi mỗi nhóm có ≥ 30 giao dịch; dưới đó ghi rõ "mẫu nhỏ"',
            },
            {
              action: 'Ghép tin rao gốc với giá chốt cho từng căn (matched pairs) khi có thể',
              owner: 'Kỹ sư dữ liệu',
              metric: 'Tỷ lệ giao dịch có tin rao gốc ghép được',
              threshold: '≥ 70%',
            },
            {
              action: 'Loại tin trùng và tin quá hạn khỏi tập giá rao trước khi tính trung vị',
              owner: 'Kỹ sư dữ liệu chất lượng',
              metric: 'Tỷ lệ tin rao hợp lệ',
              threshold: 'Báo cáo tỷ lệ tin loại bỏ mỗi kỳ',
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
              title: 'So giá rao gộp với giá giao dịch gộp',
              why: 'Cơ cấu loại nhà khác nhau làm chênh gộp lớn hơn chênh thật trong từng loại.',
              instead: 'So trong cùng loại, khu vực, diện tích hoặc theo từng căn.',
            },
            {
              title: 'Coi giá rao là giá thị trường',
              why: 'Giá rao là kỳ vọng; có tin cũ, tin trùng, tin kéo khách.',
              instead: 'Lọc tin hợp lệ và so với giá chốt của căn tương tự.',
            },
            {
              title: 'Kết luận từ mẫu giao dịch nhỏ',
              why: 'Một vài giao dịch đủ làm trung vị đổi; khai báo giá giao dịch có thể không đầy đủ.',
              instead: 'Nêu cỡ mẫu, đừng công bố con số quá chính xác khi mẫu nhỏ.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Giá rao là kỳ vọng, giá giao dịch là kết quả; so chúng trong cùng loại và tốt nhất theo từng căn.',
    'Chênh gộp có thể lớn hơn chênh của từng loại nhờ hiệu ứng cơ cấu (kiểu nghịch lý Simpson).',
    'Luôn nêu cỡ mẫu và giới hạn của tập giao dịch trước khi gọi một mức chênh là "ảo giá".',
  ],
  references: [
    {
      title: 'Selection bias',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Selection_bias',
      note: 'Giải thích sai lệch chọn mẫu: tập giao dịch ghi nhận có thể không đại diện cho tập tin rao.',
    },
    {
      title: "Simpson's paradox",
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Simpson%27s_paradox',
      note: 'Hiện tượng số gộp đảo chiều hay phóng đại so với số từng nhóm khi tỷ trọng các nhóm khác nhau.',
    },
  ],
}
