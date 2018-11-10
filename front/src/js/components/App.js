import React, { Component } from "react"
import Header from "./Header"
import Match from "./Match"

class App extends Component {
  render() {
    return (
      <div className="container p-0">
        <Header />
        <Match />
      </div>
    )
  }
}

export default App
