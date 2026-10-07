/** Đồng bộ tiến độ giữa thiết bị bằng "mã đồng bộ" (không cần tài khoản): dùng chung frontend + Worker. */

export const SYNC_LIMITS = {
  /** kích thước tối đa của tiến độ (JSON) lưu trên server */
  bytes: 65_536,
  /** số ký tự của mã (80 bit = 16 ký tự base32) */
  codeChars: 16,
} as const

/** Base32 Crockford: bỏ I, L, O, U để không nhầm khi đọc/gõ lại. */
const ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'

/** Mã từ byte ngẫu nhiên (cần ≥ 10 byte), dạng chuẩn không gạch: "7K2QM9XD4HPAZT3B". */
export function encodeSyncCode(bytes: Uint8Array): string {
  let bits = 0
  let value = 0
  let out = ''
  for (const b of bytes) {
    value = (value << 8) | b
    bits += 8
    while (bits >= 5 && out.length < SYNC_LIMITS.codeChars) {
      out += ALPHABET[(value >>> (bits - 5)) & 31]
      bits -= 5
    }
    value &= (1 << bits) - 1
  }
  return out
}

/** Chuẩn hóa mã người dùng nhập (hoa/thường, khoảng trắng, gạch, O→0, I/L→1); null nếu sai định dạng. */
export function normalizeSyncCode(input: string): string | null {
  const s = input
    .toUpperCase()
    .replace(/[\s-]+/g, '')
    .replace(/O/g, '0')
    .replace(/[IL]/g, '1')
  return s.length === SYNC_LIMITS.codeChars && [...s].every((ch) => ALPHABET.includes(ch)) ? s : null
}

/** "7K2QM9XD4HPAZT3B" → "7K2Q-M9XD-4HPA-ZT3B" */
export const formatSyncCode = (code: string) => code.match(/.{1,4}/g)?.join('-') ?? code

/** Bản tiến độ trên server; `progress` là JSON không tin cậy, client phải kiểm tra lại. */
export type SyncPayload = { progress: unknown; rev: number }
