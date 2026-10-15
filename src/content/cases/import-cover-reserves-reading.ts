import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — ba nền kinh tế giả định A, B, C, đơn vị tỷ USD. Mức dự trữ tính bằng số tháng nhập khẩu = dự trữ / (nhập khẩu năm / 12).
 *   Tại cuối năm hiện tại:
 *     A: dự trữ 80 · nhập khẩu 360/năm (30/tháng) → 2,67 tháng · nợ nước ngoài ngắn hạn 25 → dự trữ/nợ ngắn hạn 3,2
 *     B: dự trữ 60 · nhập khẩu 120/năm (10/tháng) → 6,00 tháng · nợ ngắn hạn 40 → 1,5
 *     C: dự trữ 200 · nhập khẩu 960/năm (80/tháng) → 2,50 tháng · nợ ngắn hạn 60 → 3,33
 *   Độ nhạy của C: nhập khẩu phục vụ tiêu dùng nội địa 480 (40/tháng) → 200/40 = 5,0 tháng · dự trữ có thể huy động nhanh 160 → 160/80 = 2,0 · cả hai 160/40 = 4,0
 *   Xu hướng của A (dự trữ / nhập khẩu năm → tháng): 2020 90/270 = 4,00 · 2021 100/300 = 4,00 · 2022 90/340 = 3,18 · 2023 82/350 = 2,81 · 2024 80/360 = 2,67
 *   Cầu nối 2021 → 2024 của A (4,00 → 2,67): giữ nhập khẩu 300, dự trữ 80 → 3,20 (tác động dự trữ −0,80) · nhập khẩu 300 → 360 → 2,67 (tác động nhập khẩu −0,53) · tổng −1,33 ✓
 */
