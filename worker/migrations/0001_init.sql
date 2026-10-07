-- Bài "Đọc nhanh" do AI tạo
CREATE TABLE explainers (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  question TEXT NOT NULL,
  norm_question TEXT NOT NULL,
  title TEXT NOT NULL,
  topic TEXT NOT NULL,
  tldr TEXT NOT NULL,
  json TEXT NOT NULL,
  model TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE INDEX explainers_norm ON explainers (norm_question);
CREATE INDEX explainers_created ON explainers (created_at DESC);

-- Tìm kiếm toàn văn (không dấu) trên câu hỏi/tiêu đề/tóm tắt
CREATE VIRTUAL TABLE explainers_fts USING fts5 (slug UNINDEXED, body, tokenize = 'unicode61 remove_diacritics 2');

-- Ghi chú nghiên cứu tạm (để thử lại bước biên soạn mà không phải tra cứu lại)
CREATE TABLE research_cache (
  norm_question TEXT PRIMARY KEY,
  notes TEXT NOT NULL,
  sources TEXT NOT NULL,
  created_at TEXT NOT NULL
);

-- Đếm lượt gọi AI theo ngày
CREATE TABLE usage (
  day TEXT NOT NULL,
  key TEXT NOT NULL,
  count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day, key)
);
