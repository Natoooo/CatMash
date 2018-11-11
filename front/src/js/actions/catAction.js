import { db } from "../api/index"

export const CATS_RECEIVED = "CATS_RECEIVED"
export const FACEMASH = "FACEMASH"
const PAGE_SIZE = 12

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
    let pageNumber = Math.floor(getState().cats.length / PAGE_SIZE)
    db.fetchCats({ page: pageNumber, page_size: PAGE_SIZE})
    .then((cats) => {
      console.log('GOT_12_IMAGES')
      dispatch(catsReceived(cats))
    })
    .catch(() => {
      console.log('GOT_ERROR_12_IMAGES')
    })
  }
}
