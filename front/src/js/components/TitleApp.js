import React, { Component } from 'react'

class TitleApp extends Component {
  render() {
    return (
      <div className="container mb-3 mw-100">
        <div className="container">
          <img
            src="src/style/logo.png"
            className="cm-title-logo"
            alt="logo">
          </img>
        </div>

        <div className="container text-center">
          <div className="cm-title">CAT  MASH</div>
        </div>
      </div>
    )
  }
}

export default TitleApp
