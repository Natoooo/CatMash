import { db } from "../database/db"

export function vote(loser_id, winner_id) {
  return (dispatch) => {
    db.createVote(loser_id, winner_id)
    .then(() => {
      console.log("GOT_VOTE")
    })
    .catch(() => {
      console.log("GOT_ERROR_VOTE")
    })
  }
}
