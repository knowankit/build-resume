import React, { Component } from 'react'
import { Form, Input, Button, Divider } from 'antd'

const { TextArea } = Input;

class Profession extends Component {
  handleChange = (e, index) => {
    this.props.updateProfession(index, e.target.name, e.target.value)
  }

  renderProjects = () => {
    const { profession, professionFieldCount } = this.props
    let fields = []
    for (let index = 0; index < professionFieldCount; index++) {
      fields.push(
      <>
        <Form.Item label='Company Name' validateStatus='' required>
          <Input placeholder='company name' name='company' value={profession[index].company} onChange={(e) => this.handleChange(e, index)} />
        </Form.Item>
        <Form.Item label='Role' validateStatus='' required>
          <TextArea rows={2} placeholder='role' name='role' value={profession[index].role} onChange={(e) => this.handleChange(e, index)} />
        </Form.Item>
        <Button type='danger' icon='delete' className='float-right mb-2' onClick={() => this.deleteField(index)} disabled={this.props.professionFieldCount <= 1}>
          Delete
        </Button>
      </>
      )
    }

    return fields
  }

  addField = () => {
    this.props.updateProfessionCount(this.props.professionFieldCount + 1)
  }

  deleteField = () => {
    this.props.deleteProfessionCount(this.props.professionFieldCount - 1)
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

export default Profession
