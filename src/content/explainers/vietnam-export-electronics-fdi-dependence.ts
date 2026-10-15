import type { Explainer } from '../../../shared/explainer'

export const vietnamExportElectronicsFdiDependence: Explainer = {
  id: 'vietnam-export-electronics-fdi-dependence',
  slug: 'vietnam-export-electronics-fdi-dependence',
  question: 'Xuất khẩu điện tử và sự phụ thuộc vào FDI: cơ hội và rủi ro là gì?',
  title: 'Điện tử kéo xuất khẩu nhưng giá trị gia tăng nội địa thấp và tập trung ở vài doanh nghiệp FDI',
  topic: 'vietnam-economy',
  tldr: 'Điện tử, điện thoại và linh kiện là nhóm xuất khẩu lớn của Việt Nam, chủ yếu do doanh nghiệp **FDI** lắp ráp bằng linh kiện nhập khẩu. Lợi ích là việc làm, thặng dư thương mại và công nghệ; rủi ro là **giá trị gia tăng nội địa thấp**, tập trung vào ít khách hàng/doanh nghiệp và nhạy với quyết định đặt hàng của tập đoàn nước ngoài.',
  keyPoints: [
    'Mô hình chủ yếu là **lắp ráp**: nhập linh kiện, chip, màn hình, lắp thành thiết bị rồi xuất khẩu; giá trị xuất khẩu cao nhưng phần Việt Nam giữ lại (lương, điện, thuê đất, vật liệu phụ) chỉ là một phần.',
    'Theo số liệu Cục Hải quan 8 tháng đầu 2026 (Trung tâm WTO và Hội nhập, đăng 18/09/2026), khu vực FDI chiếm **79,9%** tổng kim ngạch xuất khẩu cả nước, **99,4%** nhóm điện tử – máy tính – linh kiện và **99,9%** nhóm điện thoại và linh kiện; sự tập trung vào vài tập đoàn lớn khiến kết quả xuất khẩu và tăng trưởng phụ thuộc vào kế hoạch sản xuất của họ.',
    'Cơ hội: thu hút đầu tư, tạo việc làm công nghiệp, học hỏi quy trình, phát triển doanh nghiệp cung ứng trong nước (**liên kết ngược**), nâng bậc lên khâu giá trị cao như thiết kế, kiểm thử, đóng gói bán dẫn.',
    'Rủi ro: tập đoàn dịch chuyển nhà máy khi chi phí/chính sách thay đổi, nhập khẩu linh kiện lớn làm xuất siêu ròng nhỏ hơn con số xuất khẩu, và nhạy cảm với cầu tiêu dùng điện tử toàn cầu và thuế quan.',
    'Chính sách trọng tâm thường là tăng **tỷ lệ nội địa hóa**, đào tạo kỹ sư, hạ tầng điện và logistics, và thu hút nhà cung ứng cấp 1–2 sang Việt Nam.',
  ],
  causalChain: [
    { from: 'Tập đoàn đa quốc gia đa dạng hóa chuỗi sản xuất', to: 'Đặt nhà máy lắp ráp tại Việt Nam', mechanism: 'Việt Nam có chi phí lao động cạnh tranh, hiệp định thương mại, vị trí gần Trung Quốc và ổn định chính trị; đó là lý do chọn địa điểm.' },
    { from: 'Nhà máy FDI hoạt động', to: 'Kim ngạch xuất khẩu và việc làm tăng', mechanism: 'Doanh thu xuất khẩu lớn kéo theo nhu cầu lao động, dịch vụ hỗ trợ và đóng góp thuế, nhưng nhập khẩu linh kiện cũng tăng tương ứng.' },
    { from: 'Nhập khẩu linh kiện lớn', to: 'Giá trị gia tăng nội địa thấp trên mỗi đơn vị xuất khẩu', mechanism: 'Phần lớn giá trị nằm ở chip, màn hình, thiết kế và thương hiệu của nước ngoài; Việt Nam hưởng phần lắp ráp và dịch vụ phụ trợ.' },
    { from: 'Doanh nghiệp nội địa tham gia chuỗi cung ứng', to: 'Nâng tỷ lệ nội địa hóa, công nghệ, thu nhập', mechanism: 'Khi nhà cung cấp trong nước đạt chuẩn chất lượng, họ cung ứng nguyên liệu, linh kiện đơn giản rồi tiến dần lên khâu phức tạp hơn.' },
    { from: 'Tập đoàn thay đổi kế hoạch đặt hàng hoặc chuyển nhà máy', to: 'Xuất khẩu, việc làm và tăng trưởng biến động mạnh', mechanism: 'Khi kết quả phụ thuộc vài chủ thể, quyết định của họ trở thành rủi ro tập trung với nền kinh tế.' },
  ],
  vietnamImpact: [
    { group: 'Người lao động công nghiệp', effect: 'Việc làm và thu nhập ổn định hơn khi đơn hàng tốt, nhưng dễ bị cắt giảm giờ làm/việc làm khi đơn hàng giảm.', direction: 'mixed' },
    { group: 'Doanh nghiệp cung ứng trong nước', effect: 'Cơ hội gia nhập chuỗi cung ứng nhưng phải đáp ứng chuẩn chất lượng, giao hàng và tài chính khắt khe.', direction: 'up' },
    { group: 'Cán cân thương mại', effect: 'Xuất khẩu điện tử lớn nhưng nhập khẩu linh kiện cũng lớn; thặng dư ròng nhỏ hơn con số xuất khẩu gộp.', direction: 'mixed' },
    { group: 'Ngân sách và địa phương có khu công nghiệp', effect: 'Thu thuế, tiền thuê đất, việc làm và dịch vụ tăng, đồng thời gánh áp lực hạ tầng điện, nhà ở công nhân.', direction: 'mixed' },
    { group: 'Nền kinh tế vĩ mô', effect: 'Tăng trưởng GDP nhạy với chu kỳ điện tử toàn cầu và quyết định đầu tư của vài tập đoàn.', direction: 'down' },
  ],
  indicators: [
    { name: 'Kim ngạch xuất khẩu, nhập khẩu theo nhóm hàng (điện tử, máy tính, linh kiện)', why: 'So sánh hai bên để ước lượng thặng dư ròng và mức phụ thuộc.', where: 'Cục Thống kê (nso.gov.vn), Hải quan Việt Nam' },
    { name: 'Tỷ trọng xuất khẩu của khu vực FDI', why: 'Đo mức tập trung vào doanh nghiệp nước ngoài.', where: 'Cục Thống kê (nso.gov.vn)' },
    { name: 'Vốn FDI đăng ký và giải ngân', why: 'Cho biết cam kết mở rộng sản xuất tương lai.', where: 'Cục Thống kê, Bộ Tài chính; UNCTAD World Investment Report' },
    { name: 'PMI sản xuất và đơn hàng xuất khẩu mới', why: 'Chỉ báo sớm về đơn hàng điện tử.', where: 'Báo cáo PMI hằng tháng; Cục Thống kê' },
  ],
  counterpoints: [
    'Gia nhập chuỗi giá trị bằng lắp ráp là bước khởi đầu phổ biến của nhiều nền kinh tế đi trước; vấn đề là có nâng bậc được hay không chứ không phải bản thân việc lắp ráp.',
    'Nhà đầu tư nước ngoài cũng góp phần chuyển giao công nghệ, quản trị và kết nối thị trường mà doanh nghiệp nội địa khó tự có.',
    'Không có con số nội địa hóa duy nhất: giá trị gia tăng phụ thuộc cách đo (thương mại giá trị gia tăng) và từng sản phẩm, nên cần thận trọng khi so sánh giữa các nước.',
  ],
  glossary: [
    { term: 'FDI', definition: 'Đầu tư trực tiếp nước ngoài: nhà đầu tư nước ngoài thành lập hoặc sở hữu doanh nghiệp tại Việt Nam.' },
    { term: 'Giá trị gia tăng', definition: 'Phần giá trị tạo ra tại một nền kinh tế sau khi trừ chi phí đầu vào mua từ bên ngoài.' },
    { term: 'Nội địa hóa', definition: 'Tỷ lệ đầu vào (linh kiện, nguyên liệu) được sản xuất trong nước.' },
    { term: 'Liên kết ngược', definition: 'Mối quan hệ giữa doanh nghiệp FDI với nhà cung cấp trong nước.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'vietnam-export-electronics-fdi-dependence-q',
    question: 'Kim ngạch xuất khẩu điện tử tăng mạnh 20% nhưng nhập khẩu linh kiện cũng tăng 20%. Điều nào đúng?',
    options: [
      { id: 'a', text: 'GDP tăng thêm đúng bằng mức tăng của kim ngạch xuất khẩu gộp.', explain: 'GDP tính giá trị gia tăng, không phải doanh thu xuất khẩu gộp; nhập khẩu linh kiện phải trừ ra.' },
      { id: 'b', text: 'Kim ngạch gộp không phải phần Việt Nam giữ lại; phần đó là chênh lệch sau khi trừ linh kiện nhập, nhỏ hơn nhiều so với kim ngạch gộp.', correct: true, explain: 'Đúng. Khi xuất khẩu và nhập khẩu linh kiện cùng tăng, giá trị Việt Nam giữ lại gần với chênh lệch giữa hai số (cộng giá trị tạo ra trong nước), không phải toàn bộ kim ngạch.' },
      { id: 'c', text: 'Thặng dư thương mại của nhóm này chắc chắn giảm vì nhập khẩu tăng.', explain: 'Nếu xuất và nhập cùng tăng 20% thì chênh lệch (nếu dương) cũng tăng 20%, không giảm; kết luận phụ thuộc quy mô tương đối của hai bên.' },
    ],
  },
  sources: [
    { title: 'Khu vực FDI tiếp tục là lực kéo thúc đẩy tăng trưởng xuất khẩu', publisher: 'Trung tâm WTO và Hội nhập (VCCI), 18/09/2026, số liệu Cục Hải quan 8 tháng 2026', url: 'https://trungtamwto.vn/tin-tuc/33474-khu-vuc-fdi-tiep-tuc-la-luc-keo-thuc-day-tang-truong-xuat-khau' },
    { title: 'Xuất khẩu máy tính và linh kiện điện tử chủ yếu thuộc về doanh nghiệp FDI', publisher: 'Trung tâm WTO và Hội nhập (VCCI), 06/03/2023, số liệu 2022', url: 'https://trungtamwto.vn/tin-tuc/22880-xuat-khau-may-tinh-va-linh-kien-dien-tu-chu-yeu-thuoc-ve-doanh-nghiep-fdi' },
    { title: 'Viet Nam Overview', publisher: 'World Bank Group', url: 'https://www.worldbank.org/en/country/vietnam/overview' },
    { title: 'Economy of Vietnam', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Economy_of_Vietnam' },
    { title: 'Foreign direct investment', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Foreign_direct_investment' },
  ],
  origin: 'curated',
  asOf: '2026-10-15',
  order: 16,
}
