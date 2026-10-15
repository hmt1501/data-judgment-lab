import type { Explainer } from '../../../shared/explainer'

export const pumpAndDumpMarketManipulation: Explainer = {
  id: 'pump-and-dump-market-manipulation',
  slug: 'pump-and-dump-market-manipulation',
  question: 'Thao túng giá kiểu "bơm xả" là gì và có dấu hiệu nào để nhận biết?',
  title: 'Thao túng giá "bơm xả": cơ chế và dấu hiệu nhận biết',
  topic: 'markets-investing',
  tldr: '"Bơm xả" (pump and dump) là chiêu mua gom cổ phiếu giá rẻ, tung thông tin hoặc tạo lực cầu giả để kéo giá lên (bơm) rồi bán ra cho người đến sau (xả). Tín hiệu thường gặp: cổ phiếu ít thanh khoản bỗng tăng nóng không có thông tin kiểm chứng, lời mời gọi gấp gáp, hứa hẹn "chắc chắn". Tại Việt Nam, thao túng giá là hành vi bị cấm và có thể bị xử phạt hành chính hoặc truy cứu hình sự.',
  keyPoints: [
    'Wikipedia: promoter mua cổ phiếu giá rẻ của công ty giá trị thấp, lan truyền thông tin sai hoặc gây hiểu lầm để thu hút người mua, rồi bán ở giá cao; sau đó giá thường sụp, người mua sau thua lỗ.',
    'Mục tiêu thường là cổ phiếu nhỏ, thanh khoản thấp, ít thông tin độc lập; dấu hiệu theo mô tả: quảng bá thúc giục mua nhanh, khoe thông tin nội bộ, hứa lợi nhuận bảo đảm, giá và khối lượng tăng vọt không gắn với tin tức kiểm chứng được.',
    'Theo Luật Chứng khoán 2019 và Nghị định 156/2020/NĐ-CP, các hình thức bị cấm gồm dùng một hoặc nhiều tài khoản, thông đồng đặt lệnh liên tục tạo cung cầu giả; đặt lệnh mua bán cùng loại chứng khoán trong ngày không đổi chủ sở hữu thật; giao dịch khối lượng lớn đầu/cuối phiên để tạo giá; đưa ý kiến sau khi nắm giữ để tác động giá; kết hợp tin đồn sai lệch (theo Tạp chí Kinh tế – Tài chính, 30/03/2022).',
    'Cũng theo bài đó: ngưỡng hình sự theo Điều 211 Bộ luật Hình sự là thu lợi bất chính từ 500 triệu đồng đến dưới 1,5 tỷ đồng hoặc gây thiệt hại cho nhà đầu tư từ 1 tỷ đến dưới 3 tỷ đồng; khung 1 phạt tiền 500 triệu đến 2 tỷ đồng hoặc phạt tù 6 tháng đến 3 năm; khung 2 phạt tù 2–7 năm. Mức 3 tỷ đồng (tổ chức) và 1,5 tỷ đồng (cá nhân) là mức phạt tối đa chung trong lĩnh vực chứng khoán; riêng thao túng thị trường, theo Tạp chí Công Thương (09/01/2021) về Nghị định 156/2020/NĐ-CP, mức phạt tối đa là 10 lần khoản thu trái pháp luật với tổ chức và 5 lần với cá nhân, và nếu không có khoản thu hoặc số tính ra thấp hơn thì áp dụng mức tối đa chung. Phạt hành chính thao túng còn kèm buộc nộp lại khoản thu trái pháp luật. Các nguồn là năm 2021–2024; không xác nhận được văn bản mới hơn thay thế, cần kiểm tra văn bản hiện hành.',
    'Nhà đầu tư nhỏ thường là người mua ở giai đoạn "xả"; trách nhiệm tự kiểm chứng thông tin là cần thiết dù hành vi thao túng bị cấm.',
  ],
  causalChain: [
    { from: 'Nhóm thao túng gom cổ phiếu giá thấp, thanh khoản kém', to: 'Có vị thế để hưởng lợi khi giá tăng', mechanism: 'Mua trước khi tin đồn lan ra; cổ phiếu thanh khoản thấp dễ bị đẩy giá bằng khối lượng nhỏ.' },
    { from: 'Tạo lực cầu giả hoặc lan truyền thông tin tích cực không kiểm chứng', to: 'Giá và khối lượng tăng nóng, thu hút người mua mới', mechanism: 'Lệnh mua liên tiếp, thông tin "nội bộ", bình luận trên mạng tạo cảm giác khan hiếm và sợ bỏ lỡ (FOMO).' },
    { from: 'Người mua mới đẩy giá lên cao', to: 'Nhóm thao túng bán ra (xả) ở giá cao', mechanism: 'Họ cần người mua đối ứng để thoát vị thế; thanh khoản mỏng nên khi họ bán giá giảm nhanh.' },
    { from: 'Xả xong, lực cầu giả biến mất', to: 'Giá sụp, người mua sau thua lỗ', mechanism: 'Không còn câu chuyện hay lực mua, nên giá quay lại gần giá trị cơ bản hoặc thấp hơn.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân mua theo tin đồn', effect: 'Rủi ro lớn nhất: mua ở đỉnh bị xả; cổ phiếu thanh khoản thấp khó thoát khi giá sụp.', direction: 'down' },
    { group: 'Doanh nghiệp niêm yết bị dính vào thao túng', effect: 'Uy tín và khả năng huy động vốn bị tổn hại khi có điều tra, xử phạt.', direction: 'down' },
    { group: 'Thị trường chứng khoán nói chung', effect: 'Xử lý nghiêm giúp tăng niềm tin, nhưng các vụ việc thao túng làm giảm tâm lý nhà đầu tư nhỏ.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Giá và khối lượng tăng đột biến không có tin tức tương ứng', why: 'Dấu hiệu bơm điển hình.', where: 'Bảng giá, biểu đồ cổ phiếu; công bố thông tin của doanh nghiệp' },
    { name: 'Thanh khoản trung bình và tỷ lệ cổ phiếu tự do chuyển nhượng', why: 'Cổ phiếu mỏng thanh khoản dễ bị thao túng.', where: 'Sở Giao dịch Chứng khoán, dữ liệu của công ty chứng khoán' },
    { name: 'Thông tin quảng bá trên mạng xã hội, nhóm kín, tin nhắn mời gọi', why: 'Lời mời gấp gáp, hứa hẹn bảo đảm là dấu hiệu rủi ro.', where: 'Cảnh báo của Ủy ban Chứng khoán Nhà nước và Sở Giao dịch' },
    { name: 'Quyết định xử phạt và thông báo của cơ quan quản lý', why: 'Cho biết các mô hình thao túng từng bị phát hiện.', where: 'Ủy ban Chứng khoán Nhà nước, báo chí chính thống' },
  ],
  counterpoints: [
    'Giá tăng nóng không tự nó là bằng chứng thao túng: tin tốt thật, thay đổi cơ bản hoặc dòng tiền ngành cũng có thể đẩy giá và khối lượng.',
    'Phân biệt "ý kiến đầu tư hợp pháp" với "đưa thông tin sai để tác động giá" thường phụ thuộc điều tra chứng cứ chứ không chỉ thấy bề ngoài.',
    'Mức phạt và ngưỡng hình sự là quy định dễ thay đổi; bài viết trích từ nguồn năm 2022 nên cần đối chiếu văn bản hiện hành.',
  ],
  glossary: [
    { term: 'Bơm xả (pump and dump)', definition: 'Đẩy giá cổ phiếu bằng thông tin hoặc lực cầu giả rồi bán ra khi giá cao.' },
    { term: 'Cung cầu giả tạo', definition: 'Lệnh mua bán tạo ra để đánh lừa về mức quan tâm thật của thị trường.' },
    { term: 'Thanh khoản', definition: 'Mức độ dễ mua bán cổ phiếu mà không làm giá thay đổi nhiều.' },
    { term: 'Thông tin nội bộ', definition: 'Thông tin chưa công bố có thể tác động giá; sử dụng để giao dịch là hành vi bị cấm.' },
    { term: 'FOMO', definition: 'Nỗi sợ bỏ lỡ cơ hội, thúc đẩy mua theo đám đông.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'pump-and-dump-market-manipulation-q',
    question: 'Một cổ phiếu ít thanh khoản tăng trần liên tiếp nhiều phiên, nhóm chat liên tục kêu gọi "mua gấp trước khi có tin lớn", doanh nghiệp không công bố thông tin gì mới. Cách phản ứng nào hợp lý?',
    options: [
      { id: 'a', text: 'Mua ngay vì tin lớn sắp ra và giá còn đà tăng.', explain: 'Sai. Đây chính là mẫu hình "bơm": thúc giục, hứa tin nội bộ, không có thông tin kiểm chứng.' },
      { id: 'b', text: 'Đứng ngoài hoặc kiểm chứng qua thông tin công bố chính thức, nhận ra rủi ro người đến sau bị xả.', correct: true, explain: 'Đúng. Thiếu thông tin kiểm chứng, thanh khoản mỏng và lời mời gấp gáp là các dấu hiệu cần thận trọng.' },
      { id: 'c', text: 'Chắc chắn là thao túng nên tố cáo ngay.', explain: 'Chưa đủ cơ sở. Nghi ngờ cần chứng cứ; hành động hợp lý trước hết là tự bảo vệ bằng việc không tham gia.' },
    ],
  },
  sources: [
    { title: 'Hiểu thế nào về hành vi thao túng thị trường chứng khoán (30/03/2022)', publisher: 'Tạp chí Kinh tế – Tài chính', url: 'https://tapchikinhtetaichinh.vn/tu-vu-viec-ong-trinh-van-quyet-hieu-the-nao-ve-hanh-vi-thao-tung-thi-truong-chung-khoan-40922.html' },
    { title: 'Phạt 10 lần khoản thu khi thao túng thị trường chứng khoán (09/01/2021)', publisher: 'Tạp chí Công Thương', url: 'https://tapchicongthuong.vn/phat-10-lan-khoan-thu-khi-thao-tung-thi-truong-chung-khoan-78030.htm' },
    { title: 'Pump and dump', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Pump_and_dump' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 175,
}
