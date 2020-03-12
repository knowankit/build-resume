import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateProject, updateProjectCount, deleteProjectCount } from '../actions/projects'
import Projects from '../components/details/projects'

const mapStateToProps = state => ({
  projects: state.projects.projects,
  projectFieldCount: state.projects.projectFieldCount
})

const mapActionToProps = dispatch => bindActionCreators({
  updateProject,
  updateProjectCount,
  deleteProjectCount
}, dispatch)

export default connect(mapStateToProps, mapActionToProps)(Projects)
