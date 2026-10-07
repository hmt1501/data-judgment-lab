import { describe, expect, it } from 'vitest'
import { encodeSyncCode, formatSyncCode, normalizeSyncCode, type SyncPayload } from '../../shared/sync'
import type { PushResult } from '../lib/api'
import { answerQuiz, emptyProgress, HISTORY_LIMIT, markOpened, mergeProgress, setCompleted, toggleSaved, updateSettings, type Progress } from './progress'
import { parseProgress, type SyncState } from './storage'
import { syncStep, type SyncApi } from './sync'

const T1 = '2026-10-07T01:00:00.000Z'
const T2 = '2026-10-07T02:00:00.000Z'

describe('mã đồng bộ', () => {
  it('16 ký tự base32 Crockford; chuẩn hóa chữ thường, gạch, O/I/L', () => {
    const code = encodeSyncCode(new Uint8Array([255, 0, 128, 7, 66, 1, 2, 3, 250, 99]))
    expect(code).toMatch(/^[0-9A-HJKMNP-TV-Z]{16}$/)
    expect(normalizeSyncCode(` ${formatSyncCode(code).toLowerCase()} `)).toBe(code)
    expect(normalizeSyncCode('7k2q-m9xd-4hpa-zt3b')).toBe('7K2QM9XD4HPAZT3B')
    expect(normalizeSyncCode('OOOO-IIII-LLLL-0000')).toBe('0000111111110000')
    expect(normalizeSyncCode('7K2Q-M9XD')).toBeNull()
    expect(normalizeSyncCode('UUUU-UUUU-UUUU-UUUU')).toBeNull()
  })
})

describe('mergeProgress', () => {
  it('hợp mọi mục, trùng thì ưu tiên local, lịch sử lấy lần mở mới nhất, giữ theme của máy này', () => {
    let a = setCompleted(emptyProgress(), 'x', true, T1)
    a = answerQuiz(toggleSaved(a, 'x'), 'q1', 'a')
    a = updateSettings(markOpened(a, 'x', T1), { theme: 'dark' })
    let b = setCompleted(emptyProgress(), 'y', true, T2)
    b = answerQuiz(toggleSaved(toggleSaved(b, 'y'), 'x'), 'q1', 'b')
    b = updateSettings(markOpened(markOpened(b, 'y', T1), 'x', T2), { name: 'Lan', theme: 'light' })

    const m = mergeProgress(a, b)
    expect(Object.keys(m.completed).sort()).toEqual(['x', 'y'])
    expect(m.quiz.q1).toBe('a')
    expect(m.saved).toEqual(['x', 'y'])
    expect(m.history).toEqual([
      { caseId: 'x', openedAt: T2 },
      { caseId: 'y', openedAt: T1 },
    ])
    expect(m.settings).toEqual({ name: 'Lan', theme: 'dark' })
  })

  it('lịch sử gộp không vượt giới hạn', () => {
    let a = emptyProgress()
    let b = emptyProgress()
    for (let i = 0; i < HISTORY_LIMIT; i++) {
      a = markOpened(a, `a${i}`, T1)
      b = markOpened(b, `b${i}`, T2)
    }
    const m = mergeProgress(a, b)
    expect(m.history).toHaveLength(HISTORY_LIMIT)
    expect(m.history.every((h) => h.caseId.startsWith('b'))).toBe(true)
  })

  it('parseProgress: chỉ nhận bản v2', () => {
    expect(parseProgress({ version: 1 })).toBeNull()
    expect(parseProgress(toggleSaved(emptyProgress(), 'a'))?.saved).toEqual(['a'])
  })
})

/** Server giả: lưu một bản, kiểm tra rev như Worker thật. */
function fakeServer(initial: Progress, rev = 1) {
  const server = { progress: initial as Progress, rev, pushes: 0, pulls: 0 }
  const api: SyncApi = {
    pull: async () => {
      server.pulls++
      return { progress: structuredClone(server.progress), rev: server.rev } satisfies SyncPayload
    },
    push: async (_code, progress, baseRev): Promise<PushResult> => {
      server.pushes++
      if (baseRev !== server.rev) return { ok: false, remote: { progress: structuredClone(server.progress), rev: server.rev } }
      server.progress = structuredClone(progress)
      server.rev++
      return { ok: true, rev: server.rev }
    },
  }
  return { server, api }
}

const clean = (raw: unknown) => parseProgress(raw) ?? emptyProgress()
const state = (over: Partial<SyncState> = {}): SyncState => ({ code: 'C', rev: 1, dirty: false, ...over })

describe('syncStep', () => {
  it('không có thay đổi, server không đổi → không làm gì', async () => {
    const local = toggleSaved(emptyProgress(), 'a')
    const { api, server } = fakeServer(local)
    const res = await syncStep(local, state(), api, clean)
    expect(res.progress).toBe(local)
    expect(server.pushes).toBe(0)
  })

  it('server mới hơn, local không đổi → thay local (bỏ lưu lan sang máy này), giữ theme', async () => {
    const local = updateSettings(toggleSaved(emptyProgress(), 'a'), { theme: 'dark' })
    const { api } = fakeServer(emptyProgress(), 5)
    const res = await syncStep(local, state(), api, clean)
    expect(res.progress.saved).toEqual([])
    expect(res.progress.settings.theme).toBe('dark')
    expect(res.state.rev).toBe(5)
  })

  it('local có thay đổi, server không đổi → đẩy lên', async () => {
    const local = toggleSaved(emptyProgress(), 'a')
    const { api, server } = fakeServer(emptyProgress())
    const res = await syncStep(local, state({ dirty: true }), api, clean)
    expect(res.state).toEqual({ code: 'C', rev: 2, dirty: false })
    expect(server.progress.saved).toEqual(['a'])
  })

  it('cả hai cùng đổi (409) → gộp rồi đẩy lại', async () => {
    const local = toggleSaved(emptyProgress(), 'a')
    const { api, server } = fakeServer(toggleSaved(emptyProgress(), 'b'), 3)
    const res = await syncStep(local, state({ dirty: true, rev: 1 }), api, clean)
    expect(res.progress.saved).toEqual(['a', 'b'])
    expect(server.progress.saved).toEqual(['a', 'b'])
    expect(res.state).toEqual({ code: 'C', rev: 4, dirty: false })
  })

  it('chế độ replace (sau "Xóa tiến độ") → ghi đè, không gộp lại dữ liệu cũ', async () => {
    const { api, server } = fakeServer(toggleSaved(emptyProgress(), 'b'), 3)
    const res = await syncStep(emptyProgress(), state({ dirty: true, rev: 1, replace: true }), api, clean)
    expect(res.progress.saved).toEqual([])
    expect(server.progress.saved).toEqual([])
    expect(res.state.replace).toBeUndefined()
  })

  it('mã không tồn tại → lỗi được ném ra để giao diện hiển thị', async () => {
    const api: SyncApi = {
      pull: async () => {
        throw new Error('Không tìm thấy mã đồng bộ này.')
      },
      push: async () => ({ ok: true, rev: 1 }),
    }
    await expect(syncStep(emptyProgress(), state(), api, clean)).rejects.toThrow('Không tìm thấy')
  })
})
