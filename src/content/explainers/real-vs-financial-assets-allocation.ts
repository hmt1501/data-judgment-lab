import type { Explainer } from '../../../shared/explainer'

export const realVsFinancialAssetsAllocation: Explainer = {
  id: 'real-vs-financial-assets-allocation',
  slug: 'real-vs-financial-assets-allocation',
  question: 'Nên giữ bao nhiêu tài sản thực (nhà đất, vàng) so với tài sản tài chính (tiền gửi, cổ phiếu, trái phiếu)?',
  title: 'Không có tỷ lệ chuẩn: quyết định theo thanh khoản, chi phí, rủi ro tập trung và mục tiêu của từng người',
  topic: 'personal-finance',
  tldr: 'Tài sản thực (bất động sản, vàng vật chất) có thể cầm nắm, thường có giá trị sử dụng hoặc tâm lý an toàn, nhưng **kém thanh khoản, chi phí giao dịch cao, khó chia nhỏ**. Tài sản tài chính dễ chia nhỏ và đa dạng hóa nhưng chịu biến động giá và phụ thuộc hệ thống tài chính. Với nhiều hộ gia đình sở hữu nhà, căn nhà thường là tài sản lớn nhất (bài này không nêu tỷ lệ cụ thể cho Việt Nam vì chưa có số liệu đã kiểm chứng), nên câu hỏi hợp lý là phần còn lại nên là gì, không phải thêm bao nhiêu tài sản thực.',
  keyPoints: [
    'Phân bổ tài sản (asset allocation) là chia khoản đầu tư giữa các nhóm tài sản và là quyết định mang tính cá nhân: tỷ lệ phù hợp thay đổi theo mục tiêu, thời gian đầu tư và khả năng chịu rủi ro (theo Investor.gov của SEC Mỹ).',
    '**Nhà ở để ở** vừa là tài sản vừa là khoản chi tiêu; khi tính danh mục, hãy tách phần để ở (không bán) khỏi phần đầu tư để thấy mức tập trung thật.',
    'Tài sản thực có **chi phí ẩn**: thuế phí chuyển nhượng, môi giới, bảo trì, thời gian bán dài, chênh lệch mua–bán của vàng; tài sản tài chính có phí quản lý, thuế, nhưng thường rẻ hơn khi giao dịch.',
    'Thanh khoản là rủi ro riêng: bán nhà trong lúc cần tiền gấp thường phải chịu giá thấp; cần có quỹ dự phòng tài chính trước khi tăng tỷ trọng tài sản kém thanh khoản.',
    'Dùng đòn bẩy (vay mua nhà) khuếch đại cả lợi nhuận và rủi ro; nên so lãi vay với lợi suất thực kỳ vọng của tài sản và dòng tiền thuê nếu có.',
  ],
  causalChain: [
    { from: 'Tỷ trọng tài sản thực lớn, đặc biệt vay mua', to: 'Danh mục kém thanh khoản và tập trung vào một thị trường', mechanism: 'Giá nhà và thu nhập từ công việc có thể cùng chịu tác động của chu kỳ kinh tế, nên cú sốc đến đồng thời.' },
    { from: 'Cần tiền gấp', to: 'Bán tài sản thực với giá chiết khấu hoặc vay thêm', mechanism: 'Thời gian giao dịch dài và ít người mua trong thời kỳ khó khăn làm giảm giá nhận được.' },
    { from: 'Tăng tỷ trọng tài sản tài chính đa dạng', to: 'Dễ tái cân bằng và chia nhỏ', mechanism: 'Bán từng phần, chi phí thấp hơn, nhưng giá biến động hằng ngày và dễ bị cảm xúc chi phối.' },
    { from: 'Lạm phát và lãi suất thay đổi', to: 'Lợi suất thực của từng nhóm đổi chiều', mechanism: 'Tài sản thực có thể bảo vệ sức mua dài hạn, nhưng lãi suất cao làm định giá và khả năng trả nợ vay thay đổi.' },
  ],
  vietnamImpact: [
    { group: 'Hộ gia đình có nhà ở và vay', effect: 'Tài sản tập trung vào nhà, khoản vay lãi thả nổi làm tăng rủi ro khi lãi suất đổi chiều.', direction: 'down' },
    { group: 'Người chưa có nhà', effect: 'Có thể cân nhắc tích lũy bằng tài sản tài chính trong khi so sánh chi phí thuê và mua.', direction: 'mixed' },
    { group: 'Người giữ vàng vật chất', effect: 'Bảo toàn sức mua theo thời gian nhưng chịu chênh lệch mua–bán và không sinh lãi.', direction: 'mixed' },
    { group: 'Nhà đầu tư cổ phiếu và trái phiếu', effect: 'Dễ đa dạng hóa và rút từng phần nhưng chịu biến động và rủi ro tín dụng.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ lệ tài sản kém thanh khoản trên tổng tài sản ròng', why: 'Đo mức dễ tổn thương khi cần tiền gấp.', where: 'Tự lập bảng tài sản–nợ của hộ gia đình' },
    { name: 'Tỷ lệ trả nợ trên thu nhập', why: 'Cho biết khả năng chịu cú sốc lãi suất.', where: 'Sao kê khoản vay; Ngân hàng Nhà nước (mặt bằng lãi suất)' },
    { name: 'Chi phí giao dịch cả vòng mua–bán của từng loại tài sản', why: 'Chi phí ẩn quyết định lợi suất ròng khi nắm giữ ngắn.', where: 'Biểu phí, thuế chuyển nhượng; bảng giá mua–bán vàng' },
  ],
  counterpoints: [
    'Tài sản thực có giá trị sử dụng (nhà ở) mà tài sản tài chính không có; so sánh chỉ bằng lợi suất tài chính có thể lệch.',
    'Tài sản tài chính phụ thuộc vào thể chế và hệ thống; ở nơi niềm tin thấp, tài sản thực được ưu tiên có lý do thực tế.',
    'Dữ liệu giá nhà đất thường ít minh bạch và theo hình thức giá chào bán, nên so lợi suất với cổ phiếu dễ bị lệch.',
  ],
  glossary: [
    { term: 'Phân bổ tài sản', definition: 'Quyết định chia vốn giữa các nhóm tài sản như tiền mặt, trái phiếu, cổ phiếu, bất động sản.' },
    { term: 'Thanh khoản', definition: 'Mức độ dễ bán tài sản nhanh mà không phải giảm giá nhiều.' },
    { term: 'Rủi ro tập trung', definition: 'Rủi ro khi phần lớn tài sản dồn vào một loại hoặc một thị trường.' },
    { term: 'Tài sản ròng', definition: 'Tổng tài sản trừ nợ.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'real-vs-financial-assets-allocation-q',
    question: 'Một hộ có 90% tài sản ròng là căn nhà đang ở, còn khoản vay lãi thả nổi. Họ cân nhắc dồn thêm tiền tiết kiệm mua đất đầu tư. Điều nên xem trước?',
    options: [
      { id: 'a', text: 'Giá đất khu vực có tăng trong ba năm qua hay không.', explain: 'Giá quá khứ là dữ liệu hạn chế và không giải quyết rủi ro tập trung, thanh khoản.' },
      { id: 'b', text: 'Mức tập trung và thanh khoản: nếu mất thu nhập hoặc lãi vay tăng thì có đủ quỹ dự phòng không.', correct: true, explain: 'Đúng. Rủi ro lớn nhất của họ là tập trung và thiếu thanh khoản, không phải thiếu tài sản thực.' },
      { id: 'c', text: 'Vay thêm để mua nhiều đất hơn vì lạm phát luôn làm đất tăng.', explain: 'Không có quy luật như vậy; thêm đòn bẩy trên danh mục đã tập trung làm rủi ro tăng mạnh.' },
    ],
  },
  sources: [
    { title: 'Asset Allocation and Diversification', publisher: 'Investor.gov (U.S. SEC)', url: 'https://www.investor.gov/introduction-investing/getting-started/asset-allocation' },
    { title: 'Asset allocation', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Asset_allocation' },
    { title: 'Diversification (finance)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Diversification_(finance)' },
    { title: 'Gold as an investment', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Gold_as_an_investment' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 110,
}
