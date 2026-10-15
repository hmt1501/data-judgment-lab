import type { Explainer } from '../../../shared/explainer'

export const vietnamBankingNplProvisioning: Explainer = {
  id: 'vietnam-banking-npl-provisioning',
  slug: 'vietnam-banking-npl-provisioning',
  question: 'Nợ xấu và trích lập dự phòng của ngân hàng: đọc thế nào cho đúng?',
  title: 'Nhìn tỷ lệ nợ xấu cùng bao phủ nợ xấu, nợ nhóm 2 và chất lượng tài sản đảm bảo',
  topic: 'vietnam-economy',
  tldr: 'Ngân hàng phân loại dư nợ thành **5 nhóm** theo mức quá hạn và rủi ro; **nợ xấu** thường tính là nhóm 3–5. Khi nợ xấu tăng, ngân hàng phải **trích lập dự phòng** vào chi phí, làm giảm lợi nhuận. Khi đọc báo cáo, đừng chỉ nhìn tỷ lệ nợ xấu: hãy xem **tỷ lệ bao phủ nợ xấu**, nợ nhóm 2 (nợ cần chú ý), nợ tái cơ cấu và tài sản đảm bảo.',
  keyPoints: [
    'Theo Thông tư 31/2024/TT-NHNN (theo bài trên Hệ thống pháp luật, 22/8/2024): nhóm 1 nợ đủ tiêu chuẩn; nhóm 2 nợ cần chú ý (quá hạn đến 90 ngày); nhóm 3 dưới tiêu chuẩn (91–180 ngày); nhóm 4 nghi ngờ (181–360 ngày); nhóm 5 có khả năng mất vốn (trên 360 ngày). Ngoài ngày quá hạn còn các tiêu chí khác, cần đọc văn bản gốc.',
    '**Nợ xấu** là nợ nhóm 3–5. Theo Thời báo Tài chính Việt Nam (5/11/2025), tổng nợ nhóm 3–5 của 27 ngân hàng niêm yết cuối quý III/2025 khoảng 274.050 tỷ đồng, tăng 19,1% so với cuối 2024; tỷ lệ nợ xấu của nhóm này quanh 2%.',
    '**Dự phòng** là khoản ngân hàng trích để dự kiến tổn thất; theo bài tóm tắt Thông tư 11/2021 (div.gov.vn), dự phòng cụ thể được tính theo nhóm nợ (20% nhóm 3, 50% nhóm 4, 100% nhóm 5, sau khi trừ giá trị tài sản bảo đảm theo quy định) và dự phòng chung 0,75% dư nợ nhóm 1–4. Quy định có thể đã được sửa đổi; cần đối chiếu văn bản hiện hành.',
    '**Tỷ lệ bao phủ nợ xấu** (LLR) = dự phòng đã trích / nợ xấu. Theo cùng bài báo, ACB có LLR 84% còn Vietcombank, VietinBank, Techcombank, BacABank trên 100%; tỷ lệ cao nghĩa là đệm dày hơn trước tổn thất.',
    'Nợ xấu có thể bị "che" bằng cơ cấu lại nợ hoặc bán nợ cho VAMC / công ty quản lý tài sản, nên nhìn cả nợ nhóm 2 và nợ đã được tái cơ cấu để biết rủi ro chưa lộ.',
  ],
  causalChain: [
    { from: 'Kinh tế khó khăn, dòng tiền khách hàng suy yếu', to: 'Nợ quá hạn tăng, chuyển nhóm xấu hơn', mechanism: 'Khách hàng chậm trả; sau 90 ngày quá hạn khoản vay thường rơi vào nhóm 3 trở lên.' },
    { from: 'Nợ chuyển sang nhóm 3–5', to: 'Ngân hàng phải tăng trích lập dự phòng', mechanism: 'Dự phòng là chi phí trên báo cáo kết quả kinh doanh, nên lợi nhuận giảm trong kỳ trích lập.' },
    { from: 'Lợi nhuận và vốn tự có giảm', to: 'Khả năng tăng trưởng tín dụng bị hạn chế', mechanism: 'Vốn là điều kiện để cho vay thêm (hệ số an toàn vốn); lợi nhuận giữ lại giảm thì dư địa tăng vốn giảm.' },
    { from: 'Thu hồi nợ, xử lý tài sản đảm bảo thành công', to: 'Hoàn nhập dự phòng, cải thiện lợi nhuận', mechanism: 'Khi thu hồi được nợ hoặc tài sản đảm bảo có giá trị tốt, dự phòng đã trích có thể được hoàn nhập vào thu nhập.' },
  ],
  vietnamImpact: [
    { group: 'Cổ đông ngân hàng, nhà đầu tư cổ phiếu ngân hàng', effect: 'Lợi nhuận phụ thuộc trích lập dự phòng; ngân hàng LLR cao, nợ xấu thấp thường chịu rủi ro tổn thất thấp hơn khi chu kỳ xấu đi.', direction: 'mixed' },
    { group: 'Doanh nghiệp vay vốn', effect: 'Khi nợ xấu tăng, ngân hàng siết điều kiện cho vay và đòi tài sản đảm bảo chặt hơn, nhất là trong lĩnh vực bất động sản.', direction: 'down' },
    { group: 'Người gửi tiền', effect: 'Tiền gửi được bảo hiểm tiền gửi đến hạn mức; ngân hàng có đệm dự phòng dày thường ít rủi ro thanh khoản hơn.', direction: 'mixed' },
    { group: 'Người mua nợ, mua tài sản xử lý', effect: 'Nợ xấu tăng tạo thị trường xử lý nợ, đấu giá tài sản đảm bảo cho nhà đầu tư chuyên nghiệp.', direction: 'up' },
  ],
  indicators: [
    { name: 'Tỷ lệ nợ xấu (nhóm 3–5) và nợ nhóm 2', why: 'Nợ nhóm 2 là "nợ xấu tiềm ẩn" có thể chuyển nhóm xấu hơn.', where: 'Báo cáo tài chính quý của từng ngân hàng; công bố thông tin trên HOSE, HNX' },
    { name: 'Tỷ lệ bao phủ nợ xấu (LLR)', why: 'Đo độ dày của đệm dự phòng so với nợ xấu.', where: 'Thuyết minh báo cáo tài chính ngân hàng' },
    { name: 'Chi phí dự phòng / thu nhập hoạt động (credit cost)', why: 'Cho biết ngân hàng đang chi bao nhiêu để trích lập mỗi kỳ.', where: 'Báo cáo kết quả kinh doanh' },
    { name: 'Nợ tái cơ cấu và trái phiếu doanh nghiệp nắm giữ', why: 'Có thể che nợ xấu tiềm ẩn nếu lớn.', where: 'Thuyết minh báo cáo tài chính; Ngân hàng Nhà nước' },
  ],
  counterpoints: [
    'Tỷ lệ nợ xấu thấp chưa chắc tài sản tốt nếu ngân hàng cơ cấu lại nợ, bán nợ hoặc chuyển nhóm nợ chậm; nên đối chiếu nhiều chỉ số.',
    'LLR cao không phải lúc nào cũng tốt: có thể ngân hàng trích lập dự phòng bảo thủ làm lợi nhuận thấp, hoặc nợ xấu thực tế nằm ngoài báo cáo.',
    'Giá trị tài sản đảm bảo (nhất là bất động sản) có thể giảm đúng lúc cần xử lý, nên giá trị thu hồi thấp hơn giá trị ghi sổ.',
  ],
  glossary: [
    { term: 'Nợ xấu', definition: 'Các khoản nợ nhóm 3, 4, 5 theo phân loại của ngân hàng.' },
    { term: 'Trích lập dự phòng', definition: 'Khoản chi phí ngân hàng đặt trước để bù tổn thất tín dụng dự kiến.' },
    { term: 'LLR (tỷ lệ bao phủ nợ xấu)', definition: 'Dự phòng đã trích chia cho nợ xấu.' },
    { term: 'Nợ nhóm 2', definition: 'Nợ cần chú ý, chưa phải nợ xấu nhưng có dấu hiệu rủi ro.' },
    { term: 'VAMC', definition: 'Công ty quản lý tài sản của các tổ chức tín dụng Việt Nam, mua và xử lý nợ xấu.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-banking-npl-provisioning-q',
    question: 'Ngân hàng A có nợ xấu 1,5% và LLR 70%; ngân hàng B nợ xấu 2,5% và LLR 130%. Điều nào hợp lý khi so sánh?',
    options: [
      { id: 'a', text: 'A an toàn hơn vì tỷ lệ nợ xấu thấp hơn.', explain: 'Nợ xấu thấp chỉ là một nửa bức tranh; đệm dự phòng và nợ nhóm 2 cũng cần xét.' },
      { id: 'b', text: 'B có đệm dự phòng dày hơn cho tổn thất, dù nợ xấu danh nghĩa cao hơn; cần xem thêm nợ nhóm 2 và nợ tái cơ cấu của cả hai.', correct: true, explain: 'Đúng. LLR 130% nghĩa là dự phòng vượt nợ xấu; nhưng vẫn cần kiểm chất lượng tài sản đảm bảo và nợ tiềm ẩn.' },
      { id: 'c', text: 'Hai ngân hàng như nhau vì cùng nằm trong khoảng 1–3%.', explain: 'Khoảng tỷ lệ không đủ để kết luận; đệm dự phòng và chất lượng danh mục khác nhau thì rủi ro khác nhau.' },
    ],
  },
  sources: [
    { title: 'Nợ xấu tăng hơn 19%, ngân hàng gia cố "lá chắn" rủi ro', publisher: 'Thời báo Tài chính Việt Nam (5/11/2025)', url: 'https://thoibaotaichinhvietnam.vn/no-xau-tang-hon-19-ngan-hang-gia-co-la-chan-rui-ro-186361-186361.html' },
    { title: 'Cách phân loại 5 nhóm nợ mới nhất theo Thông tư 31 (22/8/2024)', publisher: 'Hệ thống pháp luật', url: 'https://hethongphapluat.com/phap-luat/chinh-sach-phap-luat/ban-co-dang-so-huu-no-xau-cach-phan-loai-5-nhom-no-moi-nhat-theo-thong-tu-31.html' },
    { title: 'Quy định mới về trích lập dự phòng rủi ro tại tổ chức tín dụng (Thông tư 11/2021)', publisher: 'div.gov.vn', url: 'https://www.div.gov.vn/quy-dinh-moi-ve-trich-lap-du-phong-rui-ro-tai-to-chuc-tin-dung' },
    { title: 'Non-performing loan', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Non-performing_loan' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 46,
}
