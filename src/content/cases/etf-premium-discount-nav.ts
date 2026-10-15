import type { CaseStudy } from '../types'

/*
 * Quỹ ETF và số liệu hoàn toàn giả định (không phải khuyến nghị đầu tư). Giá, NAV: đồng/chứng chỉ quỹ.
 * Chênh lệch = (Giá − NAV) / NAV.
 * ETF-2 (thanh khoản thấp) 8 phiên: giá 10.050 ; 10.020 ; 9.940 ; 9.900 ; 9.960 ; 10.030 ; 10.100 ; 10.150
 *                                    NAV 10.000 ; 10.010 ; 10.000 ; 10.020 ; 10.050 ; 10.080 ; 10.090 ; 10.120
 *   → +0,50% ; +0,10% ; −0,60% ; −1,20% ; −0,90% ; −0,50% ; +0,10% ; +0,30% ; TB |chênh| = 4,2/8 = 0,525 ≈ 0,53%
 * Phân khúc (|chênh| TB, giả định): ETF-1 thanh khoản cao 0,12% ; ETF-2 thanh khoản thấp 0,53%
 *   ETF-3 (tài sản cơ sở ở sàn nước ngoài): lúc sàn gốc mở cửa 0,05% ; lúc sàn gốc đóng cửa 0,45%
 *   ETF-2 phiên khối lượng cao (4 phiên) 0,30% ; phiên khối lượng thấp (4 phiên) 0,75% → TB 0,525 ✓
 */
