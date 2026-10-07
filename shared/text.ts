/** Chữ thường, bỏ dấu: dùng cho slug và so khớp câu hỏi. */
export const foldVi = (s: string) =>
  s
    .toLocaleLowerCase('vi')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')

export function slugify(s: string, maxWords = 10): string {
  return foldVi(s)
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .slice(0, maxWords)
    .join('-')
}
