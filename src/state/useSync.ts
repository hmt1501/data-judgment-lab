import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type Dispatch, type SetStateAction } from 'react'
import { isGroqKey } from '../../shared/chat'
import { normalizeSyncCode } from '../../shared/sync'
import { apiEnabled, ApiError, createSync, describeError, pullSync, pushSync, putSyncSecret } from '../lib/api'
import { mergeProgress, type Progress } from './progress'
import { browserStorage, loadGroqKey, loadSyncState, saveGroqKey, saveSyncState, type GroqKeyState, type SyncState } from './storage'
import { decryptSecret, encryptSecret, syncStep, type CleanRemote, type SyncApi } from './sync'

export type SyncStatus = { phase: 'off' | 'syncing' | 'ok' | 'error'; at?: string; error?: string }

export type SyncInfo = { code: string | null; status: SyncStatus }

export type SyncActions = {
  /** tạo mã mới từ tiến độ hiện tại; trả thông báo lỗi hoặc null */
  enableSync: () => Promise<string | null>
  /** nối máy này vào một mã có sẵn (gộp tiến độ hai bên); trả thông báo lỗi hoặc null */
  linkSync: (input: string) => Promise<string | null>
  /** quên mã trên máy này; dữ liệu trên server vẫn còn */
  disableSync: () => void
  syncNow: () => void
  /** lần đẩy tới sẽ ghi đè bản trên server (dùng sau "Xóa tiến độ") */
  markReplace: () => void
  /** lưu/xóa key Groq trên máy này; đang đồng bộ thì đẩy (đã mã hóa) lên mã đồng bộ */
  setGroqKey: (key: string | null) => void
}

const DEBOUNCE_MS = 2000

const api: SyncApi = { pull: pullSync, push: (code, p, rev) => pushSync(code, p, rev) }
// khi rời trang: request vẫn được gửi nốt sau khi tab đóng
const keepaliveApi: SyncApi = { pull: pullSync, push: (code, p, rev) => pushSync(code, p, rev, true) }

const message = (err: unknown) => (err instanceof ApiError ? describeError(err) : err instanceof Error ? err.message : 'Có lỗi khi đồng bộ.')

/**
 * Đồng bộ tiến độ qua "mã đồng bộ": chạy khi mở app, khi quay lại tab, 2 giây sau thay đổi cuối và khi rời trang.
 * Thay đổi do người dùng → đánh dấu `dirty`; bản kéo từ server về (applyRemote) thì không.
 */
