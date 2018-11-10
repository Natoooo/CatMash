import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {

  render() {
    return (
      <div className="container d-block text-center">
        <Link to="/results"><button className="btn btn-dark">VOIR LES RESULTATS</button></Link>
      </div>
    )
  }
}

export default Footer
