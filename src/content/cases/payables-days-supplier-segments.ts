import type { CaseStudy } from '../types'

/*
 * Công ty và số liệu hoàn toàn giả định. Đơn vị: triệu đồng/năm. Mua hàng 12.000/năm, chi phí vốn giả định 10%/năm.
 * Nhóm X: chiết khấu "2/10 net 30", mua 3.000 ; trước đây trả ngày 10 (lấy chiết khấu)
 * Nhóm Y: giá cố định không chiết khấu, mua 6.000 ; trả ngày 30
 * Nhóm Z: nhà cung cấp nhỏ địa phương, mua 3.000 ; trả ngày 30
 * Số ngày phải trả (DPO) trước: (3.000×10 + 6.000×30 + 3.000×30)/12.000 = 25,0 ngày
 * Phương án "kéo tất cả lên 45 ngày": tiền giải phóng = 20 × 12.000/365 = 657,5 ; theo nhóm: X 35×3.000/365 = 287,7 ; Y 15×6.000/365 = 246,6 ; Z 15×3.000/365 = 123,3 (tổng 657,6 ≈ 657,5 do làm tròn)
 *   mất chiết khấu X: 2% × 3.000 = 60 ; lợi ích tài chính 10% × 657,5 = 65,8 → thuần +5,8 (chưa tính rủi ro Z)
 * Phương án nhắm mục tiêu: X trả ngày 10, Y 45, Z 30 → DPO = (3.000×10 + 6.000×45 + 3.000×30)/12.000 = 32,5 ngày ; tiền giải phóng = 7,5 × 12.000/365 = 246,6 ; lợi ích 10% × 246,6 = 24,7, không mất chiết khấu.
 * Chi phí hiệu dụng bỏ chiết khấu 2/10 net 30: 2/98 × 365/20 = 37,2%/năm ; nếu trả ngày 45: 2/98 × 365/35 = 21,3%/năm.
 * Chỉ tiêu giao đúng hạn đủ số lượng (OTIF) của nhóm Z: 96% → 88% sau khi kéo dài.
 */
