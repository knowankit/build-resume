import constants from '../constants/utils'

export const updateUtil = (key, value) => {
  return {
    type: constants.UPDATE_THEME,
    key,
    value
  }
}
