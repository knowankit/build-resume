import React, { Component } from 'react'
import { Form, Input, Cascader, InputNumber } from 'antd'

class Personal extends Component {
  render () {
    return (
      <div style={{ width: '600px' }} className='mx-auto'>
        <Form>
          <Form.Item label='Name' validateStatus='' required>
            <Input placeholder='unavailable choice' id='error' />
          </Form.Item>

          <Form.Item label='Email' validateStatus='' required>
            <Input placeholder='email' />
          </Form.Item>

          <Form.Item
            label='Validating'
            hasFeedback
            validateStatus='validating'
            help='The information is being validated...'
          >
            <Input
              placeholder="I'm the content is being validated"
              id='validating'
            />
          </Form.Item>

          <Form.Item label='Success' hasFeedback validateStatus='success'>
            <Input placeholder="I'm the content" id='success' />
          </Form.Item>

          <Form.Item label='Warning' hasFeedback validateStatus='warning'>
            <Input placeholder='Warning' id='warning2' />
          </Form.Item>

          <Form.Item
            label='Fail'
            hasFeedback
            validateStatus='error'
            help='Should be combination of numbers alphabets'
          >
            <Input placeholder='unavailable choice' id='error2' />
          </Form.Item>

          <Form.Item
            label='Validating'
            hasFeedback
            validateStatus='validating'
            help='The information is being validated...'
          >
            <Cascader defaultValue={['1']} options={[]} />
          </Form.Item>
          <Form.Item label='Success' hasFeedback validateStatus='success'>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Personal
