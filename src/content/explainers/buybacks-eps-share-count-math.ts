import type { Explainer } from '../../../shared/explainer'

export const buybacksEpsShareCountMath: Explainer = {
  id: 'buybacks-eps-share-count-math',
  slug: 'buybacks-eps-share-count-math',
  question: 'Mua lại cổ phiếu làm EPS tăng như thế nào, và khi nào phép tính này đánh lừa?',
  title: 'Mua lại cổ phiếu và EPS: phép tính số cổ phiếu lưu hành',
  topic: 'markets-investing',
  tldr: 'Khi công ty mua lại và hủy cổ phiếu, **số cổ phiếu lưu hành giảm** nên lợi nhuận mỗi cổ phiếu (EPS) tăng ngay cả khi lợi nhuận tổng không đổi. Nhưng tiền dùng để mua lại có chi phí: lãi tiền gửi mất đi hoặc lãi vay phải trả. EPS chỉ tăng khi lợi suất lợi nhuận của cổ phiếu (EPS/giá) vượt chi phí tài chính sau thuế của khoản tiền đó.',
  keyPoints: [
    'Theo Wikipedia ("Share repurchase", đọc 15/10/2026): công ty mua lại cổ phiếu của chính mình rồi hủy hoặc giữ làm cổ phiếu quỹ; giảm số cổ phiếu lưu hành làm EPS tăng dù tổng lợi nhuận không đổi. Đây là một cách hoàn vốn cho cổ đông bên cạnh cổ tức.',
    'Theo ghi chú ôn thi CFA của AnalystPrep: nếu mua lại bằng tiền mặt nhàn rỗi, EPS thường tăng; nếu bằng vay thì EPS tăng khi **lợi suất lợi nhuận (EPS/giá) lớn hơn chi phí nợ sau thuế**, bằng nhau thì EPS không đổi, nhỏ hơn thì EPS giảm. Công thức này chỉ là phép tính kế toán, chưa nói đến giá trị thực.',
    'Ví dụ giả định trong bài: công ty lãi sau thuế 600 tỷ đồng, 100 triệu cổ phiếu, EPS 6.000 đồng, giá 60.000 đồng (P/E 10, lợi suất lợi nhuận 10%). Mua lại 5 triệu cổ phiếu hết 300 tỷ: nếu bỏ qua chi phí tiền, EPS = 600/95 ≈ 6.316 đồng (+5,3%).',
    'Cùng ví dụ trên, nếu 300 tỷ đó vốn sinh lãi tiền gửi 4%/năm trước thuế (thuế 20% giả định) thì lãi sau thuế mất 9,6 tỷ; EPS ≈ (600 − 9,6)/95 ≈ 6.215 đồng (+3,6%). Nếu vay với chi phí sau thuế 6% thì mất 18 tỷ; EPS ≈ 6.126 đồng (+2,1%).',
    'Đảo ngược khi cổ phiếu đắt: cũng với 300 tỷ vay chi phí sau thuế 6%, nhưng giá 240.000 đồng (P/E 40, lợi suất lợi nhuận 2,5%), chỉ mua được 1,25 triệu cổ phiếu (1,25%); EPS ≈ (600 − 18)/98,75 ≈ 5.894 đồng, **thấp hơn** 6.000. Mua lại bằng vay lúc cổ phiếu đắt làm EPS giảm.',
  ],
  causalChain: [
    { from: 'Công ty dùng tiền mua lại cổ phiếu và hủy', to: 'Số cổ phiếu lưu hành giảm', mechanism: 'Mẫu số của EPS nhỏ đi; mỗi cổ phiếu còn lại chiếm tỷ lệ lớn hơn trong lợi nhuận.' },
    { from: 'Tiền dùng để mua lại có chi phí (lãi mất đi hoặc lãi vay)', to: 'Lợi nhuận tổng giảm', mechanism: 'Tiền mặt không còn sinh lãi hoặc lãi vay làm giảm tử số EPS sau thuế.' },
    { from: 'Lợi suất lợi nhuận của cổ phiếu cao hơn chi phí tiền sau thuế', to: 'EPS tăng ròng', mechanism: 'Mỗi đồng chi mua lại "mua" được nhiều lợi nhuận hơn lãi mất đi; ngược lại EPS giảm khi cổ phiếu quá đắt.' },
    { from: 'EPS tăng do giảm số cổ phiếu', to: 'Cảm giác tăng trưởng lợi nhuận', mechanism: 'EPS tăng không phản ánh kinh doanh tốt hơn; chỉ tiêu thưởng dựa trên EPS có thể bị tác động bởi mua lại cổ phiếu.' },
    { from: 'Dùng tiền mua lại thay vì đầu tư hoặc giảm nợ', to: 'Chi phí cơ hội', mechanism: 'Nếu tiền có thể đầu tư với tỷ suất sinh lời cao hơn lợi suất lợi nhuận, mua lại là lựa chọn kém hơn.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cổ phiếu niêm yết', effect: 'Khi công ty công bố mua cổ phiếu quỹ, nên hỏi nguồn tiền, giá mua và số cổ phiếu thực mua, không chỉ nhìn kế hoạch; EPS dự phóng có thể tăng nhờ phép tính.', direction: 'mixed' },
    { group: 'Ban lãnh đạo có chỉ tiêu thưởng theo EPS', effect: 'Có động cơ tăng EPS bằng mua lại; cần xem cơ chế thưởng và quản trị.', direction: 'down' },
    { group: 'Doanh nghiệp dư tiền mặt', effect: 'Mua lại có thể hoàn vốn cho cổ đông khi thiếu cơ hội đầu tư tốt, nhưng cần so với cổ tức và giữ vốn lưu động.', direction: 'mixed' },
    { group: 'Người cho vay doanh nghiệp', effect: 'Mua lại bằng vay làm đòn bẩy tăng; chỉ số trả lãi và an toàn vốn cần xem lại.', direction: 'down' },
  ],
  indicators: [
    { name: 'Số cổ phiếu lưu hành bình quân và số cổ phiếu quỹ', why: 'Xác nhận thực sự có giảm số cổ phiếu hay chỉ là kế hoạch.', where: 'Báo cáo tài chính, thuyết minh vốn chủ sở hữu và công bố thông tin của doanh nghiệp' },
    { name: 'Lợi suất lợi nhuận (EPS / giá) so với chi phí nợ sau thuế', why: 'Quyết định mua lại bằng vay có làm EPS tăng hay không.', where: 'Tự tính từ EPS, giá cổ phiếu và lãi suất vay' },
    { name: 'Giá mua lại so với giá trị nội tại ước tính', why: 'Mua cổ phiếu đắt làm hủy giá trị cổ đông còn lại dù EPS có thể tăng.', where: 'Phân tích định giá của bạn hoặc của công ty chứng khoán' },
    { name: 'Dòng tiền tự do và nợ ròng sau mua lại', why: 'Cho biết mua lại có làm yếu bảng cân đối kế toán không.', where: 'Báo cáo lưu chuyển tiền tệ và bảng cân đối kế toán' },
  ],
  counterpoints: [
    'Ví dụ trong bài là giả định minh họa phép tính; thuế, lãi suất và giá thực tế khác nhau theo từng công ty và thời điểm.',
    'Mua lại cổ phiếu cũng có thể tạo giá trị thật nếu giá đang thấp hơn giá trị nội tại hoặc không còn cơ hội đầu tư tốt; EPS tăng không tự động là xấu.',
    'Quy định về mua lại cổ phiếu thay đổi theo nước và theo từng thời kỳ (ví dụ giới hạn khối lượng mua trong ngày ở Mỹ); quy định của Việt Nam không được nêu ở đây nên cần tra văn bản hiện hành trước khi áp dụng.',
  ],
  glossary: [
    { term: 'EPS', definition: 'Lợi nhuận sau thuế thuộc cổ đông chia cho số cổ phiếu lưu hành bình quân.' },
    { term: 'Cổ phiếu quỹ', definition: 'Cổ phiếu công ty đã phát hành rồi mua lại và giữ, không còn quyền biểu quyết hay nhận cổ tức.' },
    { term: 'Lợi suất lợi nhuận', definition: 'EPS chia cho giá cổ phiếu, nghịch đảo của P/E.' },
    { term: 'Chi phí nợ sau thuế', definition: 'Lãi vay nhân (1 − thuế suất).' },
    { term: 'Chi phí cơ hội', definition: 'Lợi ích bị bỏ lỡ khi dùng tiền vào mục đích này thay vì mục đích tốt nhất khác.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'buybacks-eps-share-count-math-q',
    question: 'Một công ty vay tiền với chi phí sau thuế 6% để mua lại cổ phiếu có P/E 40 (lợi suất lợi nhuận 2,5%). Điều gì xảy ra với EPS, giữ nguyên các yếu tố khác?',
    options: [
      { id: 'a', text: 'EPS chắc chắn tăng vì số cổ phiếu giảm.', explain: 'Số cổ phiếu giảm nhưng lãi vay làm tử số giảm; kết quả ròng phụ thuộc hai lực này.' },
      { id: 'b', text: 'EPS giảm vì lợi suất lợi nhuận 2,5% thấp hơn chi phí nợ sau thuế 6%.', correct: true, explain: 'Đúng. Lợi nhuận mất đi do lãi vay lớn hơn phần lợi nhuận "mua" được, nên EPS giảm.' },
      { id: 'c', text: 'EPS không đổi vì mua lại chỉ là chuyển tiền giữa công ty và cổ đông.', explain: 'EPS đổi cả về tử số và mẫu số; chỉ không đổi khi lợi suất lợi nhuận bằng chi phí nợ sau thuế.' },
    ],
  },
  sources: [
    { title: 'Effects of a Share Repurchase on EPS', publisher: 'AnalystPrep (CFA Level 1 study notes)', url: 'https://analystprep.com/cfa-level-1-exam/corporate-finance/effects-share-repurchase-eps/' },
    { title: 'Share repurchase', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Share_repurchase' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 191,
}
