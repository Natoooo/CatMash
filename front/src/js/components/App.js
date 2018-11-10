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
            <div className="row mt-3">{cats}</div>
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
