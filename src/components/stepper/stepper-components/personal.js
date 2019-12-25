import React, { Component } from 'react'
import { Form, Input } from 'antd'

const { TextArea } = Input;
class Personal extends Component {
  handleChange = (e) => {
    this.props.updatePersonal(e.target.name, e.target.value)
  }
  render () {
    return (
      <div style={{ width: '600px' }} className='mx-auto'>
        <Form>
          <Form.Item label='Name' validateStatus='' required>
            <Input placeholder='name' name='name' value={this.props.personal.name} onChange={this.handleChange} />
          </Form.Item>

          <Form.Item label='Email' validateStatus='' required>
            <Input placeholder='email' name='email' value={this.props.personal.email} onChange={this.handleChange} />
          </Form.Item>
          <Form.Item label='Phone' validateStatus='' required>
            <Input placeholder='phone number' name='phone' value={this.props.personal.phone} onChange={this.handleChange} />
          </Form.Item>
           <Form.Item label='About Me' validateStatus='' required>
            <TextArea rows={3} placeholder='about me' name='aboutMe' value={this.props.personal.aboutMe} onChange={this.handleChange} />
          </Form.Item>
          <Form.Item label='Address Line 1' validateStatus=''>
            <Input placeholder='address line 1' name='addressLineFirst' maxLength='30' value='' onChange={this.handleChange} />
          </Form.Item>
          <Form.Item label='Address Line 2' validateStatus=''>
            <Input placeholder='address line 2' name='addressLineSecond' maxLength='30' value='' onChange={this.handleChange} />
          </Form.Item>
          <Form.Item label='Address Line 3' validateStatus=''>
            <Input placeholder='address line 3' name='addressLineThird' maxLength='30' value='' onChange={this.handleChange}/>
          </Form.Item>
        </Form>
        <style global jsx>
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
      </div>
    )
  }
}



export default Personal
