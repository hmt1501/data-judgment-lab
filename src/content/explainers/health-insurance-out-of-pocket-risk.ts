import type { Explainer } from '../../../shared/explainer'

export const healthInsuranceOutOfPocketRisk: Explainer = {
  id: 'health-insurance-out-of-pocket-risk',
  slug: 'health-insurance-out-of-pocket-risk',
  question: 'Chi phí y tế tự chi trả gây rủi ro tài chính thế nào và bảo hiểm sức khỏe đóng vai trò gì?',
  title: 'Rủi ro chi phí y tế tự chi trả và vai trò bảo hiểm sức khỏe',
  topic: 'personal-finance',
  tldr: 'Chi phí y tế là khoản **hiếm khi xảy ra nhưng có thể rất lớn**, đúng loại rủi ro mà bảo hiểm sinh ra để chia sẻ. Theo WHO, năm 2022 có khoảng 2,1 tỷ người (26% dân số thế giới) gặp khó khăn tài chính vì chi phí y tế. Bảo hiểm y tế xã hội giảm gánh nặng nhưng **mức hưởng phụ thuộc đúng tuyến, loại cơ sở và danh mục chi trả**, nên phần tự chi trả vẫn có thể lớn.',
  keyPoints: [
    'WHO ước tính năm 2022 có 2,1 tỷ người (26% dân số) gặp khó khăn tài chính do chi phí y tế, trong đó 1,6 tỷ người nghèo đi hoặc nghèo hơn vì chi trả y tế; năm 2000 tỷ lệ này là 34%.',
    'Khó khăn tài chính tập trung ở nhóm nghèo: theo WHO, ba trong bốn người nghèo nhất gặp khó khăn, so với dưới 1 trong 25 người giàu nhất.',
    'Theo bài báo của Đại biểu Nhân dân (24/03/2025), Luật BHYT sửa đổi có hiệu lực từ **1/7/2025** với mức hưởng 100% khi khám đúng tuyến tại cơ sở đăng ký ban đầu và khi cấp cứu; một số trường hợp trái tuyến chỉ được hưởng một phần (nội trú tại cơ sở chuyên sâu 40%, trừ ngoại lệ; điểm c khoản 4 Điều 22 Luật BHYT, theo VnEconomy 10/6/2026). Theo VnEconomy (2/6/2026), Nghị định 188/2025/NĐ-CP và 161/2026/NĐ-CP cùng có hiệu lực 1/7/2026, có thêm quy định như: khám ngoại trú ngoài danh mục ở một số cơ sở được quỹ trả 50% mức hưởng; thành viên tham gia liên tục từ 5 năm, khi tự trả trong năm vượt 6 lần mức lương cơ sở (15.180.000 đồng) thì phần còn lại trong phạm vi quyền lợi được trả 100%.',
    'Bảo hiểm y tế xã hội không bao trùm mọi khoản: chi phí ngoài danh mục, thuốc/dịch vụ theo yêu cầu, thu nhập mất đi khi nghỉ điều trị vẫn do người bệnh gánh.',
    'Quỹ dự phòng và bảo hiểm bổ sung (bảo hiểm sức khỏe thương mại) là hai lớp bảo vệ khác nhau: quỹ cho khoản nhỏ thường xuyên, bảo hiểm cho khoản lớn hiếm gặp.',
  ],
  causalChain: [
    { from: 'Bệnh nặng hoặc tai nạn bất ngờ', to: 'Chi phí điều trị tăng vọt trong thời gian ngắn', mechanism: 'Chi phí nằm viện, phẫu thuật, thuốc đặc trị không dự báo được và có thể vượt xa thu nhập tháng.' },
    { from: 'Chi phí vượt khả năng chi trả', to: 'Bán tài sản, vay nợ hoặc bỏ dở điều trị', mechanism: 'Hộ gia đình phải dùng tiết kiệm, vay mượn hoặc cắt chi tiêu thiết yếu, kéo theo rủi ro nghèo hơn.' },
    { from: 'Có bảo hiểm y tế và tham gia đúng quy định tuyến', to: 'Phần người bệnh tự trả giảm', mechanism: 'Quỹ BHYT thanh toán theo tỷ lệ quy định; mức hưởng phụ thuộc loại cơ sở và việc có đúng tuyến hay không.' },
    { from: 'Trái tuyến, ngoài danh mục hoặc dịch vụ theo yêu cầu', to: 'Tự chi trả vẫn lớn dù có thẻ', mechanism: 'Mức hưởng thấp hơn hoặc không được thanh toán; vì vậy cần hiểu quyền lợi trước khi bệnh.' },
  ],
  vietnamImpact: [
    { group: 'Hộ gia đình thu nhập thấp', effect: 'Dễ bị đẩy sâu vào nghèo khi có người bệnh nặng; BHYT và nhóm được hưởng mức cao đặc biệt (như trẻ em, hộ nghèo theo bài báo) giảm gánh nặng này.', direction: 'down' },
    { group: 'Người khám trái tuyến hoặc tự chọn bệnh viện tuyến trên', effect: 'Từ 1/7/2025, một số trường hợp trái tuyến chỉ được hưởng một phần (nội trú tại cơ sở chuyên sâu 40%, trừ ngoại lệ), nên phần tự trả tăng.', direction: 'down' },
    { group: 'Người lao động tự do không có bảo hiểm thương mại', effect: 'Mất thu nhập khi nằm viện không được bù bởi BHYT; cần quỹ dự phòng.', direction: 'down' },
    { group: 'Người mua bảo hiểm sức khỏe bổ sung', effect: 'Bù được phần ngoài quyền lợi BHYT nhưng có thời gian chờ, loại trừ và hạn mức; cần đọc quy tắc sản phẩm.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ lệ chi tiêu y tế tự chi trả trong tổng chi y tế', why: 'Càng cao thì hộ gia đình càng gánh rủi ro trực tiếp.', where: 'Tổ chức Y tế Thế giới (WHO), Bộ Y tế' },
    { name: 'Tỷ lệ dân số có BHYT và mức hưởng theo nhóm', why: 'Cho biết độ bao phủ và độ sâu của bảo vệ.', where: 'Bảo hiểm xã hội Việt Nam, Bộ Y tế' },
    { name: 'Hạn mức, loại trừ, thời gian chờ của hợp đồng bảo hiểm bổ sung', why: 'Quyết định khoản nào thực sự được chi trả.', where: 'Quy tắc, điều khoản sản phẩm của công ty bảo hiểm' },
    { name: 'Quỹ dự phòng so với chi phí sinh hoạt', why: 'Đệm đầu tiên cho chi phí y tế phát sinh.', where: 'Tự tính trong ngân sách cá nhân' },
  ],
  counterpoints: [
    'Số liệu WHO là ước tính toàn cầu; mức độ khó khăn tài chính ở Việt Nam có thể khác và cần số liệu quốc gia riêng.',
    'Bài báo gốc mô tả luật tại thời điểm đăng (24/03/2025); các nghị định hướng dẫn ban hành sau đó (nêu ở trên) có thể điều chỉnh chi tiết, nên kiểm tra văn bản hiện hành. Các số tiền (mức lương cơ sở 2,53 triệu đồng) lấy từ báo chí, chưa đối chiếu văn bản gốc.',
    'Bảo hiểm thương mại không phải lúc nào cũng đáng mua: phí tăng theo tuổi, có loại trừ bệnh có sẵn và thời gian chờ.',
  ],
  glossary: [
    { term: 'Chi tiêu y tế tự chi trả (OOP)', definition: 'Khoản người bệnh tự trả trực tiếp khi dùng dịch vụ, không qua bảo hiểm.' },
    { term: 'Bảo hiểm y tế (BHYT)', definition: 'Hình thức bảo hiểm do quỹ BHYT chi trả một phần hoặc toàn bộ chi phí khám chữa bệnh theo quy định.' },
    { term: 'Đúng tuyến / trái tuyến', definition: 'Khám tại cơ sở đăng ký ban đầu hoặc chuyển tuyến đúng quy định, hay khám không theo quy định.' },
    { term: 'Quỹ dự phòng', definition: 'Khoản tiền sẵn sàng cho chi phí bất ngờ.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'health-insurance-out-of-pocket-risk-q',
    question: 'Bạn có thẻ BHYT nhưng tự đến bệnh viện chuyên sâu nội trú mà không có giấy chuyển tuyến (không thuộc ngoại lệ). Điều gì hợp lý theo các nguồn của bài?',
    options: [
      { id: 'a', text: 'Mức hưởng có thể chỉ khoảng 40% nội trú tại cơ sở chuyên sâu nên phần tự trả đáng kể; cần quỹ dự phòng.', correct: true, explain: 'Đúng theo các bài báo nêu trong nguồn (luật hiệu lực 1/7/2025): trái tuyến nội trú tại cơ sở chuyên sâu hưởng 40%, trừ ngoại lệ. Vì vậy cần kiểm tra tuyến trước và có đệm tài chính.' },
      { id: 'b', text: 'Có thẻ thì luôn được thanh toán 100% ở mọi bệnh viện.', explain: 'Mức 100% áp dụng cho các trường hợp đúng tuyến, cấp cứu và nhóm đặc biệt; trái tuyến thường thấp hơn.' },
      { id: 'c', text: 'Bảo hiểm y tế bù cả thu nhập bị mất khi nằm viện.', explain: 'BHYT chi trả chi phí khám chữa bệnh trong quyền lợi, không bù thu nhập mất đi.' },
    ],
  },
  sources: [
    { title: 'Điều chỉnh và mở rộng mức hưởng bảo hiểm y tế với một số trường hợp từ 1/7/2026', publisher: 'VnEconomy (2/6/2026)', url: 'https://vneconomy.vn/dieu-chinh-va-mo-rong-muc-huong-bao-hiem-y-te-voi-mot-so-truong-hop-tu-172026.htm' },
    { title: 'Từ 1/7, khám chữa bệnh đúng tuyến dưới 379.500 đồng được bảo hiểm thanh toán toàn bộ', publisher: 'VnEconomy (10/6/2026)', url: 'https://vneconomy.vn/tu-17-kham-chua-benh-dung-tuyen-duoi-379500-dong-duoc-bao-hiem-thanh-toan-toan-bo.htm' },
    { title: 'Mở rộng quyền lợi cho người tham gia bảo hiểm y tế (24/03/2025)', publisher: 'Báo Đại biểu Nhân dân', url: 'https://daibieunhandan.vn/mo-rong-quyen-loi-cho-nguoi-tham-gia-bao-hiem-y-te-post408177.html' },
    { title: 'Universal health coverage (UHC) – fact sheet', publisher: 'Tổ chức Y tế Thế giới (WHO)', url: 'https://www.who.int/news-room/fact-sheets/detail/universal-health-coverage-(uhc)' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 145,
}
