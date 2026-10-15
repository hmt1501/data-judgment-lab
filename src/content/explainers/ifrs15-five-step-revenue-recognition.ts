import type { Explainer } from '../../../shared/explainer'

export const ifrs15FiveStepRevenueRecognition: Explainer = {
  id: 'ifrs15-five-step-revenue-recognition',
  slug: 'ifrs15-five-step-revenue-recognition',
  question: 'Doanh thu được ghi nhận khi nào? Mô hình 5 bước của IFRS 15 hiểu đơn giản là gì?',
  title: 'Ghi nhận doanh thu 5 bước (IFRS 15): doanh thu theo bàn giao, không theo tiền về',
  topic: 'markets-investing',
  tldr: 'IFRS 15 đặt nguyên tắc: doanh thu phản ánh việc **bàn giao hàng hóa/dịch vụ đã hứa** cho khách hàng, đo bằng khoản tiền doanh nghiệp kỳ vọng nhận được. Để áp dụng, chuẩn mực chia thành **5 bước**: xác định hợp đồng, các nghĩa vụ thực hiện, giá giao dịch, phân bổ giá, rồi ghi nhận khi (hoặc dần khi) khách hàng nắm quyền kiểm soát. Hiểu 5 bước giúp bạn thấy vì sao doanh thu và dòng tiền lệch nhau.',
  keyPoints: [
    'Theo IFRS Foundation: bước 1 xác định **hợp đồng** với khách hàng; bước 2 xác định các **nghĩa vụ thực hiện** riêng biệt; bước 3 xác định **giá giao dịch** (ước tính phần biến đổi); bước 4 **phân bổ giá** theo giá bán riêng lẻ tương đối; bước 5 **ghi nhận doanh thu** khi khách hàng nắm quyền kiểm soát.',
    'Doanh thu có thể ghi nhận **tại một thời điểm** hoặc **dần theo thời gian**, dùng thước đo tiến độ phù hợp với nghĩa vụ kéo dài.',
    'IFRS 15 áp dụng cho kỳ báo cáo năm bắt đầu từ 1/1/2018 trở đi (cho phép áp dụng sớm).',
    'Ghi nhận doanh thu theo nguyên tắc dồn tích (accrual): doanh thu có thể được ghi nhận trước khi nhận tiền (tạo khoản phải thu) hoặc sau khi nhận tiền (tạo doanh thu chưa thực hiện, là nợ phải trả).',
    'Điểm cần phán đoán nằm ở bước 2, 3 và 5: gói sản phẩm có tách riêng không, phần biến đổi ước tính thế nào, bàn giao quyền kiểm soát vào lúc nào.',
  ],
  causalChain: [
    { from: 'Hợp đồng bán gói gồm nhiều thứ (phần mềm + hỗ trợ 12 tháng)', to: 'Tách thành các nghĩa vụ thực hiện riêng', mechanism: 'Mỗi cam kết có thể tách biệt được ghi nhận theo thời điểm/tiến độ bàn giao của chính nó.' },
    { from: 'Giá hợp đồng chung cho cả gói', to: 'Phân bổ theo giá bán riêng lẻ tương đối', mechanism: 'Ví dụ giả định: giá gói 120 triệu; giá bán riêng phần mềm 100, hỗ trợ 50 (tổng 150) nên phân bổ phần mềm 80, hỗ trợ 40.' },
    { from: 'Khách hàng nắm quyền kiểm soát phần mềm (giao ngay)', to: 'Ghi nhận 80 triệu doanh thu tại thời điểm giao', mechanism: 'Nghĩa vụ thực hiện tại một thời điểm hoàn tất khi kiểm soát chuyển giao.' },
    { from: 'Dịch vụ hỗ trợ kéo dài 12 tháng', to: 'Ghi nhận 40 triệu dần theo thời gian (khoảng 3,3 triệu/tháng)', mechanism: 'Doanh thu ghi nhận theo tiến độ thực hiện; phần chưa thực hiện nằm ở nợ phải trả (doanh thu chưa thực hiện) nếu đã thu tiền.' },
    { from: 'Ước tính phần biến đổi (chiết khấu, thưởng) quá lạc quan', to: 'Doanh thu khai cao, điều chỉnh về sau', mechanism: 'Giá giao dịch phải ước tính phần biến đổi; ước tính sai làm lợi nhuận kỳ này khác thực tế.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư đọc báo cáo tài chính doanh nghiệp bán dự án/phần mềm', effect: 'Doanh thu ghi nhận có thể lệch xa dòng tiền thu; cần đọc cả báo cáo lưu chuyển tiền tệ và doanh thu chưa thực hiện.', direction: 'mixed' },
    { group: 'Doanh nghiệp bất động sản, xây dựng', effect: 'Hợp đồng dài hạn đòi hỏi phán đoán về thời điểm kiểm soát chuyển giao và thước đo tiến độ; ảnh hưởng thời điểm ghi nhận lợi nhuận.', direction: 'mixed' },
    { group: 'Doanh nghiệp phần mềm, thuê bao, giáo dục', effect: 'Nhận tiền trước nhưng doanh thu ghi dần; báo cáo có khoản doanh thu chưa thực hiện lớn.', direction: 'mixed' },
    { group: 'Kiểm toán viên, kế toán', effect: 'Cần chuẩn bị tài liệu phán đoán ở từng bước; trước hết phải xác định doanh nghiệp đang áp dụng IFRS hay chuẩn mực kế toán Việt Nam.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Doanh thu chưa thực hiện (nợ phải trả hợp đồng) và khoản phải thu', why: 'Cho biết phần doanh thu lệch tiền: phải thu tăng nhanh có thể là doanh thu chưa thu tiền.', where: 'Bảng cân đối kế toán và thuyết minh báo cáo tài chính' },
    { name: 'Chênh lệch doanh thu và dòng tiền từ hoạt động kinh doanh', why: 'Lệch kéo dài là dấu hiệu cần xem lại chính sách ghi nhận.', where: 'Báo cáo lưu chuyển tiền tệ' },
    { name: 'Thuyết minh chính sách ghi nhận doanh thu', why: 'Mô tả nghĩa vụ thực hiện, thời điểm ghi nhận, phán đoán quan trọng.', where: 'Phần chính sách kế toán trong báo cáo tài chính' },
    { name: 'Ý kiến kiểm toán và vấn đề kiểm toán then chốt', why: 'Doanh thu thường là khu vực rủi ro được nêu rõ.', where: 'Báo cáo kiểm toán độc lập' },
  ],
  counterpoints: [
    'Bài chỉ là mô hình hiểu đơn giản; chuẩn mực có nhiều hướng dẫn chi tiết (đại lý/chủ thể, quyền chọn bổ sung, bản quyền…) mà bài không bàn.',
    'Nội dung bài là IFRS 15; doanh nghiệp Việt Nam có thể áp dụng chuẩn mực kế toán khác (VAS), nên cần đối chiếu chuẩn mực doanh nghiệp thực sự dùng.',
    'Ví dụ phân bổ 120 triệu là giả định minh họa, không phản ánh trường hợp nào có thật.',
  ],
  glossary: [
    { term: 'Nghĩa vụ thực hiện', definition: 'Cam kết chuyển giao hàng hóa/dịch vụ riêng biệt cho khách hàng.' },
    { term: 'Giá giao dịch', definition: 'Khoản đối giá doanh nghiệp kỳ vọng nhận được, kể cả phần biến đổi ước tính.' },
    { term: 'Giá bán riêng lẻ', definition: 'Giá doanh nghiệp bán từng hàng hóa/dịch vụ riêng, dùng để phân bổ giá gói.' },
    { term: 'Doanh thu chưa thực hiện', definition: 'Tiền đã nhận trước khi hoàn thành nghĩa vụ; ghi là nợ phải trả.' },
    { term: 'Quyền kiểm soát', definition: 'Khả năng khách hàng điều khiển và hưởng lợi từ tài sản được chuyển giao.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'ifrs15-five-step-revenue-recognition-q',
    question: 'Gói 120 triệu gồm phần mềm (giá bán riêng 100) và hỗ trợ 12 tháng (giá bán riêng 50), ví dụ giả định. Cách ghi nhận theo 5 bước?',
    options: [
      { id: 'a', text: 'Ghi 120 triệu ngay khi ký hợp đồng.', explain: 'Hỗ trợ là nghĩa vụ kéo dài, chỉ ghi nhận dần khi thực hiện; ký hợp đồng chưa phải lúc bàn giao.' },
      { id: 'b', text: 'Phân bổ phần mềm 80 triệu ghi khi giao; hỗ trợ 40 triệu ghi dần trong 12 tháng.', correct: true, explain: 'Đúng: phân bổ theo giá bán riêng tương đối (100:50), phần mềm ghi tại thời điểm giao, hỗ trợ ghi theo thời gian.' },
      { id: 'c', text: 'Ghi theo thời điểm nhận tiền của khách.', explain: 'Thời điểm thu tiền không quyết định doanh thu; quyết định là việc chuyển giao quyền kiểm soát.' },
    ],
  },
  sources: [
    { title: 'IFRS 15 Revenue from Contracts with Customers', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/' },
    { title: 'Revenue recognition', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Revenue_recognition' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 148,
}
