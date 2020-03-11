import React from 'react'
import './App.scss'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Stepper from './containers/stepper'
import Home from './components/home'
import Navbar from './components/navbar'
import Personal from './containers/personal'
import Profession from './containers/profession'
import Education from './containers/education'
import Projects from './containers/projects'
import Garden from './containers/garden'

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
            <Route path='/personal'>
              <Personal />
            </Route>
            <Route path='/profession'>
              <Profession />
            </Route>
            <Route path='/education'>
              <Education />
            </Route>
            <Route path='/projects'>
              <Projects />
            </Route>
            <Route path='/build'>
              <Stepper />
            </Route>
            <Route path='/garden'>
              <Garden />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
