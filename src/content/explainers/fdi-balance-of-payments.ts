import type { Explainer } from '../../../shared/explainer'

export const fdiBalanceOfPayments: Explainer = {
  id: 'fdi-balance-of-payments',
  slug: 'fdi-balance-of-payments',
  question: 'FDI quan trọng thế nào với cán cân thanh toán và nền kinh tế Việt Nam?',
  title: 'FDI và cán cân thanh toán: đăng ký, giải ngân và nguồn cung ngoại tệ',
  topic: 'vietnam-economy',
  tldr: 'FDI là vốn nhà đầu tư nước ngoài đưa vào để lập và vận hành doanh nghiệp tại Việt Nam. Con số hay được nhắc là **vốn đăng ký** (cam kết), nhưng thứ thực sự đi vào nền kinh tế là **vốn giải ngân (thực hiện)**: năm 2025 khoảng 27,6 tỷ USD so với 38,4 tỷ USD đăng ký, theo Cục Thống kê. FDI giải ngân là nguồn cung ngoại tệ ổn định trong **tài khoản tài chính**, đồng thời tạo việc làm và xuất khẩu, nhưng cũng đi kèm rủi ro phụ thuộc và dòng chuyển lợi nhuận về nước.',
  keyPoints: [
    '**Vốn đăng ký** gồm vốn dự án mới, vốn điều chỉnh tăng và góp vốn mua cổ phần; nó là chỉ báo về **ý định** đầu tư, có thể giải ngân trong nhiều năm hoặc không bao giờ giải ngân hết.',
    '**Vốn giải ngân (thực hiện)** mới tạo ra nhà xưởng, việc làm và dòng ngoại tệ thực; năm 2025 đạt khoảng 27,6 tỷ USD, trong đó công nghiệp chế biến, chế tạo chiếm khoảng 83%.',
    'Trong **cán cân thanh toán**, FDI vào nằm ở **tài khoản tài chính**; còn lợi nhuận doanh nghiệp FDI chuyển về nước nằm ở mục **thu nhập sơ cấp** (thu nhập đầu tư) của tài khoản vãng lai, làm giảm phần ngoại tệ giữ lại.',
    'Khu vực FDI chiếm tỷ trọng lớn trong kim ngạch xuất khẩu, nhưng cũng nhập khẩu nhiều linh kiện; giá trị gia tăng giữ lại trong nước thấp hơn nhiều so với con số xuất khẩu.',
    'Khác với vốn gián tiếp (mua cổ phiếu, trái phiếu), FDI khó rút nhanh nên được xem là nguồn vốn **ổn định hơn** cho tỷ giá và dự trữ ngoại hối.',
  ],
  causalChain: [
    { from: 'Nhà đầu tư nước ngoài quyết định mở rộng sản xuất tại Việt Nam', to: 'Vốn đăng ký tăng', mechanism: 'Dự án được cấp giấy chứng nhận đầu tư hoặc điều chỉnh tăng vốn; đây là cam kết, chưa phải tiền đã chuyển vào.' },
    { from: 'Vốn đăng ký tăng', to: 'Vốn giải ngân tăng sau một độ trễ', mechanism: 'Nhà đầu tư chuyển ngoại tệ vào để thuê đất, xây nhà xưởng, mua máy móc; tiến độ phụ thuộc thủ tục, hạ tầng, nhu cầu thị trường.' },
    { from: 'Vốn giải ngân tăng sau một độ trễ', to: 'Cung ngoại tệ và dự trữ ngoại hối được củng cố', mechanism: 'Ngoại tệ chuyển vào được bán lấy VND để chi trả trong nước, làm tăng cung USD; NHNN có điều kiện mua vào bổ sung dự trữ.' },
    { from: 'Cung ngoại tệ và dự trữ ngoại hối được củng cố', to: 'Sản xuất, việc làm và xuất khẩu tăng', mechanism: 'Nhà máy đi vào hoạt động thuê lao động, mua đầu vào, xuất khẩu sản phẩm, tạo thêm nguồn thu ngoại tệ từ thương mại.' },
    { from: 'Sản xuất, việc làm và xuất khẩu tăng', to: 'Dòng chuyển lợi nhuận và nhập khẩu đầu vào tăng theo', mechanism: 'Khi dự án có lãi, lợi nhuận được chuyển về công ty mẹ; linh kiện nhập khẩu lớn làm phần giá trị giữ lại trong nước nhỏ hơn kim ngạch xuất khẩu.' },
  ],
  vietnamImpact: [
    { group: 'Tỷ giá và dự trữ ngoại hối', effect: 'FDI giải ngân ổn định là một trong những nguồn cung USD quan trọng, giúp giảm áp lực tỷ giá khi vốn gián tiếp rút ra.', direction: 'up' },
    { group: 'Người lao động', effect: 'Tạo nhiều việc làm trong công nghiệp chế biến, chế tạo, nhưng phần lớn ở khâu lắp ráp, giá trị gia tăng và mức lương còn hạn chế.', direction: 'up' },
    { group: 'Doanh nghiệp trong nước', effect: 'Cơ hội trở thành nhà cung cấp cho chuỗi FDI, nhưng cũng chịu cạnh tranh về lao động, đất đai và ưu đãi.', direction: 'mixed' },
    { group: 'Bất động sản công nghiệp và logistics', effect: 'Nhu cầu thuê đất khu công nghiệp, nhà xưởng, kho bãi tăng theo dòng FDI giải ngân.', direction: 'up' },
    { group: 'Ngân sách và môi trường', effect: 'Đóng góp thu ngân sách, nhưng ưu đãi thuế, chuyển giá và yêu cầu về năng lượng, môi trường là những chi phí cần cân nhắc.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Vốn FDI giải ngân (thực hiện) theo tháng, lũy kế năm', why: 'Phản ánh dòng tiền thực đi vào nền kinh tế, quan trọng hơn vốn đăng ký.', where: 'Thông cáo kinh tế – xã hội hằng tháng của Cục Thống kê (nso.gov.vn)' },
    { name: 'Vốn đăng ký mới, điều chỉnh và góp vốn mua cổ phần', why: 'Chỉ báo sớm về ý định đầu tư; cần tách ba thành phần vì ý nghĩa khác nhau.', where: 'Bộ Tài chính; Cục Thống kê' },
    { name: 'Tỷ trọng khu vực FDI trong xuất khẩu và nhập khẩu', why: 'Cho biết mức độ phụ thuộc của thương mại vào doanh nghiệp FDI.', where: 'Số liệu xuất nhập khẩu của Cục Thống kê và Hải quan' },
    { name: 'Cán cân thanh toán: tài khoản vãng lai, tài khoản tài chính, thu nhập sơ cấp', why: 'Cho thấy bức tranh đầy đủ: FDI vào, lợi nhuận chuyển ra, và tác động ròng lên dự trữ.', where: 'NHNN; báo cáo của IMF và World Bank về Việt Nam' },
    { name: 'FDI ròng theo chuẩn quốc tế (% GDP)', why: 'So sánh Việt Nam với các nước khác trên cùng một thước đo.', where: 'World Bank – World Development Indicators' },
  ],
  counterpoints: [
    'Vốn đăng ký kỷ lục chưa chắc là tin tốt ngay: một vài dự án rất lớn có thể chiếm phần lớn con số nhưng giải ngân chậm hoặc bị điều chỉnh.',
    'FDI tập trung vào một số ít tập đoàn và ngành (điện tử, linh kiện) làm xuất khẩu và tăng trưởng nhạy cảm với chu kỳ công nghệ và chính sách thương mại của các nước nhập khẩu.',
    'Ở một số giai đoạn, lợi nhuận chuyển về nước và nhập khẩu đầu vào có thể bù trừ một phần đáng kể lượng ngoại tệ FDI mang lại, nên tác động ròng lên cán cân nhỏ hơn con số giải ngân.',
  ],
  glossary: [
    { term: 'FDI', definition: 'Đầu tư trực tiếp nước ngoài: nhà đầu tư nắm quyền kiểm soát hoặc ảnh hưởng đáng kể tới doanh nghiệp được đầu tư.' },
    { term: 'Vốn đăng ký', definition: 'Tổng vốn cam kết theo giấy chứng nhận đầu tư, gồm cấp mới, điều chỉnh tăng và góp vốn mua cổ phần.' },
    { term: 'Vốn giải ngân (thực hiện)', definition: 'Phần vốn đã thực sự được chi để triển khai dự án trong kỳ.' },
    { term: 'Cán cân thanh toán', definition: 'Bảng ghi chép mọi giao dịch kinh tế giữa trong nước và nước ngoài, gồm tài khoản vãng lai và tài khoản vốn, tài chính.' },
    { term: 'Vốn đầu tư gián tiếp (FII/FPI)', definition: 'Vốn mua cổ phiếu, trái phiếu mà không nắm quyền kiểm soát doanh nghiệp; dễ rút ra hơn FDI.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'fdi-balance-of-payments-q',
    question: 'Một bản tin viết: "FDI đăng ký 9 tháng tăng 60%". Bạn nên kiểm tra thêm điều gì trước khi kết luận về tác động lên tỷ giá?',
    options: [
      { id: 'a', text: 'Không cần, vốn đăng ký tăng mạnh nghĩa là ngoại tệ đã chảy vào tương ứng.', explain: 'Vốn đăng ký chỉ là cam kết; tiền có thể giải ngân trong nhiều năm hoặc không giải ngân hết.' },
      { id: 'b', text: 'Vốn giải ngân cùng kỳ, cơ cấu đăng ký (dự án mới, điều chỉnh, góp vốn) và có dự án đơn lẻ nào quá lớn không.', correct: true, explain: 'Đúng. Giải ngân mới là dòng ngoại tệ thực; cơ cấu và quy mô từng dự án cho biết con số đăng ký có bền vững hay chỉ do một vài thương vụ.' },
      { id: 'c', text: 'Chỉ số VN-Index cùng kỳ.', explain: 'Chứng khoán phản ánh dòng vốn gián tiếp và tâm lý thị trường, không cho biết FDI đã giải ngân bao nhiêu.' },
    ],
  },
  sources: [
    { title: 'Vốn FDI thực hiện năm 2025 lập kỷ lục cao nhất trong vòng 5 năm', publisher: 'VnEconomy', url: 'https://vneconomy.vn/von-fdi-thuc-hien-nam-2025-lap-ky-luc-cao-nhat-trong-vong-5-nam.htm' },
    { title: 'Foreign direct investment, net inflows (BoP, current US$) – Viet Nam', publisher: 'World Bank', url: 'https://data.worldbank.org/indicator/BX.KLT.DINV.CD.WD?locations=VN' },
    { title: 'Cục Thống kê – Bộ Tài chính', publisher: 'Cục Thống kê', url: 'https://www.nso.gov.vn' },
    { title: 'Vietnam Overview', publisher: 'World Bank', url: 'https://www.worldbank.org/en/country/vietnam/overview' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
