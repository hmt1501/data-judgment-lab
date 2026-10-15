import type { Explainer } from '../../../shared/explainer'

export const evBatterySupplyChainVietnam: Explainer = {
  id: 'ev-battery-supply-chain-vietnam',
  slug: 'ev-battery-supply-chain-vietnam',
  question: 'Xe điện, pin và chuỗi cung ứng khoáng sản: ai nắm khâu nào và Việt Nam ở đâu?',
  title: 'Xe điện chạy bằng pin, pin chạy bằng khoáng sản: quyền lực nằm ở khâu chế biến hơn là khâu khai thác',
  topic: 'geopolitics-trade',
  tldr: 'Pin lithium-ion cần lithium, niken, coban, graphite, mangan, cộng với vật liệu cực, chất điện giải, màng ngăn; mỗi khâu có thể tập trung ở vài quốc gia. Theo báo cáo Global Critical Minerals Outlook 2025 của IEA (qua tường thuật của Mercom, 28/05/2025), **khâu chế biến** tập trung hơn cả khâu khai thác, với Trung Quốc chiếm vị trí chi phối ở nhiều khoáng sản. Với Việt Nam, câu hỏi là tham gia khâu nào: lắp ráp xe, pin, vật liệu, hay khai thác – chế biến, và phụ thuộc đầu vào nhập khẩu ra sao.',
  keyPoints: [
    '**Chuỗi giá trị pin:** khai thác (lithium, niken, coban, graphite…) → chế biến/tinh luyện → vật liệu cực (cathode/anode) → tế bào pin → bộ pin → xe điện → tái chế. Giá trị và công nghệ thay đổi mạnh qua từng khâu.',
    'Theo IEA (qua Mercom, 28/05/2025): thị phần trung bình của **ba nước chế biến hàng đầu** tăng từ khoảng 82% (2020) lên 86% (2024); Trung Quốc sản xuất hơn 95% graphite cấp pin và đất hiếm, khoảng 70% hóa chất lithium; Indonesia đóng góp khoảng 90% mức tăng nguồn cung niken qua chế biến trong 2020–2024 (theo cách Mercom tường thuật).',
    'Cũng theo bài đó, Trung Quốc xử lý khoảng 70–95% lithium, coban, phosphate và graphite ở trung và hạ nguồn, sản xuất khoảng 80% tế bào pin toàn cầu và 98% sản lượng LFP. Đây là số liệu tường thuật từ báo cáo IEA; nên đối chiếu báo cáo gốc trước khi trích dẫn chính thức.',
    'Điều đó khiến chuỗi pin **dễ tổn thương trước chính sách**: hạn chế xuất khẩu, thuế quan, trợ cấp hay kiểm soát công nghệ đều có thể đổi chi phí và nguồn cung nhanh chóng.',
    'Các nước muốn đa dạng hóa dùng nhiều công cụ: ưu đãi sản xuất pin trong nước, hiệp định khoáng sản, đầu tư nước ngoài vào chế biến, tái chế; nhưng xây nhà máy chế biến cần vốn, công nghệ, môi trường và nhiều năm.',
  ],
  causalChain: [
    { from: 'Nhu cầu xe điện và lưu trữ năng lượng tăng', to: 'Cầu khoáng sản pin tăng', mechanism: 'Mỗi xe điện dùng lượng khoáng sản pin lớn hơn nhiều so với xe xăng; tăng trưởng xe điện kéo cầu lithium, niken, graphite…' },
    { from: 'Chế biến tập trung ở vài quốc gia', to: 'Rủi ro gián đoạn và quyền định giá', mechanism: 'Một chính sách hạn chế xuất khẩu hay sự cố ở khâu chế biến có thể làm tắc cả chuỗi, vì khai thác ở nước khác không thay được ngay.' },
    { from: 'Chính sách bảo hộ/ưu đãi của các nước lớn', to: 'Dịch chuyển đầu tư pin và vật liệu sang các nước thứ ba', mechanism: 'Quy tắc xuất xứ, trợ cấp, thuế khiến nhà sản xuất tìm địa điểm mới, trong đó có Đông Nam Á, đổi lại các nước này phải đáp ứng yêu cầu về xuất xứ và môi trường.' },
    { from: 'Giá khoáng sản biến động mạnh', to: 'Giá pin và giá xe điện thay đổi', mechanism: 'Pin chiếm phần đáng kể giá thành xe điện; giá niken/lithium giảm kéo giá xe giảm và ngược lại, nhưng có độ trễ do hợp đồng dài hạn.' },
  ],
  vietnamImpact: [
    { group: 'Nhà sản xuất xe điện và lắp ráp trong nước', effect: 'Được lợi từ nhu cầu xe điện và chính sách khuyến khích, nhưng phụ thuộc pin, vật liệu và linh kiện nhập khẩu; giá khoáng sản và chính sách thương mại bên ngoài tác động trực tiếp giá thành.', direction: 'mixed' },
    { group: 'FDI vào sản xuất pin và vật liệu', effect: 'Cơ hội thu hút đầu tư khi các tập đoàn đa dạng hóa chuỗi, nhưng phải đáp ứng yêu cầu xuất xứ, môi trường, và cạnh tranh với các nước láng giềng.', direction: 'up' },
    { group: 'Ngành khai khoáng và chế biến sâu', effect: 'Giá trị gia tăng nằm ở chế biến sâu; khai thác thô ít giá trị và có rủi ro môi trường; cần công nghệ, vốn và quản trị.', direction: 'mixed' },
    { group: 'Người tiêu dùng', effect: 'Giá xe điện giảm khi giá pin giảm và cạnh tranh tăng; hạ tầng sạc và giá điện quyết định chi phí sử dụng.', direction: 'up' },
    { group: 'Môi trường và lao động', effect: 'Khai thác và chế biến khoáng sản, tái chế pin có rủi ro ô nhiễm; cần chuẩn mực quản lý chặt.', direction: 'down' },
  ],
  indicators: [
    { name: 'Báo cáo Global Critical Minerals Outlook và Global EV Outlook của IEA', why: 'Số liệu cung – cầu, độ tập trung theo khoáng sản và quốc gia.', where: 'Trang báo cáo của IEA (iea.org)' },
    { name: 'Giá lithium, niken, coban, graphite', why: 'Tín hiệu chi phí pin và động lực đầu tư vào khai thác – chế biến.', where: 'World Bank Pink Sheet (worldbank.org/en/research/commodity-markets)' },
    { name: 'Doanh số và thị phần xe điện trong nước', why: 'Đo tốc độ chuyển dịch nhu cầu thực.', where: 'Hiệp hội các nhà sản xuất ô tô Việt Nam (VAMA), báo cáo doanh nghiệp' },
    { name: 'Chính sách xuất khẩu khoáng sản và quy tắc xuất xứ của các thị trường lớn', why: 'Quyết định liệu xe và pin sản xuất trong nước có được hưởng ưu đãi hay không.', where: 'Công bố của WTO, cơ quan hải quan và thương mại các nước' },
  ],
  counterpoints: [
    'Công nghệ pin thay đổi nhanh (LFP, natri-ion, ít coban): khoáng sản "then chốt" hôm nay có thể kém quan trọng sau vài năm.',
    'Tập trung chế biến không hoàn toàn bất lợi: quy mô lớn giúp hạ chi phí; rủi ro đến từ chính sách, không đến từ bản thân sự tập trung.',
    'Số liệu thị phần phụ thuộc phương pháp tính (theo quốc gia sở hữu hay đặt nhà máy) và năm; cần xem bản gốc của IEA.',
  ],
  glossary: [
    { term: 'Khoáng sản then chốt', definition: 'Khoáng sản quan trọng với công nghệ sạch và công nghiệp, có rủi ro gián đoạn cung cao.' },
    { term: 'Chế biến/tinh luyện', definition: 'Khâu biến quặng thô thành hóa chất hoặc kim loại đạt chuẩn để dùng cho vật liệu pin.' },
    { term: 'Cathode / Anode', definition: 'Hai cực của pin; cathode dùng lithium, niken, coban, mangan hoặc sắt phosphate; anode thường dùng graphite.' },
    { term: 'LFP', definition: 'Pin lithium sắt phosphate, không dùng niken và coban.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'ev-battery-supply-chain-vietnam-q',
    question: 'Một nước có mỏ niken lớn nhưng không có nhà máy chế biến. Nhận định nào hợp lý?',
    options: [
      { id: 'a', text: 'Nước đó nắm quyền lực lớn nhất chuỗi pin vì sở hữu quặng.', explain: 'Giá trị và quyền lực nằm nhiều ở khâu chế biến và vật liệu; quặng thô có thể bán với giá thấp.' },
      { id: 'b', text: 'Quyền lực chuỗi phụ thuộc cả khâu chế biến; nước đó muốn tăng giá trị phải đầu tư hoặc thu hút đầu tư chế biến sâu.', correct: true, explain: 'Đúng. Chế biến là nút thắt; hạn chế xuất khẩu quặng cũng là công cụ nhiều nước đã dùng để thu hút chế biến trong nước.' },
      { id: 'c', text: 'Chuỗi pin không thể thay đổi nơi chế biến.', explain: 'Nơi chế biến có thể thay đổi theo đầu tư và chính sách, dù cần nhiều năm.' },
    ],
  },
  sources: [
    { title: 'China\'s Dominance in Critical Minerals Supply and Refining Continues: IEA (28/05/2025)', publisher: 'Mercom India', url: 'https://www.mercomindia.com/chinas-dominance-in-critical-minerals-supply-and-refining-continues-iea' },
    { title: 'Commodity Markets (Pink Sheet, Commodity Markets Outlook)', publisher: 'World Bank', url: 'https://www.worldbank.org/en/research/commodity-markets' },
    { title: 'Electric vehicle battery', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Electric_vehicle_battery' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 66,
}
