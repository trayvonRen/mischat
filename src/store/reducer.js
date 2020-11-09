import { combineReducers } from 'redux'
import { reducer as commonReducer } from './common'

export default combineReducers({
  common: commonReducer,
})
