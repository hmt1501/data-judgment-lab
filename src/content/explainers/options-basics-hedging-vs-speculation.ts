import type { Explainer } from '../../../shared/explainer'

export const optionsBasicsHedgingVsSpeculation: Explainer = {
  id: 'options-basics-hedging-vs-speculation',
  slug: 'options-basics-hedging-vs-speculation',
  question: 'Quyền chọn (options) dùng để phòng ngừa rủi ro hay để đầu cơ, và khác nhau ở đâu?',
  title: 'Quyền chọn: phòng ngừa rủi ro hay đầu cơ',
  topic: 'markets-investing',
  tldr: 'Quyền chọn cho người mua **quyền, không phải nghĩa vụ**, mua (call) hoặc bán (put) tài sản ở giá thực hiện trước ngày đáo hạn, đổi lại phải trả **phí (premium)**. Cùng một công cụ, **phòng ngừa** là mua bảo hiểm cho vị thế đang có (như mua put khi đang giữ cổ phiếu), còn **đầu cơ** là dùng phí nhỏ để đặt cược hướng đi, có thể mất toàn bộ phí. Bài chỉ giải thích khái niệm, không khuyến nghị giao dịch.',
  keyPoints: [
    'Theo Wikipedia: call là quyền mua, put là quyền bán; premium là khoản người nắm giữ trả cho người bán; strike là giá thực hiện; expiry là ngày cuối được thực hiện. Nếu hết hạn không dùng, người mua thường mất phí.',
    'Phòng ngừa: **protective put** (giữ cổ phiếu và mua put) "như một bảo hiểm"; chi phí là phí put thu hẹp lợi nhuận khi giá tăng. Người mua call chỉ rủi ro tối đa bằng phí.',
    'Ví dụ giả định: giữ cổ phiếu giá 50.000 đồng, mua put giá thực hiện 48.000 đồng với phí 1.500 đồng/cổ phiếu. Lỗ tối đa = 50.000 − 48.000 + 1.500 = 3.500 đồng (7%), hòa vốn khi giá lên 51.500 đồng.',
    'Đầu cơ: người mua call giá thực hiện 52.000 đồng, phí 1.000 đồng, chỉ cần bỏ phí thay vì mua cả cổ phiếu (đòn bẩy); nếu cổ phiếu chỉ lên 51.000 đồng khi đáo hạn (+2%), quyền chọn hết giá trị và mất 100% phí.',
    'Bất đối xứng: người mua lỗ tối đa là phí; người bán call không có giới hạn lỗ theo ví dụ của Wikipedia (người bán put lỗ tối đa bằng strike trừ phí).',
  ],
  causalChain: [
    { from: 'Nhà đầu tư giữ cổ phiếu và lo giá giảm', to: 'Mua put để giới hạn lỗ', mechanism: 'Put tăng giá khi cổ phiếu giảm, bù một phần lỗ của cổ phiếu; đổi lại phải trả phí ngay từ đầu.' },
    { from: 'Phí put đã trả', to: 'Lợi nhuận tối đa của danh mục bị thu hẹp', mechanism: 'Nếu giá tăng, put hết giá trị còn phí vẫn mất, tức "phí bảo hiểm" làm giảm lợi suất.' },
    { from: 'Nhà đầu cơ mua call để đặt cược giá tăng', to: 'Lãi lỗ khuếch đại theo tỷ lệ vốn bỏ ra', mechanism: 'Phí nhỏ hơn giá cổ phiếu nên biến động nhỏ của cổ phiếu có thể thành lãi/lỗ lớn theo phần trăm phí.' },
    { from: 'Thời gian trôi về đáo hạn', to: 'Giá trị thời gian của quyền chọn giảm dần', mechanism: 'Giá trị thời gian phụ thuộc thời gian còn lại; càng gần đáo hạn, người mua càng mất giá trị nếu giá không đi đúng hướng.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân', effect: 'Hiểu quyền chọn giúp phân biệt công cụ bảo hiểm với công cụ đòn bẩy; công cụ có đòn bẩy dễ gây mất vốn nếu dùng như đặt cược.', direction: 'mixed' },
    { group: 'Nhà đầu tư dùng sản phẩm tương tự (như chứng quyền)', effect: 'Khái niệm premium, strike, đáo hạn và hao mòn giá trị thời gian vận dụng tương tự; cần đọc điều khoản cụ thể của từng sản phẩm.', direction: 'mixed' },
    { group: 'Doanh nghiệp có nợ/doanh thu ngoại tệ', effect: 'Quyền chọn tiền tệ (nếu có sẵn) là cách phòng ngừa tỷ giá với chi phí bằng phí; hiện nhiều doanh nghiệp dùng công cụ đơn giản hơn.', direction: 'mixed' },
    { group: 'Nhà đầu tư dài hạn', effect: 'Phí bảo hiểm lặp lại hằng kỳ làm giảm lợi suất dài hạn; cần cân nhắc chi phí so với lợi ích.', direction: 'down' },
  ],
  indicators: [
    { name: 'Phí quyền chọn so với giá tài sản', why: 'Phí càng cao so với giá thì cần biến động càng lớn mới có lãi.', where: 'Sàn giao dịch hoặc nhà cung cấp sản phẩm' },
    { name: 'Thời gian còn lại đến đáo hạn', why: 'Quyết định tốc độ mất giá trị thời gian.', where: 'Bảng giá sản phẩm' },
    { name: 'Điểm hòa vốn khi đáo hạn', why: 'Cho biết giá phải đi bao xa mới bù được phí.', where: 'Tự tính: strike ± phí' },
    { name: 'Biến động giá của tài sản cơ sở', why: 'Biến động cao làm phí cao.', where: 'Dữ liệu giá lịch sử' },
  ],
  counterpoints: [
    'Phòng ngừa không miễn phí và không hoàn hảo: put chỉ bảo vệ tới giá thực hiện và hết hạn đúng ngày; cổ phiếu có thể giảm sau hạn.',
    'Cùng một chiến lược có thể là phòng ngừa với người này và đầu cơ với người khác, tùy người đó có đang giữ tài sản cơ sở hay không.',
    'Ví dụ trong bài là giả định đơn giản (không tính thuế, phí giao dịch, thanh toán trước hạn); thị trường thực có thêm chi phí và rủi ro.',
  ],
  glossary: [
    { term: 'Call / Put', definition: 'Quyền mua / quyền bán tài sản ở giá thực hiện.' },
    { term: 'Premium', definition: 'Phí người mua trả cho người bán quyền chọn.' },
    { term: 'Strike (giá thực hiện)', definition: 'Giá mà giao dịch xảy ra nếu quyền chọn được thực hiện.' },
    { term: 'Protective put', definition: 'Giữ tài sản và mua put trên tài sản đó để giới hạn lỗ.' },
    { term: 'Giá trị thời gian', definition: 'Phần giá quyền chọn vượt giá trị nội tại, giảm dần khi đến gần đáo hạn.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'options-basics-hedging-vs-speculation-q',
    question: 'Ví dụ giả định: bạn giữ cổ phiếu giá 50.000 đồng và mua put strike 48.000 đồng, phí 1.500 đồng. Khi đáo hạn cổ phiếu còn 40.000 đồng. Khoản lỗ trên mỗi cổ phiếu (tính cả phí) là bao nhiêu?',
    options: [
      { id: 'a', text: '10.000 đồng, như không có put.', explain: 'Put được thực hiện ở 48.000 đồng nên bù phần giảm dưới 48.000.' },
      { id: 'b', text: '3.500 đồng (50.000 − 48.000 + 1.500).', correct: true, explain: 'Đúng: put giới hạn lỗ tại strike, cộng phí đã trả; đó là lỗ tối đa của chiến lược.' },
      { id: 'c', text: '0 đồng, vì put bảo hiểm toàn bộ.', explain: 'Put chỉ bảo vệ từ giá thực hiện trở xuống và còn phải trả phí.' },
    ],
  },
  sources: [
    { title: 'Option (finance)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Option_(finance)' },
    { title: 'Hedging vs. Speculation (options)', publisher: 'CertFuel (SIE exam prep)', url: 'https://www.certfuel.com/sie/videos/products-and-risks/options/hedging-vs-speculation/' },
    { title: 'Protective Puts', publisher: 'Options Industry Council (OCC)', url: 'https://www.optionseducation.org/videolibrary/protective-puts' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 132,
}
