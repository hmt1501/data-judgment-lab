import type { Explainer } from '../../../shared/explainer'

export const investmentIncomeTaxBasicsVietnam: Explainer = {
  id: 'investment-income-tax-basics-vietnam',
  slug: 'investment-income-tax-basics-vietnam',
  question: 'Thu nhập từ đầu tư chịu thuế thế nào ở Việt Nam?',
  title: 'Thuế thu nhập đầu tư: mỗi loại thu nhập một cách tính, luôn kiểm tra quy định hiện hành',
  topic: 'personal-finance',
  tldr: 'Thu nhập đầu tư không chịu chung một thuế: **lãi, cổ tức, lãi vốn từ chuyển nhượng** và **thu nhập từ bất động sản** thường có cơ chế riêng, và quy định thay đổi theo thời gian. Bài này giải thích cách suy nghĩ về thuế khi đầu tư (thuế làm giảm lợi suất ròng, cần so sánh sau thuế) mà không nêu thuế suất cụ thể; hãy kiểm tra văn bản hiện hành tại cơ quan thuế/Bộ Tài chính trước khi quyết định.',
  keyPoints: [
    'Điều quan trọng là **lợi suất sau thuế và phí**, không phải lợi suất trước thuế: hai sản phẩm cùng lợi suất trước thuế có thể cho kết quả ròng khác nhau.',
    'Thu nhập đầu tư thường được phân loại theo bản chất: **thu nhập từ lãi** (tiền gửi, trái phiếu), **cổ tức**, **chuyển nhượng vốn/chứng khoán**, **chuyển nhượng hoặc cho thuê bất động sản**; mỗi loại có cách tính và thời điểm nộp khác nhau.',
    'Cách tính có thể theo **doanh thu** (tỷ lệ trên giá trị giao dịch) hoặc theo **lãi ròng** (giá bán trừ giá mua và chi phí hợp lý); cách đầu không phân biệt lãi hay lỗ. Ví dụ: theo VnBusiness (4/9/2025), dự thảo Luật Thuế TNCN sửa đổi Bộ Tài chính gửi thẩm định đã rút đề xuất 20% trên lãi chuyển nhượng chứng khoán và giữ mức 0,1% trên giá chuyển nhượng từng lần; đây là tin về dự thảo, chưa xác nhận văn bản cuối cùng.',
    'Quy định về thuế đổi theo luật, nghị định, thông tư; thuế suất, ngưỡng miễn thuế và đối tượng chịu thuế cần lấy từ văn bản còn hiệu lực.',
    'Lưu giữ chứng từ mua, bán, chi phí, sao kê; đây là cơ sở khai thuế và giải trình khi cần.',
  ],
  causalChain: [
    { from: 'Có thu nhập từ đầu tư', to: 'Xác định loại thu nhập chịu thuế', mechanism: 'Pháp luật phân loại theo bản chất: lãi, cổ tức, chuyển nhượng, cho thuê; mỗi loại có quy tắc riêng.' },
    { from: 'Loại thu nhập được xác định', to: 'Cách tính thuế: theo doanh thu hoặc theo lãi', mechanism: 'Thuế trên doanh thu đơn giản, thu cả khi lỗ; thuế trên lãi ròng cần tính chi phí nhưng công bằng hơn khi biến động.' },
    { from: 'Thuế và phí được trừ khỏi thu nhập', to: 'Lợi suất ròng thấp hơn lợi suất công bố', mechanism: 'Chênh lệch giữa lợi suất trước và sau thuế phụ thuộc vào tần suất giao dịch, thời gian nắm giữ và loại tài sản.' },
    { from: 'Thay đổi chính sách thuế', to: 'Thay đổi hành vi đầu tư và định giá', mechanism: 'Tăng thuế làm giảm lợi suất ròng, có thể giảm thanh khoản hoặc thay đổi dòng vốn giữa các loại tài sản.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư chứng khoán cá nhân', effect: 'Giao dịch thường xuyên làm tổng thuế và phí tích lũy lớn; cần tính chi phí giao dịch vào chiến lược.', direction: 'down' },
    { group: 'Người gửi tiết kiệm, mua trái phiếu', effect: 'Lãi ròng sau thuế (nếu có) là mức cần so sánh giữa các sản phẩm.', direction: 'mixed' },
    { group: 'Nhà đầu tư bất động sản', effect: 'Thuế và phí chuyển nhượng, cho thuê ảnh hưởng điểm hòa vốn khi mua bán lại.', direction: 'down' },
    { group: 'Người đầu tư dài hạn', effect: 'Giao dịch ít, nắm giữ lâu giảm chi phí giao dịch tích lũy; hiệu quả sau thuế thường tốt hơn.', direction: 'up' },
    { group: 'Ngân sách nhà nước', effect: 'Thuế đầu tư là nguồn thu và công cụ điều tiết dòng vốn; thay đổi chính sách cân bằng giữa thu ngân sách và khuyến khích đầu tư.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Văn bản pháp luật về thuế thu nhập cá nhân hiện hành', why: 'Căn cứ chính xác về thuế suất, ngưỡng, đối tượng; quy định có thể đã thay đổi so với tài liệu cũ.', where: 'Cổng thông tin Bộ Tài chính (mof.gov.vn), Cục Thuế' },
    { name: 'Lợi suất sau thuế và phí của sản phẩm', why: 'Thước đo so sánh công bằng giữa các lựa chọn.', where: 'Tự tính từ biểu phí, điều kiện sản phẩm và quy định thuế' },
    { name: 'Chi phí giao dịch (phí môi giới, chênh lệch mua - bán)', why: 'Cùng với thuế, quyết định lợi suất ròng.', where: 'Biểu phí công ty chứng khoán, ngân hàng' },
    { name: 'Thông báo hướng dẫn mới của cơ quan thuế', why: 'Quy định thay đổi, ảnh hưởng nghĩa vụ kê khai.', where: 'Cổng thông tin của cơ quan thuế, Bộ Tài chính' },
  ],
  counterpoints: [
    'Tối ưu thuế không nên chi phối quyết định đầu tư: một khoản đầu tư xấu được miễn thuế vẫn là khoản đầu tư xấu.',
    'Cách phân loại thu nhập và cách tính có thể thay đổi hoặc có diễn giải khác nhau; trường hợp phức tạp nên hỏi chuyên gia thuế.',
    'Bài này chỉ nêu một ví dụ từ tin dự thảo và không xác minh được văn bản hiện hành; không sử dụng bài này làm căn cứ khai thuế.',
  ],
  glossary: [
    { term: 'Thu nhập chịu thuế', definition: 'Phần thu nhập thuộc đối tượng chịu thuế theo quy định.' },
    { term: 'Lãi vốn', definition: 'Chênh lệch dương giữa giá bán và giá mua tài sản.' },
    { term: 'Lợi suất sau thuế', definition: 'Lợi suất còn lại sau khi trừ thuế và phí.' },
    { term: 'Cổ tức', definition: 'Phần lợi nhuận doanh nghiệp chia cho cổ đông.' },
    { term: 'Chi phí hợp lý', definition: 'Chi phí liên quan trực tiếp đến việc tạo ra thu nhập và được phép trừ khi tính thuế.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'investment-income-tax-basics-vietnam-q',
    question: 'Hai sản phẩm đầu tư cùng lợi suất trước thuế 8%/năm, một có thuế và phí cao hơn. Đánh giá hợp lý?',
    options: [
      { id: 'a', text: 'Hai sản phẩm như nhau vì cùng lợi suất.', explain: 'Lợi suất ròng sau thuế và phí khác nhau mới là thứ bạn nhận.' },
      { id: 'b', text: 'So sánh lợi suất sau thuế và phí; sản phẩm có chi phí cao hơn cho kết quả ròng thấp hơn.', correct: true, explain: 'Đúng. Thuế và phí làm giảm lợi suất thực nhận.' },
      { id: 'c', text: 'Thuế luôn do đơn vị phát hành lo, người đầu tư không cần quan tâm.', explain: 'Một số thuế khấu trừ tại nguồn, nhưng người đầu tư vẫn cần biết nghĩa vụ của mình và lợi suất ròng.' },
    ],
  },
  sources: [
    { title: 'Capital gains tax', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Capital_gains_tax' },
    { title: 'Rút đề xuất áp thuế 20% đối với lãi bán chứng khoán, giữ nguyên mức thu 0,1% giá trị chuyển nhượng (4/9/2025)', publisher: 'VnBusiness', url: 'https://vnbusiness.vn/rut-de-xuat-ap-thue-20-doi-voi-lai-ban-chung-khoan-giu-nguyen-muc-thu-01-gia-tri-chuyen-nhuong.html' },
    { title: 'Cổng thông tin điện tử Bộ Tài chính', publisher: 'Bộ Tài chính', url: 'https://www.mof.gov.vn/' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 39,
}
