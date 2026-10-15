import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — "Công ty CK Alpha" hư cấu, sổ margin 4.000 tỷ đ dư nợ.
 * Ngưỡng giả định (không phải quy định): ký quỹ ban đầu 50% · duy trì 35% · giải chấp 30% · bán để đưa tỷ lệ về 40%.
 *   Tỷ lệ ký quỹ = (tài sản − dư nợ) / tài sản. Gọi d = dư nợ / tài sản.
 *   Giá giảm x làm chạm ngưỡng duy trì: x = 1 − d/0,65 · chạm giải chấp: x = 1 − d/0,70
 * Phân bố dư nợ theo d (tỷ đ): 0,40 → 400 · 0,45 → 500 · 0,50 → 800 · 0,55 → 900 · 0,60 → 800 · 0,63 → 600 (tổng 4.000)
 *   Vốn khách (tài sản − dư nợ) = Σ dư nợ × (1/d − 1) = 3.633 tỷ đ → tài sản 7.633 tỷ đ, tỷ lệ ký quỹ bình quân 47,6%
 *   Giá giảm để bị call / bị giải chấp (%): 38,5/42,9 · 30,8/35,7 · 23,1/28,6 · 15,4/21,4 · 7,7/14,3 · 3,1/10,0
 *   Dư nợ có thể bị giải chấp nếu giá giảm 10%: 600 (15%) · giảm 15%: 600 + 800 = 1.400 (35%)
 * Mô phỏng vòng xoáy (chạy bằng node, 4 phiên, mỗi phiên: giá giảm → tài khoản dưới 30% bán đủ để về 40% →
 *   chỉ khớp được 50% lượng cần bán trong phiên (thiếu bên mua) → giá phiên sau giảm = lượng bán / 4.500 tỷ đ):
 *   Giữ nguyên (35/30), cú sốc ngoại sinh −15%: giải chấp 292,9 · 227,0 · 270,5 · 475,6 = 1.266,0 tỷ đ (31,7% dư nợ)
 *     giá giảm 15,0 · 6,5 · 5,0 · 6,0% → chỉ số 85,0 · 79,5 · 75,5 · 71,0 (lũy kế −29,1%; mô phỏng cắt ở phiên 4, chưa hết vòng)
 *   Siết ngay (40/35 cho cả dư nợ cũ): chỉ số 85,0 · 79,5 · 72,8 · 65,2; giải chấp 1.686 tỷ đ (−15%), 2.715 (−20%), nợ xấu 130 (−25%)
 *   Siết theo lộ trình (giữ 35/30 cho dư nợ cũ, cảnh báo sớm ở 42%, khách có d ≥ 0,55 giảm 10% dư nợ = −230 → dư nợ 3.770):
 *     chỉ số 85,0 · 83,0; giải chấp 106 tỷ đ (−15%), 1.530 (−20%), 2.535 (−25%), nợ xấu 0 ở cả ba mức
 *   Giữ nguyên: giải chấp 2.328 (−20%), 3.196 (−25%); nợ xấu 122 tỷ đ (−25%)
 *   Giá giảm thêm do vòng xoáy tại −15% = lũy kế − 15: giữ 14,1 · siết ngay 19,8 · lộ trình 2,0 điểm %
 * Kinh tế: lãi margin 12%/năm − chi phí vốn 7% = 5% → lãi ròng giữ nguyên 4.000 × 5% = 200 tỷ đ/năm
 *   lộ trình: 3.770 × 5% = 188,5 (−11,5 = −5,75%) · siết ngay (giả định 10% dư nợ rút lui): 3.600 × 5% = 180 (−20 = −10%)
 *   Nợ xấu kỳ vọng nếu xác suất cú sốc −25% là 1%/năm: 1% × 122 = 1,2 tỷ đ. Hòa vốn của phí bảo hiểm 11,5 tỷ: 11,5 / 122 = 9,4%/năm
 *   Phần phải do uy tín/giữ khách bù: 11,5 − 1,2 = 10,3 tỷ đ/năm
 * Vùng tỷ lệ ký quỹ < 42% (d > 0,58): d = 0,60 và 0,63 → 800 + 600 = 1.400 tỷ đ = 35,0% dư nợ.
 *   Sau giảm 10% dư nợ ở d ≥ 0,55: 720 + 540 = 1.260 / 3.770 = 33,4%
 */
