import constants from '../constants/utils'

export const updateUtil = (key, value) => {
  return {
    type: constants.UPDATE_THEME,
    key,
    value
  }
}

export const updateTheme = (value) => {
  return {
    type: constants.UPDATE_THEME_NAME,
    value
  }
}
