import { RECEIVE_USER } from '../actions/user_actions'
import {
  RECEIVE_CURRENT_USER, RECEIVE_ERRORS
} from '../actions/session_actions'

import merge from 'lodash/merge';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      console.log("1")
      return Object.assign({}, newState, { [action.user.id]: action.user });
    case RECEIVE_USER:
      console.log("2true")
      return action
    default:
      console.log("3")
      return oldState
  }
}

export default usersReducer