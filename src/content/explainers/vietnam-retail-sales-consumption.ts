import type { Explainer } from '../../../shared/explainer'

export const vietnamRetailSalesConsumption: Explainer = {
  id: 'vietnam-retail-sales-consumption',
  slug: 'vietnam-retail-sales-consumption',
  question: 'Doanh thu bán lẻ và tiêu dùng của Việt Nam: đọc giá hiện hành khác giá so sánh thế nào?',
  title: 'Bán lẻ tăng 13% có thể chỉ là tăng thực khoảng 8%: luôn hỏi số đã loại trừ giá chưa',
  topic: 'vietnam-economy',
  tldr: 'Cục Thống kê công bố tổng mức bán lẻ hàng hóa và doanh thu dịch vụ tiêu dùng theo **giá hiện hành** và tốc độ tăng **sau khi loại trừ yếu tố giá**. Theo thông cáo ngày 3/9/2026, 8 tháng đầu năm đạt khoảng 5.235,5 nghìn tỷ đồng, tăng 13,3% giá hiện hành nhưng chỉ tăng **7,6%** sau loại trừ giá. Muốn đánh giá sức mua thực phải dùng số thứ hai.',
  keyPoints: [
    'Theo Thời báo Tài chính Việt Nam (3/9/2026, dẫn Cục Thống kê – Bộ Tài chính): 8 tháng năm 2026, tổng mức bán lẻ hàng hóa và doanh thu dịch vụ tiêu dùng khoảng 5.235,5 nghìn tỷ đồng, tăng 13,3% so với cùng kỳ; **loại trừ yếu tố giá** tăng 7,6%, so với 7,5% cùng kỳ 2025.',
    'Khoảng cách giữa 13,3% và 7,6% phản ánh giá. Tự tính: 1,133 ÷ 1,076 ≈ 1,053, tức giá tăng bình quân khoảng 5,3% trong rổ này. Đây là suy ra từ hai số công bố chứ không phải số chính thức.',
    'Số theo **giá hiện hành** gồm cả thay đổi giá và lượng; số theo **giá so sánh** (loại trừ giá) đo thay đổi về lượng. Chỉ số thứ hai mới cho biết sức mua thực có mạnh lên không.',
    'Chỉ tiêu này gồm bán lẻ hàng hóa và doanh thu dịch vụ tiêu dùng (trong số liệu 8 tháng, bán lẻ hàng hóa chiếm phần lớn); nó không đồng nhất với toàn bộ chi tiêu tiêu dùng cuối cùng trong GDP, vì phạm vi và cách tính khác nhau.',
    'So sánh thông cáo cùng kỳ hằng năm; các kỳ trước có thể được cập nhật nên cần dùng cùng một bản công bố khi đối chiếu.',
  ],
  causalChain: [
    { from: 'Thu nhập, việc làm, tín dụng tiêu dùng và niềm tin thay đổi', to: 'Lượng hàng hóa, dịch vụ hộ gia đình mua thay đổi', mechanism: 'Chi tiêu thực phụ thuộc thu nhập khả dụng sau khi trừ lạm phát và khả năng vay.' },
    { from: 'Lạm phát', to: 'Doanh thu danh nghĩa tăng nhanh hơn lượng', mechanism: 'Cùng một rổ hàng giá cao hơn khiến giá hiện hành tăng; chênh lệch giữa tăng giá hiện hành và tăng giá so sánh chính là hiệu ứng giá.' },
    { from: 'Khách quốc tế và du lịch hồi phục', to: 'Doanh thu dịch vụ lưu trú, ăn uống tăng', mechanism: 'Chi tiêu của khách du lịch được ghi vào doanh thu dịch vụ tiêu dùng nên tổng mức không chỉ là tiêu dùng của cư dân trong nước.' },
    { from: 'Doanh thu bán lẻ thực tăng', to: 'Đóng góp vào tăng trưởng GDP và lợi nhuận bán lẻ', mechanism: 'Tiêu dùng là một trụ cột của tổng cầu; bán lẻ thực tăng cho thấy cầu nội địa đang đóng góp, dù chỉ tiêu này không trùng khớp với cấu phần tiêu dùng trong GDP.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp bán lẻ, F&B, du lịch', effect: 'Dùng số loại trừ giá để đánh giá lượng khách và sức mua; so sánh với tăng trưởng doanh thu của chính mình để biết tăng thị phần hay chỉ tăng giá.', direction: 'up' },
    { group: 'Nhà đầu tư cổ phiếu bán lẻ, tiêu dùng', effect: 'Tăng trưởng doanh thu cùng cửa hàng nên được đọc cạnh tăng trưởng ngành loại trừ giá, không đọc số danh nghĩa.', direction: 'mixed' },
    { group: 'Người làm chính sách', effect: 'Khoảng cách giữa số hiện hành và số loại trừ giá cho thấy áp lực giá trong rổ tiêu dùng; cần đọc cùng CPI.', direction: 'mixed' },
    { group: 'Người lao động hưởng lương', effect: 'Sức mua thực chỉ cải thiện khi thu nhập tăng nhanh hơn giá; số bán lẻ thực tăng là tín hiệu gián tiếp.', direction: 'up' },
  ],
  indicators: [
    { name: 'Tổng mức bán lẻ và doanh thu dịch vụ: tăng giá hiện hành và loại trừ giá', why: 'Cặp số để tách hiệu ứng giá khỏi hiệu ứng lượng.', where: 'Thông cáo hằng tháng của Cục Thống kê (nso.gov.vn)' },
    { name: 'CPI và CPI nhóm hàng tiêu dùng chính', why: 'Giải thích khoảng cách giữa hai tốc độ tăng.', where: 'Thông cáo CPI của Cục Thống kê' },
    { name: 'Tín dụng tiêu dùng và niềm tin tiêu dùng', why: 'Hai động lực của chi tiêu không đến từ thu nhập hiện tại.', where: 'Ngân hàng Nhà nước; các khảo sát niềm tin người tiêu dùng' },
  ],
  counterpoints: [
    'Khi chi tiêu của khách quốc tế tăng nhanh, tổng mức tăng có thể che mờ tiêu dùng nội địa yếu.',
    'Hệ số điều chỉnh giá (deflator) dựa trên rổ giá tiêu dùng; nếu giá của rổ bán lẻ thực tế khác CPI chung thì số loại trừ giá có sai số.',
    'Số liệu lũy kế là ước tính và được cập nhật; tháng sau có thể thay đổi nhẹ.',
  ],
  glossary: [
    { term: 'Giá hiện hành', definition: 'Giá tại thời điểm tính; số liệu theo giá hiện hành chịu ảnh hưởng lạm phát.' },
    { term: 'Giá so sánh', definition: 'Giá của năm gốc cố định, dùng để loại bỏ ảnh hưởng của giá và đo thay đổi về lượng.' },
    { term: 'Loại trừ yếu tố giá', definition: 'Điều chỉnh số danh nghĩa theo chỉ số giá để có tốc độ tăng thực.' },
    { term: 'Tổng mức bán lẻ hàng hóa và doanh thu dịch vụ tiêu dùng', definition: 'Chỉ tiêu của Cục Thống kê đo doanh thu bán hàng và dịch vụ cho tiêu dùng.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-retail-sales-consumption-q',
    question: 'Một công ty thấy doanh thu bán lẻ ngành tăng 13% giá hiện hành, trong khi doanh thu của công ty tăng 9%. Cách đọc hợp lý?',
    options: [
      { id: 'a', text: 'Công ty tăng thấp hơn ngành, nhưng cần so với số loại trừ giá của ngành (có thể chỉ khoảng 7–8%) để biết tăng thị phần hay không.', correct: true, explain: 'Đúng. So sánh phải cùng cơ sở: số danh nghĩa của công ty với số danh nghĩa của ngành, hoặc số thực với số thực; không trộn.' },
      { id: 'b', text: 'Công ty chắc chắn mất thị phần.', explain: 'Số 13% đã gồm cả giá; chưa kết luận được khi chưa cùng cơ sở so sánh.' },
      { id: 'c', text: 'Số loại trừ giá không cần quan tâm.', explain: 'Đó chính là số đo sức mua thực.' },
    ],
  },
  sources: [
    { title: 'Sức mua 8 tháng tăng 13,3%', publisher: 'Thời báo Tài chính Việt Nam (bài 3/9/2026, dẫn Cục Thống kê)', url: 'https://thoibaotaichinhvietnam.vn/suc-mua-8-thang-tang-13-3-203173.html' },
    { title: 'Một số nét chính tình hình kinh tế – xã hội quý IV và năm 2025', publisher: 'Cục Thống kê (nso.gov.vn)', url: 'https://www.nso.gov.vn/bai-top/2026/01/mot-so-net-chinh-tinh-hinh-kinh-te-xa-hoi-quy-iv-va-nam-2025/' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 90,
}
