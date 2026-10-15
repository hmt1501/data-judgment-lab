import type { Explainer } from '../../../shared/explainer'

export const vietnamMiddleIncomeTrapProductivity: Explainer = {
  id: 'vietnam-middle-income-trap-productivity',
  slug: 'vietnam-middle-income-trap-productivity',
  question: '"Bẫy thu nhập trung bình" là gì và vì sao năng suất quyết định với Việt Nam?',
  title: 'Bẫy thu nhập trung bình và bài toán năng suất của Việt Nam',
  topic: 'vietnam-economy',
  tldr: 'Một nước tăng trưởng đến mức thu nhập trung bình rồi **chững lại**, không lên được nhóm thu nhập cao: đó là "bẫy thu nhập trung bình". Nguyên nhân thường được nêu là lợi thế lao động rẻ mất dần mà chưa thay thế bằng năng suất và đổi mới. Theo báo Nhân Dân (07/07/2026), Việt Nam đã vào nhóm thu nhập trung bình cao, nhưng mục tiêu thu nhập cao đòi hỏi chuyển từ tăng trưởng dựa vào vốn và lao động sang năng suất.',
  keyPoints: [
    'Theo Wikipedia, thuật ngữ do Indermit Gill và Homi Kharas đặt ra năm 2007 trong nghiên cứu của Ngân hàng Thế giới về Đông Á; tính hợp lệ thực nghiệm của khái niệm vẫn còn tranh luận.',
    'Cơ chế thường được nêu: lương tăng làm mất lợi thế xuất khẩu hàng chế tạo giá rẻ, trong khi chưa đủ năng lực cạnh tranh ở thị trường giá trị cao; thách thức lớn nhất là chuyển từ tăng trưởng dựa vào lao động và vốn rẻ sang tăng trưởng dựa vào năng suất và đổi mới.',
    'Theo báo Nhân Dân (07/07/2026), dẫn Ngân hàng Thế giới: GNI bình quân đầu người của Việt Nam năm 2025 là 4.970 USD, trên ngưỡng 4.636 USD của nhóm thu nhập trung bình cao theo phân loại 2026; GNI năm 2021 là 3.540 USD.',
    'Cũng theo bài báo đó, Báo cáo Phát triển Thế giới 2024 của Ngân hàng Thế giới cho biết kể từ 1990 chỉ **34** nền kinh tế vượt được bẫy thu nhập trung bình, khoảng một phần ba nhờ gia nhập EU hoặc dầu mỏ dồi dào.',
    'Bốn điểm nghẽn được Ngân hàng Thế giới nêu (theo bài báo): khoảng cách giữa khu vực FDI và doanh nghiệp nội địa, phụ thuộc nhiều vào ngoại thương, tín dụng/GDP cao (khoảng 145% năm 2025) và hạ tầng – logistics chi phí cao.',
  ],
  causalChain: [
    { from: 'Thu nhập và lương tăng', to: 'Lợi thế lao động rẻ giảm', mechanism: 'Chi phí lao động tăng làm hàng chế tạo thâm dụng lao động kém cạnh tranh hơn so với nước thu nhập thấp.' },
    { from: 'Lợi thế chi phí mất dần', to: 'Phải chuyển sang tăng năng suất', mechanism: 'Nếu không tăng giá trị gia tăng trên mỗi lao động, doanh nghiệp bị kẹp giữa nước chi phí thấp và nước công nghệ cao.' },
    { from: 'Năng suất tăng chậm do thiếu đổi mới, kỹ năng, kết nối giữa FDI và nội địa', to: 'Tăng trưởng chững lại ở mức thu nhập trung bình', mechanism: 'Tăng trưởng dựa vào tích lũy vốn gặp lợi suất giảm dần; không có cải thiện năng suất, thu nhập bình quân khó bắt kịp nước giàu.' },
    { from: 'Cải cách thể chế, đầu tư giáo dục, hạ tầng, hỗ trợ doanh nghiệp nội địa', to: 'Cơ hội tăng TFP và thoát bẫy', mechanism: 'Giảm điểm nghẽn tiếp cận vốn, công nghệ và thị trường cho doanh nghiệp vừa và nhỏ để họ tham gia chuỗi giá trị.' },
  ],
  vietnamImpact: [
    { group: 'Người lao động', effect: 'Tăng năng suất và kỹ năng là điều kiện để lương thực tăng bền; thiếu nó, lương tăng chỉ làm mất việc ở ngành thâm dụng lao động.', direction: 'mixed' },
    { group: 'Doanh nghiệp nội địa vừa và nhỏ', effect: 'Khoảng cách với khu vực FDI về vốn, công nghệ, thị trường được xem là điểm nghẽn; thu hẹp được thì cơ hội tăng trưởng lớn.', direction: 'mixed' },
    { group: 'Doanh nghiệp FDI', effect: 'Tiếp tục hưởng lợi nếu môi trường ổn định, nhưng chính sách thúc đẩy liên kết và nội địa hóa sẽ định hình lại điều kiện hoạt động.', direction: 'mixed' },
    { group: 'Nhà đầu tư dài hạn', effect: 'Triển vọng thị trường phụ thuộc việc tăng trưởng chuyển dần sang năng suất; tín dụng/GDP cao là rủi ro nếu có biến động.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'GNI bình quân đầu người và ngưỡng phân loại thu nhập', why: 'Cho biết khoảng cách tới nhóm thu nhập cao.', where: 'Ngân hàng Thế giới (World Bank Data, phân loại thu nhập hằng năm)' },
    { name: 'Tăng trưởng năng suất lao động và TFP', why: 'Điều kiện thoát bẫy là năng suất tăng bền.', where: 'Cục Thống kê, Viện Năng suất Việt Nam, Ngân hàng Thế giới' },
    { name: 'Khoảng cách xuất khẩu giữa khu vực FDI và nội địa', why: 'Đo mức độ liên kết của doanh nghiệp nội địa với chuỗi giá trị.', where: 'Cục Thống kê, Cục Hải quan' },
    { name: 'Tín dụng/GDP', why: 'Tăng trưởng nhờ tín dụng cao cần theo dõi rủi ro tài chính.', where: 'Ngân hàng Nhà nước, BIS' },
  ],
  counterpoints: [
    'Một số nhà kinh tế cho rằng không có "bẫy" theo nghĩa chặt chẽ: các nước thu nhập trung bình tăng nhanh hơn nhiều nhóm khác kể từ giữa những năm 1980 (theo Wikipedia).',
    'Danh sách nước "thoát bẫy" phụ thuộc cách đặt ngưỡng; một phần thành công đến từ yếu tố đặc thù như gia nhập EU hoặc tài nguyên, không sao chép được.',
    'Số liệu GNI và phân loại thay đổi theo năm và theo cập nhật ngưỡng của Ngân hàng Thế giới, nên cần đọc cùng ngày công bố.',
  ],
  glossary: [
    { term: 'Bẫy thu nhập trung bình', definition: 'Tình trạng nước thu nhập trung bình chững lại, khó lên nhóm thu nhập cao.' },
    { term: 'GNI bình quân đầu người', definition: 'Tổng thu nhập quốc gia chia dân số, dùng để phân loại nhóm thu nhập.' },
    { term: 'Năng suất lao động', definition: 'Giá trị gia tăng tạo ra trên mỗi lao động hoặc mỗi giờ làm.' },
    { term: 'TFP', definition: 'Phần tăng trưởng không giải thích được bằng tăng vốn và lao động, phản ánh hiệu quả và công nghệ.' },
    { term: 'Chuỗi giá trị', definition: 'Chuỗi các công đoạn tạo ra sản phẩm, nơi mỗi công đoạn có giá trị gia tăng khác nhau.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-middle-income-trap-productivity-q',
    question: 'Một nước thu nhập trung bình có lương tăng nhanh nhưng năng suất gần như không tăng. Điều gì dễ xảy ra?',
    options: [
      { id: 'a', text: 'Hàng chế tạo thâm dụng lao động mất sức cạnh tranh mà chưa có lợi thế mới thay thế.', correct: true, explain: 'Đúng. Đây chính là cơ chế của bẫy thu nhập trung bình: chi phí tăng nhưng giá trị gia tăng không tăng tương ứng.' },
      { id: 'b', text: 'Thu nhập bình quân sẽ tự động bắt kịp nước giàu.', explain: 'Sai. Nếu năng suất không tăng, thu nhập bình quân không có nền tảng để bắt kịp.' },
      { id: 'c', text: 'Không có tác động vì lương không liên quan năng suất.', explain: 'Sai. Lương bền vững gắn với năng suất; tách rời kéo dài làm chi phí đơn vị tăng.' },
    ],
  },
  sources: [
    { title: 'Từ thu nhập trung bình cao đến quốc gia phát triển (07/07/2026)', publisher: 'Báo Nhân Dân', url: 'https://nhandan.vn/tu-thu-nhap-trung-binh-cao-den-quoc-gia-phat-trien-post973922.html' },
    { title: 'Middle income trap', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Middle-income_trap' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 165,
}
