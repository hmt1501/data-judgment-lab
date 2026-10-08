import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — một tuần, đơn có ngày cam kết giao rơi trong tuần, đã kiểm tra khớp nhau:
 *   Có cam kết trong tuần 10.400 = đã phát 10.000 + chưa phát 400 (khách hủy trước khi phát 150 + kho chưa xuất kịp 250)
 *   Đã phát 10.000 = giao thành công 9.500 + không thành 500 (hoàn/thất bại 380 + đang phát dở 120)
 *   Giao thành công 9.500 = ngay lần phát đầu 9.120 (+ lần 2 trở đi 380)
 *   Giao thành công trong hoặc trước ngày cam kết: 8.840 (trễ 660 → 8.840 + 660 = 9.500 ✓)
 *   Tử số A = 8.840 (≤ ngày cam kết) · tử số B = 9.120 (thành công ngay lần phát đầu)
 *   Mẫu số: D1 = 9.500 · D2 = 10.000 · D3 = 10.400
 *     A/D1 = 93,1% · A/D2 = 88,4% · A/D3 = 85,0%
 *     B/D1 = 96,0% · B/D2 = 91,2% · B/D3 = 87,7%
 *   Team vận hành báo B/D1 = 96,0% · team CSKH báo A/D3 = 85,0% · chênh 11,0 điểm %
 *   Định nghĩa chốt: A / (D3 − 150 khách hủy) = 8.840 / 10.250 = 86,2%
 *   Báo cáo sáng thứ Hai (chưa đủ scan hãng): 8.600 / 10.250 = 83,9% → chốt T+3: 8.600 + 240 scan về trễ = 8.840 ✓
 *   Chỉ số chẩn đoán: giao thành công lần phát đầu 9.120 / 10.000 đã phát = 91,2%
 */
