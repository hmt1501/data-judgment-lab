import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — sàn "Chợ Số" và các nhóm ngành là giả định. "Trước" = trung bình tháng của 3 tháng trước;
 * "sau" = tháng thứ 4 sau khi tăng phí (đã ổn định). Đã kiểm tra khớp nhau:
 *   Nhóm ngành thử (Thời trang, Gia dụng, Phụ kiện): phí hoa hồng 5% → 7%
 *     GMV 400 tỷ → 360 tỷ · người bán hoạt động 10.000 → 9.000 · hoa hồng 400 × 5% = 20,0 tỷ → 360 × 7% = 25,2 tỷ (+26,0% — cách đọc trước/sau)
 *   Nhóm ngành đối chứng (Sách, Đồ chơi, Thể thao): phí giữ 5% · GMV 600 → 630 tỷ (+5,0%) · người bán 15.000 → 15.300 (+2,0%)
 *   Phản thực tế nhóm thử: GMV 400 × 1,05 = 420 tỷ; người bán 10.000 × 1,02 = 10.200
 *   Tác động: GMV 360 − 420 = −60 tỷ (−14,3%) · người bán 9.000 vs 10.200 = −1.200 (−11,8%)
 *   Hoa hồng thực tế 25,2 vs phản thực tế 420 × 5% = 21,0 → +4,2 tỷ/tháng (+20,0%)
 *   Doanh thu quảng cáo của sàn (1,5% GMV): 5,4 vs 6,3 phản thực tế → −0,9 · ròng = 4,2 − 0,9 = +3,3 tỷ/tháng
 *   Theo phân khúc người bán (GMV tỷ đ: trước → sau thực tế; phản thực tế = trước × 1,05):
 *     Nhỏ 6.000 → 5.100 người bán, GMV 60 → 42, phản thực tế 63 → −21 (−33,3%) · hoa hồng 42 × 7% = 2,94 vs 63 × 5% = 3,15 → −0,21
 *     Vừa 3.500 → 3.400, GMV 140 → 118, phản thực tế 147 → −29 (−19,7%) · hoa hồng 8,26 vs 7,35 → +0,91
 *     Lớn 500 → 500, GMV 200 → 200, phản thực tế 210 → −10 (−4,8%) · hoa hồng 14,00 vs 10,50 → +3,50
 *     Tổng người bán 6.000 + 3.500 + 500 = 10.000 → 5.100 + 3.400 + 500 = 9.000 ✓; GMV 60 + 140 + 200 = 400 → 42 + 118 + 200 = 360 ✓;
 *     hoa hồng chênh −0,21 + 0,91 + 3,50 = 4,20 ✓
 *   Chuyển phí vào giá: giá niêm yết nhóm thử +2,5% vs đối chứng +0,5% → DiD +2,0 điểm %; bù đủ phí cần (1 − 5%) / (1 − 7%) − 1 = +2,15% → chuyển ≈ 93%
 *   Độ nhạy GMV mỗi +1 điểm phí (từ DiD, tuyến tính — là ngoại suy): nhỏ −16,7% · vừa −9,9% · lớn −2,4%
 *   Kịch bản phân khúc (nhỏ 5%, vừa 6%, lớn 8%): GMV 63 + 132,5 + 195,0 = 390,5 · hoa hồng 3,15 + 7,95 + 15,60 = 26,70 vs 21,0 → +5,7 (nhỏ +0,0; vừa +0,60; lớn +5,10)
 *     quảng cáo −(420 − 390,5) × 1,5% = −0,44 → ròng ≈ +5,3 tỷ/tháng, so với +3,3 khi tăng đồng loạt 7%
 *   Chỉ số người bán hoạt động (TB 3 tháng trước = 100): thử 100 101 99 | 97 93 91 90 ; đối chứng 100 99 101 | 101 101 102 102
 */
