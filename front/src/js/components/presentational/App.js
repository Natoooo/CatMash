import React, { Component } from "react"
import TitleApp from "./TitleApp"
import FaceMash from "../container/FaceMash"
import { Link } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container mw-100">
        <TitleApp />
        <FaceMash />
        <div className="container d-block text-center mw-100">
          <Link to="/results"><button className="btn btn-dark">VOIR LES RESULTATS</button></Link>
        </div>
      </div>
    )
  }
}

export default App
