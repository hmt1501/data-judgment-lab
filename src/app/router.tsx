import { createHashRouter } from 'react-router-dom'
import { CaseReader } from '../pages/CaseReader'
import { Home } from '../pages/Home'
import { Library } from '../pages/Library'
import { NotFound } from '../pages/NotFound'
import { PathPage } from '../pages/Path'
import { Profile } from '../pages/Profile'
import { AppShell } from './AppShell'

export const router = createHashRouter([
  {
    element: <AppShell />,
    children: [
      { index: true, element: <Home />, handle: { title: 'Tổng quan' } },
      { path: 'library', element: <Library />, handle: { title: 'Thư viện case' } },
      { path: 'case/:id', element: <CaseReader />, handle: { title: 'Bài học' } },
      { path: 'path', element: <PathPage />, handle: { title: 'Lộ trình năng lực' } },
      { path: 'profile', element: <Profile />, handle: { title: 'Hồ sơ & cài đặt' } },
      { path: '*', element: <NotFound />, handle: { title: 'Không tìm thấy' } },
    ],
  },
])
