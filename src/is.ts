import { toString } from './base'

export const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined'
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isString = (val: any): val is string => typeof val === 'string'
export const isArray = Array.isArray
export const isFunction = <T extends Function>(val: any): val is T => typeof val === 'function'
export const isObject = (val: any): val is object => toString(val) === '[object Object]'
// eslint-disable-next-line antfu/top-level-function
export const isStringNumber = (val: any): val is boolean => {
  if (!isString(val))
    return false
  return !Number.isNaN(Number(val))
}
// @ts-expect-error
export const isWindow = (val: any): boolean => typeof window !== 'undefined' && toString(val) === '[object Window]'
// @ts-expect-error
export const isBrowser = typeof window !== 'undefined'
