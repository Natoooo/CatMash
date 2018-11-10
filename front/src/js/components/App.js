import React, { Component } from "react"
import Header from "./Header"
import Match from "./Match"
import Footer from "./Footer"

class App extends Component {
  render() {
    return (
      <div className="container p-0">
        <Header />
        <Match />
        <Footer />
      </div>
    )
  }
}

export default App
