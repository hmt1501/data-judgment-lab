import type { CaseStudy } from '../types'

/*
 * Chỉ số, ngành và số liệu hoàn toàn giả định (không phải khuyến nghị đầu tư).
 * Số mock, đã kiểm tra khớp nhau (đóng góp = tỷ trọng × lợi suất, đơn vị điểm phần trăm):
 *   Ngân hàng 30% × +6,0% = +1,80 ; BĐS 18% × −9,0% = −1,62 ; Vật liệu 10% × +2,0% = +0,20 ; Bán lẻ 12% × +1,0% = +0,12
 *   Năng lượng 15% × −1,0% = −0,15 ; Công nghệ 8% × +3,0% = +0,24 ; Khác 7% × −1,0% = −0,07
 *   Tổng tỷ trọng 100% ; tổng đóng góp = +0,52 → chỉ số +0,52%.
 *   Trong Ngân hàng: nhóm 3 mã lớn 18% × +8% = +1,44 ; còn lại 12% × +3% = +0,36 → 1,80 ✓
 *   Trong BĐS: mã X 6% × −22% = −1,32 ; còn lại 12% × −2,5% = −0,30 → −1,62 ✓
 *   BĐS ngoài mã X: lợi suất −2,5% (thay vì −9,0% cả ngành).
 */
