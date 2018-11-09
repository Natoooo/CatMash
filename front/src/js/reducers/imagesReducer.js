import { db } from "../database/db"
import { IMAGES_RECEIVED } from "../actions/imagesAction"

const initialState = db.getImages()

export function imagesReducer(state = initialState, action) {
  switch(action.type) {
    case IMAGES_RECEIVED:
      return action.payload.images

    default:
      return state
  }
}
