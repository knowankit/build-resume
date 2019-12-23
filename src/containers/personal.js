import { connect } from 'react-redux'
import { updatePersonal } from '../actions/personal'
import Personal from '../components/stepper/stepper-components/personal'

const mapStateToProps = state => ({
  personal: state.personal.personal
})

const mapActionToProps = dispatch => ({
  updatePersonal
})

export default connect(mapStateToProps, {})(Personal)
