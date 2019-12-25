import constants from '../constants/profession'

export const updateProfession = (index, key, value) => {
  return {
    type: constants.UPDATE_PROFESSION_DETAIL,
    index,
    key,
    value
  }
}

export const updateProfessionCount = (index) => {
  return {
    type: constants.UPDATE_PROFESSION_DETAIL_COUNT,
    index
  }
}

export const deleteProfessionCount = (index) => {
  return {
    type: constants.DELETE_PROFESSION_DETAIL_COUNT,
    index
  }
}
