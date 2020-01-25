import produce from 'immer'
import constants from '../constants/education'

const initialState = {
  util: ''
}

export default produce((draft, action) => {
  switch (action.type) {
    case constants.UPDATE_THEME_NAME:
      draft.util = action.value
      break
  }
}, initialState)
