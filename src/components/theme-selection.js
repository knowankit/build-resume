import React, { Component } from "react";
import { Redirect } from "react-router";

class ThemeSelection extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }
  selectTheme = type => {
    this.props.updateTheme(type);
    this.setState({
      redirect: true
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/personal" />;
    }

    return (
      <>
        <div className="theme-selection mt-2">
          <div className="heading">
            <p className="mx-auto">Select Theme</p>
          </div>
          <div className="grid-area">
            <button
              onClick={() => this.selectTheme("garden")}
              className="theme-button"
            >
              Green
            </button>
          </div>
        </div>
        <style jsx>
          {`
            .theme-selection {
              background-color: white;
              border-radius: 5px;
              width: 80%;
              margin-left: 10%;
            }

            .grid-area {
              display: grid;
              grid-template-columns: repeat(auto-fit, 180px);
              grid-gap: 20px;
              justify-content: center;
              grid-template-rows: 200px;
              margin-top: 20px;
              grid-auto-rows: 200px;
            }

            .heading p {
              color: black !important;
            }
          `}
        </style>
      </>
    );
  }
}

export default ThemeSelection;
