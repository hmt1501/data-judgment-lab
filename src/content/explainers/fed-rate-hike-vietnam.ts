import type { Explainer } from '../explainer'

export const fedRateHikeVietnam: Explainer = {
  id: 'fed-rate-hike-vietnam',
  slug: 'fed-rate-hike-vietnam',
  question: 'Vì sao Fed tăng lãi suất lại ảnh hưởng tới Việt Nam?',
  title: 'Fed tăng lãi suất: vì sao Việt Nam chịu tác động?',
  topic: 'macro',
  tldr: 'Khi Fed tăng lãi suất, đồng USD thường mạnh lên và dòng vốn có xu hướng quay về tài sản USD. Việt Nam chịu sức ép chủ yếu qua **tỷ giá** và **lãi suất trong nước**: NHNN phải cân nhắc giữa giữ ổn định tỷ giá và hỗ trợ tăng trưởng. Mức tác động phụ thuộc vào dự trữ ngoại hối, cán cân thanh toán và độ chênh lãi suất VND–USD.',
  keyPoints: [
    'Kênh chính là **chênh lệch lãi suất VND–USD**: lãi suất USD tăng làm việc nắm giữ USD hấp dẫn hơn, tạo áp lực lên tỷ giá USD/VND.',
    'NHNN có ba công cụ phản ứng chính: bán ngoại tệ từ dự trữ, nâng lãi suất điều hành/hút tiền qua tín phiếu, hoặc chấp nhận để VND mất giá một phần.',
    'Doanh nghiệp vay nợ bằng USD và nhập khẩu nguyên liệu chịu thiệt; doanh nghiệp xuất khẩu có doanh thu USD được lợi một phần.',
    'Dòng vốn ngoại trên thị trường chứng khoán (vốn gián tiếp) thường nhạy hơn FDI; FDI phụ thuộc chiến lược dài hạn nhiều hơn lãi suất ngắn hạn.',
    'Tác động không tự động: nếu Việt Nam có thặng dư thương mại lớn, kiều hối và FDI ổn định, sức ép tỷ giá có thể nhẹ hơn nhiều.',
  ],
  causalChain: [
    { from: 'Fed tăng lãi suất', to: 'Lợi suất tài sản USD tăng', mechanism: 'Trái phiếu Mỹ và tiền gửi USD trả lãi cao hơn, hấp dẫn nhà đầu tư toàn cầu.' },
    { from: 'Lợi suất tài sản USD tăng', to: 'USD mạnh lên, vốn rút khỏi thị trường mới nổi', mechanism: 'Nhà đầu tư cân nhắc lại rủi ro – lợi nhuận, một phần vốn gián tiếp rút khỏi các thị trường như Việt Nam.' },
    { from: 'USD mạnh lên, vốn rút khỏi thị trường mới nổi', to: 'Áp lực tỷ giá USD/VND', mechanism: 'Cầu USD trong nước tăng (thanh toán nhập khẩu, trả nợ, tích trữ), cung USD từ vốn ngoại giảm.' },
    { from: 'Áp lực tỷ giá USD/VND', to: 'NHNN phản ứng', mechanism: 'Bán dự trữ ngoại hối, phát hành tín phiếu hút VND, hoặc điều chỉnh lãi suất điều hành để giữ chênh lệch lãi suất.' },
    { from: 'NHNN phản ứng', to: 'Lãi suất trong nước và tăng trưởng tín dụng', mechanism: 'Thanh khoản VND bị thắt lại → lãi suất liên ngân hàng, rồi lãi suất huy động/cho vay có thể tăng, tín dụng chậm lại.' },
  ],
  vietnamImpact: [
    { group: 'Doanh nghiệp nhập khẩu, vay nợ USD', effect: 'Chi phí nguyên liệu và trả nợ quy đổi ra VND tăng khi tỷ giá tăng.', direction: 'down' },
    { group: 'Doanh nghiệp xuất khẩu', effect: 'Doanh thu USD quy đổi được nhiều VND hơn, nhưng nhu cầu toàn cầu có thể yếu đi nếu kinh tế Mỹ chậm lại.', direction: 'mixed' },
    { group: 'Người vay mua nhà, doanh nghiệp vay VND', effect: 'Nếu NHNN thắt thanh khoản, lãi suất cho vay có thể tăng sau một độ trễ.', direction: 'down' },
    { group: 'Người gửi tiết kiệm VND', effect: 'Lãi suất huy động có thể nhích lên; cần so với lạm phát để biết lãi suất thực.', direction: 'up' },
    { group: 'Thị trường chứng khoán', effect: 'Khối ngoại có xu hướng bán ròng khi USD mạnh; định giá chịu sức ép khi lãi suất chiết khấu tăng.', direction: 'down' },
    { group: 'Lạm phát trong nước', effect: 'VND mất giá làm hàng nhập khẩu đắt hơn (truyền dẫn tỷ giá), nhưng hàng hóa toàn cầu có thể rẻ đi nếu cầu thế giới yếu.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Tỷ giá trung tâm và tỷ giá USD/VND tại ngân hàng thương mại', why: 'Đo trực tiếp áp lực lên VND.', where: 'Website NHNN; bảng tỷ giá ngân hàng thương mại' },
    { name: 'Chỉ số USD (DXY) và lãi suất Fed funds', why: 'Cho biết sức mạnh USD toàn cầu và hướng đi của Fed.', where: 'Thông cáo FOMC; dữ liệu thị trường' },
    { name: 'Lãi suất liên ngân hàng VND qua đêm', why: 'Phản ánh nhanh việc NHNN hút/bơm thanh khoản.', where: 'NHNN công bố hằng ngày' },
    { name: 'Dự trữ ngoại hối (ước tính theo tuần nhập khẩu)', why: 'Cho biết "bộ đệm" để NHNN can thiệp được bao lâu.', where: 'Báo cáo IMF/World Bank về Việt Nam' },
    { name: 'Giao dịch ròng của khối ngoại trên HOSE', why: 'Dấu hiệu sớm của dòng vốn gián tiếp rút ra.', where: 'Thống kê của sở giao dịch, công ty chứng khoán' },
  ],
  counterpoints: [
    'Nếu Fed tăng lãi suất vì kinh tế Mỹ quá mạnh, cầu nhập khẩu từ Việt Nam có thể vẫn tốt, bù đắp phần nào tác động tỷ giá.',
    'Thặng dư thương mại lớn và FDI giải ngân ổn định có thể giữ cung USD dồi dào, khiến áp lực tỷ giá nhỏ hơn dự đoán.',
    'Kỳ vọng thị trường thường đã "định giá trước" quyết định của Fed; tác động lớn nhất đến từ **bất ngờ** so với kỳ vọng, không phải bản thân việc tăng.',
  ],
  glossary: [
    { term: 'Fed funds rate', definition: 'Lãi suất mục tiêu cho vay qua đêm giữa các ngân hàng Mỹ, công cụ chính của Fed.' },
    { term: 'Chênh lệch lãi suất VND–USD', definition: 'Khoảng cách giữa lãi suất VND và USD; càng hẹp thì càng ít động lực nắm giữ VND.' },
    { term: 'Tín phiếu NHNN', definition: 'Giấy tờ có giá NHNN phát hành để hút bớt VND khỏi hệ thống ngân hàng.' },
    { term: 'Truyền dẫn tỷ giá', definition: 'Mức độ thay đổi tỷ giá lan sang giá hàng hóa trong nước.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'fed-rate-hike-vietnam-q',
    question: 'Fed vừa tăng lãi suất đúng như thị trường dự báo từ trước. Điều nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Tỷ giá USD/VND chắc chắn sẽ tăng mạnh ngay hôm sau.', explain: 'Quyết định đã được dự báo thường đã phản ánh vào giá từ trước; phản ứng mạnh thường đến từ bất ngờ hoặc tín hiệu mới về các lần tăng tiếp theo.' },
      { id: 'b', text: 'Tác động phụ thuộc vào thông điệp tương lai của Fed và vị thế cung–cầu USD của Việt Nam lúc đó.', correct: true, explain: 'Đúng. Hãy nhìn vào hướng dẫn tương lai (forward guidance), chỉ số USD, dòng vốn khối ngoại, và tình hình thặng dư thương mại/dự trữ để đánh giá.' },
      { id: 'c', text: 'Việt Nam không bị ảnh hưởng vì VND không tự do chuyển đổi.', explain: 'VND được quản lý nhưng vẫn chịu áp lực qua cung–cầu ngoại tệ, dòng vốn và kỳ vọng; NHNN phải dùng dự trữ hoặc lãi suất để ứng phó.' },
    ],
  },
  sources: [
    { title: 'Federal Open Market Committee', publisher: 'Federal Reserve', url: 'https://www.federalreserve.gov/monetarypolicy/fomc.htm' },
    { title: 'Vietnam Overview', publisher: 'World Bank', url: 'https://www.worldbank.org/en/country/vietnam' },
    { title: 'Ngân hàng Nhà nước Việt Nam', publisher: 'NHNN', url: 'https://www.sbv.gov.vn' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
