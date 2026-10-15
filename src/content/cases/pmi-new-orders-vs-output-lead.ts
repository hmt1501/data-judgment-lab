import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — chỉ số PMI sản xuất giả định của nền kinh tế X, 18 tháng M1–M18 (diffusion index, 50 = không đổi so với tháng trước). Đã tính bằng node:
 *   Đơn hàng mới (NO):  51.2 52.0 53.1 52.4 51.0 50.3 48.2 46.8 47.5 49.0 50.6 52.2 53.4 53.0 52.1 51.5 51.9 52.8
 *   Sản lượng (OUT):    51.0 51.8 52.3 52.9 51.8 50.6 50.0 47.6 46.9 47.9 49.2 50.4 52.0 53.1 53.3 51.7 51.4 52.2
 *   Tương quan NO[t] với OUT[t+k] — mức: k=0 0,88 (n=18) · k=1 0,98 (n=17) · k=2 0,77 (n=16) · k=3 0,39 · k=4 −0,06
 *     thay đổi tháng-qua-tháng: k=0 0,70 (n=17) · k=1 0,94 (n=16) · k=2 0,49 · k=3 0,05 · k=4 −0,22
 *   Điểm ngoặt: đỉnh NO M3 (53,1) → OUT M4 (52,9) lead 1 · đáy NO M8 (46,8) → OUT M9 (46,9) lead 1 · đỉnh NO M13 (53,4) → OUT M15 (53,3) lead 2
 *   Tháng dưới 50: NO M7–M10 · OUT M8–M11 (đúng 1 tháng trễ)
 *   Dự báo đơn giản OUT[t] ≈ NO[t−1] (17 tháng M2–M18): sai số tuyệt đối trung bình 0,32 · phương án "giữ nguyên tháng trước" OUT[t] ≈ OUT[t−1]: 1,00
 *   Hướng thay đổi: dấu (NO[t−1]−NO[t−2]) trùng dấu (OUT[t]−OUT[t−1]) ở 15 trên 16 tháng (M3–M18); sai ở M15 (NO M14 giảm 53,4 → 53,0 nhưng OUT M15 tăng 53,1 → 53,3)
 */
