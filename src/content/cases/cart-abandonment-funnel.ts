import type { CaseStudy } from '../types'

/*
 * Số liệu mock (tháng trước → tháng này; "giỏ" = phiên có ≥ 1 sự kiện thêm vào giỏ), đã kiểm tra khớp nhau:
 *   Tổng: giỏ 40.000 → 42.000 · bắt đầu thanh toán 18.000 → 17.850 · gửi thanh toán 13.392 → 12.096 · đơn xác nhận 12.052 → 10.887
 *   Tỷ lệ bước: 45,0% → 42,5% · 74,4% → 67,8% · 90,0% → 90,0%
 *   Tỷ lệ bỏ giỏ = 1 − đơn / giỏ: 1 − 12.052/40.000 = 69,9% · 1 − 10.887/42.000 = 74,1% (+4,2 điểm %)
 *   Mobile: giỏ 24.000 → 28.000 · bắt đầu 10.080 (42,0%) → 10.920 (39,0%) · gửi 7.056 (70,0%) → 6.552 (60,0%) · xác nhận 6.350 → 5.897 (90,0%)
 *     bỏ giỏ 1 − 6.350/24.000 = 73,5% → 1 − 5.897/28.000 = 78,9%
 *   Desktop: giỏ 16.000 → 14.000 · bắt đầu 7.920 (49,5%) → 6.930 (49,5%) · gửi 6.336 (80,0%) → 5.544 (80,0%) · xác nhận 5.702 → 4.990 (90,0%)
 *     bỏ giỏ 64,4% → 64,4%
 *     cộng thiết bị: 24.000 + 16.000 = 40.000 · 28.000 + 14.000 = 42.000; 6.350 + 5.702 = 12.052 · 5.897 + 4.990 = 10.887
 *   Phân rã +4,2 điểm %: tỷ trọng mobile 60% → 66,7% (mix: 2/3 × 73,5 + 1/3 × 64,4 − 69,9 ≈ +0,6) · tỷ lệ trong từng thiết bị ≈ +3,6
 *   Mobile theo trạng thái đăng nhập (bắt đầu → gửi thanh toán):
 *     Trước: đã đăng nhập 5.040 × 80% = 4.032 · khách vãng lai 5.040 × 60% = 3.024 → 7.056
 *     Sau:   đã đăng nhập 5.460 × 80% = 4.368 · khách vãng lai 5.460 × 40% = 2.184 → 6.552
 *   Ước tính thiệt hại: nếu vãng lai về lại 60% → +1.092 lượt gửi × 90% ≈ 983 đơn/tháng × AOV 380.000 đ ≈ 374 triệu đ/tháng
 */
