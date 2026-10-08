import type { CaseStudy } from '../types'

/*
 * Số liệu mock (nền tảng tin rao bất động sản ở một thành phố giả định), đã kiểm tra khớp nhau:
 *   Làm sạch tin quý T3/26: 48.000 tin thô − 6.240 trùng (13,0%) − 3.360 tin ảo/hết hiệu lực (7,0%)
 *     − 1.200 diện tích lỗi (2,5%) = 37.200 tin dùng được (77,5%)
 *   Giá/m² trung vị thô (triệu đ), T1/25 → T3/26: 52,0 · 53,6 · 55,3 · 57,1 · 58,4 · 60,2 · 62,5
 *     → chỉ số thô (T1/25 = 100): 100,0 · 103,1 · 106,3 · 109,8 · 112,3 · 115,8 · 120,2
 *   Chỉ số hedonic v2.0:   100,0 · 101,0 · 102,3 · 103,1 · 104,4 · 105,0 · 105,8 (YoY T3/26 = 105,8/102,3 − 1 = +3,4%)
 *   Chuỗi tham chiếu (giá thẩm định): 100,0 · 100,9 · 102,0 · 103,3 · 104,2 · 105,1 · 105,9
 *     Sai lệch tuyệt đối TB: hedonic 0,14 điểm · chỉ số thô 6,59 điểm; chỉ số thô YoY = 120,2/106,3 − 1 = +13,1%
 *   Quyền số theo phân khúc (tổng 100%): giá trị tồn kho 34/28/24/14 · tỷ trọng tin rao 30/25/20/25
 *   (căn hộ trung tâm / căn hộ vùng ven / nhà phố / đất nền)
 *   Chỉ số phân khúc T3/26: 106 · 101 · 104 · 118
 *     Quyền số tồn kho: 0,34×106 + 0,28×101 + 0,24×104 + 0,14×118 = 105,80
 *     Quyền số theo tin rao: 0,30×106 + 0,25×101 + 0,20×104 + 0,25×118 = 107,35 (lệch +1,55 điểm)
 *   Tỷ lệ chênh giá rao so với giá thẩm định (mô phỏng): 4,5% · 8,0% · 6,5% · 12,0%
 *   Phiên bản công bố: bản nhanh T+10 ngày (70% tin, sai lệch TB 0,60) · bản 1 T+30 (92%, 0,25) · bản chốt T+90 (100%, 0)
 */
