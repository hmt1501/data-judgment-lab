import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — Công ty cho vay tiêu dùng C (hư cấu), T9 vs T10. Chuyển đổi duyệt → giải ngân = số khoản giải ngân / số hồ sơ đã duyệt.
 *   Tổng: T9 duyệt 20.000, giải ngân 15.600 (78,0%) · T10 duyệt 22.000, giải ngân 14.520 (66,0%) · hồ sơ duyệt nhưng không giải ngân 4.400 → 7.480 (+3.080)
 *   Theo kênh (duyệt · giải ngân · chuyển đổi): đại lý T9 7.000 · 5.600 · 80,0% → T10 9.000 · 4.900 · 54,4% · trực tuyến 8.000 · 6.000 · 75,0% → 8.000 · 5.920 · 74,0% · chi nhánh 5.000 · 4.000 · 80,0% → 5.000 · 3.700 · 74,0%
 *     Σ duyệt 20.000 / 22.000, Σ giải ngân 15.600 / 14.520 ✓ · tỷ trọng đại lý 35,0% → 40,9%
 *   Phân rã −12,0 điểm: hiệu ứng cơ cấu kênh = (0,409−0,35)×0,80 + (0,364−0,40)×0,75 + (0,227−0,25)×0,80 = +4,73 − 2,73 − 1,82 = +0,18 · hiệu ứng tỷ lệ = 0,409×(−25,6) + 0,364×(−1,0) + 0,227×(−6,0) = −10,45 − 0,36 − 1,36 = −12,18 → −12,0 ✓ · đại lý = 85,8% hiệu ứng tỷ lệ
 *   Loại số tiền duyệt: toàn phần / giảm so với đề nghị
 *     Đại lý T9: toàn phần 5.000 → 4.400 (88,0%) · giảm 2.000 → 1.200 (60,0%) → T10: toàn phần 2.800 → 2.380 (85,0%) · giảm 6.200 → 2.520 (40,6%) · tỷ trọng giảm 28,6% → 68,9%
 *     Kênh khác (trực tuyến + chi nhánh) T9: toàn phần 9.000 → 7.560 (84,0%) · giảm 4.000 → 2.440 (61,0%) → T10: toàn phần 9.200 → 7.728 (84,0%) · giảm 3.800 → 1.892 (49,8%) · tỷ trọng giảm 30,8% → 29,2%
 *     Σ T9: toàn phần 14.000 → 11.960 (85,4%) · giảm 6.000 → 3.640 (60,7%) · Σ T10: toàn phần 12.000 → 10.108 (84,2%) · giảm 10.000 → 4.412 (44,1%) ✓ (10.108 + 4.412 = 14.520)
 *     Tỷ trọng giảm: 30,0% → 45,5% · phân rã theo loại duyệt: cơ cấu −3,83 + tỷ lệ −8,17 = −12,0 ✓
 *   Lý do không giải ngân (T9 → T10): số tiền duyệt thấp hơn mong muốn 1.100 → 3.200 · lãi suất cao hơn dự kiến 1.100 → 1.600 · chờ lâu/đã vay nơi khác 1.200 → 1.500 · thiếu hồ sơ/thủ tục 800 → 900 · khác 200 → 280 (Σ 4.400 / 7.480 ✓)
 *     đóng góp vào +3.080: số tiền +2.100 (68,2%) · lãi suất +500 (16,2%) · chờ +300 (9,7%) · hồ sơ +100 (3,2%) · khác +80 (2,6%)
 */
