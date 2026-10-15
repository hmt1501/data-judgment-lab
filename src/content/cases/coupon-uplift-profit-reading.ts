import type { CaseStudy } from '../types'

/*
 * Số liệu mock của "Shop A" (đã kiểm tra khớp nhau), một tháng khuyến mãi mã giảm 40.000 đ:
 *   Đơn vốn đã có 10.000 (đơn giá 400.000 đ; lãi gộp 140.000 đ − chi phí xử lý/vận chuyển 30.000 = đóng góp 110.000 đ/đơn → 1.100 triệu)
 *   Trong khuyến mãi: 11.500 đơn (+15%), 6.900 đơn dùng mã (60%), 4.600 đơn không dùng mã
 *   Đóng góp: 4.600 × 110.000 + 6.900 × 70.000 = 506 + 483 = 989 triệu (−111 triệu so với 1.100)
 *   Đơn tăng thêm 1.500 × 70.000 = +105 triệu · đơn vốn đã mua dùng mã 5.400 × 40.000 = −216 triệu → −111
 *   Hòa vốn: i × 70.000 = (6.900 − i) × 40.000 → i ≈ 2.510 đơn tăng thêm (+25,1%)
 *   i = 1.500 → −111 triệu · i = 2.510 → 0 · i = 3.500 → 3.500 × 70 − 3.400 × 40 = +109 triệu
 */
