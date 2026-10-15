import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — Công ty cho vay tiêu dùng C (hư cấu), bộ phận thu hồi nợ, T9 (trước) vs T10 (sau khi gọi tự động và đặt KPI "tỷ lệ liên lạc được").
 *   Khoản quá hạn: B1 (1–30 ngày) 50.000 khoản, TB nợ quá hạn 3 triệu · B2 (31–60) 30.000, 5 triệu · B3 (61–90) 20.000, 8 triệu → Σ 100.000 khoản; dư nợ quá hạn 150 + 150 + 160 = 460 tỷ đ. Cơ cấu cố định hai tháng.
 *   Liên lạc đúng người (RPC) / hứa trả (PTP) trên số liên lạc / hứa trả được thực hiện (kept) trên số PTP:
 *     B1: T9 50% / 60% / 70% → T10 60% / 70% / 60% · B2: 35% / 50% / 60% → 45% / 62% / 45% · B3: 20% / 40% / 50% → 30% / 55% / 30%
 *   Tự thanh toán không qua PTP (nền): B1 12% · B2 6% · B3 2% khoản — giống nhau hai tháng. Cure = liên lạc × PTP × kept + nền, quy ra % khoản trong bucket.
 *   Số khoản T9 → T10: liên lạc 39.500 → 49.500 (+10.000; 39,5% → 49,5%) · PTP 21.850 → 32.670 (+10.820; PTP/liên lạc 55,3% → 66,0%) · thực hiện 14.450 → 17.357 (+2.907; kept/PTP 66,1% → 53,1%)
 *   Cure (khoản, % của 100.000): B1 16.500 (33,0%) → 18.600 (37,2%) · B2 4.950 (16,5%) → 5.567 (18,6%; chính xác 5.566,5) · B3 1.200 (6,0%) → 1.390 (6,95%) · Σ 22.650 (22,65%) → 25.557 (25,56%; chính xác 25.556,5) → +2,9 điểm
 *   Giá trị thu hồi (tỷ đ): B1 49,5 → 55,8 · B2 24,75 → 27,83 · B3 9,6 → 11,12 · Σ 83,85 (18,2% của 460) → 94,75 (20,6%) → +10,9 tỷ (+2,4 điểm)
 *   Tăng thêm cam kết thực hiện trên mỗi liên lạc tăng thêm: B1 +2.100/+5.000 = 0,42 · B2 +616,5/+3.000 = 0,21 · B3 +190/+2.000 = 0,095
 *   Giá trị tăng thêm trên mỗi liên lạc tăng thêm (triệu đ): B1 2.100×3 tr/5.000 = 1,26 · B2 616,5×5/3.000 = 1,03 · B3 190×8/2.000 = 0,76
 */
