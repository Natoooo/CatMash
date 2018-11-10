import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <img
            src="https://image.spreadshirtmedia.com/image-server/v1/mp/designs/1015649041,width=178,height=178/yin-yang-cats-chinese-tai-chi-symbol-cool-holiday.png"
            className="cm-logo"
            alt="logo">
          </img>
        </div>

        <div className="container text-center">
          <div className="cm-title">CAT  MASH</div>
        </div>
      </React.Fragment>
    )
  }
}

export default Header