export const marketplaceCommissionChange: CaseStudy = {
  id: 'marketplace-commission-change',
  title: 'Tăng phí hoa hồng sàn: thu thêm trên đơn hay mất người bán?',
  domain: 'ecommerce',
  level: 'senior',
  minutes: 14,
  skills: ['unit-economics', 'causal', 'tradeoff'],
  question:
    'Sàn tăng phí hoa hồng từ 5% lên 7% ở một số ngành hàng: hoa hồng trên mỗi đơn tăng nhưng người bán rời đi. Tác động thật là bao nhiêu, và nên chọn mức phí nào cho từng phân khúc người bán?',
  summary:
    'Không thể A/B toàn sàn, nên dùng nhóm ngành thử và nhóm ngành đối chứng để ước lượng tác động lên GMV, người bán và doanh thu, tách theo phân khúc, rồi chọn mức phí có ngưỡng dừng.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng: sàn "Chợ Số" là giả định.* Để tăng doanh thu, sàn tăng **phí hoa hồng từ 5% lên 7%** cho 3 ngành hàng (Thời trang, Gia dụng, Phụ kiện) trong 4 tháng. Chính sách phí hiển thị công khai với người bán nên không thể chia ngẫu nhiên người bán trong cùng ngành, và cũng không thể thử trên toàn sàn. Báo cáo của Finance viết: *"Hoa hồng tăng 26%, đề xuất áp dụng toàn sàn."* Giám đốc Seller nhắc rằng nhiều người bán nhỏ đã than phiền và có người ngừng bán. Bạn được giao làm rõ.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Hoa hồng/tháng nhóm thử', value: '25,2 tỷ đ', delta: '+26,0% so với trước', tone: 'positive' },
            { label: 'GMV nhóm thử', value: '360 tỷ đ', delta: '−10,0%', tone: 'negative' },
            { label: 'Người bán hoạt động', value: '9.000', delta: '−10,0%', tone: 'negative' },
            { label: 'GMV nhóm đối chứng', value: '630 tỷ đ', delta: '+5,0% cùng giai đoạn', tone: 'neutral', note: 'số mô phỏng' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu',
          md: 'Trả lời bằng số: **(1)** hoa hồng thực sự tăng bao nhiêu sau khi tính GMV và người bán mất đi, **(2)** phân khúc nào chịu và phân khúc nào chi trả, **(3)** nên tăng mức nào cho từng phân khúc, và **(4)** dấu hiệu nào buộc phải dừng.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: doanh thu/đơn là một nửa phương trình',
      blocks: [
        {
          kind: 'formula',
          expression: 'Hoa hồng = GMV × Tỷ lệ phí (take rate)    ·    GMV = Người bán hoạt động × GMV TB/người bán',
          note: 'Tăng tỷ lệ phí nhân với GMV *mới*, không phải GMV cũ. Nếu GMV giảm nhanh hơn tỷ lệ phí tăng, doanh thu hoa hồng giảm. Hai bên của thị trường còn phụ thuộc nhau: ít người bán thì ít lựa chọn, ít người mua.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Phản thực tế**: GMV và người bán nhóm thử *sẽ ra sao* nếu không tăng phí? Mượn nhịp của nhóm ngành giữ nguyên phí.',
            '**Tách phân khúc**: người bán nhỏ, vừa, lớn có độ nhạy khác nhau nên không thể dùng một mức phí chung.',
            '**Chuyển phí vào giá**: người bán chuyển bao nhiêu phí sang giá niêm yết, người mua phản ứng ra sao.',
            '**Thời gian**: người bán rời dần, nhiều tháng sau mới thấy hết; đo cả ngắn hạn lẫn dài hạn.',
            '**Ngưỡng dừng**: xác định trước chỉ số và mức nào thì quay lại.',
          ],
        },
        {
          kind: 'quiz',
          id: 'marketplace-commission-change-q1',
          question: 'Nhóm thử có hoa hồng 20,0 → 25,2 tỷ (+26%), còn nhóm đối chứng có GMV +5%. Hoa hồng tăng thêm *do việc tăng phí* gần nhất với?',
          options: [
            {
              id: 'a',
              text: '+5,2 tỷ đ/tháng, vì hoa hồng tăng từ 20,0 lên 25,2 tỷ.',
              explain: 'Đây là trước/sau. Nó bỏ qua việc không tăng phí GMV nhóm thử cũng đã lên khoảng 420 tỷ nhờ xu hướng chung (+5%), tức hoa hồng nền là 21,0 tỷ.',
            },
            {
              id: 'b',
              text: '+4,2 tỷ đ/tháng: hoa hồng thực tế 25,2 trừ phản thực tế 420 × 5% = 21,0.',
              correct: true,
              explain: 'Đúng. Phản thực tế dùng nhịp của đối chứng. Và đây mới là hoa hồng; sau khi trừ doanh thu quảng cáo giảm (−0,9 tỷ), ròng còn +3,3 tỷ.',
            },
            {
              id: 'c',
              text: '+8,4 tỷ đ/tháng, vì 2 điểm phí tăng thêm × 420 tỷ GMV.',
              explain: 'Phép tính này giả định GMV không đổi dù phí tăng. Thực tế GMV nhóm thử thấp hơn 60 tỷ so với phản thực tế, nên không thu được 8,4.',
            },
          ],
        },
      ],
    },
    {
      id: 'effect',
      kind: 'analysis',
      title: 'Bước 1 — Tác động nhân quả theo nhóm ngành',
      blocks: [
        {
          kind: 'table',
          title: 'Nhóm thử vs nhóm đối chứng (mô phỏng)',
          columns: [
            { key: 'metric', label: 'Chỉ số' },
            { key: 'pre', label: 'Trước', align: 'right' },
            { key: 'post', label: 'Sau', align: 'right' },
            { key: 'cf', label: 'Phản thực tế', align: 'right' },
            { key: 'effect', label: 'Tác động', align: 'right' },
          ],
          rows: [
            { metric: 'GMV nhóm thử (tỷ đ)', pre: '400', post: '360', cf: '420', effect: '−60 (−14,3%)' },
            { metric: 'Người bán hoạt động', pre: '10.000', post: '9.000', cf: '10.200', effect: '−1.200 (−11,8%)' },
            { metric: 'Hoa hồng (tỷ đ)', pre: '20,0', post: '25,2', cf: '21,0', effect: '+4,2 (+20,0%)' },
            { metric: 'Doanh thu quảng cáo sàn (tỷ đ)', pre: '6,0', post: '5,4', cf: '6,3', effect: '−0,9' },
            { metric: 'Ròng (hoa hồng + quảng cáo)', pre: '—', post: '—', cf: '—', effect: '+3,3' },
          ],
          highlight: [{ row: 4, tone: 'warning' }],
          caption: 'Trước/sau nói "+5,2 tỷ hoa hồng". So với phản thực tế chỉ còn +4,2 tỷ, và ròng chỉ +3,3 tỷ sau khi tính quảng cáo giảm.',
        },
        {
          kind: 'chart',
          title: 'Chỉ số người bán hoạt động theo tháng (TB 3 tháng trước = 100, mô phỏng)',
          type: 'line',
          xKey: 'month',
          series: [
            { key: 'treated', label: 'Nhóm thử' },
            { key: 'control', label: 'Nhóm đối chứng' },
          ],
          data: [
            { month: 'M−3', treated: 100, control: 100 },
            { month: 'M−2', treated: 101, control: 99 },
            { month: 'M−1', treated: 99, control: 101 },
            { month: 'M+1', treated: 97, control: 101 },
            { month: 'M+2', treated: 93, control: 101 },
            { month: 'M+3', treated: 91, control: 102 },
            { month: 'M+4', treated: 90, control: 102 },
          ],
          marker: { x: 'M+1', label: 'Tăng phí 5% → 7%' },
          caption: 'Người bán rời dần chứ không rời ngay: sau 1 tháng mới giảm 3 điểm, sau 4 tháng giảm 12 điểm so với đối chứng. Đọc kết quả ở tháng đầu sẽ đánh giá thấp tác hại.',
        },
        {
          kind: 'text',
          md: '**Giá niêm yết:** giá nhóm thử tăng 2,5% còn nhóm đối chứng tăng 0,5%, nên chênh +2,0 điểm %. Để giữ nguyên doanh thu sau phí, người bán cần tăng giá (1 − 5%) / (1 − 7%) − 1 = **+2,15%**. Vậy khoảng **93%** phí tăng thêm đã được chuyển sang người mua, và đó là một phần lý do GMV giảm: giá cao hơn thì người mua mua ít hơn.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Nhóm đối chứng không ngẫu nhiên',
          md: 'Ngành hàng được chọn thử không ngẫu nhiên, và các ngành khác nhau có thể có xu hướng khác nhau. Hãy kiểm tra GMV và người bán hai nhóm đi cùng nhịp **nhiều tháng trước** mốc tăng phí (biểu đồ trên cho thấy chúng dao động quanh 100). Nếu chọn thử ở các ngành đang tăng trưởng nóng, tác động thật có thể nặng hơn hoặc nhẹ hơn.',
        },
      ],
    },
    {
      id: 'segments',
      kind: 'analysis',
      title: 'Bước 2 — Ai chi trả và ai rời đi: tách theo phân khúc người bán',
      blocks: [
        {
          kind: 'table',
          title: 'Tác động theo phân khúc (nhóm thử, tháng thứ 4, mô phỏng)',
          columns: [
            { key: 'seg', label: 'Phân khúc' },
            { key: 'sellers', label: 'Người bán (trước → sau)', align: 'right' },
            { key: 'gmv', label: 'GMV (thực tế vs phản thực tế, tỷ)', align: 'right' },
            { key: 'effect', label: 'Tác động GMV', align: 'right' },
            { key: 'comm', label: 'Hoa hồng chênh (tỷ)', align: 'right' },
          ],
          rows: [
            { seg: 'Nhỏ (TB 10 tr/tháng)', sellers: '6.000 → 5.100', gmv: '42 vs 63', effect: '−33,3%', comm: '−0,21' },
            { seg: 'Vừa (TB 40 tr/tháng)', sellers: '3.500 → 3.400', gmv: '118 vs 147', effect: '−19,7%', comm: '+0,91' },
            { seg: 'Lớn (TB 400 tr/tháng)', sellers: '500 → 500', gmv: '200 vs 210', effect: '−4,8%', comm: '+3,50' },
            { seg: 'Tổng', sellers: '10.000 → 9.000', gmv: '360 vs 420', effect: '−14,3%', comm: '+4,20' },
          ],
          highlight: [
            { row: 0, tone: 'negative' },
            { row: 2, tone: 'positive' },
          ],
          caption: 'Người bán nhỏ rời nhiều nhất và còn khiến hoa hồng phân khúc này *giảm*; người bán lớn gần như không rời nên đóng góp 3,50 / 4,20 ≈ 83% mức tăng.',
        },
        {
          kind: 'text',
          md: 'Từ DiD, độ nhạy GMV mỗi +1 điểm phí xấp xỉ **−16,7% (nhỏ), −9,9% (vừa), −2,4% (lớn)**. Người bán nhỏ có biên lợi nhuận mỏng và dễ chuyển sang kênh khác; người bán lớn có thương hiệu, tồn kho và vận hành gắn với sàn nên khó rời. Đây là cơ sở để **phân biệt mức phí**, không phải một con số chung.',
        },
        {
          kind: 'quiz',
          id: 'marketplace-commission-change-q2',
          question: 'Người bán nhỏ giảm GMV 33,3% và hoa hồng phân khúc này giảm 0,21 tỷ. Điều này gợi ý gì?',
          options: [
            {
              id: 'a',
              text: 'Bỏ qua phân khúc nhỏ vì đóng góp hoa hồng thấp; chỉ cần tối ưu cho người bán lớn.',
              explain: 'Người bán nhỏ tạo đa dạng hàng hóa và là nguồn người bán lớn tương lai. Mất họ ảnh hưởng chất lượng lựa chọn cho người mua, mà bảng trên chưa đo.',
            },
            {
              id: 'b',
              text: 'Tăng phí cho nhóm nhỏ làm mất cả GMV lẫn hoa hồng, nên giữ nguyên hoặc không tăng phí nhóm này và tăng chủ yếu ở nhóm ít nhạy.',
              correct: true,
              explain: 'Đúng. Với độ nhạy −16,7%/điểm, tăng 2 điểm phí khiến phí thu thêm không bù được GMV mất (42 × 7% = 2,94 < 63 × 5% = 3,15). Phân biệt theo phân khúc giữ được người bán nhỏ mà vẫn thu thêm từ nhóm lớn.',
            },
            {
              id: 'c',
              text: 'Kết quả là nhiễu vì người bán nhỏ có số lượng lớn, không cần điều chỉnh.',
              explain: 'Số lượng lớn nghĩa là ước lượng ổn định hơn chứ không phải nhiễu. Mức giảm 33,3% tuy dựa trên mô phỏng nhưng được đọc nhất quán qua sáu nghìn người bán.',
            },
          ],
        },
      ],
    },
    {
      id: 'tradeoff',
      kind: 'analysis',
      title: 'Bước 3 — Chọn mức phí và ngưỡng dừng',
      blocks: [
        {
          kind: 'table',
          title: 'So sánh phương án phí (hoa hồng chênh so với phản thực tế, tỷ đ/tháng)',
          columns: [
            { key: 'plan', label: 'Phương án' },
            { key: 'gmv', label: 'GMV (tỷ)', align: 'right' },
            { key: 'comm', label: 'Hoa hồng chênh', align: 'right' },
            { key: 'net', label: 'Ròng sau quảng cáo', align: 'right' },
          ],
          rows: [
            { plan: 'Giữ 5% mọi phân khúc', gmv: '420,0', comm: '0,0', net: '0,0' },
            { plan: 'Tăng đồng loạt 7%', gmv: '360,0', comm: '+4,2', net: '+3,3' },
            { plan: 'Phân khúc: nhỏ 5%, vừa 6%, lớn 8%', gmv: '390,5', comm: '+5,7', net: '+5,3' },
          ],
          highlight: [{ row: 2, tone: 'positive' }],
          caption: 'Phương án phân khúc thu nhiều hơn (+5,3 vs +3,3) và giữ GMV cao hơn. Nhưng mức 8% cho nhóm lớn và 6% cho nhóm vừa là **ngoại suy tuyến tính** từ một điểm 7%, nên cần thử trước khi mở rộng.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Ngắn hạn khác dài hạn',
          md: 'Người bán lớn ít rời nhất ở tháng thứ 4, nhưng họ có thể **bán đồng thời trên nhiều sàn** và dần chuyển tồn kho sang sàn khác. Các chỉ số kiểm tra sớm: tỷ trọng GMV của người bán lớn trên sàn so với sàn khác, tần suất đăng sản phẩm mới, và tỷ lệ người bán tắt chương trình khuyến mãi. Hoa hồng ngắn hạn có thể đẹp trong khi nền tảng cung dần mỏng đi.',
        },
        {
          kind: 'quiz',
          id: 'marketplace-commission-change-q3',
          question: 'Cách nào hợp lý nhất để quyết định mức phí cho đợt tiếp theo?',
          options: [
            {
              id: 'a',
              text: 'Áp dụng phương án phân khúc (5% / 6% / 8%) cho toàn sàn ngay vì mô hình dự báo thu cao nhất.',
              explain: 'Dự báo dựa vào ngoại suy tuyến tính và chưa kiểm chứng ở ngành khác. Mở toàn sàn ngay biến một ước lượng chưa chắc thành rủi ro cho toàn bộ nguồn cung.',
            },
            {
              id: 'b',
              text: 'Giữ nguyên 7% đồng loạt vì đã có số liệu thật.',
              explain: 'Số liệu thật cho thấy 7% đồng loạt thu ít hơn phương án phân khúc và làm mất 15% người bán nhỏ. Có số liệu không có nghĩa là mức phí đó tối ưu.',
            },
            {
              id: 'c',
              text: 'Thử phương án phân khúc ở một nhóm ngành mới (có nhóm đối chứng và kiểm tra xu hướng trước), đặt ngưỡng dừng cho người bán và GMV, rồi mới mở rộng.',
              correct: true,
              explain: 'Đúng. Cách này kiểm chứng phần ngoại suy, giữ khả năng quay lại và nhìn được tác động dài hơn trước khi áp dụng rộng.',
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
          md: '**Kết luận cho Ban giám đốc (mô phỏng):** tăng phí đồng loạt lên 7% giúp hoa hồng tăng khoảng **+4,2 tỷ/tháng (+3,3 tỷ ròng)**, thấp hơn nhiều so với "+26%" của báo cáo trước/sau, đồng thời làm GMV giảm 14,3% và mất 11,8% người bán so với phản thực tế. Gần như toàn bộ mức tăng đến từ người bán lớn, còn người bán nhỏ rời mạnh và hoa hồng phân khúc này giảm. **Không áp dụng 7% toàn sàn.** Đề xuất thử phân khúc (nhỏ 5%, vừa 6%, lớn 8%) ở nhóm ngành mới với ngưỡng dừng cụ thể.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Thử phân khúc nhỏ 5% / vừa 6% / lớn 8% ở 3 ngành mới có nhóm đối chứng được ghép theo xu hướng trước; theo dõi 4 tháng',
              owner: 'Seller Growth + Data/Analytics',
              metric: 'Hoa hồng ròng chênh so với phản thực tế (tỷ đ/tháng)',
              threshold: 'Tiếp tục nếu ≥ +4,0 tỷ/tháng và cận dưới khoảng 90% > 0',
            },
            {
              action: 'Đặt ngưỡng dừng: người bán hoạt động phân khúc vừa/lớn, GMV nhóm thử và tỷ trọng GMV người bán lớn',
              owner: 'Seller Growth',
              metric: 'Người bán hoạt động nhóm vừa so với phản thực tế',
              threshold: 'Quay lại phí cũ nếu giảm > 12% hoặc GMV nhóm thử giảm > 15% hai tháng liên tiếp',
            },
            {
              action: 'Giữ chương trình hỗ trợ cho người bán nhỏ (miễn phí quảng cáo khởi đầu, công cụ vận hành) thay vì tăng phí',
              owner: 'Seller Success',
              metric: 'Tỷ lệ người bán nhỏ còn hoạt động sau 90 ngày',
              threshold: 'Không thấp hơn nhóm đối chứng quá 2 điểm %',
            },
            {
              action: 'Theo dõi giá niêm yết và chuyển đổi của người mua, tách phần phí chuyển vào giá',
              owner: 'Pricing + Data/Analytics',
              metric: 'Tỷ lệ chuyển đổi và giá TB nhóm thử so với đối chứng',
              threshold: 'Nếu chuyển đổi giảm > 3% so với đối chứng, xem lại mức chuyển phí vào giá',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Tăng phí không phải bài toán một chiều. Quyết định tốt kết hợp **ước lượng nhân quả** (không tin trước/sau), **phân khúc** (không tin trung bình) và **cơ chế thoát** (ngưỡng dừng định trước). Nó chấp nhận thu ít hơn ngay lúc đầu để không đánh cược cả nguồn cung của sàn vào một con số chưa kiểm chứng.',
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
              title: 'Nhân phí mới với GMV cũ',
              why: 'Hoa hồng = phí × GMV *mới*. Dự phóng +8,4 tỷ giả định GMV không đổi, trong khi GMV thực giảm 60 tỷ so với phản thực tế.',
              instead: 'Dựng phản thực tế từ nhóm ngành đối chứng và tính hoa hồng trên GMV quan sát được.',
            },
            {
              title: 'Chỉ đọc kết quả tháng đầu',
              why: 'Người bán rời dần: tháng đầu chỉ giảm 3 điểm, tháng thứ 4 giảm 12 điểm. Đo sớm sẽ đánh giá thấp tác hại.',
              instead: 'Theo dõi ít nhất 3–4 tháng, vẽ đường theo thời gian và đặt ngưỡng dừng trên chỉ số dẫn đầu.',
            },
            {
              title: 'Một mức phí cho mọi người bán',
              why: 'Người bán nhỏ nhạy phí gấp ~7 lần người bán lớn (−16,7% so với −2,4% mỗi điểm). Số trung bình che nhóm đang chịu thiệt.',
              instead: 'Tách theo phân khúc, thử riêng từng mức và không ngoại suy quá xa khỏi dữ liệu đã quan sát.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Hoa hồng = phí × GMV mới: dùng nhóm ngành đối chứng để dựng phản thực tế, vì trước/sau thổi phồng mức tăng (+26% so với +20%) và bỏ qua doanh thu khác bị ảnh hưởng.',
    'Độ nhạy khác nhau theo phân khúc (nhỏ −16,7%, lớn −2,4% GMV mỗi điểm phí), nên phân biệt mức phí thu được nhiều hơn mức tăng đồng loạt, nhưng phần ngoại suy cần kiểm chứng.',
    'Người bán rời dần và có thể chuyển sang sàn khác: đo theo thời gian, đặt ngưỡng dừng trên chỉ số dẫn đầu và giữ khả năng quay lại.',
  ],
  references: [
    {
      title: 'Platform Competition in Two-Sided Markets',
      publisher: 'Rochet & Tirole (IDEI Working Paper)',
      url: 'https://econpapers.repec.org/RePEc:ide:wpaper:654',
      note: 'Nền tảng lý thuyết về cách sàn hai phía định giá cho từng bên, vì sao mất một bên ảnh hưởng bên kia.',
    },
    {
      title: 'Amazon selling fees: referral fees by product category',
      publisher: 'Amazon',
      url: 'https://sell.amazon.com/pricing',
      note: 'Ví dụ thực tế về phí hoa hồng khác nhau theo ngành hàng và mức tối thiểu; nguồn của hãng, không phải số mô phỏng.',
    },
    {
      title: 'Causal Inference: The Mixtape — Difference-in-Differences',
      publisher: 'Scott Cunningham',
      url: 'https://mixtape.scunning.com/09-difference_in_differences',
      note: 'Cách dựng phản thực tế bằng nhóm đối chứng và kiểm tra xu hướng song song trước can thiệp.',
    },
  ],
}
