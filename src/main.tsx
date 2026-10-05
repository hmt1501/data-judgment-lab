import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router'
import { ToastProvider } from './components/ui/Toast'
import { ProgressProvider } from './state/ProgressProvider'
import './styles/tokens.css'
import './styles/base.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProgressProvider>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </ProgressProvider>
  </StrictMode>,
)
