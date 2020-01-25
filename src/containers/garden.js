import { connect } from 'react-redux'
import { Garden } from '../components/resume-themes'

const mapStateToProps = state => ({
  education: state.education.education,
  personal: state.personal.personal,
  profession: state.profession.profession,
  projects: state.projects.projects
})

const mapActionToProps = {}

export default connect(mapStateToProps, mapActionToProps)(Garden)
