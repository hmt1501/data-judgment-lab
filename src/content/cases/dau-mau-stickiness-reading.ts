import type { CaseStudy } from '../types'

/*
 * Số liệu mock của app "NoteKeep" (đã kiểm tra khớp nhau):
 *   Tháng trước: DAU trung bình 100.000 · MAU (30 ngày) 500.000 → DAU/MAU 20,0% (≈ 6,0 ngày hoạt động/30)
 *   Tháng này: DAU trung bình 96.000 · MAU 400.000 → DAU/MAU 24,0% (≈ 7,2 ngày/30)
 *   DAU theo thứ tháng này (nghìn): T2 110 · T3 112 · T4 110 · T5 108 · T6 100 · T7 70 · CN 62 → tổng 672 → TB 96,0
 *   Thay đổi: DAU −4,0% · MAU −20,0% · DAU/MAU +4,0 điểm %
 *   Trung bình ngày làm việc (T2–T6): (110+112+110+108+100)/5 = 108,0 · cuối tuần (T7, CN): 66,0
 */
export const dauMauStickinessReading: CaseStudy = {
  id: 'dau-mau-stickiness-reading',
  title: 'DAU/MAU tăng nhưng số người dùng lại giảm',
  domain: 'mobile',
  level: 'fresher',
  minutes: 8,
  skills: ['metric-definition', 'retention', 'seasonality'],
  question: 'DAU/MAU tăng từ 20% lên 24%, báo cáo gọi đó là "tăng gắn kết". Nhưng DAU lại giảm. Nên đọc con số này thế nào?',
  summary: 'Đọc đúng DAU/MAU: cửa sổ thời gian của MAU, chu kỳ theo tuần của DAU và vì sao tỷ lệ tăng không có nghĩa app đang khỏe hơn.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst sản phẩm của **NoteKeep**, một app ghi chú giả định. Báo cáo tháng ghi: *"DAU/MAU tăng từ 20% lên 24% — mức gắn kết tăng 20%!"*. Nhưng khi bạn mở bảng số, DAU trung bình lại giảm từ 100.000 xuống 96.000. Giám đốc sản phẩm hỏi: *"Vậy app đang tốt lên hay xấu đi?"*',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'NoteKeep và các số liệu trong bài là **giả định**. Định nghĩa "người dùng hoạt động" của mỗi app khác nhau; hãy xác định rõ trước khi so sánh.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'DAU trung bình', value: '96.000', delta: '−4,0% so với 100.000', tone: 'negative' },
            { label: 'MAU (30 ngày)', value: '400.000', delta: '−20,0% so với 500.000', tone: 'negative' },
            { label: 'DAU/MAU', value: '24,0%', delta: '+4,0 điểm % so với 20,0%', tone: 'positive' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: tỷ lệ chỉ là tỷ lệ',
      blocks: [
        {
          kind: 'text',
          md: 'DAU/MAU (độ dính, *stickiness*) cho biết trung bình một người dùng hoạt động trong tháng quay lại app bao nhiêu ngày. Với DAU/MAU = 24%, đó là khoảng 7,2 ngày trên 30. Tỷ lệ này tăng khi **tử số tăng** hoặc khi **mẫu số giảm**. Trường hợp thứ hai (mất người dùng ít gắn bó) làm tỷ lệ tăng dù app đang yếu đi.',
        },
        {
          kind: 'formula',
          expression: 'DAU/MAU = DAU trung bình trong kỳ ÷ MAU của cửa sổ 30 ngày cùng kỳ',
          note: 'Cần ghi rõ: DAU trung bình trên mọi ngày hay chỉ ngày làm việc; MAU là 30 ngày liên tục (rolling) hay tháng lịch. Lệch định nghĩa giữa hai kỳ làm so sánh vô nghĩa.',
        },
        {
          kind: 'quiz',
          id: 'dau-mau-stickiness-reading-q1',
          question: 'DAU/MAU tăng từ 20% lên 24% nhưng cả DAU và MAU đều giảm. Cách đọc nào đúng nhất?',
          options: [
            {
              id: 'a',
              text: 'MAU giảm nhanh hơn DAU (−20% so với −4%), tức đã mất nhiều người dùng ít gắn bó; nhóm còn lại gắn bó hơn nhưng app đang nhỏ đi.',
              correct: true,
              explain: 'Đúng. Tỷ lệ tăng vì mẫu số giảm nhiều hơn tử số. Cần đọc cả hai số tuyệt đối, không chỉ tỷ lệ.',
            },
            {
              id: 'b',
              text: 'Mức gắn kết tăng 20%, app đang khỏe lên.',
              explain: 'Đây là cách đọc từ tỷ lệ riêng lẻ. Khi cả DAU và MAU giảm, kết luận "khỏe lên" chưa được hỗ trợ.',
            },
            {
              id: 'c',
              text: 'Số liệu chắc chắn sai vì DAU giảm mà tỷ lệ tăng.',
              explain: 'Không sai: tỷ lệ có thể tăng nếu mẫu số giảm nhanh hơn tử số.',
            },
          ],
        },
      ],
    },
    {
      id: 'week-cycle',
      kind: 'analysis',
      title: 'Bước 1 — DAU có chu kỳ theo tuần',
      blocks: [
        {
          kind: 'chart',
          title: 'DAU theo thứ trong tuần (nghìn người, trung bình tháng này)',
          type: 'bar',
          xKey: 'day',
          unit: ' nghìn',
          series: [{ key: 'dau', label: 'DAU' }],
          data: [
            { day: 'T2', dau: 110 },
            { day: 'T3', dau: 112 },
            { day: 'T4', dau: 110 },
            { day: 'T5', dau: 108 },
            { day: 'T6', dau: 100 },
            { day: 'T7', dau: 70 },
            { day: 'CN', dau: 62 },
          ],
          caption: 'Tổng 672 nghìn / 7 ngày = 96,0 nghìn. Ngày làm việc trung bình 108 nghìn, cuối tuần 66 nghìn: app của dân văn phòng.',
        },
        {
          kind: 'text',
          md: 'Với app có chu kỳ tuần mạnh, so DAU của một thứ Bảy với một thứ Tư là so hai thứ khác loại. Hãy so **cùng thứ**, hoặc dùng trung bình đủ 7 ngày. Báo cáo ngày cũng dễ bị hiểu sai nếu kỳ báo cáo có số ngày cuối tuần khác nhau.',
        },
        {
          kind: 'quiz',
          id: 'dau-mau-stickiness-reading-q2',
          question: 'Báo cáo nhanh ghi: "DAU thứ Bảy là 70.000, giảm 36% so với thứ Tư (110.000), nguy rồi!". Bạn nên làm gì?',
          options: [
            {
              id: 'a',
              text: 'So thứ Bảy này với các thứ Bảy trước đó, vì app có chu kỳ tuần; thứ Bảy thấp hơn thứ Tư là bình thường.',
              correct: true,
              explain: 'Đúng. Cuối tuần thấp hơn ngày làm việc là đặc điểm của app, không phải sự cố. Chỉ so cùng thứ mới thấy biến động bất thường.',
            },
            {
              id: 'b',
              text: 'Báo động và dừng mọi chiến dịch marketing.',
              explain: 'Phản ứng quá mức vì so hai ngày không cùng loại.',
            },
            {
              id: 'c',
              text: 'Loại bỏ dữ liệu cuối tuần khỏi mọi báo cáo.',
              explain: 'Bỏ dữ liệu cuối tuần làm mất thông tin. Cần so sánh đúng loại, không loại bỏ.',
            },
          ],
        },
      ],
    },
    {
      id: 'window',
      kind: 'analysis',
      title: 'Bước 2 — Đọc DAU/MAU kèm số tuyệt đối',
      blocks: [
        {
          kind: 'table',
          title: 'Bốn con số cần đọc cùng nhau',
          columns: [
            { key: 'metric', label: 'Metric' },
            { key: 'prev', label: 'Tháng trước', align: 'right' },
            { key: 'now', label: 'Tháng này', align: 'right' },
            { key: 'delta', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { metric: 'DAU trung bình', prev: '100.000', now: '96.000', delta: '−4,0%' },
            { metric: 'MAU (30 ngày)', prev: '500.000', now: '400.000', delta: '−20,0%' },
            { metric: 'DAU/MAU', prev: '20,0%', now: '24,0%', delta: '+4,0 điểm %' },
            { metric: 'Số ngày hoạt động trung bình / 30', prev: '6,0', now: '7,2', delta: '+1,2' },
          ],
          highlight: [
            { row: 1, tone: 'negative' },
            { row: 2, tone: 'warning' },
          ],
          caption: 'Người dùng còn lại hoạt động nhiều ngày hơn, nhưng app đã mất 100.000 người dùng tháng (−20%).',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'DAU/MAU hợp để so sánh app có cùng loại sử dụng, ít hợp để so app dùng hằng ngày với app dùng theo nhu cầu. Hãy xem thêm retention theo cohort để biết người dùng mất đi là nhóm mới cài chưa kịp giữ chân hay nhóm cũ.',
        },
        {
          kind: 'quiz',
          id: 'dau-mau-stickiness-reading-q3',
          question: 'Muốn kiểm tra "người dùng ít gắn bó rời đi" có đúng không, bước tiếp theo hợp lý nhất là gì?',
          options: [
            {
              id: 'a',
              text: 'Phân tách MAU thành nhóm người dùng mới (cài trong 30 ngày) và nhóm cũ, rồi xem số lượng và số ngày hoạt động của từng nhóm.',
              correct: true,
              explain: 'Đúng. Phân khúc theo thời điểm cài giúp biết mất người dùng ở nhóm nào và vì sao mẫu số giảm.',
            },
            {
              id: 'b',
              text: 'Chỉ xem DAU/MAU tuần sau.',
              explain: 'Thêm một điểm dữ liệu cùng loại không trả lời câu hỏi về cấu thành mẫu số.',
            },
            {
              id: 'c',
              text: 'Chuyển sang đo DAU/MAU theo tháng lịch.',
              explain: 'Đổi cửa sổ không giải thích vì sao MAU giảm.',
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
          md: '**Kết luận cho giám đốc:** DAU/MAU tăng 4 điểm % nhưng app **không** khỏe lên: DAU giảm 4%, MAU giảm 20%. Tỷ lệ tăng vì mất nhiều người dùng ít hoạt động. Cần tìm hiểu nhóm người dùng đã rời và chuẩn hóa cách báo cáo DAU, MAU, DAU/MAU cùng nhau.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Báo cáo DAU, MAU và DAU/MAU trong cùng một bảng, kèm định nghĩa người dùng hoạt động và cửa sổ MAU',
              owner: 'Analyst sản phẩm',
              metric: 'Bảng DAU/MAU kèm số tuyệt đối',
              threshold: 'Một định nghĩa duy nhất, ghi chú dưới bảng',
            },
            {
              action: 'Phân tích MAU theo nhóm mới/cũ và nguồn cài để tìm nhóm bị mất',
              owner: 'Analyst tăng trưởng',
              metric: 'MAU theo nhóm mới/cũ',
              threshold: 'Tìm ra nhóm chiếm ≥ 70% mức giảm 100.000 MAU',
            },
            {
              action: 'So DAU theo cùng thứ trong tuần hoặc trung bình 7 ngày khi báo cáo hằng ngày',
              owner: 'Analyst vận hành dashboard',
              metric: 'DAU so với cùng thứ tuần trước',
              threshold: 'Cảnh báo khi lệch quá 10% so với cùng thứ 4 tuần gần nhất',
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
              title: 'Chỉ báo cáo tỷ lệ mà không có số tuyệt đối',
              why: 'Tỷ lệ tăng khi mẫu số giảm, che đi việc app mất người dùng.',
              instead: 'Báo cáo tử số, mẫu số và tỷ lệ cùng nhau.',
            },
            {
              title: 'So DAU giữa hai ngày không cùng thứ',
              why: 'App có chu kỳ tuần: cuối tuần và ngày làm việc không cùng mặt bằng.',
              instead: 'So cùng thứ hoặc trung bình tuần.',
            },
            {
              title: 'Đổi cửa sổ MAU giữa các kỳ',
              why: 'MAU 28 ngày và 30 ngày hoặc tháng lịch cho các số khác nhau; so sánh chéo làm sai lệch.',
              instead: 'Giữ một cửa sổ cố định và ghi rõ trên báo cáo.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'DAU/MAU tăng khi tử số tăng hoặc mẫu số giảm; phải đọc kèm số tuyệt đối của DAU và MAU.',
    'DAU có chu kỳ theo tuần: so cùng thứ hoặc trung bình 7 ngày, đừng so thứ Bảy với thứ Tư.',
    'Cố định định nghĩa người dùng hoạt động và cửa sổ MAU trước khi so sánh các kỳ.',
  ],
  references: [
    {
      title: 'Active users',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Active_users',
      note: 'Định nghĩa người dùng hoạt động, DAU, MAU và những tranh cãi về cách đếm.',
    },
    {
      title: 'Seasonal adjustment',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Seasonal_adjustment',
      note: 'Cách loại bỏ chu kỳ lặp lại (ví dụ theo tuần, theo mùa) để thấy xu hướng thật trong chuỗi thời gian.',
    },
  ],
}
