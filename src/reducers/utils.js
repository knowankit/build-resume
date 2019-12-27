import produce from 'immer'
import constants from '../constants/education'

const initialState = {
  util: ''
}

export default produce((draft, action) => {
  switch (action.type) {
    case constants.UPDATE_EDUCATION_DETAIL:
      draft.util[action.key] = action.value
      break
  }
}, initialState)
