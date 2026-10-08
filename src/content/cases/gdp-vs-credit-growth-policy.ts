import type { CaseStudy } from '../types'

/*
 * Nền kinh tế giả định, số liệu MÔ PHỎNG (không mô tả quốc gia hay quyết định có thật), đã tính lại bằng node.
 * Mốc Y−5: GDP danh nghĩa 1.000, dư nợ tín dụng 1.100 → tín dụng/GDP 110,0%. Xu hướng dài hạn giả định +1,0 điểm %/năm.
 *   Năm   GDP thực  Lạm phát  GDP danh nghĩa  Tín dụng  Tín dụng−GDP dn  Tín dụng/GDP  Gap   Tín dụng mới/GDP tăng thêm  Nợ xấu
 *   Y−4   6,5       3,0       9,69            10,0      +0,31            110,3         −0,7  1,13                        1,6
 *   Y−3   6,2       3,2       9,60            11,5      +1,90            112,2         +0,2  1,32                        1,5
 *   Y−2   6,0       3,5       9,71            13,0      +3,29            115,6         +2,6  1,50                        1,6
 *   Y−1   5,8       4,0       10,03           14,5      +4,47            120,3         +6,3  1,67                        1,9
 *   Y0    5,5       4,5       10,25           15,5      +5,25            126,0         +11,0 1,82                        2,4
 *   (GDP danh nghĩa = (1+thực)(1+lạm phát) − 1; Y0: GDP 1.600,0, tín dụng 2.016,2)
 * Tín dụng theo khu vực @Y0 (tỷ trọng dư nợ × tăng trưởng = đóng góp): BĐS 30% × 22% = 6,6 · Tiêu dùng 20% × 17% = 3,4
 *   · Sản xuất–kinh doanh 50% × 11% = 5,5 → 15,5% ✓; tỷ trọng tín dụng mới: 42,6 / 21,9 / 35,5 (%) = 100.
 * Kịch bản Y+1 (GDP thực 5,3 + lạm phát 4,2 → GDP danh nghĩa 9,72%; xu hướng 116,0), giữ GDP danh nghĩa như nhau để so sánh:
 *   Tín dụng 10,0% → 126,3% (gap 10,3; tín dụng mới/GDP thêm 1,30) · 12,0% → 128,6% (12,6; 1,56)
 *   12,5% → 129,2% (13,2; 1,62) · 15,5% → 132,6% (16,6; 2,01)
 *   Giả định minh họa chưa kiểm chứng: +1 điểm % tín dụng → +0,1 đến +0,3 điểm % GDP thực (so với kịch bản 10%):
 *   12,5% → +0,25 đến +0,75 · 15,5% → +0,55 đến +1,65.
 * Ngưỡng 2 và 10 điểm % của gap là mốc tham chiếu của khung Basel III (nguồn BIS trong references).
 */
