import React, { Component } from "react"
import TitleApp from "./TitleApp"
import FaceMash from "../container/FaceMash"
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { fetchCats } from "../../actions/catAction"

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCats()
  }

  render() {
    const { cats } = this.props

    const t = cats.map((cat) => {
      return cat.vote
    })

    console.log(t)
    return (
      <div className="container mw-100">
        <TitleApp />
        <FaceMash />
        <div className="container d-block text-center mw-100">
          <Link to="/results"><button className="btn btn-dark">VOIR LES RESULTATS {t}</button></Link>
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
