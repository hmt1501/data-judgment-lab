export const levels = [
  {
    id: 'fresher',
    name: 'Fresher',
    desc: 'Đọc đúng metric, phân rã con số và khoanh vùng biến động trước khi giải thích.',
    outcome: 'Giải thích được một metric gồm tử số, mẫu số, cửa sổ thời gian và chỉ ra thành phần gây biến động.',
  },
  {
    id: 'junior',
    name: 'Junior',
    desc: 'So sánh phân khúc, cohort và hình thành giả thuyết có thể kiểm tra.',
    outcome: 'Nêu giả thuyết, dữ liệu cần để kiểm tra và loại trừ ít nhất một cách giải thích khác.',
  },
  {
    id: 'mid',
    name: 'Mid-level',
    desc: 'Tách tín hiệu thật khỏi lỗi dữ liệu, hiệu ứng mix và yếu tố gây nhiễu.',
    outcome: 'Đề xuất cách đo tác động có đối chứng hoặc phương án thay thế khi không thể thử nghiệm.',
  },
  {
    id: 'senior',
    name: 'Senior',
    desc: 'Kết nối phân tích với quyết định, trade-off và rủi ro.',
    outcome: 'Biến phân tích thành lựa chọn có owner, ngưỡng đánh giá và kế hoạch theo dõi.',
  },
  {
    id: 'lead',
    name: 'Lead / Strategic',
    desc: 'Xây hệ thống metric và nhịp ra quyết định liên nhóm.',
    outcome: 'Chuẩn hóa định nghĩa metric và quy trình review giúp nhiều team quyết định nhất quán.',
  },
] as const

export type LevelId = (typeof levels)[number]['id']

export const skills = [
  { id: 'metric-definition', name: 'Định nghĩa metric', group: 'Nền tảng' },
  { id: 'metric-decomposition', name: 'Phân rã metric', group: 'Nền tảng' },
  { id: 'data-quality', name: 'Kiểm tra dữ liệu', group: 'Nền tảng' },
  { id: 'tracking', name: 'Tracking & instrumentation', group: 'Nền tảng' },
  { id: 'funnel', name: 'Funnel', group: 'Phân tích' },
  { id: 'segmentation', name: 'Phân khúc', group: 'Phân tích' },
  { id: 'cohort', name: 'Cohort & vintage', group: 'Phân tích' },
  { id: 'retention', name: 'Retention', group: 'Phân tích' },
  { id: 'mix-effect', name: 'Hiệu ứng mix (Simpson)', group: 'Phân tích' },
  { id: 'unit-economics', name: 'Unit economics', group: 'Kinh doanh' },
  { id: 'monetization', name: 'Monetization', group: 'Kinh doanh' },
  { id: 'operations', name: 'Vận hành & SLA', group: 'Kinh doanh' },
  { id: 'credit-risk', name: 'Rủi ro tín dụng', group: 'Kinh doanh' },
  { id: 'macro', name: 'Kinh tế vĩ mô', group: 'Kinh tế' },
  { id: 'valuation', name: 'Giá & định giá', group: 'Kinh tế' },
  { id: 'liquidity', name: 'Thanh khoản & cung cầu', group: 'Kinh tế' },
  { id: 'causal', name: 'Suy luận nhân quả', group: 'Tư duy' },
  { id: 'experiment', name: 'Thử nghiệm A/B', group: 'Tư duy' },
  { id: 'seasonality', name: 'Seasonality', group: 'Tư duy' },
  { id: 'tradeoff', name: 'Trade-off & ra quyết định', group: 'Tư duy' },
] as const

export type SkillId = (typeof skills)[number]['id']

export const domains = [
  { id: 'ecommerce', name: 'Thương mại điện tử', glyph: '🛒' },
  { id: 'mobile', name: 'Mobile app & game', glyph: '📱' },
  { id: 'macro', name: 'Kinh tế & lãi suất', glyph: '🏦' },
  { id: 'real-estate', name: 'Bất động sản', glyph: '🏘️' },
  { id: 'logistics', name: 'Logistics & vận hành', glyph: '🚚' },
  { id: 'lending', name: 'Tài chính tiêu dùng', glyph: '💳' },
] as const

export type DomainId = (typeof domains)[number]['id']

export const levelById = (id: LevelId) => levels.find((l) => l.id === id)!
export const skillById = (id: SkillId) => skills.find((s) => s.id === id)!
export const domainById = (id: DomainId) => domains.find((d) => d.id === id)!
export const isSkillId = (s: string): s is SkillId => skills.some((x) => x.id === s)
