import type { Explainer } from '../../../shared/explainer'

export const realEstatePriceIndexMethods: Explainer = {
  id: 'real-estate-price-index-methods',
  slug: 'real-estate-price-index-methods',
  question: 'Chỉ số giá bất động sản được tính thế nào (hedonic, bán lặp) và vì sao các con số khác nhau?',
  title: 'Mỗi nhà một khác: chỉ số giá BĐS phải "chuẩn hóa chất lượng" bằng hedonic hoặc bán lặp',
  topic: 'real-estate',
  tldr: 'Không có hai căn nhà giống hệt nhau, nên lấy giá trung bình các giao dịch trong tháng rất dễ nhiễu: tháng nhiều căn cao cấp được bán thì "giá" tăng dù từng căn không đổi giá. Các chỉ số nghiêm túc xử lý bằng **hồi quy hedonic** (tách giá thành đóng góp của diện tích, vị trí, tuổi nhà…) hoặc **bán lặp** (chỉ so sánh *cùng một căn* bán ở hai thời điểm). Mỗi phương pháp có điểm mạnh, điểm yếu riêng, nên cần biết chỉ số đang đo gì trước khi kết luận "giá tăng bao nhiêu".',
  keyPoints: [
    '**Giá trung bình/trung vị** phản ánh cả sự thay đổi *cơ cấu* giao dịch (nhiều căn cao cấp, ít căn ở xa…) lẫn thay đổi giá thật; vì vậy có thể "tăng" hay "giảm" mà không căn nhà nào đổi giá.',
    '**Hedonic:** hồi quy giá theo đặc điểm (diện tích, số phòng, vị trí, tuổi, tiện ích) rồi tách phần giá thuần theo thời gian. Dùng được cả khi căn nhà chỉ giao dịch một lần, nhưng phải có dữ liệu đặc điểm đầy đủ và mô hình đúng.',
    '**Bán lặp (repeat sales):** chỉ dùng các căn đã giao dịch ít nhất hai lần, so giá cùng căn qua thời gian, nên kiểm soát chất lượng tự nhiên. Điểm yếu: bỏ phí dữ liệu căn chỉ bán một lần, và chất lượng có thể đổi giữa hai lần bán (cải tạo, xuống cấp). Chỉ số Case–Shiller của Mỹ dùng cách tiếp cận này.',
    '**Giá chào bán (asking) khác giá giao dịch:** nhiều chỉ số tại Việt Nam dựa trên giá chào trên sàn tin đăng hay giá mở bán dự án; chúng nhanh nhưng phản ánh kỳ vọng của người bán hơn là giá khớp.',
    'BIS công bố bộ chỉ số giá nhà ở khoảng 60 nền kinh tế, gồm chỉ số danh nghĩa và thực (đã loại CPI), để so sánh quốc tế; việc so sánh vẫn phụ thuộc cách mỗi nước tính.',
  ],
  causalChain: [
    { from: 'Cơ cấu giao dịch trong kỳ thay đổi (nhiều căn lớn, trung tâm)', to: 'Giá trung bình đổi dù giá từng căn không đổi', mechanism: 'Trung bình là tổng giá chia số căn; thay đổi mix căn bán ra làm trung bình dịch chuyển (hiệu ứng cơ cấu).' },
    { from: 'Muốn tách giá khỏi hiệu ứng cơ cấu', to: 'Phải kiểm soát đặc điểm căn nhà', mechanism: 'Hedonic làm việc đó bằng hồi quy theo đặc điểm; bán lặp làm bằng cách so cùng một căn.' },
    { from: 'Dữ liệu chủ yếu là giá chào hoặc giá khai báo', to: 'Chỉ số lệch khỏi giá thực khớp', mechanism: 'Người bán đưa giá chào cao để chừa chỗ thương lượng; khi thị trường nguội, giá chào ít giảm trong khi giao dịch thưa và chiết khấu tăng.' },
    { from: 'Chỉ số được dùng để ra quyết định (vay, chính sách, đầu tư)', to: 'Sai lệch đo lường thành sai lệch quyết định', mechanism: 'Ngân hàng định giá tài sản thế chấp, cơ quan quản lý đánh giá bong bóng; nếu chỉ số bị lạc hậu hoặc lệch, tín hiệu rủi ro bị chậm hoặc phóng đại.' },
  ],
  vietnamImpact: [
    { group: 'Người mua nhà', effect: 'Cần phân biệt "giá chào dự án mới" với "giá giao dịch thứ cấp cùng khu"; so sánh theo đơn giá/m² của cùng phân khúc, cùng vị trí thay vì so các con số trung bình toàn thành phố.', direction: 'mixed' },
    { group: 'Ngân hàng và định giá tài sản thế chấp', effect: 'Dựa vào dữ liệu giao dịch thực và chỉ số chuẩn hóa giúp giảm rủi ro định giá quá cao, nhất là khi giá chào tăng nhanh hơn giá khớp.', direction: 'mixed' },
    { group: 'Cơ quan hoạch định chính sách', effect: 'Thiếu chỉ số giá BĐS công khai, chuẩn hóa và cập nhật làm khó đánh giá chu kỳ; dữ liệu giao dịch minh bạch sẽ nâng chất lượng điều hành.', direction: 'up' },
    { group: 'Nhà đầu tư cá nhân', effect: 'Dễ bị "neo" vào mức tăng giá được đăng tải mà không biết nó đo cái gì (giá chào, một dự án, một quận); nên kiểm chứng bằng nhiều nguồn.', direction: 'down' },
  ],
  indicators: [
    { name: 'Chỉ số giá nhà ở danh nghĩa và thực của BIS', why: 'Bộ số liệu quốc tế có phương pháp rõ để so sánh chu kỳ giữa các nền kinh tế.', where: 'BIS Data Portal – Residential property prices (data.bis.org)' },
    { name: 'Chỉ số Case–Shiller (Mỹ) như mẫu phương pháp bán lặp', why: 'Giúp hiểu ưu và nhược điểm của bán lặp khi đọc các chỉ số khác.', where: 'S&P Dow Jones Indices; mô tả trên Wikipedia' },
    { name: 'Chênh lệch giá chào – giá giao dịch và thời gian bán trung bình', why: 'Chênh lệch nới rộng, thời gian bán dài ra là dấu hiệu thị trường nguội trước khi chỉ số giá chào giảm.', where: 'Báo cáo thị trường của các đơn vị tư vấn, Bộ Xây dựng, dữ liệu sàn giao dịch' },
    { name: 'Số giao dịch thành công và tỷ lệ hấp thụ dự án', why: 'Giá có ý nghĩa khi có thanh khoản; giá tăng với giao dịch rất thưa là tín hiệu yếu.', where: 'Cục Quản lý nhà và thị trường bất động sản (Bộ Xây dựng), báo cáo thị trường' },
  ],
  counterpoints: [
    'Hedonic phụ thuộc mô hình và dữ liệu đặc điểm; thiếu biến quan trọng (hướng, tầng, pháp lý) làm kết quả lệch.',
    'Bán lặp trong thị trường ít giao dịch lại có rất ít cặp bán lặp, nên chỉ số chậm và có thể thiên lệch về các căn dễ bán.',
    'Không chỉ số nào thay được trải nghiệm khảo sát thực địa: mỗi bất động sản có yếu tố riêng (pháp lý, quy hoạch) mà chỉ số trung bình không thấy.',
  ],
  glossary: [
    { term: 'Hedonic', definition: 'Phương pháp hồi quy tách giá thành đóng góp của từng đặc điểm (diện tích, vị trí, tuổi nhà…) để cô lập phần thay đổi theo thời gian.' },
    { term: 'Bán lặp (repeat sales)', definition: 'Chỉ số dựa trên chênh lệch giá của cùng một bất động sản bán ở hai thời điểm khác nhau.' },
    { term: 'Hiệu ứng cơ cấu', definition: 'Thay đổi của giá trung bình do thay đổi tỷ trọng các loại tài sản được giao dịch, không phải do giá từng tài sản đổi.' },
    { term: 'Giá chào (asking price)', definition: 'Giá người bán niêm yết, thường cao hơn giá giao dịch cuối cùng.' },
    { term: 'Giá thực (real)', definition: 'Giá danh nghĩa đã loại trừ lạm phát bằng cách chia cho chỉ số giá tiêu dùng.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'real-estate-price-index-methods-q',
    question: 'Quý này giá trung bình căn hộ trong một thành phố tăng 15%, nhưng phần lớn giao dịch quý này là căn cao cấp ở trung tâm. Kết luận hợp lý nhất?',
    options: [
      { id: 'a', text: 'Giá mọi căn hộ đã tăng khoảng 15%.', explain: 'Trung bình bị kéo bởi cơ cấu giao dịch; không suy ra từng căn tăng 15%.' },
      { id: 'b', text: 'Chưa kết luận được; cần so cùng phân khúc/cùng vị trí hoặc dùng chỉ số đã chuẩn hóa chất lượng (hedonic/bán lặp).', correct: true, explain: 'Đúng. Phải tách hiệu ứng cơ cấu khỏi thay đổi giá thuần thì mới biết giá "cùng loại hàng" đổi thế nào.' },
      { id: 'c', text: 'Số liệu sai vì giá trung bình không có ý nghĩa gì.', explain: 'Giá trung bình có thông tin nhưng chỉ đúng cho mục đích mô tả; không dùng nó để đo thay đổi giá thuần.' },
    ],
  },
  sources: [
    { title: 'Residential property prices – overview (BIS Data Portal)', publisher: 'Bank for International Settlements', url: 'https://data.bis.org/topics/RPP' },
    { title: 'Hedonic regression', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Hedonic_regression' },
    { title: 'Case–Shiller index', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Case%E2%80%93Shiller_index' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 60,
}
