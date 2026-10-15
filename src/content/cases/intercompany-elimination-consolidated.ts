import type { CaseStudy } from '../types'

/*
 * Tập đoàn giả định: công ty mẹ M và công ty con S (M sở hữu 100%). Đơn vị: tỷ đồng.
 * M: bán ngoài 800 (giá vốn 560) ; bán cho S 300 (giá vốn 210, lãi 90 = 30% giá bán)
 * S: mua của M 300; bán ra ngoài 2/3 (giá vốn theo giá chuyển giao 200) thu 260; còn 100 tồn kho cuối kỳ.
 *    S bán thêm hàng khác ra ngoài thu 240, giá vốn 150. Doanh thu ngoài của S = 260 + 240 = 500 ; giá vốn của S = 200 + 150 = 350.
 * Cộng thô: doanh thu M 800+300 = 1.100 ; S 500 ; tổng 1.600. Giá vốn M 560+210 = 770 ; S 350 ; tổng 1.120. Lãi gộp 1.600 − 1.120 = 480 (biên 30,0%)
 * Loại trừ: (1) doanh thu nội bộ 300 và giá vốn tương ứng 300 ; (2) lãi chưa thực hiện trong tồn kho của S: 100 × 30% = 30 (tăng giá vốn hợp nhất 30, giảm hàng tồn kho 30)
 * Hợp nhất: doanh thu 1.600 − 300 = 1.300 ; giá vốn 1.120 − 300 + 30 = 850 ; lãi gộp 1.300 − 850 = 450 (biên 34,6%)
 * Kiểm bằng góc nhìn tập đoàn: M ngoài 800−560 = 240 ; S hàng từ M bán ngoài: 260 − 200×70% (giá vốn tập đoàn 140) = 120 ; S hàng khác 240−150 = 90 ; tổng 450 ✓
 * Năm trước (chưa có giao dịch nội bộ) doanh thu hợp nhất 1.100 → công bố nhầm 1.600 (+45,5%) ; đúng 1.300 (+18,2%).
 */
