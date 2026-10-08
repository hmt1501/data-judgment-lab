import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — tăng hạn mức thẻ tín dụng từ 20 triệu lên 30 triệu cho 40.000 chủ thẻ "ổn định"
 * (12 tháng không trễ hạn, dùng hạn mức cao). Chia 3 nhóm điểm: A 20.000 · B 14.000 · C 6.000.
 * Giả định chung mỗi tài khoản/năm: lãi + phí thu trên dư nợ tăng thêm 24% · chi phí vốn vay 6% · vận hành 1% · LGD 85%
 *   Chi phí vốn chủ: 8% × 12% = 0,96% trên EAD tăng thêm. EL = PD × LGD × EAD.
 * Thử nghiệm đối chứng 3 tháng, 2.000 tài khoản/nhóm (A 1.000 · B 700 · C 300 mỗi nhóm):
 *   Nhóm | dư nợ tăng thêm | PD chứng → thử | EAD chứng → thử (tr đ)
 *   A    | +2,0 tr         | 1,5% → 1,6%    | 12 → 16
 *   B    | +2,8 tr         | 3,0% → 3,6%    | 16 → 22
 *   C    | +3,5 tr         | 6,0% → 8,0%    | 19 → 27
 * Lợi nhuận kỳ vọng tăng thêm/tài khoản/năm (tr đ) = ΔDư nợ × (24% − 6% − 1%) − (EL_thử − EL_chứng) − ΔEAD × 0,96%
 *   A: Doanh thu 0,480 · vốn vay+vận hành 0,140 · EL 0,153 → 0,218 (Δ 0,065) · vốn chủ 0,038 → 0,237 → 20.000 × 0,237 = 4,74 tỷ/năm
 *   B: 0,672 · 0,196 · EL 0,408 → 0,673 (Δ 0,265) · 0,058 → 0,153 → 14.000 × 0,153 = 2,14 tỷ/năm
 *   C: 0,840 · 0,245 · EL 0,969 → 1,836 (Δ 0,867) · 0,077 → −0,349 → 6.000 × −0,349 = −2,09 tỷ/năm
 *   Tổng 3 nhóm = 4,79 tỷ · chỉ A + B = 6,88 tỷ
 *   PD hòa vốn của nhóm thử (giữ các tham số khác): A 3,34% · B 4,42% · C 6,48%
 *   Độ nhạy B: PD thử 3,6% → +0,153 · 4,42% → 0 · 4,6% → −0,034 tr/tài khoản
 * Sai số mẫu: PD gộp chứng 2,7% (A 20/40 × 1,5 + B 14/40 × 3,0 + C 6/40 × 6,0) · thử 3,26% ; SE chênh lệch = √(p₁q₁/2000 + p₂q₂/2000) = 0,54 điểm %
 *   nhóm B (700/nhóm): SE ≈ 0,95 điểm % → khoảng tin cậy 95% ≈ ±1,9 điểm % (rộng hơn nhiều so với chênh 0,6)
 */
