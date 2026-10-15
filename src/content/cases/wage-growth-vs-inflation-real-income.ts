import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — Nền kinh tế giả định, năm 2023 → 2024. Lương bình quân tháng (triệu đồng), CPI theo rổ của từng nhóm.
 *   Nhóm lao động (tỷ trọng số người 40% / 40% / 20%): thấp 6,0 → 6,3 (+5,0%) · trung bình 11,0 → 11,825 (+7,5%) · cao 25,0 → 27,75 (+11,0%)
 *   Bình quân chung: 2023 = 0,4×6 + 0,4×11 + 0,2×25 = 11,8 · 2024 = 0,4×6,3 + 0,4×11,825 + 0,2×27,75 = 2,52 + 4,73 + 5,55 = 12,8 → +8,47% (làm tròn 8,5%)
 *   Lạm phát giá theo nhóm hàng: thực phẩm +7%, nhà ở & điện nước +3%, hàng hóa dịch vụ khác +2%
 *   Rổ chi tiêu (thực phẩm / nhà ở / khác): quốc gia 33/27/40 → 2,31 + 0,81 + 0,80 = 3,92% · thấp 50/20/30 → 3,5 + 0,6 + 0,6 = 4,7% · trung bình 35/25/40 → 2,45 + 0,75 + 0,8 = 4,0% · cao 20/35/45 → 1,4 + 1,05 + 0,9 = 3,35%
 *   Thu nhập thực = (1 + lương danh nghĩa)/(1 + CPI nhóm) − 1: thấp 1,05/1,047 − 1 = +0,29% · trung bình 1,075/1,04 − 1 = +3,37% · cao 1,11/1,0335 − 1 = +7,40% · chung 1,0847/1,0392 − 1 = +4,38%
 *   Lương thực tế theo giá 2023 (triệu): thấp 6,3/1,047 = 6,017 (+0,017) · trung bình 11,825/1,04 = 11,370 (+0,370) · cao 27,75/1,0335 = 26,85 (+1,85)
 *   Đóng góp vào tăng lương danh nghĩa bình quân (+1,0 triệu = 12,8 − 11,8): thấp 0,4×0,3 = 0,12 · trung bình 0,4×0,825 = 0,33 · cao 0,2×2,75 = 0,55 → 1,00 ✓ (55% do nhóm cao, chiếm 20% số người)
 */
