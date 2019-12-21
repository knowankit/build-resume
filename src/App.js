import React from 'react'
import './App.scss'
import 'antd/dist/antd.css'
// import Login from './components/login'
import Stepper from './components/stepper/stepper'

function App () {
  return (
    <div className='container-fluid'>
      <div className='row mx-auto d-flex justify-content-center align-items-center'>
        {/* <div className='col-md-2 login d-flex justify-content-center'>
          <Login />
          <div>
            <div>
              <p>BUILD Resume</p>
            </div>
          </div>
        </div> */}
        <div className='col-md-6 login'>
          <Stepper />
        </div>
      </div>
    </div>
  )
}

export default App
