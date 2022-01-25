import { UPDATE_RESPONSE } from "../actions/actionTypes";

var initalValue = []

const fizzbuzz = (state = initalValue, action) => {
  switch (action.type) {
    case UPDATE_RESPONSE:
      return { ...state, result: action.value }
    
    default:
      return state
  }
}

export default fizzbuzz