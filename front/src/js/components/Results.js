import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Results extends Component {

  render() {
    return (
      <div className="container d-block text-center">
        <Link to="/"><button className="btn btn-dark">RETOUR AU VOTE</button></Link>
      </div>
    )
  }
}

export default Results
