import React, { Component } from 'react'

class Home extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <div className='row menubar'>
          <span>Build <b>Resume</b></span>
        </div>
        <div className='heading'>
          <p className='mx-auto'>Build your Resume in just few Clicks.</p>
          <p className='mx-auto'>Creating a Professional Resume and Cover Letter is Easy Now.</p>
          <button className='btn btn-lg build-now'>Build Now</button>
        </div>
        <div className='row'>
          <div className='content mx-auto text-center' />
        </div>
      </div>
    )
  }
}

export default Home