export const marginLiquiditySpiral: CaseStudy = {
  id: 'margin-liquidity-spiral',
  title: 'Siết hay nới margin khi thị trường rung lắc: giữ doanh thu lãi hay chặn vòng xoáy bán giải chấp?',
  domain: 'securities',
  level: 'senior',
  minutes: 16,
  skills: ['tradeoff', 'credit-risk', 'liquidity'],
  question:
    'Công ty chứng khoán nên giữ nguyên, siết đồng loạt hay siết theo lộ trình các ngưỡng margin khi thị trường rung lắc? Mỗi lựa chọn đánh đổi bao nhiêu lãi margin lấy bao nhiêu rủi ro giải chấp dây chuyền và nợ xấu, và ngưỡng nào kích hoạt hành động, ai chịu trách nhiệm?',
  summary:
    'Đọc sổ margin theo vùng đệm, mô phỏng vòng xoáy bán giải chấp có ma sát thanh khoản, so ba phương án giữ/siết ngay/siết có lộ trình bằng lãi ròng, lượng giải chấp và nợ xấu đuôi, rồi chốt ngưỡng, owner và nhịp giám sát.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống và số liệu hoàn toàn mô phỏng; "Công ty CK Alpha" là công ty giả định, các mức tỷ lệ là giả định để minh họa, không phải mức của công ty nào hay quy định.* Bạn là analyst của khối Quản trị rủi ro tại Alpha. Dư nợ margin đang ở mức cao, thị trường rung lắc mạnh vài tuần nay. Trưởng khối Môi giới muốn giữ nguyên để không mất doanh thu lãi vay: *"Margin là nguồn lãi ròng ổn định nhất của mình, khách đang cần đòn bẩy."* Giám đốc Rủi ro lo ngược lại: *"Một phiên giảm mạnh là hàng loạt tài khoản chạm ngưỡng, bán giải chấp dồn dập làm giá giảm thêm, rồi lại kích hoạt thêm tài khoản khác."* Cuộc họp ủy ban rủi ro ngày mai phải quyết định.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Dư nợ margin', value: '4.000 tỷ đ', tone: 'warning', note: 'tài sản ký quỹ 7.633 tỷ đ, vốn khách 3.633 tỷ đ' },
            { label: 'Tỷ lệ ký quỹ bình quân', value: '47,6%', note: '(tài sản − dư nợ) / tài sản' },
            { label: 'Lãi ròng margin', value: '200 tỷ đ/năm', tone: 'positive', note: 'lãi 12% − chi phí vốn 7% = 5% trên dư nợ' },
            { label: 'Ngưỡng hiện hành (giả định)', value: '50 / 35 / 30%', note: 'ban đầu / duy trì / giải chấp' },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Phần nào là quy định, phần nào là giả định',
          md: 'Theo Điều 9 Thông tư 120/2020/TT-BTC (bản dịch tiếng Anh của LuatVietnam, xem tài liệu tham khảo): giao dịch ký quỹ là mua chứng khoán bằng tiền vay của công ty chứng khoán; **nhà đầu tư phải duy trì tỷ lệ ký quỹ ban đầu và duy trì "theo hợp đồng đã ký" với công ty**; khi tỷ lệ xuống dưới mức duy trì, công ty gửi yêu cầu bổ sung ký quỹ, và nếu nhà đầu tư không bổ sung, công ty có thể bán tài sản bảo đảm theo hợp đồng; nhà đầu tư nước ngoài không được giao dịch ký quỹ; chỉ chứng khoán thuộc danh sách đủ điều kiện mới được dùng. Văn bản **không ghi sẵn con số %** cho các tỷ lệ này, nên 50/35/30% trong bài là giả định. Thông tư có thể đã được sửa đổi, hãy đối chiếu bản hợp nhất hiện hành và quy chế nội bộ trước khi áp dụng thật.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: lãi ròng trên sổ margin so với tổn thất đuôi, tính cả phản ứng của chính mình lên giá',
      blocks: [
        {
          kind: 'formula',
          expression: 'Giá giảm x làm chạm ngưỡng duy trì m: x = 1 − d / (1 − m), với d = dư nợ / tài sản. Chạm giải chấp s: x = 1 − d / (1 − s).',
          note: 'Ví dụ với m = 35%: tài khoản có tỷ lệ ký quỹ 40% (d = 0,60) bị call khi giá giảm 1 − 0,60/0,65 ≈ 7,7%. Tỷ lệ ký quỹ **không phải khoảng cách tới ngưỡng**: đòn bẩy khuếch đại, nên khoảng đệm theo giá nhỏ hơn rất nhiều so với chênh lệch giữa hai tỷ lệ.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Đọc sổ theo vùng đệm**: bao nhiêu dư nợ nằm cách ngưỡng giải chấp dưới 10%, 15%, 20% giá giảm; tỷ lệ bình quân che mất đuôi.',
            '**Mô phỏng phản hồi**: giải chấp là bán ra, bán ra làm giá giảm, giá giảm kích hoạt thêm. Phải có ma sát: chỉ bán được một phần mỗi phiên, giá đẩy theo lượng bán.',
            '**So phương án bằng lãi ròng, lượng giải chấp và nợ xấu đuôi**, không chỉ nợ xấu kỳ vọng (xác suất thấp nhưng thiệt hại tập trung).',
            '**Chốt ngưỡng kích hoạt, owner và nhịp giám sát** để quyết định tự điều chỉnh, kể cả lúc nới lại.',
          ],
        },
        {
          kind: 'quiz',
          id: 'margin-liquidity-spiral-q1',
          question:
            'Một tài khoản có tỷ lệ ký quỹ 40%, ngưỡng duy trì 35%. Giá tài sản trong tài khoản giảm khoảng bao nhiêu thì bị yêu cầu bổ sung ký quỹ?',
          options: [
            {
              id: 'a',
              text: 'Khoảng 5%, vì 40% − 35% = 5 điểm %.',
              explain: 'Nhầm tỷ lệ ký quỹ với mức giá. Tỷ lệ tính trên tài sản đã giảm giá trị, còn dư nợ đứng yên nên đòn bẩy khuếch đại tác động.',
            },
            {
              id: 'b',
              text: 'Khoảng 7,7%: d = 0,60 nên x = 1 − 0,60/0,65.',
              correct: true,
              explain: 'Đúng. Tài sản 100, dư nợ 60; giá giảm 7,7% còn 92,3, vốn còn 32,3 nên tỷ lệ = 32,3/92,3 = 35%. Khoảng đệm theo giá chỉ 7,7%, mỏng hơn nhiều so với con số 5 điểm % ngây thơ gợi ý.',
            },
            {
              id: 'c',
              text: 'Khoảng 12,5%, vì (40% − 35%) / 40%.',
              explain: 'Chia cho tỷ lệ ký quỹ mà quên rằng dư nợ cố định chứ không co theo giá. Kết quả sai và còn quá lạc quan, khiến ước lượng khoảng đệm cao hơn thực tế.',
            },
          ],
        },
      ],
    },
    {
      id: 'buffers',
      kind: 'analysis',
      title: 'Bước 1 — Sổ margin nằm cách ngưỡng bao xa: một phần ba dư nợ chịu nổi chưa tới 15% giảm giá',
      blocks: [
        {
          kind: 'table',
          title: 'Dư nợ theo vùng đệm (mô phỏng; ngưỡng duy trì 35%, giải chấp 30%)',
          columns: [
            { key: 'ratio', label: 'Tỷ lệ ký quỹ hiện tại' },
            { key: 'debt', label: 'Dư nợ (tỷ đ)', align: 'right' },
            { key: 'share', label: '% dư nợ', align: 'right' },
            { key: 'call', label: 'Giá giảm để bị call', align: 'right' },
            { key: 'sell', label: 'Giá giảm để bị giải chấp', align: 'right' },
          ],
          rows: [
            { ratio: '60%', debt: '400', share: '10,0%', call: '38,5%', sell: '42,9%' },
            { ratio: '55%', debt: '500', share: '12,5%', call: '30,8%', sell: '35,7%' },
            { ratio: '50%', debt: '800', share: '20,0%', call: '23,1%', sell: '28,6%' },
            { ratio: '45%', debt: '900', share: '22,5%', call: '15,4%', sell: '21,4%' },
            { ratio: '40%', debt: '800', share: '20,0%', call: '7,7%', sell: '14,3%' },
            { ratio: '37%', debt: '600', share: '15,0%', call: '3,1%', sell: '10,0%' },
          ],
          highlight: [
            { row: 3, tone: 'warning' },
            { row: 4, tone: 'negative' },
            { row: 5, tone: 'negative' },
          ],
          caption:
            'Nếu giá giảm 10%, 600 tỷ đ (15% dư nợ) chạm giải chấp. Giảm 15% thì thêm nhóm 40%: 1.400 tỷ đ, tức 35% sổ. Tỷ lệ bình quân 47,6% trông an toàn nhưng phân bố mới quyết định.',
        },
        {
          kind: 'chart',
          title: 'Mức giá giảm làm chạm ngưỡng, theo tỷ lệ ký quỹ hiện tại (%)',
          type: 'bar',
          xKey: 'ratio',
          unit: '%',
          series: [
            { key: 'call', label: 'Bị call (duy trì 35%)' },
            { key: 'sell', label: 'Bị giải chấp (30%)' },
          ],
          data: [
            { ratio: '60%', call: 38.5, sell: 42.9 },
            { ratio: '55%', call: 30.8, sell: 35.7 },
            { ratio: '50%', call: 23.1, sell: 28.6 },
            { ratio: '45%', call: 15.4, sell: 21.4 },
            { ratio: '40%', call: 7.7, sell: 14.3 },
            { ratio: '37%', call: 3.1, sell: 10.0 },
          ],
          caption: 'Khoảng cách từ call đến giải chấp chỉ 4 đến 7 điểm % giá. Tài khoản càng sát ngưỡng, hai mốc càng dồn vào cùng một phiên giảm.',
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Rủi ro là tương quan, không phải trung bình',
          md: 'Hàng nghìn tài khoản không vỡ độc lập. Chúng cùng nắm tài sản tương tự và cùng nhận một cú sốc giá, nên tổn thất kỳ vọng tính cho từng tài khoản rồi cộng lại sẽ bỏ sót thứ nguy hiểm nhất: việc bán của họ tự làm giá giảm thêm.',
        },
      ],
    },
    {
      id: 'spiral',
      kind: 'analysis',
      title: 'Bước 2 — Mô phỏng vòng xoáy: vì sao siết đồng loạt ngay giữa lúc rung lắc có thể làm tệ hơn',
      blocks: [
        {
          kind: 'table',
          title: 'Phương án giữ nguyên, cú sốc ban đầu −15% (mô phỏng 4 phiên)',
          columns: [
            { key: 'day', label: 'Phiên' },
            { key: 'drop', label: 'Giá giảm trong phiên', align: 'right' },
            { key: 'sold', label: 'Giải chấp trong phiên (tỷ đ)', align: 'right' },
            { key: 'cum', label: 'Lũy kế giải chấp (tỷ đ)', align: 'right' },
            { key: 'idx', label: 'Chỉ số giá cuối phiên', align: 'right' },
          ],
          rows: [
            { day: '1', drop: '15,0%', sold: '292,9', cum: '292,9', idx: '85,0' },
            { day: '2', drop: '6,5%', sold: '227,0', cum: '519,9', idx: '79,5' },
            { day: '3', drop: '5,0%', sold: '270,5', cum: '790,4', idx: '75,5' },
            { day: '4', drop: '6,0%', sold: '475,6', cum: '1.266,0', idx: '71,0' },
          ],
          highlight: [{ row: 3, tone: 'negative' }],
          caption:
            'Chỉ 15% là cú sốc bên ngoài; phần còn lại do chính việc bán. Mô phỏng cắt ở phiên 4 trong khi vẫn còn 475,6 tỷ đ đang bán, nên −29% là cận dưới, chưa phải điểm kết thúc. Giả định: mỗi phiên chỉ khớp được 50% lượng cần bán và mỗi 4.500 tỷ đ bán làm giá giảm thêm 100%·lượng/4.500 (giả định, cần hiệu chỉnh bằng dữ liệu độ sâu sổ lệnh).',
        },
        {
          kind: 'chart',
          title: 'Chỉ số giá sau cú sốc −15% theo từng phương án (đầu = 100)',
          type: 'line',
          xKey: 'day',
          series: [
            { key: 'keep', label: 'Giữ nguyên (35/30)' },
            { key: 'tight', label: 'Siết ngay (40/35 cho cả dư nợ cũ)' },
            { key: 'stage', label: 'Siết theo lộ trình' },
          ],
          data: [
            { day: 'Đầu', keep: 100, tight: 100, stage: 100 },
            { day: 'Phiên 1', keep: 85.0, tight: 85.0, stage: 85.0 },
            { day: 'Phiên 2', keep: 79.5, tight: 79.5, stage: 83.0 },
            { day: 'Phiên 3', keep: 75.5, tight: 72.8, stage: 83.0 },
            { day: 'Phiên 4', keep: 71.0, tight: 65.2, stage: 83.0 },
          ],
          caption:
            'Siết ngay chặt hơn cho cả dư nợ hiện hữu kéo vùng giải chấp lên sát giá hơn: nhiều tài khoản bị bán đúng vào phiên đầu, lượng bán lớn hơn và giá giảm sâu hơn giữ nguyên. Siết theo lộ trình đã giảm đòn bẩy của nhóm sát ngưỡng từ trước nên vòng xoáy dừng ở phiên 2.',
        },
        {
          kind: 'quiz',
          id: 'margin-liquidity-spiral-q2',
          question: 'Vì sao phương án "siết ngay cho cả dư nợ cũ" cho kết quả xấu hơn "giữ nguyên" khi cú sốc −15% đến?',
          options: [
            {
              id: 'a',
              text: 'Vì ngưỡng cao hơn thì khách mua ít chứng khoán hơn nên giá giảm.',
              explain: 'Mô phỏng chỉ xét dư nợ đã có, không có khách mới. Cơ chế nằm ở lượng bán bắt buộc của tài khoản hiện hữu.',
            },
            {
              id: 'b',
              text: 'Vì áp ngưỡng chặt hơn lên dư nợ hiện hữu khiến nhiều tài khoản bị bán sớm và nhiều hơn đúng lúc thị trường yếu; lượng bán lớn đẩy giá thêm, rồi kích hoạt tiếp.',
              correct: true,
              explain:
                'Đúng. Siết là hành động thuận chu kỳ nếu áp đột ngột lên danh mục cũ: giải chấp 1.686 tỷ đ so với 1.266 tỷ đ, giá giảm lũy kế 34,8% so với 29,1%. Siết đúng chỗ là giảm đòn bẩy sớm và có kiểm soát, không phải nâng ngưỡng bán cưỡng bức.',
            },
            {
              id: 'c',
              text: 'Vì ngưỡng chặt hơn luôn làm tăng nợ xấu.',
              explain: 'Không "luôn". Ngưỡng chặt hơn thường giảm nợ xấu nếu tài khoản được bán kịp và thị trường có thanh khoản. Kết quả ở đây đến từ ma sát bán (chỉ khớp một phần mỗi phiên) và phản hồi giá.',
            },
          ],
        },
      ],
    },
    {
      id: 'tradeoff',
      kind: 'analysis',
      title: 'Bước 3 — Trade-off: phí bảo hiểm 11,5 tỷ đ lãi mỗi năm đổi lấy gì?',
      blocks: [
        {
          kind: 'table',
          title: 'So ba phương án (mô phỏng; lãi ròng = 5% × dư nợ)',
          columns: [
            { key: 'plan', label: 'Phương án' },
            { key: 'debt', label: 'Dư nợ sau điều chỉnh (tỷ đ)', align: 'right' },
            { key: 'nii', label: 'Lãi ròng/năm (tỷ đ)', align: 'right' },
            { key: 's15', label: 'Giải chấp khi −15% (tỷ đ)', align: 'right' },
            { key: 'extra', label: 'Giá giảm thêm do vòng xoáy (−15%)', align: 'right' },
            { key: 'bad25', label: 'Nợ xấu khi −25% (tỷ đ)', align: 'right' },
          ],
          rows: [
            { plan: 'Giữ nguyên (35/30)', debt: '4.000', nii: '200,0', s15: '1.266', extra: '+14,1 điểm %', bad25: '122' },
            { plan: 'Siết ngay (40/35, cả dư nợ cũ)', debt: '3.600 *', nii: '180,0', s15: '1.686', extra: '+19,8 điểm %', bad25: '130' },
            { plan: 'Siết theo lộ trình', debt: '3.770', nii: '188,5', s15: '106', extra: '+2,0 điểm %', bad25: '0' },
          ],
          highlight: [
            { row: 1, tone: 'negative' },
            { row: 2, tone: 'positive' },
          ],
          caption:
            '* Giả định 10% dư nợ rút lui khi bị siết đột ngột; mô phỏng giải chấp vẫn dùng sổ ban đầu cho cả ba phương án để so sánh công bằng. Lộ trình mất 11,5 tỷ đ lãi ròng (5,75%) so với giữ nguyên, siết ngay mất 20 tỷ đ (10%) mà còn kém hơn về rủi ro. Ở −25%, lộ trình vẫn bán 2.535 tỷ đ và chỉ số giá −50,8%: rủi ro đuôi được giảm, chưa biến mất.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Đừng bào chữa phí bảo hiểm bằng nợ xấu kỳ vọng',
          md: 'Nếu cú sốc −25% có xác suất 1%/năm, nợ xấu kỳ vọng tránh được chỉ khoảng 1% × 122 = **1,2 tỷ đ**, nhỏ hơn nhiều so với 11,5 tỷ đ lãi bỏ ra. Phí chỉ hòa vốn nếu xác suất cú sốc lên khoảng 9,4%/năm, hoặc nếu **uy tín và giữ khách** đáng giá hơn khoảng **10,3 tỷ đ/năm** (khách giữ lại 2.377 thay vì 1.503 tỷ đ vốn ở cú sốc −15%, ít khiếu nại và rời bỏ hơn). Quyết định này là một khoản bảo hiểm, nên hãy nói thẳng nó là bảo hiểm và đặt hạn mức phí (ví dụ không quá 6 đến 8% lãi ròng), thay vì giả vờ rằng bảng EL tự chứng minh.',
        },
        {
          kind: 'quiz',
          id: 'margin-liquidity-spiral-q3',
          question: 'Đề xuất nào nên mang vào cuộc họp ủy ban rủi ro?',
          options: [
            {
              id: 'a',
              text: 'Giữ nguyên vì nợ xấu kỳ vọng chỉ 1,2 tỷ đ, nhỏ so với 200 tỷ đ lãi ròng.',
              explain: 'Nợ xấu kỳ vọng bỏ qua tương quan và đuôi: 31,7% sổ bị bán trong kịch bản −15%, 122 tỷ đ nợ xấu ở −25%, cùng thiệt hại uy tín không nằm trong con số 1,2 tỷ đ.',
            },
            {
              id: 'b',
              text: 'Siết theo lộ trình: giữ ngưỡng cũ cho dư nợ cũ, cảnh báo sớm ở tỷ lệ 42%, khuyến khích giảm dư nợ nhóm sát ngưỡng, nâng tỷ lệ ban đầu và giới hạn mã kém thanh khoản cho dư nợ mới; gắn ngưỡng kích hoạt nới lại.',
              correct: true,
              explain:
                'Đúng. Phí khoảng 5,75% lãi ròng đổi lấy giải chấp −15% từ 1.266 xuống 106 tỷ đ và vòng xoáy gần như dừng; tránh được hiệu ứng thuận chu kỳ của siết đột ngột. Cần nêu rõ nó là bảo hiểm, có ngưỡng nới lại khi thị trường ổn.',
            },
            {
              id: 'c',
              text: 'Nâng ngay ngưỡng duy trì lên 40% và giải chấp lên 35% cho mọi tài khoản để chắc chắn an toàn.',
              explain: 'Đây chính là phương án "siết ngay": giải chấp 1.686 tỷ đ ở −15%, mất 20 tỷ đ lãi ròng và nợ xấu ở −25% (130 tỷ đ) không thấp hơn giữ nguyên.',
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
          md: '**Đề xuất cho ủy ban rủi ro:** không nâng ngưỡng cưỡng bức đồng loạt. Chọn **siết theo lộ trình**: đầu tiên giảm đòn bẩy của nhóm sát ngưỡng một cách có kiểm soát (cảnh báo sớm ở tỷ lệ 42%, liên hệ từng khách), tiếp theo siết điều kiện **chỉ cho dư nợ mới** (tỷ lệ ban đầu cao hơn, giới hạn theo thanh khoản của mã), và chạy stress test đều đặn. Chấp nhận khoảng 11,5 tỷ đ lãi ròng giảm như một khoản bảo hiểm, đổi lấy lượng giải chấp ở −15% từ 31,7% xuống khoảng 3% dư nợ. Tuân thủ hợp đồng margin và quy định hiện hành về thông báo, đồng thời báo trước cho cơ quan quản lý khi vượt giới hạn nội bộ.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Cảnh báo sớm ở tỷ lệ ký quỹ 42% (trước ngưỡng duy trì 35%) và liên hệ khách vùng sát ngưỡng để giảm dư nợ hoặc nạp thêm tài sản',
              owner: 'Trưởng phòng Quản trị rủi ro + Trưởng khối Môi giới',
              metric: '% dư nợ có tỷ lệ ký quỹ dưới 42% (hiện 35,0%)',
              threshold: 'Về ≤ 33% sau 2 tuần và ≤ 30% sau 4 tuần; trên 40% thì dừng giải ngân mới cho nhóm này',
            },
            {
              action: 'Dư nợ mới: nâng tỷ lệ ký quỹ ban đầu từ 50% lên 55% và giảm tỷ lệ cho vay với mã kém thanh khoản; không áp lên danh mục cũ',
              owner: 'Ủy ban Rủi ro (Giám đốc Rủi ro) + Giám đốc Khối Dịch vụ tài chính',
              metric: 'Tỷ lệ ký quỹ ban đầu bình quân của dư nợ giải ngân mới; số ngày thanh lý của từng mã',
              threshold: 'Mã cần hơn 3 ngày thanh lý (giả sử tham gia 20% giá trị giao dịch bình quân 20 phiên) bị loại khỏi danh mục cho vay mới',
            },
            {
              action: 'Stress test hằng tuần: cú sốc −10/−15/−20/−25%, chỉ khớp 50% lượng bán mỗi phiên, tính giải chấp, giá giảm thêm và nợ xấu; hiệu chỉnh hệ số tác động giá bằng độ sâu sổ lệnh thực tế',
              owner: 'Risk Analytics',
              metric: '% dư nợ bị giải chấp ở −15%; nợ xấu ở −25%',
              threshold: 'Giải chấp ≤ 10% dư nợ ở −15% (hiện mô phỏng giữ nguyên 31,7%, lộ trình khoảng 3%); nợ xấu ở −25% ≤ 50 tỷ đ',
            },
            {
              action: 'Giám sát trong phiên khi thị trường giảm: dashboard dư nợ gần ngưỡng, lệnh bán giải chấp chờ khớp và khả năng thanh khoản; họp khẩn khi vượt ngưỡng',
              owner: 'Giám đốc Rủi ro (chủ trì) + Trưởng khối Nguồn vốn',
              metric: 'Chỉ số thị trường giảm trong phiên; lượng giải chấp chờ khớp / giá trị giao dịch bình quân',
              threshold: 'Họp khẩn khi thị trường giảm quá 3% trong phiên hoặc lượng giải chấp chờ khớp vượt 10% giá trị giao dịch bình quân',
            },
            {
              action: 'Quy định nới lại: điều kiện đưa ngưỡng về mức cũ và xem lại phí bảo hiểm mỗi quý',
              owner: 'Ủy ban Rủi ro + Finance',
              metric: 'Phí bảo hiểm/lãi ròng; % dư nợ dưới 42%; biến động thị trường',
              threshold: 'Nới lại khi % dư nợ dưới 42% ≤ 20% và biến động thị trường về mức bình thường ít nhất 4 tuần; phí không quá 8% lãi ròng',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Rủi ro margin có tính **nội sinh**: chính hành động của công ty và các công ty khác làm xấu thêm tình hình. Vì vậy xử lý tốt nhất tác động vào **đòn bẩy trước khi cú sốc đến**, theo từng bước, thay vì dựa vào bán cưỡng bức khi đã muộn. Quyết định cũng cần khả năng đảo ngược: ngưỡng kích hoạt cả siết lẫn nới, owner rõ và nhịp review đều.',
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
              title: 'Dùng nợ xấu kỳ vọng và tỷ lệ ký quỹ bình quân để kết luận "an toàn"',
              why: 'Bình quân 47,6% che việc 35% dư nợ chỉ chịu nổi chưa tới 15% giá giảm; cộng tổn thất từng tài khoản bỏ qua việc cả sổ cùng bán.',
              instead: 'Đọc phân bố theo vùng đệm và mô phỏng phản hồi giá; so phương án bằng cả lãi ròng, lượng giải chấp và nợ xấu đuôi.',
            },
            {
              title: 'Siết đột ngột lên danh mục cũ giữa lúc thị trường đang giảm',
              why: 'Biến một ngưỡng thận trọng thành bán cưỡng bức hàng loạt, tự kích hoạt vòng xoáy mà mình muốn tránh, lại mất doanh thu và khách.',
              instead: 'Giảm đòn bẩy nhóm sát ngưỡng có kiểm soát, siết cho dư nợ mới, đặt ngưỡng và lộ trình cho từng bước.',
            },
            {
              title: 'Giả định bán được toàn bộ ngay ở giá hiện tại',
              why: 'Khi thị trường giảm sâu, lệnh bán giải chấp dồn dập có thể không khớp hết; phần chưa khớp tiếp tục thua lỗ và có thể thành nợ xấu.',
              instead: 'Mô hình hóa ma sát thanh khoản (chỉ khớp một phần mỗi phiên, tác động giá theo lượng bán), đo số ngày thanh lý theo mã và hiệu chỉnh bằng dữ liệu độ sâu sổ lệnh.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Tỷ lệ ký quỹ không phải khoảng đệm theo giá: tài khoản 40% với ngưỡng 35% chỉ chịu được giảm khoảng 7,7%. Hãy đọc sổ theo vùng đệm, không theo trung bình.',
    'Bán giải chấp là phản hồi nội sinh: lượng bán đẩy giá thêm, và siết đột ngột trên danh mục cũ lúc rung lắc có thể khiến vòng xoáy tệ hơn giữ nguyên. Giảm đòn bẩy sớm, có kiểm soát.',
    'Đây là một khoản bảo hiểm: nêu thẳng phí (khoảng 5,75% lãi ròng) và lợi ích đuôi/uy tín, gắn ngưỡng kích hoạt cả siết lẫn nới, owner và nhịp giám sát rõ.',
  ],
  references: [
    {
      title: 'Circular No. 120/2020/TT-BTC on transaction of listed shares, registration of transactions and fund certificates, corporate bonds, covered warrants',
      publisher: 'LuatVietnam (bản dịch tiếng Anh, không chính thức)',
      url: 'https://english.luatvietnam.vn/circular-no-120-2020-tt-btc-dated-december-31-2020-of-the-ministry-of-finance-on-transaction-of-listed-shares-registration-of-transactions-and-fund-196778-doc1.html',
      note: 'Điều 9 về giao dịch ký quỹ: tỷ lệ ký quỹ ban đầu và duy trì theo hợp đồng, yêu cầu bổ sung ký quỹ, bán tài sản bảo đảm, hạn chế nhà đầu tư nước ngoài. Là bản dịch nên cần đối chiếu văn bản gốc và bản sửa đổi.',
    },
    {
      title: 'Margin call',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Margin_call',
      note: 'Giải thích cơ chế margin call, bán tài sản bảo đảm và hiệu ứng dây chuyền "bán, rồi lại kích hoạt thêm margin call" trong các đợt giảm mạnh.',
    },
  ],
}
