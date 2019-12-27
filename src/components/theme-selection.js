import React, { Component } from 'react'

class ThemeSelection extends Component {
  render () {
    return (
    <>
      <div className='container theme-selection mt-2'>
        <button>Green theme</button>
      </div>
      <style jsx>
        {`
          .theme-selection {
                background-color: white;
                border-radius: 5px;
                height: 500px;
                margin-top: 100px !important;
        }
          `}
      </style>
    </>
    )
  }
}

export default ThemeSelection