export const creditLimitStrategy: CaseStudy = {
  id: 'credit-limit-strategy',
  title: 'Tăng hạn mức thẻ cho nhóm khách ổn định: lãi tăng hay lỗ tăng nhanh hơn?',
  domain: 'lending',
  level: 'senior',
  minutes: 14,
  skills: ['credit-risk', 'unit-economics', 'tradeoff'],
  question:
    'Có nên tăng hạn mức thẻ từ 20 lên 30 triệu đồng cho 40.000 chủ thẻ ổn định? Doanh thu tăng thêm có vượt tổn thất kỳ vọng và chi phí vốn không, và nếu làm thì làm với điều kiện nào?',
  summary:
    'So doanh thu lãi/phí tăng thêm với tổn thất kỳ vọng PD × LGD × EAD và chi phí vốn theo từng nhóm điểm, đọc một thử nghiệm đối chứng nhỏ có sai số lớn và đề xuất triển khai có owner, ngưỡng dừng và theo dõi.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng.* Bạn là analyst của bộ phận thẻ ở một ngân hàng bán lẻ. Giám đốc Sản phẩm đề xuất **nâng hạn mức từ 20 lên 30 triệu đồng cho 40.000 chủ thẻ "ổn định"**: 12 tháng không trễ hạn và dùng hạn mức cao. Lý lẽ của anh ấy: *"Khách này an toàn, hạn mức cao hơn thì họ chi tiêu và vay nhiều hơn, doanh thu tăng."* Quản trị rủi ro lo ngại: *"Hạn mức cao hơn thì khi vỡ nợ, mức dư nợ lúc đó cũng cao hơn, và nhóm điểm thấp có thể tệ đi."* Hai bên đã chạy một thử nghiệm đối chứng nhỏ trong 3 tháng:',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Chủ thẻ đủ điều kiện', value: '40.000', note: 'A 20.000 · B 14.000 · C 6.000' },
            { label: 'Thử nghiệm', value: '2.000 + 2.000', note: 'nhóm thử và nhóm chứng, chọn ngẫu nhiên' },
            { label: 'Dư nợ tăng thêm (nhóm B)', value: '+2,8 tr đ', tone: 'positive', note: 'so với nhóm chứng' },
            { label: 'PD 12 tháng ước tính (nhóm B)', value: '3,0% → 3,6%', tone: 'warning', note: 'chứng → thử' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi thật là lợi nhuận tăng thêm, không phải doanh thu',
          md: 'Tăng hạn mức làm tăng cả doanh thu lẫn tổn thất. Quyết định đúng so sánh **phần chênh lệch** giữa hai phương án (có và không tăng hạn mức) sau khi trừ chi phí vốn, nhóm khách nào còn lời, và mức PD nào thì hết lời.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: lợi nhuận tăng thêm = doanh thu tăng thêm − chi phí vốn − tổn thất kỳ vọng tăng thêm',
      blocks: [
        {
          kind: 'formula',
          expression: 'Δ Lợi nhuận = Δ Dư nợ × (Lãi + phí − Chi phí vốn − Vận hành) − Δ EL − Δ EAD × Chi phí vốn chủ, với EL = PD × LGD × EAD',
          note: 'Giả định mô phỏng: lãi + phí 24%/năm, vốn vay 6%, vận hành 1%, LGD 85%, vốn chủ cần giữ 8% EAD với chi phí 12%/năm. Hạn mức tăng làm **cả PD lẫn EAD** thay đổi, nên EL tăng nhanh hơn phần dư nợ tăng.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Đo tăng thêm (incrementality)**: so nhóm thử và nhóm chứng ngẫu nhiên, đừng so với chính họ trước đó hay với khách không được tăng.',
            '**Tính theo nhóm điểm**: doanh thu tăng và PD tăng khác nhau theo nhóm, nên kết luận gộp dễ sai.',
            '**Đọc sai số**: mẫu nhỏ và sự kiện vỡ nợ hiếm, nên xem khoảng tin cậy và độ nhạy, không chỉ giá trị trung bình.',
            '**Đặt ngưỡng dừng**: xác định trước PD hòa vốn và chỉ báo sớm nào kích hoạt dừng.',
          ],
        },
        {
          kind: 'quiz',
          id: 'credit-limit-strategy-q1',
          question: 'Giám đốc Sản phẩm chỉ báo "dư nợ nhóm được tăng hạn mức tăng 23% so với trước". Vì sao con số này chưa đủ để quyết định?',
          options: [
            {
              id: 'a',
              text: 'Vì 23% là con số nhỏ, cần tăng hạn mức nhiều hơn nữa.',
              explain: 'Mức tăng không nói lên điều gì về lợi nhuận. Chưa biết tổn thất đi kèm, và dư nợ tăng nhiều hơn có thể kéo EL tăng nhanh hơn.',
            },
            {
              id: 'b',
              text: 'Vì thiếu nhóm đối chứng (dư nợ có thể tăng do mùa vụ) và thiếu phần chi phí: tổn thất kỳ vọng tăng thêm và chi phí vốn.',
              correct: true,
              explain:
                'Đúng. Dư nợ trước/sau chưa tách mùa vụ hay xu hướng chung; chỉ nhóm đối chứng ngẫu nhiên mới cho tác động tăng thêm. Và doanh thu phải trừ EL tăng thêm và vốn mới ra lợi nhuận.',
            },
            {
              id: 'c',
              text: 'Vì chỉ số dư nợ không quan trọng với ngân hàng.',
              explain: 'Dư nợ vẫn là đầu vào quan trọng của doanh thu lãi; vấn đề là nó chỉ là một phần của phương trình lợi nhuận.',
            },
          ],
        },
      ],
    },
    {
      id: 'economics',
      kind: 'analysis',
      title: 'Bước 1 — Lợi nhuận tăng thêm theo nhóm điểm: nhóm C làm lỗ',
      blocks: [
        {
          kind: 'table',
          title: 'Kinh tế tăng hạn mức theo nhóm điểm (mô phỏng, tr đ/tài khoản/năm)',
          columns: [
            { key: 'grp', label: 'Nhóm' },
            { key: 'rev', label: 'Doanh thu tăng thêm', align: 'right' },
            { key: 'cost', label: 'Vốn vay + vận hành', align: 'right' },
            { key: 'el', label: 'EL chứng → thử', align: 'right' },
            { key: 'cap', label: 'Vốn chủ', align: 'right' },
            { key: 'net', label: 'Lợi nhuận tăng thêm', align: 'right' },
            { key: 'total', label: 'Tổng nhóm / năm', align: 'right' },
          ],
          rows: [
            { grp: 'A (20.000)', rev: '0,480', cost: '0,140', el: '0,153 → 0,218', cap: '0,038', net: '+0,237', total: '+4,74 tỷ đ' },
            { grp: 'B (14.000)', rev: '0,672', cost: '0,196', el: '0,408 → 0,673', cap: '0,058', net: '+0,153', total: '+2,14 tỷ đ' },
            { grp: 'C (6.000)', rev: '0,840', cost: '0,245', el: '0,969 → 1,836', cap: '0,077', net: '−0,349', total: '−2,09 tỷ đ' },
          ],
          highlight: [
            { row: 1, tone: 'warning' },
            { row: 2, tone: 'negative' },
          ],
          caption: 'Nhóm C có doanh thu tăng cao nhất nhưng EL tăng gần gấp đôi (0,969 → 1,836). Tăng cho cả 3 nhóm: +4,79 tỷ đ/năm. Chỉ A và B: +6,88 tỷ đ/năm.',
        },
        {
          kind: 'chart',
          title: 'PD của nhóm thử so với PD hòa vốn (%)',
          type: 'bar',
          xKey: 'grp',
          unit: '%',
          series: [
            { key: 'pd', label: 'PD nhóm thử (quan sát)' },
            { key: 'be', label: 'PD hòa vốn' },
          ],
          data: [
            { grp: 'A', pd: 1.6, be: 3.34 },
            { grp: 'B', pd: 3.6, be: 4.42 },
            { grp: 'C', pd: 8.0, be: 6.48 },
          ],
          caption: 'A có biên an toàn rộng. B còn dư biên khoảng 0,8 điểm %. C đã vượt PD hòa vốn.',
        },
        {
          kind: 'quiz',
          id: 'credit-limit-strategy-q2',
          question: 'Vì sao nhóm C có doanh thu tăng thêm cao nhất (0,840) nhưng lợi nhuận lại âm?',
          options: [
            {
              id: 'a',
              text: 'Vì chi phí vận hành của nhóm C cao bất thường.',
              explain: 'Chi phí vốn vay + vận hành chỉ 0,245, tỷ lệ với dư nợ tăng như các nhóm khác. Khoản chênh lệch lớn nằm ở EL.',
            },
            {
              id: 'b',
              text: 'Vì cả PD (6% → 8%) và EAD (19 → 27 triệu) cùng tăng, nên EL tăng 0,867, lớn hơn phần lãi ròng thu thêm.',
              correct: true,
              explain:
                'Đúng. EL = PD × LGD × EAD nên hai yếu tố nhân với nhau: PD tăng 1,33 lần và EAD tăng 1,42 lần làm EL tăng khoảng 1,9 lần. Doanh thu chỉ tăng tuyến tính theo dư nợ.',
            },
            {
              id: 'c',
              text: 'Vì nhóm C không dùng thêm hạn mức.',
              explain: 'Ngược lại, nhóm C dùng thêm nhiều nhất (+3,5 triệu). Đó là một phần lý do EAD tăng mạnh.',
            },
          ],
        },
      ],
    },
    {
      id: 'uncertainty',
      kind: 'analysis',
      title: 'Bước 2 — Đọc thử nghiệm nhỏ: sai số lớn hơn chênh lệch',
      blocks: [
        {
          kind: 'table',
          title: 'Sai số của thử nghiệm (mô phỏng, 12 tháng PD ước tính)',
          columns: [
            { key: 'grp', label: 'Phạm vi' },
            { key: 'n', label: 'Tài khoản mỗi nhóm', align: 'right' },
            { key: 'diff', label: 'PD thử − chứng', align: 'right' },
            { key: 'se', label: 'Sai số chuẩn', align: 'right' },
            { key: 'ci', label: 'Khoảng tin cậy 95%', align: 'right' },
          ],
          rows: [
            { grp: 'Gộp 3 nhóm', n: '2.000', diff: '+0,56 điểm %', se: '0,54', ci: '≈ ±1,1' },
            { grp: 'Nhóm B', n: '700', diff: '+0,60 điểm %', se: '0,95', ci: '≈ ±1,9' },
          ],
          caption: 'Chênh PD quan sát được (+0,6 điểm %) nhỏ hơn nhiều so với độ rộng khoảng tin cậy: không phân biệt được với 0, và cũng không loại trừ được mức tăng 2 điểm %.',
        },
        {
          kind: 'chart',
          title: 'Lợi nhuận tăng thêm của nhóm B theo PD nhóm thử (tr đ/tài khoản/năm)',
          type: 'line',
          xKey: 'pd',
          unit: ' tr',
          series: [{ key: 'profit', label: 'Lợi nhuận tăng thêm' }],
          data: [
            { pd: '3,0%', profit: 0.265 },
            { pd: '3,6%', profit: 0.153 },
            { pd: '4,0%', profit: 0.078 },
            { pd: '4,42%', profit: 0.0 },
            { pd: '4,6%', profit: -0.034 },
            { pd: '5,0%', profit: -0.109 },
          ],
          caption: 'Nếu PD thật nằm ở cận trên khoảng tin cậy (khoảng 4,6%) thì nhóm B bắt đầu lỗ. Mỗi 0,1 điểm % PD cao hơn làm mất khoảng 0,019 tr/tài khoản.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Đừng đợi "ý nghĩa thống kê" mới ra quyết định',
          md: 'Với PD vài phần trăm và vài trăm tài khoản, thử nghiệm không bao giờ đủ nhạy để phát hiện một chênh lệch nhỏ nhưng đủ lớn để làm hết lời. Thay vì bỏ cuộc, hãy (1) tính **PD hòa vốn** từ trước, (2) dùng **chỉ báo sớm** có nhiều quan sát hơn (tỷ lệ trễ hạn 30 ngày, mức sử dụng hạn mức, tỷ lệ chỉ trả tối thiểu), và (3) mở rộng theo từng bước với ngưỡng dừng.',
        },
        {
          kind: 'quiz',
          id: 'credit-limit-strategy-q3',
          question: 'Với kết quả trên, đề xuất nào hợp lý nhất cho cuộc họp quyết định?',
          options: [
            {
              id: 'a',
              text: 'Tăng hạn mức cho cả 40.000 khách vì tổng lợi nhuận kỳ vọng +4,79 tỷ đ/năm.',
              explain: 'Tổng gộp che khoản lỗ 2,09 tỷ của nhóm C. Chỉ A và B đã cho 6,88 tỷ; kéo C vào làm mất 30% lợi nhuận và tăng rủi ro.',
            },
            {
              id: 'b',
              text: 'Triển khai theo giai đoạn cho nhóm A trước, B theo từng đợt kèm ngưỡng dừng; không tăng nhóm C; giữ nhóm đối chứng và theo dõi chỉ báo sớm.',
              correct: true,
              explain:
                'Đúng. A có biên an toàn rộng, B còn dư biên mỏng nên cần triển khai từng đợt, ngưỡng dừng và nhóm đối chứng tiếp tục. C vượt PD hòa vốn nên không tăng.',
            },
            {
              id: 'c',
              text: 'Hủy đề xuất vì thử nghiệm không có ý nghĩa thống kê.',
              explain: 'Không có ý nghĩa thống kê không có nghĩa là không có tác động. Nó nghĩa là thử nghiệm quá nhỏ để kết luận, nên cần mở rộng có kiểm soát, không phải bỏ.',
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
          md: '**Đề xuất cho Giám đốc Sản phẩm và Quản trị rủi ro:** tăng hạn mức (20 → 30 triệu) theo giai đoạn, chỉ cho nhóm A và B; **không tăng nhóm C**. Lợi nhuận kỳ vọng tăng thêm khoảng +6,9 tỷ đ/năm (A 4,74 + B 2,14), nhưng độ nhạy cho thấy nhóm B mất lời nếu PD vượt khoảng 4,4%. Vì vậy mỗi bước đi kèm ngưỡng dừng, và một phần khách giữ làm đối chứng.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Triển khai nhóm A (20.000 khách) lên 30 triệu; giữ 10% khách A ngẫu nhiên làm nhóm đối chứng thường trực',
              owner: 'Giám đốc Sản phẩm Thẻ + Credit Risk',
              metric: 'Tỷ lệ trễ hạn 30 ngày (DPD30+) tại MOB3 và MOB6 sau tăng; PD thực tế so với PD hòa vốn 3,34%',
              threshold: 'Dừng mở rộng nếu DPD30+ nhóm thử cao hơn nhóm chứng quá 0,5 điểm % ở hai tháng liên tiếp',
            },
            {
              action: 'Nhóm B: tăng 20 → 30 triệu theo 3 đợt (25%, 50%, 100% khách B), chỉ qua đợt tiếp theo khi chỉ báo sớm đạt',
              owner: 'Credit Policy + Risk Analytics',
              metric: 'PD ước tính nhóm thử, mức sử dụng hạn mức, lợi nhuận tăng thêm/tài khoản',
              threshold: 'Dừng ngay nếu PD ước tính nhóm B thử vượt 4,4% (PD hòa vốn); cảnh báo ở 4,0%',
            },
            {
              action: 'Không tăng nhóm C; xem xét lại sau 6 tháng bằng thử nghiệm riêng, hạn mức thấp hơn và theo dõi tỷ lệ chỉ trả tối thiểu',
              owner: 'Head of Credit Risk',
              metric: 'Số khách C được tăng hạn mức; EL tránh được',
              threshold: '0 khách C được tăng trong 6 tháng; tránh khoảng 2,09 tỷ đ lỗ kỳ vọng/năm',
            },
            {
              action: 'Dựng dashboard theo dõi hằng tháng theo nhóm điểm × thử/chứng: dư nợ, mức sử dụng, DPD30+, EL, lợi nhuận tăng thêm; xem lại PD hòa vốn khi chi phí vốn thay đổi',
              owner: 'Risk Analytics + Finance',
              metric: 'Thời gian phát hiện lệch so với dự phóng',
              threshold: 'Phát hiện trong 1 chu kỳ báo cáo; xem lại tham số mỗi quý',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Quyết định bất định thì nên **giữ lựa chọn mở** thay vì cược một lần: bắt đầu ở nhóm có biên an toàn rộng, mở rộng từng bước, và gắn mỗi bước với ngưỡng dừng định lượng. Tăng hạn mức khó thu hồi hơn việc không tăng, nên chi phí của một sai lầm lớn hơn chi phí chờ thêm một đợt dữ liệu.',
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
              title: 'Chọn khách "tốt" rồi so với khách còn lại',
              why: 'Khách được chọn tăng hạn mức vốn đã khác khách còn lại (ít trễ hạn, chi tiêu nhiều). Mọi chênh lệch sau đó trộn lẫn tác động của hạn mức với khác biệt sẵn có.',
              instead: 'Phân bổ ngẫu nhiên giữa nhóm thử và nhóm chứng trong cùng tập đủ điều kiện, và giữ nhóm chứng đủ lâu.',
            },
            {
              title: 'Chỉ nhìn doanh thu và PD, quên EAD',
              why: 'Hạn mức cao hơn làm EAD tăng khi vỡ nợ, nên EL tăng cả khi PD gần như không đổi. Chỉ nhìn PD bỏ sót nguồn rủi ro lớn nhất.',
              instead: 'Luôn tính EL = PD × LGD × EAD cho cả hai phương án, và so phần chênh lệch.',
            },
            {
              title: 'Kết luận từ thử nghiệm nhỏ mà không nêu sai số',
              why: 'Với vài trăm tài khoản và PD vài phần trăm, một chênh lệch 0,6 điểm % không phân biệt được với 0, cũng không loại trừ được mức đủ làm hết lời.',
              instead: 'Báo khoảng tin cậy, tính PD hòa vốn, dùng chỉ báo sớm và mở rộng từng bước với ngưỡng dừng.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Quyết định tăng hạn mức so lợi nhuận tăng thêm = doanh thu lãi/phí − chi phí vốn − Δ EL, với EL = PD × LGD × EAD; hạn mức cao làm cả PD lẫn EAD tăng.',
    'Tính theo nhóm điểm và tìm PD hòa vốn của từng nhóm: tổng gộp có thể dương dù một nhóm đang làm lỗ.',
    'Thử nghiệm nhỏ có sai số lớn: mở rộng từng bước, giữ nhóm đối chứng, đặt ngưỡng dừng và chỉ báo sớm có owner rõ ràng.',
  ],
  references: [
    {
      title: '12 CFR 1026.51 — Ability to repay (Regulation Z, ability to pay and credit limit increases)',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/rules-policy/regulations/1026/51/',
      note: 'Quy định của Mỹ: tổ chức phát hành thẻ phải xem xét khả năng trả nợ tối thiểu trước khi mở thẻ hoặc tăng hạn mức. Ví dụ về ràng buộc pháp lý cần biết khi đề xuất tăng hạn mức.',
    },
    {
      title: 'The Consumer Credit Card Market (2019)',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/data-research/research-reports/the-consumer-credit-market-2019/',
      note: 'Báo cáo thị trường thẻ tín dụng Mỹ: thực tiễn của tổ chức phát hành, hạn mức và khả năng tiếp cận tín dụng.',
    },
    {
      title: 'Guidance on credit risk and accounting for expected credit losses',
      publisher: 'Basel Committee on Banking Supervision (BIS)',
      url: 'https://www.bis.org/bcbs/publ/d350.htm',
      note: 'Khung đánh giá tổn thất tín dụng kỳ vọng và các nguyên tắc quản trị rủi ro tín dụng liên quan đến EL.',
    },
  ],
}
