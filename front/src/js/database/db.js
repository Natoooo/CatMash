import "whatwg-fetch"

class Db {
  constructor() {
    this.baseUrl = "http://localhost:5000"
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
    return fetch(this.baseUrl + "/match", {
      method: 'GET',
      headers: this.baseHeaders
    })
    .then(this._status)
    .then(this._json)
  }
}

export const db = new Db()
