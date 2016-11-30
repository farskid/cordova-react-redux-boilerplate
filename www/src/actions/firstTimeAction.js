import ActiontTypes from './ActionTypes'
import {get, set} from '../utils/storage'

export function setFirstTime(bool) {

  set('isFirstTime', bool)

  return {
    type: ActiontTypes.SET_FIRST_TIME,
    meta: {isFirstTime: bool}
  }
}

export function getFirstTime() {
  return {
    type: ActiontTypes.GET_FIRST_TIME,
    meta: {isFirstTime: get('isFirstTime')}
  }
}
