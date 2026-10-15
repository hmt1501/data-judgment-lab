import type { Explainer } from '../../../shared/explainer'

export const rulesOfOriginTransshipmentRisks: Explainer = {
  id: 'rules-of-origin-transshipment-risks',
  slug: 'rules-of-origin-transshipment-risks',
  question: 'Quy tắc xuất xứ là gì và vì sao "chuyển tải/lẩn tránh thuế" là rủi ro với nước xuất khẩu?',
  title: 'Xuất xứ quyết định thuế: hàng "gia công đủ sâu" mới được tính là của nước xuất khẩu',
  topic: 'geopolitics-trade',
  tldr: 'Thuế quan, biện pháp chống bán phá giá và ưu đãi hiệp định thương mại đều phụ thuộc vào việc hàng **xuất xứ từ nước nào**. Quy tắc xuất xứ đặt ra tiêu chí (chuyển đổi mã HS, tỷ lệ giá trị gia tăng, công đoạn gia công) để xác định điều đó. Khi thuế đánh vào hàng nước A cao hơn nước B, xuất hiện động cơ chuyển hàng qua nước B để "đổi nhãn"; các nước nhập khẩu siết kiểm tra, và nước trung chuyển chịu rủi ro bị điều tra, bị áp thuế hoặc mất ưu đãi.',
  keyPoints: [
    'Theo WTO, quy tắc xuất xứ là các tiêu chí xác định **nguồn gốc quốc gia** của sản phẩm; chúng cần thiết vì thuế và hạn chế trong nhiều trường hợp phụ thuộc vào nguồn gốc hàng nhập khẩu.',
    'Cũng theo WTO, quy tắc xuất xứ được dùng để áp dụng các biện pháp chính sách thương mại như thuế chống bán phá giá và tự vệ, để quyết định hàng được hưởng đối xử tối huệ quốc (MFN) hay ưu đãi, cho thống kê thương mại, quy định ghi nhãn và mua sắm công.',
    'Nguyên tắc "**chuyển đổi đáng kể**" được công nhận rộng rãi, nhưng các nước áp dụng khác nhau: có nước dùng tiêu chí **thay đổi mã HS**, nước dùng **tỷ lệ phần trăm giá trị gia tăng**, nước dựa trên **công đoạn sản xuất hay gia công cụ thể** (theo mô tả của WTO).',
    '**Chuyển tải (transshipment)** về nguyên tắc là việc chuyển hàng từ phương tiện này sang phương tiện khác qua nước trung gian, hợp pháp khi hàng vẫn giữ xuất xứ thật. Rủi ro pháp lý phát sinh khi việc trung chuyển hoặc công đoạn gia công tối thiểu được dùng để khai xuất xứ khác nhằm né thuế.',
    'Đối với nước nhập khẩu, cơ quan hải quan dùng chứng nhận xuất xứ, kiểm tra nhà máy và truy xuất nguyên liệu; đối với nước xuất khẩu, rủi ro là **bị áp thuế cao hơn**, mất ưu đãi hiệp định thương mại hoặc bị điều tra, dù phần lớn doanh nghiệp tuân thủ.',
  ],
  causalChain: [
    { from: 'Nước nhập khẩu đánh thuế cao lên hàng xuất xứ từ nước A', to: 'Có động cơ khai hàng là xuất xứ nước khác', mechanism: 'Chênh lệch thuế là lợi ích kinh tế; càng lớn thì động cơ lách quy tắc càng mạnh.' },
    { from: 'Hàng đi qua nước trung gian với gia công tối thiểu', to: 'Nước nhập khẩu nghi ngờ lẩn tránh', mechanism: 'Giá trị gia tăng thấp, không đổi mã HS, thời gian lưu kho ngắn là dấu hiệu để điều tra.' },
    { from: 'Điều tra xuất xứ và siết quy tắc', to: 'Doanh nghiệp nước trung gian chịu chi phí tuân thủ cao hơn', mechanism: 'Cần chứng minh nguồn nguyên liệu, quy trình sản xuất, hồ sơ truy xuất; sai sót có thể làm lô hàng bị giữ hoặc áp thuế.' },
    { from: 'Biện pháp áp lên cả nước trung gian', to: 'Tác động lan sang doanh nghiệp tuân thủ', mechanism: 'Thuế hoặc kiểm tra áp theo nước/ngành làm hàng sạch cũng bị ảnh hưởng, nhất là khi chuỗi cung ứng phụ thuộc nguyên liệu nước ngoài.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp xuất khẩu dùng nhiều nguyên liệu nhập khẩu', effect: 'Phải chứng minh giá trị gia tăng và xuất xứ nguyên liệu để hưởng thuế ưu đãi hay tránh bị coi là lẩn tránh thuế; chi phí tuân thủ tăng.', direction: 'down' },
    { group: 'Doanh nghiệp sản xuất thực chất, chuỗi cung ứng minh bạch', effect: 'Có lợi thế khi quy tắc siết: hồ sơ rõ ràng giúp giữ ưu đãi và niềm tin của khách hàng.', direction: 'up' },
    { group: 'Nhà nhập khẩu nước ngoài', effect: 'Yêu cầu nhà cung cấp chứng minh nguồn gốc nguyên liệu; chuyển đơn sang nhà cung cấp có hồ sơ xuất xứ sạch.', direction: 'mixed' },
    { group: 'Cơ quan quản lý và hải quan', effect: 'Phải cấp chứng nhận xuất xứ chặt chẽ, kiểm soát gian lận, bảo vệ uy tín xuất khẩu quốc gia.', direction: 'mixed' },
    { group: 'FDI vào chế biến, lắp ráp', effect: 'Nhà đầu tư cân nhắc mức độ nội địa hóa thực sự thay vì chỉ lắp ráp đơn giản.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ lệ nội địa hóa/giá trị gia tăng trong nước của ngành xuất khẩu', why: 'Chỉ số cho thấy quy mô gia công thực chất so với chỉ lắp ráp.', where: 'Số liệu thương mại giá trị gia tăng của OECD (TiVA), WTO; nghiên cứu của Bộ Công Thương' },
    { name: 'Chênh lệch thuế giữa các nguồn hàng của thị trường nhập khẩu', why: 'Chênh lệch thuế lớn là động cơ lẩn tránh; chính sách thuế mới của đối tác lớn làm thay đổi động cơ.', where: 'Biểu thuế của hải quan nước nhập khẩu; thông báo của WTO' },
    { name: 'Thông báo điều tra chống lẩn tránh thuế và chống bán phá giá', why: 'Cho biết ngành nào đang bị nhắm tới.', where: 'Cục Phòng vệ thương mại (Bộ Công Thương), cơ quan phòng vệ thương mại các nước' },
    { name: 'Điều kiện ưu đãi xuất xứ trong FTA (CPTPP, EVFTA, RCEP)', why: 'Xác định tiêu chí cụ thể để được hưởng thuế ưu đãi.', where: 'Văn bản hiệp định, cổng thông tin của Bộ Công Thương' },
  ],
  counterpoints: [
    'Trung chuyển và gia công tối thiểu có thể là hoạt động thương mại hợp pháp; chỉ phạm quy khi khai xuất xứ sai hoặc không đáp ứng tiêu chí.',
    'Chính sách chống lẩn tránh thuế có thể bị dùng rộng hơn mục tiêu ban đầu, gây thiệt cho doanh nghiệp tuân thủ.',
    'Quy tắc xuất xứ khác nhau theo hiệp định và theo sản phẩm; một mức giá trị gia tăng đạt chuẩn ở FTA này có thể không đạt ở chế độ khác.',
  ],
  glossary: [
    { term: 'Quy tắc xuất xứ', definition: 'Tiêu chí xác định quốc gia là nguồn gốc của một sản phẩm.' },
    { term: 'Chuyển đổi đáng kể', definition: 'Nguyên tắc coi hàng có xuất xứ nước nào khi được gia công/chế biến đủ sâu ở nước đó.' },
    { term: 'Chuyển tải (transshipment)', definition: 'Chuyển hàng qua nước/cảng trung gian trước khi tới nơi nhận cuối cùng.' },
    { term: 'Mã HS', definition: 'Hệ thống phân loại hàng hóa quốc tế dùng để xác định thuế.' },
    { term: 'Chống lẩn tránh thuế', definition: 'Biện pháp mở rộng thuế chống bán phá giá/chống trợ cấp sang hàng đi qua nước thứ ba.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'rules-of-origin-transshipment-risks-q',
    question: 'Một nhà máy ở Việt Nam chỉ đóng gói lại thành phẩm nhập từ nước khác rồi xuất khẩu, khai xuất xứ Việt Nam để hưởng thuế thấp hơn. Cách đánh giá nào đúng?',
    options: [
      { id: 'a', text: 'Hợp lệ vì hàng được đóng gói tại Việt Nam.', explain: 'Công đoạn tối thiểu như đóng gói thường không đủ tiêu chí chuyển đổi đáng kể để đổi xuất xứ.' },
      { id: 'b', text: 'Rủi ro cao: công đoạn tối thiểu thường không đủ chuyển đổi đáng kể, khai sai xuất xứ có thể bị phạt, truy thu thuế.', correct: true, explain: 'Đúng. Xuất xứ phụ thuộc tiêu chí cụ thể (đổi mã HS, giá trị gia tăng, công đoạn); đóng gói đơn thuần thường không đạt.' },
      { id: 'c', text: 'Không có vấn đề vì xuất xứ do nước xuất khẩu tự quyết định.', explain: 'Nước nhập khẩu có quyền kiểm tra và áp quy tắc xuất xứ của mình.' },
    ],
  },
  sources: [
    { title: 'Rules of origin: technical information', publisher: 'World Trade Organization', url: 'https://www.wto.org/english/tratop_e/roi_e/roi_info_e.htm' },
    { title: 'Rules of origin', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Rules_of_origin' },
    { title: 'Transshipment', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Transshipment' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 67,
}
