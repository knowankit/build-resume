import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class Profession extends Component {
  handleChange = (e, index) => {
    this.props.updateProfession(index, e.target.name, e.target.value);
  };

  handleSubmit = type => {
    if (type === 'prev') {
      this.props.history.push('/personal');
    } else {
      this.props.history.push('/education');
    }
  };

  renderProjects = () => {
    const { profession, professionFieldCount } = this.props;
    let fields = [];
    for (let index = 0; index < professionFieldCount; index++) {
      fields.push(
        <>
          <label for="Company Name">Company Name</label>
          <input
            name="company"
            value={profession[index].company}
            onChange={e => this.handleChange(e, index)}
          />
          <label for="Role">Role</label>
          <textArea
            rows={2}
            name="role"
            value={profession[index].role}
            onChange={e => this.handleChange(e, index)}
          />
          <button
            className="btn btn-danger float-right  mb-2"
            style={{ marginRight: '5%' }}
            onClick={() => this.deleteField(index)}
            disabled={this.props.professionFieldCount <= 1}
          >
            Delete
          </button>
        </>
      );
    }

    return fields;
  };

  addField = () => {
    this.props.updateProfessionCount(this.props.professionFieldCount + 1);
  };

  deleteField = () => {
    this.props.deleteProfessionCount(this.props.professionFieldCount - 1);
  };

  render() {
    return (
      <div className="container">
        <div className="form-title">
          <span>Professional Details</span>
        </div>
        <div className="row">
          <div className="col-md-11 mx-auto custom-column">
            <hr />
            <div>
              <form>{this.renderProjects()}</form>
            </div>
            <hr />
            <button
              style={{ marginRight: '5%' }}
              className="btn btn-success float-right"
              onClick={this.addField}
            >
              Add More
            </button>
          </div>
        </div>

        <div className="button-group">
          <button
            className="btn btn-secondary"
            onClick={() => this.handleSubmit('prev')}
          >
            Previous
          </button>
          <button
            className="btn btn-dark"
            onClick={() => this.handleSubmit('next')}
          >
            Next
          </button>
        </div>
        <style jsx>
          {`
            .steps-content {
              margin-top: 40px;
              min-height: 350px;
            }

            label {
              margin: 0px;
            }

            .ant-form-item-label {
              line-height: 25px;
            }

            .ant-form-item {
              margin-bottom: 10px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default withRouter(Profession);
