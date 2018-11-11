import "whatwg-fetch"
import { stringify } from "qs"

class Api {
  constructor() {
    this.baseUrl = ""
    this.baseHeaders = {"Content-Type": "application/json"}
  }

  _status(resp) {
    if (resp.status >= 200 && resp.status < 300) {
      return Promise.resolve(resp)
    } else {
      return Promise.reject(new Error(resp.statusText)) // resp.statusText is a property that hold a text representation  of the status code
    }
  }

  _json(resp) {
    return resp.json()
  }

  fetchRandomCats() {
    return fetch(this.baseUrl + "/api/match", {
      method: 'GET',
      headers: this.baseHeaders
    })
    .then(this._status)
    .then(this._json)
  }

  fetchCats(opts={'page': 0, 'page_size': 9}) {
    return fetch(this.baseUrl + "/api/cats?" + stringify(opts), {
      method: 'GET',
      headers: this.baseHeaders
    })
    .then(this._status)
    .then(this._json)
  }

  createVote(loser_id, winner_id) {
    return fetch(this.baseUrl + "/api/vote", {
      method: 'POST',
      headers: this.baseHeaders,
      body: JSON.stringify({
        loser_id: loser_id,
        winner_id: winner_id
      })
    })
    .then(this._status)
  }
}

export const api = new Api()