export const payablesDaysSupplierSegments: CaseStudy = {
  id: 'payables-days-supplier-segments',
  title: 'Kéo dài hạn trả nhà cung cấp: cải thiện dòng tiền hay mất chiết khấu?',
  domain: 'accounting',
  level: 'junior',
  minutes: 12,
  skills: ['cash-flow', 'segmentation', 'tradeoff'],
  question:
    'Công ty muốn kéo dài hạn trả tất cả nhà cung cấp lên 45 ngày để cải thiện dòng tiền. Việc này giải phóng bao nhiêu tiền, mất bao nhiêu chiết khấu, và nhóm nhà cung cấp nào nên giữ nguyên?',
  summary:
    'So sánh ba nhóm nhà cung cấp theo điều khoản và mức nhạy cảm, tính tiền giải phóng và chi phí bỏ chiết khấu, rồi chọn phương án nhắm mục tiêu thay vì kéo dài đồng loạt.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'CFO đề xuất: *"Trả tất cả nhà cung cấp ở ngày 45 để dồn tiền mặt."* Bạn cần phân tích theo nhóm nhà cung cấp, vì điều khoản và mức phụ thuộc khác nhau.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Mọi số liệu đều **giả định, mô phỏng**. Đơn vị: triệu đồng/năm; chi phí vốn giả định 10%/năm. Điều khoản thực tế cần xem hợp đồng.',
        },
        {
          kind: 'table',
          title: 'Ba nhóm nhà cung cấp',
          columns: [
            { key: 'g', label: 'Nhóm' },
            { key: 'buy', label: 'Mua/năm', align: 'right' },
            { key: 'term', label: 'Điều khoản' },
            { key: 'pay', label: 'Hiện trả ở ngày', align: 'right' },
          ],
          rows: [
            { g: 'X — có chiết khấu', buy: '3.000', term: '2/10 net 30 (giảm 2% nếu trả trong 10 ngày)', pay: '10' },
            { g: 'Y — giá cố định', buy: '6.000', term: 'net 30, không chiết khấu', pay: '30' },
            { g: 'Z — nhỏ, địa phương', buy: '3.000', term: 'net 30', pay: '30' },
            { g: 'Cộng', buy: '12.000', term: '', pay: '25,0 (bình quân gia quyền)' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: tiền giải phóng so với chi phí',
      blocks: [
        {
          kind: 'formula',
          expression: 'Tiền giải phóng = Số ngày kéo dài × Mua hàng/năm / 365',
          note: 'Đó là phần vốn lưu động không phải bỏ ra. Phải so với **chi phí**: chiết khấu bị mất, quan hệ nhà cung cấp, và rủi ro giao hàng.',
        },
        {
          kind: 'quiz',
          id: 'payables-q1',
          question: 'Chiết khấu 2/10 net 30: trả ngày 10 hưởng 2% thay vì trả ngày 30. Hiểu thế nào là đúng?',
          options: [
            { id: 'a', text: 'Bỏ chiết khấu tương đương vay 20 ngày với lãi hiệu dụng khoảng 37%/năm (2/98 × 365/20).', correct: true, explain: 'Đúng. Phần 2% trên số tiền 98% cho 20 ngày chậm, quy năm ≈ 37,2%, thường cao hơn chi phí vốn thông thường.' },
            { id: 'b', text: 'Chiết khấu 2% chỉ là khoản nhỏ nên bỏ qua.', explain: '2% trong thời gian ngắn là lãi suất năm rất lớn.' },
            { id: 'c', text: 'Chiết khấu chỉ có ý nghĩa với nhà cung cấp lớn.', explain: 'Ý nghĩa nằm ở tỷ lệ, không ở quy mô nhà cung cấp.' },
          ],
        },
      ],
    },
    {
      id: 'stretch-all',
      kind: 'analysis',
      title: 'Bước 1 — Phương án kéo dài tất cả lên 45 ngày',
      blocks: [
        {
          kind: 'table',
          title: 'Tiền giải phóng và chi phí theo nhóm',
          columns: [
            { key: 'g', label: 'Nhóm' },
            { key: 'days', label: 'Kéo dài thêm (ngày)', align: 'right' },
            { key: 'cash', label: 'Tiền giải phóng', align: 'right' },
            { key: 'cost', label: 'Chiết khấu mất', align: 'right' },
          ],
          rows: [
            { g: 'X (10 → 45)', days: 35, cash: '287,7', cost: '60,0' },
            { g: 'Y (30 → 45)', days: 15, cash: '246,6', cost: '0' },
            { g: 'Z (30 → 45)', days: 15, cash: '123,3', cost: '0' },
            { g: 'Cộng', days: '20 (bình quân)', cash: '657,5', cost: '60,0' },
          ],
          caption: 'Lợi ích tài chính 10% × 657,5 = 65,8, trừ chiết khấu mất 60,0: thuần chỉ +5,8 triệu/năm, chưa tính bất kỳ rủi ro nào của nhóm Z.',
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Bình quân che mất nhóm X',
          md: 'Con số "giải phóng 657,5" nghe hấp dẫn, nhưng 287,7 trong đó đến từ chính nhóm X, vốn đang được trả sớm để lấy chiết khấu có chi phí hiệu dụng ~37%/năm (hoặc 21,3% nếu trả ngày 45), cao hơn chi phí vốn 10%.',
        },
      ],
    },
    {
      id: 'targeted',
      kind: 'analysis',
      title: 'Bước 2 — So phương án nhắm mục tiêu và rủi ro nhóm Z',
      blocks: [
        {
          kind: 'table',
          title: 'Ba phương án',
          columns: [
            { key: 'opt', label: 'Phương án' },
            { key: 'dpo', label: 'DPO bình quân (ngày)', align: 'right' },
            { key: 'cash', label: 'Tiền giải phóng', align: 'right' },
            { key: 'net', label: 'Lợi ích thuần (triệu/năm)', align: 'right' },
          ],
          rows: [
            { opt: 'Giữ nguyên', dpo: '25,0', cash: '0', net: '0' },
            { opt: 'Kéo tất cả lên 45 ngày', dpo: '45,0', cash: '657,5', net: '+5,8 (trước rủi ro Z)' },
            { opt: 'X ngày 10, Y ngày 45, Z ngày 30', dpo: '32,5', cash: '246,6', net: '+24,7' },
          ],
          highlight: [{ row: 2, tone: 'positive' }],
          caption: 'Phương án nhắm mục tiêu giải phóng ít tiền hơn nhưng lợi ích thuần cao hơn gần 4,3 lần và không đụng nhóm nhạy cảm.',
        },
        {
          kind: 'text',
          md: 'Nhóm Z là nhà cung cấp nhỏ, vốn mỏng; trong dữ liệu giả định, sau khi kéo dài lên 45 ngày, tỷ lệ **giao đúng hạn đủ số lượng (OTIF)** của Z giảm từ 96% xuống 88%. Đây là giả thuyết "kéo dài làm Z giao chậm"; để kiểm tra cần so với nhóm Z không bị kéo dài (nhóm đối chứng) hoặc xem trước/sau cùng thời điểm, vì giảm OTIF có thể do mùa vụ.',
        },
        {
          kind: 'quiz',
          id: 'payables-q2',
          question: 'Kết luận nào về phương án phù hợp nhất với dữ liệu?',
          options: [
            { id: 'a', text: 'Kéo dài riêng nhóm Y (giá cố định, đủ lớn), giữ X trả sớm lấy chiết khấu, giữ Z ở 30 ngày.', correct: true, explain: 'Đúng. Mỗi nhóm có điều kiện khác nhau; chỉ Y cho tiền giải phóng không tốn chiết khấu và không có cờ rủi ro.' },
            { id: 'b', text: 'Kéo dài tất cả vì giải phóng nhiều tiền nhất.', explain: 'Bỏ qua chiết khấu mất và rủi ro nhóm Z; lợi ích thuần gần bằng 0.' },
            { id: 'c', text: 'Không đổi gì vì mọi thay đổi đều rủi ro.', explain: 'Có phương án không tốn chiết khấu và không đụng nhóm nhạy cảm.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: chính sách trả tiền theo nhóm nhà cung cấp',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận trên dữ liệu giả định:** phương án nhắm mục tiêu giải phóng 246,6 triệu (DPO từ 25,0 lên 32,5 ngày), lợi ích thuần khoảng 24,7 triệu/năm, trong khi kéo dài đồng loạt chỉ lợi khoảng 5,8 triệu trước rủi ro. Cần người có chuyên môn rà các điều khoản trong hợp đồng thực tế (phạt chậm thanh toán, quy định trả chậm với doanh nghiệp nhỏ).',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Phân nhóm nhà cung cấp theo điều khoản chiết khấu, quy mô và mức phụ thuộc', owner: 'Trưởng phòng mua hàng', metric: 'Số nhà cung cấp theo nhóm', threshold: '100% nhà cung cấp có > 100 triệu/năm đã phân nhóm' },
            { action: 'So chi phí hiệu dụng bỏ chiết khấu với chi phí vốn trước khi đổi ngày trả', owner: 'Kế toán thanh toán', metric: 'Chi phí hiệu dụng bỏ chiết khấu', threshold: '> chi phí vốn thì trả sớm lấy chiết khấu' },
            { action: 'Theo dõi OTIF và giá nhà cung cấp nhóm nhạy cảm sau mỗi thay đổi điều khoản', owner: 'Quản lý chuỗi cung ứng', metric: 'OTIF của nhóm Z', threshold: 'Giảm > 3 điểm % thì khôi phục điều khoản' },
          ],
        },
        {
          kind: 'quiz',
          id: 'payables-q3',
          question: 'Chỉ số nào cho biết kéo dài hạn trả đã gây hại nhà cung cấp nhỏ?',
          options: [
            { id: 'a', text: 'OTIF và thay đổi giá/điều kiện từ nhóm đó, so với nhóm không bị kéo dài.', correct: true, explain: 'Đúng. Đo kết quả vận hành thực của nhóm bị ảnh hưởng, có đối chứng.' },
            { id: 'b', text: 'Tổng DPO toàn công ty.', explain: 'DPO chung tăng là mục tiêu, không phản ánh tác động lên từng nhà cung cấp.' },
            { id: 'c', text: 'Số lượng email phàn nàn.', explain: 'Dữ liệu định tính hữu ích nhưng không thay cho chỉ số đo được.' },
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
            { title: 'Đánh giá chỉ bằng DPO bình quân', why: 'Bình quân che mất nhóm có chiết khấu và nhóm nhạy cảm.', instead: 'Tính theo nhóm nhà cung cấp.' },
            { title: 'Coi chiết khấu thanh toán sớm là khoản nhỏ', why: '2% cho 20 ngày tương đương lãi suất hiệu dụng khoảng 37% năm.', instead: 'Quy ra lãi suất năm và so với chi phí vốn.' },
            { title: 'Bỏ qua tác động lên chuỗi cung ứng', why: 'Nhà cung cấp nhỏ có thể giao chậm hoặc tăng giá.', instead: 'Theo dõi OTIF và giá sau thay đổi.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Tiền giải phóng khi kéo dài hạn trả = số ngày × mua hàng/365, nhưng phải trừ chiết khấu mất và rủi ro.',
    'Chiết khấu thanh toán sớm thường có chi phí hiệu dụng rất cao; quy ra lãi suất năm trước khi bỏ.',
    'Phân nhóm nhà cung cấp và chọn phương án nhắm mục tiêu thay vì kéo dài đồng loạt.',
  ],
  references: [
    { title: 'Days payable outstanding', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Days_payable_outstanding', note: 'Định nghĩa số ngày phải trả (DPO) và cách đọc trong vốn lưu động.' },
    { title: 'Trade credit', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Trade_credit', note: 'Giải thích tín dụng thương mại và điều khoản chiết khấu kiểu "2/10 net 30".' },
    { title: 'Cash conversion cycle', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Cash_conversion_cycle', note: 'Cho thấy DPO là một thành phần của chu kỳ chuyển đổi tiền mặt.' },
  ],
}
