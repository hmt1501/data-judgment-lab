import type { Explainer } from '../../../shared/explainer'

export const sanctionsCommodityPrices: Explainer = {
  id: 'sanctions-commodity-prices',
  slug: 'sanctions-commodity-prices',
  question: 'Cấm vận tác động giá hàng hóa và dòng thương mại ra sao?',
  title: 'Cấm vận: giá hàng hóa thay đổi theo mức hàng bị chặn và khả năng đổi tuyến thương mại',
  topic: 'geopolitics-trade',
  tldr: 'Cấm vận (trừng phạt kinh tế) hạn chế thương mại, tài chính hoặc vận tải với một nước hoặc nhóm. Giá hàng hóa chịu tác động tùy **tỷ trọng cung bị chặn**, **khả năng thay thế** nguồn khác và **mức thực thi**. Thường thương mại không biến mất mà **đổi tuyến**, kèm chiết khấu và chi phí, khiến giá ở các thị trường khác nhau bị tách.',
  keyPoints: [
    'Hình thức: cấm xuất/nhập khẩu, đóng băng tài sản, hạn chế tiếp cận hệ thống thanh toán, cấm bảo hiểm/vận tải, trần giá.',
    'Giá toàn cầu tăng mạnh khi nước bị cấm vận chiếm tỷ trọng cung lớn và khó thay thế; nếu thay thế dễ, giá chỉ tăng ngắn hạn.',
    'Thương mại đổi tuyến: hàng bị cấm đi qua nước trung gian hoặc bán chiết khấu cho người mua khác; phát sinh **chênh lệch giá** giữa thị trường bị hạn chế và thị trường khác.',
    'Chi phí lan sang bên thứ ba: bảo hiểm, tài chính, vận tải thêm rủi ro tuân thủ; doanh nghiệp tránh giao dịch dù chưa bị cấm trực tiếp.',
    'Hiệu quả chính trị của cấm vận và tác động giá tách biệt: một biện pháp có thể tác động giá lớn nhưng ít đổi hành vi, hoặc ngược lại.',
  ],
  causalChain: [
    { from: 'Ban hành cấm vận hoặc trần giá', to: 'Một phần nguồn cung bị loại khỏi kênh thương mại thông thường', mechanism: 'Người mua tuân thủ ngừng mua; ngân hàng, hãng bảo hiểm, vận tải hạn chế phục vụ.' },
    { from: 'Nguồn cung giảm', to: 'Giá toàn cầu tăng nếu thị trường thiếu nguồn thay thế', mechanism: 'Người mua cạnh tranh nguồn còn lại; giá tăng đến khi nguồn mới, tồn kho hoặc cắt giảm cầu bù đắp.' },
    { from: 'Hàng bị cấm tìm người mua mới', to: 'Dòng thương mại đổi tuyến, giá chiết khấu', mechanism: 'Người bán chấp nhận giá thấp hơn, đi đường dài hơn; chi phí vận chuyển, bảo hiểm tăng, làm giá giao tại các nơi khác nhau.' },
    { from: 'Chênh lệch giá và tái cấu trúc thương mại', to: 'Tác động lên lạm phát và tăng trưởng ở nước nhập khẩu', mechanism: 'Giá năng lượng, lương thực, kim loại tăng làm chi phí sản xuất và giá tiêu dùng tăng, tùy mức phụ thuộc nhập khẩu.' },
  ],
  vietnamImpact: [
    { group: 'Người tiêu dùng và lạm phát', effect: 'Giá xăng dầu, phân bón, lương thực thế giới tăng truyền vào CPI với độ trễ; mức độ tùy điều hành giá trong nước.', direction: 'down' },
    { group: 'Doanh nghiệp nhập nguyên liệu', effect: 'Chi phí đầu vào, vận tải, bảo hiểm tăng; chuỗi cung ứng bị gián đoạn nếu nhà cung cấp bị ảnh hưởng.', direction: 'down' },
    { group: 'Doanh nghiệp có giao dịch với bên có thể bị trừng phạt', effect: 'Rủi ro tuân thủ: ngân hàng đối tác có thể từ chối thanh toán; cần rà soát khách hàng và chuỗi cung ứng.', direction: 'down' },
    { group: 'Nhà xuất khẩu hàng hóa nhóm giá tăng (nếu có)', effect: 'Hưởng giá cao hơn nếu có sản phẩm cùng loại và năng lực cung ứng.', direction: 'up' },
    { group: 'Thị trường tài chính', effect: 'Biến động giá hàng hóa, tỷ giá và dòng vốn tăng trong giai đoạn bất định.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Chỉ số giá hàng hóa (năng lượng, lương thực, kim loại)', why: 'Phản ánh trực tiếp sốc cung.', where: 'World Bank Commodity Markets (worldbank.org), IMF' },
    { name: 'Chênh lệch giá giữa các dầu chuẩn/khu vực', why: 'Đo mức chiết khấu và tách thị trường.', where: 'Dữ liệu thị trường năng lượng của EIA, IEA' },
    { name: 'Dòng thương mại song phương và nước trung gian', why: 'Cho thấy đổi tuyến thương mại.', where: 'Cơ sở dữ liệu thương mại của WTO, UN Comtrade' },
    { name: 'Chi phí bảo hiểm và cước vận tải', why: 'Rủi ro tuân thủ chuyển thành chi phí.', where: 'Dữ liệu cước tàu, báo cáo vận tải biển' },
  ],
  counterpoints: [
    'Tác động giá thường lớn nhất lúc đầu rồi giảm khi thị trường thích nghi, nên đánh giá cú sốc ban đầu như xu hướng dài hạn là sai.',
    'Cấm vận thường rò rỉ qua nước thứ ba và chuyển tải; mức thực thi quyết định hiệu lực.',
    'Giá tăng còn do nhiều yếu tố khác cùng lúc (thời tiết, cầu phục hồi, chính sách OPEC...), khó quy hết cho cấm vận.',
  ],
  glossary: [
    { term: 'Cấm vận / trừng phạt kinh tế', definition: 'Biện pháp hạn chế thương mại hoặc tài chính để gây sức ép chính trị.' },
    { term: 'Trần giá', definition: 'Mức giá tối đa mà dịch vụ vận tải, bảo hiểm của bên áp dụng được phép phục vụ.' },
    { term: 'Chuyển tải', definition: 'Đưa hàng qua nước thứ ba để né hạn chế.' },
    { term: 'Chiết khấu giá', definition: 'Phần giảm giá người bán chấp nhận khi chỉ còn ít người mua.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'sanctions-commodity-prices-q',
    question: 'Một nước chiếm khoảng 5% cung toàn cầu một hàng hóa có nhiều nguồn thay thế bị cấm vận. Điều nào khả năng cao nhất?',
    options: [
      { id: 'a', text: 'Giá toàn cầu tăng gấp nhiều lần, kéo dài nhiều năm.', explain: 'Tỷ trọng nhỏ, dễ thay thế nên cú sốc giá thường nhẹ và ngắn.' },
      { id: 'b', text: 'Giá tăng nhẹ, ngắn hạn; thương mại đổi tuyến và hàng bị cấm bán chiết khấu.', correct: true, explain: 'Đúng. Tỷ trọng nhỏ và dễ thay thế làm tác động giá toàn cầu hạn chế.' },
      { id: 'c', text: 'Không có tác động gì tới dòng thương mại.', explain: 'Dòng thương mại vẫn đổi tuyến, người mua tuân thủ chuyển sang nguồn khác.' },
    ],
  },
  sources: [
    { title: 'Economic sanctions', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Economic_sanctions' },
    { title: 'Trade', publisher: 'World Bank', url: 'https://www.worldbank.org/en/topic/trade/overview' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 33,
}
