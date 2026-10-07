import type { Explainer } from '../explainer'

export const sbvPolicyTools: Explainer = {
  id: 'sbv-policy-tools',
  slug: 'sbv-policy-tools',
  question: 'NHNN điều hành tiền tệ bằng công cụ gì và nó ảnh hưởng thế nào tới lãi suất tôi vay, tôi gửi?',
  title: 'Công cụ của NHNN: từ lãi suất điều hành tới lãi suất bạn vay và gửi',
  topic: 'vietnam-economy',
  tldr: 'NHNN tác động lên lượng tiền và giá vốn qua **lãi suất điều hành** (tái cấp vốn, tái chiết khấu, cho vay qua đêm), **nghiệp vụ thị trường mở** (bơm tiền qua mua có kỳ hạn giấy tờ có giá, hút tiền qua tín phiếu), và các công cụ đặc thù như **giao chỉ tiêu tăng trưởng tín dụng** (room) và trần lãi suất huy động ngắn hạn. Tín hiệu đi từ thị trường liên ngân hàng sang lãi suất huy động rồi cho vay, thường với độ trễ vài tháng.',
  keyPoints: [
    '**Lãi suất tái cấp vốn** và **tái chiết khấu** là giá NHNN cho ngân hàng vay khi thiếu vốn; chúng ít khi được dùng hằng ngày nhưng là **tín hiệu** về hướng chính sách. Ví dụ, từ 19/6/2023 NHNN đặt tái cấp vốn 4,5%/năm và tái chiết khấu 3,0%/năm.',
    '**Nghiệp vụ thị trường mở (OMO)** là công cụ dùng hằng ngày: NHNN **mua có kỳ hạn** giấy tờ có giá để bơm VND, hoặc **phát hành tín phiếu** để hút VND; lãi suất trúng thầu là tín hiệu nhanh nhất về ý định điều tiết thanh khoản.',
    '**Room tín dụng** là chỉ tiêu tăng trưởng dư nợ NHNN giao cho từng ngân hàng, một công cụ hành chính đặc thù của Việt Nam; Chính phủ đã yêu cầu xây dựng lộ trình và thí điểm bỏ giao chỉ tiêu này với các ngân hàng đủ tiêu chuẩn.',
    'Các công cụ khác: **dự trữ bắt buộc**, **trần lãi suất huy động** kỳ hạn ngắn, và **mua/bán ngoại tệ** (cũng làm thay đổi lượng VND trong hệ thống).',
    'Lãi suất bạn vay/gửi không chỉ phụ thuộc NHNN: còn do chi phí huy động của ngân hàng, cạnh tranh, rủi ro của người vay và tỷ lệ an toàn vốn.',
  ],
  causalChain: [
    { from: 'NHNN muốn nới lỏng (hoặc thắt chặt)', to: 'Bơm (hoặc hút) VND qua OMO, điều chỉnh lãi suất điều hành', mechanism: 'Mua có kỳ hạn giấy tờ có giá đưa VND vào hệ thống; bán tín phiếu rút VND ra; hạ/tăng lãi suất điều hành phát tín hiệu cho thị trường.' },
    { from: 'Bơm (hoặc hút) VND qua OMO, điều chỉnh lãi suất điều hành', to: 'Lãi suất liên ngân hàng thay đổi', mechanism: 'Thanh khoản dồi dào hơn làm lãi suất cho vay qua đêm giữa các ngân hàng giảm, và ngược lại; đây là phản ứng nhanh nhất, tính bằng ngày.' },
    { from: 'Lãi suất liên ngân hàng thay đổi', to: 'Lãi suất huy động của ngân hàng thương mại điều chỉnh', mechanism: 'Khi vốn liên ngân hàng rẻ và dễ, ngân hàng bớt cạnh tranh huy động từ dân cư; khi đắt, họ tăng lãi suất tiền gửi để giữ vốn.' },
    { from: 'Lãi suất huy động của ngân hàng thương mại điều chỉnh', to: 'Lãi suất cho vay và tăng trưởng tín dụng', mechanism: 'Chi phí vốn đầu vào thay đổi kéo theo lãi vay mới; khoản vay thả nổi điều chỉnh theo lãi suất cơ sở ở kỳ định giá kế tiếp, nên độ trễ thường vài tháng.' },
    { from: 'Lãi suất cho vay và tăng trưởng tín dụng', to: 'Chi tiêu, đầu tư, lạm phát và tỷ giá', mechanism: 'Vốn rẻ kích thích vay mua nhà, đầu tư, tiêu dùng; nhưng nới quá mức có thể làm tăng lạm phát và áp lực tỷ giá do chênh lệch lãi suất VND–USD thu hẹp.' },
  ],
  vietnamImpact: [
    { group: 'Người vay mua nhà lãi suất thả nổi', effect: 'Khi NHNN nới lỏng, lãi suất cơ sở có xu hướng giảm sau vài kỳ điều chỉnh; khi thắt chặt, khoản trả góp tăng.', direction: 'mixed' },
    { group: 'Người gửi tiết kiệm', effect: 'Nới lỏng thường kéo lãi suất huy động xuống; cần so với lạm phát để đánh giá lãi suất thực.', direction: 'mixed' },
    { group: 'Doanh nghiệp vừa và nhỏ', effect: 'Lãi suất thấp chưa đủ: room tín dụng và yêu cầu tài sản bảo đảm vẫn quyết định họ có tiếp cận được vốn hay không.', direction: 'mixed' },
    { group: 'Ngân hàng thương mại', effect: 'Room tín dụng giới hạn tốc độ tăng dư nợ; ngân hàng được giao room cao hơn có lợi thế mở rộng cho vay.', direction: 'mixed' },
    { group: 'Thị trường chứng khoán, bất động sản', effect: 'Thanh khoản dồi dào và lãi suất thấp thường hỗ trợ giá tài sản; tín hiệu hút tiền qua tín phiếu thường làm thị trường thận trọng.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Lãi suất bình quân liên ngân hàng qua đêm, 1 tuần', why: 'Phản ánh trực tiếp thanh khoản hệ thống và ý định điều tiết của NHNN.', where: 'NHNN công bố hằng ngày trên sbv.gov.vn' },
    { name: 'Kết quả OMO và phát hành tín phiếu (khối lượng, lãi suất)', why: 'Cho biết NHNN đang bơm ròng hay hút ròng VND.', where: 'Thông cáo nghiệp vụ thị trường mở của NHNN; báo cáo của công ty chứng khoán' },
    { name: 'Lãi suất điều hành (tái cấp vốn, tái chiết khấu, cho vay qua đêm)', why: 'Tín hiệu chính thức về hướng chính sách; thay đổi không thường xuyên nên mỗi lần thay đổi đều đáng chú ý.', where: 'Quyết định của Thống đốc NHNN' },
    { name: 'Tăng trưởng tín dụng so với đầu năm và chỉ tiêu cả năm', why: 'Cho biết dòng vốn đang chảy vào nền kinh tế nhanh hay chậm so với kế hoạch.', where: 'NHNN công bố định kỳ; họp báo của NHNN' },
    { name: 'Lãi suất huy động niêm yết của các ngân hàng lớn', why: 'Là điểm cuối của chuỗi truyền dẫn mà người dân thấy trực tiếp.', where: 'Website ngân hàng thương mại' },
  ],
  counterpoints: [
    'Truyền dẫn tại Việt Nam không hoàn toàn theo thị trường: chỉ đạo hành chính về lãi suất cho vay và room tín dụng có thể làm lãi suất thay đổi nhanh hoặc chậm hơn so với tín hiệu OMO.',
    'Lãi suất liên ngân hàng tăng có thể chỉ do yếu tố mùa vụ (cuối quý, Tết, kho bạc rút tiền) chứ không phải thay đổi chính sách; cần nhìn thêm hành động OMO.',
    'Lãi suất thấp không tự động tạo ra tín dụng: nếu cầu vay yếu hoặc ngân hàng lo nợ xấu, tiền rẻ vẫn khó chảy vào nền kinh tế.',
  ],
  glossary: [
    { term: 'Lãi suất tái cấp vốn', definition: 'Lãi suất NHNN áp dụng khi cho ngân hàng thương mại vay có bảo đảm bằng giấy tờ có giá.' },
    { term: 'Lãi suất tái chiết khấu', definition: 'Lãi suất NHNN áp dụng khi chiết khấu lại giấy tờ có giá ngắn hạn cho ngân hàng.' },
    { term: 'OMO (nghiệp vụ thị trường mở)', definition: 'NHNN mua/bán giấy tờ có giá với ngân hàng để bơm hoặc hút VND ngắn hạn.' },
    { term: 'Tín phiếu NHNN', definition: 'Giấy tờ có giá ngắn hạn NHNN phát hành để hút bớt VND khỏi hệ thống.' },
    { term: 'Room tín dụng', definition: 'Chỉ tiêu tăng trưởng dư nợ cho vay mà NHNN giao cho từng tổ chức tín dụng trong năm.' },
    { term: 'Dự trữ bắt buộc', definition: 'Tỷ lệ tiền gửi ngân hàng phải gửi tại NHNN; tăng tỷ lệ này làm giảm lượng tiền có thể cho vay.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'sbv-policy-tools-q',
    question: 'Lãi suất liên ngân hàng qua đêm tăng vọt trong một tuần, NHNN không đổi lãi suất điều hành nhưng phát hành tín phiếu liên tục. Cách đọc nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'NHNN đang chủ động hút VND, có thể để hỗ trợ tỷ giá; lãi suất huy động có thể nhích lên sau đó.', correct: true, explain: 'Đúng. Tín phiếu là công cụ hút tiền; không cần đổi lãi suất điều hành NHNN vẫn có thể thắt thanh khoản. Mục tiêu hay gặp là tăng chênh lệch lãi suất VND–USD để giảm áp lực tỷ giá.' },
      { id: 'b', text: 'Lãi suất điều hành không đổi nên chính sách tiền tệ không thay đổi gì.', explain: 'Lãi suất điều hành chỉ là một tín hiệu; OMO và tín phiếu mới là công cụ điều tiết thanh khoản hằng ngày.' },
      { id: 'c', text: 'Lãi suất vay mua nhà của tôi sẽ tăng ngay từ ngày mai.', explain: 'Truyền dẫn từ liên ngân hàng sang lãi suất cho vay có độ trễ, và khoản vay thả nổi chỉ điều chỉnh ở kỳ định giá lại.' },
    ],
  },
  sources: [
    { title: 'SBV adjusts policy interest rates (15/3/2023)', publisher: 'NHNN', url: 'https://www.sbv.gov.vn/en/web/sbv_portal/w/sbv564625' },
    { title: 'Ngân hàng Nhà nước Việt Nam hạ lãi suất điều hành lần thứ 4 trong năm 2023', publisher: 'Hiệp hội Ngân hàng Việt Nam', url: 'https://vnba.org.vn/vi/ngan-hang-nha-nuoc-viet-nam-ha-lai-suat-dieu-hanh-lan-thu-4-trong-nam-2023-11118.htm' },
    { title: 'Ngân hàng Nhà nước nghiên cứu lộ trình bỏ room tín dụng', publisher: 'Hiệp hội Ngân hàng Việt Nam', url: 'https://vnba.org.vn/vi/ngan-hang-nha-nuoc-nghien-cuu-lo-trinh-bo-room-tin-dung-15591.htm' },
    { title: 'Open market operations', publisher: 'European Central Bank', url: 'https://www.ecb.europa.eu/mopo/implement/omo/html/index.en.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
