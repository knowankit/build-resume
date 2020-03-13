import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

class Projects extends Component {
  handleChange = (e, index) => {
    this.props.updateProject(index, e.target.name, e.target.value);
  };

  handleSubmit = type => {
    if (type === "prev") {
      this.props.history.push("/education");
    } else {
      this.props.history.push("/garden");
    }
  };

  renderProjects = () => {
    const { projects, projectFieldCount } = this.props;
    let fields = [];
    for (let index = 0; index < projectFieldCount; index++) {
      fields.push(
        <>
          <label for={`Project Name ${index + 1}`}>{`Project Name ${index +
            1}`}</label>
          <input
            value={projects[index].projectName}
            onChange={e => this.handleChange(e, index)}
          />
          <label for="Description">Description</label>
          <textArea
            rows={2}
            name="description"
            value={projects[index].description}
            onChange={e => this.handleChange(e, index)}
          />
          <button
            style={{ marginRight: "5%" }}
            onClick={this.addField}
            className="btn btn-danger float-right mb-2"
            onClick={() => this.deleteField(index)}
            disabled={this.props.projectFieldCount <= 1}
          >
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
        </>
      );
    }

    return fields;
  };

  addField = () => {
    this.props.updateProjectCount(this.props.projectFieldCount + 1);
  };

  deleteField = () => {
    this.props.deleteProjectCount(this.props.projectFieldCount - 1);
  };

  render() {
    return (
      <>
        <div className="container mx-auto">
          <div className="form-title">
            <span>Projects</span>
          </div>

          <div className="row">
            <div className="col-md-11 mx-auto custom-column">

              <div>
                <form>{this.renderProjects()}</form>
              </div>
              <hr />
              <button
                style={{ marginRight: "5%" }}
                onClick={this.addField}
                className="btn btn-light float-right"
                onClick={this.addField}
              >
                 <FontAwesomeIcon icon={faPlus} /> Add More
              </button>
            </div>
          </div>
          <div className="button-group">
            <button
              className="btn btn-dark"
              onClick={() => this.handleSubmit("prev")}
            >
               <FontAwesomeIcon icon={faArrowLeft} /> Previous
            </button>
            <button
              className="btn btn-success"
              onClick={() => this.handleSubmit("next")}
            >
              Next <FontAwesomeIcon icon={faArrowRight} />
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

export default withRouter(Projects);
