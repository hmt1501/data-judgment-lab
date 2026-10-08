import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — thành phố "Bắc Hà" và các quận A–G là địa bàn giả định; chính sách "hạn mức vay nhà thứ hai"
 * là giả định, KHÔNG đại diện cho bất kỳ quy định thật nào. Giao dịch/tháng = trung bình 6 tháng trước vs 6 tháng sau. Đã kiểm tra khớp nhau:
 *   Nhóm áp dụng (quận A, B, C): 1.200 → 840 (−30,0%) · A 500 → 340 · B 450 → 320 · C 250 → 180 (tổng 840 ✓)
 *   Nhóm đối chứng (quận D, E, F): 1.800 → 1.656 (−8,0%) · D 700 → 644 · E 600 → 552 · F 500 → 460 (tổng 1.656 ✓)
 *   DiD = (−30,0%) − (−8,0%) = −22,0 điểm % ≈ −264 giao dịch/tháng (1.200 × 22%); phản thực tế = 1.200 × 1.656/1.800 = 1.104 → −23,9%
 *   Khoảng 90% (bootstrap theo quận + hoán vị): −34 … −9 điểm %
 *   Chỉ số tháng (TB 6 tháng trước = 100): áp dụng trước 99 101 100 102 98 100, sau 80 72 68 66 68 66 (TB 70)
 *                                          đối chứng trước 100 98 101 99 101 101 (TB 100), sau 96 94 93 91 89 89 (TB 92)
 *   Placebo (giả vờ chính sách bắt đầu tháng −3, chỉ dùng dữ liệu trước): áp dụng 100,0 → 100,0 (0,0%), đối chứng 99,67 → 100,33 (+0,7%) → DiD ≈ −0,7 điểm %
 *   Theo loại người mua: nhà thứ hai áp dụng 360 → 168 (−53,3%), đối chứng 540 → 480 (−11,1%) → DiD −42,2 điểm % (−152 gd/tháng)
 *                        nhà đầu tiên áp dụng 840 → 672 (−20,0%), đối chứng 1.260 → 1.176 (−6,7%) → DiD −13,3 điểm % (−112 gd/tháng); 152 + 112 = 264 ✓
 *   Lan tỏa: quận G (giáp A, B) 400 → 460 (+15%); phản thực tế ×0,92 = 368 → +92 giao dịch chuyển chỗ
 *     Nếu đưa G vào đối chứng: 2.200 → 2.116 (−3,8%) → DiD −26,2 điểm % (bị thổi phồng)
 *     Tác động ròng lên cả thị trường ≈ −264 + 92 = −172 giao dịch/tháng (≈ 65% mức giảm "nhìn thấy")
 *   Giá trung vị (tr đ/m²): áp dụng 62,0 → 60,9 (−1,8%), đối chứng 55,0 → 54,2 (−1,5%) → DiD −0,3 điểm % (chưa phân biệt được với 0)
 *   Nhiễu chung hai nhóm: lãi suất vay tăng +0,5 điểm % ở tháng +2, kỳ nghỉ lễ làm tháng +4..+6 chậm hơn → phần đó nằm trong −8,0% của đối chứng
 */
