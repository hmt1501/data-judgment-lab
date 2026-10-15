import type { CaseStudy } from '../types'

/*
 * Công ty và số liệu hoàn toàn giả định. Đơn vị: tỷ đồng. Vòng quay = Giá vốn / Hàng tồn kho bình quân ; số ngày = 365 / vòng quay.
 * Năm trước: Thời trang GV 3.000 / tồn 500 = 6,0 ; Gia dụng 4.000 / 500 = 8,0 ; Điện tử phụ kiện (C) 2.000 / 500 = 4,0
 *            Tổng 9.000 / 1.500 = 6,0 vòng (60,8 ngày)
 * Năm nay  : Thời trang 3.000 / 500 = 6,0 ; Gia dụng 4.000 / 500 = 8,0 ; C 2.600 / 920 = 2,83 (2,8)
 *            Tổng 9.600 / 1.920 = 5,0 vòng (73,0 ngày)
 * Tỷ trọng tồn kho của C: 500/1.500 = 33,3% → 920/1.920 = 47,9%
 * Tuổi tồn kho của C: năm trước 0–90 ngày 60% ; 91–180 22% ; >180 18% ; năm nay 34% ; 25% ; 41% (>180 ngày = 920 × 41% ≈ 377 tỷ; năm trước 500 × 18% = 90 tỷ)
 */
