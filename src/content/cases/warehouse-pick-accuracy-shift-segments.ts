import type { CaseStudy } from '../types'

/*
 * Số liệu mock (MÔ PHỎNG) — Kho trung tâm K (hư cấu), tháng 8 vs tháng 9, độ chính xác lấy hàng = dòng hàng đúng / dòng hàng lấy (kiểm tra toàn bộ qua quét mã khi đóng gói). Đơn vị: nghìn dòng hàng; lỗi = số dòng sai.
 *   Tổng: T8 1.000 nghìn dòng, 8.000 lỗi (0,80% → chính xác 99,2%) · T9 1.100 nghìn dòng, 17.600 lỗi (1,60% → 98,4%)
 *   Theo ca (dòng nghìn · lỗi): sáng 450 → 440 · 3.150 → 3.300 (0,70% → 0,75%) · chiều 400 → 420 · 2.800 → 3.780 (0,70% → 0,90%) · đêm 150 → 240 · 2.050 → 10.520 (1,37% → 4,38%)
 *   Theo thâm niên (T8 / T9): nhân viên mới (< 30 ngày) 50 → 214 nghìn dòng, lỗi 3.000 → 12.840 (6,0% cả hai tháng) · có kinh nghiệm 950 → 886, lỗi 5.000 → 4.760 (0,526% → 0,537%)
 *     tỷ trọng dòng của nhân viên mới 5,0% → 19,5% (214/1.100)
 *   Ca × thâm niên T9 (dòng · lỗi): sáng mới 22 · 1.320 / có KN 418 · 1.980 (0,47%) · chiều mới 42 · 2.520 / có KN 378 · 1.260 (0,33%) · đêm mới 150 · 9.000 / có KN 90 · 1.520 (1,69%)
 *   Ca × thâm niên T8: sáng mới 15 · 900 / có KN 435 · 2.250 (0,52%) · chiều mới 15 · 900 / có KN 385 · 1.900 (0,49%) · đêm mới 20 · 1.200 / có KN 130 · 850 (0,65%)
 *   Tỷ trọng nhân viên mới trong ca đêm 13,3% (20/150) → 62,5% (150/240); ca sáng 3,3% → 5,0%; ca chiều 3,8% → 10,0%
 *   Phân rã thay đổi lỗi +0,80 điểm: nếu giữ tỷ trọng nhân viên mới 5% với tỷ lệ lỗi T9: 0,05×6,0 + 0,95×0,537 = 0,810% → hiệu ứng tỷ lệ +0,01 điểm · hiệu ứng cơ cấu 1,60 − 0,81 = +0,79 điểm (≈ 99%)
 *   Lỗi: ca đêm chiếm 59,8% lỗi T9 (10.520/17.600) · nhân viên mới ở ca đêm 9.000 lỗi = 51,1% tổng lỗi
 */
