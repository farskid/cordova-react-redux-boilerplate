
import Actiontypes from './ActionTypes'

export function showMessage(msg) {
  return {
    type: Actiontypes.SHOW_MESSAGE,
    meta: {message: msg}
  }
}

export function hideMessage() {
  return {
    type: Actiontypes.HIDE_MESSAGE
  }
}
