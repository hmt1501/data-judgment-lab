import type { CaseStudy } from '../types'

/*
 * Số liệu mock của "Công ty A" (hư cấu), đã kiểm tra khớp nhau:
 *   Trước: giá 100.000 đ × 10 triệu cp = vốn hóa 1.000 tỷ · lợi nhuận 50 tỷ → EPS 5.000 → P/E 20
 *   Chia tách 1:2: 20 triệu cp · giá tham chiếu 50.000 · vốn hóa 1.000 tỷ · EPS 2.500 → P/E 20
 *   Thưởng 20%: 12 triệu cp · giá điều chỉnh 100.000 ÷ 1,2 = 83.333 đ · vốn hóa 12 × 83.333 = 1.000 tỷ · EPS 4.167
 *   Nhà đầu tư 1.000 cp: 100 triệu → 2.000 cp × 50.000 = 100 triệu (chia tách) · 1.200 cp × 83.333 ≈ 100 triệu (thưởng)
 *   Giá lịch sử (nghìn đ): thô 80, 90, 100, 50, 55 · đã điều chỉnh chia tách 40, 45, 50, 50, 55
 *   Giá 4 quý trước 80 nghìn: thô → nay 50 nghìn = −37,5% (sai) · điều chỉnh 40 → 50 = +25,0% (đúng)
 */
