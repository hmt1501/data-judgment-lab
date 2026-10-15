import type { Explainer } from '../../../shared/explainer'

export const seasonalAdjustmentEconomicData: Explainer = {
  id: 'seasonal-adjustment-economic-data',
  slug: 'seasonal-adjustment-economic-data',
  question: 'Vì sao số liệu kinh tế cần điều chỉnh mùa vụ, và đọc số đã điều chỉnh thế nào?',
  title: 'Điều chỉnh mùa vụ gỡ phần "lặp lại theo lịch" ra để thấy xu hướng, nhưng không phải phép màu',
  topic: 'macro',
  tldr: 'Nhiều chuỗi số liệu (bán lẻ, việc làm, sản xuất) lên xuống đều đặn theo thời tiết, mùa thu hoạch, lễ Tết, năm học. **Điều chỉnh mùa vụ** ước lượng và loại phần đó để so sánh được hai kỳ liền nhau. Đổi lại, số đã điều chỉnh là **ước lượng**, có thể bị sửa, và không thay được so sánh cùng kỳ năm trước.',
  keyPoints: [
    'Một chuỗi thời gian thường gồm **xu hướng**, **mùa vụ** (hiệu ứng theo lịch, kể cả số ngày làm việc và lễ di động như Tết hay Phục sinh) và **phần bất thường**, theo cách phân tách của Cơ quan Thống kê Quốc gia Anh (ONS: hiệu ứng lịch, biến động bất thường, xu hướng; ONS nêu cả ngày giao dịch trong tháng và lễ di động như Phục sinh). Ví dụ về phần bất thường (sai số mẫu, thời tiết lạ, đình công) là cách minh họa chung.',
    'Cơ quan thống kê Mỹ (BLS) nêu nguyên nhân mùa vụ gồm thời tiết, mùa thu hoạch, ngày lễ lớn và lịch năm học; mục tiêu là làm dễ thấy xu hướng và biến động phi mùa vụ giữa các tháng.',
    'Với dữ liệu **chưa điều chỉnh**, so sánh **cùng kỳ năm trước** đã loại phần lớn mùa vụ; so sánh **tháng sau với tháng trước** thì cần số đã điều chỉnh. Hai cách trả lời hai câu hỏi khác nhau.',
    'Ngoại lệ (cú sốc có nguyên nhân rõ như bão, đình công) hoặc thay đổi định nghĩa có thể làm nhiễu phép điều chỉnh (ONS: giá trị ngoại lai làm méo điều chỉnh; thay đổi định nghĩa gây gãy xu hướng). Nói chung, khi có thêm dữ liệu hệ số mùa vụ được ước lượng lại nên số đã điều chỉnh có thể bị sửa (nhận định chung, trang ONS đã mở không nêu).',
    'Tại Việt Nam, Tết Âm lịch **di động** trong lịch dương nên số tháng 1–2 rất dễ gây hiểu nhầm; thông cáo của Cục Thống kê (ví dụ bán lẻ 8 tháng 2026) thường nêu mức tăng so với cùng kỳ năm trước, nên đọc kỹ cơ sở so sánh.',
  ],
  causalChain: [
    { from: 'Sự kiện lặp lại theo lịch (Tết, mùa gặt, năm học, mùa mưa)', to: 'Chuỗi số liệu có mẫu hình mùa vụ ổn định', mechanism: 'Chi tiêu, tuyển dụng, sản lượng nông nghiệp tập trung vào một số thời điểm trong năm nên cùng một tháng luôn cao hoặc thấp hơn trung bình.' },
    { from: 'Mẫu hình mùa vụ', to: 'Số thô giữa hai tháng liền kề khó so sánh', mechanism: 'Bán lẻ tháng 12 so với tháng 11 tăng do mua sắm cuối năm, không nói gì về sức mua thực sự đang mạnh lên.' },
    { from: 'Ước lượng thành phần mùa vụ (mô hình cộng hoặc nhân)', to: 'Số đã điều chỉnh mùa vụ', mechanism: 'Mô hình nhân thường dùng cho chuỗi kinh tế: số điều chỉnh = số thô ÷ hệ số mùa vụ; chuỗi có giá trị 0 hoặc âm thì không dùng được mô hình nhân (ONS).' },
    { from: 'Số đã điều chỉnh', to: 'Đọc xu hướng và điểm ngoặt nhanh hơn', mechanism: 'Người dùng so sánh liên tiếp các kỳ ngắn (tháng, quý) mà không phải đợi đủ một năm; nhưng điểm cuối chuỗi là chỗ ước lượng kém chắc nhất, nên dễ bị sửa.' },
  ],
  vietnamImpact: [
    { group: 'Nhà phân tích đọc số liệu Cục Thống kê', effect: 'Cần kiểm tra thông cáo nêu so với tháng trước, cùng kỳ hay lũy kế; tháng 1–2 chịu ảnh hưởng Tết di động nên nên đọc gộp hai tháng.', direction: 'mixed' },
    { group: 'Doanh nghiệp bán lẻ, tiêu dùng', effect: 'Doanh số theo mùa (Tết, khai giảng, cuối năm) cần so với cùng kỳ hoặc chuẩn mùa vụ nội bộ để biết thực sự tăng hay chỉ theo lịch.', direction: 'mixed' },
    { group: 'Nhà đầu tư theo dõi PMI, sản xuất công nghiệp', effect: 'PMI quốc tế thường đã điều chỉnh mùa vụ nên đọc tháng-so-tháng được; các chỉ số của Cục Thống kê thường được nêu theo so sánh cùng kỳ (bài chưa kiểm riêng chỉ số sản xuất công nghiệp).', direction: 'up' },
    { group: 'Người làm chính sách và báo chí', effect: 'Dễ kết luận sai "kinh tế đột ngột chậm lại" khi chỉ so tháng hậu-Tết với tháng trước Tết.', direction: 'down' },
  ],
  indicators: [
    { name: 'Hệ số mùa vụ hoặc ghi chú phương pháp của chuỗi', why: 'Biết số có được điều chỉnh không và bằng phương pháp nào trước khi so sánh.', where: 'Phần ghi chú phương pháp trong thông cáo của Cục Thống kê; trang phương pháp của ONS, BLS' },
    { name: 'So sánh cùng kỳ và lũy kế từ đầu năm', why: 'Cách kiểm chéo đơn giản, ít phụ thuộc mô hình mùa vụ.', where: 'Thông cáo báo chí hằng tháng của Cục Thống kê (nso.gov.vn)' },
    { name: 'Số liệu cùng một chỉ tiêu qua nhiều bản công bố (vintage)', why: 'Đo mức độ số điều chỉnh bị sửa ở điểm cuối chuỗi.', where: 'Lưu lại các bản công bố liên tiếp; kho dữ liệu của cơ quan thống kê nếu có' },
  ],
  counterpoints: [
    'Nếu mẫu hình mùa vụ thay đổi (thương mại điện tử làm lệch đỉnh mua sắm, Tết rơi sớm muộn), hệ số mùa vụ cũ sẽ điều chỉnh sai và để lại "mùa vụ còn sót" trong số liệu.',
    'Chuỗi ngắn hoặc có nhiều cú sốc (dịch bệnh) khiến ước lượng mùa vụ kém tin cậy; khi đó số thô cùng kỳ đôi khi dễ giải thích hơn.',
    'Điều chỉnh mùa vụ không loại bỏ nhiễu ngẫu nhiên; một tháng tăng mạnh vẫn có thể chỉ là biến động bất thường.',
  ],
  glossary: [
    { term: 'Điều chỉnh mùa vụ', definition: 'Ước lượng và loại phần biến động lặp lại theo lịch khỏi chuỗi số liệu để so sánh các kỳ liền nhau.' },
    { term: 'Hiệu ứng ngày làm việc / lễ di động', definition: 'Tác động do số ngày làm việc trong tháng khác nhau, hoặc lễ rơi vào tháng khác nhau mỗi năm (như Tết Âm lịch).' },
    { term: 'Xu hướng (trend)', definition: 'Hướng đi dài hạn của chuỗi, gồm cả chu kỳ trung hạn.' },
    { term: 'Phần bất thường (irregular)', definition: 'Biến động không dự báo trước như sai số mẫu, thời tiết lạ, đình công.' },
    { term: 'Mùa vụ còn sót', definition: 'Mẫu hình mùa vụ vẫn còn trong số liệu đã điều chỉnh vì mô hình chưa bắt đúng.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'seasonal-adjustment-economic-data-q',
    question: 'Doanh số bán lẻ thô tháng 12 tăng 10% so với tháng 11, nhưng số đã điều chỉnh mùa vụ chỉ tăng 1%. Cách đọc nào hợp lý?',
    options: [
      { id: 'a', text: 'Số điều chỉnh sai vì số thô mới là thực tế.', explain: 'Số thô vẫn đúng là doanh số xảy ra, nhưng nó trộn lẫn mùa mua sắm cuối năm; số điều chỉnh mới trả lời câu hỏi "sức mua có mạnh lên không".' },
      { id: 'b', text: 'Phần lớn mức tăng là do mùa vụ cuối năm; xu hướng nền chỉ tăng nhẹ.', correct: true, explain: 'Đúng. Phần chênh giữa 10% và 1% là mức tăng mà tháng 12 thường đạt; chỉ phần dư mới là tín hiệu về xu hướng, và vẫn cần kiểm tra thêm bằng so sánh cùng kỳ.' },
      { id: 'c', text: 'Kinh tế đang tăng tốc 10% mỗi tháng.', explain: 'Nhân mức tăng một tháng theo mùa vụ lên cả năm là lỗi phổ biến; mùa vụ lặp lại rồi đảo chiều.' },
    ],
  },
  sources: [
    { title: 'Seasonal adjustment', publisher: 'Office for National Statistics (Anh)', url: 'https://www.ons.gov.uk/methodology/methodologytopicsandstatisticalconcepts/seasonaladjustment' },
    { title: 'What is seasonal adjustment?', publisher: 'U.S. Bureau of Labor Statistics', url: 'https://www.bls.gov/cps/seasfaq.htm' },
    { title: 'Seasonal adjustment', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Seasonal_adjustment' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 80,
}