export const onTimeRateDefinition: CaseStudy = {
  id: 'on-time-rate-definition',
  title: 'Hai team, hai con số giao đúng hẹn: 96% hay 85%?',
  domain: 'logistics',
  level: 'fresher',
  minutes: 9,
  skills: ['metric-definition', 'operations'],
  question:
    'Team Vận hành báo tỷ lệ giao đúng hẹn tuần này là 96,0%, team CSKH báo 85,0%. Cả hai đều đúng theo cách tính của mình. Nên chốt định nghĩa thế nào để mọi người cùng một con số?',
  summary:
    'Truy vết vì sao một chỉ số có hai con số: mẫu số khác nhau (đơn giao thành công, đơn đã phát, đơn có cam kết) và mốc thời gian khác nhau (lần phát đầu, ngày cam kết). Chốt tử số, mẫu số, cửa sổ thời gian và cách xử lý ngoại lệ.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng.* Bạn là analyst của một sàn thương mại điện tử có đội giao hàng riêng. Trong buổi họp tuần, Giám đốc vận hành trình chiếu **96,0%** giao đúng hẹn; ngay sau đó Giám đốc CSKH mở slide của mình với **85,0%**. Hai người nhìn nhau, rồi quay sang bạn: *"Số nào đúng? Tuần sau em chốt một con số duy nhất."*',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Tỷ lệ đúng hẹn — team Vận hành', value: '96,0%', tone: 'positive' },
            { label: 'Tỷ lệ đúng hẹn — team CSKH', value: '85,0%', tone: 'warning' },
            { label: 'Chênh lệch', value: '11,0 điểm %', tone: 'negative' },
            { label: 'Đơn có cam kết giao trong tuần', value: '10.400', tone: 'neutral' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu',
          md: 'Không phải chọn số "đẹp hơn" hay "xấu hơn". Cần **hiểu vì sao hai số khác nhau**, rồi viết ra một định nghĩa đủ rõ để ai tính cũng ra cùng kết quả và dùng để ra quyết định.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: một chỉ số = tử số, mẫu số, mốc thời gian, cửa sổ',
      blocks: [
        {
          kind: 'formula',
          expression: 'Tỷ lệ đúng hẹn = Số đơn thỏa điều kiện "đúng hẹn" / Số đơn đủ điều kiện được tính  (trong một cửa sổ thời gian xác định)',
          note: 'Cùng một tên chỉ số nhưng khác một trong bốn thành phần là đã thành chỉ số khác. Cách viết định nghĩa theo "cái gì được đo, ở đâu, trong cửa sổ nào" cũng là ý tưởng cốt lõi của [SLI trong sách SRE của Google](https://sre.google/sre-book/service-level-objectives/).',
        },
        {
          kind: 'list',
          style: 'check',
          items: [
            '**Tử số**: "đúng hẹn" là giao thành công, hay chỉ cần phát lần đầu? So với ngày nào?',
            '**Mẫu số**: đơn đã phát, đơn giao thành công, hay mọi đơn đã hứa với khách? Đơn hủy, đơn hoàn, đơn chưa ra kho xử lý thế nào?',
            '**Mốc thời gian**: ngày cam kết ban đầu với khách, ngày hẹn đã dời, hay ngày kế hoạch nội bộ? Giờ địa phương hay UTC?',
            '**Cửa sổ**: đơn được xếp vào tuần theo ngày tạo, ngày phát hay ngày cam kết? Chốt số sau bao lâu?',
          ],
        },
        {
          kind: 'quiz',
          id: 'on-time-rate-definition-q1',
          question: 'Hai giám đốc cùng yêu cầu bạn "chọn số đúng". Bước đầu tiên hợp lý nhất là gì?',
          options: [
            {
              id: 'a',
              text: 'Lấy trung bình hai con số: (96,0% + 85,0%) / 2 ≈ 90,5%.',
              explain:
                'Trung bình của hai chỉ số được định nghĩa khác nhau không đo được thứ gì. Con số mới không ai kiểm chứng được và vẫn không trả lời câu hỏi "khách có nhận hàng đúng hẹn không".',
            },
            {
              id: 'b',
              text: 'Chọn số của team nào có quy mô dữ liệu lớn hơn.',
              explain:
                'Quy mô không quyết định tính đúng. Vấn đề ở đây là định nghĩa, không phải kích thước mẫu.',
            },
            {
              id: 'c',
              text: 'Hỏi từng team họ đếm gì ở tử số, gì ở mẫu số, mốc thời gian nào, rồi tính lại cả hai bằng cùng một bảng đơn để thấy phần chênh đến từ đâu.',
              correct: true,
              explain:
                'Đúng. Khi hai số khác nhau, phải bóc tách từng thành phần định nghĩa. Dựa trên cùng một bảng đơn, bạn thấy ngay mỗi khác biệt đóng góp bao nhiêu điểm % vào mức chênh 11,0.',
            },
          ],
        },
      ],
    },
    {
      id: 'reproduce',
      kind: 'analysis',
      title: 'Bước 1 — Tái hiện hai con số từ cùng một bảng đơn',
      blocks: [
        {
          kind: 'table',
          title: 'Hai team đang đếm gì',
          columns: [
            { key: 'team', label: 'Team' },
            { key: 'numerator', label: 'Tử số' },
            { key: 'denominator', label: 'Mẫu số' },
            { key: 'result', label: 'Kết quả', align: 'right' },
          ],
          rows: [
            {
              team: 'Vận hành',
              numerator: 'Giao thành công ngay lần phát đầu: 9.120',
              denominator: 'Đơn giao thành công: 9.500',
              result: '96,0%',
            },
            {
              team: 'CSKH',
              numerator: 'Giao thành công trong hoặc trước ngày cam kết: 8.840',
              denominator: 'Mọi đơn có ngày cam kết trong tuần: 10.400',
              result: '85,0%',
            },
          ],
          caption: 'Cả hai đều tính đúng theo định nghĩa riêng; khác nhau ở cả tử số lẫn mẫu số.',
        },
        {
          kind: 'text',
          md: 'Để biết mỗi khác biệt tác động bao nhiêu, lập ma trận **2 tử số × 3 mẫu số** trên cùng dữ liệu. Ba mẫu số: D1 = đơn giao thành công (9.500), D2 = đơn đã phát (10.000), D3 = đơn có cam kết trong tuần (10.400).',
        },
        {
          kind: 'chart',
          title: 'Cùng một tuần, sáu cách tính',
          type: 'bar',
          xKey: 'denominator',
          unit: '%',
          series: [
            { key: 'commit', label: 'Tử số: giao thành công ≤ ngày cam kết' },
            { key: 'first', label: 'Tử số: thành công ngay lần phát đầu' },
          ],
          data: [
            { denominator: 'D1: đơn giao thành công', commit: 93.1, first: 96.0 },
            { denominator: 'D2: đơn đã phát', commit: 88.4, first: 91.2 },
            { denominator: 'D3: đơn có cam kết', commit: 85.0, first: 87.7 },
          ],
          caption: 'Mẫu số D1 → D3 làm số giảm khoảng 8 điểm %; đổi tử số làm số tăng khoảng 3 điểm %. Cả hai chỉ chạm nhau ở hai góc: 96,0% và 85,0%.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Mẫu số "đơn giao thành công" là bẫy sống sót: đơn không giao được hay giao chưa xong biến mất khỏi phép tính, nên con số luôn đẹp. Hãy tự hỏi *"đơn nào đang vắng mặt khỏi mẫu số, và vì sao?"* mỗi khi gặp một tỷ lệ cao bất thường.',
        },
      ],
    },
    {
      id: 'denominator',
      kind: 'analysis',
      title: 'Bước 2 — Mẫu số: ai nằm trong, ai nằm ngoài',
      blocks: [
        {
          kind: 'table',
          title: 'Từ 10.400 đơn có cam kết đến 8.840 đơn đúng hẹn',
          columns: [
            { key: 'group', label: 'Nhóm đơn' },
            { key: 'orders', label: 'Số đơn', align: 'right' },
            { key: 'rule', label: 'Nên tính vào mẫu số?' },
          ],
          rows: [
            { group: 'Giao thành công, không trễ cam kết', orders: '8.840', rule: 'Có (đồng thời là tử số)' },
            { group: 'Giao thành công nhưng sau ngày cam kết', orders: '660', rule: 'Có: khách nhận trễ' },
            { group: 'Hoàn hoặc thất bại sau khi phát', orders: '380', rule: 'Có: lời hứa không thực hiện được' },
            { group: 'Đang phát dở, đã quá ngày cam kết', orders: '120', rule: 'Có: coi là chưa đúng hẹn' },
            { group: 'Kho chưa xuất kịp, chưa phát', orders: '250', rule: 'Có: lỗi của mình, trễ từ đầu' },
            { group: 'Khách hủy trước khi phát', orders: '150', rule: 'Không: không còn lời hứa nào để thực hiện' },
            { group: 'Tổng đơn có cam kết', orders: '10.400', rule: '' },
          ],
          highlight: [
            { row: 4, tone: 'warning' },
            { row: 5, tone: 'neutral' },
          ],
          caption:
            'Mẫu số của team Vận hành (9.500) bỏ ngay 750 đơn (380 + 120 + 250) mà khách đã được hứa nhưng không nhận hàng đúng hẹn; mẫu số của CSKH (10.400) lại gồm cả 150 đơn khách tự hủy.',
        },
        {
          kind: 'quiz',
          id: 'on-time-rate-definition-q2',
          question: '250 đơn "kho chưa xuất kịp, chưa phát" nên được xử lý thế nào trong mẫu số?',
          options: [
            {
              id: 'a',
              text: 'Giữ trong mẫu số và coi là chưa đúng hẹn khi đã quá ngày cam kết.',
              correct: true,
              explain:
                'Đúng. Khách đã được hứa một ngày giao và mình không thực hiện được. Loại các đơn này khỏi mẫu số (như cách "đơn đã phát" làm) sẽ giấu đúng khâu đang gây trễ nhiều nhất của nội bộ.',
            },
            {
              id: 'b',
              text: 'Loại khỏi mẫu số vì đơn chưa phát thì team giao hàng chưa chịu trách nhiệm.',
              explain:
                'Chỉ số này đo trải nghiệm của khách với lời hứa, không đo riêng khâu giao cuối. Trách nhiệm từng khâu nên xem ở chỉ số chẩn đoán riêng, không nên làm biến mất đơn khỏi chỉ số chính.',
            },
            {
              id: 'c',
              text: 'Chuyển hết sang tử số vì các đơn này chắc chắn sẽ giao được sau.',
              explain:
                'Giao được sau không có nghĩa là giao đúng hẹn. Đưa vào tử số làm tỷ lệ đúng hẹn cao giả và che mất vấn đề năng lực kho.',
            },
          ],
        },
      ],
    },
    {
      id: 'timing',
      kind: 'analysis',
      title: 'Bước 3 — Mốc thời gian và cửa sổ: cam kết, lần phát đầu, và độ trễ dữ liệu',
      blocks: [
        {
          kind: 'text',
          md: '**Mốc thời gian.** "Lần phát đầu" là mốc của team giao hàng; "ngày cam kết" là mốc của khách. Đơn có thể giao thành công ngay lần phát đầu nhưng vẫn trễ cam kết nếu kho xuất muộn (B = 9.120 so với A = 8.840 ở trên). Dùng **ngày cam kết gốc** (lúc đặt hàng), không dùng ngày đã dời, vì dời hẹn là cách dễ nhất để làm đẹp số.',
        },
        {
          kind: 'text',
          md: '**Cửa sổ.** Xếp đơn vào tuần theo *ngày cam kết*, không theo ngày tạo, để mỗi lời hứa chỉ thuộc về một kỳ và đã đến hạn khi báo cáo. Ngoài ra, scan trạng thái từ hãng thường về trễ, nên cần một mốc chốt số:',
        },
        {
          kind: 'table',
          title: 'Cùng một tuần, báo cáo ở hai thời điểm',
          columns: [
            { key: 'time', label: 'Thời điểm lấy số' },
            { key: 'numerator', label: 'Đơn đúng hẹn', align: 'right' },
            { key: 'denominator', label: 'Mẫu số', align: 'right' },
            { key: 'rate', label: 'Tỷ lệ', align: 'right' },
          ],
          rows: [
            { time: 'Sáng thứ Hai (scan hãng chưa về đủ)', numerator: '8.600', denominator: '10.250', rate: '83,9%' },
            { time: 'Chốt sau 3 ngày (T+3)', numerator: '8.840', denominator: '10.250', rate: '86,2%' },
          ],
          highlight: [{ row: 1, tone: 'positive' }],
          caption: '240 đơn đã giao đúng hẹn nhưng trạng thái từ hãng về chậm. Số chốt T+3 mới là số so sánh được giữa các tuần.',
        },
        {
          kind: 'quiz',
          id: 'on-time-rate-definition-q3',
          question: 'Giám đốc muốn dùng ngày hẹn đã được dời (do khách đổi lịch hoặc do hệ thống tự cộng ngày) làm mốc đúng hẹn. Bạn nên đề xuất gì?',
          options: [
            {
              id: 'a',
              text: 'Đồng ý, vì dùng ngày hẹn mới nhất phản ánh đúng thỏa thuận hiện tại với khách.',
              explain:
                'Nếu hệ thống tự cộng ngày khi kho không kịp thì chỉ số sẽ luôn đẹp mà khách vẫn nhận trễ. Dời hẹn do khách yêu cầu là ngoại lệ chính đáng, nhưng nó cần được tách riêng và ghi lý do.',
            },
            {
              id: 'b',
              text: 'Dùng ngày cam kết gốc làm mốc chính; chỉ chấp nhận loại khỏi mẫu số các đơn dời hẹn do chính khách yêu cầu và ghi lại lý do; theo dõi riêng tỷ lệ đơn bị dời hẹn do nội bộ.',
              correct: true,
              explain:
                'Đúng. Mốc gốc chống lại việc làm đẹp số; ngoại lệ do khách được xử lý minh bạch; còn tỷ lệ dời hẹn nội bộ trở thành chỉ số chẩn đoán riêng về năng lực vận hành.',
            },
            {
              id: 'c',
              text: 'Bỏ hẳn chỉ số đúng hẹn vì mốc thời gian quá dễ bị tranh cãi.',
              explain:
                'Khó định nghĩa không phải lý do để bỏ. Tỷ lệ giao đúng hẹn là chỉ số gắn trực tiếp với trải nghiệm khách; chỉ cần viết định nghĩa đủ rõ.',
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
          md: '**Định nghĩa chốt cho chỉ số chính "Giao đúng hẹn":** tỷ lệ đơn giao thành công **không muộn hơn 23:59 ngày cam kết gốc** (giờ địa phương), trên mọi đơn có ngày cam kết rơi trong tuần, **trừ đơn khách hủy trước khi phát** và đơn dời hẹn do khách yêu cầu có ghi lý do. Đơn hoàn, đơn thất bại, đơn chưa phát hoặc đang phát dở sau ngày cam kết được tính là chưa đúng hẹn. Số chốt sau T+3.',
        },
        {
          kind: 'formula',
          expression: 'Giao đúng hẹn = 8.840 / (10.400 − 150) = 8.840 / 10.250 = 86,2%',
          note: 'Con số duy nhất của tuần này. Hai con số cũ (96,0% và 85,0%) vẫn hữu ích nhưng chuyển thành chỉ số phụ có tên riêng, không được gọi chung là "giao đúng hẹn".',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Viết tài liệu định nghĩa chỉ số (tử số, mẫu số, ngoại lệ, mốc thời gian, cửa sổ, thời điểm chốt) và đặt làm nguồn duy nhất cho dashboard và slide họp',
              owner: 'Analyst + Giám đốc vận hành + Giám đốc CSKH',
              metric: 'Số dashboard/báo cáo dùng cùng một định nghĩa',
              threshold: '100% báo cáo có tên chỉ số kèm link định nghĩa',
            },
            {
              action: 'Giữ "tỷ lệ giao thành công ngay lần phát đầu" (9.120 / 10.000 = 91,2%) làm chỉ số chẩn đoán riêng cho khâu giao cuối; thêm "tỷ lệ đơn xuất kho kịp" cho khâu kho',
              owner: 'Vận hành',
              metric: 'Tỷ lệ phát lần đầu thành công; tỷ lệ xuất kho kịp',
              threshold: 'Phát lần đầu ≥ 92%; xuất kho kịp ≥ 97% (ngưỡng đề xuất, chốt sau 4 tuần đo)',
            },
            {
              action: 'Cố định ngày cam kết gốc trong bảng dữ liệu (không ghi đè khi dời hẹn); thêm trường lý do dời hẹn để tách dời do khách và dời do nội bộ',
              owner: 'Data engineer + Product',
              metric: 'Tỷ lệ đơn có ngày cam kết gốc bất biến; tỷ lệ dời hẹn do nội bộ',
              threshold: '100% đơn có ngày cam kết gốc; dời hẹn nội bộ < 2% đơn',
            },
            {
              action: 'Chỉ công bố số tuần sau mốc chốt T+3; số sáng thứ Hai chỉ dùng nội bộ và gắn nhãn "tạm tính"',
              owner: 'Analytics',
              metric: 'Chênh lệch giữa số tạm tính và số chốt',
              threshold: 'Theo dõi; đạt ≤ 1 điểm % sau khi hãng đồng bộ scan sớm hơn',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Định nghĩa chốt bám vào góc nhìn của khách (*"hàng có đến đúng ngày tôi được hứa không?"*), nên không bỏ sót đơn nào mà khách đã được hứa. Tách chỉ số chẩn đoán cho từng khâu giữ lại giá trị của con số 96,0% mà không để nó đóng vai chỉ số chính. Với tài liệu định nghĩa duy nhất, lần sau hai team sẽ khác nhau về *hành động*, không phải về *cách đếm*.',
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
              title: 'Mẫu số chỉ gồm đơn thành công',
              why: 'Đơn hoàn, đơn thất bại, đơn kẹt ở kho biến mất khỏi phép tính, nên tỷ lệ luôn cao dù khách vẫn nhận trễ hoặc không nhận được.',
              instead: 'Lấy mẫu số là mọi đơn đã hứa với khách trong kỳ, rồi loại có chủ đích các ngoại lệ (khách hủy) và ghi rõ lý do.',
            },
            {
              title: 'Dùng ngày hẹn có thể bị ghi đè',
              why: 'Khi ngày hẹn được cộng thêm mỗi lần kho không kịp, đơn nào cũng "đúng hẹn" và chỉ số mất khả năng phát hiện vấn đề.',
              instead: 'Lưu ngày cam kết gốc bất biến; dời hẹn ghi thành sự kiện riêng có lý do và theo dõi tỷ lệ dời.',
            },
            {
              title: 'Chốt số khi dữ liệu chưa về đủ',
              why: 'Scan của hãng về trễ khiến số sáng thứ Hai thấp hơn số thật; so tuần này với tuần trước (đã đầy đủ) tạo ra "xu hướng giảm" không có thật.',
              instead: 'Định nghĩa thời điểm chốt (ví dụ T+3), chỉ so sánh các số cùng độ chín, và gắn nhãn tạm tính cho số sớm hơn.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Hai con số cho cùng một tên chỉ số thường khác nhau ở tử số, mẫu số, mốc thời gian hoặc cửa sổ; tái hiện cả hai từ cùng một bảng dữ liệu để thấy từng phần chênh.',
    'Mẫu số nên là mọi lời hứa đã đưa ra cho khách (trừ ngoại lệ được ghi rõ); mẫu số chỉ gồm đơn thành công sẽ làm chỉ số cao giả.',
    'Viết định nghĩa chốt gồm ngày cam kết gốc, ngoại lệ, cửa sổ và thời điểm chốt; giữ các con số cũ làm chỉ số chẩn đoán có tên riêng.',
  ],
  references: [
    {
      title: 'On-time delivery rate',
      publisher: 'Metabase',
      url: 'https://www.metabase.com/metrics/on-time-delivery-rate',
      note: 'Công thức giao đúng hẹn, lưu ngày hứa tại thời điểm gửi hàng (không dùng ngày ước tính bị cập nhật) và theo dõi độ phủ scan giao hàng.',
    },
    {
      title: 'Service Level Objectives',
      publisher: 'Google — Site Reliability Engineering book',
      url: 'https://sre.google/sre-book/service-level-objectives/',
      note: 'Cách định nghĩa một chỉ số dịch vụ (SLI) rõ ràng: đo cái gì, tổng hợp qua cửa sổ nào, rồi mới đặt mục tiêu.',
    },
  ],
}
