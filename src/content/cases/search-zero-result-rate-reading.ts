import type { CaseStudy } from '../types'

/*
 * Số liệu mock của sàn "Shop Z" (đã kiểm tra khớp nhau), tuần này so với tuần trước:
 *   Tuần trước: 190.000 lượt tìm · 19.000 không kết quả (10,0%)
 *     Phổ biến 118.000/3.540 (3,0%) · Thương hiệu/mẫu cụ thể 38.000/3.420 (9,0%) · Đuôi dài/không dấu/sai chính tả 34.000/12.040 (35,4%)
 *   Tuần này: 200.000 lượt · 24.000 không kết quả (12,0%)
 *     Phổ biến 120.000/3.600 (3,0%) · Thương hiệu 40.000/4.400 (11,0%) · Đuôi dài 40.000/16.000 (40,0%)
 *   Tỷ trọng nhóm đuôi dài: 17,9% → 20,0% lượt tìm; đóng góp vào tử số: 12.040 → 16.000 (+3.960 trong tổng +5.000)
 *   Top 5 từ khóa không kết quả: 3.100 + 2.500 + 1.700 + 1.400 + 1.200 = 9.900 = 41,25% của 24.000
 */
export const searchZeroResultRateReading: CaseStudy = {
  id: 'search-zero-result-rate-reading',
  title: 'Tỷ lệ tìm kiếm không có kết quả tăng lên 12%',
  domain: 'ecommerce',
  level: 'fresher',
  minutes: 8,
  skills: ['metric-definition', 'segmentation', 'metric-decomposition'],
  question: 'Tỷ lệ lượt tìm không có kết quả tăng từ 10% lên 12%. Metric này định nghĩa thế nào cho đúng, và nhóm từ khóa nào đang kéo nó lên?',
  summary: 'Đọc đúng tử số/mẫu số của tỷ lệ tìm kiếm không có kết quả rồi phân khúc từ khóa để biết cần sửa catalog hay sửa xử lý từ khóa.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst của **Shop Z**, một sàn thương mại điện tử. Thanh tìm kiếm là cửa vào của rất nhiều đơn hàng. Báo cáo tuần ghi *"tỷ lệ tìm kiếm không có kết quả tăng lên 12%"*. Trưởng sản phẩm hỏi: *"Hàng mình thiếu hay công cụ tìm kiếm hỏng?"*',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Shop Z và các con số là **giả định** để luyện cách đọc. Các nhóm từ khóa chỉ là cách chia để học.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Lượt tìm tuần này', value: '200.000', delta: '+5% so với 190.000', tone: 'neutral' },
            { label: 'Lượt không có kết quả', value: '24.000', delta: '+5.000 so với 19.000', tone: 'negative' },
            { label: 'Tỷ lệ không có kết quả', value: '12,0%', delta: '+2,0 điểm % so với 10,0%', tone: 'negative' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: tử số, mẫu số, và "không kết quả" nghĩa là gì',
      blocks: [
        {
          kind: 'text',
          md: 'Ba câu hỏi định nghĩa trước khi đọc con số. **Tử số:** lượt tìm trả về 0 sản phẩm (không phải lượt không bấm vào kết quả, đó là *zero-click*). **Mẫu số:** tổng lượt tìm hay số phiên có tìm kiếm? **Đơn vị:** nếu một người gõ lại 5 lần sau khi không thấy gì, đó là 5 lượt hay 1 người? Mỗi lựa chọn cho một tỷ lệ khác nhau.',
        },
        {
          kind: 'formula',
          expression: 'Tỷ lệ không kết quả = Lượt tìm trả về 0 sản phẩm ÷ Tổng lượt tìm',
          note: 'Dùng cùng một đơn vị (lượt tìm) ở tử và mẫu. Muốn đo trải nghiệm theo người, dùng thêm tỷ lệ phiên có ít nhất một lượt không kết quả.',
        },
        {
          kind: 'quiz',
          id: 'search-zero-result-rate-reading-q1',
          question: 'Khác biệt nào giữa "không có kết quả" (zero-result) và "không bấm kết quả" (zero-click)?',
          options: [
            {
              id: 'a',
              text: 'Zero-result: hệ thống trả về 0 sản phẩm. Zero-click: có kết quả nhưng người dùng không bấm vào cái nào.',
              correct: true,
              explain: 'Đúng. Zero-result chỉ ra thiếu hàng hoặc xử lý từ khóa kém; zero-click có thể do kết quả sai thứ tự, ảnh kém hấp dẫn hoặc người dùng chỉ so giá.',
            },
            {
              id: 'b',
              text: 'Chúng là cùng một khái niệm gọi bằng hai tên.',
              explain: 'Hai metric khác nhau và dẫn tới hai hướng xử lý khác nhau.',
            },
            {
              id: 'c',
              text: 'Zero-result chỉ xảy ra trên điện thoại.',
              explain: 'Không liên quan đến thiết bị; nó phụ thuộc vào catalog và cách xử lý từ khóa.',
            },
          ],
        },
      ],
    },
    {
      id: 'segments',
      kind: 'analysis',
      title: 'Bước 1 — Phân khúc từ khóa',
      blocks: [
        {
          kind: 'table',
          title: 'Lượt tìm và tỷ lệ không kết quả theo nhóm từ khóa',
          columns: [
            { key: 'seg', label: 'Nhóm từ khóa' },
            { key: 'prevQ', label: 'Lượt tuần trước', align: 'right' },
            { key: 'prevR', label: 'Tỷ lệ trước', align: 'right' },
            { key: 'nowQ', label: 'Lượt tuần này', align: 'right' },
            { key: 'nowR', label: 'Tỷ lệ nay', align: 'right' },
          ],
          rows: [
            { seg: 'Từ khóa phổ biến (áo thun, giày...)', prevQ: '118.000', prevR: '3,0%', nowQ: '120.000', nowR: '3,0%' },
            { seg: 'Thương hiệu / mẫu cụ thể', prevQ: '38.000', prevR: '9,0%', nowQ: '40.000', nowR: '11,0%' },
            { seg: 'Đuôi dài, không dấu, sai chính tả', prevQ: '34.000', prevR: '35,4%', nowQ: '40.000', nowR: '40,0%' },
            { seg: 'Tổng', prevQ: '190.000', prevR: '10,0%', nowQ: '200.000', nowR: '12,0%' },
          ],
          highlight: [
            { row: 1, tone: 'warning' },
            { row: 2, tone: 'negative' },
          ],
          caption: 'Không kết quả tuần này: 3.600 + 4.400 + 16.000 = 24.000; tuần trước: 3.540 + 3.420 + 12.040 = 19.000. Nhóm đuôi dài chiếm 16.000/24.000 = 66,7% tử số.',
        },
        {
          kind: 'chart',
          title: 'Tỷ lệ không kết quả theo nhóm từ khóa',
          type: 'bar',
          xKey: 'seg',
          unit: '%',
          series: [
            { key: 'prev', label: 'Tuần trước' },
            { key: 'now', label: 'Tuần này' },
          ],
          data: [
            { seg: 'Phổ biến', prev: 3, now: 3 },
            { seg: 'Thương hiệu / mẫu', prev: 9, now: 11 },
            { seg: 'Đuôi dài / sai chính tả', prev: 35.4, now: 40 },
          ],
          caption: 'Nhóm phổ biến ổn định; hai nhóm còn lại tăng, nhóm đuôi dài vừa nặng nhất vừa tăng nhiều nhất về lượt.',
        },
        {
          kind: 'quiz',
          id: 'search-zero-result-rate-reading-q2',
          question: 'Trong mức tăng +5.000 lượt không kết quả, nhóm đuôi dài đóng góp +3.960. Điều này cho biết gì?',
          options: [
            {
              id: 'a',
              text: 'Khoảng 79% mức tăng đến từ nhóm đuôi dài/sai chính tả, nên cần ưu tiên sửa cách xử lý từ khóa ở nhóm này.',
              correct: true,
              explain: 'Đúng. 3.960 ÷ 5.000 ≈ 79%. Đây là nhóm vừa có tỷ lệ cao vừa tăng lượt (34.000 → 40.000).',
            },
            {
              id: 'b',
              text: 'Nhóm phổ biến là nguyên nhân chính vì có nhiều lượt nhất.',
              explain: 'Nhóm phổ biến có tỷ lệ không kết quả đứng yên 3,0%; nhiều lượt không đồng nghĩa với nguyên nhân gây tăng.',
            },
            {
              id: 'c',
              text: 'Không rút ra được gì vì đây chỉ là một tuần.',
              explain: 'Một tuần chưa đủ kết luận xu hướng, nhưng phân rã vẫn chỉ ra đâu là nơi cần điều tra trước.',
            },
          ],
        },
      ],
    },
    {
      id: 'top-queries',
      kind: 'analysis',
      title: 'Bước 2 — Nhìn vào từ khóa cụ thể',
      blocks: [
        {
          kind: 'table',
          title: 'Top 5 từ khóa không kết quả tuần này',
          columns: [
            { key: 'kw', label: 'Từ khóa' },
            { key: 'n', label: 'Lượt', align: 'right' },
            { key: 'type', label: 'Chẩn đoán sơ bộ' },
          ],
          rows: [
            { kw: 'ao thun nam', n: 3100, type: 'Gõ không dấu; catalog có "áo thun nam"' },
            { kw: 'op lung dien thoai', n: 2500, type: 'Gõ không dấu' },
            { kw: 'giày chạy bộ trẻ em', n: 1700, type: 'Cụm dài; ít hàng trong catalog' },
            { kw: 'sạc nhanh 100w', n: 1400, type: 'Thiếu hàng hoặc thuộc tính chưa gắn' },
            { kw: 'balo lap top', n: 1200, type: 'Viết tách "lap top"' },
          ],
          caption: '3.100 + 2.500 + 1.700 + 1.400 + 1.200 = 9.900 lượt, chiếm 41,25% của 24.000. Phần lớn lỗi là xử lý từ khóa, không phải thiếu hàng.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Không phải mọi zero-result đều "xấu": người dùng tìm sản phẩm mà shop không bán là tín hiệu cung cầu có giá trị (nên bổ sung hàng). Cần tách **zero-result do sản phẩm không tồn tại** khỏi **zero-result do xử lý từ khóa kém** vì hai loại có chủ khác nhau.',
        },
        {
          kind: 'quiz',
          id: 'search-zero-result-rate-reading-q3',
          question: 'Sửa gì trước để giảm tỷ lệ không kết quả hiệu quả nhất?',
          options: [
            {
              id: 'a',
              text: 'Chuẩn hóa từ khóa không dấu, đồng nghĩa và lỗi chính tả cho nhóm đuôi dài, rồi xem phần còn lại là thiếu hàng thật.',
              correct: true,
              explain: 'Đúng. Phần lớn lượt không kết quả ở top từ khóa là gõ không dấu hoặc viết tách. Sửa ở bước xử lý từ khóa rẻ và nhanh hơn thêm hàng.',
            },
            {
              id: 'b',
              text: 'Thêm 10.000 sản phẩm mới vào catalog.',
              explain: 'Thêm hàng không giải quyết các từ khóa mà catalog đã có sản phẩm tương ứng.',
            },
            {
              id: 'c',
              text: 'Ẩn thông báo "không có kết quả" để người dùng không thấy.',
              explain: 'Che dấu hiệu không sửa nguyên nhân, và còn làm mất dữ liệu về nhu cầu.',
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
          md: '**Kết luận:** Tỷ lệ tăng từ 10% lên 12% chủ yếu nằm ở nhóm từ khóa đuôi dài (không dấu, viết tách, sai chính tả), không phải ở từ khóa phổ biến. Công cụ tìm kiếm cần xử lý từ khóa tốt hơn, và danh sách từ khóa còn lại sau xử lý sẽ cho biết catalog thật sự thiếu gì.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Chuẩn hóa không dấu, tách/gộp từ và từ điển đồng nghĩa cho top 200 từ khóa không kết quả',
              owner: 'Kỹ sư tìm kiếm',
              metric: 'Tỷ lệ không kết quả nhóm đuôi dài',
              threshold: 'Giảm từ 40% xuống ≤ 25% trong 4 tuần',
            },
            {
              action: 'Gửi danh sách từ khóa thiếu hàng cho đội ngành hàng để cân nhắc bổ sung',
              owner: 'Quản lý ngành hàng',
              metric: 'Số từ khóa top 50 có ≥ 1 sản phẩm phù hợp',
              threshold: '≥ 80% sau 6 tuần',
            },
            {
              action: 'Đưa tỷ lệ không kết quả theo phân khúc từ khóa lên dashboard tuần, kèm định nghĩa tử/mẫu',
              owner: 'Analyst tìm kiếm',
              metric: 'Tỷ lệ không kết quả toàn sàn',
              threshold: '≤ 8%',
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
              title: 'Trộn lẫn đơn vị tử và mẫu',
              why: 'Tử số đếm lượt tìm, mẫu số đếm người dùng làm tỷ lệ không so sánh được giữa các kỳ.',
              instead: 'Ghi rõ đơn vị; nếu cần đo theo người, thêm một metric riêng cho phiên.',
            },
            {
              title: 'Chỉ nhìn tỷ lệ chung',
              why: 'Một nhóm nhỏ nhưng có tỷ lệ rất cao có thể chiếm phần lớn tử số mà tỷ lệ chung không cho thấy.',
              instead: 'Phân khúc từ khóa và xem đóng góp vào tử số, không chỉ tỷ lệ của từng nhóm.',
            },
            {
              title: 'Gộp thiếu hàng với xử lý từ khóa kém',
              why: 'Hai nguyên nhân thuộc hai đội khác nhau; gộp lại sẽ không ai nhận việc.',
              instead: 'Gắn nhãn nguyên nhân cho top từ khóa trước khi giao việc.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Tỷ lệ không kết quả = lượt tìm trả về 0 sản phẩm ÷ tổng lượt tìm; cần cùng một đơn vị ở tử và mẫu.',
    'Phân khúc từ khóa và nhìn đóng góp vào tử số để biết tăng do nhóm nào, không chỉ nhìn tỷ lệ chung.',
    'Tách thiếu hàng với xử lý từ khóa kém để mỗi nguyên nhân có đúng người chịu trách nhiệm.',
  ],
  references: [
    {
      title: 'Search analytics',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Search_analytics',
      note: 'Giới thiệu phân tích hành vi tìm kiếm: từ khóa, lượt tìm và cách dùng dữ liệu này để cải thiện trải nghiệm.',
    },
    {
      title: 'Precision and recall',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Precision_and_recall',
      note: 'Hai thước đo cơ bản về chất lượng kết quả tìm kiếm, giúp hiểu vì sao "có kết quả" chưa phải "kết quả tốt".',
    },
  ],
}
