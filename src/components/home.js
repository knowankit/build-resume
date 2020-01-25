import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'

class Home extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <div className='heading'>
          <p className='mx-auto'>Build your Resume in just few Clicks.</p>
          <p className='mx-auto'>Creating a Professional Resume and Cover Letter is Easy Now.</p>
          <Link to='/theme-selection' className='btn btn-lg build-now'>Build Now</Link>
        </div>
        <div className='row instruction-row'>
          <div className='instruction content mx-auto text-center mt-4'>
            <p> <Icon type='appstore' theme='twoTone' /> &nbsp; Choose a Theme</p>
            <p> <Icon type='profile' theme='twoTone' /> &nbsp; Enter Details</p>
            <p><Icon type='file-pdf' theme='twoTone' /> &nbsp; Download PDF</p>
          </div>
        </div>
        <style jsx>
          {`
            .instruction p {
              font-size: 30px;
              width: 300px;
              display: flex;
              border-radius: 5px;
              align-items: center;
            }

            .instruction {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            
            .instruction-row {
              margin-top: 50px;
            }

             
          `}
        </style>
      </div>
    )
  }
}

export default Home
