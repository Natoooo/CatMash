import React, { Component } from "react"
import { connect } from "react-redux"

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let images = this.props.images.map((image, key) => {
      return (
        <div key={key} className="col-lg-3 col-md-4 col-xs-6">
          <img
            src={image.url}
            className="img-thumbnail rounded-circle"
            alt="Responsive image">
          </img>
        </div>
      )
    })

    return (
      <div className="container text-center">
        <h1>CAT MASH</h1>
        <div className="container">
            <div className="row mt-3">{images}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(App)
