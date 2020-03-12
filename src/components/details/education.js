import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class Education extends Component {
  handleChange = (e, index) => {
    this.props.updateEducation(index, e.target.name, e.target.value);
  };

  handleSubmit = type => {
    if (type === 'prev') {
      this.props.history.push('/profession');
    } else {
      this.props.history.push('/projects');
    }
  };

  renderEducation = () => {
    const { education, educationFieldCount } = this.props;
    console.log(this.props);
    let fields = [];
    for (let index = 0; index < educationFieldCount; index++) {
      fields.push(
        <>
          <label for="Degree Name">Degree Name</label>
          <input
            name="degree"
            value={education[index].degree}
            onChange={e => this.handleChange(e, index)}
          />
          <label for="Year of passing">Year of passing</label>
          <input
            name="yop"
            value={education[index].yop}
            onChange={e => this.handleChange(e, index)}
          />
          <button
            style={{ marginRight: '5%' }}
            className="btn btn-danger float-right mb-2"
            onClick={() => this.deleteField(index)}
            disabled={this.props.educationFieldCount <= 1}
          >
            Delete
          </button>
        </>
      );
    }

    return fields;
  };

  addField = () => {
    this.props.updateEducationCount(this.props.educationFieldCount + 1);
  };

  deleteField = () => {
    this.props.deleteEducationCount(this.props.educationFieldCount - 1);
  };

  render() {
    return (
      <>
        <div className="container mx-auto">
          <div className="form-title">
            <span>Education</span>
          </div>
          <div className="row">
            <div className="col-md-11 mx-auto custom-column">
              <hr />
              <div className="form-block">
                <form>{this.renderEducation()}</form>
              </div>
              <hr />
              <button
                className="btn btn-success float-right"
                style={{ marginRight: '5%' }}
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
      </>
    );
  }
}

export default withRouter(Education);
