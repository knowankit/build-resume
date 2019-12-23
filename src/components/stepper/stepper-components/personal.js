import React, { Component } from 'react'
import { Form, Input } from 'antd'

class Personal extends Component {
  constructor() {
    super()
    console.log(this.props)
  }
  handleChange = (e) => {
  }
  render () {
    return (
      <div style={{ width: '600px' }} className='mx-auto'>
        <Form>
          <Form.Item label='Name' validateStatus='' required>
            <Input placeholder='name' name='name' value='name' />
          </Form.Item>

          <Form.Item label='Email' validateStatus='' required>
            <Input placeholder='email' name='email' />
          </Form.Item>
          <Form.Item label='Phone' validateStatus='' required>
            <Input placeholder='phone number' name='phone' />
          </Form.Item>
          <Form.Item label='Address Line 1' validateStatus=''>
            <Input placeholder='address line 1' name='address-line-1' maxLength='30' />
          </Form.Item>
          <Form.Item label='Address Line 2' validateStatus=''>
            <Input placeholder='address line 2' name='address-line-3' maxLength='30' />
          </Form.Item>
          <Form.Item label='Address Line 3' validateStatus=''>
            <Input placeholder='address line 3' name='address-line-3' maxLength='30' />
          </Form.Item>
        </Form>
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
      </div>
    )
  }
}

export default Personal