export const cartAbandonmentFunnel: CaseStudy = {
  id: 'cart-abandonment-funnel',
  title: 'Tỷ lệ bỏ giỏ tăng từ 70% lên 74%: bỏ ở bước nào, ai bỏ?',
  domain: 'ecommerce',
  level: 'fresher',
  minutes: 9,
  skills: ['funnel', 'segmentation', 'metric-definition'],
  question:
    'Tỷ lệ bỏ giỏ hàng tháng này tăng từ 69,9% lên 74,1%. Đây là bỏ ở bước nào, nhóm khách nào, và nên xử lý gì trước?',
  summary:
    'Chốt định nghĩa "bỏ giỏ", đọc funnel giỏ → thanh toán → xác nhận để tìm bước rơi, rồi cắt theo thiết bị và trạng thái đăng nhập để tìm nhóm gây ra mức tăng.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng.* Bạn là analyst của một sàn thương mại điện tử tầm trung. Trưởng nhóm Trải nghiệm khách hàng nhắn: *"Dashboard báo tỷ lệ bỏ giỏ tháng này lên 74%, cao nhất từ đầu năm. Chiến dịch tháng này kéo thêm khá nhiều khách mà đơn lại giảm. Em xem giúp bỏ ở đâu."*',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Tỷ lệ bỏ giỏ', value: '74,1%', delta: '+4,2 điểm %', tone: 'negative', note: 'Tháng trước: 69,9%' },
            { label: 'Phiên có thêm vào giỏ', value: '42.000', delta: '+5,0%', tone: 'positive', note: 'Tháng trước: 40.000' },
            { label: 'Đơn hàng xác nhận', value: '10.887', delta: '−9,7%', tone: 'negative', note: 'Tháng trước: 12.052' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Điều đáng chú ý ngay từ đầu',
          md: 'Số giỏ **tăng 5%** nhưng số đơn **giảm gần 10%**. Chiến dịch không thiếu người quan tâm; vấn đề nằm ở đoạn từ giỏ đến đơn. Câu hỏi cần trả lời: mất ở **bước nào** và ở **nhóm khách nào**.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: chốt định nghĩa, rồi đi dọc funnel',
      blocks: [
        {
          kind: 'formula',
          expression: 'Tỷ lệ bỏ giỏ = 1 − (Số đơn xác nhận ÷ Số phiên có thêm vào giỏ)',
          note: 'Mẫu số là phiên có ít nhất một sự kiện thêm vào giỏ; tử số là phiên (hoặc người dùng) kết thúc bằng đơn đã **xác nhận**, không tính đơn hủy.',
        },
        {
          kind: 'table',
          title: 'Ba cách định nghĩa "bỏ" thường gặp',
          columns: [
            { key: 'type', label: 'Kiểu' },
            { key: 'rule', label: 'Một giỏ được tính là "bỏ" khi' },
            { key: 'note', label: 'Lưu ý' },
          ],
          rows: [
            { type: 'Theo phiên (session)', rule: 'Phiên có thêm vào giỏ nhưng **không có đơn trong cùng phiên**', note: 'Dễ tính nhất, nhưng tính cả người xem giá rồi mua lại sau; con số luôn cao nhất' },
            { type: 'Theo người dùng, cửa sổ 24 giờ / 7 ngày', rule: 'Người dùng thêm vào giỏ nhưng **không mua trong N giờ/ngày sau đó**', note: 'Sát hành vi thật hơn; phải chốt N và áp dụng cho cả hai kỳ so sánh' },
            { type: 'Bỏ ở bước thanh toán', rule: 'Đã **bắt đầu thanh toán** nhưng không có đơn xác nhận', note: 'Mẫu số nhỏ hơn, thường là lỗi/ma sát hơn là chưa quyết định mua' },
          ],
          caption: 'Dashboard của team dùng kiểu **theo phiên**, mẫu số là phiên có thêm vào giỏ. Cả hai tháng được tính cùng định nghĩa, cùng loại trừ đơn hủy và đơn kiểm thử.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Chốt định nghĩa**: cùng công thức, cùng mẫu số, cùng cách xử lý đơn hủy ở hai kỳ.',
            '**Đi dọc funnel**: bước nào có tỷ lệ chuyển tiếp thay đổi nhiều nhất?',
            '**Khoanh vùng**: mức thay đổi tập trung ở thiết bị, kênh hay nhóm khách nào? Tách phần "cơ cấu" khỏi phần "tỷ lệ".',
            '**Tìm cơ chế và hành động**: điều gì đã đổi ở đúng nhóm đó, sửa gì, đo bằng metric nào.',
          ],
        },
        {
          kind: 'quiz',
          id: 'cart-abandonment-funnel-q1',
          question:
            'Một đồng nghiệp nói: "Em tính ra bỏ giỏ tháng này chỉ 58%, vậy dashboard sai rồi." Khả năng cao nhất là gì?',
          options: [
            {
              id: 'a',
              text: 'Dashboard sai vì con số 58% thấp hơn nên đáng tin hơn.',
              explain:
                'Thấp hơn không có nghĩa là đúng hơn. Chưa có căn cứ cho rằng bên nào tính nhầm; phải so định nghĩa trước khi chọn số.',
            },
            {
              id: 'b',
              text: 'Bạn ấy dùng định nghĩa khác, ví dụ tính theo người dùng trong 7 ngày (khách xem giỏ hôm nay, mua hôm sau vẫn tính là đã mua), nên không so được với 74,1%.',
              correct: true,
              explain:
                'Đúng. Cửa sổ dài và đơn vị đếm là người dùng làm tỷ lệ bỏ thấp hơn kiểu theo phiên. Hai con số chỉ so được khi cùng định nghĩa, và xu hướng tăng/giảm mới là điều cần so, không phải mức tuyệt đối.',
            },
            {
              id: 'c',
              text: 'Bạn ấy đã loại các giỏ của khách mobile nên con số thấp hơn là hợp lý.',
              explain:
                'Đây là suy đoán không có căn cứ. Loại một thiết bị mà không nói rõ là thay đổi mẫu số, và còn che đúng nhóm có thể đang gây vấn đề.',
            },
          ],
        },
      ],
    },
    {
      id: 'funnel',
      kind: 'analysis',
      title: 'Bước 1 — Funnel: rơi ở bước "bắt đầu → gửi thanh toán"',
      blocks: [
        {
          kind: 'table',
          title: 'Funnel toàn sàn (tỷ lệ so với bước liền trước)',
          columns: [
            { key: 'step', label: 'Bước' },
            { key: 'prev', label: 'Tháng trước', align: 'right' },
            { key: 'curr', label: 'Tháng này', align: 'right' },
            { key: 'rate', label: 'Tỷ lệ bước (trước → nay)', align: 'right' },
          ],
          rows: [
            { step: 'Phiên có thêm vào giỏ', prev: '40.000', curr: '42.000', rate: '—' },
            { step: 'Bắt đầu thanh toán', prev: '18.000', curr: '17.850', rate: '45,0% → 42,5%' },
            { step: 'Gửi thanh toán', prev: '13.392', curr: '12.096', rate: '74,4% → 67,8%' },
            { step: 'Đơn xác nhận', prev: '12.052', curr: '10.887', rate: '90,0% → 90,0%' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption:
            'Bước cuối ổn định (90,0%), nên cổng thanh toán không phải vấn đề. Bước "bắt đầu → gửi" rơi 6,6 điểm %, nhiều nhất. Bước "giỏ → bắt đầu" giảm 2,5 điểm % và cần xem có phải do cơ cấu thiết bị.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Tỷ lệ bỏ giỏ tổng chỉ là kết quả. Nó là tích của ba tỷ lệ bước, nên luôn **bỏ số tổng ra** và nhìn từng bước: mỗi bước kể một câu chuyện khác nhau (ý định mua, ma sát ở form, thanh toán thất bại).',
        },
      ],
    },
    {
      id: 'segment',
      kind: 'analysis',
      title: 'Bước 2 — Khoanh vùng: mobile gây ra gần 6/7 mức tăng',
      blocks: [
        {
          kind: 'chart',
          title: 'Tỷ lệ bỏ giỏ theo thiết bị',
          type: 'bar',
          xKey: 'device',
          unit: '%',
          series: [
            { key: 'prev', label: 'Tháng trước' },
            { key: 'curr', label: 'Tháng này' },
          ],
          data: [
            { device: 'Mobile', prev: 73.5, curr: 78.9 },
            { device: 'Desktop', prev: 64.4, curr: 64.4 },
          ],
          caption:
            'Mobile: 6.350 / 24.000 đơn → 5.897 / 28.000. Desktop: 5.702 / 16.000 → 4.990 / 14.000. Desktop không đổi.',
        },
        {
          kind: 'table',
          title: 'Funnel theo thiết bị (tỷ lệ so với bước liền trước)',
          columns: [
            { key: 'device', label: 'Thiết bị · bước' },
            { key: 'prev', label: 'Tháng trước', align: 'right' },
            { key: 'curr', label: 'Tháng này', align: 'right' },
          ],
          rows: [
            { device: 'Mobile · giỏ → bắt đầu', prev: '42,0%', curr: '39,0%' },
            { device: 'Mobile · bắt đầu → gửi thanh toán', prev: '70,0%', curr: '60,0%' },
            { device: 'Mobile · gửi → xác nhận', prev: '90,0%', curr: '90,0%' },
            { device: 'Desktop · giỏ → bắt đầu', prev: '49,5%', curr: '49,5%' },
            { device: 'Desktop · bắt đầu → gửi thanh toán', prev: '80,0%', curr: '80,0%' },
            { device: 'Desktop · gửi → xác nhận', prev: '90,0%', curr: '90,0%' },
          ],
          highlight: [
            { row: 0, tone: 'warning' },
            { row: 1, tone: 'negative' },
          ],
          caption: 'Mobile chiếm 60% giỏ tháng trước và 66,7% tháng này (chiến dịch chủ yếu chạy trên mạng xã hội).',
        },
        {
          kind: 'formula',
          expression:
            'Hiệu ứng cơ cấu = (2/3 × 73,5 + 1/3 × 64,4) − 69,9 ≈ +0,6 điểm % · Hiệu ứng tỷ lệ = 74,1 − 70,5 ≈ +3,6 điểm %',
          note: 'Mobile đông hơn (cơ cấu) chỉ giải thích khoảng 0,6 trong 4,2 điểm %. Phần chính, **+3,6 điểm %**, do tỷ lệ bỏ của chính mobile tăng.',
        },
        {
          kind: 'quiz',
          id: 'cart-abandonment-funnel-q2',
          question: 'Từ hai bảng trên, kết luận nào chặt chẽ nhất?',
          options: [
            {
              id: 'a',
              text: 'Mobile đông hơn nên tỷ lệ bỏ giỏ tăng, chỉ cần chấp nhận cơ cấu mới.',
              explain:
                'Cơ cấu chỉ giải thích khoảng +0,6 điểm % trong 4,2. Nếu mobile giữ nguyên tỷ lệ bỏ như tháng trước, tổng sẽ chỉ lên khoảng 70,5%.',
            },
            {
              id: 'b',
              text: 'Mobile bỏ nhiều hơn thật sự, tập trung ở bước "bắt đầu → gửi thanh toán" (70% → 60%); desktop và bước xác nhận không đổi.',
              correct: true,
              explain:
                'Đúng. Toàn bộ mức xấu đi nằm ở một thiết bị và một bước. Hướng điều tra tiếp là điều gì thay đổi trong form thanh toán trên mobile, không phải cổng thanh toán hay giá.',
            },
            {
              id: 'c',
              text: 'Khách mobile ít có ý định mua hơn nên bỏ nhiều, không cần sửa gì.',
              explain:
                'Tỷ lệ "giỏ → bắt đầu" chỉ giảm nhẹ (42% → 39%), còn mức rơi lớn nằm ở **sau khi đã bắt đầu thanh toán**: người đã quyết định mua nhưng không hoàn tất. Đó là dấu hiệu ma sát, không phải ý định.',
            },
          ],
        },
      ],
    },
    {
      id: 'mechanism',
      kind: 'analysis',
      title: 'Bước 3 — Tìm cơ chế: khách vãng lai trên mobile bị yêu cầu OTP',
      blocks: [
        {
          kind: 'table',
          title: 'Mobile: bắt đầu → gửi thanh toán theo trạng thái đăng nhập',
          columns: [
            { key: 'group', label: 'Nhóm' },
            { key: 'prev', label: 'Tháng trước', align: 'right' },
            { key: 'curr', label: 'Tháng này', align: 'right' },
          ],
          rows: [
            { group: 'Đã đăng nhập (số bắt đầu · tỷ lệ gửi)', prev: '5.040 · 80,0%', curr: '5.460 · 80,0%' },
            { group: 'Khách vãng lai (số bắt đầu · tỷ lệ gửi)', prev: '5.040 · 60,0%', curr: '5.460 · 40,0%' },
            { group: 'Tổng lượt gửi thanh toán', prev: '7.056', curr: '6.552' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
          caption: '5.040 × 80% + 5.040 × 60% = 7.056; 5.460 × 80% + 5.460 × 40% = 6.552. Nhóm đã đăng nhập không đổi.',
        },
        {
          kind: 'chart',
          title: 'Mobile, khách vãng lai: tỷ lệ bắt đầu → gửi thanh toán theo tuần',
          type: 'line',
          xKey: 'week',
          unit: '%',
          series: [{ key: 'rate', label: 'Gửi thanh toán' }],
          data: [
            { week: 'Tuần 1', rate: 60.2 },
            { week: 'Tuần 2', rate: 59.8 },
            { week: 'Tuần 3', rate: 60.1 },
            { week: 'Tuần 4', rate: 59.9 },
            { week: 'Tuần 5', rate: 40.3 },
            { week: 'Tuần 6', rate: 39.7 },
            { week: 'Tuần 7', rate: 40.1 },
            { week: 'Tuần 8', rate: 39.9 },
          ],
          marker: { x: 'Tuần 5', label: 'Bắt buộc OTP cho khách vãng lai' },
          caption:
            'Mức rơi dạng bậc, bắt đầu đúng tuần phát hành bản cập nhật thêm bước xác thực OTP số điện thoại cho khách chưa đăng nhập trên mobile.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Trùng thời điểm chưa phải kết luận',
          md: 'Đây là **giả thuyết mạnh**, chưa phải nguyên nhân đã chứng minh. Cần kiểm tra thêm: tỷ lệ gửi OTP thành công và thời gian nhận OTP, bước nào của form có nhiều lần thoát nhất, và mã lỗi nhà cung cấp SMS. Nếu OTP trễ hoặc không đến, đó là lỗi kỹ thuật; nếu OTP hoạt động tốt, đó là ma sát thuần tuý.',
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
          md: '**Kết luận:** Tỷ lệ bỏ giỏ tăng 4,2 điểm % chủ yếu do khách vãng lai trên mobile bỏ ở bước bắt đầu → gửi thanh toán (60% → 40%) kể từ khi bắt buộc OTP. Cơ cấu thiết bị chỉ giải thích khoảng 0,6 điểm %. Nếu đưa nhóm này về 60%, ước tính lấy lại khoảng **983 đơn/tháng**, tương đương **374 triệu đ/tháng** (AOV 380.000 đ).',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Chuyển OTP xuống **sau** nút đặt hàng hoặc cho phép đặt hàng với COD không cần OTP trước; kiểm tra song song độ trễ và tỷ lệ gửi OTP thành công',
              owner: 'Product Manager thanh toán + Mobile lead',
              metric: 'Tỷ lệ bắt đầu → gửi thanh toán của khách vãng lai trên mobile',
              threshold: 'Quay lại ≥ 55% trong 2 tuần sau thay đổi',
            },
            {
              action: 'A/B test: nhánh giữ OTP bắt buộc đối chứng với nhánh OTP chậm, đo cả tỷ lệ đơn ảo/giao thất bại để biết việc xác thực có thật sự ngăn gian lận',
              owner: 'Analyst + Risk',
              metric: 'Chính: tỷ lệ giỏ → đơn xác nhận. Guardrail: tỷ lệ đơn ảo hoặc giao thất bại',
              threshold: 'Chọn nhánh mới nếu đơn tăng và tỷ lệ đơn ảo tăng không quá 0,5 điểm % tuyệt đối',
            },
            {
              action: 'Thêm funnel theo bước × thiết bị × trạng thái đăng nhập vào dashboard hằng ngày, cảnh báo khi một bước giảm > 5 điểm % so với trung bình 14 ngày',
              owner: 'Data/Analytics',
              metric: 'Thời gian phát hiện thay đổi funnel',
              threshold: '< 3 ngày thay vì chờ báo cáo tháng',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Mất mát nằm ở một nhóm rõ ràng và một thay đổi sản phẩm có thể đảo ngược, nên ưu tiên **gỡ ma sát** thay vì chạy thêm khuyến mãi hay mua thêm traffic. A/B test giữ guardrail vì OTP có thể có lý do chính đáng (chống đơn ảo): mục tiêu là cân bằng, không phải bỏ xác thực bất chấp.',
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
              title: 'Dùng tỷ lệ bỏ giỏ mà không nêu định nghĩa',
              why: 'Theo phiên, theo người dùng 24 giờ hay 7 ngày cho ba con số khác nhau cho cùng một dữ liệu. So các con số khác định nghĩa dẫn đến kết luận sai về xu hướng.',
              instead: 'Ghi rõ đơn vị đếm, cửa sổ thời gian và cách xử lý đơn hủy ngay trên biểu đồ; giữ cố định giữa các kỳ.',
            },
            {
              title: 'Chỉ nhìn tỷ lệ bỏ tổng',
              why: 'Số tổng gộp mọi bước và mọi nhóm: nó tăng cả khi mobile đông hơn lẫn khi mobile tệ đi, và hai nguyên nhân cần hành động khác nhau.',
              instead: 'Đi dọc từng bước, cắt theo thiết bị, rồi tách phần cơ cấu khỏi phần tỷ lệ bằng một phép tính nhỏ.',
            },
            {
              title: 'Coi mọi giỏ bị bỏ là mất doanh thu',
              why: 'Một phần lớn giỏ chỉ để lưu, so giá hoặc mua lại sau. Mục tiêu "đưa bỏ giỏ về 0" không thực tế và dễ dẫn đến hành động khó chịu (popup, ép mua).',
              instead: 'Ưu tiên bước sau khi đã bắt đầu thanh toán, nơi khách đã có ý định mua, và so với mức nền của chính sàn mình thay vì mức trung bình ngành.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Chốt định nghĩa "bỏ giỏ" (đơn vị đếm, cửa sổ thời gian, đơn hủy) trước khi so hai kỳ.',
    'Đi dọc funnel từng bước rồi cắt theo thiết bị và trạng thái đăng nhập; tách phần cơ cấu khỏi phần tỷ lệ.',
    'Bước rơi sau khi khách đã bắt đầu thanh toán thường là ma sát hoặc lỗi; sửa kèm A/B test và guardrail.',
  ],
  references: [
    {
      title: 'Cart & Checkout Abandonment Rate Statistics',
      publisher: 'Baymard Institute',
      url: 'https://baymard.com/lists/cart-abandonment-rate',
      note: 'Tổng hợp các nghiên cứu về tỷ lệ bỏ giỏ (trung bình khoảng 70%) và lý do bỏ checkout; dùng làm mức tham chiếu.',
    },
    {
      title: 'Measure ecommerce',
      publisher: 'Google for Developers (GA4)',
      url: 'https://developers.google.com/analytics/devguides/collection/ga4/ecommerce',
      note: 'Các sự kiện chuẩn add_to_cart, begin_checkout, purchase để dựng funnel giỏ → thanh toán → đơn.',
    },
    {
      title: 'Funnel exploration',
      publisher: 'Google Analytics Help',
      url: 'https://support.google.com/analytics/answer/9327974',
      note: 'Cách dựng funnel theo bước và cắt theo thiết bị/phân khúc trong GA4.',
    },
  ],
}
