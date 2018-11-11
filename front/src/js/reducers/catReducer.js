import { CATS_RECEIVED } from "../actions/catAction"

export function catReducer(state = [], action) {
  switch(action.type) {
    case CATS_RECEIVED:
      return [...state, ...action.payload.cats ]

    default:
      return state
  }
}
