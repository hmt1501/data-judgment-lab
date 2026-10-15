import type { CaseStudy } from '../types'

/*
 * Số liệu mock của "sàn X" (mã hư cấu), đã kiểm tra khớp nhau (tỷ đ):
 *   Phiên 10: khối ngoại mua 4.200 · bán 6.000 → ròng −1.800 · giá trị toàn thị trường 24.000 → ròng/thị trường = −7,5%
 *   Theo mã: XXX (giao dịch thỏa thuận, cơ cấu quỹ ETF) −1.100 · YYY −350 · ZZZ −250 · các mã khác −100 → tổng −1.800
 *   9 phiên trước (ròng): +120, −80, +200, +50, −150, +90, −60, +140, +30 → tổng +340
 *   10 phiên: 340 − 1.800 = −1.460 · loại bỏ giao dịch cơ cấu XXX (−1.100): phiên 10 = −700, 10 phiên = −360
 */
export const foreignNetFlowReading: CaseStudy = {
  id: 'foreign-net-flow-reading',
  title: 'Khối ngoại bán ròng 1.800 tỷ trong một phiên: đọc thế nào cho đúng',
  domain: 'securities',
  level: 'fresher',
  minutes: 9,
  skills: ['liquidity', 'segmentation', 'data-quality'],
  question: 'Khối ngoại bán ròng 1.800 tỷ đ trong một phiên. Có thể suy ra họ đang rút khỏi thị trường không, và cần nhìn thêm những lát cắt nào?',
  summary: 'Đọc mua ròng/bán ròng theo giá trị, tách theo mã và loại giao dịch, đặt vào chuỗi nhiều phiên trước khi kết luận về xu hướng.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Tiêu đề bản tin: *"Khối ngoại bán ròng kỷ lục 1.800 tỷ đồng."* Nhiều khách hàng nhắn hỏi có nên bán theo. Bạn là analyst và cần đọc xem con số này nói lên điều gì, và điều gì nó chưa nói.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Sàn X, các mã XXX/YYY/ZZZ và mọi con số đều là **giả định**. Khái niệm mua/bán ròng, giao dịch thỏa thuận, cơ cấu quỹ ETF là thật.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Khối ngoại mua', value: '4.200 tỷ đ' },
            { label: 'Khối ngoại bán', value: '6.000 tỷ đ' },
            { label: 'Mua/bán ròng', value: '−1.800 tỷ đ', delta: '−7,5% giá trị thị trường', tone: 'negative' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: ròng là hiệu, không phải xu hướng',
      blocks: [
        {
          kind: 'formula',
          expression: 'Mua/bán ròng = Giá trị mua − Giá trị bán · Tỷ lệ so với thị trường = Ròng ÷ Tổng giá trị giao dịch toàn thị trường',
          note: 'Ròng đọc theo **giá trị** (tiền), không theo khối lượng. Một con số ròng lớn có thể đến từ một mã hoặc một giao dịch duy nhất.',
        },
        {
          kind: 'quiz',
          id: 'foreign-net-flow-reading-q1',
          question: 'Con số nào giúp đặt mức bán ròng 1.800 tỷ vào đúng tỷ lệ?',
          options: [
            { id: 'a', text: 'Chia cho tổng giá trị giao dịch toàn thị trường: 1.800 ÷ 24.000 = 7,5%.', correct: true, explain: 'Đúng. Số tuyệt đối khó cảm nhận; tỷ lệ so với toàn thị trường cho biết mức độ ảnh hưởng. Cũng nên so với lịch sử các phiên trước.' },
            { id: 'b', text: 'Chia cho giá một cổ phiếu để biết bán bao nhiêu cổ phiếu.', explain: 'Mỗi mã có giá khác nhau; phép chia này không cho thông tin gì đáng tin.' },
            { id: 'c', text: 'Không cần chia, vì mọi số liệu ròng đều so sánh được.', explain: 'Cùng 1.800 tỷ nhưng thị trường 24.000 tỷ hay 60.000 tỷ cho ý nghĩa rất khác.' },
          ],
        },
      ],
    },
    {
      id: 'by-stock',
      kind: 'analysis',
      title: 'Bước 1 — Phân rã theo mã và loại giao dịch',
      blocks: [
        {
          kind: 'table',
          title: 'Bán ròng phiên 10 theo mã (tỷ đ)',
          columns: [
            { key: 'item', label: 'Mã' },
            { key: 'net', label: 'Ròng', align: 'right' },
            { key: 'share', label: 'Tỷ trọng', align: 'right' },
            { key: 'note', label: 'Ghi chú' },
          ],
          rows: [
            { item: 'XXX', net: '−1.100', share: '61,1%', note: 'Giao dịch thỏa thuận, trùng ngày cơ cấu danh mục quỹ ETF' },
            { item: 'YYY', net: '−350', share: '19,4%', note: 'Khớp lệnh thông thường' },
            { item: 'ZZZ', net: '−250', share: '13,9%', note: 'Khớp lệnh thông thường' },
            { item: 'Các mã khác', net: '−100', share: '5,6%', note: 'Gộp nhiều mã' },
            { item: 'Tổng', net: '−1.800', share: '100%', note: '' },
          ],
          highlight: [{ row: 0, tone: 'warning' }],
          caption: '1.100 ÷ 1.800 = 61,1%. Một mã giao dịch thỏa thuận chiếm hơn 60% con số bán ròng.',
        },
        {
          kind: 'text',
          md: 'Quỹ ETF phải mua bán để danh mục khớp với chỉ số mà nó bám (ví dụ khi chỉ số đổi thành phần hoặc tỷ trọng). Giao dịch này thường là **cơ chế**, không phản ánh quan điểm của người quản lý về triển vọng thị trường. Cần tra lịch cơ cấu do tổ chức công bố để nhận diện.',
        },
        {
          kind: 'quiz',
          id: 'foreign-net-flow-reading-q2',
          question: 'Khi 61% bán ròng đến từ một giao dịch thỏa thuận mang tính cơ cấu, nên làm gì đầu tiên?',
          options: [
            { id: 'a', text: 'Loại bỏ phần cơ cấu rồi xem phần còn lại và chuỗi nhiều phiên.', correct: true, explain: 'Đúng. Phần còn lại (−700 tỷ) mới phản ánh quyết định giao dịch thông thường, và vẫn cần so với các phiên khác.' },
            { id: 'b', text: 'Báo ngay khách hàng rằng khối ngoại đang rút vốn.', explain: 'Một phần lớn con số là giao dịch cơ cấu, chưa chứng minh quyết định rút vốn.' },
            { id: 'c', text: 'Bỏ qua phiên này vì dữ liệu sai.', explain: 'Dữ liệu không sai; chỉ cần đọc đúng ý nghĩa của từng thành phần.' },
          ],
        },
      ],
    },
    {
      id: 'series',
      kind: 'analysis',
      title: 'Bước 2 — Đặt vào chuỗi nhiều phiên',
      blocks: [
        {
          kind: 'chart',
          title: 'Mua/bán ròng của khối ngoại, 10 phiên gần nhất (tỷ đ)',
          type: 'bar',
          xKey: 'session',
          unit: ' tỷ đ',
          series: [{ key: 'net', label: 'Mua/bán ròng' }],
          data: [
            { session: 'P1', net: 120 },
            { session: 'P2', net: -80 },
            { session: 'P3', net: 200 },
            { session: 'P4', net: 50 },
            { session: 'P5', net: -150 },
            { session: 'P6', net: 90 },
            { session: 'P7', net: -60 },
            { session: 'P8', net: 140 },
            { session: 'P9', net: 30 },
            { session: 'P10', net: -1800 },
          ],
          caption: '9 phiên đầu cộng lại +340 tỷ (mua ròng nhẹ). Phiên 10 là điểm ngoại lai.',
        },
        {
          kind: 'table',
          title: 'Tổng 10 phiên theo hai cách đọc',
          columns: [
            { key: 'view', label: 'Cách đọc' },
            { key: 'p10', label: 'Phiên 10', align: 'right' },
            { key: 'sum', label: 'Tổng 10 phiên', align: 'right' },
          ],
          rows: [
            { view: 'Gồm giao dịch cơ cấu', p10: '−1.800', sum: '−1.460' },
            { view: 'Loại giao dịch cơ cấu XXX (−1.100)', p10: '−700', sum: '−360' },
          ],
          caption: 'Loại phần cơ cấu, mức bán ròng 10 phiên giảm từ 1.460 xuống 360 tỷ đ. Vẫn là bán ròng nhưng kém nghiêm trọng nhiều.',
        },
        {
          kind: 'quiz',
          id: 'foreign-net-flow-reading-q3',
          question: 'Kết luận nào phù hợp nhất với dữ liệu?',
          options: [
            { id: 'a', text: 'Khối ngoại bán ròng mạnh, xu hướng rút vốn đã rõ.', explain: 'Một phiên ngoại lai, trong đó phần lớn là giao dịch cơ cấu, chưa tạo thành xu hướng.' },
            { id: 'b', text: 'Phiên 10 bị chi phối bởi giao dịch cơ cấu; theo dõi thêm vài phiên và các mã khớp lệnh thông thường.', correct: true, explain: 'Đúng. 9 phiên trước mua ròng nhẹ, phần ngoài cơ cấu của phiên 10 chỉ −700 tỷ; cần thêm dữ liệu trước khi nói về xu hướng.' },
            { id: 'c', text: 'Khối ngoại bán ròng chứng tỏ giá sẽ giảm tiếp.', explain: 'Dòng vốn ngoại không tự quyết định giá; không có bằng chứng nhân quả ở đây.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: cách báo cáo dòng vốn khối ngoại',
      blocks: [
        {
          kind: 'text',
          md: '**Cách viết:** "Khối ngoại bán ròng 1.800 tỷ (7,5% giá trị thị trường), trong đó 1.100 tỷ là giao dịch thỏa thuận trùng ngày cơ cấu quỹ ETF. Phần còn lại −700 tỷ; 10 phiên qua tổng ròng −360 tỷ nếu loại phần cơ cấu."',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Báo cáo mua/bán ròng cùng tỷ lệ so với thị trường và tách giao dịch thỏa thuận', owner: 'Analyst thị trường', metric: 'Ròng ÷ giá trị thị trường, ròng ngoài thỏa thuận', threshold: 'Luôn hiển thị cả hai' },
            { action: 'Lập lịch cơ cấu quỹ ETF/chỉ số để gắn nhãn các phiên đặc biệt', owner: 'Analyst thị trường', metric: 'Số phiên có cơ cấu', threshold: 'Gắn nhãn trước phiên' },
            { action: 'Dùng chuỗi tối thiểu 10 phiên, không kết luận xu hướng từ một phiên', owner: 'Trưởng nghiên cứu', metric: 'Tổng ròng 10 phiên (đã loại cơ cấu)', threshold: 'Chỉ nói "xu hướng" khi cùng dấu ≥ 5 phiên liên tiếp' },
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
            { title: 'Suy ra xu hướng từ một phiên', why: 'Một phiên ngoại lai có thể do sự kiện cơ cấu.', instead: 'Đọc chuỗi nhiều phiên và loại giao dịch đặc biệt.' },
            { title: 'Đọc ròng như thể đó là mọi giao dịch', why: 'Ròng là hiệu; một mã có thể lấn át tất cả các mã khác.', instead: 'Tách theo mã và theo loại giao dịch.' },
            { title: 'Coi dòng vốn ngoại là nguyên nhân của giá', why: 'Hai chuyện cùng xảy ra không chứng minh cái này gây ra cái kia.', instead: 'Dùng dòng vốn như một dữ kiện tham khảo, không phải lời giải thích duy nhất.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Mua/bán ròng là hiệu giá trị mua và bán; đặt nó vào tỷ lệ so với thị trường.',
    'Tách theo mã và loại giao dịch (thỏa thuận, cơ cấu ETF) trước khi diễn giải ý định của khối ngoại.',
    'Một phiên không tạo xu hướng; dùng chuỗi nhiều phiên đã loại sự kiện đặc biệt.',
  ],
  references: [
    { title: 'Exchange-traded fund', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Exchange-traded_fund', note: 'ETF vận hành thế nào và vì sao phải cơ cấu danh mục theo chỉ số.' },
    { title: 'Foreign portfolio investment', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Foreign_portfolio_investment', note: 'Khái niệm đầu tư gián tiếp nước ngoài vào chứng khoán.' },
    { title: 'Sàn giao dịch chứng khoán TP.HCM (HOSE)', publisher: 'HOSE', url: 'https://www.hsx.vn', note: 'Trang chủ sàn; nguồn dữ liệu và thông tin giao dịch của nhà đầu tư nước ngoài.' },
  ],
}
