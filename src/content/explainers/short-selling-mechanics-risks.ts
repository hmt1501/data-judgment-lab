import type { Explainer } from '../../../shared/explainer'

export const shortSellingMechanicsRisks: Explainer = {
  id: 'short-selling-mechanics-risks',
  slug: 'short-selling-mechanics-risks',
  question: 'Bán khống hoạt động thế nào, rủi ro gì và có vai trò gì?',
  title: 'Vay cổ phiếu để bán, mua lại sau: lãi giới hạn, lỗ không giới hạn, và vai trò khám phá giá',
  topic: 'markets-investing',
  tldr: '**Bán khống** là vay cổ phiếu (hoặc tài sản) để bán ngay, hy vọng giá giảm để mua lại rẻ hơn rồi trả, kiếm chênh lệch. Lãi tối đa bị chặn (giá chỉ giảm tới 0) còn lỗ lý thuyết **không giới hạn** (giá có thể tăng mãi), kèm chi phí vay và rủi ro bị gọi ký quỹ. Bán khống góp phần khám phá giá và thanh khoản nhưng cũng bị lo ngại khi dùng để thao túng; ở Việt Nam, theo Diễn đàn Doanh nghiệp (19/11/2025), thị trường cổ phiếu cơ sở chưa cho phép bán khống, chỉ có trên phái sinh.',
  keyPoints: [
    'Cơ chế (ví dụ giả định): vay 100 cổ phiếu giá 100.000 đồng và bán, thu 10 triệu đồng; nếu giá giảm còn 70.000 đồng, mua lại hết 7 triệu đồng, trả 100 cổ phiếu, lãi 3 triệu đồng trừ phí vay. Nếu giá tăng lên 150.000 đồng, mua lại hết 15 triệu đồng, lỗ 5 triệu đồng, và không có trần nếu giá còn tăng.',
    'Chi phí và rủi ro: phí vay cổ phiếu, trả cổ tức cho người cho vay, yêu cầu ký quỹ; khi giá tăng, nhà đầu tư có thể bị gọi bổ sung ký quỹ hoặc buộc đóng vị thế.',
    '**Short squeeze**: khi giá tăng mạnh, nhiều người bán khống buộc phải mua lại cùng lúc, đẩy giá lên tiếp và khuếch đại thua lỗ.',
    'Vai trò: bán khống cho phép thông tin tiêu cực được phản ánh vào giá, cung cấp thanh khoản cho thị trường và công cụ phòng ngừa rủi ro; bị chỉ trích khi dùng để tấn công giá hoặc lan truyền tin xấu để thu lợi.',
    'Theo Diễn đàn Doanh nghiệp (19/11/2025): ở thị trường cổ phiếu cơ sở Việt Nam chưa cho phép bán khống, chỉ bán khống hợp pháp trên phái sinh như hợp đồng tương lai VN30; Ủy ban Chứng khoán Nhà nước đang nghiên cứu cho vay chứng khoán và bán khống có kiểm soát, dự kiến hoàn thành trong giai đoạn 2026–2028. Đây là kế hoạch nghiên cứu, chưa phải quy định có hiệu lực; thông tin tính đến 19/11/2025, cần kiểm tra quy định mới hơn.',
  ],
  causalChain: [
    { from: 'Nhà đầu tư dự báo giá cổ phiếu giảm', to: 'Vay cổ phiếu từ nhà môi giới và bán ngay', mechanism: 'Cổ phiếu được mượn từ tài khoản của người cho vay (kèm phí), bán ra thị trường lấy tiền, tạo áp lực bán ngắn hạn.' },
    { from: 'Giá thay đổi', to: 'Lãi hoặc lỗ khi mua lại để trả', mechanism: 'Giá giảm thì mua lại rẻ, lãi; giá tăng thì mua lại đắt, lỗ không giới hạn.' },
    { from: 'Giá tăng mạnh', to: 'Gọi ký quỹ, buộc đóng vị thế, short squeeze', mechanism: 'Nhà đầu tư phải mua lại để cắt lỗ; cầu mua dồn dập đẩy giá lên cao hơn nữa.' },
    { from: 'Bán khống có mặt trên thị trường', to: 'Giá phản ánh thông tin tiêu cực nhanh hơn, thanh khoản tăng', mechanism: 'Người có thông tin xấu về doanh nghiệp có cách hành động, giúp giá ít bị thổi phồng quá mức.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân', effect: 'Hiện chỉ phòng ngừa/đặt cược giảm giá qua phái sinh; bán khống cổ phiếu cơ sở chưa được phép nên các cách "bán nhờ" có nhiều rủi ro pháp lý và đối tác.', direction: 'mixed' },
    { group: 'Doanh nghiệp niêm yết', effect: 'Nếu cho phép bán khống có kiểm soát, giá có thể phản ánh thông tin tiêu cực nhanh hơn, nhưng doanh nghiệp lo ngại bị tấn công giá.', direction: 'mixed' },
    { group: 'Thị trường chứng khoán', effect: 'Có thể tăng thanh khoản và độ sâu, đồng thời cần giám sát chặt để hạn chế thao túng và đòn bẩy quá mức.', direction: 'mixed' },
    { group: 'Cơ quan quản lý', effect: 'Cần danh mục cổ phiếu đủ điều kiện (thanh khoản cao, vốn hóa lớn, free-float cao), hạn mức vay, thời hạn trả và giám sát bất thường.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Dư nợ vay cổ phiếu / tỷ lệ bán khống trên số cổ phiếu lưu hành (short interest)', why: 'Đo niềm tin giảm giá và nguy cơ short squeeze (thị trường có công bố).', where: 'Sở giao dịch ở thị trường cho phép bán khống; ở Việt Nam chưa có cho cổ phiếu cơ sở' },
    { name: 'Vị thế phái sinh (hợp đồng tương lai VN30), khối lượng mở', why: 'Cho thấy nhà đầu tư đặt cược/phòng ngừa giảm giá.', where: 'Sở Giao dịch Chứng khoán Hà Nội, Trung tâm Lưu ký Chứng khoán' },
    { name: 'Tỷ lệ ký quỹ và quy định giao dịch', why: 'Quyết định mức rủi ro khi bán khống.', where: 'Ủy ban Chứng khoán Nhà nước (ssc.gov.vn); Bộ Tài chính' },
    { name: 'Thanh khoản và free-float của cổ phiếu', why: 'Bán khống chỉ an toàn hơn với cổ phiếu thanh khoản cao.', where: 'Sở giao dịch, HOSE' },
  ],
  counterpoints: [
    'Một số nghiên cứu cho rằng bán khống cải thiện hiệu quả giá, số khác cho rằng trong khủng hoảng nó khuếch đại biến động; nhiều nước tạm cấm bán khống trong giai đoạn hoảng loạn nhưng bằng chứng về hiệu quả còn tranh luận.',
    'Bán khống có thể bị dùng cho thao túng (tung tin xấu để hạ giá), nên cần quy định tính minh bạch và giám sát; nếu thiếu, thị trường mới nổi chịu rủi ro lớn hơn.',
    'Không phải mọi vị thế bán khống đều là cược giảm giá: một số là phòng ngừa rủi ro (hedging) cho danh mục sở hữu.',
  ],
  glossary: [
    { term: 'Bán khống', definition: 'Bán chứng khoán đi vay, hy vọng mua lại ở mức giá thấp hơn để trả.' },
    { term: 'Short squeeze', definition: 'Giá tăng đột ngột buộc người bán khống mua lại, làm giá tăng thêm.' },
    { term: 'Gọi ký quỹ', definition: 'Yêu cầu bổ sung tài sản bảo đảm khi giá bất lợi.' },
    { term: 'Short interest', definition: 'Số cổ phiếu bị bán khống chưa được đóng vị thế.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'short-selling-mechanics-risks-q',
    question: 'Một nhà đầu tư bán khống cổ phiếu ở 100.000 đồng, kỳ vọng giảm còn 80.000. Rủi ro lớn nhất so với mua cổ phiếu thông thường là gì?',
    options: [
      { id: 'a', text: 'Lãi tối đa là 100.000 đồng mỗi cổ phiếu (giá về 0) nhưng lỗ lý thuyết không giới hạn nếu giá tăng.', correct: true, explain: 'Đúng. Giá không thể xuống dưới 0 nhưng không có trần trên, nên kết quả bất đối xứng bất lợi về lỗ; thêm chi phí vay và gọi ký quỹ.' },
      { id: 'b', text: 'Lỗ tối đa chỉ bằng số tiền bỏ ra như mua cổ phiếu thường.', explain: 'Ngược lại: mua thường lỗ tối đa bằng vốn bỏ ra, còn bán khống có thể lỗ nhiều hơn vốn ký quỹ.' },
      { id: 'c', text: 'Bán khống luôn bất hợp pháp ở mọi thị trường.', explain: 'Nhiều thị trường cho phép trong khuôn khổ quy định; ở Việt Nam hiện chỉ có trên phái sinh theo nguồn đã nêu.' },
    ],
  },
  sources: [
    { title: 'Triển khai nghiệp vụ bán khống và giao dịch T0 dự kiến vào 2026 (19/11/2025)', publisher: 'Diễn đàn Doanh nghiệp', url: 'https://diendandoanhnghiep.vn/trien-khai-nghiep-vu-ban-khong-va-thuc-hien-giao-dich-t0-du-kien-vao-2026-10165058.html' },
    { title: 'Short (finance)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Short_(finance)' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 53,
}
