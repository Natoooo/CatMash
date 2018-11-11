import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchRandomCats } from "../actions/catAction"
import { vote } from "../actions/voteAction"

class Match extends Component {
  constructor(props) {
    super(props)

    this.voted = this.voted.bind(this)
  }

  componentDidMount() {
    console.log("RAMDOM")
    this.props.fetchRandomCats()
  }

  voted(loser_id, winner_id) {
    this.props.fetchRandomCats()
    this.props.vote(loser_id, winner_id)
  }

  render() {
    const { cats } = this.props
    console.log("FACEMASH", cats)

    if(cats == undefined || cats.length != 2) {
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
        <h3 className="cm-subtitle">Quelle photo est la plus mignonne ?</h3>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 cm-container-images" onClick={() => { this.voted(cats[1].id, cats[0].id) }}>
              <img
                src={cats[0].url}
                className="cm-images img-thumbnail bg-secondary"
                alt="Responsive cats images">
              </img>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 cm-container-images" onClick={() => { this.voted(cats[0].id, cats[1].id) }}>
              <img
                src={cats[1].url}
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
    cats: state.facemash
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchRandomCats: () => { dispatch(fetchRandomCats()) },
    vote: (loser_id, winner_id) => { dispatch(vote(loser_id, winner_id)) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Match)
