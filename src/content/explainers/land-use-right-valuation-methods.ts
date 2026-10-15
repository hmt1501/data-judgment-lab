import type { Explainer } from '../../../shared/explainer'

export const landUseRightValuationMethods: Explainer = {
  id: 'land-use-right-valuation-methods',
  slug: 'land-use-right-valuation-methods',
  question: 'Đất và bất động sản được định giá bằng những phương pháp nào?',
  title: 'Ba cách định giá BĐS: so sánh thị trường, thu nhập và chi phí',
  topic: 'real-estate',
  tldr: 'Có ba hướng định giá quen thuộc: **so sánh** (giá các tài sản tương tự vừa giao dịch), **thu nhập** (chiết khấu dòng tiền cho thuê/khai thác) và **chi phí** (chi phí xây mới trừ khấu hao cộng giá đất). Mỗi cách phù hợp một loại tài sản và có điểm yếu riêng; nên đối chiếu nhiều cách thay vì tin một con số.',
  keyPoints: [
    '**Phương pháp so sánh**: điều chỉnh giá các giao dịch tương tự theo vị trí, diện tích, pháp lý, hướng...; phù hợp khi thị trường nhiều giao dịch và dữ liệu đáng tin.',
    '**Phương pháp thu nhập**: định giá bằng dòng thu nhập ròng dự kiến chia cho tỷ suất vốn hóa (cap rate) hoặc chiết khấu dòng tiền; phù hợp BĐS cho thuê, thương mại.',
    '**Phương pháp chi phí**: giá đất + chi phí xây dựng hiện tại - hao mòn; phù hợp tài sản đặc thù ít giao dịch (công trình công cộng, nhà xưởng).',
    'Đất ở Việt Nam còn có **bảng giá đất** do Nhà nước ban hành làm căn cứ tính một số nghĩa vụ tài chính; từng khác khá xa giá thị trường. Theo Luật Việt Nam (22/7/2024), Luật Đất đai 2024 bỏ khung giá đất, giá đất theo nguyên tắc thị trường, bảng giá mới áp dụng từ 1/1/2026 và được điều chỉnh hằng năm (xem thêm bài về Luật Đất đai 2024 và bảng giá đất; cần kiểm tra bảng giá hiện hành của từng tỉnh).',
    'Ví dụ giả định: căn hộ cho thuê 144 triệu/năm, chi phí vận hành 14 triệu, thu nhập ròng 130 triệu; với cap rate 5% thì giá trị khoảng 2,6 tỷ. Cap rate tăng lên 6% thì giá trị chỉ còn khoảng 2,17 tỷ.',
  ],
  causalChain: [
    { from: 'Có nhiều giao dịch tương tự gần đây', to: 'Phương pháp so sánh đáng tin', mechanism: 'Giá thị trường phản ánh thông tin và kỳ vọng của người mua bán thực; chỉ cần điều chỉnh khác biệt giữa các tài sản.' },
    { from: 'Tài sản sinh thu nhập ổn định', to: 'Phương pháp thu nhập phù hợp', mechanism: 'Giá trị là hiện giá của dòng thu nhập tương lai; thu nhập ròng / cap rate là cách quy đổi nhanh.' },
    { from: 'Lãi suất và rủi ro tăng', to: 'Cap rate/tỷ lệ chiết khấu tăng, giá trị giảm', mechanism: 'Với cùng dòng thu nhập, tỷ suất đòi hỏi cao hơn làm hiện giá thấp hơn; vì vậy BĐS nhạy với lãi suất.' },
    { from: 'Tài sản đặc thù, ít giao dịch', to: 'Dùng phương pháp chi phí', mechanism: 'Không có tham chiếu thị trường, nên ước lượng bằng chi phí tái tạo trừ hao mòn, cộng giá đất.' },
  ],
  vietnamImpact: [
    { group: 'Người mua/bán nhà đất', effect: 'Hiểu phương pháp giúp tránh bị dẫn dắt bởi giá rao; cần đối chiếu giá giao dịch thực và pháp lý.', direction: 'up' },
    { group: 'Ngân hàng cho vay có tài sản bảo đảm', effect: 'Định giá thận trọng quyết định hạn mức vay; định giá cao quá mức làm tăng rủi ro khi giá điều chỉnh.', direction: 'mixed' },
    { group: 'Doanh nghiệp BĐS thương mại', effect: 'Giá trị tài sản phụ thuộc cap rate và tăng trưởng tiền thuê, nên nhạy với lãi suất.', direction: 'mixed' },
    { group: 'Người bị thu hồi đất, bồi thường', effect: 'Chênh lệch giữa giá do Nhà nước xác định và giá thị trường ảnh hưởng mức bồi thường; cần tìm hiểu quy định hiện hành.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Giá giao dịch thành công của tài sản tương tự', why: 'Dữ liệu đầu vào quan trọng nhất của phương pháp so sánh.', where: 'Cơ sở dữ liệu giá đất địa phương (nếu đã công bố), báo cáo thị trường uy tín; cần phân biệt giá rao và giá giao dịch' },
    { name: 'Tỷ suất cho thuê (thu nhập ròng / giá)', why: 'So với lãi suất tiền gửi/trái phiếu để đánh giá giá có hợp lý.', where: 'Tự tính từ giá thuê và giá bán; khảo sát thị trường' },
    { name: 'Lãi suất tham chiếu và lãi suất cho vay BĐS', why: 'Quyết định tỷ suất chiết khấu/cap rate.', where: 'Ngân hàng Nhà nước (sbv.gov.vn)' },
    { name: 'Bảng giá đất địa phương', why: 'Căn cứ tính một số nghĩa vụ tài chính, khác giá thị trường.', where: 'Ủy ban nhân dân tỉnh/thành phố, cổng thông tin địa phương' },
  ],
  counterpoints: [
    'Mọi phương pháp đều nhạy với giả định đầu vào (cap rate, tốc độ tăng thuê, điều chỉnh so sánh): đổi nhẹ giả định có thể đổi lớn kết quả.',
    'Thị trường thiếu minh bạch giá giao dịch làm phương pháp so sánh dễ lệch theo giá rao.',
    'Đất chờ quy hoạch hoặc có kỳ vọng thay đổi mục đích sử dụng khó định giá bằng thu nhập hiện tại; phần giá trị kỳ vọng rất không chắc chắn.',
  ],
  glossary: [
    { term: 'Cap rate', definition: 'Tỷ suất vốn hóa: thu nhập ròng hằng năm chia cho giá trị tài sản.' },
    { term: 'Thu nhập ròng', definition: 'Tiền thuê trừ chi phí vận hành (không gồm lãi vay).' },
    { term: 'Chi phí tái tạo', definition: 'Chi phí xây dựng lại tài sản tương đương ở thời điểm hiện tại.' },
    { term: 'Hao mòn', definition: 'Phần giá trị mất đi do tuổi, hư hỏng, lỗi thời.' },
    { term: 'Bảng giá đất', definition: 'Bảng giá do Nhà nước ban hành, dùng làm căn cứ cho một số nghĩa vụ tài chính về đất.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'land-use-right-valuation-methods-q',
    question: 'Một tòa nhà văn phòng cho thuê có thu nhập ròng ổn định. Lãi suất thị trường tăng, các yếu tố khác không đổi. Giá trị theo phương pháp thu nhập thay đổi thế nào?',
    options: [
      { id: 'a', text: 'Tăng, vì thu nhập ròng không đổi.', explain: 'Giá trị = thu nhập / cap rate; cap rate tăng cùng lãi suất làm giá trị giảm.' },
      { id: 'b', text: 'Giảm, vì tỷ suất đòi hỏi (cap rate/chiết khấu) cao hơn.', correct: true, explain: 'Đúng. Cùng dòng thu nhập chia cho tỷ suất cao hơn cho giá trị thấp hơn.' },
      { id: 'c', text: 'Không đổi vì giá trị chỉ phụ thuộc chi phí xây dựng.', explain: 'Đó là phương pháp chi phí; với tài sản sinh thu nhập, phương pháp thu nhập thường phản ánh sát hơn.' },
    ],
  },
  sources: [
    { title: 'Real estate appraisal', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Real_estate_appraisal' },
    { title: 'Trọn bộ điểm mới của Luật Đất đai 2024 (22/7/2024)', publisher: 'Luật Việt Nam', url: 'https://luatvietnam.vn/dat-dai-nha-o/diem-moi-cua-luat-dat-dai-2024-567-96662-article.html' },
    { title: 'Urban Development', publisher: 'World Bank', url: 'https://www.worldbank.org/en/topic/urbandevelopment/overview' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 28,
}
