import constants from '../constants/personal'

export const updatePersonal = (key, value) => {
  return {
    type: constants.UPDATE_PERSONAL_DETAIL,
    key,
    value
  }
}