export const intercompanyEliminationConsolidated: CaseStudy = {
  id: 'intercompany-elimination-consolidated',
  title: 'Doanh thu hợp nhất cao hơn thực chất: giao dịch nội bộ chưa được loại trừ',
  domain: 'accounting',
  level: 'junior',
  minutes: 12,
  skills: ['financial-statements', 'data-quality', 'revenue-recognition'],
  question:
    'Doanh thu hợp nhất của tập đoàn tăng 45,5% so với năm trước, nhưng doanh thu bán ra ngoài tăng chậm hơn nhiều. Có phải báo cáo hợp nhất đã cộng cả giao dịch nội bộ, và cách kiểm tra là gì?',
  summary:
    'Từ báo cáo riêng của công ty mẹ và công ty con, loại trừ doanh thu và giá vốn nội bộ cùng lãi chưa thực hiện trong tồn kho, rồi kiểm tra giả thuyết bằng đối chiếu số dư nội bộ và thuyết minh bên liên quan.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Tập đoàn giả định gồm công ty mẹ **M** và công ty con **S** (M sở hữu 100%). Năm nay M bán 300 tỷ hàng cho S. Bộ phận tổng hợp lập báo cáo hợp nhất bằng cách cộng doanh thu của M và S: 1.100 + 500 = **1.600 tỷ**, so với 1.100 năm trước, tức *tăng 45,5%*. Bạn được yêu cầu soát lại.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Tập đoàn và số liệu đều **giả định, mô phỏng**. Bài đơn giản hóa (sở hữu 100%, không thuế). Cách loại trừ trong thực tế cần theo chuẩn mực áp dụng và cần người có chuyên môn rà.',
        },
        {
          kind: 'table',
          title: 'Báo cáo riêng của M và S (tỷ đồng)',
          columns: [
            { key: 'item', label: 'Chỉ tiêu' },
            { key: 'm', label: 'Công ty mẹ M', align: 'right' },
            { key: 's', label: 'Công ty con S', align: 'right' },
            { key: 'sum', label: 'Cộng thô', align: 'right' },
          ],
          rows: [
            { item: 'Doanh thu bán ra ngoài', m: '800', s: '500', sum: '1.300' },
            { item: 'Doanh thu bán cho S (nội bộ)', m: '300', s: '0', sum: '300' },
            { item: 'Doanh thu', m: '1.100', s: '500', sum: '1.600' },
            { item: 'Giá vốn', m: '770', s: '350', sum: '1.120' },
            { item: 'Lãi gộp', m: '330', s: '150', sum: '480' },
          ],
          highlight: [{ row: 1, tone: 'warning' }],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: tập đoàn là một thực thể, bán cho chính mình không phải doanh thu',
      blocks: [
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Loại trừ doanh thu và giá vốn nội bộ**: bán giữa M và S là chuyển hàng trong cùng tập đoàn, chưa có khách bên ngoài.',
            '**Loại trừ lãi chưa thực hiện**: nếu S còn hàng mua từ M chưa bán ra ngoài, phần lãi M đã ghi nằm trong tồn kho là chưa thực hiện ở góc nhìn tập đoàn.',
            '**Loại trừ số dư nội bộ**: phải thu của M với S và phải trả của S với M phải bù trừ.',
            '**Kiểm chứng**: dựng lại lãi gộp từ góc nhìn tập đoàn (chỉ giao dịch với bên ngoài).',
          ],
        },
        {
          kind: 'quiz',
          id: 'intercompany-q1',
          question: 'M bán cho S 300 tỷ, S chưa bán ra ngoài chút nào. Trong báo cáo hợp nhất, doanh thu từ giao dịch này là bao nhiêu?',
          options: [
            { id: 'a', text: '0 — chưa có giao dịch với bên ngoài tập đoàn.', correct: true, explain: 'Đúng. Hàng chỉ chuyển từ kho M sang kho S; doanh thu hợp nhất chỉ ghi khi bán cho bên ngoài.' },
            { id: 'b', text: '300 tỷ vì M đã xuất hóa đơn.', explain: 'Hóa đơn nội bộ không tạo doanh thu hợp nhất.' },
            { id: 'c', text: '150 tỷ — một nửa vì hai bên cùng ghi.', explain: 'Không có quy tắc chia đôi.' },
          ],
        },
      ],
    },
    {
      id: 'eliminate',
      kind: 'analysis',
      title: 'Bước 1 — Loại trừ doanh thu, giá vốn nội bộ và lãi chưa thực hiện',
      blocks: [
        {
          kind: 'text',
          md: 'S mua 300 tỷ hàng từ M, bán ra ngoài 2/3 (giá vốn theo giá chuyển giao 200 tỷ), còn **100 tỷ tồn kho** cuối kỳ. M lãi 30% trên giá bán (giá vốn 210 / giá bán 300), nên trong 100 tỷ tồn kho của S có 100 × 30% = **30 tỷ lãi chưa thực hiện**.',
        },
        {
          kind: 'table',
          title: 'Từ cộng thô đến báo cáo hợp nhất (tỷ đồng)',
          columns: [
            { key: 'item', label: 'Chỉ tiêu' },
            { key: 'sum', label: 'Cộng thô', align: 'right' },
            { key: 'adj', label: 'Loại trừ', align: 'right' },
            { key: 'cons', label: 'Hợp nhất', align: 'right' },
          ],
          rows: [
            { item: 'Doanh thu', sum: '1.600', adj: '−300', cons: '1.300' },
            { item: 'Giá vốn', sum: '1.120', adj: '−300 + 30', cons: '850' },
            { item: 'Lãi gộp', sum: '480', adj: '−30', cons: '450' },
            { item: 'Biên lãi gộp', sum: '30,0%', adj: '', cons: '34,6%' },
          ],
          highlight: [{ row: 0, tone: 'warning' }],
          caption: 'Giá vốn: trừ 300 giá vốn nội bộ và cộng 30 lãi chưa thực hiện nằm trong tồn kho. Biên lãi gộp hợp nhất cao hơn vì mẫu số (doanh thu) giảm nhiều hơn tử số.',
        },
        {
          kind: 'text',
          md: 'Kiểm tra từ góc nhìn tập đoàn: lãi từ bán ngoài của M (800 − 560 = 240) + lãi hàng từ M do S bán ra ngoài (260 − 140 giá vốn tập đoàn = 120) + lãi hàng khác của S (240 − 150 = 90) = **450**. Khớp với bảng.',
        },
      ],
    },
    {
      id: 'growth',
      kind: 'analysis',
      title: 'Bước 2 — Tác động lên tăng trưởng và cách kiểm chứng giả thuyết',
      blocks: [
        {
          kind: 'table',
          title: 'Tăng trưởng doanh thu: công bố nhầm so với đúng (tỷ đồng)',
          columns: [
            { key: 'v', label: 'Cách tính' },
            { key: 'y0', label: 'Năm trước', align: 'right' },
            { key: 'y1', label: 'Năm nay', align: 'right' },
            { key: 'g', label: 'Tăng', align: 'right' },
          ],
          rows: [
            { v: 'Cộng thô (chưa loại trừ)', y0: '1.100', y1: '1.600', g: '+45,5%' },
            { v: 'Hợp nhất đúng (đã loại trừ)', y0: '1.100', y1: '1.300', g: '+18,2%' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
          caption: 'Năm trước chưa có giao dịch nội bộ giữa M và S nên con số năm trước không đổi; năm nay giao dịch nội bộ làm tăng trưởng bị thổi phồng gấp hơn 2,5 lần.',
        },
        {
          kind: 'table',
          title: 'Giả thuyết "doanh thu hợp nhất đang cộng cả giao dịch nội bộ" — cách kiểm tra',
          columns: [
            { key: 'test', label: 'Kiểm tra' },
            { key: 'sig', label: 'Nếu giả thuyết đúng, ta thấy' },
          ],
          rows: [
            { test: 'Doanh thu hợp nhất so với tổng doanh thu riêng của từng công ty', sig: 'Hai số bằng nhau (hợp nhất không nhỏ hơn)' },
            { test: 'Thuyết minh giao dịch với các bên liên quan', sig: 'Có giao dịch bán hàng giữa M và S với giá trị 300' },
            { test: 'Số dư phải thu/phải trả nội bộ', sig: 'Phải thu của M với S còn trong báo cáo hợp nhất thay vì bù trừ' },
            { test: 'Tăng trưởng doanh thu so với tăng trưởng doanh thu bán ra ngoài', sig: 'Chênh lệch lớn (45,5% so với 18,2%)' },
          ],
        },
        {
          kind: 'quiz',
          id: 'intercompany-q2',
          question: 'Kiểm tra nhanh nhất cho nghi vấn "chưa loại trừ nội bộ" là gì?',
          options: [
            { id: 'a', text: 'So doanh thu hợp nhất với tổng doanh thu của từng công ty trong tập đoàn và đọc thuyết minh bên liên quan.', correct: true, explain: 'Đúng. Hợp nhất đúng phải nhỏ hơn tổng thô khi có giao dịch nội bộ; thuyết minh cho biết quy mô giao dịch.' },
            { id: 'b', text: 'Hỏi tổng giám đốc.', explain: 'Ý kiến không phải bằng chứng kiểm chứng được.' },
            { id: 'c', text: 'So với doanh thu đối thủ.', explain: 'Không liên quan đến việc loại trừ nội bộ.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: quy trình hợp nhất có kiểm soát giao dịch nội bộ',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận trên dữ liệu giả định:** doanh thu hợp nhất đúng là 1.300 tỷ (+18,2%), không phải 1.600 tỷ (+45,5%); lãi gộp hợp nhất 450 tỷ, thấp hơn cộng thô 30 tỷ do lãi chưa thực hiện trong tồn kho. Quy tắc hợp nhất cụ thể (tỷ lệ sở hữu, thuế hoãn lại, lợi ích cổ đông không kiểm soát) phức tạp hơn bài này và cần người có chuyên môn rà.',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Lập bảng đối chiếu giao dịch nội bộ hằng tháng giữa các công ty trong tập đoàn', owner: 'Kế toán hợp nhất', metric: 'Chênh lệch số dư phải thu – phải trả nội bộ', threshold: '0 sau khi đối chiếu; chênh > 0,1% phải điều tra' },
            { action: 'Theo dõi tồn kho mua từ công ty trong tập đoàn để tính lãi chưa thực hiện', owner: 'Kế toán hợp nhất', metric: 'Giá trị tồn kho nội bộ và lãi chưa thực hiện', threshold: 'Báo cáo mỗi cuối kỳ' },
            { action: 'Thêm kiểm tra tự động: doanh thu hợp nhất ≤ tổng doanh thu riêng trừ doanh thu nội bộ', owner: 'Data analyst tài chính', metric: 'Chênh lệch doanh thu hợp nhất so với kiểm tra', threshold: 'Bằng 0' },
          ],
        },
        {
          kind: 'quiz',
          id: 'intercompany-q3',
          question: 'Tồn kho nội bộ chưa bán ra ngoài tăng. Tác động lên lãi gộp hợp nhất?',
          options: [
            { id: 'a', text: 'Lãi chưa thực hiện nằm trong tồn kho lớn hơn nên phải loại trừ nhiều hơn, làm lãi gộp hợp nhất thấp hơn cộng thô.', correct: true, explain: 'Đúng. Lãi chỉ được thừa nhận ở góc nhìn tập đoàn khi hàng bán ra bên ngoài.' },
            { id: 'b', text: 'Không ảnh hưởng vì hai bên cùng trong tập đoàn.', explain: 'Có ảnh hưởng: lãi nội bộ phải loại khỏi hợp nhất cho đến khi hàng bán ra ngoài.' },
            { id: 'c', text: 'Lãi gộp hợp nhất cao hơn cộng thô.', explain: 'Ngược lại: loại trừ làm lãi hợp nhất thấp hơn cộng thô.' },
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
            { title: 'Cộng báo cáo riêng và gọi là hợp nhất', why: 'Doanh thu và giá vốn nội bộ bị tính hai lần.', instead: 'Loại trừ giao dịch nội bộ trước khi cộng.' },
            { title: 'Quên lãi chưa thực hiện trong tồn kho', why: 'Lãi gộp hợp nhất bị thổi phồng khi còn hàng nội bộ chưa bán ra ngoài.', instead: 'Theo dõi tồn kho mua nội bộ cuối kỳ.' },
            { title: 'Đọc tăng trưởng cộng thô như tăng trưởng thật', why: 'Giao dịch nội bộ mới phát sinh làm tăng trưởng bị thổi phồng.', instead: 'So tăng trưởng doanh thu hợp nhất đúng và doanh thu bán ra ngoài.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Báo cáo hợp nhất chỉ gồm giao dịch với bên ngoài tập đoàn; doanh thu và giá vốn nội bộ phải loại trừ.',
    'Lãi nằm trong tồn kho mua nội bộ là lãi chưa thực hiện và cũng phải loại.',
    'Kiểm tra bằng cách so doanh thu hợp nhất với tổng thô, thuyết minh bên liên quan và số dư nội bộ.',
  ],
  references: [
    { title: 'IFRS 10 Consolidated Financial Statements', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-10-consolidated-financial-statements/', note: 'Trang chuẩn mực báo cáo tài chính hợp nhất, nơi tra khái niệm kiểm soát và nguyên tắc hợp nhất.' },
    { title: 'IAS 24 Related Party Disclosures', publisher: 'IFRS Foundation', url: 'https://www.ifrs.org/issued-standards/list-of-standards/ias-24-related-party-disclosures/', note: 'Trang chuẩn mực công bố bên liên quan, nơi tìm thuyết minh về giao dịch giữa các công ty trong tập đoàn.' },
    { title: 'Consolidated financial statement', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Consolidated_financial_statement', note: 'Tổng quan báo cáo hợp nhất và việc loại trừ giao dịch nội bộ.' },
  ],
}
