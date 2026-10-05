import { CheckCircle2 } from 'lucide-react'
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import styles from './Toast.module.css'

const ToastContext = createContext<(message: string) => void>(() => {})

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!message) return
    const t = window.setTimeout(() => setMessage(''), 2600)
    return () => window.clearTimeout(t)
  }, [message])

  const show = useCallback((m: string) => setMessage(m), [])

  return (
    <ToastContext.Provider value={show}>
      {children}
      <div role="status" aria-live="polite" className={styles.region}>
        {message && (
          <div className={styles.toast}>
            <CheckCircle2 size={18} aria-hidden />
            {message}
          </div>
        )}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
