-- Đồng bộ tiến độ học giữa thiết bị: khóa là sha256 của "mã đồng bộ" (không lưu mã gốc)
CREATE TABLE sync_profiles (
  code_hash TEXT PRIMARY KEY,
  data TEXT NOT NULL,
  rev INTEGER NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