export const sectorRotationContributionSegments: CaseStudy = {
  id: 'sector-rotation-contribution-segments',
  title: 'Ngân hàng tăng, bất động sản giảm: "dòng tiền xoay ngành" hay một mã lớn kéo cả ngành?',
  domain: 'securities',
  level: 'junior',
  minutes: 12,
  skills: ['metric-decomposition', 'segmentation', 'causal'],
  question:
    'Trong tháng, nhóm ngân hàng tăng mạnh còn bất động sản giảm sâu, trong khi chỉ số chung gần như đi ngang. Có thật là dòng tiền đang xoay từ bất động sản sang ngân hàng vì kỳ vọng lãi suất không?',
  summary:
    'Phân rã lợi suất chỉ số thành đóng góp theo ngành, nhìn vào bên trong từng ngành để tìm mã lớn chi phối, rồi biến giả thuyết lãi suất thành các dự báo kiểm tra được.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Một bản tin thị trường viết: *"Dòng tiền rút khỏi bất động sản, chuyển sang ngân hàng do kỳ vọng lãi suất tăng."* Bạn được giao kiểm tra xem câu chuyện này có đứng vững không. Chỉ số chung giả định trong tháng tăng **+0,52%**.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Chỉ số, tỷ trọng và lợi suất đều **giả định, mô phỏng**. Bài không phải khuyến nghị đầu tư.',
        },
        {
          kind: 'table',
          title: 'Lợi suất tháng và tỷ trọng theo ngành',
          columns: [
            { key: 'sector', label: 'Ngành' },
            { key: 'w', label: 'Tỷ trọng đầu tháng', align: 'right' },
            { key: 'r', label: 'Lợi suất tháng', align: 'right' },
          ],
          rows: [
            { sector: 'Ngân hàng', w: '30%', r: '+6,0%' },
            { sector: 'Bất động sản', w: '18%', r: '−9,0%' },
            { sector: 'Năng lượng', w: '15%', r: '−1,0%' },
            { sector: 'Bán lẻ', w: '12%', r: '+1,0%' },
            { sector: 'Vật liệu', w: '10%', r: '+2,0%' },
            { sector: 'Công nghệ', w: '8%', r: '+3,0%' },
            { sector: 'Khác', w: '7%', r: '−1,0%' },
          ],
          highlight: [
            { row: 0, tone: 'positive' },
            { row: 1, tone: 'negative' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: đóng góp = tỷ trọng × lợi suất',
      blocks: [
        {
          kind: 'formula',
          expression: 'Đóng góp của nhóm = Tỷ trọng đầu kỳ × Lợi suất nhóm',
          note: 'Tổng đóng góp bằng lợi suất chỉ số (với chỉ số tính theo vốn hóa). Một ngành "giảm 9%" chỉ ảnh hưởng chỉ số theo tỷ trọng của nó, và có thể do vài mã lớn.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Phân rã** lợi suất chỉ số thành đóng góp theo ngành.',
            '**Nhìn vào trong** ngành: lợi suất ngành là trung bình của những mã nào?',
            '**Phát biểu giả thuyết** (lãi suất kỳ vọng tăng) thành dự báo cho các ngành khác và điều kiện bác bỏ.',
          ],
        },
        {
          kind: 'quiz',
          id: 'sector-rotation-q1',
          question: 'Ngân hàng +6,0% và bất động sản −9,0% là bằng chứng "xoay dòng tiền" nếu thiếu thêm điều gì?',
          options: [
            { id: 'a', text: 'Không cần gì thêm, chênh lệch lợi suất đã đủ.', explain: 'Hai ngành tăng và giảm cùng lúc không chứng minh tiền chuyển từ ngành này sang ngành kia.' },
            { id: 'b', text: 'Dữ liệu dòng tiền/giao dịch ròng theo nhóm nhà đầu tư và mức độ lan tỏa trong từng ngành.', correct: true, explain: 'Đúng. "Xoay" là phát biểu về dòng tiền; cần giá trị mua ròng theo ngành và xem mức biến động có lan rộng hay do vài mã.' },
            { id: 'c', text: 'Lợi suất của ngành thứ ba bất kỳ.', explain: 'Một ngành bất kỳ không phân biệt được giả thuyết.' },
          ],
        },
      ],
    },
    {
      id: 'contribution',
      kind: 'analysis',
      title: 'Bước 1 — Phân rã đóng góp theo ngành',
      blocks: [
        {
          kind: 'table',
          title: 'Đóng góp vào lợi suất chỉ số (điểm phần trăm)',
          columns: [
            { key: 'sector', label: 'Ngành' },
            { key: 'c', label: 'Đóng góp', align: 'right' },
          ],
          rows: [
            { sector: 'Ngân hàng (30% × +6,0%)', c: '+1,80' },
            { sector: 'Bất động sản (18% × −9,0%)', c: '−1,62' },
            { sector: 'Công nghệ (8% × +3,0%)', c: '+0,24' },
            { sector: 'Vật liệu (10% × +2,0%)', c: '+0,20' },
            { sector: 'Bán lẻ (12% × +1,0%)', c: '+0,12' },
            { sector: 'Khác (7% × −1,0%)', c: '−0,07' },
            { sector: 'Năng lượng (15% × −1,0%)', c: '−0,15' },
            { sector: 'Tổng = lợi suất chỉ số', c: '+0,52' },
          ],
          highlight: [{ row: 7, tone: 'neutral' }],
          caption: 'Hai ngành gần như triệt tiêu nhau (+1,80 và −1,62); chỉ số đi ngang là kết quả của hai chuyển động lớn ngược chiều.',
        },
      ],
    },
    {
      id: 'inside',
      kind: 'analysis',
      title: 'Bước 2 — Nhìn bên trong ngành: ai kéo ngành?',
      blocks: [
        {
          kind: 'table',
          title: 'Chia nhỏ hai ngành',
          columns: [
            { key: 'seg', label: 'Phân khúc' },
            { key: 'w', label: 'Tỷ trọng chỉ số', align: 'right' },
            { key: 'r', label: 'Lợi suất', align: 'right' },
            { key: 'c', label: 'Đóng góp', align: 'right' },
          ],
          rows: [
            { seg: 'Ngân hàng: 3 mã lớn', w: '18%', r: '+8,0%', c: '+1,44' },
            { seg: 'Ngân hàng: còn lại', w: '12%', r: '+3,0%', c: '+0,36' },
            { seg: 'BĐS: mã X', w: '6%', r: '−22,0%', c: '−1,32' },
            { seg: 'BĐS: còn lại', w: '12%', r: '−2,5%', c: '−0,30' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Bỏ mã X, bất động sản chỉ giảm 2,5% chứ không phải 9,0%. Hai tháng sau tình hình có thể khác nếu mã X có tin riêng (kết quả kinh doanh, pháp lý).',
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Lợi suất ngành là trung bình của những mã khác nhau',
          md: 'Với chỉ số tính theo vốn hóa, một mã lớn có thể đóng góp phần lớn cho ngành. "Cả ngành giảm" và "một mã giảm mạnh" cần phân biệt bằng độ lan tỏa: bao nhiêu phần trăm mã trong ngành giảm?',
        },
      ],
    },
    {
      id: 'hypothesis',
      kind: 'analysis',
      title: 'Bước 3 — Biến giả thuyết lãi suất thành dự báo kiểm tra được',
      blocks: [
        {
          kind: 'table',
          title: 'Nếu "kỳ vọng lãi suất tăng" là nguyên nhân, ta sẽ thấy gì?',
          columns: [
            { key: 'pred', label: 'Dự báo' },
            { key: 'data', label: 'Dữ liệu cần xem' },
            { key: 'refute', label: 'Bác bỏ nếu' },
          ],
          rows: [
            { pred: 'Mọi mã BĐS (không chỉ X) đều yếu hơn thị trường', data: 'Tỷ lệ mã BĐS giảm; lợi suất trung vị', refute: 'Chỉ 1–2 mã giảm, trung vị ngành gần 0' },
            { pred: 'Ngành khác nhạy lãi suất (xây dựng, vật liệu) cũng yếu', data: 'Lợi suất ngành liên quan', refute: 'Vật liệu +2,0% đi ngược' },
            { pred: 'Lãi suất liên ngân hàng/trái phiếu dịch chuyển trước hoặc cùng lúc', data: 'Chuỗi lãi suất theo ngày', refute: 'Lãi suất đi ngang suốt tháng' },
          ],
          caption: 'Trong dữ liệu giả định, vật liệu tăng và trung vị BĐS (bỏ mã X) chỉ giảm nhẹ: giả thuyết lãi suất chưa được ủng hộ mạnh.',
        },
        {
          kind: 'quiz',
          id: 'sector-rotation-q2',
          question: 'Phát hiện nào làm giảm sức thuyết phục của câu chuyện "cả ngành bất động sản bị bán tháo vì lãi suất"?',
          options: [
            { id: 'a', text: 'Mã X chiếm 6% chỉ số và giảm 22,0%; các mã còn lại chỉ giảm 2,5%.', correct: true, explain: 'Đúng. Phần lớn mức giảm đến từ một mã nên khó đổ cho yếu tố chung như lãi suất.' },
            { id: 'b', text: 'Ngân hàng có tỷ trọng lớn nhất chỉ số.', explain: 'Tỷ trọng ngân hàng không nói gì về nguyên nhân giảm của bất động sản.' },
            { id: 'c', text: 'Chỉ số chung tăng 0,52%.', explain: 'Chỉ số tăng nhẹ là kết quả bù trừ, không loại trừ được giả thuyết.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: bản tin có kiểm chứng thay vì kể chuyện',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận trên dữ liệu giả định:** ngân hàng đóng góp +1,80 điểm, trong đó 3 mã lớn đóng góp +1,44; bất động sản đóng góp −1,62, trong đó riêng mã X −1,32. Câu chuyện "xoay dòng tiền vì lãi suất" **chưa đủ bằng chứng**: phải thêm dữ liệu dòng tiền ròng theo ngành và độ lan tỏa.',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Luôn kèm bảng đóng góp theo ngành và theo nhóm mã lớn khi viết bản tin diễn biến thị trường', owner: 'Analyst thị trường', metric: 'Đóng góp theo ngành (điểm %)', threshold: 'Một mã đóng góp > 50% biến động ngành thì phải nêu tên và lý do' },
            { action: 'Đo độ lan tỏa: tỷ lệ mã tăng/giảm và lợi suất trung vị của ngành', owner: 'Analyst thị trường', metric: 'Trung vị lợi suất ngành', threshold: 'Chênh lệch trung vị so với bình quân gia quyền > 3 điểm % thì ngành bị mã lớn chi phối' },
            { action: 'Chỉ dùng cụm "dòng tiền xoay" khi có giá trị mua/bán ròng theo ngành làm bằng chứng', owner: 'Trưởng nhóm nghiên cứu', metric: 'Giá trị mua ròng theo ngành', threshold: 'Dòng ròng cùng chiều với lợi suất ở ≥ 2 tháng liên tiếp' },
          ],
        },
        {
          kind: 'quiz',
          id: 'sector-rotation-q3',
          question: 'Muốn nói "tiền xoay sang ngân hàng", dữ liệu nào trực tiếp nhất?',
          options: [
            { id: 'a', text: 'Giá trị mua ròng của các nhóm nhà đầu tư vào ngân hàng và bán ròng bất động sản trong tháng.', correct: true, explain: 'Đúng. Đây là dữ liệu về dòng tiền thật, đúng thứ mà từ "xoay" khẳng định.' },
            { id: 'b', text: 'Lợi suất của hai ngành ngược chiều nhau.', explain: 'Ngược chiều không chứng minh tiền chuyển từ ngành này sang ngành kia.' },
            { id: 'c', text: 'Số lượng bài báo nhắc tới lãi suất.', explain: 'Khối lượng tin tức không đo dòng tiền.' },
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
            { title: 'Đọc lợi suất ngành mà bỏ qua tỷ trọng', why: 'Ngành giảm sâu nhưng tỷ trọng nhỏ ít ảnh hưởng chỉ số; ngược lại.', instead: 'Luôn nhân tỷ trọng với lợi suất để ra đóng góp.' },
            { title: 'Gán nguyên nhân chung cho biến động do một mã', why: 'Mã vốn hóa lớn có tin riêng có thể kéo cả ngành.', instead: 'Tách mã lớn nhất, xem lại ngành khi loại mã đó.' },
            { title: 'Dùng "xoay vòng" như sự thật khi mới có giá', why: 'Giá hai ngành ngược chiều chưa phải dữ liệu dòng tiền.', instead: 'Chỉ khẳng định khi có giá trị mua/bán ròng và độ lan tỏa.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Lợi suất chỉ số bằng tổng đóng góp (tỷ trọng × lợi suất) của các ngành.',
    'Nhìn vào bên trong ngành: một mã lớn có thể giải thích phần lớn biến động của ngành.',
    'Giả thuyết lãi suất phải thành dự báo cụ thể có dữ liệu và điều kiện bác bỏ.',
  ],
  references: [
    { title: 'Sector rotation', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Sector_rotation', note: 'Giới thiệu khái niệm chuyển dịch giữa các ngành theo chu kỳ kinh tế, nền để phân biệt "xoay ngành" với biến động ngẫu nhiên.' },
    { title: 'Stock market index', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Stock_market_index', note: 'Giải thích chỉ số tính theo vốn hóa nên mã lớn có tỷ trọng và đóng góp lớn.' },
    { title: 'Correlation does not imply causation', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation', note: 'Nhắc rằng hai chuyển động ngược chiều chưa chứng minh nguyên nhân chung.' },
  ],
}