export const stockSplitBonusSharesPrice: CaseStudy = {
  id: 'stock-split-bonus-shares-price',
  title: 'Giá cổ phiếu "giảm một nửa" sau chia tách: vốn hóa không đổi',
  domain: 'securities',
  level: 'fresher',
  minutes: 9,
  skills: ['valuation', 'data-quality', 'metric-decomposition'],
  question: 'Giá cổ phiếu trên bảng điện tụt từ 100.000 xuống 50.000 đ sau chia tách. Nhà đầu tư có mất một nửa tài sản không, và nên đọc lịch sử giá thế nào?',
  summary: 'Phân biệt thay đổi giá do hành động doanh nghiệp (chia tách, cổ phiếu thưởng) với biến động thật; điều chỉnh giá lịch sử, EPS và vốn hóa.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Một người bạn mới đầu tư nhắn: *"Cổ phiếu Công ty A trên biểu đồ tụt từ 100.000 xuống 50.000 trong một ngày! Có tin xấu gì không? Mình có nên cắt lỗ?"* Bạn mở thông báo của công ty: **chia tách cổ phiếu theo tỷ lệ 1:2**, mỗi cổ phiếu cũ thành 2 cổ phiếu mới.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Công ty A và các con số là **giả định**, không phải khuyến nghị đầu tư. Khái niệm chia tách, cổ phiếu thưởng, vốn hóa là thật. Thủ tục và quy định cụ thể trên sàn Việt Nam cần đối chiếu văn bản hiện hành.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Giá trước', value: '100.000 đ' },
            { label: 'Giá sau chia tách', value: '50.000 đ', delta: '−50% trên bảng', tone: 'warning' },
            { label: 'Vốn hóa', value: '1.000 tỷ đ', delta: 'không đổi', tone: 'neutral' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: cắt bánh thành nhiều miếng',
      blocks: [
        {
          kind: 'text',
          md: 'Chia tách giống cắt một chiếc bánh thành nhiều miếng hơn: số miếng tăng, giá mỗi miếng giảm, nhưng chiếc bánh (vốn hóa) không đổi. Cổ phiếu thưởng cũng vậy: cổ đông nhận thêm cổ phiếu miễn phí, giá được điều chỉnh giảm tương ứng.',
        },
        {
          kind: 'formula',
          expression: 'Vốn hóa = Giá × Số cổ phiếu lưu hành · Hệ số điều chỉnh = Số cp mới ÷ Số cp cũ · Giá điều chỉnh = Giá cũ ÷ Hệ số',
          note: 'Chia tách 1:2 → hệ số 2; thưởng 20% (100 cổ phiếu nhận 20) → hệ số 1,2. Giá lịch sử trước ngày thực hiện phải chia cho hệ số mới so sánh được với giá hiện tại.',
        },
        {
          kind: 'quiz',
          id: 'stock-split-bonus-shares-price-q1',
          question: 'Nhà đầu tư giữ 1.000 cp A ở 100.000 đ (100 triệu đ). Sau chia tách 1:2, tài sản của họ là bao nhiêu?',
          options: [
            { id: 'a', text: '2.000 cp × 50.000 đ = 100 triệu đ, không đổi.', correct: true, explain: 'Đúng. Số cổ phiếu gấp đôi, giá giảm một nửa; giá trị khoản đầu tư không thay đổi do chính việc chia tách.' },
            { id: 'b', text: '1.000 cp × 50.000 đ = 50 triệu đ, mất một nửa.', explain: 'Quên mất số cổ phiếu được nhân đôi. Giá giảm nhưng số lượng tăng tương ứng.' },
            { id: 'c', text: '2.000 cp × 100.000 đ = 200 triệu đ, được lãi gấp đôi.', explain: 'Giá không giữ ở mức cũ. Không có tiền nào được tạo ra bởi chia tách.' },
          ],
        },
      ],
    },
    {
      id: 'adjust',
      kind: 'analysis',
      title: 'Bước 1 — Điều chỉnh lịch sử giá',
      blocks: [
        {
          kind: 'chart',
          title: 'Giá thô vs giá đã điều chỉnh chia tách (nghìn đ)',
          type: 'line',
          xKey: 'q',
          unit: ' nghìn đ',
          marker: { x: 'Q4', label: 'Chia tách 1:2' },
          series: [
            { key: 'raw', label: 'Giá thô trên bảng' },
            { key: 'adj', label: 'Giá đã điều chỉnh' },
          ],
          data: [
            { q: 'Q1', raw: 80, adj: 40 },
            { q: 'Q2', raw: 90, adj: 45 },
            { q: 'Q3', raw: 100, adj: 50 },
            { q: 'Q4', raw: 50, adj: 50 },
            { q: 'Q5', raw: 55, adj: 55 },
          ],
          caption: 'Đường thô rơi đột ngột từ 100 xuống 50 vào Q4; đường điều chỉnh liên tục và tăng từ 40 lên 55.',
        },
        {
          kind: 'table',
          title: 'Lợi suất 4 quý: hai cách đọc',
          columns: [
            { key: 'view', label: 'Cách đọc' },
            { key: 'from', label: 'Giá Q1', align: 'right' },
            { key: 'to', label: 'Giá hiện tại (Q4)', align: 'right' },
            { key: 'chg', label: 'Thay đổi', align: 'right' },
          ],
          rows: [
            { view: 'Giá thô', from: '80.000', to: '50.000', chg: '−37,5% (sai)' },
            { view: 'Giá điều chỉnh', from: '40.000', to: '50.000', chg: '+25,0% (đúng)' },
          ],
          highlight: [
            { row: 0, tone: 'negative' },
            { row: 1, tone: 'positive' },
          ],
          caption: '50.000 ÷ 80.000 − 1 = −37,5% (sai); 50.000 ÷ 40.000 − 1 = +25% (đúng, vì 80.000 đã chia cho hệ số 2).',
        },
        {
          kind: 'quiz',
          id: 'stock-split-bonus-shares-price-q2',
          question: 'Phần mềm vẽ biểu đồ dùng giá thô. Tác hại lớn nhất là gì?',
          options: [
            { id: 'a', text: 'Biểu đồ có "bậc thang" giả, làm lợi suất và biến động bị tính sai.', correct: true, explain: 'Đúng. Mức rơi 50% được coi là biến động thật, làm sai lợi suất, độ biến động và tín hiệu kỹ thuật.' },
            { id: 'b', text: 'Không có tác hại vì giá là giá.', explain: 'Giá thô không so sánh được qua ngày thực hiện quyền.' },
            { id: 'c', text: 'Chỉ ảnh hưởng thẩm mỹ biểu đồ.', explain: 'Còn ảnh hưởng mọi phép tính lợi suất, độ lệch chuẩn, tương quan dựa trên chuỗi giá.' },
          ],
        },
      ],
    },
    {
      id: 'per-share',
      kind: 'analysis',
      title: 'Bước 2 — Chỉ tiêu trên mỗi cổ phiếu cũng phải điều chỉnh',
      blocks: [
        {
          kind: 'table',
          title: 'Chia tách 1:2 và thưởng 20% (lợi nhuận 50 tỷ đ)',
          columns: [
            { key: 'item', label: 'Chỉ tiêu' },
            { key: 'base', label: 'Ban đầu', align: 'right' },
            { key: 'split', label: 'Chia tách 1:2', align: 'right' },
            { key: 'bonus', label: 'Thưởng 20%', align: 'right' },
          ],
          rows: [
            { item: 'Số cổ phiếu (triệu)', base: '10,0', split: '20,0', bonus: '12,0' },
            { item: 'Giá (đ)', base: '100.000', split: '50.000', bonus: '83.333' },
            { item: 'Vốn hóa (tỷ đ)', base: '1.000', split: '1.000', bonus: '1.000' },
            { item: 'EPS (đ)', base: '5.000', split: '2.500', bonus: '4.167' },
            { item: 'P/E', base: '20,0', split: '20,0', bonus: '20,0' },
          ],
          caption: 'Giá và EPS cùng chia cho hệ số, nên P/E và vốn hóa không đổi. EPS "giảm" ở đây chỉ là điều chỉnh, không phải suy yếu kinh doanh.',
        },
        {
          kind: 'quiz',
          id: 'stock-split-bonus-shares-price-q3',
          question: 'EPS của năm trước là 5.000 đ, sau chia tách 1:2 công ty công bố EPS năm nay 2.800 đ. Nên so sánh thế nào?',
          options: [
            { id: 'a', text: 'EPS giảm 44% từ 5.000 xuống 2.800.', explain: 'So sánh trực tiếp bỏ qua chia tách, là so táo với nửa quả táo.' },
            { id: 'b', text: 'Đưa EPS cũ về cùng cơ sở: 5.000 ÷ 2 = 2.500; năm nay 2.800 là tăng 12%.', correct: true, explain: 'Đúng. Điều chỉnh EPS lịch sử theo hệ số rồi mới so sánh: 2.800 ÷ 2.500 − 1 = +12%.' },
            { id: 'c', text: 'Không thể so sánh, phải chờ năm sau.', explain: 'Có thể so sánh ngay nếu điều chỉnh về cùng số cổ phiếu quy đổi.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: cách đọc khi có chia tách/cổ phiếu thưởng',
      blocks: [
        {
          kind: 'text',
          md: '**Trả lời bạn:** "Không có tin xấu. Mỗi cổ phiếu cũ thành 2 cổ phiếu mới, nên giá giảm một nửa. Bạn có 2.000 cổ phiếu × 50.000 đ = 100 triệu, đúng bằng trước. Hãy xem biểu đồ giá điều chỉnh: giá thật tăng 25% trong 4 quý."',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Dùng chuỗi giá đã điều chỉnh cho mọi phép tính lợi suất và biểu đồ', owner: 'Analyst dữ liệu', metric: 'Chuỗi giá điều chỉnh', threshold: 'Không có bậc thang vào ngày thực hiện quyền' },
            { action: 'Đọc vốn hóa và P/E thay vì giá tuyệt đối khi đánh giá "rẻ hay đắt"', owner: 'Analyst', metric: 'Vốn hóa, P/E', threshold: 'So sánh cùng cơ sở' },
            { action: 'Điều chỉnh EPS và cổ tức/cp các năm trước khi có sự kiện', owner: 'Analyst', metric: 'EPS điều chỉnh', threshold: 'Cùng số cổ phiếu quy đổi' },
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
            { title: 'Coi giá thấp là rẻ', why: 'Giá tuyệt đối phụ thuộc số cổ phiếu. Cổ phiếu 50.000 đ sau chia tách không rẻ hơn cổ phiếu 100.000 đ trước đó.', instead: 'Dùng P/E, vốn hóa, giá trị doanh nghiệp.' },
            { title: 'Tin rằng chia tách tạo giá trị', why: 'Chia tách không tạo thêm tiền; chỉ đổi số lượng và giá mỗi cổ phiếu.', instead: 'Đánh giá doanh nghiệp theo lợi nhuận và dòng tiền.' },
            { title: 'So sánh số liệu trước và sau sự kiện mà không điều chỉnh', why: 'Giá, EPS, cổ tức/cp bị thay đổi cơ học.', instead: 'Điều chỉnh về cùng cơ sở trước khi so sánh.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Chia tách và cổ phiếu thưởng đổi số lượng và giá mỗi cổ phiếu, không đổi vốn hóa hay giá trị khoản đầu tư.',
    'Giá, EPS, cổ tức/cp lịch sử phải chia cho hệ số điều chỉnh trước khi so sánh.',
    'Đánh giá rẻ/đắt bằng vốn hóa và P/E, không bằng mức giá trên bảng.',
  ],
  references: [
    { title: 'Stock split', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Stock_split', note: 'Chia tách cổ phiếu là gì, tác động lên giá và số lượng cổ phiếu.' },
    { title: 'Stock dividend', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Stock_dividend', note: 'Cổ tức/cổ phiếu thưởng bằng cổ phiếu và cách điều chỉnh.' },
    { title: 'Market capitalization', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Market_capitalization', note: 'Định nghĩa vốn hóa thị trường = giá × số cổ phiếu.' },
  ],
}
