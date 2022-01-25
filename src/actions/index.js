import {GET_FIZZ_BUZZ} from './actionTypes'

export const getFizzBuzzData = (count) => ({
  type: GET_FIZZ_BUZZ,
  count: count
})