import React, { Component } from 'react'
import { Form, Input, Button, Divider } from 'antd'

const { TextArea } = Input;
class Projects extends Component {
  handleChange = (e, index) => {
    this.props.updateProject(index, e.target.name, e.target.value)
  }

  renderProjects = () => {
    const { projects, projectFieldCount } = this.props
    let fields = []
    for (let index = 0; index < projectFieldCount; index++) {
      fields.push(
      <>
        <Form.Item label='Project Name' validateStatus='' required>
            <Input placeholder='project name' name='projectName' value={projects[index].projectName} onChange={(e) => this.handleChange(e, index)} />
          </Form.Item>
          <Form.Item label='Description' validateStatus='' required>
            <TextArea rows={2} placeholder='description' name='description' value={projects[index].description} onChange={(e) => this.handleChange(e, index)} />
          </Form.Item>
          <Button type='danger' icon='delete' className='float-right mb-2' onClick={() => this.deleteField(index)} disabled={this.props.projectFieldCount <= 1}>
        Delete
        </Button>
      </>
      )
    }

    return fields
  }

  addField = () => {
    this.props.updateProjectCount(this.props.projectFieldCount + 1)
  }

  deleteField = () => {
    this.props.deleteProjectCount(this.props.projectFieldCount - 1)
  }


  render () {
    return (
      <>
        <Form>
           {this.renderProjects()}
          <Divider />
        </Form>
        <Button type='secondary' icon='plus-circle' onClick={this.addField}>
          Add More
        </Button>
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
      )
  }
}

export default Projects
