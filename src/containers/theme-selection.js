import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateTheme } from '../actions/utils'
import ThemeSelection from '../components/theme-selection'

const mapStateToProps = state => ({
})

const mapActionToProps = dispatch => bindActionCreators({
  updateTheme
}, dispatch)

export default connect(mapStateToProps, mapActionToProps)(ThemeSelection)
