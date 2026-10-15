import type { Explainer } from '../../../shared/explainer'

export const vietnamBankCapitalAdequacyBasel: Explainer = {
  id: 'vietnam-bank-capital-adequacy-basel',
  slug: 'vietnam-bank-capital-adequacy-basel',
  question: 'Hệ số an toàn vốn (CAR) và Basel quyết định gì ở ngân hàng Việt Nam?',
  title: 'An toàn vốn (CAR) và Basel: vì sao ngân hàng cần vốn đệm',
  topic: 'vietnam-economy',
  tldr: 'CAR là tỷ lệ giữa **vốn tự có** của ngân hàng và **tài sản có rủi ro**; nó là "bộ đệm" hấp thụ tổn thất trước khi tiền gửi bị ảnh hưởng. Basel là bộ chuẩn quốc tế do Ủy ban Basel xây dựng sau khủng hoảng 2007–2009. Thông tư 14/2025/TT-NHNN (ban hành 30/06/2025, theo cơ sở dữ liệu LuatVietnam) có hiệu lực từ 15/09/2025 (theo Tạp chí Ngân hàng, 06/08/2025) và tiệm cận Basel III hơn; từ 01/01/2030 thay hoàn toàn Thông tư 41/2016.',
  keyPoints: [
    'Theo Tạp chí Ngân hàng (06/08/2025), Thông tư 14/2025/TT-NHNN đặt mức tối thiểu: vốn lõi cấp 1 ≥ 4,5%, vốn cấp 1 ≥ 6%, CAR ≥ 8%; bộ đệm bảo toàn vốn (CCB) là phần vốn lõi cấp 1 còn lại sau khi đáp ứng ba mức tối thiểu.',
    'Cũng theo bài báo: đến hết 31/12/2029 ngân hàng chưa đăng ký phương pháp chuẩn hóa hay chưa được duyệt IRB vẫn áp dụng Thông tư 41/2016; từ 01/01/2030 Thông tư 14/2025 là cơ sở duy nhất để tính CAR; chia cổ tức tiền mặt chỉ khi vẫn đáp ứng cả ba mức tối thiểu và CCB của năm đó.',
    'Theo Diễn đàn Doanh nghiệp (25/11/2024) khi còn là dự thảo: tổng mức CAR có thể lên 10,5% (gồm 8% và CCB 2,5%) và bộ đệm phản chu kỳ (CCyB) do Thống đốc quyết định trong biên 0–2,5%. Đây là nội dung dự thảo, cần đối chiếu văn bản ban hành.',
    'Cùng bài dự thảo: cuối năm 2022 (theo Thông tư 41), CAR của nhóm ngân hàng thương mại nhà nước là 9,04%, cổ phần 12,29%, chi nhánh ngân hàng nước ngoài 18,61% – cho thấy các nhóm có khoảng đệm khác nhau.',
    'Ủy ban Basel (BIS) mô tả Basel III là bộ biện pháp sau khủng hoảng 2007–2009, bổ sung "lớp phủ vĩ mô" gồm các bộ đệm vốn; bộ đệm phản chu kỳ nhằm làm yêu cầu vốn phản ánh môi trường kinh tế vĩ mô.',
  ],
  causalChain: [
    { from: 'Ngân hàng cho vay, tạo ra tài sản có rủi ro', to: 'Cần vốn tự có tương ứng', mechanism: 'Mỗi khoản vay có thể mất một phần; vốn tự có là phần đệm để tổn thất không ăn vào tiền gửi của người dân.' },
    { from: 'Chuẩn vốn nâng lên (Basel III, Thông tư 14/2025)', to: 'Ngân hàng cần tích lũy thêm vốn', mechanism: 'Tăng vốn qua giữ lại lợi nhuận, phát hành cổ phiếu hoặc công cụ vốn cấp 2; chia cổ tức tiền mặt bị ràng buộc bởi CCB.' },
    { from: 'Áp lực vốn', to: 'Tăng trưởng tín dụng và giá cho vay chịu ảnh hưởng', mechanism: 'Ngân hàng thiếu vốn phải chậm tăng trưởng tài sản có rủi ro hoặc điều chỉnh giá cho vay, nhất là khoản vay có hệ số rủi ro cao.' },
    { from: 'Bộ đệm phản chu kỳ được kích hoạt khi tín dụng nóng', to: 'Hệ thống chống chịu tốt hơn trong suy thoái', mechanism: 'Tích lũy vốn thêm lúc thuận lợi để có đệm khi chu kỳ đảo chiều.' },
  ],
  vietnamImpact: [
    { group: 'Người gửi tiền', effect: 'Vốn đệm dày hơn làm ngân hàng chống chịu cú sốc tốt hơn, tăng độ an toàn của tiền gửi.', direction: 'up' },
    { group: 'Cổ đông ngân hàng', effect: 'Yêu cầu vốn cao hơn có thể hạn chế chia cổ tức tiền mặt hoặc buộc huy động vốn, dẫn đến pha loãng.', direction: 'mixed' },
    { group: 'Doanh nghiệp và người vay', effect: 'Ngân hàng đang bị áp lực vốn có thể thận trọng hơn với khoản vay rủi ro, hoặc giá vay cao hơn.', direction: 'down' },
    { group: 'Nhà đầu tư cổ phiếu ngân hàng', effect: 'CAR, chất lượng tài sản và kế hoạch tăng vốn là yếu tố định giá; cần so các ngân hàng cùng nhóm.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'CAR, vốn lõi cấp 1 và vốn cấp 1 của từng ngân hàng', why: 'Đo khoảng đệm so với mức tối thiểu và CCB.', where: 'Báo cáo thường niên/ thuyết minh Basel của ngân hàng, Ngân hàng Nhà nước' },
    { name: 'Tín dụng/GDP và tốc độ tăng tín dụng', why: 'Là bối cảnh để Ngân hàng Nhà nước quyết định bộ đệm phản chu kỳ.', where: 'Ngân hàng Nhà nước, BIS' },
    { name: 'Nợ xấu và chi phí dự phòng', why: 'Tổn thất làm giảm vốn, nên chất lượng tài sản quyết định tốc độ ăn mòn đệm.', where: 'Báo cáo tài chính ngân hàng' },
    { name: 'Kế hoạch tăng vốn (phát hành, cổ tức bằng cổ phiếu)', why: 'Cho thấy ngân hàng chuẩn bị đáp ứng chuẩn mới ra sao.', where: 'Nghị quyết Đại hội đồng cổ đông, công bố thông tin' },
  ],
  counterpoints: [
    'CAR cao không đảm bảo an toàn: kết quả phụ thuộc cách tính tài sản có rủi ro (phương pháp chuẩn hóa hay nội bộ) và chất lượng thực của tài sản.',
    'Quy định chuyển tiếp có lộ trình, nên mức yêu cầu thực tế mỗi ngân hàng áp dụng phụ thuộc việc đã đăng ký/được duyệt phương pháp mới hay chưa; ngày ban hành là 30/06/2025 theo cơ sở dữ liệu LuatVietnam; bài trên Tạp chí Ngân hàng ghi cả 30/6 lẫn 13/6/2025 ở phần tài liệu tham khảo nên ngày 13/6 có thể là ngày của văn bản khác (không xác nhận được), cần đối chiếu văn bản gốc trên vbpl.vn.',
    'Yêu cầu vốn chặt có chi phí: có thể làm giảm tín dụng và tăng lãi suất cho vay nếu ngân hàng chuyển chi phí cho khách hàng.',
  ],
  glossary: [
    { term: 'CAR', definition: 'Tỷ lệ an toàn vốn: vốn tự có chia tài sản có rủi ro (đã điều chỉnh).' },
    { term: 'Vốn lõi cấp 1 (CET1)', definition: 'Phần vốn chất lượng cao nhất, gồm vốn cổ phần và lợi nhuận giữ lại.' },
    { term: 'Bộ đệm bảo toàn vốn (CCB)', definition: 'Phần vốn lõi cấp 1 phải giữ thêm ngoài mức tối thiểu để chống chịu tổn thất.' },
    { term: 'Bộ đệm phản chu kỳ (CCyB)', definition: 'Bộ đệm thay đổi theo chu kỳ tín dụng, tăng khi tín dụng nóng.' },
    { term: 'Phương pháp chuẩn hóa / IRB', definition: 'Hai cách tính tài sản có rủi ro: dùng hệ số do cơ quan quản lý quy định hoặc dùng xếp hạng nội bộ của ngân hàng.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-bank-capital-adequacy-basel-q',
    question: 'Một ngân hàng có CAR đúng bằng mức tối thiểu 8% nhưng không còn CCB theo quy định. Điều gì hợp lý nhất?',
    options: [
      { id: 'a', text: 'Ngân hàng bị hạn chế chia cổ tức tiền mặt vì chưa đáp ứng đủ bộ đệm bảo toàn vốn.', correct: true, explain: 'Đúng. Theo mô tả của Tạp chí Ngân hàng, chia cổ tức tiền mặt chỉ khi vẫn đáp ứng ba mức tối thiểu và CCB của năm đó.' },
      { id: 'b', text: 'Không có hạn chế gì vì 8% là đủ.', explain: 'Sai. Mức 8% là tối thiểu; bộ đệm là yêu cầu thêm gắn với việc chia cổ tức.' },
      { id: 'c', text: 'Ngân hàng phải ngừng toàn bộ cho vay ngay lập tức.', explain: 'Sai. Quy định gắn hạn chế với cổ tức và các biện pháp khắc phục, không tự động dừng cho vay.' },
    ],
  },
  sources: [
    { title: 'Chuẩn hóa tỷ lệ an toàn vốn: Bước tiến mới trong quản lý rủi ro (06/08/2025)', publisher: 'Tạp chí Ngân hàng', url: 'https://tapchinganhang.gov.vn/chuan-hoa-ty-le-an-toan-von-buoc-tien-moi-trong-quan-ly-rui-ro-va-nang-cao-suc-chong-chiu-cua-he-thong-ngan-hang-16379.html' },
    { title: '"Siết" tỷ lệ an toàn vốn theo chuẩn Basel III (25/11/2024, dự thảo)', publisher: 'Diễn đàn Doanh nghiệp', url: 'https://diendandoanhnghiep.vn/siet-ty-le-an-toan-von-theo-chuan-basel-iii-10146203.html' },
    { title: 'Basel III: international regulatory framework for banks', publisher: 'BIS (Ủy ban Basel)', url: 'https://www.bis.org/bcbs/basel3.htm' },
    { title: 'Thông tư 14/2025/TT-NHNN quy định tỷ lệ an toàn vốn (ban hành 30/06/2025, hiệu lực 15/09/2025)', publisher: 'LuatVietnam', url: 'https://luatvietnam.vn/tai-chinh/thong-tu-14-2025-tt-nhnn-cua-ngan-hang-nha-nuoc-viet-nam-quy-dinh-ty-le-an-toan-von-doi-voi-ngan-hang-thuong-mai-chi-nhanh-ngan-hang-nuoc-ngoai-405700-d1.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 168,
}
