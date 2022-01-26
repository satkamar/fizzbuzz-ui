import { UPDATE_RESPONSE, CLEAR_FIZZ_BUZZ } from "../actions/actionTypes";

var initalValue = []

const fizzbuzz = (state = initalValue, action) => {
  switch (action.type) {
    case UPDATE_RESPONSE:
      return { ...state, result: action.value }
    case CLEAR_FIZZ_BUZZ: 
      return { ...state, result: initalValue }
    default:
      return state
  }
}

export default fizzbuzz