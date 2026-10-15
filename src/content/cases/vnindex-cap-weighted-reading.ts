import type { CaseStudy } from '../types'

/*
 * Số liệu mock (HOÀN TOÀN GIẢ ĐỊNH — "Sàn X", chỉ số "X-Index", 400 mã hư cấu), đã kiểm tra khớp nhau:
 *   X-Index 1.000,00 → 1.019,83 (+19,83 điểm, +1,98%)
 *   Đóng góp điểm = trọng số vốn hóa đầu phiên × lợi suất × 1.000
 *   Top 5 (48%): +4,90% → +23,50 điểm (A 8,40 + B 5,50 + C 4,00 + D 3,60 + E 2,00)
 *   Hạng 6–30 (27%): −0,50% → −1,35 · hạng 31–100 (17%): −0,80% → −1,36 · hạng 101–400 (8%): −1,20% → −0,96
 *   Tổng 23,50 − 1,35 − 1,36 − 0,96 = 19,83 · phần ngoài top 5 (52%): −3,67 điểm ≈ −0,71%
 *   Độ rộng 400 mã: tăng 5+9+22+85 = 121 · giảm 0+14+40+165 = 219 · đứng 0+2+8+50 = 60
 *   Trung bình đơn giản (giả định lợi suất nhóm = trung bình các mã): (5×4,9 − 25×0,5 − 70×0,8 − 300×1,2)/400 ≈ −1,01%
 */
