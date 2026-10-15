import type { Explainer } from '../../../shared/explainer'

export const deferredRevenueSubscriptionMetrics: Explainer = {
  id: 'deferred-revenue-subscription-metrics',
  slug: 'deferred-revenue-subscription-metrics',
  question: 'Doanh thu hoãn lại và các chỉ số thuê bao (ARR, churn) cho biết điều gì về một doanh nghiệp?',
  title: 'Thu tiền trước chưa phải doanh thu: doanh thu hoãn lại là nghĩa vụ phải cung cấp dịch vụ, còn chỉ số thuê bao đo độ bền của nó',
  topic: 'markets-investing',
  tldr: 'Khi khách trả tiền trước cho dịch vụ dài hạn (gói năm, học phí, thuê bao phần mềm), doanh nghiệp ghi **doanh thu hoãn lại** là khoản nợ phải trả và chuyển dần thành doanh thu khi cung cấp dịch vụ (nguyên tắc của IFRS 15: ghi nhận doanh thu khi chuyển giao hàng hóa/dịch vụ đã hứa cho khách). Dòng tiền vào có thể vượt xa doanh thu ghi nhận trong giai đoạn tăng trưởng. Để đọc đúng, kết hợp số kế toán (doanh thu, doanh thu hoãn lại) với chỉ số thuê bao (ARR, tỷ lệ rời bỏ, giữ chân).',
  keyPoints: [
    '**Ghi nhận doanh thu theo kỳ cung cấp dịch vụ:** khách trả 1.200 cho gói 12 tháng (ví dụ giả định), doanh nghiệp thu tiền ngay nhưng chỉ ghi 100 doanh thu mỗi tháng; phần còn lại là doanh thu hoãn lại trên bảng cân đối.',
    'Doanh thu hoãn lại tăng thường là dấu hiệu **đơn hàng mới và gia hạn** nhưng chưa phải lợi nhuận; ngược lại, doanh thu hoãn lại giảm có thể báo trước doanh thu tương lai chậm lại.',
    '**ARR/MRR** (doanh thu định kỳ năm/tháng) là chỉ số quản trị, không phải chỉ tiêu kế toán chuẩn hóa; mỗi công ty định nghĩa khác nhau (có tính phí dùng theo mức, phí lắp đặt hay không), nên so sánh giữa công ty cần đọc định nghĩa.',
    '**Tỷ lệ rời bỏ (churn)** và **giữ chân doanh thu ròng (NRR)** cho biết khách cũ còn ở lại và chi tiêu thêm không; tăng trưởng nhờ khách mới nhưng churn cao là tăng trưởng kém bền.',
    'Kiểm tra thêm: chi phí thu hút khách (CAC) so với giá trị trọn đời của khách (LTV), và dòng tiền hoạt động; doanh thu hoãn lại có thể làm dòng tiền đẹp hơn lợi nhuận trong thời kỳ tăng trưởng.',
  ],
  causalChain: [
    { from: 'Khách trả tiền trước cho dịch vụ dài hạn', to: 'Tiền mặt vào ngay, ghi nhận nợ doanh thu hoãn lại', mechanism: 'Tiền đã nhận nhưng nghĩa vụ cung cấp dịch vụ chưa hoàn thành nên chưa là doanh thu.' },
    { from: 'Dịch vụ được cung cấp theo thời gian', to: 'Doanh thu hoãn lại chuyển dần thành doanh thu', mechanism: 'Mỗi kỳ ghi nhận phần tương ứng với dịch vụ đã cung cấp.' },
    { from: 'Khách gia hạn hoặc nâng gói', to: 'Doanh thu định kỳ tăng, NRR tăng', mechanism: 'Doanh thu từ khách hiện hữu mở rộng mà không tốn thêm chi phí thu hút lớn.' },
    { from: 'Khách rời bỏ nhiều', to: 'Doanh thu hoãn lại và ARR đi xuống', mechanism: 'Không có đợt thu trước kế tiếp; doanh thu tương lai giảm trước khi bảng lãi lỗ phản ánh.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư vào doanh nghiệp công nghệ, giáo dục, y tế thu phí trước', effect: 'Cần phân biệt dòng tiền thu trước với doanh thu đã ghi nhận để đánh giá chất lượng tăng trưởng.', direction: 'mixed' },
    { group: 'Khách hàng trả trước', effect: 'Chịu rủi ro đối tác: nếu doanh nghiệp ngừng hoạt động, tiền trả trước có thể không được hoàn đầy đủ.', direction: 'down' },
    { group: 'Doanh nghiệp thu tiền trước', effect: 'Vốn lưu động được cải thiện nhờ khách trả trước, nhưng nghĩa vụ phải cung cấp dịch vụ trong tương lai.', direction: 'up' },
    { group: 'Người phân tích dữ liệu', effect: 'Cần dựng lại chuỗi doanh thu hoãn lại theo kỳ để suy ra đơn hàng mới (billings).', direction: 'up' },
  ],
  indicators: [
    { name: 'Billings = doanh thu + thay đổi doanh thu hoãn lại', why: 'Ước lượng giá trị đơn hàng được lập hóa đơn trong kỳ.', where: 'Báo cáo kết quả kinh doanh và bảng cân đối kế toán' },
    { name: 'Tỷ lệ rời bỏ (churn) và giữ chân doanh thu ròng (NRR)', why: 'Đo độ bền của doanh thu định kỳ.', where: 'Báo cáo thường niên và thuyết trình nhà đầu tư của doanh nghiệp' },
    { name: 'Dòng tiền hoạt động so với lợi nhuận', why: 'Cho biết phần dòng tiền đến từ thu trước chứ không từ lợi nhuận.', where: 'Báo cáo lưu chuyển tiền tệ' },
  ],
  counterpoints: [
    'Doanh thu hoãn lại tăng có thể do chiết khấu để thu tiền sớm hoặc đổi sang gói dài hạn, không phản ánh nhu cầu mới.',
    'ARR, NRR không được kiểm toán và định nghĩa khác nhau; so sánh chéo cần thận trọng.',
    'Với doanh nghiệp có doanh thu theo mùa, doanh thu hoãn lại biến động theo mùa chứ không báo hiệu xu hướng.',
  ],
  glossary: [
    { term: 'Doanh thu hoãn lại', definition: 'Tiền đã thu từ khách nhưng dịch vụ chưa cung cấp, ghi là nợ phải trả.' },
    { term: 'ARR', definition: 'Doanh thu định kỳ hằng năm của các hợp đồng thuê bao hiện có.' },
    { term: 'Churn', definition: 'Tỷ lệ khách hàng (hoặc doanh thu) mất đi trong một kỳ.' },
    { term: 'NRR', definition: 'Tỷ lệ giữ chân doanh thu ròng từ nhóm khách cũ, tính cả nâng gói và rời bỏ.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'deferred-revenue-subscription-metrics-q',
    question: 'Một công ty phần mềm báo doanh thu tăng 10%, nhưng doanh thu hoãn lại giảm 8% và tỷ lệ rời bỏ tăng. Cách đọc hợp lý?',
    options: [
      { id: 'a', text: 'Tăng trưởng mạnh vì doanh thu tăng.', explain: 'Doanh thu ghi nhận phản ánh quá khứ; doanh thu hoãn lại giảm báo hiệu đơn hàng mới và gia hạn yếu.' },
      { id: 'b', text: 'Doanh thu có thể chậm lại ở các kỳ sau; cần xem thêm billings và NRR.', correct: true, explain: 'Đúng. Doanh thu hoãn lại giảm cùng churn tăng là tín hiệu sớm cho doanh thu tương lai.' },
      { id: 'c', text: 'Doanh thu hoãn lại giảm nghĩa là công ty đã trả bớt nợ vay.', explain: 'Doanh thu hoãn lại là nghĩa vụ cung cấp dịch vụ, không phải nợ vay ngân hàng.' },
    ],
  },
  sources: [
    { title: 'IFRS 15 Revenue from Contracts with Customers', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/' },
    { title: 'Deferral (deferred income)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Deferred_income' },
    { title: 'Software as a service', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Software_as_a_service' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 115,
}
