import React, { Component } from 'react'
import html2canvas from 'html2canvas'
import Jspdf from 'jspdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.css'
export class Garden extends Component {
  pdfToHTML () {
    window.scrollTo(0, 0)
    let element = document.querySelector('.bright-and-light')
    const filename = 'ThisIsYourPDFFilename.pdf'

    html2canvas(element).then(canvas => {
      let pdf = new Jspdf('p', 'mm', 'a4')
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298)
      pdf.save(filename)
    })
  }

  render () {
    const education = Object.entries(this.props.education)
    const profession = Object.entries(this.props.profession)

    return (
      <>
        <p className='text-center mt-4'><button className='btn btn-dark download' onClick={this.pdfToHTML}>
          <FontAwesomeIcon icon={faDownload} /> Download</button></p>
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
          </div>
          <p className='education-text'>-EDUCATION</p>

          <div className='row education justify-content-center'>
            {
              education.map((edu, index) =>
                <div key={index} className='col-md-4 text-center'>
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
                  profession.map((pro, index) =>
                    <tr key={index}>
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
