import React, { Component } from 'react';
class Personal extends Component {
  handleChange = e => {
    this.props.updatePersonal(e.target.name, e.target.value);
  };
  render() {
    return (
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-10 mx-auto custom-column">
            <div className="form-block">
              <div className="form-title">
                <span>Personal Details</span>
              </div>
              <form className="mx-auto">
                <div>
                  <label for="first name">First Name</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    value={this.props.personal.firstName}
                    onChange={this.handleChange}
                  />

                  <label for="last name">Last Name</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    value={this.props.personal.lastName}
                    onChange={this.handleChange}
                  />
                </div>

                <label for="Designation">Designation</label>
                <input
                  placeholder="Designation"
                  name="designation"
                  value={this.props.personal.designation}
                  onChange={this.handleChange}
                />

                <label for="Email">Email</label>
                <input
                  placeholder="email"
                  name="email"
                  value={this.props.personal.email}
                  onChange={this.handleChange}
                />

                <label for="Phone">Phone</label>
                <input
                  placeholder="phone number"
                  name="phone"
                  value={this.props.personal.phone}
                  onChange={this.handleChange}
                />

                <label for="About Me">About Me</label>
                <textArea
                  rows={2}
                  placeholder="about me"
                  name="aboutMe"
                  value={this.props.personal.aboutMe}
                  onChange={this.handleChange}
                />

                <label for="Address Line 1">Address Line 1</label>
                <input
                  placeholder="address line 1"
                  name="addressLineFirst"
                  maxLength="30"
                  value={this.props.personal.addressLineFirst}
                  onChange={this.handleChange}
                />

                <label for="Address Line 2">Address Line 2</label>
                <input
                  placeholder="address line 2"
                  name="addressLineSecond"
                  maxLength="30"
                  value={this.props.personal.addressLineSecond}
                  onChange={this.handleChange}
                />

                <label for="Address Line 3">Address Line 3</label>
                <input
                  placeholder="address line 3"
                  name="addressLineThird"
                  maxLength="30"
                  value={this.props.personal.addressLineThird}
                  onChange={this.handleChange}
                />
              </form>
            </div>
            <div className="button-group">
              <button className="btn btn-light">Previous</button>
              <button className="btn btn-success">Next</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Personal;
