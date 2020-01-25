import { connect } from 'react-redux'
import Stepper from '../components/stepper/stepper'

const mapStateToProps = state => ({
  theme: state.utils.theme
})

const mapActionToProps = {}

export default connect(mapStateToProps, mapActionToProps)(Stepper)
