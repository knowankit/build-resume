import React, { Component } from 'react'

export class BrightAndLight extends Component {
  render () {
    return (
      <div className='container bright-and-light'>
        <div className='row'>
          <div className='job-title'>
            <p className='float-right mr-4'>A SALESMAN</p>
          </div>
          <div className='name'><p>CHRIS</p> <p>GARDNER</p></div>
        </div>
        <div className='row'>
          <table className='table custom-table'>
            <thead>
              <tr className='text-center'>
                <td scope='col'>- CONTACT</td>
                <td scope='col'>TEST@GMAIL.COM</td>
                <td scope='col'>+12135246924</td>
              </tr>
            </thead>
          </table>
        </div>
        <div className='about'>
          <p className='mx-auto about-me-text'>-ABOUT ME</p>
          <p className='mx-auto summary-one'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          <p className='mx-auto summary-two'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        </div>
        <p className='education-text'>-EDUCATION</p>

        <div className='row education justify-content-center'>
          <div className='col-md-4 text-center'>
            <p>1900</p>
            <p> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
          </div>
          <div className='col-md-4 text-center'>
            <p>1900</p>
            <p> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
          </div>
          <div className='col-md-4 text-center'>
            <p>1900</p>
            <p> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
          </div>
        </div>
        <div className='experience'>
          <p className='experience-text'>-EXPERIENCE</p>
          <table className='table experience-table'>
            <tbody className='text-center'>
              <tr>
                <th scope='row'>1</th>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Jacob</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Larry</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='row footer'>
            
        </div>
      </div>
    )
  }
}

export default BrightAndLight
