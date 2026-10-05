import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import type { Block } from '../../content/types'
import { inline } from '../../lib/markdown'
import styles from './blocks.module.css'

type ChartBlock = Extract<Block, { kind: 'chart' }>

/** Hai series = so sánh trước/sau: series đầu nhạt, series sau đậm. */
const palette = (n: number) =>
  n === 2 ? ['var(--chart-1)', 'var(--chart-2)'] : ['var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-1)']

/** Trục có vạch chia "đẹp" (1, 2, 2,5, 5 × 10^k); biểu đồ cột luôn chứa 0. */
export function niceTicks(values: number[], includeZero = true, count = 4): number[] {
  const max = Math.max(...values, ...(includeZero ? [0] : []))
  const min = Math.min(...values, ...(includeZero ? [0] : []))
  const raw = (max - min) / count || 1
  const mag = 10 ** Math.floor(Math.log10(raw))
  const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => s >= raw)!
  const ticks: number[] = []
  for (let t = Math.floor(min / step) * step; t <= Math.ceil(max / step) * step + step / 2; t += step) ticks.push(Number(t.toFixed(10)))
  return ticks
}

const formatNumber = (v: number) => v.toLocaleString('vi-VN', { maximumFractionDigits: 2 })

export function Chart({ block }: { block: ChartBlock }) {
  const colors = palette(block.series.length)
  const values = block.data.flatMap((d) =>
    block.type === 'stackedBar'
      ? [block.series.reduce((sum, s) => sum + Number(d[s.key]), 0)]
      : block.series.map((s) => Number(d[s.key])),
  )
  const ticks = niceTicks(values, block.type !== 'line')
  const unit = block.unit ?? ''
  const fmt = (v: unknown) => (typeof v === 'number' ? `${formatNumber(v)}${unit}` : String(v))

  const axisProps = {
    tick: { fill: 'var(--text-muted)', fontSize: 13 },
    stroke: 'var(--border-strong)',
  }
  const common = (
    <>
      <CartesianGrid stroke="var(--border)" vertical={false} />
      <XAxis dataKey={block.xKey} {...axisProps} interval="preserveStartEnd" minTickGap={8} />
      <YAxis {...axisProps} tickFormatter={fmt} width={64} ticks={ticks} domain={[ticks[0], ticks.at(-1)!]} />
      <Tooltip
        formatter={fmt}
        contentStyle={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 10,
          color: 'var(--text)',
          fontSize: 14,
        }}
        cursor={{ fill: 'var(--surface-2)' }}
      />
      {block.series.length > 1 && <Legend itemSorter={null} wrapperStyle={{ fontSize: 14, color: 'var(--text-muted)' }} />}
      {block.marker && (
        <ReferenceLine x={block.marker.x} stroke="var(--warning)" strokeWidth={2} strokeDasharray="5 4" />
      )}
    </>
  )

  return (
    <figure className={styles.figure}>
      <figcaption className={styles.figTitle}>{block.title}</figcaption>
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height={280}>
          {block.type === 'line' ? (
            <LineChart data={block.data} margin={{ top: 16, right: 16, bottom: 0, left: 0 }}>
              {common}
              {block.series.map((s, i) => (
                <Line key={s.key} type="monotone" dataKey={s.key} name={s.label} stroke={colors[i]} strokeWidth={2.5} dot={{ r: 3 }} />
              ))}
            </LineChart>
          ) : (
            <BarChart data={block.data} margin={{ top: 16, right: 16, bottom: 0, left: 0 }}>
              {common}
              {block.series.map((s, i) => (
                <Bar
                  key={s.key}
                  dataKey={s.key}
                  name={s.label}
                  fill={colors[i]}
                  radius={block.type === 'stackedBar' ? 0 : [4, 4, 0, 0]}
                  stackId={block.type === 'stackedBar' ? 'stack' : undefined}
                  maxBarSize={56}
                />
              ))}
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
      {block.marker && (
        <p className={styles.marker}>
          <span aria-hidden /> {block.marker.x}: {block.marker.label}
        </p>
      )}
      {/* bảng ẩn cho trình đọc màn hình */}
      <div className="sr-only">
      <table>
        <caption>{block.title}</caption>
        <thead>
          <tr>
            <th>{block.xKey}</th>
            {block.series.map((s) => (
              <th key={s.key}>{s.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.data.map((d, i) => (
            <tr key={i}>
              <th>{d[block.xKey]}</th>
              {block.series.map((s) => (
                <td key={s.key}>{fmt(d[s.key])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {block.caption && <p className={styles.caption}>{inline(block.caption)}</p>}
    </figure>
  )
}
