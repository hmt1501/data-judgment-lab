import type { Explainer } from '../../../shared/explainer'

export const carBuyVsLeaseTotalCost: Explainer = {
  id: 'car-buy-vs-lease-total-cost',
  slug: 'car-buy-vs-lease-total-cost',
  question: 'Mua xe, vay mua xe hay thuê xe: so sánh tổng chi phí sở hữu thế nào?',
  title: 'Tổng chi phí sở hữu xe: mua, vay hay thuê',
  topic: 'personal-finance',
  tldr: 'Giá niêm yết chỉ là một phần chi phí xe. **Tổng chi phí sở hữu (TCO)** gồm mất giá, lãi vay, chi phí cơ hội của tiền đặt cọc, bảo hiểm, bảo dưỡng, nhiên liệu và thuế phí. Với xe mới, **mất giá** thường là khoản lớn nhất; thuê xe chuyển rủi ro mất giá sang bên cho thuê nhưng đổi lại có giới hạn quãng đường và điều kiện hoàn xe. So sánh đúng là so **tổng tiền bỏ ra trừ giá trị còn lại** trong cùng khoảng thời gian.',
  keyPoints: [
    'TCO là ước tính chi phí trực tiếp và gián tiếp; với xe gồm khấu hao (mất giá), tài chính, nhiên liệu, bảo hiểm, sửa chữa, bảo dưỡng, phí và thuế, cộng chi phí cơ hội (theo Wikipedia).',
    '**Mất giá** là chênh lệch giữa giá mua và giá bán lại; chủ sở hữu gánh khoản này, còn với thuê xe, bên cho thuê gánh rủi ro đó và phí thuê đã tính nó vào (theo trang hướng dẫn thuê xe của AA, Anh).',
    'Thuê xe thường có **giới hạn quãng đường** (AA nêu hợp đồng thuê có giới hạn quãng đường và lấy 15.000 dặm/năm làm ví dụ cho mức đi nhiều; mức giới hạn và phụ phí cụ thể do từng hợp đồng quy định) và thường yêu cầu trả xe đúng tình trạng nhận (theo AA).',
    'Vay mua xe làm tổng chi phí tăng thêm phần **lãi**, và tiền đặt cọc/trả trước có chi phí cơ hội (nếu để đầu tư hoặc gửi tiết kiệm sẽ sinh lời).',
    'Giữ xe càng lâu, chi phí mất giá tính trên mỗi năm càng thấp, nhưng chi phí sửa chữa thường tăng; điểm hòa vốn phụ thuộc xe và cách dùng.',
  ],
  causalChain: [
    { from: 'Mua xe mới', to: 'Mất giá nhanh trong những năm đầu', mechanism: 'Giá bán lại thấp hơn giá mua; phần chênh là chi phí thật dù không phải khoản tiền chi ra hằng tháng.' },
    { from: 'Vay mua xe', to: 'Tổng chi phí tăng thêm lãi', mechanism: 'Ví dụ giả định: xe 800 triệu, vay 640 triệu, lãi 8%/năm, 60 tháng, trả đều khoảng 13 triệu/tháng; tổng lãi khoảng 139 triệu.' },
    { from: 'Trả trước một khoản lớn', to: 'Chi phí cơ hội', mechanism: 'Với 160 triệu trả trước, nếu giả định tiền đó sinh lời 5%/năm thì 5 năm bỏ lỡ khoảng 44 triệu lãi kép.' },
    { from: 'Thuê xe dài hạn', to: 'Chi phí cố định, không sở hữu tài sản cuối kỳ', mechanism: 'Bạn trả phần mất giá dự kiến cộng phí dịch vụ trong thời gian thuê, nhưng cuối kỳ không còn xe để bán và có thể bị phạt vượt km hoặc hư hại.' },
  ],
  vietnamImpact: [
    { group: 'Hộ gia đình mua xe lần đầu', effect: 'Nên tính cả chi phí đăng ký, bảo hiểm, gửi xe, nhiên liệu và bảo dưỡng chứ không chỉ giá xe và tiền trả góp; các khoản này chênh theo thành phố và loại xe.', direction: 'down' },
    { group: 'Người đi xe công nghệ/taxi thay vì sở hữu', effect: 'Nếu quãng đường hằng năm ít, tổng chi phí đi lại theo cuốc có thể thấp hơn tổng chi phí sở hữu; cần tự tính theo số km thực tế.', direction: 'mixed' },
    { group: 'Người dùng xe nhiều (kinh doanh, chạy dịch vụ)', effect: 'Quãng đường lớn làm giá trị còn lại giảm nhanh và vượt giới hạn km của hợp đồng thuê; mua có thể phù hợp hơn.', direction: 'mixed' },
    { group: 'Người vay trả góp', effect: 'Lãi suất thả nổi sau ưu đãi và phí trả nợ trước hạn có thể làm chi phí thực cao hơn ví dụ; cần đọc kỹ hợp đồng.', direction: 'down' },
  ],
  indicators: [
    { name: 'Giá bán lại sau 3–5 năm của dòng xe quan tâm', why: 'Giá trị còn lại quyết định phần mất giá thực.', where: 'Tin rao bán xe cũ trên các sàn, đại lý xe đã qua sử dụng' },
    { name: 'Lãi suất vay mua xe (cố định/thả nổi)', why: 'Quyết định phần lãi cộng thêm vào tổng chi phí.', where: 'Biểu lãi suất công bố của ngân hàng, hợp đồng tín dụng' },
    { name: 'Số km thực tế mỗi năm', why: 'Điều kiện then chốt khi cân nhắc thuê xe có giới hạn km.', where: 'Đồng hồ công-tơ-mét, nhật ký sử dụng của chính bạn' },
    { name: 'Chi phí bảo hiểm và bảo dưỡng định kỳ', why: 'Các khoản lặp lại đều đặn, cộng dồn đáng kể trong 5 năm.', where: 'Báo giá công ty bảo hiểm, bảng giá bảo dưỡng của hãng' },
  ],
  counterpoints: [
    'Các con số trong bài là ví dụ giả định; mất giá thực tế khác nhau theo mẫu xe, thị trường và tình trạng xe.',
    'TCO không cho biết giá trị bạn nhận được (tiện nghi, thời gian, địa vị) và không phản ánh chi phí xã hội/môi trường.',
    'Nếu giữ xe rất lâu sau khi trả hết nợ, mua thường rẻ hơn tính theo năm; nếu muốn đổi xe mới thường xuyên, thuê có thể đỡ rủi ro bán lại.',
  ],
  glossary: [
    { term: 'Tổng chi phí sở hữu (TCO)', definition: 'Ước tính toàn bộ chi phí trực tiếp và gián tiếp trong suốt thời gian sở hữu.' },
    { term: 'Mất giá (khấu hao thực)', definition: 'Chênh lệch giữa giá mua và giá bán lại.' },
    { term: 'Chi phí cơ hội', definition: 'Lợi ích mất đi khi dùng tiền cho mục đích này thay vì phương án tốt nhất khác.' },
    { term: 'Giá trị còn lại', definition: 'Giá xe có thể bán được ở cuối kỳ sở hữu.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'car-buy-vs-lease-total-cost-q',
    question: 'Ví dụ giả định: mua xe 800 triệu, vay 640 triệu 60 tháng lãi 8%/năm, sau 5 năm bán còn 480 triệu. Chi phí tài chính chính (chưa tính vận hành) trong 5 năm khoảng bao nhiêu?',
    options: [
      { id: 'a', text: 'Khoảng 139 triệu, chính là tổng lãi vay.', explain: 'Thiếu phần mất giá 320 triệu và chi phí cơ hội của tiền trả trước.' },
      { id: 'b', text: 'Khoảng 500 triệu: mất giá 320 + lãi vay ~139 + chi phí cơ hội ~44 (ví dụ giả định).', correct: true, explain: 'Đúng: 320 + 138,6 + 44,2 ≈ 503 triệu, chưa gồm bảo hiểm, bảo dưỡng, nhiên liệu. Mất giá thường là khoản lớn nhất.' },
      { id: 'c', text: '800 triệu, vì đó là giá xe.', explain: 'Giá mua chưa trừ giá trị bán lại; chi phí thật là chênh lệch cộng các khoản phát sinh.' },
    ],
  },
  sources: [
    { title: 'Car leasing costs: lease vs ownership', publisher: 'The AA (Anh)', url: 'https://www-leasing.theaa.com/leasing/leasing-guides/car-leasing-costs-to-lease-a-car-vs-ownership' },
    { title: 'Total cost of ownership', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Total_cost_of_ownership' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 143,
}
