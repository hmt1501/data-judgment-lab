import type { CaseStudy } from '../types'

/*
 * Công ty và số liệu hoàn toàn giả định (không phải khuyến nghị đầu tư).
 * Công ty C: 200 triệu cổ phiếu lưu hành, 40 triệu cổ phiếu hết hạn hạn chế chuyển nhượng = 20% (tăng cung tiềm năng).
 * Lợi suất vượt trội TB theo cửa sổ (so với chỉ số), T = ngày hết hạn:
 *   10 sự kiện hết hạn : [-20,-6] −0,8% ; [-5,-1] −2,1% ; [0,+5] −1,4% ; [+6,+20] +1,0% → cộng dồn T+20 = −3,3%
 *   30 mã đối chứng    : +0,1% ; −0,2% ; 0,0% ; +0,3% → cộng dồn +0,2%
 *   Chênh (sự kiện − đối chứng) cộng dồn: −3,3 − 0,2 = −3,5 điểm %
 *   Cộng dồn sự kiện: T-6 = −0,8 ; T-1 = −2,9 ; T+5 = −4,3 ; T+20 = −3,3
 *   Cộng dồn đối chứng: 0,1 ; −0,1 ; −0,1 ; 0,2
 *   Theo quy mô: <10% cổ phiếu (n=4) CAR[-5,+5] −0,8% ; ≥10% (n=6) −5,3% → (4×−0,8 + 6×−5,3)/10 = −3,5% = −2,1 + −1,4 ✓
 */
