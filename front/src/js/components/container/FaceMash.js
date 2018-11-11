import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchRandomCats } from "../../actions/catAction"
import { vote } from "../../actions/catAction"

class FaceMash extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchRandomCats()
  }

  handleClick(loser_id, winner_id) {
    this.props.fetchRandomCats()
    this.props.vote(loser_id, winner_id)
  }

  render() {
    const { facemash } = this.props

    if(facemash == undefined || facemash.length != 2) {
      return (
        <div className="container text-center mt-3 mw-100">
          <h3 className="cm-subtitle">Quelle photo est la plus mignonne ?</h3>
          <div className="row">
          </div>
        </div>
      )
    }

    return (
      <div className="container text-center mt-3 mw-100">
        <h3 className="cm-app-subtitle">Quelle photo est la plus mignonne ?</h3>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 cm-app-container-images" onClick={() => { this.handleClick(facemash[1].id, facemash[0].id) }}>
            <div className="cm-app-images img-thumbnail bg-secondary" style={{"backgroundImage": "url("+ facemash[0].url +")"}}>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 cm-app-container-images" onClick={() => { this.handleClick(facemash[0].id, facemash[1].id) }}>
            <div className="cm-app-images img-thumbnail bg-white" style={{"backgroundImage": "url("+ facemash[1].url +")"}}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    facemash: state.facemash
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchRandomCats: () => { dispatch(fetchRandomCats()) },
    vote: (loser_id, winner_id) => { dispatch(vote(loser_id, winner_id)) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(FaceMash)
