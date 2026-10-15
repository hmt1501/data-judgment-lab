import type { Explainer } from '../../../shared/explainer'

export const balanceOfPaymentsCapitalFlows: Explainer = {
  id: 'balance-of-payments-capital-flows',
  slug: 'balance-of-payments-capital-flows',
  question: 'Cán cân thanh toán gồm những gì và dòng vốn quyết định điều gì?',
  title: 'Cán cân thanh toán: tài khoản vãng lai, tài khoản tài chính và dòng vốn',
  topic: 'macro',
  tldr: 'Cán cân thanh toán ghi lại mọi giao dịch giữa người cư trú và người không cư trú trong một thời kỳ. Về kế toán, các tài khoản luôn **cân bằng về 0**: thâm hụt vãng lai (nhập nhiều hơn xuất, trả lãi nhiều hơn nhận) phải được tài trợ bằng **dòng vốn vào** hoặc **rút dự trữ ngoại hối**. Vì vậy câu hỏi quan trọng không phải "có thâm hụt hay không" mà là "ai đang tài trợ và có bền không".',
  keyPoints: [
    '**Tài khoản vãng lai** gồm hàng hóa và dịch vụ (xuất trừ nhập), **thu nhập sơ cấp** (thu nhập từ đầu tư, lương) và **thu nhập thứ cấp** (chuyển giao như kiều hối, viện trợ), theo cách Wikipedia mô tả.',
    '**Tài khoản tài chính** ghi sự thay đổi quyền sở hữu tài sản và nợ xuyên biên giới: đầu tư trực tiếp, đầu tư gián tiếp (cổ phiếu, trái phiếu), vay nợ và **dự trữ ngoại hối**. Tài khoản vốn (theo nghĩa hẹp của IMF) chỉ gồm các chuyển giao vốn và tài sản phi tài chính, phi sản xuất.',
    'Đồng nhất thức: vãng lai + vốn + tài chính + sai số thống kê = 0. Trên thực tế "sai số và sót" là khoản hấp thụ chênh lệch dữ liệu.',
    'Theo Wikipedia, thâm hụt vãng lai phải được bù bằng dòng khác: **vốn đầu tư/vay từ nước ngoài**, bán tài sản ở nước ngoài, hoặc **rút dự trữ ngoại hối**; thâm hụt kéo dài làm nợ nước ngoài tăng hoặc tài sản trong nước thuộc nhiều hơn về người nước ngoài.',
    'Cấu phần của dòng vốn quan trọng hơn tổng số: FDI thường ổn định hơn dòng vốn gián tiếp và vay ngắn hạn – là loại dễ rút nhanh khi tâm lý đảo chiều.',
  ],
  causalChain: [
    { from: 'Nhập khẩu và trả lãi vay nước ngoài lớn hơn xuất khẩu và thu nhập từ nước ngoài', to: 'Tài khoản vãng lai thâm hụt', mechanism: 'Nền kinh tế đang chi nhiều hơn thu bằng ngoại tệ trong kỳ, nên cần nguồn ngoại tệ bù đắp phần chênh lệch.' },
    { from: 'Tài khoản vãng lai thâm hụt', to: 'Cần dòng vốn vào tương ứng hoặc rút dự trữ', mechanism: 'Vì tổng các tài khoản bằng 0, thâm hụt vãng lai có "mặt kia" là dòng vốn ròng vào hoặc dự trữ giảm; ngoại tệ không tự xuất hiện.' },
    { from: 'Dòng vốn vào tăng mạnh (FDI, vốn gián tiếp, vay)', to: 'Áp lực lên tỷ giá, tín dụng, giá tài sản', mechanism: 'Vốn vào làm tăng cung ngoại tệ, có thể làm đồng nội tệ mạnh lên hoặc buộc ngân hàng trung ương mua ngoại tệ (dự trữ tăng, thanh khoản nội tệ tăng).' },
    { from: 'Dòng vốn đảo chiều đột ngột (đặc biệt vốn ngắn hạn)', to: 'Tỷ giá và dự trữ chịu sức ép', mechanism: 'Khi nhà đầu tư rút vốn, nhu cầu ngoại tệ tăng đột ngột; nếu dự trữ không đủ đệm, đồng nội tệ mất giá và lãi suất bị đẩy lên.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp xuất khẩu', effect: 'Thặng dư thương mại giúp cung ngoại tệ dồi dào, nhưng một phần nhập khẩu đầu vào và chuyển lợi nhuận của khu vực FDI làm giảm ngoại tệ ròng thực tế.', direction: 'mixed' },
    { group: 'Người nhận kiều hối và gia đình có người thân ở nước ngoài', effect: 'Kiều hối là một phần của thu nhập thứ cấp trong tài khoản vãng lai, góp phần cung ngoại tệ.', direction: 'up' },
    { group: 'Doanh nghiệp vay ngoại tệ', effect: 'Dòng vốn vào đảo chiều có thể làm nội tệ yếu đi, tăng gánh nợ tính bằng đồng.', direction: 'down' },
    { group: 'Nhà đầu tư chứng khoán', effect: 'Dòng vốn gián tiếp vào/ra ảnh hưởng thanh khoản và tâm lý thị trường, đồng thời liên quan tỷ giá.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Cán cân vãng lai (% GDP)', why: 'Cho biết mức độ nền kinh tế phụ thuộc vốn nước ngoài.', where: 'IMF (Balance of Payments statistics), Ngân hàng Nhà nước' },
    { name: 'Cơ cấu dòng vốn: FDI, đầu tư gián tiếp, vay nợ', why: 'Phân biệt dòng vốn bền với dòng vốn dễ rút.', where: 'Ngân hàng Nhà nước, Cục Thống kê, IMF' },
    { name: 'Dự trữ ngoại hối so với nhập khẩu và nợ ngắn hạn', why: 'Đo "tấm đệm" khi dòng vốn đảo chiều.', where: 'IMF, Ngân hàng Nhà nước' },
    { name: 'Sai số và sót', why: 'Số lớn bất thường là dấu hiệu dòng ngoại tệ chưa được ghi nhận đầy đủ.', where: 'Cán cân thanh toán quốc tế do ngân hàng trung ương công bố' },
  ],
  counterpoints: [
    'Thâm hụt vãng lai không tự động xấu: nếu nó tài trợ cho đầu tư sinh lời (máy móc, hạ tầng), nền kinh tế có thể trả nợ bằng thu nhập tăng thêm; xấu khi tài trợ cho tiêu dùng hoặc bong bóng.',
    'Đọc tên "tài khoản vốn" và "tài khoản tài chính" cần thận trọng: tài liệu cũ dùng "tài khoản vốn" theo nghĩa rộng (gồm cả dòng tài chính), còn IMF hiện dùng nghĩa hẹp.',
    'Dữ liệu cán cân thanh toán thường được điều chỉnh sau khi công bố; khoản "sai số và sót" có thể lớn.',
  ],
  glossary: [
    { term: 'Tài khoản vãng lai', definition: 'Ghi thương mại hàng hóa, dịch vụ, thu nhập sơ cấp và thu nhập thứ cấp (chuyển giao) với nước ngoài.' },
    { term: 'Tài khoản tài chính', definition: 'Ghi các giao dịch về tài sản và nợ tài chính xuyên biên giới, kể cả dự trữ ngoại hối.' },
    { term: 'Thu nhập sơ cấp', definition: 'Thu nhập từ lao động và đầu tư xuyên biên giới như lãi, cổ tức, lương.' },
    { term: 'Sai số và sót', definition: 'Khoản điều chỉnh thống kê làm tổng cán cân thanh toán bằng 0.' },
    { term: 'Dự trữ ngoại hối', definition: 'Tài sản ngoại tệ do ngân hàng trung ương nắm giữ, dùng để can thiệp thị trường và đệm rủi ro.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'balance-of-payments-capital-flows-q',
    question: 'Một nước có thâm hụt vãng lai nhưng cán cân thanh toán tổng thể không đổi, dự trữ ngoại hối vẫn như cũ. Điều này hàm ý gì?',
    options: [
      { id: 'a', text: 'Thâm hụt được tài trợ bằng dòng vốn ròng vào tương ứng (tài khoản tài chính thặng dư).', correct: true, explain: 'Đúng. Vì tổng các tài khoản bằng 0 và dự trữ không đổi, mặt đối ứng của thâm hụt vãng lai là dòng vốn vào ròng từ nước ngoài.' },
      { id: 'b', text: 'Số liệu chắc chắn sai vì thâm hụt vãng lai luôn làm dự trữ giảm.', explain: 'Sai. Dự trữ chỉ giảm khi dòng vốn vào không đủ bù thâm hụt.' },
      { id: 'c', text: 'Nước đó đang có thặng dư thương mại.', explain: 'Không suy ra được: thâm hụt vãng lai có thể đến từ thu nhập sơ cấp âm dù thương mại cân bằng; hơn nữa đề đã nêu là thâm hụt vãng lai.' },
    ],
  },
  sources: [
    { title: 'Balance of payments', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Balance_of_payments' },
    { title: 'Balance of Payments and International Investment Position Manual, Sixth Edition (BPM6)', publisher: 'IMF', url: 'https://www.imf.org/external/pubs/ft/bop/2007/bopman6.htm' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 161,
}
