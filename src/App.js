import React from 'react'
import './App.scss'
import 'antd/dist/antd.css'
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'
import Stepper from './components/stepper/stepper'
import Home from './components/home'
import Navbar from './components/navbar'

function App () {
  return (
    <>
      <Navbar />
      <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/build'>
              <Stepper />
            </Route>
          </Switch>
        </div>
      </Router>
  </>
  )
}

export default App
