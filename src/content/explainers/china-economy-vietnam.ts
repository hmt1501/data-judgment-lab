import type { Explainer } from '../../../shared/explainer'

export const chinaEconomyVietnam: Explainer = {
  id: 'china-economy-vietnam',
  slug: 'china-economy-vietnam',
  question: 'Kinh tế Trung Quốc chậm lại hay tung kích thích thì Việt Nam bị ảnh hưởng ra sao?',
  title: 'Kinh tế Trung Quốc chậm lại hoặc kích thích: Việt Nam chịu tác động thế nào?',
  topic: 'geopolitics-trade',
  tldr: 'Trung Quốc là đối tác thương mại lớn nhất của Việt Nam: vừa là **thị trường** cho nông sản, linh kiện, vừa là **nguồn** máy móc, nguyên liệu, và là nguồn khách du lịch lớn. Khi kinh tế Trung Quốc chậm lại, cầu nhập khẩu và du lịch giảm, nhưng hàng Trung Quốc dư thừa có thể giảm giá và cạnh tranh mạnh hơn với hàng Việt Nam; khi Trung Quốc kích thích, giá hàng hóa thế giới thường tăng. Tác động ròng phụ thuộc **kênh nào trội hơn** và loại kích thích.',
  keyPoints: [
    'Có ít nhất bốn kênh: **xuất khẩu sang Trung Quốc** (rau quả, thủy sản, linh kiện điện tử), **nhập khẩu từ Trung Quốc** (đầu vào sản xuất), **du lịch**, và **giá hàng hóa toàn cầu** (thép, quặng, dầu…).',
    'Trung Quốc chậm lại thường làm giảm cầu nông sản và linh kiện, đồng thời làm hàng Trung Quốc rẻ hơn — có lợi cho nhà sản xuất Việt Nam dùng đầu vào Trung Quốc, nhưng bất lợi cho ngành cạnh tranh trực tiếp như thép, hàng tiêu dùng.',
    'Kích thích tập trung vào **hạ tầng, bất động sản** thường đẩy giá thép, quặng, than, đồng; kích thích tập trung vào **tiêu dùng** có lợi hơn cho nông sản và du lịch.',
    'Xuất khẩu nông sản sang Trung Quốc còn phụ thuộc rào cản kỹ thuật: mã vùng trồng, kiểm dịch, truy xuất nguồn gốc, kênh chính ngạch hay tiểu ngạch.',
  ],
  causalChain: [
    { from: 'Kinh tế Trung Quốc chậm lại (bất động sản yếu, tiêu dùng thận trọng)', to: 'Cầu nhập khẩu của Trung Quốc giảm', mechanism: 'Hộ gia đình chi tiêu ít hơn cho thực phẩm cao cấp, du lịch; doanh nghiệp giảm đặt linh kiện và nguyên liệu.' },
    { from: 'Cầu nhập khẩu của Trung Quốc giảm', to: 'Xuất khẩu nông sản, linh kiện và du lịch của Việt Nam chịu áp lực', mechanism: 'Giá và lượng xuất rau quả, thủy sản sang Trung Quốc có thể giảm; lượng khách Trung Quốc tăng chậm hơn.' },
    { from: 'Kinh tế Trung Quốc chậm lại (bất động sản yếu, tiêu dùng thận trọng)', to: 'Dư cung công nghiệp, hàng Trung Quốc giảm giá xuất khẩu', mechanism: 'Doanh nghiệp Trung Quốc đẩy mạnh bán ra nước ngoài khi cầu trong nước yếu, nhất là thép, hóa chất, hàng tiêu dùng.' },
    { from: 'Dư cung công nghiệp, hàng Trung Quốc giảm giá xuất khẩu', to: 'Cạnh tranh mạnh hơn trên thị trường Việt Nam và thị trường thứ ba', mechanism: 'Nhà sản xuất nội địa bị ép giá; Việt Nam có thể áp dụng biện pháp phòng vệ thương mại (chống bán phá giá) với một số mặt hàng.' },
    { from: 'Trung Quốc tung gói kích thích hạ tầng', to: 'Giá hàng hóa cơ bản thế giới tăng', mechanism: 'Trung Quốc chiếm tỷ trọng lớn trong tiêu thụ thép, quặng sắt, đồng, than toàn cầu; kỳ vọng cầu tăng đẩy giá lên.' },
  ],
  vietnamImpact: [
    { group: 'Nông dân, doanh nghiệp xuất khẩu rau quả, thủy sản', effect: 'Cầu Trung Quốc yếu làm giảm giá và lượng; phụ thuộc lớn vào một thị trường làm rủi ro cao hơn.', direction: 'down' },
    { group: 'Du lịch, lưu trú, bán lẻ tại điểm đến', effect: 'Lượng khách Trung Quốc biến động theo thu nhập và chính sách du lịch của Trung Quốc.', direction: 'mixed' },
    { group: 'Ngành thép, vật liệu, hàng tiêu dùng nội địa', effect: 'Cạnh tranh từ hàng Trung Quốc giá rẻ tăng khi Trung Quốc dư cung.', direction: 'down' },
    { group: 'Doanh nghiệp sản xuất dùng đầu vào từ Trung Quốc', effect: 'Chi phí nguyên liệu, máy móc có thể giảm khi giá xuất khẩu của Trung Quốc giảm.', direction: 'up' },
    { group: 'Lạm phát Việt Nam', effect: 'Trung Quốc chậm lại thường giảm áp lực giá hàng nhập khẩu; kích thích mạnh có thể làm tăng giá nguyên vật liệu.', direction: 'mixed' },
    { group: 'Doanh nghiệp xuất khẩu linh kiện điện tử sang Trung Quốc', effect: 'Phụ thuộc chu kỳ điện tử toàn cầu và sức mua của nhà máy lắp ráp tại Trung Quốc.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'GDP, doanh số bán lẻ, đầu tư bất động sản của Trung Quốc', why: 'Đo sức khỏe cầu nội địa Trung Quốc.', where: 'Cục Thống kê Quốc gia Trung Quốc (NBS); báo cáo World Bank, ADB về Trung Quốc' },
    { name: 'PMI sản xuất Trung Quốc', why: 'Chỉ báo sớm về đơn hàng và nhu cầu nguyên liệu, linh kiện.', where: 'NBS; Caixin/S&P Global' },
    { name: 'Xuất nhập khẩu Việt Nam – Trung Quốc theo nhóm hàng', why: 'Cho biết kênh nào (nông sản, linh kiện, đầu vào) đang thay đổi.', where: 'Cục Hải quan (customs.gov.vn)' },
    { name: 'Lượng khách quốc tế đến Việt Nam theo thị trường', why: 'Đo kênh du lịch.', where: 'Cục Thống kê (nso.gov.vn); Cục Du lịch Quốc gia' },
    { name: 'Giá thép, quặng sắt, đồng', why: 'Phản ánh kỳ vọng về kích thích hạ tầng của Trung Quốc.', where: 'World Bank Commodity Markets (Pink Sheet); dữ liệu thị trường' },
  ],
  counterpoints: [
    'Trung Quốc chậm lại có thể **thúc đẩy** thêm doanh nghiệp Trung Quốc đầu tư ra nước ngoài, trong đó có Việt Nam, làm tăng FDI.',
    'Tác động lên nông sản phụ thuộc nhiều vào việc mở cửa thị trường (nghị định thư, mã vùng trồng) hơn là tăng trưởng GDP Trung Quốc ngắn hạn.',
    'Kích thích không phải lúc nào cũng hiệu quả: nếu tập trung vào ổn định tài chính hơn là tăng cầu, tác động lan tỏa sang Việt Nam có thể nhỏ.',
  ],
  glossary: [
    { term: 'Kích thích kinh tế', definition: 'Biện pháp tài khóa (chi tiêu, giảm thuế) hoặc tiền tệ (hạ lãi suất, bơm thanh khoản) để thúc đẩy tăng trưởng.' },
    { term: 'Dư cung (overcapacity)', definition: 'Năng lực sản xuất vượt cầu, khiến doanh nghiệp giảm giá hoặc đẩy hàng ra nước ngoài.' },
    { term: 'Thương mại chính ngạch / tiểu ngạch', definition: 'Chính ngạch theo hợp đồng và thủ tục hải quan đầy đủ; tiểu ngạch là trao đổi qua biên giới với cư dân, quy mô nhỏ, rủi ro cao hơn.' },
    { term: 'Phòng vệ thương mại', definition: 'Biện pháp như chống bán phá giá, chống trợ cấp, tự vệ nhằm bảo vệ ngành sản xuất trong nước trước hàng nhập khẩu.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'china-economy-vietnam-q',
    question: 'Trung Quốc công bố gói kích thích lớn tập trung vào hạ tầng. Doanh nghiệp Việt Nam nào có khả năng chịu tác động rõ nhất trong ngắn hạn?',
    options: [
      { id: 'a', text: 'Doanh nghiệp du lịch đón khách Trung Quốc được lợi ngay lập tức.', explain: 'Kích thích hạ tầng chủ yếu tác động vào cầu xây dựng và nguyên vật liệu; thu nhập và tiêu dùng du lịch của hộ gia đình thay đổi chậm hơn.' },
      { id: 'b', text: 'Doanh nghiệp liên quan thép, vật liệu và hàng hóa cơ bản, qua kênh giá nguyên liệu thế giới.', correct: true, explain: 'Đúng. Kỳ vọng cầu thép, quặng, đồng tăng thường đẩy giá lên: nhà sản xuất có thể được lợi về giá bán, còn ngành dùng nhiều nguyên liệu này (xây dựng) chịu chi phí cao hơn.' },
      { id: 'c', text: 'Không doanh nghiệp nào bị ảnh hưởng vì đó là chính sách nội địa của Trung Quốc.', explain: 'Trung Quốc là nhà tiêu thụ hàng hóa cơ bản lớn và là đối tác thương mại lớn nhất của Việt Nam; chính sách nội địa lan ra qua giá và thương mại.' },
    ],
  },
  sources: [
    { title: 'China Overview', publisher: 'World Bank', url: 'https://www.worldbank.org/en/country/china/overview' },
    { title: "People's Republic of China: Economy", publisher: 'Asian Development Bank', url: 'https://www.adb.org/countries/prc/economy' },
    { title: 'Viet Nam: Economy', publisher: 'Asian Development Bank', url: 'https://www.adb.org/countries/viet-nam/economy' },
    { title: 'Commodity Markets', publisher: 'World Bank', url: 'https://www.worldbank.org/en/research/commodity-markets' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
