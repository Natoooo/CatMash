import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { fetchCats } from "../actions/catsAction"

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
      <div className="container">
        <div className="container d-block text-center">
          <Link to="/"><button className="btn btn-dark">RETOUR AU VOTE</button></Link>
        </div>
        <div className="row">
          {
            cats.map((cat, key) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12" key={key}>
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
