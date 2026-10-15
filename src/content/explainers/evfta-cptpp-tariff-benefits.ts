import type { Explainer } from '../../../shared/explainer'

export const evftaCptppTariffBenefits: Explainer = {
  id: 'evfta-cptpp-tariff-benefits',
  slug: 'evfta-cptpp-tariff-benefits',
  question: 'EVFTA và CPTPP giảm thuế thế nào và ai thực sự hưởng lợi?',
  title: 'EVFTA, CPTPP: thuế giảm theo lộ trình, nhưng chỉ hàng đáp ứng quy tắc xuất xứ mới được hưởng',
  topic: 'geopolitics-trade',
  tldr: 'Hiệp định thương mại tự do (FTA) cắt giảm thuế quan **theo lộ trình** giữa các bên, nhưng ưu đãi chỉ áp dụng cho hàng đáp ứng **quy tắc xuất xứ** và có chứng nhận phù hợp. Vì vậy người hưởng lợi nhiều nhất là doanh nghiệp đủ năng lực tuân thủ và có đối tác nhập khẩu tận dụng ưu đãi, không phải mọi doanh nghiệp xuất khẩu tự động.',
  keyPoints: [
    'Theo trang của Ủy ban châu Âu, Hiệp định Thương mại EU - Việt Nam (EVFTA) **có hiệu lực từ 1/8/2020**; Hiệp định Bảo hộ Đầu tư là văn bản riêng, có điều kiện phê chuẩn khác.',
    'Theo Vietstock (26/6/2019, trước khi ký): EU xóa thuế cho khoảng 85,6% số dòng thuế ngay khi hiệp định có hiệu lực và 99,2% sau 7 năm; Việt Nam xóa 48,5% số dòng thuế ngay và khoảng 98,3% sau 10 năm; phần còn lại dùng hạn ngạch thuế quan. Nhóm nhạy cảm (nông sản...) thường có lộ trình dài hoặc hạn ngạch.',
    '**Quy tắc xuất xứ** quyết định hàng có được hưởng thuế ưu đãi hay không (ví dụ yêu cầu nguyên liệu từ nước thành viên); nhiều ngành dệt may, da giày phụ thuộc vải/nguyên liệu nhập ngoài khối nên khó đạt.',
    'FTA tác động hai chiều: hàng nhập từ các đối tác cũng được giảm thuế, tăng cạnh tranh với sản xuất nội địa cùng loại.',
    'Ngoài thuế, hiệp định còn có điều khoản về dịch vụ, mua sắm công, sở hữu trí tuệ, lao động và môi trường; nhiều lợi ích dài hạn nằm ở đây.',
  ],
  causalChain: [
    { from: 'FTA có hiệu lực', to: 'Thuế quan đối với hàng đủ điều kiện giảm theo lộ trình', mechanism: 'Các bên cam kết biểu thuế ưu đãi; thuế giảm dần từ năm có hiệu lực đến khi về mức cam kết cuối.' },
    { from: 'Thuế ưu đãi giảm', to: 'Giá bán tại thị trường nhập khẩu cạnh tranh hơn', mechanism: 'Nhà nhập khẩu hoặc người bán lại chia sẻ khoản tiết kiệm thuế; mức chia sẻ tùy sức mạnh thương lượng.' },
    { from: 'Quy tắc xuất xứ đáp ứng', to: 'Doanh nghiệp được cấp chứng nhận xuất xứ và hưởng ưu đãi', mechanism: 'Phải chứng minh hàm lượng nội khối hoặc chuyển đổi mã HS; chi phí tuân thủ và kế toán nguyên liệu cao với doanh nghiệp nhỏ.' },
    { from: 'Hàng từ đối tác cũng giảm thuế', to: 'Cạnh tranh nội địa tăng', mechanism: 'Ngành được bảo hộ lâu năm phải nâng năng suất hoặc nhường thị phần; người tiêu dùng có thể hưởng giá thấp hơn.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp xuất khẩu đạt quy tắc xuất xứ', effect: 'Hưởng thuế ưu đãi, tăng sức cạnh tranh giá ở các thị trường thành viên.', direction: 'up' },
    { group: 'Doanh nghiệp nhỏ, ít chuẩn hóa chứng từ', effect: 'Khó chứng minh xuất xứ, chi phí tuân thủ cao nên khó tận dụng ưu đãi.', direction: 'mixed' },
    { group: 'Ngành dùng nhiều nguyên liệu nhập ngoài khối', effect: 'Dễ không đáp ứng quy tắc xuất xứ; lợi ích thực tế thấp hơn thuế suất danh nghĩa.', direction: 'mixed' },
    { group: 'Ngành cạnh tranh với hàng nhập từ đối tác', effect: 'Thuế nhập khẩu giảm làm tăng cạnh tranh, buộc nâng năng suất hoặc chuyển đổi.', direction: 'down' },
    { group: 'Người tiêu dùng', effect: 'Hàng nhập giảm thuế có thể rẻ hơn nếu nhà nhập khẩu chuyển phần tiết kiệm xuống giá bán.', direction: 'up' },
  ],
  indicators: [
    { name: 'Tỷ lệ tận dụng ưu đãi FTA (số chứng nhận xuất xứ / kim ngạch)', why: 'Cho biết lợi ích thực tế so với tiềm năng trên giấy.', where: 'Bộ Công Thương, Tổng cục Hải quan, báo cáo đánh giá của các cơ quan thương mại' },
    { name: 'Xuất khẩu theo nhóm hàng sang các thị trường thành viên', why: 'Đo xu hướng thị phần sau khi thuế giảm.', where: 'Cục Thống kê (nso.gov.vn), Tổng cục Hải quan' },
    { name: 'Biểu thuế cam kết và lộ trình giảm thuế', why: 'Biết mỗi dòng hàng giảm đến mức nào vào năm nào.', where: 'Trang chính thức của EU về quan hệ thương mại với Việt Nam và cơ sở dữ liệu của WTO về hiệp định thương mại khu vực' },
    { name: 'Điều tra phòng vệ thương mại nhắm vào hàng Việt Nam', why: 'Rủi ro làm giảm lợi ích ưu đãi thuế.', where: 'WTO (wto.org), cơ quan thương mại các nước' },
  ],
  counterpoints: [
    'Thuế ưu đãi không đảm bảo tăng thị phần: nhu cầu, chất lượng, tiêu chuẩn kỹ thuật và rào cản phi thuế cũng quyết định.',
    'Một phần xuất khẩu tăng vì nhu cầu toàn cầu hay dịch chuyển FDI, không chỉ nhờ FTA; tách riêng tác động của FTA cần phân tích cẩn thận.',
    'Lợi ích tập trung vào nhóm lớn có năng lực tuân thủ; nếu không hỗ trợ doanh nghiệp nhỏ thì phân phối lợi ích lệch.',
  ],
  glossary: [
    { term: 'FTA', definition: 'Hiệp định thương mại tự do: các bên giảm/xóa thuế và rào cản thương mại giữa nhau.' },
    { term: 'Quy tắc xuất xứ', definition: 'Điều kiện để hàng hóa được coi là xuất xứ từ nước thành viên và được hưởng thuế ưu đãi.' },
    { term: 'Lộ trình cắt giảm thuế', definition: 'Kế hoạch giảm thuế dần theo năm cho từng dòng hàng.' },
    { term: 'Rào cản phi thuế', definition: 'Quy định kỹ thuật, kiểm dịch, hạn ngạch... cản trở thương mại ngoài thuế quan.' },
    { term: 'CPTPP', definition: 'Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương, FTA đa phương giữa nhiều nền kinh tế châu Á - Thái Bình Dương và châu Mỹ.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'evfta-cptpp-tariff-benefits-q',
    question: 'Một doanh nghiệp may xuất khẩu dùng vải nhập từ ngoài khối FTA. Thuế đối với hàng may cam kết giảm về 0. Điều gì có thể xảy ra?',
    options: [
      { id: 'a', text: 'Hàng vẫn được hưởng thuế 0% vì thuế đã cam kết giảm.', explain: 'Thuế ưu đãi chỉ áp dụng khi hàng đáp ứng quy tắc xuất xứ; vải ngoài khối có thể làm không đạt.' },
      { id: 'b', text: 'Có thể không đáp ứng quy tắc xuất xứ nên không được hưởng ưu đãi, dù thuế cam kết là 0%.', correct: true, explain: 'Đúng. Thuế danh nghĩa khác lợi ích thực; xuất xứ nguyên liệu quyết định.' },
      { id: 'c', text: 'FTA tự động chuyển khoản tiết kiệm thuế cho doanh nghiệp.', explain: 'Doanh nghiệp phải tự chứng minh xuất xứ và nộp chứng từ; không có cơ chế tự động.' },
    ],
  },
  sources: [
    { title: 'EU trade relations with Viet Nam', publisher: 'European Commission', url: 'https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/vietnam_en' },
    { title: 'EU set to lift duties on most Vietnamese exports (26/6/2019)', publisher: 'Vietstock', url: 'https://en.vietstock.vn/2019/06/eu-set-to-lift-duties-on-most-vietnamese-exports-974-364054.htm' },
    { title: 'Thực hiện quy tắc xuất xứ hàng hóa của CPTPP: Còn nhiều thách thức (11/3/2019)', publisher: 'Báo Sài Gòn Giải Phóng', url: 'https://www.sggp.org.vn/thuc-hien-quy-tac-xuat-xu-hang-hoa-cua-cptpp-con-nhieu-thach-thuc-post511259.html' },
    { title: 'Regional Trade Agreements gateway', publisher: 'World Trade Organization (WTO)', url: 'https://www.wto.org/english/tratop_e/region_e/region_e.htm' },
    { title: 'Comprehensive and Progressive Agreement for Trans-Pacific Partnership', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Comprehensive_and_Progressive_Agreement_for_Trans-Pacific_Partnership' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 31,
}
