import type { Explainer } from '../../../shared/explainer'

export const propertyNaturalDisasterInsuranceRisk: Explainer = {
  id: 'property-natural-disaster-insurance-risk',
  slug: 'property-natural-disaster-insurance-risk',
  question: 'Thiên tai ảnh hưởng tài sản của hộ gia đình thế nào và bảo hiểm đóng vai trò gì?',
  title: 'Rủi ro thiên tai với tài sản và vai trò của bảo hiểm',
  topic: 'personal-finance',
  tldr: 'Bão, lũ có thể xóa một phần lớn tài sản của hộ gia đình, trong khi phần được **bảo hiểm** chi trả thường chỉ chiếm một tỷ lệ nhỏ trong tổng thiệt hại kinh tế. Hiểu **bảo hiểm gì, loại trừ gì, mức nào** quan trọng hơn là chỉ "có mua bảo hiểm". Đây là kiến thức quản trị rủi ro, không phải khuyến nghị mua sản phẩm cụ thể.',
  keyPoints: [
    'Theo VnEconomy (đăng 16/9/2024): trước năm 2017 tiền bảo hiểm bồi thường chỉ chiếm khoảng **3–4% tổng thiệt hại kinh tế** do bão lũ; trong bão Yagi (bão số 3 năm 2024) ước khoảng **17,5%** (số tạm tính). Bài cũng nêu thiệt hại kinh tế do Yagi ước 40.000 tỷ đồng và các doanh nghiệp bảo hiểm ghi nhận hơn 9.000 hồ sơ, tổn thất ước khoảng 7.000 tỷ đồng.',
    'Phần chênh lệch giữa thiệt hại và tiền bảo hiểm chi trả gọi là **khoảng trống bảo hiểm** (protection gap): tài sản không được bảo hiểm do hộ tự gánh hoặc nhờ hỗ trợ của Nhà nước, cộng đồng.',
    'Theo trang Wikipedia về bảo hiểm lũ (nguồn thiên về Mỹ, đọc 15/10/2026), nhiều bảo hiểm tư nhân tránh bảo hiểm lũ vì **chọn lọc bất lợi** (người có rủi ro cao mua nhiều nhất) và rủi ro tập trung theo vùng; nhiều chủ nhà còn hiểu nhầm hợp đồng nhà thông thường đã bao gồm lũ. Bài học chung: phải đọc điều khoản loại trừ.',
    'Rủi ro thiên tai là rủi ro **tương quan**: nhiều tài sản cùng bị hại một lúc, khó "đa dạng hóa" trong cùng một vùng. Vì vậy vị trí và kết cấu nhà, nơi cất giữ giấy tờ quan trọng, quỹ khẩn cấp đều quan trọng song song với bảo hiểm.',
    'Biện pháp giảm thiệt hại (gia cố mái, kê cao đồ đạc, thoát nước) giảm cả rủi ro lẫn nhu cầu bồi thường; bảo hiểm chỉ chuyển một phần tổn thất, không phục hồi mọi thứ (kỷ vật, thời gian ngừng kinh doanh nếu không được bao gồm).',
  ],
  causalChain: [
    { from: 'Bão, lũ xảy ra tại vùng đông dân cư', to: 'Nhiều tài sản thiệt hại cùng lúc', mechanism: 'Thiên tai tác động theo khu vực địa lý nên tổn thất tập trung, vượt khả năng bù đắp của từng hộ.' },
    { from: 'Tài sản bị thiệt hại', to: 'Hộ phải tự bù hoặc nhờ hỗ trợ', mechanism: 'Nếu tài sản không được bảo hiểm hoặc điều khoản loại trừ, chi phí sửa chữa lấy từ tiết kiệm, vay mượn hoặc hỗ trợ công cộng.' },
    { from: 'Có hợp đồng bảo hiểm phù hợp và đủ giá trị', to: 'Một phần tổn thất được chuyển cho công ty bảo hiểm', mechanism: 'Hộ trả phí đều đặn để đổi lấy khoản bồi thường khi rủi ro xảy ra, theo phạm vi, mức miễn thường và hạn mức trong hợp đồng.' },
    { from: 'Rủi ro thiên tai tăng hoặc tập trung hơn', to: 'Công ty bảo hiểm tăng phí, thu hẹp phạm vi hoặc hạn chế bán', mechanism: 'Bảo hiểm phải bù tổn thất kỳ vọng; vùng rủi ro cao hay chọn lọc bất lợi khiến phí tăng hoặc có loại trừ.' },
    { from: 'Hộ có biện pháp giảm thiệt hại và quỹ dự phòng', to: 'Phục hồi nhanh hơn', mechanism: 'Giảm tổn thất ban đầu và có thanh khoản ngay giúp sửa chữa không phải chờ bồi thường hay vay nóng.' },
  ],
  vietnamImpact: [
    { group: 'Hộ ở vùng thường xuyên bão, lũ', effect: 'Rủi ro cao và lặp lại; phần tài sản không được bảo hiểm chiếm tỷ trọng lớn nên phục hồi chậm.', direction: 'down' },
    { group: 'Chủ nhà đã mua bảo hiểm tài sản', effect: 'Cần kiểm tra phạm vi (bão, ngập lụt), giá trị bảo hiểm so với giá trị xây dựng lại và mức miễn thường để biết thực tế được bồi thường bao nhiêu.', direction: 'mixed' },
    { group: 'Chủ xe và doanh nghiệp nhỏ', effect: 'Xe, máy móc và hàng tồn kho cũng là tài sản chịu thiệt hại khi ngập lụt; doanh nghiệp nhỏ cần kiểm tra hợp đồng có bao gồm thiệt hại do thiên tai và gián đoạn kinh doanh hay không.', direction: 'mixed' },
    { group: 'Ngân hàng cho vay có tài sản thế chấp', effect: 'Tài sản thế chấp bị thiệt hại ảnh hưởng khả năng trả nợ và giá trị bảo đảm, nên yêu cầu bảo hiểm tài sản thế chấp có ý nghĩa quản trị rủi ro.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ lệ tổn thất được bảo hiểm trên thiệt hại kinh tế sau mỗi cơn bão', why: 'Cho biết độ sâu của khoảng trống bảo hiểm và xu hướng thay đổi.', where: 'Hiệp hội Bảo hiểm Việt Nam; Cục Quản lý, giám sát bảo hiểm (Bộ Tài chính); báo cáo thiệt hại của cơ quan nhà nước' },
    { name: 'Điều khoản loại trừ, mức miễn thường và hạn mức bồi thường', why: 'Quyết định số tiền thực nhận khi xảy ra sự cố.', where: 'Hợp đồng và quy tắc bảo hiểm của công ty bạn mua' },
    { name: 'Giá trị xây dựng lại so với số tiền bảo hiểm', why: 'Bảo hiểm thấp hơn giá trị thực làm bồi thường không đủ sửa chữa.', where: 'Báo giá xây dựng tại địa phương; hợp đồng bảo hiểm' },
    { name: 'Bản đồ nguy cơ ngập lụt và cảnh báo thiên tai', why: 'Giúp đánh giá rủi ro của vị trí trước khi mua hoặc đầu tư.', where: 'Cơ quan khí tượng thủy văn và cơ quan phòng chống thiên tai' },
  ],
  counterpoints: [
    'Tỷ lệ 17,5% của bão Yagi là số tạm tính trong bài báo; cách tính thiệt hại kinh tế và thiệt hại được bảo hiểm có thể khác giữa các nguồn.',
    'Bảo hiểm không phải lúc nào cũng hợp lý về giá: ở vùng rủi ro rất cao phí có thể lớn so với giá trị tài sản; khi đó biện pháp giảm thiểu hoặc chuyển vị trí có thể hiệu quả hơn.',
    'Bài viết mang tính giáo dục về nguyên lý; điều khoản bảo hiểm cụ thể khác nhau theo công ty và sản phẩm, nên cần hỏi và đọc hợp đồng.',
  ],
  glossary: [
    { term: 'Khoảng trống bảo hiểm', definition: 'Phần thiệt hại kinh tế không được bảo hiểm chi trả.' },
    { term: 'Chọn lọc bất lợi', definition: 'Người có rủi ro cao hơn mua bảo hiểm nhiều hơn, làm bảo hiểm khó định giá.' },
    { term: 'Mức miễn thường', definition: 'Phần tổn thất đầu tiên mà người được bảo hiểm tự chịu trước khi bảo hiểm bồi thường.' },
    { term: 'Điều khoản loại trừ', definition: 'Các trường hợp hợp đồng không chi trả.' },
    { term: 'Rủi ro tương quan', definition: 'Nhiều tài sản cùng bị thiệt hại bởi một sự kiện chung.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'property-natural-disaster-insurance-risk-q',
    question: 'Nhà bạn bị ngập sau bão. Bạn có hợp đồng bảo hiểm nhà. Việc quan trọng nhất cần kiểm tra trước khi kỳ vọng được bồi thường là gì?',
    options: [
      { id: 'a', text: 'Chỉ cần có hợp đồng là được bồi thường toàn bộ.', explain: 'Bồi thường phụ thuộc phạm vi bảo hiểm, điều khoản loại trừ, mức miễn thường và hạn mức.' },
      { id: 'b', text: 'Điều khoản về phạm vi (ngập lụt, bão), loại trừ, mức miễn thường và số tiền bảo hiểm.', correct: true, explain: 'Đúng. Các điều khoản này quyết định thực nhận; nhiều chủ nhà chỉ biết điều khoản loại trừ sau khi xảy ra thiệt hại.' },
      { id: 'c', text: 'Không cần kiểm tra gì, vì bảo hiểm tự động gấp đôi giá trị nhà.', explain: 'Không có cơ sở nào cho điều này; bồi thường không vượt quá giá trị thiệt hại thực tế và hạn mức hợp đồng.' },
    ],
  },
  sources: [
    { title: 'Tỷ lệ tổn thất kinh tế do bão lũ được bảo hiểm chi trả tăng mạnh', publisher: 'VnEconomy (đăng 16/9/2024)', url: 'https://vneconomy.vn/ty-le-ton-that-kinh-te-do-bao-lu-duoc-bao-hiem-chi-tra-tang-manh.htm' },
    { title: 'Flood insurance', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Flood_insurance' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 186,
}
