import type { CaseStudy } from '../types'

/*
 * Số liệu mock: căn hộ giả định mua 3.000 triệu đ, cho thuê 15 triệu đ/tháng (triệu đ/năm):
 *   Tiền thuê theo hợp đồng: 15 × 12 = 180 → lợi suất gộp 180 ÷ 3.000 = 6,0%
 *   Trống 1,5 tháng/năm: −22,5 → tiền thuê thực thu 157,5
 *   Chi phí chủ nhà: phí quản lý/vận hành 12 · sửa chữa bảo trì 9 · môi giới tìm khách 7,5 · thuế/lệ phí (giả định) 9 = 37,5
 *   Thu nhập ròng 157,5 − 37,5 = 120 → lợi suất ròng 120 ÷ 3.000 = 4,0%
 *   Cầu nối: 6,0% → trống −0,75 → chi phí −1,25 → 4,0% (−0,75 + −1,25 = −2,0)
 *   Giả định so sánh: kênh khác 5,0%/năm (tự đặt) → 150 triệu/năm
 */
export const rentalYieldGrossVsNetReading: CaseStudy = {
  id: 'rental-yield-gross-vs-net-reading',
  title: 'Lợi suất cho thuê 6%: gộp hay ròng?',
  domain: 'real-estate',
  level: 'fresher',
  minutes: 8,
  skills: ['unit-economics', 'valuation', 'metric-decomposition'],
  question: 'Môi giới nói căn hộ "cho thuê lợi suất 6%/năm". Con số này tính thế nào và sau khi trừ trống, chi phí và thuế thì nhà đầu tư thực nhận bao nhiêu?',
  summary: 'Phân biệt lợi suất cho thuê gộp và ròng, dựng cầu nối từ tiền thuê theo hợp đồng xuống thu nhập thực nhận.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Chị Lan đang cân nhắc mua một căn hộ giá **3.000 triệu đ** để cho thuê. Môi giới cho biết giá thuê thị trường **15 triệu đ/tháng**, nên *"lợi suất cho thuê 6%/năm, hơn gửi tiết kiệm"*. Chị nhờ bạn kiểm tra: *"6% này là con số thực nhận phải không?"*',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Căn hộ, giá thuê và mọi chi phí trong bài là **giả định**. Mức thuế áp dụng cho cho thuê nhà do pháp luật quy định và có thể thay đổi; con số thuế trong bài chỉ để minh họa, bạn cần kiểm tra quy định hiện hành hoặc hỏi chuyên gia thuế trước khi quyết định.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Giá mua', value: '3.000 triệu đ', tone: 'neutral' },
            { label: 'Tiền thuê theo hợp đồng', value: '180 triệu đ/năm', delta: '15 triệu × 12 tháng', tone: 'neutral' },
            { label: 'Lợi suất theo lời môi giới', value: '6,0%', delta: '180 ÷ 3.000', tone: 'positive' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: lợi suất gộp là trần, lợi suất ròng là thực nhận',
      blocks: [
        {
          kind: 'text',
          md: '**Lợi suất gộp** = tiền thuê cả năm theo hợp đồng ÷ giá mua. Nó giả định căn hộ luôn có người thuê và chủ nhà không tốn gì. **Lợi suất ròng** = thu nhập sau khi trừ thời gian trống, chi phí chủ nhà chịu và thuế, rồi chia cho giá mua (hoặc tổng vốn bỏ ra).',
        },
        {
          kind: 'formula',
          expression: 'Lợi suất ròng = (Tiền thuê thực thu − Chi phí chủ nhà − Thuế/lệ phí) ÷ Giá mua',
          note: 'Tiền thuê thực thu = tiền thuê theo hợp đồng × (12 − số tháng trống) ÷ 12. Bài này chưa tính lãi vay mua nhà và chênh lệch giá trị căn hộ, đó là các câu hỏi riêng.',
        },
        {
          kind: 'quiz',
          id: 'rental-yield-gross-vs-net-reading-q1',
          question: 'Môi giới quảng cáo "lợi suất 6%". Đó là loại lợi suất nào?',
          options: [
            {
              id: 'a',
              text: 'Lợi suất gộp: tiền thuê theo hợp đồng cả năm chia giá mua, chưa trừ trống, chi phí, thuế.',
              correct: true,
              explain: 'Đúng. 180 ÷ 3.000 = 6,0% chỉ dùng giá thuê và giá mua. Nó là mức trần, không phải thu nhập thực nhận.',
            },
            {
              id: 'b',
              text: 'Lợi suất ròng, đã gồm mọi chi phí.',
              explain: 'Phép tính chỉ dùng hai số. Ròng phải trừ thêm trống, chi phí và thuế.',
            },
            {
              id: 'c',
              text: 'Tổng lợi nhuận gồm cả tăng giá căn hộ.',
              explain: 'Lợi suất cho thuê chỉ đo thu nhập thuê, không gồm chênh lệch giá trị căn hộ.',
            },
          ],
        },
      ],
    },
    {
      id: 'bridge',
      kind: 'analysis',
      title: 'Bước 1 — Cầu nối từ 6,0% xuống lợi suất ròng',
      blocks: [
        {
          kind: 'table',
          title: 'Từ tiền thuê hợp đồng đến thu nhập ròng (triệu đ/năm)',
          columns: [
            { key: 'item', label: 'Khoản mục' },
            { key: 'amt', label: 'Số tiền', align: 'right' },
            { key: 'yield', label: 'Điểm % lợi suất', align: 'right' },
          ],
          rows: [
            { item: 'Tiền thuê theo hợp đồng (12 tháng)', amt: '180,0', yield: '6,00%' },
            { item: 'Trống 1,5 tháng', amt: '−22,5', yield: '−0,75' },
            { item: 'Tiền thuê thực thu', amt: '157,5', yield: '5,25%' },
            { item: 'Phí quản lý / vận hành', amt: '−12,0', yield: '−0,40' },
            { item: 'Sửa chữa, bảo trì', amt: '−9,0', yield: '−0,30' },
            { item: 'Môi giới tìm khách thuê', amt: '−7,5', yield: '−0,25' },
            { item: 'Thuế, lệ phí (giả định)', amt: '−9,0', yield: '−0,30' },
            { item: 'Thu nhập ròng', amt: '120,0', yield: '4,00%' },
          ],
          highlight: [
            { row: 0, tone: 'positive' },
            { row: 2, tone: 'neutral' },
            { row: 7, tone: 'warning' },
          ],
          caption: '157,5 − 12 − 9 − 7,5 − 9 = 120. Lợi suất ròng 120 ÷ 3.000 = 4,0%, thấp hơn lợi suất gộp 2,0 điểm %, tức mất một phần ba.',
        },
        {
          kind: 'chart',
          title: 'Lợi suất giảm dần qua từng bước',
          type: 'bar',
          xKey: 'step',
          unit: '%',
          series: [{ key: 'y', label: 'Lợi suất trên giá mua' }],
          data: [
            { step: 'Gộp (hợp đồng)', y: 6 },
            { step: 'Sau trống', y: 5.25 },
            { step: 'Sau chi phí chủ nhà', y: 4.3 },
            { step: 'Ròng (sau thuế)', y: 4 },
          ],
          caption: 'Sau chi phí chủ nhà: (157,5 − 12 − 9 − 7,5) ÷ 3.000 = 4,3%; trừ thêm thuế 9 → 4,0%.',
        },
        {
          kind: 'quiz',
          id: 'rental-yield-gross-vs-net-reading-q2',
          question: 'Giả sử bạn tìm được người thuê dài hạn, giảm trống từ 1,5 tháng xuống 0,5 tháng. Lợi suất ròng thay đổi thế nào (giữ nguyên các khoản khác)?',
          options: [
            {
              id: 'a',
              text: 'Tăng khoảng 0,5 điểm %: tiền thuê thực thu tăng 15 triệu đ (1 tháng), chia 3.000 = 0,5 điểm %.',
              correct: true,
              explain: 'Đúng. Một tháng thuê = 15 triệu đ = 0,5% của giá mua. Trong thực tế thuế có thể thay đổi theo thu nhập; bài giữ cố định để đơn giản.',
            },
            {
              id: 'b',
              text: 'Không thay đổi vì lợi suất gộp vẫn 6%.',
              explain: 'Lợi suất gộp không đổi, nhưng lợi suất ròng phụ thuộc vào thời gian trống.',
            },
            {
              id: 'c',
              text: 'Tăng 6 điểm %.',
              explain: 'Một tháng chỉ là 1/12 doanh thu, không thể tăng bằng cả lợi suất gộp.',
            },
          ],
        },
      ],
    },
    {
      id: 'decide',
      kind: 'analysis',
      title: 'Bước 2 — So với lựa chọn khác một cách công bằng',
      blocks: [
        {
          kind: 'text',
          md: 'Giả sử chị Lan có một lựa chọn khác với lợi suất ước tính **5,0%/năm** (con số tự đặt để minh họa, bạn thay bằng số thật). Với 3.000 triệu đ, mức đó cho 150 triệu đ/năm; căn hộ chỉ cho 120 triệu đ thu nhập ròng. So lợi suất gộp 6,0% với 5,0% là so khác loại: **gộp với ròng**. Phải so ròng với ròng, và cân nhắc thêm thanh khoản (bán căn hộ mất bao lâu), rủi ro giá và công sức quản lý.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Chi phí và thuế phụ thuộc vào cách cho thuê (có hợp đồng, có kê khai hay không), vào loại nhà và quy định địa phương. Khi lập mô hình hãy tách từng khoản và thử kịch bản xấu (trống 3 tháng, sửa chữa lớn). Với phần pháp lý/thuế hãy dựa vào nguồn chính thức.',
        },
        {
          kind: 'quiz',
          id: 'rental-yield-gross-vs-net-reading-q3',
          question: 'Chị Lan nên làm gì trước khi quyết định mua?',
          options: [
            {
              id: 'a',
              text: 'Lập bảng ròng với kịch bản trống/chi phí xấu, đối chiếu thuế hiện hành, rồi so ròng với phương án khác.',
              correct: true,
              explain: 'Đúng. Quyết định dựa trên thu nhập thực nhận và có kiểm tra độ nhạy, không dựa trên con số gộp quảng cáo.',
            },
            {
              id: 'b',
              text: 'Mua ngay vì 6% cao hơn lãi tiết kiệm.',
              explain: 'So gộp với lãi tiết kiệm là so khác loại; ròng chỉ 4,0% và còn có rủi ro, thanh khoản.',
            },
            {
              id: 'c',
              text: 'Không mua vì lợi suất ròng thấp hơn gộp.',
              explain: 'Ròng luôn thấp hơn gộp. Điều quan trọng là mức ròng đó có đáng so với lựa chọn khác và rủi ro hay không.',
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
          md: '**Kết luận cho chị Lan:** Con số 6,0% là lợi suất gộp. Sau 1,5 tháng trống, 37,5 triệu đ chi phí và thuế, lợi suất ròng chỉ còn **4,0%** (120 triệu đ/năm). Hãy so ròng với ròng và kiểm tra độ nhạy trước khi mua.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Yêu cầu môi giới nêu rõ số tháng trống giả định và liệt kê chi phí chủ nhà phải chịu',
              owner: 'Nhà đầu tư (chị Lan)',
              metric: 'Lợi suất ròng dự kiến',
              threshold: 'Tính được trong 3 kịch bản (tốt, cơ sở, xấu)',
            },
            {
              action: 'Thử kịch bản xấu: trống 3 tháng và sửa chữa lớn 30 triệu đ',
              owner: 'Analyst tài chính cá nhân',
              metric: 'Lợi suất ròng kịch bản xấu',
              threshold: 'Vẫn ≥ 3,0% hoặc chấp nhận được với rủi ro của chị',
            },
            {
              action: 'Kiểm tra quy định thuế/lệ phí cho thuê hiện hành từ nguồn chính thức hoặc chuyên gia',
              owner: 'Nhà đầu tư (chị Lan) cùng tư vấn thuế',
              metric: 'Mức thuế/lệ phí thực tế',
              threshold: 'Đã xác nhận bằng văn bản trước khi mua',
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
              title: 'So lợi suất gộp với lãi tiết kiệm',
              why: 'Lãi tiết kiệm đã là thu nhập thực nhận, còn lợi suất gộp thì chưa trừ gì.',
              instead: 'So lợi suất ròng với lãi thực nhận, và nêu rõ khác biệt về rủi ro và thanh khoản.',
            },
            {
              title: 'Giả định luôn kín khách thuê',
              why: 'Trống một vài tháng làm giảm vài phần trăm lợi suất, và thường lớn hơn dự tính.',
              instead: 'Dùng số tháng trống thực tế của khu vực và thử kịch bản xấu.',
            },
            {
              title: 'Trộn lợi suất cho thuê với lãi vốn',
              why: 'Giá căn hộ có thể tăng hoặc giảm; đó là kết quả khác, không phải lợi suất cho thuê.',
              instead: 'Tách rõ hai nguồn lợi nhuận: thu nhập cho thuê và chênh lệch giá trị.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Lợi suất gộp = tiền thuê hợp đồng ÷ giá mua; chỉ là mức trần, chưa trừ trống, chi phí, thuế.',
    'Lợi suất ròng dựng bằng cầu nối từng khoản; ở ví dụ, 6,0% còn 4,0% thực nhận.',
    'So ròng với ròng, thử kịch bản xấu và kiểm tra thuế bằng nguồn chính thức trước khi quyết định.',
  ],
  references: [
    {
      title: 'Capitalization rate',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Capitalization_rate',
      note: 'Khái niệm tỷ suất vốn hóa: thu nhập ròng từ hoạt động chia giá trị bất động sản, gần với lợi suất ròng trong bài.',
    },
    {
      title: 'Gross rent multiplier',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Gross_rent_multiplier',
      note: 'Chỉ số định giá nhanh dựa trên tiền thuê gộp, giúp thấy giới hạn của con số gộp.',
    },
  ],
}
