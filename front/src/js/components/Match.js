import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchRandomCats } from "../actions/catsAction"

class Match extends Component {
  constructor(props) {
    super(props)

    this.voted = this.voted.bind(this)
  }

  componentDidMount() {
    this.props.fetchRandomCats()
  }

  voted() {
    this.props.fetchRandomCats()
  }

  render() {
    const { cats } = this.props

    const url = cats.map((cat) => {
      return cat.url
    })

    return (
      <div className="container text-center mt-3">
        <h3 className="cm-subtitle">Quel chat est le plus mignon ?</h3>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12" onClick={this.voted}>
            <img
              src={url[0]}
              className="cm-images img-thumbnail bg-secondary"
              alt="Responsive cats images">
            </img>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12" onClick={this.voted}>
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
