import { db } from "../database/db"

export const CATS_RECEIVED = "CATS_RECEIVED"

export function catsReceived(cats) {
  return {
    type: CATS_RECEIVED,
    payload: {
      cats
    }
  }
}

export function fetchRandomCats() {
  return (dispatch) => {
    db.fetchRandomCats()
    .then((cats) => {
      console.log('GOT_CATS')
      dispatch(catsReceived(cats))
    })
    .catch(() => {
      console.log('GOT_ERROR_CATS')
    })
  }
}

export function fetchCats() {
  return (dispatch) => {
    db.fetchCats()
    .then((cats) => {
      console.log('GOT_10_PAGES')
      dispatch(catsReceived(cats))
    })
    .catch(() => {
      console.log('GOT_ERROR_PAGES')
    })
  }
}
