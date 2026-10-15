import type { Explainer } from '../../../shared/explainer'

export const voluntaryPensionRetirementSavings: Explainer = {
  id: 'voluntary-pension-retirement-savings',
  slug: 'voluntary-pension-retirement-savings',
  question: 'Tiết kiệm hưu trí tự nguyện hoạt động thế nào, lãi kép và lạm phát tác động ra sao?',
  title: 'Hưu trí tự nguyện: lãi kép giúp ích nhiều năm, lạm phát và phí âm thầm bào mòn',
  topic: 'personal-finance',
  tldr: 'Tiết kiệm hưu trí dài hạn hưởng lợi từ **lãi kép**: càng bắt đầu sớm, phần lãi sinh ra từ lãi càng lớn. Nhưng con số danh nghĩa cuối kỳ dễ gây ảo giác: sau 25 năm, giá trị thực bị **lạm phát** bào mòn đáng kể, và **phí** quản lý cũng ăn vào lợi suất. Ví dụ giả định dưới đây giúp ước lượng quy mô.',
  keyPoints: [
    'Ví dụ giả định: góp **2 triệu/tháng** trong **25 năm**, lợi suất danh nghĩa **6%/năm** tính lãi tháng, đạt khoảng **1,39 tỷ đồng**, trong đó vốn góp 600 triệu.',
    'Nếu lạm phát trung bình **4%/năm**, 1,39 tỷ sau 25 năm chỉ có sức mua khoảng **520 triệu** theo giá hôm nay. Lợi suất thực khoảng 2%/năm mới là con số quan trọng.',
    'Cùng 2 triệu/tháng 25 năm nhưng lợi suất 8% đạt khoảng 1,90 tỷ; chênh lệch 2 điểm phần trăm tạo khác biệt lớn nhờ lãi kép, và phí quản lý 1%/năm cũng có tác động tương tự theo chiều ngược.',
    '**Thời gian** thường quan trọng hơn **số tiền**: bắt đầu sớm 10 năm thường cho kết quả tốt hơn góp nhiều hơn khi bắt đầu muộn.',
    'Cần thử hai loại rủi ro: **lợi suất biến động** (nhất là gần thời điểm rút) và **rủi ro thể chế** (điều kiện rút, quy định thuế, đơn vị quản lý).',
  ],
  causalChain: [
    { from: 'Góp đều đặn và để lãi tái đầu tư', to: 'Giá trị tăng theo lãi kép', mechanism: 'Mỗi kỳ, lãi được cộng vào gốc nên kỳ sau lãi tính trên số lớn hơn; tăng trưởng nhanh dần.' },
    { from: 'Lạm phát cao hơn dự kiến', to: 'Sức mua của khoản tích lũy giảm', mechanism: 'Giá cả tăng làm cùng một số tiền mua được ít hơn; lợi suất thực = danh nghĩa trừ lạm phát.' },
    { from: 'Phí quản lý hằng năm', to: 'Lợi suất ròng giảm', mechanism: 'Phí tính trên tài sản mỗi năm; qua nhiều thập kỷ, 1% phí làm giảm đáng kể giá trị cuối kỳ.' },
    { from: 'Biến động thị trường gần thời điểm nghỉ hưu', to: 'Rủi ro về thứ tự lợi suất', mechanism: 'Giảm giá mạnh ngay trước khi rút tiền gây thiệt hại lớn hơn cùng mức giảm vào giai đoạn đầu.' },
  ],
  vietnamImpact: [
    { group: 'Người lao động tự do, không có lương hưu bảo hiểm xã hội', effect: 'Tiết kiệm tự nguyện là nguồn thu nhập quan trọng khi nghỉ hưu; khoảng trống bảo hiểm cần lấp.', direction: 'up' },
    { group: 'Người trẻ bắt đầu sớm', effect: 'Hưởng lợi nhiều nhất từ lãi kép dù mỗi tháng góp ít.', direction: 'up' },
    { group: 'Người đầu tư vào tài sản lãi cố định dài hạn', effect: 'Lạm phát cao hơn kỳ vọng làm giá trị thực giảm; cần đa dạng tài sản.', direction: 'down' },
    { group: 'Người gần tuổi nghỉ hưu', effect: 'Rủi ro biến động và chi phí cơ hội lớn; nên chuyển dần sang tài sản ổn định hơn theo kế hoạch.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Lạm phát CPI bình quân nhiều năm', why: 'Cơ sở ước lượng lợi suất thực và sức mua tương lai.', where: 'Cục Thống kê (nso.gov.vn)' },
    { name: 'Lợi suất trái phiếu chính phủ dài hạn', why: 'Mức tham chiếu lợi suất an toàn dài hạn.', where: 'Sở Giao dịch Chứng khoán Hà Nội (HNX), Bộ Tài chính' },
    { name: 'Phí quản lý và phí giao dịch của sản phẩm', why: 'Phí nhỏ mỗi năm tích lũy thành chênh lệch lớn.', where: 'Điều lệ quỹ, tài liệu công bố thông tin của đơn vị quản lý' },
    { name: 'Tuổi thọ kỳ vọng và tỷ lệ phụ thuộc', why: 'Tuổi thọ dài đòi hỏi tích lũy lớn hơn.', where: 'Cục Thống kê, Liên Hợp Quốc, World Bank (worldbank.org)' },
  ],
  counterpoints: [
    'Ví dụ giả định lợi suất ổn định 6% hằng năm; thực tế lợi suất biến động và thứ tự năm tốt xấu ảnh hưởng kết quả.',
    'Khóa tiền cho hưu trí giảm thanh khoản cho nhu cầu khác (nhà ở, khẩn cấp); cần dự phòng riêng.',
    'Bảo hiểm xã hội, tài sản như nhà ở và hỗ trợ gia đình cũng là phần của kế hoạch hưu trí; tự nguyện không thay thế mà bổ sung.',
  ],
  glossary: [
    { term: 'Lãi kép', definition: 'Lãi được cộng vào gốc để tiếp tục sinh lãi ở kỳ sau.' },
    { term: 'Lợi suất thực', definition: 'Lợi suất danh nghĩa trừ lạm phát, đo mức tăng sức mua.' },
    { term: 'Phí quản lý', definition: 'Phí hằng năm tính trên tài sản quỹ để trả cho đơn vị quản lý.' },
    { term: 'Rủi ro thứ tự lợi suất', definition: 'Rủi ro khi lợi suất xấu rơi vào gần thời điểm rút tiền.' },
    { term: 'Quy tắc 72', definition: 'Ước tính nhanh số năm để tiền gấp đôi: lấy 72 chia cho lãi suất %/năm.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'voluntary-pension-retirement-savings-q',
    question: 'Một kế hoạch dự kiến thu về 2 tỷ đồng sau 30 năm. Câu hỏi nào quan trọng nhất cần đặt ra trước khi tin con số này?',
    options: [
      { id: 'a', text: 'Con số có chia hết cho số năm góp không.', explain: 'Không liên quan đến chất lượng của con số.' },
      { id: 'b', text: '2 tỷ đó mua được gì theo giá của tương lai, giả định lợi suất và phí là bao nhiêu.', correct: true, explain: 'Đúng. Giá trị danh nghĩa cần quy về sức mua và kiểm tra giả định lợi suất, lạm phát, phí.' },
      { id: 'c', text: 'Tiền sẽ chắc chắn đạt 2 tỷ vì lãi kép luôn tăng.', explain: 'Lãi kép chỉ có hiệu lực khi lợi suất dương và ổn định; không có gì chắc chắn.' },
    ],
  },
  sources: [
    { title: 'Compound interest', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Compound_interest' },
    { title: 'Pension', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Pension' },
    { title: 'Rule of 72', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Rule_of_72' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 38,
}
