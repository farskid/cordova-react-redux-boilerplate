
import ActionTypes from './ActionTypes'

export function toggleOffCanvas(bool) {
  return {
    type: ActionTypes.TOGGLE_OFF_CANVAS,
    meta: {shown: bool}
  }
}
