import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — Công ty giao hàng G (hư cấu), 1 tháng: 200.000 bưu kiện, 9.000 bưu kiện hoàn về người gửi (4,5%). Chi phí một lượt hoàn giả định 45 nghìn đ (vận chuyển 2 chiều 30 + xử lý 15).
 *   Thanh toán: COD 120.000 bưu kiện, hoàn 7.200 (6,0%) · trả trước 80.000, hoàn 1.800 (2,25%) · Σ 200.000 / 9.000 ✓ · COD chiếm 60% bưu kiện và 80% hoàn
 *   Lý do × hình thức (COD / trả trước → tổng, % tổng hoàn, lũy kế):
 *     Từ chối nhận 2.520 / 180 → 2.700 (30,0%; 30,0%) · Không liên lạc được sau 3 lần 1.800 / 450 → 2.250 (25,0%; 55,0%) · Sai/thiếu địa chỉ 810 / 540 → 1.350 (15,0%; 70,0%)
 *     Hàng hỏng/sai hàng 540 / 360 → 900 (10,0%; 80,0%) · Quá hạn lưu điểm nhận 432 / 270 → 702 (7,8%; 87,8%) · Tranh chấp giá/phí 540 / 0 → 540 (6,0%; 93,8%) · Khác 558 / 0 → 558 (6,2%; 100%)
 *     Σ COD 7.200, Σ trả trước 1.800, Σ 9.000 ✓
 *   COD theo giá trị đơn: < 300 nghìn 60.000 bưu kiện, hoàn 1.800 (3,0%) · 300 nghìn–1 triệu 40.000, hoàn 2.600 (6,5%) · > 1 triệu 20.000, hoàn 2.800 (14,0%) → Σ 120.000 / 7.200 ✓
 *     COD ≥ 300 nghìn: 60.000 bưu kiện (30% tổng) tạo 5.400 hoàn (60,0% tổng hoàn)
 *   COD "từ chối nhận" theo số ngày từ đặt đến lần giao đầu: ≤ 2 ngày 70.000 bưu kiện, 840 (1,2%) · 3–4 ngày 36.000, 1.080 (3,0%) · ≥ 5 ngày 14.000, 600 (4,3%) → Σ 120.000 / 2.520 ✓
 *   Sai/thiếu địa chỉ theo cách nhập: tự nhập tay 30.000 bưu kiện, 1.000 (3,33%) · chọn từ gợi ý địa chỉ 170.000, 350 (0,21%) → Σ 200.000 / 1.350 ✓
 *   Chi phí hoàn: 9.000 × 45 = 405 triệu đ/tháng · từ chối nhận 121,5 · không liên lạc 101,25 · địa chỉ 60,75 (triệu đ)
 */
