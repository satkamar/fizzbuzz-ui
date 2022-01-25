import { put,call, takeLatest } from 'redux-saga/effects'
import {getFizzBuzz} from './api'
import { GET_FIZZ_BUZZ , UPDATE_RESPONSE } from "../actions/actionTypes";


function* getFizzBuzzData(filter) {
  const data = yield call(getFizzBuzz, filter.count)
  
  // if (filter.value.count) 
    yield put({ type: UPDATE_RESPONSE, value: data })
  
}

export function* watchFizzBuzzDataAsync() {
  yield takeLatest(GET_FIZZ_BUZZ, getFizzBuzzData)
}
