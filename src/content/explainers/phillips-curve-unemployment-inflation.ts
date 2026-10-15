import type { Explainer } from '../../../shared/explainer'

export const phillipsCurveUnemploymentInflation: Explainer = {
  id: 'phillips-curve-unemployment-inflation',
  slug: 'phillips-curve-unemployment-inflation',
  question: 'Đường Phillips: thất nghiệp thấp có làm lạm phát cao không?',
  title: 'Đánh đổi chỉ đúng trong ngắn hạn và phụ thuộc kỳ vọng lạm phát',
  topic: 'macro',
  tldr: '**Đường Phillips** mô tả mối quan hệ nghịch giữa thất nghiệp và tiền lương/lạm phát: thị trường lao động càng chặt thì doanh nghiệp càng phải tăng lương, chi phí và giá có xu hướng tăng. Mối quan hệ này **không cố định**: nó dịch chuyển khi kỳ vọng lạm phát thay đổi và có thể trở nên phẳng khi kỳ vọng được neo vững, nên không thể dùng nó như một "thực đơn" để chọn lạm phát đổi lấy việc làm.',
  keyPoints: [
    'Bản gốc (A. W. Phillips, 1958) nghiên cứu số liệu của Anh và thấy thất nghiệp thấp đi kèm tốc độ tăng lương danh nghĩa cao; sau đó các nhà kinh tế nối nó với lạm phát giá (theo mô tả trên Wikipedia).',
    'Thập niên 1970 xuất hiện **đình lạm** (lạm phát cao cùng thất nghiệp cao), khiến bản gốc thất bại; Friedman và Phelps lập luận sự đánh đổi chỉ tồn tại ngắn hạn vì người lao động và doanh nghiệp sớm đưa **lạm phát kỳ vọng** vào mức lương và giá.',
    '**NAIRU / tỷ lệ thất nghiệp tự nhiên** là mức thất nghiệp mà lạm phát không tăng tốc; kéo thất nghiệp xuống dưới mức đó trong thời gian dài thì lạm phát tăng dần chứ không chỉ ở một mức cao hơn cố định.',
    'Trong những năm 2010, độ dốc của đường Phillips tại nhiều nước có vẻ phẳng đi. Một working paper của Fed San Francisco (Jorgensen và Lansing) cho rằng độ dốc quan sát được phụ thuộc mức neo của kỳ vọng lạm phát: neo kém làm các hệ số ước lượng bị lệch so với độ dốc cấu trúc, neo tốt hơn thì giảm độ lệch này.',
    'Với Việt Nam, đường Phillips chỉ là khung tham khảo: giá nhiều mặt hàng do nhập khẩu, giá năng lượng và điều hành giá chi phối, còn thị trường lao động có tỷ trọng phi chính thức lớn (theo thông cáo của Cục Thống kê ngày 3/7/2026, lao động phi chính thức chiếm trên 3/5 tổng số lao động có việc làm) nên thất nghiệp công bố ít phản ánh độ "chặt" thật.',
  ],
  causalChain: [
    { from: 'Thất nghiệp xuống thấp, tuyển dụng khó', to: 'Lương danh nghĩa tăng nhanh hơn', mechanism: 'Doanh nghiệp phải trả cao hơn để giữ và thu hút lao động khan hiếm; người lao động có vị thế thương lượng tốt hơn.' },
    { from: 'Lương danh nghĩa tăng nhanh hơn năng suất', to: 'Chi phí đơn vị và giá bán tăng', mechanism: 'Nếu tiền lương tăng vượt năng suất, chi phí trên mỗi đơn vị sản phẩm tăng và doanh nghiệp chuyển một phần sang giá, nhất là trong ngành dịch vụ dùng nhiều lao động.' },
    { from: 'Lạm phát cao hơn kéo dài', to: 'Kỳ vọng lạm phát tăng', mechanism: 'Người lao động đòi lương cao hơn để bù giá, doanh nghiệp đặt giá cao hơn trước; đường Phillips ngắn hạn dịch lên và cùng mức thất nghiệp nay đi kèm lạm phát cao hơn.' },
    { from: 'Kỳ vọng lạm phát tăng', to: 'Ngân hàng trung ương thắt chặt tiền tệ', mechanism: 'Để neo lại kỳ vọng, ngân hàng trung ương nâng lãi suất, làm chậm tổng cầu và đưa thất nghiệp về gần mức tự nhiên, nhưng có thể phải chấp nhận tăng trưởng yếu một thời gian.' },
  ],
  vietnamImpact: [
    { group: 'Người lao động', effect: 'Khi cầu lao động mạnh ở một số ngành (chế biến chế tạo, công nghệ), lương tăng nhanh hơn; nhưng nếu giá tăng nhanh hơn lương thì thu nhập thực không cải thiện.', direction: 'mixed' },
    { group: 'Doanh nghiệp thâm dụng lao động', effect: 'Thị trường lao động chặt đẩy chi phí nhân công; doanh nghiệp xuất khẩu dệt may, da giày chịu áp lực lớn nếu năng suất không tăng tương ứng.', direction: 'down' },
    { group: 'Người gửi tiết kiệm và người vay', effect: 'Nếu lạm phát cơ bản tăng dai dẳng, kỳ vọng lãi suất tăng; người vay lãi suất thả nổi chịu chi phí vốn cao hơn, người gửi hưởng lãi suất danh nghĩa cao hơn nhưng lãi suất thực chưa chắc tăng.', direction: 'mixed' },
    { group: 'Nhà hoạch định chính sách', effect: 'Không thể chỉ nhìn tỷ lệ thất nghiệp công bố thấp để suy ra áp lực giá; cần thêm lạm phát cơ bản, tiền lương thực tế, tỷ lệ lao động phi chính thức và năng suất.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Lạm phát cơ bản và CPI so với cùng kỳ', why: 'Cho biết áp lực giá nền có lan rộng hay chỉ do cú sốc thực phẩm, năng lượng.', where: 'Cục Thống kê (nso.gov.vn), thông cáo CPI hằng tháng' },
    { name: 'Tỷ lệ thất nghiệp, thiếu việc làm và tỷ lệ lao động phi chính thức', why: 'Đo độ chặt của thị trường lao động; ở Việt Nam, tỷ lệ phi chính thức cao nên cần đọc cùng thất nghiệp.', where: 'Thông cáo báo chí Lao động việc làm hằng quý của Cục Thống kê' },
    { name: 'Tiền lương bình quân và năng suất lao động', why: 'Lương tăng nhanh hơn năng suất mới tạo áp lực chi phí lên giá.', where: 'Cục Thống kê; báo cáo của Bộ Nội vụ, ILO' },
    { name: 'Kỳ vọng lạm phát (khảo sát)', why: 'Mức neo của kỳ vọng ảnh hưởng đến độ dốc quan sát được của đường Phillips; kỳ vọng bung ra thì quan hệ lương - giá dễ biến dạng.', where: 'Khảo sát của các ngân hàng trung ương và tổ chức nghiên cứu; Việt Nam hạn chế dữ liệu công khai' },
  ],
  counterpoints: [
    'Khi lạm phát chủ yếu do cú sốc cung (giá dầu, đứt gãy chuỗi cung ứng), thất nghiệp thấp hay cao không giải thích được; đường Phillips cho kết quả sai nếu đọc cú sốc cung như cầu kéo.',
    'Đường Phillips có thể phẳng đến mức thất nghiệp thay đổi nhiều mà lạm phát ít đổi, rồi bất ngờ dốc lại khi nền kinh tế quá nóng hoặc kỳ vọng mất neo; độ dốc không ổn định theo thời gian.',
    'Ở nền kinh tế mở và nhiều lao động phi chính thức như Việt Nam, giá chịu ảnh hưởng của giá thế giới và tỷ giá nhiều hơn là thị trường lao động trong nước, nên quan hệ càng khó đọc.',
  ],
  glossary: [
    { term: 'Đường Phillips', definition: 'Mô hình biểu diễn mối quan hệ nghịch giữa thất nghiệp và tăng lương hoặc lạm phát.' },
    { term: 'NAIRU', definition: 'Tỷ lệ thất nghiệp không làm lạm phát tăng tốc; còn gọi gần đúng là thất nghiệp tự nhiên.' },
    { term: 'Lạm phát kỳ vọng', definition: 'Mức lạm phát mà người dân và doanh nghiệp dự tính; được đưa vào quyết định lương và giá.' },
    { term: 'Đình lạm', definition: 'Tình trạng lạm phát cao đi cùng tăng trưởng thấp và thất nghiệp cao.' },
    { term: 'Neo kỳ vọng', definition: 'Khi công chúng tin ngân hàng trung ương sẽ giữ lạm phát quanh mục tiêu nên kỳ vọng ít dao động theo cú sốc.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'phillips-curve-unemployment-inflation-q',
    question: 'Một chính phủ muốn giảm thất nghiệp bằng cách chấp nhận lạm phát 6% kéo dài nhiều năm. Điều gì nhiều khả năng xảy ra nếu công chúng dần coi 6% là bình thường?',
    options: [
      { id: 'a', text: 'Thất nghiệp giữ ở mức thấp vĩnh viễn, chỉ có lạm phát ở mức 6%.', explain: 'Đây chính là điều bản gốc đường Phillips gợi ý nhưng thập niên 1970 đã bác bỏ: khi kỳ vọng điều chỉnh, lợi ích về việc làm biến mất.' },
      { id: 'b', text: 'Kỳ vọng lạm phát tăng, đường Phillips ngắn hạn dịch lên, thất nghiệp quay về mức tự nhiên còn lạm phát vẫn cao.', correct: true, explain: 'Đúng. Lương và giá được đặt theo kỳ vọng mới nên không còn "bất ngờ" để kích thích việc làm; muốn hạ lạm phát lại phải thắt chính sách.' },
      { id: 'c', text: 'Đường Phillips chứng minh lạm phát và thất nghiệp không liên quan gì nhau.', explain: 'Quá mạnh: quan hệ ngắn hạn vẫn tồn tại ở mức độ nào đó, chỉ là không ổn định và phụ thuộc kỳ vọng, cú sốc cung và chính sách.' },
    ],
  },
  sources: [
    { title: 'Phillips curve', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Phillips_curve' },
    { title: 'Anchored Inflation Expectations and the Slope of the Phillips Curve', publisher: 'Federal Reserve Bank of San Francisco', url: 'https://www.frbsf.org/economic-research/publications/working-papers/2019/27/' },
    { title: 'Thông cáo báo chí Lao động việc làm quý II năm 2026', publisher: 'Cục Thống kê', url: 'https://www.nso.gov.vn/wp-content/uploads/2026/07/Thong-cao-bao-chi-Lao-dong-viec-lam-QII.2026.pdf' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 40,
}
