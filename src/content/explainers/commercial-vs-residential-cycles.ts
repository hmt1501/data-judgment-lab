import type { Explainer } from '../../../shared/explainer'

export const commercialVsResidentialCycles: Explainer = {
  id: 'commercial-vs-residential-cycles',
  slug: 'commercial-vs-residential-cycles',
  question: 'Bất động sản thương mại và nhà ở khác chu kỳ ra sao?',
  title: 'Nhà ở chạy theo tín dụng và thu nhập hộ gia đình; BĐS thương mại chạy theo kinh tế, lãi suất và dòng tiền thuê',
  topic: 'real-estate',
  tldr: 'Nhà ở được mua để ở lẫn để đầu tư, giá chịu ảnh hưởng của thu nhập, dân số và tín dụng hộ gia đình. BĐS thương mại (văn phòng, bán lẻ, kho xưởng) là **tài sản tạo dòng tiền thuê**, được định giá theo thu nhập thuê chia cho lợi suất đòi hỏi, nên nhạy với chu kỳ kinh doanh và lãi suất. Theo ESM (2023), giá BĐS thương mại thường biến động mạnh và điều chỉnh nhanh hơn giá nhà ở.',
  keyPoints: [
    '**Nhà ở:** cầu đến từ hộ gia đình (ở thực + đầu cơ), vay thế chấp là kênh chính; chu kỳ gắn với thu nhập, dân số, đô thị hóa và điều kiện tín dụng. Giá nhà thường "dính" (ít khi giảm danh nghĩa mạnh) và thị trường điều chỉnh bằng thanh khoản trước khi bằng giá.',
    '**Thương mại:** giá ≈ thu nhập thuê ròng / lợi suất đòi hỏi (cap rate). Lãi suất tăng hay thuê giảm đều kéo giá xuống; theo ESM, giá BĐS thương mại thường biến động mạnh và điều chỉnh nhanh hơn giá nhà ở, nên tác động lên tổ chức tài chính đến sớm hơn.',
    'Cầu cấu trúc có thể đổi khác nhau theo phân khúc: ESM nêu thương mại điện tử và làm việc từ xa làm giảm nhu cầu mặt bằng bán lẻ, văn phòng; các phân khúc khác (như kho vận) chịu động lực khác, vì vậy "BĐS thương mại" không phải một khối đồng nhất.',
    'Người sở hữu BĐS thương mại thường **vay nợ nhiều**; khi lãi suất tăng, lợi suất thuê không đủ bù chi phí vay, tạo áp lực bán tài sản hoặc tái cấu trúc nợ.',
    'Cả hai đều có **độ trễ cung**: xây mới mất nhiều năm, nên chu kỳ có thể chạy lệch pha (cầu giảm đúng lúc cung mới còn đổ ra), tạo ra "tồn kho" và giá điều chỉnh sau.',
  ],
  causalChain: [
    { from: 'Lãi suất và lợi suất đòi hỏi thay đổi', to: 'Giá BĐS thương mại điều chỉnh nhanh', mechanism: 'Định giá bằng chiết khấu dòng thuê: lợi suất đòi hỏi tăng 1 điểm phần trăm làm giá trị giảm đáng kể ngay cả khi tiền thuê chưa đổi.' },
    { from: 'Nhu cầu thuê thay đổi theo kinh tế và xu hướng cấu trúc', to: 'Tỷ lệ lấp đầy và giá thuê thay đổi', mechanism: 'Doanh nghiệp thu hẹp văn phòng, người bán lẻ chuyển lên mạng làm tỷ lệ trống tăng, giá thuê giảm.' },
    { from: 'Giá tài sản và dòng thuê giảm', to: 'Áp lực lên người vay và bên cho vay/quỹ', mechanism: 'Tỷ lệ vay trên giá trị tài sản vượt ngưỡng, hợp đồng vay bị siết hoặc không tái tài trợ được; quỹ mở đầu tư BĐS có thể gặp rút vốn và khó bán tài sản nhanh.' },
    { from: 'Tín dụng hộ gia đình thắt chặt', to: 'Chu kỳ nhà ở đảo chiều qua thanh khoản', mechanism: 'Cầu mua giảm khi vay khó hơn; người bán chưa chịu giảm giá nên giao dịch co lại trước, giá giảm chậm sau.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư BĐS thương mại (văn phòng, bán lẻ, kho)', effect: 'Chu kỳ nhạy với kinh tế, FDI và lãi suất; phân khúc kho xưởng gắn với xuất khẩu/sản xuất nên đi theo chu kỳ thương mại khác với căn hộ.', direction: 'mixed' },
    { group: 'Người mua nhà ở thực', effect: 'Chịu ảnh hưởng chính của lãi suất vay mua nhà, thu nhập và nguồn cung; ít nhạy với chu kỳ thuê thương mại.', direction: 'mixed' },
    { group: 'Ngân hàng', effect: 'Danh mục cho vay gồm cả vay mua nhà (tín dụng hộ gia đình) và cho vay chủ đầu tư/dự án thương mại; cần phân biệt đặc điểm rủi ro của từng loại.', direction: 'mixed' },
    { group: 'Doanh nghiệp thuê mặt bằng', effect: 'Khi cung mặt bằng nhiều hơn cầu, người thuê có vị thế đàm phán tốt hơn về giá và ưu đãi.', direction: 'up' },
    { group: 'Quỹ/nhà đầu tư tổ chức', effect: 'Cần so lợi suất cho thuê với lãi suất phi rủi ro; chênh lệch hẹp là tín hiệu định giá đã căng.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ lệ lấp đầy và giá thuê văn phòng, bán lẻ, kho', why: 'Biến số cốt lõi cho dòng tiền của BĐS thương mại.', where: 'Báo cáo quý của CBRE, Savills, JLL, Cushman & Wakefield Việt Nam' },
    { name: 'Lợi suất cho thuê (cap rate) so với lãi suất trái phiếu chính phủ', why: 'Chênh lệch cho biết tài sản đang được định giá cao hay thấp so với lãi suất phi rủi ro.', where: 'Báo cáo tư vấn BĐS; lãi suất trái phiếu chính phủ tại HNX' },
    { name: 'Chỉ số giá nhà ở và số giao dịch', why: 'Đối chiếu với thương mại để thấy hai chu kỳ có lệch pha không.', where: 'Bộ Xây dựng, BIS Data Portal cho so sánh quốc tế' },
    { name: 'Tín dụng bất động sản và lãi suất cho vay', why: 'Chi phí vốn là biến chung tác động cả hai thị trường.', where: 'Ngân hàng Nhà nước (sbv.gov.vn)' },
  ],
  counterpoints: [
    'Ở các thị trường mới nổi như Việt Nam, nhà ở và thương mại có thể cùng chịu một cú sốc chung (tín dụng, pháp lý, niềm tin), nên khác biệt chu kỳ không rõ như ở thị trường trưởng thành.',
    'Dữ liệu BĐS thương mại thường thưa và không công khai; kết luận từ vài báo cáo tư vấn có thể thiên lệch về các tòa nhà hạng A.',
    'Các nhận định trong bài chủ yếu dựa trên nghiên cứu cho khu vực đồng euro; cần thận trọng khi áp dụng nguyên văn cho Việt Nam.',
  ],
  glossary: [
    { term: 'Cap rate (lợi suất cho thuê)', definition: 'Thu nhập thuê ròng hằng năm chia cho giá trị tài sản.' },
    { term: 'Tỷ lệ lấp đầy', definition: 'Phần diện tích được thuê trên tổng diện tích khả dụng.' },
    { term: 'LTV', definition: 'Tỷ lệ dư nợ trên giá trị tài sản bảo đảm.' },
    { term: 'Quỹ mở BĐS', definition: 'Quỹ cho phép nhà đầu tư rút vốn thường xuyên, dù tài sản nền khó bán nhanh, nên có rủi ro lệch pha thanh khoản.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'commercial-vs-residential-cycles-q',
    question: 'Lãi suất tăng mạnh trong khi tiền thuê văn phòng chưa đổi. Điều gì hợp lý nhất với giá trị tòa văn phòng cho thuê?',
    options: [
      { id: 'a', text: 'Giá trị giữ nguyên vì dòng thuê không đổi.', explain: 'Lợi suất đòi hỏi tăng theo lãi suất làm giá trị hiện tại của cùng một dòng thuê giảm.' },
      { id: 'b', text: 'Giá trị có xu hướng giảm vì lợi suất đòi hỏi tăng và chi phí vay của chủ sở hữu tăng.', correct: true, explain: 'Đúng. Giá ≈ thu nhập thuê / lợi suất đòi hỏi; mẫu số tăng thì giá giảm, chưa kể áp lực từ nợ vay.' },
      { id: 'c', text: 'Giá trị tăng vì lãi suất cao thường đi cùng kinh tế tốt.', explain: 'Có thể đúng ở một số giai đoạn, nhưng với cùng dòng thuê, lãi suất cao làm giảm giá trị chiết khấu.' },
    ],
  },
  sources: [
    { title: 'Commercial real estate and financial stability: this time, it\'s different (10/08/2023)', publisher: 'European Stability Mechanism', url: 'https://www.esm.europa.eu/blog/commercial-real-estate-and-financial-stability-time-its-different' },
    { title: 'Property cycle', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Property_cycle' },
    { title: 'Commercial property', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Commercial_property' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 63,
}
