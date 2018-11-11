import { FACEMASH } from "../actions/catAction"

export function facemashReducer(state = [], action) {
  switch(action.type) {
    case FACEMASH:
      return action.payload.facemash

    default:
     return state
  }
}
