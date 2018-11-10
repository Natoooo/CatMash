import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchRandomCats } from "../actions/catsAction"

class Match extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchRandomCats()
  }

  render() {
    const { cats } = this.props

    const url = cats.map((cat) => {
      return cat.url
    })

    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 w-100">
            <img
              src={url[0]}
              className="cm-images img-thumbnail bg-secondary"
              alt="Responsive cats images">
            </img>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 w-100">
            <img
              src={url[1]}
              className="cm-images img-thumbnail bg-white"
              alt="Responsive cats images">
            </img>
          </div>
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
    fetchRandomCats: () => { dispatch(fetchRandomCats()) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Match)