export const warehousePickAccuracyShiftSegments: CaseStudy = {
  id: 'warehouse-pick-accuracy-shift-segments',
  title: 'Độ chính xác lấy hàng giảm từ 99,2% xuống 98,4%: ca đêm hay nhân viên mới?',
  domain: 'logistics',
  level: 'junior',
  minutes: 11,
  skills: ['operations', 'segmentation', 'mix-effect', 'metric-decomposition'],
  question:
    'Độ chính xác lấy hàng của kho giảm 0,8 điểm, tức số dòng sai tăng gấp đôi về tỷ lệ. Lỗi tập trung ở ca đêm, hay do nhân viên mới, và nên can thiệp vào đâu trước?',
  summary:
    'Cắt tỷ lệ lỗi theo ca và theo thâm niên, nhận ra hiệu ứng cơ cấu (nhân viên mới tăng tỷ trọng), phân rã thay đổi, và tách một tín hiệu thứ hai (ca đêm) khỏi tác động của nhân viên mới.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: '*Tình huống mô phỏng: kho và mọi con số đều là giả định để minh họa.* **Kho trung tâm K** xử lý đơn thương mại điện tử và đo **độ chính xác lấy hàng** bằng quét mã lúc đóng gói: dòng hàng đúng / tổng dòng hàng lấy. Tháng 9, mùa cao điểm, kho tăng ca đêm và tuyển thêm nhân viên thời vụ. Độ chính xác giảm từ **99,2% xuống 98,4%** và số đơn bị giao sai tăng. Quản lý kho nghi ngờ "ca đêm làm ẩu", trong khi trưởng nhóm nhân sự lại cho rằng do nhân viên mới. Bạn được yêu cầu phân tích trước khi áp dụng chế tài.',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'Độ chính xác lấy hàng', value: '98,4%', delta: '−0,8 điểm', tone: 'negative', note: 'T8: 99,2%' },
            { label: 'Dòng hàng sai', value: '17.600', delta: '+9.600', tone: 'negative', note: 'T8: 8.000' },
            { label: 'Dòng hàng lấy', value: '1,10 triệu', delta: '+10,0%', tone: 'neutral', note: 'T8: 1,00 triệu' },
          ],
        },
        {
          kind: 'callout',
          tone: 'insight',
          title: 'Câu hỏi cần trả lời',
          md: 'Lỗi tăng **vì ca đêm**, **vì nhân viên mới**, hay vì hai yếu tố này **chồng lên nhau** (ca đêm nhận nhiều nhân viên mới)? Phân biệt được thì mới chọn đúng can thiệp: đào tạo, giám sát hay ca kíp.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: nhiều chiều cùng lúc và hiệu ứng cơ cấu',
      blocks: [
        {
          kind: 'formula',
          expression: 'Tỷ lệ lỗi = Σ (tỷ trọng nhóm × tỷ lệ lỗi của nhóm)  ·  Δ = hiệu ứng cơ cấu (tỷ trọng đổi) + hiệu ứng tỷ lệ (lỗi từng nhóm đổi)',
          note: 'Hai chiều dễ trùng nhau (ca đêm nhận nhiều người mới). Cắt **từng chiều riêng** rồi **cắt chéo** để biết chiều nào thật sự giải thích. Một nhóm có tỷ lệ lỗi cao vẫn chưa phải thủ phạm nếu nhóm đó đã có tỷ lệ lỗi cao từ trước và tỷ trọng không đổi.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Cắt theo ca**, rồi **theo thâm niên**, tách từng chiều.',
            '**Cắt chéo** ca × thâm niên để tách hai chiều.',
            '**Phân rã** thay đổi tổng thành cơ cấu và tỷ lệ.',
            '**Giả thuyết** cho phần còn lại và dữ liệu cần để kiểm tra.',
          ],
        },
        {
          kind: 'quiz',
          id: 'warehouse-pick-accuracy-shift-segments-q1',
          question: 'Ca đêm có lỗi 4,38% so với 0,75% của ca sáng. Có thể kết luận ca đêm kém không?',
          options: [
            {
              id: 'a',
              text: 'Có, hiển nhiên ca đêm kém vì tỷ lệ lỗi cao gấp nhiều lần.',
              explain: 'Ca đêm khác ca sáng nhiều thứ, trong đó có tỷ trọng nhân viên mới (62,5% so với 5,0%). Chưa cắt chéo thì chưa kết luận được.',
            },
            {
              id: 'b',
              text: 'Chưa, cần cắt chéo ca × thâm niên vì ca đêm có thể chỉ nhận nhiều nhân viên mới hơn.',
              correct: true,
              explain: 'Đúng. Khi hai chiều chồng lên nhau, chỉ cắt chéo mới tách được tác động riêng của từng chiều.',
            },
            {
              id: 'c',
              text: 'Không, vì ca đêm ít dòng hàng nên tỷ lệ không đáng tin.',
              explain: 'Ca đêm có 240 nghìn dòng hàng; mẫu rất lớn nên tỷ lệ ổn định. Vấn đề là gộp chiều, không phải cỡ mẫu.',
            },
          ],
        },
      ],
    },
    {
      id: 'segments',
      kind: 'analysis',
      title: 'Bước 1 — Từng chiều riêng: ca và thâm niên',
      blocks: [
        {
          kind: 'table',
          title: 'Tỷ lệ lỗi theo ca (T8 → T9)',
          columns: [
            { key: 'shift', label: 'Ca' },
            { key: 'lines', label: 'Dòng (nghìn)', align: 'right' },
            { key: 'err', label: 'Lỗi', align: 'right' },
            { key: 'rate', label: 'Tỷ lệ lỗi', align: 'right' },
          ],
          rows: [
            { shift: 'Sáng', lines: '450 → 440', err: '3.150 → 3.300', rate: '0,70% → 0,75%' },
            { shift: 'Chiều', lines: '400 → 420', err: '2.800 → 3.780', rate: '0,70% → 0,90%' },
            { shift: 'Đêm', lines: '150 → 240', err: '2.050 → 10.520', rate: '1,37% → 4,38%' },
            { shift: 'Tổng', lines: '1.000 → 1.100', err: '8.000 → 17.600', rate: '0,80% → 1,60%' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Ca đêm tăng 60% khối lượng và chiếm 59,8% lỗi tháng 9 (10.520/17.600). Hai ca ngày gần như ổn định.',
        },
        {
          kind: 'table',
          title: 'Tỷ lệ lỗi theo thâm niên (T8 → T9)',
          columns: [
            { key: 'g', label: 'Nhóm' },
            { key: 'lines', label: 'Dòng (nghìn)', align: 'right' },
            { key: 'err', label: 'Lỗi', align: 'right' },
            { key: 'rate', label: 'Tỷ lệ lỗi', align: 'right' },
            { key: 'share', label: 'Tỷ trọng dòng', align: 'right' },
          ],
          rows: [
            { g: 'Mới (< 30 ngày)', lines: '50 → 214', err: '3.000 → 12.840', rate: '6,00% → 6,00%', share: '5,0% → 19,5%' },
            { g: 'Có kinh nghiệm', lines: '950 → 886', err: '5.000 → 4.760', rate: '0,53% → 0,54%', share: '95,0% → 80,5%' },
          ],
          highlight: [{ row: 0, tone: 'negative' }],
          caption: 'Tỷ lệ lỗi của từng nhóm gần như không đổi; chỉ tỷ trọng nhân viên mới tăng gấp gần 4 lần (5,0% → 19,5%).',
        },
        {
          kind: 'quiz',
          id: 'warehouse-pick-accuracy-shift-segments-q2',
          question: 'Bảng thâm niên cho biết điều gì quan trọng nhất?',
          options: [
            {
              id: 'a',
              text: 'Nhân viên mới đang làm tệ hơn tháng trước.',
              explain: 'Tỷ lệ lỗi nhân viên mới giữ nguyên 6,0%; họ không tệ đi, chỉ nhiều hơn.',
            },
            {
              id: 'b',
              text: 'Lỗi tổng tăng chủ yếu vì tỷ trọng nhân viên mới tăng, trong khi tỷ lệ lỗi của từng nhóm gần như không đổi.',
              correct: true,
              explain: 'Đúng. Đây là hiệu ứng cơ cấu: thay đổi do cơ cấu nhân sự, không do hành vi từng nhóm.',
            },
            {
              id: 'c',
              text: 'Nhân viên có kinh nghiệm làm tốt hơn vì lỗi giảm từ 5.000 xuống 4.760.',
              explain: 'Số lỗi giảm vì họ lấy ít dòng hơn (950 → 886 nghìn); tỷ lệ gần như không đổi (0,526% → 0,537%).',
            },
          ],
        },
      ],
    },
    {
      id: 'cross',
      kind: 'analysis',
      title: 'Bước 2 — Cắt chéo, phân rã và phần còn lại',
      blocks: [
        {
          kind: 'table',
          title: 'Tháng 9: ca × thâm niên (dòng nghìn · lỗi)',
          columns: [
            { key: 'shift', label: 'Ca' },
            { key: 'new', label: 'Mới: dòng · lỗi · tỷ lệ', align: 'right' },
            { key: 'exp', label: 'Có kinh nghiệm: dòng · lỗi · tỷ lệ', align: 'right' },
            { key: 'share', label: 'Tỷ trọng mới T8 → T9', align: 'right' },
          ],
          rows: [
            { shift: 'Sáng', new: '22 · 1.320 · 6,0%', exp: '418 · 1.980 · 0,47%', share: '3,3% → 5,0%' },
            { shift: 'Chiều', new: '42 · 2.520 · 6,0%', exp: '378 · 1.260 · 0,33%', share: '3,8% → 10,0%' },
            { shift: 'Đêm', new: '150 · 9.000 · 6,0%', exp: '90 · 1.520 · 1,69%', share: '13,3% → 62,5%' },
          ],
          highlight: [{ row: 2, tone: 'negative' }],
          caption: 'Nhân viên mới có lỗi 6,0% ở mọi ca; ca đêm cao chủ yếu vì 62,5% khối lượng do nhân viên mới làm. Riêng nhân viên có kinh nghiệm ở ca đêm cũng tăng lỗi (0,65% → 1,69%).',
        },
        {
          kind: 'table',
          title: 'Phân rã mức tăng lỗi +0,80 điểm',
          columns: [
            { key: 'item', label: 'Thành phần' },
            { key: 'calc', label: 'Cách tính', align: 'right' },
            { key: 'val', label: 'Giá trị', align: 'right' },
          ],
          rows: [
            { item: 'Tỷ lệ lỗi T8', calc: '', val: '0,80%' },
            { item: 'T9 nếu giữ tỷ trọng nhân viên mới 5%', calc: '0,05×6,0 + 0,95×0,537', val: '0,81% (hiệu ứng tỷ lệ +0,01)' },
            { item: 'T9 thực tế (tỷ trọng mới 19,5%)', calc: '0,195×6,0 + 0,805×0,537', val: '1,60% (hiệu ứng cơ cấu +0,79)' },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: 'Khoảng 99% mức tăng lỗi là do cơ cấu nhân sự. Trong 1,60%, nhân viên mới tạo 12.840 trên 17.600 lỗi (73%).',
        },
        {
          kind: 'table',
          title: 'Giả thuyết cho phần còn lại và cách kiểm tra',
          columns: [
            { key: 'h', label: 'Giả thuyết' },
            { key: 'predict', label: 'Nếu đúng, ta sẽ thấy' },
            { key: 'test', label: 'Dữ liệu cần' },
          ],
          rows: [
            {
              h: 'H1. Nhân viên mới chưa được huấn luyện đủ',
              predict: 'Lỗi 6,0% đồng đều ở mọi ca, giảm theo số ngày làm việc',
              test: 'Đường cong học tập: lỗi theo tuần thâm niên; đã khớp với 6,0% ở mọi ca',
            },
            {
              h: 'H2. Ca đêm có điều kiện kém (ánh sáng, tăng ca, giám sát mỏng) làm cả người có kinh nghiệm sai nhiều hơn',
              predict: 'Lỗi của người có kinh nghiệm ở ca đêm cao hơn các ca khác và tăng khi giờ làm tăng',
              test: 'Lỗi theo giờ trong ca, số giờ tăng ca, tỉ lệ giám sát/nhân viên; đã thấy 1,69% so với 0,33–0,47%',
            },
            {
              h: 'H3. Hàng thay đổi (SKU khó lấy tăng) trong mùa cao điểm',
              predict: 'Lỗi tăng ở mọi nhóm, tập trung ở khu vực/SKU nhất định',
              test: 'Lỗi theo khu vực và SKU; chưa có dữ liệu để loại trừ',
            },
          ],
          highlight: [{ row: 2, tone: 'warning' }],
          caption: 'H1 giải thích phần lớn; H2 là tín hiệu thứ hai nhỏ hơn nhưng thật; H3 chưa loại trừ.',
        },
        {
          kind: 'quiz',
          id: 'warehouse-pick-accuracy-shift-segments-q3',
          question: 'Quản lý đề nghị phạt ca đêm vì lỗi cao nhất. Bạn tư vấn gì?',
          options: [
            {
              id: 'a',
              text: 'Đồng ý phạt, vì ca đêm chiếm 60% lỗi.',
              explain: 'Phần lớn lỗi ca đêm đến từ nhân viên mới (9.000 trên 10.520). Phạt ca đêm không đúng vào nguyên nhân chính.',
            },
            {
              id: 'b',
              text: 'Không phạt vội: ưu tiên huấn luyện và ghép cặp nhân viên mới, giảm tỷ trọng họ ở ca đêm, đồng thời điều tra riêng điều kiện ca đêm.',
              correct: true,
              explain: 'Đúng. Can thiệp theo nguyên nhân: đào tạo cho H1, điều kiện làm việc cho H2.',
            },
            {
              id: 'c',
              text: 'Chuyển hết nhân viên mới sang ca ngày.',
              explain: 'Có thể giảm lỗi ca đêm nhưng chỉ chuyển vấn đề sang ca ngày (tỷ lệ 6,0% vẫn ở nhân viên mới), và không giải quyết H2.',
            },
          ],
        },
      ],
    },
    {
      id: 'solution',
      kind: 'solution',
      title: 'Giải pháp tối ưu',
      blocks: [
        {
          kind: 'text',
          md: '**Kết luận:** Độ chính xác giảm vì **tỷ trọng nhân viên mới tăng từ 5,0% lên 19,5%** (≈ 99% mức tăng lỗi); nhân viên mới có lỗi 6,0% ở mọi ca. Ca đêm trông tệ vì nhận 150 nghìn trong 240 nghìn dòng từ nhân viên mới. Ngoài ra có một tín hiệu thứ hai: nhân viên có kinh nghiệm ở ca đêm cũng sai nhiều hơn (1,69%), cần điều tra điều kiện làm việc.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Chương trình huấn luyện và ghép cặp (buddy) cho nhân viên dưới 30 ngày; kiểm tra 100% dòng hàng lấy bởi nhân viên mới trong 2 tuần đầu',
              owner: 'Trưởng kho + Đào tạo',
              metric: 'Tỷ lệ lỗi nhân viên mới theo tuần thâm niên',
              threshold: 'Từ 6,0% xuống ≤ 3,0% sau 3 tuần; ≤ 1,0% sau 6 tuần',
            },
            {
              action: 'Giới hạn tỷ trọng dòng hàng do nhân viên mới làm trong ca đêm; bố trí giám sát',
              owner: 'Quản lý ca đêm',
              metric: 'Tỷ trọng dòng hàng của nhân viên mới theo ca',
              threshold: 'Ca đêm ≤ 25% (đang 62,5%); mỗi giám sát ≤ 10 nhân viên mới',
            },
            {
              action: 'Điều tra lỗi của nhân viên có kinh nghiệm ca đêm: ánh sáng, giờ tăng ca, khu vực, SKU',
              owner: 'Vận hành kho + An toàn lao động',
              metric: 'Tỷ lệ lỗi của người có kinh nghiệm ca đêm',
              threshold: 'Từ 1,69% xuống ≤ 0,8% trong 4 tuần',
            },
            {
              action: 'Báo cáo độ chính xác chuẩn hóa theo cơ cấu thâm niên và ca, kèm tỷ trọng nhân viên mới',
              owner: 'Data/Analytics',
              metric: 'Độ chính xác chuẩn hóa; tỷ trọng nhân viên mới',
              threshold: 'Cảnh báo khi tỷ trọng mới > 15% hoặc độ chính xác chuẩn hóa giảm > 0,2 điểm',
            },
          ],
        },
      ],
    },
    {
      id: 'pitfalls',
      kind: 'pitfalls',
      title: 'Bẫy thường gặp',
      blocks: [
        {
          kind: 'pitfalls',
          items: [
            {
              title: 'Quy trách nhiệm cho nhóm có tỷ lệ lỗi cao nhất',
              why: 'Hai chiều chồng nhau; ca đêm trông tệ vì nhận nhiều người mới chứ chưa chắc vì ca đêm.',
              instead: 'Cắt chéo các chiều và phân rã cơ cấu so với tỷ lệ trước khi quy trách nhiệm.',
            },
            {
              title: 'Chỉ theo dõi độ chính xác tổng',
              why: 'Chỉ số tổng đổi theo cơ cấu nhân sự mà không cho biết hành vi từng nhóm có đổi hay không.',
              instead: 'Theo dõi theo nhóm và độ chính xác chuẩn hóa theo cơ cấu.',
            },
            {
              title: 'Bỏ qua tín hiệu nhỏ nhưng thật',
              why: 'Khi một nguyên nhân chiếm 99%, dễ bỏ qua việc người có kinh nghiệm ở ca đêm cũng đang sai nhiều hơn.',
              instead: 'Sau khi tách nguyên nhân chính, xem phần còn lại ở từng nhóm.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Khi hai chiều chồng lên nhau (ca và thâm niên), cắt chéo trước khi quy trách nhiệm.',
    'Phân rã thay đổi thành hiệu ứng cơ cấu và hiệu ứng tỷ lệ; ở đây ≈ 99% là cơ cấu nhân sự.',
    'Sau khi tách nguyên nhân chính, kiểm tra phần còn lại để tìm tín hiệu thứ hai (ca đêm có kinh nghiệm).',
  ],
  references: [
    {
      title: 'Warehouse management system',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Warehouse_management_system',
      note: 'Tổng quan hệ thống quản lý kho và các hoạt động lấy hàng, đóng gói mà số liệu chính xác dựa vào.',
    },
    {
      title: 'Simpson’s Paradox',
      publisher: 'Stanford Encyclopedia of Philosophy',
      url: 'https://plato.stanford.edu/entries/paradox-simpson/',
      note: 'Cơ sở của việc cắt chéo khi hai nhóm phân khúc chồng lên nhau và kết quả gộp gây hiểu nhầm.',
    },
    {
      title: 'Root-cause analysis',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Root_cause_analysis',
      note: 'Tổng quan phân tích nguyên nhân gốc, khung để đi từ triệu chứng (lỗi cao) đến nguyên nhân can thiệp được.',
    },
  ],
}