export const importCoverReservesReading: CaseStudy = {
  id: 'import-cover-reserves-reading',
  title: 'Dự trữ ngoại hối đủ cho mấy tháng nhập khẩu?',
  domain: 'macro',
  level: 'junior',
  minutes: 11,
  skills: ['macro', 'metric-definition', 'segmentation'],
  question:
    'Dự trữ ngoại hối của ba nền kinh tế đo bằng "số tháng nhập khẩu" cho ba kết quả khác nhau. Nền kinh tế nào an toàn hơn, và con số này nhạy với định nghĩa tử số và mẫu số đến mức nào?',
  summary:
    'Đọc chỉ tiêu dự trữ/nhập khẩu bằng cách tách tử số và mẫu số, so sánh nhiều nền kinh tế, phân rã xu hướng một nền kinh tế, và đối chiếu thêm chỉ tiêu dự trữ/nợ ngắn hạn.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng: ba nền kinh tế A, B, C và mọi con số đều là giả định để minh họa.* Một báo cáo thị trường mới nổi xếp hạng độ an toàn dự trữ ngoại hối theo **số tháng nhập khẩu mà dự trữ có thể chi trả**. Một quy ước thường được nhắc là khoảng 3 tháng, nhưng đây chỉ là mốc tham khảo, không phải ngưỡng cứng. A có 2,67 tháng và đang giảm, B có 6,0 tháng, C có 2,5 tháng dù dự trữ lớn nhất. Bạn được yêu cầu viết một đoạn nhận định cho bản tin vĩ mô hằng tuần.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'A: dự trữ / nhập khẩu', value: '2,67 tháng', tone: 'warning', note: 'Dự trữ 80 tỷ USD' },
            { label: 'B: dự trữ / nhập khẩu', value: '6,0 tháng', tone: 'positive', note: 'Dự trữ 60 tỷ USD' },
            { label: 'C: dự trữ / nhập khẩu', value: '2,5 tháng', tone: 'warning', note: 'Dự trữ 200 tỷ USD' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi cần trả lời',
          md: 'Một tỷ số bằng **tử số / mẫu số**: đổi tử hoặc mẫu là đổi kết luận. Hỏi: dự trữ ở đây gồm gì, nhập khẩu ở đây đo gì, và chỉ tiêu này **không nói** điều gì về rủi ro (ví dụ nợ ngắn hạn)?',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: tử số, mẫu số và chỉ tiêu bổ sung',
      blocks: [
        {
          kind: 'formula',
          expression: 'Số tháng nhập khẩu = Dự trữ ngoại hối / (Nhập khẩu năm / 12)',
          note: 'Tử số: dự trữ **có thể huy động** (loại trừ vàng, tài sản bị cầm cố hoặc kém thanh khoản nếu có dữ liệu). Mẫu số: nhập khẩu hàng hóa hay cả dịch vụ, năm gần nhất hay dự báo, có gồm nhập khẩu gia công để xuất khẩu không. Chỉ tiêu bổ sung: dự trữ / nợ nước ngoài ngắn hạn (quy tắc Guidotti–Greenspan: tỷ lệ ≥ 1).',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Tính lại** tỷ số từ số gốc, đảm bảo cùng định nghĩa giữa các nền kinh tế.',
            '**So sánh** nhiều nền kinh tế và xem tử/mẫu của từng nơi.',
            '**Phân rã xu hướng**: dự trữ giảm hay nhập khẩu tăng?',
            '**Thử độ nhạy** định nghĩa và kiểm chỉ tiêu bổ sung trước khi kết luận.',
          ],
        },
        {
          kind: 'quiz',
          id: 'import-cover-reserves-reading-q1',
          question: 'B có 6,0 tháng nhập khẩu, cao nhất. Có thể kết luận B an toàn nhất không?',
          options: [
            {
              id: 'a',
              text: 'Có, vì số tháng cao nhất nghĩa là rủi ro thấp nhất.',
              explain: 'Số tháng nhập khẩu chỉ đo một loại áp lực (thanh toán nhập khẩu). Nó không nói gì về nợ nước ngoài ngắn hạn, thứ có thể rút nhanh.',
            },
            {
              id: 'b',
              text: 'Chưa, cần xem dự trữ/nợ ngắn hạn: B chỉ có 1,5 lần, thấp nhất trong ba nền kinh tế.',
              correct: true,
              explain: 'Đúng. B có nhập khẩu nhỏ nên số tháng cao, nhưng nợ ngắn hạn 40 tỷ so với dự trữ 60 tỷ để lại biên an toàn mỏng hơn A (3,2) và C (3,33).',
            },
            {
              id: 'c',
              text: 'Không, vì dự trữ tuyệt đối của B nhỏ hơn C nên C an toàn hơn.',
              explain: 'Dự trữ tuyệt đối không có ý nghĩa nếu không so với quy mô nền kinh tế và các nghĩa vụ.',
            },
          ],
        },
      ],
    },
    {
      id: 'compare',
      kind: 'analysis',
      title: 'Bước 1 — So sánh ba nền kinh tế: tử số, mẫu số và chỉ tiêu bổ sung',
      blocks: [
        {
          kind: 'table',
          title: 'Dự trữ, nhập khẩu và các chỉ tiêu (tỷ USD)',
          columns: [
            { key: 'c', label: 'Nền kinh tế' },
            { key: 'r', label: 'Dự trữ', align: 'right' },
            { key: 'm', label: 'Nhập khẩu năm (tháng)', align: 'right' },
            { key: 'cover', label: 'Số tháng nhập khẩu', align: 'right' },
            { key: 'std', label: 'Nợ NN ngắn hạn', align: 'right' },
            { key: 'ratio', label: 'Dự trữ / nợ ngắn hạn', align: 'right' },
          ],
          rows: [
            { c: 'A', r: 80, m: '360 (30)', cover: '2,67', std: 25, ratio: '3,2' },
            { c: 'B', r: 60, m: '120 (10)', cover: '6,00', std: 40, ratio: '1,5' },
            { c: 'C', r: 200, m: '960 (80)', cover: '2,50', std: 60, ratio: '3,33' },
          ],
          highlight: [{ row: 1, tone: 'warning' }],
          caption: 'Xếp hạng theo số tháng (B > A > C) khác xếp hạng theo dự trữ/nợ ngắn hạn (C > A > B). Mỗi chỉ tiêu trả lời một câu hỏi khác nhau.',
        },
        {
          kind: 'text',
          md: 'Hai chỉ tiêu bổ sung cho nhau: **số tháng nhập khẩu** đo khả năng duy trì thương mại khi nguồn ngoại tệ thu hẹp, còn **dự trữ/nợ ngắn hạn** đo khả năng đáp ứng nghĩa vụ phải trả sớm (rủi ro rút vốn). Không chỉ tiêu nào đủ riêng lẻ; điểm yếu của B (nợ ngắn hạn) bị che nếu chỉ nhìn số tháng.',
        },
        {
          kind: 'quiz',
          id: 'import-cover-reserves-reading-q2',
          question: 'Nếu bản tin chỉ có chỗ cho một câu nhận xét so sánh A, B, C, câu nào ít gây hiểu nhầm nhất?',
          options: [
            {
              id: 'a',
              text: '"B an toàn nhất vì dự trữ đủ 6 tháng nhập khẩu."',
              explain: 'Bỏ qua dự trữ/nợ ngắn hạn thấp nhất của B (1,5).',
            },
            {
              id: 'b',
              text: '"Mức dự trữ so với nhập khẩu: B cao nhất (6,0 tháng), A và C thấp hơn mốc tham khảo 3 tháng; nhưng so với nợ ngắn hạn thì B mỏng nhất (1,5 lần)."',
              correct: true,
              explain: 'Đúng. Nêu cả hai chỉ tiêu và nói rõ mốc 3 tháng chỉ là tham khảo.',
            },
            {
              id: 'c',
              text: '"C yếu nhất vì chỉ có 2,5 tháng."',
              explain: 'C có dự trữ lớn và dự trữ/nợ ngắn hạn cao nhất (3,33); chỉ số tháng thấp một phần vì nhập khẩu lớn (cả nhập khẩu gia công).',
            },
          ],
        },
      ],
    },
    {
      id: 'trend',
      kind: 'analysis',
      title: 'Bước 2 — Phân rã xu hướng của A và độ nhạy định nghĩa của C',
      blocks: [
        {
          kind: 'chart',
          title: 'A: số tháng nhập khẩu mà dự trữ chi trả được',
          type: 'line',
          xKey: 'year',
          series: [
            { key: 'months', label: 'Số tháng nhập khẩu' },
            { key: 'ref', label: 'Mốc tham khảo 3 tháng' },
          ],
          data: [
            { year: '2020', months: 4.0, ref: 3 },
            { year: '2021', months: 4.0, ref: 3 },
            { year: '2022', months: 3.18, ref: 3 },
            { year: '2023', months: 2.81, ref: 3 },
            { year: '2024', months: 2.67, ref: 3 },
          ],
          caption: 'Số tháng giảm từ 4,0 xuống 2,67 và cắt xuống dưới mốc tham khảo từ 2023.',
        },
        {
          kind: 'table',
          title: 'Cầu nối 2021 → 2024 của A: do dự trữ hay do nhập khẩu?',
          columns: [
            { key: 'step', label: 'Bước' },
            { key: 'calc', label: 'Cách tính', align: 'right' },
            { key: 'val', label: 'Số tháng', align: 'right' },
          ],
          rows: [
            { step: '2021: dự trữ 100, nhập khẩu 300', calc: '100 / (300/12)', val: '4,00' },
            { step: 'Dự trữ giảm 100 → 80, nhập khẩu giữ 300', calc: '80 / 25', val: '3,20 (−0,80)' },
            { step: 'Nhập khẩu tăng 300 → 360, dự trữ 80', calc: '80 / 30', val: '2,67 (−0,53)' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
          caption: 'Hai lực cùng đẩy xuống: dự trữ mất 20% giải thích 60% mức giảm (0,80/1,33), nhập khẩu tăng 20% giải thích 40%.',
        },
        {
          kind: 'table',
          title: 'Độ nhạy định nghĩa của C (tỷ USD)',
          columns: [
            { key: 'v', label: 'Cách định nghĩa' },
            { key: 'calc', label: 'Tính', align: 'right' },
            { key: 'val', label: 'Số tháng', align: 'right' },
          ],
          rows: [
            { v: 'Cơ sở: dự trữ 200, nhập khẩu 960', calc: '200 / 80', val: '2,50' },
            { v: 'Bỏ nhập khẩu gia công cho xuất khẩu (còn 480)', calc: '200 / 40', val: '5,00' },
            { v: 'Chỉ tính dự trữ huy động nhanh (160)', calc: '160 / 80', val: '2,00' },
            { v: 'Cả hai điều chỉnh', calc: '160 / 40', val: '4,00' },
          ],
          highlight: [{ row: 1, tone: 'warning' }],
          caption: 'Cùng một nền kinh tế, kết quả từ 2,0 đến 5,0 tháng tùy định nghĩa. Nhập khẩu gia công được tài trợ bằng doanh thu xuất khẩu nên gánh nặng ngoại tệ của nó khác; nhưng bỏ nó đi là một giả định cần nêu rõ.',
        },
        {
          kind: 'quiz',
          id: 'import-cover-reserves-reading-q3',
          question: 'So sánh C với A bằng số tháng nhập khẩu, điều gì cần làm để so sánh công bằng?',
          options: [
            {
              id: 'a',
              text: 'Dùng đúng số công bố của từng nơi, vì đó là số chính thức.',
              explain: 'Mỗi nơi có thể dùng định nghĩa khác nhau (hàng hóa hay cả dịch vụ, có gia công không); số "chính thức" khó so sánh nếu chuẩn không giống nhau.',
            },
            {
              id: 'b',
              text: 'Tính lại bằng cùng một định nghĩa tử số và mẫu số cho cả hai, và nêu độ nhạy khi đổi định nghĩa.',
              correct: true,
              explain: 'Đúng. Chuẩn hóa định nghĩa trước, rồi báo cáo khoảng giá trị nếu kết quả nhạy.',
            },
            {
              id: 'c',
              text: 'Bỏ chỉ tiêu này vì quá nhạy.',
              explain: 'Chỉ tiêu vẫn hữu ích như một lát cắt; vấn đề là diễn giải, không phải loại bỏ.',
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
          md: '**Kết luận:** (1) A giảm từ 4,0 xuống 2,67 tháng do dự trữ giảm (60% tác động) và nhập khẩu tăng (40%), cần theo dõi. (2) B có tỷ lệ tháng cao nhất nhưng dự trữ/nợ ngắn hạn thấp nhất (1,5). (3) C trông yếu (2,5 tháng) nhưng con số dao động 2,0–5,0 tùy định nghĩa. Bản tin nên trình bày hai chỉ tiêu cạnh nhau, ghi rõ định nghĩa và dải độ nhạy.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Chuẩn hóa định nghĩa chỉ tiêu: tử số (dự trữ chính thức, loại trừ phần không huy động nhanh nếu có dữ liệu), mẫu số (nhập khẩu hàng hóa và dịch vụ 12 tháng gần nhất)',
              owner: 'Nhóm phân tích vĩ mô',
              metric: 'Số tháng nhập khẩu theo định nghĩa chuẩn',
              threshold: 'Mọi nền kinh tế so sánh dùng cùng định nghĩa; ghi chú khi khác',
            },
            {
              action: 'Bổ sung dự trữ/nợ ngắn hạn và xu hướng 5 năm vào bảng so sánh',
              owner: 'Nhóm phân tích vĩ mô',
              metric: 'Dự trữ/nợ NN ngắn hạn; số tháng nhập khẩu 5 năm',
              threshold: 'Cảnh báo khi số tháng < 3 hoặc dự trữ/nợ ngắn hạn < 1,5',
            },
            {
              action: 'Với A, theo dõi dự trữ và nhập khẩu theo quý để tách nguyên nhân giảm',
              owner: 'Nhóm phân tích vĩ mô',
              metric: 'Cầu nối số tháng: tác động dự trữ vs nhập khẩu',
              threshold: 'Báo cáo cầu nối mỗi quý khi số tháng giảm > 0,3',
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
              title: 'Coi mốc 3 tháng là ngưỡng cứng',
              why: 'Đây là quy ước tham khảo; mức phù hợp tùy chế độ tỷ giá, mở cửa tài khoản vốn và nợ ngắn hạn của từng nền kinh tế.',
              instead: 'Dùng mốc như điểm tham chiếu, kèm các chỉ tiêu bổ sung như dự trữ/nợ ngắn hạn.',
            },
            {
              title: 'So các nền kinh tế mà không đồng bộ định nghĩa',
              why: 'Nhập khẩu gia công, dịch vụ, vàng, tài sản cầm cố làm tỷ số đổi rất nhiều (2,0–5,0 tháng ở C).',
              instead: 'Tính lại từ số gốc với một định nghĩa chung và báo cáo độ nhạy.',
            },
            {
              title: 'Nhìn tỷ số mà không xem tử và mẫu',
              why: 'Tỷ số giảm có thể do dự trữ giảm hoặc nhập khẩu tăng, hai nguyên nhân có hàm ý chính sách khác nhau.',
              instead: 'Phân rã xu hướng thành tác động dự trữ và tác động nhập khẩu.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Số tháng nhập khẩu = dự trữ / nhập khẩu bình quân tháng; luôn xem cả tử và mẫu và định nghĩa của chúng.',
    'Một chỉ tiêu chỉ trả lời một câu hỏi; dự trữ/nợ ngắn hạn cho thấy rủi ro mà số tháng nhập khẩu không thấy.',
    'Kết quả nhạy với định nghĩa (2,0–5,0 tháng ở C), nên chuẩn hóa định nghĩa và báo cáo dải độ nhạy.',
  ],
  references: [
    {
      title: 'Total reserves in months of imports',
      publisher: 'World Bank Data',
      url: 'https://data.worldbank.org/indicator/FI.RES.TOTL.MO',
      note: 'Trang chỉ tiêu "total reserves in months of imports" của World Bank, nơi có định nghĩa và số liệu nhiều quốc gia để đối chiếu cách tính.',
    },
    {
      title: 'Guidotti–Greenspan rule',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Guidotti%E2%80%93Greenspan_rule',
      note: 'Quy tắc dự trữ nên bằng nợ nước ngoài ngắn hạn (tỷ lệ 1), kèm thảo luận hạn chế thực tế của quy tắc.',
    },
    {
      title: 'Foreign exchange reserves',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Foreign-exchange_reserves',
      note: 'Tổng quan thành phần dự trữ ngoại hối và các chỉ tiêu đánh giá mức đủ.',
    },
  ],
}
