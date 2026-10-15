import type { Explainer } from '../../../shared/explainer'

export const currentAccountDeficitSustainability: Explainer = {
  id: 'current-account-deficit-sustainability',
  slug: 'current-account-deficit-sustainability',
  question: 'Thâm hụt tài khoản vãng lai kéo dài bao lâu thì đáng lo?',
  title: 'Không phải con số thâm hụt, mà là ai tài trợ và dùng vào đâu',
  topic: 'macro',
  tldr: '**Tài khoản vãng lai** = cán cân thương mại + thu nhập yếu tố ròng + chuyển giao ròng, và cũng bằng **tiết kiệm quốc gia trừ đầu tư**. Thâm hụt nghĩa là nền kinh tế chi ở nước ngoài nhiều hơn thu về, phải vay hoặc huy động vốn nước ngoài bù đắp. Thâm hụt không tự nó xấu: nó đáng lo khi được tài trợ bằng **vốn ngắn hạn dễ đảo chiều**, dùng cho tiêu dùng thay vì năng lực sản xuất, hoặc khi **nợ nước ngoài tăng nhanh hơn thu nhập** của nền kinh tế.',
  keyPoints: [
    'Theo bài của Ghosh và Ramakrishnan (IMF, Finance & Development), cán cân vãng lai bằng cán cân thương mại cộng thu nhập yếu tố ròng và chuyển giao; nó cũng bằng chênh lệch giữa tiết kiệm và đầu tư quốc gia.',
    'Thâm hụt có thể phản ánh **tiết kiệm thấp**, **đầu tư cao**, hoặc cả hai; với nước thiếu vốn nhiều cơ hội đầu tư, thâm hụt có thể là tự nhiên, nhưng bài IMF nêu nghiên cứu gần đây không cho thấy nước đang phát triển thâm hụt tăng trưởng nhanh hơn.',
    'Cách tài trợ quan trọng hơn quy mô: **FDI** và vốn dài hạn bền hơn; **vốn vay ngắn hạn bằng ngoại tệ** có thể đảo chiều bất ngờ và gây khủng hoảng cán cân thanh toán.',
    'Dấu hiệu cần chú ý: thâm hụt kéo dài cùng nợ nước ngoài/GDP tăng, dự trữ ngoại hối mỏng so với nợ ngắn hạn, tỷ giá bị giữ cứng và tín dụng tăng nóng.',
    'Việt Nam thường có xuất khẩu lớn nhưng cán cân vãng lai còn chịu tác động của chuyển giao (kiều hối) và thu nhập đầu tư trả ra nước ngoài (lợi nhuận FDI); nên cần đọc cả cấu phần chứ không chỉ cán cân thương mại.',
  ],
  causalChain: [
    { from: 'Đầu tư (hoặc tiêu dùng) vượt tiết kiệm nội địa', to: 'Thâm hụt vãng lai', mechanism: 'Phần chi tiêu vượt thu nhập quốc gia được bù bằng nhập khẩu ròng, tức là vay hoặc nhận vốn từ nước ngoài.' },
    { from: 'Thâm hụt vãng lai', to: 'Dòng vốn vào hoặc giảm dự trữ để bù', mechanism: 'Cán cân thanh toán luôn cân bằng: thâm hụt vãng lai phải đi kèm thặng dư tài khoản tài chính (vốn vào) hoặc rút dự trữ ngoại hối.' },
    { from: 'Dòng vốn vào chủ yếu là vốn ngắn hạn', to: 'Dễ đảo chiều khi tâm lý xấu đi', mechanism: 'Khi lãi suất thế giới tăng hoặc niềm tin giảm, vốn ngắn hạn rút nhanh, nội tệ chịu áp lực mất giá.' },
    { from: 'Nội tệ mất giá và vốn rút', to: 'Tăng lãi suất, giảm tăng trưởng, rủi ro khủng hoảng', mechanism: 'Ngân hàng trung ương phải nâng lãi suất hoặc bán dự trữ; doanh nghiệp vay ngoại tệ gặp áp lực trả nợ khi nội tệ yếu.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp vay ngoại tệ', effect: 'Chịu rủi ro tỷ giá nếu nội tệ mất giá do thâm hụt vãng lai kéo dài hoặc dòng vốn đảo chiều.', direction: 'down' },
    { group: 'Doanh nghiệp xuất khẩu', effect: 'Thặng dư vãng lai thường đi cùng tỷ giá ổn định, có lợi cho kế hoạch kinh doanh; thâm hụt kéo dài có thể tạo áp lực điều chỉnh tỷ giá.', direction: 'mixed' },
    { group: 'Hộ gia đình giữ tiết kiệm', effect: 'Áp lực lên tỷ giá thường làm tăng nhu cầu giữ USD, vàng; lạm phát nhập khẩu cũng ảnh hưởng sức mua.', direction: 'down' },
    { group: 'Nhà đầu tư nước ngoài', effect: 'Nhìn cán cân vãng lai và dự trữ ngoại hối như thước đo rủi ro tiền tệ; chỉ số xấu làm tăng phần bù rủi ro.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Cán cân vãng lai / GDP và cấu phần (thương mại, thu nhập, chuyển giao)', why: 'Cho biết nguồn thâm hụt hay thặng dư đến từ đâu.', where: 'Ngân hàng Nhà nước (cán cân thanh toán), Cục Thống kê (xuất nhập khẩu)' },
    { name: 'Nợ nước ngoài / GDP và nợ ngắn hạn / dự trữ ngoại hối', why: 'Đo khả năng thanh toán và rủi ro đảo chiều vốn.', where: 'Ngân hàng Nhà nước, IMF, Ngân hàng Thế giới' },
    { name: 'Dự trữ ngoại hối đủ cho bao nhiêu tháng nhập khẩu', why: 'Đệm đối phó cú sốc bên ngoài.', where: 'Ngân hàng Nhà nước, IMF' },
    { name: 'Cơ cấu dòng vốn: FDI, đầu tư gián tiếp, vay thương mại', why: 'FDI bền hơn vốn gián tiếp ngắn hạn.', where: 'Cục Thống kê, Bộ Tài chính, Ngân hàng Nhà nước' },
  ],
  counterpoints: [
    'Một quốc gia có thể duy trì thâm hụt lâu nếu vốn vào được dùng cho đầu tư sinh lợi cao hơn chi phí vay, như nhiều nền kinh tế đang tăng trưởng nhanh từng trải qua.',
    'Quốc gia phát hành đồng tiền dự trữ (như Mỹ) có thể duy trì thâm hụt lớn lâu hơn nhiều so với nước nhỏ vì nhu cầu tài sản bằng đồng tiền đó; so sánh trực tiếp với Việt Nam dễ sai.',
    'Thặng dư vãng lai cũng không luôn tốt: nó có thể phản ánh đầu tư trong nước yếu hoặc tiêu dùng thấp, và gây căng thẳng thương mại với đối tác.',
  ],
  glossary: [
    { term: 'Tài khoản vãng lai', definition: 'Tổng cán cân thương mại hàng hóa-dịch vụ, thu nhập yếu tố ròng và chuyển giao ròng với nước ngoài.' },
    { term: 'Cán cân thanh toán', definition: 'Bản ghi các giao dịch kinh tế giữa cư dân trong nước và nước ngoài; tài khoản vãng lai và tài khoản vốn/tài chính cân bằng nhau (cộng thay đổi dự trữ).' },
    { term: 'FDI', definition: 'Đầu tư trực tiếp nước ngoài, thường là vốn dài hạn gắn với quyền kiểm soát hoạt động doanh nghiệp.' },
    { term: 'Dừng đột ngột (sudden stop)', definition: 'Dòng vốn nước ngoài vào đột ngột ngừng hoặc đảo chiều, gây áp lực lên tỷ giá và cán cân thanh toán.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'current-account-deficit-sustainability-q',
    question: 'Hai nước cùng thâm hụt vãng lai 4% GDP. Nước X được tài trợ chủ yếu bằng FDI vào nhà máy xuất khẩu; nước Y bằng vay ngắn hạn bằng ngoại tệ để tài trợ tiêu dùng. Cách đọc nào hợp lý?',
    options: [
      { id: 'a', text: 'Hai nước rủi ro như nhau vì cùng một mức thâm hụt.', explain: 'Quy mô thâm hụt chỉ là một phần câu chuyện; cách tài trợ và mục đích sử dụng khác nhau quyết định độ bền.' },
      { id: 'b', text: 'Nước Y rủi ro hơn vì vốn ngắn hạn dễ đảo chiều và không tạo năng lực trả nợ.', correct: true, explain: 'Đúng. FDI vào năng lực xuất khẩu tạo ngoại tệ để trả về sau; vay ngắn hạn cho tiêu dùng thì không, lại dễ bị rút khi tâm lý xấu đi.' },
      { id: 'c', text: 'Nước X rủi ro hơn vì FDI là nợ nước ngoài.', explain: 'FDI là vốn chủ sở hữu, không phải khoản nợ phải trả theo kỳ hạn; lợi nhuận chảy ra tùy kết quả kinh doanh.' },
    ],
  },
  sources: [
    { title: 'Current Account Deficits: Is There a Problem? (Back to Basics)', publisher: 'IMF, Finance & Development', url: 'https://www.imf.org/external/pubs/ft/fandd/basics/pdf/ghosh_current-account-deficits.pdf' },
    { title: 'Current account', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Current_account' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 43,
}
