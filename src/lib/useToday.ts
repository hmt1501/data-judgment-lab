import { useEffect, useState } from 'react'

/** Ngày hiện tại; tự cập nhật lúc 0h (giờ máy) để tab mở qua đêm vẫn đổi nội dung "hôm nay". */
export function useToday(): Date {
  const [today, setToday] = useState(() => new Date())

  useEffect(() => {
    const midnight = new Date(today)
    midnight.setHours(24, 0, 0, 0)
    const t = window.setTimeout(() => setToday(new Date()), midnight.getTime() - Date.now() + 1000)
    return () => window.clearTimeout(t)
  }, [today])

  return today
}
