import type { CaseStudy } from '../types'

/*
 * Số liệu mock của cổ phiếu "Công ty A" (hư cấu), đã kiểm tra khớp nhau:
 *   Giá 50.000 đ · cổ tức tiền mặt 4.000 đ/cp → tỷ suất cổ tức 4.000 ÷ 50.000 = 8% · EPS 5.000 → tỷ lệ chi trả 80%
 *   Ngày giao dịch không hưởng quyền: giá tham chiếu 50.000 − 4.000 = 46.000 · đóng cửa 45.500
 *   So với đóng cửa cũ 50.000: −4.500 (−9,0%) · so với giá tham chiếu đã điều chỉnh: −500 (−1,09%)
 *   Tổng lợi suất = (45.500 + 4.000) ÷ 50.000 − 1 = −1,0% · giữ 1.000 cp: giá trị 50 → 45,5 triệu + tiền cổ tức 4 triệu = 49,5 triệu
 *   Tỷ suất khi giá đổi (cùng cổ tức 4.000): giá 40.000 → 10% · 50.000 → 8% · 80.000 → 5%
 */
export const dividendYieldExDatePriceAdjust: CaseStudy = {
  id: 'dividend-yield-ex-date-price-adjust',
  title: 'Cổ tức 8% nhưng giá giảm ngay sau ngày chốt: lỗ hay không?',
  domain: 'securities',
  level: 'fresher',
  minutes: 9,
  skills: ['valuation', 'metric-definition', 'metric-decomposition'],
  question: 'Cổ phiếu trả cổ tức tiền mặt, tỷ suất 8%, nhưng giá trên bảng điện giảm gần 10% ngay ngày giao dịch không hưởng quyền. Nhà đầu tư lỗ thật không, và tỷ suất 8% đáng tin tới đâu?',
  summary: 'Đọc tỷ suất cổ tức (tử số, mẫu số), hiểu vì sao giá được điều chỉnh vào ngày không hưởng quyền, và đo lợi suất tổng thay vì chỉ nhìn giá.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn đang tư vấn cho một nhà đầu tư mới. Anh ta mua 1.000 cổ phiếu **Công ty A** ở giá 50.000 đ vì thấy báo chí viết *"cổ tức tiền mặt 4.000 đ/cp, tỷ suất 8%"*. Sáng ngày giao dịch không hưởng quyền, giá đóng cửa còn 45.500 đ, và anh nhắn: *"Mới nhận cổ tức đã lỗ gần 10%!"*',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Công ty A và các con số đều là **giả định** để học cách đọc, không phải khuyến nghị đầu tư. Thuế và phí giao dịch được bỏ qua cho đơn giản. Quy chế cụ thể của từng sàn (ngày chốt, cách tính giá tham chiếu) cần đối chiếu văn bản hiện hành.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Giá trước ngày không hưởng quyền', value: '50.000 đ' },
            { label: 'Cổ tức tiền mặt', value: '4.000 đ/cp', delta: 'tỷ suất 8%', tone: 'positive' },
            { label: 'Giá đóng cửa ngày không hưởng quyền', value: '45.500 đ', delta: '−9,0% so với đóng cửa cũ', tone: 'negative' },
          ],
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: tỷ suất cổ tức và giá điều chỉnh',
      blocks: [
        {
          kind: 'formula',
          expression: 'Tỷ suất cổ tức = Cổ tức/cp (12 tháng) ÷ Giá hiện tại · Giá tham chiếu ngày không hưởng quyền = Giá đóng cửa trước đó − Cổ tức tiền mặt/cp',
          note: 'Từ ngày không hưởng quyền, người mua mới không nhận được cổ tức nên cổ phiếu "rẻ đi" đúng bằng phần tiền sẽ được trả cho cổ đông cũ. Tiền không biến mất, nó chuyển từ giá sang tài khoản tiền.',
        },
        {
          kind: 'quiz',
          id: 'dividend-yield-ex-date-price-adjust-q1',
          question: 'Giá đóng cửa trước đó là 50.000 đ, cổ tức 4.000 đ/cp. Giá tham chiếu ngày không hưởng quyền hợp lý là bao nhiêu?',
          options: [
            { id: 'a', text: '50.000 đ, vì cổ tức không liên quan tới giá.', explain: 'Cổ tức tiền mặt rời khỏi công ty nên giá trị mỗi cổ phiếu giảm tương ứng. Nếu giữ nguyên giá, người mua mới được hưởng lợi không có thật.' },
            { id: 'b', text: '46.000 đ.', correct: true, explain: 'Đúng. 50.000 − 4.000 = 46.000. Đây là mốc để so sánh biến động trong ngày, không phải 50.000.' },
            { id: 'c', text: '54.000 đ, vì có cổ tức nên giá phải tăng.', explain: 'Ngược lại. Phần giá trị đã được trả ra thành tiền mặt cho cổ đông, nên giá giảm chứ không tăng.' },
          ],
        },
      ],
    },
    {
      id: 'adjust',
      kind: 'analysis',
      title: 'Bước 1 — Tách "giá giảm" thành điều chỉnh cổ tức và biến động thật',
      blocks: [
        {
          kind: 'table',
          title: 'Đọc lại biến động ngày không hưởng quyền',
          columns: [
            { key: 'item', label: 'Khoản mục' },
            { key: 'val', label: 'Giá trị', align: 'right' },
            { key: 'note', label: 'Ý nghĩa' },
          ],
          rows: [
            { item: 'Đóng cửa ngày trước', val: '50.000 đ', note: 'Mốc cũ' },
            { item: 'Giá tham chiếu đã điều chỉnh', val: '46.000 đ', note: '50.000 − 4.000' },
            { item: 'Đóng cửa ngày không hưởng quyền', val: '45.500 đ', note: 'Giá thật trên bảng' },
            { item: 'Thay đổi nhìn thô (so với 50.000)', val: '−4.500 đ (−9,0%)', note: 'Lẫn phần cổ tức' },
            { item: 'Thay đổi thật (so với 46.000)', val: '−500 đ (−1,09%)', note: 'Biến động do thị trường' },
            { item: 'Tổng lợi suất ngày = (45.500 + 4.000) ÷ 50.000 − 1', val: '−1,0%', note: 'Giá + cổ tức tiền mặt' },
          ],
          highlight: [
            { row: 3, tone: 'warning' },
            { row: 5, tone: 'negative' },
          ],
          caption: 'Nhà đầu tư giữ 1.000 cp: trước 50,0 triệu đ. Sau: cổ phiếu 45,5 triệu + tiền cổ tức 4,0 triệu = 49,5 triệu (−1,0%).',
        },
        {
          kind: 'chart',
          title: 'Giá thô vs giá đã điều chỉnh quanh ngày không hưởng quyền (nghìn đ)',
          type: 'line',
          xKey: 'day',
          unit: ' nghìn đ',
          marker: { x: 'Ngày không hưởng quyền', label: 'Không hưởng quyền' },
          series: [
            { key: 'raw', label: 'Giá thô trên bảng' },
            { key: 'adj', label: 'Giá đã điều chỉnh cổ tức' },
          ],
          data: [
            { day: 'T-2', raw: 50, adj: 46 },
            { day: 'T-1', raw: 50, adj: 46 },
            { day: 'Ngày không hưởng quyền', raw: 45.5, adj: 45.5 },
            { day: 'T+1', raw: 46, adj: 46 },
            { day: 'T+2', raw: 46.5, adj: 46.5 },
          ],
          caption: 'Đường thô có "bậc thang" rơi 4 nghìn đ; đường điều chỉnh phẳng cho thấy giá thật chỉ dao động quanh 46 nghìn.',
        },
        {
          kind: 'quiz',
          id: 'dividend-yield-ex-date-price-adjust-q2',
          question: 'Cách nào đo đúng kết quả đầu tư trong ngày không hưởng quyền?',
          options: [
            { id: 'a', text: 'Chỉ so giá đóng cửa 45.500 với giá mua 50.000: lỗ 9%.', explain: 'Cách này bỏ quên 4.000 đ cổ tức đã nhận, nên phóng đại khoản lỗ.' },
            { id: 'b', text: 'Cộng giá hiện tại với cổ tức nhận được rồi so với giá mua: (45.500 + 4.000) ÷ 50.000 − 1 = −1,0%.', correct: true, explain: 'Đúng. Tổng lợi suất gồm thay đổi giá và dòng tiền cổ tức. Khoản lỗ thật là 1%, gần hết lỗ do thị trường chứ không do chia cổ tức.' },
            { id: 'c', text: 'Bỏ qua giá, chỉ nhìn tiền cổ tức nhận được: lãi 8%.', explain: 'Cổ tức 8% là mẫu số theo giá mua; bỏ qua giá cổ phiếu thì bỏ qua phần giảm 4.500 đ.' },
          ],
        },
      ],
    },
    {
      id: 'yield',
      kind: 'analysis',
      title: 'Bước 2 — Đọc tỷ suất 8%: mẫu số và độ bền',
      blocks: [
        {
          kind: 'table',
          title: 'Cùng cổ tức 4.000 đ, tỷ suất đổi theo giá',
          columns: [
            { key: 'price', label: 'Giá cổ phiếu' },
            { key: 'yield', label: 'Tỷ suất cổ tức', align: 'right' },
            { key: 'note', label: 'Hàm ý' },
          ],
          rows: [
            { price: '40.000 đ', yield: '10,0%', note: 'Giá giảm làm tỷ suất "đẹp" hơn nhưng có thể phản ánh lo ngại về lợi nhuận' },
            { price: '50.000 đ', yield: '8,0%', note: 'Mốc ban đầu' },
            { price: '80.000 đ', yield: '5,0%', note: 'Giá tăng làm tỷ suất trông thấp đi dù cổ tức không đổi' },
          ],
          caption: 'Tỷ suất cổ tức phụ thuộc cả tử số (cổ tức) lẫn mẫu số (giá). Người mua ở giá cũ vẫn nhận 8% trên vốn bỏ ra.',
        },
        {
          kind: 'text',
          md: 'Độ bền của cổ tức đọc qua **tỷ lệ chi trả** = cổ tức/cp ÷ EPS = 4.000 ÷ 5.000 = **80%**. Tỷ lệ cao nghĩa là phần lợi nhuận giữ lại để tái đầu tư ít; nếu EPS năm sau giảm còn 3.000 mà công ty vẫn muốn giữ 4.000 thì phải dùng tiền tích lũy hoặc vay. Cổ tức quá khứ không phải cam kết trong tương lai.',
        },
        {
          kind: 'quiz',
          id: 'dividend-yield-ex-date-price-adjust-q3',
          question: 'Hai cổ phiếu cùng tỷ suất 8%. Cổ phiếu P có tỷ lệ chi trả 40%, cổ phiếu Q có 120%. Nhận định nào hợp lý?',
          options: [
            { id: 'a', text: 'Hai cổ phiếu như nhau vì cùng tỷ suất.', explain: 'Tỷ suất chỉ nói tiền nhận so với giá. Độ bền nằm ở chỗ cổ tức được chi trả từ đâu.' },
            { id: 'b', text: 'Q trả nhiều hơn lợi nhuận kiếm được nên khó duy trì; P có nhiều dư địa hơn.', correct: true, explain: 'Đúng. Chi trả 120% nghĩa là dùng cả tiền tích lũy hoặc vay để trả cổ tức. Đó là tín hiệu rủi ro cần kiểm tra thêm dòng tiền.' },
            { id: 'c', text: 'Q tốt hơn vì chi trả cao hơn.', explain: 'Chi trả cao không đồng nghĩa với tốt; nếu vượt quá lợi nhuận thì thường khó bền.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: cách trả lời nhà đầu tư và theo dõi cổ tức',
      blocks: [
        {
          kind: 'text',
          md: '**Trả lời nhà đầu tư:** "Giá giảm 4.000 đ là phần cổ tức bạn đã nhận bằng tiền. Tổng lợi suất ngày hôm nay là −1,0%, không phải −9%. Cổ tức 8% là tỷ suất trên giá mua của bạn; hãy kiểm tra thêm tỷ lệ chi trả (80%) và lợi nhuận để đánh giá độ bền."',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Báo cáo hiệu quả đầu tư theo tổng lợi suất (giá + cổ tức), không chỉ giá', owner: 'Analyst / tư vấn', metric: 'Tổng lợi suất', threshold: 'Luôn hiển thị cạnh thay đổi giá' },
            { action: 'Dùng giá điều chỉnh khi vẽ biểu đồ và tính lợi suất nhiều kỳ', owner: 'Analyst dữ liệu', metric: 'Chuỗi giá điều chỉnh', threshold: 'Không có "bậc thang" vào ngày không hưởng quyền' },
            { action: 'Kiểm tra độ bền cổ tức trước khi tin tỷ suất cao', owner: 'Analyst', metric: 'Tỷ lệ chi trả và dòng tiền hoạt động', threshold: 'Chi trả ≤ 70% là thoải mái; > 100% cần xem lại' },
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
            { title: 'Coi giá giảm ngày không hưởng quyền là lỗ', why: 'Phần giá giảm bằng đúng khoản tiền đã trả; tiền chuyển từ cổ phiếu sang tài khoản.', instead: 'Đọc tổng lợi suất hoặc dùng giá đã điều chỉnh.' },
            { title: 'Tin tỷ suất cổ tức cao là cơ hội', why: 'Tỷ suất cao có thể do giá đã giảm mạnh vì lo ngại, hoặc chi trả vượt lợi nhuận.', instead: 'Kiểm tra tỷ lệ chi trả, xu hướng lợi nhuận và dòng tiền.' },
            { title: 'Mua trước ngày chốt để "ăn cổ tức"', why: 'Giá được điều chỉnh giảm đúng bằng cổ tức, nên không có lợi nhuận chắc chắn; còn chịu thuế và phí.', instead: 'Đánh giá doanh nghiệp theo giá trị dài hạn, không theo lịch chốt quyền.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Tỷ suất cổ tức = cổ tức/cp ÷ giá; mẫu số đổi theo giá nên con số trông đẹp hay xấu theo thời điểm.',
    'Ngày không hưởng quyền, giá giảm bằng cổ tức: đọc tổng lợi suất hoặc giá điều chỉnh.',
    'Độ bền cổ tức nằm ở tỷ lệ chi trả và lợi nhuận, không nằm ở tỷ suất quá khứ.',
  ],
  references: [
    { title: 'Dividend yield', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Dividend_yield', note: 'Định nghĩa tỷ suất cổ tức và các lưu ý khi đọc.' },
    { title: 'Ex-dividend date', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Ex-dividend_date', note: 'Giải thích ngày không hưởng quyền và vì sao giá được điều chỉnh.' },
    { title: 'Sàn giao dịch chứng khoán TP.HCM (HOSE)', publisher: 'HOSE', url: 'https://www.hsx.vn', note: 'Trang chủ sàn; tra quy chế hiện hành về giao dịch và điều chỉnh giá tham chiếu.' },
  ],
}