export function useSync(
  progress: Progress,
  setProgress: Dispatch<SetStateAction<Progress>>,
  clean: CleanRemote,
): { sync: SyncInfo; syncActions: SyncActions; groqKey: string | null } {
  const [state, setStateRaw] = useState<SyncState | null>(() => (apiEnabled ? loadSyncState(browserStorage()) : null))
  const [groq, setGroqRaw] = useState<GroqKeyState>(() => loadGroqKey(browserStorage()))
  const groqRef = useRef(groq)
  const [status, setStatus] = useState<SyncStatus>(() => ({ phase: state ? 'syncing' : 'off' }))

  const stateRef = useRef(state)
  const progressRef = useRef(progress)
  const remoteRef = useRef<Progress | null>(null)
  const running = useRef(false)
  const again = useRef(false)
  const timer = useRef<number | undefined>(undefined)

  const setState = useCallback((s: SyncState | null) => {
    stateRef.current = s
    setStateRaw(s)
    saveSyncState(browserStorage(), s)
  }, [])

  const setGroq = useCallback((g: GroqKeyState) => {
    groqRef.current = g
    setGroqRaw(g)
    saveGroqKey(browserStorage(), g)
  }, [])

  /** Key đổi trên máy này → đẩy lên; không thì nhận key từ server (`remote` undefined = lượt này không kéo về). */
  const syncGroqKey = useCallback(
    async (code: string, remote: string | null | undefined) => {
      const g = groqRef.current
      if (g.dirty) {
        await putSyncSecret(code, g.key ? await encryptSecret(g.key, code) : null)
        if (groqRef.current === g) setGroq({ key: g.key, dirty: false })
      } else if (remote !== undefined) {
        const key = remote ? await decryptSecret(remote, code) : null
        // giải mã hỏng → giữ key của máy này
        if ((key === null || isGroqKey(key)) && key !== g.key && groqRef.current === g) setGroq({ key, dirty: false })
      }
    },
    [setGroq],
  )

  const applyRemote = useCallback(
    (p: Progress) => {
      remoteRef.current = p
      progressRef.current = p
      setProgress(p)
    },
    [setProgress],
  )

  const run = useCallback(
    async (via: SyncApi = api) => {
      if (!stateRef.current) return
      if (running.current) {
        again.current = true
        return
      }
      running.current = true
      setStatus((s) => ({ ...s, phase: 'syncing' }))
      try {
        do {
          again.current = false
          const s: SyncState | null = stateRef.current
          if (!s) break
          const snapshot = progressRef.current
          const res = await syncStep(snapshot, s, via, clean)
          if (stateRef.current?.code !== s.code) break // đã tắt/đổi mã trong lúc chờ
          await syncGroqKey(s.code, res.secret)
          if (progressRef.current !== snapshot) {
            // người dùng thao tác trong lúc đồng bộ: giữ thay đổi đó và đồng bộ thêm một lượt
            if (res.progress !== snapshot) applyRemote(mergeProgress(progressRef.current, res.progress))
            setState({ ...res.state, dirty: true })
            again.current = true
          } else {
            if (res.progress !== snapshot) applyRemote(res.progress)
            setState(res.state)
          }
        } while (again.current)
        setStatus({ phase: stateRef.current ? 'ok' : 'off', at: new Date().toISOString() })
      } catch (err) {
        setStatus({ phase: 'error', at: new Date().toISOString(), error: message(err) })
      } finally {
        running.current = false
      }
    },
    [applyRemote, clean, setState, syncGroqKey],
  )

  // Phân biệt thay đổi của người dùng với bản từ server; layout effect để ref cập nhật ngay sau khi commit.
  useLayoutEffect(() => {
    if (progress === progressRef.current && progress !== remoteRef.current) return
    progressRef.current = progress
    if (progress === remoteRef.current) {
      remoteRef.current = null
      return
    }
    const s = stateRef.current
    if (!s) return
    if (!s.dirty) setState({ ...s, dirty: true })
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => void run(), DEBOUNCE_MS)
  }, [progress, run, setState])

  useEffect(() => {
    void run()
    const onVisibility = () => {
      if (document.visibilityState === 'visible') void run()
      else if (stateRef.current?.dirty) {
        window.clearTimeout(timer.current)
        void run(keepaliveApi)
      }
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      window.clearTimeout(timer.current)
    }
  }, [run])

  const syncActions = useMemo<SyncActions>(
    () => ({
      enableSync: async () => {
        try {
          const { code, rev } = await createSync(progressRef.current)
          setState({ code, rev, dirty: false })
          setStatus({ phase: 'ok', at: new Date().toISOString() })
          if (groqRef.current.key) {
            setGroq({ key: groqRef.current.key, dirty: true })
            void run()
          }
          return null
        } catch (err) {
          return message(err)
        }
      },
      linkSync: async (input) => {
        const code = normalizeSyncCode(input)
        if (!code) return 'Mã không đúng định dạng (16 ký tự, ví dụ 7K2Q-M9XD-4HPA-ZT3B).'
        try {
          const remote = await pullSync(code)
          applyRemote(mergeProgress(progressRef.current, clean(remote.progress)))
          // server đã có key → dùng key đó; chưa có mà máy này có → đẩy lên
          const key = remote.secret ? await decryptSecret(remote.secret, code) : undefined
          if (isGroqKey(key)) setGroq({ key, dirty: false })
          else if (groqRef.current.key) setGroq({ key: groqRef.current.key, dirty: true })
          setState({ code, rev: remote.rev, dirty: true })
          await run()
          return null
        } catch (err) {
          return message(err)
        }
      },
      disableSync: () => {
        window.clearTimeout(timer.current)
        setState(null)
        setGroq({ key: groqRef.current.key, dirty: false })
        setStatus({ phase: 'off' })
      },
      syncNow: () => void run(),
      markReplace: () => {
        const s = stateRef.current
        if (s) setState({ ...s, dirty: true, replace: true })
      },
      setGroqKey: (key) => {
        setGroq({ key, dirty: !!stateRef.current })
        if (stateRef.current) void run()
      },
    }),
    [applyRemote, clean, run, setGroq, setState],
  )

  const sync = useMemo<SyncInfo>(() => ({ code: state?.code ?? null, status }), [state?.code, status])
  return { sync, syncActions, groqKey: groq.key }
}
