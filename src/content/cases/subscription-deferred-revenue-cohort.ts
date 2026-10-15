import type { CaseStudy } from '../types'

/*
 * Công ty và số liệu hoàn toàn giả định. Đơn vị: triệu đồng. Gói năm trả trước 1,2 triệu đồng/khách = 0,1 triệu/tháng.
 * Giả định đơn giản: ghi nhận đều theo tháng, bắt đầu từ chính tháng bán (nghĩa vụ thực hiện được đáp ứng dần theo thời gian).
 * Gói bán: T1 100 ; T2 150 ; T3 250 → tiền thu 120 ; 180 ; 300 (tổng 600)
 * Doanh thu ghi nhận: T1 100×0,1 = 10 ; T2 (100+150)×0,1 = 25 ; T3 (100+150+250)×0,1 = 50 ; lũy kế 10 ; 35 ; 85
 * Doanh thu chưa thực hiện cuối tháng = tiền thu lũy kế − doanh thu lũy kế: T1 120−10 = 110 ; T2 300−35 = 265 ; T3 600−85 = 515
 * Ma trận cohort: T1 cohort 10/10/10 ; T2 0/15/15 ; T3 0/0/25 → cột 10 ; 25 ; 50 ✓
 * Hoàn tiền giả định: T3 hoàn cho 10 gói của cohort T1 còn lại 9 tháng: 10×0,1×9 = 9 triệu (giảm doanh thu chưa thực hiện).
 */
