import { Fragment, type ReactNode } from 'react'

// **đậm** | *nghiêng* | `code` | [text](https://url)
const INLINE = /\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`|\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g

/** Render markdown inline tối giản (không HTML thô, an toàn). */
export function inline(md: string): ReactNode {
  const out: ReactNode[] = []
  let last = 0
  for (const m of md.matchAll(INLINE)) {
    if (m.index > last) out.push(md.slice(last, m.index))
    const key = m.index
    if (m[1] !== undefined) out.push(<strong key={key}>{inline(m[1])}</strong>)
    else if (m[2] !== undefined) out.push(<em key={key}>{inline(m[2])}</em>)
    else if (m[3] !== undefined) out.push(<code key={key}>{m[3]}</code>)
    else
      out.push(
        <a key={key} href={m[5]} target="_blank" rel="noreferrer">
          {m[4]}
        </a>,
      )
    last = m.index + m[0].length
  }
  if (last < md.length) out.push(md.slice(last))
  return out.length === 1 ? out[0] : <Fragment>{out}</Fragment>
}

/** Đoạn văn cách nhau bởi dòng trống. */
export function Markdown({ md, className }: { md: string; className?: string }) {
  const paragraphs = md.split(/\n\s*\n/).filter(Boolean)
  return (
    <>
      {paragraphs.map((p, i) => (
        <p key={i} className={className}>
          {inline(p.trim())}
        </p>
      ))}
    </>
  )
}
