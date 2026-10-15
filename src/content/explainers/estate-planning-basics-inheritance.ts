import type { Explainer } from '../../../shared/explainer'

export const estatePlanningBasicsInheritance: Explainer = {
  id: 'estate-planning-basics-inheritance',
  slug: 'estate-planning-basics-inheritance',
  question: 'Lập kế hoạch thừa kế cơ bản là gì và vì sao nên làm sớm?',
  title: 'Kế hoạch thừa kế cơ bản: di chúc, người thụ hưởng và hàng thừa kế',
  topic: 'personal-finance',
  tldr: 'Lập kế hoạch thừa kế là sắp xếp **từ lúc còn sống** việc tài sản sẽ được quản lý khi mất khả năng hành vi và chuyển cho ai sau khi qua đời. Không có di chúc hợp lệ, tài sản chia theo **hàng thừa kế do luật quy định**, có thể không đúng ý nguyện và dễ gây tranh chấp. Bài này chỉ giới thiệu khung chung; quy định chi tiết và trường hợp cụ thể cần hỏi luật sư hoặc công chứng viên.',
  keyPoints: [
    'Kế hoạch thừa kế thường gồm: **di chúc**, chỉ định **người thụ hưởng** (với bảo hiểm, tài khoản hưu trí ở nước có chế độ này), **ủy quyền** khi mất năng lực và danh mục tài sản/giấy tờ (theo Wikipedia, mô tả chung).',
    'Nếu không có di chúc, luật của nơi cư trú quyết định ai nhận gì; kết quả có thể không trùng ý muốn của người mất.',
    'Theo Điều 651 Bộ luật Dân sự 2015 (Luật 91/2015/QH13, bản toàn văn trên WIPO Lex), **hàng thừa kế thứ nhất** gồm vợ, chồng, cha đẻ, mẹ đẻ, cha nuôi, mẹ nuôi, con đẻ, con nuôi của người chết; những người thừa kế cùng hàng được hưởng phần di sản bằng nhau.',
    'Cũng theo Điều 651, người ở hàng sau chỉ được hưởng khi không còn ai ở hàng trước (đã chết, không có quyền hưởng, bị truất quyền hoặc từ chối nhận). Theo Điều 644, một số người (con chưa thành niên, cha, mẹ, vợ, chồng; con thành niên không có khả năng lao động) vẫn được hưởng tối thiểu hai phần ba suất của một người thừa kế theo pháp luật dù di chúc cho ít hơn hoặc không cho gì.',
    'Chuẩn bị sớm gồm kiểm kê tài sản và nợ, lưu giấy tờ sở hữu, cập nhật thông tin người thân; điều này giảm thủ tục và xung đột cho gia đình.',
  ],
  causalChain: [
    { from: 'Không lập di chúc hoặc di chúc không hợp lệ', to: 'Chia thừa kế theo pháp luật', mechanism: 'Pháp luật quy định thứ tự các hàng thừa kế và nguyên tắc chia phần bằng nhau trong cùng hàng, không xét mong muốn riêng của người mất.' },
    { from: 'Chia theo luật, không theo ý nguyện', to: 'Tài sản có thể đến người không dự định hoặc bị chia nhỏ', mechanism: 'Ví dụ nhà ở chung giữa nhiều người thừa kế khó bán hoặc sử dụng, dễ phát sinh bất đồng.' },
    { from: 'Tài sản và giấy tờ không được kiểm kê', to: 'Thủ tục kéo dài, chi phí tăng', mechanism: 'Người thân phải tự tìm hồ sơ, xác minh tài sản và nợ; thiếu thông tin làm chậm việc phân chia.' },
    { from: 'Lập kế hoạch sớm (di chúc rõ ràng, danh mục tài sản)', to: 'Giảm tranh chấp và chi phí cho người ở lại', mechanism: 'Ý nguyện được thể hiện hợp pháp; người thừa kế biết tài sản ở đâu, giấy tờ nằm ở đâu.' },
  ],
  vietnamImpact: [
    { group: 'Gia đình có bất động sản đứng tên một người', effect: 'Nếu người đứng tên mất đột ngột không có di chúc, việc phân chia theo hàng thừa kế có thể khiến nhiều người cùng có phần trong một tài sản không chia nhỏ được.', direction: 'mixed' },
    { group: 'Gia đình có con chưa thành niên hoặc thành viên phụ thuộc', effect: 'Cần thể hiện rõ cách bảo đảm cuộc sống cho người phụ thuộc; một số đối tượng được pháp luật bảo vệ phần tối thiểu bất kể nội dung di chúc (Điều 644 BLDS 2015; áp dụng cụ thể và các ngoại lệ cần hỏi chuyên gia).', direction: 'mixed' },
    { group: 'Gia đình có tái hôn, con riêng, con nuôi', effect: 'Quan hệ phức tạp làm kết quả chia theo luật khó đoán; di chúc rõ ràng giúp giảm tranh chấp.', direction: 'mixed' },
    { group: 'Người kinh doanh gia đình', effect: 'Không có kế hoạch kế thừa có thể làm gián đoạn quyền điều hành và vốn của doanh nghiệp khi người sáng lập mất.', direction: 'down' },
  ],
  indicators: [
    { name: 'Danh mục tài sản và nợ cập nhật hằng năm', why: 'Nền tảng để lập di chúc và chia tài sản chính xác.', where: 'Tự lập bảng; giấy tờ sở hữu, sao kê ngân hàng' },
    { name: 'Tình trạng đứng tên và giấy tờ pháp lý của tài sản', why: 'Tài sản chưa hoàn thiện giấy tờ khó chuyển cho người thừa kế.', where: 'Văn phòng đăng ký đất đai, cơ quan đăng ký tài sản' },
    { name: 'Thông tin hàng thừa kế và người phụ thuộc', why: 'Xác định ai có quyền và ai cần được bảo đảm.', where: 'Giấy tờ hộ tịch; tư vấn luật sư/công chứng viên' },
  ],
  counterpoints: [
    'Bài chỉ nêu khung chung; luật có thể được sửa đổi và còn nhiều quy định riêng (thế vị, từ chối nhận di sản, người không được hưởng di sản, điều kiện hình thức của di chúc) chưa trình bày ở đây.',
    'Không phải mọi tài sản chuyển theo di chúc: một số tài sản có cơ chế chuyển riêng (ví dụ quyền nhận bảo hiểm theo người thụ hưởng chỉ định theo hợp đồng).',
    'Kế hoạch tốt về pháp lý vẫn có thể gây xung đột nếu gia đình không trao đổi trước; văn bản không thay được giao tiếp.',
  ],
  glossary: [
    { term: 'Di sản', definition: 'Tài sản của người chết để lại.' },
    { term: 'Di chúc', definition: 'Văn bản thể hiện ý chí của cá nhân về việc chuyển tài sản sau khi chết.' },
    { term: 'Hàng thừa kế', definition: 'Nhóm người thừa kế theo thứ tự ưu tiên khi chia theo pháp luật.' },
    { term: 'Thừa kế theo pháp luật', definition: 'Chia di sản theo các hàng thừa kế khi không có di chúc hợp lệ.' },
    { term: 'Người thụ hưởng', definition: 'Người được chỉ định nhận quyền lợi (ví dụ tiền bảo hiểm) theo hợp đồng.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'estate-planning-basics-inheritance-q',
    question: 'Người mất không để lại di chúc, có vợ và hai con đẻ (cùng hàng thừa kế thứ nhất). Theo nguyên tắc trong bài, điều nào hợp lý?',
    options: [
      { id: 'a', text: 'Ba người cùng hàng được hưởng phần di sản bằng nhau; hàng sau chưa được chia.', correct: true, explain: 'Đúng theo nguyên tắc nêu trong Điều 651 (Luật 91/2015/QH13): cùng hàng chia bằng nhau, hàng sau chỉ hưởng khi hàng trước không còn ai.' },
      { id: 'b', text: 'Vợ nhận hết vì là người sống cùng.', explain: 'Luật không dành toàn bộ cho một người cùng hàng; cùng hàng được hưởng phần bằng nhau.' },
      { id: 'c', text: 'Anh chị em ruột của người mất cùng được chia vì họ cũng là người thân.', explain: 'Anh chị em ruột thuộc hàng thứ hai, chỉ hưởng khi không còn ai ở hàng thứ nhất.' },
    ],
  },
  sources: [
    { title: 'Bộ luật Dân sự 2015, số 91/2015/QH13 (toàn văn; Điều 644, 650, 651)', publisher: 'WIPO Lex (bản văn Quốc hội ban hành 24/11/2015)', url: 'https://www.wipo.int/wipolex/edocs/lexdocs/laws/vi/vn/vn079vi.pdf' },
    { title: 'Estate planning', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Estate_planning' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 144,
}
