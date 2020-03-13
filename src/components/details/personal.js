import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
class Personal extends Component {
  handleChange = e => {
    this.props.updatePersonal(e.target.name, e.target.value);
  };

  handleSubmit = type => {
    if (type === "prev") {
      this.props.history.push("/");
    } else {
      this.props.history.push("/profession");
    }
  };

  render() {
    return (
      <div className="container mx-auto">
        <div className="form-title">
          <span>Personal Details</span>
        </div>

        <div className="row">
          <div className="col-md-11 mx-auto custom-column">
            {/* <hr /> */}
            <div className="form-block">
              <form className="mx-auto">
                <div>
                  <label for="first name">First Name</label>
                  <input
                    name="firstName"
                    value={this.props.personal.firstName}
                    onChange={this.handleChange}
                  />

                  <label for="last name">Last Name</label>
                  <input
                    name="lastName"
                    value={this.props.personal.lastName}
                    onChange={this.handleChange}
                  />
                </div>

                <label for="Designation">Designation</label>
                <input
                  name="designation"
                  value={this.props.personal.designation}
                  onChange={this.handleChange}
                />

                <label for="Email">Email</label>
                <input
                  name="email"
                  value={this.props.personal.email}
                  onChange={this.handleChange}
                />

                <label for="Phone">Phone</label>
                <input
                  name="phone"
                  value={this.props.personal.phone}
                  onChange={this.handleChange}
                />

                <label for="About Me">About Me</label>
                <textArea
                  rows={2}
                  name="aboutMe"
                  value={this.props.personal.aboutMe}
                  onChange={this.handleChange}
                />

                <label for="Address Line 1">Address</label>
                <input
                  name="addressLineFirst"
                  maxLength="30"
                  value={this.props.personal.addressLineFirst}
                  onChange={this.handleChange}
                />
              </form>
            </div>
            <hr />
            <div className="button-group">
              <button
                className="btn btn-dark"
                onClick={() => this.handleSubmit("prev")}
              >
                <FontAwesomeIcon icon={faArrowLeft} /> Previous
              </button>
              <button
                className="btn btn-dark"
                onClick={() => this.handleSubmit("next")}
              >
                Next <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Personal);
