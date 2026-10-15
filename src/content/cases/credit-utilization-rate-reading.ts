import type { CaseStudy } from '../types'

/*
 * Số liệu mock của "Ngân hàng B" (tỷ đ), danh mục 100.000 thẻ, tổng hạn mức 1.000 không đổi:
 *   Quý trước: Dùng-trả-đủ 400 hạn mức/120 dư nợ (30,0%) · Dùng-trả-dần 300/150 (50,0%) · Ít dùng/mới 300/30 (10,0%) → 1.000/300 (30,0%)
 *   Quý này:   Dùng-trả-đủ 400/160 (40,0%) · Dùng-trả-dần 300/156 (52,0%) · Ít dùng/mới 300/44 (14,67%) → 1.000/360 (36,0%)
 *   Thay đổi dư nợ: +40 · +6 · +14 = +60 → +6,0 điểm % tỷ lệ sử dụng (4,0 + 0,6 + 1,4)
 *   Đóng góp: nhóm dùng-trả-đủ 66,7% (40/60) mức tăng · trả dần 10% · ít dùng/mới 23,3%
 */
export const creditUtilizationRateReading: CaseStudy = {
  id: 'credit-utilization-rate-reading',
  title: 'Tỷ lệ sử dụng hạn mức thẻ tăng từ 30% lên 36%: lo hay mừng?',
  domain: 'lending',
  level: 'fresher',
  minutes: 8,
  skills: ['credit-risk', 'segmentation', 'metric-decomposition'],
  question: 'Tỷ lệ sử dụng hạn mức của danh mục thẻ tăng 6 điểm %. Đây là dấu hiệu khách đang căng thẳng tài chính, hay chỉ là chi tiêu tăng lành mạnh?',
  summary: 'Đọc đúng tử số, mẫu số của tỷ lệ sử dụng hạn mức, rồi phân rã theo nhóm hành vi để biết tăng đến từ nhóm lành mạnh hay nhóm rủi ro.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst rủi ro thẻ tín dụng của **Ngân hàng B** (giả định). Báo cáo quý ghi *"tỷ lệ sử dụng hạn mức tăng từ 30% lên 36%"*. Trưởng rủi ro lo ngại khách đang dùng thẻ để xoay xở. Trưởng kinh doanh lại mừng vì doanh số chi tiêu tăng. Cả hai đều đọc cùng một con số.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Ngân hàng B, danh mục thẻ và số liệu là **giả định**. Mô hình điểm tín dụng thực tế thường xét tỷ lệ sử dụng hạn mức như một yếu tố, nhưng cách tính và trọng số tùy mô hình.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Tổng hạn mức', value: '1.000 tỷ đ', delta: 'không đổi', tone: 'neutral' },
            { label: 'Dư nợ thẻ', value: '360 tỷ đ', delta: '+60 so với 300', tone: 'warning' },
            { label: 'Tỷ lệ sử dụng', value: '36,0%', delta: '+6,0 điểm % so với 30,0%', tone: 'warning' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: định nghĩa trước, hành vi sau',
      blocks: [
        {
          kind: 'text',
          md: '**Tử số:** dư nợ thẻ (thường là dư nợ tại một thời điểm, ví dụ ngày chốt sao kê). **Mẫu số:** tổng hạn mức đã cấp. Có hai chỗ dễ lệch: tử số có thể gồm cả khoản chi *sẽ được trả đủ đúng hạn* (không phát sinh lãi), và mẫu số có thể đổi khi ngân hàng tăng hoặc cắt hạn mức. Vì vậy tỷ lệ này chỉ mang ý nghĩa rủi ro khi đọc theo **nhóm hành vi**.',
        },
        {
          kind: 'formula',
          expression: 'Tỷ lệ sử dụng = Dư nợ thẻ ÷ Tổng hạn mức đã cấp',
          note: 'Một khách chi tiêu nhiều rồi trả đủ mỗi kỳ có thể có tỷ lệ sử dụng cao vào ngày chốt sao kê nhưng gần như không có rủi ro; khách chỉ trả tối thiểu thì khác hẳn.',
        },
        {
          kind: 'quiz',
          id: 'credit-utilization-rate-reading-q1',
          question: 'Vì sao hai khách cùng tỷ lệ sử dụng 80% vào ngày chốt sao kê lại có thể có rủi ro khác nhau?',
          options: [
            {
              id: 'a',
              text: 'Khách thứ nhất trả đủ dư nợ khi đến hạn (chỉ dùng thẻ để thanh toán), khách thứ hai chỉ trả tối thiểu và dư nợ cứ tồn tại.',
              correct: true,
              explain: 'Đúng. Cùng một con số tại một thời điểm nhưng hành vi trả nợ khác nhau; cần xem thêm tỷ lệ trả đủ, trả tối thiểu và trễ hạn.',
            },
            {
              id: 'b',
              text: 'Vì ngân hàng đánh giá rủi ro theo tuổi.',
              explain: 'Tuổi có thể là một yếu tố nhưng không giải thích hai khách cùng tỷ lệ sử dụng.',
            },
            {
              id: 'c',
              text: 'Không có sự khác biệt về rủi ro.',
              explain: 'Có: dư nợ tồn tại và chịu lãi khác với dư nợ được trả đủ ngay.',
            },
          ],
        },
      ],
    },
    {
      id: 'segments',
      kind: 'analysis',
      title: 'Bước 1 — Phân rã theo nhóm hành vi',
      blocks: [
        {
          kind: 'table',
          title: 'Hạn mức, dư nợ và tỷ lệ sử dụng theo nhóm (tỷ đ)',
          columns: [
            { key: 'seg', label: 'Nhóm' },
            { key: 'limit', label: 'Hạn mức', align: 'right' },
            { key: 'prevB', label: 'Dư nợ trước', align: 'right' },
            { key: 'prevR', label: 'Tỷ lệ trước', align: 'right' },
            { key: 'nowB', label: 'Dư nợ nay', align: 'right' },
            { key: 'nowR', label: 'Tỷ lệ nay', align: 'right' },
          ],
          rows: [
            { seg: 'Dùng, trả đủ mỗi kỳ', limit: 400, prevB: 120, prevR: '30,0%', nowB: 160, nowR: '40,0%' },
            { seg: 'Dùng, trả dần (có dư nợ chịu lãi)', limit: 300, prevB: 150, prevR: '50,0%', nowB: 156, nowR: '52,0%' },
            { seg: 'Ít dùng / thẻ mới', limit: 300, prevB: 30, prevR: '10,0%', nowB: 44, nowR: '14,7%' },
            { seg: 'Tổng', limit: 1000, prevB: 300, prevR: '30,0%', nowB: 360, nowR: '36,0%' },
          ],
          highlight: [
            { row: 0, tone: 'positive' },
            { row: 1, tone: 'warning' },
            { row: 3, tone: 'neutral' },
          ],
          caption: 'Dư nợ nay: 160 + 156 + 44 = 360; trước: 120 + 150 + 30 = 300. Hạn mức không đổi nên mọi thay đổi tỷ lệ đến từ dư nợ.',
        },
        {
          kind: 'chart',
          title: 'Đóng góp vào mức tăng +6,0 điểm % tỷ lệ sử dụng',
          type: 'bar',
          xKey: 'seg',
          unit: ' điểm %',
          series: [{ key: 'pp', label: 'Đóng góp (điểm %)' }],
          data: [
            { seg: 'Dùng, trả đủ', pp: 4 },
            { seg: 'Dùng, trả dần', pp: 0.6 },
            { seg: 'Ít dùng / mới', pp: 1.4 },
          ],
          caption: '4,0 + 0,6 + 1,4 = 6,0 điểm %. Hai phần ba mức tăng nằm ở nhóm vẫn trả đủ mỗi kỳ.',
        },
        {
          kind: 'quiz',
          id: 'credit-utilization-rate-reading-q2',
          question: 'Theo bảng, mức tăng tỷ lệ sử dụng chủ yếu đến từ đâu, và hàm ý gì?',
          options: [
            {
              id: 'a',
              text: 'Chủ yếu từ nhóm dùng và trả đủ mỗi kỳ (+4,0 trong 6,0 điểm %), nên phần lớn là chi tiêu tăng chứ chưa phải căng thẳng nợ; nhóm trả dần chỉ tăng nhẹ.',
              correct: true,
              explain: 'Đúng. Nhóm trả đủ tăng dư nợ 40 tỷ (+4,0 điểm %), nhóm trả dần chỉ +6 tỷ. Nhưng nhóm trả dần đã ở mức 52%, cần theo dõi riêng.',
            },
            {
              id: 'b',
              text: 'Từ nhóm trả dần, nên siết ngay toàn bộ hạn mức.',
              explain: 'Nhóm trả dần đóng góp chỉ 0,6 trong 6,0 điểm %; siết toàn bộ phạt cả nhóm trả đủ.',
            },
            {
              id: 'c',
              text: 'Tỷ lệ tăng luôn là tín hiệu xấu.',
              explain: 'Không đúng: tăng có thể là chi tiêu lành mạnh khi khách vẫn trả đủ.',
            },
          ],
        },
      ],
    },
    {
      id: 'watch',
      kind: 'analysis',
      title: 'Bước 2 — Điều gì cần theo dõi thêm',
      blocks: [
        {
          kind: 'text',
          md: 'Không nên dừng ở "lành mạnh". Hai điểm đáng chú ý: nhóm **trả dần** có tỷ lệ sử dụng 52% (cao nhất) và tăng, trong đó chứa phần lớn rủi ro; nhóm **ít dùng/thẻ mới** tăng từ 10% lên 14,7%, có thể là khách mới bắt đầu dùng hoặc khách rút tiền mặt sớm sau khi mở thẻ. Hai nhóm này cần xem thêm tỷ lệ trả tối thiểu, rút tiền mặt và trễ hạn.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Tỷ lệ sử dụng nhạy với mẫu số: nếu ngân hàng cắt hạn mức, tỷ lệ tăng dù dư nợ không đổi; nếu tăng hạn mức, tỷ lệ giảm. Khi so các kỳ, hãy kiểm tra mẫu số có đổi không và đọc thêm dư nợ tuyệt đối theo nhóm.',
        },
        {
          kind: 'quiz',
          id: 'credit-utilization-rate-reading-q3',
          question: 'Ngân hàng quyết định tăng hạn mức cho nhóm dùng-trả-đủ thêm 10%. Điều gì xảy ra với tỷ lệ sử dụng tổng nếu dư nợ giữ nguyên?',
          options: [
            {
              id: 'a',
              text: 'Giảm (mẫu số tăng), nhưng đó là giảm do mẫu số chứ không phải khách cải thiện hành vi.',
              correct: true,
              explain: 'Đúng. Tỷ lệ cho thấy dư nợ trên hạn mức; hạn mức lớn hơn thì tỷ lệ nhỏ đi dù hành vi không đổi. Nên so kèm dư nợ tuyệt đối.',
            },
            {
              id: 'b',
              text: 'Tăng vì khách chi nhiều hơn.',
              explain: 'Đề bài giữ nguyên dư nợ, tử số không đổi.',
            },
            {
              id: 'c',
              text: 'Không đổi vì tử và mẫu cùng tăng.',
              explain: 'Chỉ mẫu số tăng (hạn mức), tử số giữ nguyên.',
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
          md: '**Kết luận cho hai trưởng bộ phận:** Mức tăng 6 điểm % đến phần lớn từ nhóm vẫn trả đủ mỗi kỳ (+4,0), chưa phải tín hiệu căng thẳng nợ. Nhưng nhóm trả dần đã ở 52% và nhóm ít dùng/mới đang tăng nhanh; hai nhóm này cần theo dõi riêng bằng tỷ lệ trả tối thiểu và trễ hạn.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Báo cáo tỷ lệ sử dụng theo ba nhóm hành vi thay vì một con số tổng',
              owner: 'Analyst rủi ro thẻ',
              metric: 'Tỷ lệ sử dụng theo nhóm hành vi',
              threshold: 'Cảnh báo khi nhóm trả dần > 55% hoặc tăng > 3 điểm % trong một quý',
            },
            {
              action: 'Theo dõi tỷ lệ trễ hạn 30 ngày của nhóm trả dần và nhóm ít dùng/mới có tỷ lệ sử dụng tăng nhanh',
              owner: 'Quản lý rủi ro tín dụng',
              metric: 'Tỷ lệ trễ hạn 30+ ngày theo nhóm',
              threshold: 'Không tăng quá 0,3 điểm % so với quý trước',
            },
            {
              action: 'Ghi chú mọi thay đổi hạn mức vào báo cáo để tách hiệu ứng mẫu số',
              owner: 'Vận hành sản phẩm thẻ',
              metric: 'Số tài khoản thay đổi hạn mức mỗi kỳ',
              threshold: '100% thay đổi hạn mức có ghi chú',
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
              title: 'Coi tỷ lệ sử dụng tăng là rủi ro tăng',
              why: 'Nhóm vẫn trả đủ mỗi kỳ có thể làm tỷ lệ tăng mà rủi ro không đổi.',
              instead: 'Phân rã theo nhóm hành vi trước khi kết luận.',
            },
            {
              title: 'Quên mẫu số thay đổi',
              why: 'Tăng hoặc cắt hạn mức làm đổi tỷ lệ dù hành vi không đổi.',
              instead: 'Đọc kèm dư nợ tuyệt đối và ghi chú thay đổi hạn mức.',
            },
            {
              title: 'Chỉ nhìn một thời điểm trong tháng',
              why: 'Dư nợ ngày chốt sao kê khác dư nợ sau thời điểm trả nợ.',
              instead: 'Nêu rõ thời điểm lấy dư nợ và, nếu cần, theo dõi dư nợ trung bình.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Tỷ lệ sử dụng hạn mức = dư nợ ÷ hạn mức; phụ thuộc vào cả tử số (chi tiêu) và mẫu số (thay đổi hạn mức).',
    'Cùng một tỷ lệ có thể ứng với rủi ro rất khác tùy hành vi trả nợ; phải phân rã theo nhóm.',
    'Tăng chưa chắc xấu: xác định phần tăng đến từ nhóm lành mạnh hay nhóm có dư nợ tồn tại, rồi theo dõi nhóm sau bằng trễ hạn.',
  ],
  references: [
    {
      title: 'Credit score',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Credit_score',
      note: 'Tổng quan điểm tín dụng và các yếu tố thường được xét, trong đó có mức dùng hạn mức tín dụng.',
    },
    {
      title: 'Ngân hàng Nhà nước Việt Nam',
      publisher: 'SBV',
      url: 'https://www.sbv.gov.vn',
      note: 'Trang chủ cơ quan quản lý ngân hàng; nơi tìm quy định chính thức về hoạt động thẻ và quản lý rủi ro tín dụng.',
    },
  ],
}
