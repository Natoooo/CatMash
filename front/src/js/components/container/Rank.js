import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchCats, emptyCats } from "../../actions/catAction"
import path from "../../../style/images/coeur.jpg"

class Rank extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.emptyCats()
    this.props.fetchCats()
  }

  handleClick() {
    this.props.fetchCats()
  }

  render() {
    const { cats } = this.props

    return (
      <div className="container mw-100 text-center">
        <div className="row ">
          {
            cats.map((cat, key) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4 cm-results-container-images" key={key}>
                  <div className="cm-results-images img-responsive" style={{"backgroundImage": "url("+ cat.url +")"}}>
                  </div>
                  <p className="cm-results-counter-votes">{cat.score}<img className="cm-results-icone-like" src={path}/></p>
                </div>
              )
            })
          }
        </div>
        <button className="btn btn-dark" onClick={this.handleClick}>Plus de résultats...</button>
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
    fetchCats: () => { dispatch(fetchCats()) },
    emptyCats: () => { dispatch(emptyCats()) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Rank)
