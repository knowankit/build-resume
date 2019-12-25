import React, { Component } from 'react'
// import { Steps, Icon } from 'antd'
import { Steps, Button, message } from 'antd'
import Personal from '../../containers/personal'
import Education from '../../containers/education'
import Professional from './stepper-components/professional'
import Projects from './stepper-components/projects'

const { Step } = Steps

const steps = [
  {
    title: 'Personal',
    content: 'Personal'
  },
  {
    title: 'Professional',
    content: 'Professional'
  },
  {
    title: 'Education',
    content: 'Education'
  },
  {
    title: 'Projects',
    content: 'Projects'
  }
]

class Stepper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      current: 2
    }
  }

  projectStepper (name) {
    switch (name) {
      case 'Personal':
        return <Personal />
      case 'Professional':
        return <Professional />
      case 'Education':
        return <Education />
      case 'Projects':
        return <Projects />
      default:
        return <span> No Components</span>
    }
  }

  next () {
    const current = this.state.current + 1
    this.setState({ current })
  }

  prev () {
    const current = this.state.current - 1
    this.setState({ current })
  }

  render () {
    const { current } = this.state
    return (
      <div className='mx-auto container stepper mt-4'>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className='steps-content'>
          {this.projectStepper(steps[current].title)}
        </div>
        <div className='steps-action mb-4 text-center'>
          {current < steps.length - 1 && (
            <Button type='primary' onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type='primary'
              onClick={() => message.success('Processing complete!')}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    )
  }
}

export default Stepper
