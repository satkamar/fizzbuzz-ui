import {GET_FIZZ_BUZZ, CLEAR_FIZZ_BUZZ} from './actionTypes'

export const getFizzBuzzData = (count) => ({
  type: GET_FIZZ_BUZZ,
  count: count
})

export const clearData = (count) => ({
  type: CLEAR_FIZZ_BUZZ,
  count: count
})