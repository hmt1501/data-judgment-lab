import type { Explainer } from '../../../shared/explainer'

export const priceLimitsCircuitBreakers: Explainer = {
  id: 'price-limits-circuit-breakers',
  slug: 'price-limits-circuit-breakers',
  question: 'Biên độ giá và ngắt giao dịch (circuit breaker) có mục đích và tác dụng phụ gì?',
  title: 'Biên độ giá và ngắt giao dịch giúp thị trường "thở" khi hoảng loạn nhưng có thể làm giá bị kẹt và hút nhà đầu tư bán sớm',
  topic: 'markets-investing',
  tldr: 'Sàn giao dịch dùng hai loại hãm phanh: **biên độ giá** (giá mỗi cổ phiếu chỉ được dao động trong một ngưỡng quanh giá tham chiếu mỗi phiên) và **ngắt giao dịch** (tạm dừng khi chỉ số giảm quá ngưỡng). Mục đích là cho nhà đầu tư thời gian bình tĩnh và nhận thông tin. Tác dụng phụ thường gặp là giá không phản ánh kịp, thanh khoản biến mất ở giá sàn/trần và nhà đầu tư vội vã bán hay mua trước khi chạm ngưỡng. Quy định chính xác của từng sàn thay đổi, cần kiểm tra thông báo hiện hành.',
  keyPoints: [
    '**Biên độ giá**: giới hạn thay đổi giá trong ngày so với giá tham chiếu (thường là giá đóng cửa phiên trước); chạm trần/sàn thì lệnh vượt ngưỡng không được khớp. Theo tài liệu "Các quy định cần biết khi giao dịch chứng khoán" của HOSE (bản T2/2026), cổ phiếu và chứng chỉ quỹ trên HOSE có biên độ thông thường **±7%**, **±20%** trong ngày giao dịch đầu tiên hoặc khi giao dịch trở lại sau khi bị tạm ngừng/đình chỉ từ 25 ngày giao dịch liên tiếp; giá trần = giá tham chiếu + (giá tham chiếu × biên độ), giá sàn tương tự.',
    '**Ngắt giao dịch** (circuit breaker): tạm dừng toàn thị trường hoặc một mã khi chỉ số, giá giảm vượt ngưỡng định sẵn trong thời gian ngắn; phiên có thể tạm nghỉ một lúc rồi tiếp tục hoặc kết thúc sớm.',
    'Lý do kinh tế: khi hoảng loạn, nhà đầu tư bán vì thấy người khác bán (hành vi bầy đàn) và vị thế đòn bẩy bị ép bán; tạm dừng giúp thông tin lan rộng, thanh khoản quay lại, giảm bán tháo cưỡng bức.',
    'Tác dụng phụ: **hiệu ứng nam châm** (giá bị hút nhanh về ngưỡng), thanh khoản cạn ở giá sàn, lệnh bán dồn lại sang phiên sau, và nhà đầu tư sợ không bán được nên bán sớm hơn.',
    'Bằng chứng về hiệu quả không thống nhất: nhiều nghiên cứu thấy biên độ giá chỉ trì hoãn chứ không loại bỏ điều chỉnh giá; nên coi đây là công cụ ổn định trật tự thị trường hơn là ngăn giá về mức cơ bản.',
  ],
  causalChain: [
    { from: 'Tin xấu hoặc cú sốc làm giá giảm nhanh', to: 'Nhà đầu tư và bên cho vay ký quỹ lo ngại, tăng lệnh bán', mechanism: 'Giá giảm kích hoạt ngưỡng ký quỹ, bán cưỡng bức và hành vi bán theo đám đông.' },
    { from: 'Giá chạm ngưỡng biên độ hoặc chỉ số chạm ngưỡng ngắt', to: 'Khớp lệnh bị giới hạn hoặc phiên giao dịch bị tạm dừng', mechanism: 'Quy tắc cơ học của sàn không cho giá giảm thêm trong phiên hoặc dừng khớp lệnh trong một khoảng thời gian.' },
    { from: 'Tạm dừng, giá bị giữ', to: 'Thông tin có thời gian lan tỏa, nhà đầu tư bình tĩnh đánh giá lại', mechanism: 'Giảm xác suất bán tháo do hoảng loạn thuần túy, cho các bên bổ sung tiền hoặc điều chỉnh vị thế.' },
    { from: 'Nhà đầu tư dự đoán sẽ chạm ngưỡng', to: 'Đẩy nhanh việc bán trước ngưỡng (hiệu ứng nam châm)', mechanism: 'Ai sợ không bán được ở phiên sau sẽ bán sớm hơn, làm giá chạm ngưỡng nhanh hơn.' },
    { from: 'Giá bị kẹt ở sàn, dư bán lớn', to: 'Lệnh chưa khớp dồn sang phiên sau, giá tiếp tục chịu áp lực', mechanism: 'Thị trường chỉ trì hoãn điều chỉnh vì cung cầu thực chưa gặp nhau ở mức giá cân bằng.' },
  ],
  vietnamImpact: [
    { group: 'Nhà đầu tư cá nhân', effect: 'Biên độ giới hạn mức lỗ/lãi trong phiên nhưng khi giá kẹt sàn có thể không bán được; cần dự phòng thanh khoản.', direction: 'mixed' },
    { group: 'Nhà đầu tư dùng margin', effect: 'Giá kẹt sàn nhiều phiên làm khó bán, bổ sung ký quỹ và có thể bị bán cưỡng bức khi mở phiên.', direction: 'down' },
    { group: 'Doanh nghiệp niêm yết', effect: 'Biên độ giúp hạn chế biến động quá mức do tin đồn nhưng cũng làm giá chậm phản ánh thông tin thật.', direction: 'mixed' },
    { group: 'Công ty chứng khoán và Sở Giao dịch', effect: 'Phải vận hành hệ thống chịu tải khi dồn lệnh và truyền thông kịp thời về quy tắc.', direction: 'mixed' },
    { group: 'Nhà đầu tư nước ngoài', effect: 'Biên độ hẹp làm khó thoát vị thế lớn nhanh, là yếu tố họ cân nhắc khi đánh giá thanh khoản.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Số mã chạm sàn/trần trong phiên và quy mô dư mua/dư bán', why: 'Đo mức độ mất cân bằng cung cầu ở giá bị giữ.', where: 'Bảng giá của Sở Giao dịch Chứng khoán' },
    { name: 'Thanh khoản (giá trị khớp lệnh) và độ rộng thị trường', why: 'Thanh khoản cạn khi chạm ngưỡng là dấu hiệu cầu thật chưa quay lại.', where: 'Sở Giao dịch Chứng khoán, báo cáo thị trường' },
    { name: 'Biến động ngầm định và biên độ giá ngày', why: 'Giúp đánh giá biên độ có đang quá chặt hay quá lỏng so với biến động thực.', where: 'Dữ liệu giao dịch của sàn' },
    { name: 'Quy tắc hiện hành của sàn và thông báo từ cơ quan quản lý', why: 'Biên độ, thời gian tạm dừng thay đổi theo thời kỳ và từng sàn.', where: 'Website Sở Giao dịch và Ủy ban Chứng khoán Nhà nước' },
  ],
  counterpoints: [
    'Một số học giả cho rằng giới hạn giá không giảm biến động dài hạn; nó chỉ phân bổ lại biến động sang các phiên sau (volatility spillover).',
    'Thị trường với nhà đầu tư cá nhân chiếm tỷ trọng lớn có thể hưởng lợi nhiều hơn từ biên độ vì hành vi bầy đàn mạnh hơn.',
    'Nếu ngưỡng quá chặt, giá thường xuyên chạm giới hạn và nhà đầu tư mất tín hiệu giá; nếu quá lỏng thì mất tác dụng giảm sốc.',
  ],
  glossary: [
    { term: 'Biên độ giá', definition: 'Phạm vi giá được phép dao động trong phiên quanh giá tham chiếu.' },
    { term: 'Circuit breaker', definition: 'Cơ chế tạm dừng giao dịch khi giá hoặc chỉ số giảm vượt ngưỡng định sẵn.' },
    { term: 'Hiệu ứng nam châm', definition: 'Giá bị hút nhanh về ngưỡng vì nhà đầu tư vội vàng giao dịch trước khi chạm ngưỡng.' },
    { term: 'Giá tham chiếu', definition: 'Mức giá làm gốc để tính biên độ trong phiên giao dịch.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'price-limits-circuit-breakers-q',
    question: 'Một cổ phiếu kẹt giá sàn ba phiên liên tiếp với dư bán rất lớn. Điều nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Biên độ giá đã bảo vệ nhà đầu tư khỏi thua lỗ.', explain: 'Biên độ chỉ làm chậm quá trình điều chỉnh; nếu cung cầu thực xấu, giá vẫn tiếp tục giảm các phiên sau.' },
      { id: 'b', text: 'Giá bị giữ nhưng áp lực bán vẫn tồn tại; người muốn bán có thể không bán được, nên cần chú ý rủi ro thanh khoản.', correct: true, explain: 'Đúng. Khi kẹt sàn, thanh khoản biến mất và lệnh bán dồn sang phiên sau; đó là tác dụng phụ điển hình.' },
      { id: 'c', text: 'Giá trị cơ bản của doanh nghiệp đã được xác định tại mức sàn.', explain: 'Giá sàn là mức giới hạn kỹ thuật, không phải mức giá hợp lý của doanh nghiệp.' },
    ],
  },
  sources: [
    { title: 'Các quy định cần biết khi giao dịch chứng khoán tại Sở Giao dịch Chứng khoán TP.HCM', publisher: 'Sở Giao dịch Chứng khoán TP.HCM (HOSE), bản T2/2026', url: 'https://staticfile.hsx.vn/Uploads/UploadDocuments/2453338/HTGD_Quy%20dinh%20can%20biet%20khi%20GDCK%20tren%20HOSE_T2.2026.pdf' },
    { title: 'Trading curb', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Trading_curb' },
    { title: 'Margin (finance)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Margin_(finance)' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 24,
}
