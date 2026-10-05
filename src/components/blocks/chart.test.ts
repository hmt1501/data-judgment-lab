import { describe, expect, it } from 'vitest'
import { niceTicks } from './Chart'

describe('niceTicks', () => {
  it('cột: bắt đầu từ 0, bước tròn', () => {
    expect(niceTicks([2.6, 1.99, 3.6, 3.62])).toEqual([0, 1, 2, 3, 4])
  })
  it('đường: không ép về 0', () => {
    expect(niceTicks([102, 108, 111], false)).toEqual([100, 102.5, 105, 107.5, 110, 112.5])
  })
  it('xử lý giá trị âm', () => {
    expect(niceTicks([-3, 5])).toEqual([-4, -2, 0, 2, 4, 6])
  })
})
