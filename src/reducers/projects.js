import produce from 'immer'
import constants from '../constants/projects'

const initialState = {
  projects: { 0: { title: '', description: '' } },
  projectFieldCount: 1
}

export default produce((draft, action) => {
  switch (action.type) {
    case constants.UPDATE_PROJECT_DETAIL:
      draft.projects[action.index][action.key] = action.value
      break
    case constants.UPDATE_PROJECT_DETAIL_COUNT:
      draft.projects[action.index - 1] = { title: '', description: '' }
      draft.projectFieldCount = action.index
      break
    case constants.DELETE_PROJECT_DETAIL_COUNT:
      delete draft.projects[action.index]
      draft.projectFieldCount = action.index
      break
  }
}, initialState)
