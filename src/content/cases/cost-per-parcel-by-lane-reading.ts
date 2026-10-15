import type { CaseStudy } from '../types'

/*
 * Số liệu mock của "FastShip" (đồng; 100.000 đơn mỗi tháng):
 *   Tháng trước: Nội thành 60.000 × 12.000 = 720 triệu · Liên tỉnh gần 25.000 × 24.000 = 600 · Liên tỉnh xa 15.000 × 32.000 = 480 → 1.800 triệu → 18.000 đ/đơn
 *   Tháng này:   Nội thành 50.000 × 12.000 = 600 · gần 25.000 × 24.000 = 600 · xa 25.000 × 31.200 = 780 → 1.980 triệu → 19.800 đ/đơn (+1.800, +10%)
 *   Hiệu ứng mix (đơn giá cũ, cơ cấu mới): 50×12.000 + 25×24.000 + 25×32.000 = 2.000 triệu → 20.000 đ/đơn → +2.000
 *   Hiệu ứng đơn giá (đơn giá mới, cơ cấu mới) 19.800 − 20.000 = −200 → tổng +2.000 − 200 = +1.800
 *   Tuyến xa: chi phí 6.240.000 đ/chuyến xe; 195 đơn/chuyến (tháng trước) → 32.000; 200 đơn/chuyến (tháng này) → 31.200 (−2,5%)
 */