export const gdpVsCreditGrowthPolicy: CaseStudy = {
  id: 'gdp-vs-credit-growth-policy',
  title: 'Chỉ tiêu tín dụng: đuổi theo tăng trưởng hay giữ ổn định?',
  domain: 'macro',
  level: 'senior',
  minutes: 14,
  skills: ['macro', 'causal', 'tradeoff'],
  question:
    'Tín dụng đã tăng nhanh hơn GDP danh nghĩa 5 năm liền và credit-to-GDP gap vượt 10 điểm %. Nên đặt chỉ tiêu tăng trưởng tín dụng năm tới ở mức nào, và dữ liệu vĩ mô cho phép khẳng định gì về tác động của tín dụng lên tăng trưởng?',
  summary:
    'Đọc credit-to-GDP gap, hiệu quả tín dụng trên mỗi đồng GDP tăng thêm và cơ cấu theo khu vực, rồi cân giữa hỗ trợ tăng trưởng và rủi ro ổn định; đề xuất có owner, ngưỡng và giới hạn nhân quả rõ ràng.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst cấp cao tại bộ phận phân tích chính sách của một **ngân hàng trung ương giả định**. Cuối năm, ban điều hành chuẩn bị chỉ tiêu tăng trưởng tín dụng cho năm Y+1. Hai luồng ý kiến: **Khối tăng trưởng** muốn giữ tín dụng tăng khoảng 15% *"để hỗ trợ GDP, vì tăng trưởng đang chậm lại"*. **Khối ổn định tài chính** cảnh báo *"tín dụng đã chạy trước GDP quá lâu, nợ xấu chỉ là chỉ báo trễ"*. Bạn được giao một khuyến nghị có số liệu. Dữ liệu năm Y0:',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Tăng trưởng tín dụng', value: '15,5%', delta: 'cao hơn GDP danh nghĩa 5,25 điểm %', tone: 'warning' },
            { label: 'GDP thực / lạm phát', value: '5,5% / 4,5%', delta: 'tăng trưởng giảm 5 năm, lạm phát tăng', tone: 'neutral' },
            { label: 'Tín dụng/GDP', value: '126,0%', delta: 'gap +11,0 điểm % so với xu hướng', tone: 'negative' },
            { label: 'Nợ xấu', value: '2,4%', delta: 'từ 1,5% (Y−3)', tone: 'warning', note: 'chỉ báo trễ' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi thật của ban điều hành',
          md: 'Không phải "tăng trưởng hay ổn định" mà là: **mỗi điểm % tín dụng tăng thêm mua được bao nhiêu tăng trưởng, rủi ro tích lũy ở đâu, và khi nào cần phanh**. Đồng thời phải trung thực về chuyện dữ liệu vĩ mô *không* chứng minh được tín dụng gây ra tăng trưởng.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: so với GDP, so với xu hướng, rồi so cái giá phải trả',
      blocks: [
        {
          kind: 'formula',
          expression: 'Credit-to-GDP gap = (Dư nợ tín dụng / GDP danh nghĩa) − Xu hướng dài hạn của chính tỷ lệ đó',
          note: 'Tỷ lệ tín dụng/GDP chỉ tăng khi tín dụng tăng **nhanh hơn GDP danh nghĩa** (gồm cả lạm phát). Gap lớn kéo dài là chỉ báo cảnh báo sớm khủng hoảng ngân hàng được dùng rộng rãi. Khung Basel III dùng mốc tham chiếu 2 và 10 điểm % cho bộ đệm vốn, nhưng khuyến khích kết hợp phán đoán thay vì áp máy móc.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Đo độ lệch**: tín dụng so với GDP danh nghĩa, và gap so với xu hướng.',
            '**Đo hiệu quả biên**: mỗi đơn vị GDP tăng thêm cần bao nhiêu đơn vị tín dụng mới.',
            '**Đo chất lượng**: tín dụng đang chảy vào đâu (khu vực, kỳ hạn), nợ xấu và chỉ báo dẫn trước.',
            '**Cân trade-off và nói rõ giới hạn nhân quả**: lợi ích tăng trưởng ước lượng nằm trong khoảng nào, dựa trên giả định gì.',
          ],
        },
        {
          kind: 'quiz',
          id: 'gdp-vs-credit-growth-policy-q1',
          question: 'Tín dụng tăng 15,5% còn GDP thực tăng 5,5%. Phép so sánh nào đúng để biết tín dụng có "chạy trước" nền kinh tế?',
          options: [
            {
              id: 'a',
              text: 'So 15,5% với 5,5%: tín dụng nhanh hơn gần 3 lần.',
              explain:
                'Tín dụng là đại lượng danh nghĩa, còn 5,5% là GDP thực (đã loại lạm phát). So khác "đơn vị" sẽ phóng đại. Cần so với GDP danh nghĩa.',
            },
            {
              id: 'b',
              text: 'So với GDP danh nghĩa (10,25%) và nhìn tỷ lệ tín dụng/GDP so với xu hướng (126,0%, gap +11,0 điểm %).',
              correct: true,
              explain:
                'Đúng. Tín dụng vượt GDP danh nghĩa 5,25 điểm % nên tỷ lệ tín dụng/GDP tăng từ 120,3% lên 126,0%. Gap +11,0 vượt mốc tham chiếu 10 điểm %, tín hiệu cần cẩn trọng.',
            },
            {
              id: 'c',
              text: 'Nợ xấu mới 2,4% nên chưa có vấn đề, chưa cần so gì thêm.',
              explain:
                'Nợ xấu là chỉ báo trễ và bị pha loãng khi dư nợ tăng nhanh (mẫu số lớn lên). Rủi ro tích lũy trước khi nợ xấu hiện ra.',
            },
          ],
        },
      ],
    },
    {
      id: 'gap',
      kind: 'analysis',
      title: 'Bước 1 — Tín dụng vượt GDP 5 năm liền, gap vượt ngưỡng',
      blocks: [
        {
          kind: 'table',
          title: 'Tín dụng, GDP và chỉ báo rủi ro theo năm (mô phỏng)',
          columns: [
            { key: 'y', label: 'Năm' },
            { key: 'gdp', label: 'GDP danh nghĩa', align: 'right' },
            { key: 'cr', label: 'Tín dụng', align: 'right' },
            { key: 'ratio', label: 'Tín dụng/GDP', align: 'right' },
            { key: 'gap', label: 'Gap', align: 'right' },
            { key: 'npl', label: 'Nợ xấu', align: 'right' },
          ],
          rows: [
            { y: 'Y−4', gdp: '9,69%', cr: '10,0%', ratio: '110,3%', gap: '−0,7', npl: '1,6%' },
            { y: 'Y−3', gdp: '9,60%', cr: '11,5%', ratio: '112,2%', gap: '+0,2', npl: '1,5%' },
            { y: 'Y−2', gdp: '9,71%', cr: '13,0%', ratio: '115,6%', gap: '+2,6', npl: '1,6%' },
            { y: 'Y−1', gdp: '10,03%', cr: '14,5%', ratio: '120,3%', gap: '+6,3', npl: '1,9%' },
            { y: 'Y0', gdp: '10,25%', cr: '15,5%', ratio: '126,0%', gap: '+11,0', npl: '2,4%' },
          ],
          highlight: [
            { row: 2, tone: 'warning' },
            { row: 4, tone: 'negative' },
          ],
          caption: 'Gap vượt 2 điểm % ở Y−2 và 10 điểm % ở Y0, trong khi nợ xấu mới nhích lên từ Y−1. Gap là chỉ báo dẫn trước; nợ xấu là chỉ báo trễ.',
        },
        {
          kind: 'chart',
          title: 'Tăng trưởng tín dụng và GDP danh nghĩa (%)',
          type: 'line',
          xKey: 'y',
          unit: '%',
          series: [
            { key: 'credit', label: 'Tín dụng' },
            { key: 'gdp', label: 'GDP danh nghĩa' },
          ],
          data: [
            { y: 'Y−4', credit: 10.0, gdp: 9.69 },
            { y: 'Y−3', credit: 11.5, gdp: 9.6 },
            { y: 'Y−2', credit: 13.0, gdp: 9.71 },
            { y: 'Y−1', credit: 14.5, gdp: 10.03 },
            { y: 'Y0', credit: 15.5, gdp: 10.25 },
          ],
          marker: { x: 'Y−2', label: 'Gap vượt 2 điểm %' },
          caption: 'Khoảng cách giữa hai đường tích lũy thành gap: 0,31 → 1,90 → 3,29 → 4,47 → 5,25 điểm % mỗi năm.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Mốc 2 và 10 điểm % không phải "ngưỡng khủng hoảng". Gap phụ thuộc cách ước lượng xu hướng (bộ lọc HP một phía), cần chuỗi đủ dài (khoảng 10 năm) và có thể sai lệch ở nền kinh tế đang tài chính hóa nhanh. Dùng gap như **tín hiệu cảnh báo kết hợp với chỉ báo khác** (giá tài sản, gánh nặng trả nợ), không như công tắc tự động.',
        },
      ],
    },
    {
      id: 'efficiency',
      kind: 'analysis',
      title: 'Bước 2 — Hiệu quả biên giảm, tín dụng dồn vào bất động sản',
      blocks: [
        {
          kind: 'chart',
          title: 'Tín dụng mới cần cho mỗi đơn vị GDP danh nghĩa tăng thêm',
          type: 'bar',
          xKey: 'y',
          unit: '',
          series: [{ key: 'ratio', label: 'Tín dụng mới / GDP tăng thêm' }],
          data: [
            { y: 'Y−4', ratio: 1.13 },
            { y: 'Y−3', ratio: 1.32 },
            { y: 'Y−2', ratio: 1.5 },
            { y: 'Y−1', ratio: 1.67 },
            { y: 'Y0', ratio: 1.82 },
          ],
          caption: 'Y−4 cần 1,13 đồng tín dụng mới cho mỗi đồng GDP danh nghĩa tăng thêm; Y0 cần 1,82 đồng. Đây là chỉ số mô tả, không phải bằng chứng tín dụng gây ra tăng trưởng.',
        },
        {
          kind: 'table',
          title: 'Tín dụng Y0 theo khu vực',
          columns: [
            { key: 'sector', label: 'Khu vực' },
            { key: 'stock', label: 'Tỷ trọng dư nợ', align: 'right' },
            { key: 'growth', label: 'Tăng trưởng', align: 'right' },
            { key: 'contrib', label: 'Đóng góp (điểm %)', align: 'right' },
            { key: 'new', label: 'Tỷ trọng tín dụng mới', align: 'right' },
          ],
          rows: [
            { sector: 'Bất động sản', stock: '30%', growth: '22%', contrib: '6,6', new: '42,6%' },
            { sector: 'Tiêu dùng', stock: '20%', growth: '17%', contrib: '3,4', new: '21,9%' },
            { sector: 'Sản xuất – kinh doanh', stock: '50%', growth: '11%', contrib: '5,5', new: '35,5%' },
            { sector: 'Tổng', stock: '100%', growth: '15,5%', contrib: '15,5', new: '100%' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
          caption: 'Bất động sản chiếm 30% dư nợ nhưng nhận 42,6% tín dụng mới. Tăng trưởng 15,5% là trung bình có trọng số; phần đuôi (bất động sản 22%) mới là nơi rủi ro tập trung.',
        },
        {
          kind: 'quiz',
          id: 'gdp-vs-credit-growth-policy-q2',
          question: 'Ba năm qua tín dụng và GDP danh nghĩa đều tăng. Phát biểu nào là kết luận quá mức dữ liệu vĩ mô cho phép?',
          options: [
            {
              id: 'a',
              text: '"Mỗi điểm % tín dụng tăng thêm đã mang lại đúng 0,2 điểm % tăng trưởng GDP."',
              correct: true,
              explain:
                'Đúng là kết luận quá mức. Chuỗi vĩ mô chỉ vài điểm, lẫn nhiều yếu tố đồng thời (chu kỳ bất động sản, lạm phát, điều kiện bên ngoài), và chiều nhân quả có thể ngược (kinh tế tốt nên cầu vay cao). Chỉ có thể nói về tương quan và khoảng ước lượng, không phải hệ số nhân quả duy nhất.',
            },
            {
              id: 'b',
              text: '"Tín dụng tăng nhanh hơn GDP danh nghĩa, nên tỷ lệ tín dụng/GDP tăng."',
              explain:
                'Đây là hằng đẳng thức kế toán, kiểm tra trực tiếp từ số liệu, không cần giả định nhân quả.',
            },
            {
              id: 'c',
              text: '"Lượng tín dụng mới cho mỗi đồng GDP tăng thêm đang tăng, nên hiệu quả biên mô tả được là giảm."',
              explain:
                'Đây là mô tả đúng số liệu. Nó không nói nguyên nhân (có thể do vốn chảy vào tài sản), nhưng chuyển động của chỉ số là sự thật quan sát được.',
            },
          ],
        },
      ],
    },
    {
      id: 'tradeoff',
      kind: 'analysis',
      title: 'Bước 3 — Cân trade-off: ba mức chỉ tiêu cho Y+1',
      blocks: [
        {
          kind: 'table',
          title: 'Kịch bản chỉ tiêu tín dụng Y+1 (GDP danh nghĩa 9,72%)',
          columns: [
            { key: 'opt', label: 'Chỉ tiêu tín dụng' },
            { key: 'ratio', label: 'Tín dụng/GDP', align: 'right' },
            { key: 'gap', label: 'Gap', align: 'right' },
            { key: 'icor', label: 'Tín dụng mới/GDP thêm', align: 'right' },
            { key: 'gdp', label: 'GDP thực thêm so với 10%', align: 'right' },
          ],
          rows: [
            { opt: '10,0% (≈ GDP danh nghĩa)', ratio: '126,3%', gap: '+10,3', icor: '1,30', gdp: '0' },
            { opt: '12,0%', ratio: '128,6%', gap: '+12,6', icor: '1,56', gdp: '+0,2 đến +0,6 điểm %' },
            { opt: '12,5%', ratio: '129,2%', gap: '+13,2', icor: '1,62', gdp: '+0,25 đến +0,75 điểm %' },
            { opt: '15,5% (giữ nguyên)', ratio: '132,6%', gap: '+16,6', icor: '2,01', gdp: '+0,55 đến +1,65 điểm %' },
          ],
          highlight: [{ row: 3, tone: 'negative' }, { row: 1, tone: 'warning' }],
          caption: 'Cột cuối dựa trên giả định minh họa +1 điểm % tín dụng → +0,1 đến +0,3 điểm % GDP thực, **chưa kiểm chứng**. Biên độ rộng cố ý để thấy mức bất định: lợi ích tăng trưởng có thể gần bằng chi phí hoặc nhỏ hơn nhiều.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Giới hạn suy luận nhân quả từ số vĩ mô',
          md: 'Ba lý do không thể ước lượng "tín dụng gây ra bao nhiêu GDP" từ chuỗi này: **(1) đồng thời**: tín dụng và GDP cùng phản ứng với chu kỳ chung (bất động sản, xuất khẩu, lạm phát); **(2) nhân quả ngược**: kinh tế tốt kéo cầu vay lên; **(3) mẫu nhỏ**: vài quan sát năm, không có nhóm đối chứng. Nên trình bày lợi ích dưới dạng **khoảng + giả định** và ưu tiên bằng chứng từ nhiều nước hoặc dữ liệu vi mô (khu vực, doanh nghiệp) khi có.',
        },
        {
          kind: 'quiz',
          id: 'gdp-vs-credit-growth-policy-q3',
          question: 'Đề xuất nào cân bằng tốt nhất giữa hỗ trợ tăng trưởng và ổn định?',
          options: [
            {
              id: 'a',
              text: 'Giữ chỉ tiêu 15,5% vì tăng trưởng đang chậm, siết lúc này sẽ làm GDP giảm thêm.',
              explain:
                'Lợi ích ước tính chỉ +0,55 đến +1,65 điểm % GDP với chi phí là gap vọt lên +16,6 và hiệu quả biên xấu đi. Quyết định ngược chiều cảnh báo mà không có bằng chứng nhân quả đủ mạnh.',
            },
            {
              id: 'b',
              text: 'Đưa chỉ tiêu về khoảng 10–12% (gần GDP danh nghĩa), phân bổ có định hướng sang sản xuất, đi kèm ngưỡng rà soát giữa năm để nới nếu tăng trưởng yếu rõ rệt.',
              correct: true,
              explain:
                'Đúng. Dải này dừng đà mở rộng của gap (+10,3 đến +12,6 so với +16,6) nhưng vẫn cho tín dụng tăng, tránh cú sốc cầu. Phân bổ theo khu vực xử lý nơi rủi ro tập trung (bất động sản 42,6% tín dụng mới), và ngưỡng rà soát giữ tính linh hoạt vì lợi ích tăng trưởng bất định.',
            },
            {
              id: 'c',
              text: 'Cắt mạnh xuống 5% để đưa gap về dưới 10 ngay trong năm.',
              explain:
                'Phanh gấp có thể gây thắt chặt tín dụng đột ngột (doanh nghiệp tốt cũng bị thiếu vốn) và làm nợ xấu tăng qua kênh doanh nghiệp hụt vốn. Đóng gap cần nhiều năm, không phải một năm.',
            },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp tối ưu: dải chỉ tiêu có điều kiện, ngưỡng và người chịu trách nhiệm',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận cho ban điều hành:** Tín dụng chạy trước GDP danh nghĩa 5 năm liền, gap đã vượt mốc tham chiếu 10 điểm %, hiệu quả biên giảm (1,13 → 1,82) và tín dụng mới dồn 42,6% vào bất động sản. Lợi ích tăng trưởng của việc giữ 15,5% chỉ nằm trong khoảng giả định +0,55 đến +1,65 điểm % GDP, chưa kiểm chứng được. Khuyến nghị chỉ tiêu **10–12%** có điều kiện, kèm phân bổ có định hướng. Đây là *đề xuất dựa trên số mô phỏng và giả định*, không phải kết quả nhân quả.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Đặt chỉ tiêu tín dụng Y+1 trong dải 10–12%; rà soát giữa năm để quyết định nới thêm nếu GDP thực thấp hơn dự báo rõ rệt',
              owner: 'Ban điều hành chính sách tiền tệ',
              metric: 'Tăng trưởng tín dụng; gap so với xu hướng',
              threshold: 'Gap < 13 điểm % cuối năm; nới thêm chỉ khi GDP thực dưới 5,0% hai quý liên tiếp',
            },
            {
              action: 'Định hướng tín dụng: giảm tăng trưởng bất động sản và tiêu dùng về mức không vượt GDP danh nghĩa, ưu tiên sản xuất – kinh doanh',
              owner: 'Vụ giám sát và quản lý tín dụng',
              metric: 'Tăng trưởng tín dụng bất động sản, tiêu dùng; tỷ trọng tín dụng mới',
              threshold: 'Bất động sản + tiêu dùng ≤ 9,7% tăng trưởng; tỷ trọng tín dụng mới BĐS < 35%',
            },
            {
              action: 'Dashboard cảnh báo sớm gồm nợ nhóm cần chú ý (quá hạn 30–90 ngày), tỷ lệ chuyển nhóm nợ, gánh nặng trả nợ và giá tài sản, kèm báo cáo hàng quý',
              owner: 'Phân tích ổn định tài chính',
              metric: 'Nợ nhóm cần chú ý; roll rate; nợ xấu',
              threshold: 'Vàng khi nợ xấu ≥ 3,0% hoặc nợ cần chú ý tăng > 30% so với cùng kỳ; đỏ khi nợ xấu ≥ 3,5%',
            },
            {
              action: 'Dựng nghiên cứu kiểm chứng tác động tín dụng lên GDP bằng dữ liệu theo khu vực/doanh nghiệp thay vì chuỗi vĩ mô',
              owner: 'Nhóm nghiên cứu kinh tế lượng',
              metric: 'Khoảng ước lượng hiệu ứng tín dụng lên tăng trưởng',
              threshold: 'Có kết quả ban đầu trong 2 quý để cập nhật giả định 0,1–0,3',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Quyết định đặt lên **giá trị bất đối xứng**: nếu giả định lợi ích tăng trưởng quá lạc quan, chi phí là khủng hoảng tích lũy; nếu quá bi quan, ta chỉ bỏ lỡ một phần nhỏ tăng trưởng và vẫn có thể nới sau. Dải có điều kiện, ngưỡng và nghiên cứu kiểm chứng biến một cuộc tranh luận ý kiến thành quy trình học dần từ dữ liệu.',
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
              title: 'So tín dụng danh nghĩa với GDP thực',
              why: 'Tín dụng 15,5% và GDP thực 5,5% khác đơn vị; lạm phát 4,5% làm GDP danh nghĩa 10,25%. So sai làm phóng đại độ lệch gấp gần 3 lần.',
              instead: 'Dùng GDP danh nghĩa khi so với dư nợ, hoặc quy cả hai về giá thực.',
            },
            {
              title: 'Coi nợ xấu thấp là bằng chứng an toàn',
              why: 'Dư nợ tăng nhanh làm mẫu số lớn lên và khoản vay mới chưa kịp quá hạn, nên nợ xấu thấp một cách giả tạo.',
              instead: 'Theo dõi gap, nợ cần chú ý, roll rate và cơ cấu khu vực song song với nợ xấu.',
            },
            {
              title: 'Nói "tín dụng tạo ra X% GDP" từ chuỗi vĩ mô',
              why: 'Đồng thời, nhân quả ngược và mẫu nhỏ khiến không thể tách tác động của tín dụng.',
              instead: 'Trình bày khoảng ước lượng và giả định, và xây dựng bằng chứng từ dữ liệu vi mô hoặc nhiều nước.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Tín dụng/GDP tăng khi tín dụng vượt GDP danh nghĩa; gap so với xu hướng là cảnh báo sớm, nợ xấu là chỉ báo trễ.',
    'Đánh giá cả hiệu quả biên (tín dụng mới trên mỗi đồng GDP thêm) và cơ cấu khu vực, không chỉ con số tăng trưởng tổng.',
    'Số vĩ mô chỉ cho phép nói về tương quan và khoảng bất định; đề xuất cần owner, ngưỡng, điều kiện nới và kế hoạch kiểm chứng.',
  ],
  references: [
    {
      title: 'Credit-to-GDP gaps - overview',
      publisher: 'Bank for International Settlements (BIS Data Portal)',
      url: 'https://data.bis.org/topics/CREDIT_GAPS',
      note: 'Định nghĩa credit-to-GDP gap (chênh lệch với xu hướng dài hạn), phương pháp bộ lọc HP một phía và lưu ý cần phán đoán khi áp dụng trong khung Basel III.',
    },
    {
      title: 'The credit-to-GDP gap and countercyclical capital buffers: questions and answers',
      publisher: 'BIS Quarterly Review (March 2014)',
      url: 'https://www.bis.org/publ/qtrpdf/r_qt1403g.pdf',
      note: 'Giải thích mốc 2 và 10 điểm % của gap trong quy tắc bộ đệm vốn đối ứng chu kỳ, yêu cầu độ dài chuỗi dữ liệu và giới hạn khi áp dụng máy móc.',
    },
    {
      title: 'Total credit as an early warning indicator for systemic banking crises',
      publisher: 'BIS Quarterly Review (June 2013)',
      url: 'https://www.bis.org/publ/qtrpdf/r_qt1306f.htm',
      note: 'Bằng chứng gap tín dụng/GDP là chỉ báo cảnh báo sớm tốt, và vì sao nên dùng tổng tín dụng thay vì chỉ tín dụng ngân hàng.',
    },
  ],
}
