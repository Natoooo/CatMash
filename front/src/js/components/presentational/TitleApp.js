import React, { Component } from 'react'
import path from "../../../style/images/logo.png"

class TitleApp extends Component {
  render() {
    return (
      <div className="container mb-3 mw-100">
        <div className="container">
          <img
            src={path}
            className="cm-app-title-logo"
            alt="logo">
          </img>
        </div>

        <div className="container text-center">
          <div className="cm-app-title">CAT  MASH</div>
        </div>
      </div>
    )
  }
}

export default TitleApp