export const costPerParcelByLaneReading: CaseStudy = {
  id: 'cost-per-parcel-by-lane-reading',
  title: 'Chi phí mỗi đơn tăng 10%: do tuyến hay do hiệu suất?',
  domain: 'logistics',
  level: 'fresher',
  minutes: 9,
  skills: ['unit-economics', 'mix-effect', 'operations'],
  question: 'Chi phí vận chuyển trung bình mỗi đơn tăng từ 18.000 đ lên 19.800 đ (+10%). Chi phí của từng tuyến có tăng không, hay chỉ là cơ cấu đơn đã đổi?',
  summary: 'Phân rã chi phí mỗi đơn thành hiệu ứng cơ cấu tuyến và hiệu ứng đơn giá từng tuyến, rồi đọc đơn giá tuyến theo hệ số lấp đầy xe.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst vận hành của **FastShip**, một công ty giao hàng giả định. Báo cáo tháng ghi *"chi phí vận chuyển mỗi đơn tăng 10%"*. Giám đốc vận hành lo ngại hiệu suất xuống, đã định yêu cầu các điều phối viên cắt giảm. Trước khi làm vậy, bạn muốn biết tăng ở đâu.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'FastShip và mọi con số là **giả định**. Cơ cấu chi phí thực tế của hãng giao hàng gồm nhiều thành phần hơn (lấy hàng, trung chuyển, giao chặng cuối...); bài chỉ dùng một chi phí gộp theo tuyến.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Chi phí trung bình mỗi đơn', value: '19.800 đ', delta: '+1.800 đ (+10%) so với 18.000 đ', tone: 'negative' },
            { label: 'Số đơn', value: '100.000', delta: 'không đổi', tone: 'neutral' },
            { label: 'Tổng chi phí', value: '1.980 triệu đ', delta: '+180 triệu đ', tone: 'negative' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: trung bình = cơ cấu × đơn giá từng tuyến',
      blocks: [
        {
          kind: 'text',
          md: 'Chi phí trung bình mỗi đơn là **trung bình có trọng số** của chi phí từng tuyến, trọng số là tỷ trọng đơn của tuyến. Nó có thể tăng vì (1) **đơn giá từng tuyến tăng** (hiệu suất, giá nhiên liệu) hoặc (2) **cơ cấu dịch sang tuyến đắt hơn** (mix) dù mỗi tuyến vẫn giữ giá.',
        },
        {
          kind: 'formula',
          expression: 'Δ chi phí/đơn = Σ (Δ tỷ trọng × đơn giá cũ) + Σ (Δ đơn giá × tỷ trọng mới)',
          note: 'Số hạng đầu là hiệu ứng cơ cấu (mix), số hạng sau là hiệu ứng đơn giá. Tổng hai phần bằng thay đổi thực của chi phí trung bình.',
        },
        {
          kind: 'quiz',
          id: 'cost-per-parcel-by-lane-reading-q1',
          question: 'Chi phí trung bình mỗi đơn có thể tăng dù đơn giá mọi tuyến không đổi không?',
          options: [
            {
              id: 'a',
              text: 'Có: nếu tỷ trọng đơn dịch sang tuyến đắt hơn, trung bình tăng dù mỗi tuyến giữ nguyên giá.',
              correct: true,
              explain: 'Đúng. Đây là hiệu ứng cơ cấu. Chi phí trung bình chỉ là trung bình có trọng số, nên đổi trọng số cũng đổi trung bình.',
            },
            {
              id: 'b',
              text: 'Không: trung bình chỉ tăng khi từng tuyến tăng giá.',
              explain: 'Sai: trọng số cũng quyết định trung bình.',
            },
            {
              id: 'c',
              text: 'Có, nhưng chỉ khi số đơn tăng.',
              explain: 'Số đơn không quyết định chi phí mỗi đơn, mà cơ cấu và đơn giá.',
            },
          ],
        },
      ],
    },
    {
      id: 'decompose',
      kind: 'analysis',
      title: 'Bước 1 — Phân rã theo tuyến',
      blocks: [
        {
          kind: 'table',
          title: 'Đơn, đơn giá và tổng chi phí theo tuyến',
          columns: [
            { key: 'lane', label: 'Tuyến' },
            { key: 'prevN', label: 'Đơn tháng trước', align: 'right' },
            { key: 'prevC', label: 'Đ/đơn trước', align: 'right' },
            { key: 'nowN', label: 'Đơn tháng này', align: 'right' },
            { key: 'nowC', label: 'Đ/đơn nay', align: 'right' },
          ],
          rows: [
            { lane: 'Nội thành', prevN: '60.000', prevC: '12.000', nowN: '50.000', nowC: '12.000' },
            { lane: 'Liên tỉnh gần', prevN: '25.000', prevC: '24.000', nowN: '25.000', nowC: '24.000' },
            { lane: 'Liên tỉnh xa', prevN: '15.000', prevC: '32.000', nowN: '25.000', nowC: '31.200' },
            { lane: 'Tổng / trung bình', prevN: '100.000', prevC: '18.000', nowN: '100.000', nowC: '19.800' },
          ],
          highlight: [
            { row: 2, tone: 'warning' },
            { row: 3, tone: 'negative' },
          ],
          caption: 'Tháng trước: 720 + 600 + 480 = 1.800 triệu → 18.000 đ/đơn. Tháng này: 600 + 600 + 780 = 1.980 triệu → 19.800 đ/đơn.',
        },
        {
          kind: 'table',
          title: 'Cầu nối chi phí mỗi đơn (đ)',
          columns: [
            { key: 'step', label: 'Bước' },
            { key: 'value', label: 'Chi phí/đơn', align: 'right' },
            { key: 'delta', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { step: 'Tháng trước', value: '18.000', delta: '—' },
            { step: 'Cơ cấu mới, đơn giá cũ (mix)', value: '20.000', delta: '+2.000' },
            { step: 'Cơ cấu mới, đơn giá mới (tháng này)', value: '19.800', delta: '−200' },
          ],
          highlight: [
            { row: 1, tone: 'warning' },
            { row: 2, tone: 'positive' },
          ],
          caption: '50 × 12.000 + 25 × 24.000 + 25 × 32.000 = 2.000 triệu (20.000 đ/đơn). Mix làm tăng 2.000; đơn giá từng tuyến giảm 200 giúp bù lại một phần. Tổng +1.800.',
        },
        {
          kind: 'quiz',
          id: 'cost-per-parcel-by-lane-reading-q2',
          question: 'Từ bảng cầu nối, kết luận nào đúng?',
          options: [
            {
              id: 'a',
              text: 'Toàn bộ mức tăng đến từ cơ cấu (nhiều đơn tuyến xa hơn); đơn giá từng tuyến thậm chí giảm nhẹ.',
              correct: true,
              explain: 'Đúng. Mix +2.000 đ, đơn giá −200 đ. Tuyến xa tăng từ 15% lên 25% tổng đơn.',
            },
            {
              id: 'b',
              text: 'Hiệu suất các tuyến xấu đi vì chi phí trung bình tăng.',
              explain: 'Đơn giá các tuyến không tăng; tuyến xa còn giảm 800 đ/đơn.',
            },
            {
              id: 'c',
              text: 'Tuyến nội thành là nguyên nhân vì đơn giảm.',
              explain: 'Tuyến nội thành có đơn giá không đổi; nó chỉ nhẹ đi trong cơ cấu.',
            },
          ],
        },
      ],
    },
    {
      id: 'load',
      kind: 'analysis',
      title: 'Bước 2 — Vì sao đơn giá tuyến xa giảm: dung tích xe',
      blocks: [
        {
          kind: 'table',
          title: 'Tuyến liên tỉnh xa: chi phí chuyến xe và số đơn mỗi chuyến',
          columns: [
            { key: 'item', label: 'Chỉ tiêu' },
            { key: 'prev', label: 'Tháng trước', align: 'right' },
            { key: 'now', label: 'Tháng này', align: 'right' },
          ],
          rows: [
            { item: 'Chi phí mỗi chuyến xe (đ)', prev: '6.240.000', now: '6.240.000' },
            { item: 'Số đơn mỗi chuyến', prev: 195, now: 200 },
            { item: 'Chi phí mỗi đơn (đ)', prev: '32.000', now: '31.200' },
          ],
          highlight: [{ row: 2, tone: 'positive' }],
          caption: '6.240.000 ÷ 195 = 32.000; 6.240.000 ÷ 200 = 31.200. Xe đầy hơn thì chi phí cố định của chuyến chia cho nhiều đơn hơn.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Chi phí mỗi đơn của tuyến vận tải phụ thuộc mạnh vào hệ số lấp đầy xe: chi phí chuyến gần như cố định, chia cho nhiều hay ít đơn. Khi tuyến xa tăng đơn, xe đầy hơn nên đơn giá tuyến giảm; nhưng đây vẫn là tuyến đắt hơn, nên chi phí trung bình toàn mạng vẫn tăng khi tỷ trọng tuyến xa tăng.',
        },
        {
          kind: 'quiz',
          id: 'cost-per-parcel-by-lane-reading-q3',
          question: 'Phản ứng nào của giám đốc vận hành là hợp lý nhất với dữ liệu này?',
          options: [
            {
              id: 'a',
              text: 'Không cắt giảm chi phí tuyến; đánh giá hiệu suất theo từng tuyến và điều chỉnh giá bán/định giá tuyến xa cho khớp chi phí.',
              correct: true,
              explain: 'Đúng. Mức tăng chi phí trung bình là cơ cấu; so hiệu suất cần so tuyến với tuyến, và nếu tuyến xa tăng tỷ trọng thì giá bán cần phản ánh.',
            },
            {
              id: 'b',
              text: 'Yêu cầu mọi điều phối viên cắt 10% chi phí.',
              explain: 'Cắt đồng loạt phạt cả tuyến đã hiệu quả (tuyến xa còn giảm đơn giá).',
            },
            {
              id: 'c',
              text: 'Ngừng nhận đơn tuyến xa.',
              explain: 'Quyết định này cần xem biên lợi nhuận tuyến, chưa đủ dữ liệu từ bài; không nên làm vội.',
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
          md: '**Kết luận:** Chi phí mỗi đơn tăng 1.800 đ nhưng **không** do hiệu suất tuyến: cơ cấu dịch sang tuyến xa làm tăng 2.000 đ/đơn, còn đơn giá từng tuyến giảm làm bù 200 đ. Hãy đo hiệu suất theo từng tuyến và để giá bán theo kịp cơ cấu mới.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Báo cáo chi phí mỗi đơn kèm cầu nối mix và đơn giá theo tuyến mỗi tháng',
              owner: 'Analyst vận hành',
              metric: 'Hiệu ứng mix và hiệu ứng đơn giá (đ/đơn)',
              threshold: 'Hiệu ứng đơn giá không tăng quá +2% trong tháng',
            },
            {
              action: 'Theo dõi số đơn mỗi chuyến xe tuyến xa và dừng xuất bến khi quá thấp',
              owner: 'Điều phối vận tải',
              metric: 'Số đơn mỗi chuyến tuyến xa',
              threshold: '≥ 190 đơn/chuyến',
            },
            {
              action: 'Rà soát bảng giá bán tuyến xa so với chi phí để đảm bảo biên còn dương khi tỷ trọng tăng',
              owner: 'Trưởng kinh doanh + Tài chính',
              metric: 'Biên lợi nhuận tuyến xa',
              threshold: '≥ 8%',
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
              title: 'Đánh giá hiệu suất bằng chi phí trung bình toàn mạng',
              why: 'Trung bình đổi khi cơ cấu tuyến đổi, không phản ánh hiệu suất từng tuyến.',
              instead: 'So tuyến với tuyến và tách hiệu ứng mix.',
            },
            {
              title: 'Cắt chi phí đồng loạt',
              why: 'Phạt cả tuyến vốn hiệu quả, dễ làm giảm chất lượng giao hàng.',
              instead: 'Xác định tuyến thật sự tăng đơn giá rồi mới xử lý.',
            },
            {
              title: 'Quên chi phí cố định theo chuyến',
              why: 'Đơn giá tuyến phụ thuộc vào số đơn mỗi chuyến; so đơn giá giữa hai kỳ có số đơn khác nhau là so không công bằng.',
              instead: 'Báo cáo thêm số đơn mỗi chuyến hoặc hệ số lấp đầy.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Chi phí trung bình mỗi đơn là trung bình có trọng số: đổi cơ cấu tuyến cũng đổi trung bình dù từng tuyến giữ giá.',
    'Cầu nối mix và đơn giá cho biết tăng do cơ cấu hay do hiệu suất.',
    'Chi phí tuyến phụ thuộc hệ số lấp đầy xe; theo dõi đơn mỗi chuyến cùng đơn giá.',
  ],
  references: [
    {
      title: 'Last mile (transportation)',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Last_mile_(transportation)',
      note: 'Bối cảnh chặng cuối trong logistics và vì sao chi phí giao hàng phụ thuộc vào mật độ và cơ cấu đơn.',
    },
    {
      title: "Simpson's paradox",
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Simpson%27s_paradox',
      note: 'Giải thích vì sao trung bình gộp đổi khi tỷ trọng các nhóm đổi, kể cả khi từng nhóm ổn định.',
    },
  ],
}
