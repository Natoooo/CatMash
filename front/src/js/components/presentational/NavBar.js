import React, { Component } from 'react'
import { Link } from "react-router-dom"
import path from "../../../style/images/logo.png"

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark mb-4 pr-2 p-0">
        <div className="navbar-header">
          <a className="navbar-brand m-1" href="#">
            <img alt="Brand" className="cm-nav-logo" src={path} />
            CATMASH
          </a>
        </div>
        <ul className="nav navbar-nav m-1">
          <Link className="cm-results-link" to="/"><li>Retour aux votes</li></Link>
        </ul>
      </nav>
    )
  }
}

export default NavBar