export const inventoryTurnoverByCategory: CaseStudy = {
  id: 'inventory-turnover-by-category',
  title: 'Vòng quay hàng tồn kho giảm từ 6,0 xuống 5,0: ngành hàng nào kéo, và có phải hàng chậm luân chuyển?',
  domain: 'accounting',
  level: 'junior',
  minutes: 11,
  skills: ['segmentation', 'mix-effect', 'cash-flow'],
  question:
    'Vòng quay hàng tồn kho toàn công ty giảm từ 6,0 xuống 5,0 vòng/năm. Ngành hàng nào gây ra, đó là hàng tồn lâu hay chỉ mua gối đầu theo mùa, và cần dữ liệu gì để phân biệt?',
  summary:
    'Tách vòng quay theo ngành hàng, đọc tuổi tồn kho, đối chiếu giả thuyết mua gối đầu theo mùa, và đưa ra hành động theo dữ liệu chứ không theo cảm giác "tồn kho nhiều".',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Công ty bán lẻ giả định có ba nhóm hàng. Chỉ số **vòng quay hàng tồn kho** toàn công ty giảm, đồng nghĩa số ngày tồn tăng từ khoảng 61 lên 73 ngày. Giám đốc hỏi: *"Có phải hàng bán chậm đi? Nhóm nào?"*',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Mọi số liệu đều **giả định, mô phỏng**. Đơn vị: tỷ đồng.',
        },
        {
          kind: 'formula',
          expression: 'Vòng quay = Giá vốn hàng bán / Hàng tồn kho bình quân ; Số ngày tồn = 365 / Vòng quay',
        },
        {
          kind: 'table',
          title: 'Toàn công ty',
          columns: [
            { key: 'item', label: 'Chỉ tiêu' },
            { key: 'y0', label: 'Năm trước', align: 'right' },
            { key: 'y1', label: 'Năm nay', align: 'right' },
          ],
          rows: [
            { item: 'Giá vốn hàng bán', y0: '9.000', y1: '9.600' },
            { item: 'Hàng tồn kho bình quân', y0: '1.500', y1: '1.920' },
            { item: 'Vòng quay', y0: '6,0', y1: '5,0' },
            { item: 'Số ngày tồn', y0: '60,8', y1: '73,0' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: vòng quay chung là trung bình của nhiều nhóm',
      blocks: [
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Phân khúc**: tính vòng quay riêng cho từng ngành hàng, vì mỗi nhóm có đặc điểm khác nhau.',
            '**Mix**: tỷ trọng tồn kho của nhóm quay chậm có tăng không? Vòng quay chung giảm có thể do mix.',
            '**Tuổi tồn kho**: vòng quay thấp do hàng cũ hay do mua gối đầu? Xem phân bổ theo tuổi.',
            '**Giả thuyết mùa vụ**: tồn cuối kỳ cao trước mùa bán chạy có thể hợp lý.',
          ],
        },
        {
          kind: 'quiz',
          id: 'inventory-q1',
          question: 'Vòng quay chung giảm. Việc đầu tiên nên làm?',
          options: [
            { id: 'a', text: 'Tính vòng quay riêng theo ngành hàng và so tỷ trọng tồn kho giữa hai năm.', correct: true, explain: 'Đúng. Phân khúc cho biết chỗ nào kéo, và tỷ trọng cho biết có hiệu ứng mix không.' },
            { id: 'b', text: 'Yêu cầu cả công ty giảm tồn kho 20%.', explain: 'Hành động đồng loạt khi chưa biết nguyên nhân có thể làm hỏng nhóm đang quay tốt.' },
            { id: 'c', text: 'Tăng giá vốn để vòng quay cao hơn.', explain: 'Thao túng chỉ số thay vì giải quyết nguyên nhân.' },
          ],
        },
      ],
    },
    {
      id: 'segment',
      kind: 'analysis',
      title: 'Bước 1 — Vòng quay theo ngành hàng và hiệu ứng mix',
      blocks: [
        {
          kind: 'table',
          title: 'Vòng quay theo ngành hàng',
          columns: [
            { key: 'cat', label: 'Ngành hàng' },
            { key: 'y0', label: 'Năm trước (GV / tồn → vòng)', align: 'right' },
            { key: 'y1', label: 'Năm nay (GV / tồn → vòng)', align: 'right' },
          ],
          rows: [
            { cat: 'Thời trang', y0: '3.000 / 500 → 6,0', y1: '3.000 / 500 → 6,0' },
            { cat: 'Gia dụng', y0: '4.000 / 500 → 8,0', y1: '4.000 / 500 → 8,0' },
            { cat: 'Điện tử phụ kiện (C)', y0: '2.000 / 500 → 4,0', y1: '2.600 / 920 → 2,8' },
            { cat: 'Toàn công ty', y0: '9.000 / 1.500 → 6,0', y1: '9.600 / 1.920 → 5,0' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Hai nhóm đầu không đổi. Toàn bộ mức giảm đến từ nhóm C: tồn kho tăng 84% (500 → 920) trong khi giá vốn chỉ tăng 30% (2.000 → 2.600).',
        },
        {
          kind: 'chart',
          title: 'Tỷ trọng tồn kho của nhóm C (%)',
          type: 'bar',
          xKey: 'y',
          series: [{ key: 'share', label: 'Tỷ trọng tồn kho nhóm C' }],
          unit: '%',
          data: [
            { y: 'Năm trước', share: 33.3 },
            { y: 'Năm nay', share: 47.9 },
          ],
          caption: 'C chiếm gần một nửa tồn kho năm nay. Đây là phần quay chậm nhất nên kéo vòng quay chung xuống.',
        },
      ],
    },
    {
      id: 'aging',
      kind: 'analysis',
      title: 'Bước 2 — Tuổi tồn kho của nhóm C: hàng cũ hay mua gối đầu?',
      blocks: [
        {
          kind: 'table',
          title: 'Phân bổ tồn kho nhóm C theo tuổi',
          columns: [
            { key: 'age', label: 'Tuổi tồn kho' },
            { key: 'y0', label: 'Năm trước', align: 'right' },
            { key: 'y1', label: 'Năm nay', align: 'right' },
          ],
          rows: [
            { age: '0–90 ngày', y0: '60%', y1: '34%' },
            { age: '91–180 ngày', y0: '22%', y1: '25%' },
            { age: '> 180 ngày', y0: '18%', y1: '41%' },
            { age: 'Giá trị > 180 ngày (tỷ đồng)', y0: '90', y1: '377' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Giá trị tồn quá 180 ngày tăng từ 90 lên khoảng 377 tỷ (920 × 41%). Giả thuyết "mua gối đầu" sẽ dự báo tỷ lệ 0–90 ngày tăng, ở đây lại giảm.',
        },
        {
          kind: 'text',
          md: 'Giả thuyết **mua gối đầu theo mùa** bị yếu đi vì hàng mới mua (0–90 ngày) giảm tỷ trọng còn hàng cũ tăng mạnh. Nhưng cần xác nhận bằng: tồn kho cuối mỗi tháng (không chỉ trung bình hai điểm), kế hoạch ra sản phẩm mới và lịch sử bán theo mùa. Hàng tồn lâu còn có rủi ro phải ghi giảm giá trị: theo chuẩn mực hàng tồn kho (IAS 2) giá trị ghi sổ không vượt quá giá trị thuần có thể thực hiện.',
        },
        {
          kind: 'quiz',
          id: 'inventory-q2',
          question: 'Dữ liệu nào bác bỏ giả thuyết "tồn kho tăng vì mua gối đầu theo mùa"?',
          options: [
            { id: 'a', text: 'Tỷ trọng hàng tồn quá 180 ngày tăng mạnh, trong khi tỷ trọng hàng 0–90 ngày giảm.', correct: true, explain: 'Đúng. Mua gối đầu làm tăng hàng mới, không làm tăng hàng cũ.' },
            { id: 'b', text: 'Giá vốn toàn công ty tăng 6,7%.', explain: 'Giá vốn tăng không giúp phân biệt hàng cũ với hàng mới.' },
            { id: 'c', text: 'Vòng quay của Gia dụng không đổi.', explain: 'Nhóm khác không đổi không liên quan đến lý do tồn của C.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: hành động theo nhóm và theo tuổi',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận trên dữ liệu giả định:** vòng quay chung giảm vì nhóm C — tồn kho tăng 84%, tỷ trọng tồn kho từ 33,3% lên 47,9% và phần quá 180 ngày tăng từ 90 lên khoảng 377 tỷ. Thời trang và Gia dụng không đổi. Việc cần làm là xử lý tồn lâu của C và kiểm soát mua hàng mới, không phải cắt tồn kho toàn công ty.',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Lập kế hoạch xử lý hàng tồn quá 180 ngày của nhóm C (khuyến mãi, trả nhà cung cấp, gom lô)', owner: 'Trưởng ngành hàng C', metric: 'Giá trị tồn > 180 ngày', threshold: 'Giảm từ 377 tỷ xuống < 200 tỷ trong 2 quý' },
            { action: 'Đặt ngưỡng mua hàng theo số ngày tồn mục tiêu cho từng nhóm', owner: 'Trưởng phòng mua hàng', metric: 'Số ngày tồn theo nhóm', threshold: 'Nhóm C ≤ 90 ngày; vượt ngưỡng thì cần duyệt' },
            { action: 'Đánh giá ghi giảm giá trị hàng tồn (so sánh giá gốc với giá trị thuần có thể thực hiện) cho nhóm tồn lâu', owner: 'Kế toán trưởng', metric: 'Dự phòng giảm giá / giá trị tồn > 180 ngày', threshold: 'Rà soát hằng quý' },
          ],
        },
        {
          kind: 'quiz',
          id: 'inventory-q3',
          question: 'Vì sao báo cáo vòng quay nên đi kèm tuổi tồn kho theo nhóm?',
          options: [
            { id: 'a', text: 'Vì vòng quay một số không phân biệt hàng mới tích trữ với hàng cũ khó bán.', correct: true, explain: 'Đúng. Hai nguyên nhân cho cùng một vòng quay, nhưng hành động xử lý khác nhau.' },
            { id: 'b', text: 'Vì vòng quay không bao giờ chính xác.', explain: 'Vòng quay đúng, chỉ là chưa đủ để chẩn đoán.' },
            { id: 'c', text: 'Vì tuổi tồn kho thay cho vòng quay.', explain: 'Hai chỉ số bổ sung nhau, không thay thế.' },
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
            { title: 'Chỉ đọc vòng quay toàn công ty', why: 'Một nhóm quay chậm có thể làm giảm chỉ số chung dù các nhóm khác ổn.', instead: 'Tính theo ngành hàng và xem tỷ trọng tồn kho.' },
            { title: 'Dùng tồn kho trung bình hai điểm cho hàng có mùa vụ', why: 'Tồn đầu và cuối năm có thể rơi vào đỉnh/đáy mùa.', instead: 'Dùng trung bình 12 tháng.' },
            { title: 'Đồng nhất tồn nhiều với tồn xấu', why: 'Tồn gối đầu cho mùa bán chạy khác với hàng lỗi thời.', instead: 'Xem tuổi tồn kho và lịch sử bán theo mùa.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Vòng quay chung là trung bình của các nhóm; tách theo ngành hàng và xem tỷ trọng tồn kho.',
    'Tuổi tồn kho phân biệt hàng tích trữ theo mùa với hàng chậm luân chuyển.',
    'Hàng tồn lâu có rủi ro ghi giảm giá trị; hành động nên nhắm vào nhóm gây ra chứ không phải toàn công ty.',
  ],
  references: [
    { title: 'IAS 2 Inventories', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/', note: 'Trang chuẩn mực hàng tồn kho, trong đó có nguyên tắc ghi nhận theo giá thấp hơn giữa giá gốc và giá trị thuần có thể thực hiện.' },
    { title: 'Inventory turnover', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Inventory_turnover', note: 'Định nghĩa vòng quay hàng tồn kho và số ngày tồn kho.' },
    { title: 'Cash conversion cycle', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Cash_conversion_cycle', note: 'Giải thích vai trò của số ngày tồn kho trong chu kỳ chuyển đổi tiền mặt.' },
  ],
}
