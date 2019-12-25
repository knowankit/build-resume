import constants from '../constants/projects'

export const updateProject = (index, key, value) => {
  return {
    type: constants.UPDATE_PROJECT_DETAIL,
    index,
    key,
    value
  }
}

export const updateProjectCount = (index) => {
  return {
    type: constants.UPDATE_PROJECT_DETAIL_COUNT,
    index
  }
}

export const deleteProjectCount = (index) => {
  return {
    type: constants.DELETE_PROJECT_DETAIL_COUNT,
    index
  }
}
