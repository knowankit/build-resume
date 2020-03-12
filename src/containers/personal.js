import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updatePersonal } from '../actions/personal'
import Personal from '../components/details/personal'

const mapStateToProps = state => ({
  personal: state.personal.personal
})

const mapActionToProps = dispatch => bindActionCreators({
  updatePersonal
}, dispatch)

export default connect(mapStateToProps, mapActionToProps)(Personal)
