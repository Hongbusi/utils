import { expect, it } from 'vitest'
import { isNumber } from '../src'

it('is', () => {
  expect(isNumber(1)).toBe(true)
  expect(isNumber('1')).toBe(false)
})
