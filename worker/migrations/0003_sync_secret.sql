-- Key Groq của người dùng, đã mã hóa trên trình duyệt bằng khóa suy ra từ mã đồng bộ (server không giải mã được)
ALTER TABLE sync_profiles ADD COLUMN secret TEXT;