export const vnindexCapWeightedReading: CaseStudy = {
  id: 'vnindex-cap-weighted-reading',
  title: 'Chỉ số tăng 2% nhưng đa số cổ phiếu giảm',
  domain: 'securities',
  level: 'fresher',
  minutes: 8,
  skills: ['metric-definition', 'metric-decomposition', 'segmentation'],
  question: 'Chỉ số thị trường tăng gần 2% mà đa số cổ phiếu lại giảm giá. Chỉ số đang nói điều gì, và nên kết luận gì từ nó?',
  summary: 'Phân rã điểm tăng của chỉ số trọng số vốn hóa theo nhóm vốn hóa, đối chiếu với số mã tăng/giảm để đọc đúng chỉ số và độ rộng thị trường.',
  sections: [
    {
      id: 'context',
      kind: 'context',
      title: 'Bối cảnh',
      blocks: [
        {
          kind: 'text',
          md: 'Bạn là analyst ở một công ty chứng khoán, phụ trách bản tin cuối phiên cho nhà đầu tư mới. Tối nay có tin nhắn từ một khách hàng: *"Chỉ số tăng gần 2% mà em thấy bảng điện đỏ gần hết, vậy thị trường tốt hay xấu? Anh/chị giải thích giúp."* Số liệu của phiên:',
        },
        {
          kind: 'kpis',
          items: [
            { label: 'X-Index', value: '1.019,83', delta: '+1,98%', tone: 'positive' },
            { label: 'Số mã tăng', value: '121', delta: '30,3% số mã', tone: 'positive' },
            { label: 'Số mã giảm', value: '219', delta: '54,8% số mã', tone: 'negative' },
            { label: 'Số mã đứng giá', value: '60', delta: '15,0% số mã', tone: 'neutral' },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Số liệu minh họa',
          md: 'Toàn bộ số liệu trong bài là **mô phỏng**. "Sàn X", chỉ số "X-Index", các mã A–E và 400 mã niêm yết đều là giả định, không phải dữ liệu hay khuyến nghị đầu tư thật. Cơ chế (chỉ số trọng số vốn hóa, độ rộng thị trường) mới là phần có thật.',
        },
        {
          kind: 'text',
          md: 'Câu hỏi cần trả lời: **điều gì kéo chỉ số lên**, và **chỉ số này đại diện cho ai** trong thị trường.',
        },
      ],
    },
    {
      id: 'framework',
      kind: 'framework',
      title: 'Khung tư duy: chỉ số là một trung bình có trọng số',
      blocks: [
        {
          kind: 'formula',
          expression: 'Thay đổi chỉ số = Σ (trọng số vốn hóa của nhóm × lợi suất của nhóm)',
          note: 'Với chỉ số trọng số vốn hóa, mã vốn hóa lớn có trọng số lớn nên lợi suất của nó tác động nhiều hơn. Một số chỉ số còn điều chỉnh theo tỷ lệ cổ phiếu tự do chuyển nhượng (free-float); bài này dùng trọng số đã tính sẵn.',
        },
        {
          kind: 'list',
          style: 'steps',
          items: [
            '**Định nghĩa**: chỉ số đo cái gì, mỗi mã được tính nặng nhẹ ra sao?',
            '**Phân rã**: mỗi nhóm vốn hóa đóng góp bao nhiêu điểm vào mức tăng?',
            '**Đối chiếu độ rộng**: bao nhiêu mã tăng, bao nhiêu mã giảm, nhóm nào lệch?',
            '**Kết luận có giới hạn**: chỉ nói điều dữ liệu cho phép, và nói rõ chỉ số không cho biết gì.',
          ],
        },
        {
          kind: 'quiz',
          id: 'vnindex-cap-weighted-reading-q1',
          question: 'Chỉ số +1,98% nhưng 219/400 mã giảm. Cách giải thích đầu tiên hợp lý nhất là gì?',
          options: [
            {
              id: 'a',
              text: 'Số liệu chỉ số chắc chắn bị sai, vì đa số mã giảm thì chỉ số không thể tăng.',
              explain: 'Không có gì sai. Chỉ số trọng số vốn hóa không đếm đầu mã; mã lớn có sức nặng hơn nhiều, nên hoàn toàn có thể tăng dù số mã giảm đông hơn.',
            },
            {
              id: 'b',
              text: 'Chỉ số có trọng số vốn hóa: vài mã vốn hóa rất lớn tăng mạnh có thể kéo chỉ số lên dù nhiều mã nhỏ giảm. Cần phân rã đóng góp theo nhóm để kiểm tra.',
              correct: true,
              explain: 'Đúng. Đây là giả thuyết cần kiểm chứng bằng bảng đóng góp điểm theo nhóm vốn hóa, không phải điều để mặc định tin.',
            },
            {
              id: 'c',
              text: 'Thị trường đang tốt vì chỉ số tăng, những mã giảm chỉ là ngoại lệ.',
              explain: 'Ở đây mã giảm là đa số (54,8%), nên không thể gọi là ngoại lệ. Kết luận trước khi phân rã là bỏ qua một nửa dữ liệu.',
            },
          ],
        },
      ],
    },
    {
      id: 'contribution',
      kind: 'analysis',
      title: 'Bước 1 — Phân rã: top 5 mã đóng góp hơn 100% mức tăng',
      blocks: [
        {
          kind: 'table',
          title: 'Đóng góp điểm theo nhóm vốn hóa (X-Index 1.000,00 → 1.019,83)',
          columns: [
            { key: 'group', label: 'Nhóm (theo vốn hóa)' },
            { key: 'weight', label: 'Trọng số đầu phiên', align: 'right' },
            { key: 'ret', label: 'Lợi suất nhóm', align: 'right' },
            { key: 'pts', label: 'Đóng góp (điểm)', align: 'right' },
          ],
          rows: [
            { group: 'Top 5 (5 mã)', weight: '48%', ret: '+4,90%', pts: '+23,50' },
            { group: 'Hạng 6–30 (25 mã)', weight: '27%', ret: '−0,50%', pts: '−1,35' },
            { group: 'Hạng 31–100 (70 mã)', weight: '17%', ret: '−0,80%', pts: '−1,36' },
            { group: 'Hạng 101–400 (300 mã)', weight: '8%', ret: '−1,20%', pts: '−0,96' },
            { group: 'Toàn chỉ số', weight: '100%', ret: '+1,98%', pts: '+19,83' },
          ],
          highlight: [
            { row: 0, tone: 'positive' },
            { row: 3, tone: 'negative' },
          ],
          caption: 'Đóng góp = trọng số × lợi suất × 1.000 điểm. Cộng lại: 23,50 − 1,35 − 1,36 − 0,96 = 19,83. Top 5 đóng góp 23,50/19,83 ≈ 118% mức tăng; bốn nhóm còn lại trừ đi ~18%.',
        },
        {
          kind: 'chart',
          title: 'Đóng góp điểm vào X-Index theo nhóm vốn hóa',
          type: 'bar',
          xKey: 'group',
          unit: ' điểm',
          series: [{ key: 'pts', label: 'Đóng góp' }],
          data: [
            { group: 'Top 5', pts: 23.5 },
            { group: 'Hạng 6–30', pts: -1.35 },
            { group: 'Hạng 31–100', pts: -1.36 },
            { group: 'Hạng 101–400', pts: -0.96 },
          ],
          caption: 'Một nhóm 5 mã đứng sau toàn bộ mức tăng; 395 mã còn lại cộng lại là một lực kéo xuống.',
        },
        {
          kind: 'table',
          title: 'Bên trong top 5',
          columns: [
            { key: 'code', label: 'Mã (giả định)' },
            { key: 'weight', label: 'Trọng số', align: 'right' },
            { key: 'ret', label: 'Lợi suất', align: 'right' },
            { key: 'pts', label: 'Đóng góp (điểm)', align: 'right' },
          ],
          rows: [
            { code: 'Công ty A', weight: '14%', ret: '+6,0%', pts: '+8,40' },
            { code: 'Công ty B', weight: '11%', ret: '+5,0%', pts: '+5,50' },
            { code: 'Công ty C', weight: '10%', ret: '+4,0%', pts: '+4,00' },
            { code: 'Công ty D', weight: '8%', ret: '+4,5%', pts: '+3,60' },
            { code: 'Công ty E', weight: '5%', ret: '+4,0%', pts: '+2,00' },
          ],
          caption: 'Tổng 8,40 + 5,50 + 4,00 + 3,60 + 2,00 = 23,50 điểm. Riêng Công ty A đã đóng góp hơn 40% mức tăng của chỉ số.',
        },
        {
          kind: 'quiz',
          id: 'vnindex-cap-weighted-reading-q2',
          question: 'Từ bảng đóng góp, kết luận nào đúng?',
          options: [
            {
              id: 'a',
              text: 'Mức tăng của chỉ số hầu như do 5 mã vốn hóa lớn nhất; phần còn lại của thị trường (52% vốn hóa) đang giảm khoảng 0,7%.',
              correct: true,
              explain: 'Đúng. Ngoài top 5, đóng góp là −3,67 điểm trên 52% trọng số, tức khoảng −0,71%. Chỉ số tăng phản ánh chủ yếu nhóm dẫn đầu.',
            },
            {
              id: 'b',
              text: 'Mỗi mã đóng góp như nhau vào chỉ số nên 5 mã chỉ tạo ra 5/400 mức tăng.',
              explain: 'Sai cách tính: đó là chỉ số trọng số đều (equal-weighted). Ở chỉ số trọng số vốn hóa, trọng số theo quy mô nên top 5 chiếm tới 48%.',
            },
            {
              id: 'c',
              text: 'Nhóm vốn hóa nhỏ giảm nhiều nhất nên chính nhóm đó làm chỉ số giảm.',
              explain: 'Nhóm nhỏ giảm sâu nhất theo %, nhưng chỉ chiếm 8% trọng số nên chỉ kéo −0,96 điểm; phần lớn tác động nằm ở trọng số, không chỉ ở % thay đổi.',
            },
          ],
        },
      ],
    },
    {
      id: 'breadth',
      kind: 'analysis',
      title: 'Bước 2 — Độ rộng: ai thực sự tăng',
      blocks: [
        {
          kind: 'chart',
          title: 'Số mã tăng / giảm / đứng giá theo nhóm vốn hóa',
          type: 'stackedBar',
          xKey: 'group',
          unit: ' mã',
          series: [
            { key: 'up', label: 'Tăng' },
            { key: 'down', label: 'Giảm' },
            { key: 'flat', label: 'Đứng giá' },
          ],
          data: [
            { group: 'Top 5', up: 5, down: 0, flat: 0 },
            { group: 'Hạng 6–30', up: 9, down: 14, flat: 2 },
            { group: 'Hạng 31–100', up: 22, down: 40, flat: 8 },
            { group: 'Hạng 101–400', up: 85, down: 165, flat: 50 },
          ],
          caption: 'Tổng: 121 tăng, 219 giảm, 60 đứng giá (400 mã). Tỷ lệ tăng/giảm = 121/219 ≈ 0,55.',
        },
        {
          kind: 'table',
          title: 'Hai cách "đọc" cùng một phiên',
          columns: [
            { key: 'view', label: 'Cách đo' },
            { key: 'how', label: 'Mỗi mã được tính thế nào' },
            { key: 'result', label: 'Kết quả phiên này', align: 'right' },
          ],
          rows: [
            { view: 'X-Index (trọng số vốn hóa)', how: 'Theo vốn hóa', result: '+1,98%' },
            { view: 'Trung bình đơn giản (mỗi mã như nhau)', how: 'Như nhau', result: '≈ −1,01%' },
            { view: 'Độ rộng: mã tăng / mã giảm', how: 'Mỗi mã một phiếu', result: '121 / 219' },
          ],
          highlight: [{ row: 0, tone: 'positive' }, { row: 1, tone: 'negative' }, { row: 2, tone: 'negative' }],
          caption: 'Trung bình đơn giản = (5×4,9 − 25×0,5 − 70×0,8 − 300×1,2)/400 ≈ −1,01%, với giả định lợi suất mỗi nhóm cũng là mức trung bình của các mã trong nhóm. Hai thước đo trái dấu vì chúng trả lời hai câu hỏi khác nhau.',
        },
        {
          kind: 'callout',
          tone: 'expert',
          title: 'Ghi chú của senior analyst',
          md: 'Chỉ số trả lời *"nhóm lớn nhất đang làm gì, tính theo giá trị vốn hóa?"*. Độ rộng trả lời *"bao nhiêu mã tham gia?"*. Một thị trường tăng khỏe thường có cả hai cùng hướng. Khi chúng lệch nhau, đó là thông tin chứ không phải mâu thuẫn, và bản tin nên nói cả hai.',
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
          md: '**Trả lời cho khách hàng:** X-Index tăng 1,98% chủ yếu nhờ 5 mã vốn hóa lớn nhất (đóng góp +23,50 trên +19,83 điểm), trong khi 219/400 mã giảm và mức trung bình của một mã bất kỳ là khoảng −1%. Phiên này **tăng tập trung ở nhóm dẫn đầu**, chưa phải thị trường tăng rộng. Dữ liệu một phiên không cho biết xu hướng sắp tới.',
        },
        {
          kind: 'actions',
          items: [
            {
              action: 'Thêm vào bản tin cuối phiên một khối "Đóng góp điểm theo nhóm vốn hóa" và "Số mã tăng/giảm" ngay cạnh số chỉ số',
              owner: 'Research / Analyst bản tin',
              metric: 'Tỷ lệ bản tin có đủ chỉ số + độ rộng + top 5 đóng góp',
              threshold: '100% bản tin cuối phiên',
            },
            {
              action: 'Gắn cờ "tăng tập trung" khi top 5 đóng góp trên 100% mức tăng điểm hoặc khi mã giảm chiếm đa số mà chỉ số vẫn tăng',
              owner: 'Data/Analytics',
              metric: 'Số phiên bị gắn cờ được giải thích trong bản tin',
              threshold: 'Mọi phiên gắn cờ đều có 1–2 câu giải thích',
            },
            {
              action: 'Soạn đoạn hướng dẫn ngắn "Cách đọc chỉ số" cho nhà đầu tư mới, nêu rõ chỉ số trọng số vốn hóa và độ rộng đo hai thứ khác nhau',
              owner: 'Marketing nội dung + Compliance',
              metric: 'Số câu hỏi "chỉ số tăng sao danh mục giảm" gửi chăm sóc khách hàng',
              threshold: 'Giảm so với quý trước',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'vnindex-cap-weighted-reading-q3',
          question: 'Cách viết nào trong bản tin cuối phiên là trung thực nhất?',
          options: [
            {
              id: 'a',
              text: '"Thị trường tăng 2%, nhà đầu tư có thể yên tâm mua vào."',
              explain: 'Vừa hiểu sai chỉ số (không phải mọi mã tăng 2%) vừa đưa ra khuyến nghị mà dữ liệu một phiên không đủ để hỗ trợ.',
            },
            {
              id: 'b',
              text: '"X-Index tăng 1,98%, chủ yếu nhờ 5 mã vốn hóa lớn; 219/400 mã giảm. Mức tăng tập trung, chưa lan rộng."',
              correct: true,
              explain: 'Đúng. Nêu cả chỉ số lẫn độ rộng, chỉ ra nguồn đóng góp, không suy diễn xu hướng hay đưa khuyến nghị.',
            },
            {
              id: 'c',
              text: '"Chỉ số không đáng tin, nhà đầu tư nên bỏ qua và chỉ nhìn số mã tăng giảm."',
              explain: 'Quá cực đoan. Chỉ số có định nghĩa rõ và hữu ích cho việc đo giá trị thị trường; vấn đề là đọc nó một mình. Độ rộng cũng có giới hạn riêng.',
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
              title: 'Coi chỉ số tăng 2% là "mọi cổ phiếu tăng 2%"',
              why: 'Chỉ số là trung bình có trọng số vốn hóa của cả rổ, không phải lợi suất của mã điển hình. Lợi suất của một danh mục bất kỳ có thể khác xa.',
              instead: 'Luôn hỏi chỉ số được tính theo trọng số nào, rồi đối chiếu với lợi suất trung bình đơn giản và số mã tăng/giảm.',
            },
            {
              title: 'Chỉ nhìn số tổng, bỏ qua đóng góp theo nhóm',
              why: 'Một phiên +2% có thể đến từ 5 mã, hoặc từ 300 mã. Hai tình huống này cho tín hiệu rất khác nhau về mức độ tham gia của thị trường.',
              instead: 'Phân rã mức thay đổi thành đóng góp của nhóm lớn nhất, nhóm giữa và phần đuôi.',
            },
            {
              title: 'Rút ra kết luận về xu hướng từ một phiên',
              why: 'Độ rộng yếu trong một phiên có thể là nhiễu. Kết luận "thị trường sắp đổi chiều" hay "tiếp tục tăng" từ một điểm dữ liệu là suy diễn quá mức.',
              instead: 'Nhìn độ rộng và đóng góp qua nhiều phiên, và chỉ mô tả điều đã xảy ra, không dự báo hay khuyến nghị.',
            },
          ],
        },
      ],
    },
  ],
  takeaways: [
    'Chỉ số trọng số vốn hóa là trung bình có trọng số: vài mã vốn hóa lớn có thể kéo chỉ số tăng dù đa số mã giảm.',
    'Phân rã mức thay đổi thành đóng góp điểm theo nhóm vốn hóa, rồi đối chiếu với độ rộng (số mã tăng/giảm, trung bình đơn giản).',
    'Chỉ nên kết luận từ chỉ số cùng độ rộng, ghi rõ giới hạn của dữ liệu một phiên, không suy diễn xu hướng hay khuyến nghị đầu tư.',
  ],
  references: [
    {
      title: 'Capitalization-weighted index',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Capitalization-weighted_index',
      note: 'Định nghĩa chỉ số trọng số vốn hóa và ưu/nhược điểm, gồm việc mã lớn chi phối chỉ số.',
    },
    {
      title: 'Breadth of market',
      publisher: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Market_breadth',
      note: 'Giải thích độ rộng thị trường (advance–decline) và vì sao nó bổ sung cho chỉ số.',
    },
    {
      title: 'Sở Giao dịch Chứng khoán TP.HCM (HOSE)',
      publisher: 'HOSE',
      url: 'https://www.hsx.vn/',
      note: 'Trang chủ sàn: nơi tra thông tin chỉ số và quy chế chỉ số thực tế (trang tổng quan, không phải nguồn của số liệu giả định trong bài).',
    },
  ],
}
