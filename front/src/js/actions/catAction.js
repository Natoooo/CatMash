import { api } from "../api/index"

export const CATS_RECEIVED = "CATS_RECEIVED"
export const EMPTY_CATS = "EMPTY_CATS"
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
    api.fetchRandomCats()
    .then((facemash) => {
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
    api.fetchCats({ page: pageNumber, page_size: PAGE_SIZE})
    .then((cats) => {
      dispatch(catsReceived(cats))
    })
    .catch(() => {
      console.log('GOT_ERROR_12_IMAGES')
    })
  }
}

export function vote(loser_id, winner_id) {
  return (dispatch) => {
    api.createVote(loser_id, winner_id)
    .then(() => {
    })
    .catch(() => {
      console.log("GOT_ERROR_VOTE")
    })
  }
}

export function emptyCats() {
  return {
    type: EMPTY_CATS,
    payload: {}
  }
}
