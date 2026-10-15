import type { CaseStudy } from '../types'

/*
 * Số liệu mock của "Công ty tài chính F" (triệu đ), phí trả chậm đã phát sinh và đã thu theo nhóm ngày quá hạn:
 *   Tháng trước: 1–7 ngày 150 phát sinh/138 thu (92,0%) · 8–30 ngày 180/126 (70,0%) · 31–90 ngày 120/33 (27,5%) → 450/297 (66,0%)
 *   Tháng này:   1–7 ngày 150/135 (90,0%) · 8–30 ngày 200/130 (65,0%) · 31–90 ngày 150/35 (23,3%) → 500/300 (60,0%)
 *   Tỷ trọng phí phát sinh nhóm 31–90 ngày: 26,7% (120/450) → 30,0% (150/500)
 *   Phí chưa thu tháng này: 500 − 300 = 200 · nhóm 31–90 ngày chưa thu 115 (57,5% số chưa thu)
 *   Thu phí cùng nhóm tháng này nếu giữ tỷ lệ tháng trước: 150×92% + 200×70% + 150×27,5% = 138 + 140 + 41,25 = 319,25
 */
export const lateFeeCollectionRateReading: CaseStudy = {
  id: 'late-fee-collection-rate-reading',
  title: 'Tỷ lệ thu phí trả chậm giảm từ 66% xuống 60%',
  domain: 'lending',
  level: 'fresher',
  minutes: 8,
  skills: ['credit-risk', 'metric-decomposition', 'segmentation'],
  question: 'Tỷ lệ thu phí trả chậm giảm 6 điểm %. Tỷ lệ này định nghĩa thế nào, và nhóm quá hạn nào đang kéo nó xuống?',
  summary: 'Định nghĩa tỷ lệ thu phí trả chậm, phân rã theo nhóm ngày quá hạn và tách ảnh hưởng của cơ cấu nhóm với ảnh hưởng của tỷ lệ thu từng nhóm.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst thu hồi nợ của **Công ty tài chính F**, một công ty cho vay tiêu dùng giả định. Báo cáo tháng ghi *"tỷ lệ thu phí trả chậm giảm từ 66% xuống 60%"*. Trưởng bộ phận thu hồi nợ nghi ngờ nhân viên làm việc kém. Trưởng sản phẩm nghi ngờ phí quá cao. Bạn cần tách dữ liệu trước khi hai bên tranh luận.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Công ty F và mọi con số là **giả định**. Quy định về phí và lãi phạt quá hạn do pháp luật và hợp đồng quy định, có giới hạn; bài chỉ bàn về cách đọc số liệu, không nêu mức phí hợp lệ. Với phần pháp lý, cần người có chuyên môn rà soát.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Phí trả chậm phát sinh', value: '500 triệu đ', delta: '+50 so với 450', tone: 'neutral' },
            { label: 'Phí đã thu', value: '300 triệu đ', delta: '+3 so với 297', tone: 'neutral' },
            { label: 'Tỷ lệ thu', value: '60,0%', delta: '−6,0 điểm % so với 66,0%', tone: 'negative' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: tỷ lệ thu = đã thu ÷ đã phát sinh, trong cùng cửa sổ',
      blocks: [
        {
          kind: 'text',
          md: 'Cần ba quy ước. **Tử số:** phí thu được (bằng tiền) từ khoản phí phát sinh trong kỳ, không tính phí được miễn/hủy. **Mẫu số:** phí đã phát sinh trong kỳ sau khi trừ miễn giảm đã được duyệt. **Cửa sổ:** thu trong bao lâu sau khi phát sinh (cuối tháng, 30 ngày, 90 ngày). Hai công ty dùng hai cửa sổ khác nhau sẽ ra hai tỷ lệ khác nhau.',
        },
        {
          kind: 'formula',
          expression: 'Tỷ lệ thu phí = Phí đã thu bằng tiền ÷ (Phí phát sinh − Phí miễn giảm đã duyệt), cùng cohort phát sinh',
          note: 'Đọc theo cohort (tháng phát sinh) công bằng hơn đọc theo "tháng thu": phí phát sinh cuối tháng chưa kịp thu sẽ làm tháng đó trông kém dù sau đó thu được.',
        },
        {
          kind: 'quiz',
          id: 'late-fee-collection-rate-reading-q1',
          question: 'Hai báo cáo cùng gọi là "tỷ lệ thu phí" nhưng một báo cáo tính tháng thu, một tính cohort tháng phát sinh. Điều gì có thể xảy ra?',
          options: [
            {
              id: 'a',
              text: 'Hai tỷ lệ khác nhau, nhất là khi lượng phát sinh thay đổi; cần nêu rõ cách tính trước khi so sánh.',
              correct: true,
              explain: 'Đúng. Tháng thu có thể gồm phí của nhiều cohort khác nhau; cohort theo tháng phát sinh cho biết thật sự thu được bao nhiêu từ phí của tháng đó.',
            },
            {
              id: 'b',
              text: 'Hai tỷ lệ luôn bằng nhau.',
              explain: 'Chỉ bằng nhau khi phát sinh ổn định và thu đúng cửa sổ; thực tế thường lệch.',
            },
            {
              id: 'c',
              text: 'Không cần định nghĩa vì cùng tên.',
              explain: 'Cùng tên không bảo đảm cùng định nghĩa.',
            },
          ],
        },
      ],
    },
    {
      id: 'buckets',
      kind: 'analysis',
      title: 'Bước 1 — Phân rã theo nhóm ngày quá hạn',
      blocks: [
        {
          kind: 'table',
          title: 'Phí phát sinh, đã thu và tỷ lệ thu theo nhóm quá hạn (triệu đ)',
          columns: [
            { key: 'b', label: 'Nhóm quá hạn' },
            { key: 'pb', label: 'Phát sinh trước', align: 'right' },
            { key: 'pc', label: 'Thu trước', align: 'right' },
            { key: 'pr', label: 'Tỷ lệ trước', align: 'right' },
            { key: 'nb', label: 'Phát sinh nay', align: 'right' },
            { key: 'nc', label: 'Thu nay', align: 'right' },
            { key: 'nr', label: 'Tỷ lệ nay', align: 'right' },
          ],
          rows: [
            { b: '1–7 ngày', pb: 150, pc: 138, pr: '92,0%', nb: 150, nc: 135, nr: '90,0%' },
            { b: '8–30 ngày', pb: 180, pc: 126, pr: '70,0%', nb: 200, nc: 130, nr: '65,0%' },
            { b: '31–90 ngày', pb: 120, pc: 33, pr: '27,5%', nb: 150, nc: 35, nr: '23,3%' },
            { b: 'Tổng', pb: 450, pc: 297, pr: '66,0%', nb: 500, nc: 300, nr: '60,0%' },
          ],
          highlight: [
            { row: 2, tone: 'negative' },
            { row: 3, tone: 'warning' },
          ],
          caption: 'Thu: 135 + 130 + 35 = 300 và 138 + 126 + 33 = 297. Cả ba nhóm đều giảm tỷ lệ, và tỷ trọng nhóm 31–90 ngày tăng từ 26,7% lên 30,0%.',
        },
        {
          kind: 'chart',
          title: 'Tỷ lệ thu phí theo nhóm quá hạn',
          type: 'bar',
          xKey: 'b',
          unit: '%',
          series: [
            { key: 'prev', label: 'Tháng trước' },
            { key: 'now', label: 'Tháng này' },
          ],
          data: [
            { b: '1–7 ngày', prev: 92, now: 90 },
            { b: '8–30 ngày', prev: 70, now: 65 },
            { b: '31–90 ngày', prev: 27.5, now: 23.3 },
          ],
          caption: 'Tỷ lệ thu giảm ở mọi nhóm, giảm nhiều nhất ở nhóm 8–30 ngày (−5 điểm %) và 31–90 ngày (−4,2 điểm %).',
        },
        {
          kind: 'quiz',
          id: 'late-fee-collection-rate-reading-q2',
          question: 'Nếu tỷ lệ thu từng nhóm giữ như tháng trước (92%, 70%, 27,5%) nhưng cơ cấu phát sinh như tháng này, tổng thu sẽ là bao nhiêu?',
          options: [
            {
              id: 'a',
              text: '≈ 319 triệu đ (tỷ lệ ≈ 63,9%): phần giảm do cơ cấu nghiêng về nhóm quá hạn lâu chỉ khoảng 2 điểm %; phần còn lại do tỷ lệ thu từng nhóm giảm.',
              correct: true,
              explain: 'Đúng. 150×92% + 200×70% + 150×27,5% = 138 + 140 + 41,25 = 319,25, tức 63,9%. Từ 66,0% xuống 63,9% là hiệu ứng cơ cấu (−2,15), từ 63,85% xuống 60,0% là hiệu ứng tỷ lệ từng nhóm (−3,85).',
            },
            {
              id: 'b',
              text: '300 triệu đ vì tổng thu không đổi.',
              explain: 'Bài hỏi một kịch bản giả định với tỷ lệ cũ, không phải số thực.',
            },
            {
              id: 'c',
              text: '450 triệu đ vì tỷ lệ cũ là 66% của 500.',
              explain: '66% của 500 là 330, và cơ cấu nhóm cũng đã đổi nên không dùng tỷ lệ chung cũ.',
            },
          ],
        },
      ],
    },
    {
      id: 'backlog',
      kind: 'analysis',
      title: 'Bước 2 — Phí chưa thu đang nằm ở đâu?',
      blocks: [
        {
          kind: 'table',
          title: 'Phí chưa thu tháng này (200 triệu đ)',
          columns: [
            { key: 'b', label: 'Nhóm quá hạn' },
            { key: 'u', label: 'Chưa thu (triệu đ)', align: 'right' },
            { key: 's', label: 'Tỷ trọng số chưa thu', align: 'right' },
          ],
          rows: [
            { b: '1–7 ngày', u: 15, s: '7,5%' },
            { b: '8–30 ngày', u: 70, s: '35,0%' },
            { b: '31–90 ngày', u: 115, s: '57,5%' },
            { b: 'Tổng', u: 200, s: '100%' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: '15 + 70 + 115 = 200. Nhóm 31–90 ngày chiếm 30% phí phát sinh nhưng 57,5% phí chưa thu.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Ba điều cần kiểm tra thêm: (1) có thay đổi chính sách miễn giảm hay không, làm đổi mẫu số; (2) có thay đổi chiến lược thu (thứ tự gọi, kênh nhắc) hay năng lực đội thu; (3) chất lượng khách mới vào kỳ này khác kỳ trước hay không. Phí trả chậm cũng cần xem cùng với tỷ lệ thu gốc: thu phí đạt cao mà khách vỡ nợ vì phí thì không phải tín hiệu tốt.',
        },
        {
          kind: 'quiz',
          id: 'late-fee-collection-rate-reading-q3',
          question: 'Việc nên làm đầu tiên là gì?',
          options: [
            {
              id: 'a',
              text: 'Tập trung điều tra nhóm 8–30 ngày (giảm 5 điểm %) và nhóm 31–90 ngày (chiếm 57,5% số chưa thu), kiểm tra thay đổi chiến lược thu và cơ cấu khách.',
              correct: true,
              explain: 'Đúng. Đó là hai nhóm đóng góp chính vào mức giảm và vào số tiền chưa thu.',
            },
            {
              id: 'b',
              text: 'Kết luận nhân viên thu hồi nợ làm kém trên mọi nhóm.',
              explain: 'Nhóm 1–7 ngày chỉ giảm 2 điểm %; đổ lỗi cho nhân viên trước khi phân tích là vội.',
            },
            {
              id: 'c',
              text: 'Tăng mức phí trả chậm để bù.',
              explain: 'Tăng phí làm mẫu số tăng, tỷ lệ thu khó cải thiện, và có thể vướng quy định.',
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
          md: '**Kết luận:** Tỷ lệ thu phí giảm 6,0 điểm %: khoảng 2,15 điểm % do cơ cấu nghiêng về nhóm quá hạn lâu và khoảng 3,85 điểm % do tỷ lệ thu từng nhóm giảm. Phần lớn phí chưa thu (57,5%) nằm ở nhóm 31–90 ngày.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Chuẩn hóa định nghĩa tỷ lệ thu phí (tử, mẫu, cửa sổ, cohort) và công bố cùng báo cáo',
              owner: 'Analyst thu hồi nợ',
              metric: 'Tỷ lệ thu phí theo cohort tháng phát sinh',
              threshold: 'Một định nghĩa duy nhất cho mọi báo cáo',
            },
            {
              action: 'Rà chiến lược nhắc nợ nhóm 8–30 ngày (kênh, thời điểm, nội dung) và thử A/B',
              owner: 'Trưởng thu hồi nợ',
              metric: 'Tỷ lệ thu phí nhóm 8–30 ngày',
              threshold: 'Về ≥ 70% trong 2 tháng',
            },
            {
              action: 'Theo dõi tỷ lệ thu gốc cùng với phí để tránh thu phí làm tăng vỡ nợ',
              owner: 'Quản lý rủi ro tín dụng',
              metric: 'Tỷ lệ nợ xấu theo nhóm khách bị tính phí',
              threshold: 'Không tăng quá 0,5 điểm % so với kỳ trước',
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
              title: 'Đổ lỗi theo con số tổng',
              why: 'Tỷ lệ tổng gộp nhiều nhóm với tỷ lệ nền khác nhau; cơ cấu đổi cũng làm tổng đổi.',
              instead: 'Phân rã theo nhóm quá hạn và tách hiệu ứng cơ cấu với tỷ lệ từng nhóm.',
            },
            {
              title: 'So tỷ lệ tháng thu mà không theo cohort',
              why: 'Phí phát sinh cuối tháng chưa kịp thu làm tháng đó kém giả tạo.',
              instead: 'Theo dõi theo cohort tháng phát sinh và cố định cửa sổ thu.',
            },
            {
              title: 'Quên miễn giảm trong mẫu số',
              why: 'Chính sách miễn giảm thay đổi làm tỷ lệ đổi mà không liên quan đến năng lực thu.',
              instead: 'Báo cáo mẫu số trước và sau miễn giảm, nêu rõ chính sách thay đổi.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Tỷ lệ thu phí = phí đã thu ÷ phí phát sinh (sau miễn giảm) trong cùng cohort và cửa sổ thu.',
    'Phân rã theo nhóm ngày quá hạn và tách hiệu ứng cơ cấu với hiệu ứng tỷ lệ từng nhóm.',
    'Xem phí chưa thu nằm ở nhóm nào để ưu tiên nguồn lực, và đo cả tác động lên nợ xấu.',
  ],
  references: [
    {
      title: 'Late fee',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Late_fee',
      note: 'Tổng quan về phí trả chậm: mục đích, cách tính và các tranh luận.',
    },
    {
      title: 'Debt collection',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Debt_collection',
      note: 'Quy trình thu hồi nợ và các phương thức thu, để hiểu vì sao tỷ lệ thu giảm khi nợ quá hạn lâu.',
    },
  ],
}
