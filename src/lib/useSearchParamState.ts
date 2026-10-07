import { useCallback, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

/**
 * Giá trị ô nhập đồng bộ với một query param.
 *
 * Ô nhập dùng state cục bộ (cập nhật đồng bộ) và chỉ ghi lên URL sau `delay` ms.
 * Nếu bind thẳng `value` vào URL, mỗi phím gõ đi qua điều hướng bất đồng bộ của router;
 * bộ gõ tiếng Việt (Telex/VNI kiểu Unikey, EVKey) gửi backspace + ký tự có dấu liên tiếp
 * nên giá trị bị lệch và mất chữ.
 */
export function useSearchParamState(key: string, delay = 300): [string, (value: string) => void] {
  const [params, setParams] = useSearchParams()
  const urlValue = params.get(key) ?? ''
  const [value, setValue] = useState(urlValue)
  const written = useRef(urlValue)
  const timer = useRef<number | undefined>(undefined)

  // URL đổi từ nơi khác (Back/Forward, nút "Xóa bộ lọc") → cập nhật ô nhập
  useEffect(() => {
    if (urlValue === written.current) return
    written.current = urlValue
    window.clearTimeout(timer.current)
    setValue(urlValue)
  }, [urlValue])

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const update = useCallback(
    (next: string) => {
      setValue(next)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => {
        written.current = next
        setParams(
          (prev) => {
            const p = new URLSearchParams(prev)
            if (next) p.set(key, next)
            else p.delete(key)
            return p
          },
          { replace: true },
        )
      }, delay)
    },
    [delay, key, setParams],
  )

  return [value, update]
}
