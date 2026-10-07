// Secret tùy chọn: không khai báo trong `secrets.required` nên `wrangler types` không sinh ra.
interface Env {
  APP_PASSCODE?: string
}
