import { db } from "../database/db"

export const CATS_RECEIVED = "CATS_RECEIVED"
export const FACEMASH = "FACEMASH"
const PAGE_SIZE = 9

export function facemashReceived(facemash) {
  return {
    type: FACEMASH,
    payload: {
      facemash
    }
  }
}

export function fetchRandomCats() {
  return (dispatch) => {
    db.fetchRandomCats()
    .then((facemash) => {
      console.log('GOT_CATS')
      dispatch(facemashReceived(facemash))
    })
    .catch(() => {
      console.log('GOT_ERROR_CATS')
    })
  }
}

export function catsReceived(cats) {
  return {
    type: CATS_RECEIVED,
    payload: {
      cats
    }
  }
}

export function fetchCats() {
  return (dispatch, getState) => {
    db.fetchCats({ page: Math.floor(getState().cats.length / PAGE_SIZE), page_size: PAGE_SIZE})
    .then((cats) => {
      console.log('GOT_9_IMAGES')
      dispatch(catsReceived(cats))
    })
    .catch(() => {
      console.log('GOT_ERROR_9_IMAGES')
    })
  }
}
