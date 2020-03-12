import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateProfession, updateProfessionCount, deleteProfessionCount } from '../actions/profession'
import Profession from '../components/details/profession'

const mapStateToProps = state => ({
  profession: state.profession.profession,
  professionFieldCount: state.profession.professionFieldCount
})

const mapActionToProps = dispatch => bindActionCreators({
  updateProfession,
  updateProfessionCount,
  deleteProfessionCount
}, dispatch)

export default connect(mapStateToProps, mapActionToProps)(Profession)
