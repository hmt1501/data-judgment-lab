import type { CaseStudy } from '../types'

/*
 * Số liệu mock của "FastShip" (đơn có ít nhất một lần phát trong tháng):
 *   50.000 đơn · thành công lần 1: 41.000 (82,0%) · lần 2: 6.000 · lần 3 trở đi: 1.500 · hoàn/thất bại cuối: 1.500 (41+6+1,5+1,5 = 50 nghìn)
 *   Tỷ lệ giao thành công cuối cùng: 48.500 ÷ 50.000 = 97,0%
 *   Lý do thất bại lần 1 (9.000 đơn): khách vắng/không nghe máy 4.500 (50%) · sai/thiếu địa chỉ 2.250 (25%) · khách hẹn lại 1.350 (15%) · từ chối nhận 900 (10%)
 *   Theo hình thức thanh toán (đơn thành công lần 1): COD 20.000 đơn → 15.200 (76,0%) · trả trước 30.000 đơn → 25.800 (86,0%) → tổng 41.000
 *   Sai mẫu số: thêm 3.000 đơn "đang giao dở" tính như chưa thành công → 41.000 ÷ 53.000 = 77,4% (sai)
 */
export const firstAttemptDeliveryRateReading: CaseStudy = {
  id: 'first-attempt-delivery-rate-reading',
  title: 'Tỷ lệ giao thành công lần 1 là 82%: đọc thế nào cho đúng?',
  domain: 'logistics',
  level: 'fresher',
  minutes: 8,
  skills: ['metric-definition', 'operations', 'segmentation'],
  question: 'Tỷ lệ giao thành công ngay lần đầu là 82%. Mẫu số nên là gì, đơn thất bại vì lý do gì, và nhóm đơn nào kéo tỷ lệ xuống?',
  summary: 'Định nghĩa tỷ lệ giao thành công lần 1 cho đúng mẫu số, phân biệt với tỷ lệ giao thành công cuối cùng, rồi phân rã theo lý do và hình thức thanh toán.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst vận hành của **FastShip**, hãng giao hàng giả định. Quản lý chặng cuối đưa ra con số *"giao thành công lần 1: 82%"* và nói mức này là kém. Trưởng kinh doanh lại nói *"97% đơn cuối cùng vẫn giao được, ổn mà"*. Hai người đang nói về hai con số khác nhau.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'FastShip và mọi số liệu là **giả định**. Cách tính "lần phát", "đơn đang giao dở" ở mỗi hãng khác nhau, nên hãy luôn xác nhận định nghĩa nội bộ.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Đơn có lần phát đầu trong tháng', value: '50.000', tone: 'neutral' },
            { label: 'Giao thành công lần 1', value: '82,0%', delta: '41.000 đơn', tone: 'warning' },
            { label: 'Giao thành công cuối cùng', value: '97,0%', delta: '48.500 đơn', tone: 'positive' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: ba câu hỏi định nghĩa',
      blocks: [
        {
          kind: 'text',
          md: 'Tỷ lệ giao thành công lần 1 (**first-attempt delivery rate**, FADR) cần ba quyết định rõ ràng. **Tử số:** đơn giao thành công ngay ở lần phát đầu tiên. **Mẫu số:** đơn đã *có lần phát đầu tiên đã kết thúc* (thành công hoặc thất bại) trong kỳ, không gồm đơn còn đang giao dở. **Kỳ:** theo ngày phát lần đầu (cohort), để đơn thất bại hôm nay còn phát lại sau không bị lẫn sang kỳ khác.',
        },
        {
          kind: 'formula',
          expression: 'FADR = Đơn giao thành công ở lần phát 1 ÷ Đơn có lần phát 1 đã có kết quả trong kỳ',
          note: 'Tỷ lệ giao thành công cuối cùng (kể cả lần 2, 3) là metric khác: nó đo kết quả sau cùng, còn FADR đo chất lượng của lần giao đầu và chi phí phát sinh.',
        },
        {
          kind: 'quiz',
          id: 'first-attempt-delivery-rate-reading-q1',
          question: 'Cuối ngày chốt báo cáo có 3.000 đơn đang trên xe chưa có kết quả. Xử lý nào đúng nhất?',
          options: [
            {
              id: 'a',
              text: 'Loại 3.000 đơn khỏi mẫu số của kỳ này và đưa vào kỳ sau khi đã có kết quả.',
              correct: true,
              explain: 'Đúng. Đơn chưa có kết quả chưa thể là "thành công" hay "thất bại". Tính nó như thất bại sẽ kéo tỷ lệ xuống giả tạo (41.000 ÷ 53.000 = 77,4%).',
            },
            {
              id: 'b',
              text: 'Tính cả 3.000 đơn vào mẫu số như chưa thành công.',
              explain: 'Làm FADR giảm xuống 77,4% chỉ vì thời điểm chốt báo cáo.',
            },
            {
              id: 'c',
              text: 'Tính cả 3.000 đơn là thành công.',
              explain: 'Không có cơ sở; nó làm tỷ lệ cao giả tạo.',
            },
          ],
        },
      ],
    },
    {
      id: 'outcome',
      kind: 'analysis',
      title: 'Bước 1 — Từ lần 1 đến kết quả cuối cùng',
      blocks: [
        {
          kind: 'table',
          title: 'Số lần phát cần để giao xong 50.000 đơn',
          columns: [
            { key: 'stage', label: 'Kết quả' },
            { key: 'n', label: 'Số đơn', align: 'right' },
            { key: 'share', label: 'Tỷ trọng', align: 'right' },
          ],
          rows: [
            { stage: 'Thành công lần 1', n: '41.000', share: '82,0%' },
            { stage: 'Thành công lần 2', n: '6.000', share: '12,0%' },
            { stage: 'Thành công từ lần 3', n: '1.500', share: '3,0%' },
            { stage: 'Hoàn / thất bại cuối', n: '1.500', share: '3,0%' },
            { stage: 'Tổng', n: '50.000', share: '100%' },
          ],
          highlight: [
            { row: 0, tone: 'warning' },
            { row: 3, tone: 'negative' },
          ],
          caption: 'Thành công cuối cùng = 41.000 + 6.000 + 1.500 = 48.500 (97,0%). Nhưng 9.000 đơn cần phát lại, mỗi lần phát lại là chi phí và trải nghiệm xấu.',
        },
        {
          kind: 'chart',
          title: 'Phần trăm đơn được giao xong theo số lần phát',
          type: 'bar',
          xKey: 'attempt',
          unit: '%',
          series: [{ key: 'cum', label: 'Lũy kế đã giao xong' }],
          data: [
            { attempt: 'Sau lần 1', cum: 82 },
            { attempt: 'Sau lần 2', cum: 94 },
            { attempt: 'Sau lần 3+', cum: 97 },
          ],
          caption: '82% → 94% → 97%. Khoảng cách giữa lần 1 và kết quả cuối là chi phí phát lại.',
        },
        {
          kind: 'quiz',
          id: 'first-attempt-delivery-rate-reading-q2',
          question: 'Trưởng kinh doanh nói "97% cuối cùng giao được là ổn". Điều gì hợp lý nhất để đáp lại?',
          options: [
            {
              id: 'a',
              text: '97% đo kết quả cuối cùng; 82% đo chất lượng lần giao đầu. 9.000 đơn phải phát lại làm tăng chi phí và giảm trải nghiệm.',
              correct: true,
              explain: 'Đúng. Hai metric trả lời hai câu hỏi khác nhau; cả hai đều cần.',
            },
            {
              id: 'b',
              text: 'Con số 82% sai vì không khớp 97%.',
              explain: 'Hai số khác định nghĩa nên không cần khớp.',
            },
            {
              id: 'c',
              text: 'Chỉ cần theo dõi 97% vì khách chỉ quan tâm kết quả cuối.',
              explain: 'Khách còn quan tâm đến thời gian chờ, và hãng chịu chi phí phát lại.',
            },
          ],
        },
      ],
    },
    {
      id: 'reasons',
      kind: 'analysis',
      title: 'Bước 2 — Vì sao lần 1 thất bại?',
      blocks: [
        {
          kind: 'table',
          title: 'Lý do thất bại lần 1 (9.000 đơn)',
          columns: [
            { key: 'why', label: 'Lý do' },
            { key: 'n', label: 'Số đơn', align: 'right' },
            { key: 'share', label: 'Tỷ trọng', align: 'right' },
          ],
          rows: [
            { why: 'Khách vắng / không nghe máy', n: '4.500', share: '50%' },
            { why: 'Sai hoặc thiếu địa chỉ', n: '2.250', share: '25%' },
            { why: 'Khách hẹn lại', n: '1.350', share: '15%' },
            { why: 'Từ chối nhận', n: '900', share: '10%' },
          ],
          highlight: [
            { row: 0, tone: 'warning' },
            { row: 1, tone: 'warning' },
          ],
          caption: '4.500 + 2.250 + 1.350 + 900 = 9.000. Ba phần tư là lý do có thể giảm bằng thông tin tốt hơn trước khi giao.',
        },
        {
          kind: 'table',
          title: 'Thành công lần 1 theo hình thức thanh toán',
          columns: [
            { key: 'pay', label: 'Hình thức' },
            { key: 'n', label: 'Đơn', align: 'right' },
            { key: 'ok', label: 'Thành công lần 1', align: 'right' },
            { key: 'rate', label: 'Tỷ lệ', align: 'right' },
          ],
          rows: [
            { pay: 'COD (thu tiền khi giao)', n: '20.000', ok: '15.200', rate: '76,0%' },
            { pay: 'Trả trước', n: '30.000', ok: '25.800', rate: '86,0%' },
            { pay: 'Tổng', n: '50.000', ok: '41.000', rate: '82,0%' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
          caption: '15.200 + 25.800 = 41.000. Đơn COD thất bại nhiều hơn 10 điểm %.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Nhóm COD kéo FADR xuống không phải vì shipper làm kém mà vì hình thức này đòi hỏi khách có mặt và sẵn tiền. Khi so các hãng hay các tuyến, hãy kiểm soát cơ cấu COD/trả trước, kẻo đánh giá sai hiệu suất.',
        },
        {
          kind: 'quiz',
          id: 'first-attempt-delivery-rate-reading-q3',
          question: 'Biện pháp nào có thể cải thiện FADR rẻ nhất, theo dữ liệu?',
          options: [
            {
              id: 'a',
              text: 'Xác nhận địa chỉ và giờ nhận với khách trước khi giao (gọi, tin nhắn), nhất là đơn COD.',
              correct: true,
              explain: 'Đúng. 75% thất bại là vắng mặt/sai địa chỉ, những lý do có thể xử lý bằng xác nhận trước giao.',
            },
            {
              id: 'b',
              text: 'Tăng số shipper lên gấp đôi.',
              explain: 'Không chạm vào nguyên nhân chính (khách vắng, sai địa chỉ) và tốn kém.',
            },
            {
              id: 'c',
              text: 'Không thu phí giao hàng.',
              explain: 'Giá giao không liên quan tới nguyên nhân thất bại lần đầu.',
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
          md: '**Kết luận:** FADR 82% là con số đúng cho lần giao đầu (mẫu số là đơn có kết quả lần 1), khác với 97% là kết quả cuối cùng. 9.000 đơn phát lại chủ yếu do khách vắng và sai địa chỉ, tập trung ở đơn COD. Xác nhận trước khi giao là biện pháp rẻ nhất.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Chuẩn hóa định nghĩa FADR (mẫu số là đơn có kết quả lần 1, theo ngày phát lần đầu) trên mọi báo cáo',
              owner: 'Analyst vận hành',
              metric: 'FADR theo cohort ngày phát đầu',
              threshold: 'Một định nghĩa duy nhất; báo cáo cả FADR và tỷ lệ cuối cùng',
            },
            {
              action: 'Gọi/nhắn xác nhận địa chỉ và khung giờ cho 100% đơn COD trước ngày giao',
              owner: 'Trưởng chặng cuối',
              metric: 'FADR nhóm COD',
              threshold: 'Từ 76% lên ≥ 84% trong 6 tuần',
            },
            {
              action: 'Chuẩn hóa địa chỉ khi nhập đơn (bắt buộc số nhà, phường/xã, số điện thoại hợp lệ)',
              owner: 'Quản lý sản phẩm đặt đơn',
              metric: 'Tỷ lệ thất bại lần 1 do sai/thiếu địa chỉ',
              threshold: 'Giảm từ 4,5% xuống ≤ 2,5% tổng đơn',
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
              title: 'Đưa đơn đang giao dở vào mẫu số như thất bại',
              why: 'FADR bị kéo thấp giả tạo theo thời điểm chốt báo cáo.',
              instead: 'Chỉ tính đơn đã có kết quả lần 1, theo cohort ngày phát lần đầu.',
            },
            {
              title: 'Chỉ nhìn tỷ lệ giao thành công cuối',
              why: 'Che chi phí phát lại và trải nghiệm chờ lâu.',
              instead: 'Báo cáo cả FADR lẫn tỷ lệ cuối, kèm số lần phát trung bình.',
            },
            {
              title: 'So FADR giữa hãng hoặc tuyến không kiểm soát cơ cấu COD',
              why: 'Cơ cấu COD khác nhau tạo chênh lệch FADR không liên quan đến hiệu suất giao.',
              instead: 'So trong cùng hình thức thanh toán hoặc chuẩn hóa cơ cấu.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'FADR = đơn thành công ở lần phát 1 ÷ đơn có kết quả lần 1 trong kỳ; không tính đơn đang giao dở.',
    'FADR đo chất lượng lần giao đầu, khác với tỷ lệ thành công cuối cùng; cần đọc cả hai.',
    'Phân rã lý do và hình thức thanh toán để tìm biện pháp rẻ nhất, thường là xác nhận trước khi giao.',
  ],
  references: [
    {
      title: 'Last mile (transportation)',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Last_mile_(transportation)',
      note: 'Bối cảnh chặng cuối và các thách thức như khách vắng nhà, địa chỉ khó tìm làm tăng chi phí giao hàng.',
    },
    {
      title: 'Logistics',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Logistics',
      note: 'Tổng quan về logistics, giúp đặt các chỉ số vận hành như tỷ lệ giao thành công trong bức tranh chung.',
    },
  ],
}
