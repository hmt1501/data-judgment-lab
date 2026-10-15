import type { Explainer } from '../../../shared/explainer'

export const vietnamDepositLendingRateSpread: Explainer = {
  id: 'vietnam-deposit-lending-rate-spread',
  slug: 'vietnam-deposit-lending-rate-spread',
  question: 'Chênh lệch lãi suất huy động và cho vay quyết định biên lãi ròng (NIM) của ngân hàng thế nào?',
  title: 'Chênh lệch lãi suất huy động–cho vay và NIM ngân hàng',
  topic: 'vietnam-economy',
  tldr: 'Ngân hàng kiếm lời chủ yếu từ chênh lệch giữa lãi thu từ cho vay và lãi trả cho tiền gửi. **NIM** (biên lãi ròng) = thu nhập lãi ròng / tài sản sinh lãi bình quân, khác với "chênh lệch lãi suất" (spread) vì tính theo khối lượng thực. Theo báo cáo dẫn trong Thời báo Tài chính Việt Nam (13/5/2025), NIM toàn ngành quý I/2025 giảm 45 điểm cơ bản so với cùng kỳ xuống khoảng 3,1%, mức thấp nhất từ 2016–2017 (theo SSI Research trích trong bài).',
  keyPoints: [
    'Công thức (theo Wikipedia): NIM = thu nhập lãi ròng / tài sản sinh lãi bình quân. Ví dụ giả định: tài sản sinh lãi 1.000 tỷ, thu lãi 80 tỷ, chi lãi 49,5 tỷ (nợ chịu lãi 900 tỷ, lãi suất 5,5%) thì NIM = 3,05%, còn chênh lệch lãi suất cho vay 8% với lãi suất huy động 5,5% chỉ là 2,5%.',
    'NIM cao hơn spread trong ví dụ vì một phần tài sản sinh lãi được tài trợ bằng vốn chủ sở hữu không tốn lãi; spread bỏ qua khác biệt về khối lượng giữa tài sản và nguồn vốn.',
    'Theo bài báo ngày 13/5/2025 trích KIS và SSI Research: NIM trung bình quý I/2025 giảm 45 điểm cơ bản so với cùng kỳ xuống khoảng 3,1% (KIS), thấp nhất kể từ 2016–2017 (SSI Research); KIS cho rằng nguyên nhân chính là lợi suất tài sản giảm; SSI nêu cạnh tranh cho vay ưu đãi từ cuối 2023.',
    'Nợ xấu tăng cũng kéo NIM xuống vì lãi trên khoản nợ xấu thường không được ghi nhận như thu nhập.',
    'NIM chỉ phản ánh phần lãi; lợi nhuận ngân hàng còn phụ thuộc thu nhập ngoài lãi, chi phí hoạt động và chi phí dự phòng rủi ro tín dụng.',
  ],
  causalChain: [
    { from: 'Ngân hàng cạnh tranh giảm lãi suất cho vay (gói ưu đãi)', to: 'Lợi suất tài sản sinh lãi giảm', mechanism: 'Lãi suất cho vay hạ trên danh mục mới và các khoản thả nổi nên thu nhập lãi trên mỗi đồng tài sản giảm.' },
    { from: 'Lợi suất tài sản giảm nhanh hơn chi phí vốn', to: 'NIM thu hẹp', mechanism: 'Tiền gửi có kỳ hạn tái định giá chậm hơn; khi lãi thu giảm trước lãi chi, chênh lệch hẹp lại.' },
    { from: 'Tỷ trọng tiền gửi không kỳ hạn (CASA) thấp', to: 'Chi phí vốn cao hơn, NIM yếu hơn', mechanism: 'CASA có lãi suất rất thấp nên ngân hàng có CASA lớn có chi phí vốn thấp và NIM tốt hơn.' },
    { from: 'Nợ xấu tăng', to: 'Thu nhập lãi giảm, dự phòng tăng', mechanism: 'Khoản vay chuyển nhóm nợ ngừng ghi nhận lãi thu, đồng thời ngân hàng phải trích lập dự phòng làm giảm lợi nhuận.' },
    { from: 'Thanh khoản căng, huy động cạnh tranh', to: 'Lãi suất huy động tăng, chi phí vốn tăng', mechanism: 'Ngân hàng tăng lãi huy động để thu hút vốn; nếu không chuyển được sang lãi cho vay thì NIM thu hẹp.' },
  ],
  vietnamImpact: [
    { group: 'Người gửi tiết kiệm', effect: 'Lãi suất huy động tăng khi ngân hàng cần vốn; chênh lệch với lãi vay cho thấy ngân hàng còn dư địa trả lãi bao nhiêu.', direction: 'mixed' },
    { group: 'Người vay và doanh nghiệp vay', effect: 'Khi NIM mỏng, ngân hàng có ít dư địa giảm lãi vay hơn; ưu đãi thường có thời hạn và sau đó điều chỉnh về mức thả nổi.', direction: 'mixed' },
    { group: 'Cổ đông ngân hàng', effect: 'NIM thu hẹp ảnh hưởng thu nhập lãi; ngân hàng có CASA và tăng trưởng tín dụng tốt bù trừ được.', direction: 'down' },
    { group: 'Ngân hàng quy mô vừa và nhỏ', effect: 'Theo bài báo, NIM nhóm ngân hàng cỡ vừa giảm 64 điểm cơ bản trong quý I/2025 (nguồn trích không nêu rõ), chịu áp lực cạnh tranh lớn hơn.', direction: 'down' },
    { group: 'Nhà hoạch định chính sách', effect: 'Muốn giảm lãi vay phải cân đối với sức khỏe lợi nhuận ngân hàng và khả năng trích lập dự phòng.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'NIM toàn ngành và theo ngân hàng', why: 'Chỉ báo chính của sức khỏe thu nhập lãi.', where: 'Báo cáo tài chính quý của các ngân hàng; báo cáo ngành của công ty chứng khoán' },
    { name: 'Lợi suất tài sản sinh lãi và chi phí vốn', why: 'Phân tích NIM thay đổi do vế tài sản hay vế nguồn vốn.', where: 'Thuyết minh báo cáo tài chính; báo cáo phân tích của công ty chứng khoán' },
    { name: 'Tỷ lệ CASA', why: 'Quyết định chi phí vốn thấp hay cao.', where: 'Báo cáo thường niên và báo cáo quý của ngân hàng' },
    { name: 'Nợ xấu và chi phí dự phòng', why: 'Ảnh hưởng đến thu nhập lãi và lợi nhuận sau dự phòng.', where: 'Ngân hàng Nhà nước; báo cáo tài chính ngân hàng' },
  ],
  counterpoints: [
    'NIM thu hẹp không tự nó là xấu nếu ngân hàng bù bằng tăng trưởng tín dụng, thu nhập ngoài lãi và kiểm soát chi phí, hoặc nếu lãi vay giảm giúp nền kinh tế phục hồi.',
    'Cơ sở số liệu NIM khác nhau theo công thức và phạm vi (toàn ngành hay mẫu ngân hàng niêm yết); các số trích từ báo cáo công ty chứng khoán không phải số chính thức của cơ quan quản lý.',
    'NIM chỉ nhìn phần lãi; chênh lệch lãi suất cao có thể phản ánh rủi ro tín dụng cao thay vì hiệu quả.',
  ],
  glossary: [
    { term: 'NIM', definition: 'Biên lãi ròng: thu nhập lãi ròng chia tài sản sinh lãi bình quân.' },
    { term: 'Chênh lệch lãi suất (spread)', definition: 'Chênh lệch danh nghĩa giữa lãi suất cho vay và huy động, không tính khác biệt về khối lượng.' },
    { term: 'Điểm cơ bản (bp)', definition: '0,01 điểm phần trăm; 45 bp = 0,45 điểm %.' },
    { term: 'CASA', definition: 'Tiền gửi không kỳ hạn và tiền gửi thanh toán, nguồn vốn chi phí thấp.' },
    { term: 'Tài sản sinh lãi', definition: 'Tài sản tạo thu nhập lãi như cho vay, chứng khoán nợ, tiền gửi ở tổ chức khác.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-deposit-lending-rate-spread-q',
    question: 'Ví dụ giả định: một ngân hàng cho vay 8%, huy động 5,5%, nhưng NIM tính ra 3,05% cao hơn spread 2,5%. Giải thích hợp lý nhất?',
    options: [
      { id: 'a', text: 'Có sai sót tính toán vì NIM luôn bằng spread.', explain: 'NIM tính theo khối lượng tài sản và thu chi lãi thực tế, còn spread là hiệu hai lãi suất danh nghĩa.' },
      { id: 'b', text: 'Một phần tài sản sinh lãi được tài trợ bằng vốn chủ sở hữu không tốn lãi, nên lãi ròng trên tài sản cao hơn spread.', correct: true, explain: 'Đúng: ví dụ nợ chịu lãi 900 tỷ trên 1.000 tỷ tài sản, 100 tỷ còn lại không tốn lãi.' },
      { id: 'c', text: 'NIM cao hơn spread nghĩa là ngân hàng đang giấu nợ xấu.', explain: 'Không có cơ sở; nợ xấu kéo NIM xuống chứ không làm NIM cao hơn spread.' },
    ],
  },
  sources: [
    { title: 'NIM giảm về đáy gần 10 năm, nợ xấu gia tăng tạo áp lực cho ngân hàng (13/5/2025)', publisher: 'Thời báo Tài chính Việt Nam', url: 'https://thoibaotaichinhvietnam.vn/nim-giam-ve-day-gan-10-nam-no-xau-gia-tang-tao-ap-luc-cho-ngan-hang-176366.html' },
    { title: 'Net interest margin', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Net_interest_margin' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 125,
}
