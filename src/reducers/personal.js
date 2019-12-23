import produce from 'immer'
import constants from '../constants/personal'

const initialState = {
  personal: {
    1: 'hello'
  }
}

export default produce((draft, action) => {
  switch (action.type) {
    case constants.UPDATE_PERSONAL_DETAIL:
      draft.personal[action.key] = action.value
      break
  }
}, initialState)
