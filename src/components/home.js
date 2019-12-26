import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Home extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <div className='heading'>
          <p className='mx-auto'>Build your Resume in just few Clicks.</p>
          <p className='mx-auto'>Creating a Professional Resume and Cover Letter is Easy Now.</p>
          <Link to='/build' className='btn btn-lg build-now'>Build Now</Link>
        </div>
        <div className='row'>
          <div className='content mx-auto text-center' />
        </div>
      </div>
    )
  }
}

export default Home