export const etfPremiumDiscountNav: CaseStudy = {
  id: 'etf-premium-discount-nav',
  title: 'ETF giao dịch lệch so với NAV: do thanh khoản, tạo lập/mua lại hay giờ đóng cửa?',
  domain: 'securities',
  level: 'junior',
  minutes: 11,
  skills: ['liquidity', 'valuation', 'segmentation'],
  question:
    'Một quỹ ETF giao dịch thấp hơn NAV tới 1,2% trong một phiên. Chênh lệch đó là cơ hội, hay do thanh khoản mỏng, cơ chế tạo lập/mua lại bị hạn chế, hoặc NAV không cập nhật cùng giờ với giá giao dịch?',
  summary:
    'Phân khúc chênh lệch giá–NAV theo nguyên nhân: thanh khoản, khối lượng giao dịch, và việc thị trường tài sản cơ sở có đang mở cửa không, rồi đề xuất cách kiểm tra từng giả thuyết.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn theo dõi ba quỹ ETF giả định. Đồng nghiệp thấy ETF-2 có phiên giao dịch thấp hơn NAV 1,2% và hỏi: *"Có phải đang rẻ so với giá trị thật?"* Hãy phân tích nguyên nhân chênh lệch giữa **giá giao dịch** và **NAV** (giá trị tài sản ròng trên mỗi chứng chỉ quỹ).',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Các quỹ và số liệu đều **giả định, mô phỏng**. Bài không phải khuyến nghị đầu tư.',
        },
        {
          kind: 'table',
          title: 'ETF-2: giá, NAV và chênh lệch theo phiên (đồng/chứng chỉ quỹ)',
          columns: [
            { key: 'day', label: 'Phiên' },
            { key: 'price', label: 'Giá', align: 'right' },
            { key: 'nav', label: 'NAV', align: 'right' },
            { key: 'gap', label: 'Chênh lệch', align: 'right' },
          ],
          rows: [
            { day: '1', price: '10.050', nav: '10.000', gap: '+0,50%' },
            { day: '2', price: '10.020', nav: '10.010', gap: '+0,10%' },
            { day: '3', price: '9.940', nav: '10.000', gap: '−0,60%' },
            { day: '4', price: '9.900', nav: '10.020', gap: '−1,20%' },
            { day: '5', price: '9.960', nav: '10.050', gap: '−0,90%' },
            { day: '6', price: '10.030', nav: '10.080', gap: '−0,50%' },
            { day: '7', price: '10.100', nav: '10.090', gap: '+0,10%' },
            { day: '8', price: '10.150', nav: '10.120', gap: '+0,30%' },
          ],
          highlight: [{ row: 3, tone: 'negative' }],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: giá ETF bám NAV nhờ cơ chế arbitrage',
      blocks: [
        {
          kind: 'formula',
          expression: 'Chênh lệch = (Giá giao dịch − NAV) / NAV',
          note: 'ETF thường được neo vào NAV nhờ thành viên lập quỹ (authorised participant): khi giá cao hơn NAV họ tạo thêm chứng chỉ quỹ, khi thấp hơn họ mua lại. Cơ chế này chỉ hoạt động khi lợi ích đủ bù chi phí và rủi ro.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Thanh khoản**: chênh lệch giá mua–bán rộng và độ sâu mỏng làm giá lệch NAV.',
            '**Tạo lập/mua lại**: nếu cơ chế bị hạn chế hoặc tốn kém, arbitrage yếu đi và chênh lệch kéo dài.',
            '**Thời gian**: NAV có thể tính theo giá đóng cửa của tài sản cơ sở, trong khi ETF vẫn giao dịch; khi sàn gốc đóng cửa, NAV "cũ".',
          ],
        },
        {
          kind: 'quiz',
          id: 'etf-q1',
          question: 'Chênh lệch −1,2% xuất hiện trong phiên ETF-2 có khối lượng thấp. Giả thuyết nào kiểm chứng được nhất?',
          options: [
            { id: 'a', text: 'Chênh lệch lớn hơn ở phiên khối lượng thấp và khi biên mua–bán rộng; nếu chênh lệch giống nhau ở mọi mức khối lượng thì giả thuyết sai.', correct: true, explain: 'Đúng. Có biến để phân nhóm (khối lượng, biên mua–bán) và điều kiện bác bỏ.' },
            { id: 'b', text: 'ETF-2 đang bị định giá sai, sẽ tự quay về NAV.', explain: 'Quay về NAV không phải điều chắc chắn; cũng không có điều kiện bác bỏ.' },
            { id: 'c', text: 'NAV chắc chắn tính sai.', explain: 'Suy đoán lỗi dữ liệu mà chưa kiểm tra cách tính và giờ tính NAV.' },
          ],
        },
      ],
    },
    {
      id: 'liquidity',
      kind: 'analysis',
      title: 'Bước 1 — So giữa các quỹ và giữa các phiên theo thanh khoản',
      blocks: [
        {
          kind: 'table',
          title: 'Chênh lệch tuyệt đối trung bình theo phân khúc (giả định)',
          columns: [
            { key: 'seg', label: 'Phân khúc' },
            { key: 'gap', label: '|Chênh lệch| TB', align: 'right' },
          ],
          rows: [
            { seg: 'ETF-1 (thanh khoản cao)', gap: '0,12%' },
            { seg: 'ETF-2 (thanh khoản thấp), cả 8 phiên', gap: '0,53%' },
            { seg: 'ETF-2, 4 phiên khối lượng cao', gap: '0,30%' },
            { seg: 'ETF-2, 4 phiên khối lượng thấp', gap: '0,75%' },
          ],
          highlight: [{ row: 3, tone: 'negative' }],
          caption: 'Trung bình hai nhóm phiên (0,30 + 0,75)/2 ≈ 0,53%. Chênh lệch lớn tập trung ở phiên ít giao dịch.',
        },
        {
          kind: 'chart',
          title: 'Chênh lệch giá so với NAV của ETF-2 theo phiên (%)',
          type: 'line',
          xKey: 'day',
          series: [{ key: 'gap', label: 'Chênh lệch giá–NAV' }],
          unit: '%',
          data: [
            { day: 'P1', gap: 0.5 },
            { day: 'P2', gap: 0.1 },
            { day: 'P3', gap: -0.6 },
            { day: 'P4', gap: -1.2 },
            { day: 'P5', gap: -0.9 },
            { day: 'P6', gap: -0.5 },
            { day: 'P7', gap: 0.1 },
            { day: 'P8', gap: 0.3 },
          ],
          marker: { x: 'P4', label: 'Đáy chênh lệch' },
          caption: 'Chênh lệch âm kéo dài 4 phiên (P3–P6) rồi quay về gần 0: không biến mất ngay trong một phiên — gợi ý arbitrage yếu.',
        },
      ],
    },
    {
      id: 'timing',
      kind: 'analysis',
      title: 'Bước 2 — Giờ giao dịch của tài sản cơ sở',
      blocks: [
        {
          kind: 'table',
          title: 'ETF-3: chênh lệch tuyệt đối trung bình theo trạng thái sàn gốc (giả định)',
          columns: [
            { key: 'state', label: 'Trạng thái' },
            { key: 'gap', label: '|Chênh lệch| TB', align: 'right' },
            { key: 'note', label: 'Giải thích khả dĩ' },
          ],
          rows: [
            { state: 'Sàn nước ngoài đang mở cửa', gap: '0,05%', note: 'NAV và giá cập nhật cùng nhịp' },
            { state: 'Sàn nước ngoài đóng cửa', gap: '0,45%', note: 'NAV theo giá đóng cửa cũ, trong khi tin mới đã ra' },
          ],
          highlight: [{ row: 1, tone: 'warning' }],
          caption: 'Với ETF-3, chênh lệch phần lớn là lỗi thời gian của NAV chứ không nhất thiết là cơ hội mua rẻ.',
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Cùng một con số, ba nguyên nhân',
          md: 'Chênh lệch −1,2% có thể là (1) giá lệch vì thanh khoản, (2) cơ chế tạo lập chưa kịp, (3) NAV lỗi thời. Mỗi nguyên nhân dự báo một mô hình khác nhau theo thanh khoản, khối lượng và giờ giao dịch — dựa vào đó để phân biệt.',
        },
        {
          kind: 'quiz',
          id: 'etf-q2',
          question: 'ETF-3 lệch NAV chủ yếu khi sàn nước ngoài đóng cửa. Bạn kết luận gì?',
          options: [
            { id: 'a', text: 'Chênh lệch có thể phản ánh NAV lỗi thời; nên so với NAV ước tính trong ngày (iNAV) hoặc giá tương lai chỉ số nếu có.', correct: true, explain: 'Đúng. So với đại lượng cập nhật cùng giờ mới đo đúng độ lệch thật.' },
            { id: 'b', text: 'ETF-3 luôn là cơ hội mua khi sàn nước ngoài đóng cửa.', explain: 'Lệch do thời gian chưa phải cơ hội; có thể biến mất khi NAV cập nhật.' },
            { id: 'c', text: 'Bỏ qua vì ETF không bao giờ lệch NAV.', explain: 'ETF có thể lệch; chính vì vậy mới cần phân tích.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: phân loại chênh lệch trước khi gọi là cơ hội',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận trên dữ liệu giả định:** chênh lệch của ETF-2 tập trung ở phiên khối lượng thấp (0,75% so với 0,30%) và kéo dài nhiều phiên; chênh lệch của ETF-3 tập trung khi sàn gốc đóng cửa (0,45% so với 0,05%). Chênh lệch giá–NAV nên được ghi nhận là **một đại lượng cần giải thích**, chưa phải tín hiệu mua rẻ. Quy định cụ thể về cơ chế tạo lập/mua lại của từng quỹ ở Việt Nam cần người có chuyên môn rà.',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Theo dõi chênh lệch giá–NAV hằng ngày, kèm khối lượng và biên mua–bán', owner: 'Analyst quỹ/ETF', metric: '|Chênh lệch| TB theo nhóm khối lượng', threshold: 'Nhóm khối lượng thấp lớn hơn nhóm cao > 2 lần thì gắn cờ thanh khoản' },
            { action: 'So giá với NAV ước tính trong ngày khi tài sản cơ sở ở sàn khác múi giờ', owner: 'Analyst quỹ/ETF', metric: '|Chênh lệch| so với iNAV', threshold: 'Chênh còn lại < 0,2% thì coi phần lớn là lỗi thời gian' },
            { action: 'Làm việc với thành viên lập quỹ để biết giới hạn tạo lập/mua lại khi chênh lệch kéo dài > 3 phiên', owner: 'Trưởng nhóm sản phẩm', metric: 'Số phiên chênh lệch cùng dấu liên tiếp', threshold: '> 3 phiên thì cần báo cáo nguyên nhân' },
          ],
        },
        {
          kind: 'quiz',
          id: 'etf-q3',
          question: 'Chênh lệch giá–NAV của ETF-2 kéo dài âm 4 phiên liên tiếp. Điều này gợi ý gì?',
          options: [
            { id: 'a', text: 'Arbitrage chưa đủ mạnh để kéo giá về NAV trong ngày; cần kiểm tra giới hạn tạo lập/mua lại và thanh khoản.', correct: true, explain: 'Đúng. Nếu arbitrage hiệu quả, chênh lệch lớn sẽ bị thu hẹp nhanh.' },
            { id: 'b', text: 'Chắc chắn có thao túng giá.', explain: 'Không có bằng chứng; nhiều nguyên nhân thông thường giải thích được.' },
            { id: 'c', text: 'NAV luôn đúng và giá luôn sai.', explain: 'NAV cũng có thể lỗi thời; không có bên nào "luôn đúng".' },
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
            { title: 'Coi chiết khấu so với NAV là cơ hội mua rẻ', why: 'Chênh lệch có thể là chi phí thanh khoản hoặc lỗi thời gian của NAV.', instead: 'Phân loại nguyên nhân và so với iNAV trước khi kết luận.' },
            { title: 'Gộp mọi phiên làm một trung bình', why: 'Chênh lệch lớn tập trung ở phiên khối lượng thấp bị che mất.', instead: 'Chia theo khối lượng, biên mua–bán và trạng thái sàn cơ sở.' },
            { title: 'Quên giờ tính NAV', why: 'NAV tính theo giá đóng cửa không so được với giá lúc 10 giờ sáng của một thị trường khác.', instead: 'Dùng đại lượng cập nhật cùng thời điểm.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Chênh lệch giá–NAV có ít nhất ba nguồn: thanh khoản, cơ chế tạo lập/mua lại, và giờ tính NAV.',
    'Phân khúc theo khối lượng và trạng thái sàn cơ sở giúp tách các nguồn này.',
    'Chênh lệch kéo dài nhiều phiên gợi ý arbitrage yếu; đó là câu hỏi cần giải thích chứ chưa phải cơ hội.',
  ],
  references: [
    { title: 'The anatomy of bond ETF arbitrage', publisher: 'Bank for International Settlements (BIS Quarterly Review)', url: 'https://www.bis.org/publ/qtrpdf/r_qt2103d.htm', note: 'Bài BIS mô tả cách thành viên lập quỹ giữ giá ETF gần NAV và vì sao chênh lệch giá–NAV lớn hơn ở ETF trái phiếu khi thị trường căng thẳng.' },
    { title: 'Exchange-traded fund', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Exchange-traded_fund', note: 'Tổng quan cơ chế tạo lập và mua lại ETF.' },
    { title: 'Net asset value', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Net_asset_value', note: 'Định nghĩa NAV của quỹ và cách tính trên mỗi chứng chỉ quỹ.' },
  ],
}
