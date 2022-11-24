import { expect, it } from 'vitest'
import { isArray, isBoolean, isDef, isFunction, isNumber, isObject, isString } from '../src'

it('is', () => {
  // undefined
  expect(isDef(1)).toBe(true)
  expect(isDef(undefined)).toBe(false)

  // boolean
  expect(isBoolean(true)).toBe(true)
  expect(isBoolean(0)).toBe(false)

  // number
  expect(isNumber(1)).toBe(true)
  expect(isNumber('1')).toBe(false)

  // string
  expect(isString('1')).toBe(true)
  expect(isString(1)).toBe(false)

  // array
  expect(isArray([])).toBe(true)
  expect(isArray({})).toBe(false)

  // function
  expect(isFunction(() => {})).toBe(true)
  expect(isFunction({})).toBe(false)

  // object
  expect(isObject({})).toBe(true)
  expect(isObject([])).toBe(false)
})
