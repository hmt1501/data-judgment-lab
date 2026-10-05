import { Compass } from 'lucide-react'
import { ButtonLink, EmptyState } from '../components/ui/primitives'

export function NotFound() {
  return (
    <EmptyState
      icon={<Compass size={22} />}
      title="Không tìm thấy trang"
      desc="Đường dẫn này không tồn tại hoặc case đã được đổi tên."
      action={
        <ButtonLink to="/library" variant="primary">
          Về thư viện
        </ButtonLink>
      }
    />
  )
}
