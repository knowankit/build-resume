import { combineReducers } from 'redux'
import personal from '../reducers/personal'
import education from '../reducers/education'

const reducers = combineReducers({
  personal,
  education
})

export default reducers