export const approvalToBookingConversionSegments: CaseStudy = {
  id: 'approval-to-booking-conversion-segments',
  title: 'Duyệt rồi nhưng không giải ngân: kênh nào, vì sao?',
  domain: 'lending',
  level: 'junior',
  minutes: 12,
  skills: ['funnel', 'segmentation', 'credit-risk', 'mix-effect'],
  question:
    'Tỷ lệ hồ sơ đã duyệt được giải ngân giảm từ 78,0% xuống 66,0%. Nó giảm ở kênh nào, có phải do duyệt số tiền thấp hơn đề nghị, và cách xử lý nào giữ cân bằng giữa rủi ro và doanh số?',
  summary:
    'Tách tỷ lệ chuyển đổi từ duyệt sang giải ngân theo kênh và theo loại số tiền duyệt, phân rã cơ cấu so với tỷ lệ, đọc lý do khách rút và đưa ra giả thuyết kiểm tra được.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng: công ty và mọi con số đều là giả định để minh họa.* **Công ty C** nhận hồ sơ vay tiêu dùng qua ba kênh: **đại lý**, **trực tuyến**, **chi nhánh**. Tháng 10 số hồ sơ được duyệt tăng từ 20.000 lên 22.000 nhưng số khoản giải ngân giảm từ 15.600 xuống 14.520. **Tỷ lệ chuyển đổi duyệt → giải ngân giảm từ 78,0% xuống 66,0%**, còn **7.480** hồ sơ đã duyệt nhưng không giải ngân (T9: 4.400). Từ T10 phòng rủi ro siết chính sách ở một số nhóm, duyệt số tiền thấp hơn đề nghị. Doanh số giảm, bộ phận kinh doanh đổ lỗi cho "rủi ro siết quá chặt", còn rủi ro cho rằng "khách rút vì lý do khác".',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Duyệt', value: '22.000', delta: '+10,0%', tone: 'neutral', note: 'T9: 20.000' },
            { label: 'Giải ngân', value: '14.520', delta: '−6,9%', tone: 'negative', note: 'T9: 15.600' },
            { label: 'Chuyển đổi duyệt → giải ngân', value: '66,0%', delta: '−12,0 điểm', tone: 'negative', note: 'T9: 78,0%' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi cần trả lời',
          md: 'Mức giảm 12 điểm nằm ở **kênh nào**, ở **loại hồ sơ nào** (duyệt đủ số tiền hay giảm), và **khách nói gì** khi rút? Có phải chính sách duyệt số tiền thấp hơn đang làm mất khách?',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: funnel bước cuối, theo kênh và loại duyệt',
      blocks: [
        {
          kind: 'formula',
          expression: 'Chuyển đổi = Σ (tỷ trọng nhóm × chuyển đổi của nhóm)  ·  Δ = hiệu ứng cơ cấu + hiệu ứng tỷ lệ',
          note: 'Bước "duyệt → giải ngân" bị ảnh hưởng bởi quyết định của khách (rút, so sánh lãi suất, vay nơi khác) và bởi chính điều kiện duyệt (số tiền, lãi suất). Tách theo kênh và theo loại duyệt (đủ số tiền / giảm) giúp tìm nơi mất khách và cơ chế.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Theo kênh**: kênh nào kéo giảm, có phải do cơ cấu kênh đổi.',
            '**Theo loại duyệt**: duyệt đủ số tiền đề nghị so với duyệt thấp hơn.',
            '**Lý do rút**: dữ liệu khách hàng nói gì, thay đổi thế nào so với tháng trước.',
            '**Giả thuyết và hành động**: nêu dữ liệu kiểm tra và can thiệp có kiểm soát rủi ro.',
          ],
        },
        {
          kind: 'quiz',
          id: 'approval-to-booking-conversion-segments-q1',
          question: 'Chuyển đổi tổng giảm 12 điểm. Bước đầu tiên hợp lý nhất?',
          options: [
            {
              id: 'a',
              text: 'Nới lại tiêu chí duyệt để khách dễ giải ngân hơn.',
              explain: 'Chưa biết nguyên nhân; nới tiêu chí ảnh hưởng chất lượng tín dụng, nên chỉ làm sau khi hiểu mức giảm đến từ đâu.',
            },
            {
              id: 'b',
              text: 'Cắt chuyển đổi theo kênh và theo loại số tiền duyệt, rồi phân rã cơ cấu so với tỷ lệ.',
              correct: true,
              explain: 'Đúng. Phân khúc cho biết nơi tập trung và cơ chế, phân rã cho biết phần nào do cơ cấu.',
            },
            {
              id: 'c',
              text: 'Khảo sát khách đã rút đơn.',
              explain: 'Khảo sát hữu ích nhưng chậm và lệch; dữ liệu có sẵn (lý do rút được ghi nhận, kênh, loại duyệt) trả lời nhanh hơn.',
            },
          ],
        },
      ],
    },
    {
      id: 'channel',
      kind: 'analysis',
      title: 'Bước 1 — Theo kênh: đại lý kéo mức giảm',
      blocks: [
        {
          kind: 'table',
          title: 'Chuyển đổi duyệt → giải ngân theo kênh (T9 → T10)',
          columns: [
            { key: 'ch', label: 'Kênh' },
            { key: 'app', label: 'Duyệt', align: 'right' },
            { key: 'book', label: 'Giải ngân', align: 'right' },
            { key: 'conv', label: 'Chuyển đổi', align: 'right' },
            { key: 'eff', label: 'Đóng góp vào thay đổi (điểm)', align: 'right' },
          ],
          rows: [
            { ch: 'Đại lý', app: '7.000 → 9.000', book: '5.600 → 4.900', conv: '80,0% → 54,4%', eff: '−10,45' },
            { ch: 'Trực tuyến', app: '8.000 → 8.000', book: '6.000 → 5.920', conv: '75,0% → 74,0%', eff: '−0,36' },
            { ch: 'Chi nhánh', app: '5.000 → 5.000', book: '4.000 → 3.700', conv: '80,0% → 74,0%', eff: '−1,36' },
            { ch: 'Tổng', app: '20.000 → 22.000', book: '15.600 → 14.520', conv: '78,0% → 66,0%', eff: '−12,18 (tỷ lệ) + 0,18 (cơ cấu)' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
          caption: 'Đại lý giải thích 86% hiệu ứng tỷ lệ (10,45/12,18) và cơ cấu kênh gần như không đổi chuyển đổi tổng (+0,18 điểm). Trực tuyến gần như ổn định, chi nhánh giảm vừa.',
        },
        {
          kind: 'quiz',
          id: 'approval-to-booking-conversion-segments-q2',
          question: 'Từ bảng kênh, câu nào đúng?',
          options: [
            {
              id: 'a',
              text: 'Mức giảm do cơ cấu: đại lý tăng tỷ trọng mà đại lý vốn chuyển đổi thấp.',
              explain: 'Đại lý ở T9 có chuyển đổi 80%, cao hơn trung bình; cơ cấu chỉ đóng góp +0,18 điểm, không phải nguyên nhân.',
            },
            {
              id: 'b',
              text: 'Mức giảm tập trung ở đại lý, chuyển đổi trong chính kênh này giảm từ 80,0% xuống 54,4%; các kênh khác ổn định hơn nhiều.',
              correct: true,
              explain: 'Đúng. Đây là hiệu ứng tỷ lệ trong một kênh, nên cần tìm cơ chế riêng của kênh đại lý.',
            },
            {
              id: 'c',
              text: 'Mọi kênh cùng xấu đi nên là vấn đề của sản phẩm.',
              explain: 'Trực tuyến chỉ giảm 1 điểm và chi nhánh 6 điểm; đại lý giảm 25,6 điểm, vấn đề không đồng đều.',
            },
          ],
        },
      ],
    },
    {
      id: 'amount',
      kind: 'analysis',
      title: 'Bước 2 — Loại số tiền duyệt và lý do khách rút',
      blocks: [
        {
          kind: 'table',
          title: 'Chuyển đổi theo loại số tiền duyệt (số hồ sơ duyệt · chuyển đổi)',
          columns: [
            { key: 'g', label: 'Nhóm' },
            { key: 'full9', label: 'Duyệt đủ số tiền T9', align: 'right' },
            { key: 'full10', label: 'Duyệt đủ số tiền T10', align: 'right' },
            { key: 'red9', label: 'Duyệt thấp hơn T9', align: 'right' },
            { key: 'red10', label: 'Duyệt thấp hơn T10', align: 'right' },
          ],
          rows: [
            { g: 'Đại lý', full9: '5.000 · 88,0%', full10: '2.800 · 85,0%', red9: '2.000 · 60,0%', red10: '6.200 · 40,6%' },
            { g: 'Trực tuyến + chi nhánh', full9: '9.000 · 84,0%', full10: '9.200 · 84,0%', red9: '4.000 · 61,0%', red10: '3.800 · 49,8%' },
            { g: 'Tổng', full9: '14.000 · 85,4%', full10: '12.000 · 84,2%', red9: '6.000 · 60,7%', red10: '10.000 · 44,1%' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
          caption: 'Ở đại lý, tỷ trọng duyệt thấp hơn tăng từ 28,6% lên 68,9% và chuyển đổi nhóm này giảm từ 60,0% xuống 40,6%. Duyệt đủ số tiền gần như không đổi (84–88%).',
        },
        {
          kind: 'table',
          title: 'Lý do không giải ngân (số hồ sơ)',
          columns: [
            { key: 'r', label: 'Lý do' },
            { key: 't9', label: 'T9', align: 'right' },
            { key: 't10', label: 'T10', align: 'right' },
            { key: 'd', label: 'Tăng thêm', align: 'right' },
            { key: 'p', label: '% mức tăng', align: 'right' },
          ],
          rows: [
            { r: 'Số tiền duyệt thấp hơn mong muốn', t9: '1.100', t10: '3.200', d: '+2.100', p: '68,2%' },
            { r: 'Lãi suất cao hơn dự kiến', t9: '1.100', t10: '1.600', d: '+500', p: '16,2%' },
            { r: 'Chờ lâu / đã vay nơi khác', t9: '1.200', t10: '1.500', d: '+300', p: '9,7%' },
            { r: 'Thiếu hồ sơ / thủ tục', t9: 800, t10: 900, d: '+100', p: '3,2%' },
            { r: 'Khác', t9: 200, t10: 280, d: '+80', p: '2,6%' },
            { r: 'Tổng', t9: '4.400', t10: '7.480', d: '+3.080', p: '100%' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
          caption: 'Hai phần ba mức tăng hồ sơ rơi là do khách thấy số tiền được duyệt thấp hơn mong muốn. Lý do này khớp với nhóm duyệt thấp hơn ở đại lý.',
        },
        {
          kind: 'table',
          title: 'Giả thuyết và cách kiểm tra',
          columns: [
            { key: 'h', label: 'Giả thuyết' },
            { key: 'predict', label: 'Nếu đúng, ta sẽ thấy' },
            { key: 'test', label: 'Dữ liệu / kiểm tra' },
          ],
          rows: [
            {
              h: 'H1. Duyệt thấp hơn đề nghị làm khách rút, đặc biệt ở đại lý',
              predict: 'Chuyển đổi nhóm duyệt thấp giảm mạnh khi chênh lệch số tiền lớn; lý do "số tiền" tăng',
              test: 'Chuyển đổi theo mức chênh số tiền duyệt/đề nghị (≥ 30% thấp hơn so với 10–30%)',
            },
            {
              h: 'H2. Đại lý chào khách số tiền cao hơn thực tế trước khi có kết quả duyệt',
              predict: 'Mức chênh giữa số tiền khách mong muốn và số tiền duyệt rộng hơn ở đại lý; lý do "số tiền" tập trung ở đại lý',
              test: 'Phân tích kỳ vọng ghi nhận lúc nộp hồ sơ theo đại lý; kiểm tra kịch bản tư vấn',
            },
            {
              h: 'H3. Vấn đề vận hành: chờ lâu, thiếu hồ sơ',
              predict: 'Lý do chờ lâu/thiếu hồ sơ tăng mạnh',
              test: 'Chỉ tăng +300 và +100: bị loại là nguyên nhân chính',
            },
          ],
          highlight: [{ row: 2, tone: 'positive' }],
          caption: 'H3 bị bác bỏ khá rõ; H1 có bằng chứng ở mức nhóm; H2 cần dữ liệu từ lúc nộp hồ sơ để phân biệt.',
        },
        {
          kind: 'quiz',
          id: 'approval-to-booking-conversion-segments-q3',
          question: 'Phòng kinh doanh đề nghị quay lại duyệt đủ số tiền cho đại lý để khôi phục chuyển đổi. Bạn tư vấn thế nào?',
          options: [
            {
              id: 'a',
              text: 'Đồng ý, vì chuyển đổi 80% tốt hơn 54,4%.',
              explain: 'Chuyển đổi cao hơn không chắc có lợi nhuận tốt hơn; số tiền thấp hơn có thể là biện pháp kiểm soát rủi ro chính đáng.',
            },
            {
              id: 'b',
              text: 'Chưa: ước tính lợi nhuận kỳ vọng của hai phương án (khoản duyệt đủ nhưng rủi ro cao vs khoản thấp hơn nhưng nhiều khách rút), thử nghiệm có đối chứng và cải thiện cách truyền thông số tiền ở đại lý.',
              correct: true,
              explain: 'Đúng. Quyết định cần cân nhắc rủi ro tín dụng với doanh số, dựa trên thử nghiệm; đồng thời giải quyết kỳ vọng của khách ngay từ lúc tư vấn.',
            },
            {
              id: 'c',
              text: 'Giữ nguyên chính sách và coi chuyển đổi thấp là bình thường.',
              explain: 'Mức giảm 25,6 điểm ở đại lý và 7.480 hồ sơ không giải ngân là tín hiệu cần xử lý, chứ không phải nhiễu.',
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
          md: '**Kết luận:** Chuyển đổi duyệt → giải ngân giảm 12 điểm **gần như hoàn toàn do kênh đại lý** (80,0% → 54,4%), nơi tỷ trọng hồ sơ duyệt số tiền thấp hơn tăng từ 28,6% lên 68,9%, và 68% mức tăng hồ sơ rơi là vì số tiền duyệt thấp hơn mong muốn. Chưa đủ dữ liệu để kết luận chính sách siết là sai; cần cân nhắc cả rủi ro và doanh số, và sửa kỳ vọng khách ở đại lý.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Thử nghiệm A/B ở đại lý: một nhóm đại lý tư vấn trước khoảng số tiền có thể được duyệt và kèm phương án thay thế (kỳ hạn dài hơn, số tiền thấp hơn), nhóm còn lại giữ nguyên',
              owner: 'Giám đốc kênh đại lý + Product',
              metric: 'Chuyển đổi duyệt → giải ngân của hồ sơ duyệt thấp hơn; tỷ lệ rút vì số tiền',
              threshold: 'Chuyển đổi nhóm duyệt thấp ≥ 50% (đang 40,6%) mà tỷ lệ quá hạn sớm (MOB3) không tăng',
            },
            {
              action: 'Phân tích chuyển đổi theo mức chênh số tiền duyệt/đề nghị và theo từng đại lý để xem ngưỡng chênh lệch nào khách bắt đầu rút',
              owner: 'Data/Analytics + Rủi ro',
              metric: 'Chuyển đổi theo dải chênh lệch; đại lý có chuyển đổi thấp nhất',
              threshold: 'Có ngưỡng chênh rõ ràng; đại lý có chuyển đổi < 45% được rà soát kịch bản tư vấn',
            },
            {
              action: 'Ước tính lợi nhuận kỳ vọng theo hai phương án duyệt (đủ số tiền / thấp hơn) có tính tổn thất tín dụng và chi phí thu hút',
              owner: 'Rủi ro + Tài chính',
              metric: 'Lợi nhuận kỳ vọng mỗi hồ sơ duyệt',
              threshold: 'Chỉ nới chính sách ở nhóm có lợi nhuận kỳ vọng dương và PD trong ngưỡng chấp nhận',
            },
            {
              action: 'Đưa chuyển đổi duyệt → giải ngân theo kênh × loại duyệt và lý do rút vào báo cáo hằng tuần',
              owner: 'Data/Analytics',
              metric: 'Chuyển đổi theo kênh × loại duyệt; lý do rút',
              threshold: 'Cảnh báo khi chuyển đổi một kênh giảm > 5 điểm trong 2 tuần',
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
              title: 'Coi chuyển đổi thấp là lỗi của kinh doanh hoặc của rủi ro',
              why: 'Chuyển đổi chịu ảnh hưởng đồng thời của chính sách duyệt, kênh tư vấn và kỳ vọng khách; đổ lỗi cho một bên bỏ qua tương tác.',
              instead: 'Cắt theo kênh × loại duyệt và đo bằng thử nghiệm có đối chứng.',
            },
            {
              title: 'Tối đa hóa chuyển đổi mà bỏ qua chất lượng khoản vay',
              why: 'Duyệt đủ số tiền cho khách rủi ro có thể tăng giải ngân nhưng tăng nợ xấu.',
              instead: 'Đánh giá lợi nhuận kỳ vọng sau tổn thất, không chỉ tỷ lệ chuyển đổi.',
            },
            {
              title: 'Tin lý do rút tự khai',
              why: 'Lý do do nhân viên chọn có thể thiên lệch (chọn lý do dễ nhất).',
              instead: 'Đối chiếu với dữ liệu hành vi (số tiền duyệt/đề nghị, thời gian chờ) và kiểm tra tính nhất quán.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Tách chuyển đổi bước cuối theo kênh và loại duyệt; phân rã cơ cấu so với tỷ lệ để biết mức giảm tập trung ở đâu.',
    'Lý do khách rút kết hợp với dữ liệu hành vi (số tiền duyệt/đề nghị) cho giả thuyết kiểm tra được.',
    'Quyết định nới hay siết cần lợi nhuận kỳ vọng sau tổn thất và thử nghiệm có đối chứng, không chỉ chuyển đổi.',
  ],
  references: [
    {
      title: '[GA4] Funnel exploration',
      publisher: 'Google Analytics Help',
      url: 'https://support.google.com/analytics/answer/9327974',
      note: 'Hướng dẫn chính thức xây funnel và chia theo phân khúc; mô hình tương tự cho funnel duyệt → giải ngân theo kênh.',
    },
    {
      title: 'Principles for the Management of Credit Risk',
      publisher: 'Basel Committee on Banking Supervision (BIS)',
      url: 'https://www.bis.org/publ/bcbs75.htm',
      note: 'Nguyên tắc quản lý rủi ro tín dụng của Ủy ban Basel, nền tảng cho việc cân nhắc điều kiện duyệt với rủi ro.',
    },
    {
      title: 'Loan origination',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Loan_origination',
      note: 'Tổng quan quy trình khởi tạo khoản vay từ nộp hồ sơ, thẩm định đến giải ngân.',
    },
  ],
}
