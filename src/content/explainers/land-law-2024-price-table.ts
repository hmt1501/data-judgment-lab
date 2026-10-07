import type { Explainer } from '../explainer'

export const landLaw2024PriceTable: Explainer = {
  id: 'land-law-2024-price-table',
  slug: 'land-law-2024-price-table',
  question: 'Luật Đất đai 2024 và bảng giá đất mới ảnh hưởng gì tới người dân và thị trường?',
  title: 'Luật Đất đai 2024 và bảng giá đất: thay đổi gì, ai chịu tác động?',
  topic: 'real-estate',
  tldr: 'Luật Đất đai 2024 (số 31/2024/QH15) có hiệu lực từ **1/8/2024**, **bỏ khung giá đất** của Chính phủ và yêu cầu tỉnh ban hành **bảng giá đất hằng năm**, áp dụng lần đầu từ **1/1/2026**. Bảng giá đất là căn cứ tính tiền sử dụng đất, tiền thuê đất, thuế, phí và bồi thường; khi bảng giá tiến gần giá thị trường, các khoản này thường tăng. Từ 1/1/2026, Nghị quyết 254/2025/QH15 bổ sung cơ chế **hệ số điều chỉnh giá đất**; một dự án Luật Đất đai (sửa đổi) đang được trình Quốc hội tại kỳ họp tháng 10/2026.',
  keyPoints: [
    '**Mốc thời gian (đã kiểm chứng):** Luật được thông qua ngày 18/1/2024, hiệu lực sớm từ 1/8/2024 (theo Luật 43/2024/QH15). Bảng giá đất cũ theo Luật 2013 được dùng đến hết 31/12/2025; bảng giá đất mới áp dụng từ 1/1/2026.',
    '**Bảng giá đất hằng năm thay vì 5 năm:** UBND tỉnh xây dựng, HĐND tỉnh quyết định; hằng năm có thể điều chỉnh, áp dụng từ 1/1 năm sau. Mục tiêu là đưa giá Nhà nước sát hơn diễn biến thị trường.',
    '**Phạm vi sử dụng rộng hơn:** bảng giá đất là căn cứ tính tiền sử dụng đất khi chuyển mục đích/công nhận quyền, tiền thuê đất, thuế liên quan đến đất, lệ phí, xử phạt và bồi thường khi Nhà nước thu hồi đất.',
    '**Nghị quyết 254/2025/QH15** (thông qua 11/12/2025, hiệu lực chủ yếu từ 1/1/2026) tháo gỡ vướng mắc: tiền sử dụng đất, tiền thuê đất và bồi thường được tính dựa trên **bảng giá đất kết hợp hệ số điều chỉnh giá đất** do UBND tỉnh ban hành, giảm phụ thuộc vào thủ tục định giá cụ thể từng trường hợp.',
    'Khung pháp lý còn đang thay đổi: dự án **Luật Đất đai (sửa đổi)** được trình Quốc hội tại Kỳ họp thứ 2 (tháng 10/2026). Trước khi giao dịch hoặc khiếu nại, cần đối chiếu văn bản đang có hiệu lực tại thời điểm đó. Bài này không phải tư vấn pháp lý.',
  ],
  causalChain: [
    { from: 'Bảng giá đất được xây dựng sát giá thị trường hơn', to: 'Giá đất Nhà nước tăng ở nhiều vị trí', mechanism: 'Bảng giá cũ thường thấp hơn nhiều so với giá giao dịch; khi cập nhật theo nguyên tắc thị trường, nhiều tuyến đường/khu vực có mức giá mới cao hơn.' },
    { from: 'Giá đất Nhà nước tăng ở nhiều vị trí', to: 'Nghĩa vụ tài chính về đất tăng', mechanism: 'Tiền sử dụng đất khi chuyển mục đích, tiền thuê đất, lệ phí trước bạ và thuế tính theo giá Nhà nước đều tăng theo căn cứ tính.' },
    { from: 'Nghĩa vụ tài chính về đất tăng', to: 'Chi phí phát triển dự án và giao dịch tăng', mechanism: 'Chủ đầu tư phải nộp tiền sử dụng đất cao hơn; người dân chuyển mục đích sử dụng đất (ví dụ từ đất nông nghiệp sang đất ở) tốn kém hơn.' },
    { from: 'Chi phí phát triển dự án và giao dịch tăng', to: 'Giá bán sản phẩm mới chịu áp lực tăng', mechanism: 'Một phần chi phí đất được chuyển vào giá bán; mức chuyển được bao nhiêu còn phụ thuộc sức mua của thị trường.' },
    { from: 'Giá đất Nhà nước tăng ở nhiều vị trí', to: 'Tiền bồi thường khi thu hồi đất sát thực tế hơn', mechanism: 'Bồi thường tính theo bảng giá và hệ số điều chỉnh; giá Nhà nước gần thị trường giúp giảm chênh lệch, từ đó có thể giảm khiếu nại và đẩy nhanh giải phóng mặt bằng.' },
  ],
  vietnamImpact: [
    { group: 'Người có đất bị thu hồi', effect: 'Mức bồi thường có xu hướng sát giá thị trường hơn so với thời bảng giá cũ, dù vẫn có thể thấp hơn giá giao dịch thực tế ở nơi sốt giá.', direction: 'up' },
    { group: 'Người dân chuyển mục đích sử dụng đất, xin cấp sổ', effect: 'Tiền sử dụng đất phải nộp có thể tăng đáng kể khi bảng giá mới cao hơn bảng giá cũ.', direction: 'down' },
    { group: 'Người mua bán nhà đất', effect: 'Thuế TNCN khi chuyển nhượng vẫn là 2% giá chuyển nhượng (giữ nguyên trong Luật Thuế TNCN 2025); thuế và lệ phí trước bạ liên quan đến đất dùng giá Nhà nước làm một căn cứ đối chiếu, nên bảng giá tăng thường nâng "mức sàn" tính thuế, phí và thu hẹp khoảng trống khai giá thấp.', direction: 'down' },
    { group: 'Chủ đầu tư dự án', effect: 'Chi phí đất tăng nhưng thủ tục xác định tiền sử dụng đất có thể nhanh và dễ dự báo hơn nhờ cơ chế bảng giá + hệ số điều chỉnh.', direction: 'mixed' },
    { group: 'Ngân sách địa phương', effect: 'Thu từ đất có thể tăng nhờ căn cứ tính cao hơn, nhưng phụ thuộc vào việc thị trường có đủ giao dịch và dự án được triển khai hay không.', direction: 'up' },
    { group: 'Ngân hàng', effect: 'Bảng giá đất là một tham chiếu khi định giá tài sản đảm bảo; tác động trực tiếp hạn chế vì ngân hàng chủ yếu định giá theo thị trường.', direction: 'mixed' },
  ],
  indicators: [
    { name: 'Quyết định bảng giá đất và hệ số điều chỉnh giá đất của tỉnh', why: 'Căn cứ trực tiếp để tính tiền sử dụng đất, thuế, phí và bồi thường tại địa phương bạn.', where: 'Cổng thông tin UBND/HĐND tỉnh; Sở Nông nghiệp và Môi trường' },
    { name: 'Văn bản hướng dẫn mới (nghị định, nghị quyết)', why: 'Cơ chế tính có thể thay đổi giữa các năm; cần biết văn bản nào đang có hiệu lực.', where: 'Cổng thông tin Chính phủ, Công báo; các cơ sở dữ liệu văn bản pháp luật' },
    { name: 'Tiến độ dự án Luật Đất đai (sửa đổi)', why: 'Có thể thay đổi nguyên tắc định giá, bảng giá đất, bồi thường và thủ tục.', where: 'Cổng thông tin Quốc hội; báo chí chính thống đưa tin kỳ họp' },
    { name: 'Chênh lệch giữa giá giao dịch và giá trong bảng giá', why: 'Chênh lệch lớn cho biết bảng giá còn xa thị trường, dư địa điều chỉnh trong các năm tới.', where: 'Báo cáo thị trường của Bộ Xây dựng, hiệp hội BĐS, công ty nghiên cứu thị trường' },
  ],
  counterpoints: [
    'Bảng giá "sát thị trường" khó đạt được trong thực tế: giá giao dịch biến động nhanh, dữ liệu giá khai báo thường thấp hơn thực tế, nên mỗi tỉnh áp dụng mức điều chỉnh rất khác nhau.',
    'Nghĩa vụ tài chính tăng có thể làm chậm việc chuyển mục đích và cấp sổ, giảm nguồn cung hợp pháp; khi đó tác động lên giá bán không chỉ do chi phí đất mà còn do thiếu cung.',
    'Luật Đất đai đang được sửa đổi tiếp; những gì đúng ở năm 2026 có thể thay đổi khi luật mới được thông qua, nên không nên coi các cơ chế hiện tại là cố định lâu dài.',
  ],
  glossary: [
    { term: 'Bảng giá đất', definition: 'Bảng giá do HĐND tỉnh quyết định theo loại đất, khu vực, vị trí; từ 2026 được điều chỉnh hằng năm.' },
    { term: 'Khung giá đất', definition: 'Khung giá tối thiểu – tối đa do Chính phủ ban hành theo Luật Đất đai 2013; đã bị bỏ trong Luật Đất đai 2024.' },
    { term: 'Hệ số điều chỉnh giá đất', definition: 'Tỷ lệ tăng/giảm so với giá trong bảng giá đất, do UBND tỉnh ban hành, dùng để tính tiền sử dụng đất, tiền thuê đất, bồi thường.' },
    { term: 'Tiền sử dụng đất', definition: 'Khoản người sử dụng đất nộp cho Nhà nước khi được giao đất, chuyển mục đích hoặc công nhận quyền sử dụng đất trong một số trường hợp.' },
    { term: 'Giá đất cụ thể', definition: 'Giá do cơ quan Nhà nước xác định riêng cho từng trường hợp/dự án theo các phương pháp định giá.' },
  ],
  quiz: {
    kind: 'quiz',
    id: 'land-law-2024-price-table-q',
    question: 'Tỉnh X công bố bảng giá đất 2026 tăng mạnh so với bảng giá cũ. Nhận định nào hợp lý nhất?',
    options: [
      { id: 'a', text: 'Giá giao dịch đất ở tỉnh X chắc chắn sẽ tăng tương ứng.', explain: 'Bảng giá là căn cứ tính nghĩa vụ tài chính, không phải giá thị trường. Giá giao dịch còn phụ thuộc cung–cầu, tín dụng và tâm lý; chi phí tăng có thể còn làm giảm giao dịch.' },
      { id: 'b', text: 'Người chuyển mục đích sử dụng đất và người có đất bị thu hồi sẽ chịu tác động trái chiều: người trước nộp nhiều hơn, người sau có thể được bồi thường cao hơn.', correct: true, explain: 'Đúng. Cùng một căn cứ giá được dùng cho cả khoản phải nộp và khoản được nhận. Cần xem thêm hệ số điều chỉnh và văn bản hướng dẫn đang có hiệu lực của tỉnh.' },
      { id: 'c', text: 'Không ai bị ảnh hưởng vì bảng giá chỉ dùng để thống kê.', explain: 'Bảng giá đất là căn cứ tính tiền sử dụng đất, tiền thuê đất, thuế, phí và bồi thường, nên ảnh hưởng trực tiếp tới nghĩa vụ và quyền lợi tài chính.' },
    ],
  },
  sources: [
    { title: 'Những điểm mới quan trọng của Luật Đất đai năm 2024', publisher: 'VnEconomy', url: 'https://vneconomy.vn/nhung-diem-moi-quan-trong-cua-luat-dat-dai-nam-2024.htm' },
    { title: 'Nghị quyết 254/2025/QH15 tháo gỡ khó khăn, vướng mắc trong tổ chức thi hành Luật Đất đai', publisher: 'Tạp chí Tòa án nhân dân', url: 'https://tapchitoaan.vn/nghi-quyet-2542025qh15-thao-go-kho-khan-vuong-mac-trong-to-chuc-thi-hanh-luat-dat-dai14622.html' },
    { title: 'Những chính sách mới về đất đai từ năm 2026 mà người dân cần lưu ý', publisher: 'Báo Luật sư Việt Nam', url: 'https://lsvn.vn/nhung-chinh-sach-moi-ve-dat-dai-tu-nam-2026-ma-nguoi-dan-can-luu-y-a167255.html' },
    { title: 'Dự án Luật Đất đai (sửa đổi): Trình Quốc hội xem xét tại kỳ họp thứ 2', publisher: 'Báo Sài Gòn Giải Phóng', url: 'https://www.sggp.org.vn/du-an-luat-dat-dai-sua-doi-trinh-quoc-hoi-xem-xet-tai-ky-hop-thu-2-post860644.html' },
  ],
  origin: 'curated',
  asOf: '2026-10-07',
}