export const lockupExpirySupplyOverhang: CaseStudy = {
  id: 'lockup-expiry-supply-overhang',
  title: 'Giá giảm quanh ngày hết hạn hạn chế chuyển nhượng: áp lực cung hay chỉ là trùng hợp?',
  domain: 'securities',
  level: 'junior',
  minutes: 11,
  skills: ['causal', 'segmentation', 'liquidity'],
  question:
    'Cổ phiếu Công ty C giảm trong những phiên quanh ngày 40 triệu cổ phiếu hết hạn hạn chế chuyển nhượng. Giá giảm có thật là do kỳ vọng cổ đông bán ra, và bằng cách nào tách ảnh hưởng này khỏi biến động thị trường chung?',
  summary:
    'Thiết kế một event study đơn giản: nhóm sự kiện, nhóm đối chứng, các cửa sổ thời gian, rồi chia theo quy mô lượng cổ phiếu mở khóa để kiểm tra giả thuyết áp lực cung.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Công ty C có 200 triệu cổ phiếu lưu hành. Ngày T, **40 triệu cổ phiếu (20%)** của cổ đông trước đó bị hạn chế chuyển nhượng được tự do giao dịch. Giá C giảm trong tuần trước và sau ngày này. Đồng nghiệp nói: *"Chắc họ bán ra nên giá giảm."* Nhiệm vụ của bạn là kiểm tra.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Mọi công ty và số liệu đều **giả định, mô phỏng**. Việc hết hạn hạn chế chuyển nhượng chỉ cho phép bán, không có nghĩa chắc chắn sẽ bán. Bài không phải khuyến nghị đầu tư.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Cổ phiếu lưu hành', value: '200 triệu' },
            { label: 'Cổ phiếu mở khóa tại ngày T', value: '40 triệu', note: '20% lượng lưu hành' },
            { label: 'Giá C quanh sự kiện', value: '−4,3%', tone: 'negative', note: 'vượt trội so với chỉ số, T−20 đến T+5 (giả định)' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: sự kiện, đối chứng, cửa sổ',
      blocks: [
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Sự kiện**: mốc T được biết trước (đã công bố), nên giá có thể điều chỉnh *trước* T, không chỉ sau.',
            '**Đối chứng**: nhóm mã tương tự không có sự kiện trong cùng thời gian, để loại biến động thị trường chung.',
            '**Cửa sổ**: chia thành giai đoạn trước, ngay quanh và sau T; đo lợi suất vượt trội so với chỉ số.',
            '**Phân khúc**: chia theo quy mô lượng mở khóa; nếu áp lực cung là nguyên nhân thì lượng càng lớn, tác động càng mạnh.',
          ],
        },
        {
          kind: 'quiz',
          id: 'lockup-q1',
          question: 'Tại sao phải nhìn cả giai đoạn TRƯỚC ngày hết hạn?',
          options: [
            { id: 'a', text: 'Vì ngày hết hạn được biết từ trước nên nhà đầu tư có thể bán trước hoặc giá điều chỉnh sớm.', correct: true, explain: 'Đúng. Thông tin đã công khai, thị trường có thể phản ứng trước ngày T; chỉ nhìn sau T sẽ bỏ lỡ phần này.' },
            { id: 'b', text: 'Vì dữ liệu trước ngày hết hạn dễ lấy hơn.', explain: 'Đây là lý do thuận tiện, không phải lý do phương pháp.' },
            { id: 'c', text: 'Vì sau ngày T giá không còn thay đổi.', explain: 'Giá vẫn thay đổi sau T; vấn đề là phản ứng có thể xảy ra trước.' },
          ],
        },
      ],
    },
    {
      id: 'event',
      kind: 'analysis',
      title: 'Bước 1 — Nhóm sự kiện so với nhóm đối chứng',
      blocks: [
        {
          kind: 'table',
          title: 'Lợi suất vượt trội trung bình theo cửa sổ (so với chỉ số)',
          columns: [
            { key: 'win', label: 'Cửa sổ (phiên)' },
            { key: 'ev', label: '10 sự kiện hết hạn', align: 'right' },
            { key: 'ct', label: '30 mã đối chứng', align: 'right' },
            { key: 'diff', label: 'Chênh', align: 'right' },
          ],
          rows: [
            { win: '[−20, −6]', ev: '−0,8%', ct: '+0,1%', diff: '−0,9' },
            { win: '[−5, −1]', ev: '−2,1%', ct: '−0,2%', diff: '−1,9' },
            { win: '[0, +5]', ev: '−1,4%', ct: '0,0%', diff: '−1,4' },
            { win: '[+6, +20]', ev: '+1,0%', ct: '+0,3%', diff: '+0,7' },
            { win: 'Cộng dồn [−20, +20]', ev: '−3,3%', ct: '+0,2%', diff: '−3,5' },
          ],
          highlight: [{ row: 4, tone: 'negative' }],
          caption: 'Giá giảm nhiều nhất ngay trước và quanh T, rồi hồi nhẹ sau T+5. Đối chứng gần như phẳng.',
        },
        {
          kind: 'chart',
          title: 'Lợi suất vượt trội cộng dồn (%) — sự kiện so với đối chứng',
          type: 'line',
          xKey: 'day',
          series: [
            { key: 'event', label: 'Sự kiện hết hạn' },
            { key: 'control', label: 'Đối chứng' },
          ],
          unit: '%',
          data: [
            { day: 'T-20', event: 0, control: 0 },
            { day: 'T-6', event: -0.8, control: 0.1 },
            { day: 'T-1', event: -2.9, control: -0.1 },
            { day: 'T+5', event: -4.3, control: -0.1 },
            { day: 'T+20', event: -3.3, control: 0.2 },
          ],
          marker: { x: 'T-1', label: 'Sát ngày hết hạn' },
          caption: 'Sau T+5 giá hồi một phần: dấu hiệu tác động tạm thời hơn là thay đổi vĩnh viễn (với mẫu nhỏ này, chỉ là gợi ý).',
        },
      ],
    },
    {
      id: 'size',
      kind: 'analysis',
      title: 'Bước 2 — Chia theo quy mô lượng mở khóa',
      blocks: [
        {
          kind: 'table',
          title: 'Lợi suất vượt trội [−5, +5] theo tỷ lệ cổ phiếu mở khóa',
          columns: [
            { key: 'seg', label: 'Nhóm' },
            { key: 'n', label: 'Số sự kiện', align: 'right' },
            { key: 'car', label: 'Lợi suất vượt trội TB', align: 'right' },
          ],
          rows: [
            { seg: 'Mở khóa < 10% cổ phiếu lưu hành', n: 4, car: '−0,8%' },
            { seg: 'Mở khóa ≥ 10% cổ phiếu lưu hành', n: 6, car: '−5,3%' },
            { seg: 'Tất cả', n: 10, car: '−3,5%' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
          caption: 'Trung bình có trọng số (4×−0,8 + 6×−5,3)/10 = −3,5% khớp với tổng của hai cửa sổ [−5,−1] và [0,+5] (−2,1 và −1,4).',
        },
        {
          kind: 'text',
          md: 'Mối quan hệ "lượng càng lớn, giá giảm càng mạnh" ủng hộ giả thuyết áp lực cung, nhưng **chưa chứng minh**. Nhóm mở khóa lớn cũng có thể là công ty nhỏ, thanh khoản thấp, hoặc mới niêm yết — những yếu tố khác biệt sẵn. Cần kiểm tra thêm: khối lượng giao dịch tăng bất thường quanh T, và tin khác (báo cáo quý) trong cửa sổ.',
        },
        {
          kind: 'quiz',
          id: 'lockup-q2',
          question: 'Giả thuyết nào về C có thể bị bác bỏ bằng dữ liệu cụ thể?',
          options: [
            { id: 'a', text: 'Nếu là áp lực cung, khối lượng giao dịch sẽ tăng bất thường quanh T và nhóm mở khóa ≥ 10% sẽ giảm mạnh hơn nhóm < 10%.', correct: true, explain: 'Đúng. Có dự báo định lượng (khối lượng, so sánh giữa nhóm) và có điều kiện sai.' },
            { id: 'b', text: 'Cổ đông lớn chắc chắn muốn thoái vốn nên giá phải giảm.', explain: 'Phát biểu về ý định không kiểm chứng được bằng dữ liệu giá.' },
            { id: 'c', text: 'Giá giảm là do thị trường chung xấu.', explain: 'Giả thuyết hợp lý nhưng đã được xử lý bằng lợi suất vượt trội so với chỉ số; cần nêu rõ dữ liệu nào bác bỏ.' },
          ],
        },
      ],
    },
    {
      id: 'confound',
      kind: 'analysis',
      title: 'Bước 3 — Loại trừ cách giải thích khác',
      blocks: [
        {
          kind: 'table',
          title: 'Các giải thích thay thế và cách kiểm tra',
          columns: [
            { key: 'alt', label: 'Giải thích khác' },
            { key: 'check', label: 'Kiểm tra bằng' },
            { key: 'sig', label: 'Nếu đúng ta sẽ thấy' },
          ],
          rows: [
            { alt: 'Tin kết quả kinh doanh nằm trong cửa sổ', check: 'Lịch công bố báo cáo của 10 sự kiện', sig: 'Các sự kiện có báo cáo trong cửa sổ giảm mạnh hơn hẳn' },
            { alt: 'Thanh khoản thấp khuếch đại biến động', check: 'Giá trị giao dịch bình quân/ngày', sig: 'Giảm mạnh tập trung ở mã thanh khoản thấp bất kể mức mở khóa' },
            { alt: 'Biến động ngành, không phải mã', check: 'So với chỉ số ngành thay vì chỉ số chung', sig: 'Lợi suất vượt trội so với ngành gần 0' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mẫu nhỏ, nhiều nhiễu',
          md: '10 sự kiện là mẫu rất nhỏ. Dùng kết quả để lập giả thuyết và thiết kế kiểm tra lớn hơn, không để đưa ra kết luận mạnh.',
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: quy trình đánh giá sự kiện hết hạn hạn chế chuyển nhượng',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận trên dữ liệu giả định:** giá nhóm sự kiện thấp hơn đối chứng khoảng 3,5 điểm % trong cửa sổ [−20, +20], tập trung trước và quanh T, mạnh hơn khi mở khóa ≥ 10% cổ phiếu. Điều này **ủng hộ nhưng chưa chứng minh** giả thuyết áp lực cung; các giải thích khác (tin báo cáo, thanh khoản) cần loại trừ.',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Lập lịch sự kiện hết hạn và chạy event study với nhóm đối chứng cùng ngành, cùng quy mô vốn hóa', owner: 'Analyst cổ phiếu', metric: 'Lợi suất vượt trội cộng dồn [−20, +20]', threshold: 'Chênh với đối chứng < −2 điểm % ở ≥ 30 sự kiện mới coi là tín hiệu' },
            { action: 'Đo khối lượng giao dịch bất thường quanh T để xác nhận có bán thực sự', owner: 'Analyst cổ phiếu', metric: 'Khối lượng ngày / trung bình 20 phiên trước', threshold: '> 2 lần ở các phiên T đến T+3' },
            { action: 'Đánh dấu và loại các sự kiện trùng báo cáo kết quả kinh doanh trong cửa sổ', owner: 'Trưởng nhóm nghiên cứu', metric: 'Tỷ lệ sự kiện bị nhiễu bởi tin khác', threshold: '< 20% mẫu sau khi lọc' },
          ],
        },
        {
          kind: 'quiz',
          id: 'lockup-q3',
          question: 'Để đỡ nhầm "tác động của hết hạn" với "thị trường chung giảm", bạn làm gì?',
          options: [
            { id: 'a', text: 'Dùng lợi suất vượt trội so với chỉ số (hoặc ngành) và nhóm đối chứng cùng thời gian.', correct: true, explain: 'Đúng. Hai lớp kiểm soát này loại phần biến động chung.' },
            { id: 'b', text: 'Chỉ lấy các ngày thị trường tăng.', explain: 'Chọn ngày theo kết quả làm sai lệch mẫu.' },
            { id: 'c', text: 'Tăng cỡ chữ của biểu đồ giá.', explain: 'Không liên quan đến kiểm soát nhiễu.' },
          ],
        },
      ],
    },
    {
      id: 'pitfalls',
      kind: 'pitfalls',
      title: 'Bẫy thường gặp',
      blocks: [
        {
          kind: 'pitfalls',
          items: [
            { title: 'Chỉ nhìn sau ngày sự kiện', why: 'Sự kiện được biết trước nên giá điều chỉnh sớm; nhìn sau T bỏ sót phần lớn tác động.', instead: 'Dùng cửa sổ bao trùm cả trước và sau T.' },
            { title: 'Coi mở khóa bằng bán ra', why: 'Cổ đông có thể giữ cổ phiếu; dữ liệu giá không phải dữ liệu bán.', instead: 'Kiểm tra khối lượng giao dịch và giao dịch của cổ đông lớn (nếu có công bố).' },
            { title: 'Không có nhóm đối chứng', why: 'Giá giảm cùng thị trường sẽ bị gán cho sự kiện.', instead: 'Lợi suất vượt trội so với chỉ số và nhóm mã tương tự.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Tách tác động của sự kiện khỏi thị trường chung bằng lợi suất vượt trội và nhóm đối chứng.',
    'Chọn cửa sổ bao trùm trước và sau sự kiện, vì thị trường biết ngày hết hạn từ trước.',
    'Chia theo quy mô mở khóa và loại trừ cách giải thích khác trước khi nói "áp lực cung".',
  ],
  references: [
    { title: 'Lock-up period', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Lock-up_period', note: 'Giải thích hạn chế chuyển nhượng sau IPO hoặc phát hành, nền cho khái niệm cổ phiếu mở khóa.' },
    { title: 'Event study', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Event_study', note: 'Mô tả phương pháp cửa sổ sự kiện và lợi suất vượt trội dùng ở bước 1.' },
    { title: 'Abnormal return', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Abnormal_return', note: 'Định nghĩa lợi suất vượt trội so với lợi suất kỳ vọng, cơ sở của phép so với chỉ số và đối chứng.' },
  ],
}