export const subscriptionDeferredRevenueCohort: CaseStudy = {
  id: 'subscription-deferred-revenue-cohort',
  title: 'Bán gói năm trả trước: "doanh thu" và "tiền thu" khác nhau bao nhiêu?',
  domain: 'accounting',
  level: 'junior',
  minutes: 11,
  skills: ['revenue-recognition', 'cohort', 'cash-flow'],
  question:
    'Quý này công ty thu được 600 triệu đồng từ gói năm, nhưng báo cáo chỉ ghi nhận 85 triệu doanh thu. Chênh lệch này nằm ở đâu, và đọc đúng doanh thu, tiền thu, doanh thu chưa thực hiện theo cohort tháng bán như thế nào?',
  summary:
    'Dựng ma trận cohort tháng bán × tháng ghi nhận, tính doanh thu chưa thực hiện, rồi phân biệt "bán được" với "đã ghi nhận" và những yếu tố làm lệch như hoàn tiền.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Công ty phần mềm giả định bán **gói năm 1,2 triệu đồng/khách, thu tiền trước**. Sếp xem bảng cuối quý và hỏi: *"Mình thu 600 triệu mà doanh thu chỉ 85 triệu, có phải bị mất đâu không?"* Bạn cần giải thích bằng cohort.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Mọi số liệu đều **giả định, mô phỏng**. Cách ghi nhận cụ thể trong thực tế phụ thuộc hợp đồng và đánh giá của kế toán; cần người có chuyên môn rà.',
        },
        {
          kind: 'table',
          title: 'Gói bán và tiền thu theo tháng (triệu đồng)',
          columns: [
            { key: 'm', label: 'Tháng bán' },
            { key: 'n', label: 'Số gói', align: 'right' },
            { key: 'cash', label: 'Tiền thu', align: 'right' },
          ],
          rows: [
            { m: 'T1', n: 100, cash: 120 },
            { m: 'T2', n: 150, cash: 180 },
            { m: 'T3', n: 250, cash: 300 },
            { m: 'Cộng', n: 500, cash: 600 },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: tiền thu ≠ doanh thu',
      blocks: [
        {
          kind: 'formula',
          expression: 'Doanh thu chưa thực hiện (cuối kỳ) = Tiền thu lũy kế − Doanh thu đã ghi nhận lũy kế',
          note: 'Khi khách trả trước cho dịch vụ cung cấp theo thời gian, công ty ghi nhận một **khoản phải trả (nghĩa vụ phải cung cấp dịch vụ)** và chuyển dần thành doanh thu khi dịch vụ được thực hiện. Đó là nguyên tắc của IFRS 15.',
        },
        {
          kind: 'quiz',
          id: 'subscription-q1',
          question: 'Khách trả 1,2 triệu cho gói 12 tháng. Cuối tháng đầu tiên, công ty nên ghi nhận bao nhiêu doanh thu (với giả định ghi nhận đều theo tháng)?',
          options: [
            { id: 'a', text: '0,1 triệu; phần còn lại là doanh thu chưa thực hiện.', correct: true, explain: 'Đúng. 1,2 / 12 = 0,1 triệu mỗi tháng; 1,1 triệu còn lại là khoản phải cung cấp dịch vụ.' },
            { id: 'b', text: '1,2 triệu vì tiền đã vào tài khoản.', explain: 'Tiền thu không đồng nghĩa với doanh thu khi dịch vụ chưa cung cấp xong.' },
            { id: 'c', text: '0 vì khách chưa dùng hết gói.', explain: 'Dịch vụ cung cấp theo thời gian nên doanh thu tăng dần theo từng tháng đã cung cấp.' },
          ],
        },
      ],
    },
    {
      id: 'matrix',
      kind: 'analysis',
      title: 'Bước 1 — Ma trận cohort tháng bán × tháng ghi nhận',
      blocks: [
        {
          kind: 'table',
          title: 'Doanh thu ghi nhận theo cohort (triệu đồng)',
          columns: [
            { key: 'c', label: 'Cohort bán' },
            { key: 't1', label: 'T1', align: 'right' },
            { key: 't2', label: 'T2', align: 'right' },
            { key: 't3', label: 'T3', align: 'right' },
          ],
          rows: [
            { c: 'T1 (100 gói × 0,1)', t1: 10, t2: 10, t3: 10 },
            { c: 'T2 (150 gói × 0,1)', t1: 0, t2: 15, t3: 15 },
            { c: 'T3 (250 gói × 0,1)', t1: 0, t2: 0, t3: 25 },
            { c: 'Doanh thu tháng', t1: 10, t2: 25, t3: 50 },
          ],
          highlight: [{ row: 3, tone: 'neutral' }],
          caption: 'Doanh thu tháng 3 gồm cả ba cohort. Một cohort bán càng sớm, càng đóng góp doanh thu nhiều tháng.',
        },
        {
          kind: 'chart',
          title: 'Tiền thu và doanh thu ghi nhận theo tháng (triệu đồng)',
          type: 'bar',
          xKey: 'm',
          series: [
            { key: 'cash', label: 'Tiền thu' },
            { key: 'rev', label: 'Doanh thu ghi nhận' },
          ],
          unit: '',
          data: [
            { m: 'T1', cash: 120, rev: 10 },
            { m: 'T2', cash: 180, rev: 25 },
            { m: 'T3', cash: 300, rev: 50 },
          ],
          caption: 'Tiền thu tăng nhanh hơn doanh thu: doanh thu bám sau tiền thu.',
        },
      ],
    },
    {
      id: 'deferred',
      kind: 'analysis',
      title: 'Bước 2 — Doanh thu chưa thực hiện và giả thuyết "mất tiền"',
      blocks: [
        {
          kind: 'table',
          title: 'Từ tiền thu đến doanh thu chưa thực hiện (triệu đồng, lũy kế)',
          columns: [
            { key: 'm', label: 'Cuối tháng' },
            { key: 'cash', label: 'Tiền thu lũy kế', align: 'right' },
            { key: 'rev', label: 'Doanh thu lũy kế', align: 'right' },
            { key: 'def', label: 'Chưa thực hiện', align: 'right' },
          ],
          rows: [
            { m: 'T1', cash: 120, rev: 10, def: 110 },
            { m: 'T2', cash: 300, rev: 35, def: 265 },
            { m: 'T3', cash: 600, rev: 85, def: 515 },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: '515 triệu là nghĩa vụ phải phục vụ khách trong các tháng sau, không phải tiền mất. Nó sẽ chuyển dần thành doanh thu.',
        },
        {
          kind: 'text',
          md: 'Giả thuyết cần kiểm: *"có khách hủy giữa chừng và đòi hoàn tiền không?"*. Nếu có, **doanh thu chưa thực hiện** giảm tương ứng (tiền hoàn trả), doanh thu đã ghi nhận không đổi. Giả sử trong T3 hoàn tiền cho 10 gói của cohort T1 còn 9 tháng chưa dùng (đã dùng T1–T3): 10 × 0,1 × 9 = **9 triệu** bị rút khỏi khoản chưa thực hiện; doanh thu các tháng sau của cohort này giảm theo.',
        },
        {
          kind: 'quiz',
          id: 'subscription-q2',
          question: 'Sếp muốn dự báo doanh thu tháng 4 nếu không bán thêm gói nào. Cách nào hợp lý?',
          options: [
            { id: 'a', text: 'Cộng doanh thu hằng tháng của các cohort còn hiệu lực: (100 + 150 + 250) × 0,1 = 50 triệu (trừ phần hoàn tiền/hủy).', correct: true, explain: 'Đúng. Doanh thu tháng sau có thể ước tính từ ma trận cohort mà không cần bán thêm.' },
            { id: 'b', text: 'Lấy tiền thu T3 = 300 triệu.', explain: 'Tiền thu không phải doanh thu của tháng 4.' },
            { id: 'c', text: 'Gấp đôi doanh thu tháng 3.', explain: 'Không có cơ sở; cohort không tự nhân đôi.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: báo cáo có đủ ba số và cohort',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận trên dữ liệu giả định:** chênh lệch 600 − 85 = 515 triệu là doanh thu chưa thực hiện, không phải thất thoát. Báo cáo nên luôn hiển thị cạnh nhau **tiền thu, doanh thu ghi nhận, doanh thu chưa thực hiện** cùng ma trận cohort. Cách ghi nhận cụ thể (đều theo tháng, theo mức sử dụng…) phải dựa vào hợp đồng và chính sách kế toán của công ty.',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Thêm ba cột (tiền thu, doanh thu, chưa thực hiện) vào báo cáo bán hàng tháng', owner: 'Kế toán doanh thu', metric: 'Doanh thu chưa thực hiện cuối kỳ', threshold: 'Số dư khớp với ma trận cohort, sai lệch < 1%' },
            { action: 'Duy trì ma trận cohort để dự báo doanh thu các tháng sau', owner: 'Data analyst tài chính', metric: 'Sai lệch dự báo doanh thu tháng kế', threshold: '< 3% so với thực tế' },
            { action: 'Theo dõi hoàn tiền/hủy theo cohort', owner: 'Kế toán doanh thu', metric: 'Tỷ lệ hoàn tiền theo cohort', threshold: '> 3% thì điều tra nguyên nhân và điều chỉnh dự báo' },
          ],
        },
        {
          kind: 'quiz',
          id: 'subscription-q3',
          question: 'Báo cáo đang ghi "doanh thu bán gói năm = tiền thu". Rủi ro chính là gì?',
          options: [
            { id: 'a', text: 'Doanh thu bị khai quá sớm và lợi nhuận quý bị thổi phồng so với phần dịch vụ đã cung cấp.', correct: true, explain: 'Đúng. Đó là lỗi ghi nhận doanh thu theo tiền thu thay vì theo việc thực hiện nghĩa vụ.' },
            { id: 'b', text: 'Không có rủi ro vì tổng cuối cùng bằng nhau.', explain: 'Tổng cả vòng đời bằng nhau, nhưng thời điểm sai làm báo cáo từng kỳ sai.' },
            { id: 'c', text: 'Doanh thu bị khai thấp.', explain: 'Ngược lại: ghi theo tiền thu làm doanh thu cao sớm.' },
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
            { title: 'Đồng nhất tiền thu với doanh thu', why: 'Gói trả trước tạo tiền thu lớn nhưng dịch vụ cung cấp dần.', instead: 'Báo cáo cả tiền thu, doanh thu, doanh thu chưa thực hiện.' },
            { title: 'Quên hoàn tiền/hủy khi dự báo', why: 'Doanh thu tương lai của cohort giảm khi khách hủy.', instead: 'Theo dõi tỷ lệ hủy theo cohort và trừ vào dự báo.' },
            { title: 'Đọc tăng trưởng doanh thu mà bỏ qua cohort mới', why: 'Tháng bán mạnh chưa phản ánh ngay vào doanh thu.', instead: 'Dùng ma trận cohort để thấy doanh thu sắp tới.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Tiền thu trước chưa phải doanh thu; phần chưa cung cấp dịch vụ là doanh thu chưa thực hiện.',
    'Ma trận cohort tháng bán × tháng ghi nhận cho phép dự báo doanh thu các tháng sau.',
    'Hoàn tiền và hủy giảm doanh thu chưa thực hiện; phải theo dõi theo cohort.',
  ],
  references: [
    { title: 'IFRS 15 Revenue from Contracts with Customers', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/', note: 'Trang chuẩn mực về ghi nhận doanh thu khi (hoặc trong lúc) nghĩa vụ thực hiện được đáp ứng.' },
    { title: 'Deferred income', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Deferred_income', note: 'Giải thích doanh thu chưa thực hiện là khoản nhận trước cho hàng hóa/dịch vụ chưa cung cấp.' },
    { title: 'Accrual', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Accrual', note: 'Nền của kế toán dồn tích: ghi nhận theo thời điểm phát sinh thay vì thời điểm thu tiền.' },
  ],
}
