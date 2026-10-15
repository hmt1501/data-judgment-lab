import type { Explainer } from '../../../shared/explainer'

export const financialGoalsTimeHorizonsBuckets: Explainer = {
  id: 'financial-goals-time-horizons-buckets',
  slug: 'financial-goals-time-horizons-buckets',
  question: 'Nên đặt mục tiêu tài chính theo thời hạn và chia tiền thành các "ngăn" như thế nào?',
  title: 'Mục tiêu tài chính theo thời hạn: chia tiền thành các "ngăn"',
  topic: 'personal-finance',
  tldr: 'Cùng một đồng tiền nên được giao nhiệm vụ khác nhau tùy **khi nào bạn cần dùng nó**: quỹ khẩn cấp, mua nhà, nghỉ hưu. Thời hạn càng ngắn thì càng cần **an toàn và dễ rút**; thời hạn càng dài thì càng chịu được biến động và cần **bù lạm phát**. Chia "ngăn" giúp bạn tránh phải bán tài sản rủi ro đúng lúc thị trường xuống để trả một khoản chi đã biết trước.',
  keyPoints: [
    'Mục tiêu tài chính thường được chia theo thời hạn: ngắn (vài tháng), trung (vài năm đến khoảng một thập kỷ) và dài (hàng chục năm). Ranh giới **không có chuẩn chung**: mỗi nguồn chia một kiểu, quan trọng là bạn gắn từng mục tiêu với **ngày cần tiền**.',
    'Theo bài hướng dẫn của Freddie Mac (đọc ngày 15/10/2026), một cách chia phổ biến là: ngắn hạn 3–6 tháng (quỹ khẩn cấp, chi tiêu linh tinh), trung hạn 5–10 năm (mua nhà, học phí con), dài hạn từ 15 năm trở lên (nghỉ hưu). Đây là ví dụ tham khảo của một tổ chức Mỹ, không phải quy tắc bắt buộc.',
    'Thời hạn quyết định **loại rủi ro nên chấp nhận**: tiền cần trong vài tháng không nên phụ thuộc vào giá cổ phiếu hay vàng hôm nay; tiền để dành cho hàng chục năm thì rủi ro lớn hơn lại là để tiền mất giá vì lạm phát.',
    '"Ngăn" là công cụ tâm lý lẫn kỹ thuật: tâm lý học hành vi gọi hiện tượng chia tiền thành các tài khoản trong đầu là **kế toán tinh thần** (Richard Thaler). Nó giúp kỷ luật, nhưng cũng khiến ta coi tiền ở các ngăn là không thay thế được cho nhau dù về bản chất tiền là như nhau.',
    'Mục tiêu cần **con số, hạn chót và số tiền góp định kỳ** thì mới theo dõi được; các ngăn nên được rà lại khi thu nhập, gia đình hoặc lãi suất thay đổi.',
  ],
  causalChain: [
    { from: 'Xác định ngày cần tiền và số tiền cần (ví dụ đặt cọc nhà sau 5 năm)', to: 'Biết khoảng thời gian có thể chịu biến động', mechanism: 'Thời hạn càng dài, giá tài sản có thêm thời gian hồi phục sau cú giảm; thời hạn càng ngắn, một lần giảm giá có thể rơi đúng vào ngày bạn phải rút tiền.' },
    { from: 'Khoảng thời gian chịu biến động', to: 'Chọn công cụ giữ tiền cho từng ngăn', mechanism: 'Ngăn ngắn hạn ưu tiên thanh khoản và bảo toàn vốn (tiền gửi, tài khoản dễ rút); ngăn dài hạn có thể chứa tài sản có lợi suất kỳ vọng cao hơn nhưng giá dao động mạnh hơn.' },
    { from: 'Chọn công cụ theo ngăn', to: 'Giảm nguy cơ phải bán lỗ để trả khoản chi đã biết', mechanism: 'Khi khoản chi gần đến hạn đã nằm sẵn ở ngăn an toàn, bạn không bị buộc bán tài sản rủi ro đúng lúc giá thấp.' },
    { from: 'Góp tiền đều vào từng ngăn theo kế hoạch', to: 'Tiến độ đo được và dễ điều chỉnh', mechanism: 'Số tiền cần góp mỗi tháng = (mục tiêu − số đã có) / số tháng còn lại, chưa tính lãi; mỗi ngăn có "đồng hồ" riêng nên biết ngay mình đang chậm hay nhanh.' },
    { from: 'Lạm phát và lãi suất thay đổi theo thời gian', to: 'Cần rà soát lại mục tiêu và ngăn', mechanism: 'Chi phí mục tiêu (học phí, nhà) thường tăng theo giá; nếu lãi thực của ngăn thấp hơn mức tăng chi phí, số tiền cần góp phải tăng.' },
  ],
  vietnamImpact: [
    { group: 'Người đi làm hưởng lương', effect: 'Có thể tách tài khoản riêng cho từng ngăn (quỹ khẩn cấp, mua nhà, nghỉ hưu) và đặt chuyển khoản tự động ngay sau ngày nhận lương để việc góp tiền không phụ thuộc ý chí.', direction: 'up' },
    { group: 'Người đang vay mua nhà', effect: 'Gánh nặng trả góp là khoản chi cố định nhiều năm; cần ngăn đệm đủ cho vài kỳ trả nợ nếu thu nhập gián đoạn, thay vì dùng toàn bộ tiền nhàn rỗi để trả nợ sớm.', direction: 'mixed' },
    { group: 'Người nuôi con nhỏ', effect: 'Chi phí học tập là mục tiêu trung hạn có thời điểm rõ ràng nhưng số tiền tăng theo thời gian; nên tách khỏi tiền tiêu dùng hằng ngày.', direction: 'mixed' },
    { group: 'Người gần tuổi nghỉ hưu', effect: 'Ngăn dài hạn chuyển dần thành ngăn trung hạn khi ngày cần tiền đến gần, nên cần giảm dần mức rủi ro thay vì giữ nguyên cơ cấu từ khi còn trẻ.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Số tháng chi tiêu thiết yếu mà quỹ khẩn cấp trang trải được', why: 'Thước đo đơn giản nhất cho ngăn ngắn hạn; thấp hơn kế hoạch nghĩa là cần ưu tiên bổ sung trước khi đầu tư rủi ro.', where: 'Tự tính từ sao kê tài khoản và ứng dụng ngân hàng của bạn' },
    { name: 'Lãi suất tiền gửi và lạm phát (CPI)', why: 'Cho biết ngăn an toàn đang sinh lời thực dương hay âm.', where: 'Biểu lãi suất niêm yết của các ngân hàng; Cục Thống kê (nso.gov.vn) cho CPI' },
    { name: 'Tỷ lệ tiết kiệm trên thu nhập', why: 'Quyết định mục tiêu có đạt đúng hạn không, quan trọng hơn lợi suất trong giai đoạn đầu.', where: 'Tự theo dõi hằng tháng từ bảng ngân sách cá nhân' },
    { name: 'Tiến độ từng mục tiêu so với kế hoạch', why: 'Phát hiện sớm việc chậm tiến độ để tăng mức góp hoặc điều chỉnh mục tiêu.', where: 'Bảng tính cá nhân hoặc tính năng mục tiêu tiết kiệm trong ứng dụng ngân hàng' },
  ],
  counterpoints: [
    'Chia quá nhiều ngăn có thể làm tiền bị phân mảnh, khó theo dõi và tạo chi phí (phí tài khoản, lãi suất thấp ở ngăn thanh khoản); với người thu nhập nhỏ, 2–3 ngăn đã đủ.',
    'Về mặt kinh tế tiền có thể thay thế cho nhau; việc giữ tiền lãi thấp ở một ngăn trong khi đang vay lãi cao ở ngăn khác có thể bất hợp lý. Lúc đó nên cân nhắc ưu tiên trả nợ lãi cao.',
    'Các mốc thời hạn (3–6 tháng, 5–10 năm, 15 năm) là ví dụ của một tổ chức, không phải chuẩn khoa học; nghề nghiệp bấp bênh hay gia đình phụ thuộc một nguồn thu có thể cần quỹ khẩn cấp dài hơn.',
  ],
  glossary: [
    { term: 'Thời hạn mục tiêu', definition: 'Khoảng thời gian từ hôm nay đến ngày bạn cần dùng khoản tiền.' },
    { term: 'Quỹ khẩn cấp', definition: 'Khoản tiền dễ rút dành cho chi tiêu thiết yếu khi mất thu nhập hoặc phát sinh chi phí bất ngờ.' },
    { term: 'Kế toán tinh thần (mental accounting)', definition: 'Xu hướng chia tiền thành các tài khoản trong đầu theo mục đích và đánh giá chi tiêu theo từng tài khoản thay vì tổng tài sản.' },
    { term: 'Thanh khoản', definition: 'Mức độ dễ chuyển tài sản thành tiền mặt mà không mất giá nhiều.' },
    { term: 'Lãi suất thực', definition: 'Lãi suất danh nghĩa trừ lạm phát; cho biết sức mua của tiền tăng hay giảm.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'financial-goals-time-horizons-buckets-q',
    question: 'Bạn dự định đặt cọc mua nhà sau khoảng 18 tháng nữa và đang nghĩ tới việc dồn toàn bộ khoản tiền này vào một loại tài sản giá dao động mạnh vì "kỳ vọng lợi suất cao". Cách nghĩ nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Hợp lý, vì lợi suất kỳ vọng cao thì về lâu dài chắc chắn bù được dao động.', explain: 'Lợi suất kỳ vọng không bảo đảm: nếu giá giảm đúng lúc cần tiền, bạn có thể phải rút lỗ. Thời hạn 18 tháng quá ngắn để dựa vào "về lâu dài".' },
      { id: 'b', text: 'Nên giữ phần cần chắc chắn cho khoản đặt cọc ở công cụ an toàn, dễ rút; chỉ phần dài hạn mới nên chịu dao động lớn.', correct: true, explain: 'Đúng. Khoản chi có ngày cụ thể và gần thì ưu tiên bảo toàn vốn và thanh khoản; rủi ro cao dành cho ngăn có thời hạn dài, nơi có thời gian chờ hồi phục.' },
      { id: 'c', text: 'Không cần phân biệt, vì tiền nào cũng như nhau nên cứ đầu tư toàn bộ vào chỗ lợi suất cao nhất.', explain: 'Tiền thay thế được cho nhau, nhưng rủi ro thì phụ thuộc thời điểm cần dùng. Bỏ qua thời hạn là bỏ qua rủi ro thứ tự thời gian.' },
    ],
  },
  sources: [
    { title: 'How to Set and Preserve Financial Goals', publisher: 'Freddie Mac (My Home)', url: 'https://myhome.freddiemac.com/blog/financial-education/how-set-and-preserve-financial-goals' },
    { title: 'Mental accounting', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Mental_accounting' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 181,
}
