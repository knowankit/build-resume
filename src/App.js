import React from 'react'
import './App.scss'
import 'antd/dist/antd.css'
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'
import Stepper from './components/stepper/stepper'
// import Home from './components/home'
import Navbar from './components/navbar'

function App () {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path='/'>
            <Stepper />
          </Route>
          <Route path='/personal'>
            {/* <Stepper /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
