import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — tuần trước → tuần này, đơn có hạn giao trong tuần, đã kiểm tra khớp nhau:
 *   Tổng: 40.000 đơn, trễ 2.400 (6,0%) → 44.000 đơn, trễ 3.740 (8,5%)
 *   Theo hãng (số liệu thô): A 20.000 × 5,0% = 1.000 → 20.000 × 5,5% = 1.100
 *                            B 12.000 × 6,0% =   720 → 12.000 × 6,0% =   720
 *                            C  8.000 × 8,5% =   680 → 12.000 × 16,0% = 1.920   (1.100 + 720 + 1.920 = 3.740 ✓)
 *   Lỗi dữ liệu tuần này của C: 480 đơn "trễ" giả = scan POD đẩy lô cuối ngày 270 + lệch múi giờ (UTC đọc như giờ địa phương) 120
 *     + trạng thái "giao lại" ghi đè mốc giao lần đầu 90 → trễ thật 1.920 − 480 = 1.440 (12,0%)
 *   Trễ thật tuần này: 1.100 + 720 + 1.440 = 3.260 (7,4%)
 *   Mix tuyến của C (làm sạch): nội thành 6.000 × 5,0% = 300 + vùng xa 2.000 × 19,0% = 380 = 680 (tuần trước, 25% vùng xa)
 *                                nội thành 6.000 × 5,0% = 300 + vùng xa 6.000 × 19,0% = 1.140 = 1.440 (tuần này, 50% vùng xa)
 *     Giữ mix tuần trước: 75% × 5,0 + 25% × 19,0 = 8,5% · mix tuần này: 12,0% → C không đổi tỷ lệ theo từng tuyến
 *   Thác đổ +1.340 đơn trễ: dữ liệu giả 480 + C tăng khối lượng ở tỷ lệ cũ (4.000 × 8,5% = 340)
 *     + C dồn sang vùng xa (1.440 − 12.000 × 8,5% = 1.440 − 1.020 = 420) + A tăng 100 + B 0 = 1.340 ✓
 *   Quy trách nhiệm 3.260 đơn trễ thật (theo mã lý do, tự khai): kho bàn giao sau cut-off 660 + khách vắng nhà 890 + hãng 1.710
 *     A 240 + 350 + 510 = 1.100 · B 160 + 200 + 360 = 720 · C 260 + 340 + 840 = 1.440
 *     Trễ do hãng / tổng đơn: A 2,55% · B 3,0% · C 7,0%
 */
