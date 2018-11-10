import { CATS_RECEIVED } from "../actions/catsAction"

export function catsReducer(state = [], action) {
  switch(action.type) {
    case CATS_RECEIVED:
      return action.payload.cats

    default:
      return state
  }
}
