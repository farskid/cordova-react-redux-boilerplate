import ActionTypes from '../actions/ActionTypes'
import {get} from '../utils/storage'

const initialState = {
  isFirstTime: get('isFirstTime'),
  message: [], // Messages array to be shown to user
  offCanvasShown: false, // Off Canvas Menu shown state
  popup: false, // Helper for test popup
}

export default function entities(state = initialState, action) {

  switch (action.type) {

    /* First Time */
    case ActionTypes.SET_FIRST_TIME:
      return {
        ...state,
        isFirstTime: action.meta.isFirstTime
      }

    /* Off Canvas */
    case ActionTypes.TOGGLE_OFF_CANVAS:
      return {
        ...state,
        offCanvasShown: action.meta.shown
      }

    /* Popup Action */
    case ActionTypes.TOGGLE_POPUP:
      return {
        ...state,
        popup: action.meta.popup
      }


    default:
      return state
  }
}
