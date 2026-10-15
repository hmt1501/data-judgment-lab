import type { CaseStudy } from '../types'

/*
 * Số liệu mock của "Shop B" (đã kiểm tra khớp nhau):
 *   Tháng này: đặt 20.000 · đã giao 18.000 · đơn hoàn tiền 1.350 → 6,75% trên đơn đặt, 7,5% trên đơn đã giao
 *   Tháng trước: đặt 18.000 · đã giao 16.500 · hoàn 990 → 5,5% trên đơn đặt, 6,0% trên đơn đã giao
 *   Theo ngành hàng (đã giao / hoàn): tháng trước Thời trang 5.400/405, Điện tử 3.600/180, Gia dụng 4.500/225, Mỹ phẩm 3.000/180
 *     tháng này Thời trang 7.200/810, Điện tử 3.600/180, Gia dụng 4.500/225, Mỹ phẩm 2.700/135
 *   Đóng góp vào tỷ lệ chung (điểm %): Thời trang 2,45 → 4,50 (+2,05); ba ngành còn lại 3,55 → 3,00 (−0,55); tổng +1,50
 */
export const refundRateByCategoryReading: CaseStudy = {
  id: 'refund-rate-by-category-reading',
  title: 'Tỷ lệ hoàn tiền tăng: ngành hàng nào kéo lên?',
  domain: 'ecommerce',
  level: 'fresher',
  minutes: 8,
  skills: ['metric-definition', 'metric-decomposition', 'segmentation'],
  question: 'Tỷ lệ hoàn tiền tăng từ 6,0% lên 7,5%. Dùng mẫu số nào cho đúng, và ngành hàng nào chịu trách nhiệm cho mức tăng này?',
  summary: 'Chọn mẫu số phù hợp (đơn đã giao hay đơn đặt) rồi phân rã tỷ lệ hoàn tiền theo ngành hàng để biết tăng do đâu.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst vận hành của **Shop B**, bán nhiều ngành hàng trên một sàn thương mại điện tử. Báo cáo tháng ghi *"tỷ lệ hoàn tiền tăng lên 7,5%"*. Trưởng bộ phận chăm sóc khách hàng nghi ngờ lỗi chất lượng toàn shop, trưởng kho nghi ngờ đóng gói. Bạn cần trả lời trước khi ai đó ra quyết định thay đổi nhà cung cấp.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Shop B và mọi con số trong bài là **giả định**. Chính sách hoàn tiền của từng sàn khác nhau; hãy dùng định nghĩa của sàn/shop bạn đang phân tích.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Tỷ lệ hoàn tiền (trên đơn đã giao)', value: '7,5%', delta: '+1,5 điểm % so với 6,0%', tone: 'negative' },
            { label: 'Đơn đã giao', value: '18.000', delta: '+1.500 so với tháng trước', tone: 'neutral' },
            { label: 'Đơn hoàn tiền', value: '1.350', delta: '+360 so với 990', tone: 'negative' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: mẫu số quyết định ý nghĩa',
      blocks: [
        {
          kind: 'text',
          md: 'Chỉ đơn **đã giao** mới có thể bị hoàn tiền vì lý do hàng (sai mẫu, lỗi, không như mô tả). Đơn bị hủy trước khi giao không đi qua bước đó. Dùng "đơn đặt" làm mẫu số trộn cả đơn hủy vào, làm tỷ lệ phụ thuộc vào tỷ lệ hủy. Chọn một định nghĩa và giữ cố định giữa các kỳ.',
        },
        {
          kind: 'formula',
          expression: 'Tỷ lệ hoàn tiền = Số đơn hoàn tiền ÷ Số đơn đã giao trong cùng kỳ',
          note: 'Có hai cách tính kỳ: theo tháng giao (cohort) hoặc theo tháng hoàn tiền. Cohort theo tháng giao công bằng hơn vì hoàn tiền thường xảy ra sau khi giao vài ngày. Bài này dùng cohort tháng giao để đơn giản.',
        },
        {
          kind: 'quiz',
          id: 'refund-rate-by-category-reading-q1',
          question: 'Shop B có 20.000 đơn đặt, 18.000 đơn đã giao, 1.350 đơn hoàn tiền. Tỷ lệ hoàn tiền phản ánh chất lượng hàng nên chọn con số nào?',
          options: [
            {
              id: 'a',
              text: '7,5% = 1.350 ÷ 18.000, vì chỉ đơn đã giao mới có thể hoàn tiền vì hàng.',
              correct: true,
              explain: 'Đúng. Mẫu số phải là tập đơn đủ điều kiện xảy ra sự kiện. 2.000 đơn không giao được không thể bị hoàn vì chất lượng hàng.',
            },
            {
              id: 'b',
              text: '6,75% = 1.350 ÷ 20.000, vì đơn đặt là mẫu số dễ lấy nhất.',
              explain: 'Dễ lấy không có nghĩa đúng. Khi tỷ lệ hủy đơn đổi, con số này đổi theo dù chất lượng hàng không đổi.',
            },
            {
              id: 'c',
              text: 'Cả hai đều sai, phải chia cho số khách hàng.',
              explain: 'Chia cho khách đo tần suất hoàn theo người, một metric khác. Với câu hỏi chất lượng đơn hàng, mẫu số là đơn đã giao.',
            },
          ],
        },
      ],
    },
    {
      id: 'by-category',
      kind: 'analysis',
      title: 'Bước 1 — Phân rã theo ngành hàng',
      blocks: [
        {
          kind: 'table',
          title: 'Tỷ lệ hoàn tiền theo ngành hàng (trên đơn đã giao)',
          columns: [
            { key: 'cat', label: 'Ngành hàng' },
            { key: 'prevN', label: 'Giao tháng trước', align: 'right' },
            { key: 'prevR', label: 'Tỷ lệ trước', align: 'right' },
            { key: 'nowN', label: 'Giao tháng này', align: 'right' },
            { key: 'nowR', label: 'Tỷ lệ nay', align: 'right' },
          ],
          rows: [
            { cat: 'Thời trang', prevN: '5.400', prevR: '7,5%', nowN: '7.200', nowR: '11,25%' },
            { cat: 'Điện tử', prevN: '3.600', prevR: '5,0%', nowN: '3.600', nowR: '5,0%' },
            { cat: 'Gia dụng', prevN: '4.500', prevR: '5,0%', nowN: '4.500', nowR: '5,0%' },
            { cat: 'Mỹ phẩm', prevN: '3.000', prevR: '6,0%', nowN: '2.700', nowR: '5,0%' },
            { cat: 'Tổng', prevN: '16.500', prevR: '6,0%', nowN: '18.000', nowR: '7,5%' },
          ],
          highlight: [
            { row: 0, tone: 'negative' },
            { row: 4, tone: 'warning' },
          ],
          caption: 'Hoàn tiền tháng này: 810 + 180 + 225 + 135 = 1.350; tháng trước: 405 + 180 + 225 + 180 = 990. Chỉ thời trang tăng rõ rệt.',
        },
        {
          kind: 'chart',
          title: 'Tỷ lệ hoàn tiền theo ngành hàng',
          type: 'bar',
          xKey: 'cat',
          unit: '%',
          series: [
            { key: 'prev', label: 'Tháng trước' },
            { key: 'now', label: 'Tháng này' },
          ],
          data: [
            { cat: 'Thời trang', prev: 7.5, now: 11.25 },
            { cat: 'Điện tử', prev: 5, now: 5 },
            { cat: 'Gia dụng', prev: 5, now: 5 },
            { cat: 'Mỹ phẩm', prev: 6, now: 5 },
          ],
          caption: 'Ba ngành còn lại đứng yên hoặc giảm; toàn bộ áp lực nằm ở thời trang.',
        },
        {
          kind: 'quiz',
          id: 'refund-rate-by-category-reading-q2',
          question: 'Tỷ lệ chung tăng 1,5 điểm %. Cách đọc nào đúng nhất theo bảng?',
          options: [
            {
              id: 'a',
              text: 'Thời trang tăng cả tỷ lệ riêng (7,5% → 11,25%) lẫn tỷ trọng (32,7% → 40%), nên kéo tỷ lệ chung lên; ba ngành còn lại không xấu đi.',
              correct: true,
              explain: 'Đúng. Đóng góp của thời trang vào tỷ lệ chung tăng 2,05 điểm % (2,45 → 4,50); ba ngành còn lại giảm 0,55 điểm % (3,55 → 3,00).',
            },
            {
              id: 'b',
              text: 'Toàn shop có vấn đề chất lượng vì tỷ lệ chung tăng.',
              explain: 'Tỷ lệ chung che mất sự khác biệt giữa các ngành. Điện tử và gia dụng giữ nguyên 5,0%.',
            },
            {
              id: 'c',
              text: 'Chỉ cần đổi tên ngành hàng vì số liệu lệch.',
              explain: 'Không có lý do nghi lỗi nhãn ngành hàng; số liệu khớp tổng.',
            },
          ],
        },
      ],
    },
    {
      id: 'reason',
      kind: 'analysis',
      title: 'Bước 2 — Đào sâu một ngành: lý do hoàn tiền',
      blocks: [
        {
          kind: 'text',
          md: 'Sau khi khoanh vùng thời trang, bước tiếp theo là xem **lý do hoàn** (sai size, khác mô tả, lỗi hàng, giao trễ) trước khi kết luận. Giả sử bảng lý do cho thấy:',
        },
        {
          kind: 'table',
          title: 'Lý do hoàn tiền ngành thời trang (810 đơn)',
          columns: [
            { key: 'reason', label: 'Lý do' },
            { key: 'count', label: 'Số đơn', align: 'right' },
            { key: 'share', label: 'Tỷ trọng', align: 'right' },
          ],
          rows: [
            { reason: 'Sai size / không vừa', count: 405, share: '50%' },
            { reason: 'Khác mô tả / màu', count: 202, share: '25%' },
            { reason: 'Lỗi hàng, hư hỏng', count: 121, share: '15%' },
            { reason: 'Khác', count: 82, share: '10%' },
          ],
          highlight: [{ row: 0, tone: 'warning' }],
          caption: '405 + 202 + 121 + 82 = 810 (tỷ trọng làm tròn). Một nửa là sai size, tín hiệu cho bảng size hoặc mô tả chưa rõ.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Tăng tỷ trọng thời trang (nhiều đơn mới từ chiến dịch thời trang) có thể kéo cả hoàn tiền lên vì khách mới thử size sai nhiều hơn. Khi thấy tăng, hãy tách **hiệu ứng tỷ trọng** khỏi **tỷ lệ trong ngành** trước khi đổ lỗi cho nhà cung cấp.',
        },
        {
          kind: 'quiz',
          id: 'refund-rate-by-category-reading-q3',
          question: 'Trưởng kho đề xuất đổi nhà cung cấp toàn shop để giảm hoàn tiền. Bạn trả lời thế nào?',
          options: [
            {
              id: 'a',
              text: 'Chưa nên: vấn đề tập trung ở thời trang và nửa số đơn là sai size; hãy sửa bảng size và mô tả trước.',
              correct: true,
              explain: 'Đúng. Dữ liệu chỉ ra nguyên nhân cục bộ, rẻ hơn và nhanh hơn để sửa. Đổi nhà cung cấp toàn shop đụng cả ba ngành đang ổn.',
            },
            {
              id: 'b',
              text: 'Nên đổi vì tỷ lệ chung tăng.',
              explain: 'Quyết định dựa trên tỷ lệ chung bỏ qua phân rã đã cho thấy chỉ một ngành bất thường.',
            },
            {
              id: 'c',
              text: 'Không làm gì vì hoàn tiền là bình thường.',
              explain: 'Một ngành tăng 3,75 điểm % với nguyên nhân rõ ràng đáng để xử lý.',
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
          md: '**Kết luận:** Tăng 1,5 điểm % đến từ thời trang (tỷ lệ riêng 7,5% → 11,25%, tỷ trọng tăng), với lý do chính là sai size. Ba ngành còn lại ổn. Hãy chữa ngay tại thời trang thay vì đổi nhà cung cấp toàn shop.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Cập nhật bảng size, ảnh người mẫu và mô tả chi tiết cho các mã thời trang có hoàn tiền cao nhất',
              owner: 'Quản lý ngành thời trang',
              metric: 'Tỷ lệ hoàn thời trang vì lý do sai size',
              threshold: 'Giảm từ 5,6% xuống ≤ 3% đơn đã giao trong 6 tuần',
            },
            {
              action: 'Chuẩn hóa định nghĩa trên dashboard: mẫu số = đơn đã giao theo cohort tháng giao',
              owner: 'Analyst vận hành',
              metric: 'Tỷ lệ hoàn tiền theo ngành',
              threshold: 'Một định nghĩa duy nhất, có ghi chú mẫu số',
            },
            {
              action: 'Thêm cảnh báo khi tỷ lệ hoàn một ngành vượt 1,5 lần trung bình 4 tuần của chính nó',
              owner: 'Trưởng chăm sóc khách hàng',
              metric: 'Số ngày phát hiện sau khi vượt ngưỡng',
              threshold: '≤ 3 ngày',
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
              title: 'Chia cho đơn đặt thay vì đơn đã giao',
              why: 'Tỷ lệ hủy đổi sẽ làm tỷ lệ hoàn đổi dù chất lượng không đổi, dẫn đến kết luận sai.',
              instead: 'Chọn mẫu số là tập đơn đủ điều kiện xảy ra hoàn tiền và ghi rõ trên báo cáo.',
            },
            {
              title: 'Chỉ nhìn tỷ lệ chung',
              why: 'Tỷ lệ chung gộp nhiều ngành có mức nền khác nhau; chỉ một ngành xấu đi cũng kéo cả shop.',
              instead: 'Phân rã theo ngành hàng (và sau đó theo lý do, nhà cung cấp) trước khi quyết định.',
            },
            {
              title: 'So tháng này với tháng trước khi chưa đủ thời gian hoàn',
              why: 'Hoàn tiền thường đến sau vài ngày hoặc vài tuần kể từ lúc giao, nên cohort mới trông "đẹp" hơn thực tế.',
              instead: 'Đọc theo cohort tháng giao và chờ đủ cửa sổ hoàn tiền trước khi so sánh.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Mẫu số đúng của tỷ lệ hoàn tiền là đơn đã giao; hãy ghi rõ định nghĩa và giữ nhất quán.',
    'Phân rã theo ngành hàng cho thấy tăng đến từ đâu: do tỷ lệ riêng của ngành hay do tỷ trọng ngành tăng.',
    'Khoanh vùng trước, đào lý do sau; chữa nguyên nhân cục bộ rẻ hơn đổi cả chuỗi cung ứng.',
  ],
  references: [
    {
      title: 'Product return',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Product_return',
      note: 'Tổng quan về trả hàng/hoàn tiền trong bán lẻ và các lý do thường gặp.',
    },
    {
      title: "Simpson's paradox",
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Simpson%27s_paradox',
      note: 'Vì sao tỷ lệ chung có thể đổi chiều so với tỷ lệ từng nhóm khi tỷ trọng các nhóm thay đổi.',
    },
  ],
}
