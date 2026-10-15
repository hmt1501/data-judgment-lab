import type { Explainer } from '../../../shared/explainer'

export const cryptoAssetsRiskBasics: Explainer = {
  id: 'crypto-assets-risk-basics',
  slug: 'crypto-assets-risk-basics',
  question: 'Tài sản mã hóa (tiền số) rủi ro thế nào và đâu là giới hạn hiểu biết của người mới?',
  title: 'Tài sản mã hóa không có dòng tiền nền; giá phụ thuộc niềm tin, thanh khoản và rủi ro nền tảng giao dịch',
  topic: 'personal-finance',
  tldr: 'Tài sản mã hóa là tài sản số ghi trên sổ cái phân tán. Khác cổ phiếu hay trái phiếu, đa số **không có dòng tiền nền** để định giá, nên giá chủ yếu do cung cầu và tâm lý. Rủi ro gồm biến động cực lớn, **rủi ro đối tác** ở sàn và ví lưu ký, lừa đảo, đòn bẩy, và khung pháp lý khác nhau theo nước. Bài này không khuyến nghị mua bán; mục tiêu là cho người đọc khung câu hỏi để tự đánh giá.',
  keyPoints: [
    'Tách các loại: **tiền mã hóa** (như Bitcoin), **stablecoin** (neo giá vào tài sản khác như đô la), **token dự án**. Rủi ro của từng loại khác nhau, đừng gộp thành một.',
    'Stablecoin không phải tiền gửi ngân hàng: giá trị neo phụ thuộc tài sản dự trữ và cơ chế đổi; đã có sự cố mất neo của một số stablecoin; báo cáo thường niên 2022 của BIS có khung riêng (Box A) về sự sụp đổ của stablecoin TerraUSD.',
    'Chương III báo cáo thường niên 2022 của BIS có mục “The promise and pitfalls of crypto”; BIS nhận định cấu trúc của hệ crypto có khiếm khuyết (thiếu một neo danh nghĩa ổn định, bị hạn chế về khả năng mở rộng) và trên thực tế thường dựa vào các bên trung gian chưa được quản lý, nên không phù hợp làm nền tảng cho hệ thống tiền tệ. Đó là quan điểm của BIS, không phải kết luận chung của mọi tổ chức.',
    'Rủi ro vận hành: mất khóa riêng tư, bị chiếm tài khoản, sàn mất khả năng chi trả hoặc bị tấn công; tài sản gửi trên sàn có thể không được bảo vệ như tiền gửi ngân hàng.',
    'Pháp lý tại Việt Nam đang thay đổi: theo Tạp chí Luật sư Việt Nam, Nghị quyết 05/2025/NQ-CP của Chính phủ (ký ngày 9/9/2025, có hiệu lực từ cùng ngày) triển khai thí điểm thị trường tài sản mã hóa trong 5 năm. Bài này không nêu điều kiện cấp phép hay thuế vì chưa mở được văn bản gốc; hãy đọc văn bản hiện hành trên cổng thông tin pháp luật hoặc hỏi chuyên gia pháp lý trước khi giao dịch.',
  ],
  causalChain: [
    { from: 'Tài sản không có dòng tiền hoặc giá trị sử dụng ổn định', to: 'Giá phụ thuộc kỳ vọng và dòng tiền mới vào', mechanism: 'Không có thu nhập để chiết khấu, giá cân bằng dựa vào người mua kế tiếp, nên dễ biến động và có tính vòng xoáy.' },
    { from: 'Đòn bẩy và thanh lý tự động trên nền tảng', to: 'Biến động giá khuếch đại', mechanism: 'Giá giảm kích hoạt thanh lý vị thế vay, bán thêm và đẩy giá giảm tiếp.' },
    { from: 'Tài sản lưu ký tại sàn hoặc nền tảng cho vay', to: 'Rủi ro đối tác', mechanism: 'Nếu bên giữ tài sản mất khả năng chi trả, người dùng chỉ là chủ nợ không có bảo đảm trong quá trình xử lý.' },
    { from: 'Lợi nhuận cao quảng cáo rầm rộ', to: 'Rủi ro lừa đảo và mô hình đa cấp', mechanism: 'Hứa hẹn lợi suất cố định cao là dấu hiệu cảnh báo; xem thêm bài về các mô hình Ponzi.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân', effect: 'Rủi ro mất vốn cao, đặc biệt khi dùng đòn bẩy; chưa chắc có cơ chế bảo vệ như với sản phẩm tài chính được cấp phép.', direction: 'down' },
    { group: 'Người nhận thanh toán/chuyển tiền xuyên biên giới', effect: 'Stablecoin có thể rẻ hơn, nhưng đi kèm rủi ro pháp lý và tuân thủ; cần kiểm tra quy định hiện hành.', direction: 'mixed' },
    { group: 'Hệ thống tài chính', effect: 'Dòng vốn vào ra qua kênh không chính thức có thể ảnh hưởng quản lý ngoại hối và chống rửa tiền.', direction: 'mixed' },
    { group: 'Người trẻ mới đầu tư', effect: 'Dễ bị tác động bởi bầy đàn và nội dung quảng bá; cần phân biệt đầu tư với đánh bạc rủi ro.', direction: 'down' },
  ],
  indicators: [
    { name: 'Biến động giá lịch sử (độ lệch chuẩn, mức sụt giảm tối đa)', why: 'Cho biết mức lỗ tạm thời mà bạn phải chịu được.', where: 'Dữ liệu giá từ các nguồn tổng hợp độc lập; tự tính' },
    { name: 'Quy mô và thành phần dự trữ của stablecoin', why: 'Đánh giá khả năng giữ neo khi có rút hàng loạt.', where: 'Báo cáo xác nhận của nhà phát hành; nghiên cứu của BIS, FSB' },
    { name: 'Khung pháp lý và cảnh báo của cơ quan quản lý', why: 'Xác định hoạt động nào hợp pháp, bảo vệ nhà đầu tư ra sao.', where: 'Ngân hàng Nhà nước, Bộ Tài chính, Ủy ban Chứng khoán Nhà nước, cổng pháp luật' },
  ],
  counterpoints: [
    'Người ủng hộ nhấn mạnh công nghệ sổ cái phân tán có thể giảm chi phí thanh toán và tạo hạ tầng mới; mặt công nghệ và mặt đầu cơ là hai vấn đề khác nhau.',
    'Bitcoin và một số tài sản đã tồn tại nhiều năm và vượt qua nhiều chu kỳ, nhưng sống sót không nói gì về lợi suất tương lai.',
    'Quy định thay đổi nhanh theo từng nước; ý kiến cũ về “hợp pháp/bất hợp pháp” có thể không còn đúng.',
  ],
  glossary: [
    { term: 'Tài sản mã hóa', definition: 'Tài sản số dùng mật mã và sổ cái phân tán để xác nhận quyền sở hữu và chuyển giao.' },
    { term: 'Stablecoin', definition: 'Token neo giá trị vào tài sản như đô la, nhưng việc giữ neo phụ thuộc cơ chế và dự trữ.' },
    { term: 'Rủi ro đối tác', definition: 'Rủi ro bên giữ hoặc giao dịch với bạn không thực hiện nghĩa vụ.' },
    { term: 'Khóa riêng tư', definition: 'Mã bí mật chứng minh quyền kiểm soát tài sản trên sổ cái; mất khóa thường là mất tài sản.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'crypto-assets-risk-basics-q',
    question: 'Một nền tảng hứa lãi suất cố định rất cao cho tiền mã hóa gửi vào, gọi là “không rủi ro”. Phản ứng hợp lý nhất?',
    options: [
      { id: 'a', text: 'Coi lãi suất cao là bằng chứng nền tảng làm ăn tốt.', explain: 'Lợi suất cố định cao bất thường thường đi kèm rủi ro lớn hoặc mô hình lừa đảo.' },
      { id: 'b', text: 'Hỏi nguồn tạo ra lợi suất, ai giữ tài sản, kiểm toán độc lập và quy định hiện hành; coi lời hứa “không rủi ro” là dấu hiệu cảnh báo.', correct: true, explain: 'Đúng. Nguồn lợi suất và rủi ro đối tác là điều cần hiểu trước khi gửi.' },
      { id: 'c', text: 'Gửi một nửa tài sản để thử.', explain: 'Mức độ tiếp xúc cần tương xứng với khả năng chịu lỗ; một nửa tài sản vào sản phẩm chưa hiểu là quá lớn.' },
    ],
  },
  sources: [
    { title: 'III. The future monetary system (Annual Economic Report 2022)', publisher: 'Bank for International Settlements', url: 'https://www.bis.org/publ/arpdf/ar2022e3.htm' },
    { title: 'Chính thức triển khai thí điểm thị trường tài sản mã hóa tại Việt Nam (Nghị quyết 05/2025/NQ-CP)', publisher: 'Tạp chí Điện tử Luật sư Việt Nam (LSVN), tháng 9/2025', url: 'https://lsvn.vn/chinh-thuc-trien-khai-thi-diem-thi-truong-tai-san-ma-hoa-tai-viet-nam-a162962.html' },
    { title: 'Cryptocurrency', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Cryptocurrency' },
    { title: 'Stablecoin', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Stablecoin' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 109,
}
