import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
export class Garden extends Component {
  render () {
    const education = Object.entries(this.props.education)
    const profession = Object.entries(this.props.profession)

    return (
      <>
        <div className='container bright-and-light'>
          <div className='row'>
            <div className='job-title'>
              <p className='float-right mr-4'>{this.props.personal.designation || 'Designation'}</p>
            </div>
            <div className='name'><p>{this.props.personal.firstName || 'First Name'}</p> <p>{this.props.personal.lastName || 'Last Name'}</p></div>
          </div>
          <div className='row'>
            <table className='table custom-table'>
              <thead>
                <tr className='text-center'>
                  <td scope='col'>- CONTACT</td>
                  <td scope='col'>{this.props.personal.email || 'Email'}</td>
                  <td scope='col'>{this.props.personal.phone || 'Phone'}</td>
                </tr>
              </thead>
            </table>
          </div>
          <div className='about'>
            <p className='mx-auto about-me-text'>-ABOUT ME</p>
            <p className='mx-auto summary-one'>{this.props.personal.aboutMe || 'About Me'}</p>
            {/* <p className='mx-auto summary-two'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p> */}
          </div>
          <p className='education-text'>-EDUCATION</p>

          <div className='row education justify-content-center'>
            {
              education.map(edu =>
                <div className='col-md-4 text-center'>
                  <p>{edu[1].yop}</p>
                  <p>{edu[1].degree}</p>
                </div>
              )
            }
          </div>
          <div className='experience'>
            <p className='experience-text'>-EXPERIENCE</p>
            <table className='table experience-table'>
              <tbody className='text-center'>
                {
                  profession.map(pro =>
                    <tr>
                      <th>{pro[1].company}</th>
                      <td>{pro[1].role}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
          <div className='row footer' />
        </div>
    </>
    )
  }
}

export default Garden
