import { CATS_RECEIVED, EMPTY_CATS } from "../actions/catAction"

export function catReducer(state = [], action) {
  switch(action.type) {
    case CATS_RECEIVED:
      return [...state, ...action.payload.cats ]
    case EMPTY_CATS:
      return []
    default:
      return state
  }
}
