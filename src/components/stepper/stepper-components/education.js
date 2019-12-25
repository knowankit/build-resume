import React, { Component } from 'react'
import { Form, Input, Button, Divider } from 'antd'
class Education extends Component {
  componentDidMount () {
    console.log('edu', this.props.education)
  }
  handleChange = (e, index) => {
    this.props.updateEducation(index, e.target.name, e.target.value)
  }

  renderEducation = () => {
    const { education, educationFieldCount } = this.props
    let fields = []
    for (let index = 0; index < educationFieldCount; index++) {
      fields.push(
      <>
        <Form.Item label='Degree Name' validateStatus='' required>
            <Input placeholder='degree' name='degree' value={education[index].degree} onChange={(e) => this.handleChange(e, index)} />
          </Form.Item>
          <Form.Item label='Year of passing' validateStatus='' required>
            <Input placeholder='year of passing' name='yop' value={education[index].yop} onChange={(e) => this.handleChange(e, index)} />
          </Form.Item>
          <Button type='danger' className='float-right mb-2' onClick={() => this.deleteField(index)} disabled={this.props.educationFieldCount <= 1}>
        Delete
        </Button>
      </>
      )
    }

    return fields
  }

  addField = () => {
    this.props.updateEducationCount(this.props.educationFieldCount + 1)
  }

  deleteField = () => {
    this.props.deleteEducationCount(this.props.educationFieldCount - 1)
  }


  render () {
    return (
      <>
        <Form>
           {this.renderEducation()}
          <Divider />
        </Form>
        <Button type='secondary' onClick={this.addField}>
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

            form {

            }
          `}
        </style>
      </>
      )
  }
}

export default Education
