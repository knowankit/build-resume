import constants from '../constants/education'

export const updateEducation = (index, key, value) => {
  return {
    type: constants.UPDATE_EDUCATION_DETAIL,
    index,
    key,
    value
  }
}

export const updateEducationCount = (index) => {
  return {
    type: constants.UPDATE_EDUCATION_DETAIL_COUNT,
    index
  }
}

export const deleteEducationCount = (index) => {
  return {
    type: constants.DELETE_EDUCATION_DETAIL_COUNT,
    index
  }
}
