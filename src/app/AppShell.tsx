import { Activity, Compass, LayoutDashboard, Library, Menu, Newspaper, Search, UserRound, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation, useMatches } from 'react-router-dom'
import { cases } from '../content'
import { curatedExplainers } from '../content/explainerLibrary'
import { useProgress } from '../state/ProgressProvider'
import { ProgressBar } from '../components/ui/primitives'
import { CommandPalette } from './CommandPalette'
import styles from './AppShell.module.css'

const nav = [
  { to: '/', label: 'Tổng quan', icon: LayoutDashboard, end: true },
  { to: '/library', label: 'Thư viện case', icon: Library, badge: String(cases.length) },
  { to: '/explain', label: 'Đọc nhanh', icon: Newspaper, badge: String(curatedExplainers.length) },
  { to: '/path', label: 'Lộ trình năng lực', icon: Compass },
  { to: '/profile', label: 'Hồ sơ & cài đặt', icon: UserRound },
]

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)

export function AppShell() {
  const { progress } = useProgress()
  const [drawer, setDrawer] = useState(false)
  const [palette, setPalette] = useState(false)
  const location = useLocation()
  const matches = useMatches()
  const title = (matches.at(-1)?.handle as { title?: string } | undefined)?.title ?? ''

  const done = Object.keys(progress.completed).length

  useEffect(() => {
    setDrawer(false)
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  useEffect(() => {
    document.title = title ? `${title} · Data Judgment Lab` : 'Data Judgment Lab'
  }, [title])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPalette((v) => !v)
      }
      if (e.key === 'Escape') setDrawer(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className={styles.shell}>
      <a href="#main" className={styles.skip} onClick={(e) => (e.preventDefault(), document.getElementById('main')?.focus())}>
        Bỏ qua điều hướng
      </a>

      <aside className={`${styles.sidebar} ${drawer ? styles.open : ''}`} aria-label="Điều hướng">
        <div className={styles.brand}>
          <span className={styles.brandMark}>
            <Activity size={20} />
          </span>
          <span>
            <strong>
              judgment<span>lab</span>
            </strong>
            <small>Học phân tích dữ liệu</small>
          </span>
          <button className={styles.closeBtn} aria-label="Đóng menu" onClick={() => setDrawer(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className={styles.nav}>
          {nav.map(({ to, label, icon: Icon, badge, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
              <Icon size={20} aria-hidden />
              <span>{label}</span>
              {badge && <small>{badge}</small>}
            </NavLink>
          ))}
        </nav>

        <div className={styles.sideProgress}>
          <div>
            <b>Tiến độ thư viện</b>
            <span className="num">
              {done}/{cases.length} case
            </span>
          </div>
          <ProgressBar value={done / cases.length} label="Tiến độ thư viện" />
        </div>
        <p className={styles.sideNote}>Tiến độ lưu trên trình duyệt này. Toàn bộ số liệu trong case là mô phỏng.</p>
      </aside>
      {drawer && <button className={styles.scrim} aria-label="Đóng menu" onClick={() => setDrawer(false)} />}

      <div className={styles.main}>
        <header className={styles.topbar}>
          <button className={styles.menuBtn} aria-label="Mở menu" onClick={() => setDrawer(true)}>
            <Menu size={22} />
          </button>
          <span className={styles.crumb}>{title}</span>
          <button className={styles.search} onClick={() => setPalette(true)}>
            <Search size={18} aria-hidden />
            <span>Tìm case, bài đọc…</span>
            <kbd>{isMac ? '⌘' : 'Ctrl'} K</kbd>
          </button>
        </header>

        <main id="main" tabIndex={-1} className={styles.content}>
          <Outlet />
        </main>
      </div>

      {palette && <CommandPalette onClose={() => setPalette(false)} />}
    </div>
  )
}
