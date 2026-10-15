import type { CaseStudy } from '../types'

/*
 * Số liệu mock của "xứ B" (đơn vị nghìn người; dân số trong độ tuổi lao động 1.000 cả hai quý):
 *   Quý trước: lực lượng lao động 600 = có việc 570 + thất nghiệp 30 → thất nghiệp 5,0% · tham gia LLLĐ 60,0% · việc làm/dân số 57,0%
 *   Quý này:   lực lượng lao động 570 = có việc 550 + thất nghiệp 20 → thất nghiệp 3,51% · tham gia 57,0% · việc làm/dân số 55,0%
 *   Ngoài lực lượng lao động: 400 → 430 (+30). Việc làm −20, thất nghiệp −10, lực lượng −30.
 *   Người rời lực lượng (30): đi học tiếp 12 · nghỉ hưu sớm/chăm sóc gia đình 10 · nản lòng (ngừng tìm việc) 8
 *   Nếu 30 người đó vẫn là "thất nghiệp": thất nghiệp = (20+30)/600 = 8,3%
 */
export const unemploymentParticipationReading: CaseStudy = {
  id: 'unemployment-participation-reading',
  title: 'Thất nghiệp giảm nhưng tỷ lệ tham gia lao động cũng giảm',
  domain: 'macro',
  level: 'fresher',
  minutes: 8,
  skills: ['macro', 'metric-definition', 'metric-decomposition'],
  question: 'Tỷ lệ thất nghiệp giảm từ 5,0% xuống 3,5%. Thị trường lao động có thật sự tốt lên không, khi tỷ lệ tham gia lực lượng lao động cũng giảm?',
  summary: 'Đọc tỷ lệ thất nghiệp kèm mẫu số của nó (lực lượng lao động), tỷ lệ tham gia và tỷ lệ việc làm trên dân số để tránh hiểu sai.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst vĩ mô. Báo cáo lao động quý của **xứ B** (giả định) có tiêu đề: *"Thất nghiệp giảm còn 3,5%, thấp nhất từ trước tới nay"*. Một đồng nghiệp đọc kỹ bảng chi tiết và để ý số người có việc **giảm**. Sếp hỏi bạn: *"Tin này tốt hay xấu?"*',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Xứ B và các con số là **giả định**. Định nghĩa thất nghiệp, lực lượng lao động theo chuẩn của tổ chức thống kê/ILO là có thật; nước nào cũng có quy ước riêng nên cần đọc ghi chú phương pháp.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Tỷ lệ thất nghiệp', value: '3,5%', delta: '−1,5 điểm % so với 5,0%', tone: 'positive' },
            { label: 'Tỷ lệ tham gia lực lượng lao động', value: '57,0%', delta: '−3,0 điểm % so với 60,0%', tone: 'negative' },
            { label: 'Số người có việc', value: '550 nghìn', delta: '−20 nghìn so với 570 nghìn', tone: 'negative' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: ai được tính vào mẫu số?',
      blocks: [
        {
          kind: 'text',
          md: 'Dân số trong độ tuổi lao động chia thành ba nhóm: **có việc**, **thất nghiệp** (không có việc, đang tìm và sẵn sàng làm) và **ngoài lực lượng lao động** (không làm, không tìm: học sinh, nghỉ hưu, chăm gia đình, nản lòng không tìm nữa). Tỷ lệ thất nghiệp chỉ tính trên **lực lượng lao động** (có việc + thất nghiệp), nên người rời khỏi lực lượng lao động làm tỷ lệ này giảm mà không ai tìm được việc.',
        },
        {
          kind: 'formula',
          expression: 'Thất nghiệp = Thất nghiệp ÷ (Có việc + Thất nghiệp) · Tham gia = (Có việc + Thất nghiệp) ÷ Dân số tuổi lao động',
          note: 'Thêm tỷ lệ việc làm trên dân số (có việc ÷ dân số) để thấy bức tranh không phụ thuộc ai "đang tìm việc".',
        },
        {
          kind: 'quiz',
          id: 'unemployment-participation-reading-q1',
          question: 'Một người mất việc, tìm 6 tháng không được rồi ngừng tìm hẳn. Điều gì xảy ra với tỷ lệ thất nghiệp?',
          options: [
            {
              id: 'a',
              text: 'Anh ta rời khỏi lực lượng lao động nên không còn được tính là thất nghiệp; tỷ lệ thất nghiệp có thể giảm dù không ai có việc mới.',
              correct: true,
              explain: 'Đúng. Theo định nghĩa thông dụng, thất nghiệp đòi hỏi đang chủ động tìm việc. Người ngừng tìm bị chuyển sang nhóm ngoài lực lượng lao động.',
            },
            {
              id: 'b',
              text: 'Anh ta vẫn tính là thất nghiệp mãi mãi.',
              explain: 'Không đúng với định nghĩa thông dụng; điều kiện đang tìm việc là bắt buộc.',
            },
            {
              id: 'c',
              text: 'Anh ta được tính là có việc.',
              explain: 'Không có việc nghĩa là không được tính vào nhóm có việc.',
            },
          ],
        },
      ],
    },
    {
      id: 'decompose',
      kind: 'analysis',
      title: 'Bước 1 — Phân rã ba nhóm',
      blocks: [
        {
          kind: 'table',
          title: 'Dân số trong độ tuổi lao động (nghìn người, tổng 1.000)',
          columns: [
            { key: 'g', label: 'Nhóm' },
            { key: 'prev', label: 'Quý trước', align: 'right' },
            { key: 'now', label: 'Quý này', align: 'right' },
            { key: 'diff', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { g: 'Có việc', prev: 570, now: 550, diff: '−20' },
            { g: 'Thất nghiệp', prev: 30, now: 20, diff: '−10' },
            { g: 'Lực lượng lao động', prev: 600, now: 570, diff: '−30' },
            { g: 'Ngoài lực lượng lao động', prev: 400, now: 430, diff: '+30' },
            { g: 'Tỷ lệ thất nghiệp', prev: '5,0%', now: '3,51%', diff: '−1,49 điểm %' },
            { g: 'Tỷ lệ tham gia', prev: '60,0%', now: '57,0%', diff: '−3,0 điểm %' },
            { g: 'Việc làm / dân số', prev: '57,0%', now: '55,0%', diff: '−2,0 điểm %' },
          ],
          highlight: [
            { row: 0, tone: 'negative' },
            { row: 3, tone: 'warning' },
            { row: 4, tone: 'positive' },
          ],
          caption: '550 + 20 = 570 = lực lượng lao động; 570 + 430 = 1.000. Số thất nghiệp giảm 10 nghìn nhưng số người có việc cũng giảm 20 nghìn.',
        },
        {
          kind: 'chart',
          title: 'Thất nghiệp thấp hơn nhưng tham gia và việc làm cũng thấp hơn',
          type: 'bar',
          xKey: 'metric',
          unit: '%',
          series: [
            { key: 'prev', label: 'Quý trước' },
            { key: 'now', label: 'Quý này' },
          ],
          data: [
            { metric: 'Thất nghiệp', prev: 5, now: 3.51 },
            { metric: 'Tham gia LLLĐ', prev: 60, now: 57 },
            { metric: 'Việc làm / dân số', prev: 57, now: 55 },
          ],
          caption: 'Chỉ một trong ba chỉ số cải thiện.',
        },
        {
          kind: 'quiz',
          id: 'unemployment-participation-reading-q2',
          question: 'Chỉ số nào giúp phát hiện việc "thất nghiệp giảm nhờ người rời thị trường lao động" tốt nhất?',
          options: [
            {
              id: 'a',
              text: 'Tỷ lệ việc làm trên dân số và tỷ lệ tham gia lực lượng lao động.',
              correct: true,
              explain: 'Đúng. Cả hai không phụ thuộc vào việc ai đang tìm việc; chúng cùng giảm cho thấy tình hình không tốt lên.',
            },
            {
              id: 'b',
              text: 'Chỉ riêng tỷ lệ thất nghiệp.',
              explain: 'Tỷ lệ thất nghiệp có mẫu số thay đổi khi người rời lực lượng, nên không đủ.',
            },
            {
              id: 'c',
              text: 'Tổng dân số của quốc gia.',
              explain: 'Tổng dân số không cho biết cơ cấu có việc, thất nghiệp, ngoài lực lượng.',
            },
          ],
        },
      ],
    },
    {
      id: 'exit',
      kind: 'analysis',
      title: 'Bước 2 — Những người rời lực lượng lao động là ai?',
      blocks: [
        {
          kind: 'table',
          title: '30 nghìn người rời lực lượng lao động',
          columns: [
            { key: 'why', label: 'Lý do' },
            { key: 'n', label: 'Nghìn người', align: 'right' },
            { key: 'read', label: 'Cách đọc' },
          ],
          rows: [
            { why: 'Đi học tiếp', n: 12, read: 'Thường trung tính hoặc tích cực dài hạn' },
            { why: 'Nghỉ hưu sớm / chăm sóc gia đình', n: 10, read: 'Cần xem có tự nguyện không' },
            { why: 'Nản lòng, ngừng tìm việc', n: 8, read: 'Tín hiệu xấu: thất nghiệp "ẩn"' },
            { why: 'Tổng', n: 30, read: '12 + 10 + 8 = 30' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Nếu cả 30 nghìn người vẫn được tính là thất nghiệp, tỷ lệ sẽ là (20 + 30) ÷ 600 = 8,3%, cao hơn 5,0% của quý trước.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Không phải ai rời lực lượng lao động cũng là tín hiệu xấu: người đi học là đầu tư. Việc cần làm là **tách lý do**. Nhiều thống kê có thêm các thước đo thất nghiệp mở rộng (gồm người nản lòng, làm ít giờ hơn mong muốn); hãy xem phương pháp của cơ quan thống kê bạn dùng.',
        },
        {
          kind: 'quiz',
          id: 'unemployment-participation-reading-q3',
          question: 'Bản tin nên viết thế nào cho trung thực?',
          options: [
            {
              id: 'a',
              text: '"Thất nghiệp giảm còn 3,5% nhưng số người có việc giảm 20 nghìn và tỷ lệ tham gia giảm 3 điểm %; một phần giảm do người rời lực lượng lao động."',
              correct: true,
              explain: 'Đúng. Nêu cả số người có việc và tỷ lệ tham gia để người đọc không hiểu nhầm.',
            },
            {
              id: 'b',
              text: '"Thị trường lao động tốt lên rõ rệt."',
              explain: 'Số người có việc và tỷ lệ việc làm trên dân số đều giảm, nên "tốt lên rõ rệt" không được hỗ trợ.',
            },
            {
              id: 'c',
              text: '"Thị trường lao động đang sụp đổ."',
              explain: 'Kết luận cực đoan cũng không có căn cứ; một phần người rời là đi học.',
            },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp tối ưu',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận:** Tỷ lệ thất nghiệp giảm 1,5 điểm % chủ yếu vì lực lượng lao động thu hẹp 30 nghìn người, trong khi số người có việc giảm 20 nghìn. Tình hình không rõ ràng là tốt lên. Cần theo dõi cùng lúc tỷ lệ thất nghiệp, tỷ lệ tham gia và tỷ lệ việc làm trên dân số.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Báo cáo lao động luôn có ba chỉ số: thất nghiệp, tham gia lực lượng lao động, việc làm trên dân số',
              owner: 'Analyst vĩ mô',
              metric: 'Bảng ba chỉ số lao động',
              threshold: '100% báo cáo quý',
            },
            {
              action: 'Phân tích nhóm rời lực lượng lao động theo lý do và độ tuổi',
              owner: 'Nhà nghiên cứu thị trường lao động',
              metric: 'Tỷ trọng người nản lòng trong nhóm rời',
              threshold: 'Cảnh báo khi > 25%',
            },
            {
              action: 'Thêm ghi chú phương pháp (định nghĩa thất nghiệp, tuổi lao động) dưới mọi biểu đồ',
              owner: 'Biên tập viên nghiên cứu',
              metric: 'Số biểu đồ lao động có ghi chú phương pháp',
              threshold: '100%',
            },
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
            {
              title: 'Đọc thất nghiệp giảm là việc làm tăng',
              why: 'Tỷ lệ thất nghiệp có thể giảm vì người rời lực lượng lao động, dù số việc làm không tăng.',
              instead: 'Xem số người có việc và tỷ lệ việc làm trên dân số.',
            },
            {
              title: 'Coi mọi người rời lực lượng là "nản lòng"',
              why: 'Người đi học, nghỉ hưu, chăm con là các nhóm khác nhau với ý nghĩa khác nhau.',
              instead: 'Tách theo lý do trước khi kết luận.',
            },
            {
              title: 'So thất nghiệp giữa các nước không xem định nghĩa',
              why: 'Tuổi lao động, tiêu chí tìm việc, cách điều tra khác nhau giữa nước.',
              instead: 'Dùng nguồn so sánh quốc tế đã hài hòa định nghĩa hoặc đọc ghi chú phương pháp.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Tỷ lệ thất nghiệp có mẫu số là lực lượng lao động; người rời lực lượng làm tỷ lệ giảm mà không tạo thêm việc làm.',
    'Đọc kèm tỷ lệ tham gia và tỷ lệ việc làm trên dân số, hai chỉ số không phụ thuộc ai đang tìm việc.',
    'Tách lý do rời lực lượng lao động (học, nghỉ hưu, nản lòng) trước khi nói tình hình tốt hay xấu.',
  ],
  references: [
    {
      title: 'Labour force participation rate',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Labor_force_participation_rate',
      note: 'Định nghĩa tỷ lệ tham gia lực lượng lao động và cách nó liên hệ với thất nghiệp.',
    },
    {
      title: 'Unemployment',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Unemployment',
      note: 'Các định nghĩa thất nghiệp, các thước đo mở rộng và hạn chế của tỷ lệ thất nghiệp chính thức.',
    },
  ],
}
