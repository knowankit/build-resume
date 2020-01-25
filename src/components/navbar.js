import React, { Component } from 'react'

class Navbar extends Component {
  render () {
    return (
      <div className='container-fluid navbarcustom'>
        <div className='row menubar'>
          <div className='ml-4'>
            <img src='/static/images/brl.png' height='70' />
          </div>
          <div className='d-flex align-items-center'>
            <span>Build <b>Resume</b></span>
            {/* <button className=' float-right home-button'>HOME</button> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