export const realEstateIndexMethodology: CaseStudy = {
  id: 'real-estate-index-methodology',
  title: 'Thiết kế chỉ số giá bất động sản nội bộ: phương pháp, quyền số và quy tắc công bố lại',
  domain: 'real-estate',
  level: 'lead',
  minutes: 15,
  skills: ['metric-definition', 'valuation', 'data-quality'],
  question:
    'Nền tảng muốn công bố một chỉ số giá nhà đất hằng quý làm "con số chính thức" cho cả đội kinh doanh, truyền thông và đối tác. Chọn phương pháp nào, xử lý dữ liệu tin rao ra sao, đặt quyền số và độ trễ công bố thế nào, và khi nào được phép viết lại lịch sử?',
  summary:
    'Chọn phương pháp theo dữ liệu thực có (hedonic so với trung vị, repeat-sales, SPAR), làm sạch tin rao, chọn quyền số theo giá trị tồn kho, thiết kế bản nhanh/bản chốt và quy tắc phiên bản hóa chỉ số.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là Analytics Lead của một nền tảng tin rao bất động sản. Hiện có ba nhóm đang tự tính "giá thị trường": sales lấy trung vị giá/m² toàn tin, truyền thông trích số từ báo cáo quý, đối tác ngân hàng hỏi thẳng *"chỉ số của các anh cố định phương pháp chưa, tháng sau có sửa số cũ không?"*. Ban giám đốc yêu cầu **một chỉ số nội bộ duy nhất**, công bố mỗi quý. Dữ liệu và số liệu dưới đây đều là **mô phỏng**.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Tin thô quý T3/26', value: '48.000', tone: 'neutral' },
            { label: 'Tin dùng được sau làm sạch', value: '37.200', delta: '77,5%', tone: 'warning', note: 'Bỏ 22,5% do trùng, ảo, lỗi diện tích' },
            { label: 'Giá/m² trung vị thô, YoY', value: '+13,1%', tone: 'warning', note: 'Chỉ số thô: 106,3 → 120,2' },
            { label: 'Chỉ số hedonic, YoY', value: '+3,4%', tone: 'neutral', note: '102,3 → 105,8' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Đây là bài toán thiết kế, không phải bài toán tính một con số',
          md: 'Một chỉ số giá là **một bộ quy tắc** (phương pháp, dữ liệu đầu vào, quyền số, lịch công bố, chính sách sửa số) chứ không chỉ một công thức. Khi quy tắc không được viết ra, mỗi quý chỉ số sẽ "đổi tính cách" mà không ai biết, và người dùng ngoài sẽ cho rằng bạn chỉnh số theo ý muốn.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: quy tắc chỉ số gồm năm quyết định',
      blocks: [
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Phương pháp**: cách tách "giá thay đổi" khỏi "loại nhà đang được rao thay đổi" (kiểm soát chất lượng/mix).',
            '**Dữ liệu**: tin nào được vào, làm sạch ra sao, giá rao khác giá giao dịch thế nào.',
            '**Quyền số**: mỗi phân khúc đóng góp bao nhiêu vào chỉ số tổng.',
            '**Lịch công bố**: bản nhanh, bản chốt, độ trễ.',
            '**Chính sách sửa số và phiên bản**: thay đổi nào chỉ ghi chú, thay đổi nào buộc tính lại toàn bộ lịch sử.',
          ],
        },
        {
          kind: 'table',
          title: 'Bốn phương pháp ứng viên đặt cạnh dữ liệu của nền tảng',
          columns: [
            { key: 'method', label: 'Phương pháp' },
            { key: 'need', label: 'Cần gì ở dữ liệu' },
            { key: 'strength', label: 'Điểm mạnh' },
            { key: 'limit', label: 'Hạn chế với tin rao' },
          ],
          rows: [
            {
              method: 'Trung vị theo phân khúc',
              need: 'Giá, diện tích, nhãn phân khúc',
              strength: 'Dễ giải thích, tính nhanh',
              limit: 'Nhạy với mix trong phân khúc (nhà to hơn, vị trí khác) nên "tăng giá" lẫn "đổi loại nhà"',
            },
            {
              method: 'Hedonic (hồi quy theo đặc điểm)',
              need: 'Nhiều thuộc tính: diện tích, vị trí, tuổi, số phòng, pháp lý',
              strength: 'Dùng được mọi tin, kiểm soát chất lượng tường minh',
              limit: 'Phải đặt mô hình và cập nhật; thuộc tính thiếu hoặc sai làm lệch hệ số',
            },
            {
              method: 'Repeat-sales',
              need: 'Cùng một bất động sản xuất hiện ≥2 lần',
              strength: 'Kiểm soát chất lượng gần như tự động',
              limit: 'Tin rao lặp lại ít (mô phỏng: 9% tin), thiên về căn dễ bán; lịch sử bị sửa mỗi khi có cặp mới',
            },
            {
              method: 'SPAR (giá bán/giá thẩm định)',
              need: 'Giá thẩm định kỳ gốc cho từng bất động sản',
              strength: 'Ổn định, ít bị sửa lịch sử',
              limit: 'Nền tảng không có giá thẩm định cho phần lớn tin',
            },
          ],
          caption: 'Hướng dẫn quốc tế (*Handbook on Residential Property Price Indices*) coi hedonic, repeat-sales, SPAR và phân tầng là các họ phương pháp chính; không có phương pháp "tốt nhất" chung mà tùy dữ liệu sẵn có.',
        },
        {
          kind: 'quiz',
          id: 'real-estate-index-methodology-q1',
          question: 'Nền tảng có tin rao với nhiều thuộc tính, nhưng không có giá thẩm định và tin lặp lại ít. Phương pháp chính hợp lý nhất là gì?',
          options: [
            {
              id: 'a',
              text: 'Repeat-sales, vì "cùng một căn" là cách kiểm soát chất lượng chặt chẽ nhất.',
              explain: 'Cách này đúng về nguyên lý nhưng chỉ dùng được ~9% tin và thiên về căn dễ bán, nên chỉ số sẽ đại diện cho một phần nhỏ thị trường, lại phải sửa lịch sử mỗi khi có cặp mới.',
            },
            {
              id: 'b',
              text: 'Hedonic làm phương pháp chính, dùng trung vị phân tầng và dữ liệu thẩm định (nếu có) làm phép đối chiếu.',
              correct: true,
              explain: 'Đúng. Hedonic dùng được toàn bộ tin và tách giá khỏi thành phần loại nhà. Trung vị phân tầng dễ giải thích, dùng làm phép kiểm tra chéo; nếu hai chuỗi lệch hẳn thì có vấn đề về mô hình hoặc dữ liệu cần điều tra.',
            },
            {
              id: 'c',
              text: 'Trung vị giá/m² toàn thành phố, vì dễ giải thích nhất cho ban giám đốc.',
              explain: 'Dễ giải thích nhưng không kiểm soát mix: chỉ số thô tăng 13,1% trong khi chuỗi tham chiếu chỉ tăng khoảng 3,8%. Một chỉ số "chính thức" bị phản biện ngay lần đầu công bố.',
            },
          ],
        },
      ],
    },
    {
      id: 'analysis-data',
      kind: 'analysis',
      title: 'Bước 1 — Dữ liệu đầu vào: làm sạch và hiểu giá rao',
      blocks: [
        {
          kind: 'table',
          title: 'Phễu làm sạch tin rao quý T3/26',
          columns: [
            { key: 'step', label: 'Bước' },
            { key: 'rule', label: 'Quy tắc' },
            { key: 'delta', label: 'Loại bỏ', align: 'right' },
            { key: 'left', label: 'Còn lại', align: 'right' },
          ],
          rows: [
            { step: 'Tin thô', rule: '—', delta: '—', left: '48.000' },
            { step: 'Gộp tin trùng', rule: 'Cùng địa chỉ chuẩn hóa + diện tích ±3% + người đăng liên quan', delta: '−6.240 (13,0%)', left: '41.760' },
            { step: 'Loại tin ảo/hết hiệu lực', rule: 'Giá lệch > 40% so với tin tương đồng, không liên hệ được, không cập nhật > 60 ngày', delta: '−3.360 (7,0%)', left: '38.400' },
            { step: 'Loại diện tích lỗi', rule: 'Giá/m² ngoài ngưỡng hợp lý, diện tích khác giấy tờ đính kèm', delta: '−1.200 (2,5%)', left: '37.200' },
          ],
          highlight: [{ row: 3, tone: 'positive' }],
          caption: '37.200 / 48.000 = 77,5%. Mỗi quy tắc ghi thành mã có test, vì đây là phần quyết định chỉ số "sạch" hay không.',
        },
        {
          kind: 'chart',
          title: 'Chênh lệch giá rao so với giá thẩm định theo phân khúc',
          type: 'bar',
          xKey: 'segment',
          unit: '%',
          series: [{ key: 'gap', label: 'Giá rao cao hơn giá thẩm định' }],
          data: [
            { segment: 'Căn hộ trung tâm', gap: 4.5 },
            { segment: 'Căn hộ vùng ven', gap: 8.0 },
            { segment: 'Nhà phố', gap: 6.5 },
            { segment: 'Đất nền', gap: 12.0 },
          ],
          caption: 'Mô phỏng từ mẫu hồ sơ có giá thẩm định. Khoảng cách này khác nhau theo phân khúc và thay đổi theo chu kỳ, nên không thể trừ một hằng số chung để "đổi giá rao thành giá giao dịch".',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Gọi tên đúng thứ đang đo',
          md: 'Dữ liệu là **giá rao**, không phải giá giao dịch. Chỉ số nên mang tên như *"Chỉ số giá rao đã hiệu chỉnh chất lượng"* và công bố kèm phép đối chiếu với giá thẩm định mỗi quý. Gọi nó là "giá thị trường" là hứa nhiều hơn dữ liệu cho phép.',
        },
        {
          kind: 'quiz',
          id: 'real-estate-index-methodology-q2',
          question: 'Phần tin ảo/hết hiệu lực (7,0%) nên xử lý thế nào trong quy trình chỉ số?',
          options: [
            {
              id: 'a',
              text: 'Xóa thủ công khi thấy bất thường để chỉ số trông hợp lý.',
              explain: 'Xóa theo cảm tính không lặp lại được và bị coi là chỉnh số. Mỗi lần khác người xử lý, kết quả sẽ khác.',
            },
            {
              id: 'b',
              text: 'Giữ nguyên, vì tin ảo cũng là một phần của thị trường rao bán.',
              explain: 'Tin ảo và tin hết hiệu lực không phản ánh giá nào có thể mua bán, đồng thời kéo chỉ số theo người đăng nhiều tin nhất.',
            },
            {
              id: 'c',
              text: 'Viết thành quy tắc định lượng có phiên bản, lưu lý do loại từng tin và theo dõi tỷ lệ loại theo quý như một chỉ báo chất lượng dữ liệu.',
              correct: true,
              explain: 'Đúng. Quy tắc tường minh giúp tái lập kết quả, kiểm toán được, và tỷ lệ loại tăng đột biến là tín hiệu sớm (ví dụ chiến dịch đăng tin hàng loạt) trước cả khi chỉ số bị lệch.',
            },
          ],
        },
      ],
    },
    {
      id: 'analysis-weights',
      kind: 'analysis',
      title: 'Bước 2 — Quyền số: ai được "nói nhiều" trong chỉ số tổng',
      blocks: [
        {
          kind: 'table',
          title: 'Hai cách đặt quyền số cho cùng bốn chỉ số phân khúc (T3/26)',
          columns: [
            { key: 'segment', label: 'Phân khúc' },
            { key: 'idx', label: 'Chỉ số phân khúc', align: 'right' },
            { key: 'wValue', label: 'Quyền số theo giá trị tồn kho', align: 'right' },
            { key: 'wListing', label: 'Quyền số theo số tin rao', align: 'right' },
          ],
          rows: [
            { segment: 'Căn hộ trung tâm', idx: '106', wValue: '34%', wListing: '30%' },
            { segment: 'Căn hộ vùng ven', idx: '101', wValue: '28%', wListing: '25%' },
            { segment: 'Nhà phố', idx: '104', wValue: '24%', wListing: '20%' },
            { segment: 'Đất nền', idx: '118', wValue: '14%', wListing: '25%' },
            { segment: 'Chỉ số tổng', idx: '—', wValue: '105,80', wListing: '107,35' },
          ],
          highlight: [{ row: 4, tone: 'warning' }],
          caption: 'Tổng quyền số mỗi cột đều 100%. Đất nền chiếm 25% số tin nhưng chỉ 14% giá trị tồn kho, nên quyền số theo tin rao thổi chỉ số lên 1,55 điểm.',
        },
        {
          kind: 'chart',
          title: 'Chỉ số thô, chỉ số hedonic và chuỗi tham chiếu (T1/25 = 100)',
          type: 'line',
          xKey: 'q',
          series: [
            { key: 'raw', label: 'Trung vị thô' },
            { key: 'hedonic', label: 'Hedonic (quyền số tồn kho)' },
            { key: 'ref', label: 'Giá thẩm định (tham chiếu)' },
          ],
          data: [
            { q: 'T1/25', raw: 100.0, hedonic: 100.0, ref: 100.0 },
            { q: 'T2/25', raw: 103.1, hedonic: 101.0, ref: 100.9 },
            { q: 'T3/25', raw: 106.3, hedonic: 102.3, ref: 102.0 },
            { q: 'T4/25', raw: 109.8, hedonic: 103.1, ref: 103.3 },
            { q: 'T1/26', raw: 112.3, hedonic: 104.4, ref: 104.2 },
            { q: 'T2/26', raw: 115.8, hedonic: 105.0, ref: 105.1 },
            { q: 'T3/26', raw: 120.2, hedonic: 105.8, ref: 105.9 },
          ],
          caption: 'Sai lệch tuyệt đối trung bình so với chuỗi tham chiếu: hedonic 0,14 điểm, trung vị thô 6,59 điểm. Phần chênh của chỉ số thô chủ yếu là mix: tỷ trọng tin ở phân khúc đắt tăng lên.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Quyền số theo giá trị, đổi theo chu kỳ cố định',
          md: 'Chỉ số mô tả **thị trường nhà ở**, nên quyền số phải theo *giá trị tồn kho* (hoặc giá trị giao dịch) chứ không theo số tin, vì số tin phản ánh độ hăng đăng tin hơn là quy mô thị trường. Cập nhật quyền số theo một lịch cố định (ví dụ mỗi năm, công bố trước) và dùng chỉ số móc xích để không gây bước nhảy.',
        },
      ],
    },
    {
      id: 'analysis-release',
      kind: 'analysis',
      title: 'Bước 3 — Độ trễ công bố và chính sách sửa số',
      blocks: [
        {
          kind: 'table',
          title: 'Lịch công bố ba tầng cho một chỉ số quý',
          columns: [
            { key: 'ver', label: 'Bản' },
            { key: 'when', label: 'Thời điểm' },
            { key: 'cover', label: 'Tin đã có', align: 'right' },
            { key: 'err', label: 'Sai lệch TB so với bản chốt', align: 'right' },
          ],
          rows: [
            { ver: 'Bản nhanh', when: 'Quý kết thúc + 10 ngày', cover: '70%', err: '0,60 điểm' },
            { ver: 'Bản 1', when: 'Quý kết thúc + 30 ngày', cover: '92%', err: '0,25 điểm' },
            { ver: 'Bản chốt', when: 'Quý kết thúc + 90 ngày', cover: '100%', err: '0' },
          ],
          caption: 'Đánh đổi: bản nhanh nhanh nhưng dễ sai; bản chốt đáng tin nhưng quá trễ để ra quyết định. Công bố cả ba, ghi rõ nhãn "sơ bộ" hoặc "chốt".',
        },
        {
          kind: 'table',
          title: 'Ba loại thay đổi và cách xử lý',
          columns: [
            { key: 'type', label: 'Loại thay đổi' },
            { key: 'example', label: 'Ví dụ' },
            { key: 'impact', label: 'Tác động lên quá khứ', align: 'right' },
            { key: 'action', label: 'Xử lý' },
          ],
          rows: [
            { type: 'Dữ liệu đến muộn', example: 'Tin bổ sung trong 90 ngày', impact: '≤ 0,25 điểm', action: 'Cập nhật ở bản 1 và bản chốt; không đổi phiên bản' },
            { type: 'Sửa lỗi dữ liệu', example: 'Sửa quy tắc diện tích', impact: '< 0,5 điểm', action: 'Phiên bản phụ (v2.0 → v2.1), ghi change log, chỉ sửa lại kỳ bị ảnh hưởng' },
            { type: 'Đổi phương pháp', example: 'Quyền số từ số tin sang giá trị tồn kho', impact: '1,55 điểm (T3/26)', action: 'Phiên bản chính (v1.0 → v2.0), tính lại toàn bộ lịch sử, chạy song song 2 quý rồi mới công bố' },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
        },
        {
          kind: 'formula',
          expression: 'Công bố lại lịch sử khi: max |chỉ số mới − chỉ số cũ| ≥ 0,5 điểm HOẶC thay đổi tăng trưởng YoY ≥ 0,3 điểm %',
          note: 'Ngưỡng đặt trước khi có số, để quyết định không phụ thuộc việc thay đổi đó "có lợi" hay "bất lợi" cho thông điệp. Dưới ngưỡng thì ghi chú; trên ngưỡng thì bắt buộc tính lại và nêu rõ trên trang công bố.',
        },
        {
          kind: 'quiz',
          id: 'real-estate-index-methodology-q3',
          question: 'Chuyển quyền số từ số tin sang giá trị tồn kho làm chỉ số T3/26 giảm từ 107,35 xuống 105,80 và đổi cả các quý trước. Nên làm gì?',
          options: [
            {
              id: 'a',
              text: 'Áp dụng quyền số mới từ quý này trở đi, giữ nguyên các quý cũ để khỏi gây xáo trộn.',
              explain: 'Chuỗi sẽ có bước nhảy do thay đổi phương pháp chứ không phải do giá. Người xem đọc nhầm đó thành thị trường giảm 1,55 điểm.',
            },
            {
              id: 'b',
              text: 'Tính lại toàn bộ lịch sử bằng quyền số mới, chạy song song hai quý, phát hành phiên bản chính kèm change log và bảng bridge giữa hai bản.',
              correct: true,
              explain: 'Đúng. Chênh lệch 1,55 điểm vượt ngưỡng 0,5 điểm nên bắt buộc công bố lại cả lịch sử. Chạy song song và bridge giúp đối tác tin rằng thay đổi là do phương pháp, không phải do ý muốn.',
            },
            {
              id: 'c',
              text: 'Không đổi, vì sửa số đã công bố sẽ làm mất uy tín chỉ số.',
              explain: 'Giữ một phương pháp đã biết là lệch để "bảo vệ uy tín" sẽ làm mất uy tín nặng hơn khi bị phát hiện. Sửa minh bạch, có quy tắc và ngưỡng là điều tạo uy tín cho chỉ số.',
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
          md: '**Đề xuất cho ban giám đốc:** công bố *"Chỉ số giá rao đã hiệu chỉnh chất lượng"* hằng quý, phương pháp hedonic, quyền số theo giá trị tồn kho, đối chiếu thẩm định mỗi quý, ba tầng bản nhanh/bản 1/bản chốt, và chính sách phiên bản có ngưỡng định lượng. Con số quý T3/26 là **105,8 (T1/25 = 100), +3,4% so với cùng kỳ**, không phải +13,1% như trung vị thô.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Viết tài liệu phương pháp luận v1: phạm vi, định nghĩa phân khúc, quy tắc làm sạch, mô hình hedonic, quyền số, lịch công bố, chính sách sửa số',
              owner: 'Analytics Lead + Data Science',
              metric: 'Tài liệu được duyệt và công khai',
              threshold: 'Trước kỳ công bố đầu tiên',
            },
            {
              action: 'Mã hóa quy tắc làm sạch có test tự động và báo cáo tỷ lệ loại theo lý do mỗi quý',
              owner: 'Data Engineering',
              metric: 'Tỷ lệ tin loại theo lý do (trùng, ảo, diện tích)',
              threshold: 'Cảnh báo khi một lý do lệch > 3 điểm % so với trung bình 4 quý',
            },
            {
              action: 'Đối chiếu chỉ số với giá thẩm định của ngân hàng đối tác mỗi quý và công bố kết quả',
              owner: 'Valuation Analyst',
              metric: 'Sai lệch tuyệt đối TB so với chuỗi tham chiếu',
              threshold: '≤ 0,5 điểm trong 4 quý liên tiếp',
            },
            {
              action: 'Vận hành quy trình phiên bản: change log, ngưỡng công bố lại, chạy song song và hội đồng duyệt thay đổi phương pháp',
              owner: 'Hội đồng chỉ số (Analytics, Product, Truyền thông)',
              metric: 'Thay đổi vượt ngưỡng mà không qua hội đồng',
              threshold: '0 trường hợp',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Vì sao đây là cách xử lý tối ưu',
          md: 'Phương pháp được chọn theo dữ liệu *thực có*, không theo độ "hàn lâm". Mọi lựa chọn có thể kiểm tra: hedonic bám chuỗi tham chiếu (0,14 điểm) còn chỉ số thô lệch 6,59 điểm. Quy tắc sửa số đặt trước ngưỡng nên không ai nghi ngờ chuyện chỉnh số theo ý muốn. Trade-off chấp nhận: chỉ số kém nhanh hơn trung vị (cần bản nhanh sơ bộ) và có chi phí vận hành quy trình phiên bản.',
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
              title: 'Gọi giá rao là "giá thị trường"',
              why: 'Giá rao cao hơn giá thẩm định từ 4,5% đến 12,0% và độ chênh khác nhau theo phân khúc, thời điểm. Gọi sai tên khiến người dùng ra quyết định trên giả định sai.',
              instead: 'Đặt tên đúng phạm vi, công bố phép đối chiếu với thẩm định/giao dịch mỗi quý.',
            },
            {
              title: 'Quyền số theo số tin',
              why: 'Phân khúc đăng nhiều tin nhưng nhỏ về giá trị chi phối chỉ số (đất nền 25% tin nhưng 14% giá trị).',
              instead: 'Dùng quyền số theo giá trị tồn kho/giao dịch, cập nhật theo lịch cố định.',
            },
            {
              title: 'Sửa quy tắc âm thầm hoặc đổi phương pháp mà không tính lại lịch sử',
              why: 'Chuỗi có bước nhảy giả tạo, và mỗi lần sửa số không có quy tắc là một lần mất niềm tin.',
              instead: 'Phiên bản hóa, ngưỡng công bố lại đặt trước, chạy song song và có bảng bridge.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Chỉ số giá là một bộ quy tắc gồm phương pháp, dữ liệu, quyền số, lịch công bố, chính sách sửa số; chọn phương pháp theo dữ liệu thực có và đối chiếu với chuỗi tham chiếu.',
    'Làm sạch tin rao bằng quy tắc định lượng có phiên bản, đặt tên đúng thứ đang đo (giá rao, không phải giá giao dịch), quyền số theo giá trị chứ không theo số tin.',
    'Đặt trước ngưỡng công bố lại lịch sử; thay đổi phương pháp thì phiên bản chính, tính lại toàn bộ, chạy song song và có bridge.',
  ],
  references: [
    {
      title: 'Handbook on Residential Property Price Indices (RPPIs)',
      publisher: 'Eurostat',
      url: 'https://ec.europa.eu/eurostat/web/products-manuals-and-guidelines/-/ks-ra-12-022',
      note: 'Hướng dẫn quốc tế do Eurostat phối hợp ILO, IMF, OECD, UNECE, World Bank soạn về phương pháp và thực hành tốt khi lập chỉ số giá nhà ở (trang giới thiệu; nội dung chi tiết nằm trong bản PDF của sổ tay).',
    },
    {
      title: 'Residential property price statistics',
      publisher: 'Bank for International Settlements (BIS)',
      url: 'https://data.bis.org/topics/RPP',
      note: 'Cho thấy các chuỗi giá nhà khác nhau đáng kể giữa các nước về loại bất động sản, vùng phủ, phương pháp tính và hiệu chỉnh mùa vụ; nhiều nước hiệu chỉnh theo kích cỡ và chất lượng.',
    },
    {
      title: 'House Price Index (HPI)',
      publisher: 'Federal Housing Finance Agency (FHFA)',
      url: 'https://www.fhfa.gov/data/hpi',
      note: 'Ví dụ thực tế về chỉ số repeat-sales có quyền số, công bố theo nhiều cấp địa lý; dùng để so sánh với cách tiếp cận hedonic.',
    },
  ],
}
