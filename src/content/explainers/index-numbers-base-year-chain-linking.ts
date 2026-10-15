import type { Explainer } from '../../../shared/explainer'

export const indexNumbersBaseYearChainLinking: Explainer = {
  id: 'index-numbers-base-year-chain-linking',
  slug: 'index-numbers-base-year-chain-linking',
  question: 'Số chỉ số có năm gốc là gì, nối chuỗi hoạt động ra sao và vì sao đổi năm gốc khiến lịch sử khó so sánh?',
  title: 'Số chỉ số: năm gốc, nối chuỗi và cái giá của việc đổi năm gốc',
  topic: 'macro',
  tldr: 'Chỉ số như CPI hay chỉ số sản xuất công nghiệp đặt một kỳ làm mốc bằng 100 rồi cho biết các kỳ khác cao hay thấp hơn bao nhiêu. Rổ hàng và **quyền số** cố định dần lỗi thời, nên cơ quan thống kê định kỳ **đổi năm gốc (rebasing)** hoặc **nối chuỗi (chain-linking)**. Đổi mốc 100 thì không làm đổi tốc độ tăng, nhưng đổi **quyền số** thì có thể, nên chuỗi cũ và mới chỉ "khớp" tại điểm nối.',
  keyPoints: [
    'Theo ABS (Úc): **re-referencing** chỉ đổi kỳ có chỉ số bằng 100 và **không làm đổi biến động tương đối** giữa các kỳ; **rebasing** đưa vào quyền số mới và tính lại tổng hợp nên **có ảnh hưởng đến biến động** giữa các kỳ.',
    'Quyền số cố định (kiểu Laspeyres) giữ quá lâu là "không phải thực hành vững" vì cơ cấu tiêu dùng thay đổi theo giá tương đối, sở thích và hàng hóa mới; giải pháp phổ biến là **cập nhật quyền số thường xuyên và nối chuỗi** (ABS).',
    'Trong ví dụ của ABS, chuỗi nối kiểu Laspeyres có thể không trở về 100 khi giá và lượng trở lại mức gốc, còn chuỗi trực tiếp thì có; tức là **nối chuỗi có thể gây lệch** nếu trùng đỉnh hoặc đáy theo mùa hay chu kỳ.',
    'Hệ số giảm phát GDP và CPI đều đặt năm gốc bằng 100 (theo Wikipedia); đổi năm gốc làm giá trị tuyệt đối của chỉ số thay đổi nhưng không phải nguyên nhân làm lạm phát khác.',
    'Cơ quan thống kê các nước thường cập nhật năm gốc và quyền số theo chu kỳ (với Việt Nam, xem thông cáo của Cục Thống kê về năm gốc hiện hành); muốn so sánh dài hạn nên dùng tốc độ tăng hoặc chuỗi đã nối do cơ quan thống kê cung cấp.',
  ],
  causalChain: [
    { from: 'Cơ cấu tiêu dùng/sản xuất thay đổi theo thời gian', to: 'Quyền số cũ không còn đại diện', mechanism: 'Hàng mới, giá tương đối đổi và thay thế làm rổ cố định lệch thực tế; lạm phát rổ cố định thường cao hơn.' },
    { from: 'Cập nhật quyền số / đổi năm gốc', to: 'Chuỗi mới theo cơ cấu hiện tại', mechanism: 'Chỉ số mới bắt đầu với 100 tại năm gốc mới và quyền số mới; tốc độ tăng sau đó phản ánh cơ cấu hiện tại.' },
    { from: 'Nối chuỗi mới vào chuỗi cũ để có lịch sử dài', to: 'Chuỗi liên tục nhưng không "đồng nhất" tuyệt đối', mechanism: 'Ví dụ giả định: chuỗi cũ năm gốc 2019 = 100 đạt 130 năm 2024; chuỗi mới năm gốc 2024 = 100 đạt 103 năm 2025 → nối vào chuỗi cũ: 130 × 1,03 = 133,9.' },
    { from: 'Nhà phân tích so sánh số liệu qua điểm nối', to: 'Có thể hiểu sai nếu coi mức chỉ số là "cùng loại"', mechanism: 'Chỉ số trước và sau điểm nối dùng quyền số và đôi khi phương pháp khác nhau; cơ quan thống kê thường nhân nhiều thay đổi phương pháp cùng lúc.' },
  ],
  vietnamImpact: [
    { group: 'Người đọc CPI, GDP thực nhiều năm', effect: 'So sánh mức chỉ số giữa các giai đoạn cần chuỗi đã nối hoặc dùng tốc độ tăng; không so sánh trực tiếp con số mức chỉ số khác năm gốc.', direction: 'mixed' },
    { group: 'Doanh nghiệp điều chỉnh hợp đồng theo chỉ số giá', effect: 'Điều khoản trượt giá gắn với chỉ số cụ thể cần ghi rõ năm gốc/chuỗi; đổi năm gốc có thể ảnh hưởng cách tính.', direction: 'mixed' },
    { group: 'Nhà nghiên cứu, phân tích', effect: 'Điểm nối chuỗi có thể tạo đứt gãy giả trong kinh tế lượng nếu không xử lý.', direction: 'down' },
    { group: 'Nhà báo, người đọc phổ thông', effect: 'Giá trị chỉ số "133,9" hay "103" không có ý nghĩa nếu không biết năm gốc; luôn hỏi "so với mốc nào?".', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Năm gốc và quyền số hiện hành của chỉ số', why: 'Điều kiện để hiểu mức chỉ số và biết khi nào quyền số được cập nhật.', where: 'Phương pháp luận/thông cáo của Cục Thống kê' },
    { name: 'Tốc độ tăng so với cùng kỳ', why: 'Ít bị ảnh hưởng bởi việc đặt lại mốc 100 hơn mức chỉ số tuyệt đối.', where: 'Thông cáo báo chí của Cục Thống kê' },
    { name: 'Ghi chú về thay đổi phương pháp tại điểm nối', why: 'Cho biết có đứt gãy chuỗi hay không.', where: 'Phần ghi chú phương pháp của cơ quan thống kê' },
    { name: 'Chuỗi lịch sử đã nối do cơ quan thống kê cung cấp', why: 'Tránh tự nối sai.', where: 'Cơ sở dữ liệu của Cục Thống kê, các tổ chức quốc tế' },
  ],
  counterpoints: [
    'Đổi năm gốc không nhất thiết làm thay đổi lạm phát công bố trong quá khứ; chỉ khi đi kèm quyền số mới hoặc phương pháp mới thì mới thay đổi, và cơ quan thống kê thường thay cả hai cùng lúc.',
    'Nối chuỗi thường xuyên hơn giảm lệch quyền số nhưng có thể gây lệch nếu trùng chu kỳ mùa vụ (ABS); không có phương pháp hoàn hảo.',
    'Bài dựa trên tài liệu phương pháp của ABS (Úc); quy trình cụ thể của Việt Nam (năm gốc, thời điểm cập nhật) cần kiểm tra thông cáo của Cục Thống kê.',
  ],
  glossary: [
    { term: 'Năm gốc / kỳ gốc', definition: 'Kỳ được đặt chỉ số bằng 100 để so sánh.' },
    { term: 'Re-referencing', definition: 'Đổi kỳ có chỉ số bằng 100 mà không đổi quyền số.' },
    { term: 'Rebasing', definition: 'Cập nhật quyền số/rổ và tính lại tổng hợp.' },
    { term: 'Chain-linking (nối chuỗi)', definition: 'Nối các chỉ số tính theo quyền số khác nhau thành một chuỗi dài.' },
    { term: 'Quyền số (weight)', definition: 'Tỷ trọng mỗi thành phần trong chỉ số.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'index-numbers-base-year-chain-linking-q',
    question: 'Chuỗi cũ năm gốc 2019 = 100 đạt 130 năm 2024; chuỗi mới năm gốc 2024 = 100 đạt 103 năm 2025 (ví dụ giả định). Mức chỉ số 2025 trên chuỗi cũ khi nối là?',
    options: [
      { id: 'a', text: '103', explain: '103 là mức trên chuỗi mới (năm gốc 2024), không cùng mốc với chuỗi cũ.' },
      { id: 'b', text: 'Khoảng 133,9 (130 × 1,03)', correct: true, explain: 'Đúng. Dùng tốc độ tăng từ chuỗi mới nối vào chuỗi cũ. Đây là minh họa; trong thực tế còn phải chú ý thay đổi quyền số.' },
      { id: 'c', text: '233', explain: 'Cộng 130 + 103 là sai vì hai số ở hệ mốc khác nhau.' },
    ],
  },
  sources: [
    { title: '6461.0 Consumer Price Index: Concepts, Sources and Methods, 2009 – Chapter 12: Re-referencing and linking price indexes (bản lưu)', publisher: 'Australian Bureau of Statistics', url: 'https://www.abs.gov.au/AUSSTATS/abs@.nsf/7d12b0f6763c78caca257061001cc588/1aeeb25cd6853116ca257968000c7064!OpenDocument' },
    { title: 'GDP deflator', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/GDP_deflator' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 156,
}
