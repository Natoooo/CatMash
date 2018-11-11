import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ChangePage extends Component {

  render() {
    return (
      <div className="container d-block text-center mw-100">
        <Link to="/results"><button className="btn btn-dark">VOIR LES RESULTATS</button></Link>
      </div>
    )
  }
}

export default ChangePage
