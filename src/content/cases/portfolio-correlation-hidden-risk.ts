import type { CaseStudy } from '../types'

/*
 * Mã cổ phiếu, ngành và số liệu hoàn toàn GIẢ ĐỊNH, MÔ PHỎNG, đã tính lại bằng node. Không phải khuyến nghị đầu tư.
 * Danh mục 10 mã (tỷ trọng %, lợi suất phiên xấu %):
 *   Ngân hàng NH1 12/-6,5 · NH2 10/-6,8 · NH3 8/-6,2   (30%)
 *   Bất động sản BD1 10/-6,9 · BD2 8/-7,0 · BD3 7/-6,6  (25%)
 *   Chứng khoán CK1 8/-6,9 · CK2 7/-6,4                  (15%)
 *   Phòng thủ TD1 (tiêu dùng) 18/-1,5 · DN1 (điện nước) 12/-0,8 (30%)
 * Đóng góp (điểm %) = tỷ trọng × lợi suất: NH 1,956 · BĐS 1,712 · CK 1,000 · phòng thủ 0,366 → tổng -5,034 (làm tròn -5,03%)
 *   Nhóm nhạy lãi suất (NH+BĐS+CK, 70% tỷ trọng): -4,668 = 92,7% mức lỗ; bình quân nhóm -6,67%. Phòng thủ (30%): bình quân -1,22%.
 * Tương quan trung bình theo cặp (45 cặp = 28 trong nhóm nhạy + 16 chéo nhóm + 1 trong nhóm phòng thủ):
 *   bình thường 0,40 / 0,10 / 0,20 → (28×0,40+16×0,10+0,20)/45 = 0,29 · phiên stress 0,85 / 0,45 / 0,50 → 31,5/45 = 0,70
 * Giả định mỗi mã biến động 1,5%/ngày: vol danh mục bình thường 0,86%, stress 1,24% (+43,6%).
 *   Số mã hiệu dụng = σ² / phương sai danh mục: 3,02 (bình thường), 1,46 (stress); theo tỷ trọng 1/Σw² = 9,07.
 *   Nhóm nhạy lãi suất chiếm 76,9% (bình thường) / 76,2% (stress) rủi ro, so với 70% tỷ trọng.
 * Gộp (Simpson): danh mục đối chứng Q (30% nhóm nhạy, 70% phòng thủ), bình quân nhóm nhạy -7,0%, phòng thủ -1,5%
 *   Q = 0,3×(-7,0) + 0,7×(-1,5) = -3,15%. Danh mục ta tốt hơn Q trong từng nhóm (-6,67 so -7,0; -1,22 so -1,5) nhưng tổng -5,03 so -3,15 (chênh -1,88).
 *   Nếu ta dùng tỷ trọng của Q: -2,85% (hơn Q +0,30); phần do mix tỷ trọng: -5,03 - (-2,85) = -2,18. +0,30 - 2,18 = -1,88.
 */
