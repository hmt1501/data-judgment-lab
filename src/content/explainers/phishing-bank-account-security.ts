import type { Explainer } from '../../../shared/explainer'

export const phishingBankAccountSecurity: Explainer = {
  id: 'phishing-bank-account-security',
  slug: 'phishing-bank-account-security',
  question: 'Lừa đảo qua mạng nhắm vào tài khoản ngân hàng hoạt động thế nào và bảo vệ mình ra sao?',
  title: 'Lừa đảo qua mạng và an toàn tài khoản ngân hàng',
  topic: 'personal-finance',
  tldr: 'Phần lớn vụ lừa đảo không "hack" hệ thống ngân hàng mà **đánh vào người dùng**: giả danh để lấy mật khẩu, mã OTP, hoặc dụ cài ứng dụng/quét liên kết lạ. Dấu hiệu chung là **mạo danh nguồn quen thuộc** và **thúc ép hành động ngay**. Quy tắc cốt lõi: không cung cấp thông tin bảo mật cho bất kỳ ai, và luôn xác minh qua kênh chính thức do bạn tự mở.',
  keyPoints: [
    'Theo Ủy ban Thương mại Liên bang Mỹ (FTC, bài "Phishing: Don\'t take the bait", 2019), phishing dùng email, tin nhắn hoặc cuộc gọi giả để lấy số tài khoản, mật khẩu hoặc thông tin cá nhân; dấu hiệu gồm mạo danh công ty hoặc người quen, thúc ép hành động gấp và liên kết độc hại có thể cài mã khóa dữ liệu hoặc đánh cắp thông tin.',
    'Khuyến cáo của Vụ Thanh toán, Ngân hàng Nhà nước (đăng lại trên Tạp chí Thị trường Tài chính Tiền tệ ngày 10/9/2025) nêu các thủ đoạn: mạo danh ngân hàng nhắn tin, phát tán link và mã QR giả, giả danh công an, tòa án, tuyển dụng "việc nhẹ lương cao" ở nước ngoài, và dùng AI/deepfake để chiếm đoạt thông tin.',
    'Cũng theo khuyến cáo đó: **không cung cấp** mật khẩu, OTP, số thẻ, CVV hay dữ liệu sinh trắc học "cho bất kỳ ai dưới bất kỳ hình thức nào"; không truy cập, quét hoặc cài link, QR, ứng dụng không rõ nguồn gốc; kiểm tra thông tin qua website, ứng dụng và tổng đài chính thức của ngân hàng.',
    'Lớp bảo vệ kỹ thuật bạn tự đặt được (theo cùng khuyến cáo): đổi mật khẩu định kỳ, bật thông báo biến động số dư và **đặt hạn mức chuyển tiền** để giới hạn thiệt hại nếu bị lộ.',
    'Quy trình khi nghi ngờ: dừng giao dịch, tự gọi lại tổng đài in trên thẻ hoặc trong ứng dụng chính thức (không dùng số trong tin nhắn), khóa thẻ/ứng dụng nếu cần và báo công an; tin nhắn "lừa" thường không cho bạn thời gian suy nghĩ.',
  ],
  causalChain: [
    { from: 'Kẻ gian thu thập thông tin cá nhân hoặc mạo danh nguồn tin cậy', to: 'Nạn nhân tin đó là tin nhắn, cuộc gọi hợp lệ', mechanism: 'Mạo danh ngân hàng, công an hay người quen tạo cảm giác uy tín; thông tin cá nhân đã lộ khiến lời thoại có vẻ chính xác.' },
    { from: 'Tạo áp lực thời gian hoặc nỗi sợ', to: 'Nạn nhân bỏ qua bước kiểm tra', mechanism: 'Thông báo khóa tài khoản, nợ thuế hay trúng thưởng khiến người nhận hành động nhanh trước khi kịp xác minh.' },
    { from: 'Nạn nhân bấm link, quét QR hoặc cài ứng dụng lạ', to: 'Lộ thông tin hoặc cài mã độc', mechanism: 'Trang giả thu mật khẩu, OTP; ứng dụng độc hại có thể đọc tin nhắn, điều khiển thiết bị từ xa.' },
    { from: 'Kẻ gian có thông tin đăng nhập và mã xác thực', to: 'Chuyển tiền khỏi tài khoản', mechanism: 'Giao dịch qua ứng dụng ngân hàng bị thực hiện bằng thông tin hợp lệ nên rất khó đảo ngược sau khi tiền đã chuyển.' },
    { from: 'Hạn mức chuyển tiền thấp, thông báo biến động số dư, xác minh qua kênh chính thức', to: 'Giảm xác suất và thiệt hại', mechanism: 'Chặn giao dịch lớn, tăng khả năng phát hiện sớm và tạo thời gian để khóa tài khoản trước khi mất hết.' },
  ],
  vietnamImpact: [
    { group: 'Người dùng ngân hàng điện tử', effect: 'Lượng giao dịch qua ứng dụng và QR tăng khiến bề mặt tấn công rộng hơn; cần quen với việc chỉ cài ứng dụng từ kho chính thức và không chia sẻ OTP.', direction: 'down' },
    { group: 'Người cao tuổi và người ít dùng công nghệ', effect: 'Dễ bị thủ đoạn giả danh công an, tòa án, nhân viên ngân hàng; cần người thân trao đổi và thiết lập hạn mức thấp.', direction: 'down' },
    { group: 'Người tìm việc làm thêm, đầu tư online', effect: 'Lời mời "việc nhẹ lương cao" hoặc "đầu tư siêu lợi nhuận" nằm trong nhóm thủ đoạn mà cơ quan quản lý đã cảnh báo.', direction: 'down' },
    { group: 'Ngân hàng và tổ chức thanh toán', effect: 'Phải đầu tư xác thực, phát hiện giao dịch bất thường và truyền thông; trách nhiệm người dùng vẫn là không để lộ mã xác thực.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Khuyến cáo và cảnh báo lừa đảo của Ngân hàng Nhà nước và ngân hàng bạn dùng', why: 'Cập nhật thủ đoạn mới và kênh liên hệ chính thức.', where: 'Cổng thông tin sbv.gov.vn; website, ứng dụng và tổng đài chính thức của ngân hàng' },
    { name: 'Thông báo biến động số dư và nhật ký đăng nhập', why: 'Phát hiện sớm giao dịch lạ.', where: 'Ứng dụng ngân hàng, SMS hoặc thông báo đẩy' },
    { name: 'Hạn mức chuyển tiền theo ngày và theo lần', why: 'Giới hạn mức thiệt hại tối đa nếu bị lộ thông tin.', where: 'Cài đặt trong ứng dụng ngân hàng' },
    { name: 'Tên miền và tên ứng dụng', why: 'Link giả thường sai một vài ký tự so với tên thật; ứng dụng giả không nằm trên kho ứng dụng chính thức.', where: 'Tự gõ địa chỉ website của ngân hàng; tải ứng dụng từ App Store hoặc Google Play' },
  ],
  counterpoints: [
    'Không có biện pháp nào bảo vệ tuyệt đối: thủ đoạn thay đổi liên tục và công cụ như deepfake khiến giọng nói, hình ảnh cũng không còn là bằng chứng chắc chắn.',
    'Đặt hạn mức quá thấp có thể bất tiện cho giao dịch hợp lệ; cần cân bằng giữa tiện lợi và an toàn, có thể tách tài khoản chi tiêu và tài khoản tiết kiệm.',
    'Khuyến cáo trong bài là của cơ quan quản lý tại thời điểm 9/2025; tên cơ quan, quy trình báo cáo hoặc công cụ hỗ trợ có thể thay đổi, nên kiểm tra thông tin hiện hành.',
  ],
  glossary: [
    { term: 'Phishing', definition: 'Lừa đảo giả mạo nguồn tin cậy qua email, tin nhắn hoặc cuộc gọi để lấy thông tin nhạy cảm.' },
    { term: 'OTP', definition: 'Mật khẩu dùng một lần để xác thực giao dịch; tuyệt đối không chia sẻ.' },
    { term: 'CVV', definition: 'Mã bảo mật in trên thẻ, dùng khi thanh toán trực tuyến.' },
    { term: 'Deepfake', definition: 'Hình ảnh hoặc giọng nói giả do AI tạo ra để mạo danh người thật.' },
    { term: 'Hạn mức giao dịch', definition: 'Số tiền tối đa có thể chuyển trong một lần hoặc một ngày.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'phishing-bank-account-security-q',
    question: 'Bạn nhận tin nhắn "ngân hàng" báo tài khoản sắp bị khóa, kèm link và yêu cầu nhập OTP trong 10 phút. Hành động nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Bấm link và nhập OTP nhanh để tránh bị khóa.', explain: 'Đây là kịch bản điển hình: thúc ép thời gian, link lạ và đòi OTP. Ngân hàng thật không yêu cầu bạn gửi OTP.' },
      { id: 'b', text: 'Không bấm link; tự mở ứng dụng hoặc gọi tổng đài chính thức để kiểm tra.', correct: true, explain: 'Đúng. Xác minh qua kênh bạn tự mở và không chia sẻ OTP là nguyên tắc cốt lõi trong khuyến cáo.' },
      { id: 'c', text: 'Gọi vào số điện thoại ghi trong chính tin nhắn để hỏi lại.', explain: 'Số trong tin nhắn có thể thuộc kẻ lừa đảo. Hãy dùng số trên thẻ hoặc trong ứng dụng chính thức.' },
    ],
  },
  sources: [
    { title: 'Phishing: Don\'t take the bait', publisher: 'Federal Trade Commission (Consumer Advice)', url: 'https://www.consumer.ftc.gov/blog/2019/03/phishing-dont-take-bait' },
    { title: 'Ngân hàng Nhà nước khuyến cáo người dân cảnh giác trước các hình thức lừa đảo trong lĩnh vực ngân hàng (đăng 10/9/2025)', publisher: 'Tạp chí Thị trường Tài chính Tiền tệ', url: 'https://thitruongtaichinhtiente.vn/ngan-hang-nha-nuoc-khuyen-cao-nguoi-dan-canh-giac-truoc-cac-hinh-thuc-lua-dao-trong-linh-vuc-ngan-hang-70273.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 187,
}
