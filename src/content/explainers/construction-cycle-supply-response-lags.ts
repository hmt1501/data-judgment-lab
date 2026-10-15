import type { Explainer } from '../../../shared/explainer'

export const constructionCycleSupplyResponseLags: Explainer = {
  id: 'construction-cycle-supply-response-lags',
  slug: 'construction-cycle-supply-response-lags',
  question: 'Vì sao nguồn cung nhà phản ứng chậm khi giá nhà tăng?',
  title: 'Chu kỳ xây dựng: vì sao nguồn cung nhà đáp ứng giá rất chậm',
  topic: 'real-estate',
  tldr: 'Khi giá nhà tăng, nguồn cung mới không thể xuất hiện ngay: phải **tìm đất, xin phép, tài chính, thiết kế, xây dựng** – mất nhiều năm. Trong ngắn hạn cung gần như cố định (kéo giá tăng mạnh), trong dài hạn cung co giãn hơn. Độ trễ này, cộng với việc quy hoạch và quy định hạn chế xây thêm, giải thích vì sao giá có thể vọt lên trước, rồi nguồn cung ồ ạt đổ ra đúng lúc cầu đã yếu.',
  keyPoints: [
    'Theo Wikipedia (Real estate economics): nguồn cung ngắn hạn "rất ít co giãn theo giá" và dài hạn co giãn cao hơn nhiều; điều chỉnh bị chậm vì thời gian cần để tài trợ, thiết kế và xây dựng.',
    'Nhà ở là thị trường "lượng tồn kho – dòng chảy": theo cùng nguồn (trang không gắn số liệu này với một nước cụ thể; ví dụ của trang chủ yếu về Mỹ), khoảng 98% thị trường là nhà hiện hữu và khoảng 2% là nhà mới, nên xây thêm chỉ làm thay đổi tồn kho từ từ.',
    'Quy định sử dụng đất như phân vùng làm giảm khả năng thay thế đất cho nhiều mục đích, hạn chế phản ứng của cung.',
    'NBER Working Paper 14193 (Glaeser, Gyourko, Saiz): mô hình dự đoán nơi cung co giãn hơn có ít và ngắn bong bóng hơn; các đợt tăng giá thập niên 1980 ở Mỹ gần như chỉ xảy ra ở thành phố cung kém co giãn. Nghịch lý: ở nơi cung co giãn, hệ quả phúc lợi của bong bóng có thể lớn hơn vì xây thừa nhiều hơn.',
    'Ví dụ giả định về độ trễ: dự án cần 1 năm hoàn thiện pháp lý và đất, 1 năm thiết kế/xin phép/huy động vốn, 2–3 năm xây; nghĩa là tín hiệu giá hôm nay chỉ thành căn nhà sau 4–5 năm, khi điều kiện thị trường có thể đã đổi.',
  ],
  causalChain: [
    { from: 'Cầu nhà tăng (thu nhập, dân cư, lãi suất thấp)', to: 'Giá nhà hiện hữu tăng', mechanism: 'Cung ngắn hạn gần như cố định nên giá điều chỉnh để cân bằng cầu.' },
    { from: 'Giá nhà cao hơn chi phí xây dựng và đất', to: 'Chủ đầu tư bắt đầu dự án mới', mechanism: 'Chênh lệch giữa giá bán và chi phí xây dựng làm việc xây mới có lãi, nên động lực phát triển tăng.' },
    { from: 'Thủ tục, tài chính, thiết kế, xây dựng', to: 'Nhà mới ra thị trường sau nhiều năm', mechanism: 'Độ trễ pháp lý và thi công khiến cung đáp ứng giá của vài năm trước, không phải giá hiện tại.' },
    { from: 'Nhiều dự án cùng khởi động theo tín hiệu giá cao', to: 'Nguồn cung đồng loạt xuất hiện, có thể thừa', mechanism: 'Mọi chủ đầu tư thấy cùng tín hiệu và cùng bắt đầu; khi các dự án hoàn thành cùng lúc, giá chịu áp lực nếu cầu đã yếu đi.' },
  ],
  vietnamImpact: [
    { group: 'Người mua nhà ở thực', effect: 'Giá có thể tăng nhanh khi nguồn cung mới chậm vì pháp lý; không nên kỳ vọng nguồn cung tự điều chỉnh trong ngắn hạn.', direction: 'down' },
    { group: 'Chủ đầu tư', effect: 'Quyết định khởi công dựa trên giá hôm nay nhưng nhà bán ra vài năm sau; rủi ro lệch pha cung cầu và dòng tiền khi giá đổi chiều.', direction: 'mixed' },
    { group: 'Nhà đầu tư mua đi bán lại', effect: 'Giai đoạn cung thiếu có thể đẩy giá mạnh, nhưng khi cung đồng loạt xuất hiện, thanh khoản và giá có thể giảm.', direction: 'mixed' },
    { group: 'Cơ quan quản lý', effect: 'Cải thiện tốc độ phê duyệt dự án và quy hoạch giúp cung đáp ứng nhanh hơn với tín hiệu giá.', direction: 'up' },
  ],
  indicators: [
    { name: 'Giấy phép xây dựng và số dự án được phê duyệt', why: 'Đi trước nhà hoàn thành, cho biết nguồn cung sắp tới.', where: 'Bộ Xây dựng, Sở Xây dựng các thành phố' },
    { name: 'Lượng nhà khởi công và hoàn thành', why: 'So sánh đường ống cung với tốc độ hấp thụ.', where: 'Cục Thống kê, báo cáo thị trường của các đơn vị tư vấn' },
    { name: 'Giá bán so với chi phí xây dựng', why: 'Lợi nhuận xây mới quyết định động lực khởi công.', where: 'Cục Thống kê (chỉ số giá xây dựng), báo cáo thị trường' },
    { name: 'Tỷ lệ hấp thụ và tồn kho', why: 'Cho biết cầu có hấp thụ kịp lượng nhà mới không.', where: 'Báo cáo thị trường bất động sản' },
  ],
  counterpoints: [
    'Con số 98%/2% trong nguồn không rõ nước nào (ví dụ trong trang chủ yếu về Mỹ); tỷ lệ nhà mới ở các thành phố đang phát triển nhanh của Việt Nam có thể cao hơn.',
    'Cung có thể hạn chế bởi quy hoạch, pháp lý và đất hơn là vì chu kỳ xây; giải pháp phải nhắm vào điểm nghẽn thực sự.',
    'Nguồn cung nhiều không tự động làm giá giảm nếu loại nhà không đúng phân khúc mà người mua cần.',
  ],
  glossary: [
    { term: 'Độ co giãn của cung', definition: 'Mức nguồn cung thay đổi khi giá thay đổi 1%.' },
    { term: 'Độ trễ xây dựng', definition: 'Khoảng thời gian từ quyết định khởi công đến lúc nhà sẵn sàng bán hoặc ở.' },
    { term: 'Tồn kho – dòng chảy', definition: 'Mô hình xem nhà hiện hữu là tồn kho, nhà mới là dòng bổ sung.' },
    { term: 'Phân vùng sử dụng đất (zoning)', definition: 'Quy định hạn chế loại công trình và mật độ trên từng khu đất.' },
    { term: 'Hấp thụ', definition: 'Tốc độ thị trường tiêu thụ nhà mới.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'construction-cycle-supply-response-lags-q',
    question: 'Giá nhà một thành phố tăng 30% trong 2 năm. Vì sao nguồn cung mới thường chưa kịp làm giá hạ nhiệt trong thời gian đó?',
    options: [
      { id: 'a', text: 'Vì nhà mới cần nhiều năm để xin phép, tài trợ và xây, trong khi nhà hiện hữu chiếm phần lớn thị trường.', correct: true, explain: 'Đúng. Độ trễ và quy mô tồn kho lớn khiến cung ngắn hạn kém co giãn.' },
      { id: 'b', text: 'Vì chủ đầu tư không quan tâm tới lợi nhuận.', explain: 'Sai. Giá cao làm xây mới có lợi hơn; vấn đề là thời gian và thủ tục.' },
      { id: 'c', text: 'Vì cung luôn tự điều chỉnh ngay lập tức theo giá.', explain: 'Sai. Nguồn cho thấy ngắn hạn cung rất ít co giãn.' },
    ],
  },
  sources: [
    { title: 'Real estate economics', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Real_estate_economics' },
    { title: 'Housing Supply and Housing Bubbles (NBER Working Paper 14193)', publisher: 'National Bureau of Economic Research', url: 'https://www.nber.org/papers/w14193' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 176,
}
