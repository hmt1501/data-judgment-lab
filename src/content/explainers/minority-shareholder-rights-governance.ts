import type { Explainer } from '../../../shared/explainer'

export const minorityShareholderRightsGovernance: Explainer = {
  id: 'minority-shareholder-rights-governance',
  slug: 'minority-shareholder-rights-governance',
  question: 'Cổ đông thiểu số có những quyền gì và quản trị công ty bảo vệ họ ra sao?',
  title: 'Quyền cổ đông thiểu số và quản trị công ty',
  topic: 'markets-investing',
  tldr: 'Cổ đông thiểu số không kiểm soát công ty nên dễ chịu thiệt khi cổ đông lớn hoặc ban lãnh đạo hành động vì lợi ích riêng, nhất là qua **giao dịch với bên liên quan**. Quản trị công ty tốt đặt ra quyền được biết, quyền biểu quyết, minh bạch và kiểm soát giao dịch có xung đột. Luật Doanh nghiệp 2020 của Việt Nam hạ ngưỡng quyền đặc biệt từ 10% xuống 5% cổ phần phổ thông (theo bài báo 2021), nhưng thực thi mới là chỗ quyết định.',
  keyPoints: [
    'Theo Wikipedia, nguyên tắc OECD về quản trị công ty đặt "quyền và đối xử công bằng với cổ đông" lên đầu, cùng các nguyên tắc về vai trò các bên liên quan, trách nhiệm hội đồng quản trị, đạo đức và công bố thông tin.',
    'Bài trên ECGI (10/2022) về bản dự thảo sửa đổi Nguyên tắc G20/OECD: trọng tâm là bảo vệ cổ đông thiểu số; vẫn cảnh giác với giao dịch bên liên quan và nhóm công ty; một số nước yêu cầu ý kiến thẩm định độc lập trước khi cổ đông thông qua giao dịch loại này (đây là bản dự thảo, không phải văn bản cuối).',
    'Theo bài ngày 5/3/2021 trên Tạp chí Thị trường Tài chính Tiền tệ về Luật Doanh nghiệp 2020 (hiệu lực 1/1/2021): cổ đông hoặc nhóm sở hữu từ 5% cổ phần phổ thông (trước đây 10%) có quyền đặc biệt, bỏ yêu cầu nắm giữ liên tục 6 tháng; được xem xét, trích lục hợp đồng, giao dịch phải được hội đồng quản trị thông qua; yêu cầu hủy nghị quyết đại hội đồng cổ đông chỉ cần 5%.',
    'Cùng bài: khoản vay, cho vay hoặc bán tài sản trên 10% tổng tài sản có liên quan tới cổ đông sở hữu 51% trở lên hoặc người liên quan phải được đại hội đồng cổ đông chấp thuận — quy định mà Luật Doanh nghiệp 2014 chưa có.',
    'Với cổ đông nhỏ, quyền trên giấy chưa đủ: cần đọc báo cáo giao dịch bên liên quan, biên bản đại hội, tỷ lệ thành viên độc lập trong hội đồng quản trị và lịch sử xử lý xung đột lợi ích.',
  ],
  causalChain: [
    { from: 'Cổ đông lớn hoặc ban lãnh đạo kiểm soát công ty', to: 'Nguy cơ xung đột lợi ích với cổ đông nhỏ', mechanism: 'Người kiểm soát quyết định giao dịch, định giá, chia cổ tức; lợi ích riêng có thể khác lợi ích chung.' },
    { from: 'Giao dịch với bên liên quan không minh bạch', to: 'Tài sản hoặc lợi nhuận bị chuyển ra ngoài (giá chuyển giao thiên lệch)', mechanism: 'Mua bán, cho vay giữa công ty và bên liên quan ở giá ưu đãi chuyển giá trị từ cổ đông nhỏ sang người kiểm soát.' },
    { from: 'Luật đặt ngưỡng quyền cho nhóm thiểu số (5%) và yêu cầu phê duyệt giao dịch lớn', to: 'Chi phí của hành vi xâm phạm tăng', mechanism: 'Cổ đông có quyền xem hợp đồng, yêu cầu hủy nghị quyết; giao dịch lớn phải được đại hội đồng cổ đông thông qua.' },
    { from: 'Minh bạch thông tin và thành viên độc lập', to: 'Thị trường định giá rủi ro quản trị', mechanism: 'Công bố đầy đủ giúp nhà đầu tư và nhà phân tích đòi mức chiết khấu cao hơn với công ty quản trị yếu, tạo động lực cải thiện.' },
  ],
  vietnamImpact: [
    { group: 'Cổ đông cá nhân nhỏ lẻ', effect: 'Nên tận dụng quyền được biết thông tin và tham dự đại hội; ngưỡng 5% khó đạt với cá nhân nhưng có thể góp nhóm.', direction: 'mixed' },
    { group: 'Cổ đông lớn và ban lãnh đạo', effect: 'Chịu ràng buộc phê duyệt giao dịch lớn với bên liên quan và yêu cầu công bố; tuân thủ làm giảm chiết khấu quản trị.', direction: 'down' },
    { group: 'Doanh nghiệp niêm yết', effect: 'Quản trị tốt giúp giảm chi phí vốn và thu hút nhà đầu tư tổ chức, quỹ nước ngoài.', direction: 'up' },
    { group: 'Nhà đầu tư tổ chức và quỹ', effect: 'Dùng tiêu chí quản trị (bên liên quan, độc lập hội đồng quản trị) để chọn cổ phiếu và có thể gây áp lực thay đổi.', direction: 'up' },
    { group: 'Cơ quan quản lý', effect: 'Cần thực thi nhất quán và công khai xử lý để quyền trên giấy thành thực chất.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Giao dịch với bên liên quan trên báo cáo tài chính (thuyết minh)', why: 'Quy mô và tính chất giao dịch, mức độ lệ thuộc vào bên liên quan.', where: 'Báo cáo tài chính đã kiểm toán, báo cáo quản trị công ty' },
    { name: 'Tỷ lệ thành viên độc lập trong hội đồng quản trị', why: 'Đo khả năng cân bằng quyền lực của người kiểm soát.', where: 'Báo cáo quản trị công ty, tài liệu đại hội đồng cổ đông' },
    { name: 'Tỷ lệ sở hữu của nhóm cổ đông lớn và người liên quan', why: 'Mức độ kiểm soát và khả năng thiểu số đạt ngưỡng 5%.', where: 'Công bố thông tin sở hữu, báo cáo thường niên' },
    { name: 'Ý kiến kiểm toán và vấn đề nhấn mạnh về bên liên quan', why: 'Cờ đỏ về minh bạch.', where: 'Báo cáo kiểm toán trên website doanh nghiệp' },
  ],
  counterpoints: [
    'Công ty có cổ đông kiểm soát không phải lúc nào cũng xấu: theo Wikipedia, rủi ro đại diện (agency) có thể thấp hơn khi có cổ đông kiểm soát giám sát ban quản lý; vấn đề là phải ngăn lạm dụng quyền kiểm soát.',
    'Không phải giao dịch bên liên quan nào cũng sai: nhiều giao dịch là hợp lý khi đúng giá và minh bạch; điều cần là thẩm định độc lập và công bố.',
    'Tóm tắt luật dựa trên bài báo 2021, chưa đối chiếu văn bản gốc và các sửa đổi sau đó; điều khoản cụ thể cần kiểm tra trên văn bản hiện hành.',
  ],
  glossary: [
    { term: 'Cổ đông thiểu số', definition: 'Cổ đông không nắm quyền kiểm soát công ty.' },
    { term: 'Giao dịch bên liên quan', definition: 'Giao dịch giữa công ty với cổ đông lớn, lãnh đạo hoặc người/tổ chức liên quan tới họ.' },
    { term: 'Thành viên độc lập', definition: 'Thành viên hội đồng quản trị không có lợi ích tài chính trọng yếu với công ty và ban điều hành.' },
    { term: 'Xung đột lợi ích', definition: 'Tình huống quyết định của một người có thể bị lợi ích riêng chi phối.' },
    { term: 'Chiết khấu quản trị', definition: 'Phần giá trị bị trừ đi trong định giá vì rủi ro quản trị yếu (khái niệm phân tích, không phải thuật ngữ pháp lý).' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'minority-shareholder-rights-governance-q',
    question: 'Một công ty niêm yết bán tài sản lớn cho công ty của chủ tịch với giá thấp hơn thị trường, không có thẩm định độc lập. Bạn là cổ đông nhỏ. Việc nên làm trước hết là?',
    options: [
      { id: 'a', text: 'Bỏ qua vì giao dịch với bên liên quan luôn hợp pháp.', explain: 'Giao dịch có thể hợp pháp nhưng vẫn gây thiệt cho cổ đông nhỏ; luật yêu cầu phê duyệt và công bố với giao dịch lớn.' },
      { id: 'b', text: 'Đọc thuyết minh bên liên quan, tài liệu đại hội, xem giao dịch đã được đại hội chấp thuận theo quy định chưa, và cân nhắc rủi ro quản trị khi định giá.', correct: true, explain: 'Đúng: bắt đầu từ thông tin và quy trình phê duyệt; ngưỡng cổ phần mới cho phép thực hiện thêm quyền như xem hợp đồng, yêu cầu hủy nghị quyết.' },
      { id: 'c', text: 'Mua thêm vì giá tài sản bán thấp nghĩa là công ty sắp lên.', explain: 'Giá chuyển giao thấp có thể là dấu hiệu chuyển giá trị ra ngoài; kết luận ngược lại chưa có cơ sở.' },
    ],
  },
  sources: [
    { title: 'Những thay đổi trong mùa đại hội cổ đông 2021 (5/3/2021)', publisher: 'Tạp chí Thị trường Tài chính Tiền tệ', url: 'https://thitruongtaichinhtiente.vn/nhung-thay-doi-trong-mua-dai-hoi-co-dong-2021-33634.html' },
    { title: 'The OECD principles embrace "sustainability" but keeps a liberal approach (P.-H. Conac, 11/10/2022)', publisher: 'European Corporate Governance Institute (ECGI)', url: 'https://www.ecgi.global/publications/blog/the-oecd-principles-embrace-sustainability-but-keeps-a-liberal-approach' },
    { title: 'Corporate governance', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Corporate_governance' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 135,
}
