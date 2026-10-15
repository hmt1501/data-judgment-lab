import type { Explainer } from '../../../shared/explainer'

export const dividendsVsBuybacks: Explainer = {
  id: 'dividends-vs-buybacks',
  slug: 'dividends-vs-buybacks',
  question: 'Cổ tức hay mua lại cổ phiếu: khác nhau thế nào với cổ đông?',
  title: 'Cả hai đều trả tiền cho cổ đông; cổ tức đưa tiền cho tất cả, mua lại cổ phiếu đưa tiền cho người bán và tăng tỷ lệ sở hữu của người ở lại',
  topic: 'markets-investing',
  tldr: 'Doanh nghiệp có tiền thừa có thể **chia cổ tức** (trả tiền cho mọi cổ đông) hoặc **mua lại cổ phiếu** (trả tiền cho người bán, giảm số cổ phiếu lưu hành). Trong điều kiện lý tưởng (không thuế, giá đúng), giá trị cho cổ đông như nhau; thực tế khác nhau ở thuế, tín hiệu và tính linh hoạt. Điều quan trọng là tiền đó có thật từ dòng tiền hay vay mượn.',
  keyPoints: [
    'Ví dụ giả định: công ty trị giá 1.000 tỷ, có 100 triệu cổ phiếu (10.000 đồng/cổ phiếu), dùng 100 tỷ để chia. Cổ tức: mỗi cổ phiếu nhận 1.000 đồng, giá giảm còn 9.000 đồng. Mua lại: mua 10 triệu cổ phiếu giá 10.000, còn 90 triệu cổ phiếu, giá trị 900 tỷ chia 90 triệu vẫn 10.000 đồng/cổ phiếu.',
    'Cổ tức là dòng tiền nhận được ngay và tạo thu nhập đều; mua lại cổ phiếu tăng tỷ lệ sở hữu và lợi nhuận mỗi cổ phiếu (EPS) cho người giữ, nhưng giá trị chỉ hiện thực khi bán.',
    'Cổ tức thường được xem là cam kết dai dẳng (cắt cổ tức gây tiêu cực), còn mua lại cổ phiếu linh hoạt hơn nên doanh nghiệp dùng khi muốn giữ khả năng điều chỉnh.',
    'Chất lượng mua lại phụ thuộc giá mua: mua khi giá thấp hơn giá trị nội tại tạo giá trị cho người ở lại; mua khi giá quá cao là chuyển giá trị từ người ở lại sang người bán.',
    'Cổ phiếu thưởng và chia tách cổ phiếu khác bản chất: không đưa tiền ra khỏi công ty mà chỉ chia lại số cổ phiếu; đừng nhầm với cổ tức bằng tiền.',
  ],
  causalChain: [
    { from: 'Doanh nghiệp tạo dòng tiền tự do dư so với nhu cầu đầu tư', to: 'Quyết định trả lại tiền cho cổ đông', mechanism: 'Nếu không có dự án sinh lời cao hơn chi phí vốn, giữ tiền nhàn rỗi làm giảm lợi nhuận trên vốn; trả lại là lựa chọn hợp lý.' },
    { from: 'Chọn chia cổ tức tiền mặt', to: 'Mỗi cổ đông nhận tiền, giá cổ phiếu điều chỉnh giảm tương ứng', mechanism: 'Giá trị công ty giảm đúng số tiền chia; cổ đông nhận tiền thay vì giá cổ phiếu cao hơn.' },
    { from: 'Chọn mua lại cổ phiếu', to: 'Số cổ phiếu lưu hành giảm, EPS và tỷ lệ sở hữu tăng', mechanism: 'Cùng lợi nhuận chia cho ít cổ phiếu hơn; giá trị thu về cho cổ đông chọn bán, người giữ có phần lớn hơn.' },
    { from: 'Khác biệt thuế và tín hiệu', to: 'Cổ đông nhận lợi ích khác nhau', mechanism: 'Mức thuế đánh trên cổ tức khác thuế trên lãi vốn tùy từng nước và quy định; cắt giảm cổ tức hay mua lại ở giá cao đều phát đi tín hiệu về triển vọng.' },
    { from: 'Trả cổ tức hoặc mua lại bằng tiền vay', to: 'Đòn bẩy tài chính của doanh nghiệp tăng', mechanism: 'Trả cho cổ đông bằng nợ làm giảm đệm an toàn khi kinh doanh xấu đi.' },
  ],
  vietnamImpact: [
    { group: 'Cổ đông ưa thu nhập đều', effect: 'Cổ tức tiền mặt cho dòng tiền nhận được; nhưng phải kiểm tra tỷ lệ chi trả so với lợi nhuận và dòng tiền.', direction: 'up' },
    { group: 'Cổ đông dài hạn', effect: 'Mua lại cổ phiếu ở giá hợp lý làm tăng tỷ lệ sở hữu; ở giá cao thì chuyển giá trị sang người bán.', direction: 'mixed' },
    { group: 'Doanh nghiệp niêm yết', effect: 'Cần cân đối chia cổ tức, đầu tư mở rộng và giữ tiền cho rủi ro; cổ tức bằng cổ phiếu giữ tiền trong công ty.', direction: 'mixed' },
    { group: 'Nhà đầu tư nhìn cổ tức là tín hiệu', effect: 'Cổ tức cao không đồng nghĩa doanh nghiệp tốt; cần xem lợi nhuận bền vững và nợ.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ lệ chi trả cổ tức (dividend payout ratio) và tỷ suất cổ tức', why: 'Đánh giá mức độ bền vững của việc chia cổ tức.', where: 'Báo cáo tài chính và công bố thông tin của doanh nghiệp (Sở Giao dịch)' },
    { name: 'Dòng tiền tự do so với số tiền chia và mua lại', why: 'Xác định tiền chia có từ dòng tiền hoạt động hay từ vay nợ.', where: 'Báo cáo lưu chuyển tiền tệ' },
    { name: 'Số cổ phiếu lưu hành và EPS qua các năm', why: 'Kiểm tra mua lại có thật sự làm giảm số cổ phiếu hay chỉ bù cổ phiếu thưởng cho nhân viên.', where: 'Báo cáo tài chính hợp nhất' },
    { name: 'Hệ số nợ trên vốn chủ sở hữu', why: 'Cảnh báo khi chia bằng đòn bẩy.', where: 'Báo cáo tài chính' },
  ],
  counterpoints: [
    'Lý thuyết cho rằng cổ tức và mua lại là tương đương chỉ khi không có thuế, thông tin đầy đủ và giá đúng; các giả định này hiếm khi thỏa mãn.',
    'Quy định và tập quán khác nhau theo thị trường; ở Việt Nam, việc mua lại cổ phiếu (cổ phiếu quỹ) và thuế liên quan có điều kiện riêng nên cần kiểm tra quy định hiện hành.',
    'Mua lại cổ phiếu đôi khi chỉ nhằm bù pha loãng do cổ phiếu thưởng nhân viên, nên số cổ phiếu lưu hành không giảm dù doanh nghiệp tốn tiền.',
  ],
  glossary: [
    { term: 'Cổ tức', definition: 'Phần lợi nhuận doanh nghiệp chia cho cổ đông, bằng tiền hoặc cổ phiếu.' },
    { term: 'Mua lại cổ phiếu (buyback)', definition: 'Việc công ty mua cổ phiếu của chính mình trên thị trường, làm giảm số cổ phiếu lưu hành.' },
    { term: 'EPS', definition: 'Lợi nhuận trên mỗi cổ phiếu, bằng lợi nhuận sau thuế chia số cổ phiếu lưu hành.' },
    { term: 'Dòng tiền tự do', definition: 'Dòng tiền hoạt động trừ chi đầu tư duy trì, phần có thể chia hoặc dùng cho mục đích khác.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'dividends-vs-buybacks-q',
    question: 'Công ty vay nợ để mua lại cổ phiếu nhằm làm đẹp EPS, trong khi dòng tiền kinh doanh yếu. Cách đánh giá hợp lý nhất?',
    options: [
      { id: 'a', text: 'EPS tăng nên chắc chắn tốt cho cổ đông.', explain: 'EPS tăng một phần do số cổ phiếu giảm; rủi ro nợ cao hơn có thể làm giá trị thực suy yếu.' },
      { id: 'b', text: 'Đây là tín hiệu cần thận trọng vì tiền trả cho cổ đông không đến từ dòng tiền, còn đòn bẩy tăng.', correct: true, explain: 'Đúng. Trả cổ đông bằng nợ làm giảm đệm an toàn; cần xem dòng tiền và nợ chứ không chỉ EPS.' },
      { id: 'c', text: 'Mua lại luôn tốt hơn cổ tức bất kể điều kiện.', explain: 'Hiệu quả phụ thuộc giá mua, nguồn tiền và thuế, không có quy tắc luôn đúng.' },
    ],
  },
  sources: [
    { title: 'Share repurchase', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Share_repurchase' },
    { title: 'Dividend', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Dividend' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 23,
}
