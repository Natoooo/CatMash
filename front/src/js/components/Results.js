import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchCats } from "../actions/catAction"
import NavBar from "./NavBar"

class Results extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCats()
  }

  render() {
    const { cats } = this.props

    return (
      <div className="container mw-100">
        <NavBar />
        <div className="container mw-100 text-center">
          <div className="row ">
            {
              cats.map((cat, key) => {
                return (
                  <div className="col-lg-3 col-md-6 col-sm-12 mb-2 cm-results-container-images" key={key}>
                    <img
                      src={cat.url}
                      className="cm-results-images img-thumbnail bg-secondary"
                      alt="Responsive cats images">
                    </img>
                  </div>
                )
              })
            }
          </div>
          <button onClick={this.props.fetchCats}>SCROLL</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Results)
