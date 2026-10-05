import type { CaseStudy } from '../types'

/*
 * Số liệu mock (game casual; tháng trước = A, tháng này = B), đã kiểm tra khớp nhau:
 *   A: 50.000 cài · Organic 25.000 (50%) × 30,0% = 7.500 · Search 15.000 (30%) × 24,0% = 3.600
 *      · Ad network mới 10.000 (20%) × 12,0% = 1.200 → 12.300 / 50.000 = 24,6%
 *   B: 60.000 cài · Organic 24.000 (40%) × 30,2% = 7.248 · Search 12.000 (20%) × 23,8% = 2.856
 *      · Ad network mới 24.000 (40%) × 11,9% = 2.856 → 12.960 / 60.000 = 21,6%  (−3,0 điểm %)
 *   Phân rã (trọng số A làm gốc):
 *     Mix  = Σ (wB − wA) × rA = (−0,1×30,0) + (−0,1×24,0) + (+0,2×12,0) = −3,0 − 2,4 + 2,4 = −3,0
 *     Rate = Σ wB × (rB − rA) = 0,4×0,2 + 0,2×(−0,2) + 0,4×(−0,1) = 0,08 − 0,04 − 0,04 = 0,0
 *     D7 B theo cơ cấu A (mix-adjusted) = 0,5×30,2 + 0,3×23,8 + 0,2×11,9 = 15,10 + 7,14 + 2,38 = 24,62%
 *   Ad network tháng B tách theo loại chiến dịch:
 *     Rewarded 9.600 × 5,0% = 480 · Playable 14.400 × 16,5% = 2.376 → 2.856 (11,9%)
 *     CPI: Rewarded 9.000 đ, Playable 14.000 đ → bình quân (86,4 tr + 201,6 tr) / 24.000 = 12.000 đ
 *     LTV 180 ngày dự báo/cài: Rewarded 5.400 đ, Playable 32.400 đ → bình quân 518,4 tr / 24.000 = 21.600 đ
 *     Search: CPI 45.000 đ, LTV 72.000 đ; chi tiêu 12.000 × 45.000 = 540 tr
 *   LTV/CAC: Search 1,6 · Network 1,8 · Rewarded 0,6 · Playable 2,31
 *   Chi phí / người giữ chân D7: Search 45.000/0,238 ≈ 189.100 · Network 12.000/0,119 ≈ 100.800
 *     · Rewarded 9.000/0,05 = 180.000 · Playable 14.000/0,165 ≈ 84.800
 */