export const realEstatePolicyDid: CaseStudy = {
  id: 'real-estate-policy-did',
  title: 'Siết hạn mức vay nhà thứ hai: giao dịch giảm bao nhiêu là do chính sách?',
  domain: 'real-estate',
  level: 'senior',
  minutes: 14,
  skills: ['causal', 'macro', 'tradeoff'],
  question:
    'Sau khi một chính sách giả định siết hạn mức vay mua nhà thứ hai áp dụng ở 3 quận, giao dịch giảm 30%. Bao nhiêu trong đó do chính sách, và nên điều chỉnh gì?',
  summary:
    'Dùng difference-in-differences với quận đối chứng để tách tác động chính sách khỏi lãi suất và mùa vụ, kiểm tra xu hướng song song, lan tỏa sang quận giáp ranh, rồi đề xuất quyết định có ngưỡng theo dõi.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng: thành phố, quận và chính sách đều là giả định.* Thành phố Bắc Hà áp dụng **giảm hạn mức cho vay đối với khoản vay mua nhà thứ hai** ở 3 quận (A, B, C) vì lo ngại đầu cơ. Bạn là analyst của một đơn vị nghiên cứu thị trường. Sau 6 tháng, báo cáo nội bộ viết: *"Giao dịch ở 3 quận giảm 30%, chính sách rất hiệu quả."* Trưởng nhóm nhờ bạn kiểm tra trước khi báo cáo lên lãnh đạo. Cùng giai đoạn, lãi suất vay thị trường tăng thêm 0,5 điểm % và có kỳ nghỉ lễ kéo dài.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Giao dịch/tháng 3 quận áp dụng', value: '840', delta: '−30,0% so với 6 tháng trước', tone: 'negative' },
            { label: 'Giao dịch/tháng 3 quận khác (D, E, F)', value: '1.656', delta: '−8,0% cùng giai đoạn', tone: 'warning' },
            { label: 'Giá trung vị 3 quận áp dụng', value: '60,9 tr đ/m²', delta: '−1,8%', tone: 'neutral', note: 'số mô phỏng' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Mục tiêu',
          md: 'Trả lời bằng số và khoảng tin cậy: **(1)** chính sách làm giảm giao dịch bao nhiêu, **(2)** ai bị tác động (người mua nhà thứ hai hay cả người mua nhà đầu tiên), **(3)** có hiệu ứng lan sang quận giáp ranh không, và **(4)** nên giữ, chỉnh hay dừng, theo ngưỡng nào.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: quận áp dụng sẽ ra sao nếu không có chính sách?',
      blocks: [
        {
          kind: 'text',
          md: 'Chính sách không thể ngẫu nhiên hóa theo người mua, nên cần một **phản thực tế**. Ta mượn nhịp biến động của các quận không áp dụng: lãi suất và mùa vụ tác động lên cả hai nhóm, còn chính sách chỉ tác động lên nhóm áp dụng. Phần chênh lệch của hai mức thay đổi mới là tác động.',
        },
        {
          kind: 'formula',
          expression: 'DiD = (Sau − Trước)áp dụng − (Sau − Trước)đối chứng',
          note: 'Tính trên mức thay đổi % so với kỳ trước (hoặc log) vì các quận có quy mô khác nhau. Giả định then chốt: **xu hướng song song** — nếu không có chính sách, hai nhóm đã đi cùng nhịp.',
        },
        {
          kind: 'list',
          style: 'check',
          items: [
            '**Xu hướng song song**: nhiều tháng trước chính sách, hai nhóm có biến động cùng nhịp không?',
            '**Nhiễu chung**: lãi suất, mùa vụ, kỳ nghỉ lễ ảnh hưởng cả hai nhóm có đồng đều không? Nếu nhóm áp dụng nhạy lãi suất hơn, DiD vẫn lệch.',
            '**Lan tỏa (spillover)**: người mua có chuyển sang quận giáp ranh không? Quận đó không được dùng làm đối chứng.',
            '**Đối tượng tác động**: chính sách nhắm nhà thứ hai nhưng có kéo giảm cả nhà đầu tiên không?',
            '**Ít đơn vị**: chỉ vài quận nên sai số chuẩn thông thường quá lạc quan.',
          ],
        },
        {
          kind: 'quiz',
          id: 'real-estate-policy-did-q1',
          question: 'Giao dịch ở 3 quận áp dụng giảm 30%, 3 quận đối chứng giảm 8%. Cách đọc nào hợp lý nhất?',
          options: [
            {
              id: 'a',
              text: 'Chính sách làm giảm 30% giao dịch, vì đó là mức giảm quan sát được.',
              explain: 'Mức −30% là trước/sau. Nó chứa cả tác động của lãi suất tăng và kỳ nghỉ lễ, thứ vốn cũng làm các quận khác giảm 8%.',
            },
            {
              id: 'b',
              text: 'Khoảng −22 điểm % (≈ −264 giao dịch/tháng), với điều kiện xu hướng song song trước chính sách đứng vững.',
              correct: true,
              explain: 'Đúng. (−30,0%) − (−8,0%) = −22,0 điểm %, tương đương 1.200 × 22% ≈ 264 giao dịch/tháng. Con số chỉ đáng tin nếu hai nhóm đi cùng nhịp trước mốc và lãi suất tác động lên chúng tương tự nhau.',
            },
            {
              id: 'c',
              text: 'Khoảng −8%, vì đó là phần "nền" và chính sách không có tác động đáng kể.',
              explain: '−8% là mức giảm của nhóm đối chứng, tức phần nhiễu chung. Tác động chính sách là phần nhóm áp dụng giảm *thêm* so với mức đó, không phải chính mức đó.',
            },
          ],
        },
      ],
    },
    {
      id: 'estimate',
      kind: 'analysis',
      title: 'Bước 1 — Ước lượng DiD và kiểm tra xu hướng song song',
      blocks: [
        {
          kind: 'table',
          title: 'Giao dịch/tháng: 6 tháng trước vs 6 tháng sau (mô phỏng)',
          columns: [
            { key: 'group', label: 'Nhóm' },
            { key: 'pre', label: 'Trước', align: 'right' },
            { key: 'post', label: 'Sau', align: 'right' },
            { key: 'change', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { group: 'Áp dụng (A, B, C)', pre: '1.200', post: '840', change: '−30,0%' },
            { group: 'Đối chứng (D, E, F)', pre: '1.800', post: '1.656', change: '−8,0%' },
            { group: 'Phản thực tế nhóm áp dụng', pre: '1.200', post: '1.104', change: '−8,0%' },
            { group: 'Tác động DiD', pre: '—', post: '−264', change: '−22,0 điểm %' },
          ],
          highlight: [{ row: 3, tone: 'negative' }],
          caption: 'Phản thực tế = 1.200 × 1.656 / 1.800 = 1.104. So với mức này, giao dịch thực tế thấp hơn 23,9%.',
        },
        {
          kind: 'chart',
          title: 'Chỉ số giao dịch theo tháng (TB 6 tháng trước = 100, mô phỏng)',
          type: 'line',
          xKey: 'month',
          series: [
            { key: 'treated', label: 'Áp dụng' },
            { key: 'control', label: 'Đối chứng' },
          ],
          data: [
            { month: 'T−6', treated: 99, control: 100 },
            { month: 'T−5', treated: 101, control: 98 },
            { month: 'T−4', treated: 100, control: 101 },
            { month: 'T−3', treated: 102, control: 99 },
            { month: 'T−2', treated: 98, control: 101 },
            { month: 'T−1', treated: 100, control: 101 },
            { month: 'T+1', treated: 80, control: 96 },
            { month: 'T+2', treated: 72, control: 94 },
            { month: 'T+3', treated: 68, control: 93 },
            { month: 'T+4', treated: 66, control: 91 },
            { month: 'T+5', treated: 68, control: 89 },
            { month: 'T+6', treated: 66, control: 89 },
          ],
          marker: { x: 'T+1', label: 'Chính sách có hiệu lực' },
          caption: 'Trước mốc, hai đường dao động quanh 100, chênh nhau không quá 3 điểm và không tách dần. Sau mốc, nhóm áp dụng rơi nhanh rồi đi ngang ở ~66–68; nhóm đối chứng trôi xuống chậm theo lãi suất và kỳ lễ.',
        },
        {
          kind: 'text',
          md: '**Placebo:** giả vờ chính sách bắt đầu ở tháng T−3 và chỉ dùng dữ liệu trước mốc thật, nhóm áp dụng đổi 0,0% còn nhóm đối chứng +0,7%, nên DiD "giả" ≈ −0,7 điểm %, nhỏ hơn nhiều so với −22,0. Khoảng 90% (bootstrap theo quận kết hợp hoán vị) là **−34 … −9 điểm %**: rộng vì chỉ có 3 + 3 quận.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Lãi suất tăng hay kỳ lễ chỉ gây lệch DiD nếu chúng **tác động khác nhau** lên hai nhóm. Quận áp dụng thường có nhiều người mua vay vốn hơn, nên nhạy lãi suất hơn. Hãy kiểm tra nhóm đối chứng có cơ cấu người mua (tỷ lệ vay, tỷ lệ nhà đầu tư) tương tự không, và nếu có, thêm biến này vào mô hình hoặc chọn lại đối chứng.',
        },
      ],
    },
    {
      id: 'spillover',
      kind: 'analysis',
      title: 'Bước 2 — Lan tỏa: giao dịch giảm hay chỉ chuyển chỗ?',
      blocks: [
        {
          kind: 'text',
          md: 'Quận G giáp A và B không bị áp dụng chính sách, và tăng từ 400 lên 460 giao dịch/tháng (+15%) trong khi nhóm đối chứng giảm 8%. Với phản thực tế 400 × 0,92 = 368, quận G có thêm **92 giao dịch/tháng** do người mua chuyển sang. Đó là lý do G không được nằm trong nhóm đối chứng.',
        },
        {
          kind: 'table',
          title: 'Ba cách đọc cùng một dữ liệu',
          columns: [
            { key: 'view', label: 'Cách tính' },
            { key: 'what', label: 'Nội dung', align: 'left' },
            { key: 'result', label: 'Kết quả', align: 'right' },
          ],
          rows: [
            { view: 'Trước/sau', what: 'Không dùng đối chứng', result: '−30,0%' },
            { view: 'DiD gồm cả quận G', what: 'Đối chứng bị nhiễm lan tỏa (2.200 → 2.116)', result: '−26,2 điểm %' },
            { view: 'DiD sạch (loại G)', what: 'Đối chứng D, E, F', result: '−22,0 điểm %' },
            { view: 'Tác động ròng cả thị trường', what: '−264 giao dịch ở A–C cộng 92 chuyển sang G', result: '≈ −172 gd/tháng' },
          ],
          highlight: [
            { row: 1, tone: 'warning' },
            { row: 3, tone: 'positive' },
          ],
          caption: 'Khoảng 35% mức giảm "nhìn thấy" ở 3 quận chỉ là giao dịch chuyển sang quận lân cận; tác động ròng lên cả thị trường là −172 giao dịch/tháng.',
        },
        {
          kind: 'quiz',
          id: 'real-estate-policy-did-q2',
          question: 'Vì sao đưa quận G (nhận thêm người mua) vào nhóm đối chứng làm ước lượng bị thổi phồng?',
          options: [
            {
              id: 'a',
              text: 'Vì G có ít giao dịch nên làm tăng nhiễu ngẫu nhiên.',
              explain: 'Quy mô nhỏ chỉ ảnh hưởng độ chính xác. Vấn đề ở đây là sai lệch có hệ thống, không phải nhiễu.',
            },
            {
              id: 'b',
              text: 'Vì G tăng nhờ chính sách nên kéo số liệu đối chứng lên, nhóm đối chứng trông ít giảm hơn thực tế, và khoảng cách với nhóm áp dụng bị nới rộng.',
              correct: true,
              explain: 'Đúng. Đối chứng chỉ có ý nghĩa khi không bị chính sách ảnh hưởng. Khi G hút giao dịch chuyển sang, mức giảm của đối chứng thu hẹp từ −8,0% xuống −3,8% và DiD phình từ −22,0 lên −26,2 điểm %.',
            },
            {
              id: 'c',
              text: 'Không bị thổi phồng: thêm quận vào đối chứng luôn làm ước lượng tốt hơn.',
              explain: 'Thêm đơn vị chỉ có lợi khi chúng hợp lệ (không bị can thiệp, đi cùng xu hướng). Thêm một quận bị lan tỏa làm sai chính giả định cần bảo vệ.',
            },
          ],
        },
      ],
    },
    {
      id: 'who',
      kind: 'analysis',
      title: 'Bước 3 — Ai bị tác động và giá phản ứng ra sao',
      blocks: [
        {
          kind: 'table',
          title: 'DiD theo loại người mua (giao dịch/tháng, mô phỏng)',
          columns: [
            { key: 'seg', label: 'Loại người mua' },
            { key: 'treat', label: 'Áp dụng (trước → sau)', align: 'right' },
            { key: 'ctrl', label: 'Đối chứng (trước → sau)', align: 'right' },
            { key: 'did', label: 'DiD', align: 'right' },
            { key: 'abs', label: 'Quy ra gd/tháng', align: 'right' },
          ],
          rows: [
            { seg: 'Nhà thứ hai (mục tiêu)', treat: '360 → 168 (−53,3%)', ctrl: '540 → 480 (−11,1%)', did: '−42,2 điểm %', abs: '−152' },
            { seg: 'Nhà đầu tiên', treat: '840 → 672 (−20,0%)', ctrl: '1.260 → 1.176 (−6,7%)', did: '−13,3 điểm %', abs: '−112' },
            { seg: 'Tổng', treat: '1.200 → 840', ctrl: '1.800 → 1.656', did: '−22,0 điểm %', abs: '−264' },
          ],
          highlight: [{ row: 1, tone: 'warning' }],
          caption: 'Chính sách đạt mục tiêu (nhà thứ hai giảm mạnh nhất) nhưng cũng kéo giảm cả nhà đầu tiên: 112 / 264 ≈ 42% tác động rơi vào nhóm không phải đối tượng.',
        },
        {
          kind: 'text',
          md: '**Giá:** giá trung vị nhóm áp dụng giảm 1,8% (62,0 → 60,9 tr đ/m²) còn nhóm đối chứng giảm 1,5% (55,0 → 54,2), nên DiD giá chỉ −0,3 điểm %, nằm trong dao động thông thường. Sau 6 tháng giao dịch phản ứng rõ nhưng **giá chưa**: người bán có thể đang chờ, hoặc giao dịch ít thì giá trung vị kém tin cậy. Không nên kết luận "chính sách không ảnh hưởng giá" từ khoảng thời gian ngắn này.',
        },
        {
          kind: 'quiz',
          id: 'real-estate-policy-did-q3',
          question: 'Với kết quả trên, báo cáo nào trung thực nhất?',
          options: [
            {
              id: 'a',
              text: 'Chính sách làm giảm 30% giao dịch và không ảnh hưởng giá, nên rất hiệu quả.',
              explain: 'Mắc cả hai lỗi: dùng số trước/sau và kết luận về giá từ một DiD không có sức mạnh thống kê, trong khi cửa sổ mới 6 tháng.',
            },
            {
              id: 'b',
              text: 'Giao dịch giảm khoảng 22 điểm % (khoảng 90%: 9–34) nhờ chính sách; mạnh nhất ở nhà thứ hai nhưng cũng giảm ở nhà đầu tiên; một phần chuyển sang quận giáp ranh; giá chưa kết luận được.',
              correct: true,
              explain: 'Đúng. Báo cáo nêu điểm ước lượng, khoảng tin cậy, đối tượng bị tác động, lan tỏa và điều chưa biết. Đó là mức trung thực mà người ra quyết định cần.',
            },
            {
              id: 'c',
              text: 'Không thể kết luận gì vì không có thí nghiệm ngẫu nhiên.',
              explain: 'Dữ liệu quan sát vẫn cho bằng chứng hữu ích nếu thiết kế cẩn thận. Từ chối kết luận cũng là một quyết định, và thường tệ hơn việc báo cáo kèm giới hạn.',
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
          md: '**Kết luận cho lãnh đạo (mô phỏng):** chính sách giả định làm giảm giao dịch khoảng **22 điểm % (≈ 264 giao dịch/tháng; khoảng 90%: −34 … −9)**, không phải 30%. Khoảng 65% mức giảm là mất thật trên toàn thị trường, phần còn lại chuyển sang quận giáp ranh. Tác động rơi mạnh vào nhà thứ hai (mục tiêu) nhưng 42% nằm ở người mua nhà đầu tiên. Giá chưa có dấu hiệu rõ. **Giữ chính sách nhưng chưa mở rộng**, theo dõi 6 tháng nữa với ngưỡng cụ thể. Đây là phân tích dữ liệu, không phải khuyến nghị mua bán hay đầu tư.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Đo lại DiD hằng quý bằng event study theo tháng, tách nhà thứ hai và nhà đầu tiên; loại quận giáp ranh khỏi đối chứng',
              owner: 'Nhóm nghiên cứu thị trường',
              metric: 'DiD giao dịch nhà đầu tiên',
              threshold: 'Nếu vẫn ≤ −10 điểm % sau 2 quý, đề xuất điều chỉnh thiết kế để tránh ảnh hưởng người mua lần đầu',
            },
            {
              action: 'Theo dõi lan tỏa: giao dịch và giá ở các quận giáp ranh so với phản thực tế',
              owner: 'Data/Analytics',
              metric: 'Giao dịch vượt phản thực tế ở quận giáp ranh',
              threshold: 'Nếu chuyển chỗ > 50% mức giảm ở quận áp dụng, cân nhắc mở rộng phạm vi thay vì giữ ranh giới',
            },
            {
              action: 'Theo dõi giá trung vị và tỷ lệ giá chốt/giá rao theo quận, dùng khoảng tin cậy thay vì một con số',
              owner: 'Data/Analytics',
              metric: 'DiD giá trung vị/m²',
              threshold: 'Chỉ coi giá phản ứng khi khoảng 90% không chứa 0 trong 2 quý liên tiếp',
            },
            {
              action: 'Ghi nhận lãi suất vay thị trường và cơ cấu người mua có vay theo nhóm quận để kiểm tra độ nhạy của kết quả',
              owner: 'Nhóm vĩ mô',
              metric: 'Chênh lệch tỷ lệ giao dịch có vay giữa hai nhóm',
              threshold: 'Nếu chênh > 10 điểm %, chạy lại DiD với đối chứng được ghép cặp theo cơ cấu',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Quyết định có thể đảo chiều (siết chặt, nới lỏng, mở rộng) nên **ngưỡng theo dõi** quan trọng hơn một câu "hiệu quả/không hiệu quả" nhất thời. Mỗi ngưỡng gắn với một hành động cụ thể và một chỉ số, nên lần sau số liệu mới về không cần họp lại từ đầu.',
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
              title: 'Gán toàn bộ mức giảm cho chính sách',
              why: 'Lãi suất và mùa vụ tác động đồng thời. Ở đây −30% bao gồm −8% nhiễu chung; chính sách chỉ chịu trách nhiệm khoảng −22 điểm %.',
              instead: 'Luôn ước lượng phản thực tế bằng nhóm đối chứng và nêu rõ giả định.',
            },
            {
              title: 'Đối chứng bị lan tỏa hoặc không cùng nhịp',
              why: 'Quận giáp ranh nhận người mua chuyển sang sẽ làm ước lượng lệch; quận có cơ cấu người mua khác nhạy lãi suất khác nhau cũng vậy.',
              instead: 'Loại quận giáp ranh, kiểm tra xu hướng trước chính sách nhiều tháng, chạy placebo và báo cáo khoảng tin cậy.',
            },
            {
              title: 'Chỉ nhìn mục tiêu, bỏ qua tác dụng phụ',
              why: 'Một chính sách nhắm nhà thứ hai vẫn có thể kéo giảm người mua lần đầu, và giao dịch giảm không đồng nghĩa với mục tiêu xã hội đạt được.',
              instead: 'Tách theo nhóm đối tượng, nêu cả tác động mong muốn lẫn ngoài ý muốn, và kèm ngưỡng hành động.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Mức giảm trước/sau gộp cả nhiễu chung (lãi suất, mùa vụ); DiD dùng quận đối chứng để tách phần chính sách, với giả định xu hướng song song cần kiểm tra bằng dữ liệu trước mốc và placebo.',
    'Quận giáp ranh có thể nhận giao dịch chuyển sang: loại khỏi đối chứng và đo riêng để biết đâu là mất thật, đâu là chuyển chỗ.',
    'Báo cáo điểm ước lượng cùng khoảng tin cậy, đối tượng bị tác động và điều chưa biết, rồi gắn với ngưỡng theo dõi để quyết định giữ, chỉnh hay dừng.',
  ],
  references: [
    {
      title: 'Causal Inference: The Mixtape — Difference-in-Differences',
      publisher: 'Scott Cunningham',
      url: 'https://mixtape.scunning.com/09-difference_in_differences',
      note: 'Giả định xu hướng song song, event study và các kiểm tra placebo cho DiD.',
    },
    {
      title: 'Impact Evaluation in Practice (Chapter 7: Difference-in-Differences)',
      publisher: 'World Bank',
      url: 'https://www.worldbank.org/en/programs/sief-trust-fund/publication/impact-evaluation-in-practice',
      note: 'Giáo trình đánh giá tác động chính sách của Ngân hàng Thế giới, có chương về DiD.',
    },
    {
      title: 'The Effect — Difference-in-Differences',
      publisher: 'Nick Huntington-Klein',
      url: 'https://theeffectbook.net/ch-DifferenceinDifference.html',
      note: 'Phản thực tế, kiểm tra xu hướng trước và placebo theo ngày giả.',
    },
  ],
}
