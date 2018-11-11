import React, { Component } from "react"
import TitleApp from "./TitleApp"
import Match from "./Match"
import ChangePage from "./ChangePage"

class App extends Component {
  render() {
    return (
      <div className="container mw-100">
        <TitleApp />
        <Match />
        <ChangePage />
      </div>
    )
  }
}

export default App
