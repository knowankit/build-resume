import React, { Component } from 'react'
import { Redirect } from 'react-router'

class ThemeSelection extends Component {
  constructor () {
    super()
    this.state = {
      redirect: false
    }
  }
  selectTheme = (type) => {
    
    this.setState({
      redirect: true
    })
  }

  render () {
    if (this.state.redirect) {
    return <Redirect push to="/build" />;
    }
    return (
    <>
      <div className='container theme-selection mt-2'>
        <button onClick ={() => this.selectTheme('garden')}className='theme-button'>
          Green
        </button>
      </div>
      <style jsx>
        {`
          .theme-selection {
            background-color: white;
            border-radius: 5px;
            height: 300px;
            margin-top: 150px !important;
        }
      `}
      </style>
    </>
    )
  }
}

export default ThemeSelection
