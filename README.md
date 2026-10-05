# Data Judgment Lab

Ứng dụng học phân tích dữ liệu với các micro-case tiếng Việt. Các tình huống và con số hiện có đều được đánh dấu là mô phỏng.

## Chạy trên máy

```sh
npm ci
npm run dev
```

Mở địa chỉ LAN do Vite in ra để xem trên thiết bị cùng mạng. Vite tự cập nhật trang khi sửa code.

## GitHub Pages

Workflow tại `.github/workflows/deploy.yml` build và deploy thư mục `dist` mỗi khi có push lên nhánh `main`. Cấu hình đường dẫn tương đối cho phép app chạy trong URL Pages theo tên repo.

Sau khi tạo repo GitHub và push nhánh `main`, vào **Settings → Pages** và chọn **GitHub Actions** làm nguồn deploy nếu chưa được bật tự động. Địa chỉ sẽ là `https://<github-username>.github.io/data-judgment-lab/`.
