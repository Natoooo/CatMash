import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchCats } from "../actions/catsAction"

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCats()
  }

  render() {
    let cats = this.props.cats.map((cat, key) => {
      return (
        <div key={key} className="col-lg-3 col-md-4 col-xs-6">
          <img
            src={cat.url}
            className="img-thumbnail bg-dark"
            alt="Responsive cats images">
          </img>
        </div>
      )
    })

    return (
      <div className="container">
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

        <div className="container">
          <div className="row">{cats}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cats: state.cats
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchCats: () => { dispatch(fetchCats()) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
