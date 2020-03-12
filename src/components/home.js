import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render () {
    return (
      <div className='container'>
        <div className='heading'>
          <p className='mx-auto'>Build your Resume in just few Clicks.</p>
          <p className='mx-auto'>
            Creating a Professional Resume and Cover Letter is Easy Now.
          </p>
          <Link to='/theme-selection' className='btn btn-lg build-now'>
            Build Now
          </Link>
        </div>
        <div className='row instruction-row'>
          <div className='instruction col-md-4 content mx-auto text-center mt-4'>
            <p>
             Choose a Theme
            </p>
            <p>
             Enter Details
            </p>
            <p>
              Download PDF
            </p>
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
          `}
        </style>
      </div>
    )
  }
}

export default Home
