import constants from '../constants/personal'

export const updatePersonal = (key, value) => {
  return {
    type: constants.FETCH_BRAINSTORMER_REQUEST,
    key,
    value
  }
}
