import type { Explainer } from '../../../shared/explainer'

export const ponziScamsHighReturnPromises: Explainer = {
  id: 'ponzi-scams-high-return-promises',
  slug: 'ponzi-scams-high-return-promises',
  question: 'Làm sao nhận diện lời hứa lãi cao bất thường và mô hình Ponzi?',
  title: 'Lãi cao, chắc chắn, rút được: ba lời hứa không thể cùng đúng, và là dấu hiệu Ponzi kinh điển',
  topic: 'personal-finance',
  tldr: 'Mô hình **Ponzi** trả lãi cho nhà đầu tư cũ bằng tiền của nhà đầu tư mới, không phải bằng lợi nhuận kinh doanh thật. Nó sụp đổ khi không còn đủ người mới hoặc khi nhiều người cùng rút. Theo khuyến cáo của Cục Cạnh tranh và Bảo vệ người tiêu dùng (Bộ Công Thương, đăng lại trên trang VNBA ngày 30/06/2021), dấu hiệu gồm hứa làm giàu nhanh, lãi cao vượt nhiều lần lãi tổ chức tín dụng, cam kết gần như không rủi ro và dùng tiền người sau trả người trước.',
  keyPoints: [
    'Theo khuyến cáo nói trên, các dấu hiệu nhận biết: (1) hứa **làm giàu nhanh**; (2) **lãi suất cao** vượt nhiều lần mức lãi thông thường của tổ chức tín dụng; (3) **cam kết an toàn/hoàn vốn cố định**; (4) lấy tiền người sau trả cho người trước, liên tục lôi kéo người mới; (5) khi có người muốn rút, chào gói đầu tư mới lãi cao hơn để giữ tiền; (6) thường khoác vỏ **công nghệ mới** hoặc tiền ảo.',
    '**Ví dụ giả định về toán học:** hứa lãi 5%/tháng và để tiền tự cộng dồn thì sau 12 tháng nghĩa vụ ≈ 1,80 lần gốc (1,05¹²), sau 24 tháng ≈ 3,23 lần, sau 60 tháng ≈ 18,7 lần. Không hoạt động kinh doanh thật nào duy trì được lợi suất như vậy ổn định; nghĩa vụ trả tăng cấp số nhân nên cần dòng tiền người mới tăng theo.',
    '**Ponzi khác đa cấp (pyramid):** Ponzi che giấu việc trả bằng vốn mới dưới danh nghĩa "đầu tư"; đa cấp trả thưởng chủ yếu từ tiền tuyển người mới. Cả hai đều phụ thuộc dòng người tham gia mới và cùng sụp đổ khi dòng đó cạn (xem Wikipedia).',
    'Ba thuộc tính **lãi cao – chắc chắn – dễ rút** không thể cùng đúng; trong tài chính, lợi suất cao luôn đi kèm rủi ro cao hoặc kém thanh khoản. Chính sự mâu thuẫn này là chỗ nên dừng lại hỏi.',
    'Hành vi thường gặp: đưa lãi đúng hạn ban đầu để tạo niềm tin, khuyến khích đưa người thân tham gia, thưởng hoa hồng giới thiệu, thiếu thông tin giấy phép, không giải thích rõ tiền được dùng vào đâu.',
  ],
  causalChain: [
    { from: 'Hứa lãi rất cao, trả đúng hạn ban đầu', to: 'Tạo niềm tin và truyền miệng', mechanism: 'Người đã nhận lãi giới thiệu người thân; lợi ích thấy được thúc đẩy "bằng chứng xã hội".' },
    { from: 'Dòng tiền mới chảy vào tăng', to: 'Trả được lãi cho người cũ, nghĩa vụ phình ra', mechanism: 'Lãi cam kết tính theo cấp số nhân, nên tổng nghĩa vụ vượt tốc độ tăng của vốn mới.' },
    { from: 'Tuyển người mới chậm lại hoặc nhiều người cùng rút', to: 'Không còn tiền trả', mechanism: 'Không có hoạt động kinh doanh thật nuôi dòng tiền, chỉ còn tiền người mới.' },
    { from: 'Mô hình sụp đổ', to: 'Người tham gia muộn mất vốn', mechanism: 'Người vào sau thiệt nhiều nhất; tài sản thường đã bị rút hoặc không đủ để hoàn trả.' },
  ],
  vietnamImpact: [
    { group: 'Người tiết kiệm nhỏ lẻ', effect: 'Dễ bị thu hút bởi lãi cao hơn tiền gửi; mất vốn có thể ảnh hưởng nghiêm trọng đời sống.', direction: 'down' },
    { group: 'Người cao tuổi, người ít tiếp cận kiến thức tài chính', effect: 'Là nhóm dễ bị nhắm đến qua mạng xã hội, nhóm kín; cần người thân chia sẻ cảnh báo.', direction: 'down' },
    { group: 'Cơ quan quản lý và công an', effect: 'Xử lý các vụ huy động vốn trái phép, lừa đảo; cần phối hợp cảnh báo sớm và giáo dục tài chính.', direction: 'mixed' },
    { group: 'Doanh nghiệp tài chính hợp pháp', effect: 'Hình ảnh ngành bị ảnh hưởng khi vụ lừa đảo xảy ra; minh bạch và tuân thủ giúp phân biệt.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Lãi suất hứa hẹn so với lãi suất tiền gửi và lợi suất trái phiếu', why: 'Mức chênh lệch rất lớn so với mặt bằng là dấu hiệu bất thường đầu tiên.', where: 'Biểu lãi suất công bố của các ngân hàng; Ngân hàng Nhà nước (sbv.gov.vn)' },
    { name: 'Giấy phép và tư cách pháp lý của đơn vị huy động', why: 'Huy động vốn từ công chúng cần phép; công ty không phép là rủi ro.', where: 'Cổng thông tin đăng ký doanh nghiệp quốc gia; danh sách công ty chứng khoán, quản lý quỹ có phép của Ủy ban Chứng khoán Nhà nước' },
    { name: 'Nguồn lợi nhuận được giải thích', why: 'Nếu không giải thích được ai trả lãi và từ hoạt động nào, đó là dấu hiệu nghi ngờ.', where: 'Tài liệu của đơn vị; hỏi và đối chiếu độc lập' },
    { name: 'Cảnh báo chính thức của cơ quan quản lý', why: 'Cập nhật các hình thức lừa đảo mới.', where: 'Ủy ban Chứng khoán Nhà nước, Ngân hàng Nhà nước, Bộ Công an, Cục Cạnh tranh và Bảo vệ người tiêu dùng' },
  ],
  counterpoints: [
    'Lãi cao không đồng nghĩa lừa đảo: khoản đầu tư rủi ro (cổ phiếu, trái phiếu doanh nghiệp, kinh doanh) có thể có lợi suất cao hợp pháp, nhưng đi kèm rủi ro mất vốn và được công bố rõ ràng.',
    'Không phải mọi dự án công nghệ hay tiền mã hóa đều là Ponzi; vấn đề là nguồn trả lãi và cam kết chắc chắn.',
    'Người bị lừa không phải vì thiếu thông minh: mô hình khai thác niềm tin xã hội và sức thuyết phục của câu chuyện; vì vậy cần quy trình kiểm tra độc lập thay vì dựa vào cảm giác.',
  ],
  glossary: [
    { term: 'Ponzi', definition: 'Mô hình trả lãi cho nhà đầu tư cũ bằng vốn của nhà đầu tư mới.' },
    { term: 'Đa cấp (pyramid scheme)', definition: 'Mô hình thưởng chủ yếu dựa trên việc tuyển thêm người tham gia.' },
    { term: 'Huy động vốn trái phép', definition: 'Nhận tiền từ công chúng mà không có giấy phép theo quy định.' },
    { term: 'Bằng chứng xã hội', definition: 'Xu hướng tin vào điều nhiều người xung quanh làm hoặc nói.' },
    { term: 'Lãi kép', definition: 'Lãi tính trên cả gốc và lãi đã cộng dồn.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'ponzi-scams-high-return-promises-q',
    question: 'Một nhóm mời góp vốn, hứa lãi 5%/tháng "cam kết hoàn vốn", cho rút bất cứ lúc nào và thưởng hoa hồng khi giới thiệu người mới. Phản ứng hợp lý?',
    options: [
      { id: 'a', text: 'Thử góp số nhỏ vì thấy bạn bè đã nhận lãi đúng hạn.', explain: 'Nhận lãi đúng hạn ban đầu là cách tạo niềm tin của Ponzi.' },
      { id: 'b', text: 'Tránh xa và tìm cảnh báo từ cơ quan quản lý: lãi cao, cam kết chắc chắn, dễ rút và thưởng giới thiệu là cụm dấu hiệu nguy hiểm.', correct: true, explain: 'Đúng. Các dấu hiệu trùng với khuyến cáo của cơ quan chức năng; ba lời hứa lãi cao – chắc chắn – dễ rút không thể cùng đúng.' },
      { id: 'c', text: 'Góp lớn để lãi nhiều hơn vì rút được bất cứ lúc nào.', explain: 'Khả năng rút phụ thuộc dòng tiền người mới; khi sụp đổ, mọi người cùng không rút được.' },
    ],
  },
  sources: [
    { title: 'Nhận biết dấu hiệu lừa đảo góp vốn đầu tư kiểu Ponzi (đăng 30/06/2021, tổng hợp khuyến cáo của Cục Cạnh tranh và Bảo vệ người tiêu dùng)', publisher: 'Hiệp hội Ngân hàng Việt Nam (VNBA)', url: 'https://vnba.org.vn/vi/nhan-biet-dau-hieu-lua-dao-gop-von-dau-tu-kieu-ponzi-719.htm' },
    { title: 'Ponzi scheme', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Ponzi_scheme' },
    { title: 'Pyramid scheme', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Pyramid_scheme' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 78,
}