export const couponUpliftProfitReading: CaseStudy = {
  id: 'coupon-uplift-profit-reading',
  title: 'Mã giảm giá kéo đơn tăng 15%: lãi hay lỗ?',
  domain: 'ecommerce',
  level: 'fresher',
  minutes: 9,
  skills: ['unit-economics', 'metric-decomposition', 'monetization'],
  question: 'Chiến dịch mã giảm 40.000 đ làm số đơn tăng 15%. Tổng lợi nhuận đóng góp có tăng không, và ai đã thực sự mua thêm nhờ mã?',
  summary: 'Đọc đơn tăng thêm đúng cách: tách đơn thật sự mới khỏi đơn vốn đã có, tính đóng góp trên từng đơn sau giảm giá và tìm điểm hòa vốn của mã.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst của **Shop A**, một shop thời trang trên sàn thương mại điện tử. Tháng trước nhóm marketing chạy mã giảm 40.000 đ cho đơn từ 300.000 đ. Dashboard hiển thị số đơn tăng từ 10.000 lên 11.500 (+15%) và chị trưởng nhóm đã định báo cáo "chiến dịch thành công". Giám đốc hỏi bạn một câu: *"Đơn tăng 15% thì có lời hơn tháng thường không?"*',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Shop A và mọi con số trong bài là **giả định** để luyện cách đọc. Cách tính đóng góp trên từng đơn là khái niệm có thật trong unit economics.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Số đơn trong tháng khuyến mãi', value: '11.500', delta: '+15% so với 10.000 đơn vốn đã có', tone: 'positive' },
            { label: 'Đơn dùng mã', value: '6.900', delta: '60% tổng đơn', tone: 'neutral' },
            { label: 'Đóng góp mỗi đơn (không mã)', value: '110.000 đ', delta: 'lãi gộp 140.000 − chi phí xử lý 30.000', tone: 'neutral' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: chỉ đơn tăng thêm mới "được" lợi từ mã',
      blocks: [
        {
          kind: 'text',
          md: 'Mã giảm giá làm hai việc cùng lúc. Nó khiến một số khách **mua thêm** (đơn tăng thêm, incremental). Nhưng nó cũng giảm giá cho những khách **vốn đã định mua** (đơn bị trợ giá, cannibalization). Muốn biết lãi hay lỗ phải tính cả hai phía trên cùng đơn vị là **đóng góp trên từng đơn** (contribution margin).',
        },
        {
          kind: 'formula',
          expression: 'Thay đổi đóng góp = Đơn tăng thêm × (Đóng góp/đơn − Giảm giá) − Đơn vốn đã mua dùng mã × Giảm giá',
          note: 'Đóng góp/đơn = lãi gộp trừ chi phí biến đổi gắn với đơn (xử lý, vận chuyển shop chịu, phí thanh toán). Đơn tăng thêm chỉ mang về phần đóng góp **sau** giảm giá; đơn vốn đã có chỉ mất thêm giảm giá.',
        },
        {
          kind: 'quiz',
          id: 'coupon-uplift-profit-reading-q1',
          question: 'Số đơn tăng 15%. Vì sao con số này chưa đủ để kết luận chiến dịch có lời?',
          options: [
            {
              id: 'a',
              text: 'Vì phải xem phần đơn tăng thêm mang về bao nhiêu đóng góp so với khoản giảm giá tặng cho cả những đơn vốn đã có.',
              correct: true,
              explain: 'Đúng. Số đơn là doanh số, chưa phải lợi nhuận. Mã giảm giá cho cả khách định mua sẵn, nên chi phí mã lớn hơn nhiều so với số đơn tăng thêm.',
            },
            {
              id: 'b',
              text: 'Vì 15% là con số nhỏ, chỉ khi tăng trên 50% mới có lời.',
              explain: 'Không có ngưỡng cố định. Điểm hòa vốn phụ thuộc vào biên đóng góp, mức giảm và tỷ lệ đơn dùng mã.',
            },
            {
              id: 'c',
              text: 'Vì số đơn luôn bị đếm sai khi chạy khuyến mãi.',
              explain: 'Không cần giả định đếm sai. Ngay cả khi đếm đúng, đơn tăng chưa nói lên lãi hay lỗ.',
            },
          ],
        },
      ],
    },
    {
      id: 'bridge',
      kind: 'analysis',
      title: 'Bước 1 — Tính đóng góp của tháng khuyến mãi',
      blocks: [
        {
          kind: 'table',
          title: 'Đóng góp trước và trong khuyến mãi',
          columns: [
            { key: 'group', label: 'Nhóm đơn' },
            { key: 'orders', label: 'Số đơn', align: 'right' },
            { key: 'per', label: 'Đóng góp/đơn (đ)', align: 'right' },
            { key: 'total', label: 'Tổng (triệu đ)', align: 'right' },
          ],
          rows: [
            { group: 'Tháng thường (không mã)', orders: '10.000', per: '110.000', total: '1.100' },
            { group: 'KM: đơn không dùng mã', orders: '4.600', per: '110.000', total: '506' },
            { group: 'KM: đơn dùng mã (đã trừ 40.000)', orders: '6.900', per: '70.000', total: '483' },
            { group: 'KM: tổng', orders: '11.500', per: '—', total: '989' },
            { group: 'Chênh lệch so với tháng thường', orders: '+1.500', per: '—', total: '−111' },
          ],
          highlight: [
            { row: 3, tone: 'warning' },
            { row: 4, tone: 'negative' },
          ],
          caption: '4.600 × 110.000 = 506 triệu; 6.900 × 70.000 = 483 triệu; 506 + 483 = 989 triệu. Đơn tăng 15% nhưng đóng góp giảm 111 triệu đ.',
        },
        {
          kind: 'chart',
          title: 'Số đơn tăng nhưng tổng đóng góp giảm',
          type: 'bar',
          xKey: 'period',
          unit: ' triệu đ',
          series: [{ key: 'contribution', label: 'Tổng đóng góp' }],
          data: [
            { period: 'Tháng thường (10.000 đơn)', contribution: 1100 },
            { period: 'Khuyến mãi (11.500 đơn)', contribution: 989 },
          ],
          caption: 'Đơn nhiều hơn 1.500 nhưng mỗi đơn dùng mã chỉ còn 70.000 đ đóng góp.',
        },
        {
          kind: 'quiz',
          id: 'coupon-uplift-profit-reading-q2',
          question: 'Trong 6.900 đơn dùng mã, chỉ 1.500 đơn là mới thật sự. Vậy 5.400 đơn còn lại là gì và tốn bao nhiêu?',
          options: [
            {
              id: 'a',
              text: 'Đơn vốn đã mua nhưng được giảm giá; tốn 5.400 × 40.000 = 216 triệu đ.',
              correct: true,
              explain: 'Đúng. Đây là khoản trợ giá cho khách vốn đã mua. Đơn tăng thêm chỉ đem lại 1.500 × 70.000 = 105 triệu đ, nên chênh lệch là 105 − 216 = −111 triệu đ.',
            },
            {
              id: 'b',
              text: 'Đơn tăng thêm; tốn 0 đ vì khách tự nguyện mua.',
              explain: 'Đơn tăng thêm đã là 1.500 theo số liệu. 5.400 đơn còn lại vốn đã có, và mỗi đơn vẫn bị trừ 40.000 đ.',
            },
            {
              id: 'c',
              text: 'Đơn bị hoàn trả; tốn bằng tiền hoàn.',
              explain: 'Bài này không đề cập hoàn trả. Đây là các đơn đã mua thành công với giá đã giảm.',
            },
          ],
        },
      ],
    },
    {
      id: 'breakeven',
      kind: 'analysis',
      title: 'Bước 2 — Cần tăng bao nhiêu đơn mới hòa vốn?',
      blocks: [
        {
          kind: 'text',
          md: 'Giữ nguyên 6.900 đơn dùng mã, đặt **i** là số đơn tăng thêm. Đơn tăng thêm mang 70.000 đ, đơn vốn đã có mất 40.000 đ. Hòa vốn khi i × 70.000 = (6.900 − i) × 40.000, suy ra i ≈ 2.510 đơn, tức khoảng **+25,1%** so với 10.000 đơn vốn đã có.',
        },
        {
          kind: 'table',
          title: 'Kịch bản số đơn tăng thêm (giữ 6.900 đơn dùng mã)',
          columns: [
            { key: 'i', label: 'Đơn tăng thêm' },
            { key: 'uplift', label: 'Tăng so với vốn có', align: 'right' },
            { key: 'delta', label: 'Chênh lệch đóng góp (triệu đ)', align: 'right' },
          ],
          rows: [
            { i: '1.500 (thực tế)', uplift: '+15,0%', delta: '−111' },
            { i: '2.510 (hòa vốn)', uplift: '+25,1%', delta: '≈ 0' },
            { i: '3.500', uplift: '+35,0%', delta: '+109' },
          ],
          highlight: [
            { row: 0, tone: 'negative' },
            { row: 1, tone: 'warning' },
            { row: 2, tone: 'positive' },
          ],
          caption: 'i = 3.500: 3.500 × 70.000 − 3.400 × 40.000 = 245 − 136 = +109 triệu đ.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Điểm hòa vốn thấp hơn khi mã **nhắm đúng** nhóm chưa định mua (khách mới, giỏ hàng bỏ dở, sản phẩm tồn kho cao) và cao hơn khi mã phát công khai cho mọi người. Khoản "đơn tăng thêm" trong dashboard thường được ước lượng so với một nhóm đối chứng, không phải so với tháng trước, vì tháng trước có thể có mùa vụ khác.',
        },
        {
          kind: 'quiz',
          id: 'coupon-uplift-profit-reading-q3',
          question: 'Muốn cải thiện chiến dịch lần sau mà không giảm biên, đề xuất nào hợp lý nhất?',
          options: [
            {
              id: 'a',
              text: 'Phát mã nhắm nhóm ít có khả năng mua (khách mới, giỏ bỏ dở), giữ nhóm đối chứng không nhận mã để đo đơn tăng thêm.',
              correct: true,
              explain: 'Đúng. Nhắm đúng nhóm làm giảm số đơn vốn đã có bị trợ giá, còn nhóm đối chứng cho con số tăng thêm đáng tin để tính lãi lỗ.',
            },
            {
              id: 'b',
              text: 'Tăng giá trị mã lên 80.000 đ để đơn tăng nhiều hơn.',
              explain: 'Mã lớn hơn làm mỗi đơn đóng góp ít hơn (30.000 đ) và hòa vốn khó hơn nếu đơn tăng thêm không tăng tương ứng.',
            },
            {
              id: 'c',
              text: 'Bỏ hết khuyến mãi vì đã lỗ một lần.',
              explain: 'Một lần lỗ do thiết kế chưa tốt không có nghĩa mọi mã đều lỗ. Cần thiết kế lại để đo và tối ưu.',
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
          md: '**Kết luận cho giám đốc:** Chiến dịch làm đơn tăng 15% nhưng tổng đóng góp giảm 111 triệu đ vì phần lớn mã (5.400 trên 6.900 đơn) rơi vào khách vốn đã mua. Cần tăng khoảng 25% đơn mới hòa vốn nếu giữ cách phát mã công khai như thế.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Thêm vào báo cáo khuyến mãi bảng đóng góp: đơn tăng thêm, đơn vốn có, giảm giá trên mỗi nhóm',
              owner: 'Analyst thương mại điện tử',
              metric: 'Chênh lệch tổng đóng góp so với kỳ đối chứng',
              threshold: '≥ 0 trước khi nhân rộng chiến dịch',
            },
            {
              action: 'Phát mã theo nhóm mục tiêu và giữ 10% khách làm nhóm đối chứng không nhận mã',
              owner: 'Trưởng marketing',
              metric: 'Đơn tăng thêm so với nhóm đối chứng',
              threshold: '≥ 25% với mã công khai; chấp nhận thấp hơn nếu mã chỉ nhắm nhóm ít mua',
            },
            {
              action: 'Đặt trần ngân sách mã theo ngày và dừng mã khi đóng góp lũy kế âm hai ngày liên tiếp',
              owner: 'Quản lý vận hành khuyến mãi',
              metric: 'Đóng góp lũy kế của chiến dịch',
              threshold: 'Không âm quá 2 ngày liên tiếp',
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
              title: 'Đo thành công bằng số đơn',
              why: 'Số đơn tăng nhưng mỗi đơn dùng mã mang về ít lãi hơn; tổng lãi có thể giảm.',
              instead: 'Báo cáo đóng góp (sau giảm giá) và chênh lệch so với kỳ đối chứng.',
            },
            {
              title: 'Coi mọi đơn dùng mã là đơn mới',
              why: 'Phần lớn khách dùng mã vốn đã định mua. Chỉ đơn tăng thêm mới đáng tính là hiệu quả của mã.',
              instead: 'Ước lượng đơn tăng thêm bằng nhóm đối chứng hoặc so sánh cùng kỳ có hiệu chỉnh mùa vụ.',
            },
            {
              title: 'Quên chi phí biến đổi của đơn',
              why: 'Nếu chỉ lấy lãi gộp rồi trừ giảm giá, bạn bỏ sót chi phí xử lý, vận chuyển, phí thanh toán nên lợi nhuận bị thổi phồng.',
              instead: 'Dùng đóng góp trên từng đơn: lãi gộp trừ mọi chi phí biến đổi gắn với đơn.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Đơn tăng chưa phải lợi nhuận tăng: phải tính đóng góp sau giảm giá cho từng nhóm đơn.',
    'Mã giảm giá tốn nhất ở những khách vốn đã định mua; chỉ đơn tăng thêm mới sinh lời cho chiến dịch.',
    'Tính điểm hòa vốn trước, nhắm nhóm mục tiêu và giữ nhóm đối chứng để biết mã có lời thật hay không.',
  ],
  references: [
    {
      title: 'Contribution margin',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Contribution_margin',
      note: 'Định nghĩa biên đóng góp: doanh thu trừ chi phí biến đổi, nền tảng để tính lãi lỗ trên từng đơn.',
    },
    {
      title: 'Coupon',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Coupon',
      note: 'Tổng quan về phiếu giảm giá, mục đích và rủi ro khi dùng trong bán lẻ.',
    },
  ],
}
