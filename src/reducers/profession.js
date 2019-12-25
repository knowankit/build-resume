import produce from 'immer'
import constants from '../constants/profession'

const initialState = {
  profession: { 0: { company: '', role: '', workOfTime: '' } },
  professionFieldCount: 1
}

export default produce((draft, action) => {
  switch (action.type) {
    case constants.UPDATE_PROFESSION_DETAIL:
      draft.profession[action.index][action.key] = action.value

      break
    case constants.UPDATE_PROFESSION_DETAIL_COUNT:
      draft.profession[action.index - 1] = { degree: '', yop: '' }
      draft.professionFieldCount = action.index
      break
    case constants.DELETE_PROFESSION_DETAIL_COUNT:
      delete draft.profession[action.index]
      draft.professionFieldCount = action.index
      break
  }
}, initialState)