export const d7Acquisition: CaseStudy = {
  id: 'd7-acquisition',
  title: 'D7 giảm 3 điểm %: sản phẩm kém đi hay nguồn người dùng đổi?',
  domain: 'mobile',
  level: 'junior',
  minutes: 9,
  skills: ['mix-effect', 'retention', 'segmentation', 'unit-economics'],
  question:
    'D7 toàn app giảm từ 24,6% xuống 21,6% trong tháng này, đúng lúc một ad network mới tăng gấp đôi tỷ trọng người cài. Sản phẩm có vấn đề không, và có nên cắt kênh mới?',
  summary:
    'Phân rã mức giảm D7 thành hiệu ứng mix và hiệu ứng tỷ lệ, so sánh trong từng kênh, rồi đánh giá kênh bằng LTV/CAC thay vì chỉ nhìn D7.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst của một studio game casual. Tháng này team User Acquisition (UA) chuyển một phần ngân sách từ Search Ads sang một **ad network mới** chạy quảng cáo playable và rewarded. Trong buổi review tháng, Product Director lo lắng: *"D7 giảm 3 điểm %, bản cập nhật level mới có vấn đề à?"* Còn UA lead thì muốn giữ kênh mới vì *"cài rẻ"*.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'D7 toàn app', value: '21,6%', delta: '−3,0 điểm %', tone: 'negative', note: 'Tháng trước: 24,6%' },
            { label: 'Lượt cài', value: '60.000', delta: '+20%', tone: 'positive', note: 'Tháng trước: 50.000' },
            { label: 'Tỷ trọng ad network mới', value: '40%', delta: '×2', tone: 'warning', note: 'Tháng trước: 20%' },
            { label: 'Người giữ chân D7', value: '12.960', delta: '+5,4%', tone: 'positive', note: 'Tháng trước: 12.300' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mâu thuẫn đáng để ý',
          md: 'Tỷ lệ D7 giảm nhưng **số người giữ chân lại tăng** (12.300 → 12.960). Khi mẫu số thay đổi về cơ cấu, tỷ lệ tổng có thể đi xuống dù không nhóm nào tệ đi. Đây là dấu hiệu cần kiểm tra hiệu ứng mix trước khi đổ lỗi cho sản phẩm.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: tỷ lệ tổng là bình quân có trọng số',
      blocks: [
        {
          kind: 'formula',
          expression: 'D7 tổng = Σ (tỷ trọng cài của kênh i × D7 của kênh i)',
          note: 'Vì vậy D7 tổng có thể thay đổi theo hai đường: **D7 trong từng kênh đổi** (hiệu ứng tỷ lệ) hoặc **tỷ trọng các kênh đổi** (hiệu ứng mix). Hai đường này cần hành động hoàn toàn khác nhau.',
        },
        {
          kind: 'formula',
          expression: 'ΔD7 = Σ (w_mới − w_cũ) × r_cũ  [mix]  +  Σ w_mới × (r_mới − r_cũ)  [tỷ lệ]',
          note: 'w = tỷ trọng cài, r = D7 của kênh. Hai phần cộng lại đúng bằng mức thay đổi tổng. Đây là một cách phân rã phổ biến; đổi kỳ gốc sẽ cho con số hơi khác, nên luôn ghi rõ dùng kỳ nào làm gốc.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Tách D7 theo kênh**: kênh nào đổi tỷ lệ, kênh nào đổi tỷ trọng?',
            '**Phân rã ΔD7**: bao nhiêu điểm % là mix, bao nhiêu là tỷ lệ?',
            '**Tính D7 điều chỉnh mix**: nếu cơ cấu kênh giữ như tháng trước thì D7 bây giờ là bao nhiêu?',
            '**Đánh giá kênh bằng kinh tế đơn vị**: D7 thấp chưa chắc là kênh tệ; xem LTV/CAC và chi phí trên mỗi người giữ chân.',
          ],
        },
      ],
    },
    {
      id: 'by-channel',
      kind: 'analysis',
      title: 'Bước 1 — So trong từng kênh: không kênh nào xấu đi',
      blocks: [
        {
          kind: 'table',
          title: 'Lượt cài và D7 theo kênh',
          columns: [
            { key: 'channel', label: 'Kênh' },
            { key: 'a', label: 'Tháng trước: cài (tỷ trọng)', align: 'right' },
            { key: 'b', label: 'Tháng này: cài (tỷ trọng)', align: 'right' },
            { key: 'd7', label: 'D7 trước → nay', align: 'right' },
          ],
          rows: [
            { channel: 'Organic', a: '25.000 (50%)', b: '24.000 (40%)', d7: '30,0% → 30,2%' },
            { channel: 'Search Ads', a: '15.000 (30%)', b: '12.000 (20%)', d7: '24,0% → 23,8%' },
            { channel: 'Ad network mới', a: '10.000 (20%)', b: '24.000 (40%)', d7: '12,0% → 11,9%' },
            { channel: 'Tổng', a: '50.000', b: '60.000', d7: '24,6% → 21,6%' },
          ],
          highlight: [
            { row: 2, tone: 'warning' },
            { row: 3, tone: 'negative' },
          ],
          caption: 'Từng kênh dao động ±0,2 điểm %, trong biên nhiễu thông thường. Chỉ có tổng giảm 3 điểm %.',
        },
        {
          kind: 'chart',
          title: 'Cơ cấu lượt cài theo kênh',
          type: 'stackedBar',
          xKey: 'month',
          unit: '%',
          series: [
            { key: 'organic', label: 'Organic' },
            { key: 'search', label: 'Search Ads' },
            { key: 'network', label: 'Ad network mới' },
          ],
          data: [
            { month: 'Tháng trước', organic: 50, search: 30, network: 20 },
            { month: 'Tháng này', organic: 40, search: 20, network: 40 },
          ],
          caption: 'Kênh có D7 thấp nhất (12%) tăng từ 1/5 lên 2/5 lượt cài, kéo bình quân xuống.',
        },
        {
          kind: 'quiz',
          id: 'd7-acquisition-q1',
          question: 'Từ bảng theo kênh, nên nói gì với Product Director?',
          options: [
            {
              id: 'a',
              text: 'Bản cập nhật level mới làm người chơi bỏ game sớm hơn, cần rollback.',
              explain:
                'Nếu bản cập nhật có vấn đề, D7 của organic và search (không đổi nguồn) cũng phải giảm. Cả hai gần như giữ nguyên, nên không có bằng chứng sản phẩm xấu đi.',
            },
            {
              id: 'b',
              text: 'D7 tổng giảm vì cơ cấu người dùng chuyển sang kênh có D7 thấp; trong từng kênh, khả năng giữ chân không đổi.',
              correct: true,
              explain:
                'Đúng. Đây là hiệu ứng mix, một dạng của nghịch lý Simpson: số tổng đi một hướng trong khi từng nhóm đứng yên. Sản phẩm không cần sửa vì lý do này; câu hỏi đúng chuyển sang bên UA: kênh mới có đáng tiền không.',
            },
            {
              id: 'c',
              text: 'Ad network mới mang về người dùng kém chất lượng, nên cắt kênh ngay.',
              explain:
                'D7 thấp không đồng nghĩa kênh lỗ. Kênh có thể có giá cài rẻ đến mức vẫn sinh lời. Cần xem chi phí và giá trị trước khi quyết định cắt.',
            },
          ],
        },
      ],
    },
    {
      id: 'decompose',
      kind: 'analysis',
      title: 'Bước 2 — Phân rã: −3,0 điểm % đều là hiệu ứng mix',
      blocks: [
        {
          kind: 'table',
          title: 'Phân rã ΔD7 theo kênh (tháng trước làm gốc)',
          columns: [
            { key: 'channel', label: 'Kênh' },
            { key: 'mix', label: 'Mix: (w_mới − w_cũ) × r_cũ', align: 'right' },
            { key: 'rate', label: 'Tỷ lệ: w_mới × (r_mới − r_cũ)', align: 'right' },
          ],
          rows: [
            { channel: 'Organic', mix: '(−0,10) × 30,0 = −3,00', rate: '0,40 × (+0,2) = +0,08' },
            { channel: 'Search Ads', mix: '(−0,10) × 24,0 = −2,40', rate: '0,20 × (−0,2) = −0,04' },
            { channel: 'Ad network mới', mix: '(+0,20) × 12,0 = +2,40', rate: '0,40 × (−0,1) = −0,04' },
            { channel: 'Tổng', mix: '−3,00 điểm %', rate: '0,00 điểm %' },
          ],
          highlight: [{ row: 3, tone: 'warning' }],
          caption: 'Mix −3,00 + tỷ lệ 0,00 = −3,0 điểm %, khớp với 24,6% → 21,6%.',
        },
        {
          kind: 'formula',
          expression: 'D7 điều chỉnh mix (tháng này, theo cơ cấu tháng trước) = 0,5 × 30,2 + 0,3 × 23,8 + 0,2 × 11,9 = 24,6%',
          note: 'Giữ nguyên cơ cấu kênh, D7 tháng này bằng đúng tháng trước. Con số này trả lời câu hỏi "sản phẩm có giữ chân kém đi không" mà không bị nhiễu bởi quyết định phân bổ ngân sách.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Đọc bảng theo hàng: phần mix âm của Organic (−3,00) **không có nghĩa organic tệ đi**. Nó chỉ nói organic, kênh giữ chân tốt nhất, chiếm tỷ trọng nhỏ hơn. Khi báo cáo, nói "D7 giảm vì tỷ trọng kênh có D7 thấp tăng gấp đôi", đừng nói "organic kéo D7 xuống".',
        },
        {
          kind: 'quiz',
          id: 'd7-acquisition-q2',
          question: 'Tháng sau UA tăng ad network lên 60% lượt cài. Product muốn có một chỉ số để theo dõi chất lượng sản phẩm. Nên dùng gì?',
          options: [
            {
              id: 'a',
              text: 'D7 tổng, vì đó là con số đơn giản và quen thuộc nhất.',
              explain:
                'D7 tổng sẽ giảm tiếp chỉ vì cơ cấu thay đổi, khiến Product hiểu nhầm là sản phẩm tệ đi. Nó trộn hai quyết định khác nhau (sản phẩm và phân bổ ngân sách) vào một số.',
            },
            {
              id: 'b',
              text: 'D7 của organic, vì đó là người dùng "thật".',
              explain:
                'Organic là tín hiệu hữu ích nhưng chỉ đại diện một phần người dùng; một thay đổi sản phẩm có thể ảnh hưởng người dùng trả phí khác với organic. Bỏ qua 60% lượt cài là mất thông tin.',
            },
            {
              id: 'c',
              text: 'D7 theo từng kênh, kèm D7 điều chỉnh mix với cơ cấu kênh cố định của một kỳ gốc.',
              correct: true,
              explain:
                'Đúng. D7 theo kênh cho thấy chỗ nào đổi; D7 điều chỉnh mix tóm thành một con số so sánh được qua các tháng mà không bị ngân sách UA làm nhiễu. D7 tổng vẫn có thể báo cáo, nhưng phải đi kèm hai chỉ số này.',
            },
          ],
        },
      ],
    },
    {
      id: 'economics',
      kind: 'analysis',
      title: 'Bước 3 — Đánh giá kênh: D7 thấp nhưng chưa chắc lỗ',
      blocks: [
        {
          kind: 'table',
          title: 'Kinh tế đơn vị theo kênh và loại chiến dịch (tháng này)',
          columns: [
            { key: 'source', label: 'Nguồn' },
            { key: 'installs', label: 'Cài', align: 'right' },
            { key: 'd7', label: 'D7', align: 'right' },
            { key: 'cpi', label: 'CPI', align: 'right' },
            { key: 'ltv', label: 'LTV 180 ngày dự báo/cài', align: 'right' },
            { key: 'ratio', label: 'LTV/CAC', align: 'right' },
            { key: 'cpr', label: 'Chi phí/người giữ chân D7', align: 'right' },
          ],
          rows: [
            { source: 'Search Ads', installs: '12.000', d7: '23,8%', cpi: '45.000 đ', ltv: '72.000 đ', ratio: '1,6', cpr: '189.100 đ' },
            { source: 'Ad network mới (tổng)', installs: '24.000', d7: '11,9%', cpi: '12.000 đ', ltv: '21.600 đ', ratio: '1,8', cpr: '100.800 đ' },
            { source: '↳ Playable', installs: '14.400', d7: '16,5%', cpi: '14.000 đ', ltv: '32.400 đ', ratio: '2,3', cpr: '84.800 đ' },
            { source: '↳ Rewarded', installs: '9.600', d7: '5,0%', cpi: '9.000 đ', ltv: '5.400 đ', ratio: '0,6', cpr: '180.000 đ' },
          ],
          highlight: [
            { row: 2, tone: 'positive' },
            { row: 3, tone: 'negative' },
          ],
          caption:
            'CAC ở đây là CPI (chi phí trên mỗi lượt cài). LTV 180 ngày được dự báo từ doanh thu 30 ngày đầu của các cohort trước, nên còn sai số.',
        },
        {
          kind: 'text',
          md: 'Ba điều rút ra từ bảng: (1) tính trung bình, ad network mới **sinh lời tốt hơn Search** (1,8 so với 1,6) dù D7 chỉ bằng một nửa, vì giá cài rẻ gần 4 lần; (2) bên trong kênh lại có hai thế giới: **Playable** rất tốt, **Rewarded** lỗ (mỗi 9.000 đ chi ra chỉ thu về 5.400 đ); (3) Rewarded chiếm 40% lượt cài của kênh nhưng chỉ mang về 480 trên 2.856 người giữ chân D7 (17%).',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Người dùng rewarded: cài để nhận thưởng',
          md: 'Quảng cáo rewarded/incentivized thưởng cho người dùng khi cài app khác, nên nhiều người cài xong rồi bỏ. D7 rất thấp kèm LTV gần bằng 0 là dấu hiệu điển hình. Nên kiểm tra thêm các dấu hiệu gian lận cài đặt (thời gian từ click đến cài bất thường, thiết bị trùng lặp) với bên đo lường (MMP).',
        },
        {
          kind: 'quiz',
          id: 'd7-acquisition-q3',
          question: 'Với ngân sách tháng sau không đổi, quyết định nào tốt nhất cho ad network mới?',
          options: [
            {
              id: 'a',
              text: 'Cắt toàn bộ kênh vì D7 11,9% chưa bằng một nửa Search.',
              explain:
                'Cắt cả kênh sẽ mất luôn phần Playable có LTV/CAC 2,3, tốt nhất trong mọi nguồn trả phí. Đánh giá kênh bằng một chỉ số giữ chân duy nhất bỏ qua phía chi phí.',
            },
            {
              id: 'b',
              text: 'Giữ nguyên phân bổ, vì LTV/CAC trung bình của kênh 1,8 là tốt.',
              explain:
                'Trung bình 1,8 che đi phần Rewarded đang lỗ (0,6). Đây cũng là bẫy trung bình giống như D7 tổng: phải nhìn xuống cấp chiến dịch.',
            },
            {
              id: 'c',
              text: 'Giảm mạnh Rewarded, dồn ngân sách sang Playable và đặt giá thầu theo chỉ số chất lượng (ROAS, chi phí/người giữ chân D7), theo dõi LTV thực tế khi cohort đủ tuổi.',
              correct: true,
              explain:
                'Đúng. Quyết định ở cấp chiến dịch, dựa trên kinh tế đơn vị và có kiểm chứng sau. Khi tăng ngân sách Playable, CPI biên có thể tăng, nên phải theo dõi LTV/CAC theo từng đợt tăng chứ không giả định giữ nguyên 2,3.',
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
          md: '**Kết luận cho buổi review:** D7 giảm 3,0 điểm % **hoàn toàn do hiệu ứng mix**: ad network mới (D7 ~12%) tăng từ 20% lên 40% lượt cài. Trong từng kênh, D7 không đổi; D7 điều chỉnh mix vẫn là 24,6%. Sản phẩm không có dấu hiệu xấu đi. Vấn đề thật nằm ở **chiến dịch Rewarded** (LTV/CAC 0,6), trong khi Playable là nguồn trả phí hiệu quả nhất (2,3).',
        },
        {
          kind: 'actions',
          items: [
            {
              action:
                'Đổi dashboard retention: hiển thị D7 theo kênh và D7 điều chỉnh mix (cơ cấu kênh cố định theo quý gốc), D7 tổng chỉ để tham khảo',
              owner: 'Data/Analytics',
              metric: 'D7 điều chỉnh mix, D7 theo kênh',
              threshold: 'Cảnh báo Product khi D7 điều chỉnh mix giảm > 1 điểm % hoặc D7 một kênh giảm > 2 điểm % so với trung bình 4 tuần',
            },
            {
              action:
                'Giảm ngân sách Rewarded xuống mức thử nghiệm, chuyển phần còn lại sang Playable; đặt giá thầu theo ROAS hoặc chi phí/người giữ chân D7 thay vì CPI',
              owner: 'UA lead',
              metric: 'LTV/CAC dự báo theo chiến dịch, chi phí/người giữ chân D7',
              threshold: 'Chỉ giữ chiến dịch có LTV/CAC dự báo ≥ 1,3; tăng ngân sách theo bước 20%/tuần và dừng khi LTV/CAC biên < 1,3',
            },
            {
              action:
                'Đối chiếu LTV dự báo với doanh thu thực tế khi các cohort đủ 30, 60, 90 ngày; kiểm tra gian lận cài đặt với MMP cho các nguồn D7 < 6%',
              owner: 'Analyst + UA lead',
              metric: 'Sai số dự báo LTV, tỷ lệ cài bị gắn cờ gian lận',
              threshold: 'Sai số dự báo LTV D90 trong ±20%; nguồn có > 10% cài bị gắn cờ thì chặn',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Tách hai quyết định đang bị trộn vào một con số: **Product** theo dõi chỉ số đã loại mix để biết sản phẩm có tốt lên hay không, còn **UA** tối ưu ngân sách bằng kinh tế đơn vị ở cấp chiến dịch. Nhờ vậy không ai rollback một bản cập nhật vô tội, và cũng không ai cắt cả kênh đang có nguồn sinh lời tốt nhất. Ngưỡng LTV/CAC và bước tăng ngân sách giúp quyết định có thể đảo ngược nếu dự báo sai.',
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
              title: 'Đọc tỷ lệ tổng như thể cơ cấu không đổi',
              why: 'Khi tỷ trọng các nhóm thay đổi, tỷ lệ tổng có thể giảm dù không nhóm nào xấu đi (nghịch lý Simpson). Kết luận "sản phẩm tệ đi" lúc này là sai.',
              instead: 'Luôn cắt theo nhóm có tỷ lệ nền khác nhau (kênh, quốc gia, nền tảng) và tính phần mix, phần tỷ lệ trước khi giải thích.',
            },
            {
              title: 'Đánh giá kênh chỉ bằng D7',
              why: 'D7 chỉ đo giữ chân, bỏ qua chi phí. Kênh có D7 thấp nhưng giá cài rất rẻ vẫn có thể sinh lời hơn kênh D7 cao.',
              instead: 'Đánh giá kênh bằng LTV/CAC, ROAS, thời gian hoàn vốn và chi phí trên mỗi người giữ chân; dùng D7 như chỉ báo sớm.',
            },
            {
              title: 'Dừng ở cấp kênh',
              why: 'Trung bình của kênh che đi chiến dịch lỗ (Rewarded 0,6) và chiến dịch tốt (Playable 2,3), giống cách D7 tổng che đi từng kênh.',
              instead: 'Đi xuống cấp chiến dịch, loại quảng cáo hoặc publisher và ra quyết định ở cấp đó.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Tỷ lệ tổng là bình quân có trọng số: phân rã ΔD7 thành phần mix và phần tỷ lệ trước khi kết luận sản phẩm tốt lên hay xấu đi.',
    'Báo cáo D7 theo kênh kèm D7 điều chỉnh mix để tách chất lượng sản phẩm khỏi quyết định phân bổ ngân sách.',
    'Đánh giá kênh bằng kinh tế đơn vị (LTV/CAC, chi phí/người giữ chân) ở cấp chiến dịch, không phải bằng D7 trung bình của cả kênh.',
  ],
  references: [
    {
      title: "Simpson's paradox",
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Simpson%27s_paradox',
      note: 'Giải thích và ví dụ kinh điển về việc xu hướng của từng nhóm khác với xu hướng khi gộp lại.',
    },
    {
      title: 'What is LTV? How to calculate it and why it is important',
      publisher: 'AppsFlyer Glossary',
      url: 'https://www.appsflyer.com/glossary/ltv/',
      note: 'Cách tính LTV cho app mobile và cách dùng LTV so với chi phí thu hút để đánh giá kênh.',
    },
    {
      title: 'Cohort analysis explained',
      publisher: 'AppsFlyer Glossary',
      url: 'https://www.appsflyer.com/glossary/cohort-analysis/',
      note: 'Phân tích cohort theo nguồn và chiến dịch để so sánh retention, doanh thu của từng nhóm người dùng.',
    },
  ],
}
