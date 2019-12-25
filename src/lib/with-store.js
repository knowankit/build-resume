import { combineReducers } from 'redux'
import personal from '../reducers/personal'
import education from '../reducers/education'
import projects from '../reducers/projects'

const reducers = combineReducers({
  personal,
  education,
  projects
})

export default reducers
