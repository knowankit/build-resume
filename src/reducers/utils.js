import produce from 'immer'
import constants from '../constants/utils'

const initialState = {
  theme: ''
}

export default produce((draft, action) => {
  switch (action.type) {
    case constants.UPDATE_THEME_NAME:
      draft.theme = action.value
      break
  }
}, initialState)