export const portfolioCorrelationHiddenRisk: CaseStudy = {
  id: 'portfolio-correlation-hidden-risk',
  title: '10 mã trông đa dạng nhưng cùng đỏ trong một phiên',
  domain: 'securities',
  level: 'mid',
  minutes: 12,
  skills: ['portfolio-risk', 'mix-effect', 'data-quality'],
  question:
    'Danh mục 10 mã thuộc nhiều ngành nhưng mất 5,0% trong một phiên xấu, gần như toàn bộ do 8 mã cùng nhạy với lãi suất và thanh khoản. Đâu là tín hiệu thật, đâu là ảo giác đa dạng hóa, và nên đo rủi ro thế nào?',
  summary:
    'Đọc ma trận tương quan theo chế độ thị trường, đo tập trung rủi ro theo yếu tố thay vì theo số mã, và nhận ra hiệu ứng mix khi so danh mục với đối chứng.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst rủi ro của một quỹ nhỏ trên một **thị trường giả định**. Quỹ giữ **10 mã** thuộc ngân hàng, bất động sản, chứng khoán, tiêu dùng, điện nước. Báo cáo quý trước ghi *"danh mục đa dạng, 10 mã, tương quan trung bình chỉ 0,29"*. Sau một phiên bán tháo vì lo ngại thanh khoản và lãi suất, danh mục mất **5,03%** trong khi quỹ đối chứng ít mã nhạy lãi suất hơn chỉ mất 3,15%. Giám đốc đầu tư hỏi: *"Mình có 10 mã mà, sao vẫn đỏ đồng loạt?"*',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Dữ liệu minh họa',
          md: 'Mọi mã cổ phiếu (NH1, BD2, CK1…), tỷ trọng, lợi suất và tương quan trong bài là **số mô phỏng**, không phải số thật của mã nào và không phải khuyến nghị đầu tư. Chỉ khái niệm (tương quan, đa dạng hóa, rủi ro hệ thống) là thật.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Danh mục, phiên xấu', value: '-5,03%', tone: 'negative', note: '10 mã' },
            { label: 'Quỹ đối chứng Q', value: '-3,15%', tone: 'warning' },
            { label: 'Tương quan TB (báo cáo cũ)', value: '0,29', tone: 'positive', note: 'giai đoạn bình thường' },
            { label: 'Tương quan TB (phiên stress)', value: '0,70', tone: 'negative' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: rủi ro nằm ở yếu tố chung, không nằm ở số mã',
      blocks: [
        {
          kind: 'formula',
          expression: 'Phương sai danh mục = Σᵢ Σⱼ wᵢ · wⱼ · ρᵢⱼ · σᵢ · σⱼ',
          note: 'Số mã chỉ làm giảm rủi ro khi các mã **không cùng di chuyển** (ρ thấp). Nếu nhiều mã cùng chịu một **yếu tố** (ở đây là lãi suất và thanh khoản), thêm mã gần như không giảm thêm rủi ro. Và ρ không cố định: nó **thay đổi theo chế độ thị trường**.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Tách chế độ**: tính tương quan riêng cho giai đoạn bình thường và phiên stress, đừng trộn.',
            '**Nhóm theo yếu tố rủi ro**: mã nào nhạy với cùng cú sốc (lãi suất, thanh khoản, giá hàng hóa), rồi đo phần rủi ro của từng nhóm.',
            '**Quy ra số mã hiệu dụng**: danh mục có bao nhiêu "cược độc lập" thật sự.',
            '**So sánh đúng**: khi so với đối chứng, tách phần do chọn mã trong nhóm và phần do cơ cấu tỷ trọng giữa các nhóm.',
          ],
        },
        {
          kind: 'quiz',
          id: 'portfolio-correlation-hidden-risk-q1',
          question: 'Danh mục có 10 mã, tỷ trọng khá đều. Kết luận nào về đa dạng hóa là vững nhất?',
          options: [
            {
              id: 'a',
              text: '10 mã là đủ đa dạng, vì tỷ trọng mỗi mã chỉ 7 đến 18%.',
              explain:
                'Tỷ trọng đều chỉ cho thấy không tập trung vào một mã. Rủi ro còn phụ thuộc vào việc các mã có cùng di chuyển hay không (tương quan).',
            },
            {
              id: 'b',
              text: 'Phải xem các mã có cùng yếu tố rủi ro và tương quan của chúng khi stress; 8 mã ngân hàng, bất động sản, chứng khoán cùng nhạy lãi suất nên có thể chỉ là một cược lớn.',
              correct: true,
              explain:
                'Đúng. Đa dạng hóa thật nằm ở độ khác nhau về động lực rủi ro, không ở số lượng mã. Ba ngành khác tên nhưng cùng nhạy lãi suất và thanh khoản vẫn là một yếu tố.',
            },
            {
              id: 'c',
              text: 'Cứ thêm vài mã nữa vào các ngành hiện có là giảm được rủi ro.',
              explain:
                'Thêm mã vào đúng nhóm đã chung yếu tố gần như không giảm rủi ro nhóm đó. Cần mã có động lực khác.',
            },
          ],
        },
      ],
    },
    {
      id: 'regime',
      kind: 'analysis',
      title: 'Bước 1 — Tương quan đổi theo chế độ: 0,29 lúc yên, 0,70 lúc stress',
      blocks: [
        {
          kind: 'table',
          title: 'Tương quan trung bình theo cặp, theo chế độ thị trường',
          columns: [
            { key: 'pair', label: 'Nhóm cặp' },
            { key: 'n', label: 'Số cặp', align: 'right' },
            { key: 'calm', label: 'Bình thường', align: 'right' },
            { key: 'stress', label: 'Phiên stress', align: 'right' },
          ],
          rows: [
            { pair: 'Trong nhóm nhạy lãi suất (8 mã)', n: 28, calm: '0,40', stress: '0,85' },
            { pair: 'Nhạy lãi suất với phòng thủ', n: 16, calm: '0,10', stress: '0,45' },
            { pair: 'Trong nhóm phòng thủ (2 mã)', n: 1, calm: '0,20', stress: '0,50' },
            { pair: 'Trung bình toàn bộ 45 cặp', n: 45, calm: '0,29', stress: '0,70' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
          caption: 'Trung bình có trọng số theo số cặp: (28×0,40 + 16×0,10 + 1×0,20)/45 = 0,29 và (28×0,85 + 16×0,45 + 1×0,50)/45 = 0,70. Số mô phỏng.',
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Vì sao con số 0,29 gây hiểu lầm',
          md: 'Ma trận được ước lượng trên cửa sổ 120 ngày gần như toàn ngày bình thường, nên chỉ mô tả **thời tiết đẹp**. Khi cú sốc chung (lãi suất, thanh khoản) xuất hiện, các mã nhạy cùng yếu tố bị bán cùng lúc và tương quan tăng vọt. Đây là hiện tượng quen thuộc: tương quan thường tăng khi thị trường căng thẳng, đúng lúc ta cần đa dạng hóa nhất. Lưu ý chất lượng dữ liệu: mã thanh khoản thấp có thể không khớp lệnh mỗi ngày (giá cũ), khiến tương quan đo được thấp hơn thực tế.',
        },
        {
          kind: 'quiz',
          id: 'portfolio-correlation-hidden-risk-q2',
          question: 'Báo cáo cũ ghi tương quan trung bình 0,29, phiên stress là 0,70. Cách diễn giải nào đúng?',
          options: [
            {
              id: 'a',
              text: 'Phiên stress là nhiễu ngẫu nhiên, nên dùng 0,29 để quản lý rủi ro.',
              explain:
                'Tương quan tăng theo chế độ là hiện tượng có cơ chế (cùng yếu tố, bán tháo đồng loạt), không phải nhiễu. Bỏ qua nó là đánh giá thấp rủi ro đuôi.',
            },
            {
              id: 'b',
              text: 'Ma trận bình thường là sai và phải thay bằng ma trận stress.',
              explain:
                'Cả hai đều đúng cho chế độ của mình. Vấn đề là dùng một ma trận cho mọi tình huống. Nên giữ cả hai và dùng ma trận stress để kiểm tra sức chịu đựng.',
            },
            {
              id: 'c',
              text: 'Cần báo cáo tương quan theo từng chế độ và dùng ma trận stress để kiểm tra mức lỗ tối đa chấp nhận được.',
              correct: true,
              explain:
                'Đúng. Hai ma trận trả lời hai câu hỏi khác nhau (vận hành thường ngày so với phiên xấu). Vol danh mục đi từ 0,86% lên 1,24% (+43,6%) chỉ vì tương quan thay đổi, mỗi mã vẫn biến động 1,5%.',
            },
          ],
        },
      ],
    },
    {
      id: 'factor',
      kind: 'analysis',
      title: 'Bước 2 — Tập trung theo yếu tố: 70% tỷ trọng, hơn 90% mức lỗ',
      blocks: [
        {
          kind: 'table',
          title: 'Phiên xấu: lợi suất và đóng góp theo nhóm',
          columns: [
            { key: 'group', label: 'Nhóm' },
            { key: 'w', label: 'Tỷ trọng', align: 'right' },
            { key: 'r', label: 'Lợi suất nhóm', align: 'right' },
            { key: 'c', label: 'Đóng góp (điểm %)', align: 'right' },
          ],
          rows: [
            { group: 'Ngân hàng (NH1, NH2, NH3)', w: '30%', r: '-6,52%', c: '-1,956' },
            { group: 'Bất động sản (BD1, BD2, BD3)', w: '25%', r: '-6,85%', c: '-1,712' },
            { group: 'Chứng khoán (CK1, CK2)', w: '15%', r: '-6,67%', c: '-1,000' },
            { group: 'Phòng thủ (TD1, DN1)', w: '30%', r: '-1,22%', c: '-0,366' },
            { group: 'Danh mục', w: '100%', r: '-5,03%', c: '-5,034' },
          ],
          highlight: [
            { row: 0, tone: 'negative' },
            { row: 1, tone: 'negative' },
            { row: 2, tone: 'negative' },
          ],
          caption: 'Ba ngành nhạy lãi suất chiếm 70% tỷ trọng nhưng tạo ra 4,668/5,034 = 92,7% mức lỗ. Mỗi mã trong nhóm này mất 6,2 đến 7,0%, gần như giống nhau: dấu hiệu của một yếu tố chung.',
        },
        {
          kind: 'chart',
          title: 'Đóng góp vào mức lỗ theo nhóm (điểm %, giá trị dương = mất)',
          type: 'bar',
          xKey: 'g',
          unit: '',
          series: [{ key: 'loss', label: 'Mức lỗ đóng góp' }],
          data: [
            { g: 'Ngân hàng', loss: 1.956 },
            { g: 'Bất động sản', loss: 1.712 },
            { g: 'Chứng khoán', loss: 1.0 },
            { g: 'Phòng thủ', loss: 0.366 },
          ],
          caption: 'Tổng 5,034 điểm %.',
        },
        {
          kind: 'table',
          title: 'Số mã hiệu dụng so với số mã trên giấy (mỗi mã biến động 1,5%/ngày, mô phỏng)',
          columns: [
            { key: 'm', label: 'Chỉ tiêu' },
            { key: 'calm', label: 'Bình thường', align: 'right' },
            { key: 'stress', label: 'Stress', align: 'right' },
          ],
          rows: [
            { m: 'Số mã (theo tỷ trọng, 1/Σw²)', calm: '9,07', stress: '9,07' },
            { m: 'Vol danh mục (%/ngày)', calm: '0,86', stress: '1,24' },
            { m: 'Số mã hiệu dụng (σ² / phương sai danh mục)', calm: '3,02', stress: '1,46' },
            { m: 'Tỷ lệ rủi ro từ nhóm nhạy lãi suất', calm: '76,9%', stress: '76,2%' },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: 'Trên giấy gần 9 mã, nhưng thực chất chỉ khoảng 3 cược độc lập lúc bình thường và khoảng 1,5 lúc stress. Nhóm nhạy lãi suất chiếm khoảng 76% rủi ro, cao hơn mức 70% tỷ trọng.',
        },
      ],
    },
    {
      id: 'mix',
      kind: 'analysis',
      title: 'Bước 3 — Hiệu ứng mix: tốt hơn đối chứng ở từng nhóm, vẫn lỗ nặng hơn tổng thể',
      blocks: [
        {
          kind: 'table',
          title: 'Danh mục ta so với đối chứng Q trong phiên xấu',
          columns: [
            { key: 'item', label: 'Nhóm' },
            { key: 'ours', label: 'Ta: tỷ trọng / lợi suất', align: 'right' },
            { key: 'q', label: 'Q: tỷ trọng / lợi suất', align: 'right' },
          ],
          rows: [
            { item: 'Nhạy lãi suất (NH + BĐS + CK)', ours: '70% / -6,67%', q: '30% / -7,0%' },
            { item: 'Phòng thủ', ours: '30% / -1,22%', q: '70% / -1,5%' },
            { item: 'Tổng', ours: '-5,03%', q: '-3,15%' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Trong từng nhóm, ta mất ít hơn Q (6,67 so 7,0 và 1,22 so 1,5). Gộp lại, ta mất nhiều hơn 1,88 điểm %.',
        },
        {
          kind: 'table',
          title: 'Tách chênh lệch -1,88 điểm %',
          columns: [
            { key: 'part', label: 'Phần' },
            { key: 'v', label: 'Điểm %', align: 'right' },
            { key: 'how', label: 'Cách tính' },
          ],
          rows: [
            { part: 'Chọn mã trong từng nhóm', v: '+0,30', how: 'Ta dùng tỷ trọng của Q: -2,85% so Q -3,15%' },
            { part: 'Cơ cấu tỷ trọng giữa các nhóm (mix)', v: '-2,18', how: '-5,03% (tỷ trọng thật) trừ -2,85% (tỷ trọng Q)' },
            { part: 'Tổng chênh lệch', v: '-1,88', how: '+0,30 + (-2,18)' },
          ],
          highlight: [{ row: 1, tone: 'negative' }],
          caption: 'Kỹ năng chọn mã không tệ; cú đau nằm ở cơ cấu giữa các nhóm. Đây là cùng bản chất với hiệu ứng mix kiểu Simpson: so tổng mà không tách cơ cấu sẽ kết luận ngược với so từng nhóm.',
        },
        {
          kind: 'quiz',
          id: 'portfolio-correlation-hidden-risk-q3',
          question: 'Một đồng nghiệp nói "danh mục mình chọn mã kém hơn đối chứng vì lỗ nhiều hơn 1,88 điểm %". Phản biện đúng nhất là gì?',
          options: [
            {
              id: 'a',
              text: 'Đúng, tổng lỗ nhiều hơn tức là chọn mã kém.',
              explain:
                'So tổng gộp lẫn cơ cấu tỷ trọng với kỹ năng chọn mã. Ở đây trong từng nhóm ta còn mất ít hơn Q.',
            },
            {
              id: 'b',
              text: 'Chọn mã trong từng nhóm tốt hơn (+0,30 điểm %); phần lớn chênh lệch do dồn 70% vào nhóm nhạy lãi suất (-2,18 điểm %), nên vấn đề là phân bổ giữa nhóm.',
              correct: true,
              explain:
                'Đúng. Tách phần chọn mã khỏi phần cơ cấu cho thấy hành động cần làm là điều chỉnh tỷ trọng giữa các yếu tố, không phải thay mã. Chú ý kết luận này chỉ dựa trên một phiên; cần nhiều phiên stress để khẳng định.',
            },
            {
              id: 'c',
              text: 'Số liệu có lỗi vì nhóm nào ta cũng tốt hơn mà tổng lại tệ hơn.',
              explain:
                'Không phải lỗi: đó là hiệu ứng mix có thật, xảy ra khi tỷ trọng giữa các nhóm khác nhau.',
            },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: quản lý theo yếu tố, kiểm tra stress theo chế độ',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận:** 10 mã chỉ là khoảng 3 cược độc lập lúc bình thường và gần 1,5 lúc stress, vì ngân hàng, bất động sản và chứng khoán cùng nhạy lãi suất và thanh khoản. Nhóm này chiếm 70% tỷ trọng và 92,7% mức lỗ phiên xấu. So với đối chứng, kỹ năng chọn mã không phải vấn đề (+0,30 điểm %); cơ cấu giữa các nhóm mới là nguyên nhân (-2,18 điểm %). Đây là phân tích trên dữ liệu mô phỏng, chưa phải khuyến nghị đầu tư.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Báo cáo rủi ro theo yếu tố (lãi suất/thanh khoản, tiêu dùng, ...) song song với báo cáo theo mã và ngành',
              owner: 'Quản trị rủi ro',
              metric: 'Tỷ lệ rủi ro (vol) đến từ từng nhóm yếu tố',
              threshold: 'Cảnh báo khi một nhóm yếu tố > 60% rủi ro danh mục',
            },
            {
              action: 'Dùng hai ma trận tương quan (bình thường, stress từ các phiên xấu lịch sử) để kiểm tra sức chịu đựng hằng tháng',
              owner: 'Phân tích định lượng',
              metric: 'Số mã hiệu dụng và vol danh mục theo ma trận stress',
              threshold: 'Soát lại khi số mã hiệu dụng stress < 2 hoặc vol stress tăng > 40% so với bình thường',
            },
            {
              action: 'Phân bổ lại tỷ trọng giữa nhóm yếu tố (không chỉ thay mã), kèm giới hạn tỷ trọng nhóm nhạy lãi suất',
              owner: 'Giám đốc đầu tư',
              metric: 'Tỷ trọng nhóm nhạy lãi suất; mức lỗ mô phỏng phiên stress',
              threshold: 'Tỷ trọng nhóm ≤ 50% hoặc mức lỗ stress ≤ 4% NAV (ngưỡng ví dụ do quỹ đặt)',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Giới hạn của phân tích này',
          md: 'Một phiên xấu là mẫu rất nhỏ. Hãy gom nhiều phiên stress, kiểm tra độ nhạy với cách xác định "stress" và với dữ liệu mã thanh khoản thấp. Tương quan chỉ đo mối quan hệ tuyến tính; nó không cho biết nguyên nhân, nên cần giả thuyết về yếu tố (ở đây là lãi suất, thanh khoản) để kiểm chứng.',
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
              title: 'Đếm số mã thay vì đếm số yếu tố rủi ro',
              why: '9 mã theo tỷ trọng nhưng chỉ khoảng 3 cược độc lập; ngành khác tên vẫn có thể cùng một yếu tố.',
              instead: 'Nhóm mã theo cú sốc chung và đo số mã hiệu dụng, tỷ lệ rủi ro theo nhóm.',
            },
            {
              title: 'Dùng một ma trận tương quan cho mọi chế độ',
              why: 'Ước lượng trên cửa sổ bình thường cho 0,29, phiên stress là 0,70; vol danh mục tăng 43,6% chỉ vì tương quan.',
              instead: 'Giữ ma trận theo chế độ và chạy kiểm tra stress.',
            },
            {
              title: 'So tổng với đối chứng mà không tách cơ cấu',
              why: 'Tốt hơn ở từng nhóm vẫn có thể tệ hơn tổng thể khi tỷ trọng giữa nhóm khác nhau (+0,30 và -2,18 điểm %).',
              instead: 'Tách chọn mã và phân bổ (mix) trước khi quy trách nhiệm.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Đa dạng hóa là về yếu tố rủi ro khác nhau, không phải số mã: 10 mã gồm 8 mã cùng nhạy lãi suất chỉ như khoảng 3 cược, và gần 1,5 lúc stress.',
    'Tương quan đổi theo chế độ thị trường: 0,29 lúc bình thường, 0,70 lúc stress. Cần ma trận theo chế độ, không phải một con số.',
    'Khi so với đối chứng, tách chọn mã và cơ cấu tỷ trọng; hiệu ứng mix có thể đảo ngược kết luận khi gộp.',
  ],
  references: [
    {
      title: 'Diversification (finance)',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Diversification_(finance)',
      note: 'Giải thích đa dạng hóa, rủi ro hệ thống không thể đa dạng hóa, và việc tương quan thường tăng khi thị trường căng thẳng.',
    },
    {
      title: 'Modern portfolio theory',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Modern_portfolio_theory',
      note: 'Nền tảng toán của phương sai danh mục theo tỷ trọng và tương quan, dùng cho công thức ở phần khung tư duy.',
    },
    {
      title: "Simpson's paradox",
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Simpson%27s_paradox',
      note: 'Giải thích hiện tượng xu hướng trong từng nhóm đảo ngược khi gộp, tương ứng với bước so danh mục với đối chứng.',
    },
  ],
}