export const pmiNewOrdersVsOutputLead: CaseStudy = {
  id: 'pmi-new-orders-vs-output-lead',
  title: 'Đơn hàng mới có báo trước sản lượng PMI không?',
  domain: 'macro',
  level: 'junior',
  minutes: 11,
  skills: ['macro', 'causal', 'metric-definition'],
  question:
    'Trong PMI, chỉ số đơn hàng mới có dẫn dắt chỉ số sản lượng không, độ trễ bao nhiêu tháng, và đủ tin cậy để dùng làm tín hiệu sớm đến đâu?',
  summary:
    'Kiểm tra độ trễ giữa hai chuỗi bằng tương quan có trễ và điểm ngoặt, thử một dự báo đơn giản, và nêu các giới hạn của kết luận (mẫu nhỏ, khảo sát, nguyên nhân chung).',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng: nền kinh tế "X" và mọi con số đều là giả định để minh họa.* PMI sản xuất là khảo sát hằng tháng: doanh nghiệp cho biết đơn hàng mới, sản lượng, việc làm… tăng, giảm hay không đổi so với tháng trước; kết quả được tổng hợp thành **diffusion index** (50 là mốc không đổi, trên 50 là mở rộng). Nhóm vĩ mô muốn dùng **đơn hàng mới** như tín hiệu sớm cho **sản lượng**, để cảnh báo trước 1–2 tháng cho nhóm dự báo. Họ có 18 tháng dữ liệu giả định.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Đơn hàng mới, M18', value: '52,8', tone: 'positive', note: 'M13: 53,4' },
            { label: 'Sản lượng, M18', value: '52,2', tone: 'positive', note: 'M15: 53,3' },
            { label: 'Thời kỳ dưới 50', value: '4 tháng', tone: 'warning', note: 'Đơn hàng M7–M10; sản lượng M8–M11' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi cần trả lời',
          md: 'Có thật sự **đơn hàng đi trước sản lượng**, hay hai chuỗi chỉ cùng chịu một cú sốc chung? Và nếu có độ trễ, **bao nhiêu tháng** và độ chính xác ra sao?',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: giả thuyết dẫn dắt và cách kiểm tra',
      blocks: [
        {
          kind: 'formula',
          expression: 'Tương quan có trễ k: corr(NO[t], OUT[t+k]); độ trễ tốt nhất là k có tương quan cao nhất',
          note: 'Nên tính trên cả **mức** và **thay đổi tháng-qua-tháng** (vì hai chuỗi có thể cùng xu hướng), kiểm tra điểm ngoặt (đỉnh, đáy) và thử một dự báo đơn giản so với phương án tham chiếu. Một dẫn dắt có cơ sở kinh tế (đơn hàng đi trước sản xuất) đáng tin hơn một tương quan ngẫu nhiên.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Vẽ hai chuỗi** cạnh nhau để thấy độ trễ bằng mắt.',
            '**Tương quan có trễ** (k = 0..4) trên mức và thay đổi.',
            '**Điểm ngoặt**: đỉnh/đáy của chuỗi dẫn có đi trước chuỗi theo sau ổn định không?',
            '**Thử dự báo** và so với phương án tham chiếu; **nêu giới hạn** (mẫu nhỏ, nguyên nhân chung).',
          ],
        },
        {
          kind: 'quiz',
          id: 'pmi-new-orders-vs-output-lead-q1',
          question: 'Vì sao cần xem cả tương quan của mức lẫn của thay đổi tháng-qua-tháng?',
          options: [
            {
              id: 'a',
              text: 'Vì mức luôn sai còn thay đổi luôn đúng.',
              explain: 'Không có chuyện luôn sai/đúng; mỗi cách có ưu điểm riêng.',
            },
            {
              id: 'b',
              text: 'Vì hai chuỗi cùng xu hướng hoặc cùng chu kỳ dài có thể làm tương quan mức cao ngay cả khi không dẫn dắt; thay đổi loại bớt xu hướng chung.',
              correct: true,
              explain: 'Đúng. Nếu tương quan của thay đổi cũng cao ở cùng độ trễ thì tín hiệu dẫn dắt vững hơn.',
            },
            {
              id: 'c',
              text: 'Vì tương quan của thay đổi cho biết hướng nhân quả.',
              explain: 'Không: tương quan, kể cả có trễ, không chứng minh nhân quả. Cơ sở kinh tế và kiểm tra khác mới củng cố.',
            },
          ],
        },
      ],
    },
    {
      id: 'lead',
      kind: 'analysis',
      title: 'Bước 1 — Nhìn độ trễ: biểu đồ, điểm ngoặt, tương quan có trễ',
      blocks: [
        {
          kind: 'chart',
          title: 'PMI đơn hàng mới và sản lượng (diffusion index)',
          type: 'line',
          xKey: 'm',
          series: [
            { key: 'no', label: 'Đơn hàng mới' },
            { key: 'out', label: 'Sản lượng' },
          ],
          data: [
            { m: 'M1', no: 51.2, out: 51.0 },
            { m: 'M2', no: 52.0, out: 51.8 },
            { m: 'M3', no: 53.1, out: 52.3 },
            { m: 'M4', no: 52.4, out: 52.9 },
            { m: 'M5', no: 51.0, out: 51.8 },
            { m: 'M6', no: 50.3, out: 50.6 },
            { m: 'M7', no: 48.2, out: 50.0 },
            { m: 'M8', no: 46.8, out: 47.6 },
            { m: 'M9', no: 47.5, out: 46.9 },
            { m: 'M10', no: 49.0, out: 47.9 },
            { m: 'M11', no: 50.6, out: 49.2 },
            { m: 'M12', no: 52.2, out: 50.4 },
            { m: 'M13', no: 53.4, out: 52.0 },
            { m: 'M14', no: 53.0, out: 53.1 },
            { m: 'M15', no: 52.1, out: 53.3 },
            { m: 'M16', no: 51.5, out: 51.7 },
            { m: 'M17', no: 51.9, out: 51.4 },
            { m: 'M18', no: 52.8, out: 52.2 },
          ],
          marker: { x: 'M8', label: 'Đáy đơn hàng mới' },
          caption: 'Sản lượng bám đơn hàng mới với độ trễ 1–2 tháng: đáy của đơn hàng ở M8, đáy sản lượng ở M9.',
        },
        {
          kind: 'table',
          title: 'Tương quan có trễ: corr(đơn hàng[t], sản lượng[t+k])',
          columns: [
            { key: 'k', label: 'Độ trễ k (tháng)' },
            { key: 'lvl', label: 'Mức', align: 'right' },
            { key: 'chg', label: 'Thay đổi tháng-qua-tháng', align: 'right' },
            { key: 'n', label: 'Số cặp (mức / thay đổi)', align: 'right' },
          ],
          rows: [
            { k: 0, lvl: '0,88', chg: '0,70', n: '18 / 17' },
            { k: 1, lvl: '0,98', chg: '0,94', n: '17 / 16' },
            { k: 2, lvl: '0,77', chg: '0,49', n: '16 / 15' },
            { k: 3, lvl: '0,39', chg: '0,05', n: '15 / 14' },
            { k: 4, lvl: '−0,06', chg: '−0,22', n: '14 / 13' },
          ],
          highlight: [{ row: 1, tone: 'positive' }],
          caption: 'Đỉnh ở k = 1 cho cả mức và thay đổi; rồi giảm nhanh. Số cặp giảm dần khi k tăng nên các tương quan ở k lớn kém tin cậy hơn.',
        },
        {
          kind: 'table',
          title: 'Điểm ngoặt: đơn hàng đi trước sản lượng bao lâu?',
          columns: [
            { key: 'tp', label: 'Điểm ngoặt' },
            { key: 'no', label: 'Đơn hàng mới', align: 'right' },
            { key: 'out', label: 'Sản lượng', align: 'right' },
            { key: 'lead', label: 'Độ trễ', align: 'right' },
          ],
          rows: [
            { tp: 'Đỉnh thứ nhất', no: 'M3 (53,1)', out: 'M4 (52,9)', lead: '1 tháng' },
            { tp: 'Đáy', no: 'M8 (46,8)', out: 'M9 (46,9)', lead: '1 tháng' },
            { tp: 'Đỉnh thứ hai', no: 'M13 (53,4)', out: 'M15 (53,3)', lead: '2 tháng' },
          ],
          caption: 'Độ trễ 1–2 tháng ở cả ba điểm ngoặt: nhất quán nhưng không cố định. Chỉ có ba điểm ngoặt, nên chưa đủ để nói về độ chính xác.',
        },
        {
          kind: 'quiz',
          id: 'pmi-new-orders-vs-output-lead-q2',
          question: 'Từ ba kết quả trên, kết luận nào phù hợp nhất?',
          options: [
            {
              id: 'a',
              text: 'Đơn hàng mới chắc chắn gây ra sản lượng sau đúng 1 tháng.',
              explain: 'Quá mạnh: tương quan có trễ và điểm ngoặt không chứng minh nhân quả hay độ trễ cố định (đỉnh thứ hai trễ 2 tháng).',
            },
            {
              id: 'b',
              text: 'Dữ liệu ủng hộ đơn hàng mới dẫn sản lượng khoảng 1–2 tháng, phù hợp với logic đơn hàng trước sản xuất, nhưng mẫu nhỏ nên cần kiểm tra thêm.',
              correct: true,
              explain: 'Đúng. Nêu độ trễ như một khoảng, kèm cơ sở kinh tế và giới hạn mẫu.',
            },
            {
              id: 'c',
              text: 'Chuỗi không dẫn dắt vì tương quan ở k = 0 đã là 0,88.',
              explain: 'Tương quan đồng thời cao là bình thường khi hai chuỗi cùng chu kỳ; điều quyết định là tương quan cao nhất ở k = 1.',
            },
          ],
        },
      ],
    },
    {
      id: 'forecast',
      kind: 'analysis',
      title: 'Bước 2 — Dùng được đến đâu? Dự báo đơn giản và giới hạn',
      blocks: [
        {
          kind: 'table',
          title: 'Dự báo sản lượng tháng t (17 tháng M2–M18)',
          columns: [
            { key: 'm', label: 'Phương án' },
            { key: 'rule', label: 'Quy tắc', align: 'right' },
            { key: 'err', label: 'Sai số tuyệt đối TB (điểm chỉ số)', align: 'right' },
          ],
          rows: [
            { m: 'Giữ nguyên tháng trước', rule: 'OUT[t] ≈ OUT[t−1]', err: '1,00' },
            { m: 'Theo đơn hàng tháng trước', rule: 'OUT[t] ≈ NO[t−1]', err: '0,32' },
          ],
          highlight: [{ row: 1, tone: 'positive' }],
          caption: 'Dùng đơn hàng tháng trước giảm sai số khoảng 68%. Dự báo trong mẫu (in-sample), chưa kiểm tra ngoài mẫu.',
        },
        {
          kind: 'text',
          md: 'Về hướng thay đổi: dấu thay đổi của đơn hàng ở tháng t−1 trùng dấu thay đổi sản lượng ở tháng t trong **15 trên 16 tháng**. Lần sai là M15: đơn hàng M14 giảm (53,4 → 53,0) nhưng sản lượng M15 vẫn tăng nhẹ (53,1 → 53,3), đúng với độ trễ 2 tháng ở đỉnh thứ hai. Đây là lý do nên coi tín hiệu như một **xác suất**, không phải quy tắc chắc chắn.',
        },
        {
          kind: 'table',
          title: 'Giả thuyết thay thế và cách kiểm tra',
          columns: [
            { key: 'h', label: 'Giải thích khác' },
            { key: 'predict', label: 'Nếu đúng, ta sẽ thấy' },
            { key: 'test', label: 'Kiểm tra' },
          ],
          rows: [
            {
              h: 'Cả hai chuỗi chỉ cùng chịu cú sốc chung (nhu cầu xuất khẩu, mùa vụ)',
              predict: 'Độ trễ thay đổi theo từng cú sốc, tương quan thay đổi thấp ở k = 1',
              test: 'Tương quan thay đổi k = 1 cao (0,94), cú sốc nào cũng cho 1–2 tháng: giả thuyết yếu',
            },
            {
              h: 'Chỉ đúng trong mẫu 18 tháng (trùng hợp)',
              predict: 'Độ trễ biến mất khi thêm dữ liệu ngoài mẫu',
              test: 'Chạy lại với 5–10 năm dữ liệu và với các nước khác; cần làm trước khi dùng thật',
            },
            {
              h: 'Khảo sát không phản ánh sản lượng thực',
              predict: 'Sản lượng công nghiệp thực (số liệu cứng) không theo PMI',
              test: 'Đối chiếu với chỉ số sản xuất công nghiệp thực',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'pmi-new-orders-vs-output-lead-q3',
          question: 'Cách nào hợp lý nhất để đưa tín hiệu này vào bản tin dự báo?',
          options: [
            {
              id: 'a',
              text: 'Công bố quy tắc "đơn hàng giảm thì sản lượng tháng sau giảm".',
              explain: 'Quy tắc đúng 15/16 tháng trong mẫu nhưng chưa kiểm tra ngoài mẫu; một ngoại lệ đã xuất hiện ở M15.',
            },
            {
              id: 'b',
              text: 'Dùng như tín hiệu cảnh báo kèm khoảng độ trễ 1–2 tháng, đối chiếu với số liệu sản xuất thực và đánh giá lại khi có thêm dữ liệu.',
              correct: true,
              explain: 'Đúng. Giữ tín hiệu ở vai trò cảnh báo, nêu độ bất định và lộ trình xác nhận.',
            },
            {
              id: 'c',
              text: 'Bỏ tín hiệu vì mẫu chỉ 18 tháng.',
              explain: 'Mẫu nhỏ là lý do thận trọng, không phải bỏ; kết quả có cơ sở kinh tế đáng thử trên dữ liệu dài hơn.',
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
          md: '**Kết luận:** Trong 18 tháng dữ liệu, đơn hàng mới đi trước sản lượng **1–2 tháng** (tương quan 0,98 của mức và 0,94 của thay đổi ở k = 1; ba điểm ngoặt nhất quán). Dùng đơn hàng tháng trước giảm sai số dự báo từ 1,00 xuống 0,32 điểm (trong mẫu). Tín hiệu hữu ích nhưng chưa đủ để thành quy tắc cứng: cần kiểm tra ngoài mẫu và đối chiếu số liệu thực.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Chạy lại phân tích độ trễ trên chuỗi 5–10 năm (và so sánh vài nền kinh tế) cho cả mức lẫn thay đổi',
              owner: 'Nhóm phân tích vĩ mô',
              metric: 'Độ trễ có tương quan cao nhất; ổn định theo giai đoạn',
              threshold: 'Tương quan thay đổi ở k = 1 hoặc 2 ≥ 0,6 trong ≥ 2/3 các giai đoạn con',
            },
            {
              action: 'Đưa cảnh báo "đơn hàng mới < 50 hai tháng liên tiếp" vào bản tin kèm xác suất sản lượng giảm',
              owner: 'Nhóm dự báo',
              metric: 'Tỷ lệ cảnh báo đúng (sản lượng giảm sau 1–2 tháng)',
              threshold: 'Giữ cảnh báo nếu đúng ≥ 70% trong theo dõi 12 tháng',
            },
            {
              action: 'Đối chiếu với chỉ số sản xuất công nghiệp thực và bổ sung thành phần giao hàng nhà cung cấp',
              owner: 'Nhóm phân tích vĩ mô + thống kê',
              metric: 'Chênh lệch hướng giữa sản lượng PMI và sản xuất công nghiệp thực',
              threshold: 'Cùng hướng ≥ 75% số tháng',
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
              title: 'Chọn độ trễ tốt nhất rồi coi là quy luật',
              why: 'Thử nhiều độ trễ trên mẫu ngắn dễ cho một kết quả đẹp do ngẫu nhiên; chỉ có ba điểm ngoặt trong mẫu.',
              instead: 'Có cơ sở kinh tế trước, kiểm tra ngoài mẫu, báo cáo độ trễ như một khoảng.',
            },
            {
              title: 'Đọc diffusion index như tốc độ tăng trưởng',
              why: 'PMI chỉ cho biết phần doanh nghiệp báo tăng so với giảm, không đo quy mô thay đổi.',
              instead: 'Dùng PMI để xác định chiều hướng, đối chiếu số liệu thực để biết quy mô.',
            },
            {
              title: 'Nhầm tương quan có trễ với nhân quả',
              why: 'Một cú sốc chung (nhu cầu xuất khẩu, chính sách) có thể làm hai chuỗi đổi cách nhau một khoảng.',
              instead: 'Xem có cơ chế kinh tế hợp lý và các cú sốc khác nhau có cho cùng độ trễ không.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Kiểm tra dẫn dắt bằng tương quan có trễ trên mức và thay đổi, cùng với điểm ngoặt; độ trễ nên báo cáo như một khoảng.',
    'Mẫu nhỏ và tương quan không chứng minh nhân quả; cần cơ sở kinh tế, kiểm tra ngoài mẫu và đối chiếu số liệu thực.',
    'Tín hiệu dẫn dắt hữu ích khi dùng như cảnh báo có xác suất, so với một phương án tham chiếu đơn giản.',
  ],
  references: [
    {
      title: 'Purchasing Managers’ Index',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Purchasing_Managers%27_Index',
      note: 'Mô tả PMI: khảo sát doanh nghiệp, các thành phần như đơn hàng mới và sản lượng, cách đọc mốc 50.',
    },
    {
      title: 'S&P Global PMI',
      publisher: 'S&P Global',
      url: 'https://www.pmi.spglobal.com/',
      note: 'Trang chủ của S&P Global PMI, nhà công bố PMI nhiều quốc gia; trang có nhắc đến chỉ số đơn hàng mới.',
    },
    {
      title: 'Cross-correlation',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Cross-correlation',
      note: 'Khái niệm tương quan chéo có độ trễ, nền tảng của phép kiểm tra độ trễ giữa hai chuỗi.',
    },
  ],
}
