import { combineReducers } from 'redux'
import personal from '../reducers/personal'
import education from '../reducers/education'
import projects from '../reducers/projects'
import profession from '../reducers/profession'

const reducers = combineReducers({
  personal,
  education,
  projects,
  profession
})

export default reducers
