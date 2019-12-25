import produce from 'immer'
import constants from '../constants/education'

const initialState = {
  education: { 0: { degree: '', yop: '' } },
  educationFieldCount: 1
}

export default produce((draft, action) => {
  switch (action.type) {
    case constants.UPDATE_EDUCATION_DETAIL:

      // draft.education[action.index] = { degree: '', yop: '' }
      draft.education[action.index][action.key] = action.value

      break
    case constants.UPDATE_EDUCATION_DETAIL_COUNT:
      draft.education[action.index - 1] = { degree: '', yop: '' }
      draft.educationFieldCount = action.index
      break
    case constants.DELETE_EDUCATION_DETAIL_COUNT:
      delete draft.education[action.index]
      draft.educationFieldCount = action.index
      break
  }
}, initialState)
