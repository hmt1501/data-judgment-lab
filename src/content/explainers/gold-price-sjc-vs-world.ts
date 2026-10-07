import type { Explainer } from '../../../shared/explainer'

export const goldPriceSjcVsWorld: Explainer = {
  id: 'gold-price-sjc-vs-world',
  slug: 'gold-price-sjc-vs-world',
  question: 'Vì sao giá vàng miếng SJC thường cao hơn giá vàng thế giới?',
  title: 'Giá vàng SJC chênh giá thế giới: cơ chế, quy đổi và rủi ro',
  topic: 'markets-investing',
  tldr: 'Giá vàng trong nước chênh với giá thế giới chủ yếu vì **nguồn cung vàng miếng bị quản lý chặt** (nhập khẩu vàng nguyên liệu phải xin phép), trong khi **nhu cầu tích trữ** của người dân tăng vọt mỗi khi giá biến động. Nghị định 232/2025/NĐ-CP (26/8/2025) đã bỏ cơ chế Nhà nước độc quyền sản xuất vàng miếng, mở đường cho doanh nghiệp và ngân hàng đủ điều kiện được cấp phép sản xuất, nhập khẩu theo hạn mức. Mức chênh lệch vì vậy **thay đổi mạnh theo thời gian**: người mua lúc chênh lệch lớn chịu rủi ro kép — giá thế giới giảm và khoảng chênh thu hẹp.',
  keyPoints: [
    '**Quy đổi**: 1 lượng = 37,5 g; 1 ounce troy ≈ 31,1035 g, nên 1 lượng ≈ 1,2057 ounce. Giá thế giới quy đổi (VND/lượng) ≈ Giá USD/ounce × 1,2057 × Tỷ giá USD/VND. *Minh họa*: 4.000 USD/ounce, tỷ giá 26.000 → khoảng 125,4 triệu đồng/lượng, **chưa** gồm thuế, phí nhập khẩu, chế tác.',
    'Từ 2012 đến 2025, theo Nghị định 24/2012/NĐ-CP, Nhà nước độc quyền sản xuất vàng miếng và SJC là thương hiệu vàng miếng quốc gia; nguồn cung mới phụ thuộc vào việc NHNN cấp phép nhập khẩu, nên khi cầu tăng thì giá trong nước tăng nhanh hơn thế giới.',
    'Nghị định 232/2025/NĐ-CP (ngày 26/8/2025) bãi bỏ cơ chế độc quyền; NHNN cấp hạn mức và giấy phép nhập khẩu vàng nguyên liệu cho doanh nghiệp, ngân hàng thương mại đủ điều kiện sản xuất vàng miếng. Đến giữa tháng 4/2026, báo chí đưa tin NHNN đã nhận 11 hồ sơ xin cấp phép sản xuất vàng miếng.',
    'Chênh lệch biến động lớn: theo báo chí, khoảng cách SJC – thế giới phổ biến ở mức 3–5 triệu đồng/lượng trong tháng 8/2026, rồi nới lên 8–9 triệu (có lúc trên 10 triệu) trong tháng 9/2026; trong năm 2025 và đầu 2026 có giai đoạn lên khoảng 15–20 triệu đồng/lượng.',
    'Ngoài chênh lệch với thế giới, người mua còn chịu **chênh lệch giá mua–bán** của chính cửa hàng (khoảng 3 triệu đồng/lượng với vàng miếng SJC ngày 1/10/2026, theo báo chí). Đây là kiến thức nền, không phải khuyến nghị đầu tư.',
  ],
  causalChain: [
    { from: 'Giá vàng thế giới tăng mạnh hoặc bất ổn địa chính trị', to: 'Nhu cầu mua vàng tích trữ trong nước tăng', mechanism: 'Người dân coi vàng là tài sản trú ẩn, kỳ vọng giá còn tăng; xuất hiện tâm lý sợ bỏ lỡ.' },
    { from: 'Nhu cầu mua vàng tích trữ trong nước tăng', to: 'Cầu vượt cung vàng miếng trong nước', mechanism: 'Nguồn cung mới phụ thuộc hạn mức nhập khẩu vàng nguyên liệu được cấp phép, không thể tăng ngay như thị trường tự do.' },
    { from: 'Cầu vượt cung vàng miếng trong nước', to: 'Giá SJC cao hơn giá thế giới quy đổi', mechanism: 'Không có kênh nhập khẩu tự do để kinh doanh chênh lệch giá (arbitrage), nên khoảng chênh không tự đóng lại.' },
    { from: 'Giá SJC cao hơn giá thế giới quy đổi', to: 'Áp lực lên tỷ giá và nhập lậu vàng', mechanism: 'Chênh lệch lớn tạo động cơ mua USD để nhập vàng không chính thức, làm tăng cầu ngoại tệ.' },
    { from: 'Áp lực lên tỷ giá và nhập lậu vàng', to: 'Nhà nước tăng cung hoặc thay đổi cơ chế', mechanism: 'Ví dụ: NHNN từng đấu thầu và bán vàng miếng trực tiếp qua ngân hàng (2024); Nghị định 232/2025 mở cho nhiều đơn vị sản xuất, nhập khẩu theo hạn mức — kỳ vọng làm chênh lệch thu hẹp.' },
  ],
  vietnamImpact: [
    { group: 'Người mua vàng miếng khi chênh lệch lớn', effect: 'Chịu rủi ro kép: giá thế giới giảm và chênh lệch thu hẹp khi cung tăng; cộng thêm chênh lệch mua–bán khi bán lại.', direction: 'down' },
    { group: 'Người đang nắm giữ vàng miếng', effect: 'Hưởng lợi khi chênh lệch nới rộng, nhưng giá trị "phần chênh" có thể mất nhanh khi chính sách tăng cung có hiệu lực.', direction: 'mixed' },
    { group: 'Doanh nghiệp kinh doanh vàng, ngân hàng thương mại', effect: 'Cơ hội tham gia sản xuất/nhập khẩu nếu được cấp phép; đồng thời chịu yêu cầu tuân thủ về hóa đơn, chứng từ, phòng chống rửa tiền.', direction: 'up' },
    { group: 'Tỷ giá và NHNN', effect: 'Nhập khẩu vàng cần ngoại tệ; cấp hạn mức lớn giúp thu hẹp chênh lệch nhưng làm tăng cầu USD, nên NHNN phải cân đối.', direction: 'mixed' },
    { group: 'Nền kinh tế', effect: 'Vàng tích trữ trong dân là nguồn lực "nằm im", không đi vào sản xuất kinh doanh như tiền gửi hay đầu tư.', direction: 'down' },
  ],
  indicators: [
    { name: 'Giá vàng thế giới (USD/ounce)', why: 'Thành phần gốc của giá trong nước.', where: 'World Gold Council (Goldhub), dữ liệu thị trường quốc tế' },
    { name: 'Tỷ giá USD/VND (tỷ giá trung tâm và tại ngân hàng thương mại)', why: 'Dùng để quy đổi giá thế giới ra VND; tỷ giá tăng làm giá quy đổi tăng.', where: 'Website NHNN; bảng tỷ giá ngân hàng thương mại' },
    { name: 'Chênh lệch giá SJC so với giá thế giới quy đổi', why: 'Thước đo trực tiếp rủi ro "mua đắt"; tự tính theo công thức quy đổi để kiểm tra.', where: 'Bảng giá của SJC, các ngân hàng/doanh nghiệp kinh doanh vàng; báo chí tài chính' },
    { name: 'Chênh lệch giá mua – giá bán tại cùng cửa hàng', why: 'Chi phí phải trả ngay khi mua rồi bán lại.', where: 'Bảng niêm yết giá của từng đơn vị kinh doanh vàng' },
    { name: 'Thông tin cấp phép sản xuất vàng miếng, hạn mức nhập khẩu vàng nguyên liệu', why: 'Quyết định tốc độ tăng cung và khả năng thu hẹp chênh lệch.', where: 'Website NHNN, thông cáo báo chí của NHNN' },
  ],
  counterpoints: [
    'Một phần chênh lệch là hợp lý (thuế, phí nhập khẩu, vận chuyển, chế tác, chi phí vốn), nên chênh lệch khó về 0 ngay cả khi thị trường thông thoáng.',
    'Nếu NHNN cấp hạn mức nhập khẩu thận trọng để bảo vệ tỷ giá, chênh lệch có thể vẫn cao trong thời gian dài hơn kỳ vọng.',
    'Khi cầu tích trữ hạ nhiệt (giá thế giới đi ngang hoặc giảm), chênh lệch có thể tự thu hẹp kể cả khi nguồn cung chưa tăng nhiều — như giai đoạn tháng 8/2026.',
  ],
  glossary: [
    { term: 'Lượng (cây)', definition: 'Đơn vị khối lượng vàng ở Việt Nam, bằng 37,5 gam.' },
    { term: 'Ounce troy', definition: 'Đơn vị khối lượng dùng cho kim loại quý trên thị trường quốc tế, khoảng 31,1035 gam.' },
    { term: 'Vàng miếng', definition: 'Vàng dạng thỏi/miếng do đơn vị được phép sản xuất, có khối lượng và hàm lượng theo tiêu chuẩn.' },
    { term: 'Chênh lệch mua – bán', definition: 'Khoảng cách giữa giá cửa hàng bán ra và giá cửa hàng mua vào cùng thời điểm.' },
    { term: 'Hạn mức nhập khẩu', definition: 'Lượng vàng nguyên liệu tối đa một đơn vị được phép nhập khẩu trong năm theo giấy phép của NHNN.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'gold-price-sjc-vs-world-q',
    question: 'Giá thế giới quy đổi khoảng 135 triệu/lượng, SJC bán ra 147 triệu/lượng, mua vào 144 triệu/lượng. Nếu mua lúc này, rủi ro nào cần tính?',
    options: [
      { id: 'a', text: 'Không có rủi ro vì vàng là tài sản an toàn, giá dài hạn luôn tăng.', explain: 'Vàng có thể giảm giá trong nhiều năm; ngoài ra người mua đang trả cao hơn giá thế giới quy đổi khoảng 12 triệu/lượng và sẽ bán lại theo giá mua vào thấp hơn.' },
      { id: 'b', text: 'Chỉ cần lo giá thế giới giảm.', explain: 'Thiếu. Ngay cả khi giá thế giới đứng yên, chênh lệch SJC – thế giới có thể thu hẹp khi nguồn cung tăng, và bạn mất ngay khoảng 3 triệu/lượng do chênh lệch mua – bán.' },
      { id: 'c', text: 'Ba lớp rủi ro: giá thế giới, tỷ giá, và việc chênh lệch trong nước thu hẹp; cộng chi phí chênh lệch mua – bán ngay khi giao dịch.', correct: true, explain: 'Đúng. Trong ví dụ, giá bán ra cao hơn thế giới quy đổi khoảng 12 triệu/lượng và bán lại ngay mất 3 triệu/lượng. Cần theo dõi chính sách cấp phép, nhập khẩu và tự quy đổi giá trước khi quyết định.' },
    ],
  },
  sources: [
    { title: 'Gold Prices', publisher: 'World Gold Council', url: 'https://www.gold.org/goldhub/data/gold-prices' },
    { title: 'Thị trường vàng tháng 9: Hai khoảng chênh đáng chú ý', publisher: 'BNEWS (TTXVN)', url: 'https://bnews.vn/thi-truong-vang-thang-9-hai-khoang-chenh-dang-chu-y/439219.html' },
    { title: 'Ngân hàng Nhà nước tiếp nhận 11 hồ sơ xin cấp phép sản xuất vàng miếng', publisher: 'Báo Xây dựng', url: 'https://baoxaydung.vn/ngan-hang-nha-nuoc-tiep-nhan-11-ho-so-xin-cap-phep-san-xuat-vang-mieng-192260414174709777.htm' },
    { title: 'Ngân hàng Nhà nước Việt Nam', publisher: 'NHNN', url: 'https://www.sbv.gov.vn' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