export const collectionsContactRateVsRecovery: CaseStudy = {
  id: 'collections-contact-rate-vs-recovery',
  title: 'Tỷ lệ liên lạc tăng 10 điểm nhưng thu hồi chỉ tăng gần 3 điểm',
  domain: 'lending',
  level: 'junior',
  minutes: 12,
  skills: ['credit-risk', 'funnel', 'segmentation', 'operations'],
  question:
    'Sau khi gọi tự động và đặt KPI tỷ lệ liên lạc được, liên lạc tăng từ 39,5% lên 49,5% nhưng thu hồi chỉ tăng khoảng 3 điểm. Chất lượng cuộc gọi, hay phân khúc nợ nào đang kéo hiệu quả xuống, và nên đặt thêm nguồn lực ở đâu?',
  summary:
    'Dựng funnel liên lạc → hứa trả → thực hiện → thu hồi theo bucket quá hạn, so trước và sau, phát hiện tác dụng phụ của KPI liên lạc và so hiệu quả biên theo phân khúc.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng: công ty và mọi con số đều là giả định để minh họa.* Bộ phận thu hồi nợ của **Công ty C** phụ trách 100.000 khoản vay quá hạn, chia ba bucket theo số ngày quá hạn: **B1 (1–30)**, **B2 (31–60)**, **B3 (61–90)**. Từ T10 công ty dùng quay số tự động và đặt KPI cho nhân viên theo **tỷ lệ liên lạc đúng người (RPC)**. Kết quả: RPC tăng từ **39,5% lên 49,5%** (+10 điểm). Nhưng tỷ lệ khoản được thanh toán đủ để thoát quá hạn (cure) chỉ tăng từ **22,65% lên 25,56%**. Giám đốc muốn biết vì sao, và có nên tiếp tục đẩy KPI liên lạc.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Liên lạc đúng người (RPC)', value: '49,5%', delta: '+10,0 điểm', tone: 'positive', note: 'T9: 39,5%' },
            { label: 'Cure (thoát quá hạn)', value: '25,56%', delta: '+2,9 điểm', tone: 'warning', note: 'T9: 22,65%' },
            { label: 'Giá trị thu hồi / dư nợ quá hạn', value: '20,6%', delta: '+2,4 điểm', tone: 'warning', note: '94,75 tỷ / 460 tỷ' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi cần trả lời',
          md: 'Liên lạc được chỉ là **bước giữa** của funnel thu hồi. Hỏi: sau khi liên lạc, **tỷ lệ hứa trả và tỷ lệ giữ lời hứa** thay đổi thế nào, ở bucket nào, và mỗi liên lạc thêm tạo ra bao nhiêu giá trị?',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: funnel thu hồi theo bucket',
      blocks: [
        {
          kind: 'formula',
          expression: 'Cure = RPC × (PTP/liên lạc) × (kept/PTP) + tự thanh toán nền',
          note: 'Một KPI ở đầu funnel (RPC) có thể tăng trong khi KPI ở cuối (cure) không theo kịp, nếu chất lượng các bước sau suy giảm. Nên đo **cả chuỗi** và so theo bucket vì khoản trễ hạn lâu có khả năng thu hồi rất khác khoản mới trễ.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Dựng funnel** liên lạc → hứa trả (PTP) → giữ lời hứa → cure.',
            '**So trước/sau** từng bước theo bucket.',
            '**Hiệu quả biên**: mỗi liên lạc thêm tạo ra bao nhiêu cure/giá trị theo bucket.',
            '**Giả thuyết** cho bước suy giảm (kept) và loại trừ cách giải thích khác.',
          ],
        },
        {
          kind: 'quiz',
          id: 'collections-contact-rate-vs-recovery-q1',
          question: 'Tỷ lệ liên lạc tăng 10 điểm là bằng chứng KPI mới hiệu quả không?',
          options: [
            {
              id: 'a',
              text: 'Có, vì liên lạc là điều kiện để thu hồi.',
              explain: 'Là điều kiện cần chứ không đủ. Thu hồi phụ thuộc vào việc liên lạc có dẫn tới hứa trả và giữ lời hứa hay không.',
            },
            {
              id: 'b',
              text: 'Chưa, cần xem các bước sau liên lạc (PTP, giữ lời hứa) và cure, vì KPI ở đầu funnel có thể bị tối ưu theo cách không tạo thêm tiền.',
              correct: true,
              explain: 'Đúng. Cure chỉ tăng 2,9 điểm so với 10 điểm RPC, cho thấy phần lớn liên lạc thêm không chuyển thành thu hồi.',
            },
            {
              id: 'c',
              text: 'Không, vì tỷ lệ liên lạc không liên quan đến thu hồi.',
              explain: 'Liên lạc có liên quan (cure vẫn tăng); vấn đề là hiệu quả biên thấp hơn kỳ vọng.',
            },
          ],
        },
      ],
    },
    {
      id: 'funnel',
      kind: 'analysis',
      title: 'Bước 1 — Funnel trước và sau, theo bucket',
      blocks: [
        {
          kind: 'chart',
          title: 'Số khoản ở từng bước funnel (100.000 khoản quá hạn)',
          type: 'bar',
          xKey: 'step',
          series: [
            { key: 't9', label: 'T9 (trước)' },
            { key: 't10', label: 'T10 (sau)' },
          ],
          data: [
            { step: 'Liên lạc đúng người', t9: 39500, t10: 49500 },
            { step: 'Hứa trả (PTP)', t9: 21850, t10: 32670 },
            { step: 'Giữ lời hứa', t9: 14450, t10: 17357 },
          ],
          caption: 'Liên lạc +25%, hứa trả +50%, nhưng khoản giữ lời hứa chỉ +20% (14.450 → 17.357, làm tròn). PTP/liên lạc 55,3% → 66,0%, kept/PTP 66,1% → 53,1%.',
        },
        {
          kind: 'table',
          title: 'Funnel theo bucket (T9 → T10)',
          columns: [
            { key: 'b', label: 'Bucket (số khoản)' },
            { key: 'rpc', label: 'RPC', align: 'right' },
            { key: 'ptp', label: 'PTP / liên lạc', align: 'right' },
            { key: 'kept', label: 'Giữ lời / PTP', align: 'right' },
            { key: 'cure', label: 'Cure', align: 'right' },
          ],
          rows: [
            { b: 'B1 (50.000)', rpc: '50% → 60%', ptp: '60% → 70%', kept: '70% → 60%', cure: '33,0% → 37,2%' },
            { b: 'B2 (30.000)', rpc: '35% → 45%', ptp: '50% → 62%', kept: '60% → 45%', cure: '16,5% → 18,6%' },
            { b: 'B3 (20.000)', rpc: '20% → 30%', ptp: '40% → 55%', kept: '50% → 30%', cure: '6,0% → 6,95%' },
            { b: 'Tổng (100.000)', rpc: '39,5% → 49,5%', ptp: '55,3% → 66,0%', kept: '66,1% → 53,1%', cure: '22,65% → 25,56%' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Ở mọi bucket RPC và PTP tăng nhưng tỷ lệ giữ lời hứa giảm; giảm mạnh nhất ở B3 (50% → 30%). Cơ cấu số khoản theo bucket không đổi giữa hai tháng nên đây không phải hiệu ứng mix.',
        },
        {
          kind: 'quiz',
          id: 'collections-contact-rate-vs-recovery-q2',
          question: 'Hiện tượng "PTP tăng nhưng giữ lời hứa giảm" cho thấy điều gì?',
          options: [
            {
              id: 'a',
              text: 'Khách hàng đột nhiên kém trung thực hơn.',
              explain: 'Khó tin khi giảm ở cả ba bucket cùng lúc, đúng thời điểm đổi KPI; giải thích về hành vi nhân viên hợp lý hơn.',
            },
            {
              id: 'b',
              text: 'Nhân viên có thể nhận những lời hứa kém chắc chắn (ngày xa, số tiền không thực tế) để đạt KPI; cần kiểm tra chất lượng PTP.',
              correct: true,
              explain: 'Đúng. Luật của Goodhart: khi một chỉ số thành mục tiêu, nó thôi là thước đo tốt. Kiểm tra bằng thời hạn và số tiền PTP, theo từng nhóm nhân viên.',
            },
            {
              id: 'c',
              text: 'Hệ thống quay số tự động làm hỏng dữ liệu.',
              explain: 'Có thể là một nguyên nhân phụ (xác minh đúng người), nhưng chưa có bằng chứng; cần loại trừ bằng kiểm tra RPC thật.',
            },
          ],
        },
      ],
    },
    {
      id: 'marginal',
      kind: 'analysis',
      title: 'Bước 2 — Hiệu quả biên theo bucket và giả thuyết',
      blocks: [
        {
          kind: 'table',
          title: 'Mỗi liên lạc thêm tạo ra bao nhiêu? (T9 → T10)',
          columns: [
            { key: 'b', label: 'Bucket' },
            { key: 'dc', label: 'Liên lạc thêm', align: 'right' },
            { key: 'dk', label: 'Khoản giữ lời thêm', align: 'right' },
            { key: 'per', label: 'Khoản giữ lời / liên lạc thêm', align: 'right' },
            { key: 'val', label: 'Giá trị thu / liên lạc thêm (triệu đ)', align: 'right' },
          ],
          rows: [
            { b: 'B1', dc: '+5.000', dk: '+2.100', per: '0,42', val: '1,26' },
            { b: 'B2', dc: '+3.000', dk: '+617', per: '0,21', val: '1,03' },
            { b: 'B3', dc: '+2.000', dk: '+190', per: '0,095', val: '0,76' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'B1 cho 0,42 khoản mỗi liên lạc thêm, gấp 4,4 lần B3. Về giá trị tiền, chênh lệch nhỏ hơn (1,26 so 0,76 triệu) vì khoản B3 lớn hơn (8 triệu so 3 triệu).',
        },
        {
          kind: 'table',
          title: 'Giả thuyết và cách kiểm tra',
          columns: [
            { key: 'h', label: 'Giả thuyết' },
            { key: 'predict', label: 'Nếu đúng, ta sẽ thấy' },
            { key: 'test', label: 'Dữ liệu / kiểm tra' },
          ],
          rows: [
            {
              h: 'H1. KPI liên lạc/PTP khiến nhân viên nhận lời hứa kém chất lượng',
              predict: 'PTP có hạn xa hơn, số tiền nhỏ hơn dư nợ; kept giảm ở nhân viên chạy KPI mạnh',
              test: 'Hạn và số tiền PTP trước/sau; kept theo nhân viên',
            },
            {
              h: 'H2. Gọi tự động liên lạc nhầm người (người thân, số cũ) làm RPC tính sai',
              predict: 'Tỷ lệ xác minh danh tính thấp, PTP với người không phải chủ khoản vay',
              test: 'Nhật ký xác minh danh tính; so RPC tự động với RPC do nhân viên gọi',
            },
            {
              h: 'H3. Mix bucket hoặc khách hàng thay đổi',
              predict: 'Cơ cấu bucket khác giữa hai tháng',
              test: 'Cơ cấu cố định 50/30/20 giữa T9 và T10: bị bác bỏ',
            },
          ],
          highlight: [{ row: 2, tone: 'positive' }],
          caption: 'H3 bị loại trừ bởi dữ liệu cơ cấu. H1 và H2 cần dữ liệu cuộc gọi để phân biệt.',
        },
        {
          kind: 'quiz',
          id: 'collections-contact-rate-vs-recovery-q3',
          question: 'Có thêm 10.000 liên lạc năng lực để phân bổ. Phân bổ nào hợp lý nhất theo dữ liệu hiện tại?',
          options: [
            {
              id: 'a',
              text: 'Dồn vào B3 vì khoản lớn nhất (8 triệu mỗi khoản).',
              explain: 'B3 có hiệu quả biên thấp nhất (0,095 khoản và 0,76 triệu/liên lạc thêm), dù khoản lớn.',
            },
            {
              id: 'b',
              text: 'Ưu tiên B1 rồi B2, đồng thời đổi KPI sang số tiền PTP được thực hiện (kept) để không bị đẩy PTP kém chất lượng.',
              correct: true,
              explain: 'Đúng. B1 tạo 1,26 triệu mỗi liên lạc thêm, B2 1,03 triệu; KPI chuyển sang kết quả cuối giảm động cơ làm đẹp chỉ số trung gian.',
            },
            {
              id: 'c',
              text: 'Không đầu tư thêm vì liên lạc không còn hiệu quả.',
              explain: 'Liên lạc thêm vẫn tạo giá trị (+10,9 tỷ trong tháng); vấn đề là phân bổ và KPI, không phải bỏ.',
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
          md: '**Kết luận:** KPI liên lạc đã tăng RPC 10 điểm nhưng **chất lượng lời hứa giảm** (giữ lời 66,1% → 53,1%), nên cure chỉ tăng 2,9 điểm (+10,9 tỷ đồng giá trị thu). Liên lạc thêm có hiệu quả cao nhất ở B1 (0,42 khoản/liên lạc), thấp nhất ở B3 (0,095). Đổi KPI sang kết quả cuối và phân bổ nguồn lực theo hiệu quả biên.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Đổi KPI nhân viên sang "số tiền PTP được thực hiện" và cure; giữ RPC làm chỉ số chẩn đoán, không thưởng',
              owner: 'Trưởng bộ phận thu hồi nợ',
              metric: 'Kept/PTP; cure theo bucket; giá trị thu hồi',
              threshold: 'Kept/PTP phục hồi ≥ 62% (T9: 66,1%; T10: 53,1%) trong 2 tháng mà cure không giảm',
            },
            {
              action: 'Kiểm tra chất lượng PTP: hạn, số tiền, so với dư nợ; xác minh đúng người trong cuộc gọi tự động',
              owner: 'Giám sát chất lượng + Data/Analytics',
              metric: 'Thời hạn PTP; tỷ lệ xác minh danh tính',
              threshold: 'PTP có hạn > 7 ngày ≤ 20%; xác minh danh tính ≥ 95%',
            },
            {
              action: 'Phân bổ lại: thêm công suất cho B1 và B2, giảm gọi lặp ở B3 và chuyển B3 sang kịch bản chuyên biệt (thương lượng lịch trả, xử lý pháp lý)',
              owner: 'Trưởng bộ phận thu hồi nợ + Rủi ro',
              metric: 'Giá trị thu / liên lạc thêm theo bucket',
              threshold: 'B3 ≥ 1,0 triệu đ/liên lạc thêm (đang 0,76) trước khi tăng công suất',
            },
            {
              action: 'Báo cáo funnel theo bucket hằng tuần; theo dõi cơ cấu bucket và khoản bị khiếu nại',
              owner: 'Data/Analytics',
              metric: 'RPC, PTP, kept, cure theo bucket; khiếu nại/1.000 cuộc gọi',
              threshold: 'Cảnh báo khi kept/PTP giảm > 5 điểm hoặc khiếu nại tăng > 20%',
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
              title: 'Thưởng theo chỉ số trung gian',
              why: 'Khi tỷ lệ liên lạc/PTP trở thành mục tiêu, nhân viên tối ưu chúng ngay cả khi không tạo thêm tiền (Goodhart).',
              instead: 'Gắn thưởng với kết quả cuối (cure, số tiền thu), dùng chỉ số trung gian để chẩn đoán.',
            },
            {
              title: 'Gộp mọi bucket',
              why: 'Khoản trễ hạn lâu có xác suất thu hồi rất khác; hiệu quả biên khác nhau (0,42 so 0,095).',
              instead: 'Báo cáo funnel và hiệu quả biên theo bucket.',
            },
            {
              title: 'Bỏ qua tuân thủ và trải nghiệm khách hàng',
              why: 'Tăng số cuộc gọi có thể vi phạm quy định về tần suất/thời gian liên hệ và làm tăng khiếu nại.',
              instead: 'Theo dõi khiếu nại và tuân thủ quy định hiện hành về liên hệ đòi nợ (cần người có chuyên môn pháp lý rà soát).',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Một KPI ở đầu funnel (liên lạc) không bảo đảm kết quả cuối (cure); đo cả chuỗi liên lạc → hứa trả → giữ lời → thu hồi.',
    'So theo bucket: hiệu quả biên của mỗi liên lạc thêm giảm mạnh ở khoản trễ hạn lâu.',
    'Thưởng theo kết quả cuối và dùng chỉ số trung gian để chẩn đoán, nhằm tránh làm đẹp chỉ số.',
  ],
  references: [
    {
      title: 'Debt collection',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Debt_collection',
      note: 'Tổng quan hoạt động thu hồi nợ và các hình thức liên hệ, dùng để hiểu bối cảnh của funnel thu hồi.',
    },
    {
      title: 'Fair Debt Collection Practices Act',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Fair_Debt_Collection_Practices_Act',
      note: 'Tóm tắt luật Mỹ giới hạn cách thu hồi nợ (ví dụ về liên hệ); chỉ để thấy việc tăng số cuộc gọi cần xét giới hạn pháp lý, không áp dụng trực tiếp ở Việt Nam.',
    },
    {
      title: 'Uniform Retail-Credit Classification and Account-Management Policy',
      publisher: 'Federal Reserve Board',
      url: 'https://www.federalreserve.gov/frrs/guidance/uniform-retail-credit-classification-and-account-management-policy.htm',
      note: 'Chính sách phân loại nợ bán lẻ theo số ngày quá hạn, nền tảng của các bucket DPD (ví dụ mốc 90 ngày).',
    },
  ],
}
