import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
        <div className="conatiner mb-3">
        <div className="container">
          <img
            src="src/style/logo.png"
            className="cm-logo"
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

export default Header
