import type { Explainer } from '../../../shared/explainer'

export const capexVsOpexProfitImpact: Explainer = {
  id: 'capex-vs-opex-profit-impact',
  slug: 'capex-vs-opex-profit-impact',
  question: 'Chi phí nên vốn hóa (capex) hay ghi nhận ngay (opex) và nó ảnh hưởng lợi nhuận, dòng tiền ra sao?',
  title: 'Vốn hóa hay ghi chi phí: cùng một khoản chi, hai bức tranh lợi nhuận',
  topic: 'markets-investing',
  tldr: 'Cùng một khoản chi tiền, kế toán có thể **vốn hóa** (ghi thành tài sản, khấu hao dần) hoặc **ghi ngay vào chi phí** (opex). **Dòng tiền thực không đổi**, nhưng lợi nhuận kỳ này khác hẳn: vốn hóa làm lợi nhuận hiện tại cao hơn, chi phí dồn sang các năm sau. Vì vậy nhà đầu tư nên so lợi nhuận với **dòng tiền sau chi đầu tư** và xem doanh nghiệp vốn hóa những khoản gì.',
  keyPoints: [
    'Theo IAS 16, một khoản chi được ghi là tài sản khi **lợi ích kinh tế tương lai có khả năng xảy ra** và **đo lường được đáng tin cậy**; giá gốc gồm giá mua, thuế nhập khẩu không hoàn lại và chi phí trực tiếp đưa tài sản vào trạng thái sử dụng.',
    'Capex là chi để mua, bảo trì hoặc nâng cấp tài sản cố định; opex là chi phí vận hành thường xuyên. Ranh giới có thể phụ thuộc lợi ích kéo dài quá năm hiện tại hay không và nhiều khoản (như phần mềm) có thể thuộc cả hai bên (theo Wikipedia).',
    'Khoản vốn hóa nằm trên bảng cân đối kế toán và được **khấu hao dần**; khoản ghi chi phí đi thẳng vào báo cáo kết quả kinh doanh trong kỳ chi.',
    'Capex thường nằm ở **dòng tiền đầu tư** của báo cáo lưu chuyển tiền tệ, còn opex nằm ở dòng tiền kinh doanh; vì vậy cách phân loại làm dòng tiền kinh doanh trông khác đi dù tiền chi như nhau.',
    'Ví dụ giả định: chi 300 triệu mua máy, khấu hao 5 năm: vốn hóa làm chi phí khoảng 60 triệu/năm; ghi ngay làm lợi nhuận năm đầu giảm 300 triệu.',
  ],
  causalChain: [
    { from: 'Doanh nghiệp chi 300 triệu cho một khoản mục', to: 'Chọn vốn hóa hoặc ghi chi phí', mechanism: 'Nếu khoản chi đáp ứng tiêu chí tài sản (lợi ích tương lai, đo lường được) thì vốn hóa; nếu chỉ duy trì hoạt động hiện tại thì ghi chi phí.' },
    { from: 'Vốn hóa', to: 'Lợi nhuận kỳ chi cao hơn, chi phí chia cho nhiều năm', mechanism: 'Chi phí xuất hiện qua khấu hao: 60 triệu mỗi năm trong ví dụ, trong khi dòng tiền chi 300 triệu ngay lập tức.' },
    { from: 'Ghi ngay vào chi phí', to: 'Lợi nhuận kỳ chi thấp hơn, các kỳ sau cao hơn', mechanism: 'Toàn bộ 300 triệu giảm lợi nhuận kỳ đầu, các năm sau không còn chi phí tương ứng.' },
    { from: 'Vốn hóa quá rộng (chi phí vận hành bị coi là tài sản)', to: 'Lợi nhuận thổi phồng, dòng tiền tự do thấp hơn lợi nhuận', mechanism: 'Chênh lệch giữa lợi nhuận và dòng tiền sau chi đầu tư mở rộng dần; đây là dấu hiệu phổ biến cần kiểm tra.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cổ phiếu', effect: 'Nên so lợi nhuận với dòng tiền tự do (tiền kinh doanh trừ capex); khoản vốn hóa lớn nhưng dòng tiền yếu là dấu hiệu cần xem.', direction: 'mixed' },
    { group: 'Doanh nghiệp bất động sản, hạ tầng', effect: 'Vốn hóa chi phí đi vay và chi phí dự án làm lợi nhuận kỳ hiện tại khác xa dòng tiền; cần đọc thuyết minh.', direction: 'mixed' },
    { group: 'Doanh nghiệp công nghệ, phần mềm', effect: 'Chi phí phát triển sản phẩm có thể vốn hóa hay không ảnh hưởng đáng kể tới lợi nhuận báo cáo.', direction: 'mixed' },
    { group: 'Ngân hàng và bên cho vay', effect: 'Khi đánh giá khả năng trả nợ, thường nhìn dòng tiền hoạt động và chi đầu tư chứ không chỉ lợi nhuận kế toán.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Dòng tiền tự do (tiền kinh doanh − capex)', why: 'Đo tiền còn lại sau khi duy trì và mở rộng tài sản.', where: 'Tự tính từ báo cáo lưu chuyển tiền tệ' },
    { name: 'Capex / khấu hao', why: 'Tỷ lệ nhỏ hơn 1 kéo dài có thể là dấu hiệu đầu tư không đủ duy trì.', where: 'Báo cáo lưu chuyển tiền tệ và thuyết minh tài sản cố định' },
    { name: 'Tỷ lệ chi phí vốn hóa trong tổng chi phí phát sinh', why: 'Tăng đột ngột là tín hiệu thay đổi chính sách kế toán.', where: 'Thuyết minh chính sách kế toán và tài sản dở dang' },
    { name: 'Tốc độ tăng tài sản cố định so với doanh thu', why: 'Tài sản tăng nhanh hơn doanh thu kéo dài làm giảm hiệu quả sử dụng vốn.', where: 'Bảng cân đối kế toán qua các kỳ' },
  ],
  counterpoints: [
    'Vốn hóa không phải thủ thuật: nó đúng bản chất nếu khoản chi mang lợi ích nhiều năm (máy móc, nhà xưởng); lợi nhuận ghi ngay toàn bộ chi đầu tư sẽ biến động mạnh.',
    'Tiêu chí vốn hóa cần phán đoán (lợi ích tương lai "có khả năng" xảy ra), nên hai doanh nghiệp cùng ngành có thể chọn khác nhau.',
    'Quy định thuế vốn hóa/chi phí có thể khác kế toán; trang IFRS dùng cho bài này không đề cập sửa chữa, bảo trì thường xuyên (thông lệ chung là ghi chi phí) cũng như các chuẩn mực riêng cho phần mềm và chi phí phát triển (tài sản vô hình) hay chi phí đi vay; cần đọc chuẩn mực đầy đủ.',
  ],
  glossary: [
    { term: 'Capex', definition: 'Chi tiêu vốn: mua, nâng cấp tài sản dài hạn.' },
    { term: 'Opex', definition: 'Chi phí vận hành thường xuyên ghi vào kỳ phát sinh.' },
    { term: 'Vốn hóa', definition: 'Ghi khoản chi thành tài sản thay vì chi phí.' },
    { term: 'Khấu hao', definition: 'Phân bổ giá trị tài sản vào chi phí qua nhiều kỳ.' },
    { term: 'Dòng tiền tự do', definition: 'Tiền từ kinh doanh trừ chi đầu tư vào tài sản cố định.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'capex-vs-opex-profit-impact-q',
    question: 'Doanh nghiệp chi 300 triệu (ví dụ giả định). Nếu vốn hóa và khấu hao 5 năm thay vì ghi chi phí ngay, điều gì đúng?',
    options: [
      { id: 'a', text: 'Lợi nhuận năm đầu cao hơn khoảng 240 triệu, dòng tiền chi ra không đổi.', correct: true, explain: 'Đúng. Ghi ngay: chi phí 300; vốn hóa: chi phí khấu hao 60; chênh 240. Tiền chi vẫn là 300 triệu.' },
      { id: 'b', text: 'Dòng tiền thực tế tăng 240 triệu.', explain: 'Cách ghi sổ không đổi lượng tiền đã chi; chỉ thay đổi thời điểm ghi nhận chi phí.' },
      { id: 'c', text: 'Không có khác biệt nào về lợi nhuận.', explain: 'Khác biệt nằm ở thời điểm ghi chi phí; lợi nhuận từng kỳ thay đổi.' },
    ],
  },
  sources: [
    { title: 'IAS 16 Property, Plant and Equipment', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-16-property-plant-and-equipment/' },
    { title: 'Capital expenditure', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Capital_expenditure' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 153,
}
