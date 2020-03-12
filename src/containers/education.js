import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateEducation, updateEducationCount, deleteEducationCount } from '../actions/education'
import Education from '../components/details/education'

const mapStateToProps = state => ({
  education: state.education.education,
  educationFieldCount: state.education.educationFieldCount
})

const mapActionToProps = dispatch => bindActionCreators({
  updateEducation,
  updateEducationCount,
  deleteEducationCount
}, dispatch)

export default connect(mapStateToProps, mapActionToProps)(Education)
