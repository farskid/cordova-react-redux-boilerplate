import ActionTypes from './ActionTypes'

export function togglePopup(bool) {
  return {
    type: ActionTypes.TOGGLE_POPUP,
    meta: {popup: bool}
  }
}
