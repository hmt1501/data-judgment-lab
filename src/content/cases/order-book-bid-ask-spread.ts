import type { CaseStudy } from '../types'

/*
 * Số liệu mock của mã "ABC" (hư cấu), giá nghìn đ, khối lượng cổ phiếu, đã kiểm tra khớp nhau:
 *   Sổ lệnh liên tục — Bán: 25,6 (2.000) · 25,5 (3.000) · 25,4 (1.500) | Mua: 25,3 (4.000) · 25,2 (2.500) · 25,1 (6.000)
 *   Giá mua tốt nhất 25.300 · giá bán tốt nhất 25.400 · chênh lệch 100 đ = 100 ÷ 25.350 = 0,39%
 *   Lệnh mua thị trường 4.000 cp: 1.500 × 25.400 + 2.500 × 25.500 = 101.850.000 đ → giá BQ 25.462,5 đ (+62,5 đ = +0,25% so với 25.400)
 *   Lệnh mua giới hạn 25.400, 3.000 cp: khớp 1.500 cp tại 25.400, 1.500 cp còn lại nằm chờ ở giá mua 25.400
 *   Phiên định kỳ (ATC giả định): mua 25,5: 1.000 · 25,4: 2.000 · 25,3: 3.000 · 25,2: 2.000 · 25,1: 1.000
 *     bán 25,1: 1.500 · 25,2: 1.500 · 25,3: 2.000 · 25,4: 3.000 · 25,5: 2.000
 *     khớp được (min cộng dồn mua/bán): 25,1: 1.500 · 25,2: 3.000 · 25,3: 5.000 · 25,4: 3.000 · 25,5: 1.000 → giá khớp 25.300, KL 5.000
 */