export const courierSlaLateAttribution: CaseStudy = {
  id: 'courier-sla-late-attribution',
  title: 'Tỷ lệ giao trễ tăng: lỗi hãng vận chuyển hay lỗi số liệu?',
  domain: 'logistics',
  level: 'mid',
  minutes: 11,
  skills: ['operations', 'causal', 'data-quality'],
  question:
    'Tỷ lệ giao trễ tăng từ 6,0% lên 8,5% và báo cáo chỉ thẳng vào hãng C. Bao nhiêu phần trăm là trễ thật, lỗi của ai, và có nên phạt hoặc cắt hãng C không?',
  summary:
    'Kiểm tra mốc thời gian trước khi quy trách nhiệm (scan trễ, múi giờ, trạng thái ghi đè), rồi tách hiệu ứng mix tuyến và khối lượng khỏi hiệu suất thật của hãng, và chia trễ cho hãng, kho, khách vắng nhà.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst vận hành của một sàn thương mại điện tử dùng ba hãng giao hàng A, B, C. Tối thứ Sáu, trưởng bộ phận Vận hành nhắn: *"Tỷ lệ trễ tuần này lên 8,5%, hãng C trễ 16%. Mình định gửi cảnh cáo SLA và chuyển bớt đơn sang A, em xác nhận số giúp."* Báo cáo thô cho thấy:',
        },
        {
          kind: 'table',
          title: 'Tỷ lệ giao trễ theo hãng (số liệu thô, mô phỏng)',
          columns: [
            { key: 'carrier', label: 'Hãng' },
            { key: 'ordersPrev', label: 'Đơn tuần trước', align: 'right' },
            { key: 'ratePrev', label: 'Trễ tuần trước', align: 'right' },
            { key: 'ordersCurr', label: 'Đơn tuần này', align: 'right' },
            { key: 'rateCurr', label: 'Trễ tuần này', align: 'right' },
          ],
          rows: [
            { carrier: 'A', ordersPrev: '20.000', ratePrev: '5,0%', ordersCurr: '20.000', rateCurr: '5,5%' },
            { carrier: 'B', ordersPrev: '12.000', ratePrev: '6,0%', ordersCurr: '12.000', rateCurr: '6,0%' },
            { carrier: 'C', ordersPrev: '8.000', ratePrev: '8,5%', ordersCurr: '12.000', rateCurr: '16,0%' },
            { carrier: 'Tổng', ordersPrev: '40.000', ratePrev: '6,0%', ordersCurr: '44.000', rateCurr: '8,5%' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Số liệu mô phỏng. Hãng C vừa tăng khối lượng từ 8.000 lên 12.000 đơn và trễ gần gấp đôi.',
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Quyết định đang chờ',
          md: 'Phạt SLA và chuyển đơn là quyết định tốn tiền và khó đảo ngược. Trước khi gửi, cần trả lời ba câu: **số trễ này có thật không**, **trễ do ai**, và **hãng C thật sự kém đi hay chỉ nhận loại đơn khó hơn**.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: làm sạch, quy trách nhiệm, rồi mới so hãng',
      blocks: [
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Kiểm tra mốc thời gian**: trễ = mốc giao thực tế muộn hơn hạn cam kết. Cả hai mốc có đáng tin không (nguồn, múi giờ, bị ghi đè)?',
            '**Quy trách nhiệm**: mỗi đơn trễ thật thuộc về hãng, kho (bàn giao sau cut-off), khách (vắng nhà, hẹn lại) hay hệ thống?',
            '**Chuẩn hóa mix**: so hãng trên cùng loại tuyến và cùng cơ cấu khối lượng, nếu không là so táo với cam.',
            '**Hành động tương xứng**: phạt, đàm phán hay sửa quy trình tùy theo phần lỗi thuộc về ai.',
          ],
        },
        {
          kind: 'quiz',
          id: 'courier-sla-late-attribution-q1',
          question: 'Báo cáo thô cho thấy C trễ 16,0%. Việc đầu tiên nên làm trước khi gửi cảnh cáo là gì?',
          options: [
            {
              id: 'a',
              text: 'Gửi cảnh cáo ngay vì C có tỷ lệ cao nhất và đã tăng gần gấp đôi.',
              explain: 'Tỷ lệ thô chưa được kiểm chứng. Nếu một phần "trễ" đến từ lỗi ghi mốc thời gian, hãng sẽ phản bác bằng chính dữ liệu của họ và bạn mất uy tín trong đàm phán.',
            },
            {
              id: 'b',
              text: 'Lấy mẫu đơn bị gắn trễ của C, đối chiếu mốc giao với nguồn thứ hai (ảnh POD, GPS tài xế, nhật ký API) để biết bao nhiêu là trễ thật.',
              correct: true,
              explain: 'Đúng. Một chỉ số trễ chỉ đáng tin khi mốc giao đáng tin. Đối chiếu với nguồn độc lập cho biết ngay phần trễ giả trước khi bàn đến trách nhiệm.',
            },
            {
              id: 'c',
              text: 'Chuyển bớt đơn sang A, hãng có tỷ lệ trễ thấp nhất, để hạ tỷ lệ chung.',
              explain: 'A có thể thấp vì nhận tuyến nội thành dễ. Chuyển đơn vùng xa sang A có thể làm A trễ nhiều hơn mà chưa biết C có lỗi hay không.',
            },
          ],
        },
      ],
    },
    {
      id: 'timestamps',
      kind: 'analysis',
      title: 'Bước 1: Làm sạch mốc thời gian, một phần "trễ" là giả',
      blocks: [
        {
          kind: 'text',
          md: 'Đối chiếu 1.920 đơn C bị gắn trễ với ảnh POD và nhật ký API của hãng, bạn tìm ra ba kiểu lỗi, đều bắt nguồn từ **cách ghi mốc**, không phải tốc độ giao:',
        },
        {
          kind: 'table',
          title: 'Phân loại đơn C bị gắn trễ tuần này (mô phỏng)',
          columns: [
            { key: 'cause', label: 'Nguyên nhân' },
            { key: 'orders', label: 'Số đơn', align: 'right' },
            { key: 'note', label: 'Cơ chế' },
          ],
          rows: [
            { cause: 'Scan POD đẩy lô cuối ngày', orders: 270, note: 'Giao 15:00 nhưng scan lên hệ thống 00:10 hôm sau, vượt hạn' },
            { cause: 'Lệch múi giờ', orders: 120, note: 'API trả giờ UTC không kèm offset, bị đọc như giờ địa phương (+7h)' },
            { cause: 'Trạng thái "giao lại" ghi đè', orders: 90, note: 'Mốc giao lần đầu bị thay bằng mốc lần sau khi khách hẹn lại' },
            { cause: 'Trễ thật', orders: 1440, note: 'Giao muộn hơn hạn theo cả hai nguồn' },
            { cause: 'Tổng đơn bị gắn trễ', orders: 1920, note: '270 + 120 + 90 + 1.440' },
          ],
          highlight: [{ row: 3, tone: 'negative' }],
          caption: 'Trễ giả = 480 đơn (25% số đơn bị gắn trễ). Tỷ lệ trễ thật của C = 1.440 / 12.000 = 12,0%, không phải 16,0%.',
        },
        {
          kind: 'quiz',
          id: 'courier-sla-late-attribution-q2',
          question: 'Lỗi "scan POD đẩy lô cuối ngày" xuất hiện từ tuần này. Cách xử lý đúng với dữ liệu là gì?',
          options: [
            {
              id: 'a',
              text: 'Giữ nguyên số thô vì đó là dữ liệu hệ thống ghi nhận.',
              explain: 'Dữ liệu hệ thống ghi nhận thời điểm scan, không phải thời điểm giao. Dùng nó làm mốc giao là đo sai đại lượng.',
            },
            {
              id: 'b',
              text: 'Dùng mốc giao thực tế từ nguồn độc lập (ảnh POD, GPS) khi có, ghi rõ quy tắc, và theo dõi độ trễ scan như một chỉ số chất lượng dữ liệu của hãng.',
              correct: true,
              explain: 'Đúng. Sửa mốc theo nguồn đáng tin, công khai quy tắc và đo độ trễ scan riêng: nó vừa làm sạch chỉ số, vừa là bằng chứng để yêu cầu hãng sửa quy trình.',
            },
            {
              id: 'c',
              text: 'Xóa toàn bộ đơn C của tuần này khỏi báo cáo cho khỏi gây tranh cãi.',
              explain: 'Loại bỏ cả nhóm làm lệch báo cáo và che mất 1.440 đơn trễ thật. Cần sửa mốc, không phải bỏ dữ liệu.',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Mốc thời gian là chiều dễ sai nhất',
          md: 'Hãy kiểm tra bốn thứ trước mỗi báo cáo SLA: **múi giờ** (có offset hay không), **nguồn mốc** (sự kiện thật hay lúc hệ thống ghi), **độ trễ scan** (khoảng cách giữa giao và ghi) và **ghi đè trạng thái** (có giữ lịch sử mọi lần không). Tham khảo [cơ sở dữ liệu múi giờ IANA](https://www.iana.org/time-zones) để hiểu vì sao "giờ địa phương" thay đổi theo thời gian và địa điểm.',
        },
      ],
    },
    {
      id: 'mix',
      kind: 'analysis',
      title: 'Bước 2: Kiểm tra mix tuyến trước khi kết luận về hãng',
      blocks: [
        {
          kind: 'text',
          md: 'Sau khi làm sạch, C vẫn trễ 12,0% so với 8,5% tuần trước. Nhưng tuần này chiến dịch miền xa dồn thêm đơn cho C. Cắt theo loại tuyến:',
        },
        {
          kind: 'table',
          title: 'Hãng C sau làm sạch, theo loại tuyến (mô phỏng)',
          columns: [
            { key: 'route', label: 'Loại tuyến' },
            { key: 'prevMix', label: 'Đơn tuần trước', align: 'right' },
            { key: 'prevRate', label: 'Trễ', align: 'right' },
            { key: 'currMix', label: 'Đơn tuần này', align: 'right' },
            { key: 'currRate', label: 'Trễ', align: 'right' },
          ],
          rows: [
            { route: 'Nội thành', prevMix: '6.000 (75%)', prevRate: '5,0%', currMix: '6.000 (50%)', currRate: '5,0%' },
            { route: 'Vùng xa', prevMix: '2.000 (25%)', prevRate: '19,0%', currMix: '6.000 (50%)', currRate: '19,0%' },
            { route: 'Tổng C', prevMix: '8.000', prevRate: '8,5%', currMix: '12.000', currRate: '12,0%' },
          ],
          highlight: [{ row: 1, tone: 'warning' }],
          caption: 'Tỷ lệ trễ từng tuyến của C không đổi. Chỉ cơ cấu đổi: vùng xa từ 25% lên 50% đơn. Giữ mix tuần trước, C tuần này sẽ là 75% × 5,0 + 25% × 19,0 = 8,5%.',
        },
        {
          kind: 'chart',
          title: 'Tỷ lệ trễ của hãng C qua từng lớp điều chỉnh',
          type: 'bar',
          xKey: 'stage',
          unit: '%',
          series: [{ key: 'rate', label: 'Tỷ lệ trễ' }],
          data: [
            { stage: 'Số thô', rate: 16.0 },
            { stage: 'Sau làm sạch mốc', rate: 12.0 },
            { stage: 'Chuẩn hóa mix tuần trước', rate: 8.5 },
          ],
          caption: 'Từ 16,0% còn 8,5% sau hai lớp điều chỉnh, bằng đúng mức tuần trước. Đây là hiệu ứng mix (xem thêm nghịch lý Simpson trong [Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/paradox-simpson/)).',
        },
        {
          kind: 'table',
          title: 'Thác đổ: vì sao đơn trễ tăng thêm 1.340 đơn (mô phỏng)',
          columns: [
            { key: 'driver', label: 'Yếu tố' },
            { key: 'late', label: 'Đơn trễ thêm', align: 'right' },
            { key: 'meaning', label: 'Ý nghĩa' },
          ],
          rows: [
            { driver: 'Trễ giả do ghi mốc sai', late: 480, meaning: 'Không phải trễ thật, sửa dữ liệu' },
            { driver: 'C tăng khối lượng, tỷ lệ cũ 8,5%', late: 340, meaning: '4.000 đơn thêm × 8,5%' },
            { driver: 'C dồn sang vùng xa (mix)', late: 420, meaning: '1.440 − 12.000 × 8,5% = 420' },
            { driver: 'Hãng A tăng nhẹ', late: 100, meaning: '5,0% → 5,5% trên 20.000 đơn' },
            { driver: 'Tổng', late: 1340, meaning: '3.740 − 2.400' },
          ],
          highlight: [{ row: 0, tone: 'warning' }],
        },
        {
          kind: 'quiz',
          id: 'courier-sla-late-attribution-q3',
          question: 'Tỷ lệ trễ từng tuyến của C không đổi, nhưng tổng của C tăng. Kết luận nào đúng?',
          options: [
            {
              id: 'a',
              text: 'Hiệu suất thực của C không xấu đi theo từng loại tuyến; mức tăng chủ yếu do mix vùng xa và dữ liệu sai. Cảnh cáo SLA chưa có cơ sở.',
              correct: true,
              explain: 'Đúng. So trên cùng loại tuyến, C ngang tuần trước. Việc cần bàn là có nên giao nhiều vùng xa cho C hay không, và SLA vùng xa có nên khác SLA nội thành.',
            },
            {
              id: 'b',
              text: 'C kém đi vì khối lượng tăng 50% làm quá tải.',
              explain: 'Quá tải sẽ làm tỷ lệ từng tuyến tăng. Dữ liệu cho thấy nội thành vẫn 5,0%, vùng xa vẫn 19,0%, nên chưa có bằng chứng quá tải.',
            },
            {
              id: 'c',
              text: 'Số liệu không đáng tin nên không kết luận được gì.',
              explain: 'Dữ liệu có lỗi nhưng đã sửa được phần lớn. Từ chối kết luận là bỏ qua bằng chứng đã có: trễ thật 12,0% và rõ nguồn gốc.',
            },
          ],
        },
      ],
    },
    {
      id: 'attribution',
      kind: 'analysis',
      title: 'Bước 3: Quy trách nhiệm cho 3.260 đơn trễ thật',
      blocks: [
        {
          kind: 'table',
          title: 'Trễ thật tuần này theo mã lý do (mô phỏng)',
          columns: [
            { key: 'carrier', label: 'Hãng' },
            { key: 'wh', label: 'Kho bàn giao muộn', align: 'right' },
            { key: 'cust', label: 'Khách vắng nhà', align: 'right' },
            { key: 'courier', label: 'Lỗi hãng', align: 'right' },
            { key: 'total', label: 'Tổng trễ', align: 'right' },
            { key: 'share', label: 'Lỗi hãng / tổng đơn', align: 'right' },
          ],
          rows: [
            { carrier: 'A', wh: 240, cust: 350, courier: 510, total: 1100, share: '2,55%' },
            { carrier: 'B', wh: 160, cust: 200, courier: 360, total: 720, share: '3,0%' },
            { carrier: 'C', wh: 260, cust: 340, courier: 840, total: 1440, share: '7,0%' },
            { carrier: 'Tổng', wh: 660, cust: 890, courier: 1710, total: 3260, share: '3,9%' },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: 'Chỉ 1.710 / 3.260 = 52% đơn trễ thật là lỗi hãng. Còn lại do kho (20%) và khách vắng nhà (27%).',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Cẩn trọng với mã lý do tự khai',
          md: 'Mã lý do do tài xế hoặc hãng tự chọn, nên có xu hướng đổ cho "khách vắng nhà". Đối chiếu bằng bằng chứng khách quan: số lần gọi, vị trí GPS tại điểm giao, giờ bàn giao của kho. Với kho, mốc quyết định là giờ bàn giao so với cut-off đã thỏa thuận.',
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
          md: '**Kết luận cho Vận hành:** tỷ lệ trễ thật tuần này là 7,4% (3.260 / 44.000), không phải 8,5%. Hãng C trễ thật 12,0%, nhưng từng loại tuyến vẫn giữ mức tuần trước; phần tăng đến từ việc C nhận nhiều đơn vùng xa gấp ba lần và từ lỗi ghi mốc. **Chưa gửi cảnh cáo SLA**; chuyển trọng tâm sang sửa dữ liệu và thiết kế SLA theo loại tuyến.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Yêu cầu hãng C gửi scan POD theo thời gian thực và API kèm offset múi giờ; dùng ảnh POD làm mốc giao khi hai nguồn lệch',
              owner: 'Vận hành + IT tích hợp',
              metric: 'Độ trễ scan POD trung vị và tỷ lệ đơn có mốc lệch',
              threshold: 'Độ trễ scan < 30 phút; mốc lệch < 0,5% đơn',
            },
            {
              action: 'Tách SLA và báo cáo theo loại tuyến (nội thành, vùng xa), hiển thị tỷ lệ chuẩn hóa mix bên cạnh số thô',
              owner: 'Data/Analytics',
              metric: 'Tỷ lệ trễ từng hãng × loại tuyến',
              threshold: 'Ngưỡng cảnh báo SLA: vượt mức tuyến đó ≥ 3 điểm % trong 2 tuần liên tiếp',
            },
            {
              action: 'Làm việc với kho về các đơn bàn giao sau cut-off (260 đơn của C, 660 đơn tổng) và với CSKH về quy trình hẹn lại với khách vắng nhà',
              owner: 'Trưởng kho + CSKH',
              metric: 'Tỷ lệ trễ do kho và do khách / tổng đơn',
              threshold: 'Kho giảm từ 1,5% xuống ≤ 1,0%; khách vắng nhà ≤ 1,5% tổng đơn',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Phạt dựa trên số thô sẽ bị hãng bác bỏ và làm hỏng quan hệ; chuyển đơn mà không xét tuyến có thể làm kết quả tệ hơn. Làm sạch mốc và chuẩn hóa mix tạo ra một con số **cả hai bên cùng chấp nhận**, và chỉ khi đó mới có cơ sở đàm phán, thưởng phạt hay chuyển đơn.',
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
              title: 'Tin tuyệt đối vào mốc "đã giao" của hệ thống',
              why: 'Mốc ghi nhận có thể là lúc scan, lúc đồng bộ API hoặc lúc trạng thái cuối cùng. Nó khác thời điểm giao thật và có thể bị ghi đè.',
              instead: 'Xác định rõ mốc nào là sự kiện thật, đối chiếu mẫu với nguồn độc lập, giữ lịch sử mọi thay đổi trạng thái.',
            },
            {
              title: 'So hãng khi cơ cấu tuyến khác nhau',
              why: 'Hãng nhận nhiều tuyến xa luôn trông tệ hơn hãng nhận nội thành, dù cùng chất lượng. Tỷ lệ tổng bị chi phối bởi mix.',
              instead: 'So trên cùng loại tuyến hoặc chuẩn hóa về cùng một mix chuẩn, và hiển thị cả hai con số.',
            },
            {
              title: 'Quy hết trễ cho hãng',
              why: 'Một phần trễ đến từ kho bàn giao muộn hoặc khách vắng nhà. Phạt hãng vì phần đó vừa không công bằng vừa không sửa được nguyên nhân.',
              instead: 'Chia trễ theo bên chịu trách nhiệm bằng bằng chứng khách quan, và chỉ áp SLA hãng lên phần lỗi hãng.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Kiểm tra mốc thời gian (nguồn, múi giờ, độ trễ scan, ghi đè trạng thái) trước khi tin vào chỉ số trễ; đối chiếu mẫu với nguồn độc lập.',
    'Trước khi kết luận về hãng, chuẩn hóa mix tuyến và khối lượng: tỷ lệ từng tuyến không đổi thì tỷ lệ tổng tăng chỉ vì cơ cấu.',
    'Quy trách nhiệm trễ cho hãng, kho, khách bằng bằng chứng khách quan, rồi mới chọn hành động tương xứng với phần lỗi.',
  ],
  references: [
    {
      title: 'Time Zone Database',
      publisher: 'IANA',
      url: 'https://www.iana.org/time-zones',
      note: 'Cơ sở dữ liệu múi giờ chuẩn mà hệ thống dùng để đổi UTC sang giờ địa phương; nền tảng để hiểu lỗi lệch múi giờ khi xử lý mốc giao.',
    },
    {
      title: 'Simpson\'s Paradox',
      publisher: 'Stanford Encyclopedia of Philosophy',
      url: 'https://plato.stanford.edu/entries/paradox-simpson/',
      note: 'Giải thích vì sao số liệu gộp và số liệu theo nhóm có thể cho kết luận ngược nhau và vai trò của biến gây nhiễu như cơ cấu tuyến.',
    },
    {
      title: 'Boosting trade and economic development through better logistics',
      publisher: 'World Bank',
      url: 'https://blogs.worldbank.org/en/trade/boosting-trade-and-economic-development-through-better-logistics',
      note: 'Giới thiệu Logistics Performance Index, trong đó có tiêu chí giao hàng đúng thời hạn; bối cảnh về đo độ tin cậy chuỗi cung ứng.',
    },
  ],
}
