import type { Explainer } from '../../../shared/explainer'

export const competitiveDevaluationCurrencyWars: Explainer = {
  id: 'competitive-devaluation-currency-wars',
  slug: 'competitive-devaluation-currency-wars',
  question: 'Phá giá tiền tệ để xuất khẩu có thật sự có lợi không?',
  title: 'Phá giá cạnh tranh chỉ cho lợi thế tạm thời, và lợi thế đó bị bào mòn bởi nhập khẩu đắt hơn, lạm phát và trả đũa',
  topic: 'geopolitics-trade',
  tldr: 'Đồng nội tệ yếu đi làm hàng xuất khẩu rẻ hơn tính bằng ngoại tệ, nên có thể tăng đơn hàng. Nhưng nó làm nguyên liệu, máy móc nhập khẩu đắt hơn, tăng áp lực lạm phát, làm nặng nợ ngoại tệ và dễ bị các nước khác đáp trả. Lợi ích ròng phụ thuộc vào việc xuất khẩu dùng bao nhiêu đầu vào nhập khẩu, độ co giãn của cầu và phản ứng của các nước còn lại.',
  keyPoints: [
    'Cơ chế cổ điển: nội tệ giảm giá → giá xuất khẩu tính bằng ngoại tệ giảm → đơn hàng tăng. Đây là lý do gọi là chính sách “làm nghèo láng giềng” (beggar-thy-neighbour) khi nhiều nước cùng làm.',
    'Nếu ngành xuất khẩu nhập nhiều đầu vào (như lắp ráp điện tử), tiền yếu làm chi phí đầu vào tăng nên lợi thế giá bị thu hẹp; xuất khẩu theo **giá trị gia tăng** mới là thước đo phù hợp.',
    'Tác động lên nợ: doanh nghiệp, ngân hàng và chính phủ vay bằng ngoại tệ phải trả nhiều nội tệ hơn khi nội tệ yếu đi.',
    'Phân biệt **phá giá do chính sách** với **đồng tiền yếu do thị trường** (cán cân vãng lai, chênh lệch lãi suất); nhiều cáo buộc “thao túng tiền tệ” là tranh luận chứ không là kết luận hiển nhiên.',
    'Lợi thế ngắn hạn thường bị trả đũa bằng thuế quan hoặc giảm giá ngược lại, nên kết quả cuối thường là bất ổn thương mại hơn là lợi ích bền vững.',
  ],
  causalChain: [
    { from: 'Nội tệ mất giá so với ngoại tệ', to: 'Giá hàng xuất khẩu tính bằng ngoại tệ giảm', mechanism: 'Doanh nghiệp có thể hạ giá bán ngoại tệ mà vẫn giữ nội tệ thu về, hoặc giữ giá để tăng lợi nhuận nội tệ.' },
    { from: 'Nội tệ mất giá', to: 'Giá hàng nhập khẩu và đầu vào nhập khẩu tăng', mechanism: 'Chi phí nội tệ của nguyên liệu, nhiên liệu, thiết bị tăng, làm lạm phát cao hơn và thu hẹp biên lợi nhuận.' },
    { from: 'Nhu cầu xuất khẩu tăng nhưng giá cả trong nước tăng', to: 'Tỷ giá thực suy yếu lợi thế ban đầu', mechanism: 'Nếu lạm phát trong nước nhanh hơn đối tác, lợi thế từ tỷ giá danh nghĩa bị bào mòn dần.' },
    { from: 'Nhiều nước cùng phá giá hoặc trả đũa', to: 'Lợi thế tương đối biến mất, bất ổn tăng', mechanism: 'Không ai giành được lợi thế, trong khi biến động tỷ giá và rào cản thương mại tăng chi phí cho tất cả.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp xuất khẩu dùng nhiều nguyên liệu nội địa', effect: 'Hưởng lợi nhất khi VND yếu đi vì chi phí chủ yếu bằng nội tệ.', direction: 'up' },
    { group: 'Doanh nghiệp lắp ráp phụ thuộc đầu vào nhập khẩu', effect: 'Lợi ích tỷ giá bị chi phí nhập khẩu bù trừ phần lớn.', direction: 'mixed' },
    { group: 'Người vay ngoại tệ', effect: 'Nghĩa vụ trả nợ tính bằng VND tăng khi VND yếu đi.', direction: 'down' },
    { group: 'Hộ gia đình', effect: 'Giá hàng nhập khẩu và xăng dầu có xu hướng tăng, ảnh hưởng chi tiêu hằng ngày.', direction: 'down' },
    { group: 'Nhà đầu tư nước ngoài', effect: 'Kỳ vọng mất giá làm tăng nhu cầu phòng ngừa và có thể kéo dòng vốn ra.', direction: 'down' },
  ],
  indicators: [
    { name: 'Tỷ giá thực đa phương (REER)', why: 'Tách tác động tỷ giá danh nghĩa khỏi chênh lệch lạm phát với đối tác.', where: 'BIS (chỉ số tỷ giá thực hiệu dụng), IMF' },
    { name: 'Tỷ trọng đầu vào nhập khẩu trong xuất khẩu', why: 'Cho biết phần lợi thế tỷ giá còn lại cho ngành xuất khẩu.', where: 'Bảng vào–ra, số liệu TiVA của OECD–WTO' },
    { name: 'Dự trữ ngoại hối và cán cân vãng lai', why: 'Giúp phân biệt áp lực thị trường với chính sách chủ động.', where: 'Ngân hàng Nhà nước, IMF (IFS)' },
  ],
  counterpoints: [
    'Ở nước có ngành xuất khẩu dùng chủ yếu đầu vào nội địa và nền kinh tế còn dư công suất, tiền yếu hơn có thể hỗ trợ tăng trưởng đáng kể.',
    'Có trường hợp phá giá là điều chỉnh về mức cân bằng sau khi đồng tiền định giá quá cao, không phải “chiến tranh tiền tệ”.',
    'Bằng chứng thực nghiệm về hiệu quả khác nhau theo thời kỳ và nước; cần cẩn thận với các quan hệ nhân quả quá đơn giản.',
  ],
  glossary: [
    { term: 'Phá giá cạnh tranh', definition: 'Chủ động làm yếu đồng nội tệ để tăng sức cạnh tranh của xuất khẩu so với đối thủ.' },
    { term: 'Tỷ giá thực', definition: 'Tỷ giá danh nghĩa điều chỉnh theo chênh lệch mức giá giữa hai nước.' },
    { term: 'Làm nghèo láng giềng', definition: 'Chính sách giành lợi ích trong nước bằng cách chuyển chi phí sang các nước khác.' },
    { term: 'Thao túng tiền tệ', definition: 'Cáo buộc một nước can thiệp tỷ giá để có lợi thế thương mại không công bằng. Điều lệ IMF yêu cầu thành viên tránh thao túng tỷ giá nhằm cản trở điều chỉnh cán cân thanh toán hoặc giành lợi thế cạnh tranh không công bằng (theo PIIE); thế nào là “thao túng” thì tiêu chí và kết luận thường gây tranh luận.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'competitive-devaluation-currency-wars-q',
    question: 'Một nước có ngành xuất khẩu lắp ráp với phần lớn linh kiện nhập khẩu, đồng nội tệ mất giá 10%. Dự đoán hợp lý nhất về lợi thế xuất khẩu?',
    options: [
      { id: 'a', text: 'Giá xuất khẩu giảm đủ 10% và lợi nhuận tăng đúng 10%.', explain: 'Chi phí linh kiện nhập khẩu cũng tăng theo tỷ giá nên lợi ích bị bù trừ phần lớn.' },
      { id: 'b', text: 'Lợi thế chỉ còn một phần nhỏ vì chi phí đầu vào nhập khẩu tăng gần tương ứng.', correct: true, explain: 'Đúng. Chỉ phần giá trị gia tăng trong nước hưởng trọn lợi thế tỷ giá; phần linh kiện nhập khẩu thì không.' },
      { id: 'c', text: 'Không có tác động gì đến doanh nghiệp.', explain: 'Vẫn có tác động qua phần chi phí nội tệ (lương, thuê đất) và cạnh tranh giá, chỉ nhỏ hơn dự kiến.' },
    ],
  },
  sources: [
    { title: 'Currency war', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Currency_war' },
    { title: 'Beggar thy neighbour', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Beggar_thy_neighbour' },
    { title: 'Currency Debate Affects Korea (exchange rate manipulation, IMF charter, beggar-thy-neighbor)', publisher: 'Peterson Institute for International Economics', url: 'https://www.piie.com/node/3690' },
    { title: 'Global Value Chains', publisher: 'World Trade Organization', url: 'https://www.wto.org/english/res_e/statis_e/miwi_e/miwi_e.htm' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 104,
}
