import type { Explainer } from '../../../shared/explainer'

export const insiderTradingInformationAsymmetry: Explainer = {
  id: 'insider-trading-information-asymmetry',
  slug: 'insider-trading-information-asymmetry',
  question: 'Giao dịch nội gián là gì và vì sao bất cân xứng thông tin làm hại thị trường?',
  title: 'Giao dịch nội gián và bất cân xứng thông tin',
  topic: 'markets-investing',
  tldr: 'Giao dịch nội gián là mua bán chứng khoán dựa trên thông tin quan trọng chưa công bố. Nó bị cấm ở nhiều nước vì làm lợi cho người biết tin trên lưng người không biết và làm xói mòn niềm tin thị trường. Ở Việt Nam, "sử dụng thông tin nội bộ để mua, bán chứng khoán cho mình hoặc cho người khác" nằm trong các hành vi bị cấm tại Điều 12 Luật Chứng khoán 2019. Với nhà đầu tư nhỏ, bài học là phân biệt thông tin công bố với tin đồn.',
  keyPoints: [
    'Theo Wikipedia: giao dịch nội gián là mua bán chứng khoán dựa trên thông tin quan trọng, chưa công bố; nhiều nước coi là bất hợp pháp nhưng quy định khác nhau. Việc người nội bộ giao dịch cổ phiếu công ty mình không nhất thiết là bất hợp pháp nếu công bố đúng quy định và không dựa trên tin chưa công bố.',
    'Lý do cấm: công bằng (người biết tin kiếm lời nhiều hơn), nghĩa vụ ủy thác của lãnh đạo, và toàn vẹn thị trường; Wikipedia nhắc một nghiên cứu cho rằng giao dịch nội gián bất hợp pháp làm tăng chi phí vốn của doanh nghiệp.',
    'Tranh luận: một số học giả cho rằng cấm đoán không cần thiết (như Milton Friedman, người từng nói muốn "nhiều giao dịch nội gián hơn"), nhưng đây là quan điểm thiểu số; hầu hết cơ quan quản lý coi cấm là một phần của bảo vệ nhà đầu tư.',
    'Theo một bài đăng 4/2/2024 trên lsvn.vn: hành vi "sử dụng thông tin nội bộ để mua, bán chứng khoán cho chính mình hoặc cho người khác" là mục thứ hai trong danh sách 7 hành vi bị cấm tại Điều 12 Luật Chứng khoán 2019 (bài không nêu số khoản và không định nghĩa người nội bộ; cần đối chiếu văn bản luật hợp nhất hiện hành để biết điều khoản chính xác).',
    'Khó phát hiện và chứng minh: người giao dịch có thể dùng tên người khác, công ty nước ngoài; Wikipedia nêu hầu hết các vụ không bị phát hiện, và mức thực thi giữa các nước khác nhau.',
  ],
  causalChain: [
    { from: 'Người nội bộ biết tin quan trọng trước công chúng', to: 'Bất cân xứng thông tin', mechanism: 'Một bên biết thông tin có thể làm giá thay đổi, bên kia thì không, nên hai bên đánh giá giá trị khác nhau.' },
    { from: 'Bất cân xứng thông tin và giao dịch dựa trên đó', to: 'Lợi nhuận chuyển từ nhà đầu tư thường sang người nội bộ', mechanism: 'Người có tin mua trước khi giá tăng hoặc bán trước khi giá giảm; người đối ứng mua/bán ở giá chưa phản ánh tin.' },
    { from: 'Nhà đầu tư thấy thị trường không công bằng', to: 'Họ đòi lợi suất cao hơn hoặc rời thị trường', mechanism: 'Chi phí vốn cho doanh nghiệp tăng và thanh khoản giảm, làm thị trường kém hiệu quả.' },
    { from: 'Luật cấm, công bố thông tin và giám sát', to: 'Giảm lợi thế của người nội bộ, tăng niềm tin', mechanism: 'Nghĩa vụ công bố, cấm sử dụng tin nội bộ và chế tài làm tăng chi phí của hành vi vi phạm.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân', effect: 'Rủi ro bị "đứng sau" người có tin; nên dựa vào thông tin công bố chính thức và cẩn trọng với tin đồn, nhóm kín.', direction: 'down' },
    { group: 'Người nội bộ doanh nghiệp (lãnh đạo, nhân viên có quyền tiếp cận tin)', effect: 'Chịu cấm sử dụng thông tin nội bộ để giao dịch, kể cả tiết lộ hoặc tư vấn người khác giao dịch dựa trên tin đó (theo lsvn.vn); mức chế tài cụ thể cần đối chiếu văn bản pháp luật hiện hành, bài này chưa kiểm.', direction: 'down' },
    { group: 'Doanh nghiệp niêm yết', effect: 'Quản trị thông tin tốt (công bố kịp thời, danh sách người nội bộ, quy chế bảo mật) giúp giữ niềm tin của nhà đầu tư.', direction: 'mixed' },
    { group: 'Cơ quan quản lý', effect: 'Cần công cụ giám sát giao dịch bất thường và thực thi nhất quán để răn đe.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Biến động giá/khối lượng bất thường trước thông báo quan trọng', why: 'Dấu hiệu có thể gợi ý rò rỉ thông tin (không đủ để kết luận vi phạm).', where: 'Dữ liệu giao dịch của Sở Giao dịch Chứng khoán; báo cáo giám sát của UBCKNN' },
    { name: 'Giao dịch của người nội bộ và người liên quan được công bố', why: 'Tín hiệu từ người hiểu doanh nghiệp, nhưng có thể do nhiều lý do khác nhau.', where: 'Công bố thông tin của doanh nghiệp niêm yết trên website sở giao dịch' },
    { name: 'Xử phạt vi phạm trên thị trường chứng khoán', why: 'Mức độ thực thi pháp luật.', where: 'Ủy ban Chứng khoán Nhà nước' },
    { name: 'Tốc độ và chất lượng công bố thông tin', why: 'Giảm cơ hội bất cân xứng.', where: 'Website sở giao dịch, báo cáo doanh nghiệp' },
  ],
  counterpoints: [
    'Không phải mọi giao dịch của người nội bộ đều là bất hợp pháp; nhiều nước cho phép giao dịch nếu báo cáo đúng quy định hoặc theo kế hoạch đã đăng ký trước.',
    'Một số học giả đặt vấn đề liệu cấm có hiệu quả về kinh tế; phản bác thường dựa trên tác động tới chi phí vốn và niềm tin.',
    'Phát hiện khó, nên cảm giác "ai cũng biết trước" không chứng minh vi phạm; nhà đầu tư nên tránh kết luận từ tin đồn.',
  ],
  glossary: [
    { term: 'Thông tin nội bộ', definition: 'Thông tin quan trọng, chưa được công bố, có thể ảnh hưởng giá chứng khoán.' },
    { term: 'Bất cân xứng thông tin', definition: 'Tình trạng một bên giao dịch biết nhiều hơn bên kia.' },
    { term: 'Tippee', definition: 'Người nhận tin từ người nội bộ và giao dịch dựa vào đó.' },
    { term: 'Nghĩa vụ ủy thác', definition: 'Nghĩa vụ của lãnh đạo hành động vì lợi ích của công ty và cổ đông.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'insider-trading-information-asymmetry-q',
    question: 'Một trưởng phòng biết công ty sắp công bố hợp đồng lớn, nhắn bạn bè mua cổ phiếu trước khi công bố. Điều nào đúng nhất?',
    options: [
      { id: 'a', text: 'Hợp pháp vì anh ta không tự mua.', explain: 'Danh sách hành vi bị cấm gồm cả sử dụng tin nội bộ cho người khác; tiết lộ và khuyến nghị giao dịch dựa trên tin cũng bị nhiều luật cấm.' },
      { id: 'b', text: 'Đây là kiểu hành vi mà luật chứng khoán coi là sử dụng/tiết lộ thông tin nội bộ, bất kể ai là người mua.', correct: true, explain: 'Đúng: thông tin chưa công bố và quan trọng; việc làm lợi cho người khác trên tin đó là điều luật nhắm tới.' },
      { id: 'c', text: 'Hợp pháp nếu hợp đồng cuối cùng được công bố.', explain: 'Việc thông tin sau đó được công bố không làm hợp pháp hành vi giao dịch trước khi công bố.' },
    ],
  },
  sources: [
    { title: 'Insider trading', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Insider_trading' },
    { title: '7 hành vi bị nghiêm cấm trong hoạt động về chứng khoán và thị trường chứng khoán (4/2/2024)', publisher: 'LSVN (lsvn.vn)', url: 'https://lsvn.vn/7-hanh-vi-bi-nghiem-cam-trong-hoat-dong-ve-chung-khoan-va-thi-truong-chung-khoan-1707035525-a140773.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 134,
}