export const orderBookBidAskSpread: CaseStudy = {
  id: 'order-book-bid-ask-spread',
  title: 'Đặt mua ở giá "đang chạy" nhưng khớp giá khác: đọc sổ lệnh',
  domain: 'securities',
  level: 'fresher',
  minutes: 10,
  skills: ['liquidity', 'metric-definition', 'tradeoff'],
  question: 'Nhà đầu tư mới đặt mua 4.000 cổ phiếu theo giá thị trường, kỳ vọng khớp ở 25.400 đ nhưng giá bình quân lại cao hơn, và giá đóng cửa khác cả hai. Sổ lệnh vận hành thế nào?',
  summary: 'Đọc sổ lệnh mua/bán, chênh lệch mua–bán, lệnh giới hạn so với lệnh thị trường, và nguyên tắc xác định một giá khớp trong phiên định kỳ (kiểu ATO/ATC).',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là nhân viên hỗ trợ khách hàng của một công ty chứng khoán. Khách mới nhắn: *"Bảng điện ghi giá 25.400, mình đặt mua 4.000 cổ phiếu mà giá khớp trung bình 25.462, sao lệch vậy? Với lại giá đóng cửa lại là giá khác nữa."* Bạn cần giải thích bằng chính sổ lệnh của mã ABC.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Mã ABC và các lệnh là **giả định**. Nguyên tắc chung (ưu tiên giá rồi thời gian, phiên định kỳ chọn giá khớp tối đa khối lượng) là thật, nhưng tên lệnh, bước giá, biên độ và khung giờ **khác nhau theo từng sàn** và thay đổi theo quy chế. Hãy đối chiếu văn bản hiện hành của sàn giao dịch.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: sổ lệnh là hai hàng đợi',
      blocks: [
        {
          kind: 'text',
          md: 'Sổ lệnh có hai hàng đợi: **mua** (bid) xếp từ giá cao xuống thấp, **bán** (ask) xếp từ giá thấp lên cao. Lệnh được khớp theo ưu tiên **giá tốt hơn trước, cùng giá thì đặt trước khớp trước**. Khoảng cách giữa giá mua cao nhất và giá bán thấp nhất là **chênh lệch mua–bán** (spread), phần chi phí vô hình khi mua rồi bán ngay.',
        },
        {
          kind: 'formula',
          expression: 'Spread = Giá bán tốt nhất − Giá mua tốt nhất · Spread % = Spread ÷ Giá giữa',
          note: 'Spread nhỏ và sổ lệnh dày (nhiều khối lượng ở các mức giá gần nhau) là dấu hiệu thanh khoản tốt.',
        },
        {
          kind: 'quiz',
          id: 'order-book-bid-ask-spread-q1',
          question: 'Có hai lệnh mua cùng giá 25.300: lệnh P đặt lúc 9:05, lệnh Q đặt lúc 9:20. Một lệnh bán đến khớp ở 25.300. Lệnh nào được khớp trước?',
          options: [
            { id: 'a', text: 'Lệnh P, vì đặt trước.', correct: true, explain: 'Đúng. Cùng mức giá thì ưu tiên thời gian: lệnh nào vào sổ trước khớp trước.' },
            { id: 'b', text: 'Lệnh Q, vì đặt sau nên thông tin mới hơn.', explain: 'Thông tin mới không phải tiêu chí ưu tiên. Tiêu chí là giá rồi thời gian.' },
            { id: 'c', text: 'Khớp chia đều cho cả hai.', explain: 'Trong khớp liên tục, ưu tiên thời gian chứ không chia đều.' },
          ],
        },
      ],
    },
    {
      id: 'continuous',
      kind: 'analysis',
      title: 'Bước 1 — Khớp liên tục: spread và "ăn" nhiều mức giá',
      blocks: [
        {
          kind: 'table',
          title: 'Sổ lệnh mã ABC (giá nghìn đ, khối lượng cp)',
          columns: [
            { key: 'bidVol', label: 'KL mua', align: 'right' },
            { key: 'bid', label: 'Giá mua', align: 'right' },
            { key: 'ask', label: 'Giá bán', align: 'right' },
            { key: 'askVol', label: 'KL bán', align: 'right' },
          ],
          rows: [
            { bidVol: '—', bid: '—', ask: '25,6', askVol: '2.000' },
            { bidVol: '—', bid: '—', ask: '25,5', askVol: '3.000' },
            { bidVol: '—', bid: '—', ask: '25,4', askVol: '1.500' },
            { bidVol: '4.000', bid: '25,3', ask: '—', askVol: '—' },
            { bidVol: '2.500', bid: '25,2', ask: '—', askVol: '—' },
            { bidVol: '6.000', bid: '25,1', ask: '—', askVol: '—' },
          ],
          highlight: [
            { row: 2, tone: 'warning' },
            { row: 3, tone: 'warning' },
          ],
          caption: 'Giá bán tốt nhất 25.400, giá mua tốt nhất 25.300 → spread 100 đ = 100 ÷ 25.350 = 0,39%.',
        },
        {
          kind: 'table',
          title: 'Hai cách đặt mua 4.000 cp',
          columns: [
            { key: 'order', label: 'Lệnh' },
            { key: 'result', label: 'Kết quả khớp' },
            { key: 'avg', label: 'Giá bình quân', align: 'right' },
          ],
          rows: [
            { order: 'Thị trường (khái niệm chung), 4.000 cp', result: '1.500 cp ở 25.400 + 2.500 cp ở 25.500', avg: '25.462,5 đ' },
            { order: 'Giới hạn 25.400, 3.000 cp', result: 'Khớp 1.500 cp ở 25.400; 1.500 cp còn lại nằm chờ ở giá mua 25.400', avg: '25.400 đ (phần đã khớp)' },
          ],
          caption: '(1.500 × 25.400 + 2.500 × 25.500) ÷ 4.000 = 25.462,5 đ, cao hơn giá tốt nhất 62,5 đ (0,25%). Lệnh giới hạn chắc về giá nhưng không chắc khớp hết.',
        },
        {
          kind: 'quiz',
          id: 'order-book-bid-ask-spread-q2',
          question: 'Lệnh mua giới hạn ở 25.400 chỉ khớp được một phần. Đánh đổi của lệnh giới hạn so với lệnh thị trường là gì?',
          options: [
            { id: 'a', text: 'Lệnh giới hạn chắc về giá nhưng có thể không khớp hết; lệnh thị trường chắc khớp nhưng giá có thể trượt.', correct: true, explain: 'Đúng. Đây là đánh đổi cơ bản: kiểm soát giá hay kiểm soát khả năng khớp.' },
            { id: 'b', text: 'Lệnh giới hạn luôn rẻ hơn lệnh thị trường.', explain: 'Giá có thể tốt hơn nhưng phần chưa khớp nằm chờ, có thể không bao giờ khớp.' },
            { id: 'c', text: 'Hai loại lệnh luôn cho cùng kết quả.', explain: 'Ví dụ trên cho thấy kết quả khác nhau cả về giá lẫn khối lượng khớp.' },
          ],
        },
      ],
    },
    {
      id: 'auction',
      kind: 'analysis',
      title: 'Bước 2 — Phiên định kỳ (kiểu ATO/ATC): một giá cho mọi lệnh',
      blocks: [
        {
          kind: 'text',
          md: 'Trong phiên định kỳ, các lệnh được gom lại rồi khớp một lần tại **một giá duy nhất**: giá cho khối lượng khớp lớn nhất. Cách tìm: với mỗi mức giá, cộng dồn lệnh mua sẵn sàng mua ở giá đó trở lên và lệnh bán sẵn sàng bán ở giá đó trở xuống, lấy số nhỏ hơn. Khi nhiều mức cùng khối lượng, sàn có tiêu chí phụ riêng, cần đọc quy chế.',
        },
        {
          kind: 'table',
          title: 'Tìm giá khớp trong phiên định kỳ (giá nghìn đ, khối lượng cp)',
          columns: [
            { key: 'price', label: 'Giá' },
            { key: 'buy', label: 'Mua tại giá', align: 'right' },
            { key: 'sell', label: 'Bán tại giá', align: 'right' },
            { key: 'cumBuy', label: 'Mua cộng dồn (≥ giá)', align: 'right' },
            { key: 'cumSell', label: 'Bán cộng dồn (≤ giá)', align: 'right' },
            { key: 'match', label: 'Khớp được', align: 'right' },
          ],
          rows: [
            { price: '25,1', buy: '1.000', sell: '1.500', cumBuy: '9.000', cumSell: '1.500', match: '1.500' },
            { price: '25,2', buy: '2.000', sell: '1.500', cumBuy: '8.000', cumSell: '3.000', match: '3.000' },
            { price: '25,3', buy: '3.000', sell: '2.000', cumBuy: '6.000', cumSell: '5.000', match: '5.000' },
            { price: '25,4', buy: '2.000', sell: '3.000', cumBuy: '3.000', cumSell: '8.000', match: '3.000' },
            { price: '25,5', buy: '1.000', sell: '2.000', cumBuy: '1.000', cumSell: '10.000', match: '1.000' },
          ],
          highlight: [{ row: 2, tone: 'positive' }],
          caption: 'Khớp được = min(mua cộng dồn, bán cộng dồn). Lớn nhất là 5.000 cp tại 25.300, nên mọi lệnh khớp ở 25.300 (kể cả lệnh mua đặt cao hơn).',
        },
        {
          kind: 'quiz',
          id: 'order-book-bid-ask-spread-q3',
          question: 'Một lệnh mua giới hạn 25.500 tham gia phiên định kỳ trên. Giá khớp là 25.300. Nó khớp ở giá nào?',
          options: [
            { id: 'a', text: '25.500, giá mà nhà đầu tư đã đặt.', explain: 'Giá đặt là mức tối đa chấp nhận được, không phải giá khớp.' },
            { id: 'b', text: '25.300, giá khớp chung của cả phiên; nhà đầu tư được giá tốt hơn mức đã đặt.', correct: true, explain: 'Đúng. Trong phiên định kỳ mọi lệnh khớp cùng một giá; lệnh mua đặt cao hơn vẫn khớp ở 25.300.' },
            { id: 'c', text: 'Không khớp, vì 25.500 khác 25.300.', explain: 'Lệnh mua giá cao hơn giá khớp vẫn được khớp.' },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp: hướng dẫn khách đặt lệnh',
      blocks: [
        {
          kind: 'text',
          md: '**Trả lời khách:** "Giá 25.400 là giá bán tốt nhất, chỉ có 1.500 cp. Lệnh 4.000 cp phải lấy thêm 2.500 cp ở mức 25.500 nên giá bình quân là 25.462,5. Nếu muốn kiểm soát giá, bạn đặt lệnh giới hạn; phần chưa khớp sẽ nằm chờ."',
        },
        {
          kind: 'actions',
          items: [
            { action: 'Cho khách xem độ sâu sổ lệnh trước khi đặt lệnh lớn', owner: 'Chăm sóc khách hàng', metric: 'Khối lượng ở 3 mức giá tốt nhất so với khối lượng lệnh', threshold: 'Lệnh lớn hơn khối lượng mức giá tốt nhất: cảnh báo trượt giá' },
            { action: 'Báo spread theo % và độ sâu khi so sánh thanh khoản các mã', owner: 'Analyst thị trường', metric: 'Spread %', threshold: 'Dưới 0,5% là chặt; trên 1% cần lưu ý' },
            { action: 'Soạn tài liệu ngắn về các loại lệnh theo quy chế hiện hành của sàn', owner: 'Trưởng phòng môi giới', metric: 'Số câu hỏi lặp lại về khớp lệnh', threshold: 'Giảm 30% sau 1 quý' },
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
            { title: 'Coi giá trên bảng là giá chắc chắn khớp', why: 'Đó chỉ là giá khớp gần nhất hoặc giá tốt nhất ở một mức, với khối lượng hạn chế.', instead: 'Nhìn độ sâu sổ lệnh trước khi đặt lệnh lớn.' },
            { title: 'Bỏ qua chi phí spread', why: 'Mua rồi bán ngay chịu cả spread, nhất là mã có spread rộng.', instead: 'Đưa spread % vào chi phí giao dịch.' },
            { title: 'Áp quy tắc một sàn cho sàn khác', why: 'Tên lệnh, bước giá, khung giờ khác nhau.', instead: 'Đọc quy chế hiện hành của đúng sàn.' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Sổ lệnh khớp theo giá rồi thời gian; spread và độ sâu cho biết thanh khoản thật.',
    'Lệnh thị trường chắc khớp nhưng giá trượt; lệnh giới hạn chắc giá nhưng có thể không khớp hết.',
    'Phiên định kỳ chọn một giá khớp tối đa khối lượng; lệnh có giá tốt hơn vẫn khớp ở giá chung.',
  ],
  references: [
    { title: 'Order book', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Order_book', note: 'Cấu trúc sổ lệnh, ưu tiên giá–thời gian và cách khớp lệnh.' },
    { title: 'Bid–ask spread', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Bid%E2%80%93ask_spread', note: 'Định nghĩa chênh lệch mua–bán và vai trò trong chi phí giao dịch.' },
    { title: 'Sàn giao dịch chứng khoán TP.HCM (HOSE)', publisher: 'HOSE', url: 'https://www.hsx.vn', note: 'Trang chủ sàn; tra quy chế giao dịch hiện hành (loại lệnh, bước giá, khung giờ).' },
  ],
}