export const returnToSenderRootCausePareto: CaseStudy = {
  id: 'return-to-sender-root-cause-pareto',
  title: 'Hàng hoàn 4,5%: Pareto nguyên nhân và nhóm nào đáng xử lý trước?',
  domain: 'logistics',
  level: 'junior',
  minutes: 11,
  skills: ['operations', 'segmentation', 'unit-economics'],
  question:
    'Mỗi tháng 9.000 bưu kiện (4,5%) bị hoàn về người gửi, tốn khoảng 405 triệu đồng. Nguyên nhân và nhóm bưu kiện nào đóng góp nhiều nhất, và nên thử can thiệp gì trước?',
  summary:
    'Dùng Pareto theo lý do, rồi Pareto theo nhóm (hình thức thanh toán, giá trị đơn), đặt giả thuyết cho vài nguyên nhân hàng đầu, kiểm tra bằng dữ liệu hiện có và quy ra chi phí.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng: công ty giao hàng và mọi con số đều là giả định để minh họa.* **Công ty G** giao 200.000 bưu kiện mỗi tháng; **9.000 bưu kiện (4,5%) bị hoàn về người gửi** (return-to-sender). Mỗi lượt hoàn tốn khoảng 45 nghìn đồng (vận chuyển hai chiều và xử lý), tức **405 triệu đồng/tháng**, chưa kể khách hàng của shop không nhận được hàng. Giám đốc vận hành muốn biết nên tập trung xử lý ở đâu thay vì dàn đều.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Bưu kiện hoàn', value: '9.000', note: '4,5% trên 200.000' },
            { label: 'Chi phí hoàn', value: '405 triệu đ', tone: 'negative', note: '45 nghìn đ mỗi lượt' },
            { label: 'Hoàn của COD', value: '80%', tone: 'warning', note: 'COD chiếm 60% bưu kiện' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi cần trả lời',
          md: 'Khi có nhiều nguyên nhân, nguyên tắc **Pareto** hỏi: **vài nguyên nhân và vài nhóm nào tạo phần lớn kết quả?** Từ đó đặt giả thuyết kiểm tra được cho vài thủ phạm đầu bảng, thay vì xử lý mọi thứ cùng lúc.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: Pareto theo lý do, rồi theo nhóm',
      blocks: [
        {
          kind: 'formula',
          expression: 'Đóng góp của lý do/nhóm = Số hoàn của lý do/nhóm / Tổng hoàn  ·  Lũy kế = cộng dồn từ lý do lớn nhất xuống',
          note: 'Pareto (80/20) là quy luật kinh nghiệm, không phải định luật: bảng của bạn có thể cho 55/20 hay 90/20. Luôn xem **tỷ lệ hoàn trong nhóm** (không chỉ số lượng) để phân biệt nhóm lớn với nhóm có rủi ro cao.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Pareto lý do**: xếp giảm dần, tính lũy kế.',
            '**Pareto nhóm**: hình thức thanh toán, giá trị đơn; tỷ lệ hoàn trong nhóm và đóng góp.',
            '**Giả thuyết** cho lý do và nhóm hàng đầu; dữ liệu cần kiểm tra.',
            '**Quy ra tiền** và chọn can thiệp có thể đo.',
          ],
        },
        {
          kind: 'quiz',
          id: 'return-to-sender-root-cause-pareto-q1',
          question: 'Khi nhìn danh sách lý do hoàn, bước nào hợp lý nhất để bắt đầu?',
          options: [
            {
              id: 'a',
              text: 'Làm kế hoạch cải thiện cho cả 7 lý do để không bỏ sót.',
              explain: 'Dàn đều nguồn lực cho mọi lý do làm loãng tác động; lý do nhỏ có thể chỉ chiếm vài phần trăm.',
            },
            {
              id: 'b',
              text: 'Xếp lý do theo đóng góp, chọn vài lý do đầu bảng chiếm khoảng 70–80% rồi kiểm tra giả thuyết cho từng lý do đó.',
              correct: true,
              explain: 'Đúng. Pareto giúp ưu tiên; ngưỡng 70–80% chỉ là điểm tham chiếu, không phải quy định.',
            },
            {
              id: 'c',
              text: 'Bắt đầu với lý do ít tốn kém nhất để xử lý.',
              explain: 'Chi phí xử lý là một yếu tố, nhưng cần so với mức đóng góp; xử lý lý do nhỏ cho ít tác động.',
            },
          ],
        },
      ],
    },
    {
      id: 'reason',
      kind: 'analysis',
      title: 'Bước 1 — Pareto theo lý do và theo nhóm',
      blocks: [
        {
          kind: 'chart',
          title: 'Pareto lý do hoàn: tỷ trọng và lũy kế (%)',
          type: 'bar',
          xKey: 'reason',
          unit: '%',
          series: [
            { key: 'share', label: 'Tỷ trọng' },
            { key: 'cum', label: 'Lũy kế' },
          ],
          data: [
            { reason: 'Từ chối nhận', share: 30.0, cum: 30.0 },
            { reason: 'Không liên lạc được', share: 25.0, cum: 55.0 },
            { reason: 'Sai/thiếu địa chỉ', share: 15.0, cum: 70.0 },
            { reason: 'Hàng hỏng/sai', share: 10.0, cum: 80.0 },
            { reason: 'Quá hạn lưu điểm', share: 7.8, cum: 87.8 },
            { reason: 'Tranh chấp giá/phí', share: 6.0, cum: 93.8 },
            { reason: 'Khác', share: 6.2, cum: 100.0 },
          ],
          caption: 'Ba lý do đầu chiếm 70% và bốn lý do đầu chiếm 80% tổng hoàn; ba lý do cuối cộng lại 20%.',
        },
        {
          kind: 'table',
          title: 'Tỷ lệ hoàn và đóng góp theo nhóm bưu kiện',
          columns: [
            { key: 'g', label: 'Nhóm' },
            { key: 'parcels', label: 'Bưu kiện', align: 'right' },
            { key: 'ret', label: 'Hoàn', align: 'right' },
            { key: 'rate', label: 'Tỷ lệ hoàn', align: 'right' },
            { key: 'share', label: '% tổng hoàn', align: 'right' },
          ],
          rows: [
            { g: 'Trả trước', parcels: '80.000', ret: '1.800', rate: '2,25%', share: '20,0%' },
            { g: 'COD < 300 nghìn', parcels: '60.000', ret: '1.800', rate: '3,0%', share: '20,0%' },
            { g: 'COD 300 nghìn – 1 triệu', parcels: '40.000', ret: '2.600', rate: '6,5%', share: '28,9%' },
            { g: 'COD > 1 triệu', parcels: '20.000', ret: '2.800', rate: '14,0%', share: '31,1%' },
            { g: 'Tổng', parcels: '200.000', ret: '9.000', rate: '4,5%', share: '100%' },
          ],
          highlight: [{ row: 3, tone: 'negative' }, { row: 2, tone: 'warning' }],
          caption: 'COD từ 300 nghìn trở lên là 60.000 bưu kiện (30% khối lượng) nhưng tạo 5.400 hoàn (60,0%). Tỷ lệ hoàn tăng theo giá trị đơn: 3,0% → 6,5% → 14,0%.',
        },
        {
          kind: 'quiz',
          id: 'return-to-sender-root-cause-pareto-q2',
          question: 'Nhóm nào là ứng viên số một cho can thiệp?',
          options: [
            {
              id: 'a',
              text: 'Trả trước vì tỷ lệ hoàn thấp nhất, cần nâng cho bằng các nhóm khác.',
              explain: 'Đây là hiểu ngược: nhóm có tỷ lệ thấp nhất không phải mục tiêu cần cải thiện nhất.',
            },
            {
              id: 'b',
              text: 'COD đơn từ 300 nghìn, vì kết hợp được tỷ lệ hoàn cao (6,5%–14,0%) và đóng góp lớn (60% tổng hoàn).',
              correct: true,
              explain: 'Đúng. Cần cả hai điều kiện: đóng góp lớn và tỷ lệ cao, nghĩa là có dư địa giảm đáng kể.',
            },
            {
              id: 'c',
              text: 'COD đơn dưới 300 nghìn vì số lượng bưu kiện lớn nhất.',
              explain: 'Nhóm này có tỷ lệ hoàn chỉ 3,0% và đóng góp 20%; không phải nơi có hiệu quả cao nhất.',
            },
          ],
        },
      ],
    },
    {
      id: 'hypothesis',
      kind: 'analysis',
      title: 'Bước 2 — Giả thuyết cho ba lý do đầu và cách kiểm tra',
      blocks: [
        {
          kind: 'table',
          title: 'Từ chối nhận (COD): theo số ngày từ lúc đặt đến lần giao đầu tiên',
          columns: [
            { key: 'lag', label: 'Số ngày từ đặt đến giao lần đầu' },
            { key: 'parcels', label: 'Bưu kiện COD', align: 'right' },
            { key: 'refuse', label: 'Từ chối nhận', align: 'right' },
            { key: 'rate', label: 'Tỷ lệ', align: 'right' },
          ],
          rows: [
            { lag: '≤ 2 ngày', parcels: '70.000', refuse: 840, rate: '1,2%' },
            { lag: '3–4 ngày', parcels: '36.000', refuse: '1.080', rate: '3,0%' },
            { lag: '≥ 5 ngày', parcels: '14.000', refuse: 600, rate: '4,3%' },
            { lag: 'Tổng', parcels: '120.000', refuse: '2.520', rate: '2,1%' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Giao càng muộn, khách càng từ chối: 1,2% → 4,3% (gấp 3,6 lần). Phù hợp giả thuyết "mua theo cảm hứng, hết hứng khi chờ lâu", nhưng chưa chứng minh nhân quả: đơn giao muộn có thể thuộc tuyến xa hay hàng khó.',
        },
        {
          kind: 'table',
          title: 'Sai/thiếu địa chỉ: theo cách nhập địa chỉ',
          columns: [
            { key: 'way', label: 'Cách nhập' },
            { key: 'parcels', label: 'Bưu kiện', align: 'right' },
            { key: 'wrong', label: 'Hoàn vì địa chỉ', align: 'right' },
            { key: 'rate', label: 'Tỷ lệ', align: 'right' },
          ],
          rows: [
            { way: 'Tự nhập tay', parcels: '30.000', wrong: '1.000', rate: '3,33%' },
            { way: 'Chọn từ gợi ý địa chỉ', parcels: '170.000', wrong: 350, rate: '0,21%' },
            { way: 'Tổng', parcels: '200.000', wrong: '1.350', rate: '0,68%' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
          caption: 'Nhập tay có tỷ lệ cao hơn 16 lần. Giả thuyết về chất lượng dữ liệu đầu vào: chuyển người dùng sang gợi ý địa chỉ có thể giảm phần lớn lý do này.',
        },
        {
          kind: 'table',
          title: 'Ba giả thuyết hàng đầu',
          columns: [
            { key: 'h', label: 'Giả thuyết' },
            { key: 'test', label: 'Dữ liệu / cách kiểm tra' },
            { key: 'action', label: 'Can thiệp thử' },
          ],
          rows: [
            {
              h: 'H1. Khách COD đổi ý khi chờ lâu / không xác nhận đơn',
              test: 'Từ chối theo thời gian chờ (đã thấy); thêm: có xác nhận đơn trước khi giao không',
              action: 'Gọi/nhắn xác nhận COD cho đơn ≥ 300 nghìn trước khi giao; ưu tiên giao nhanh',
            },
            {
              h: 'H2. Không liên lạc được do số điện thoại sai hoặc giờ giao không phù hợp',
              test: 'Nhật ký cuộc gọi lần 1–3, giờ gọi, tỷ lệ số điện thoại sai',
              action: 'Hẹn khung giờ nhận, nhắn tin trước khi đến, xác thực số điện thoại khi tạo đơn',
            },
            {
              h: 'H3. Địa chỉ nhập tay thiếu chuẩn',
              test: 'Tỷ lệ theo cách nhập (đã thấy 3,33% so với 0,21%)',
              action: 'Bắt buộc dùng gợi ý địa chỉ hoặc kiểm tra tự động khi nhập tay',
            },
          ],
          caption: 'H1 và H3 đã có bằng chứng bước đầu; H2 cần thêm dữ liệu cuộc gọi.',
        },
        {
          kind: 'quiz',
          id: 'return-to-sender-root-cause-pareto-q3',
          question: 'Một đồng nghiệp đề xuất "tăng phí COD để giảm hoàn". Bạn nên phản hồi thế nào?',
          options: [
            {
              id: 'a',
              text: 'Đồng ý, vì COD là nguồn hoàn lớn nhất.',
              explain: 'Đóng góp lớn của COD chưa nói rằng phí là nguyên nhân; tăng phí có thể làm mất khách mà không giảm hoàn.',
            },
            {
              id: 'b',
              text: 'Chưa, trước hết thử xác nhận đơn và giao nhanh cho COD ≥ 300 nghìn bằng thử nghiệm có nhóm đối chứng, đo tỷ lệ hoàn và doanh thu.',
              correct: true,
              explain: 'Đúng. Giả thuyết là khách đổi ý vì chờ lâu và không xác nhận; can thiệp đó rẻ hơn và đo được, tránh tác dụng phụ của tăng phí.',
            },
            {
              id: 'c',
              text: 'Khóa COD cho đơn trên 1 triệu.',
              explain: 'Quá mạnh: nhóm này có nhiều đơn hợp lệ (86% giao thành công); cần can thiệp có đối chứng trước.',
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
          md: '**Kết luận:** Bốn lý do đầu (từ chối nhận, không liên lạc được, sai địa chỉ, hàng hỏng/sai hàng) chiếm 80% hoàn. **COD từ 300 nghìn** chiếm 30% bưu kiện nhưng 60% hoàn. Hai can thiệp rẻ và đo được: xác nhận COD + giao nhanh, và địa chỉ chuẩn qua gợi ý. Chi phí tiềm năng: từ chối nhận 121,5 triệu và địa chỉ 60,75 triệu đồng mỗi tháng.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Thử nghiệm xác nhận đơn COD ≥ 300 nghìn (gọi/nhắn) và ưu tiên giao trong 2 ngày, có nhóm đối chứng 20%',
              owner: 'Trưởng vận hành chặng cuối + Chăm sóc khách hàng',
              metric: 'Tỷ lệ hoàn của COD ≥ 300 nghìn; chi phí xác nhận mỗi đơn',
              threshold: 'Giảm tỷ lệ hoàn ≥ 2 điểm (từ 6,5–14,0%) và chi phí xác nhận < 45 nghìn đ × số hoàn tránh được',
            },
            {
              action: 'Đưa gợi ý địa chỉ thành mặc định; nhập tay phải qua kiểm tra tự động',
              owner: 'Product + Data/Analytics',
              metric: 'Tỷ lệ nhập tay; hoàn vì địa chỉ',
              threshold: 'Nhập tay từ 15% xuống ≤ 5%; hoàn vì địa chỉ từ 0,68% xuống ≤ 0,3%',
            },
            {
              action: 'Thu thập nhật ký liên lạc 3 lần giao và số điện thoại sai để kiểm tra H2; thử hẹn khung giờ nhận',
              owner: 'Vận hành chặng cuối + Data/Analytics',
              metric: 'Không liên lạc được sau 3 lần / bưu kiện',
              threshold: 'Từ 1,1% (2.250/200.000) xuống ≤ 0,8%',
            },
            {
              action: 'Báo cáo Pareto hằng tháng theo lý do × nhóm thanh toán × giá trị, kèm chi phí hoàn',
              owner: 'Data/Analytics',
              metric: 'Lũy kế lý do; chi phí hoàn',
              threshold: 'Cảnh báo khi một nhóm vượt 35% tổng hoàn hoặc tỷ lệ hoàn tổng > 5%',
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
              title: 'Chỉ nhìn số lượng, bỏ qua tỷ lệ trong nhóm',
              why: 'Nhóm lớn có thể có tỷ lệ thấp; nhóm nhỏ nhưng tỷ lệ cao mới có dư địa cải thiện lớn.',
              instead: 'Xem cả đóng góp và tỷ lệ hoàn trong nhóm (như COD > 1 triệu 14,0%).',
            },
            {
              title: 'Coi Pareto là bằng chứng nguyên nhân',
              why: 'Pareto chỉ nói *cái gì* lớn, không nói *vì sao*. Lý do do tài xế nhập có thể không đúng thực tế.',
              instead: 'Dùng Pareto để chọn trọng tâm, rồi dùng giả thuyết và kiểm tra để tìm nguyên nhân.',
            },
            {
              title: 'Xử lý theo lý do dễ làm nhất thay vì lý do lớn nhất',
              why: 'Cải thiện lý do chiếm 6% dù hoàn hảo chỉ giảm 6% tổng hoàn.',
              instead: 'Xếp theo đóng góp × khả năng giảm × chi phí can thiệp.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Pareto theo lý do rồi theo nhóm để chọn vài thủ phạm đầu bảng; luôn xem cả đóng góp lẫn tỷ lệ trong nhóm.',
    'Mỗi thủ phạm cần một giả thuyết kiểm tra được bằng dữ liệu có sẵn (thời gian chờ, cách nhập địa chỉ).',
    'Quy ra chi phí và chọn can thiệp rẻ, đo được, có nhóm đối chứng.',
  ],
  references: [
    {
      title: 'What is a Pareto Chart?',
      publisher: 'ASQ (American Society for Quality)',
      url: 'https://asq.org/quality-resources/pareto',
      note: 'Hướng dẫn tạo và đọc biểu đồ Pareto: xếp nguyên nhân giảm dần và đường lũy kế để chọn ưu tiên.',
    },
    {
      title: 'Pareto chart',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Pareto_chart',
      note: 'Định nghĩa biểu đồ Pareto và mối liên hệ với quy tắc 80/20.',
    },
    {
      title: 'Reverse logistics',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Reverse_logistics',
      note: 'Tổng quan logistics ngược (hàng hoàn/trả lại) và chi phí của chúng.',
    },
  ],
}