export const wageGrowthVsInflationRealIncome: CaseStudy = {
  id: 'wage-growth-vs-inflation-real-income',
  title: 'Lương tăng 8,5%, lạm phát 3,9%: thu nhập thực của ai tăng?',
  domain: 'macro',
  level: 'junior',
  minutes: 11,
  skills: ['macro', 'segmentation', 'metric-decomposition'],
  question:
    'Lương bình quân tăng 8,5% trong khi CPI tăng 3,9%, nên thu nhập thực có vẻ tăng 4,4%. Con số này đúng với người lao động điển hình không, và với nhóm thu nhập thấp thì sao?',
  summary:
    'Tách thu nhập thực thành lương danh nghĩa và lạm phát theo rổ chi tiêu riêng của từng nhóm, phân biệt trung bình và người điển hình, và loại trừ giả thuyết thay đổi cơ cấu lao động.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng: nền kinh tế và mọi con số đều là giả định để minh họa.* Báo cáo kinh tế của nền kinh tế giả định "X" công bố: **lương bình quân tháng tăng từ 11,8 lên 12,8 triệu đồng (+8,5%)**, CPI bình quân năm **+3,9%**, nên "thu nhập thực tăng khoảng 4,4%". Một nhóm nghiên cứu lại nhận phản hồi từ người lao động thu nhập thấp rằng họ **không cảm thấy khá hơn**. Cần kiểm tra con số tổng hợp có che nhóm nào không.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Lương bình quân', value: '12,8 triệu đ', delta: '+8,5%', tone: 'positive', note: '2023: 11,8 triệu' },
            { label: 'CPI bình quân năm', value: '+3,9%', tone: 'warning' },
            { label: 'Thu nhập thực (tổng)', value: '+4,4%', tone: 'positive', note: '(1,0847 / 1,0392) − 1' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi cần trả lời',
          md: 'Thu nhập thực = lương danh nghĩa **điều chỉnh bằng giá mà nhóm đó thực sự phải trả**. Hỏi: **ai đứng sau mức +4,4%**, và nhóm thu nhập thấp có thật sự tăng không khi rổ chi tiêu của họ nặng về thực phẩm?',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: danh nghĩa, giá, và ai là "người điển hình"',
      blocks: [
        {
          kind: 'formula',
          expression: 'Tăng thu nhập thực ≈ (1 + tăng lương danh nghĩa) / (1 + lạm phát rổ của nhóm) − 1',
          note: 'Lương bình quân chung bị kéo bởi nhóm lương cao (trung bình ≠ người điển hình); CPI chung dùng rổ trung bình quốc gia, không phải rổ của từng nhóm. Cần tách **cả hai** vế.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Tách lương** theo nhóm lao động và xem nhóm nào đóng góp vào mức tăng bình quân.',
            '**Tính CPI theo rổ** của từng nhóm (cùng giá từng nhóm hàng, khác tỷ trọng).',
            '**Tính thu nhập thực từng nhóm** và so với con số tổng.',
            '**Loại trừ** giả thuyết thay đổi cơ cấu việc làm làm bình quân tăng ảo.',
          ],
        },
        {
          kind: 'quiz',
          id: 'wage-growth-vs-inflation-real-income-q1',
          question: 'Báo cáo viết "thu nhập thực tăng 4,4%". Điều gì cần kiểm tra trước khi tin rằng người lao động điển hình khá hơn?',
          options: [
            {
              id: 'a',
              text: 'Kiểm tra năm trước đó có lạm phát cao hay không.',
              explain: 'Bối cảnh hữu ích nhưng không trả lời câu hỏi: con số tổng có đại diện cho người điển hình không?',
            },
            {
              id: 'b',
              text: 'Xem mức tăng lương bình quân đến từ nhóm nào, và lạm phát trong rổ của từng nhóm có khác con số chung không.',
              correct: true,
              explain: 'Đúng. Hai nguồn sai lệch cần xử lý là cấu trúc của trung bình (tăng lương) và rổ chi tiêu (lạm phát).',
            },
            {
              id: 'c',
              text: 'Chuyển sang đo bằng lương trung vị là xong.',
              explain: 'Trung vị tốt hơn trung bình để mô tả người điển hình, nhưng vẫn cần điều chỉnh lạm phát theo rổ; và trung vị không cho biết nhóm thấp.',
            },
          ],
        },
      ],
    },
    {
      id: 'wages',
      kind: 'analysis',
      title: 'Bước 1 — Lương: ai kéo mức bình quân?',
      blocks: [
        {
          kind: 'table',
          title: 'Lương danh nghĩa và đóng góp vào mức tăng bình quân',
          columns: [
            { key: 'g', label: 'Nhóm lao động (tỷ trọng người)' },
            { key: 'w', label: 'Lương 2023 → 2024 (triệu đ/tháng)', align: 'right' },
            { key: 'g2', label: 'Tăng danh nghĩa', align: 'right' },
            { key: 'c', label: 'Đóng góp vào +1,0 triệu bình quân', align: 'right' },
          ],
          rows: [
            { g: 'Thấp (40%)', w: '6,0 → 6,3', g2: '+5,0%', c: '0,12 (12%)' },
            { g: 'Trung bình (40%)', w: '11,0 → 11,825', g2: '+7,5%', c: '0,33 (33%)' },
            { g: 'Cao (20%)', w: '25,0 → 27,75', g2: '+11,0%', c: '0,55 (55%)' },
            { g: 'Chung', w: '11,8 → 12,8', g2: '+8,5%', c: '1,00 (100%)' },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: 'Nhóm cao chiếm 20% số người nhưng 55% mức tăng; mức tăng của nhóm giữa (7,5%) gần với "người điển hình" hơn con số 8,5%.',
        },
        {
          kind: 'text',
          md: 'Loại trừ giả thuyết **thay đổi cơ cấu việc làm**: nếu lao động lương thấp mất việc thì lương bình quân tăng ảo. Ở đây tỷ trọng người 40/40/20 giữ nguyên cả hai năm, nên hiệu ứng cơ cấu không giải thích mức tăng. Dữ liệu cần để kiểm tra trong thực tế: số lao động theo nhóm lương mỗi năm, hoặc lương của cùng một nhóm người (panel) thay vì hai mặt cắt.',
        },
        {
          kind: 'quiz',
          id: 'wage-growth-vs-inflation-real-income-q2',
          question: 'Từ bảng, mô tả nào đúng về "lương tăng 8,5%"?',
          options: [
            {
              id: 'a',
              text: 'Mọi nhóm đều tăng khoảng 8,5%.',
              explain: 'Các nhóm tăng 5,0%, 7,5%, 11,0%; con số 8,5% là trung bình có trọng số, không ai tăng đúng mức đó.',
            },
            {
              id: 'b',
              text: 'Mức bình quân bị kéo lên bởi nhóm lương cao, nhóm thấp chỉ tăng 5,0%.',
              correct: true,
              explain: 'Đúng. Phân rã đóng góp cho thấy 55% mức tăng đến từ 20% số người.',
            },
            {
              id: 'c',
              text: 'Lương không tăng thật vì cơ cấu thay đổi.',
              explain: 'Cơ cấu giữ nguyên 40/40/20 nên không phải nguyên nhân; lương danh nghĩa tăng thật ở mọi nhóm.',
            },
          ],
        },
      ],
    },
    {
      id: 'prices',
      kind: 'analysis',
      title: 'Bước 2 — Giá: rổ chi tiêu khác nhau, lạm phát khác nhau',
      blocks: [
        {
          kind: 'table',
          title: 'CPI theo rổ của từng nhóm (giá: thực phẩm +7%, nhà ở +3%, khác +2%)',
          columns: [
            { key: 'g', label: 'Nhóm' },
            { key: 'basket', label: 'Rổ thực phẩm / nhà ở / khác', align: 'right' },
            { key: 'calc', label: 'Cách tính', align: 'right' },
            { key: 'cpi', label: 'Lạm phát của nhóm', align: 'right' },
          ],
          rows: [
            { g: 'Thấp', basket: '50 / 20 / 30', calc: '3,5 + 0,6 + 0,6', cpi: '4,7%' },
            { g: 'Trung bình', basket: '35 / 25 / 40', calc: '2,45 + 0,75 + 0,8', cpi: '4,0%' },
            { g: 'Cao', basket: '20 / 35 / 45', calc: '1,4 + 1,05 + 0,9', cpi: '3,35%' },
            { g: 'CPI chung (rổ quốc gia)', basket: '33 / 27 / 40', calc: '2,31 + 0,81 + 0,8', cpi: '3,9%' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
          caption: 'Cùng một mức giá từng nhóm hàng, nhóm thấp chịu lạm phát cao hơn nhóm cao 1,35 điểm vì thực phẩm chiếm một nửa chi tiêu.',
        },
        {
          kind: 'chart',
          title: 'Tăng lương danh nghĩa, lạm phát và thu nhập thực theo nhóm (%)',
          type: 'bar',
          xKey: 'g',
          unit: '%',
          series: [
            { key: 'nom', label: 'Lương danh nghĩa' },
            { key: 'cpi', label: 'Lạm phát của nhóm' },
            { key: 'real', label: 'Thu nhập thực' },
          ],
          data: [
            { g: 'Thấp', nom: 5.0, cpi: 4.7, real: 0.3 },
            { g: 'Trung bình', nom: 7.5, cpi: 4.0, real: 3.4 },
            { g: 'Cao', nom: 11.0, cpi: 3.4, real: 7.4 },
            { g: 'Chung', nom: 8.5, cpi: 3.9, real: 4.4 },
          ],
          caption: 'Giá trị làm tròn một chữ số (lạm phát nhóm cao là 3,35%). Thu nhập thực nhóm thấp gần như đứng yên (+0,3%), trong khi nhóm cao tăng 7,4%.',
        },
        {
          kind: 'table',
          title: 'Sức mua tính theo giá 2023 (triệu đồng/tháng)',
          columns: [
            { key: 'g', label: 'Nhóm' },
            { key: 'real', label: 'Lương 2024 theo giá 2023', align: 'right' },
            { key: 'chg', label: 'Thay đổi so với 2023', align: 'right' },
          ],
          rows: [
            { g: 'Thấp', real: '6,017', chg: '+0,017 (≈ 17 nghìn đ)' },
            { g: 'Trung bình', real: '11,370', chg: '+0,370 (≈ 370 nghìn đ)' },
            { g: 'Cao', real: '26,850', chg: '+1,850 (≈ 1,85 triệu đ)' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
          caption: 'Mức tăng sức mua tuyệt đối của nhóm cao gấp khoảng 110 lần nhóm thấp (1,85 triệu so với 17 nghìn).',
        },
        {
          kind: 'quiz',
          id: 'wage-growth-vs-inflation-real-income-q3',
          question: 'Phát biểu nào về thu nhập thực nên đưa vào báo cáo?',
          options: [
            {
              id: 'a',
              text: '"Thu nhập thực tăng 4,4%, mọi người đều khá hơn."',
              explain: 'Vế "mọi người đều khá hơn" không được dữ liệu ủng hộ: nhóm thấp chỉ +0,3%.',
            },
            {
              id: 'b',
              text: '"Thu nhập thực bình quân +4,4%, nhưng nhóm trung bình +3,4% và nhóm thu nhập thấp chỉ +0,3% do lương tăng 5,0% trong khi rổ nặng thực phẩm gặp lạm phát 4,7%."',
              correct: true,
              explain: 'Đúng. Nêu cả con số tổng và phân tách theo nhóm kèm lý do (lương và rổ).',
            },
            {
              id: 'c',
              text: '"Thu nhập thực không tăng vì lạm phát thực phẩm 7%."',
              explain: 'Thực phẩm chỉ quan trọng với nhóm có rổ nặng thực phẩm; nhóm trung bình và cao vẫn tăng đáng kể.',
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
          md: '**Kết luận:** "Thu nhập thực +4,4%" đúng ở mức bình quân nhưng **không đại diện cho người lao động điển hình**: 55% mức tăng lương bình quân đến từ nhóm 20% lương cao nhất, và nhóm thấp đối mặt lạm phát cao hơn (4,7%) vì rổ nặng thực phẩm, nên thu nhập thực chỉ +0,3%. Báo cáo nên trình bày theo nhóm.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Báo cáo thu nhập thực theo nhóm (thấp/trung bình/cao) cùng trung vị, kèm CPI theo rổ của từng nhóm',
              owner: 'Nhóm phân tích kinh tế vĩ mô',
              metric: 'Thu nhập thực theo nhóm; chênh lệch nhóm cao − nhóm thấp',
              threshold: 'Cảnh báo khi chênh lệch tăng thực > 5 điểm hoặc nhóm thấp < 1%',
            },
            {
              action: 'Kiểm tra cơ cấu việc làm và dùng dữ liệu panel (cùng người qua hai năm) để xác nhận tăng lương không do thay đổi cơ cấu',
              owner: 'Nhóm thống kê lao động',
              metric: 'Tăng lương panel so với mặt cắt',
              threshold: 'Chênh lệch giữa hai cách đo < 1 điểm',
            },
            {
              action: 'Theo dõi giá thực phẩm như chỉ báo sớm cho áp lực lên nhóm thu nhập thấp',
              owner: 'Nhóm giá và lạm phát',
              metric: 'CPI thực phẩm; lạm phát rổ nhóm thấp',
              threshold: 'Rổ nhóm thấp vượt CPI chung > 1 điểm thì đưa vào báo cáo chính sách',
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
              title: 'Coi lương bình quân là lương của người điển hình',
              why: 'Bình quân bị kéo bởi nhóm lương cao; 20% số người tạo 55% mức tăng.',
              instead: 'Dùng trung vị hoặc chia theo nhóm; báo cáo phân bố mức tăng.',
            },
            {
              title: 'Dùng một CPI chung cho mọi nhóm',
              why: 'Rổ chi tiêu khác nhau nên lạm phát cảm nhận khác nhau; nhóm thu nhập thấp thường nặng thực phẩm.',
              instead: 'Tính lạm phát theo rổ của từng nhóm khi giá các nhóm hàng chênh nhau nhiều.',
            },
            {
              title: 'Bỏ qua thời điểm đo',
              why: 'Lương điều chỉnh một lần theo năm còn giá tăng suốt năm: so lương cuối năm với CPI bình quân năm có thể sai lệch.',
              instead: 'So cùng kỳ (bình quân năm với bình quân năm, hoặc cuối kỳ với cuối kỳ).',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Thu nhập thực cần cả hai vế: lương danh nghĩa theo nhóm và lạm phát theo rổ của đúng nhóm đó.',
    'Bình quân bị nhóm lương cao kéo; trung vị hoặc phân nhóm mới mô tả người điển hình.',
    'Loại trừ thay đổi cơ cấu lao động bằng dữ liệu cùng nhóm/panel trước khi kết luận lương tăng thật.',
  ],
  references: [
    {
      title: 'Real wages',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Real_wages',
      note: 'Định nghĩa lương thực (lương danh nghĩa điều chỉnh theo giá) và cách đọc chỉ số.',
    },
    {
      title: 'Consumer price index',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Consumer_price_index',
      note: 'Cách CPI được tính từ rổ hàng hóa cố định, nền tảng của việc rổ khác nhau cho lạm phát khác nhau.',
    },
    {
      title: 'Wages',
      publisher: 'International Labour Organization (ILO)',
      url: 'https://www.ilo.org/topics-and-sectors/wages',
      note: 'Trang chủ đề tiền lương của ILO, điểm vào các báo cáo và dữ liệu lương toàn cầu (trang mở được; chỉ xác nhận tiêu đề "Wages").',
    },
  ],
}
