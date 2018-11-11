import React, { Component } from 'react'
import NavBar from "./NavBar"
import Rank from "../container/Rank"

class Results extends Component {
  render() {
    return (
      <div className="container mw-100 p-0">
        <NavBar />
        <Rank />
      </div>
    )
  }
}

export default Results
