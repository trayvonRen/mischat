import { actionTypes } from './index'

const defaultState = {
  userMessage: {},
}

const Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_SUCCESS:
      return Object.assign({}, state, action.userData)
    default:
      return state
  }
}

export default Reducer
