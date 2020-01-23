import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
export class BrightAndLight extends Component {
  download = () => {
    // html2canvas(document.querySelector('.bright-and-light'), { scrollX: 0,  scrollY: 0 }).then(canvas => {
    //   let pdf = new jsPDF('p', 'mm', 'a4');
    //   let imageHeight = 211/canvas.width * canvas.height
		// 	pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, -100, 211, imageHeight);
		// 	pdf.save('sample.pdf');
    // });
    let t = document.getElementById('your-resume').contentWindow
  t.focus();
  t.print();
    console.log('working')
  }

  componentDidMount () {
    const contents = document.querySelector('.bright-and-light')
    const iframe = document.getElementById('your-resume')
    const iframWindow = iframe.contentWindow || ( iframe.contentDocument.document || iframe.contentDocument)
    iframWindow.document.body.append(contents)

   const link = document.createElement('style')

  //  link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh'
  //  link.rel = 'stylesheet'
  //  link.crossorigin='anonymous'
  //  link.integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh'
  //  iframWindow.document.head.append(link)
    link.innerText = `
    @page {
    size: A4;
    margin: 0;
}
@media print {
    html, body {
        height: 100%;
    }
}
@media print {
    .bright-and-light {
      height: 100%;
        margin: 0;
        border: initial;
        border-radius: initial;
        width: initial;
        min-height: initial;
        box-shadow: initial;
        background: initial;
        page-break-after: always;
    }
}
    body {
    margin: 0;
    padding: 0;
}
    * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
}
     .bright-and-light {
	 background-color: white;
	 color: #daaf40;
}
 .bright-and-light .row {
	 align-items: center;
}
 .bright-and-light .job-title {
	 font-size: 40px;
	 width: 50%;
	 margin-top: 100px;
}
 .bright-and-light .job-title p {
	 border-top: 10px solid #daaf40;
}
 .bright-and-light .name {
	 font-size: 60px;
	 width: 50%;
	 font-weight: bold;
}
 .bright-and-light .name p {
	 margin: 0px;
	 height: 50px;
}
 .bright-and-light .custom-table {
	 width: 50rem;
	 margin: 0px auto;
	 color: #41c1b4;
}
 .bright-and-light .custom-table td {
	 border-color: #41c1b4;
	 border-top: 2px solid #41c1b4;
	 border-bottom: 2px solid #41c1b4;
}
 .bright-and-light .custom-table td:first-child {
	 border-right: 2px solid #41c1b4;
	 font-weight: bold;
}
 .bright-and-light .custom-table td:nth-child(2) {
	 border-right: 2px solid #41c1b4;
}
 .bright-and-light .about .about-me-text {
	 font-weight: bold;
	 margin: 0px;
	 margin-top: 50px;
	 font-size: 20px;
	 text-align: center;
}
 .bright-and-light .about .summary-one {
	 width: 50rem;
	 font-weight: bold;
	 text-align: center;
	 margin-top: 20px;
	 color: grey;
}
 .bright-and-light .about .summary-two {
	 width: 50rem;
	 font-weight: bold;
	 text-align: center;
	 margin-top: 20px;
	 color: black;
}
 .bright-and-light .education-text {
	 font-weight: bold;
	 margin: 0px;
	 margin-top: 50px;
	 font-size: 20px;
	 text-align: center;
}
 .bright-and-light .education {
	 margin-top: 20px;
	 color: black;
}
 .bright-and-light .education p:first-child {
	 color: #daaf40;
	 font-weight: bold;
}
 .bright-and-light .experience .experience-text {
	 font-weight: bold;
	 margin: 0px;
	 margin-top: 50px;
	 font-size: 20px;
	 text-align: center;
}
 .bright-and-light .experience .experience-table {
	 margin-top: 20px !important;
	 width: 50rem;
	 margin: 0px auto;
	 color: #41c1b4;
}
 .bright-and-light .experience .experience-table td {
	 border: none;
}
 .bright-and-light .experience .experience-table th {
	 border: none;
	 color: #daaf40;
}
 .bright-and-light .footer {
	 background-color: #41c1b4;
	 bottom: 0px;
	 left: 0px;
	 height: 60px;
	 margin-top: 100px;
}
 
    }`
    
   iframWindow.document.head.append(link)

  }



  render () {
    return (
      <>
      <iframe id='your-resume' name="printf"></iframe>
      <div className='container bright-and-light'>
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
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
      <button onClick={this.download}>Download</button>
    </>
    )
  }
}

export default BrightAndLight
